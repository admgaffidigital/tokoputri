const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./module-pos-BTl17EoF.js","./module-print-BpWwhM5r.js","./vendor-firebase-core-D2OF5R23.js","./vendor-firebase-db-BIUZcnOd.js","./module-member-CAQAJI4a.js","./module-faq-BOdOcpfz.js","./expenses-D6-Kp1_a.js","./vendor-sortable-DzmX_rHT.js","./delivery-BmHWCKAX.js","./returns-ByHxB36l.js","./reports-Ch5qwaRr.js","./purchases-BuuamdRe.js","./flash-sale-5QLNYNUM.js","./suppliers-x3899QWH.js","./stock-opname-Bx0KpKri.js","./pos-cashier-admin-DddlzbRr.js","./backup-sync-Dvuv86km.js"])))=>i.map(i=>d[i]);
import{q as P,A as Z,a as l,e as k,C as pt,f as g,k as x,D as Wr,E as ye,R as Ue,F as rt,G as z,H as ce,b as _,l as R,n as C,s as We,h as nt,I as qr,g as T,J as sa,K as Wa,_ as J,L as Me,M as dt,N as Ae,O as ot,P as Te,Q as lt,S as Jr,T as ts,u as D,U as Bt,V as Ce,W as zr,X as ra,Y as Qr,Z as as,i as u,$ as Yr,o as pe,v as Y,a0 as qa,a1 as Ee,a2 as Xr,m as we,a3 as Ke,a4 as Zr,a5 as mt,a6 as ss,a7 as na,a8 as eo,a9 as to,aa as ao,ab as so,ac as $t,ad as Ja,z as rs,ae as za,af as Qa,ag as ro,ah as oo}from"./module-print-BpWwhM5r.js";import{f as Be}from"./vendor-firebase-core-D2OF5R23.js";import{a as oa,d as lo,c as io,s as N,u as Pt,g as no,b as co,e as os,f as ls,h as po,i as Lt,j as is,n as da,l as mo,k as uo,t as bo,m as xo,o as ns,p as fo,r as Ya,q as Rt,v as go}from"./module-pos-BTl17EoF.js";import{S as ko}from"./vendor-sortable-DzmX_rHT.js";import{g as ca,a as ho}from"./module-faq-BOdOcpfz.js";let it=null,At=!1,la=!1,ia=0;const It=e=>{la=!!e,typeof window<"u"&&(window.__isLoggingIn=la)},pa=()=>la||typeof window<"u"&&!!window.__isLoggingIn,ds=()=>{if(typeof navigator>"u")return"Perangkat Lain";const e=navigator.userAgent||"",t=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e);let a="Perangkat";/iPhone|iPad|iPod/i.test(e)?a="iPhone/iPad":/Android/i.test(e)?a="HP Android":/Windows/i.test(e)?a="Desktop Windows":/Mac/i.test(e)?a="Mac/MacBook":/Linux/i.test(e)?a="Linux PC":a=t?"Smartphone":"Komputer Desktop";let r="Browser";return/Edg/i.test(e)?r="Edge":/Chrome/i.test(e)?r="Chrome":/Safari/i.test(e)?r="Safari":/Firefox/i.test(e)&&(r="Firefox"),`${a} (${r})`},Se=async(e=null)=>{const t=typeof P<"u"&&P?P:window.db;if(!t)return null;const a=e||localStorage.getItem("freshmart_admin_session_id")||"sess_"+Date.now()+"_"+Math.random().toString(36).substring(2,9),r=ds();try{return localStorage.setItem("freshmart_admin_session_id",a),await t.collection("freshmart").doc("cms_data").collection("admin_session").doc("active").set({sessionId:a,deviceName:r,loginAt:Be.firestore.FieldValue.serverTimestamp(),lastActive:Be.firestore.FieldValue.serverTimestamp()}),At=!1,ia=Date.now(),a}catch(s){return console.warn("Gagal mengklaim sesi admin aktif:",s),null}},ma=e=>{let t=document.getElementById("session-kicked-modal");t||(t=document.createElement("div"),t.id="session-kicked-modal",t.className="fixed inset-0 z-[150] bg-slate-900/80 flex items-center justify-center p-4 transition-opacity duration-300",document.body.appendChild(t)),t.innerHTML=`
        <div class="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 max-w-md w-full border border-rose-200 dark:border-rose-900/50 shadow-2xl text-center flex flex-col items-center">
            <div class="w-16 h-16 rounded-full bg-rose-50 dark:bg-rose-900/30 border border-rose-200 dark:border-rose-800 text-rose-500 flex items-center justify-center text-2xl mb-4 shadow-sm animate-bounce">
                <i class="fa-solid fa-right-from-bracket"></i>
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-slate-800 dark:text-white mb-2">
                Sesi Anda Telah Diakhiri
            </h3>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                Akun Admin baru saja login dari perangkat lain:
                <br>
                <b class="text-rose-600 dark:text-rose-400 font-bold bg-rose-50 dark:bg-rose-900/20 px-2.5 py-1 rounded-lg mt-1.5 inline-block">${e||"Perangkat Lain"}</b>
            </p>
            <p class="text-[11px] text-slate-400 dark:text-slate-500 mb-6 leading-normal bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                <i class="fa-solid fa-shield-halved text-amber-500 mr-1"></i>
                Untuk mencegah konflik data dan menjaga keamanan toko, sistem hanya mengizinkan 1 perangkat aktif mengelola CMS pada satu waktu.
            </p>
            <button id="btn-session-kicked-ok" class="btn-primary w-full py-3.5 text-sm !rounded-xl font-bold flex items-center justify-center gap-2 shadow-glow">
                <i class="fa-solid fa-arrow-left"></i> Kembali ke Toko
            </button>
        </div>
    `,t.style.display="flex",t.style.opacity="1",typeof window.pushModalHistory=="function"&&window.pushModalHistory("sessionKicked");const a=document.getElementById("btn-session-kicked-ok");a&&(a.onclick=()=>{ua()})},ua=(e=!1)=>{const t=()=>{const a=document.getElementById("session-kicked-modal");a&&(a.style.opacity="0",setTimeout(()=>{a.parentNode&&a.remove()},250))};!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("sessionKicked",!1,t):t()};typeof window<"u"&&(window.showSessionKickedModal=ma,window.closeSessionKickedModal=ua);const ut=()=>{if(it)return;const e=typeof P<"u"&&P?P:window.db;!e||!localStorage.getItem("freshmart_admin_session_id")||(At=!1,it=e.collection("freshmart").doc("cms_data").collection("admin_session").doc("active").onSnapshot(async a=>{if(!a.exists)return;const r=a.data(),s=r.sessionId,o=localStorage.getItem("freshmart_admin_session_id");if(!(ia&&Date.now()-ia<2e3)&&s&&o&&s!==o){if(At)return;At=!0,bt(),localStorage.removeItem("freshmart_admin_session_id");const i=r.deviceName||"Perangkat Lain";try{if(window.isAdm=!1,window.__localIsAdm=!1,typeof window.detachAllAdminListenersBeforeSignOut=="function")try{window.detachAllAdminListenersBeforeSignOut()}catch{}else{if(typeof window.detachActiveShiftListener=="function")try{window.detachActiveShiftListener()}catch{}if(typeof window.detachPOSHistoryListener=="function")try{window.detachPOSHistoryListener()}catch{}if(typeof window.detachPrivateDataListener=="function")try{window.detachPrivateDataListener()}catch{}}Z&&typeof Z.signOut=="function"&&await Z.signOut()}catch{}typeof window.changeView=="function"&&window.changeView("view-catalog"),ma(i)}},a=>{a?.code!=="permission-denied"&&!a?.message?.includes("insufficient permissions")&&console.warn("Admin session guard listener error:",a)}))},bt=()=>{it&&(it(),it=null)},ba=async()=>{if(pa())return!0;const e=typeof P<"u"&&P?P:window.db;if(!e)return!0;const t=typeof window<"u"&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"),a=localStorage.getItem("freshmart_admin_session_id");if(!a)try{const r=await e.collection("freshmart").doc("cms_data").collection("admin_session").doc("active").get();if(!r.exists){try{await Se()}catch{}return!0}const s=r.data()||{},o=s.lastActive?.toMillis?s.lastActive.toMillis():s.loginAt?.toMillis?s.loginAt.toMillis():0,i=(Date.now()-o)/(60*60*1e3);if(t||i>1){try{await Se()}catch{}return!0}try{await Se()}catch{}return!0}catch{return!0}try{const r=await e.collection("freshmart").doc("cms_data").collection("admin_session").doc("active").get();if(!r.exists){try{await Se(a)}catch{}return!0}if(r.data().sessionId===a){try{await e.collection("freshmart").doc("cms_data").collection("admin_session").doc("active").update({lastActive:Be.firestore.FieldValue.serverTimestamp()})}catch{}return!0}try{await Se(a)}catch{}return!0}catch{return!0}};typeof window<"u"&&(window.claimAdminSession=Se,window.attachAdminSessionGuard=ut,window.detachAdminSessionGuard=bt,window.isCurrentSessionActive=ba,window.setLoggingIn=It,window.isLoggingIn=pa);const Nt={products:[{key:"name",label:"Nama Produk",type:"text"},{key:"sku",label:"Barcode / SKU (Kosongkan utk Auto)",type:"text"},{key:"price",label:"Harga Jual Promo (Rp)",type:"number"},{key:"priceNormal",label:"Harga Coret / Normal (Rp) - Opsional",type:"number"},{key:"hpp",label:"Harga Modal / HPP (Rp) — Hanya Seller",type:"number"},{key:"poin",label:"Poin Member (per unit terjual, Produk Tanpa Varian)",type:"number"},{key:"storeStock",label:"Stok Rak Toko / Etalase (Qty)",type:"number"},{key:"warehouseStock",label:"Stok Gudang Cadangan (Qty)",type:"number"},{key:"stock",label:"Total Stok Gabungan (Toko + Gudang)",type:"number"},{key:"unit",label:"Satuan Dasar (Cth: Pcs, Kg)",type:"text"},{key:"poTime",label:"Estimasi Pre-Order (Opsional)",type:"text"},{key:"video",label:"Link Video YouTube (Opsional)",type:"text"},{key:"img",label:"URL Gambar",type:"text"},{key:"category",label:"Kategori",type:"dynamic_select_category"},{key:"subCategory",label:"Jenis / Sub-Kategori (Cth: Cat Tembok, Pipa PVC, Power Tools)",type:"text"},{key:"brand",label:"Merek",type:"dynamic_select_brand"},{key:"supplierId",label:"Supplier / Rekanan Pemasok",type:"dynamic_select_supplier"},{key:"tag",label:"Label/Tag",type:"text"},{key:"isActive",label:"Status",type:"select",options:[{val:"true",text:"Tersedia"},{val:"false",text:"Habis"}]},{key:"desc",label:"Deskripsi Lengkap",type:"richtext"},{key:"specTable",label:"Tabel Spesifikasi (Opsional)",type:"spec_table_builder"},{key:"wholesale",label:"Grosir Eceran",type:"wholesale_builder"},{key:"multiUnits",label:"Multi-Satuan Kemasan Bertingkat (Opsional)",type:"multi_units_builder"},{key:"variants",label:"Varian",type:"variants_builder"}],suppliers:[{key:"code",label:"Kode Supplier (Cth: SUP-001)",type:"text"},{key:"name",label:"Nama Perusahaan / Supplier",type:"text"},{key:"picName",label:"Nama Sales / Kontak PIC",type:"text"},{key:"phone",label:"Nomor WhatsApp / Telp Sales",type:"text"},{key:"city",label:"Kota / Wilayah",type:"text"},{key:"address",label:"Alamat Kantor / Gudang",type:"textarea"},{key:"bankName",label:"Nama Bank Rekening",type:"text"},{key:"bankAccount",label:"Nomor Rekening",type:"text"},{key:"bankHolder",label:"Atas Nama Pemilik Rekening",type:"text"},{key:"defaultTerm",label:"Termin / Cara Bayar Default",type:"select",options:[{val:"cash",text:"Cash / Tunai / Transfer"},{val:"tempo_7",text:"Tempo 7 Hari"},{val:"tempo_14",text:"Tempo 14 Hari"},{val:"tempo_30",text:"Tempo 30 Hari"},{val:"tempo_60",text:"Tempo 60 Hari"},{val:"konsinyasi",text:"Konsinyasi / Barang Titipan"}]},{key:"notes",label:"Catatan / Jadwal Rutin Kunjungan Sales",type:"textarea"}],colors:[{key:"name",label:"Nama Warna",type:"text"},{key:"hex",label:"Kode Warna (Hex) - Opsional",type:"text"},{key:"catalog",label:"Katalog / Merek (Contoh: No Drop)",type:"text"}],categories:[{key:"name",label:"Nama Kategori",type:"text"},{key:"img",label:"URL Ikon / Gambar (Opsional)",type:"text"},{key:"subCategories",label:"Daftar Sub-Kategori / Kelompok Jenis",type:"subcategories_builder"}],brands:[{key:"name",label:"Nama Merek",type:"text"},{key:"img",label:"URL Logo Merek",type:"text"}],banks:[{key:"bankName",label:"Nama Bank",type:"text"},{key:"bankAccount",label:"No. Rekening",type:"text"},{key:"bankOwner",label:"Atas Nama",type:"text"}],customers:[{key:"name",label:"Nama Lengkap",type:"text"},{key:"phone",label:"No. WhatsApp Aktif (Cth: 081234567890)",type:"text"},{key:"points",label:"Poin Member (Penyesuaian Manual)",type:"number"},{key:"paylaterActive",label:"Status Putri PayLater",type:"select",options:[{val:"false",text:"Nonaktif (Belum Disetujui)"},{val:"true",text:"Aktif (Diberikan Limit)"}]},{key:"paylaterLimit",label:"Plafon Limit PayLater (Rp)",type:"number"},{key:"paylaterDueDay",label:"Tanggal Jatuh Tempo Bulanan (1-28, default 5)",type:"number"},{key:"paylaterUsed",label:"Limit Terpakai Saat Ini (Rp)",type:"number"}],rewards:[{key:"name",label:"Nama Hadiah",type:"text"},{key:"img",label:"URL Gambar Hadiah",type:"text"},{key:"pointsCost",label:"Poin yang Dibutuhkan",type:"number"},{key:"stock",label:"Stok Hadiah Tersedia",type:"number"},{key:"isActive",label:"Status",type:"select",options:[{val:"true",text:"Aktif (Bisa Ditukar)"},{val:"false",text:"Nonaktif"}]}],banners:[{key:"title",label:"Judul Banner",type:"text"},{key:"desc",label:"Deskripsi Pendek (Opsional)",type:"textarea"},{key:"type",label:"Tipe Banner",type:"select",options:[{val:"image",text:"Gambar (Default)"},{val:"video",text:"Video (Drive / YouTube / MP4)"}]},{key:"img",label:"URL Gambar (jika Tipe = Gambar)",type:"text"},{key:"videoUrl",label:"URL / Link Video (Google Drive, YouTube, atau MP4)",type:"text"},{key:"link",label:"Link Tujuan Klik (Opsional)",type:"text"}],vouchers:[{key:"code",label:"Kode Voucher (Cth: MERDEKA50)",type:"text"},{key:"type",label:"Jenis Diskon",type:"select",options:[{val:"percent",text:"Potongan Persen (%)"},{val:"flat",text:"Potongan Rupiah (Rp)"},{val:"shipping_free",text:"Gratis Ongkir (100%)"},{val:"shipping_flat",text:"Potongan Ongkir (Rp)"}]},{key:"value",label:"Nilai Potongan (Contoh: 50 untuk %, atau 10000 untuk Rp)",type:"number"},{key:"minPurchase",label:"Syarat Minimal Belanja (Rp) - 0 Jika Tidak Ada",type:"number"},{key:"maxDiscount",label:"Maksimal Nominal Potongan (Rp) - Khusus Tipe Persen",type:"number"},{key:"targetProduct",label:"Target Produk Spesifik (Pilih jika berlaku khusus)",type:"dynamic_select_products"},{key:"isShow",label:"Tampilkan di Beranda?",type:"select",options:[{val:"true",text:"Ya, Tampilkan Promo"},{val:"false",text:"Sembunyikan"}]}]};window.aF=Nt;const wo=[{key:"gaji",label:"Gaji & Tunjangan Staf",icon:"fa-user-tie",color:"blue"},{key:"kasbon",label:"Kasbon & Pinjaman Karyawan",icon:"fa-hand-holding-dollar",color:"indigo"},{key:"listrik",label:"Listrik, Air & Wifi Toko",icon:"fa-bolt",color:"amber"},{key:"sewa",label:"Sewa Ruko / Tempat Usaha",icon:"fa-shop",color:"purple"},{key:"transport",label:"Bensin & Transportasi",icon:"fa-van-shuttle",color:"emerald"},{key:"kemasan",label:"Kemasan / Lakban / Plastik",icon:"fa-box",color:"orange"},{key:"perawatan",label:"Pemeliharaan Toko & Alat",icon:"fa-screwdriver-wrench",color:"cyan"},{key:"lainnya",label:"Biaya Operasional Lainnya",icon:"fa-receipt",color:"slate"}];let st=null,Xa=0;const vo=60*1e3,yo=()=>{const e=new Date,t=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return`${t}-${a}-${r}`},cs=async(e=!1)=>{const t=Date.now();if(!e&&st&&t-Xa<vo)return st;const a=yo(),s=(Array.isArray(l.expenses)?l.expenses:[]).filter(b=>b&&b.date===a),o=s.reduce((b,f)=>b+(parseFloat(f.amount)||0),0),i=s.length;let n=0,p=0,d=0;try{if(Z.currentUser){const b=new Date;b.setHours(0,0,0,0);const f=await P.collection("freshmart_orders").where("timestamp",">=",Be.firestore.Timestamp.fromDate(b)).get().catch(()=>null);f&&!f.empty&&f.forEach(h=>{const w=h.data();if(!w||w.status==="Dibatalkan"||w.status==="Test")return;d++;const v=parseFloat(w.payment?.finalAmount??w.payment?.total??w.total)||0,S=String(w.payment?.method||w.paymentMethod||"cash").toLowerCase();if(S==="cash"||S==="tunai")n+=v;else if(S==="tempo"){const $=parseFloat(w.payment?.dpAmount||w.payment?.amountPaid)||0;if($>0){const B=String(w.payment?.dpMethod||"cash").toLowerCase();B==="cash"||B==="tunai"?n+=$:p+=$}}else p+=v})}}catch(b){console.warn("[DashboardCashflow] Menggunakan kalkulasi lokal/offline:",b)}const c=n+p,m=c-o;return st={todayStr:a,totalCashToday:n,totalBankToday:p,totalInflowToday:c,totalExpenseToday:o,netCashFlowToday:m,todayOrderCount:d,expenseCountToday:i},Xa=t,st},Dt=async(e=!1)=>{const t=k("admin-dashboard-cashflow-slot");if(!t)return;if(!pt("view_reports")){t.classList.add("hidden"),t.innerHTML="";return}t.classList.remove("hidden"),(!st||e)&&(t.innerHTML=`
            <div class="bento-island-card rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 p-5 bg-white dark:bg-slate-900 shadow-xs mb-7 text-center">
                <div class="flex items-center justify-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400">
                    <i class="fa-solid fa-spinner fa-spin text-sm" style="color:var(--color-primary)"></i>
                    <span>Memuat Ringkasan Arus Kas Hari Ini...</span>
                </div>
            </div>
        `);const a=await cs(e),s=a.netCashFlowToday>=0?"text-emerald-600 dark:text-emerald-400":"text-rose-600 dark:text-rose-400";t.innerHTML=`
        <div class="mb-7 space-y-3">
            <!-- Header Widget Arus Kas (Anti-Wrap, Anti-Tumpuk & Seimbang di Segala Resolusi) -->
            <div class="flex items-center justify-between gap-2 px-1">
                <div class="flex items-center gap-2 min-w-0">
                    <div class="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold border shadow-2xs shrink-0 border-[rgba(var(--color-primary-rgb),0.25)] dark:border-rose-500/30 bg-[rgba(var(--color-primary-rgb),0.12)] dark:bg-rose-950/40 text-[var(--color-primary)] dark:text-rose-400">
                        <i class="fa-solid fa-vault"></i>
                    </div>
                    <div class="min-w-0">
                        <h3 class="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5 whitespace-nowrap">
                            <span>Arus Kas Hari Ini</span>
                            <span class="hidden sm:inline text-[10px] font-bold text-slate-400 normal-case whitespace-nowrap">(${a.todayStr})</span>
                        </h3>
                    </div>
                </div>

                <div class="flex items-center gap-1.5 sm:gap-2 shrink-0 whitespace-nowrap">
                    <button type="button" onclick="window.refreshDashboardCashflow()" class="h-8 px-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold transition-all active:scale-95 cursor-pointer inline-flex items-center gap-1.5 shrink-0 whitespace-nowrap shadow-2xs" title="Perbarui Ringkasan Kas Hari Ini">
                        <i class="fa-solid fa-arrows-rotate text-xs shrink-0 text-slate-500 dark:text-slate-400" id="dashboard-cashflow-refresh-icon"></i>
                        <span class="text-[11px] whitespace-nowrap">Segarkan</span>
                    </button>
                    <button type="button" onclick="if(window.openAdminTab) window.openAdminTab('reports')" class="h-8 px-2.5 rounded-xl border font-bold text-xs transition-all active:scale-95 cursor-pointer inline-flex items-center gap-1 shrink-0 whitespace-nowrap shadow-2xs border-[rgba(var(--color-primary-rgb),0.25)] dark:border-rose-500/40 bg-[rgba(var(--color-primary-rgb),0.12)] dark:bg-rose-950/40 text-[var(--color-primary)] dark:text-rose-300 hover:brightness-110" title="Buka Pusat Laporan Keuangan Lengkap">
                        <span class="text-[11px] whitespace-nowrap">Laporan P&amp;L</span>
                        <i class="fa-solid fa-chevron-right text-[9px] shrink-0"></i>
                    </button>
                </div>
            </div>

            <!-- Bento 4-Card Cash Flow Grid (100% Solid & Clean) -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5">
                <!-- 1. KAS TUNAI HARI INI -->
                <div class="bento-island-card card-modern p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between transition-all hover:-translate-y-0.5">
                    <div class="flex items-center justify-between mb-3">
                        <span class="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 whitespace-nowrap truncate">Kas Tunai (Laci)</span>
                        <div class="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-xs shadow-xs shrink-0">
                            <i class="fa-solid fa-money-bill-wave"></i>
                        </div>
                    </div>
                    <div>
                        <p class="text-lg sm:text-xl font-black text-emerald-600 dark:text-emerald-400 tracking-tight truncate">${g(a.totalCashToday)}</p>
                        <div class="flex items-center justify-between mt-2.5 pt-1.5 border-t border-slate-100 dark:border-slate-700/50 text-[10px] font-bold text-slate-400 gap-1">
                            <span class="truncate">Pembayaran Tunai</span>
                            <button type="button" onclick="if(window.openAdminTab) window.openAdminTab('pos')" class="hover:text-emerald-500 hover:underline cursor-pointer whitespace-nowrap shrink-0">Buka POS &rarr;</button>
                        </div>
                    </div>
                </div>

                <!-- 2. TRANSFER BANK & QRIS HARI INI -->
                <div class="bento-island-card card-modern p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between transition-all hover:-translate-y-0.5">
                    <div class="flex items-center justify-between mb-3">
                        <span class="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 whitespace-nowrap truncate">Bank &amp; QRIS</span>
                        <div class="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center text-xs shadow-xs shrink-0">
                            <i class="fa-solid fa-building-columns"></i>
                        </div>
                    </div>
                    <div>
                        <p class="text-lg sm:text-xl font-black text-blue-600 dark:text-sky-400 tracking-tight truncate">${g(a.totalBankToday)}</p>
                        <div class="flex items-center justify-between mt-2.5 pt-1.5 border-t border-slate-100 dark:border-slate-700/50 text-[10px] font-bold text-slate-400 gap-1">
                            <span class="truncate">Rekening Riil Toko</span>
                            <button type="button" onclick="if(window.openAdminTab) window.openAdminTab('orders')" class="hover:text-blue-500 hover:underline cursor-pointer whitespace-nowrap shrink-0">Pesanan &rarr;</button>
                        </div>
                    </div>
                </div>

                <!-- 3. PENGELUARAN TOKO HARI INI -->
                <div class="bento-island-card card-modern p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between transition-all hover:-translate-y-0.5">
                    <div class="flex items-center justify-between mb-3">
                        <span class="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 whitespace-nowrap truncate">Pengeluaran</span>
                        <div class="w-8 h-8 rounded-xl bg-rose-600 text-white flex items-center justify-center text-xs shadow-xs shrink-0">
                            <i class="fa-solid fa-money-bill-transfer"></i>
                        </div>
                    </div>
                    <div>
                        <p class="text-lg sm:text-xl font-black text-rose-600 dark:text-rose-400 tracking-tight truncate">${g(a.totalExpenseToday)}</p>
                        <div class="flex items-center justify-between mt-2.5 pt-1.5 border-t border-slate-100 dark:border-slate-700/50 text-[10px] font-bold text-slate-400 gap-1">
                            <span class="truncate">${a.expenseCountToday} beban hari ini</span>
                            <button type="button" onclick="if(window.openExpenseModal) window.openExpenseModal(); else if(window.openAdminTab) window.openAdminTab('expenses')" class="hover:text-rose-500 hover:underline cursor-pointer whitespace-nowrap shrink-0">+ Catat &rarr;</button>
                        </div>
                    </div>
                </div>

                <!-- 4. ARUS KAS BERSIH HARI INI -->
                <div class="bento-island-card card-modern p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between transition-all hover:-translate-y-0.5">
                    <div class="flex items-center justify-between mb-3">
                        <span class="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 whitespace-nowrap truncate">Arus Kas Bersih</span>
                        <div class="w-8 h-8 rounded-xl text-white flex items-center justify-center text-xs shadow-xs shrink-0" style="background: var(--color-primary)">
                            <i class="fa-solid fa-scale-balanced"></i>
                        </div>
                    </div>
                    <div>
                        <p class="text-lg sm:text-xl font-black tracking-tight truncate ${s}">${g(a.netCashFlowToday)}</p>
                        <div class="flex items-center justify-between mt-2.5 pt-1.5 border-t border-slate-100 dark:border-slate-700/50 text-[10px] font-bold text-slate-400 gap-1">
                            <span class="truncate">(Kas + Bank) − Beban</span>
                            <button type="button" onclick="if(window.openAdminTab) window.openAdminTab('reports')" class="hover:opacity-80 hover:underline cursor-pointer whitespace-nowrap shrink-0 font-bold text-[var(--color-primary)] dark:text-rose-300" title="Buka Laporan Keuangan">Analisis &rarr;</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `};window.refreshDashboardCashflow=async()=>{const e=k("dashboard-cashflow-refresh-icon");e&&e.classList.add("fa-spin"),await Dt(!0),e&&e.classList.remove("fa-spin"),x("Ringkasan arus kas berhasil diperbarui","info")};window.renderDashboardCashflowWidget=Dt;const ps=()=>{const e=k("admin-dashboard-view");if(!e)return;const t={orders:"orders",products:"products",suppliers:"suppliers",purchases:"purchases",settings:"settings",categories:"categories",brands:"brands",colors:"colors",vouchers:"vouchers",banks:"banks",banners:"banners",customers:"customers",rewards:"rewards",reviews:"reviews",faqs:"faqs",reports:"reports",tax:"reports",expenses:"expenses",stock_opname:"stock_opname",returns:"returns",piutang:"piutang",changelog:"changelog",pos:"pos",cashiers:"cashiers",backup_sync:"backup_sync"};e.querySelectorAll('button[onclick*="openAdminTab"]').forEach(d=>{const m=(d.getAttribute("onclick")||"").match(/openAdminTab\(['"]([^'"]+)['"]\)/);if(m&&m[1]){const b=m[1],f=t[b]||b;pt(f)?(d.classList.remove("hidden"),d.style.display=""):(d.classList.add("hidden"),d.style.display="none")}});const r=Wr(),s=k("admin-header-role-badge"),o=k("admin-header-title"),i=k("admin-dashboard-welcome-title"),n=k("admin-dashboard-welcome-tag"),p=k("admin-dashboard-welcome-desc");if(ye())s&&(s.innerHTML='<span class="inline-flex items-center gap-1 text-[9px] font-black uppercase text-amber-300 drop-shadow-xs"><i class="fa-solid fa-crown text-[8px]"></i> Owner</span>'),o&&(o.textContent="CMS OWNER"),i&&(i.innerHTML='Selamat Datang, Pemilik Toko! <i class="fa-solid fa-crown text-amber-500 dark:text-amber-400 text-lg drop-shadow-xs"></i>'),n&&(n.textContent="Panel Kontrol Owner"),p&&(p.textContent="Akses penuh seluruh operasional, keuangan, dan pengaturan Toko Putri.");else if(r?.role===Ue.ADMIN){const d=r.name||"Admin";s&&(s.innerHTML=`<span class="inline-flex items-center gap-1 text-[9px] font-black uppercase text-blue-200 drop-shadow-xs"><i class="fa-solid fa-shield-halved text-[8px]"></i> Admin (${d})</span>`),o&&(o.textContent="CMS ADMIN"),i&&(i.innerHTML=`Selamat Datang, ${d}! <i class="fa-solid fa-shield-halved text-blue-500 dark:text-blue-400 text-lg drop-shadow-xs"></i>`),n&&(n.textContent="Panel Operasional Admin"),p&&(p.textContent="Kelola pesanan, katalog produk, dan aktivitas harian toko.")}else s&&(s.innerHTML='<span class="text-[9px] font-bold uppercase text-white/90">Staf Toko</span>'),o&&(o.textContent="CMS TOKO"),i&&(i.innerHTML="Selamat Datang!"),n&&(n.textContent="Panel Kontrol Toko Putri ( Official Store )"),p&&(p.textContent="Kelola produk, pesanan, dan seluruh operasional toko dari satu tempat.")},qe=()=>{if(typeof window.detachActiveShiftListener=="function")try{window.detachActiveShiftListener()}catch{}if(typeof window.detachPOSHistoryListener=="function")try{window.detachPOSHistoryListener()}catch{}if(typeof window.detachAdminSessionGuard=="function")try{window.detachAdminSessionGuard()}catch{}try{lo()}catch{}if(Me){try{Me()}catch{}dt(null)}if(Ae){try{Ae()}catch{}ot(null)}if(Te){try{Te()}catch{}lt(null)}};window.detachAllAdminListenersBeforeSignOut=qe;const xa=async()=>{const e=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1";if(window.isAdm||e){if(ye()&&!e&&!await ba()&&Z.currentUser){bt(),localStorage.removeItem("freshmart_admin_session_id"),rt(),qe(),await Z.signOut(),window.isAdm=!1,window.__localIsAdm=!1,x("Sesi Owner telah diambil alih oleh perangkat lain."),z("login-username",""),z("login-password",""),typeof window.changeView=="function"&&window.changeView("view-admin-login");return}window.__localIsAdm=!0;try{oa()}catch{}if(typeof window.changeView=="function"&&window.changeView("view-admin"),ye()&&ut(),Z.currentUser)Je();else{const t=Z.onAuthStateChanged(()=>{t(),Je()})}}else z("login-username",""),z("login-password",""),typeof window.changeView=="function"&&window.changeView("view-admin-login")},Je=()=>{ye()&&ut();const e=k("view-admin");e&&e.classList.remove("admin-pos-mode");const t=document.querySelector("#view-admin .scroll-content");t&&(t.scrollTop=0),typeof window.hideFloatingScrollTop=="function"&&window.hideFloatingScrollTop(),We("admin-dashboard-view"),nt("admin-content-view"),nt("btn-admin-back"),We("admin-logo-box"),typeof window.renderSubscriptionNoticeInCMS=="function"&&window.renderSubscriptionNoticeInCMS(),ts(""),window.cTab="";try{history.state&&history.state.tab&&history.replaceState({view:"view-admin"},"",window.location.href)}catch{}typeof window.detachPOSHistoryListener=="function"&&window.detachPOSHistoryListener(),Me&&(Me(),dt(null)),Ae&&(Ae(),ot(null)),Te&&(Te(),lt(null)),ps(),fa(qr),Dt(),_t()},_t=()=>{const e=k("admin-menu-tax-btn");if(!e)return;const t=pt("tax");(l.store.ppnEnabled===!0||l.store.ppnEnabled==="true")&&t?(e.classList.remove("hidden"),e.classList.add("flex")):(e.classList.add("hidden"),e.classList.remove("flex"))},Za=new Map,So=2*60*1e3,fa=async(e="month")=>{if(Jr(e),!k("admin-report-container"))return;if(!pt("view_reports")){_("admin-report-container",`
            <div class="p-6 sm:p-8 bg-white dark:bg-slate-800/95 rounded-3xl border border-slate-200/90 dark:border-slate-700/80 shadow-2xs text-center flex flex-col items-center justify-center">
                <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-3 shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary)">
                    <i class="fa-solid fa-lock"></i>
                </div>
                <p class="text-xs font-black text-slate-800 dark:text-white">Laporan Keuangan Dibatasi</p>
                <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-1 max-w-sm leading-relaxed">
                    Informasi omset, modal HPP, margin laba kotor, dan laba bersih toko dirahasiakan & hanya dapat diakses oleh akun dengan izin laporan finansial (Owner).
                </p>
            </div>
        `);return}document.querySelectorAll(".report-period-btn").forEach(m=>{const b=m.dataset.period===e;m.style.background=b?"var(--color-primary)":"transparent",m.style.color=b?"var(--color-primary-contrast, #fff)":"",m.style.boxShadow=b?"0 2px 8px rgba(var(--color-primary-rgb),0.35)":"none"});const a=({totalPenjualan:m,totalHppTerjual:b,totalDiskonProduk:f,orderCount:h,truncated:w})=>{const v=m-b,S=v-f,$={today:"Hari Ini",week:"Minggu Ini",month:"Bulan Ini",all:"Sepanjang Waktu"}[e]||"";_("admin-report-container",`
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <div class="card-modern p-5 sm:p-5">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Total Penjualan (${$})</p>
                    <p class="text-lg sm:text-xl font-bold text-slate-800 dark:text-white truncate">${g(m)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-1">${h} pesanan${w?" (≥3000, dibatasi)":""}</p>
                </div>
                <div class="card-modern p-5 sm:p-5">
                    <p class="text-[9px] font-bold text-[var(--color-primary)] uppercase tracking-widest mb-1.5"><i class="fa-solid fa-arrow-trend-up mr-1"></i>Laba Kotor</p>
                    <p class="text-lg sm:text-xl font-bold text-[var(--color-primary)] truncate">${g(v)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-1">Penjualan − HPP Terjual</p>
                </div>
                <div class="card-modern p-5 sm:p-5">
                    <p class="text-[9px] font-bold text-rose-500 uppercase tracking-widest mb-1.5"><i class="fa-solid fa-tag mr-1"></i>Total HPP Terjual</p>
                    <p class="text-lg sm:text-xl font-bold text-rose-500 truncate">${g(b)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-1">Modal barang yang laku</p>
                </div>
                <div class="card-modern p-5 sm:p-5">
                    <p class="text-[9px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-1.5"><i class="fa-solid fa-sack-dollar mr-1"></i>Laba Bersih</p>
                    <p class="text-lg sm:text-xl font-bold truncate" style="color:var(--color-primary)">${g(S)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-1">Laba Kotor − Diskon</p>
                </div>
            </div>
        `)},r=Za.get(e);if(r&&Date.now()-r.timestamp<So){a(r.data);return}_("admin-report-container",'<div class="text-center py-10"><i class="fa-solid fa-spinner fa-spin text-2xl text-slate-300"></i></div>');let s=null;const o=new Date;if(e==="today")s=new Date(o.getFullYear(),o.getMonth(),o.getDate());else if(e==="week"){const m=o.getDay(),b=m===0?6:m-1;s=new Date(o.getFullYear(),o.getMonth(),o.getDate()-b)}else e==="month"&&(s=new Date(o.getFullYear(),o.getMonth(),1));let i=0,n=0,p=0,d=0,c=!1;try{if(!Z.currentUser){_("admin-report-container",'<div class="text-center py-10 text-slate-400"><i class="fa-solid fa-lock text-2xl mb-3"></i><p class="text-xs font-bold">Login terlebih dahulu untuk melihat laporan.</p></div>');return}let m=P.collection("freshmart_orders");s&&(m=m.where("timestamp",">=",Be.firestore.Timestamp.fromDate(s)));const b=await m.limit(3e3).get();c=b.size>=3e3,b.forEach(h=>{const w=h.data();w.status!=="Dibatalkan"&&(d++,i+=parseFloat(w.payment?.subtotal)||0,p+=parseFloat(w.payment?.productDiscount)||0,(w.items||[]).forEach(v=>{const S=v.hpp!==void 0&&v.hpp!==null?parseFloat(v.hpp):typeof window.getEffHpp=="function"?window.getEffHpp(v):0;n+=(parseFloat(S)||0)*(parseFloat(v.qty)||0)}))});const f={totalPenjualan:i,totalHppTerjual:n,totalDiskonProduk:p,orderCount:d,truncated:c};Za.set(e,{data:f,timestamp:Date.now()}),a(f)}catch(m){console.error("Gagal memuat laporan penjualan:",m)}},ms=async()=>{const e=T("login-username"),t=T("login-password");if(!e||!t)return x("Email & Password wajib diisi!");It(!0),R("Verifikasi Akun & Hak Akses...");try{const r=(await Z.signInWithEmailAndPassword(e,t)).user||Z.currentUser;if(!r)throw new Error("AUTH_FAILED");if(r.uid===sa){const n="sess_"+Date.now()+"_"+Math.random().toString(36).substring(2,9);localStorage.setItem("freshmart_admin_session_id",n),await Se(n),ut(),Wa({uid:sa,name:"Owner Toko",email:e,role:Ue.OWNER,isActive:!0});try{sessionStorage.setItem("pos_cashier_session",JSON.stringify({uid:sa,name:"Owner Toko",email:e,role:Ue.OWNER}))}catch{}window.isAdm=!0,window.__localIsAdm=!0;try{oa()}catch{}history.replaceState({view:"view-admin"},"",window.location.href),typeof window.changeView=="function"&&window.changeView("view-admin",!0),z("login-username",""),z("login-password",""),Je(),x("Selamat datang, Pemilik Toko!","success");return}const s=await P.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(r.uid).get();if(!s.exists)throw qe(),await Z.signOut(),localStorage.removeItem("freshmart_admin_session_id"),rt(),new Error("STAFF_NOT_FOUND");const o=s.data()||{};if(o.isActive===!1)throw qe(),await Z.signOut(),localStorage.removeItem("freshmart_admin_session_id"),rt(),new Error("STAFF_INACTIVE");const i={uid:r.uid,name:o.name||e,email:o.email||e,role:o.role||Ue.CASHIER,permissions:o.permissions||null,isActive:!0};if(Wa(i),s.ref.update({lastLoginAt:Be.firestore.FieldValue.serverTimestamp()}).catch(()=>{}),i.role===Ue.CASHIER){try{const n=await J(()=>import("./module-pos-BTl17EoF.js").then(p=>p.X),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url);n&&typeof n.setCashierSession=="function"&&n.setCashierSession(i)}catch{}try{localStorage.setItem("pos_has_cashier","true")}catch{}typeof window.updatePOSHeaderIcon=="function"&&window.updatePOSHeaderIcon(),history.replaceState({view:"view-pos-cashier"},"",window.location.href),typeof window.changeView=="function"&&window.changeView("view-pos-cashier",!0),z("login-username",""),z("login-password",""),x(`Login Berhasil! Selamat bertugas di Kasir, ${i.name||"Kasir"}!`,"success");return}window.isAdm=!0,window.__localIsAdm=!0;try{oa()}catch{}history.replaceState({view:"view-admin"},"",window.location.href),typeof window.changeView=="function"&&window.changeView("view-admin",!0),z("login-username",""),z("login-password",""),Je(),x(`Login Berhasil! Selamat bertugas, ${i.name||"Admin"}!`,"success")}catch(a){console.error(a),localStorage.removeItem("freshmart_admin_session_id"),rt(),a.message==="STAFF_NOT_FOUND"?x("Login Ditolak: Akun Anda tidak terdaftar sebagai staf Toko Putri!"):a.message==="STAFF_INACTIVE"?x("Login Ditolak: Akun Anda dinonaktifkan oleh Owner Toko."):a.message&&a.message.startsWith("UID_MISMATCH:")?x("Login Ditolak: Akun tidak memiliki hak akses CMS."):x("Login Ditolak: Email atau Password salah!")}finally{It(!1),C(),z("login-password","")}},ga=async()=>{R("Keluar...");try{ye()&&bt(),localStorage.removeItem("freshmart_admin_session_id"),rt();try{const e=sessionStorage.getItem("pos_cashier_session");if(e){const t=JSON.parse(e);(t.role===Ue.OWNER||t.role==="owner")&&sessionStorage.removeItem("pos_cashier_session")}}catch{}qe(),await Z.signOut(),window.isAdm=!1,window.__localIsAdm=!1,z("login-username",""),z("login-password",""),x("Berhasil Logout"),typeof window.changeView=="function"&&window.changeView("view-catalog")}catch{x("Gagal Logout")}finally{C()}},us=()=>{const e=ye();ce(e?"Keluar Panel Owner":"Keluar CMS Toko",e?"Apakah Anda yakin ingin keluar dari panel kontrol Owner Toko?":"Apakah Anda yakin ingin keluar dari halaman admin?",()=>{ga()},"Ya, Keluar",!0)};window.__checkAdminAccessReal=xa;window.checkAdminAccess=xa;window.openAdminMenu=Je;window.toggleTaxMenuVisibility=_t;window.computeInventoryStats=computeInventoryStats;window.loadAdminReport=fa;window.processAdminLogin=ms;window.logoutAdmin=ga;window.confirmLogoutAdmin=us;const bs=async()=>{if(!D||D.length===0)return x("Belum ada data pesanan!");R("Menyiapkan modul Excel...");try{await ra("https://cdn.sheetjs.com/xlsx-0.20.3/package/dist/xlsx.full.min.js",()=>typeof XLSX<"u")}catch{C(),x("Gagal memuat modul Excel. Cek koneksi internet Anda.");return}C();let e=[];D.forEach((i,n)=>{let p=i.dateString?new Date(i.dateString).toLocaleString("id-ID"):"-",d=i.customer?.name||"Anonim",c=i.source==="pos"||i.channel==="pos",m=i.customer?.deliveryMethod==="delivery"?"Dikirim":c?"Beli Langsung di Kasir (Takeaway)":"Ambil di Toko";i.isDropPoint&&(m="Lokasi Berbeda");let b=i.status||"-",f=i.items?i.items.reduce((w,v)=>w+(parseFloat(v.qty)||0),0):0,h=i.payment?.grandTotal||0;e.push({No:n+1,"ID Pesanan":i.orderId,Tanggal:p,Sumber:c?`Kasir POS (${i.cashierName||"Kasir"})`:"Website Storefront","Nama Pelanggan":d,"Tipe Pelanggan":i.customerType==="Member"?"Member":"Pelanggan Umum","No. WhatsApp":i.customer?.wa?`+${i.customer.wa}`:"-","Metode Kirim":m,Status:b,"Total Item":f,"Total Tagihan (Rp)":h})});const t=XLSX.utils.json_to_sheet(e),a=XLSX.utils.book_new();XLSX.utils.book_append_sheet(a,t,"Laporan Pesanan");const r=[{wch:5},{wch:25},{wch:22},{wch:24},{wch:25},{wch:18},{wch:18},{wch:26},{wch:15},{wch:12},{wch:20}];t["!cols"]=r;const o=`Laporan_Pesanan_${new Date().toISOString().split("T")[0]}.xlsx`;if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function"){const i=XLSX.write(a,{bookType:"xlsx",type:"base64"});window.AndroidNativeApp.saveOrShareFile(i,o,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")}else XLSX.writeFile(a,o);x("Laporan Excel (.xlsx) berhasil diunduh!")},xs=()=>{try{if(typeof window<"u"){if(typeof window.checkUserGesture=="function"&&!window.checkUserGesture())return;if(typeof window.playNativeSound=="function"){window.playNativeSound("success");return}}const e=window.AudioContext||window.webkitAudioContext;if(!e)return;const t=new e;t.state==="suspended"&&t.resume().catch(()=>{});const a=t.createOscillator(),r=t.createGain();a.connect(r),r.connect(t.destination),a.type="sine",a.frequency.setValueAtTime(800,t.currentTime),r.gain.setValueAtTime(.2,t.currentTime),a.frequency.setValueAtTime(600,t.currentTime+.2),a.frequency.setValueAtTime(800,t.currentTime+.6),r.gain.setValueAtTime(.2,t.currentTime+.6),a.frequency.setValueAtTime(600,t.currentTime+.8),r.gain.exponentialRampToValueAtTime(1e-5,t.currentTime+1.5),a.start(t.currentTime),a.stop(t.currentTime+1.5),setTimeout(()=>{t.close().catch(()=>{})},1600)}catch{}};let $e="all";const fs=e=>{$e=e,["all","pos","storefront"].forEach(t=>{const a=k(`btn-ord-filter-${t}`);a&&(t===e?a.className="h-8 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white shadow-sm shadow-[rgba(var(--color-primary-rgb),0.3)] flex items-center gap-1.5":a.className="h-8 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700/60 flex items-center gap-1.5")}),ka()},ka=()=>{const e=k("admin-orders-list");if(!e)return;if(!D||D.length===0){e.innerHTML='<div class="flex flex-col items-center justify-center py-20 text-slate-400 font-bold bg-white dark:bg-slate-800 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm text-center"><i class="fa-solid fa-receipt text-5xl mb-4 opacity-30"></i>Belum ada pesanan</div>';return}const t=D.filter(a=>{const r=a.source==="pos"||a.channel==="pos";return $e==="pos"?r:$e==="storefront"?!r:!0});if(t.length===0){const a=$e==="pos"?"Belum ada transaksi dari Kasir POS":$e==="storefront"?"Belum ada pesanan dari Website Storefront":"Belum ada pesanan";e.innerHTML=`<div class="flex flex-col items-center justify-center py-16 text-slate-400 font-bold bg-white dark:bg-slate-800 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm text-center"><i class="fa-solid fa-filter-circle-xmark text-4xl mb-3 opacity-30"></i>${a}</div>`;return}e.innerHTML=t.map(a=>{let r="text-slate-500 border-slate-200 dark:border-slate-600",s="fa-clock",o="bg-slate-50 dark:bg-slate-700/50",i="text-slate-400";a.status==="Baru"?(r="text-rose-600 border-rose-300 bg-rose-50 dark:bg-rose-950/40 dark:border-rose-800 font-bold",s="fa-asterisk",o="bg-rose-500",i="text-white shadow-md shadow-rose-500/30"):a.status==="Diproses"?(r="text-[var(--color-primary)] border-[var(--color-primary)]/30 bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.10)] dark:border-[var(--color-primary)]/30",s="fa-spinner fa-spin",o="primary-bg",i="shadow-sm"):a.status==="Selesai"?(r="text-[var(--color-primary)] border-[var(--color-primary)]/30 bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.10)] dark:border-[var(--color-primary)]/30",s="fa-check-double",o="primary-bg-soft",i="primary-text"):a.status==="Dibatalkan"&&(r="text-slate-400 border-slate-200 bg-slate-50 dark:bg-slate-800 dark:border-slate-700",s="fa-xmark",o="bg-slate-100 dark:bg-slate-800",i="text-slate-400");let n="fa-wallet text-slate-400",p=a.payment?.method||"",d=p.toUpperCase();const c=a.source==="pos"||a.channel==="pos";if(p==="transfer")n="fa-building-columns text-[var(--color-primary)]",d="Transfer";else if(p==="qris")n="fa-qrcode text-purple-500",d="QRIS";else if(p==="cod")n="fa-hand-holding-dollar text-[var(--color-primary)]",d="COD";else if(p==="cashier"||p==="cash")n="fa-cash-register text-emerald-500",d=c?"Tunai (Kasir)":"Kasir";else if(p==="tempo"){const S=!!(a.payment?.isPaylater||a.isPaylater||a.payment?.subMethod==="paylater");n=S?"fa-bolt text-emerald-500":"fa-file-invoice-dollar text-amber-500",d=S?"PayLater":"Tempo"}let m=a.items?parseFloat(a.items.reduce((S,$)=>S+(parseFloat($.qty)||0),0).toFixed(2)):0;const b=a.dateString?new Date(a.dateString).toLocaleDateString("id-ID",{day:"numeric",month:"short"}):"",f=(a.orderId||"").split("-").pop(),h=(l.salesReturns||[]).filter(S=>String(S.orderId)===String(a.orderId||a.id)),w=h.length>0,v=h.reduce((S,$)=>S+(parseFloat($.totalRefund)||0),0);return`
        <div class="card-native p-4 sm:p-5 rounded-2xl sm:rounded-3xl relative overflow-hidden group cursor-pointer active:scale-[0.99] transition-all duration-200" onclick="openOrderDetail('${a.orderId}')">
            <div class="flex items-center gap-3 sm:gap-4">
                <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${o} ${i} flex items-center justify-center shrink-0 transition-colors">
                    <i class="fa-solid fa-receipt text-xl sm:text-2xl"></i>
                </div>
                <div class="flex-1 min-w-0">
                    <div class="flex justify-between items-start mb-1 gap-2">
                        <div class="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                            <span class="font-bold text-sm sm:text-base text-slate-800 dark:text-slate-100 tracking-tight">#${f}</span>
                            <span class="text-[9px] font-bold px-2 py-0.5 rounded-lg border ${r} uppercase tracking-wider whitespace-nowrap inline-flex items-center"><i class="fa-solid ${s} mr-1"></i> ${u(a.status)}</span>
                            ${c?`
                            <span class="text-[9px] font-bold px-2 py-0.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 uppercase tracking-wider whitespace-nowrap inline-flex items-center gap-1">
                                <i class="fa-solid fa-cash-register text-[9px]"></i> Kasir: ${u(a.cashierName||"POS")}
                            </span>`:`
                            <span class="text-[9px] font-bold px-2 py-0.5 rounded-lg bg-[rgba(var(--color-primary-rgb),0.08)] border border-[rgba(var(--color-primary-rgb),0.25)] text-[var(--color-primary)] uppercase tracking-wider whitespace-nowrap inline-flex items-center gap-1">
                                <i class="fa-solid fa-globe text-[9px]"></i> Storefront
                            </span>`}
                        </div>
                        <span class="text-[10px] font-bold text-slate-400 flex items-center gap-1.5 whitespace-nowrap shrink-0"><i class="fa-regular fa-calendar"></i> <span class="hidden sm:inline">${b}</span></span>
                    </div>
                    <div class="flex items-center gap-2 mt-1.5 flex-wrap">
                        <p class="text-xs font-bold text-slate-600 dark:text-slate-300 truncate max-w-[140px] sm:max-w-xs"><i class="fa-solid fa-user text-slate-400 mr-1"></i> ${u(a.customer?.name||"Anonim")}</p>
                        <span class="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600 shrink-0"></span>
                        <span class="text-[9px] font-bold text-slate-500 bg-slate-100 dark:bg-slate-900 px-2 py-0.5 rounded-lg border border-slate-200 dark:border-slate-700 uppercase tracking-wider whitespace-nowrap shrink-0 inline-flex items-center">${m} Item</span>
                        <span class="text-[9px] font-bold ${a.customerType==="Member"?"text-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.08)] border border-[rgba(var(--color-primary-rgb),0.25)]":"text-slate-500 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700"} px-2 py-0.5 rounded-lg uppercase tracking-wider whitespace-nowrap shrink-0 inline-flex items-center">${a.customerType==="Member"?'<i class="fa-solid fa-star text-[var(--color-primary)] mr-1"></i>Member':"Umum"}</span>
                        ${a.customer?.lat?'<span class="text-[9px] font-bold text-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.1)] px-1.5 py-0.5 rounded-lg border border-[rgba(var(--color-primary-rgb),0.2)] uppercase tracking-wider whitespace-nowrap shrink-0 inline-flex items-center"><i class="fa-solid fa-location-dot mr-1"></i>GPS</span>':""}
                        ${a.delivery?.doNumber?`<span class="text-[9px] font-bold ${a.delivery.status==="delivered"?"text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800":a.delivery.status==="out_for_delivery"?"text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800":"text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800"} px-2 py-0.5 rounded-lg border uppercase tracking-wider whitespace-nowrap shrink-0 inline-flex items-center gap-1"><i class="fa-solid fa-truck-fast text-[8px]"></i> DO #${u(a.delivery.doNumber.split("-").pop())}</span>`:""}
                        ${w?`<span class="text-[9px] font-bold text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 px-2 py-0.5 rounded-lg uppercase tracking-wider whitespace-nowrap shrink-0 inline-flex items-center gap-1"><i class="fa-solid fa-right-left text-[8px]"></i> Retur: ${g(v)}</span>`:""}
                        ${a.buktiPayment?'<span class="text-[9px] font-bold text-violet-500 bg-violet-50 dark:bg-violet-900/20 px-1.5 py-0.5 rounded-lg border border-violet-100 dark:border-violet-800 uppercase tracking-wider whitespace-nowrap shrink-0 inline-flex items-center"><i class="fa-solid fa-image"></i></span>':""}
                    </div>
                </div>
                <div class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-700/60 flex items-center justify-center text-slate-400 group-hover:text-[var(--color-primary)] transition-all shrink-0">
                    <i class="fa-solid fa-chevron-right text-xs"></i>
                </div>
            </div>
            <div class="w-full border-t border-dashed border-slate-200 dark:border-slate-700/80 my-3.5"></div>
            <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                    <span class="font-extrabold text-[var(--color-primary)] text-lg sm:text-xl tracking-tight">${g(a.payment?.grandTotal)}</span>
                    ${(()=>{const S=as(a);return S.hasPpn?`<span class="text-[8px] font-bold bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 px-1.5 py-0.5 rounded border border-amber-200 dark:border-amber-800 uppercase tracking-widest">${S.ppnRate>0?`PPN ${S.ppnRate}%`:"PPN 0%"}</span>`:""})()}
                </div>
                <div class="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-900/80 px-3 py-1.5 rounded-xl border border-slate-200/60 dark:border-slate-700/70">
                    <i class="fa-solid ${n} text-xs"></i>
                    <span class="text-[9px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-widest">${u(d)}</span>
                </div>
            </div>
        </div>`}).join("")},gs=()=>{_("admin-content",`
        <div class="card-native mb-4 p-4 sm:p-5 rounded-2xl flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-3">
                <div class="w-11 h-11 rounded-xl flex items-center justify-center text-white shrink-0 border-2 border-slate-900 dark:border-slate-700 shadow-[1.5px_1.5px_0px_#0f172a] dark:shadow-[1.5px_1.5px_0px_#000000]" style="background: var(--color-primary);">
                    <i class="fa-solid fa-satellite-dish text-base"></i>
                </div>
                <div>
                    <h2 class="font-extrabold text-sm sm:text-base text-slate-800 dark:text-slate-100 uppercase tracking-wider leading-tight">Live Orders</h2>
                    <p class="text-[10px] font-bold text-slate-500 mt-0.5">Pusat pesanan terpadu Website Storefront &amp; Kasir POS</p>
                </div>
            </div>
            <button onclick="exportOrdersToExcel()" class="btn-native-action px-4 text-xs font-bold flex items-center gap-2 border border-slate-200/90 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 active:scale-95 transition-all cursor-pointer">
                <i class="fa-solid fa-file-excel text-emerald-600 text-sm"></i>
                <span>Export Excel</span>
            </button>
        </div>

        <!-- Filter Sumber Pesanan: Semua, Kasir POS, Storefront -->
        <div class="mb-4 flex items-center gap-2 overflow-x-auto pb-1 hide-scrollbar">
            <button onclick="setOrderSourceFilter('all')" id="btn-ord-filter-all" class="h-10 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 active:scale-95 ${$e==="all"?"bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/60"}">
                Semua Pesanan
            </button>
            <button onclick="setOrderSourceFilter('pos')" id="btn-ord-filter-pos" class="h-10 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 active:scale-95 ${$e==="pos"?"bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/60"}">
                <i class="fa-solid fa-cash-register text-[10px]"></i> Kasir POS
            </button>
            <button onclick="setOrderSourceFilter('storefront')" id="btn-ord-filter-storefront" class="h-10 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 active:scale-95 ${$e==="storefront"?"bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/60"}">
                <i class="fa-solid fa-globe text-[10px]"></i> Storefront Web
            </button>
        </div>

        <div id="admin-orders-list" class="space-y-3"><div class="text-center py-16"><div class="w-12 h-12 border-4 border-[rgba(var(--color-primary-rgb),0.2)] border-t-[var(--color-primary)] rounded-full animate-spin mx-auto"></div></div></div>
    `);const e=()=>{Me&&(Me(),dt(null));let t=!0;const a=P.collection("freshmart_orders").orderBy("timestamp","desc").limit(100).onSnapshot(r=>{if(qa([]),!t){let o=!1;r.docChanges().forEach(i=>{i.type==="added"&&i.doc.data().status==="Baru"&&(o=!0)}),o&&(x("Pesanan Baru Masuk!"),xs())}if(t=!1,r.empty){_("admin-orders-list",'<div class="flex flex-col items-center justify-center py-20 text-slate-400 font-bold bg-white dark:bg-slate-800 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm text-center"><i class="fa-solid fa-receipt text-5xl mb-4 opacity-30"></i>Belum ada pesanan</div>'),Ee("stat-orders",0);return}Ee("stat-orders",r.size+(r.size===100?"+":""));const s=[];r.docs.forEach(o=>s.push(o.data())),qa(s),ka()},()=>{_("admin-orders-list",'<div class="text-center text-rose-500 font-bold">Koneksi terputus. Retrying...</div>'),setTimeout(e,5e3)});dt(a)};e()},Et=e=>{const t=D.find(m=>m.orderId===e);if(!t)return;Qr(e);const a=as(t),r=(l.salesReturns||[]).filter(m=>String(m.orderId)===String(t.orderId||t.id)),s=t.source==="pos"||t.channel==="pos",o=!!t.customer?.wa;t.status==="Diproses"||t.status==="Selesai"||t.status;const i=t.status==="Baru"?"Konfirmasi Pesanan Baru":t.status==="Diproses"?"Pesanan Sedang Diproses":t.status==="Selesai"?"Pesanan Selesai":t.status==="Dibatalkan"?"Pesanan Dibatalkan":t.status;let n=`<div class="relative w-full sm:w-40 mt-1"><select onchange="updateOrderStatus('${t.orderId}', this.value)" class="w-full text-sm font-bold ${t.status==="Baru"?"text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/50 border-rose-200 dark:border-rose-900/60":t.status==="Diproses"?"text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 border-blue-200 dark:border-blue-900/60":t.status==="Selesai"?"text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 border-emerald-200 dark:border-emerald-900/60":"text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700"} border px-4 py-2.5 rounded-xl focus:outline-none appearance-none cursor-pointer transition-colors shadow-sm"><option value="Baru" ${t.status==="Baru"?"selected":""} class="text-slate-800 dark:text-slate-100 dark:bg-slate-800">Baru (Pending)</option><option value="Diproses" ${t.status==="Diproses"?"selected":""} class="text-slate-800 dark:text-slate-100 dark:bg-slate-800">Diproses</option><option value="Selesai" ${t.status==="Selesai"?"selected":""} class="text-slate-800 dark:text-slate-100 dark:bg-slate-800">Selesai</option><option value="Dibatalkan" ${t.status==="Dibatalkan"?"selected":""} class="text-slate-800 dark:text-slate-100 dark:bg-slate-800">Dibatalkan</option></select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 ${t.status==="Baru"?"text-rose-400":t.status==="Diproses"?"text-blue-400":t.status==="Selesai"?"text-emerald-400":"text-slate-400"} pointer-events-none text-xs"></i></div>`;_("admin-order-modal-content",`
        <div class="flex flex-col gap-4 text-sm pb-2">
            <div class="bg-white dark:bg-slate-800 p-5 sm:p-6 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col sm:flex-row justify-between gap-5 sm:items-center">
                <div class="flex-1">
                    <p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5"><i class="fa-solid fa-crosshairs text-[var(--color-primary)]"></i> Status</p>
                    ${n}
                    <div class="mt-2.5 flex items-center gap-1.5 flex-wrap">
                        ${s?`
                        <span class="px-2.5 py-1 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-[11px] font-bold flex items-center gap-1.5">
                            <i class="fa-solid fa-cash-register text-xs"></i> Sumber: Dibuat di Kasir POS (Petugas: ${u(t.cashierName||"Kasir")})
                        </span>`:`
                        <span class="px-2.5 py-1 rounded-xl bg-[rgba(var(--color-primary-rgb),0.08)] border border-[rgba(var(--color-primary-rgb),0.25)] text-[var(--color-primary)] text-[11px] font-bold flex items-center gap-1.5">
                            <i class="fa-solid fa-globe text-xs"></i> Sumber: Pesanan Online (Website Storefront)
                        </span>`}
                    </div>
                    ${o?`
                    <button type="button" onclick="konfirmasiKeWA('${t.orderId}')" 
                        class="mt-3 w-full flex items-center justify-between gap-2.5 bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 px-4 py-3 rounded-xl transition-all active:scale-95 cursor-pointer shadow-sm group">
                        <div class="flex items-center gap-2.5 min-w-0">
                            <div class="w-8 h-8 rounded-lg bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-sm shadow-emerald-400/30">
                                <i class="fa-brands fa-whatsapp text-sm"></i>
                            </div>
                            <div class="min-w-0 text-left">
                                <p class="text-[11px] font-black uppercase tracking-widest leading-tight">Notifikasi WA Pembeli</p>
                                <p class="text-[10px] font-medium text-emerald-600/70 dark:text-emerald-400/70 truncate mt-0.5">${i}</p>
                            </div>
                        </div>
                        <i class="fa-solid fa-paper-plane text-xs text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0"></i>
                    </button>`:""}
                </div>
                <div class="text-left sm:text-right flex flex-col justify-center">
                    <p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">ID Pesanan</p>
                    <p class="text-sm sm:text-base font-bold text-slate-900 dark:text-white break-all tracking-wide">#${t.orderId}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-1.5">${t.dateString?new Date(t.dateString).toLocaleString("id-ID"):""}</p>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 items-start">
            <div class="flex flex-col gap-4">

            <div class="bg-white dark:bg-slate-800 p-5 sm:p-6 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm">
                <h4 class="font-bold text-slate-900 dark:text-white text-sm border-b border-slate-100 dark:border-slate-700 pb-4 mb-4 flex items-center gap-3"><div class="w-8 h-8 rounded-xl primary-light-icon-box flex items-center justify-center border border-slate-200 dark:border-slate-700"><i class="fa-solid fa-user"></i></div> Data Pemesan</h4>
                <div class="space-y-4">
                    <div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold">Nama</span><span class="font-bold text-slate-900 dark:text-white text-base">${u(t.customer?.name||"-")}</span></div>
                    ${t.customer?.wa?`<div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold flex items-center gap-1.5"><i class="fa-brands fa-whatsapp text-green-500"></i> WhatsApp</span><a href="javascript:void(0)" onclick="if(typeof window.openWhatsApp==='function') window.openWhatsApp('${u(t.customer.wa)}'); else window.open('https://wa.me/${u(t.customer.wa)}', '_blank', 'noopener,noreferrer');" class="font-bold text-green-600 dark:text-green-400 hover:underline cursor-pointer">+${u(t.customer.wa)}</a></div>`:""}
                    <div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold">Tipe Pemesan</span><span class="text-xs font-bold px-2.5 py-1 rounded-lg ${t.customerType==="Member"?"bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.25)]":"bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 border border-slate-200 dark:border-slate-700"}">${t.customerType==="Member"?'<i class="fa-solid fa-star text-amber-500 mr-1"></i> Member Resmi':'<i class="fa-solid fa-user text-slate-400 mr-1"></i> Pelanggan Umum'}</span></div>
                    ${t.customer?.wa&&t.customerType!=="Member"?`<button type="button" onclick="saveOrderCustomerToDB('${u(t.customer.name||"")}','${u(t.customer.wa)}','${u(t.orderId)}')" class="w-full py-2.5 rounded-xl primary-bg active:scale-95 text-white shadow-md shadow-[rgba(var(--color-primary-rgb),0.2)] text-[11px] font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all"><i class="fa-solid fa-address-book"></i> + Konfirmasi &amp; Daftarkan Sebagai Member</button>`:""}
                    ${t.customerType==="Member"?'<div class="w-full py-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 text-[11px] font-black uppercase tracking-widest flex items-center justify-center gap-2"><i class="fa-solid fa-circle-check"></i> Terverifikasi — Data Member Terkunci</div>':""}
                    <div class="border-t border-dashed border-slate-200 dark:border-slate-700 pt-4">
                        <span class="text-slate-500 dark:text-slate-400 font-bold flex items-center gap-2 mb-2.5"><i class="fa-solid fa-map-location-dot"></i> Alamat Pemesan (${s?"Beli Langsung di Kasir (Takeaway)":t.customer?.deliveryMethod==="delivery"?"Dikirim":"Ambil di Toko"})</span>
                        <div class="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700 font-bold text-slate-700 dark:text-slate-300 leading-relaxed shadow-inner text-sm">${u(t.customer?.address||"-")}</div>
                        ${t.customer?.lat&&t.customer?.deliveryMethod==="delivery"&&!t.isDropPoint?`<a href="https://www.google.com/maps?q=${u(t.customer.lat)},${u(t.customer.lng)}" target="_blank" class="mt-3 flex items-center justify-center gap-2 bg-[rgba(var(--color-primary-rgb),0.07)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.25)] font-bold text-xs py-2.5 px-4 rounded-xl hover:bg-[rgba(var(--color-primary-rgb),0.12)] transition-colors"><i class="fa-solid fa-location-dot"></i> Buka Lokasi Pembeli di Google Maps</a>`:""}
                    </div>
                    ${t.isDropPoint&&t.dropPoint?`<div class="border-2 border-[var(--color-primary)]/30 bg-[rgba(var(--color-primary-rgb),0.04)] dark:bg-[rgba(var(--color-primary-rgb),0.1)] rounded-xl p-4 mt-2">
                        <p class="text-[10px] font-bold uppercase tracking-widest text-[var(--color-primary)] mb-3 flex items-center gap-1.5"><i class="fa-solid fa-location-dot"></i> DIKIRIM KE LOKASI BERBEDA</p>
                        <div class="space-y-2">
                            <div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold text-xs">Nama Penerima</span><span class="font-bold text-slate-900 dark:text-white">${u(t.dropPoint.name||"-")}</span></div>
                            ${t.dropPoint.wa?`<div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold text-xs flex items-center gap-1"><i class="fa-brands fa-whatsapp text-green-500"></i> WA Penerima</span><a href="javascript:void(0)" onclick="if(typeof window.openWhatsApp==='function') window.openWhatsApp('${u(t.dropPoint.wa)}'); else window.open('https://wa.me/${u(t.dropPoint.wa)}', '_blank', 'noopener,noreferrer');" class="font-bold text-green-600 dark:text-green-400 hover:underline cursor-pointer">+${u(t.dropPoint.wa)}</a></div>`:""}
                            <div class="border-t border-[var(--color-primary)]/15 pt-2 mt-2">
                                <span class="text-slate-500 dark:text-slate-400 font-bold text-xs block mb-1.5">Alamat Tujuan Pengiriman</span>
                                <div class="bg-white dark:bg-slate-800 p-3 rounded-xl border border-[var(--color-primary)]/20 font-bold text-slate-700 dark:text-slate-300 leading-relaxed shadow-inner text-sm">${u(t.dropPoint.address||"-")}</div>
                                ${t.dropPoint.lat?`<a href="https://www.google.com/maps?q=${u(t.dropPoint.lat)},${u(t.dropPoint.lng)}" target="_blank" class="mt-2 flex items-center justify-center gap-2 bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] border border-[var(--color-primary)]/30 font-bold text-xs py-2.5 px-4 rounded-xl hover:bg-[rgba(var(--color-primary-rgb),0.18)] transition-colors"><i class="fa-solid fa-location-dot"></i> Buka Lokasi Tujuan di Google Maps</a>`:""}
                                ${t.dropPoint.wa?`<button type="button" onclick="konfirmasiKeWAPenerima('${t.orderId}')" class="mt-2.5 w-full py-2 bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/40 dark:hover:bg-emerald-900/60 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-700 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs active:scale-95"><i class="fa-brands fa-whatsapp text-sm"></i> Notifikasi Pengiriman ke WA Penerima</button>`:""}
                            </div>
                        </div>
                    </div>`:""}
                    ${t.customer?.note?`<div class="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl border border-amber-200 dark:border-amber-800 mt-2"><p class="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-1.5"><i class="fa-solid fa-note-sticky"></i> Catatan Pembeli</p><p class="text-sm text-amber-900 dark:text-amber-100 font-bold">${u(t.customer.note)}</p></div>`:""}
                    ${t.buktiPayment?`<div class="bg-violet-50 dark:bg-violet-900/20 p-4 rounded-xl border border-violet-200 dark:border-violet-800 mt-2"><p class="text-[10px] font-bold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-2.5"><i class="fa-solid fa-image"></i> Bukti Pembayaran</p><a href="${u(t.buktiPayment)}" target="_blank" class="block rounded-xl overflow-hidden border border-violet-200 dark:border-violet-800"><img src="${u(t.buktiPayment)}" alt="Bukti Pembayaran" class="w-full max-h-48 object-cover" onerror="this.style.display='none'" loading="lazy"><div class="bg-violet-100 dark:bg-violet-900/40 py-2 text-center text-[10px] font-bold text-violet-600 dark:text-violet-400"><i class="fa-solid fa-arrow-up-right-from-square mr-1"></i> Tap untuk buka</div></a></div>`:""}
                </div>
            </div>

            <!-- CARD LOGISTIK & PENGIRIMAN SURAT JALAN -->
            <div class="bg-white dark:bg-slate-800 p-5 sm:p-6 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm space-y-3.5">
                <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-3 gap-2">
                    <h4 class="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2.5 min-w-0">
                        <div class="w-8 h-8 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 flex items-center justify-center border border-amber-200 dark:border-amber-800 shrink-0">
                            <i class="fa-solid fa-truck-ramp-box"></i>
                        </div>
                        <span class="truncate">Surat Jalan &amp; Pengiriman Proyek</span>
                    </h4>
                    ${(()=>{const m=t.delivery?.status||"pending_dispatch",b=m==="delivered",f=m==="out_for_delivery";return`<span class="px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider border shrink-0 whitespace-nowrap ${b?"bg-emerald-100 text-emerald-800 border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800":f?"bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800":"bg-amber-100 text-amber-800 border-amber-300 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800"}">${b?"Terkirim & TTD":f?"Dalam Perjalanan":"Menunggu Muat"}</span>`})()}
                </div>

                <div class="grid grid-cols-2 gap-3 text-xs">
                    <div>
                        <span class="text-slate-400 font-medium block text-[10px]">No. Surat Jalan (DO):</span>
                        <span class="font-bold font-mono text-slate-800 dark:text-slate-100">${u(t.delivery?.doNumber||"Belum Diterbitkan")}</span>
                    </div>
                    <div>
                        <span class="text-slate-400 font-medium block text-[10px]">Armada &amp; Supir:</span>
                        <span class="font-bold text-slate-800 dark:text-slate-100 truncate block">${u(t.delivery?.fleetName||"Pick-up L300")} ${t.delivery?.driverName?`(${u(t.delivery.driverName)})`:""}</span>
                    </div>
                </div>

                ${t.delivery?.signature?.signerName?`
                <div class="bg-emerald-50 dark:bg-emerald-950/30 p-2.5 rounded-xl border border-emerald-200 dark:border-emerald-800 flex items-center gap-3">
                    <img src="${t.delivery.signature.signatureDataUrl}" alt="TTD" class="h-10 w-auto bg-white rounded p-1 border border-emerald-300">
                    <div class="text-[11px] text-emerald-800 dark:text-emerald-300">
                        <p class="font-bold">Serah Terima Ditandatangani</p>
                        <p class="text-[10px] font-medium text-emerald-600 dark:text-emerald-400">Oleh: ${u(t.delivery.signature.signerName)}</p>
                    </div>
                </div>`:""}

                <div class="pt-1 flex flex-col sm:flex-row gap-2.5">
                    <button type="button" onclick="openDeliveryModal('${u(t.orderId)}')" class="btn-native-action w-full sm:flex-1 h-11 py-2.5 px-4 rounded-xl text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-xs cursor-pointer active:scale-95 shrink-0 transition-transform" style="background: var(--color-primary);">
                        <i class="fa-solid fa-truck-fast text-sm"></i>
                        <span>Kelola Pengiriman &amp; DO</span>
                    </button>
                    <button type="button" onclick="printOfficialDeliveryOrderA4('${u(t.orderId)}')" class="btn-native-action w-full sm:w-auto px-4 h-11 py-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 hover:bg-slate-50 text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer active:scale-95 shrink-0 transition-transform">
                        <i class="fa-solid fa-print text-amber-500 text-sm"></i>
                        <span>Cetak DO A4</span>
                    </button>
                    <button type="button" onclick="if(typeof window.closeOrderDetailModal==='function') window.closeOrderDetailModal(); if(window.openSalesReturnModal){window.openSalesReturnModal('${u(t.orderId)}');} else if(window.openAdminTab){window.openAdminTab('returns');}" class="btn-native-action w-full sm:w-auto px-4 h-11 py-2.5 rounded-xl border border-rose-200 dark:border-rose-800 bg-rose-50/80 dark:bg-rose-950/30 hover:bg-rose-100 dark:hover:bg-rose-900/40 text-rose-700 dark:text-rose-300 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer active:scale-95 shrink-0 transition-transform" title="Proses Pengembalian Barang Nota Ini">
                        <i class="fa-solid fa-right-left text-rose-500 text-sm"></i>
                        <span>Retur (RMA)</span>
                    </button>
                </div>
            </div>

            </div>

            <div class="flex flex-col gap-4">

            <div class="bg-white dark:bg-slate-800 p-5 sm:p-6 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm">
                <h4 class="font-bold text-slate-900 dark:text-white text-sm border-b border-slate-100 dark:border-slate-700 pb-4 mb-4 flex items-center gap-3"><div class="w-8 h-8 rounded-xl primary-light-icon-box flex items-center justify-center border border-slate-200 dark:border-slate-700"><i class="fa-solid fa-box-open"></i></div> Rincian Item</h4>
                <div class="space-y-3">${t.items.map(m=>{const b=r.reduce((f,h)=>{const w=(h.items||[]).find(v=>String(v.id)===String(m.id)&&(v.variantName||"")===(m.variantName||""));return f+(w&&parseFloat(w.qty)||0)},0);return`
                    <div class="flex justify-between items-center bg-slate-50 dark:bg-slate-900 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm min-w-0">
                        <div class="flex items-center gap-3 min-w-0">
                            <div class="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 flex items-center justify-center text-slate-500 dark:text-slate-400 shrink-0"><i class="fa-solid fa-tag text-sm"></i></div>
                            <div class="min-w-0">
                                <p class="font-bold text-sm text-slate-900 dark:text-white truncate mb-1" title="${u(m.name)}">${u(m.name)}</p>
                                ${m.variantName||m.poTime?`
                                <div class="flex flex-wrap gap-1 mb-1">
                                    ${m.variantName?`<span class="bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-1.5 py-0.5 rounded-lg border border-slate-300 dark:border-slate-600 text-[9px] font-bold">${u(m.variantName)}</span>`:""}
                                    ${m.poTime?`<span class="amber-badge px-1.5 py-0.5 rounded-lg text-[8px] font-bold uppercase">PO ${u(m.poTime)}</span>`:""}
                                </div>
                                `:""}
                                <p class="text-[11px] text-slate-500 dark:text-slate-400 font-bold flex items-center gap-2 flex-wrap">
                                    <span>${parseFloat(m.qty)} ${u(m.unit||"pcs")} x ${g(m.effectivePrice)}</span>
                                    ${b>0?`
                                    <span class="inline-flex items-center gap-1 text-[10px] font-black text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 px-2 py-0.5 rounded-md border border-rose-200 dark:border-rose-800">
                                        <i class="fa-solid fa-right-left text-[9px]"></i> Diretur: ${b} ${u(m.unit||"pcs")}
                                    </span>`:""}
                                </p>
                            </div>
                        </div>
                        <div class="font-bold text-sm text-slate-900 dark:text-white ml-3 shrink-0">${g(m.effectivePrice*parseFloat(m.qty))}</div>
                    </div>`}).join("")}
                </div>
            </div>

            ${r.length>0?`
            <div class="bg-rose-50/60 dark:bg-rose-950/20 p-5 sm:p-6 rounded-[1.5rem] border border-rose-200/80 dark:border-rose-800/60 shadow-sm">
                <div class="flex items-center justify-between border-b border-rose-200/80 dark:border-rose-800/60 pb-3.5 mb-3.5">
                    <h4 class="font-bold text-rose-700 dark:text-rose-300 text-sm flex items-center gap-2.5">
                        <div class="w-8 h-8 rounded-xl bg-rose-100 dark:bg-rose-900/50 text-rose-600 dark:text-rose-400 flex items-center justify-center border border-rose-200 dark:border-rose-800">
                            <i class="fa-solid fa-right-left"></i>
                        </div>
                        Riwayat Retur Barang (RMA)
                    </h4>
                    <span class="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-rose-100 dark:bg-rose-900/60 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800">
                        ${r.length}x Retur Selesai
                    </span>
                </div>
                <div class="space-y-2.5">
                    ${r.map(m=>`
                        <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-rose-100 dark:border-rose-900/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-2xs">
                            <div>
                                <div class="flex items-center gap-2">
                                    <span class="font-black text-xs text-rose-700 dark:text-rose-400 font-mono">${u(m.id)}</span>
                                    <span class="text-[10px] font-bold text-slate-400">&middot; ${new Date(m.createdAt).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"})}</span>
                                </div>
                                <p class="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5">
                                    Kompensasi: <b class="capitalize">${m.refundMethod==="cash"?"Pengembalian Tunai":m.refundMethod==="credit"?"Store Credit":"Tukar Barang"}</b>
                                    ${m.notes?`&middot; <i>"${u(m.notes)}"</i>`:""}
                                </p>
                            </div>
                            <div class="flex items-center gap-2.5 justify-between sm:justify-end">
                                <span class="text-xs font-black text-rose-600 dark:text-rose-400 font-mono">${g(m.totalRefund)}</span>
                                <button type="button" onclick="if(typeof window.closeOrderDetailModal==='function') window.closeOrderDetailModal(); if(window.openAdminTab){window.openAdminTab('returns');}" class="px-2.5 py-1 rounded-lg bg-rose-50 hover:bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800 text-[10px] font-bold transition-all cursor-pointer">
                                    Buka RMA
                                </button>
                            </div>
                        </div>
                    `).join("")}
                </div>
            </div>`:""}

            ${t.claimedReward?`
            <div class="bg-violet-50 dark:bg-violet-900/10 p-5 sm:p-6 rounded-[1.5rem] border border-violet-200 dark:border-violet-800 shadow-sm">
                <h4 class="font-bold text-violet-700 dark:text-violet-400 text-sm border-b border-violet-200 dark:border-violet-800 pb-4 mb-4 flex items-center gap-3"><div class="w-8 h-8 rounded-xl bg-violet-100 dark:bg-violet-900/40 text-violet-500 flex items-center justify-center border border-violet-200 dark:border-violet-800"><i class="fa-solid fa-gift"></i></div> Klaim Hadiah</h4>
                <div class="space-y-3">
                    <div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold text-xs">Hadiah</span><span class="font-bold text-violet-700 dark:text-violet-400 text-sm">${u(t.claimedReward.name)}</span></div>
                    <div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold text-xs">Poin Ditukar</span><span class="font-bold text-slate-800 dark:text-white text-sm">${t.claimedReward.pointsCost} Poin</span></div>
                    <div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold text-xs">Status</span><span class="font-bold text-xs px-2 py-1 rounded-xl ${t.claimedReward.status==="ready"?"bg-emerald-100 text-emerald-600":t.claimedReward.status==="waiting_stock"?"bg-amber-100 text-amber-600":"bg-slate-200 text-slate-600"}">${Yr(t.claimedReward)}</span></div>
                    ${t.claimedReward.note?`<div class="bg-white/70 dark:bg-slate-900/40 p-2.5 rounded-xl text-[11px] italic text-violet-600 dark:text-violet-400">"${u(t.claimedReward.note)}"</div>`:""}
                    <div class="border-t border-dashed border-violet-200 dark:border-violet-800 pt-3.5 mt-1 space-y-2.5">
                        <button type="button" onclick="ackRewardClaim('${t.orderId}','ready')" class="w-full py-2.5 rounded-xl primary-bg text-[11px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95 transition-all"><i class="fa-solid fa-check"></i> Stok Ada — Kirim Bersama Pesanan</button>
                        <button type="button" onclick="ackRewardClaim('${t.orderId}','waiting_stock')" class="w-full py-2.5 rounded-xl bg-amber-100 dark:bg-amber-900/30 hover:bg-amber-200 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800 text-[11px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95 transition-all"><i class="fa-solid fa-clock"></i> Stok Kosong — Tunda Pengiriman</button>
                    </div>
                </div>
            </div>`:""}

            <div class="bg-slate-900 p-6 sm:p-7 rounded-[1.5rem] text-white shadow-xl shadow-slate-900/20 border border-slate-700/60 relative overflow-hidden group mt-2">
                <div class="flex justify-between items-center border-b border-slate-700/80 pb-4 mb-4 relative z-10">
                    <h4 class="font-bold text-[11px] uppercase tracking-widest text-slate-300 flex items-center gap-2.5"><i class="fa-solid fa-wallet text-[var(--color-primary)] text-sm"></i> Ringkasan Bayar</h4>
                    <span class="bg-white/15 px-3 py-1 rounded-xl text-[10px] font-bold tracking-widest border border-white/20 uppercase shadow-inner text-white">${u(t.payment?.method||"").toUpperCase()}</span>
                </div>
                
                <div class="space-y-3 font-medium text-sm text-slate-300 relative z-10">
                    <div class="flex justify-between items-center"><span>Subtotal Produk</span><span class="font-bold text-white">${g(a.subtotal)}</span></div>
                    ${t.customer?.deliveryMethod==="delivery"?`<div class="flex justify-between items-center"><span>Ongkos Kirim</span><span class="font-bold text-white">${g(a.shipping)}</span></div>`:""}
                    ${a.shippingDiscount?`<div class="flex justify-between items-center text-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.15)] px-2 py-1 -mx-2 rounded-xl"><span>Diskon Ongkir</span><span class="font-bold">-${g(a.shippingDiscount)}</span></div>`:""}
                    ${a.productDiscount?`<div class="flex justify-between items-center text-rose-400 bg-rose-900/20 px-2 py-1 -mx-2 rounded-xl"><span>Diskon Promo</span><span class="font-bold">-${g(a.productDiscount)}</span></div>`:""}
                    ${a.pointDiscount>0?`
                    <div class="flex justify-between items-center text-emerald-400 bg-emerald-950/40 px-2.5 py-1.5 -mx-2 rounded-xl border border-emerald-800/40">
                        <span class="flex items-center gap-1.5 font-bold"><i class="fa-solid fa-tags text-emerald-400"></i> Diskon Poin Member</span>
                        <span class="font-bold font-mono">-${g(a.pointDiscount)}</span>
                    </div>`:""}
                    ${a.paylaterAdminFee>0?`<div class="flex justify-between items-center text-slate-300"><span>Biaya Admin PayLater</span><span class="font-bold text-white">+${g(a.paylaterAdminFee)}</span></div>`:""}
                    ${a.paylaterServiceFee>0?`<div class="flex justify-between items-center text-slate-300"><span>Biaya Penanganan / Layanan</span><span class="font-bold text-white">+${g(a.paylaterServiceFee)}</span></div>`:""}
                    ${a.hasPpn?`
                    <div class="flex justify-between items-center text-slate-400"><span>DPP (Dasar Pengenaan Pajak)</span><span class="font-bold text-white">${g(a.dppAmount)}</span></div>
                    <div class="flex justify-between items-center text-amber-400 bg-amber-900/20 px-2 py-1 -mx-2 rounded-xl"><span>${u(a.ppnLabel)}</span><span class="font-bold">${a.isInclusive?"":"+"}${g(a.ppnAmount)}</span></div>
                    `:""}
                </div>
                
                <div class="border-t border-dashed border-slate-600/60 my-5 relative z-10"></div>
                
                <div class="flex justify-between items-end relative z-10">
                    <span class="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Total Tagihan</span>
                    <span class="text-3xl font-bold text-[var(--color-primary)] tracking-tight font-extrabold">${g(a.grandTotal)}</span>
                </div>

                ${(()=>{if(!(t.payment?.method==="tempo"||t.isTempo))return"";const b=!!(t.payment?.isPaylater||t.isPaylater||t.payment?.subMethod==="paylater"),f=parseFloat(t.payment?.tempoDp??t.payment?.dp)||0,h=parseFloat(t.payment?.tempoBalance)||0,w=t.payment?.paymentStatus==="lunas"||h<=0;return`
                    <div class="mt-4 pt-3.5 border-t border-slate-700/80 space-y-2 relative z-10">
                        <div class="flex justify-between items-center text-xs">
                            <span class="text-slate-400 font-bold flex items-center gap-1.5">
                                <i class="fa-solid ${b?"fa-bolt text-emerald-400":"fa-hourglass-half text-amber-400"}"></i> Jenis Transaksi
                            </span>
                            <span class="font-bold ${b?"text-emerald-300":"text-amber-300"}">
                                ${b?"Putri PayLater Member VIP":"Penjualan Tempo (Piutang)"}
                            </span>
                        </div>
                        ${b&&t.payment?.paylaterMonths?`
                        <div class="flex justify-between items-center text-xs">
                            <span class="text-slate-400">Tenor Cicilan</span>
                            <span class="font-bold text-white font-mono">${t.payment.paylaterTenor==="2m"?"2 Bulan (2x Cicilan)":t.payment.paylaterTenor==="3m"?"3 Bulan (3x Cicilan)":"30 Hari (1x Bayar)"}</span>
                        </div>`:""}
                        ${b&&t.payment?.paylaterAdminFee>0?`
                        <div class="flex justify-between items-center text-xs">
                            <span class="text-slate-400">Biaya Admin PayLater</span>
                            <span class="font-bold text-slate-300 font-mono">+${g(t.payment.paylaterAdminFee)}</span>
                        </div>`:""}
                        ${b&&t.payment?.paylaterServiceFee>0?`
                        <div class="flex justify-between items-center text-xs">
                            <span class="text-slate-400">Biaya Layanan / Penanganan</span>
                            <span class="font-bold text-slate-300 font-mono">+${g(t.payment.paylaterServiceFee)}</span>
                        </div>`:""}
                        ${b?`
                        <div class="flex justify-between items-center text-xs">
                            <span class="text-slate-400">Limit PayLater Terpakai</span>
                            <span class="font-bold text-emerald-400 font-mono">${g(t.payment?.paylaterUsed||t.payment?.grandTotal-f)}</span>
                        </div>`:""}
                        <div class="flex justify-between items-center text-xs">
                            <span class="text-slate-400">Uang Muka (DP Dibayar)</span>
                            <span class="font-bold text-emerald-400 font-mono">${g(f)}</span>
                        </div>
                        <div class="flex justify-between items-center text-xs">
                            <span class="text-slate-400">Sisa Tagihan ${b?"PayLater":"Piutang"}</span>
                            <span class="font-bold font-mono ${w?"text-emerald-400":b?"text-emerald-300":"text-amber-400"}">${g(h)}</span>
                        </div>
                        ${b&&t.payment?.paylaterMonthlyInstallment?`
                        <div class="flex justify-between items-center text-xs text-emerald-300 font-bold bg-emerald-950/40 p-2 rounded-xl border border-emerald-800/40">
                            <span>Angsuran per Bulan (${t.payment?.paylaterMonths||1}x)</span>
                            <span class="font-mono">${g(t.payment.paylaterMonthlyInstallment)}/bln</span>
                        </div>`:""}
                        <div class="flex justify-between items-center text-xs">
                            <span class="text-slate-400">Status ${b?"PayLater":"Piutang"}</span>
                            <span class="px-2 py-0.5 rounded-lg text-[10px] font-black uppercase tracking-wider ${w?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/40":b?"bg-teal-500/20 text-teal-300 border border-teal-500/40":"bg-amber-500/20 text-amber-300 border border-amber-500/40"}">
                                ${w?"LUNAS":"BELUM LUNAS"}
                            </span>
                        </div>
                        <button type="button" onclick="if(typeof window.closeOrderDetailModal==='function') window.closeOrderDetailModal(); if(typeof window.openAdminTab==='function') window.openAdminTab('piutang'); setTimeout(() => { if(typeof window.openTempoDetail==='function') window.openTempoDetail('${u(t.orderId)}'); }, 300);" class="mt-2.5 w-full py-2.5 px-3 rounded-xl ${b?"bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40":"bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40"} text-[11px] font-bold flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-95 shadow-xs">
                            <i class="fa-solid ${b?"fa-bolt":"fa-file-invoice-dollar"}"></i> Kelola Tagihan &amp; Cicilan di Modul Piutang
                        </button>
                    </div>`})()}
            </div>

            </div>
            </div>
        </div>`);const p=k("admin-order-modal"),d=k("admin-order-modal-box"),c=k("admin-order-modal-content");c&&(c.scrollTop=0,c.style.transform="",c.style.transition=""),p&&p.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("adminOrder"),pe(p,d)},ks=async(e,t,a=null)=>{const s=(typeof window.normalizeWA=="function"?window.normalizeWA:o=>String(o||"").replace(/\D/g,"").replace(/^0/,"62"))(t);if(!s||s.length<10)return x("Nomor WA tidak valid!");R("Menyimpan...");try{const o=P.collection("freshmart").doc("cms_data").collection("customers").doc(s),i=await o.get();if(i.exists){x(`Nomor ini sudah terdaftar atas nama: ${i.data().name}`),C();return}if(await o.set({id:parseInt(s,10),name:e||"-",phone:s,points:0,registeredAt:Date.now()}),a){await P.collection("freshmart_orders").doc(a).update({customerType:"Member"});const n=D.findIndex(p=>p.orderId===a);n!==-1&&(D[n].customerType="Member")}x("Pelanggan berhasil didaftarkan sebagai Member!"),a&&typeof window.openOrderDetail=="function"&&setTimeout(()=>window.openOrderDetail(a),400)}catch(o){console.error("Gagal simpan pelanggan:",o),x("Gagal menyimpan data pelanggan: "+(o.message||""))}finally{C()}},hs=async(e,t)=>{if(t==="waiting_stock"&&typeof window.customPrompt=="function"){window.customPrompt("Catatan untuk pelanggan:","Stok hadiah kosong, akan kami kirim susulan begitu stok tersedia kembali.",async r=>{if(r!==null){R("Menyimpan...");try{await P.collection("freshmart_orders").doc(e).update({"claimedReward.status":t,"claimedReward.note":r||""}),x("Status klaim hadiah diperbarui!");let s=D.findIndex(o=>o.orderId===e);s!==-1&&(D[s].claimedReward||(D[s].claimedReward={}),D[s].claimedReward.status=t,D[s].claimedReward.note=r||""),typeof window.openCustomerOrderDetail=="function"&&window.openCustomerOrderDetail(e)}catch(s){x("Gagal update klaim: "+s.message)}finally{C()}}});return}let a="";R("Menyimpan...");try{await P.collection("freshmart_orders").doc(e).update({"claimedReward.status":t,"claimedReward.note":a});const r=D.find(s=>s.orderId===e);r&&(r.claimedReward.status=t,r.claimedReward.note=a,Et(e)),x("Status hadiah diperbarui!")}catch(r){console.error("Gagal update status hadiah:",r),x("Gagal update status hadiah: "+(r.message||""))}finally{C()}},ha=(e=!1)=>{const t=k("admin-order-modal"),a=k("admin-order-modal-box"),r=()=>{Y(t,a)};typeof window.requestCloseModal=="function"?window.requestCloseModal("adminOrder",e,r):r()},wa=async(e,t=null)=>{try{let a=t;if(!a){const i=await P.collection("freshmart_orders").doc(e).get();if(!i.exists)return;a=i.data()}if(!a)return;if((l.store?.useStock===!0||l.store?.useStock==="true")&&!a.isStockRestocked&&Array.isArray(a.items)&&a.items.length>0){for(const i of a.items){const n=i.id!=null?String(i.id):null,p=parseFloat(i.qty)||0;if(!(!n||p<=0))try{const d=P.collection("freshmart").doc("cms_data").collection("products").doc(n),c=await d.get();if(c.exists){const m=c.data();let b=(parseFloat(m.stock)||0)+p,f={stock:b};if(i.variantName&&Array.isArray(m.variants)){const h=m.variants.findIndex(w=>w.name===i.variantName);h!==-1&&(m.variants[h].stock=(parseFloat(m.variants[h].stock)||0)+p,m.variants[h].stock>0&&(m.variants[h].isActive=!0),f.variants=m.variants)}if(await d.update(f),Array.isArray(l.products)){const h=l.products.find(w=>String(w.id)===n);h&&(h.stock=b,f.variants&&(h.variants=f.variants))}}}catch(d){console.warn(`[Auto-Restock] Gagal restock produk ${n}:`,d)}}a.isStockRestocked=!0}const s=a.customerPhone||a.customer?.wa;if(!a.isPointsRolledBack&&s){try{const i=P.collection("freshmart").doc("cms_data").collection("customers").doc(s),n=await i.get();if(n.exists){const p=n.data();let d=parseFloat(p.points)||0;const c=parseFloat(a.pointsEarned)||0;if(c>0&&(d=Math.max(0,d-c)),a.claimedReward&&a.claimedReward.id){const m=parseFloat(a.claimedReward.pointsCost)||0;m>0&&(d+=m);try{const b=P.collection("freshmart").doc("cms_data").collection("rewards").doc(String(a.claimedReward.id)),f=await b.get();if(f.exists){const h=f.data(),w=(parseFloat(h.stock)||0)+1;if(await b.update({stock:w}),Array.isArray(l.rewards)){const v=l.rewards.find(S=>String(S.id)===String(a.claimedReward.id));v&&(v.stock=w)}}}catch(b){console.warn("[Auto-Restock] Gagal restock hadiah:",b)}a.claimedReward.status="cancelled"}if(await i.update({points:d}),Array.isArray(l.customers)){const m=l.customers.find(b=>String(b.phone)===s||String(b.id)===s);m&&(m.points=d)}}}catch(i){console.warn("[Auto-Restock] Gagal rollback poin member:",i)}a.isPointsRolledBack=!0}const o=!!(a.payment?.isPaylater||a.isPaylater||a.payment?.subMethod==="paylater");if(!a.isPaylaterRolledBack&&o&&s){const i=a.paylaterLimitTracked!==!1;try{const n=(parseFloat(a.payment?.paylaterUsed)||0)>0?io(a.payment):parseFloat(a.paylaterUsed||a.payment?.tempoBalance)||0;if(n>0&&i){const p=s.replace(/\D/g,""),d=p.startsWith("0")?"62"+p.slice(1):p,c=P.collection("freshmart").doc("cms_data").collection("customers").doc(d);if(await P.runTransaction(async m=>{const b=await m.get(c),f=Math.max(0,parseFloat(b.exists&&b.data().paylaterUsed||0)),h=Math.max(0,f-n);b.exists?m.update(c,{paylaterUsed:h}):m.set(c,{paylaterUsed:0},{merge:!0})}),Array.isArray(l.customers)){const m=l.customers.find(b=>b&&(String(b.phone).replace(/\D/g,"")===p||String(b.id)===d));m&&(m.paylaterUsed=Math.max(0,Math.max(0,parseFloat(m.paylaterUsed)||0)-n))}}else n>0&&!i&&console.info("[PayLater Rollback] Dilewati: pesanan ini tidak berhasil update Firestore saat checkout (paylaterLimitTracked=false). Tidak ada rollback diperlukan.")}catch(n){console.warn("[Auto-Restock] Gagal rollback limit PayLater:",n)}a.isPaylaterRolledBack=!0}if(await P.collection("freshmart_orders").doc(e).update({isStockRestocked:a.isStockRestocked||!1,isPointsRolledBack:a.isPointsRolledBack||!1,isPaylaterRolledBack:a.isPaylaterRolledBack||!1,...a.claimedReward?{claimedReward:a.claimedReward}:{}}).catch(()=>{}),Array.isArray(D)){const i=D.findIndex(n=>n.orderId===e);i!==-1&&(D[i].isStockRestocked=a.isStockRestocked,D[i].isPointsRolledBack=a.isPointsRolledBack,a.claimedReward&&(D[i].claimedReward=a.claimedReward))}}catch(a){console.error("[Auto-Restock] Gagal proses pemulihan stok/poin:",a)}},ws=async(e,t=null)=>{try{let a=t;if(!a){const i=await P.collection("freshmart_orders").doc(e).get();if(!i.exists)return;a=i.data()}if(!a)return;if((l.store?.useStock===!0||l.store?.useStock==="true")&&a.isStockRestocked&&Array.isArray(a.items)&&a.items.length>0){for(const i of a.items){const n=i.id!=null?String(i.id):null,p=parseFloat(i.qty)||0;if(!(!n||p<=0))try{const d=P.collection("freshmart").doc("cms_data").collection("products").doc(n),c=await d.get();if(c.exists){const m=c.data();let b=Math.max(0,(parseFloat(m.stock)||0)-p),f={stock:b};if(i.variantName&&Array.isArray(m.variants)){const h=m.variants.findIndex(w=>w.name===i.variantName);h!==-1&&(m.variants[h].stock=Math.max(0,(parseFloat(m.variants[h].stock)||0)-p),m.variants[h].stock<=0&&(m.variants[h].isActive=!1),f.variants=m.variants)}if(await d.update(f),Array.isArray(l.products)){const h=l.products.find(w=>String(w.id)===n);h&&(h.stock=b,f.variants&&(h.variants=f.variants))}}}catch(d){console.warn(`[Auto-Deduct] Gagal potong stok produk ${n}:`,d)}}a.isStockRestocked=!1}const s=a.customerPhone||a.customer?.wa;if(a.isPointsRolledBack&&s){try{const i=P.collection("freshmart").doc("cms_data").collection("customers").doc(s),n=await i.get();if(n.exists){const p=n.data();let d=parseFloat(p.points)||0;const c=parseFloat(a.pointsEarned)||0;if(c>0&&(d+=c),a.claimedReward&&a.claimedReward.id){const m=parseFloat(a.claimedReward.pointsCost)||0;m>0&&(d=Math.max(0,d-m));try{const b=P.collection("freshmart").doc("cms_data").collection("rewards").doc(String(a.claimedReward.id)),f=await b.get();if(f.exists){const h=f.data(),w=Math.max(0,(parseFloat(h.stock)||0)-1);if(await b.update({stock:w}),Array.isArray(l.rewards)){const v=l.rewards.find(S=>String(S.id)===String(a.claimedReward.id));v&&(v.stock=w)}}}catch(b){console.warn("[Auto-Deduct] Gagal potong stok hadiah:",b)}a.claimedReward.status="pending"}if(await i.update({points:d}),Array.isArray(l.customers)){const m=l.customers.find(b=>String(b.phone)===s||String(b.id)===s);m&&(m.points=d)}}}catch(i){console.warn("[Auto-Deduct] Gagal alokasi ulang poin member:",i)}a.isPointsRolledBack=!1}const o=!!(a.payment?.isPaylater||a.isPaylater||a.payment?.subMethod==="paylater");if(a.isPaylaterRolledBack&&o&&s){try{const i=parseFloat(a.payment?.paylaterUsed||a.paylaterUsed||a.payment?.tempoBalance)||0;if(i>0){const n=s.replace(/\D/g,""),p=n.startsWith("0")?"62"+n.slice(1):n,d=P.collection("freshmart").doc("cms_data").collection("customers").doc(p);if(await P.runTransaction(async c=>{const m=await c.get(d);if(m.exists){const b=Math.max(0,parseFloat(m.data().paylaterUsed)||0);c.update(d,{paylaterUsed:b+i})}}),Array.isArray(l.customers)){const c=l.customers.find(m=>m&&(String(m.phone).replace(/\D/g,"")===n||String(m.id)===p));c&&(c.paylaterUsed=Math.max(0,parseFloat(c.paylaterUsed)||0)+i)}}}catch(i){console.warn("[Auto-Deduct] Gagal re-apply limit PayLater:",i)}a.isPaylaterRolledBack=!1}if(await P.collection("freshmart_orders").doc(e).update({isStockRestocked:!1,isPointsRolledBack:!1,isPaylaterRolledBack:!1,...a.claimedReward?{claimedReward:a.claimedReward}:{}}).catch(()=>{}),Array.isArray(D)){const i=D.findIndex(n=>n.orderId===e);i!==-1&&(D[i].isStockRestocked=!1,D[i].isPointsRolledBack=!1,a.claimedReward&&(D[i].claimedReward=a.claimedReward))}}catch(a){console.error("[Auto-Deduct] Gagal proses deduksi stok/poin:",a)}},vs=async(e,t)=>{if(!Bt){Ce(!0),R("Update...");try{let a=D.find(s=>s.orderId===e);const r=a?a.status:null;await P.collection("freshmart_orders").doc(e).update({status:t}),a&&(a.status=t),t==="Dibatalkan"&&r!=="Dibatalkan"?(await wa(e,a),x("Pesanan dibatalkan & stok dikembalikan ke toko!","info")):r==="Dibatalkan"&&t!=="Dibatalkan"?(await ws(e,a),x("Pesanan diaktifkan kembali & stok dipotong!","info")):x("Status berhasil diperbarui!"),Et(e)}catch{x("Gagal!")}finally{Ce(!1),C()}}},ys=async e=>{if(!e)return x("ID pesanan tidak valid!");let t=D.find(A=>A.orderId===e);if(!t){R("Memuat data...");try{const A=await P.collection("freshmart_orders").doc(e).get();if(C(),!A.exists)return x("Data pesanan tidak ditemukan!");t=A.data()}catch{C(),x("Gagal memuat data pesanan!");return}}const a=t.customer&&t.customer.wa;if(!a)return x("Nomor WhatsApp pelanggan tidak tersedia!");const r=l&&l.store&&l.store.name?l.store.name:"Toko Putri",s=l&&l.store&&l.store.phone?l.store.phone:"",o=t.customer&&t.customer.name?t.customer.name:"Pelanggan",i=t.status||"Baru",n=t.payment&&t.payment.grandTotal?g(t.payment.grandTotal):"-",p=(e||"").split("-").pop(),d=t.payment&&t.payment.method?t.payment.method:"",c=!!(t.payment?.isPaylater||t.payment?.subMethod==="paylater"),m=d==="transfer"?"Transfer Bank":d==="qris"?"QRIS":d==="cod"?"COD (Bayar di Tempat)":d==="tempo"&&c?"Putri PayLater":d==="tempo"?"Penjualan Tempo":d==="cashier"||d==="cash"?"Tunai":d.toUpperCase(),b=t.source==="pos"||t.channel==="pos",h=t.customer?.deliveryMethod==="delivery",v=(t.items||[]).slice(0,3).map(A=>`  • ${A.name}${A.variantName?` (${A.variantName})`:""} x${parseFloat(A.qty)}`).join(`
`),S=(t.items||[]).length>3?`  ...dan ${(t.items||[]).length-3} item lainnya`:"",$=v+(S?`
`+S:"");let B="";b||(t.isDropPoint&&t.dropPoint?B=`
📍 *Dikirim ke Lokasi:*
👤 Penerima: *${t.dropPoint.name||"-"}*
🏠 Alamat Tujuan: ${t.dropPoint.address||"-"}
`:h&&t.customer?.address?B=`
🚚 *Alamat Pengiriman:*
${t.customer.address}
`:h||(B=`
🏪 *Metode:* Ambil di Toko
`));let I="";i==="Baru"?I=`Halo Bapak/Ibu *${o}*,

Terima kasih telah mempercayakan kebutuhan material & perlengkapan bangunan Anda kepada *${r}*.

📋 *KONFIRMASI PESANAN MATERIAL*
• No. Referensi : *#${p}*
• Total Transaksi : *${n}*
• Metode Bayar : *${m}*

📦 *Rincian Barang:*
${$}
`+B+`
Saat ini pesanan Anda telah masuk ke sistem kami dan sedang diverifikasi oleh admin operasional.`+(s?`

Untuk pertanyaan teknis, perubahan jadwal kirim, atau permintaan faktur/nota resmi, silakan hubungi kami melalui nomor ini. Terima kasih atas kerja sama Anda.`:`

Terima kasih.`):i==="Diproses"?I=`Halo Bapak/Ibu *${o}*,

Pemberitahuan pemrosesan pesanan material dari *${r}*:

📋 *STATUS PESANAN: SEDANG DISIAPKAN*
• No. Referensi : *#${p}*
• Total Tagihan : *${n}*

📦 *Daftar Material:*
${$}
`+B+(h&&!t.isDropPoint?`
Tim logistik kami sedang menyiapkan & memuat barang ke armada. Material akan segera dikirimkan ke alamat Anda. Mohon pastikan akses jalan dan ruang bongkar muat tersedia.`:t.isDropPoint?`
Material sedang disiapkan untuk pengiriman langsung ke lokasi proyek / penerima tujuan. Armada kami akan berkoordinasi saat proses bongkar muat.`:`
Material pesanan Anda sedang disiapkan di counter pick-up toko dan dapat diambil setelah konfirmasi kesiapan barang ini diterima.`)+`

Terima kasih atas kepercayaan dan kerja sama Anda bersama *${r}*.`:i==="Selesai"?I=`Halo Bapak/Ibu *${o}*,

📋 *SURAT JALAN & TRANSAKSI SELESAI*

Pesanan material *#${p}* dari *${r}* telah berhasil diserahterimakan dan diselesaikan.

• No. Referensi : *#${p}*
• Total Transaksi : *${n}*
• Metode Bayar : *${m}*

Seluruh barang telah diterima dengan baik. Terima kasih telah mempercayakan suplai material & alat teknik proyek Anda kepada *${r}*. Kami senantiasa siap mendukung proyek dan kebutuhan konstruksi Anda berikutnya.`:i==="Dibatalkan"?I=`Halo Bapak/Ibu *${o}*,

📋 *PEMBERITAHUAN PEMBATALAN PESANAN*

Kami menginformasikan bahwa pesanan material *#${p}* pada *${r}* telah dibatalkan dari sistem.

• No. Referensi : *#${p}*
• Nilai Transaksi : *${n}*

Apabila pembatalan ini memerlukan klarifikasi lebih lanjut atau Anda ingin melakukan pemesanan ulang / konsultasi spesifikasi material lain, silakan hubungi tim layanan pelanggan kami.

Terima kasih atas perhatian dan kerja sama Anda.`:I=`Halo Bapak/Ibu *${o}*,

Update status pesanan material *#${p}* dari *${r}*:

📦 Status Terkini : *${i}*
💰 Total Tagihan : *${n}*

Terima kasih atas kerja sama Anda bersama ${r}.`,typeof window.openWhatsApp=="function"?window.openWhatsApp(a,I):window.open(`https://wa.me/${a}?text=${encodeURIComponent(I)}`,"_blank","noopener,noreferrer")},Ss=async e=>{if(!e)return x("ID pesanan tidak valid!");R("Memuat data...");try{const t=await P.collection("freshmart_orders").doc(e).get();if(C(),!t.exists)return x("Data pesanan tidak ditemukan!");const a=t.data(),r=a.dropPoint&&a.dropPoint.wa;if(!r)return x("Nomor WhatsApp penerima tujuan tidak tersedia!");const s=l&&l.store&&l.store.name?l.store.name:"Toko Putri",o=a.dropPoint&&a.dropPoint.name?a.dropPoint.name:"Penerima",i=a.customer&&a.customer.name?a.customer.name:"Pemesan",n=a.dropPoint&&a.dropPoint.address?a.dropPoint.address:"-",p=a.status||"Diproses",d=`Halo Bapak/Ibu *${o}*,

Kami dari tim logistik *${s}* menginformasikan jadwal pengiriman material proyek atas pesanan dari *${i}*:

📋 *DETAIL PENGIRIMAN LOGISTIK*
• No. Surat Jalan / Pesanan : *#${e.split("-").pop()}*
• Lokasi Proyek / Tujuan : ${n}
• Status Pengiriman : *${p}*

Armada kami akan mengantarkan material ke titik bongkar muat yang ditentukan. Mohon pastikan perwakilan proyek / mandor berada di lokasi saat armada tiba. Terima kasih atas kerja sama Anda.`;typeof window.openWhatsApp=="function"?window.openWhatsApp(r,d):window.open(`https://wa.me/${r}?text=${encodeURIComponent(d)}`,"_blank","noopener,noreferrer")}catch{C(),x("Gagal memuat data pesanan!")}},Ps=e=>{ce("Hapus Pesanan","Apakah Anda yakin ingin menghapus data pesanan ini secara permanen? Jika pesanan belum dibatalkan, alokasi stok material akan otomatis dipulihkan ke inventori toko.",async()=>{if(!Bt){Ce(!0),R("Menghapus...");try{let t=D.find(a=>a.orderId===e);(!t||t.status!=="Dibatalkan")&&await wa(e,t),await P.collection("freshmart_orders").doc(e).delete(),x("Pesanan berhasil dihapus dan inventori stok telah dipulihkan."),zr===e&&ha()}catch{x("Gagal!")}finally{Ce(!1),C()}}})};window.exportOrdersToExcel=bs;window.setOrderSourceFilter=fs;window.rAdmOrd=gs;window.openOrderDetail=Et;window.saveOrderCustomerToDB=ks;window.ackRewardClaim=hs;window.closeOrderDetailModal=ha;window.updateOrderStatus=vs;window.konfirmasiKeWA=ys;window.konfirmasiKeWAPenerima=Ss;window.deleteOrder=Ps;const ve={TRANSACTIONS:"transactions",FULL_FACTORY:"full_factory"};let xt=ve.TRANSACTIONS,je=!1,Pe=!1,va=!1,jt="";const Po="RESET KE SETELAN AWAL",Ao=()=>{let e=k("modal-factory-reset");e||(e=document.createElement("div"),e.id="modal-factory-reset",e.className="fixed inset-0 z-[200] flex hidden items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/85 opacity-0 transition-opacity duration-300",e.onclick=t=>{t.target===e&&!je&&ya()},e.innerHTML=`
            <div id="modal-factory-reset-box" class="modal-bottom-sheet relative flex max-h-[94dvh] sm:max-h-[90dvh] w-full max-w-full sm:max-w-2xl md:max-w-3xl translate-y-full sm:translate-y-10 transform flex-col overflow-hidden rounded-t-[2rem] sm:rounded-3xl border border-rose-300/80 dark:border-rose-900/60 bg-white dark:bg-[#0b1121] shadow-2xl transition-transform duration-300">
                <div id="modal-factory-reset-content" class="flex-1 flex flex-col overflow-hidden min-h-0"></div>
            </div>
        `,document.body.appendChild(e))},As=(e=ve.TRANSACTIONS)=>{if(!ye()){x("Akses Ditolak: Hanya Pemilik Toko (Owner) yang berwenang melakukan Reset ke Setelan Awal.","error");return}Ao(),xt=e===ve.FULL_FACTORY?ve.FULL_FACTORY:ve.TRANSACTIONS,je=!1,Pe=!1,va=!1,jt="",Ft();const t=k("modal-factory-reset"),a=k("modal-factory-reset-box");t&&a&&(pe(t,a),typeof window.pushModalHistory=="function"&&window.pushModalHistory("factoryReset"))},ya=(e=!1)=>{if(je){x("Proses pembersihan sedang berjalan, mohon tunggu...","warning");return}const t=k("modal-factory-reset"),a=k("modal-factory-reset-box");if(!t)return;const r=()=>{Y(t,a)};!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("factoryReset",!1,r):r()},To=e=>{je||(xt=e,Ft())},$o=e=>{jt=String(e||"").trim(),Ot()},Io=e=>{va=!!e,Ot()},Ts=()=>{const e=jt.toUpperCase();return(e===Po||e==="RESET SETELAN AWAL"||e==="RESET PABRIK")&&va&&!je},Ot=()=>{const e=k("btn-execute-factory-reset");e&&(Ts()?(e.disabled=!1,e.className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-black text-xs uppercase tracking-wider transition-all shadow-lg shadow-rose-600/30 active:scale-95 cursor-pointer flex items-center justify-center gap-2"):(e.disabled=!0,e.className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-600 font-black text-xs uppercase tracking-wider transition-all cursor-not-allowed flex items-center justify-center gap-2 border border-slate-300/60 dark:border-slate-700/60"))},Ft=()=>{const e=k("modal-factory-reset-content");if(!e)return;const t=xt===ve.FULL_FACTORY;e.innerHTML=`
        <!-- Header Modal Peringatan Bahaya -->
        <div class="p-5 sm:p-6 border-b border-rose-100 dark:border-rose-950/80 bg-rose-50/70 dark:bg-rose-950/30 flex items-center justify-between shrink-0">
            <div class="flex items-center gap-3.5">
                <div class="w-11 h-11 rounded-2xl bg-rose-500 text-white flex items-center justify-center text-xl shadow-md shadow-rose-500/30 shrink-0">
                    <i class="fa-solid fa-triangle-exclamation animate-pulse"></i>
                </div>
                <div>
                    <div class="flex items-center gap-2">
                        <h3 class="font-black text-base sm:text-lg text-slate-900 dark:text-white leading-tight">
                            Pusat Reset ke Setelan Awal &amp; Pembersihan Toko
                        </h3>
                        <span class="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-rose-200 dark:bg-rose-900 text-rose-800 dark:text-rose-200">Zona Bahaya</span>
                    </div>
                    <p class="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
                        Kembalikan sistem ke setelan awal yang bersih dan segar dengan perlindungan cadangan darurat.
                    </p>
                </div>
            </div>
            <button type="button" onclick="window.closeFactoryResetModal()" class="w-8 h-8 rounded-xl bg-white dark:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-white flex items-center justify-center text-sm cursor-pointer transition-colors shadow-2xs border border-slate-200 dark:border-slate-700">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </div>

        <!-- Scrollable Modal Body -->
        <div class="p-5 sm:p-6 overflow-y-auto space-y-5 flex-1 custom-scrollbar">

            <!-- 1. Pemilihan Mode Reset (2 Bento Cards) -->
            <div>
                <label class="block text-xs font-black uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2.5">
                    1. Pilih Lingkup Pembersihan Data
                </label>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    
                    <!-- Opsi A: Reset Transaksi & Data Uji Coba (Disarankan) -->
                    <div onclick="window.setFactoryResetMode('${ve.TRANSACTIONS}')"
                        class="p-4 rounded-2xl border-2 transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between ${t?"border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300":"border-emerald-500 bg-emerald-50/40 dark:bg-emerald-950/20 shadow-sm"}">
                        <div>
                            <div class="flex items-center justify-between mb-2">
                                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-500 text-white shadow-2xs">Sangat Disarankan</span>
                                <input type="radio" name="reset_mode" ${t?"":"checked"} class="w-4 h-4 accent-emerald-600 cursor-pointer">
                            </div>
                            <h4 class="font-extrabold text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                                <i class="fa-solid fa-receipt text-emerald-600 dark:text-emerald-400"></i>
                                Bersihkan Transaksi Saja
                            </h4>
                            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                                Menghapus seluruh riwayat pesanan, struk kasir, shift kasir, dan pengeluaran dummy hasil uji coba.
                            </p>
                        </div>
                        <div class="mt-3 pt-2.5 border-t border-slate-200/60 dark:border-slate-800 text-[11px] font-bold text-emerald-700 dark:text-emerald-300 flex items-center gap-1.5">
                            <i class="fa-solid fa-shield-check"></i>
                            <span>Katalog Produk, Stok &amp; Supplier AMAN</span>
                        </div>
                    </div>

                    <!-- Opsi B: Reset Total ke Setelan Awal (Full Clean Slate) -->
                    <div onclick="window.setFactoryResetMode('${ve.FULL_FACTORY}')"
                        class="p-4 rounded-2xl border-2 transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between ${t?"border-rose-500 bg-rose-50/40 dark:bg-rose-950/20 shadow-sm":"border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300"}">
                        <div>
                            <div class="flex items-center justify-between mb-2">
                                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-rose-500 text-white shadow-2xs">Reset Total</span>
                                <input type="radio" name="reset_mode" ${t?"checked":""} class="w-4 h-4 accent-rose-600 cursor-pointer">
                            </div>
                            <h4 class="font-extrabold text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                                <i class="fa-solid fa-rotate-left text-rose-600 dark:text-rose-400"></i>
                                Reset Total ke Setelan Awal
                            </h4>
                            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                                Mengosongkan SEMUA transaksi + SEMUA produk + kategori + banner. Toko kembali bersih ke setelan awal 100%.
                            </p>
                        </div>
                        <div class="mt-3 pt-2.5 border-t border-slate-200/60 dark:border-slate-800 text-[11px] font-bold text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                            <i class="fa-solid fa-key"></i>
                            <span>Akun Login Owner &amp; Lisensi Tetap Aktif</span>
                        </div>
                    </div>

                </div>
            </div>

            <!-- 2. Rincian Objek yang Dihapus vs Disimpan -->
            <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/90 dark:border-slate-700/80 text-xs">
                <div class="font-bold text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-2">
                    <i class="fa-solid fa-list-check text-slate-400"></i>
                    <span>Rincian Tindakan Pembersihan (${t?"Mode Reset Total":"Mode Transaksi Saja"}):</span>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11.5px]">
                    <div class="space-y-1.5">
                        <span class="font-bold text-rose-600 dark:text-rose-400 flex items-center gap-1">
                            <i class="fa-solid fa-circle-xmark"></i> Akan Dihapus Bersih:
                        </span>
                        <ul class="space-y-1 text-slate-600 dark:text-slate-400 pl-4 list-disc">
                            <li>Semua Pesanan Penjualan Online &amp; POS Kasir</li>
                            <li>Semua Riwayat Buka/Tutup Shift Kasir &amp; Kas Laci</li>
                            <li>Buku Kas Pengeluaran Harian Toko</li>
                            <li>Riwayat Retur Penjualan (RMA) &amp; Piutang Tempo</li>
                            <li>Riwayat Audit Fisik (Stock Opname)</li>
                            ${t?`
                            <li class="font-bold text-rose-700 dark:text-rose-300">Semua Master Produk, Varian &amp; Stok Barang</li>
                            <li class="font-bold text-rose-700 dark:text-rose-300">Kategori, Brand, Banner Promo &amp; Voucher</li>
                            <li class="font-bold text-rose-700 dark:text-rose-300">Database Member Pelanggan &amp; Supplier</li>
                            `:""}
                        </ul>
                    </div>
                    <div class="space-y-1.5">
                        <span class="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                            <i class="fa-solid fa-circle-check"></i> Tetap Aman &amp; Tidak Dihapus:
                        </span>
                        <ul class="space-y-1 text-slate-600 dark:text-slate-400 pl-4 list-disc">
                            <li>Akun Login Pemilik Toko (Owner) &amp; Password</li>
                            <li>Kunci Lisensi Resmi Toko Putri (Masa Aktif Terjaga)</li>
                            ${t?`
                            <li>Konfigurasi Infrastruktur Server Firebase</li>
                            `:`
                            <li class="font-bold text-emerald-700 dark:text-emerald-300">Seluruh Produk, Foto, Harga &amp; Stok Gudang/Rak</li>
                            <li class="font-bold text-emerald-700 dark:text-emerald-300">Kategori, Brand, Supplier &amp; Pengaturan Toko</li>
                            <li class="font-bold text-emerald-700 dark:text-emerald-300">Profil Toko, Logo, Rekening Bank &amp; QRIS</li>
                            `}
                        </ul>
                    </div>
                </div>
            </div>

            <!-- 3. Cadangan Darurat Otomatis (Safety Net) -->
            <div class="p-4 rounded-2xl border ${Pe?"bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800":"bg-amber-50/60 dark:bg-amber-950/20 border-amber-300 dark:border-amber-800"} flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl ${Pe?"bg-emerald-500 text-white":"bg-amber-500 text-white"} flex items-center justify-center text-base shrink-0 shadow-xs">
                        <i class="fa-solid ${Pe?"fa-check":"fa-cloud-arrow-down"}"></i>
                    </div>
                    <div>
                        <h5 class="font-extrabold text-xs text-slate-900 dark:text-white">
                            ${Pe?"Cadangan Darurat Telah Tersimpan di Perangkat":"Perisai Cadangan Darurat (Safety Snapshot)"}
                        </h5>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400">
                            ${Pe?"File cadangan JSON siap dipakai jika sewaktu-waktu ingin memulihkan data.":"Sistem otomatis mengunduh file cadangan lengkap (.json) sebelum pembersihan."}
                        </p>
                    </div>
                </div>
                <button type="button" onclick="window.downloadEmergencyBackupManual()" class="px-3.5 py-1.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 text-slate-700 dark:text-slate-200 text-xs font-bold transition-all shadow-2xs whitespace-nowrap active:scale-95 cursor-pointer">
                    <i class="fa-solid fa-download mr-1 text-slate-400"></i> Unduh Manual
                </button>
            </div>

            <!-- 4. Konfirmasi Ganda (Anti Salah Tekan) -->
            <div class="space-y-3 pt-2 border-t border-slate-200/80 dark:border-slate-800">
                <label class="block text-xs font-black uppercase tracking-wider text-rose-600 dark:text-rose-400">
                    2. Konfirmasi Keamanan (Wajib)
                </label>

                <!-- Checkbox Pemahaman Risiko -->
                <label class="flex items-start gap-2.5 p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 cursor-pointer hover:border-rose-400 transition-colors">
                    <input type="checkbox" id="chk-reset-risk" onchange="window.onFactoryResetRiskToggle(this.checked)" class="w-4 h-4 mt-0.5 rounded accent-rose-600 cursor-pointer">
                    <span class="text-xs font-bold text-slate-700 dark:text-slate-300 select-none">
                        Saya memahami bahwa tindakan pembersihan data ini bersifat permanen dan tidak dapat dibatalkan di cloud.
                    </span>
                </label>

                <!-- Kolom Ketik Frasa Rahasia -->
                <div>
                    <label class="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
                        Ketik kata <span class="font-black text-rose-600 dark:text-rose-400 px-1.5 py-0.5 rounded bg-rose-100 dark:bg-rose-950/60 font-mono">RESET KE SETELAN AWAL</span> di bawah ini untuk membuka kunci:
                    </label>
                    <input type="text" id="input-reset-phrase" autocomplete="off" spellcheck="false"
                        placeholder="Ketik RESET KE SETELAN AWAL"
                        value="${u(jt)}"
                        oninput="window.onFactoryResetPhraseInput(this.value)"
                        class="w-full h-11 px-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm font-black tracking-wider text-slate-800 dark:text-white uppercase focus:outline-none focus:border-rose-500 placeholder:normal-case placeholder:font-normal placeholder:tracking-normal">
                </div>
            </div>

        </div>

        <!-- Footer Modal Aksi -->
        <div class="p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/80 dark:bg-[#0b1121]/90 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0" style="padding-bottom: max(1rem, env(safe-area-inset-bottom));">
            <button type="button" onclick="window.closeFactoryResetModal()" class="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-700 transition-all cursor-pointer shadow-2xs">
                Batal (Aman)
            </button>
            <button type="button" id="btn-execute-factory-reset" disabled onclick="window.executeFactoryResetAction()"
                class="w-full sm:w-auto px-6 py-3 rounded-2xl bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-600 font-black text-xs uppercase tracking-wider transition-all cursor-not-allowed flex items-center justify-center gap-2 border border-slate-300/60 dark:border-slate-700/60">
                <i class="fa-solid fa-trash-can"></i>
                <span>Eksekusi Pembersihan Data</span>
            </button>
        </div>
    `,Ot()},$s=async()=>{try{const[e,t,a,r,s]=await Promise.all([P.collection("freshmart_orders").get().catch(()=>({docs:[]})),P.collection("freshmart").doc("cms_data").collection("customers").get().catch(()=>({docs:[]})),P.collection("freshmart").doc("cms_data").collection("cashier_accounts").get().catch(()=>({docs:[]})),P.collection("freshmart").doc("cms_data").collection("pos_shifts").get().catch(()=>({docs:[]})),P.collection("freshmart").doc("cms_data").collection("reviews").get().catch(()=>({docs:[]}))]),o=e.docs.map(v=>({_id:v.id,...v.data()})),i=t.docs.map(v=>({_id:v.id,...v.data()})),n=a.docs.map(v=>({_id:v.id,...v.data()})),p=r.docs.map(v=>({_id:v.id,...v.data()})),d=s.docs.map(v=>({_id:v.id,...v.data()})),c=new Date,m=c.toISOString().slice(0,10),b=`${String(c.getHours()).padStart(2,"0")}-${String(c.getMinutes()).padStart(2,"0")}`,f={_meta:{appName:"Toko Putri Super App",backupType:"emergency_pre_reset_snapshot",createdAt:c.toISOString(),exportedBy:"Owner Emergency Guard",resetModeTarget:xt},appData:JSON.parse(JSON.stringify(l)),orders:o,customers:i,cashiers:n,shifts:p,reviews:d},h=JSON.stringify(f,null,2),w=`backup_darurat_sebelum_reset_${l.subscription?.storeCode||"TOKO"}_${m}_${b}.json`;if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function"){const v=btoa(unescape(encodeURIComponent(h)));window.AndroidNativeApp.saveOrShareFile(v,w,"application/json")}else{const v=new Blob([h],{type:"application/json;charset=utf-8;"}),S=URL.createObjectURL(v),$=document.createElement("a");$.href=S,$.download=w,document.body.appendChild($),$.click(),document.body.removeChild($),setTimeout(()=>URL.revokeObjectURL(S),2e3)}return Pe=!0,!0}catch(e){return console.error("[FactoryReset] Gagal membuat cadangan darurat:",e),!1}},Mo=async()=>{x("Menyiapkan berkas cadangan darurat...","info"),await $s()?(x("Berkas cadangan darurat berhasil diunduh!","success"),Ft()):x("Gagal mengunduh cadangan darurat!","error")},se=async e=>{try{const t=await e.get();if(t.empty)return 0;let a=P.batch(),r=0,s=0;for(const o of t.docs)a.delete(o.ref),r++,s++,r===400&&(await a.commit(),a=P.batch(),r=0);return r>0&&await a.commit(),s}catch(t){return console.warn("[FactoryReset] Gagal batch delete:",t),0}},Co=async()=>{if(!Ts()){x("Harap centang persetujuan dan ketik frasa konfirmasi dengan benar.","warning");return}if(!ye()){x("Akses ditolak: Hanya Pemilik Toko yang berwenang.","error");return}je=!0,Ot(),Pe||(x("Mengunduh cadangan darurat otomatis...","info"),await $s());const e=xt===ve.FULL_FACTORY,t=k("modal-factory-reset-content");t&&(t.innerHTML=`
            <div class="p-8 sm:p-12 flex flex-col items-center justify-center text-center space-y-4">
                <div class="w-16 h-16 rounded-3xl bg-rose-100 dark:bg-rose-950/60 border border-rose-300 dark:border-rose-800 text-rose-600 dark:text-rose-400 flex items-center justify-center text-2xl animate-spin">
                    <i class="fa-solid fa-spinner"></i>
                </div>
                <h3 class="text-lg font-black text-slate-900 dark:text-white" id="reset-progress-title">
                    Sedang Membersihkan Data Toko...
                </h3>
                <p class="text-xs font-semibold text-slate-500 dark:text-slate-400 max-w-sm" id="reset-progress-desc">
                    Mohon jangan menutup jendela browser Anda. Sistem sedang menghapus data dari database cloud.
                </p>
                <div class="w-full max-w-xs h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mt-4">
                    <div id="reset-progress-bar" class="h-full bg-rose-500 transition-all duration-300 w-1/4"></div>
                </div>
            </div>
        `);const a=(r,s,o)=>{const i=k("reset-progress-bar"),n=k("reset-progress-title"),p=k("reset-progress-desc");i&&(i.style.width=`${r}%`),n&&(n.textContent=s),p&&(p.textContent=o)};try{if(a(25,"Membersihkan Pesanan Penjualan...","Menghapus dokumen di koleksi pesanan cloud."),await Promise.all([se(P.collection("freshmart_orders")),se(P.collection("freshmart").doc("cms_data").collection("pos_transactions")),se(P.collection("freshmart").doc("cms_data").collection("orders")),se(P.collection("tempo_payment_confirmations"))]),a(50,"Membersihkan Shift Kasir...","Mengosongkan riwayat shift kasir dan buku kas laci."),await Promise.all([se(P.collection("freshmart").doc("cms_data").collection("pos_shifts")),se(P.collection("pos_shifts"))]),a(70,"Membersihkan Pengeluaran & Retur...","Mereset pembukuan kas biaya operasional toko."),l.expenses=[],l.stockOpnameHistory=[],l.salesReturns=[],l.vendorReturns=[],l.purchases=[],Array.isArray(l.products)&&l.products.forEach(r=>{r&&(r.totalSold=0,Array.isArray(r.variants)&&r.variants.forEach(s=>{s&&(s.totalSold=0)}))}),e){a(85,"Membersihkan Katalog & Master Data...","Menghapus master produk, kategori, dan profil."),await Promise.all([se(P.collection("freshmart").doc("cms_data").collection("products")),se(P.collection("freshmart").doc("cms_data").collection("customers")),se(P.collection("freshmart").doc("cms_data").collection("reviews")),se(P.collection("freshmart").doc("cms_data").collection("faqs")),se(P.collection("freshmart").doc("cms_data").collection("rewards"))]),l.products=[],l.categories=[],l.brands=[],l.colors=[],l.suppliers=[],l.vouchers=[],l.banners=[],l.flashSales=[],l.rewards=[],l.reviews=[],l.faqs=[],l.customers=[];const r=l.subscription?.storeCode||"PUTRI",s=l.store?.name||"Toko Putri";l.store=JSON.parse(JSON.stringify(Xr.store)),l.store.name=s}a(95,"Menyimpan State Bersih...","Memperbarui database cloud ke kondisi segar."),await N();try{localStorage.removeItem("freshmart_cart"),localStorage.removeItem("freshmart_my_orders"),localStorage.removeItem("freshmart_wishlist"),localStorage.removeItem("pos_held_carts"),localStorage.removeItem("freshmart_pos_offline_tx_queue"),sessionStorage.removeItem("pos_cashier_session")}catch{}a(100,"Pembersihan Selesai!","Sistem kini bersih dan segar kembali."),x("Sistem toko berhasil direset ke setelan awal!","success"),setTimeout(()=>{ya(!0),window.location.reload()},1200)}catch(r){console.error("[FactoryReset] Gagal mengeksekusi reset:",r),x("Terjadi kesalahan saat pembersihan: "+r.message,"error"),Ft()}finally{je=!1}};typeof window<"u"&&(window.openFactoryResetModal=As,window.closeFactoryResetModal=ya,window.setFactoryResetMode=To,window.onFactoryResetPhraseInput=$o,window.onFactoryResetRiskToggle=Io,window.downloadEmergencyBackupManual=Mo,window.executeFactoryResetAction=Co);const Sa=()=>{let e=`
    <div class="max-w-full pb-8 sm:pb-12 text-sm fade-in">
        <!-- Header Banner Bento -->
        <div class="mb-5 flex items-center justify-between bg-white/95 dark:bg-slate-900/80 p-4 sm:p-5 rounded-[1.5rem] border border-slate-200/80 dark:border-slate-800 shadow-2xs">
            <div class="flex items-center gap-3.5">
                <div class="w-12 h-12 rounded-xl text-white flex items-center justify-center text-xl shrink-0 border-2 border-slate-900 dark:border-slate-700 shadow-[1.5px_1.5px_0px_#0f172a] dark:shadow-[1.5px_1.5px_0px_#000000]" style="background-color: var(--color-primary);">
                    <i class="fa-solid fa-sliders"></i>
                </div>
                <div>
                    <h2 class="font-black text-sm sm:text-base text-slate-800 dark:text-white uppercase tracking-wider leading-tight">Pengaturan Toko</h2>
                    <p class="text-[10px] sm:text-xs font-semibold text-slate-400 dark:text-slate-500 mt-0.5">Kelola konfigurasi profil, katalog, pengiriman, pembayaran, dan operasional</p>
                </div>
            </div>
            <div class="hidden sm:flex items-center gap-2">
                <span class="px-3 py-1 rounded-xl border text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5" style="background: rgba(var(--color-primary-rgb), 0.08); border-color: rgba(var(--color-primary-rgb), 0.22); color: var(--color-primary);">
                    <i class="fa-solid fa-palette"></i> ${u(l.store.uiTheme||"gold")}
                </span>
            </div>
        </div>

        <!-- 8-Card Symmetrical Bento Grid (2x4 on Desktop, 4x2 on Mobile) -->
        <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-5 mb-6">
            <!-- 1. Profil Toko -->
            <button onclick="openSettingForm('profile')" class="group relative flex flex-col items-center justify-center gap-3 overflow-hidden p-5 sm:p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.03)] hover:shadow-lg dark:hover:bg-slate-800/60 rounded-[1.75rem] border border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-slate-900/60 shadow-xs cursor-pointer active:scale-95">
                <div class="relative z-10 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-xl text-white border-2 border-slate-900 dark:border-slate-700 shadow-[1.5px_1.5px_0px_#0f172a] dark:shadow-[1.5px_1.5px_0px_#000000] transition-all duration-150" style="background-color: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.28);">
                    <i class="fa-solid fa-store text-2xl sm:text-3xl"></i>
                </div>
                <div class="relative z-10">
                    <span class="block text-[10px] font-black uppercase leading-tight tracking-widest text-slate-800 dark:text-white sm:text-[11px]">Profil Toko</span>
                    <span class="mt-0.5 block text-[9px] font-bold text-slate-400 dark:text-slate-500">Branding &amp; Tema</span>
                </div>
            </button>

            <!-- 2. Kategori & Brand -->
            <button onclick="openSettingForm('catalog')" class="group relative flex flex-col items-center justify-center gap-3 overflow-hidden p-5 sm:p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.03)] hover:shadow-lg dark:hover:bg-slate-800/60 rounded-[1.75rem] border border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-slate-900/60 shadow-xs cursor-pointer active:scale-95">
                <div class="relative z-10 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-xl text-white border-2 border-slate-900 dark:border-slate-700 shadow-[1.5px_1.5px_0px_#0f172a] dark:shadow-[1.5px_1.5px_0px_#000000] transition-all duration-150" style="background-color: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.28);">
                    <i class="fa-solid fa-palette text-2xl sm:text-3xl"></i>
                </div>
                <div class="relative z-10">
                    <span class="block text-[10px] font-black uppercase leading-tight tracking-widest text-slate-800 dark:text-white sm:text-[11px]">Kategori &amp; Brand</span>
                    <span class="mt-0.5 block text-[9px] font-bold text-slate-400 dark:text-slate-500">Layout &amp; Navigasi</span>
                </div>
            </button>

            <!-- 3. Pengiriman & Lokasi -->
            <button onclick="openSettingForm('shipping')" class="group relative flex flex-col items-center justify-center gap-3 overflow-hidden p-5 sm:p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.03)] hover:shadow-lg dark:hover:bg-slate-800/60 rounded-[1.75rem] border border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-slate-900/60 shadow-xs cursor-pointer active:scale-95">
                <div class="relative z-10 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-xl text-white border-2 border-slate-900 dark:border-slate-700 shadow-[1.5px_1.5px_0px_#0f172a] dark:shadow-[1.5px_1.5px_0px_#000000] transition-all duration-150" style="background-color: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.28);">
                    <i class="fa-solid fa-motorcycle text-2xl sm:text-3xl"></i>
                </div>
                <div class="relative z-10">
                    <span class="block text-[10px] font-black uppercase leading-tight tracking-widest text-slate-800 dark:text-white sm:text-[11px]">Pengiriman</span>
                    <span class="mt-0.5 block text-[9px] font-bold text-slate-400 dark:text-slate-500">Ongkir &amp; Lokasi</span>
                </div>
            </button>

            <!-- 4. Pembayaran (QRIS & Putri PayLater) -->
            <button onclick="openSettingForm('payment')" class="group relative flex flex-col items-center justify-center gap-3 overflow-hidden p-5 sm:p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.03)] hover:shadow-lg dark:hover:bg-slate-800/60 rounded-[1.75rem] border border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-slate-900/60 shadow-xs cursor-pointer active:scale-95">
                <div class="relative z-10 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-xl text-white border-2 border-slate-900 dark:border-slate-700 shadow-[1.5px_1.5px_0px_#0f172a] dark:shadow-[1.5px_1.5px_0px_#000000] transition-all duration-150" style="background-color: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.28);">
                    <i class="fa-solid fa-wallet text-2xl sm:text-3xl"></i>
                </div>
                <div class="relative z-10">
                    <span class="block text-[10px] font-black uppercase leading-tight tracking-widest text-slate-800 dark:text-white sm:text-[11px]">Pembayaran</span>
                    <span class="mt-0.5 block text-[9px] font-bold text-slate-400 dark:text-slate-500">QRIS &amp; Putri PayLater</span>
                </div>
            </button>

            <!-- 5. Sistem & API -->
            <button onclick="openSettingForm('config')" class="group relative flex flex-col items-center justify-center gap-3 overflow-hidden p-5 sm:p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.03)] hover:shadow-lg dark:hover:bg-slate-800/60 rounded-[1.75rem] border border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-slate-900/60 shadow-xs cursor-pointer active:scale-95">
                <div class="relative z-10 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-xl text-white border-2 border-slate-900 dark:border-slate-700 shadow-[1.5px_1.5px_0px_#0f172a] dark:shadow-[1.5px_1.5px_0px_#000000] transition-all duration-150" style="background-color: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.28);">
                    <i class="fa-solid fa-laptop-code text-2xl sm:text-3xl"></i>
                </div>
                <div class="relative z-10">
                    <span class="block text-[10px] font-black uppercase leading-tight tracking-widest text-slate-800 dark:text-white sm:text-[11px]">Sistem &amp; API</span>
                    <span class="mt-0.5 block text-[9px] font-bold text-slate-400 dark:text-slate-500">Google Apps Script</span>
                </div>
            </button>

            <!-- 6. Operasional -->
            <button onclick="openSettingForm('operasional')" class="group relative flex flex-col items-center justify-center gap-3 overflow-hidden p-5 sm:p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.03)] hover:shadow-lg dark:hover:bg-slate-800/60 rounded-[1.75rem] border border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-slate-900/60 shadow-xs cursor-pointer active:scale-95">
                <div class="relative z-10 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-xl text-white border-2 border-slate-900 dark:border-slate-700 shadow-[1.5px_1.5px_0px_#0f172a] dark:shadow-[1.5px_1.5px_0px_#000000] transition-all duration-150" style="background-color: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.28);">
                    <i class="fa-solid fa-sliders text-2xl sm:text-3xl"></i>
                </div>
                <div class="relative z-10">
                    <span class="block text-[10px] font-black uppercase leading-tight tracking-widest text-slate-800 dark:text-white sm:text-[11px]">Operasional</span>
                    <span class="mt-0.5 block text-[9px] font-bold text-slate-400 dark:text-slate-500">Stok, Pajak &amp; Poin</span>
                </div>
            </button>

            <!-- 7. Printer Struk -->
            <button onclick="openPrinterSettingsModal()" class="group relative flex flex-col items-center justify-center gap-3 overflow-hidden p-5 sm:p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.03)] hover:shadow-lg dark:hover:bg-slate-800/60 rounded-[1.75rem] border border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-slate-900/60 shadow-xs cursor-pointer active:scale-95">
                <div class="relative z-10 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-xl text-white border-2 border-slate-900 dark:border-slate-700 shadow-[1.5px_1.5px_0px_#0f172a] dark:shadow-[1.5px_1.5px_0px_#000000] transition-all duration-150" style="background-color: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.28);">
                    <i class="fa-solid fa-print text-2xl sm:text-3xl"></i>
                </div>
                <div class="relative z-10">
                    <span class="block text-[10px] font-black uppercase leading-tight tracking-widest text-slate-800 dark:text-white sm:text-[11px]">Printer Struk</span>
                    <span class="mt-0.5 block text-[9px] font-bold text-slate-400 dark:text-slate-500">Bluetooth &amp; Thermal</span>
                </div>
            </button>

            <!-- 8. Backup & Data (Cloud Sync Hub) -->
            <button onclick="openAdminTab('backup_sync')" class="group relative flex flex-col items-center justify-center gap-3 overflow-hidden p-5 sm:p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.03)] hover:shadow-lg dark:hover:bg-slate-800/60 rounded-[1.75rem] border border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-slate-900/60 shadow-xs cursor-pointer active:scale-95">
                <div class="relative z-10 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-xl text-white border-2 border-slate-900 dark:border-slate-700 shadow-[1.5px_1.5px_0px_#0f172a] dark:shadow-[1.5px_1.5px_0px_#000000] transition-all duration-150" style="background-color: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.28);">
                    <i class="fa-solid fa-cloud-arrow-up text-2xl sm:text-3xl"></i>
                </div>
                <div class="relative z-10">
                    <span class="block text-[10px] font-black uppercase leading-tight tracking-widest text-slate-800 dark:text-white sm:text-[11px]">Backup &amp; Data</span>
                    <span class="mt-0.5 block text-[9px] font-bold text-slate-400 dark:text-slate-500">Pusat Cadangan Cloud</span>
                </div>
            </button>
        </div>

        <!-- 9. Bento Status Lisensi & Layanan Terkelola (SaaS Engine) -->
        ${co()}

        <!-- 10. Zona Bahaya: Reset ke Setelan Awal & Pembersihan Data (Khusus Owner) -->
        ${Pa()}
    </div>
    `;_("admin-content",e)},Pa=()=>ye()?`
    <div class="mt-6 rounded-3xl border border-rose-300/80 dark:border-rose-900/60 bg-gradient-to-br from-rose-50/70 via-white to-amber-50/30 dark:from-rose-950/25 dark:via-slate-900 dark:to-slate-900/60 p-5 sm:p-7 shadow-xs">
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div class="flex items-start gap-3.5">
                <div class="w-12 h-12 rounded-2xl bg-rose-500/10 dark:bg-rose-500/20 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800 flex items-center justify-center text-xl shrink-0">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                </div>
                <div>
                    <div class="flex items-center gap-2">
                        <h4 class="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">Zona Bahaya: Reset ke Setelan Awal &amp; Pembersihan Data</h4>
                        <span class="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-rose-100 dark:bg-rose-900/60 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800">Khusus Owner</span>
                    </div>
                    <p class="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1 max-w-2xl leading-relaxed">
                        Fitur khusus pemilik toko untuk mengembalikan sistem ke setelan awal yang bersih dan segar. Dilengkapi opsi pembersihan data transaksi uji coba saja atau pembersihan total, dengan perlindungan cadangan darurat otomatis.
                    </p>
                </div>
            </div>
            <button onclick="window.openFactoryResetModal && window.openFactoryResetModal()" class="w-full sm:w-auto px-5 py-3 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-black text-xs transition-all shadow-md shadow-rose-600/25 active:scale-95 cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap">
                <i class="fa-solid fa-rotate-left"></i>
                <span>Reset ke Setelan Awal</span>
            </button>
        </div>
    </div>
    `:"",Is=e=>{const t=Pt[e][500],a=document.getElementById("set-ui-theme"),r=document.getElementById("set-theme-color"),s=document.getElementById("set-theme-color-picker");a&&(a.value=e),r&&(r.value=t),s&&(s.value=t),document.querySelectorAll(".preset-color-chip").forEach(n=>{n.classList.remove("ring-4","ring-offset-2","ring-slate-400","dark:ring-slate-500","scale-110"),n.querySelector(".check-icon")?.classList.add("hidden")});const o=document.getElementById(`preset-chip-${e}`);o&&(o.classList.add("ring-4","ring-offset-2","ring-slate-400","dark:ring-slate-500","scale-110"),o.querySelector(".check-icon")?.classList.remove("hidden"));const i=document.getElementById("custom-color-chip");if(i){i.style.background="";const n=i.querySelector("i");n&&(n.style.color="")}os(e,t)},Ms=e=>{let t=e;t==="dual_tone"&&(t="aurora_glow"),t==="geometric_3d"&&(t="tech_grid"),(t==="diagonal_skew"||t==="glass_studio")&&(t="minimalist");const a=document.getElementById("set-bg-style");a&&(a.value=t);const r=document.getElementById("set-bg-custom-url")?.value||"";document.querySelectorAll(".bg-mockup-card").forEach(o=>{o.classList.remove("active","border-[var(--color-primary)]","shadow-md","ring-2","ring-[var(--color-primary)]/20"),o.classList.add("border-slate-200","dark:border-slate-700/80");const i=o.querySelector(".active-check-badge");i&&i.classList.add("hidden")});const s=document.getElementById(`bg-opt-${t}`);if(s){s.classList.add("active","border-[var(--color-primary)]","shadow-md","ring-2","ring-[var(--color-primary)]/20"),s.classList.remove("border-slate-200","dark:border-slate-700/80");const o=s.querySelector(".active-check-badge");o&&o.classList.remove("hidden")}ls(t,r)},Cs=e=>{let t,a,r,s;if(e==="profile"){t="Profil Toko & Tampilan Visual",a="Kelola identitas utama toko, palet warna tema, model layout background, dan informasi legal",r="fa-store";const i=l.store.uiTheme||"emerald";let n=l.store.bgStyle||localStorage.getItem("freshmart_bg_style")||"minimalist";n==="dual_tone"&&(n="aurora_glow"),n==="geometric_3d"&&(n="tech_grid"),(n==="diagonal_skew"||n==="glass_studio")&&(n="minimalist");const p={gold:"Putri Gold",burgundy:"Burgundy",industrial:"Industrial CAT",emerald:"Emerald",teal:"Teal",lime:"Lime",cyan:"Cyan",sky:"Sky",blue:"Blue",indigo:"Indigo",violet:"Violet",purple:"Purple",fuchsia:"Fuchsia",pink:"Pink",rose:"Rose",red:"Red",orange:"Orange",amber:"Amber",yellow:"Yellow",green:"Green",slate:"Slate",stone:"Stone"},d=Object.keys(Pt).map(c=>{const m=Pt[c][500],b=p[c]||c,f=i===c;return`
                <button type="button" id="preset-chip-${c}" onclick="selectPresetTheme('${c}')" 
                        class="preset-color-chip w-10 h-10 rounded-full cursor-pointer transition-all duration-200 relative flex items-center justify-center shadow-sm hover:scale-105 ${f?"ring-4 ring-offset-2 ring-slate-400 dark:ring-slate-500 scale-110":""}" 
                        style="background-color: ${m}; border: 1.5px solid rgba(0,0,0,0.08)" 
                        title="${b}">
                    <i class="check-icon fa-solid fa-check text-white text-[11px] font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] ${f?"":"hidden"}"></i>
                </button>
            `}).join("");s=`
            <!-- KARTU 1: IDENTITAS UTAMA TOKO -->
            <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-sm space-y-4">
                <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl flex items-center justify-center text-sm shadow-sm shrink-0" style="background: rgba(var(--color-primary-rgb),0.1); color: var(--color-primary)">
                        <i class="fa-solid fa-shop"></i>
                    </div>
                    <div>
                        <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Identitas Pokok &amp; Branding Toko</h4>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400">Nama toko, slogan, logo aplikasi, dan deskripsi publik</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Nama Toko (Nama Aplikasi)</label>
                        <input autocomplete='off' id="set-name" value="${u(l.store.name)}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Contoh: Toko Putri">
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Slogan Toko</label>
                        <input autocomplete='off' id="set-slogan" value="${u(l.store.slogan)}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Contoh: Belanja Hemat & Segar Setiap Hari">
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Logo Toko (Ikon Aplikasi PWA)</label>
                        <div class="flex gap-2">
                            <input autocomplete='off' id="set-logo" value="${u(l.store.logo)}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm flex-1 text-xs" placeholder="URL Logo atau klik upload">
                            <label class="bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 rounded-xl px-4 flex items-center justify-center cursor-pointer transition-all shrink-0 active:scale-95 shadow-sm font-bold text-xs">
                                <i class="fa-solid fa-cloud-arrow-up mr-1.5"></i> Upload
                                <input type="file" accept="image/*" class="hidden" onchange="handleImageUpload(this, 'set-logo')">
                            </label>
                        </div>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Email Resmi Toko</label>
                        <input autocomplete='off' id="set-email" value="${u(l.store.email||"")}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="admin@tokoputri.com">
                    </div>
                </div>

                <div>
                    <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Deskripsi Lengkap Toko</label>
                    <textarea id="set-description" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" rows="2" placeholder="Deskripsi profil toko yang tampil pada profil pelanggan dan informasi footer...">${u(l.store.description)}</textarea>
                </div>
            </div>
            
            <!-- KARTU 2: WARNA TEMA TOKO -->
            <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-sm space-y-4">
                <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl flex items-center justify-center text-sm shadow-sm shrink-0" style="background: rgba(var(--color-primary-rgb),0.1); color: var(--color-primary)">
                        <i class="fa-solid fa-palette"></i>
                    </div>
                    <div>
                        <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Warna Tema &amp; Header PWA</h4>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400">Pilih palet warna khas toko atau gunakan pemilih warna bebas</p>
                    </div>
                </div>

                <input type="hidden" id="set-ui-theme" value="${i}">
                <input type="hidden" id="set-theme-color" value="${u(l.store.themeColor||"#10b981")}">
                <div class="flex flex-wrap gap-3 pt-1">
                    ${d}
                    <div class="relative" title="Warna Kustom (Klik untuk pilih warna bebas)">
                        <label for="set-theme-color-picker" class="w-10 h-10 rounded-full cursor-pointer transition-all duration-200 relative flex items-center justify-center shadow-sm hover:scale-105 border-2 border-dashed border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 hover:border-[var(--color-primary)]" id="custom-color-chip">
                            <i class="fa-solid fa-pen text-slate-500 dark:text-slate-400 text-[11px]"></i>
                        </label>
                        <input type="color" id="set-theme-color-picker" value="${u(l.store.themeColor||"#10b981")}" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer rounded-full"
                            oninput="
                                const hex = this.value;
                                document.getElementById('set-theme-color').value = hex;
                                document.getElementById('custom-color-chip').style.background = hex;
                                document.getElementById('custom-color-chip').querySelector('i').style.color = '#fff';
                                document.querySelectorAll('.preset-color-chip').forEach(el => {
                                    el.classList.remove('ring-4', 'ring-offset-2', 'ring-slate-400', 'dark:ring-slate-500', 'scale-110');
                                    el.querySelector('.check-icon')?.classList.add('hidden');
                                });
                                document.getElementById('set-ui-theme').value = 'custom';
                                applyUITheme('custom', hex);
                            ">
                    </div>
                </div>
            </div>

            <!-- KARTU 3: MODEL GAYA VISUAL BACKGROUND TOKO & WALLPAPER KUSTOM -->
            <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-sm space-y-4">
                <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl flex items-center justify-center text-sm shadow-sm shrink-0" style="background: rgba(var(--color-primary-rgb),0.1); color: var(--color-primary)">
                        <i class="fa-solid fa-shapes"></i>
                    </div>
                    <div>
                        <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Model Gaya Visual Background Toko</h4>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400">Pilih tata letak grafis latar belakang halaman utama dan wallpaper kustom</p>
                    </div>
                </div>

                <input type="hidden" id="set-bg-style" value="${n}">
                
                <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-3.5">
                    <!-- 1. Minimalis -->
                    <button type="button" onclick="selectBgStyle('minimalist')" id="bg-opt-minimalist"
                            class="bg-mockup-card flex flex-col items-center justify-between text-center p-3 sm:p-3.5 rounded-2xl border-2 transition-all duration-200 cursor-pointer ${n==="minimalist"?"active border-[var(--color-primary)] bg-white dark:bg-slate-800 shadow-md ring-2 ring-[var(--color-primary)]/20":"border-slate-200 dark:border-slate-700/80 bg-white/60 dark:bg-slate-800/60 hover:border-slate-300 dark:hover:border-slate-600"}">
                        <span class="active-check-badge ${n==="minimalist"?"":"hidden"} absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full primary-bg text-white text-[10px] flex items-center justify-center shadow-md z-20">
                            <i class="fa-solid fa-check"></i>
                        </span>
                        <div class="mini-phone-frame">
                            <div class="mini-phone-screen mini-preview-minimal">
                                <div class="mini-phone-notch"></div>
                                <div class="mini-preview-header"></div>
                                <div class="mini-dummy-content">
                                    <div class="mini-dummy-bar w-3/4"></div>
                                    <div class="mini-dummy-grid">
                                        <div class="mini-dummy-card"></div>
                                        <div class="mini-dummy-card"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full">
                            <div class="inline-block px-1.5 py-0.5 rounded-md bg-slate-500/10 text-slate-600 dark:text-slate-400 text-[8px] font-bold mb-1 tracking-wider uppercase">Studio Clean</div>
                            <span class="block text-xs font-bold text-slate-800 dark:text-slate-100 mb-0.5">Minimalis</span>
                            <span class="block text-[9px] text-slate-500 dark:text-slate-400 leading-tight">Polos bersih elegan</span>
                        </div>
                    </button>

                    <!-- 2. Hero Arch -->
                    <button type="button" onclick="selectBgStyle('hero_arch')" id="bg-opt-hero_arch"
                            class="bg-mockup-card flex flex-col items-center justify-between text-center p-3 sm:p-3.5 rounded-2xl border-2 transition-all duration-200 cursor-pointer ${n==="hero_arch"?"active border-[var(--color-primary)] bg-white dark:bg-slate-800 shadow-md ring-2 ring-[var(--color-primary)]/20":"border-slate-200 dark:border-slate-700/80 bg-white/60 dark:bg-slate-800/60 hover:border-slate-300 dark:hover:border-slate-600"}">
                        <span class="active-check-badge ${n==="hero_arch"?"":"hidden"} absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full primary-bg text-white text-[10px] flex items-center justify-center shadow-md z-20">
                            <i class="fa-solid fa-check"></i>
                        </span>
                        <div class="mini-phone-frame">
                            <div class="mini-phone-screen mini-preview-arch">
                                <div class="mini-phone-notch"></div>
                                <div class="mini-preview-header"></div>
                                <div class="mini-dummy-content">
                                    <div class="mini-dummy-bar w-3/4"></div>
                                    <div class="mini-dummy-grid">
                                        <div class="mini-dummy-card"></div>
                                        <div class="mini-dummy-card"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full">
                            <div class="inline-block px-1.5 py-0.5 rounded-md bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] text-[8px] font-bold mb-1 tracking-wider uppercase">Super-App</div>
                            <span class="block text-xs font-bold text-slate-800 dark:text-slate-100 mb-0.5">Hero Arch</span>
                            <span class="block text-[9px] text-slate-500 dark:text-slate-400 leading-tight">Kanopi dome lengkung</span>
                        </div>
                    </button>

                    <!-- 3. Aurora Glow -->
                    <button type="button" onclick="selectBgStyle('aurora_glow')" id="bg-opt-aurora_glow"
                            class="bg-mockup-card flex flex-col items-center justify-between text-center p-3 sm:p-3.5 rounded-2xl border-2 transition-all duration-200 cursor-pointer ${n==="aurora_glow"?"active border-[var(--color-primary)] bg-white dark:bg-slate-800 shadow-md ring-2 ring-[var(--color-primary)]/20":"border-slate-200 dark:border-slate-700/80 bg-white/60 dark:bg-slate-800/60 hover:border-slate-300 dark:hover:border-slate-600"}">
                        <span class="active-check-badge ${n==="aurora_glow"?"":"hidden"} absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full primary-bg text-white text-[10px] flex items-center justify-center shadow-md z-20">
                            <i class="fa-solid fa-check"></i>
                        </span>
                        <div class="mini-phone-frame">
                            <div class="mini-phone-screen mini-preview-aurora">
                                <div class="mini-phone-notch"></div>
                                <div class="mini-preview-header">
                                    <div class="mini-aura-orb -top-2 -left-2"></div>
                                    <div class="mini-aura-orb -top-2 -right-2"></div>
                                </div>
                                <div class="mini-dummy-content">
                                    <div class="mini-dummy-bar w-3/4"></div>
                                    <div class="mini-dummy-grid">
                                        <div class="mini-dummy-card"></div>
                                        <div class="mini-dummy-card"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full">
                            <div class="inline-block px-1.5 py-0.5 rounded-md text-[8px] font-bold mb-1 tracking-wider uppercase" style="background: rgba(var(--color-primary-rgb),0.1); color: var(--color-primary);">Modern iOS</div>
                            <span class="block text-xs font-bold text-slate-800 dark:text-slate-100 mb-0.5">Aurora Glow</span>
                            <span class="block text-[9px] text-slate-500 dark:text-slate-400 leading-tight">Mesh aura dinamis</span>
                        </div>
                    </button>

                    <!-- 4. Tech Grid -->
                    <button type="button" onclick="selectBgStyle('tech_grid')" id="bg-opt-tech_grid"
                            class="bg-mockup-card flex flex-col items-center justify-between text-center p-3 sm:p-3.5 rounded-2xl border-2 transition-all duration-200 cursor-pointer ${n==="tech_grid"?"active border-[var(--color-primary)] bg-white dark:bg-slate-800 shadow-md ring-2 ring-[var(--color-primary)]/20":"border-slate-200 dark:border-slate-700/80 bg-white/60 dark:bg-slate-800/60 hover:border-slate-300 dark:hover:border-slate-600"}">
                        <span class="active-check-badge ${n==="tech_grid"?"":"hidden"} absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full primary-bg text-white text-[10px] flex items-center justify-center shadow-md z-20">
                            <i class="fa-solid fa-check"></i>
                        </span>
                        <div class="mini-phone-frame">
                            <div class="mini-phone-screen mini-preview-tech">
                                <div class="mini-phone-notch"></div>
                                <div class="mini-preview-header"></div>
                                <div class="mini-dummy-content">
                                    <div class="mini-dummy-bar w-3/4"></div>
                                    <div class="mini-dummy-grid">
                                        <div class="mini-dummy-card"></div>
                                        <div class="mini-dummy-card"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full">
                            <div class="inline-block px-1.5 py-0.5 rounded-md text-[8px] font-bold mb-1 tracking-wider uppercase" style="background: rgba(var(--color-primary-rgb),0.1); color: var(--color-primary);">Pro Teknik</div>
                            <span class="block text-xs font-bold text-slate-800 dark:text-slate-100 mb-0.5">Tech Grid</span>
                            <span class="block text-[9px] text-slate-500 dark:text-slate-400 leading-tight">Arsitektur modern &amp; rapi</span>
                        </div>
                    </button>

                    <!-- 5. Industrial Heavy-Duty -->
                    <button type="button" onclick="selectBgStyle('industrial')" id="bg-opt-industrial"
                            class="bg-mockup-card flex flex-col items-center justify-between text-center p-3 sm:p-3.5 rounded-2xl border-2 transition-all duration-200 cursor-pointer ${n==="industrial"?"active border-[var(--color-primary)] bg-white dark:bg-slate-800 shadow-md ring-2 ring-[var(--color-primary)]/20":"border-slate-200 dark:border-slate-700/80 bg-white/60 dark:bg-slate-800/60 hover:border-slate-300 dark:hover:border-slate-600"}">
                        <span class="active-check-badge ${n==="industrial"?"":"hidden"} absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full primary-bg text-white text-[10px] flex items-center justify-center shadow-md z-20">
                            <i class="fa-solid fa-check"></i>
                        </span>
                        <div class="mini-phone-frame">
                            <div class="mini-phone-screen mini-preview-industrial">
                                <div class="mini-phone-notch"></div>
                                <div class="mini-preview-header"></div>
                                <div class="mini-dummy-content">
                                    <div class="mini-dummy-bar w-3/4"></div>
                                    <div class="mini-dummy-grid">
                                        <div class="mini-dummy-card"></div>
                                        <div class="mini-dummy-card"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full">
                            <div class="inline-block px-1.5 py-0.5 rounded-md text-[8px] font-bold mb-1 tracking-wider uppercase" style="background: rgba(var(--color-primary-rgb),0.1); color: var(--color-primary);">Heavy-Duty</div>
                            <span class="block text-xs font-bold text-slate-800 dark:text-slate-100 mb-0.5">Industrial</span>
                            <span class="block text-[9px] text-slate-500 dark:text-slate-400 leading-tight">Solid kuat &amp; berkarakter</span>
                        </div>
                    </button>
                </div>

                <!-- Gambar / Wallpaper Background Kustom (Opsional) -->
                <div class="pt-3 border-t border-slate-200 dark:border-slate-700/80">
                    <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                        <i class="fa-solid fa-image" style="color:var(--color-primary)"></i> Gambar / Wallpaper Background Kustom (Opsional)
                    </label>
                    <div class="flex gap-2">
                        <input autocomplete="off" id="set-bg-custom-url" value="${u(l.store.bgCustomUrl||"")}"
                               class="admin-input !py-3 bg-white dark:bg-slate-900 flex-1 shadow-sm text-xs"
                               placeholder="URL Gambar Background (Opsional, contoh: https://...)"
                               oninput="if(typeof window.applyBackgroundStyle==='function') window.applyBackgroundStyle(document.getElementById('set-bg-style').value, this.value)">
                        <label class="bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 rounded-xl px-4 flex items-center justify-center cursor-pointer transition-all shrink-0 active:scale-95 shadow-sm font-bold text-xs">
                            <i class="fa-solid fa-cloud-arrow-up sm:mr-1.5"></i> <span class="hidden sm:inline">Upload</span>
                            <input type="file" accept="image/*" class="hidden" onchange="handleImageUpload(this, 'set-bg-custom-url')">
                        </label>
                    </div>
                    <p class="text-[10px] text-slate-500 dark:text-slate-400 mt-1.5 font-medium">
                        Jika diisi, gambar otomatis dipasang sebagai wallpaper latar belakang aplikasi dan halaman toko.
                    </p>
                </div>
            </div>

            <!-- KARTU 4: BANNER HERO SAMBUTAN & MASKOT 3D (SLIDE #0) -->
            <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-sm space-y-4">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                        <div class="w-9 h-9 rounded-xl flex items-center justify-center text-sm shadow-sm shrink-0" style="background: rgba(var(--color-primary-rgb),0.1); color: var(--color-primary)">
                            <i class="fa-solid fa-wand-magic-sparkles"></i>
                        </div>
                        <div>
                            <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Banner Sambutan &amp; Maskot 3D (Slide #0)</h4>
                            <p class="text-[10px] text-slate-500 dark:text-slate-400">Atur foto maskot/karakter, status badge 'Siap Melayani', teks sambutan, atau sembunyikan slide utama</p>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Status Tayang Slide Sambutan</label>
                        <select id="set-show-hero-slide" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs font-bold">
                            <option value="true" ${l.store.showHeroSlide!==!1&&l.store.showHeroSlide!=="false"?"selected":""}>Ya, Tampilkan Slide Hero Sambutan (Default)</option>
                            <option value="false" ${l.store.showHeroSlide===!1||l.store.showHeroSlide==="false"?"selected":""}>Sembunyikan (Hanya Tampilkan Banner Promosi Produk)</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Teks Badge Status (Di Bawah Foto)</label>
                        <input autocomplete="off" id="set-hero-badge-text" value="${u(l.store.heroBadgeText||"Siap Melayani")}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Contoh: Siap Melayani">
                    </div>
                </div>

                <div>
                    <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Foto / Animasi Maskot (JPG · PNG · GIF Bergerak <i class="fa-solid fa-wand-magic-sparkles text-amber-500 ml-1"></i>)</label>
                    <div class="flex gap-2">
                        <input autocomplete="off" id="set-hero-mascot-img" value="${u(l.store.heroMascotImg||"")}"
                               class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm flex-1 text-xs"
                               placeholder="URL gambar/GIF atau klik Upload (Kosong = Maskot 3D Asli)"
                               oninput="const p=document.getElementById('card-preview-mascot'); if(p) p.src = this.value || '/putri_mascot_3d.jpg';">
                        <label class="bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 rounded-xl px-4 flex items-center justify-center cursor-pointer transition-all shrink-0 active:scale-95 shadow-sm font-bold text-xs">
                            <i class="fa-solid fa-cloud-arrow-up mr-1.5"></i> Upload
                            <input type="file" accept="image/gif,image/jpeg,image/png,image/webp" class="hidden" onchange="handleImageUpload(this, 'set-hero-mascot-img'); setTimeout(() => { const v=document.getElementById('set-hero-mascot-img')?.value; const p=document.getElementById('card-preview-mascot'); if(p && v) p.src=v; }, 800);">
                        </label>
                    </div>
                    <p class="text-[10px] text-slate-400 dark:text-slate-500 mt-1 ml-0.5"><i class="fa-solid fa-circle-info mr-1"></i>Mendukung GIF animasi (maks 8MB) · JPG/PNG/WEBP maks 3MB · URL langsung dari internet juga bisa</p>
                    <div class="flex items-center justify-between gap-2 mt-2 flex-wrap">
                        <div class="flex gap-2 flex-wrap">
                            <button type="button" onclick="document.getElementById('set-hero-mascot-img').value='/putri_mascot_anim.gif'; const p=document.getElementById('card-preview-mascot'); if(p) p.src='/putri_mascot_anim.gif'; showToast('Animasi GIF dipilih');" class="text-[10px] font-bold px-2.5 py-1 rounded-lg border transition-all active:scale-95 cursor-pointer inline-flex items-center" style="background: rgba(var(--color-primary-rgb),0.08); border-color: rgba(var(--color-primary-rgb),0.25); color: var(--color-primary);">
                                <i class="fa-solid fa-wand-magic-sparkles mr-1.5"></i> Animasi GIF Maskot
                            </button>
                            <button type="button" onclick="document.getElementById('set-hero-mascot-img').value='/putri_mascot_3d.jpg'; const p=document.getElementById('card-preview-mascot'); if(p) p.src='/putri_mascot_3d.jpg'; showToast('Maskot 3D asli dipilih');" class="text-[10px] font-bold px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-all active:scale-95 cursor-pointer">
                                <i class="fa-solid fa-rotate-left mr-1"></i> Maskot 3D Statis
                            </button>
                            ${l.store.logo?`
                            <button type="button" onclick="const l='${u(l.store.logo)}'; document.getElementById('set-hero-mascot-img').value=l; const p=document.getElementById('card-preview-mascot'); if(p) p.src=l; showToast('Logo toko dipilih');" class="text-[10px] font-bold px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-all active:scale-95 cursor-pointer">
                                <i class="fa-solid fa-store mr-1"></i> Pakai Logo Toko
                            </button>`:""}
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="text-[10px] font-bold text-slate-400">Preview:</span>
                            <div class="w-16 h-16 rounded-xl overflow-hidden border-2 border-dashed border-slate-300 dark:border-slate-600 bg-black/10 shadow-sm shrink-0">
                                <img id="card-preview-mascot" src="${u(l.store.heroMascotImg||"/putri_mascot_anim.gif")}" class="w-full h-full object-contain" onerror="this.src='/putri_mascot_3d.jpg';" style="image-rendering: auto;">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Tag Sambutan</label>
                        <input autocomplete="off" id="set-hero-welcome-tag" value="${u(l.store.heroWelcomeTag||"SELAMAT DATANG")}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Contoh: SELAMAT DATANG">
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Judul Sambutan Banner</label>
                        <input autocomplete="off" id="set-hero-title" value="${u(l.store.heroTitle||l.store.name||"")}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Contoh: PUTRI UTAMA TEKNIK (Kosong = Nama Toko)">
                    </div>
                </div>

                <div>
                    <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Slogan / Deskripsi Sambutan Banner</label>
                    <textarea id="set-hero-subtitle" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" rows="2" placeholder="Deskripsi sambutan yang tampil di kartu banner utama...">${u(l.store.heroSubtitle||l.store.slogan||"")}</textarea>
                </div>
            </div>

            <!-- KARTU 5: WAKTU OPERASIONAL, FOOTER & HADIAH -->
            <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-sm space-y-4">
                <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl flex items-center justify-center text-sm shadow-sm shrink-0" style="background: rgba(var(--color-primary-rgb),0.1); color: var(--color-primary)">
                        <i class="fa-solid fa-clock"></i>
                    </div>
                    <div>
                        <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Operasional Publik &amp; Fitur Tambahan</h4>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400">Jam buka toko, teks hak cipta footer, dan katalog tukar reward</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Jam Operasional Toko</label>
                        <input autocomplete='off' id="set-hours" value="${u(l.store.operationalHours||"")}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Contoh: Senin - Minggu (08:00 - 21:00 WIB)">
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Teks Hak Cipta Footer</label>
                        <input autocomplete='off' id="set-credit" value="${u(l.store.footerCredit||"")}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Contoh: Toko Putri © 2026. All Rights Reserved.">
                    </div>
                </div>

                <div>
                    <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Tampilkan Katalog Tukar Hadiah di Beranda</label>
                    <select id="set-show-reward-catalog" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                        <option value="true" ${l.store.showRewardCatalog!==!1?"selected":""}>Ya, Tampilkan Katalog Hadiah</option>
                        <option value="false" ${l.store.showRewardCatalog===!1?"selected":""}>Sembunyikan</option>
                    </select>
                </div>
            </div>
        `}else if(e==="catalog")t="Tampilan Kategori & Merek",a="Kelola tata letak, model navigasi slider, dan visibilitas kategori produk serta brand di beranda",r="fa-palette",s=`
            <!-- KARTU 1: TATA LETAK KATEGORI -->
            <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-sm space-y-4">
                <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl flex items-center justify-center text-sm shadow-sm shrink-0" style="background: rgba(var(--color-primary-rgb),0.12); color: var(--color-primary)">
                        <i class="fa-solid fa-layer-group"></i>
                    </div>
                    <div>
                        <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Gaya Tampilan &amp; Slider Kategori</h4>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400">Atur model navigasi kategori produk untuk memudahkan pencarian barang oleh pelanggan</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Gaya Tampilan Kategori</label>
                        <select id="set-category-style" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                            <option value="grid" ${l.store.categoryStyle==="grid"?"selected":""}>Grid Ikon (Kotak berjejer)</option>
                            <option value="pill" ${l.store.categoryStyle==="pill"||l.store.categoryStyle==="text"||!l.store.categoryStyle?"selected":""}>Pill Horizontal Scroll (Kapsul geser)</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Tampilkan Slider Kategori di Beranda</label>
                        <select id="set-show-categories" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                            <option value="true" ${l.store.showCategories!==!1?"selected":""}>Tampilkan Slider Kategori</option>
                            <option value="false" ${l.store.showCategories===!1?"selected":""}>Sembunyikan</option>
                        </select>
                    </div>
                </div>

                <div class="p-3 rounded-xl text-[11px] flex items-start gap-2.5 border" style="background: rgba(var(--color-primary-rgb),0.06); border-color: rgba(var(--color-primary-rgb),0.18); color: var(--color-primary-dark, #a87f1b);">
                    <i class="fa-solid fa-circle-info mt-0.5 shrink-0" style="color: var(--color-primary)"></i>
                    <span><b>Tips Desain:</b> Model <i>Pill Horizontal Scroll</i> sangat hemat ruang di layar HP, sedangkan <i>Grid Ikon</i> mempermudah pelanggan melihat seluruh kategori sekaligus.</span>
                </div>
            </div>

            <!-- KARTU 2: TATA LETAK MEREK (BRAND) -->
            <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-sm space-y-4">
                <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl flex items-center justify-center text-sm shadow-sm shrink-0" style="background: rgba(var(--color-primary-rgb),0.12); color: var(--color-primary)">
                        <i class="fa-solid fa-tags"></i>
                    </div>
                    <div>
                        <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Gaya Tampilan &amp; Slider Merek / Brand</h4>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400">Atur visualisasi merek mitra dagang resmi pada halaman depan toko</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Gaya Tampilan Merek</label>
                        <select id="set-brand-style" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                            <option value="logo" ${l.store.brandStyle==="logo"||l.store.brandStyle==="image"||!l.store.brandStyle?"selected":""}>Logo Kotak (Grid Visual)</option>
                            <option value="pill" ${l.store.brandStyle==="pill"||l.store.brandStyle==="text"?"selected":""}>Pill Horizontal Scroll (Kapsul teks)</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Tampilkan Slider Merek di Beranda</label>
                        <select id="set-show-brands" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                            <option value="true" ${l.store.showBrands!==!1?"selected":""}>Tampilkan Slider Merek</option>
                            <option value="false" ${l.store.showBrands===!1?"selected":""}>Sembunyikan</option>
                        </select>
                    </div>
                </div>

                <div class="p-3 rounded-xl text-[11px] flex items-start gap-2.5 border" style="background: rgba(var(--color-primary-rgb),0.06); border-color: rgba(var(--color-primary-rgb),0.18); color: var(--color-primary-dark, #a87f1b);">
                    <i class="fa-solid fa-circle-check mt-0.5 shrink-0" style="color: var(--color-primary)"></i>
                    <span>Pelanggan dapat mengklik logo brand untuk langsung memfilter etalase hanya menampilkan barang dari merek tersebut.</span>
                </div>
            </div>

            <!-- KARTU 3: TOMBOL PULL UP / SCROLL TO TOP -->
            <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-sm space-y-4">
                <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl flex items-center justify-center text-sm shadow-sm shrink-0" style="background: rgba(var(--color-primary-rgb),0.12); color: var(--color-primary)">
                        <i class="fa-solid fa-arrow-up"></i>
                    </div>
                    <div>
                        <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Tombol Melayang Kembali ke Atas (Scroll-to-Top)</h4>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400">Tombol bulat panah atas otomatis melayang saat pelanggan menggulir panjang daftar produk di etalase toko</p>
                    </div>
                </div>

                <div>
                    <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Status Tombol Scroll-to-Top</label>
                    <select id="set-show-scroll-top" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                        <option value="true" ${l.store.showScrollTopButton!==!1?"selected":""}>Aktif (Hanya tampil di etalase belanja &amp; riwayat belanja pelanggan)</option>
                        <option value="false" ${l.store.showScrollTopButton===!1?"selected":""}>Nonaktifkan Seluruhnya</option>
                    </select>
                </div>

                <div class="p-3 rounded-xl text-[11px] flex items-start gap-2.5 border" style="background: rgba(var(--color-primary-rgb),0.06); border-color: rgba(var(--color-primary-rgb),0.18); color: var(--color-primary-dark, #a87f1b);">
                    <i class="fa-solid fa-shield-halved mt-0.5 shrink-0" style="color: var(--color-primary)"></i>
                    <span><b>Proteksi Khusus:</b> Tombol ini secara otomatis dilindungi dan <u>tidak akan pernah muncul</u> di dashboard CMS Admin, Kasir POS, formulir checkout, maupun saat jendela modal sedang terbuka.</span>
                </div>
            </div>
        `;else if(e==="shipping")t="Pengiriman & Lokasi Toko",a="Atur nomor kontak admin, tarif dasar ongkir per kilometer, promo gratis ongkir, dan titik koordinat GPS toko",r="fa-motorcycle",s=`
            <!-- KARTU 1: KONTAK & METODE PENGANTARAN -->
            <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-sm space-y-4">
                <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl flex items-center justify-center text-sm shadow-sm shrink-0" style="background: rgba(var(--color-primary-rgb),0.12); color: var(--color-primary)">
                        <i class="fa-solid fa-truck-ramp-box"></i>
                    </div>
                    <div>
                        <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Kontak Admin &amp; Metode Pengantaran</h4>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400">Nomor WhatsApp konfirmasi, tarif dasar ongkir kurir, dan alamat fisik toko</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Nomor WhatsApp Admin</label>
                        <input autocomplete='off' id="set-wa" value="${u(l.store.wa||"")}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Contoh: 08123456789">
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Ongkir per Kilometer (Rp)</label>
                        <input autocomplete='off' type="number" id="set-cost" value="${u(l.store.costPerKm||0)}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Contoh: 2000">
                    </div>
                </div>

                <div>
                    <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Alamat Lengkap Toko</label>
                    <textarea id="set-address" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" rows="2" placeholder="Nama jalan, nomor bangunan, RT/RW, kelurahan, kecamatan, kota/kabupaten...">${u(l.store.address||"")}</textarea>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Opsi Kirim ke Alamat (Kurir Toko)</label>
                        <select id="set-delivery-enabled" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                            <option value="true" ${l.store.isDeliveryEnabled!==!1?"selected":""}>Aktif (Bisa diantar kurir)</option>
                            <option value="false" ${l.store.isDeliveryEnabled===!1?"selected":""}>Nonaktif (Hanya ambil di toko)</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Opsi Ambil di Toko (Self Pickup)</label>
                        <select id="set-pickup-enabled" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                            <option value="true" ${l.store.isPickupEnabled!==!1?"selected":""}>Aktif (Bisa ambil di kasir)</option>
                            <option value="false" ${l.store.isPickupEnabled===!1?"selected":""}>Nonaktif</option>
                        </select>
                    </div>
                </div>
            </div>
            
            <!-- KARTU 2: PROMO GRATIS ONGKIR MINIMAL BELANJA -->
            <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-sm space-y-4">
                <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl flex items-center justify-center text-sm shadow-sm shrink-0" style="background: rgba(var(--color-primary-rgb),0.12); color: var(--color-primary)">
                        <i class="fa-solid fa-truck-fast"></i>
                    </div>
                    <div>
                        <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Promo Gratis Ongkir Otomatis</h4>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400">Otomatis bebas ongkir saat total belanja pelanggan mencapai nominal batas minimal</p>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">Status Promo</label>
                        <select id="set-free-shipping-enabled" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                            <option value="true" ${l.store.freeShippingMinSpendEnabled===!0||l.store.freeShippingMinSpendEnabled==="true"?"selected":""}>Aktif (Bebas ongkir otomatis)</option>
                            <option value="false" ${l.store.freeShippingMinSpendEnabled!==!0&&l.store.freeShippingMinSpendEnabled!=="true"?"selected":""}>Nonaktif</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">Minimal Belanja (Rp)</label>
                        <input autocomplete='off' type="number" id="set-free-shipping-amount" value="${u(l.store.freeShippingMinSpendAmount||0)}" min="0" step="1000" placeholder="Contoh: 1000000" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                        <span class="text-[10px] text-slate-500 dark:text-slate-400 mt-1 block">Contoh: 1000000 (Rp 1.000.000). Bilah progres belanja akan tampil di keranjang.</span>
                    </div>
                </div>
            </div>

            <!-- KARTU 3: KOTAK GEOLOKASI GPS CERDAS TOKO -->
            <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-sm space-y-4">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div class="flex items-center gap-3">
                        <div class="w-9 h-9 rounded-xl flex items-center justify-center text-sm shadow-sm shrink-0" style="background: rgba(var(--color-primary-rgb),0.12); color: var(--color-primary)">
                            <i class="fa-solid fa-map-location-dot"></i>
                        </div>
                        <div>
                            <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Lokasi Toko &amp; Pin Google Maps</h4>
                            <p class="text-[10px] text-slate-500 dark:text-slate-400">Tinggal tempel link atau angka koordinat dari Google Maps — sistem langsung mengekstrak titik presisi</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        <button type="button" id="btn-preview-maps" onclick="previewStoreOnMaps()" class="text-[11px] font-bold px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 shadow-sm transition-all flex items-center gap-1.5 active:scale-95 cursor-pointer" title="Buka dan Cek Titik di Google Maps">
                            <i class="fa-solid fa-arrow-up-right-from-square"></i> Cek di Maps
                        </button>
                        <button type="button" onclick="detectAdminGPS()" class="text-[11px] font-bold px-3.5 py-1.5 rounded-xl text-white shadow-sm transition-all flex items-center gap-1.5 active:scale-95 cursor-pointer" style="background: var(--color-primary)" title="Ambil GPS Perangkat Saat Ini">
                            <i class="fa-solid fa-crosshairs"></i> GPS Saya
                        </button>
                    </div>
                </div>

                <!-- Input Cerdas Tempel Link / Koordinat -->
                <div>
                    <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider flex items-center justify-between">
                        <span>Tempel Link / Koordinat Google Maps</span>
                        <span class="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md" style="background: rgba(var(--color-primary-rgb),0.1); color: var(--color-primary);">Smart Auto-Extract</span>
                    </label>
                    <div class="relative flex items-center">
                        <input autocomplete='off' id="set-maps-smart-input" 
                            value="${u(l.store.lat&&l.store.lng?`${l.store.lat}, ${l.store.lng}`:"-7.82308507053985, 112.0988374794464")}"
                            placeholder="Tempel di sini: -7.823085, 112.098837 atau link Google Maps" 
                            class="admin-input !py-3 !pr-24 bg-white dark:bg-slate-900 shadow-sm w-full font-mono text-xs text-slate-800 dark:text-slate-100"
                            oninput="handleSmartMapsInput(this.value)"
                            onpaste="setTimeout(() => handleSmartMapsInput(this.value), 50)">
                        <button type="button" onclick="pasteFromClipboardToMapsInput()" class="absolute right-2 px-3 py-1.5 text-[10px] font-bold rounded-lg border active:scale-95 transition-all flex items-center gap-1 cursor-pointer" style="background: rgba(var(--color-primary-rgb),0.08); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb),0.2);">
                            <i class="fa-solid fa-paste"></i> Tempel
                        </button>
                    </div>
                    <div id="maps-smart-feedback" class="text-[10px] mt-1.5 font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                        <i class="fa-solid fa-circle-check"></i> <span>Koordinat aktif: Presisi tinggi terhubung ke kalkulator ongkir kurir</span>
                    </div>
                </div>

                <!-- Kolom Terpisah Latitude & Longitude Presisi Tinggi -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-slate-200 dark:border-slate-700/80">
                    <div>
                        <label class="block text-[10px] font-bold text-slate-600 dark:text-slate-400 mb-1 uppercase tracking-wider">Latitude Toko (Garis Lintang)</label>
                        <input autocomplete='off' id="set-lat" value="${u(l.store.lat||"-7.82308507053985")}" class="admin-input !py-2.5 bg-white dark:bg-slate-900 shadow-sm text-xs font-mono w-full" placeholder="-7.82308507053985" oninput="handleManualCoordChange()">
                    </div>
                    <div>
                        <label class="block text-[10px] font-bold text-slate-600 dark:text-slate-400 mb-1 uppercase tracking-wider">Longitude Toko (Garis Bujur)</label>
                        <input autocomplete='off' id="set-lng" value="${u(l.store.lng||"112.0988374794464")}" class="admin-input !py-2.5 bg-white dark:bg-slate-900 shadow-sm text-xs font-mono w-full" placeholder="112.0988374794464" oninput="handleManualCoordChange()">
                    </div>
                </div>
            </div>
        `;else if(e==="payment"){t="Metode Pembayaran (QRIS & Putri PayLater)",a="Konfigurasi penerimaan digital QRIS dan pengaturan cicilan Putri PayLater 30 hari hingga 3 bulan transparan",r="fa-wallet";const i=no(),n=window.currentPaymentSubtab||"paylater";s=`
            <!-- SUB-NAV TAB SELECTION -->
            <div class="flex items-center gap-2 p-1.5 bg-slate-100 dark:bg-slate-800 rounded-2xl mb-4 border border-slate-200/80 dark:border-slate-700/80">
                <button type="button" onclick="window.switchPaymentSubtab('paylater')" id="subtab-btn-paylater"
                        class="flex-1 py-2.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${n==="paylater"?"bg-white dark:bg-slate-900 text-slate-800 dark:text-white shadow-xs border border-slate-200/60 dark:border-slate-700":"text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"}">
                    <i class="fa-solid fa-bolt text-[var(--color-primary)]"></i> Putri PayLater &amp; Cicilan 3 Bulan
                </button>
                <button type="button" onclick="window.switchPaymentSubtab('qris')" id="subtab-btn-qris"
                        class="flex-1 py-2.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${n==="qris"?"bg-white dark:bg-slate-900 text-slate-800 dark:text-white shadow-xs border border-slate-200/60 dark:border-slate-700":"text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"}">
                    <i class="fa-solid fa-qrcode text-[var(--color-primary)]"></i> Barcode QRIS Nasional
                </button>
            </div>

            <!-- TAB 1: PUTRI PAYLATER & CICILAN 3 BULAN -->
            <div id="payment-subtab-paylater" class="${n==="paylater"?"":"hidden"} space-y-4">
                <!-- KARTU 1: KONTROL MASTER & MINIMAL BELANJA -->
                <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-sm space-y-4">
                    <div class="flex items-center gap-3">
                        <div class="w-9 h-9 rounded-xl flex items-center justify-center text-sm shadow-sm shrink-0" style="background: rgba(var(--color-primary-rgb),0.12); color: var(--color-primary)">
                            <i class="fa-solid fa-bolt"></i>
                        </div>
                        <div>
                            <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Kontrol Utama Putri PayLater</h4>
                            <p class="text-[10px] text-slate-500 dark:text-slate-400">Aktifkan layanan kredit toko & cicilan 30 hari hingga 3 bulan dengan rincian biaya transparan</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Status Layanan PayLater</label>
                            <select id="set-paylater-enabled" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs font-bold cursor-pointer" onchange="window.updateAdminPaylaterSim()">
                                <option value="true" ${i.enabled?"selected":""}>Aktif (Bisa Digunakan Pelanggan)</option>
                                <option value="false" ${i.enabled?"":"selected"}>Nonaktif</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Minimal Belanja Cicilan (Rp)</label>
                            <input type="number" id="set-paylater-min-order" value="${i.minOrder}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs font-mono font-bold" placeholder="20000" min="0" oninput="window.updateAdminPaylaterSim()">
                            <p class="text-[9.5px] text-slate-400 mt-1">Pembelian di bawah nominal ini belum dapat mencicil.</p>
                        </div>
                    </div>

                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Catatan Transparansi &amp; Ketentuan Toko</label>
                        <input id="set-paylater-notice-text" value="${u(i.noticeText)}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Contoh: Cicilan transparan tanpa biaya tersembunyi. Tagihan jatuh tempo setiap bulan.">
                    </div>
                </div>

                <!-- KARTU 2: PENGATURAN TENOR 30 HARI, 2 BULAN, 3 BULAN -->
                <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-sm space-y-4">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <div class="w-9 h-9 rounded-xl flex items-center justify-center text-sm shadow-sm shrink-0 bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                                <i class="fa-solid fa-calendar-week"></i>
                            </div>
                            <div>
                                <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Skema Biaya Tenor Cicilan (Zero Hidden Fees)</h4>
                                <p class="text-[10px] text-slate-500 dark:text-slate-400">Tentukan biaya admin dan biaya penanganan/layanan per tenor (bisa nominal tetap Rp atau persentase %)</p>
                            </div>
                        </div>
                        <span class="text-[9.5px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">100% Transparan</span>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-1">
                        <!-- TENOR 1: 30 HARI -->
                        <div class="p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-3">
                            <div class="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-700">
                                <div class="flex items-center gap-1.5">
                                    <span class="w-2 h-2 rounded-full bg-blue-500"></span>
                                    <span class="text-xs font-black uppercase text-slate-800 dark:text-white">Tenor 30 Hari</span>
                                </div>
                                <select id="set-paylater-30d-enabled" class="text-[10px] font-bold py-1 px-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 cursor-pointer" onchange="window.updateAdminPaylaterSim()">
                                    <option value="true" ${i.tenors["30d"].enabled?"selected":""}>Aktif</option>
                                    <option value="false" ${i.tenors["30d"].enabled?"":"selected"}>Nonaktif</option>
                                </select>
                            </div>
                            
                            <div>
                                <label class="block text-[10px] font-bold text-slate-500 uppercase mb-1">Biaya Admin</label>
                                <div class="flex gap-1.5">
                                    <select id="set-paylater-30d-admin-type" class="w-20 text-[11px] font-bold py-2 px-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900" onchange="window.updateAdminPaylaterSim()">
                                        <option value="flat" ${i.tenors["30d"].adminFeeType==="flat"?"selected":""}>Rp</option>
                                        <option value="percent" ${i.tenors["30d"].adminFeeType==="percent"?"selected":""}>%</option>
                                    </select>
                                    <input type="number" id="set-paylater-30d-admin-val" value="${i.tenors["30d"].adminFeeValue}" min="0" step="any" class="admin-input !py-2 bg-white dark:bg-slate-900 flex-1 text-xs font-mono font-bold" placeholder="0" oninput="window.updateAdminPaylaterSim()">
                                </div>
                            </div>

                            <div>
                                <label class="block text-[10px] font-bold text-slate-500 uppercase mb-1">Biaya Penanganan</label>
                                <div class="flex gap-1.5">
                                    <select id="set-paylater-30d-service-type" class="w-20 text-[11px] font-bold py-2 px-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900" onchange="window.updateAdminPaylaterSim()">
                                        <option value="flat" ${i.tenors["30d"].serviceFeeType==="flat"?"selected":""}>Rp</option>
                                        <option value="percent" ${i.tenors["30d"].serviceFeeType==="percent"?"selected":""}>%</option>
                                    </select>
                                    <input type="number" id="set-paylater-30d-service-val" value="${i.tenors["30d"].serviceFeeValue}" min="0" step="any" class="admin-input !py-2 bg-white dark:bg-slate-900 flex-1 text-xs font-mono font-bold" placeholder="0" oninput="window.updateAdminPaylaterSim()">
                                </div>
                            </div>
                        </div>

                        <!-- TENOR 2: 2 BULAN -->
                        <div class="p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-3">
                            <div class="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-700">
                                <div class="flex items-center gap-1.5">
                                    <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                                    <span class="text-xs font-black uppercase text-slate-800 dark:text-white">Tenor 2 Bulan</span>
                                </div>
                                <select id="set-paylater-2m-enabled" class="text-[10px] font-bold py-1 px-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 cursor-pointer" onchange="window.updateAdminPaylaterSim()">
                                    <option value="true" ${i.tenors["2m"].enabled?"selected":""}>Aktif</option>
                                    <option value="false" ${i.tenors["2m"].enabled?"":"selected"}>Nonaktif</option>
                                </select>
                            </div>
                            
                            <div>
                                <label class="block text-[10px] font-bold text-slate-500 uppercase mb-1">Biaya Admin</label>
                                <div class="flex gap-1.5">
                                    <select id="set-paylater-2m-admin-type" class="w-20 text-[11px] font-bold py-2 px-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900" onchange="window.updateAdminPaylaterSim()">
                                        <option value="flat" ${i.tenors["2m"].adminFeeType==="flat"?"selected":""}>Rp</option>
                                        <option value="percent" ${i.tenors["2m"].adminFeeType==="percent"?"selected":""}>%</option>
                                    </select>
                                    <input type="number" id="set-paylater-2m-admin-val" value="${i.tenors["2m"].adminFeeValue}" min="0" step="any" class="admin-input !py-2 bg-white dark:bg-slate-900 flex-1 text-xs font-mono font-bold" placeholder="0" oninput="window.updateAdminPaylaterSim()">
                                </div>
                            </div>

                            <div>
                                <label class="block text-[10px] font-bold text-slate-500 uppercase mb-1">Biaya Penanganan</label>
                                <div class="flex gap-1.5">
                                    <select id="set-paylater-2m-service-type" class="w-20 text-[11px] font-bold py-2 px-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900" onchange="window.updateAdminPaylaterSim()">
                                        <option value="flat" ${i.tenors["2m"].serviceFeeType==="flat"?"selected":""}>Rp</option>
                                        <option value="percent" ${i.tenors["2m"].serviceFeeType==="percent"?"selected":""}>%</option>
                                    </select>
                                    <input type="number" id="set-paylater-2m-service-val" value="${i.tenors["2m"].serviceFeeValue}" min="0" step="any" class="admin-input !py-2 bg-white dark:bg-slate-900 flex-1 text-xs font-mono font-bold" placeholder="0" oninput="window.updateAdminPaylaterSim()">
                                </div>
                            </div>
                        </div>

                        <!-- TENOR 3: 3 BULAN -->
                        <div class="p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-3">
                            <div class="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-700">
                                <div class="flex items-center gap-1.5">
                                    <span class="w-2 h-2 rounded-full bg-amber-500"></span>
                                    <span class="text-xs font-black uppercase text-slate-800 dark:text-white">Tenor 3 Bulan</span>
                                </div>
                                <select id="set-paylater-3m-enabled" class="text-[10px] font-bold py-1 px-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 cursor-pointer" onchange="window.updateAdminPaylaterSim()">
                                    <option value="true" ${i.tenors["3m"].enabled?"selected":""}>Aktif</option>
                                    <option value="false" ${i.tenors["3m"].enabled?"":"selected"}>Nonaktif</option>
                                </select>
                            </div>
                            
                            <div>
                                <label class="block text-[10px] font-bold text-slate-500 uppercase mb-1">Biaya Admin</label>
                                <div class="flex gap-1.5">
                                    <select id="set-paylater-3m-admin-type" class="w-20 text-[11px] font-bold py-2 px-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900" onchange="window.updateAdminPaylaterSim()">
                                        <option value="flat" ${i.tenors["3m"].adminFeeType==="flat"?"selected":""}>Rp</option>
                                        <option value="percent" ${i.tenors["3m"].adminFeeType==="percent"?"selected":""}>%</option>
                                    </select>
                                    <input type="number" id="set-paylater-3m-admin-val" value="${i.tenors["3m"].adminFeeValue}" min="0" step="any" class="admin-input !py-2 bg-white dark:bg-slate-900 flex-1 text-xs font-mono font-bold" placeholder="0" oninput="window.updateAdminPaylaterSim()">
                                </div>
                            </div>

                            <div>
                                <label class="block text-[10px] font-bold text-slate-500 uppercase mb-1">Biaya Penanganan</label>
                                <div class="flex gap-1.5">
                                    <select id="set-paylater-3m-service-type" class="w-20 text-[11px] font-bold py-2 px-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900" onchange="window.updateAdminPaylaterSim()">
                                        <option value="flat" ${i.tenors["3m"].serviceFeeType==="flat"?"selected":""}>Rp</option>
                                        <option value="percent" ${i.tenors["3m"].serviceFeeType==="percent"?"selected":""}>%</option>
                                    </select>
                                    <input type="number" id="set-paylater-3m-service-val" value="${i.tenors["3m"].serviceFeeValue}" min="0" step="any" class="admin-input !py-2 bg-white dark:bg-slate-900 flex-1 text-xs font-mono font-bold" placeholder="0" oninput="window.updateAdminPaylaterSim()">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- KARTU 3: LIVE SIMULATOR REAL-TIME -->
                <div class="p-4 sm:p-5 rounded-2xl shadow-sm space-y-4 border transition-all" style="border-color: rgba(var(--color-primary-rgb), 0.25); background: rgba(var(--color-primary-rgb), 0.03);">
                    <div class="flex items-center justify-between flex-wrap gap-2">
                        <div class="flex items-center gap-3">
                            <div class="w-9 h-9 rounded-xl flex items-center justify-center text-sm shadow-sm shrink-0 text-white" style="background: var(--color-primary);">
                                <i class="fa-solid fa-calculator"></i>
                            </div>
                            <div>
                                <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Simulasi Rumus Langsung (Live Preview)</h4>
                                <p class="text-[10px] text-slate-500 dark:text-slate-400">Uji coba simulasi otomatis sebelum menyimpan ke sistem</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="text-[10px] font-bold text-slate-500">Tes Belanja:</span>
                            <div class="relative flex items-center">
                                <span class="absolute left-2.5 text-[11px] font-bold text-slate-400">Rp</span>
                                <input type="number" id="set-paylater-sim-amount" value="300000" min="1000" step="1000"
                                       class="w-32 py-1.5 pl-8 pr-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-mono font-bold text-right"
                                       oninput="window.updateAdminPaylaterSim()">
                            </div>
                        </div>
                    </div>

                    <div id="paylater-admin-sim-container" class="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <!-- Diisi dinamis oleh updateAdminPaylaterSim -->
                    </div>
                </div>
            </div>

            <!-- TAB 2: BARCODE QRIS NASIONAL -->
            <div id="payment-subtab-qris" class="${n==="qris"?"":"hidden"} space-y-4">
                <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-sm space-y-4">
                    <div class="flex items-center gap-3">
                        <div class="w-9 h-9 rounded-xl flex items-center justify-center text-sm shadow-sm shrink-0" style="background: rgba(var(--color-primary-rgb),0.12); color: var(--color-primary)">
                            <i class="fa-solid fa-qrcode"></i>
                        </div>
                        <div>
                            <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Barcode Pembayaran QRIS Nasional</h4>
                            <p class="text-[10px] text-slate-500 dark:text-slate-400">Mendukung scan dari GoPay, OVO, DANA, ShopeePay, BCA, Mandiri, BRI, BNI, dan seluruh bank</p>
                        </div>
                    </div>

                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">URL Gambar Barcode QRIS</label>
                        <div class="flex gap-2">
                            <input autocomplete='off' id="set-qris-url" value="${u(l.payment?.qrisUrl||"")}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm flex-1 text-xs" placeholder="URL file gambar QRIS atau klik tombol upload di kanan">
                            <label class="text-white rounded-xl px-4 flex items-center justify-center cursor-pointer transition-all shrink-0 active:scale-95 shadow-sm font-bold text-xs hover:opacity-90" style="background: var(--color-primary)">
                                <i class="fa-solid fa-cloud-arrow-up mr-1.5"></i> Upload QRIS
                                <input type="file" accept="image/*" class="hidden" onchange="handleImageUpload(this, 'set-qris-url')">
                            </label>
                        </div>
                    </div>

                    <!-- PREVIEW BOX QRIS -->
                    ${l.payment?.qrisUrl?`
                        <div class="p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl flex flex-col sm:flex-row items-center gap-4 shadow-sm">
                            <div class="p-2 bg-white rounded-xl border border-slate-200 dark:border-slate-600 shadow-inner">
                                <img src="${u(l.payment.qrisUrl)}" alt="Preview QRIS" class="w-28 h-28 object-contain rounded-lg">
                            </div>
                            <div class="text-center sm:text-left space-y-1">
                                <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold" style="background: rgba(var(--color-primary-rgb),0.1); color: var(--color-primary);">
                                    <i class="fa-solid fa-circle-check"></i> QRIS Siap Digunakan
                                </div>
                                <h5 class="text-xs font-bold text-slate-800 dark:text-slate-100">Barcode QRIS Aktif di Halaman Checkout</h5>
                                <p class="text-[11px] text-slate-500 dark:text-slate-400">Gambar barcode di atas akan otomatis ditampilkan dengan jelas saat pembeli memilih opsi pembayaran QRIS.</p>
                            </div>
                        </div>
                    `:`
                        <div class="p-6 bg-white dark:bg-slate-800 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl text-center space-y-2">
                            <div class="w-12 h-12 rounded-2xl mx-auto flex items-center justify-center text-xl shadow-xs" style="background: rgba(var(--color-primary-rgb),0.12); color: var(--color-primary)">
                                <i class="fa-solid fa-qrcode"></i>
                            </div>
                            <h5 class="text-xs font-bold text-slate-700 dark:text-slate-200">Belum Ada Barcode QRIS</h5>
                            <p class="text-[11px] text-slate-400 max-w-sm mx-auto">Klik tombol <b>Upload QRIS</b> di atas untuk mengunggah gambar barcode QRIS toko Anda agar pembeli bisa membayar secara digital.</p>
                        </div>
                    `}

                    <div class="p-3 rounded-xl text-[11px] flex items-start gap-2.5 border" style="background: rgba(var(--color-primary-rgb),0.06); border-color: rgba(var(--color-primary-rgb),0.18); color: var(--color-primary-dark, #a87f1b);">
                        <i class="fa-solid fa-shield-halved mt-0.5 shrink-0" style="color: var(--color-primary)"></i>
                        <span><b>Keamanan Transaksi:</b> Pastikan barcode QRIS yang diunggah memiliki nama toko Anda yang terdaftar resmi di penyedia jasa pembayaran (PJSP).</span>
                    </div>
                </div>
            </div>
        `}else e==="config"?(t="Sistem & Integrasi Cloud",a="Konfigurasi jembatan endpoint Google Apps Script untuk cloud storage gambar produk, banner promosi, dan media drive",r="fa-laptop-code",s=`
            <!-- KARTU 1: INTEGRASI GOOGLE APPS SCRIPT (GAS) -->
            <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-sm space-y-4">
                <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl flex items-center justify-center text-sm shadow-sm shrink-0" style="background: rgba(var(--color-primary-rgb),0.12); color: var(--color-primary)">
                        <i class="fa-solid fa-cloud-arrow-up"></i>
                    </div>
                    <div>
                        <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Google Apps Script Endpoint (Media Drive)</h4>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400">Jalur serverless gratis untuk upload foto produk & bukti transfer langsung ke Google Drive toko</p>
                    </div>
                </div>

                <div>
                    <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Web App URL Endpoint</label>
                    <input autocomplete='off' id="set-gas-url" value="${u(l.config?.gasUrl||"")}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full font-mono text-xs" placeholder="https://script.google.com/macros/s/.../exec">
                    <p class="text-[10px] text-slate-500 dark:text-slate-400 mt-1.5 font-medium">Tempel URL hasil deploy Web App dari Google Apps Script project toko Anda.</p>
                </div>

                <div class="p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl space-y-2">
                    <div class="flex items-center gap-2">
                        <span class="w-2 h-2 rounded-full ${l.config?.gasUrl?"bg-emerald-500":"bg-amber-500"} animate-pulse"></span>
                        <span class="text-xs font-bold text-slate-700 dark:text-slate-200">
                            ${l.config?.gasUrl?"Integrasi Cloud Storage Aktif":"Endpoint Belum Dikonfigurasi"}
                        </span>
                    </div>
                    <ul class="text-[11px] text-slate-500 dark:text-slate-400 space-y-1 list-disc list-inside">
                        <li>Semua file gambar produk yang diupload admin akan disimpan aman di Google Drive Anda.</li>
                        <li>Tidak membebani memori hosting lokal dan menjaga loading website tetap ringan.</li>
                        <li>Mendukung konversi otomatis ke link thumbnail instan untuk etalase katalog.</li>
                    </ul>
                </div>
            </div>
        `):e==="operasional"&&(t="Operasional & Perpajakan",a="Konfigurasi pembatasan inventaris stok produk otomatis, skema kalkulasi PPN transaksi, dan program poin loyalitas member",r="fa-sliders",s=`
            <!-- KARTU 1: MANAJEMEN STOK PRODUK -->
            <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-sm space-y-4">
                <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl flex items-center justify-center text-sm shadow-sm shrink-0" style="background: rgba(var(--color-primary-rgb),0.12); color: var(--color-primary)">
                        <i class="fa-solid fa-boxes-stacked"></i>
                    </div>
                    <div>
                        <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Manajemen Inventaris &amp; Kontrol Stok</h4>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400">Atur perilaku katalog toko saat kuantitas stok produk mencapai angka 0</p>
                    </div>
                </div>

                <div>
                    <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Mode Pengurangan &amp; Pembatasan Stok</label>
                    <select id="set-use-stock" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                        <option value="true" ${l.store.useStock===!0?"selected":""}>Aktif — Otomatis tandai HABIS jika stok 0 (Pelanggan tidak bisa checkout)</option>
                        <option value="false" ${l.store.useStock!==!0?"selected":""}>Nonaktif — Stok tak terbatas (Cocok untuk barang pre-order / tanpa pembatasan stok)</option>
                    </select>
                </div>

                <div class="p-3 rounded-xl text-[11px] flex items-start gap-2.5 border" style="background: rgba(var(--color-primary-rgb),0.06); border-color: rgba(var(--color-primary-rgb),0.18); color: var(--color-primary-dark, #a87f1b);">
                    <i class="fa-solid fa-circle-info mt-0.5 shrink-0" style="color: var(--color-primary)"></i>
                    <span>Saat mode aktif, setiap transaksi kasir atau checkout online akan otomatis memotong stok barang secara real-time.</span>
                </div>
            </div>

            <!-- KARTU 2: KONFIGURASI SMART PERPAJAKAN REPUBLIK INDONESIA 2026 -->
            <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-sm space-y-4">
                <div class="flex items-center justify-between flex-wrap gap-2">
                    <div class="flex items-center gap-3">
                        <div class="w-9 h-9 rounded-xl flex items-center justify-center text-sm shadow-sm shrink-0" style="background: rgba(var(--color-primary-rgb),0.12); color: var(--color-primary)">
                            <i class="fa-solid fa-scale-balanced"></i>
                        </div>
                        <div>
                            <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                                <span>Konfigurasi PPN &amp; Smart Perpajakan RI 2026</span>
                                <span class="px-2 py-0.5 rounded-full text-[9px] font-black border" style="background: rgba(var(--color-primary-rgb),0.1); border-color: rgba(var(--color-primary-rgb),0.22); color: var(--color-primary);">UU HPP &bull; PP 55/2022</span>
                            </h4>
                            <p class="text-[10px] text-slate-500 dark:text-slate-400">Atur skema perpajakan resmi pada struk kasir, invoice A4, laporan keuangan, dan checkout belanja</p>
                        </div>
                    </div>
                </div>

                <!-- PRESET 1-KLIK SMART PERPAJAKAN INDONESIA 2026 -->
                <div class="space-y-2">
                    <label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                        <i class="fa-solid fa-wand-magic-sparkles" style="color: var(--color-primary)"></i><span>Pilih Preset Cepat Smart Perpajakan RI 2026:</span>
                    </label>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                        <!-- PRESET A: BADAN NON-PKP (0% TRANSPARAN) -->
                        <button type="button" onclick="window.applyTaxPresetRI('badan_non_pkp')" class="p-3 text-left rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/90 hover:border-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.03)] transition-all cursor-pointer group active:scale-98">
                            <div class="flex items-center justify-between mb-1">
                                <span class="text-xs font-bold text-slate-800 dark:text-slate-100 flex items-center gap-1.5">
                                    <i class="fa-solid fa-building" style="color: var(--color-primary)"></i> Badan Non-PKP
                                </span>
                                <span class="text-[9px] font-black px-1.5 py-0.5 rounded" style="background: rgba(var(--color-primary-rgb),0.12); color: var(--color-primary);">0%</span>
                            </div>
                            <p class="text-[10px] text-slate-600 dark:text-slate-400 leading-tight">Bebas PPN Rp 0 ke pembeli. Baris PPN 0% tetap tercetak di struk &amp; faktur A4 resmi.</p>
                        </button>

                        <!-- PRESET B: HARGA INKLUSIF TOKO (11% UU HPP) -->
                        <button type="button" onclick="window.applyTaxPresetRI('inklusif_11')" class="p-3 text-left rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/90 hover:border-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.03)] transition-all cursor-pointer group active:scale-98">
                            <div class="flex items-center justify-between mb-1">
                                <span class="text-xs font-bold text-slate-800 dark:text-slate-100 flex items-center gap-1.5">
                                    <i class="fa-solid fa-tags text-slate-600 dark:text-slate-400"></i> Harga Inklusif
                                </span>
                                <span class="text-[9px] font-black px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">11%</span>
                            </div>
                            <p class="text-[10px] text-slate-600 dark:text-slate-400 leading-tight">Pajak sudah di dalam harga. Pembeli tidak nambah bayar, DPP &amp; PPN diurai di struk.</p>
                        </button>

                        <!-- PRESET C: PKP STANDAR (11% UU HPP) -->
                        <button type="button" onclick="window.applyTaxPresetRI('pkp_11')" class="p-3 text-left rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/90 hover:border-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.03)] transition-all cursor-pointer group active:scale-98">
                            <div class="flex items-center justify-between mb-1">
                                <span class="text-xs font-bold text-slate-800 dark:text-slate-100 flex items-center gap-1.5">
                                    <i class="fa-solid fa-landmark text-slate-600 dark:text-slate-400"></i> PKP Standar
                                </span>
                                <span class="text-[9px] font-black px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">11%</span>
                            </div>
                            <p class="text-[10px] text-slate-600 dark:text-slate-400 leading-tight">Eksklusif: PPN 11% ditambahkan di atas subtotal saat checkout dan kasir POS.</p>
                        </button>

                        <!-- PRESET D: PKP PENYESUAIAN 12% (UU HPP 2026) -->
                        <button type="button" onclick="window.applyTaxPresetRI('pkp_12')" class="p-3 text-left rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/90 hover:border-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.03)] transition-all cursor-pointer group active:scale-98">
                            <div class="flex items-center justify-between mb-1">
                                <span class="text-xs font-bold text-slate-800 dark:text-slate-100 flex items-center gap-1.5">
                                    <i class="fa-solid fa-bolt text-slate-600 dark:text-slate-400"></i> PKP Transisi
                                </span>
                                <span class="text-[9px] font-black px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">12%</span>
                            </div>
                            <p class="text-[10px] text-slate-600 dark:text-slate-400 leading-tight">Penyesuaian tarif PPN 12% sesuai tahapan regulasi UU Harmonisasi Perpajakan.</p>
                        </button>
                    </div>
                </div>

                <!-- FORM KONTROL GRANULAR PERPAJAKAN -->
                ${(()=>{const i=l.store.ppnRate!==void 0&&l.store.ppnRate!==null&&!isNaN(parseFloat(l.store.ppnRate))?parseFloat(l.store.ppnRate):11,n=l.store.ppnShowZero!==!1,p=l.store.ppnTaxLabel||"",d=l.store.taxNpwp||l.taxSettings?.npwp||"";return`
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
                        <div>
                            <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Status Perhitungan PPN</label>
                            <select id="set-ppn-enabled" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                                <option value="true" ${l.store.ppnEnabled===!0?"selected":""}>Aktif (Kalkulasi PPN Dihitung)</option>
                                <option value="false" ${l.store.ppnEnabled!==!0?"selected":""}>Nonaktif (Tanpa Baris PPN)</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Tipe Perhitungan</label>
                            <select id="set-ppn-type" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                                <option value="inclusive" ${l.store.ppnType==="inclusive"?"selected":""}>Inklusif (Pajak dalam harga &bull; Pembeli Rp 0 Tambahan)</option>
                                <option value="exclusive" ${l.store.ppnType!=="inclusive"?"selected":""}>Eksklusif (Pajak ditambah di atas subtotal)</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Tarif PPN (%)</label>
                            <input autocomplete='off' type="number" id="set-ppn-rate" value="${i}" min="0" max="100" step="0.1" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="0 atau 11">
                            <span class="text-[10px] text-slate-400 mt-1 block">Ketik <b>0</b> jika Wajib Pajak Badan Non-PKP / Bebas PPN.</span>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Tampilan PPN 0% di Struk / Faktur</label>
                            <select id="set-ppn-show-zero" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                                <option value="true" ${n?"selected":""}>Tetap Tampilkan Baris Pajak (Walau Rp 0)</option>
                                <option value="false" ${n?"":"selected"}>Sembunyikan Baris Pajak jika Rp 0</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Label Pajak di Struk/Invoice</label>
                            <input autocomplete='off' type="text" id="set-ppn-tax-label" value="${u(p)}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Cth: PPN Badan (0%) atau PPN">
                        </div>
                        <div>
                            <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">NPWP Toko / 16-Digit CTAS DJP</label>
                            <input autocomplete='off' type="text" id="set-tax-npwp" value="${u(d)}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs font-mono" placeholder="16 digit format Coretax DJP">
                        </div>
                    </div>
                    `})()}

                <div class="p-3.5 rounded-xl text-[11px] space-y-1.5 border" style="background: rgba(var(--color-primary-rgb),0.06); border-color: rgba(var(--color-primary-rgb),0.18);">
                    <div class="flex items-center gap-2 font-bold" style="color: var(--color-primary-dark, #a87f1b)">
                        <i class="fa-solid fa-circle-info text-sm" style="color: var(--color-primary)"></i>
                        <span>Pedoman Praktis Wajib Pajak Badan di Toko Putri:</span>
                    </div>
                    <ul class="list-disc pl-5 space-y-1 text-[10px] text-slate-600 dark:text-slate-400">
                        <li><b>Wajib Pajak Badan Non-PKP / Bebas PPN (0%):</b> Pilih Status <i>Aktif</i>, Tipe <i>Inklusif</i>, Tarif <i>0%</i>, dan Tampilan PPN 0% <i>Tetap Tampilkan</i>. Pelanggan <b>tidak ditarik uang tambahan sepeser pun (Rp 0)</b>, sementara pada struk kasir, invoice A4, dan riwayat pesanan tetap tercantum baris DPP dan PPN 0% secara transparan.</li>
                        <li><b>PPh Final 0,5% Badan UMKM (PP 55/2022):</b> Wajib Pajak Badan dengan omset &lt; Rp 4,8 Miliar berhak memanfaatkan tarif PPh Final 0,5% dari omset bulanan yang dapat dipantau di menu <b>Pajak &amp; Keuangan</b>.</li>
                    </ul>
                </div>
            </div>

            <!-- KARTU 3: PROGRAM POIN BELANJA & LOYALITAS MEMBER -->
            <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-sm space-y-4">
                <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl flex items-center justify-center text-sm shadow-sm shrink-0" style="background: rgba(var(--color-primary-rgb),0.12); color: var(--color-primary)">
                        <i class="fa-solid fa-coins"></i>
                    </div>
                    <div>
                        <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Program Poin Belanja &amp; Loyalitas Member</h4>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400">Berikan poin belanja otomatis pada produk yang tidak memiliki poin langsung dengan kelipatan nominal belanja</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">Status Program Poin</label>
                        <select id="set-spend-points-enabled" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                            <option value="true" ${l.store.spendPointsEnabled===!0||l.store.spendPointsEnabled==="true"?"selected":""}>Aktif (Poin Dihitung)</option>
                            <option value="false" ${l.store.spendPointsEnabled!==!0&&l.store.spendPointsEnabled!=="true"?"selected":""}>Nonaktif</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">Minimal Belanja (Kelipatan Rp)</label>
                        <input autocomplete='off' type="number" id="set-spend-points-threshold" value="${u(l.store.spendPointsThreshold||1e5)}" min="1000" step="1000" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="100000">
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">Perolehan Poin per Kelipatan</label>
                        <input autocomplete='off' type="number" id="set-spend-points-per-threshold" value="${u(l.store.spendPointsPerThreshold||1)}" min="1" step="1" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="1">
                    </div>
                </div>

                <div class="p-3 rounded-xl text-[11px] flex items-start gap-2.5 border" style="background: rgba(var(--color-primary-rgb),0.06); border-color: rgba(var(--color-primary-rgb),0.18); color: var(--color-primary-dark, #a87f1b);">
                    <i class="fa-solid fa-circle-info mt-0.5 shrink-0" style="color: var(--color-primary)"></i>
                    <span><b>Sistem Hibrida Cerdas:</b> Produk yang sudah memiliki poin reward langsung akan tetap memberikan poin per item. Untuk produk tanpa poin, nilai total belanjanya akan diakumulasikan dan dihitung poinnya sesuai kelipatan minimal belanja di atas (contoh: Belanja Rp 100.000 = 1 poin, Rp 200.000 = 2 poin).</span>
                </div>
            </div>
        `);let o=`
    <div class="w-full max-w-5xl mx-auto pb-10 text-sm fade-in">
        <div class="mb-5 flex items-center justify-between">
            <button onclick="rAdmSet()" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 font-bold text-xs shadow-xs transition-all active:scale-95 cursor-pointer">
                <i class="fa-solid fa-arrow-left"></i> Kembali ke Menu Pengaturan
            </button>
            <button onclick="saveAdminSettings('${e}')" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl text-white font-bold text-xs shadow-md transition-all active:scale-95 hover:opacity-95 cursor-pointer" style="background: var(--color-primary)">
                <i class="fa-solid fa-floppy-disk"></i> Simpan
            </button>
        </div>

        <div class="bg-white/95 dark:bg-slate-900/90 rounded-[1.75rem] border border-slate-200/80 dark:border-slate-800 shadow-sm overflow-hidden mb-6 relative">
            <div class="absolute top-0 left-0 w-full h-1.5" style="background: var(--color-primary);"></div>
            <div class="p-6 sm:p-8 flex-1 mt-2">
                <div class="mb-6 flex items-center gap-3.5 pb-4 border-b border-slate-100 dark:border-slate-800">
                    <div class="w-13 h-13 rounded-2xl flex items-center justify-center shrink-0 text-xl shadow-sm" style="background: rgba(var(--color-primary-rgb),0.12); color: var(--color-primary)"><i class="fa-solid ${r}"></i></div> 
                    <div>
                        <h3 class="font-extrabold text-slate-800 dark:text-white text-base sm:text-lg tracking-wide leading-tight">${t}</h3>
                        <p class="text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5">${a||"Konfigurasi pengaturan toko"}</p>
                    </div>
                </div>
                <div class="space-y-5">
                    ${s}
                </div>
            </div>
        </div>

        <button onclick="saveAdminSettings('${e}')" class="btn-primary py-4 text-base shadow-glow w-full !rounded-2xl flex items-center justify-center gap-2 font-bold tracking-wide"><i class="fa-solid fa-floppy-disk"></i> Simpan Perubahan Pengaturan</button>
    </div>
    `;if(_("admin-content",o),e==="profile"){const i=l.store.uiTheme||"",n=l.store.themeColor||"#10b981";(i==="custom"||!Pt?.[i])&&setTimeout(()=>{const d=document.getElementById("custom-color-chip");if(d){d.style.background=n;const c=d.querySelector("i");c&&(c.style.color="#fff")}},50)}e==="payment"&&setTimeout(()=>{typeof window.updateAdminPaylaterSim=="function"&&window.updateAdminPaylaterSim()},50)};window.currentPaymentSubtab=window.currentPaymentSubtab||"paylater";const Bs=e=>{window.currentPaymentSubtab=e;const t=document.getElementById("payment-subtab-paylater"),a=document.getElementById("payment-subtab-qris"),r=document.getElementById("subtab-btn-paylater"),s=document.getElementById("subtab-btn-qris");t&&t.classList.toggle("hidden",e!=="paylater"),a&&a.classList.toggle("hidden",e!=="qris"),r&&(r.className=`flex-1 py-2.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${e==="paylater"?"bg-white dark:bg-slate-900 text-slate-800 dark:text-white shadow-xs border border-slate-200/60 dark:border-slate-700":"text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"}`),s&&(s.className=`flex-1 py-2.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${e==="qris"?"bg-white dark:bg-slate-900 text-slate-800 dark:text-white shadow-xs border border-slate-200/60 dark:border-slate-700":"text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"}`),e==="paylater"&&setTimeout(()=>{typeof window.updateAdminPaylaterSim=="function"&&window.updateAdminPaylaterSim()},20)};window.switchPaymentSubtab=Bs;const Ls=()=>{const e=document.getElementById("paylater-admin-sim-container");if(!e)return;const t=document.getElementById("set-paylater-sim-amount"),a=Math.max(1e3,parseFloat(t?.value)||3e5),r={enabled:(document.getElementById("set-paylater-enabled")?.value||"true")==="true",minOrder:Math.max(0,parseFloat(document.getElementById("set-paylater-min-order")?.value)||2e4),maxOrder:1e7,noticeText:document.getElementById("set-paylater-notice-text")?.value||"",tenors:{"30d":{enabled:(document.getElementById("set-paylater-30d-enabled")?.value||"true")==="true",label:"30 Hari (1x Bayar)",shortLabel:"30 Hari",months:1,days:30,adminFeeType:document.getElementById("set-paylater-30d-admin-type")?.value||"flat",adminFeeValue:Math.max(0,parseFloat(document.getElementById("set-paylater-30d-admin-val")?.value)||0),serviceFeeType:document.getElementById("set-paylater-30d-service-type")?.value||"flat",serviceFeeValue:Math.max(0,parseFloat(document.getElementById("set-paylater-30d-service-val")?.value)||0)},"2m":{enabled:(document.getElementById("set-paylater-2m-enabled")?.value||"true")==="true",label:"2 Bulan (Cicilan 2x)",shortLabel:"2 Bulan",months:2,days:60,adminFeeType:document.getElementById("set-paylater-2m-admin-type")?.value||"flat",adminFeeValue:Math.max(0,parseFloat(document.getElementById("set-paylater-2m-admin-val")?.value)||0),serviceFeeType:document.getElementById("set-paylater-2m-service-type")?.value||"percent",serviceFeeValue:Math.max(0,parseFloat(document.getElementById("set-paylater-2m-service-val")?.value)||0)},"3m":{enabled:(document.getElementById("set-paylater-3m-enabled")?.value||"true")==="true",label:"3 Bulan (Cicilan 3x)",shortLabel:"3 Bulan",months:3,days:90,adminFeeType:document.getElementById("set-paylater-3m-admin-type")?.value||"flat",adminFeeValue:Math.max(0,parseFloat(document.getElementById("set-paylater-3m-admin-val")?.value)||0),serviceFeeType:document.getElementById("set-paylater-3m-service-type")?.value||"percent",serviceFeeValue:Math.max(0,parseFloat(document.getElementById("set-paylater-3m-service-val")?.value)||0)}}},o=po(a,r).results,i=["30d","2m","3m"];e.innerHTML=i.map(n=>{const p=o[n];if(!p)return"";const d=!p.enabled;return`
            <div class="p-3.5 rounded-2xl border ${d?"border-slate-200 dark:border-slate-700 bg-slate-100/60 dark:bg-slate-800/40 opacity-60":"border-[var(--color-primary)]/40 bg-white dark:bg-slate-900 shadow-2xs"} space-y-2">
                <div class="flex items-center justify-between pb-1.5 border-b border-slate-100 dark:border-slate-800">
                    <span class="text-[11px] font-black uppercase tracking-wider text-slate-800 dark:text-white">${u(p.label)}</span>
                    <span class="text-[8.5px] font-bold px-1.5 py-0.5 rounded ${d?"bg-slate-200 text-slate-500":""}" ${d?"":'style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);"'}>${d?"Nonaktif":"Aktif"}</span>
                </div>
                <div class="space-y-1 text-[11px]">
                    <div class="flex justify-between text-slate-500">
                        <span>Pokok / bln:</span>
                        <span class="font-bold text-slate-700 dark:text-slate-300">${g(p.pokokPerMonth)}</span>
                    </div>
                    <div class="flex justify-between text-slate-500">
                        <span>Biaya Admin:</span>
                        <span class="font-bold ${p.adminFeePerMonth===0?"text-emerald-500":"text-slate-700 dark:text-slate-300"}">${p.adminFeePerMonth===0?"Rp 0":g(p.adminFeePerMonth)}</span>
                    </div>
                    <div class="flex justify-between text-slate-500">
                        <span>Penanganan:</span>
                        <span class="font-bold ${p.serviceFeePerMonth===0?"text-emerald-500":"text-slate-700 dark:text-slate-300"}">${p.serviceFeePerMonth===0?"Rp 0":g(p.serviceFeePerMonth)}</span>
                    </div>
                </div>
                <div class="pt-2 border-t border-dashed border-slate-200 dark:border-slate-700 flex justify-between items-baseline">
                    <span class="text-[10px] font-bold uppercase text-slate-500">Cicilan / bln:</span>
                    <span class="text-sm font-black font-mono" style="color: var(--color-primary);">${g(p.totalPerMonth)}</span>
                </div>
                <div class="text-[9.5px] text-slate-400 text-right">
                    Total: <b>${g(p.grandTotal)}</b>
                </div>
            </div>
        `}).join("")};window.updateAdminPaylaterSim=Ls;const Rs=async e=>{if(!Bt){Ce(!0),R("Menyimpan...");try{if(e==="profile")l.store.name=T("set-name"),l.store.slogan=T("set-slogan"),l.store.logo=we(T("set-logo")),l.store.description=T("set-description"),l.store.email=T("set-email"),l.store.showRewardCatalog=T("set-show-reward-catalog")==="true",l.store.operationalHours=T("set-hours"),l.store.footerCredit=T("set-credit"),l.store.showHeroSlide=T("set-show-hero-slide")==="true",l.store.heroMascotImg=we(T("set-hero-mascot-img")),l.store.heroBadgeText=T("set-hero-badge-text")||"Siap Melayani",l.store.heroWelcomeTag=T("set-hero-welcome-tag")||"SELAMAT DATANG",l.store.heroTitle=T("set-hero-title"),l.store.heroSubtitle=T("set-hero-subtitle"),l.store.themeColor=T("set-theme-color"),l.store.uiTheme=T("set-ui-theme"),l.store.bgStyle=T("set-bg-style")||"minimalist",l.store.bgCustomUrl=we(T("set-bg-custom-url")),localStorage.setItem("freshmart_theme_color",l.store.themeColor),localStorage.setItem("freshmart_ui_theme",l.store.uiTheme),localStorage.setItem("freshmart_bg_style",l.store.bgStyle),localStorage.setItem("freshmart_bg_custom_url",l.store.bgCustomUrl||""),os(l.store.uiTheme,l.store.themeColor),ls(l.store.bgStyle,l.store.bgCustomUrl);else if(e==="catalog")l.store.categoryStyle=T("set-category-style"),l.store.brandStyle=T("set-brand-style"),l.store.showCategories=T("set-show-categories")==="true",l.store.showBrands=T("set-show-brands")==="true",l.store.showScrollTopButton=T("set-show-scroll-top")==="true",l.store.showScrollTopButton===!1&&typeof window.hideFloatingScrollTop=="function"&&window.hideFloatingScrollTop();else if(e==="shipping"){l.store.wa=T("set-wa").replace(/\D/g,""),l.store.address=T("set-address"),l.store.costPerKm=T("set-cost"),l.store.isDeliveryEnabled=T("set-delivery-enabled")==="true",l.store.isPickupEnabled=T("set-pickup-enabled")==="true",l.store.freeShippingMinSpendEnabled=T("set-free-shipping-enabled")==="true",l.store.freeShippingMinSpendAmount=Math.max(0,parseFloat(T("set-free-shipping-amount"))||0);let a=(T("set-lat")||"").trim(),r=(T("set-lng")||"").trim();const s=(T("set-maps-smart-input")||"").trim();if(s&&typeof window.parseGeoCoordinates=="function"){const o=window.parseGeoCoordinates(s);o&&(a=o.lat,r=o.lng)}(!a||!r)&&(a="-7.82308507053985",r="112.0988374794464"),l.store.lat=a,l.store.lng=r}else if(e==="payment")l.payment||(l.payment={}),l.payment.qrisUrl=we(T("set-qris-url")),l.store.paylater||(l.store.paylater={}),l.store.paylater={enabled:T("set-paylater-enabled")==="true",minOrder:Math.max(0,parseFloat(T("set-paylater-min-order"))||2e4),maxOrder:1e7,noticeText:T("set-paylater-notice-text")||"Cicilan transparan tanpa biaya tersembunyi. Tagihan jatuh tempo setiap bulan.",tenors:{"30d":{enabled:T("set-paylater-30d-enabled")==="true",label:"30 Hari (1x Bayar)",shortLabel:"30 Hari",months:1,days:30,adminFeeType:T("set-paylater-30d-admin-type")||"flat",adminFeeValue:Math.max(0,parseFloat(T("set-paylater-30d-admin-val"))||0),serviceFeeType:T("set-paylater-30d-service-type")||"flat",serviceFeeValue:Math.max(0,parseFloat(T("set-paylater-30d-service-val"))||0)},"2m":{enabled:T("set-paylater-2m-enabled")==="true",label:"2 Bulan (Cicilan 2x)",shortLabel:"2 Bulan",months:2,days:60,adminFeeType:T("set-paylater-2m-admin-type")||"flat",adminFeeValue:Math.max(0,parseFloat(T("set-paylater-2m-admin-val"))||0),serviceFeeType:T("set-paylater-2m-service-type")||"percent",serviceFeeValue:Math.max(0,parseFloat(T("set-paylater-2m-service-val"))||0)},"3m":{enabled:T("set-paylater-3m-enabled")==="true",label:"3 Bulan (Cicilan 3x)",shortLabel:"3 Bulan",months:3,days:90,adminFeeType:T("set-paylater-3m-admin-type")||"flat",adminFeeValue:Math.max(0,parseFloat(T("set-paylater-3m-admin-val"))||0),serviceFeeType:T("set-paylater-3m-service-type")||"percent",serviceFeeValue:Math.max(0,parseFloat(T("set-paylater-3m-service-val"))||0)}}};else if(e==="config")l.config||(l.config={}),l.config.gasUrl=T("set-gas-url"),x("Pengaturan GAS URL tersimpan.");else if(e==="operasional"){l.store.useStock=T("set-use-stock")==="true",l.store.ppnEnabled=T("set-ppn-enabled")==="true",l.store.ppnType=T("set-ppn-type")||"exclusive";const a=T("set-ppn-rate"),r=parseFloat(a);l.store.ppnRate=!isNaN(r)&&r>=0?r:11,l.store.ppnShowZero=T("set-ppn-show-zero")==="true",l.store.ppnTaxLabel=(T("set-ppn-tax-label")||"").trim();const s=(T("set-tax-npwp")||"").trim();l.store.taxNpwp=s,l.taxSettings||(l.taxSettings={}),s&&(l.taxSettings.npwp=s),l.store.spendPointsEnabled=T("set-spend-points-enabled")==="true",l.store.spendPointsThreshold=Math.max(1,parseFloat(T("set-spend-points-threshold"))||1e5),l.store.spendPointsPerThreshold=Math.max(1,parseFloat(T("set-spend-points-per-threshold"))||1),_t()}const t={profile:"store",catalog:"store",shipping:"store",operasional:["store","taxSettings"],payment:["payment","store"],config:"config"};if(typeof window.saveApp=="function"){const a=Array.isArray(t[e])?t[e]:[t[e]||"store"];await window.saveApp(a)}e==="profile"||e==="config"?(x(e==="config"?"Sistem Diperbarui! Memuat Ulang...":"Warna Berubah! Memuat Ulang..."),setTimeout(()=>location.reload(),1500)):(x("Tersimpan!"),Sa(),typeof rDyn=="function"?rDyn():typeof window.rDyn=="function"&&window.rDyn(),typeof rCat=="function"?rCat():typeof window.rCat=="function"&&window.rCat())}catch{x("Gagal menyimpan pengaturan")}finally{Ce(!1),C()}}},Kt=e=>{const t=typeof window.parseGeoCoordinates=="function"?window.parseGeoCoordinates:null,a=t?t(e):null,r=document.getElementById("maps-smart-feedback"),s=document.getElementById("set-lat"),o=document.getElementById("set-lng");a?(s&&(s.value=a.lat),o&&(o.value=a.lng),r&&(r.className="text-[10px] mt-1.5 font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5",r.innerHTML=`<i class="fa-solid fa-circle-check text-xs"></i> <span>Akurat! Koordinat terdeteksi: <b>${a.lat}, ${a.lng}</b></span>`)):e&&e.trim().length>3?r&&(r.className="text-[10px] mt-1.5 font-medium text-amber-600 dark:text-amber-400 flex items-center gap-1.5",r.innerHTML='<i class="fa-solid fa-triangle-exclamation text-xs"></i> <span>Pola belum terbaca. Coba tempel format: <code>-7.823085, 112.098837</code> atau link Google Maps</span>'):r&&(r.className="text-[10px] mt-1.5 font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1.5",r.innerHTML='<i class="fa-solid fa-circle-info text-blue-500"></i> <span>Tempel tautan Maps atau angka koordinat dari Google Maps</span>')},Ns=()=>{const e=document.getElementById("set-lat"),t=document.getElementById("set-lng"),a=document.getElementById("set-maps-smart-input");e&&t&&a&&e.value&&t.value&&(a.value=`${e.value.trim()}, ${t.value.trim()}`)},Ds=async()=>{const e=document.getElementById("set-maps-smart-input");if(e){try{if(navigator.clipboard&&navigator.clipboard.readText){const t=await navigator.clipboard.readText();if(t){e.value=t,Kt(t),x("Teks berhasil ditempel dari clipboard!");return}}}catch{}e.focus(),x("Silakan tekan Ctrl+V atau tahan untuk menempel")}},_s=()=>{const e=document.getElementById("set-lat"),t=document.getElementById("set-lng");let a=e?e.value.trim():"",r=t?t.value.trim():"";if(!a||!r){const s=document.getElementById("set-maps-smart-input");if(s&&s.value&&typeof window.parseGeoCoordinates=="function"){const o=window.parseGeoCoordinates(s.value);o&&(a=o.lat,r=o.lng)}}a&&r?window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${a},${r}`)}`,"_blank"):x("Masukkan koordinat toko terlebih dahulu")},Es=()=>{if(!navigator.geolocation){x("Browser tidak mendukung sensor GPS");return}x("Sedang mendeteksi lokasi GPS..."),navigator.geolocation.getCurrentPosition(e=>{const t=e.coords.latitude.toString(),a=e.coords.longitude.toString(),r=document.getElementById("set-maps-smart-input");r&&(r.value=`${t}, ${a}`),Kt(`${t}, ${a}`),x("Lokasi GPS berhasil didapatkan!")},()=>{x("Gagal mengambil GPS perangkat. Pastikan izin lokasi aktif.")},{enableHighAccuracy:!0,timeout:15e3})},js=()=>{const e=JSON.stringify(l,null,2),t=`backup_tokoputri_${new Date().toISOString().slice(0,10)}.json`;if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function"){const a=btoa(unescape(encodeURIComponent(e)));window.AndroidNativeApp.saveOrShareFile(a,t,"application/json")}else{const a="data:text/json;charset=utf-8,"+encodeURIComponent(e),r=document.createElement("a");r.href=a,r.download=t,document.body.appendChild(r),r.click(),r.remove()}x("Backup berhasil disimpan!")},Os=e=>{const t=e.target.files[0];if(!t)return;const a=new FileReader;a.onload=async r=>{try{const s=JSON.parse(r.target.result);Object.assign(l,s),typeof window.saveApp=="function"&&await window.saveApp(),x("Data dipulihkan!"),setTimeout(()=>location.reload(),1e3)}catch{x("Gagal memulihkan data!")}},a.readAsText(t)},Fs=()=>{let e=document.getElementById("admin-hero-banner-modal");e||(e=document.createElement("div"),e.id="admin-hero-banner-modal",document.body.appendChild(e));const t=l.store.showHeroSlide!==!1&&l.store.showHeroSlide!=="false",a=l.store.heroMascotImg||"/putri_mascot_anim.gif";e.className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-900/80 p-4 transition-opacity duration-300",typeof window.pushModalHistory=="function"&&window.pushModalHistory("heroBanner"),e.innerHTML=`
        <div class="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div class="p-5 border-b border-slate-100 dark:border-slate-800/80 flex items-center justify-between shrink-0">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-lg shadow-sm" style="background: rgba(var(--color-primary-rgb),0.12); color: var(--color-primary)">
                        <i class="fa-solid fa-wand-magic-sparkles"></i>
                    </div>
                    <div>
                        <h3 class="text-sm sm:text-base font-black text-slate-800 dark:text-white leading-tight">Kelola Banner Sambutan &amp; Maskot</h3>
                        <p class="text-[10px] sm:text-[11px] font-semibold text-slate-400 dark:text-slate-500 mt-0.5">Kustomisasi foto/karakter dan teks Slide #0 Beranda</p>
                    </div>
                </div>
                <button type="button" onclick="closeHeroBannerModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-rose-500 flex items-center justify-center transition-all cursor-pointer"><i class="fa-solid fa-xmark"></i></button>
            </div>
            
            <div class="p-5 overflow-y-auto custom-scrollbar space-y-4 text-xs">
                <!-- Preview Live Box -->
                <div class="p-4 sm:p-5 rounded-2xl text-white shadow-xl relative overflow-hidden flex items-center justify-between border border-white/20"
                     style="background: var(--color-primary);">
                    <div class="absolute -right-8 -top-8 w-28 h-28 rounded-full border-8 border-white/10 pointer-events-none"></div>
                    <div class="w-[62%] pr-2 z-10">
                        <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-950/75 text-amber-300 text-[8.5px] font-black uppercase tracking-wider mb-1.5 border border-amber-400/50 shadow-sm" id="m-preview-tag">
                            <i class="fa-solid fa-crown text-amber-400 text-[9px]"></i> ${u(l.store.heroWelcomeTag||"SELAMAT DATANG")}
                        </span>
                        <h4 class="font-black text-sm text-white line-clamp-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]" id="m-preview-title">${u(l.store.heroTitle||l.store.name||"TOKO PUTRI")}</h4>
                        <p class="text-[9.5px] text-white/95 line-clamp-2 mt-0.5 font-medium drop-shadow-xs" id="m-preview-sub">${u(l.store.heroSubtitle||l.store.slogan||"Pusat Solusi Bangunan & Cat Terlengkap")}</p>
                    </div>
                    <div class="w-[35%] flex flex-col items-center z-10">
                        <div class="w-18 h-18 rounded-2xl flex items-center justify-center relative">
                            <div class="absolute inset-1 rounded-full border border-white/20 bg-black/15 pointer-events-none"></div>
                            <img id="m-preview-img" src="${u(a)}" class="w-full h-full object-contain drop-shadow-md relative z-10 bg-transparent" onerror="this.src='/putri_mascot_3d.jpg';">
                        </div>
                        <div class="mt-1 bg-slate-950 text-[7.5px] font-bold text-white px-2 py-0.5 rounded-full flex items-center gap-1 border border-emerald-400 shadow-lg whitespace-nowrap">
                            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            <span id="m-preview-badge">${u(l.store.heroBadgeText||"Siap Melayani")}</span>
                        </div>
                    </div>
                </div>

                <!-- Tampilkan Toggle -->
                <div>
                    <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Status Tayang Slide Sambutan</label>
                    <select id="quick-set-show-hero-slide" class="admin-input !py-3 bg-white dark:bg-slate-800 shadow-sm w-full text-xs font-bold">
                        <option value="true" ${t?"selected":""}>Ya, Tampilkan Slide Hero Sambutan (Rekomendasi)</option>
                        <option value="false" ${t?"":"selected"}>Sembunyikan Slide Sambutan (Hanya Promo Produk)</option>
                    </select>
                </div>

                <!-- Ganti Foto / GIF Maskot / Avatar -->
                <div>
                    <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Foto / Animasi Maskot (JPG · PNG · GIF Bergerak <i class="fa-solid fa-wand-magic-sparkles text-amber-500 ml-1"></i>)</label>
                    <div class="flex gap-2">
                        <input autocomplete="off" id="quick-set-hero-mascot-img" value="${u(l.store.heroMascotImg||"")}"
                               class="admin-input !py-3 bg-white dark:bg-slate-800 shadow-sm flex-1 text-xs"
                               placeholder="URL gambar/GIF atau klik Upload (Kosong = Maskot Asli)"
                               oninput="document.getElementById('m-preview-img').src = this.value || '/putri_mascot_3d.jpg';">
                        <label class="bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 rounded-xl px-4 flex items-center justify-center cursor-pointer transition-all shrink-0 active:scale-95 shadow-sm font-bold text-xs">
                            <i class="fa-solid fa-cloud-arrow-up mr-1.5"></i> Upload
                            <input type="file" accept="image/gif,image/jpeg,image/png,image/webp" class="hidden" onchange="handleImageUpload(this, 'quick-set-hero-mascot-img'); setTimeout(() => { const v=document.getElementById('quick-set-hero-mascot-img')?.value; if(v) document.getElementById('m-preview-img').src=v; }, 800);">
                        </label>
                    </div>
                    <p class="text-[10px] text-slate-400 dark:text-slate-500 mt-1"><i class="fa-solid fa-circle-info mr-1"></i>GIF animasi maks 8MB · JPG/PNG maks 3MB · URL internet langsung juga bisa</p>
                    <div class="flex gap-2 mt-1.5 flex-wrap">
                        <button type="button" onclick="document.getElementById('quick-set-hero-mascot-img').value='/putri_mascot_anim.gif'; document.getElementById('m-preview-img').src='/putri_mascot_anim.gif'; showToast('Animasi GIF dipilih');" class="text-[10px] font-bold px-2.5 py-1 rounded-lg border transition-all active:scale-95 cursor-pointer inline-flex items-center" style="background: rgba(var(--color-primary-rgb),0.08); border-color: rgba(var(--color-primary-rgb),0.25); color: var(--color-primary);">
                            <i class="fa-solid fa-wand-magic-sparkles mr-1.5"></i> Animasi GIF Maskot
                        </button>
                        <button type="button" onclick="document.getElementById('quick-set-hero-mascot-img').value='/putri_mascot_3d.jpg'; document.getElementById('m-preview-img').src='/putri_mascot_3d.jpg'; showToast('Maskot 3D asli dipilih');" class="text-[10px] font-bold px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-all active:scale-95 cursor-pointer">
                            <i class="fa-solid fa-rotate-left mr-1"></i> Maskot 3D Statis
                        </button>
                        ${l.store.logo?`
                        <button type="button" onclick="const l='${u(l.store.logo)}'; document.getElementById('quick-set-hero-mascot-img').value=l; document.getElementById('m-preview-img').src=l; showToast('Logo toko dipilih');" class="text-[10px] font-bold px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-all active:scale-95 cursor-pointer">
                            <i class="fa-solid fa-store mr-1"></i> Pakai Logo Toko
                        </button>`:""}
                    </div>
                </div>

                <!-- Teks Status Badge & Tag -->
                <div class="grid grid-cols-2 gap-3">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1 uppercase tracking-wider">Teks Badge Status</label>
                        <input autocomplete="off" id="quick-set-hero-badge-text" value="${u(l.store.heroBadgeText||"Siap Melayani")}" class="admin-input !py-2.5 bg-white dark:bg-slate-800 shadow-sm w-full text-xs" placeholder="Siap Melayani" oninput="document.getElementById('m-preview-badge').innerText = this.value || 'Siap Melayani';">
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1 uppercase tracking-wider">Tag Ucapan</label>
                        <input autocomplete="off" id="quick-set-hero-welcome-tag" value="${u(l.store.heroWelcomeTag||"SELAMAT DATANG")}" class="admin-input !py-2.5 bg-white dark:bg-slate-800 shadow-sm w-full text-xs" placeholder="SELAMAT DATANG" oninput="document.getElementById('m-preview-tag').innerHTML = '<i class=\\'fa-solid fa-crown text-amber-400 text-[9px]\\'></i> ' + (this.value || 'SELAMAT DATANG');">
                    </div>
                </div>

                <!-- Judul & Subtitle -->
                <div>
                    <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1 uppercase tracking-wider">Judul Banner (Kosong = Nama Toko)</label>
                    <input autocomplete="off" id="quick-set-hero-title" value="${u(l.store.heroTitle||l.store.name||"")}" class="admin-input !py-2.5 bg-white dark:bg-slate-800 shadow-sm w-full text-xs" placeholder="${u(l.store.name||"TOKO PUTRI")}" oninput="document.getElementById('m-preview-title').innerText = this.value || '${u(l.store.name||"TOKO PUTRI")}';">
                </div>

                <div>
                    <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1 uppercase tracking-wider">Slogan / Deskripsi Banner</label>
                    <textarea id="quick-set-hero-subtitle" rows="2" class="admin-input !py-2.5 bg-white dark:bg-slate-800 shadow-sm w-full text-xs" placeholder="Deskripsi ringkas..." oninput="document.getElementById('m-preview-sub').innerText = this.value || '';">${u(l.store.heroSubtitle||l.store.slogan||"")}</textarea>
                </div>
            </div>

            <!-- Footer Modal -->
            <div class="p-4 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/70 dark:bg-slate-800/50 flex items-center justify-end gap-2 shrink-0">
                <button type="button" onclick="closeHeroBannerModal()" class="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95 transition-all cursor-pointer">
                    Batal
                </button>
                <button type="button" onclick="saveHeroBannerModal()" class="px-6 py-2.5 rounded-xl primary-bg text-white font-bold text-xs shadow-md hover:opacity-90 active:scale-95 transition-all cursor-pointer flex items-center gap-1.5">
                    <i class="fa-solid fa-floppy-disk"></i> Simpan Perubahan
                </button>
            </div>
        </div>
    `},Aa=(e=!1)=>{const t=()=>{const a=document.getElementById("admin-hero-banner-modal");a&&a.remove()};typeof window.requestCloseModal=="function"?window.requestCloseModal("heroBanner",e,t):t()},Ks=async()=>{R("Menyimpan banner...");try{l.store.showHeroSlide=T("quick-set-show-hero-slide")==="true",l.store.heroMascotImg=we(T("quick-set-hero-mascot-img")),l.store.heroBadgeText=T("quick-set-hero-badge-text")||"Siap Melayani",l.store.heroWelcomeTag=T("quick-set-hero-welcome-tag")||"SELAMAT DATANG",l.store.heroTitle=T("quick-set-hero-title"),l.store.heroSubtitle=T("quick-set-hero-subtitle"),typeof window.saveApp=="function"&&await window.saveApp(["store"]),Aa(),x("Banner sambutan & maskot berhasil diperbarui!"),window.cTab==="banners"&&typeof window.rAdmL=="function"&&window.rAdmL("banners"),typeof window.rDyn=="function"&&window.rDyn()}catch{x("Gagal menyimpan banner sambutan")}finally{C()}},Us=e=>{const t=k("set-ppn-enabled"),a=k("set-ppn-type"),r=k("set-ppn-rate"),s=k("set-ppn-show-zero"),o=k("set-ppn-tax-label");!t||!a||!r||(e==="badan_non_pkp"?(t.value="true",a.value="inclusive",r.value="0",s&&(s.value="true"),o&&(o.value="PPN Badan (0% Bebas PPN)"),x("Preset Badan Non-PKP diterapkan! (Tarif 0%, Bebas PPN Rp 0, Baris Pajak tercetak)")):e==="inklusif_11"?(t.value="true",a.value="inclusive",r.value="11",s&&(s.value="true"),o&&(o.value="PPN (11%)"),x("Preset Harga Inklusif 11% diterapkan! (Pajak di dalam harga produk)")):e==="pkp_11"?(t.value="true",a.value="exclusive",r.value="11",s&&(s.value="false"),o&&(o.value="PPN (11%)"),x("Preset PKP Standar 11% diterapkan! (Pajak ditambahkan di checkout)")):e==="pkp_12"&&(t.value="true",a.value="exclusive",r.value="12",s&&(s.value="false"),o&&(o.value="PPN (12%)"),x("Preset Penyesuaian PKP 12% diterapkan! (UU Harmonisasi Perpajakan)")),typeof window.triggerHaptic=="function"&&window.triggerHaptic("medium"))};window.syncAppMeta=syncAppMeta;window.rAdmSet=Sa;window.selectPresetTheme=Is;window.selectBgStyle=Ms;window.openSettingForm=Cs;window.saveAdminSettings=Rs;window.applyTaxPresetRI=Us;window.backupData=js;window.restoreData=Os;window.handleSmartMapsInput=Kt;window.handleManualCoordChange=Ns;window.pasteFromClipboardToMapsInput=Ds;window.previewStoreOnMaps=_s;window.detectAdminGPS=Es;window.openHeroBannerModal=Fs;window.closeHeroBannerModal=Aa;window.saveHeroBannerModal=Ks;window.openFactoryResetModal=As;window.getFactoryResetDangerCardHtml=Pa;let W=new Date().getFullYear(),U=0,be="menu",le=null;const xe=["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],Hs=e=>{if(typeof window.getEffHpp=="function")return window.getEffHpp(e);const t=l.products?.find(a=>a&&a.id!=null&&String(a.id)===String(e.id));if(!t)return 0;if(e.variantName&&t.variants){const a=t.variants.find(r=>r.name===e.variantName);if(a&&a.hpp!=null)return parseFloat(a.hpp)||0}return parseFloat(t.hpp)||0},es=new Map,Bo=2*60*1e3,Ut=async e=>{const t=es.get(e);if(t&&Date.now()-t.timestamp<Bo)return t.data;const a={};for(let r=1;r<=12;r++)a[r]={omset:0,ppn:0,hpp:0,disc:0,orderCount:0};try{const r=new Date(e,0,1),s=new Date(e+1,0,1);(await P.collection("freshmart_orders").where("timestamp",">=",Be.firestore.Timestamp.fromDate(r)).where("timestamp","<",Be.firestore.Timestamp.fromDate(s)).limit(5e3).get()).forEach(n=>{const p=n.data();if(p.status==="Dibatalkan"||!p.timestamp||!p.timestamp.toDate)return;const d=p.timestamp.toDate().getMonth()+1;if(!a[d])return;const c=p.payment?.dppAmount!==void 0&&p.payment?.dppAmount!==null?parseFloat(p.payment.dppAmount):parseFloat(p.payment?.subtotal)||0;a[d].omset+=c,a[d].ppn+=parseFloat(p.payment?.ppnAmount)||0,a[d].disc+=parseFloat(p.payment?.productDiscount)||0,a[d].orderCount++,(p.items||[]).forEach(m=>{const b=m.hpp!==void 0&&m.hpp!==null?parseFloat(m.hpp):Hs(m);a[d].hpp+=(parseFloat(b)||0)*(parseFloat(m.qty)||0)})})}catch(r){console.error("Gagal memuat data pajak:",r),x("Gagal memuat data periode ini!")}return es.set(e,{data:a,timestamp:Date.now()}),le=a,a},ze=()=>le?(U===0?Object.keys(le):[U]).reduce((t,a)=>{const r=le[a];return t.omset+=r.omset,t.ppn+=r.ppn,t.hpp+=r.hpp,t.disc+=r.disc,t.orderCount+=r.orderCount,t},{omset:0,ppn:0,hpp:0,disc:0,orderCount:0}):{omset:0,ppn:0,hpp:0,disc:0,orderCount:0},Ht=()=>{const e=l.taxSettings?.monthlyExpenses||{};return(U===0?Array.from({length:12},(a,r)=>r+1):[U]).reduce((a,r)=>a+(parseFloat(e[`${W}-${r}`])||0),0)},Gs=async()=>{_("admin-content",'<div class="text-center py-16"><i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i></div>'),le=await Ut(W),Gt()},Gt=()=>{const e=Array.from({length:6},(r,s)=>new Date().getFullYear()-4+s),t=[{k:"summary",l:"Ringkasan PPN",i:"fa-receipt"},{k:"income",l:"Laba Rugi",i:"fa-chart-pie"},{k:"balance",l:"Neraca",i:"fa-scale-balanced"},{k:"settings",l:"Pengaturan",i:"fa-gear"}];be==="menu"&&(be="summary");const a=`
    <div class="mb-5 flex flex-wrap items-center justify-between gap-3 bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
        <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style="background: rgba(var(--color-primary-rgb),0.1); color: var(--color-primary)">
                <i class="fa-solid fa-file-invoice-dollar text-base"></i>
            </div>
            <div>
                <h2 class="font-bold text-sm text-slate-800 dark:text-slate-100 uppercase tracking-widest leading-tight">Pajak &amp; Keuangan</h2>
                <p class="text-[9px] font-bold text-slate-500 mt-0.5">Rekap Omset, PPN, Laba Rugi, &amp; Neraca Toko</p>
            </div>
        </div>
        
        ${be==="settings"?"":`
        <div class="flex items-center gap-2">
            <select id="tax-year-select" onchange="changeTaxYear(this.value)" class="admin-input !py-2 !px-3 text-xs font-bold bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)] cursor-pointer">
                ${e.map(r=>`<option value="${r}" ${r===W?"selected":""}>${r}</option>`).join("")}
            </select>
            <select id="tax-month-select" onchange="changeTaxMonth(this.value)" class="admin-input !py-2 !px-3 text-xs font-bold bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)] cursor-pointer">
                <option value="0" ${U===0?"selected":""}>Setahun Penuh</option>
                ${xe.map((r,s)=>`<option value="${s+1}" ${U===s+1?"selected":""}>${r} ${W}</option>`).join("")}
            </select>
        </div>
        `}
    </div>

    <!-- Sub-Tab Navigation Bar -->
    <div class="flex items-center gap-2 mb-5 overflow-x-auto hide-scrollbar pb-1">
        ${t.map(r=>{const s=be===r.k;return`
            <button onclick="switchTaxTab('${r.k}')" class="px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all active:scale-95 flex items-center gap-2 shrink-0 ${s?"primary-bg text-white shadow-glow":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-[rgba(var(--color-primary-rgb),0.4)]"}">
                <i class="fa-solid ${r.i} text-xs"></i>
                <span>${r.l}</span>
            </button>`}).join("")}
    </div>
    `;_("admin-content",`
    <div class="max-w-5xl mx-auto pb-10 text-sm fade-in-scale">
        <div class="mb-5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/60 rounded-2xl p-4 flex items-start gap-3 text-xs font-semibold text-amber-800 dark:text-amber-300 shadow-xs">
            <i class="fa-solid fa-circle-info text-amber-500 text-base shrink-0 mt-0.5"></i>
            <span class="leading-relaxed">Halaman ini adalah <b>alat bantu rekap internal</b> Omset, PPN, Laba Rugi, dan Neraca dari data transaksi toko. Bukan pengganti konsultan pajak/akuntan — validasi kembali angkanya sebelum digunakan untuk pelaporan SPT resmi.</span>
        </div>

        ${a}

        <div id="tax-content"></div>
    </div>`),ft()},Vs=e=>{be=e,Gt()},Ws=async e=>{W=parseInt(e,10),_("tax-content",'<div class="text-center py-16"><i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i></div>'),le=await Ut(W),ft()},qs=e=>{U=parseInt(e,10),ft()},ft=()=>{be==="summary"?Ta():be==="income"?Vt():be==="balance"?Wt():be==="settings"&&$a()},Ta=()=>{const e=ze(),t=U===0?`Tahun ${W}`:`${xe[U-1]} ${W}`,a=e.omset-e.disc,r=Math.round(e.omset*.005),s=Array.from({length:12},(o,i)=>i+1).map(o=>{const i=le?le[o]:{omset:0,ppn:0,orderCount:0},n=U===o,p=Math.round((i.omset||0)*.005);return`<tr class="${n?"bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.14)] font-bold":"hover:bg-slate-50 dark:hover:bg-slate-700/30"} border-b border-slate-100 dark:border-slate-700/50 last:border-0 transition-colors">
            <td class="py-3 px-4 text-xs font-bold text-slate-700 dark:text-slate-200">${xe[o-1]}</td>
            <td class="py-3 px-4 text-xs font-bold text-slate-800 dark:text-white text-right">${g(i.omset)}</td>
            <td class="py-3 px-4 text-xs font-bold text-right" style="color:var(--color-primary)">${g(i.ppn)}</td>
            <td class="py-3 px-4 text-xs font-bold text-emerald-600 dark:text-emerald-400 text-right">${g(p)}</td>
            <td class="py-3 px-4 text-xs font-bold text-slate-500 dark:text-slate-400 text-right">${i.orderCount}</td>
        </tr>`}).join("");_("tax-content",`
        <div class="grid grid-cols-2 lg:grid-cols-5 gap-3.5 mb-6">
            <div class="card-modern p-4 sm:p-5 flex flex-col justify-between">
                <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Omset Bruto (${t})</p>
                <p class="text-sm sm:text-lg font-bold text-slate-800 dark:text-white truncate">${g(e.omset)}</p>
                <p class="text-[10px] font-bold text-slate-400 mt-1">${e.orderCount} pesanan</p>
            </div>
            <div class="card-modern p-4 sm:p-5 flex flex-col justify-between">
                <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5"><i class="fa-solid fa-minus mr-1"></i>Diskon Produk</p>
                <p class="text-sm sm:text-lg font-bold text-rose-500 truncate">${g(e.disc)}</p>
                <p class="text-[10px] font-bold text-slate-400 mt-1">Potongan diskon</p>
            </div>
            <div class="card-modern p-4 sm:p-5 flex flex-col justify-between">
                <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">DPP (Dasar Pengenaan Pajak)</p>
                <p class="text-sm sm:text-lg font-bold text-slate-800 dark:text-white truncate">${g(a)}</p>
                <p class="text-[10px] font-bold text-slate-400 mt-1">Omset bersih</p>
            </div>
            <div class="card-modern p-4 sm:p-5 flex flex-col justify-between border-[rgba(var(--color-primary-rgb),0.4)] relative overflow-hidden" style="background: rgba(var(--color-primary-rgb),0.04)">
                <p class="text-[9px] font-bold uppercase tracking-widest mb-1.5" style="color:var(--color-primary)"><i class="fa-solid fa-file-invoice-dollar mr-1"></i>PPN Keluaran</p>
                <p class="text-sm sm:text-lg font-bold truncate" style="color:var(--color-primary)">${g(e.ppn)}</p>
                <p class="text-[10px] font-bold mt-1 opacity-80" style="color:var(--color-primary)">${e.ppn>0?"Wajib setor kas negara":"Bebas PPN / Tarif 0%"}</p>
            </div>
            <div class="card-modern p-4 sm:p-5 flex flex-col justify-between border-emerald-300 dark:border-emerald-800/80 bg-emerald-50/40 dark:bg-emerald-950/20 col-span-2 lg:col-span-1">
                <p class="text-[9px] font-bold uppercase tracking-widest mb-1.5 text-emerald-700 dark:text-emerald-400"><i class="fa-solid fa-building-columns mr-1"></i>PPh Final 0,5%</p>
                <p class="text-sm sm:text-lg font-bold text-emerald-700 dark:text-emerald-400 truncate">${g(r)}</p>
                <p class="text-[10px] font-bold text-emerald-600 dark:text-emerald-500 mt-1">PP 55/2022 Badan/UMKM</p>
            </div>
        </div>
        <div class="card-modern overflow-hidden">
            <div class="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-700/70 flex items-center justify-between">
                <h4 class="font-bold text-slate-800 dark:text-slate-100 text-xs uppercase tracking-widest">Rincian Per Bulan — ${W}</h4>
                <button onclick="openTaxDocPreview('summary')" class="px-3.5 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 text-[10px] font-bold hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all flex items-center gap-1.5 active:scale-95">
                    <i class="fa-solid fa-print"></i> Preview &amp; Cetak
                </button>
            </div>
            <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="bg-slate-50 dark:bg-slate-900/60 border-b border-slate-200/80 dark:border-slate-700/70">
                            <th class="py-3 px-4 text-[9px] font-bold text-slate-400 uppercase tracking-widest">Bulan</th>
                            <th class="py-3 px-4 text-[9px] font-bold text-slate-400 uppercase tracking-widest text-right">Omset</th>
                            <th class="py-3 px-4 text-[9px] font-bold text-slate-400 uppercase tracking-widest text-right">PPN Keluaran</th>
                            <th class="py-3 px-4 text-[9px] font-bold text-slate-400 uppercase tracking-widest text-right">PPh Final 0,5%</th>
                            <th class="py-3 px-4 text-[9px] font-bold text-slate-400 uppercase tracking-widest text-right">Pesanan</th>
                        </tr>
                    </thead>
                    <tbody>${s}</tbody>
                </table>
            </div>
        </div>
    `)},Vt=()=>{const e=ze(),t=U===0?`Tahun ${W}`:`${xe[U-1]} ${W}`,a=e.omset-e.disc-e.hpp,r=U===0?null:`${W}-${U}`,s=Ht(),o=a-s,i=l.taxSettings?.taxScheme||"umkm_final";let n,p,d;i==="umkm_final"?(n=.5,p=e.omset,d="PPh Final Badan / UMKM (0,5% × Omset PP 55/2022)"):i==="badan_normal"?(n=22,p=Math.max(0,o),d="PPh Badan (22% × Laba Bersih UU HPP)"):(n=parseFloat(l.taxSettings?.customTaxRate)||0,p=Math.max(0,o),d=`PPh Custom (${n}% × Laba Bersih)`);const c=p*(n/100),m=o-c;let b="";if(U===0)b=Array.from({length:12},(f,h)=>h+1).map(f=>{const h=`${W}-${f}`,w=(l.taxSettings?.monthlyExpenses||{})[h]||0;return`<div class="flex items-center justify-between gap-2 py-2 border-b border-slate-100 dark:border-slate-700/50 last:border-0">
                <span class="text-xs font-bold text-slate-600 dark:text-slate-300">${xe[f-1]} ${W}</span>
                <input type="number" min="0" value="${w}" onchange="saveMonthlyExpense('${h}', this.value)" class="admin-input !py-2 !px-3 text-xs w-36 text-right font-bold bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)]">
            </div>`}).join("");else{const f=(l.taxSettings?.monthlyExpenses||{})[r]||0;b=`<div class="flex items-center justify-between gap-2 py-2">
            <span class="text-xs font-bold text-slate-600 dark:text-slate-300">${xe[U-1]} ${W}</span>
            <input type="number" min="0" value="${f}" onchange="saveMonthlyExpense('${r}', this.value)" class="admin-input !py-2 !px-3 text-xs w-36 text-right font-bold bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)]">
        </div>`}_("tax-content",`
        <div class="card-modern p-6 sm:p-8 space-y-4">
            <div class="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-700">
                <div>
                    <h4 class="font-bold text-slate-800 dark:text-slate-100 text-xs sm:text-sm uppercase tracking-widest">Laporan Laba Rugi — ${t}</h4>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">Estimasi pendapatan &amp; beban usaha</p>
                </div>
                <button onclick="openTaxDocPreview('income')" class="px-3.5 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 text-[10px] font-bold hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all flex items-center gap-1.5 active:scale-95">
                    <i class="fa-solid fa-print"></i> Preview &amp; Cetak
                </button>
            </div>
            <div class="space-y-3 text-xs sm:text-sm">
                <div class="flex justify-between py-1"><span class="font-bold text-slate-500 dark:text-slate-400">Omset Bruto</span><span class="font-bold text-slate-800 dark:text-slate-100">${g(e.omset)}</span></div>
                <div class="flex justify-between py-1"><span class="font-bold text-slate-500 dark:text-slate-400">(−) Diskon Produk</span><span class="font-bold text-rose-500">-${g(e.disc)}</span></div>
                <div class="flex justify-between py-1"><span class="font-bold text-slate-500 dark:text-slate-400">(−) HPP (Harga Pokok Penjualan)</span><span class="font-bold text-rose-500">-${g(e.hpp)}</span></div>
                <div class="flex justify-between py-2.5 border-t border-slate-200 dark:border-slate-700"><span class="font-bold text-slate-700 dark:text-slate-200">Laba Kotor</span><span class="font-bold text-emerald-500">${g(a)}</span></div>
                <div class="flex justify-between py-1"><span class="font-bold text-slate-500 dark:text-slate-400">(−) Biaya Operasional</span><span class="font-bold text-rose-500">-${g(s)}</span></div>
                <div class="flex justify-between py-2.5 border-t border-slate-200 dark:border-slate-700"><span class="font-bold text-slate-700 dark:text-slate-200">Laba Bersih Sebelum Pajak</span><span class="font-bold" style="color:var(--color-primary)">${g(o)}</span></div>
                <div class="flex justify-between py-1"><span class="font-bold text-slate-500 dark:text-slate-400">(−) Estimasi ${d}</span><span class="font-bold text-rose-500">-${g(c)}</span></div>
                <div class="flex justify-between py-3 border-t-2 border-slate-800 dark:border-slate-200 mt-2"><span class="font-bold text-slate-900 dark:text-white text-sm sm:text-base">Laba Bersih Setelah Pajak (Estimasi)</span><span class="font-extrabold text-sm sm:text-base" style="color:var(--color-primary)">${g(m)}</span></div>
            </div>

            <div class="mt-8 pt-5 border-t border-dashed border-slate-200 dark:border-slate-700">
                <h5 class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1 flex items-center gap-1.5"><i class="fa-solid fa-pen" style="color:var(--color-primary)"></i> Input Biaya Operasional (Manual)</h5>
                <p class="text-[10px] font-bold text-slate-400 mb-4">Contoh: sewa tempat, gaji karyawan, listrik, internet, dll. Sistem tidak melacak biaya ini otomatis.</p>
                <div class="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
                    ${b}
                </div>
            </div>
        </div>
    `)},Js=async(e,t)=>{const a=parseFloat(t)||0;l.taxSettings||(l.taxSettings={}),l.taxSettings.monthlyExpenses||(l.taxSettings.monthlyExpenses={}),l.taxSettings.monthlyExpenses[e]=a;try{typeof window.saveApp=="function"&&await window.saveApp(["taxSettings"]),Vt()}catch{x("Gagal menyimpan biaya operasional!")}},Wt=()=>{const e=Lt(),t=l.taxSettings?.balanceSheet||{kas:0,piutang:0,hutang:0},a=(parseFloat(t.kas)||0)+(parseFloat(t.piutang)||0)+e.assetHpp,r=parseFloat(t.hutang)||0,s=a-r;_("tax-content",`
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- ASET CARD -->
            <div class="card-modern p-6 space-y-3 relative overflow-hidden">
                <div class="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-700">
                    <h4 class="font-bold text-slate-800 dark:text-white text-xs uppercase tracking-widest flex items-center gap-2">
                        <div class="w-8 h-8 rounded-xl flex items-center justify-center shrink-0" style="background: rgba(var(--color-primary-rgb),0.1); color: var(--color-primary)">
                            <i class="fa-solid fa-arrow-down-wide-short text-xs"></i>
                        </div>
                        <span>ASET (Aktiva)</span>
                    </h4>
                </div>
                <div class="space-y-3">
                    <div class="flex items-center justify-between gap-2 py-1">
                        <span class="text-xs font-bold text-slate-600 dark:text-slate-300">Kas &amp; Bank (manual)</span>
                        <input type="number" min="0" value="${t.kas||0}" onchange="saveBalanceField('kas', this.value)" class="admin-input !py-2 !px-3 text-xs w-36 text-right font-bold bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)]">
                    </div>
                    <div class="flex items-center justify-between gap-2 py-1">
                        <span class="text-xs font-bold text-slate-600 dark:text-slate-300">Piutang Usaha (manual)</span>
                        <input type="number" min="0" value="${t.piutang||0}" onchange="saveBalanceField('piutang', this.value)" class="admin-input !py-2 !px-3 text-xs w-36 text-right font-bold bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)]">
                    </div>
                    <div class="flex items-center justify-between gap-2 py-2.5 rounded-xl px-3 border border-[rgba(var(--color-primary-rgb),0.3)]" style="background: rgba(var(--color-primary-rgb),0.06)">
                        <span class="text-xs font-bold" style="color:var(--color-primary)">Persediaan Barang (Otomatis)</span>
                        <span class="text-xs font-bold" style="color:var(--color-primary)">${g(e.assetHpp)}</span>
                    </div>
                    <div class="flex justify-between pt-3 border-t-2 border-slate-800 dark:border-slate-200 mt-2">
                        <span class="font-bold text-slate-900 dark:text-white text-xs sm:text-sm uppercase tracking-widest">Total Aset</span>
                        <span class="font-bold text-xs sm:text-sm" style="color:var(--color-primary)">${g(a)}</span>
                    </div>
                </div>
            </div>

            <!-- KEWAJIBAN & MODAL CARD -->
            <div class="card-modern p-6 space-y-3 relative overflow-hidden">
                <div class="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-700">
                    <h4 class="font-bold text-slate-800 dark:text-white text-xs uppercase tracking-widest flex items-center gap-2">
                        <div class="w-8 h-8 rounded-xl bg-rose-50 dark:bg-rose-900/30 text-rose-500 flex items-center justify-center shrink-0">
                            <i class="fa-solid fa-arrow-up-wide-short text-xs"></i>
                        </div>
                        <span>KEWAJIBAN &amp; MODAL (Pasiva)</span>
                    </h4>
                </div>
                <div class="space-y-3">
                    <div class="flex items-center justify-between gap-2 py-1">
                        <span class="text-xs font-bold text-slate-600 dark:text-slate-300">Hutang Usaha (manual)</span>
                        <input type="number" min="0" value="${t.hutang||0}" onchange="saveBalanceField('hutang', this.value)" class="admin-input !py-2 !px-3 text-xs w-36 text-right font-bold bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)]">
                    </div>
                    <div class="flex items-center justify-between gap-2 py-2.5 rounded-xl px-3 bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
                        <span class="text-xs font-bold text-slate-600 dark:text-slate-300">Modal &amp; Laba Ditahan</span>
                        <span class="text-xs font-bold text-slate-800 dark:text-slate-100">${g(s)}</span>
                    </div>
                    <p class="text-[10px] font-semibold text-slate-400 leading-relaxed px-1">Angka Modal &amp; Laba Ditahan dihitung otomatis (Total Aset − Hutang) agar neraca seimbang.</p>
                    <div class="flex justify-between pt-3 border-t-2 border-slate-800 dark:border-slate-200 mt-2">
                        <span class="font-bold text-slate-900 dark:text-white text-xs sm:text-sm uppercase tracking-widest">Total Kewajiban + Modal</span>
                        <span class="font-bold text-xs sm:text-sm" style="color:var(--color-primary)">${g(r+s)}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-6 text-center">
            <button onclick="openTaxDocPreview('balance')" class="px-4 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all inline-flex items-center gap-2 shadow-xs active:scale-95">
                <i class="fa-solid fa-print"></i> Preview &amp; Cetak Neraca
            </button>
        </div>
    `)},zs=async(e,t)=>{const a=parseFloat(t)||0;l.taxSettings||(l.taxSettings={}),l.taxSettings.balanceSheet||(l.taxSettings.balanceSheet={kas:0,piutang:0,hutang:0,modalDisetor:0}),l.taxSettings.balanceSheet[e]=a;try{typeof window.saveApp=="function"&&await window.saveApp(["taxSettings"]),Wt()}catch{x("Gagal menyimpan data neraca!")}},$a=()=>{const e=l.taxSettings||{};_("tax-content",`
        <div class="card-modern p-6 sm:p-8 max-w-2xl mx-auto space-y-5">
            <div>
                <label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Nama Badan Usaha / Toko</label>
                <input id="tax-company-name" type="text" value="${u(e.companyName||"")}" placeholder="Cth: Toko Putri" class="admin-input !py-3 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)]">
            </div>
            <div>
                <label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">NPWP (Nomor Pokok Wajib Pajak)</label>
                <input id="tax-npwp" type="text" value="${u(e.npwp||"")}" placeholder="XX.XXX.XXX.X-XXX.XXX" class="admin-input !py-3 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)]">
            </div>
            <div>
                <label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Skema Perhitungan PPh</label>
                <select id="tax-scheme" onchange="toggleCustomTaxRateInput(this.value)" class="admin-input !py-3 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl cursor-pointer font-bold focus:border-[var(--color-primary)]">
                    <option value="umkm_final" ${e.taxScheme==="umkm_final"?"selected":""}>PPh Final Badan / UMKM — 0,5% dari Omset (PP 55/2022 &amp; UU HPP)</option>
                    <option value="badan_normal" ${e.taxScheme==="badan_normal"?"selected":""}>PPh Badan Normal — 22% dari Laba Bersih (UU HPP)</option>
                    <option value="custom" ${e.taxScheme==="custom"?"selected":""}>Custom (isi tarif sendiri)</option>
                </select>
            </div>
            <div id="tax-custom-rate-wrap" class="${e.taxScheme==="custom"?"":"hidden"}">
                <label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Tarif Custom (% dari Laba Bersih)</label>
                <input id="tax-custom-rate" type="number" min="0" max="100" step="0.1" value="${e.customTaxRate||.5}" class="admin-input !py-3 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)]">
            </div>
            <button onclick="saveTaxSettingsPanel()" class="primary-bg py-3.5 text-xs sm:text-sm font-bold shadow-glow rounded-xl flex items-center justify-center gap-2 w-full uppercase tracking-widest text-white active:scale-95 transition-all">
                <i class="fa-solid fa-floppy-disk"></i> Simpan Pengaturan Pajak
            </button>
        </div>
    `)},Qs=e=>{Zr("tax-custom-rate-wrap","hidden",e!=="custom")},Ys=async()=>{if(!Bt){Ce(!0),R("Menyimpan...");try{l.taxSettings||(l.taxSettings={}),l.taxSettings.companyName=T("tax-company-name");const e=T("tax-npwp");l.taxSettings.npwp=e,l.store||(l.store={}),l.store.taxNpwp=e,l.taxSettings.taxScheme=T("tax-scheme"),l.taxSettings.customTaxRate=parseFloat(T("tax-custom-rate"))||.5,typeof window.saveApp=="function"&&await window.saveApp(["taxSettings","store"]),x("Pengaturan pajak & NPWP tersimpan!")}catch{x("Gagal menyimpan pengaturan pajak!")}finally{Ce(!1),C()}}},Xs=e=>{const t=U===0?`Tahun ${W} (Setahun Penuh)`:`${xe[U-1]} ${W}`,a=l.taxSettings||{},r=new Date().toLocaleDateString("id-ID",{day:"2-digit",month:"long",year:"numeric"}),s=a.companyName||l.store?.name||"PUTRI UTAMA TEKNIK",o=l.store?.address||"Jln. Pakem RT005 RW003 Ds. Banyuanyar, Kec. Gurah, Kab. Kediri",i=l.store?.wa||l.store?.phone||"-",n=a.npwp||"";let p="";l.store?.logo&&(l.store.logo.includes("http")||l.store.logo.includes("data:"))?p=`<img loading="eager" src="${u(l.store.logo)}" class="w-14 h-14 object-contain rounded-xl border border-slate-200">`:p='<div class="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-md shrink-0" style="background-color: var(--color-primary, #b8860b);"><i class="fa-solid fa-store"></i></div>';const d={summary:"LAPORAN PPN & OMSET BULANAN",income:"LAPORAN LABA RUGI KOMPREHENSIF",balance:"NERACA KEUANGAN (BALANCE SHEET)"},c={summary:"PPN",income:"PL",balance:"BS"},m=d[e]||"LAPORAN KEUANGAN",b=`DOC-${c[e]||"FIN"}-${W}${U?String(U).padStart(2,"0"):"FY"}-001`,f=`
    <div class="border-b-2 border-slate-900 pb-3.5 mb-3.5 select-none">
        <div class="flex justify-between items-start gap-4">
            <div class="flex items-center gap-3.5">
                ${p}
                <div>
                    <h1 class="font-black text-lg sm:text-xl tracking-tight text-slate-900 uppercase leading-none">${u(s)}</h1>
                    <p class="text-[11px] font-semibold text-slate-500 mt-1 max-w-sm leading-tight">${u(o)}</p>
                    <div class="flex items-center gap-2 mt-1 text-[10px] text-slate-600">
                        ${n?`<span class="font-mono font-bold text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">NPWP: ${u(n)}</span>`:""}
                        <span class="font-bold text-slate-500"><i class="fa-brands fa-whatsapp text-emerald-600 mr-1"></i>${u(i)}</span>
                    </div>
                </div>
            </div>
            <div class="text-right shrink-0">
                <span class="inline-block px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest bg-slate-900 text-white mb-1">Executive Statement</span>
                <h2 class="font-black text-sm sm:text-base tracking-wider text-slate-900 uppercase leading-tight">${m}</h2>
                <p class="text-xs font-bold text-slate-700 mt-0.5 font-mono">No: <span class="text-blue-700 font-black">${b}</span></p>
                <p class="text-[10.5px] font-semibold text-slate-500 mt-0.5">Periode: <b class="text-slate-800">${t}</b> &bull; Dicetak: ${r}</p>
            </div>
        </div>
    </div>
    <div class="bg-amber-50/90 border border-amber-200/90 rounded-xl p-2.5 mb-3.5 text-[10.5px] font-medium text-amber-900 flex items-start gap-2 leading-relaxed select-none">
        <i class="fa-solid fa-circle-info text-amber-600 mt-0.5 text-xs shrink-0"></i>
        <span><b>Rekapitulasi Pembukuan Finansial Internal:</b> Dokumen ini disusun secara otomatis berdasarkan pencatatan transaksi POS Kasir, penjualan etalase, sistem HPP FIFO kulakan, dan buku kas operasional Toko Putri. Mohon validasi ke akuntan sebelum pelaporan SPT resmi.</span>
    </div>
    `,h=`
    <div class="mt-auto pt-3 flex justify-between items-end text-xs text-slate-700 select-none">
        <div class="text-center w-52">
            <p class="text-[10px] font-bold text-slate-500">Disusun &amp; Diperiksa Oleh,</p>
            <div class="h-14 flex items-center justify-center">
                <span class="text-[9.5px] text-slate-300 italic">[Tanda Tangan Staf]</span>
            </div>
            <p class="font-black text-slate-900 border-t border-slate-400 pt-1 text-[11px] uppercase">${u(l.store?.staffName||"Bagian Keuangan")}</p>
            <p class="text-[9.5px] text-slate-500 font-semibold">Administrasi &amp; Kasir</p>
        </div>
        <div class="text-center w-52">
            <p class="text-[10px] font-bold text-slate-500">Disetujui &amp; Disahkan Oleh,</p>
            <div class="h-14 flex items-center justify-center">
                <span class="text-[9.5px] text-slate-300 italic">[Tanda Tangan &amp; Stempel]</span>
            </div>
            <p class="font-black text-slate-900 border-t border-slate-400 pt-1 text-[11px] uppercase">${u(s)}</p>
            <p class="text-[9.5px] text-slate-500 font-semibold">Pemilik Usaha / Owner</p>
        </div>
    </div>
    `,w=`
    <div class="a4-page-footer mt-auto pt-2 border-t border-slate-200 flex justify-between items-center text-[10px] text-slate-500 font-mono select-none">
        <div class="flex items-center gap-1.5">
            <span class="font-bold text-slate-700 uppercase">${u(s)}</span>
            <span class="text-slate-300">&bull;</span>
            <span class="text-slate-500">${u(m)}</span>
            <span class="text-slate-300">&bull;</span>
            <span class="text-slate-400 font-mono">${b}</span>
        </div>
        <div class="flex items-center gap-1 font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
            <span>Halaman 1 dari 1</span>
        </div>
    </div>
    `;let v="";if(e==="summary"){const I=ze(),A=Math.max(0,I.omset-I.disc),y=Array.from({length:12},(M,L)=>L+1).map(M=>{const L=le?le[M]:{omset:0,ppn:0,orderCount:0},F=Math.max(0,(L.omset||0)-(L.disc||0));return`
            <tr class="border-b border-slate-200 hover:bg-slate-50/50">
                <td class="py-2 px-3 font-bold text-slate-800">${xe[M-1]} ${W}</td>
                <td class="py-2 px-3 text-right font-mono tabular-nums font-semibold text-slate-700">${g(L.omset||0)}</td>
                <td class="py-2 px-3 text-right font-mono tabular-nums font-semibold text-slate-700">${g(F)}</td>
                <td class="py-2 px-3 text-right font-mono tabular-nums font-bold text-amber-700">${g(L.ppn||0)}</td>
                <td class="py-2 px-3 text-right font-mono tabular-nums font-semibold text-slate-600">${L.orderCount||0} Trx</td>
            </tr>`}).join("");v=`
            <div class="grid grid-cols-4 gap-3 mb-3.5 select-none">
                <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span class="text-[9px] font-black uppercase tracking-wider text-slate-500 block">Omset Bruto</span>
                    <span class="text-sm font-black text-slate-900 font-mono tabular-nums block mt-0.5">${g(I.omset)}</span>
                </div>
                <div class="p-3 rounded-xl bg-rose-50/70 border border-rose-200">
                    <span class="text-[9px] font-black uppercase tracking-wider text-rose-800 block">Diskon Produk</span>
                    <span class="text-sm font-black text-rose-700 font-mono tabular-nums block mt-0.5">${I.disc>0?Ke(I.disc,!0):"Rp 0"}</span>
                </div>
                <div class="p-3 rounded-xl bg-blue-50/70 border border-blue-200">
                    <span class="text-[9px] font-black uppercase tracking-wider text-blue-900 block">Dasar Pajak (DPP)</span>
                    <span class="text-sm font-black text-blue-800 font-mono tabular-nums block mt-0.5">${g(A)}</span>
                </div>
                <div class="p-3 rounded-xl bg-amber-50/80 border border-amber-200">
                    <span class="text-[9px] font-black uppercase tracking-wider text-amber-900 block">Total PPN Keluaran</span>
                    <span class="text-sm font-black text-amber-700 font-mono tabular-nums block mt-0.5">${g(I.ppn)}</span>
                </div>
            </div>

            <table class="w-full text-xs border-collapse border border-slate-300 mb-4">
                <thead>
                    <tr class="bg-slate-900 text-white font-bold text-[9.5px] uppercase tracking-wider">
                        <th class="py-2.5 px-3 text-left">Bulan</th>
                        <th class="py-2.5 px-3 text-right">Omset Bruto</th>
                        <th class="py-2.5 px-3 text-right">Dasar Pajak (DPP)</th>
                        <th class="py-2.5 px-3 text-right">PPN Keluaran</th>
                        <th class="py-2.5 px-3 text-right">Jumlah Pesanan</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200">
                    ${y}
                    <tr class="bg-slate-100 font-black text-slate-900 border-t-2 border-slate-800">
                        <td class="py-2.5 px-3 uppercase">Total Tahunan</td>
                        <td class="py-2.5 px-3 text-right font-mono tabular-nums">${g(I.omset)}</td>
                        <td class="py-2.5 px-3 text-right font-mono tabular-nums">${g(A)}</td>
                        <td class="py-2.5 px-3 text-right font-mono tabular-nums text-amber-700">${g(I.ppn)}</td>
                        <td class="py-2.5 px-3 text-right font-mono tabular-nums">${I.orderCount||0} Trx</td>
                    </tr>
                </tbody>
            </table>
        `}else if(e==="income"){const I=ze(),A=Math.max(0,I.omset-I.disc),y=A-I.hpp,M=Ht(),L=y-M,F=a.taxScheme||"umkm_final";let V,K,ge;F==="umkm_final"?(V=.5,K=I.omset,ge="PPh Final UMKM PP 55/2022 (0,5% × Omset)"):F==="badan_normal"?(V=22,K=Math.max(0,L),ge="PPh Badan UU HPP (22% × Laba Bersih)"):(V=parseFloat(a.customTaxRate)||0,K=Math.max(0,L),ge=`PPh Tarif Khusus (${V}% × Laba Bersih)`);const yt=K*(V/100),aa=L-yt,Ga=A>0?(y/A*100).toFixed(1):"0.0",Vr=A>0?(M/A*100).toFixed(1):"0.0",Va=A>0?(aa/A*100).toFixed(1):"0.0";v=`
            ${`
        <div class="grid grid-cols-4 gap-3 mb-3.5 select-none">
            <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span class="text-[9px] font-black uppercase tracking-wider text-slate-500 block">Penjualan Bersih</span>
                <span class="text-sm font-black text-slate-900 font-mono tabular-nums block mt-0.5">${g(A)}</span>
                <span class="text-[9px] font-bold text-slate-400 mt-0.5 block">100% Basis Omset</span>
            </div>
            <div class="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200">
                <span class="text-[9px] font-black uppercase tracking-wider text-emerald-800 block">Laba Kotor (Gross)</span>
                <span class="text-sm font-black text-emerald-700 font-mono tabular-nums block mt-0.5">${g(y)}</span>
                <span class="text-[9px] font-bold text-emerald-600 mt-0.5 block">${Ga}% Gross Margin</span>
            </div>
            <div class="p-3 rounded-xl bg-rose-50/70 border border-rose-200">
                <span class="text-[9px] font-black uppercase tracking-wider text-rose-800 block">Beban Operasional</span>
                <span class="text-sm font-black text-rose-700 font-mono tabular-nums block mt-0.5">${M>0?Ke(M,!0):"Rp 0"}</span>
                <span class="text-[9px] font-bold text-rose-600 mt-0.5 block">${Vr}% Opex Ratio</span>
            </div>
            <div class="p-3 rounded-xl bg-blue-50/80 border border-blue-200">
                <span class="text-[9px] font-black uppercase tracking-wider text-blue-900 block">Laba Bersih Akhir</span>
                <span class="text-sm font-black text-blue-800 font-mono tabular-nums block mt-0.5">${g(aa)}</span>
                <span class="text-[9px] font-bold text-blue-600 mt-0.5 block">${Va}% Net Margin</span>
            </div>
        </div>
        `}
            <table class="w-full text-xs border-collapse border border-slate-300 mb-3.5">
                <thead>
                    <tr class="bg-slate-900 text-white font-bold text-[9.5px] uppercase tracking-wider">
                        <th class="py-2.5 px-3 text-left w-16">Kode</th>
                        <th class="py-2.5 px-3 text-left">Komponen Akun Finansial</th>
                        <th class="py-2.5 px-3 text-center w-28">Catatan / %</th>
                        <th class="py-2.5 px-3 text-right w-36">Rincian (Rp)</th>
                        <th class="py-2.5 px-3 text-right w-36">Saldo Bersih (Rp)</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 text-slate-800">
                    <!-- I. PENDAPATAN USAHA -->
                    <tr class="bg-slate-100/70 font-black text-slate-900 text-[10.5px]">
                        <td class="py-1.5 px-3 font-mono">1.0</td>
                        <td class="py-1.5 px-3 uppercase tracking-wide" colspan="4">I. PENDAPATAN USAHA (REVENUE)</td>
                    </tr>
                    <tr>
                        <td class="py-1.5 px-3 font-mono text-slate-500 text-[11px]">4-100</td>
                        <td class="py-1.5 px-3 font-semibold pl-6">Penjualan Kotor (Gross Sales)</td>
                        <td class="py-1.5 px-3 text-center text-[10px] text-slate-500">POS &amp; Online</td>
                        <td class="py-1.5 px-3 text-right font-mono tabular-nums font-semibold">${g(I.omset)}</td>
                        <td class="py-1.5 px-3 text-right font-mono tabular-nums text-slate-400">-</td>
                    </tr>
                    <tr>
                        <td class="py-1.5 px-3 font-mono text-slate-500 text-[11px]">4-200</td>
                        <td class="py-1.5 px-3 font-semibold pl-6 text-rose-700">Potongan &amp; Diskon Penjualan</td>
                        <td class="py-1.5 px-3 text-center text-[10px] text-rose-600">Diskon Nota</td>
                        <td class="py-1.5 px-3 text-right font-mono tabular-nums font-semibold text-rose-600">${Ke(I.disc,!0)}</td>
                        <td class="py-1.5 px-3 text-right font-mono tabular-nums text-slate-400">-</td>
                    </tr>
                    <tr class="bg-slate-50 font-bold text-slate-900 border-t border-slate-300">
                        <td class="py-2 px-3 font-mono text-[11px]">4-000</td>
                        <td class="py-2 px-3 pl-6 uppercase text-[11px]">Total Pendapatan Bersih (Net Revenue)</td>
                        <td class="py-2 px-3 text-center text-[10px] font-mono text-blue-700 font-bold">100.0%</td>
                        <td class="py-2 px-3 text-right font-mono tabular-nums text-slate-400">-</td>
                        <td class="py-2 px-3 text-right font-mono tabular-nums font-black text-slate-900 text-[12px]">${g(A)}</td>
                    </tr>

                    <!-- II. HPP -->
                    <tr class="bg-slate-100/70 font-black text-slate-900 text-[10.5px]">
                        <td class="py-1.5 px-3 font-mono">2.0</td>
                        <td class="py-1.5 px-3 uppercase tracking-wide" colspan="4">II. HARGA POKOK PENJUALAN (COST OF GOODS SOLD)</td>
                    </tr>
                    <tr>
                        <td class="py-1.5 px-3 font-mono text-slate-500 text-[11px]">5-100</td>
                        <td class="py-1.5 px-3 font-semibold pl-6 text-rose-700">Beban Pokok Penjualan (HPP FIFO / Kulakan)</td>
                        <td class="py-1.5 px-3 text-center text-[10px] text-slate-500">Stok Terjual</td>
                        <td class="py-1.5 px-3 text-right font-mono tabular-nums font-semibold text-rose-600">${Ke(I.hpp,!0)}</td>
                        <td class="py-1.5 px-3 text-right font-mono tabular-nums text-slate-400">-</td>
                    </tr>
                    <tr class="bg-emerald-50/80 font-black text-emerald-950 border-t border-emerald-300">
                        <td class="py-2 px-3 font-mono text-[11px]">5-900</td>
                        <td class="py-2 px-3 pl-6 uppercase tracking-wide text-emerald-900 text-[11px]">LABA KOTOR (GROSS PROFIT)</td>
                        <td class="py-2 px-3 text-center text-[10px] font-mono text-emerald-700 font-bold">${Ga}%</td>
                        <td class="py-2 px-3 text-right font-mono tabular-nums text-slate-400">-</td>
                        <td class="py-2 px-3 text-right font-mono tabular-nums text-emerald-700 text-[12.5px] font-black">${g(y)}</td>
                    </tr>

                    <!-- III. BEBAN OPERASIONAL -->
                    <tr class="bg-slate-100/70 font-black text-slate-900 text-[10.5px]">
                        <td class="py-1.5 px-3 font-mono">3.0</td>
                        <td class="py-1.5 px-3 uppercase tracking-wide" colspan="4">III. BEBAN OPERASIONAL (OPERATING EXPENSES)</td>
                    </tr>
                    <tr>
                        <td class="py-1.5 px-3 font-mono text-slate-500 text-[11px]">6-100</td>
                        <td class="py-1.5 px-3 font-semibold pl-6 text-rose-700">Beban Operasional Toko, Listrik &amp; Biaya Lain</td>
                        <td class="py-1.5 px-3 text-center text-[10px] text-slate-500">Buku Kas Toko</td>
                        <td class="py-1.5 px-3 text-right font-mono tabular-nums font-semibold text-rose-600">${Ke(M,!0)}</td>
                        <td class="py-1.5 px-3 text-right font-mono tabular-nums text-slate-400">-</td>
                    </tr>
                    <tr class="bg-slate-50 font-bold text-slate-900 border-t border-slate-300">
                        <td class="py-2 px-3 font-mono text-[11px]">6-900</td>
                        <td class="py-2 px-3 pl-6 uppercase text-[11px]">Laba Operasional Sebelum Pajak (EBIT)</td>
                        <td class="py-2 px-3 text-center text-[10px] font-mono text-slate-600">${A>0?(L/A*100).toFixed(1):"0.0"}%</td>
                        <td class="py-2 px-3 text-right font-mono tabular-nums text-slate-400">-</td>
                        <td class="py-2 px-3 text-right font-mono tabular-nums font-black text-slate-900 text-[12px]">${g(L)}</td>
                    </tr>

                    <!-- IV. PAJAK & LABA BERSIH -->
                    <tr class="bg-slate-100/70 font-black text-slate-900 text-[10.5px]">
                        <td class="py-1.5 px-3 font-mono">4.0</td>
                        <td class="py-1.5 px-3 uppercase tracking-wide" colspan="4">IV. ESTIMASI BEBAN PAJAK PENGHASILAN (TAX PROVISION)</td>
                    </tr>
                    <tr>
                        <td class="py-1.5 px-3 font-mono text-slate-500 text-[11px]">9-100</td>
                        <td class="py-1.5 px-3 font-semibold pl-6 text-rose-700">Estimasi ${u(ge)}</td>
                        <td class="py-1.5 px-3 text-center text-[10px] text-rose-600">${V}% Basis</td>
                        <td class="py-1.5 px-3 text-right font-mono tabular-nums font-semibold text-rose-600">${Ke(yt,!0)}</td>
                        <td class="py-1.5 px-3 text-right font-mono tabular-nums text-slate-400">-</td>
                    </tr>
                    <tr class="bg-blue-50/90 text-blue-950 font-black border-t-2 border-slate-900 border-b-4 border-double border-slate-900">
                        <td class="py-2.5 px-3 font-mono text-[11.5px]">9-900</td>
                        <td class="py-2.5 px-3 pl-6 uppercase tracking-wider text-blue-900 text-[11.5px]">LABA BERSIH SETELAH PAJAK (NET INCOME)</td>
                        <td class="py-2.5 px-3 text-center text-[10.5px] font-mono text-blue-700">${Va}%</td>
                        <td class="py-2.5 px-3 text-right font-mono tabular-nums text-slate-400">-</td>
                        <td class="py-2.5 px-3 text-right font-mono tabular-nums text-blue-900 text-[13.5px] font-black">${g(aa)}</td>
                    </tr>
                </tbody>
            </table>
        `}else if(e==="balance"){const I=Lt(),A=a.balanceSheet||{kas:0,piutang:0,hutang:0},y=(parseFloat(A.kas)||0)+(parseFloat(A.piutang)||0)+I.assetHpp,M=parseFloat(A.hutang)||0,L=y-M;v=`
            <div class="grid grid-cols-2 gap-5 mb-4">
                <!-- ASET -->
                <div class="border border-slate-300 rounded-xl overflow-hidden bg-white">
                    <div class="bg-slate-900 text-white p-2.5 font-bold text-xs uppercase tracking-wider flex items-center justify-between">
                        <span>ASET (AKTIVA)</span>
                        <span class="font-mono text-[10px] text-slate-300">KODE: 1-000</span>
                    </div>
                    <div class="p-3 space-y-2 text-xs">
                        <div class="flex justify-between py-1.5 border-b border-slate-100">
                            <span class="font-semibold text-slate-700">1-100 Kas &amp; Saldo Bank</span>
                            <span class="font-mono tabular-nums font-bold text-slate-900">${g(A.kas||0)}</span>
                        </div>
                        <div class="flex justify-between py-1.5 border-b border-slate-100">
                            <span class="font-semibold text-slate-700">1-200 Piutang Usaha (Nota Tempo)</span>
                            <span class="font-mono tabular-nums font-bold text-slate-900">${g(A.piutang||0)}</span>
                        </div>
                        <div class="flex justify-between py-1.5 border-b border-slate-100">
                            <span class="font-semibold text-slate-700">1-300 Persediaan Barang (Nilai HPP Stok)</span>
                            <span class="font-mono tabular-nums font-bold text-slate-900">${g(I.assetHpp)}</span>
                        </div>
                        <div class="flex justify-between py-2 border-t-2 border-slate-900 mt-2 bg-slate-50 px-2 rounded font-black text-slate-900">
                            <span class="uppercase tracking-wider">TOTAL ASET</span>
                            <span class="font-mono tabular-nums text-sm">${g(y)}</span>
                        </div>
                    </div>
                </div>

                <!-- KEWAJIBAN & EKUITAS -->
                <div class="border border-slate-300 rounded-xl overflow-hidden bg-white">
                    <div class="bg-slate-900 text-white p-2.5 font-bold text-xs uppercase tracking-wider flex items-center justify-between">
                        <span>KEWAJIBAN &amp; EKUITAS (PASIVA)</span>
                        <span class="font-mono text-[10px] text-slate-300">KODE: 2-000 / 3-000</span>
                    </div>
                    <div class="p-3 space-y-2 text-xs">
                        <div class="flex justify-between py-1.5 border-b border-slate-100">
                            <span class="font-semibold text-slate-700">2-100 Hutang Usaha (Kulakan PO Rekanan)</span>
                            <span class="font-mono tabular-nums font-bold text-rose-700">${g(M)}</span>
                        </div>
                        <div class="flex justify-between py-1.5 border-b border-slate-100">
                            <span class="font-semibold text-slate-700">3-100 Modal Disetor &amp; Saldo Laba Usaha</span>
                            <span class="font-mono tabular-nums font-bold text-slate-900">${g(L)}</span>
                        </div>
                        <div class="flex justify-between py-1.5 border-b border-slate-100 opacity-0 pointer-events-none">
                            <span>-</span><span>-</span>
                        </div>
                        <div class="flex justify-between py-2 border-t-2 border-slate-900 mt-2 bg-slate-50 px-2 rounded font-black text-slate-900">
                            <span class="uppercase tracking-wider">TOTAL KEWAJIBAN + EKUITAS</span>
                            <span class="font-mono tabular-nums text-sm">${g(M+L)}</span>
                        </div>
                    </div>
                </div>
            </div>
        `}const S=`
    <div class="a4-page" data-page="1" data-total-pages="1">
        <div class="a4-page-body flex-1 flex flex-col justify-between">
            <div>
                ${f}
                ${v}
            </div>
            ${h}
        </div>
        ${w}
    </div>
    `;Ee("doc-modal-title","Preview "+m),_("doc-paper-content",S);const $=k("doc-page-count-badge");$&&($.textContent="1 Halaman A4");const B=k("doc-preview-modal");B&&B.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("docPreview"),We("doc-preview-modal"),setTimeout(()=>{k("doc-preview-modal")&&k("doc-preview-modal").classList.remove("opacity-0"),k("doc-preview-modal-box")&&k("doc-preview-modal-box").classList.remove("scale-95"),typeof window.fitDocPreview=="function"&&window.fitDocPreview()},10)};window.fetchTaxPeriodData=Ut;window.getTaxPeriodTotals=ze;window.getTaxPeriodExpenses=Ht;window.rTaxPanel=Gs;window.rTaxRenderShell=Gt;window.switchTaxTab=Vs;window.changeTaxYear=Ws;window.changeTaxMonth=qs;window.rTaxSubContent=ft;window.rTaxSummary=Ta;window.rTaxIncome=Vt;window.saveMonthlyExpense=Js;window.rTaxBalance=Wt;window.saveBalanceField=zs;window.rTaxSettingsPanel=$a;window.toggleCustomTaxRateInput=Qs;window.saveTaxSettingsPanel=Ys;window.openTaxDocPreview=Xs;window.MONTH_NAMES=xe;const gt=e=>window.pushModalHistory?.(e),qt=(e,t,a)=>typeof window.requestCloseModal=="function"?window.requestCloseModal(e,t,a):a?.();let he="all",oe="orders",ae="all",ue="all",fe="",j=[],q=[],Ia=null,Ie="items";const Ye=()=>{if(["modal-tempo-detail","modal-tempo-payment","modal-tempo-penalty","modal-tempo-confirmations"].forEach(e=>{const t=document.querySelector(`#admin-content #${e}`);t&&t.remove()}),!k("modal-tempo-detail")){const e=document.createElement("div");e.id="modal-tempo-detail",e.className="fixed inset-0 z-[150] flex hidden items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/75 opacity-0 transition-opacity duration-300",e.onclick=t=>{t.target===e&&window.closeTempoDetailModal?.()},e.innerHTML=`
            <div id="modal-tempo-detail-box" class="modal-bottom-sheet relative flex max-h-[92dvh] sm:max-h-[88dvh] w-full max-w-3xl translate-y-full sm:translate-y-10 transform flex-col overflow-hidden rounded-t-[2rem] sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300">
                <div id="modal-tempo-detail-content" class="flex-1 overflow-y-auto custom-scrollbar flex flex-col"></div>
            </div>
        `,document.body.appendChild(e)}if(!k("modal-tempo-payment")){const e=document.createElement("div");e.id="modal-tempo-payment",e.className="fixed inset-0 z-[150] flex hidden items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/75 opacity-0 transition-opacity duration-300",e.onclick=t=>{t.target===e&&window.closeTempoPaymentModal?.()},e.innerHTML=`
            <div id="modal-tempo-payment-box" class="modal-bottom-sheet relative flex max-h-[92dvh] sm:max-h-[88dvh] w-full max-w-md translate-y-full sm:translate-y-10 transform flex-col overflow-hidden rounded-t-[2rem] sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300">
                <div id="modal-tempo-payment-content" class="flex-1 overflow-y-auto custom-scrollbar flex flex-col"></div>
            </div>
        `,document.body.appendChild(e)}if(!k("modal-tempo-penalty")){const e=document.createElement("div");e.id="modal-tempo-penalty",e.className="fixed inset-0 z-[150] flex hidden items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/75 opacity-0 transition-opacity duration-300",e.onclick=t=>{t.target===e&&window.closeTempoPenaltyModal?.()},e.innerHTML=`
            <div id="modal-tempo-penalty-box" class="modal-bottom-sheet relative flex max-h-[92dvh] sm:max-h-[88dvh] w-full max-w-md translate-y-full sm:translate-y-10 transform flex-col overflow-hidden rounded-t-[2rem] sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300">
                <div id="modal-tempo-penalty-content" class="flex-1 overflow-y-auto custom-scrollbar flex flex-col"></div>
            </div>
        `,document.body.appendChild(e)}if(!k("modal-tempo-confirmations")){const e=document.createElement("div");e.id="modal-tempo-confirmations",e.className="fixed inset-0 z-[150] flex hidden items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/75 opacity-0 transition-opacity duration-300",e.onclick=t=>{t.target===e&&window.closeTempoConfirmationsModal?.()},e.innerHTML=`
            <div id="modal-tempo-confirmations-box" class="modal-bottom-sheet relative flex max-h-[92dvh] sm:max-h-[88dvh] w-full max-w-2xl translate-y-full sm:translate-y-10 transform flex-col overflow-hidden rounded-t-[2.25rem] sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300">
                <div id="modal-tempo-confirmations-content" class="flex-1 overflow-y-auto custom-scrollbar flex flex-col"></div>
            </div>
        `,document.body.appendChild(e)}},Ma=e=>{if(!e)return"PL";const t=e.trim().split(/\s+/).filter(Boolean);return t.length===1?t[0].substring(0,2).toUpperCase():(t[0][0]+t[t.length-1][0]).toUpperCase()},ct=e=>{if(!e)return"-";try{return new Date(e).toLocaleDateString("id-ID",{day:"2-digit",month:"short",year:"numeric"})}catch{return e}},Mt=e=>{if(!e)return"-";try{return new Date(e).toLocaleDateString("id-ID",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"})+" WIB"}catch{return e}},te=e=>{let t=parseFloat(e.payment?.tempoBalance)||0,a=e.payment?.tempoPenaltyRate!==void 0?parseFloat(e.payment.tempoPenaltyRate):1,r=e.payment?.tempoPenaltyStopped===!0,s=0,o=e.payment?.tempoDueDate||0,i=0,n=0,p=!1,d=!1;const c=Date.now();o>0&&(c>o?(i=Math.floor((c-o)/(24*60*60*1e3)),i>0&&(p=!0)):(n=Math.ceil((o-c)/(24*60*60*1e3)),n<=3&&(d=!0))),r?s=parseFloat(e.payment?.tempoFixedPenalty)||0:p&&(s=a/100*t*i);let m=t+s;return{sisa:t,rate:a,isStopped:r,latePenalty:s,dueDate:o,daysLate:i,daysLeft:n,isLate:p,isDueSoon:d,totalAkhir:m,statusCategory:p?"late":d?"due_soon":"active"}},Zs=e=>{Ye(),Ia=e,Ie="items";const t=j.find(s=>s.orderId===e);if(!t)return x("Data piutang tidak ditemukan!");Ca(t);const a=k("modal-tempo-detail"),r=k("modal-tempo-detail-box");a&&(pe(a,r),gt("tempoDetail"))},er=(e=!1)=>{const t=k("modal-tempo-detail"),a=k("modal-tempo-detail-box");t&&qt("tempoDetail",e,()=>Y(t,a))};window.openTempoDetailModal=Zs;window.closeTempoDetailModal=er;window.switchTempoDetailTab=e=>{Ie=e;const t=j.find(a=>a.orderId===Ia);t&&Ca(t)};const Ca=e=>{if(!k("modal-tempo-detail-content"))return;const a=te(e),r=mt(e.customer?.wa||""),s=Ma(e.customer?.name||"Pelanggan"),o=a.dueDate?ct(a.dueDate):"-";e.dateString&&Mt(e.dateString);const i=e.items||[],n=e.payment?.installments||[],p=n.reduce((v,S)=>v+(parseFloat(S.amount)||0),0),d=e.payment?.grandTotal||a.sisa+p,c=!!(e.payment?.isPaylater||e.isPaylater||e.payment?.subMethod==="paylater"),m=(parseFloat(e.payment?.paylaterAdminFee)||0)+(parseFloat(e.payment?.paylaterServiceFee)||0),b=parseFloat(e.payment?.paylaterUsed)||Math.max(0,a.sisa-m),f=parseFloat(e.payment?.paylaterMonthlyInstallment)||0,h=parseInt(e.payment?.paylaterMonths)||(e.payment?.paylaterTenor==="2m"?2:e.payment?.paylaterTenor==="3m"?3:1);let w="";a.isLate?w=`<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-[11px] font-black uppercase tracking-wider bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400 border border-rose-200 dark:border-rose-800 shadow-2xs"><i class="fa-solid fa-triangle-exclamation"></i> Terlambat ${a.daysLate} Hari</span>`:a.isDueSoon?w=`<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-[11px] font-black uppercase tracking-wider bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300 border border-amber-200 dark:border-amber-800 shadow-2xs"><i class="fa-solid fa-clock"></i> Jatuh Tempo H-${a.daysLeft<=0?"0 (Hari Ini)":a.daysLeft}</span>`:w=`<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-[11px] font-black uppercase tracking-wider text-[var(--color-primary)] border shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.08); border-color: rgba(var(--color-primary-rgb), 0.25);"><i class="fa-solid fa-circle-check"></i> Tempo Berjalan (${a.daysLeft} Hari Lagi)</span>`,_("modal-tempo-detail-content",`
        <!-- DRAG PULL INDICATOR (NATIVE MOBILE SHEET) -->
        <div class="pull-indicator sm:hidden"></div>

        <!-- HEADER MODAL DENGAN PINNED CLOSE BUTTON -->
        <div class="relative px-5 sm:px-6 pt-3 sm:pt-5 pb-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/60 shrink-0">
            <!-- Pinned Close Button -->
            <button onclick="window.closeTempoDetailModal()" class="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 z-10 w-9 h-9 rounded-full bg-slate-100 hover:bg-rose-100 hover:text-rose-500 dark:bg-slate-800 dark:hover:bg-rose-950/40 dark:hover:text-rose-400 text-slate-500 flex items-center justify-center transition-all cursor-pointer active:scale-95" aria-label="Tutup Rincian">
                <i class="fa-solid fa-xmark text-sm"></i>
            </button>

            <div class="flex items-center gap-3.5 pr-12">
                <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-sm font-black shrink-0 aspect-square shadow-xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);">
                    ${s}
                </div>
                <div class="min-w-0">
                    <div class="flex items-center gap-2 flex-wrap">
                        <h3 class="font-black text-base sm:text-lg text-slate-800 dark:text-white tracking-tight truncate">${u(e.customer?.name||"Pelanggan Anonim")}</h3>
                        <span class="text-[9px] font-bold px-2 py-0.5 rounded-lg uppercase tracking-wider whitespace-nowrap inline-flex items-center border ${e.customerType==="Member"?"text-amber-600 bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800":"text-slate-500 bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700"}">
                            ${e.customerType==="Member"?'<i class="fa-solid fa-star text-amber-400 mr-1"></i>Member':'<i class="fa-solid fa-user mr-1"></i>Umum'}
                        </span>
                        ${e.payment?.isPaylater||e.isPaylater||e.payment?.subMethod==="paylater"?`
                            <span class="text-[9px] font-black px-2 py-0.5 rounded-lg uppercase tracking-wider whitespace-nowrap inline-flex items-center border border-emerald-300 dark:border-emerald-700 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-200 gap-1">
                                <i class="fa-solid fa-bolt text-emerald-500"></i> Putri PayLater
                            </span>
                        `:""}
                    </div>
                    <div class="flex items-center gap-2 mt-1.5 text-xs text-slate-500 dark:text-slate-400 flex-wrap">
                        <span class="font-mono font-bold text-slate-500 bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 rounded-lg text-[11px] border border-slate-200 dark:border-slate-700">#${u(e.orderId)}</span>
                        <a href="javascript:void(0)" onclick="window.sendSmartTempoWA('${e.orderId}')" class="font-mono text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1 font-bold text-[11px] bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-0.5 rounded-lg border border-emerald-200 dark:border-emerald-800">
                            <i class="fa-brands fa-whatsapp"></i> +${u(r||"-")}
                        </a>
                        <button type="button" onclick="if(typeof window.openDocPreview==='function') window.openDocPreview('tempo_customer_ledger', '${u(e.customer?.phone||e.customer?.wa||e.customer?.name||"")}');" class="text-[11px] font-bold text-[var(--color-primary)] hover:underline inline-flex items-center gap-1 cursor-pointer primary-bg-soft px-2.5 py-0.5 rounded-lg border primary-border">
                            <i class="fa-solid fa-address-book"></i> Kartu Pelanggan
                        </button>
                    </div>
                </div>
            </div>

            <!-- STATUS & JATUH TEMPO STRIP (LEGA & RAPI) -->
            <div class="mt-4 p-3 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-between gap-3 flex-wrap shadow-2xs">
                <div class="flex items-center gap-2 shrink-0">
                    ${w}
                </div>
                <div class="text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1.5 ml-auto sm:ml-0">
                    <span class="text-[11px] font-bold uppercase tracking-wider text-slate-400">Batas Waktu:</span>
                    <span class="font-mono font-bold text-slate-800 dark:text-slate-100 bg-slate-100 dark:bg-slate-700/80 px-2.5 py-1 rounded-xl text-xs border border-slate-200 dark:border-slate-600">${o}</span>
                </div>
            </div>
        </div>

        <!-- RINGKASAN SALDO PIUTANG STRIP (HIGHLIGHT CARD) -->
        <div class="p-4 sm:p-5 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 shrink-0">
            <div class="p-4 rounded-2xl border ${a.isLate?"bg-rose-50/60 dark:bg-rose-950/20 border-rose-200 dark:border-rose-900/40":"bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700/80"} shadow-2xs">
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center sm:text-left">
                    <div>
                        <span class="block text-[10px] font-bold uppercase tracking-wider text-slate-400">${c?"Pokok Belanja":"Total Transaksi"}</span>
                        <span class="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 font-mono mt-0.5 block">${g(c?b:d)}</span>
                    </div>
                    <div>
                        <span class="block text-[10px] font-bold uppercase tracking-wider text-slate-400">${c&&m>0?"Biaya PayLater":"Sudah Dibayar"}</span>
                        <span class="text-xs sm:text-sm font-bold ${c&&m>0,"text-emerald-600 dark:text-emerald-400"} font-mono mt-0.5 block">${c&&m>0?"+"+g(m):g(p)}</span>
                    </div>
                    <div>
                        <span class="block text-[10px] font-bold uppercase tracking-wider text-slate-400">${c&&m>0?"Sudah Dibayar":"Sisa Pokok"}</span>
                        <span class="text-xs sm:text-sm font-bold ${c&&m>0?"text-emerald-600 dark:text-emerald-400":"text-slate-700 dark:text-slate-300"} font-mono mt-0.5 block">${g(c&&m>0?p:a.sisa)}</span>
                    </div>
                    <div>
                        <span class="block text-[10px] font-bold uppercase tracking-wider ${a.isLate?"text-rose-500":"text-slate-400"}">Total Wajib Bayar</span>
                        <span class="text-sm sm:text-base font-black ${a.isLate?"text-rose-600 dark:text-rose-400":"text-slate-900 dark:text-white"} font-mono mt-0.5 block">${g(a.totalAkhir)}</span>
                    </div>
                </div>
                ${c&&f>0&&h>1?`
                <div class="mt-2.5 pt-2 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-xs text-slate-600 dark:text-slate-300">
                    <span class="font-bold flex items-center gap-1.5"><i class="fa-solid fa-calendar-days text-[var(--color-primary)]"></i> Tenor Cicilan: <b>${h} Bulan (${h}x Bayar)</b></span>
                    <span class="font-black font-mono text-[var(--color-primary)]">${g(f)} / bulan</span>
                </div>`:""}
                ${a.latePenalty>0?`
                <div class="mt-2.5 pt-2 border-t border-rose-200/80 dark:border-rose-900/60 flex items-center justify-between text-xs text-rose-600 dark:text-rose-400">
                    <span class="font-bold flex items-center gap-1.5"><i class="fa-solid fa-clock"></i> Termasuk Denda Keterlambatan (${a.rate}%/hari • ${a.daysLate} hari):</span>
                    <span class="font-black font-mono">+${g(a.latePenalty)}</span>
                </div>`:""}
            </div>
        </div>

        <!-- 3-COLUMN SEGMENTED TAB BAR -->
        <div class="px-4 sm:px-6 pt-3 pb-2 bg-white dark:bg-slate-900 shrink-0">
            <div class="grid grid-cols-3 gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl">
                <button type="button" onclick="window.switchTempoDetailTab('items')" class="py-2.5 px-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer ${Ie==="items"?"bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs":"text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"}">
                    <i class="fa-solid fa-box text-xs"></i>
                    <span>Barang (${i.length})</span>
                </button>
                <button type="button" onclick="window.switchTempoDetailTab('installments')" class="py-2.5 px-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer ${Ie==="installments"?"bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs":"text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"}">
                    <i class="fa-solid fa-receipt text-xs"></i>
                    <span>Cicilan (${n.length})</span>
                </button>
                <button type="button" onclick="window.switchTempoDetailTab('penalty_info')" class="py-2.5 px-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer ${Ie==="penalty_info"?"bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs":"text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"}">
                    <i class="fa-solid fa-gear text-xs"></i>
                    <span>Denda &amp; Info</span>
                </button>
            </div>
        </div>

        <!-- TAB BODY CONTENT -->
        <div class="p-5 sm:p-6 pb-20 sm:pb-24 overflow-y-auto flex-1 custom-scrollbar bg-white dark:bg-slate-900">
            ${Lo(e,a)}
        </div>

        <!-- STICKY NATIVE ACTION FOOTER (LEGA, SOLID & DOCKING AMAN) -->
        <div class="p-4 sm:p-5 border-t border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shrink-0 flex flex-wrap sm:flex-nowrap items-center justify-between gap-2.5 shadow-[0_-4px_16px_rgba(0,0,0,0.06)] dark:shadow-[0_-4px_16px_rgba(0,0,0,0.3)]" style="padding-bottom: max(1.25rem, env(safe-area-inset-bottom))">
            <div class="flex items-center gap-1.5 w-full sm:w-auto flex-wrap">
                <button type="button" onclick="window.closeTempoDetailModal()" class="h-11 px-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer active:scale-95">
                    Tutup
                </button>
                <button type="button" onclick="if(typeof window.openDocPreview==='function') window.openDocPreview('tempo_invoice', '${e.orderId}');" class="h-11 px-3 rounded-2xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-bold text-xs transition-all cursor-pointer flex items-center gap-1.5 active:scale-95 shadow-2xs" title="Cetak Nota A4 / PDF / Simpan Gambar">
                    <i class="fa-solid fa-file-invoice"></i>
                    <span class="inline">Nota A4</span>
                </button>
                <button type="button" onclick="if(typeof window.printTempoReceiptDirect==='function'){window.printTempoReceiptDirect('${e.orderId}');}else{window.previewTempoReceipt('${e.orderId}');}" class="h-11 px-3 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs transition-all cursor-pointer flex items-center gap-1.5 active:scale-95 shadow-2xs" title="Cetak Struk Thermal (RawBT / Web)">
                    <i class="fa-solid fa-print"></i>
                    <span class="inline">Struk</span>
                </button>
                <button type="button" onclick="window.sendSmartTempoWA('${e.orderId}')" class="h-11 px-3 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs transition-all cursor-pointer flex items-center gap-1.5 active:scale-95 shadow-2xs" title="Kirim Tagihan WhatsApp">
                    <i class="fa-brands fa-whatsapp text-sm"></i>
                    <span class="inline">Tagih WA</span>
                </button>
            </div>

            <div class="flex items-center gap-2 w-full sm:w-auto justify-end">
                <button type="button" onclick="window.closeTempoDetailModal(); window.openTempoPaymentModal('${e.orderId}');" class="neo-btn flex-1 sm:flex-initial h-11 px-4 rounded-xl text-white font-bold text-xs cursor-pointer flex items-center justify-center gap-1.5" style="background: var(--color-primary);">
                    <i class="fa-solid fa-money-bill-wave"></i>
                    <span>+ Catat Cicilan</span>
                </button>
                <button type="button" onclick="window.closeTempoDetailModal(); window.markTempoPaid('${e.orderId}');" class="h-11 px-3.5 rounded-2xl bg-slate-900 hover:bg-black dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold text-xs transition-all cursor-pointer flex items-center gap-1.5 active:scale-95 shadow-2xs" title="Tandai Seluruh Tagihan Lunas">
                    <i class="fa-solid fa-check-double text-emerald-400"></i>
                    <span>Lunasi</span>
                </button>
            </div>
        </div>
    `)},Lo=(e,t)=>{const a=e.items||[],r=e.payment?.installments||[];if(Ie==="items")return a.length===0?`
                <div class="text-center py-10 text-slate-400 flex flex-col items-center justify-center">
                    <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-2.5 mx-auto bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 shadow-2xs">
                        <i class="fa-solid fa-box-open"></i>
                    </div>
                    <p class="text-xs font-bold text-slate-700 dark:text-slate-300">Rincian barang tidak ditemukan untuk pesanan ini.</p>
                </div>
            `:`
            <div class="space-y-3">
                <!-- Mobile List (Adaptive Card) -->
                <div class="sm:hidden space-y-2.5">
                    ${a.map(s=>{const o=s.effectivePrice!==void 0?s.effectivePrice:s.price||0,i=(parseFloat(s.qty)||1)*o;return`
                            <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 flex items-start justify-between gap-3 shadow-2xs">
                                <div class="min-w-0 flex-1">
                                    <h4 class="font-bold text-xs text-slate-800 dark:text-slate-100">${u(s.name||"Barang")}</h4>
                                    ${s.variantName?`<span class="inline-block mt-0.5 text-[10px] text-slate-500 font-medium">Varian: ${u(s.variantName)}</span>`:""}
                                    <div class="mt-1 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                                        ${s.qty} ${u(s.unit||"pcs")} × ${g(o)}
                                    </div>
                                </div>
                                <div class="text-right shrink-0">
                                    <span class="font-black text-xs text-slate-900 dark:text-white font-mono">${g(i)}</span>
                                </div>
                            </div>
                        `}).join("")}
                </div>

                <!-- Desktop Table -->
                <div class="hidden sm:block overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700/80">
                    <table class="w-full text-xs text-left">
                        <thead class="bg-slate-50 dark:bg-slate-800 text-slate-400 uppercase text-[10px] font-bold border-b border-slate-200 dark:border-slate-700">
                            <tr>
                                <th class="py-3 px-4">Nama Produk &amp; Varian</th>
                                <th class="py-3 px-3 text-center">Qty</th>
                                <th class="py-3 px-3 text-right">Harga Satuan</th>
                                <th class="py-3 px-4 text-right">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-100 dark:divide-slate-800 font-medium">
                            ${a.map(s=>{const o=s.effectivePrice!==void 0?s.effectivePrice:s.price||0,i=(parseFloat(s.qty)||1)*o;return`
                                    <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                                        <td class="py-3 px-4">
                                            <span class="font-bold text-slate-800 dark:text-slate-200">${u(s.name||"Barang")}</span>
                                            ${s.variantName?`<span class="block text-[10px] text-slate-400">Varian: ${u(s.variantName)}</span>`:""}
                                        </td>
                                        <td class="py-3 px-3 text-center font-mono font-bold">${s.qty} ${u(s.unit||"pcs")}</td>
                                        <td class="py-3 px-3 text-right font-mono">${g(o)}</td>
                                        <td class="py-3 px-4 text-right font-black font-mono text-slate-800 dark:text-slate-100">${g(i)}</td>
                                    </tr>
                                `}).join("")}
                        </tbody>
                    </table>
                </div>
            </div>
        `;if(Ie==="installments"){const s=!!(e.payment?.isPaylater||e.isPaylater||e.payment?.subMethod==="paylater"||Array.isArray(e.payment?.paylaterSchedule)&&e.payment.paylaterSchedule.length>0),o=e.payment?.grandTotal||e.total||0;let i="";if(s){const p=Array.isArray(e.payment?.paylaterSchedule)&&e.payment.paylaterSchedule.length>0?e.payment.paylaterSchedule:[{installmentNo:1,dueDate:e.payment?.tempoDueDate||Date.now(),dueDateStr:ct(e.payment?.tempoDueDate||Date.now()),pokok:parseFloat(e.payment?.paylaterUsed||t.sisa)||0,adminFee:parseFloat(e.payment?.paylaterAdminFee)||0,serviceFee:parseFloat(e.payment?.paylaterServiceFee)||0,totalMonthly:parseFloat(e.payment?.paylaterMonthlyInstallment||e.payment?.tempoBalance||t.sisa)||0}],d=p.reduce((w,v)=>w+(parseFloat(v.totalMonthly)||0),0),c=Math.max(0,parseFloat(e.payment?.tempoBalance)||0),m=Math.max(0,d-c);let b=0;const f=p.map((w,v)=>{const S=parseFloat(w.totalMonthly)||0,$=b;b+=S;const B=b;let I="",A="",y="",M=0;if(m>=B)I="LUNAS",A="bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-700",y='<i class="fa-solid fa-circle-check"></i>',M=0;else if(m>$){const V=m-$;M=Math.max(0,S-V),I=`SEBAGIAN (Sisa ${g(M)})`,A="bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border border-amber-300 dark:border-amber-700",y='<i class="fa-solid fa-hourglass-half"></i>'}else M=S,w.dueDate&&Date.now()>w.dueDate?(I="JATUH TEMPO / TERLAMBAT",A="bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-400 border border-rose-300 dark:border-rose-700",y='<i class="fa-solid fa-circle-exclamation"></i>'):(I="MENUNGGU JATUH TEMPO",A="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700",y='<i class="fa-solid fa-clock"></i>');const L=w.dueDateStr||(w.dueDate?ct(w.dueDate):"-"),F=e.payment?.paylaterTenor==="2m"?"2 Bulan":e.payment?.paylaterTenor==="3m"?"3 Bulan":"30 Hari";return`
                  <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs space-y-2">
                    <div class="flex items-center justify-between flex-wrap gap-2">
                      <div class="flex items-center gap-2">
                        <span class="w-7 h-7 rounded-xl flex items-center justify-center text-xs font-black shrink-0 font-mono" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">
                          #${w.installmentNo||v+1}
                        </span>
                        <div>
                          <h4 class="font-bold text-xs text-slate-800 dark:text-slate-100">Angsuran Ke-${w.installmentNo||v+1} (${F})</h4>
                          <p class="text-[10px] text-slate-400">Jatuh Tempo: <span class="font-bold text-slate-700 dark:text-slate-300 font-mono">${L}</span></p>
                        </div>
                      </div>
                      <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black ${A}">
                        ${y} ${I}
                      </span>
                    </div>

                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px]">
                      <div>
                        <span class="text-[10px] text-slate-400 block">Pokok:</span>
                        <span class="font-bold text-slate-700 dark:text-slate-300 font-mono">${g(w.pokok||0)}</span>
                      </div>
                      <div>
                        <span class="text-[10px] text-slate-400 block">Biaya Admin:</span>
                        <span class="font-bold ${(w.adminFee||0)>0?"text-amber-600 dark:text-amber-400":"text-emerald-600 dark:text-emerald-400"} font-mono">
                          ${(w.adminFee||0)>0?g(w.adminFee):"Gratis"}
                        </span>
                      </div>
                      <div>
                        <span class="text-[10px] text-slate-400 block">Biaya Layanan:</span>
                        <span class="font-bold ${(w.serviceFee||0)>0?"text-amber-600 dark:text-amber-400":"text-emerald-600 dark:text-emerald-400"} font-mono">
                          ${(w.serviceFee||0)>0?g(w.serviceFee):"Gratis"}
                        </span>
                      </div>
                      <div>
                        <span class="text-[10px] text-slate-400 block">Total Angsuran:</span>
                        <span class="font-black text-xs font-mono" style="color:var(--color-primary)">${g(S)}</span>
                      </div>
                    </div>

                    ${M>0?`
                      <div class="pt-2 flex justify-end">
                        <button type="button" onclick="window.closeTempoDetailModal(); window.openTempoPaymentModal('${e.orderId}', ${M});"
                          class="px-3 py-1.5 rounded-xl text-white font-bold text-[11px] flex items-center gap-1.5 active:scale-95 transition-all shadow-2xs cursor-pointer"
                          style="background: var(--color-primary);">
                          <i class="fa-solid fa-money-bill-wave"></i>
                          <span>Bayar Angsuran Ini (${g(M)})</span>
                        </button>
                      </div>
                    `:""}
                  </div>
                `}).join("");i=`
              <div class="p-4 rounded-2xl bg-gradient-to-br from-emerald-50/70 via-teal-50/40 to-slate-50 dark:from-emerald-950/20 dark:via-slate-900 dark:to-slate-900 border border-emerald-200/80 dark:border-emerald-800/60 shadow-2xs space-y-3 mb-4">
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2">
                    <span class="w-8 h-8 rounded-xl flex items-center justify-center text-xs text-emerald-600 bg-emerald-100 dark:bg-emerald-900/60 shrink-0">
                      <i class="fa-solid fa-bolt"></i>
                    </span>
                    <div>
                      <h4 class="font-black text-xs text-emerald-900 dark:text-emerald-300">Jadwal Angsuran Putri PayLater</h4>
                      <p class="text-[10px] text-emerald-700/80 dark:text-emerald-400 font-semibold">${e.payment?.paylaterTenor==="2m"?"2 Bulan (2x Cicilan)":e.payment?.paylaterTenor==="3m"?"3 Bulan (3x Cicilan)":"30 Hari (1x Bayar)"} • Transparan Tanpa Biaya Tersembunyi</p>
                    </div>
                  </div>
                  <span class="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-200">
                    Plafon Terpakai: ${g(e.payment?.paylaterUsed||o-(e.payment?.tempoDp||0))}
                  </span>
                </div>

                <div class="space-y-2">
                  ${f}
                </div>
              </div>
            `}let n="";return r.length===0?n=`
                <div class="text-center py-8 text-slate-400 bg-slate-50/60 dark:bg-slate-900/40 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-800 p-6">
                    <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-2.5 mx-auto" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary);">
                        <i class="fa-solid fa-receipt"></i>
                    </div>
                    <p class="font-bold text-xs sm:text-sm text-slate-700 dark:text-slate-200">Belum Ada Riwayat Cicilan</p>
                    <p class="text-[11px] text-slate-400 mt-0.5 max-w-xs mx-auto">Pelanggan belum melakukan pembayaran cicilan apapun untuk tagihan tempo ini.</p>
                    <button type="button" onclick="window.closeTempoDetailModal(); window.openTempoPaymentModal('${e.orderId}');" class="mt-4 px-4 py-2 rounded-xl text-white font-bold text-xs inline-flex items-center gap-1.5 shadow-sm active:scale-95 transition-all cursor-pointer" style="background: var(--color-primary);">
                        <i class="fa-solid fa-plus text-xs"></i>
                        <span>+ Catat Pembayaran Cicilan Pertama</span>
                    </button>
                </div>
            `:n=`
                <div class="space-y-3">
                    <div class="flex items-center justify-between text-xs font-bold text-slate-500 mb-1">
                        <span>Daftar Transaksi Cicilan (${r.length})</span>
                        <span>Total Masuk: <span class="text-emerald-600 font-mono">${g(r.reduce((p,d)=>p+(parseFloat(d.amount)||0),0))}</span></span>
                    </div>
                    <div class="space-y-2.5">
                        ${r.map((p,d)=>`
                            <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 flex items-center justify-between gap-3 shadow-2xs">
                                <div class="flex items-center gap-3">
                                    <div class="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-black shrink-0 bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400">
                                        #${d+1}
                                    </div>
                                    <div>
                                        <span class="font-black text-xs text-emerald-600 dark:text-emerald-400 font-mono">+${g(p.amount)}</span>
                                        <div class="flex items-center gap-2 mt-0.5 text-[10px] text-slate-400">
                                            <span>${Mt(p.date)}</span>
                                            <span>•</span>
                                            <span class="font-bold text-slate-600 dark:text-slate-300">${u(p.method||"Tunai")}</span>
                                        </div>
                                        ${p.note?`<p class="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 italic">"${u(p.note)}"</p>`:""}
                                    </div>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                </div>
            `,`
          <div class="space-y-4">
            ${i}
            ${n}
          </div>
        `}return Ie==="penalty_info"?`
            <div class="space-y-4">
                <!-- Info Pengiriman & Catatan Pelanggan -->
                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 space-y-2.5 text-xs">
                    <span class="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Data Pelanggan &amp; Pengiriman</span>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                        <div>
                            <span class="text-slate-400 block text-[10px]">Alamat Pelanggan:</span>
                            <span class="font-medium text-slate-700 dark:text-slate-200 mt-0.5 block">${u(e.customer?.address||"Tidak dicantumkan")}</span>
                        </div>
                        <div>
                            <span class="text-slate-400 block text-[10px]">Nomor WhatsApp:</span>
                            <span class="font-medium font-mono text-slate-700 dark:text-slate-200 mt-0.5 block">+${u(e.customer?.wa||"-")}</span>
                        </div>
                    </div>
                    ${e.notes?`
                    <div class="pt-2 border-t border-slate-200/60 dark:border-slate-700">
                        <span class="text-slate-400 block text-[10px]">Catatan Pesanan:</span>
                        <p class="font-medium text-slate-700 dark:text-slate-200 mt-0.5 italic">"${u(e.notes)}"</p>
                    </div>`:""}
                </div>

                <!-- Pengaturan Denda Keterlambatan -->
                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 space-y-3 text-xs">
                    <div class="flex items-center justify-between">
                        <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">Status Denda Keterlambatan</span>
                        <span class="text-[10px] font-bold px-2.5 py-0.5 rounded-full ${t.isStopped?"bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-300":"bg-rose-100 text-rose-600 dark:bg-rose-950/60 dark:text-rose-400"}">
                            ${t.isStopped?"DIBEKUKAN (FIXED)":"BERJALAN OTOMATIS"}
                        </span>
                    </div>

                    <div class="grid grid-cols-2 gap-3 pt-1">
                        <div>
                            <span class="text-slate-400 block text-[10px]">Tarif Denda Harian:</span>
                            <span class="font-bold text-slate-800 dark:text-slate-100 font-mono mt-0.5 block">${t.rate}% / Hari</span>
                        </div>
                        <div>
                            <span class="text-slate-400 block text-[10px]">Akumulasi Denda:</span>
                            <span class="font-bold text-rose-600 dark:text-rose-400 font-mono mt-0.5 block">+${g(t.latePenalty)}</span>
                        </div>
                    </div>

                    <!-- Tombol Kontrol Denda -->
                    <div class="flex items-center gap-2 pt-2 border-t border-slate-200/60 dark:border-slate-700">
                        <button type="button" onclick="window.openTempoPenaltyModal('${e.orderId}')" class="flex-1 py-2 px-3 rounded-xl border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer">
                            <i class="fa-solid fa-percent text-xs"></i>
                            <span>Ubah Tarif Denda</span>
                        </button>
                        <button type="button" onclick="window.stopTempoPenalty('${e.orderId}', ${t.latePenalty}, ${t.isStopped})" class="flex-1 py-2 px-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer ${t.isStopped?"bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.3)]":"bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 hover:bg-rose-200"}">
                            <i class="fa-solid ${t.isStopped?"fa-play":"fa-pause"} text-xs"></i>
                            <span>${t.isStopped?"Lanjutkan Denda":"Bekukan Denda"}</span>
                        </button>
                    </div>
                </div>
            </div>
        `:""},tr=(e,t=null)=>{Ye();const a=j.find(m=>m.orderId===e);if(!a)return x("Data piutang tidak ditemukan!");const r=te(a),s=k("modal-tempo-payment"),o=k("modal-tempo-payment-box"),i=k("modal-tempo-payment-content");if(!s||!i)return;const n=Math.round(r.totalAkhir),p=!!(a.payment?.isPaylater||a.isPaylater||a.payment?.subMethod==="paylater");let d=0;if(p){const m=Array.isArray(a.payment?.paylaterSchedule)&&a.payment.paylaterSchedule.length>0?a.payment.paylaterSchedule:[];if(m.length>0){const b=m.reduce((v,S)=>v+(parseFloat(S.totalMonthly)||0),0),f=Math.max(0,parseFloat(a.payment?.tempoBalance)||0),h=Math.max(0,b-f);let w=0;for(const v of m){const S=parseFloat(v.totalMonthly)||0,$=w;if(w+=S,h<w){const B=Math.max(0,h-$);d=Math.round(Math.max(0,S-B));break}}}else parseFloat(a.payment?.paylaterMonthlyInstallment)>0&&(d=Math.round(parseFloat(a.payment.paylaterMonthlyInstallment)))}let c=n;t!=null&&!isNaN(t)?c=Math.min(n,Math.max(1,Math.round(t))):d>0&&d<n&&(c=Math.min(n,d)),_("modal-tempo-payment-content",`
        <!-- DRAG PULL INDICATOR (NATIVE MOBILE SHEET) -->
        <div class="pull-indicator sm:hidden"></div>

        <!-- HEADER MODAL -->
        <div class="px-5 sm:px-6 pt-3 sm:pt-5 pb-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0 bg-slate-50/70 dark:bg-slate-900/60">
            <div class="flex items-center gap-3">
                <div class="w-11 h-11 rounded-2xl flex items-center justify-center text-lg shrink-0 aspect-square shadow-xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);">
                    <i class="fa-solid fa-money-bill-wave"></i>
                </div>
                <div>
                    <h3 class="font-black text-base text-slate-800 dark:text-white tracking-tight">Catat Pembayaran Cicilan</h3>
                    <p class="text-xs text-slate-400">${u(a.customer?.name||"Pelanggan")} • #${u(a.orderId)}</p>
                </div>
            </div>
            <button onclick="window.closeTempoPaymentModal()" class="w-9 h-9 rounded-full bg-slate-100 hover:bg-rose-100 hover:text-rose-500 dark:bg-slate-800 dark:hover:bg-rose-950/40 dark:hover:text-rose-400 text-slate-500 flex items-center justify-center transition-all cursor-pointer active:scale-95" aria-label="Tutup Modal">
                <i class="fa-solid fa-xmark text-sm"></i>
            </button>
        </div>

        <form id="tempo-pay-form" onsubmit="window.submitTempoPayment(event, '${a.orderId}')" class="flex-1 flex flex-col overflow-hidden">
            <input type="hidden" id="tempo-pay-total-wajib" value="${n}">

            <div class="p-4 sm:p-6 space-y-4 overflow-y-auto flex-1 custom-scrollbar">
                <!-- KARTU RINGKASAN TAGIHAN -->
                <div class="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/60 text-xs space-y-1.5 shadow-2xs">
                    <div class="flex justify-between">
                        <span class="text-slate-500">Sisa Pokok Piutang:</span>
                        <span class="font-bold text-slate-800 dark:text-white">${g(r.sisa)}</span>
                    </div>
                    ${r.latePenalty>0?`
                    <div class="flex justify-between text-rose-600 dark:text-rose-400">
                        <span>Denda Keterlambatan (${r.daysLate} hari):</span>
                        <span class="font-bold font-mono">+${g(r.latePenalty)}</span>
                    </div>`:""}
                    <div class="flex justify-between pt-1.5 border-t border-amber-200 dark:border-amber-800 font-black">
                        <span class="text-amber-600 dark:text-amber-400">Total Wajib Bayar:</span>
                        <span class="text-amber-600 dark:text-amber-400 text-base font-mono">${g(n)}</span>
                    </div>
                    ${p?`
                    <div class="pt-2 border-t border-amber-200/60 dark:border-amber-800/40 flex items-center justify-between text-[11px] text-emerald-700 dark:text-emerald-400 font-bold">
                        <span class="flex items-center gap-1"><i class="fa-solid fa-bolt text-xs"></i> Putri PayLater (${a.payment?.paylaterTenor==="2m"?"2 Bulan":a.payment?.paylaterTenor==="3m"?"3 Bulan":"30 Hari"})</span>
                        <span class="font-mono">${g(a.payment?.paylaterMonthlyInstallment||d)}/bln</span>
                    </div>`:""}
                </div>

                <!-- INPUT NOMINAL PEMBAYARAN -->
                <div>
                    <label class="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">Nominal Cicilan (Rp) *</label>
                    <div class="relative">
                        <input 
                            type="number" 
                            id="tempo-pay-amount" 
                            required 
                            min="1" 
                            max="${n}" 
                            value="${c}" 
                            oninput="window.recalcTempoPayPreview()"
                            class="admin-input bg-slate-50 dark:bg-slate-900 font-black text-lg pr-24 text-emerald-600 rounded-2xl"
                        >
                        <button 
                            type="button" 
                            onclick="window.setQuickPayTempo(${n})" 
                            class="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl text-white font-black text-[11px] shadow-sm active:scale-95 transition-all cursor-pointer" 
                            style="background: var(--color-primary);"
                        >
                            Lunas
                        </button>
                    </div>

                    <!-- PRESET QUICK-PAY CHIPS -->
                    <div class="flex items-center gap-1.5 mt-2 overflow-x-auto pb-1 hide-scrollbar">
                        ${d>0&&d<n?`
                        <button type="button" onclick="window.setQuickPayTempo(${d})" class="px-2.5 py-1 rounded-xl text-[10px] font-black border border-emerald-300 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 active:scale-95 transition-all shrink-0 flex items-center gap-1">
                            <i class="fa-solid fa-bolt text-[9px]"></i> 1 Angsuran (${g(d)})
                        </button>
                        `:""}
                        <button type="button" onclick="window.setQuickPayTempo(${Math.round(n*.25)})" class="px-2.5 py-1 rounded-xl text-[10px] font-bold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 text-slate-600 dark:text-slate-300 active:scale-95 transition-all shrink-0">
                            25% (${g(Math.round(n*.25))})
                        </button>
                        <button type="button" onclick="window.setQuickPayTempo(${Math.round(n*.5)})" class="px-2.5 py-1 rounded-xl text-[10px] font-bold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 text-slate-600 dark:text-slate-300 active:scale-95 transition-all shrink-0">
                            50% (${g(Math.round(n*.5))})
                        </button>
                        <button type="button" onclick="window.setQuickPayTempo(${Math.round(n*.75)})" class="px-2.5 py-1 rounded-xl text-[10px] font-bold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 text-slate-600 dark:text-slate-300 active:scale-95 transition-all shrink-0">
                            75% (${g(Math.round(n*.75))})
                        </button>
                        <button type="button" onclick="window.setQuickPayTempo(${n})" class="px-2.5 py-1 rounded-xl text-[10px] font-black border text-white active:scale-95 transition-all shrink-0" style="background: var(--color-primary); border-color: var(--color-primary);">
                            100% Lunas
                        </button>
                    </div>
                </div>

                <!-- LIVE PREVIEW HASIL PEMBAYARAN -->
                <div id="tempo-pay-preview-box" class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 text-xs">
                    <!-- Diperbarui reaktif oleh window.recalcTempoPayPreview() -->
                </div>

                <!-- TANGGAL & METODE BAYAR -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                        <label class="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">Tanggal Bayar *</label>
                        <input type="date" id="tempo-pay-date" required value="${new Date().toISOString().split("T")[0]}" class="admin-input bg-slate-50 dark:bg-slate-900 text-xs font-bold rounded-2xl">
                    </div>

                    <div>
                        <label class="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">Metode Bayar *</label>
                        <select id="tempo-pay-method" class="admin-input bg-slate-50 dark:bg-slate-900 text-xs font-bold rounded-2xl cursor-pointer">
                            <option value="Kas Tunai Toko">Kas Tunai Toko</option>
                            <option value="Transfer Bank">Transfer Bank</option>
                            <option value="QRIS Toko">QRIS Toko</option>
                            <option value="Giro / Cek">Giro / Cek</option>
                        </select>
                    </div>
                </div>

                <!-- CATATAN / BUKTI PEMBAYARAN -->
                <div>
                    <label class="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">Catatan / No. Bukti Pembayaran</label>
                    <input type="text" id="tempo-pay-note" placeholder="Contoh: Transfer m-BCA ref 98765 / Titip Kasir" class="admin-input bg-slate-50 dark:bg-slate-900 text-xs rounded-2xl">
                </div>
            </div>

            <!-- STICKY ACTION FOOTER (48PX) -->
            <div class="p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shrink-0 flex items-center justify-end gap-2.5" style="padding-bottom: max(1rem, env(safe-area-inset-bottom))">
                <button type="button" onclick="window.closeTempoPaymentModal()" class="h-12 px-5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer active:scale-95">
                    Batal
                </button>
                <button type="submit" class="neo-btn h-12 px-6 rounded-xl text-white font-bold text-xs cursor-pointer flex items-center gap-2" style="background: var(--color-primary);">
                    <i class="fa-solid fa-check"></i>
                    <span>Simpan Pembayaran</span>
                </button>
            </div>
        </form>
    `),window.recalcTempoPayPreview(),pe(s,o),gt("tempoPayment")},ar=(e=!1)=>{const t=k("modal-tempo-payment"),a=k("modal-tempo-payment-box");t&&qt("tempoPayment",e,()=>Y(t,a))};window.openTempoPaymentModal=tr;window.closeTempoPaymentModal=ar;window.setQuickPayTempo=e=>{const t=k("tempo-pay-amount");t&&(t.value=Math.max(1,Math.round(e)),window.recalcTempoPayPreview())};window.recalcTempoPayPreview=()=>{const e=k("tempo-pay-amount"),t=k("tempo-pay-preview-box"),a=parseFloat(k("tempo-pay-total-wajib")?.value)||0;if(!e||!t)return;const r=parseFloat(e.value)||0,s=Math.max(0,a-r);r>=a&&a>0?t.innerHTML=`
            <div class="flex items-center justify-between text-emerald-600 dark:text-emerald-400 font-bold">
                <span>Status Setelah Pembayaran:</span>
                <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-700">
                    <i class="fa-solid fa-check-double"></i> OTOMATIS LUNAS
                </span>
            </div>
            <p class="text-[10px] text-emerald-500 mt-1">Seluruh sisa tagihan terbayar penuh dan pesanan akan otomatis ditandai Selesai.</p>
        `:t.innerHTML=`
            <div class="flex items-center justify-between text-slate-600 dark:text-slate-300 font-bold">
                <span>Sisa Tagihan Setelah Bayar:</span>
                <span class="font-mono text-slate-800 dark:text-white text-sm font-black">${g(s)}</span>
            </div>
            <p class="text-[10px] text-slate-400 mt-0.5">Sisa saldo piutang akan diperbarui secara otomatis.</p>
        `};window.submitTempoPayment=async(e,t)=>{e.preventDefault(),R("Mencatat Pembayaran...");try{const a=parseFloat(k("tempo-pay-amount")?.value)||0,r=k("tempo-pay-date")?.value||new Date().toISOString(),s=k("tempo-pay-method")?.value||"Kas Tunai Toko",o=(k("tempo-pay-note")?.value||"").trim();if(a<=0)return C(),x("Nominal cicilan harus lebih besar dari Rp 0!");const i=P.collection("freshmart_orders").doc(t),n=await i.get();if(!n.exists)return C(),x("Pesanan tidak ditemukan!");const p=n.data();let d=parseFloat(p.payment?.tempoBalance)||0,c=Math.max(0,d-a),m=p.payment?.installments||[];m.push({date:r?new Date(r).getTime():Date.now(),amount:a,method:s,note:o||`Cicilan (${s})`});let b={"payment.tempoBalance":c,"payment.installments":m};c<=0&&(b["payment.paymentStatus"]="lunas",b.status="Selesai"),await i.update(b);const f=!!(p.payment?.isPaylater||p.isPaylater||p.payment?.subMethod==="paylater");if(f){const v=(p.customer?.wa||p.customer?.phone||"").replace(/\D/g,""),S=v.startsWith("0")?"62"+v.slice(1):v;if(S){const $=is(p.payment,d,c,a);try{const B=P.collection("freshmart").doc("cms_data").collection("customers").doc(S);if($>0&&await P.runTransaction(async I=>{const A=await I.get(B);if(A.exists){const y=Math.max(0,parseFloat(A.data().paylaterUsed)||0),M=Math.max(0,y-$);I.update(B,{paylaterUsed:M})}}),$>0&&Array.isArray(l.customers)){const I=l.customers.find(A=>A&&(String(A.id)===S||String(A.phone).replace(/\D/g,"")===v||String(A.phone).replace(/\D/g,"")===S));I&&(I.paylaterUsed=Math.max(0,Math.max(0,parseFloat(I.paylaterUsed)||0)-$))}}catch(B){console.warn("[Tempo] Gagal pulihkan limit PayLater:",B)}}}if(c<=0)j=j.filter(v=>v.orderId!==t);else{const v=j.findIndex(S=>S.orderId===t);v!==-1&&(j[v].payment||(j[v].payment={}),j[v].payment.tempoBalance=c,j[v].payment.installments=m)}if(window.cachedPiutangOrders=j,Array.isArray(D)){let v=D.findIndex(S=>S.orderId===t);v!==-1&&(D[v].payment.tempoBalance=c,D[v].payment.installments=m,c<=0&&(D[v].payment.paymentStatus="lunas",D[v].status="Selesai"))}const h=k("modal-tempo-detail");if(h&&!h.classList.contains("hidden")&&Ia===t)if(c<=0)window.closeTempoDetailModal();else{const v=j.find(S=>S.orderId===t);v&&Ca(v)}let w=!1;if(s==="Kas Tunai Toko"&&typeof window.recordTempoPaymentToShift=="function"){const v=p.customer?.name||"Pelanggan";w=window.recordTempoPaymentToShift(a,t,`Cicilan #${t.split("-").pop()} (${v})`)}C(),window.closeTempoPaymentModal(),f?x("Cicilan dicatat & Limit Putri PayLater berhasil dipulihkan!"):w?x("Cicilan dicatat & otomatis masuk ke Kas Laci Kasir!"):x("Pembayaran cicilan berhasil dicatat!"),window.rAdmPiutang&&window.rAdmPiutang(),setTimeout(()=>{typeof window.showConfirm=="function"&&window.showConfirm(`Pembayaran cicilan Rp ${Math.round(a).toLocaleString("id-ID")} berhasil dicatat!<br><span class="text-xs text-slate-500">Cetak struk bukti pembayaran sekarang?</span>`,()=>{typeof window.printTempoReceiptDirect=="function"?window.printTempoReceiptDirect(t):typeof window.previewTempoReceipt=="function"&&window.previewTempoReceipt(t)},null,"Cetak Struk","Selesai")},350)}catch(a){C(),console.error("Gagal mencatat cicilan:",a),x("Gagal memproses cicilan: "+a.message)}};window.payTempoInstallment=e=>{window.openTempoPaymentModal(e)};const sr=e=>{Ye();const t=j.find(i=>i.orderId===e);if(!t)return x("Data piutang tidak ditemukan!");const a=te(t),r=k("modal-tempo-penalty"),s=k("modal-tempo-penalty-box"),o=k("modal-tempo-penalty-content");!r||!o||(_("modal-tempo-penalty-content",`
        <!-- DRAG PULL INDICATOR (NATIVE MOBILE SHEET) -->
        <div class="pull-indicator sm:hidden"></div>

        <!-- HEADER MODAL -->
        <div class="px-5 sm:px-6 pt-3 sm:pt-5 pb-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0 bg-slate-50/70 dark:bg-slate-900/60">
            <div class="flex items-center gap-3">
                <div class="w-11 h-11 rounded-2xl flex items-center justify-center text-lg shrink-0 aspect-square shadow-xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);">
                    <i class="fa-solid fa-percent"></i>
                </div>
                <div>
                    <h3 class="font-black text-base text-slate-800 dark:text-white tracking-tight">Atur Tarif Denda</h3>
                    <p class="text-xs text-slate-400">${u(t.customer?.name||"Pelanggan")} • Sisa: ${g(a.sisa)}</p>
                </div>
            </div>
            <button onclick="window.closeTempoPenaltyModal()" class="w-9 h-9 rounded-full bg-slate-100 hover:bg-rose-100 hover:text-rose-500 dark:bg-slate-800 dark:hover:bg-rose-950/40 dark:hover:text-rose-400 text-slate-500 flex items-center justify-center transition-all cursor-pointer active:scale-95" aria-label="Tutup Modal">
                <i class="fa-solid fa-xmark text-sm"></i>
            </button>
        </div>

        <form id="tempo-penalty-form" onsubmit="window.submitTempoPenalty(event, '${t.orderId}')" class="flex-1 flex flex-col overflow-hidden">
            <div class="p-4 sm:p-6 space-y-4 overflow-y-auto flex-1 custom-scrollbar">
                <!-- INFO DENDA SAAT INI -->
                <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs space-y-1">
                    <div class="flex justify-between">
                        <span class="text-slate-400">Tarif Saat Ini:</span>
                        <span class="font-bold text-slate-800 dark:text-white font-mono">${a.rate}% / Hari</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="text-slate-400">Hari Keterlambatan:</span>
                        <span class="font-bold text-slate-800 dark:text-white font-mono">${a.daysLate} Hari</span>
                    </div>
                    <div class="flex justify-between pt-1 border-t border-slate-200/60 dark:border-slate-700">
                        <span class="text-rose-500 font-bold">Total Denda Akumulasi:</span>
                        <span class="font-bold font-mono text-rose-600 dark:text-rose-400">+${g(a.latePenalty)}</span>
                    </div>
                </div>

                <!-- PRESET CHIPS TARIF DENDA -->
                <div>
                    <label class="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">Pilihan Cepat Tarif (% / Hari)</label>
                    <div class="grid grid-cols-4 gap-1.5">
                        <button type="button" onclick="document.getElementById('tempo-penalty-rate').value = 0" class="py-2 px-1 rounded-xl text-center text-xs font-bold border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-all active:scale-95">
                            0% (Bebas)
                        </button>
                        <button type="button" onclick="document.getElementById('tempo-penalty-rate').value = 0.5" class="py-2 px-1 rounded-xl text-center text-xs font-bold border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-all active:scale-95">
                            0.5%
                        </button>
                        <button type="button" onclick="document.getElementById('tempo-penalty-rate').value = 1" class="py-2 px-1 rounded-xl text-center text-xs font-bold border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-all active:scale-95">
                            1% (Std)
                        </button>
                        <button type="button" onclick="document.getElementById('tempo-penalty-rate').value = 2" class="py-2 px-1 rounded-xl text-center text-xs font-bold border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-all active:scale-95">
                            2%
                        </button>
                    </div>
                </div>

                <!-- INPUT PERSENTASE CUSTOM -->
                <div>
                    <label class="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">Tarif Persentase Baru (% / Hari) *</label>
                    <input 
                        type="number" 
                        step="0.01" 
                        min="0" 
                        id="tempo-penalty-rate" 
                        required 
                        value="${a.rate}" 
                        class="admin-input bg-slate-50 dark:bg-slate-900 font-black text-lg text-slate-800 dark:text-white rounded-2xl"
                    >
                </div>
            </div>

            <!-- STICKY ACTION FOOTER (48PX) -->
            <div class="p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shrink-0 flex items-center justify-end gap-2.5" style="padding-bottom: max(1rem, env(safe-area-inset-bottom))">
                <button type="button" onclick="window.closeTempoPenaltyModal()" class="h-12 px-5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer active:scale-95">
                    Batal
                </button>
                <button type="submit" class="neo-btn h-12 px-6 rounded-xl text-white font-bold text-xs cursor-pointer flex items-center gap-2" style="background: var(--color-primary);">
                    <i class="fa-solid fa-check"></i>
                    <span>Simpan Tarif Denda</span>
                </button>
            </div>
        </form>
    `),pe(r,s),gt("tempoPenalty"))},rr=(e=!1)=>{const t=k("modal-tempo-penalty"),a=k("modal-tempo-penalty-box");t&&qt("tempoPenalty",e,()=>Y(t,a))};window.openTempoPenaltyModal=sr;window.closeTempoPenaltyModal=rr;const or=()=>{Ye();const e=k("modal-tempo-confirmations"),t=k("modal-tempo-confirmations-box");!e||!t||(Ba(),pe(e,t),gt("tempoConfirmations"))},Jt=(e=!1)=>{const t=k("modal-tempo-confirmations"),a=k("modal-tempo-confirmations-box");!t||!a||qt("tempoConfirmations",e,()=>Y(t,a))};window.openTempoConfirmationsModal=or;window.closeTempoConfirmationsModal=Jt;const Ba=()=>{const e=k("modal-tempo-confirmations-content");if(!e)return;if(!q||q.length===0){e.innerHTML=`
            <div class="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-800/80">
                <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center text-xs font-black shadow-xs">
                        <i class="fa-solid fa-check"></i>
                    </div>
                    <div>
                        <h3 class="font-bold text-slate-800 dark:text-white text-sm">Konfirmasi Pembayaran Pelanggan</h3>
                        <p class="text-[10px] text-slate-400 font-semibold">Semua Pembayaran Telah Diproses</p>
                    </div>
                </div>
                <button type="button" onclick="window.closeTempoConfirmationsModal()" class="w-8 h-8 flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-rose-100 hover:text-rose-500 transition-colors active:scale-95 cursor-pointer">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div class="p-8 text-center space-y-2">
                <div class="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto text-2xl">
                    <i class="fa-solid fa-check-double"></i>
                </div>
                <p class="text-xs font-bold text-slate-700 dark:text-slate-200">Tidak Ada Antrean Bukti Transfer</p>
                <p class="text-[11px] text-slate-400">Semua konfirmasi pembayaran dari pelanggan telah disetujui atau ditolak.</p>
            </div>
        `;return}const t=q.map(a=>{const r=a.createdAt?new Date(a.createdAt).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}):"-",s=(a.customerPhone||"").replace(/\D/g,"");return`
            <div class="p-4 sm:p-5 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-3.5">
                <div class="flex items-start justify-between gap-3">
                    <div class="min-w-0">
                        <div class="flex items-center gap-2 flex-wrap">
                            <span class="px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-wider bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-300 border border-amber-300 dark:border-amber-700">
                                ${u(a.channel==="qris"?"QRIS Toko":a.bankName||"Transfer Bank")}
                            </span>
                            <span class="text-xs font-mono font-bold text-slate-400">Nota: #${u(a.orderId)}</span>
                        </div>
                        <h4 class="text-sm sm:text-base font-bold text-slate-800 dark:text-white mt-1 truncate">
                            ${u(a.customerName||"Pelanggan")}
                        </h4>
                        <div class="flex items-center gap-2 mt-0.5 text-xs text-slate-500">
                            ${s?`<a href="https://wa.me/${s}" target="_blank" class="text-emerald-600 font-bold hover:underline inline-flex items-center gap-1"><i class="fa-brands fa-whatsapp text-xs"></i> +${s}</a>`:""}
                            <span>•</span>
                            <span class="text-[11px] text-slate-400">${r}</span>
                        </div>
                    </div>
                    <div class="text-right shrink-0">
                        <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Nominal Ditransfer</p>
                        <p class="text-sm sm:text-base font-black text-emerald-600 dark:text-emerald-400 font-mono">${g(a.amount||0)}</p>
                    </div>
                </div>

                ${a.notes?`
                    <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-xs text-slate-600 dark:text-slate-300 italic">
                        <span class="font-bold not-italic text-slate-400">Catatan:</span> "${u(a.notes)}"
                    </div>
                `:""}

                <!-- FOTO BUKTI PEMBAYARAN -->
                ${a.buktiUrl?`
                    <div>
                        <p class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                            <i class="fa-solid fa-image text-slate-400"></i> Lampiran Bukti Transfer:
                        </p>
                        <div class="relative group rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 max-h-60 sm:max-h-72 bg-slate-100 dark:bg-slate-800 flex items-center justify-center shadow-2xs">
                            <img src="${u(we(a.buktiUrl))}" alt="Bukti Transfer" class="w-full max-h-60 sm:max-h-72 object-contain" onerror="this.src=''; this.alt='Gambar gagal dimuat';" loading="lazy">
                            <a href="${u(we(a.buktiUrl))}" target="_blank" rel="noopener noreferrer" class="absolute inset-0 bg-slate-900/50 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-1.5 text-white text-xs font-bold transition-opacity">
                                <i class="fa-solid fa-arrow-up-right-from-square"></i> Buka Ukuran Penuh
                            </a>
                        </div>
                    </div>
                `:`
                    <p class="text-[10px] font-semibold text-rose-500 italic"><i class="fa-solid fa-triangle-exclamation mr-1"></i> Tidak ada lampiran foto bukti transfer.</p>
                `}

                <!-- TOMBOL AKSI: APPROVE & REJECT -->
                <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end gap-2.5">
                    <button type="button" onclick="window.rejectTempoPaymentConfirmation('${u(a.id)}')" class="h-11 px-4 rounded-xl text-xs font-bold text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 border border-rose-200 dark:border-rose-900/50 transition-all active:scale-95 cursor-pointer flex items-center gap-1.5">
                        <i class="fa-solid fa-xmark"></i> Tolak
                    </button>
                    <button type="button" onclick="window.approveTempoPaymentConfirmation('${u(a.id)}')" class="neo-btn h-11 px-5 rounded-xl text-xs font-bold text-white cursor-pointer flex items-center gap-1.5" style="background: var(--color-primary);">
                        <i class="fa-solid fa-check"></i> Setujui Pembayaran
                    </button>
                </div>
            </div>
        `}).join("");e.innerHTML=`
        <!-- DRAG PULL MOBILE -->
        <div class="pull-indicator sm:hidden"></div>

        <div class="px-5 sm:px-6 pt-3.5 sm:pt-5 pb-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-800/80 shrink-0">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl text-white flex items-center justify-center text-xs font-black border border-slate-900 dark:border-slate-700 shadow-[1px_1px_0px_#0f172a] dark:shadow-[1px_1px_0px_#000000]" style="background: var(--color-primary);">
                    <i class="fa-solid fa-receipt text-sm"></i>
                </div>
                <div>
                    <h3 class="font-bold text-slate-800 dark:text-white text-sm sm:text-base">Antrean Konfirmasi Pembayaran Pelanggan</h3>
                    <p class="text-[10px] text-slate-400 font-semibold">${q.length} Bukti Transfer Menunggu Persetujuan</p>
                </div>
            </div>
            <button type="button" onclick="window.closeTempoConfirmationsModal()" class="w-8 h-8 flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-rose-100 hover:text-rose-500 transition-colors active:scale-95 cursor-pointer" title="Tutup">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </div>
        <div class="p-5 sm:p-6 pb-20 sm:pb-24 space-y-4 overflow-y-auto custom-scrollbar flex-1">
            ${t}
        </div>
    `},lr=async e=>{const t=(q||[]).find(s=>s.id===e);if(!t)return x("Data konfirmasi tidak ditemukan atau telah diproses.","warning");const a=parseFloat(t.amount)||0,r=t.orderId;if(!r||a<=0)return x("Data konfirmasi tidak valid.","error");ce("Setujui Pembayaran Pelanggan",`Apakah Anda yakin ingin menyetujui bukti pembayaran ${g(a)} dari ${t.customerName||"Pelanggan"} untuk nota #${r}?

Saldo piutang nota akan otomatis terpotong dan limit kredit PayLater pelanggan akan langsung dipulihkan secara real-time.`,async()=>{R("Memproses persetujuan pembayaran...");try{const s=P.collection("freshmart_orders").doc(r),o=await s.get();if(!o.exists)throw new Error("Nota pesanan #"+r+" tidak ditemukan di database.");const i=o.data(),n=Math.max(0,parseFloat(i.payment?.tempoBalance)||0),p=Math.max(0,n-a),d=Array.isArray(i.payment?.installments)?[...i.payment.installments]:[],c="INS-"+Date.now().toString(36).toUpperCase(),m=Date.now(),b=new Date(m).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"});d.push({id:c,amount:a,date:m,dateStr:b,method:t.channel==="qris"?"QRIS Toko":t.bankName||"Transfer Bank",note:(t.notes?t.notes+" ":"")+`(Konfirmasi Mandiri ${t.confirmId||e})`,recordedBy:auth.currentUser?.email||"Owner / Kasir",timestamp:m,proofUrl:t.buktiUrl||""});let f=null;if(Array.isArray(i.payment?.paylaterSchedule)&&i.payment.paylaterSchedule.length>0){let v=d.reduce((S,$)=>S+(parseFloat($.amount)||0),0);f=i.payment.paylaterSchedule.map(S=>{const $=parseFloat(S.totalMonthly)||0,B=v>=$;return B&&(v-=$),{...S,isPaid:B}})}const h={"payment.tempoBalance":p,"payment.installments":d,"payment.lastPaymentDate":m,"payment.tempoStatus":p<=0?"LUNAS":"DICICIL",updatedAt:m};if(f&&(h["payment.paylaterSchedule"]=f),p<=0&&(h["payment.paymentStatus"]="lunas",h["payment.isTempoPaid"]=!0,h.status="Selesai"),await s.update(h),!!(i.payment?.isPaylater||i.isPaylater||i.payment?.subMethod==="paylater")){const v=(i.customer?.wa||i.customer?.phone||t.customerPhone||"").replace(/\D/g,""),S=v.startsWith("0")?"62"+v.slice(1):v;if(S){const $=is(i.payment,n,p,a);if($>0)try{const B=P.collection("freshmart").doc("cms_data").collection("customers").doc(S);if(await P.runTransaction(async I=>{const A=await I.get(B);if(A.exists){const y=Math.max(0,parseFloat(A.data().paylaterUsed)||0),M=Math.max(0,y-$);I.update(B,{paylaterUsed:M,updatedAt:m})}}),Array.isArray(l.customers)){const I=l.customers.find(A=>A&&(String(A.id)===S||String(A.phone).replace(/\D/g,"")===v||String(A.phone).replace(/\D/g,"")===S));I&&(I.paylaterUsed=Math.max(0,Math.max(0,parseFloat(I.paylaterUsed)||0)-$))}if(currentMember&&(currentMember.phone||currentMember.id)){const I=(currentMember.phone||currentMember.id).toString().replace(/\D/g,"");(I===v||I===S)&&(currentMember.paylaterUsed=Math.max(0,Math.max(0,parseFloat(currentMember.paylaterUsed)||0)-$))}}catch(B){console.warn("[Tempo] Gagal pulihkan limit PayLater:",B)}}}await P.collection("tempo_payment_confirmations").doc(e).update({status:"approved",approvedAt:m,approvedBy:auth.currentUser?.email||"Owner / Kasir"}),q=q.filter(v=>v.id!==e),C(),x(`Pembayaran ${g(a)} untuk nota #${r} disetujui! Saldo diperbarui & limit dipulihkan.`,"success"),q.length>0?Ba():Jt(),await Qt()}catch(s){C(),console.error("[Tempo] Gagal setujui pembayaran:",s),x("Gagal menyetujui pembayaran: "+s.message,"error")}},"Ya, Setujui","Batal")},ir=async e=>{if(!(q||[]).find(r=>r.id===e))return x("Data konfirmasi tidak ditemukan.","warning");const a=prompt('Masukkan alasan penolakan bukti pembayaran (misal: "Dana belum masuk mutasi bank" / "Bukti transfer buram/tidak terbaca"):',"Dana belum masuk ke mutasi rekening toko");if(a!==null){R("Menolak konfirmasi pembayaran...");try{const r=Date.now();await P.collection("tempo_payment_confirmations").doc(e).update({status:"rejected",rejectReason:a.trim()||"Ditolak oleh admin toko",rejectedAt:r,rejectedBy:auth.currentUser?.email||"Owner / Kasir"}),q=q.filter(s=>s.id!==e),C(),x("Konfirmasi pembayaran telah ditolak.","info"),q.length>0?Ba():Jt(),await Qt()}catch(r){C(),console.error("[Tempo] Gagal tolak pembayaran:",r),x("Gagal menolak konfirmasi: "+r.message,"error")}}};window.approveTempoPaymentConfirmation=lr;window.rejectTempoPaymentConfirmation=ir;window.submitTempoPenalty=async(e,t)=>{e.preventDefault();const a=k("tempo-penalty-rate")?.value;let r=parseFloat(a);if(isNaN(r)||r<0)return x("Persentase tidak valid!");R("Menyimpan Denda...");try{await P.collection("freshmart_orders").doc(t).update({"payment.tempoPenaltyRate":r});const s=j.find(o=>o.orderId===t);s&&s.payment&&(s.payment.tempoPenaltyRate=r),C(),window.closeTempoPenaltyModal(),x("Persentase denda berhasil diperbarui!"),window.rAdmPiutang()}catch(s){C(),x("Gagal mengubah denda: "+s.message)}};window.editTempoPenalty=e=>{window.openTempoPenaltyModal(e)};window.stopTempoPenalty=(e,t,a)=>{let r="Konfirmasi Denda",s=a?"Lanjutkan perhitungan denda otomatis berjalan?":"Hentikan denda berjalan sekarang? (Nominal denda akan dibekukan di "+g(t)+")";ce(r,s,async()=>{R("Menyimpan...");try{await P.collection("freshmart_orders").doc(e).update({"payment.tempoPenaltyStopped":!a,"payment.tempoFixedPenalty":a?null:t});const i=j.find(n=>n.orderId===e);i&&i.payment&&(i.payment.tempoPenaltyStopped=!a,i.payment.tempoFixedPenalty=a?null:t),x(a?"Denda dilanjutkan!":"Denda berhasil dibekukan!"),window.rAdmPiutang()}catch(i){x("Gagal mengubah status denda: "+i.message)}C()},a?"Lanjutkan":"Bekukan",!a)};window.previewTempoReceipt=async e=>{R("Memuat data struk...");try{const t=await P.collection("freshmart_orders").doc(e).get();if(!t.exists)return C(),x("Pesanan tidak ditemukan");const a=t.data();if(C(),typeof window.printTempoReceiptDirect=="function"){window.lastPrintedOrder={...a,orderId:a.orderId||e},window.printTempoReceiptDirect(a.orderId||e);return}const r=a.dateString?new Date(a.dateString).toLocaleString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}):"",s=l.store?.name||"Toko Putri",o=l.store?.wa||"",i=(f,h,w=32)=>{const v=w-f.length-h.length;return f+(v>0?" ".repeat(v):" ")+h};let n=`<div class="text-center font-bold" style="font-size:13px;margin-bottom:2px;">${u(s)}</div>`;o&&(n+=`<div class="text-center" style="margin-bottom:4px;">WA: ${u(o)}</div>`),n+=`<div class="text-center font-bold uppercase my-2" style="font-size:14px;border-bottom:1px solid #000;border-top:1px solid #000;padding:2px 0;">NOTA TEMPO${a.payment?.paymentStatus==="lunas"?" - LUNAS":""}</div>`,n+=`<div style="white-space:pre;">Order: #${a.orderId}</div><div style="white-space:pre;">Tgl  : ${r}</div><div style="white-space:pre;">Plg  : ${u(a.customer?.name||"Guest").substring(0,20)}</div>`,a.payment?.tempoDueDate&&(n+=`<div style="white-space:pre;">J.Tmp: ${new Date(a.payment.tempoDueDate).toLocaleDateString("id-ID")}</div>`),n+='<div class="border-b border-dashed border-black my-2"></div>';let p=0;if((a.items||[]).forEach(f=>{let h=f.variantName?` (${u(f.variantName)}${f.colorCode?" "+u(f.colorCode):""})`:"";const w=(u(f.name)+h+(f.poTime?" [PO]":"")).substring(0,32),v=f.effectivePrice!==void 0?f.effectivePrice:f.price||0,S=`${parseFloat(f.qty)} ${u(f.unit||"pcs")} x ${v.toLocaleString("id-ID")}`,$=(parseFloat(f.qty)*v).toLocaleString("id-ID");n+=`<div style="white-space:pre-wrap;font-weight:bold;word-break:break-all;">${w}</div><div style="white-space:pre;font-size:11px;">${i(S,$)}</div>`,f.poTime&&(n+=`<div style="white-space:pre;font-size:10px;font-style:italic;color:#4b5563;">* Estimasi PO: ${u(f.poTime)}</div>`),p+=parseFloat(f.qty)*v}),n+='<div class="border-b border-dashed border-black my-2"></div>',n+=`<div style="white-space:pre;font-weight:bold;">${i("Subtotal",p.toLocaleString("id-ID"))}</div>`,a.payment?.grandTotal&&a.payment.grandTotal!==p){let f=a.payment.grandTotal-p;f>0?n+=`<div style="white-space:pre;">${i("Ongkir/Biaya",f.toLocaleString("id-ID"))}</div>`:n+=`<div style="white-space:pre;">${i("Diskon",Math.abs(f).toLocaleString("id-ID"))}</div>`}n+=`<div style="white-space:pre;font-weight:bold;margin-top:4px;">${i("TOTAL KREDIT",(a.payment?.grandTotal||p).toLocaleString("id-ID"))}</div>`,n+='<div class="border-b border-black my-2" style="border-width:1px;"></div>';let d=0;a.payment?.installments&&a.payment.installments.length>0&&(n+='<div style="white-space:pre;font-weight:bold;margin-bottom:2px;">HISTORI CICILAN:</div>',a.payment.installments.forEach((f,h)=>{let w=new Date(f.date).toLocaleDateString("id-ID",{day:"2-digit",month:"short"}),v=f.amount.toLocaleString("id-ID");n+=`<div style="white-space:pre;">${i(`${h+1}. ${w}`,v)}</div>`,d+=f.amount}),n+=`<div style="white-space:pre;font-weight:bold;margin-top:2px;">${i("TOTAL DIBAYAR",d.toLocaleString("id-ID"))}</div>`,n+='<div class="border-b border-dashed border-black my-2"></div>');const c=te(a);n+=`<div style="white-space:pre;font-weight:bold;">${i("SISA POKOK",c.sisa.toLocaleString("id-ID"))}</div>`,c.latePenalty>0&&(n+=`<div style="white-space:pre;">${i("DENDA",Math.round(c.latePenalty).toLocaleString("id-ID"))}</div>`),n+='<div class="border-b border-black my-2" style="border-width:1px;"></div>',n+=`<div style="white-space:pre;font-weight:black;">${i("SISA TAGIHAN",Math.round(c.totalAkhir).toLocaleString("id-ID"))}</div>`,(a.items||[]).some(f=>f.poTime&&f.poTime!=="")&&(n+='<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre-wrap;font-size:9px;text-align:center;line-height:1.2;font-style:italic;color:#4b5563;margin-bottom:4px;">* Catatan: Untuk pesanan gabungan, produk PO akan dikirimkan menyusul tanpa dikenakan biaya tambahan.</div>'),n+='<div class="border-b border-dashed border-black my-2"></div><div class="text-center my-2" style="font-size:10px;">Terima kasih atas kepercayaannya.</div><div class="border-b border-dashed border-black my-2"></div><div style="height:20px;"></div>',_("receipt-paper-content",n);const b=k("receipt-preview-modal");b&&b.classList.contains("hidden")&&gt("receipt"),We("receipt-preview-modal"),setTimeout(()=>{k("receipt-preview-modal")&&k("receipt-preview-modal").classList.remove("opacity-0"),k("receipt-preview-modal-box")&&k("receipt-preview-modal-box").classList.remove("scale-95")},10)}catch(t){C(),x("Gagal memuat struk: "+t.message)}};window.markTempoPaid=async e=>{ce("Konfirmasi Pelunasan","Tandai seluruh sisa tagihan tempo pesanan ini sebagai LUNAS?",async()=>{try{if(await P.collection("freshmart_orders").doc(e).update({"payment.paymentStatus":"lunas","payment.tempoBalance":0,status:"Selesai"}),x("Tagihan tempo berhasil dilunasi!"),Array.isArray(D)){let t=D.findIndex(a=>a.orderId===e);t!==-1&&(D[t].payment.paymentStatus="lunas",D[t].payment.tempoBalance=0,D[t].status="Selesai")}window.rAdmPiutang()}catch(t){x("Gagal melunasi tagihan: "+t.message)}},"Ya, Lunasi",!1)};window.sendSmartTempoWA=e=>{const t=j.find(v=>v.orderId===e);if(!t)return x("Data pesanan tidak ditemukan!");const a=t.customer?.wa||"",r=mt(a);if(!r)return x("Nomor WhatsApp pelanggan belum valid!");const s=te(t),o=l.store?.name||"Toko Putri",i=t.customer?.name||"Pelanggan",n=t.dateString?new Date(t.dateString).toLocaleDateString("id-ID",{day:"2-digit",month:"long",year:"numeric"}):"-",p=s.dueDate?new Date(s.dueDate).toLocaleDateString("id-ID",{day:"2-digit",month:"long",year:"numeric"}):"-";let d="";l.banks&&l.banks.length>0?d=l.banks.map(v=>`• *Bank ${v.bankName}*: ${v.bankAccount} (a.n ${v.bankOwner})`).join(`
`):d="Silakan hubungi admin/kasir untuk konfirmasi nomor rekening transfer.";const c=!!(t.payment?.isPaylater||t.isPaylater||t.payment?.subMethod==="paylater"),m=(parseFloat(t.payment?.paylaterAdminFee)||0)+(parseFloat(t.payment?.paylaterServiceFee)||0),b=parseFloat(t.payment?.paylaterUsed)||Math.max(0,s.sisa-m),f=parseFloat(t.payment?.paylaterMonthlyInstallment)||0,h=parseInt(t.payment?.paylaterMonths)||(t.payment?.paylaterTenor==="2m"?2:t.payment?.paylaterTenor==="3m"?3:1);let w="";if(s.isLate)w=`*PEMBERITAHUAN JATUH TEMPO ${c?"PUTRI PAYLATER":"TEMPO"} - ${o.toUpperCase()}*

Yth. Bpk/Ibu *${i}*,
Kami menginformasikan bahwa tagihan pembelian ${c?"Putri PayLater":"Tempo"} Anda telah *MELEWATI BATAS JATUH TEMPO* (${s.daysLate} hari keterlambatan).

📋 *Rincian Tagihan:*
• No. Pesanan: #${t.orderId}
`+(c?`• Layanan: Putri PayLater (${h>1?h+" Bulan":"30 Hari"})
`:"")+`• Tgl. Transaksi: ${n}
• Tgl. Jatuh Tempo: ${p}
`+(c&&m>0?`• Pokok Belanja: ${g(b)}
• Biaya PayLater: +${g(m)}
`:`• Sisa Pokok: ${g(s.sisa)}
`)+(c&&f>0&&h>1?`• Angsuran per Bulan (${h}x): ${g(f)}/bln
`:"")+(s.latePenalty>0?`• Denda (${s.rate}%/hari): ${g(s.latePenalty)}
`:"")+`• *TOTAL HARUS DIBAYAR: ${g(s.totalAkhir)}*

💳 *Pembayaran dapat ditransfer ke rekening resmi kami:*
${d}

Mohon kesediaannya untuk segera melakukan pelunasan dan mengirimkan bukti transfer ke WhatsApp ini.`+(c?" Limit belanja PayLater Anda akan otomatis pulih kembali setelah tagihan terlunasi.":"")+" Terima kasih banyak atas kerjasamanya. 🙏";else if(s.isDueSoon){let v=s.daysLeft<=0?"hari ini":`${s.daysLeft} hari lagi`;w=`*PENGINGAT JATUH TEMPO ${c?"PUTRI PAYLATER":"TEMPO"} - ${o.toUpperCase()}*

Halo Bpk/Ibu *${i}*,
Semoga sehat dan sukses selalu. Kami dari *${o}* menginfokan bahwa tagihan pembelian ${c?"Putri PayLater":"Tempo"} Anda akan jatuh tempo *${v}* (${p}).

📋 *Rincian Tagihan:*
• No. Pesanan: #${t.orderId}
`+(c?`• Layanan: Putri PayLater (${h>1?h+" Bulan":"30 Hari"})
`:"")+`• Tgl. Transaksi: ${n}
• Tgl. Jatuh Tempo: ${p}
`+(c&&m>0?`• Pokok Belanja: ${g(b)}
• Biaya PayLater: +${g(m)}
`:`• Sisa Pokok: ${g(s.sisa)}
`)+(c&&f>0&&h>1?`• Angsuran per Bulan (${h}x): ${g(f)}/bln
`:"")+`• *Total Tagihan: ${g(s.totalAkhir)}*

💳 *Pembayaran dapat ditransfer ke rekening resmi kami:*
${d}

Apabila sudah melakukan pembayaran, mohon abaikan pesan ini atau kirimkan bukti transfer ke nomor ini.`+(c?" Limit PayLater Anda akan langsung terisi kembali setelah konfirmasi.":"")+` Terima kasih atas kepercayaannya berbelanja di ${o}. 🙏`}else w=`*INFORMASI TAGIHAN ${c?"PUTRI PAYLATER":"TEMPO"} - ${o.toUpperCase()}*

Halo Bpk/Ibu *${i}*,
Berikut informasi rincian tagihan pembelian ${c?"Putri PayLater":"Tempo"} Anda di *${o}*:

📋 *Rincian Tagihan:*
• No. Pesanan: #${t.orderId}
`+(c?`• Layanan: Putri PayLater (${h>1?h+" Bulan":"30 Hari"})
`:"")+`• Tgl. Transaksi: ${n}
• Tgl. Jatuh Tempo: ${p} (tersisa ${s.daysLeft} hari)
`+(c&&m>0?`• Pokok Belanja: ${g(b)}
• Biaya PayLater: +${g(m)}
`:`• Sisa Pokok: ${g(s.sisa)}
`)+(c&&f>0&&h>1?`• Angsuran per Bulan (${h}x): ${g(f)}/bln
`:"")+`• *TOTAL TAGIHAN: ${g(s.totalAkhir)}*

💳 *Rekening Pembayaran Resmi:*
${d}

`+(c?`✨ Bayar tagihan tepat waktu untuk menjaga skor & limit kredit PayLater Anda tetap prima.

`:"")+`Terima kasih telah menjadi pelanggan setia ${o}. 🙏`;typeof window.openWhatsApp=="function"?window.openWhatsApp(r,w):ss(r,w)};window.sendConsolidatedTempoWA=e=>{const t=String(e||"").trim();if(!t)return x("Identitas pelanggan tidak valid!");const a=j.filter(f=>{const h=String(f.customer?.phone||f.customer?.wa||"").replace(/\D/g,""),w=String(f.customer?.name||"").toLowerCase().trim(),v=t.replace(/\D/g,"");return!!(v.length>=8&&h.includes(v)||w&&t.toLowerCase().includes(w))});if(a.length===0)return x("Tidak ada nota piutang aktif untuk pelanggan ini.");const r=a[0].customer||{},s=r.wa||r.phone||"",o=mt(s);if(!o)return x("Nomor WhatsApp pelanggan belum valid!");const i=l.store?.name||"Toko Putri",n=r.name||"Pelanggan";let p="";l.banks&&l.banks.length>0?p=l.banks.map(f=>`• *Bank ${f.bankName}*: ${f.bankAccount} (a.n ${f.bankOwner})`).join(`
`):p="Silakan hubungi admin/kasir untuk konfirmasi nomor rekening transfer.";let d=0,c=0,m=a.map((f,h)=>{const w=te(f);d+=w.totalAkhir,c+=w.latePenalty,w.isLate;const v=w.dueDate?new Date(w.dueDate).toLocaleDateString("id-ID",{day:"2-digit",month:"short",year:"numeric"}):"-";let S=w.isLate?`TERLAMBAT ${w.daysLate} HARI`:w.isDueSoon?`H-${w.daysLeft}`:"Berjalan",$=`*${h+1}. Nota #${f.orderId}* (${S})
   • Jatuh Tempo: ${v}
   • Sisa Pokok: ${g(w.sisa)}
`;return w.latePenalty>0&&($+=`   • Denda: ${g(w.latePenalty)}
`),$+=`   • *Subtotal Wajib Bayar: ${g(w.totalAkhir)}*`,$}).join(`

`),b=`*REKAPITULASI KARTU PIUTANG - ${i.toUpperCase()}*

Yth. Bpk/Ibu *${n}*,
Berikut rincian seluruh tagihan tempo Anda yang masih aktif (${a.length} Nota) di *${i}*:

${m}

══════════════════════
💰 *TOTAL KESELURUHAN PIUTANG: ${g(d)}*
`+(c>0?`(Termasuk total denda: ${g(c)})
`:"")+`══════════════════════

💳 *Pembayaran dapat ditransfer ke rekening resmi kami:*
${p}

Mohon kesediaannya untuk melakukan pembayaran dan mengirimkan bukti transfer ke WhatsApp ini. Terima kasih banyak atas kepercayaan dan kerjasamanya. 🙏`;typeof window.openWhatsApp=="function"?window.openWhatsApp(o,b):ss(o,b)};window.switchTempoMainTab=e=>{oe=e,La()};window.setTempoFilter=e=>{he=e,La()};window.setInstallmentPeriod=e=>{ae=e,zt()};window.setInstallmentMethod=e=>{ue=e,zt()};window.onTempoSearch=e=>{fe=e||"";const t=k("tempo-search-clear-btn");t&&t.classList.toggle("hidden",!fe.trim()),oe==="orders"?nr():zt()};const nr=()=>{const e=k("tempo-cards-container");if(!e)return;let t=j.filter(a=>{const r=te(a);if(he==="late"&&!r.isLate||he==="due_soon"&&(!r.isDueSoon||r.isLate)||he==="active"&&(r.isLate||r.isDueSoon))return!1;if(fe.trim()){const s=fe.trim().toLowerCase(),o=(a.customer?.name||"").toLowerCase(),i=(a.customer?.wa||"").toLowerCase(),n=(a.orderId||"").toLowerCase();if(!o.includes(s)&&!i.includes(s)&&!n.includes(s))return!1}return!0});if(t.length===0){e.innerHTML=`
            <div class="col-span-full bg-white dark:bg-slate-800 p-8 text-center rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <div class="w-16 h-16 bg-slate-100 dark:bg-slate-700/50 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-3">
                    <i class="fa-solid fa-filter-circle-xmark text-2xl"></i>
                </div>
                <h4 class="font-bold text-slate-700 dark:text-slate-200 text-sm uppercase tracking-wider">Tidak Ada Data</h4>
                <p class="text-slate-500 dark:text-slate-400 mt-1 text-xs font-medium">Tidak ada tagihan yang cocok dengan filter atau kata kunci pencarian.</p>
            </div>
        `;return}e.innerHTML=t.map(a=>Ro(a)).join("")},Ro=e=>{const t=te(e),a=mt(e.customer?.wa||""),r=Ma(e.customer?.name||"Pelanggan"),s=t.dueDate?ct(t.dueDate):"-",o=u(e.customer?.phone||e.customer?.wa||e.customer?.name||""),i=!!(e.payment?.isPaylater||e.isPaylater||e.payment?.subMethod==="paylater"),n=(parseFloat(e.payment?.paylaterAdminFee)||0)+(parseFloat(e.payment?.paylaterServiceFee)||0),p=parseFloat(e.payment?.paylaterUsed)||Math.max(0,t.sisa-n),d=parseFloat(e.payment?.paylaterMonthlyInstallment)||0,c=parseInt(e.payment?.paylaterMonths)||(e.payment?.paylaterTenor==="2m"?2:e.payment?.paylaterTenor==="3m"?3:1);let m="",b="border-slate-200 dark:border-slate-700/80";return t.isLate?(b="border-rose-400 dark:border-rose-600 shadow-[0_0_15px_rgba(225,29,72,0.12)]",m=`<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-rose-50 text-rose-600 dark:bg-rose-950/50 dark:text-rose-400 border border-rose-200 dark:border-rose-800 shadow-2xs whitespace-nowrap"><i class="fa-solid fa-triangle-exclamation text-[8px]"></i> Terlambat ${t.daysLate} Hari</span>`):t.isDueSoon?(b="border-amber-400 dark:border-amber-600 shadow-[0_0_15px_rgba(245,158,11,0.12)]",m=`<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300 border border-amber-200 dark:border-amber-800 shadow-2xs whitespace-nowrap"><i class="fa-solid fa-clock text-[8px]"></i> H-${t.daysLeft<=0?"0 (Hari Ini)":t.daysLeft}</span>`):m=`<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-[var(--color-primary)] border shadow-2xs whitespace-nowrap" style="background: rgba(var(--color-primary-rgb), 0.08); border-color: rgba(var(--color-primary-rgb), 0.25);"><i class="fa-regular fa-clock text-[9px]"></i> Sisa ${t.daysLeft} Hari</span>`,`
    <div class="bg-white dark:bg-slate-800 p-4 sm:p-5 rounded-3xl border ${b} relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 shadow-sm flex flex-col justify-between cursor-pointer" onclick="window.openTempoDetailModal('${e.orderId}')">
        <div>
            <!-- BARIS 1: TOP BAR KARTU (NOTA & STATUS SISA HARI / JATUH TEMPO) -->
            <div class="flex items-center justify-between gap-2 mb-3.5 pb-2.5 border-b border-slate-100 dark:border-slate-700/60">
                <span class="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                    <i class="fa-solid fa-receipt text-slate-400 text-[10px]"></i> #${e.orderId}
                </span>
                <div class="shrink-0">
                    ${m}
                </div>
            </div>

            <!-- BARIS 2: AVATAR MONOGRAM, NAMA PELANGGAN, WA & BADGES -->
            <div class="flex items-start gap-3 mb-3">
                <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-xs font-black shrink-0 aspect-square shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);">
                    ${r}
                </div>
                <div class="min-w-0 flex-1">
                    <h3 class="font-bold text-slate-800 dark:text-slate-100 uppercase text-sm truncate">${u(e.customer?.name||"Anonim")}</h3>
                    <div class="flex items-center gap-2 mt-1 flex-wrap" onclick="event.stopPropagation()">
                        <p class="text-[11px] font-bold text-slate-500 flex items-center gap-1">
                            <i class="fa-brands fa-whatsapp text-emerald-500"></i>
                            <a href="javascript:void(0)" onclick="window.sendSmartTempoWA('${e.orderId}')" class="hover:underline text-slate-600 dark:text-slate-300 font-mono">+${u(a||"-")}</a>
                        </p>
                        <span class="text-[9px] font-bold px-2 py-0.5 rounded-lg uppercase tracking-wider whitespace-nowrap inline-flex items-center border ${e.customerType==="Member"?"text-amber-600 bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800":"text-slate-500 bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700"}">
                            ${e.customerType==="Member"?'<i class="fa-solid fa-star text-amber-400 mr-1"></i>Member':'<i class="fa-solid fa-user mr-1"></i>Umum'}
                        </span>
                        ${e.payment?.isPaylater||e.isPaylater||e.payment?.subMethod==="paylater"?`
                            <span class="text-[9px] font-black px-2 py-0.5 rounded-lg uppercase tracking-wider whitespace-nowrap inline-flex items-center border border-emerald-300 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 gap-1">
                                <i class="fa-solid fa-bolt text-emerald-500"></i>PayLater (${e.payment?.paylaterTenor==="2m"?"2 Bulan":e.payment?.paylaterTenor==="3m"?"3 Bulan":"30 Hari"})
                            </span>
                        `:""}
                    </div>
                </div>
            </div>
            
            <!-- RINGKASAN JATUH TEMPO, POKOK & BIAYA -->
            <div class="space-y-1.5 mb-3 bg-slate-50 dark:bg-slate-900/50 p-3 rounded-2xl border border-slate-100 dark:border-slate-700/50">
                <div class="flex justify-between items-center text-xs">
                    <span class="font-bold text-slate-500">Jatuh Tempo</span>
                    <span class="font-bold font-mono ${t.isLate?"text-rose-600":t.isDueSoon?"text-amber-600":"text-slate-700 dark:text-slate-300"}">${s}</span>
                </div>
                ${i&&n>0?`
                <div class="flex justify-between items-center text-xs">
                    <span class="font-bold text-slate-500">Pokok Belanja</span>
                    <span class="font-bold text-slate-700 dark:text-slate-300 font-mono">${g(p)}</span>
                </div>
                <div class="flex justify-between items-center text-xs">
                    <span class="font-bold text-slate-500">Biaya PayLater (${c>1?c+" Bulan":"30 Hari"})</span>
                    <span class="font-bold text-emerald-600 dark:text-emerald-400 font-mono">+${g(n)}</span>
                </div>
                ${d>0&&c>1?`
                <div class="flex justify-between items-center text-xs pt-1 border-t border-slate-200/50 dark:border-slate-700/50">
                    <span class="font-bold text-slate-500">Angsuran / Bulan (${c}x)</span>
                    <span class="font-bold text-[var(--color-primary)] font-mono">${g(d)}/bln</span>
                </div>`:""}
                `:`
                <div class="flex justify-between items-center text-xs">
                    <span class="font-bold text-slate-500">Sisa Pokok</span>
                    <span class="font-bold text-slate-700 dark:text-slate-300 font-mono">${g(t.sisa)}</span>
                </div>
                `}
                ${t.isLate?`
                <div class="flex justify-between items-center text-xs ${t.isStopped?"text-slate-500":"text-rose-600"}">
                    <span class="font-bold">Denda (${t.rate}%/hari) ${t.isStopped?'<span class="text-[9px] bg-slate-200 dark:bg-slate-700 px-1 py-0.5 rounded ml-1">STOPPED</span>':""}</span>
                    <span class="font-bold font-mono">+${g(t.latePenalty)}</span>
                </div>`:""}
            </div>
            
            <!-- TOTAL SISA TAGIHAN HIGHLIGHT -->
            <div class="flex justify-between items-center ${t.isLate?"bg-rose-50 text-rose-600 dark:bg-rose-950/30 dark:text-rose-400 border-rose-100 dark:border-rose-900/40":"bg-slate-100 dark:bg-slate-700/60 text-slate-800 dark:text-white border-slate-200 dark:border-slate-700"} p-3 rounded-2xl border mb-3">
                <span class="text-[10px] font-black uppercase tracking-wider">Total Tagihan:</span>
                <span class="text-sm font-black font-mono tracking-tight">${g(t.totalAkhir)}</span>
            </div>
        </div>
        
        <!-- ACTION BAR TOUCH ERGONOMIS 2-BARIS LEGA -->
        <div class="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-700/60" onclick="event.stopPropagation()">
            <!-- Baris 1: Rincian, Nota A4, Struk, Tagih WA -->
            <div class="grid grid-cols-4 gap-1.5">
                <button type="button" onclick="window.openTempoDetailModal('${e.orderId}')" class="btn-native-action h-10 sm:h-9 px-1 rounded-xl font-bold text-[11px] transition-all active:scale-95 border flex flex-col sm:flex-row items-center justify-center gap-1 cursor-pointer shadow-2xs text-center" style="background: rgba(var(--color-primary-rgb), 0.08); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25);" title="Buka Rincian Nota &amp; Histori">
                    <i class="fa-solid fa-eye text-xs"></i>
                    <span class="truncate">Rincian</span>
                </button>
                <button type="button" onclick="if(typeof window.openDocPreview==='function') window.openDocPreview('tempo_invoice', '${e.orderId}');" class="btn-native-action h-10 sm:h-9 px-1 rounded-xl bg-blue-50 hover:bg-blue-100 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 flex flex-col sm:flex-row items-center justify-center gap-1 text-[11px] font-bold transition-all cursor-pointer shadow-2xs active:scale-95 text-center" title="Cetak Nota Resmi A4 / PDF / WA">
                    <i class="fa-solid fa-file-invoice text-xs"></i>
                    <span class="truncate">Nota A4</span>
                </button>
                <button type="button" onclick="if(typeof window.printTempoReceiptDirect==='function'){window.printTempoReceiptDirect('${e.orderId}');}else{window.previewTempoReceipt('${e.orderId}');}" class="btn-native-action h-10 sm:h-9 px-1 bg-amber-500 hover:bg-amber-600 text-white rounded-xl flex flex-col sm:flex-row items-center justify-center gap-1 text-[11px] font-bold shadow-2xs transition-all active:scale-95 cursor-pointer text-center" title="Cetak Struk Thermal Nota Tempo">
                    <i class="fa-solid fa-print text-xs"></i>
                    <span class="truncate">Struk</span>
                </button>
                <button type="button" onclick="window.sendSmartTempoWA('${e.orderId}')" class="btn-native-action h-10 sm:h-9 px-1 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl flex flex-col sm:flex-row items-center justify-center gap-1 text-[11px] font-bold transition-all cursor-pointer shadow-2xs active:scale-95 text-center" title="Kirim Tagihan Otomatis WhatsApp">
                    <i class="fa-brands fa-whatsapp text-xs"></i>
                    <span class="truncate">WA</span>
                </button>
            </div>

            <!-- Baris 2: Cicil, Lunas, & Kartu Pelanggan -->
            <div class="grid grid-cols-3 gap-1.5">
                <button type="button" onclick="window.openTempoPaymentModal('${e.orderId}')" class="btn-native-action h-10 sm:h-9 bg-white dark:bg-slate-700 border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.08)] rounded-xl flex items-center justify-center gap-1.5 text-xs font-bold transition-all active:scale-95 shadow-2xs cursor-pointer">
                    <i class="fa-solid fa-money-bill-wave text-xs"></i> Cicil
                </button>
                <button type="button" onclick="window.markTempoPaid('${e.orderId}')" class="btn-native-action neo-btn h-10 sm:h-9 text-white rounded-xl flex items-center justify-center gap-1.5 text-xs font-bold cursor-pointer" style="background: var(--color-primary);">
                    <i class="fa-solid fa-check-double text-xs"></i> Lunas
                </button>
                <button type="button" onclick="if(typeof window.openDocPreview==='function') window.openDocPreview('tempo_customer_ledger', '${o}');" class="btn-native-action h-10 sm:h-9 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 rounded-xl flex items-center justify-center gap-1.5 text-xs font-bold transition-all active:scale-95 shadow-2xs cursor-pointer" title="Cetak Kartu Piutang Pelanggan">
                    <i class="fa-solid fa-address-book text-xs text-amber-500"></i> Kartu
                </button>
            </div>
        </div>
    </div>`},No=()=>{const e=new Map;j.forEach(a=>{const r=String(a.customer?.phone||a.customer?.wa||"").trim(),s=String(a.customer?.name||"Pelanggan Anonim").trim(),o=r||s;if(!e.has(o)){const c=(r||"").replace(/\D/g,""),m=(l.customers||[]).find(b=>b&&(String(b.id)===c||String(b.phone).replace(/\D/g,"")===c));e.set(o,{key:o,name:s,phone:r,wa:a.customer?.wa||r,customerType:a.customerType||(a.customer?.isMember?"Member":"Umum"),paylaterActive:m?m.paylaterActive===!0||m.paylaterActive==="true":!1,paylaterLimit:m&&parseFloat(m.paylaterLimit)||0,paylaterUsed:m&&parseFloat(m.paylaterUsed)||0,orders:[],totalAwal:0,totalPaid:0,totalSisaPokok:0,totalDenda:0,totalWajibBayar:0,hasLate:!1,hasDueSoon:!1})}const i=e.get(o),n=te(a),p=a.payment?.grandTotal&&a.payment.grandTotal>0?a.payment.grandTotal:parseFloat(a.total)||n.sisa,d=(a.payment?.installments||[]).reduce((c,m)=>c+(parseFloat(m.amount)||0),0);i.orders.push(a),i.totalAwal+=p,i.totalPaid+=d,i.totalSisaPokok+=n.sisa,i.totalDenda+=n.latePenalty,i.totalWajibBayar+=n.totalAkhir,n.isLate&&(i.hasLate=!0),n.isDueSoon&&(i.hasDueSoon=!0)});let t=Array.from(e.values());if(fe.trim()){const a=fe.trim().toLowerCase();t=t.filter(r=>r.name.toLowerCase().includes(a)||r.phone.toLowerCase().includes(a)||r.orders.some(s=>(s.orderId||"").toLowerCase().includes(a)))}return t.sort((a,r)=>a.hasLate&&!r.hasLate?-1:!a.hasLate&&r.hasLate?1:r.totalWajibBayar-a.totalWajibBayar),t.length===0?`
            <div class="bg-white dark:bg-slate-800 p-10 text-center rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <div class="w-16 h-16 bg-slate-100 dark:bg-slate-700/50 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-3">
                    <i class="fa-solid fa-users-slash text-2xl"></i>
                </div>
                <h4 class="font-bold text-slate-700 dark:text-slate-200 text-sm uppercase tracking-wider">Tidak Ada Data Pelanggan</h4>
                <p class="text-slate-500 dark:text-slate-400 mt-1 text-xs font-medium">Tidak ada pelanggan berpiutang yang cocok dengan kata kunci pencarian.</p>
            </div>
        `:`
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            ${t.map(a=>{const r=Ma(a.name),s=mt(a.wa||a.phone||"");let o="",i="border-slate-200 dark:border-slate-700/80";return a.hasLate?(i="border-rose-400 dark:border-rose-600 shadow-[0_0_15px_rgba(225,29,72,0.1)]",o='<span class="px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400 border border-rose-200 dark:border-rose-800 flex items-center gap-1"><i class="fa-solid fa-triangle-exclamation"></i> Ada Terlambat</span>'):a.hasDueSoon?(i="border-amber-400 dark:border-amber-600 shadow-[0_0_15px_rgba(245,158,11,0.1)]",o='<span class="px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400 border border-amber-200 dark:border-amber-800 flex items-center gap-1"><i class="fa-solid fa-clock"></i> Jatuh Tempo Dekat</span>'):o='<span class="px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 flex items-center gap-1"><i class="fa-solid fa-circle-check"></i> Berjalan Lancar</span>',`
                <div class="bg-white dark:bg-slate-800 p-4 sm:p-5 rounded-3xl border ${i} shadow-sm flex flex-col justify-between space-y-4">
                    <div>
                        <!-- Header Pelanggan -->
                        <div class="flex items-start justify-between gap-3">
                            <div class="flex items-center gap-3 min-w-0">
                                <div class="w-11 h-11 rounded-2xl flex items-center justify-center text-sm font-black shrink-0 aspect-square shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);">
                                    ${r}
                                </div>
                                <div class="min-w-0">
                                    <h3 class="font-bold text-slate-800 dark:text-slate-100 text-sm truncate uppercase">${u(a.name)}</h3>
                                    <div class="flex items-center gap-2 mt-0.5 flex-wrap">
                                        <p class="text-[11px] font-bold text-slate-500 font-mono flex items-center gap-1">
                                            <i class="fa-brands fa-whatsapp text-emerald-500"></i> +${u(s||"-")}
                                        </p>
                                        <span class="text-[9px] font-bold px-2 py-0.5 rounded-lg uppercase tracking-wider border ${a.customerType==="Member"?"text-amber-600 bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800":"text-slate-500 bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700"}">
                                            ${a.customerType}
                                        </span>
                                        ${a.paylaterActive?`
                                            <span class="text-[9px] font-black px-2 py-0.5 rounded-lg uppercase tracking-wider bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 flex items-center gap-1">
                                                <i class="fa-solid fa-bolt text-emerald-500"></i>PayLater Aktif
                                            </span>
                                        `:""}
                                    </div>
                                </div>
                            </div>
                            <div class="shrink-0 text-right">
                                <span class="inline-block px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-200 text-[11px] font-black font-mono">
                                    ${a.orders.length} Nota
                                </span>
                            </div>
                        </div>

                        <!-- Status Badge -->
                        <div class="mt-3 flex items-center justify-between gap-2 pt-2 border-t border-slate-100 dark:border-slate-700/60">
                            ${o}
                            <span class="text-[10px] text-slate-400 font-bold">Total Sisa Pokok: <b class="font-mono text-slate-700 dark:text-slate-200">${g(a.totalSisaPokok)}</b></span>
                        </div>

                        <!-- Ringkasan Saldo Akumulasi -->
                        <div class="mt-3 p-3.5 rounded-2xl ${a.hasLate?"bg-rose-50/70 dark:bg-rose-950/30 border border-rose-100 dark:border-rose-900/50":"bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700/60"}">
                            <div class="flex items-center justify-between text-xs">
                                <span class="font-bold text-slate-500">Akumulasi Tagihan:</span>
                                <span class="font-black text-sm font-mono ${a.hasLate?"text-rose-600 dark:text-rose-400":"text-slate-900 dark:text-white"}">${g(a.totalWajibBayar)}</span>
                            </div>
                            ${a.totalDenda>0?`
                            <div class="flex items-center justify-between text-[11px] text-rose-600 dark:text-rose-400 font-medium mt-1 pt-1 border-t border-rose-200/60 dark:border-rose-900/40">
                                <span>Termasuk Denda Berjalan:</span>
                                <span class="font-bold font-mono">+${g(a.totalDenda)}</span>
                            </div>`:""}
                        </div>

                        <!-- Mini Daftar Nota -->
                        <div class="mt-3 space-y-1.5">
                            <span class="text-[10px] font-black uppercase tracking-wider text-slate-400 block">Rincian Nota Aktif:</span>
                            <div class="space-y-1 max-h-28 overflow-y-auto custom-scrollbar">
                                ${a.orders.map(n=>{const p=te(n),d=p.dueDate?ct(p.dueDate):"-";return`
                                        <div onclick="window.openTempoDetailModal('${n.orderId}')" class="p-2 rounded-xl bg-white dark:bg-slate-700/50 border border-slate-100 dark:border-slate-700 flex items-center justify-between text-[11px] hover:border-[var(--color-primary)] transition-all cursor-pointer">
                                            <div class="flex items-center gap-1.5">
                                                <i class="fa-solid fa-file-invoice text-slate-400 text-[10px]"></i>
                                                <span class="font-bold font-mono text-slate-700 dark:text-slate-200">#${u(n.orderId)}</span>
                                                <span class="text-[9px] text-slate-400 font-medium font-mono">(${d})</span>
                                            </div>
                                            <span class="font-bold font-mono ${p.isLate?"text-rose-600":"text-slate-800 dark:text-slate-100"}">${g(p.totalAkhir)}</span>
                                        </div>
                                    `}).join("")}
                            </div>
                        </div>
                    </div>

                    <!-- Tombol Aksi Tab Pelanggan -->
                    <div class="pt-2 border-t border-slate-100 dark:border-slate-700/60 grid grid-cols-2 gap-2">
                        <button type="button" onclick="if(typeof window.openDocPreview==='function') window.openDocPreview('tempo_customer_ledger', '${u(a.phone||a.name)}');" class="btn-native-action py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-100 font-bold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer shadow-2xs" title="Cetak Lembar Kartu Piutang Resmi A4 / PDF / WA">
                            <i class="fa-solid fa-file-invoice" style="color: var(--color-primary)"></i>
                            <span>Cetak Kartu A4</span>
                        </button>
                        <button type="button" onclick="window.sendConsolidatedTempoWA('${u(a.phone||a.name)}')" class="py-2.5 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer shadow-2xs" title="Kirim Tagihan WhatsApp Seluruh Nota">
                            <i class="fa-brands fa-whatsapp text-sm"></i>
                            <span>Tagih Semua WA</span>
                        </button>
                    </div>
                </div>
                `}).join("")}
        </div>
    `},Do=()=>{let e=[];j.forEach(n=>{(n.payment?.installments||[]).forEach((d,c)=>{e.push({...d,installmentIndex:c+1,orderId:n.orderId,customerName:n.customer?.name||"Pelanggan",customerPhone:n.customer?.phone||n.customer?.wa||"",customerType:n.customerType||(n.customer?.isMember?"Member":"Umum"),orderDate:n.dateString})})});const t=new Date,a=new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime(),r=Date.now()-7*24*60*60*1e3,s=Date.now()-30*24*60*60*1e3;let o=e.filter(n=>{const p=new Date(n.date||0).getTime();if(ae==="today"&&p<a||ae==="week"&&p<r||ae==="month"&&p<s)return!1;const d=(n.method||"cash").toLowerCase();if(ue!=="all"&&d!==ue)return!1;if(fe.trim()){const c=fe.trim().toLowerCase(),m=n.customerName.toLowerCase(),b=n.customerPhone.toLowerCase(),f=n.orderId.toLowerCase(),h=(n.notes||"").toLowerCase();if(!m.includes(c)&&!b.includes(c)&&!f.includes(c)&&!h.includes(c))return!1}return!0});o.sort((n,p)=>new Date(p.date||0)-new Date(n.date||0));const i=o.reduce((n,p)=>n+(parseFloat(p.amount)||0),0);return`
        <div class="space-y-4">
            <!-- Filter Bar Histori Cicilan (Periode & Metode) -->
            <div class="bg-white dark:bg-slate-800 p-4 rounded-3xl border border-slate-200/90 dark:border-slate-700 shadow-sm space-y-3">
                <div class="flex flex-wrap items-center justify-between gap-3">
                    <!-- Filter Periode -->
                    <div class="flex items-center gap-1.5 overflow-x-auto pb-1 hide-scrollbar text-xs font-bold uppercase tracking-wider">
                        <button onclick="window.setInstallmentPeriod('all')" class="px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${ae==="all"?"text-white border-transparent":"bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700"}" style="${ae==="all"?"background: var(--color-primary);":""}">
                            Semua Waktu
                        </button>
                        <button onclick="window.setInstallmentPeriod('today')" class="px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${ae==="today"?"text-white border-transparent":"bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700"}" style="${ae==="today"?"background: var(--color-primary);":""}">
                            Hari Ini
                        </button>
                        <button onclick="window.setInstallmentPeriod('week')" class="px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${ae==="week"?"text-white border-transparent":"bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700"}" style="${ae==="week"?"background: var(--color-primary);":""}">
                            7 Hari Terakhir
                        </button>
                        <button onclick="window.setInstallmentPeriod('month')" class="px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${ae==="month"?"text-white border-transparent":"bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700"}" style="${ae==="month"?"background: var(--color-primary);":""}">
                            Bulan Ini
                        </button>
                    </div>

                    <!-- Filter Metode Bayar -->
                    <div class="flex items-center gap-1.5 overflow-x-auto pb-1 hide-scrollbar text-xs font-bold uppercase tracking-wider">
                        <button onclick="window.setInstallmentMethod('all')" class="px-2.5 py-1.5 rounded-xl border text-[10px] transition-all cursor-pointer ${ue==="all"?"bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-transparent":"bg-slate-50 dark:bg-slate-900 text-slate-500 border-slate-200 dark:border-slate-700"}">
                            Semua Metode
                        </button>
                        <button onclick="window.setInstallmentMethod('cash')" class="px-2.5 py-1.5 rounded-xl border text-[10px] transition-all cursor-pointer inline-flex items-center gap-1 ${ue==="cash"?"bg-emerald-600 text-white border-transparent":"bg-slate-50 dark:bg-slate-900 text-slate-500 border-slate-200 dark:border-slate-700"}">
                            <i class="fa-solid fa-money-bill-wave ${ue==="cash"?"text-white":"text-emerald-500"}"></i> Tunai
                        </button>
                        <button onclick="window.setInstallmentMethod('transfer')" class="px-2.5 py-1.5 rounded-xl border text-[10px] transition-all cursor-pointer inline-flex items-center gap-1 ${ue==="transfer"?"bg-blue-600 text-white border-transparent":"bg-slate-50 dark:bg-slate-900 text-slate-500 border-slate-200 dark:border-slate-700"}">
                            <i class="fa-solid fa-building-columns ${ue==="transfer"?"text-white":"text-blue-500"}"></i> Transfer
                        </button>
                        <button onclick="window.setInstallmentMethod('qris')" class="px-2.5 py-1.5 rounded-xl border text-[10px] transition-all cursor-pointer inline-flex items-center gap-1 ${ue==="qris"?"bg-purple-600 text-white border-transparent":"bg-slate-50 dark:bg-slate-900 text-slate-500 border-slate-200 dark:border-slate-700"}">
                            <i class="fa-solid fa-qrcode ${ue==="qris"?"text-white":"text-purple-500"}"></i> QRIS
                        </button>
                    </div>
                </div>

                <!-- Total Cicilan Terkumpul Highlight Strip -->
                <div class="pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between flex-wrap gap-2">
                    <span class="text-xs font-bold text-slate-500 dark:text-slate-400">
                        Menampilkan <b class="text-slate-800 dark:text-slate-200">${o.length}</b> transaksi cicilan
                    </span>
                    <div class="flex items-center gap-2">
                        <span class="text-xs font-bold text-slate-500">Total Uang Cicilan Masuk:</span>
                        <span class="text-base font-black font-mono text-emerald-600 dark:text-emerald-400">${g(i)}</span>
                    </div>
                </div>
            </div>

            <!-- Tabel / Card List Cicilan -->
            ${o.length===0?`
                <div class="bg-white dark:bg-slate-800 p-10 text-center rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
                    <div class="w-16 h-16 bg-slate-100 dark:bg-slate-700/50 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-3">
                        <i class="fa-solid fa-receipt text-2xl"></i>
                    </div>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200 text-sm uppercase tracking-wider">Tidak Ada Transaksi Cicilan</h4>
                    <p class="text-slate-500 dark:text-slate-400 mt-1 text-xs font-medium">Belum ada cicilan yang tercatat untuk filter periode atau kata kunci ini.</p>
                </div>
            `:`
                <!-- Mobile Card List -->
                <div class="sm:hidden space-y-2.5">
                    ${o.map(n=>{const p=Mt(n.date),d=(n.method||"cash").toUpperCase();return`
                        <div class="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200/90 dark:border-slate-700 shadow-2xs space-y-2">
                            <div class="flex items-start justify-between gap-2">
                                <div>
                                    <h4 class="font-bold text-xs text-slate-800 dark:text-slate-100">${u(n.customerName)}</h4>
                                    <p class="text-[10px] text-slate-400 font-mono mt-0.5">${p}</p>
                                </div>
                                <span class="text-sm font-black font-mono text-emerald-600 dark:text-emerald-400">+${g(n.amount)}</span>
                            </div>
                            <div class="flex items-center justify-between text-[11px] pt-2 border-t border-slate-100 dark:border-slate-700/60">
                                <span class="font-mono text-slate-500">Nota: <a href="javascript:void(0)" onclick="window.openTempoDetailModal('${n.orderId}')" class="font-bold text-[var(--color-primary)] hover:underline">#${u(n.orderId)}</a></span>
                                <span class="px-2 py-0.5 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                                    ${d}
                                </span>
                            </div>
                            ${n.notes?`<p class="text-[10px] italic text-slate-500 bg-slate-50 dark:bg-slate-900/40 p-2 rounded-xl border border-slate-100 dark:border-slate-800">${u(n.notes)}</p>`:""}
                            <div class="pt-2 flex items-center justify-end gap-1.5">
                                <button type="button" onclick="window.openTempoDetailModal('${n.orderId}')" class="px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-[10px] font-bold hover:bg-slate-50 transition-all cursor-pointer">
                                    <i class="fa-solid fa-eye mr-1"></i>Detail Nota
                                </button>
                                <button type="button" onclick="if(typeof window.printTempoReceiptDirect==='function'){window.printTempoReceiptDirect('${n.orderId}');}else{window.previewTempoReceipt('${n.orderId}');}" class="px-2.5 py-1.5 rounded-xl bg-amber-500 text-white text-[10px] font-bold hover:bg-amber-600 transition-all cursor-pointer">
                                    <i class="fa-solid fa-print mr-1"></i>Struk
                                </button>
                            </div>
                        </div>
                        `}).join("")}
                </div>

                <!-- Desktop Table -->
                <div class="hidden sm:block bg-white dark:bg-slate-800 rounded-3xl border border-slate-200/90 dark:border-slate-700 overflow-hidden shadow-sm">
                    <table class="w-full text-xs text-left">
                        <thead class="bg-slate-50 dark:bg-slate-900/60 text-slate-400 uppercase text-[10px] font-bold border-b border-slate-200 dark:border-slate-700">
                            <tr>
                                <th class="py-3 px-4">Tgl &amp; Waktu</th>
                                <th class="py-3 px-3">Pelanggan</th>
                                <th class="py-3 px-3">ID Nota</th>
                                <th class="py-3 px-3 text-center">Metode</th>
                                <th class="py-3 px-3 text-right">Jumlah Cicilan</th>
                                <th class="py-3 px-3">Penerima / Kasir</th>
                                <th class="py-3 px-4 text-center">Aksi</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-100 dark:divide-slate-700/60 font-medium">
                            ${o.map(n=>{const p=Mt(n.date),d=(n.method||"cash").toUpperCase();return`
                                <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-700/30 transition-colors">
                                    <td class="py-3 px-4 font-mono text-slate-500 whitespace-nowrap">${p}</td>
                                    <td class="py-3 px-3">
                                        <span class="font-bold text-slate-800 dark:text-slate-100 block">${u(n.customerName)}</span>
                                        <span class="text-[10px] font-mono text-slate-400">${u(n.customerPhone||"-")}</span>
                                    </td>
                                    <td class="py-3 px-3 font-mono font-bold">
                                        <a href="javascript:void(0)" onclick="window.openTempoDetailModal('${n.orderId}')" class="text-[var(--color-primary)] hover:underline">#${u(n.orderId)}</a>
                                    </td>
                                    <td class="py-3 px-3 text-center">
                                        <span class="px-2 py-0.5 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                                            ${d}
                                        </span>
                                    </td>
                                    <td class="py-3 px-3 text-right font-black font-mono text-emerald-600 dark:text-emerald-400 whitespace-nowrap">
                                        +${g(n.amount)}
                                    </td>
                                    <td class="py-3 px-3 text-slate-600 dark:text-slate-300">
                                        <span>${u(n.cashierName||"Kasir")}</span>
                                        ${n.notes?`<span class="block text-[10px] italic text-slate-400 truncate max-w-[150px]" title="${u(n.notes)}">${u(n.notes)}</span>`:""}
                                    </td>
                                    <td class="py-3 px-4 text-center whitespace-nowrap">
                                        <div class="flex items-center justify-center gap-1.5">
                                            <button type="button" onclick="window.openTempoDetailModal('${n.orderId}')" class="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 hover:text-[var(--color-primary)] dark:text-slate-300 text-xs transition-all cursor-pointer" title="Buka Detail Nota">
                                                <i class="fa-solid fa-eye"></i>
                                            </button>
                                            <button type="button" onclick="if(typeof window.printTempoReceiptDirect==='function'){window.printTempoReceiptDirect('${n.orderId}');}else{window.previewTempoReceipt('${n.orderId}');}" class="p-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-white text-xs transition-all cursor-pointer shadow-2xs" title="Cetak Struk Nota">
                                                <i class="fa-solid fa-print"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                `}).join("")}
                        </tbody>
                    </table>
                </div>
            `}
        </div>
    `},La=()=>{Ye();let e=0,t=0,a=0,r=0,s=0;const o=new Set;let i=0;j.forEach(p=>{const d=te(p);e+=d.totalAkhir,d.isLate?(t+=d.totalAkhir,a++):d.isDueSoon?r++:s++;const c=String(p.customer?.phone||p.customer?.wa||p.customer?.name||"").trim();c&&o.add(c);const m=p.payment?.installments||[];i+=m.length});let n=`
    <div class="max-w-full pb-12 fade-in-scale text-sm space-y-5">
        
        ${q.length>0?`
        <!-- BANNER ANTREAN KONFIRMASI PEMBAYARAN MASUK PELANGGAN -->
        <div class="neo-card p-4 sm:p-5 rounded-2xl border-2 border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-[2.5px_2.5px_0px_#0f172a] dark:shadow-[2.5px_2.5px_0px_#000000] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div class="flex items-center gap-3.5">
                <div class="w-12 h-12 rounded-xl text-white flex items-center justify-center shrink-0 relative border-2 border-slate-900 dark:border-slate-700 shadow-[1.5px_1.5px_0px_#0f172a] dark:shadow-[1.5px_1.5px_0px_#000000]" style="background: var(--color-primary);">
                    <i class="fa-solid fa-receipt text-xl"></i>
                    <span class="absolute -top-1.5 -right-1.5 px-1.5 py-0.2 rounded-full bg-rose-600 text-white text-[10px] font-black flex items-center justify-center border-2 border-slate-900 animate-bounce">
                        ${q.length}
                    </span>
                </div>
                <div>
                    <h4 class="font-black text-slate-900 dark:text-white text-sm sm:text-base flex items-center gap-2">
                        Konfirmasi Pembayaran Pelanggan Masuk
                        <span class="neo-badge px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-wider bg-[rgba(var(--color-primary-rgb),0.12)] text-[var(--color-primary)] border border-[var(--color-primary)]/30">
                            ${q.length} Perlu Verifikasi
                        </span>
                    </h4>
                    <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        Pelanggan telah mengunggah bukti transfer Bank / QRIS toko untuk cicilan tempo. Cek bukti mutasi dan setujui untuk memperbarui saldo &amp; memulihkan limit PayLater pelanggan.
                    </p>
                </div>
            </div>
            <button type="button" onclick="window.openTempoConfirmationsModal()" class="neo-btn px-5 py-2.5 rounded-xl text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shrink-0" style="background: var(--color-primary);">
                <i class="fa-solid fa-eye text-sm"></i>
                <span>Periksa Bukti (${q.length})</span>
            </button>
        </div>
        `:""}

        <!-- HEADER KARTU STATISTIK METRIK PIUTANG DENGAN INDUSTRIAL NEO-BRUTALISM -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div class="neo-card bg-white dark:bg-slate-800 p-4 rounded-2xl border-2 border-slate-900 dark:border-slate-700 shadow-[2.5px_2.5px_0px_#0f172a] dark:shadow-[2.5px_2.5px_0px_#000000] flex items-center gap-3.5 relative overflow-hidden">
                <div class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border-2 border-slate-900 dark:border-slate-700 shadow-[1.5px_1.5px_0px_#0f172a] dark:shadow-[1.5px_1.5px_0px_#000000]" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">
                    <i class="fa-solid fa-hand-holding-dollar text-xl"></i>
                </div>
                <div class="min-w-0">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Total Piutang Aktif</p>
                    <p class="text-base sm:text-lg font-black text-slate-900 dark:text-white font-mono mt-0.5 tracking-tight">${g(e)}</p>
                </div>
            </div>

            <div class="neo-card bg-white dark:bg-slate-800 p-4 rounded-2xl border-2 border-slate-900 dark:border-slate-700 shadow-[2.5px_2.5px_0px_#0f172a] dark:shadow-[2.5px_2.5px_0px_#000000] flex items-center gap-3.5 relative overflow-hidden">
                <div class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-rose-100 text-rose-700 dark:bg-rose-950/70 dark:text-rose-400 border-2 border-slate-900 dark:border-slate-700 shadow-[1.5px_1.5px_0px_#0f172a] dark:shadow-[1.5px_1.5px_0px_#000000]">
                    <i class="fa-solid fa-triangle-exclamation text-xl"></i>
                </div>
                <div class="min-w-0">
                    <p class="text-[9px] font-black text-rose-500 uppercase tracking-widest">Piutang Terlambat</p>
                    <p class="text-base sm:text-lg font-black text-rose-600 dark:text-rose-400 font-mono mt-0.5 tracking-tight">${g(t)}</p>
                </div>
            </div>

            <div class="neo-card bg-white dark:bg-slate-800 p-4 rounded-2xl border-2 border-slate-900 dark:border-slate-700 shadow-[2.5px_2.5px_0px_#0f172a] dark:shadow-[2.5px_2.5px_0px_#000000] flex items-center gap-3.5 relative overflow-hidden">
                <div class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-amber-100 text-amber-700 dark:bg-amber-950/70 dark:text-amber-400 border-2 border-slate-900 dark:border-slate-700 shadow-[1.5px_1.5px_0px_#0f172a] dark:shadow-[1.5px_1.5px_0px_#000000]">
                    <i class="fa-solid fa-file-invoice-dollar text-xl"></i>
                </div>
                <div class="min-w-0">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Total Nota Tempo</p>
                    <p class="text-base sm:text-lg font-black text-slate-900 dark:text-white font-mono mt-0.5 tracking-tight">${j.length} Nota (${o.size} Debitur)</p>
                </div>
            </div>
        </div>

        <!-- SHORTCUT KE PUSAT LAPORAN UTANG PIUTANG & AKSI DOKUMEN REKAP -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 px-1">
            <span class="text-[11px] font-bold text-slate-500 dark:text-slate-400">Manajemen Penagihan &amp; Cicilan Piutang Toko</span>
            <div class="flex items-center gap-2 flex-wrap">
                <button type="button" onclick="window.printTempoRecapA4()" class="neo-btn inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 border-2 border-slate-900 dark:border-slate-700 shadow-[2px_2px_0px_#0f172a] dark:shadow-[2px_2px_0px_#000000] hover:bg-slate-50 dark:hover:bg-slate-700/60 cursor-pointer" title="Cetak Rekap Buku Piutang Toko A4 / PDF">
                    <i class="fa-solid fa-print text-xs" style="color: var(--color-primary)"></i>
                    <span>Cetak Rekap A4</span>
                </button>
                <button type="button" onclick="window.exportTempoCSV()" class="neo-btn inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border-2 border-slate-900 dark:border-slate-700 shadow-[2px_2px_0px_#0f172a] dark:shadow-[2px_2px_0px_#000000] hover:bg-emerald-100 dark:hover:bg-emerald-900/60 cursor-pointer" title="Ekspor data piutang ke Excel / CSV">
                    <i class="fa-solid fa-file-excel text-xs text-emerald-600"></i>
                    <span>Ekspor CSV</span>
                </button>
                <button type="button" onclick="if(window.openAdminTab){window.openAdminTab('reports'); setTimeout(() => window.switchReportTab && window.switchReportTab('debts'), 100);}" class="neo-btn inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-50 dark:bg-amber-950/60 text-amber-900 dark:text-amber-300 border-2 border-slate-900 dark:border-slate-700 shadow-[2px_2px_0px_#0f172a] dark:shadow-[2px_2px_0px_#000000] hover:bg-amber-100 dark:hover:bg-amber-900/60 cursor-pointer">
                    <i class="fa-solid fa-chart-pie text-xs"></i>
                    <span>Analisis Laporan</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                </button>
            </div>
        </div>

        <!-- 3 TAB NAVIGASI UTAMA (ORDERS, CUSTOMERS, INSTALLMENTS) -->
        <div class="p-1.5 bg-slate-100 dark:bg-slate-900 rounded-2xl border-2 border-slate-900 dark:border-slate-700 shadow-[2px_2px_0px_#0f172a] dark:shadow-[2px_2px_0px_#000000] grid grid-cols-3 gap-1.5">
            <button type="button" onclick="window.switchTempoMainTab('orders')" class="py-2.5 px-2 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer ${oe==="orders"?"bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-2 border-slate-900 dark:border-slate-600 shadow-[1.5px_1.5px_0px_#0f172a] dark:shadow-[1.5px_1.5px_0px_#000000]":"text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border-2 border-transparent"}">
                <i class="fa-solid fa-file-invoice text-xs"></i>
                <span>Daftar Nota (${j.length})</span>
            </button>
            <button type="button" onclick="window.switchTempoMainTab('customers')" class="py-2.5 px-2 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer ${oe==="customers"?"bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-2 border-slate-900 dark:border-slate-600 shadow-[1.5px_1.5px_0px_#0f172a] dark:shadow-[1.5px_1.5px_0px_#000000]":"text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border-2 border-transparent"}">
                <i class="fa-solid fa-address-book text-xs text-amber-500"></i>
                <span>Kartu Pelanggan (${o.size})</span>
            </button>
            <button type="button" onclick="window.switchTempoMainTab('installments')" class="py-2.5 px-2 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer ${oe==="installments"?"bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-2 border-slate-900 dark:border-slate-600 shadow-[1.5px_1.5px_0px_#0f172a] dark:shadow-[1.5px_1.5px_0px_#000000]":"text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border-2 border-transparent"}">
                <i class="fa-solid fa-receipt text-xs text-emerald-500"></i>
                <span>Histori Cicilan (${i})</span>
            </button>
        </div>

        <!-- SEARCH BAR INSTAN (GLOBAL UNTUK SEMUA TAB) -->
        <div class="neo-card bg-white dark:bg-slate-800 p-4 rounded-2xl border-2 border-slate-900 dark:border-slate-700 shadow-[2.5px_2.5px_0px_#0f172a] dark:shadow-[2.5px_2.5px_0px_#000000] space-y-3">
            <div class="relative">
                <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
                <input type="text" 
                    id="tempo-search-input"
                    value="${u(fe)}"
                    placeholder="${oe==="orders"?"Cari nama pelanggan, nomor WhatsApp, atau ID nota tempo...":oe==="customers"?"Cari nama pelanggan atau nomor WhatsApp...":"Cari transaksi cicilan, nama, nomor nota, atau catatan..."}" 
                    oninput="window.onTempoSearch(this.value)"
                    class="neo-input w-full pl-9 pr-8 py-2.5 bg-slate-50 dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-700 rounded-xl text-xs font-bold text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)] transition-all">
                <button type="button" id="tempo-search-clear-btn" onclick="window.onTempoSearch(''); const ti=el('tempo-search-input'); if(ti){ti.value='';ti.focus();}" class="${fe?"":"hidden"} absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors active:scale-90" title="Hapus pencarian">
                    <i class="fa-solid fa-circle-xmark text-sm"></i>
                </button>
            </div>

            ${oe==="orders"?`
            <!-- FILTER STATUS SEGMENTED CONTROL (TAB ORDERS) -->
            <div class="flex items-center gap-2 overflow-x-auto pb-1 hide-scrollbar text-xs font-bold uppercase tracking-wider">
                <button onclick="window.setTempoFilter('all')" 
                    class="px-3.5 py-2 rounded-xl border transition-all shrink-0 cursor-pointer active:scale-95 ${he==="all"?"text-white border-transparent shadow-xs":"bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100"}"
                    style="${he==="all"?"background: var(--color-primary);":""}">
                    Semua (${j.length})
                </button>
                <button onclick="window.setTempoFilter('late')" 
                    class="px-3.5 py-2 rounded-xl border transition-all shrink-0 cursor-pointer active:scale-95 ${he==="late"?"bg-rose-600 text-white border-rose-600 shadow-xs":"bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-900/50 hover:bg-rose-100"}">
                    <i class="fa-solid fa-triangle-exclamation mr-1"></i> Terlambat (${a})
                </button>
                <button onclick="window.setTempoFilter('due_soon')" 
                    class="px-3.5 py-2 rounded-xl border transition-all shrink-0 cursor-pointer active:scale-95 ${he==="due_soon"?"bg-amber-500 text-white border-amber-500 shadow-xs":"bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-900/50 hover:bg-amber-100"}">
                    <i class="fa-solid fa-clock mr-1"></i> H-3 Jatuh Tempo (${r})
                </button>
                <button onclick="window.setTempoFilter('active')" 
                    class="px-3.5 py-2 rounded-xl border transition-all shrink-0 cursor-pointer active:scale-95 ${he==="active"?"bg-emerald-600 text-white border-emerald-600 shadow-xs":"bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900/50 hover:bg-emerald-100"}">
                    <i class="fa-solid fa-circle-check mr-1"></i> Berjalan Lancar (${s})
                </button>
            </div>
            `:""}
        </div>

        <!-- CONTAINER KONTEN TAB AKTIF (SEAMLESS ZERO-FLICKER) -->
        <div id="tempo-tab-content-container"></div>
    </div>`;_("admin-content",n),zt()},zt=()=>{const e=k("tempo-tab-content-container");e&&(oe==="orders"?j.length===0?e.innerHTML=`
            <div class="bg-white dark:bg-slate-800 p-10 text-center rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary);">
                    <i class="fa-solid fa-check-double text-4xl"></i>
                </div>
                <h3 class="font-black text-slate-800 dark:text-slate-100 text-base uppercase tracking-widest">Semua Tagihan Piutang Lunas!</h3>
                <p class="text-slate-500 dark:text-slate-400 mt-1.5 text-xs font-medium max-w-sm mx-auto">Tidak ada piutang tempo penjualan pelanggan yang sedang aktif atau tertunda saat ini.</p>
            </div>`:(e.innerHTML='<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" id="tempo-cards-container"></div>',nr()):oe==="customers"?e.innerHTML=No():oe==="installments"&&(e.innerHTML=Do()))},Qt=async()=>{R("Memuat data piutang..."),j=[],q=[];try{const[e,t]=await Promise.all([P.collection("freshmart_orders").where("payment.method","==","tempo").where("payment.paymentStatus","==","hutang").get(),P.collection("tempo_payment_confirmations").where("status","==","pending").get().catch(a=>(console.warn("[Tempo] Gagal memuat konfirmasi pembayaran:",a),{empty:!0,docs:[]}))]);e.forEach(a=>{j.push(a.data())}),!t.empty&&t.docs&&(t.docs.forEach(a=>{q.push({id:a.id,...a.data()})}),q.sort((a,r)=>(r.createdAt||0)-(a.createdAt||0)))}catch(e){C(),x("Gagal memuat piutang: "+e.message);return}C(),j.sort((e,t)=>{let a=e.payment?.tempoDueDate||0,r=t.payment?.tempoDueDate||0;return a-r}),window.cachedPiutangOrders=j,window.pendingTempoConfirmations=q,La()},dr=async()=>{try{if(typeof window.openTempoRecapDocPreview=="function")window.openTempoRecapDocPreview();else{const e=await J(()=>import("./module-print-BpWwhM5r.js").then(t=>t.bz),__vite__mapDeps([1,2,3]),import.meta.url);e&&typeof e.openDocPreview=="function"?e.openDocPreview("tempo_recap"):typeof window.openDocPreview=="function"?window.openDocPreview("tempo_recap"):x("Modul cetak dokumen sedang disiapkan...","info")}}catch(e){console.error("Error open tempo recap A4:",e),typeof window.openDocPreview=="function"?window.openDocPreview("tempo_recap"):x("Gagal membuka preview dokumen: "+e.message,"warning")}},cr=()=>{const e=j&&j.length>0?j:(window.gOrds||[]).filter(d=>d.payment?.method==="tempo"&&(parseFloat(d.payment?.tempoBalance)>0||d.payment?.status!=="paid"&&d.payment?.status!=="completed"));if(!e||e.length===0){x("Tidak ada data piutang untuk diekspor ke CSV","warning");return}const t=["No","ID Nota","Nama Debitur","No WhatsApp / Telepon","Alamat Debitur","Tanggal Transaksi","Jatuh Tempo","Total Transaksi (Rp)","Sudah Dibayar (Rp)","Sisa Pokok (Rp)","Denda (Rp)","Total Tagihan Berjalan (Rp)","Status Aging","Hari Terlambat","Catatan / Keterangan"],a=d=>d==null?'""':`"${String(d).replace(/"/g,'""')}"`,r=e.map((d,c)=>{const m=te(d),b=d.customer||{},f=b.name||"Pelanggan",h=b.wa||b.phone||"-",w=b.address||"-",v=d.dateString?new Date(d.dateString).toLocaleDateString("id-ID"):"-",S=m.dueDate?new Date(m.dueDate).toLocaleDateString("id-ID"):"-",B=(d.payment?.installments||[]).reduce((y,M)=>y+(parseFloat(M.amount)||0),0),I=d.payment?.grandTotal||m.sisa+B,A=m.isLate?`Terlambat ${m.daysLate} Hari`:m.isDueSoon?`H-${m.daysLeft} Jatuh Tempo`:"Lancar";return[c+1,a(d.orderId||d.id),a(f),a(h),a(w),a(v),a(S),Math.round(I),Math.round(B),Math.round(m.sisa),Math.round(m.latePenalty),Math.round(m.totalAkhir),a(A),m.daysLate||0,a(d.notes||d.payment?.notes||"-")].join(",")}),s="\uFEFF"+[t.map(d=>a(d)).join(","),...r].join(`\r
`),o=new Blob([s],{type:"text/csv;charset=utf-8;"}),i=URL.createObjectURL(o),n=document.createElement("a"),p=new Date().toISOString().slice(0,10);n.href=i,n.download=`Rekap_Piutang_Toko_Putri_${p}.csv`,document.body.appendChild(n),n.click(),setTimeout(()=>{document.body.removeChild(n),URL.revokeObjectURL(i)},200),x(`Berhasil mengekspor ${e.length} data piutang ke CSV!`,"success")};window.rAdmPiutang=Qt;window.printTempoRecapA4=dr;window.exportTempoCSV=cr;const pr=e=>{to(e),Ra()},Ra=()=>{const e=eo||"all",t=(na||[]).filter(o=>e==="visible"?o.isVisible!==!1:e==="hidden"?o.isVisible===!1:!0),a=`
        <div class="mb-5 flex justify-between items-center bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style="background: rgba(var(--color-primary-rgb),0.1); color: var(--color-primary)">
                    <i class="fa-solid fa-comments text-base"></i>
                </div>
                <div>
                    <h2 class="font-bold text-sm text-slate-800 dark:text-slate-100 uppercase tracking-widest leading-tight">Ulasan Pelanggan</h2>
                    <p class="text-[9px] font-bold text-slate-500 mt-0.5">Moderasi, balas, dan kelola testimoni pembeli</p>
                </div>
            </div>
        </div>
        <div class="flex gap-1.5 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl mb-5 w-fit">
            ${[{k:"all",l:"Semua"},{k:"visible",l:"Ditampilkan"},{k:"hidden",l:"Disembunyikan"}].map(o=>`
                <button onclick="filterReviews('${o.k}')" class="px-3.5 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${e===o.k?"shadow-sm":"text-slate-500 dark:text-slate-400"}" style="${e===o.k?"background:var(--color-primary);color:#fff":""}">${o.l}</button>
            `).join("")}
        </div>`;if(!t.length){_("admin-content",'<div class="max-w-full pb-10 text-sm fade-in-scale">'+a+'<div class="flex flex-col items-center justify-center py-20 text-slate-400 font-bold bg-white dark:bg-slate-800 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm text-center"><i class="fa-solid fa-comment-slash text-5xl mb-4 opacity-30"></i>Belum ada ulasan</div></div>');return}const r=o=>Array.from({length:5},(i,n)=>`<i class="fa-solid fa-star ${n<Math.round(o)?"text-amber-400":"text-slate-200 dark:text-slate-700"}"></i>`).join(""),s=t.map(o=>{let i="";try{o.createdAt&&o.createdAt.toDate&&(i=o.createdAt.toDate().toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}))}catch{}const n=o.isVisible===!1;return`
        <div class="p-4 sm:p-5 md:p-6 lg:p-8 rounded-[1.5rem] border shadow-sm ${n?"border-rose-200 bg-rose-50/40 dark:border-rose-900/40 dark:bg-rose-900/10":"border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800"} mb-3">
            <div class="flex items-start justify-between gap-3 mb-2">
                <div class="min-w-0">
                    <p class="text-sm font-bold text-slate-800 dark:text-white truncate">${u(o.customerName||"Pelanggan")}</p>
                    <p class="text-[10px] font-bold text-slate-500 mt-0.5">${u(o.productName||"")}${o.variantName?" · "+u(o.variantName):""}</p>
                </div>
                <span class="text-[9px] font-bold text-slate-400 whitespace-nowrap">${i}</span>
            </div>
            <div class="flex text-xs mb-2.5">${r(o.rating)}</div>
            ${o.text?`<p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-2.5">${u(o.text)}</p>`:""}
            ${o.photoUrl?`<img src="${u(o.photoUrl)}" onclick="window.open('${u(o.photoUrl)}','_blank')" class="w-20 h-20 rounded-xl object-cover border border-slate-200 dark:border-slate-700 cursor-pointer mb-2.5" onerror="this.style.display='none'" loading="lazy">`:""}
            ${o.adminReply?`<div class="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl p-3 mb-2.5"><p class="text-[9px] font-bold text-[var(--color-primary)] uppercase tracking-widest mb-1"><i class="fa-solid fa-store mr-1"></i>Balasan Anda</p><p class="text-[11px] text-slate-600 dark:text-slate-300">${u(o.adminReply)}</p></div>`:""}
            <div class="flex flex-wrap gap-2 pt-2 border-t border-slate-100 dark:border-slate-700/60">
                <button onclick="replyToReview('${u(String(o.id))}')" class="px-3.5 py-2.5 rounded-xl primary-bg-soft primary-text text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 hover:opacity-90 active:scale-95 transition-all cursor-pointer"><i class="fa-solid fa-reply"></i> ${o.adminReply?"Edit Balasan":"Balas"}</button>
                <button onclick="toggleReviewVisibility('${u(String(o.id))}')" class="px-3.5 py-2.5 rounded-xl ${n?"primary-bg-soft primary-text hover:brightness-95":"bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 hover:bg-amber-100"} text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 active:scale-95 transition-all cursor-pointer"><i class="fa-solid ${n?"fa-eye":"fa-eye-slash"}"></i> ${n?"Tampilkan":"Sembunyikan"}</button>
                <button onclick="deleteReview('${u(String(o.id))}')" class="px-3.5 py-2.5 rounded-xl bg-rose-50 dark:bg-rose-900/20 text-rose-500 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 hover:bg-rose-100 active:scale-95 transition-all cursor-pointer"><i class="fa-solid fa-trash"></i> Hapus</button>
            </div>
        </div>`}).join("");_("admin-content",'<div class="max-w-full pb-10 text-sm fade-in-scale">'+a+s+"</div>")},mr=async e=>{const t=(na||[]).find(a=>a&&a.id!=null&&String(a.id)===String(e));t&&typeof window.customPrompt=="function"&&window.customPrompt("Tulis balasan untuk ulasan ini:",t.adminReply||"",async a=>{R("Menyimpan balasan...");try{await P.collection("freshmart").doc("cms_data").collection("reviews").doc(e.toString()).update({adminReply:a}),x("Balasan tersimpan!")}catch{x("Gagal menyimpan balasan!")}finally{C()}})},ur=async e=>{const t=(na||[]).find(r=>r&&r.id!=null&&String(r.id)===String(e));if(!t)return;const a=t.isVisible===!1;R("Menyimpan...");try{await P.collection("freshmart").doc("cms_data").collection("reviews").doc(e.toString()).update({isVisible:a}),x(a?"Ulasan ditampilkan lagi!":"Ulasan disembunyikan dari halaman produk!")}catch{x("Gagal mengubah status ulasan!")}finally{C()}},br=e=>{ce("Hapus Ulasan","Ulasan yang dihapus tidak bisa dikembalikan lagi.",async()=>{R("Menghapus...");try{await P.collection("freshmart").doc("cms_data").collection("reviews").doc(e.toString()).delete(),x("Ulasan dihapus!")}catch{x("Gagal menghapus ulasan!")}finally{C()}})};window.filterReviews=pr;window.rAdmReviews=Ra;window.replyToReview=mr;window.toggleReviewVisibility=ur;window.deleteReview=br;let Yt=null,De=1,_e="overview",ke="all";const _o=e=>{_e=e,Fe()},Eo=e=>{ke=e,Fe()},xr=e=>{const t=[];if(!e)return t;const a=String(e.id),r=String(e.name||"").trim().toLowerCase();return(l.purchases||[]).forEach(p=>{if(!(p.status==="received"||p.status==="completed"||p.receivedAt))return;(Array.isArray(p.items)?p.items:[]).forEach(m=>{if(String(m.productId||m.id||"")===a||String(m.name||"").trim().toLowerCase()===r){const f=parseFloat(m.qty||m.receivedQty||0)||0;f>0&&t.push({type:"in",source:"po",date:p.receivedAt||p.date||p.createdAt||Date.now(),refNo:p.poNumber||p.id||"PO",title:`Penerimaan PO Kulakan #${p.poNumber||p.id}`,qty:f,unit:m.unit||e.unit||"pcs",price:m.buyPrice||m.price||0,party:p.supplierName||"Supplier Rekanan",location:m.targetLocation==="store"?"Rak Toko":"Gudang Cadangan",notes:p.notes||"Barang masuk kulakan resmi"})}})}),(window.gOrds||l.orders||[]).forEach(p=>{if(p.status==="cancelled"||p.status==="void")return;(Array.isArray(p.items)?p.items:[]).forEach(c=>{if(String(c.id||c.productId||"")===a||String(c.name||"").trim().toLowerCase()===r){const b=parseFloat(c.qty||c.quantity||0)||0;b>0&&t.push({type:"out",source:"sales",date:p.createdAt||(p.dateString?new Date(p.dateString).getTime():Date.now()),refNo:p.orderId||p.id||"ORD",title:`Penjualan ${p.isPos?"Kasir POS":"Online"} #${p.orderId||p.id}`,qty:b,unit:c.unit||e.unit||"pcs",price:c.price||0,party:p.customer?.name||(p.isPos?"Pelanggan Kasir":"Pelanggan Toko"),location:"Rak Toko",notes:p.payment?.method?`Metode: ${p.payment.method.toUpperCase()}`:"Penjualan"})}})}),(e.stockBatches||[]).forEach(p=>{!t.some(c=>c.source==="po"&&c.refNo===(p.poNumber||p.batchNo))&&(parseFloat(p.initialQty)||0)>0&&t.push({type:"in",source:"batch",date:p.receivedAt||Date.now(),refNo:p.poNumber||p.batchNo||"BATCH",title:`Batch Stok Masuk #${p.poNumber||p.batchNo||"LOT"}`,qty:parseFloat(p.initialQty)||0,unit:e.unit||"pcs",price:p.buyPrice||0,party:p.supplierName||"Pemasok",location:p.location==="store"?"Rak Toko":"Gudang Cadangan",notes:`Sisa batch saat ini: ${p.remainingQty||0} unit`})}),(Array.isArray(e.internalTransfers)?e.internalTransfers:[]).forEach((p,d)=>{const c=p.fromLocation==="warehouse"?"Gudang":"Rak Toko",m=p.toLocation==="warehouse"?"Gudang":"Rak Toko",b=p.toLocation==="store";t.push({type:b?"in":"out",source:"transfer",date:p.date||Date.now(),refNo:p.id||`TRF-${d+1}`,title:`Mutasi Internal (${c} → ${m})`,qty:parseFloat(p.qty)||0,unit:p.unit||e.unit||"pcs",price:0,party:p.userName||"Staf Toko",location:`${c} → ${m}`,notes:p.variantName?`Varian: ${p.variantName}`:"Pemindahan internal rak & gudang"})}),t.sort((p,d)=>{const c=new Date(p.date).getTime()||0;return(new Date(d.date).getTime()||0)-c}),t},jo=()=>{if(!k("modal-product-fifo")){const e=document.createElement("div");e.id="modal-product-fifo",e.className="fixed inset-0 z-[150] flex hidden items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/75 opacity-0 transition-opacity duration-300",e.onclick=t=>{t.target===e&&window.closeProductFifoModal?.()},e.innerHTML=`
            <div id="modal-product-fifo-box" class="modal-bottom-sheet relative flex max-h-[92dvh] sm:max-h-[88dvh] w-full max-w-4xl translate-y-full sm:translate-y-10 transform flex-col overflow-hidden rounded-t-[2rem] sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300">
                <div id="modal-product-fifo-content" class="flex-1 flex flex-col overflow-hidden min-h-0"></div>
            </div>
        `,document.body.appendChild(e)}},fr=e=>{jo(),Yt=e,De=1,_e="overview",ke="all";const t=(l.products||[]).find(s=>String(s.id)===String(e));if(!t)return x("Produk tidak ditemukan!");da(t,l.suppliers||[]),Fe();const a=k("modal-product-fifo"),r=k("modal-product-fifo-box");a&&a.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("productFifo"),pe(a,r)},Oo=(e=!1)=>{const t=k("modal-product-fifo"),a=k("modal-product-fifo-box");t&&(!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("productFifo",!1,()=>Y(t,a)):Y(t,a))},Fe=()=>{const e=k("modal-product-fifo-content");if(!e)return;const t=(l.products||[]).find(y=>String(y.id)===String(Yt));if(!t)return;da(t,l.suppliers||[]);const a=t.suppliers||[],r=t.stockBatches||[],s=xo(t),o=r.filter(y=>(parseFloat(y.remainingQty)||0)>0),i=r.filter(y=>(parseFloat(y.remainingQty)||0)<=0),n=(l.suppliers||[]).filter(y=>!a.some(M=>String(M.supplierId)===String(y.id)));let p=parseFloat(De)||0,d=0;const c=[];if(o.forEach(y=>{if(p<=0)return;const M=parseFloat(y.remainingQty)||0,L=Math.min(M,p),F=L*(parseFloat(y.buyPrice)||0);d+=F,c.push({poNumber:y.poNumber||"BATCH",supplierName:y.supplierName||"Pemasok",qty:L,buyPrice:y.buyPrice,subtotal:F}),p-=L}),p>0){const y=parseFloat(t.hpp)||0,M=p*y;d+=M,c.push({poNumber:"STOK DARURAT (DEFICIT)",supplierName:"Estimasi HPP Standar",qty:p,buyPrice:y,subtotal:M,isDeficit:!0})}const m=De>0?Math.round(d/De):0,b=parseFloat(t.price)||0,f=b*De,h=Math.max(0,f-d),w=xr(t),v=w.filter(y=>y.type==="in"),S=w.filter(y=>y.type==="out"),$=v.reduce((y,M)=>y+M.qty,0),B=S.reduce((y,M)=>y+M.qty,0),I=(t.storeStock||0)+(t.warehouseStock||0),A=ke==="in"?v:ke==="out"?S:w;e.innerHTML=`
        <!-- DRAG PULL INDICATOR (MOBILE BOTTOM SHEET) -->
        <div class="pull-indicator sm:hidden shrink-0"></div>

        <!-- 1. HEADER MODAL (SOLID PINNED / NON-SCROLLING) -->
        <div class="shrink-0 px-5 sm:px-6 py-3.5 sm:py-4 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between z-10">
            <div class="flex items-center gap-3 min-w-0">
                <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-sm shadow-2xs shrink-0" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">
                    <i class="fa-solid fa-boxes-packing"></i>
                </div>
                <div class="min-w-0">
                    <h3 class="text-sm sm:text-base font-black text-slate-800 dark:text-white truncate flex items-center gap-2">
                        <span>${u(t.name)}</span>
                    </h3>
                    <p class="text-[11px] font-bold text-slate-400 truncate">
                        Barcode: <span class="font-mono text-slate-600 dark:text-slate-300">${u(t.sku||"-")}</span> • Kategori: <span class="text-slate-600 dark:text-slate-300">${u(t.category||"Umum")}</span>
                    </p>
                </div>
            </div>
            <div class="flex items-center gap-2 shrink-0">
                <button type="button" onclick="window.closeProductFifoModal?.(); window.openProductBarcodeLabelModal?.('${t.id}')" class="px-3 py-1.5 rounded-xl border text-xs font-bold transition-all active:scale-95 flex items-center gap-1.5 cursor-pointer shadow-2xs hover:opacity-90" style="background: rgba(var(--color-primary-rgb), 0.08); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25);" title="Cetak Label Barcode &amp; Harga">
                    <i class="fa-solid fa-barcode text-xs"></i>
                    <span class="hidden sm:inline">Cetak Label</span>
                </button>
                <button onclick="window.closeProductFifoModal()" class="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white flex items-center justify-center transition-all cursor-pointer active:scale-90 shrink-0" aria-label="Tutup">
                    <i class="fa-solid fa-xmark text-sm"></i>
                </button>
            </div>
        </div>

        <!-- 2. TABS NAVIGASI MODAL FIFO (SOLID PINNED / NON-SCROLLING) -->
        <div class="shrink-0 px-5 sm:px-6 py-2.5 border-b border-slate-100 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-800/40 flex items-center gap-2 z-10 overflow-x-auto hide-scrollbar">
            <button type="button" onclick="window.switchFifoTab('overview')" class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer active:scale-95 shrink-0 ${_e==="overview"?"bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-2xs border border-slate-200 dark:border-slate-600 font-extrabold":"text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"}" style="${_e==="overview"?"color: var(--color-primary);":""}">
                <i class="fa-solid fa-layer-group text-amber-500"></i>
                <span>Ikhtisar &amp; Antrean Batch FIFO</span>
            </button>
            <button type="button" onclick="window.switchFifoTab('ledger')" class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer active:scale-95 shrink-0 ${_e==="ledger"?"bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-2xs border border-slate-200 dark:border-slate-600 font-extrabold":"text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"}" style="${_e==="ledger"?"color: var(--color-primary);":""}">
                <i class="fa-solid fa-book-journal-whills text-teal-500"></i>
                <span>Kartu Mutasi Stok (${w.length})</span>
            </button>
        </div>

        <!-- 3. KONTEN UTAMA (BODY INDEPENDENT OVERFLOW-Y SCROLLABLE) -->
        <div class="flex-1 overflow-y-auto custom-scrollbar min-h-0 bg-white dark:bg-slate-900">
        ${_e==="overview"?`
        <div class="p-5 sm:p-6 space-y-6">
            <!-- 1. BENTO STATS CARDS (DUAL-LOCATION & FIFO VALUATION) -->
            <div class="grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-3">
                <div class="p-3.5 rounded-2xl bg-teal-50/70 dark:bg-teal-950/30 border border-teal-200/80 dark:border-teal-800/70 shadow-2xs">
                    <span class="text-[9px] font-black uppercase tracking-wider text-teal-600 dark:text-teal-400 flex items-center gap-1">
                        <i class="fa-solid fa-store"></i> Stok Rak Toko
                    </span>
                    <p class="text-base sm:text-lg font-black text-slate-800 dark:text-white mt-0.5">${t.storeStock||0} <span class="text-[10px] font-bold text-slate-400">${u(t.unit||"pcs")}</span></p>
                    <p class="text-[9px] font-bold text-teal-600 dark:text-teal-400 mt-0.5">Siap Transaksi Kasir</p>
                </div>
                <div class="p-3.5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/70 shadow-2xs">
                    <span class="text-[9px] font-black uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-1">
                        <i class="fa-solid fa-warehouse"></i> Stok Gudang
                    </span>
                    <p class="text-base sm:text-lg font-black text-slate-800 dark:text-white mt-0.5">${t.warehouseStock||0} <span class="text-[10px] font-bold text-slate-400">${u(t.unit||"pcs")}</span></p>
                    <p class="text-[9px] font-bold text-amber-600 dark:text-amber-400 mt-0.5">Cadangan Belakang</p>
                </div>
                <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/70 shadow-2xs">
                    <span class="text-[9px] font-black uppercase tracking-wider text-slate-400">Total Stok</span>
                    <p class="text-base sm:text-lg font-black text-slate-800 dark:text-white mt-0.5">${s.totalActiveQty} <span class="text-[10px] font-bold text-slate-400">${u(t.unit||"pcs")}</span></p>
                    <p class="text-[9px] font-bold text-slate-400 mt-0.5">${s.activeBatchesCount} Batch Aktif</p>
                </div>
                <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/70 shadow-2xs">
                    <span class="text-[9px] font-black uppercase tracking-wider text-amber-500">HPP Aktif</span>
                    <p class="text-base sm:text-lg font-black text-amber-600 dark:text-amber-400 mt-0.5">${g(t.hpp||0)}</p>
                    <p class="text-[9px] font-bold text-slate-400 mt-0.5">Batch Terdepan</p>
                </div>
                <div class="col-span-2 sm:col-span-1 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/70 shadow-2xs">
                    <span class="text-[9px] font-black uppercase tracking-wider" style="color:var(--color-primary)">Valuasi FIFO</span>
                    <p class="text-base sm:text-lg font-black text-slate-800 dark:text-white mt-0.5" style="color:var(--color-primary)">${g(s.totalValuationRp)}</p>
                    <p class="text-[9px] font-bold text-slate-400 mt-0.5">Aset Bersih PSAK</p>
                </div>
            </div>

            <!-- BANNER MUTASI INTERNAL TOKO & GUDANG -->
            <div class="p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50/80 dark:bg-slate-800/50 flex flex-col gap-3.5 shadow-2xs">
                <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div class="flex items-start sm:items-center gap-3">
                        <div class="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 dark:text-amber-400 flex items-center justify-center text-lg shrink-0 mt-0.5 sm:mt-0">
                            <i class="fa-solid fa-dolly"></i>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 flex-wrap">
                                <h5 class="text-xs sm:text-sm font-black text-slate-800 dark:text-white">Manajemen Pemindahan Stok Internal</h5>
                                <span class="px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300">Dual-Location</span>
                            </div>
                            <p class="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-0.5">Pindahkan stok antara gudang cadangan &amp; rak toko agar kasir selalu siap melayani pelanggan.</p>
                        </div>
                    </div>
                </div>

                <!-- LIVE BREAKDOWN PILLS: STATUS REALTIME DI DALAM KARTU PEMINDAHAN -->
                <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700/80">
                    <div class="p-2 rounded-lg bg-teal-50/70 dark:bg-teal-950/30 border border-teal-200/70 dark:border-teal-800/60 flex flex-col">
                        <span class="text-[9px] font-black uppercase tracking-wider text-teal-600 dark:text-teal-400 flex items-center gap-1">
                            <i class="fa-solid fa-store text-[8px]"></i> Rak Toko (Depan)
                        </span>
                        <span class="text-sm sm:text-base font-black text-slate-900 dark:text-white mt-0.5 font-mono">
                            ${t.storeStock||0} <span class="text-[10px] font-bold text-slate-400">${u(t.unit||"pcs")}</span>
                        </span>
                        <span class="text-[9px] font-bold text-teal-600 dark:text-teal-400">Siap Kasir</span>
                    </div>

                    <div class="p-2 rounded-lg bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/70 dark:border-amber-800/60 flex flex-col">
                        <span class="text-[9px] font-black uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-1">
                            <i class="fa-solid fa-warehouse text-[8px]"></i> Gudang Cadangan
                        </span>
                        <span class="text-sm sm:text-base font-black text-slate-900 dark:text-white mt-0.5 font-mono">
                            ${t.warehouseStock||0} <span class="text-[10px] font-bold text-slate-400">${u(t.unit||"pcs")}</span>
                        </span>
                        <span class="text-[9px] font-bold text-amber-600 dark:text-amber-400">Cadangan Belakang</span>
                    </div>

                    <div class="col-span-2 sm:col-span-1 p-2 rounded-lg bg-slate-100/70 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/60 flex flex-col justify-center">
                        <span class="text-[9px] font-black uppercase tracking-wider text-slate-400">Total Stok Fisik</span>
                        <span class="text-sm sm:text-base font-black text-slate-800 dark:text-white mt-0.5 font-mono">
                            ${(t.storeStock||0)+(t.warehouseStock||0)} <span class="text-[10px] font-bold text-slate-400">${u(t.unit||"pcs")}</span>
                        </span>
                        <span class="text-[9px] font-bold text-slate-400">Rak + Gudang</span>
                    </div>
                </div>

                <!-- AKSI TRANSFER CEPAT DUA ARAH -->
                <div class="flex items-center gap-2 flex-wrap pt-1">
                    <button type="button" onclick="window.quickTransferWarehouseToStore('${t.id}')" class="flex-1 min-w-[140px] px-3.5 py-2.5 rounded-xl primary-bg text-white font-bold text-xs flex items-center justify-center gap-2 active:scale-95 transition-all shadow-xs cursor-pointer ${Number(t.warehouseStock||0)<=0?"opacity-50 cursor-not-allowed":""}">
                        <i class="fa-solid fa-arrow-right text-[11px]"></i>
                        <span>Pindahkan ke Rak (${t.warehouseStock||0} Tersedia)</span>
                    </button>
                    <button type="button" onclick="window.quickTransferStoreToWarehouse('${t.id}')" class="flex-1 min-w-[140px] px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs flex items-center justify-center gap-2 active:scale-95 transition-all shadow-2xs cursor-pointer ${Number(t.storeStock||0)<=0?"opacity-50 cursor-not-allowed":""}">
                        <i class="fa-solid fa-arrow-left text-[11px] text-amber-500"></i>
                        <span>Kembalikan ke Gudang</span>
                    </button>
                </div>

                <!-- JIKA PRODUK BERVARIAN: TAMPILKAN DAFTAR VARIAN & TOMBOL PINDAH PER-VARIAN -->
                ${Array.isArray(t.variants)&&t.variants.length>0?`
                <div class="mt-2 pt-3 border-t border-slate-200/80 dark:border-slate-700/80 space-y-2">
                    <span class="text-[10px] font-black uppercase tracking-wider text-slate-400 block">Rincian Per Varian Produk:</span>
                    <div class="space-y-1.5">
                        ${t.variants.map(y=>`
                            <div class="p-2 sm:p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-700/70 flex items-center justify-between gap-2 flex-wrap">
                                <div class="min-w-0">
                                    <span class="font-black text-xs text-slate-800 dark:text-white block truncate">${u(y.name)}</span>
                                    <span class="text-[10px] text-slate-400 font-medium">
                                        Rak: <b class="text-teal-600 dark:text-teal-400 font-mono">${y.storeStock||0}</b> • Gudang: <b class="text-amber-600 dark:text-amber-400 font-mono">${y.warehouseStock||0}</b> (Tot: ${(y.storeStock||0)+(y.warehouseStock||0)})
                                    </span>
                                </div>
                                <div class="flex items-center gap-1.5 shrink-0">
                                    <button type="button" onclick="window.quickTransferStock('${t.id}', 'to_store', '${u(y.name)}')" class="px-2.5 py-1.5 rounded-lg primary-bg text-white font-bold text-[10px] flex items-center gap-1 active:scale-95 cursor-pointer shadow-2xs" ${Number(y.warehouseStock||0)<=0?'disabled style="opacity:0.5;cursor:not-allowed;"':""} title="Pindahkan varian ini ke rak">
                                        <i class="fa-solid fa-arrow-right text-[9px]"></i> Ke Rak
                                    </button>
                                    <button type="button" onclick="window.quickTransferStock('${t.id}', 'to_warehouse', '${u(y.name)}')" class="px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-[10px] flex items-center gap-1 active:scale-95 cursor-pointer border border-slate-200 dark:border-slate-700" ${Number(y.storeStock||0)<=0?'disabled style="opacity:0.5;cursor:not-allowed;"':""} title="Kembalikan varian ini ke gudang">
                                        <i class="fa-solid fa-arrow-left text-[9px]"></i> Ke Gudang
                                    </button>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                </div>
                `:""}
            </div>

            <!-- 2. SECTION: REKANAN MULTI-SUPPLIER PRODUK -->
            <div class="space-y-3">
                <div class="flex items-center justify-between flex-wrap gap-2">
                    <h4 class="text-xs sm:text-sm font-black text-slate-800 dark:text-white flex items-center gap-2">
                        <i class="fa-solid fa-truck-field text-teal-500"></i>
                        <span>Daftar Supplier Pemasok (${a.length})</span>
                    </h4>
                    <span class="text-[11px] text-slate-400 font-medium">Bisa pesan ke supplier mana pun saat kulakan</span>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    ${a.map(y=>{const M=!!y.isPrimary,F=(l.suppliers||[]).find(V=>String(V.id)===String(y.supplierId))?.phone||"";return`
                            <div class="p-4 rounded-2xl border transition-all ${M?"bg-teal-50/50 dark:bg-teal-950/20 border-teal-300 dark:border-teal-800 shadow-sm":"bg-white dark:bg-slate-800 border-slate-200/90 dark:border-slate-700/80"} flex flex-col justify-between gap-3">
                                <div class="flex items-start justify-between gap-2">
                                    <div>
                                        <div class="flex items-center gap-2 flex-wrap">
                                            <span class="font-black text-xs sm:text-sm text-slate-800 dark:text-white">${u(y.supplierName||"Supplier")}</span>
                                            ${M?`
                                                <span class="px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-wider bg-teal-600 text-white shadow-2xs">
                                                    <i class="fa-solid fa-star text-[8px] mr-1"></i>Supplier Utama
                                                </span>
                                            `:`
                                                <span class="px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300">
                                                    Rekanan Pendukung
                                                </span>
                                            `}
                                        </div>
                                        <p class="text-[11px] font-bold text-slate-400 mt-1">
                                            Harga Beli Terakhir: <b class="text-slate-700 dark:text-slate-200">${g(y.lastBuyPrice||0)}</b>
                                            ${y.supplierSku?` • SKU: <span class="font-mono">${u(y.supplierSku)}</span>`:""}
                                        </p>
                                    </div>
                                    <div class="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-700/60 flex items-center justify-center text-slate-500 shrink-0">
                                        <i class="fa-solid fa-building text-xs"></i>
                                    </div>
                                </div>

                                <div class="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-700/60 flex-wrap">
                                    ${M?"":`
                                        <button onclick="window.handleSetFifoPrimarySupplier('${u(y.supplierId)}')" class="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-700 hover:bg-teal-50 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800 text-[10px] font-black transition-all cursor-pointer active:scale-95 shadow-2xs">
                                            <i class="fa-solid fa-check mr-1"></i>Set Utama
                                        </button>
                                    `}
                                    <button onclick="window.closeProductFifoModal(); if(window.openCreatePOModal) window.openCreatePOModal('${u(y.supplierId)}');" class="px-3 py-1.5 rounded-xl text-white text-[10px] font-black transition-all cursor-pointer active:scale-95 shadow-2xs flex items-center gap-1" style="background:var(--color-primary)">
                                        <i class="fa-solid fa-cart-plus text-[9px]"></i>Buat PO Kulakan
                                    </button>
                                    ${F?`
                                        <a href="https://wa.me/${F.replace(/\\D/g,"")}?text=${encodeURIComponent(`Halo Sales ${y.supplierName}, kami dari Toko Putri ingin menanyakan ketersediaan dan harga untuk produk: ${t.name}`)}" target="_blank" class="px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-[10px] font-bold transition-all flex items-center gap-1">
                                            <i class="fa-brands fa-whatsapp text-emerald-500"></i>Chat Sales
                                        </a>
                                    `:""}
                                </div>
                            </div>
                        `}).join("")}
                </div>

                <!-- FORM TAMBAH SUPPLIER REKANAN BARU -->
                ${n.length>0?`
                    <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-dashed border-slate-300 dark:border-slate-700 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                        <div class="flex-1 flex flex-col sm:flex-row gap-2">
                            <select id="fifo-new-sup-select" class="admin-input shadow-sm bg-white dark:bg-slate-800 text-xs font-bold flex-1">
                                <option value="">-- Hubungkan Supplier Baru --</option>
                                ${n.map(y=>`<option value="${y.id}">${u(y.name)}${y.code?` (${u(y.code)})`:""}</option>`).join("")}
                            </select>
                            <input type="number" id="fifo-new-sup-price" placeholder="Harga Beli Modal (Rp)" class="admin-input shadow-sm bg-white dark:bg-slate-800 text-xs font-bold w-full sm:w-48">
                        </div>
                        <button onclick="window.handleLinkFifoSupplier()" class="px-4 py-2.5 rounded-xl text-white font-bold text-xs shadow-2xs active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer shrink-0" style="background:var(--color-primary)">
                            <i class="fa-solid fa-plus text-[10px]"></i>
                            <span>Hubungkan</span>
                        </button>
                    </div>
                `:""}
            </div>

            <!-- 3. SECTION: ANTREAN BATCH FIFO (LOT INVENTORY) -->
            <div class="space-y-3">
                <div class="flex items-center justify-between flex-wrap gap-2">
                    <h4 class="text-xs sm:text-sm font-black text-slate-800 dark:text-white flex items-center gap-2">
                        <i class="fa-solid fa-layer-group text-amber-500"></i>
                        <span>Antrean Batch FIFO Berjalan (First-In, First-Out)</span>
                    </h4>
                    <span class="text-[11px] text-slate-400 font-medium">Stok teratas otomatis dijual lebih dulu di kasir</span>
                </div>

                <div class="space-y-2.5">
                    ${o.length===0?`
                        <div class="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700 text-center">
                            <i class="fa-solid fa-box-open text-3xl text-slate-300 dark:text-slate-600 mb-2"></i>
                            <p class="text-xs font-bold text-slate-500">Belum ada batch aktif dengan sisa stok.</p>
                            <p class="text-[11px] text-slate-400 mt-0.5">Stok akan terisi otomatis saat Anda menerima barang dari PO Pembelian.</p>
                        </div>
                    `:o.map((y,M)=>{const L=M===0,F=y.initialQty>0?Math.round(y.remainingQty/y.initialQty*100):100,V=y.receivedAt?new Date(y.receivedAt).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):"Awal";return`
                            <div class="p-4 rounded-2xl border transition-all ${L?"bg-amber-50/40 dark:bg-amber-950/20 border-amber-300 dark:border-amber-800/80 shadow-sm":"bg-white dark:bg-slate-800 border-slate-200/90 dark:border-slate-700/80"}">
                                <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-2">
                                    <div class="flex items-center gap-2 flex-wrap">
                                        <span class="w-6 h-6 rounded-lg text-xs font-black flex items-center justify-center ${L?"bg-amber-500 text-white shadow-xs":"bg-slate-100 dark:bg-slate-700 text-slate-500"}">
                                            #${M+1}
                                        </span>
                                        <span class="font-black text-xs sm:text-sm text-slate-800 dark:text-white">${u(y.poNumber||"BATCH MASUK")}</span>
                                        ${L?`
                                            <span class="px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-wider bg-emerald-500 text-white shadow-2xs flex items-center gap-1">
                                                <i class="fa-solid fa-circle-play text-[7px]"></i>Sedang Dijual Sekarang
                                            </span>
                                        `:`
                                            <span class="px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-700 text-slate-500">
                                                Antrean Ke-${M+1}
                                            </span>
                                        `}
                                    </div>
                                    <div class="text-right">
                                        <span class="text-xs font-black text-slate-700 dark:text-slate-200">HPP: ${g(y.buyPrice)}</span>
                                        <span class="text-[10px] text-slate-400 block">${V}</span>
                                    </div>
                                </div>

                                <div class="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1.5">
                                    <span>Pemasok: <b class="text-slate-700 dark:text-slate-300">${u(y.supplierName||"-")}</b></span>
                                    <span>Sisa: <b class="text-slate-800 dark:text-white font-mono font-bold">${y.remainingQty}</b> / ${y.initialQty} ${u(t.unit||"pcs")} (${F}%)</span>
                                </div>

                                <!-- PROGRESS BAR SISA STOK -->
                                <div class="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden">
                                    <div class="h-full rounded-full transition-all duration-500 ${L?"bg-amber-500":"bg-teal-500"}" style="width: ${Math.min(100,Math.max(0,F))}%"></div>
                                </div>
                            </div>
                        `}).join("")}
                </div>

                ${i.length>0?`
                    <p class="text-[11px] font-bold text-slate-400 flex items-center gap-1 mt-2">
                        <i class="fa-solid fa-clock-rotate-left"></i>
                        <span>Ada ${i.length} batch masa lalu yang telah habis terjual sempurna.</span>
                    </p>
                `:""}
            </div>

            <!-- 4. SECTION: SIMULATOR ALOKASI PENJUALAN FIFO REALTIME -->
            <div class="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 text-white shadow-xl space-y-4">
                <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div>
                        <h4 class="text-xs sm:text-sm font-black flex items-center gap-2">
                            <i class="fa-solid fa-calculator text-amber-400"></i>
                            <span>Simulator Alokasi Penjualan FIFO</span>
                        </h4>
                        <p class="text-[11px] text-slate-400 mt-0.5">Lihat bagaimana sistem memotong batch dan menghitung laba bersih transaksi</p>
                    </div>
                    <div class="flex items-center gap-2 bg-slate-800/80 p-1.5 rounded-xl border border-slate-700">
                        <span class="text-[11px] font-bold text-slate-300 px-2">Jumlah Jual:</span>
                        <input type="number" min="1" max="999" value="${De}" onchange="window.handleFifoSimulateChange(this.value)" class="w-16 bg-slate-900 text-white text-xs font-black text-center py-1 rounded-lg border border-slate-600 focus:outline-none focus:border-amber-400">
                    </div>
                </div>

                <div class="p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/60 text-xs space-y-2">
                    <p class="text-[11px] font-bold text-slate-300">Alokasi Pemotongan:</p>
                    <div class="space-y-1 text-slate-300 font-mono text-[11px]">
                        ${c.map(y=>`
                            <div class="flex items-center justify-between py-0.5 border-b border-slate-800">
                                <span>• ${y.qty} ${u(t.unit||"pcs")} dari <b>${u(y.poNumber)}</b> (${u(y.supplierName)}) @ ${g(y.buyPrice)}</span>
                                <span class="font-bold text-amber-300">${g(y.subtotal)}</span>
                            </div>
                        `).join("")}
                    </div>
                </div>

                <div class="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800 text-center">
                    <div>
                        <span class="text-[9px] text-slate-400 uppercase font-black">Total HPP Riil</span>
                        <p class="text-sm sm:text-base font-black text-amber-400">${g(d)}</p>
                        <span class="text-[9px] text-slate-500">Rata-rata: ${g(m)}/unit</span>
                    </div>
                    <div>
                        <span class="text-[9px] text-slate-400 uppercase font-black">Omzet Jual</span>
                        <p class="text-sm sm:text-base font-black text-white">${g(f)}</p>
                        <span class="text-[9px] text-slate-500">Harga: ${g(b)}</span>
                    </div>
                    <div>
                        <span class="text-[9px] text-slate-400 uppercase font-black">Laba Kotor Transaksi</span>
                        <p class="text-sm sm:text-base font-black text-emerald-400">+${g(h)}</p>
                        <span class="text-[9px] text-emerald-500 font-bold">Margin Bersih Akurat</span>
                    </div>
                </div>
            </div>
        </div>
        `:`
        <!-- TAB KARTU MUTASI STOK (STOCK CARD LEDGER) -->
        <div class="p-5 sm:p-6 space-y-5">
            <!-- 1. BENTO STATS MUTASI STOK (KOMPAK 3-KOLOM DENGAN IKON VALID) -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div class="p-4 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-200/90 dark:border-emerald-800/70 shadow-2xs">
                    <span class="text-[9.5px] font-black uppercase tracking-wider text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                        <i class="fa-solid fa-arrow-down-to-bracket text-emerald-600 dark:text-emerald-400"></i> Total Barang Masuk (PO)
                    </span>
                    <p class="text-lg sm:text-xl font-black mt-1 font-mono" style="color: #059669;">
                        +${$} <span class="text-xs font-bold text-slate-400">${u(t.unit||"pcs")}</span>
                    </p>
                    <p class="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 mt-0.5">${v.length} Dokumen Kulakan Masuk</p>
                </div>

                <div class="p-4 rounded-2xl bg-rose-50/80 dark:bg-rose-950/30 border border-rose-200/90 dark:border-rose-800/70 shadow-2xs">
                    <span class="text-[9.5px] font-black uppercase tracking-wider text-rose-700 dark:text-rose-400 flex items-center gap-1.5">
                        <i class="fa-solid fa-arrow-up-from-bracket text-rose-600 dark:text-rose-400"></i> Total Barang Keluar (Penjualan)
                    </span>
                    <p class="text-lg sm:text-xl font-black mt-1 font-mono" style="color: #e11d48;">
                        -${B} <span class="text-xs font-bold text-slate-400">${u(t.unit||"pcs")}</span>
                    </p>
                    <p class="text-[10px] font-bold text-rose-700 dark:text-rose-400 mt-0.5">${S.length} Transaksi Kasir &amp; Web</p>
                </div>

                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/90 dark:border-slate-700/70 shadow-2xs">
                    <span class="text-[9.5px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                        <i class="fa-solid fa-boxes-stacked text-slate-500 dark:text-slate-400"></i> Saldo Stok Fisik Realtime
                    </span>
                    <p class="text-lg sm:text-xl font-black text-slate-800 dark:text-white mt-1 font-mono">
                        ${I} <span class="text-xs font-bold text-slate-400">${u(t.unit||"pcs")}</span>
                    </p>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">Toko: ${t.storeStock||0} • Gudang: ${t.warehouseStock||0}</p>
                </div>
            </div>

            <!-- 2. FILTER SEGMENTED KARTU MUTASI (DENGAN IKON VALID) -->
            <div class="flex items-center justify-between flex-wrap gap-2 pt-1 border-t border-slate-100 dark:border-slate-800">
                <div class="flex items-center gap-1.5 overflow-x-auto hide-scrollbar text-xs font-bold">
                    <button type="button" onclick="window.setLedgerFilter('all')" class="px-3 py-1.5 rounded-xl border transition-all cursor-pointer active:scale-95 ${ke==="all"?"bg-slate-900 text-white border-slate-900 dark:bg-white dark:text-slate-900 shadow-2xs":"bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-transparent"}">
                        Semua Riwayat (${w.length})
                    </button>
                    <button type="button" onclick="window.setLedgerFilter('in')" class="px-3 py-1.5 rounded-xl border transition-all cursor-pointer active:scale-95 ${ke==="in"?"text-white border-transparent shadow-2xs":"bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 border-transparent"}" style="${ke==="in"?"background-color: #059669;":""}">
                        <i class="fa-solid fa-arrow-down-to-bracket mr-1"></i>Barang Masuk (${v.length})
                    </button>
                    <button type="button" onclick="window.setLedgerFilter('out')" class="px-3 py-1.5 rounded-xl border transition-all cursor-pointer active:scale-95 ${ke==="out"?"text-white border-transparent shadow-2xs":"bg-rose-50 dark:bg-rose-950/30 text-rose-700 dark:text-rose-300 border-transparent"}" style="${ke==="out"?"background-color: #e11d48;":""}">
                        <i class="fa-solid fa-arrow-up-from-bracket mr-1"></i>Barang Keluar (${S.length})
                    </button>
                </div>
                <span class="text-[11px] text-slate-400 font-medium">Buku Mutasi Stok Riil Berbasis Dokumen Transaksi</span>
            </div>

            <!-- 3. TABEL / LIST MUTASI KARTU STOK (DENGAN IKON SOLID & WARNA TEGAS) -->
            <div class="space-y-2">
                ${A.length===0?`
                    <div class="p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700 text-center">
                        <i class="fa-solid fa-clipboard-list text-3xl text-slate-300 dark:text-slate-600 mb-2"></i>
                        <p class="text-xs font-bold text-slate-600 dark:text-slate-300">Belum ada catatan mutasi stok untuk filter ini.</p>
                        <p class="text-[11px] text-slate-400 mt-0.5">Riwayat akan terisi otomatis saat kulakan PO diterima atau pesanan kasir diproses.</p>
                    </div>
                `:A.map(y=>{const M=y.type==="in",L=new Date(y.date).toLocaleDateString("id-ID",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"});return`
                        <div class="p-3.5 sm:p-4 rounded-2xl border transition-all bg-white dark:bg-slate-800 border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                            <div class="flex items-start gap-3 min-w-0">
                                <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-sm shrink-0" style="${M?"background-color: #ecfdf5; color: #059669; border: 1px solid #a7f3d0;":"background-color: #fff1f2; color: #e11d48; border: 1px solid #fecdd3;"}">
                                    <i class="fa-solid ${M?"fa-arrow-down-to-bracket":"fa-arrow-up-from-bracket"}"></i>
                                </div>
                                <div class="min-w-0">
                                    <div class="flex items-center gap-2 flex-wrap">
                                        <span class="px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-wider shadow-2xs" style="${M?"background-color: #059669; color: #ffffff;":"background-color: #e11d48; color: #ffffff;"}">
                                            ${M?"Masuk":"Keluar"}
                                        </span>
                                        <span class="font-black text-xs sm:text-sm text-slate-800 dark:text-white font-mono">${u(y.refNo)}</span>
                                        <span class="text-[10px] text-slate-400 font-medium">• ${L}</span>
                                    </div>
                                    <p class="text-[11px] text-slate-600 dark:text-slate-300 mt-1 font-medium truncate">
                                        ${u(y.title)} • <span class="text-slate-500 font-bold">${u(y.party)}</span>
                                    </p>
                                    <p class="text-[10px] text-slate-400 mt-0.5">
                                        Lokasi: <b class="text-slate-700 dark:text-slate-300">${u(y.location)}</b> ${y.notes?`• ${u(y.notes)}`:""}
                                    </p>
                                </div>
                            </div>
                            <div class="text-left sm:text-right shrink-0 border-t sm:border-t-0 pt-2 sm:pt-0 w-full sm:w-auto border-slate-100 dark:border-slate-700 flex sm:flex-col justify-between sm:justify-center items-center sm:items-end">
                                <span class="text-base sm:text-lg font-black font-mono" style="${M?"color: #059669;":"color: #e11d48;"}">
                                    ${M?`+${y.qty}`:`-${y.qty}`} <span class="text-xs font-bold text-slate-400">${u(y.unit)}</span>
                                </span>
                                ${y.price>0?`<span class="text-[10px] text-slate-400 block font-mono">@ ${g(y.price)}</span>`:""}
                            </div>
                        </div>
                    `}).join("")}
            </div>
        </div>
        `}
        </div>

        <!-- 4. FOOTER MODAL (SOLID PINNED / NON-SCROLLING) -->
        <div class="shrink-0 px-4 sm:px-6 py-3 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between z-10 flex-wrap gap-2">
            <div class="flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400 flex-wrap">
                <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    <i class="fa-solid fa-boxes-stacked text-[10px] text-slate-400"></i>
                    <span>Total Fisik: <b class="text-slate-900 dark:text-white font-mono">${I}</b> ${u(t.unit||"pcs")}</span>
                </span>
                <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300 border border-teal-200/80 dark:border-teal-800/80 text-[11px]">
                    <i class="fa-solid fa-store text-[10px] text-teal-600 dark:text-teal-400"></i>
                    <span>Rak: <b class="font-mono font-black">${t.storeStock||0}</b></span>
                </span>
                <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200/80 dark:border-amber-800/80 text-[11px]">
                    <i class="fa-solid fa-warehouse text-[10px] text-amber-600 dark:text-amber-400"></i>
                    <span>Gudang: <b class="font-mono font-black">${t.warehouseStock||0}</b></span>
                </span>
            </div>
            <button onclick="window.closeProductFifoModal()" class="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-black text-xs transition-all cursor-pointer active:scale-95 shrink-0 ml-auto">
                Tutup
            </button>
        </div>
    `},Fo=async()=>{const e=k("fifo-new-sup-select")?.value,t=parseFloat(k("fifo-new-sup-price")?.value)||0;if(!e)return x("Pilih supplier terlebih dahulu!");const a=(l.products||[]).find(s=>String(s.id)===String(Yt));if(!a)return;const r=(l.suppliers||[]).find(s=>String(s.id)===String(e));mo(a,{supplierId:e,supplierName:r?r.name:"Supplier Rekanan",lastBuyPrice:t,isPrimary:!1}),R("Menghubungkan Supplier...");try{await P.collection("freshmart").doc("cms_data").collection("products").doc(a.id.toString()).update({suppliers:a.suppliers,supplierId:a.supplierId}),C(),x("Supplier berhasil dihubungkan ke produk!"),Fe(),window.rAdmItms?.("products")}catch(s){C(),x("Gagal menghubungkan supplier: "+s.message)}},Ko=async e=>{const t=(l.products||[]).find(a=>String(a.id)===String(Yt));if(t){uo(t,e),R("Memperbarui Supplier Utama...");try{await P.collection("freshmart").doc("cms_data").collection("products").doc(t.id.toString()).update({suppliers:t.suppliers,supplierId:t.supplierId}),C(),x("Supplier utama berhasil diubah! ⭐"),Fe(),window.rAdmItms?.("products")}catch(a){C(),x("Gagal mengubah supplier: "+a.message)}}},Uo=e=>{De=Math.max(1,parseInt(e,10)||1),Fe()},Na=async(e,t="to_store",a="")=>{const r=(l.products||[]).find($=>String($.id)===String(e));if(!r)return x("Produk tidak ditemukan!");da(r,l.suppliers||[]);const s=Array.isArray(r.variants)&&r.variants.length>0;let o=a;if(s&&!o)if(r.variants.length===1)o=r.variants[0].name;else{const $=r.variants.map((A,y)=>`${y+1}. ${A.name} (Rak: ${A.storeStock||0}, Gudang: ${A.warehouseStock||0})`).join(`
`),B=await(typeof window.customPrompt=="function"?window.customPrompt(`Pilih Nomor Varian yang akan dipindahkan:
${$}`,"1"):Promise.resolve(null));if(!B)return;const I=parseInt(B,10)-1;if(I>=0&&I<r.variants.length)o=r.variants[I].name;else{const A=r.variants.find(y=>y.name.toLowerCase()===B.trim().toLowerCase());if(A)o=A.name;else return x("Pilihan varian tidak valid!")}}let i=r;if(o&&s){const $=r.variants.find(B=>B.name===o);$&&(i=$)}const n=t==="to_store"?"warehouse":"store",p=t==="to_store"?"store":"warehouse",d=n==="warehouse"?"Gudang Cadangan":"Rak Toko",c=p==="warehouse"?"Gudang Cadangan":"Rak Toko",b=Number(i[n==="warehouse"?"warehouseStock":"storeStock"])||0;if(b<=0)return x(`Stok di ${d} saat ini kosong (0)!`);const f=o?` [${o}]`:"",h=String(Math.min(b,10)),w=t==="to_store"?`Pindahkan ke Rak Toko${f}
(Tersedia di ${d}: ${b} ${r.unit||"pcs"}):`:`Kembalikan ke Gudang Cadangan${f}
(Tersedia di ${d}: ${b} ${r.unit||"pcs"}):`,v=await(typeof window.customPrompt=="function"?window.customPrompt(w,h):Promise.resolve(null));if(!v)return;const S=parseFloat(v)||0;if(S<=0)return x("Jumlah yang dimasukkan tidak valid!");if(S>b)return x(`Jumlah melebihi stok ${d} (maksimal ${b})!`);R(`Memindahkan stok ke ${c}...`);try{const $=bo(r,n,p,S,o);if(!$.success)throw new Error($.error||$.message||"Gagal memindahkan stok");Array.isArray(r.internalTransfers)&&r.internalTransfers.length>0&&(r.internalTransfers[r.internalTransfers.length-1].userName=window.currentUser?.name||"Staf Toko");const B={storeStock:r.storeStock,warehouseStock:r.warehouseStock,stock:r.stock,stockBatches:r.stockBatches||[],internalTransfers:(r.internalTransfers||[]).slice(-50)};s&&(B.variants=r.variants),await P.collection("freshmart").doc("cms_data").collection("products").doc(r.id.toString()).update(B);try{localStorage.setItem("freshmart_products",JSON.stringify(l.products))}catch{}await(typeof N=="function"?N:window.saveApp||(async()=>{}))([],{updateType:"stock_change",updatedProductIds:[r.id.toString()]}),C(),x(`Sukses memindahkan ${S} ${r.unit||"pcs"} ke ${c}!`),Fe(),window.rAdmItms?.("products")}catch($){C(),x("Gagal memindahkan stok: "+$.message)}},Ho=e=>Na(e,"to_store"),Go=e=>Na(e,"to_warehouse");window.openProductFifoModal=fr;window.closeProductFifoModal=Oo;window.switchFifoTab=_o;window.setLedgerFilter=Eo;window.getProductMutationLedger=xr;window.handleLinkFifoSupplier=Fo;window.handleSetFifoPrimarySupplier=Ko;window.handleFifoSimulateChange=Uo;window.quickTransferStock=Na;window.quickTransferWarehouseToStore=Ho;window.quickTransferStoreToWarehouse=Go;let St=null;const Xe=async e=>{if(!e||!e.length)return;let t=l.productOrder&&l.productOrder.length?[...l.productOrder]:(l.products||[]).map(o=>String(o.id));const a=new Set(t);(l.products||[]).forEach(o=>{const i=String(o.id);a.has(i)||(t.push(i),a.add(i))});const r=new Set(e),s=[];t.forEach((o,i)=>{r.has(o)&&s.push(i)}),e.forEach((o,i)=>{i<s.length&&(t[s[i]]=o)}),l.productOrder=t,ns(l.products);try{await(typeof N=="function"?N:window.saveApp||(async()=>{}))(["productOrder"]),x("Urutan produk berhasil disimpan!")}catch(o){console.warn("Gagal simpan urutan produk:",o)}rAdmItms("products")};window.applyNewProductOrder=Xe;window.moveProductOrder=async(e,t)=>{const a=String(e),r=[...l.products||[]],s=(Oe||window.aSq||"").toLowerCase().trim(),o=s.replace(/^\][a-zA-Z0-9]{2}/,"").trim()||s,i=r.filter(m=>{const b=String(m.name||m.title||m.bankName||m.code||""),f=String(m.sku||""),h=String(m.barcode||""),w=String(m.phone||""),v=String(m.id||""),S=`sku-${v}`;let $=(b+" "+f+" "+h+" "+w+" "+v+" "+S).toLowerCase().includes(o);return!$&&m.variants&&($=m.variants.some((B,I)=>{const A=String(B.sku||"").toLowerCase(),y=String(B.barcode||"").toLowerCase(),M=`${f||v}-${I+1}`.toLowerCase();return A&&A.includes(o)||y&&y.includes(o)||M.includes(o)})),$}),n=i.findIndex(m=>String(m.id)===a);if(n===-1)return;const p=n+t;if(p<0||p>=i.length)return;const d=i.map(m=>String(m.id)),c=d[n];d[n]=d[p],d[p]=c,await Xe(d)};window.jumpProductOrder=async e=>{const t=String(e),a=[...l.products||[]],r=(Oe||window.aSq||"").toLowerCase(),s=a.filter(p=>{let d=(p.name||p.title||p.bankName||p.code||p.sku||p.phone||"").toLowerCase().includes(r);return!d&&p.variants&&(d=p.variants.some(c=>c.sku&&c.sku.toLowerCase().includes(r))),d}),o=s.findIndex(p=>String(p.id)===t);if(o===-1)return;const i=s[o],n=typeof window.customPrompt=="function"?window.customPrompt:null;n&&n(`Pindahkan urutan "${i.name}" (1 - ${s.length}):`,String(o+1),async p=>{if(!p)return;const d=parseInt(p,10);if(isNaN(d)||d<1||d>s.length)return x(`Nomor urut harus antara 1 sampai ${s.length}`);const c=d-1;if(c===o)return;const m=s.map(f=>String(f.id)),[b]=m.splice(o,1);m.splice(c,0,b),await Xe(m)})};window.autoGroupProductsByCategory=async()=>{window.showConfirm?.("Rapikan per Kategori","Susun produk otomatis berdasarkan Kategori dan Jenis (Sub-Kategori) agar produk sejenis (seperti semen, paku, cat) berkelompok rapi?",async()=>{const e=[...l.products||[]];e.sort((a,r)=>{const s=(a.category||"").toLowerCase(),o=(r.category||"").toLowerCase();if(s!==o)return s.localeCompare(o);const i=(a.subCategory||"").toLowerCase(),n=(r.subCategory||"").toLowerCase();return i!==n?i.localeCompare(n):(a.name||"").localeCompare(r.name||"")});const t=e.map(a=>String(a.id));await Xe(t),x("Produk berhasil dirapikan per kategori!")},"Ya, Rapikan",!1)};window.toggleProductOrderMenu=e=>{e&&e.stopPropagation();const t=k("admin-product-order-dropdown");t&&t.classList.toggle("hidden")};window.sortProductsQuick=async e=>{const t=k("admin-product-order-dropdown");t&&t.classList.add("hidden");const a=[...l.products||[]];e==="az"?a.sort((s,o)=>(s.name||"").localeCompare(o.name||"")):e==="za"?a.sort((s,o)=>(o.name||"").localeCompare(s.name||"")):e==="price_low"?a.sort((s,o)=>(parseFloat(s.price)||0)-(parseFloat(o.price)||0)):e==="price_high"?a.sort((s,o)=>(parseFloat(o.price)||0)-(parseFloat(s.price)||0)):e==="reset_newest"&&a.sort((s,o)=>(o.id||0)-(s.id||0));const r=a.map(s=>String(s.id));await Xe(r)};typeof document<"u"&&document.addEventListener("click",e=>{const t=k("admin-product-order-dropdown-wrap"),a=k("admin-product-order-dropdown");t&&a&&!t.contains(e.target)&&a.classList.add("hidden")});const Vo=()=>{const e=k("admin-list-container");if(!e)return;if(St){try{St.destroy()}catch{}St=null}(wt||window.cTab||"products")==="products"&&(St=new ko(e,{handle:".product-drag-handle",animation:200,ghostClass:"opacity-30",chosenClass:"ring-2",dragClass:"shadow-2xl",forceFallback:!1,onEnd:async a=>{if(a.oldIndex===a.newIndex)return;const s=Array.from(e.querySelectorAll("[data-id]")).map(o=>o.getAttribute("data-id")).filter(Boolean);await Xe(s)}}))};window.rAdmL=e=>{if(et(e),typeof window.setCTab=="function"&&window.setCTab(e),window.cTab=e,e==="colors"&&typeof window.rAdmMasterCatalogView=="function"){window.rAdmMasterCatalogView();return}const t=e==="products"?'<div id="admin-product-stats" class="mb-5"></div>':"",a=e==="colors"?`
        <div class="flex gap-2 mb-4 flex-wrap">
            <button onclick="openImportFromProductsModal()" class="h-11 px-4 rounded-xl primary-bg-soft border primary-border text-[var(--color-primary)] font-bold text-xs uppercase tracking-widest hover:primary-bg hover:text-white transition-all active:scale-95 shadow-2xs flex items-center gap-2 cursor-pointer"><i class="fa-solid fa-box-archive"></i> Impor dari Semua Produk</button>
        </div>`:"",r=e==="products"?`
        <div class="flex items-center justify-between gap-3 flex-wrap mb-4 px-1">
            <div class="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 font-bold text-[11px]">
                <i class="fa-solid fa-up-down-left-right text-[var(--color-primary)]"></i>
                <span class="hidden sm:inline">Tahan &amp; geser pegangan <i class="fa-solid fa-grip-vertical opacity-60"></i> atau panah untuk mengatur urutan produk.</span>
                <span class="sm:hidden">Geser <i class="fa-solid fa-grip-vertical opacity-60"></i> / panah untuk atur urutan.</span>
            </div>
            <div class="flex items-center gap-2 ml-auto flex-wrap">
                ${(l.suppliers||[]).length>0?`
                    <div class="relative inline-block">
                        <select onchange="window.adminSupplierFilter = this.value; rAdmItms('products');" class="h-10 px-3.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold text-xs border border-slate-200/90 dark:border-slate-700/80 cursor-pointer shadow-2xs hover:bg-slate-50 transition-colors">
                            <option value="">Semua Supplier (${(l.suppliers||[]).length})</option>
                            ${(l.suppliers||[]).map(o=>`<option value="${o.id}" ${window.adminSupplierFilter===String(o.id)?"selected":""}>${u(o.name)}</option>`).join("")}
                        </select>
                    </div>
                `:""}
                <button onclick="window.autoGroupProductsByCategory()" class="h-10 px-3.5 rounded-xl bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs transition-all active:scale-95 shadow-2xs border border-slate-200/90 dark:border-slate-700/80 flex items-center gap-1.5 cursor-pointer" title="Otomatis kumpulkan produk sejenis">
                    <i class="fa-solid fa-layer-group text-[var(--color-primary)]"></i> Rapikan per Kategori
                </button>
                <div class="relative inline-block" id="admin-product-order-dropdown-wrap">
                    <button onclick="window.toggleProductOrderMenu(event)" class="h-10 px-3.5 rounded-xl bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs transition-all active:scale-95 shadow-2xs border border-slate-200/90 dark:border-slate-700/80 flex items-center gap-1.5 cursor-pointer">
                        <i class="fa-solid fa-arrow-down-a-z"></i> Urutkan Cepat <i class="fa-solid fa-chevron-down text-[9px] opacity-60"></i>
                    </button>
                    <div id="admin-product-order-dropdown" class="hidden absolute right-0 mt-1.5 w-52 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-xl p-1.5 z-40 text-xs font-bold">
                        <button onclick="window.sortProductsQuick('az')" class="w-full text-left px-3 py-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/60 flex items-center gap-2 text-slate-700 dark:text-slate-200"><i class="fa-solid fa-arrow-down-a-z text-slate-400"></i> Nama A - Z</button>
                        <button onclick="window.sortProductsQuick('za')" class="w-full text-left px-3 py-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/60 flex items-center gap-2 text-slate-700 dark:text-slate-200"><i class="fa-solid fa-arrow-down-z-a text-slate-400"></i> Nama Z - A</button>
                        <button onclick="window.sortProductsQuick('price_low')" class="w-full text-left px-3 py-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/60 flex items-center gap-2 text-slate-700 dark:text-slate-200"><i class="fa-solid fa-arrow-down-1-9 text-slate-400"></i> Harga Termurah</button>
                        <button onclick="window.sortProductsQuick('price_high')" class="w-full text-left px-3 py-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/60 flex items-center gap-2 text-slate-700 dark:text-slate-200"><i class="fa-solid fa-arrow-down-9-1 text-slate-400"></i> Harga Termahal</button>
                        <div class="h-px bg-slate-100 dark:bg-slate-700 my-1"></div>
                        <button onclick="window.sortProductsQuick('reset_newest')" class="w-full text-left px-3 py-2 rounded-xl hover:bg-rose-50 dark:hover:bg-rose-950/40 flex items-center gap-2 text-rose-500"><i class="fa-solid fa-rotate-left"></i> Reset ke ID Terbaru</button>
                    </div>
                </div>
            </div>
        </div>`:"",s=e==="banners"?`
        <div class="mb-5 p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white border border-[rgba(var(--color-primary-rgb),0.35)] shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div class="flex items-center gap-3.5 min-w-0">
                <div class="relative w-14 h-14 rounded-2xl overflow-hidden border-2 border-white/60 bg-black/40 shrink-0 shadow-inner">
                    <img src="${u(l.store.heroMascotImg||"/putri_mascot_anim.gif")}" onerror="this.onerror=null;this.src='/putri_mascot_3d.jpg';" alt="Maskot" class="w-full h-full object-cover">
                    <div class="absolute bottom-0 inset-x-0 bg-slate-950/85 text-[7px] text-center font-black text-amber-300 py-0.5">SLIDE #0</div>
                </div>
                <div class="min-w-0">
                    <div class="flex items-center gap-2 flex-wrap">
                        <h4 class="font-extrabold text-xs sm:text-sm text-white">Slide #0: Banner Sambutan &amp; Maskot 3D Toko</h4>
                        <span class="px-2 py-0.5 rounded-full text-[8.5px] font-black uppercase ${l.store.showHeroSlide!==!1&&l.store.showHeroSlide!=="false"?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/40":"bg-slate-700 text-slate-400"}">
                            ${l.store.showHeroSlide!==!1&&l.store.showHeroSlide!=="false"?"Aktif Tayang":"Disembunyikan"}
                        </span>
                    </div>
                    <p class="text-[10px] text-slate-300 mt-0.5 line-clamp-2">Ganti foto maskot, ubah status badge 'Siap Melayani', teks sambutan, atau sembunyikan slide utama.</p>
                </div>
            </div>
            <button onclick="if(typeof window.openHeroBannerModal==='function') window.openHeroBannerModal(); else if(typeof window.openSettingForm==='function') window.openSettingForm('profile');" type="button" class="shrink-0 w-full sm:w-auto h-11 px-4 rounded-xl primary-bg hover:opacity-90 text-white font-bold text-xs flex items-center justify-center gap-2 active:scale-95 shadow-sm transition-all cursor-pointer">
                <i class="fa-solid fa-wand-magic-sparkles"></i> Kelola Maskot &amp; Sambutan
            </button>
        </div>`:"";_("admin-content",`
        <div class="max-w-5xl mx-auto pb-16">
        ${t}
        ${s}
        <div class="mb-5">
            ${a}
            <div class="flex flex-col sm:flex-row gap-2.5 sm:gap-3 items-stretch sm:items-center mb-4">
                <div class="relative flex-1">
                    <i class="fa-solid fa-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm"></i>
                    <input autocomplete='off' id="admin-search-input" name='cari_admin_q' value="${u(Oe||window.aSq||"")}" placeholder="${e==="vouchers"||e==="discounts"?"Cari kode voucher, kupon promo...":e==="categories"?"Cari kategori material...":e==="brands"?"Cari merek / brand...":e==="suppliers"?"Cari nama supplier...":e==="customers"?"Cari pelanggan...":"Cari produk, SKU, varian, barcode..."}" oninput="window.handleAdminSearch(this.value, '${e}')" class="w-full h-12 bg-white dark:bg-slate-800 border-2 border-slate-900 dark:border-slate-700 rounded-2xl pl-11 pr-20 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)] shadow-[2px_2px_0px_#0f172a] dark:shadow-[2px_2px_0px_#000000] transition-all" >
                    <button type="button" id="admin-search-clear-btn" onclick="window.clearAdminSearch('${e}')" class="${Oe||window.aSq?"":"hidden"} absolute right-11 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center text-slate-400 hover:text-slate-600 rounded-xl transition-all cursor-pointer" title="Hapus Pencarian"><i class="fa-solid fa-circle-xmark text-sm"></i></button>
                    <button onclick="openCameraScanner('admin-search-input')" class="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-slate-400 hover:text-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.08)] rounded-xl transition-all" title="Scan Barcode"><i class="fa-solid fa-qrcode text-sm"></i></button>
                </div>
                <div class="flex items-center gap-2 shrink-0">
                    ${e==="products"?`
                    <button onclick="window.openPriceListExportModal()" class="h-12 w-12 sm:w-auto px-0 sm:px-4 rounded-2xl border-2 border-slate-900 dark:border-slate-700 font-bold text-xs flex items-center justify-center gap-2 shadow-[2px_2px_0px_#0f172a] dark:shadow-[2px_2px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px] transition-all shrink-0 cursor-pointer hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200" title="Katalog & Daftar Harga Cepat (PDF A4 / WhatsApp)">
                        <i class="fa-solid fa-file-pdf text-rose-500 text-sm"></i>
                        <span class="hidden sm:inline">Daftar Harga</span>
                    </button>
                    <button onclick="openAdminTab('stock_opname')" class="h-12 w-12 sm:w-auto px-0 sm:px-4 rounded-2xl border-2 border-slate-900 dark:border-slate-700 font-bold text-xs flex items-center justify-center gap-2 shadow-[2px_2px_0px_#0f172a] dark:shadow-[2px_2px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px] transition-all shrink-0 cursor-pointer border-[rgba(var(--color-primary-rgb),0.25)] dark:border-rose-500/40 bg-[rgba(var(--color-primary-rgb),0.1)] dark:bg-rose-950/40 text-[var(--color-primary)] dark:text-rose-300 hover:brightness-110" title="Stock Opname (Audit Fisik Stok)">
                        <i class="fa-solid fa-clipboard-check text-sm text-[var(--color-primary)] dark:text-rose-400"></i>
                        <span class="hidden sm:inline">Stock Opname</span>
                    </button>`:""}
                    <button onclick="oAAdd()" class="neo-btn h-12 px-5 rounded-xl text-white font-bold text-xs sm:text-sm flex items-center gap-2 shrink-0 cursor-pointer hover:opacity-95 border-2 border-slate-900 dark:border-slate-700 shadow-[2.5px_2.5px_0px_#0f172a] dark:shadow-[2.5px_2.5px_0px_#000000] active:translate-x-[1.5px] active:translate-y-[1.5px]" style="background: var(--color-primary);">
                        <i class="fa-solid fa-plus text-xs"></i>
                        <span>Tambah ${e==="products"?"Produk":e==="categories"?"Kategori":e==="brands"?"Merek":e==="vouchers"||e==="discounts"?"Voucher":"Data"}</span>
                    </button>
                </div>
            </div>
            ${r}
        </div>
        <div id="admin-list-container" class="space-y-3 pb-12"></div>
        </div>
    `),rAdmItms(e)};window.handleAdminSearch=(e,t)=>{const a=(e||"").toLowerCase();typeof window.setASq=="function"?window.setASq(a):window.aSq=a;const r=k("admin-search-clear-btn");r&&r.classList.toggle("hidden",!a),window.rAdmItms?.(t||"products",!0)};window.clearAdminSearch=e=>{const t=k("admin-search-input");t&&(t.value=""),window.handleAdminSearch("",e||"products"),t&&t.focus()};window.rAdmItms=(e,t=!1)=>{e&&(et(e),typeof window.setCTab=="function"&&window.setCTab(e),window.cTab=e);const a=k("admin-list-container"),r=a?a.closest(".scroll-content"):null,s=r?r.scrollTop:0,o=k("admin-product-stats");if(e==="products"&&o&&(!t||!o.children.length)){const c=Lt();_("admin-product-stats",`
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <div class="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Produk Aktif</span>
                        <div class="w-9 h-9 rounded-xl flex items-center justify-center text-xs text-white shrink-0 border border-slate-900 dark:border-slate-700 shadow-[1px_1px_0px_#0f172a] dark:shadow-[1px_1px_0px_#000000]" style="background: var(--color-primary);">
                            <i class="fa-solid fa-box-open"></i>
                        </div>
                    </div>
                    <p class="text-xl sm:text-2xl font-black text-slate-800 dark:text-white tracking-tight">${c.activeProd}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">Katalog Tayang di Etalase</p>
                </div>

                <div class="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-[10px] font-black uppercase tracking-wider text-[var(--color-primary)] dark:text-rose-400">Varian Aktif</span>
                        <div class="w-9 h-9 rounded-xl text-white flex items-center justify-center text-xs shrink-0 border border-slate-900 dark:border-slate-700 shadow-[1px_1px_0px_#0f172a] dark:shadow-[1px_1px_0px_#000000]" style="background: var(--color-primary);">
                            <i class="fa-solid fa-layer-group"></i>
                        </div>
                    </div>
                    <p class="text-xl sm:text-2xl font-black tracking-tight text-[var(--color-primary)] dark:text-rose-300">${c.activeVar}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">Opsi Rasa, Ukuran &amp; Warna</p>
                </div>

                <div class="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-[10px] font-black uppercase tracking-wider text-amber-600 dark:text-amber-400">Kosong / Nonaktif</span>
                        <div class="w-9 h-9 rounded-xl flex items-center justify-center text-xs text-white shrink-0 border border-slate-900 dark:border-slate-700 shadow-[1px_1px_0px_#0f172a] dark:shadow-[1px_1px_0px_#000000]" style="background-color: #d97706;">
                            <i class="fa-solid fa-triangle-exclamation text-white"></i>
                        </div>
                    </div>
                    <p class="text-xl sm:text-2xl font-black text-amber-600 dark:text-amber-400 tracking-tight">${c.inactiveProd+c.inactiveVar}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">${c.inactiveProd} Produk, ${c.inactiveVar} Varian</p>
                </div>

                <div class="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-[10px] font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Valuasi Stok</span>
                        <div class="w-9 h-9 rounded-xl flex items-center justify-center text-xs text-white shrink-0 border border-slate-900 dark:border-slate-700 shadow-[1px_1px_0px_#0f172a] dark:shadow-[1px_1px_0px_#000000]" style="background-color: #059669;">
                            <i class="fa-solid fa-warehouse text-white"></i>
                        </div>
                    </div>
                    <div>
                        <p class="text-xs font-bold text-slate-500 dark:text-slate-400">Modal: <b class="text-slate-800 dark:text-slate-200">${g(c.assetHpp)}</b></p>
                        <p class="text-xs font-bold text-slate-500 dark:text-slate-400 mt-0.5">Jual: <b class="text-slate-800 dark:text-slate-200">${g(c.assetJual)}</b></p>
                    </div>
                    <button type="button" onclick="if(window.openAdminTab){window.openAdminTab('reports'); setTimeout(() => window.switchReportTab && window.switchReportTab('stock'), 100);}" class="mt-2 inline-flex items-center gap-1.5 text-[10px] font-black text-[var(--color-primary)] dark:text-rose-400 hover:underline cursor-pointer transition-colors whitespace-nowrap">
                        <i class="fa-solid fa-chart-pie text-[10px]"></i>
                        <span>Laporan Stok Lengkap &rarr;</span>
                    </button>
                </div>
            </div>
        `)}let i=[...l[e]||[]];e==="products"?ns(i):i.sort((c,m)=>(m.id||0)-(c.id||0));const n=(Oe||window.aSq||"").toLowerCase(),p=window.adminSupplierFilter||"";let d=i.filter(c=>{if(e==="products"&&p&&!(String(c.supplierId)===String(p)||Array.isArray(c.suppliers)&&c.suppliers.some(y=>String(y.supplierId)===String(p))))return!1;const m=n.replace(/^\][a-zA-Z0-9]{2}/,"").trim()||n,b=m.replace(/^0+/,""),f=m.replace(/[\s\-_.]/g,""),h=String(c.name||c.title||c.bankName||c.code||""),w=String(c.sku||""),v=String(c.barcode||""),S=String(c.phone||""),$=String(c.id||""),B=`sku-${$}`;let I=(h+" "+w+" "+v+" "+S+" "+$+" "+B).toLowerCase().includes(m);if(!I&&b&&v&&(I=v.replace(/^0+/,"").toLowerCase()===b),!I&&f&&w&&(I=w.replace(/[\s\-_.]/g,"").toLowerCase()===f),e==="products"&&!I){if(c.supplierId&&(l.suppliers||[]).length){const A=l.suppliers.find(y=>String(y.id)===String(c.supplierId));A&&String(A.name||"").toLowerCase().includes(m)&&(I=!0)}!I&&Array.isArray(c.suppliers)&&(I=c.suppliers.some(A=>String(A.supplierName||"").toLowerCase().includes(m))),!I&&Array.isArray(c.variants)&&(I=c.variants.some((A,y)=>{const M=String(A.sku||"").toLowerCase(),L=String(A.barcode||"").toLowerCase(),F=`${w||$}-${y+1}`.toLowerCase(),V=L.replace(/^0+/,"");return M&&M.includes(m)||L&&(L.includes(m)||b&&V===b)||F.includes(m)}))}return I});if(!d.length){const m={products:"Produk",categories:"Kategori",suppliers:"Supplier",customers:"Pelanggan",vouchers:"Voucher",discounts:"Voucher & Kupon Promo",units:"Satuan",brands:"Merek",colors:"Database Warna"}[e]||"Data";return _("admin-list-container",`
            <div class="py-8 sm:py-12">
                <div class="bento-empty-state-card max-w-md mx-auto p-6 sm:p-8 bg-white dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-700 rounded-2xl shadow-[3.5px_3.5px_0px_#0f172a] dark:shadow-[3.5px_3.5px_0px_#000000] text-center">
                    <div class="relative mx-auto mb-4 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl border-2 border-slate-900 dark:border-slate-700 shadow-[2px_2px_0px_#0f172a] dark:shadow-[2px_2px_0px_#000000] text-white" style="background: var(--color-primary);">
                        <i class="fa-solid fa-boxes-stacked text-2xl sm:text-3xl text-white"></i>
                    </div>
                    <h3 class="font-black text-base sm:text-lg text-slate-900 dark:text-white mb-1.5 uppercase tracking-wide">Tidak Ada ${m}</h3>
                    <p class="text-xs font-semibold text-slate-500 dark:text-slate-400 max-w-xs mx-auto mb-5 leading-relaxed">
                        ${n?`Tidak ditemukan item yang cocok dengan pencarian "<b>${u(n)}</b>".`:`Belum ada ${m.toLowerCase()} yang tersimpan dalam sistem toko Anda.`}
                    </p>
                    <div class="flex flex-wrap items-center justify-center gap-2.5">
                        ${n?`
                        <button type="button" onclick="const inEl = document.getElementById('admin-search-input') || document.getElementById('master-search-input'); if(inEl){ inEl.value=''; inEl.dispatchEvent(new Event('input')); }" class="px-4 py-2.5 rounded-xl text-xs font-black text-white border-2 border-slate-900 shadow-[2px_2px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer whitespace-nowrap inline-flex items-center justify-center shrink-0 gap-1.5" style="background: var(--color-primary);">
                            <i class="fa-solid fa-rotate-left"></i> Bersihkan Filter
                        </button>`:""}
                        <button type="button" onclick="if(typeof window.openAdminModal==='function') window.openAdminModal('${u(e)}');" class="px-5 py-2.5 rounded-xl text-xs font-black ${n?"bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200":"text-white"} border-2 border-slate-900 dark:border-slate-700 shadow-[2px_2px_0px_#0f172a] dark:shadow-[2px_2px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer whitespace-nowrap inline-flex items-center justify-center shrink-0 gap-1.5" ${n?"":'style="background: var(--color-primary);"'}>
                            <i class="fa-solid fa-plus"></i> Tambah ${m}
                        </button>
                    </div>
                </div>
            </div>
        `)}_("admin-list-container",d.map((c,m)=>{if(e==="categories"){const A=(l.products||[]).filter(K=>K.category===c.name),y=A.length,M=Array.isArray(c.subCategories)?c.subCategories:[],F=[...new Set(A.map(K=>(K.subCategory||"").trim()).filter(Boolean))].filter(K=>!M.some(ge=>ge.toLowerCase()===K.toLowerCase())),V=c.img?`<div class="w-14 h-14 sm:w-16 sm:h-16 shrink-0 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-2xl p-1 flex items-center justify-center overflow-hidden"><img loading="lazy" src="${u(c.img)}" alt="${u(c.name)}" class="w-full h-full object-contain" onerror="this.onerror=null;this.parentElement.innerHTML='<div class=\\'w-full h-full flex items-center justify-center text-slate-400 font-bold text-xl\\'><i class=\\'fa-solid fa-shapes\\'></i></div>';"></div>`:'<div class="w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-2xl flex items-center justify-center text-xl font-bold border border-slate-200 dark:border-slate-700" style="background: rgba(var(--color-primary-rgb),0.1); color: var(--color-primary)"><i class="fa-solid fa-layer-group"></i></div>';return`
            <div data-id="${c.id}" class="category-admin-card p-4 sm:p-5 md:p-6 flex flex-col gap-3.5 rounded-2xl sm:rounded-[1.5rem] border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800 shadow-2xs hover:shadow-md hover:border-[var(--color-primary)]/40 transition-all duration-200">
                <!-- Header: Ikon + Nama Kategori + Badge Jumlah + Tombol Aksi -->
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div class="flex items-center gap-3.5 min-w-0">
                        ${V}
                        <div class="min-w-0 flex flex-col justify-center">
                            <div class="flex items-center gap-2 flex-wrap">
                                <h4 class="text-sm sm:text-base font-black text-slate-800 dark:text-slate-100 uppercase tracking-wide leading-tight">${u(c.name)}</h4>
                                <span class="px-2 py-0.5 rounded-lg text-[10px] font-bold bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600 whitespace-nowrap inline-flex items-center">
                                    <i class="fa-solid fa-boxes-stacked mr-1 text-[9px] text-[var(--color-primary)]"></i>${y} Produk
                                </span>
                                <span class="px-2 py-0.5 rounded-lg text-[10px] font-bold bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.2)] whitespace-nowrap inline-flex items-center">
                                    <i class="fa-solid fa-shapes mr-1 text-[9px]"></i>${M.length} Sub-Kategori
                                </span>
                            </div>
                            <p class="text-[11px] text-slate-400 mt-0.5 font-medium">Master Kategori &amp; Pengelompokan Jenis Produk</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-2 self-end sm:self-center shrink-0">
                        <button type="button" onclick="event.stopPropagation(); window.promptAddSubCategory('${c.id}')" class="px-3.5 py-2 rounded-xl primary-bg-soft border primary-border text-[var(--color-primary)] hover:primary-bg hover:text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-2xs active:scale-95 cursor-pointer" title="Tambah Sub-Kategori ke ${u(c.name)}">
                            <i class="fa-solid fa-plus text-[10px]"></i>
                            <span>Sub-Kategori</span>
                        </button>
                        <button type="button" onclick="event.stopPropagation(); oAEd('categories','${c.id}')" class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-50 border border-slate-200 text-slate-500 flex items-center justify-center hover:bg-slate-500 hover:text-white dark:bg-slate-700 dark:border-slate-600 dark:text-slate-300 transition-all active:scale-95 shadow-sm cursor-pointer" title="Edit Kategori">
                            <i class="fa-solid fa-pen text-xs sm:text-sm"></i>
                        </button>
                        <button type="button" onclick="event.stopPropagation(); oADel('categories','${c.id}')" class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-rose-50 border border-rose-200 text-rose-500 flex items-center justify-center hover:bg-rose-500 hover:text-white dark:bg-rose-900/30 dark:border-rose-800 transition-all active:scale-95 shadow-sm cursor-pointer" title="Hapus Kategori">
                            <i class="fa-solid fa-trash text-xs sm:text-sm"></i>
                        </button>
                    </div>
                </div>

                <!-- Wadah Kelompok Sub-Kategori -->
                <div class="p-3 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-700/60 flex flex-col gap-2.5">
                    <div class="flex items-center justify-between gap-2 flex-wrap">
                        <span class="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
                            <i class="fa-solid fa-folder-tree text-[var(--color-primary)]"></i>
                            <span>Kelompok Sub-Kategori / Jenis Produk Terdaftar:</span>
                        </span>
                        ${F.length>0?`
                            <button type="button" onclick="event.stopPropagation(); window.syncSubCategoriesFromProducts('${c.id}')" class="text-[10px] font-bold text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1 cursor-pointer">
                                <i class="fa-solid fa-wand-magic-sparkles text-amber-500"></i>
                                <span>Tarik ${F.length} sub dari produk</span>
                            </button>
                        `:""}
                    </div>

                    <div class="flex flex-wrap items-center gap-2">
                        ${M.length===0?`
                            <div class="text-xs text-slate-400 italic py-1 flex items-center gap-2">
                                <i class="fa-solid fa-circle-info text-slate-300 dark:text-slate-600"></i>
                                <span>Belum ada sub-kategori. Klik tombol <b>+ Sub-Kategori</b> di atas untuk menambahkan kelompok jenis produk.</span>
                            </div>
                        `:M.map(K=>{const ge=A.filter(yt=>(yt.subCategory||"").trim().toLowerCase()===K.toLowerCase()).length;return`
                            <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-2xs hover:border-[var(--color-primary)]/50 transition-all group">
                                <i class="fa-solid fa-shapes text-[10px] text-[var(--color-primary)]"></i>
                                <span>${u(K)}</span>
                                <span class="text-[10px] font-extrabold px-1.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600" title="${ge} Produk">${ge}</span>
                                <button type="button" onclick="event.stopPropagation(); window.removeCategorySubCategory('${c.id}', '${u(K).replace(/'/g,"\\'")}')" class="text-slate-400 hover:text-rose-500 p-0.5 rounded ml-0.5 transition-colors cursor-pointer" title="Hapus Sub-Kategori '${u(K)}'">
                                    <i class="fa-solid fa-xmark text-[11px]"></i>
                                </button>
                            </span>`}).join("")}
                        <button type="button" onclick="event.stopPropagation(); window.promptAddSubCategory('${c.id}')" class="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-bold border border-dashed border-slate-300 dark:border-slate-600 text-slate-500 dark:text-slate-400 hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.05)] transition-all cursor-pointer">
                            <i class="fa-solid fa-plus text-[9px]"></i>
                            <span>Tambah Sub</span>
                        </button>
                    </div>
                </div>
            </div>`}let b=e==="products",f=b&&(c.isActive==="false"||c.isActive===!1),h=f?"border-rose-200 bg-rose-50/50 dark:border-rose-900/50 dark:bg-rose-900/10":"border-slate-200/90 bg-white/95 dark:border-slate-700/80 dark:bg-slate-800/90",w=f?"text-slate-500 dark:text-slate-400 line-through":"text-slate-800 dark:text-slate-100";const v=ao(c,{size:"thumb"});let $=!!(c.img&&typeof c.img=="string"&&c.img.trim()&&!so(c.img))?`<div class="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-white border border-slate-100 dark:border-slate-700/60 rounded-2xl p-1.5 flex items-center justify-center overflow-hidden"><img loading="lazy" src="${u(c.img)}" alt="${u(c.name)}" onerror="this.onerror=null;this.style.display='none';if(this.nextElementSibling)this.nextElementSibling.style.display='flex';" class="w-full h-full object-contain ${f?"grayscale opacity-50":""}"><div class="w-full h-full" style="display:none">${v}</div></div>`:`<div class="w-16 h-16 sm:w-20 sm:h-20 shrink-0 border border-slate-100 dark:border-slate-700/60 rounded-2xl overflow-hidden flex items-center justify-center">${v}</div>`;const B=window.isAdm||window.__localIsAdm,I=l.store.useStock===!0||l.store.useStock==="true";return`
        <div data-id="${c.id}" class="product-admin-card p-4 sm:p-5 rounded-2xl sm:rounded-3xl border ${h} shadow-2xs hover:shadow-md hover:border-[var(--color-primary)]/40 transition-all flex flex-col gap-3.5 group">
            <!-- BARIS 1: IDENTITAS PRODUK, THUMBNAIL, STOK & FIFO -->
            <div class="flex items-start gap-3 sm:gap-4 min-w-0">
                <!-- Drag Handle & Order Badge -->
                ${b?`
                    <div class="flex flex-col items-center justify-center shrink-0 gap-1 select-none pt-0.5" onclick="event.stopPropagation();">
                        <div class="product-drag-handle w-6 h-6 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700/60 flex items-center justify-center cursor-grab active:cursor-grabbing text-slate-400 hover:text-[var(--color-primary)] transition-colors" title="Tahan &amp; geser untuk mengatur urutan">
                            <i class="fa-solid fa-grip-vertical text-xs"></i>
                        </div>
                        <button class="w-6 h-6 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-700/80 text-slate-600 dark:text-slate-300 text-[9px] flex items-center justify-center transition-all active:scale-90 ${m===0?"opacity-25 pointer-events-none":""}" onclick="window.moveProductOrder('${c.id}', -1)" title="Geser Naik 1 Posisi">
                            <i class="fa-solid fa-chevron-up"></i>
                        </button>
                        <button class="text-[9px] font-mono font-black px-1.5 py-0.5 rounded-md primary-bg-soft border primary-border text-[var(--color-primary)] transition-all" onclick="window.jumpProductOrder('${c.id}')" title="Klik untuk lompat ke nomor urut tertentu">
                            #${m+1}
                        </button>
                        <button class="w-6 h-6 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-700/80 text-slate-600 dark:text-slate-300 text-[9px] flex items-center justify-center transition-all active:scale-90 ${m===d.length-1?"opacity-25 pointer-events-none":""}" onclick="window.moveProductOrder('${c.id}', 1)" title="Geser Turun 1 Posisi">
                            <i class="fa-solid fa-chevron-down"></i>
                        </button>
                    </div>
                `:""}

                <!-- Thumbnail -->
                ${$}

                <!-- Info Teks Produk -->
                <div class="min-w-0 flex-1 flex flex-col justify-center">
                    <h4 class="text-sm sm:text-base font-black ${w} line-clamp-2 leading-snug tracking-tight mb-1 cursor-pointer hover:text-[var(--color-primary)] transition-colors" onclick="oAEd('${e}','${c.id}')">
                        ${u(c.name||c.title||c.bankName||c.code||"Item")}
                    </h4>

                    ${b?`
                        <div class="flex items-center gap-2 flex-wrap mb-1.5">
                            <span class="text-base sm:text-lg font-black text-[var(--color-primary)] dark:text-rose-300 tracking-tight">${g(c.price)}</span>
                            <span class="inline-flex items-center gap-1 font-mono text-[9px] font-bold text-slate-500 dark:text-slate-400 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700/80 hover:text-[var(--color-primary)] dark:hover:text-[var(--color-primary)] px-2 py-0.5 rounded-md border border-slate-200/60 hover:border-[var(--color-primary)] dark:border-slate-600/60 transition-colors cursor-pointer" onclick="event.stopPropagation(); window.openProductBarcodeLabelModal?.('${c.id}')" title="Klik untuk Cetak Label Barcode &amp; Harga">
                                <i class="fa-solid fa-barcode text-[8.5px]"></i> ${u(c.sku||"TANPA SKU")}
                            </span>
                            ${c.variants&&c.variants.length>0?`
                                <span class="inline-flex items-center gap-1 text-[9px] font-black border px-2 py-0.5 rounded-md border-[rgba(var(--color-primary-rgb),0.25)] dark:border-rose-500/30 bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-rose-950/40 text-[var(--color-primary)] dark:text-rose-300" title="${c.variants.length} Varian">
                                    <i class="fa-solid fa-layer-group text-[8.5px]"></i> ${c.variants.length} Varian
                                </span>
                            `:""}
                        </div>
                    `:""}

                    <!-- Badges Baris 2: Stok, HPP, Terjual & FIFO -->
                    <div class="flex items-center gap-1.5 flex-wrap text-xs">
                        ${b&&B?(()=>{const A=fo(c,l.store);if(!A.isManaged)return"";if(A.isOutOfStock)return'<span class="inline-flex items-center gap-1 text-[9.5px] font-bold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 px-2 py-0.5 rounded-md border border-rose-200/80 dark:border-rose-900/60"><i class="fa-solid fa-boxes-stacked mr-0.5"></i>Habis (0)</span>';const y=A.stock!=null?String(A.stock).replace(/\.?0+$/,""):"0";return`<span class="inline-flex items-center gap-1 text-[9.5px] font-bold ${A.isLowStock?"text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800":"text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800"} px-2 py-0.5 rounded-md border"><i class="fa-solid fa-boxes-stacked mr-0.5"></i>Stok: ${y}</span>`})():""}

                        ${b&&B&&c.hpp?`
                            <span class="inline-flex items-center gap-1 text-[9.5px] font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30 px-2 py-0.5 rounded-md border border-amber-200/60 dark:border-amber-800/60" title="Harga Modal (HPP)">
                                <i class="fa-solid fa-coins mr-0.5"></i>HPP: ${g(c.hpp)}
                            </span>
                        `:""}

                        ${b?(()=>{const A=c.variants&&c.variants.length?c.variants.reduce((y,M)=>y+(parseFloat(M.totalSold)||0),0):parseFloat(c.totalSold)||0;return A>0?`
                                <span class="inline-flex items-center gap-1 text-[9.5px] font-bold text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/30 px-2 py-0.5 rounded-md border border-orange-200/60 dark:border-orange-800/60">
                                    <i class="fa-solid fa-fire mr-0.5"></i>Terjual: ${A}
                                </span>`:""})():""}

                        ${b?(()=>{const A=Array.isArray(c.suppliers)&&c.suppliers.length>0?c.suppliers:c.supplierId?[{supplierId:c.supplierId,isPrimary:!0}]:[];if(!A.length)return"";const y=A.find(K=>K.isPrimary)||A[0],M=(l.suppliers||[]).find(K=>String(K.id)===String(y.supplierId)),L=M?M.name:y.supplierName||"Supplier",F=A.length-1,V=Array.isArray(c.stockBatches)?c.stockBatches.filter(K=>(parseFloat(K.remainingQty)||0)>0).length:0;return`
                                <button type="button" onclick="event.stopPropagation(); window.openProductFifoModal?.('${c.id}');" class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[9.5px] font-bold text-teal-700 dark:text-teal-300 bg-teal-50 hover:bg-teal-100 dark:bg-teal-950/40 dark:hover:bg-teal-900/60 border border-teal-200 dark:border-teal-800 transition-all cursor-pointer shadow-2xs" title="Lihat Rekanan Supplier &amp; Antrean Batch FIFO">
                                    <i class="fa-solid fa-truck-field text-[8.5px]"></i>
                                    <span class="max-w-[120px] truncate">${u(L)}</span>
                                    ${F>0?`<span class="bg-teal-200 dark:bg-teal-800 text-teal-800 dark:text-teal-200 px-1 py-0.5 rounded text-[8.5px] font-black">+${F}</span>`:""}
                                </button>
                                ${V>0?`
                                    <button type="button" onclick="event.stopPropagation(); window.openProductFifoModal?.('${c.id}');" class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md text-[9px] font-black text-amber-700 dark:text-amber-300 bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 transition-all cursor-pointer" title="Lacak Antrean FIFO">
                                        <i class="fa-solid fa-layer-group text-[8px]"></i>
                                        <span>${V} Batch</span>
                                    </button>
                                `:""}
                            `})():""}

                        ${e==="colors"?`<div class="flex items-center gap-2 mt-1"><div class="w-4 h-4 rounded-full border border-slate-200 dark:border-slate-600 shadow-sm" style="background-color: ${u(c.hex||"transparent")}"></div><p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest"><i class="fa-solid fa-swatchbook mr-1"></i>${u(c.catalog||"Tanpa Katalog")}</p></div>`:""}

                        ${e==="customers"?`
                            <p class="text-xs font-bold text-slate-500 dark:text-slate-400"><i class="fa-brands fa-whatsapp text-emerald-500 mr-1"></i>+${u(c.phone)}</p>
                            <div class="flex items-center gap-1.5 mt-1 flex-wrap">
                                <span class="text-[11px] font-bold text-[var(--color-primary)]"><i class="fa-solid fa-star mr-1"></i>${parseFloat(c.points)||0} Poin</span>
                                ${c.paylaterActive===!0||c.paylaterActive==="true"?`
                                    <span class="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 flex items-center gap-1">
                                        <i class="fa-solid fa-bolt text-emerald-500"></i> PayLater: ${g(Math.max(0,(parseFloat(c.paylaterLimit)||0)-Math.max(0,parseFloat(c.paylaterUsed)||0)))} / ${g(parseFloat(c.paylaterLimit)||0)}
                                    </span>
                                `:`
                                    <span class="px-1.5 py-0.5 rounded text-[8px] font-bold uppercase bg-slate-100 dark:bg-slate-700 text-slate-400">PayLater Off</span>
                                `}
                            </div>
                        `:""}

                        ${e==="rewards"?`<p class="text-sm font-bold text-violet-500"><i class="fa-solid fa-star mr-1"></i>${parseFloat(c.pointsCost)||0} Poin</p><p class="text-[10px] font-bold text-slate-500 mt-0.5"><i class="fa-solid fa-boxes-stacked mr-1"></i>Stok: ${parseFloat(c.stock)||0}</p>`:""}
                    </div>
                </div>
            </div>

            <!-- BARIS 2: UNIFIED NATIVE ACTION BAR (TOUCH-TARGET STANDARD 40px) -->
            <div class="flex items-center justify-between gap-2 pt-3 border-t border-slate-100 dark:border-slate-700/60 flex-wrap">
                <!-- Aksi Status / Restock / Harga Cepat -->
                <div class="flex items-center gap-2 flex-wrap">
                    ${b?f?`<button type="button" class="h-10 px-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-500 hover:text-white dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95 shadow-2xs cursor-pointer" onclick="event.stopPropagation(); toggleProductStatus('${c.id}', true)" title="Aktifkan Kembali Stok Produk"><i class="fa-solid fa-check text-xs"></i><span>Aktifkan</span></button>`:`<button type="button" class="h-10 px-3.5 rounded-xl bg-amber-50 hover:bg-amber-500 hover:text-white dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800 font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95 shadow-2xs cursor-pointer" onclick="event.stopPropagation(); toggleProductStatus('${c.id}', false)" title="Nonaktifkan (Habis)"><i class="fa-solid fa-ban text-xs"></i><span>Nonaktifkan</span></button>`:""}

                    ${b&&I?`
                        <button type="button" class="h-10 px-3.5 rounded-xl primary-bg-soft border primary-border text-[var(--color-primary)] hover:primary-bg hover:text-white font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95 shadow-2xs cursor-pointer" onclick="event.stopPropagation(); openRestockModal('${c.id}')" title="Restock Stok Produk">
                            <i class="fa-solid fa-boxes-stacked text-xs"></i>
                            <span>Restock</span>
                        </button>
                    `:""}

                    ${b?`
                        <button type="button" class="h-10 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700/80 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-600 font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95 shadow-2xs cursor-pointer" onclick="event.stopPropagation(); openQuickPriceModal('${c.id}')" title="Ubah Cepat Harga Jual">
                            <i class="fa-solid fa-tags text-xs"></i>
                            <span class="hidden sm:inline">Harga</span>
                        </button>

                        <button type="button" class="h-10 px-3 rounded-xl border font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95 shadow-2xs cursor-pointer border-[rgba(var(--color-primary-rgb),0.25)] dark:border-rose-500/30 bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-rose-950/40 text-[var(--color-primary)] dark:text-rose-300 hover:brightness-110" onclick="event.stopPropagation(); window.openProductBarcodeLabelModal?.('${c.id}')" title="Cetak Label Harga &amp; Barcode Barang">
                            <i class="fa-solid fa-barcode text-xs"></i>
                            <span class="hidden sm:inline">Label</span>
                        </button>
                    `:""}

                    ${e==="customers"?`
                        <button type="button" class="h-10 px-3.5 rounded-xl bg-amber-50 hover:bg-amber-500 hover:text-white dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border border-amber-300 dark:border-amber-800 font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95 shadow-2xs cursor-pointer" onclick="event.stopPropagation(); if(typeof window.setCurrentMember==='function') window.setCurrentMember(appData.customers ? appData.customers.find(c=>String(c.id||c.phone)===String('${c.id||c.phone}'))||{name:'${u(c.name)}',phone:'${u(c.phone)}',points:${parseFloat(c.points)||0}} : {name:'${u(c.name)}',phone:'${u(c.phone)}',points:${parseFloat(c.points)||0}}); if(typeof window.openMemberModal==='function') window.openMemberModal();" title="Buka Kartu Member VIP">
                            <i class="fa-solid fa-id-card text-xs"></i>
                            <span>Kartu Member</span>
                        </button>
                        <button type="button" class="h-10 px-3 rounded-xl bg-violet-50 hover:bg-violet-500 hover:text-white dark:bg-violet-950/40 text-violet-600 dark:text-violet-400 border border-violet-200 dark:border-violet-800 font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95 shadow-2xs cursor-pointer" onclick="event.stopPropagation(); window.adminResetMemberPin?.('${u(c.phone||c.id)}', '${u(c.name)}');" title="Reset PIN Member">
                            <i class="fa-solid fa-key text-xs"></i>
                            <span>Reset PIN</span>
                        </button>
                    `:""}
                </div>

                <!-- Aksi Utama: Duplikat, Edit, Hapus -->
                <div class="flex items-center gap-2 ml-auto">
                    ${b?`
                        <button type="button" class="h-10 w-10 rounded-xl bg-slate-100 hover:bg-[rgba(var(--color-primary-rgb),0.1)] hover:text-[var(--color-primary)] dark:bg-slate-700/80 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-600 flex items-center justify-center transition-all active:scale-95 shadow-2xs cursor-pointer" onclick="event.stopPropagation(); window.confirmExportProductToMaster?.('${c.id}')" title="Simpan ke Database Bersama (Master Template)">
                            <i class="fa-solid fa-cloud-arrow-up text-xs"></i>
                        </button>
                        <button type="button" class="h-10 w-10 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700/80 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-600 flex items-center justify-center transition-all active:scale-95 shadow-2xs cursor-pointer" onclick="event.stopPropagation(); duplicateProduct('${c.id}')" title="Duplikat Produk">
                            <i class="fa-regular fa-copy text-xs"></i>
                        </button>
                    `:""}

                    <button type="button" class="h-10 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700/80 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-600 font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95 shadow-2xs cursor-pointer" onclick="event.stopPropagation(); oAEd('${e}','${c.id}')" title="Edit Data Lengkap">
                        <i class="fa-solid fa-pen text-xs"></i>
                        <span>Edit</span>
                    </button>

                    <button type="button" class="h-10 w-10 rounded-xl bg-rose-50 hover:bg-rose-500 hover:text-white dark:bg-rose-950/40 text-rose-500 border border-rose-200 dark:border-rose-900 flex items-center justify-center transition-all active:scale-95 shadow-2xs cursor-pointer" onclick="event.stopPropagation(); oADel('${e}','${c.id}')" title="Hapus Permanen">
                        <i class="fa-solid fa-trash text-xs"></i>
                    </button>
                </div>
            </div>
        </div>`}).join("")),e==="products"&&Vo(),r&&requestAnimationFrame(()=>{r.scrollTop=s})};window.promptAddSubCategory=async e=>{const t=(l.categories||[]).find(o=>String(o.id)===String(e));if(!t)return;const r=await(typeof $t=="function"?$t:window.customPrompt||prompt)(`Tambah Sub-Kategori Baru untuk '${t.name}':`,"");if(!r||!r.trim())return;const s=r.trim();if(t.subCategories=Array.isArray(t.subCategories)?t.subCategories:[],t.subCategories.some(o=>o.toLowerCase()===s.toLowerCase())){x("Sub-kategori ini sudah ada!");return}t.subCategories.push(s);try{await(typeof N=="function"?N:window.saveApp||(async()=>{}))(["categories"]),x(`Sub-kategori '${s}' berhasil ditambahkan ke '${t.name}'!`),window.rAdmItms?.("categories")}catch(o){console.error("Gagal simpan subkategori:",o),x("Gagal menyimpan sub-kategori: "+(o.message||""))}};window.removeCategorySubCategory=async(e,t)=>{const a=(l.categories||[]).find(o=>String(o.id)===String(e));if(!a)return;const r=typeof Ja=="function"?Ja:window.showConfirm,s=async()=>{a.subCategories=(a.subCategories||[]).filter(o=>o.toLowerCase()!==t.toLowerCase());try{await(typeof N=="function"?N:window.saveApp||(async()=>{}))(["categories"]),x(`Sub-kategori '${t}' berhasil dihapus!`),window.rAdmItms?.("categories")}catch(o){console.error("Gagal hapus subkategori:",o),x("Gagal menghapus sub-kategori: "+(o.message||""))}};r?r("Hapus Sub-Kategori",`Hapus sub-kategori '${t}' dari kelompok '${a.name}'? Produk yang sudah ada tidak akan terhapus.`,s,"Ya, Hapus",!0):await s()};window.syncSubCategoriesFromProducts=async e=>{const t=(l.categories||[]).find(s=>String(s.id)===String(e));if(!t)return;const a=[...new Set((l.products||[]).filter(s=>s.category===t.name&&s.subCategory).map(s=>s.subCategory.trim()))];if(!a.length){x("Tidak ditemukan sub-kategori di produk untuk kategori ini.");return}t.subCategories=Array.isArray(t.subCategories)?t.subCategories:[];let r=0;if(a.forEach(s=>{t.subCategories.some(o=>o.toLowerCase()===s.toLowerCase())||(t.subCategories.push(s),r++)}),r===0){x("Semua sub-kategori produk sudah terdaftar di master!");return}try{await(typeof N=="function"?N:window.saveApp||(async()=>{}))(["categories"]),x(`${r} sub-kategori berhasil disinkronkan dari produk!`),window.rAdmItms?.("categories")}catch(s){console.error("Gagal sinkron subkategori:",s),x("Gagal sinkron sub-kategori: "+(s.message||""))}};window.openProductFifoModal=fr;const Wo=async(e,t)=>{if(!e)return;let a=String(e).replace(/\D/g,"");a.startsWith("0")?a="62"+a.substring(1):a.startsWith("62")||(a="62"+a);const r=t||"Pelanggan",s=async()=>{try{if(x("Mereset PIN member..."),P&&typeof P.collection=="function"&&await P.collection("freshmart").doc("cms_data").collection("customers").doc(a).set({pin:null,pinResetAt:new Date().toISOString()},{merge:!0}),typeof window.invalidateMemberCache=="function"&&window.invalidateMemberCache(a),l.customers&&l.customers.length){const o=l.customers.find(i=>String(i.id||i.phone).replace(/\D/g,"")===a);o&&(o.pin=null)}x(`PIN Member ${r} berhasil di-reset!`),typeof window.rAdmItms=="function"&&window.rAdmItms("customers",!0)}catch(o){console.error("Gagal reset PIN member:",o),x("Gagal mereset PIN member. Silakan coba kembali.")}};typeof window.showConfirm=="function"?window.showConfirm("Reset PIN Member",`Apakah Anda yakin ingin mereset PIN Keamanan untuk member <b>${u(r)}</b> (+${u(a)})?<br><br><span class="text-xs text-slate-500">Pelanggan akan diminta membuat 6-digit PIN baru saat login kembali ke panel member.</span>`,s,"Ya, Reset PIN",!0):typeof confirm=="function"&&confirm(`Reset PIN Keamanan untuk member ${r} (+${a})?`)&&s()};window.adminResetMemberPin=Wo;function qo(e){if(!e)return"";const t=e.match(/\/d\/([a-zA-Z0-9_-]+)/);return t?`https://drive.google.com/file/d/${t[1]}/preview`:e}const Jo=e=>window.pushModalHistory?.(e);window.oAAdd=()=>{window.oAEd(wt||window.cTab||"products",null)};window.oAEd=(e,t)=>{et(e),typeof window.setCTab=="function"&&window.setCTab(e),window.cTab=e,Ua(t),typeof window.setEId=="function"&&window.setEId(t),window.eId=t;let a=t!=null&&t!==""?(l[e]||[]).find(d=>d&&d.id!=null&&String(d.id)===String(t)):null;Ee("admin-modal-title",t?"Edit Data":"Tambah Data");let r=Nt[e]||[],s="";if(e==="products"&&(a&&a.storeStock===void 0&&a.warehouseStock===void 0&&(a.storeStock=a.stock!==void 0?a.stock:0,a.warehouseStock=0),tt(a&&a.variants?JSON.parse(JSON.stringify(a.variants)):[]),ea(a&&a.wholesale?JSON.parse(JSON.stringify(a.wholesale)):[]),ta(a&&a.specTable?JSON.parse(JSON.stringify(a.specTable)):[]),vt(a&&a.multiUnits?JSON.parse(JSON.stringify(a.multiUnits)):[])),e==="categories"){const d=Array.isArray(a?.subCategories)?[...a.subCategories]:typeof a?.subCategories=="string"?a.subCategories.split(",").map(c=>c.trim()).filter(Boolean):[];at(d)}const o=["textarea","richtext","variants_builder","wholesale_builder","multi_units_builder","spec_table_builder","subcategories_builder"],i=["img","desc","name","isActive","tag","poTime","video"],n=d=>o.includes(d.type)||i.includes(d.key);r.forEach(d=>{let c=a?d.type==="number"&&a[d.key]!==void 0?a[d.key]:a[d.key]||"":"";const m=n(d)?"lg:col-span-2":"";if(s+=`<div class="flex flex-col gap-1.5 ${m}"><label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest flex items-center gap-1.5">${d.label}</label>`,d.type==="textarea")s+=`<textarea autocomplete='off' id="af-${d.key}" class="admin-input resize-none shadow-sm bg-slate-50 dark:bg-slate-900" rows="3">${u(c)}</textarea>`;else if(d.type==="select")s+=`<div class="relative"><select id="af-${d.key}" class="admin-input shadow-sm cursor-pointer appearance-none pr-10 bg-slate-50 dark:bg-slate-900" onchange="if(window.rVarsB) window.rVarsB();">`,d.options.forEach(b=>{const f=String(c)===String(b.val);s+=`<option value="${b.val}" ${f?"selected":""} class="font-bold">${b.text}</option>`}),s+='</select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]"></i></div>';else if(d.type==="dynamic_select_category")s+=`<div class="relative"><select id="af-${d.key}" class="admin-input shadow-sm cursor-pointer appearance-none pr-10 bg-slate-50 dark:bg-slate-900" onchange="if(window.rVarsB) window.rVarsB(); if(window.updateProductSubCategoryOptions) window.updateProductSubCategoryOptions(this.value);"><option value="" class="font-bold">Pilih Kategori</option>`,l.categories.forEach(b=>{s+=`<option value="${u(b.name)}" ${c===b.name?"selected":""} class="font-bold">${u(b.name)}</option>`}),s+='</select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]"></i></div>';else if(d.type==="dynamic_select_brand")s+=`<div class="relative"><select id="af-${d.key}" class="admin-input shadow-sm cursor-pointer appearance-none pr-10 bg-slate-50 dark:bg-slate-900" onchange="if(window.rVarsB) window.rVarsB();"><option value="" class="font-bold">Tanpa Merek</option>`,(l.brands||[]).forEach(b=>{s+=`<option value="${u(b.name)}" ${c===b.name?"selected":""} class="font-bold">${u(b.name)}</option>`}),s+='</select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]"></i></div>';else if(d.type==="dynamic_select_products")s+=`<div class="relative"><select id="af-${d.key}" class="admin-input shadow-sm cursor-pointer appearance-none pr-10 bg-slate-50 dark:bg-slate-900" onchange="if(window.rVarsB) window.rVarsB();"><option value="" class="font-bold primary-text">-- Semua Produk (Tanpa Batasan) --</option>`,(l.products||[]).forEach(b=>{s+=`<option value="${b.id}" ${c==b.id?"selected":""} class="font-bold">${u(b.name)}</option>`}),s+='</select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]"></i></div>';else if(d.type==="dynamic_select_supplier")s+=`<div class="relative"><select id="af-${d.key}" class="admin-input shadow-sm cursor-pointer appearance-none pr-10 bg-slate-50 dark:bg-slate-900"><option value="" class="font-bold text-slate-400">-- Pilih Rekanan / Supplier Asal --</option>`,(l.suppliers||[]).forEach(b=>{const f=String(c)===String(b.id);s+=`<option value="${b.id}" ${f?"selected":""} class="font-bold">${u(b.name)}${b.code?` (${u(b.code)})`:""}</option>`}),s+='</select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]"></i></div>';else if(d.type==="variants_builder")s+='<div id="variants-builder-container" class="bg-slate-50/50 dark:bg-slate-900/30 p-4 sm:p-5 md:p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-inner min-h-[60px]"></div>';else if(d.type==="wholesale_builder")s+='<div id="wholesale-builder-container" class="bg-slate-50/50 dark:bg-slate-900/30 p-4 sm:p-5 md:p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-inner min-h-[60px]"></div>';else if(d.type==="multi_units_builder")s+='<div id="multi-units-builder-container" class="bg-slate-50/50 dark:bg-slate-900/30 p-4 sm:p-5 md:p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-inner min-h-[60px]"></div>';else if(d.type==="spec_table_builder")s+='<div id="spec-table-builder-container" class="bg-slate-50/50 dark:bg-slate-900/30 p-4 sm:p-5 md:p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-inner min-h-[60px]"></div>';else if(d.type==="subcategories_builder")s+='<div id="subcategories-builder-container" class="bg-slate-50/50 dark:bg-slate-900/30 p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-inner flex flex-col gap-3 min-h-[80px]"></div>';else if(d.key==="subCategory")s+=`
            <div class="flex flex-col gap-1.5" id="af-subCategory-wrapper">
                <div class="relative flex items-center gap-2">
                    <div class="relative flex-1">
                        <select id="af-subCategory-select" onchange="window.handleSubCategorySelectChange(this)" class="admin-input shadow-sm cursor-pointer appearance-none pr-10 bg-slate-50 dark:bg-slate-900 w-full font-bold text-xs">
                            <option value="">-- Tanpa Sub-Kategori / Pilih Jenis --</option>
                        </select>
                        <i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]"></i>
                    </div>
                    <button type="button" onclick="window.promptAddNewSubCategoryToProduct()" class="px-3.5 py-3 rounded-xl primary-bg-soft border primary-border text-[var(--color-primary)] hover:primary-bg hover:text-white text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 active:scale-95 cursor-pointer shadow-2xs" title="Tambah Sub-Kategori Baru">
                        <i class="fa-solid fa-plus text-[10px]"></i>
                        <span class="hidden sm:inline">Sub Baru</span>
                    </button>
                </div>
                <input autocomplete="off" type="text" id="af-${d.key}" value="${u(c)}" class="admin-input shadow-sm bg-slate-50 dark:bg-slate-900 text-xs hidden mt-1" placeholder="Ketik nama sub-kategori baru..." oninput="window.syncCustomSubCategoryValue(this.value)">
                <p id="af-subCategory-hint" class="text-[10px] text-slate-400 font-medium"></p>
            </div>`;else if(d.key==="sku")s+=`<div class="relative flex items-center"><input autocomplete='off' type="${d.type}" id="af-${d.key}" value="${u(c)}" class="admin-input shadow-sm bg-slate-50 dark:bg-slate-900 !pr-12" placeholder="Scan atau ketik..." ><button type="button" onclick="openCameraScanner('af-${d.key}')" class="absolute right-2 w-9 h-9 flex items-center justify-center text-slate-400 hover:bg-slate-200 hover:text-[var(--color-primary)] rounded-xl transition-all" title="Scan Barcode via HP"><i class="fa-solid fa-qrcode text-lg"></i></button></div>`;else if(d.key==="img")s+=`<div class="flex flex-col gap-1.5">
                <div class="flex gap-3">
                    <input autocomplete='off' type="text" id="af-${d.key}" value="${u(c)}" class="admin-input shadow-sm flex-1 bg-slate-50 dark:bg-slate-900" placeholder="URL Gambar (Boleh dikosongkan)">
                    <label class="primary-bg-soft border primary-border text-[var(--color-primary)] font-bold rounded-xl px-5 flex items-center justify-center cursor-pointer hover:bg-[rgba(var(--color-primary-rgb),0.2)] transition-all shrink-0 active:scale-95 shadow-sm" title="Upload dari Galeri"><i class="fa-solid fa-cloud-arrow-up sm:mr-2"></i><span class="hidden sm:inline">Upload</span><input type="file" accept="image/*" class="hidden" onchange="handleImageUpload(this, 'af-${d.key}')"></label>
                    <label class="primary-bg-soft border primary-border text-[var(--color-primary)] font-bold rounded-xl px-5 flex items-center justify-center cursor-pointer hover:bg-[rgba(var(--color-primary-rgb),0.2)] transition-all shrink-0 active:scale-95 shadow-sm" title="Ambil Foto Langsung"><i class="fa-solid fa-camera"></i><input type="file" accept="image/*" capture="environment" class="hidden" onchange="handleImageUpload(this, 'af-${d.key}')"></label>
                </div>
                <p class="text-[10px] font-bold text-slate-400 flex items-center gap-1.5"><i class="fa-solid fa-wand-magic-sparkles text-[var(--color-primary)]"></i><span><b>Otomatis &amp; Estetik:</b> Jika tanpa foto, sistem otomatis membuatkan <b>Smart Cover</b> dengan gradien warna &amp; ikon kategori resmi di toko &amp; kasir.</span></p>
            </div>`;else if(d.key==="videoUrl")s+=`<div class="flex flex-col gap-2">
                <div class="flex gap-3">
                    <input autocomplete='off' type="text" id="af-${d.key}" value="${u(c)}" class="admin-input shadow-sm flex-1 bg-slate-50 dark:bg-slate-900" placeholder="Paste URL Drive atau upload video di bawah">
                    <label class="primary-bg-soft border primary-border text-[var(--color-primary)] font-bold rounded-xl px-4 flex items-center justify-center cursor-pointer hover:bg-[rgba(var(--color-primary-rgb),0.2)] transition-all shrink-0 active:scale-95 shadow-sm gap-2" title="Upload Video ke Google Drive">
                        <i class="fa-solid fa-film"></i><span class="hidden sm:inline text-[11px]">Upload Video</span>
                        <input type="file" accept="video/mp4,video/webm,video/quicktime,video/x-msvideo,video/3gpp" class="hidden" onchange="handleVideoUpload(this, 'af-${d.key}')">
                    </label>
                </div>
                <p class="text-[10px] font-bold text-slate-400 flex items-center gap-1.5"><i class="fa-solid fa-circle-info text-[var(--color-primary)]"></i><b>Tips Autoplay:</b> Untuk video 100% otomatis play &amp; loop tanpa klik, gunakan link <b>YouTube / Shorts</b> atau <b>Direct MP4</b>. Upload Drive/HP juga didukung.</p>
                ${c?`<div class="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-black aspect-video w-full max-w-xs"><iframe src="${u(qo(c))}" class="w-full h-full" frameborder="0" allow="autoplay; fullscreen" loading="lazy"></iframe></div>`:""}
            </div>`;else if(d.type==="richtext")s+=`
            <div class="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden shadow-sm bg-white dark:bg-slate-900">
                <div class="bg-slate-100 dark:bg-slate-800 p-2 border-b border-slate-200 dark:border-slate-700 flex gap-1 flex-wrap items-center">
                    <button type="button" onclick="document.execCommand('bold',false,null)" class="w-8 h-8 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold transition-colors" title="Cetak Tebal">B</button>
                    <button type="button" onclick="document.execCommand('insertOrderedList',false,null)" class="w-8 h-8 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors" title="Daftar Angka"><i class="fa-solid fa-list-ol"></i></button>
                    <button type="button" onclick="document.execCommand('insertUnorderedList',false,null)" class="w-8 h-8 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors" title="Daftar Titik"><i class="fa-solid fa-list-ul"></i></button>
                    <div class="w-px h-5 bg-slate-300 dark:bg-slate-600 mx-1"></div>
                    <button type="button" onclick="document.execCommand('justifyLeft',false,null)" class="w-8 h-8 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors" title="Rata Kiri"><i class="fa-solid fa-align-left"></i></button>
                    <button type="button" onclick="document.execCommand('justifyCenter',false,null)" class="w-8 h-8 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors" title="Rata Tengah"><i class="fa-solid fa-align-center"></i></button>
                    <button type="button" onclick="document.execCommand('justifyRight',false,null)" class="w-8 h-8 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors" title="Rata Kanan"><i class="fa-solid fa-align-right"></i></button>
                    <div class="w-px h-5 bg-slate-300 dark:bg-slate-600 mx-1"></div>
                    <label class="w-8 h-8 rounded hover:bg-[rgba(var(--color-primary-rgb),0.15)] flex items-center justify-center cursor-pointer text-[var(--color-primary)] transition-colors" title="Upload &amp; Sisipkan Gambar"><i class="fa-solid fa-image"></i>
                        <input type="file" accept="image/*" class="hidden" onchange="handleRTEditorImage(this, 'af-${d.key}-editor')" >
                    </label>
                </div>
                <div id="af-${d.key}-editor" contenteditable="true" class="p-4 min-h-[150px] max-h-[350px] overflow-y-auto outline-none text-sm text-slate-800 dark:text-slate-200 leading-relaxed [&_ol]:list-decimal [&_ol]:pl-5 [&_ul]:list-disc [&_ul]:pl-5 [&_b]:font-bold [&_strong]:font-bold [&_img]:max-w-full [&_img]:rounded-xl [&_img]:my-2">
                    ${c}
                </div>
            </div>`;else{const b=e==="products"&&d.key==="storeStock",f=e==="products"&&d.key==="warehouseStock",h=e==="products"&&d.key==="stock",w=b||f?'oninput="window.calcTotalStockForm?.()"':"",v=h?'readonly tabindex="-1"':"",S=h?"bg-slate-100 dark:bg-slate-800/80 font-bold cursor-not-allowed text-slate-700 dark:text-slate-200":"bg-slate-50 dark:bg-slate-900";s+=`<input autocomplete='off' type="${d.type}" id="af-${d.key}" value="${u(c)}" class="admin-input shadow-sm ${S} transition-all"
    ${d.key==="price"?'min="0" step="1" placeholder="0"':""}
    ${d.key==="priceNormal"?'min="0" step="1" placeholder="0 (kosong = tidak ada coretan)"':""}
    ${d.key==="hpp"?'min="0" step="1" placeholder="0"':""}
    ${b||f||h?'min="0" step="0.01" placeholder="0"':""}
    ${!h&&d.key==="stock"?'min="0" step="1" placeholder="0"':""}
    ${d.key==="pointsCost"?'min="0" step="1" placeholder="0"':""}
    ${w}
    ${v}
>`,h&&(s+='<p class="text-[9.5px] font-semibold text-slate-400 mt-1 flex items-center gap-1"><i class="fa-solid fa-lock text-[8px]"></i> Otomatis dihitung dari penjumlahan Stok Toko + Stok Gudang</p>')}s+="</div>"}),s=`<div class="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-5 items-start">${s}</div>`,_("admin-modal-form",s),e==="products"&&(window.rVarsB?.(),window.rWholB?.(),window.rMultiUnitsB?.(),window.rSpecB?.(),window.updateProductSubCategoryOptions?.(a?a.category:"",a?a.subCategory:"")),e==="categories"&&window.rSubCatsB?.();const p=k("admin-modal");p&&p.classList.contains("hidden")&&Jo("admin"),pe(p,k("admin-modal-box"))};window.calcTotalStockForm=()=>{const e=document.getElementById("af-storeStock"),t=document.getElementById("af-warehouseStock"),a=document.getElementById("af-stock");if(e&&t&&a){const r=parseFloat(e.value)||0,s=parseFloat(t.value)||0;a.value=r+s}};window.submitAdminForm=async()=>{if(Re)return;G(!0);const e=wt||window.cTab||"products";let t={},a=Nt[e]||[];for(let s of a)if(s.type==="variants_builder")t.variants=O.filter(o=>o.name.trim()!=="");else if(s.type==="wholesale_builder")t.wholesale=ie.filter(o=>parseFloat(o.minQty)>.01&&o.price>0);else if(s.type==="multi_units_builder")t.multiUnits=(Q||[]).filter(o=>(o.name||o.unitName||"").trim()!==""&&parseFloat(o.multiplier!=null?o.multiplier:o.conversionRatio)>.001).map(o=>({name:(o.name||o.unitName||"").trim(),multiplier:parseFloat(o.multiplier!=null?o.multiplier:o.conversionRatio)||1,price:parseFloat(o.price)||0,hpp:parseFloat(o.hpp)||0,barcode:(o.barcode||"").trim()}));else if(s.type==="spec_table_builder")t.specTable=ne.filter(o=>o.key.trim()!=="");else if(s.type==="subcategories_builder")t.subCategories=(de||window.tSubCats||[]).map(o=>String(o).trim()).filter(Boolean);else{let o="";if(s.type==="richtext"){const i=k(`af-${s.key}-editor`);o=i?i.innerHTML:""}else o=T(`af-${s.key}`);if(typeof o=="string"){if(o.startsWith("data:image/")&&o.length>3e5)return G(!1),x("Gambar Base64 terlalu besar! Upload file.");s.key==="img"&&(o=we(o))}t[s.key]=s.type==="number"?parseFloat(o)||0:o}if(!t.name&&!t.title&&!t.bankName&&!t.code)return G(!1),x("Judul/Nama/Kode wajib diisi!");if(e==="products"){const s=parseFloat(t.storeStock)||0,o=parseFloat(t.warehouseStock)||0;t.storeStock=s,t.warehouseStock=o,t.stock=s+o,t.sku||(t.sku="SKU"+Date.now().toString().slice(-6))}if(e==="customers"){const s=window.normalizeWA?window.normalizeWA(t.phone):(t.phone||"").replace(/\D/g,"").replace(/^0/,"62");if(!s||s.length<10)return G(!1),x("Nomor WhatsApp tidak valid!");t.phone=s,t.points=parseFloat(t.points)||0,t.id=parseInt(s,10),t.paylaterActive=t.paylaterActive==="true"||t.paylaterActive===!0,t.paylaterLimit=Math.max(0,parseFloat(t.paylaterLimit)||0),t.paylaterDueDay=Math.min(28,Math.max(1,parseInt(t.paylaterDueDay,10)||5)),t.paylaterUsed=Math.max(0,parseFloat(t.paylaterUsed)||0)}let r=null;if(e==="customers")if(l.customers||(l.customers=[]),re){r=re;let s=l.customers.findIndex(o=>o&&o.id!=null&&String(o.id)===String(re));s>-1?l.customers[s]=t:l.customers.unshift(t)}else l.customers.unshift(t);else if(e==="rewards")if(l.rewards||(l.rewards=[]),re){let s=l.rewards.findIndex(o=>o&&o.id!=null&&String(o.id)===String(re));s>-1?(t.id=l.rewards[s].id,l.rewards[s]=t):t.id=re}else t.id=Date.now(),l.rewards.unshift(t);else if(re){l[e]||(l[e]=[]);let s=l[e].findIndex(o=>o&&o.id!=null&&String(o.id)===String(re));if(s>-1){if(t.id=l[e][s].id,e==="products"){const o=l[e][s];if(t.totalSold=o.totalSold||0,t.variants&&t.variants.length&&o.variants&&t.variants.forEach(i=>{const n=o.variants.find(p=>p.name===i.name);n&&n.totalSold&&(i.totalSold=n.totalSold)}),o.stockBatches&&!t.stockBatches&&(t.stockBatches=o.stockBatches),o.suppliers&&!t.suppliers&&(t.suppliers=o.suppliers),o.multiUnits&&!t.multiUnits&&(t.multiUnits=o.multiUnits),t.supplierId&&Array.isArray(t.suppliers)){const i=t.suppliers.findIndex(n=>String(n.supplierId)===String(t.supplierId));if(i>-1)t.suppliers.forEach(n=>n.isPrimary=!1),t.suppliers[i].isPrimary=!0;else{const n=(l.suppliers||[]).find(p=>String(p.id)===String(t.supplierId));t.suppliers.forEach(p=>p.isPrimary=!1),t.suppliers.push({supplierId:String(t.supplierId),supplierName:n?n.name:"Supplier Utama",lastBuyPrice:parseFloat(t.hpp)||0,supplierSku:t.sku||"",isPrimary:!0,updatedAt:new Date().toISOString()})}}}l[e][s]=t}else t.id=re,l[e].push(t)}else if(t.id=Date.now(),l[e]||(l[e]=[]),l[e].unshift(t),e==="products"){if(l.productOrder=[t.id.toString(),...(l.productOrder||[]).filter(n=>String(n)!==t.id.toString())],t.supplierId){const n=(l.suppliers||[]).find(p=>String(p.id)===String(t.supplierId));t.suppliers=[{supplierId:String(t.supplierId),supplierName:n?n.name:"Supplier Utama",lastBuyPrice:parseFloat(t.hpp)||0,supplierSku:t.sku||"",isPrimary:!0,updatedAt:new Date().toISOString()}]}const s=parseFloat(t.storeStock)||0,o=parseFloat(t.warehouseStock)||0,i=s+o;t.stock=i,i>0&&(t.stockBatches=[],s>0&&t.stockBatches.push({batchId:`BATCH-INIT-STORE-${t.id}`,poId:null,poNumber:"STOK AWAL (TOKO)",supplierId:t.supplierId||"",supplierName:"Stok Awal Toko",receivedAt:new Date().toISOString(),buyPrice:parseFloat(t.hpp)||0,initialQty:s,remainingQty:s,location:"store",isInitial:!0}),o>0&&t.stockBatches.push({batchId:`BATCH-INIT-WH-${t.id}`,poId:null,poNumber:"STOK AWAL (GUDANG)",supplierId:t.supplierId||"",supplierName:"Stok Awal Gudang",receivedAt:new Date().toISOString(),buyPrice:parseFloat(t.hpp)||0,initialQty:o,remainingQty:o,location:"warehouse",isInitial:!0}))}R("Menyimpan...");try{const s=typeof P<"u"&&P?P:window.db,o=typeof N=="function"?N:window.saveApp||(async()=>{});if(!s)throw new Error("Database Firebase belum terhubung");if(e==="products")await s.collection("freshmart").doc("cms_data").collection("products").doc(t.id.toString()).set(t),await o(["productOrder"],{updateType:"product_single",updatedProductIds:[t.id.toString()]});else if(e==="customers"){const i=s.collection("freshmart").doc("cms_data").collection("customers");r!==null&&r!==t.id&&await i.doc(r.toString()).delete().catch(()=>{}),await i.doc(t.phone).set(t,{merge:!0})}else if(e==="rewards"){await s.collection("freshmart").doc("cms_data").collection("rewards").doc(t.id.toString()).set(t);try{localStorage.setItem("freshmart_rewards",JSON.stringify(l.rewards))}catch{}typeof window.renderRewardCatalog=="function"&&window.renderRewardCatalog()}else await o([e]);window.closeAdminModal?.(),window.rAdmItms?.(e),x("Tersimpan!")}catch(s){console.error("Gagal simpan admin data:",s),x("Gagal menyimpan: "+(s.message||""))}finally{G(!1),C()}};window.oADel=async(e,t)=>{window.showConfirm?.("Hapus Data","Data yang dihapus tidak bisa dikembalikan lagi.",async()=>{if(Re)return;G(!0);const a=typeof P<"u"&&P?P:window.db,r=typeof N=="function"?N:window.saveApp||(async()=>{}),s=l[e]&&l[e].find(o=>o&&o.id!=null&&String(o.id)===String(t));l[e]=(l[e]||[]).filter(o=>!o||o.id==null||String(o.id)!==String(t)),R("Menghapus...");try{if(!a)throw new Error("Database Firebase belum terhubung");if(e==="products")l.productOrder&&(l.productOrder=l.productOrder.filter(o=>String(o)!==String(t))),await a.collection("freshmart").doc("cms_data").collection("products").doc(t.toString()).delete(),await r(["productOrder"],{updateType:"product_delete",updatedProductIds:[t.toString()]});else if(e==="customers"){const o=s?s.phone:t.toString();await a.collection("freshmart").doc("cms_data").collection("customers").doc(o).delete()}else if(e==="rewards"){await a.collection("freshmart").doc("cms_data").collection("rewards").doc(t.toString()).delete();try{localStorage.setItem("freshmart_rewards",JSON.stringify(l.rewards))}catch{}typeof window.renderRewardCatalog=="function"&&window.renderRewardCatalog()}else await r([e]);window.rAdmItms?.(e),x("Berhasil Dihapus!")}catch(o){x("Gagal menghapus: "+(o.message||""))}finally{G(!1),C()}})};window.duplicateProduct=async e=>{window.showConfirm?.("Duplikat Produk","Menyalin data produk ini ke item baru?",async()=>{if(Re)return;G(!0);const t=typeof P<"u"&&P?P:window.db,a=typeof N=="function"?N:window.saveApp||(async()=>{}),r=l.products.find(i=>i&&i.id!=null&&String(i.id)===String(e));if(!r){G(!1);return}let s=JSON.parse(JSON.stringify(r));s.id=Date.now()+Math.floor(Math.random()*1e3),s.name=s.name+" COPY",s.sku="",s.totalSold=0,s.variants&&s.variants.length>0&&(s.variants=s.variants.map(i=>(i.sku="",i.totalSold=0,i))),l.products.unshift(s),l.productOrder||(l.productOrder=[]);const o=l.productOrder.findIndex(i=>String(i)===String(e));o>-1?l.productOrder.splice(o+1,0,s.id.toString()):l.productOrder.unshift(s.id.toString()),R("Menyalin...");try{if(!t)throw new Error("Database Firebase belum terhubung");await t.collection("freshmart").doc("cms_data").collection("products").doc(s.id.toString()).set(s),await a(["productOrder"],{updateType:"product_single",updatedProductIds:[s.id.toString()]}),window.rAdmItms?.("products"),x("Produk berhasil disalin!")}catch(i){x("Gagal menyalin: "+(i.message||""))}finally{G(!1),C()}},"Ya, Salin",!1)};window.rSubCatsB=()=>{const e=k("subcategories-builder-container");if(!e)return;const t=Array.isArray(de||window.tSubCats)?de||window.tSubCats:[],a=(T("af-name")||"").trim();let r=[];a&&Array.isArray(l.products)&&(r=[...new Set(l.products.filter(o=>o.category===a&&o.subCategory).map(o=>o.subCategory.trim()))].filter(o=>!t.some(i=>i.toLowerCase()===o.toLowerCase()))),e.innerHTML=`
        <div class="flex flex-col gap-2.5">
            <div class="flex items-center justify-between gap-2 flex-wrap">
                <label class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                    <i class="fa-solid fa-shapes text-[var(--color-primary)]"></i>
                    <span>Kelompok Sub-Kategori / Jenis (${t.length})</span>
                </label>
                ${r.length>0?`
                    <button type="button" onclick="window.autoDetectSubCatsFromProducts()" class="text-[10px] font-bold text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1 cursor-pointer">
                        <i class="fa-solid fa-wand-magic-sparkles text-amber-500"></i>
                        <span>Tarik ${r.length} sub dari produk terdaftar</span>
                    </button>
                `:""}
            </div>

            <!-- Input Baris Tambah Sub-Kategori -->
            <div class="flex gap-2">
                <div class="relative flex-1">
                    <input type="text" id="af-new-subcat-input" class="admin-input shadow-sm bg-white dark:bg-slate-800 text-xs w-full pr-10" placeholder="Ketik nama sub-kategori (misal: Cat Tembok, Cat Besi) lalu Enter..." onkeydown="if(event.key==='Enter' || event.key===','){event.preventDefault(); window.addSubCategoryFromInput();}">
                    <i class="fa-solid fa-tag absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-xs"></i>
                </div>
                <button type="button" onclick="window.addSubCategoryFromInput()" class="px-4 py-2.5 rounded-xl text-white hover:opacity-95 text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 active:scale-95 cursor-pointer shadow-sm" style="background:var(--color-primary)">
                    <i class="fa-solid fa-plus text-[10px]"></i>
                    <span>Tambah</span>
                </button>
            </div>

            <!-- Daftar Chip Sub-Kategori -->
            <div class="flex flex-wrap gap-2 min-h-[40px] items-center p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                ${t.length===0?`
                    <p class="text-xs text-slate-400 italic py-1 px-1 flex items-center gap-1.5">
                        <i class="fa-solid fa-circle-info text-slate-300 dark:text-slate-600"></i>
                        <span>Belum ada sub-kategori. Ketik di atas lalu tekan <b>Enter</b> atau klik <b>Tambah</b>.</span>
                    </p>
                `:t.map((s,o)=>`
                    <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-600/80 shadow-2xs group">
                        <i class="fa-solid fa-shapes text-[10px] text-[var(--color-primary)]"></i>
                        <span>${u(s)}</span>
                        <button type="button" onclick="window.removeSubCategoryFromBuilder(${o})" class="text-slate-400 hover:text-rose-500 p-0.5 rounded ml-1 transition-colors cursor-pointer" title="Hapus Sub-Kategori '${u(s)}'">
                            <i class="fa-solid fa-xmark text-[11px]"></i>
                        </button>
                    </span>
                `).join("")}
            </div>
            <p class="text-[10px] text-slate-400 flex items-center gap-1.5">
                <i class="fa-solid fa-circle-check text-[var(--color-primary)]"></i>
                <span>Sub-kategori yang dikelompokkan di sini otomatis menjadi pilihan dropdown saat input produk baru di kategori ini.</span>
            </p>
        </div>
    `};window.addSubCategoryFromInput=()=>{const e=k("af-new-subcat-input");if(!e)return;const t=(e.value||"").trim();if(!t)return;const a=Array.isArray(de||window.tSubCats)?[...de||window.tSubCats]:[];if(a.some(s=>s.toLowerCase()===t.toLowerCase())){x("Sub-kategori sudah ada!"),e.value="";return}a.push(t),at(a),window.rSubCatsB();const r=k("af-new-subcat-input");r&&r.focus()};window.removeSubCategoryFromBuilder=e=>{const t=Array.isArray(de||window.tSubCats)?[...de||window.tSubCats]:[];t.splice(e,1),at(t),window.rSubCatsB()};window.autoDetectSubCatsFromProducts=()=>{const e=(T("af-name")||"").trim();if(!e){x("Isi nama kategori terlebih dahulu!");return}const t=[...new Set((l.products||[]).filter(s=>s.category===e&&s.subCategory).map(s=>s.subCategory.trim()))];if(!t.length){x("Belum ada produk dengan sub-kategori pada kategori ini");return}const a=Array.isArray(de||window.tSubCats)?[...de||window.tSubCats]:[];let r=0;t.forEach(s=>{a.some(o=>o.toLowerCase()===s.toLowerCase())||(a.push(s),r++)}),at(a),window.rSubCatsB(),x(`${r} sub-kategori berhasil ditarik dari produk!`)};window.updateProductSubCategoryOptions=(e,t="")=>{const a=k("af-subCategory-select"),r=k("af-subCategory"),s=k("af-subCategory-hint");if(!a||!r)return;const o=t!==void 0?t:(r.value||"").trim(),i=(l.categories||[]).find(m=>m.name===e),n=Array.isArray(i?.subCategories)?i.subCategories:[],p=(l.products||[]).filter(m=>m.category===e&&m.subCategory).map(m=>m.subCategory.trim()),d=[...new Set([...n,...p])].filter(Boolean);let c='<option value="">-- Tanpa Sub-Kategori / Pilih Jenis --</option>';if(d.forEach(m=>{c+=`<option value="${u(m)}">${u(m)}</option>`}),c+='<option value="__custom__" class="font-bold text-[var(--color-primary)]">+ Ketik Nama Sub-Kategori Manual...</option>',a.innerHTML=c,o)if(d.some(b=>b.toLowerCase()===o.toLowerCase())){const b=d.find(f=>f.toLowerCase()===o.toLowerCase());a.value=b,r.value=b,r.classList.add("hidden")}else a.value="__custom__",r.value=o,r.classList.remove("hidden");else a.value="",r.value="",r.classList.add("hidden");s&&(e&&d.length>0?s.textContent=`Tersedia ${d.length} sub-kategori terkelompok di bawah '${e}'`:e?s.textContent=`Belum ada sub-kategori di bawah '${e}'. Klik '+ Sub Baru' untuk menambahkan.`:s.textContent="Pilih kategori induk terlebih dahulu untuk melihat pilihan sub-kategori.")};window.handleSubCategorySelectChange=e=>{const t=k("af-subCategory");t&&(e.value==="__custom__"?(t.classList.remove("hidden"),t.focus()):(t.classList.add("hidden"),t.value=e.value))};window.syncCustomSubCategoryValue=e=>{};window.promptAddNewSubCategoryToProduct=async()=>{const e=T("af-category");if(!e){x("Pilih kategori induk produk terlebih dahulu!");return}const a=await(typeof $t=="function"?$t:window.customPrompt||prompt)(`Tambah Sub-Kategori Baru untuk '${e}':`,"");if(!a||!a.trim())return;const r=a.trim();let s=(l.categories||[]).find(o=>o.name===e);if(s&&(s.subCategories=Array.isArray(s.subCategories)?s.subCategories:[],!s.subCategories.some(o=>o.toLowerCase()===r.toLowerCase()))){s.subCategories.push(r);try{await(typeof N=="function"?N:window.saveApp||(async()=>{}))(["categories"])}catch(o){console.error("Gagal simpan subkategori baru:",o)}}window.updateProductSubCategoryOptions(e,r),x(`Sub-kategori '${r}' berhasil ditambahkan!`)};window.rSpecB=()=>{const e=document.getElementById("spec-table-builder-container");if(!e)return;let t="";ne.length>0?t+=`<div class="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm mb-3">
            <table class="w-full text-sm">
                <thead>
                    <tr class="bg-slate-100 dark:bg-slate-800">
                        <th class="py-2.5 px-4 text-left text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest w-5/12">Nama Spesifikasi</th>
                        <th class="py-2.5 px-4 text-left text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Nilai / Keterangan</th>
                        <th class="py-2.5 px-2 w-10"></th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                    ${ne.map((a,r)=>`
                    <tr class="bg-white dark:bg-slate-900 group">
                        <td class="py-2 px-3"><input autocomplete='off' placeholder="Cth: Berat" class="w-full bg-transparent text-[13px] font-semibold text-slate-700 dark:text-slate-200 focus:outline-none placeholder:text-slate-300" value="${u(a.key)}" oninput="uSpec(${r},'key',this.value)"></td>
                        <td class="py-2 px-3"><input autocomplete='off' placeholder="Cth: 2.5 kg" class="w-full bg-transparent text-[13px] text-slate-600 dark:text-slate-300 focus:outline-none placeholder:text-slate-300" value="${u(a.val)}" oninput="uSpec(${r},'val',this.value)"></td>
                        <td class="py-2 px-2 text-center"><button type="button" onclick="rmSpec(${r})" class="w-8 h-8 rounded-xl bg-rose-50 border border-rose-200 text-rose-500 hover:bg-rose-500 hover:text-white dark:bg-rose-900/30 dark:border-rose-800 transition-all flex items-center justify-center opacity-70 group-hover:opacity-100 active:scale-95 cursor-pointer shadow-2xs mx-auto" title="Hapus Baris"><i class="fa-solid fa-trash text-xs"></i></button></td>
                    </tr>`).join("")}
                </tbody>
            </table>
        </div>`:t+=`
        <div class="text-center py-6 text-slate-400 dark:text-slate-500 text-[12px] font-medium flex flex-col items-center justify-center">
            <div class="w-11 h-11 rounded-2xl flex items-center justify-center text-xl mb-2 shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary);">
                <i class="fa-solid fa-table-cells-large"></i>
            </div>
            <span>Belum ada spesifikasi. Klik tombol di bawah untuk menambahkan.</span>
        </div>`,t+='<button type="button" onclick="addSpec()" class="w-full py-3.5 bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] text-[var(--color-primary)] font-bold rounded-xl text-xs sm:text-sm border-2 border-[rgba(var(--color-primary-rgb),0.25)] dark:border-[rgba(var(--color-primary-rgb),0.35)] border-dashed hover:bg-[rgba(var(--color-primary-rgb),0.12)] transition-all flex items-center justify-center gap-2 active:scale-95 shadow-2xs cursor-pointer"><i class="fa-solid fa-plus-circle text-base"></i> Tambah Baris Spesifikasi</button>',e.innerHTML=t};window.addSpec=()=>{ne.push({key:"",val:""}),ta(ne),window.rSpecB()};window.rmSpec=e=>{ne.splice(e,1),ta(ne),window.rSpecB()};window.uSpec=(e,t,a)=>{ne[e]&&(ne[e][t]=a)};window.rVarsB=()=>{const e=document.getElementById("af-category"),t=e?/\bcat\b/i.test(e.value):!1;let a=`<div class="space-y-5 mb-5">${O.map((r,s)=>{let o=r.isActive!==!1&&r.isActive!=="false";return`
        <div class="bg-slate-50 dark:bg-slate-900/50 p-5 sm:p-6 md:p-7 lg:p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm relative transition-all duration-300 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40 hover:shadow-md">
            <div class="flex items-center justify-between mb-5 pb-4 border-b border-slate-200 dark:border-slate-700">
                <div class="flex items-center gap-2.5">
                    <div class="w-7 h-7 rounded-xl primary-bg text-[11px] font-bold flex items-center justify-center shadow-sm">${s+1}</div>
                    <span class="text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-widest">${r.name||"Varian Baru"}</span>
                </div>
                <div class="flex items-center gap-2">
                    <button type="button" onclick="exportVariantToColorDB(${s})" class="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]/40 hover:bg-[rgba(var(--color-primary-rgb),0.08)] transition-all flex items-center justify-center shadow-sm active:scale-95 cursor-pointer" title="Simpan ke Database Warna"><i class="fa-solid fa-database text-xs"></i></button>
                    <button type="button" onclick="rmVar(${s})" class="w-8 h-8 rounded-xl bg-rose-50 border border-rose-200 text-rose-500 hover:bg-rose-500 hover:text-white dark:bg-rose-900/30 dark:border-rose-800 transition-all flex items-center justify-center shadow-sm active:scale-95 cursor-pointer" title="Hapus Varian"><i class="fa-solid fa-trash text-xs"></i></button>
                </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-7">
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Nama Varian (Warna/Ukuran)</label>
                    <input autocomplete='off' placeholder="Cth: Hijau Tosca" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${u(r.name)}" onchange="uVar(${s},'name',this.value)">
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Satuan / Unit</label>
                    <input autocomplete='off' placeholder="Cth: Pcs / Liter" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${u(r.unit||"")}" onchange="uVar(${s},'unit',this.value)">
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Harga Promo / Jual (Rp)</label>
                    <input autocomplete='off' placeholder="0" type="number" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${r.price}" onchange="uVar(${s},'price',this.value)">
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Harga Coret (Opsional)</label>
                    <input autocomplete='off' placeholder="0" type="number" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${r.priceNormal||""}" onchange="uVar(${s},'priceNormal',this.value)">
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Kode Warna (Khusus Cat)</label>
                    <div class="flex gap-3 items-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-2 shadow-sm">
                        <div class="relative shrink-0">
                            <input type="color" class="w-11 h-11 rounded-xl cursor-pointer border-2 border-slate-200 dark:border-slate-600 p-0.5 bg-white dark:bg-slate-700 shadow-inner" value="${r.colorCode||"#ffffff"}"
                                onchange="uVar(${s},'colorCode',this.value); document.getElementById('var-hex-${s}').value = this.value;" title="Klik untuk pilih warna">
                            <i class="fa-solid fa-eye-dropper absolute -bottom-1 -right-1 text-[9px] bg-white dark:bg-slate-700 text-slate-400 w-4 h-4 rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-600 pointer-events-none"></i>
                        </div>
                        <div class="flex-1 min-w-0">
                            <p class="text-[9px] font-bold text-slate-400 mb-0.5 uppercase tracking-widest">Kode HEX</p>
                            <input autocomplete='off' id="var-hex-${s}" placeholder="#RRGGBB (opsional)" class="w-full bg-transparent text-sm font-mono font-bold focus:outline-none dark:text-white uppercase" value="${u(r.colorCode||"")}" onchange="uVar(${s},'colorCode',this.value)">
                        </div>
                        ${r.colorCode?`<div class="w-6 h-6 rounded-full border-2 border-white shadow-md shrink-0" style="background:${u(r.colorCode)}"></div>`:""}
                    </div>
                </div>
                ${t?"":`
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Gambar Khusus Varian</label>
                    <div class="flex gap-2.5 items-center">
                        ${r.img?`<img src="${u(r.img)}" class="w-11 h-11 rounded-xl object-cover border-2 border-slate-200 dark:border-slate-600 shrink-0 shadow-sm" onerror="this.style.display='none'" loading="lazy">`:""}
                        <input autocomplete='off' id="var-img-${s}" placeholder="URL Gambar Varian" class="admin-input !text-sm flex-1 bg-white dark:bg-slate-800 shadow-sm" value="${u(r.img||"")}" onchange="uVar(${s},'img',fixD(this.value))">
                        <label class="primary-icon-btn border rounded-xl w-11 h-11 flex items-center justify-center cursor-pointer transition-all shrink-0 active:scale-95 shadow-sm" title="Upload dari Galeri"><i class="fa-solid fa-upload text-sm"></i><input type="file" accept="image/*" class="hidden" onchange="handleImageUpload(this, 'var-img-${s}')"></label>
                        <label class="primary-icon-btn border rounded-xl w-11 h-11 flex items-center justify-center cursor-pointer transition-all shrink-0 active:scale-95 shadow-sm" title="Ambil Foto Langsung"><i class="fa-solid fa-camera text-sm"></i><input type="file" accept="image/*" capture="environment" class="hidden" onchange="handleImageUpload(this, 'var-img-${s}')"></label>
                    </div>
                </div>
                `}
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">SKU / Barcode</label>
                    <div class="relative h-[48px]">
                        <input autocomplete='off' id="var-sku-${s}" placeholder="Auto (Bisa Kosong)" class="admin-input !text-sm h-full bg-white dark:bg-slate-800 shadow-sm !pr-12" value="${u(r.sku||"")}" onchange="uVar(${s},'sku',this.value)">
                        <button type="button" onclick="openCameraScanner('var-sku-${s}')" class="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center text-slate-400 hover:text-[var(--color-primary)] hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl transition-all"><i class="fa-solid fa-qrcode text-lg"></i></button>
                    </div>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Status Stok Varian</label>
                    <button type="button" onclick="window.toggleVarActive(${s})" class="w-full py-3.5 px-4 rounded-xl text-[13px] font-bold uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-2.5 border-2 active:scale-95 cursor-pointer ${o?"primary-bg border-[var(--color-primary-dark)] shadow-md":"bg-slate-100 text-rose-500 border-rose-200 hover:bg-rose-50 dark:bg-slate-800 dark:border-rose-800"}">
                        ${o?'<i class="fa-solid fa-circle-check text-base"></i> STOK TERSEDIA':'<i class="fa-solid fa-ban text-base"></i> STOK HABIS'}
                    </button>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Harga Modal / HPP (Rp)</label>
                    <input autocomplete='off' placeholder="0" type="number" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${r.hpp||0}" onchange="uVar(${s},'hpp',this.value)">
                </div>
                <div class="sm:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-3 p-3.5 rounded-xl bg-slate-100/70 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                    <div>
                        <label class="block text-[10px] font-black text-slate-600 dark:text-slate-300 mb-1.5 uppercase tracking-wider flex items-center gap-1">
                            <i class="fa-solid fa-store text-teal-500"></i> Stok Rak Toko
                        </label>
                        <input autocomplete='off' id="var-store-stock-${s}" placeholder="0" type="number" min="0" step="0.01" class="admin-input !text-sm !py-2.5 bg-white dark:bg-slate-900 shadow-sm font-bold" value="${r.storeStock!==void 0?r.storeStock:r.stock!==void 0?r.stock:0}" oninput="uVar(${s},'storeStock',this.value)">
                    </div>
                    <div>
                        <label class="block text-[10px] font-black text-slate-600 dark:text-slate-300 mb-1.5 uppercase tracking-wider flex items-center gap-1">
                            <i class="fa-solid fa-warehouse text-amber-500"></i> Stok Gudang
                        </label>
                        <input autocomplete='off' id="var-warehouse-stock-${s}" placeholder="0" type="number" min="0" step="0.01" class="admin-input !text-sm !py-2.5 bg-white dark:bg-slate-900 shadow-sm font-bold" value="${r.warehouseStock!==void 0?r.warehouseStock:0}" oninput="uVar(${s},'warehouseStock',this.value)">
                    </div>
                    <div>
                        <label class="block text-[10px] font-black text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wider flex items-center gap-1">
                            <i class="fa-solid fa-boxes-stacked"></i> Total Stok Varian
                        </label>
                        <input autocomplete='off' id="var-stock-total-${s}" readonly disabled placeholder="0" type="number" class="admin-input !text-sm !py-2.5 bg-slate-200/70 dark:bg-slate-800 font-black text-slate-800 dark:text-white cursor-not-allowed" value="${(parseFloat(r.storeStock!==void 0?r.storeStock:r.stock||0)||0)+(parseFloat(r.warehouseStock)||0)}">
                    </div>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-[var(--color-primary)] mb-2 uppercase tracking-widest flex items-center gap-1"><i class="fa-solid fa-star"></i> Poin Member (per unit terjual)</label>
                    <input autocomplete='off' placeholder="0" type="number" min="0" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${r.poin||0}" onchange="uVar(${s},'poin',this.value)">
                </div>
            </div>
        </div>`}).join("")}</div>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
        <button type="button" onclick="openColorImportModal()" class="py-3 text-slate-700 dark:text-slate-200 font-bold rounded-xl text-xs sm:text-sm border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-[var(--color-primary)]/50 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all flex items-center justify-center gap-2 active:scale-95 shadow-sm cursor-pointer"><i class="fa-solid fa-swatchbook text-[var(--color-primary)]"></i> Impor dari DB Warna</button>
        <button type="button" onclick="exportAllVariantsToColorDB()" class="py-3 text-slate-700 dark:text-slate-200 font-bold rounded-xl text-xs sm:text-sm border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-[var(--color-primary)]/50 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all flex items-center justify-center gap-2 active:scale-95 shadow-sm cursor-pointer"><i class="fa-solid fa-upload text-[var(--color-primary)]"></i> Ekspor Semua ke DB</button>
        <button type="button" onclick="addVar()" class="py-3 primary-bg font-bold rounded-xl text-xs sm:text-sm border border-[rgba(var(--color-primary-rgb),0.3)] transition-all flex items-center justify-center gap-2 active:scale-95 shadow-glow cursor-pointer"><i class="fa-solid fa-plus-circle text-base"></i> Tambah Varian Baru</button>
    </div>`;_("variants-builder-container",a)};window.addVar=()=>{O.push({name:"",price:0,priceNormal:0,hpp:0,storeStock:0,warehouseStock:0,stock:0,sku:"",img:"",unit:"",colorCode:"",poin:0,isActive:!0}),tt(O),window.rVarsB()};window.rmVar=e=>{O.splice(e,1),tt(O),window.rVarsB()};window.uVar=(e,t,a)=>{if(!O[e])return;const r=["price","priceNormal","hpp","stock","storeStock","warehouseStock","poin"];if(O[e][t]=r.includes(t)?parseFloat(a)||0:t==="img"?we(a):a,t==="storeStock"||t==="warehouseStock"){const s=parseFloat(O[e].storeStock)||0,o=parseFloat(O[e].warehouseStock)||0;O[e].stock=s+o;const i=document.getElementById(`var-stock-total-${e}`);i&&(i.value=O[e].stock)}else if(t==="stock"){O[e].warehouseStock===void 0&&(O[e].warehouseStock=0),O[e].storeStock=Math.max(0,(O[e].stock||0)-(O[e].warehouseStock||0));const s=document.getElementById(`var-store-stock-${e}`);s&&(s.value=O[e].storeStock)}};window.toggleVarActive=e=>{if(O[e]){const t=O[e].isActive!==!1&&O[e].isActive!=="false";O[e].isActive=!t,tt(O),typeof window.rVarsB=="function"&&window.rVarsB()}};window._openColorFloatModal=e=>{_closeColorFloatModal(!0);const t=document.createElement("div");t.id="color-float-modal",t.className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-900/80 p-4 opacity-0 transition-opacity duration-300",t.onclick=r=>{r.target===t&&_closeColorFloatModal()};const a=document.createElement("div");a.id="color-float-box",a.className="relative w-full max-w-md sm:max-w-xl scale-95 transform rounded-[2rem] border border-slate-200 bg-white shadow-2xl transition-all duration-300 dark:border-slate-700 dark:bg-slate-800 overflow-y-auto max-h-[90vh] custom-scrollbar",a.innerHTML=e,t.appendChild(a),document.body.appendChild(t),typeof window.pushModalHistory=="function"&&window.pushModalHistory("colorFloat"),requestAnimationFrame(()=>{t.classList.remove("opacity-0"),a.classList.remove("scale-95")})};window._closeColorFloatModal=(e=!1)=>{const t=document.getElementById("color-float-modal");if(!t)return;const a=document.getElementById("color-float-box"),r=()=>{t.classList.add("opacity-0"),a&&a.classList.add("scale-95"),setTimeout(()=>{t.parentNode&&t.remove()},300)};!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("colorFloat",!1,r):r()};window.openColorImportModal=()=>{let e=l.colors||[];if(!e.length){x("Database Warna masih kosong!");return}let t={};e.forEach(r=>{let s=r.catalog||"Tanpa Katalog";t[s]||(t[s]=[]),t[s].push(r)});let a=`<div class="p-6 sm:p-7">
        <div class="flex justify-between items-center mb-6">
            <h3 class="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2"><i class="fa-solid fa-swatchbook text-[var(--color-primary)]"></i> Pilih Warna</h3>
            <button type="button" onclick="_closeColorFloatModal()" class="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 flex items-center justify-center transition-all cursor-pointer"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <div class="space-y-6 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">`;for(let r in t)a+=`<div>
            <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">${u(r)}</h4>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                ${t[r].map(s=>`
                    <button type="button" onclick="importColorToVariant('${u(s.name)}', '${u(s.hex||"")}')" class="flex items-center gap-3 p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/50 hover:-translate-y-0.5 hover:shadow-md transition-all text-left bg-white dark:bg-slate-800 cursor-pointer">
                        <div class="w-8 h-8 rounded-full border-2 border-slate-100 dark:border-slate-600 shadow-sm shrink-0" style="background-color: ${u(s.hex||"transparent")}"></div>
                        <span class="text-xs font-bold text-slate-700 dark:text-slate-200 line-clamp-2">${u(s.name)}</span>
                    </button>`).join("")}
            </div>
        </div>`;a+="</div></div>",_openColorFloatModal(a)};window.importColorToVariant=(e,t)=>{O.push({name:e,price:0,priceNormal:0,hpp:0,stock:0,sku:"",img:"",unit:"",colorCode:t||"",poin:0,isActive:!0}),tt(O),window.rVarsB(),_closeColorFloatModal(),x("Warna ditambahkan!")};window.exportVariantToColorDB=async e=>{const t=O[e];if(!t||!t.name.trim()){x("Nama varian kosong!");return}if((l.colors||[]).find(o=>o.name.toLowerCase()===t.name.trim().toLowerCase())){x(`"${t.name}" sudah ada di Database Warna.`);return}let s=[...new Set((l.colors||[]).map(o=>o.catalog).filter(Boolean))].map(o=>`<option value="${u(o)}">${u(o)}</option>`).join("");_openColorFloatModal(`
        <div class="p-6">
            <h3 class="text-lg font-bold text-slate-800 dark:text-white mb-5 flex items-center gap-2"><i class="fa-solid fa-database text-[var(--color-primary)]"></i> Simpan ke Database Warna</h3>
            <div class="space-y-4">
                <div><label class="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Nama Warna</label><input id="exp-name" class="admin-input" value="${u(t.name)}"></div>
                <div><label class="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Kode Warna (Hex)</label>
                    <div class="flex gap-3 items-center">
                        <input type="color" id="exp-hex-picker" value="${u(t.colorCode||"#ffffff")}" class="w-10 h-10 rounded-xl cursor-pointer" onchange="document.getElementById('exp-hex').value=this.value">
                        <input id="exp-hex" class="admin-input flex-1" placeholder="#FFFFFF (opsional)" value="${u(t.colorCode||"")}">
                    </div></div>
                <div><label class="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Katalog / Merek</label>
                    <input id="exp-catalog" list="exp-catalog-list" class="admin-input" placeholder="Cth: No Drop, Boyo, dll">
                    <datalist id="exp-catalog-list">${s}</datalist>
                </div>
            </div>
            <div class="flex gap-3 mt-6">
                <button onclick="_closeColorFloatModal()" class="flex-1 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 font-bold text-slate-500 dark:text-slate-400 text-xs sm:text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer active:scale-95">Batal</button>
                <button onclick="confirmExportVariantToColorDB()" class="flex-1 py-3.5 rounded-2xl primary-bg text-white font-bold text-xs sm:text-sm hover:opacity-90 transition-all active:scale-95 cursor-pointer shadow-md"><i class="fa-solid fa-floppy-disk mr-2"></i>Simpan</button>
            </div>
        </div>`)};window.confirmExportVariantToColorDB=async()=>{const e=(document.getElementById("exp-name")?.value||"").trim(),t=(document.getElementById("exp-hex")?.value||"").trim(),a=(document.getElementById("exp-catalog")?.value||"").trim();if(!e){x("Nama warna wajib diisi!");return}const r={id:Date.now(),name:e,hex:t,catalog:a};l.colors||(l.colors=[]),l.colors.push(r),_closeColorFloatModal(),R("Menyimpan ke Database Warna...");try{await N(["colors"]),x(`"${e}" berhasil disimpan ke Database Warna!`)}catch{x("Gagal menyimpan!")}finally{C()}};window.exportAllVariantsToColorDB=async()=>{const e=O.filter(r=>r.name.trim());if(!e.length){x("Tidak ada varian untuk diekspor!");return}l.colors||(l.colors=[]);let a=[...new Set(l.colors.map(r=>r.catalog).filter(Boolean))].map(r=>`<option value="${u(r)}">${u(r)}</option>`).join("");_openColorFloatModal(`
        <div class="p-6">
            <h3 class="text-lg font-bold text-slate-800 dark:text-white mb-2 flex items-center gap-2"><i class="fa-solid fa-upload text-[var(--color-primary)]"></i> Ekspor Semua Varian</h3>
            <p class="text-xs text-slate-500 mb-5">${e.length} varian akan diekspor ke Database Warna. Nama yang sudah ada di database akan dilewati.</p>
            <div><label class="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Katalog / Merek (berlaku untuk semua)</label>
                <input id="expall-catalog" list="expall-catalog-list" class="admin-input" placeholder="Cth: No Drop, Boyo, dll">
                <datalist id="expall-catalog-list">${a}</datalist>
            </div>
            <div class="flex gap-3 mt-6">
                <button onclick="_closeColorFloatModal()" class="flex-1 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 font-bold text-slate-500 dark:text-slate-400 text-xs sm:text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer active:scale-95">Batal</button>
                <button onclick="confirmExportAllVariants()" class="flex-1 py-3.5 rounded-2xl primary-bg text-white font-bold text-xs sm:text-sm hover:opacity-90 transition-all active:scale-95 cursor-pointer shadow-md"><i class="fa-solid fa-upload mr-2"></i>Ekspor</button>
            </div>
        </div>`)};window.confirmExportAllVariants=async()=>{const e=(document.getElementById("expall-catalog")?.value||"").trim(),t=O.filter(s=>s.name.trim());l.colors||(l.colors=[]);const a=new Set(l.colors.map(s=>s.name.toLowerCase()));let r=0;if(t.forEach(s=>{a.has(s.name.trim().toLowerCase())||(l.colors.push({id:Date.now()+r,name:s.name.trim(),hex:s.colorCode||"",catalog:e}),a.add(s.name.trim().toLowerCase()),r++)}),_closeColorFloatModal(),!r){x("Semua varian sudah ada di Database Warna!");return}R("Menyimpan...");try{await N(["colors"]),x(`${r} warna berhasil diekspor ke Database Warna!`)}catch{x("Gagal menyimpan!")}finally{C()}};window.openImportFromProductsModal=async()=>{const e=[];if((l.products||[]).forEach(o=>{(o.variants||[]).forEach(i=>{i.name&&i.name.trim()&&e.push({varName:i.name.trim(),hex:i.colorCode||"",prodName:o.name||""})})}),!e.length){x("Tidak ada varian produk yang ditemukan!");return}const t=new Set((l.colors||[]).map(o=>o.name.toLowerCase())),a=e.filter(o=>!t.has(o.varName.toLowerCase()));if(!a.length){x("Semua varian produk sudah ada di Database Warna!");return}let s=[...new Set((l.colors||[]).map(o=>o.catalog).filter(Boolean))].map(o=>`<option value="${u(o)}">${u(o)}</option>`).join("");window._pendingImportVariants=a,_openColorFloatModal(`
        <div class="p-6">
            <h3 class="text-lg font-bold text-slate-800 dark:text-white mb-2 flex items-center gap-2"><i class="fa-solid fa-box-archive text-[var(--color-primary)]"></i> Impor dari Semua Produk</h3>
            <p class="text-xs text-slate-500 mb-4">${a.length} nama varian baru ditemukan (yang sudah ada di database dilewati).</p>
            <div class="custom-scrollbar max-h-48 overflow-y-auto mb-4 space-y-2">
                ${a.map((o,i)=>`
                    <label class="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 cursor-pointer hover:border-[var(--color-primary)] transition-all">
                        <input type="checkbox" id="imp-chk-${i}" checked class="w-4 h-4 rounded accent-[var(--color-primary)]">
                        <div class="w-5 h-5 rounded-full border border-slate-200 dark:border-slate-600 shrink-0" style="background-color:${u(o.hex||"transparent")}"></div>
                        <div class="min-w-0">
                            <p class="text-xs font-bold text-slate-700 dark:text-slate-200 truncate">${u(o.varName)}</p>
                            <p class="text-[10px] text-slate-400 truncate">dari: ${u(o.prodName)}</p>
                        </div>
                    </label>`).join("")}
            </div>
            <div><label class="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Katalog / Merek</label>
                <input id="impprod-catalog" list="impprod-cat-list" class="admin-input" placeholder="Cth: No Drop, Boyo, dll (opsional)">
                <datalist id="impprod-cat-list">${s}</datalist>
            </div>
            <div class="flex gap-3 mt-5">
                <button onclick="_closeColorFloatModal()" class="flex-1 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 font-bold text-slate-500 dark:text-slate-400 text-xs sm:text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer active:scale-95">Batal</button>
                <button onclick="confirmImportFromProducts()" class="flex-1 py-3.5 rounded-2xl primary-bg font-bold text-xs sm:text-sm transition-all active:scale-95 cursor-pointer shadow-md"><i class="fa-solid fa-download mr-2"></i>Impor</button>
            </div>
        </div>`)};window.confirmImportFromProducts=async()=>{const e=window._pendingImportVariants||[];window._pendingImportVariants=null;const t=(document.getElementById("impprod-catalog")?.value||"").trim();l.colors||(l.colors=[]);const a=new Set(l.colors.map(s=>s.name.toLowerCase()));let r=0;if(e.forEach((s,o)=>{const i=document.getElementById(`imp-chk-${o}`);i&&i.checked&&!a.has(s.varName.toLowerCase())&&(l.colors.push({id:Date.now()+r,name:s.varName,hex:s.hex||"",catalog:t}),a.add(s.varName.toLowerCase()),r++)}),_closeColorFloatModal(),!r){x("Tidak ada warna baru yang ditambahkan!");return}R("Menyimpan...");try{await N(["colors"]),x(`${r} warna berhasil diimpor ke Database Warna!`),window.cTab==="colors"&&window.rAdmItms?.("colors")}catch{x("Gagal menyimpan!")}finally{C()}};const zo=e=>window.pushModalHistory?.(e),gr=(e,t,a)=>window.requestCloseModal?.(e,t,a);window.openRestockModal=e=>{const t=l.products.find(o=>o&&o.id!=null&&String(o.id)===String(e));if(!t)return;const a=t.variants&&t.variants.length>0;let r="";a?r=t.variants.map((o,i)=>`
            <div class="flex items-center justify-between gap-3 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
                <div class="flex items-center gap-3 min-w-0 flex-1">
                    ${o.colorCode?`<span class="w-5 h-5 rounded-full shrink-0 shadow-sm border border-slate-300" style="background-color:${u(o.colorCode)}"></span>`:""}
                    <div class="min-w-0 flex-1">
                        <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${u(o.name)}</p>
                        <p class="text-[10px] font-bold text-slate-500 mt-0.5">Stok saat ini: <span class="text-blue-500 font-bold">${parseFloat(o.stock)||0}</span></p>
                    </div>
                </div>
                <input type="number" id="restock-var-${i}" min="0" placeholder="Tambah" class="admin-input !py-2.5 !px-3 !w-28 text-center text-sm bg-white dark:bg-slate-800 shadow-sm shrink-0" value="">
            </div>`).join(""):r=`
            <div class="flex items-center justify-between gap-3 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
                <div class="min-w-0 flex-1">
                    <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${u(t.name)}</p>
                    <p class="text-[10px] font-bold text-slate-500 mt-0.5">Stok saat ini: <span class="text-blue-500 font-bold">${parseFloat(t.stock)||0}</span></p>
                </div>
                <input type="number" id="restock-main" min="0" placeholder="Tambah" class="admin-input !py-2.5 !px-3 !w-28 text-center text-sm bg-white dark:bg-slate-800 shadow-sm shrink-0" value="">
            </div>`;let s=document.getElementById("restock-modal");s||(s=document.createElement("div"),s.id="restock-modal",s.className="fixed inset-0 z-[110] bg-slate-900/80 flex items-end sm:items-center justify-center p-0 sm:p-5",s.onclick=o=>{o.target===s&&closeRestockModal()},document.body.appendChild(s)),s.innerHTML=`
        <div class="bg-white dark:bg-slate-900 w-full max-w-lg rounded-t-3xl sm:rounded-2xl max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-700">
            <div class="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0">
                <div>
                    <h3 class="font-bold text-slate-800 dark:text-white text-base flex items-center gap-2"><i class="fa-solid fa-boxes-stacked text-[var(--color-primary)]"></i> Restock Produk</h3>
                    <p class="text-[10px] font-bold text-slate-500 mt-0.5 uppercase tracking-widest">${u(t.name)}</p>
                </div>
                <button onclick="closeRestockModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-rose-100 hover:text-rose-500 flex items-center justify-center transition-all cursor-pointer"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="custom-scrollbar p-5 sm:p-6 overflow-y-auto flex-1 space-y-3">
                <p class="text-[11px] font-bold text-slate-600 dark:text-slate-300 bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] border border-[rgba(var(--color-primary-rgb),0.2)] dark:border-[rgba(var(--color-primary-rgb),0.3)] p-3 rounded-xl"><i class="fa-solid fa-circle-info text-[var(--color-primary)] mr-1.5"></i> Masukkan jumlah <b>penambahan</b> stok. Stok lama + nilai ini = stok baru.</p>
                ${r}
            </div>
            <div class="p-5 border-t border-slate-100 dark:border-slate-800 shrink-0">
                <button onclick="processRestock('${u(String(e))}')" class="btn-primary py-3.5 text-sm shadow-glow !rounded-2xl flex items-center justify-center gap-2 cursor-pointer active:scale-95"><i class="fa-solid fa-save"></i> Simpan Restock</button>
            </div>
        </div>`,s.style.opacity="0",s.style.display="flex",requestAnimationFrame(()=>{s.style.transition="opacity 0.25s ease",s.style.opacity="1"}),zo("restock")};window.closeRestockModal=(e=!1)=>{gr("restock",e,()=>{const t=document.getElementById("restock-modal");!t||t.style.display==="none"||(t.style.opacity="0",t.style.transition="opacity 0.25s ease",setTimeout(()=>{t.style.display="none",t.style.opacity="",t.style.transition=""},250))})};window.processRestock=async e=>{if(Re)return;G(!0);const t=l.products.findIndex(i=>i&&i.id!=null&&String(i.id)===String(e));if(t<0){G(!1);return}const a=l.products[t],r=a.variants&&a.variants.length>0;let s=JSON.parse(JSON.stringify(a)),o=0;if(r)s.variants=s.variants.map((n,p)=>{const d=parseFloat(document.getElementById("restock-var-"+p)?.value)||0;return d>0&&(n.stock=(parseFloat(n.stock)||0)+d,o+=d,n.stock>0&&(n.isActive===!1||n.isActive==="false")&&(n.isActive=!0)),n}),s.variants.some(n=>(parseFloat(n.stock)||0)>0&&n.isActive!==!1&&n.isActive!=="false")&&(s.isActive===!1||s.isActive==="false")&&(s.isActive="true");else{const i=parseFloat(document.getElementById("restock-main")?.value)||0;i>0&&(s.stock=(parseFloat(s.stock)||0)+i,o+=i,s.stock>0&&(s.isActive===!1||s.isActive==="false")&&(s.isActive="true"))}if(o<=0)return G(!1),x("Masukkan jumlah restock terlebih dahulu!");R("Menyimpan Restock...");try{const i=typeof P<"u"&&P?P:window.db,n=typeof N=="function"?N:window.saveApp||(async()=>{});if(!i)throw new Error("Database Firebase belum terhubung");const p=i.collection("freshmart").doc("cms_data").collection("products").doc(e.toString());let d=0;await i.runTransaction(async c=>{const m=await c.get(p);if(!m.exists)throw new Error("Produk tidak ditemukan di server");const b=JSON.parse(JSON.stringify(m.data()));if(r)a.variants.forEach((h,w)=>{const v=parseFloat(document.getElementById("restock-var-"+w)?.value)||0;if(v<=0)return;Ya(b,{poId:null,poNumber:"RESTOCK CEPAT",supplierId:b.supplierId||"",supplierName:"Penyesuaian Toko",qty:v,unitPrice:parseFloat(b.variants?.[w]?.hpp||b.hpp)||0,variantName:h.name,receivedAt:new Date().toISOString()});const S=(b.variants||[]).findIndex($=>$.name===h.name);S>-1&&b.variants[S].stock>0&&(b.variants[S].isActive===!1||b.variants[S].isActive==="false")&&(b.variants[S].isActive=!0)}),b.variants.some(h=>(parseFloat(h.stock)||0)>0&&h.isActive!==!1&&h.isActive!=="false")&&(b.isActive===!1||b.isActive==="false")&&(b.isActive="true"),d=b.variants.reduce((h,w)=>h+(parseFloat(w.stock)||0),0);else{const f=parseFloat(document.getElementById("restock-main")?.value)||0;f>0&&(Ya(b,{poId:null,poNumber:"RESTOCK CEPAT",supplierId:b.supplierId||"",supplierName:"Penyesuaian Toko",qty:f,unitPrice:parseFloat(b.hpp)||0,variantName:"",receivedAt:new Date().toISOString()}),b.stock>0&&(b.isActive===!1||b.isActive==="false")&&(b.isActive="true")),d=b.stock}c.set(p,b),Object.assign(s,b)}),l.products[t]=s,await n([],{updateType:"stock_change",updatedProductIds:[e.toString()]}),closeRestockModal(),window.rAdmItms?.("products"),Ee("stat-products",l.products.filter(c=>c.isActive!=="false"&&c.isActive!==!1).length),x(`Restock +${o} berhasil! Total stok: ${d}`)}catch(i){x("Gagal restock: "+(i.message||""))}finally{G(!1),C()}};window.toggleProductStatus=async(e,t)=>{if(Re)return;G(!0);const a=l.products.findIndex(r=>r.id!=null&&r.id.toString()===e.toString());if(a>-1){l.products[a].isActive=t?"true":"false",R(t?"Mengaktifkan...":"Menonaktifkan...");try{const r=typeof P<"u"&&P?P:window.db,s=typeof N=="function"?N:window.saveApp||(async()=>{});if(!r)throw new Error("Database Firebase belum terhubung");await r.collection("freshmart").doc("cms_data").collection("products").doc(e.toString()).update({isActive:t?"true":"false"}),await s([],{updateType:"stock_change",updatedProductIds:[e.toString()]}),Ee("stat-products",l.products.filter(o=>o.isActive!=="false"&&o.isActive!==!1).length),window.rAdmItms?.("products"),x(t?"Produk Aktif!":"Stok Dikosongkan!")}catch(r){x("Gagal update status: "+(r.message||""))}finally{G(!1),C()}}else G(!1)};window.closeAdminModal=(e=!1)=>{const t=k("admin-modal"),a=k("admin-modal-box");t&&gr("admin",e,()=>{Y(t,a)})};const Qo=e=>window.pushModalHistory?.(e),Yo=(e,t,a)=>window.requestCloseModal?.(e,t,a);let X;window.openCameraScanner=async(e="search-input")=>{const t=k("scanner-modal");t&&t.classList.contains("hidden")&&Qo("scanner"),pe(t,t?.firstElementChild);try{await ra("/html5-qrcode.min.js",()=>typeof Html5Qrcode<"u").catch(()=>ra("https://cdnjs.cloudflare.com/ajax/libs/html5-qrcode/2.3.8/html5-qrcode.min.js",()=>typeof Html5Qrcode<"u"))}catch{x("Gagal memuat modul kamera. Cek koneksi atau izin kamera."),closeCameraScanner();return}X||(X=new Html5Qrcode("reader"));const a=typeof Html5QrcodeSupportedFormats<"u"?[Html5QrcodeSupportedFormats.CODE_128,Html5QrcodeSupportedFormats.EAN_13,Html5QrcodeSupportedFormats.EAN_8,Html5QrcodeSupportedFormats.CODE_39,Html5QrcodeSupportedFormats.UPC_A,Html5QrcodeSupportedFormats.UPC_E,Html5QrcodeSupportedFormats.QR_CODE]:void 0,r={fps:15,qrbox:(s,o)=>{const i=Math.min(Math.floor(s*.88),340),n=Math.min(Math.floor(o*.45),150);return{width:Math.max(i,220),height:Math.max(n,90)}},...a?{formatsToSupport:a}:{},experimentalFeatures:{useBarCodeDetectorIfSupported:!0}};setTimeout(()=>{X&&X.start({facingMode:"environment"},r,s=>{const o=typeof window.cleanBarcodeRaw=="function"?window.cleanBarcodeRaw(s):(s||"").trim();let i=k(e);i&&(i.value=o,e==="search-input"||e==="mobile-header-search"?window.handleSearch?.(o):(i.dispatchEvent(new Event("input",{bubbles:!0})),i.dispatchEvent(new Event("change",{bubbles:!0})))),x("Barcode terbaca!"),closeCameraScanner()},s=>{}).catch(s=>{x("Akses kamera ditolak/gagal!"),closeCameraScanner()})},100)};window.closeCameraScanner=(e=!1)=>{Yo("scanner",e,()=>{if(k("scanner-modal").classList.add("opacity-0"),X)try{X.getState()===2||X.getState()===3?X.stop().then(()=>{X.clear(),X=null}).catch(t=>{X.clear(),X=null}):(X.clear(),X=null)}catch{X=null}setTimeout(()=>nt("scanner-modal"),300)})};const Xo=e=>window.pushModalHistory?.(e),Zo=(e,t,a)=>window.requestCloseModal?.(e,t,a);let Le=[];window.openQuickPriceModal=e=>{const t=l.products.find(o=>o&&o.id!=null&&String(o.id)===String(e));if(!t)return;const a=t.variants&&t.variants.length>0;Le=!a&&t.wholesale?JSON.parse(JSON.stringify(t.wholesale)):[];let r="";a?r=t.variants.map((o,i)=>`
            <div class="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-3">
                <div class="flex items-center gap-2.5 min-w-0">
                    ${o.colorCode?`<span class="w-4 h-4 rounded-full shrink-0 shadow-sm border border-slate-300" style="background-color:${u(o.colorCode)}"></span>`:""}
                    <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${u(o.name)}</p>
                </div>
                <div class="grid grid-cols-4 gap-2.5">
                    <div><label class="block text-[9px] font-bold text-amber-500 mb-1 uppercase tracking-widest">HPP</label><input type="number" id="qp-var-hpp-${i}" value="${o.hpp||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></div>
                    <div><label class="block text-[9px] font-bold text-[var(--color-primary)] mb-1 uppercase tracking-widest">Jual</label><input type="number" id="qp-var-price-${i}" value="${o.price||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></div>
                    <div><label class="block text-[9px] font-bold text-slate-400 mb-1 uppercase tracking-widest">Coret</label><input type="number" id="qp-var-normal-${i}" value="${o.priceNormal||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></div>
                    <div><label class="block text-[9px] font-bold text-[var(--color-primary)] mb-1 uppercase tracking-widest"><i class="fa-solid fa-star"></i> Poin</label><input type="number" min="0" id="qp-var-poin-${i}" value="${o.poin||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></div>
                </div>
            </div>`).join(""):r=`
            <div class="grid grid-cols-4 gap-2.5">
                <div><label class="block text-[9px] font-bold text-amber-500 mb-1 uppercase tracking-widest">HPP / Modal</label><input type="number" id="qp-hpp" value="${t.hpp||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></div>
                <div><label class="block text-[9px] font-bold text-[var(--color-primary)] mb-1 uppercase tracking-widest">Harga Jual</label><input type="number" id="qp-price" value="${t.price||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></div>
                <div><label class="block text-[9px] font-bold text-slate-400 mb-1 uppercase tracking-widest">Harga Coret</label><input type="number" id="qp-normal" value="${t.priceNormal||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></div>
                <div><label class="block text-[9px] font-bold text-[var(--color-primary)] mb-1 uppercase tracking-widest"><i class="fa-solid fa-star"></i> Poin</label><input type="number" min="0" id="qp-poin" value="${t.poin||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></div>
            </div>
            <div class="pt-2">
                <div class="flex justify-between items-center mb-2.5">
                    <label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Harga Grosir</label>
                    <button type="button" onclick="qpAddWhol()" class="text-[10px] font-bold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] flex items-center gap-1"><i class="fa-solid fa-plus"></i> Tambah</button>
                </div>
                <div id="qp-whol-container" class="space-y-2"></div>
            </div>`;let s=document.getElementById("quickprice-modal");s||(s=document.createElement("div"),s.id="quickprice-modal",s.className="fixed inset-0 z-[110] bg-slate-900/80 flex items-end sm:items-center justify-center p-0 sm:p-5",s.onclick=o=>{o.target===s&&closeQuickPriceModal()},document.body.appendChild(s)),s.innerHTML=`
        <div class="bg-white dark:bg-slate-900 w-full max-w-lg rounded-t-3xl sm:rounded-2xl max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-700">
            <div class="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0">
                <div>
                    <h3 class="font-bold text-slate-800 dark:text-white text-base flex items-center gap-2"><i class="fa-solid fa-tags text-[var(--color-primary)]"></i> Edit Cepat Harga</h3>
                    <p class="text-[10px] font-bold text-slate-500 mt-0.5 uppercase tracking-widest">${u(t.name)}</p>
                </div>
                <button onclick="closeQuickPriceModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-rose-100 hover:text-rose-500 flex items-center justify-center transition-all cursor-pointer"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="custom-scrollbar p-5 sm:p-6 overflow-y-auto flex-1 space-y-3" id="qp-body">${r}</div>
            <div class="p-5 border-t border-slate-100 dark:border-slate-800 shrink-0">
                <button onclick="processQuickPrice('${u(String(e))}')" class="btn-primary py-3.5 text-sm shadow-glow !rounded-2xl flex items-center justify-center gap-2 cursor-pointer active:scale-95"><i class="fa-solid fa-save"></i> Simpan Harga</button>
            </div>
        </div>`,a||rQpWhol(),s.style.opacity="0",s.style.display="flex",requestAnimationFrame(()=>{s.style.transition="opacity 0.25s ease",s.style.opacity="1"}),Xo("quickprice")};window.qpUpdateWhol=(e,t,a)=>{Le[e]&&(Le[e][t]=parseFloat(a)||0)};window.qpRemoveWhol=e=>{Le.splice(e,1),typeof window.rQpWhol=="function"&&window.rQpWhol()};window.rQpWhol=()=>{_("qp-whol-container",Le.length?Le.map((e,t)=>`
        <div class="flex items-center gap-2">
            <input type="number" min="1" placeholder="Min. Qty" value="${e.minQty||""}" onchange="window.qpUpdateWhol(${t}, 'minQty', this.value)" class="admin-input !py-2.5 !px-3 text-xs bg-slate-50 dark:bg-slate-900/50 flex-1">
            <input type="number" min="0" placeholder="Harga/Unit" value="${e.price||""}" onchange="window.qpUpdateWhol(${t}, 'price', this.value)" class="admin-input !py-2.5 !px-3 text-xs bg-slate-50 dark:bg-slate-900/50 flex-1">
            <button type="button" onclick="window.qpRemoveWhol(${t})" class="w-9 h-9 shrink-0 rounded-xl bg-rose-50 text-rose-500 hover:bg-rose-500 hover:text-white flex items-center justify-center transition-all cursor-pointer"><i class="fa-solid fa-trash text-xs"></i></button>
        </div>`).join(""):'<p class="text-[11px] font-bold text-slate-400 text-center py-2">Belum ada tingkat harga grosir.</p>')};window.qpAddWhol=()=>{Le.push({minQty:0,price:0}),rQpWhol()};window.closeQuickPriceModal=(e=!1)=>{Zo("quickprice",e,()=>{const t=document.getElementById("quickprice-modal");!t||t.style.display==="none"||(t.style.opacity="0",t.style.transition="opacity 0.25s ease",setTimeout(()=>{t.style.display="none",t.style.opacity="",t.style.transition=""},250))})};window.processQuickPrice=async e=>{if(Re)return;G(!0);const t=l.products.findIndex(s=>s&&s.id!=null&&String(s.id)===String(e));if(t<0){G(!1);return}const a=l.products[t],r=a.variants&&a.variants.length>0;R("Menyimpan Harga...");try{const s=typeof P<"u"&&P?P:window.db,o=typeof N=="function"?N:window.saveApp||(async()=>{});if(!s)throw new Error("Database Firebase belum terhubung");const i=s.collection("freshmart").doc("cms_data").collection("products").doc(e.toString());let n=null;await s.runTransaction(async p=>{const d=await p.get(i);if(!d.exists)throw new Error("Produk tidak ditemukan di server");const c=JSON.parse(JSON.stringify(d.data()));r?a.variants.forEach((m,b)=>{const f=(c.variants||[]).findIndex(h=>h.name===m.name);f<0||(c.variants[f].hpp=parseFloat(document.getElementById("qp-var-hpp-"+b)?.value)||0,c.variants[f].price=parseFloat(document.getElementById("qp-var-price-"+b)?.value)||0,c.variants[f].priceNormal=parseFloat(document.getElementById("qp-var-normal-"+b)?.value)||0,c.variants[f].poin=parseFloat(document.getElementById("qp-var-poin-"+b)?.value)||0)}):(c.hpp=parseFloat(document.getElementById("qp-hpp")?.value)||0,c.price=parseFloat(document.getElementById("qp-price")?.value)||0,c.priceNormal=parseFloat(document.getElementById("qp-normal")?.value)||0,c.poin=parseFloat(document.getElementById("qp-poin")?.value)||0,c.wholesale=Le.filter(m=>parseFloat(m.minQty)>.01&&m.price>0)),p.set(i,c),n=c}),l.products[t]=n,await o([],{updateType:"stock_change",updatedProductIds:[e.toString()]}),closeQuickPriceModal(),window.rAdmItms?.("products"),x("Harga berhasil diperbarui!")}catch(s){x("Gagal simpan harga: "+(s.message||""))}finally{G(!1),C()}};window.updateWholMarginBadge=e=>{const t=document.getElementById(`whol-margin-badge-${e}`);if(!t)return;const a=parseFloat(document.getElementById("af-hpp")?.value)||0,r=ie[e];if(!r)return;const s=Rt(r.price,a);let o="";r.price>0&&a>0&&(s.isNegative?o=`<span class="inline-flex items-center gap-1 text-[10px] font-bold text-rose-500"><i class="fa-solid fa-triangle-exclamation"></i> Margin Negatif (-Rp ${Math.abs(s.marginRp).toLocaleString("id-ID")})</span>`:s.isThin?o=`<span class="inline-flex items-center gap-1 text-[10px] font-bold text-amber-500"><i class="fa-solid fa-circle-exclamation"></i> Margin Tipis (${s.marginPercent}%)</span>`:o=`<span class="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 dark:text-emerald-400"><i class="fa-solid fa-shield-halved"></i> Margin Sehat (+${s.marginPercent}%)</span>`),t.innerHTML=o};window.rWholB=()=>{const e=document.getElementById("wholesale-builder-container");if(!e)return;const t=parseFloat(document.getElementById("af-hpp")?.value)||0;let a=`<div class="space-y-4 mb-4">${ie.map((r,s)=>{const o=Rt(r.price,t);let i="";return r.price>0&&t>0&&(o.isNegative?i=`<span class="inline-flex items-center gap-1 text-[10px] font-bold text-rose-500"><i class="fa-solid fa-triangle-exclamation"></i> Margin Negatif (-Rp ${Math.abs(o.marginRp).toLocaleString("id-ID")})</span>`:o.isThin?i=`<span class="inline-flex items-center gap-1 text-[10px] font-bold text-amber-500"><i class="fa-solid fa-circle-exclamation"></i> Margin Tipis (${o.marginPercent}%)</span>`:i=`<span class="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 dark:text-emerald-400"><i class="fa-solid fa-shield-halved"></i> Margin Sehat (+${o.marginPercent}%)</span>`),`
        <div class="bg-slate-50 dark:bg-slate-900/50 p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm relative group transition-all duration-300 hover:border-[var(--color-primary)]/40">
            <button type="button" onclick="rmWhol(${s})" class="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-rose-50 border border-rose-200 text-rose-500 hover:bg-rose-500 hover:text-white dark:bg-rose-900/30 dark:border-rose-800 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 shadow-md z-10 cursor-pointer"><i class="fa-solid fa-trash text-xs"></i></button>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-7">
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Minimal Pembelian (Qty)</label>
                    <input autocomplete='off' type="number" step="0.01" placeholder="Cth: 12" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${r.minQty}" oninput="uWhol(${s},'minQty',this.value)" onchange="uWhol(${s},'minQty',this.value)">
                </div>
                <div>
                    <div class="flex items-center justify-between mb-2">
                        <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Harga Satuan Spesial (Rp)</label>
                        <div id="whol-margin-badge-${s}">${i}</div>
                    </div>
                    <input autocomplete='off' type="number" placeholder="Cth: 15000" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${r.price}" oninput="uWhol(${s},'price',this.value)" onchange="uWhol(${s},'price',this.value)">
                </div>
            </div>
        </div>`}).join("")}</div>
    <button type="button" onclick="addWhol()" class="w-full py-3.5 bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] text-[var(--color-primary)] font-bold rounded-xl text-xs sm:text-sm border-2 border-[rgba(var(--color-primary-rgb),0.25)] dark:border-[rgba(var(--color-primary-rgb),0.35)] border-dashed hover:bg-[rgba(var(--color-primary-rgb),0.12)] transition-all flex items-center justify-center gap-2 active:scale-95 shadow-2xs cursor-pointer"><i class="fa-solid fa-tags text-base"></i> Tambah Tingkatan Grosir Eceran</button>`;e.innerHTML=a};window.addWhol=()=>{ie.push({minQty:2,price:0}),ea(ie),window.rWholB()};window.rmWhol=e=>{ie.splice(e,1),ea(ie),window.rWholB()};window.uWhol=(e,t,a)=>{ie[e]&&(ie[e][t]=parseFloat(a)||0,t==="price"&&window.updateWholMarginBadge?.(e))};window.updateMultiUnitSummary=e=>{const t=Q[e];if(!t)return;const a=(document.getElementById("af-unit")?.value||"pcs").trim()||"pcs",r=parseFloat(document.getElementById("af-hpp")?.value)||0,s=t.name||t.unitName||"",o=parseFloat(t.multiplier!=null?t.multiplier:t.conversionRatio)||1,i=parseFloat(t.price)||0,n=t.hpp!=null&&parseFloat(t.hpp)>0?parseFloat(t.hpp):Math.round(r*o),p=Rt(i,n),d=document.getElementById(`mu-margin-badge-${e}`);if(d){let f="";i>0&&n>0&&(p.isNegative?f=`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-[10px] font-bold text-rose-600 dark:text-rose-400"><i class="fa-solid fa-triangle-exclamation"></i> Margin Negatif! Jual di bawah HPP modal (Rugi Rp ${Math.abs(p.marginRp).toLocaleString("id-ID")})</span>`:p.isThin?f=`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-[10px] font-bold text-amber-600 dark:text-amber-400"><i class="fa-solid fa-circle-exclamation"></i> Margin Tipis (${p.marginPercent}%)</span>`:f=`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-[10px] font-bold text-emerald-600 dark:text-emerald-400"><i class="fa-solid fa-shield-halved"></i> Margin Sehat (+${p.marginPercent}% / Untung Rp ${p.marginRp.toLocaleString("id-ID")})</span>`),d.innerHTML=f}const c=document.getElementById(`mu-header-title-${e}`);c&&(c.textContent=s||"Satuan Kemasan");const m=document.getElementById(`mu-header-ratio-${e}`);m&&(m.textContent=`(${o} ${a})`);const b=document.getElementById(`mu-footer-info-${e}`);if(b){const f=i>0?`<span class="text-slate-500 font-bold">Harga Ecer Ekuivalen: Rp ${Math.round(i/o).toLocaleString("id-ID")} / ${u(a)}</span>`:"";b.innerHTML=`
            <span class="flex items-center gap-1.5"><i class="fa-solid fa-calculator text-[var(--color-primary)]"></i> 1 ${u(s||"Kemasan")} = <b>${o} ${u(a)}</b> &bull; Modal HPP Ekuivalen: <b>Rp ${n.toLocaleString("id-ID")}</b></span>
            ${f}
        `}};window.rMultiUnitsB=()=>{const e=document.getElementById("multi-units-builder-container");if(!e)return;const t=(document.getElementById("af-unit")?.value||"pcs").trim()||"pcs",a=parseFloat(document.getElementById("af-hpp")?.value)||0;let r='<div class="space-y-4 mb-4">';!Q||Q.length===0?r+=`<div class="text-center py-6 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl bg-slate-50/50 dark:bg-slate-900/40">
            <i class="fa-solid fa-boxes-packing text-slate-300 dark:text-slate-600 text-3xl mb-2"></i>
            <p class="text-xs font-bold text-slate-500 dark:text-slate-400">Belum ada kemasan bertingkat.</p>
            <p class="text-[10px] text-slate-400 max-w-sm mx-auto mt-1">Gunakan fitur ini jika barang dijual dalam satuan kemasan (contoh: 1 Roll = 100 Meter, 1 Dus = 6 Keping, 1 Karton = 24 Pcs, 1 Sak = 50 Kg).</p>
        </div>`:r+=Q.map((s,o)=>{const i=s.name||s.unitName||"",n=parseFloat(s.multiplier!=null?s.multiplier:s.conversionRatio)||1,p=parseFloat(s.price)||0,d=s.barcode||"",c=s.hpp!=null&&parseFloat(s.hpp)>0?parseFloat(s.hpp):Math.round(a*n),m=Rt(p,c);let b="";return p>0&&c>0&&(m.isNegative?b=`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-[10px] font-bold text-rose-600 dark:text-rose-400"><i class="fa-solid fa-triangle-exclamation"></i> Margin Negatif! Jual di bawah HPP modal (Rugi Rp ${Math.abs(m.marginRp).toLocaleString("id-ID")})</span>`:m.isThin?b=`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-[10px] font-bold text-amber-600 dark:text-amber-400"><i class="fa-solid fa-circle-exclamation"></i> Margin Tipis (${m.marginPercent}%)</span>`:b=`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-[10px] font-bold text-emerald-600 dark:text-emerald-400"><i class="fa-solid fa-shield-halved"></i> Margin Sehat (+${m.marginPercent}% / Untung Rp ${m.marginRp.toLocaleString("id-ID")})</span>`),`
            <div class="bg-slate-50 dark:bg-slate-900/50 p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm relative group transition-all duration-300 hover:border-[var(--color-primary)]/40">
                <button type="button" onclick="rmMultiUnit(${o})" class="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-rose-50 border border-rose-200 text-rose-500 hover:bg-rose-500 hover:text-white dark:bg-rose-900/30 dark:border-rose-800 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 shadow-md z-10 cursor-pointer" title="Hapus Satuan Kemasan"><i class="fa-solid fa-trash text-xs"></i></button>
                
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-200/60 dark:border-slate-800">
                    <div class="flex items-center gap-2">
                        <span class="w-6 h-6 rounded-lg bg-[rgba(var(--color-primary-rgb),0.12)] text-[var(--color-primary)] font-black text-xs flex items-center justify-center">#${o+1}</span>
                        <span id="mu-header-title-${o}" class="text-xs font-bold text-slate-800 dark:text-white uppercase tracking-wider">${u(i)||"Satuan Kemasan"}</span>
                        <span id="mu-header-ratio-${o}" class="text-[11px] text-slate-500 font-medium">(${n} ${u(t)})</span>
                    </div>
                    <div id="mu-margin-badge-${o}">${b}</div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                        <label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-widest">Nama Kemasan</label>
                        <input autocomplete='off' type="text" placeholder="Cth: Roll / Dus / Sak" class="admin-input !text-xs !py-3 bg-white dark:bg-slate-800 shadow-sm font-bold" value="${u(i)}" oninput="uMultiUnit(${o},'name',this.value)" onchange="uMultiUnit(${o},'name',this.value)">
                    </div>
                    <div>
                        <label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-widest">Isi (per ${u(t)})</label>
                        <input autocomplete='off' type="number" step="0.01" min="0.01" placeholder="Cth: 100" class="admin-input !text-xs !py-3 bg-white dark:bg-slate-800 shadow-sm font-bold" value="${n}" oninput="uMultiUnit(${o},'multiplier',this.value)" onchange="uMultiUnit(${o},'multiplier',this.value)">
                    </div>
                    <div>
                        <label class="block text-[10px] font-bold text-[var(--color-primary)] mb-1.5 uppercase tracking-widest">Harga Jual Kemasan (Rp)</label>
                        <input autocomplete='off' type="number" min="0" placeholder="Cth: 680000" class="admin-input !text-xs !py-3 bg-white dark:bg-slate-800 shadow-sm font-bold text-[var(--color-primary)]" value="${p}" oninput="uMultiUnit(${o},'price',this.value)" onchange="uMultiUnit(${o},'price',this.value)">
                    </div>
                    <div>
                        <label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-widest">Barcode Kemasan (Opsional)</label>
                        <div class="relative flex items-center">
                            <input autocomplete='off' type="text" id="mu-barcode-${o}" placeholder="Scan dus..." class="admin-input !text-xs !py-3 bg-white dark:bg-slate-800 shadow-sm !pr-10" value="${u(d)}" oninput="uMultiUnit(${o},'barcode',this.value)" onchange="uMultiUnit(${o},'barcode',this.value)">
                            <button type="button" onclick="openCameraScanner('mu-barcode-${o}')" class="absolute right-1 w-8 h-8 flex items-center justify-center text-slate-400 hover:text-[var(--color-primary)] transition-all cursor-pointer" title="Scan Barcode Kemasan"><i class="fa-solid fa-qrcode text-base"></i></button>
                        </div>
                    </div>
                </div>

                <div id="mu-footer-info-${o}" class="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px] text-slate-400 font-medium">
                    <span class="flex items-center gap-1.5"><i class="fa-solid fa-calculator text-[var(--color-primary)]"></i> 1 ${u(i||"Kemasan")} = <b>${n} ${u(t)}</b> &bull; Modal HPP Ekuivalen: <b>Rp ${c.toLocaleString("id-ID")}</b></span>
                    ${p>0?`<span class="text-slate-500 font-bold">Harga Ecer Ekuivalen: Rp ${Math.round(p/n).toLocaleString("id-ID")} / ${u(t)}</span>`:""}
                </div>
            </div>`}).join(""),r+=`</div>
    <button type="button" onclick="addMultiUnit()" class="w-full py-3.5 bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] text-[var(--color-primary)] font-bold rounded-xl text-xs sm:text-sm border-2 border-[rgba(var(--color-primary-rgb),0.25)] dark:border-[rgba(var(--color-primary-rgb),0.35)] border-dashed hover:bg-[rgba(var(--color-primary-rgb),0.12)] transition-all flex items-center justify-center gap-2 active:scale-95 shadow-2xs cursor-pointer"><i class="fa-solid fa-box-open text-base"></i> Tambah Satuan Kemasan (Roll/Dus/Sak/Pack)</button>`,e.innerHTML=r};window.addMultiUnit=()=>{Q.push({name:"",multiplier:1,price:0,barcode:"",hpp:0}),vt(Q),window.rMultiUnitsB()};window.rmMultiUnit=e=>{Q.splice(e,1),vt(Q),window.rMultiUnitsB()};window.uMultiUnit=(e,t,a)=>{Q[e]&&(t==="multiplier"?Q[e].multiplier=parseFloat(a)||1:t==="price"?Q[e].price=parseFloat(a)||0:t==="hpp"?Q[e].hpp=parseFloat(a)||0:Q[e][t]=a,window.updateMultiUnitSummary?.(e))};let kr=null,H=[],Ct=0,E={paperSize:"thermal-40x30",showStoreName:!0,showPrice:!0,showUnit:!0,showSkuText:!0,showBorderGuide:!1,barcodeHeight:58};const hr=()=>{let e=k("modal-product-barcode-label");e?(e.className="fixed inset-0 z-[200] flex hidden items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/80 opacity-0 transition-opacity duration-300",document.body.appendChild(e)):(e=document.createElement("div"),e.id="modal-product-barcode-label",e.className="fixed inset-0 z-[200] flex hidden items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/80 opacity-0 transition-opacity duration-300",e.onclick=t=>{t.target===e&&window.closeProductBarcodeLabelModal?.()},e.innerHTML=`
            <div id="modal-product-barcode-label-box" class="modal-bottom-sheet relative flex max-h-[94dvh] sm:max-h-[90dvh] w-full max-w-5xl translate-y-full sm:translate-y-10 transform flex-col overflow-hidden rounded-t-[2rem] sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300">
                <div id="modal-product-barcode-label-content" class="flex-1 flex flex-col overflow-hidden min-h-0"></div>
            </div>
        `,document.body.appendChild(e))},wr=(e,t=null)=>{const a=k("modal-product-fifo");if(a&&!a.classList.contains("hidden")){const p=k("modal-product-fifo-box");p&&Y(a,p),typeof window.requestCloseModal=="function"&&window.requestCloseModal("productFifo",!0)}const r=k("modal-po-detail");if(r&&!r.classList.contains("hidden")){const p=k("modal-po-detail-box");p&&Y(r,p),typeof window.requestCloseModal=="function"&&window.requestCloseModal("purchaseDetail",!0)}hr();const s=(l.products||[]).find(p=>String(p.id)===String(e));if(!s){x("Produk tidak ditemukan!");return}if(kr=String(s.id),Ct=0,H=[],Array.isArray(s.variants)&&s.variants.length>0)s.variants.forEach((p,d)=>{const c=(p.barcode||p.sku||`${s.sku||s.id}-${d+1}`).trim(),m=parseFloat(p.stock)||0,b=t&&(t[c]!==void 0||t[d]!==void 0)?Math.max(0,parseInt(t[c]??t[d],10)):1;H.push({id:`${s.id}_var_${d}`,name:s.name||"Produk",variantName:p.name||p.title||`Varian ${d+1}`,sku:c,price:parseFloat(p.price!==void 0?p.price:s.price)||0,unit:p.unit||s.unit||"pcs",stock:m,qty:b,hex:p.hex||null})});else{const p=(s.sku||s.barcode||`SKU-${s.id}`).trim(),d=parseFloat(s.stock)||0,c=t&&t[p]!==void 0?Math.max(1,parseInt(t[p],10)):Math.min(Math.max(1,Math.round(d)||1),50);H.push({id:String(s.id),name:s.name||"Produk",variantName:"",sku:p,price:parseFloat(s.price)||0,unit:s.unit||"pcs",stock:d,qty:c,hex:s.hex||null})}kt();const i=k("modal-product-barcode-label"),n=k("modal-product-barcode-label-box");!i||!n||(document.body.appendChild(i),i.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("productBarcodeLabel"),pe(i,n))},vr=(e=!1)=>{const t=k("modal-product-barcode-label"),a=k("modal-product-barcode-label-box");!t||!a||(!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("productBarcodeLabel",!1,()=>Y(t,a)):Y(t,a))},kt=()=>{const e=k("modal-product-barcode-label-content");if(!e)return;const t=(l.products||[]).find(m=>String(m.id)===String(kr));if(!t)return;const a=l.store?.name||"TOKO PUTRI",r=H.reduce((m,b)=>m+(parseInt(b.qty,10)||0),0),s=H[Ct]||H[0]||{name:t.name,variantName:"",sku:t.sku||"SKU-001",price:t.price||0,unit:t.unit||"pcs"},o=E.paperSize==="a4-2x7"?14:30,i=Math.ceil(r/o)||0,n=rs(s.sku,{height:E.barcodeHeight,showText:E.showSkuText,fontSize:10}),p=m=>E.paperSize===m,d=m=>p(m)?"p-2.5 rounded-xl border text-left transition-all cursor-pointer shadow-2xs font-bold":"p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-slate-300 text-slate-700 dark:text-slate-300 text-left transition-all cursor-pointer",c=m=>p(m)?"background: rgba(var(--color-primary-rgb), 0.08); border-color: var(--color-primary); color: var(--color-primary);":"";e.innerHTML=`
        <!-- PULL INDICATOR UNTUK NATIVE MOBILE BOTTOM SHEET -->
        <div class="pull-indicator w-12 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 mx-auto mt-2.5 mb-1 sm:hidden shrink-0"></div>

        <!-- 1. HEADER MODAL (SOLID PINNED) -->
        <div class="shrink-0 px-5 sm:px-6 py-3.5 sm:py-4 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between z-10">
            <div class="flex items-center gap-3 min-w-0">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center text-white text-base shrink-0 border border-slate-900 dark:border-slate-700 shadow-[1px_1px_0px_#0f172a] dark:shadow-[1px_1px_0px_#000000]" style="background: var(--color-primary);">
                    <i class="fa-solid fa-barcode"></i>
                </div>
                <div class="min-w-0">
                    <div class="flex items-center gap-2 flex-wrap">
                        <h3 class="text-sm sm:text-base font-black text-slate-900 dark:text-white truncate">
                            Cetak Label Barcode &amp; Harga Barang
                        </h3>
                        <span class="px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider border shrink-0" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25);">
                            Code 128 • Universal
                        </span>
                    </div>
                    <p class="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                        ${u(t.name)} • ${H.length} Item / Varian Terdaftar
                    </p>
                </div>
            </div>
            <button onclick="window.closeProductBarcodeLabelModal()" class="w-8 h-8 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center text-sm transition-all cursor-pointer shrink-0">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </div>

        <!-- 2. BODY UTAMA (2-KOLOM RESPONSIVE INDEPENDENT SCROLL) -->
        <div class="flex-1 overflow-y-auto custom-scrollbar min-h-0 p-4 sm:p-6 pb-8 sm:pb-6 bg-slate-50/60 dark:bg-slate-950/40">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-5">
                
                <!-- KOLOM KIRI: KONFIGURASI VARIAN, KUANTITAS & KERTAS (7 DARI 12) -->
                <div class="lg:col-span-7 space-y-4">
                    
                    <!-- KARTU PRESET UKURAN PRINTER / KERTAS -->
                    <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs space-y-3">
                        <div class="flex items-center justify-between">
                            <span class="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-2">
                                <i class="fa-solid fa-print" style="color: var(--color-primary)"></i>
                                <span>Pilih Format Printer &amp; Ukuran Label</span>
                            </span>
                            <span class="text-[10px] font-bold text-slate-400">Universal Support</span>
                        </div>

                        <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            <button type="button" onclick="window.setBarcodeLabelPaper('thermal-40x30')" class="${d("thermal-40x30")}" style="${c("thermal-40x30")}">
                                <div class="flex items-center justify-between mb-1">
                                    <span class="text-[11px] font-black">Thermal 40x30</span>
                                    <span class="text-[9px] px-1 py-0.5 rounded font-bold" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">Populer</span>
                                </div>
                                <span class="text-[10px] text-slate-400 block font-normal">Stiker Rak &amp; Barang</span>
                            </button>

                            <button type="button" onclick="window.setBarcodeLabelPaper('thermal-50x30')" class="${d("thermal-50x30")}" style="${c("thermal-50x30")}">
                                <span class="text-[11px] font-black block mb-1">Thermal 50x30</span>
                                <span class="text-[10px] text-slate-400 block font-normal">Stiker Ekstra Lega</span>
                            </button>

                            <button type="button" onclick="window.setBarcodeLabelPaper('thermal-58mm')" class="${d("thermal-58mm")}" style="${c("thermal-58mm")}">
                                <span class="text-[11px] font-black block mb-1">Roll 58 mm</span>
                                <span class="text-[10px] text-slate-400 block font-normal">Continuous Stiker</span>
                            </button>

                            <button type="button" onclick="window.setBarcodeLabelPaper('thermal-80mm')" class="${d("thermal-80mm")}" style="${c("thermal-80mm")}">
                                <span class="text-[11px] font-black block mb-1">Roll 80 mm</span>
                                <span class="text-[10px] text-slate-400 block font-normal">Label POS Lebar</span>
                            </button>

                            <button type="button" onclick="window.setBarcodeLabelPaper('a4-3x10')" class="${d("a4-3x10")}" style="${c("a4-3x10")}">
                                <div class="flex items-center justify-between mb-1">
                                    <span class="text-[11px] font-black">Kertas A4 (3x10)</span>
                                    <span class="text-[9px] px-1 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 font-bold">30 Pcs</span>
                                </div>
                                <span class="text-[10px] text-slate-400 block font-normal">Printer Biasa / Inkjet</span>
                            </button>

                            <button type="button" onclick="window.setBarcodeLabelPaper('a4-2x7')" class="${d("a4-2x7")}" style="${c("a4-2x7")}">
                                <div class="flex items-center justify-between mb-1">
                                    <span class="text-[11px] font-black">Kertas A4 (2x7)</span>
                                    <span class="text-[9px] px-1 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 font-bold">14 Pcs</span>
                                </div>
                                <span class="text-[10px] text-slate-400 block font-normal">Label Besar A4</span>
                            </button>
                        </div>
                    </div>

                    <!-- DAFTAR ITEM / VARIAN & JUMLAH CETAK -->
                    <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs space-y-3">
                        <div class="flex items-center justify-between flex-wrap gap-2">
                            <span class="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-2">
                                <i class="fa-solid fa-list-check" style="color: var(--color-primary)"></i>
                                <span>Tentukan Jumlah Label per Varian</span>
                            </span>
                            <div class="flex items-center gap-1.5 text-[11px]">
                                <button type="button" onclick="window.setAllBarcodeLabelQty(1)" class="px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold transition-all cursor-pointer">
                                    Set 1 Pcs
                                </button>
                                <button type="button" onclick="window.setAllBarcodeLabelQty('stock')" class="px-2 py-0.5 rounded-lg font-bold border transition-all cursor-pointer" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25);">
                                    Sesuai Stok
                                </button>
                                <button type="button" onclick="window.setAllBarcodeLabelQty(0)" class="px-2 py-0.5 rounded-lg bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/50 text-rose-600 font-bold transition-all cursor-pointer">
                                    Reset (0)
                                </button>
                            </div>
                        </div>

                        <!-- LIST KARTU VARIAN -->
                        <div class="space-y-2.5 max-h-[340px] overflow-y-auto custom-scrollbar pr-1">
                            ${H.map((m,b)=>{const f=Ct===b;return`
                                    <div class="p-3 sm:p-3.5 rounded-xl border transition-all ${f?"shadow-2xs":"border-slate-200/90 dark:border-slate-700/80 bg-slate-50/40 dark:bg-slate-800/40 hover:border-slate-300"} flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3" style="${f?"background: rgba(var(--color-primary-rgb), 0.05); border: 1.5px solid var(--color-primary);":""}">
                                        <div class="flex items-start sm:items-center gap-2.5 min-w-0 cursor-pointer flex-1" onclick="window.selectBarcodePreviewIndex(${b})">
                                            ${m.hex?`
                                                <div class="w-5 h-5 rounded-full border border-slate-300 shadow-2xs shrink-0 mt-0.5 sm:mt-0" style="background-color: ${u(m.hex)}"></div>
                                            `:`
                                                <div class="w-6 h-6 rounded-lg bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-[10px] text-slate-500 font-bold shrink-0 mt-0.5 sm:mt-0">
                                                    #${b+1}
                                                </div>
                                            `}
                                            <div class="min-w-0 flex-1">
                                                <div class="flex items-center gap-1.5 flex-wrap">
                                                    <span class="text-xs sm:text-sm font-black text-slate-800 dark:text-white line-clamp-1 sm:line-clamp-2">
                                                        ${u(m.variantName||m.name)}
                                                    </span>
                                                    ${f?'<span class="px-1.5 py-0.5 rounded text-[8.5px] font-black uppercase text-white shadow-2xs shrink-0" style="background: var(--color-primary);">Preview</span>':""}
                                                </div>
                                                <div class="flex items-center gap-1.5 sm:gap-2 text-[10.5px] text-slate-400 font-medium flex-wrap mt-0.5">
                                                    <span class="font-mono font-bold text-slate-700 dark:text-slate-200 whitespace-nowrap bg-slate-100 dark:bg-slate-700/60 px-1.5 py-0.5 rounded">${u(m.sku)}</span>
                                                    <span class="text-slate-300 dark:text-slate-600">•</span>
                                                    <span class="font-semibold text-slate-700 dark:text-slate-200 whitespace-nowrap">${g(m.price)}</span>
                                                    <span class="text-slate-300 dark:text-slate-600">•</span>
                                                    <span class="whitespace-nowrap">Stok: <b class="text-slate-800 dark:text-slate-100 font-bold">${m.stock}</b></span>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- STEPPER KUANTITAS ERGONOMIS SENTUH -->
                                        <div class="flex items-center justify-between sm:justify-end gap-2 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100 dark:border-slate-800/80 shrink-0">
                                            <span class="text-[11px] font-bold text-slate-500 dark:text-slate-400 sm:hidden">Jumlah Label:</span>
                                            <div class="flex items-center gap-1.5">
                                                <button type="button" onclick="window.adjustBarcodeLabelQty(${b}, -1)" class="btn-native-icon w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 flex items-center justify-center text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 transition-all cursor-pointer active:scale-95 shadow-2xs" title="Kurangi 1">
                                                    <i class="fa-solid fa-minus text-[11px]"></i>
                                                </button>
                                                <input type="number" id="barcode-qty-input-${b}" min="0" max="999" value="${m.qty}" oninput="window.setBarcodeLabelQtyDirect(${b}, this.value, true)" onchange="window.setBarcodeLabelQtyDirect(${b}, this.value, false)" class="w-12 sm:w-14 h-8 sm:h-9 text-center font-mono font-black text-sm border border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)] shadow-2xs">
                                                <button type="button" onclick="window.adjustBarcodeLabelQty(${b}, 1)" class="btn-native-icon w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 flex items-center justify-center text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 transition-all cursor-pointer active:scale-95 shadow-2xs" title="Tambah 1">
                                                    <i class="fa-solid fa-plus text-[11px]"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                `}).join("")}
                        </div>
                    </div>

                    <!-- TOGGLE OPSI KONTEN LABEL -->
                    <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs space-y-2.5">
                        <span class="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-2">
                            <i class="fa-solid fa-sliders" style="color: var(--color-primary)"></i>
                            <span>Opsi Tampilan Informasi Stiker</span>
                        </span>
                        
                        <div class="grid grid-cols-2 gap-2.5 text-xs font-bold text-slate-700 dark:text-slate-300">
                            <label class="flex items-center gap-2 cursor-pointer select-none">
                                <input type="checkbox" ${E.showStoreName?"checked":""} onchange="window.toggleBarcodeOption('showStoreName', this.checked)" class="w-4 h-4 rounded accent-[var(--color-primary)] cursor-pointer">
                                <span>Kop Nama Toko</span>
                            </label>

                            <label class="flex items-center gap-2 cursor-pointer select-none">
                                <input type="checkbox" ${E.showPrice?"checked":""} onchange="window.toggleBarcodeOption('showPrice', this.checked)" class="w-4 h-4 rounded accent-[var(--color-primary)] cursor-pointer">
                                <span>Harga Jual Produk</span>
                            </label>

                            <label class="flex items-center gap-2 cursor-pointer select-none">
                                <input type="checkbox" ${E.showUnit?"checked":""} onchange="window.toggleBarcodeOption('showUnit', this.checked)" class="w-4 h-4 rounded accent-[var(--color-primary)] cursor-pointer">
                                <span>Satuan Barang (/ pcs)</span>
                            </label>

                            <label class="flex items-center gap-2 cursor-pointer select-none">
                                <input type="checkbox" ${E.showSkuText?"checked":""} onchange="window.toggleBarcodeOption('showSkuText', this.checked)" class="w-4 h-4 rounded accent-[var(--color-primary)] cursor-pointer">
                                <span>Teks SKU di Bawah Barcode</span>
                            </label>

                            <label class="flex items-center gap-2 cursor-pointer select-none col-span-2 pt-1 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500">
                                <input type="checkbox" ${E.showBorderGuide?"checked":""} onchange="window.toggleBarcodeOption('showBorderGuide', this.checked)" class="w-4 h-4 rounded accent-[var(--color-primary)] cursor-pointer">
                                <span>Garis Batas Potong (Gunting) untuk Kertas Stiker Polos A4</span>
                            </label>
                        </div>
                    </div>
                </div>

                <!-- KOLOM KANAN: LIVE PREVIEW SKALA NYATA & RINGKASAN (5 DARI 12) -->
                <div class="lg:col-span-5 space-y-4">
                    
                    <!-- KOTAK PRATINJAU INTERAKTIF STIKER -->
                    <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs space-y-4">
                        <div class="flex items-center justify-between">
                            <span class="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-2">
                                <i class="fa-solid fa-eye" style="color: var(--color-primary)"></i>
                                <span>Pratinjau Fisik Stiker Label</span>
                            </span>
                            <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold">
                                Skala 1:1
                            </span>
                        </div>

                        <!-- WADAH SIMULASI STIKER FISIK -->
                        <div class="p-6 bg-slate-100 dark:bg-slate-950 rounded-2xl flex items-center justify-center border border-slate-200/60 dark:border-slate-800 min-h-[220px]">
                            <div class="bg-white text-slate-900 rounded-lg shadow-xl p-3 flex flex-col justify-between items-center text-center transition-all ${E.paperSize==="thermal-50x30"?"w-[230px] h-[145px]":"w-[210px] h-[155px]"} border ${E.showBorderGuide?"border-dashed border-slate-400":"border-slate-200"}">
                                
                                <!-- KOP TOKO -->
                                ${E.showStoreName?`
                                    <div class="text-[9px] font-black tracking-widest uppercase text-slate-700 border-b border-slate-200 w-full pb-0.5 truncate">
                                        ${u(a)}
                                    </div>
                                `:""}

                                <!-- NAMA BARANG & VARIAN -->
                                <div class="w-full px-1 pt-0.5">
                                    <p class="text-[10px] font-black leading-tight truncate text-slate-900" title="${u(s.name)}">
                                        ${u(s.name)}
                                    </p>
                                    ${s.variantName?`
                                        <p class="text-[9px] font-bold leading-tight truncate mt-0.5" style="color: var(--color-primary);">
                                            [${u(s.variantName)}]
                                        </p>
                                    `:""}
                                </div>

                                <!-- BARCODE VEKTOR CODE 128 -->
                                <div class="w-full my-auto px-1 flex flex-col items-center justify-center">
                                    <div class="w-full max-w-[195px]">
                                        ${n}
                                    </div>
                                </div>

                                <!-- HARGA JUAL -->
                                ${E.showPrice?`
                                    <div class="w-full pt-0.5 border-t border-slate-200 flex items-center justify-center gap-1 font-mono">
                                        <span class="text-xs font-black text-slate-950 tracking-tight">
                                            ${g(s.price)}
                                        </span>
                                        ${E.showUnit?`
                                            <span class="text-[9px] font-bold text-slate-500">/${u(s.unit||"pcs")}</span>
                                        `:""}
                                    </div>
                                `:""}
                            </div>
                        </div>

                        <!-- RINGKASAN PRODUKSI CETAK -->
                        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/90 dark:border-slate-700/80 space-y-2">
                            <div class="flex items-center justify-between text-xs font-bold text-slate-600 dark:text-slate-300">
                                <span>Total Stiker Dicetak:</span>
                                <span id="barcode-label-total-count" class="text-base font-black font-mono" style="color: var(--color-primary);">${r} Lembar</span>
                            </div>

                            ${E.paperSize.startsWith("a4")?`
                                <div class="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400 pt-1.5 border-t border-slate-200 dark:border-slate-700">
                                    <span>Estimasi Kertas A4:</span>
                                    <span id="barcode-label-a4-estimate" class="font-black text-slate-800 dark:text-white font-mono">${i} Lembar (${o} label/lembar)</span>
                                </div>
                            `:`
                                <div class="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400 pt-1.5 border-t border-slate-200 dark:border-slate-700">
                                    <span>Tipe Media Cetak:</span>
                                    <span class="font-black text-slate-800 dark:text-white">Direct Thermal Sticker Roll</span>
                                </div>
                            `}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 3. FOOTER MODAL (SOLID PINNED / MULTI-ACTION) -->
        <div class="shrink-0 px-4 sm:px-6 py-3 sm:py-4 pb-[max(0.875rem,env(safe-area-inset-bottom))] border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-3 z-10">
            <div class="text-xs text-slate-500 dark:text-slate-400 font-bold hidden sm:block">
                <span>Siap dicetak ke printer label thermal USB/Bluetooth atau printer A4 biasa.</span>
            </div>

            <div class="flex items-center gap-2 w-full sm:w-auto">
                <button type="button" onclick="window.closeProductBarcodeLabelModal()" class="h-11 sm:h-12 px-3 sm:px-4 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer active:scale-95 shrink-0 flex items-center justify-center">
                    Batal
                </button>

                <button type="button" onclick="window.printBarcodeLabelsThermalRawbt()" class="flex-1 sm:flex-initial h-11 sm:h-12 px-3 sm:px-4 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs transition-all active:scale-95 shadow-xs flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer whitespace-nowrap" title="Cetak via Thermal Bluetooth / RawBT">
                    <i class="fa-solid fa-satellite-dish text-xs"></i>
                    <span>RawBT<span class="hidden sm:inline"> / Bluetooth</span></span>
                </button>

                <button type="button" onclick="window.printBarcodeLabelsBrowser()" class="btn-native-action neo-btn flex-1 sm:flex-initial h-11 sm:h-12 px-3.5 sm:px-6 rounded-xl text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer whitespace-nowrap" style="background: var(--color-primary);">
                    <i class="fa-solid fa-print text-xs"></i>
                    <span id="barcode-label-print-btn-text">Cetak<span class="hidden sm:inline"> Sekarang</span> (${r})</span>
                </button>
            </div>
        </div>
    `},yr=e=>{E.paperSize=e,kt()},Sr=(e,t)=>{E[e]=!!t,kt()},Pr=e=>{e>=0&&e<H.length&&(Ct=e,kt())},ht=()=>{const e=H.reduce((i,n)=>i+(parseInt(n.qty,10)||0),0),t=E.paperSize==="a4-2x7"?14:30,a=Math.ceil(e/t)||0,r=k("barcode-label-total-count");r&&(r.textContent=`${e} Lembar`);const s=k("barcode-label-a4-estimate");s&&(s.textContent=`${a} Lembar (${t} label/lembar)`);const o=k("barcode-label-print-btn-text");o&&(o.innerHTML=`Cetak<span class="hidden sm:inline"> Sekarang</span> (${e})`)},Ar=(e,t)=>{if(H[e]){const a=parseInt(H[e].qty,10)||0,r=Math.max(0,a+t);H[e].qty=r;const s=k(`barcode-qty-input-${e}`);s&&(s.value=r),ht()}},Tr=(e,t,a=!1)=>{if(H[e]){const r=parseInt(t,10);if(H[e].qty=isNaN(r)?0:Math.max(0,r),!a){const s=k(`barcode-qty-input-${e}`);s&&(typeof document>"u"||document.activeElement!==s)&&(s.value=H[e].qty)}ht()}},$r=e=>{H.forEach((t,a)=>{e==="stock"?t.qty=Math.max(1,Math.round(parseFloat(t.stock)||1)):typeof e=="number"&&(t.qty=Math.max(0,e));const r=k(`barcode-qty-input-${a}`);r&&(r.value=t.qty)}),ht()},Ir=()=>{if(H.reduce((c,m)=>c+(parseInt(m.qty,10)||0),0)<=0){x("Tentukan jumlah label yang akan dicetak terlebih dahulu!");return}const t=l.store?.name||"TOKO PUTRI";E.paperSize.startsWith("a4"),E.paperSize;const a=E.paperSize==="thermal-58mm",r=E.paperSize==="thermal-80mm",s=[];H.forEach(c=>{const m=parseInt(c.qty,10)||0;for(let b=0;b<m;b++)s.push(c)});const o=s.map(c=>{const m=rs(c.sku,{height:E.barcodeHeight,showText:E.showSkuText,fontSize:10});return`
            <div class="label-item ${E.showBorderGuide?"with-border":""}">
                ${E.showStoreName?`
                    <div class="lbl-store">${u(t)}</div>
                `:""}
                <div class="lbl-info">
                    <div class="lbl-name">${u(c.name)}</div>
                    ${c.variantName?`<div class="lbl-variant">[${u(c.variantName)}]</div>`:""}
                </div>
                <div class="lbl-barcode">${m}</div>
                ${E.showPrice?`
                    <div class="lbl-price">
                        ${g(c.price)}${E.showUnit?`<span class="lbl-unit">/${u(c.unit||"pcs")}</span>`:""}
                    </div>
                `:""}
            </div>
        `}).join("");let i="",n="thermal-container";E.paperSize==="thermal-40x30"?i=`
            @page { size: 40mm 30mm; margin: 0; }
            body { margin: 0; padding: 0; }
            .label-item {
                width: 40mm; height: 30mm;
                page-break-after: always; break-after: page;
                box-sizing: border-box; padding: 1.5mm 2mm;
                display: flex; flex-direction: column; justify-content: space-between; align-items: center; text-align: center;
                overflow: hidden;
            }
        `:E.paperSize==="thermal-50x30"?i=`
            @page { size: 50mm 30mm; margin: 0; }
            body { margin: 0; padding: 0; }
            .label-item {
                width: 50mm; height: 30mm;
                page-break-after: always; break-after: page;
                box-sizing: border-box; padding: 1.5mm 2.5mm;
                display: flex; flex-direction: column; justify-content: space-between; align-items: center; text-align: center;
                overflow: hidden;
            }
        `:a?i=`
            @page { size: 58mm auto; margin: 0; }
            body { margin: 0; padding: 0; width: 58mm; }
            .label-item {
                width: 54mm; margin: 0 auto 3mm;
                box-sizing: border-box; padding: 2mm 2mm;
                display: flex; flex-direction: column; justify-content: space-between; align-items: center; text-align: center;
                border-bottom: 1px dashed #bbb;
            }
        `:r?i=`
            @page { size: 80mm auto; margin: 0; }
            body { margin: 0; padding: 0; width: 80mm; }
            .label-item {
                width: 76mm; margin: 0 auto 3mm;
                box-sizing: border-box; padding: 2mm 3mm;
                display: flex; flex-direction: column; justify-content: space-between; align-items: center; text-align: center;
                border-bottom: 1px dashed #bbb;
            }
        `:E.paperSize==="a4-3x10"?(n="a4-grid-3x10",i=`
            @page { size: A4 portrait; margin: 8mm 6mm; }
            body { margin: 0; padding: 0; }
            .a4-grid-3x10 {
                display: grid; grid-template-columns: repeat(3, 1fr); gap: 2.5mm 3.5mm;
            }
            .label-item {
                height: 26.5mm; box-sizing: border-box; padding: 1.5mm 2mm;
                page-break-inside: avoid; break-inside: avoid;
                display: flex; flex-direction: column; justify-content: space-between; align-items: center; text-align: center;
                overflow: hidden;
            }
        `):E.paperSize==="a4-2x7"&&(n="a4-grid-2x7",i=`
            @page { size: A4 portrait; margin: 10mm 8mm; }
            body { margin: 0; padding: 0; }
            .a4-grid-2x7 {
                display: grid; grid-template-columns: repeat(2, 1fr); gap: 3.5mm 4.5mm;
            }
            .label-item {
                height: 38mm; box-sizing: border-box; padding: 2mm 3mm;
                page-break-inside: avoid; break-inside: avoid;
                display: flex; flex-direction: column; justify-content: space-between; align-items: center; text-align: center;
                overflow: hidden;
            }
        `);const p=`<!DOCTYPE html>
    <html lang="id">
    <head>
        <meta charset="UTF-8">
        <title>Cetak Label Barcode - ${u(t)}</title>
        <style>
            * { box-sizing: border-box; }
            html, body {
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
                background: #ffffff; color: #000000;
                -webkit-print-color-adjust: exact; print-color-adjust: exact;
            }
            .with-border { border: 1px dashed #888888; }
            .lbl-store {
                font-size: 8px; font-weight: 900; letter-spacing: 1px; text-transform: uppercase;
                border-bottom: 0.5px solid #000; width: 100%; padding-bottom: 1px; margin-bottom: 1px;
                white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
            }
            .lbl-info { width: 100%; margin: 0.5mm 0; }
            .lbl-name {
                font-size: 9px; font-weight: 800; line-height: 1.1;
                white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
            }
            .lbl-variant {
                font-size: 8px; font-weight: 700; line-height: 1.1; margin-top: 0.5px;
                white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
            }
            .lbl-barcode {
                width: 100%; max-width: 98%; margin: auto 0;
                display: flex; align-items: center; justify-content: center;
            }
            .lbl-barcode svg {
                width: 100%; height: auto; max-height: 17mm;
                display: block; margin: 0 auto;
                shape-rendering: crispEdges;
            }
            .lbl-price {
                font-family: 'Courier New', Courier, monospace; font-size: 11px; font-weight: 900;
                border-top: 0.5px solid #000; width: 100%; padding-top: 0.8px; margin-top: 0.5px;
            }
            .lbl-unit { font-size: 8px; font-weight: bold; margin-left: 2px; }
            ${i}
        </style>
    </head>
    <body onload="setTimeout(() => { window.print(); }, 450)">
        <div class="${n}">
            ${o}
        </div>
    </body>
    </html>`;let d=k("barcode-print-isolated-iframe");d||(d=document.createElement("iframe"),d.id="barcode-print-isolated-iframe",d.style.position="fixed",d.style.right="0",d.style.bottom="0",d.style.width="0",d.style.height="0",d.style.border="0",d.style.opacity="0",d.style.pointerEvents="none",document.body.appendChild(d));try{const c=d.contentWindow.document;c.open(),c.write(p),c.close()}catch{const m=window.open("","_blank");m?(m.document.open(),m.document.write(p),m.document.close()):x("Izinkan pop-up peramban untuk mencetak label.")}},Mr=async()=>{const e=H.reduce((i,n)=>i+(parseInt(n.qty,10)||0),0);if(e<=0){x("Tentukan jumlah label yang akan dicetak terlebih dahulu!");return}let t;try{t=await J(()=>import("./module-print-BpWwhM5r.js").then(i=>i.by),__vite__mapDeps([1,2,3]),import.meta.url)}catch{x("Modul thermal RawBT tidak dapat dimuat.");return}const{ThermalReceiptBuilder:a,printViaRawBT:r}=t,s=l.store?.name||"TOKO PUTRI",o=new a(58);H.forEach(i=>{const n=parseInt(i.qty,10)||0;for(let p=0;p<n;p++)o.align("center"),E.showStoreName&&o.line(s,{bold:!0,size:"normal"}),o.line(i.name,{bold:!0,size:"normal"}),i.variantName&&o.line(`[${i.variantName}]`,{size:"normal"}),o.barcode(i.sku,"CODE128",55),E.showPrice&&o.line(g(i.price)+(E.showUnit?`/${i.unit||"pcs"}`:""),{bold:!0,size:"large"}),o.feed(2),o.cut()});try{await r(o),x(`Perintah cetak ${e} label dikirim ke RawBT!`)}catch(i){x("Gagal mengirim ke RawBT: "+i.message)}};window.openProductBarcodeLabelModal=wr;window.closeProductBarcodeLabelModal=vr;window.setBarcodeLabelPaper=yr;window.toggleBarcodeOption=Sr;window.selectBarcodePreviewIndex=Pr;window.adjustBarcodeLabelQty=Ar;window.setBarcodeLabelQtyDirect=Tr;window.setAllBarcodeLabelQty=$r;window.updateBarcodeLabelQtySummaryOnly=ht;window.printBarcodeLabelsBrowser=Ir;window.printBarcodeLabelsThermalRawbt=Mr;let Cr="master",Ge="",Tt="ALL";const Xt=[{id:"preset-cat-nodrop",name:"Cat Pelapis Anti Bocor No Drop",brand:"Avian Brands",category:"Cat & Pelapis",subCategory:"Waterproofing",unit:"Pail",tag:"Best Seller",price:65e3,priceNormal:72e3,hpp:52e3,desc:"Cat pelapis anti bocor nomor 1 di Indonesia dengan formula elastis kedap air serbaguna. Tahan cuaca ekstrem, anti jamur, dan menutup retak rambut pada dinding eksterior, atap seng/asbes, dak beton, dan talang air.",img:"https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&auto=format&fit=crop&q=80",specTable:[{label:"Daya Sebar",value:"1 - 2 m²/kg (2 lapis)"},{label:"Kering Sentuh",value:"30 Menit"},{label:"Kering Sempurna",value:"24 Jam"},{label:"Aplikasi",value:"Kuas, Rol Cat, Airless Spray"}],variants:[{name:"1 Kg - Abu-Abu (002)",price:65e3,priceNormal:72e3,hpp:52e3,unit:"Kaleng",colorCode:"#808080",sku:"ND-1K-002",stock:10,storeStock:10,warehouseStock:0,isActive:!0},{name:"1 Kg - Putih (009)",price:65e3,priceNormal:72e3,hpp:52e3,unit:"Kaleng",colorCode:"#FFFFFF",sku:"ND-1K-009",stock:10,storeStock:10,warehouseStock:0,isActive:!0},{name:"1 Kg - Transparan (001)",price:68e3,priceNormal:75e3,hpp:54e3,unit:"Kaleng",colorCode:"#F0F8FF",sku:"ND-1K-001",stock:6,storeStock:6,warehouseStock:0,isActive:!0},{name:"4 Kg - Abu-Abu (002)",price:235e3,priceNormal:25e4,hpp:195e3,unit:"Galon",colorCode:"#808080",sku:"ND-4K-002",stock:8,storeStock:8,warehouseStock:0,isActive:!0},{name:"4 Kg - Putih (009)",price:235e3,priceNormal:25e4,hpp:195e3,unit:"Galon",colorCode:"#FFFFFF",sku:"ND-4K-009",stock:8,storeStock:8,warehouseStock:0,isActive:!0},{name:"4 Kg - Hitam (003)",price:235e3,priceNormal:25e4,hpp:195e3,unit:"Galon",colorCode:"#1A1A1A",sku:"ND-4K-003",stock:4,storeStock:4,warehouseStock:0,isActive:!0},{name:"4 Kg - Coklat (006)",price:235e3,priceNormal:25e4,hpp:195e3,unit:"Galon",colorCode:"#8B4513",sku:"ND-4K-006",stock:4,storeStock:4,warehouseStock:0,isActive:!0},{name:"20 Kg (Pail) - Abu-Abu (002)",price:105e4,priceNormal:115e4,hpp:91e4,unit:"Pail",colorCode:"#808080",sku:"ND-20K-002",stock:2,storeStock:2,warehouseStock:0,isActive:!0},{name:"20 Kg (Pail) - Putih (009)",price:105e4,priceNormal:115e4,hpp:91e4,unit:"Pail",colorCode:"#FFFFFF",sku:"ND-20K-009",stock:2,storeStock:2,warehouseStock:0,isActive:!0}]},{id:"preset-cat-catylac",name:"Cat Tembok Dulux Catylac Interior",brand:"Dulux",category:"Cat & Pelapis",subCategory:"Cat Tembok",unit:"Pail",tag:"Interior",price:155e3,priceNormal:17e4,hpp:128e3,desc:"Cat tembok interior berkualitas tinggi dengan teknologi Chroma Brite. Menghasilkan warna cerah menakjubkan, daya tutup maksimal, serta bau yang sangat rendah dan ramah lingkungan.",img:"https://images.unsplash.com/photo-1562184552-997c461abbe6?w=600&auto=format&fit=crop&q=80",specTable:[{label:"Daya Sebar",value:"8 - 10 m²/kg"},{label:"Hasil Akhir",value:"Matt / Doff Halus"},{label:"Pelarut",value:"Air Bersih (10% - 20%)"}],variants:[{name:"5 Kg - Putih Salju (1501)",price:155e3,priceNormal:17e4,hpp:128e3,unit:"Galon",colorCode:"#F8F9FA",sku:"DX-CAT-5K-1501",stock:10,storeStock:10,warehouseStock:0,isActive:!0},{name:"5 Kg - Barley White (44522)",price:155e3,priceNormal:17e4,hpp:128e3,unit:"Galon",colorCode:"#FFF8DC",sku:"DX-CAT-5K-44522",stock:6,storeStock:6,warehouseStock:0,isActive:!0},{name:"5 Kg - Light Cream (44544)",price:155e3,priceNormal:17e4,hpp:128e3,unit:"Galon",colorCode:"#FFFDD0",sku:"DX-CAT-5K-44544",stock:6,storeStock:6,warehouseStock:0,isActive:!0},{name:"25 Kg - Putih Salju (1501)",price:71e4,priceNormal:76e4,hpp:615e3,unit:"Pail",colorCode:"#F8F9FA",sku:"DX-CAT-25K-1501",stock:3,storeStock:3,warehouseStock:0,isActive:!0}]},{id:"preset-cat-avian-gloss",name:"Cat Kayu & Besi Avian High Gloss Enamel",brand:"Avian Brands",category:"Cat & Pelapis",subCategory:"Cat Minyak",unit:"Kaleng",tag:"Gloss",price:72e3,priceNormal:78e3,hpp:59e3,desc:"Cat kayu dan besi berkilau tinggi tahan cuaca dan jamur. Cepat kering dan daya lekat sangat kuat untuk pagar besi, pintu kayu, kusen, dan perabotan.",img:"https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&auto=format&fit=crop&q=80",specTable:[{label:"Daya Sebar",value:"10 - 12 m²/liter"},{label:"Pelarut",value:"Thinner B / Thinner Enamel"}],variants:[{name:"0.9 Liter - Super White (SW)",price:72e3,priceNormal:78e3,hpp:59e3,unit:"Kaleng",colorCode:"#FFFFFF",sku:"AV-09L-SW",stock:12,storeStock:12,warehouseStock:0,isActive:!0},{name:"0.9 Liter - Super Black (SB)",price:72e3,priceNormal:78e3,hpp:59e3,unit:"Kaleng",colorCode:"#000000",sku:"AV-09L-SB",stock:12,storeStock:12,warehouseStock:0,isActive:!0},{name:"0.9 Liter - Vermillion Red (VR)",price:74e3,priceNormal:8e4,hpp:61e3,unit:"Kaleng",colorCode:"#DC2626",sku:"AV-09L-VR",stock:6,storeStock:6,warehouseStock:0,isActive:!0},{name:"0.9 Liter - Emerald Green (EG)",price:74e3,priceNormal:8e4,hpp:61e3,unit:"Kaleng",colorCode:"#059669",sku:"AV-09L-EG",stock:6,storeStock:6,warehouseStock:0,isActive:!0},{name:"0.9 Liter - Royal Blue (RB)",price:74e3,priceNormal:8e4,hpp:61e3,unit:"Kaleng",colorCode:"#2563EB",sku:"AV-09L-RB",stock:6,storeStock:6,warehouseStock:0,isActive:!0}]},{id:"preset-semen-gresik",name:"Semen Portland Composite Gresik (PCC)",brand:"Semen Gresik",category:"Semen & Mortar",subCategory:"Semen Sak",unit:"Sak",tag:"SNI",price:58e3,priceNormal:62e3,hpp:51e3,desc:"Semen PCC berkualitas SNI kuat tekan tinggi. Sangat cocok untuk struktur beton, pasangan bata, plesteran dinding, dan acian halus kedap air.",img:"https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",specTable:[{label:"Standar Mutu",value:"SNI 7064:2014"},{label:"Waktu Ikat Awal",value:"120 - 180 Menit"}],variants:[{name:"40 Kg (Sak Standar)",price:58e3,priceNormal:62e3,hpp:51e3,unit:"Sak",sku:"SG-PCC-40K",stock:100,storeStock:30,warehouseStock:70,isActive:!0},{name:"50 Kg (Sak Jumbo)",price:71e3,priceNormal:75e3,hpp:63e3,unit:"Sak",sku:"SG-PCC-50K",stock:50,storeStock:15,warehouseStock:35,isActive:!0}]},{id:"preset-semen-tigaroda",name:"Semen Tiga Roda PCC",brand:"Tiga Roda",category:"Semen & Mortar",subCategory:"Semen Sak",unit:"Sak",tag:"SNI",price:59e3,priceNormal:63e3,hpp:52e3,desc:"Semen Portland Composite berkualitas tinggi dari Indocement. Daya rekat kuat, pengerjaan lebih mudah, dan hasil plesteran lebih halus serta minim retak.",img:"https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop&q=80",specTable:[{label:"Standar Mutu",value:"SNI 7064:2014"},{label:"Produsen",value:"PT Indocement Tunggal Prakarsa"}],variants:[{name:"40 Kg (Sak Standar)",price:59e3,priceNormal:63e3,hpp:52e3,unit:"Sak",sku:"TR-PCC-40K",stock:80,storeStock:25,warehouseStock:55,isActive:!0},{name:"50 Kg (Sak Jumbo)",price:72e3,priceNormal:76e3,hpp:64e3,unit:"Sak",sku:"TR-PCC-50K",stock:40,storeStock:10,warehouseStock:30,isActive:!0}]},{id:"preset-mortar-mu380",name:"Semen Mortar MU-380 Perekat Bata Ringan",brand:"Mortar Utama",category:"Semen & Mortar",subCategory:"Mortar Instan",unit:"Sak",tag:"ThinBed",price:95e3,priceNormal:102e3,hpp:83e3,desc:"Semen instan siap pakai khusus perekat bata ringan (Autoclaved Aerated Concrete / AAC). Cukup ditambah air, memiliki daya rekat ekstra tinggi dengan ketebalan aplikasi tipis 3 mm.",img:"https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&auto=format&fit=crop&q=80",specTable:[{label:"Tebal Aplikasi",value:"3 mm"},{label:"Kebutuhan Air",value:"9.0 - 9.5 Liter / Sak"},{label:"Daya Sebar",value:"± 10 - 14 m² (bata tebal 7.5cm)"}],variants:[{name:"40 Kg (Sak)",price:95e3,priceNormal:102e3,hpp:83e3,unit:"Sak",sku:"MU-380-40K",stock:50,storeStock:20,warehouseStock:30,isActive:!0}]},{id:"preset-mortar-mu200",name:"Semen Mortar MU-200 Acian Plester & Beton",brand:"Mortar Utama",category:"Semen & Mortar",subCategory:"Mortar Instan",unit:"Sak",tag:"Acian",price:98e3,priceNormal:105e3,hpp:86e3,desc:"Semen instan acian halus siap pakai untuk plesteran dinding dan permukaan beton interior maupun eksterior. Anti retak rambut dan permukaan siap dicat setelah 7 hari.",img:"https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",specTable:[{label:"Tebal Aplikasi",value:"1.5 - 3.0 mm"},{label:"Kebutuhan Air",value:"13.0 - 14.0 Liter / Sak"}],variants:[{name:"40 Kg (Sak)",price:98e3,priceNormal:105e3,hpp:86e3,unit:"Sak",sku:"MU-200-40K",stock:40,storeStock:15,warehouseStock:25,isActive:!0}]},{id:"preset-semen-am53",name:"Semen Nat Keramik AM 53 Pengisi Nat Ubin",brand:"AM",category:"Semen & Mortar",subCategory:"Semen Nat",unit:"Bungkus",tag:"Tile Grout",price:18e3,priceNormal:2e4,hpp:14e3,desc:"Pengisi nat keramik, granit, dan mosaik dengan formula polimer anti jamur dan anti retak. Warna tahan pudar dan kedap air.",img:"https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&auto=format&fit=crop&q=80",specTable:[{label:"Lebar Nat",value:"1 - 3 mm"},{label:"Daya Sebar",value:"6 - 8 m² (ubin 30x30 cm)"}],variants:[{name:"1 Kg - White Crystal",price:18e3,priceNormal:2e4,hpp:14e3,unit:"Bks",colorCode:"#FFFFFF",sku:"AM-53-WHITE",stock:20,storeStock:20,warehouseStock:0,isActive:!0},{name:"1 Kg - Grey Basalt",price:18e3,priceNormal:2e4,hpp:14e3,unit:"Bks",colorCode:"#6B7280",sku:"AM-53-GREY",stock:20,storeStock:20,warehouseStock:0,isActive:!0},{name:"1 Kg - Cream Ivory",price:18e3,priceNormal:2e4,hpp:14e3,unit:"Bks",colorCode:"#FEF3C7",sku:"AM-53-CREAM",stock:15,storeStock:15,warehouseStock:0,isActive:!0},{name:"1 Kg - Black Onyx",price:18e3,priceNormal:2e4,hpp:14e3,unit:"Bks",colorCode:"#1F2937",sku:"AM-53-BLACK",stock:10,storeStock:10,warehouseStock:0,isActive:!0}]},{id:"preset-pipa-rucika-aw",name:"Pipa PVC Rucika Standar JIS Tipe AW (Tekanan Tinggi)",brand:"Rucika",category:"Pipa & Sambungan",subCategory:"Pipa Air Bersih",unit:"Batang",tag:"JIS AW",price:38e3,priceNormal:42e3,hpp:31e3,desc:"Pipa PVC standar Jepang JIS K-6741 tebal dan kuat untuk instalasi air bersih bertekanan kerja hingga 10 bar. Bebas timbal, higienis, dan tidak mudah pecah.",img:"https://images.unsplash.com/photo-1542013936693-884638332954?w=600&auto=format&fit=crop&q=80",specTable:[{label:"Panjang Batang",value:"4.0 Meter"},{label:"Ketahanan Tekanan",value:"10 kg/cm² (AW Class)"},{label:"Bahan Baku",value:"Unplasticized Polyvinyl Chloride (uPVC)"}],variants:[{name:"1/2 Inch AW (4 Meter)",price:38e3,priceNormal:42e3,hpp:31e3,unit:"Batang",sku:"RCK-AW-050",stock:60,storeStock:20,warehouseStock:40,isActive:!0},{name:"3/4 Inch AW (4 Meter)",price:52e3,priceNormal:58e3,hpp:43e3,unit:"Batang",sku:"RCK-AW-075",stock:60,storeStock:20,warehouseStock:40,isActive:!0},{name:"1 Inch AW (4 Meter)",price:76e3,priceNormal:84e3,hpp:63e3,unit:"Batang",sku:"RCK-AW-100",stock:40,storeStock:15,warehouseStock:25,isActive:!0},{name:"1 1/4 Inch AW (4 Meter)",price:11e4,priceNormal:12e4,hpp:92e3,unit:"Batang",sku:"RCK-AW-125",stock:20,storeStock:10,warehouseStock:10,isActive:!0},{name:"1 1/2 Inch AW (4 Meter)",price:135e3,priceNormal:148e3,hpp:112e3,unit:"Batang",sku:"RCK-AW-150",stock:20,storeStock:10,warehouseStock:10,isActive:!0},{name:"2 Inch AW (4 Meter)",price:185e3,priceNormal:2e5,hpp:154e3,unit:"Batang",sku:"RCK-AW-200",stock:20,storeStock:8,warehouseStock:12,isActive:!0},{name:"3 Inch AW (4 Meter)",price:34e4,priceNormal:37e4,hpp:285e3,unit:"Batang",sku:"RCK-AW-300",stock:10,storeStock:4,warehouseStock:6,isActive:!0},{name:"4 Inch AW (4 Meter)",price:53e4,priceNormal:575e3,hpp:445e3,unit:"Batang",sku:"RCK-AW-400",stock:10,storeStock:4,warehouseStock:6,isActive:!0}]},{id:"preset-pipa-rucika-d",name:"Pipa PVC Rucika Standar JIS Tipe D (Saluran Buang)",brand:"Rucika",category:"Pipa & Sambungan",subCategory:"Pipa Saluran Pembuangan",unit:"Batang",tag:"JIS D",price:85e3,priceNormal:92e3,hpp:71e3,desc:"Pipa PVC saluran pembuangan air kotor, limbah rumah tangga, dan talang hujan. Ringan, tahan bahan kimia rumah tangga, dan dinding dalam sangat licin mencegah endapan kotoran.",img:"https://images.unsplash.com/photo-1542013936693-884638332954?w=600&auto=format&fit=crop&q=80",specTable:[{label:"Panjang Batang",value:"4.0 Meter"},{label:"Ketahanan Tekanan",value:"5 kg/cm² (D Class)"}],variants:[{name:"1 1/4 Inch D (4 Meter)",price:62e3,priceNormal:68e3,hpp:52e3,unit:"Batang",sku:"RCK-D-125",stock:25,storeStock:10,warehouseStock:15,isActive:!0},{name:"1 1/2 Inch D (4 Meter)",price:74e3,priceNormal:8e4,hpp:62e3,unit:"Batang",sku:"RCK-D-150",stock:25,storeStock:10,warehouseStock:15,isActive:!0},{name:"2 Inch D (4 Meter)",price:95e3,priceNormal:104e3,hpp:8e4,unit:"Batang",sku:"RCK-D-200",stock:30,storeStock:10,warehouseStock:20,isActive:!0},{name:"3 Inch D (4 Meter)",price:165e3,priceNormal:18e4,hpp:138e3,unit:"Batang",sku:"RCK-D-300",stock:20,storeStock:8,warehouseStock:12,isActive:!0},{name:"4 Inch D (4 Meter)",price:26e4,priceNormal:285e3,hpp:218e3,unit:"Batang",sku:"RCK-D-400",stock:20,storeStock:8,warehouseStock:12,isActive:!0}]},{id:"preset-knee-rucika-aw",name:"Knee / Elbow PVC 90 Derajat Rucika AW",brand:"Rucika",category:"Pipa & Sambungan",subCategory:"Sambungan Pipa",unit:"Pcs",tag:"Fitting AW",price:4500,priceNormal:5e3,hpp:3300,desc:"Sambungan siku pipa PVC belokan 90 derajat tipe AW tebal standar JIS. Sambungan rapat anti bocor.",img:"https://images.unsplash.com/photo-1542013936693-884638332954?w=600&auto=format&fit=crop&q=80",variants:[{name:"Ukuran 1/2 Inch AW",price:4500,priceNormal:5e3,hpp:3300,unit:"Pcs",sku:"RCK-KNEE-050",stock:150,storeStock:50,warehouseStock:100,isActive:!0},{name:"Ukuran 3/4 Inch AW",price:6e3,priceNormal:7e3,hpp:4500,unit:"Pcs",sku:"RCK-KNEE-075",stock:120,storeStock:40,warehouseStock:80,isActive:!0},{name:"Ukuran 1 Inch AW",price:9500,priceNormal:11e3,hpp:7200,unit:"Pcs",sku:"RCK-KNEE-100",stock:80,storeStock:30,warehouseStock:50,isActive:!0}]},{id:"preset-lem-pipa-isarplas",name:"Lem Pipa PVC Isarplas / TruGlue",brand:"Isarplas",category:"Pipa & Sambungan",subCategory:"Perekat Pipa",unit:"Pcs",tag:"Lem PVC",price:8500,priceNormal:1e4,hpp:6500,desc:"Lem perekat khusus pipa dan sambungan PVC dengan senyawa kimia pelarut yang menyatukan dinding pipa secara homogen.",img:"https://images.unsplash.com/photo-1542013936693-884638332954?w=600&auto=format&fit=crop&q=80",variants:[{name:"Tube 45 Gram (Kecil)",price:8500,priceNormal:1e4,hpp:6500,unit:"Tube",sku:"LEM-ISR-45G",stock:60,storeStock:30,warehouseStock:30,isActive:!0},{name:"Kaleng 400 Gram (Besar)",price:46e3,priceNormal:5e4,hpp:37e3,unit:"Kaleng",sku:"LEM-ISR-400G",stock:20,storeStock:10,warehouseStock:10,isActive:!0}]},{id:"preset-besi-beton-polos",name:"Besi Beton Polos SNI (Panjang 12 Meter)",brand:"Standar SNI",category:"Besi & Baja",subCategory:"Besi Konstruksi",unit:"Batang",tag:"SNI 12m",price:52e3,priceNormal:56e3,hpp:46e3,desc:"Besi beton tulangan polos standar industri Indonesia (SNI) panjang utuh 12 meter. Digunakan untuk begel kolom, sloof, balok lantai, dan pondasi bangunan.",img:"https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop&q=80",specTable:[{label:"Panjang Standar",value:"12.0 Meter"},{label:"Toleransi Mutu",value:"SNI BJTP 280"}],variants:[{name:"Besi 6 mm Polos SNI (12m)",price:32e3,priceNormal:35e3,hpp:28e3,unit:"Batang",sku:"BESI-POL-06",stock:100,storeStock:40,warehouseStock:60,isActive:!0},{name:"Besi 8 mm Polos SNI (12m)",price:54e3,priceNormal:58e3,hpp:47500,unit:"Batang",sku:"BESI-POL-08",stock:120,storeStock:40,warehouseStock:80,isActive:!0},{name:"Besi 10 mm Polos SNI (12m)",price:84e3,priceNormal:9e4,hpp:74e3,unit:"Batang",sku:"BESI-POL-10",stock:100,storeStock:30,warehouseStock:70,isActive:!0},{name:"Besi 12 mm Polos SNI (12m)",price:122e3,priceNormal:13e4,hpp:107e3,unit:"Batang",sku:"BESI-POL-12",stock:60,storeStock:20,warehouseStock:40,isActive:!0}]},{id:"preset-baja-ringan-canal",name:"Baja Ringan Canal C-75 Galvalum SNI",brand:"Kencana / TASO",category:"Besi & Baja",subCategory:"Rangka Atap",unit:"Batang",tag:"Galvalum",price:88e3,priceNormal:95e3,hpp:77e3,desc:"Truss profil C75 baja ringan mutu tinggi G-550 lapisan zinc-aluminium anti karat dan tahan rayap. Pilihan utama rangka atap genteng, asbes, dan kanopi.",img:"https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop&q=80",specTable:[{label:"Panjang Batang",value:"6.0 Meter"},{label:"Lebar Profil",value:"75 mm"},{label:"Kekuatan Bahan",value:"Hi-Ten G550 (5500 kg/cm²)"}],variants:[{name:"C-75 x 0.75 mm (6 Meter)",price:88e3,priceNormal:95e3,hpp:77e3,unit:"Batang",sku:"BJ-C75-075",stock:80,storeStock:25,warehouseStock:55,isActive:!0},{name:"C-75 x 0.70 mm (6 Meter)",price:79e3,priceNormal:86e3,hpp:69e3,unit:"Batang",sku:"BJ-C75-070",stock:80,storeStock:25,warehouseStock:55,isActive:!0},{name:"C-75 x 0.65 mm (6 Meter)",price:72e3,priceNormal:78e3,hpp:62e3,unit:"Batang",sku:"BJ-C75-065",stock:60,storeStock:20,warehouseStock:40,isActive:!0}]},{id:"preset-kawat-bendrat",name:"Kawat Bendrat / Kawat Ikat Tulangan Beton",brand:"Standar SNI",category:"Besi & Baja",subCategory:"Kawat Bangunan",unit:"Kg",tag:"Kawat Ikat",price:24e3,priceNormal:26e3,hpp:19500,desc:"Kawat bendrat lunak elastis anti putus untuk mengikat tulangan besi beton sloof, kolom, dan cakar ayam.",img:"https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop&q=80",variants:[{name:"Kuantitas 1 Kg (Eceran)",price:24e3,priceNormal:26e3,hpp:19500,unit:"Kg",sku:"BND-01K",stock:80,storeStock:30,warehouseStock:50,isActive:!0},{name:"Rol Utuh 20 Kg (Per Rol)",price:44e4,priceNormal:47e4,hpp:375e3,unit:"Rol",sku:"BND-20K",stock:15,storeStock:5,warehouseStock:10,isActive:!0}]},{id:"preset-mesin-gerinda-makita",name:"Mesin Gerinda Tangan 4 Inch Maktec MT90 / Makita",brand:"Makita",category:"Alat Teknik",subCategory:"Power Tools",unit:"Unit",tag:"Garansi Resmi",price:365e3,priceNormal:395e3,hpp:31e4,desc:"Mesin gerinda listrik 4 inci handal bertenaga 540 Watt dengan putaran 12.000 RPM. Motor tahan panas dengan carbon brush awet untuk memotong besi, keramik, dan menghaluskan permukaan.",img:"https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&auto=format&fit=crop&q=80",specTable:[{label:"Daya Listrik",value:"540 Watt"},{label:"Ukuran Batu",value:"100 mm (4 Inch)"},{label:"Kecepatan Tanpa Beban",value:"12.000 RPM"},{label:"Garansi",value:"Resmi Makita 2 Tahun"}],variants:[{name:"Unit Standar Box (Mesin + Kunci + Pelindung)",price:365e3,priceNormal:395e3,hpp:31e4,unit:"Unit",sku:"MKT-MT90-STD",stock:12,storeStock:4,warehouseStock:8,isActive:!0}]},{id:"preset-mesin-bor-bosch",name:"Mesin Bor Tembok Listrik 13mm Impact Drill Bosch GSB 550",brand:"Bosch",category:"Alat Teknik",subCategory:"Power Tools",unit:"Unit",tag:"Impact Drill",price:545e3,priceNormal:59e4,hpp:465e3,desc:"Mesin bor listrik impact multifungsi 550 Watt dengan mode putar dan tumbukan beton. Sanggup melubangi dinding bata/beton hingga 13mm, kayu 25mm, dan besi 10mm.",img:"https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&auto=format&fit=crop&q=80",specTable:[{label:"Daya Input",value:"550 Watt"},{label:"Kapasitas Chuck",value:"1.5 - 13 mm"},{label:"Fitur",value:"Variable Speed & Reversible (Bolak-Balik)"}],variants:[{name:"Unit Standar Box",price:545e3,priceNormal:59e4,hpp:465e3,unit:"Unit",sku:"BSH-GSB550-BOX",stock:8,storeStock:3,warehouseStock:5,isActive:!0}]},{id:"preset-meteran-tekiro",name:"Meteran Baja Roll Tancap / Auto Lock Tekiro",brand:"Tekiro",category:"Alat Teknik",subCategory:"Alat Ukur",unit:"Pcs",tag:"Presisi",price:28e3,priceNormal:32e3,hpp:21500,desc:"Meteran gulung pita baja tebal berlapis nilon anti karat dengan bodi berlapis karet ergonomis tahan jatuh dan mekanisme auto lock presisi.",img:"https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&auto=format&fit=crop&q=80",variants:[{name:"Panjang 3 Meter",price:28e3,priceNormal:32e3,hpp:21500,unit:"Pcs",sku:"TKR-MET-3M",stock:24,storeStock:10,warehouseStock:14,isActive:!0},{name:"Panjang 5 Meter",price:42e3,priceNormal:48e3,hpp:32e3,unit:"Pcs",sku:"TKR-MET-5M",stock:30,storeStock:12,warehouseStock:18,isActive:!0},{name:"Panjang 7.5 Meter",price:62e3,priceNormal:68e3,hpp:48e3,unit:"Pcs",sku:"TKR-MET-75M",stock:16,storeStock:6,warehouseStock:10,isActive:!0}]},{id:"preset-kuas-eterna",name:"Kuas Cat Tembok & Minyak Bulu Tebal Eterna",brand:"Eterna",category:"Alat Teknik",subCategory:"Perkakas Cat",unit:"Pcs",tag:"Bulu Tebal",price:6e3,priceNormal:7e3,hpp:4200,desc:"Kuas cat bulu putih tebal premium dengan pegangan kayu halus kokoh. Bulu tidak mudah rontok menghasilkan sapuan cat halus rata.",img:"https://images.unsplash.com/photo-1562184552-997c461abbe6?w=600&auto=format&fit=crop&q=80",variants:[{name:"Kuas 1.5 Inch",price:6e3,priceNormal:7e3,hpp:4200,unit:"Pcs",sku:"ETR-KUAS-15",stock:50,storeStock:25,warehouseStock:25,isActive:!0},{name:"Kuas 2 Inch",price:8500,priceNormal:1e4,hpp:6200,unit:"Pcs",sku:"ETR-KUAS-20",stock:50,storeStock:25,warehouseStock:25,isActive:!0},{name:"Kuas 2.5 Inch",price:11e3,priceNormal:13e3,hpp:8200,unit:"Pcs",sku:"ETR-KUAS-25",stock:40,storeStock:20,warehouseStock:20,isActive:!0},{name:"Kuas 3 Inch",price:14e3,priceNormal:16e3,hpp:10500,unit:"Pcs",sku:"ETR-KUAS-30",stock:40,storeStock:20,warehouseStock:20,isActive:!0},{name:"Kuas 4 Inch",price:19e3,priceNormal:22e3,hpp:14500,unit:"Pcs",sku:"ETR-KUAS-40",stock:30,storeStock:15,warehouseStock:15,isActive:!0}]},{id:"preset-baut-roofing-sds",name:"Baut Baja Ringan Roofing SDS (Self Drilling Screw)",brand:"Moon Lion",category:"Baut & Sekrup",subCategory:"Sekrup Baja Ringan",unit:"Bungkus",tag:"Anti Karat",price:32e3,priceNormal:36e3,hpp:24e3,desc:"Baut ulir tajam dengan mata bor self-drilling ujung runcing. Langsung menembus seng gelombang, spandek, dan canal baja ringan tanpa perlu dibor terlebih dahulu.",img:"https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&auto=format&fit=crop&q=80",variants:[{name:"10 x 19 mm Truss Reng (Isi 100 Pcs)",price:32e3,priceNormal:36e3,hpp:24e3,unit:"Bks",sku:"SDS-1019-100",stock:50,storeStock:20,warehouseStock:30,isActive:!0},{name:"12 x 50 mm / 5 cm Karet (Isi 50 Pcs)",price:42e3,priceNormal:48e3,hpp:32e3,unit:"Bks",sku:"SDS-1250-50",stock:40,storeStock:15,warehouseStock:25,isActive:!0},{name:"12 x 70 mm / 7 cm Karet (Isi 50 Pcs)",price:54e3,priceNormal:6e4,hpp:41e3,unit:"Bks",sku:"SDS-1270-50",stock:30,storeStock:10,warehouseStock:20,isActive:!0}]},{id:"preset-paku-kayu-sni",name:"Paku Kayu Konstruksi SNI",brand:"Standar SNI",category:"Baut & Sekrup",subCategory:"Paku Besi",unit:"Kg",tag:"SNI",price:22e3,priceNormal:24e3,hpp:18e3,desc:"Paku besi tempa baja padat lurus dengan kepala pipih rapi. Batang kokoh tidak mudah bengkok untuk bekisting, kaso, reng kayu, dan balok.",img:"https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&auto=format&fit=crop&q=80",variants:[{name:"Paku 5 cm / 2 Inch (1 Kg)",price:22e3,priceNormal:24e3,hpp:18e3,unit:"Kg",sku:"PAKU-05-1K",stock:50,storeStock:20,warehouseStock:30,isActive:!0},{name:"Paku 7 cm / 3 Inch (1 Kg)",price:22e3,priceNormal:24e3,hpp:18e3,unit:"Kg",sku:"PAKU-07-1K",stock:50,storeStock:20,warehouseStock:30,isActive:!0},{name:"Paku 10 cm / 4 Inch (1 Kg)",price:22e3,priceNormal:24e3,hpp:18e3,unit:"Kg",sku:"PAKU-10-1K",stock:40,storeStock:15,warehouseStock:25,isActive:!0}]},{id:"preset-kran-onda-sus304",name:"Kran Air Tembok Stainless SUS 304 Onda",brand:"Onda",category:"Sanitari",subCategory:"Kran Air",unit:"Pcs",tag:"Stainless 304",price:48e3,priceNormal:55e3,hpp:38e3,desc:"Kran air tembok kamar mandi / taman bahan stainless steel SUS 304 murni anti karat dan anti patah. Jantung kran keramik presisi buka tutup hingga 100.000 kali putaran.",img:"https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&auto=format&fit=crop&q=80",variants:[{name:"1/2 Inch Model Baling",price:48e3,priceNormal:55e3,hpp:38e3,unit:"Pcs",sku:"ONDA-KRN-BAL-05",stock:25,storeStock:10,warehouseStock:15,isActive:!0},{name:"1/2 Inch Model Engkol",price:52e3,priceNormal:6e4,hpp:41e3,unit:"Pcs",sku:"ONDA-KRN-ENG-05",stock:25,storeStock:10,warehouseStock:15,isActive:!0}]},{id:"preset-sealtape-onda",name:"Seal Tape / Selotip Pipa Onda 1/2 Inch",brand:"Onda",category:"Sanitari",subCategory:"Aksesoris Pipa",unit:"Pcs",tag:"Anti Bocor",price:4500,priceNormal:5500,hpp:3200,desc:"Isolasi pipa PTFE densitas tinggi untuk melapis ulir drat kran air dan sambungan fitting besi/PVC agar kedap air 100% tanpa bocor.",img:"https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&auto=format&fit=crop&q=80",variants:[{name:"Eceran Per Pcs (10 Meter)",price:4500,priceNormal:5500,hpp:3200,unit:"Pcs",sku:"ONDA-ST-1PC",stock:100,storeStock:40,warehouseStock:60,isActive:!0},{name:"Box Pack (Isi 10 Pcs)",price:42e3,priceNormal:5e4,hpp:3e4,unit:"Box",sku:"ONDA-ST-10PC",stock:20,storeStock:8,warehouseStock:12,isActive:!0}]},{id:"preset-kabel-nym-supreme",name:"Kabel Listrik NYM Tembaga Murni SNI Supreme",brand:"Supreme",category:"Kelistrikan",subCategory:"Kabel Instalasi",unit:"Meter",tag:"SNI Tembaga",price:14e3,priceNormal:16e3,hpp:11500,desc:"Kabel instalasi listrik rumah tangga berinti kawat tembaga pejal isolasi PVC ganda (putih). Standar PLN / LMK aman dari korsleting dan panas tinggi.",img:"https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600&auto=format&fit=crop&q=80",variants:[{name:"2 x 1.5 mm (Ecer Meteran)",price:14e3,priceNormal:16e3,hpp:11500,unit:"Meter",sku:"KBL-NYM-215-M",stock:150,storeStock:50,warehouseStock:100,isActive:!0},{name:"2 x 1.5 mm (Roll Utuh 50m)",price:65e4,priceNormal:7e5,hpp:55e4,unit:"Roll",sku:"KBL-NYM-215-50M",stock:8,storeStock:3,warehouseStock:5,isActive:!0},{name:"2 x 2.5 mm (Ecer Meteran)",price:21e3,priceNormal:24e3,hpp:17500,unit:"Meter",sku:"KBL-NYM-225-M",stock:100,storeStock:40,warehouseStock:60,isActive:!0},{name:"2 x 2.5 mm (Roll Utuh 50m)",price:98e4,priceNormal:105e4,hpp:84e4,unit:"Roll",sku:"KBL-NYM-225-50M",stock:6,storeStock:2,warehouseStock:4,isActive:!0}]},{id:"preset-saklar-broco-gracio",name:"Saklar & Stop Kontak Tanam Broco Gracio",brand:"Broco",category:"Kelistrikan",subCategory:"Saklar & Stop Kontak",unit:"Pcs",tag:"SNI Broco",price:24e3,priceNormal:28e3,hpp:19e3,desc:"Saklar dan colokan listrik tanam dinding tipe Gracio warna krem klasik. Kontak kuningan asli tebal dengan bodi tahan api (flame retardant).",img:"https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600&auto=format&fit=crop&q=80",variants:[{name:"Stop Kontak Arde Tanam",price:24e3,priceNormal:28e3,hpp:19e3,unit:"Pcs",sku:"BRC-GRA-SK-ARDE",stock:40,storeStock:20,warehouseStock:20,isActive:!0},{name:"Saklar Engkel (Tunggal)",price:22e3,priceNormal:26e3,hpp:17500,unit:"Pcs",sku:"BRC-GRA-SW-ENG",stock:40,storeStock:20,warehouseStock:20,isActive:!0},{name:"Saklar Seri (Ganda / Dobel)",price:28e3,priceNormal:32e3,hpp:22e3,unit:"Pcs",sku:"BRC-GRA-SW-SERI",stock:30,storeStock:15,warehouseStock:15,isActive:!0}]}],Ze=()=>{const e=new Set(l.deleted_master_preset_ids||[]),t=(l.custom_master_presets||[]).filter(r=>!e.has(r.id));return[...Xt.filter(r=>!e.has(r.id)),...t]},Qe=e=>{const t=l.products||[],a=(e.name||"").trim().toLowerCase(),r=t.find(s=>(s.name||"").trim().toLowerCase()===a);return{isImported:!!r,storeProduct:r||null}},ee=()=>{et("colors"),window.cTab="colors";const e=Ze();l.products;let t=0;e.forEach(d=>{Qe(d).isImported&&t++});const a=e.length-t,r=(l.deleted_master_preset_ids||[]).length,s=["ALL",...new Set(e.map(d=>d.category).filter(Boolean))],o=(Ge||"").trim().toLowerCase(),i=e.filter(d=>{if(!(Tt==="ALL"||d.category===Tt))return!1;if(!o)return!0;const m=(d.name||"").toLowerCase().includes(o),b=(d.brand||"").toLowerCase().includes(o),f=(d.category||"").toLowerCase().includes(o),h=(d.variants||[]).some(w=>(w.name||"").toLowerCase().includes(o)||(w.sku||"").toLowerCase().includes(o));return m||b||f||h}),n=Cr==="colors",p=`
        <div class="max-w-6xl mx-auto pb-20 px-1 sm:px-2">
            <!-- HEADER TAMPILAN CMS & NAVIGASI DUA TAB -->
            <div class="mb-6">
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
                    <div>
                        <div class="flex items-center gap-2 mb-1">
                            <span class="px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest primary-bg-soft text-[var(--color-primary)] border primary-border">
                                <i class="fa-solid fa-cloud-arrow-down mr-1"></i> Pustaka Induk Bersama
                            </span>
                            <span class="px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700">
                                <i class="fa-solid fa-users mr-1"></i> Siap Pakai Klien
                            </span>
                        </div>
                        <h2 class="text-xl sm:text-2xl font-black text-slate-800 dark:text-white flex items-center gap-2">
                            <i class="fa-solid fa-boxes-stacked text-[var(--color-primary)]"></i>
                            Database Produk Bersama
                        </h2>
                        <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-2xl leading-relaxed">
                            Pustaka master produk, multi-varian, dan katalog warna siap salin ke toko Anda. Klien baru dapat langsung mengimpor produk lengkap dengan 1-klik tanpa perlu mengetik dari awal!
                        </p>
                    </div>

                    <!-- SUB-TAB SWITCHER (BENTO PILL) -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 p-1.5 rounded-2xl bg-slate-200/80 dark:bg-slate-800/90 border border-slate-300/60 dark:border-slate-700/80 w-full md:w-auto shrink-0 shadow-inner gap-1">
                        <button type="button" onclick="window.switchMasterCatalogSubTab('master')" class="px-4 py-2.5 min-h-[44px] rounded-xl text-xs font-black transition-all cursor-pointer flex items-center justify-center gap-2 ${n?"text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white":"bg-white dark:bg-slate-700 text-[var(--color-primary)] shadow-xs"}">
                            <i class="fa-solid fa-boxes-stacked text-sm"></i>
                            <span>Master Produk &amp; Varian (${e.length})</span>
                        </button>
                        <button type="button" onclick="window.switchMasterCatalogSubTab('colors')" class="px-4 py-2.5 min-h-[44px] rounded-xl text-xs font-black transition-all cursor-pointer flex items-center justify-center gap-2 ${n?"bg-white dark:bg-slate-700 text-[var(--color-primary)] shadow-xs":"text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white"}">
                            <i class="fa-solid fa-swatchbook text-sm"></i>
                            <span>Swatch Warna Cat (${(l.colors||[]).length})</span>
                        </button>
                    </div>
                </div>

                ${n?`
                <!-- TAMPILAN SUB-TAB 2: DATABASE SWATCH WARNA CAT (FITUR SEBELUMNYA) -->
                <div class="bento-island-card p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs mb-6">
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-700">
                        <div>
                            <h3 class="text-base font-black text-slate-800 dark:text-white flex items-center gap-2">
                                <i class="fa-solid fa-swatchbook text-[var(--color-primary)]"></i>
                                Katalog Kode Warna &amp; Swatch Cat
                            </h3>
                            <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Daftar kode HEX warna untuk swatch varian cat tembok, besi, dan waterproofing.</p>
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                            <button type="button" onclick="openImportFromProductsModal()" class="h-12 min-h-[44px] px-4 rounded-xl primary-bg-soft border primary-border text-[var(--color-primary)] font-bold text-xs uppercase tracking-wider hover:primary-bg hover:text-white transition-all active:scale-95 shadow-2xs flex items-center gap-2 cursor-pointer">
                                <i class="fa-solid fa-box-archive"></i> Impor dari Produk Toko
                            </button>
                            <button type="button" onclick="window.openAddColorModal()" class="h-12 min-h-[44px] px-4 rounded-xl primary-bg text-white font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-all active:scale-95 shadow-md flex items-center gap-2 cursor-pointer">
                                <i class="fa-solid fa-plus"></i> Tambah Warna
                            </button>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3" id="admin-colors-grid">
                        ${(l.colors||[]).length===0?`
                            <div class="col-span-full py-12 text-center">
                                <i class="fa-solid fa-palette text-3xl text-slate-300 dark:text-slate-600 mb-2"></i>
                                <p class="text-xs font-bold text-slate-400">Database warna masih kosong.</p>
                                <button type="button" onclick="openImportFromProductsModal()" class="mt-3 text-xs font-bold text-[var(--color-primary)] underline">Impor dari varian produk toko</button>
                            </div>
                        `:(l.colors||[]).map((d,c)=>`
                            <div class="p-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60 flex flex-col justify-between hover:border-[var(--color-primary)]/50 transition-all group">
                                <div class="flex items-center justify-between mb-2">
                                    <div class="w-8 h-8 rounded-full border-2 border-white dark:border-slate-600 shadow-sm shrink-0" style="background-color: ${u(d.hex||"#ffffff")}"></div>
                                    <button type="button" onclick="window.deleteColorFromDB(${c})" class="w-7 h-7 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 flex items-center justify-center opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer" title="Hapus"><i class="fa-solid fa-trash text-[11px]"></i></button>
                                </div>
                                <div>
                                    <h5 class="text-xs font-bold text-slate-700 dark:text-slate-200 truncate" title="${u(d.name)}">${u(d.name)}</h5>
                                    <p class="text-[10px] font-mono text-slate-400 uppercase mt-0.5">${u(d.hex||"#------")}</p>
                                    ${d.catalog?`<span class="inline-block mt-1 text-[8px] font-bold uppercase tracking-wider text-slate-400 truncate max-w-full">${u(d.catalog)}</span>`:""}
                                </div>
                            </div>
                        `).join("")}
                    </div>
                </div>
                `:`
                <!-- BENTO STATS ISLAND -->
                <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
                    <div class="bento-island-card p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700 shadow-2xs">
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">Pustaka Master</span>
                            <div class="w-8 h-8 rounded-xl primary-bg-soft text-[var(--color-primary)] flex items-center justify-center text-xs"><i class="fa-solid fa-database"></i></div>
                        </div>
                        <div class="text-xl sm:text-2xl font-black text-slate-800 dark:text-white">${e.length} <span class="text-xs font-semibold text-slate-400">Template</span></div>
                        <p class="text-[10px] text-slate-400 mt-1">Lengkap spesifikasi &amp; varian</p>
                    </div>

                    <div class="bento-island-card p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700 shadow-2xs">
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">Kategori Material</span>
                            <div class="w-8 h-8 rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center text-xs"><i class="fa-solid fa-layer-group"></i></div>
                        </div>
                        <div class="text-xl sm:text-2xl font-black text-slate-800 dark:text-white">${s.length-1} <span class="text-xs font-semibold text-slate-400">Sektor</span></div>
                        <p class="text-[10px] text-slate-400 mt-1">Cat, Semen, Pipa, Besi, dll</p>
                    </div>

                    <div class="bento-island-card p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700 shadow-2xs">
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">Sudah di Toko Anda</span>
                            <div class="w-8 h-8 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs"><i class="fa-solid fa-circle-check"></i></div>
                        </div>
                        <div class="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">${t} <span class="text-xs font-semibold text-slate-400">Produk</span></div>
                        <p class="text-[10px] text-slate-400 mt-1">Aktif di etalase &amp; Kasir POS</p>
                    </div>

                    <div class="bento-island-card p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700 shadow-2xs ${a>0?"cursor-pointer hover:border-[var(--color-primary)] transition-all group/impcard":""}" ${a>0?'onclick="window.confirmImportAllMasterPresets()" title="Klik untuk menyalin semua template yang tersedia ke toko Anda"':""}>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">Tersedia utk Diimpor</span>
                            <div class="w-8 h-8 rounded-xl bg-blue-500/15 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs group-hover/impcard:scale-110 transition-transform"><i class="fa-solid fa-cloud-arrow-down"></i></div>
                        </div>
                        <div class="text-xl sm:text-2xl font-black text-blue-600 dark:text-blue-400">${a} <span class="text-xs font-semibold text-slate-400">Produk</span></div>
                        <p class="text-[10px] text-slate-400 mt-1">${a>0?'<span class="text-[var(--color-primary)] font-bold">⚡ Salin semua sekaligus &rarr;</span>':"Semua template sudah ada di toko"}</p>
                    </div>
                </div>

                <!-- PENCARIAN & CHICLET FILTER KATEGORI -->
                <div class="space-y-3 mb-6">
                    <div class="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                        <div class="relative flex-1">
                            <i class="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm"></i>
                            <input autocomplete="off" id="master-search-input" value="${u(Ge)}" placeholder="Cari produk master, merek, varian, pipa, semen, cat..." oninput="window.handleMasterSearch(this.value)" class="w-full h-12 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl pl-11 pr-11 text-[16px] sm:text-sm font-bold text-slate-700 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15 shadow-2xs transition-all">
                            <button type="button" id="master-search-clear-btn" onclick="window.clearMasterSearch()" class="${Ge?"":"hidden"} absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-600 rounded-xl transition-all cursor-pointer active:scale-90"><i class="fa-solid fa-circle-xmark text-sm"></i></button>
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                            ${a>0?`
                                <button type="button" onclick="window.confirmImportAllMasterPresets()" class="h-12 min-h-[44px] px-4 rounded-2xl primary-bg text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-2xs hover:opacity-95 active:scale-95 transition-all cursor-pointer shrink-0" title="Salin semua ${a} template master sekaligus ke etalase & kasir toko">
                                    <i class="fa-solid fa-cloud-arrow-down text-white"></i>
                                    <span>Salin Semua ke Toko (${a})</span>
                                </button>
                            `:""}
                            ${r>0?`
                                <button type="button" onclick="window.restoreDeletedMasterPresets()" class="h-12 min-h-[44px] px-3.5 sm:px-4 rounded-2xl border border-amber-300 dark:border-amber-700/80 bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/40 dark:hover:bg-amber-900/60 text-amber-800 dark:text-amber-300 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-2xs active:scale-95 transition-all cursor-pointer shrink-0" title="Pulihkan semua template master bawaan yang pernah dihapus">
                                    <i class="fa-solid fa-clock-rotate-left text-amber-600 dark:text-amber-400"></i>
                                    <span>Pulihkan Template (${r})</span>
                                </button>
                            `:""}
                            <button type="button" onclick="window.openExportStoreProductPicker()" class="h-12 min-h-[44px] px-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-2xs active:scale-95 transition-all cursor-pointer shrink-0">
                                <i class="fa-solid fa-cloud-arrow-up text-[var(--color-primary)]"></i>
                                <span>Simpan Produk Toko ke Pustaka</span>
                            </button>
                        </div>
                    </div>

                    <!-- CHICLET KATEGORI -->
                    <div class="flex items-center gap-2 overflow-x-auto pb-1.5 custom-scrollbar text-xs -mx-1 px-1">
                        ${s.map(d=>{const c=Tt===d,m=d==="ALL"?e.length:e.filter(b=>b.category===d).length;return`
                                <button type="button" onclick="window.setMasterFilterCategory('${u(d)}')" class="shrink-0 min-h-[40px] px-3.5 py-2 rounded-xl font-bold whitespace-nowrap transition-all active:scale-95 cursor-pointer ${c?"primary-bg text-white shadow-xs":"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-[var(--color-primary)]/50"}">
                                    ${d==="ALL"?"Semua Kategori":u(d)} (${m})
                                </button>
                            `}).join("")}
                    </div>
                </div>

                <!-- DAFTAR KARTU BENTO MASTER PRODUK -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" id="master-products-grid">
                    ${i.length===0?`
                        <div class="col-span-full py-16 text-center bento-island-card rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                            <div class="w-16 h-16 rounded-2xl primary-bg-soft text-[var(--color-primary)] flex items-center justify-center text-2xl mx-auto mb-3">
                                <i class="fa-solid fa-box-open"></i>
                            </div>
                            <h4 class="font-black text-base text-slate-800 dark:text-white">Tidak Ada Produk yang Cocok</h4>
                            <p class="text-xs text-slate-400 mt-1">Coba gunakan kata kunci pencarian lain atau pilih kategori lain.</p>
                            <button type="button" onclick="window.clearMasterSearch()" class="mt-4 px-4 py-2.5 rounded-xl primary-bg text-white font-bold text-xs min-h-[40px] cursor-pointer active:scale-95">Reset Pencarian</button>
                        </div>
                    `:i.map(d=>{const{isImported:c,storeProduct:m}=Qe(d),b=d.variants||[],f=b.filter(w=>w.colorCode),h=f.length>0;return`
                            <div class="bento-island-card flex flex-col justify-between p-4 sm:p-5 rounded-[1.75rem] bg-white dark:bg-slate-800/95 border ${c?"border-emerald-500/40 dark:border-emerald-500/30":"border-slate-200 dark:border-slate-700"} shadow-xs hover:shadow-md transition-all group">
                                <div>
                                    <!-- BADGES ATAS (Kategori + Merek + Status Toko) -->
                                    <div class="flex items-center justify-between gap-2 mb-3">
                                        <div class="flex items-center gap-1.5 flex-wrap">
                                            <span class="px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-wider bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                                                ${u(d.category)}
                                            </span>
                                            ${d.brand?`
                                                <span class="px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-wider primary-bg-soft text-[var(--color-primary)]">
                                                    ${u(d.brand)}
                                                </span>
                                            `:""}
                                        </div>

                                        <div class="flex items-center gap-1.5 shrink-0">
                                            ${c?`
                                                <span class="px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 flex items-center gap-1 shrink-0">
                                                    <i class="fa-solid fa-circle-check text-emerald-500"></i> Ada di Toko
                                                </span>
                                            `:`
                                                <span class="px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-blue-100 text-blue-800 dark:bg-blue-950/70 dark:text-blue-300 border border-blue-300 dark:border-blue-700 flex items-center gap-1 shrink-0">
                                                    <i class="fa-solid fa-cloud-arrow-down text-blue-500"></i> Siap Impor
                                                </span>
                                            `}
                                            <button type="button" onclick="window.confirmDeleteMasterPreset('${u(d.id)}')" class="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-slate-100 hover:bg-rose-50 dark:bg-slate-700/70 dark:hover:bg-rose-950/50 text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 flex items-center justify-center transition-all cursor-pointer active:scale-90 shrink-0" title="Hapus template dari pustaka">
                                                <i class="fa-solid fa-trash-can text-xs"></i>
                                            </button>
                                        </div>
                                    </div>

                                    <!-- FOTO & NAMA PRODUK -->
                                    <div class="flex gap-3.5 items-start mb-3.5">
                                        <div class="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 shrink-0 relative flex items-center justify-center">
                                            ${d.img?`
                                                <img src="${u(d.img)}" alt="${u(d.name)}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                                                <div class="hidden w-full h-full items-center justify-center text-slate-400 text-xl"><i class="fa-solid fa-box"></i></div>
                                            `:`
                                                <div class="w-full h-full flex items-center justify-center text-slate-400 text-xl"><i class="fa-solid fa-box"></i></div>
                                            `}
                                        </div>
                                        <div class="min-w-0 flex-1">
                                            <h4 class="font-black text-sm text-slate-800 dark:text-white leading-snug line-clamp-2 group-hover:text-[var(--color-primary)] transition-colors">
                                                ${u(d.name)}
                                            </h4>
                                            <div class="flex items-center gap-2 mt-1.5 flex-wrap">
                                                <span class="text-xs font-black text-[var(--color-primary)]">
                                                    ${g(d.price||b[0]?.price||0)}
                                                </span>
                                                <span class="text-[10px] font-bold text-slate-400">/ ${u(d.unit||"Unit")}</span>
                                            </div>
                                            ${d.tag?`
                                                <span class="inline-block mt-1 text-[8.5px] font-black uppercase tracking-widest text-amber-600 dark:text-amber-400">
                                                    ★ ${u(d.tag)}
                                                </span>
                                            `:""}
                                        </div>
                                    </div>

                                    <!-- DESKRIPSI & RINGKASAN VARIAN -->
                                    <p class="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed mb-3">
                                        ${u(d.desc||"Produk terstandar siap pakai dengan spesifikasi teknis lengkap.")}
                                    </p>

                                    <!-- SWATCH WARNA & CHIP VARIAN -->
                                    <div class="mb-4 bg-slate-50 dark:bg-slate-900/60 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800">
                                        <div class="flex items-center justify-between mb-1.5">
                                            <span class="text-[10px] font-black uppercase tracking-wider text-slate-500">
                                                <i class="fa-solid fa-layer-group text-[var(--color-primary)] mr-1"></i> ${b.length} Varian Tersedia
                                            </span>
                                            ${h?`
                                                <span class="text-[9px] font-bold text-slate-400">${f.length} Pilihan Warna</span>
                                            `:""}
                                        </div>

                                        ${h?`
                                            <div class="flex items-center gap-1.5 flex-wrap pt-0.5">
                                                ${f.slice(0,8).map(w=>`
                                                    <div class="w-5 h-5 rounded-full border border-slate-300 dark:border-slate-600 shadow-2xs shrink-0" style="background-color: ${u(w.colorCode||"#ffffff")}" title="${u(w.name)}"></div>
                                                `).join("")}
                                                ${f.length>8?`
                                                    <span class="text-[9px] font-black text-slate-400">+${f.length-8}</span>
                                                `:""}
                                            </div>
                                        `:`
                                            <div class="flex items-center gap-1.5 flex-wrap pt-0.5">
                                                ${b.slice(0,4).map(w=>`
                                                    <span class="px-2 py-0.5 rounded-md text-[9.5px] font-bold bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                                                        ${u(w.name.split("(")[0].trim())}
                                                    </span>
                                                `).join("")}
                                                ${b.length>4?`
                                                    <span class="text-[9px] font-bold text-slate-400">+${b.length-4} ukuran lainnya</span>
                                                `:""}
                                            </div>
                                        `}
                                    </div>
                                </div>

                                <!-- TOMBOL AKSI NATIVE (TOUCH TARGET >= 40-44px) -->
                                <div class="pt-2 border-t border-slate-100 dark:border-slate-700/60">
                                    ${c?`
                                        <div class="flex items-center gap-2">
                                            <button type="button" onclick="openAdminTab('products'); setTimeout(() => window.handleAdminSearch?.('${u(d.name)}', 'products'), 100);" class="flex-1 h-12 min-h-[44px] rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer active:scale-95">
                                                <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                                                <span>Buka di Toko</span>
                                            </button>
                                            <button type="button" onclick="window.openMasterProductImportModal('${u(d.id)}', true)" class="w-12 h-12 min-h-[44px] rounded-2xl primary-bg-soft border primary-border text-[var(--color-primary)] font-bold text-xs flex items-center justify-center gap-1.5 hover:primary-bg hover:text-white transition-all cursor-pointer shrink-0 active:scale-95" title="Perbarui varian / Impor ulang">
                                                <i class="fa-solid fa-rotate text-xs"></i>
                                            </button>
                                            <button type="button" onclick="window.confirmDeleteMasterPreset('${u(d.id)}')" class="w-12 h-12 min-h-[44px] rounded-2xl bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 dark:hover:bg-rose-900/60 border border-rose-200 dark:border-rose-800 text-rose-600 dark:text-rose-400 font-bold flex items-center justify-center transition-all cursor-pointer shrink-0 active:scale-95" title="Hapus template dari pustaka">
                                                <i class="fa-solid fa-trash-can text-sm"></i>
                                            </button>
                                        </div>
                                    `:`
                                        <div class="flex items-center gap-2">
                                            <button type="button" onclick="window.openMasterProductImportModal('${u(d.id)}')" class="flex-1 h-12 min-h-[44px] rounded-2xl primary-bg text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:opacity-95 active:scale-95 cursor-pointer transition-all">
                                                <i class="fa-solid fa-cloud-arrow-down text-sm"></i>
                                                <span>Salin &amp; Impor ke Toko</span>
                                            </button>
                                            <button type="button" onclick="window.confirmDeleteMasterPreset('${u(d.id)}')" class="w-12 h-12 min-h-[44px] rounded-2xl bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 dark:hover:bg-rose-900/60 border border-rose-200 dark:border-rose-800 text-rose-600 dark:text-rose-400 font-bold flex items-center justify-center transition-all cursor-pointer shrink-0 active:scale-95" title="Hapus template dari pustaka">
                                                <i class="fa-solid fa-trash-can text-sm"></i>
                                            </button>
                                        </div>
                                    `}
                                </div>
                            </div>
                        `}).join("")}
                </div>
                `}
            </div>
        </div>
    `;_("admin-content",p)};window.handleMasterSearch=e=>{Ge=e||"";const t=k("master-search-clear-btn");t&&t.classList.toggle("hidden",!Ge),ee()};window.clearMasterSearch=()=>{Ge="";const e=k("master-search-input");e&&(e.value="",e.focus());const t=k("master-search-clear-btn");t&&t.classList.add("hidden"),ee()};window.setMasterFilterCategory=e=>{Tt=e,ee()};window.switchMasterCatalogSubTab=e=>{Cr=e,ee()};window.openMasterProductImportModal=(e,t=!1)=>{const r=Ze().find(b=>b.id===e);if(!r){x("Data template master tidak ditemukan!");return}const{isImported:s,storeProduct:o}=Qe(r),i=r.variants||[],n=o?.price||r.price||i[0]?.price||0,p=o?.hpp||r.hpp||i[0]?.hpp||0,d=o?.stock||10,c=o?.unit||r.unit||"Unit",m=`
        <div class="p-5 sm:p-7 max-w-2xl">
            <!-- HEADER MODAL -->
            <div class="flex items-start justify-between gap-3 mb-5 pb-3 border-b border-slate-100 dark:border-slate-700">
                <div class="flex items-center gap-3">
                    <div class="w-12 h-12 rounded-2xl primary-bg-soft text-[var(--color-primary)] flex items-center justify-center text-xl shrink-0">
                        <i class="fa-solid fa-cloud-arrow-down"></i>
                    </div>
                    <div>
                        <h3 class="text-base sm:text-lg font-black text-slate-800 dark:text-white leading-tight">
                            ${t?"Perbarui Varian dari Master":"Salin &amp; Impor ke Toko Saya"}
                        </h3>
                        <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Sesuaikan harga modal/jual dan centang varian yang ada di toko fisik Anda.</p>
                    </div>
                </div>
                <button type="button" onclick="window._closeColorFloatModal()" class="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 text-slate-500 flex items-center justify-center cursor-pointer transition-all active:scale-95"><i class="fa-solid fa-xmark"></i></button>
            </div>

            <!-- RINGKASAN PRODUK YANG DIIMPOR -->
            <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 flex items-center gap-3.5 mb-5">
                <div class="w-14 h-14 rounded-xl overflow-hidden bg-white dark:bg-slate-800 shrink-0 border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                    ${r.img?`
                        <img src="${u(r.img)}" alt="${u(r.name)}" class="w-full h-full object-cover" onerror="this.src='/putri_mascot_3d.jpg'">
                    `:`
                        <i class="fa-solid fa-box text-slate-400 text-xl"></i>
                    `}
                </div>
                <div class="min-w-0 flex-1">
                    <div class="flex items-center gap-1.5 mb-0.5">
                        <span class="px-2 py-0.5 rounded text-[8.5px] font-black uppercase bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">${u(r.category)}</span>
                        ${r.brand?`<span class="px-2 py-0.5 rounded text-[8.5px] font-black uppercase primary-bg-soft text-[var(--color-primary)]">${u(r.brand)}</span>`:""}
                    </div>
                    <h4 class="font-black text-xs sm:text-sm text-slate-800 dark:text-white truncate">${u(r.name)}</h4>
                    <p class="text-[10px] text-slate-400 mt-0.5">Satuan: <b>${u(c)}</b> &bull; ${i.length} Varian Tersedia di Database</p>
                </div>
            </div>

            <!-- FORM PENGATURAN HARGA & STOK LOKAL TOKO -->
            <div class="mb-5">
                <h5 class="text-[11px] font-black uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                    <i class="fa-solid fa-sliders text-[var(--color-primary)]"></i> 1. Pengaturan Harga &amp; Stok Toko Anda
                </h5>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                        <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Harga Jual Toko (Rp)</label>
                        <input type="number" id="imp-custom-price" value="${n}" class="w-full h-12 px-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-[16px] sm:text-sm font-bold text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)] shadow-2xs" placeholder="Contoh: 65000">
                    </div>
                    <div>
                        <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Harga Modal / HPP (Rp)</label>
                        <input type="number" id="imp-custom-hpp" value="${p}" class="w-full h-12 px-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-[16px] sm:text-sm font-bold text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)] shadow-2xs" placeholder="Contoh: 52000">
                    </div>
                    <div>
                        <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Stok Awal di Toko</label>
                        <input type="number" id="imp-custom-stock" value="${d}" class="w-full h-12 px-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-[16px] sm:text-sm font-bold text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)] shadow-2xs" placeholder="Contoh: 10">
                    </div>
                </div>
            </div>

            <!-- SELEKSI VARIANT CHECKLIST -->
            <div class="mb-5">
                <div class="flex items-center justify-between mb-2">
                    <h5 class="text-[11px] font-black uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                        <i class="fa-solid fa-list-check text-[var(--color-primary)]"></i> 2. Pilih Varian yang Dijual di Toko Anda
                    </h5>
                    <div class="flex items-center gap-2">
                        <button type="button" onclick="window.toggleAllImportVariants(true)" class="text-[10px] font-bold text-[var(--color-primary)] hover:underline cursor-pointer">Pilih Semua</button>
                        <span class="text-slate-300">&bull;</span>
                        <button type="button" onclick="window.toggleAllImportVariants(false)" class="text-[10px] font-bold text-slate-400 hover:underline cursor-pointer">Batal Semua</button>
                    </div>
                </div>

                <div class="custom-scrollbar max-h-56 overflow-y-auto space-y-2 p-1 border border-slate-200/80 dark:border-slate-700/80 rounded-2xl bg-slate-50/50 dark:bg-slate-900/30">
                    ${i.map((b,f)=>`
                        <label class="flex items-center justify-between gap-3 p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 cursor-pointer hover:border-[var(--color-primary)] transition-all min-h-[48px]">
                            <div class="flex items-center gap-3 min-w-0">
                                <input type="checkbox" id="imp-var-chk-${f}" data-idx="${f}" checked class="w-5 h-5 rounded accent-[var(--color-primary)] shrink-0 cursor-pointer">
                                ${b.colorCode?`
                                    <div class="w-6 h-6 rounded-full border border-slate-300 dark:border-slate-600 shadow-2xs shrink-0" style="background-color: ${u(b.colorCode)}"></div>
                                `:`
                                    <div class="w-6 h-6 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-400 flex items-center justify-center text-[10px] shrink-0 font-black">
                                        <i class="fa-solid fa-tag"></i>
                                    </div>
                                `}
                                <div class="min-w-0">
                                    <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${u(b.name)}</p>
                                    <p class="text-[9.5px] text-slate-400 font-mono">${b.sku?u(b.sku):"Auto SKU"} &bull; Satuan: ${u(b.unit||c)}</p>
                                </div>
                            </div>
                            <div class="text-right shrink-0">
                                <span class="text-xs font-black text-slate-700 dark:text-slate-200">${g(b.price||n)}</span>
                            </div>
                        </label>
                    `).join("")}
                </div>
            </div>

            <!-- CATATAN EDUKASI KLIEN -->
            <div class="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-300 text-[10.5px] leading-relaxed mb-6 flex items-center gap-2.5">
                <i class="fa-solid fa-shield-halved text-base shrink-0 text-amber-500"></i>
                <span><b>Salinan Aman Mandiri:</b> Produk ini akan diduplikasi secara lokal ke katalog toko Anda. Pengubahan harga jual atau stok toko tidak akan memengaruhi toko atau klien lain.</span>
            </div>

            <!-- TOMBOL AKSI -->
            <div class="flex gap-3">
                <button type="button" onclick="window._closeColorFloatModal()" class="flex-1 h-12 min-h-[48px] rounded-2xl border border-slate-200 dark:border-slate-700 font-bold text-slate-600 dark:text-slate-300 text-xs sm:text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer active:scale-95">
                    Batal
                </button>
                <button type="button" onclick="window.confirmExecuteMasterProductImport('${u(r.id)}')" class="flex-1 h-12 min-h-[48px] rounded-2xl primary-bg text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:opacity-95 active:scale-95 cursor-pointer transition-all">
                    <i class="fa-solid fa-cloud-arrow-down"></i>
                    <span>${t?"Simpan Pembaruan":"Konfirmasi Salin ke Toko"}</span>
                </button>
            </div>
        </div>
    `;window._openColorFloatModal(m)};window.toggleAllImportVariants=e=>{document.querySelectorAll('[id^="imp-var-chk-"]').forEach(a=>{a.checked=!!e})};const Br=async e=>{const a=Ze().find(m=>m.id===e);if(!a){x("Preset tidak ditemukan!");return}const r=parseFloat(k("imp-custom-price")?.value)||a.price||0,s=parseFloat(k("imp-custom-hpp")?.value)||a.hpp||0,o=parseFloat(k("imp-custom-stock")?.value)||0,i=[];if((a.variants||[]).forEach((m,b)=>{const f=k(`imp-var-chk-${b}`);f&&f.checked&&i.push({...m,price:r||m.price||0,priceNormal:m.priceNormal||0,hpp:s||m.hpp||0,stock:o,storeStock:o,warehouseStock:0,isActive:!0})}),i.length===0){x("Pilih minimal 1 varian untuk diimpor ke toko!");return}l.products||(l.products=[]);const n=l.products.findIndex(m=>(m.name||"").trim().toLowerCase()===a.name.trim().toLowerCase()),p=n>-1?l.products[n].id:Date.now(),d=String(p),c={id:p,name:a.name,brand:a.brand||"",category:a.category||"Bahan Bangunan",subCategory:a.subCategory||"",unit:a.unit||"Unit",desc:a.desc||"",img:a.img||"",specTable:a.specTable||[],price:r,priceNormal:a.priceNormal||0,hpp:s,stock:o*i.length,storeStock:o*i.length,warehouseStock:0,poin:5,tag:a.tag||"",isActive:!0,variants:i};n>-1?l.products[n]=c:l.products.unshift(c),l.categories||(l.categories=[]),a.category&&!l.categories.some(m=>(m.name||"").trim().toLowerCase()===a.category.trim().toLowerCase())&&l.categories.push({id:Date.now()+1,name:a.category,subCategories:[]}),l.brands||(l.brands=[]),a.brand&&!l.brands.some(m=>(m.name||"").trim().toLowerCase()===a.brand.trim().toLowerCase())&&l.brands.push({id:Date.now()+2,name:a.brand,img:""}),l.productOrder||(l.productOrder=[]),l.productOrder.includes(d)||l.productOrder.unshift(d),window._closeColorFloatModal(),R("Menyimpan produk ke database toko...");try{const m=typeof P<"u"&&P?P:window.db;m&&await m.collection("freshmart").doc("cms_data").collection("products").doc(d).set(c),await N(["productOrder","categories","brands"],{updateType:"product_single",updatedProductIds:[d]});try{localStorage.setItem("freshmart_products",JSON.stringify(l.products))}catch{}typeof window.refreshPOSCatalog=="function"&&window.refreshPOSCatalog(),typeof window.rDyn=="function"&&window.rDyn(),typeof window.rCat=="function"&&window.rCat(),x(`✅ "${a.name}" berhasil ditambahkan ke katalog toko Anda! Data tersimpan permanen.`),ee()}catch(m){console.error("[Master Preset] Gagal menyimpan:",m),x("Gagal menyimpan produk ke katalog toko: "+(m.message||""))}finally{C()}},Da=()=>{const t=Ze().filter(o=>!Qe(o).isImported);if(t.length===0){x("Semua template produk dari Database Bersama sudah ada di katalog toko Anda!");return}const a=t.reduce((o,i)=>o+(i.variants?.length||1),0),r=[...new Set(t.map(o=>o.category).filter(Boolean))],s=`
        <div class="p-5 sm:p-7 max-w-lg">
            <!-- HEADER MODAL -->
            <div class="flex items-start justify-between gap-3 mb-5 pb-3 border-b border-slate-100 dark:border-slate-700">
                <div class="flex items-center gap-3">
                    <div class="w-12 h-12 rounded-2xl primary-bg-soft text-[var(--color-primary)] flex items-center justify-center text-xl shrink-0">
                        <i class="fa-solid fa-cloud-arrow-down"></i>
                    </div>
                    <div>
                        <h3 class="text-base sm:text-lg font-black text-slate-800 dark:text-white leading-tight">
                            Salin Semua ke Toko
                        </h3>
                        <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Impor massal template master produk langsung ke etalase &amp; kasir POS.</p>
                    </div>
                </div>
                <button type="button" onclick="window._closeColorFloatModal()" class="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 text-slate-500 flex items-center justify-center cursor-pointer transition-all active:scale-95"><i class="fa-solid fa-xmark"></i></button>
            </div>

            <!-- RINGKASAN IMPOR MASSAL -->
            <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 mb-5 space-y-2">
                <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-slate-500 dark:text-slate-400">Total Produk Disalin:</span>
                    <span class="text-sm font-black text-[var(--color-primary)]">${t.length} Produk Master</span>
                </div>
                <div class="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                    <span>Total Varian Terbawa:</span>
                    <span class="font-bold text-slate-700 dark:text-slate-200">${a} Varian Lengkap</span>
                </div>
                <div class="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                    <span>Cakupan Kategori:</span>
                    <span class="font-bold text-slate-700 dark:text-slate-200">${r.length} Sektor (${r.slice(0,3).join(", ")}${r.length>3?"...":""})</span>
                </div>
            </div>

            <!-- FORM PENGATURAN CEPAT -->
            <div class="mb-5">
                <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Stok Awal per Varian di Toko</label>
                <input type="number" id="imp-all-default-stock" value="10" min="0" class="w-full h-12 px-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-[16px] sm:text-sm font-bold text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)] shadow-2xs" placeholder="Contoh: 10">
                <p class="text-[10px] text-slate-400 mt-1">Stok ini otomatis dialokasikan ke masing-masing varian yang disalin.</p>
            </div>

            <!-- PROTEKSI KEAMANAN CLOUD & LOKAL -->
            <div class="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-[10.5px] leading-relaxed mb-6 flex items-start gap-2.5">
                <i class="fa-solid fa-cloud-check text-base shrink-0 text-emerald-500 mt-0.5"></i>
                <span><b>Penyimpanan Permanen (Anti-Hilang):</b> Seluruh produk akan disimpan ke Cloud Firestore sub-koleksi dan Cache Lokal. Data tetap utuh dan tersimpan bahkan setelah halaman di-reload.</span>
            </div>

            <!-- TOMBOL AKSI -->
            <div class="flex gap-3">
                <button type="button" onclick="window._closeColorFloatModal()" class="flex-1 h-12 min-h-[48px] rounded-2xl border border-slate-200 dark:border-slate-700 font-bold text-slate-600 dark:text-slate-300 text-xs sm:text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer active:scale-95">
                    Batal
                </button>
                <button type="button" onclick="window.executeImportAllMasterPresets()" class="flex-1 h-12 min-h-[48px] rounded-2xl primary-bg text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:opacity-95 active:scale-95 cursor-pointer transition-all">
                    <i class="fa-solid fa-cloud-arrow-down"></i>
                    <span>Salin Semua (${t.length})</span>
                </button>
            </div>
        </div>
    `;window._openColorFloatModal(s)},_a=async()=>{const t=Ze().filter(r=>!Qe(r).isImported);if(t.length===0){window._closeColorFloatModal?.(),x("Semua template produk dari Database Bersama sudah ada di toko Anda!");return}const a=Math.max(0,parseInt(k("imp-all-default-stock")?.value||"10",10)||10);window._closeColorFloatModal?.(),R(`Menyimpan ${t.length} produk master ke database toko...`);try{const r=typeof P<"u"&&P?P:window.db;l.products||(l.products=[]),l.categories||(l.categories=[]),l.brands||(l.brands=[]),l.productOrder||(l.productOrder=[]);const s=[],o=[],i=Date.now();if(t.forEach((n,p)=>{const d=i+p,c=String(d),m=(n.variants||[]).map(f=>({...f,stock:a,storeStock:a,warehouseStock:0,isActive:!0})),b={id:d,name:n.name,brand:n.brand||"",category:n.category||"Bahan Bangunan",subCategory:n.subCategory||"",unit:n.unit||"Unit",desc:n.desc||"",img:n.img||"",specTable:n.specTable||[],price:n.price||m[0]?.price||0,priceNormal:n.priceNormal||0,hpp:n.hpp||m[0]?.hpp||0,stock:a*(m.length||1),storeStock:a*(m.length||1),warehouseStock:0,poin:5,tag:n.tag||"",isActive:!0,variants:m};s.push(b),l.products.unshift(b),o.push(c),l.productOrder.unshift(c),n.category&&!l.categories.some(f=>(f.name||"").trim().toLowerCase()===n.category.trim().toLowerCase())&&l.categories.push({id:i+1e3+p,name:n.category,subCategories:[]}),n.brand&&!l.brands.some(f=>(f.name||"").trim().toLowerCase()===n.brand.trim().toLowerCase())&&l.brands.push({id:i+2e3+p,name:n.brand,img:""})}),r)for(let p=0;p<s.length;p+=450){const d=s.slice(p,p+450),c=r.batch();d.forEach(m=>{const b=r.collection("freshmart").doc("cms_data").collection("products").doc(m.id.toString());c.set(b,m)}),await c.commit()}await N(["productOrder","categories","brands"],{updateType:"product_bulk",updatedProductIds:o});try{localStorage.setItem("freshmart_products",JSON.stringify(l.products))}catch{}typeof window.refreshPOSCatalog=="function"&&window.refreshPOSCatalog(),typeof window.rDyn=="function"&&window.rDyn(),typeof window.rCat=="function"&&window.rCat(),x(`✅ Berhasil menyalin ${s.length} produk ke katalog toko! Data tersimpan permanen.`),ee()}catch(r){console.error("[MasterPreset] Gagal impor semua produk:",r),x("Gagal menyalin semua produk: "+(r.message||""))}finally{C()}};window.confirmExecuteMasterProductImport=Br;window.confirmImportAllMasterPresets=Da;window.executeImportAllMasterPresets=_a;window.openExportStoreProductPicker=()=>{const e=l.products||[];if(e.length===0){x("Katalog produk toko Anda masih kosong!");return}const t=`
        <div class="p-5 sm:p-7 max-w-xl">
            <div class="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100 dark:border-slate-700">
                <h3 class="text-base font-black text-slate-800 dark:text-white flex items-center gap-2">
                    <i class="fa-solid fa-cloud-arrow-up text-[var(--color-primary)]"></i> Simpan Produk ke Pustaka Master
                </h3>
                <button type="button" onclick="window._closeColorFloatModal()" class="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 text-slate-500 flex items-center justify-center cursor-pointer transition-all active:scale-95"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <p class="text-xs text-slate-500 dark:text-slate-400 mb-4">Pilih produk dari katalog toko Anda untuk dijadikan master template bersama:</p>
            
            <div class="custom-scrollbar max-h-72 overflow-y-auto space-y-2.5 mb-5 p-1">
                ${e.map(a=>`
                    <div class="bento-island-card flex items-center justify-between gap-3 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-[var(--color-primary)] transition-all min-h-[52px]">
                        <div class="min-w-0">
                            <h5 class="text-xs font-bold text-slate-800 dark:text-white truncate">${u(a.name)}</h5>
                            <p class="text-[10px] text-slate-400 mt-0.5">${u(a.category||"Tanpa Kategori")} &bull; ${(a.variants||[]).length} Varian &bull; ${g(a.price||0)}</p>
                        </div>
                        <button type="button" onclick="window.confirmExportProductToMaster('${u(a.id)}')" class="h-10 min-h-[40px] px-4 rounded-xl primary-bg text-white font-bold text-xs uppercase tracking-wider hover:opacity-95 active:scale-95 cursor-pointer shrink-0 flex items-center justify-center">
                            Simpan
                        </button>
                    </div>
                `).join("")}
            </div>
        </div>
    `;window._openColorFloatModal(t)};window.confirmExportProductToMaster=async e=>{const t=(l.products||[]).find(s=>String(s.id)===String(e));if(!t){x("Produk tidak ditemukan!");return}l.custom_master_presets||(l.custom_master_presets=[]);const a=l.custom_master_presets.findIndex(s=>(s.name||"").toLowerCase()===(t.name||"").toLowerCase()),r={id:"custom-"+Date.now(),name:t.name,brand:t.brand||"",category:t.category||"Bahan Bangunan",subCategory:t.subCategory||"",unit:t.unit||"Unit",desc:t.desc||"",specTable:t.specTable||[],price:t.price||0,priceNormal:t.priceNormal||0,hpp:t.hpp||0,img:t.img||"",tag:"Koleksi Toko",variants:(t.variants||[]).map(s=>({name:s.name,price:s.price||t.price||0,priceNormal:s.priceNormal||0,hpp:s.hpp||t.hpp||0,unit:s.unit||t.unit||"Unit",colorCode:s.colorCode||"",sku:s.sku||"",stock:s.stock||0,storeStock:s.storeStock||0,warehouseStock:s.warehouseStock||0,isActive:!0}))};a>-1?l.custom_master_presets[a]=r:l.custom_master_presets.push(r),window._closeColorFloatModal(),R("Menyimpan ke Pustaka Master...");try{await N(["custom_master_presets"]),x(`"${t.name}" berhasil disimpan ke Database Bersama!`),ee()}catch{x("Gagal menyimpan ke pustaka master!")}finally{C()}};window.openAddColorModal=()=>{const a=`
        <div class="p-6">
            <h3 class="text-base font-black text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                <i class="fa-solid fa-plus text-[var(--color-primary)]"></i> Tambah Swatch Warna Baru
            </h3>
            <div class="space-y-4">
                <div>
                    <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Nama Warna</label>
                    <input id="new-color-name" class="w-full h-12 px-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-[16px] sm:text-sm font-bold text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)] shadow-2xs" placeholder="Contoh: Abu-Abu Muda">
                </div>
                <div>
                    <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Kode Warna (Hex)</label>
                    <div class="flex gap-3 items-center">
                        <input type="color" id="new-color-picker" value="#3b82f6" class="w-12 h-12 rounded-xl cursor-pointer" onchange="document.getElementById('new-color-hex').value=this.value">
                        <input id="new-color-hex" class="flex-1 h-12 px-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-[16px] sm:text-sm font-bold text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)] shadow-2xs" placeholder="#3B82F6" value="#3b82f6">
                    </div>
                </div>
                <div>
                    <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Katalog / Merek</label>
                    <input id="new-color-catalog" list="new-color-cat-list" class="w-full h-12 px-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-[16px] sm:text-sm font-bold text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)] shadow-2xs" placeholder="Contoh: No Drop, Dulux, Avian">
                    <datalist id="new-color-cat-list">${[...new Set((l.colors||[]).map(r=>r.catalog).filter(Boolean))].map(r=>`<option value="${u(r)}">${u(r)}</option>`).join("")}</datalist>
                </div>
            </div>
            <div class="flex gap-3 mt-6">
                <button type="button" onclick="window._closeColorFloatModal()" class="flex-1 h-12 min-h-[48px] rounded-2xl border border-slate-200 dark:border-slate-700 font-bold text-xs sm:text-sm text-slate-500 cursor-pointer active:scale-95 transition-all">Batal</button>
                <button type="button" onclick="window.confirmSaveNewColor()" class="flex-1 h-12 min-h-[48px] rounded-2xl primary-bg text-white font-bold text-xs sm:text-sm uppercase cursor-pointer shadow-md active:scale-95 transition-all">Simpan</button>
            </div>
        </div>
    `;window._openColorFloatModal(a)};window.confirmSaveNewColor=async()=>{const e=(k("new-color-name")?.value||"").trim(),t=(k("new-color-hex")?.value||"").trim(),a=(k("new-color-catalog")?.value||"").trim();if(!e){x("Nama warna wajib diisi!");return}l.colors||(l.colors=[]),l.colors.push({id:Date.now(),name:e,hex:t,catalog:a}),window._closeColorFloatModal(),R("Menyimpan warna...");try{await N(["colors"]),x(`Warna "${e}" berhasil ditambahkan!`),ee()}catch{x("Gagal menyimpan warna!")}finally{C()}};window.deleteColorFromDB=async e=>{if(confirm("Hapus warna ini dari database swatch?")&&!(!l.colors||!l.colors[e])){l.colors.splice(e,1),R("Menghapus warna...");try{await N(["colors"]),x("Warna berhasil dihapus!"),ee()}catch{x("Gagal menghapus warna!")}finally{C()}}};const Lr=async e=>{if(!e)return;const a=[...Xt,...l.custom_master_presets||[]].find(o=>o.id===e),r=a?a.name:"Template Produk";await ce("Hapus Template Master?",`Apakah Anda yakin ingin menghapus template "${r}" dari Database Produk Bersama? Template ini tidak akan lagi muncul di daftar pustaka.${a&&!e.startsWith("custom-")?" Anda dapat memulihkannya kembali sewaktu-waktu melalui tombol Pulihkan Template.":""}`,null,"Ya, Hapus Template",!0)&&await Ea(e)},Ea=async e=>{if(e){R("Menghapus template master...");try{let t="Template Produk";if(l.custom_master_presets&&l.custom_master_presets.some(a=>a.id===e)){const a=l.custom_master_presets.findIndex(r=>r.id===e);a>-1&&(t=l.custom_master_presets[a].name||t,l.custom_master_presets.splice(a,1),await N(["custom_master_presets"]))}else{l.deleted_master_preset_ids||(l.deleted_master_preset_ids=[]),l.deleted_master_preset_ids.includes(e)||(l.deleted_master_preset_ids.push(e),await N(["deleted_master_preset_ids"]));const a=Xt.find(r=>r.id===e);a&&(t=a.name)}x(`Template "${t}" berhasil dihapus dari pustaka.`),ee()}catch(t){console.error("[MasterPresets] Error deleting preset:",t),x("Gagal menghapus template master produk!")}finally{C()}}},Rr=async()=>{const e=(l.deleted_master_preset_ids||[]).length;if(e===0){x("Tidak ada template bawaan yang dihapus.");return}if(await ce("Pulihkan Template Bawaan?",`Kembalikan ${e} template produk master bawaan sistem yang pernah dihapus ke Database Produk Bersama?`,null,"Ya, Pulihkan Semua",!1)){R("Memulihkan template bawaan...");try{l.deleted_master_preset_ids=[],await N(["deleted_master_preset_ids"]),x("Semua template master bawaan berhasil dipulihkan!"),ee()}catch(a){console.error("[MasterPresets] Error restoring presets:",a),x("Gagal memulihkan template bawaan!")}finally{C()}}};window.rAdmMasterCatalogView=ee;window.renderMasterCatalogView=ee;window.confirmDeleteMasterPreset=Lr;window.executeDeleteMasterPreset=Ea;window.restoreDeletedMasterPresets=Rr;window.confirmImportAllMasterPresets=Da;window.executeImportAllMasterPresets=_a;const Nr=()=>{let e=k("modal-pricelist-export");e||(e=document.createElement("div"),e.id="modal-pricelist-export",e.className="fixed inset-0 z-[150] flex hidden items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/80 opacity-0 transition-opacity duration-300",e.onclick=t=>{t.target===e&&window.closePriceListExportModal?.()},e.innerHTML=`
            <div id="modal-pricelist-export-box" class="modal-bottom-sheet relative flex max-h-[92dvh] sm:max-h-[88dvh] w-full max-w-xl translate-y-full sm:translate-y-10 transform flex-col overflow-hidden rounded-t-[2rem] sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm transition-transform duration-300">
                <!-- Pull Indicator Pill for Mobile Swipe -->
                <div class="w-12 h-1.5 bg-slate-300 dark:bg-slate-600 rounded-full mx-auto my-2.5 sm:hidden shrink-0"></div>

                <!-- Header Modal Solid Clean -->
                <div class="px-5 py-4 border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between gap-3 shrink-0 bg-slate-50 dark:bg-slate-800">
                    <div class="flex items-center gap-3 min-w-0">
                        <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-xs" style="background: var(--color-primary);">
                            <i class="fa-solid fa-file-pdf text-lg"></i>
                        </div>
                        <div class="min-w-0">
                            <h3 class="text-base font-extrabold text-slate-900 dark:text-white truncate">Ekspor Brosur &amp; Daftar Harga</h3>
                            <p class="text-xs text-slate-500 dark:text-slate-400 font-medium truncate">Katalog Cepat untuk Kontraktor &amp; Tukang (PDF / WA)</p>
                        </div>
                    </div>
                    <button onclick="window.closePriceListExportModal()" type="button" class="w-9 h-9 rounded-xl flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0 cursor-pointer" title="Tutup">
                        <i class="fa-solid fa-xmark text-lg"></i>
                    </button>
                </div>

                <!-- Modal Body (Scrollable) -->
                <div class="flex-1 overflow-y-auto custom-scrollbar p-5 space-y-4">
                    <!-- Filter Kategori -->
                    <div>
                        <label for="pl-filter-category" class="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                            <i class="fa-solid fa-layer-group text-[var(--color-primary)] mr-1"></i> Pilih Kategori Produk:
                        </label>
                        <div class="relative">
                            <select id="pl-filter-category" onchange="window.updatePriceListSummaryPill()" class="w-full h-11 px-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 text-slate-800 dark:text-slate-100 font-bold text-[16px] sm:text-xs border border-slate-200 dark:border-slate-700/80 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15 transition-all cursor-pointer">
                                <!-- Populated dynamically -->
                            </select>
                        </div>
                    </div>

                    <!-- Filter Pencarian Spesifik -->
                    <div>
                        <label for="pl-filter-search" class="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                            <i class="fa-solid fa-magnifying-glass text-slate-400 mr-1"></i> Filter Kata Kunci / Merek (Opsional):
                        </label>
                        <div class="relative">
                            <input type="text" id="pl-filter-search" placeholder="Contoh: Semen Gresik, Pipa PVC, Holo..." oninput="window.updatePriceListSummaryPill()" class="w-full h-11 px-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 text-slate-800 dark:text-slate-100 font-medium text-[16px] sm:text-xs border border-slate-200 dark:border-slate-700/80 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15 transition-all">
                        </div>
                    </div>

                    <!-- Pengaturan Opsi Tampilan -->
                    <div class="bg-slate-50 dark:bg-slate-800/40 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 space-y-2.5">
                        <span class="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                            <i class="fa-solid fa-sliders mr-1 text-[var(--color-primary)]"></i> Opsi Format Konten:
                        </span>
                        
                        <label class="flex items-center gap-3 cursor-pointer select-none">
                            <input type="checkbox" id="pl-opt-variants" checked onchange="window.updatePriceListSummaryPill()" class="w-4 h-4 rounded text-[var(--color-primary)] focus:ring-[var(--color-primary)] border-slate-300 cursor-pointer">
                            <span class="text-xs font-semibold text-slate-700 dark:text-slate-200">Sertakan Rincian Multi-Varian &amp; Multi-Satuan</span>
                        </label>

                        <label class="flex items-center gap-3 cursor-pointer select-none">
                            <input type="checkbox" id="pl-opt-wholesale" checked onchange="window.updatePriceListSummaryPill()" class="w-4 h-4 rounded text-[var(--color-primary)] focus:ring-[var(--color-primary)] border-slate-300 cursor-pointer">
                            <span class="text-xs font-semibold text-slate-700 dark:text-slate-200">Tampilkan Kolom Harga Grosir / Borongan Proyek</span>
                        </label>

                        <label class="flex items-center gap-3 cursor-pointer select-none">
                            <input type="checkbox" id="pl-opt-stock" checked onchange="window.updatePriceListSummaryPill()" class="w-4 h-4 rounded text-[var(--color-primary)] focus:ring-[var(--color-primary)] border-slate-300 cursor-pointer">
                            <span class="text-xs font-semibold text-slate-700 dark:text-slate-200">Tampilkan Status Ketersediaan (Ready Stock / Inden)</span>
                        </label>

                        <label class="flex items-center gap-3 cursor-pointer select-none">
                            <input type="checkbox" id="pl-opt-inactive" onchange="window.updatePriceListSummaryPill()" class="w-4 h-4 rounded text-[var(--color-primary)] focus:ring-[var(--color-primary)] border-slate-300 cursor-pointer">
                            <span class="text-xs font-semibold text-slate-700 dark:text-slate-200">Sertakan Produk Nonaktif / Diarsipkan</span>
                        </label>
                    </div>

                    <!-- Dynamic Live Counter Pill -->
                    <div id="pl-summary-pill" class="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-between text-xs font-bold text-emerald-800 dark:text-emerald-300">
                        <span class="flex items-center gap-2">
                            <i class="fa-solid fa-circle-check text-emerald-600"></i>
                            <span id="pl-summary-count-text">0 Produk terpilih</span>
                        </span>
                        <span class="text-[10.5px] font-normal text-emerald-700 dark:text-emerald-400">Siap diekspor</span>
                    </div>
                </div>

                <!-- Footer Modal with 2 Primary Action Buttons -->
                <div class="p-4 sm:p-5 border-t border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 flex flex-col sm:flex-row gap-2.5 shrink-0">
                    <!-- Button WhatsApp -->
                    <button onclick="window.executePriceListExport('wa')" type="button" class="flex-1 h-12 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2.5 active:scale-95 transition-all shadow-xs cursor-pointer" title="Salin teks daftar harga rapi untuk WhatsApp">
                        <i class="fa-brands fa-whatsapp text-lg"></i>
                        <div class="text-left">
                            <div class="leading-tight">Salin Teks WhatsApp</div>
                            <div class="text-[10px] font-normal opacity-90">1-Klik Paste ke Chat/Grup</div>
                        </div>
                    </button>

                    <!-- Button PDF A4 -->
                    <button onclick="window.executePriceListExport('pdf')" type="button" class="flex-1 h-12 px-4 rounded-2xl text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2.5 active:scale-95 transition-all shadow-xs cursor-pointer" style="background: var(--color-primary);" title="Buka preview cetak A4 resmi dengan kop surat toko">
                        <i class="fa-solid fa-file-pdf text-lg"></i>
                        <div class="text-left">
                            <div class="leading-tight">Preview &amp; Cetak PDF</div>
                            <div class="text-[10px] font-normal opacity-90">Kop Resmi A4 Presisi</div>
                        </div>
                    </button>
                </div>
            </div>
        `,document.body.appendChild(e))},Zt=(e={})=>{const t=e.category||"",a=(e.search||"").toLowerCase().trim(),r=e.includeInactive===!0;return(e.products||l.products||[]).filter(o=>{if(!r&&(o.isActive===!1||o.isActive==="false")||t&&t!=="all"&&(o.category||"").toLowerCase()!==t.toLowerCase())return!1;if(a){const i=(o.name||"").toLowerCase().includes(a),n=(o.sku||o.barcode||"").toLowerCase().includes(a),p=(o.category||"").toLowerCase().includes(a),d=(o.brand||"").toLowerCase().includes(a);if(!i&&!n&&!p&&!d)return!1}return!0})},ja=()=>{const e=k("pl-filter-category"),t=k("pl-filter-search"),a=k("pl-opt-inactive"),r={category:e?e.value:"all",search:t?t.value:"",includeInactive:a?a.checked:!1},s=Zt(r).length,o=k("pl-summary-count-text");o&&(o.textContent=`${s} Produk terpilih`)},Dr=()=>{Nr();const e=k("pl-filter-category");if(e){const s=l.products||[],o=Array.isArray(l.categories)?l.categories:[],i=new Map;s.forEach(p=>{const d=(p.category||"Lainnya").trim();i.set(d,(i.get(d)||0)+1)}),o.forEach(p=>{const d=typeof p=="string"?p:p.name||"";d&&!i.has(d)&&i.set(d,0)});let n=`<option value="all">Semua Kategori (${s.length} Produk)</option>`;Array.from(i.entries()).sort((p,d)=>p[0].localeCompare(d[0])).forEach(([p,d])=>{n+=`<option value="${u(p)}">${u(p)} (${d} Produk)</option>`}),e.innerHTML=n,e.value="all"}const t=k("pl-filter-search");t&&(t.value=""),ja();const a=k("modal-pricelist-export"),r=k("modal-pricelist-export-box");a&&a.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("priceListExport"),pe(a,r)},Oa=(e=!1)=>{const t=k("modal-pricelist-export"),a=k("modal-pricelist-export-box");t&&(!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("priceListExport",!1,()=>Y(t,a)):Y(t,a))},Fa=(e={})=>{const t=e.category||"",a=e.includeVariants!==!1,r=e.includeWholesale!==!1,s=e.includeStock!==!1,o=e.store||l.store||{},i=o.name||"Toko Putri",n=o.slogan||"Pusat Bahan Bangunan & Alat Teknik",p=o.address||"",c=(o.wa||o.phone||"").replace(/[^0-9]/g,""),m=Zt(e);m.sort((w,v)=>{const S=(w.category||"Lainnya").toLowerCase(),$=(v.category||"Lainnya").toLowerCase();return S!==$?S.localeCompare($):(w.name||"").localeCompare(v.name||"")});const f=new Date().toLocaleDateString("id-ID",{day:"2-digit",month:"short",year:"numeric"});let h=[];if(h.push("📋 *KATALOG & DAFTAR HARGA MATERIAL*"),h.push(`*${i.toUpperCase()}*`),h.push(`_${n}_`),p&&h.push(`📍 ${p}`),c&&h.push(`📞 WhatsApp: https://wa.me/${c}`),h.push(`📅 Tanggal: ${f}`),t&&t!=="all"&&h.push(`🏷️ Kategori: *${t.toUpperCase()}*`),h.push("━━━━━━━━━━━━━━━━━━━━━"),h.push(`💡 _Catatan: Harga sewaktu-waktu dapat berubah mengikuti fluktuasi pabrik._
`),m.length===0)h.push(`_Tidak ada produk yang sesuai dengan filter._
`);else{let w="",v=1;m.forEach(S=>{const $=(S.category||"LAINNYA").toUpperCase();$!==w&&(!t||t==="all")&&(w=$,h.push(`
📂 *[ ${w} ]*`),v=1);const B=(S.unit||"pcs").toUpperCase(),I=g(S.price||0),y=(parseFloat(S.stock)||0)>0?"Ready ✅":"PO / Inden ⏳";if(h.push(`
*${v}. ${S.name.toUpperCase()}*`),h.push(`   • Satuan: ${B}`),h.push(`   • Eceran: ${I}`),r)if(Array.isArray(S.wholesale)&&S.wholesale.length>0){const M=S.wholesale.map(L=>`≥${L.min} ${B}: ${g(L.price)}`).join(", ");h.push(`   • Grosir: ${M}`)}else S.wholesalePrice&&S.wholesalePrice<S.price&&h.push(`   • Grosir: ${g(S.wholesalePrice)} (Min. ${S.wholesaleMin||10} ${B})`);if(a&&Array.isArray(S.variants)&&S.variants.length>0){const M=S.variants.map(L=>`${L.name}${L.price?` (${g(L.price)})`:""}`).join(", ");h.push(`   • Varian: ${M}`)}if(a&&Array.isArray(S.multiUnits)&&S.multiUnits.length>0){const M=S.multiUnits.map(L=>`${L.name} (${L.multiplier} ${B}) @ ${g(L.price)}`).join(", ");h.push(`   • Multi-Satuan: ${M}`)}s&&h.push(`   • Status: ${y}`),v++})}return h.push(`
━━━━━━━━━━━━━━━━━━━━━`),h.push("🚛 *Pemesanan Cepat, Borongan & Proyek:*"),h.push("Hubungi WhatsApp resmi kami:"),h.push(`👉 https://wa.me/${c}?text=Halo%20Admin%20${encodeURIComponent(i)},%20saya%20ingin%20tanya%20harga%20dan%20stok%20material.`),h.join(`
`)},Ka=async(e={})=>{try{const t=Fa(e);if(navigator.clipboard&&typeof navigator.clipboard.writeText=="function")await navigator.clipboard.writeText(t);else{const a=document.createElement("textarea");a.value=t,a.style.position="fixed",a.style.top="-9999px",document.body.appendChild(a),a.focus(),a.select(),document.execCommand("copy"),document.body.removeChild(a)}return x("Format WhatsApp berhasil disalin ke clipboard! Siap dipaste."),!0}catch(t){return console.error("Gagal menyalin format WhatsApp:",t),x("Gagal menyalin teks: "+(t.message||"Izin clipboard ditolak")),!1}},_r=async(e="pdf")=>{const t=k("pl-filter-category"),a=k("pl-filter-search"),r=k("pl-opt-variants"),s=k("pl-opt-wholesale"),o=k("pl-opt-stock"),i=k("pl-opt-inactive"),n={category:t?t.value:"all",search:a?a.value.trim():"",includeVariants:r?r.checked:!0,includeWholesale:s?s.checked:!0,includeStock:o?o.checked:!0,includeInactive:i?i.checked:!1};if(e==="pdf"){const p=k("modal-pricelist-export"),d=k("modal-pricelist-export-box");if(p&&d&&Y(p,d),typeof za=="function")za("priceListExport","docPreview");else if(typeof window.replaceModalHistory=="function")window.replaceModalHistory("priceListExport","docPreview");else{const c=Qa.lastIndexOf("priceListExport");if(c>-1&&Qa.splice(c,1),typeof history<"u"&&history.state&&history.state.modal==="priceListExport")try{history.replaceState({modal:"docPreview"},"",window.location.href)}catch{}}typeof window.openDocPreview=="function"?window.openDocPreview("pricelist",n):x("Modul dokumen cetak belum siap.")}else e==="wa"&&await Ka(n)&&Oa()};typeof window<"u"&&(window.openPriceListExportModal=Dr,window.closePriceListExportModal=Oa,window.executePriceListExport=_r,window.updatePriceListSummaryPill=ja,window.formatPriceListWhatsApp=Fa,window.copyPriceListWhatsApp=Ka,window.getFilteredPriceListProducts=Zt);let wt="products";const et=e=>{wt=e,window.cTab=e};let Oe="";const Er=e=>{Oe=e,window.aSq=e};let re=null;const Ua=e=>{re=e,window.eId=e};let Re=!1;const G=e=>{Re=e};let O=[];const tt=e=>{O=e};let ie=[];const ea=e=>{ie=e};let ne=[];const ta=e=>{ne=e};let Q=[];const vt=e=>{Q=e,window.tMultiUnits=e};let de=[];const at=e=>{de=e,window.tSubCats=e};window.setCTab=et;window.setASq=Er;window.setEId=Ua;window.setTSubCats=at;window.setTMultiUnits=vt;const me=(e,t,a)=>{console.error(`[AdminRouter] Gagal memuat modul ${e}:`,a),_("admin-content",`
        <div class="max-w-md mx-auto my-12 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-center">
            <div class="w-14 h-14 mx-auto mb-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 text-rose-500 flex items-center justify-center text-2xl">
                <i class="fa-solid fa-triangle-exclamation"></i>
            </div>
            <h3 class="font-extrabold text-base text-slate-800 dark:text-white mb-1">Gagal Memuat ${e}</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
                Modul gagal diunduh dari server. Hal ini biasanya terjadi jika koneksi terputus atau versi aplikasi baru saja diperbarui di server.
            </p>
            <div class="flex items-center justify-center gap-3">
                <button type="button" onclick="openAdminTab('${t}')" class="px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-200 transition-all cursor-pointer active:scale-95">
                    <i class="fa-solid fa-rotate-right mr-1.5"></i> Coba Lagi
                </button>
                <button type="button" onclick="window.location.reload()" class="px-4 py-2.5 rounded-xl text-white text-xs font-black shadow-sm transition-all cursor-pointer active:scale-95 hover:opacity-95" style="background: var(--color-primary);">
                    <i class="fa-solid fa-arrows-rotate mr-1.5"></i> Segarkan Halaman
                </button>
            </div>
        </div>
    `)};typeof window.openExpenseModal!="function"&&(window.openExpenseModal=(e=null)=>{J(()=>import("./expenses-D6-Kp1_a.js"),__vite__mapDeps([6,1,2,3,0,4,5,7]),import.meta.url).then(t=>{t&&typeof t.openExpenseModal=="function"&&t.openExpenseModal(e)}).catch(t=>{console.error("[Expenses] Gagal memuat modal pengeluaran via proxy:",t),x("Gagal memuat form pengeluaran.")})});typeof window.openDeliveryModal!="function"&&(window.openDeliveryModal=e=>{J(()=>import("./delivery-BmHWCKAX.js"),__vite__mapDeps([8,1,2,3]),import.meta.url).then(t=>{t&&typeof t.openDeliveryModal=="function"&&t.openDeliveryModal(e)}).catch(t=>{console.error("[Delivery] Gagal memuat modul pengiriman via proxy:",t),x("Gagal memuat form pengiriman.")})});typeof window.openSalesReturnModal!="function"&&(window.openSalesReturnModal=(e=null)=>{J(()=>import("./returns-ByHxB36l.js"),__vite__mapDeps([9,1,2,3,0,4,5]),import.meta.url).then(t=>{t&&typeof t.openSalesReturnModal=="function"&&t.openSalesReturnModal(e)}).catch(t=>{console.error("[Returns] Gagal memuat modul retur via proxy:",t),x("Gagal memuat form retur.")})});typeof window.deleteSalesReturn!="function"&&(window.deleteSalesReturn=e=>{J(()=>import("./returns-ByHxB36l.js"),__vite__mapDeps([9,1,2,3,0,4,5]),import.meta.url).then(t=>{t&&typeof t.deleteSalesReturn=="function"&&t.deleteSalesReturn(e)}).catch(t=>{console.error("[Returns] Gagal memanggil deleteSalesReturn via proxy:",t)})});typeof window.deleteVendorReturn!="function"&&(window.deleteVendorReturn=e=>{J(()=>import("./returns-ByHxB36l.js"),__vite__mapDeps([9,1,2,3,0,4,5]),import.meta.url).then(t=>{t&&typeof t.deleteVendorReturn=="function"&&t.deleteVendorReturn(e)}).catch(t=>{console.error("[Returns] Gagal memanggil deleteVendorReturn via proxy:",t)})});const jr=(e,t=!1)=>{if(!pt(e==="staff"?"cashiers":e)){x("Akses Dibatasi: Akun Anda tidak memiliki izin untuk membuka modul ini."),typeof window.openAdminMenu=="function"&&window.openAdminMenu();return}const r=document.querySelector("#view-admin .scroll-content");r&&(r.scrollTop=0),typeof window.hideFloatingScrollTop=="function"&&window.hideFloatingScrollTop();const s=k("view-admin");if(s&&(e==="pos"?s.classList.add("admin-pos-mode"):s.classList.remove("admin-pos-mode")),ts(e),oo(""),!t){const i=history.state;i&&i.view==="view-admin"&&i.tab?history.replaceState({view:"view-admin",tab:e},"",window.location.href):history.pushState({view:"view-admin",tab:e},"",window.location.href)}if(nt("admin-dashboard-view"),We("admin-content-view"),We("btn-admin-back"),nt("admin-logo-box"),Ee("admin-header-title",{orders:"Pesanan",settings:"Toko",products:"Produk",categories:"Kategori",brands:"Merek",banks:"Rekening",banners:"Banner",vouchers:"Voucher",customers:"Database Pelanggan",rewards:"Program Hadiah",reviews:"Ulasan Pelanggan",faqs:"Tanya Jawab / Q&A",reports:"Pusat Laporan & Keuangan",tax:"Pusat Laporan & Keuangan",expenses:"Biaya Operasional Toko",stock_opname:"Stock Opname (Audit Fisik)",returns:"Retur Barang (RMA)",flash_sale:"Flash Sale (Promo Kilat)",piutang:"Piutang Tempo",colors:"Database Produk Bersama",changelog:"Log Pembaruan Sistem",suppliers:"Supplier & Rekanan",purchases:"Order Pembelian & Hutang PO",pos:"Kasir POS",cashiers:"Kelola Staf & Hak Akses",staff:"Kelola Staf & Hak Akses",backup_sync:"Pusat Data & Sinkronisasi"}[e]||"CMS"),e!=="orders"&&Me&&(Me(),dt(null)),e!=="customers"&&Ae&&(Ae(),ot(null)),e!=="reviews"&&Te&&(Te(),lt(null)),e==="settings")typeof window.rAdmSet=="function"&&window.rAdmSet();else if(e==="orders")typeof window.rAdmOrd=="function"&&window.rAdmOrd();else if(e==="reports"||e==="tax")J(()=>import("./reports-Ch5qwaRr.js"),__vite__mapDeps([10,1,2,3,11,0,4,5,7]),import.meta.url).then(i=>i.renderReportsHubView(e==="tax"?"tax":null)).catch(i=>{me("Pusat Laporan & Keuangan",e,i)});else if(e==="piutang")typeof window.rAdmPiutang=="function"&&window.rAdmPiutang();else if(e==="flash_sale")J(()=>import("./flash-sale-5QLNYNUM.js"),__vite__mapDeps([12,1,2,3,0,4,5]),import.meta.url).then(i=>i.renderFlashSaleAdminView()).catch(i=>{me("Flash Sale & Promo Kilat",e,i)});else if(e==="suppliers")J(()=>import("./suppliers-x3899QWH.js"),__vite__mapDeps([13,1,2,3,0,4,5]),import.meta.url).then(i=>i.renderSuppliersView()).catch(i=>{me("Supplier & Rekanan",e,i)});else if(e==="purchases")J(()=>import("./purchases-BuuamdRe.js"),__vite__mapDeps([11,1,2,3,0,4,5]),import.meta.url).then(i=>i.renderPurchasesView()).catch(i=>{me("Order Pembelian (PO)",e,i)});else if(e==="expenses")J(()=>import("./expenses-D6-Kp1_a.js"),__vite__mapDeps([6,1,2,3,0,4,5,7]),import.meta.url).then(i=>i.renderExpensesAdminView()).catch(i=>{me("Biaya Operasional Toko",e,i)});else if(e==="stock_opname")J(()=>import("./stock-opname-Bx0KpKri.js"),__vite__mapDeps([14,1,2,3,0,4,5]),import.meta.url).then(i=>i.renderStockOpnameView()).catch(i=>{me("Stock Opname (Audit Fisik)",e,i)});else if(e==="returns")J(()=>import("./returns-ByHxB36l.js"),__vite__mapDeps([9,1,2,3,0,4,5]),import.meta.url).then(i=>i.renderReturnsView()).catch(i=>{me("Retur Barang & RMA",e,i)});else if(e==="customers"){_("admin-content",'<div class="text-center py-16"><i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i></div>'),Ae&&(Ae(),ot(null));const i=P.collection("freshmart").doc("cms_data").collection("customers").onSnapshot(n=>{l.customers=n.docs.map(p=>{const d=p.data();return parseFloat(d.paylaterUsed)<0&&(d.paylaterUsed=0,p.ref.update({paylaterUsed:0}).catch(()=>{})),d}),typeof window.rAdmL=="function"&&window.rAdmL("customers")},()=>{x("Gagal memuat data pelanggan!"),typeof window.rAdmL=="function"&&window.rAdmL("customers")});ot(i)}else if(e==="reviews"){_("admin-content",'<div class="text-center py-16"><i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i></div>'),Te&&(Te(),lt(null));const i=P.collection("freshmart").doc("cms_data").collection("reviews").onSnapshot(n=>{const p=n.docs.map(d=>d.data());p.sort((d,c)=>{const m=d.createdAt&&d.createdAt.toMillis?d.createdAt.toMillis():0;return(c.createdAt&&c.createdAt.toMillis?c.createdAt.toMillis():0)-m}),ro(p),typeof window.rAdmReviews=="function"&&window.rAdmReviews()},()=>{x("Gagal memuat ulasan!")});lt(i)}else e==="faqs"?typeof window.rAdmFAQ=="function"&&window.rAdmFAQ():e==="changelog"?typeof window.rAdmChangelog=="function"&&window.rAdmChangelog():e==="rewards"?(typeof window.attachRewardsRealtime=="function"&&window.attachRewardsRealtime(),typeof window.rAdmL=="function"&&window.rAdmL("rewards")):e==="pos"?typeof window.openPOSCashierMode=="function"?window.openPOSCashierMode():J(()=>import("./module-pos-BTl17EoF.js").then(i=>i.X),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(i=>{typeof i.openPOSCashierMode=="function"?i.openPOSCashierMode():typeof window.openPOSCashierMode=="function"&&window.openPOSCashierMode()}).catch(()=>{J(()=>import("./module-pos-BTl17EoF.js").then(i=>i.Y),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(i=>{typeof i.renderPOSStorefront=="function"?i.renderPOSStorefront():typeof i.renderPOS=="function"&&i.renderPOS()}).catch(i=>{me("Kasir POS",e,i)})}):e==="cashiers"||e==="staff"?J(()=>import("./pos-cashier-admin-DddlzbRr.js"),__vite__mapDeps([15,1,2,3,0,4,5]),import.meta.url).then(i=>i.renderCashierAccounts()).catch(i=>{me("Kelola Staf & Hak Akses",e,i)}):e==="backup_sync"?J(()=>import("./backup-sync-Dvuv86km.js"),__vite__mapDeps([16,1,2,3,0,4,5,7]),import.meta.url).then(i=>i.renderBackupSyncView()).catch(i=>{me("Pusat Data & Sinkronisasi",e,i)}):e==="colors"&&typeof window.rAdmMasterCatalogView=="function"?window.rAdmMasterCatalogView():typeof window.rAdmL=="function"&&window.rAdmL(e)};window.openAdminTab=jr;const il=Object.freeze(Object.defineProperty({__proto__:null,BUILTIN_MASTER_PRESETS:Xt,EXPENSE_CATEGORIES:wo,MONTH_NAMES:xe,aF:Nt,get aSq(){return Oe},ackRewardClaim:hs,adjustBarcodeLabelQty:Ar,applyStaffMenuPermissions:ps,applyTaxPresetRI:Us,approveTempoPaymentConfirmation:lr,attachAdminSessionGuard:ut,backupData:js,get cTab(){return wt},calculateTodayCashflow:cs,changeTaxMonth:qs,changeTaxYear:Ws,checkAdminAccess:xa,checkPresetStoreStatus:Qe,claimAdminSession:Se,closeHeroBannerModal:Aa,closeOrderDetailModal:ha,closePriceListExportModal:Oa,closeProductBarcodeLabelModal:vr,closeSessionKickedModal:ua,closeTempoConfirmationsModal:Jt,closeTempoDetailModal:er,closeTempoPaymentModal:ar,closeTempoPenaltyModal:rr,computeInventoryStats:Lt,confirmDeleteMasterPreset:Lr,confirmExecuteMasterProductImport:Br,confirmImportAllMasterPresets:Da,confirmLogoutAdmin:us,copyPriceListWhatsApp:Ka,deductOrderStockAndRewards:ws,deleteOrder:Ps,deleteReview:br,detachAdminSessionGuard:bt,detachAllAdminListenersBeforeSignOut:qe,detectAdminGPS:Es,get eId(){return re},ensurePriceListExportModal:Nr,ensureProductBarcodeLabelModal:hr,ensureTempoModals:Ye,executeDeleteMasterPreset:Ea,executeImportAllMasterPresets:_a,executePriceListExport:_r,exportOrdersToExcel:bs,exportTempoCSV:cr,fetchTaxPeriodData:Ut,filterReviews:pr,formatPriceListWhatsApp:Fa,get gTaxMonthly(){return le},getAllMasterPresets:Ze,getDeviceLabel:ds,getEffHpp:Hs,getFactoryResetDangerCardHtml:Pa,getFilteredPriceListProducts:Zt,getTaxPeriodExpenses:Ht,getTaxPeriodTotals:ze,getTempoOrderCalculations:te,handleManualCoordChange:Ns,handleSmartMapsInput:Kt,isCurrentSessionActive:ba,isLoggingIn:pa,get isSaving(){return Re},konfirmasiKeWA:ys,konfirmasiKeWAPenerima:Ss,loadAdminReport:fa,logoutAdmin:ga,openAdminMenu:Je,openAdminTab:jr,openHeroBannerModal:Fs,openOrderDetail:Et,openPriceListExportModal:Dr,openProductBarcodeLabelModal:wr,openSettingForm:Cs,openTaxDocPreview:Xs,openTempoConfirmationsModal:or,openTempoDetailModal:Zs,openTempoPaymentModal:tr,openTempoPenaltyModal:sr,pasteFromClipboardToMapsInput:Ds,playNewOrderSound:xs,previewStoreOnMaps:_s,printBarcodeLabelsBrowser:Ir,printBarcodeLabelsThermalRawbt:Mr,printTempoRecapA4:dr,processAdminLogin:ms,rAdmOrd:gs,rAdmPiutang:Qt,rAdmReviews:Ra,rAdmSet:Sa,rTaxBalance:Wt,rTaxIncome:Vt,rTaxPanel:Gs,rTaxRenderShell:Gt,rTaxSettingsPanel:$a,rTaxSubContent:ft,rTaxSummary:Ta,rejectTempoPaymentConfirmation:ir,renderBarcodeLabelModalContent:kt,renderDashboardCashflowWidget:Dt,renderMasterCatalogView:ee,renderOrdersList:ka,replyToReview:mr,restoreData:Os,restoreDeletedMasterPresets:Rr,restoreOrderStockAndRewards:wa,saveAdminSettings:Rs,saveBalanceField:zs,saveHeroBannerModal:Ks,saveMonthlyExpense:Js,saveOrderCustomerToDB:ks,saveTaxSettingsPanel:Ys,selectBarcodePreviewIndex:Pr,selectBgStyle:Ms,selectPresetTheme:Is,setASq:Er,setAllBarcodeLabelQty:$r,setBarcodeLabelPaper:yr,setBarcodeLabelQtyDirect:Tr,setCTab:et,setEId:Ua,setIsSaving:G,setLoggingIn:It,setOrderSourceFilter:fs,setTMultiUnits:vt,setTSpec:ta,setTSubCats:at,setTVars:tt,setTWhol:ea,showSessionKickedModal:ma,switchPaymentSubtab:Bs,switchTaxTab:Vs,syncAppMeta:go,get tMultiUnits(){return Q},get tSpec(){return ne},get tSubCats(){return de},get tVars(){return O},get tWhol(){return ie},get taxActiveTab(){return be},get taxMonth(){return U},get taxYear(){return W},toggleBarcodeOption:Sr,toggleCustomTaxRateInput:Qs,toggleReviewVisibility:ur,toggleTaxMenuVisibility:_t,updateAdminPaylaterSim:Ls,updateBarcodeLabelQtySummaryOnly:ht,updateOrderStatus:vs,updatePriceListSummaryPill:ja},Symbol.toStringTag,{value:"Module"}));let Ve=!1,He=null;const Ha=()=>{const e=new Date,t=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return`${t}-${a}-${r}`},el=e=>{if(!e)return"";try{const t=e.split("-");return t.length===3?new Date(parseInt(t[0]),parseInt(t[1])-1,parseInt(t[2])).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):e}catch{return e}},Ne=()=>{const e=k("admin-content");if(!e)return;const t=l.changelog||[],a=ca(l),r=ho(l),s=(l.deletedChangelogIds||[]).length;let o="";a.length===0?o=`
        <div class="text-center py-12 text-slate-400">
            <i class="fa-solid fa-clipboard-list text-3xl mb-2 opacity-50"></i>
            <p class="text-xs font-bold">Belum ada catatan pembaruan</p>
        </div>`:o=a.map(i=>{const n=t.some(b=>b.id===i.id),p=i.version===r,d=(i.items||[]).map(b=>`
                <li class="flex items-start gap-2 text-xs font-medium text-slate-600 dark:text-slate-300">
                    <i class="fa-solid fa-circle-check text-[var(--color-primary)] text-[10px] mt-1 shrink-0"></i>
                    <span>${u(b)}</span>
                </li>
            `).join("");let c="Update",m="fa-tag";return i.category==="feature"?(c="Fitur Baru",m="fa-rocket"):i.category==="optimization"?(c="Optimasi",m="fa-bolt-lightning"):i.category==="maintenance"?(c="Maintenance",m="fa-wrench"):i.category==="bugfix"&&(c="Perbaikan",m="fa-bug-slash"),`
            <div class="p-4 sm:p-5 rounded-2xl border ${p?"border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.02)] dark:bg-[rgba(var(--color-primary-rgb),0.05)] shadow-sm":"border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"} space-y-3">
                <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                    <div class="flex items-center gap-2 flex-wrap">
                        <span class="px-2.5 py-1 rounded-lg text-xs font-black tracking-wider uppercase ${p?"bg-[var(--color-primary)] text-white shadow-xs":"bg-slate-800 text-white dark:bg-slate-700"}">
                            ${u(i.version)}
                        </span>
                        <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md border border-slate-200/80 dark:border-slate-700/80 bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-700 dark:text-slate-300">
                            <i class="fa-solid ${m} text-[9px] text-[var(--color-primary)]"></i> ${u(c)}
                        </span>
                        ${p?'<span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.25)] text-[9px] font-extrabold uppercase"><span class="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] animate-pulse"></span> Versi Aktif</span>':""}
                        ${n?'<span class="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.2)] text-[9px] font-bold">Kustom Toko</span>':'<span class="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 text-[9px] font-bold">Sistem Bawaan</span>'}
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500">
                            <i class="fa-regular fa-calendar mr-1"></i> ${u(el(i.date))}
                        </span>
                        ${n?`
                        <button onclick="window.editChangelogEntry('${u(i.id)}')" class="w-8 h-8 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center text-xs transition-all cursor-pointer active:scale-95 shadow-2xs" title="Edit Catatan">
                            <i class="fa-solid fa-pen"></i>
                        </button>
                        <button onclick="window.deleteChangelogEntry('${u(i.id)}')" class="w-8 h-8 rounded-xl bg-rose-50 hover:bg-rose-100 dark:bg-rose-900/30 text-rose-500 flex items-center justify-center text-xs transition-all cursor-pointer active:scale-95 shadow-2xs" title="Hapus Catatan">
                            <i class="fa-solid fa-trash"></i>
                        </button>`:`
                        <button onclick="window.deleteChangelogEntry('${u(i.id||i.version)}')" class="w-8 h-8 rounded-xl bg-slate-100 hover:bg-rose-50 dark:bg-slate-800 dark:hover:bg-rose-900/30 text-slate-400 hover:text-rose-500 flex items-center justify-center text-xs transition-all cursor-pointer active:scale-95 shadow-2xs" title="Hapus Log Ini dari Sistem">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>`}
                    </div>
                </div>

                <div>
                    <h4 class="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                        ${u(i.title)}
                    </h4>
                </div>

                <ul class="space-y-1.5 pt-1">
                    ${d}
                </ul>
            </div>`}).join(""),e.innerHTML=`
    <div class="max-w-4xl mx-auto space-y-6 pb-12">
        <!-- Top Action Card -->
        <div class="flex flex-wrap items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
            <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-2xl bg-[rgba(var(--color-primary-rgb),0.12)] border border-[rgba(var(--color-primary-rgb),0.22)] text-[var(--color-primary)] flex items-center justify-center text-xl shadow-2xs shrink-0">
                    <i class="fa-solid fa-clock-rotate-left"></i>
                </div>
                <div>
                    <div class="flex items-center gap-2">
                        <h3 class="text-base font-extrabold text-slate-900 dark:text-white">
                            Log Pembaruan Sistem (Changelog)
                        </h3>
                        <span class="px-2 py-0.5 rounded-md primary-bg text-white text-[10px] font-black uppercase">
                            ${u(r)}
                        </span>
                    </div>
                    <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        Setiap pembaruan akan langsung tampil secara real-time di antarmuka toko pengunjung
                    </p>
                </div>
            </div>
            <div class="flex items-center gap-2">
                <button onclick="window.openChangelogModal()" class="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer">
                    <i class="fa-solid fa-eye text-slate-400"></i> Preview Etalase
                </button>
                <button onclick="window.toggleChangelogForm()" class="px-4 py-2 rounded-xl primary-bg text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-sm active:scale-95">
                    <i class="fa-solid fa-plus"></i> Tambah Catatan Baru
                </button>
            </div>
        </div>

        <!-- Form Tambah / Edit Catatan Pembaruan (Dinamis) -->
        <div id="changelog-form-box" class="${Ve?"block":"hidden"} p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-[var(--color-primary)]/40 shadow-lg space-y-4">
            <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                <h4 id="changelog-form-title" class="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                    <i class="fa-solid fa-circle-plus text-[var(--color-primary)]"></i> Tambah Catatan Pembaruan Baru
                </h4>
                <button onclick="window.toggleChangelogForm(false)" class="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 flex items-center justify-center text-xs active:scale-95 transition-all cursor-pointer" title="Tutup Formulir">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Nomor Versi</label>
                    <input id="form-log-version" type="text" placeholder="Cth: v1.2.1" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-bold text-slate-800 dark:text-white focus:border-[var(--color-primary)] focus:outline-none" />
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Kategori Update</label>
                    <select id="form-log-category" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-bold text-slate-800 dark:text-white focus:border-[var(--color-primary)] focus:outline-none">
                        <option value="feature">Fitur Baru (Feature)</option>
                        <option value="optimization">Optimasi Performa (Optimization)</option>
                        <option value="maintenance">Pemeliharaan &amp; Maintenance</option>
                        <option value="security">Keamanan (Security)</option>
                        <option value="bugfix">Perbaikan Bug (Bugfix)</option>
                    </select>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Tanggal Rilis</label>
                    <input id="form-log-date" type="date" value="${Ha()}" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-bold text-slate-800 dark:text-white focus:border-[var(--color-primary)] focus:outline-none" />
                </div>
            </div>

            <div>
                <label class="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Judul Ringkas Pembaruan</label>
                <input id="form-log-title" type="text" placeholder="Cth: Penambahan Fitur Cetak Invoice A4 & Perbaikan Kecepatan Katalog" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-bold text-slate-800 dark:text-white focus:border-[var(--color-primary)] focus:outline-none" />
            </div>

            <div>
                <label class="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                    Rincian Perubahan (Tulis 1 Poin per Baris)
                </label>
                <textarea id="form-log-items" rows="4" placeholder="- Memperbarui sistem pencarian nama produk&#10;- Mempercepat loading keranjang belanja&#10;- Menambahkan tombol cetak invoice baru" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-medium text-slate-800 dark:text-white focus:border-[var(--color-primary)] focus:outline-none leading-relaxed"></textarea>
                <p class="text-[10px] text-slate-400 mt-1">Setiap baris baru otomatis menjadi 1 poin checklist pada tampilan kartu rilis.</p>
            </div>

            <div class="flex items-center justify-end gap-2.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                <button onclick="window.toggleChangelogForm(false)" class="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold transition-all">
                    Batal
                </button>
                <button onclick="window.saveChangelogEntry()" class="px-5 py-2 rounded-xl primary-bg text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm active:scale-95">
                    <i class="fa-solid fa-cloud-arrow-up"></i> Simpan &amp; Publikasikan
                </button>
            </div>
        </div>

        <!-- Daftar Riwayat Pembaruan -->
        <div class="space-y-3.5">
            <div class="flex flex-wrap items-center justify-between gap-2 px-1">
                <h4 class="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                    Riwayat Rilis &amp; Log Perubahan (${a.length} Versi)
                </h4>
                <div class="flex items-center gap-2">
                    ${s>0?`
                    <button onclick="window.restoreDefaultChangelogs()" class="px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer">
                        <i class="fa-solid fa-rotate-left text-slate-400"></i> Pulihkan Log (${s})
                    </button>`:""}
                    ${a.length>5?`
                    <button onclick="window.pruneOldChangelogs()" class="px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-900/60 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer" title="Bersihkan riwayat log terlama agar tidak menumpuk">
                        <i class="fa-solid fa-broom"></i> Pangkas Log Lama
                    </button>`:""}
                </div>
            </div>
            <div class="space-y-3">
                ${o}
            </div>
        </div>
    </div>`},Or=(e=null)=>{Ve=e!==null?e:!Ve,Ve||(He=null),Ne()},Fr=e=>{const t=(l.changelog||[]).find(s=>s.id===e);if(!t)return;He=e,Ve=!0,Ne(),z("form-log-version",t.version||""),z("form-log-category",t.category||"feature"),z("form-log-date",t.date||Ha()),z("form-log-title",t.title||""),z("form-log-items",(t.items||[]).join(`
`));const a=k("changelog-form-title");a&&(a.innerHTML=`<i class="fa-solid fa-pen text-[var(--color-primary)]"></i> Edit Catatan Pembaruan (${u(t.version)})`);const r=k("changelog-form-box");r&&r.scrollIntoView({behavior:"smooth"})},Kr=async()=>{const e=(T("form-log-version")||"").trim(),t=T("form-log-category")||"feature",a=T("form-log-date")||Ha(),r=(T("form-log-title")||"").trim(),s=(T("form-log-items")||"").trim();if(!e)return x("Nomor versi harus diisi (contoh: v1.2.1)!");if(!r)return x("Judul pembaruan harus diisi!");if(!s)return x("Tuliskan minimal 1 poin rincian perubahan!");const o=s.split(`
`).map(n=>n.replace(/^[-*•]\s*/,"").trim()).filter(n=>n.length>0);if(o.length===0)return x("Rincian perubahan tidak boleh kosong!");R("Menyimpan catatan pembaruan...");const i={id:He||"log-"+Date.now().toString(36),version:e.startsWith("v")?e:"v"+e,category:t,date:a,title:r,items:o,updatedAt:new Date().toISOString()};if(l.changelog=l.changelog||[],He){const n=l.changelog.findIndex(p=>p.id===He);n!==-1?l.changelog[n]=i:l.changelog.unshift(i)}else l.changelog.unshift(i);l.deletedChangelogIds&&Array.isArray(l.deletedChangelogIds)&&(l.deletedChangelogIds=l.deletedChangelogIds.filter(n=>n!==i.id&&n!==i.version));try{await N(["changelog","deletedChangelogIds"]),x("Catatan pembaruan berhasil dipublikasikan secara real-time!","success"),Ve=!1,He=null,Ne()}catch(n){x("Gagal menyimpan log pembaruan: "+n.message,"error")}finally{C()}},Ur=e=>{const a=ca(l).find(s=>s.id===e||s.version===e);if(!a)return;const r=a.version||a.title||"ini";ce("Hapus Catatan Log Toko",`Apakah Anda yakin ingin menghapus catatan pembaruan versi "${r}"? Catatan ini tidak akan ditampilkan lagi di etalase toko maupun panel admin.`,async()=>{R("Menghapus catatan...");try{l.changelog=(l.changelog||[]).filter(o=>o.id!==e&&o.version!==e),l.deletedChangelogIds=Array.isArray(l.deletedChangelogIds)?l.deletedChangelogIds:[];const s=a.id||e;l.deletedChangelogIds.includes(s)||l.deletedChangelogIds.push(s),a.version&&!l.deletedChangelogIds.includes(a.version)&&l.deletedChangelogIds.push(a.version),await N(["changelog","deletedChangelogIds"]),x(`Catatan pembaruan ${r} berhasil dihapus!`,"success"),Ne()}catch(s){x("Gagal menghapus catatan: "+s.message,"error")}finally{C()}},"Konfirmasi Hapus Log",!0)},Hr=()=>{const e=ca(l);if(e.length<=5)return x(`Daftar log masih ringkas (${e.length} versi), belum perlu pembersihan.`,"info");const t=e.slice(5),a=t.length;ce("Pangkas Log Terlama",`Apakah Anda yakin ingin memangkas ${a} catatan log pembaruan terlama dan hanya menyisakan 5 versi terbaru? Tindakan ini merapikan daftar log toko agar tidak menumpuk spam.`,async()=>{R("Memangkas catatan lama...");try{const r=new Set;t.forEach(s=>{s.id&&r.add(s.id),s.version&&r.add(s.version)}),l.changelog=(l.changelog||[]).filter(s=>!r.has(s.id)&&!r.has(s.version)),l.deletedChangelogIds=Array.isArray(l.deletedChangelogIds)?l.deletedChangelogIds:[],r.forEach(s=>{l.deletedChangelogIds.includes(s)||l.deletedChangelogIds.push(s)}),await N(["changelog","deletedChangelogIds"]),x(`Berhasil membersihkan ${a} log lama! Tersisa 5 versi terbaru.`,"success"),Ne()}catch(r){x("Gagal memangkas log: "+r.message,"error")}finally{C()}},"Pangkas Log Lama",!0)},Gr=()=>{if((l.deletedChangelogIds||[]).length===0)return x("Tidak ada log bawaan yang terhapus.","info");ce("Pulihkan Log Bawaan","Apakah Anda yakin ingin memulihkan kembali seluruh catatan log rilis sistem bawaan toko yang pernah dihapus?",async()=>{R("Memulihkan catatan log...");try{l.deletedChangelogIds=[],await N(["deletedChangelogIds"]),x("Seluruh log pembaruan bawaan berhasil dipulihkan!","success"),Ne()}catch(t){x("Gagal memulihkan catatan: "+t.message,"error")}finally{C()}},"Ya, Pulihkan Semua",!1)};window.rAdmChangelog=Ne;window.toggleChangelogForm=Or;window.editChangelogEntry=Fr;window.saveChangelogEntry=Kr;window.deleteChangelogEntry=Ur;window.pruneOldChangelogs=Hr;window.restoreDefaultChangelogs=Gr;const nl=Object.freeze(Object.defineProperty({__proto__:null,deleteChangelogEntry:Ur,editChangelogEntry:Fr,pruneOldChangelogs:Hr,rAdmChangelog:Ne,restoreDefaultChangelogs:Gr,saveChangelogEntry:Kr,toggleChangelogForm:Or},Symbol.toStringTag,{value:"Module"}));export{wo as E,xe as M,ba as a,ut as b,Hs as c,bt as d,le as e,Ut as f,te as g,As as h,pa as i,il as j,nl as k,Xs as o,Js as s};

const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/module-pos-D-0Nj8Cc.js","assets/module-print-BX8_SYqv.js","assets/vendor-firebase-core-D2OF5R23.js","assets/vendor-firebase-db-BIUZcnOd.js","assets/module-member-Dz5kp-re.js","assets/module-faq-F6EZ3BvO.js","assets/expenses-BzGbovu1.js","assets/vendor-sortable-DzmX_rHT.js","assets/returns-DghfqBVE.js","assets/reports-BJdl2hH5.js","assets/purchases-Bl0jDruc.js","assets/suppliers-BxS7ctWh.js","assets/stock-opname-Qsp75uJj.js","assets/pos-cashier-admin-DgMeygrt.js","assets/backup-sync-qBV9LFbt.js"])))=>i.map(i=>d[i]);
import{q as P,z as Z,e as k,B as St,C as Pr,D as Ke,R as Oe,E as Ye,k as x,F as ue,G as pe,b as j,l as L,H as Pe,I as tt,J as we,K as Xe,L as ye,M as Ze,n as C,s as Ue,h as at,N as $r,g as T,O as qt,P as Fa,_ as J,a as n,f,Q as Ar,S as Va,u as B,T as Tt,U as $e,V as Ir,W as Wt,X as Mr,Y as qa,i as p,Z as Dr,o as ie,v as X,$ as _a,a0 as Le,m as fe,a1 as Ee,a2 as Cr,a3 as rt,a4 as Wa,a5 as Yt,a6 as Br,a7 as Lr,a8 as Nr,a9 as Rr,aa as kt,ab as Ka,ac as Xt,ad as jr,ae as Er}from"./module-print-BX8_SYqv.js";import{f as Ne}from"./vendor-firebase-core-D2OF5R23.js";import{a as zt,d as Or,c as Fr,u as ft,g as _r,b as Kr,e as za,f as Ja,h as Ur,i as Pt,j as Qa,n as Zt,l as Hr,s as Gr,t as Vr,k as qr,m as Ya,o as Wr,p as _,r as Ua,q as Xa,v as zr}from"./module-pos-D-0Nj8Cc.js";import{S as Jr}from"./vendor-sortable-DzmX_rHT.js";import{g as ea,a as Qr}from"./module-faq-F6EZ3BvO.js";let et=null,gt=!1,Jt=!1,Qt=0;const ht=t=>{Jt=!!t,typeof window<"u"&&(window.__isLoggingIn=Jt)},ta=()=>Jt||typeof window<"u"&&!!window.__isLoggingIn,Za=()=>{if(typeof navigator>"u")return"Perangkat Lain";const t=navigator.userAgent||"",e=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t);let a="Perangkat";/iPhone|iPad|iPod/i.test(t)?a="iPhone/iPad":/Android/i.test(t)?a="HP Android":/Windows/i.test(t)?a="Desktop Windows":/Mac/i.test(t)?a="Mac/MacBook":/Linux/i.test(t)?a="Linux PC":a=e?"Smartphone":"Komputer Desktop";let r="Browser";return/Edg/i.test(t)?r="Edge":/Chrome/i.test(t)?r="Chrome":/Safari/i.test(t)?r="Safari":/Firefox/i.test(t)&&(r="Firefox"),`${a} (${r})`},ve=async(t=null)=>{const e=typeof P<"u"&&P?P:window.db;if(!e)return null;const a=t||localStorage.getItem("freshmart_admin_session_id")||"sess_"+Date.now()+"_"+Math.random().toString(36).substring(2,9),r=Za();try{return localStorage.setItem("freshmart_admin_session_id",a),await e.collection("freshmart").doc("cms_data").collection("admin_session").doc("active").set({sessionId:a,deviceName:r,loginAt:Ne.firestore.FieldValue.serverTimestamp(),lastActive:Ne.firestore.FieldValue.serverTimestamp()}),gt=!1,Qt=Date.now(),a}catch(s){return console.warn("Gagal mengklaim sesi admin aktif:",s),null}},aa=t=>{let e=document.getElementById("session-kicked-modal");e||(e=document.createElement("div"),e.id="session-kicked-modal",e.className="fixed inset-0 z-[150] bg-slate-900/80 flex items-center justify-center p-4 transition-opacity duration-300",document.body.appendChild(e)),e.innerHTML=`
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
                <b class="text-rose-600 dark:text-rose-400 font-bold bg-rose-50 dark:bg-rose-900/20 px-2.5 py-1 rounded-lg mt-1.5 inline-block">${t||"Perangkat Lain"}</b>
            </p>
            <p class="text-[11px] text-slate-400 dark:text-slate-500 mb-6 leading-normal bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                <i class="fa-solid fa-shield-halved text-amber-500 mr-1"></i>
                Untuk mencegah konflik data dan menjaga keamanan toko, sistem hanya mengizinkan 1 perangkat aktif mengelola CMS pada satu waktu.
            </p>
            <button id="btn-session-kicked-ok" class="btn-primary w-full py-3.5 text-sm !rounded-xl font-bold flex items-center justify-center gap-2 shadow-glow">
                <i class="fa-solid fa-arrow-left"></i> Kembali ke Toko
            </button>
        </div>
    `,e.style.display="flex",e.style.opacity="1",typeof window.pushModalHistory=="function"&&window.pushModalHistory("sessionKicked");const a=document.getElementById("btn-session-kicked-ok");a&&(a.onclick=()=>{sa()})},sa=(t=!1)=>{const e=()=>{const a=document.getElementById("session-kicked-modal");a&&(a.style.opacity="0",setTimeout(()=>{a.parentNode&&a.remove()},250))};!t&&typeof window.requestCloseModal=="function"?window.requestCloseModal("sessionKicked",!1,e):e()};typeof window<"u"&&(window.showSessionKickedModal=aa,window.closeSessionKickedModal=sa);const ot=()=>{if(et)return;const t=typeof P<"u"&&P?P:window.db;!t||!localStorage.getItem("freshmart_admin_session_id")||(gt=!1,et=t.collection("freshmart").doc("cms_data").collection("admin_session").doc("active").onSnapshot(async a=>{if(!a.exists)return;const r=a.data(),s=r.sessionId,o=localStorage.getItem("freshmart_admin_session_id");if(!(Qt&&Date.now()-Qt<2e3)&&s&&o&&s!==o){if(gt)return;gt=!0,lt(),localStorage.removeItem("freshmart_admin_session_id");const l=r.deviceName||"Perangkat Lain";try{window.isAdm=!1,window.__localIsAdm=!1,Z&&typeof Z.signOut=="function"&&await Z.signOut()}catch{}typeof window.changeView=="function"&&window.changeView("view-catalog"),aa(l)}},a=>{console.warn("Admin session guard listener error:",a)}))},lt=()=>{et&&(et(),et=null)},ra=async()=>{if(ta())return!0;const t=typeof P<"u"&&P?P:window.db;if(!t)return!0;const e=typeof window<"u"&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"),a=localStorage.getItem("freshmart_admin_session_id");if(!a)try{const r=await t.collection("freshmart").doc("cms_data").collection("admin_session").doc("active").get();if(!r.exists){try{await ve()}catch{}return!0}const s=r.data()||{},o=s.lastActive?.toMillis?s.lastActive.toMillis():s.loginAt?.toMillis?s.loginAt.toMillis():0,l=(Date.now()-o)/(60*60*1e3);if(e||l>1){try{await ve()}catch{}return!0}try{await ve()}catch{}return!0}catch{return!0}try{const r=await t.collection("freshmart").doc("cms_data").collection("admin_session").doc("active").get();if(!r.exists){try{await ve(a)}catch{}return!0}if(r.data().sessionId===a){try{await t.collection("freshmart").doc("cms_data").collection("admin_session").doc("active").update({lastActive:Ne.firestore.FieldValue.serverTimestamp()})}catch{}return!0}try{await ve(a)}catch{}return!0}catch{return!0}};typeof window<"u"&&(window.claimAdminSession=ve,window.attachAdminSessionGuard=ot,window.detachAdminSessionGuard=lt,window.isCurrentSessionActive=ra,window.setLoggingIn=ht,window.isLoggingIn=ta);const $t={products:[{key:"name",label:"Nama Produk",type:"text"},{key:"sku",label:"Barcode / SKU (Kosongkan utk Auto)",type:"text"},{key:"price",label:"Harga Jual Promo (Rp)",type:"number"},{key:"priceNormal",label:"Harga Coret / Normal (Rp) - Opsional",type:"number"},{key:"hpp",label:"Harga Modal / HPP (Rp) — Hanya Seller",type:"number"},{key:"poin",label:"Poin Member (per unit terjual, Produk Tanpa Varian)",type:"number"},{key:"storeStock",label:"Stok Rak Toko / Etalase (Qty)",type:"number"},{key:"warehouseStock",label:"Stok Gudang Cadangan (Qty)",type:"number"},{key:"stock",label:"Total Stok Gabungan (Toko + Gudang)",type:"number"},{key:"unit",label:"Satuan Dasar (Cth: Pcs, Kg)",type:"text"},{key:"poTime",label:"Estimasi Pre-Order (Opsional)",type:"text"},{key:"video",label:"Link Video YouTube (Opsional)",type:"text"},{key:"img",label:"URL Gambar",type:"text"},{key:"category",label:"Kategori",type:"dynamic_select_category"},{key:"subCategory",label:"Jenis / Sub-Kategori (Cth: Cat Tembok, Pipa PVC, Power Tools)",type:"text"},{key:"brand",label:"Merek",type:"dynamic_select_brand"},{key:"supplierId",label:"Supplier / Rekanan Pemasok",type:"dynamic_select_supplier"},{key:"tag",label:"Label/Tag",type:"text"},{key:"isActive",label:"Status",type:"select",options:[{val:"true",text:"Tersedia"},{val:"false",text:"Habis"}]},{key:"desc",label:"Deskripsi Lengkap",type:"richtext"},{key:"specTable",label:"Tabel Spesifikasi (Opsional)",type:"spec_table_builder"},{key:"wholesale",label:"Grosir Eceran",type:"wholesale_builder"},{key:"multiUnits",label:"Multi-Satuan Kemasan Bertingkat (Opsional)",type:"multi_units_builder"},{key:"variants",label:"Varian",type:"variants_builder"}],suppliers:[{key:"code",label:"Kode Supplier (Cth: SUP-001)",type:"text"},{key:"name",label:"Nama Perusahaan / Supplier",type:"text"},{key:"picName",label:"Nama Sales / Kontak PIC",type:"text"},{key:"phone",label:"Nomor WhatsApp / Telp Sales",type:"text"},{key:"city",label:"Kota / Wilayah",type:"text"},{key:"address",label:"Alamat Kantor / Gudang",type:"textarea"},{key:"bankName",label:"Nama Bank Rekening",type:"text"},{key:"bankAccount",label:"Nomor Rekening",type:"text"},{key:"bankHolder",label:"Atas Nama Pemilik Rekening",type:"text"},{key:"defaultTerm",label:"Termin / Cara Bayar Default",type:"select",options:[{val:"cash",text:"Cash / Tunai / Transfer"},{val:"tempo_7",text:"Tempo 7 Hari"},{val:"tempo_14",text:"Tempo 14 Hari"},{val:"tempo_30",text:"Tempo 30 Hari"},{val:"tempo_60",text:"Tempo 60 Hari"},{val:"konsinyasi",text:"Konsinyasi / Barang Titipan"}]},{key:"notes",label:"Catatan / Jadwal Rutin Kunjungan Sales",type:"textarea"}],colors:[{key:"name",label:"Nama Warna",type:"text"},{key:"hex",label:"Kode Warna (Hex) - Opsional",type:"text"},{key:"catalog",label:"Katalog / Merek (Contoh: No Drop)",type:"text"}],categories:[{key:"name",label:"Nama Kategori",type:"text"},{key:"img",label:"URL Ikon / Gambar (Opsional)",type:"text"},{key:"subCategories",label:"Daftar Sub-Kategori / Kelompok Jenis",type:"subcategories_builder"}],brands:[{key:"name",label:"Nama Merek",type:"text"},{key:"img",label:"URL Logo Merek",type:"text"}],banks:[{key:"bankName",label:"Nama Bank",type:"text"},{key:"bankAccount",label:"No. Rekening",type:"text"},{key:"bankOwner",label:"Atas Nama",type:"text"}],customers:[{key:"name",label:"Nama Lengkap",type:"text"},{key:"phone",label:"No. WhatsApp Aktif (Cth: 081234567890)",type:"text"},{key:"points",label:"Poin Member (Penyesuaian Manual)",type:"number"},{key:"paylaterActive",label:"Status Putri PayLater",type:"select",options:[{val:"false",text:"Nonaktif (Belum Disetujui)"},{val:"true",text:"Aktif (Diberikan Limit)"}]},{key:"paylaterLimit",label:"Plafon Limit PayLater (Rp)",type:"number"},{key:"paylaterDueDay",label:"Tanggal Jatuh Tempo Bulanan (1-28, default 5)",type:"number"},{key:"paylaterUsed",label:"Limit Terpakai Saat Ini (Rp)",type:"number"}],rewards:[{key:"name",label:"Nama Hadiah",type:"text"},{key:"img",label:"URL Gambar Hadiah",type:"text"},{key:"pointsCost",label:"Poin yang Dibutuhkan",type:"number"},{key:"stock",label:"Stok Hadiah Tersedia",type:"number"},{key:"isActive",label:"Status",type:"select",options:[{val:"true",text:"Aktif (Bisa Ditukar)"},{val:"false",text:"Nonaktif"}]}],banners:[{key:"title",label:"Judul Banner",type:"text"},{key:"desc",label:"Deskripsi Pendek (Opsional)",type:"textarea"},{key:"type",label:"Tipe Banner",type:"select",options:[{val:"image",text:"Gambar (Default)"},{val:"video",text:"Video (Drive / YouTube / MP4)"}]},{key:"img",label:"URL Gambar (jika Tipe = Gambar)",type:"text"},{key:"videoUrl",label:"URL / Link Video (Google Drive, YouTube, atau MP4)",type:"text"},{key:"link",label:"Link Tujuan Klik (Opsional)",type:"text"}],vouchers:[{key:"code",label:"Kode Voucher (Cth: MERDEKA50)",type:"text"},{key:"type",label:"Jenis Diskon",type:"select",options:[{val:"percent",text:"Potongan Persen (%)"},{val:"flat",text:"Potongan Rupiah (Rp)"},{val:"shipping_free",text:"Gratis Ongkir (100%)"},{val:"shipping_flat",text:"Potongan Ongkir (Rp)"}]},{key:"value",label:"Nilai Potongan (Contoh: 50 untuk %, atau 10000 untuk Rp)",type:"number"},{key:"minPurchase",label:"Syarat Minimal Belanja (Rp) - 0 Jika Tidak Ada",type:"number"},{key:"maxDiscount",label:"Maksimal Nominal Potongan (Rp) - Khusus Tipe Persen",type:"number"},{key:"targetProduct",label:"Target Produk Spesifik (Pilih jika berlaku khusus)",type:"dynamic_select_products"},{key:"isShow",label:"Tampilkan di Beranda?",type:"select",options:[{val:"true",text:"Ya, Tampilkan Promo"},{val:"false",text:"Sembunyikan"}]}]};window.aF=$t;const Yr=[{key:"gaji",label:"Gaji & Tunjangan Staf",icon:"fa-user-tie",color:"blue"},{key:"listrik",label:"Listrik, Air & Wifi Toko",icon:"fa-bolt",color:"amber"},{key:"sewa",label:"Sewa Ruko / Tempat Usaha",icon:"fa-shop",color:"purple"},{key:"transport",label:"Bensin & Transportasi",icon:"fa-van-shuttle",color:"emerald"},{key:"kemasan",label:"Kemasan / Lakban / Plastik",icon:"fa-box",color:"orange"},{key:"perawatan",label:"Pemeliharaan Toko & Alat",icon:"fa-screwdriver-wrench",color:"cyan"},{key:"lainnya",label:"Biaya Operasional Lainnya",icon:"fa-receipt",color:"slate"}],es=()=>{const t=k("admin-dashboard-view");if(!t)return;const e={orders:"orders",products:"products",suppliers:"suppliers",purchases:"purchases",settings:"settings",categories:"categories",brands:"brands",colors:"colors",vouchers:"vouchers",banks:"banks",banners:"banners",customers:"customers",rewards:"rewards",reviews:"reviews",faqs:"faqs",reports:"reports",tax:"reports",expenses:"expenses",stock_opname:"stock_opname",returns:"returns",piutang:"piutang",changelog:"changelog",pos:"pos",cashiers:"cashiers",backup_sync:"backup_sync"};t.querySelectorAll('button[onclick*="openAdminTab"]').forEach(c=>{const m=(c.getAttribute("onclick")||"").match(/openAdminTab\(['"]([^'"]+)['"]\)/);if(m&&m[1]){const u=m[1],g=e[u]||u;St(g)?(c.classList.remove("hidden"),c.style.display=""):(c.classList.add("hidden"),c.style.display="none")}});const r=Pr(),s=k("admin-header-role-badge"),o=k("admin-header-title"),l=k("admin-dashboard-welcome-title"),i=k("admin-dashboard-welcome-tag"),d=k("admin-dashboard-welcome-desc");if(Ke())s&&(s.innerHTML='<span class="inline-flex items-center gap-1 text-[9px] font-black uppercase text-amber-300 drop-shadow-xs"><i class="fa-solid fa-crown text-[8px]"></i> Owner</span>'),o&&(o.textContent="CMS OWNER"),l&&(l.innerHTML='Selamat Datang, Pemilik Toko! <i class="fa-solid fa-crown text-amber-400 text-lg"></i>'),i&&(i.textContent="Panel Kontrol Owner"),d&&(d.textContent="Akses penuh seluruh operasional, keuangan, dan pengaturan Toko Putri.");else if(r?.role===Oe.ADMIN){const c=r.name||"Admin";s&&(s.innerHTML=`<span class="inline-flex items-center gap-1 text-[9px] font-black uppercase text-blue-200 drop-shadow-xs"><i class="fa-solid fa-shield-halved text-[8px]"></i> Admin (${c})</span>`),o&&(o.textContent="CMS ADMIN"),l&&(l.innerHTML=`Selamat Datang, ${c}! <i class="fa-solid fa-shield-halved text-blue-400 text-lg"></i>`),i&&(i.textContent="Panel Operasional Admin"),d&&(d.textContent="Kelola pesanan, katalog produk, dan aktivitas harian toko.")}else s&&(s.innerHTML='<span class="text-[9px] font-bold uppercase text-white/90">Staf Toko</span>'),o&&(o.textContent="CMS TOKO"),l&&(l.innerHTML="Selamat Datang!"),i&&(i.textContent="Panel Kontrol Toko Putri ( Official Store )"),d&&(d.textContent="Kelola produk, pesanan, dan seluruh operasional toko dari satu tempat.")},oa=async()=>{const t=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1";if(window.isAdm||t){if(Ke()&&!t&&!await ra()&&Z.currentUser){lt(),localStorage.removeItem("freshmart_admin_session_id"),Ye(),await Z.signOut(),window.isAdm=!1,window.__localIsAdm=!1,x("Sesi Owner telah diambil alih oleh perangkat lain."),ue("login-username",""),ue("login-password",""),typeof window.changeView=="function"&&window.changeView("view-admin-login");return}window.__localIsAdm=!0;try{zt()}catch{}if(typeof window.changeView=="function"&&window.changeView("view-admin"),Ke()&&ot(),Z.currentUser)He();else{const e=Z.onAuthStateChanged(()=>{e(),He()})}}else ue("login-username",""),ue("login-password",""),typeof window.changeView=="function"&&window.changeView("view-admin-login")},He=()=>{Ke()&&ot();const t=k("view-admin");t&&t.classList.remove("admin-pos-mode");const e=document.querySelector("#view-admin .scroll-content");e&&(e.scrollTop=0),typeof window.hideFloatingScrollTop=="function"&&window.hideFloatingScrollTop(),Ue("admin-dashboard-view"),at("admin-content-view"),at("btn-admin-back"),Ue("admin-logo-box"),typeof window.renderSubscriptionNoticeInCMS=="function"&&window.renderSubscriptionNoticeInCMS(),Va(""),window.cTab="";try{history.state&&history.state.tab&&history.replaceState({view:"view-admin"},"",window.location.href)}catch{}typeof window.detachPOSHistoryListener=="function"&&window.detachPOSHistoryListener(),Pe&&(Pe(),tt(null)),we&&(we(),Xe(null)),ye&&(ye(),Ze(null)),es(),la($r),At()},At=()=>{const t=k("admin-menu-tax-btn");if(!t)return;const e=St("tax");(n.store.ppnEnabled===!0||n.store.ppnEnabled==="true")&&e?(t.classList.remove("hidden"),t.classList.add("flex")):(t.classList.add("hidden"),t.classList.remove("flex"))},Ha=new Map,Xr=2*60*1e3,la=async(t="month")=>{if(Ar(t),!k("admin-report-container"))return;if(!St("view_reports")){j("admin-report-container",`
            <div class="p-6 sm:p-8 bg-white dark:bg-slate-800/95 rounded-3xl border border-slate-200/90 dark:border-slate-700/80 shadow-2xs text-center flex flex-col items-center justify-center">
                <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-3 shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary)">
                    <i class="fa-solid fa-lock"></i>
                </div>
                <p class="text-xs font-black text-slate-800 dark:text-white">Laporan Keuangan Dibatasi</p>
                <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-1 max-w-sm leading-relaxed">
                    Informasi omset, modal HPP, margin laba kotor, dan laba bersih toko dirahasiakan & hanya dapat diakses oleh akun dengan izin laporan finansial (Owner).
                </p>
            </div>
        `);return}document.querySelectorAll(".report-period-btn").forEach(m=>{const u=m.dataset.period===t;m.style.background=u?"var(--color-primary)":"transparent",m.style.color=u?"var(--color-primary-contrast, #fff)":"",m.style.boxShadow=u?"0 2px 8px rgba(var(--color-primary-rgb),0.35)":"none"});const a=({totalPenjualan:m,totalHppTerjual:u,totalDiskonProduk:g,orderCount:h,truncated:v})=>{const w=m-u,S=w-g,M={today:"Hari Ini",week:"Minggu Ini",month:"Bulan Ini",all:"Sepanjang Waktu"}[t]||"";j("admin-report-container",`
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <div class="card-modern p-5 sm:p-5">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Total Penjualan (${M})</p>
                    <p class="text-lg sm:text-xl font-bold text-slate-800 dark:text-white truncate">${f(m)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-1">${h} pesanan${v?" (≥3000, dibatasi)":""}</p>
                </div>
                <div class="card-modern p-5 sm:p-5">
                    <p class="text-[9px] font-bold text-[var(--color-primary)] uppercase tracking-widest mb-1.5"><i class="fa-solid fa-arrow-trend-up mr-1"></i>Laba Kotor</p>
                    <p class="text-lg sm:text-xl font-bold text-[var(--color-primary)] truncate">${f(w)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-1">Penjualan − HPP Terjual</p>
                </div>
                <div class="card-modern p-5 sm:p-5">
                    <p class="text-[9px] font-bold text-rose-500 uppercase tracking-widest mb-1.5"><i class="fa-solid fa-tag mr-1"></i>Total HPP Terjual</p>
                    <p class="text-lg sm:text-xl font-bold text-rose-500 truncate">${f(u)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-1">Modal barang yang laku</p>
                </div>
                <div class="card-modern p-5 sm:p-5">
                    <p class="text-[9px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-1.5"><i class="fa-solid fa-sack-dollar mr-1"></i>Laba Bersih</p>
                    <p class="text-lg sm:text-xl font-bold truncate" style="color:var(--color-primary)">${f(S)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-1">Laba Kotor − Diskon</p>
                </div>
            </div>
        `)},r=Ha.get(t);if(r&&Date.now()-r.timestamp<Xr){a(r.data);return}j("admin-report-container",'<div class="text-center py-10"><i class="fa-solid fa-spinner fa-spin text-2xl text-slate-300"></i></div>');let s=null;const o=new Date;if(t==="today")s=new Date(o.getFullYear(),o.getMonth(),o.getDate());else if(t==="week"){const m=o.getDay(),u=m===0?6:m-1;s=new Date(o.getFullYear(),o.getMonth(),o.getDate()-u)}else t==="month"&&(s=new Date(o.getFullYear(),o.getMonth(),1));let l=0,i=0,d=0,c=0,b=!1;try{if(!Z.currentUser){j("admin-report-container",'<div class="text-center py-10 text-slate-400"><i class="fa-solid fa-lock text-2xl mb-3"></i><p class="text-xs font-bold">Login terlebih dahulu untuk melihat laporan.</p></div>');return}let m=P.collection("freshmart_orders");s&&(m=m.where("timestamp",">=",Ne.firestore.Timestamp.fromDate(s)));const u=await m.limit(3e3).get();b=u.size>=3e3,u.forEach(h=>{const v=h.data();v.status!=="Dibatalkan"&&(c++,l+=parseFloat(v.payment?.subtotal)||0,d+=parseFloat(v.payment?.productDiscount)||0,(v.items||[]).forEach(w=>{const S=w.hpp!==void 0&&w.hpp!==null?parseFloat(w.hpp):typeof window.getEffHpp=="function"?window.getEffHpp(w):0;i+=(parseFloat(S)||0)*(parseFloat(w.qty)||0)}))});const g={totalPenjualan:l,totalHppTerjual:i,totalDiskonProduk:d,orderCount:c,truncated:b};Ha.set(t,{data:g,timestamp:Date.now()}),a(g)}catch(m){console.error("Gagal memuat laporan penjualan:",m)}},ts=async()=>{const t=T("login-username"),e=T("login-password");if(!t||!e)return x("Email & Password wajib diisi!");ht(!0),L("Verifikasi Akun & Hak Akses...");try{const r=(await Z.signInWithEmailAndPassword(t,e)).user||Z.currentUser;if(!r)throw new Error("AUTH_FAILED");if(r.uid===qt){const i="sess_"+Date.now()+"_"+Math.random().toString(36).substring(2,9);localStorage.setItem("freshmart_admin_session_id",i),await ve(i),ot(),Fa({uid:qt,name:"Owner Toko",email:t,role:Oe.OWNER,isActive:!0});try{sessionStorage.setItem("pos_cashier_session",JSON.stringify({uid:qt,name:"Owner Toko",email:t,role:Oe.OWNER}))}catch{}window.isAdm=!0,window.__localIsAdm=!0;try{zt()}catch{}history.replaceState({view:"view-admin"},"",window.location.href),typeof window.changeView=="function"&&window.changeView("view-admin",!0),He(),x("Selamat datang, Pemilik Toko!","success");return}const s=await P.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(r.uid).get();if(!s.exists)throw await Z.signOut(),localStorage.removeItem("freshmart_admin_session_id"),Ye(),new Error("STAFF_NOT_FOUND");const o=s.data()||{};if(o.isActive===!1)throw await Z.signOut(),localStorage.removeItem("freshmart_admin_session_id"),Ye(),new Error("STAFF_INACTIVE");const l={uid:r.uid,name:o.name||t,email:o.email||t,role:o.role||Oe.CASHIER,permissions:o.permissions||null,isActive:!0};if(Fa(l),s.ref.update({lastLoginAt:Ne.firestore.FieldValue.serverTimestamp()}).catch(()=>{}),l.role===Oe.CASHIER){try{const i=await J(()=>import("./module-pos-D-0Nj8Cc.js").then(d=>d.Q),__vite__mapDeps([0,1,2,3,4,5]));i&&typeof i.setCashierSession=="function"&&i.setCashierSession(l)}catch{}try{localStorage.setItem("pos_has_cashier","true")}catch{}typeof window.updatePOSHeaderIcon=="function"&&window.updatePOSHeaderIcon(),history.replaceState({view:"view-pos-cashier"},"",window.location.href),typeof window.changeView=="function"&&window.changeView("view-pos-cashier",!0),x(`Login Berhasil! Selamat bertugas di Kasir, ${l.name||"Kasir"}!`,"success");return}window.isAdm=!0,window.__localIsAdm=!0;try{zt()}catch{}history.replaceState({view:"view-admin"},"",window.location.href),typeof window.changeView=="function"&&window.changeView("view-admin",!0),He(),x(`Login Berhasil! Selamat bertugas, ${l.name||"Admin"}!`,"success")}catch(a){console.error(a),localStorage.removeItem("freshmart_admin_session_id"),Ye(),a.message==="STAFF_NOT_FOUND"?x("Login Ditolak: Akun Anda tidak terdaftar sebagai staf Toko Putri!"):a.message==="STAFF_INACTIVE"?x("Login Ditolak: Akun Anda dinonaktifkan oleh Owner Toko."):a.message&&a.message.startsWith("UID_MISMATCH:")?x("Login Ditolak: Akun tidak memiliki hak akses CMS."):x("Login Ditolak: Email atau Password salah!")}finally{ht(!1),C()}},ia=async()=>{L("Keluar...");try{Ke()&&lt(),localStorage.removeItem("freshmart_admin_session_id"),Ye();try{const t=sessionStorage.getItem("pos_cashier_session");if(t){const e=JSON.parse(t);(e.role===Oe.OWNER||e.role==="owner")&&sessionStorage.removeItem("pos_cashier_session")}}catch{}typeof window.detachPOSHistoryListener=="function"&&window.detachPOSHistoryListener();try{Or()}catch{}Pe&&(Pe(),tt(null)),we&&(we(),Xe(null)),ye&&(ye(),Ze(null)),await Z.signOut(),window.isAdm=!1,window.__localIsAdm=!1,x("Berhasil Logout"),typeof window.changeView=="function"&&window.changeView("view-catalog")}catch{x("Gagal Logout")}finally{C()}},as=()=>{const t=Ke();pe(t?"Keluar Panel Owner":"Keluar CMS Toko",t?"Apakah Anda yakin ingin keluar dari panel kontrol Owner Toko?":"Apakah Anda yakin ingin keluar dari halaman admin?",()=>{ia()},"Ya, Keluar")};window.__checkAdminAccessReal=oa;window.checkAdminAccess=oa;window.openAdminMenu=He;window.toggleTaxMenuVisibility=At;window.computeInventoryStats=computeInventoryStats;window.loadAdminReport=la;window.processAdminLogin=ts;window.logoutAdmin=ia;window.confirmLogoutAdmin=as;const ss=async()=>{if(!B||B.length===0)return x("Belum ada data pesanan!");L("Menyiapkan modul Excel...");try{await Wt("https://cdn.sheetjs.com/xlsx-0.20.3/package/dist/xlsx.full.min.js",()=>typeof XLSX<"u")}catch{C(),x("Gagal memuat modul Excel. Cek koneksi internet Anda.");return}C();let t=[];B.forEach((l,i)=>{let d=l.dateString?new Date(l.dateString).toLocaleString("id-ID"):"-",c=l.customer?.name||"Anonim",b=l.source==="pos"||l.channel==="pos",m=l.customer?.deliveryMethod==="delivery"?"Dikirim":b?"Beli Langsung di Kasir (Takeaway)":"Ambil di Toko";l.isDropPoint&&(m="Lokasi Berbeda");let u=l.status||"-",g=l.items?l.items.reduce((v,w)=>v+(parseFloat(w.qty)||0),0):0,h=l.payment?.grandTotal||0;t.push({No:i+1,"ID Pesanan":l.orderId,Tanggal:d,Sumber:b?`Kasir POS (${l.cashierName||"Kasir"})`:"Website Storefront","Nama Pelanggan":c,"Tipe Pelanggan":l.customerType==="Member"?"Member":"Pelanggan Umum","No. WhatsApp":l.customer?.wa?`+${l.customer.wa}`:"-","Metode Kirim":m,Status:u,"Total Item":g,"Total Tagihan (Rp)":h})});const e=XLSX.utils.json_to_sheet(t),a=XLSX.utils.book_new();XLSX.utils.book_append_sheet(a,e,"Laporan Pesanan");const r=[{wch:5},{wch:25},{wch:22},{wch:24},{wch:25},{wch:18},{wch:18},{wch:26},{wch:15},{wch:12},{wch:20}];e["!cols"]=r;const o=`Laporan_Pesanan_${new Date().toISOString().split("T")[0]}.xlsx`;if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function"){const l=XLSX.write(a,{bookType:"xlsx",type:"base64"});window.AndroidNativeApp.saveOrShareFile(l,o,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")}else XLSX.writeFile(a,o);x("Laporan Excel (.xlsx) berhasil diunduh!")},rs=()=>{try{if(typeof window<"u"){if(typeof window.checkUserGesture=="function"&&!window.checkUserGesture())return;if(typeof window.playNativeSound=="function"){window.playNativeSound("success");return}}const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const e=new t;e.state==="suspended"&&e.resume().catch(()=>{});const a=e.createOscillator(),r=e.createGain();a.connect(r),r.connect(e.destination),a.type="sine",a.frequency.setValueAtTime(800,e.currentTime),r.gain.setValueAtTime(.2,e.currentTime),a.frequency.setValueAtTime(600,e.currentTime+.2),a.frequency.setValueAtTime(800,e.currentTime+.6),r.gain.setValueAtTime(.2,e.currentTime+.6),a.frequency.setValueAtTime(600,e.currentTime+.8),r.gain.exponentialRampToValueAtTime(1e-5,e.currentTime+1.5),a.start(e.currentTime),a.stop(e.currentTime+1.5),setTimeout(()=>{e.close().catch(()=>{})},1600)}catch{}};let Se="all";const os=t=>{Se=t,["all","pos","storefront"].forEach(e=>{const a=k(`btn-ord-filter-${e}`);a&&(e===t?a.className="h-8 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white shadow-sm shadow-[rgba(var(--color-primary-rgb),0.3)] flex items-center gap-1.5":a.className="h-8 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700/60 flex items-center gap-1.5")}),na()},na=()=>{const t=k("admin-orders-list");if(!t)return;if(!B||B.length===0){t.innerHTML='<div class="flex flex-col items-center justify-center py-20 text-slate-400 font-bold bg-white dark:bg-slate-800 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm text-center"><i class="fa-solid fa-receipt text-5xl mb-4 opacity-30"></i>Belum ada pesanan</div>';return}const e=B.filter(a=>{const r=a.source==="pos"||a.channel==="pos";return Se==="pos"?r:Se==="storefront"?!r:!0});if(e.length===0){const a=Se==="pos"?"Belum ada transaksi dari Kasir POS":Se==="storefront"?"Belum ada pesanan dari Website Storefront":"Belum ada pesanan";t.innerHTML=`<div class="flex flex-col items-center justify-center py-16 text-slate-400 font-bold bg-white dark:bg-slate-800 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm text-center"><i class="fa-solid fa-filter-circle-xmark text-4xl mb-3 opacity-30"></i>${a}</div>`;return}t.innerHTML=e.map(a=>{let r="text-slate-500 border-slate-200 dark:border-slate-600",s="fa-clock",o="bg-slate-50 dark:bg-slate-700/50",l="text-slate-400";a.status==="Baru"?(r="text-rose-600 border-rose-300 bg-rose-50 dark:bg-rose-950/40 dark:border-rose-800 font-bold",s="fa-asterisk",o="bg-rose-500",l="text-white shadow-md shadow-rose-500/30"):a.status==="Diproses"?(r="text-[var(--color-primary)] border-[var(--color-primary)]/30 bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.10)] dark:border-[var(--color-primary)]/30",s="fa-spinner fa-spin",o="primary-bg",l="shadow-sm"):a.status==="Selesai"?(r="text-[var(--color-primary)] border-[var(--color-primary)]/30 bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.10)] dark:border-[var(--color-primary)]/30",s="fa-check-double",o="primary-bg-soft",l="primary-text"):a.status==="Dibatalkan"&&(r="text-slate-400 border-slate-200 bg-slate-50 dark:bg-slate-800 dark:border-slate-700",s="fa-xmark",o="bg-slate-100 dark:bg-slate-800",l="text-slate-400");let i="fa-wallet text-slate-400",d=a.payment?.method||"",c=d.toUpperCase();const b=a.source==="pos"||a.channel==="pos";if(d==="transfer")i="fa-building-columns text-[var(--color-primary)]",c="Transfer";else if(d==="qris")i="fa-qrcode text-purple-500",c="QRIS";else if(d==="cod")i="fa-hand-holding-dollar text-[var(--color-primary)]",c="COD";else if(d==="cashier"||d==="cash")i="fa-cash-register text-emerald-500",c=b?"Tunai (Kasir)":"Kasir";else if(d==="tempo"){const S=!!(a.payment?.isPaylater||a.isPaylater||a.payment?.subMethod==="paylater");i=S?"fa-bolt text-emerald-500":"fa-file-invoice-dollar text-amber-500",c=S?"PayLater":"Tempo"}let m=a.items?parseFloat(a.items.reduce((S,M)=>S+(parseFloat(M.qty)||0),0).toFixed(2)):0;const u=a.dateString?new Date(a.dateString).toLocaleDateString("id-ID",{day:"numeric",month:"short"}):"",g=(a.orderId||"").split("-").pop(),h=(n.salesReturns||[]).filter(S=>String(S.orderId)===String(a.orderId||a.id)),v=h.length>0,w=h.reduce((S,M)=>S+(parseFloat(M.totalRefund)||0),0);return`
        <div class="card-native p-4 sm:p-5 rounded-2xl sm:rounded-3xl relative overflow-hidden group cursor-pointer active:scale-[0.99] transition-all duration-200" onclick="openOrderDetail('${a.orderId}')">
            <div class="flex items-center gap-3 sm:gap-4">
                <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${o} ${l} flex items-center justify-center shrink-0 transition-colors">
                    <i class="fa-solid fa-receipt text-xl sm:text-2xl"></i>
                </div>
                <div class="flex-1 min-w-0">
                    <div class="flex justify-between items-start mb-1 gap-2">
                        <div class="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                            <span class="font-bold text-sm sm:text-base text-slate-800 dark:text-slate-100 tracking-tight">#${g}</span>
                            <span class="text-[9px] font-bold px-2 py-0.5 rounded-lg border ${r} uppercase tracking-widest flex items-center"><i class="fa-solid ${s} mr-1"></i> ${p(a.status)}</span>
                            ${b?`
                            <span class="text-[9px] font-bold px-2 py-0.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 uppercase tracking-widest flex items-center gap-1">
                                <i class="fa-solid fa-cash-register text-[9px]"></i> Kasir: ${p(a.cashierName||"POS")}
                            </span>`:`
                            <span class="text-[9px] font-bold px-2 py-0.5 rounded-lg bg-[rgba(var(--color-primary-rgb),0.08)] border border-[rgba(var(--color-primary-rgb),0.25)] text-[var(--color-primary)] uppercase tracking-widest flex items-center gap-1">
                                <i class="fa-solid fa-globe text-[9px]"></i> Storefront
                            </span>`}
                        </div>
                        <span class="text-[10px] font-bold text-slate-400 flex items-center gap-1.5 whitespace-nowrap shrink-0"><i class="fa-regular fa-calendar"></i> <span class="hidden sm:inline">${u}</span></span>
                    </div>
                    <div class="flex items-center gap-2 mt-1.5 flex-wrap">
                        <p class="text-xs font-bold text-slate-600 dark:text-slate-300 truncate max-w-[140px] sm:max-w-xs"><i class="fa-solid fa-user text-slate-400 mr-1"></i> ${p(a.customer?.name||"Anonim")}</p>
                        <span class="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600 shrink-0"></span>
                        <span class="text-[9px] font-bold text-slate-500 bg-slate-100 dark:bg-slate-900 px-2 py-0.5 rounded-lg border border-slate-200 dark:border-slate-700 uppercase tracking-widest shrink-0">${m} Item</span>
                        <span class="text-[9px] font-bold ${a.customerType==="Member"?"text-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.08)] border border-[rgba(var(--color-primary-rgb),0.25)]":"text-slate-500 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700"} px-2 py-0.5 rounded-lg uppercase tracking-widest shrink-0">${a.customerType==="Member"?'<i class="fa-solid fa-star text-[var(--color-primary)] mr-1"></i>Member':"Umum"}</span>
                        ${a.customer?.lat?'<span class="text-[9px] font-bold text-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.1)] px-1.5 py-0.5 rounded-lg border border-[rgba(var(--color-primary-rgb),0.2)] uppercase tracking-widest shrink-0"><i class="fa-solid fa-location-dot"></i> GPS</span>':""}
                        ${a.delivery?.doNumber?`<span class="text-[9px] font-bold ${a.delivery.status==="delivered"?"text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800":a.delivery.status==="out_for_delivery"?"text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800":"text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800"} px-2 py-0.5 rounded-lg border uppercase tracking-widest shrink-0 flex items-center gap-1"><i class="fa-solid fa-truck-fast text-[8px]"></i> DO #${p(a.delivery.doNumber.split("-").pop())}</span>`:""}
                        ${v?`<span class="text-[9px] font-bold text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 px-2 py-0.5 rounded-lg uppercase tracking-widest shrink-0 flex items-center gap-1"><i class="fa-solid fa-right-left text-[8px]"></i> Retur: ${f(w)}</span>`:""}
                        ${a.buktiPayment?'<span class="text-[9px] font-bold text-violet-500 bg-violet-50 dark:bg-violet-900/20 px-1.5 py-0.5 rounded-lg border border-violet-100 dark:border-violet-800 uppercase tracking-widest shrink-0"><i class="fa-solid fa-image"></i></span>':""}
                    </div>
                </div>
                <div class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-700/60 flex items-center justify-center text-slate-400 group-hover:text-[var(--color-primary)] transition-all shrink-0">
                    <i class="fa-solid fa-chevron-right text-xs"></i>
                </div>
            </div>
            <div class="w-full border-t border-dashed border-slate-200 dark:border-slate-700/80 my-3.5"></div>
            <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                    <span class="font-extrabold text-[var(--color-primary)] text-lg sm:text-xl tracking-tight">${f(a.payment?.grandTotal)}</span>
                    ${(()=>{const S=qa(a);return S.hasPpn?`<span class="text-[8px] font-bold bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 px-1.5 py-0.5 rounded border border-amber-200 dark:border-amber-800 uppercase tracking-widest">${S.ppnRate>0?`PPN ${S.ppnRate}%`:"PPN 0%"}</span>`:""})()}
                </div>
                <div class="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-900/80 px-3 py-1.5 rounded-xl border border-slate-200/60 dark:border-slate-700/70">
                    <i class="fa-solid ${i} text-xs"></i>
                    <span class="text-[9px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-widest">${p(c)}</span>
                </div>
            </div>
        </div>`}).join("")},ls=()=>{j("admin-content",`
        <div class="card-native mb-4 p-4 sm:p-5 rounded-2xl flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-3">
                <div class="w-11 h-11 rounded-2xl flex items-center justify-center text-white shrink-0" style="background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));">
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
            <button onclick="setOrderSourceFilter('all')" id="btn-ord-filter-all" class="h-10 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 active:scale-95 ${Se==="all"?"bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/60"}">
                Semua Pesanan
            </button>
            <button onclick="setOrderSourceFilter('pos')" id="btn-ord-filter-pos" class="h-10 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 active:scale-95 ${Se==="pos"?"bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/60"}">
                <i class="fa-solid fa-cash-register text-[10px]"></i> Kasir POS
            </button>
            <button onclick="setOrderSourceFilter('storefront')" id="btn-ord-filter-storefront" class="h-10 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 active:scale-95 ${Se==="storefront"?"bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/60"}">
                <i class="fa-solid fa-globe text-[10px]"></i> Storefront Web
            </button>
        </div>

        <div id="admin-orders-list" class="space-y-3"><div class="text-center py-16"><div class="w-12 h-12 border-4 border-[rgba(var(--color-primary-rgb),0.2)] border-t-[var(--color-primary)] rounded-full animate-spin mx-auto"></div></div></div>
    `);const t=()=>{Pe&&(Pe(),tt(null));let e=!0;const a=P.collection("freshmart_orders").orderBy("timestamp","desc").limit(100).onSnapshot(r=>{if(_a([]),!e){let o=!1;r.docChanges().forEach(l=>{l.type==="added"&&l.doc.data().status==="Baru"&&(o=!0)}),o&&(x("Pesanan Baru Masuk!"),rs())}if(e=!1,r.empty){j("admin-orders-list",'<div class="flex flex-col items-center justify-center py-20 text-slate-400 font-bold bg-white dark:bg-slate-800 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm text-center"><i class="fa-solid fa-receipt text-5xl mb-4 opacity-30"></i>Belum ada pesanan</div>'),Le("stat-orders",0);return}Le("stat-orders",r.size+(r.size===100?"+":""));const s=[];r.docs.forEach(o=>s.push(o.data())),_a(s),na()},()=>{j("admin-orders-list",'<div class="text-center text-rose-500 font-bold">Koneksi terputus. Retrying...</div>'),setTimeout(t,5e3)});tt(a)};t()},It=t=>{const e=B.find(m=>m.orderId===t);if(!e)return;Mr(t);const a=qa(e),r=(n.salesReturns||[]).filter(m=>String(m.orderId)===String(e.orderId||e.id)),s=e.source==="pos"||e.channel==="pos",o=!!e.customer?.wa;e.status==="Diproses"||e.status==="Selesai"||e.status;const l=e.status==="Baru"?"Konfirmasi Pesanan Baru":e.status==="Diproses"?"Pesanan Sedang Diproses":e.status==="Selesai"?"Pesanan Selesai":e.status==="Dibatalkan"?"Pesanan Dibatalkan":e.status;let i=`<div class="relative w-full sm:w-40 mt-1"><select onchange="updateOrderStatus('${e.orderId}', this.value)" class="w-full text-sm font-bold ${e.status==="Baru"?"text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/50 border-rose-200 dark:border-rose-900/60":e.status==="Diproses"?"text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 border-blue-200 dark:border-blue-900/60":e.status==="Selesai"?"text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 border-emerald-200 dark:border-emerald-900/60":"text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700"} border px-4 py-2.5 rounded-xl focus:outline-none appearance-none cursor-pointer transition-colors shadow-sm"><option value="Baru" ${e.status==="Baru"?"selected":""} class="text-slate-800 dark:text-slate-100 dark:bg-slate-800">Baru (Pending)</option><option value="Diproses" ${e.status==="Diproses"?"selected":""} class="text-slate-800 dark:text-slate-100 dark:bg-slate-800">Diproses</option><option value="Selesai" ${e.status==="Selesai"?"selected":""} class="text-slate-800 dark:text-slate-100 dark:bg-slate-800">Selesai</option><option value="Dibatalkan" ${e.status==="Dibatalkan"?"selected":""} class="text-slate-800 dark:text-slate-100 dark:bg-slate-800">Dibatalkan</option></select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 ${e.status==="Baru"?"text-rose-400":e.status==="Diproses"?"text-blue-400":e.status==="Selesai"?"text-emerald-400":"text-slate-400"} pointer-events-none text-xs"></i></div>`;j("admin-order-modal-content",`
        <div class="flex flex-col gap-4 text-sm pb-2">
            <div class="bg-white dark:bg-slate-800 p-5 sm:p-6 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col sm:flex-row justify-between gap-5 sm:items-center">
                <div class="flex-1">
                    <p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5"><i class="fa-solid fa-crosshairs text-[var(--color-primary)]"></i> Status</p>
                    ${i}
                    <div class="mt-2.5 flex items-center gap-1.5 flex-wrap">
                        ${s?`
                        <span class="px-2.5 py-1 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-[11px] font-bold flex items-center gap-1.5">
                            <i class="fa-solid fa-cash-register text-xs"></i> Sumber: Dibuat di Kasir POS (Petugas: ${p(e.cashierName||"Kasir")})
                        </span>`:`
                        <span class="px-2.5 py-1 rounded-xl bg-[rgba(var(--color-primary-rgb),0.08)] border border-[rgba(var(--color-primary-rgb),0.25)] text-[var(--color-primary)] text-[11px] font-bold flex items-center gap-1.5">
                            <i class="fa-solid fa-globe text-xs"></i> Sumber: Pesanan Online (Website Storefront)
                        </span>`}
                    </div>
                    ${o?`
                    <button type="button" onclick="konfirmasiKeWA('${e.orderId}')" 
                        class="mt-3 w-full flex items-center justify-between gap-2.5 bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 px-4 py-3 rounded-xl transition-all active:scale-95 cursor-pointer shadow-sm group">
                        <div class="flex items-center gap-2.5 min-w-0">
                            <div class="w-8 h-8 rounded-lg bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-sm shadow-emerald-400/30">
                                <i class="fa-brands fa-whatsapp text-sm"></i>
                            </div>
                            <div class="min-w-0 text-left">
                                <p class="text-[11px] font-black uppercase tracking-widest leading-tight">Notifikasi WA Pembeli</p>
                                <p class="text-[10px] font-medium text-emerald-600/70 dark:text-emerald-400/70 truncate mt-0.5">${l}</p>
                            </div>
                        </div>
                        <i class="fa-solid fa-paper-plane text-xs text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0"></i>
                    </button>`:""}
                </div>
                <div class="text-left sm:text-right flex flex-col justify-center">
                    <p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">ID Pesanan</p>
                    <p class="text-sm sm:text-base font-bold text-slate-900 dark:text-white break-all tracking-wide">#${e.orderId}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-1.5">${e.dateString?new Date(e.dateString).toLocaleString("id-ID"):""}</p>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 items-start">
            <div class="flex flex-col gap-4">

            <div class="bg-white dark:bg-slate-800 p-5 sm:p-6 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm">
                <h4 class="font-bold text-slate-900 dark:text-white text-sm border-b border-slate-100 dark:border-slate-700 pb-4 mb-4 flex items-center gap-3"><div class="w-8 h-8 rounded-xl primary-light-icon-box flex items-center justify-center border border-slate-200 dark:border-slate-700"><i class="fa-solid fa-user"></i></div> Data Pemesan</h4>
                <div class="space-y-4">
                    <div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold">Nama</span><span class="font-bold text-slate-900 dark:text-white text-base">${p(e.customer?.name||"-")}</span></div>
                    ${e.customer?.wa?`<div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold flex items-center gap-1.5"><i class="fa-brands fa-whatsapp text-green-500"></i> WhatsApp</span><a href="javascript:void(0)" onclick="if(typeof window.openWhatsApp==='function') window.openWhatsApp('${p(e.customer.wa)}'); else window.open('https://wa.me/${p(e.customer.wa)}', '_blank', 'noopener,noreferrer');" class="font-bold text-green-600 dark:text-green-400 hover:underline cursor-pointer">+${p(e.customer.wa)}</a></div>`:""}
                    <div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold">Tipe Pemesan</span><span class="text-xs font-bold px-2.5 py-1 rounded-lg ${e.customerType==="Member"?"bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.25)]":"bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 border border-slate-200 dark:border-slate-700"}">${e.customerType==="Member"?'<i class="fa-solid fa-star text-amber-500 mr-1"></i> Member Resmi':'<i class="fa-solid fa-user text-slate-400 mr-1"></i> Pelanggan Umum'}</span></div>
                    ${e.customer?.wa&&e.customerType!=="Member"?`<button type="button" onclick="saveOrderCustomerToDB('${p(e.customer.name||"")}','${p(e.customer.wa)}','${p(e.orderId)}')" class="w-full py-2.5 rounded-xl primary-bg active:scale-95 text-white shadow-md shadow-[rgba(var(--color-primary-rgb),0.2)] text-[11px] font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all"><i class="fa-solid fa-address-book"></i> + Konfirmasi &amp; Daftarkan Sebagai Member</button>`:""}
                    ${e.customerType==="Member"?'<div class="w-full py-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 text-[11px] font-black uppercase tracking-widest flex items-center justify-center gap-2"><i class="fa-solid fa-circle-check"></i> Terverifikasi — Data Member Terkunci</div>':""}
                    <div class="border-t border-dashed border-slate-200 dark:border-slate-700 pt-4">
                        <span class="text-slate-500 dark:text-slate-400 font-bold flex items-center gap-2 mb-2.5"><i class="fa-solid fa-map-location-dot"></i> Alamat Pemesan (${s?"Beli Langsung di Kasir (Takeaway)":e.customer?.deliveryMethod==="delivery"?"Dikirim":"Ambil di Toko"})</span>
                        <div class="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700 font-bold text-slate-700 dark:text-slate-300 leading-relaxed shadow-inner text-sm">${p(e.customer?.address||"-")}</div>
                        ${e.customer?.lat&&e.customer?.deliveryMethod==="delivery"&&!e.isDropPoint?`<a href="https://www.google.com/maps?q=${p(e.customer.lat)},${p(e.customer.lng)}" target="_blank" class="mt-3 flex items-center justify-center gap-2 bg-[rgba(var(--color-primary-rgb),0.07)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.25)] font-bold text-xs py-2.5 px-4 rounded-xl hover:bg-[rgba(var(--color-primary-rgb),0.12)] transition-colors"><i class="fa-solid fa-location-dot"></i> Buka Lokasi Pembeli di Google Maps</a>`:""}
                    </div>
                    ${e.isDropPoint&&e.dropPoint?`<div class="border-2 border-[var(--color-primary)]/30 bg-[rgba(var(--color-primary-rgb),0.04)] dark:bg-[rgba(var(--color-primary-rgb),0.1)] rounded-xl p-4 mt-2">
                        <p class="text-[10px] font-bold uppercase tracking-widest text-[var(--color-primary)] mb-3 flex items-center gap-1.5"><i class="fa-solid fa-location-dot"></i> DIKIRIM KE LOKASI BERBEDA</p>
                        <div class="space-y-2">
                            <div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold text-xs">Nama Penerima</span><span class="font-bold text-slate-900 dark:text-white">${p(e.dropPoint.name||"-")}</span></div>
                            ${e.dropPoint.wa?`<div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold text-xs flex items-center gap-1"><i class="fa-brands fa-whatsapp text-green-500"></i> WA Penerima</span><a href="javascript:void(0)" onclick="if(typeof window.openWhatsApp==='function') window.openWhatsApp('${p(e.dropPoint.wa)}'); else window.open('https://wa.me/${p(e.dropPoint.wa)}', '_blank', 'noopener,noreferrer');" class="font-bold text-green-600 dark:text-green-400 hover:underline cursor-pointer">+${p(e.dropPoint.wa)}</a></div>`:""}
                            <div class="border-t border-[var(--color-primary)]/15 pt-2 mt-2">
                                <span class="text-slate-500 dark:text-slate-400 font-bold text-xs block mb-1.5">Alamat Tujuan Pengiriman</span>
                                <div class="bg-white dark:bg-slate-800 p-3 rounded-xl border border-[var(--color-primary)]/20 font-bold text-slate-700 dark:text-slate-300 leading-relaxed shadow-inner text-sm">${p(e.dropPoint.address||"-")}</div>
                                ${e.dropPoint.lat?`<a href="https://www.google.com/maps?q=${p(e.dropPoint.lat)},${p(e.dropPoint.lng)}" target="_blank" class="mt-2 flex items-center justify-center gap-2 bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] border border-[var(--color-primary)]/30 font-bold text-xs py-2.5 px-4 rounded-xl hover:bg-[rgba(var(--color-primary-rgb),0.18)] transition-colors"><i class="fa-solid fa-location-dot"></i> Buka Lokasi Tujuan di Google Maps</a>`:""}
                                ${e.dropPoint.wa?`<button type="button" onclick="konfirmasiKeWAPenerima('${e.orderId}')" class="mt-2.5 w-full py-2 bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/40 dark:hover:bg-emerald-900/60 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-700 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs active:scale-95"><i class="fa-brands fa-whatsapp text-sm"></i> Notifikasi Pengiriman ke WA Penerima</button>`:""}
                            </div>
                        </div>
                    </div>`:""}
                    ${e.customer?.note?`<div class="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl border border-amber-200 dark:border-amber-800 mt-2"><p class="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-1.5"><i class="fa-solid fa-note-sticky"></i> Catatan Pembeli</p><p class="text-sm text-amber-900 dark:text-amber-100 font-bold">${p(e.customer.note)}</p></div>`:""}
                    ${e.buktiPayment?`<div class="bg-violet-50 dark:bg-violet-900/20 p-4 rounded-xl border border-violet-200 dark:border-violet-800 mt-2"><p class="text-[10px] font-bold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-2.5"><i class="fa-solid fa-image"></i> Bukti Pembayaran</p><a href="${p(e.buktiPayment)}" target="_blank" class="block rounded-xl overflow-hidden border border-violet-200 dark:border-violet-800"><img src="${p(e.buktiPayment)}" alt="Bukti Pembayaran" class="w-full max-h-48 object-cover" onerror="this.style.display='none'" loading="lazy"><div class="bg-violet-100 dark:bg-violet-900/40 py-2 text-center text-[10px] font-bold text-violet-600 dark:text-violet-400"><i class="fa-solid fa-arrow-up-right-from-square mr-1"></i> Tap untuk buka</div></a></div>`:""}
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
                    ${(()=>{const m=e.delivery?.status||"pending_dispatch",u=m==="delivered",g=m==="out_for_delivery";return`<span class="px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider border shrink-0 whitespace-nowrap ${u?"bg-emerald-100 text-emerald-800 border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800":g?"bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800":"bg-amber-100 text-amber-800 border-amber-300 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800"}">${u?"Terkirim & TTD":g?"Dalam Perjalanan":"Menunggu Muat"}</span>`})()}
                </div>

                <div class="grid grid-cols-2 gap-3 text-xs">
                    <div>
                        <span class="text-slate-400 font-medium block text-[10px]">No. Surat Jalan (DO):</span>
                        <span class="font-bold font-mono text-slate-800 dark:text-slate-100">${p(e.delivery?.doNumber||"Belum Diterbitkan")}</span>
                    </div>
                    <div>
                        <span class="text-slate-400 font-medium block text-[10px]">Armada &amp; Supir:</span>
                        <span class="font-bold text-slate-800 dark:text-slate-100 truncate block">${p(e.delivery?.fleetName||"Pick-up L300")} ${e.delivery?.driverName?`(${p(e.delivery.driverName)})`:""}</span>
                    </div>
                </div>

                ${e.delivery?.signature?.signerName?`
                <div class="bg-emerald-50 dark:bg-emerald-950/30 p-2.5 rounded-xl border border-emerald-200 dark:border-emerald-800 flex items-center gap-3">
                    <img src="${e.delivery.signature.signatureDataUrl}" alt="TTD" class="h-10 w-auto bg-white rounded p-1 border border-emerald-300">
                    <div class="text-[11px] text-emerald-800 dark:text-emerald-300">
                        <p class="font-bold">Serah Terima Ditandatangani</p>
                        <p class="text-[10px] font-medium text-emerald-600 dark:text-emerald-400">Oleh: ${p(e.delivery.signature.signerName)}</p>
                    </div>
                </div>`:""}

                <div class="pt-1 flex flex-col sm:flex-row gap-2.5">
                    <button type="button" onclick="openDeliveryModal('${p(e.orderId)}')" class="btn-native-action w-full sm:flex-1 h-11 py-2.5 px-4 rounded-xl text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-xs cursor-pointer active:scale-95 shrink-0 transition-transform" style="background: var(--color-primary);">
                        <i class="fa-solid fa-truck-fast text-sm"></i>
                        <span>Kelola Pengiriman &amp; DO</span>
                    </button>
                    <button type="button" onclick="printOfficialDeliveryOrderA4('${p(e.orderId)}')" class="btn-native-action w-full sm:w-auto px-4 h-11 py-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 hover:bg-slate-50 text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer active:scale-95 shrink-0 transition-transform">
                        <i class="fa-solid fa-print text-amber-500 text-sm"></i>
                        <span>Cetak DO A4</span>
                    </button>
                    <button type="button" onclick="if(typeof window.closeOrderDetailModal==='function') window.closeOrderDetailModal(); if(window.openSalesReturnModal){window.openSalesReturnModal('${p(e.orderId)}');} else if(window.openAdminTab){window.openAdminTab('returns');}" class="btn-native-action w-full sm:w-auto px-4 h-11 py-2.5 rounded-xl border border-rose-200 dark:border-rose-800 bg-rose-50/80 dark:bg-rose-950/30 hover:bg-rose-100 dark:hover:bg-rose-900/40 text-rose-700 dark:text-rose-300 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer active:scale-95 shrink-0 transition-transform" title="Proses Pengembalian Barang Nota Ini">
                        <i class="fa-solid fa-right-left text-rose-500 text-sm"></i>
                        <span>Retur (RMA)</span>
                    </button>
                </div>
            </div>

            </div>

            <div class="flex flex-col gap-4">

            <div class="bg-white dark:bg-slate-800 p-5 sm:p-6 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm">
                <h4 class="font-bold text-slate-900 dark:text-white text-sm border-b border-slate-100 dark:border-slate-700 pb-4 mb-4 flex items-center gap-3"><div class="w-8 h-8 rounded-xl primary-light-icon-box flex items-center justify-center border border-slate-200 dark:border-slate-700"><i class="fa-solid fa-box-open"></i></div> Rincian Item</h4>
                <div class="space-y-3">${e.items.map(m=>{const u=r.reduce((g,h)=>{const v=(h.items||[]).find(w=>String(w.id)===String(m.id)&&(w.variantName||"")===(m.variantName||""));return g+(v&&parseFloat(v.qty)||0)},0);return`
                    <div class="flex justify-between items-center bg-slate-50 dark:bg-slate-900 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm min-w-0">
                        <div class="flex items-center gap-3 min-w-0">
                            <div class="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 flex items-center justify-center text-slate-500 dark:text-slate-400 shrink-0"><i class="fa-solid fa-tag text-sm"></i></div>
                            <div class="min-w-0">
                                <p class="font-bold text-sm text-slate-900 dark:text-white truncate mb-1" title="${p(m.name)}">${p(m.name)}</p>
                                ${m.variantName||m.poTime?`
                                <div class="flex flex-wrap gap-1 mb-1">
                                    ${m.variantName?`<span class="bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-1.5 py-0.5 rounded-lg border border-slate-300 dark:border-slate-600 text-[9px] font-bold">${p(m.variantName)}</span>`:""}
                                    ${m.poTime?`<span class="amber-badge px-1.5 py-0.5 rounded-lg text-[8px] font-bold uppercase">PO ${p(m.poTime)}</span>`:""}
                                </div>
                                `:""}
                                <p class="text-[11px] text-slate-500 dark:text-slate-400 font-bold flex items-center gap-2 flex-wrap">
                                    <span>${parseFloat(m.qty)} ${p(m.unit||"pcs")} x ${f(m.effectivePrice)}</span>
                                    ${u>0?`
                                    <span class="inline-flex items-center gap-1 text-[10px] font-black text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 px-2 py-0.5 rounded-md border border-rose-200 dark:border-rose-800">
                                        <i class="fa-solid fa-right-left text-[9px]"></i> Diretur: ${u} ${p(m.unit||"pcs")}
                                    </span>`:""}
                                </p>
                            </div>
                        </div>
                        <div class="font-bold text-sm text-slate-900 dark:text-white ml-3 shrink-0">${f(m.effectivePrice*parseFloat(m.qty))}</div>
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
                                    <span class="font-black text-xs text-rose-700 dark:text-rose-400 font-mono">${p(m.id)}</span>
                                    <span class="text-[10px] font-bold text-slate-400">&middot; ${new Date(m.createdAt).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"})}</span>
                                </div>
                                <p class="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5">
                                    Kompensasi: <b class="capitalize">${m.refundMethod==="cash"?"Pengembalian Tunai":m.refundMethod==="credit"?"Store Credit":"Tukar Barang"}</b>
                                    ${m.notes?`&middot; <i>"${p(m.notes)}"</i>`:""}
                                </p>
                            </div>
                            <div class="flex items-center gap-2.5 justify-between sm:justify-end">
                                <span class="text-xs font-black text-rose-600 dark:text-rose-400 font-mono">${f(m.totalRefund)}</span>
                                <button type="button" onclick="if(typeof window.closeOrderDetailModal==='function') window.closeOrderDetailModal(); if(window.openAdminTab){window.openAdminTab('returns');}" class="px-2.5 py-1 rounded-lg bg-rose-50 hover:bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800 text-[10px] font-bold transition-all cursor-pointer">
                                    Buka RMA
                                </button>
                            </div>
                        </div>
                    `).join("")}
                </div>
            </div>`:""}

            ${e.claimedReward?`
            <div class="bg-violet-50 dark:bg-violet-900/10 p-5 sm:p-6 rounded-[1.5rem] border border-violet-200 dark:border-violet-800 shadow-sm">
                <h4 class="font-bold text-violet-700 dark:text-violet-400 text-sm border-b border-violet-200 dark:border-violet-800 pb-4 mb-4 flex items-center gap-3"><div class="w-8 h-8 rounded-xl bg-violet-100 dark:bg-violet-900/40 text-violet-500 flex items-center justify-center border border-violet-200 dark:border-violet-800"><i class="fa-solid fa-gift"></i></div> Klaim Hadiah</h4>
                <div class="space-y-3">
                    <div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold text-xs">Hadiah</span><span class="font-bold text-violet-700 dark:text-violet-400 text-sm">${p(e.claimedReward.name)}</span></div>
                    <div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold text-xs">Poin Ditukar</span><span class="font-bold text-slate-800 dark:text-white text-sm">${e.claimedReward.pointsCost} Poin</span></div>
                    <div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold text-xs">Status</span><span class="font-bold text-xs px-2 py-1 rounded-xl ${e.claimedReward.status==="ready"?"bg-emerald-100 text-emerald-600":e.claimedReward.status==="waiting_stock"?"bg-amber-100 text-amber-600":"bg-slate-200 text-slate-600"}">${Dr(e.claimedReward)}</span></div>
                    ${e.claimedReward.note?`<div class="bg-white/70 dark:bg-slate-900/40 p-2.5 rounded-xl text-[11px] italic text-violet-600 dark:text-violet-400">"${p(e.claimedReward.note)}"</div>`:""}
                    <div class="border-t border-dashed border-violet-200 dark:border-violet-800 pt-3.5 mt-1 space-y-2.5">
                        <button type="button" onclick="ackRewardClaim('${e.orderId}','ready')" class="w-full py-2.5 rounded-xl primary-bg text-[11px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95 transition-all"><i class="fa-solid fa-check"></i> Stok Ada — Kirim Bersama Pesanan</button>
                        <button type="button" onclick="ackRewardClaim('${e.orderId}','waiting_stock')" class="w-full py-2.5 rounded-xl bg-amber-100 dark:bg-amber-900/30 hover:bg-amber-200 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800 text-[11px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95 transition-all"><i class="fa-solid fa-clock"></i> Stok Kosong — Tunda Pengiriman</button>
                    </div>
                </div>
            </div>`:""}

            <div class="bg-slate-900 p-6 sm:p-7 rounded-[1.5rem] text-white shadow-xl shadow-slate-900/20 border border-slate-700/60 relative overflow-hidden group mt-2">
                <div class="flex justify-between items-center border-b border-slate-700/80 pb-4 mb-4 relative z-10">
                    <h4 class="font-bold text-[11px] uppercase tracking-widest text-slate-300 flex items-center gap-2.5"><i class="fa-solid fa-wallet text-[var(--color-primary)] text-sm"></i> Ringkasan Bayar</h4>
                    <span class="bg-white/15 px-3 py-1 rounded-xl text-[10px] font-bold tracking-widest border border-white/20 uppercase shadow-inner text-white">${p(e.payment?.method||"").toUpperCase()}</span>
                </div>
                
                <div class="space-y-3 font-medium text-sm text-slate-300 relative z-10">
                    <div class="flex justify-between items-center"><span>Subtotal Produk</span><span class="font-bold text-white">${f(a.subtotal)}</span></div>
                    ${e.customer?.deliveryMethod==="delivery"?`<div class="flex justify-between items-center"><span>Ongkos Kirim</span><span class="font-bold text-white">${f(a.shipping)}</span></div>`:""}
                    ${a.shippingDiscount?`<div class="flex justify-between items-center text-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.15)] px-2 py-1 -mx-2 rounded-xl"><span>Diskon Ongkir</span><span class="font-bold">-${f(a.shippingDiscount)}</span></div>`:""}
                    ${a.productDiscount?`<div class="flex justify-between items-center text-rose-400 bg-rose-900/20 px-2 py-1 -mx-2 rounded-xl"><span>Diskon Promo</span><span class="font-bold">-${f(a.productDiscount)}</span></div>`:""}
                    ${a.pointDiscount>0?`
                    <div class="flex justify-between items-center text-emerald-400 bg-emerald-950/40 px-2.5 py-1.5 -mx-2 rounded-xl border border-emerald-800/40">
                        <span class="flex items-center gap-1.5 font-bold"><i class="fa-solid fa-tags text-emerald-400"></i> Diskon Poin Member</span>
                        <span class="font-bold font-mono">-${f(a.pointDiscount)}</span>
                    </div>`:""}
                    ${a.paylaterAdminFee>0?`<div class="flex justify-between items-center text-slate-300"><span>Biaya Admin PayLater</span><span class="font-bold text-white">+${f(a.paylaterAdminFee)}</span></div>`:""}
                    ${a.paylaterServiceFee>0?`<div class="flex justify-between items-center text-slate-300"><span>Biaya Penanganan / Layanan</span><span class="font-bold text-white">+${f(a.paylaterServiceFee)}</span></div>`:""}
                    ${a.hasPpn?`
                    <div class="flex justify-between items-center text-slate-400"><span>DPP (Dasar Pengenaan Pajak)</span><span class="font-bold text-white">${f(a.dppAmount)}</span></div>
                    <div class="flex justify-between items-center text-amber-400 bg-amber-900/20 px-2 py-1 -mx-2 rounded-xl"><span>${p(a.ppnLabel)}</span><span class="font-bold">${a.isInclusive?"":"+"}${f(a.ppnAmount)}</span></div>
                    `:""}
                </div>
                
                <div class="border-t border-dashed border-slate-600/60 my-5 relative z-10"></div>
                
                <div class="flex justify-between items-end relative z-10">
                    <span class="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Total Tagihan</span>
                    <span class="text-3xl font-bold text-[var(--color-primary)] tracking-tight font-extrabold">${f(a.grandTotal)}</span>
                </div>

                ${(()=>{if(!(e.payment?.method==="tempo"||e.isTempo))return"";const u=!!(e.payment?.isPaylater||e.isPaylater||e.payment?.subMethod==="paylater"),g=parseFloat(e.payment?.tempoDp??e.payment?.dp)||0,h=parseFloat(e.payment?.tempoBalance)||0,v=e.payment?.paymentStatus==="lunas"||h<=0;return`
                    <div class="mt-4 pt-3.5 border-t border-slate-700/80 space-y-2 relative z-10">
                        <div class="flex justify-between items-center text-xs">
                            <span class="text-slate-400 font-bold flex items-center gap-1.5">
                                <i class="fa-solid ${u?"fa-bolt text-emerald-400":"fa-hourglass-half text-amber-400"}"></i> Jenis Transaksi
                            </span>
                            <span class="font-bold ${u?"text-emerald-300":"text-amber-300"}">
                                ${u?"Putri PayLater Member VIP":"Penjualan Tempo (Piutang)"}
                            </span>
                        </div>
                        ${u&&e.payment?.paylaterMonths?`
                        <div class="flex justify-between items-center text-xs">
                            <span class="text-slate-400">Tenor Cicilan</span>
                            <span class="font-bold text-white font-mono">${e.payment.paylaterTenor==="2m"?"2 Bulan (2x Cicilan)":e.payment.paylaterTenor==="3m"?"3 Bulan (3x Cicilan)":"30 Hari (1x Bayar)"}</span>
                        </div>`:""}
                        ${u&&e.payment?.paylaterAdminFee>0?`
                        <div class="flex justify-between items-center text-xs">
                            <span class="text-slate-400">Biaya Admin PayLater</span>
                            <span class="font-bold text-slate-300 font-mono">+${f(e.payment.paylaterAdminFee)}</span>
                        </div>`:""}
                        ${u&&e.payment?.paylaterServiceFee>0?`
                        <div class="flex justify-between items-center text-xs">
                            <span class="text-slate-400">Biaya Layanan / Penanganan</span>
                            <span class="font-bold text-slate-300 font-mono">+${f(e.payment.paylaterServiceFee)}</span>
                        </div>`:""}
                        ${u?`
                        <div class="flex justify-between items-center text-xs">
                            <span class="text-slate-400">Limit PayLater Terpakai</span>
                            <span class="font-bold text-emerald-400 font-mono">${f(e.payment?.paylaterUsed||e.payment?.grandTotal-g)}</span>
                        </div>`:""}
                        <div class="flex justify-between items-center text-xs">
                            <span class="text-slate-400">Uang Muka (DP Dibayar)</span>
                            <span class="font-bold text-emerald-400 font-mono">${f(g)}</span>
                        </div>
                        <div class="flex justify-between items-center text-xs">
                            <span class="text-slate-400">Sisa Tagihan ${u?"PayLater":"Piutang"}</span>
                            <span class="font-bold font-mono ${v?"text-emerald-400":u?"text-emerald-300":"text-amber-400"}">${f(h)}</span>
                        </div>
                        ${u&&e.payment?.paylaterMonthlyInstallment?`
                        <div class="flex justify-between items-center text-xs text-emerald-300 font-bold bg-emerald-950/40 p-2 rounded-xl border border-emerald-800/40">
                            <span>Angsuran per Bulan (${e.payment?.paylaterMonths||1}x)</span>
                            <span class="font-mono">${f(e.payment.paylaterMonthlyInstallment)}/bln</span>
                        </div>`:""}
                        <div class="flex justify-between items-center text-xs">
                            <span class="text-slate-400">Status ${u?"PayLater":"Piutang"}</span>
                            <span class="px-2 py-0.5 rounded-lg text-[10px] font-black uppercase tracking-wider ${v?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/40":u?"bg-teal-500/20 text-teal-300 border border-teal-500/40":"bg-amber-500/20 text-amber-300 border border-amber-500/40"}">
                                ${v?"LUNAS":"BELUM LUNAS"}
                            </span>
                        </div>
                        <button type="button" onclick="if(typeof window.closeOrderDetailModal==='function') window.closeOrderDetailModal(); if(typeof window.openAdminTab==='function') window.openAdminTab('piutang'); setTimeout(() => { if(typeof window.openTempoDetail==='function') window.openTempoDetail('${p(e.orderId)}'); }, 300);" class="mt-2.5 w-full py-2.5 px-3 rounded-xl ${u?"bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40":"bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40"} text-[11px] font-bold flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-95 shadow-xs">
                            <i class="fa-solid ${u?"fa-bolt":"fa-file-invoice-dollar"}"></i> Kelola Tagihan &amp; Cicilan di Modul Piutang
                        </button>
                    </div>`})()}
            </div>

            </div>
            </div>
        </div>`);const d=k("admin-order-modal"),c=k("admin-order-modal-box"),b=k("admin-order-modal-content");b&&(b.scrollTop=0,b.style.transform="",b.style.transition=""),d&&d.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("adminOrder"),ie(d,c)},is=async(t,e,a=null)=>{const s=(typeof window.normalizeWA=="function"?window.normalizeWA:o=>String(o||"").replace(/\D/g,"").replace(/^0/,"62"))(e);if(!s||s.length<10)return x("Nomor WA tidak valid!");L("Menyimpan...");try{const o=P.collection("freshmart").doc("cms_data").collection("customers").doc(s),l=await o.get();if(l.exists){x(`Nomor ini sudah terdaftar atas nama: ${l.data().name}`),C();return}if(await o.set({id:parseInt(s,10),name:t||"-",phone:s,points:0,registeredAt:Date.now()}),a){await P.collection("freshmart_orders").doc(a).update({customerType:"Member"});const i=B.findIndex(d=>d.orderId===a);i!==-1&&(B[i].customerType="Member")}x("Pelanggan berhasil didaftarkan sebagai Member!"),a&&typeof window.openOrderDetail=="function"&&setTimeout(()=>window.openOrderDetail(a),400)}catch(o){console.error("Gagal simpan pelanggan:",o),x("Gagal menyimpan data pelanggan: "+(o.message||""))}finally{C()}},ns=async(t,e)=>{if(e==="waiting_stock"&&typeof window.customPrompt=="function"){window.customPrompt("Catatan untuk pelanggan:","Stok hadiah kosong, akan kami kirim susulan begitu stok tersedia kembali.",async r=>{if(r!==null){L("Menyimpan...");try{await P.collection("freshmart_orders").doc(t).update({"claimedReward.status":e,"claimedReward.note":r||""}),x("Status klaim hadiah diperbarui!");let s=B.findIndex(o=>o.orderId===t);s!==-1&&(B[s].claimedReward||(B[s].claimedReward={}),B[s].claimedReward.status=e,B[s].claimedReward.note=r||""),typeof window.openCustomerOrderDetail=="function"&&window.openCustomerOrderDetail(t)}catch(s){x("Gagal update klaim: "+s.message)}finally{C()}}});return}let a="";L("Menyimpan...");try{await P.collection("freshmart_orders").doc(t).update({"claimedReward.status":e,"claimedReward.note":a});const r=B.find(s=>s.orderId===t);r&&(r.claimedReward.status=e,r.claimedReward.note=a,It(t)),x("Status hadiah diperbarui!")}catch(r){console.error("Gagal update status hadiah:",r),x("Gagal update status hadiah: "+(r.message||""))}finally{C()}},da=(t=!1)=>{const e=k("admin-order-modal"),a=k("admin-order-modal-box"),r=()=>{X(e,a)};typeof window.requestCloseModal=="function"?window.requestCloseModal("adminOrder",t,r):r()},ca=async(t,e=null)=>{try{let a=e;if(!a){const l=await P.collection("freshmart_orders").doc(t).get();if(!l.exists)return;a=l.data()}if(!a)return;if((n.store?.useStock===!0||n.store?.useStock==="true")&&!a.isStockRestocked&&Array.isArray(a.items)&&a.items.length>0){for(const l of a.items){const i=l.id!=null?String(l.id):null,d=parseFloat(l.qty)||0;if(!(!i||d<=0))try{const c=P.collection("freshmart").doc("cms_data").collection("products").doc(i),b=await c.get();if(b.exists){const m=b.data();let u=(parseFloat(m.stock)||0)+d,g={stock:u};if(l.variantName&&Array.isArray(m.variants)){const h=m.variants.findIndex(v=>v.name===l.variantName);h!==-1&&(m.variants[h].stock=(parseFloat(m.variants[h].stock)||0)+d,m.variants[h].stock>0&&(m.variants[h].isActive=!0),g.variants=m.variants)}if(await c.update(g),Array.isArray(n.products)){const h=n.products.find(v=>String(v.id)===i);h&&(h.stock=u,g.variants&&(h.variants=g.variants))}}}catch(c){console.warn(`[Auto-Restock] Gagal restock produk ${i}:`,c)}}a.isStockRestocked=!0}const s=a.customerPhone||a.customer?.wa;if(!a.isPointsRolledBack&&s){try{const l=P.collection("freshmart").doc("cms_data").collection("customers").doc(s),i=await l.get();if(i.exists){const d=i.data();let c=parseFloat(d.points)||0;const b=parseFloat(a.pointsEarned)||0;if(b>0&&(c=Math.max(0,c-b)),a.claimedReward&&a.claimedReward.id){const m=parseFloat(a.claimedReward.pointsCost)||0;m>0&&(c+=m);try{const u=P.collection("freshmart").doc("cms_data").collection("rewards").doc(String(a.claimedReward.id)),g=await u.get();if(g.exists){const h=g.data(),v=(parseFloat(h.stock)||0)+1;if(await u.update({stock:v}),Array.isArray(n.rewards)){const w=n.rewards.find(S=>String(S.id)===String(a.claimedReward.id));w&&(w.stock=v)}}}catch(u){console.warn("[Auto-Restock] Gagal restock hadiah:",u)}a.claimedReward.status="cancelled"}if(await l.update({points:c}),Array.isArray(n.customers)){const m=n.customers.find(u=>String(u.phone)===s||String(u.id)===s);m&&(m.points=c)}}}catch(l){console.warn("[Auto-Restock] Gagal rollback poin member:",l)}a.isPointsRolledBack=!0}const o=!!(a.payment?.isPaylater||a.isPaylater||a.payment?.subMethod==="paylater");if(!a.isPaylaterRolledBack&&o&&s){const l=a.paylaterLimitTracked!==!1;try{const i=(parseFloat(a.payment?.paylaterUsed)||0)>0?Fr(a.payment):parseFloat(a.paylaterUsed||a.payment?.tempoBalance)||0;if(i>0&&l){const d=s.replace(/\D/g,""),c=d.startsWith("0")?"62"+d.slice(1):d,b=P.collection("freshmart").doc("cms_data").collection("customers").doc(c);if(await P.runTransaction(async m=>{const u=await m.get(b),g=Math.max(0,parseFloat(u.exists&&u.data().paylaterUsed||0)),h=Math.max(0,g-i);u.exists?m.update(b,{paylaterUsed:h}):m.set(b,{paylaterUsed:0},{merge:!0})}),Array.isArray(n.customers)){const m=n.customers.find(u=>u&&(String(u.phone).replace(/\D/g,"")===d||String(u.id)===c));m&&(m.paylaterUsed=Math.max(0,Math.max(0,parseFloat(m.paylaterUsed)||0)-i))}}else i>0&&!l&&console.info("[PayLater Rollback] Dilewati: pesanan ini tidak berhasil update Firestore saat checkout (paylaterLimitTracked=false). Tidak ada rollback diperlukan.")}catch(i){console.warn("[Auto-Restock] Gagal rollback limit PayLater:",i)}a.isPaylaterRolledBack=!0}if(await P.collection("freshmart_orders").doc(t).update({isStockRestocked:a.isStockRestocked||!1,isPointsRolledBack:a.isPointsRolledBack||!1,isPaylaterRolledBack:a.isPaylaterRolledBack||!1,...a.claimedReward?{claimedReward:a.claimedReward}:{}}).catch(()=>{}),Array.isArray(B)){const l=B.findIndex(i=>i.orderId===t);l!==-1&&(B[l].isStockRestocked=a.isStockRestocked,B[l].isPointsRolledBack=a.isPointsRolledBack,a.claimedReward&&(B[l].claimedReward=a.claimedReward))}}catch(a){console.error("[Auto-Restock] Gagal proses pemulihan stok/poin:",a)}},ds=async(t,e=null)=>{try{let a=e;if(!a){const l=await P.collection("freshmart_orders").doc(t).get();if(!l.exists)return;a=l.data()}if(!a)return;if((n.store?.useStock===!0||n.store?.useStock==="true")&&a.isStockRestocked&&Array.isArray(a.items)&&a.items.length>0){for(const l of a.items){const i=l.id!=null?String(l.id):null,d=parseFloat(l.qty)||0;if(!(!i||d<=0))try{const c=P.collection("freshmart").doc("cms_data").collection("products").doc(i),b=await c.get();if(b.exists){const m=b.data();let u=Math.max(0,(parseFloat(m.stock)||0)-d),g={stock:u};if(l.variantName&&Array.isArray(m.variants)){const h=m.variants.findIndex(v=>v.name===l.variantName);h!==-1&&(m.variants[h].stock=Math.max(0,(parseFloat(m.variants[h].stock)||0)-d),m.variants[h].stock<=0&&(m.variants[h].isActive=!1),g.variants=m.variants)}if(await c.update(g),Array.isArray(n.products)){const h=n.products.find(v=>String(v.id)===i);h&&(h.stock=u,g.variants&&(h.variants=g.variants))}}}catch(c){console.warn(`[Auto-Deduct] Gagal potong stok produk ${i}:`,c)}}a.isStockRestocked=!1}const s=a.customerPhone||a.customer?.wa;if(a.isPointsRolledBack&&s){try{const l=P.collection("freshmart").doc("cms_data").collection("customers").doc(s),i=await l.get();if(i.exists){const d=i.data();let c=parseFloat(d.points)||0;const b=parseFloat(a.pointsEarned)||0;if(b>0&&(c+=b),a.claimedReward&&a.claimedReward.id){const m=parseFloat(a.claimedReward.pointsCost)||0;m>0&&(c=Math.max(0,c-m));try{const u=P.collection("freshmart").doc("cms_data").collection("rewards").doc(String(a.claimedReward.id)),g=await u.get();if(g.exists){const h=g.data(),v=Math.max(0,(parseFloat(h.stock)||0)-1);if(await u.update({stock:v}),Array.isArray(n.rewards)){const w=n.rewards.find(S=>String(S.id)===String(a.claimedReward.id));w&&(w.stock=v)}}}catch(u){console.warn("[Auto-Deduct] Gagal potong stok hadiah:",u)}a.claimedReward.status="pending"}if(await l.update({points:c}),Array.isArray(n.customers)){const m=n.customers.find(u=>String(u.phone)===s||String(u.id)===s);m&&(m.points=c)}}}catch(l){console.warn("[Auto-Deduct] Gagal alokasi ulang poin member:",l)}a.isPointsRolledBack=!1}const o=!!(a.payment?.isPaylater||a.isPaylater||a.payment?.subMethod==="paylater");if(a.isPaylaterRolledBack&&o&&s){try{const l=parseFloat(a.payment?.paylaterUsed||a.paylaterUsed||a.payment?.tempoBalance)||0;if(l>0){const i=s.replace(/\D/g,""),d=i.startsWith("0")?"62"+i.slice(1):i,c=P.collection("freshmart").doc("cms_data").collection("customers").doc(d);if(await P.runTransaction(async b=>{const m=await b.get(c);if(m.exists){const u=Math.max(0,parseFloat(m.data().paylaterUsed)||0);b.update(c,{paylaterUsed:u+l})}}),Array.isArray(n.customers)){const b=n.customers.find(m=>m&&(String(m.phone).replace(/\D/g,"")===i||String(m.id)===d));b&&(b.paylaterUsed=Math.max(0,parseFloat(b.paylaterUsed)||0)+l)}}}catch(l){console.warn("[Auto-Deduct] Gagal re-apply limit PayLater:",l)}a.isPaylaterRolledBack=!1}if(await P.collection("freshmart_orders").doc(t).update({isStockRestocked:!1,isPointsRolledBack:!1,isPaylaterRolledBack:!1,...a.claimedReward?{claimedReward:a.claimedReward}:{}}).catch(()=>{}),Array.isArray(B)){const l=B.findIndex(i=>i.orderId===t);l!==-1&&(B[l].isStockRestocked=!1,B[l].isPointsRolledBack=!1,a.claimedReward&&(B[l].claimedReward=a.claimedReward))}}catch(a){console.error("[Auto-Deduct] Gagal proses deduksi stok/poin:",a)}},cs=async(t,e)=>{if(!Tt){$e(!0),L("Update...");try{let a=B.find(s=>s.orderId===t);const r=a?a.status:null;await P.collection("freshmart_orders").doc(t).update({status:e}),a&&(a.status=e),e==="Dibatalkan"&&r!=="Dibatalkan"?(await ca(t,a),x("Pesanan dibatalkan & stok dikembalikan ke toko!","info")):r==="Dibatalkan"&&e!=="Dibatalkan"?(await ds(t,a),x("Pesanan diaktifkan kembali & stok dipotong!","info")):x("Status berhasil diperbarui!"),It(t)}catch{x("Gagal!")}finally{$e(!1),C()}}},ps=async t=>{if(!t)return x("ID pesanan tidak valid!");let e=B.find($=>$.orderId===t);if(!e){L("Memuat data...");try{const $=await P.collection("freshmart_orders").doc(t).get();if(C(),!$.exists)return x("Data pesanan tidak ditemukan!");e=$.data()}catch{C(),x("Gagal memuat data pesanan!");return}}const a=e.customer&&e.customer.wa;if(!a)return x("Nomor WhatsApp pelanggan tidak tersedia!");const r=n&&n.store&&n.store.name?n.store.name:"Toko Putri",s=n&&n.store&&n.store.phone?n.store.phone:"",o=e.customer&&e.customer.name?e.customer.name:"Pelanggan",l=e.status||"Baru",i=e.payment&&e.payment.grandTotal?f(e.payment.grandTotal):"-",d=(t||"").split("-").pop(),c=e.payment&&e.payment.method?e.payment.method:"",b=!!(e.payment?.isPaylater||e.payment?.subMethod==="paylater"),m=c==="transfer"?"Transfer Bank":c==="qris"?"QRIS":c==="cod"?"COD (Bayar di Tempat)":c==="tempo"&&b?"Putri PayLater":c==="tempo"?"Penjualan Tempo":c==="cashier"||c==="cash"?"Tunai":c.toUpperCase(),u=e.source==="pos"||e.channel==="pos",h=e.customer?.deliveryMethod==="delivery",w=(e.items||[]).slice(0,3).map($=>`  • ${$.name}${$.variantName?` (${$.variantName})`:""} x${parseFloat($.qty)}`).join(`
`),S=(e.items||[]).length>3?`  ...dan ${(e.items||[]).length-3} item lainnya`:"",M=w+(S?`
`+S:"");let D="";u||(e.isDropPoint&&e.dropPoint?D=`
📍 *Dikirim ke Lokasi:*
👤 Penerima: *${e.dropPoint.name||"-"}*
🏠 Alamat Tujuan: ${e.dropPoint.address||"-"}
`:h&&e.customer?.address?D=`
🚚 *Alamat Pengiriman:*
${e.customer.address}
`:h||(D=`
🏪 *Metode:* Ambil di Toko
`));let A="";l==="Baru"?A=`Halo Bapak/Ibu *${o}*,

Terima kasih telah mempercayakan kebutuhan material & perlengkapan bangunan Anda kepada *${r}*.

📋 *KONFIRMASI PESANAN MATERIAL*
• No. Referensi : *#${d}*
• Total Transaksi : *${i}*
• Metode Bayar : *${m}*

📦 *Rincian Barang:*
${M}
`+D+`
Saat ini pesanan Anda telah masuk ke sistem kami dan sedang diverifikasi oleh admin operasional.`+(s?`

Untuk pertanyaan teknis, perubahan jadwal kirim, atau permintaan faktur/nota resmi, silakan hubungi kami melalui nomor ini. Terima kasih atas kerja sama Anda.`:`

Terima kasih.`):l==="Diproses"?A=`Halo Bapak/Ibu *${o}*,

Pemberitahuan pemrosesan pesanan material dari *${r}*:

📋 *STATUS PESANAN: SEDANG DISIAPKAN*
• No. Referensi : *#${d}*
• Total Tagihan : *${i}*

📦 *Daftar Material:*
${M}
`+D+(h&&!e.isDropPoint?`
Tim logistik kami sedang menyiapkan & memuat barang ke armada. Material akan segera dikirimkan ke alamat Anda. Mohon pastikan akses jalan dan ruang bongkar muat tersedia.`:e.isDropPoint?`
Material sedang disiapkan untuk pengiriman langsung ke lokasi proyek / penerima tujuan. Armada kami akan berkoordinasi saat proses bongkar muat.`:`
Material pesanan Anda sedang disiapkan di counter pick-up toko dan dapat diambil setelah konfirmasi kesiapan barang ini diterima.`)+`

Terima kasih atas kepercayaan dan kerja sama Anda bersama *${r}*.`:l==="Selesai"?A=`Halo Bapak/Ibu *${o}*,

📋 *SURAT JALAN & TRANSAKSI SELESAI*

Pesanan material *#${d}* dari *${r}* telah berhasil diserahterimakan dan diselesaikan.

• No. Referensi : *#${d}*
• Total Transaksi : *${i}*
• Metode Bayar : *${m}*

Seluruh barang telah diterima dengan baik. Terima kasih telah mempercayakan suplai material & alat teknik proyek Anda kepada *${r}*. Kami senantiasa siap mendukung proyek dan kebutuhan konstruksi Anda berikutnya.`:l==="Dibatalkan"?A=`Halo Bapak/Ibu *${o}*,

📋 *PEMBERITAHUAN PEMBATALAN PESANAN*

Kami menginformasikan bahwa pesanan material *#${d}* pada *${r}* telah dibatalkan dari sistem.

• No. Referensi : *#${d}*
• Nilai Transaksi : *${i}*

Apabila pembatalan ini memerlukan klarifikasi lebih lanjut atau Anda ingin melakukan pemesanan ulang / konsultasi spesifikasi material lain, silakan hubungi tim layanan pelanggan kami.

Terima kasih atas perhatian dan kerja sama Anda.`:A=`Halo Bapak/Ibu *${o}*,

Update status pesanan material *#${d}* dari *${r}*:

📦 Status Terkini : *${l}*
💰 Total Tagihan : *${i}*

Terima kasih atas kerja sama Anda bersama ${r}.`,typeof window.openWhatsApp=="function"?window.openWhatsApp(a,A):window.open(`https://wa.me/${a}?text=${encodeURIComponent(A)}`,"_blank","noopener,noreferrer")},ms=async t=>{if(!t)return x("ID pesanan tidak valid!");L("Memuat data...");try{const e=await P.collection("freshmart_orders").doc(t).get();if(C(),!e.exists)return x("Data pesanan tidak ditemukan!");const a=e.data(),r=a.dropPoint&&a.dropPoint.wa;if(!r)return x("Nomor WhatsApp penerima tujuan tidak tersedia!");const s=n&&n.store&&n.store.name?n.store.name:"Toko Putri",o=a.dropPoint&&a.dropPoint.name?a.dropPoint.name:"Penerima",l=a.customer&&a.customer.name?a.customer.name:"Pemesan",i=a.dropPoint&&a.dropPoint.address?a.dropPoint.address:"-",d=a.status||"Diproses",c=`Halo Bapak/Ibu *${o}*,

Kami dari tim logistik *${s}* menginformasikan jadwal pengiriman material proyek atas pesanan dari *${l}*:

📋 *DETAIL PENGIRIMAN LOGISTIK*
• No. Surat Jalan / Pesanan : *#${t.split("-").pop()}*
• Lokasi Proyek / Tujuan : ${i}
• Status Pengiriman : *${d}*

Armada kami akan mengantarkan material ke titik bongkar muat yang ditentukan. Mohon pastikan perwakilan proyek / mandor berada di lokasi saat armada tiba. Terima kasih atas kerja sama Anda.`;typeof window.openWhatsApp=="function"?window.openWhatsApp(r,c):window.open(`https://wa.me/${r}?text=${encodeURIComponent(c)}`,"_blank","noopener,noreferrer")}catch{C(),x("Gagal memuat data pesanan!")}},bs=t=>{pe("Hapus Pesanan","Apakah Anda yakin ingin menghapus data pesanan ini secara permanen? Jika pesanan belum dibatalkan, alokasi stok material akan otomatis dipulihkan ke inventori toko.",async()=>{if(!Tt){$e(!0),L("Menghapus...");try{let e=B.find(a=>a.orderId===t);(!e||e.status!=="Dibatalkan")&&await ca(t,e),await P.collection("freshmart_orders").doc(t).delete(),x("Pesanan berhasil dihapus dan inventori stok telah dipulihkan."),Ir===t&&da()}catch{x("Gagal!")}finally{$e(!1),C()}}})};window.exportOrdersToExcel=ss;window.setOrderSourceFilter=os;window.rAdmOrd=ls;window.openOrderDetail=It;window.saveOrderCustomerToDB=is;window.ackRewardClaim=ns;window.closeOrderDetailModal=da;window.updateOrderStatus=cs;window.konfirmasiKeWA=ps;window.konfirmasiKeWAPenerima=ms;window.deleteOrder=bs;const pa=()=>{let t=`
    <div class="max-w-full pb-8 sm:pb-12 text-sm fade-in">
        <!-- Header Banner Bento -->
        <div class="mb-5 flex items-center justify-between bg-white/95 dark:bg-slate-900/80 p-4 sm:p-5 rounded-[1.5rem] border border-slate-200/80 dark:border-slate-800 shadow-2xs">
            <div class="flex items-center gap-3.5">
                <div class="w-12 h-12 rounded-2xl text-white flex items-center justify-center text-xl shrink-0 shadow-md" style="background: linear-gradient(135deg, var(--color-primary-light, #e1b858) 0%, var(--color-primary, #c59b27) 50%, var(--color-primary-dark, #a87f1b) 100%); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.28);">
                    <i class="fa-solid fa-sliders"></i>
                </div>
                <div>
                    <h2 class="font-black text-sm sm:text-base text-slate-800 dark:text-white uppercase tracking-wider leading-tight">Pengaturan Toko</h2>
                    <p class="text-[10px] sm:text-xs font-semibold text-slate-400 dark:text-slate-500 mt-0.5">Kelola konfigurasi profil, katalog, pengiriman, pembayaran, dan operasional</p>
                </div>
            </div>
            <div class="hidden sm:flex items-center gap-2">
                <span class="px-3 py-1 rounded-xl border text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5" style="background: rgba(var(--color-primary-rgb), 0.08); border-color: rgba(var(--color-primary-rgb), 0.22); color: var(--color-primary);">
                    <i class="fa-solid fa-palette"></i> ${p(n.store.uiTheme||"gold")}
                </span>
            </div>
        </div>

        <!-- 8-Card Symmetrical Bento Grid (2x4 on Desktop, 4x2 on Mobile) -->
        <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-5 mb-6">
            <!-- 1. Profil Toko -->
            <button onclick="openSettingForm('profile')" class="group relative flex flex-col items-center justify-center gap-3 overflow-hidden p-5 sm:p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.03)] hover:shadow-lg dark:hover:bg-slate-800/60 rounded-[1.75rem] border border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-slate-900/60 shadow-xs cursor-pointer active:scale-95">
                <div class="relative z-10 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl text-white shadow-md transition-all duration-300 group-hover:scale-110" style="background: linear-gradient(135deg, var(--color-primary-light, #e1b858) 0%, var(--color-primary, #c59b27) 50%, var(--color-primary-dark, #a87f1b) 100%); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.28);">
                    <i class="fa-solid fa-store text-2xl sm:text-3xl"></i>
                </div>
                <div class="relative z-10">
                    <span class="block text-[10px] font-black uppercase leading-tight tracking-widest text-slate-800 dark:text-white sm:text-[11px]">Profil Toko</span>
                    <span class="mt-0.5 block text-[9px] font-bold text-slate-400 dark:text-slate-500">Branding &amp; Tema</span>
                </div>
            </button>

            <!-- 2. Kategori & Brand -->
            <button onclick="openSettingForm('catalog')" class="group relative flex flex-col items-center justify-center gap-3 overflow-hidden p-5 sm:p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.03)] hover:shadow-lg dark:hover:bg-slate-800/60 rounded-[1.75rem] border border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-slate-900/60 shadow-xs cursor-pointer active:scale-95">
                <div class="relative z-10 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl text-white shadow-md transition-all duration-300 group-hover:scale-110" style="background: linear-gradient(135deg, var(--color-primary-light, #e1b858) 0%, var(--color-primary, #c59b27) 50%, var(--color-primary-dark, #a87f1b) 100%); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.28);">
                    <i class="fa-solid fa-palette text-2xl sm:text-3xl"></i>
                </div>
                <div class="relative z-10">
                    <span class="block text-[10px] font-black uppercase leading-tight tracking-widest text-slate-800 dark:text-white sm:text-[11px]">Kategori &amp; Brand</span>
                    <span class="mt-0.5 block text-[9px] font-bold text-slate-400 dark:text-slate-500">Layout &amp; Navigasi</span>
                </div>
            </button>

            <!-- 3. Pengiriman & Lokasi -->
            <button onclick="openSettingForm('shipping')" class="group relative flex flex-col items-center justify-center gap-3 overflow-hidden p-5 sm:p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.03)] hover:shadow-lg dark:hover:bg-slate-800/60 rounded-[1.75rem] border border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-slate-900/60 shadow-xs cursor-pointer active:scale-95">
                <div class="relative z-10 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl text-white shadow-md transition-all duration-300 group-hover:scale-110" style="background: linear-gradient(135deg, var(--color-primary-light, #e1b858) 0%, var(--color-primary, #c59b27) 50%, var(--color-primary-dark, #a87f1b) 100%); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.28);">
                    <i class="fa-solid fa-motorcycle text-2xl sm:text-3xl"></i>
                </div>
                <div class="relative z-10">
                    <span class="block text-[10px] font-black uppercase leading-tight tracking-widest text-slate-800 dark:text-white sm:text-[11px]">Pengiriman</span>
                    <span class="mt-0.5 block text-[9px] font-bold text-slate-400 dark:text-slate-500">Ongkir &amp; Lokasi</span>
                </div>
            </button>

            <!-- 4. Pembayaran (QRIS & Putri PayLater) -->
            <button onclick="openSettingForm('payment')" class="group relative flex flex-col items-center justify-center gap-3 overflow-hidden p-5 sm:p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.03)] hover:shadow-lg dark:hover:bg-slate-800/60 rounded-[1.75rem] border border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-slate-900/60 shadow-xs cursor-pointer active:scale-95">
                <div class="relative z-10 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl text-white shadow-md transition-all duration-300 group-hover:scale-110" style="background: linear-gradient(135deg, var(--color-primary-light, #e1b858) 0%, var(--color-primary, #c59b27) 50%, var(--color-primary-dark, #a87f1b) 100%); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.28);">
                    <i class="fa-solid fa-wallet text-2xl sm:text-3xl"></i>
                </div>
                <div class="relative z-10">
                    <span class="block text-[10px] font-black uppercase leading-tight tracking-widest text-slate-800 dark:text-white sm:text-[11px]">Pembayaran</span>
                    <span class="mt-0.5 block text-[9px] font-bold text-slate-400 dark:text-slate-500">QRIS &amp; Putri PayLater</span>
                </div>
            </button>

            <!-- 5. Sistem & API -->
            <button onclick="openSettingForm('config')" class="group relative flex flex-col items-center justify-center gap-3 overflow-hidden p-5 sm:p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.03)] hover:shadow-lg dark:hover:bg-slate-800/60 rounded-[1.75rem] border border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-slate-900/60 shadow-xs cursor-pointer active:scale-95">
                <div class="relative z-10 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl text-white shadow-md transition-all duration-300 group-hover:scale-110" style="background: linear-gradient(135deg, var(--color-primary-light, #e1b858) 0%, var(--color-primary, #c59b27) 50%, var(--color-primary-dark, #a87f1b) 100%); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.28);">
                    <i class="fa-solid fa-laptop-code text-2xl sm:text-3xl"></i>
                </div>
                <div class="relative z-10">
                    <span class="block text-[10px] font-black uppercase leading-tight tracking-widest text-slate-800 dark:text-white sm:text-[11px]">Sistem &amp; API</span>
                    <span class="mt-0.5 block text-[9px] font-bold text-slate-400 dark:text-slate-500">Google Apps Script</span>
                </div>
            </button>

            <!-- 6. Operasional -->
            <button onclick="openSettingForm('operasional')" class="group relative flex flex-col items-center justify-center gap-3 overflow-hidden p-5 sm:p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.03)] hover:shadow-lg dark:hover:bg-slate-800/60 rounded-[1.75rem] border border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-slate-900/60 shadow-xs cursor-pointer active:scale-95">
                <div class="relative z-10 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl text-white shadow-md transition-all duration-300 group-hover:scale-110" style="background: linear-gradient(135deg, var(--color-primary-light, #e1b858) 0%, var(--color-primary, #c59b27) 50%, var(--color-primary-dark, #a87f1b) 100%); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.28);">
                    <i class="fa-solid fa-sliders text-2xl sm:text-3xl"></i>
                </div>
                <div class="relative z-10">
                    <span class="block text-[10px] font-black uppercase leading-tight tracking-widest text-slate-800 dark:text-white sm:text-[11px]">Operasional</span>
                    <span class="mt-0.5 block text-[9px] font-bold text-slate-400 dark:text-slate-500">Stok, Pajak &amp; Poin</span>
                </div>
            </button>

            <!-- 7. Printer Struk -->
            <button onclick="openPrinterSettingsModal()" class="group relative flex flex-col items-center justify-center gap-3 overflow-hidden p-5 sm:p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.03)] hover:shadow-lg dark:hover:bg-slate-800/60 rounded-[1.75rem] border border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-slate-900/60 shadow-xs cursor-pointer active:scale-95">
                <div class="relative z-10 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl text-white shadow-md transition-all duration-300 group-hover:scale-110" style="background: linear-gradient(135deg, var(--color-primary-light, #e1b858) 0%, var(--color-primary, #c59b27) 50%, var(--color-primary-dark, #a87f1b) 100%); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.28);">
                    <i class="fa-solid fa-print text-2xl sm:text-3xl"></i>
                </div>
                <div class="relative z-10">
                    <span class="block text-[10px] font-black uppercase leading-tight tracking-widest text-slate-800 dark:text-white sm:text-[11px]">Printer Struk</span>
                    <span class="mt-0.5 block text-[9px] font-bold text-slate-400 dark:text-slate-500">Bluetooth &amp; Thermal</span>
                </div>
            </button>

            <!-- 8. Backup & Data (Cloud Sync Hub) -->
            <button onclick="openAdminTab('backup_sync')" class="group relative flex flex-col items-center justify-center gap-3 overflow-hidden p-5 sm:p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.03)] hover:shadow-lg dark:hover:bg-slate-800/60 rounded-[1.75rem] border border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-slate-900/60 shadow-xs cursor-pointer active:scale-95">
                <div class="relative z-10 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl text-white shadow-md transition-all duration-300 group-hover:scale-110" style="background: linear-gradient(135deg, var(--color-primary-light, #e1b858) 0%, var(--color-primary, #c59b27) 50%, var(--color-primary-dark, #a87f1b) 100%); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.28);">
                    <i class="fa-solid fa-cloud-arrow-up text-2xl sm:text-3xl"></i>
                </div>
                <div class="relative z-10">
                    <span class="block text-[10px] font-black uppercase leading-tight tracking-widest text-slate-800 dark:text-white sm:text-[11px]">Backup &amp; Data</span>
                    <span class="mt-0.5 block text-[9px] font-bold text-slate-400 dark:text-slate-500">Pusat Cadangan Cloud</span>
                </div>
            </button>
        </div>

        <!-- 9. Bento Status Lisensi & Layanan Terkelola (SaaS Engine) -->
        ${Kr()}
    </div>
    `;j("admin-content",t)},us=t=>{const e=ft[t][500],a=document.getElementById("set-ui-theme"),r=document.getElementById("set-theme-color"),s=document.getElementById("set-theme-color-picker");a&&(a.value=t),r&&(r.value=e),s&&(s.value=e),document.querySelectorAll(".preset-color-chip").forEach(i=>{i.classList.remove("ring-4","ring-offset-2","ring-slate-400","dark:ring-slate-500","scale-110"),i.querySelector(".check-icon")?.classList.add("hidden")});const o=document.getElementById(`preset-chip-${t}`);o&&(o.classList.add("ring-4","ring-offset-2","ring-slate-400","dark:ring-slate-500","scale-110"),o.querySelector(".check-icon")?.classList.remove("hidden"));const l=document.getElementById("custom-color-chip");if(l){l.style.background="";const i=l.querySelector("i");i&&(i.style.color="")}za(t,e)},xs=t=>{let e=t;e==="dual_tone"&&(e="aurora_glow"),e==="geometric_3d"&&(e="tech_grid"),(e==="diagonal_skew"||e==="glass_studio")&&(e="minimalist");const a=document.getElementById("set-bg-style");a&&(a.value=e);const r=document.getElementById("set-bg-custom-url")?.value||"";document.querySelectorAll(".bg-mockup-card").forEach(o=>{o.classList.remove("active","border-[var(--color-primary)]","shadow-md","ring-2","ring-[var(--color-primary)]/20"),o.classList.add("border-slate-200","dark:border-slate-700/80");const l=o.querySelector(".active-check-badge");l&&l.classList.add("hidden")});const s=document.getElementById(`bg-opt-${e}`);if(s){s.classList.add("active","border-[var(--color-primary)]","shadow-md","ring-2","ring-[var(--color-primary)]/20"),s.classList.remove("border-slate-200","dark:border-slate-700/80");const o=s.querySelector(".active-check-badge");o&&o.classList.remove("hidden")}Ja(e,r)},fs=t=>{let e,a,r,s;if(t==="profile"){e="Profil Toko & Tampilan Visual",a="Kelola identitas utama toko, palet warna tema, model layout background, dan informasi legal",r="fa-store";const l=n.store.uiTheme||"emerald";let i=n.store.bgStyle||localStorage.getItem("freshmart_bg_style")||"minimalist";i==="dual_tone"&&(i="aurora_glow"),i==="geometric_3d"&&(i="tech_grid"),(i==="diagonal_skew"||i==="glass_studio")&&(i="minimalist");const d={gold:"Putri Gold",burgundy:"Burgundy",industrial:"Industrial CAT",emerald:"Emerald",teal:"Teal",lime:"Lime",cyan:"Cyan",sky:"Sky",blue:"Blue",indigo:"Indigo",violet:"Violet",purple:"Purple",fuchsia:"Fuchsia",pink:"Pink",rose:"Rose",red:"Red",orange:"Orange",amber:"Amber",yellow:"Yellow",green:"Green",slate:"Slate",stone:"Stone"},c=Object.keys(ft).map(b=>{const m=ft[b][500],u=d[b]||b,g=l===b;return`
                <button type="button" id="preset-chip-${b}" onclick="selectPresetTheme('${b}')" 
                        class="preset-color-chip w-10 h-10 rounded-full cursor-pointer transition-all duration-200 relative flex items-center justify-center shadow-sm hover:scale-105 ${g?"ring-4 ring-offset-2 ring-slate-400 dark:ring-slate-500 scale-110":""}" 
                        style="background-color: ${m}; border: 1.5px solid rgba(0,0,0,0.08)" 
                        title="${u}">
                    <i class="check-icon fa-solid fa-check text-white text-[11px] font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] ${g?"":"hidden"}"></i>
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
                        <input autocomplete='off' id="set-name" value="${p(n.store.name)}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Contoh: Toko Putri">
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Slogan Toko</label>
                        <input autocomplete='off' id="set-slogan" value="${p(n.store.slogan)}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Contoh: Belanja Hemat & Segar Setiap Hari">
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Logo Toko (Ikon Aplikasi PWA)</label>
                        <div class="flex gap-2">
                            <input autocomplete='off' id="set-logo" value="${p(n.store.logo)}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm flex-1 text-xs" placeholder="URL Logo atau klik upload">
                            <label class="bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 rounded-xl px-4 flex items-center justify-center cursor-pointer transition-all shrink-0 active:scale-95 shadow-sm font-bold text-xs">
                                <i class="fa-solid fa-cloud-arrow-up mr-1.5"></i> Upload
                                <input type="file" accept="image/*" class="hidden" onchange="handleImageUpload(this, 'set-logo')">
                            </label>
                        </div>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Email Resmi Toko</label>
                        <input autocomplete='off' id="set-email" value="${p(n.store.email||"")}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="admin@tokoputri.com">
                    </div>
                </div>

                <div>
                    <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Deskripsi Lengkap Toko</label>
                    <textarea id="set-description" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" rows="2" placeholder="Deskripsi profil toko yang tampil pada profil pelanggan dan informasi footer...">${p(n.store.description)}</textarea>
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

                <input type="hidden" id="set-ui-theme" value="${l}">
                <input type="hidden" id="set-theme-color" value="${p(n.store.themeColor||"#10b981")}">
                <div class="flex flex-wrap gap-3 pt-1">
                    ${c}
                    <div class="relative" title="Warna Kustom (Klik untuk pilih warna bebas)">
                        <label for="set-theme-color-picker" class="w-10 h-10 rounded-full cursor-pointer transition-all duration-200 relative flex items-center justify-center shadow-sm hover:scale-105 border-2 border-dashed border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 hover:border-[var(--color-primary)]" id="custom-color-chip">
                            <i class="fa-solid fa-pen text-slate-500 dark:text-slate-400 text-[11px]"></i>
                        </label>
                        <input type="color" id="set-theme-color-picker" value="${p(n.store.themeColor||"#10b981")}" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer rounded-full"
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

                <input type="hidden" id="set-bg-style" value="${i}">
                
                <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-3.5">
                    <!-- 1. Minimalis -->
                    <button type="button" onclick="selectBgStyle('minimalist')" id="bg-opt-minimalist"
                            class="bg-mockup-card flex flex-col items-center justify-between text-center p-3 sm:p-3.5 rounded-2xl border-2 transition-all duration-200 cursor-pointer ${i==="minimalist"?"active border-[var(--color-primary)] bg-white dark:bg-slate-800 shadow-md ring-2 ring-[var(--color-primary)]/20":"border-slate-200 dark:border-slate-700/80 bg-white/60 dark:bg-slate-800/60 hover:border-slate-300 dark:hover:border-slate-600"}">
                        <span class="active-check-badge ${i==="minimalist"?"":"hidden"} absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full primary-bg text-white text-[10px] flex items-center justify-center shadow-md z-20">
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
                            class="bg-mockup-card flex flex-col items-center justify-between text-center p-3 sm:p-3.5 rounded-2xl border-2 transition-all duration-200 cursor-pointer ${i==="hero_arch"?"active border-[var(--color-primary)] bg-white dark:bg-slate-800 shadow-md ring-2 ring-[var(--color-primary)]/20":"border-slate-200 dark:border-slate-700/80 bg-white/60 dark:bg-slate-800/60 hover:border-slate-300 dark:hover:border-slate-600"}">
                        <span class="active-check-badge ${i==="hero_arch"?"":"hidden"} absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full primary-bg text-white text-[10px] flex items-center justify-center shadow-md z-20">
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
                            class="bg-mockup-card flex flex-col items-center justify-between text-center p-3 sm:p-3.5 rounded-2xl border-2 transition-all duration-200 cursor-pointer ${i==="aurora_glow"?"active border-[var(--color-primary)] bg-white dark:bg-slate-800 shadow-md ring-2 ring-[var(--color-primary)]/20":"border-slate-200 dark:border-slate-700/80 bg-white/60 dark:bg-slate-800/60 hover:border-slate-300 dark:hover:border-slate-600"}">
                        <span class="active-check-badge ${i==="aurora_glow"?"":"hidden"} absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full primary-bg text-white text-[10px] flex items-center justify-center shadow-md z-20">
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
                            class="bg-mockup-card flex flex-col items-center justify-between text-center p-3 sm:p-3.5 rounded-2xl border-2 transition-all duration-200 cursor-pointer ${i==="tech_grid"?"active border-[var(--color-primary)] bg-white dark:bg-slate-800 shadow-md ring-2 ring-[var(--color-primary)]/20":"border-slate-200 dark:border-slate-700/80 bg-white/60 dark:bg-slate-800/60 hover:border-slate-300 dark:hover:border-slate-600"}">
                        <span class="active-check-badge ${i==="tech_grid"?"":"hidden"} absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full primary-bg text-white text-[10px] flex items-center justify-center shadow-md z-20">
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
                            class="bg-mockup-card flex flex-col items-center justify-between text-center p-3 sm:p-3.5 rounded-2xl border-2 transition-all duration-200 cursor-pointer ${i==="industrial"?"active border-[var(--color-primary)] bg-white dark:bg-slate-800 shadow-md ring-2 ring-[var(--color-primary)]/20":"border-slate-200 dark:border-slate-700/80 bg-white/60 dark:bg-slate-800/60 hover:border-slate-300 dark:hover:border-slate-600"}">
                        <span class="active-check-badge ${i==="industrial"?"":"hidden"} absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full primary-bg text-white text-[10px] flex items-center justify-center shadow-md z-20">
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
                        <input autocomplete="off" id="set-bg-custom-url" value="${p(n.store.bgCustomUrl||"")}"
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
                            <option value="true" ${n.store.showHeroSlide!==!1&&n.store.showHeroSlide!=="false"?"selected":""}>Ya, Tampilkan Slide Hero Sambutan (Default)</option>
                            <option value="false" ${n.store.showHeroSlide===!1||n.store.showHeroSlide==="false"?"selected":""}>Sembunyikan (Hanya Tampilkan Banner Promosi Produk)</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Teks Badge Status (Di Bawah Foto)</label>
                        <input autocomplete="off" id="set-hero-badge-text" value="${p(n.store.heroBadgeText||"Siap Melayani")}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Contoh: Siap Melayani">
                    </div>
                </div>

                <div>
                    <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Foto / Animasi Maskot (JPG · PNG · GIF Bergerak <i class="fa-solid fa-wand-magic-sparkles text-amber-500 ml-1"></i>)</label>
                    <div class="flex gap-2">
                        <input autocomplete="off" id="set-hero-mascot-img" value="${p(n.store.heroMascotImg||"")}"
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
                            ${n.store.logo?`
                            <button type="button" onclick="const l='${p(n.store.logo)}'; document.getElementById('set-hero-mascot-img').value=l; const p=document.getElementById('card-preview-mascot'); if(p) p.src=l; showToast('Logo toko dipilih');" class="text-[10px] font-bold px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-all active:scale-95 cursor-pointer">
                                <i class="fa-solid fa-store mr-1"></i> Pakai Logo Toko
                            </button>`:""}
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="text-[10px] font-bold text-slate-400">Preview:</span>
                            <div class="w-16 h-16 rounded-xl overflow-hidden border-2 border-dashed border-slate-300 dark:border-slate-600 bg-black/10 shadow-sm shrink-0">
                                <img id="card-preview-mascot" src="${p(n.store.heroMascotImg||"/putri_mascot_anim.gif")}" class="w-full h-full object-contain" onerror="this.src='/putri_mascot_3d.jpg';" style="image-rendering: auto;">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Tag Sambutan</label>
                        <input autocomplete="off" id="set-hero-welcome-tag" value="${p(n.store.heroWelcomeTag||"SELAMAT DATANG")}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Contoh: SELAMAT DATANG">
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Judul Sambutan Banner</label>
                        <input autocomplete="off" id="set-hero-title" value="${p(n.store.heroTitle||n.store.name||"")}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Contoh: PUTRI UTAMA TEKNIK (Kosong = Nama Toko)">
                    </div>
                </div>

                <div>
                    <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Slogan / Deskripsi Sambutan Banner</label>
                    <textarea id="set-hero-subtitle" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" rows="2" placeholder="Deskripsi sambutan yang tampil di kartu banner utama...">${p(n.store.heroSubtitle||n.store.slogan||"")}</textarea>
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
                        <input autocomplete='off' id="set-hours" value="${p(n.store.operationalHours||"")}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Contoh: Senin - Minggu (08:00 - 21:00 WIB)">
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Teks Hak Cipta Footer</label>
                        <input autocomplete='off' id="set-credit" value="${p(n.store.footerCredit||"")}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Contoh: Toko Putri © 2026. All Rights Reserved.">
                    </div>
                </div>

                <div>
                    <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Tampilkan Katalog Tukar Hadiah di Beranda</label>
                    <select id="set-show-reward-catalog" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                        <option value="true" ${n.store.showRewardCatalog!==!1?"selected":""}>Ya, Tampilkan Katalog Hadiah</option>
                        <option value="false" ${n.store.showRewardCatalog===!1?"selected":""}>Sembunyikan</option>
                    </select>
                </div>
            </div>
        `}else if(t==="catalog")e="Tampilan Kategori & Merek",a="Kelola tata letak, model navigasi slider, dan visibilitas kategori produk serta brand di beranda",r="fa-palette",s=`
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
                            <option value="grid" ${n.store.categoryStyle==="grid"?"selected":""}>Grid Ikon (Kotak berjejer)</option>
                            <option value="pill" ${n.store.categoryStyle==="pill"||n.store.categoryStyle==="text"||!n.store.categoryStyle?"selected":""}>Pill Horizontal Scroll (Kapsul geser)</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Tampilkan Slider Kategori di Beranda</label>
                        <select id="set-show-categories" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                            <option value="true" ${n.store.showCategories!==!1?"selected":""}>Tampilkan Slider Kategori</option>
                            <option value="false" ${n.store.showCategories===!1?"selected":""}>Sembunyikan</option>
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
                            <option value="logo" ${n.store.brandStyle==="logo"||n.store.brandStyle==="image"||!n.store.brandStyle?"selected":""}>Logo Kotak (Grid Visual)</option>
                            <option value="pill" ${n.store.brandStyle==="pill"||n.store.brandStyle==="text"?"selected":""}>Pill Horizontal Scroll (Kapsul teks)</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Tampilkan Slider Merek di Beranda</label>
                        <select id="set-show-brands" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                            <option value="true" ${n.store.showBrands!==!1?"selected":""}>Tampilkan Slider Merek</option>
                            <option value="false" ${n.store.showBrands===!1?"selected":""}>Sembunyikan</option>
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
                        <option value="true" ${n.store.showScrollTopButton!==!1?"selected":""}>Aktif (Hanya tampil di etalase belanja &amp; riwayat belanja pelanggan)</option>
                        <option value="false" ${n.store.showScrollTopButton===!1?"selected":""}>Nonaktifkan Seluruhnya</option>
                    </select>
                </div>

                <div class="p-3 rounded-xl text-[11px] flex items-start gap-2.5 border" style="background: rgba(var(--color-primary-rgb),0.06); border-color: rgba(var(--color-primary-rgb),0.18); color: var(--color-primary-dark, #a87f1b);">
                    <i class="fa-solid fa-shield-halved mt-0.5 shrink-0" style="color: var(--color-primary)"></i>
                    <span><b>Proteksi Khusus:</b> Tombol ini secara otomatis dilindungi dan <u>tidak akan pernah muncul</u> di dashboard CMS Admin, Kasir POS, formulir checkout, maupun saat jendela modal sedang terbuka.</span>
                </div>
            </div>
        `;else if(t==="shipping")e="Pengiriman & Lokasi Toko",a="Atur nomor kontak admin, tarif dasar ongkir per kilometer, promo gratis ongkir, dan titik koordinat GPS toko",r="fa-motorcycle",s=`
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
                        <input autocomplete='off' id="set-wa" value="${p(n.store.wa||"")}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Contoh: 08123456789">
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Ongkir per Kilometer (Rp)</label>
                        <input autocomplete='off' type="number" id="set-cost" value="${p(n.store.costPerKm||0)}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Contoh: 2000">
                    </div>
                </div>

                <div>
                    <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Alamat Lengkap Toko</label>
                    <textarea id="set-address" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" rows="2" placeholder="Nama jalan, nomor bangunan, RT/RW, kelurahan, kecamatan, kota/kabupaten...">${p(n.store.address||"")}</textarea>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Opsi Kirim ke Alamat (Kurir Toko)</label>
                        <select id="set-delivery-enabled" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                            <option value="true" ${n.store.isDeliveryEnabled!==!1?"selected":""}>Aktif (Bisa diantar kurir)</option>
                            <option value="false" ${n.store.isDeliveryEnabled===!1?"selected":""}>Nonaktif (Hanya ambil di toko)</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Opsi Ambil di Toko (Self Pickup)</label>
                        <select id="set-pickup-enabled" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                            <option value="true" ${n.store.isPickupEnabled!==!1?"selected":""}>Aktif (Bisa ambil di kasir)</option>
                            <option value="false" ${n.store.isPickupEnabled===!1?"selected":""}>Nonaktif</option>
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
                            <option value="true" ${n.store.freeShippingMinSpendEnabled===!0||n.store.freeShippingMinSpendEnabled==="true"?"selected":""}>Aktif (Bebas ongkir otomatis)</option>
                            <option value="false" ${n.store.freeShippingMinSpendEnabled!==!0&&n.store.freeShippingMinSpendEnabled!=="true"?"selected":""}>Nonaktif</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">Minimal Belanja (Rp)</label>
                        <input autocomplete='off' type="number" id="set-free-shipping-amount" value="${p(n.store.freeShippingMinSpendAmount||0)}" min="0" step="1000" placeholder="Contoh: 1000000" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
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
                            value="${p(n.store.lat&&n.store.lng?`${n.store.lat}, ${n.store.lng}`:"-7.82308507053985, 112.0988374794464")}"
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
                        <input autocomplete='off' id="set-lat" value="${p(n.store.lat||"-7.82308507053985")}" class="admin-input !py-2.5 bg-white dark:bg-slate-900 shadow-sm text-xs font-mono w-full" placeholder="-7.82308507053985" oninput="handleManualCoordChange()">
                    </div>
                    <div>
                        <label class="block text-[10px] font-bold text-slate-600 dark:text-slate-400 mb-1 uppercase tracking-wider">Longitude Toko (Garis Bujur)</label>
                        <input autocomplete='off' id="set-lng" value="${p(n.store.lng||"112.0988374794464")}" class="admin-input !py-2.5 bg-white dark:bg-slate-900 shadow-sm text-xs font-mono w-full" placeholder="112.0988374794464" oninput="handleManualCoordChange()">
                    </div>
                </div>
            </div>
        `;else if(t==="payment"){e="Metode Pembayaran (QRIS & Putri PayLater)",a="Konfigurasi penerimaan digital QRIS dan pengaturan cicilan Putri PayLater 30 hari hingga 3 bulan transparan",r="fa-wallet";const l=_r(),i=window.currentPaymentSubtab||"paylater";s=`
            <!-- SUB-NAV TAB SELECTION -->
            <div class="flex items-center gap-2 p-1.5 bg-slate-100 dark:bg-slate-800 rounded-2xl mb-4 border border-slate-200/80 dark:border-slate-700/80">
                <button type="button" onclick="window.switchPaymentSubtab('paylater')" id="subtab-btn-paylater"
                        class="flex-1 py-2.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${i==="paylater"?"bg-white dark:bg-slate-900 text-slate-800 dark:text-white shadow-xs border border-slate-200/60 dark:border-slate-700":"text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"}">
                    <i class="fa-solid fa-bolt text-[var(--color-primary)]"></i> Putri PayLater &amp; Cicilan 3 Bulan
                </button>
                <button type="button" onclick="window.switchPaymentSubtab('qris')" id="subtab-btn-qris"
                        class="flex-1 py-2.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${i==="qris"?"bg-white dark:bg-slate-900 text-slate-800 dark:text-white shadow-xs border border-slate-200/60 dark:border-slate-700":"text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"}">
                    <i class="fa-solid fa-qrcode text-[var(--color-primary)]"></i> Barcode QRIS Nasional
                </button>
            </div>

            <!-- TAB 1: PUTRI PAYLATER & CICILAN 3 BULAN -->
            <div id="payment-subtab-paylater" class="${i==="paylater"?"":"hidden"} space-y-4">
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
                                <option value="true" ${l.enabled?"selected":""}>Aktif (Bisa Digunakan Pelanggan)</option>
                                <option value="false" ${l.enabled?"":"selected"}>Nonaktif</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Minimal Belanja Cicilan (Rp)</label>
                            <input type="number" id="set-paylater-min-order" value="${l.minOrder}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs font-mono font-bold" placeholder="20000" min="0" oninput="window.updateAdminPaylaterSim()">
                            <p class="text-[9.5px] text-slate-400 mt-1">Pembelian di bawah nominal ini belum dapat mencicil.</p>
                        </div>
                    </div>

                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Catatan Transparansi &amp; Ketentuan Toko</label>
                        <input id="set-paylater-notice-text" value="${p(l.noticeText)}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Contoh: Cicilan transparan tanpa biaya tersembunyi. Tagihan jatuh tempo setiap bulan.">
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
                                    <option value="true" ${l.tenors["30d"].enabled?"selected":""}>Aktif</option>
                                    <option value="false" ${l.tenors["30d"].enabled?"":"selected"}>Nonaktif</option>
                                </select>
                            </div>
                            
                            <div>
                                <label class="block text-[10px] font-bold text-slate-500 uppercase mb-1">Biaya Admin</label>
                                <div class="flex gap-1.5">
                                    <select id="set-paylater-30d-admin-type" class="w-20 text-[11px] font-bold py-2 px-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900" onchange="window.updateAdminPaylaterSim()">
                                        <option value="flat" ${l.tenors["30d"].adminFeeType==="flat"?"selected":""}>Rp</option>
                                        <option value="percent" ${l.tenors["30d"].adminFeeType==="percent"?"selected":""}>%</option>
                                    </select>
                                    <input type="number" id="set-paylater-30d-admin-val" value="${l.tenors["30d"].adminFeeValue}" min="0" step="any" class="admin-input !py-2 bg-white dark:bg-slate-900 flex-1 text-xs font-mono font-bold" placeholder="0" oninput="window.updateAdminPaylaterSim()">
                                </div>
                            </div>

                            <div>
                                <label class="block text-[10px] font-bold text-slate-500 uppercase mb-1">Biaya Penanganan</label>
                                <div class="flex gap-1.5">
                                    <select id="set-paylater-30d-service-type" class="w-20 text-[11px] font-bold py-2 px-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900" onchange="window.updateAdminPaylaterSim()">
                                        <option value="flat" ${l.tenors["30d"].serviceFeeType==="flat"?"selected":""}>Rp</option>
                                        <option value="percent" ${l.tenors["30d"].serviceFeeType==="percent"?"selected":""}>%</option>
                                    </select>
                                    <input type="number" id="set-paylater-30d-service-val" value="${l.tenors["30d"].serviceFeeValue}" min="0" step="any" class="admin-input !py-2 bg-white dark:bg-slate-900 flex-1 text-xs font-mono font-bold" placeholder="0" oninput="window.updateAdminPaylaterSim()">
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
                                    <option value="true" ${l.tenors["2m"].enabled?"selected":""}>Aktif</option>
                                    <option value="false" ${l.tenors["2m"].enabled?"":"selected"}>Nonaktif</option>
                                </select>
                            </div>
                            
                            <div>
                                <label class="block text-[10px] font-bold text-slate-500 uppercase mb-1">Biaya Admin</label>
                                <div class="flex gap-1.5">
                                    <select id="set-paylater-2m-admin-type" class="w-20 text-[11px] font-bold py-2 px-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900" onchange="window.updateAdminPaylaterSim()">
                                        <option value="flat" ${l.tenors["2m"].adminFeeType==="flat"?"selected":""}>Rp</option>
                                        <option value="percent" ${l.tenors["2m"].adminFeeType==="percent"?"selected":""}>%</option>
                                    </select>
                                    <input type="number" id="set-paylater-2m-admin-val" value="${l.tenors["2m"].adminFeeValue}" min="0" step="any" class="admin-input !py-2 bg-white dark:bg-slate-900 flex-1 text-xs font-mono font-bold" placeholder="0" oninput="window.updateAdminPaylaterSim()">
                                </div>
                            </div>

                            <div>
                                <label class="block text-[10px] font-bold text-slate-500 uppercase mb-1">Biaya Penanganan</label>
                                <div class="flex gap-1.5">
                                    <select id="set-paylater-2m-service-type" class="w-20 text-[11px] font-bold py-2 px-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900" onchange="window.updateAdminPaylaterSim()">
                                        <option value="flat" ${l.tenors["2m"].serviceFeeType==="flat"?"selected":""}>Rp</option>
                                        <option value="percent" ${l.tenors["2m"].serviceFeeType==="percent"?"selected":""}>%</option>
                                    </select>
                                    <input type="number" id="set-paylater-2m-service-val" value="${l.tenors["2m"].serviceFeeValue}" min="0" step="any" class="admin-input !py-2 bg-white dark:bg-slate-900 flex-1 text-xs font-mono font-bold" placeholder="0" oninput="window.updateAdminPaylaterSim()">
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
                                    <option value="true" ${l.tenors["3m"].enabled?"selected":""}>Aktif</option>
                                    <option value="false" ${l.tenors["3m"].enabled?"":"selected"}>Nonaktif</option>
                                </select>
                            </div>
                            
                            <div>
                                <label class="block text-[10px] font-bold text-slate-500 uppercase mb-1">Biaya Admin</label>
                                <div class="flex gap-1.5">
                                    <select id="set-paylater-3m-admin-type" class="w-20 text-[11px] font-bold py-2 px-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900" onchange="window.updateAdminPaylaterSim()">
                                        <option value="flat" ${l.tenors["3m"].adminFeeType==="flat"?"selected":""}>Rp</option>
                                        <option value="percent" ${l.tenors["3m"].adminFeeType==="percent"?"selected":""}>%</option>
                                    </select>
                                    <input type="number" id="set-paylater-3m-admin-val" value="${l.tenors["3m"].adminFeeValue}" min="0" step="any" class="admin-input !py-2 bg-white dark:bg-slate-900 flex-1 text-xs font-mono font-bold" placeholder="0" oninput="window.updateAdminPaylaterSim()">
                                </div>
                            </div>

                            <div>
                                <label class="block text-[10px] font-bold text-slate-500 uppercase mb-1">Biaya Penanganan</label>
                                <div class="flex gap-1.5">
                                    <select id="set-paylater-3m-service-type" class="w-20 text-[11px] font-bold py-2 px-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900" onchange="window.updateAdminPaylaterSim()">
                                        <option value="flat" ${l.tenors["3m"].serviceFeeType==="flat"?"selected":""}>Rp</option>
                                        <option value="percent" ${l.tenors["3m"].serviceFeeType==="percent"?"selected":""}>%</option>
                                    </select>
                                    <input type="number" id="set-paylater-3m-service-val" value="${l.tenors["3m"].serviceFeeValue}" min="0" step="any" class="admin-input !py-2 bg-white dark:bg-slate-900 flex-1 text-xs font-mono font-bold" placeholder="0" oninput="window.updateAdminPaylaterSim()">
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
            <div id="payment-subtab-qris" class="${i==="qris"?"":"hidden"} space-y-4">
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
                            <input autocomplete='off' id="set-qris-url" value="${p(n.payment?.qrisUrl||"")}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm flex-1 text-xs" placeholder="URL file gambar QRIS atau klik tombol upload di kanan">
                            <label class="text-white rounded-xl px-4 flex items-center justify-center cursor-pointer transition-all shrink-0 active:scale-95 shadow-sm font-bold text-xs hover:opacity-90" style="background: var(--color-primary)">
                                <i class="fa-solid fa-cloud-arrow-up mr-1.5"></i> Upload QRIS
                                <input type="file" accept="image/*" class="hidden" onchange="handleImageUpload(this, 'set-qris-url')">
                            </label>
                        </div>
                    </div>

                    <!-- PREVIEW BOX QRIS -->
                    ${n.payment?.qrisUrl?`
                        <div class="p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl flex flex-col sm:flex-row items-center gap-4 shadow-sm">
                            <div class="p-2 bg-white rounded-xl border border-slate-200 dark:border-slate-600 shadow-inner">
                                <img src="${p(n.payment.qrisUrl)}" alt="Preview QRIS" class="w-28 h-28 object-contain rounded-lg">
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
        `}else t==="config"?(e="Sistem & Integrasi Cloud",a="Konfigurasi jembatan endpoint Google Apps Script untuk cloud storage gambar produk, banner promosi, dan media drive",r="fa-laptop-code",s=`
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
                    <input autocomplete='off' id="set-gas-url" value="${p(n.config?.gasUrl||"")}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full font-mono text-xs" placeholder="https://script.google.com/macros/s/.../exec">
                    <p class="text-[10px] text-slate-500 dark:text-slate-400 mt-1.5 font-medium">Tempel URL hasil deploy Web App dari Google Apps Script project toko Anda.</p>
                </div>

                <div class="p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl space-y-2">
                    <div class="flex items-center gap-2">
                        <span class="w-2 h-2 rounded-full ${n.config?.gasUrl?"bg-emerald-500":"bg-amber-500"} animate-pulse"></span>
                        <span class="text-xs font-bold text-slate-700 dark:text-slate-200">
                            ${n.config?.gasUrl?"Integrasi Cloud Storage Aktif":"Endpoint Belum Dikonfigurasi"}
                        </span>
                    </div>
                    <ul class="text-[11px] text-slate-500 dark:text-slate-400 space-y-1 list-disc list-inside">
                        <li>Semua file gambar produk yang diupload admin akan disimpan aman di Google Drive Anda.</li>
                        <li>Tidak membebani memori hosting lokal dan menjaga loading website tetap ringan.</li>
                        <li>Mendukung konversi otomatis ke link thumbnail instan untuk etalase katalog.</li>
                    </ul>
                </div>
            </div>
        `):t==="operasional"&&(e="Operasional & Perpajakan",a="Konfigurasi pembatasan inventaris stok produk otomatis, skema kalkulasi PPN transaksi, dan program poin loyalitas member",r="fa-sliders",s=`
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
                        <option value="true" ${n.store.useStock===!0?"selected":""}>Aktif — Otomatis tandai HABIS jika stok 0 (Pelanggan tidak bisa checkout)</option>
                        <option value="false" ${n.store.useStock!==!0?"selected":""}>Nonaktif — Stok tak terbatas (Cocok untuk barang pre-order / tanpa pembatasan stok)</option>
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
                ${(()=>{const l=n.store.ppnRate!==void 0&&n.store.ppnRate!==null&&!isNaN(parseFloat(n.store.ppnRate))?parseFloat(n.store.ppnRate):11,i=n.store.ppnShowZero!==!1,d=n.store.ppnTaxLabel||"",c=n.store.taxNpwp||n.taxSettings?.npwp||"";return`
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
                        <div>
                            <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Status Perhitungan PPN</label>
                            <select id="set-ppn-enabled" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                                <option value="true" ${n.store.ppnEnabled===!0?"selected":""}>Aktif (Kalkulasi PPN Dihitung)</option>
                                <option value="false" ${n.store.ppnEnabled!==!0?"selected":""}>Nonaktif (Tanpa Baris PPN)</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Tipe Perhitungan</label>
                            <select id="set-ppn-type" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                                <option value="inclusive" ${n.store.ppnType==="inclusive"?"selected":""}>Inklusif (Pajak dalam harga &bull; Pembeli Rp 0 Tambahan)</option>
                                <option value="exclusive" ${n.store.ppnType!=="inclusive"?"selected":""}>Eksklusif (Pajak ditambah di atas subtotal)</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Tarif PPN (%)</label>
                            <input autocomplete='off' type="number" id="set-ppn-rate" value="${l}" min="0" max="100" step="0.1" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="0 atau 11">
                            <span class="text-[10px] text-slate-400 mt-1 block">Ketik <b>0</b> jika Wajib Pajak Badan Non-PKP / Bebas PPN.</span>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Tampilan PPN 0% di Struk / Faktur</label>
                            <select id="set-ppn-show-zero" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                                <option value="true" ${i?"selected":""}>Tetap Tampilkan Baris Pajak (Walau Rp 0)</option>
                                <option value="false" ${i?"":"selected"}>Sembunyikan Baris Pajak jika Rp 0</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Label Pajak di Struk/Invoice</label>
                            <input autocomplete='off' type="text" id="set-ppn-tax-label" value="${p(d)}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Cth: PPN Badan (0%) atau PPN">
                        </div>
                        <div>
                            <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">NPWP Toko / 16-Digit CTAS DJP</label>
                            <input autocomplete='off' type="text" id="set-tax-npwp" value="${p(c)}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs font-mono" placeholder="16 digit format Coretax DJP">
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
                            <option value="true" ${n.store.spendPointsEnabled===!0||n.store.spendPointsEnabled==="true"?"selected":""}>Aktif (Poin Dihitung)</option>
                            <option value="false" ${n.store.spendPointsEnabled!==!0&&n.store.spendPointsEnabled!=="true"?"selected":""}>Nonaktif</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">Minimal Belanja (Kelipatan Rp)</label>
                        <input autocomplete='off' type="number" id="set-spend-points-threshold" value="${p(n.store.spendPointsThreshold||1e5)}" min="1000" step="1000" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="100000">
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">Perolehan Poin per Kelipatan</label>
                        <input autocomplete='off' type="number" id="set-spend-points-per-threshold" value="${p(n.store.spendPointsPerThreshold||1)}" min="1" step="1" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="1">
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
            <button onclick="saveAdminSettings('${t}')" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl text-white font-bold text-xs shadow-md transition-all active:scale-95 hover:opacity-95 cursor-pointer" style="background: var(--color-primary)">
                <i class="fa-solid fa-floppy-disk"></i> Simpan
            </button>
        </div>

        <div class="bg-white/95 dark:bg-slate-900/90 rounded-[1.75rem] border border-slate-200/80 dark:border-slate-800 shadow-sm overflow-hidden mb-6 relative">
            <div class="absolute top-0 left-0 w-full h-1.5" style="background: linear-gradient(90deg, var(--color-primary-light, #e1b858), var(--color-primary, #c59b27), var(--color-primary-dark, #a87f1b))"></div>
            <div class="p-6 sm:p-8 flex-1 mt-2">
                <div class="mb-6 flex items-center gap-3.5 pb-4 border-b border-slate-100 dark:border-slate-800">
                    <div class="w-13 h-13 rounded-2xl flex items-center justify-center shrink-0 text-xl shadow-sm" style="background: rgba(var(--color-primary-rgb),0.12); color: var(--color-primary)"><i class="fa-solid ${r}"></i></div> 
                    <div>
                        <h3 class="font-extrabold text-slate-800 dark:text-white text-base sm:text-lg tracking-wide leading-tight">${e}</h3>
                        <p class="text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5">${a||"Konfigurasi pengaturan toko"}</p>
                    </div>
                </div>
                <div class="space-y-5">
                    ${s}
                </div>
            </div>
        </div>

        <button onclick="saveAdminSettings('${t}')" class="btn-primary py-4 text-base shadow-glow w-full !rounded-2xl flex items-center justify-center gap-2 font-bold tracking-wide"><i class="fa-solid fa-floppy-disk"></i> Simpan Perubahan Pengaturan</button>
    </div>
    `;if(j("admin-content",o),t==="profile"){const l=n.store.uiTheme||"",i=n.store.themeColor||"#10b981";(l==="custom"||!ft?.[l])&&setTimeout(()=>{const c=document.getElementById("custom-color-chip");if(c){c.style.background=i;const b=c.querySelector("i");b&&(b.style.color="#fff")}},50)}t==="payment"&&setTimeout(()=>{typeof window.updateAdminPaylaterSim=="function"&&window.updateAdminPaylaterSim()},50)};window.currentPaymentSubtab=window.currentPaymentSubtab||"paylater";const gs=t=>{window.currentPaymentSubtab=t;const e=document.getElementById("payment-subtab-paylater"),a=document.getElementById("payment-subtab-qris"),r=document.getElementById("subtab-btn-paylater"),s=document.getElementById("subtab-btn-qris");e&&e.classList.toggle("hidden",t!=="paylater"),a&&a.classList.toggle("hidden",t!=="qris"),r&&(r.className=`flex-1 py-2.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${t==="paylater"?"bg-white dark:bg-slate-900 text-slate-800 dark:text-white shadow-xs border border-slate-200/60 dark:border-slate-700":"text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"}`),s&&(s.className=`flex-1 py-2.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${t==="qris"?"bg-white dark:bg-slate-900 text-slate-800 dark:text-white shadow-xs border border-slate-200/60 dark:border-slate-700":"text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"}`),t==="paylater"&&setTimeout(()=>{typeof window.updateAdminPaylaterSim=="function"&&window.updateAdminPaylaterSim()},20)};window.switchPaymentSubtab=gs;const ks=()=>{const t=document.getElementById("paylater-admin-sim-container");if(!t)return;const e=document.getElementById("set-paylater-sim-amount"),a=Math.max(1e3,parseFloat(e?.value)||3e5),r={enabled:(document.getElementById("set-paylater-enabled")?.value||"true")==="true",minOrder:Math.max(0,parseFloat(document.getElementById("set-paylater-min-order")?.value)||2e4),maxOrder:1e7,noticeText:document.getElementById("set-paylater-notice-text")?.value||"",tenors:{"30d":{enabled:(document.getElementById("set-paylater-30d-enabled")?.value||"true")==="true",label:"30 Hari (1x Bayar)",shortLabel:"30 Hari",months:1,days:30,adminFeeType:document.getElementById("set-paylater-30d-admin-type")?.value||"flat",adminFeeValue:Math.max(0,parseFloat(document.getElementById("set-paylater-30d-admin-val")?.value)||0),serviceFeeType:document.getElementById("set-paylater-30d-service-type")?.value||"flat",serviceFeeValue:Math.max(0,parseFloat(document.getElementById("set-paylater-30d-service-val")?.value)||0)},"2m":{enabled:(document.getElementById("set-paylater-2m-enabled")?.value||"true")==="true",label:"2 Bulan (Cicilan 2x)",shortLabel:"2 Bulan",months:2,days:60,adminFeeType:document.getElementById("set-paylater-2m-admin-type")?.value||"flat",adminFeeValue:Math.max(0,parseFloat(document.getElementById("set-paylater-2m-admin-val")?.value)||0),serviceFeeType:document.getElementById("set-paylater-2m-service-type")?.value||"percent",serviceFeeValue:Math.max(0,parseFloat(document.getElementById("set-paylater-2m-service-val")?.value)||0)},"3m":{enabled:(document.getElementById("set-paylater-3m-enabled")?.value||"true")==="true",label:"3 Bulan (Cicilan 3x)",shortLabel:"3 Bulan",months:3,days:90,adminFeeType:document.getElementById("set-paylater-3m-admin-type")?.value||"flat",adminFeeValue:Math.max(0,parseFloat(document.getElementById("set-paylater-3m-admin-val")?.value)||0),serviceFeeType:document.getElementById("set-paylater-3m-service-type")?.value||"percent",serviceFeeValue:Math.max(0,parseFloat(document.getElementById("set-paylater-3m-service-val")?.value)||0)}}},o=Ur(a,r).results,l=["30d","2m","3m"];t.innerHTML=l.map(i=>{const d=o[i];if(!d)return"";const c=!d.enabled;return`
            <div class="p-3.5 rounded-2xl border ${c?"border-slate-200 dark:border-slate-700 bg-slate-100/60 dark:bg-slate-800/40 opacity-60":"border-[var(--color-primary)]/40 bg-white dark:bg-slate-900 shadow-2xs"} space-y-2">
                <div class="flex items-center justify-between pb-1.5 border-b border-slate-100 dark:border-slate-800">
                    <span class="text-[11px] font-black uppercase tracking-wider text-slate-800 dark:text-white">${p(d.label)}</span>
                    <span class="text-[8.5px] font-bold px-1.5 py-0.5 rounded ${c?"bg-slate-200 text-slate-500":""}" ${c?"":'style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);"'}>${c?"Nonaktif":"Aktif"}</span>
                </div>
                <div class="space-y-1 text-[11px]">
                    <div class="flex justify-between text-slate-500">
                        <span>Pokok / bln:</span>
                        <span class="font-bold text-slate-700 dark:text-slate-300">${f(d.pokokPerMonth)}</span>
                    </div>
                    <div class="flex justify-between text-slate-500">
                        <span>Biaya Admin:</span>
                        <span class="font-bold ${d.adminFeePerMonth===0?"text-emerald-500":"text-slate-700 dark:text-slate-300"}">${d.adminFeePerMonth===0?"Rp 0":f(d.adminFeePerMonth)}</span>
                    </div>
                    <div class="flex justify-between text-slate-500">
                        <span>Penanganan:</span>
                        <span class="font-bold ${d.serviceFeePerMonth===0?"text-emerald-500":"text-slate-700 dark:text-slate-300"}">${d.serviceFeePerMonth===0?"Rp 0":f(d.serviceFeePerMonth)}</span>
                    </div>
                </div>
                <div class="pt-2 border-t border-dashed border-slate-200 dark:border-slate-700 flex justify-between items-baseline">
                    <span class="text-[10px] font-bold uppercase text-slate-500">Cicilan / bln:</span>
                    <span class="text-sm font-black font-mono" style="color: var(--color-primary);">${f(d.totalPerMonth)}</span>
                </div>
                <div class="text-[9.5px] text-slate-400 text-right">
                    Total: <b>${f(d.grandTotal)}</b>
                </div>
            </div>
        `}).join("")};window.updateAdminPaylaterSim=ks;const hs=async t=>{if(!Tt){$e(!0),L("Menyimpan...");try{if(t==="profile")n.store.name=T("set-name"),n.store.slogan=T("set-slogan"),n.store.logo=fe(T("set-logo")),n.store.description=T("set-description"),n.store.email=T("set-email"),n.store.showRewardCatalog=T("set-show-reward-catalog")==="true",n.store.operationalHours=T("set-hours"),n.store.footerCredit=T("set-credit"),n.store.showHeroSlide=T("set-show-hero-slide")==="true",n.store.heroMascotImg=fe(T("set-hero-mascot-img")),n.store.heroBadgeText=T("set-hero-badge-text")||"Siap Melayani",n.store.heroWelcomeTag=T("set-hero-welcome-tag")||"SELAMAT DATANG",n.store.heroTitle=T("set-hero-title"),n.store.heroSubtitle=T("set-hero-subtitle"),n.store.themeColor=T("set-theme-color"),n.store.uiTheme=T("set-ui-theme"),n.store.bgStyle=T("set-bg-style")||"minimalist",n.store.bgCustomUrl=fe(T("set-bg-custom-url")),localStorage.setItem("freshmart_theme_color",n.store.themeColor),localStorage.setItem("freshmart_ui_theme",n.store.uiTheme),localStorage.setItem("freshmart_bg_style",n.store.bgStyle),localStorage.setItem("freshmart_bg_custom_url",n.store.bgCustomUrl||""),za(n.store.uiTheme,n.store.themeColor),Ja(n.store.bgStyle,n.store.bgCustomUrl);else if(t==="catalog")n.store.categoryStyle=T("set-category-style"),n.store.brandStyle=T("set-brand-style"),n.store.showCategories=T("set-show-categories")==="true",n.store.showBrands=T("set-show-brands")==="true",n.store.showScrollTopButton=T("set-show-scroll-top")==="true",n.store.showScrollTopButton===!1&&typeof window.hideFloatingScrollTop=="function"&&window.hideFloatingScrollTop();else if(t==="shipping"){n.store.wa=T("set-wa").replace(/\D/g,""),n.store.address=T("set-address"),n.store.costPerKm=T("set-cost"),n.store.isDeliveryEnabled=T("set-delivery-enabled")==="true",n.store.isPickupEnabled=T("set-pickup-enabled")==="true",n.store.freeShippingMinSpendEnabled=T("set-free-shipping-enabled")==="true",n.store.freeShippingMinSpendAmount=Math.max(0,parseFloat(T("set-free-shipping-amount"))||0);let a=(T("set-lat")||"").trim(),r=(T("set-lng")||"").trim();const s=(T("set-maps-smart-input")||"").trim();if(s&&typeof window.parseGeoCoordinates=="function"){const o=window.parseGeoCoordinates(s);o&&(a=o.lat,r=o.lng)}(!a||!r)&&(a="-7.82308507053985",r="112.0988374794464"),n.store.lat=a,n.store.lng=r}else if(t==="payment")n.payment||(n.payment={}),n.payment.qrisUrl=fe(T("set-qris-url")),n.store.paylater||(n.store.paylater={}),n.store.paylater={enabled:T("set-paylater-enabled")==="true",minOrder:Math.max(0,parseFloat(T("set-paylater-min-order"))||2e4),maxOrder:1e7,noticeText:T("set-paylater-notice-text")||"Cicilan transparan tanpa biaya tersembunyi. Tagihan jatuh tempo setiap bulan.",tenors:{"30d":{enabled:T("set-paylater-30d-enabled")==="true",label:"30 Hari (1x Bayar)",shortLabel:"30 Hari",months:1,days:30,adminFeeType:T("set-paylater-30d-admin-type")||"flat",adminFeeValue:Math.max(0,parseFloat(T("set-paylater-30d-admin-val"))||0),serviceFeeType:T("set-paylater-30d-service-type")||"flat",serviceFeeValue:Math.max(0,parseFloat(T("set-paylater-30d-service-val"))||0)},"2m":{enabled:T("set-paylater-2m-enabled")==="true",label:"2 Bulan (Cicilan 2x)",shortLabel:"2 Bulan",months:2,days:60,adminFeeType:T("set-paylater-2m-admin-type")||"flat",adminFeeValue:Math.max(0,parseFloat(T("set-paylater-2m-admin-val"))||0),serviceFeeType:T("set-paylater-2m-service-type")||"percent",serviceFeeValue:Math.max(0,parseFloat(T("set-paylater-2m-service-val"))||0)},"3m":{enabled:T("set-paylater-3m-enabled")==="true",label:"3 Bulan (Cicilan 3x)",shortLabel:"3 Bulan",months:3,days:90,adminFeeType:T("set-paylater-3m-admin-type")||"flat",adminFeeValue:Math.max(0,parseFloat(T("set-paylater-3m-admin-val"))||0),serviceFeeType:T("set-paylater-3m-service-type")||"percent",serviceFeeValue:Math.max(0,parseFloat(T("set-paylater-3m-service-val"))||0)}}};else if(t==="config")n.config||(n.config={}),n.config.gasUrl=T("set-gas-url"),x("Pengaturan GAS URL tersimpan.");else if(t==="operasional"){n.store.useStock=T("set-use-stock")==="true",n.store.ppnEnabled=T("set-ppn-enabled")==="true",n.store.ppnType=T("set-ppn-type")||"exclusive";const a=T("set-ppn-rate"),r=parseFloat(a);n.store.ppnRate=!isNaN(r)&&r>=0?r:11,n.store.ppnShowZero=T("set-ppn-show-zero")==="true",n.store.ppnTaxLabel=(T("set-ppn-tax-label")||"").trim();const s=(T("set-tax-npwp")||"").trim();n.store.taxNpwp=s,n.taxSettings||(n.taxSettings={}),s&&(n.taxSettings.npwp=s),n.store.spendPointsEnabled=T("set-spend-points-enabled")==="true",n.store.spendPointsThreshold=Math.max(1,parseFloat(T("set-spend-points-threshold"))||1e5),n.store.spendPointsPerThreshold=Math.max(1,parseFloat(T("set-spend-points-per-threshold"))||1),At()}const e={profile:"store",catalog:"store",shipping:"store",operasional:["store","taxSettings"],payment:["payment","store"],config:"config"};if(typeof window.saveApp=="function"){const a=Array.isArray(e[t])?e[t]:[e[t]||"store"];await window.saveApp(a)}t==="profile"||t==="config"?(x(t==="config"?"Sistem Diperbarui! Memuat Ulang...":"Warna Berubah! Memuat Ulang..."),setTimeout(()=>location.reload(),1500)):(x("Tersimpan!"),pa(),typeof rDyn=="function"?rDyn():typeof window.rDyn=="function"&&window.rDyn(),typeof rCat=="function"?rCat():typeof window.rCat=="function"&&window.rCat())}catch{x("Gagal menyimpan pengaturan")}finally{$e(!1),C()}}},Mt=t=>{const e=typeof window.parseGeoCoordinates=="function"?window.parseGeoCoordinates:null,a=e?e(t):null,r=document.getElementById("maps-smart-feedback"),s=document.getElementById("set-lat"),o=document.getElementById("set-lng");a?(s&&(s.value=a.lat),o&&(o.value=a.lng),r&&(r.className="text-[10px] mt-1.5 font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5",r.innerHTML=`<i class="fa-solid fa-circle-check text-xs"></i> <span>Akurat! Koordinat terdeteksi: <b>${a.lat}, ${a.lng}</b></span>`)):t&&t.trim().length>3?r&&(r.className="text-[10px] mt-1.5 font-medium text-amber-600 dark:text-amber-400 flex items-center gap-1.5",r.innerHTML='<i class="fa-solid fa-triangle-exclamation text-xs"></i> <span>Pola belum terbaca. Coba tempel format: <code>-7.823085, 112.098837</code> atau link Google Maps</span>'):r&&(r.className="text-[10px] mt-1.5 font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1.5",r.innerHTML='<i class="fa-solid fa-circle-info text-blue-500"></i> <span>Tempel tautan Maps atau angka koordinat dari Google Maps</span>')},vs=()=>{const t=document.getElementById("set-lat"),e=document.getElementById("set-lng"),a=document.getElementById("set-maps-smart-input");t&&e&&a&&t.value&&e.value&&(a.value=`${t.value.trim()}, ${e.value.trim()}`)},ws=async()=>{const t=document.getElementById("set-maps-smart-input");if(t){try{if(navigator.clipboard&&navigator.clipboard.readText){const e=await navigator.clipboard.readText();if(e){t.value=e,Mt(e),x("Teks berhasil ditempel dari clipboard!");return}}}catch{}t.focus(),x("Silakan tekan Ctrl+V atau tahan untuk menempel")}},ys=()=>{const t=document.getElementById("set-lat"),e=document.getElementById("set-lng");let a=t?t.value.trim():"",r=e?e.value.trim():"";if(!a||!r){const s=document.getElementById("set-maps-smart-input");if(s&&s.value&&typeof window.parseGeoCoordinates=="function"){const o=window.parseGeoCoordinates(s.value);o&&(a=o.lat,r=o.lng)}}a&&r?window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${a},${r}`)}`,"_blank"):x("Masukkan koordinat toko terlebih dahulu")},Ss=()=>{if(!navigator.geolocation){x("Browser tidak mendukung sensor GPS");return}x("Sedang mendeteksi lokasi GPS..."),navigator.geolocation.getCurrentPosition(t=>{const e=t.coords.latitude.toString(),a=t.coords.longitude.toString(),r=document.getElementById("set-maps-smart-input");r&&(r.value=`${e}, ${a}`),Mt(`${e}, ${a}`),x("Lokasi GPS berhasil didapatkan!")},()=>{x("Gagal mengambil GPS perangkat. Pastikan izin lokasi aktif.")},{enableHighAccuracy:!0,timeout:15e3})},Ts=()=>{const t=JSON.stringify(n,null,2),e=`backup_tokoputri_${new Date().toISOString().slice(0,10)}.json`;if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function"){const a=btoa(unescape(encodeURIComponent(t)));window.AndroidNativeApp.saveOrShareFile(a,e,"application/json")}else{const a="data:text/json;charset=utf-8,"+encodeURIComponent(t),r=document.createElement("a");r.href=a,r.download=e,document.body.appendChild(r),r.click(),r.remove()}x("Backup berhasil disimpan!")},Ps=t=>{const e=t.target.files[0];if(!e)return;const a=new FileReader;a.onload=async r=>{try{const s=JSON.parse(r.target.result);Object.assign(n,s),typeof window.saveApp=="function"&&await window.saveApp(),x("Data dipulihkan!"),setTimeout(()=>location.reload(),1e3)}catch{x("Gagal memulihkan data!")}},a.readAsText(e)},$s=()=>{let t=document.getElementById("admin-hero-banner-modal");t||(t=document.createElement("div"),t.id="admin-hero-banner-modal",document.body.appendChild(t));const e=n.store.showHeroSlide!==!1&&n.store.showHeroSlide!=="false",a=n.store.heroMascotImg||"/putri_mascot_anim.gif";t.className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-900/80 p-4 transition-opacity duration-300",typeof window.pushModalHistory=="function"&&window.pushModalHistory("heroBanner"),t.innerHTML=`
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
                <div class="p-4 rounded-2xl text-white shadow-md relative overflow-hidden flex items-center justify-between"
                     style="background: linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-primary) 50%, var(--color-primary-dark) 100%);">
                    <div class="w-[62%] pr-2">
                        <span class="inline-block px-2 py-0.5 rounded-full bg-black/25 text-[8.5px] font-black uppercase tracking-wider mb-1" id="m-preview-tag">
                            <i class="fa-solid fa-sparkles text-amber-300"></i> ${p(n.store.heroWelcomeTag||"SELAMAT DATANG")}
                        </span>
                        <h4 class="font-black text-sm text-white line-clamp-1" id="m-preview-title">${p(n.store.heroTitle||n.store.name||"TOKO PUTRI")}</h4>
                        <p class="text-[9.5px] text-white/90 line-clamp-2 mt-0.5 font-medium" id="m-preview-sub">${p(n.store.heroSubtitle||n.store.slogan||"Pusat Solusi Bangunan & Cat Terlengkap")}</p>
                    </div>
                    <div class="w-[35%] flex flex-col items-center">
                        <div class="w-18 h-18 rounded-2xl overflow-hidden shadow-lg border-2 border-white/60 bg-black/20 flex items-center justify-center">
                            <img id="m-preview-img" src="${p(a)}" class="w-full h-full object-cover" onerror="this.src='/putri_mascot_3d.jpg';">
                        </div>
                        <div class="mt-1 bg-slate-950/80 text-[7.5px] font-bold text-white px-2 py-0.5 rounded-full flex items-center gap-1 border border-white/20 whitespace-nowrap">
                            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            <span id="m-preview-badge">${p(n.store.heroBadgeText||"Siap Melayani")}</span>
                        </div>
                    </div>
                </div>

                <!-- Tampilkan Toggle -->
                <div>
                    <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Status Tayang Slide Sambutan</label>
                    <select id="quick-set-show-hero-slide" class="admin-input !py-3 bg-white dark:bg-slate-800 shadow-sm w-full text-xs font-bold">
                        <option value="true" ${e?"selected":""}>Ya, Tampilkan Slide Hero Sambutan (Rekomendasi)</option>
                        <option value="false" ${e?"":"selected"}>Sembunyikan Slide Sambutan (Hanya Promo Produk)</option>
                    </select>
                </div>

                <!-- Ganti Foto / GIF Maskot / Avatar -->
                <div>
                    <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Foto / Animasi Maskot (JPG · PNG · GIF Bergerak <i class="fa-solid fa-wand-magic-sparkles text-amber-500 ml-1"></i>)</label>
                    <div class="flex gap-2">
                        <input autocomplete="off" id="quick-set-hero-mascot-img" value="${p(n.store.heroMascotImg||"")}"
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
                        ${n.store.logo?`
                        <button type="button" onclick="const l='${p(n.store.logo)}'; document.getElementById('quick-set-hero-mascot-img').value=l; document.getElementById('m-preview-img').src=l; showToast('Logo toko dipilih');" class="text-[10px] font-bold px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-all active:scale-95 cursor-pointer">
                            <i class="fa-solid fa-store mr-1"></i> Pakai Logo Toko
                        </button>`:""}
                    </div>
                </div>

                <!-- Teks Status Badge & Tag -->
                <div class="grid grid-cols-2 gap-3">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1 uppercase tracking-wider">Teks Badge Status</label>
                        <input autocomplete="off" id="quick-set-hero-badge-text" value="${p(n.store.heroBadgeText||"Siap Melayani")}" class="admin-input !py-2.5 bg-white dark:bg-slate-800 shadow-sm w-full text-xs" placeholder="Siap Melayani" oninput="document.getElementById('m-preview-badge').innerText = this.value || 'Siap Melayani';">
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1 uppercase tracking-wider">Tag Ucapan</label>
                        <input autocomplete="off" id="quick-set-hero-welcome-tag" value="${p(n.store.heroWelcomeTag||"SELAMAT DATANG")}" class="admin-input !py-2.5 bg-white dark:bg-slate-800 shadow-sm w-full text-xs" placeholder="SELAMAT DATANG" oninput="document.getElementById('m-preview-tag').innerHTML = '<i class=\\'fa-solid fa-sparkles text-amber-300\\'></i> ' + (this.value || 'SELAMAT DATANG');">
                    </div>
                </div>

                <!-- Judul & Subtitle -->
                <div>
                    <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1 uppercase tracking-wider">Judul Banner (Kosong = Nama Toko)</label>
                    <input autocomplete="off" id="quick-set-hero-title" value="${p(n.store.heroTitle||n.store.name||"")}" class="admin-input !py-2.5 bg-white dark:bg-slate-800 shadow-sm w-full text-xs" placeholder="${p(n.store.name||"TOKO PUTRI")}" oninput="document.getElementById('m-preview-title').innerText = this.value || '${p(n.store.name||"TOKO PUTRI")}';">
                </div>

                <div>
                    <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1 uppercase tracking-wider">Slogan / Deskripsi Banner</label>
                    <textarea id="quick-set-hero-subtitle" rows="2" class="admin-input !py-2.5 bg-white dark:bg-slate-800 shadow-sm w-full text-xs" placeholder="Deskripsi ringkas..." oninput="document.getElementById('m-preview-sub').innerText = this.value || '';">${p(n.store.heroSubtitle||n.store.slogan||"")}</textarea>
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
    `},ma=(t=!1)=>{const e=()=>{const a=document.getElementById("admin-hero-banner-modal");a&&a.remove()};typeof window.requestCloseModal=="function"?window.requestCloseModal("heroBanner",t,e):e()},As=async()=>{L("Menyimpan banner...");try{n.store.showHeroSlide=T("quick-set-show-hero-slide")==="true",n.store.heroMascotImg=fe(T("quick-set-hero-mascot-img")),n.store.heroBadgeText=T("quick-set-hero-badge-text")||"Siap Melayani",n.store.heroWelcomeTag=T("quick-set-hero-welcome-tag")||"SELAMAT DATANG",n.store.heroTitle=T("quick-set-hero-title"),n.store.heroSubtitle=T("quick-set-hero-subtitle"),typeof window.saveApp=="function"&&await window.saveApp(["store"]),ma(),x("Banner sambutan & maskot berhasil diperbarui!"),window.cTab==="banners"&&typeof window.rAdmL=="function"&&window.rAdmL("banners"),typeof window.rDyn=="function"&&window.rDyn()}catch{x("Gagal menyimpan banner sambutan")}finally{C()}},Is=t=>{const e=k("set-ppn-enabled"),a=k("set-ppn-type"),r=k("set-ppn-rate"),s=k("set-ppn-show-zero"),o=k("set-ppn-tax-label");!e||!a||!r||(t==="badan_non_pkp"?(e.value="true",a.value="inclusive",r.value="0",s&&(s.value="true"),o&&(o.value="PPN Badan (0% Bebas PPN)"),x("Preset Badan Non-PKP diterapkan! (Tarif 0%, Bebas PPN Rp 0, Baris Pajak tercetak)")):t==="inklusif_11"?(e.value="true",a.value="inclusive",r.value="11",s&&(s.value="true"),o&&(o.value="PPN (11%)"),x("Preset Harga Inklusif 11% diterapkan! (Pajak di dalam harga produk)")):t==="pkp_11"?(e.value="true",a.value="exclusive",r.value="11",s&&(s.value="false"),o&&(o.value="PPN (11%)"),x("Preset PKP Standar 11% diterapkan! (Pajak ditambahkan di checkout)")):t==="pkp_12"&&(e.value="true",a.value="exclusive",r.value="12",s&&(s.value="false"),o&&(o.value="PPN (12%)"),x("Preset Penyesuaian PKP 12% diterapkan! (UU Harmonisasi Perpajakan)")),typeof window.triggerHaptic=="function"&&window.triggerHaptic("medium"))};window.syncAppMeta=syncAppMeta;window.rAdmSet=pa;window.selectPresetTheme=us;window.selectBgStyle=xs;window.openSettingForm=fs;window.saveAdminSettings=hs;window.applyTaxPresetRI=Is;window.backupData=Ts;window.restoreData=Ps;window.handleSmartMapsInput=Mt;window.handleManualCoordChange=vs;window.pasteFromClipboardToMapsInput=ws;window.previewStoreOnMaps=ys;window.detectAdminGPS=Ss;window.openHeroBannerModal=$s;window.closeHeroBannerModal=ma;window.saveHeroBannerModal=As;let G=new Date().getFullYear(),U=0,de="menu",re=null;const ce=["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],Ms=t=>{if(typeof window.getEffHpp=="function")return window.getEffHpp(t);const e=n.products?.find(a=>a&&a.id!=null&&String(a.id)===String(t.id));if(!e)return 0;if(t.variantName&&e.variants){const a=e.variants.find(r=>r.name===t.variantName);if(a&&a.hpp!=null)return parseFloat(a.hpp)||0}return parseFloat(e.hpp)||0},Ga=new Map,Zr=2*60*1e3,Dt=async t=>{const e=Ga.get(t);if(e&&Date.now()-e.timestamp<Zr)return e.data;const a={};for(let r=1;r<=12;r++)a[r]={omset:0,ppn:0,hpp:0,disc:0,orderCount:0};try{const r=new Date(t,0,1),s=new Date(t+1,0,1);(await P.collection("freshmart_orders").where("timestamp",">=",Ne.firestore.Timestamp.fromDate(r)).where("timestamp","<",Ne.firestore.Timestamp.fromDate(s)).limit(5e3).get()).forEach(i=>{const d=i.data();if(d.status==="Dibatalkan"||!d.timestamp||!d.timestamp.toDate)return;const c=d.timestamp.toDate().getMonth()+1;if(!a[c])return;const b=d.payment?.dppAmount!==void 0&&d.payment?.dppAmount!==null?parseFloat(d.payment.dppAmount):parseFloat(d.payment?.subtotal)||0;a[c].omset+=b,a[c].ppn+=parseFloat(d.payment?.ppnAmount)||0,a[c].disc+=parseFloat(d.payment?.productDiscount)||0,a[c].orderCount++,(d.items||[]).forEach(m=>{const u=m.hpp!==void 0&&m.hpp!==null?parseFloat(m.hpp):Ms(m);a[c].hpp+=(parseFloat(u)||0)*(parseFloat(m.qty)||0)})})}catch(r){console.error("Gagal memuat data pajak:",r),x("Gagal memuat data periode ini!")}return Ga.set(t,{data:a,timestamp:Date.now()}),re=a,a},Ge=()=>re?(U===0?Object.keys(re):[U]).reduce((e,a)=>{const r=re[a];return e.omset+=r.omset,e.ppn+=r.ppn,e.hpp+=r.hpp,e.disc+=r.disc,e.orderCount+=r.orderCount,e},{omset:0,ppn:0,hpp:0,disc:0,orderCount:0}):{omset:0,ppn:0,hpp:0,disc:0,orderCount:0},Ct=()=>{const t=n.taxSettings?.monthlyExpenses||{};return(U===0?Array.from({length:12},(a,r)=>r+1):[U]).reduce((a,r)=>a+(parseFloat(t[`${G}-${r}`])||0),0)},Ds=async()=>{j("admin-content",'<div class="text-center py-16"><i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i></div>'),re=await Dt(G),Bt()},Bt=()=>{const t=Array.from({length:6},(r,s)=>new Date().getFullYear()-4+s),e=[{k:"summary",l:"Ringkasan PPN",i:"fa-receipt"},{k:"income",l:"Laba Rugi",i:"fa-chart-pie"},{k:"balance",l:"Neraca",i:"fa-scale-balanced"},{k:"settings",l:"Pengaturan",i:"fa-gear"}];de==="menu"&&(de="summary");const a=`
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
        
        ${de==="settings"?"":`
        <div class="flex items-center gap-2">
            <select id="tax-year-select" onchange="changeTaxYear(this.value)" class="admin-input !py-2 !px-3 text-xs font-bold bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)] cursor-pointer">
                ${t.map(r=>`<option value="${r}" ${r===G?"selected":""}>${r}</option>`).join("")}
            </select>
            <select id="tax-month-select" onchange="changeTaxMonth(this.value)" class="admin-input !py-2 !px-3 text-xs font-bold bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)] cursor-pointer">
                <option value="0" ${U===0?"selected":""}>Setahun Penuh</option>
                ${ce.map((r,s)=>`<option value="${s+1}" ${U===s+1?"selected":""}>${r} ${G}</option>`).join("")}
            </select>
        </div>
        `}
    </div>

    <!-- Sub-Tab Navigation Bar -->
    <div class="flex items-center gap-2 mb-5 overflow-x-auto hide-scrollbar pb-1">
        ${e.map(r=>{const s=de===r.k;return`
            <button onclick="switchTaxTab('${r.k}')" class="px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all active:scale-95 flex items-center gap-2 shrink-0 ${s?"primary-bg text-white shadow-glow":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-[rgba(var(--color-primary-rgb),0.4)]"}">
                <i class="fa-solid ${r.i} text-xs"></i>
                <span>${r.l}</span>
            </button>`}).join("")}
    </div>
    `;j("admin-content",`
    <div class="max-w-5xl mx-auto pb-10 text-sm fade-in-scale">
        <div class="mb-5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/60 rounded-2xl p-4 flex items-start gap-3 text-xs font-semibold text-amber-800 dark:text-amber-300 shadow-xs">
            <i class="fa-solid fa-circle-info text-amber-500 text-base shrink-0 mt-0.5"></i>
            <span class="leading-relaxed">Halaman ini adalah <b>alat bantu rekap internal</b> Omset, PPN, Laba Rugi, dan Neraca dari data transaksi toko. Bukan pengganti konsultan pajak/akuntan — validasi kembali angkanya sebelum digunakan untuk pelaporan SPT resmi.</span>
        </div>

        ${a}

        <div id="tax-content"></div>
    </div>`),it()},Cs=t=>{de=t,Bt()},Bs=async t=>{G=parseInt(t,10),j("tax-content",'<div class="text-center py-16"><i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i></div>'),re=await Dt(G),it()},Ls=t=>{U=parseInt(t,10),it()},it=()=>{de==="summary"?ba():de==="income"?Lt():de==="balance"?Nt():de==="settings"&&ua()},ba=()=>{const t=Ge(),e=U===0?`Tahun ${G}`:`${ce[U-1]} ${G}`,a=t.omset-t.disc,r=Math.round(t.omset*.005),s=Array.from({length:12},(o,l)=>l+1).map(o=>{const l=re?re[o]:{omset:0,ppn:0,orderCount:0},i=U===o,d=Math.round((l.omset||0)*.005);return`<tr class="${i?"bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.14)] font-bold":"hover:bg-slate-50 dark:hover:bg-slate-700/30"} border-b border-slate-100 dark:border-slate-700/50 last:border-0 transition-colors">
            <td class="py-3 px-4 text-xs font-bold text-slate-700 dark:text-slate-200">${ce[o-1]}</td>
            <td class="py-3 px-4 text-xs font-bold text-slate-800 dark:text-white text-right">${f(l.omset)}</td>
            <td class="py-3 px-4 text-xs font-bold text-right" style="color:var(--color-primary)">${f(l.ppn)}</td>
            <td class="py-3 px-4 text-xs font-bold text-emerald-600 dark:text-emerald-400 text-right">${f(d)}</td>
            <td class="py-3 px-4 text-xs font-bold text-slate-500 dark:text-slate-400 text-right">${l.orderCount}</td>
        </tr>`}).join("");j("tax-content",`
        <div class="grid grid-cols-2 lg:grid-cols-5 gap-3.5 mb-6">
            <div class="card-modern p-4 sm:p-5 flex flex-col justify-between">
                <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Omset Bruto (${e})</p>
                <p class="text-sm sm:text-lg font-bold text-slate-800 dark:text-white truncate">${f(t.omset)}</p>
                <p class="text-[10px] font-bold text-slate-400 mt-1">${t.orderCount} pesanan</p>
            </div>
            <div class="card-modern p-4 sm:p-5 flex flex-col justify-between">
                <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5"><i class="fa-solid fa-minus mr-1"></i>Diskon Produk</p>
                <p class="text-sm sm:text-lg font-bold text-rose-500 truncate">${f(t.disc)}</p>
                <p class="text-[10px] font-bold text-slate-400 mt-1">Potongan diskon</p>
            </div>
            <div class="card-modern p-4 sm:p-5 flex flex-col justify-between">
                <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">DPP (Dasar Pengenaan Pajak)</p>
                <p class="text-sm sm:text-lg font-bold text-slate-800 dark:text-white truncate">${f(a)}</p>
                <p class="text-[10px] font-bold text-slate-400 mt-1">Omset bersih</p>
            </div>
            <div class="card-modern p-4 sm:p-5 flex flex-col justify-between border-[rgba(var(--color-primary-rgb),0.4)] relative overflow-hidden" style="background: rgba(var(--color-primary-rgb),0.04)">
                <p class="text-[9px] font-bold uppercase tracking-widest mb-1.5" style="color:var(--color-primary)"><i class="fa-solid fa-file-invoice-dollar mr-1"></i>PPN Keluaran</p>
                <p class="text-sm sm:text-lg font-bold truncate" style="color:var(--color-primary)">${f(t.ppn)}</p>
                <p class="text-[10px] font-bold mt-1 opacity-80" style="color:var(--color-primary)">${t.ppn>0?"Wajib setor kas negara":"Bebas PPN / Tarif 0%"}</p>
            </div>
            <div class="card-modern p-4 sm:p-5 flex flex-col justify-between border-emerald-300 dark:border-emerald-800/80 bg-emerald-50/40 dark:bg-emerald-950/20 col-span-2 lg:col-span-1">
                <p class="text-[9px] font-bold uppercase tracking-widest mb-1.5 text-emerald-700 dark:text-emerald-400"><i class="fa-solid fa-building-columns mr-1"></i>PPh Final 0,5%</p>
                <p class="text-sm sm:text-lg font-bold text-emerald-700 dark:text-emerald-400 truncate">${f(r)}</p>
                <p class="text-[10px] font-bold text-emerald-600 dark:text-emerald-500 mt-1">PP 55/2022 Badan/UMKM</p>
            </div>
        </div>
        <div class="card-modern overflow-hidden">
            <div class="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-700/70 flex items-center justify-between">
                <h4 class="font-bold text-slate-800 dark:text-slate-100 text-xs uppercase tracking-widest">Rincian Per Bulan — ${G}</h4>
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
    `)},Lt=()=>{const t=Ge(),e=U===0?`Tahun ${G}`:`${ce[U-1]} ${G}`,a=t.omset-t.disc-t.hpp,r=U===0?null:`${G}-${U}`,s=Ct(),o=a-s,l=n.taxSettings?.taxScheme||"umkm_final";let i,d,c;l==="umkm_final"?(i=.5,d=t.omset,c="PPh Final Badan / UMKM (0,5% × Omset PP 55/2022)"):l==="badan_normal"?(i=22,d=Math.max(0,o),c="PPh Badan (22% × Laba Bersih UU HPP)"):(i=parseFloat(n.taxSettings?.customTaxRate)||0,d=Math.max(0,o),c=`PPh Custom (${i}% × Laba Bersih)`);const b=d*(i/100),m=o-b;let u="";if(U===0)u=Array.from({length:12},(g,h)=>h+1).map(g=>{const h=`${G}-${g}`,v=(n.taxSettings?.monthlyExpenses||{})[h]||0;return`<div class="flex items-center justify-between gap-2 py-2 border-b border-slate-100 dark:border-slate-700/50 last:border-0">
                <span class="text-xs font-bold text-slate-600 dark:text-slate-300">${ce[g-1]} ${G}</span>
                <input type="number" min="0" value="${v}" onchange="saveMonthlyExpense('${h}', this.value)" class="admin-input !py-2 !px-3 text-xs w-36 text-right font-bold bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)]">
            </div>`}).join("");else{const g=(n.taxSettings?.monthlyExpenses||{})[r]||0;u=`<div class="flex items-center justify-between gap-2 py-2">
            <span class="text-xs font-bold text-slate-600 dark:text-slate-300">${ce[U-1]} ${G}</span>
            <input type="number" min="0" value="${g}" onchange="saveMonthlyExpense('${r}', this.value)" class="admin-input !py-2 !px-3 text-xs w-36 text-right font-bold bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)]">
        </div>`}j("tax-content",`
        <div class="card-modern p-6 sm:p-8 space-y-4">
            <div class="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-700">
                <div>
                    <h4 class="font-bold text-slate-800 dark:text-slate-100 text-xs sm:text-sm uppercase tracking-widest">Laporan Laba Rugi — ${e}</h4>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">Estimasi pendapatan &amp; beban usaha</p>
                </div>
                <button onclick="openTaxDocPreview('income')" class="px-3.5 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 text-[10px] font-bold hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all flex items-center gap-1.5 active:scale-95">
                    <i class="fa-solid fa-print"></i> Preview &amp; Cetak
                </button>
            </div>
            <div class="space-y-3 text-xs sm:text-sm">
                <div class="flex justify-between py-1"><span class="font-bold text-slate-500 dark:text-slate-400">Omset Bruto</span><span class="font-bold text-slate-800 dark:text-slate-100">${f(t.omset)}</span></div>
                <div class="flex justify-between py-1"><span class="font-bold text-slate-500 dark:text-slate-400">(−) Diskon Produk</span><span class="font-bold text-rose-500">-${f(t.disc)}</span></div>
                <div class="flex justify-between py-1"><span class="font-bold text-slate-500 dark:text-slate-400">(−) HPP (Harga Pokok Penjualan)</span><span class="font-bold text-rose-500">-${f(t.hpp)}</span></div>
                <div class="flex justify-between py-2.5 border-t border-slate-200 dark:border-slate-700"><span class="font-bold text-slate-700 dark:text-slate-200">Laba Kotor</span><span class="font-bold text-emerald-500">${f(a)}</span></div>
                <div class="flex justify-between py-1"><span class="font-bold text-slate-500 dark:text-slate-400">(−) Biaya Operasional</span><span class="font-bold text-rose-500">-${f(s)}</span></div>
                <div class="flex justify-between py-2.5 border-t border-slate-200 dark:border-slate-700"><span class="font-bold text-slate-700 dark:text-slate-200">Laba Bersih Sebelum Pajak</span><span class="font-bold" style="color:var(--color-primary)">${f(o)}</span></div>
                <div class="flex justify-between py-1"><span class="font-bold text-slate-500 dark:text-slate-400">(−) Estimasi ${c}</span><span class="font-bold text-rose-500">-${f(b)}</span></div>
                <div class="flex justify-between py-3 border-t-2 border-slate-800 dark:border-slate-200 mt-2"><span class="font-bold text-slate-900 dark:text-white text-sm sm:text-base">Laba Bersih Setelah Pajak (Estimasi)</span><span class="font-extrabold text-sm sm:text-base" style="color:var(--color-primary)">${f(m)}</span></div>
            </div>

            <div class="mt-8 pt-5 border-t border-dashed border-slate-200 dark:border-slate-700">
                <h5 class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1 flex items-center gap-1.5"><i class="fa-solid fa-pen" style="color:var(--color-primary)"></i> Input Biaya Operasional (Manual)</h5>
                <p class="text-[10px] font-bold text-slate-400 mb-4">Contoh: sewa tempat, gaji karyawan, listrik, internet, dll. Sistem tidak melacak biaya ini otomatis.</p>
                <div class="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
                    ${u}
                </div>
            </div>
        </div>
    `)},Ns=async(t,e)=>{const a=parseFloat(e)||0;n.taxSettings||(n.taxSettings={}),n.taxSettings.monthlyExpenses||(n.taxSettings.monthlyExpenses={}),n.taxSettings.monthlyExpenses[t]=a;try{typeof window.saveApp=="function"&&await window.saveApp(["taxSettings"]),Lt()}catch{x("Gagal menyimpan biaya operasional!")}},Nt=()=>{const t=Pt(),e=n.taxSettings?.balanceSheet||{kas:0,piutang:0,hutang:0},a=(parseFloat(e.kas)||0)+(parseFloat(e.piutang)||0)+t.assetHpp,r=parseFloat(e.hutang)||0,s=a-r;j("tax-content",`
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
                        <input type="number" min="0" value="${e.kas||0}" onchange="saveBalanceField('kas', this.value)" class="admin-input !py-2 !px-3 text-xs w-36 text-right font-bold bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)]">
                    </div>
                    <div class="flex items-center justify-between gap-2 py-1">
                        <span class="text-xs font-bold text-slate-600 dark:text-slate-300">Piutang Usaha (manual)</span>
                        <input type="number" min="0" value="${e.piutang||0}" onchange="saveBalanceField('piutang', this.value)" class="admin-input !py-2 !px-3 text-xs w-36 text-right font-bold bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)]">
                    </div>
                    <div class="flex items-center justify-between gap-2 py-2.5 rounded-xl px-3 border border-[rgba(var(--color-primary-rgb),0.3)]" style="background: rgba(var(--color-primary-rgb),0.06)">
                        <span class="text-xs font-bold" style="color:var(--color-primary)">Persediaan Barang (Otomatis)</span>
                        <span class="text-xs font-bold" style="color:var(--color-primary)">${f(t.assetHpp)}</span>
                    </div>
                    <div class="flex justify-between pt-3 border-t-2 border-slate-800 dark:border-slate-200 mt-2">
                        <span class="font-bold text-slate-900 dark:text-white text-xs sm:text-sm uppercase tracking-widest">Total Aset</span>
                        <span class="font-bold text-xs sm:text-sm" style="color:var(--color-primary)">${f(a)}</span>
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
                        <input type="number" min="0" value="${e.hutang||0}" onchange="saveBalanceField('hutang', this.value)" class="admin-input !py-2 !px-3 text-xs w-36 text-right font-bold bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)]">
                    </div>
                    <div class="flex items-center justify-between gap-2 py-2.5 rounded-xl px-3 bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
                        <span class="text-xs font-bold text-slate-600 dark:text-slate-300">Modal &amp; Laba Ditahan</span>
                        <span class="text-xs font-bold text-slate-800 dark:text-slate-100">${f(s)}</span>
                    </div>
                    <p class="text-[10px] font-semibold text-slate-400 leading-relaxed px-1">Angka Modal &amp; Laba Ditahan dihitung otomatis (Total Aset − Hutang) agar neraca seimbang.</p>
                    <div class="flex justify-between pt-3 border-t-2 border-slate-800 dark:border-slate-200 mt-2">
                        <span class="font-bold text-slate-900 dark:text-white text-xs sm:text-sm uppercase tracking-widest">Total Kewajiban + Modal</span>
                        <span class="font-bold text-xs sm:text-sm" style="color:var(--color-primary)">${f(r+s)}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-6 text-center">
            <button onclick="openTaxDocPreview('balance')" class="px-4 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all inline-flex items-center gap-2 shadow-xs active:scale-95">
                <i class="fa-solid fa-print"></i> Preview &amp; Cetak Neraca
            </button>
        </div>
    `)},Rs=async(t,e)=>{const a=parseFloat(e)||0;n.taxSettings||(n.taxSettings={}),n.taxSettings.balanceSheet||(n.taxSettings.balanceSheet={kas:0,piutang:0,hutang:0,modalDisetor:0}),n.taxSettings.balanceSheet[t]=a;try{typeof window.saveApp=="function"&&await window.saveApp(["taxSettings"]),Nt()}catch{x("Gagal menyimpan data neraca!")}},ua=()=>{const t=n.taxSettings||{};j("tax-content",`
        <div class="card-modern p-6 sm:p-8 max-w-2xl mx-auto space-y-5">
            <div>
                <label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Nama Badan Usaha / Toko</label>
                <input id="tax-company-name" type="text" value="${p(t.companyName||"")}" placeholder="Cth: Toko Putri" class="admin-input !py-3 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)]">
            </div>
            <div>
                <label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">NPWP (Nomor Pokok Wajib Pajak)</label>
                <input id="tax-npwp" type="text" value="${p(t.npwp||"")}" placeholder="XX.XXX.XXX.X-XXX.XXX" class="admin-input !py-3 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)]">
            </div>
            <div>
                <label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Skema Perhitungan PPh</label>
                <select id="tax-scheme" onchange="toggleCustomTaxRateInput(this.value)" class="admin-input !py-3 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl cursor-pointer font-bold focus:border-[var(--color-primary)]">
                    <option value="umkm_final" ${t.taxScheme==="umkm_final"?"selected":""}>PPh Final Badan / UMKM — 0,5% dari Omset (PP 55/2022 &amp; UU HPP)</option>
                    <option value="badan_normal" ${t.taxScheme==="badan_normal"?"selected":""}>PPh Badan Normal — 22% dari Laba Bersih (UU HPP)</option>
                    <option value="custom" ${t.taxScheme==="custom"?"selected":""}>Custom (isi tarif sendiri)</option>
                </select>
            </div>
            <div id="tax-custom-rate-wrap" class="${t.taxScheme==="custom"?"":"hidden"}">
                <label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Tarif Custom (% dari Laba Bersih)</label>
                <input id="tax-custom-rate" type="number" min="0" max="100" step="0.1" value="${t.customTaxRate||.5}" class="admin-input !py-3 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)]">
            </div>
            <button onclick="saveTaxSettingsPanel()" class="primary-bg py-3.5 text-xs sm:text-sm font-bold shadow-glow rounded-xl flex items-center justify-center gap-2 w-full uppercase tracking-widest text-white active:scale-95 transition-all">
                <i class="fa-solid fa-floppy-disk"></i> Simpan Pengaturan Pajak
            </button>
        </div>
    `)},js=t=>{Cr("tax-custom-rate-wrap","hidden",t!=="custom")},Es=async()=>{if(!Tt){$e(!0),L("Menyimpan...");try{n.taxSettings||(n.taxSettings={}),n.taxSettings.companyName=T("tax-company-name");const t=T("tax-npwp");n.taxSettings.npwp=t,n.store||(n.store={}),n.store.taxNpwp=t,n.taxSettings.taxScheme=T("tax-scheme"),n.taxSettings.customTaxRate=parseFloat(T("tax-custom-rate"))||.5,typeof window.saveApp=="function"&&await window.saveApp(["taxSettings","store"]),x("Pengaturan pajak & NPWP tersimpan!")}catch{x("Gagal menyimpan pengaturan pajak!")}finally{$e(!1),C()}}},Os=t=>{const e=U===0?`Tahun ${G} (Setahun Penuh)`:`${ce[U-1]} ${G}`,a=n.taxSettings||{},r=new Date().toLocaleDateString("id-ID",{day:"2-digit",month:"long",year:"numeric"}),s=a.companyName||n.store?.name||"PUTRI UTAMA TEKNIK",o=n.store?.address||"Jln. Pakem RT005 RW003 Ds. Banyuanyar, Kec. Gurah, Kab. Kediri",l=n.store?.wa||n.store?.phone||"-",i=a.npwp||"";let d="";n.store?.logo&&(n.store.logo.includes("http")||n.store.logo.includes("data:"))?d=`<img loading="eager" src="${p(n.store.logo)}" class="w-14 h-14 object-contain rounded-xl border border-slate-200">`:d='<div class="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-md shrink-0" style="background: linear-gradient(135deg, var(--color-primary, #b8860b), var(--color-primary-dark, #8b6508));"><i class="fa-solid fa-store"></i></div>';const c={summary:"LAPORAN PPN & OMSET BULANAN",income:"LAPORAN LABA RUGI KOMPREHENSIF",balance:"NERACA KEUANGAN (BALANCE SHEET)"},b={summary:"PPN",income:"PL",balance:"BS"},m=c[t]||"LAPORAN KEUANGAN",u=`DOC-${b[t]||"FIN"}-${G}${U?String(U).padStart(2,"0"):"FY"}-001`,g=`
    <div class="border-b-2 border-slate-900 pb-3.5 mb-3.5 select-none">
        <div class="flex justify-between items-start gap-4">
            <div class="flex items-center gap-3.5">
                ${d}
                <div>
                    <h1 class="font-black text-lg sm:text-xl tracking-tight text-slate-900 uppercase leading-none">${p(s)}</h1>
                    <p class="text-[11px] font-semibold text-slate-500 mt-1 max-w-sm leading-tight">${p(o)}</p>
                    <div class="flex items-center gap-2 mt-1 text-[10px] text-slate-600">
                        ${i?`<span class="font-mono font-bold text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">NPWP: ${p(i)}</span>`:""}
                        <span class="font-bold text-slate-500"><i class="fa-brands fa-whatsapp text-emerald-600 mr-1"></i>${p(l)}</span>
                    </div>
                </div>
            </div>
            <div class="text-right shrink-0">
                <span class="inline-block px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest bg-slate-900 text-white mb-1">Executive Statement</span>
                <h2 class="font-black text-sm sm:text-base tracking-wider text-slate-900 uppercase leading-tight">${m}</h2>
                <p class="text-xs font-bold text-slate-700 mt-0.5 font-mono">No: <span class="text-blue-700 font-black">${u}</span></p>
                <p class="text-[10.5px] font-semibold text-slate-500 mt-0.5">Periode: <b class="text-slate-800">${e}</b> &bull; Dicetak: ${r}</p>
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
            <p class="font-black text-slate-900 border-t border-slate-400 pt-1 text-[11px] uppercase">${p(n.store?.staffName||"Bagian Keuangan")}</p>
            <p class="text-[9.5px] text-slate-500 font-semibold">Administrasi &amp; Kasir</p>
        </div>
        <div class="text-center w-52">
            <p class="text-[10px] font-bold text-slate-500">Disetujui &amp; Disahkan Oleh,</p>
            <div class="h-14 flex items-center justify-center">
                <span class="text-[9.5px] text-slate-300 italic">[Tanda Tangan &amp; Stempel]</span>
            </div>
            <p class="font-black text-slate-900 border-t border-slate-400 pt-1 text-[11px] uppercase">${p(s)}</p>
            <p class="text-[9.5px] text-slate-500 font-semibold">Pemilik Usaha / Owner</p>
        </div>
    </div>
    `,v=`
    <div class="a4-page-footer mt-auto pt-2 border-t border-slate-200 flex justify-between items-center text-[10px] text-slate-500 font-mono select-none">
        <div class="flex items-center gap-1.5">
            <span class="font-bold text-slate-700 uppercase">${p(s)}</span>
            <span class="text-slate-300">&bull;</span>
            <span class="text-slate-500">${p(m)}</span>
            <span class="text-slate-300">&bull;</span>
            <span class="text-slate-400 font-mono">${u}</span>
        </div>
        <div class="flex items-center gap-1 font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
            <span>Halaman 1 dari 1</span>
        </div>
    </div>
    `;let w="";if(t==="summary"){const A=Ge(),$=Math.max(0,A.omset-A.disc),y=Array.from({length:12},(I,R)=>R+1).map(I=>{const R=re?re[I]:{omset:0,ppn:0,orderCount:0},E=Math.max(0,(R.omset||0)-(R.disc||0));return`
            <tr class="border-b border-slate-200 hover:bg-slate-50/50">
                <td class="py-2 px-3 font-bold text-slate-800">${ce[I-1]} ${G}</td>
                <td class="py-2 px-3 text-right font-mono tabular-nums font-semibold text-slate-700">${f(R.omset||0)}</td>
                <td class="py-2 px-3 text-right font-mono tabular-nums font-semibold text-slate-700">${f(E)}</td>
                <td class="py-2 px-3 text-right font-mono tabular-nums font-bold text-amber-700">${f(R.ppn||0)}</td>
                <td class="py-2 px-3 text-right font-mono tabular-nums font-semibold text-slate-600">${R.orderCount||0} Trx</td>
            </tr>`}).join("");w=`
            <div class="grid grid-cols-4 gap-3 mb-3.5 select-none">
                <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span class="text-[9px] font-black uppercase tracking-wider text-slate-500 block">Omset Bruto</span>
                    <span class="text-sm font-black text-slate-900 font-mono tabular-nums block mt-0.5">${f(A.omset)}</span>
                </div>
                <div class="p-3 rounded-xl bg-rose-50/70 border border-rose-200">
                    <span class="text-[9px] font-black uppercase tracking-wider text-rose-800 block">Diskon Produk</span>
                    <span class="text-sm font-black text-rose-700 font-mono tabular-nums block mt-0.5">${A.disc>0?Ee(A.disc,!0):"Rp 0"}</span>
                </div>
                <div class="p-3 rounded-xl bg-blue-50/70 border border-blue-200">
                    <span class="text-[9px] font-black uppercase tracking-wider text-blue-900 block">Dasar Pajak (DPP)</span>
                    <span class="text-sm font-black text-blue-800 font-mono tabular-nums block mt-0.5">${f($)}</span>
                </div>
                <div class="p-3 rounded-xl bg-amber-50/80 border border-amber-200">
                    <span class="text-[9px] font-black uppercase tracking-wider text-amber-900 block">Total PPN Keluaran</span>
                    <span class="text-sm font-black text-amber-700 font-mono tabular-nums block mt-0.5">${f(A.ppn)}</span>
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
                        <td class="py-2.5 px-3 text-right font-mono tabular-nums">${f(A.omset)}</td>
                        <td class="py-2.5 px-3 text-right font-mono tabular-nums">${f($)}</td>
                        <td class="py-2.5 px-3 text-right font-mono tabular-nums text-amber-700">${f(A.ppn)}</td>
                        <td class="py-2.5 px-3 text-right font-mono tabular-nums">${A.orderCount||0} Trx</td>
                    </tr>
                </tbody>
            </table>
        `}else if(t==="income"){const A=Ge(),$=Math.max(0,A.omset-A.disc),y=$-A.hpp,I=Ct(),R=y-I,E=a.taxScheme||"umkm_final";let W,je,bt;E==="umkm_final"?(W=.5,je=A.omset,bt="PPh Final UMKM PP 55/2022 (0,5% × Omset)"):E==="badan_normal"?(W=22,je=Math.max(0,R),bt="PPh Badan UU HPP (22% × Laba Bersih)"):(W=parseFloat(a.customTaxRate)||0,je=Math.max(0,R),bt=`PPh Tarif Khusus (${W}% × Laba Bersih)`);const ja=je*(W/100),Vt=R-ja,Ea=$>0?(y/$*100).toFixed(1):"0.0",Tr=$>0?(I/$*100).toFixed(1):"0.0",Oa=$>0?(Vt/$*100).toFixed(1):"0.0";w=`
            ${`
        <div class="grid grid-cols-4 gap-3 mb-3.5 select-none">
            <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span class="text-[9px] font-black uppercase tracking-wider text-slate-500 block">Penjualan Bersih</span>
                <span class="text-sm font-black text-slate-900 font-mono tabular-nums block mt-0.5">${f($)}</span>
                <span class="text-[9px] font-bold text-slate-400 mt-0.5 block">100% Basis Omset</span>
            </div>
            <div class="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200">
                <span class="text-[9px] font-black uppercase tracking-wider text-emerald-800 block">Laba Kotor (Gross)</span>
                <span class="text-sm font-black text-emerald-700 font-mono tabular-nums block mt-0.5">${f(y)}</span>
                <span class="text-[9px] font-bold text-emerald-600 mt-0.5 block">${Ea}% Gross Margin</span>
            </div>
            <div class="p-3 rounded-xl bg-rose-50/70 border border-rose-200">
                <span class="text-[9px] font-black uppercase tracking-wider text-rose-800 block">Beban Operasional</span>
                <span class="text-sm font-black text-rose-700 font-mono tabular-nums block mt-0.5">${I>0?Ee(I,!0):"Rp 0"}</span>
                <span class="text-[9px] font-bold text-rose-600 mt-0.5 block">${Tr}% Opex Ratio</span>
            </div>
            <div class="p-3 rounded-xl bg-blue-50/80 border border-blue-200">
                <span class="text-[9px] font-black uppercase tracking-wider text-blue-900 block">Laba Bersih Akhir</span>
                <span class="text-sm font-black text-blue-800 font-mono tabular-nums block mt-0.5">${f(Vt)}</span>
                <span class="text-[9px] font-bold text-blue-600 mt-0.5 block">${Oa}% Net Margin</span>
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
                        <td class="py-1.5 px-3 text-right font-mono tabular-nums font-semibold">${f(A.omset)}</td>
                        <td class="py-1.5 px-3 text-right font-mono tabular-nums text-slate-400">-</td>
                    </tr>
                    <tr>
                        <td class="py-1.5 px-3 font-mono text-slate-500 text-[11px]">4-200</td>
                        <td class="py-1.5 px-3 font-semibold pl-6 text-rose-700">Potongan &amp; Diskon Penjualan</td>
                        <td class="py-1.5 px-3 text-center text-[10px] text-rose-600">Diskon Nota</td>
                        <td class="py-1.5 px-3 text-right font-mono tabular-nums font-semibold text-rose-600">${Ee(A.disc,!0)}</td>
                        <td class="py-1.5 px-3 text-right font-mono tabular-nums text-slate-400">-</td>
                    </tr>
                    <tr class="bg-slate-50 font-bold text-slate-900 border-t border-slate-300">
                        <td class="py-2 px-3 font-mono text-[11px]">4-000</td>
                        <td class="py-2 px-3 pl-6 uppercase text-[11px]">Total Pendapatan Bersih (Net Revenue)</td>
                        <td class="py-2 px-3 text-center text-[10px] font-mono text-blue-700 font-bold">100.0%</td>
                        <td class="py-2 px-3 text-right font-mono tabular-nums text-slate-400">-</td>
                        <td class="py-2 px-3 text-right font-mono tabular-nums font-black text-slate-900 text-[12px]">${f($)}</td>
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
                        <td class="py-1.5 px-3 text-right font-mono tabular-nums font-semibold text-rose-600">${Ee(A.hpp,!0)}</td>
                        <td class="py-1.5 px-3 text-right font-mono tabular-nums text-slate-400">-</td>
                    </tr>
                    <tr class="bg-emerald-50/80 font-black text-emerald-950 border-t border-emerald-300">
                        <td class="py-2 px-3 font-mono text-[11px]">5-900</td>
                        <td class="py-2 px-3 pl-6 uppercase tracking-wide text-emerald-900 text-[11px]">LABA KOTOR (GROSS PROFIT)</td>
                        <td class="py-2 px-3 text-center text-[10px] font-mono text-emerald-700 font-bold">${Ea}%</td>
                        <td class="py-2 px-3 text-right font-mono tabular-nums text-slate-400">-</td>
                        <td class="py-2 px-3 text-right font-mono tabular-nums text-emerald-700 text-[12.5px] font-black">${f(y)}</td>
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
                        <td class="py-1.5 px-3 text-right font-mono tabular-nums font-semibold text-rose-600">${Ee(I,!0)}</td>
                        <td class="py-1.5 px-3 text-right font-mono tabular-nums text-slate-400">-</td>
                    </tr>
                    <tr class="bg-slate-50 font-bold text-slate-900 border-t border-slate-300">
                        <td class="py-2 px-3 font-mono text-[11px]">6-900</td>
                        <td class="py-2 px-3 pl-6 uppercase text-[11px]">Laba Operasional Sebelum Pajak (EBIT)</td>
                        <td class="py-2 px-3 text-center text-[10px] font-mono text-slate-600">${$>0?(R/$*100).toFixed(1):"0.0"}%</td>
                        <td class="py-2 px-3 text-right font-mono tabular-nums text-slate-400">-</td>
                        <td class="py-2 px-3 text-right font-mono tabular-nums font-black text-slate-900 text-[12px]">${f(R)}</td>
                    </tr>

                    <!-- IV. PAJAK & LABA BERSIH -->
                    <tr class="bg-slate-100/70 font-black text-slate-900 text-[10.5px]">
                        <td class="py-1.5 px-3 font-mono">4.0</td>
                        <td class="py-1.5 px-3 uppercase tracking-wide" colspan="4">IV. ESTIMASI BEBAN PAJAK PENGHASILAN (TAX PROVISION)</td>
                    </tr>
                    <tr>
                        <td class="py-1.5 px-3 font-mono text-slate-500 text-[11px]">9-100</td>
                        <td class="py-1.5 px-3 font-semibold pl-6 text-rose-700">Estimasi ${p(bt)}</td>
                        <td class="py-1.5 px-3 text-center text-[10px] text-rose-600">${W}% Basis</td>
                        <td class="py-1.5 px-3 text-right font-mono tabular-nums font-semibold text-rose-600">${Ee(ja,!0)}</td>
                        <td class="py-1.5 px-3 text-right font-mono tabular-nums text-slate-400">-</td>
                    </tr>
                    <tr class="bg-blue-50/90 text-blue-950 font-black border-t-2 border-slate-900 border-b-4 border-double border-slate-900">
                        <td class="py-2.5 px-3 font-mono text-[11.5px]">9-900</td>
                        <td class="py-2.5 px-3 pl-6 uppercase tracking-wider text-blue-900 text-[11.5px]">LABA BERSIH SETELAH PAJAK (NET INCOME)</td>
                        <td class="py-2.5 px-3 text-center text-[10.5px] font-mono text-blue-700">${Oa}%</td>
                        <td class="py-2.5 px-3 text-right font-mono tabular-nums text-slate-400">-</td>
                        <td class="py-2.5 px-3 text-right font-mono tabular-nums text-blue-900 text-[13.5px] font-black">${f(Vt)}</td>
                    </tr>
                </tbody>
            </table>
        `}else if(t==="balance"){const A=Pt(),$=a.balanceSheet||{kas:0,piutang:0,hutang:0},y=(parseFloat($.kas)||0)+(parseFloat($.piutang)||0)+A.assetHpp,I=parseFloat($.hutang)||0,R=y-I;w=`
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
                            <span class="font-mono tabular-nums font-bold text-slate-900">${f($.kas||0)}</span>
                        </div>
                        <div class="flex justify-between py-1.5 border-b border-slate-100">
                            <span class="font-semibold text-slate-700">1-200 Piutang Usaha (Nota Tempo)</span>
                            <span class="font-mono tabular-nums font-bold text-slate-900">${f($.piutang||0)}</span>
                        </div>
                        <div class="flex justify-between py-1.5 border-b border-slate-100">
                            <span class="font-semibold text-slate-700">1-300 Persediaan Barang (Nilai HPP Stok)</span>
                            <span class="font-mono tabular-nums font-bold text-slate-900">${f(A.assetHpp)}</span>
                        </div>
                        <div class="flex justify-between py-2 border-t-2 border-slate-900 mt-2 bg-slate-50 px-2 rounded font-black text-slate-900">
                            <span class="uppercase tracking-wider">TOTAL ASET</span>
                            <span class="font-mono tabular-nums text-sm">${f(y)}</span>
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
                            <span class="font-mono tabular-nums font-bold text-rose-700">${f(I)}</span>
                        </div>
                        <div class="flex justify-between py-1.5 border-b border-slate-100">
                            <span class="font-semibold text-slate-700">3-100 Modal Disetor &amp; Saldo Laba Usaha</span>
                            <span class="font-mono tabular-nums font-bold text-slate-900">${f(R)}</span>
                        </div>
                        <div class="flex justify-between py-1.5 border-b border-slate-100 opacity-0 pointer-events-none">
                            <span>-</span><span>-</span>
                        </div>
                        <div class="flex justify-between py-2 border-t-2 border-slate-900 mt-2 bg-slate-50 px-2 rounded font-black text-slate-900">
                            <span class="uppercase tracking-wider">TOTAL KEWAJIBAN + EKUITAS</span>
                            <span class="font-mono tabular-nums text-sm">${f(I+R)}</span>
                        </div>
                    </div>
                </div>
            </div>
        `}const S=`
    <div class="a4-page" data-page="1" data-total-pages="1">
        <div class="a4-page-body flex-1 flex flex-col justify-between">
            <div>
                ${g}
                ${w}
            </div>
            ${h}
        </div>
        ${v}
    </div>
    `;Le("doc-modal-title","Preview "+m),j("doc-paper-content",S);const M=k("doc-page-count-badge");M&&(M.textContent="1 Halaman A4");const D=k("doc-preview-modal");D&&D.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("docPreview"),Ue("doc-preview-modal"),setTimeout(()=>{k("doc-preview-modal")&&k("doc-preview-modal").classList.remove("opacity-0"),k("doc-preview-modal-box")&&k("doc-preview-modal-box").classList.remove("scale-95"),typeof window.fitDocPreview=="function"&&window.fitDocPreview()},10)};window.fetchTaxPeriodData=Dt;window.getTaxPeriodTotals=Ge;window.getTaxPeriodExpenses=Ct;window.rTaxPanel=Ds;window.rTaxRenderShell=Bt;window.switchTaxTab=Cs;window.changeTaxYear=Bs;window.changeTaxMonth=Ls;window.rTaxSubContent=it;window.rTaxSummary=ba;window.rTaxIncome=Lt;window.saveMonthlyExpense=Ns;window.rTaxBalance=Nt;window.saveBalanceField=Rs;window.rTaxSettingsPanel=ua;window.toggleCustomTaxRateInput=js;window.saveTaxSettingsPanel=Es;window.openTaxDocPreview=Os;window.MONTH_NAMES=ce;const nt=t=>window.pushModalHistory?.(t),Rt=(t,e,a)=>typeof window.requestCloseModal=="function"?window.requestCloseModal(t,e,a):a?.();let xe="all",se="orders",te="all",ne="all",ge="",O=[],V=[],xa=null,Te="items";const qe=()=>{if(["modal-tempo-detail","modal-tempo-payment","modal-tempo-penalty","modal-tempo-confirmations"].forEach(t=>{const e=document.querySelector(`#admin-content #${t}`);e&&e.remove()}),!k("modal-tempo-detail")){const t=document.createElement("div");t.id="modal-tempo-detail",t.className="fixed inset-0 z-[150] flex hidden items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/75 opacity-0 transition-opacity duration-300",t.onclick=e=>{e.target===t&&window.closeTempoDetailModal?.()},t.innerHTML=`
            <div id="modal-tempo-detail-box" class="modal-bottom-sheet relative flex max-h-[92dvh] sm:max-h-[88dvh] w-full max-w-3xl translate-y-full sm:translate-y-10 transform flex-col overflow-hidden rounded-t-[2rem] sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300">
                <div id="modal-tempo-detail-content" class="flex-1 overflow-y-auto custom-scrollbar flex flex-col"></div>
            </div>
        `,document.body.appendChild(t)}if(!k("modal-tempo-payment")){const t=document.createElement("div");t.id="modal-tempo-payment",t.className="fixed inset-0 z-[150] flex hidden items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/75 opacity-0 transition-opacity duration-300",t.onclick=e=>{e.target===t&&window.closeTempoPaymentModal?.()},t.innerHTML=`
            <div id="modal-tempo-payment-box" class="modal-bottom-sheet relative flex max-h-[92dvh] sm:max-h-[88dvh] w-full max-w-md translate-y-full sm:translate-y-10 transform flex-col overflow-hidden rounded-t-[2rem] sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300">
                <div id="modal-tempo-payment-content" class="flex-1 overflow-y-auto custom-scrollbar flex flex-col"></div>
            </div>
        `,document.body.appendChild(t)}if(!k("modal-tempo-penalty")){const t=document.createElement("div");t.id="modal-tempo-penalty",t.className="fixed inset-0 z-[150] flex hidden items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/75 opacity-0 transition-opacity duration-300",t.onclick=e=>{e.target===t&&window.closeTempoPenaltyModal?.()},t.innerHTML=`
            <div id="modal-tempo-penalty-box" class="modal-bottom-sheet relative flex max-h-[92dvh] sm:max-h-[88dvh] w-full max-w-md translate-y-full sm:translate-y-10 transform flex-col overflow-hidden rounded-t-[2rem] sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300">
                <div id="modal-tempo-penalty-content" class="flex-1 overflow-y-auto custom-scrollbar flex flex-col"></div>
            </div>
        `,document.body.appendChild(t)}if(!k("modal-tempo-confirmations")){const t=document.createElement("div");t.id="modal-tempo-confirmations",t.className="fixed inset-0 z-[150] flex hidden items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/75 opacity-0 transition-opacity duration-300",t.onclick=e=>{e.target===t&&window.closeTempoConfirmationsModal?.()},t.innerHTML=`
            <div id="modal-tempo-confirmations-box" class="modal-bottom-sheet relative flex max-h-[92dvh] sm:max-h-[88dvh] w-full max-w-2xl translate-y-full sm:translate-y-10 transform flex-col overflow-hidden rounded-t-[2.25rem] sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300">
                <div id="modal-tempo-confirmations-content" class="flex-1 overflow-y-auto custom-scrollbar flex flex-col"></div>
            </div>
        `,document.body.appendChild(t)}},fa=t=>{if(!t)return"PL";const e=t.trim().split(/\s+/).filter(Boolean);return e.length===1?e[0].substring(0,2).toUpperCase():(e[0][0]+e[e.length-1][0]).toUpperCase()},st=t=>{if(!t)return"-";try{return new Date(t).toLocaleDateString("id-ID",{day:"2-digit",month:"short",year:"numeric"})}catch{return t}},vt=t=>{if(!t)return"-";try{return new Date(t).toLocaleDateString("id-ID",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"})+" WIB"}catch{return t}},ee=t=>{let e=parseFloat(t.payment?.tempoBalance)||0,a=t.payment?.tempoPenaltyRate!==void 0?parseFloat(t.payment.tempoPenaltyRate):1,r=t.payment?.tempoPenaltyStopped===!0,s=0,o=t.payment?.tempoDueDate||0,l=0,i=0,d=!1,c=!1;const b=Date.now();o>0&&(b>o?(l=Math.floor((b-o)/(24*60*60*1e3)),l>0&&(d=!0)):(i=Math.ceil((o-b)/(24*60*60*1e3)),i<=3&&(c=!0))),r?s=parseFloat(t.payment?.tempoFixedPenalty)||0:d&&(s=a/100*e*l);let m=e+s;return{sisa:e,rate:a,isStopped:r,latePenalty:s,dueDate:o,daysLate:l,daysLeft:i,isLate:d,isDueSoon:c,totalAkhir:m,statusCategory:d?"late":c?"due_soon":"active"}},Fs=t=>{qe(),xa=t,Te="items";const e=O.find(s=>s.orderId===t);if(!e)return x("Data piutang tidak ditemukan!");ga(e);const a=k("modal-tempo-detail"),r=k("modal-tempo-detail-box");a&&(ie(a,r),nt("tempoDetail"))},_s=(t=!1)=>{const e=k("modal-tempo-detail"),a=k("modal-tempo-detail-box");e&&Rt("tempoDetail",t,()=>X(e,a))};window.openTempoDetailModal=Fs;window.closeTempoDetailModal=_s;window.switchTempoDetailTab=t=>{Te=t;const e=O.find(a=>a.orderId===xa);e&&ga(e)};const ga=t=>{if(!k("modal-tempo-detail-content"))return;const a=ee(t),r=rt(t.customer?.wa||""),s=fa(t.customer?.name||"Pelanggan"),o=a.dueDate?st(a.dueDate):"-";t.dateString&&vt(t.dateString);const l=t.items||[],i=t.payment?.installments||[],d=i.reduce((w,S)=>w+(parseFloat(S.amount)||0),0),c=t.payment?.grandTotal||a.sisa+d,b=!!(t.payment?.isPaylater||t.isPaylater||t.payment?.subMethod==="paylater"),m=(parseFloat(t.payment?.paylaterAdminFee)||0)+(parseFloat(t.payment?.paylaterServiceFee)||0),u=parseFloat(t.payment?.paylaterUsed)||Math.max(0,a.sisa-m),g=parseFloat(t.payment?.paylaterMonthlyInstallment)||0,h=parseInt(t.payment?.paylaterMonths)||(t.payment?.paylaterTenor==="2m"?2:t.payment?.paylaterTenor==="3m"?3:1);let v="";a.isLate?v=`<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-[11px] font-black uppercase tracking-wider bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400 border border-rose-200 dark:border-rose-800 shadow-2xs"><i class="fa-solid fa-triangle-exclamation"></i> Terlambat ${a.daysLate} Hari</span>`:a.isDueSoon?v=`<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-[11px] font-black uppercase tracking-wider bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300 border border-amber-200 dark:border-amber-800 shadow-2xs"><i class="fa-solid fa-clock"></i> Jatuh Tempo H-${a.daysLeft<=0?"0 (Hari Ini)":a.daysLeft}</span>`:v=`<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-[11px] font-black uppercase tracking-wider text-[var(--color-primary)] border shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.08); border-color: rgba(var(--color-primary-rgb), 0.25);"><i class="fa-solid fa-circle-check"></i> Tempo Berjalan (${a.daysLeft} Hari Lagi)</span>`,j("modal-tempo-detail-content",`
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
                        <h3 class="font-black text-base sm:text-lg text-slate-800 dark:text-white tracking-tight truncate">${p(t.customer?.name||"Pelanggan Anonim")}</h3>
                        <span class="text-[9px] font-bold px-2 py-0.5 rounded-xl uppercase tracking-widest border ${t.customerType==="Member"?"text-amber-600 bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800":"text-slate-500 bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700"}">
                            ${t.customerType==="Member"?'<i class="fa-solid fa-star text-amber-400 mr-1"></i>Member':'<i class="fa-solid fa-user mr-1"></i>Umum'}
                        </span>
                        ${t.payment?.isPaylater||t.isPaylater||t.payment?.subMethod==="paylater"?`
                            <span class="text-[9px] font-black px-2 py-0.5 rounded-xl uppercase tracking-widest border border-emerald-300 dark:border-emerald-700 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-200 flex items-center gap-1">
                                <i class="fa-solid fa-bolt text-emerald-500"></i> Putri PayLater
                            </span>
                        `:""}
                    </div>
                    <div class="flex items-center gap-2 mt-1.5 text-xs text-slate-500 dark:text-slate-400 flex-wrap">
                        <span class="font-mono font-bold text-slate-500 bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 rounded-lg text-[11px] border border-slate-200 dark:border-slate-700">#${p(t.orderId)}</span>
                        <a href="javascript:void(0)" onclick="window.sendSmartTempoWA('${t.orderId}')" class="font-mono text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1 font-bold text-[11px] bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-0.5 rounded-lg border border-emerald-200 dark:border-emerald-800">
                            <i class="fa-brands fa-whatsapp"></i> +${p(r||"-")}
                        </a>
                        <button type="button" onclick="if(typeof window.openDocPreview==='function') window.openDocPreview('tempo_customer_ledger', '${p(t.customer?.phone||t.customer?.wa||t.customer?.name||"")}');" class="text-[11px] font-bold text-[var(--color-primary)] hover:underline inline-flex items-center gap-1 cursor-pointer primary-bg-soft px-2.5 py-0.5 rounded-lg border primary-border">
                            <i class="fa-solid fa-address-book"></i> Kartu Pelanggan
                        </button>
                    </div>
                </div>
            </div>

            <!-- STATUS & JATUH TEMPO STRIP (LEGA & RAPI) -->
            <div class="mt-4 p-3 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-between gap-3 flex-wrap shadow-2xs">
                <div class="flex items-center gap-2 shrink-0">
                    ${v}
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
                        <span class="block text-[10px] font-bold uppercase tracking-wider text-slate-400">${b?"Pokok Belanja":"Total Transaksi"}</span>
                        <span class="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 font-mono mt-0.5 block">${f(b?u:c)}</span>
                    </div>
                    <div>
                        <span class="block text-[10px] font-bold uppercase tracking-wider text-slate-400">${b&&m>0?"Biaya PayLater":"Sudah Dibayar"}</span>
                        <span class="text-xs sm:text-sm font-bold ${b&&m>0,"text-emerald-600 dark:text-emerald-400"} font-mono mt-0.5 block">${b&&m>0?"+"+f(m):f(d)}</span>
                    </div>
                    <div>
                        <span class="block text-[10px] font-bold uppercase tracking-wider text-slate-400">${b&&m>0?"Sudah Dibayar":"Sisa Pokok"}</span>
                        <span class="text-xs sm:text-sm font-bold ${b&&m>0?"text-emerald-600 dark:text-emerald-400":"text-slate-700 dark:text-slate-300"} font-mono mt-0.5 block">${f(b&&m>0?d:a.sisa)}</span>
                    </div>
                    <div>
                        <span class="block text-[10px] font-bold uppercase tracking-wider ${a.isLate?"text-rose-500":"text-slate-400"}">Total Wajib Bayar</span>
                        <span class="text-sm sm:text-base font-black ${a.isLate?"text-rose-600 dark:text-rose-400":"text-slate-900 dark:text-white"} font-mono mt-0.5 block">${f(a.totalAkhir)}</span>
                    </div>
                </div>
                ${b&&g>0&&h>1?`
                <div class="mt-2.5 pt-2 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-xs text-slate-600 dark:text-slate-300">
                    <span class="font-bold flex items-center gap-1.5"><i class="fa-solid fa-calendar-days text-[var(--color-primary)]"></i> Tenor Cicilan: <b>${h} Bulan (${h}x Bayar)</b></span>
                    <span class="font-black font-mono text-[var(--color-primary)]">${f(g)} / bulan</span>
                </div>`:""}
                ${a.latePenalty>0?`
                <div class="mt-2.5 pt-2 border-t border-rose-200/80 dark:border-rose-900/60 flex items-center justify-between text-xs text-rose-600 dark:text-rose-400">
                    <span class="font-bold flex items-center gap-1.5"><i class="fa-solid fa-clock"></i> Termasuk Denda Keterlambatan (${a.rate}%/hari • ${a.daysLate} hari):</span>
                    <span class="font-black font-mono">+${f(a.latePenalty)}</span>
                </div>`:""}
            </div>
        </div>

        <!-- 3-COLUMN SEGMENTED TAB BAR -->
        <div class="px-4 sm:px-6 pt-3 pb-2 bg-white dark:bg-slate-900 shrink-0">
            <div class="grid grid-cols-3 gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl">
                <button type="button" onclick="window.switchTempoDetailTab('items')" class="py-2.5 px-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer ${Te==="items"?"bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs":"text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"}">
                    <i class="fa-solid fa-box text-xs"></i>
                    <span>Barang (${l.length})</span>
                </button>
                <button type="button" onclick="window.switchTempoDetailTab('installments')" class="py-2.5 px-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer ${Te==="installments"?"bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs":"text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"}">
                    <i class="fa-solid fa-receipt text-xs"></i>
                    <span>Cicilan (${i.length})</span>
                </button>
                <button type="button" onclick="window.switchTempoDetailTab('penalty_info')" class="py-2.5 px-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer ${Te==="penalty_info"?"bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs":"text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"}">
                    <i class="fa-solid fa-gear text-xs"></i>
                    <span>Denda &amp; Info</span>
                </button>
            </div>
        </div>

        <!-- TAB BODY CONTENT -->
        <div class="p-5 sm:p-6 pb-20 sm:pb-24 overflow-y-auto flex-1 custom-scrollbar bg-white dark:bg-slate-900">
            ${eo(t,a)}
        </div>

        <!-- STICKY NATIVE ACTION FOOTER (LEGA, SOLID & DOCKING AMAN) -->
        <div class="p-4 sm:p-5 border-t border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shrink-0 flex flex-wrap sm:flex-nowrap items-center justify-between gap-2.5 shadow-[0_-4px_16px_rgba(0,0,0,0.06)] dark:shadow-[0_-4px_16px_rgba(0,0,0,0.3)]" style="padding-bottom: max(1.25rem, env(safe-area-inset-bottom))">
            <div class="flex items-center gap-1.5 w-full sm:w-auto flex-wrap">
                <button type="button" onclick="window.closeTempoDetailModal()" class="h-11 px-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer active:scale-95">
                    Tutup
                </button>
                <button type="button" onclick="if(typeof window.openDocPreview==='function') window.openDocPreview('tempo_invoice', '${t.orderId}');" class="h-11 px-3 rounded-2xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-bold text-xs transition-all cursor-pointer flex items-center gap-1.5 active:scale-95 shadow-2xs" title="Cetak Nota A4 / PDF / Simpan Gambar">
                    <i class="fa-solid fa-file-invoice"></i>
                    <span class="inline">Nota A4</span>
                </button>
                <button type="button" onclick="if(typeof window.printTempoReceiptDirect==='function'){window.printTempoReceiptDirect('${t.orderId}');}else{window.previewTempoReceipt('${t.orderId}');}" class="h-11 px-3 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs transition-all cursor-pointer flex items-center gap-1.5 active:scale-95 shadow-2xs" title="Cetak Struk Thermal (RawBT / Web)">
                    <i class="fa-solid fa-print"></i>
                    <span class="inline">Struk</span>
                </button>
                <button type="button" onclick="window.sendSmartTempoWA('${t.orderId}')" class="h-11 px-3 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs transition-all cursor-pointer flex items-center gap-1.5 active:scale-95 shadow-2xs" title="Kirim Tagihan WhatsApp">
                    <i class="fa-brands fa-whatsapp text-sm"></i>
                    <span class="inline">Tagih WA</span>
                </button>
            </div>

            <div class="flex items-center gap-2 w-full sm:w-auto justify-end">
                <button type="button" onclick="window.closeTempoDetailModal(); window.openTempoPaymentModal('${t.orderId}');" class="flex-1 sm:flex-initial h-11 px-4 rounded-2xl text-white font-bold text-xs shadow-glow active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-1.5" style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                    <i class="fa-solid fa-money-bill-wave"></i>
                    <span>+ Catat Cicilan</span>
                </button>
                <button type="button" onclick="window.closeTempoDetailModal(); window.markTempoPaid('${t.orderId}');" class="h-11 px-3.5 rounded-2xl bg-slate-900 hover:bg-black dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold text-xs transition-all cursor-pointer flex items-center gap-1.5 active:scale-95 shadow-2xs" title="Tandai Seluruh Tagihan Lunas">
                    <i class="fa-solid fa-check-double text-emerald-400"></i>
                    <span>Lunasi</span>
                </button>
            </div>
        </div>
    `)},eo=(t,e)=>{const a=t.items||[],r=t.payment?.installments||[];if(Te==="items")return a.length===0?`
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
                    ${a.map(s=>{const o=s.effectivePrice!==void 0?s.effectivePrice:s.price||0,l=(parseFloat(s.qty)||1)*o;return`
                            <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 flex items-start justify-between gap-3 shadow-2xs">
                                <div class="min-w-0 flex-1">
                                    <h4 class="font-bold text-xs text-slate-800 dark:text-slate-100">${p(s.name||"Barang")}</h4>
                                    ${s.variantName?`<span class="inline-block mt-0.5 text-[10px] text-slate-500 font-medium">Varian: ${p(s.variantName)}</span>`:""}
                                    <div class="mt-1 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                                        ${s.qty} ${p(s.unit||"pcs")} × ${f(o)}
                                    </div>
                                </div>
                                <div class="text-right shrink-0">
                                    <span class="font-black text-xs text-slate-900 dark:text-white font-mono">${f(l)}</span>
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
                            ${a.map(s=>{const o=s.effectivePrice!==void 0?s.effectivePrice:s.price||0,l=(parseFloat(s.qty)||1)*o;return`
                                    <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                                        <td class="py-3 px-4">
                                            <span class="font-bold text-slate-800 dark:text-slate-200">${p(s.name||"Barang")}</span>
                                            ${s.variantName?`<span class="block text-[10px] text-slate-400">Varian: ${p(s.variantName)}</span>`:""}
                                        </td>
                                        <td class="py-3 px-3 text-center font-mono font-bold">${s.qty} ${p(s.unit||"pcs")}</td>
                                        <td class="py-3 px-3 text-right font-mono">${f(o)}</td>
                                        <td class="py-3 px-4 text-right font-black font-mono text-slate-800 dark:text-slate-100">${f(l)}</td>
                                    </tr>
                                `}).join("")}
                        </tbody>
                    </table>
                </div>
            </div>
        `;if(Te==="installments"){const s=!!(t.payment?.isPaylater||t.isPaylater||t.payment?.subMethod==="paylater"||Array.isArray(t.payment?.paylaterSchedule)&&t.payment.paylaterSchedule.length>0),o=t.payment?.grandTotal||t.total||0;let l="";if(s){const d=Array.isArray(t.payment?.paylaterSchedule)&&t.payment.paylaterSchedule.length>0?t.payment.paylaterSchedule:[{installmentNo:1,dueDate:t.payment?.tempoDueDate||Date.now(),dueDateStr:st(t.payment?.tempoDueDate||Date.now()),pokok:parseFloat(t.payment?.paylaterUsed||e.sisa)||0,adminFee:parseFloat(t.payment?.paylaterAdminFee)||0,serviceFee:parseFloat(t.payment?.paylaterServiceFee)||0,totalMonthly:parseFloat(t.payment?.paylaterMonthlyInstallment||t.payment?.tempoBalance||e.sisa)||0}],c=d.reduce((v,w)=>v+(parseFloat(w.totalMonthly)||0),0),b=Math.max(0,parseFloat(t.payment?.tempoBalance)||0),m=Math.max(0,c-b);let u=0;const g=d.map((v,w)=>{const S=parseFloat(v.totalMonthly)||0,M=u;u+=S;const D=u;let A="",$="",y="",I=0;if(m>=D)A="LUNAS",$="bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-700",y='<i class="fa-solid fa-circle-check"></i>',I=0;else if(m>M){const W=m-M;I=Math.max(0,S-W),A=`SEBAGIAN (Sisa ${f(I)})`,$="bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border border-amber-300 dark:border-amber-700",y='<i class="fa-solid fa-hourglass-half"></i>'}else I=S,v.dueDate&&Date.now()>v.dueDate?(A="JATUH TEMPO / TERLAMBAT",$="bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-400 border border-rose-300 dark:border-rose-700",y='<i class="fa-solid fa-circle-exclamation"></i>'):(A="MENUNGGU JATUH TEMPO",$="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700",y='<i class="fa-solid fa-clock"></i>');const R=v.dueDateStr||(v.dueDate?st(v.dueDate):"-"),E=t.payment?.paylaterTenor==="2m"?"2 Bulan":t.payment?.paylaterTenor==="3m"?"3 Bulan":"30 Hari";return`
                  <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs space-y-2">
                    <div class="flex items-center justify-between flex-wrap gap-2">
                      <div class="flex items-center gap-2">
                        <span class="w-7 h-7 rounded-xl flex items-center justify-center text-xs font-black shrink-0 font-mono" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">
                          #${v.installmentNo||w+1}
                        </span>
                        <div>
                          <h4 class="font-bold text-xs text-slate-800 dark:text-slate-100">Angsuran Ke-${v.installmentNo||w+1} (${E})</h4>
                          <p class="text-[10px] text-slate-400">Jatuh Tempo: <span class="font-bold text-slate-700 dark:text-slate-300 font-mono">${R}</span></p>
                        </div>
                      </div>
                      <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black ${$}">
                        ${y} ${A}
                      </span>
                    </div>

                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px]">
                      <div>
                        <span class="text-[10px] text-slate-400 block">Pokok:</span>
                        <span class="font-bold text-slate-700 dark:text-slate-300 font-mono">${f(v.pokok||0)}</span>
                      </div>
                      <div>
                        <span class="text-[10px] text-slate-400 block">Biaya Admin:</span>
                        <span class="font-bold ${(v.adminFee||0)>0?"text-amber-600 dark:text-amber-400":"text-emerald-600 dark:text-emerald-400"} font-mono">
                          ${(v.adminFee||0)>0?f(v.adminFee):"Gratis"}
                        </span>
                      </div>
                      <div>
                        <span class="text-[10px] text-slate-400 block">Biaya Layanan:</span>
                        <span class="font-bold ${(v.serviceFee||0)>0?"text-amber-600 dark:text-amber-400":"text-emerald-600 dark:text-emerald-400"} font-mono">
                          ${(v.serviceFee||0)>0?f(v.serviceFee):"Gratis"}
                        </span>
                      </div>
                      <div>
                        <span class="text-[10px] text-slate-400 block">Total Angsuran:</span>
                        <span class="font-black text-xs font-mono" style="color:var(--color-primary)">${f(S)}</span>
                      </div>
                    </div>

                    ${I>0?`
                      <div class="pt-2 flex justify-end">
                        <button type="button" onclick="window.closeTempoDetailModal(); window.openTempoPaymentModal('${t.orderId}', ${I});"
                          class="px-3 py-1.5 rounded-xl text-white font-bold text-[11px] flex items-center gap-1.5 active:scale-95 transition-all shadow-2xs cursor-pointer"
                          style="background: var(--color-primary);">
                          <i class="fa-solid fa-money-bill-wave"></i>
                          <span>Bayar Angsuran Ini (${f(I)})</span>
                        </button>
                      </div>
                    `:""}
                  </div>
                `}).join("");l=`
              <div class="p-4 rounded-2xl bg-gradient-to-br from-emerald-50/70 via-teal-50/40 to-slate-50 dark:from-emerald-950/20 dark:via-slate-900 dark:to-slate-900 border border-emerald-200/80 dark:border-emerald-800/60 shadow-2xs space-y-3 mb-4">
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2">
                    <span class="w-8 h-8 rounded-xl flex items-center justify-center text-xs text-emerald-600 bg-emerald-100 dark:bg-emerald-900/60 shrink-0">
                      <i class="fa-solid fa-bolt"></i>
                    </span>
                    <div>
                      <h4 class="font-black text-xs text-emerald-900 dark:text-emerald-300">Jadwal Angsuran Putri PayLater</h4>
                      <p class="text-[10px] text-emerald-700/80 dark:text-emerald-400 font-semibold">${t.payment?.paylaterTenor==="2m"?"2 Bulan (2x Cicilan)":t.payment?.paylaterTenor==="3m"?"3 Bulan (3x Cicilan)":"30 Hari (1x Bayar)"} • Transparan Tanpa Biaya Tersembunyi</p>
                    </div>
                  </div>
                  <span class="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-200">
                    Plafon Terpakai: ${f(t.payment?.paylaterUsed||o-(t.payment?.tempoDp||0))}
                  </span>
                </div>

                <div class="space-y-2">
                  ${g}
                </div>
              </div>
            `}let i="";return r.length===0?i=`
                <div class="text-center py-8 text-slate-400 bg-slate-50/60 dark:bg-slate-900/40 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-800 p-6">
                    <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-2.5 mx-auto" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary);">
                        <i class="fa-solid fa-receipt"></i>
                    </div>
                    <p class="font-bold text-xs sm:text-sm text-slate-700 dark:text-slate-200">Belum Ada Riwayat Cicilan</p>
                    <p class="text-[11px] text-slate-400 mt-0.5 max-w-xs mx-auto">Pelanggan belum melakukan pembayaran cicilan apapun untuk tagihan tempo ini.</p>
                    <button type="button" onclick="window.closeTempoDetailModal(); window.openTempoPaymentModal('${t.orderId}');" class="mt-4 px-4 py-2 rounded-xl text-white font-bold text-xs inline-flex items-center gap-1.5 shadow-sm active:scale-95 transition-all cursor-pointer" style="background: var(--color-primary);">
                        <i class="fa-solid fa-plus text-xs"></i>
                        <span>+ Catat Pembayaran Cicilan Pertama</span>
                    </button>
                </div>
            `:i=`
                <div class="space-y-3">
                    <div class="flex items-center justify-between text-xs font-bold text-slate-500 mb-1">
                        <span>Daftar Transaksi Cicilan (${r.length})</span>
                        <span>Total Masuk: <span class="text-emerald-600 font-mono">${f(r.reduce((d,c)=>d+(parseFloat(c.amount)||0),0))}</span></span>
                    </div>
                    <div class="space-y-2.5">
                        ${r.map((d,c)=>`
                            <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 flex items-center justify-between gap-3 shadow-2xs">
                                <div class="flex items-center gap-3">
                                    <div class="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-black shrink-0 bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400">
                                        #${c+1}
                                    </div>
                                    <div>
                                        <span class="font-black text-xs text-emerald-600 dark:text-emerald-400 font-mono">+${f(d.amount)}</span>
                                        <div class="flex items-center gap-2 mt-0.5 text-[10px] text-slate-400">
                                            <span>${vt(d.date)}</span>
                                            <span>•</span>
                                            <span class="font-bold text-slate-600 dark:text-slate-300">${p(d.method||"Tunai")}</span>
                                        </div>
                                        ${d.note?`<p class="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 italic">"${p(d.note)}"</p>`:""}
                                    </div>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                </div>
            `,`
          <div class="space-y-4">
            ${l}
            ${i}
          </div>
        `}return Te==="penalty_info"?`
            <div class="space-y-4">
                <!-- Info Pengiriman & Catatan Pelanggan -->
                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 space-y-2.5 text-xs">
                    <span class="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Data Pelanggan &amp; Pengiriman</span>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                        <div>
                            <span class="text-slate-400 block text-[10px]">Alamat Pelanggan:</span>
                            <span class="font-medium text-slate-700 dark:text-slate-200 mt-0.5 block">${p(t.customer?.address||"Tidak dicantumkan")}</span>
                        </div>
                        <div>
                            <span class="text-slate-400 block text-[10px]">Nomor WhatsApp:</span>
                            <span class="font-medium font-mono text-slate-700 dark:text-slate-200 mt-0.5 block">+${p(t.customer?.wa||"-")}</span>
                        </div>
                    </div>
                    ${t.notes?`
                    <div class="pt-2 border-t border-slate-200/60 dark:border-slate-700">
                        <span class="text-slate-400 block text-[10px]">Catatan Pesanan:</span>
                        <p class="font-medium text-slate-700 dark:text-slate-200 mt-0.5 italic">"${p(t.notes)}"</p>
                    </div>`:""}
                </div>

                <!-- Pengaturan Denda Keterlambatan -->
                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 space-y-3 text-xs">
                    <div class="flex items-center justify-between">
                        <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">Status Denda Keterlambatan</span>
                        <span class="text-[10px] font-bold px-2.5 py-0.5 rounded-full ${e.isStopped?"bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-300":"bg-rose-100 text-rose-600 dark:bg-rose-950/60 dark:text-rose-400"}">
                            ${e.isStopped?"DIBEKUKAN (FIXED)":"BERJALAN OTOMATIS"}
                        </span>
                    </div>

                    <div class="grid grid-cols-2 gap-3 pt-1">
                        <div>
                            <span class="text-slate-400 block text-[10px]">Tarif Denda Harian:</span>
                            <span class="font-bold text-slate-800 dark:text-slate-100 font-mono mt-0.5 block">${e.rate}% / Hari</span>
                        </div>
                        <div>
                            <span class="text-slate-400 block text-[10px]">Akumulasi Denda:</span>
                            <span class="font-bold text-rose-600 dark:text-rose-400 font-mono mt-0.5 block">+${f(e.latePenalty)}</span>
                        </div>
                    </div>

                    <!-- Tombol Kontrol Denda -->
                    <div class="flex items-center gap-2 pt-2 border-t border-slate-200/60 dark:border-slate-700">
                        <button type="button" onclick="window.openTempoPenaltyModal('${t.orderId}')" class="flex-1 py-2 px-3 rounded-xl border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer">
                            <i class="fa-solid fa-percent text-xs"></i>
                            <span>Ubah Tarif Denda</span>
                        </button>
                        <button type="button" onclick="window.stopTempoPenalty('${t.orderId}', ${e.latePenalty}, ${e.isStopped})" class="flex-1 py-2 px-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer ${e.isStopped?"bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.3)]":"bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 hover:bg-rose-200"}">
                            <i class="fa-solid ${e.isStopped?"fa-play":"fa-pause"} text-xs"></i>
                            <span>${e.isStopped?"Lanjutkan Denda":"Bekukan Denda"}</span>
                        </button>
                    </div>
                </div>
            </div>
        `:""},Ks=(t,e=null)=>{qe();const a=O.find(m=>m.orderId===t);if(!a)return x("Data piutang tidak ditemukan!");const r=ee(a),s=k("modal-tempo-payment"),o=k("modal-tempo-payment-box"),l=k("modal-tempo-payment-content");if(!s||!l)return;const i=Math.round(r.totalAkhir),d=!!(a.payment?.isPaylater||a.isPaylater||a.payment?.subMethod==="paylater");let c=0;if(d){const m=Array.isArray(a.payment?.paylaterSchedule)&&a.payment.paylaterSchedule.length>0?a.payment.paylaterSchedule:[];if(m.length>0){const u=m.reduce((w,S)=>w+(parseFloat(S.totalMonthly)||0),0),g=Math.max(0,parseFloat(a.payment?.tempoBalance)||0),h=Math.max(0,u-g);let v=0;for(const w of m){const S=parseFloat(w.totalMonthly)||0,M=v;if(v+=S,h<v){const D=Math.max(0,h-M);c=Math.round(Math.max(0,S-D));break}}}else parseFloat(a.payment?.paylaterMonthlyInstallment)>0&&(c=Math.round(parseFloat(a.payment.paylaterMonthlyInstallment)))}let b=i;e!=null&&!isNaN(e)?b=Math.min(i,Math.max(1,Math.round(e))):c>0&&c<i&&(b=Math.min(i,c)),j("modal-tempo-payment-content",`
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
                    <p class="text-xs text-slate-400">${p(a.customer?.name||"Pelanggan")} • #${p(a.orderId)}</p>
                </div>
            </div>
            <button onclick="window.closeTempoPaymentModal()" class="w-9 h-9 rounded-full bg-slate-100 hover:bg-rose-100 hover:text-rose-500 dark:bg-slate-800 dark:hover:bg-rose-950/40 dark:hover:text-rose-400 text-slate-500 flex items-center justify-center transition-all cursor-pointer active:scale-95" aria-label="Tutup Modal">
                <i class="fa-solid fa-xmark text-sm"></i>
            </button>
        </div>

        <form id="tempo-pay-form" onsubmit="window.submitTempoPayment(event, '${a.orderId}')" class="flex-1 flex flex-col overflow-hidden">
            <input type="hidden" id="tempo-pay-total-wajib" value="${i}">

            <div class="p-4 sm:p-6 space-y-4 overflow-y-auto flex-1 custom-scrollbar">
                <!-- KARTU RINGKASAN TAGIHAN -->
                <div class="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/60 text-xs space-y-1.5 shadow-2xs">
                    <div class="flex justify-between">
                        <span class="text-slate-500">Sisa Pokok Piutang:</span>
                        <span class="font-bold text-slate-800 dark:text-white">${f(r.sisa)}</span>
                    </div>
                    ${r.latePenalty>0?`
                    <div class="flex justify-between text-rose-600 dark:text-rose-400">
                        <span>Denda Keterlambatan (${r.daysLate} hari):</span>
                        <span class="font-bold font-mono">+${f(r.latePenalty)}</span>
                    </div>`:""}
                    <div class="flex justify-between pt-1.5 border-t border-amber-200 dark:border-amber-800 font-black">
                        <span class="text-amber-600 dark:text-amber-400">Total Wajib Bayar:</span>
                        <span class="text-amber-600 dark:text-amber-400 text-base font-mono">${f(i)}</span>
                    </div>
                    ${d?`
                    <div class="pt-2 border-t border-amber-200/60 dark:border-amber-800/40 flex items-center justify-between text-[11px] text-emerald-700 dark:text-emerald-400 font-bold">
                        <span class="flex items-center gap-1"><i class="fa-solid fa-bolt text-xs"></i> Putri PayLater (${a.payment?.paylaterTenor==="2m"?"2 Bulan":a.payment?.paylaterTenor==="3m"?"3 Bulan":"30 Hari"})</span>
                        <span class="font-mono">${f(a.payment?.paylaterMonthlyInstallment||c)}/bln</span>
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
                            max="${i}" 
                            value="${b}" 
                            oninput="window.recalcTempoPayPreview()"
                            class="admin-input bg-slate-50 dark:bg-slate-900 font-black text-lg pr-24 text-emerald-600 rounded-2xl"
                        >
                        <button 
                            type="button" 
                            onclick="window.setQuickPayTempo(${i})" 
                            class="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl text-white font-black text-[11px] shadow-sm active:scale-95 transition-all cursor-pointer" 
                            style="background: var(--color-primary);"
                        >
                            Lunas
                        </button>
                    </div>

                    <!-- PRESET QUICK-PAY CHIPS -->
                    <div class="flex items-center gap-1.5 mt-2 overflow-x-auto pb-1 hide-scrollbar">
                        ${c>0&&c<i?`
                        <button type="button" onclick="window.setQuickPayTempo(${c})" class="px-2.5 py-1 rounded-xl text-[10px] font-black border border-emerald-300 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 active:scale-95 transition-all shrink-0 flex items-center gap-1">
                            <i class="fa-solid fa-bolt text-[9px]"></i> 1 Angsuran (${f(c)})
                        </button>
                        `:""}
                        <button type="button" onclick="window.setQuickPayTempo(${Math.round(i*.25)})" class="px-2.5 py-1 rounded-xl text-[10px] font-bold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 text-slate-600 dark:text-slate-300 active:scale-95 transition-all shrink-0">
                            25% (${f(Math.round(i*.25))})
                        </button>
                        <button type="button" onclick="window.setQuickPayTempo(${Math.round(i*.5)})" class="px-2.5 py-1 rounded-xl text-[10px] font-bold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 text-slate-600 dark:text-slate-300 active:scale-95 transition-all shrink-0">
                            50% (${f(Math.round(i*.5))})
                        </button>
                        <button type="button" onclick="window.setQuickPayTempo(${Math.round(i*.75)})" class="px-2.5 py-1 rounded-xl text-[10px] font-bold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 text-slate-600 dark:text-slate-300 active:scale-95 transition-all shrink-0">
                            75% (${f(Math.round(i*.75))})
                        </button>
                        <button type="button" onclick="window.setQuickPayTempo(${i})" class="px-2.5 py-1 rounded-xl text-[10px] font-black border text-white active:scale-95 transition-all shrink-0" style="background: var(--color-primary); border-color: var(--color-primary);">
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
                <button type="submit" class="h-12 px-6 rounded-2xl text-white font-bold text-xs shadow-glow transition-all active:scale-95 cursor-pointer flex items-center gap-2" style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                    <i class="fa-solid fa-check"></i>
                    <span>Simpan Pembayaran</span>
                </button>
            </div>
        </form>
    `),window.recalcTempoPayPreview(),ie(s,o),nt("tempoPayment")},Us=(t=!1)=>{const e=k("modal-tempo-payment"),a=k("modal-tempo-payment-box");e&&Rt("tempoPayment",t,()=>X(e,a))};window.openTempoPaymentModal=Ks;window.closeTempoPaymentModal=Us;window.setQuickPayTempo=t=>{const e=k("tempo-pay-amount");e&&(e.value=Math.max(1,Math.round(t)),window.recalcTempoPayPreview())};window.recalcTempoPayPreview=()=>{const t=k("tempo-pay-amount"),e=k("tempo-pay-preview-box"),a=parseFloat(k("tempo-pay-total-wajib")?.value)||0;if(!t||!e)return;const r=parseFloat(t.value)||0,s=Math.max(0,a-r);r>=a&&a>0?e.innerHTML=`
            <div class="flex items-center justify-between text-emerald-600 dark:text-emerald-400 font-bold">
                <span>Status Setelah Pembayaran:</span>
                <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-700">
                    <i class="fa-solid fa-check-double"></i> OTOMATIS LUNAS
                </span>
            </div>
            <p class="text-[10px] text-emerald-500 mt-1">Seluruh sisa tagihan terbayar penuh dan pesanan akan otomatis ditandai Selesai.</p>
        `:e.innerHTML=`
            <div class="flex items-center justify-between text-slate-600 dark:text-slate-300 font-bold">
                <span>Sisa Tagihan Setelah Bayar:</span>
                <span class="font-mono text-slate-800 dark:text-white text-sm font-black">${f(s)}</span>
            </div>
            <p class="text-[10px] text-slate-400 mt-0.5">Sisa saldo piutang akan diperbarui secara otomatis.</p>
        `};window.submitTempoPayment=async(t,e)=>{t.preventDefault(),L("Mencatat Pembayaran...");try{const a=parseFloat(k("tempo-pay-amount")?.value)||0,r=k("tempo-pay-date")?.value||new Date().toISOString(),s=k("tempo-pay-method")?.value||"Kas Tunai Toko",o=(k("tempo-pay-note")?.value||"").trim();if(a<=0)return C(),x("Nominal cicilan harus lebih besar dari Rp 0!");const l=P.collection("freshmart_orders").doc(e),i=await l.get();if(!i.exists)return C(),x("Pesanan tidak ditemukan!");const d=i.data();let c=parseFloat(d.payment?.tempoBalance)||0,b=Math.max(0,c-a),m=d.payment?.installments||[];m.push({date:r?new Date(r).getTime():Date.now(),amount:a,method:s,note:o||`Cicilan (${s})`});let u={"payment.tempoBalance":b,"payment.installments":m};b<=0&&(u["payment.paymentStatus"]="lunas",u.status="Selesai"),await l.update(u);const g=!!(d.payment?.isPaylater||d.isPaylater||d.payment?.subMethod==="paylater");if(g){const w=(d.customer?.wa||d.customer?.phone||"").replace(/\D/g,""),S=w.startsWith("0")?"62"+w.slice(1):w;if(S){const M=Qa(d.payment,c,b,a);try{const D=P.collection("freshmart").doc("cms_data").collection("customers").doc(S);if(M>0&&await P.runTransaction(async A=>{const $=await A.get(D);if($.exists){const y=Math.max(0,parseFloat($.data().paylaterUsed)||0),I=Math.max(0,y-M);A.update(D,{paylaterUsed:I})}}),M>0&&Array.isArray(n.customers)){const A=n.customers.find($=>$&&(String($.id)===S||String($.phone).replace(/\D/g,"")===w||String($.phone).replace(/\D/g,"")===S));A&&(A.paylaterUsed=Math.max(0,Math.max(0,parseFloat(A.paylaterUsed)||0)-M))}}catch(D){console.warn("[Tempo] Gagal pulihkan limit PayLater:",D)}}}if(b<=0)O=O.filter(w=>w.orderId!==e);else{const w=O.findIndex(S=>S.orderId===e);w!==-1&&(O[w].payment||(O[w].payment={}),O[w].payment.tempoBalance=b,O[w].payment.installments=m)}if(window.cachedPiutangOrders=O,Array.isArray(B)){let w=B.findIndex(S=>S.orderId===e);w!==-1&&(B[w].payment.tempoBalance=b,B[w].payment.installments=m,b<=0&&(B[w].payment.paymentStatus="lunas",B[w].status="Selesai"))}const h=k("modal-tempo-detail");if(h&&!h.classList.contains("hidden")&&xa===e)if(b<=0)window.closeTempoDetailModal();else{const w=O.find(S=>S.orderId===e);w&&ga(w)}let v=!1;if(s==="Kas Tunai Toko"&&typeof window.recordTempoPaymentToShift=="function"){const w=d.customer?.name||"Pelanggan";v=window.recordTempoPaymentToShift(a,e,`Cicilan #${e.split("-").pop()} (${w})`)}C(),window.closeTempoPaymentModal(),g?x("Cicilan dicatat & Limit Putri PayLater berhasil dipulihkan!"):v?x("Cicilan dicatat & otomatis masuk ke Kas Laci Kasir!"):x("Pembayaran cicilan berhasil dicatat!"),window.rAdmPiutang&&window.rAdmPiutang()}catch(a){C(),console.error("Gagal mencatat cicilan:",a),x("Gagal memproses cicilan: "+a.message)}};window.payTempoInstallment=t=>{window.openTempoPaymentModal(t)};const Hs=t=>{qe();const e=O.find(l=>l.orderId===t);if(!e)return x("Data piutang tidak ditemukan!");const a=ee(e),r=k("modal-tempo-penalty"),s=k("modal-tempo-penalty-box"),o=k("modal-tempo-penalty-content");!r||!o||(j("modal-tempo-penalty-content",`
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
                    <p class="text-xs text-slate-400">${p(e.customer?.name||"Pelanggan")} • Sisa: ${f(a.sisa)}</p>
                </div>
            </div>
            <button onclick="window.closeTempoPenaltyModal()" class="w-9 h-9 rounded-full bg-slate-100 hover:bg-rose-100 hover:text-rose-500 dark:bg-slate-800 dark:hover:bg-rose-950/40 dark:hover:text-rose-400 text-slate-500 flex items-center justify-center transition-all cursor-pointer active:scale-95" aria-label="Tutup Modal">
                <i class="fa-solid fa-xmark text-sm"></i>
            </button>
        </div>

        <form id="tempo-penalty-form" onsubmit="window.submitTempoPenalty(event, '${e.orderId}')" class="flex-1 flex flex-col overflow-hidden">
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
                        <span class="font-bold font-mono text-rose-600 dark:text-rose-400">+${f(a.latePenalty)}</span>
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
                <button type="submit" class="h-12 px-6 rounded-2xl text-white font-bold text-xs shadow-glow transition-all active:scale-95 cursor-pointer flex items-center gap-2" style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                    <i class="fa-solid fa-check"></i>
                    <span>Simpan Tarif Denda</span>
                </button>
            </div>
        </form>
    `),ie(r,s),nt("tempoPenalty"))},Gs=(t=!1)=>{const e=k("modal-tempo-penalty"),a=k("modal-tempo-penalty-box");e&&Rt("tempoPenalty",t,()=>X(e,a))};window.openTempoPenaltyModal=Hs;window.closeTempoPenaltyModal=Gs;const Vs=()=>{qe();const t=k("modal-tempo-confirmations"),e=k("modal-tempo-confirmations-box");!t||!e||(ka(),ie(t,e),nt("tempoConfirmations"))},jt=(t=!1)=>{const e=k("modal-tempo-confirmations"),a=k("modal-tempo-confirmations-box");!e||!a||Rt("tempoConfirmations",t,()=>X(e,a))};window.openTempoConfirmationsModal=Vs;window.closeTempoConfirmationsModal=jt;const ka=()=>{const t=k("modal-tempo-confirmations-content");if(!t)return;if(!V||V.length===0){t.innerHTML=`
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
        `;return}const e=V.map(a=>{const r=a.createdAt?new Date(a.createdAt).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}):"-",s=(a.customerPhone||"").replace(/\D/g,"");return`
            <div class="p-4 sm:p-5 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-3.5">
                <div class="flex items-start justify-between gap-3">
                    <div class="min-w-0">
                        <div class="flex items-center gap-2 flex-wrap">
                            <span class="px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-wider bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-300 border border-amber-300 dark:border-amber-700">
                                ${p(a.channel==="qris"?"QRIS Toko":a.bankName||"Transfer Bank")}
                            </span>
                            <span class="text-xs font-mono font-bold text-slate-400">Nota: #${p(a.orderId)}</span>
                        </div>
                        <h4 class="text-sm sm:text-base font-bold text-slate-800 dark:text-white mt-1 truncate">
                            ${p(a.customerName||"Pelanggan")}
                        </h4>
                        <div class="flex items-center gap-2 mt-0.5 text-xs text-slate-500">
                            ${s?`<a href="https://wa.me/${s}" target="_blank" class="text-emerald-600 font-bold hover:underline inline-flex items-center gap-1"><i class="fa-brands fa-whatsapp text-xs"></i> +${s}</a>`:""}
                            <span>•</span>
                            <span class="text-[11px] text-slate-400">${r}</span>
                        </div>
                    </div>
                    <div class="text-right shrink-0">
                        <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Nominal Ditransfer</p>
                        <p class="text-sm sm:text-base font-black text-emerald-600 dark:text-emerald-400 font-mono">${f(a.amount||0)}</p>
                    </div>
                </div>

                ${a.notes?`
                    <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-xs text-slate-600 dark:text-slate-300 italic">
                        <span class="font-bold not-italic text-slate-400">Catatan:</span> "${p(a.notes)}"
                    </div>
                `:""}

                <!-- FOTO BUKTI PEMBAYARAN -->
                ${a.buktiUrl?`
                    <div>
                        <p class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                            <i class="fa-solid fa-image text-slate-400"></i> Lampiran Bukti Transfer:
                        </p>
                        <div class="relative group rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 max-h-60 sm:max-h-72 bg-slate-100 dark:bg-slate-800 flex items-center justify-center shadow-2xs">
                            <img src="${p(fe(a.buktiUrl))}" alt="Bukti Transfer" class="w-full max-h-60 sm:max-h-72 object-contain" onerror="this.src=''; this.alt='Gambar gagal dimuat';" loading="lazy">
                            <a href="${p(fe(a.buktiUrl))}" target="_blank" rel="noopener noreferrer" class="absolute inset-0 bg-slate-900/50 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-1.5 text-white text-xs font-bold transition-opacity">
                                <i class="fa-solid fa-arrow-up-right-from-square"></i> Buka Ukuran Penuh
                            </a>
                        </div>
                    </div>
                `:`
                    <p class="text-[10px] font-semibold text-rose-500 italic"><i class="fa-solid fa-triangle-exclamation mr-1"></i> Tidak ada lampiran foto bukti transfer.</p>
                `}

                <!-- TOMBOL AKSI: APPROVE & REJECT -->
                <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end gap-2.5">
                    <button type="button" onclick="window.rejectTempoPaymentConfirmation('${p(a.id)}')" class="h-11 px-4 rounded-xl text-xs font-bold text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 border border-rose-200 dark:border-rose-900/50 transition-all active:scale-95 cursor-pointer flex items-center gap-1.5">
                        <i class="fa-solid fa-xmark"></i> Tolak
                    </button>
                    <button type="button" onclick="window.approveTempoPaymentConfirmation('${p(a.id)}')" class="h-11 px-5 rounded-xl text-xs font-bold text-white transition-all active:scale-95 cursor-pointer flex items-center gap-1.5 shadow-sm" style="background: var(--color-primary); box-shadow: 0 4px 12px rgba(var(--color-primary-rgb), 0.3);">
                        <i class="fa-solid fa-check"></i> Setujui Pembayaran
                    </button>
                </div>
            </div>
        `}).join("");t.innerHTML=`
        <!-- DRAG PULL MOBILE -->
        <div class="pull-indicator sm:hidden"></div>

        <div class="px-5 sm:px-6 pt-3.5 sm:pt-5 pb-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-800/80 shrink-0">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-2xl text-white flex items-center justify-center text-xs font-black shadow-xs" style="background: var(--color-primary); box-shadow: 0 4px 12px rgba(var(--color-primary-rgb), 0.3);">
                    <i class="fa-solid fa-receipt text-sm"></i>
                </div>
                <div>
                    <h3 class="font-bold text-slate-800 dark:text-white text-sm sm:text-base">Antrean Konfirmasi Pembayaran Pelanggan</h3>
                    <p class="text-[10px] text-slate-400 font-semibold">${V.length} Bukti Transfer Menunggu Persetujuan</p>
                </div>
            </div>
            <button type="button" onclick="window.closeTempoConfirmationsModal()" class="w-8 h-8 flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-rose-100 hover:text-rose-500 transition-colors active:scale-95 cursor-pointer" title="Tutup">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </div>
        <div class="p-5 sm:p-6 pb-20 sm:pb-24 space-y-4 overflow-y-auto custom-scrollbar flex-1">
            ${e}
        </div>
    `},qs=async t=>{const e=(V||[]).find(s=>s.id===t);if(!e)return x("Data konfirmasi tidak ditemukan atau telah diproses.","warning");const a=parseFloat(e.amount)||0,r=e.orderId;if(!r||a<=0)return x("Data konfirmasi tidak valid.","error");pe("Setujui Pembayaran Pelanggan",`Apakah Anda yakin ingin menyetujui bukti pembayaran ${f(a)} dari ${e.customerName||"Pelanggan"} untuk nota #${r}?

Saldo piutang nota akan otomatis terpotong dan limit kredit PayLater pelanggan akan langsung dipulihkan secara real-time.`,async()=>{L("Memproses persetujuan pembayaran...");try{const s=P.collection("freshmart_orders").doc(r),o=await s.get();if(!o.exists)throw new Error("Nota pesanan #"+r+" tidak ditemukan di database.");const l=o.data(),i=Math.max(0,parseFloat(l.payment?.tempoBalance)||0),d=Math.max(0,i-a),c=Array.isArray(l.payment?.installments)?[...l.payment.installments]:[],b="INS-"+Date.now().toString(36).toUpperCase(),m=Date.now(),u=new Date(m).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"});c.push({id:b,amount:a,date:m,dateStr:u,method:e.channel==="qris"?"QRIS Toko":e.bankName||"Transfer Bank",note:(e.notes?e.notes+" ":"")+`(Konfirmasi Mandiri ${e.confirmId||t})`,recordedBy:auth.currentUser?.email||"Owner / Kasir",timestamp:m,proofUrl:e.buktiUrl||""});let g=null;if(Array.isArray(l.payment?.paylaterSchedule)&&l.payment.paylaterSchedule.length>0){let w=c.reduce((S,M)=>S+(parseFloat(M.amount)||0),0);g=l.payment.paylaterSchedule.map(S=>{const M=parseFloat(S.totalMonthly)||0,D=w>=M;return D&&(w-=M),{...S,isPaid:D}})}const h={"payment.tempoBalance":d,"payment.installments":c,"payment.lastPaymentDate":m,"payment.tempoStatus":d<=0?"LUNAS":"DICICIL",updatedAt:m};if(g&&(h["payment.paylaterSchedule"]=g),d<=0&&(h["payment.paymentStatus"]="lunas",h["payment.isTempoPaid"]=!0,h.status="Selesai"),await s.update(h),!!(l.payment?.isPaylater||l.isPaylater||l.payment?.subMethod==="paylater")){const w=(l.customer?.wa||l.customer?.phone||e.customerPhone||"").replace(/\D/g,""),S=w.startsWith("0")?"62"+w.slice(1):w;if(S){const M=Qa(l.payment,i,d,a);if(M>0)try{const D=P.collection("freshmart").doc("cms_data").collection("customers").doc(S);if(await P.runTransaction(async A=>{const $=await A.get(D);if($.exists){const y=Math.max(0,parseFloat($.data().paylaterUsed)||0),I=Math.max(0,y-M);A.update(D,{paylaterUsed:I,updatedAt:m})}}),Array.isArray(n.customers)){const A=n.customers.find($=>$&&(String($.id)===S||String($.phone).replace(/\D/g,"")===w||String($.phone).replace(/\D/g,"")===S));A&&(A.paylaterUsed=Math.max(0,Math.max(0,parseFloat(A.paylaterUsed)||0)-M))}if(currentMember&&(currentMember.phone||currentMember.id)){const A=(currentMember.phone||currentMember.id).toString().replace(/\D/g,"");(A===w||A===S)&&(currentMember.paylaterUsed=Math.max(0,Math.max(0,parseFloat(currentMember.paylaterUsed)||0)-M))}}catch(D){console.warn("[Tempo] Gagal pulihkan limit PayLater:",D)}}}await P.collection("tempo_payment_confirmations").doc(t).update({status:"approved",approvedAt:m,approvedBy:auth.currentUser?.email||"Owner / Kasir"}),V=V.filter(w=>w.id!==t),C(),x(`Pembayaran ${f(a)} untuk nota #${r} disetujui! Saldo diperbarui & limit dipulihkan.`,"success"),V.length>0?ka():jt(),await Ot()}catch(s){C(),console.error("[Tempo] Gagal setujui pembayaran:",s),x("Gagal menyetujui pembayaran: "+s.message,"error")}},"Ya, Setujui")},Ws=async t=>{if(!(V||[]).find(r=>r.id===t))return x("Data konfirmasi tidak ditemukan.","warning");const a=prompt('Masukkan alasan penolakan bukti pembayaran (misal: "Dana belum masuk mutasi bank" / "Bukti transfer buram/tidak terbaca"):',"Dana belum masuk ke mutasi rekening toko");if(a!==null){L("Menolak konfirmasi pembayaran...");try{const r=Date.now();await P.collection("tempo_payment_confirmations").doc(t).update({status:"rejected",rejectReason:a.trim()||"Ditolak oleh admin toko",rejectedAt:r,rejectedBy:auth.currentUser?.email||"Owner / Kasir"}),V=V.filter(s=>s.id!==t),C(),x("Konfirmasi pembayaran telah ditolak.","info"),V.length>0?ka():jt(),await Ot()}catch(r){C(),console.error("[Tempo] Gagal tolak pembayaran:",r),x("Gagal menolak konfirmasi: "+r.message,"error")}}};window.approveTempoPaymentConfirmation=qs;window.rejectTempoPaymentConfirmation=Ws;window.submitTempoPenalty=async(t,e)=>{t.preventDefault();const a=k("tempo-penalty-rate")?.value;let r=parseFloat(a);if(isNaN(r)||r<0)return x("Persentase tidak valid!");L("Menyimpan Denda...");try{await P.collection("freshmart_orders").doc(e).update({"payment.tempoPenaltyRate":r});const s=O.find(o=>o.orderId===e);s&&s.payment&&(s.payment.tempoPenaltyRate=r),C(),window.closeTempoPenaltyModal(),x("Persentase denda berhasil diperbarui!"),window.rAdmPiutang()}catch(s){C(),x("Gagal mengubah denda: "+s.message)}};window.editTempoPenalty=t=>{window.openTempoPenaltyModal(t)};window.stopTempoPenalty=(t,e,a)=>{let r="Konfirmasi Denda",s=a?"Lanjutkan perhitungan denda otomatis berjalan?":"Hentikan denda berjalan sekarang? (Nominal denda akan dibekukan di "+f(e)+")";pe(r,s,async()=>{L("Menyimpan...");try{await P.collection("freshmart_orders").doc(t).update({"payment.tempoPenaltyStopped":!a,"payment.tempoFixedPenalty":a?null:e});const l=O.find(i=>i.orderId===t);l&&l.payment&&(l.payment.tempoPenaltyStopped=!a,l.payment.tempoFixedPenalty=a?null:e),x(a?"Denda dilanjutkan!":"Denda berhasil dibekukan!"),window.rAdmPiutang()}catch(l){x("Gagal mengubah status denda: "+l.message)}C()},a?"Lanjutkan":"Bekukan")};window.previewTempoReceipt=async t=>{L("Memuat data struk...");try{const e=await P.collection("freshmart_orders").doc(t).get();if(!e.exists)return C(),x("Pesanan tidak ditemukan");const a=e.data();if(C(),typeof window.printTempoReceiptDirect=="function"){window.lastPrintedOrder={...a,orderId:a.orderId||t},window.printTempoReceiptDirect(a.orderId||t);return}const r=a.dateString?new Date(a.dateString).toLocaleString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}):"",s=n.store?.name||"Toko Putri",o=n.store?.wa||"",l=(g,h,v=32)=>{const w=v-g.length-h.length;return g+(w>0?" ".repeat(w):" ")+h};let i=`<div class="text-center font-bold" style="font-size:13px;margin-bottom:2px;">${p(s)}</div>`;o&&(i+=`<div class="text-center" style="margin-bottom:4px;">WA: ${p(o)}</div>`),i+=`<div class="text-center font-bold uppercase my-2" style="font-size:14px;border-bottom:1px solid #000;border-top:1px solid #000;padding:2px 0;">NOTA TEMPO${a.payment?.paymentStatus==="lunas"?" - LUNAS":""}</div>`,i+=`<div style="white-space:pre;">Order: #${a.orderId}</div><div style="white-space:pre;">Tgl  : ${r}</div><div style="white-space:pre;">Plg  : ${p(a.customer?.name||"Guest").substring(0,20)}</div>`,a.payment?.tempoDueDate&&(i+=`<div style="white-space:pre;">J.Tmp: ${new Date(a.payment.tempoDueDate).toLocaleDateString("id-ID")}</div>`),i+='<div class="border-b border-dashed border-black my-2"></div>';let d=0;if((a.items||[]).forEach(g=>{let h=g.variantName?` (${p(g.variantName)}${g.colorCode?" "+p(g.colorCode):""})`:"";const v=(p(g.name)+h+(g.poTime?" [PO]":"")).substring(0,32),w=g.effectivePrice!==void 0?g.effectivePrice:g.price||0,S=`${parseFloat(g.qty)} ${p(g.unit||"pcs")} x ${w.toLocaleString("id-ID")}`,M=(parseFloat(g.qty)*w).toLocaleString("id-ID");i+=`<div style="white-space:pre-wrap;font-weight:bold;word-break:break-all;">${v}</div><div style="white-space:pre;font-size:11px;">${l(S,M)}</div>`,g.poTime&&(i+=`<div style="white-space:pre;font-size:10px;font-style:italic;color:#4b5563;">* Estimasi PO: ${p(g.poTime)}</div>`),d+=parseFloat(g.qty)*w}),i+='<div class="border-b border-dashed border-black my-2"></div>',i+=`<div style="white-space:pre;font-weight:bold;">${l("Subtotal",d.toLocaleString("id-ID"))}</div>`,a.payment?.grandTotal&&a.payment.grandTotal!==d){let g=a.payment.grandTotal-d;g>0?i+=`<div style="white-space:pre;">${l("Ongkir/Biaya",g.toLocaleString("id-ID"))}</div>`:i+=`<div style="white-space:pre;">${l("Diskon",Math.abs(g).toLocaleString("id-ID"))}</div>`}i+=`<div style="white-space:pre;font-weight:bold;margin-top:4px;">${l("TOTAL KREDIT",(a.payment?.grandTotal||d).toLocaleString("id-ID"))}</div>`,i+='<div class="border-b border-black my-2" style="border-width:1px;"></div>';let c=0;a.payment?.installments&&a.payment.installments.length>0&&(i+='<div style="white-space:pre;font-weight:bold;margin-bottom:2px;">HISTORI CICILAN:</div>',a.payment.installments.forEach((g,h)=>{let v=new Date(g.date).toLocaleDateString("id-ID",{day:"2-digit",month:"short"}),w=g.amount.toLocaleString("id-ID");i+=`<div style="white-space:pre;">${l(`${h+1}. ${v}`,w)}</div>`,c+=g.amount}),i+=`<div style="white-space:pre;font-weight:bold;margin-top:2px;">${l("TOTAL DIBAYAR",c.toLocaleString("id-ID"))}</div>`,i+='<div class="border-b border-dashed border-black my-2"></div>');const b=ee(a);i+=`<div style="white-space:pre;font-weight:bold;">${l("SISA POKOK",b.sisa.toLocaleString("id-ID"))}</div>`,b.latePenalty>0&&(i+=`<div style="white-space:pre;">${l("DENDA",Math.round(b.latePenalty).toLocaleString("id-ID"))}</div>`),i+='<div class="border-b border-black my-2" style="border-width:1px;"></div>',i+=`<div style="white-space:pre;font-weight:black;">${l("SISA TAGIHAN",Math.round(b.totalAkhir).toLocaleString("id-ID"))}</div>`,(a.items||[]).some(g=>g.poTime&&g.poTime!=="")&&(i+='<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre-wrap;font-size:9px;text-align:center;line-height:1.2;font-style:italic;color:#4b5563;margin-bottom:4px;">* Catatan: Untuk pesanan gabungan, produk PO akan dikirimkan menyusul tanpa dikenakan biaya tambahan.</div>'),i+='<div class="border-b border-dashed border-black my-2"></div><div class="text-center my-2" style="font-size:10px;">Terima kasih atas kepercayaannya.</div><div class="border-b border-dashed border-black my-2"></div><div style="height:20px;"></div>',j("receipt-paper-content",i);const u=k("receipt-preview-modal");u&&u.classList.contains("hidden")&&nt("receipt"),Ue("receipt-preview-modal"),setTimeout(()=>{k("receipt-preview-modal")&&k("receipt-preview-modal").classList.remove("opacity-0"),k("receipt-preview-modal-box")&&k("receipt-preview-modal-box").classList.remove("scale-95")},10)}catch(e){C(),x("Gagal memuat struk: "+e.message)}};window.markTempoPaid=async t=>{pe("Konfirmasi Pelunasan","Tandai seluruh sisa tagihan tempo pesanan ini sebagai LUNAS?",async()=>{try{if(await P.collection("freshmart_orders").doc(t).update({"payment.paymentStatus":"lunas","payment.tempoBalance":0,status:"Selesai"}),x("Tagihan tempo berhasil dilunasi!"),Array.isArray(B)){let e=B.findIndex(a=>a.orderId===t);e!==-1&&(B[e].payment.paymentStatus="lunas",B[e].payment.tempoBalance=0,B[e].status="Selesai")}window.rAdmPiutang()}catch(e){x("Gagal melunasi tagihan: "+e.message)}},"Ya, Lunasi")};window.sendSmartTempoWA=t=>{const e=O.find(w=>w.orderId===t);if(!e)return x("Data pesanan tidak ditemukan!");const a=e.customer?.wa||"",r=rt(a);if(!r)return x("Nomor WhatsApp pelanggan belum valid!");const s=ee(e),o=n.store?.name||"Toko Putri",l=e.customer?.name||"Pelanggan",i=e.dateString?new Date(e.dateString).toLocaleDateString("id-ID",{day:"2-digit",month:"long",year:"numeric"}):"-",d=s.dueDate?new Date(s.dueDate).toLocaleDateString("id-ID",{day:"2-digit",month:"long",year:"numeric"}):"-";let c="";n.banks&&n.banks.length>0?c=n.banks.map(w=>`• *Bank ${w.bankName}*: ${w.bankAccount} (a.n ${w.bankOwner})`).join(`
`):c="Silakan hubungi admin/kasir untuk konfirmasi nomor rekening transfer.";const b=!!(e.payment?.isPaylater||e.isPaylater||e.payment?.subMethod==="paylater"),m=(parseFloat(e.payment?.paylaterAdminFee)||0)+(parseFloat(e.payment?.paylaterServiceFee)||0),u=parseFloat(e.payment?.paylaterUsed)||Math.max(0,s.sisa-m),g=parseFloat(e.payment?.paylaterMonthlyInstallment)||0,h=parseInt(e.payment?.paylaterMonths)||(e.payment?.paylaterTenor==="2m"?2:e.payment?.paylaterTenor==="3m"?3:1);let v="";if(s.isLate)v=`*PEMBERITAHUAN JATUH TEMPO ${b?"PUTRI PAYLATER":"TEMPO"} - ${o.toUpperCase()}*

Yth. Bpk/Ibu *${l}*,
Kami menginformasikan bahwa tagihan pembelian ${b?"Putri PayLater":"Tempo"} Anda telah *MELEWATI BATAS JATUH TEMPO* (${s.daysLate} hari keterlambatan).

📋 *Rincian Tagihan:*
• No. Pesanan: #${e.orderId}
`+(b?`• Layanan: Putri PayLater (${h>1?h+" Bulan":"30 Hari"})
`:"")+`• Tgl. Transaksi: ${i}
• Tgl. Jatuh Tempo: ${d}
`+(b&&m>0?`• Pokok Belanja: ${f(u)}
• Biaya PayLater: +${f(m)}
`:`• Sisa Pokok: ${f(s.sisa)}
`)+(b&&g>0&&h>1?`• Angsuran per Bulan (${h}x): ${f(g)}/bln
`:"")+(s.latePenalty>0?`• Denda (${s.rate}%/hari): ${f(s.latePenalty)}
`:"")+`• *TOTAL HARUS DIBAYAR: ${f(s.totalAkhir)}*

💳 *Pembayaran dapat ditransfer ke rekening resmi kami:*
${c}

Mohon kesediaannya untuk segera melakukan pelunasan dan mengirimkan bukti transfer ke WhatsApp ini.`+(b?" Limit belanja PayLater Anda akan otomatis pulih kembali setelah tagihan terlunasi.":"")+" Terima kasih banyak atas kerjasamanya. 🙏";else if(s.isDueSoon){let w=s.daysLeft<=0?"hari ini":`${s.daysLeft} hari lagi`;v=`*PENGINGAT JATUH TEMPO ${b?"PUTRI PAYLATER":"TEMPO"} - ${o.toUpperCase()}*

Halo Bpk/Ibu *${l}*,
Semoga sehat dan sukses selalu. Kami dari *${o}* menginfokan bahwa tagihan pembelian ${b?"Putri PayLater":"Tempo"} Anda akan jatuh tempo *${w}* (${d}).

📋 *Rincian Tagihan:*
• No. Pesanan: #${e.orderId}
`+(b?`• Layanan: Putri PayLater (${h>1?h+" Bulan":"30 Hari"})
`:"")+`• Tgl. Transaksi: ${i}
• Tgl. Jatuh Tempo: ${d}
`+(b&&m>0?`• Pokok Belanja: ${f(u)}
• Biaya PayLater: +${f(m)}
`:`• Sisa Pokok: ${f(s.sisa)}
`)+(b&&g>0&&h>1?`• Angsuran per Bulan (${h}x): ${f(g)}/bln
`:"")+`• *Total Tagihan: ${f(s.totalAkhir)}*

💳 *Pembayaran dapat ditransfer ke rekening resmi kami:*
${c}

Apabila sudah melakukan pembayaran, mohon abaikan pesan ini atau kirimkan bukti transfer ke nomor ini.`+(b?" Limit PayLater Anda akan langsung terisi kembali setelah konfirmasi.":"")+` Terima kasih atas kepercayaannya berbelanja di ${o}. 🙏`}else v=`*INFORMASI TAGIHAN ${b?"PUTRI PAYLATER":"TEMPO"} - ${o.toUpperCase()}*

Halo Bpk/Ibu *${l}*,
Berikut informasi rincian tagihan pembelian ${b?"Putri PayLater":"Tempo"} Anda di *${o}*:

📋 *Rincian Tagihan:*
• No. Pesanan: #${e.orderId}
`+(b?`• Layanan: Putri PayLater (${h>1?h+" Bulan":"30 Hari"})
`:"")+`• Tgl. Transaksi: ${i}
• Tgl. Jatuh Tempo: ${d} (tersisa ${s.daysLeft} hari)
`+(b&&m>0?`• Pokok Belanja: ${f(u)}
• Biaya PayLater: +${f(m)}
`:`• Sisa Pokok: ${f(s.sisa)}
`)+(b&&g>0&&h>1?`• Angsuran per Bulan (${h}x): ${f(g)}/bln
`:"")+`• *TOTAL TAGIHAN: ${f(s.totalAkhir)}*

💳 *Rekening Pembayaran Resmi:*
${c}

`+(b?`✨ Bayar tagihan tepat waktu untuk menjaga skor & limit kredit PayLater Anda tetap prima.

`:"")+`Terima kasih telah menjadi pelanggan setia ${o}. 🙏`;typeof window.openWhatsApp=="function"?window.openWhatsApp(r,v):Wa(r,v)};window.sendConsolidatedTempoWA=t=>{const e=String(t||"").trim();if(!e)return x("Identitas pelanggan tidak valid!");const a=O.filter(g=>{const h=String(g.customer?.phone||g.customer?.wa||"").replace(/\D/g,""),v=String(g.customer?.name||"").toLowerCase().trim(),w=e.replace(/\D/g,"");return!!(w.length>=8&&h.includes(w)||v&&e.toLowerCase().includes(v))});if(a.length===0)return x("Tidak ada nota piutang aktif untuk pelanggan ini.");const r=a[0].customer||{},s=r.wa||r.phone||"",o=rt(s);if(!o)return x("Nomor WhatsApp pelanggan belum valid!");const l=n.store?.name||"Toko Putri",i=r.name||"Pelanggan";let d="";n.banks&&n.banks.length>0?d=n.banks.map(g=>`• *Bank ${g.bankName}*: ${g.bankAccount} (a.n ${g.bankOwner})`).join(`
`):d="Silakan hubungi admin/kasir untuk konfirmasi nomor rekening transfer.";let c=0,b=0,m=a.map((g,h)=>{const v=ee(g);c+=v.totalAkhir,b+=v.latePenalty,v.isLate;const w=v.dueDate?new Date(v.dueDate).toLocaleDateString("id-ID",{day:"2-digit",month:"short",year:"numeric"}):"-";let S=v.isLate?`⚠️ TERLAMBAT ${v.daysLate} HARI`:v.isDueSoon?`⏳ H-${v.daysLeft}`:"✅ Berjalan",M=`*${h+1}. Nota #${g.orderId}* (${S})
   • Jatuh Tempo: ${w}
   • Sisa Pokok: ${f(v.sisa)}
`;return v.latePenalty>0&&(M+=`   • Denda: ${f(v.latePenalty)}
`),M+=`   • *Subtotal Wajib Bayar: ${f(v.totalAkhir)}*`,M}).join(`

`),u=`*REKAPITULASI KARTU PIUTANG - ${l.toUpperCase()}*

Yth. Bpk/Ibu *${i}*,
Berikut rincian seluruh tagihan tempo Anda yang masih aktif (${a.length} Nota) di *${l}*:

${m}

══════════════════════
💰 *TOTAL KESELURUHAN PIUTANG: ${f(c)}*
`+(b>0?`(Termasuk total denda: ${f(b)})
`:"")+`══════════════════════

💳 *Pembayaran dapat ditransfer ke rekening resmi kami:*
${d}

Mohon kesediaannya untuk melakukan pembayaran dan mengirimkan bukti transfer ke WhatsApp ini. Terima kasih banyak atas kepercayaan dan kerjasamanya. 🙏`;typeof window.openWhatsApp=="function"?window.openWhatsApp(o,u):Wa(o,u)};window.switchTempoMainTab=t=>{se=t,ha()};window.setTempoFilter=t=>{xe=t,ha()};window.setInstallmentPeriod=t=>{te=t,Et()};window.setInstallmentMethod=t=>{ne=t,Et()};window.onTempoSearch=t=>{ge=t||"",se==="orders"?zs():Et()};const zs=()=>{const t=k("tempo-cards-container");if(!t)return;let e=O.filter(a=>{const r=ee(a);if(xe==="late"&&!r.isLate||xe==="due_soon"&&(!r.isDueSoon||r.isLate)||xe==="active"&&(r.isLate||r.isDueSoon))return!1;if(ge.trim()){const s=ge.trim().toLowerCase(),o=(a.customer?.name||"").toLowerCase(),l=(a.customer?.wa||"").toLowerCase(),i=(a.orderId||"").toLowerCase();if(!o.includes(s)&&!l.includes(s)&&!i.includes(s))return!1}return!0});if(e.length===0){t.innerHTML=`
            <div class="col-span-full bg-white dark:bg-slate-800 p-8 text-center rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <div class="w-16 h-16 bg-slate-100 dark:bg-slate-700/50 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-3">
                    <i class="fa-solid fa-filter-circle-xmark text-2xl"></i>
                </div>
                <h4 class="font-bold text-slate-700 dark:text-slate-200 text-sm uppercase tracking-wider">Tidak Ada Data</h4>
                <p class="text-slate-500 dark:text-slate-400 mt-1 text-xs font-medium">Tidak ada tagihan yang cocok dengan filter atau kata kunci pencarian.</p>
            </div>
        `;return}t.innerHTML=e.map(a=>to(a)).join("")},to=t=>{const e=ee(t),a=rt(t.customer?.wa||""),r=fa(t.customer?.name||"Pelanggan"),s=e.dueDate?st(e.dueDate):"-",o=p(t.customer?.phone||t.customer?.wa||t.customer?.name||""),l=!!(t.payment?.isPaylater||t.isPaylater||t.payment?.subMethod==="paylater"),i=(parseFloat(t.payment?.paylaterAdminFee)||0)+(parseFloat(t.payment?.paylaterServiceFee)||0),d=parseFloat(t.payment?.paylaterUsed)||Math.max(0,e.sisa-i),c=parseFloat(t.payment?.paylaterMonthlyInstallment)||0,b=parseInt(t.payment?.paylaterMonths)||(t.payment?.paylaterTenor==="2m"?2:t.payment?.paylaterTenor==="3m"?3:1);let m="",u="border-slate-200 dark:border-slate-700/80";return e.isLate?(u="border-rose-400 dark:border-rose-600 shadow-[0_0_15px_rgba(225,29,72,0.12)]",m=`<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-rose-50 text-rose-600 dark:bg-rose-950/50 dark:text-rose-400 border border-rose-200 dark:border-rose-800 shadow-2xs whitespace-nowrap"><i class="fa-solid fa-triangle-exclamation text-[8px]"></i> Terlambat ${e.daysLate} Hari</span>`):e.isDueSoon?(u="border-amber-400 dark:border-amber-600 shadow-[0_0_15px_rgba(245,158,11,0.12)]",m=`<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300 border border-amber-200 dark:border-amber-800 shadow-2xs whitespace-nowrap"><i class="fa-solid fa-clock text-[8px]"></i> H-${e.daysLeft<=0?"0 (Hari Ini)":e.daysLeft}</span>`):m=`<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-[var(--color-primary)] border shadow-2xs whitespace-nowrap" style="background: rgba(var(--color-primary-rgb), 0.08); border-color: rgba(var(--color-primary-rgb), 0.25);"><i class="fa-regular fa-clock text-[9px]"></i> Sisa ${e.daysLeft} Hari</span>`,`
    <div class="bg-white dark:bg-slate-800 p-4 sm:p-5 rounded-3xl border ${u} relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 shadow-sm flex flex-col justify-between cursor-pointer" onclick="window.openTempoDetailModal('${t.orderId}')">
        <div>
            <!-- BARIS 1: TOP BAR KARTU (NOTA & STATUS SISA HARI / JATUH TEMPO) -->
            <div class="flex items-center justify-between gap-2 mb-3.5 pb-2.5 border-b border-slate-100 dark:border-slate-700/60">
                <span class="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                    <i class="fa-solid fa-receipt text-slate-400 text-[10px]"></i> #${t.orderId}
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
                    <h3 class="font-bold text-slate-800 dark:text-slate-100 uppercase text-sm truncate">${p(t.customer?.name||"Anonim")}</h3>
                    <div class="flex items-center gap-2 mt-1 flex-wrap" onclick="event.stopPropagation()">
                        <p class="text-[11px] font-bold text-slate-500 flex items-center gap-1">
                            <i class="fa-brands fa-whatsapp text-emerald-500"></i>
                            <a href="javascript:void(0)" onclick="window.sendSmartTempoWA('${t.orderId}')" class="hover:underline text-slate-600 dark:text-slate-300 font-mono">+${p(a||"-")}</a>
                        </p>
                        <span class="text-[9px] font-bold px-2 py-0.5 rounded-xl uppercase tracking-widest border ${t.customerType==="Member"?"text-amber-600 bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800":"text-slate-500 bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700"}">
                            ${t.customerType==="Member"?'<i class="fa-solid fa-star text-amber-400 mr-1"></i>Member':'<i class="fa-solid fa-user mr-1"></i>Umum'}
                        </span>
                        ${t.payment?.isPaylater||t.isPaylater||t.payment?.subMethod==="paylater"?`
                            <span class="text-[9px] font-black px-2 py-0.5 rounded-xl uppercase tracking-widest border border-emerald-300 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 flex items-center gap-1">
                                <i class="fa-solid fa-bolt text-emerald-500"></i>PayLater (${t.payment?.paylaterTenor==="2m"?"2 Bulan":t.payment?.paylaterTenor==="3m"?"3 Bulan":"30 Hari"})
                            </span>
                        `:""}
                    </div>
                </div>
            </div>
            
            <!-- RINGKASAN JATUH TEMPO, POKOK & BIAYA -->
            <div class="space-y-1.5 mb-3 bg-slate-50 dark:bg-slate-900/50 p-3 rounded-2xl border border-slate-100 dark:border-slate-700/50">
                <div class="flex justify-between items-center text-xs">
                    <span class="font-bold text-slate-500">Jatuh Tempo</span>
                    <span class="font-bold font-mono ${e.isLate?"text-rose-600":e.isDueSoon?"text-amber-600":"text-slate-700 dark:text-slate-300"}">${s}</span>
                </div>
                ${l&&i>0?`
                <div class="flex justify-between items-center text-xs">
                    <span class="font-bold text-slate-500">Pokok Belanja</span>
                    <span class="font-bold text-slate-700 dark:text-slate-300 font-mono">${f(d)}</span>
                </div>
                <div class="flex justify-between items-center text-xs">
                    <span class="font-bold text-slate-500">Biaya PayLater (${b>1?b+" Bulan":"30 Hari"})</span>
                    <span class="font-bold text-emerald-600 dark:text-emerald-400 font-mono">+${f(i)}</span>
                </div>
                ${c>0&&b>1?`
                <div class="flex justify-between items-center text-xs pt-1 border-t border-slate-200/50 dark:border-slate-700/50">
                    <span class="font-bold text-slate-500">Angsuran / Bulan (${b}x)</span>
                    <span class="font-bold text-[var(--color-primary)] font-mono">${f(c)}/bln</span>
                </div>`:""}
                `:`
                <div class="flex justify-between items-center text-xs">
                    <span class="font-bold text-slate-500">Sisa Pokok</span>
                    <span class="font-bold text-slate-700 dark:text-slate-300 font-mono">${f(e.sisa)}</span>
                </div>
                `}
                ${e.isLate?`
                <div class="flex justify-between items-center text-xs ${e.isStopped?"text-slate-500":"text-rose-600"}">
                    <span class="font-bold">Denda (${e.rate}%/hari) ${e.isStopped?'<span class="text-[9px] bg-slate-200 dark:bg-slate-700 px-1 py-0.5 rounded ml-1">STOPPED</span>':""}</span>
                    <span class="font-bold font-mono">+${f(e.latePenalty)}</span>
                </div>`:""}
            </div>
            
            <!-- TOTAL SISA TAGIHAN HIGHLIGHT -->
            <div class="flex justify-between items-center ${e.isLate?"bg-rose-50 text-rose-600 dark:bg-rose-950/30 dark:text-rose-400 border-rose-100 dark:border-rose-900/40":"bg-slate-100 dark:bg-slate-700/60 text-slate-800 dark:text-white border-slate-200 dark:border-slate-700"} p-3 rounded-2xl border mb-3">
                <span class="text-[10px] font-black uppercase tracking-wider">Total Tagihan:</span>
                <span class="text-sm font-black font-mono tracking-tight">${f(e.totalAkhir)}</span>
            </div>
        </div>
        
        <!-- ACTION BAR TOUCH ERGONOMIS 2-BARIS LEGA -->
        <div class="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-700/60" onclick="event.stopPropagation()">
            <!-- Baris 1: Rincian, Nota A4, Struk, Tagih WA -->
            <div class="grid grid-cols-4 gap-1.5">
                <button type="button" onclick="window.openTempoDetailModal('${t.orderId}')" class="py-2 px-1 rounded-xl font-bold text-[11px] transition-all active:scale-95 border flex flex-col sm:flex-row items-center justify-center gap-1 cursor-pointer shadow-2xs text-center" style="background: rgba(var(--color-primary-rgb), 0.08); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25);" title="Buka Rincian Nota &amp; Histori">
                    <i class="fa-solid fa-eye text-xs"></i>
                    <span class="truncate">Rincian</span>
                </button>
                <button type="button" onclick="if(typeof window.openDocPreview==='function') window.openDocPreview('tempo_invoice', '${t.orderId}');" class="py-2 px-1 rounded-xl bg-blue-50 hover:bg-blue-100 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 flex flex-col sm:flex-row items-center justify-center gap-1 text-[11px] font-bold transition-all cursor-pointer shadow-2xs active:scale-95 text-center" title="Cetak Nota Resmi A4 / PDF / WA">
                    <i class="fa-solid fa-file-invoice text-xs"></i>
                    <span class="truncate">Nota A4</span>
                </button>
                <button type="button" onclick="if(typeof window.printTempoReceiptDirect==='function'){window.printTempoReceiptDirect('${t.orderId}');}else{window.previewTempoReceipt('${t.orderId}');}" class="py-2 px-1 bg-amber-500 hover:bg-amber-600 text-white rounded-xl flex flex-col sm:flex-row items-center justify-center gap-1 text-[11px] font-bold shadow-2xs transition-all active:scale-95 cursor-pointer text-center" title="Cetak Struk Thermal Nota Tempo">
                    <i class="fa-solid fa-print text-xs"></i>
                    <span class="truncate">Struk</span>
                </button>
                <button type="button" onclick="window.sendSmartTempoWA('${t.orderId}')" class="py-2 px-1 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl flex flex-col sm:flex-row items-center justify-center gap-1 text-[11px] font-bold transition-all cursor-pointer shadow-2xs active:scale-95 text-center" title="Kirim Tagihan Otomatis WhatsApp">
                    <i class="fa-brands fa-whatsapp text-xs"></i>
                    <span class="truncate">WA</span>
                </button>
            </div>

            <!-- Baris 2: Cicil, Lunas, & Kartu Pelanggan -->
            <div class="grid grid-cols-3 gap-1.5">
                <button type="button" onclick="window.openTempoPaymentModal('${t.orderId}')" class="bg-white dark:bg-slate-700 border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.08)] rounded-xl py-2 flex items-center justify-center gap-1 text-xs font-bold transition-all active:scale-95 shadow-2xs cursor-pointer">
                    <i class="fa-solid fa-money-bill-wave text-xs"></i> Cicil
                </button>
                <button type="button" onclick="window.markTempoPaid('${t.orderId}')" class="text-white rounded-xl py-2 flex items-center justify-center gap-1 text-xs font-bold shadow-sm transition-all active:scale-95 cursor-pointer" style="background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);">
                    <i class="fa-solid fa-check-double text-xs"></i> Lunas
                </button>
                <button type="button" onclick="if(typeof window.openDocPreview==='function') window.openDocPreview('tempo_customer_ledger', '${o}');" class="bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 rounded-xl py-2 flex items-center justify-center gap-1 text-xs font-bold transition-all active:scale-95 shadow-2xs cursor-pointer" title="Cetak Kartu Piutang Pelanggan">
                    <i class="fa-solid fa-address-book text-xs text-indigo-500"></i> Kartu
                </button>
            </div>
        </div>
    </div>`},ao=()=>{const t=new Map;O.forEach(a=>{const r=String(a.customer?.phone||a.customer?.wa||"").trim(),s=String(a.customer?.name||"Pelanggan Anonim").trim(),o=r||s;if(!t.has(o)){const b=(r||"").replace(/\D/g,""),m=(n.customers||[]).find(u=>u&&(String(u.id)===b||String(u.phone).replace(/\D/g,"")===b));t.set(o,{key:o,name:s,phone:r,wa:a.customer?.wa||r,customerType:a.customerType||(a.customer?.isMember?"Member":"Umum"),paylaterActive:m?m.paylaterActive===!0||m.paylaterActive==="true":!1,paylaterLimit:m&&parseFloat(m.paylaterLimit)||0,paylaterUsed:m&&parseFloat(m.paylaterUsed)||0,orders:[],totalAwal:0,totalPaid:0,totalSisaPokok:0,totalDenda:0,totalWajibBayar:0,hasLate:!1,hasDueSoon:!1})}const l=t.get(o),i=ee(a),d=a.payment?.grandTotal&&a.payment.grandTotal>0?a.payment.grandTotal:parseFloat(a.total)||i.sisa,c=(a.payment?.installments||[]).reduce((b,m)=>b+(parseFloat(m.amount)||0),0);l.orders.push(a),l.totalAwal+=d,l.totalPaid+=c,l.totalSisaPokok+=i.sisa,l.totalDenda+=i.latePenalty,l.totalWajibBayar+=i.totalAkhir,i.isLate&&(l.hasLate=!0),i.isDueSoon&&(l.hasDueSoon=!0)});let e=Array.from(t.values());if(ge.trim()){const a=ge.trim().toLowerCase();e=e.filter(r=>r.name.toLowerCase().includes(a)||r.phone.toLowerCase().includes(a)||r.orders.some(s=>(s.orderId||"").toLowerCase().includes(a)))}return e.sort((a,r)=>a.hasLate&&!r.hasLate?-1:!a.hasLate&&r.hasLate?1:r.totalWajibBayar-a.totalWajibBayar),e.length===0?`
            <div class="bg-white dark:bg-slate-800 p-10 text-center rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <div class="w-16 h-16 bg-slate-100 dark:bg-slate-700/50 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-3">
                    <i class="fa-solid fa-users-slash text-2xl"></i>
                </div>
                <h4 class="font-bold text-slate-700 dark:text-slate-200 text-sm uppercase tracking-wider">Tidak Ada Data Pelanggan</h4>
                <p class="text-slate-500 dark:text-slate-400 mt-1 text-xs font-medium">Tidak ada pelanggan berpiutang yang cocok dengan kata kunci pencarian.</p>
            </div>
        `:`
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            ${e.map(a=>{const r=fa(a.name),s=rt(a.wa||a.phone||"");let o="",l="border-slate-200 dark:border-slate-700/80";return a.hasLate?(l="border-rose-400 dark:border-rose-600 shadow-[0_0_15px_rgba(225,29,72,0.1)]",o='<span class="px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400 border border-rose-200 dark:border-rose-800 flex items-center gap-1"><i class="fa-solid fa-triangle-exclamation"></i> Ada Terlambat</span>'):a.hasDueSoon?(l="border-amber-400 dark:border-amber-600 shadow-[0_0_15px_rgba(245,158,11,0.1)]",o='<span class="px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400 border border-amber-200 dark:border-amber-800 flex items-center gap-1"><i class="fa-solid fa-clock"></i> Jatuh Tempo Dekat</span>'):o='<span class="px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 flex items-center gap-1"><i class="fa-solid fa-circle-check"></i> Berjalan Lancar</span>',`
                <div class="bg-white dark:bg-slate-800 p-4 sm:p-5 rounded-3xl border ${l} shadow-sm flex flex-col justify-between space-y-4">
                    <div>
                        <!-- Header Pelanggan -->
                        <div class="flex items-start justify-between gap-3">
                            <div class="flex items-center gap-3 min-w-0">
                                <div class="w-11 h-11 rounded-2xl flex items-center justify-center text-sm font-black shrink-0 aspect-square shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);">
                                    ${r}
                                </div>
                                <div class="min-w-0">
                                    <h3 class="font-bold text-slate-800 dark:text-slate-100 text-sm truncate uppercase">${p(a.name)}</h3>
                                    <div class="flex items-center gap-2 mt-0.5 flex-wrap">
                                        <p class="text-[11px] font-bold text-slate-500 font-mono flex items-center gap-1">
                                            <i class="fa-brands fa-whatsapp text-emerald-500"></i> +${p(s||"-")}
                                        </p>
                                        <span class="text-[9px] font-bold px-2 py-0.2 rounded-lg uppercase tracking-wider border ${a.customerType==="Member"?"text-amber-600 bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800":"text-slate-500 bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700"}">
                                            ${a.customerType}
                                        </span>
                                        ${a.paylaterActive?`
                                            <span class="text-[9px] font-black px-2 py-0.2 rounded-lg uppercase tracking-wider bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 flex items-center gap-1">
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
                            <span class="text-[10px] text-slate-400 font-bold">Total Sisa Pokok: <b class="font-mono text-slate-700 dark:text-slate-200">${f(a.totalSisaPokok)}</b></span>
                        </div>

                        <!-- Ringkasan Saldo Akumulasi -->
                        <div class="mt-3 p-3.5 rounded-2xl ${a.hasLate?"bg-rose-50/70 dark:bg-rose-950/30 border border-rose-100 dark:border-rose-900/50":"bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700/60"}">
                            <div class="flex items-center justify-between text-xs">
                                <span class="font-bold text-slate-500">Akumulasi Tagihan:</span>
                                <span class="font-black text-sm font-mono ${a.hasLate?"text-rose-600 dark:text-rose-400":"text-slate-900 dark:text-white"}">${f(a.totalWajibBayar)}</span>
                            </div>
                            ${a.totalDenda>0?`
                            <div class="flex items-center justify-between text-[11px] text-rose-600 dark:text-rose-400 font-medium mt-1 pt-1 border-t border-rose-200/60 dark:border-rose-900/40">
                                <span>Termasuk Denda Berjalan:</span>
                                <span class="font-bold font-mono">+${f(a.totalDenda)}</span>
                            </div>`:""}
                        </div>

                        <!-- Mini Daftar Nota -->
                        <div class="mt-3 space-y-1.5">
                            <span class="text-[10px] font-black uppercase tracking-wider text-slate-400 block">Rincian Nota Aktif:</span>
                            <div class="space-y-1 max-h-28 overflow-y-auto custom-scrollbar">
                                ${a.orders.map(i=>{const d=ee(i),c=d.dueDate?st(d.dueDate):"-";return`
                                        <div onclick="window.openTempoDetailModal('${i.orderId}')" class="p-2 rounded-xl bg-white dark:bg-slate-700/50 border border-slate-100 dark:border-slate-700 flex items-center justify-between text-[11px] hover:border-[var(--color-primary)] transition-all cursor-pointer">
                                            <div class="flex items-center gap-1.5">
                                                <i class="fa-solid fa-file-invoice text-slate-400 text-[10px]"></i>
                                                <span class="font-bold font-mono text-slate-700 dark:text-slate-200">#${p(i.orderId)}</span>
                                                <span class="text-[9px] text-slate-400 font-medium font-mono">(${c})</span>
                                            </div>
                                            <span class="font-bold font-mono ${d.isLate?"text-rose-600":"text-slate-800 dark:text-slate-100"}">${f(d.totalAkhir)}</span>
                                        </div>
                                    `}).join("")}
                            </div>
                        </div>
                    </div>

                    <!-- Tombol Aksi Tab Pelanggan -->
                    <div class="pt-2 border-t border-slate-100 dark:border-slate-700/60 grid grid-cols-2 gap-2">
                        <button type="button" onclick="if(typeof window.openDocPreview==='function') window.openDocPreview('tempo_customer_ledger', '${p(a.phone||a.name)}');" class="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-100 font-bold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer shadow-2xs" title="Cetak Lembar Kartu Piutang Resmi A4 / PDF / WA">
                            <i class="fa-solid fa-file-invoice text-indigo-500"></i>
                            <span>Cetak Kartu A4</span>
                        </button>
                        <button type="button" onclick="window.sendConsolidatedTempoWA('${p(a.phone||a.name)}')" class="py-2.5 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer shadow-2xs" title="Kirim Tagihan WhatsApp Seluruh Nota">
                            <i class="fa-brands fa-whatsapp text-sm"></i>
                            <span>Tagih Semua WA</span>
                        </button>
                    </div>
                </div>
                `}).join("")}
        </div>
    `},so=()=>{let t=[];O.forEach(i=>{(i.payment?.installments||[]).forEach((c,b)=>{t.push({...c,installmentIndex:b+1,orderId:i.orderId,customerName:i.customer?.name||"Pelanggan",customerPhone:i.customer?.phone||i.customer?.wa||"",customerType:i.customerType||(i.customer?.isMember?"Member":"Umum"),orderDate:i.dateString})})});const e=new Date,a=new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime(),r=Date.now()-7*24*60*60*1e3,s=Date.now()-30*24*60*60*1e3;let o=t.filter(i=>{const d=new Date(i.date||0).getTime();if(te==="today"&&d<a||te==="week"&&d<r||te==="month"&&d<s)return!1;const c=(i.method||"cash").toLowerCase();if(ne!=="all"&&c!==ne)return!1;if(ge.trim()){const b=ge.trim().toLowerCase(),m=i.customerName.toLowerCase(),u=i.customerPhone.toLowerCase(),g=i.orderId.toLowerCase(),h=(i.notes||"").toLowerCase();if(!m.includes(b)&&!u.includes(b)&&!g.includes(b)&&!h.includes(b))return!1}return!0});o.sort((i,d)=>new Date(d.date||0)-new Date(i.date||0));const l=o.reduce((i,d)=>i+(parseFloat(d.amount)||0),0);return`
        <div class="space-y-4">
            <!-- Filter Bar Histori Cicilan (Periode & Metode) -->
            <div class="bg-white dark:bg-slate-800 p-4 rounded-3xl border border-slate-200/90 dark:border-slate-700 shadow-sm space-y-3">
                <div class="flex flex-wrap items-center justify-between gap-3">
                    <!-- Filter Periode -->
                    <div class="flex items-center gap-1.5 overflow-x-auto pb-1 hide-scrollbar text-xs font-bold uppercase tracking-wider">
                        <button onclick="window.setInstallmentPeriod('all')" class="px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${te==="all"?"text-white border-transparent":"bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700"}" style="${te==="all"?"background: var(--color-primary);":""}">
                            Semua Waktu
                        </button>
                        <button onclick="window.setInstallmentPeriod('today')" class="px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${te==="today"?"text-white border-transparent":"bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700"}" style="${te==="today"?"background: var(--color-primary);":""}">
                            Hari Ini
                        </button>
                        <button onclick="window.setInstallmentPeriod('week')" class="px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${te==="week"?"text-white border-transparent":"bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700"}" style="${te==="week"?"background: var(--color-primary);":""}">
                            7 Hari Terakhir
                        </button>
                        <button onclick="window.setInstallmentPeriod('month')" class="px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${te==="month"?"text-white border-transparent":"bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700"}" style="${te==="month"?"background: var(--color-primary);":""}">
                            Bulan Ini
                        </button>
                    </div>

                    <!-- Filter Metode Bayar -->
                    <div class="flex items-center gap-1.5 overflow-x-auto pb-1 hide-scrollbar text-xs font-bold uppercase tracking-wider">
                        <button onclick="window.setInstallmentMethod('all')" class="px-2.5 py-1.5 rounded-xl border text-[10px] transition-all cursor-pointer ${ne==="all"?"bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-transparent":"bg-slate-50 dark:bg-slate-900 text-slate-500 border-slate-200 dark:border-slate-700"}">
                            Semua Metode
                        </button>
                        <button onclick="window.setInstallmentMethod('cash')" class="px-2.5 py-1.5 rounded-xl border text-[10px] transition-all cursor-pointer inline-flex items-center gap-1 ${ne==="cash"?"bg-emerald-600 text-white border-transparent":"bg-slate-50 dark:bg-slate-900 text-slate-500 border-slate-200 dark:border-slate-700"}">
                            <i class="fa-solid fa-money-bill-wave ${ne==="cash"?"text-white":"text-emerald-500"}"></i> Tunai
                        </button>
                        <button onclick="window.setInstallmentMethod('transfer')" class="px-2.5 py-1.5 rounded-xl border text-[10px] transition-all cursor-pointer inline-flex items-center gap-1 ${ne==="transfer"?"bg-blue-600 text-white border-transparent":"bg-slate-50 dark:bg-slate-900 text-slate-500 border-slate-200 dark:border-slate-700"}">
                            <i class="fa-solid fa-building-columns ${ne==="transfer"?"text-white":"text-blue-500"}"></i> Transfer
                        </button>
                        <button onclick="window.setInstallmentMethod('qris')" class="px-2.5 py-1.5 rounded-xl border text-[10px] transition-all cursor-pointer inline-flex items-center gap-1 ${ne==="qris"?"bg-purple-600 text-white border-transparent":"bg-slate-50 dark:bg-slate-900 text-slate-500 border-slate-200 dark:border-slate-700"}">
                            <i class="fa-solid fa-qrcode ${ne==="qris"?"text-white":"text-purple-500"}"></i> QRIS
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
                        <span class="text-base font-black font-mono text-emerald-600 dark:text-emerald-400">${f(l)}</span>
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
                    ${o.map(i=>{const d=vt(i.date),c=(i.method||"cash").toUpperCase();return`
                        <div class="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200/90 dark:border-slate-700 shadow-2xs space-y-2">
                            <div class="flex items-start justify-between gap-2">
                                <div>
                                    <h4 class="font-bold text-xs text-slate-800 dark:text-slate-100">${p(i.customerName)}</h4>
                                    <p class="text-[10px] text-slate-400 font-mono mt-0.5">${d}</p>
                                </div>
                                <span class="text-sm font-black font-mono text-emerald-600 dark:text-emerald-400">+${f(i.amount)}</span>
                            </div>
                            <div class="flex items-center justify-between text-[11px] pt-2 border-t border-slate-100 dark:border-slate-700/60">
                                <span class="font-mono text-slate-500">Nota: <a href="javascript:void(0)" onclick="window.openTempoDetailModal('${i.orderId}')" class="font-bold text-[var(--color-primary)] hover:underline">#${p(i.orderId)}</a></span>
                                <span class="px-2 py-0.5 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                                    ${c}
                                </span>
                            </div>
                            ${i.notes?`<p class="text-[10px] italic text-slate-500 bg-slate-50 dark:bg-slate-900/40 p-2 rounded-xl border border-slate-100 dark:border-slate-800">${p(i.notes)}</p>`:""}
                            <div class="pt-2 flex items-center justify-end gap-1.5">
                                <button type="button" onclick="window.openTempoDetailModal('${i.orderId}')" class="px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-[10px] font-bold hover:bg-slate-50 transition-all cursor-pointer">
                                    <i class="fa-solid fa-eye mr-1"></i>Detail Nota
                                </button>
                                <button type="button" onclick="if(typeof window.printTempoReceiptDirect==='function'){window.printTempoReceiptDirect('${i.orderId}');}else{window.previewTempoReceipt('${i.orderId}');}" class="px-2.5 py-1.5 rounded-xl bg-amber-500 text-white text-[10px] font-bold hover:bg-amber-600 transition-all cursor-pointer">
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
                            ${o.map(i=>{const d=vt(i.date),c=(i.method||"cash").toUpperCase();return`
                                <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-700/30 transition-colors">
                                    <td class="py-3 px-4 font-mono text-slate-500 whitespace-nowrap">${d}</td>
                                    <td class="py-3 px-3">
                                        <span class="font-bold text-slate-800 dark:text-slate-100 block">${p(i.customerName)}</span>
                                        <span class="text-[10px] font-mono text-slate-400">${p(i.customerPhone||"-")}</span>
                                    </td>
                                    <td class="py-3 px-3 font-mono font-bold">
                                        <a href="javascript:void(0)" onclick="window.openTempoDetailModal('${i.orderId}')" class="text-[var(--color-primary)] hover:underline">#${p(i.orderId)}</a>
                                    </td>
                                    <td class="py-3 px-3 text-center">
                                        <span class="px-2 py-0.5 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                                            ${c}
                                        </span>
                                    </td>
                                    <td class="py-3 px-3 text-right font-black font-mono text-emerald-600 dark:text-emerald-400 whitespace-nowrap">
                                        +${f(i.amount)}
                                    </td>
                                    <td class="py-3 px-3 text-slate-600 dark:text-slate-300">
                                        <span>${p(i.cashierName||"Kasir")}</span>
                                        ${i.notes?`<span class="block text-[10px] italic text-slate-400 truncate max-w-[150px]" title="${p(i.notes)}">${p(i.notes)}</span>`:""}
                                    </td>
                                    <td class="py-3 px-4 text-center whitespace-nowrap">
                                        <div class="flex items-center justify-center gap-1.5">
                                            <button type="button" onclick="window.openTempoDetailModal('${i.orderId}')" class="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 hover:text-[var(--color-primary)] dark:text-slate-300 text-xs transition-all cursor-pointer" title="Buka Detail Nota">
                                                <i class="fa-solid fa-eye"></i>
                                            </button>
                                            <button type="button" onclick="if(typeof window.printTempoReceiptDirect==='function'){window.printTempoReceiptDirect('${i.orderId}');}else{window.previewTempoReceipt('${i.orderId}');}" class="p-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-white text-xs transition-all cursor-pointer shadow-2xs" title="Cetak Struk Nota">
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
    `},ha=()=>{qe();let t=0,e=0,a=0,r=0,s=0;const o=new Set;let l=0;O.forEach(d=>{const c=ee(d);t+=c.totalAkhir,c.isLate?(e+=c.totalAkhir,a++):c.isDueSoon?r++:s++;const b=String(d.customer?.phone||d.customer?.wa||d.customer?.name||"").trim();b&&o.add(b);const m=d.payment?.installments||[];l+=m.length});let i=`
    <div class="max-w-full pb-12 fade-in-scale text-sm space-y-5">
        
        ${V.length>0?`
        <!-- BANNER ANTREAN KONFIRMASI PEMBAYARAN MASUK PELANGGAN -->
        <div class="p-4 sm:p-5 rounded-3xl border border-[var(--color-primary)]/30 dark:border-[var(--color-primary)]/40 bg-gradient-to-r from-[rgba(var(--color-primary-rgb),0.12)] via-[rgba(var(--color-primary-rgb),0.04)] to-transparent dark:from-[rgba(var(--color-primary-rgb),0.18)] dark:to-slate-900/60 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div class="flex items-center gap-3.5">
                <div class="w-12 h-12 rounded-2xl text-white flex items-center justify-center shrink-0 relative" style="background: var(--color-primary); box-shadow: 0 4px 12px rgba(var(--color-primary-rgb), 0.35);">
                    <i class="fa-solid fa-receipt text-xl"></i>
                    <span class="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-rose-500 text-white text-[10px] font-black flex items-center justify-center border-2 border-white dark:border-slate-900 animate-bounce">
                        ${V.length}
                    </span>
                </div>
                <div>
                    <h4 class="font-black text-slate-800 dark:text-white text-sm sm:text-base flex items-center gap-2">
                        Konfirmasi Pembayaran Pelanggan Masuk
                        <span class="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-[rgba(var(--color-primary-rgb),0.12)] text-[var(--color-primary)] border border-[var(--color-primary)]/30">
                            ${V.length} Perlu Verifikasi
                        </span>
                    </h4>
                    <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        Pelanggan telah mengunggah bukti transfer Bank / QRIS toko untuk cicilan tempo. Cek bukti mutasi dan setujui untuk memperbarui saldo &amp; memulihkan limit PayLater pelanggan.
                    </p>
                </div>
            </div>
            <button type="button" onclick="window.openTempoConfirmationsModal()" class="px-5 py-2.5 rounded-xl text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer shrink-0" style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                <i class="fa-solid fa-eye text-sm"></i>
                <span>Periksa Bukti (${V.length})</span>
            </button>
        </div>
        `:""}

        <!-- HEADER KARTU STATISTIK METRIK PIUTANG DENGAN AMBIENT THEME GLOW -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div class="bg-white dark:bg-slate-800 p-4 rounded-3xl border border-slate-200/90 dark:border-slate-700 shadow-sm flex items-center gap-3.5 relative overflow-hidden">
                <div class="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);">
                    <i class="fa-solid fa-hand-holding-dollar text-xl"></i>
                </div>
                <div class="min-w-0">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Total Piutang Aktif</p>
                    <p class="text-base sm:text-lg font-black text-slate-900 dark:text-white font-mono mt-0.5 tracking-tight">${f(t)}</p>
                </div>
            </div>

            <div class="bg-white dark:bg-slate-800 p-4 rounded-3xl border border-rose-200 dark:border-rose-900/60 shadow-sm flex items-center gap-3.5 relative overflow-hidden">
                <div class="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-rose-50 text-rose-600 dark:bg-rose-950/50 dark:text-rose-400 border border-rose-200 dark:border-rose-800">
                    <i class="fa-solid fa-triangle-exclamation text-xl"></i>
                </div>
                <div class="min-w-0">
                    <p class="text-[9px] font-black text-rose-500 uppercase tracking-widest">Piutang Terlambat</p>
                    <p class="text-base sm:text-lg font-black text-rose-600 dark:text-rose-400 font-mono mt-0.5 tracking-tight">${f(e)}</p>
                </div>
            </div>

            <div class="bg-white dark:bg-slate-800 p-4 rounded-3xl border border-slate-200/90 dark:border-slate-700 shadow-sm flex items-center gap-3.5 relative overflow-hidden">
                <div class="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-amber-50 text-amber-600 dark:bg-amber-950/50 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
                    <i class="fa-solid fa-file-invoice-dollar text-xl"></i>
                </div>
                <div class="min-w-0">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Total Nota Tempo</p>
                    <p class="text-base sm:text-lg font-black text-slate-900 dark:text-white font-mono mt-0.5 tracking-tight">${O.length} Nota (${o.size} Debitur)</p>
                </div>
            </div>
        </div>

        <!-- SHORTCUT KE PUSAT LAPORAN UTANG PIUTANG & AKSI DOKUMEN REKAP -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 px-1">
            <span class="text-[11px] font-bold text-slate-500 dark:text-slate-400">Manajemen Penagihan &amp; Cicilan Piutang Toko</span>
            <div class="flex items-center gap-2 flex-wrap">
                <button type="button" onclick="window.printTempoRecapA4()" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/60 shadow-2xs transition-all active:scale-95 cursor-pointer" title="Cetak Rekap Buku Piutang Toko A4 / PDF">
                    <i class="fa-solid fa-print text-xs text-indigo-500"></i>
                    <span>Cetak Rekap A4</span>
                </button>
                <button type="button" onclick="window.exportTempoCSV()" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 shadow-2xs transition-all active:scale-95 cursor-pointer" title="Ekspor data piutang ke Excel / CSV">
                    <i class="fa-solid fa-file-excel text-xs text-emerald-600"></i>
                    <span>Ekspor CSV</span>
                </button>
                <button type="button" onclick="if(window.openAdminTab){window.openAdminTab('reports'); setTimeout(() => window.switchReportTab && window.switchReportTab('debts'), 100);}" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60 hover:bg-amber-100 dark:hover:bg-amber-900/40 shadow-2xs transition-all active:scale-95 cursor-pointer">
                    <i class="fa-solid fa-chart-pie text-xs"></i>
                    <span>Analisis Laporan</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                </button>
            </div>
        </div>

        <!-- 3 TAB NAVIGASI UTAMA (ORDERS, CUSTOMERS, INSTALLMENTS) -->
        <div class="p-1.5 bg-slate-100 dark:bg-slate-800/80 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 grid grid-cols-3 gap-1">
            <button type="button" onclick="window.switchTempoMainTab('orders')" class="py-2.5 px-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer ${se==="orders"?"bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs":"text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"}">
                <i class="fa-solid fa-file-invoice text-xs"></i>
                <span>Daftar Nota (${O.length})</span>
            </button>
            <button type="button" onclick="window.switchTempoMainTab('customers')" class="py-2.5 px-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer ${se==="customers"?"bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs":"text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"}">
                <i class="fa-solid fa-address-book text-xs text-indigo-500"></i>
                <span>Kartu Pelanggan (${o.size})</span>
            </button>
            <button type="button" onclick="window.switchTempoMainTab('installments')" class="py-2.5 px-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer ${se==="installments"?"bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs":"text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"}">
                <i class="fa-solid fa-receipt text-xs text-emerald-500"></i>
                <span>Histori Cicilan (${l})</span>
            </button>
        </div>

        <!-- SEARCH BAR INSTAN (GLOBAL UNTUK SEMUA TAB) -->
        <div class="bg-white dark:bg-slate-800 p-4 rounded-3xl border border-slate-200/90 dark:border-slate-700 shadow-sm space-y-3">
            <div class="relative">
                <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
                <input type="text" 
                    id="tempo-search-input"
                    value="${p(ge)}"
                    placeholder="${se==="orders"?"Cari nama pelanggan, nomor WhatsApp, atau ID nota tempo...":se==="customers"?"Cari nama pelanggan atau nomor WhatsApp...":"Cari transaksi cicilan, nama, nomor nota, atau catatan..."}" 
                    oninput="window.onTempoSearch(this.value)"
                    class="w-full pl-9 pr-8 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl text-xs font-medium text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)] transition-all">
                ${ge?`
                <button onclick="window.onTempoSearch(''); el('tempo-search-input').value='';" class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer">
                    <i class="fa-solid fa-circle-xmark text-sm"></i>
                </button>`:""}
            </div>

            ${se==="orders"?`
            <!-- FILTER STATUS SEGMENTED CONTROL (TAB ORDERS) -->
            <div class="flex items-center gap-2 overflow-x-auto pb-1 hide-scrollbar text-xs font-bold uppercase tracking-wider">
                <button onclick="window.setTempoFilter('all')" 
                    class="px-3.5 py-2 rounded-xl border transition-all shrink-0 cursor-pointer active:scale-95 ${xe==="all"?"text-white border-transparent shadow-xs":"bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100"}"
                    style="${xe==="all"?"background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);":""}">
                    Semua (${O.length})
                </button>
                <button onclick="window.setTempoFilter('late')" 
                    class="px-3.5 py-2 rounded-xl border transition-all shrink-0 cursor-pointer active:scale-95 ${xe==="late"?"bg-rose-600 text-white border-rose-600 shadow-xs":"bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-900/50 hover:bg-rose-100"}">
                    <i class="fa-solid fa-triangle-exclamation mr-1"></i> Terlambat (${a})
                </button>
                <button onclick="window.setTempoFilter('due_soon')" 
                    class="px-3.5 py-2 rounded-xl border transition-all shrink-0 cursor-pointer active:scale-95 ${xe==="due_soon"?"bg-amber-500 text-white border-amber-500 shadow-xs":"bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-900/50 hover:bg-amber-100"}">
                    <i class="fa-solid fa-clock mr-1"></i> H-3 Jatuh Tempo (${r})
                </button>
                <button onclick="window.setTempoFilter('active')" 
                    class="px-3.5 py-2 rounded-xl border transition-all shrink-0 cursor-pointer active:scale-95 ${xe==="active"?"bg-emerald-600 text-white border-emerald-600 shadow-xs":"bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900/50 hover:bg-emerald-100"}">
                    <i class="fa-solid fa-circle-check mr-1"></i> Berjalan Lancar (${s})
                </button>
            </div>
            `:""}
        </div>

        <!-- CONTAINER KONTEN TAB AKTIF (SEAMLESS ZERO-FLICKER) -->
        <div id="tempo-tab-content-container"></div>
    </div>`;j("admin-content",i),Et()},Et=()=>{const t=k("tempo-tab-content-container");t&&(se==="orders"?O.length===0?t.innerHTML=`
            <div class="bg-white dark:bg-slate-800 p-10 text-center rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary);">
                    <i class="fa-solid fa-check-double text-4xl"></i>
                </div>
                <h3 class="font-black text-slate-800 dark:text-slate-100 text-base uppercase tracking-widest">Semua Tagihan Piutang Lunas!</h3>
                <p class="text-slate-500 dark:text-slate-400 mt-1.5 text-xs font-medium max-w-sm mx-auto">Tidak ada piutang tempo penjualan pelanggan yang sedang aktif atau tertunda saat ini.</p>
            </div>`:(t.innerHTML='<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" id="tempo-cards-container"></div>',zs()):se==="customers"?t.innerHTML=ao():se==="installments"&&(t.innerHTML=so()))},Ot=async()=>{L("Memuat data piutang..."),O=[],V=[];try{const[t,e]=await Promise.all([P.collection("freshmart_orders").where("payment.method","==","tempo").where("payment.paymentStatus","==","hutang").get(),P.collection("tempo_payment_confirmations").where("status","==","pending").get().catch(a=>(console.warn("[Tempo] Gagal memuat konfirmasi pembayaran:",a),{empty:!0,docs:[]}))]);t.forEach(a=>{O.push(a.data())}),!e.empty&&e.docs&&(e.docs.forEach(a=>{V.push({id:a.id,...a.data()})}),V.sort((a,r)=>(r.createdAt||0)-(a.createdAt||0)))}catch(t){C(),x("Gagal memuat piutang: "+t.message);return}C(),O.sort((t,e)=>{let a=t.payment?.tempoDueDate||0,r=e.payment?.tempoDueDate||0;return a-r}),window.cachedPiutangOrders=O,window.pendingTempoConfirmations=V,ha()},Js=async()=>{try{if(typeof window.openTempoRecapDocPreview=="function")window.openTempoRecapDocPreview();else{const t=await J(()=>import("./module-print-BX8_SYqv.js").then(e=>e.bm),__vite__mapDeps([1,2,3]));t&&typeof t.openDocPreview=="function"?t.openDocPreview("tempo_recap"):typeof window.openDocPreview=="function"?window.openDocPreview("tempo_recap"):x("Modul cetak dokumen sedang disiapkan...","info")}}catch(t){console.error("Error open tempo recap A4:",t),typeof window.openDocPreview=="function"?window.openDocPreview("tempo_recap"):x("Gagal membuka preview dokumen: "+t.message,"warning")}},Qs=()=>{const t=O&&O.length>0?O:(window.gOrds||[]).filter(c=>c.payment?.method==="tempo"&&(parseFloat(c.payment?.tempoBalance)>0||c.payment?.status!=="paid"&&c.payment?.status!=="completed"));if(!t||t.length===0){x("Tidak ada data piutang untuk diekspor ke CSV","warning");return}const e=["No","ID Nota","Nama Debitur","No WhatsApp / Telepon","Alamat Debitur","Tanggal Transaksi","Jatuh Tempo","Total Transaksi (Rp)","Sudah Dibayar (Rp)","Sisa Pokok (Rp)","Denda (Rp)","Total Tagihan Berjalan (Rp)","Status Aging","Hari Terlambat","Catatan / Keterangan"],a=c=>c==null?'""':`"${String(c).replace(/"/g,'""')}"`,r=t.map((c,b)=>{const m=ee(c),u=c.customer||{},g=u.name||"Pelanggan",h=u.wa||u.phone||"-",v=u.address||"-",w=c.dateString?new Date(c.dateString).toLocaleDateString("id-ID"):"-",S=m.dueDate?new Date(m.dueDate).toLocaleDateString("id-ID"):"-",D=(c.payment?.installments||[]).reduce((y,I)=>y+(parseFloat(I.amount)||0),0),A=c.payment?.grandTotal||m.sisa+D,$=m.isLate?`Terlambat ${m.daysLate} Hari`:m.isDueSoon?`H-${m.daysLeft} Jatuh Tempo`:"Lancar";return[b+1,a(c.orderId||c.id),a(g),a(h),a(v),a(w),a(S),Math.round(A),Math.round(D),Math.round(m.sisa),Math.round(m.latePenalty),Math.round(m.totalAkhir),a($),m.daysLate||0,a(c.notes||c.payment?.notes||"-")].join(",")}),s="\uFEFF"+[e.map(c=>a(c)).join(","),...r].join(`\r
`),o=new Blob([s],{type:"text/csv;charset=utf-8;"}),l=URL.createObjectURL(o),i=document.createElement("a"),d=new Date().toISOString().slice(0,10);i.href=l,i.download=`Rekap_Piutang_Toko_Putri_${d}.csv`,document.body.appendChild(i),i.click(),setTimeout(()=>{document.body.removeChild(i),URL.revokeObjectURL(l)},200),x(`Berhasil mengekspor ${t.length} data piutang ke CSV!`,"success")};window.rAdmPiutang=Ot;window.printTempoRecapA4=Js;window.exportTempoCSV=Qs;const Ys=t=>{Lr(t),va()},va=()=>{const t=Br||"all",e=(Yt||[]).filter(o=>t==="visible"?o.isVisible!==!1:t==="hidden"?o.isVisible===!1:!0),a=`
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
                <button onclick="filterReviews('${o.k}')" class="px-3.5 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${t===o.k?"shadow-sm":"text-slate-500 dark:text-slate-400"}" style="${t===o.k?"background:var(--color-primary);color:#fff":""}">${o.l}</button>
            `).join("")}
        </div>`;if(!e.length){j("admin-content",'<div class="max-w-full pb-10 text-sm fade-in-scale">'+a+'<div class="flex flex-col items-center justify-center py-20 text-slate-400 font-bold bg-white dark:bg-slate-800 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm text-center"><i class="fa-solid fa-comment-slash text-5xl mb-4 opacity-30"></i>Belum ada ulasan</div></div>');return}const r=o=>Array.from({length:5},(l,i)=>`<i class="fa-solid fa-star ${i<Math.round(o)?"text-amber-400":"text-slate-200 dark:text-slate-700"}"></i>`).join(""),s=e.map(o=>{let l="";try{o.createdAt&&o.createdAt.toDate&&(l=o.createdAt.toDate().toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}))}catch{}const i=o.isVisible===!1;return`
        <div class="p-4 sm:p-5 md:p-6 lg:p-8 rounded-[1.5rem] border shadow-sm ${i?"border-rose-200 bg-rose-50/40 dark:border-rose-900/40 dark:bg-rose-900/10":"border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800"} mb-3">
            <div class="flex items-start justify-between gap-3 mb-2">
                <div class="min-w-0">
                    <p class="text-sm font-bold text-slate-800 dark:text-white truncate">${p(o.customerName||"Pelanggan")}</p>
                    <p class="text-[10px] font-bold text-slate-500 mt-0.5">${p(o.productName||"")}${o.variantName?" · "+p(o.variantName):""}</p>
                </div>
                <span class="text-[9px] font-bold text-slate-400 whitespace-nowrap">${l}</span>
            </div>
            <div class="flex text-xs mb-2.5">${r(o.rating)}</div>
            ${o.text?`<p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-2.5">${p(o.text)}</p>`:""}
            ${o.photoUrl?`<img src="${p(o.photoUrl)}" onclick="window.open('${p(o.photoUrl)}','_blank')" class="w-20 h-20 rounded-xl object-cover border border-slate-200 dark:border-slate-700 cursor-pointer mb-2.5" onerror="this.style.display='none'" loading="lazy">`:""}
            ${o.adminReply?`<div class="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl p-3 mb-2.5"><p class="text-[9px] font-bold text-[var(--color-primary)] uppercase tracking-widest mb-1"><i class="fa-solid fa-store mr-1"></i>Balasan Anda</p><p class="text-[11px] text-slate-600 dark:text-slate-300">${p(o.adminReply)}</p></div>`:""}
            <div class="flex flex-wrap gap-2 pt-2 border-t border-slate-100 dark:border-slate-700/60">
                <button onclick="replyToReview('${p(String(o.id))}')" class="px-3.5 py-2.5 rounded-xl primary-bg-soft primary-text text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 hover:opacity-90 active:scale-95 transition-all cursor-pointer"><i class="fa-solid fa-reply"></i> ${o.adminReply?"Edit Balasan":"Balas"}</button>
                <button onclick="toggleReviewVisibility('${p(String(o.id))}')" class="px-3.5 py-2.5 rounded-xl ${i?"primary-bg-soft primary-text hover:brightness-95":"bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 hover:bg-amber-100"} text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 active:scale-95 transition-all cursor-pointer"><i class="fa-solid ${i?"fa-eye":"fa-eye-slash"}"></i> ${i?"Tampilkan":"Sembunyikan"}</button>
                <button onclick="deleteReview('${p(String(o.id))}')" class="px-3.5 py-2.5 rounded-xl bg-rose-50 dark:bg-rose-900/20 text-rose-500 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 hover:bg-rose-100 active:scale-95 transition-all cursor-pointer"><i class="fa-solid fa-trash"></i> Hapus</button>
            </div>
        </div>`}).join("");j("admin-content",'<div class="max-w-full pb-10 text-sm fade-in-scale">'+a+s+"</div>")},Xs=async t=>{const e=(Yt||[]).find(a=>a&&a.id!=null&&String(a.id)===String(t));e&&typeof window.customPrompt=="function"&&window.customPrompt("Tulis balasan untuk ulasan ini:",e.adminReply||"",async a=>{L("Menyimpan balasan...");try{await P.collection("freshmart").doc("cms_data").collection("reviews").doc(t.toString()).update({adminReply:a}),x("Balasan tersimpan!")}catch{x("Gagal menyimpan balasan!")}finally{C()}})},Zs=async t=>{const e=(Yt||[]).find(r=>r&&r.id!=null&&String(r.id)===String(t));if(!e)return;const a=e.isVisible===!1;L("Menyimpan...");try{await P.collection("freshmart").doc("cms_data").collection("reviews").doc(t.toString()).update({isVisible:a}),x(a?"Ulasan ditampilkan lagi!":"Ulasan disembunyikan dari halaman produk!")}catch{x("Gagal mengubah status ulasan!")}finally{C()}},er=t=>{pe("Hapus Ulasan","Ulasan yang dihapus tidak bisa dikembalikan lagi.",async()=>{L("Menghapus...");try{await P.collection("freshmart").doc("cms_data").collection("reviews").doc(t.toString()).delete(),x("Ulasan dihapus!")}catch{x("Gagal menghapus ulasan!")}finally{C()}})};window.filterReviews=Ys;window.rAdmReviews=va;window.replyToReview=Xs;window.toggleReviewVisibility=Zs;window.deleteReview=er;let Ft=null,Ce=1,Be="overview",be="all";const ro=t=>{Be=t,Re()},oo=t=>{be=t,Re()},tr=t=>{const e=[];if(!t)return e;const a=String(t.id),r=String(t.name||"").trim().toLowerCase();return(n.purchases||[]).forEach(i=>{if(!(i.status==="received"||i.status==="completed"||i.receivedAt))return;(Array.isArray(i.items)?i.items:[]).forEach(b=>{if(String(b.productId||b.id||"")===a||String(b.name||"").trim().toLowerCase()===r){const u=parseFloat(b.qty||b.receivedQty||0)||0;u>0&&e.push({type:"in",source:"po",date:i.receivedAt||i.date||i.createdAt||Date.now(),refNo:i.poNumber||i.id||"PO",title:`Penerimaan PO Kulakan #${i.poNumber||i.id}`,qty:u,unit:b.unit||t.unit||"pcs",price:b.buyPrice||b.price||0,party:i.supplierName||"Supplier Rekanan",location:b.targetLocation==="store"?"Rak Toko":"Gudang Cadangan",notes:i.notes||"Barang masuk kulakan resmi"})}})}),(window.gOrds||n.orders||[]).forEach(i=>{if(i.status==="cancelled"||i.status==="void")return;(Array.isArray(i.items)?i.items:[]).forEach(c=>{if(String(c.id||c.productId||"")===a||String(c.name||"").trim().toLowerCase()===r){const m=parseFloat(c.qty||c.quantity||0)||0;m>0&&e.push({type:"out",source:"sales",date:i.createdAt||(i.dateString?new Date(i.dateString).getTime():Date.now()),refNo:i.orderId||i.id||"ORD",title:`Penjualan ${i.isPos?"Kasir POS":"Online"} #${i.orderId||i.id}`,qty:m,unit:c.unit||t.unit||"pcs",price:c.price||0,party:i.customer?.name||(i.isPos?"Pelanggan Kasir":"Pelanggan Toko"),location:"Rak Toko",notes:i.payment?.method?`Metode: ${i.payment.method.toUpperCase()}`:"Penjualan"})}})}),(t.stockBatches||[]).forEach(i=>{!e.some(c=>c.source==="po"&&c.refNo===(i.poNumber||i.batchNo))&&(parseFloat(i.initialQty)||0)>0&&e.push({type:"in",source:"batch",date:i.receivedAt||Date.now(),refNo:i.poNumber||i.batchNo||"BATCH",title:`Batch Stok Masuk #${i.poNumber||i.batchNo||"LOT"}`,qty:parseFloat(i.initialQty)||0,unit:t.unit||"pcs",price:i.buyPrice||0,party:i.supplierName||"Pemasok",location:i.location==="store"?"Rak Toko":"Gudang Cadangan",notes:`Sisa batch saat ini: ${i.remainingQty||0} unit`})}),e.sort((i,d)=>{const c=new Date(i.date).getTime()||0;return(new Date(d.date).getTime()||0)-c}),e},lo=()=>{if(!k("modal-product-fifo")){const t=document.createElement("div");t.id="modal-product-fifo",t.className="fixed inset-0 z-[150] flex hidden items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/75 opacity-0 transition-opacity duration-300",t.onclick=e=>{e.target===t&&window.closeProductFifoModal?.()},t.innerHTML=`
            <div id="modal-product-fifo-box" class="modal-bottom-sheet relative flex max-h-[92dvh] sm:max-h-[88dvh] w-full max-w-4xl translate-y-full sm:translate-y-10 transform flex-col overflow-hidden rounded-t-[2rem] sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300">
                <div id="modal-product-fifo-content" class="flex-1 flex flex-col overflow-hidden min-h-0"></div>
            </div>
        `,document.body.appendChild(t)}},ar=t=>{lo(),Ft=t,Ce=1,Be="overview",be="all";const e=(n.products||[]).find(s=>String(s.id)===String(t));if(!e)return x("Produk tidak ditemukan!");Zt(e,n.suppliers||[]),Re();const a=k("modal-product-fifo"),r=k("modal-product-fifo-box");a&&a.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("productFifo"),ie(a,r)},io=(t=!1)=>{const e=k("modal-product-fifo"),a=k("modal-product-fifo-box");e&&(!t&&typeof window.requestCloseModal=="function"?window.requestCloseModal("productFifo",!1,()=>X(e,a)):X(e,a))},Re=()=>{const t=k("modal-product-fifo-content");if(!t)return;const e=(n.products||[]).find(y=>String(y.id)===String(Ft));if(!e)return;Zt(e,n.suppliers||[]);const a=e.suppliers||[],r=e.stockBatches||[],s=qr(e),o=r.filter(y=>(parseFloat(y.remainingQty)||0)>0),l=r.filter(y=>(parseFloat(y.remainingQty)||0)<=0),i=(n.suppliers||[]).filter(y=>!a.some(I=>String(I.supplierId)===String(y.id)));let d=parseFloat(Ce)||0,c=0;const b=[];if(o.forEach(y=>{if(d<=0)return;const I=parseFloat(y.remainingQty)||0,R=Math.min(I,d),E=R*(parseFloat(y.buyPrice)||0);c+=E,b.push({poNumber:y.poNumber||"BATCH",supplierName:y.supplierName||"Pemasok",qty:R,buyPrice:y.buyPrice,subtotal:E}),d-=R}),d>0){const y=parseFloat(e.hpp)||0,I=d*y;c+=I,b.push({poNumber:"STOK DARURAT (DEFICIT)",supplierName:"Estimasi HPP Standar",qty:d,buyPrice:y,subtotal:I,isDeficit:!0})}const m=Ce>0?Math.round(c/Ce):0,u=parseFloat(e.price)||0,g=u*Ce,h=Math.max(0,g-c),v=tr(e),w=v.filter(y=>y.type==="in"),S=v.filter(y=>y.type==="out"),M=w.reduce((y,I)=>y+I.qty,0),D=S.reduce((y,I)=>y+I.qty,0),A=(e.storeStock||0)+(e.warehouseStock||0),$=be==="in"?w:be==="out"?S:v;t.innerHTML=`
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
                        <span>${p(e.name)}</span>
                    </h3>
                    <p class="text-[11px] font-bold text-slate-400 truncate">
                        Barcode: <span class="font-mono text-slate-600 dark:text-slate-300">${p(e.sku||"-")}</span> • Kategori: <span class="text-slate-600 dark:text-slate-300">${p(e.category||"Umum")}</span>
                    </p>
                </div>
            </div>
            <div class="flex items-center gap-2 shrink-0">
                <button type="button" onclick="window.closeProductFifoModal?.(); window.openProductBarcodeLabelModal?.('${e.id}')" class="px-3 py-1.5 rounded-xl bg-indigo-50 hover:bg-indigo-600 hover:text-white dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 text-xs font-bold transition-all active:scale-95 flex items-center gap-1.5 cursor-pointer shadow-2xs" title="Cetak Label Barcode &amp; Harga">
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
            <button type="button" onclick="window.switchFifoTab('overview')" class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer active:scale-95 shrink-0 ${Be==="overview"?"bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-2xs border border-slate-200 dark:border-slate-600 font-extrabold":"text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"}" style="${Be==="overview"?"color: var(--color-primary);":""}">
                <i class="fa-solid fa-layer-group text-amber-500"></i>
                <span>Ikhtisar &amp; Antrean Batch FIFO</span>
            </button>
            <button type="button" onclick="window.switchFifoTab('ledger')" class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer active:scale-95 shrink-0 ${Be==="ledger"?"bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-2xs border border-slate-200 dark:border-slate-600 font-extrabold":"text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"}" style="${Be==="ledger"?"color: var(--color-primary);":""}">
                <i class="fa-solid fa-book-journal-whills text-teal-500"></i>
                <span>Kartu Mutasi Stok (${v.length})</span>
            </button>
        </div>

        <!-- 3. KONTEN UTAMA (BODY INDEPENDENT OVERFLOW-Y SCROLLABLE) -->
        <div class="flex-1 overflow-y-auto custom-scrollbar min-h-0 bg-white dark:bg-slate-900">
        ${Be==="overview"?`
        <div class="p-5 sm:p-6 space-y-6">
            <!-- 1. BENTO STATS CARDS (DUAL-LOCATION & FIFO VALUATION) -->
            <div class="grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-3">
                <div class="p-3.5 rounded-2xl bg-teal-50/70 dark:bg-teal-950/30 border border-teal-200/80 dark:border-teal-800/70 shadow-2xs">
                    <span class="text-[9px] font-black uppercase tracking-wider text-teal-600 dark:text-teal-400 flex items-center gap-1">
                        <i class="fa-solid fa-store"></i> Stok Rak Toko
                    </span>
                    <p class="text-base sm:text-lg font-black text-slate-800 dark:text-white mt-0.5">${e.storeStock||0} <span class="text-[10px] font-bold text-slate-400">${p(e.unit||"pcs")}</span></p>
                    <p class="text-[9px] font-bold text-teal-600 dark:text-teal-400 mt-0.5">Siap Transaksi Kasir</p>
                </div>
                <div class="p-3.5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/70 shadow-2xs">
                    <span class="text-[9px] font-black uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-1">
                        <i class="fa-solid fa-warehouse"></i> Stok Gudang
                    </span>
                    <p class="text-base sm:text-lg font-black text-slate-800 dark:text-white mt-0.5">${e.warehouseStock||0} <span class="text-[10px] font-bold text-slate-400">${p(e.unit||"pcs")}</span></p>
                    <p class="text-[9px] font-bold text-amber-600 dark:text-amber-400 mt-0.5">Cadangan Belakang</p>
                </div>
                <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/70 shadow-2xs">
                    <span class="text-[9px] font-black uppercase tracking-wider text-slate-400">Total Stok</span>
                    <p class="text-base sm:text-lg font-black text-slate-800 dark:text-white mt-0.5">${s.totalActiveQty} <span class="text-[10px] font-bold text-slate-400">${p(e.unit||"pcs")}</span></p>
                    <p class="text-[9px] font-bold text-slate-400 mt-0.5">${s.activeBatchesCount} Batch Aktif</p>
                </div>
                <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/70 shadow-2xs">
                    <span class="text-[9px] font-black uppercase tracking-wider text-amber-500">HPP Aktif</span>
                    <p class="text-base sm:text-lg font-black text-amber-600 dark:text-amber-400 mt-0.5">${f(e.hpp||0)}</p>
                    <p class="text-[9px] font-bold text-slate-400 mt-0.5">Batch Terdepan</p>
                </div>
                <div class="col-span-2 sm:col-span-1 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/70 shadow-2xs">
                    <span class="text-[9px] font-black uppercase tracking-wider" style="color:var(--color-primary)">Valuasi FIFO</span>
                    <p class="text-base sm:text-lg font-black text-slate-800 dark:text-white mt-0.5" style="color:var(--color-primary)">${f(s.totalValuationRp)}</p>
                    <p class="text-[9px] font-bold text-slate-400 mt-0.5">Aset Bersih PSAK</p>
                </div>
            </div>

            <!-- BANNER MUTASI INTERNAL TOKO & GUDANG -->
            <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50/70 dark:bg-slate-800/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 dark:text-amber-400 flex items-center justify-center text-lg shrink-0">
                        <i class="fa-solid fa-dolly"></i>
                    </div>
                    <div>
                        <h5 class="text-xs sm:text-sm font-black text-slate-800 dark:text-white">Manajemen Pemindahan Stok Internal</h5>
                        <p class="text-[11px] text-slate-400 font-medium">Pindahkan stok dari gudang cadangan ke rak toko agar kasir selalu siap melayani pelanggan.</p>
                    </div>
                </div>
                <div class="flex items-center gap-2 w-full sm:w-auto">
                    <button type="button" onclick="window.quickTransferWarehouseToStore('${e.id}')" class="flex-1 sm:flex-none px-4 py-2.5 rounded-xl primary-bg text-white font-bold text-xs flex items-center justify-center gap-2 active:scale-95 transition-all shadow-sm cursor-pointer" ${Number(e.warehouseStock||0)<=0?'disabled style="opacity:0.5;cursor:not-allowed;"':""}>
                        <i class="fa-solid fa-arrow-right-arrow-left text-[11px]"></i>
                        <span>Pindahkan ke Rak Toko</span>
                    </button>
                </div>
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
                    ${a.map(y=>{const I=!!y.isPrimary,E=(n.suppliers||[]).find(W=>String(W.id)===String(y.supplierId))?.phone||"";return`
                            <div class="p-4 rounded-2xl border transition-all ${I?"bg-teal-50/50 dark:bg-teal-950/20 border-teal-300 dark:border-teal-800 shadow-sm":"bg-white dark:bg-slate-800 border-slate-200/90 dark:border-slate-700/80"} flex flex-col justify-between gap-3">
                                <div class="flex items-start justify-between gap-2">
                                    <div>
                                        <div class="flex items-center gap-2 flex-wrap">
                                            <span class="font-black text-xs sm:text-sm text-slate-800 dark:text-white">${p(y.supplierName||"Supplier")}</span>
                                            ${I?`
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
                                            Harga Beli Terakhir: <b class="text-slate-700 dark:text-slate-200">${f(y.lastBuyPrice||0)}</b>
                                            ${y.supplierSku?` • SKU: <span class="font-mono">${p(y.supplierSku)}</span>`:""}
                                        </p>
                                    </div>
                                    <div class="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-700/60 flex items-center justify-center text-slate-500 shrink-0">
                                        <i class="fa-solid fa-building text-xs"></i>
                                    </div>
                                </div>

                                <div class="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-700/60 flex-wrap">
                                    ${I?"":`
                                        <button onclick="window.handleSetFifoPrimarySupplier('${p(y.supplierId)}')" class="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-700 hover:bg-teal-50 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800 text-[10px] font-black transition-all cursor-pointer active:scale-95 shadow-2xs">
                                            <i class="fa-solid fa-check mr-1"></i>Set Utama
                                        </button>
                                    `}
                                    <button onclick="window.closeProductFifoModal(); if(window.openCreatePOModal) window.openCreatePOModal('${p(y.supplierId)}');" class="px-3 py-1.5 rounded-xl text-white text-[10px] font-black transition-all cursor-pointer active:scale-95 shadow-2xs flex items-center gap-1" style="background:var(--color-primary)">
                                        <i class="fa-solid fa-cart-plus text-[9px]"></i>Buat PO Kulakan
                                    </button>
                                    ${E?`
                                        <a href="https://wa.me/${E.replace(/\\D/g,"")}?text=${encodeURIComponent(`Halo Sales ${y.supplierName}, kami dari Toko Putri ingin menanyakan ketersediaan dan harga untuk produk: ${e.name}`)}" target="_blank" class="px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-[10px] font-bold transition-all flex items-center gap-1">
                                            <i class="fa-brands fa-whatsapp text-emerald-500"></i>Chat Sales
                                        </a>
                                    `:""}
                                </div>
                            </div>
                        `}).join("")}
                </div>

                <!-- FORM TAMBAH SUPPLIER REKANAN BARU -->
                ${i.length>0?`
                    <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-dashed border-slate-300 dark:border-slate-700 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                        <div class="flex-1 flex flex-col sm:flex-row gap-2">
                            <select id="fifo-new-sup-select" class="admin-input shadow-sm bg-white dark:bg-slate-800 text-xs font-bold flex-1">
                                <option value="">-- Hubungkan Supplier Baru --</option>
                                ${i.map(y=>`<option value="${y.id}">${p(y.name)}${y.code?` (${p(y.code)})`:""}</option>`).join("")}
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
                    `:o.map((y,I)=>{const R=I===0,E=y.initialQty>0?Math.round(y.remainingQty/y.initialQty*100):100,W=y.receivedAt?new Date(y.receivedAt).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):"Awal";return`
                            <div class="p-4 rounded-2xl border transition-all ${R?"bg-amber-50/40 dark:bg-amber-950/20 border-amber-300 dark:border-amber-800/80 shadow-sm":"bg-white dark:bg-slate-800 border-slate-200/90 dark:border-slate-700/80"}">
                                <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-2">
                                    <div class="flex items-center gap-2 flex-wrap">
                                        <span class="w-6 h-6 rounded-lg text-xs font-black flex items-center justify-center ${R?"bg-amber-500 text-white shadow-xs":"bg-slate-100 dark:bg-slate-700 text-slate-500"}">
                                            #${I+1}
                                        </span>
                                        <span class="font-black text-xs sm:text-sm text-slate-800 dark:text-white">${p(y.poNumber||"BATCH MASUK")}</span>
                                        ${R?`
                                            <span class="px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-wider bg-emerald-500 text-white shadow-2xs flex items-center gap-1">
                                                <i class="fa-solid fa-circle-play text-[7px]"></i>Sedang Dijual Sekarang
                                            </span>
                                        `:`
                                            <span class="px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-700 text-slate-500">
                                                Antrean Ke-${I+1}
                                            </span>
                                        `}
                                    </div>
                                    <div class="text-right">
                                        <span class="text-xs font-black text-slate-700 dark:text-slate-200">HPP: ${f(y.buyPrice)}</span>
                                        <span class="text-[10px] text-slate-400 block">${W}</span>
                                    </div>
                                </div>

                                <div class="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1.5">
                                    <span>Pemasok: <b class="text-slate-700 dark:text-slate-300">${p(y.supplierName||"-")}</b></span>
                                    <span>Sisa: <b class="text-slate-800 dark:text-white font-mono font-bold">${y.remainingQty}</b> / ${y.initialQty} ${p(e.unit||"pcs")} (${E}%)</span>
                                </div>

                                <!-- PROGRESS BAR SISA STOK -->
                                <div class="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden">
                                    <div class="h-full rounded-full transition-all duration-500 ${R?"bg-amber-500":"bg-teal-500"}" style="width: ${Math.min(100,Math.max(0,E))}%"></div>
                                </div>
                            </div>
                        `}).join("")}
                </div>

                ${l.length>0?`
                    <p class="text-[11px] font-bold text-slate-400 flex items-center gap-1 mt-2">
                        <i class="fa-solid fa-clock-rotate-left"></i>
                        <span>Ada ${l.length} batch masa lalu yang telah habis terjual sempurna.</span>
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
                        <input type="number" min="1" max="999" value="${Ce}" onchange="window.handleFifoSimulateChange(this.value)" class="w-16 bg-slate-900 text-white text-xs font-black text-center py-1 rounded-lg border border-slate-600 focus:outline-none focus:border-amber-400">
                    </div>
                </div>

                <div class="p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/60 text-xs space-y-2">
                    <p class="text-[11px] font-bold text-slate-300">Alokasi Pemotongan:</p>
                    <div class="space-y-1 text-slate-300 font-mono text-[11px]">
                        ${b.map(y=>`
                            <div class="flex items-center justify-between py-0.5 border-b border-slate-800">
                                <span>• ${y.qty} ${p(e.unit||"pcs")} dari <b>${p(y.poNumber)}</b> (${p(y.supplierName)}) @ ${f(y.buyPrice)}</span>
                                <span class="font-bold text-amber-300">${f(y.subtotal)}</span>
                            </div>
                        `).join("")}
                    </div>
                </div>

                <div class="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800 text-center">
                    <div>
                        <span class="text-[9px] text-slate-400 uppercase font-black">Total HPP Riil</span>
                        <p class="text-sm sm:text-base font-black text-amber-400">${f(c)}</p>
                        <span class="text-[9px] text-slate-500">Rata-rata: ${f(m)}/unit</span>
                    </div>
                    <div>
                        <span class="text-[9px] text-slate-400 uppercase font-black">Omzet Jual</span>
                        <p class="text-sm sm:text-base font-black text-white">${f(g)}</p>
                        <span class="text-[9px] text-slate-500">Harga: ${f(u)}</span>
                    </div>
                    <div>
                        <span class="text-[9px] text-slate-400 uppercase font-black">Laba Kotor Transaksi</span>
                        <p class="text-sm sm:text-base font-black text-emerald-400">+${f(h)}</p>
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
                        +${M} <span class="text-xs font-bold text-slate-400">${p(e.unit||"pcs")}</span>
                    </p>
                    <p class="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 mt-0.5">${w.length} Dokumen Kulakan Masuk</p>
                </div>

                <div class="p-4 rounded-2xl bg-rose-50/80 dark:bg-rose-950/30 border border-rose-200/90 dark:border-rose-800/70 shadow-2xs">
                    <span class="text-[9.5px] font-black uppercase tracking-wider text-rose-700 dark:text-rose-400 flex items-center gap-1.5">
                        <i class="fa-solid fa-arrow-up-from-bracket text-rose-600 dark:text-rose-400"></i> Total Barang Keluar (Penjualan)
                    </span>
                    <p class="text-lg sm:text-xl font-black mt-1 font-mono" style="color: #e11d48;">
                        -${D} <span class="text-xs font-bold text-slate-400">${p(e.unit||"pcs")}</span>
                    </p>
                    <p class="text-[10px] font-bold text-rose-700 dark:text-rose-400 mt-0.5">${S.length} Transaksi Kasir &amp; Web</p>
                </div>

                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/90 dark:border-slate-700/70 shadow-2xs">
                    <span class="text-[9.5px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                        <i class="fa-solid fa-boxes-stacked text-slate-500 dark:text-slate-400"></i> Saldo Stok Fisik Realtime
                    </span>
                    <p class="text-lg sm:text-xl font-black text-slate-800 dark:text-white mt-1 font-mono">
                        ${A} <span class="text-xs font-bold text-slate-400">${p(e.unit||"pcs")}</span>
                    </p>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">Toko: ${e.storeStock||0} • Gudang: ${e.warehouseStock||0}</p>
                </div>
            </div>

            <!-- 2. FILTER SEGMENTED KARTU MUTASI (DENGAN IKON VALID) -->
            <div class="flex items-center justify-between flex-wrap gap-2 pt-1 border-t border-slate-100 dark:border-slate-800">
                <div class="flex items-center gap-1.5 overflow-x-auto hide-scrollbar text-xs font-bold">
                    <button type="button" onclick="window.setLedgerFilter('all')" class="px-3 py-1.5 rounded-xl border transition-all cursor-pointer active:scale-95 ${be==="all"?"bg-slate-900 text-white border-slate-900 dark:bg-white dark:text-slate-900 shadow-2xs":"bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-transparent"}">
                        Semua Riwayat (${v.length})
                    </button>
                    <button type="button" onclick="window.setLedgerFilter('in')" class="px-3 py-1.5 rounded-xl border transition-all cursor-pointer active:scale-95 ${be==="in"?"text-white border-transparent shadow-2xs":"bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 border-transparent"}" style="${be==="in"?"background-color: #059669;":""}">
                        <i class="fa-solid fa-arrow-down-to-bracket mr-1"></i>Barang Masuk (${w.length})
                    </button>
                    <button type="button" onclick="window.setLedgerFilter('out')" class="px-3 py-1.5 rounded-xl border transition-all cursor-pointer active:scale-95 ${be==="out"?"text-white border-transparent shadow-2xs":"bg-rose-50 dark:bg-rose-950/30 text-rose-700 dark:text-rose-300 border-transparent"}" style="${be==="out"?"background-color: #e11d48;":""}">
                        <i class="fa-solid fa-arrow-up-from-bracket mr-1"></i>Barang Keluar (${S.length})
                    </button>
                </div>
                <span class="text-[11px] text-slate-400 font-medium">Buku Mutasi Stok Riil Berbasis Dokumen Transaksi</span>
            </div>

            <!-- 3. TABEL / LIST MUTASI KARTU STOK (DENGAN IKON SOLID & WARNA TEGAS) -->
            <div class="space-y-2">
                ${$.length===0?`
                    <div class="p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700 text-center">
                        <i class="fa-solid fa-clipboard-list text-3xl text-slate-300 dark:text-slate-600 mb-2"></i>
                        <p class="text-xs font-bold text-slate-600 dark:text-slate-300">Belum ada catatan mutasi stok untuk filter ini.</p>
                        <p class="text-[11px] text-slate-400 mt-0.5">Riwayat akan terisi otomatis saat kulakan PO diterima atau pesanan kasir diproses.</p>
                    </div>
                `:$.map(y=>{const I=y.type==="in",R=new Date(y.date).toLocaleDateString("id-ID",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"});return`
                        <div class="p-3.5 sm:p-4 rounded-2xl border transition-all bg-white dark:bg-slate-800 border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                            <div class="flex items-start gap-3 min-w-0">
                                <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-sm shrink-0" style="${I?"background-color: #ecfdf5; color: #059669; border: 1px solid #a7f3d0;":"background-color: #fff1f2; color: #e11d48; border: 1px solid #fecdd3;"}">
                                    <i class="fa-solid ${I?"fa-arrow-down-to-bracket":"fa-arrow-up-from-bracket"}"></i>
                                </div>
                                <div class="min-w-0">
                                    <div class="flex items-center gap-2 flex-wrap">
                                        <span class="px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-wider shadow-2xs" style="${I?"background-color: #059669; color: #ffffff;":"background-color: #e11d48; color: #ffffff;"}">
                                            ${I?"Masuk":"Keluar"}
                                        </span>
                                        <span class="font-black text-xs sm:text-sm text-slate-800 dark:text-white font-mono">${p(y.refNo)}</span>
                                        <span class="text-[10px] text-slate-400 font-medium">• ${R}</span>
                                    </div>
                                    <p class="text-[11px] text-slate-600 dark:text-slate-300 mt-1 font-medium truncate">
                                        ${p(y.title)} • <span class="text-slate-500 font-bold">${p(y.party)}</span>
                                    </p>
                                    <p class="text-[10px] text-slate-400 mt-0.5">
                                        Lokasi: <b class="text-slate-700 dark:text-slate-300">${p(y.location)}</b> ${y.notes?`• ${p(y.notes)}`:""}
                                    </p>
                                </div>
                            </div>
                            <div class="text-left sm:text-right shrink-0 border-t sm:border-t-0 pt-2 sm:pt-0 w-full sm:w-auto border-slate-100 dark:border-slate-700 flex sm:flex-col justify-between sm:justify-center items-center sm:items-end">
                                <span class="text-base sm:text-lg font-black font-mono" style="${I?"color: #059669;":"color: #e11d48;"}">
                                    ${I?`+${y.qty}`:`-${y.qty}`} <span class="text-xs font-bold text-slate-400">${p(y.unit)}</span>
                                </span>
                                ${y.price>0?`<span class="text-[10px] text-slate-400 block font-mono">@ ${f(y.price)}</span>`:""}
                            </div>
                        </div>
                    `}).join("")}
            </div>
        </div>
        `}
        </div>

        <!-- 4. FOOTER MODAL (SOLID PINNED / NON-SCROLLING) -->
        <div class="shrink-0 px-5 sm:px-6 py-3 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between z-10">
            <div class="flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400">
                <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    <i class="fa-solid fa-box text-[10px] text-slate-400"></i>
                    <span>Sisa Stok Fisik: <b class="text-slate-900 dark:text-white font-mono">${A}</b> ${p(e.unit||"pcs")}</span>
                </span>
            </div>
            <button onclick="window.closeProductFifoModal()" class="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-black text-xs transition-all cursor-pointer active:scale-95">
                Tutup
            </button>
        </div>
    `},no=async()=>{const t=k("fifo-new-sup-select")?.value,e=parseFloat(k("fifo-new-sup-price")?.value)||0;if(!t)return x("Pilih supplier terlebih dahulu!");const a=(n.products||[]).find(s=>String(s.id)===String(Ft));if(!a)return;const r=(n.suppliers||[]).find(s=>String(s.id)===String(t));Hr(a,{supplierId:t,supplierName:r?r.name:"Supplier Rekanan",lastBuyPrice:e,isPrimary:!1}),L("Menghubungkan Supplier...");try{await P.collection("freshmart").doc("cms_data").collection("products").doc(a.id.toString()).update({suppliers:a.suppliers,supplierId:a.supplierId}),C(),x("Supplier berhasil dihubungkan ke produk!"),Re(),window.rAdmItms?.("products")}catch(s){C(),x("Gagal menghubungkan supplier: "+s.message)}},co=async t=>{const e=(n.products||[]).find(a=>String(a.id)===String(Ft));if(e){Gr(e,t),L("Memperbarui Supplier Utama...");try{await P.collection("freshmart").doc("cms_data").collection("products").doc(e.id.toString()).update({suppliers:e.suppliers,supplierId:e.supplierId}),C(),x("Supplier utama berhasil diubah! ⭐"),Re(),window.rAdmItms?.("products")}catch(a){C(),x("Gagal mengubah supplier: "+a.message)}}},po=t=>{Ce=Math.max(1,parseInt(t,10)||1),Re()},mo=async t=>{const e=(n.products||[]).find(o=>String(o.id)===String(t));if(!e)return x("Produk tidak ditemukan!");Zt(e,n.suppliers||[]);const a=Number(e.warehouseStock)||0;if(a<=0)return x("Stok gudang cadangan kosong (0)!");const r=await(typeof window.customPrompt=="function"?window.customPrompt(`Pindahkan Stok ke Rak Toko (Tersedia di Gudang: ${a} ${e.unit||"pcs"}):`,String(Math.min(a,10))):Promise.resolve(null));if(!r)return;const s=parseFloat(r)||0;if(s<=0)return x("Jumlah yang dimasukkan tidak valid!");if(s>a)return x(`Jumlah melebihi stok gudang (maksimal ${a})!`);L("Memindahkan stok ke rak toko...");try{const o=Vr(e,"warehouse","store",s);if(!o.success)throw new Error(o.error||"Gagal memindahkan stok");await P.collection("freshmart").doc("cms_data").collection("products").doc(e.id.toString()).update({storeStock:e.storeStock,warehouseStock:e.warehouseStock,stock:e.stock,stockBatches:e.stockBatches||[]}),C(),x(`Sukses memindahkan ${s} ${e.unit||"pcs"} ke rak toko!`),Re(),window.rAdmItms?.("products")}catch(o){C(),x("Gagal memindahkan stok: "+o.message)}};window.openProductFifoModal=ar;window.closeProductFifoModal=io;window.switchFifoTab=ro;window.setLedgerFilter=oo;window.getProductMutationLedger=tr;window.handleLinkFifoSupplier=no;window.handleSetFifoPrimarySupplier=co;window.handleFifoSimulateChange=po;window.quickTransferWarehouseToStore=mo;let ut=null;const We=async t=>{if(!t||!t.length)return;let e=n.productOrder&&n.productOrder.length?[...n.productOrder]:(n.products||[]).map(o=>String(o.id));const a=new Set(e);(n.products||[]).forEach(o=>{const l=String(o.id);a.has(l)||(e.push(l),a.add(l))});const r=new Set(t),s=[];e.forEach((o,l)=>{r.has(o)&&s.push(l)}),t.forEach((o,l)=>{l<s.length&&(e[s[l]]=o)}),n.productOrder=e,Ya(n.products);try{await(typeof _=="function"?_:window.saveApp||(async()=>{}))(["productOrder"]),x("Urutan produk berhasil disimpan!")}catch(o){console.warn("Gagal simpan urutan produk:",o)}rAdmItms("products")};window.applyNewProductOrder=We;window.moveProductOrder=async(t,e)=>{const a=String(t),r=[...n.products||[]],s=(pt||window.aSq||"").toLowerCase().trim(),o=s.replace(/^\][a-zA-Z0-9]{2}/,"").trim()||s,l=r.filter(m=>{const u=String(m.name||m.title||m.bankName||m.code||""),g=String(m.sku||""),h=String(m.barcode||""),v=String(m.phone||""),w=String(m.id||""),S=`sku-${w}`;let M=(u+" "+g+" "+h+" "+v+" "+w+" "+S).toLowerCase().includes(o);return!M&&m.variants&&(M=m.variants.some((D,A)=>{const $=String(D.sku||"").toLowerCase(),y=String(D.barcode||"").toLowerCase(),I=`${g||w}-${A+1}`.toLowerCase();return $&&$.includes(o)||y&&y.includes(o)||I.includes(o)})),M}),i=l.findIndex(m=>String(m.id)===a);if(i===-1)return;const d=i+e;if(d<0||d>=l.length)return;const c=l.map(m=>String(m.id)),b=c[i];c[i]=c[d],c[d]=b,await We(c)};window.jumpProductOrder=async t=>{const e=String(t),a=[...n.products||[]],r=(pt||window.aSq||"").toLowerCase(),s=a.filter(d=>{let c=(d.name||d.title||d.bankName||d.code||d.sku||d.phone||"").toLowerCase().includes(r);return!c&&d.variants&&(c=d.variants.some(b=>b.sku&&b.sku.toLowerCase().includes(r))),c}),o=s.findIndex(d=>String(d.id)===e);if(o===-1)return;const l=s[o],i=typeof window.customPrompt=="function"?window.customPrompt:null;i&&i(`Pindahkan urutan "${l.name}" (1 - ${s.length}):`,String(o+1),async d=>{if(!d)return;const c=parseInt(d,10);if(isNaN(c)||c<1||c>s.length)return x(`Nomor urut harus antara 1 sampai ${s.length}`);const b=c-1;if(b===o)return;const m=s.map(g=>String(g.id)),[u]=m.splice(o,1);m.splice(b,0,u),await We(m)})};window.autoGroupProductsByCategory=async()=>{window.showConfirm?.("Rapikan per Kategori","Susun produk otomatis berdasarkan Kategori dan Jenis (Sub-Kategori) agar produk sejenis (seperti semen, paku, cat) berkelompok rapi?",async()=>{const t=[...n.products||[]];t.sort((a,r)=>{const s=(a.category||"").toLowerCase(),o=(r.category||"").toLowerCase();if(s!==o)return s.localeCompare(o);const l=(a.subCategory||"").toLowerCase(),i=(r.subCategory||"").toLowerCase();return l!==i?l.localeCompare(i):(a.name||"").localeCompare(r.name||"")});const e=t.map(a=>String(a.id));await We(e),x("Produk berhasil dirapikan per kategori!")},"Ya, Rapikan",!1)};window.toggleProductOrderMenu=t=>{t&&t.stopPropagation();const e=k("admin-product-order-dropdown");e&&e.classList.toggle("hidden")};window.sortProductsQuick=async t=>{const e=k("admin-product-order-dropdown");e&&e.classList.add("hidden");const a=[...n.products||[]];t==="az"?a.sort((s,o)=>(s.name||"").localeCompare(o.name||"")):t==="za"?a.sort((s,o)=>(o.name||"").localeCompare(s.name||"")):t==="price_low"?a.sort((s,o)=>(parseFloat(s.price)||0)-(parseFloat(o.price)||0)):t==="price_high"?a.sort((s,o)=>(parseFloat(o.price)||0)-(parseFloat(s.price)||0)):t==="reset_newest"&&a.sort((s,o)=>(o.id||0)-(s.id||0));const r=a.map(s=>String(s.id));await We(r)};typeof document<"u"&&document.addEventListener("click",t=>{const e=k("admin-product-order-dropdown-wrap"),a=k("admin-product-order-dropdown");e&&a&&!e.contains(t.target)&&a.classList.add("hidden")});const bo=()=>{const t=k("admin-list-container");if(!t)return;if(ut){try{ut.destroy()}catch{}ut=null}(dt||window.cTab||"products")==="products"&&(ut=new Jr(t,{handle:".product-drag-handle",animation:200,ghostClass:"opacity-30",chosenClass:"ring-2",dragClass:"shadow-2xl",forceFallback:!1,onEnd:async a=>{if(a.oldIndex===a.newIndex)return;const s=Array.from(t.querySelectorAll("[data-id]")).map(o=>o.getAttribute("data-id")).filter(Boolean);await We(s)}}))};window.rAdmL=t=>{ct(t),typeof window.setCTab=="function"&&window.setCTab(t),window.cTab=t;const e=t==="products"?'<div id="admin-product-stats" class="mb-5"></div>':"",a=t==="colors"?`
        <div class="flex gap-2 mb-4 flex-wrap">
            <button onclick="openImportFromProductsModal()" class="h-11 px-4 rounded-xl primary-bg-soft border primary-border text-[var(--color-primary)] font-bold text-xs uppercase tracking-widest hover:primary-bg hover:text-white transition-all active:scale-95 shadow-2xs flex items-center gap-2 cursor-pointer"><i class="fa-solid fa-box-archive"></i> Impor dari Semua Produk</button>
        </div>`:"",r=t==="products"?`
        <div class="flex items-center justify-between gap-3 flex-wrap mb-4 px-1">
            <div class="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 font-bold text-[11px]">
                <i class="fa-solid fa-up-down-left-right text-[var(--color-primary)]"></i>
                <span class="hidden sm:inline">Tahan &amp; geser pegangan <i class="fa-solid fa-grip-vertical opacity-60"></i> atau panah untuk mengatur urutan produk.</span>
                <span class="sm:hidden">Geser <i class="fa-solid fa-grip-vertical opacity-60"></i> / panah untuk atur urutan.</span>
            </div>
            <div class="flex items-center gap-2 ml-auto flex-wrap">
                ${(n.suppliers||[]).length>0?`
                    <div class="relative inline-block">
                        <select onchange="window.adminSupplierFilter = this.value; rAdmItms('products');" class="h-10 px-3.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold text-xs border border-slate-200/90 dark:border-slate-700/80 cursor-pointer shadow-2xs hover:bg-slate-50 transition-colors">
                            <option value="">Semua Supplier (${(n.suppliers||[]).length})</option>
                            ${(n.suppliers||[]).map(o=>`<option value="${o.id}" ${window.adminSupplierFilter===String(o.id)?"selected":""}>${p(o.name)}</option>`).join("")}
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
        </div>`:"",s=t==="banners"?`
        <div class="mb-5 p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white border border-[rgba(var(--color-primary-rgb),0.35)] shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div class="flex items-center gap-3.5 min-w-0">
                <div class="relative w-14 h-14 rounded-2xl overflow-hidden border-2 border-white/60 bg-black/40 shrink-0 shadow-inner">
                    <img src="${p(n.store.heroMascotImg||"/putri_mascot_anim.gif")}" onerror="this.onerror=null;this.src='/putri_mascot_3d.jpg';" alt="Maskot" class="w-full h-full object-cover">
                    <div class="absolute bottom-0 inset-x-0 bg-slate-950/85 text-[7px] text-center font-black text-amber-300 py-0.5">SLIDE #0</div>
                </div>
                <div class="min-w-0">
                    <div class="flex items-center gap-2 flex-wrap">
                        <h4 class="font-extrabold text-xs sm:text-sm text-white">Slide #0: Banner Sambutan &amp; Maskot 3D Toko</h4>
                        <span class="px-2 py-0.5 rounded-full text-[8.5px] font-black uppercase ${n.store.showHeroSlide!==!1&&n.store.showHeroSlide!=="false"?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/40":"bg-slate-700 text-slate-400"}">
                            ${n.store.showHeroSlide!==!1&&n.store.showHeroSlide!=="false"?"Aktif Tayang":"Disembunyikan"}
                        </span>
                    </div>
                    <p class="text-[10px] text-slate-300 mt-0.5 line-clamp-2">Ganti foto maskot, ubah status badge 'Siap Melayani', teks sambutan, atau sembunyikan slide utama.</p>
                </div>
            </div>
            <button onclick="if(typeof window.openHeroBannerModal==='function') window.openHeroBannerModal(); else if(typeof window.openSettingForm==='function') window.openSettingForm('profile');" type="button" class="shrink-0 w-full sm:w-auto h-11 px-4 rounded-xl primary-bg hover:opacity-90 text-white font-bold text-xs flex items-center justify-center gap-2 active:scale-95 shadow-sm transition-all cursor-pointer">
                <i class="fa-solid fa-wand-magic-sparkles"></i> Kelola Maskot &amp; Sambutan
            </button>
        </div>`:"";j("admin-content",`
        <div class="max-w-5xl mx-auto pb-16">
        ${e}
        ${s}
        <div class="mb-5">
            ${a}
            <div class="flex flex-col sm:flex-row gap-2.5 sm:gap-3 items-stretch sm:items-center mb-4">
                <div class="relative flex-1">
                    <i class="fa-solid fa-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm"></i>
                    <input autocomplete='off' id="admin-search-input" name='cari_admin_q' placeholder="Cari produk, SKU, varian, barcode..." oninput="(window.setASq ? window.setASq(this.value.toLowerCase()) : (window.aSq=this.value.toLowerCase()));rAdmItms('${t}')" class="w-full h-12 bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700/80 rounded-2xl pl-11 pr-12 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15 shadow-2xs transition-all" >
                    <button onclick="openCameraScanner('admin-search-input')" class="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-slate-400 hover:text-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.08)] rounded-xl transition-all" title="Scan Barcode"><i class="fa-solid fa-qrcode text-sm"></i></button>
                </div>
                <div class="flex items-center gap-2 shrink-0">
                    ${t==="products"?`
                    <button onclick="openAdminTab('stock_opname')" class="h-12 px-4 rounded-2xl border font-bold text-xs flex items-center gap-2 shadow-2xs active:scale-95 transition-all shrink-0 cursor-pointer hover:opacity-90" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25);" title="Stock Opname (Audit Fisik Stok)">
                        <i class="fa-solid fa-clipboard-check text-sm"></i>
                        <span class="hidden sm:inline">Stock Opname</span>
                    </button>`:""}
                    <button onclick="oAAdd()" class="h-12 px-5 rounded-2xl text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-glow active:scale-95 transition-all shrink-0 cursor-pointer hover:opacity-95" style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                        <i class="fa-solid fa-plus text-xs"></i>
                        <span>Tambah ${t==="products"?"Produk":t==="categories"?"Kategori":t==="brands"?"Merek":"Data"}</span>
                    </button>
                </div>
            </div>
            ${r}
        </div>
        <div id="admin-list-container" class="space-y-3 pb-12"></div>
        </div>
    `),rAdmItms(t)};window.rAdmItms=t=>{t&&(ct(t),typeof window.setCTab=="function"&&window.setCTab(t),window.cTab=t);const e=k("admin-list-container"),a=e?e.closest(".scroll-content"):null,r=a?a.scrollTop:0;if(t==="products"&&k("admin-product-stats")){const d=Pt();j("admin-product-stats",`
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <div class="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Produk Aktif</span>
                        <div class="w-9 h-9 rounded-xl flex items-center justify-center text-xs text-white shadow-xs shrink-0" style="background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));">
                            <i class="fa-solid fa-box-open"></i>
                        </div>
                    </div>
                    <p class="text-xl sm:text-2xl font-black text-slate-800 dark:text-white tracking-tight">${d.activeProd}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">Katalog Tayang di Etalase</p>
                </div>

                <div class="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-[10px] font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Varian Aktif</span>
                        <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white flex items-center justify-center text-xs shadow-xs shrink-0">
                            <i class="fa-solid fa-layer-group"></i>
                        </div>
                    </div>
                    <p class="text-xl sm:text-2xl font-black text-indigo-600 dark:text-indigo-400 tracking-tight">${d.activeVar}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">Opsi Rasa, Ukuran &amp; Warna</p>
                </div>

                <div class="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-[10px] font-black uppercase tracking-wider text-amber-600 dark:text-amber-400">Kosong / Nonaktif</span>
                        <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-white flex items-center justify-center text-xs shadow-xs shrink-0">
                            <i class="fa-solid fa-triangle-exclamation"></i>
                        </div>
                    </div>
                    <p class="text-xl sm:text-2xl font-black text-amber-600 dark:text-amber-400 tracking-tight">${d.inactiveProd+d.inactiveVar}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">${d.inactiveProd} Produk, ${d.inactiveVar} Varian</p>
                </div>

                <div class="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-[10px] font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Valuasi Stok</span>
                        <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center text-xs shadow-xs shrink-0">
                            <i class="fa-solid fa-warehouse"></i>
                        </div>
                    </div>
                    <div>
                        <p class="text-xs font-bold text-slate-500 dark:text-slate-400">Modal: <b class="text-slate-800 dark:text-slate-200">${f(d.assetHpp)}</b></p>
                        <p class="text-xs font-bold text-slate-500 dark:text-slate-400 mt-0.5">Jual: <b class="text-slate-800 dark:text-slate-200">${f(d.assetJual)}</b></p>
                    </div>
                    <button type="button" onclick="if(window.openAdminTab){window.openAdminTab('reports'); setTimeout(() => window.switchReportTab && window.switchReportTab('stock'), 100);}" class="mt-2 inline-flex items-center gap-1.5 text-[10px] font-black text-[var(--color-primary)] hover:underline cursor-pointer transition-colors">
                        <i class="fa-solid fa-chart-pie text-[10px]"></i>
                        <span>Laporan Stok Lengkap &rarr;</span>
                    </button>
                </div>
            </div>
        `)}let s=[...n[t]||[]];t==="products"?Ya(s):s.sort((d,c)=>(c.id||0)-(d.id||0));const o=(pt||window.aSq||"").toLowerCase(),l=window.adminSupplierFilter||"";let i=s.filter(d=>{if(t==="products"&&l&&!(String(d.supplierId)===String(l)||Array.isArray(d.suppliers)&&d.suppliers.some(A=>String(A.supplierId)===String(l))))return!1;const c=o.replace(/^\][a-zA-Z0-9]{2}/,"").trim()||o,b=c.replace(/^0+/,""),m=c.replace(/[\s\-_.]/g,""),u=String(d.name||d.title||d.bankName||d.code||""),g=String(d.sku||""),h=String(d.barcode||""),v=String(d.phone||""),w=String(d.id||""),S=`sku-${w}`;let M=(u+" "+g+" "+h+" "+v+" "+w+" "+S).toLowerCase().includes(c);if(!M&&b&&h&&(M=h.replace(/^0+/,"").toLowerCase()===b),!M&&m&&g&&(M=g.replace(/[\s\-_.]/g,"").toLowerCase()===m),t==="products"&&!M){if(d.supplierId&&(n.suppliers||[]).length){const D=n.suppliers.find(A=>String(A.id)===String(d.supplierId));D&&String(D.name||"").toLowerCase().includes(c)&&(M=!0)}!M&&Array.isArray(d.suppliers)&&(M=d.suppliers.some(D=>String(D.supplierName||"").toLowerCase().includes(c))),!M&&Array.isArray(d.variants)&&(M=d.variants.some((D,A)=>{const $=String(D.sku||"").toLowerCase(),y=String(D.barcode||"").toLowerCase(),I=`${g||w}-${A+1}`.toLowerCase(),R=y.replace(/^0+/,"");return $&&$.includes(c)||y&&(y.includes(c)||b&&R===b)||I.includes(c)}))}return M});if(!i.length)return j("admin-list-container",'<div class="flex flex-col items-center justify-center py-20 text-slate-400 font-bold bg-white dark:bg-slate-800 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm text-center"><i class="fa-solid fa-folder-open text-5xl mb-4 opacity-30"></i>Data kosong</div>');j("admin-list-container",i.map((d,c)=>{if(t==="categories"){const D=(n.products||[]).filter(E=>E.category===d.name),A=D.length,$=Array.isArray(d.subCategories)?d.subCategories:[],I=[...new Set(D.map(E=>(E.subCategory||"").trim()).filter(Boolean))].filter(E=>!$.some(W=>W.toLowerCase()===E.toLowerCase())),R=d.img?`<div class="w-14 h-14 sm:w-16 sm:h-16 shrink-0 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-2xl p-1 flex items-center justify-center overflow-hidden"><img loading="lazy" src="${p(d.img)}" alt="${p(d.name)}" class="w-full h-full object-contain" onerror="this.onerror=null;this.parentElement.innerHTML='<div class=\\'w-full h-full flex items-center justify-center text-slate-400 font-bold text-xl\\'><i class=\\'fa-solid fa-shapes\\'></i></div>';"></div>`:'<div class="w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-2xl flex items-center justify-center text-xl font-bold border border-slate-200 dark:border-slate-700" style="background: rgba(var(--color-primary-rgb),0.1); color: var(--color-primary)"><i class="fa-solid fa-layer-group"></i></div>';return`
            <div data-id="${d.id}" class="category-admin-card p-4 sm:p-5 md:p-6 flex flex-col gap-3.5 rounded-2xl sm:rounded-[1.5rem] border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800 shadow-2xs hover:shadow-md hover:border-[var(--color-primary)]/40 transition-all duration-200">
                <!-- Header: Ikon + Nama Kategori + Badge Jumlah + Tombol Aksi -->
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div class="flex items-center gap-3.5 min-w-0">
                        ${R}
                        <div class="min-w-0 flex flex-col justify-center">
                            <div class="flex items-center gap-2 flex-wrap">
                                <h4 class="text-sm sm:text-base font-black text-slate-800 dark:text-slate-100 uppercase tracking-wide leading-tight">${p(d.name)}</h4>
                                <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                                    <i class="fa-solid fa-boxes-stacked mr-1 text-[9px] text-[var(--color-primary)]"></i>${A} Produk
                                </span>
                                <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.2)]">
                                    <i class="fa-solid fa-shapes mr-1 text-[9px]"></i>${$.length} Sub-Kategori
                                </span>
                            </div>
                            <p class="text-[11px] text-slate-400 mt-0.5 font-medium">Master Kategori &amp; Pengelompokan Jenis Produk</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-2 self-end sm:self-center shrink-0">
                        <button type="button" onclick="event.stopPropagation(); window.promptAddSubCategory('${d.id}')" class="px-3.5 py-2 rounded-xl primary-bg-soft border primary-border text-[var(--color-primary)] hover:primary-bg hover:text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-2xs active:scale-95 cursor-pointer" title="Tambah Sub-Kategori ke ${p(d.name)}">
                            <i class="fa-solid fa-plus text-[10px]"></i>
                            <span>Sub-Kategori</span>
                        </button>
                        <button type="button" onclick="event.stopPropagation(); oAEd('categories','${d.id}')" class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-50 border border-slate-200 text-slate-500 flex items-center justify-center hover:bg-slate-500 hover:text-white dark:bg-slate-700 dark:border-slate-600 dark:text-slate-300 transition-all active:scale-95 shadow-sm cursor-pointer" title="Edit Kategori">
                            <i class="fa-solid fa-pen text-xs sm:text-sm"></i>
                        </button>
                        <button type="button" onclick="event.stopPropagation(); oADel('categories','${d.id}')" class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-rose-50 border border-rose-200 text-rose-500 flex items-center justify-center hover:bg-rose-500 hover:text-white dark:bg-rose-900/30 dark:border-rose-800 transition-all active:scale-95 shadow-sm cursor-pointer" title="Hapus Kategori">
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
                        ${I.length>0?`
                            <button type="button" onclick="event.stopPropagation(); window.syncSubCategoriesFromProducts('${d.id}')" class="text-[10px] font-bold text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1 cursor-pointer">
                                <i class="fa-solid fa-wand-magic-sparkles text-amber-500"></i>
                                <span>Tarik ${I.length} sub dari produk</span>
                            </button>
                        `:""}
                    </div>

                    <div class="flex flex-wrap items-center gap-2">
                        ${$.length===0?`
                            <div class="text-xs text-slate-400 italic py-1 flex items-center gap-2">
                                <i class="fa-solid fa-circle-info text-slate-300 dark:text-slate-600"></i>
                                <span>Belum ada sub-kategori. Klik tombol <b>+ Sub-Kategori</b> di atas untuk menambahkan kelompok jenis produk.</span>
                            </div>
                        `:$.map(E=>{const W=D.filter(je=>(je.subCategory||"").trim().toLowerCase()===E.toLowerCase()).length;return`
                            <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-2xs hover:border-[var(--color-primary)]/50 transition-all group">
                                <i class="fa-solid fa-shapes text-[10px] text-[var(--color-primary)]"></i>
                                <span>${p(E)}</span>
                                <span class="text-[10px] font-extrabold px-1.5 py-0.2 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600" title="${W} Produk">${W}</span>
                                <button type="button" onclick="event.stopPropagation(); window.removeCategorySubCategory('${d.id}', '${p(E).replace(/'/g,"\\'")}')" class="text-slate-400 hover:text-rose-500 p-0.5 rounded ml-0.5 transition-colors cursor-pointer" title="Hapus Sub-Kategori '${p(E)}'">
                                    <i class="fa-solid fa-xmark text-[11px]"></i>
                                </button>
                            </span>`}).join("")}
                        <button type="button" onclick="event.stopPropagation(); window.promptAddSubCategory('${d.id}')" class="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-bold border border-dashed border-slate-300 dark:border-slate-600 text-slate-500 dark:text-slate-400 hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.05)] transition-all cursor-pointer">
                            <i class="fa-solid fa-plus text-[9px]"></i>
                            <span>Tambah Sub</span>
                        </button>
                    </div>
                </div>
            </div>`}let b=t==="products",m=b&&(d.isActive==="false"||d.isActive===!1),u=m?"border-rose-200 bg-rose-50/50 dark:border-rose-900/50 dark:bg-rose-900/10":"border-slate-200/90 bg-white/95 dark:border-slate-700/80 dark:bg-slate-800/90",g=m?"text-slate-500 dark:text-slate-400 line-through":"text-slate-800 dark:text-slate-100";const h=Nr(d,{size:"thumb"});let w=!!(d.img&&typeof d.img=="string"&&d.img.trim()&&!Rr(d.img))?`<div class="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-white border border-slate-100 dark:border-slate-700/60 rounded-2xl p-1.5 flex items-center justify-center overflow-hidden"><img loading="lazy" src="${p(d.img)}" alt="${p(d.name)}" onerror="this.onerror=null;this.style.display='none';if(this.nextElementSibling)this.nextElementSibling.style.display='flex';" class="w-full h-full object-contain ${m?"grayscale opacity-50":""}"><div class="w-full h-full" style="display:none">${h}</div></div>`:`<div class="w-16 h-16 sm:w-20 sm:h-20 shrink-0 border border-slate-100 dark:border-slate-700/60 rounded-2xl overflow-hidden flex items-center justify-center">${h}</div>`;const S=window.isAdm||window.__localIsAdm,M=n.store.useStock===!0||n.store.useStock==="true";return`
        <div data-id="${d.id}" class="product-admin-card p-4 sm:p-5 rounded-2xl sm:rounded-3xl border ${u} shadow-2xs hover:shadow-md hover:border-[var(--color-primary)]/40 transition-all flex flex-col gap-3.5 group">
            <!-- BARIS 1: IDENTITAS PRODUK, THUMBNAIL, STOK & FIFO -->
            <div class="flex items-start gap-3 sm:gap-4 min-w-0">
                <!-- Drag Handle & Order Badge -->
                ${b?`
                    <div class="flex flex-col items-center justify-center shrink-0 gap-1 select-none pt-0.5" onclick="event.stopPropagation();">
                        <div class="product-drag-handle w-6 h-6 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700/60 flex items-center justify-center cursor-grab active:cursor-grabbing text-slate-400 hover:text-[var(--color-primary)] transition-colors" title="Tahan &amp; geser untuk mengatur urutan">
                            <i class="fa-solid fa-grip-vertical text-xs"></i>
                        </div>
                        <button class="w-6 h-6 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-700/80 text-slate-600 dark:text-slate-300 text-[9px] flex items-center justify-center transition-all active:scale-90 ${c===0?"opacity-25 pointer-events-none":""}" onclick="window.moveProductOrder('${d.id}', -1)" title="Geser Naik 1 Posisi">
                            <i class="fa-solid fa-chevron-up"></i>
                        </button>
                        <button class="text-[9px] font-mono font-black px-1.5 py-0.5 rounded-md primary-bg-soft border primary-border text-[var(--color-primary)] transition-all" onclick="window.jumpProductOrder('${d.id}')" title="Klik untuk lompat ke nomor urut tertentu">
                            #${c+1}
                        </button>
                        <button class="w-6 h-6 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-700/80 text-slate-600 dark:text-slate-300 text-[9px] flex items-center justify-center transition-all active:scale-90 ${c===i.length-1?"opacity-25 pointer-events-none":""}" onclick="window.moveProductOrder('${d.id}', 1)" title="Geser Turun 1 Posisi">
                            <i class="fa-solid fa-chevron-down"></i>
                        </button>
                    </div>
                `:""}

                <!-- Thumbnail -->
                ${w}

                <!-- Info Teks Produk -->
                <div class="min-w-0 flex-1 flex flex-col justify-center">
                    <h4 class="text-sm sm:text-base font-black ${g} line-clamp-2 leading-snug tracking-tight mb-1 cursor-pointer hover:text-[var(--color-primary)] transition-colors" onclick="oAEd('${t}','${d.id}')">
                        ${p(d.name||d.title||d.bankName||d.code||"Item")}
                    </h4>

                    ${b?`
                        <div class="flex items-center gap-2 flex-wrap mb-1.5">
                            <span class="text-base sm:text-lg font-black text-[var(--color-primary)] tracking-tight">${f(d.price)}</span>
                            <span class="inline-flex items-center gap-1 font-mono text-[9px] font-bold text-slate-500 dark:text-slate-400 bg-slate-100 hover:bg-indigo-50 dark:bg-slate-700/80 dark:hover:bg-indigo-950/50 hover:text-indigo-600 dark:hover:text-indigo-300 px-2 py-0.5 rounded-md border border-slate-200/60 hover:border-indigo-300 dark:border-slate-600/60 transition-colors cursor-pointer" onclick="event.stopPropagation(); window.openProductBarcodeLabelModal?.('${d.id}')" title="Klik untuk Cetak Label Barcode &amp; Harga">
                                <i class="fa-solid fa-barcode text-[8.5px]"></i> ${p(d.sku||"TANPA SKU")}
                            </span>
                            ${d.variants&&d.variants.length>0?`
                                <span class="inline-flex items-center gap-1 text-[9px] font-black text-indigo-600 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/50 px-2 py-0.5 rounded-md border border-indigo-200 dark:border-indigo-800" title="${d.variants.length} Varian">
                                    <i class="fa-solid fa-layer-group text-[8.5px]"></i> ${d.variants.length} Varian
                                </span>
                            `:""}
                        </div>
                    `:""}

                    <!-- Badges Baris 2: Stok, HPP, Terjual & FIFO -->
                    <div class="flex items-center gap-1.5 flex-wrap text-xs">
                        ${b&&S?(()=>{const D=Wr(d,n.store);if(!D.isManaged)return"";if(D.isOutOfStock)return'<span class="inline-flex items-center gap-1 text-[9.5px] font-bold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 px-2 py-0.5 rounded-md border border-rose-200/80 dark:border-rose-900/60"><i class="fa-solid fa-boxes-stacked mr-0.5"></i>Habis (0)</span>';const A=D.stock!=null?String(D.stock).replace(/\.?0+$/,""):"0";return`<span class="inline-flex items-center gap-1 text-[9.5px] font-bold ${D.isLowStock?"text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800":"text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800"} px-2 py-0.5 rounded-md border"><i class="fa-solid fa-boxes-stacked mr-0.5"></i>Stok: ${A}</span>`})():""}

                        ${b&&S&&d.hpp?`
                            <span class="inline-flex items-center gap-1 text-[9.5px] font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30 px-2 py-0.5 rounded-md border border-amber-200/60 dark:border-amber-800/60" title="Harga Modal (HPP)">
                                <i class="fa-solid fa-coins mr-0.5"></i>HPP: ${f(d.hpp)}
                            </span>
                        `:""}

                        ${b?(()=>{const D=d.variants&&d.variants.length?d.variants.reduce((A,$)=>A+(parseFloat($.totalSold)||0),0):parseFloat(d.totalSold)||0;return D>0?`
                                <span class="inline-flex items-center gap-1 text-[9.5px] font-bold text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/30 px-2 py-0.5 rounded-md border border-orange-200/60 dark:border-orange-800/60">
                                    <i class="fa-solid fa-fire mr-0.5"></i>Terjual: ${D}
                                </span>`:""})():""}

                        ${b?(()=>{const D=Array.isArray(d.suppliers)&&d.suppliers.length>0?d.suppliers:d.supplierId?[{supplierId:d.supplierId,isPrimary:!0}]:[];if(!D.length)return"";const A=D.find(E=>E.isPrimary)||D[0],$=(n.suppliers||[]).find(E=>String(E.id)===String(A.supplierId)),y=$?$.name:A.supplierName||"Supplier",I=D.length-1,R=Array.isArray(d.stockBatches)?d.stockBatches.filter(E=>(parseFloat(E.remainingQty)||0)>0).length:0;return`
                                <button type="button" onclick="event.stopPropagation(); window.openProductFifoModal?.('${d.id}');" class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[9.5px] font-bold text-teal-700 dark:text-teal-300 bg-teal-50 hover:bg-teal-100 dark:bg-teal-950/40 dark:hover:bg-teal-900/60 border border-teal-200 dark:border-teal-800 transition-all cursor-pointer shadow-2xs" title="Lihat Rekanan Supplier &amp; Antrean Batch FIFO">
                                    <i class="fa-solid fa-truck-field text-[8.5px]"></i>
                                    <span class="max-w-[120px] truncate">${p(y)}</span>
                                    ${I>0?`<span class="bg-teal-200 dark:bg-teal-800 text-teal-800 dark:text-teal-200 px-1 py-0.2 rounded text-[8.5px] font-black">+${I}</span>`:""}
                                </button>
                                ${R>0?`
                                    <button type="button" onclick="event.stopPropagation(); window.openProductFifoModal?.('${d.id}');" class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md text-[9px] font-black text-amber-700 dark:text-amber-300 bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 transition-all cursor-pointer" title="Lacak Antrean FIFO">
                                        <i class="fa-solid fa-layer-group text-[8px]"></i>
                                        <span>${R} Batch</span>
                                    </button>
                                `:""}
                            `})():""}

                        ${t==="colors"?`<div class="flex items-center gap-2 mt-1"><div class="w-4 h-4 rounded-full border border-slate-200 dark:border-slate-600 shadow-sm" style="background-color: ${p(d.hex||"transparent")}"></div><p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest"><i class="fa-solid fa-swatchbook mr-1"></i>${p(d.catalog||"Tanpa Katalog")}</p></div>`:""}

                        ${t==="customers"?`
                            <p class="text-xs font-bold text-slate-500 dark:text-slate-400"><i class="fa-brands fa-whatsapp text-emerald-500 mr-1"></i>+${p(d.phone)}</p>
                            <div class="flex items-center gap-1.5 mt-1 flex-wrap">
                                <span class="text-[11px] font-bold text-[var(--color-primary)]"><i class="fa-solid fa-star mr-1"></i>${parseFloat(d.points)||0} Poin</span>
                                ${d.paylaterActive===!0||d.paylaterActive==="true"?`
                                    <span class="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 flex items-center gap-1">
                                        <i class="fa-solid fa-bolt text-emerald-500"></i> PayLater: ${f(Math.max(0,(parseFloat(d.paylaterLimit)||0)-Math.max(0,parseFloat(d.paylaterUsed)||0)))} / ${f(parseFloat(d.paylaterLimit)||0)}
                                    </span>
                                `:`
                                    <span class="px-1.5 py-0.5 rounded text-[8px] font-bold uppercase bg-slate-100 dark:bg-slate-700 text-slate-400">PayLater Off</span>
                                `}
                            </div>
                        `:""}

                        ${t==="rewards"?`<p class="text-sm font-bold text-violet-500"><i class="fa-solid fa-star mr-1"></i>${parseFloat(d.pointsCost)||0} Poin</p><p class="text-[10px] font-bold text-slate-500 mt-0.5"><i class="fa-solid fa-boxes-stacked mr-1"></i>Stok: ${parseFloat(d.stock)||0}</p>`:""}
                    </div>
                </div>
            </div>

            <!-- BARIS 2: UNIFIED NATIVE ACTION BAR (TOUCH-TARGET STANDARD 40px) -->
            <div class="flex items-center justify-between gap-2 pt-3 border-t border-slate-100 dark:border-slate-700/60 flex-wrap">
                <!-- Aksi Status / Restock / Harga Cepat -->
                <div class="flex items-center gap-2 flex-wrap">
                    ${b?m?`<button type="button" class="h-10 px-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-500 hover:text-white dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95 shadow-2xs cursor-pointer" onclick="event.stopPropagation(); toggleProductStatus('${d.id}', true)" title="Aktifkan Kembali Stok Produk"><i class="fa-solid fa-check text-xs"></i><span>Aktifkan</span></button>`:`<button type="button" class="h-10 px-3.5 rounded-xl bg-amber-50 hover:bg-amber-500 hover:text-white dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800 font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95 shadow-2xs cursor-pointer" onclick="event.stopPropagation(); toggleProductStatus('${d.id}', false)" title="Nonaktifkan (Habis)"><i class="fa-solid fa-ban text-xs"></i><span>Nonaktifkan</span></button>`:""}

                    ${b&&M?`
                        <button type="button" class="h-10 px-3.5 rounded-xl primary-bg-soft border primary-border text-[var(--color-primary)] hover:primary-bg hover:text-white font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95 shadow-2xs cursor-pointer" onclick="event.stopPropagation(); openRestockModal('${d.id}')" title="Restock Stok Produk">
                            <i class="fa-solid fa-boxes-stacked text-xs"></i>
                            <span>Restock</span>
                        </button>
                    `:""}

                    ${b?`
                        <button type="button" class="h-10 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700/80 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-600 font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95 shadow-2xs cursor-pointer" onclick="event.stopPropagation(); openQuickPriceModal('${d.id}')" title="Ubah Cepat Harga Jual">
                            <i class="fa-solid fa-tags text-xs"></i>
                            <span class="hidden sm:inline">Harga</span>
                        </button>

                        <button type="button" class="h-10 px-3 rounded-xl bg-indigo-50 hover:bg-indigo-600 hover:text-white dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95 shadow-2xs cursor-pointer" onclick="event.stopPropagation(); window.openProductBarcodeLabelModal?.('${d.id}')" title="Cetak Label Harga &amp; Barcode Barang">
                            <i class="fa-solid fa-barcode text-xs"></i>
                            <span class="hidden sm:inline">Label</span>
                        </button>
                    `:""}

                    ${t==="customers"?`
                        <button type="button" class="h-10 px-3.5 rounded-xl bg-amber-50 hover:bg-amber-500 hover:text-white dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border border-amber-300 dark:border-amber-800 font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95 shadow-2xs cursor-pointer" onclick="event.stopPropagation(); if(typeof window.setCurrentMember==='function') window.setCurrentMember(appData.customers ? appData.customers.find(c=>String(c.id||c.phone)===String('${d.id||d.phone}'))||{name:'${p(d.name)}',phone:'${p(d.phone)}',points:${parseFloat(d.points)||0}} : {name:'${p(d.name)}',phone:'${p(d.phone)}',points:${parseFloat(d.points)||0}}); if(typeof window.openMemberModal==='function') window.openMemberModal();" title="Buka Kartu Member VIP">
                            <i class="fa-solid fa-id-card text-xs"></i>
                            <span>Kartu Member</span>
                        </button>
                    `:""}
                </div>

                <!-- Aksi Utama: Duplikat, Edit, Hapus -->
                <div class="flex items-center gap-2 ml-auto">
                    ${b?`
                        <button type="button" class="h-10 w-10 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700/80 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-600 flex items-center justify-center transition-all active:scale-95 shadow-2xs cursor-pointer" onclick="event.stopPropagation(); duplicateProduct('${d.id}')" title="Duplikat Produk">
                            <i class="fa-regular fa-copy text-xs"></i>
                        </button>
                    `:""}

                    <button type="button" class="h-10 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700/80 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-600 font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95 shadow-2xs cursor-pointer" onclick="event.stopPropagation(); oAEd('${t}','${d.id}')" title="Edit Data Lengkap">
                        <i class="fa-solid fa-pen text-xs"></i>
                        <span>Edit</span>
                    </button>

                    <button type="button" class="h-10 w-10 rounded-xl bg-rose-50 hover:bg-rose-500 hover:text-white dark:bg-rose-950/40 text-rose-500 border border-rose-200 dark:border-rose-900 flex items-center justify-center transition-all active:scale-95 shadow-2xs cursor-pointer" onclick="event.stopPropagation(); oADel('${t}','${d.id}')" title="Hapus Permanen">
                        <i class="fa-solid fa-trash text-xs"></i>
                    </button>
                </div>
            </div>
        </div>`}).join("")),t==="products"&&bo(),a&&requestAnimationFrame(()=>{a.scrollTop=r})};window.promptAddSubCategory=async t=>{const e=(n.categories||[]).find(o=>String(o.id)===String(t));if(!e)return;const r=await(typeof kt=="function"?kt:window.customPrompt||prompt)(`Tambah Sub-Kategori Baru untuk '${e.name}':`,"");if(!r||!r.trim())return;const s=r.trim();if(e.subCategories=Array.isArray(e.subCategories)?e.subCategories:[],e.subCategories.some(o=>o.toLowerCase()===s.toLowerCase())){x("Sub-kategori ini sudah ada!");return}e.subCategories.push(s);try{await(typeof _=="function"?_:window.saveApp||(async()=>{}))(["categories"]),x(`Sub-kategori '${s}' berhasil ditambahkan ke '${e.name}'!`),window.rAdmItms?.("categories")}catch(o){console.error("Gagal simpan subkategori:",o),x("Gagal menyimpan sub-kategori: "+(o.message||""))}};window.removeCategorySubCategory=async(t,e)=>{const a=(n.categories||[]).find(o=>String(o.id)===String(t));if(!a)return;const r=typeof Ka=="function"?Ka:window.showConfirm,s=async()=>{a.subCategories=(a.subCategories||[]).filter(o=>o.toLowerCase()!==e.toLowerCase());try{await(typeof _=="function"?_:window.saveApp||(async()=>{}))(["categories"]),x(`Sub-kategori '${e}' berhasil dihapus!`),window.rAdmItms?.("categories")}catch(o){console.error("Gagal hapus subkategori:",o),x("Gagal menghapus sub-kategori: "+(o.message||""))}};r?r("Hapus Sub-Kategori",`Hapus sub-kategori '${e}' dari kelompok '${a.name}'? Produk yang sudah ada tidak akan terhapus.`,s,"Ya, Hapus",!0):await s()};window.syncSubCategoriesFromProducts=async t=>{const e=(n.categories||[]).find(s=>String(s.id)===String(t));if(!e)return;const a=[...new Set((n.products||[]).filter(s=>s.category===e.name&&s.subCategory).map(s=>s.subCategory.trim()))];if(!a.length){x("Tidak ditemukan sub-kategori di produk untuk kategori ini.");return}e.subCategories=Array.isArray(e.subCategories)?e.subCategories:[];let r=0;if(a.forEach(s=>{e.subCategories.some(o=>o.toLowerCase()===s.toLowerCase())||(e.subCategories.push(s),r++)}),r===0){x("Semua sub-kategori produk sudah terdaftar di master!");return}try{await(typeof _=="function"?_:window.saveApp||(async()=>{}))(["categories"]),x(`${r} sub-kategori berhasil disinkronkan dari produk!`),window.rAdmItms?.("categories")}catch(s){console.error("Gagal sinkron subkategori:",s),x("Gagal sinkron sub-kategori: "+(s.message||""))}};window.openProductFifoModal=ar;function uo(t){if(!t)return"";const e=t.match(/\/d\/([a-zA-Z0-9_-]+)/);return e?`https://drive.google.com/file/d/${e[1]}/preview`:t}const xo=t=>window.pushModalHistory?.(t);window.oAAdd=()=>{window.oAEd(dt||window.cTab||"products",null)};window.oAEd=(t,e)=>{ct(t),typeof window.setCTab=="function"&&window.setCTab(t),window.cTab=t,wa(e),typeof window.setEId=="function"&&window.setEId(e),window.eId=e;let a=e!=null&&e!==""?(n[t]||[]).find(c=>c&&c.id!=null&&String(c.id)===String(e)):null;Le("admin-modal-title",e?"Edit Data":"Tambah Data");let r=$t[t]||[],s="";if(t==="products"&&(a&&a.storeStock===void 0&&a.warehouseStock===void 0&&(a.storeStock=a.stock!==void 0?a.stock:0,a.warehouseStock=0),ze(a&&a.variants?JSON.parse(JSON.stringify(a.variants)):[]),_t(a&&a.wholesale?JSON.parse(JSON.stringify(a.wholesale)):[]),Kt(a&&a.specTable?JSON.parse(JSON.stringify(a.specTable)):[]),mt(a&&a.multiUnits?JSON.parse(JSON.stringify(a.multiUnits)):[])),t==="categories"){const c=Array.isArray(a?.subCategories)?[...a.subCategories]:typeof a?.subCategories=="string"?a.subCategories.split(",").map(b=>b.trim()).filter(Boolean):[];Je(c)}const o=["textarea","richtext","variants_builder","wholesale_builder","multi_units_builder","spec_table_builder","subcategories_builder"],l=["img","desc","name","isActive","tag","poTime","video"],i=c=>o.includes(c.type)||l.includes(c.key);r.forEach(c=>{let b=a?c.type==="number"&&a[c.key]!==void 0?a[c.key]:a[c.key]||"":"";const m=i(c)?"lg:col-span-2":"";if(s+=`<div class="flex flex-col gap-1.5 ${m}"><label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest flex items-center gap-1.5">${c.label}</label>`,c.type==="textarea")s+=`<textarea autocomplete='off' id="af-${c.key}" class="admin-input resize-none shadow-sm bg-slate-50 dark:bg-slate-900" rows="3">${p(b)}</textarea>`;else if(c.type==="select")s+=`<div class="relative"><select id="af-${c.key}" class="admin-input shadow-sm cursor-pointer appearance-none pr-10 bg-slate-50 dark:bg-slate-900" onchange="if(window.rVarsB) window.rVarsB();">`,c.options.forEach(u=>{const g=String(b)===String(u.val);s+=`<option value="${u.val}" ${g?"selected":""} class="font-bold">${u.text}</option>`}),s+='</select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]"></i></div>';else if(c.type==="dynamic_select_category")s+=`<div class="relative"><select id="af-${c.key}" class="admin-input shadow-sm cursor-pointer appearance-none pr-10 bg-slate-50 dark:bg-slate-900" onchange="if(window.rVarsB) window.rVarsB(); if(window.updateProductSubCategoryOptions) window.updateProductSubCategoryOptions(this.value);"><option value="" class="font-bold">Pilih Kategori</option>`,n.categories.forEach(u=>{s+=`<option value="${p(u.name)}" ${b===u.name?"selected":""} class="font-bold">${p(u.name)}</option>`}),s+='</select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]"></i></div>';else if(c.type==="dynamic_select_brand")s+=`<div class="relative"><select id="af-${c.key}" class="admin-input shadow-sm cursor-pointer appearance-none pr-10 bg-slate-50 dark:bg-slate-900" onchange="if(window.rVarsB) window.rVarsB();"><option value="" class="font-bold">Tanpa Merek</option>`,(n.brands||[]).forEach(u=>{s+=`<option value="${p(u.name)}" ${b===u.name?"selected":""} class="font-bold">${p(u.name)}</option>`}),s+='</select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]"></i></div>';else if(c.type==="dynamic_select_products")s+=`<div class="relative"><select id="af-${c.key}" class="admin-input shadow-sm cursor-pointer appearance-none pr-10 bg-slate-50 dark:bg-slate-900" onchange="if(window.rVarsB) window.rVarsB();"><option value="" class="font-bold primary-text">-- Semua Produk (Tanpa Batasan) --</option>`,(n.products||[]).forEach(u=>{s+=`<option value="${u.id}" ${b==u.id?"selected":""} class="font-bold">${p(u.name)}</option>`}),s+='</select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]"></i></div>';else if(c.type==="dynamic_select_supplier")s+=`<div class="relative"><select id="af-${c.key}" class="admin-input shadow-sm cursor-pointer appearance-none pr-10 bg-slate-50 dark:bg-slate-900"><option value="" class="font-bold text-slate-400">-- Pilih Rekanan / Supplier Asal --</option>`,(n.suppliers||[]).forEach(u=>{const g=String(b)===String(u.id);s+=`<option value="${u.id}" ${g?"selected":""} class="font-bold">${p(u.name)}${u.code?` (${p(u.code)})`:""}</option>`}),s+='</select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]"></i></div>';else if(c.type==="variants_builder")s+='<div id="variants-builder-container" class="bg-slate-50/50 dark:bg-slate-900/30 p-4 sm:p-5 md:p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-inner min-h-[60px]"></div>';else if(c.type==="wholesale_builder")s+='<div id="wholesale-builder-container" class="bg-slate-50/50 dark:bg-slate-900/30 p-4 sm:p-5 md:p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-inner min-h-[60px]"></div>';else if(c.type==="multi_units_builder")s+='<div id="multi-units-builder-container" class="bg-slate-50/50 dark:bg-slate-900/30 p-4 sm:p-5 md:p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-inner min-h-[60px]"></div>';else if(c.type==="spec_table_builder")s+='<div id="spec-table-builder-container" class="bg-slate-50/50 dark:bg-slate-900/30 p-4 sm:p-5 md:p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-inner min-h-[60px]"></div>';else if(c.type==="subcategories_builder")s+='<div id="subcategories-builder-container" class="bg-slate-50/50 dark:bg-slate-900/30 p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-inner flex flex-col gap-3 min-h-[80px]"></div>';else if(c.key==="subCategory")s+=`
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
                <input autocomplete="off" type="text" id="af-${c.key}" value="${p(b)}" class="admin-input shadow-sm bg-slate-50 dark:bg-slate-900 text-xs hidden mt-1" placeholder="Ketik nama sub-kategori baru..." oninput="window.syncCustomSubCategoryValue(this.value)">
                <p id="af-subCategory-hint" class="text-[10px] text-slate-400 font-medium"></p>
            </div>`;else if(c.key==="sku")s+=`<div class="relative flex items-center"><input autocomplete='off' type="${c.type}" id="af-${c.key}" value="${p(b)}" class="admin-input shadow-sm bg-slate-50 dark:bg-slate-900 !pr-12" placeholder="Scan atau ketik..." ><button type="button" onclick="openCameraScanner('af-${c.key}')" class="absolute right-2 w-9 h-9 flex items-center justify-center text-slate-400 hover:bg-slate-200 hover:text-[var(--color-primary)] rounded-xl transition-all" title="Scan Barcode via HP"><i class="fa-solid fa-qrcode text-lg"></i></button></div>`;else if(c.key==="img")s+=`<div class="flex flex-col gap-1.5">
                <div class="flex gap-3">
                    <input autocomplete='off' type="text" id="af-${c.key}" value="${p(b)}" class="admin-input shadow-sm flex-1 bg-slate-50 dark:bg-slate-900" placeholder="URL Gambar (Boleh dikosongkan)">
                    <label class="primary-bg-soft border primary-border text-[var(--color-primary)] font-bold rounded-xl px-5 flex items-center justify-center cursor-pointer hover:bg-[rgba(var(--color-primary-rgb),0.2)] transition-all shrink-0 active:scale-95 shadow-sm" title="Upload dari Galeri"><i class="fa-solid fa-cloud-arrow-up sm:mr-2"></i><span class="hidden sm:inline">Upload</span><input type="file" accept="image/*" class="hidden" onchange="handleImageUpload(this, 'af-${c.key}')"></label>
                    <label class="primary-bg-soft border primary-border text-[var(--color-primary)] font-bold rounded-xl px-5 flex items-center justify-center cursor-pointer hover:bg-[rgba(var(--color-primary-rgb),0.2)] transition-all shrink-0 active:scale-95 shadow-sm" title="Ambil Foto Langsung"><i class="fa-solid fa-camera"></i><input type="file" accept="image/*" capture="environment" class="hidden" onchange="handleImageUpload(this, 'af-${c.key}')"></label>
                </div>
                <p class="text-[10px] font-bold text-slate-400 flex items-center gap-1.5"><i class="fa-solid fa-wand-magic-sparkles text-[var(--color-primary)]"></i><span><b>Otomatis &amp; Estetik:</b> Jika tanpa foto, sistem otomatis membuatkan <b>Smart Cover</b> dengan gradien warna &amp; ikon kategori resmi di toko &amp; kasir.</span></p>
            </div>`;else if(c.key==="videoUrl")s+=`<div class="flex flex-col gap-2">
                <div class="flex gap-3">
                    <input autocomplete='off' type="text" id="af-${c.key}" value="${p(b)}" class="admin-input shadow-sm flex-1 bg-slate-50 dark:bg-slate-900" placeholder="Paste URL Drive atau upload video di bawah">
                    <label class="primary-bg-soft border primary-border text-[var(--color-primary)] font-bold rounded-xl px-4 flex items-center justify-center cursor-pointer hover:bg-[rgba(var(--color-primary-rgb),0.2)] transition-all shrink-0 active:scale-95 shadow-sm gap-2" title="Upload Video ke Google Drive">
                        <i class="fa-solid fa-film"></i><span class="hidden sm:inline text-[11px]">Upload Video</span>
                        <input type="file" accept="video/mp4,video/webm,video/quicktime,video/x-msvideo,video/3gpp" class="hidden" onchange="handleVideoUpload(this, 'af-${c.key}')">
                    </label>
                </div>
                <p class="text-[10px] font-bold text-slate-400 flex items-center gap-1.5"><i class="fa-solid fa-circle-info text-[var(--color-primary)]"></i><b>Tips Autoplay:</b> Untuk video 100% otomatis play &amp; loop tanpa klik, gunakan link <b>YouTube / Shorts</b> atau <b>Direct MP4</b>. Upload Drive/HP juga didukung.</p>
                ${b?`<div class="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-black aspect-video w-full max-w-xs"><iframe src="${p(uo(b))}" class="w-full h-full" frameborder="0" allow="autoplay; fullscreen" loading="lazy"></iframe></div>`:""}
            </div>`;else if(c.type==="richtext")s+=`
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
                        <input type="file" accept="image/*" class="hidden" onchange="handleRTEditorImage(this, 'af-${c.key}-editor')" >
                    </label>
                </div>
                <div id="af-${c.key}-editor" contenteditable="true" class="p-4 min-h-[150px] max-h-[350px] overflow-y-auto outline-none text-sm text-slate-800 dark:text-slate-200 leading-relaxed [&_ol]:list-decimal [&_ol]:pl-5 [&_ul]:list-disc [&_ul]:pl-5 [&_b]:font-bold [&_strong]:font-bold [&_img]:max-w-full [&_img]:rounded-xl [&_img]:my-2">
                    ${b}
                </div>
            </div>`;else{const u=c.key==="storeStock",g=c.key==="warehouseStock",h=c.key==="stock",v=u||g?'oninput="window.calcTotalStockForm?.()"':"",w=h?'readonly tabindex="-1"':"",S=h?"bg-slate-100 dark:bg-slate-800/80 font-bold cursor-not-allowed text-slate-700 dark:text-slate-200":"bg-slate-50 dark:bg-slate-900";s+=`<input autocomplete='off' type="${c.type}" id="af-${c.key}" value="${p(b)}" class="admin-input shadow-sm ${S} transition-all"
    ${c.key==="price"?'min="0" step="1" placeholder="0"':""}
    ${c.key==="priceNormal"?'min="0" step="1" placeholder="0 (kosong = tidak ada coretan)"':""}
    ${c.key==="hpp"?'min="0" step="1" placeholder="0"':""}
    ${u||g||h?'min="0" step="0.01" placeholder="0"':""}
    ${v}
    ${w}
>`}s+="</div>"}),s=`<div class="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-5 items-start">${s}</div>`,j("admin-modal-form",s),t==="products"&&(window.rVarsB?.(),window.rWholB?.(),window.rMultiUnitsB?.(),window.rSpecB?.(),window.updateProductSubCategoryOptions?.(a?a.category:"",a?a.subCategory:"")),t==="categories"&&window.rSubCatsB?.();const d=k("admin-modal");d&&d.classList.contains("hidden")&&xo("admin"),ie(d,k("admin-modal-box"))};window.calcTotalStockForm=()=>{const t=document.getElementById("af-storeStock"),e=document.getElementById("af-warehouseStock"),a=document.getElementById("af-stock");if(t&&e&&a){const r=parseFloat(t.value)||0,s=parseFloat(e.value)||0;a.value=r+s}};window.submitAdminForm=async()=>{if(Me)return;H(!0);const t=dt||window.cTab||"products";let e={},a=$t[t]||[];for(let s of a)if(s.type==="variants_builder")e.variants=F.filter(o=>o.name.trim()!=="");else if(s.type==="wholesale_builder")e.wholesale=ke.filter(o=>parseFloat(o.minQty)>.01&&o.price>0);else if(s.type==="multi_units_builder")e.multiUnits=(Q||[]).filter(o=>(o.name||o.unitName||"").trim()!==""&&parseFloat(o.multiplier!=null?o.multiplier:o.conversionRatio)>.001).map(o=>({name:(o.name||o.unitName||"").trim(),multiplier:parseFloat(o.multiplier!=null?o.multiplier:o.conversionRatio)||1,price:parseFloat(o.price)||0,hpp:parseFloat(o.hpp)||0,barcode:(o.barcode||"").trim()}));else if(s.type==="spec_table_builder")e.specTable=oe.filter(o=>o.key.trim()!=="");else if(s.type==="subcategories_builder")e.subCategories=(le||window.tSubCats||[]).map(o=>String(o).trim()).filter(Boolean);else{let o="";if(s.type==="richtext"){const l=k(`af-${s.key}-editor`);o=l?l.innerHTML:""}else o=T(`af-${s.key}`);if(typeof o=="string"){if(o.startsWith("data:image/")&&o.length>3e5)return H(!1),x("Gambar Base64 terlalu besar! Upload file.");s.key==="img"&&(o=fe(o))}e[s.key]=s.type==="number"?parseFloat(o)||0:o}if(!e.name&&!e.title&&!e.bankName&&!e.code)return H(!1),x("Judul/Nama/Kode wajib diisi!");if(t==="products"){const s=parseFloat(e.storeStock)||0,o=parseFloat(e.warehouseStock)||0;e.storeStock=s,e.warehouseStock=o,e.stock=s+o,e.sku||(e.sku="SKU"+Date.now().toString().slice(-6))}if(t==="customers"){const s=window.normalizeWA?window.normalizeWA(e.phone):(e.phone||"").replace(/\D/g,"").replace(/^0/,"62");if(!s||s.length<10)return H(!1),x("Nomor WhatsApp tidak valid!");e.phone=s,e.points=parseFloat(e.points)||0,e.id=parseInt(s,10),e.paylaterActive=e.paylaterActive==="true"||e.paylaterActive===!0,e.paylaterLimit=Math.max(0,parseFloat(e.paylaterLimit)||0),e.paylaterDueDay=Math.min(28,Math.max(1,parseInt(e.paylaterDueDay,10)||5)),e.paylaterUsed=Math.max(0,parseFloat(e.paylaterUsed)||0)}let r=null;if(t==="customers")if(n.customers||(n.customers=[]),ae){r=ae;let s=n.customers.findIndex(o=>o&&o.id!=null&&String(o.id)===String(ae));s>-1?n.customers[s]=e:n.customers.unshift(e)}else n.customers.unshift(e);else if(t==="rewards")if(n.rewards||(n.rewards=[]),ae){let s=n.rewards.findIndex(o=>o&&o.id!=null&&String(o.id)===String(ae));s>-1?(e.id=n.rewards[s].id,n.rewards[s]=e):e.id=ae}else e.id=Date.now(),n.rewards.unshift(e);else if(ae){n[t]||(n[t]=[]);let s=n[t].findIndex(o=>o&&o.id!=null&&String(o.id)===String(ae));if(s>-1){if(e.id=n[t][s].id,t==="products"){const o=n[t][s];if(e.totalSold=o.totalSold||0,e.variants&&e.variants.length&&o.variants&&e.variants.forEach(l=>{const i=o.variants.find(d=>d.name===l.name);i&&i.totalSold&&(l.totalSold=i.totalSold)}),o.stockBatches&&!e.stockBatches&&(e.stockBatches=o.stockBatches),o.suppliers&&!e.suppliers&&(e.suppliers=o.suppliers),o.multiUnits&&!e.multiUnits&&(e.multiUnits=o.multiUnits),e.supplierId&&Array.isArray(e.suppliers)){const l=e.suppliers.findIndex(i=>String(i.supplierId)===String(e.supplierId));if(l>-1)e.suppliers.forEach(i=>i.isPrimary=!1),e.suppliers[l].isPrimary=!0;else{const i=(n.suppliers||[]).find(d=>String(d.id)===String(e.supplierId));e.suppliers.forEach(d=>d.isPrimary=!1),e.suppliers.push({supplierId:String(e.supplierId),supplierName:i?i.name:"Supplier Utama",lastBuyPrice:parseFloat(e.hpp)||0,supplierSku:e.sku||"",isPrimary:!0,updatedAt:new Date().toISOString()})}}}n[t][s]=e}else e.id=ae,n[t].push(e)}else if(e.id=Date.now(),n[t]||(n[t]=[]),n[t].unshift(e),t==="products"){if(n.productOrder=[e.id.toString(),...(n.productOrder||[]).filter(i=>String(i)!==e.id.toString())],e.supplierId){const i=(n.suppliers||[]).find(d=>String(d.id)===String(e.supplierId));e.suppliers=[{supplierId:String(e.supplierId),supplierName:i?i.name:"Supplier Utama",lastBuyPrice:parseFloat(e.hpp)||0,supplierSku:e.sku||"",isPrimary:!0,updatedAt:new Date().toISOString()}]}const s=parseFloat(e.storeStock)||0,o=parseFloat(e.warehouseStock)||0,l=s+o;e.stock=l,l>0&&(e.stockBatches=[],s>0&&e.stockBatches.push({batchId:`BATCH-INIT-STORE-${e.id}`,poId:null,poNumber:"STOK AWAL (TOKO)",supplierId:e.supplierId||"",supplierName:"Stok Awal Toko",receivedAt:new Date().toISOString(),buyPrice:parseFloat(e.hpp)||0,initialQty:s,remainingQty:s,location:"store",isInitial:!0}),o>0&&e.stockBatches.push({batchId:`BATCH-INIT-WH-${e.id}`,poId:null,poNumber:"STOK AWAL (GUDANG)",supplierId:e.supplierId||"",supplierName:"Stok Awal Gudang",receivedAt:new Date().toISOString(),buyPrice:parseFloat(e.hpp)||0,initialQty:o,remainingQty:o,location:"warehouse",isInitial:!0}))}L("Menyimpan...");try{const s=typeof P<"u"&&P?P:window.db,o=typeof _=="function"?_:window.saveApp||(async()=>{});if(!s)throw new Error("Database Firebase belum terhubung");if(t==="products")await s.collection("freshmart").doc("cms_data").collection("products").doc(e.id.toString()).set(e),await o(["productOrder"],{updateType:"product_single",updatedProductIds:[e.id.toString()]});else if(t==="customers"){const l=s.collection("freshmart").doc("cms_data").collection("customers");r!==null&&r!==e.id&&await l.doc(r.toString()).delete().catch(()=>{}),await l.doc(e.phone).set(e,{merge:!0})}else if(t==="rewards"){await s.collection("freshmart").doc("cms_data").collection("rewards").doc(e.id.toString()).set(e);try{localStorage.setItem("freshmart_rewards",JSON.stringify(n.rewards))}catch{}typeof window.renderRewardCatalog=="function"&&window.renderRewardCatalog()}else await o([t]);window.closeAdminModal?.(),window.rAdmItms?.(t),x("Tersimpan!")}catch(s){console.error("Gagal simpan admin data:",s),x("Gagal menyimpan: "+(s.message||""))}finally{H(!1),C()}};window.oADel=async(t,e)=>{window.showConfirm?.("Hapus Data","Data yang dihapus tidak bisa dikembalikan lagi.",async()=>{if(Me)return;H(!0);const a=typeof P<"u"&&P?P:window.db,r=typeof _=="function"?_:window.saveApp||(async()=>{}),s=n[t]&&n[t].find(o=>o&&o.id!=null&&String(o.id)===String(e));n[t]=(n[t]||[]).filter(o=>!o||o.id==null||String(o.id)!==String(e)),L("Menghapus...");try{if(!a)throw new Error("Database Firebase belum terhubung");if(t==="products")n.productOrder&&(n.productOrder=n.productOrder.filter(o=>String(o)!==String(e))),await a.collection("freshmart").doc("cms_data").collection("products").doc(e.toString()).delete(),await r(["productOrder"],{updateType:"product_delete",updatedProductIds:[e.toString()]});else if(t==="customers"){const o=s?s.phone:e.toString();await a.collection("freshmart").doc("cms_data").collection("customers").doc(o).delete()}else if(t==="rewards"){await a.collection("freshmart").doc("cms_data").collection("rewards").doc(e.toString()).delete();try{localStorage.setItem("freshmart_rewards",JSON.stringify(n.rewards))}catch{}typeof window.renderRewardCatalog=="function"&&window.renderRewardCatalog()}else await r([t]);window.rAdmItms?.(t),x("Berhasil Dihapus!")}catch(o){x("Gagal menghapus: "+(o.message||""))}finally{H(!1),C()}})};window.duplicateProduct=async t=>{window.showConfirm?.("Duplikat Produk","Menyalin data produk ini ke item baru?",async()=>{if(Me)return;H(!0);const e=typeof P<"u"&&P?P:window.db,a=typeof _=="function"?_:window.saveApp||(async()=>{}),r=n.products.find(l=>l&&l.id!=null&&String(l.id)===String(t));if(!r){H(!1);return}let s=JSON.parse(JSON.stringify(r));s.id=Date.now()+Math.floor(Math.random()*1e3),s.name=s.name+" COPY",s.sku="",s.totalSold=0,s.variants&&s.variants.length>0&&(s.variants=s.variants.map(l=>(l.sku="",l.totalSold=0,l))),n.products.unshift(s),n.productOrder||(n.productOrder=[]);const o=n.productOrder.findIndex(l=>String(l)===String(t));o>-1?n.productOrder.splice(o+1,0,s.id.toString()):n.productOrder.unshift(s.id.toString()),L("Menyalin...");try{if(!e)throw new Error("Database Firebase belum terhubung");await e.collection("freshmart").doc("cms_data").collection("products").doc(s.id.toString()).set(s),await a(["productOrder"],{updateType:"product_single",updatedProductIds:[s.id.toString()]}),window.rAdmItms?.("products"),x("Produk berhasil disalin!")}catch(l){x("Gagal menyalin: "+(l.message||""))}finally{H(!1),C()}},"Ya, Salin",!1)};window.rSubCatsB=()=>{const t=k("subcategories-builder-container");if(!t)return;const e=Array.isArray(le||window.tSubCats)?le||window.tSubCats:[],a=(T("af-name")||"").trim();let r=[];a&&Array.isArray(n.products)&&(r=[...new Set(n.products.filter(o=>o.category===a&&o.subCategory).map(o=>o.subCategory.trim()))].filter(o=>!e.some(l=>l.toLowerCase()===o.toLowerCase()))),t.innerHTML=`
        <div class="flex flex-col gap-2.5">
            <div class="flex items-center justify-between gap-2 flex-wrap">
                <label class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                    <i class="fa-solid fa-shapes text-[var(--color-primary)]"></i>
                    <span>Kelompok Sub-Kategori / Jenis (${e.length})</span>
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
                ${e.length===0?`
                    <p class="text-xs text-slate-400 italic py-1 px-1 flex items-center gap-1.5">
                        <i class="fa-solid fa-circle-info text-slate-300 dark:text-slate-600"></i>
                        <span>Belum ada sub-kategori. Ketik di atas lalu tekan <b>Enter</b> atau klik <b>Tambah</b>.</span>
                    </p>
                `:e.map((s,o)=>`
                    <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-600/80 shadow-2xs group">
                        <i class="fa-solid fa-shapes text-[10px] text-[var(--color-primary)]"></i>
                        <span>${p(s)}</span>
                        <button type="button" onclick="window.removeSubCategoryFromBuilder(${o})" class="text-slate-400 hover:text-rose-500 p-0.5 rounded ml-1 transition-colors cursor-pointer" title="Hapus Sub-Kategori '${p(s)}'">
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
    `};window.addSubCategoryFromInput=()=>{const t=k("af-new-subcat-input");if(!t)return;const e=(t.value||"").trim();if(!e)return;const a=Array.isArray(le||window.tSubCats)?[...le||window.tSubCats]:[];if(a.some(s=>s.toLowerCase()===e.toLowerCase())){x("Sub-kategori sudah ada!"),t.value="";return}a.push(e),Je(a),window.rSubCatsB();const r=k("af-new-subcat-input");r&&r.focus()};window.removeSubCategoryFromBuilder=t=>{const e=Array.isArray(le||window.tSubCats)?[...le||window.tSubCats]:[];e.splice(t,1),Je(e),window.rSubCatsB()};window.autoDetectSubCatsFromProducts=()=>{const t=(T("af-name")||"").trim();if(!t){x("Isi nama kategori terlebih dahulu!");return}const e=[...new Set((n.products||[]).filter(s=>s.category===t&&s.subCategory).map(s=>s.subCategory.trim()))];if(!e.length){x("Belum ada produk dengan sub-kategori pada kategori ini");return}const a=Array.isArray(le||window.tSubCats)?[...le||window.tSubCats]:[];let r=0;e.forEach(s=>{a.some(o=>o.toLowerCase()===s.toLowerCase())||(a.push(s),r++)}),Je(a),window.rSubCatsB(),x(`${r} sub-kategori berhasil ditarik dari produk!`)};window.updateProductSubCategoryOptions=(t,e="")=>{const a=k("af-subCategory-select"),r=k("af-subCategory"),s=k("af-subCategory-hint");if(!a||!r)return;const o=e!==void 0?e:(r.value||"").trim(),l=(n.categories||[]).find(m=>m.name===t),i=Array.isArray(l?.subCategories)?l.subCategories:[],d=(n.products||[]).filter(m=>m.category===t&&m.subCategory).map(m=>m.subCategory.trim()),c=[...new Set([...i,...d])].filter(Boolean);let b='<option value="">-- Tanpa Sub-Kategori / Pilih Jenis --</option>';if(c.forEach(m=>{b+=`<option value="${p(m)}">${p(m)}</option>`}),b+='<option value="__custom__" class="font-bold text-[var(--color-primary)]">+ Ketik Nama Sub-Kategori Manual...</option>',a.innerHTML=b,o)if(c.some(u=>u.toLowerCase()===o.toLowerCase())){const u=c.find(g=>g.toLowerCase()===o.toLowerCase());a.value=u,r.value=u,r.classList.add("hidden")}else a.value="__custom__",r.value=o,r.classList.remove("hidden");else a.value="",r.value="",r.classList.add("hidden");s&&(t&&c.length>0?s.textContent=`Tersedia ${c.length} sub-kategori terkelompok di bawah '${t}'`:t?s.textContent=`Belum ada sub-kategori di bawah '${t}'. Klik '+ Sub Baru' untuk menambahkan.`:s.textContent="Pilih kategori induk terlebih dahulu untuk melihat pilihan sub-kategori.")};window.handleSubCategorySelectChange=t=>{const e=k("af-subCategory");e&&(t.value==="__custom__"?(e.classList.remove("hidden"),e.focus()):(e.classList.add("hidden"),e.value=t.value))};window.syncCustomSubCategoryValue=t=>{};window.promptAddNewSubCategoryToProduct=async()=>{const t=T("af-category");if(!t){x("Pilih kategori induk produk terlebih dahulu!");return}const a=await(typeof kt=="function"?kt:window.customPrompt||prompt)(`Tambah Sub-Kategori Baru untuk '${t}':`,"");if(!a||!a.trim())return;const r=a.trim();let s=(n.categories||[]).find(o=>o.name===t);if(s&&(s.subCategories=Array.isArray(s.subCategories)?s.subCategories:[],!s.subCategories.some(o=>o.toLowerCase()===r.toLowerCase()))){s.subCategories.push(r);try{await(typeof _=="function"?_:window.saveApp||(async()=>{}))(["categories"])}catch(o){console.error("Gagal simpan subkategori baru:",o)}}window.updateProductSubCategoryOptions(t,r),x(`Sub-kategori '${r}' berhasil ditambahkan!`)};window.rSpecB=()=>{const t=document.getElementById("spec-table-builder-container");if(!t)return;let e="";oe.length>0?e+=`<div class="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm mb-3">
            <table class="w-full text-sm">
                <thead>
                    <tr class="bg-slate-100 dark:bg-slate-800">
                        <th class="py-2.5 px-4 text-left text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest w-5/12">Nama Spesifikasi</th>
                        <th class="py-2.5 px-4 text-left text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Nilai / Keterangan</th>
                        <th class="py-2.5 px-2 w-10"></th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                    ${oe.map((a,r)=>`
                    <tr class="bg-white dark:bg-slate-900 group">
                        <td class="py-2 px-3"><input autocomplete='off' placeholder="Cth: Berat" class="w-full bg-transparent text-[13px] font-semibold text-slate-700 dark:text-slate-200 focus:outline-none placeholder:text-slate-300" value="${p(a.key)}" oninput="uSpec(${r},'key',this.value)"></td>
                        <td class="py-2 px-3"><input autocomplete='off' placeholder="Cth: 2.5 kg" class="w-full bg-transparent text-[13px] text-slate-600 dark:text-slate-300 focus:outline-none placeholder:text-slate-300" value="${p(a.val)}" oninput="uSpec(${r},'val',this.value)"></td>
                        <td class="py-2 px-2 text-center"><button type="button" onclick="rmSpec(${r})" class="w-7 h-7 rounded-lg bg-rose-50 border border-rose-200 text-rose-400 hover:bg-rose-500 hover:text-white dark:bg-rose-900/30 dark:border-rose-800 transition-all flex items-center justify-center opacity-60 group-hover:opacity-100 active:scale-95 cursor-pointer" title="Hapus Baris"><i class="fa-solid fa-trash text-[10px]"></i></button></td>
                    </tr>`).join("")}
                </tbody>
            </table>
        </div>`:e+=`
        <div class="text-center py-6 text-slate-400 dark:text-slate-500 text-[12px] font-medium flex flex-col items-center justify-center">
            <div class="w-11 h-11 rounded-2xl flex items-center justify-center text-xl mb-2 shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary);">
                <i class="fa-solid fa-table-cells-large"></i>
            </div>
            <span>Belum ada spesifikasi. Klik tombol di bawah untuk menambahkan.</span>
        </div>`,e+='<button type="button" onclick="addSpec()" class="w-full py-3.5 bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] text-[var(--color-primary)] font-bold rounded-xl text-xs sm:text-sm border-2 border-[rgba(var(--color-primary-rgb),0.25)] dark:border-[rgba(var(--color-primary-rgb),0.35)] border-dashed hover:bg-[rgba(var(--color-primary-rgb),0.12)] transition-all flex items-center justify-center gap-2 active:scale-95 shadow-2xs cursor-pointer"><i class="fa-solid fa-plus-circle text-base"></i> Tambah Baris Spesifikasi</button>',t.innerHTML=e};window.addSpec=()=>{oe.push({key:"",val:""}),Kt(oe),window.rSpecB()};window.rmSpec=t=>{oe.splice(t,1),Kt(oe),window.rSpecB()};window.uSpec=(t,e,a)=>{oe[t]&&(oe[t][e]=a)};window.rVarsB=()=>{const t=document.getElementById("af-category"),e=t?/\bcat\b/i.test(t.value):!1;let a=`<div class="space-y-5 mb-5">${F.map((r,s)=>{let o=r.isActive!==!1&&r.isActive!=="false";return`
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
                    <input autocomplete='off' placeholder="Cth: Hijau Tosca" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${p(r.name)}" onchange="uVar(${s},'name',this.value)">
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Satuan / Unit</label>
                    <input autocomplete='off' placeholder="Cth: Pcs / Liter" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${p(r.unit||"")}" onchange="uVar(${s},'unit',this.value)">
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
                            <input autocomplete='off' id="var-hex-${s}" placeholder="#RRGGBB (opsional)" class="w-full bg-transparent text-sm font-mono font-bold focus:outline-none dark:text-white uppercase" value="${p(r.colorCode||"")}" onchange="uVar(${s},'colorCode',this.value)">
                        </div>
                        ${r.colorCode?`<div class="w-6 h-6 rounded-full border-2 border-white shadow-md shrink-0" style="background:${p(r.colorCode)}"></div>`:""}
                    </div>
                </div>
                ${e?"":`
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Gambar Khusus Varian</label>
                    <div class="flex gap-2.5 items-center">
                        ${r.img?`<img src="${p(r.img)}" class="w-11 h-11 rounded-xl object-cover border-2 border-slate-200 dark:border-slate-600 shrink-0 shadow-sm" onerror="this.style.display='none'" loading="lazy">`:""}
                        <input autocomplete='off' id="var-img-${s}" placeholder="URL Gambar Varian" class="admin-input !text-sm flex-1 bg-white dark:bg-slate-800 shadow-sm" value="${p(r.img||"")}" onchange="uVar(${s},'img',fixD(this.value))">
                        <label class="primary-icon-btn border rounded-xl w-11 h-11 flex items-center justify-center cursor-pointer transition-all shrink-0 active:scale-95 shadow-sm" title="Upload dari Galeri"><i class="fa-solid fa-upload text-sm"></i><input type="file" accept="image/*" class="hidden" onchange="handleImageUpload(this, 'var-img-${s}')"></label>
                        <label class="primary-icon-btn border rounded-xl w-11 h-11 flex items-center justify-center cursor-pointer transition-all shrink-0 active:scale-95 shadow-sm" title="Ambil Foto Langsung"><i class="fa-solid fa-camera text-sm"></i><input type="file" accept="image/*" capture="environment" class="hidden" onchange="handleImageUpload(this, 'var-img-${s}')"></label>
                    </div>
                </div>
                `}
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">SKU / Barcode</label>
                    <div class="relative h-[48px]">
                        <input autocomplete='off' id="var-sku-${s}" placeholder="Auto (Bisa Kosong)" class="admin-input !text-sm h-full bg-white dark:bg-slate-800 shadow-sm !pr-12" value="${p(r.sku||"")}" onchange="uVar(${s},'sku',this.value)">
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
    </div>`;j("variants-builder-container",a)};window.addVar=()=>{F.push({name:"",price:0,priceNormal:0,hpp:0,storeStock:0,warehouseStock:0,stock:0,sku:"",img:"",unit:"",colorCode:"",poin:0,isActive:!0}),ze(F),window.rVarsB()};window.rmVar=t=>{F.splice(t,1),ze(F),window.rVarsB()};window.uVar=(t,e,a)=>{if(!F[t])return;const r=["price","priceNormal","hpp","stock","storeStock","warehouseStock","poin"];if(F[t][e]=r.includes(e)?parseFloat(a)||0:e==="img"?fe(a):a,e==="storeStock"||e==="warehouseStock"){const s=parseFloat(F[t].storeStock)||0,o=parseFloat(F[t].warehouseStock)||0;F[t].stock=s+o;const l=document.getElementById(`var-stock-total-${t}`);l&&(l.value=F[t].stock)}else if(e==="stock"){F[t].warehouseStock===void 0&&(F[t].warehouseStock=0),F[t].storeStock=Math.max(0,(F[t].stock||0)-(F[t].warehouseStock||0));const s=document.getElementById(`var-store-stock-${t}`);s&&(s.value=F[t].storeStock)}};window.toggleVarActive=t=>{if(F[t]){const e=F[t].isActive!==!1&&F[t].isActive!=="false";F[t].isActive=!e,ze(F),typeof window.rVarsB=="function"&&window.rVarsB()}};window._openColorFloatModal=t=>{_closeColorFloatModal(!0);const e=document.createElement("div");e.id="color-float-modal",e.className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-900/80 p-4 opacity-0 transition-opacity duration-300",e.onclick=r=>{r.target===e&&_closeColorFloatModal()};const a=document.createElement("div");a.id="color-float-box",a.className="relative w-full max-w-md sm:max-w-xl scale-95 transform rounded-[2rem] border border-slate-200 bg-white shadow-2xl transition-all duration-300 dark:border-slate-700 dark:bg-slate-800 overflow-y-auto max-h-[90vh] custom-scrollbar",a.innerHTML=t,e.appendChild(a),document.body.appendChild(e),typeof window.pushModalHistory=="function"&&window.pushModalHistory("colorFloat"),requestAnimationFrame(()=>{e.classList.remove("opacity-0"),a.classList.remove("scale-95")})};window._closeColorFloatModal=(t=!1)=>{const e=document.getElementById("color-float-modal");if(!e)return;const a=document.getElementById("color-float-box"),r=()=>{e.classList.add("opacity-0"),a&&a.classList.add("scale-95"),setTimeout(()=>{e.parentNode&&e.remove()},300)};!t&&typeof window.requestCloseModal=="function"?window.requestCloseModal("colorFloat",!1,r):r()};window.openColorImportModal=()=>{let t=n.colors||[];if(!t.length){x("Database Warna masih kosong!");return}let e={};t.forEach(r=>{let s=r.catalog||"Tanpa Katalog";e[s]||(e[s]=[]),e[s].push(r)});let a=`<div class="p-6 sm:p-7">
        <div class="flex justify-between items-center mb-6">
            <h3 class="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2"><i class="fa-solid fa-swatchbook text-[var(--color-primary)]"></i> Pilih Warna</h3>
            <button type="button" onclick="_closeColorFloatModal()" class="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 flex items-center justify-center transition-all cursor-pointer"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <div class="space-y-6 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">`;for(let r in e)a+=`<div>
            <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">${p(r)}</h4>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                ${e[r].map(s=>`
                    <button type="button" onclick="importColorToVariant('${p(s.name)}', '${p(s.hex||"")}')" class="flex items-center gap-3 p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/50 hover:-translate-y-0.5 hover:shadow-md transition-all text-left bg-white dark:bg-slate-800 cursor-pointer">
                        <div class="w-8 h-8 rounded-full border-2 border-slate-100 dark:border-slate-600 shadow-sm shrink-0" style="background-color: ${p(s.hex||"transparent")}"></div>
                        <span class="text-xs font-bold text-slate-700 dark:text-slate-200 line-clamp-2">${p(s.name)}</span>
                    </button>`).join("")}
            </div>
        </div>`;a+="</div></div>",_openColorFloatModal(a)};window.importColorToVariant=(t,e)=>{F.push({name:t,price:0,priceNormal:0,hpp:0,stock:0,sku:"",img:"",unit:"",colorCode:e||"",poin:0,isActive:!0}),ze(F),window.rVarsB(),_closeColorFloatModal(),x("Warna ditambahkan!")};window.exportVariantToColorDB=async t=>{const e=F[t];if(!e||!e.name.trim()){x("Nama varian kosong!");return}if((n.colors||[]).find(o=>o.name.toLowerCase()===e.name.trim().toLowerCase())){x(`"${e.name}" sudah ada di Database Warna.`);return}let s=[...new Set((n.colors||[]).map(o=>o.catalog).filter(Boolean))].map(o=>`<option value="${p(o)}">${p(o)}</option>`).join("");_openColorFloatModal(`
        <div class="p-6">
            <h3 class="text-lg font-bold text-slate-800 dark:text-white mb-5 flex items-center gap-2"><i class="fa-solid fa-database text-[var(--color-primary)]"></i> Simpan ke Database Warna</h3>
            <div class="space-y-4">
                <div><label class="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Nama Warna</label><input id="exp-name" class="admin-input" value="${p(e.name)}"></div>
                <div><label class="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Kode Warna (Hex)</label>
                    <div class="flex gap-3 items-center">
                        <input type="color" id="exp-hex-picker" value="${p(e.colorCode||"#ffffff")}" class="w-10 h-10 rounded-xl cursor-pointer" onchange="document.getElementById('exp-hex').value=this.value">
                        <input id="exp-hex" class="admin-input flex-1" placeholder="#FFFFFF (opsional)" value="${p(e.colorCode||"")}">
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
        </div>`)};window.confirmExportVariantToColorDB=async()=>{const t=(document.getElementById("exp-name")?.value||"").trim(),e=(document.getElementById("exp-hex")?.value||"").trim(),a=(document.getElementById("exp-catalog")?.value||"").trim();if(!t){x("Nama warna wajib diisi!");return}const r={id:Date.now(),name:t,hex:e,catalog:a};n.colors||(n.colors=[]),n.colors.push(r),_closeColorFloatModal(),L("Menyimpan ke Database Warna...");try{await _(["colors"]),x(`"${t}" berhasil disimpan ke Database Warna!`)}catch{x("Gagal menyimpan!")}finally{C()}};window.exportAllVariantsToColorDB=async()=>{const t=F.filter(r=>r.name.trim());if(!t.length){x("Tidak ada varian untuk diekspor!");return}n.colors||(n.colors=[]);let a=[...new Set(n.colors.map(r=>r.catalog).filter(Boolean))].map(r=>`<option value="${p(r)}">${p(r)}</option>`).join("");_openColorFloatModal(`
        <div class="p-6">
            <h3 class="text-lg font-bold text-slate-800 dark:text-white mb-2 flex items-center gap-2"><i class="fa-solid fa-upload text-[var(--color-primary)]"></i> Ekspor Semua Varian</h3>
            <p class="text-xs text-slate-500 mb-5">${t.length} varian akan diekspor ke Database Warna. Nama yang sudah ada di database akan dilewati.</p>
            <div><label class="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Katalog / Merek (berlaku untuk semua)</label>
                <input id="expall-catalog" list="expall-catalog-list" class="admin-input" placeholder="Cth: No Drop, Boyo, dll">
                <datalist id="expall-catalog-list">${a}</datalist>
            </div>
            <div class="flex gap-3 mt-6">
                <button onclick="_closeColorFloatModal()" class="flex-1 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 font-bold text-slate-500 dark:text-slate-400 text-xs sm:text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer active:scale-95">Batal</button>
                <button onclick="confirmExportAllVariants()" class="flex-1 py-3.5 rounded-2xl primary-bg text-white font-bold text-xs sm:text-sm hover:opacity-90 transition-all active:scale-95 cursor-pointer shadow-md"><i class="fa-solid fa-upload mr-2"></i>Ekspor</button>
            </div>
        </div>`)};window.confirmExportAllVariants=async()=>{const t=(document.getElementById("expall-catalog")?.value||"").trim(),e=F.filter(s=>s.name.trim());n.colors||(n.colors=[]);const a=new Set(n.colors.map(s=>s.name.toLowerCase()));let r=0;if(e.forEach(s=>{a.has(s.name.trim().toLowerCase())||(n.colors.push({id:Date.now()+r,name:s.name.trim(),hex:s.colorCode||"",catalog:t}),a.add(s.name.trim().toLowerCase()),r++)}),_closeColorFloatModal(),!r){x("Semua varian sudah ada di Database Warna!");return}L("Menyimpan...");try{await _(["colors"]),x(`${r} warna berhasil diekspor ke Database Warna!`)}catch{x("Gagal menyimpan!")}finally{C()}};window.openImportFromProductsModal=async()=>{const t=[];if((n.products||[]).forEach(o=>{(o.variants||[]).forEach(l=>{l.name&&l.name.trim()&&t.push({varName:l.name.trim(),hex:l.colorCode||"",prodName:o.name||""})})}),!t.length){x("Tidak ada varian produk yang ditemukan!");return}const e=new Set((n.colors||[]).map(o=>o.name.toLowerCase())),a=t.filter(o=>!e.has(o.varName.toLowerCase()));if(!a.length){x("Semua varian produk sudah ada di Database Warna!");return}let s=[...new Set((n.colors||[]).map(o=>o.catalog).filter(Boolean))].map(o=>`<option value="${p(o)}">${p(o)}</option>`).join("");window._pendingImportVariants=a,_openColorFloatModal(`
        <div class="p-6">
            <h3 class="text-lg font-bold text-slate-800 dark:text-white mb-2 flex items-center gap-2"><i class="fa-solid fa-box-archive text-[var(--color-primary)]"></i> Impor dari Semua Produk</h3>
            <p class="text-xs text-slate-500 mb-4">${a.length} nama varian baru ditemukan (yang sudah ada di database dilewati).</p>
            <div class="custom-scrollbar max-h-48 overflow-y-auto mb-4 space-y-2">
                ${a.map((o,l)=>`
                    <label class="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 cursor-pointer hover:border-[var(--color-primary)] transition-all">
                        <input type="checkbox" id="imp-chk-${l}" checked class="w-4 h-4 rounded accent-[var(--color-primary)]">
                        <div class="w-5 h-5 rounded-full border border-slate-200 dark:border-slate-600 shrink-0" style="background-color:${p(o.hex||"transparent")}"></div>
                        <div class="min-w-0">
                            <p class="text-xs font-bold text-slate-700 dark:text-slate-200 truncate">${p(o.varName)}</p>
                            <p class="text-[10px] text-slate-400 truncate">dari: ${p(o.prodName)}</p>
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
        </div>`)};window.confirmImportFromProducts=async()=>{const t=window._pendingImportVariants||[];window._pendingImportVariants=null;const e=(document.getElementById("impprod-catalog")?.value||"").trim();n.colors||(n.colors=[]);const a=new Set(n.colors.map(s=>s.name.toLowerCase()));let r=0;if(t.forEach((s,o)=>{const l=document.getElementById(`imp-chk-${o}`);l&&l.checked&&!a.has(s.varName.toLowerCase())&&(n.colors.push({id:Date.now()+r,name:s.varName,hex:s.hex||"",catalog:e}),a.add(s.varName.toLowerCase()),r++)}),_closeColorFloatModal(),!r){x("Tidak ada warna baru yang ditambahkan!");return}L("Menyimpan...");try{await _(["colors"]),x(`${r} warna berhasil diimpor ke Database Warna!`),window.cTab==="colors"&&window.rAdmItms?.("colors")}catch{x("Gagal menyimpan!")}finally{C()}};const fo=t=>window.pushModalHistory?.(t),sr=(t,e,a)=>window.requestCloseModal?.(t,e,a);window.openRestockModal=t=>{const e=n.products.find(o=>o&&o.id!=null&&String(o.id)===String(t));if(!e)return;const a=e.variants&&e.variants.length>0;let r="";a?r=e.variants.map((o,l)=>`
            <div class="flex items-center justify-between gap-3 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
                <div class="flex items-center gap-3 min-w-0 flex-1">
                    ${o.colorCode?`<span class="w-5 h-5 rounded-full shrink-0 shadow-sm border border-slate-300" style="background-color:${p(o.colorCode)}"></span>`:""}
                    <div class="min-w-0 flex-1">
                        <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${p(o.name)}</p>
                        <p class="text-[10px] font-bold text-slate-500 mt-0.5">Stok saat ini: <span class="text-blue-500 font-bold">${parseFloat(o.stock)||0}</span></p>
                    </div>
                </div>
                <input type="number" id="restock-var-${l}" min="0" placeholder="Tambah" class="admin-input !py-2.5 !px-3 !w-28 text-center text-sm bg-white dark:bg-slate-800 shadow-sm shrink-0" value="">
            </div>`).join(""):r=`
            <div class="flex items-center justify-between gap-3 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
                <div class="min-w-0 flex-1">
                    <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${p(e.name)}</p>
                    <p class="text-[10px] font-bold text-slate-500 mt-0.5">Stok saat ini: <span class="text-blue-500 font-bold">${parseFloat(e.stock)||0}</span></p>
                </div>
                <input type="number" id="restock-main" min="0" placeholder="Tambah" class="admin-input !py-2.5 !px-3 !w-28 text-center text-sm bg-white dark:bg-slate-800 shadow-sm shrink-0" value="">
            </div>`;let s=document.getElementById("restock-modal");s||(s=document.createElement("div"),s.id="restock-modal",s.className="fixed inset-0 z-[110] bg-slate-900/80 flex items-end sm:items-center justify-center p-0 sm:p-5",s.onclick=o=>{o.target===s&&closeRestockModal()},document.body.appendChild(s)),s.innerHTML=`
        <div class="bg-white dark:bg-slate-900 w-full max-w-lg rounded-t-3xl sm:rounded-2xl max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-700">
            <div class="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0">
                <div>
                    <h3 class="font-bold text-slate-800 dark:text-white text-base flex items-center gap-2"><i class="fa-solid fa-boxes-stacked text-[var(--color-primary)]"></i> Restock Produk</h3>
                    <p class="text-[10px] font-bold text-slate-500 mt-0.5 uppercase tracking-widest">${p(e.name)}</p>
                </div>
                <button onclick="closeRestockModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-rose-100 hover:text-rose-500 flex items-center justify-center transition-all cursor-pointer"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="custom-scrollbar p-5 sm:p-6 overflow-y-auto flex-1 space-y-3">
                <p class="text-[11px] font-bold text-slate-600 dark:text-slate-300 bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] border border-[rgba(var(--color-primary-rgb),0.2)] dark:border-[rgba(var(--color-primary-rgb),0.3)] p-3 rounded-xl"><i class="fa-solid fa-circle-info text-[var(--color-primary)] mr-1.5"></i> Masukkan jumlah <b>penambahan</b> stok. Stok lama + nilai ini = stok baru.</p>
                ${r}
            </div>
            <div class="p-5 border-t border-slate-100 dark:border-slate-800 shrink-0">
                <button onclick="processRestock('${p(String(t))}')" class="btn-primary py-3.5 text-sm shadow-glow !rounded-2xl flex items-center justify-center gap-2 cursor-pointer active:scale-95"><i class="fa-solid fa-save"></i> Simpan Restock</button>
            </div>
        </div>`,s.style.opacity="0",s.style.display="flex",requestAnimationFrame(()=>{s.style.transition="opacity 0.25s ease",s.style.opacity="1"}),fo("restock")};window.closeRestockModal=(t=!1)=>{sr("restock",t,()=>{const e=document.getElementById("restock-modal");!e||e.style.display==="none"||(e.style.opacity="0",e.style.transition="opacity 0.25s ease",setTimeout(()=>{e.style.display="none",e.style.opacity="",e.style.transition=""},250))})};window.processRestock=async t=>{if(Me)return;H(!0);const e=n.products.findIndex(l=>l&&l.id!=null&&String(l.id)===String(t));if(e<0){H(!1);return}const a=n.products[e],r=a.variants&&a.variants.length>0;let s=JSON.parse(JSON.stringify(a)),o=0;if(r)s.variants=s.variants.map((i,d)=>{const c=parseFloat(document.getElementById("restock-var-"+d)?.value)||0;return c>0&&(i.stock=(parseFloat(i.stock)||0)+c,o+=c,i.stock>0&&(i.isActive===!1||i.isActive==="false")&&(i.isActive=!0)),i}),s.variants.some(i=>(parseFloat(i.stock)||0)>0&&i.isActive!==!1&&i.isActive!=="false")&&(s.isActive===!1||s.isActive==="false")&&(s.isActive="true");else{const l=parseFloat(document.getElementById("restock-main")?.value)||0;l>0&&(s.stock=(parseFloat(s.stock)||0)+l,o+=l,s.stock>0&&(s.isActive===!1||s.isActive==="false")&&(s.isActive="true"))}if(o<=0)return H(!1),x("Masukkan jumlah restock terlebih dahulu!");L("Menyimpan Restock...");try{const l=typeof P<"u"&&P?P:window.db,i=typeof _=="function"?_:window.saveApp||(async()=>{});if(!l)throw new Error("Database Firebase belum terhubung");const d=l.collection("freshmart").doc("cms_data").collection("products").doc(t.toString());let c=0;await l.runTransaction(async b=>{const m=await b.get(d);if(!m.exists)throw new Error("Produk tidak ditemukan di server");const u=JSON.parse(JSON.stringify(m.data()));if(r)a.variants.forEach((h,v)=>{const w=parseFloat(document.getElementById("restock-var-"+v)?.value)||0;if(w<=0)return;Ua(u,{poId:null,poNumber:"RESTOCK CEPAT",supplierId:u.supplierId||"",supplierName:"Penyesuaian Toko",qty:w,unitPrice:parseFloat(u.variants?.[v]?.hpp||u.hpp)||0,variantName:h.name,receivedAt:new Date().toISOString()});const S=(u.variants||[]).findIndex(M=>M.name===h.name);S>-1&&u.variants[S].stock>0&&(u.variants[S].isActive===!1||u.variants[S].isActive==="false")&&(u.variants[S].isActive=!0)}),u.variants.some(h=>(parseFloat(h.stock)||0)>0&&h.isActive!==!1&&h.isActive!=="false")&&(u.isActive===!1||u.isActive==="false")&&(u.isActive="true"),c=u.variants.reduce((h,v)=>h+(parseFloat(v.stock)||0),0);else{const g=parseFloat(document.getElementById("restock-main")?.value)||0;g>0&&(Ua(u,{poId:null,poNumber:"RESTOCK CEPAT",supplierId:u.supplierId||"",supplierName:"Penyesuaian Toko",qty:g,unitPrice:parseFloat(u.hpp)||0,variantName:"",receivedAt:new Date().toISOString()}),u.stock>0&&(u.isActive===!1||u.isActive==="false")&&(u.isActive="true")),c=u.stock}b.set(d,u),Object.assign(s,u)}),n.products[e]=s,await i([],{updateType:"stock_change",updatedProductIds:[t.toString()]}),closeRestockModal(),window.rAdmItms?.("products"),Le("stat-products",n.products.filter(b=>b.isActive!=="false"&&b.isActive!==!1).length),x(`Restock +${o} berhasil! Total stok: ${c}`)}catch(l){x("Gagal restock: "+(l.message||""))}finally{H(!1),C()}};window.toggleProductStatus=async(t,e)=>{if(Me)return;H(!0);const a=n.products.findIndex(r=>r.id!=null&&r.id.toString()===t.toString());if(a>-1){n.products[a].isActive=e?"true":"false",L(e?"Mengaktifkan...":"Menonaktifkan...");try{const r=typeof P<"u"&&P?P:window.db,s=typeof _=="function"?_:window.saveApp||(async()=>{});if(!r)throw new Error("Database Firebase belum terhubung");await r.collection("freshmart").doc("cms_data").collection("products").doc(t.toString()).update({isActive:e?"true":"false"}),await s([],{updateType:"stock_change",updatedProductIds:[t.toString()]}),Le("stat-products",n.products.filter(o=>o.isActive!=="false"&&o.isActive!==!1).length),window.rAdmItms?.("products"),x(e?"Produk Aktif!":"Stok Dikosongkan!")}catch(r){x("Gagal update status: "+(r.message||""))}finally{H(!1),C()}}else H(!1)};window.closeAdminModal=(t=!1)=>{const e=k("admin-modal"),a=k("admin-modal-box");e&&sr("admin",t,()=>{X(e,a)})};const go=t=>window.pushModalHistory?.(t),ko=(t,e,a)=>window.requestCloseModal?.(t,e,a);let z;window.openCameraScanner=async(t="search-input")=>{const e=k("scanner-modal");e&&e.classList.contains("hidden")&&go("scanner"),ie(e,e?.firstElementChild);try{await Wt("/html5-qrcode.min.js",()=>typeof Html5Qrcode<"u").catch(()=>Wt("https://cdnjs.cloudflare.com/ajax/libs/html5-qrcode/2.3.8/html5-qrcode.min.js",()=>typeof Html5Qrcode<"u"))}catch{x("Gagal memuat modul kamera. Cek koneksi atau izin kamera."),closeCameraScanner();return}z||(z=new Html5Qrcode("reader"));const a=typeof Html5QrcodeSupportedFormats<"u"?[Html5QrcodeSupportedFormats.CODE_128,Html5QrcodeSupportedFormats.EAN_13,Html5QrcodeSupportedFormats.EAN_8,Html5QrcodeSupportedFormats.CODE_39,Html5QrcodeSupportedFormats.UPC_A,Html5QrcodeSupportedFormats.UPC_E,Html5QrcodeSupportedFormats.QR_CODE]:void 0,r={fps:15,qrbox:(s,o)=>{const l=Math.min(Math.floor(s*.88),340),i=Math.min(Math.floor(o*.45),150);return{width:Math.max(l,220),height:Math.max(i,90)}},...a?{formatsToSupport:a}:{},experimentalFeatures:{useBarCodeDetectorIfSupported:!0}};setTimeout(()=>{z&&z.start({facingMode:"environment"},r,s=>{const o=typeof window.cleanBarcodeRaw=="function"?window.cleanBarcodeRaw(s):(s||"").trim();let l=k(t);l&&(l.value=o,t==="search-input"||t==="mobile-header-search"?window.handleSearch?.(o):(l.dispatchEvent(new Event("input",{bubbles:!0})),l.dispatchEvent(new Event("change",{bubbles:!0})))),x("Barcode terbaca!"),closeCameraScanner()},s=>{}).catch(s=>{x("Akses kamera ditolak/gagal!"),closeCameraScanner()})},100)};window.closeCameraScanner=(t=!1)=>{ko("scanner",t,()=>{if(k("scanner-modal").classList.add("opacity-0"),z)try{z.getState()===2||z.getState()===3?z.stop().then(()=>{z.clear(),z=null}).catch(e=>{z.clear(),z=null}):(z.clear(),z=null)}catch{z=null}setTimeout(()=>at("scanner-modal"),300)})};const ho=t=>window.pushModalHistory?.(t),vo=(t,e,a)=>window.requestCloseModal?.(t,e,a);let Ae=[];window.openQuickPriceModal=t=>{const e=n.products.find(o=>o&&o.id!=null&&String(o.id)===String(t));if(!e)return;const a=e.variants&&e.variants.length>0;Ae=!a&&e.wholesale?JSON.parse(JSON.stringify(e.wholesale)):[];let r="";a?r=e.variants.map((o,l)=>`
            <div class="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-3">
                <div class="flex items-center gap-2.5 min-w-0">
                    ${o.colorCode?`<span class="w-4 h-4 rounded-full shrink-0 shadow-sm border border-slate-300" style="background-color:${p(o.colorCode)}"></span>`:""}
                    <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${p(o.name)}</p>
                </div>
                <div class="grid grid-cols-4 gap-2.5">
                    <div><label class="block text-[9px] font-bold text-amber-500 mb-1 uppercase tracking-widest">HPP</label><input type="number" id="qp-var-hpp-${l}" value="${o.hpp||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></div>
                    <div><label class="block text-[9px] font-bold text-[var(--color-primary)] mb-1 uppercase tracking-widest">Jual</label><input type="number" id="qp-var-price-${l}" value="${o.price||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></div>
                    <div><label class="block text-[9px] font-bold text-slate-400 mb-1 uppercase tracking-widest">Coret</label><input type="number" id="qp-var-normal-${l}" value="${o.priceNormal||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></div>
                    <div><label class="block text-[9px] font-bold text-[var(--color-primary)] mb-1 uppercase tracking-widest"><i class="fa-solid fa-star"></i> Poin</label><input type="number" min="0" id="qp-var-poin-${l}" value="${o.poin||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></div>
                </div>
            </div>`).join(""):r=`
            <div class="grid grid-cols-4 gap-2.5">
                <div><label class="block text-[9px] font-bold text-amber-500 mb-1 uppercase tracking-widest">HPP / Modal</label><input type="number" id="qp-hpp" value="${e.hpp||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></div>
                <div><label class="block text-[9px] font-bold text-[var(--color-primary)] mb-1 uppercase tracking-widest">Harga Jual</label><input type="number" id="qp-price" value="${e.price||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></div>
                <div><label class="block text-[9px] font-bold text-slate-400 mb-1 uppercase tracking-widest">Harga Coret</label><input type="number" id="qp-normal" value="${e.priceNormal||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></div>
                <div><label class="block text-[9px] font-bold text-[var(--color-primary)] mb-1 uppercase tracking-widest"><i class="fa-solid fa-star"></i> Poin</label><input type="number" min="0" id="qp-poin" value="${e.poin||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></div>
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
                    <p class="text-[10px] font-bold text-slate-500 mt-0.5 uppercase tracking-widest">${p(e.name)}</p>
                </div>
                <button onclick="closeQuickPriceModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-rose-100 hover:text-rose-500 flex items-center justify-center transition-all cursor-pointer"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="custom-scrollbar p-5 sm:p-6 overflow-y-auto flex-1 space-y-3" id="qp-body">${r}</div>
            <div class="p-5 border-t border-slate-100 dark:border-slate-800 shrink-0">
                <button onclick="processQuickPrice('${p(String(t))}')" class="btn-primary py-3.5 text-sm shadow-glow !rounded-2xl flex items-center justify-center gap-2 cursor-pointer active:scale-95"><i class="fa-solid fa-save"></i> Simpan Harga</button>
            </div>
        </div>`,a||rQpWhol(),s.style.opacity="0",s.style.display="flex",requestAnimationFrame(()=>{s.style.transition="opacity 0.25s ease",s.style.opacity="1"}),ho("quickprice")};window.qpUpdateWhol=(t,e,a)=>{Ae[t]&&(Ae[t][e]=parseFloat(a)||0)};window.qpRemoveWhol=t=>{Ae.splice(t,1),typeof window.rQpWhol=="function"&&window.rQpWhol()};window.rQpWhol=()=>{j("qp-whol-container",Ae.length?Ae.map((t,e)=>`
        <div class="flex items-center gap-2">
            <input type="number" min="1" placeholder="Min. Qty" value="${t.minQty||""}" onchange="window.qpUpdateWhol(${e}, 'minQty', this.value)" class="admin-input !py-2.5 !px-3 text-xs bg-slate-50 dark:bg-slate-900/50 flex-1">
            <input type="number" min="0" placeholder="Harga/Unit" value="${t.price||""}" onchange="window.qpUpdateWhol(${e}, 'price', this.value)" class="admin-input !py-2.5 !px-3 text-xs bg-slate-50 dark:bg-slate-900/50 flex-1">
            <button type="button" onclick="window.qpRemoveWhol(${e})" class="w-9 h-9 shrink-0 rounded-xl bg-rose-50 text-rose-500 hover:bg-rose-500 hover:text-white flex items-center justify-center transition-all cursor-pointer"><i class="fa-solid fa-trash text-xs"></i></button>
        </div>`).join(""):'<p class="text-[11px] font-bold text-slate-400 text-center py-2">Belum ada tingkat harga grosir.</p>')};window.qpAddWhol=()=>{Ae.push({minQty:0,price:0}),rQpWhol()};window.closeQuickPriceModal=(t=!1)=>{vo("quickprice",t,()=>{const e=document.getElementById("quickprice-modal");!e||e.style.display==="none"||(e.style.opacity="0",e.style.transition="opacity 0.25s ease",setTimeout(()=>{e.style.display="none",e.style.opacity="",e.style.transition=""},250))})};window.processQuickPrice=async t=>{if(Me)return;H(!0);const e=n.products.findIndex(s=>s&&s.id!=null&&String(s.id)===String(t));if(e<0){H(!1);return}const a=n.products[e],r=a.variants&&a.variants.length>0;L("Menyimpan Harga...");try{const s=typeof P<"u"&&P?P:window.db,o=typeof _=="function"?_:window.saveApp||(async()=>{});if(!s)throw new Error("Database Firebase belum terhubung");const l=s.collection("freshmart").doc("cms_data").collection("products").doc(t.toString());let i=null;await s.runTransaction(async d=>{const c=await d.get(l);if(!c.exists)throw new Error("Produk tidak ditemukan di server");const b=JSON.parse(JSON.stringify(c.data()));r?a.variants.forEach((m,u)=>{const g=(b.variants||[]).findIndex(h=>h.name===m.name);g<0||(b.variants[g].hpp=parseFloat(document.getElementById("qp-var-hpp-"+u)?.value)||0,b.variants[g].price=parseFloat(document.getElementById("qp-var-price-"+u)?.value)||0,b.variants[g].priceNormal=parseFloat(document.getElementById("qp-var-normal-"+u)?.value)||0,b.variants[g].poin=parseFloat(document.getElementById("qp-var-poin-"+u)?.value)||0)}):(b.hpp=parseFloat(document.getElementById("qp-hpp")?.value)||0,b.price=parseFloat(document.getElementById("qp-price")?.value)||0,b.priceNormal=parseFloat(document.getElementById("qp-normal")?.value)||0,b.poin=parseFloat(document.getElementById("qp-poin")?.value)||0,b.wholesale=Ae.filter(m=>parseFloat(m.minQty)>.01&&m.price>0)),d.set(l,b),i=b}),n.products[e]=i,await o([],{updateType:"stock_change",updatedProductIds:[t.toString()]}),closeQuickPriceModal(),window.rAdmItms?.("products"),x("Harga berhasil diperbarui!")}catch(s){x("Gagal simpan harga: "+(s.message||""))}finally{H(!1),C()}};window.rWholB=()=>{const t=document.getElementById("wholesale-builder-container");if(!t)return;const e=parseFloat(document.getElementById("af-hpp")?.value)||0;let a=`<div class="space-y-4 mb-4">${ke.map((r,s)=>{const o=Xa(r.price,e);let l="";return r.price>0&&e>0&&(o.isNegative?l=`<span class="inline-flex items-center gap-1 text-[10px] font-bold text-rose-500"><i class="fa-solid fa-triangle-exclamation"></i> Margin Negatif (-Rp ${Math.abs(o.marginRp).toLocaleString("id-ID")})</span>`:o.isThin?l=`<span class="inline-flex items-center gap-1 text-[10px] font-bold text-amber-500"><i class="fa-solid fa-circle-exclamation"></i> Margin Tipis (${o.marginPercent}%)</span>`:l=`<span class="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 dark:text-emerald-400"><i class="fa-solid fa-shield-halved"></i> Margin Sehat (+${o.marginPercent}%)</span>`),`
        <div class="bg-slate-50 dark:bg-slate-900/50 p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm relative group transition-all duration-300 hover:border-[var(--color-primary)]/40">
            <button type="button" onclick="rmWhol(${s})" class="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-rose-50 border border-rose-200 text-rose-500 hover:bg-rose-500 hover:text-white dark:bg-rose-900/30 dark:border-rose-800 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 shadow-md z-10 cursor-pointer"><i class="fa-solid fa-trash text-xs"></i></button>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-7">
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Minimal Pembelian (Qty)</label>
                    <input autocomplete='off' type="number" step="0.01" placeholder="Cth: 12" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${r.minQty}" onchange="uWhol(${s},'minQty',this.value)">
                </div>
                <div>
                    <div class="flex items-center justify-between mb-2">
                        <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Harga Satuan Spesial (Rp)</label>
                        ${l}
                    </div>
                    <input autocomplete='off' type="number" placeholder="Cth: 15000" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${r.price}" onchange="uWhol(${s},'price',this.value); window.rWholB();">
                </div>
            </div>
        </div>`}).join("")}</div>
    <button type="button" onclick="addWhol()" class="w-full py-3.5 bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] text-[var(--color-primary)] font-bold rounded-xl text-xs sm:text-sm border-2 border-[rgba(var(--color-primary-rgb),0.25)] dark:border-[rgba(var(--color-primary-rgb),0.35)] border-dashed hover:bg-[rgba(var(--color-primary-rgb),0.12)] transition-all flex items-center justify-center gap-2 active:scale-95 shadow-2xs cursor-pointer"><i class="fa-solid fa-tags text-base"></i> Tambah Tingkatan Grosir Eceran</button>`;t.innerHTML=a};window.addWhol=()=>{ke.push({minQty:2,price:0}),_t(ke),window.rWholB()};window.rmWhol=t=>{ke.splice(t,1),_t(ke),window.rWholB()};window.uWhol=(t,e,a)=>{ke[t][e]=parseFloat(a)||0};window.rMultiUnitsB=()=>{const t=document.getElementById("multi-units-builder-container");if(!t)return;const e=(document.getElementById("af-unit")?.value||"pcs").trim()||"pcs",a=parseFloat(document.getElementById("af-hpp")?.value)||0;let r='<div class="space-y-4 mb-4">';!Q||Q.length===0?r+=`<div class="text-center py-6 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl bg-slate-50/50 dark:bg-slate-900/40">
            <i class="fa-solid fa-boxes-packing text-slate-300 dark:text-slate-600 text-3xl mb-2"></i>
            <p class="text-xs font-bold text-slate-500 dark:text-slate-400">Belum ada kemasan bertingkat.</p>
            <p class="text-[10px] text-slate-400 max-w-sm mx-auto mt-1">Gunakan fitur ini jika barang dijual dalam satuan kemasan (contoh: 1 Roll = 100 Meter, 1 Dus = 6 Keping, 1 Karton = 24 Pcs, 1 Sak = 50 Kg).</p>
        </div>`:r+=Q.map((s,o)=>{const l=s.name||s.unitName||"",i=parseFloat(s.multiplier!=null?s.multiplier:s.conversionRatio)||1,d=parseFloat(s.price)||0,c=s.barcode||"",b=s.hpp!=null&&parseFloat(s.hpp)>0?parseFloat(s.hpp):Math.round(a*i),m=Xa(d,b);let u="";return d>0&&b>0&&(m.isNegative?u=`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-[10px] font-bold text-rose-600 dark:text-rose-400"><i class="fa-solid fa-triangle-exclamation"></i> Margin Negatif! Jual di bawah HPP modal (Rugi Rp ${Math.abs(m.marginRp).toLocaleString("id-ID")})</span>`:m.isThin?u=`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-[10px] font-bold text-amber-600 dark:text-amber-400"><i class="fa-solid fa-circle-exclamation"></i> Margin Tipis (${m.marginPercent}%)</span>`:u=`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-[10px] font-bold text-emerald-600 dark:text-emerald-400"><i class="fa-solid fa-shield-halved"></i> Margin Sehat (+${m.marginPercent}% / Untung Rp ${m.marginRp.toLocaleString("id-ID")})</span>`),`
            <div class="bg-slate-50 dark:bg-slate-900/50 p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm relative group transition-all duration-300 hover:border-[var(--color-primary)]/40">
                <button type="button" onclick="rmMultiUnit(${o})" class="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-rose-50 border border-rose-200 text-rose-500 hover:bg-rose-500 hover:text-white dark:bg-rose-900/30 dark:border-rose-800 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 shadow-md z-10 cursor-pointer" title="Hapus Satuan Kemasan"><i class="fa-solid fa-trash text-xs"></i></button>
                
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-200/60 dark:border-slate-800">
                    <div class="flex items-center gap-2">
                        <span class="w-6 h-6 rounded-lg bg-[rgba(var(--color-primary-rgb),0.12)] text-[var(--color-primary)] font-black text-xs flex items-center justify-center">#${o+1}</span>
                        <span class="text-xs font-bold text-slate-800 dark:text-white uppercase tracking-wider">${p(l)||"Satuan Kemasan"}</span>
                        <span class="text-[11px] text-slate-500 font-medium">(${i} ${p(e)})</span>
                    </div>
                    <div>${u}</div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                        <label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-widest">Nama Kemasan</label>
                        <input autocomplete='off' type="text" placeholder="Cth: Roll / Dus / Sak" class="admin-input !text-xs !py-3 bg-white dark:bg-slate-800 shadow-sm font-bold" value="${p(l)}" onchange="uMultiUnit(${o},'name',this.value)" oninput="uMultiUnit(${o},'name',this.value)">
                    </div>
                    <div>
                        <label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-widest">Isi (per ${p(e)})</label>
                        <input autocomplete='off' type="number" step="0.01" min="0.01" placeholder="Cth: 100" class="admin-input !text-xs !py-3 bg-white dark:bg-slate-800 shadow-sm font-bold" value="${i}" onchange="uMultiUnit(${o},'multiplier',this.value); window.rMultiUnitsB();">
                    </div>
                    <div>
                        <label class="block text-[10px] font-bold text-[var(--color-primary)] mb-1.5 uppercase tracking-widest">Harga Jual Kemasan (Rp)</label>
                        <input autocomplete='off' type="number" min="0" placeholder="Cth: 680000" class="admin-input !text-xs !py-3 bg-white dark:bg-slate-800 shadow-sm font-bold text-[var(--color-primary)]" value="${d}" onchange="uMultiUnit(${o},'price',this.value); window.rMultiUnitsB();">
                    </div>
                    <div>
                        <label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-widest">Barcode Kemasan (Opsional)</label>
                        <div class="relative flex items-center">
                            <input autocomplete='off' type="text" id="mu-barcode-${o}" placeholder="Scan dus..." class="admin-input !text-xs !py-3 bg-white dark:bg-slate-800 shadow-sm !pr-10" value="${p(c)}" onchange="uMultiUnit(${o},'barcode',this.value)">
                            <button type="button" onclick="openCameraScanner('mu-barcode-${o}')" class="absolute right-1 w-8 h-8 flex items-center justify-center text-slate-400 hover:text-[var(--color-primary)] transition-all cursor-pointer" title="Scan Barcode Kemasan"><i class="fa-solid fa-qrcode text-base"></i></button>
                        </div>
                    </div>
                </div>

                <div class="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px] text-slate-400 font-medium">
                    <span class="flex items-center gap-1.5"><i class="fa-solid fa-calculator text-[var(--color-primary)]"></i> 1 ${p(l||"Kemasan")} = <b>${i} ${p(e)}</b> &bull; Modal HPP Ekuivalen: <b>Rp ${b.toLocaleString("id-ID")}</b></span>
                    ${d>0?`<span class="text-slate-500 font-bold">Harga Ecer Ekuivalen: Rp ${Math.round(d/i).toLocaleString("id-ID")} / ${p(e)}</span>`:""}
                </div>
            </div>`}).join(""),r+=`</div>
    <button type="button" onclick="addMultiUnit()" class="w-full py-3.5 bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] text-[var(--color-primary)] font-bold rounded-xl text-xs sm:text-sm border-2 border-[rgba(var(--color-primary-rgb),0.25)] dark:border-[rgba(var(--color-primary-rgb),0.35)] border-dashed hover:bg-[rgba(var(--color-primary-rgb),0.12)] transition-all flex items-center justify-center gap-2 active:scale-95 shadow-2xs cursor-pointer"><i class="fa-solid fa-box-open text-base"></i> Tambah Satuan Kemasan (Roll/Dus/Sak/Pack)</button>`,t.innerHTML=r};window.addMultiUnit=()=>{Q.push({name:"",multiplier:1,price:0,barcode:"",hpp:0}),mt(Q),window.rMultiUnitsB()};window.rmMultiUnit=t=>{Q.splice(t,1),mt(Q),window.rMultiUnitsB()};window.uMultiUnit=(t,e,a)=>{Q[t]&&(e==="multiplier"?Q[t].multiplier=parseFloat(a)||1:e==="price"?Q[t].price=parseFloat(a)||0:e==="hpp"?Q[t].hpp=parseFloat(a)||0:Q[t][e]=a)};let rr=null,q=[],wt=0,N={paperSize:"thermal-40x30",showStoreName:!0,showPrice:!0,showUnit:!0,showSkuText:!0,showBorderGuide:!1,barcodeHeight:58};const or=()=>{let t=k("modal-product-barcode-label");t?(t.className="fixed inset-0 z-[200] flex hidden items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/80 opacity-0 transition-opacity duration-300",document.body.appendChild(t)):(t=document.createElement("div"),t.id="modal-product-barcode-label",t.className="fixed inset-0 z-[200] flex hidden items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/80 opacity-0 transition-opacity duration-300",t.onclick=e=>{e.target===t&&window.closeProductBarcodeLabelModal?.()},t.innerHTML=`
            <div id="modal-product-barcode-label-box" class="modal-bottom-sheet relative flex max-h-[94dvh] sm:max-h-[90dvh] w-full max-w-5xl translate-y-full sm:translate-y-10 transform flex-col overflow-hidden rounded-t-[2rem] sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300">
                <div id="modal-product-barcode-label-content" class="flex-1 flex flex-col overflow-hidden min-h-0"></div>
            </div>
        `,document.body.appendChild(t))},lr=(t,e=null)=>{const a=k("modal-product-fifo");if(a&&!a.classList.contains("hidden")){const d=k("modal-product-fifo-box");d&&X(a,d),typeof window.requestCloseModal=="function"&&window.requestCloseModal("productFifo",!0)}const r=k("modal-po-detail");if(r&&!r.classList.contains("hidden")){const d=k("modal-po-detail-box");d&&X(r,d),typeof window.requestCloseModal=="function"&&window.requestCloseModal("purchaseDetail",!0)}or();const s=(n.products||[]).find(d=>String(d.id)===String(t));if(!s){x("Produk tidak ditemukan!");return}if(rr=String(s.id),wt=0,q=[],Array.isArray(s.variants)&&s.variants.length>0)s.variants.forEach((d,c)=>{const b=(d.barcode||d.sku||`${s.sku||s.id}-${c+1}`).trim(),m=parseFloat(d.stock)||0,u=e&&(e[b]!==void 0||e[c]!==void 0)?Math.max(0,parseInt(e[b]??e[c],10)):1;q.push({id:`${s.id}_var_${c}`,name:s.name||"Produk",variantName:d.name||d.title||`Varian ${c+1}`,sku:b,price:parseFloat(d.price!==void 0?d.price:s.price)||0,unit:d.unit||s.unit||"pcs",stock:m,qty:u,hex:d.hex||null})});else{const d=(s.sku||s.barcode||`SKU-${s.id}`).trim(),c=parseFloat(s.stock)||0,b=e&&e[d]!==void 0?Math.max(1,parseInt(e[d],10)):Math.min(Math.max(1,Math.round(c)||1),50);q.push({id:String(s.id),name:s.name||"Produk",variantName:"",sku:d,price:parseFloat(s.price)||0,unit:s.unit||"pcs",stock:c,qty:b,hex:s.hex||null})}Ie();const l=k("modal-product-barcode-label"),i=k("modal-product-barcode-label-box");!l||!i||(document.body.appendChild(l),l.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("productBarcodeLabel"),ie(l,i))},ir=(t=!1)=>{const e=k("modal-product-barcode-label"),a=k("modal-product-barcode-label-box");!e||!a||(!t&&typeof window.requestCloseModal=="function"?window.requestCloseModal("productBarcodeLabel",!1,()=>X(e,a)):X(e,a))},Ie=()=>{const t=k("modal-product-barcode-label-content");if(!t)return;const e=(n.products||[]).find(d=>String(d.id)===String(rr));if(!e)return;const a=n.store?.name||"TOKO PUTRI",r=q.reduce((d,c)=>d+(parseInt(c.qty,10)||0),0),s=q[wt]||q[0]||{name:e.name,variantName:"",sku:e.sku||"SKU-001",price:e.price||0,unit:e.unit||"pcs"},o=N.paperSize==="a4-2x7"?14:30,l=Math.ceil(r/o)||0,i=Xt(s.sku,{height:N.barcodeHeight,showText:N.showSkuText,fontSize:10});t.innerHTML=`
        <!-- 1. HEADER MODAL (SOLID PINNED) -->
        <div class="shrink-0 px-5 sm:px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between z-10">
            <div class="flex items-center gap-3 min-w-0">
                <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-white text-base shadow-sm shrink-0 bg-indigo-600">
                    <i class="fa-solid fa-barcode"></i>
                </div>
                <div class="min-w-0">
                    <div class="flex items-center gap-2 flex-wrap">
                        <h3 class="text-sm sm:text-base font-black text-slate-900 dark:text-white truncate">
                            Cetak Label Barcode &amp; Harga Barang
                        </h3>
                        <span class="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                            Code 128 • Universal
                        </span>
                    </div>
                    <p class="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                        ${p(e.name)} • ${q.length} Item / Varian Terdaftar
                    </p>
                </div>
            </div>
            <button onclick="window.closeProductBarcodeLabelModal()" class="w-8 h-8 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center text-sm transition-all cursor-pointer shrink-0">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </div>

        <!-- 2. BODY UTAMA (2-KOLOM RESPONSIVE INDEPENDENT SCROLL) -->
        <div class="flex-1 overflow-y-auto custom-scrollbar min-h-0 p-4 sm:p-6 bg-slate-50/60 dark:bg-slate-950/40">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-5">
                
                <!-- KOLOM KIRI: KONFIGURASI VARIAN, KUANTITAS & KERTAS (7 DARI 12) -->
                <div class="lg:col-span-7 space-y-4">
                    
                    <!-- KARTU PRESET UKURAN PRINTER / KERTAS -->
                    <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs space-y-3">
                        <div class="flex items-center justify-between">
                            <span class="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-2">
                                <i class="fa-solid fa-print text-indigo-600 dark:text-indigo-400"></i>
                                <span>Pilih Format Printer &amp; Ukuran Label</span>
                            </span>
                            <span class="text-[10px] font-bold text-slate-400">Universal Support</span>
                        </div>

                        <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            <button type="button" onclick="window.setBarcodeLabelPaper('thermal-40x30')" class="p-2.5 rounded-xl border text-left transition-all cursor-pointer ${N.paperSize==="thermal-40x30"?"border-indigo-600 bg-indigo-50/60 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 ring-1 ring-indigo-600":"border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-slate-300 text-slate-700 dark:text-slate-300"}">
                                <div class="flex items-center justify-between mb-1">
                                    <span class="text-[11px] font-black">Thermal 40x30</span>
                                    <span class="text-[9px] px-1 py-0.2 rounded bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 font-bold">Populer</span>
                                </div>
                                <span class="text-[10px] text-slate-400 block">Stiker Rak &amp; Barang</span>
                            </button>

                            <button type="button" onclick="window.setBarcodeLabelPaper('thermal-50x30')" class="p-2.5 rounded-xl border text-left transition-all cursor-pointer ${N.paperSize==="thermal-50x30"?"border-indigo-600 bg-indigo-50/60 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 ring-1 ring-indigo-600":"border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-slate-300 text-slate-700 dark:text-slate-300"}">
                                <span class="text-[11px] font-black block mb-1">Thermal 50x30</span>
                                <span class="text-[10px] text-slate-400 block">Stiker Ekstra Lega</span>
                            </button>

                            <button type="button" onclick="window.setBarcodeLabelPaper('thermal-58mm')" class="p-2.5 rounded-xl border text-left transition-all cursor-pointer ${N.paperSize==="thermal-58mm"?"border-indigo-600 bg-indigo-50/60 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 ring-1 ring-indigo-600":"border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-slate-300 text-slate-700 dark:text-slate-300"}">
                                <span class="text-[11px] font-black block mb-1">Roll 58 mm</span>
                                <span class="text-[10px] text-slate-400 block">Continuous Stiker</span>
                            </button>

                            <button type="button" onclick="window.setBarcodeLabelPaper('thermal-80mm')" class="p-2.5 rounded-xl border text-left transition-all cursor-pointer ${N.paperSize==="thermal-80mm"?"border-indigo-600 bg-indigo-50/60 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 ring-1 ring-indigo-600":"border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-slate-300 text-slate-700 dark:text-slate-300"}">
                                <span class="text-[11px] font-black block mb-1">Roll 80 mm</span>
                                <span class="text-[10px] text-slate-400 block">Label POS Lebar</span>
                            </button>

                            <button type="button" onclick="window.setBarcodeLabelPaper('a4-3x10')" class="p-2.5 rounded-xl border text-left transition-all cursor-pointer ${N.paperSize==="a4-3x10"?"border-indigo-600 bg-indigo-50/60 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 ring-1 ring-indigo-600":"border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-slate-300 text-slate-700 dark:text-slate-300"}">
                                <div class="flex items-center justify-between mb-1">
                                    <span class="text-[11px] font-black">Kertas A4 (3x10)</span>
                                    <span class="text-[9px] px-1 py-0.2 rounded bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 font-bold">30 Pcs</span>
                                </div>
                                <span class="text-[10px] text-slate-400 block">Printer Biasa / Inkjet</span>
                            </button>

                            <button type="button" onclick="window.setBarcodeLabelPaper('a4-2x7')" class="p-2.5 rounded-xl border text-left transition-all cursor-pointer ${N.paperSize==="a4-2x7"?"border-indigo-600 bg-indigo-50/60 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 ring-1 ring-indigo-600":"border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-slate-300 text-slate-700 dark:text-slate-300"}">
                                <div class="flex items-center justify-between mb-1">
                                    <span class="text-[11px] font-black">Kertas A4 (2x7)</span>
                                    <span class="text-[9px] px-1 py-0.2 rounded bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 font-bold">14 Pcs</span>
                                </div>
                                <span class="text-[10px] text-slate-400 block">Label Besar A4</span>
                            </button>
                        </div>
                    </div>

                    <!-- DAFTAR ITEM / VARIAN & JUMLAH CETAK -->
                    <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs space-y-3">
                        <div class="flex items-center justify-between flex-wrap gap-2">
                            <span class="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-2">
                                <i class="fa-solid fa-list-check text-indigo-600 dark:text-indigo-400"></i>
                                <span>Tentukan Jumlah Label per Varian</span>
                            </span>
                            <div class="flex items-center gap-1.5 text-[11px]">
                                <button type="button" onclick="window.setAllBarcodeLabelQty(1)" class="px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold transition-all cursor-pointer">
                                    Set 1 Pcs
                                </button>
                                <button type="button" onclick="window.setAllBarcodeLabelQty('stock')" class="px-2 py-0.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 font-bold border border-indigo-200/70 transition-all cursor-pointer">
                                    Sesuai Stok
                                </button>
                                <button type="button" onclick="window.setAllBarcodeLabelQty(0)" class="px-2 py-0.5 rounded-lg bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/50 text-rose-600 font-bold transition-all cursor-pointer">
                                    Reset (0)
                                </button>
                            </div>
                        </div>

                        <!-- LIST KARTU VARIAN -->
                        <div class="space-y-2.5 max-h-[340px] overflow-y-auto custom-scrollbar pr-1">
                            ${q.map((d,c)=>{const b=wt===c;return`
                                    <div class="p-3 sm:p-3.5 rounded-xl border transition-all ${b?"border-indigo-500 bg-indigo-50/20 dark:bg-indigo-950/20 shadow-2xs":"border-slate-200/90 dark:border-slate-700/80 bg-slate-50/40 dark:bg-slate-800/40 hover:border-slate-300"} flex items-center justify-between gap-3">
                                        <div class="flex items-center gap-2.5 min-w-0 cursor-pointer" onclick="window.selectBarcodePreviewIndex(${c})">
                                            ${d.hex?`
                                                <div class="w-5 h-5 rounded-full border border-slate-300 shadow-2xs shrink-0" style="background-color: ${p(d.hex)}"></div>
                                            `:`
                                                <div class="w-6 h-6 rounded-lg bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-[10px] text-slate-500 font-bold shrink-0">
                                                    #${c+1}
                                                </div>
                                            `}
                                            <div class="min-w-0">
                                                <div class="flex items-center gap-1.5 flex-wrap">
                                                    <span class="text-xs font-black text-slate-800 dark:text-white truncate">
                                                        ${p(d.variantName||d.name)}
                                                    </span>
                                                    ${b?'<span class="px-1.5 py-0.2 rounded text-[8.5px] font-black uppercase bg-indigo-600 text-white">Preview</span>':""}
                                                </div>
                                                <div class="flex items-center gap-2 text-[10px] text-slate-400 font-medium">
                                                    <span class="font-mono font-bold text-slate-600 dark:text-slate-300">${p(d.sku)}</span>
                                                    <span>•</span>
                                                    <span>${f(d.price)}</span>
                                                    <span>•</span>
                                                    <span>Stok: <b>${d.stock}</b></span>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- STEPPER KUANTITAS -->
                                        <div class="flex items-center gap-1.5 shrink-0">
                                            <button type="button" onclick="window.adjustBarcodeLabelQty(${c}, -1)" class="w-7 h-7 rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 flex items-center justify-center text-xs font-bold text-slate-600 dark:text-slate-200 hover:bg-slate-100 transition-all cursor-pointer active:scale-95">
                                                <i class="fa-solid fa-minus text-[10px]"></i>
                                            </button>
                                            <input type="number" min="0" max="999" value="${d.qty}" onchange="window.setBarcodeLabelQtyDirect(${c}, this.value)" class="w-12 h-7 text-center font-mono font-black text-xs border border-slate-200 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-indigo-500">
                                            <button type="button" onclick="window.adjustBarcodeLabelQty(${c}, 1)" class="w-7 h-7 rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 flex items-center justify-center text-xs font-bold text-slate-600 dark:text-slate-200 hover:bg-slate-100 transition-all cursor-pointer active:scale-95">
                                                <i class="fa-solid fa-plus text-[10px]"></i>
                                            </button>
                                        </div>
                                    </div>
                                `}).join("")}
                        </div>
                    </div>

                    <!-- TOGGLE OPSI KONTEN LABEL -->
                    <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs space-y-2.5">
                        <span class="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-2">
                            <i class="fa-solid fa-sliders text-indigo-600 dark:text-indigo-400"></i>
                            <span>Opsi Tampilan Informasi Stiker</span>
                        </span>
                        
                        <div class="grid grid-cols-2 gap-2.5 text-xs font-bold text-slate-700 dark:text-slate-300">
                            <label class="flex items-center gap-2 cursor-pointer select-none">
                                <input type="checkbox" ${N.showStoreName?"checked":""} onchange="window.toggleBarcodeOption('showStoreName', this.checked)" class="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500">
                                <span>Kop Nama Toko</span>
                            </label>

                            <label class="flex items-center gap-2 cursor-pointer select-none">
                                <input type="checkbox" ${N.showPrice?"checked":""} onchange="window.toggleBarcodeOption('showPrice', this.checked)" class="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500">
                                <span>Harga Jual Produk</span>
                            </label>

                            <label class="flex items-center gap-2 cursor-pointer select-none">
                                <input type="checkbox" ${N.showUnit?"checked":""} onchange="window.toggleBarcodeOption('showUnit', this.checked)" class="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500">
                                <span>Satuan Barang (/ pcs)</span>
                            </label>

                            <label class="flex items-center gap-2 cursor-pointer select-none">
                                <input type="checkbox" ${N.showSkuText?"checked":""} onchange="window.toggleBarcodeOption('showSkuText', this.checked)" class="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500">
                                <span>Teks SKU di Bawah Barcode</span>
                            </label>

                            <label class="flex items-center gap-2 cursor-pointer select-none col-span-2 pt-1 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500">
                                <input type="checkbox" ${N.showBorderGuide?"checked":""} onchange="window.toggleBarcodeOption('showBorderGuide', this.checked)" class="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500">
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
                                <i class="fa-solid fa-eye text-indigo-600 dark:text-indigo-400"></i>
                                <span>Pratinjau Fisik Stiker Label</span>
                            </span>
                            <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold">
                                Skala 1:1
                            </span>
                        </div>

                        <!-- WADAH SIMULASI STIKER FISIK -->
                        <div class="p-6 bg-slate-100 dark:bg-slate-950 rounded-2xl flex items-center justify-center border border-slate-200/60 dark:border-slate-800 min-h-[220px]">
                            <div class="bg-white text-slate-900 rounded-lg shadow-xl p-3 flex flex-col justify-between items-center text-center transition-all ${N.paperSize==="thermal-50x30"?"w-[230px] h-[145px]":"w-[210px] h-[155px]"} border ${N.showBorderGuide?"border-dashed border-slate-400":"border-slate-200"}">
                                
                                <!-- KOP TOKO -->
                                ${N.showStoreName?`
                                    <div class="text-[9px] font-black tracking-widest uppercase text-slate-700 border-b border-slate-200 w-full pb-0.5 truncate">
                                        ${p(a)}
                                    </div>
                                `:""}

                                <!-- NAMA BARANG & VARIAN -->
                                <div class="w-full px-1 pt-0.5">
                                    <p class="text-[10px] font-black leading-tight truncate text-slate-900" title="${p(s.name)}">
                                        ${p(s.name)}
                                    </p>
                                    ${s.variantName?`
                                        <p class="text-[9px] font-bold text-indigo-600 leading-tight truncate mt-0.5">
                                            [${p(s.variantName)}]
                                        </p>
                                    `:""}
                                </div>

                                <!-- BARCODE VEKTOR CODE 128 -->
                                <div class="w-full my-auto px-1 flex flex-col items-center justify-center">
                                    <div class="w-full max-w-[195px]">
                                        ${i}
                                    </div>
                                </div>

                                <!-- HARGA JUAL -->
                                ${N.showPrice?`
                                    <div class="w-full pt-0.5 border-t border-slate-200 flex items-center justify-center gap-1 font-mono">
                                        <span class="text-xs font-black text-slate-950 tracking-tight">
                                            ${f(s.price)}
                                        </span>
                                        ${N.showUnit?`
                                            <span class="text-[9px] font-bold text-slate-500">/${p(s.unit||"pcs")}</span>
                                        `:""}
                                    </div>
                                `:""}
                            </div>
                        </div>

                        <!-- RINGKASAN PRODUKSI CETAK -->
                        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/90 dark:border-slate-700/80 space-y-2">
                            <div class="flex items-center justify-between text-xs font-bold text-slate-600 dark:text-slate-300">
                                <span>Total Stiker Dicetak:</span>
                                <span class="text-base font-black text-indigo-600 dark:text-indigo-400 font-mono">${r} Lembar</span>
                            </div>

                            ${N.paperSize.startsWith("a4")?`
                                <div class="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400 pt-1.5 border-t border-slate-200 dark:border-slate-700">
                                    <span>Estimasi Kertas A4:</span>
                                    <span class="font-black text-slate-800 dark:text-white font-mono">${l} Lembar (${o} label/lembar)</span>
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
        <div class="shrink-0 px-4 sm:px-6 py-3.5 sm:py-4 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 z-10">
            <div class="text-xs text-slate-500 dark:text-slate-400 font-bold hidden sm:block">
                <span>Siap dicetak ke printer label thermal USB/Bluetooth atau printer A4 biasa.</span>
            </div>

            <div class="flex items-center gap-2 w-full sm:w-auto">
                <button type="button" onclick="window.closeProductBarcodeLabelModal()" class="h-11 sm:h-12 px-3.5 sm:px-4 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer active:scale-95 shrink-0 flex items-center justify-center">
                    Batal
                </button>

                <button type="button" onclick="window.printBarcodeLabelsThermalRawbt()" class="flex-1 sm:flex-initial h-11 sm:h-12 px-3.5 sm:px-4 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs transition-all active:scale-95 shadow-xs flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap" title="Cetak via Thermal Bluetooth / RawBT">
                    <i class="fa-solid fa-satellite-dish text-xs"></i>
                    <span>RawBT / Bluetooth</span>
                </button>

                <button type="button" onclick="window.printBarcodeLabelsBrowser()" class="flex-1 sm:flex-initial h-11 sm:h-12 px-4 sm:px-6 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs uppercase tracking-wider transition-all active:scale-95 shadow-md flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap">
                    <i class="fa-solid fa-print text-xs"></i>
                    <span>Cetak Sekarang (${r})</span>
                </button>
            </div>
        </div>
    `},nr=t=>{N.paperSize=t,Ie()},dr=(t,e)=>{N[t]=!!e,Ie()},cr=t=>{t>=0&&t<q.length&&(wt=t,Ie())},pr=(t,e)=>{if(q[t]){const a=parseInt(q[t].qty,10)||0;q[t].qty=Math.max(0,a+e),Ie()}},mr=(t,e)=>{q[t]&&(q[t].qty=Math.max(0,parseInt(e,10)||0),Ie())},br=t=>{q.forEach(e=>{t==="stock"?e.qty=Math.max(1,Math.round(parseFloat(e.stock)||1)):typeof t=="number"&&(e.qty=Math.max(0,t))}),Ie()},ur=()=>{if(q.reduce((b,m)=>b+(parseInt(m.qty,10)||0),0)<=0){x("Tentukan jumlah label yang akan dicetak terlebih dahulu!");return}const e=n.store?.name||"TOKO PUTRI";N.paperSize.startsWith("a4"),N.paperSize;const a=N.paperSize==="thermal-58mm",r=N.paperSize==="thermal-80mm",s=[];q.forEach(b=>{const m=parseInt(b.qty,10)||0;for(let u=0;u<m;u++)s.push(b)});const o=s.map(b=>{const m=Xt(b.sku,{height:N.barcodeHeight,showText:N.showSkuText,fontSize:10});return`
            <div class="label-item ${N.showBorderGuide?"with-border":""}">
                ${N.showStoreName?`
                    <div class="lbl-store">${p(e)}</div>
                `:""}
                <div class="lbl-info">
                    <div class="lbl-name">${p(b.name)}</div>
                    ${b.variantName?`<div class="lbl-variant">[${p(b.variantName)}]</div>`:""}
                </div>
                <div class="lbl-barcode">${m}</div>
                ${N.showPrice?`
                    <div class="lbl-price">
                        ${f(b.price)}${N.showUnit?`<span class="lbl-unit">/${p(b.unit||"pcs")}</span>`:""}
                    </div>
                `:""}
            </div>
        `}).join("");let l="",i="thermal-container";N.paperSize==="thermal-40x30"?l=`
            @page { size: 40mm 30mm; margin: 0; }
            body { margin: 0; padding: 0; }
            .label-item {
                width: 40mm; height: 30mm;
                page-break-after: always; break-after: page;
                box-sizing: border-box; padding: 1.5mm 2mm;
                display: flex; flex-direction: column; justify-content: space-between; align-items: center; text-align: center;
                overflow: hidden;
            }
        `:N.paperSize==="thermal-50x30"?l=`
            @page { size: 50mm 30mm; margin: 0; }
            body { margin: 0; padding: 0; }
            .label-item {
                width: 50mm; height: 30mm;
                page-break-after: always; break-after: page;
                box-sizing: border-box; padding: 1.5mm 2.5mm;
                display: flex; flex-direction: column; justify-content: space-between; align-items: center; text-align: center;
                overflow: hidden;
            }
        `:a?l=`
            @page { size: 58mm auto; margin: 0; }
            body { margin: 0; padding: 0; width: 58mm; }
            .label-item {
                width: 54mm; margin: 0 auto 3mm;
                box-sizing: border-box; padding: 2mm 2mm;
                display: flex; flex-direction: column; justify-content: space-between; align-items: center; text-align: center;
                border-bottom: 1px dashed #bbb;
            }
        `:r?l=`
            @page { size: 80mm auto; margin: 0; }
            body { margin: 0; padding: 0; width: 80mm; }
            .label-item {
                width: 76mm; margin: 0 auto 3mm;
                box-sizing: border-box; padding: 2mm 3mm;
                display: flex; flex-direction: column; justify-content: space-between; align-items: center; text-align: center;
                border-bottom: 1px dashed #bbb;
            }
        `:N.paperSize==="a4-3x10"?(i="a4-grid-3x10",l=`
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
        `):N.paperSize==="a4-2x7"&&(i="a4-grid-2x7",l=`
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
        `);const d=`<!DOCTYPE html>
    <html lang="id">
    <head>
        <meta charset="UTF-8">
        <title>Cetak Label Barcode - ${p(e)}</title>
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
            ${l}
        </style>
    </head>
    <body onload="setTimeout(() => { window.print(); }, 450)">
        <div class="${i}">
            ${o}
        </div>
    </body>
    </html>`;let c=k("barcode-print-isolated-iframe");c||(c=document.createElement("iframe"),c.id="barcode-print-isolated-iframe",c.style.position="fixed",c.style.right="0",c.style.bottom="0",c.style.width="0",c.style.height="0",c.style.border="0",c.style.opacity="0",c.style.pointerEvents="none",document.body.appendChild(c));try{const b=c.contentWindow.document;b.open(),b.write(d),b.close()}catch{const m=window.open("","_blank");m?(m.document.open(),m.document.write(d),m.document.close()):x("Izinkan pop-up peramban untuk mencetak label.")}},xr=async()=>{const t=q.reduce((l,i)=>l+(parseInt(i.qty,10)||0),0);if(t<=0){x("Tentukan jumlah label yang akan dicetak terlebih dahulu!");return}let e;try{e=await J(()=>import("./module-print-BX8_SYqv.js").then(l=>l.bl),__vite__mapDeps([1,2,3]))}catch{x("Modul thermal RawBT tidak dapat dimuat.");return}const{ThermalReceiptBuilder:a,printViaRawBT:r}=e,s=n.store?.name||"TOKO PUTRI",o=new a(58);q.forEach(l=>{const i=parseInt(l.qty,10)||0;for(let d=0;d<i;d++)o.align("center"),N.showStoreName&&o.line(s,{bold:!0,size:"normal"}),o.line(l.name,{bold:!0,size:"normal"}),l.variantName&&o.line(`[${l.variantName}]`,{size:"normal"}),o.barcode(l.sku,"CODE128",55),N.showPrice&&o.line(f(l.price)+(N.showUnit?`/${l.unit||"pcs"}`:""),{bold:!0,size:"large"}),o.feed(2),o.cut()});try{await r(o),x(`Perintah cetak ${t} label dikirim ke RawBT!`)}catch(l){x("Gagal mengirim ke RawBT: "+l.message)}};window.openProductBarcodeLabelModal=lr;window.closeProductBarcodeLabelModal=ir;window.setBarcodeLabelPaper=nr;window.toggleBarcodeOption=dr;window.selectBarcodePreviewIndex=cr;window.adjustBarcodeLabelQty=pr;window.setBarcodeLabelQtyDirect=mr;window.setAllBarcodeLabelQty=br;window.printBarcodeLabelsBrowser=ur;window.printBarcodeLabelsThermalRawbt=xr;let dt="products";const ct=t=>{dt=t,window.cTab=t};let pt="";const fr=t=>{pt=t,window.aSq=t};let ae=null;const wa=t=>{ae=t,window.eId=t};let Me=!1;const H=t=>{Me=t};let F=[];const ze=t=>{F=t};let ke=[];const _t=t=>{ke=t};let oe=[];const Kt=t=>{oe=t};let Q=[];const mt=t=>{Q=t,window.tMultiUnits=t};let le=[];const Je=t=>{le=t,window.tSubCats=t};window.setCTab=ct;window.setASq=fr;window.setEId=wa;window.setTSubCats=Je;window.setTMultiUnits=mt;const me=(t,e,a)=>{console.error(`[AdminRouter] Gagal memuat modul ${t}:`,a),j("admin-content",`
        <div class="max-w-md mx-auto my-12 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-center">
            <div class="w-14 h-14 mx-auto mb-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 text-rose-500 flex items-center justify-center text-2xl">
                <i class="fa-solid fa-triangle-exclamation"></i>
            </div>
            <h3 class="font-extrabold text-base text-slate-800 dark:text-white mb-1">Gagal Memuat ${t}</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
                Modul gagal diunduh dari server. Hal ini biasanya terjadi jika koneksi terputus atau versi aplikasi baru saja diperbarui di server.
            </p>
            <div class="flex items-center justify-center gap-3">
                <button type="button" onclick="openAdminTab('${e}')" class="px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-200 transition-all cursor-pointer active:scale-95">
                    <i class="fa-solid fa-rotate-right mr-1.5"></i> Coba Lagi
                </button>
                <button type="button" onclick="window.location.reload()" class="px-4 py-2.5 rounded-xl text-white text-xs font-black shadow-sm transition-all cursor-pointer active:scale-95 hover:opacity-95" style="background: var(--color-primary);">
                    <i class="fa-solid fa-arrows-rotate mr-1.5"></i> Segarkan Halaman
                </button>
            </div>
        </div>
    `)};typeof window.openExpenseModal!="function"&&(window.openExpenseModal=(t=null)=>{J(()=>import("./expenses-BzGbovu1.js"),__vite__mapDeps([6,1,2,3,0,4,5,7])).then(e=>{e&&typeof e.openExpenseModal=="function"&&e.openExpenseModal(t)}).catch(e=>{console.error("[Expenses] Gagal memuat modal pengeluaran via proxy:",e),x("Gagal memuat form pengeluaran.")})});typeof window.openDeliveryModal!="function"&&(window.openDeliveryModal=t=>{J(()=>Promise.resolve().then(()=>yo),void 0).then(e=>{e&&typeof e.openDeliveryModal=="function"&&e.openDeliveryModal(t)}).catch(e=>{console.error("[Delivery] Gagal memuat modul pengiriman via proxy:",e),x("Gagal memuat form pengiriman.")})});typeof window.openSalesReturnModal!="function"&&(window.openSalesReturnModal=(t=null)=>{J(()=>import("./returns-DghfqBVE.js"),__vite__mapDeps([8,1,2,3,0,4,5])).then(e=>{e&&typeof e.openSalesReturnModal=="function"&&e.openSalesReturnModal(t)}).catch(e=>{console.error("[Returns] Gagal memuat modul retur via proxy:",e),x("Gagal memuat form retur.")})});const gr=(t,e=!1)=>{if(!St(t==="staff"?"cashiers":t)){x("Akses Dibatasi: Akun Anda tidak memiliki izin untuk membuka modul ini."),typeof window.openAdminMenu=="function"&&window.openAdminMenu();return}const r=document.querySelector("#view-admin .scroll-content");r&&(r.scrollTop=0),typeof window.hideFloatingScrollTop=="function"&&window.hideFloatingScrollTop();const s=k("view-admin");if(s&&(t==="pos"?s.classList.add("admin-pos-mode"):s.classList.remove("admin-pos-mode")),Va(t),Er(""),!e){const l=history.state;l&&l.view==="view-admin"&&l.tab?history.replaceState({view:"view-admin",tab:t},"",window.location.href):history.pushState({view:"view-admin",tab:t},"",window.location.href)}if(at("admin-dashboard-view"),Ue("admin-content-view"),Ue("btn-admin-back"),at("admin-logo-box"),Le("admin-header-title",{orders:"Pesanan",settings:"Toko",products:"Produk",categories:"Kategori",brands:"Merek",banks:"Rekening",banners:"Banner",vouchers:"Voucher",customers:"Database Pelanggan",rewards:"Program Hadiah",reviews:"Ulasan Pelanggan",faqs:"Tanya Jawab / Q&A",reports:"Pusat Laporan & Keuangan",tax:"Pusat Laporan & Keuangan",expenses:"Biaya Operasional Toko",stock_opname:"Stock Opname (Audit Fisik)",returns:"Retur Barang (RMA)",piutang:"Piutang Tempo",colors:"Database Warna",changelog:"Log Pembaruan Sistem",suppliers:"Supplier & Rekanan",purchases:"Order Pembelian & Hutang PO",pos:"Kasir POS",cashiers:"Kelola Staf & Hak Akses",staff:"Kelola Staf & Hak Akses",backup_sync:"Pusat Data & Sinkronisasi"}[t]||"CMS"),t!=="orders"&&Pe&&(Pe(),tt(null)),t!=="customers"&&we&&(we(),Xe(null)),t!=="reviews"&&ye&&(ye(),Ze(null)),t==="settings")typeof window.rAdmSet=="function"&&window.rAdmSet();else if(t==="orders")typeof window.rAdmOrd=="function"&&window.rAdmOrd();else if(t==="reports"||t==="tax")J(()=>import("./reports-BJdl2hH5.js"),__vite__mapDeps([9,1,2,3,10,0,4,5,7])).then(l=>l.renderReportsHubView(t==="tax"?"tax":null)).catch(l=>{me("Pusat Laporan & Keuangan",t,l)});else if(t==="piutang")typeof window.rAdmPiutang=="function"&&window.rAdmPiutang();else if(t==="suppliers")J(()=>import("./suppliers-BxS7ctWh.js"),__vite__mapDeps([11,1,2,3,0,4,5])).then(l=>l.renderSuppliersView()).catch(l=>{me("Supplier & Rekanan",t,l)});else if(t==="purchases")J(()=>import("./purchases-Bl0jDruc.js"),__vite__mapDeps([10,1,2,3,0,4,5])).then(l=>l.renderPurchasesView()).catch(l=>{me("Order Pembelian (PO)",t,l)});else if(t==="expenses")J(()=>import("./expenses-BzGbovu1.js"),__vite__mapDeps([6,1,2,3,0,4,5,7])).then(l=>l.renderExpensesAdminView()).catch(l=>{me("Biaya Operasional Toko",t,l)});else if(t==="stock_opname")J(()=>import("./stock-opname-Qsp75uJj.js"),__vite__mapDeps([12,1,2,3,0,4,5])).then(l=>l.renderStockOpnameView()).catch(l=>{me("Stock Opname (Audit Fisik)",t,l)});else if(t==="returns")J(()=>import("./returns-DghfqBVE.js"),__vite__mapDeps([8,1,2,3,0,4,5])).then(l=>l.renderReturnsView()).catch(l=>{me("Retur Barang & RMA",t,l)});else if(t==="customers"){j("admin-content",'<div class="text-center py-16"><i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i></div>'),we&&(we(),Xe(null));const l=P.collection("freshmart").doc("cms_data").collection("customers").onSnapshot(i=>{n.customers=i.docs.map(d=>{const c=d.data();return parseFloat(c.paylaterUsed)<0&&(c.paylaterUsed=0,d.ref.update({paylaterUsed:0}).catch(()=>{})),c}),typeof window.rAdmL=="function"&&window.rAdmL("customers")},()=>{x("Gagal memuat data pelanggan!"),typeof window.rAdmL=="function"&&window.rAdmL("customers")});Xe(l)}else if(t==="reviews"){j("admin-content",'<div class="text-center py-16"><i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i></div>'),ye&&(ye(),Ze(null));const l=P.collection("freshmart").doc("cms_data").collection("reviews").onSnapshot(i=>{const d=i.docs.map(c=>c.data());d.sort((c,b)=>{const m=c.createdAt&&c.createdAt.toMillis?c.createdAt.toMillis():0;return(b.createdAt&&b.createdAt.toMillis?b.createdAt.toMillis():0)-m}),jr(d),typeof window.rAdmReviews=="function"&&window.rAdmReviews()},()=>{x("Gagal memuat ulasan!")});Ze(l)}else t==="faqs"?typeof window.rAdmFAQ=="function"&&window.rAdmFAQ():t==="changelog"?typeof window.rAdmChangelog=="function"&&window.rAdmChangelog():t==="rewards"?(typeof window.attachRewardsRealtime=="function"&&window.attachRewardsRealtime(),typeof window.rAdmL=="function"&&window.rAdmL("rewards")):t==="pos"?J(()=>import("./module-pos-D-0Nj8Cc.js").then(l=>l.R),__vite__mapDeps([0,1,2,3,4,5])).then(l=>l.renderPOS()).catch(l=>{me("Kasir POS",t,l)}):t==="cashiers"||t==="staff"?J(()=>import("./pos-cashier-admin-DgMeygrt.js"),__vite__mapDeps([13,1,2,3,0,4,5])).then(l=>l.renderCashierAccounts()).catch(l=>{me("Kelola Staf & Hak Akses",t,l)}):t==="backup_sync"?J(()=>import("./backup-sync-qBV9LFbt.js"),__vite__mapDeps([14,1,2,3])).then(l=>l.renderBackupSyncView()).catch(l=>{me("Pusat Data & Sinkronisasi",t,l)}):typeof window.rAdmL=="function"&&window.rAdmL(t)};window.openAdminTab=gr;const Ve=[{id:"pickup",name:"Mobil Pick-up (L300 / Gran Max)",shortName:"Mobil Pick-up",sub:"L300 / Gran Max",capacity:"1.5 Ton",icon:"fa-truck-pickup"},{id:"truck_engkel",name:"Truk Engkel 4 Roda (Canter/Dyna)",shortName:"Truk Engkel 4 Roda",sub:"Canter / Dyna",capacity:"3.5 Ton",icon:"fa-truck"},{id:"truck_dobel",name:"Truk Dobel 6 Roda (Colt Diesel)",shortName:"Truk Dobel 6 Roda",sub:"Colt Diesel",capacity:"7.0 Ton",icon:"fa-truck-moving"},{id:"trike",name:"Motor Roda Tiga Bak (Viar/Tosa)",shortName:"Motor Roda Tiga",sub:"Viar / Tosa Bak",capacity:"500 Kg",icon:"fa-motorcycle"},{id:"external",name:"Ekspedisi / Armada Luar / Sewa",shortName:"Ekspedisi Luar",sub:"Sewa / Cargo Luar",capacity:"Variatif",icon:"fa-dolly"},{id:"self_pickup",name:"Diambil Mandor Sendiri di Toko",shortName:"Ambil di Toko",sub:"Mandor Ambil Sendiri",capacity:"Mandiri",icon:"fa-person-walking-luggage"}],ya={pending_dispatch:{label:"Menunggu Muat",badgeClass:"bg-amber-100 text-amber-800 border-amber-300 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800",icon:"fa-boxes-packing"},out_for_delivery:{label:"Dalam Perjalanan",badgeClass:"bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800",icon:"fa-truck-fast"},delivered:{label:"Terkirim & Diterima",badgeClass:"bg-emerald-100 text-emerald-800 border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800",icon:"fa-circle-check"},returned:{label:"Gagal / Kembali",badgeClass:"bg-rose-100 text-rose-800 border-rose-300 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-800",icon:"fa-triangle-exclamation"}},Sa=(t="")=>{const e=new Date,a=String(e.getFullYear()).slice(-2),r=String(e.getMonth()+1).padStart(2,"0"),s=t?String(t).replace(/[^a-zA-Z0-9]/g,"").slice(-5).toUpperCase():Math.random().toString(36).substring(2,7).toUpperCase();return`DO-${a}${r}-${s}`},he=t=>{if(!t)return null;const e=t.delivery||{},a=e.recipientName||t.isDropPoint&&t.dropPoint?.name||t.customer?.name||"",r=e.recipientPhone||t.isDropPoint&&t.dropPoint?.wa||t.customer?.wa||"",s=e.destinationAddress||t.isDropPoint&&t.dropPoint?.address||t.customer?.address||"",o=e.destinationLat||t.isDropPoint&&t.dropPoint?.lat||t.customer?.lat||null,l=e.destinationLng||t.isDropPoint&&t.dropPoint?.lng||t.customer?.lng||null,i=e.unloadNotes||t.customer?.note||"",d=Array.isArray(t.items)?t.items:Array.isArray(t.cart)?t.cart:[],c=Array.isArray(e.checklist)&&e.checklist.length>0?e.checklist:d.map((b,m)=>({id:b.id||`item-${m}`,name:b.name||"Barang",variantName:b.variantName||"",qty:parseFloat(b.qty)||1,unit:b.unit||"pcs",loaded:!0}));return{doNumber:e.doNumber||Sa(t.orderId),orderId:t.orderId,status:e.status||"pending_dispatch",createdAt:e.createdAt||Date.now(),fleetType:e.fleetType||"pickup",fleetName:e.fleetName||"Mobil Pick-up (L300 / Gran Max)",plateNumber:e.plateNumber||"",driverName:e.driverName||"",driverPhone:e.driverPhone||"",helperName:e.helperName||"",recipientName:a,recipientPhone:r,destinationAddress:s,destinationLat:o,destinationLng:l,unloadNotes:i,dispatchedAt:e.dispatchedAt||null,deliveredAt:e.deliveredAt||null,signature:e.signature||null,checklist:c,logs:e.logs||[{status:"pending_dispatch",timestamp:e.createdAt||Date.now(),note:"Surat Jalan (DO) diterbitkan"}]}},Qe=t=>{const e=(B||[]).find(u=>String(u.orderId)===String(t));if(!e){x("Data pesanan tidak ditemukan!");return}const a=he(e),r=k("modal-delivery-order"),s=k("modal-delivery-order-box"),o=k("modal-delivery-order-content");if(!r||!s||!o)return;window._activeDeliveryOrderId=t,window._currentDeliveryData=a;const l=Xt(a.doNumber,{height:38,showText:!0,fontSize:9.5,className:"w-full max-w-[240px] h-auto"}),i=a.status==="pending_dispatch",d=a.status==="out_for_delivery",c=a.status==="delivered",b=a.checklist.filter(u=>u.loaded).length;let m="";i?m='<span class="px-2.5 py-1 rounded-full text-[10.5px] font-black uppercase tracking-wider bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200/80 dark:border-amber-800 flex items-center gap-1.5"><i class="fa-solid fa-boxes-packing"></i> Menunggu Muat</span>':d?m='<span class="px-2.5 py-1 rounded-full text-[10.5px] font-black uppercase tracking-wider bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200/80 dark:border-blue-800 flex items-center gap-1.5"><i class="fa-solid fa-truck-fast"></i> Dalam Perjalanan</span>':c?m='<span class="px-2.5 py-1 rounded-full text-[10.5px] font-black uppercase tracking-wider bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-800 flex items-center gap-1.5"><i class="fa-solid fa-circle-check"></i> Selesai / Terkirim</span>':m='<span class="px-2.5 py-1 rounded-full text-[10.5px] font-black uppercase tracking-wider bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300 border border-rose-200/80 dark:border-rose-800 flex items-center gap-1.5"><i class="fa-solid fa-triangle-exclamation"></i> Gagal / Kembali</span>',o.innerHTML=`
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
                                <span class="font-mono font-black text-sm sm:text-base text-slate-900 dark:text-white">#${p(a.doNumber)}</span>
                                ${m}
                            </div>
                            <p class="text-xs text-slate-500 dark:text-slate-400 font-medium truncate mt-0.5">
                                Order: <b class="font-mono text-slate-700 dark:text-slate-300">#${p(e.orderId)}</b> &middot; Pemesan: <b class="text-slate-800 dark:text-slate-200">${p(e.customer?.name||"Umum")}</b>
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
                        ${l}
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
                    onclick="setDeliveryStatusQuick('${p(t)}', 'pending_dispatch')" 
                    class="flex-1 py-2.5 px-2 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 ${i?"shadow-sm text-white":"text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"}"
                    style="${i?"background: var(--color-primary); color: #fff; box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.35);":""}"
                >
                    <i class="fa-solid fa-boxes-packing text-xs"></i>
                    <span>1. Muat Barang</span>
                </button>
                <button 
                    type="button" 
                    onclick="setDeliveryStatusQuick('${p(t)}', 'out_for_delivery')" 
                    class="flex-1 py-2.5 px-2 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 ${d?"shadow-sm text-white":"text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"}"
                    style="${d?"background: var(--color-primary); color: #fff; box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.35);":""}"
                >
                    <i class="fa-solid fa-truck-fast text-xs"></i>
                    <span>2. Kirim Truk</span>
                </button>
                <button 
                    type="button" 
                    onclick="openDeliverySignatureModal('${p(t)}')" 
                    class="flex-1 py-2.5 px-2 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 ${c?"shadow-sm text-white":"text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"}"
                    style="${c?"background: var(--color-primary); color: #fff; box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.35);":""}"
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
                <input type="hidden" id="do-fleet-type" value="${p(a.fleetType)}">

                <!-- Interactive Visual Fleet Grid (Pengganti Dropdown Kaku) -->
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2">Pilih Jenis Kendaraan / Armada:</label>
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-2" id="do-fleet-grid">
                        ${Ve.map(u=>{const g=a.fleetType===u.id,h=u.shortName||u.name.split("(")[0].trim(),v=u.sub||(u.name.includes("(")?u.name.split("(")[1].replace(")",""):u.capacity);return`
                            <div 
                                id="fleet-card-${u.id}"
                                onclick="selectFleetCard('${u.id}')"
                                class="fleet-choice-card p-2.5 sm:p-3 rounded-2xl border transition-all cursor-pointer select-none active:scale-95 flex flex-col justify-between min-h-[78px] ${g?"is-selected shadow-2xs":"border-slate-200/80 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 hover:bg-slate-100/60"}"
                                style="${g?"background: rgba(var(--color-primary-rgb), 0.08); border-color: var(--color-primary); box-shadow: 0 0 0 1px var(--color-primary);":""}"
                            >
                                <div class="flex items-center justify-between gap-1.5">
                                    <div id="fleet-icon-${u.id}" class="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all ${g?"text-white shadow-2xs":"border border-slate-200/80 dark:border-slate-700"}"
                                         style="${g?"background: var(--color-primary);":"background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary);"}">
                                        <i class="fa-solid ${u.icon} text-xs"></i>
                                    </div>
                                    <div class="flex items-center gap-1">
                                        <span id="fleet-badge-${u.id}" class="text-[9.5px] font-black px-1.5 py-0.5 rounded-md font-mono ${g?"text-white":"bg-slate-200/80 dark:bg-slate-700 text-slate-600 dark:text-slate-300"}"
                                              style="${g?"background: var(--color-primary);":""}">
                                            ${u.capacity}
                                        </span>
                                        <i id="fleet-chk-${u.id}" class="fa-solid fa-circle-check text-xs ${g?"":"hidden"}" style="color: var(--color-primary);"></i>
                                    </div>
                                </div>
                                <div class="mt-2 min-w-0">
                                    <p class="text-xs font-black text-slate-800 dark:text-white leading-tight truncate">${h}</p>
                                    <p class="text-[9.5px] font-bold text-slate-400 dark:text-slate-500 truncate mt-0.5">${v}</p>
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
                        <input type="text" id="do-plate-number" value="${p(a.plateNumber)}" placeholder="Cth: B 9234 KDA" class="w-full text-xs font-mono font-bold uppercase rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 px-3 py-2.5 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15">
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-1.5">
                            <i class="fa-solid fa-user-tie text-slate-400"></i> Nama Sopir / Pengemudi
                        </label>
                        <input type="text" id="do-driver-name" value="${p(a.driverName)}" placeholder="Cth: Pak Joko" class="w-full text-xs font-bold rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 px-3 py-2.5 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15">
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-1.5">
                            <i class="fa-brands fa-whatsapp text-emerald-500"></i> No. WhatsApp Sopir
                        </label>
                        <input type="tel" id="do-driver-phone" value="${p(a.driverPhone)}" placeholder="Cth: 08123456789" class="w-full text-xs font-mono font-bold rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 px-3 py-2.5 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15">
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-1.5">
                            <i class="fa-solid fa-user-group text-slate-400"></i> Helper / Kondektur Muatan
                        </label>
                        <input type="text" id="do-helper-name" value="${p(a.helperName)}" placeholder="Cth: Budi (Kondektur)" class="w-full text-xs font-bold rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 px-3 py-2.5 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15">
                    </div>
                </div>

                <!-- Tombol WA Cepat ke Sopir -->
                ${a.driverPhone?`
                <button type="button" onclick="sendDeliveryWhatsAppToDriver('${p(t)}')" class="btn-native-action w-full h-10 rounded-xl border border-emerald-200 dark:border-emerald-800/80 bg-emerald-50/80 dark:bg-emerald-950/40 hover:bg-emerald-100 text-emerald-700 dark:text-emerald-300 text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95 shadow-2xs">
                    <i class="fa-brands fa-whatsapp text-sm text-emerald-600"></i> Kirim Rute &amp; Kontak Mandor ke WA Sopir
                </button>`:""}
            </div>

            <!-- 4. LOKASI PROYEK & KONTAK MANDOR -->
            <div class="card-native p-4 sm:p-5 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3.5">
                <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2.5">
                    <h4 class="font-black text-sm text-slate-900 dark:text-white flex items-center gap-2">
                        <i class="fa-solid fa-map-location-dot text-rose-500"></i> Lokasi Proyek &amp; Mandor
                    </h4>
                    ${e.isDropPoint?'<span class="px-2.5 py-0.5 rounded-full text-[9.5px] font-black bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200/80 dark:border-amber-800">DROP POINT</span>':'<span class="text-[10px] font-bold text-slate-400">Penerima Barang</span>'}
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-1.5">
                            <i class="fa-solid fa-user-check text-slate-400"></i> Nama Penerima / Mandor
                        </label>
                        <input type="text" id="do-recipient-name" value="${p(a.recipientName)}" placeholder="Nama penerima di proyek" class="w-full text-xs font-bold rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 px-3 py-2.5 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15">
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-1.5">
                            <i class="fa-brands fa-whatsapp text-emerald-500"></i> No. WhatsApp Mandor
                        </label>
                        <input type="tel" id="do-recipient-phone" value="${p(a.recipientPhone)}" placeholder="No WA mandor" class="w-full text-xs font-mono font-bold rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 px-3 py-2.5 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15">
                    </div>
                </div>

                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-1.5">
                        <i class="fa-solid fa-location-dot text-rose-500"></i> Alamat Lengkap Proyek / Drop Point
                    </label>
                    <textarea id="do-destination-address" rows="2" placeholder="Alamat pengiriman / patokan proyek..." class="w-full text-xs font-medium rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 p-3 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15">${p(a.destinationAddress)}</textarea>
                </div>

                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-1.5">
                        <i class="fa-solid fa-triangle-exclamation text-amber-500"></i> Catatan Akses Jalan &amp; Instruksi Bongkar
                    </label>
                    <input type="text" id="do-unload-notes" value="${p(a.unloadNotes)}" placeholder="Cth: Gang sempit, bongkar di samping gudang mandor" class="w-full text-xs font-medium rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 px-3 py-2.5 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15">
                </div>

                ${a.destinationLat&&a.destinationLng?`
                <div class="pt-1">
                    <a href="https://www.google.com/maps?q=${p(a.destinationLat)},${p(a.destinationLng)}" target="_blank" rel="noopener noreferrer" class="btn-native-action w-full h-10 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300 border border-blue-200 dark:border-blue-800 text-xs font-bold flex items-center justify-center gap-2 shadow-2xs">
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
                            <span id="do-loaded-count">${b}</span>/${a.checklist.length} Siap
                        </span>
                        <button type="button" onclick="toggleAllChecklistItems()" class="text-[11px] font-bold text-slate-500 hover:text-[var(--color-primary)] px-2.5 py-1 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 active:scale-95 transition-all cursor-pointer">
                            Pilih Semua
                        </button>
                    </div>
                </div>

                <div class="space-y-2" id="do-checklist-tiles">
                    ${a.checklist.map((u,g)=>`
                    <div 
                        id="do-chk-row-${g}"
                        onclick="toggleItemLoaded(${g})"
                        class="do-item-tile p-3 sm:p-3.5 rounded-2xl border transition-all cursor-pointer select-none active:scale-[0.99] flex items-center justify-between gap-3 ${u.loaded?"border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800/80 shadow-2xs":"border-slate-200/60 dark:border-slate-800/60 bg-slate-50/70 dark:bg-slate-900/40 opacity-70"}"
                    >
                        <!-- Squircle Checkbox Touch Target -->
                        <div class="flex items-center gap-3 min-w-0 flex-1">
                            <div 
                                id="do-chk-box-${g}"
                                class="w-7 h-7 rounded-xl flex items-center justify-center shrink-0 border transition-all ${u.loaded?"border-transparent text-white shadow-2xs":"border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-transparent"}"
                                style="${u.loaded?"background: var(--color-primary);":""}"
                            >
                                <i class="fa-solid fa-check text-xs"></i>
                            </div>
                            <div class="min-w-0">
                                <h5 class="text-xs sm:text-sm font-black text-slate-800 dark:text-white leading-snug">
                                    ${p(u.name)}
                                </h5>
                                <div class="flex items-center gap-2 mt-1 flex-wrap">
                                    ${u.variantName?`<span class="px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-600">${p(u.variantName)}</span>`:""}
                                    <span class="text-[10px] font-semibold ${u.loaded?"text-emerald-600 dark:text-emerald-400":"text-slate-400"}" id="do-chk-status-${g}">
                                        <i class="fa-solid ${u.loaded?"fa-circle-check":"fa-circle-dot"} text-[9px] mr-1"></i>
                                        ${u.loaded?"Siap Muat di Armada":"Belum Dimuat"}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <!-- Kapsul Kuantitas & Satuan -->
                        <div class="shrink-0 text-right">
                            <span class="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl font-mono font-black text-xs sm:text-sm bg-slate-100 dark:bg-slate-700/80 text-slate-900 dark:text-white border border-slate-200/90 dark:border-slate-600/80 shadow-2xs">
                                <span>${u.qty}</span>
                                <span class="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 font-sans">${p(u.unit||"pcs")}</span>
                            </span>
                        </div>
                    </div>
                    `).join("")}
                </div>
            </div>

            <!-- 6. BUKTI TANDA TANGAN SERAH TERIMA MANDOR (JIKA ADA) -->
            ${a.signature?`
            <div class="card-native p-4 sm:p-5 rounded-2xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50/60 dark:bg-emerald-950/20 space-y-3">
                <div class="flex items-center justify-between border-b border-emerald-200/60 pb-2">
                    <h4 class="font-black text-sm text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
                        <i class="fa-solid fa-file-signature text-emerald-600"></i> Bukti Serah Terima &amp; Tanda Tangan Proyek
                    </h4>
                    <span class="text-[10px] font-black text-emerald-600 bg-emerald-100 dark:bg-emerald-900/60 px-2 py-0.5 rounded-lg border border-emerald-300">TERVERIFIKASI</span>
                </div>
                <div class="flex flex-col sm:flex-row items-center gap-4">
                    <div class="p-2 bg-white rounded-xl border border-emerald-200 shadow-2xs max-w-[200px] w-full flex items-center justify-center">
                        <img src="${a.signature.signatureDataUrl}" alt="Tanda Tangan Mandor" class="h-20 w-auto object-contain">
                    </div>
                    <div class="flex-1 text-xs space-y-1 text-slate-700 dark:text-slate-300">
                        <p>Penerima: <b class="text-slate-900 dark:text-white">${p(a.signature.signerName||a.recipientName)}</b></p>
                        <p>Waktu Terima: <b class="font-mono">${a.signature.timestamp?new Date(a.signature.timestamp).toLocaleString("id-ID"):"-"}</b></p>
                        ${a.signature.notes?`<p class="italic text-slate-500">" ${p(a.signature.notes)} "</p>`:""}
                    </div>
                </div>
            </div>`:""}
        </div>
    `,r.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("deliveryOrder"),ie(r,s)},Ta=(t=!1)=>{const e=k("modal-delivery-order"),a=k("modal-delivery-order-box"),r=()=>{X(e,a),window._activeDeliveryOrderId=null,window._currentDeliveryData=null};typeof window.requestCloseModal=="function"?window.requestCloseModal("deliveryOrder",t,r):r()},Ut=t=>{const e=Ve.find(r=>r.id===t);if(!e)return;window._currentDeliveryData&&(window._currentDeliveryData.fleetType=e.id,window._currentDeliveryData.fleetName=e.name);const a=k("do-fleet-type");a&&(a.value=e.id),Ve.forEach(r=>{const s=k(`fleet-card-${r.id}`),o=k(`fleet-badge-${r.id}`),l=k(`fleet-icon-${r.id}`),i=k(`fleet-chk-${r.id}`);if(!s)return;r.id===t?(s.classList.add("is-selected","shadow-2xs"),s.classList.remove("border-slate-200/80","dark:border-slate-800","bg-slate-50/60","dark:bg-slate-800/40"),s.style.background="rgba(var(--color-primary-rgb), 0.08)",s.style.borderColor="var(--color-primary)",s.style.boxShadow="0 0 0 1px var(--color-primary)",o&&(o.style.background="var(--color-primary)",o.className="text-[9.5px] font-black px-1.5 py-0.5 rounded-md font-mono text-white"),l&&(l.style.background="var(--color-primary)",l.className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all text-white shadow-2xs"),i&&i.classList.remove("hidden")):(s.classList.remove("is-selected","shadow-2xs"),s.classList.add("border-slate-200/80","dark:border-slate-800","bg-slate-50/60","dark:bg-slate-800/40"),s.style.background="",s.style.borderColor="",s.style.boxShadow="",o&&(o.style.background="",o.className="text-[9.5px] font-black px-1.5 py-0.5 rounded-md font-mono bg-slate-200/80 dark:bg-slate-700 text-slate-600 dark:text-slate-300"),l&&(l.style.background="rgba(var(--color-primary-rgb), 0.1)",l.style.color="var(--color-primary)",l.className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all border border-slate-200/80 dark:border-slate-700"),i&&i.classList.add("hidden"))}),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light")},Pa=t=>{Ut(t)},Ht=(t,e)=>{if(!window._currentDeliveryData||!window._currentDeliveryData.checklist||!window._currentDeliveryData.checklist[t])return;const a=window._currentDeliveryData.checklist[t];typeof e=="boolean"?a.loaded=e:a.loaded=!a.loaded;const r=k(`do-chk-row-${t}`),s=k(`do-chk-box-${t}`),o=k(`do-chk-status-${t}`),l=k("do-loaded-count");if(a.loaded?(r&&(r.className="do-item-tile p-3 sm:p-3.5 rounded-2xl border transition-all cursor-pointer select-none active:scale-[0.99] flex items-center justify-between gap-3 border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800/80 shadow-2xs"),s&&(s.className="w-7 h-7 rounded-xl flex items-center justify-center shrink-0 border transition-all border-transparent text-white shadow-2xs",s.style.background="var(--color-primary)"),o&&(o.className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400",o.innerHTML='<i class="fa-solid fa-circle-check text-[9px] mr-1"></i> Siap Muat di Armada')):(r&&(r.className="do-item-tile p-3 sm:p-3.5 rounded-2xl border transition-all cursor-pointer select-none active:scale-[0.99] flex items-center justify-between gap-3 border-slate-200/60 dark:border-slate-800/60 bg-slate-50/70 dark:bg-slate-900/40 opacity-70"),s&&(s.className="w-7 h-7 rounded-xl flex items-center justify-center shrink-0 border transition-all border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-transparent",s.style.background=""),o&&(o.className="text-[10px] font-semibold text-slate-400",o.innerHTML='<i class="fa-solid fa-circle-dot text-[9px] mr-1"></i> Belum Dimuat')),l){const i=window._currentDeliveryData.checklist.filter(d=>d.loaded).length;l.textContent=i}typeof window.triggerHaptic=="function"&&window.triggerHaptic("light")},$a=(t=null)=>{if(!window._currentDeliveryData||!Array.isArray(window._currentDeliveryData.checklist))return;const e=window._currentDeliveryData.checklist,a=e.every(s=>s.loaded),r=t!==null?t:!a;e.forEach((s,o)=>{Ht(o,r)}),typeof window.triggerHaptic=="function"&&window.triggerHaptic("medium")},Aa=async(t=window._activeDeliveryOrderId)=>{t||(t=window._activeDeliveryOrderId);const e=(B||[]).find(l=>String(l.orderId)===String(t));if(!e)return;const a=window._currentDeliveryData||he(e),r=k("do-fleet-type"),s=r?r.value:a.fleetType,o=Ve.find(l=>l.id===s)||{};a.fleetType=s,a.fleetName=o.name||a.fleetName,a.plateNumber=(k("do-plate-number")?.value||"").trim(),a.driverName=(k("do-driver-name")?.value||"").trim(),a.driverPhone=(k("do-driver-phone")?.value||"").trim(),a.helperName=(k("do-helper-name")?.value||"").trim(),a.recipientName=(k("do-recipient-name")?.value||"").trim(),a.recipientPhone=(k("do-recipient-phone")?.value||"").trim(),a.destinationAddress=(k("do-destination-address")?.value||"").trim(),a.unloadNotes=(k("do-unload-notes")?.value||"").trim(),L("Menyimpan Data Surat Jalan...");try{await P.collection("freshmart_orders").doc(t).update({delivery:a}),e.delivery=a,x("Data Surat Jalan & Armada berhasil disimpan!"),Qe(t),typeof window.openOrderDetail=="function"&&window.cVOrd===t&&window.openOrderDetail(t)}catch(l){console.error("[Delivery] Gagal menyimpan delivery:",l),x("Gagal menyimpan: "+(l.message||""))}finally{C()}},Ia=async(t,e)=>{const a=(B||[]).find(l=>String(l.orderId)===String(t));if(!a)return;const r=he(a);if(r.status===e)return;const s=ya[e]?.label||e;if(await pe("Ubah Status Pengiriman",`Perbarui status pengiriman Surat Jalan #${r.doNumber} menjadi "${s}"?`,null,"Ya, Perbarui")){r.status=e,e==="out_for_delivery"?(r.dispatchedAt=Date.now(),r.logs.push({status:"out_for_delivery",timestamp:Date.now(),note:"Armada diberangkatkan ke proyek"})):e==="delivered"&&(r.deliveredAt=Date.now(),r.logs.push({status:"delivered",timestamp:Date.now(),note:"Material telah diterima di lokasi proyek"})),L("Memperbarui status logistik...");try{await P.collection("freshmart_orders").doc(t).update({delivery:r}),a.delivery=r,x(`Status pengiriman kini: ${s}`),Qe(t)}catch(l){x("Gagal mengubah status: "+l.message)}finally{C()}}};let K=null,Y=null,xt=!1,yt=!1;const Ma=t=>{const e=(B||[]).find(l=>String(l.orderId)===String(t));if(!e)return;const a=he(e),r=k("modal-delivery-signature"),s=k("modal-delivery-signature-box");if(!r||!s)return;window._signatureOrderId=t;const o=k("modal-delivery-signature-content");o&&(o.innerHTML=`
            <div class="space-y-4 text-slate-800 dark:text-slate-100">
                <div class="p-3.5 rounded-2xl border text-xs flex items-start gap-2.5" style="background: rgba(var(--color-primary-rgb), 0.08); border-color: rgba(var(--color-primary-rgb), 0.22); color: var(--color-primary-dark);">
                    <i class="fa-solid fa-circle-info text-base mt-0.5 shrink-0" style="color: var(--color-primary);"></i>
                    <div>
                        <p class="font-black text-slate-900 dark:text-white">Konfirmasi Serah Terima Material Proyek</p>
                        <p class="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5">Surat Jalan <b>#${p(a.doNumber)}</b>. Mohon mandor atau penerima menandatangani langsung pada area di bawah.</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-1.5">
                            <i class="fa-solid fa-user-check text-slate-400"></i> Nama Terang Mandor / Penerima
                        </label>
                        <input type="text" id="sig-signer-name" value="${p(a.recipientName||e.customer?.name||"")}" placeholder="Nama penerima di proyek" class="w-full text-xs font-bold rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 px-3.5 py-2.5 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15">
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
        `),r.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("deliverySignature"),ie(r,s),setTimeout(()=>{wo()},150)},Gt=(t=!1)=>{const e=k("modal-delivery-signature"),a=k("modal-delivery-signature-box"),r=()=>{X(e,a),window._signatureOrderId=null,K=null,Y=null};typeof window.requestCloseModal=="function"?window.requestCloseModal("deliverySignature",t,r):r()},wo=()=>{if(K=k("signature-pad-canvas"),!K)return;Y=K.getContext("2d"),yt=!1;const t=K.getBoundingClientRect(),e=window.devicePixelRatio||1;K.width=t.width*e,K.height=t.height*e,Y.scale(e,e),Y.strokeStyle="#0f172a",Y.lineWidth=2.5,Y.lineCap="round",Y.lineJoin="round";const a=l=>{const i=K.getBoundingClientRect();return l.touches&&l.touches[0]?{x:l.touches[0].clientX-i.left,y:l.touches[0].clientY-i.top}:{x:l.clientX-i.left,y:l.clientY-i.top}},r=l=>{l.preventDefault(),xt=!0,yt=!0;const i=k("sig-placeholder-hint");i&&i.classList.add("hidden");const d=a(l);Y.beginPath(),Y.moveTo(d.x,d.y)},s=l=>{if(!xt)return;l.preventDefault();const i=a(l);Y.lineTo(i.x,i.y),Y.stroke()},o=l=>{xt&&(l.preventDefault(),Y.closePath(),xt=!1)};K.onmousedown=r,K.onmousemove=s,K.onmouseup=o,K.onmouseleave=o,K.ontouchstart=r,K.ontouchmove=s,K.ontouchend=o,K.ontouchcancel=o},Da=()=>{if(!K||!Y)return;const t=window.devicePixelRatio||1;Y.clearRect(0,0,K.width/t,K.height/t),yt=!1;const e=k("sig-placeholder-hint");e&&e.classList.remove("hidden")},Ca=async()=>{const t=window._signatureOrderId;if(!t)return;const e=(B||[]).find(l=>String(l.orderId)===String(t));if(!e)return;if(!yt||!K){x("Harap goreskan tanda tangan mandor terlebih dahulu!");return}const a=(k("sig-signer-name")?.value||"").trim()||e.customer?.name||"Mandor Pelaksana",r=(k("sig-notes")?.value||"").trim(),s=K.toDataURL("image/png"),o=he(e);o.status="delivered",o.deliveredAt=Date.now(),o.recipientName=a,o.signature={signerName:a,signatureDataUrl:s,timestamp:Date.now(),notes:r},o.logs.push({status:"delivered",timestamp:Date.now(),note:`Serah terima diverifikasi & ditandatangani oleh ${a}`}),L("Menyimpan bukti serah terima...");try{await P.collection("freshmart_orders").doc(t).update({delivery:o,status:"Selesai"}),e.delivery=o,e.status="Selesai",x("Serah terima berhasil diverifikasi & pesanan ditandai Selesai!"),Gt(),Qe(t),typeof window.openOrderDetail=="function"&&window.openOrderDetail(t)}catch(l){console.error("[Delivery] Gagal simpan tanda tangan:",l),x("Gagal menyimpan: "+l.message)}finally{C()}},Ba=t=>{const e=(B||[]).find(c=>String(c.orderId)===String(t));if(!e)return;const a=he(e),r=a.recipientPhone||e.customer?.wa||"";if(!r){x("Nomor WhatsApp mandor/pemesan tidak tersedia!");return}const s=n.store?.name||"TOKO PUTRI",o=a.checklist.map(c=>`• ${c.qty} ${c.unit} - *${c.name}*${c.variantName?` (${c.variantName})`:""}`).join(`
`);let l=`🚚 *PENGIRIMAN MATERIAL PROYEK — ${s.toUpperCase()}*

Halo Bpk/Ibu *${a.recipientName||"Mandor"}*,
Pesanan material Anda sedang dalam proses pengiriman armada kami:

📋 *No. Surat Jalan:* #${a.doNumber}
📦 *No. Pesanan:* #${e.orderId}
🚛 *Armada:* ${a.fleetName} (${a.plateNumber||"Toko"})
👤 *Sopir:* ${a.driverName||"Petugas Toko"}${a.driverPhone?` (+${a.driverPhone})`:""}
📍 *Tujuan:* ${a.destinationAddress||"-"}
`+(a.unloadNotes?`⚠️ *Catatan Bongkar:* ${a.unloadNotes}
`:"")+`
📦 *DAFTAR MUATAN BARANG:*
${o}

Mohon siapkan area bongkar muat. Terima kasih telah berbelanja di *${s}*! 🙏`;const d=`https://wa.me/${String(r).replace(/\D/g,"").replace(/^0/,"62")}?text=${encodeURIComponent(l)}`;window.open(d,"_blank","noopener,noreferrer")},La=t=>{const e=(B||[]).find(c=>String(c.orderId)===String(t));if(!e)return;const a=he(e),r=a.driverPhone||"";if(!r){x("Nomor WhatsApp sopir belum diisi!");return}const s=n.store?.name||"TOKO PUTRI",o=a.checklist.map(c=>`• ${c.qty} ${c.unit} - ${c.name}${c.variantName?` (${c.variantName})`:""}`).join(`
`);let l=`🚛 *SURAT TUGAS PENGANTARAN MATERIAL — ${s.toUpperCase()}*

Halo *${a.driverName||"Sopir"}*,
Berikut rincian tugas pengiriman barang:

📋 *No. Surat Jalan:* #${a.doNumber}
📍 *Alamat Tujuan:* ${a.destinationAddress||"-"}
👤 *Penerima Proyek:* ${a.recipientName||"-"}
📞 *Kontak Mandor:* +${a.recipientPhone||"-"}
`+(a.destinationLat&&a.destinationLng?`🗺️ *Rute Google Maps:* https://www.google.com/maps?q=${a.destinationLat},${a.destinationLng}
`:"")+(a.unloadNotes?`⚠️ *Catatan Bongkar:* ${a.unloadNotes}
`:"")+`
📦 *DAFTAR MUATAN:*
${o}

Hati-hati di jalan dan utamakan keselamatan kerja! 🚛`;const d=`https://wa.me/${String(r).replace(/\D/g,"").replace(/^0/,"62")}?text=${encodeURIComponent(l)}`;window.open(d,"_blank","noopener,noreferrer")},Na=t=>{typeof window.openDocPreview=="function"?window.openDocPreview("surat_jalan",t):x("Modul cetak dokumen tidak tersedia!")};typeof window<"u"&&(window.openDeliveryModal=Qe,window.closeDeliveryModal=Ta,window.setDeliveryStatusQuick=Ia,window.saveDeliveryDetails=Aa,window.onFleetTypeChange=Pa,window.selectFleetCard=Ut,window.toggleItemLoaded=Ht,window.toggleAllChecklistItems=$a,window.openDeliverySignatureModal=Ma,window.closeDeliverySignatureModal=Gt,window.clearSignatureCanvas=Da,window.saveDeliverySignature=Ca,window.sendDeliveryWhatsAppToMandor=Ba,window.sendDeliveryWhatsAppToDriver=La,window.printOfficialDeliveryOrderA4=Na);const yo=Object.freeze(Object.defineProperty({__proto__:null,DEFAULT_FLEETS:Ve,DELIVERY_STATUSES:ya,clearSignatureCanvas:Da,closeDeliveryModal:Ta,closeDeliverySignatureModal:Gt,generateDONumber:Sa,getOrderDeliveryData:he,onFleetTypeChange:Pa,openDeliveryModal:Qe,openDeliverySignatureModal:Ma,printOfficialDeliveryOrderA4:Na,saveDeliveryDetails:Aa,saveDeliverySignature:Ca,selectFleetCard:Ut,sendDeliveryWhatsAppToDriver:La,sendDeliveryWhatsAppToMandor:Ba,setDeliveryStatusQuick:Ia,toggleAllChecklistItems:$a,toggleItemLoaded:Ht},Symbol.toStringTag,{value:"Module"})),Do=Object.freeze(Object.defineProperty({__proto__:null,DEFAULT_FLEETS:Ve,DELIVERY_STATUSES:ya,EXPENSE_CATEGORIES:Yr,MONTH_NAMES:ce,aF:$t,get aSq(){return pt},ackRewardClaim:ns,adjustBarcodeLabelQty:pr,applyStaffMenuPermissions:es,applyTaxPresetRI:Is,approveTempoPaymentConfirmation:qs,attachAdminSessionGuard:ot,backupData:Ts,get cTab(){return dt},changeTaxMonth:Ls,changeTaxYear:Bs,checkAdminAccess:oa,claimAdminSession:ve,clearSignatureCanvas:Da,closeDeliveryModal:Ta,closeDeliverySignatureModal:Gt,closeHeroBannerModal:ma,closeOrderDetailModal:da,closeProductBarcodeLabelModal:ir,closeSessionKickedModal:sa,closeTempoConfirmationsModal:jt,closeTempoDetailModal:_s,closeTempoPaymentModal:Us,closeTempoPenaltyModal:Gs,computeInventoryStats:Pt,confirmLogoutAdmin:as,deductOrderStockAndRewards:ds,deleteOrder:bs,deleteReview:er,detachAdminSessionGuard:lt,detectAdminGPS:Ss,get eId(){return ae},ensureProductBarcodeLabelModal:or,ensureTempoModals:qe,exportOrdersToExcel:ss,exportTempoCSV:Qs,fetchTaxPeriodData:Dt,filterReviews:Ys,get gTaxMonthly(){return re},generateDONumber:Sa,getDeviceLabel:Za,getEffHpp:Ms,getOrderDeliveryData:he,getTaxPeriodExpenses:Ct,getTaxPeriodTotals:Ge,getTempoOrderCalculations:ee,handleManualCoordChange:vs,handleSmartMapsInput:Mt,isCurrentSessionActive:ra,isLoggingIn:ta,get isSaving(){return Me},konfirmasiKeWA:ps,konfirmasiKeWAPenerima:ms,loadAdminReport:la,logoutAdmin:ia,onFleetTypeChange:Pa,openAdminMenu:He,openAdminTab:gr,openDeliveryModal:Qe,openDeliverySignatureModal:Ma,openHeroBannerModal:$s,openOrderDetail:It,openProductBarcodeLabelModal:lr,openSettingForm:fs,openTaxDocPreview:Os,openTempoConfirmationsModal:Vs,openTempoDetailModal:Fs,openTempoPaymentModal:Ks,openTempoPenaltyModal:Hs,pasteFromClipboardToMapsInput:ws,playNewOrderSound:rs,previewStoreOnMaps:ys,printBarcodeLabelsBrowser:ur,printBarcodeLabelsThermalRawbt:xr,printOfficialDeliveryOrderA4:Na,printTempoRecapA4:Js,processAdminLogin:ts,rAdmOrd:ls,rAdmPiutang:Ot,rAdmReviews:va,rAdmSet:pa,rTaxBalance:Nt,rTaxIncome:Lt,rTaxPanel:Ds,rTaxRenderShell:Bt,rTaxSettingsPanel:ua,rTaxSubContent:it,rTaxSummary:ba,rejectTempoPaymentConfirmation:Ws,renderBarcodeLabelModalContent:Ie,renderOrdersList:na,replyToReview:Xs,restoreData:Ps,restoreOrderStockAndRewards:ca,saveAdminSettings:hs,saveBalanceField:Rs,saveDeliveryDetails:Aa,saveDeliverySignature:Ca,saveHeroBannerModal:As,saveMonthlyExpense:Ns,saveOrderCustomerToDB:is,saveTaxSettingsPanel:Es,selectBarcodePreviewIndex:cr,selectBgStyle:xs,selectFleetCard:Ut,selectPresetTheme:us,sendDeliveryWhatsAppToDriver:La,sendDeliveryWhatsAppToMandor:Ba,setASq:fr,setAllBarcodeLabelQty:br,setBarcodeLabelPaper:nr,setBarcodeLabelQtyDirect:mr,setCTab:ct,setDeliveryStatusQuick:Ia,setEId:wa,setIsSaving:H,setLoggingIn:ht,setOrderSourceFilter:os,setTMultiUnits:mt,setTSpec:Kt,setTSubCats:Je,setTVars:ze,setTWhol:_t,showSessionKickedModal:aa,switchPaymentSubtab:gs,switchTaxTab:Cs,syncAppMeta:zr,get tMultiUnits(){return Q},get tSpec(){return oe},get tSubCats(){return le},get tVars(){return F},get tWhol(){return ke},get taxActiveTab(){return de},get taxMonth(){return U},get taxYear(){return G},toggleAllChecklistItems:$a,toggleBarcodeOption:dr,toggleCustomTaxRateInput:js,toggleItemLoaded:Ht,toggleReviewVisibility:Zs,toggleTaxMenuVisibility:At,updateAdminPaylaterSim:ks,updateOrderStatus:cs},Symbol.toStringTag,{value:"Module"}));let _e=!1,Fe=null;const Ra=()=>{const t=new Date,e=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${e}-${a}-${r}`},So=t=>{if(!t)return"";try{const e=t.split("-");return e.length===3?new Date(parseInt(e[0]),parseInt(e[1])-1,parseInt(e[2])).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):t}catch{return t}},De=()=>{const t=k("admin-content");if(!t)return;const e=n.changelog||[],a=ea(n),r=Qr(n),s=(n.deletedChangelogIds||[]).length;let o="";a.length===0?o=`
        <div class="text-center py-12 text-slate-400">
            <i class="fa-solid fa-clipboard-list text-3xl mb-2 opacity-50"></i>
            <p class="text-xs font-bold">Belum ada catatan pembaruan</p>
        </div>`:o=a.map(l=>{const i=e.some(u=>u.id===l.id),d=l.version===r,c=(l.items||[]).map(u=>`
                <li class="flex items-start gap-2 text-xs font-medium text-slate-600 dark:text-slate-300">
                    <i class="fa-solid fa-circle-check text-[var(--color-primary)] text-[10px] mt-1 shrink-0"></i>
                    <span>${p(u)}</span>
                </li>
            `).join("");let b="Update",m="fa-tag";return l.category==="feature"?(b="Fitur Baru",m="fa-rocket"):l.category==="optimization"?(b="Optimasi",m="fa-bolt-lightning"):l.category==="maintenance"?(b="Maintenance",m="fa-wrench"):l.category==="bugfix"&&(b="Perbaikan",m="fa-bug-slash"),`
            <div class="p-4 sm:p-5 rounded-2xl border ${d?"border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.02)] dark:bg-[rgba(var(--color-primary-rgb),0.05)] shadow-sm":"border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"} space-y-3">
                <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                    <div class="flex items-center gap-2 flex-wrap">
                        <span class="px-2.5 py-1 rounded-lg text-xs font-black tracking-wider uppercase ${d?"bg-[var(--color-primary)] text-white shadow-xs":"bg-slate-800 text-white dark:bg-slate-700"}">
                            ${p(l.version)}
                        </span>
                        <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md border border-slate-200/80 dark:border-slate-700/80 bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-700 dark:text-slate-300">
                            <i class="fa-solid ${m} text-[9px] text-[var(--color-primary)]"></i> ${p(b)}
                        </span>
                        ${d?'<span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.25)] text-[9px] font-extrabold uppercase"><span class="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] animate-pulse"></span> Versi Aktif</span>':""}
                        ${i?'<span class="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.2)] text-[9px] font-bold">Kustom Toko</span>':'<span class="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 text-[9px] font-bold">Sistem Bawaan</span>'}
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500">
                            <i class="fa-regular fa-calendar mr-1"></i> ${p(So(l.date))}
                        </span>
                        ${i?`
                        <button onclick="window.editChangelogEntry('${p(l.id)}')" class="w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center text-xs transition-all cursor-pointer" title="Edit Catatan">
                            <i class="fa-solid fa-pen"></i>
                        </button>
                        <button onclick="window.deleteChangelogEntry('${p(l.id)}')" class="w-7 h-7 rounded-lg bg-rose-50 hover:bg-rose-100 dark:bg-rose-900/30 text-rose-500 flex items-center justify-center text-xs transition-all cursor-pointer" title="Hapus Catatan">
                            <i class="fa-solid fa-trash"></i>
                        </button>`:`
                        <button onclick="window.deleteChangelogEntry('${p(l.id||l.version)}')" class="w-7 h-7 rounded-lg bg-slate-100 hover:bg-rose-50 dark:bg-slate-800 dark:hover:bg-rose-900/30 text-slate-400 hover:text-rose-500 flex items-center justify-center text-xs transition-all cursor-pointer" title="Hapus Log Ini dari Sistem">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>`}
                    </div>
                </div>

                <div>
                    <h4 class="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                        ${p(l.title)}
                    </h4>
                </div>

                <ul class="space-y-1.5 pt-1">
                    ${c}
                </ul>
            </div>`}).join(""),t.innerHTML=`
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
                            ${p(r)}
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
        <div id="changelog-form-box" class="${_e?"block":"hidden"} p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-[var(--color-primary)]/40 shadow-lg space-y-4">
            <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                <h4 id="changelog-form-title" class="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                    <i class="fa-solid fa-circle-plus text-[var(--color-primary)]"></i> Tambah Catatan Pembaruan Baru
                </h4>
                <button onclick="window.toggleChangelogForm(false)" class="w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-slate-600 flex items-center justify-center text-xs">
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
                    <input id="form-log-date" type="date" value="${Ra()}" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-bold text-slate-800 dark:text-white focus:border-[var(--color-primary)] focus:outline-none" />
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
    </div>`},kr=(t=null)=>{_e=t!==null?t:!_e,_e||(Fe=null),De()},hr=t=>{const e=(n.changelog||[]).find(s=>s.id===t);if(!e)return;Fe=t,_e=!0,De(),ue("form-log-version",e.version||""),ue("form-log-category",e.category||"feature"),ue("form-log-date",e.date||Ra()),ue("form-log-title",e.title||""),ue("form-log-items",(e.items||[]).join(`
`));const a=k("changelog-form-title");a&&(a.innerHTML=`<i class="fa-solid fa-pen text-[var(--color-primary)]"></i> Edit Catatan Pembaruan (${p(e.version)})`);const r=k("changelog-form-box");r&&r.scrollIntoView({behavior:"smooth"})},vr=async()=>{const t=(T("form-log-version")||"").trim(),e=T("form-log-category")||"feature",a=T("form-log-date")||Ra(),r=(T("form-log-title")||"").trim(),s=(T("form-log-items")||"").trim();if(!t)return x("Nomor versi harus diisi (contoh: v1.2.1)!");if(!r)return x("Judul pembaruan harus diisi!");if(!s)return x("Tuliskan minimal 1 poin rincian perubahan!");const o=s.split(`
`).map(i=>i.replace(/^[-*•]\s*/,"").trim()).filter(i=>i.length>0);if(o.length===0)return x("Rincian perubahan tidak boleh kosong!");L("Menyimpan catatan pembaruan...");const l={id:Fe||"log-"+Date.now().toString(36),version:t.startsWith("v")?t:"v"+t,category:e,date:a,title:r,items:o,updatedAt:new Date().toISOString()};if(n.changelog=n.changelog||[],Fe){const i=n.changelog.findIndex(d=>d.id===Fe);i!==-1?n.changelog[i]=l:n.changelog.unshift(l)}else n.changelog.unshift(l);n.deletedChangelogIds&&Array.isArray(n.deletedChangelogIds)&&(n.deletedChangelogIds=n.deletedChangelogIds.filter(i=>i!==l.id&&i!==l.version));try{await _(["changelog","deletedChangelogIds"]),x("Catatan pembaruan berhasil dipublikasikan secara real-time!","success"),_e=!1,Fe=null,De()}catch(i){x("Gagal menyimpan log pembaruan: "+i.message,"error")}finally{C()}},wr=t=>{const a=ea(n).find(s=>s.id===t||s.version===t);if(!a)return;const r=a.version||a.title||"ini";pe("Hapus Catatan Log Toko",`Apakah Anda yakin ingin menghapus catatan pembaruan versi "${r}"? Catatan ini tidak akan ditampilkan lagi di etalase toko maupun panel admin.`,async()=>{L("Menghapus catatan...");try{n.changelog=(n.changelog||[]).filter(o=>o.id!==t&&o.version!==t),n.deletedChangelogIds=Array.isArray(n.deletedChangelogIds)?n.deletedChangelogIds:[];const s=a.id||t;n.deletedChangelogIds.includes(s)||n.deletedChangelogIds.push(s),a.version&&!n.deletedChangelogIds.includes(a.version)&&n.deletedChangelogIds.push(a.version),await _(["changelog","deletedChangelogIds"]),x(`Catatan pembaruan ${r} berhasil dihapus!`,"success"),De()}catch(s){x("Gagal menghapus catatan: "+s.message,"error")}finally{C()}},"Konfirmasi Hapus Log")},yr=()=>{const t=ea(n);if(t.length<=5)return x(`Daftar log masih ringkas (${t.length} versi), belum perlu pembersihan.`,"info");const e=t.slice(5),a=e.length;pe("Pangkas Log Terlama",`Apakah Anda yakin ingin memangkas ${a} catatan log pembaruan terlama dan hanya menyisakan 5 versi terbaru? Tindakan ini merapikan daftar log toko agar tidak menumpuk spam.`,async()=>{L("Memangkas catatan lama...");try{const r=new Set;e.forEach(s=>{s.id&&r.add(s.id),s.version&&r.add(s.version)}),n.changelog=(n.changelog||[]).filter(s=>!r.has(s.id)&&!r.has(s.version)),n.deletedChangelogIds=Array.isArray(n.deletedChangelogIds)?n.deletedChangelogIds:[],r.forEach(s=>{n.deletedChangelogIds.includes(s)||n.deletedChangelogIds.push(s)}),await _(["changelog","deletedChangelogIds"]),x(`Berhasil membersihkan ${a} log lama! Tersisa 5 versi terbaru.`,"success"),De()}catch(r){x("Gagal memangkas log: "+r.message,"error")}finally{C()}},"Pangkas Log Lama")},Sr=()=>{if((n.deletedChangelogIds||[]).length===0)return x("Tidak ada log bawaan yang terhapus.","info");pe("Pulihkan Log Bawaan","Apakah Anda yakin ingin memulihkan kembali seluruh catatan log rilis sistem bawaan toko yang pernah dihapus?",async()=>{L("Memulihkan catatan log...");try{n.deletedChangelogIds=[],await _(["deletedChangelogIds"]),x("Seluruh log pembaruan bawaan berhasil dipulihkan!","success"),De()}catch(e){x("Gagal memulihkan catatan: "+e.message,"error")}finally{C()}},"Ya, Pulihkan Semua")};window.rAdmChangelog=De;window.toggleChangelogForm=kr;window.editChangelogEntry=hr;window.saveChangelogEntry=vr;window.deleteChangelogEntry=wr;window.pruneOldChangelogs=yr;window.restoreDefaultChangelogs=Sr;const Co=Object.freeze(Object.defineProperty({__proto__:null,deleteChangelogEntry:wr,editChangelogEntry:hr,pruneOldChangelogs:yr,rAdmChangelog:De,restoreDefaultChangelogs:Sr,saveChangelogEntry:vr,toggleChangelogForm:kr},Symbol.toStringTag,{value:"Module"}));export{Yr as E,ce as M,ra as a,ot as b,ee as c,lt as d,Do as e,Dt as f,Ms as g,Co as h,ta as i,Os as o,Ns as s};

const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/module-pos-YAlbR-NC.js","assets/module-print-D7ZGPnsx.js","assets/vendor-firebase-core-D2OF5R23.js","assets/vendor-firebase-db-BIUZcnOd.js","assets/module-member-CsDpojBF.js","assets/module-faq-DvQovEFv.js","assets/expenses-C4hjzaSY.js","assets/vendor-sortable-DzmX_rHT.js","assets/returns-DVW5nxub.js","assets/reports-DZDqb-EH.js","assets/purchases-DC9YHaGX.js","assets/flash-sale-DFTe-PNh.js","assets/suppliers-BaU6DiN8.js","assets/stock-opname-D8LW3oCW.js","assets/pos-cashier-admin-BeidD5ZS.js","assets/backup-sync-IfFMw7a1.js"])))=>i.map(i=>d[i]);
import{q as P,A as ee,e as k,C as Tt,D as Pr,E as He,R as _e,F as Ze,k as x,G as ge,H as ue,b as R,l as L,I as Ae,J as st,K as Se,L as et,M as Te,N as tt,n as D,s as Ge,h as rt,O as Ar,g as $,P as Wt,Q as _a,_ as J,a as i,f as g,S as Ir,T as qa,u as B,U as $t,V as Ie,W as Mr,X as zt,Y as Dr,Z as Wa,i as m,$ as Cr,o as ne,v as Z,a0 as Ka,a1 as Re,m as he,a2 as Fe,a3 as Br,a4 as lt,a5 as za,a6 as Xt,a7 as Lr,a8 as Nr,a9 as Rr,aa as jr,ab as ht,ac as Ua,z as Zt,ad as Er,ae as Or}from"./module-print-D7ZGPnsx.js";import{f as je}from"./vendor-firebase-core-D2OF5R23.js";import{a as Jt,d as Fr,c as _r,u as gt,g as Kr,b as Ur,e as Ja,f as Qa,h as Hr,i as Pt,j as Ya,n as ea,l as Gr,s as Vr,t as qr,k as O,m as Wr,o as Xa,p as zr,r as Ha,q as Za,v as Jr}from"./module-pos-YAlbR-NC.js";import{S as Qr}from"./vendor-sortable-DzmX_rHT.js";import{g as ta,a as Yr}from"./module-faq-DvQovEFv.js";let at=null,kt=!1,Qt=!1,Yt=0;const vt=t=>{Qt=!!t,typeof window<"u"&&(window.__isLoggingIn=Qt)},aa=()=>Qt||typeof window<"u"&&!!window.__isLoggingIn,es=()=>{if(typeof navigator>"u")return"Perangkat Lain";const t=navigator.userAgent||"",e=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t);let a="Perangkat";/iPhone|iPad|iPod/i.test(t)?a="iPhone/iPad":/Android/i.test(t)?a="HP Android":/Windows/i.test(t)?a="Desktop Windows":/Mac/i.test(t)?a="Mac/MacBook":/Linux/i.test(t)?a="Linux PC":a=e?"Smartphone":"Komputer Desktop";let r="Browser";return/Edg/i.test(t)?r="Edge":/Chrome/i.test(t)?r="Chrome":/Safari/i.test(t)?r="Safari":/Firefox/i.test(t)&&(r="Firefox"),`${a} (${r})`},ye=async(t=null)=>{const e=typeof P<"u"&&P?P:window.db;if(!e)return null;const a=t||localStorage.getItem("freshmart_admin_session_id")||"sess_"+Date.now()+"_"+Math.random().toString(36).substring(2,9),r=es();try{return localStorage.setItem("freshmart_admin_session_id",a),await e.collection("freshmart").doc("cms_data").collection("admin_session").doc("active").set({sessionId:a,deviceName:r,loginAt:je.firestore.FieldValue.serverTimestamp(),lastActive:je.firestore.FieldValue.serverTimestamp()}),kt=!1,Yt=Date.now(),a}catch(s){return console.warn("Gagal mengklaim sesi admin aktif:",s),null}},sa=t=>{let e=document.getElementById("session-kicked-modal");e||(e=document.createElement("div"),e.id="session-kicked-modal",e.className="fixed inset-0 z-[150] bg-slate-900/80 flex items-center justify-center p-4 transition-opacity duration-300",document.body.appendChild(e)),e.innerHTML=`
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
    `,e.style.display="flex",e.style.opacity="1",typeof window.pushModalHistory=="function"&&window.pushModalHistory("sessionKicked");const a=document.getElementById("btn-session-kicked-ok");a&&(a.onclick=()=>{ra()})},ra=(t=!1)=>{const e=()=>{const a=document.getElementById("session-kicked-modal");a&&(a.style.opacity="0",setTimeout(()=>{a.parentNode&&a.remove()},250))};!t&&typeof window.requestCloseModal=="function"?window.requestCloseModal("sessionKicked",!1,e):e()};typeof window<"u"&&(window.showSessionKickedModal=sa,window.closeSessionKickedModal=ra);const it=()=>{if(at)return;const t=typeof P<"u"&&P?P:window.db;!t||!localStorage.getItem("freshmart_admin_session_id")||(kt=!1,at=t.collection("freshmart").doc("cms_data").collection("admin_session").doc("active").onSnapshot(async a=>{if(!a.exists)return;const r=a.data(),s=r.sessionId,o=localStorage.getItem("freshmart_admin_session_id");if(!(Yt&&Date.now()-Yt<2e3)&&s&&o&&s!==o){if(kt)return;kt=!0,nt(),localStorage.removeItem("freshmart_admin_session_id");const l=r.deviceName||"Perangkat Lain";try{window.isAdm=!1,window.__localIsAdm=!1,ee&&typeof ee.signOut=="function"&&await ee.signOut()}catch{}typeof window.changeView=="function"&&window.changeView("view-catalog"),sa(l)}},a=>{console.warn("Admin session guard listener error:",a)}))},nt=()=>{at&&(at(),at=null)},oa=async()=>{if(aa())return!0;const t=typeof P<"u"&&P?P:window.db;if(!t)return!0;const e=typeof window<"u"&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"),a=localStorage.getItem("freshmart_admin_session_id");if(!a)try{const r=await t.collection("freshmart").doc("cms_data").collection("admin_session").doc("active").get();if(!r.exists){try{await ye()}catch{}return!0}const s=r.data()||{},o=s.lastActive?.toMillis?s.lastActive.toMillis():s.loginAt?.toMillis?s.loginAt.toMillis():0,l=(Date.now()-o)/(60*60*1e3);if(e||l>1){try{await ye()}catch{}return!0}try{await ye()}catch{}return!0}catch{return!0}try{const r=await t.collection("freshmart").doc("cms_data").collection("admin_session").doc("active").get();if(!r.exists){try{await ye(a)}catch{}return!0}if(r.data().sessionId===a){try{await t.collection("freshmart").doc("cms_data").collection("admin_session").doc("active").update({lastActive:je.firestore.FieldValue.serverTimestamp()})}catch{}return!0}try{await ye(a)}catch{}return!0}catch{return!0}};typeof window<"u"&&(window.claimAdminSession=ye,window.attachAdminSessionGuard=it,window.detachAdminSessionGuard=nt,window.isCurrentSessionActive=oa,window.setLoggingIn=vt,window.isLoggingIn=aa);const At={products:[{key:"name",label:"Nama Produk",type:"text"},{key:"sku",label:"Barcode / SKU (Kosongkan utk Auto)",type:"text"},{key:"price",label:"Harga Jual Promo (Rp)",type:"number"},{key:"priceNormal",label:"Harga Coret / Normal (Rp) - Opsional",type:"number"},{key:"hpp",label:"Harga Modal / HPP (Rp) — Hanya Seller",type:"number"},{key:"poin",label:"Poin Member (per unit terjual, Produk Tanpa Varian)",type:"number"},{key:"storeStock",label:"Stok Rak Toko / Etalase (Qty)",type:"number"},{key:"warehouseStock",label:"Stok Gudang Cadangan (Qty)",type:"number"},{key:"stock",label:"Total Stok Gabungan (Toko + Gudang)",type:"number"},{key:"unit",label:"Satuan Dasar (Cth: Pcs, Kg)",type:"text"},{key:"poTime",label:"Estimasi Pre-Order (Opsional)",type:"text"},{key:"video",label:"Link Video YouTube (Opsional)",type:"text"},{key:"img",label:"URL Gambar",type:"text"},{key:"category",label:"Kategori",type:"dynamic_select_category"},{key:"subCategory",label:"Jenis / Sub-Kategori (Cth: Cat Tembok, Pipa PVC, Power Tools)",type:"text"},{key:"brand",label:"Merek",type:"dynamic_select_brand"},{key:"supplierId",label:"Supplier / Rekanan Pemasok",type:"dynamic_select_supplier"},{key:"tag",label:"Label/Tag",type:"text"},{key:"isActive",label:"Status",type:"select",options:[{val:"true",text:"Tersedia"},{val:"false",text:"Habis"}]},{key:"desc",label:"Deskripsi Lengkap",type:"richtext"},{key:"specTable",label:"Tabel Spesifikasi (Opsional)",type:"spec_table_builder"},{key:"wholesale",label:"Grosir Eceran",type:"wholesale_builder"},{key:"multiUnits",label:"Multi-Satuan Kemasan Bertingkat (Opsional)",type:"multi_units_builder"},{key:"variants",label:"Varian",type:"variants_builder"}],suppliers:[{key:"code",label:"Kode Supplier (Cth: SUP-001)",type:"text"},{key:"name",label:"Nama Perusahaan / Supplier",type:"text"},{key:"picName",label:"Nama Sales / Kontak PIC",type:"text"},{key:"phone",label:"Nomor WhatsApp / Telp Sales",type:"text"},{key:"city",label:"Kota / Wilayah",type:"text"},{key:"address",label:"Alamat Kantor / Gudang",type:"textarea"},{key:"bankName",label:"Nama Bank Rekening",type:"text"},{key:"bankAccount",label:"Nomor Rekening",type:"text"},{key:"bankHolder",label:"Atas Nama Pemilik Rekening",type:"text"},{key:"defaultTerm",label:"Termin / Cara Bayar Default",type:"select",options:[{val:"cash",text:"Cash / Tunai / Transfer"},{val:"tempo_7",text:"Tempo 7 Hari"},{val:"tempo_14",text:"Tempo 14 Hari"},{val:"tempo_30",text:"Tempo 30 Hari"},{val:"tempo_60",text:"Tempo 60 Hari"},{val:"konsinyasi",text:"Konsinyasi / Barang Titipan"}]},{key:"notes",label:"Catatan / Jadwal Rutin Kunjungan Sales",type:"textarea"}],colors:[{key:"name",label:"Nama Warna",type:"text"},{key:"hex",label:"Kode Warna (Hex) - Opsional",type:"text"},{key:"catalog",label:"Katalog / Merek (Contoh: No Drop)",type:"text"}],categories:[{key:"name",label:"Nama Kategori",type:"text"},{key:"img",label:"URL Ikon / Gambar (Opsional)",type:"text"},{key:"subCategories",label:"Daftar Sub-Kategori / Kelompok Jenis",type:"subcategories_builder"}],brands:[{key:"name",label:"Nama Merek",type:"text"},{key:"img",label:"URL Logo Merek",type:"text"}],banks:[{key:"bankName",label:"Nama Bank",type:"text"},{key:"bankAccount",label:"No. Rekening",type:"text"},{key:"bankOwner",label:"Atas Nama",type:"text"}],customers:[{key:"name",label:"Nama Lengkap",type:"text"},{key:"phone",label:"No. WhatsApp Aktif (Cth: 081234567890)",type:"text"},{key:"points",label:"Poin Member (Penyesuaian Manual)",type:"number"},{key:"paylaterActive",label:"Status Putri PayLater",type:"select",options:[{val:"false",text:"Nonaktif (Belum Disetujui)"},{val:"true",text:"Aktif (Diberikan Limit)"}]},{key:"paylaterLimit",label:"Plafon Limit PayLater (Rp)",type:"number"},{key:"paylaterDueDay",label:"Tanggal Jatuh Tempo Bulanan (1-28, default 5)",type:"number"},{key:"paylaterUsed",label:"Limit Terpakai Saat Ini (Rp)",type:"number"}],rewards:[{key:"name",label:"Nama Hadiah",type:"text"},{key:"img",label:"URL Gambar Hadiah",type:"text"},{key:"pointsCost",label:"Poin yang Dibutuhkan",type:"number"},{key:"stock",label:"Stok Hadiah Tersedia",type:"number"},{key:"isActive",label:"Status",type:"select",options:[{val:"true",text:"Aktif (Bisa Ditukar)"},{val:"false",text:"Nonaktif"}]}],banners:[{key:"title",label:"Judul Banner",type:"text"},{key:"desc",label:"Deskripsi Pendek (Opsional)",type:"textarea"},{key:"type",label:"Tipe Banner",type:"select",options:[{val:"image",text:"Gambar (Default)"},{val:"video",text:"Video (Drive / YouTube / MP4)"}]},{key:"img",label:"URL Gambar (jika Tipe = Gambar)",type:"text"},{key:"videoUrl",label:"URL / Link Video (Google Drive, YouTube, atau MP4)",type:"text"},{key:"link",label:"Link Tujuan Klik (Opsional)",type:"text"}],vouchers:[{key:"code",label:"Kode Voucher (Cth: MERDEKA50)",type:"text"},{key:"type",label:"Jenis Diskon",type:"select",options:[{val:"percent",text:"Potongan Persen (%)"},{val:"flat",text:"Potongan Rupiah (Rp)"},{val:"shipping_free",text:"Gratis Ongkir (100%)"},{val:"shipping_flat",text:"Potongan Ongkir (Rp)"}]},{key:"value",label:"Nilai Potongan (Contoh: 50 untuk %, atau 10000 untuk Rp)",type:"number"},{key:"minPurchase",label:"Syarat Minimal Belanja (Rp) - 0 Jika Tidak Ada",type:"number"},{key:"maxDiscount",label:"Maksimal Nominal Potongan (Rp) - Khusus Tipe Persen",type:"number"},{key:"targetProduct",label:"Target Produk Spesifik (Pilih jika berlaku khusus)",type:"dynamic_select_products"},{key:"isShow",label:"Tampilkan di Beranda?",type:"select",options:[{val:"true",text:"Ya, Tampilkan Promo"},{val:"false",text:"Sembunyikan"}]}]};window.aF=At;const Xr=[{key:"gaji",label:"Gaji & Tunjangan Staf",icon:"fa-user-tie",color:"blue"},{key:"listrik",label:"Listrik, Air & Wifi Toko",icon:"fa-bolt",color:"amber"},{key:"sewa",label:"Sewa Ruko / Tempat Usaha",icon:"fa-shop",color:"purple"},{key:"transport",label:"Bensin & Transportasi",icon:"fa-van-shuttle",color:"emerald"},{key:"kemasan",label:"Kemasan / Lakban / Plastik",icon:"fa-box",color:"orange"},{key:"perawatan",label:"Pemeliharaan Toko & Alat",icon:"fa-screwdriver-wrench",color:"cyan"},{key:"lainnya",label:"Biaya Operasional Lainnya",icon:"fa-receipt",color:"slate"}],ts=()=>{const t=k("admin-dashboard-view");if(!t)return;const e={orders:"orders",products:"products",suppliers:"suppliers",purchases:"purchases",settings:"settings",categories:"categories",brands:"brands",colors:"colors",vouchers:"vouchers",banks:"banks",banners:"banners",customers:"customers",rewards:"rewards",reviews:"reviews",faqs:"faqs",reports:"reports",tax:"reports",expenses:"expenses",stock_opname:"stock_opname",returns:"returns",piutang:"piutang",changelog:"changelog",pos:"pos",cashiers:"cashiers",backup_sync:"backup_sync"};t.querySelectorAll('button[onclick*="openAdminTab"]').forEach(p=>{const b=(p.getAttribute("onclick")||"").match(/openAdminTab\(['"]([^'"]+)['"]\)/);if(b&&b[1]){const u=b[1],f=e[u]||u;Tt(f)?(p.classList.remove("hidden"),p.style.display=""):(p.classList.add("hidden"),p.style.display="none")}});const r=Pr(),s=k("admin-header-role-badge"),o=k("admin-header-title"),l=k("admin-dashboard-welcome-title"),n=k("admin-dashboard-welcome-tag"),c=k("admin-dashboard-welcome-desc");if(He())s&&(s.innerHTML='<span class="inline-flex items-center gap-1 text-[9px] font-black uppercase text-amber-300 drop-shadow-xs"><i class="fa-solid fa-crown text-[8px]"></i> Owner</span>'),o&&(o.textContent="CMS OWNER"),l&&(l.innerHTML='Selamat Datang, Pemilik Toko! <i class="fa-solid fa-crown text-amber-400 text-lg"></i>'),n&&(n.textContent="Panel Kontrol Owner"),c&&(c.textContent="Akses penuh seluruh operasional, keuangan, dan pengaturan Toko Putri.");else if(r?.role===_e.ADMIN){const p=r.name||"Admin";s&&(s.innerHTML=`<span class="inline-flex items-center gap-1 text-[9px] font-black uppercase text-blue-200 drop-shadow-xs"><i class="fa-solid fa-shield-halved text-[8px]"></i> Admin (${p})</span>`),o&&(o.textContent="CMS ADMIN"),l&&(l.innerHTML=`Selamat Datang, ${p}! <i class="fa-solid fa-shield-halved text-blue-400 text-lg"></i>`),n&&(n.textContent="Panel Operasional Admin"),c&&(c.textContent="Kelola pesanan, katalog produk, dan aktivitas harian toko.")}else s&&(s.innerHTML='<span class="text-[9px] font-bold uppercase text-white/90">Staf Toko</span>'),o&&(o.textContent="CMS TOKO"),l&&(l.innerHTML="Selamat Datang!"),n&&(n.textContent="Panel Kontrol Toko Putri ( Official Store )"),c&&(c.textContent="Kelola produk, pesanan, dan seluruh operasional toko dari satu tempat.")},la=async()=>{const t=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1";if(window.isAdm||t){if(He()&&!t&&!await oa()&&ee.currentUser){nt(),localStorage.removeItem("freshmart_admin_session_id"),Ze(),await ee.signOut(),window.isAdm=!1,window.__localIsAdm=!1,x("Sesi Owner telah diambil alih oleh perangkat lain."),ge("login-username",""),ge("login-password",""),typeof window.changeView=="function"&&window.changeView("view-admin-login");return}window.__localIsAdm=!0;try{Jt()}catch{}if(typeof window.changeView=="function"&&window.changeView("view-admin"),He()&&it(),ee.currentUser)Ve();else{const e=ee.onAuthStateChanged(()=>{e(),Ve()})}}else ge("login-username",""),ge("login-password",""),typeof window.changeView=="function"&&window.changeView("view-admin-login")},Ve=()=>{He()&&it();const t=k("view-admin");t&&t.classList.remove("admin-pos-mode");const e=document.querySelector("#view-admin .scroll-content");e&&(e.scrollTop=0),typeof window.hideFloatingScrollTop=="function"&&window.hideFloatingScrollTop(),Ge("admin-dashboard-view"),rt("admin-content-view"),rt("btn-admin-back"),Ge("admin-logo-box"),typeof window.renderSubscriptionNoticeInCMS=="function"&&window.renderSubscriptionNoticeInCMS(),qa(""),window.cTab="";try{history.state&&history.state.tab&&history.replaceState({view:"view-admin"},"",window.location.href)}catch{}typeof window.detachPOSHistoryListener=="function"&&window.detachPOSHistoryListener(),Ae&&(Ae(),st(null)),Se&&(Se(),et(null)),Te&&(Te(),tt(null)),ts(),ia(Ar),It()},It=()=>{const t=k("admin-menu-tax-btn");if(!t)return;const e=Tt("tax");(i.store.ppnEnabled===!0||i.store.ppnEnabled==="true")&&e?(t.classList.remove("hidden"),t.classList.add("flex")):(t.classList.add("hidden"),t.classList.remove("flex"))},Ga=new Map,Zr=2*60*1e3,ia=async(t="month")=>{if(Ir(t),!k("admin-report-container"))return;if(!Tt("view_reports")){R("admin-report-container",`
            <div class="p-6 sm:p-8 bg-white dark:bg-slate-800/95 rounded-3xl border border-slate-200/90 dark:border-slate-700/80 shadow-2xs text-center flex flex-col items-center justify-center">
                <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-3 shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary)">
                    <i class="fa-solid fa-lock"></i>
                </div>
                <p class="text-xs font-black text-slate-800 dark:text-white">Laporan Keuangan Dibatasi</p>
                <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-1 max-w-sm leading-relaxed">
                    Informasi omset, modal HPP, margin laba kotor, dan laba bersih toko dirahasiakan & hanya dapat diakses oleh akun dengan izin laporan finansial (Owner).
                </p>
            </div>
        `);return}document.querySelectorAll(".report-period-btn").forEach(b=>{const u=b.dataset.period===t;b.style.background=u?"var(--color-primary)":"transparent",b.style.color=u?"var(--color-primary-contrast, #fff)":"",b.style.boxShadow=u?"0 2px 8px rgba(var(--color-primary-rgb),0.35)":"none"});const a=({totalPenjualan:b,totalHppTerjual:u,totalDiskonProduk:f,orderCount:v,truncated:h})=>{const y=b-u,T=y-f,M={today:"Hari Ini",week:"Minggu Ini",month:"Bulan Ini",all:"Sepanjang Waktu"}[t]||"";R("admin-report-container",`
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <div class="card-modern p-5 sm:p-5">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Total Penjualan (${M})</p>
                    <p class="text-lg sm:text-xl font-bold text-slate-800 dark:text-white truncate">${g(b)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-1">${v} pesanan${h?" (≥3000, dibatasi)":""}</p>
                </div>
                <div class="card-modern p-5 sm:p-5">
                    <p class="text-[9px] font-bold text-[var(--color-primary)] uppercase tracking-widest mb-1.5"><i class="fa-solid fa-arrow-trend-up mr-1"></i>Laba Kotor</p>
                    <p class="text-lg sm:text-xl font-bold text-[var(--color-primary)] truncate">${g(y)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-1">Penjualan − HPP Terjual</p>
                </div>
                <div class="card-modern p-5 sm:p-5">
                    <p class="text-[9px] font-bold text-rose-500 uppercase tracking-widest mb-1.5"><i class="fa-solid fa-tag mr-1"></i>Total HPP Terjual</p>
                    <p class="text-lg sm:text-xl font-bold text-rose-500 truncate">${g(u)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-1">Modal barang yang laku</p>
                </div>
                <div class="card-modern p-5 sm:p-5">
                    <p class="text-[9px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-1.5"><i class="fa-solid fa-sack-dollar mr-1"></i>Laba Bersih</p>
                    <p class="text-lg sm:text-xl font-bold truncate" style="color:var(--color-primary)">${g(T)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-1">Laba Kotor − Diskon</p>
                </div>
            </div>
        `)},r=Ga.get(t);if(r&&Date.now()-r.timestamp<Zr){a(r.data);return}R("admin-report-container",'<div class="text-center py-10"><i class="fa-solid fa-spinner fa-spin text-2xl text-slate-300"></i></div>');let s=null;const o=new Date;if(t==="today")s=new Date(o.getFullYear(),o.getMonth(),o.getDate());else if(t==="week"){const b=o.getDay(),u=b===0?6:b-1;s=new Date(o.getFullYear(),o.getMonth(),o.getDate()-u)}else t==="month"&&(s=new Date(o.getFullYear(),o.getMonth(),1));let l=0,n=0,c=0,p=0,d=!1;try{if(!ee.currentUser){R("admin-report-container",'<div class="text-center py-10 text-slate-400"><i class="fa-solid fa-lock text-2xl mb-3"></i><p class="text-xs font-bold">Login terlebih dahulu untuk melihat laporan.</p></div>');return}let b=P.collection("freshmart_orders");s&&(b=b.where("timestamp",">=",je.firestore.Timestamp.fromDate(s)));const u=await b.limit(3e3).get();d=u.size>=3e3,u.forEach(v=>{const h=v.data();h.status!=="Dibatalkan"&&(p++,l+=parseFloat(h.payment?.subtotal)||0,c+=parseFloat(h.payment?.productDiscount)||0,(h.items||[]).forEach(y=>{const T=y.hpp!==void 0&&y.hpp!==null?parseFloat(y.hpp):typeof window.getEffHpp=="function"?window.getEffHpp(y):0;n+=(parseFloat(T)||0)*(parseFloat(y.qty)||0)}))});const f={totalPenjualan:l,totalHppTerjual:n,totalDiskonProduk:c,orderCount:p,truncated:d};Ga.set(t,{data:f,timestamp:Date.now()}),a(f)}catch(b){console.error("Gagal memuat laporan penjualan:",b)}},as=async()=>{const t=$("login-username"),e=$("login-password");if(!t||!e)return x("Email & Password wajib diisi!");vt(!0),L("Verifikasi Akun & Hak Akses...");try{const r=(await ee.signInWithEmailAndPassword(t,e)).user||ee.currentUser;if(!r)throw new Error("AUTH_FAILED");if(r.uid===Wt){const n="sess_"+Date.now()+"_"+Math.random().toString(36).substring(2,9);localStorage.setItem("freshmart_admin_session_id",n),await ye(n),it(),_a({uid:Wt,name:"Owner Toko",email:t,role:_e.OWNER,isActive:!0});try{sessionStorage.setItem("pos_cashier_session",JSON.stringify({uid:Wt,name:"Owner Toko",email:t,role:_e.OWNER}))}catch{}window.isAdm=!0,window.__localIsAdm=!0;try{Jt()}catch{}history.replaceState({view:"view-admin"},"",window.location.href),typeof window.changeView=="function"&&window.changeView("view-admin",!0),Ve(),x("Selamat datang, Pemilik Toko!","success");return}const s=await P.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(r.uid).get();if(!s.exists)throw await ee.signOut(),localStorage.removeItem("freshmart_admin_session_id"),Ze(),new Error("STAFF_NOT_FOUND");const o=s.data()||{};if(o.isActive===!1)throw await ee.signOut(),localStorage.removeItem("freshmart_admin_session_id"),Ze(),new Error("STAFF_INACTIVE");const l={uid:r.uid,name:o.name||t,email:o.email||t,role:o.role||_e.CASHIER,permissions:o.permissions||null,isActive:!0};if(_a(l),s.ref.update({lastLoginAt:je.firestore.FieldValue.serverTimestamp()}).catch(()=>{}),l.role===_e.CASHIER){try{const n=await J(()=>import("./module-pos-YAlbR-NC.js").then(c=>c.U),__vite__mapDeps([0,1,2,3,4,5]));n&&typeof n.setCashierSession=="function"&&n.setCashierSession(l)}catch{}try{localStorage.setItem("pos_has_cashier","true")}catch{}typeof window.updatePOSHeaderIcon=="function"&&window.updatePOSHeaderIcon(),history.replaceState({view:"view-pos-cashier"},"",window.location.href),typeof window.changeView=="function"&&window.changeView("view-pos-cashier",!0),x(`Login Berhasil! Selamat bertugas di Kasir, ${l.name||"Kasir"}!`,"success");return}window.isAdm=!0,window.__localIsAdm=!0;try{Jt()}catch{}history.replaceState({view:"view-admin"},"",window.location.href),typeof window.changeView=="function"&&window.changeView("view-admin",!0),Ve(),x(`Login Berhasil! Selamat bertugas, ${l.name||"Admin"}!`,"success")}catch(a){console.error(a),localStorage.removeItem("freshmart_admin_session_id"),Ze(),a.message==="STAFF_NOT_FOUND"?x("Login Ditolak: Akun Anda tidak terdaftar sebagai staf Toko Putri!"):a.message==="STAFF_INACTIVE"?x("Login Ditolak: Akun Anda dinonaktifkan oleh Owner Toko."):a.message&&a.message.startsWith("UID_MISMATCH:")?x("Login Ditolak: Akun tidak memiliki hak akses CMS."):x("Login Ditolak: Email atau Password salah!")}finally{vt(!1),D()}},na=async()=>{L("Keluar...");try{He()&&nt(),localStorage.removeItem("freshmart_admin_session_id"),Ze();try{const t=sessionStorage.getItem("pos_cashier_session");if(t){const e=JSON.parse(t);(e.role===_e.OWNER||e.role==="owner")&&sessionStorage.removeItem("pos_cashier_session")}}catch{}typeof window.detachPOSHistoryListener=="function"&&window.detachPOSHistoryListener();try{Fr()}catch{}Ae&&(Ae(),st(null)),Se&&(Se(),et(null)),Te&&(Te(),tt(null)),await ee.signOut(),window.isAdm=!1,window.__localIsAdm=!1,x("Berhasil Logout"),typeof window.changeView=="function"&&window.changeView("view-catalog")}catch{x("Gagal Logout")}finally{D()}},ss=()=>{const t=He();ue(t?"Keluar Panel Owner":"Keluar CMS Toko",t?"Apakah Anda yakin ingin keluar dari panel kontrol Owner Toko?":"Apakah Anda yakin ingin keluar dari halaman admin?",()=>{na()},"Ya, Keluar")};window.__checkAdminAccessReal=la;window.checkAdminAccess=la;window.openAdminMenu=Ve;window.toggleTaxMenuVisibility=It;window.computeInventoryStats=computeInventoryStats;window.loadAdminReport=ia;window.processAdminLogin=as;window.logoutAdmin=na;window.confirmLogoutAdmin=ss;const rs=async()=>{if(!B||B.length===0)return x("Belum ada data pesanan!");L("Menyiapkan modul Excel...");try{await zt("https://cdn.sheetjs.com/xlsx-0.20.3/package/dist/xlsx.full.min.js",()=>typeof XLSX<"u")}catch{D(),x("Gagal memuat modul Excel. Cek koneksi internet Anda.");return}D();let t=[];B.forEach((l,n)=>{let c=l.dateString?new Date(l.dateString).toLocaleString("id-ID"):"-",p=l.customer?.name||"Anonim",d=l.source==="pos"||l.channel==="pos",b=l.customer?.deliveryMethod==="delivery"?"Dikirim":d?"Beli Langsung di Kasir (Takeaway)":"Ambil di Toko";l.isDropPoint&&(b="Lokasi Berbeda");let u=l.status||"-",f=l.items?l.items.reduce((h,y)=>h+(parseFloat(y.qty)||0),0):0,v=l.payment?.grandTotal||0;t.push({No:n+1,"ID Pesanan":l.orderId,Tanggal:c,Sumber:d?`Kasir POS (${l.cashierName||"Kasir"})`:"Website Storefront","Nama Pelanggan":p,"Tipe Pelanggan":l.customerType==="Member"?"Member":"Pelanggan Umum","No. WhatsApp":l.customer?.wa?`+${l.customer.wa}`:"-","Metode Kirim":b,Status:u,"Total Item":f,"Total Tagihan (Rp)":v})});const e=XLSX.utils.json_to_sheet(t),a=XLSX.utils.book_new();XLSX.utils.book_append_sheet(a,e,"Laporan Pesanan");const r=[{wch:5},{wch:25},{wch:22},{wch:24},{wch:25},{wch:18},{wch:18},{wch:26},{wch:15},{wch:12},{wch:20}];e["!cols"]=r;const o=`Laporan_Pesanan_${new Date().toISOString().split("T")[0]}.xlsx`;if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function"){const l=XLSX.write(a,{bookType:"xlsx",type:"base64"});window.AndroidNativeApp.saveOrShareFile(l,o,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")}else XLSX.writeFile(a,o);x("Laporan Excel (.xlsx) berhasil diunduh!")},os=()=>{try{if(typeof window<"u"){if(typeof window.checkUserGesture=="function"&&!window.checkUserGesture())return;if(typeof window.playNativeSound=="function"){window.playNativeSound("success");return}}const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const e=new t;e.state==="suspended"&&e.resume().catch(()=>{});const a=e.createOscillator(),r=e.createGain();a.connect(r),r.connect(e.destination),a.type="sine",a.frequency.setValueAtTime(800,e.currentTime),r.gain.setValueAtTime(.2,e.currentTime),a.frequency.setValueAtTime(600,e.currentTime+.2),a.frequency.setValueAtTime(800,e.currentTime+.6),r.gain.setValueAtTime(.2,e.currentTime+.6),a.frequency.setValueAtTime(600,e.currentTime+.8),r.gain.exponentialRampToValueAtTime(1e-5,e.currentTime+1.5),a.start(e.currentTime),a.stop(e.currentTime+1.5),setTimeout(()=>{e.close().catch(()=>{})},1600)}catch{}};let $e="all";const ls=t=>{$e=t,["all","pos","storefront"].forEach(e=>{const a=k(`btn-ord-filter-${e}`);a&&(e===t?a.className="h-8 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white shadow-sm shadow-[rgba(var(--color-primary-rgb),0.3)] flex items-center gap-1.5":a.className="h-8 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700/60 flex items-center gap-1.5")}),da()},da=()=>{const t=k("admin-orders-list");if(!t)return;if(!B||B.length===0){t.innerHTML='<div class="flex flex-col items-center justify-center py-20 text-slate-400 font-bold bg-white dark:bg-slate-800 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm text-center"><i class="fa-solid fa-receipt text-5xl mb-4 opacity-30"></i>Belum ada pesanan</div>';return}const e=B.filter(a=>{const r=a.source==="pos"||a.channel==="pos";return $e==="pos"?r:$e==="storefront"?!r:!0});if(e.length===0){const a=$e==="pos"?"Belum ada transaksi dari Kasir POS":$e==="storefront"?"Belum ada pesanan dari Website Storefront":"Belum ada pesanan";t.innerHTML=`<div class="flex flex-col items-center justify-center py-16 text-slate-400 font-bold bg-white dark:bg-slate-800 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm text-center"><i class="fa-solid fa-filter-circle-xmark text-4xl mb-3 opacity-30"></i>${a}</div>`;return}t.innerHTML=e.map(a=>{let r="text-slate-500 border-slate-200 dark:border-slate-600",s="fa-clock",o="bg-slate-50 dark:bg-slate-700/50",l="text-slate-400";a.status==="Baru"?(r="text-rose-600 border-rose-300 bg-rose-50 dark:bg-rose-950/40 dark:border-rose-800 font-bold",s="fa-asterisk",o="bg-rose-500",l="text-white shadow-md shadow-rose-500/30"):a.status==="Diproses"?(r="text-[var(--color-primary)] border-[var(--color-primary)]/30 bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.10)] dark:border-[var(--color-primary)]/30",s="fa-spinner fa-spin",o="primary-bg",l="shadow-sm"):a.status==="Selesai"?(r="text-[var(--color-primary)] border-[var(--color-primary)]/30 bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.10)] dark:border-[var(--color-primary)]/30",s="fa-check-double",o="primary-bg-soft",l="primary-text"):a.status==="Dibatalkan"&&(r="text-slate-400 border-slate-200 bg-slate-50 dark:bg-slate-800 dark:border-slate-700",s="fa-xmark",o="bg-slate-100 dark:bg-slate-800",l="text-slate-400");let n="fa-wallet text-slate-400",c=a.payment?.method||"",p=c.toUpperCase();const d=a.source==="pos"||a.channel==="pos";if(c==="transfer")n="fa-building-columns text-[var(--color-primary)]",p="Transfer";else if(c==="qris")n="fa-qrcode text-purple-500",p="QRIS";else if(c==="cod")n="fa-hand-holding-dollar text-[var(--color-primary)]",p="COD";else if(c==="cashier"||c==="cash")n="fa-cash-register text-emerald-500",p=d?"Tunai (Kasir)":"Kasir";else if(c==="tempo"){const T=!!(a.payment?.isPaylater||a.isPaylater||a.payment?.subMethod==="paylater");n=T?"fa-bolt text-emerald-500":"fa-file-invoice-dollar text-amber-500",p=T?"PayLater":"Tempo"}let b=a.items?parseFloat(a.items.reduce((T,M)=>T+(parseFloat(M.qty)||0),0).toFixed(2)):0;const u=a.dateString?new Date(a.dateString).toLocaleDateString("id-ID",{day:"numeric",month:"short"}):"",f=(a.orderId||"").split("-").pop(),v=(i.salesReturns||[]).filter(T=>String(T.orderId)===String(a.orderId||a.id)),h=v.length>0,y=v.reduce((T,M)=>T+(parseFloat(M.totalRefund)||0),0);return`
        <div class="card-native p-4 sm:p-5 rounded-2xl sm:rounded-3xl relative overflow-hidden group cursor-pointer active:scale-[0.99] transition-all duration-200" onclick="openOrderDetail('${a.orderId}')">
            <div class="flex items-center gap-3 sm:gap-4">
                <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${o} ${l} flex items-center justify-center shrink-0 transition-colors">
                    <i class="fa-solid fa-receipt text-xl sm:text-2xl"></i>
                </div>
                <div class="flex-1 min-w-0">
                    <div class="flex justify-between items-start mb-1 gap-2">
                        <div class="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                            <span class="font-bold text-sm sm:text-base text-slate-800 dark:text-slate-100 tracking-tight">#${f}</span>
                            <span class="text-[9px] font-bold px-2 py-0.5 rounded-lg border ${r} uppercase tracking-widest flex items-center"><i class="fa-solid ${s} mr-1"></i> ${m(a.status)}</span>
                            ${d?`
                            <span class="text-[9px] font-bold px-2 py-0.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 uppercase tracking-widest flex items-center gap-1">
                                <i class="fa-solid fa-cash-register text-[9px]"></i> Kasir: ${m(a.cashierName||"POS")}
                            </span>`:`
                            <span class="text-[9px] font-bold px-2 py-0.5 rounded-lg bg-[rgba(var(--color-primary-rgb),0.08)] border border-[rgba(var(--color-primary-rgb),0.25)] text-[var(--color-primary)] uppercase tracking-widest flex items-center gap-1">
                                <i class="fa-solid fa-globe text-[9px]"></i> Storefront
                            </span>`}
                        </div>
                        <span class="text-[10px] font-bold text-slate-400 flex items-center gap-1.5 whitespace-nowrap shrink-0"><i class="fa-regular fa-calendar"></i> <span class="hidden sm:inline">${u}</span></span>
                    </div>
                    <div class="flex items-center gap-2 mt-1.5 flex-wrap">
                        <p class="text-xs font-bold text-slate-600 dark:text-slate-300 truncate max-w-[140px] sm:max-w-xs"><i class="fa-solid fa-user text-slate-400 mr-1"></i> ${m(a.customer?.name||"Anonim")}</p>
                        <span class="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600 shrink-0"></span>
                        <span class="text-[9px] font-bold text-slate-500 bg-slate-100 dark:bg-slate-900 px-2 py-0.5 rounded-lg border border-slate-200 dark:border-slate-700 uppercase tracking-widest shrink-0">${b} Item</span>
                        <span class="text-[9px] font-bold ${a.customerType==="Member"?"text-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.08)] border border-[rgba(var(--color-primary-rgb),0.25)]":"text-slate-500 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700"} px-2 py-0.5 rounded-lg uppercase tracking-widest shrink-0">${a.customerType==="Member"?'<i class="fa-solid fa-star text-[var(--color-primary)] mr-1"></i>Member':"Umum"}</span>
                        ${a.customer?.lat?'<span class="text-[9px] font-bold text-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.1)] px-1.5 py-0.5 rounded-lg border border-[rgba(var(--color-primary-rgb),0.2)] uppercase tracking-widest shrink-0"><i class="fa-solid fa-location-dot"></i> GPS</span>':""}
                        ${a.delivery?.doNumber?`<span class="text-[9px] font-bold ${a.delivery.status==="delivered"?"text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800":a.delivery.status==="out_for_delivery"?"text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800":"text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800"} px-2 py-0.5 rounded-lg border uppercase tracking-widest shrink-0 flex items-center gap-1"><i class="fa-solid fa-truck-fast text-[8px]"></i> DO #${m(a.delivery.doNumber.split("-").pop())}</span>`:""}
                        ${h?`<span class="text-[9px] font-bold text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 px-2 py-0.5 rounded-lg uppercase tracking-widest shrink-0 flex items-center gap-1"><i class="fa-solid fa-right-left text-[8px]"></i> Retur: ${g(y)}</span>`:""}
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
                    <span class="font-extrabold text-[var(--color-primary)] text-lg sm:text-xl tracking-tight">${g(a.payment?.grandTotal)}</span>
                    ${(()=>{const T=Wa(a);return T.hasPpn?`<span class="text-[8px] font-bold bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 px-1.5 py-0.5 rounded border border-amber-200 dark:border-amber-800 uppercase tracking-widest">${T.ppnRate>0?`PPN ${T.ppnRate}%`:"PPN 0%"}</span>`:""})()}
                </div>
                <div class="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-900/80 px-3 py-1.5 rounded-xl border border-slate-200/60 dark:border-slate-700/70">
                    <i class="fa-solid ${n} text-xs"></i>
                    <span class="text-[9px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-widest">${m(p)}</span>
                </div>
            </div>
        </div>`}).join("")},is=()=>{R("admin-content",`
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
    `);const t=()=>{Ae&&(Ae(),st(null));let e=!0;const a=P.collection("freshmart_orders").orderBy("timestamp","desc").limit(100).onSnapshot(r=>{if(Ka([]),!e){let o=!1;r.docChanges().forEach(l=>{l.type==="added"&&l.doc.data().status==="Baru"&&(o=!0)}),o&&(x("Pesanan Baru Masuk!"),os())}if(e=!1,r.empty){R("admin-orders-list",'<div class="flex flex-col items-center justify-center py-20 text-slate-400 font-bold bg-white dark:bg-slate-800 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm text-center"><i class="fa-solid fa-receipt text-5xl mb-4 opacity-30"></i>Belum ada pesanan</div>'),Re("stat-orders",0);return}Re("stat-orders",r.size+(r.size===100?"+":""));const s=[];r.docs.forEach(o=>s.push(o.data())),Ka(s),da()},()=>{R("admin-orders-list",'<div class="text-center text-rose-500 font-bold">Koneksi terputus. Retrying...</div>'),setTimeout(t,5e3)});st(a)};t()},Mt=t=>{const e=B.find(b=>b.orderId===t);if(!e)return;Dr(t);const a=Wa(e),r=(i.salesReturns||[]).filter(b=>String(b.orderId)===String(e.orderId||e.id)),s=e.source==="pos"||e.channel==="pos",o=!!e.customer?.wa;e.status==="Diproses"||e.status==="Selesai"||e.status;const l=e.status==="Baru"?"Konfirmasi Pesanan Baru":e.status==="Diproses"?"Pesanan Sedang Diproses":e.status==="Selesai"?"Pesanan Selesai":e.status==="Dibatalkan"?"Pesanan Dibatalkan":e.status;let n=`<div class="relative w-full sm:w-40 mt-1"><select onchange="updateOrderStatus('${e.orderId}', this.value)" class="w-full text-sm font-bold ${e.status==="Baru"?"text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/50 border-rose-200 dark:border-rose-900/60":e.status==="Diproses"?"text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 border-blue-200 dark:border-blue-900/60":e.status==="Selesai"?"text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 border-emerald-200 dark:border-emerald-900/60":"text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700"} border px-4 py-2.5 rounded-xl focus:outline-none appearance-none cursor-pointer transition-colors shadow-sm"><option value="Baru" ${e.status==="Baru"?"selected":""} class="text-slate-800 dark:text-slate-100 dark:bg-slate-800">Baru (Pending)</option><option value="Diproses" ${e.status==="Diproses"?"selected":""} class="text-slate-800 dark:text-slate-100 dark:bg-slate-800">Diproses</option><option value="Selesai" ${e.status==="Selesai"?"selected":""} class="text-slate-800 dark:text-slate-100 dark:bg-slate-800">Selesai</option><option value="Dibatalkan" ${e.status==="Dibatalkan"?"selected":""} class="text-slate-800 dark:text-slate-100 dark:bg-slate-800">Dibatalkan</option></select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 ${e.status==="Baru"?"text-rose-400":e.status==="Diproses"?"text-blue-400":e.status==="Selesai"?"text-emerald-400":"text-slate-400"} pointer-events-none text-xs"></i></div>`;R("admin-order-modal-content",`
        <div class="flex flex-col gap-4 text-sm pb-2">
            <div class="bg-white dark:bg-slate-800 p-5 sm:p-6 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col sm:flex-row justify-between gap-5 sm:items-center">
                <div class="flex-1">
                    <p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5"><i class="fa-solid fa-crosshairs text-[var(--color-primary)]"></i> Status</p>
                    ${n}
                    <div class="mt-2.5 flex items-center gap-1.5 flex-wrap">
                        ${s?`
                        <span class="px-2.5 py-1 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-[11px] font-bold flex items-center gap-1.5">
                            <i class="fa-solid fa-cash-register text-xs"></i> Sumber: Dibuat di Kasir POS (Petugas: ${m(e.cashierName||"Kasir")})
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
                    <div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold">Nama</span><span class="font-bold text-slate-900 dark:text-white text-base">${m(e.customer?.name||"-")}</span></div>
                    ${e.customer?.wa?`<div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold flex items-center gap-1.5"><i class="fa-brands fa-whatsapp text-green-500"></i> WhatsApp</span><a href="javascript:void(0)" onclick="if(typeof window.openWhatsApp==='function') window.openWhatsApp('${m(e.customer.wa)}'); else window.open('https://wa.me/${m(e.customer.wa)}', '_blank', 'noopener,noreferrer');" class="font-bold text-green-600 dark:text-green-400 hover:underline cursor-pointer">+${m(e.customer.wa)}</a></div>`:""}
                    <div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold">Tipe Pemesan</span><span class="text-xs font-bold px-2.5 py-1 rounded-lg ${e.customerType==="Member"?"bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.25)]":"bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 border border-slate-200 dark:border-slate-700"}">${e.customerType==="Member"?'<i class="fa-solid fa-star text-amber-500 mr-1"></i> Member Resmi':'<i class="fa-solid fa-user text-slate-400 mr-1"></i> Pelanggan Umum'}</span></div>
                    ${e.customer?.wa&&e.customerType!=="Member"?`<button type="button" onclick="saveOrderCustomerToDB('${m(e.customer.name||"")}','${m(e.customer.wa)}','${m(e.orderId)}')" class="w-full py-2.5 rounded-xl primary-bg active:scale-95 text-white shadow-md shadow-[rgba(var(--color-primary-rgb),0.2)] text-[11px] font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all"><i class="fa-solid fa-address-book"></i> + Konfirmasi &amp; Daftarkan Sebagai Member</button>`:""}
                    ${e.customerType==="Member"?'<div class="w-full py-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 text-[11px] font-black uppercase tracking-widest flex items-center justify-center gap-2"><i class="fa-solid fa-circle-check"></i> Terverifikasi — Data Member Terkunci</div>':""}
                    <div class="border-t border-dashed border-slate-200 dark:border-slate-700 pt-4">
                        <span class="text-slate-500 dark:text-slate-400 font-bold flex items-center gap-2 mb-2.5"><i class="fa-solid fa-map-location-dot"></i> Alamat Pemesan (${s?"Beli Langsung di Kasir (Takeaway)":e.customer?.deliveryMethod==="delivery"?"Dikirim":"Ambil di Toko"})</span>
                        <div class="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700 font-bold text-slate-700 dark:text-slate-300 leading-relaxed shadow-inner text-sm">${m(e.customer?.address||"-")}</div>
                        ${e.customer?.lat&&e.customer?.deliveryMethod==="delivery"&&!e.isDropPoint?`<a href="https://www.google.com/maps?q=${m(e.customer.lat)},${m(e.customer.lng)}" target="_blank" class="mt-3 flex items-center justify-center gap-2 bg-[rgba(var(--color-primary-rgb),0.07)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.25)] font-bold text-xs py-2.5 px-4 rounded-xl hover:bg-[rgba(var(--color-primary-rgb),0.12)] transition-colors"><i class="fa-solid fa-location-dot"></i> Buka Lokasi Pembeli di Google Maps</a>`:""}
                    </div>
                    ${e.isDropPoint&&e.dropPoint?`<div class="border-2 border-[var(--color-primary)]/30 bg-[rgba(var(--color-primary-rgb),0.04)] dark:bg-[rgba(var(--color-primary-rgb),0.1)] rounded-xl p-4 mt-2">
                        <p class="text-[10px] font-bold uppercase tracking-widest text-[var(--color-primary)] mb-3 flex items-center gap-1.5"><i class="fa-solid fa-location-dot"></i> DIKIRIM KE LOKASI BERBEDA</p>
                        <div class="space-y-2">
                            <div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold text-xs">Nama Penerima</span><span class="font-bold text-slate-900 dark:text-white">${m(e.dropPoint.name||"-")}</span></div>
                            ${e.dropPoint.wa?`<div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold text-xs flex items-center gap-1"><i class="fa-brands fa-whatsapp text-green-500"></i> WA Penerima</span><a href="javascript:void(0)" onclick="if(typeof window.openWhatsApp==='function') window.openWhatsApp('${m(e.dropPoint.wa)}'); else window.open('https://wa.me/${m(e.dropPoint.wa)}', '_blank', 'noopener,noreferrer');" class="font-bold text-green-600 dark:text-green-400 hover:underline cursor-pointer">+${m(e.dropPoint.wa)}</a></div>`:""}
                            <div class="border-t border-[var(--color-primary)]/15 pt-2 mt-2">
                                <span class="text-slate-500 dark:text-slate-400 font-bold text-xs block mb-1.5">Alamat Tujuan Pengiriman</span>
                                <div class="bg-white dark:bg-slate-800 p-3 rounded-xl border border-[var(--color-primary)]/20 font-bold text-slate-700 dark:text-slate-300 leading-relaxed shadow-inner text-sm">${m(e.dropPoint.address||"-")}</div>
                                ${e.dropPoint.lat?`<a href="https://www.google.com/maps?q=${m(e.dropPoint.lat)},${m(e.dropPoint.lng)}" target="_blank" class="mt-2 flex items-center justify-center gap-2 bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] border border-[var(--color-primary)]/30 font-bold text-xs py-2.5 px-4 rounded-xl hover:bg-[rgba(var(--color-primary-rgb),0.18)] transition-colors"><i class="fa-solid fa-location-dot"></i> Buka Lokasi Tujuan di Google Maps</a>`:""}
                                ${e.dropPoint.wa?`<button type="button" onclick="konfirmasiKeWAPenerima('${e.orderId}')" class="mt-2.5 w-full py-2 bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/40 dark:hover:bg-emerald-900/60 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-700 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs active:scale-95"><i class="fa-brands fa-whatsapp text-sm"></i> Notifikasi Pengiriman ke WA Penerima</button>`:""}
                            </div>
                        </div>
                    </div>`:""}
                    ${e.customer?.note?`<div class="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl border border-amber-200 dark:border-amber-800 mt-2"><p class="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-1.5"><i class="fa-solid fa-note-sticky"></i> Catatan Pembeli</p><p class="text-sm text-amber-900 dark:text-amber-100 font-bold">${m(e.customer.note)}</p></div>`:""}
                    ${e.buktiPayment?`<div class="bg-violet-50 dark:bg-violet-900/20 p-4 rounded-xl border border-violet-200 dark:border-violet-800 mt-2"><p class="text-[10px] font-bold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-2.5"><i class="fa-solid fa-image"></i> Bukti Pembayaran</p><a href="${m(e.buktiPayment)}" target="_blank" class="block rounded-xl overflow-hidden border border-violet-200 dark:border-violet-800"><img src="${m(e.buktiPayment)}" alt="Bukti Pembayaran" class="w-full max-h-48 object-cover" onerror="this.style.display='none'" loading="lazy"><div class="bg-violet-100 dark:bg-violet-900/40 py-2 text-center text-[10px] font-bold text-violet-600 dark:text-violet-400"><i class="fa-solid fa-arrow-up-right-from-square mr-1"></i> Tap untuk buka</div></a></div>`:""}
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
                    ${(()=>{const b=e.delivery?.status||"pending_dispatch",u=b==="delivered",f=b==="out_for_delivery";return`<span class="px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider border shrink-0 whitespace-nowrap ${u?"bg-emerald-100 text-emerald-800 border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800":f?"bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800":"bg-amber-100 text-amber-800 border-amber-300 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800"}">${u?"Terkirim & TTD":f?"Dalam Perjalanan":"Menunggu Muat"}</span>`})()}
                </div>

                <div class="grid grid-cols-2 gap-3 text-xs">
                    <div>
                        <span class="text-slate-400 font-medium block text-[10px]">No. Surat Jalan (DO):</span>
                        <span class="font-bold font-mono text-slate-800 dark:text-slate-100">${m(e.delivery?.doNumber||"Belum Diterbitkan")}</span>
                    </div>
                    <div>
                        <span class="text-slate-400 font-medium block text-[10px]">Armada &amp; Supir:</span>
                        <span class="font-bold text-slate-800 dark:text-slate-100 truncate block">${m(e.delivery?.fleetName||"Pick-up L300")} ${e.delivery?.driverName?`(${m(e.delivery.driverName)})`:""}</span>
                    </div>
                </div>

                ${e.delivery?.signature?.signerName?`
                <div class="bg-emerald-50 dark:bg-emerald-950/30 p-2.5 rounded-xl border border-emerald-200 dark:border-emerald-800 flex items-center gap-3">
                    <img src="${e.delivery.signature.signatureDataUrl}" alt="TTD" class="h-10 w-auto bg-white rounded p-1 border border-emerald-300">
                    <div class="text-[11px] text-emerald-800 dark:text-emerald-300">
                        <p class="font-bold">Serah Terima Ditandatangani</p>
                        <p class="text-[10px] font-medium text-emerald-600 dark:text-emerald-400">Oleh: ${m(e.delivery.signature.signerName)}</p>
                    </div>
                </div>`:""}

                <div class="pt-1 flex flex-col sm:flex-row gap-2.5">
                    <button type="button" onclick="openDeliveryModal('${m(e.orderId)}')" class="btn-native-action w-full sm:flex-1 h-11 py-2.5 px-4 rounded-xl text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-xs cursor-pointer active:scale-95 shrink-0 transition-transform" style="background: var(--color-primary);">
                        <i class="fa-solid fa-truck-fast text-sm"></i>
                        <span>Kelola Pengiriman &amp; DO</span>
                    </button>
                    <button type="button" onclick="printOfficialDeliveryOrderA4('${m(e.orderId)}')" class="btn-native-action w-full sm:w-auto px-4 h-11 py-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 hover:bg-slate-50 text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer active:scale-95 shrink-0 transition-transform">
                        <i class="fa-solid fa-print text-amber-500 text-sm"></i>
                        <span>Cetak DO A4</span>
                    </button>
                    <button type="button" onclick="if(typeof window.closeOrderDetailModal==='function') window.closeOrderDetailModal(); if(window.openSalesReturnModal){window.openSalesReturnModal('${m(e.orderId)}');} else if(window.openAdminTab){window.openAdminTab('returns');}" class="btn-native-action w-full sm:w-auto px-4 h-11 py-2.5 rounded-xl border border-rose-200 dark:border-rose-800 bg-rose-50/80 dark:bg-rose-950/30 hover:bg-rose-100 dark:hover:bg-rose-900/40 text-rose-700 dark:text-rose-300 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer active:scale-95 shrink-0 transition-transform" title="Proses Pengembalian Barang Nota Ini">
                        <i class="fa-solid fa-right-left text-rose-500 text-sm"></i>
                        <span>Retur (RMA)</span>
                    </button>
                </div>
            </div>

            </div>

            <div class="flex flex-col gap-4">

            <div class="bg-white dark:bg-slate-800 p-5 sm:p-6 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm">
                <h4 class="font-bold text-slate-900 dark:text-white text-sm border-b border-slate-100 dark:border-slate-700 pb-4 mb-4 flex items-center gap-3"><div class="w-8 h-8 rounded-xl primary-light-icon-box flex items-center justify-center border border-slate-200 dark:border-slate-700"><i class="fa-solid fa-box-open"></i></div> Rincian Item</h4>
                <div class="space-y-3">${e.items.map(b=>{const u=r.reduce((f,v)=>{const h=(v.items||[]).find(y=>String(y.id)===String(b.id)&&(y.variantName||"")===(b.variantName||""));return f+(h&&parseFloat(h.qty)||0)},0);return`
                    <div class="flex justify-between items-center bg-slate-50 dark:bg-slate-900 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm min-w-0">
                        <div class="flex items-center gap-3 min-w-0">
                            <div class="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 flex items-center justify-center text-slate-500 dark:text-slate-400 shrink-0"><i class="fa-solid fa-tag text-sm"></i></div>
                            <div class="min-w-0">
                                <p class="font-bold text-sm text-slate-900 dark:text-white truncate mb-1" title="${m(b.name)}">${m(b.name)}</p>
                                ${b.variantName||b.poTime?`
                                <div class="flex flex-wrap gap-1 mb-1">
                                    ${b.variantName?`<span class="bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-1.5 py-0.5 rounded-lg border border-slate-300 dark:border-slate-600 text-[9px] font-bold">${m(b.variantName)}</span>`:""}
                                    ${b.poTime?`<span class="amber-badge px-1.5 py-0.5 rounded-lg text-[8px] font-bold uppercase">PO ${m(b.poTime)}</span>`:""}
                                </div>
                                `:""}
                                <p class="text-[11px] text-slate-500 dark:text-slate-400 font-bold flex items-center gap-2 flex-wrap">
                                    <span>${parseFloat(b.qty)} ${m(b.unit||"pcs")} x ${g(b.effectivePrice)}</span>
                                    ${u>0?`
                                    <span class="inline-flex items-center gap-1 text-[10px] font-black text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 px-2 py-0.5 rounded-md border border-rose-200 dark:border-rose-800">
                                        <i class="fa-solid fa-right-left text-[9px]"></i> Diretur: ${u} ${m(b.unit||"pcs")}
                                    </span>`:""}
                                </p>
                            </div>
                        </div>
                        <div class="font-bold text-sm text-slate-900 dark:text-white ml-3 shrink-0">${g(b.effectivePrice*parseFloat(b.qty))}</div>
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
                    ${r.map(b=>`
                        <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-rose-100 dark:border-rose-900/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-2xs">
                            <div>
                                <div class="flex items-center gap-2">
                                    <span class="font-black text-xs text-rose-700 dark:text-rose-400 font-mono">${m(b.id)}</span>
                                    <span class="text-[10px] font-bold text-slate-400">&middot; ${new Date(b.createdAt).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"})}</span>
                                </div>
                                <p class="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5">
                                    Kompensasi: <b class="capitalize">${b.refundMethod==="cash"?"Pengembalian Tunai":b.refundMethod==="credit"?"Store Credit":"Tukar Barang"}</b>
                                    ${b.notes?`&middot; <i>"${m(b.notes)}"</i>`:""}
                                </p>
                            </div>
                            <div class="flex items-center gap-2.5 justify-between sm:justify-end">
                                <span class="text-xs font-black text-rose-600 dark:text-rose-400 font-mono">${g(b.totalRefund)}</span>
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
                    <div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold text-xs">Hadiah</span><span class="font-bold text-violet-700 dark:text-violet-400 text-sm">${m(e.claimedReward.name)}</span></div>
                    <div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold text-xs">Poin Ditukar</span><span class="font-bold text-slate-800 dark:text-white text-sm">${e.claimedReward.pointsCost} Poin</span></div>
                    <div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold text-xs">Status</span><span class="font-bold text-xs px-2 py-1 rounded-xl ${e.claimedReward.status==="ready"?"bg-emerald-100 text-emerald-600":e.claimedReward.status==="waiting_stock"?"bg-amber-100 text-amber-600":"bg-slate-200 text-slate-600"}">${Cr(e.claimedReward)}</span></div>
                    ${e.claimedReward.note?`<div class="bg-white/70 dark:bg-slate-900/40 p-2.5 rounded-xl text-[11px] italic text-violet-600 dark:text-violet-400">"${m(e.claimedReward.note)}"</div>`:""}
                    <div class="border-t border-dashed border-violet-200 dark:border-violet-800 pt-3.5 mt-1 space-y-2.5">
                        <button type="button" onclick="ackRewardClaim('${e.orderId}','ready')" class="w-full py-2.5 rounded-xl primary-bg text-[11px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95 transition-all"><i class="fa-solid fa-check"></i> Stok Ada — Kirim Bersama Pesanan</button>
                        <button type="button" onclick="ackRewardClaim('${e.orderId}','waiting_stock')" class="w-full py-2.5 rounded-xl bg-amber-100 dark:bg-amber-900/30 hover:bg-amber-200 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800 text-[11px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95 transition-all"><i class="fa-solid fa-clock"></i> Stok Kosong — Tunda Pengiriman</button>
                    </div>
                </div>
            </div>`:""}

            <div class="bg-slate-900 p-6 sm:p-7 rounded-[1.5rem] text-white shadow-xl shadow-slate-900/20 border border-slate-700/60 relative overflow-hidden group mt-2">
                <div class="flex justify-between items-center border-b border-slate-700/80 pb-4 mb-4 relative z-10">
                    <h4 class="font-bold text-[11px] uppercase tracking-widest text-slate-300 flex items-center gap-2.5"><i class="fa-solid fa-wallet text-[var(--color-primary)] text-sm"></i> Ringkasan Bayar</h4>
                    <span class="bg-white/15 px-3 py-1 rounded-xl text-[10px] font-bold tracking-widest border border-white/20 uppercase shadow-inner text-white">${m(e.payment?.method||"").toUpperCase()}</span>
                </div>
                
                <div class="space-y-3 font-medium text-sm text-slate-300 relative z-10">
                    <div class="flex justify-between items-center"><span>Subtotal Produk</span><span class="font-bold text-white">${g(a.subtotal)}</span></div>
                    ${e.customer?.deliveryMethod==="delivery"?`<div class="flex justify-between items-center"><span>Ongkos Kirim</span><span class="font-bold text-white">${g(a.shipping)}</span></div>`:""}
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
                    <div class="flex justify-between items-center text-amber-400 bg-amber-900/20 px-2 py-1 -mx-2 rounded-xl"><span>${m(a.ppnLabel)}</span><span class="font-bold">${a.isInclusive?"":"+"}${g(a.ppnAmount)}</span></div>
                    `:""}
                </div>
                
                <div class="border-t border-dashed border-slate-600/60 my-5 relative z-10"></div>
                
                <div class="flex justify-between items-end relative z-10">
                    <span class="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Total Tagihan</span>
                    <span class="text-3xl font-bold text-[var(--color-primary)] tracking-tight font-extrabold">${g(a.grandTotal)}</span>
                </div>

                ${(()=>{if(!(e.payment?.method==="tempo"||e.isTempo))return"";const u=!!(e.payment?.isPaylater||e.isPaylater||e.payment?.subMethod==="paylater"),f=parseFloat(e.payment?.tempoDp??e.payment?.dp)||0,v=parseFloat(e.payment?.tempoBalance)||0,h=e.payment?.paymentStatus==="lunas"||v<=0;return`
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
                            <span class="font-bold text-slate-300 font-mono">+${g(e.payment.paylaterAdminFee)}</span>
                        </div>`:""}
                        ${u&&e.payment?.paylaterServiceFee>0?`
                        <div class="flex justify-between items-center text-xs">
                            <span class="text-slate-400">Biaya Layanan / Penanganan</span>
                            <span class="font-bold text-slate-300 font-mono">+${g(e.payment.paylaterServiceFee)}</span>
                        </div>`:""}
                        ${u?`
                        <div class="flex justify-between items-center text-xs">
                            <span class="text-slate-400">Limit PayLater Terpakai</span>
                            <span class="font-bold text-emerald-400 font-mono">${g(e.payment?.paylaterUsed||e.payment?.grandTotal-f)}</span>
                        </div>`:""}
                        <div class="flex justify-between items-center text-xs">
                            <span class="text-slate-400">Uang Muka (DP Dibayar)</span>
                            <span class="font-bold text-emerald-400 font-mono">${g(f)}</span>
                        </div>
                        <div class="flex justify-between items-center text-xs">
                            <span class="text-slate-400">Sisa Tagihan ${u?"PayLater":"Piutang"}</span>
                            <span class="font-bold font-mono ${h?"text-emerald-400":u?"text-emerald-300":"text-amber-400"}">${g(v)}</span>
                        </div>
                        ${u&&e.payment?.paylaterMonthlyInstallment?`
                        <div class="flex justify-between items-center text-xs text-emerald-300 font-bold bg-emerald-950/40 p-2 rounded-xl border border-emerald-800/40">
                            <span>Angsuran per Bulan (${e.payment?.paylaterMonths||1}x)</span>
                            <span class="font-mono">${g(e.payment.paylaterMonthlyInstallment)}/bln</span>
                        </div>`:""}
                        <div class="flex justify-between items-center text-xs">
                            <span class="text-slate-400">Status ${u?"PayLater":"Piutang"}</span>
                            <span class="px-2 py-0.5 rounded-lg text-[10px] font-black uppercase tracking-wider ${h?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/40":u?"bg-teal-500/20 text-teal-300 border border-teal-500/40":"bg-amber-500/20 text-amber-300 border border-amber-500/40"}">
                                ${h?"LUNAS":"BELUM LUNAS"}
                            </span>
                        </div>
                        <button type="button" onclick="if(typeof window.closeOrderDetailModal==='function') window.closeOrderDetailModal(); if(typeof window.openAdminTab==='function') window.openAdminTab('piutang'); setTimeout(() => { if(typeof window.openTempoDetail==='function') window.openTempoDetail('${m(e.orderId)}'); }, 300);" class="mt-2.5 w-full py-2.5 px-3 rounded-xl ${u?"bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40":"bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40"} text-[11px] font-bold flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-95 shadow-xs">
                            <i class="fa-solid ${u?"fa-bolt":"fa-file-invoice-dollar"}"></i> Kelola Tagihan &amp; Cicilan di Modul Piutang
                        </button>
                    </div>`})()}
            </div>

            </div>
            </div>
        </div>`);const c=k("admin-order-modal"),p=k("admin-order-modal-box"),d=k("admin-order-modal-content");d&&(d.scrollTop=0,d.style.transform="",d.style.transition=""),c&&c.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("adminOrder"),ne(c,p)},ns=async(t,e,a=null)=>{const s=(typeof window.normalizeWA=="function"?window.normalizeWA:o=>String(o||"").replace(/\D/g,"").replace(/^0/,"62"))(e);if(!s||s.length<10)return x("Nomor WA tidak valid!");L("Menyimpan...");try{const o=P.collection("freshmart").doc("cms_data").collection("customers").doc(s),l=await o.get();if(l.exists){x(`Nomor ini sudah terdaftar atas nama: ${l.data().name}`),D();return}if(await o.set({id:parseInt(s,10),name:t||"-",phone:s,points:0,registeredAt:Date.now()}),a){await P.collection("freshmart_orders").doc(a).update({customerType:"Member"});const n=B.findIndex(c=>c.orderId===a);n!==-1&&(B[n].customerType="Member")}x("Pelanggan berhasil didaftarkan sebagai Member!"),a&&typeof window.openOrderDetail=="function"&&setTimeout(()=>window.openOrderDetail(a),400)}catch(o){console.error("Gagal simpan pelanggan:",o),x("Gagal menyimpan data pelanggan: "+(o.message||""))}finally{D()}},ds=async(t,e)=>{if(e==="waiting_stock"&&typeof window.customPrompt=="function"){window.customPrompt("Catatan untuk pelanggan:","Stok hadiah kosong, akan kami kirim susulan begitu stok tersedia kembali.",async r=>{if(r!==null){L("Menyimpan...");try{await P.collection("freshmart_orders").doc(t).update({"claimedReward.status":e,"claimedReward.note":r||""}),x("Status klaim hadiah diperbarui!");let s=B.findIndex(o=>o.orderId===t);s!==-1&&(B[s].claimedReward||(B[s].claimedReward={}),B[s].claimedReward.status=e,B[s].claimedReward.note=r||""),typeof window.openCustomerOrderDetail=="function"&&window.openCustomerOrderDetail(t)}catch(s){x("Gagal update klaim: "+s.message)}finally{D()}}});return}let a="";L("Menyimpan...");try{await P.collection("freshmart_orders").doc(t).update({"claimedReward.status":e,"claimedReward.note":a});const r=B.find(s=>s.orderId===t);r&&(r.claimedReward.status=e,r.claimedReward.note=a,Mt(t)),x("Status hadiah diperbarui!")}catch(r){console.error("Gagal update status hadiah:",r),x("Gagal update status hadiah: "+(r.message||""))}finally{D()}},ca=(t=!1)=>{const e=k("admin-order-modal"),a=k("admin-order-modal-box"),r=()=>{Z(e,a)};typeof window.requestCloseModal=="function"?window.requestCloseModal("adminOrder",t,r):r()},pa=async(t,e=null)=>{try{let a=e;if(!a){const l=await P.collection("freshmart_orders").doc(t).get();if(!l.exists)return;a=l.data()}if(!a)return;if((i.store?.useStock===!0||i.store?.useStock==="true")&&!a.isStockRestocked&&Array.isArray(a.items)&&a.items.length>0){for(const l of a.items){const n=l.id!=null?String(l.id):null,c=parseFloat(l.qty)||0;if(!(!n||c<=0))try{const p=P.collection("freshmart").doc("cms_data").collection("products").doc(n),d=await p.get();if(d.exists){const b=d.data();let u=(parseFloat(b.stock)||0)+c,f={stock:u};if(l.variantName&&Array.isArray(b.variants)){const v=b.variants.findIndex(h=>h.name===l.variantName);v!==-1&&(b.variants[v].stock=(parseFloat(b.variants[v].stock)||0)+c,b.variants[v].stock>0&&(b.variants[v].isActive=!0),f.variants=b.variants)}if(await p.update(f),Array.isArray(i.products)){const v=i.products.find(h=>String(h.id)===n);v&&(v.stock=u,f.variants&&(v.variants=f.variants))}}}catch(p){console.warn(`[Auto-Restock] Gagal restock produk ${n}:`,p)}}a.isStockRestocked=!0}const s=a.customerPhone||a.customer?.wa;if(!a.isPointsRolledBack&&s){try{const l=P.collection("freshmart").doc("cms_data").collection("customers").doc(s),n=await l.get();if(n.exists){const c=n.data();let p=parseFloat(c.points)||0;const d=parseFloat(a.pointsEarned)||0;if(d>0&&(p=Math.max(0,p-d)),a.claimedReward&&a.claimedReward.id){const b=parseFloat(a.claimedReward.pointsCost)||0;b>0&&(p+=b);try{const u=P.collection("freshmart").doc("cms_data").collection("rewards").doc(String(a.claimedReward.id)),f=await u.get();if(f.exists){const v=f.data(),h=(parseFloat(v.stock)||0)+1;if(await u.update({stock:h}),Array.isArray(i.rewards)){const y=i.rewards.find(T=>String(T.id)===String(a.claimedReward.id));y&&(y.stock=h)}}}catch(u){console.warn("[Auto-Restock] Gagal restock hadiah:",u)}a.claimedReward.status="cancelled"}if(await l.update({points:p}),Array.isArray(i.customers)){const b=i.customers.find(u=>String(u.phone)===s||String(u.id)===s);b&&(b.points=p)}}}catch(l){console.warn("[Auto-Restock] Gagal rollback poin member:",l)}a.isPointsRolledBack=!0}const o=!!(a.payment?.isPaylater||a.isPaylater||a.payment?.subMethod==="paylater");if(!a.isPaylaterRolledBack&&o&&s){const l=a.paylaterLimitTracked!==!1;try{const n=(parseFloat(a.payment?.paylaterUsed)||0)>0?_r(a.payment):parseFloat(a.paylaterUsed||a.payment?.tempoBalance)||0;if(n>0&&l){const c=s.replace(/\D/g,""),p=c.startsWith("0")?"62"+c.slice(1):c,d=P.collection("freshmart").doc("cms_data").collection("customers").doc(p);if(await P.runTransaction(async b=>{const u=await b.get(d),f=Math.max(0,parseFloat(u.exists&&u.data().paylaterUsed||0)),v=Math.max(0,f-n);u.exists?b.update(d,{paylaterUsed:v}):b.set(d,{paylaterUsed:0},{merge:!0})}),Array.isArray(i.customers)){const b=i.customers.find(u=>u&&(String(u.phone).replace(/\D/g,"")===c||String(u.id)===p));b&&(b.paylaterUsed=Math.max(0,Math.max(0,parseFloat(b.paylaterUsed)||0)-n))}}else n>0&&!l&&console.info("[PayLater Rollback] Dilewati: pesanan ini tidak berhasil update Firestore saat checkout (paylaterLimitTracked=false). Tidak ada rollback diperlukan.")}catch(n){console.warn("[Auto-Restock] Gagal rollback limit PayLater:",n)}a.isPaylaterRolledBack=!0}if(await P.collection("freshmart_orders").doc(t).update({isStockRestocked:a.isStockRestocked||!1,isPointsRolledBack:a.isPointsRolledBack||!1,isPaylaterRolledBack:a.isPaylaterRolledBack||!1,...a.claimedReward?{claimedReward:a.claimedReward}:{}}).catch(()=>{}),Array.isArray(B)){const l=B.findIndex(n=>n.orderId===t);l!==-1&&(B[l].isStockRestocked=a.isStockRestocked,B[l].isPointsRolledBack=a.isPointsRolledBack,a.claimedReward&&(B[l].claimedReward=a.claimedReward))}}catch(a){console.error("[Auto-Restock] Gagal proses pemulihan stok/poin:",a)}},cs=async(t,e=null)=>{try{let a=e;if(!a){const l=await P.collection("freshmart_orders").doc(t).get();if(!l.exists)return;a=l.data()}if(!a)return;if((i.store?.useStock===!0||i.store?.useStock==="true")&&a.isStockRestocked&&Array.isArray(a.items)&&a.items.length>0){for(const l of a.items){const n=l.id!=null?String(l.id):null,c=parseFloat(l.qty)||0;if(!(!n||c<=0))try{const p=P.collection("freshmart").doc("cms_data").collection("products").doc(n),d=await p.get();if(d.exists){const b=d.data();let u=Math.max(0,(parseFloat(b.stock)||0)-c),f={stock:u};if(l.variantName&&Array.isArray(b.variants)){const v=b.variants.findIndex(h=>h.name===l.variantName);v!==-1&&(b.variants[v].stock=Math.max(0,(parseFloat(b.variants[v].stock)||0)-c),b.variants[v].stock<=0&&(b.variants[v].isActive=!1),f.variants=b.variants)}if(await p.update(f),Array.isArray(i.products)){const v=i.products.find(h=>String(h.id)===n);v&&(v.stock=u,f.variants&&(v.variants=f.variants))}}}catch(p){console.warn(`[Auto-Deduct] Gagal potong stok produk ${n}:`,p)}}a.isStockRestocked=!1}const s=a.customerPhone||a.customer?.wa;if(a.isPointsRolledBack&&s){try{const l=P.collection("freshmart").doc("cms_data").collection("customers").doc(s),n=await l.get();if(n.exists){const c=n.data();let p=parseFloat(c.points)||0;const d=parseFloat(a.pointsEarned)||0;if(d>0&&(p+=d),a.claimedReward&&a.claimedReward.id){const b=parseFloat(a.claimedReward.pointsCost)||0;b>0&&(p=Math.max(0,p-b));try{const u=P.collection("freshmart").doc("cms_data").collection("rewards").doc(String(a.claimedReward.id)),f=await u.get();if(f.exists){const v=f.data(),h=Math.max(0,(parseFloat(v.stock)||0)-1);if(await u.update({stock:h}),Array.isArray(i.rewards)){const y=i.rewards.find(T=>String(T.id)===String(a.claimedReward.id));y&&(y.stock=h)}}}catch(u){console.warn("[Auto-Deduct] Gagal potong stok hadiah:",u)}a.claimedReward.status="pending"}if(await l.update({points:p}),Array.isArray(i.customers)){const b=i.customers.find(u=>String(u.phone)===s||String(u.id)===s);b&&(b.points=p)}}}catch(l){console.warn("[Auto-Deduct] Gagal alokasi ulang poin member:",l)}a.isPointsRolledBack=!1}const o=!!(a.payment?.isPaylater||a.isPaylater||a.payment?.subMethod==="paylater");if(a.isPaylaterRolledBack&&o&&s){try{const l=parseFloat(a.payment?.paylaterUsed||a.paylaterUsed||a.payment?.tempoBalance)||0;if(l>0){const n=s.replace(/\D/g,""),c=n.startsWith("0")?"62"+n.slice(1):n,p=P.collection("freshmart").doc("cms_data").collection("customers").doc(c);if(await P.runTransaction(async d=>{const b=await d.get(p);if(b.exists){const u=Math.max(0,parseFloat(b.data().paylaterUsed)||0);d.update(p,{paylaterUsed:u+l})}}),Array.isArray(i.customers)){const d=i.customers.find(b=>b&&(String(b.phone).replace(/\D/g,"")===n||String(b.id)===c));d&&(d.paylaterUsed=Math.max(0,parseFloat(d.paylaterUsed)||0)+l)}}}catch(l){console.warn("[Auto-Deduct] Gagal re-apply limit PayLater:",l)}a.isPaylaterRolledBack=!1}if(await P.collection("freshmart_orders").doc(t).update({isStockRestocked:!1,isPointsRolledBack:!1,isPaylaterRolledBack:!1,...a.claimedReward?{claimedReward:a.claimedReward}:{}}).catch(()=>{}),Array.isArray(B)){const l=B.findIndex(n=>n.orderId===t);l!==-1&&(B[l].isStockRestocked=!1,B[l].isPointsRolledBack=!1,a.claimedReward&&(B[l].claimedReward=a.claimedReward))}}catch(a){console.error("[Auto-Deduct] Gagal proses deduksi stok/poin:",a)}},ps=async(t,e)=>{if(!$t){Ie(!0),L("Update...");try{let a=B.find(s=>s.orderId===t);const r=a?a.status:null;await P.collection("freshmart_orders").doc(t).update({status:e}),a&&(a.status=e),e==="Dibatalkan"&&r!=="Dibatalkan"?(await pa(t,a),x("Pesanan dibatalkan & stok dikembalikan ke toko!","info")):r==="Dibatalkan"&&e!=="Dibatalkan"?(await cs(t,a),x("Pesanan diaktifkan kembali & stok dipotong!","info")):x("Status berhasil diperbarui!"),Mt(t)}catch{x("Gagal!")}finally{Ie(!1),D()}}},ms=async t=>{if(!t)return x("ID pesanan tidak valid!");let e=B.find(S=>S.orderId===t);if(!e){L("Memuat data...");try{const S=await P.collection("freshmart_orders").doc(t).get();if(D(),!S.exists)return x("Data pesanan tidak ditemukan!");e=S.data()}catch{D(),x("Gagal memuat data pesanan!");return}}const a=e.customer&&e.customer.wa;if(!a)return x("Nomor WhatsApp pelanggan tidak tersedia!");const r=i&&i.store&&i.store.name?i.store.name:"Toko Putri",s=i&&i.store&&i.store.phone?i.store.phone:"",o=e.customer&&e.customer.name?e.customer.name:"Pelanggan",l=e.status||"Baru",n=e.payment&&e.payment.grandTotal?g(e.payment.grandTotal):"-",c=(t||"").split("-").pop(),p=e.payment&&e.payment.method?e.payment.method:"",d=!!(e.payment?.isPaylater||e.payment?.subMethod==="paylater"),b=p==="transfer"?"Transfer Bank":p==="qris"?"QRIS":p==="cod"?"COD (Bayar di Tempat)":p==="tempo"&&d?"Putri PayLater":p==="tempo"?"Penjualan Tempo":p==="cashier"||p==="cash"?"Tunai":p.toUpperCase(),u=e.source==="pos"||e.channel==="pos",v=e.customer?.deliveryMethod==="delivery",y=(e.items||[]).slice(0,3).map(S=>`  • ${S.name}${S.variantName?` (${S.variantName})`:""} x${parseFloat(S.qty)}`).join(`
`),T=(e.items||[]).length>3?`  ...dan ${(e.items||[]).length-3} item lainnya`:"",M=y+(T?`
`+T:"");let C="";u||(e.isDropPoint&&e.dropPoint?C=`
📍 *Dikirim ke Lokasi:*
👤 Penerima: *${e.dropPoint.name||"-"}*
🏠 Alamat Tujuan: ${e.dropPoint.address||"-"}
`:v&&e.customer?.address?C=`
🚚 *Alamat Pengiriman:*
${e.customer.address}
`:v||(C=`
🏪 *Metode:* Ambil di Toko
`));let A="";l==="Baru"?A=`Halo Bapak/Ibu *${o}*,

Terima kasih telah mempercayakan kebutuhan material & perlengkapan bangunan Anda kepada *${r}*.

📋 *KONFIRMASI PESANAN MATERIAL*
• No. Referensi : *#${c}*
• Total Transaksi : *${n}*
• Metode Bayar : *${b}*

📦 *Rincian Barang:*
${M}
`+C+`
Saat ini pesanan Anda telah masuk ke sistem kami dan sedang diverifikasi oleh admin operasional.`+(s?`

Untuk pertanyaan teknis, perubahan jadwal kirim, atau permintaan faktur/nota resmi, silakan hubungi kami melalui nomor ini. Terima kasih atas kerja sama Anda.`:`

Terima kasih.`):l==="Diproses"?A=`Halo Bapak/Ibu *${o}*,

Pemberitahuan pemrosesan pesanan material dari *${r}*:

📋 *STATUS PESANAN: SEDANG DISIAPKAN*
• No. Referensi : *#${c}*
• Total Tagihan : *${n}*

📦 *Daftar Material:*
${M}
`+C+(v&&!e.isDropPoint?`
Tim logistik kami sedang menyiapkan & memuat barang ke armada. Material akan segera dikirimkan ke alamat Anda. Mohon pastikan akses jalan dan ruang bongkar muat tersedia.`:e.isDropPoint?`
Material sedang disiapkan untuk pengiriman langsung ke lokasi proyek / penerima tujuan. Armada kami akan berkoordinasi saat proses bongkar muat.`:`
Material pesanan Anda sedang disiapkan di counter pick-up toko dan dapat diambil setelah konfirmasi kesiapan barang ini diterima.`)+`

Terima kasih atas kepercayaan dan kerja sama Anda bersama *${r}*.`:l==="Selesai"?A=`Halo Bapak/Ibu *${o}*,

📋 *SURAT JALAN & TRANSAKSI SELESAI*

Pesanan material *#${c}* dari *${r}* telah berhasil diserahterimakan dan diselesaikan.

• No. Referensi : *#${c}*
• Total Transaksi : *${n}*
• Metode Bayar : *${b}*

Seluruh barang telah diterima dengan baik. Terima kasih telah mempercayakan suplai material & alat teknik proyek Anda kepada *${r}*. Kami senantiasa siap mendukung proyek dan kebutuhan konstruksi Anda berikutnya.`:l==="Dibatalkan"?A=`Halo Bapak/Ibu *${o}*,

📋 *PEMBERITAHUAN PEMBATALAN PESANAN*

Kami menginformasikan bahwa pesanan material *#${c}* pada *${r}* telah dibatalkan dari sistem.

• No. Referensi : *#${c}*
• Nilai Transaksi : *${n}*

Apabila pembatalan ini memerlukan klarifikasi lebih lanjut atau Anda ingin melakukan pemesanan ulang / konsultasi spesifikasi material lain, silakan hubungi tim layanan pelanggan kami.

Terima kasih atas perhatian dan kerja sama Anda.`:A=`Halo Bapak/Ibu *${o}*,

Update status pesanan material *#${c}* dari *${r}*:

📦 Status Terkini : *${l}*
💰 Total Tagihan : *${n}*

Terima kasih atas kerja sama Anda bersama ${r}.`,typeof window.openWhatsApp=="function"?window.openWhatsApp(a,A):window.open(`https://wa.me/${a}?text=${encodeURIComponent(A)}`,"_blank","noopener,noreferrer")},bs=async t=>{if(!t)return x("ID pesanan tidak valid!");L("Memuat data...");try{const e=await P.collection("freshmart_orders").doc(t).get();if(D(),!e.exists)return x("Data pesanan tidak ditemukan!");const a=e.data(),r=a.dropPoint&&a.dropPoint.wa;if(!r)return x("Nomor WhatsApp penerima tujuan tidak tersedia!");const s=i&&i.store&&i.store.name?i.store.name:"Toko Putri",o=a.dropPoint&&a.dropPoint.name?a.dropPoint.name:"Penerima",l=a.customer&&a.customer.name?a.customer.name:"Pemesan",n=a.dropPoint&&a.dropPoint.address?a.dropPoint.address:"-",c=a.status||"Diproses",p=`Halo Bapak/Ibu *${o}*,

Kami dari tim logistik *${s}* menginformasikan jadwal pengiriman material proyek atas pesanan dari *${l}*:

📋 *DETAIL PENGIRIMAN LOGISTIK*
• No. Surat Jalan / Pesanan : *#${t.split("-").pop()}*
• Lokasi Proyek / Tujuan : ${n}
• Status Pengiriman : *${c}*

Armada kami akan mengantarkan material ke titik bongkar muat yang ditentukan. Mohon pastikan perwakilan proyek / mandor berada di lokasi saat armada tiba. Terima kasih atas kerja sama Anda.`;typeof window.openWhatsApp=="function"?window.openWhatsApp(r,p):window.open(`https://wa.me/${r}?text=${encodeURIComponent(p)}`,"_blank","noopener,noreferrer")}catch{D(),x("Gagal memuat data pesanan!")}},us=t=>{ue("Hapus Pesanan","Apakah Anda yakin ingin menghapus data pesanan ini secara permanen? Jika pesanan belum dibatalkan, alokasi stok material akan otomatis dipulihkan ke inventori toko.",async()=>{if(!$t){Ie(!0),L("Menghapus...");try{let e=B.find(a=>a.orderId===t);(!e||e.status!=="Dibatalkan")&&await pa(t,e),await P.collection("freshmart_orders").doc(t).delete(),x("Pesanan berhasil dihapus dan inventori stok telah dipulihkan."),Mr===t&&ca()}catch{x("Gagal!")}finally{Ie(!1),D()}}})};window.exportOrdersToExcel=rs;window.setOrderSourceFilter=ls;window.rAdmOrd=is;window.openOrderDetail=Mt;window.saveOrderCustomerToDB=ns;window.ackRewardClaim=ds;window.closeOrderDetailModal=ca;window.updateOrderStatus=ps;window.konfirmasiKeWA=ms;window.konfirmasiKeWAPenerima=bs;window.deleteOrder=us;const ma=()=>{let t=`
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
                    <i class="fa-solid fa-palette"></i> ${m(i.store.uiTheme||"gold")}
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
        ${Ur()}
    </div>
    `;R("admin-content",t)},xs=t=>{const e=gt[t][500],a=document.getElementById("set-ui-theme"),r=document.getElementById("set-theme-color"),s=document.getElementById("set-theme-color-picker");a&&(a.value=t),r&&(r.value=e),s&&(s.value=e),document.querySelectorAll(".preset-color-chip").forEach(n=>{n.classList.remove("ring-4","ring-offset-2","ring-slate-400","dark:ring-slate-500","scale-110"),n.querySelector(".check-icon")?.classList.add("hidden")});const o=document.getElementById(`preset-chip-${t}`);o&&(o.classList.add("ring-4","ring-offset-2","ring-slate-400","dark:ring-slate-500","scale-110"),o.querySelector(".check-icon")?.classList.remove("hidden"));const l=document.getElementById("custom-color-chip");if(l){l.style.background="";const n=l.querySelector("i");n&&(n.style.color="")}Ja(t,e)},fs=t=>{let e=t;e==="dual_tone"&&(e="aurora_glow"),e==="geometric_3d"&&(e="tech_grid"),(e==="diagonal_skew"||e==="glass_studio")&&(e="minimalist");const a=document.getElementById("set-bg-style");a&&(a.value=e);const r=document.getElementById("set-bg-custom-url")?.value||"";document.querySelectorAll(".bg-mockup-card").forEach(o=>{o.classList.remove("active","border-[var(--color-primary)]","shadow-md","ring-2","ring-[var(--color-primary)]/20"),o.classList.add("border-slate-200","dark:border-slate-700/80");const l=o.querySelector(".active-check-badge");l&&l.classList.add("hidden")});const s=document.getElementById(`bg-opt-${e}`);if(s){s.classList.add("active","border-[var(--color-primary)]","shadow-md","ring-2","ring-[var(--color-primary)]/20"),s.classList.remove("border-slate-200","dark:border-slate-700/80");const o=s.querySelector(".active-check-badge");o&&o.classList.remove("hidden")}Qa(e,r)},gs=t=>{let e,a,r,s;if(t==="profile"){e="Profil Toko & Tampilan Visual",a="Kelola identitas utama toko, palet warna tema, model layout background, dan informasi legal",r="fa-store";const l=i.store.uiTheme||"emerald";let n=i.store.bgStyle||localStorage.getItem("freshmart_bg_style")||"minimalist";n==="dual_tone"&&(n="aurora_glow"),n==="geometric_3d"&&(n="tech_grid"),(n==="diagonal_skew"||n==="glass_studio")&&(n="minimalist");const c={gold:"Putri Gold",burgundy:"Burgundy",industrial:"Industrial CAT",emerald:"Emerald",teal:"Teal",lime:"Lime",cyan:"Cyan",sky:"Sky",blue:"Blue",indigo:"Indigo",violet:"Violet",purple:"Purple",fuchsia:"Fuchsia",pink:"Pink",rose:"Rose",red:"Red",orange:"Orange",amber:"Amber",yellow:"Yellow",green:"Green",slate:"Slate",stone:"Stone"},p=Object.keys(gt).map(d=>{const b=gt[d][500],u=c[d]||d,f=l===d;return`
                <button type="button" id="preset-chip-${d}" onclick="selectPresetTheme('${d}')" 
                        class="preset-color-chip w-10 h-10 rounded-full cursor-pointer transition-all duration-200 relative flex items-center justify-center shadow-sm hover:scale-105 ${f?"ring-4 ring-offset-2 ring-slate-400 dark:ring-slate-500 scale-110":""}" 
                        style="background-color: ${b}; border: 1.5px solid rgba(0,0,0,0.08)" 
                        title="${u}">
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
                        <input autocomplete='off' id="set-name" value="${m(i.store.name)}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Contoh: Toko Putri">
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Slogan Toko</label>
                        <input autocomplete='off' id="set-slogan" value="${m(i.store.slogan)}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Contoh: Belanja Hemat & Segar Setiap Hari">
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Logo Toko (Ikon Aplikasi PWA)</label>
                        <div class="flex gap-2">
                            <input autocomplete='off' id="set-logo" value="${m(i.store.logo)}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm flex-1 text-xs" placeholder="URL Logo atau klik upload">
                            <label class="bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 rounded-xl px-4 flex items-center justify-center cursor-pointer transition-all shrink-0 active:scale-95 shadow-sm font-bold text-xs">
                                <i class="fa-solid fa-cloud-arrow-up mr-1.5"></i> Upload
                                <input type="file" accept="image/*" class="hidden" onchange="handleImageUpload(this, 'set-logo')">
                            </label>
                        </div>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Email Resmi Toko</label>
                        <input autocomplete='off' id="set-email" value="${m(i.store.email||"")}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="admin@tokoputri.com">
                    </div>
                </div>

                <div>
                    <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Deskripsi Lengkap Toko</label>
                    <textarea id="set-description" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" rows="2" placeholder="Deskripsi profil toko yang tampil pada profil pelanggan dan informasi footer...">${m(i.store.description)}</textarea>
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
                <input type="hidden" id="set-theme-color" value="${m(i.store.themeColor||"#10b981")}">
                <div class="flex flex-wrap gap-3 pt-1">
                    ${p}
                    <div class="relative" title="Warna Kustom (Klik untuk pilih warna bebas)">
                        <label for="set-theme-color-picker" class="w-10 h-10 rounded-full cursor-pointer transition-all duration-200 relative flex items-center justify-center shadow-sm hover:scale-105 border-2 border-dashed border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 hover:border-[var(--color-primary)]" id="custom-color-chip">
                            <i class="fa-solid fa-pen text-slate-500 dark:text-slate-400 text-[11px]"></i>
                        </label>
                        <input type="color" id="set-theme-color-picker" value="${m(i.store.themeColor||"#10b981")}" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer rounded-full"
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
                        <input autocomplete="off" id="set-bg-custom-url" value="${m(i.store.bgCustomUrl||"")}"
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
                            <option value="true" ${i.store.showHeroSlide!==!1&&i.store.showHeroSlide!=="false"?"selected":""}>Ya, Tampilkan Slide Hero Sambutan (Default)</option>
                            <option value="false" ${i.store.showHeroSlide===!1||i.store.showHeroSlide==="false"?"selected":""}>Sembunyikan (Hanya Tampilkan Banner Promosi Produk)</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Teks Badge Status (Di Bawah Foto)</label>
                        <input autocomplete="off" id="set-hero-badge-text" value="${m(i.store.heroBadgeText||"Siap Melayani")}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Contoh: Siap Melayani">
                    </div>
                </div>

                <div>
                    <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Foto / Animasi Maskot (JPG · PNG · GIF Bergerak <i class="fa-solid fa-wand-magic-sparkles text-amber-500 ml-1"></i>)</label>
                    <div class="flex gap-2">
                        <input autocomplete="off" id="set-hero-mascot-img" value="${m(i.store.heroMascotImg||"")}"
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
                            ${i.store.logo?`
                            <button type="button" onclick="const l='${m(i.store.logo)}'; document.getElementById('set-hero-mascot-img').value=l; const p=document.getElementById('card-preview-mascot'); if(p) p.src=l; showToast('Logo toko dipilih');" class="text-[10px] font-bold px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-all active:scale-95 cursor-pointer">
                                <i class="fa-solid fa-store mr-1"></i> Pakai Logo Toko
                            </button>`:""}
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="text-[10px] font-bold text-slate-400">Preview:</span>
                            <div class="w-16 h-16 rounded-xl overflow-hidden border-2 border-dashed border-slate-300 dark:border-slate-600 bg-black/10 shadow-sm shrink-0">
                                <img id="card-preview-mascot" src="${m(i.store.heroMascotImg||"/putri_mascot_anim.gif")}" class="w-full h-full object-contain" onerror="this.src='/putri_mascot_3d.jpg';" style="image-rendering: auto;">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Tag Sambutan</label>
                        <input autocomplete="off" id="set-hero-welcome-tag" value="${m(i.store.heroWelcomeTag||"SELAMAT DATANG")}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Contoh: SELAMAT DATANG">
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Judul Sambutan Banner</label>
                        <input autocomplete="off" id="set-hero-title" value="${m(i.store.heroTitle||i.store.name||"")}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Contoh: PUTRI UTAMA TEKNIK (Kosong = Nama Toko)">
                    </div>
                </div>

                <div>
                    <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Slogan / Deskripsi Sambutan Banner</label>
                    <textarea id="set-hero-subtitle" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" rows="2" placeholder="Deskripsi sambutan yang tampil di kartu banner utama...">${m(i.store.heroSubtitle||i.store.slogan||"")}</textarea>
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
                        <input autocomplete='off' id="set-hours" value="${m(i.store.operationalHours||"")}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Contoh: Senin - Minggu (08:00 - 21:00 WIB)">
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Teks Hak Cipta Footer</label>
                        <input autocomplete='off' id="set-credit" value="${m(i.store.footerCredit||"")}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Contoh: Toko Putri © 2026. All Rights Reserved.">
                    </div>
                </div>

                <div>
                    <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Tampilkan Katalog Tukar Hadiah di Beranda</label>
                    <select id="set-show-reward-catalog" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                        <option value="true" ${i.store.showRewardCatalog!==!1?"selected":""}>Ya, Tampilkan Katalog Hadiah</option>
                        <option value="false" ${i.store.showRewardCatalog===!1?"selected":""}>Sembunyikan</option>
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
                            <option value="grid" ${i.store.categoryStyle==="grid"?"selected":""}>Grid Ikon (Kotak berjejer)</option>
                            <option value="pill" ${i.store.categoryStyle==="pill"||i.store.categoryStyle==="text"||!i.store.categoryStyle?"selected":""}>Pill Horizontal Scroll (Kapsul geser)</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Tampilkan Slider Kategori di Beranda</label>
                        <select id="set-show-categories" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                            <option value="true" ${i.store.showCategories!==!1?"selected":""}>Tampilkan Slider Kategori</option>
                            <option value="false" ${i.store.showCategories===!1?"selected":""}>Sembunyikan</option>
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
                            <option value="logo" ${i.store.brandStyle==="logo"||i.store.brandStyle==="image"||!i.store.brandStyle?"selected":""}>Logo Kotak (Grid Visual)</option>
                            <option value="pill" ${i.store.brandStyle==="pill"||i.store.brandStyle==="text"?"selected":""}>Pill Horizontal Scroll (Kapsul teks)</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Tampilkan Slider Merek di Beranda</label>
                        <select id="set-show-brands" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                            <option value="true" ${i.store.showBrands!==!1?"selected":""}>Tampilkan Slider Merek</option>
                            <option value="false" ${i.store.showBrands===!1?"selected":""}>Sembunyikan</option>
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
                        <option value="true" ${i.store.showScrollTopButton!==!1?"selected":""}>Aktif (Hanya tampil di etalase belanja &amp; riwayat belanja pelanggan)</option>
                        <option value="false" ${i.store.showScrollTopButton===!1?"selected":""}>Nonaktifkan Seluruhnya</option>
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
                        <input autocomplete='off' id="set-wa" value="${m(i.store.wa||"")}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Contoh: 08123456789">
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Ongkir per Kilometer (Rp)</label>
                        <input autocomplete='off' type="number" id="set-cost" value="${m(i.store.costPerKm||0)}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Contoh: 2000">
                    </div>
                </div>

                <div>
                    <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Alamat Lengkap Toko</label>
                    <textarea id="set-address" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" rows="2" placeholder="Nama jalan, nomor bangunan, RT/RW, kelurahan, kecamatan, kota/kabupaten...">${m(i.store.address||"")}</textarea>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Opsi Kirim ke Alamat (Kurir Toko)</label>
                        <select id="set-delivery-enabled" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                            <option value="true" ${i.store.isDeliveryEnabled!==!1?"selected":""}>Aktif (Bisa diantar kurir)</option>
                            <option value="false" ${i.store.isDeliveryEnabled===!1?"selected":""}>Nonaktif (Hanya ambil di toko)</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Opsi Ambil di Toko (Self Pickup)</label>
                        <select id="set-pickup-enabled" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                            <option value="true" ${i.store.isPickupEnabled!==!1?"selected":""}>Aktif (Bisa ambil di kasir)</option>
                            <option value="false" ${i.store.isPickupEnabled===!1?"selected":""}>Nonaktif</option>
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
                            <option value="true" ${i.store.freeShippingMinSpendEnabled===!0||i.store.freeShippingMinSpendEnabled==="true"?"selected":""}>Aktif (Bebas ongkir otomatis)</option>
                            <option value="false" ${i.store.freeShippingMinSpendEnabled!==!0&&i.store.freeShippingMinSpendEnabled!=="true"?"selected":""}>Nonaktif</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">Minimal Belanja (Rp)</label>
                        <input autocomplete='off' type="number" id="set-free-shipping-amount" value="${m(i.store.freeShippingMinSpendAmount||0)}" min="0" step="1000" placeholder="Contoh: 1000000" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
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
                            value="${m(i.store.lat&&i.store.lng?`${i.store.lat}, ${i.store.lng}`:"-7.82308507053985, 112.0988374794464")}"
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
                        <input autocomplete='off' id="set-lat" value="${m(i.store.lat||"-7.82308507053985")}" class="admin-input !py-2.5 bg-white dark:bg-slate-900 shadow-sm text-xs font-mono w-full" placeholder="-7.82308507053985" oninput="handleManualCoordChange()">
                    </div>
                    <div>
                        <label class="block text-[10px] font-bold text-slate-600 dark:text-slate-400 mb-1 uppercase tracking-wider">Longitude Toko (Garis Bujur)</label>
                        <input autocomplete='off' id="set-lng" value="${m(i.store.lng||"112.0988374794464")}" class="admin-input !py-2.5 bg-white dark:bg-slate-900 shadow-sm text-xs font-mono w-full" placeholder="112.0988374794464" oninput="handleManualCoordChange()">
                    </div>
                </div>
            </div>
        `;else if(t==="payment"){e="Metode Pembayaran (QRIS & Putri PayLater)",a="Konfigurasi penerimaan digital QRIS dan pengaturan cicilan Putri PayLater 30 hari hingga 3 bulan transparan",r="fa-wallet";const l=Kr(),n=window.currentPaymentSubtab||"paylater";s=`
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
                        <input id="set-paylater-notice-text" value="${m(l.noticeText)}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Contoh: Cicilan transparan tanpa biaya tersembunyi. Tagihan jatuh tempo setiap bulan.">
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
                            <input autocomplete='off' id="set-qris-url" value="${m(i.payment?.qrisUrl||"")}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm flex-1 text-xs" placeholder="URL file gambar QRIS atau klik tombol upload di kanan">
                            <label class="text-white rounded-xl px-4 flex items-center justify-center cursor-pointer transition-all shrink-0 active:scale-95 shadow-sm font-bold text-xs hover:opacity-90" style="background: var(--color-primary)">
                                <i class="fa-solid fa-cloud-arrow-up mr-1.5"></i> Upload QRIS
                                <input type="file" accept="image/*" class="hidden" onchange="handleImageUpload(this, 'set-qris-url')">
                            </label>
                        </div>
                    </div>

                    <!-- PREVIEW BOX QRIS -->
                    ${i.payment?.qrisUrl?`
                        <div class="p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl flex flex-col sm:flex-row items-center gap-4 shadow-sm">
                            <div class="p-2 bg-white rounded-xl border border-slate-200 dark:border-slate-600 shadow-inner">
                                <img src="${m(i.payment.qrisUrl)}" alt="Preview QRIS" class="w-28 h-28 object-contain rounded-lg">
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
                    <input autocomplete='off' id="set-gas-url" value="${m(i.config?.gasUrl||"")}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full font-mono text-xs" placeholder="https://script.google.com/macros/s/.../exec">
                    <p class="text-[10px] text-slate-500 dark:text-slate-400 mt-1.5 font-medium">Tempel URL hasil deploy Web App dari Google Apps Script project toko Anda.</p>
                </div>

                <div class="p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl space-y-2">
                    <div class="flex items-center gap-2">
                        <span class="w-2 h-2 rounded-full ${i.config?.gasUrl?"bg-emerald-500":"bg-amber-500"} animate-pulse"></span>
                        <span class="text-xs font-bold text-slate-700 dark:text-slate-200">
                            ${i.config?.gasUrl?"Integrasi Cloud Storage Aktif":"Endpoint Belum Dikonfigurasi"}
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
                        <option value="true" ${i.store.useStock===!0?"selected":""}>Aktif — Otomatis tandai HABIS jika stok 0 (Pelanggan tidak bisa checkout)</option>
                        <option value="false" ${i.store.useStock!==!0?"selected":""}>Nonaktif — Stok tak terbatas (Cocok untuk barang pre-order / tanpa pembatasan stok)</option>
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
                ${(()=>{const l=i.store.ppnRate!==void 0&&i.store.ppnRate!==null&&!isNaN(parseFloat(i.store.ppnRate))?parseFloat(i.store.ppnRate):11,n=i.store.ppnShowZero!==!1,c=i.store.ppnTaxLabel||"",p=i.store.taxNpwp||i.taxSettings?.npwp||"";return`
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
                        <div>
                            <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Status Perhitungan PPN</label>
                            <select id="set-ppn-enabled" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                                <option value="true" ${i.store.ppnEnabled===!0?"selected":""}>Aktif (Kalkulasi PPN Dihitung)</option>
                                <option value="false" ${i.store.ppnEnabled!==!0?"selected":""}>Nonaktif (Tanpa Baris PPN)</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Tipe Perhitungan</label>
                            <select id="set-ppn-type" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                                <option value="inclusive" ${i.store.ppnType==="inclusive"?"selected":""}>Inklusif (Pajak dalam harga &bull; Pembeli Rp 0 Tambahan)</option>
                                <option value="exclusive" ${i.store.ppnType!=="inclusive"?"selected":""}>Eksklusif (Pajak ditambah di atas subtotal)</option>
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
                                <option value="true" ${n?"selected":""}>Tetap Tampilkan Baris Pajak (Walau Rp 0)</option>
                                <option value="false" ${n?"":"selected"}>Sembunyikan Baris Pajak jika Rp 0</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Label Pajak di Struk/Invoice</label>
                            <input autocomplete='off' type="text" id="set-ppn-tax-label" value="${m(c)}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Cth: PPN Badan (0%) atau PPN">
                        </div>
                        <div>
                            <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">NPWP Toko / 16-Digit CTAS DJP</label>
                            <input autocomplete='off' type="text" id="set-tax-npwp" value="${m(p)}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs font-mono" placeholder="16 digit format Coretax DJP">
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
                            <option value="true" ${i.store.spendPointsEnabled===!0||i.store.spendPointsEnabled==="true"?"selected":""}>Aktif (Poin Dihitung)</option>
                            <option value="false" ${i.store.spendPointsEnabled!==!0&&i.store.spendPointsEnabled!=="true"?"selected":""}>Nonaktif</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">Minimal Belanja (Kelipatan Rp)</label>
                        <input autocomplete='off' type="number" id="set-spend-points-threshold" value="${m(i.store.spendPointsThreshold||1e5)}" min="1000" step="1000" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="100000">
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">Perolehan Poin per Kelipatan</label>
                        <input autocomplete='off' type="number" id="set-spend-points-per-threshold" value="${m(i.store.spendPointsPerThreshold||1)}" min="1" step="1" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="1">
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
    `;if(R("admin-content",o),t==="profile"){const l=i.store.uiTheme||"",n=i.store.themeColor||"#10b981";(l==="custom"||!gt?.[l])&&setTimeout(()=>{const p=document.getElementById("custom-color-chip");if(p){p.style.background=n;const d=p.querySelector("i");d&&(d.style.color="#fff")}},50)}t==="payment"&&setTimeout(()=>{typeof window.updateAdminPaylaterSim=="function"&&window.updateAdminPaylaterSim()},50)};window.currentPaymentSubtab=window.currentPaymentSubtab||"paylater";const ks=t=>{window.currentPaymentSubtab=t;const e=document.getElementById("payment-subtab-paylater"),a=document.getElementById("payment-subtab-qris"),r=document.getElementById("subtab-btn-paylater"),s=document.getElementById("subtab-btn-qris");e&&e.classList.toggle("hidden",t!=="paylater"),a&&a.classList.toggle("hidden",t!=="qris"),r&&(r.className=`flex-1 py-2.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${t==="paylater"?"bg-white dark:bg-slate-900 text-slate-800 dark:text-white shadow-xs border border-slate-200/60 dark:border-slate-700":"text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"}`),s&&(s.className=`flex-1 py-2.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${t==="qris"?"bg-white dark:bg-slate-900 text-slate-800 dark:text-white shadow-xs border border-slate-200/60 dark:border-slate-700":"text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"}`),t==="paylater"&&setTimeout(()=>{typeof window.updateAdminPaylaterSim=="function"&&window.updateAdminPaylaterSim()},20)};window.switchPaymentSubtab=ks;const hs=()=>{const t=document.getElementById("paylater-admin-sim-container");if(!t)return;const e=document.getElementById("set-paylater-sim-amount"),a=Math.max(1e3,parseFloat(e?.value)||3e5),r={enabled:(document.getElementById("set-paylater-enabled")?.value||"true")==="true",minOrder:Math.max(0,parseFloat(document.getElementById("set-paylater-min-order")?.value)||2e4),maxOrder:1e7,noticeText:document.getElementById("set-paylater-notice-text")?.value||"",tenors:{"30d":{enabled:(document.getElementById("set-paylater-30d-enabled")?.value||"true")==="true",label:"30 Hari (1x Bayar)",shortLabel:"30 Hari",months:1,days:30,adminFeeType:document.getElementById("set-paylater-30d-admin-type")?.value||"flat",adminFeeValue:Math.max(0,parseFloat(document.getElementById("set-paylater-30d-admin-val")?.value)||0),serviceFeeType:document.getElementById("set-paylater-30d-service-type")?.value||"flat",serviceFeeValue:Math.max(0,parseFloat(document.getElementById("set-paylater-30d-service-val")?.value)||0)},"2m":{enabled:(document.getElementById("set-paylater-2m-enabled")?.value||"true")==="true",label:"2 Bulan (Cicilan 2x)",shortLabel:"2 Bulan",months:2,days:60,adminFeeType:document.getElementById("set-paylater-2m-admin-type")?.value||"flat",adminFeeValue:Math.max(0,parseFloat(document.getElementById("set-paylater-2m-admin-val")?.value)||0),serviceFeeType:document.getElementById("set-paylater-2m-service-type")?.value||"percent",serviceFeeValue:Math.max(0,parseFloat(document.getElementById("set-paylater-2m-service-val")?.value)||0)},"3m":{enabled:(document.getElementById("set-paylater-3m-enabled")?.value||"true")==="true",label:"3 Bulan (Cicilan 3x)",shortLabel:"3 Bulan",months:3,days:90,adminFeeType:document.getElementById("set-paylater-3m-admin-type")?.value||"flat",adminFeeValue:Math.max(0,parseFloat(document.getElementById("set-paylater-3m-admin-val")?.value)||0),serviceFeeType:document.getElementById("set-paylater-3m-service-type")?.value||"percent",serviceFeeValue:Math.max(0,parseFloat(document.getElementById("set-paylater-3m-service-val")?.value)||0)}}},o=Hr(a,r).results,l=["30d","2m","3m"];t.innerHTML=l.map(n=>{const c=o[n];if(!c)return"";const p=!c.enabled;return`
            <div class="p-3.5 rounded-2xl border ${p?"border-slate-200 dark:border-slate-700 bg-slate-100/60 dark:bg-slate-800/40 opacity-60":"border-[var(--color-primary)]/40 bg-white dark:bg-slate-900 shadow-2xs"} space-y-2">
                <div class="flex items-center justify-between pb-1.5 border-b border-slate-100 dark:border-slate-800">
                    <span class="text-[11px] font-black uppercase tracking-wider text-slate-800 dark:text-white">${m(c.label)}</span>
                    <span class="text-[8.5px] font-bold px-1.5 py-0.5 rounded ${p?"bg-slate-200 text-slate-500":""}" ${p?"":'style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);"'}>${p?"Nonaktif":"Aktif"}</span>
                </div>
                <div class="space-y-1 text-[11px]">
                    <div class="flex justify-between text-slate-500">
                        <span>Pokok / bln:</span>
                        <span class="font-bold text-slate-700 dark:text-slate-300">${g(c.pokokPerMonth)}</span>
                    </div>
                    <div class="flex justify-between text-slate-500">
                        <span>Biaya Admin:</span>
                        <span class="font-bold ${c.adminFeePerMonth===0?"text-emerald-500":"text-slate-700 dark:text-slate-300"}">${c.adminFeePerMonth===0?"Rp 0":g(c.adminFeePerMonth)}</span>
                    </div>
                    <div class="flex justify-between text-slate-500">
                        <span>Penanganan:</span>
                        <span class="font-bold ${c.serviceFeePerMonth===0?"text-emerald-500":"text-slate-700 dark:text-slate-300"}">${c.serviceFeePerMonth===0?"Rp 0":g(c.serviceFeePerMonth)}</span>
                    </div>
                </div>
                <div class="pt-2 border-t border-dashed border-slate-200 dark:border-slate-700 flex justify-between items-baseline">
                    <span class="text-[10px] font-bold uppercase text-slate-500">Cicilan / bln:</span>
                    <span class="text-sm font-black font-mono" style="color: var(--color-primary);">${g(c.totalPerMonth)}</span>
                </div>
                <div class="text-[9.5px] text-slate-400 text-right">
                    Total: <b>${g(c.grandTotal)}</b>
                </div>
            </div>
        `}).join("")};window.updateAdminPaylaterSim=hs;const vs=async t=>{if(!$t){Ie(!0),L("Menyimpan...");try{if(t==="profile")i.store.name=$("set-name"),i.store.slogan=$("set-slogan"),i.store.logo=he($("set-logo")),i.store.description=$("set-description"),i.store.email=$("set-email"),i.store.showRewardCatalog=$("set-show-reward-catalog")==="true",i.store.operationalHours=$("set-hours"),i.store.footerCredit=$("set-credit"),i.store.showHeroSlide=$("set-show-hero-slide")==="true",i.store.heroMascotImg=he($("set-hero-mascot-img")),i.store.heroBadgeText=$("set-hero-badge-text")||"Siap Melayani",i.store.heroWelcomeTag=$("set-hero-welcome-tag")||"SELAMAT DATANG",i.store.heroTitle=$("set-hero-title"),i.store.heroSubtitle=$("set-hero-subtitle"),i.store.themeColor=$("set-theme-color"),i.store.uiTheme=$("set-ui-theme"),i.store.bgStyle=$("set-bg-style")||"minimalist",i.store.bgCustomUrl=he($("set-bg-custom-url")),localStorage.setItem("freshmart_theme_color",i.store.themeColor),localStorage.setItem("freshmart_ui_theme",i.store.uiTheme),localStorage.setItem("freshmart_bg_style",i.store.bgStyle),localStorage.setItem("freshmart_bg_custom_url",i.store.bgCustomUrl||""),Ja(i.store.uiTheme,i.store.themeColor),Qa(i.store.bgStyle,i.store.bgCustomUrl);else if(t==="catalog")i.store.categoryStyle=$("set-category-style"),i.store.brandStyle=$("set-brand-style"),i.store.showCategories=$("set-show-categories")==="true",i.store.showBrands=$("set-show-brands")==="true",i.store.showScrollTopButton=$("set-show-scroll-top")==="true",i.store.showScrollTopButton===!1&&typeof window.hideFloatingScrollTop=="function"&&window.hideFloatingScrollTop();else if(t==="shipping"){i.store.wa=$("set-wa").replace(/\D/g,""),i.store.address=$("set-address"),i.store.costPerKm=$("set-cost"),i.store.isDeliveryEnabled=$("set-delivery-enabled")==="true",i.store.isPickupEnabled=$("set-pickup-enabled")==="true",i.store.freeShippingMinSpendEnabled=$("set-free-shipping-enabled")==="true",i.store.freeShippingMinSpendAmount=Math.max(0,parseFloat($("set-free-shipping-amount"))||0);let a=($("set-lat")||"").trim(),r=($("set-lng")||"").trim();const s=($("set-maps-smart-input")||"").trim();if(s&&typeof window.parseGeoCoordinates=="function"){const o=window.parseGeoCoordinates(s);o&&(a=o.lat,r=o.lng)}(!a||!r)&&(a="-7.82308507053985",r="112.0988374794464"),i.store.lat=a,i.store.lng=r}else if(t==="payment")i.payment||(i.payment={}),i.payment.qrisUrl=he($("set-qris-url")),i.store.paylater||(i.store.paylater={}),i.store.paylater={enabled:$("set-paylater-enabled")==="true",minOrder:Math.max(0,parseFloat($("set-paylater-min-order"))||2e4),maxOrder:1e7,noticeText:$("set-paylater-notice-text")||"Cicilan transparan tanpa biaya tersembunyi. Tagihan jatuh tempo setiap bulan.",tenors:{"30d":{enabled:$("set-paylater-30d-enabled")==="true",label:"30 Hari (1x Bayar)",shortLabel:"30 Hari",months:1,days:30,adminFeeType:$("set-paylater-30d-admin-type")||"flat",adminFeeValue:Math.max(0,parseFloat($("set-paylater-30d-admin-val"))||0),serviceFeeType:$("set-paylater-30d-service-type")||"flat",serviceFeeValue:Math.max(0,parseFloat($("set-paylater-30d-service-val"))||0)},"2m":{enabled:$("set-paylater-2m-enabled")==="true",label:"2 Bulan (Cicilan 2x)",shortLabel:"2 Bulan",months:2,days:60,adminFeeType:$("set-paylater-2m-admin-type")||"flat",adminFeeValue:Math.max(0,parseFloat($("set-paylater-2m-admin-val"))||0),serviceFeeType:$("set-paylater-2m-service-type")||"percent",serviceFeeValue:Math.max(0,parseFloat($("set-paylater-2m-service-val"))||0)},"3m":{enabled:$("set-paylater-3m-enabled")==="true",label:"3 Bulan (Cicilan 3x)",shortLabel:"3 Bulan",months:3,days:90,adminFeeType:$("set-paylater-3m-admin-type")||"flat",adminFeeValue:Math.max(0,parseFloat($("set-paylater-3m-admin-val"))||0),serviceFeeType:$("set-paylater-3m-service-type")||"percent",serviceFeeValue:Math.max(0,parseFloat($("set-paylater-3m-service-val"))||0)}}};else if(t==="config")i.config||(i.config={}),i.config.gasUrl=$("set-gas-url"),x("Pengaturan GAS URL tersimpan.");else if(t==="operasional"){i.store.useStock=$("set-use-stock")==="true",i.store.ppnEnabled=$("set-ppn-enabled")==="true",i.store.ppnType=$("set-ppn-type")||"exclusive";const a=$("set-ppn-rate"),r=parseFloat(a);i.store.ppnRate=!isNaN(r)&&r>=0?r:11,i.store.ppnShowZero=$("set-ppn-show-zero")==="true",i.store.ppnTaxLabel=($("set-ppn-tax-label")||"").trim();const s=($("set-tax-npwp")||"").trim();i.store.taxNpwp=s,i.taxSettings||(i.taxSettings={}),s&&(i.taxSettings.npwp=s),i.store.spendPointsEnabled=$("set-spend-points-enabled")==="true",i.store.spendPointsThreshold=Math.max(1,parseFloat($("set-spend-points-threshold"))||1e5),i.store.spendPointsPerThreshold=Math.max(1,parseFloat($("set-spend-points-per-threshold"))||1),It()}const e={profile:"store",catalog:"store",shipping:"store",operasional:["store","taxSettings"],payment:["payment","store"],config:"config"};if(typeof window.saveApp=="function"){const a=Array.isArray(e[t])?e[t]:[e[t]||"store"];await window.saveApp(a)}t==="profile"||t==="config"?(x(t==="config"?"Sistem Diperbarui! Memuat Ulang...":"Warna Berubah! Memuat Ulang..."),setTimeout(()=>location.reload(),1500)):(x("Tersimpan!"),ma(),typeof rDyn=="function"?rDyn():typeof window.rDyn=="function"&&window.rDyn(),typeof rCat=="function"?rCat():typeof window.rCat=="function"&&window.rCat())}catch{x("Gagal menyimpan pengaturan")}finally{Ie(!1),D()}}},Dt=t=>{const e=typeof window.parseGeoCoordinates=="function"?window.parseGeoCoordinates:null,a=e?e(t):null,r=document.getElementById("maps-smart-feedback"),s=document.getElementById("set-lat"),o=document.getElementById("set-lng");a?(s&&(s.value=a.lat),o&&(o.value=a.lng),r&&(r.className="text-[10px] mt-1.5 font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5",r.innerHTML=`<i class="fa-solid fa-circle-check text-xs"></i> <span>Akurat! Koordinat terdeteksi: <b>${a.lat}, ${a.lng}</b></span>`)):t&&t.trim().length>3?r&&(r.className="text-[10px] mt-1.5 font-medium text-amber-600 dark:text-amber-400 flex items-center gap-1.5",r.innerHTML='<i class="fa-solid fa-triangle-exclamation text-xs"></i> <span>Pola belum terbaca. Coba tempel format: <code>-7.823085, 112.098837</code> atau link Google Maps</span>'):r&&(r.className="text-[10px] mt-1.5 font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1.5",r.innerHTML='<i class="fa-solid fa-circle-info text-blue-500"></i> <span>Tempel tautan Maps atau angka koordinat dari Google Maps</span>')},ws=()=>{const t=document.getElementById("set-lat"),e=document.getElementById("set-lng"),a=document.getElementById("set-maps-smart-input");t&&e&&a&&t.value&&e.value&&(a.value=`${t.value.trim()}, ${e.value.trim()}`)},ys=async()=>{const t=document.getElementById("set-maps-smart-input");if(t){try{if(navigator.clipboard&&navigator.clipboard.readText){const e=await navigator.clipboard.readText();if(e){t.value=e,Dt(e),x("Teks berhasil ditempel dari clipboard!");return}}}catch{}t.focus(),x("Silakan tekan Ctrl+V atau tahan untuk menempel")}},Ss=()=>{const t=document.getElementById("set-lat"),e=document.getElementById("set-lng");let a=t?t.value.trim():"",r=e?e.value.trim():"";if(!a||!r){const s=document.getElementById("set-maps-smart-input");if(s&&s.value&&typeof window.parseGeoCoordinates=="function"){const o=window.parseGeoCoordinates(s.value);o&&(a=o.lat,r=o.lng)}}a&&r?window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${a},${r}`)}`,"_blank"):x("Masukkan koordinat toko terlebih dahulu")},Ts=()=>{if(!navigator.geolocation){x("Browser tidak mendukung sensor GPS");return}x("Sedang mendeteksi lokasi GPS..."),navigator.geolocation.getCurrentPosition(t=>{const e=t.coords.latitude.toString(),a=t.coords.longitude.toString(),r=document.getElementById("set-maps-smart-input");r&&(r.value=`${e}, ${a}`),Dt(`${e}, ${a}`),x("Lokasi GPS berhasil didapatkan!")},()=>{x("Gagal mengambil GPS perangkat. Pastikan izin lokasi aktif.")},{enableHighAccuracy:!0,timeout:15e3})},$s=()=>{const t=JSON.stringify(i,null,2),e=`backup_tokoputri_${new Date().toISOString().slice(0,10)}.json`;if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function"){const a=btoa(unescape(encodeURIComponent(t)));window.AndroidNativeApp.saveOrShareFile(a,e,"application/json")}else{const a="data:text/json;charset=utf-8,"+encodeURIComponent(t),r=document.createElement("a");r.href=a,r.download=e,document.body.appendChild(r),r.click(),r.remove()}x("Backup berhasil disimpan!")},Ps=t=>{const e=t.target.files[0];if(!e)return;const a=new FileReader;a.onload=async r=>{try{const s=JSON.parse(r.target.result);Object.assign(i,s),typeof window.saveApp=="function"&&await window.saveApp(),x("Data dipulihkan!"),setTimeout(()=>location.reload(),1e3)}catch{x("Gagal memulihkan data!")}},a.readAsText(e)},As=()=>{let t=document.getElementById("admin-hero-banner-modal");t||(t=document.createElement("div"),t.id="admin-hero-banner-modal",document.body.appendChild(t));const e=i.store.showHeroSlide!==!1&&i.store.showHeroSlide!=="false",a=i.store.heroMascotImg||"/putri_mascot_anim.gif";t.className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-900/80 p-4 transition-opacity duration-300",typeof window.pushModalHistory=="function"&&window.pushModalHistory("heroBanner"),t.innerHTML=`
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
                            <i class="fa-solid fa-sparkles text-amber-300"></i> ${m(i.store.heroWelcomeTag||"SELAMAT DATANG")}
                        </span>
                        <h4 class="font-black text-sm text-white line-clamp-1" id="m-preview-title">${m(i.store.heroTitle||i.store.name||"TOKO PUTRI")}</h4>
                        <p class="text-[9.5px] text-white/90 line-clamp-2 mt-0.5 font-medium" id="m-preview-sub">${m(i.store.heroSubtitle||i.store.slogan||"Pusat Solusi Bangunan & Cat Terlengkap")}</p>
                    </div>
                    <div class="w-[35%] flex flex-col items-center">
                        <div class="w-18 h-18 rounded-2xl overflow-hidden shadow-lg border-2 border-white/60 bg-black/20 flex items-center justify-center">
                            <img id="m-preview-img" src="${m(a)}" class="w-full h-full object-cover" onerror="this.src='/putri_mascot_3d.jpg';">
                        </div>
                        <div class="mt-1 bg-slate-950/80 text-[7.5px] font-bold text-white px-2 py-0.5 rounded-full flex items-center gap-1 border border-white/20 whitespace-nowrap">
                            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            <span id="m-preview-badge">${m(i.store.heroBadgeText||"Siap Melayani")}</span>
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
                        <input autocomplete="off" id="quick-set-hero-mascot-img" value="${m(i.store.heroMascotImg||"")}"
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
                        ${i.store.logo?`
                        <button type="button" onclick="const l='${m(i.store.logo)}'; document.getElementById('quick-set-hero-mascot-img').value=l; document.getElementById('m-preview-img').src=l; showToast('Logo toko dipilih');" class="text-[10px] font-bold px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-all active:scale-95 cursor-pointer">
                            <i class="fa-solid fa-store mr-1"></i> Pakai Logo Toko
                        </button>`:""}
                    </div>
                </div>

                <!-- Teks Status Badge & Tag -->
                <div class="grid grid-cols-2 gap-3">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1 uppercase tracking-wider">Teks Badge Status</label>
                        <input autocomplete="off" id="quick-set-hero-badge-text" value="${m(i.store.heroBadgeText||"Siap Melayani")}" class="admin-input !py-2.5 bg-white dark:bg-slate-800 shadow-sm w-full text-xs" placeholder="Siap Melayani" oninput="document.getElementById('m-preview-badge').innerText = this.value || 'Siap Melayani';">
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1 uppercase tracking-wider">Tag Ucapan</label>
                        <input autocomplete="off" id="quick-set-hero-welcome-tag" value="${m(i.store.heroWelcomeTag||"SELAMAT DATANG")}" class="admin-input !py-2.5 bg-white dark:bg-slate-800 shadow-sm w-full text-xs" placeholder="SELAMAT DATANG" oninput="document.getElementById('m-preview-tag').innerHTML = '<i class=\\'fa-solid fa-sparkles text-amber-300\\'></i> ' + (this.value || 'SELAMAT DATANG');">
                    </div>
                </div>

                <!-- Judul & Subtitle -->
                <div>
                    <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1 uppercase tracking-wider">Judul Banner (Kosong = Nama Toko)</label>
                    <input autocomplete="off" id="quick-set-hero-title" value="${m(i.store.heroTitle||i.store.name||"")}" class="admin-input !py-2.5 bg-white dark:bg-slate-800 shadow-sm w-full text-xs" placeholder="${m(i.store.name||"TOKO PUTRI")}" oninput="document.getElementById('m-preview-title').innerText = this.value || '${m(i.store.name||"TOKO PUTRI")}';">
                </div>

                <div>
                    <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1 uppercase tracking-wider">Slogan / Deskripsi Banner</label>
                    <textarea id="quick-set-hero-subtitle" rows="2" class="admin-input !py-2.5 bg-white dark:bg-slate-800 shadow-sm w-full text-xs" placeholder="Deskripsi ringkas..." oninput="document.getElementById('m-preview-sub').innerText = this.value || '';">${m(i.store.heroSubtitle||i.store.slogan||"")}</textarea>
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
    `},ba=(t=!1)=>{const e=()=>{const a=document.getElementById("admin-hero-banner-modal");a&&a.remove()};typeof window.requestCloseModal=="function"?window.requestCloseModal("heroBanner",t,e):e()},Is=async()=>{L("Menyimpan banner...");try{i.store.showHeroSlide=$("quick-set-show-hero-slide")==="true",i.store.heroMascotImg=he($("quick-set-hero-mascot-img")),i.store.heroBadgeText=$("quick-set-hero-badge-text")||"Siap Melayani",i.store.heroWelcomeTag=$("quick-set-hero-welcome-tag")||"SELAMAT DATANG",i.store.heroTitle=$("quick-set-hero-title"),i.store.heroSubtitle=$("quick-set-hero-subtitle"),typeof window.saveApp=="function"&&await window.saveApp(["store"]),ba(),x("Banner sambutan & maskot berhasil diperbarui!"),window.cTab==="banners"&&typeof window.rAdmL=="function"&&window.rAdmL("banners"),typeof window.rDyn=="function"&&window.rDyn()}catch{x("Gagal menyimpan banner sambutan")}finally{D()}},Ms=t=>{const e=k("set-ppn-enabled"),a=k("set-ppn-type"),r=k("set-ppn-rate"),s=k("set-ppn-show-zero"),o=k("set-ppn-tax-label");!e||!a||!r||(t==="badan_non_pkp"?(e.value="true",a.value="inclusive",r.value="0",s&&(s.value="true"),o&&(o.value="PPN Badan (0% Bebas PPN)"),x("Preset Badan Non-PKP diterapkan! (Tarif 0%, Bebas PPN Rp 0, Baris Pajak tercetak)")):t==="inklusif_11"?(e.value="true",a.value="inclusive",r.value="11",s&&(s.value="true"),o&&(o.value="PPN (11%)"),x("Preset Harga Inklusif 11% diterapkan! (Pajak di dalam harga produk)")):t==="pkp_11"?(e.value="true",a.value="exclusive",r.value="11",s&&(s.value="false"),o&&(o.value="PPN (11%)"),x("Preset PKP Standar 11% diterapkan! (Pajak ditambahkan di checkout)")):t==="pkp_12"&&(e.value="true",a.value="exclusive",r.value="12",s&&(s.value="false"),o&&(o.value="PPN (12%)"),x("Preset Penyesuaian PKP 12% diterapkan! (UU Harmonisasi Perpajakan)")),typeof window.triggerHaptic=="function"&&window.triggerHaptic("medium"))};window.syncAppMeta=syncAppMeta;window.rAdmSet=ma;window.selectPresetTheme=xs;window.selectBgStyle=fs;window.openSettingForm=gs;window.saveAdminSettings=vs;window.applyTaxPresetRI=Ms;window.backupData=$s;window.restoreData=Ps;window.handleSmartMapsInput=Dt;window.handleManualCoordChange=ws;window.pasteFromClipboardToMapsInput=ys;window.previewStoreOnMaps=Ss;window.detectAdminGPS=Ts;window.openHeroBannerModal=As;window.closeHeroBannerModal=ba;window.saveHeroBannerModal=Is;let q=new Date().getFullYear(),H=0,pe="menu",oe=null;const me=["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],Ds=t=>{if(typeof window.getEffHpp=="function")return window.getEffHpp(t);const e=i.products?.find(a=>a&&a.id!=null&&String(a.id)===String(t.id));if(!e)return 0;if(t.variantName&&e.variants){const a=e.variants.find(r=>r.name===t.variantName);if(a&&a.hpp!=null)return parseFloat(a.hpp)||0}return parseFloat(e.hpp)||0},Va=new Map,eo=2*60*1e3,Ct=async t=>{const e=Va.get(t);if(e&&Date.now()-e.timestamp<eo)return e.data;const a={};for(let r=1;r<=12;r++)a[r]={omset:0,ppn:0,hpp:0,disc:0,orderCount:0};try{const r=new Date(t,0,1),s=new Date(t+1,0,1);(await P.collection("freshmart_orders").where("timestamp",">=",je.firestore.Timestamp.fromDate(r)).where("timestamp","<",je.firestore.Timestamp.fromDate(s)).limit(5e3).get()).forEach(n=>{const c=n.data();if(c.status==="Dibatalkan"||!c.timestamp||!c.timestamp.toDate)return;const p=c.timestamp.toDate().getMonth()+1;if(!a[p])return;const d=c.payment?.dppAmount!==void 0&&c.payment?.dppAmount!==null?parseFloat(c.payment.dppAmount):parseFloat(c.payment?.subtotal)||0;a[p].omset+=d,a[p].ppn+=parseFloat(c.payment?.ppnAmount)||0,a[p].disc+=parseFloat(c.payment?.productDiscount)||0,a[p].orderCount++,(c.items||[]).forEach(b=>{const u=b.hpp!==void 0&&b.hpp!==null?parseFloat(b.hpp):Ds(b);a[p].hpp+=(parseFloat(u)||0)*(parseFloat(b.qty)||0)})})}catch(r){console.error("Gagal memuat data pajak:",r),x("Gagal memuat data periode ini!")}return Va.set(t,{data:a,timestamp:Date.now()}),oe=a,a},qe=()=>oe?(H===0?Object.keys(oe):[H]).reduce((e,a)=>{const r=oe[a];return e.omset+=r.omset,e.ppn+=r.ppn,e.hpp+=r.hpp,e.disc+=r.disc,e.orderCount+=r.orderCount,e},{omset:0,ppn:0,hpp:0,disc:0,orderCount:0}):{omset:0,ppn:0,hpp:0,disc:0,orderCount:0},Bt=()=>{const t=i.taxSettings?.monthlyExpenses||{};return(H===0?Array.from({length:12},(a,r)=>r+1):[H]).reduce((a,r)=>a+(parseFloat(t[`${q}-${r}`])||0),0)},Cs=async()=>{R("admin-content",'<div class="text-center py-16"><i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i></div>'),oe=await Ct(q),Lt()},Lt=()=>{const t=Array.from({length:6},(r,s)=>new Date().getFullYear()-4+s),e=[{k:"summary",l:"Ringkasan PPN",i:"fa-receipt"},{k:"income",l:"Laba Rugi",i:"fa-chart-pie"},{k:"balance",l:"Neraca",i:"fa-scale-balanced"},{k:"settings",l:"Pengaturan",i:"fa-gear"}];pe==="menu"&&(pe="summary");const a=`
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
        
        ${pe==="settings"?"":`
        <div class="flex items-center gap-2">
            <select id="tax-year-select" onchange="changeTaxYear(this.value)" class="admin-input !py-2 !px-3 text-xs font-bold bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)] cursor-pointer">
                ${t.map(r=>`<option value="${r}" ${r===q?"selected":""}>${r}</option>`).join("")}
            </select>
            <select id="tax-month-select" onchange="changeTaxMonth(this.value)" class="admin-input !py-2 !px-3 text-xs font-bold bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)] cursor-pointer">
                <option value="0" ${H===0?"selected":""}>Setahun Penuh</option>
                ${me.map((r,s)=>`<option value="${s+1}" ${H===s+1?"selected":""}>${r} ${q}</option>`).join("")}
            </select>
        </div>
        `}
    </div>

    <!-- Sub-Tab Navigation Bar -->
    <div class="flex items-center gap-2 mb-5 overflow-x-auto hide-scrollbar pb-1">
        ${e.map(r=>{const s=pe===r.k;return`
            <button onclick="switchTaxTab('${r.k}')" class="px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all active:scale-95 flex items-center gap-2 shrink-0 ${s?"primary-bg text-white shadow-glow":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-[rgba(var(--color-primary-rgb),0.4)]"}">
                <i class="fa-solid ${r.i} text-xs"></i>
                <span>${r.l}</span>
            </button>`}).join("")}
    </div>
    `;R("admin-content",`
    <div class="max-w-5xl mx-auto pb-10 text-sm fade-in-scale">
        <div class="mb-5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/60 rounded-2xl p-4 flex items-start gap-3 text-xs font-semibold text-amber-800 dark:text-amber-300 shadow-xs">
            <i class="fa-solid fa-circle-info text-amber-500 text-base shrink-0 mt-0.5"></i>
            <span class="leading-relaxed">Halaman ini adalah <b>alat bantu rekap internal</b> Omset, PPN, Laba Rugi, dan Neraca dari data transaksi toko. Bukan pengganti konsultan pajak/akuntan — validasi kembali angkanya sebelum digunakan untuk pelaporan SPT resmi.</span>
        </div>

        ${a}

        <div id="tax-content"></div>
    </div>`),dt()},Bs=t=>{pe=t,Lt()},Ls=async t=>{q=parseInt(t,10),R("tax-content",'<div class="text-center py-16"><i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i></div>'),oe=await Ct(q),dt()},Ns=t=>{H=parseInt(t,10),dt()},dt=()=>{pe==="summary"?ua():pe==="income"?Nt():pe==="balance"?Rt():pe==="settings"&&xa()},ua=()=>{const t=qe(),e=H===0?`Tahun ${q}`:`${me[H-1]} ${q}`,a=t.omset-t.disc,r=Math.round(t.omset*.005),s=Array.from({length:12},(o,l)=>l+1).map(o=>{const l=oe?oe[o]:{omset:0,ppn:0,orderCount:0},n=H===o,c=Math.round((l.omset||0)*.005);return`<tr class="${n?"bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.14)] font-bold":"hover:bg-slate-50 dark:hover:bg-slate-700/30"} border-b border-slate-100 dark:border-slate-700/50 last:border-0 transition-colors">
            <td class="py-3 px-4 text-xs font-bold text-slate-700 dark:text-slate-200">${me[o-1]}</td>
            <td class="py-3 px-4 text-xs font-bold text-slate-800 dark:text-white text-right">${g(l.omset)}</td>
            <td class="py-3 px-4 text-xs font-bold text-right" style="color:var(--color-primary)">${g(l.ppn)}</td>
            <td class="py-3 px-4 text-xs font-bold text-emerald-600 dark:text-emerald-400 text-right">${g(c)}</td>
            <td class="py-3 px-4 text-xs font-bold text-slate-500 dark:text-slate-400 text-right">${l.orderCount}</td>
        </tr>`}).join("");R("tax-content",`
        <div class="grid grid-cols-2 lg:grid-cols-5 gap-3.5 mb-6">
            <div class="card-modern p-4 sm:p-5 flex flex-col justify-between">
                <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Omset Bruto (${e})</p>
                <p class="text-sm sm:text-lg font-bold text-slate-800 dark:text-white truncate">${g(t.omset)}</p>
                <p class="text-[10px] font-bold text-slate-400 mt-1">${t.orderCount} pesanan</p>
            </div>
            <div class="card-modern p-4 sm:p-5 flex flex-col justify-between">
                <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5"><i class="fa-solid fa-minus mr-1"></i>Diskon Produk</p>
                <p class="text-sm sm:text-lg font-bold text-rose-500 truncate">${g(t.disc)}</p>
                <p class="text-[10px] font-bold text-slate-400 mt-1">Potongan diskon</p>
            </div>
            <div class="card-modern p-4 sm:p-5 flex flex-col justify-between">
                <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">DPP (Dasar Pengenaan Pajak)</p>
                <p class="text-sm sm:text-lg font-bold text-slate-800 dark:text-white truncate">${g(a)}</p>
                <p class="text-[10px] font-bold text-slate-400 mt-1">Omset bersih</p>
            </div>
            <div class="card-modern p-4 sm:p-5 flex flex-col justify-between border-[rgba(var(--color-primary-rgb),0.4)] relative overflow-hidden" style="background: rgba(var(--color-primary-rgb),0.04)">
                <p class="text-[9px] font-bold uppercase tracking-widest mb-1.5" style="color:var(--color-primary)"><i class="fa-solid fa-file-invoice-dollar mr-1"></i>PPN Keluaran</p>
                <p class="text-sm sm:text-lg font-bold truncate" style="color:var(--color-primary)">${g(t.ppn)}</p>
                <p class="text-[10px] font-bold mt-1 opacity-80" style="color:var(--color-primary)">${t.ppn>0?"Wajib setor kas negara":"Bebas PPN / Tarif 0%"}</p>
            </div>
            <div class="card-modern p-4 sm:p-5 flex flex-col justify-between border-emerald-300 dark:border-emerald-800/80 bg-emerald-50/40 dark:bg-emerald-950/20 col-span-2 lg:col-span-1">
                <p class="text-[9px] font-bold uppercase tracking-widest mb-1.5 text-emerald-700 dark:text-emerald-400"><i class="fa-solid fa-building-columns mr-1"></i>PPh Final 0,5%</p>
                <p class="text-sm sm:text-lg font-bold text-emerald-700 dark:text-emerald-400 truncate">${g(r)}</p>
                <p class="text-[10px] font-bold text-emerald-600 dark:text-emerald-500 mt-1">PP 55/2022 Badan/UMKM</p>
            </div>
        </div>
        <div class="card-modern overflow-hidden">
            <div class="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-700/70 flex items-center justify-between">
                <h4 class="font-bold text-slate-800 dark:text-slate-100 text-xs uppercase tracking-widest">Rincian Per Bulan — ${q}</h4>
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
    `)},Nt=()=>{const t=qe(),e=H===0?`Tahun ${q}`:`${me[H-1]} ${q}`,a=t.omset-t.disc-t.hpp,r=H===0?null:`${q}-${H}`,s=Bt(),o=a-s,l=i.taxSettings?.taxScheme||"umkm_final";let n,c,p;l==="umkm_final"?(n=.5,c=t.omset,p="PPh Final Badan / UMKM (0,5% × Omset PP 55/2022)"):l==="badan_normal"?(n=22,c=Math.max(0,o),p="PPh Badan (22% × Laba Bersih UU HPP)"):(n=parseFloat(i.taxSettings?.customTaxRate)||0,c=Math.max(0,o),p=`PPh Custom (${n}% × Laba Bersih)`);const d=c*(n/100),b=o-d;let u="";if(H===0)u=Array.from({length:12},(f,v)=>v+1).map(f=>{const v=`${q}-${f}`,h=(i.taxSettings?.monthlyExpenses||{})[v]||0;return`<div class="flex items-center justify-between gap-2 py-2 border-b border-slate-100 dark:border-slate-700/50 last:border-0">
                <span class="text-xs font-bold text-slate-600 dark:text-slate-300">${me[f-1]} ${q}</span>
                <input type="number" min="0" value="${h}" onchange="saveMonthlyExpense('${v}', this.value)" class="admin-input !py-2 !px-3 text-xs w-36 text-right font-bold bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)]">
            </div>`}).join("");else{const f=(i.taxSettings?.monthlyExpenses||{})[r]||0;u=`<div class="flex items-center justify-between gap-2 py-2">
            <span class="text-xs font-bold text-slate-600 dark:text-slate-300">${me[H-1]} ${q}</span>
            <input type="number" min="0" value="${f}" onchange="saveMonthlyExpense('${r}', this.value)" class="admin-input !py-2 !px-3 text-xs w-36 text-right font-bold bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)]">
        </div>`}R("tax-content",`
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
                <div class="flex justify-between py-1"><span class="font-bold text-slate-500 dark:text-slate-400">Omset Bruto</span><span class="font-bold text-slate-800 dark:text-slate-100">${g(t.omset)}</span></div>
                <div class="flex justify-between py-1"><span class="font-bold text-slate-500 dark:text-slate-400">(−) Diskon Produk</span><span class="font-bold text-rose-500">-${g(t.disc)}</span></div>
                <div class="flex justify-between py-1"><span class="font-bold text-slate-500 dark:text-slate-400">(−) HPP (Harga Pokok Penjualan)</span><span class="font-bold text-rose-500">-${g(t.hpp)}</span></div>
                <div class="flex justify-between py-2.5 border-t border-slate-200 dark:border-slate-700"><span class="font-bold text-slate-700 dark:text-slate-200">Laba Kotor</span><span class="font-bold text-emerald-500">${g(a)}</span></div>
                <div class="flex justify-between py-1"><span class="font-bold text-slate-500 dark:text-slate-400">(−) Biaya Operasional</span><span class="font-bold text-rose-500">-${g(s)}</span></div>
                <div class="flex justify-between py-2.5 border-t border-slate-200 dark:border-slate-700"><span class="font-bold text-slate-700 dark:text-slate-200">Laba Bersih Sebelum Pajak</span><span class="font-bold" style="color:var(--color-primary)">${g(o)}</span></div>
                <div class="flex justify-between py-1"><span class="font-bold text-slate-500 dark:text-slate-400">(−) Estimasi ${p}</span><span class="font-bold text-rose-500">-${g(d)}</span></div>
                <div class="flex justify-between py-3 border-t-2 border-slate-800 dark:border-slate-200 mt-2"><span class="font-bold text-slate-900 dark:text-white text-sm sm:text-base">Laba Bersih Setelah Pajak (Estimasi)</span><span class="font-extrabold text-sm sm:text-base" style="color:var(--color-primary)">${g(b)}</span></div>
            </div>

            <div class="mt-8 pt-5 border-t border-dashed border-slate-200 dark:border-slate-700">
                <h5 class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1 flex items-center gap-1.5"><i class="fa-solid fa-pen" style="color:var(--color-primary)"></i> Input Biaya Operasional (Manual)</h5>
                <p class="text-[10px] font-bold text-slate-400 mb-4">Contoh: sewa tempat, gaji karyawan, listrik, internet, dll. Sistem tidak melacak biaya ini otomatis.</p>
                <div class="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
                    ${u}
                </div>
            </div>
        </div>
    `)},Rs=async(t,e)=>{const a=parseFloat(e)||0;i.taxSettings||(i.taxSettings={}),i.taxSettings.monthlyExpenses||(i.taxSettings.monthlyExpenses={}),i.taxSettings.monthlyExpenses[t]=a;try{typeof window.saveApp=="function"&&await window.saveApp(["taxSettings"]),Nt()}catch{x("Gagal menyimpan biaya operasional!")}},Rt=()=>{const t=Pt(),e=i.taxSettings?.balanceSheet||{kas:0,piutang:0,hutang:0},a=(parseFloat(e.kas)||0)+(parseFloat(e.piutang)||0)+t.assetHpp,r=parseFloat(e.hutang)||0,s=a-r;R("tax-content",`
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
                        <span class="text-xs font-bold" style="color:var(--color-primary)">${g(t.assetHpp)}</span>
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
                        <input type="number" min="0" value="${e.hutang||0}" onchange="saveBalanceField('hutang', this.value)" class="admin-input !py-2 !px-3 text-xs w-36 text-right font-bold bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)]">
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
    `)},js=async(t,e)=>{const a=parseFloat(e)||0;i.taxSettings||(i.taxSettings={}),i.taxSettings.balanceSheet||(i.taxSettings.balanceSheet={kas:0,piutang:0,hutang:0,modalDisetor:0}),i.taxSettings.balanceSheet[t]=a;try{typeof window.saveApp=="function"&&await window.saveApp(["taxSettings"]),Rt()}catch{x("Gagal menyimpan data neraca!")}},xa=()=>{const t=i.taxSettings||{};R("tax-content",`
        <div class="card-modern p-6 sm:p-8 max-w-2xl mx-auto space-y-5">
            <div>
                <label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Nama Badan Usaha / Toko</label>
                <input id="tax-company-name" type="text" value="${m(t.companyName||"")}" placeholder="Cth: Toko Putri" class="admin-input !py-3 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)]">
            </div>
            <div>
                <label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">NPWP (Nomor Pokok Wajib Pajak)</label>
                <input id="tax-npwp" type="text" value="${m(t.npwp||"")}" placeholder="XX.XXX.XXX.X-XXX.XXX" class="admin-input !py-3 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)]">
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
    `)},Es=t=>{Br("tax-custom-rate-wrap","hidden",t!=="custom")},Os=async()=>{if(!$t){Ie(!0),L("Menyimpan...");try{i.taxSettings||(i.taxSettings={}),i.taxSettings.companyName=$("tax-company-name");const t=$("tax-npwp");i.taxSettings.npwp=t,i.store||(i.store={}),i.store.taxNpwp=t,i.taxSettings.taxScheme=$("tax-scheme"),i.taxSettings.customTaxRate=parseFloat($("tax-custom-rate"))||.5,typeof window.saveApp=="function"&&await window.saveApp(["taxSettings","store"]),x("Pengaturan pajak & NPWP tersimpan!")}catch{x("Gagal menyimpan pengaturan pajak!")}finally{Ie(!1),D()}}},Fs=t=>{const e=H===0?`Tahun ${q} (Setahun Penuh)`:`${me[H-1]} ${q}`,a=i.taxSettings||{},r=new Date().toLocaleDateString("id-ID",{day:"2-digit",month:"long",year:"numeric"}),s=a.companyName||i.store?.name||"PUTRI UTAMA TEKNIK",o=i.store?.address||"Jln. Pakem RT005 RW003 Ds. Banyuanyar, Kec. Gurah, Kab. Kediri",l=i.store?.wa||i.store?.phone||"-",n=a.npwp||"";let c="";i.store?.logo&&(i.store.logo.includes("http")||i.store.logo.includes("data:"))?c=`<img loading="eager" src="${m(i.store.logo)}" class="w-14 h-14 object-contain rounded-xl border border-slate-200">`:c='<div class="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-md shrink-0" style="background: linear-gradient(135deg, var(--color-primary, #b8860b), var(--color-primary-dark, #8b6508));"><i class="fa-solid fa-store"></i></div>';const p={summary:"LAPORAN PPN & OMSET BULANAN",income:"LAPORAN LABA RUGI KOMPREHENSIF",balance:"NERACA KEUANGAN (BALANCE SHEET)"},d={summary:"PPN",income:"PL",balance:"BS"},b=p[t]||"LAPORAN KEUANGAN",u=`DOC-${d[t]||"FIN"}-${q}${H?String(H).padStart(2,"0"):"FY"}-001`,f=`
    <div class="border-b-2 border-slate-900 pb-3.5 mb-3.5 select-none">
        <div class="flex justify-between items-start gap-4">
            <div class="flex items-center gap-3.5">
                ${c}
                <div>
                    <h1 class="font-black text-lg sm:text-xl tracking-tight text-slate-900 uppercase leading-none">${m(s)}</h1>
                    <p class="text-[11px] font-semibold text-slate-500 mt-1 max-w-sm leading-tight">${m(o)}</p>
                    <div class="flex items-center gap-2 mt-1 text-[10px] text-slate-600">
                        ${n?`<span class="font-mono font-bold text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">NPWP: ${m(n)}</span>`:""}
                        <span class="font-bold text-slate-500"><i class="fa-brands fa-whatsapp text-emerald-600 mr-1"></i>${m(l)}</span>
                    </div>
                </div>
            </div>
            <div class="text-right shrink-0">
                <span class="inline-block px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest bg-slate-900 text-white mb-1">Executive Statement</span>
                <h2 class="font-black text-sm sm:text-base tracking-wider text-slate-900 uppercase leading-tight">${b}</h2>
                <p class="text-xs font-bold text-slate-700 mt-0.5 font-mono">No: <span class="text-blue-700 font-black">${u}</span></p>
                <p class="text-[10.5px] font-semibold text-slate-500 mt-0.5">Periode: <b class="text-slate-800">${e}</b> &bull; Dicetak: ${r}</p>
            </div>
        </div>
    </div>
    <div class="bg-amber-50/90 border border-amber-200/90 rounded-xl p-2.5 mb-3.5 text-[10.5px] font-medium text-amber-900 flex items-start gap-2 leading-relaxed select-none">
        <i class="fa-solid fa-circle-info text-amber-600 mt-0.5 text-xs shrink-0"></i>
        <span><b>Rekapitulasi Pembukuan Finansial Internal:</b> Dokumen ini disusun secara otomatis berdasarkan pencatatan transaksi POS Kasir, penjualan etalase, sistem HPP FIFO kulakan, dan buku kas operasional Toko Putri. Mohon validasi ke akuntan sebelum pelaporan SPT resmi.</span>
    </div>
    `,v=`
    <div class="mt-auto pt-3 flex justify-between items-end text-xs text-slate-700 select-none">
        <div class="text-center w-52">
            <p class="text-[10px] font-bold text-slate-500">Disusun &amp; Diperiksa Oleh,</p>
            <div class="h-14 flex items-center justify-center">
                <span class="text-[9.5px] text-slate-300 italic">[Tanda Tangan Staf]</span>
            </div>
            <p class="font-black text-slate-900 border-t border-slate-400 pt-1 text-[11px] uppercase">${m(i.store?.staffName||"Bagian Keuangan")}</p>
            <p class="text-[9.5px] text-slate-500 font-semibold">Administrasi &amp; Kasir</p>
        </div>
        <div class="text-center w-52">
            <p class="text-[10px] font-bold text-slate-500">Disetujui &amp; Disahkan Oleh,</p>
            <div class="h-14 flex items-center justify-center">
                <span class="text-[9.5px] text-slate-300 italic">[Tanda Tangan &amp; Stempel]</span>
            </div>
            <p class="font-black text-slate-900 border-t border-slate-400 pt-1 text-[11px] uppercase">${m(s)}</p>
            <p class="text-[9.5px] text-slate-500 font-semibold">Pemilik Usaha / Owner</p>
        </div>
    </div>
    `,h=`
    <div class="a4-page-footer mt-auto pt-2 border-t border-slate-200 flex justify-between items-center text-[10px] text-slate-500 font-mono select-none">
        <div class="flex items-center gap-1.5">
            <span class="font-bold text-slate-700 uppercase">${m(s)}</span>
            <span class="text-slate-300">&bull;</span>
            <span class="text-slate-500">${m(b)}</span>
            <span class="text-slate-300">&bull;</span>
            <span class="text-slate-400 font-mono">${u}</span>
        </div>
        <div class="flex items-center gap-1 font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
            <span>Halaman 1 dari 1</span>
        </div>
    </div>
    `;let y="";if(t==="summary"){const A=qe(),S=Math.max(0,A.omset-A.disc),w=Array.from({length:12},(I,N)=>N+1).map(I=>{const N=oe?oe[I]:{omset:0,ppn:0,orderCount:0},_=Math.max(0,(N.omset||0)-(N.disc||0));return`
            <tr class="border-b border-slate-200 hover:bg-slate-50/50">
                <td class="py-2 px-3 font-bold text-slate-800">${me[I-1]} ${q}</td>
                <td class="py-2 px-3 text-right font-mono tabular-nums font-semibold text-slate-700">${g(N.omset||0)}</td>
                <td class="py-2 px-3 text-right font-mono tabular-nums font-semibold text-slate-700">${g(_)}</td>
                <td class="py-2 px-3 text-right font-mono tabular-nums font-bold text-amber-700">${g(N.ppn||0)}</td>
                <td class="py-2 px-3 text-right font-mono tabular-nums font-semibold text-slate-600">${N.orderCount||0} Trx</td>
            </tr>`}).join("");y=`
            <div class="grid grid-cols-4 gap-3 mb-3.5 select-none">
                <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span class="text-[9px] font-black uppercase tracking-wider text-slate-500 block">Omset Bruto</span>
                    <span class="text-sm font-black text-slate-900 font-mono tabular-nums block mt-0.5">${g(A.omset)}</span>
                </div>
                <div class="p-3 rounded-xl bg-rose-50/70 border border-rose-200">
                    <span class="text-[9px] font-black uppercase tracking-wider text-rose-800 block">Diskon Produk</span>
                    <span class="text-sm font-black text-rose-700 font-mono tabular-nums block mt-0.5">${A.disc>0?Fe(A.disc,!0):"Rp 0"}</span>
                </div>
                <div class="p-3 rounded-xl bg-blue-50/70 border border-blue-200">
                    <span class="text-[9px] font-black uppercase tracking-wider text-blue-900 block">Dasar Pajak (DPP)</span>
                    <span class="text-sm font-black text-blue-800 font-mono tabular-nums block mt-0.5">${g(S)}</span>
                </div>
                <div class="p-3 rounded-xl bg-amber-50/80 border border-amber-200">
                    <span class="text-[9px] font-black uppercase tracking-wider text-amber-900 block">Total PPN Keluaran</span>
                    <span class="text-sm font-black text-amber-700 font-mono tabular-nums block mt-0.5">${g(A.ppn)}</span>
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
                    ${w}
                    <tr class="bg-slate-100 font-black text-slate-900 border-t-2 border-slate-800">
                        <td class="py-2.5 px-3 uppercase">Total Tahunan</td>
                        <td class="py-2.5 px-3 text-right font-mono tabular-nums">${g(A.omset)}</td>
                        <td class="py-2.5 px-3 text-right font-mono tabular-nums">${g(S)}</td>
                        <td class="py-2.5 px-3 text-right font-mono tabular-nums text-amber-700">${g(A.ppn)}</td>
                        <td class="py-2.5 px-3 text-right font-mono tabular-nums">${A.orderCount||0} Trx</td>
                    </tr>
                </tbody>
            </table>
        `}else if(t==="income"){const A=qe(),S=Math.max(0,A.omset-A.disc),w=S-A.hpp,I=Bt(),N=w-I,_=a.taxScheme||"umkm_final";let V,K,xe;_==="umkm_final"?(V=.5,K=A.omset,xe="PPh Final UMKM PP 55/2022 (0,5% × Omset)"):_==="badan_normal"?(V=22,K=Math.max(0,N),xe="PPh Badan UU HPP (22% × Laba Bersih)"):(V=parseFloat(a.customTaxRate)||0,K=Math.max(0,N),xe=`PPh Tarif Khusus (${V}% × Laba Bersih)`);const ut=K*(V/100),qt=N-ut,Oa=S>0?(w/S*100).toFixed(1):"0.0",$r=S>0?(I/S*100).toFixed(1):"0.0",Fa=S>0?(qt/S*100).toFixed(1):"0.0";y=`
            ${`
        <div class="grid grid-cols-4 gap-3 mb-3.5 select-none">
            <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span class="text-[9px] font-black uppercase tracking-wider text-slate-500 block">Penjualan Bersih</span>
                <span class="text-sm font-black text-slate-900 font-mono tabular-nums block mt-0.5">${g(S)}</span>
                <span class="text-[9px] font-bold text-slate-400 mt-0.5 block">100% Basis Omset</span>
            </div>
            <div class="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200">
                <span class="text-[9px] font-black uppercase tracking-wider text-emerald-800 block">Laba Kotor (Gross)</span>
                <span class="text-sm font-black text-emerald-700 font-mono tabular-nums block mt-0.5">${g(w)}</span>
                <span class="text-[9px] font-bold text-emerald-600 mt-0.5 block">${Oa}% Gross Margin</span>
            </div>
            <div class="p-3 rounded-xl bg-rose-50/70 border border-rose-200">
                <span class="text-[9px] font-black uppercase tracking-wider text-rose-800 block">Beban Operasional</span>
                <span class="text-sm font-black text-rose-700 font-mono tabular-nums block mt-0.5">${I>0?Fe(I,!0):"Rp 0"}</span>
                <span class="text-[9px] font-bold text-rose-600 mt-0.5 block">${$r}% Opex Ratio</span>
            </div>
            <div class="p-3 rounded-xl bg-blue-50/80 border border-blue-200">
                <span class="text-[9px] font-black uppercase tracking-wider text-blue-900 block">Laba Bersih Akhir</span>
                <span class="text-sm font-black text-blue-800 font-mono tabular-nums block mt-0.5">${g(qt)}</span>
                <span class="text-[9px] font-bold text-blue-600 mt-0.5 block">${Fa}% Net Margin</span>
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
                        <td class="py-1.5 px-3 text-right font-mono tabular-nums font-semibold">${g(A.omset)}</td>
                        <td class="py-1.5 px-3 text-right font-mono tabular-nums text-slate-400">-</td>
                    </tr>
                    <tr>
                        <td class="py-1.5 px-3 font-mono text-slate-500 text-[11px]">4-200</td>
                        <td class="py-1.5 px-3 font-semibold pl-6 text-rose-700">Potongan &amp; Diskon Penjualan</td>
                        <td class="py-1.5 px-3 text-center text-[10px] text-rose-600">Diskon Nota</td>
                        <td class="py-1.5 px-3 text-right font-mono tabular-nums font-semibold text-rose-600">${Fe(A.disc,!0)}</td>
                        <td class="py-1.5 px-3 text-right font-mono tabular-nums text-slate-400">-</td>
                    </tr>
                    <tr class="bg-slate-50 font-bold text-slate-900 border-t border-slate-300">
                        <td class="py-2 px-3 font-mono text-[11px]">4-000</td>
                        <td class="py-2 px-3 pl-6 uppercase text-[11px]">Total Pendapatan Bersih (Net Revenue)</td>
                        <td class="py-2 px-3 text-center text-[10px] font-mono text-blue-700 font-bold">100.0%</td>
                        <td class="py-2 px-3 text-right font-mono tabular-nums text-slate-400">-</td>
                        <td class="py-2 px-3 text-right font-mono tabular-nums font-black text-slate-900 text-[12px]">${g(S)}</td>
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
                        <td class="py-1.5 px-3 text-right font-mono tabular-nums font-semibold text-rose-600">${Fe(A.hpp,!0)}</td>
                        <td class="py-1.5 px-3 text-right font-mono tabular-nums text-slate-400">-</td>
                    </tr>
                    <tr class="bg-emerald-50/80 font-black text-emerald-950 border-t border-emerald-300">
                        <td class="py-2 px-3 font-mono text-[11px]">5-900</td>
                        <td class="py-2 px-3 pl-6 uppercase tracking-wide text-emerald-900 text-[11px]">LABA KOTOR (GROSS PROFIT)</td>
                        <td class="py-2 px-3 text-center text-[10px] font-mono text-emerald-700 font-bold">${Oa}%</td>
                        <td class="py-2 px-3 text-right font-mono tabular-nums text-slate-400">-</td>
                        <td class="py-2 px-3 text-right font-mono tabular-nums text-emerald-700 text-[12.5px] font-black">${g(w)}</td>
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
                        <td class="py-1.5 px-3 text-right font-mono tabular-nums font-semibold text-rose-600">${Fe(I,!0)}</td>
                        <td class="py-1.5 px-3 text-right font-mono tabular-nums text-slate-400">-</td>
                    </tr>
                    <tr class="bg-slate-50 font-bold text-slate-900 border-t border-slate-300">
                        <td class="py-2 px-3 font-mono text-[11px]">6-900</td>
                        <td class="py-2 px-3 pl-6 uppercase text-[11px]">Laba Operasional Sebelum Pajak (EBIT)</td>
                        <td class="py-2 px-3 text-center text-[10px] font-mono text-slate-600">${S>0?(N/S*100).toFixed(1):"0.0"}%</td>
                        <td class="py-2 px-3 text-right font-mono tabular-nums text-slate-400">-</td>
                        <td class="py-2 px-3 text-right font-mono tabular-nums font-black text-slate-900 text-[12px]">${g(N)}</td>
                    </tr>

                    <!-- IV. PAJAK & LABA BERSIH -->
                    <tr class="bg-slate-100/70 font-black text-slate-900 text-[10.5px]">
                        <td class="py-1.5 px-3 font-mono">4.0</td>
                        <td class="py-1.5 px-3 uppercase tracking-wide" colspan="4">IV. ESTIMASI BEBAN PAJAK PENGHASILAN (TAX PROVISION)</td>
                    </tr>
                    <tr>
                        <td class="py-1.5 px-3 font-mono text-slate-500 text-[11px]">9-100</td>
                        <td class="py-1.5 px-3 font-semibold pl-6 text-rose-700">Estimasi ${m(xe)}</td>
                        <td class="py-1.5 px-3 text-center text-[10px] text-rose-600">${V}% Basis</td>
                        <td class="py-1.5 px-3 text-right font-mono tabular-nums font-semibold text-rose-600">${Fe(ut,!0)}</td>
                        <td class="py-1.5 px-3 text-right font-mono tabular-nums text-slate-400">-</td>
                    </tr>
                    <tr class="bg-blue-50/90 text-blue-950 font-black border-t-2 border-slate-900 border-b-4 border-double border-slate-900">
                        <td class="py-2.5 px-3 font-mono text-[11.5px]">9-900</td>
                        <td class="py-2.5 px-3 pl-6 uppercase tracking-wider text-blue-900 text-[11.5px]">LABA BERSIH SETELAH PAJAK (NET INCOME)</td>
                        <td class="py-2.5 px-3 text-center text-[10.5px] font-mono text-blue-700">${Fa}%</td>
                        <td class="py-2.5 px-3 text-right font-mono tabular-nums text-slate-400">-</td>
                        <td class="py-2.5 px-3 text-right font-mono tabular-nums text-blue-900 text-[13.5px] font-black">${g(qt)}</td>
                    </tr>
                </tbody>
            </table>
        `}else if(t==="balance"){const A=Pt(),S=a.balanceSheet||{kas:0,piutang:0,hutang:0},w=(parseFloat(S.kas)||0)+(parseFloat(S.piutang)||0)+A.assetHpp,I=parseFloat(S.hutang)||0,N=w-I;y=`
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
                            <span class="font-mono tabular-nums font-bold text-slate-900">${g(S.kas||0)}</span>
                        </div>
                        <div class="flex justify-between py-1.5 border-b border-slate-100">
                            <span class="font-semibold text-slate-700">1-200 Piutang Usaha (Nota Tempo)</span>
                            <span class="font-mono tabular-nums font-bold text-slate-900">${g(S.piutang||0)}</span>
                        </div>
                        <div class="flex justify-between py-1.5 border-b border-slate-100">
                            <span class="font-semibold text-slate-700">1-300 Persediaan Barang (Nilai HPP Stok)</span>
                            <span class="font-mono tabular-nums font-bold text-slate-900">${g(A.assetHpp)}</span>
                        </div>
                        <div class="flex justify-between py-2 border-t-2 border-slate-900 mt-2 bg-slate-50 px-2 rounded font-black text-slate-900">
                            <span class="uppercase tracking-wider">TOTAL ASET</span>
                            <span class="font-mono tabular-nums text-sm">${g(w)}</span>
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
                            <span class="font-mono tabular-nums font-bold text-rose-700">${g(I)}</span>
                        </div>
                        <div class="flex justify-between py-1.5 border-b border-slate-100">
                            <span class="font-semibold text-slate-700">3-100 Modal Disetor &amp; Saldo Laba Usaha</span>
                            <span class="font-mono tabular-nums font-bold text-slate-900">${g(N)}</span>
                        </div>
                        <div class="flex justify-between py-1.5 border-b border-slate-100 opacity-0 pointer-events-none">
                            <span>-</span><span>-</span>
                        </div>
                        <div class="flex justify-between py-2 border-t-2 border-slate-900 mt-2 bg-slate-50 px-2 rounded font-black text-slate-900">
                            <span class="uppercase tracking-wider">TOTAL KEWAJIBAN + EKUITAS</span>
                            <span class="font-mono tabular-nums text-sm">${g(I+N)}</span>
                        </div>
                    </div>
                </div>
            </div>
        `}const T=`
    <div class="a4-page" data-page="1" data-total-pages="1">
        <div class="a4-page-body flex-1 flex flex-col justify-between">
            <div>
                ${f}
                ${y}
            </div>
            ${v}
        </div>
        ${h}
    </div>
    `;Re("doc-modal-title","Preview "+b),R("doc-paper-content",T);const M=k("doc-page-count-badge");M&&(M.textContent="1 Halaman A4");const C=k("doc-preview-modal");C&&C.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("docPreview"),Ge("doc-preview-modal"),setTimeout(()=>{k("doc-preview-modal")&&k("doc-preview-modal").classList.remove("opacity-0"),k("doc-preview-modal-box")&&k("doc-preview-modal-box").classList.remove("scale-95"),typeof window.fitDocPreview=="function"&&window.fitDocPreview()},10)};window.fetchTaxPeriodData=Ct;window.getTaxPeriodTotals=qe;window.getTaxPeriodExpenses=Bt;window.rTaxPanel=Cs;window.rTaxRenderShell=Lt;window.switchTaxTab=Bs;window.changeTaxYear=Ls;window.changeTaxMonth=Ns;window.rTaxSubContent=dt;window.rTaxSummary=ua;window.rTaxIncome=Nt;window.saveMonthlyExpense=Rs;window.rTaxBalance=Rt;window.saveBalanceField=js;window.rTaxSettingsPanel=xa;window.toggleCustomTaxRateInput=Es;window.saveTaxSettingsPanel=Os;window.openTaxDocPreview=Fs;window.MONTH_NAMES=me;const ct=t=>window.pushModalHistory?.(t),jt=(t,e,a)=>typeof window.requestCloseModal=="function"?window.requestCloseModal(t,e,a):a?.();let ke="all",re="orders",ae="all",ce="all",be="",E=[],W=[],fa=null,Pe="items";const ze=()=>{if(["modal-tempo-detail","modal-tempo-payment","modal-tempo-penalty","modal-tempo-confirmations"].forEach(t=>{const e=document.querySelector(`#admin-content #${t}`);e&&e.remove()}),!k("modal-tempo-detail")){const t=document.createElement("div");t.id="modal-tempo-detail",t.className="fixed inset-0 z-[150] flex hidden items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/75 opacity-0 transition-opacity duration-300",t.onclick=e=>{e.target===t&&window.closeTempoDetailModal?.()},t.innerHTML=`
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
        `,document.body.appendChild(t)}},ga=t=>{if(!t)return"PL";const e=t.trim().split(/\s+/).filter(Boolean);return e.length===1?e[0].substring(0,2).toUpperCase():(e[0][0]+e[e.length-1][0]).toUpperCase()},ot=t=>{if(!t)return"-";try{return new Date(t).toLocaleDateString("id-ID",{day:"2-digit",month:"short",year:"numeric"})}catch{return t}},wt=t=>{if(!t)return"-";try{return new Date(t).toLocaleDateString("id-ID",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"})+" WIB"}catch{return t}},te=t=>{let e=parseFloat(t.payment?.tempoBalance)||0,a=t.payment?.tempoPenaltyRate!==void 0?parseFloat(t.payment.tempoPenaltyRate):1,r=t.payment?.tempoPenaltyStopped===!0,s=0,o=t.payment?.tempoDueDate||0,l=0,n=0,c=!1,p=!1;const d=Date.now();o>0&&(d>o?(l=Math.floor((d-o)/(24*60*60*1e3)),l>0&&(c=!0)):(n=Math.ceil((o-d)/(24*60*60*1e3)),n<=3&&(p=!0))),r?s=parseFloat(t.payment?.tempoFixedPenalty)||0:c&&(s=a/100*e*l);let b=e+s;return{sisa:e,rate:a,isStopped:r,latePenalty:s,dueDate:o,daysLate:l,daysLeft:n,isLate:c,isDueSoon:p,totalAkhir:b,statusCategory:c?"late":p?"due_soon":"active"}},_s=t=>{ze(),fa=t,Pe="items";const e=E.find(s=>s.orderId===t);if(!e)return x("Data piutang tidak ditemukan!");ka(e);const a=k("modal-tempo-detail"),r=k("modal-tempo-detail-box");a&&(ne(a,r),ct("tempoDetail"))},Ks=(t=!1)=>{const e=k("modal-tempo-detail"),a=k("modal-tempo-detail-box");e&&jt("tempoDetail",t,()=>Z(e,a))};window.openTempoDetailModal=_s;window.closeTempoDetailModal=Ks;window.switchTempoDetailTab=t=>{Pe=t;const e=E.find(a=>a.orderId===fa);e&&ka(e)};const ka=t=>{if(!k("modal-tempo-detail-content"))return;const a=te(t),r=lt(t.customer?.wa||""),s=ga(t.customer?.name||"Pelanggan"),o=a.dueDate?ot(a.dueDate):"-";t.dateString&&wt(t.dateString);const l=t.items||[],n=t.payment?.installments||[],c=n.reduce((y,T)=>y+(parseFloat(T.amount)||0),0),p=t.payment?.grandTotal||a.sisa+c,d=!!(t.payment?.isPaylater||t.isPaylater||t.payment?.subMethod==="paylater"),b=(parseFloat(t.payment?.paylaterAdminFee)||0)+(parseFloat(t.payment?.paylaterServiceFee)||0),u=parseFloat(t.payment?.paylaterUsed)||Math.max(0,a.sisa-b),f=parseFloat(t.payment?.paylaterMonthlyInstallment)||0,v=parseInt(t.payment?.paylaterMonths)||(t.payment?.paylaterTenor==="2m"?2:t.payment?.paylaterTenor==="3m"?3:1);let h="";a.isLate?h=`<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-[11px] font-black uppercase tracking-wider bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400 border border-rose-200 dark:border-rose-800 shadow-2xs"><i class="fa-solid fa-triangle-exclamation"></i> Terlambat ${a.daysLate} Hari</span>`:a.isDueSoon?h=`<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-[11px] font-black uppercase tracking-wider bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300 border border-amber-200 dark:border-amber-800 shadow-2xs"><i class="fa-solid fa-clock"></i> Jatuh Tempo H-${a.daysLeft<=0?"0 (Hari Ini)":a.daysLeft}</span>`:h=`<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-[11px] font-black uppercase tracking-wider text-[var(--color-primary)] border shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.08); border-color: rgba(var(--color-primary-rgb), 0.25);"><i class="fa-solid fa-circle-check"></i> Tempo Berjalan (${a.daysLeft} Hari Lagi)</span>`,R("modal-tempo-detail-content",`
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
                        <h3 class="font-black text-base sm:text-lg text-slate-800 dark:text-white tracking-tight truncate">${m(t.customer?.name||"Pelanggan Anonim")}</h3>
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
                        <span class="font-mono font-bold text-slate-500 bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 rounded-lg text-[11px] border border-slate-200 dark:border-slate-700">#${m(t.orderId)}</span>
                        <a href="javascript:void(0)" onclick="window.sendSmartTempoWA('${t.orderId}')" class="font-mono text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1 font-bold text-[11px] bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-0.5 rounded-lg border border-emerald-200 dark:border-emerald-800">
                            <i class="fa-brands fa-whatsapp"></i> +${m(r||"-")}
                        </a>
                        <button type="button" onclick="if(typeof window.openDocPreview==='function') window.openDocPreview('tempo_customer_ledger', '${m(t.customer?.phone||t.customer?.wa||t.customer?.name||"")}');" class="text-[11px] font-bold text-[var(--color-primary)] hover:underline inline-flex items-center gap-1 cursor-pointer primary-bg-soft px-2.5 py-0.5 rounded-lg border primary-border">
                            <i class="fa-solid fa-address-book"></i> Kartu Pelanggan
                        </button>
                    </div>
                </div>
            </div>

            <!-- STATUS & JATUH TEMPO STRIP (LEGA & RAPI) -->
            <div class="mt-4 p-3 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-between gap-3 flex-wrap shadow-2xs">
                <div class="flex items-center gap-2 shrink-0">
                    ${h}
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
                        <span class="block text-[10px] font-bold uppercase tracking-wider text-slate-400">${d?"Pokok Belanja":"Total Transaksi"}</span>
                        <span class="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 font-mono mt-0.5 block">${g(d?u:p)}</span>
                    </div>
                    <div>
                        <span class="block text-[10px] font-bold uppercase tracking-wider text-slate-400">${d&&b>0?"Biaya PayLater":"Sudah Dibayar"}</span>
                        <span class="text-xs sm:text-sm font-bold ${d&&b>0,"text-emerald-600 dark:text-emerald-400"} font-mono mt-0.5 block">${d&&b>0?"+"+g(b):g(c)}</span>
                    </div>
                    <div>
                        <span class="block text-[10px] font-bold uppercase tracking-wider text-slate-400">${d&&b>0?"Sudah Dibayar":"Sisa Pokok"}</span>
                        <span class="text-xs sm:text-sm font-bold ${d&&b>0?"text-emerald-600 dark:text-emerald-400":"text-slate-700 dark:text-slate-300"} font-mono mt-0.5 block">${g(d&&b>0?c:a.sisa)}</span>
                    </div>
                    <div>
                        <span class="block text-[10px] font-bold uppercase tracking-wider ${a.isLate?"text-rose-500":"text-slate-400"}">Total Wajib Bayar</span>
                        <span class="text-sm sm:text-base font-black ${a.isLate?"text-rose-600 dark:text-rose-400":"text-slate-900 dark:text-white"} font-mono mt-0.5 block">${g(a.totalAkhir)}</span>
                    </div>
                </div>
                ${d&&f>0&&v>1?`
                <div class="mt-2.5 pt-2 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-xs text-slate-600 dark:text-slate-300">
                    <span class="font-bold flex items-center gap-1.5"><i class="fa-solid fa-calendar-days text-[var(--color-primary)]"></i> Tenor Cicilan: <b>${v} Bulan (${v}x Bayar)</b></span>
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
                <button type="button" onclick="window.switchTempoDetailTab('items')" class="py-2.5 px-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer ${Pe==="items"?"bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs":"text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"}">
                    <i class="fa-solid fa-box text-xs"></i>
                    <span>Barang (${l.length})</span>
                </button>
                <button type="button" onclick="window.switchTempoDetailTab('installments')" class="py-2.5 px-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer ${Pe==="installments"?"bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs":"text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"}">
                    <i class="fa-solid fa-receipt text-xs"></i>
                    <span>Cicilan (${n.length})</span>
                </button>
                <button type="button" onclick="window.switchTempoDetailTab('penalty_info')" class="py-2.5 px-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer ${Pe==="penalty_info"?"bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs":"text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"}">
                    <i class="fa-solid fa-gear text-xs"></i>
                    <span>Denda &amp; Info</span>
                </button>
            </div>
        </div>

        <!-- TAB BODY CONTENT -->
        <div class="p-5 sm:p-6 pb-20 sm:pb-24 overflow-y-auto flex-1 custom-scrollbar bg-white dark:bg-slate-900">
            ${to(t,a)}
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
    `)},to=(t,e)=>{const a=t.items||[],r=t.payment?.installments||[];if(Pe==="items")return a.length===0?`
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
                                    <h4 class="font-bold text-xs text-slate-800 dark:text-slate-100">${m(s.name||"Barang")}</h4>
                                    ${s.variantName?`<span class="inline-block mt-0.5 text-[10px] text-slate-500 font-medium">Varian: ${m(s.variantName)}</span>`:""}
                                    <div class="mt-1 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                                        ${s.qty} ${m(s.unit||"pcs")} × ${g(o)}
                                    </div>
                                </div>
                                <div class="text-right shrink-0">
                                    <span class="font-black text-xs text-slate-900 dark:text-white font-mono">${g(l)}</span>
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
                                            <span class="font-bold text-slate-800 dark:text-slate-200">${m(s.name||"Barang")}</span>
                                            ${s.variantName?`<span class="block text-[10px] text-slate-400">Varian: ${m(s.variantName)}</span>`:""}
                                        </td>
                                        <td class="py-3 px-3 text-center font-mono font-bold">${s.qty} ${m(s.unit||"pcs")}</td>
                                        <td class="py-3 px-3 text-right font-mono">${g(o)}</td>
                                        <td class="py-3 px-4 text-right font-black font-mono text-slate-800 dark:text-slate-100">${g(l)}</td>
                                    </tr>
                                `}).join("")}
                        </tbody>
                    </table>
                </div>
            </div>
        `;if(Pe==="installments"){const s=!!(t.payment?.isPaylater||t.isPaylater||t.payment?.subMethod==="paylater"||Array.isArray(t.payment?.paylaterSchedule)&&t.payment.paylaterSchedule.length>0),o=t.payment?.grandTotal||t.total||0;let l="";if(s){const c=Array.isArray(t.payment?.paylaterSchedule)&&t.payment.paylaterSchedule.length>0?t.payment.paylaterSchedule:[{installmentNo:1,dueDate:t.payment?.tempoDueDate||Date.now(),dueDateStr:ot(t.payment?.tempoDueDate||Date.now()),pokok:parseFloat(t.payment?.paylaterUsed||e.sisa)||0,adminFee:parseFloat(t.payment?.paylaterAdminFee)||0,serviceFee:parseFloat(t.payment?.paylaterServiceFee)||0,totalMonthly:parseFloat(t.payment?.paylaterMonthlyInstallment||t.payment?.tempoBalance||e.sisa)||0}],p=c.reduce((h,y)=>h+(parseFloat(y.totalMonthly)||0),0),d=Math.max(0,parseFloat(t.payment?.tempoBalance)||0),b=Math.max(0,p-d);let u=0;const f=c.map((h,y)=>{const T=parseFloat(h.totalMonthly)||0,M=u;u+=T;const C=u;let A="",S="",w="",I=0;if(b>=C)A="LUNAS",S="bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-700",w='<i class="fa-solid fa-circle-check"></i>',I=0;else if(b>M){const V=b-M;I=Math.max(0,T-V),A=`SEBAGIAN (Sisa ${g(I)})`,S="bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border border-amber-300 dark:border-amber-700",w='<i class="fa-solid fa-hourglass-half"></i>'}else I=T,h.dueDate&&Date.now()>h.dueDate?(A="JATUH TEMPO / TERLAMBAT",S="bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-400 border border-rose-300 dark:border-rose-700",w='<i class="fa-solid fa-circle-exclamation"></i>'):(A="MENUNGGU JATUH TEMPO",S="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700",w='<i class="fa-solid fa-clock"></i>');const N=h.dueDateStr||(h.dueDate?ot(h.dueDate):"-"),_=t.payment?.paylaterTenor==="2m"?"2 Bulan":t.payment?.paylaterTenor==="3m"?"3 Bulan":"30 Hari";return`
                  <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs space-y-2">
                    <div class="flex items-center justify-between flex-wrap gap-2">
                      <div class="flex items-center gap-2">
                        <span class="w-7 h-7 rounded-xl flex items-center justify-center text-xs font-black shrink-0 font-mono" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">
                          #${h.installmentNo||y+1}
                        </span>
                        <div>
                          <h4 class="font-bold text-xs text-slate-800 dark:text-slate-100">Angsuran Ke-${h.installmentNo||y+1} (${_})</h4>
                          <p class="text-[10px] text-slate-400">Jatuh Tempo: <span class="font-bold text-slate-700 dark:text-slate-300 font-mono">${N}</span></p>
                        </div>
                      </div>
                      <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black ${S}">
                        ${w} ${A}
                      </span>
                    </div>

                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px]">
                      <div>
                        <span class="text-[10px] text-slate-400 block">Pokok:</span>
                        <span class="font-bold text-slate-700 dark:text-slate-300 font-mono">${g(h.pokok||0)}</span>
                      </div>
                      <div>
                        <span class="text-[10px] text-slate-400 block">Biaya Admin:</span>
                        <span class="font-bold ${(h.adminFee||0)>0?"text-amber-600 dark:text-amber-400":"text-emerald-600 dark:text-emerald-400"} font-mono">
                          ${(h.adminFee||0)>0?g(h.adminFee):"Gratis"}
                        </span>
                      </div>
                      <div>
                        <span class="text-[10px] text-slate-400 block">Biaya Layanan:</span>
                        <span class="font-bold ${(h.serviceFee||0)>0?"text-amber-600 dark:text-amber-400":"text-emerald-600 dark:text-emerald-400"} font-mono">
                          ${(h.serviceFee||0)>0?g(h.serviceFee):"Gratis"}
                        </span>
                      </div>
                      <div>
                        <span class="text-[10px] text-slate-400 block">Total Angsuran:</span>
                        <span class="font-black text-xs font-mono" style="color:var(--color-primary)">${g(T)}</span>
                      </div>
                    </div>

                    ${I>0?`
                      <div class="pt-2 flex justify-end">
                        <button type="button" onclick="window.closeTempoDetailModal(); window.openTempoPaymentModal('${t.orderId}', ${I});"
                          class="px-3 py-1.5 rounded-xl text-white font-bold text-[11px] flex items-center gap-1.5 active:scale-95 transition-all shadow-2xs cursor-pointer"
                          style="background: var(--color-primary);">
                          <i class="fa-solid fa-money-bill-wave"></i>
                          <span>Bayar Angsuran Ini (${g(I)})</span>
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
                    Plafon Terpakai: ${g(t.payment?.paylaterUsed||o-(t.payment?.tempoDp||0))}
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
                    <button type="button" onclick="window.closeTempoDetailModal(); window.openTempoPaymentModal('${t.orderId}');" class="mt-4 px-4 py-2 rounded-xl text-white font-bold text-xs inline-flex items-center gap-1.5 shadow-sm active:scale-95 transition-all cursor-pointer" style="background: var(--color-primary);">
                        <i class="fa-solid fa-plus text-xs"></i>
                        <span>+ Catat Pembayaran Cicilan Pertama</span>
                    </button>
                </div>
            `:n=`
                <div class="space-y-3">
                    <div class="flex items-center justify-between text-xs font-bold text-slate-500 mb-1">
                        <span>Daftar Transaksi Cicilan (${r.length})</span>
                        <span>Total Masuk: <span class="text-emerald-600 font-mono">${g(r.reduce((c,p)=>c+(parseFloat(p.amount)||0),0))}</span></span>
                    </div>
                    <div class="space-y-2.5">
                        ${r.map((c,p)=>`
                            <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 flex items-center justify-between gap-3 shadow-2xs">
                                <div class="flex items-center gap-3">
                                    <div class="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-black shrink-0 bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400">
                                        #${p+1}
                                    </div>
                                    <div>
                                        <span class="font-black text-xs text-emerald-600 dark:text-emerald-400 font-mono">+${g(c.amount)}</span>
                                        <div class="flex items-center gap-2 mt-0.5 text-[10px] text-slate-400">
                                            <span>${wt(c.date)}</span>
                                            <span>•</span>
                                            <span class="font-bold text-slate-600 dark:text-slate-300">${m(c.method||"Tunai")}</span>
                                        </div>
                                        ${c.note?`<p class="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 italic">"${m(c.note)}"</p>`:""}
                                    </div>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                </div>
            `,`
          <div class="space-y-4">
            ${l}
            ${n}
          </div>
        `}return Pe==="penalty_info"?`
            <div class="space-y-4">
                <!-- Info Pengiriman & Catatan Pelanggan -->
                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 space-y-2.5 text-xs">
                    <span class="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Data Pelanggan &amp; Pengiriman</span>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                        <div>
                            <span class="text-slate-400 block text-[10px]">Alamat Pelanggan:</span>
                            <span class="font-medium text-slate-700 dark:text-slate-200 mt-0.5 block">${m(t.customer?.address||"Tidak dicantumkan")}</span>
                        </div>
                        <div>
                            <span class="text-slate-400 block text-[10px]">Nomor WhatsApp:</span>
                            <span class="font-medium font-mono text-slate-700 dark:text-slate-200 mt-0.5 block">+${m(t.customer?.wa||"-")}</span>
                        </div>
                    </div>
                    ${t.notes?`
                    <div class="pt-2 border-t border-slate-200/60 dark:border-slate-700">
                        <span class="text-slate-400 block text-[10px]">Catatan Pesanan:</span>
                        <p class="font-medium text-slate-700 dark:text-slate-200 mt-0.5 italic">"${m(t.notes)}"</p>
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
                            <span class="font-bold text-rose-600 dark:text-rose-400 font-mono mt-0.5 block">+${g(e.latePenalty)}</span>
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
        `:""},Us=(t,e=null)=>{ze();const a=E.find(b=>b.orderId===t);if(!a)return x("Data piutang tidak ditemukan!");const r=te(a),s=k("modal-tempo-payment"),o=k("modal-tempo-payment-box"),l=k("modal-tempo-payment-content");if(!s||!l)return;const n=Math.round(r.totalAkhir),c=!!(a.payment?.isPaylater||a.isPaylater||a.payment?.subMethod==="paylater");let p=0;if(c){const b=Array.isArray(a.payment?.paylaterSchedule)&&a.payment.paylaterSchedule.length>0?a.payment.paylaterSchedule:[];if(b.length>0){const u=b.reduce((y,T)=>y+(parseFloat(T.totalMonthly)||0),0),f=Math.max(0,parseFloat(a.payment?.tempoBalance)||0),v=Math.max(0,u-f);let h=0;for(const y of b){const T=parseFloat(y.totalMonthly)||0,M=h;if(h+=T,v<h){const C=Math.max(0,v-M);p=Math.round(Math.max(0,T-C));break}}}else parseFloat(a.payment?.paylaterMonthlyInstallment)>0&&(p=Math.round(parseFloat(a.payment.paylaterMonthlyInstallment)))}let d=n;e!=null&&!isNaN(e)?d=Math.min(n,Math.max(1,Math.round(e))):p>0&&p<n&&(d=Math.min(n,p)),R("modal-tempo-payment-content",`
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
                    <p class="text-xs text-slate-400">${m(a.customer?.name||"Pelanggan")} • #${m(a.orderId)}</p>
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
                    ${c?`
                    <div class="pt-2 border-t border-amber-200/60 dark:border-amber-800/40 flex items-center justify-between text-[11px] text-emerald-700 dark:text-emerald-400 font-bold">
                        <span class="flex items-center gap-1"><i class="fa-solid fa-bolt text-xs"></i> Putri PayLater (${a.payment?.paylaterTenor==="2m"?"2 Bulan":a.payment?.paylaterTenor==="3m"?"3 Bulan":"30 Hari"})</span>
                        <span class="font-mono">${g(a.payment?.paylaterMonthlyInstallment||p)}/bln</span>
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
                            value="${d}" 
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
                        ${p>0&&p<n?`
                        <button type="button" onclick="window.setQuickPayTempo(${p})" class="px-2.5 py-1 rounded-xl text-[10px] font-black border border-emerald-300 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 active:scale-95 transition-all shrink-0 flex items-center gap-1">
                            <i class="fa-solid fa-bolt text-[9px]"></i> 1 Angsuran (${g(p)})
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
                <button type="submit" class="h-12 px-6 rounded-2xl text-white font-bold text-xs shadow-glow transition-all active:scale-95 cursor-pointer flex items-center gap-2" style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                    <i class="fa-solid fa-check"></i>
                    <span>Simpan Pembayaran</span>
                </button>
            </div>
        </form>
    `),window.recalcTempoPayPreview(),ne(s,o),ct("tempoPayment")},Hs=(t=!1)=>{const e=k("modal-tempo-payment"),a=k("modal-tempo-payment-box");e&&jt("tempoPayment",t,()=>Z(e,a))};window.openTempoPaymentModal=Us;window.closeTempoPaymentModal=Hs;window.setQuickPayTempo=t=>{const e=k("tempo-pay-amount");e&&(e.value=Math.max(1,Math.round(t)),window.recalcTempoPayPreview())};window.recalcTempoPayPreview=()=>{const t=k("tempo-pay-amount"),e=k("tempo-pay-preview-box"),a=parseFloat(k("tempo-pay-total-wajib")?.value)||0;if(!t||!e)return;const r=parseFloat(t.value)||0,s=Math.max(0,a-r);r>=a&&a>0?e.innerHTML=`
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
                <span class="font-mono text-slate-800 dark:text-white text-sm font-black">${g(s)}</span>
            </div>
            <p class="text-[10px] text-slate-400 mt-0.5">Sisa saldo piutang akan diperbarui secara otomatis.</p>
        `};window.submitTempoPayment=async(t,e)=>{t.preventDefault(),L("Mencatat Pembayaran...");try{const a=parseFloat(k("tempo-pay-amount")?.value)||0,r=k("tempo-pay-date")?.value||new Date().toISOString(),s=k("tempo-pay-method")?.value||"Kas Tunai Toko",o=(k("tempo-pay-note")?.value||"").trim();if(a<=0)return D(),x("Nominal cicilan harus lebih besar dari Rp 0!");const l=P.collection("freshmart_orders").doc(e),n=await l.get();if(!n.exists)return D(),x("Pesanan tidak ditemukan!");const c=n.data();let p=parseFloat(c.payment?.tempoBalance)||0,d=Math.max(0,p-a),b=c.payment?.installments||[];b.push({date:r?new Date(r).getTime():Date.now(),amount:a,method:s,note:o||`Cicilan (${s})`});let u={"payment.tempoBalance":d,"payment.installments":b};d<=0&&(u["payment.paymentStatus"]="lunas",u.status="Selesai"),await l.update(u);const f=!!(c.payment?.isPaylater||c.isPaylater||c.payment?.subMethod==="paylater");if(f){const y=(c.customer?.wa||c.customer?.phone||"").replace(/\D/g,""),T=y.startsWith("0")?"62"+y.slice(1):y;if(T){const M=Ya(c.payment,p,d,a);try{const C=P.collection("freshmart").doc("cms_data").collection("customers").doc(T);if(M>0&&await P.runTransaction(async A=>{const S=await A.get(C);if(S.exists){const w=Math.max(0,parseFloat(S.data().paylaterUsed)||0),I=Math.max(0,w-M);A.update(C,{paylaterUsed:I})}}),M>0&&Array.isArray(i.customers)){const A=i.customers.find(S=>S&&(String(S.id)===T||String(S.phone).replace(/\D/g,"")===y||String(S.phone).replace(/\D/g,"")===T));A&&(A.paylaterUsed=Math.max(0,Math.max(0,parseFloat(A.paylaterUsed)||0)-M))}}catch(C){console.warn("[Tempo] Gagal pulihkan limit PayLater:",C)}}}if(d<=0)E=E.filter(y=>y.orderId!==e);else{const y=E.findIndex(T=>T.orderId===e);y!==-1&&(E[y].payment||(E[y].payment={}),E[y].payment.tempoBalance=d,E[y].payment.installments=b)}if(window.cachedPiutangOrders=E,Array.isArray(B)){let y=B.findIndex(T=>T.orderId===e);y!==-1&&(B[y].payment.tempoBalance=d,B[y].payment.installments=b,d<=0&&(B[y].payment.paymentStatus="lunas",B[y].status="Selesai"))}const v=k("modal-tempo-detail");if(v&&!v.classList.contains("hidden")&&fa===e)if(d<=0)window.closeTempoDetailModal();else{const y=E.find(T=>T.orderId===e);y&&ka(y)}let h=!1;if(s==="Kas Tunai Toko"&&typeof window.recordTempoPaymentToShift=="function"){const y=c.customer?.name||"Pelanggan";h=window.recordTempoPaymentToShift(a,e,`Cicilan #${e.split("-").pop()} (${y})`)}D(),window.closeTempoPaymentModal(),f?x("Cicilan dicatat & Limit Putri PayLater berhasil dipulihkan!"):h?x("Cicilan dicatat & otomatis masuk ke Kas Laci Kasir!"):x("Pembayaran cicilan berhasil dicatat!"),window.rAdmPiutang&&window.rAdmPiutang(),setTimeout(()=>{typeof window.showConfirm=="function"&&window.showConfirm(`Pembayaran cicilan Rp ${Math.round(a).toLocaleString("id-ID")} berhasil dicatat!<br><span class="text-xs text-slate-500">Cetak struk bukti pembayaran sekarang?</span>`,()=>{typeof window.printTempoReceiptDirect=="function"?window.printTempoReceiptDirect(e):typeof window.previewTempoReceipt=="function"&&window.previewTempoReceipt(e)},null,"Cetak Struk","Selesai")},350)}catch(a){D(),console.error("Gagal mencatat cicilan:",a),x("Gagal memproses cicilan: "+a.message)}};window.payTempoInstallment=t=>{window.openTempoPaymentModal(t)};const Gs=t=>{ze();const e=E.find(l=>l.orderId===t);if(!e)return x("Data piutang tidak ditemukan!");const a=te(e),r=k("modal-tempo-penalty"),s=k("modal-tempo-penalty-box"),o=k("modal-tempo-penalty-content");!r||!o||(R("modal-tempo-penalty-content",`
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
                    <p class="text-xs text-slate-400">${m(e.customer?.name||"Pelanggan")} • Sisa: ${g(a.sisa)}</p>
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
                <button type="submit" class="h-12 px-6 rounded-2xl text-white font-bold text-xs shadow-glow transition-all active:scale-95 cursor-pointer flex items-center gap-2" style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                    <i class="fa-solid fa-check"></i>
                    <span>Simpan Tarif Denda</span>
                </button>
            </div>
        </form>
    `),ne(r,s),ct("tempoPenalty"))},Vs=(t=!1)=>{const e=k("modal-tempo-penalty"),a=k("modal-tempo-penalty-box");e&&jt("tempoPenalty",t,()=>Z(e,a))};window.openTempoPenaltyModal=Gs;window.closeTempoPenaltyModal=Vs;const qs=()=>{ze();const t=k("modal-tempo-confirmations"),e=k("modal-tempo-confirmations-box");!t||!e||(ha(),ne(t,e),ct("tempoConfirmations"))},Et=(t=!1)=>{const e=k("modal-tempo-confirmations"),a=k("modal-tempo-confirmations-box");!e||!a||jt("tempoConfirmations",t,()=>Z(e,a))};window.openTempoConfirmationsModal=qs;window.closeTempoConfirmationsModal=Et;const ha=()=>{const t=k("modal-tempo-confirmations-content");if(!t)return;if(!W||W.length===0){t.innerHTML=`
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
        `;return}const e=W.map(a=>{const r=a.createdAt?new Date(a.createdAt).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}):"-",s=(a.customerPhone||"").replace(/\D/g,"");return`
            <div class="p-4 sm:p-5 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-3.5">
                <div class="flex items-start justify-between gap-3">
                    <div class="min-w-0">
                        <div class="flex items-center gap-2 flex-wrap">
                            <span class="px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-wider bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-300 border border-amber-300 dark:border-amber-700">
                                ${m(a.channel==="qris"?"QRIS Toko":a.bankName||"Transfer Bank")}
                            </span>
                            <span class="text-xs font-mono font-bold text-slate-400">Nota: #${m(a.orderId)}</span>
                        </div>
                        <h4 class="text-sm sm:text-base font-bold text-slate-800 dark:text-white mt-1 truncate">
                            ${m(a.customerName||"Pelanggan")}
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
                        <span class="font-bold not-italic text-slate-400">Catatan:</span> "${m(a.notes)}"
                    </div>
                `:""}

                <!-- FOTO BUKTI PEMBAYARAN -->
                ${a.buktiUrl?`
                    <div>
                        <p class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                            <i class="fa-solid fa-image text-slate-400"></i> Lampiran Bukti Transfer:
                        </p>
                        <div class="relative group rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 max-h-60 sm:max-h-72 bg-slate-100 dark:bg-slate-800 flex items-center justify-center shadow-2xs">
                            <img src="${m(he(a.buktiUrl))}" alt="Bukti Transfer" class="w-full max-h-60 sm:max-h-72 object-contain" onerror="this.src=''; this.alt='Gambar gagal dimuat';" loading="lazy">
                            <a href="${m(he(a.buktiUrl))}" target="_blank" rel="noopener noreferrer" class="absolute inset-0 bg-slate-900/50 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-1.5 text-white text-xs font-bold transition-opacity">
                                <i class="fa-solid fa-arrow-up-right-from-square"></i> Buka Ukuran Penuh
                            </a>
                        </div>
                    </div>
                `:`
                    <p class="text-[10px] font-semibold text-rose-500 italic"><i class="fa-solid fa-triangle-exclamation mr-1"></i> Tidak ada lampiran foto bukti transfer.</p>
                `}

                <!-- TOMBOL AKSI: APPROVE & REJECT -->
                <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end gap-2.5">
                    <button type="button" onclick="window.rejectTempoPaymentConfirmation('${m(a.id)}')" class="h-11 px-4 rounded-xl text-xs font-bold text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 border border-rose-200 dark:border-rose-900/50 transition-all active:scale-95 cursor-pointer flex items-center gap-1.5">
                        <i class="fa-solid fa-xmark"></i> Tolak
                    </button>
                    <button type="button" onclick="window.approveTempoPaymentConfirmation('${m(a.id)}')" class="h-11 px-5 rounded-xl text-xs font-bold text-white transition-all active:scale-95 cursor-pointer flex items-center gap-1.5 shadow-sm" style="background: var(--color-primary); box-shadow: 0 4px 12px rgba(var(--color-primary-rgb), 0.3);">
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
                    <p class="text-[10px] text-slate-400 font-semibold">${W.length} Bukti Transfer Menunggu Persetujuan</p>
                </div>
            </div>
            <button type="button" onclick="window.closeTempoConfirmationsModal()" class="w-8 h-8 flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-rose-100 hover:text-rose-500 transition-colors active:scale-95 cursor-pointer" title="Tutup">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </div>
        <div class="p-5 sm:p-6 pb-20 sm:pb-24 space-y-4 overflow-y-auto custom-scrollbar flex-1">
            ${e}
        </div>
    `},Ws=async t=>{const e=(W||[]).find(s=>s.id===t);if(!e)return x("Data konfirmasi tidak ditemukan atau telah diproses.","warning");const a=parseFloat(e.amount)||0,r=e.orderId;if(!r||a<=0)return x("Data konfirmasi tidak valid.","error");ue("Setujui Pembayaran Pelanggan",`Apakah Anda yakin ingin menyetujui bukti pembayaran ${g(a)} dari ${e.customerName||"Pelanggan"} untuk nota #${r}?

Saldo piutang nota akan otomatis terpotong dan limit kredit PayLater pelanggan akan langsung dipulihkan secara real-time.`,async()=>{L("Memproses persetujuan pembayaran...");try{const s=P.collection("freshmart_orders").doc(r),o=await s.get();if(!o.exists)throw new Error("Nota pesanan #"+r+" tidak ditemukan di database.");const l=o.data(),n=Math.max(0,parseFloat(l.payment?.tempoBalance)||0),c=Math.max(0,n-a),p=Array.isArray(l.payment?.installments)?[...l.payment.installments]:[],d="INS-"+Date.now().toString(36).toUpperCase(),b=Date.now(),u=new Date(b).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"});p.push({id:d,amount:a,date:b,dateStr:u,method:e.channel==="qris"?"QRIS Toko":e.bankName||"Transfer Bank",note:(e.notes?e.notes+" ":"")+`(Konfirmasi Mandiri ${e.confirmId||t})`,recordedBy:auth.currentUser?.email||"Owner / Kasir",timestamp:b,proofUrl:e.buktiUrl||""});let f=null;if(Array.isArray(l.payment?.paylaterSchedule)&&l.payment.paylaterSchedule.length>0){let y=p.reduce((T,M)=>T+(parseFloat(M.amount)||0),0);f=l.payment.paylaterSchedule.map(T=>{const M=parseFloat(T.totalMonthly)||0,C=y>=M;return C&&(y-=M),{...T,isPaid:C}})}const v={"payment.tempoBalance":c,"payment.installments":p,"payment.lastPaymentDate":b,"payment.tempoStatus":c<=0?"LUNAS":"DICICIL",updatedAt:b};if(f&&(v["payment.paylaterSchedule"]=f),c<=0&&(v["payment.paymentStatus"]="lunas",v["payment.isTempoPaid"]=!0,v.status="Selesai"),await s.update(v),!!(l.payment?.isPaylater||l.isPaylater||l.payment?.subMethod==="paylater")){const y=(l.customer?.wa||l.customer?.phone||e.customerPhone||"").replace(/\D/g,""),T=y.startsWith("0")?"62"+y.slice(1):y;if(T){const M=Ya(l.payment,n,c,a);if(M>0)try{const C=P.collection("freshmart").doc("cms_data").collection("customers").doc(T);if(await P.runTransaction(async A=>{const S=await A.get(C);if(S.exists){const w=Math.max(0,parseFloat(S.data().paylaterUsed)||0),I=Math.max(0,w-M);A.update(C,{paylaterUsed:I,updatedAt:b})}}),Array.isArray(i.customers)){const A=i.customers.find(S=>S&&(String(S.id)===T||String(S.phone).replace(/\D/g,"")===y||String(S.phone).replace(/\D/g,"")===T));A&&(A.paylaterUsed=Math.max(0,Math.max(0,parseFloat(A.paylaterUsed)||0)-M))}if(currentMember&&(currentMember.phone||currentMember.id)){const A=(currentMember.phone||currentMember.id).toString().replace(/\D/g,"");(A===y||A===T)&&(currentMember.paylaterUsed=Math.max(0,Math.max(0,parseFloat(currentMember.paylaterUsed)||0)-M))}}catch(C){console.warn("[Tempo] Gagal pulihkan limit PayLater:",C)}}}await P.collection("tempo_payment_confirmations").doc(t).update({status:"approved",approvedAt:b,approvedBy:auth.currentUser?.email||"Owner / Kasir"}),W=W.filter(y=>y.id!==t),D(),x(`Pembayaran ${g(a)} untuk nota #${r} disetujui! Saldo diperbarui & limit dipulihkan.`,"success"),W.length>0?ha():Et(),await Ft()}catch(s){D(),console.error("[Tempo] Gagal setujui pembayaran:",s),x("Gagal menyetujui pembayaran: "+s.message,"error")}},"Ya, Setujui")},zs=async t=>{if(!(W||[]).find(r=>r.id===t))return x("Data konfirmasi tidak ditemukan.","warning");const a=prompt('Masukkan alasan penolakan bukti pembayaran (misal: "Dana belum masuk mutasi bank" / "Bukti transfer buram/tidak terbaca"):',"Dana belum masuk ke mutasi rekening toko");if(a!==null){L("Menolak konfirmasi pembayaran...");try{const r=Date.now();await P.collection("tempo_payment_confirmations").doc(t).update({status:"rejected",rejectReason:a.trim()||"Ditolak oleh admin toko",rejectedAt:r,rejectedBy:auth.currentUser?.email||"Owner / Kasir"}),W=W.filter(s=>s.id!==t),D(),x("Konfirmasi pembayaran telah ditolak.","info"),W.length>0?ha():Et(),await Ft()}catch(r){D(),console.error("[Tempo] Gagal tolak pembayaran:",r),x("Gagal menolak konfirmasi: "+r.message,"error")}}};window.approveTempoPaymentConfirmation=Ws;window.rejectTempoPaymentConfirmation=zs;window.submitTempoPenalty=async(t,e)=>{t.preventDefault();const a=k("tempo-penalty-rate")?.value;let r=parseFloat(a);if(isNaN(r)||r<0)return x("Persentase tidak valid!");L("Menyimpan Denda...");try{await P.collection("freshmart_orders").doc(e).update({"payment.tempoPenaltyRate":r});const s=E.find(o=>o.orderId===e);s&&s.payment&&(s.payment.tempoPenaltyRate=r),D(),window.closeTempoPenaltyModal(),x("Persentase denda berhasil diperbarui!"),window.rAdmPiutang()}catch(s){D(),x("Gagal mengubah denda: "+s.message)}};window.editTempoPenalty=t=>{window.openTempoPenaltyModal(t)};window.stopTempoPenalty=(t,e,a)=>{let r="Konfirmasi Denda",s=a?"Lanjutkan perhitungan denda otomatis berjalan?":"Hentikan denda berjalan sekarang? (Nominal denda akan dibekukan di "+g(e)+")";ue(r,s,async()=>{L("Menyimpan...");try{await P.collection("freshmart_orders").doc(t).update({"payment.tempoPenaltyStopped":!a,"payment.tempoFixedPenalty":a?null:e});const l=E.find(n=>n.orderId===t);l&&l.payment&&(l.payment.tempoPenaltyStopped=!a,l.payment.tempoFixedPenalty=a?null:e),x(a?"Denda dilanjutkan!":"Denda berhasil dibekukan!"),window.rAdmPiutang()}catch(l){x("Gagal mengubah status denda: "+l.message)}D()},a?"Lanjutkan":"Bekukan")};window.previewTempoReceipt=async t=>{L("Memuat data struk...");try{const e=await P.collection("freshmart_orders").doc(t).get();if(!e.exists)return D(),x("Pesanan tidak ditemukan");const a=e.data();if(D(),typeof window.printTempoReceiptDirect=="function"){window.lastPrintedOrder={...a,orderId:a.orderId||t},window.printTempoReceiptDirect(a.orderId||t);return}const r=a.dateString?new Date(a.dateString).toLocaleString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}):"",s=i.store?.name||"Toko Putri",o=i.store?.wa||"",l=(f,v,h=32)=>{const y=h-f.length-v.length;return f+(y>0?" ".repeat(y):" ")+v};let n=`<div class="text-center font-bold" style="font-size:13px;margin-bottom:2px;">${m(s)}</div>`;o&&(n+=`<div class="text-center" style="margin-bottom:4px;">WA: ${m(o)}</div>`),n+=`<div class="text-center font-bold uppercase my-2" style="font-size:14px;border-bottom:1px solid #000;border-top:1px solid #000;padding:2px 0;">NOTA TEMPO${a.payment?.paymentStatus==="lunas"?" - LUNAS":""}</div>`,n+=`<div style="white-space:pre;">Order: #${a.orderId}</div><div style="white-space:pre;">Tgl  : ${r}</div><div style="white-space:pre;">Plg  : ${m(a.customer?.name||"Guest").substring(0,20)}</div>`,a.payment?.tempoDueDate&&(n+=`<div style="white-space:pre;">J.Tmp: ${new Date(a.payment.tempoDueDate).toLocaleDateString("id-ID")}</div>`),n+='<div class="border-b border-dashed border-black my-2"></div>';let c=0;if((a.items||[]).forEach(f=>{let v=f.variantName?` (${m(f.variantName)}${f.colorCode?" "+m(f.colorCode):""})`:"";const h=(m(f.name)+v+(f.poTime?" [PO]":"")).substring(0,32),y=f.effectivePrice!==void 0?f.effectivePrice:f.price||0,T=`${parseFloat(f.qty)} ${m(f.unit||"pcs")} x ${y.toLocaleString("id-ID")}`,M=(parseFloat(f.qty)*y).toLocaleString("id-ID");n+=`<div style="white-space:pre-wrap;font-weight:bold;word-break:break-all;">${h}</div><div style="white-space:pre;font-size:11px;">${l(T,M)}</div>`,f.poTime&&(n+=`<div style="white-space:pre;font-size:10px;font-style:italic;color:#4b5563;">* Estimasi PO: ${m(f.poTime)}</div>`),c+=parseFloat(f.qty)*y}),n+='<div class="border-b border-dashed border-black my-2"></div>',n+=`<div style="white-space:pre;font-weight:bold;">${l("Subtotal",c.toLocaleString("id-ID"))}</div>`,a.payment?.grandTotal&&a.payment.grandTotal!==c){let f=a.payment.grandTotal-c;f>0?n+=`<div style="white-space:pre;">${l("Ongkir/Biaya",f.toLocaleString("id-ID"))}</div>`:n+=`<div style="white-space:pre;">${l("Diskon",Math.abs(f).toLocaleString("id-ID"))}</div>`}n+=`<div style="white-space:pre;font-weight:bold;margin-top:4px;">${l("TOTAL KREDIT",(a.payment?.grandTotal||c).toLocaleString("id-ID"))}</div>`,n+='<div class="border-b border-black my-2" style="border-width:1px;"></div>';let p=0;a.payment?.installments&&a.payment.installments.length>0&&(n+='<div style="white-space:pre;font-weight:bold;margin-bottom:2px;">HISTORI CICILAN:</div>',a.payment.installments.forEach((f,v)=>{let h=new Date(f.date).toLocaleDateString("id-ID",{day:"2-digit",month:"short"}),y=f.amount.toLocaleString("id-ID");n+=`<div style="white-space:pre;">${l(`${v+1}. ${h}`,y)}</div>`,p+=f.amount}),n+=`<div style="white-space:pre;font-weight:bold;margin-top:2px;">${l("TOTAL DIBAYAR",p.toLocaleString("id-ID"))}</div>`,n+='<div class="border-b border-dashed border-black my-2"></div>');const d=te(a);n+=`<div style="white-space:pre;font-weight:bold;">${l("SISA POKOK",d.sisa.toLocaleString("id-ID"))}</div>`,d.latePenalty>0&&(n+=`<div style="white-space:pre;">${l("DENDA",Math.round(d.latePenalty).toLocaleString("id-ID"))}</div>`),n+='<div class="border-b border-black my-2" style="border-width:1px;"></div>',n+=`<div style="white-space:pre;font-weight:black;">${l("SISA TAGIHAN",Math.round(d.totalAkhir).toLocaleString("id-ID"))}</div>`,(a.items||[]).some(f=>f.poTime&&f.poTime!=="")&&(n+='<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre-wrap;font-size:9px;text-align:center;line-height:1.2;font-style:italic;color:#4b5563;margin-bottom:4px;">* Catatan: Untuk pesanan gabungan, produk PO akan dikirimkan menyusul tanpa dikenakan biaya tambahan.</div>'),n+='<div class="border-b border-dashed border-black my-2"></div><div class="text-center my-2" style="font-size:10px;">Terima kasih atas kepercayaannya.</div><div class="border-b border-dashed border-black my-2"></div><div style="height:20px;"></div>',R("receipt-paper-content",n);const u=k("receipt-preview-modal");u&&u.classList.contains("hidden")&&ct("receipt"),Ge("receipt-preview-modal"),setTimeout(()=>{k("receipt-preview-modal")&&k("receipt-preview-modal").classList.remove("opacity-0"),k("receipt-preview-modal-box")&&k("receipt-preview-modal-box").classList.remove("scale-95")},10)}catch(e){D(),x("Gagal memuat struk: "+e.message)}};window.markTempoPaid=async t=>{ue("Konfirmasi Pelunasan","Tandai seluruh sisa tagihan tempo pesanan ini sebagai LUNAS?",async()=>{try{if(await P.collection("freshmart_orders").doc(t).update({"payment.paymentStatus":"lunas","payment.tempoBalance":0,status:"Selesai"}),x("Tagihan tempo berhasil dilunasi!"),Array.isArray(B)){let e=B.findIndex(a=>a.orderId===t);e!==-1&&(B[e].payment.paymentStatus="lunas",B[e].payment.tempoBalance=0,B[e].status="Selesai")}window.rAdmPiutang()}catch(e){x("Gagal melunasi tagihan: "+e.message)}},"Ya, Lunasi")};window.sendSmartTempoWA=t=>{const e=E.find(y=>y.orderId===t);if(!e)return x("Data pesanan tidak ditemukan!");const a=e.customer?.wa||"",r=lt(a);if(!r)return x("Nomor WhatsApp pelanggan belum valid!");const s=te(e),o=i.store?.name||"Toko Putri",l=e.customer?.name||"Pelanggan",n=e.dateString?new Date(e.dateString).toLocaleDateString("id-ID",{day:"2-digit",month:"long",year:"numeric"}):"-",c=s.dueDate?new Date(s.dueDate).toLocaleDateString("id-ID",{day:"2-digit",month:"long",year:"numeric"}):"-";let p="";i.banks&&i.banks.length>0?p=i.banks.map(y=>`• *Bank ${y.bankName}*: ${y.bankAccount} (a.n ${y.bankOwner})`).join(`
`):p="Silakan hubungi admin/kasir untuk konfirmasi nomor rekening transfer.";const d=!!(e.payment?.isPaylater||e.isPaylater||e.payment?.subMethod==="paylater"),b=(parseFloat(e.payment?.paylaterAdminFee)||0)+(parseFloat(e.payment?.paylaterServiceFee)||0),u=parseFloat(e.payment?.paylaterUsed)||Math.max(0,s.sisa-b),f=parseFloat(e.payment?.paylaterMonthlyInstallment)||0,v=parseInt(e.payment?.paylaterMonths)||(e.payment?.paylaterTenor==="2m"?2:e.payment?.paylaterTenor==="3m"?3:1);let h="";if(s.isLate)h=`*PEMBERITAHUAN JATUH TEMPO ${d?"PUTRI PAYLATER":"TEMPO"} - ${o.toUpperCase()}*

Yth. Bpk/Ibu *${l}*,
Kami menginformasikan bahwa tagihan pembelian ${d?"Putri PayLater":"Tempo"} Anda telah *MELEWATI BATAS JATUH TEMPO* (${s.daysLate} hari keterlambatan).

📋 *Rincian Tagihan:*
• No. Pesanan: #${e.orderId}
`+(d?`• Layanan: Putri PayLater (${v>1?v+" Bulan":"30 Hari"})
`:"")+`• Tgl. Transaksi: ${n}
• Tgl. Jatuh Tempo: ${c}
`+(d&&b>0?`• Pokok Belanja: ${g(u)}
• Biaya PayLater: +${g(b)}
`:`• Sisa Pokok: ${g(s.sisa)}
`)+(d&&f>0&&v>1?`• Angsuran per Bulan (${v}x): ${g(f)}/bln
`:"")+(s.latePenalty>0?`• Denda (${s.rate}%/hari): ${g(s.latePenalty)}
`:"")+`• *TOTAL HARUS DIBAYAR: ${g(s.totalAkhir)}*

💳 *Pembayaran dapat ditransfer ke rekening resmi kami:*
${p}

Mohon kesediaannya untuk segera melakukan pelunasan dan mengirimkan bukti transfer ke WhatsApp ini.`+(d?" Limit belanja PayLater Anda akan otomatis pulih kembali setelah tagihan terlunasi.":"")+" Terima kasih banyak atas kerjasamanya. 🙏";else if(s.isDueSoon){let y=s.daysLeft<=0?"hari ini":`${s.daysLeft} hari lagi`;h=`*PENGINGAT JATUH TEMPO ${d?"PUTRI PAYLATER":"TEMPO"} - ${o.toUpperCase()}*

Halo Bpk/Ibu *${l}*,
Semoga sehat dan sukses selalu. Kami dari *${o}* menginfokan bahwa tagihan pembelian ${d?"Putri PayLater":"Tempo"} Anda akan jatuh tempo *${y}* (${c}).

📋 *Rincian Tagihan:*
• No. Pesanan: #${e.orderId}
`+(d?`• Layanan: Putri PayLater (${v>1?v+" Bulan":"30 Hari"})
`:"")+`• Tgl. Transaksi: ${n}
• Tgl. Jatuh Tempo: ${c}
`+(d&&b>0?`• Pokok Belanja: ${g(u)}
• Biaya PayLater: +${g(b)}
`:`• Sisa Pokok: ${g(s.sisa)}
`)+(d&&f>0&&v>1?`• Angsuran per Bulan (${v}x): ${g(f)}/bln
`:"")+`• *Total Tagihan: ${g(s.totalAkhir)}*

💳 *Pembayaran dapat ditransfer ke rekening resmi kami:*
${p}

Apabila sudah melakukan pembayaran, mohon abaikan pesan ini atau kirimkan bukti transfer ke nomor ini.`+(d?" Limit PayLater Anda akan langsung terisi kembali setelah konfirmasi.":"")+` Terima kasih atas kepercayaannya berbelanja di ${o}. 🙏`}else h=`*INFORMASI TAGIHAN ${d?"PUTRI PAYLATER":"TEMPO"} - ${o.toUpperCase()}*

Halo Bpk/Ibu *${l}*,
Berikut informasi rincian tagihan pembelian ${d?"Putri PayLater":"Tempo"} Anda di *${o}*:

📋 *Rincian Tagihan:*
• No. Pesanan: #${e.orderId}
`+(d?`• Layanan: Putri PayLater (${v>1?v+" Bulan":"30 Hari"})
`:"")+`• Tgl. Transaksi: ${n}
• Tgl. Jatuh Tempo: ${c} (tersisa ${s.daysLeft} hari)
`+(d&&b>0?`• Pokok Belanja: ${g(u)}
• Biaya PayLater: +${g(b)}
`:`• Sisa Pokok: ${g(s.sisa)}
`)+(d&&f>0&&v>1?`• Angsuran per Bulan (${v}x): ${g(f)}/bln
`:"")+`• *TOTAL TAGIHAN: ${g(s.totalAkhir)}*

💳 *Rekening Pembayaran Resmi:*
${p}

`+(d?`✨ Bayar tagihan tepat waktu untuk menjaga skor & limit kredit PayLater Anda tetap prima.

`:"")+`Terima kasih telah menjadi pelanggan setia ${o}. 🙏`;typeof window.openWhatsApp=="function"?window.openWhatsApp(r,h):za(r,h)};window.sendConsolidatedTempoWA=t=>{const e=String(t||"").trim();if(!e)return x("Identitas pelanggan tidak valid!");const a=E.filter(f=>{const v=String(f.customer?.phone||f.customer?.wa||"").replace(/\D/g,""),h=String(f.customer?.name||"").toLowerCase().trim(),y=e.replace(/\D/g,"");return!!(y.length>=8&&v.includes(y)||h&&e.toLowerCase().includes(h))});if(a.length===0)return x("Tidak ada nota piutang aktif untuk pelanggan ini.");const r=a[0].customer||{},s=r.wa||r.phone||"",o=lt(s);if(!o)return x("Nomor WhatsApp pelanggan belum valid!");const l=i.store?.name||"Toko Putri",n=r.name||"Pelanggan";let c="";i.banks&&i.banks.length>0?c=i.banks.map(f=>`• *Bank ${f.bankName}*: ${f.bankAccount} (a.n ${f.bankOwner})`).join(`
`):c="Silakan hubungi admin/kasir untuk konfirmasi nomor rekening transfer.";let p=0,d=0,b=a.map((f,v)=>{const h=te(f);p+=h.totalAkhir,d+=h.latePenalty,h.isLate;const y=h.dueDate?new Date(h.dueDate).toLocaleDateString("id-ID",{day:"2-digit",month:"short",year:"numeric"}):"-";let T=h.isLate?`⚠️ TERLAMBAT ${h.daysLate} HARI`:h.isDueSoon?`⏳ H-${h.daysLeft}`:"✅ Berjalan",M=`*${v+1}. Nota #${f.orderId}* (${T})
   • Jatuh Tempo: ${y}
   • Sisa Pokok: ${g(h.sisa)}
`;return h.latePenalty>0&&(M+=`   • Denda: ${g(h.latePenalty)}
`),M+=`   • *Subtotal Wajib Bayar: ${g(h.totalAkhir)}*`,M}).join(`

`),u=`*REKAPITULASI KARTU PIUTANG - ${l.toUpperCase()}*

Yth. Bpk/Ibu *${n}*,
Berikut rincian seluruh tagihan tempo Anda yang masih aktif (${a.length} Nota) di *${l}*:

${b}

══════════════════════
💰 *TOTAL KESELURUHAN PIUTANG: ${g(p)}*
`+(d>0?`(Termasuk total denda: ${g(d)})
`:"")+`══════════════════════

💳 *Pembayaran dapat ditransfer ke rekening resmi kami:*
${c}

Mohon kesediaannya untuk melakukan pembayaran dan mengirimkan bukti transfer ke WhatsApp ini. Terima kasih banyak atas kepercayaan dan kerjasamanya. 🙏`;typeof window.openWhatsApp=="function"?window.openWhatsApp(o,u):za(o,u)};window.switchTempoMainTab=t=>{re=t,va()};window.setTempoFilter=t=>{ke=t,va()};window.setInstallmentPeriod=t=>{ae=t,Ot()};window.setInstallmentMethod=t=>{ce=t,Ot()};window.onTempoSearch=t=>{be=t||"";const e=k("tempo-search-clear-btn");e&&e.classList.toggle("hidden",!be.trim()),re==="orders"?Js():Ot()};const Js=()=>{const t=k("tempo-cards-container");if(!t)return;let e=E.filter(a=>{const r=te(a);if(ke==="late"&&!r.isLate||ke==="due_soon"&&(!r.isDueSoon||r.isLate)||ke==="active"&&(r.isLate||r.isDueSoon))return!1;if(be.trim()){const s=be.trim().toLowerCase(),o=(a.customer?.name||"").toLowerCase(),l=(a.customer?.wa||"").toLowerCase(),n=(a.orderId||"").toLowerCase();if(!o.includes(s)&&!l.includes(s)&&!n.includes(s))return!1}return!0});if(e.length===0){t.innerHTML=`
            <div class="col-span-full bg-white dark:bg-slate-800 p-8 text-center rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <div class="w-16 h-16 bg-slate-100 dark:bg-slate-700/50 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-3">
                    <i class="fa-solid fa-filter-circle-xmark text-2xl"></i>
                </div>
                <h4 class="font-bold text-slate-700 dark:text-slate-200 text-sm uppercase tracking-wider">Tidak Ada Data</h4>
                <p class="text-slate-500 dark:text-slate-400 mt-1 text-xs font-medium">Tidak ada tagihan yang cocok dengan filter atau kata kunci pencarian.</p>
            </div>
        `;return}t.innerHTML=e.map(a=>ao(a)).join("")},ao=t=>{const e=te(t),a=lt(t.customer?.wa||""),r=ga(t.customer?.name||"Pelanggan"),s=e.dueDate?ot(e.dueDate):"-",o=m(t.customer?.phone||t.customer?.wa||t.customer?.name||""),l=!!(t.payment?.isPaylater||t.isPaylater||t.payment?.subMethod==="paylater"),n=(parseFloat(t.payment?.paylaterAdminFee)||0)+(parseFloat(t.payment?.paylaterServiceFee)||0),c=parseFloat(t.payment?.paylaterUsed)||Math.max(0,e.sisa-n),p=parseFloat(t.payment?.paylaterMonthlyInstallment)||0,d=parseInt(t.payment?.paylaterMonths)||(t.payment?.paylaterTenor==="2m"?2:t.payment?.paylaterTenor==="3m"?3:1);let b="",u="border-slate-200 dark:border-slate-700/80";return e.isLate?(u="border-rose-400 dark:border-rose-600 shadow-[0_0_15px_rgba(225,29,72,0.12)]",b=`<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-rose-50 text-rose-600 dark:bg-rose-950/50 dark:text-rose-400 border border-rose-200 dark:border-rose-800 shadow-2xs whitespace-nowrap"><i class="fa-solid fa-triangle-exclamation text-[8px]"></i> Terlambat ${e.daysLate} Hari</span>`):e.isDueSoon?(u="border-amber-400 dark:border-amber-600 shadow-[0_0_15px_rgba(245,158,11,0.12)]",b=`<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300 border border-amber-200 dark:border-amber-800 shadow-2xs whitespace-nowrap"><i class="fa-solid fa-clock text-[8px]"></i> H-${e.daysLeft<=0?"0 (Hari Ini)":e.daysLeft}</span>`):b=`<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-[var(--color-primary)] border shadow-2xs whitespace-nowrap" style="background: rgba(var(--color-primary-rgb), 0.08); border-color: rgba(var(--color-primary-rgb), 0.25);"><i class="fa-regular fa-clock text-[9px]"></i> Sisa ${e.daysLeft} Hari</span>`,`
    <div class="bg-white dark:bg-slate-800 p-4 sm:p-5 rounded-3xl border ${u} relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 shadow-sm flex flex-col justify-between cursor-pointer" onclick="window.openTempoDetailModal('${t.orderId}')">
        <div>
            <!-- BARIS 1: TOP BAR KARTU (NOTA & STATUS SISA HARI / JATUH TEMPO) -->
            <div class="flex items-center justify-between gap-2 mb-3.5 pb-2.5 border-b border-slate-100 dark:border-slate-700/60">
                <span class="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                    <i class="fa-solid fa-receipt text-slate-400 text-[10px]"></i> #${t.orderId}
                </span>
                <div class="shrink-0">
                    ${b}
                </div>
            </div>

            <!-- BARIS 2: AVATAR MONOGRAM, NAMA PELANGGAN, WA & BADGES -->
            <div class="flex items-start gap-3 mb-3">
                <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-xs font-black shrink-0 aspect-square shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);">
                    ${r}
                </div>
                <div class="min-w-0 flex-1">
                    <h3 class="font-bold text-slate-800 dark:text-slate-100 uppercase text-sm truncate">${m(t.customer?.name||"Anonim")}</h3>
                    <div class="flex items-center gap-2 mt-1 flex-wrap" onclick="event.stopPropagation()">
                        <p class="text-[11px] font-bold text-slate-500 flex items-center gap-1">
                            <i class="fa-brands fa-whatsapp text-emerald-500"></i>
                            <a href="javascript:void(0)" onclick="window.sendSmartTempoWA('${t.orderId}')" class="hover:underline text-slate-600 dark:text-slate-300 font-mono">+${m(a||"-")}</a>
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
                ${l&&n>0?`
                <div class="flex justify-between items-center text-xs">
                    <span class="font-bold text-slate-500">Pokok Belanja</span>
                    <span class="font-bold text-slate-700 dark:text-slate-300 font-mono">${g(c)}</span>
                </div>
                <div class="flex justify-between items-center text-xs">
                    <span class="font-bold text-slate-500">Biaya PayLater (${d>1?d+" Bulan":"30 Hari"})</span>
                    <span class="font-bold text-emerald-600 dark:text-emerald-400 font-mono">+${g(n)}</span>
                </div>
                ${p>0&&d>1?`
                <div class="flex justify-between items-center text-xs pt-1 border-t border-slate-200/50 dark:border-slate-700/50">
                    <span class="font-bold text-slate-500">Angsuran / Bulan (${d}x)</span>
                    <span class="font-bold text-[var(--color-primary)] font-mono">${g(p)}/bln</span>
                </div>`:""}
                `:`
                <div class="flex justify-between items-center text-xs">
                    <span class="font-bold text-slate-500">Sisa Pokok</span>
                    <span class="font-bold text-slate-700 dark:text-slate-300 font-mono">${g(e.sisa)}</span>
                </div>
                `}
                ${e.isLate?`
                <div class="flex justify-between items-center text-xs ${e.isStopped?"text-slate-500":"text-rose-600"}">
                    <span class="font-bold">Denda (${e.rate}%/hari) ${e.isStopped?'<span class="text-[9px] bg-slate-200 dark:bg-slate-700 px-1 py-0.5 rounded ml-1">STOPPED</span>':""}</span>
                    <span class="font-bold font-mono">+${g(e.latePenalty)}</span>
                </div>`:""}
            </div>
            
            <!-- TOTAL SISA TAGIHAN HIGHLIGHT -->
            <div class="flex justify-between items-center ${e.isLate?"bg-rose-50 text-rose-600 dark:bg-rose-950/30 dark:text-rose-400 border-rose-100 dark:border-rose-900/40":"bg-slate-100 dark:bg-slate-700/60 text-slate-800 dark:text-white border-slate-200 dark:border-slate-700"} p-3 rounded-2xl border mb-3">
                <span class="text-[10px] font-black uppercase tracking-wider">Total Tagihan:</span>
                <span class="text-sm font-black font-mono tracking-tight">${g(e.totalAkhir)}</span>
            </div>
        </div>
        
        <!-- ACTION BAR TOUCH ERGONOMIS 2-BARIS LEGA -->
        <div class="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-700/60" onclick="event.stopPropagation()">
            <!-- Baris 1: Rincian, Nota A4, Struk, Tagih WA -->
            <div class="grid grid-cols-4 gap-1.5">
                <button type="button" onclick="window.openTempoDetailModal('${t.orderId}')" class="btn-native-action h-10 sm:h-9 px-1 rounded-xl font-bold text-[11px] transition-all active:scale-95 border flex flex-col sm:flex-row items-center justify-center gap-1 cursor-pointer shadow-2xs text-center" style="background: rgba(var(--color-primary-rgb), 0.08); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25);" title="Buka Rincian Nota &amp; Histori">
                    <i class="fa-solid fa-eye text-xs"></i>
                    <span class="truncate">Rincian</span>
                </button>
                <button type="button" onclick="if(typeof window.openDocPreview==='function') window.openDocPreview('tempo_invoice', '${t.orderId}');" class="btn-native-action h-10 sm:h-9 px-1 rounded-xl bg-blue-50 hover:bg-blue-100 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 flex flex-col sm:flex-row items-center justify-center gap-1 text-[11px] font-bold transition-all cursor-pointer shadow-2xs active:scale-95 text-center" title="Cetak Nota Resmi A4 / PDF / WA">
                    <i class="fa-solid fa-file-invoice text-xs"></i>
                    <span class="truncate">Nota A4</span>
                </button>
                <button type="button" onclick="if(typeof window.printTempoReceiptDirect==='function'){window.printTempoReceiptDirect('${t.orderId}');}else{window.previewTempoReceipt('${t.orderId}');}" class="btn-native-action h-10 sm:h-9 px-1 bg-amber-500 hover:bg-amber-600 text-white rounded-xl flex flex-col sm:flex-row items-center justify-center gap-1 text-[11px] font-bold shadow-2xs transition-all active:scale-95 cursor-pointer text-center" title="Cetak Struk Thermal Nota Tempo">
                    <i class="fa-solid fa-print text-xs"></i>
                    <span class="truncate">Struk</span>
                </button>
                <button type="button" onclick="window.sendSmartTempoWA('${t.orderId}')" class="btn-native-action h-10 sm:h-9 px-1 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl flex flex-col sm:flex-row items-center justify-center gap-1 text-[11px] font-bold transition-all cursor-pointer shadow-2xs active:scale-95 text-center" title="Kirim Tagihan Otomatis WhatsApp">
                    <i class="fa-brands fa-whatsapp text-xs"></i>
                    <span class="truncate">WA</span>
                </button>
            </div>

            <!-- Baris 2: Cicil, Lunas, & Kartu Pelanggan -->
            <div class="grid grid-cols-3 gap-1.5">
                <button type="button" onclick="window.openTempoPaymentModal('${t.orderId}')" class="btn-native-action h-10 sm:h-9 bg-white dark:bg-slate-700 border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.08)] rounded-xl flex items-center justify-center gap-1.5 text-xs font-bold transition-all active:scale-95 shadow-2xs cursor-pointer">
                    <i class="fa-solid fa-money-bill-wave text-xs"></i> Cicil
                </button>
                <button type="button" onclick="window.markTempoPaid('${t.orderId}')" class="btn-native-action h-10 sm:h-9 text-white rounded-xl flex items-center justify-center gap-1.5 text-xs font-bold shadow-sm transition-all active:scale-95 cursor-pointer" style="background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);">
                    <i class="fa-solid fa-check-double text-xs"></i> Lunas
                </button>
                <button type="button" onclick="if(typeof window.openDocPreview==='function') window.openDocPreview('tempo_customer_ledger', '${o}');" class="btn-native-action h-10 sm:h-9 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 rounded-xl flex items-center justify-center gap-1.5 text-xs font-bold transition-all active:scale-95 shadow-2xs cursor-pointer" title="Cetak Kartu Piutang Pelanggan">
                    <i class="fa-solid fa-address-book text-xs text-amber-500"></i> Kartu
                </button>
            </div>
        </div>
    </div>`},so=()=>{const t=new Map;E.forEach(a=>{const r=String(a.customer?.phone||a.customer?.wa||"").trim(),s=String(a.customer?.name||"Pelanggan Anonim").trim(),o=r||s;if(!t.has(o)){const d=(r||"").replace(/\D/g,""),b=(i.customers||[]).find(u=>u&&(String(u.id)===d||String(u.phone).replace(/\D/g,"")===d));t.set(o,{key:o,name:s,phone:r,wa:a.customer?.wa||r,customerType:a.customerType||(a.customer?.isMember?"Member":"Umum"),paylaterActive:b?b.paylaterActive===!0||b.paylaterActive==="true":!1,paylaterLimit:b&&parseFloat(b.paylaterLimit)||0,paylaterUsed:b&&parseFloat(b.paylaterUsed)||0,orders:[],totalAwal:0,totalPaid:0,totalSisaPokok:0,totalDenda:0,totalWajibBayar:0,hasLate:!1,hasDueSoon:!1})}const l=t.get(o),n=te(a),c=a.payment?.grandTotal&&a.payment.grandTotal>0?a.payment.grandTotal:parseFloat(a.total)||n.sisa,p=(a.payment?.installments||[]).reduce((d,b)=>d+(parseFloat(b.amount)||0),0);l.orders.push(a),l.totalAwal+=c,l.totalPaid+=p,l.totalSisaPokok+=n.sisa,l.totalDenda+=n.latePenalty,l.totalWajibBayar+=n.totalAkhir,n.isLate&&(l.hasLate=!0),n.isDueSoon&&(l.hasDueSoon=!0)});let e=Array.from(t.values());if(be.trim()){const a=be.trim().toLowerCase();e=e.filter(r=>r.name.toLowerCase().includes(a)||r.phone.toLowerCase().includes(a)||r.orders.some(s=>(s.orderId||"").toLowerCase().includes(a)))}return e.sort((a,r)=>a.hasLate&&!r.hasLate?-1:!a.hasLate&&r.hasLate?1:r.totalWajibBayar-a.totalWajibBayar),e.length===0?`
            <div class="bg-white dark:bg-slate-800 p-10 text-center rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <div class="w-16 h-16 bg-slate-100 dark:bg-slate-700/50 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-3">
                    <i class="fa-solid fa-users-slash text-2xl"></i>
                </div>
                <h4 class="font-bold text-slate-700 dark:text-slate-200 text-sm uppercase tracking-wider">Tidak Ada Data Pelanggan</h4>
                <p class="text-slate-500 dark:text-slate-400 mt-1 text-xs font-medium">Tidak ada pelanggan berpiutang yang cocok dengan kata kunci pencarian.</p>
            </div>
        `:`
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            ${e.map(a=>{const r=ga(a.name),s=lt(a.wa||a.phone||"");let o="",l="border-slate-200 dark:border-slate-700/80";return a.hasLate?(l="border-rose-400 dark:border-rose-600 shadow-[0_0_15px_rgba(225,29,72,0.1)]",o='<span class="px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400 border border-rose-200 dark:border-rose-800 flex items-center gap-1"><i class="fa-solid fa-triangle-exclamation"></i> Ada Terlambat</span>'):a.hasDueSoon?(l="border-amber-400 dark:border-amber-600 shadow-[0_0_15px_rgba(245,158,11,0.1)]",o='<span class="px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400 border border-amber-200 dark:border-amber-800 flex items-center gap-1"><i class="fa-solid fa-clock"></i> Jatuh Tempo Dekat</span>'):o='<span class="px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 flex items-center gap-1"><i class="fa-solid fa-circle-check"></i> Berjalan Lancar</span>',`
                <div class="bg-white dark:bg-slate-800 p-4 sm:p-5 rounded-3xl border ${l} shadow-sm flex flex-col justify-between space-y-4">
                    <div>
                        <!-- Header Pelanggan -->
                        <div class="flex items-start justify-between gap-3">
                            <div class="flex items-center gap-3 min-w-0">
                                <div class="w-11 h-11 rounded-2xl flex items-center justify-center text-sm font-black shrink-0 aspect-square shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);">
                                    ${r}
                                </div>
                                <div class="min-w-0">
                                    <h3 class="font-bold text-slate-800 dark:text-slate-100 text-sm truncate uppercase">${m(a.name)}</h3>
                                    <div class="flex items-center gap-2 mt-0.5 flex-wrap">
                                        <p class="text-[11px] font-bold text-slate-500 font-mono flex items-center gap-1">
                                            <i class="fa-brands fa-whatsapp text-emerald-500"></i> +${m(s||"-")}
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
                                ${a.orders.map(n=>{const c=te(n),p=c.dueDate?ot(c.dueDate):"-";return`
                                        <div onclick="window.openTempoDetailModal('${n.orderId}')" class="p-2 rounded-xl bg-white dark:bg-slate-700/50 border border-slate-100 dark:border-slate-700 flex items-center justify-between text-[11px] hover:border-[var(--color-primary)] transition-all cursor-pointer">
                                            <div class="flex items-center gap-1.5">
                                                <i class="fa-solid fa-file-invoice text-slate-400 text-[10px]"></i>
                                                <span class="font-bold font-mono text-slate-700 dark:text-slate-200">#${m(n.orderId)}</span>
                                                <span class="text-[9px] text-slate-400 font-medium font-mono">(${p})</span>
                                            </div>
                                            <span class="font-bold font-mono ${c.isLate?"text-rose-600":"text-slate-800 dark:text-slate-100"}">${g(c.totalAkhir)}</span>
                                        </div>
                                    `}).join("")}
                            </div>
                        </div>
                    </div>

                    <!-- Tombol Aksi Tab Pelanggan -->
                    <div class="pt-2 border-t border-slate-100 dark:border-slate-700/60 grid grid-cols-2 gap-2">
                        <button type="button" onclick="if(typeof window.openDocPreview==='function') window.openDocPreview('tempo_customer_ledger', '${m(a.phone||a.name)}');" class="btn-native-action py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-100 font-bold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer shadow-2xs" title="Cetak Lembar Kartu Piutang Resmi A4 / PDF / WA">
                            <i class="fa-solid fa-file-invoice" style="color: var(--color-primary)"></i>
                            <span>Cetak Kartu A4</span>
                        </button>
                        <button type="button" onclick="window.sendConsolidatedTempoWA('${m(a.phone||a.name)}')" class="py-2.5 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer shadow-2xs" title="Kirim Tagihan WhatsApp Seluruh Nota">
                            <i class="fa-brands fa-whatsapp text-sm"></i>
                            <span>Tagih Semua WA</span>
                        </button>
                    </div>
                </div>
                `}).join("")}
        </div>
    `},ro=()=>{let t=[];E.forEach(n=>{(n.payment?.installments||[]).forEach((p,d)=>{t.push({...p,installmentIndex:d+1,orderId:n.orderId,customerName:n.customer?.name||"Pelanggan",customerPhone:n.customer?.phone||n.customer?.wa||"",customerType:n.customerType||(n.customer?.isMember?"Member":"Umum"),orderDate:n.dateString})})});const e=new Date,a=new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime(),r=Date.now()-7*24*60*60*1e3,s=Date.now()-30*24*60*60*1e3;let o=t.filter(n=>{const c=new Date(n.date||0).getTime();if(ae==="today"&&c<a||ae==="week"&&c<r||ae==="month"&&c<s)return!1;const p=(n.method||"cash").toLowerCase();if(ce!=="all"&&p!==ce)return!1;if(be.trim()){const d=be.trim().toLowerCase(),b=n.customerName.toLowerCase(),u=n.customerPhone.toLowerCase(),f=n.orderId.toLowerCase(),v=(n.notes||"").toLowerCase();if(!b.includes(d)&&!u.includes(d)&&!f.includes(d)&&!v.includes(d))return!1}return!0});o.sort((n,c)=>new Date(c.date||0)-new Date(n.date||0));const l=o.reduce((n,c)=>n+(parseFloat(c.amount)||0),0);return`
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
                        <button onclick="window.setInstallmentMethod('all')" class="px-2.5 py-1.5 rounded-xl border text-[10px] transition-all cursor-pointer ${ce==="all"?"bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-transparent":"bg-slate-50 dark:bg-slate-900 text-slate-500 border-slate-200 dark:border-slate-700"}">
                            Semua Metode
                        </button>
                        <button onclick="window.setInstallmentMethod('cash')" class="px-2.5 py-1.5 rounded-xl border text-[10px] transition-all cursor-pointer inline-flex items-center gap-1 ${ce==="cash"?"bg-emerald-600 text-white border-transparent":"bg-slate-50 dark:bg-slate-900 text-slate-500 border-slate-200 dark:border-slate-700"}">
                            <i class="fa-solid fa-money-bill-wave ${ce==="cash"?"text-white":"text-emerald-500"}"></i> Tunai
                        </button>
                        <button onclick="window.setInstallmentMethod('transfer')" class="px-2.5 py-1.5 rounded-xl border text-[10px] transition-all cursor-pointer inline-flex items-center gap-1 ${ce==="transfer"?"bg-blue-600 text-white border-transparent":"bg-slate-50 dark:bg-slate-900 text-slate-500 border-slate-200 dark:border-slate-700"}">
                            <i class="fa-solid fa-building-columns ${ce==="transfer"?"text-white":"text-blue-500"}"></i> Transfer
                        </button>
                        <button onclick="window.setInstallmentMethod('qris')" class="px-2.5 py-1.5 rounded-xl border text-[10px] transition-all cursor-pointer inline-flex items-center gap-1 ${ce==="qris"?"bg-purple-600 text-white border-transparent":"bg-slate-50 dark:bg-slate-900 text-slate-500 border-slate-200 dark:border-slate-700"}">
                            <i class="fa-solid fa-qrcode ${ce==="qris"?"text-white":"text-purple-500"}"></i> QRIS
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
                        <span class="text-base font-black font-mono text-emerald-600 dark:text-emerald-400">${g(l)}</span>
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
                    ${o.map(n=>{const c=wt(n.date),p=(n.method||"cash").toUpperCase();return`
                        <div class="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200/90 dark:border-slate-700 shadow-2xs space-y-2">
                            <div class="flex items-start justify-between gap-2">
                                <div>
                                    <h4 class="font-bold text-xs text-slate-800 dark:text-slate-100">${m(n.customerName)}</h4>
                                    <p class="text-[10px] text-slate-400 font-mono mt-0.5">${c}</p>
                                </div>
                                <span class="text-sm font-black font-mono text-emerald-600 dark:text-emerald-400">+${g(n.amount)}</span>
                            </div>
                            <div class="flex items-center justify-between text-[11px] pt-2 border-t border-slate-100 dark:border-slate-700/60">
                                <span class="font-mono text-slate-500">Nota: <a href="javascript:void(0)" onclick="window.openTempoDetailModal('${n.orderId}')" class="font-bold text-[var(--color-primary)] hover:underline">#${m(n.orderId)}</a></span>
                                <span class="px-2 py-0.5 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                                    ${p}
                                </span>
                            </div>
                            ${n.notes?`<p class="text-[10px] italic text-slate-500 bg-slate-50 dark:bg-slate-900/40 p-2 rounded-xl border border-slate-100 dark:border-slate-800">${m(n.notes)}</p>`:""}
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
                            ${o.map(n=>{const c=wt(n.date),p=(n.method||"cash").toUpperCase();return`
                                <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-700/30 transition-colors">
                                    <td class="py-3 px-4 font-mono text-slate-500 whitespace-nowrap">${c}</td>
                                    <td class="py-3 px-3">
                                        <span class="font-bold text-slate-800 dark:text-slate-100 block">${m(n.customerName)}</span>
                                        <span class="text-[10px] font-mono text-slate-400">${m(n.customerPhone||"-")}</span>
                                    </td>
                                    <td class="py-3 px-3 font-mono font-bold">
                                        <a href="javascript:void(0)" onclick="window.openTempoDetailModal('${n.orderId}')" class="text-[var(--color-primary)] hover:underline">#${m(n.orderId)}</a>
                                    </td>
                                    <td class="py-3 px-3 text-center">
                                        <span class="px-2 py-0.5 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                                            ${p}
                                        </span>
                                    </td>
                                    <td class="py-3 px-3 text-right font-black font-mono text-emerald-600 dark:text-emerald-400 whitespace-nowrap">
                                        +${g(n.amount)}
                                    </td>
                                    <td class="py-3 px-3 text-slate-600 dark:text-slate-300">
                                        <span>${m(n.cashierName||"Kasir")}</span>
                                        ${n.notes?`<span class="block text-[10px] italic text-slate-400 truncate max-w-[150px]" title="${m(n.notes)}">${m(n.notes)}</span>`:""}
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
    `},va=()=>{ze();let t=0,e=0,a=0,r=0,s=0;const o=new Set;let l=0;E.forEach(c=>{const p=te(c);t+=p.totalAkhir,p.isLate?(e+=p.totalAkhir,a++):p.isDueSoon?r++:s++;const d=String(c.customer?.phone||c.customer?.wa||c.customer?.name||"").trim();d&&o.add(d);const b=c.payment?.installments||[];l+=b.length});let n=`
    <div class="max-w-full pb-12 fade-in-scale text-sm space-y-5">
        
        ${W.length>0?`
        <!-- BANNER ANTREAN KONFIRMASI PEMBAYARAN MASUK PELANGGAN -->
        <div class="p-4 sm:p-5 rounded-3xl border border-[var(--color-primary)]/30 dark:border-[var(--color-primary)]/40 bg-gradient-to-r from-[rgba(var(--color-primary-rgb),0.12)] via-[rgba(var(--color-primary-rgb),0.04)] to-transparent dark:from-[rgba(var(--color-primary-rgb),0.18)] dark:to-slate-900/60 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div class="flex items-center gap-3.5">
                <div class="w-12 h-12 rounded-2xl text-white flex items-center justify-center shrink-0 relative" style="background: var(--color-primary); box-shadow: 0 4px 12px rgba(var(--color-primary-rgb), 0.35);">
                    <i class="fa-solid fa-receipt text-xl"></i>
                    <span class="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-rose-500 text-white text-[10px] font-black flex items-center justify-center border-2 border-white dark:border-slate-900 animate-bounce">
                        ${W.length}
                    </span>
                </div>
                <div>
                    <h4 class="font-black text-slate-800 dark:text-white text-sm sm:text-base flex items-center gap-2">
                        Konfirmasi Pembayaran Pelanggan Masuk
                        <span class="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-[rgba(var(--color-primary-rgb),0.12)] text-[var(--color-primary)] border border-[var(--color-primary)]/30">
                            ${W.length} Perlu Verifikasi
                        </span>
                    </h4>
                    <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        Pelanggan telah mengunggah bukti transfer Bank / QRIS toko untuk cicilan tempo. Cek bukti mutasi dan setujui untuk memperbarui saldo &amp; memulihkan limit PayLater pelanggan.
                    </p>
                </div>
            </div>
            <button type="button" onclick="window.openTempoConfirmationsModal()" class="px-5 py-2.5 rounded-xl text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer shrink-0" style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                <i class="fa-solid fa-eye text-sm"></i>
                <span>Periksa Bukti (${W.length})</span>
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
                    <p class="text-base sm:text-lg font-black text-slate-900 dark:text-white font-mono mt-0.5 tracking-tight">${g(t)}</p>
                </div>
            </div>

            <div class="bg-white dark:bg-slate-800 p-4 rounded-3xl border border-rose-200 dark:border-rose-900/60 shadow-sm flex items-center gap-3.5 relative overflow-hidden">
                <div class="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-rose-50 text-rose-600 dark:bg-rose-950/50 dark:text-rose-400 border border-rose-200 dark:border-rose-800">
                    <i class="fa-solid fa-triangle-exclamation text-xl"></i>
                </div>
                <div class="min-w-0">
                    <p class="text-[9px] font-black text-rose-500 uppercase tracking-widest">Piutang Terlambat</p>
                    <p class="text-base sm:text-lg font-black text-rose-600 dark:text-rose-400 font-mono mt-0.5 tracking-tight">${g(e)}</p>
                </div>
            </div>

            <div class="bg-white dark:bg-slate-800 p-4 rounded-3xl border border-slate-200/90 dark:border-slate-700 shadow-sm flex items-center gap-3.5 relative overflow-hidden">
                <div class="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-amber-50 text-amber-600 dark:bg-amber-950/50 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
                    <i class="fa-solid fa-file-invoice-dollar text-xl"></i>
                </div>
                <div class="min-w-0">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Total Nota Tempo</p>
                    <p class="text-base sm:text-lg font-black text-slate-900 dark:text-white font-mono mt-0.5 tracking-tight">${E.length} Nota (${o.size} Debitur)</p>
                </div>
            </div>
        </div>

        <!-- SHORTCUT KE PUSAT LAPORAN UTANG PIUTANG & AKSI DOKUMEN REKAP -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 px-1">
            <span class="text-[11px] font-bold text-slate-500 dark:text-slate-400">Manajemen Penagihan &amp; Cicilan Piutang Toko</span>
            <div class="flex items-center gap-2 flex-wrap">
                <button type="button" onclick="window.printTempoRecapA4()" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/60 shadow-2xs transition-all active:scale-95 cursor-pointer" title="Cetak Rekap Buku Piutang Toko A4 / PDF">
                    <i class="fa-solid fa-print text-xs" style="color: var(--color-primary)"></i>
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
            <button type="button" onclick="window.switchTempoMainTab('orders')" class="py-2.5 px-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer ${re==="orders"?"bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs":"text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"}">
                <i class="fa-solid fa-file-invoice text-xs"></i>
                <span>Daftar Nota (${E.length})</span>
            </button>
            <button type="button" onclick="window.switchTempoMainTab('customers')" class="py-2.5 px-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer ${re==="customers"?"bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs":"text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"}">
                <i class="fa-solid fa-address-book text-xs text-amber-500"></i>
                <span>Kartu Pelanggan (${o.size})</span>
            </button>
            <button type="button" onclick="window.switchTempoMainTab('installments')" class="py-2.5 px-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer ${re==="installments"?"bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs":"text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"}">
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
                    value="${m(be)}"
                    placeholder="${re==="orders"?"Cari nama pelanggan, nomor WhatsApp, atau ID nota tempo...":re==="customers"?"Cari nama pelanggan atau nomor WhatsApp...":"Cari transaksi cicilan, nama, nomor nota, atau catatan..."}" 
                    oninput="window.onTempoSearch(this.value)"
                    class="w-full pl-9 pr-8 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl text-xs font-medium text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)] transition-all">
                <button type="button" id="tempo-search-clear-btn" onclick="window.onTempoSearch(''); const ti=el('tempo-search-input'); if(ti){ti.value='';ti.focus();}" class="${be?"":"hidden"} absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors active:scale-90" title="Hapus pencarian">
                    <i class="fa-solid fa-circle-xmark text-sm"></i>
                </button>
            </div>

            ${re==="orders"?`
            <!-- FILTER STATUS SEGMENTED CONTROL (TAB ORDERS) -->
            <div class="flex items-center gap-2 overflow-x-auto pb-1 hide-scrollbar text-xs font-bold uppercase tracking-wider">
                <button onclick="window.setTempoFilter('all')" 
                    class="px-3.5 py-2 rounded-xl border transition-all shrink-0 cursor-pointer active:scale-95 ${ke==="all"?"text-white border-transparent shadow-xs":"bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100"}"
                    style="${ke==="all"?"background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);":""}">
                    Semua (${E.length})
                </button>
                <button onclick="window.setTempoFilter('late')" 
                    class="px-3.5 py-2 rounded-xl border transition-all shrink-0 cursor-pointer active:scale-95 ${ke==="late"?"bg-rose-600 text-white border-rose-600 shadow-xs":"bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-900/50 hover:bg-rose-100"}">
                    <i class="fa-solid fa-triangle-exclamation mr-1"></i> Terlambat (${a})
                </button>
                <button onclick="window.setTempoFilter('due_soon')" 
                    class="px-3.5 py-2 rounded-xl border transition-all shrink-0 cursor-pointer active:scale-95 ${ke==="due_soon"?"bg-amber-500 text-white border-amber-500 shadow-xs":"bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-900/50 hover:bg-amber-100"}">
                    <i class="fa-solid fa-clock mr-1"></i> H-3 Jatuh Tempo (${r})
                </button>
                <button onclick="window.setTempoFilter('active')" 
                    class="px-3.5 py-2 rounded-xl border transition-all shrink-0 cursor-pointer active:scale-95 ${ke==="active"?"bg-emerald-600 text-white border-emerald-600 shadow-xs":"bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900/50 hover:bg-emerald-100"}">
                    <i class="fa-solid fa-circle-check mr-1"></i> Berjalan Lancar (${s})
                </button>
            </div>
            `:""}
        </div>

        <!-- CONTAINER KONTEN TAB AKTIF (SEAMLESS ZERO-FLICKER) -->
        <div id="tempo-tab-content-container"></div>
    </div>`;R("admin-content",n),Ot()},Ot=()=>{const t=k("tempo-tab-content-container");t&&(re==="orders"?E.length===0?t.innerHTML=`
            <div class="bg-white dark:bg-slate-800 p-10 text-center rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary);">
                    <i class="fa-solid fa-check-double text-4xl"></i>
                </div>
                <h3 class="font-black text-slate-800 dark:text-slate-100 text-base uppercase tracking-widest">Semua Tagihan Piutang Lunas!</h3>
                <p class="text-slate-500 dark:text-slate-400 mt-1.5 text-xs font-medium max-w-sm mx-auto">Tidak ada piutang tempo penjualan pelanggan yang sedang aktif atau tertunda saat ini.</p>
            </div>`:(t.innerHTML='<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" id="tempo-cards-container"></div>',Js()):re==="customers"?t.innerHTML=so():re==="installments"&&(t.innerHTML=ro()))},Ft=async()=>{L("Memuat data piutang..."),E=[],W=[];try{const[t,e]=await Promise.all([P.collection("freshmart_orders").where("payment.method","==","tempo").where("payment.paymentStatus","==","hutang").get(),P.collection("tempo_payment_confirmations").where("status","==","pending").get().catch(a=>(console.warn("[Tempo] Gagal memuat konfirmasi pembayaran:",a),{empty:!0,docs:[]}))]);t.forEach(a=>{E.push(a.data())}),!e.empty&&e.docs&&(e.docs.forEach(a=>{W.push({id:a.id,...a.data()})}),W.sort((a,r)=>(r.createdAt||0)-(a.createdAt||0)))}catch(t){D(),x("Gagal memuat piutang: "+t.message);return}D(),E.sort((t,e)=>{let a=t.payment?.tempoDueDate||0,r=e.payment?.tempoDueDate||0;return a-r}),window.cachedPiutangOrders=E,window.pendingTempoConfirmations=W,va()},Qs=async()=>{try{if(typeof window.openTempoRecapDocPreview=="function")window.openTempoRecapDocPreview();else{const t=await J(()=>import("./module-print-D7ZGPnsx.js").then(e=>e.bm),__vite__mapDeps([1,2,3]));t&&typeof t.openDocPreview=="function"?t.openDocPreview("tempo_recap"):typeof window.openDocPreview=="function"?window.openDocPreview("tempo_recap"):x("Modul cetak dokumen sedang disiapkan...","info")}}catch(t){console.error("Error open tempo recap A4:",t),typeof window.openDocPreview=="function"?window.openDocPreview("tempo_recap"):x("Gagal membuka preview dokumen: "+t.message,"warning")}},Ys=()=>{const t=E&&E.length>0?E:(window.gOrds||[]).filter(p=>p.payment?.method==="tempo"&&(parseFloat(p.payment?.tempoBalance)>0||p.payment?.status!=="paid"&&p.payment?.status!=="completed"));if(!t||t.length===0){x("Tidak ada data piutang untuk diekspor ke CSV","warning");return}const e=["No","ID Nota","Nama Debitur","No WhatsApp / Telepon","Alamat Debitur","Tanggal Transaksi","Jatuh Tempo","Total Transaksi (Rp)","Sudah Dibayar (Rp)","Sisa Pokok (Rp)","Denda (Rp)","Total Tagihan Berjalan (Rp)","Status Aging","Hari Terlambat","Catatan / Keterangan"],a=p=>p==null?'""':`"${String(p).replace(/"/g,'""')}"`,r=t.map((p,d)=>{const b=te(p),u=p.customer||{},f=u.name||"Pelanggan",v=u.wa||u.phone||"-",h=u.address||"-",y=p.dateString?new Date(p.dateString).toLocaleDateString("id-ID"):"-",T=b.dueDate?new Date(b.dueDate).toLocaleDateString("id-ID"):"-",C=(p.payment?.installments||[]).reduce((w,I)=>w+(parseFloat(I.amount)||0),0),A=p.payment?.grandTotal||b.sisa+C,S=b.isLate?`Terlambat ${b.daysLate} Hari`:b.isDueSoon?`H-${b.daysLeft} Jatuh Tempo`:"Lancar";return[d+1,a(p.orderId||p.id),a(f),a(v),a(h),a(y),a(T),Math.round(A),Math.round(C),Math.round(b.sisa),Math.round(b.latePenalty),Math.round(b.totalAkhir),a(S),b.daysLate||0,a(p.notes||p.payment?.notes||"-")].join(",")}),s="\uFEFF"+[e.map(p=>a(p)).join(","),...r].join(`\r
`),o=new Blob([s],{type:"text/csv;charset=utf-8;"}),l=URL.createObjectURL(o),n=document.createElement("a"),c=new Date().toISOString().slice(0,10);n.href=l,n.download=`Rekap_Piutang_Toko_Putri_${c}.csv`,document.body.appendChild(n),n.click(),setTimeout(()=>{document.body.removeChild(n),URL.revokeObjectURL(l)},200),x(`Berhasil mengekspor ${t.length} data piutang ke CSV!`,"success")};window.rAdmPiutang=Ft;window.printTempoRecapA4=Qs;window.exportTempoCSV=Ys;const Xs=t=>{Nr(t),wa()},wa=()=>{const t=Lr||"all",e=(Xt||[]).filter(o=>t==="visible"?o.isVisible!==!1:t==="hidden"?o.isVisible===!1:!0),a=`
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
        </div>`;if(!e.length){R("admin-content",'<div class="max-w-full pb-10 text-sm fade-in-scale">'+a+'<div class="flex flex-col items-center justify-center py-20 text-slate-400 font-bold bg-white dark:bg-slate-800 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm text-center"><i class="fa-solid fa-comment-slash text-5xl mb-4 opacity-30"></i>Belum ada ulasan</div></div>');return}const r=o=>Array.from({length:5},(l,n)=>`<i class="fa-solid fa-star ${n<Math.round(o)?"text-amber-400":"text-slate-200 dark:text-slate-700"}"></i>`).join(""),s=e.map(o=>{let l="";try{o.createdAt&&o.createdAt.toDate&&(l=o.createdAt.toDate().toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}))}catch{}const n=o.isVisible===!1;return`
        <div class="p-4 sm:p-5 md:p-6 lg:p-8 rounded-[1.5rem] border shadow-sm ${n?"border-rose-200 bg-rose-50/40 dark:border-rose-900/40 dark:bg-rose-900/10":"border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800"} mb-3">
            <div class="flex items-start justify-between gap-3 mb-2">
                <div class="min-w-0">
                    <p class="text-sm font-bold text-slate-800 dark:text-white truncate">${m(o.customerName||"Pelanggan")}</p>
                    <p class="text-[10px] font-bold text-slate-500 mt-0.5">${m(o.productName||"")}${o.variantName?" · "+m(o.variantName):""}</p>
                </div>
                <span class="text-[9px] font-bold text-slate-400 whitespace-nowrap">${l}</span>
            </div>
            <div class="flex text-xs mb-2.5">${r(o.rating)}</div>
            ${o.text?`<p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-2.5">${m(o.text)}</p>`:""}
            ${o.photoUrl?`<img src="${m(o.photoUrl)}" onclick="window.open('${m(o.photoUrl)}','_blank')" class="w-20 h-20 rounded-xl object-cover border border-slate-200 dark:border-slate-700 cursor-pointer mb-2.5" onerror="this.style.display='none'" loading="lazy">`:""}
            ${o.adminReply?`<div class="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl p-3 mb-2.5"><p class="text-[9px] font-bold text-[var(--color-primary)] uppercase tracking-widest mb-1"><i class="fa-solid fa-store mr-1"></i>Balasan Anda</p><p class="text-[11px] text-slate-600 dark:text-slate-300">${m(o.adminReply)}</p></div>`:""}
            <div class="flex flex-wrap gap-2 pt-2 border-t border-slate-100 dark:border-slate-700/60">
                <button onclick="replyToReview('${m(String(o.id))}')" class="px-3.5 py-2.5 rounded-xl primary-bg-soft primary-text text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 hover:opacity-90 active:scale-95 transition-all cursor-pointer"><i class="fa-solid fa-reply"></i> ${o.adminReply?"Edit Balasan":"Balas"}</button>
                <button onclick="toggleReviewVisibility('${m(String(o.id))}')" class="px-3.5 py-2.5 rounded-xl ${n?"primary-bg-soft primary-text hover:brightness-95":"bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 hover:bg-amber-100"} text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 active:scale-95 transition-all cursor-pointer"><i class="fa-solid ${n?"fa-eye":"fa-eye-slash"}"></i> ${n?"Tampilkan":"Sembunyikan"}</button>
                <button onclick="deleteReview('${m(String(o.id))}')" class="px-3.5 py-2.5 rounded-xl bg-rose-50 dark:bg-rose-900/20 text-rose-500 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 hover:bg-rose-100 active:scale-95 transition-all cursor-pointer"><i class="fa-solid fa-trash"></i> Hapus</button>
            </div>
        </div>`}).join("");R("admin-content",'<div class="max-w-full pb-10 text-sm fade-in-scale">'+a+s+"</div>")},Zs=async t=>{const e=(Xt||[]).find(a=>a&&a.id!=null&&String(a.id)===String(t));e&&typeof window.customPrompt=="function"&&window.customPrompt("Tulis balasan untuk ulasan ini:",e.adminReply||"",async a=>{L("Menyimpan balasan...");try{await P.collection("freshmart").doc("cms_data").collection("reviews").doc(t.toString()).update({adminReply:a}),x("Balasan tersimpan!")}catch{x("Gagal menyimpan balasan!")}finally{D()}})},er=async t=>{const e=(Xt||[]).find(r=>r&&r.id!=null&&String(r.id)===String(t));if(!e)return;const a=e.isVisible===!1;L("Menyimpan...");try{await P.collection("freshmart").doc("cms_data").collection("reviews").doc(t.toString()).update({isVisible:a}),x(a?"Ulasan ditampilkan lagi!":"Ulasan disembunyikan dari halaman produk!")}catch{x("Gagal mengubah status ulasan!")}finally{D()}},tr=t=>{ue("Hapus Ulasan","Ulasan yang dihapus tidak bisa dikembalikan lagi.",async()=>{L("Menghapus...");try{await P.collection("freshmart").doc("cms_data").collection("reviews").doc(t.toString()).delete(),x("Ulasan dihapus!")}catch{x("Gagal menghapus ulasan!")}finally{D()}})};window.filterReviews=Xs;window.rAdmReviews=wa;window.replyToReview=Zs;window.toggleReviewVisibility=er;window.deleteReview=tr;let _t=null,Le=1,Ne="overview",fe="all";const oo=t=>{Ne=t,Oe()},lo=t=>{fe=t,Oe()},ar=t=>{const e=[];if(!t)return e;const a=String(t.id),r=String(t.name||"").trim().toLowerCase();return(i.purchases||[]).forEach(c=>{if(!(c.status==="received"||c.status==="completed"||c.receivedAt))return;(Array.isArray(c.items)?c.items:[]).forEach(b=>{if(String(b.productId||b.id||"")===a||String(b.name||"").trim().toLowerCase()===r){const f=parseFloat(b.qty||b.receivedQty||0)||0;f>0&&e.push({type:"in",source:"po",date:c.receivedAt||c.date||c.createdAt||Date.now(),refNo:c.poNumber||c.id||"PO",title:`Penerimaan PO Kulakan #${c.poNumber||c.id}`,qty:f,unit:b.unit||t.unit||"pcs",price:b.buyPrice||b.price||0,party:c.supplierName||"Supplier Rekanan",location:b.targetLocation==="store"?"Rak Toko":"Gudang Cadangan",notes:c.notes||"Barang masuk kulakan resmi"})}})}),(window.gOrds||i.orders||[]).forEach(c=>{if(c.status==="cancelled"||c.status==="void")return;(Array.isArray(c.items)?c.items:[]).forEach(d=>{if(String(d.id||d.productId||"")===a||String(d.name||"").trim().toLowerCase()===r){const u=parseFloat(d.qty||d.quantity||0)||0;u>0&&e.push({type:"out",source:"sales",date:c.createdAt||(c.dateString?new Date(c.dateString).getTime():Date.now()),refNo:c.orderId||c.id||"ORD",title:`Penjualan ${c.isPos?"Kasir POS":"Online"} #${c.orderId||c.id}`,qty:u,unit:d.unit||t.unit||"pcs",price:d.price||0,party:c.customer?.name||(c.isPos?"Pelanggan Kasir":"Pelanggan Toko"),location:"Rak Toko",notes:c.payment?.method?`Metode: ${c.payment.method.toUpperCase()}`:"Penjualan"})}})}),(t.stockBatches||[]).forEach(c=>{!e.some(d=>d.source==="po"&&d.refNo===(c.poNumber||c.batchNo))&&(parseFloat(c.initialQty)||0)>0&&e.push({type:"in",source:"batch",date:c.receivedAt||Date.now(),refNo:c.poNumber||c.batchNo||"BATCH",title:`Batch Stok Masuk #${c.poNumber||c.batchNo||"LOT"}`,qty:parseFloat(c.initialQty)||0,unit:t.unit||"pcs",price:c.buyPrice||0,party:c.supplierName||"Pemasok",location:c.location==="store"?"Rak Toko":"Gudang Cadangan",notes:`Sisa batch saat ini: ${c.remainingQty||0} unit`})}),(Array.isArray(t.internalTransfers)?t.internalTransfers:[]).forEach((c,p)=>{const d=c.fromLocation==="warehouse"?"Gudang":"Rak Toko",b=c.toLocation==="warehouse"?"Gudang":"Rak Toko",u=c.toLocation==="store";e.push({type:u?"in":"out",source:"transfer",date:c.date||Date.now(),refNo:c.id||`TRF-${p+1}`,title:`Mutasi Internal (${d} → ${b})`,qty:parseFloat(c.qty)||0,unit:c.unit||t.unit||"pcs",price:0,party:c.userName||"Staf Toko",location:`${d} → ${b}`,notes:c.variantName?`Varian: ${c.variantName}`:"Pemindahan internal rak & gudang"})}),e.sort((c,p)=>{const d=new Date(c.date).getTime()||0;return(new Date(p.date).getTime()||0)-d}),e},io=()=>{if(!k("modal-product-fifo")){const t=document.createElement("div");t.id="modal-product-fifo",t.className="fixed inset-0 z-[150] flex hidden items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/75 opacity-0 transition-opacity duration-300",t.onclick=e=>{e.target===t&&window.closeProductFifoModal?.()},t.innerHTML=`
            <div id="modal-product-fifo-box" class="modal-bottom-sheet relative flex max-h-[92dvh] sm:max-h-[88dvh] w-full max-w-4xl translate-y-full sm:translate-y-10 transform flex-col overflow-hidden rounded-t-[2rem] sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300">
                <div id="modal-product-fifo-content" class="flex-1 flex flex-col overflow-hidden min-h-0"></div>
            </div>
        `,document.body.appendChild(t)}},sr=t=>{io(),_t=t,Le=1,Ne="overview",fe="all";const e=(i.products||[]).find(s=>String(s.id)===String(t));if(!e)return x("Produk tidak ditemukan!");ea(e,i.suppliers||[]),Oe();const a=k("modal-product-fifo"),r=k("modal-product-fifo-box");a&&a.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("productFifo"),ne(a,r)},no=(t=!1)=>{const e=k("modal-product-fifo"),a=k("modal-product-fifo-box");e&&(!t&&typeof window.requestCloseModal=="function"?window.requestCloseModal("productFifo",!1,()=>Z(e,a)):Z(e,a))},Oe=()=>{const t=k("modal-product-fifo-content");if(!t)return;const e=(i.products||[]).find(w=>String(w.id)===String(_t));if(!e)return;ea(e,i.suppliers||[]);const a=e.suppliers||[],r=e.stockBatches||[],s=Wr(e),o=r.filter(w=>(parseFloat(w.remainingQty)||0)>0),l=r.filter(w=>(parseFloat(w.remainingQty)||0)<=0),n=(i.suppliers||[]).filter(w=>!a.some(I=>String(I.supplierId)===String(w.id)));let c=parseFloat(Le)||0,p=0;const d=[];if(o.forEach(w=>{if(c<=0)return;const I=parseFloat(w.remainingQty)||0,N=Math.min(I,c),_=N*(parseFloat(w.buyPrice)||0);p+=_,d.push({poNumber:w.poNumber||"BATCH",supplierName:w.supplierName||"Pemasok",qty:N,buyPrice:w.buyPrice,subtotal:_}),c-=N}),c>0){const w=parseFloat(e.hpp)||0,I=c*w;p+=I,d.push({poNumber:"STOK DARURAT (DEFICIT)",supplierName:"Estimasi HPP Standar",qty:c,buyPrice:w,subtotal:I,isDeficit:!0})}const b=Le>0?Math.round(p/Le):0,u=parseFloat(e.price)||0,f=u*Le,v=Math.max(0,f-p),h=ar(e),y=h.filter(w=>w.type==="in"),T=h.filter(w=>w.type==="out"),M=y.reduce((w,I)=>w+I.qty,0),C=T.reduce((w,I)=>w+I.qty,0),A=(e.storeStock||0)+(e.warehouseStock||0),S=fe==="in"?y:fe==="out"?T:h;t.innerHTML=`
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
                        <span>${m(e.name)}</span>
                    </h3>
                    <p class="text-[11px] font-bold text-slate-400 truncate">
                        Barcode: <span class="font-mono text-slate-600 dark:text-slate-300">${m(e.sku||"-")}</span> • Kategori: <span class="text-slate-600 dark:text-slate-300">${m(e.category||"Umum")}</span>
                    </p>
                </div>
            </div>
            <div class="flex items-center gap-2 shrink-0">
                <button type="button" onclick="window.closeProductFifoModal?.(); window.openProductBarcodeLabelModal?.('${e.id}')" class="px-3 py-1.5 rounded-xl border text-xs font-bold transition-all active:scale-95 flex items-center gap-1.5 cursor-pointer shadow-2xs hover:opacity-90" style="background: rgba(var(--color-primary-rgb), 0.08); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25);" title="Cetak Label Barcode &amp; Harga">
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
            <button type="button" onclick="window.switchFifoTab('overview')" class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer active:scale-95 shrink-0 ${Ne==="overview"?"bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-2xs border border-slate-200 dark:border-slate-600 font-extrabold":"text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"}" style="${Ne==="overview"?"color: var(--color-primary);":""}">
                <i class="fa-solid fa-layer-group text-amber-500"></i>
                <span>Ikhtisar &amp; Antrean Batch FIFO</span>
            </button>
            <button type="button" onclick="window.switchFifoTab('ledger')" class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer active:scale-95 shrink-0 ${Ne==="ledger"?"bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-2xs border border-slate-200 dark:border-slate-600 font-extrabold":"text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"}" style="${Ne==="ledger"?"color: var(--color-primary);":""}">
                <i class="fa-solid fa-book-journal-whills text-teal-500"></i>
                <span>Kartu Mutasi Stok (${h.length})</span>
            </button>
        </div>

        <!-- 3. KONTEN UTAMA (BODY INDEPENDENT OVERFLOW-Y SCROLLABLE) -->
        <div class="flex-1 overflow-y-auto custom-scrollbar min-h-0 bg-white dark:bg-slate-900">
        ${Ne==="overview"?`
        <div class="p-5 sm:p-6 space-y-6">
            <!-- 1. BENTO STATS CARDS (DUAL-LOCATION & FIFO VALUATION) -->
            <div class="grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-3">
                <div class="p-3.5 rounded-2xl bg-teal-50/70 dark:bg-teal-950/30 border border-teal-200/80 dark:border-teal-800/70 shadow-2xs">
                    <span class="text-[9px] font-black uppercase tracking-wider text-teal-600 dark:text-teal-400 flex items-center gap-1">
                        <i class="fa-solid fa-store"></i> Stok Rak Toko
                    </span>
                    <p class="text-base sm:text-lg font-black text-slate-800 dark:text-white mt-0.5">${e.storeStock||0} <span class="text-[10px] font-bold text-slate-400">${m(e.unit||"pcs")}</span></p>
                    <p class="text-[9px] font-bold text-teal-600 dark:text-teal-400 mt-0.5">Siap Transaksi Kasir</p>
                </div>
                <div class="p-3.5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/70 shadow-2xs">
                    <span class="text-[9px] font-black uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-1">
                        <i class="fa-solid fa-warehouse"></i> Stok Gudang
                    </span>
                    <p class="text-base sm:text-lg font-black text-slate-800 dark:text-white mt-0.5">${e.warehouseStock||0} <span class="text-[10px] font-bold text-slate-400">${m(e.unit||"pcs")}</span></p>
                    <p class="text-[9px] font-bold text-amber-600 dark:text-amber-400 mt-0.5">Cadangan Belakang</p>
                </div>
                <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/70 shadow-2xs">
                    <span class="text-[9px] font-black uppercase tracking-wider text-slate-400">Total Stok</span>
                    <p class="text-base sm:text-lg font-black text-slate-800 dark:text-white mt-0.5">${s.totalActiveQty} <span class="text-[10px] font-bold text-slate-400">${m(e.unit||"pcs")}</span></p>
                    <p class="text-[9px] font-bold text-slate-400 mt-0.5">${s.activeBatchesCount} Batch Aktif</p>
                </div>
                <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/70 shadow-2xs">
                    <span class="text-[9px] font-black uppercase tracking-wider text-amber-500">HPP Aktif</span>
                    <p class="text-base sm:text-lg font-black text-amber-600 dark:text-amber-400 mt-0.5">${g(e.hpp||0)}</p>
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
                            ${e.storeStock||0} <span class="text-[10px] font-bold text-slate-400">${m(e.unit||"pcs")}</span>
                        </span>
                        <span class="text-[9px] font-bold text-teal-600 dark:text-teal-400">Siap Kasir</span>
                    </div>

                    <div class="p-2 rounded-lg bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/70 dark:border-amber-800/60 flex flex-col">
                        <span class="text-[9px] font-black uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-1">
                            <i class="fa-solid fa-warehouse text-[8px]"></i> Gudang Cadangan
                        </span>
                        <span class="text-sm sm:text-base font-black text-slate-900 dark:text-white mt-0.5 font-mono">
                            ${e.warehouseStock||0} <span class="text-[10px] font-bold text-slate-400">${m(e.unit||"pcs")}</span>
                        </span>
                        <span class="text-[9px] font-bold text-amber-600 dark:text-amber-400">Cadangan Belakang</span>
                    </div>

                    <div class="col-span-2 sm:col-span-1 p-2 rounded-lg bg-slate-100/70 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/60 flex flex-col justify-center">
                        <span class="text-[9px] font-black uppercase tracking-wider text-slate-400">Total Stok Fisik</span>
                        <span class="text-sm sm:text-base font-black text-slate-800 dark:text-white mt-0.5 font-mono">
                            ${(e.storeStock||0)+(e.warehouseStock||0)} <span class="text-[10px] font-bold text-slate-400">${m(e.unit||"pcs")}</span>
                        </span>
                        <span class="text-[9px] font-bold text-slate-400">Rak + Gudang</span>
                    </div>
                </div>

                <!-- AKSI TRANSFER CEPAT DUA ARAH -->
                <div class="flex items-center gap-2 flex-wrap pt-1">
                    <button type="button" onclick="window.quickTransferWarehouseToStore('${e.id}')" class="flex-1 min-w-[140px] px-3.5 py-2.5 rounded-xl primary-bg text-white font-bold text-xs flex items-center justify-center gap-2 active:scale-95 transition-all shadow-xs cursor-pointer ${Number(e.warehouseStock||0)<=0?"opacity-50 cursor-not-allowed":""}">
                        <i class="fa-solid fa-arrow-right text-[11px]"></i>
                        <span>Pindahkan ke Rak (${e.warehouseStock||0} Tersedia)</span>
                    </button>
                    <button type="button" onclick="window.quickTransferStoreToWarehouse('${e.id}')" class="flex-1 min-w-[140px] px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs flex items-center justify-center gap-2 active:scale-95 transition-all shadow-2xs cursor-pointer ${Number(e.storeStock||0)<=0?"opacity-50 cursor-not-allowed":""}">
                        <i class="fa-solid fa-arrow-left text-[11px] text-amber-500"></i>
                        <span>Kembalikan ke Gudang</span>
                    </button>
                </div>

                <!-- JIKA PRODUK BERVARIAN: TAMPILKAN DAFTAR VARIAN & TOMBOL PINDAH PER-VARIAN -->
                ${Array.isArray(e.variants)&&e.variants.length>0?`
                <div class="mt-2 pt-3 border-t border-slate-200/80 dark:border-slate-700/80 space-y-2">
                    <span class="text-[10px] font-black uppercase tracking-wider text-slate-400 block">Rincian Per Varian Produk:</span>
                    <div class="space-y-1.5">
                        ${e.variants.map(w=>`
                            <div class="p-2 sm:p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-700/70 flex items-center justify-between gap-2 flex-wrap">
                                <div class="min-w-0">
                                    <span class="font-black text-xs text-slate-800 dark:text-white block truncate">${m(w.name)}</span>
                                    <span class="text-[10px] text-slate-400 font-medium">
                                        Rak: <b class="text-teal-600 dark:text-teal-400 font-mono">${w.storeStock||0}</b> • Gudang: <b class="text-amber-600 dark:text-amber-400 font-mono">${w.warehouseStock||0}</b> (Tot: ${(w.storeStock||0)+(w.warehouseStock||0)})
                                    </span>
                                </div>
                                <div class="flex items-center gap-1.5 shrink-0">
                                    <button type="button" onclick="window.quickTransferStock('${e.id}', 'to_store', '${m(w.name)}')" class="px-2.5 py-1.5 rounded-lg primary-bg text-white font-bold text-[10px] flex items-center gap-1 active:scale-95 cursor-pointer shadow-2xs" ${Number(w.warehouseStock||0)<=0?'disabled style="opacity:0.5;cursor:not-allowed;"':""} title="Pindahkan varian ini ke rak">
                                        <i class="fa-solid fa-arrow-right text-[9px]"></i> Ke Rak
                                    </button>
                                    <button type="button" onclick="window.quickTransferStock('${e.id}', 'to_warehouse', '${m(w.name)}')" class="px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-[10px] flex items-center gap-1 active:scale-95 cursor-pointer border border-slate-200 dark:border-slate-700" ${Number(w.storeStock||0)<=0?'disabled style="opacity:0.5;cursor:not-allowed;"':""} title="Kembalikan varian ini ke gudang">
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
                    ${a.map(w=>{const I=!!w.isPrimary,_=(i.suppliers||[]).find(V=>String(V.id)===String(w.supplierId))?.phone||"";return`
                            <div class="p-4 rounded-2xl border transition-all ${I?"bg-teal-50/50 dark:bg-teal-950/20 border-teal-300 dark:border-teal-800 shadow-sm":"bg-white dark:bg-slate-800 border-slate-200/90 dark:border-slate-700/80"} flex flex-col justify-between gap-3">
                                <div class="flex items-start justify-between gap-2">
                                    <div>
                                        <div class="flex items-center gap-2 flex-wrap">
                                            <span class="font-black text-xs sm:text-sm text-slate-800 dark:text-white">${m(w.supplierName||"Supplier")}</span>
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
                                            Harga Beli Terakhir: <b class="text-slate-700 dark:text-slate-200">${g(w.lastBuyPrice||0)}</b>
                                            ${w.supplierSku?` • SKU: <span class="font-mono">${m(w.supplierSku)}</span>`:""}
                                        </p>
                                    </div>
                                    <div class="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-700/60 flex items-center justify-center text-slate-500 shrink-0">
                                        <i class="fa-solid fa-building text-xs"></i>
                                    </div>
                                </div>

                                <div class="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-700/60 flex-wrap">
                                    ${I?"":`
                                        <button onclick="window.handleSetFifoPrimarySupplier('${m(w.supplierId)}')" class="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-700 hover:bg-teal-50 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800 text-[10px] font-black transition-all cursor-pointer active:scale-95 shadow-2xs">
                                            <i class="fa-solid fa-check mr-1"></i>Set Utama
                                        </button>
                                    `}
                                    <button onclick="window.closeProductFifoModal(); if(window.openCreatePOModal) window.openCreatePOModal('${m(w.supplierId)}');" class="px-3 py-1.5 rounded-xl text-white text-[10px] font-black transition-all cursor-pointer active:scale-95 shadow-2xs flex items-center gap-1" style="background:var(--color-primary)">
                                        <i class="fa-solid fa-cart-plus text-[9px]"></i>Buat PO Kulakan
                                    </button>
                                    ${_?`
                                        <a href="https://wa.me/${_.replace(/\\D/g,"")}?text=${encodeURIComponent(`Halo Sales ${w.supplierName}, kami dari Toko Putri ingin menanyakan ketersediaan dan harga untuk produk: ${e.name}`)}" target="_blank" class="px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-[10px] font-bold transition-all flex items-center gap-1">
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
                                ${n.map(w=>`<option value="${w.id}">${m(w.name)}${w.code?` (${m(w.code)})`:""}</option>`).join("")}
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
                    `:o.map((w,I)=>{const N=I===0,_=w.initialQty>0?Math.round(w.remainingQty/w.initialQty*100):100,V=w.receivedAt?new Date(w.receivedAt).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):"Awal";return`
                            <div class="p-4 rounded-2xl border transition-all ${N?"bg-amber-50/40 dark:bg-amber-950/20 border-amber-300 dark:border-amber-800/80 shadow-sm":"bg-white dark:bg-slate-800 border-slate-200/90 dark:border-slate-700/80"}">
                                <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-2">
                                    <div class="flex items-center gap-2 flex-wrap">
                                        <span class="w-6 h-6 rounded-lg text-xs font-black flex items-center justify-center ${N?"bg-amber-500 text-white shadow-xs":"bg-slate-100 dark:bg-slate-700 text-slate-500"}">
                                            #${I+1}
                                        </span>
                                        <span class="font-black text-xs sm:text-sm text-slate-800 dark:text-white">${m(w.poNumber||"BATCH MASUK")}</span>
                                        ${N?`
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
                                        <span class="text-xs font-black text-slate-700 dark:text-slate-200">HPP: ${g(w.buyPrice)}</span>
                                        <span class="text-[10px] text-slate-400 block">${V}</span>
                                    </div>
                                </div>

                                <div class="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1.5">
                                    <span>Pemasok: <b class="text-slate-700 dark:text-slate-300">${m(w.supplierName||"-")}</b></span>
                                    <span>Sisa: <b class="text-slate-800 dark:text-white font-mono font-bold">${w.remainingQty}</b> / ${w.initialQty} ${m(e.unit||"pcs")} (${_}%)</span>
                                </div>

                                <!-- PROGRESS BAR SISA STOK -->
                                <div class="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden">
                                    <div class="h-full rounded-full transition-all duration-500 ${N?"bg-amber-500":"bg-teal-500"}" style="width: ${Math.min(100,Math.max(0,_))}%"></div>
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
                        <input type="number" min="1" max="999" value="${Le}" onchange="window.handleFifoSimulateChange(this.value)" class="w-16 bg-slate-900 text-white text-xs font-black text-center py-1 rounded-lg border border-slate-600 focus:outline-none focus:border-amber-400">
                    </div>
                </div>

                <div class="p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/60 text-xs space-y-2">
                    <p class="text-[11px] font-bold text-slate-300">Alokasi Pemotongan:</p>
                    <div class="space-y-1 text-slate-300 font-mono text-[11px]">
                        ${d.map(w=>`
                            <div class="flex items-center justify-between py-0.5 border-b border-slate-800">
                                <span>• ${w.qty} ${m(e.unit||"pcs")} dari <b>${m(w.poNumber)}</b> (${m(w.supplierName)}) @ ${g(w.buyPrice)}</span>
                                <span class="font-bold text-amber-300">${g(w.subtotal)}</span>
                            </div>
                        `).join("")}
                    </div>
                </div>

                <div class="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800 text-center">
                    <div>
                        <span class="text-[9px] text-slate-400 uppercase font-black">Total HPP Riil</span>
                        <p class="text-sm sm:text-base font-black text-amber-400">${g(p)}</p>
                        <span class="text-[9px] text-slate-500">Rata-rata: ${g(b)}/unit</span>
                    </div>
                    <div>
                        <span class="text-[9px] text-slate-400 uppercase font-black">Omzet Jual</span>
                        <p class="text-sm sm:text-base font-black text-white">${g(f)}</p>
                        <span class="text-[9px] text-slate-500">Harga: ${g(u)}</span>
                    </div>
                    <div>
                        <span class="text-[9px] text-slate-400 uppercase font-black">Laba Kotor Transaksi</span>
                        <p class="text-sm sm:text-base font-black text-emerald-400">+${g(v)}</p>
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
                        +${M} <span class="text-xs font-bold text-slate-400">${m(e.unit||"pcs")}</span>
                    </p>
                    <p class="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 mt-0.5">${y.length} Dokumen Kulakan Masuk</p>
                </div>

                <div class="p-4 rounded-2xl bg-rose-50/80 dark:bg-rose-950/30 border border-rose-200/90 dark:border-rose-800/70 shadow-2xs">
                    <span class="text-[9.5px] font-black uppercase tracking-wider text-rose-700 dark:text-rose-400 flex items-center gap-1.5">
                        <i class="fa-solid fa-arrow-up-from-bracket text-rose-600 dark:text-rose-400"></i> Total Barang Keluar (Penjualan)
                    </span>
                    <p class="text-lg sm:text-xl font-black mt-1 font-mono" style="color: #e11d48;">
                        -${C} <span class="text-xs font-bold text-slate-400">${m(e.unit||"pcs")}</span>
                    </p>
                    <p class="text-[10px] font-bold text-rose-700 dark:text-rose-400 mt-0.5">${T.length} Transaksi Kasir &amp; Web</p>
                </div>

                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/90 dark:border-slate-700/70 shadow-2xs">
                    <span class="text-[9.5px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                        <i class="fa-solid fa-boxes-stacked text-slate-500 dark:text-slate-400"></i> Saldo Stok Fisik Realtime
                    </span>
                    <p class="text-lg sm:text-xl font-black text-slate-800 dark:text-white mt-1 font-mono">
                        ${A} <span class="text-xs font-bold text-slate-400">${m(e.unit||"pcs")}</span>
                    </p>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">Toko: ${e.storeStock||0} • Gudang: ${e.warehouseStock||0}</p>
                </div>
            </div>

            <!-- 2. FILTER SEGMENTED KARTU MUTASI (DENGAN IKON VALID) -->
            <div class="flex items-center justify-between flex-wrap gap-2 pt-1 border-t border-slate-100 dark:border-slate-800">
                <div class="flex items-center gap-1.5 overflow-x-auto hide-scrollbar text-xs font-bold">
                    <button type="button" onclick="window.setLedgerFilter('all')" class="px-3 py-1.5 rounded-xl border transition-all cursor-pointer active:scale-95 ${fe==="all"?"bg-slate-900 text-white border-slate-900 dark:bg-white dark:text-slate-900 shadow-2xs":"bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-transparent"}">
                        Semua Riwayat (${h.length})
                    </button>
                    <button type="button" onclick="window.setLedgerFilter('in')" class="px-3 py-1.5 rounded-xl border transition-all cursor-pointer active:scale-95 ${fe==="in"?"text-white border-transparent shadow-2xs":"bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 border-transparent"}" style="${fe==="in"?"background-color: #059669;":""}">
                        <i class="fa-solid fa-arrow-down-to-bracket mr-1"></i>Barang Masuk (${y.length})
                    </button>
                    <button type="button" onclick="window.setLedgerFilter('out')" class="px-3 py-1.5 rounded-xl border transition-all cursor-pointer active:scale-95 ${fe==="out"?"text-white border-transparent shadow-2xs":"bg-rose-50 dark:bg-rose-950/30 text-rose-700 dark:text-rose-300 border-transparent"}" style="${fe==="out"?"background-color: #e11d48;":""}">
                        <i class="fa-solid fa-arrow-up-from-bracket mr-1"></i>Barang Keluar (${T.length})
                    </button>
                </div>
                <span class="text-[11px] text-slate-400 font-medium">Buku Mutasi Stok Riil Berbasis Dokumen Transaksi</span>
            </div>

            <!-- 3. TABEL / LIST MUTASI KARTU STOK (DENGAN IKON SOLID & WARNA TEGAS) -->
            <div class="space-y-2">
                ${S.length===0?`
                    <div class="p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700 text-center">
                        <i class="fa-solid fa-clipboard-list text-3xl text-slate-300 dark:text-slate-600 mb-2"></i>
                        <p class="text-xs font-bold text-slate-600 dark:text-slate-300">Belum ada catatan mutasi stok untuk filter ini.</p>
                        <p class="text-[11px] text-slate-400 mt-0.5">Riwayat akan terisi otomatis saat kulakan PO diterima atau pesanan kasir diproses.</p>
                    </div>
                `:S.map(w=>{const I=w.type==="in",N=new Date(w.date).toLocaleDateString("id-ID",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"});return`
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
                                        <span class="font-black text-xs sm:text-sm text-slate-800 dark:text-white font-mono">${m(w.refNo)}</span>
                                        <span class="text-[10px] text-slate-400 font-medium">• ${N}</span>
                                    </div>
                                    <p class="text-[11px] text-slate-600 dark:text-slate-300 mt-1 font-medium truncate">
                                        ${m(w.title)} • <span class="text-slate-500 font-bold">${m(w.party)}</span>
                                    </p>
                                    <p class="text-[10px] text-slate-400 mt-0.5">
                                        Lokasi: <b class="text-slate-700 dark:text-slate-300">${m(w.location)}</b> ${w.notes?`• ${m(w.notes)}`:""}
                                    </p>
                                </div>
                            </div>
                            <div class="text-left sm:text-right shrink-0 border-t sm:border-t-0 pt-2 sm:pt-0 w-full sm:w-auto border-slate-100 dark:border-slate-700 flex sm:flex-col justify-between sm:justify-center items-center sm:items-end">
                                <span class="text-base sm:text-lg font-black font-mono" style="${I?"color: #059669;":"color: #e11d48;"}">
                                    ${I?`+${w.qty}`:`-${w.qty}`} <span class="text-xs font-bold text-slate-400">${m(w.unit)}</span>
                                </span>
                                ${w.price>0?`<span class="text-[10px] text-slate-400 block font-mono">@ ${g(w.price)}</span>`:""}
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
                    <span>Total Fisik: <b class="text-slate-900 dark:text-white font-mono">${A}</b> ${m(e.unit||"pcs")}</span>
                </span>
                <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300 border border-teal-200/80 dark:border-teal-800/80 text-[11px]">
                    <i class="fa-solid fa-store text-[10px] text-teal-600 dark:text-teal-400"></i>
                    <span>Rak: <b class="font-mono font-black">${e.storeStock||0}</b></span>
                </span>
                <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200/80 dark:border-amber-800/80 text-[11px]">
                    <i class="fa-solid fa-warehouse text-[10px] text-amber-600 dark:text-amber-400"></i>
                    <span>Gudang: <b class="font-mono font-black">${e.warehouseStock||0}</b></span>
                </span>
            </div>
            <button onclick="window.closeProductFifoModal()" class="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-black text-xs transition-all cursor-pointer active:scale-95 shrink-0 ml-auto">
                Tutup
            </button>
        </div>
    `},co=async()=>{const t=k("fifo-new-sup-select")?.value,e=parseFloat(k("fifo-new-sup-price")?.value)||0;if(!t)return x("Pilih supplier terlebih dahulu!");const a=(i.products||[]).find(s=>String(s.id)===String(_t));if(!a)return;const r=(i.suppliers||[]).find(s=>String(s.id)===String(t));Gr(a,{supplierId:t,supplierName:r?r.name:"Supplier Rekanan",lastBuyPrice:e,isPrimary:!1}),L("Menghubungkan Supplier...");try{await P.collection("freshmart").doc("cms_data").collection("products").doc(a.id.toString()).update({suppliers:a.suppliers,supplierId:a.supplierId}),D(),x("Supplier berhasil dihubungkan ke produk!"),Oe(),window.rAdmItms?.("products")}catch(s){D(),x("Gagal menghubungkan supplier: "+s.message)}},po=async t=>{const e=(i.products||[]).find(a=>String(a.id)===String(_t));if(e){Vr(e,t),L("Memperbarui Supplier Utama...");try{await P.collection("freshmart").doc("cms_data").collection("products").doc(e.id.toString()).update({suppliers:e.suppliers,supplierId:e.supplierId}),D(),x("Supplier utama berhasil diubah! ⭐"),Oe(),window.rAdmItms?.("products")}catch(a){D(),x("Gagal mengubah supplier: "+a.message)}}},mo=t=>{Le=Math.max(1,parseInt(t,10)||1),Oe()},ya=async(t,e="to_store",a="")=>{const r=(i.products||[]).find(M=>String(M.id)===String(t));if(!r)return x("Produk tidak ditemukan!");ea(r,i.suppliers||[]);const s=Array.isArray(r.variants)&&r.variants.length>0;let o=a;if(s&&!o)if(r.variants.length===1)o=r.variants[0].name;else{const M=r.variants.map((S,w)=>`${w+1}. ${S.name} (Rak: ${S.storeStock||0}, Gudang: ${S.warehouseStock||0})`).join(`
`),C=await(typeof window.customPrompt=="function"?window.customPrompt(`Pilih Nomor Varian yang akan dipindahkan:
${M}`,"1"):Promise.resolve(null));if(!C)return;const A=parseInt(C,10)-1;if(A>=0&&A<r.variants.length)o=r.variants[A].name;else{const S=r.variants.find(w=>w.name.toLowerCase()===C.trim().toLowerCase());if(S)o=S.name;else return x("Pilihan varian tidak valid!")}}let l=r;if(o&&s){const M=r.variants.find(C=>C.name===o);M&&(l=M)}const n=e==="to_store"?"warehouse":"store",c=e==="to_store"?"store":"warehouse",p=n==="warehouse"?"Gudang Cadangan":"Rak Toko",d=c==="warehouse"?"Gudang Cadangan":"Rak Toko",u=Number(l[n==="warehouse"?"warehouseStock":"storeStock"])||0;if(u<=0)return x(`Stok di ${p} saat ini kosong (0)!`);const f=o?` [${o}]`:"",v=String(Math.min(u,10)),h=e==="to_store"?`Pindahkan ke Rak Toko${f}
(Tersedia di ${p}: ${u} ${r.unit||"pcs"}):`:`Kembalikan ke Gudang Cadangan${f}
(Tersedia di ${p}: ${u} ${r.unit||"pcs"}):`,y=await(typeof window.customPrompt=="function"?window.customPrompt(h,v):Promise.resolve(null));if(!y)return;const T=parseFloat(y)||0;if(T<=0)return x("Jumlah yang dimasukkan tidak valid!");if(T>u)return x(`Jumlah melebihi stok ${p} (maksimal ${u})!`);L(`Memindahkan stok ke ${d}...`);try{const M=qr(r,n,c,T,o);if(!M.success)throw new Error(M.error||M.message||"Gagal memindahkan stok");Array.isArray(r.internalTransfers)&&r.internalTransfers.length>0&&(r.internalTransfers[r.internalTransfers.length-1].userName=window.currentUser?.name||"Staf Toko");const C={storeStock:r.storeStock,warehouseStock:r.warehouseStock,stock:r.stock,stockBatches:r.stockBatches||[],internalTransfers:(r.internalTransfers||[]).slice(-50)};s&&(C.variants=r.variants),await P.collection("freshmart").doc("cms_data").collection("products").doc(r.id.toString()).update(C);try{localStorage.setItem("freshmart_products",JSON.stringify(i.products))}catch{}await(typeof O=="function"?O:window.saveApp||(async()=>{}))([],{updateType:"stock_change",updatedProductIds:[r.id.toString()]}),D(),x(`Sukses memindahkan ${T} ${r.unit||"pcs"} ke ${d}!`),Oe(),window.rAdmItms?.("products")}catch(M){D(),x("Gagal memindahkan stok: "+M.message)}},bo=t=>ya(t,"to_store"),uo=t=>ya(t,"to_warehouse");window.openProductFifoModal=sr;window.closeProductFifoModal=no;window.switchFifoTab=oo;window.setLedgerFilter=lo;window.getProductMutationLedger=ar;window.handleLinkFifoSupplier=co;window.handleSetFifoPrimarySupplier=po;window.handleFifoSimulateChange=mo;window.quickTransferStock=ya;window.quickTransferWarehouseToStore=bo;window.quickTransferStoreToWarehouse=uo;let xt=null;const Je=async t=>{if(!t||!t.length)return;let e=i.productOrder&&i.productOrder.length?[...i.productOrder]:(i.products||[]).map(o=>String(o.id));const a=new Set(e);(i.products||[]).forEach(o=>{const l=String(o.id);a.has(l)||(e.push(l),a.add(l))});const r=new Set(t),s=[];e.forEach((o,l)=>{r.has(o)&&s.push(l)}),t.forEach((o,l)=>{l<s.length&&(e[s[l]]=o)}),i.productOrder=e,Xa(i.products);try{await(typeof O=="function"?O:window.saveApp||(async()=>{}))(["productOrder"]),x("Urutan produk berhasil disimpan!")}catch(o){console.warn("Gagal simpan urutan produk:",o)}rAdmItms("products")};window.applyNewProductOrder=Je;window.moveProductOrder=async(t,e)=>{const a=String(t),r=[...i.products||[]],s=(Ee||window.aSq||"").toLowerCase().trim(),o=s.replace(/^\][a-zA-Z0-9]{2}/,"").trim()||s,l=r.filter(b=>{const u=String(b.name||b.title||b.bankName||b.code||""),f=String(b.sku||""),v=String(b.barcode||""),h=String(b.phone||""),y=String(b.id||""),T=`sku-${y}`;let M=(u+" "+f+" "+v+" "+h+" "+y+" "+T).toLowerCase().includes(o);return!M&&b.variants&&(M=b.variants.some((C,A)=>{const S=String(C.sku||"").toLowerCase(),w=String(C.barcode||"").toLowerCase(),I=`${f||y}-${A+1}`.toLowerCase();return S&&S.includes(o)||w&&w.includes(o)||I.includes(o)})),M}),n=l.findIndex(b=>String(b.id)===a);if(n===-1)return;const c=n+e;if(c<0||c>=l.length)return;const p=l.map(b=>String(b.id)),d=p[n];p[n]=p[c],p[c]=d,await Je(p)};window.jumpProductOrder=async t=>{const e=String(t),a=[...i.products||[]],r=(Ee||window.aSq||"").toLowerCase(),s=a.filter(c=>{let p=(c.name||c.title||c.bankName||c.code||c.sku||c.phone||"").toLowerCase().includes(r);return!p&&c.variants&&(p=c.variants.some(d=>d.sku&&d.sku.toLowerCase().includes(r))),p}),o=s.findIndex(c=>String(c.id)===e);if(o===-1)return;const l=s[o],n=typeof window.customPrompt=="function"?window.customPrompt:null;n&&n(`Pindahkan urutan "${l.name}" (1 - ${s.length}):`,String(o+1),async c=>{if(!c)return;const p=parseInt(c,10);if(isNaN(p)||p<1||p>s.length)return x(`Nomor urut harus antara 1 sampai ${s.length}`);const d=p-1;if(d===o)return;const b=s.map(f=>String(f.id)),[u]=b.splice(o,1);b.splice(d,0,u),await Je(b)})};window.autoGroupProductsByCategory=async()=>{window.showConfirm?.("Rapikan per Kategori","Susun produk otomatis berdasarkan Kategori dan Jenis (Sub-Kategori) agar produk sejenis (seperti semen, paku, cat) berkelompok rapi?",async()=>{const t=[...i.products||[]];t.sort((a,r)=>{const s=(a.category||"").toLowerCase(),o=(r.category||"").toLowerCase();if(s!==o)return s.localeCompare(o);const l=(a.subCategory||"").toLowerCase(),n=(r.subCategory||"").toLowerCase();return l!==n?l.localeCompare(n):(a.name||"").localeCompare(r.name||"")});const e=t.map(a=>String(a.id));await Je(e),x("Produk berhasil dirapikan per kategori!")},"Ya, Rapikan",!1)};window.toggleProductOrderMenu=t=>{t&&t.stopPropagation();const e=k("admin-product-order-dropdown");e&&e.classList.toggle("hidden")};window.sortProductsQuick=async t=>{const e=k("admin-product-order-dropdown");e&&e.classList.add("hidden");const a=[...i.products||[]];t==="az"?a.sort((s,o)=>(s.name||"").localeCompare(o.name||"")):t==="za"?a.sort((s,o)=>(o.name||"").localeCompare(s.name||"")):t==="price_low"?a.sort((s,o)=>(parseFloat(s.price)||0)-(parseFloat(o.price)||0)):t==="price_high"?a.sort((s,o)=>(parseFloat(o.price)||0)-(parseFloat(s.price)||0)):t==="reset_newest"&&a.sort((s,o)=>(o.id||0)-(s.id||0));const r=a.map(s=>String(s.id));await Je(r)};typeof document<"u"&&document.addEventListener("click",t=>{const e=k("admin-product-order-dropdown-wrap"),a=k("admin-product-order-dropdown");e&&a&&!e.contains(t.target)&&a.classList.add("hidden")});const xo=()=>{const t=k("admin-list-container");if(!t)return;if(xt){try{xt.destroy()}catch{}xt=null}(pt||window.cTab||"products")==="products"&&(xt=new Qr(t,{handle:".product-drag-handle",animation:200,ghostClass:"opacity-30",chosenClass:"ring-2",dragClass:"shadow-2xl",forceFallback:!1,onEnd:async a=>{if(a.oldIndex===a.newIndex)return;const s=Array.from(t.querySelectorAll("[data-id]")).map(o=>o.getAttribute("data-id")).filter(Boolean);await Je(s)}}))};window.rAdmL=t=>{mt(t),typeof window.setCTab=="function"&&window.setCTab(t),window.cTab=t;const e=t==="products"?'<div id="admin-product-stats" class="mb-5"></div>':"",a=t==="colors"?`
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
                ${(i.suppliers||[]).length>0?`
                    <div class="relative inline-block">
                        <select onchange="window.adminSupplierFilter = this.value; rAdmItms('products');" class="h-10 px-3.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold text-xs border border-slate-200/90 dark:border-slate-700/80 cursor-pointer shadow-2xs hover:bg-slate-50 transition-colors">
                            <option value="">Semua Supplier (${(i.suppliers||[]).length})</option>
                            ${(i.suppliers||[]).map(o=>`<option value="${o.id}" ${window.adminSupplierFilter===String(o.id)?"selected":""}>${m(o.name)}</option>`).join("")}
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
                    <img src="${m(i.store.heroMascotImg||"/putri_mascot_anim.gif")}" onerror="this.onerror=null;this.src='/putri_mascot_3d.jpg';" alt="Maskot" class="w-full h-full object-cover">
                    <div class="absolute bottom-0 inset-x-0 bg-slate-950/85 text-[7px] text-center font-black text-amber-300 py-0.5">SLIDE #0</div>
                </div>
                <div class="min-w-0">
                    <div class="flex items-center gap-2 flex-wrap">
                        <h4 class="font-extrabold text-xs sm:text-sm text-white">Slide #0: Banner Sambutan &amp; Maskot 3D Toko</h4>
                        <span class="px-2 py-0.5 rounded-full text-[8.5px] font-black uppercase ${i.store.showHeroSlide!==!1&&i.store.showHeroSlide!=="false"?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/40":"bg-slate-700 text-slate-400"}">
                            ${i.store.showHeroSlide!==!1&&i.store.showHeroSlide!=="false"?"Aktif Tayang":"Disembunyikan"}
                        </span>
                    </div>
                    <p class="text-[10px] text-slate-300 mt-0.5 line-clamp-2">Ganti foto maskot, ubah status badge 'Siap Melayani', teks sambutan, atau sembunyikan slide utama.</p>
                </div>
            </div>
            <button onclick="if(typeof window.openHeroBannerModal==='function') window.openHeroBannerModal(); else if(typeof window.openSettingForm==='function') window.openSettingForm('profile');" type="button" class="shrink-0 w-full sm:w-auto h-11 px-4 rounded-xl primary-bg hover:opacity-90 text-white font-bold text-xs flex items-center justify-center gap-2 active:scale-95 shadow-sm transition-all cursor-pointer">
                <i class="fa-solid fa-wand-magic-sparkles"></i> Kelola Maskot &amp; Sambutan
            </button>
        </div>`:"";R("admin-content",`
        <div class="max-w-5xl mx-auto pb-16">
        ${e}
        ${s}
        <div class="mb-5">
            ${a}
            <div class="flex flex-col sm:flex-row gap-2.5 sm:gap-3 items-stretch sm:items-center mb-4">
                <div class="relative flex-1">
                    <i class="fa-solid fa-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm"></i>
                    <input autocomplete='off' id="admin-search-input" name='cari_admin_q' value="${m(Ee||window.aSq||"")}" placeholder="Cari produk, SKU, varian, barcode..." oninput="window.handleAdminSearch(this.value, '${t}')" class="w-full h-12 bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700/80 rounded-2xl pl-11 pr-20 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15 shadow-2xs transition-all" >
                    <button type="button" id="admin-search-clear-btn" onclick="window.clearAdminSearch('${t}')" class="${Ee||window.aSq?"":"hidden"} absolute right-11 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center text-slate-400 hover:text-slate-600 rounded-xl transition-all cursor-pointer" title="Hapus Pencarian"><i class="fa-solid fa-circle-xmark text-sm"></i></button>
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
    `),rAdmItms(t)};window.handleAdminSearch=(t,e)=>{const a=(t||"").toLowerCase();typeof window.setASq=="function"?window.setASq(a):window.aSq=a;const r=k("admin-search-clear-btn");r&&r.classList.toggle("hidden",!a),window.rAdmItms?.(e||"products",!0)};window.clearAdminSearch=t=>{const e=k("admin-search-input");e&&(e.value=""),window.handleAdminSearch("",t||"products"),e&&e.focus()};window.rAdmItms=(t,e=!1)=>{t&&(mt(t),typeof window.setCTab=="function"&&window.setCTab(t),window.cTab=t);const a=k("admin-list-container"),r=a?a.closest(".scroll-content"):null,s=r?r.scrollTop:0,o=k("admin-product-stats");if(t==="products"&&o&&(!e||!o.children.length)){const d=Pt();R("admin-product-stats",`
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
                        <span class="text-[10px] font-black uppercase tracking-wider" style="color: var(--color-primary)">Varian Aktif</span>
                        <div class="w-9 h-9 rounded-xl text-white flex items-center justify-center text-xs shadow-xs shrink-0" style="background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark)); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);">
                            <i class="fa-solid fa-layer-group"></i>
                        </div>
                    </div>
                    <p class="text-xl sm:text-2xl font-black tracking-tight" style="color: var(--color-primary)">${d.activeVar}</p>
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
                        <p class="text-xs font-bold text-slate-500 dark:text-slate-400">Modal: <b class="text-slate-800 dark:text-slate-200">${g(d.assetHpp)}</b></p>
                        <p class="text-xs font-bold text-slate-500 dark:text-slate-400 mt-0.5">Jual: <b class="text-slate-800 dark:text-slate-200">${g(d.assetJual)}</b></p>
                    </div>
                    <button type="button" onclick="if(window.openAdminTab){window.openAdminTab('reports'); setTimeout(() => window.switchReportTab && window.switchReportTab('stock'), 100);}" class="mt-2 inline-flex items-center gap-1.5 text-[10px] font-black text-[var(--color-primary)] hover:underline cursor-pointer transition-colors">
                        <i class="fa-solid fa-chart-pie text-[10px]"></i>
                        <span>Laporan Stok Lengkap &rarr;</span>
                    </button>
                </div>
            </div>
        `)}let l=[...i[t]||[]];t==="products"?Xa(l):l.sort((d,b)=>(b.id||0)-(d.id||0));const n=(Ee||window.aSq||"").toLowerCase(),c=window.adminSupplierFilter||"";let p=l.filter(d=>{if(t==="products"&&c&&!(String(d.supplierId)===String(c)||Array.isArray(d.suppliers)&&d.suppliers.some(w=>String(w.supplierId)===String(c))))return!1;const b=n.replace(/^\][a-zA-Z0-9]{2}/,"").trim()||n,u=b.replace(/^0+/,""),f=b.replace(/[\s\-_.]/g,""),v=String(d.name||d.title||d.bankName||d.code||""),h=String(d.sku||""),y=String(d.barcode||""),T=String(d.phone||""),M=String(d.id||""),C=`sku-${M}`;let A=(v+" "+h+" "+y+" "+T+" "+M+" "+C).toLowerCase().includes(b);if(!A&&u&&y&&(A=y.replace(/^0+/,"").toLowerCase()===u),!A&&f&&h&&(A=h.replace(/[\s\-_.]/g,"").toLowerCase()===f),t==="products"&&!A){if(d.supplierId&&(i.suppliers||[]).length){const S=i.suppliers.find(w=>String(w.id)===String(d.supplierId));S&&String(S.name||"").toLowerCase().includes(b)&&(A=!0)}!A&&Array.isArray(d.suppliers)&&(A=d.suppliers.some(S=>String(S.supplierName||"").toLowerCase().includes(b))),!A&&Array.isArray(d.variants)&&(A=d.variants.some((S,w)=>{const I=String(S.sku||"").toLowerCase(),N=String(S.barcode||"").toLowerCase(),_=`${h||M}-${w+1}`.toLowerCase(),V=N.replace(/^0+/,"");return I&&I.includes(b)||N&&(N.includes(b)||u&&V===u)||_.includes(b)}))}return A});if(!p.length)return R("admin-list-container",'<div class="flex flex-col items-center justify-center py-20 text-slate-400 font-bold bg-white dark:bg-slate-800 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm text-center"><i class="fa-solid fa-folder-open text-5xl mb-4 opacity-30"></i>Data kosong</div>');R("admin-list-container",p.map((d,b)=>{if(t==="categories"){const S=(i.products||[]).filter(K=>K.category===d.name),w=S.length,I=Array.isArray(d.subCategories)?d.subCategories:[],_=[...new Set(S.map(K=>(K.subCategory||"").trim()).filter(Boolean))].filter(K=>!I.some(xe=>xe.toLowerCase()===K.toLowerCase())),V=d.img?`<div class="w-14 h-14 sm:w-16 sm:h-16 shrink-0 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-2xl p-1 flex items-center justify-center overflow-hidden"><img loading="lazy" src="${m(d.img)}" alt="${m(d.name)}" class="w-full h-full object-contain" onerror="this.onerror=null;this.parentElement.innerHTML='<div class=\\'w-full h-full flex items-center justify-center text-slate-400 font-bold text-xl\\'><i class=\\'fa-solid fa-shapes\\'></i></div>';"></div>`:'<div class="w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-2xl flex items-center justify-center text-xl font-bold border border-slate-200 dark:border-slate-700" style="background: rgba(var(--color-primary-rgb),0.1); color: var(--color-primary)"><i class="fa-solid fa-layer-group"></i></div>';return`
            <div data-id="${d.id}" class="category-admin-card p-4 sm:p-5 md:p-6 flex flex-col gap-3.5 rounded-2xl sm:rounded-[1.5rem] border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800 shadow-2xs hover:shadow-md hover:border-[var(--color-primary)]/40 transition-all duration-200">
                <!-- Header: Ikon + Nama Kategori + Badge Jumlah + Tombol Aksi -->
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div class="flex items-center gap-3.5 min-w-0">
                        ${V}
                        <div class="min-w-0 flex flex-col justify-center">
                            <div class="flex items-center gap-2 flex-wrap">
                                <h4 class="text-sm sm:text-base font-black text-slate-800 dark:text-slate-100 uppercase tracking-wide leading-tight">${m(d.name)}</h4>
                                <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                                    <i class="fa-solid fa-boxes-stacked mr-1 text-[9px] text-[var(--color-primary)]"></i>${w} Produk
                                </span>
                                <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.2)]">
                                    <i class="fa-solid fa-shapes mr-1 text-[9px]"></i>${I.length} Sub-Kategori
                                </span>
                            </div>
                            <p class="text-[11px] text-slate-400 mt-0.5 font-medium">Master Kategori &amp; Pengelompokan Jenis Produk</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-2 self-end sm:self-center shrink-0">
                        <button type="button" onclick="event.stopPropagation(); window.promptAddSubCategory('${d.id}')" class="px-3.5 py-2 rounded-xl primary-bg-soft border primary-border text-[var(--color-primary)] hover:primary-bg hover:text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-2xs active:scale-95 cursor-pointer" title="Tambah Sub-Kategori ke ${m(d.name)}">
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
                        ${_.length>0?`
                            <button type="button" onclick="event.stopPropagation(); window.syncSubCategoriesFromProducts('${d.id}')" class="text-[10px] font-bold text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1 cursor-pointer">
                                <i class="fa-solid fa-wand-magic-sparkles text-amber-500"></i>
                                <span>Tarik ${_.length} sub dari produk</span>
                            </button>
                        `:""}
                    </div>

                    <div class="flex flex-wrap items-center gap-2">
                        ${I.length===0?`
                            <div class="text-xs text-slate-400 italic py-1 flex items-center gap-2">
                                <i class="fa-solid fa-circle-info text-slate-300 dark:text-slate-600"></i>
                                <span>Belum ada sub-kategori. Klik tombol <b>+ Sub-Kategori</b> di atas untuk menambahkan kelompok jenis produk.</span>
                            </div>
                        `:I.map(K=>{const xe=S.filter(ut=>(ut.subCategory||"").trim().toLowerCase()===K.toLowerCase()).length;return`
                            <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-2xs hover:border-[var(--color-primary)]/50 transition-all group">
                                <i class="fa-solid fa-shapes text-[10px] text-[var(--color-primary)]"></i>
                                <span>${m(K)}</span>
                                <span class="text-[10px] font-extrabold px-1.5 py-0.2 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600" title="${xe} Produk">${xe}</span>
                                <button type="button" onclick="event.stopPropagation(); window.removeCategorySubCategory('${d.id}', '${m(K).replace(/'/g,"\\'")}')" class="text-slate-400 hover:text-rose-500 p-0.5 rounded ml-0.5 transition-colors cursor-pointer" title="Hapus Sub-Kategori '${m(K)}'">
                                    <i class="fa-solid fa-xmark text-[11px]"></i>
                                </button>
                            </span>`}).join("")}
                        <button type="button" onclick="event.stopPropagation(); window.promptAddSubCategory('${d.id}')" class="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-bold border border-dashed border-slate-300 dark:border-slate-600 text-slate-500 dark:text-slate-400 hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.05)] transition-all cursor-pointer">
                            <i class="fa-solid fa-plus text-[9px]"></i>
                            <span>Tambah Sub</span>
                        </button>
                    </div>
                </div>
            </div>`}let u=t==="products",f=u&&(d.isActive==="false"||d.isActive===!1),v=f?"border-rose-200 bg-rose-50/50 dark:border-rose-900/50 dark:bg-rose-900/10":"border-slate-200/90 bg-white/95 dark:border-slate-700/80 dark:bg-slate-800/90",h=f?"text-slate-500 dark:text-slate-400 line-through":"text-slate-800 dark:text-slate-100";const y=Rr(d,{size:"thumb"});let M=!!(d.img&&typeof d.img=="string"&&d.img.trim()&&!jr(d.img))?`<div class="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-white border border-slate-100 dark:border-slate-700/60 rounded-2xl p-1.5 flex items-center justify-center overflow-hidden"><img loading="lazy" src="${m(d.img)}" alt="${m(d.name)}" onerror="this.onerror=null;this.style.display='none';if(this.nextElementSibling)this.nextElementSibling.style.display='flex';" class="w-full h-full object-contain ${f?"grayscale opacity-50":""}"><div class="w-full h-full" style="display:none">${y}</div></div>`:`<div class="w-16 h-16 sm:w-20 sm:h-20 shrink-0 border border-slate-100 dark:border-slate-700/60 rounded-2xl overflow-hidden flex items-center justify-center">${y}</div>`;const C=window.isAdm||window.__localIsAdm,A=i.store.useStock===!0||i.store.useStock==="true";return`
        <div data-id="${d.id}" class="product-admin-card p-4 sm:p-5 rounded-2xl sm:rounded-3xl border ${v} shadow-2xs hover:shadow-md hover:border-[var(--color-primary)]/40 transition-all flex flex-col gap-3.5 group">
            <!-- BARIS 1: IDENTITAS PRODUK, THUMBNAIL, STOK & FIFO -->
            <div class="flex items-start gap-3 sm:gap-4 min-w-0">
                <!-- Drag Handle & Order Badge -->
                ${u?`
                    <div class="flex flex-col items-center justify-center shrink-0 gap-1 select-none pt-0.5" onclick="event.stopPropagation();">
                        <div class="product-drag-handle w-6 h-6 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700/60 flex items-center justify-center cursor-grab active:cursor-grabbing text-slate-400 hover:text-[var(--color-primary)] transition-colors" title="Tahan &amp; geser untuk mengatur urutan">
                            <i class="fa-solid fa-grip-vertical text-xs"></i>
                        </div>
                        <button class="w-6 h-6 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-700/80 text-slate-600 dark:text-slate-300 text-[9px] flex items-center justify-center transition-all active:scale-90 ${b===0?"opacity-25 pointer-events-none":""}" onclick="window.moveProductOrder('${d.id}', -1)" title="Geser Naik 1 Posisi">
                            <i class="fa-solid fa-chevron-up"></i>
                        </button>
                        <button class="text-[9px] font-mono font-black px-1.5 py-0.5 rounded-md primary-bg-soft border primary-border text-[var(--color-primary)] transition-all" onclick="window.jumpProductOrder('${d.id}')" title="Klik untuk lompat ke nomor urut tertentu">
                            #${b+1}
                        </button>
                        <button class="w-6 h-6 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-700/80 text-slate-600 dark:text-slate-300 text-[9px] flex items-center justify-center transition-all active:scale-90 ${b===p.length-1?"opacity-25 pointer-events-none":""}" onclick="window.moveProductOrder('${d.id}', 1)" title="Geser Turun 1 Posisi">
                            <i class="fa-solid fa-chevron-down"></i>
                        </button>
                    </div>
                `:""}

                <!-- Thumbnail -->
                ${M}

                <!-- Info Teks Produk -->
                <div class="min-w-0 flex-1 flex flex-col justify-center">
                    <h4 class="text-sm sm:text-base font-black ${h} line-clamp-2 leading-snug tracking-tight mb-1 cursor-pointer hover:text-[var(--color-primary)] transition-colors" onclick="oAEd('${t}','${d.id}')">
                        ${m(d.name||d.title||d.bankName||d.code||"Item")}
                    </h4>

                    ${u?`
                        <div class="flex items-center gap-2 flex-wrap mb-1.5">
                            <span class="text-base sm:text-lg font-black text-[var(--color-primary)] tracking-tight">${g(d.price)}</span>
                            <span class="inline-flex items-center gap-1 font-mono text-[9px] font-bold text-slate-500 dark:text-slate-400 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700/80 hover:text-[var(--color-primary)] dark:hover:text-[var(--color-primary)] px-2 py-0.5 rounded-md border border-slate-200/60 hover:border-[var(--color-primary)] dark:border-slate-600/60 transition-colors cursor-pointer" onclick="event.stopPropagation(); window.openProductBarcodeLabelModal?.('${d.id}')" title="Klik untuk Cetak Label Barcode &amp; Harga">
                                <i class="fa-solid fa-barcode text-[8.5px]"></i> ${m(d.sku||"TANPA SKU")}
                            </span>
                            ${d.variants&&d.variants.length>0?`
                                <span class="inline-flex items-center gap-1 text-[9px] font-black border px-2 py-0.5 rounded-md" style="background: rgba(var(--color-primary-rgb), 0.08); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25);" title="${d.variants.length} Varian">
                                    <i class="fa-solid fa-layer-group text-[8.5px]"></i> ${d.variants.length} Varian
                                </span>
                            `:""}
                        </div>
                    `:""}

                    <!-- Badges Baris 2: Stok, HPP, Terjual & FIFO -->
                    <div class="flex items-center gap-1.5 flex-wrap text-xs">
                        ${u&&C?(()=>{const S=zr(d,i.store);if(!S.isManaged)return"";if(S.isOutOfStock)return'<span class="inline-flex items-center gap-1 text-[9.5px] font-bold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 px-2 py-0.5 rounded-md border border-rose-200/80 dark:border-rose-900/60"><i class="fa-solid fa-boxes-stacked mr-0.5"></i>Habis (0)</span>';const w=S.stock!=null?String(S.stock).replace(/\.?0+$/,""):"0";return`<span class="inline-flex items-center gap-1 text-[9.5px] font-bold ${S.isLowStock?"text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800":"text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800"} px-2 py-0.5 rounded-md border"><i class="fa-solid fa-boxes-stacked mr-0.5"></i>Stok: ${w}</span>`})():""}

                        ${u&&C&&d.hpp?`
                            <span class="inline-flex items-center gap-1 text-[9.5px] font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30 px-2 py-0.5 rounded-md border border-amber-200/60 dark:border-amber-800/60" title="Harga Modal (HPP)">
                                <i class="fa-solid fa-coins mr-0.5"></i>HPP: ${g(d.hpp)}
                            </span>
                        `:""}

                        ${u?(()=>{const S=d.variants&&d.variants.length?d.variants.reduce((w,I)=>w+(parseFloat(I.totalSold)||0),0):parseFloat(d.totalSold)||0;return S>0?`
                                <span class="inline-flex items-center gap-1 text-[9.5px] font-bold text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/30 px-2 py-0.5 rounded-md border border-orange-200/60 dark:border-orange-800/60">
                                    <i class="fa-solid fa-fire mr-0.5"></i>Terjual: ${S}
                                </span>`:""})():""}

                        ${u?(()=>{const S=Array.isArray(d.suppliers)&&d.suppliers.length>0?d.suppliers:d.supplierId?[{supplierId:d.supplierId,isPrimary:!0}]:[];if(!S.length)return"";const w=S.find(K=>K.isPrimary)||S[0],I=(i.suppliers||[]).find(K=>String(K.id)===String(w.supplierId)),N=I?I.name:w.supplierName||"Supplier",_=S.length-1,V=Array.isArray(d.stockBatches)?d.stockBatches.filter(K=>(parseFloat(K.remainingQty)||0)>0).length:0;return`
                                <button type="button" onclick="event.stopPropagation(); window.openProductFifoModal?.('${d.id}');" class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[9.5px] font-bold text-teal-700 dark:text-teal-300 bg-teal-50 hover:bg-teal-100 dark:bg-teal-950/40 dark:hover:bg-teal-900/60 border border-teal-200 dark:border-teal-800 transition-all cursor-pointer shadow-2xs" title="Lihat Rekanan Supplier &amp; Antrean Batch FIFO">
                                    <i class="fa-solid fa-truck-field text-[8.5px]"></i>
                                    <span class="max-w-[120px] truncate">${m(N)}</span>
                                    ${_>0?`<span class="bg-teal-200 dark:bg-teal-800 text-teal-800 dark:text-teal-200 px-1 py-0.2 rounded text-[8.5px] font-black">+${_}</span>`:""}
                                </button>
                                ${V>0?`
                                    <button type="button" onclick="event.stopPropagation(); window.openProductFifoModal?.('${d.id}');" class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md text-[9px] font-black text-amber-700 dark:text-amber-300 bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 transition-all cursor-pointer" title="Lacak Antrean FIFO">
                                        <i class="fa-solid fa-layer-group text-[8px]"></i>
                                        <span>${V} Batch</span>
                                    </button>
                                `:""}
                            `})():""}

                        ${t==="colors"?`<div class="flex items-center gap-2 mt-1"><div class="w-4 h-4 rounded-full border border-slate-200 dark:border-slate-600 shadow-sm" style="background-color: ${m(d.hex||"transparent")}"></div><p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest"><i class="fa-solid fa-swatchbook mr-1"></i>${m(d.catalog||"Tanpa Katalog")}</p></div>`:""}

                        ${t==="customers"?`
                            <p class="text-xs font-bold text-slate-500 dark:text-slate-400"><i class="fa-brands fa-whatsapp text-emerald-500 mr-1"></i>+${m(d.phone)}</p>
                            <div class="flex items-center gap-1.5 mt-1 flex-wrap">
                                <span class="text-[11px] font-bold text-[var(--color-primary)]"><i class="fa-solid fa-star mr-1"></i>${parseFloat(d.points)||0} Poin</span>
                                ${d.paylaterActive===!0||d.paylaterActive==="true"?`
                                    <span class="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 flex items-center gap-1">
                                        <i class="fa-solid fa-bolt text-emerald-500"></i> PayLater: ${g(Math.max(0,(parseFloat(d.paylaterLimit)||0)-Math.max(0,parseFloat(d.paylaterUsed)||0)))} / ${g(parseFloat(d.paylaterLimit)||0)}
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
                    ${u?f?`<button type="button" class="h-10 px-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-500 hover:text-white dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95 shadow-2xs cursor-pointer" onclick="event.stopPropagation(); toggleProductStatus('${d.id}', true)" title="Aktifkan Kembali Stok Produk"><i class="fa-solid fa-check text-xs"></i><span>Aktifkan</span></button>`:`<button type="button" class="h-10 px-3.5 rounded-xl bg-amber-50 hover:bg-amber-500 hover:text-white dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800 font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95 shadow-2xs cursor-pointer" onclick="event.stopPropagation(); toggleProductStatus('${d.id}', false)" title="Nonaktifkan (Habis)"><i class="fa-solid fa-ban text-xs"></i><span>Nonaktifkan</span></button>`:""}

                    ${u&&A?`
                        <button type="button" class="h-10 px-3.5 rounded-xl primary-bg-soft border primary-border text-[var(--color-primary)] hover:primary-bg hover:text-white font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95 shadow-2xs cursor-pointer" onclick="event.stopPropagation(); openRestockModal('${d.id}')" title="Restock Stok Produk">
                            <i class="fa-solid fa-boxes-stacked text-xs"></i>
                            <span>Restock</span>
                        </button>
                    `:""}

                    ${u?`
                        <button type="button" class="h-10 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700/80 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-600 font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95 shadow-2xs cursor-pointer" onclick="event.stopPropagation(); openQuickPriceModal('${d.id}')" title="Ubah Cepat Harga Jual">
                            <i class="fa-solid fa-tags text-xs"></i>
                            <span class="hidden sm:inline">Harga</span>
                        </button>

                        <button type="button" class="h-10 px-3 rounded-xl border font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95 shadow-2xs cursor-pointer hover:opacity-90" style="background: rgba(var(--color-primary-rgb), 0.08); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25);" onclick="event.stopPropagation(); window.openProductBarcodeLabelModal?.('${d.id}')" title="Cetak Label Harga &amp; Barcode Barang">
                            <i class="fa-solid fa-barcode text-xs"></i>
                            <span class="hidden sm:inline">Label</span>
                        </button>
                    `:""}

                    ${t==="customers"?`
                        <button type="button" class="h-10 px-3.5 rounded-xl bg-amber-50 hover:bg-amber-500 hover:text-white dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border border-amber-300 dark:border-amber-800 font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95 shadow-2xs cursor-pointer" onclick="event.stopPropagation(); if(typeof window.setCurrentMember==='function') window.setCurrentMember(appData.customers ? appData.customers.find(c=>String(c.id||c.phone)===String('${d.id||d.phone}'))||{name:'${m(d.name)}',phone:'${m(d.phone)}',points:${parseFloat(d.points)||0}} : {name:'${m(d.name)}',phone:'${m(d.phone)}',points:${parseFloat(d.points)||0}}); if(typeof window.openMemberModal==='function') window.openMemberModal();" title="Buka Kartu Member VIP">
                            <i class="fa-solid fa-id-card text-xs"></i>
                            <span>Kartu Member</span>
                        </button>
                    `:""}
                </div>

                <!-- Aksi Utama: Duplikat, Edit, Hapus -->
                <div class="flex items-center gap-2 ml-auto">
                    ${u?`
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
        </div>`}).join("")),t==="products"&&xo(),r&&requestAnimationFrame(()=>{r.scrollTop=s})};window.promptAddSubCategory=async t=>{const e=(i.categories||[]).find(o=>String(o.id)===String(t));if(!e)return;const r=await(typeof ht=="function"?ht:window.customPrompt||prompt)(`Tambah Sub-Kategori Baru untuk '${e.name}':`,"");if(!r||!r.trim())return;const s=r.trim();if(e.subCategories=Array.isArray(e.subCategories)?e.subCategories:[],e.subCategories.some(o=>o.toLowerCase()===s.toLowerCase())){x("Sub-kategori ini sudah ada!");return}e.subCategories.push(s);try{await(typeof O=="function"?O:window.saveApp||(async()=>{}))(["categories"]),x(`Sub-kategori '${s}' berhasil ditambahkan ke '${e.name}'!`),window.rAdmItms?.("categories")}catch(o){console.error("Gagal simpan subkategori:",o),x("Gagal menyimpan sub-kategori: "+(o.message||""))}};window.removeCategorySubCategory=async(t,e)=>{const a=(i.categories||[]).find(o=>String(o.id)===String(t));if(!a)return;const r=typeof Ua=="function"?Ua:window.showConfirm,s=async()=>{a.subCategories=(a.subCategories||[]).filter(o=>o.toLowerCase()!==e.toLowerCase());try{await(typeof O=="function"?O:window.saveApp||(async()=>{}))(["categories"]),x(`Sub-kategori '${e}' berhasil dihapus!`),window.rAdmItms?.("categories")}catch(o){console.error("Gagal hapus subkategori:",o),x("Gagal menghapus sub-kategori: "+(o.message||""))}};r?r("Hapus Sub-Kategori",`Hapus sub-kategori '${e}' dari kelompok '${a.name}'? Produk yang sudah ada tidak akan terhapus.`,s,"Ya, Hapus",!0):await s()};window.syncSubCategoriesFromProducts=async t=>{const e=(i.categories||[]).find(s=>String(s.id)===String(t));if(!e)return;const a=[...new Set((i.products||[]).filter(s=>s.category===e.name&&s.subCategory).map(s=>s.subCategory.trim()))];if(!a.length){x("Tidak ditemukan sub-kategori di produk untuk kategori ini.");return}e.subCategories=Array.isArray(e.subCategories)?e.subCategories:[];let r=0;if(a.forEach(s=>{e.subCategories.some(o=>o.toLowerCase()===s.toLowerCase())||(e.subCategories.push(s),r++)}),r===0){x("Semua sub-kategori produk sudah terdaftar di master!");return}try{await(typeof O=="function"?O:window.saveApp||(async()=>{}))(["categories"]),x(`${r} sub-kategori berhasil disinkronkan dari produk!`),window.rAdmItms?.("categories")}catch(s){console.error("Gagal sinkron subkategori:",s),x("Gagal sinkron sub-kategori: "+(s.message||""))}};window.openProductFifoModal=sr;function fo(t){if(!t)return"";const e=t.match(/\/d\/([a-zA-Z0-9_-]+)/);return e?`https://drive.google.com/file/d/${e[1]}/preview`:t}const go=t=>window.pushModalHistory?.(t);window.oAAdd=()=>{window.oAEd(pt||window.cTab||"products",null)};window.oAEd=(t,e)=>{mt(t),typeof window.setCTab=="function"&&window.setCTab(t),window.cTab=t,Sa(e),typeof window.setEId=="function"&&window.setEId(e),window.eId=e;let a=e!=null&&e!==""?(i[t]||[]).find(p=>p&&p.id!=null&&String(p.id)===String(e)):null;Re("admin-modal-title",e?"Edit Data":"Tambah Data");let r=At[t]||[],s="";if(t==="products"&&(a&&a.storeStock===void 0&&a.warehouseStock===void 0&&(a.storeStock=a.stock!==void 0?a.stock:0,a.warehouseStock=0),Qe(a&&a.variants?JSON.parse(JSON.stringify(a.variants)):[]),Kt(a&&a.wholesale?JSON.parse(JSON.stringify(a.wholesale)):[]),Ut(a&&a.specTable?JSON.parse(JSON.stringify(a.specTable)):[]),bt(a&&a.multiUnits?JSON.parse(JSON.stringify(a.multiUnits)):[])),t==="categories"){const p=Array.isArray(a?.subCategories)?[...a.subCategories]:typeof a?.subCategories=="string"?a.subCategories.split(",").map(d=>d.trim()).filter(Boolean):[];Ye(p)}const o=["textarea","richtext","variants_builder","wholesale_builder","multi_units_builder","spec_table_builder","subcategories_builder"],l=["img","desc","name","isActive","tag","poTime","video"],n=p=>o.includes(p.type)||l.includes(p.key);r.forEach(p=>{let d=a?p.type==="number"&&a[p.key]!==void 0?a[p.key]:a[p.key]||"":"";const b=n(p)?"lg:col-span-2":"";if(s+=`<div class="flex flex-col gap-1.5 ${b}"><label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest flex items-center gap-1.5">${p.label}</label>`,p.type==="textarea")s+=`<textarea autocomplete='off' id="af-${p.key}" class="admin-input resize-none shadow-sm bg-slate-50 dark:bg-slate-900" rows="3">${m(d)}</textarea>`;else if(p.type==="select")s+=`<div class="relative"><select id="af-${p.key}" class="admin-input shadow-sm cursor-pointer appearance-none pr-10 bg-slate-50 dark:bg-slate-900" onchange="if(window.rVarsB) window.rVarsB();">`,p.options.forEach(u=>{const f=String(d)===String(u.val);s+=`<option value="${u.val}" ${f?"selected":""} class="font-bold">${u.text}</option>`}),s+='</select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]"></i></div>';else if(p.type==="dynamic_select_category")s+=`<div class="relative"><select id="af-${p.key}" class="admin-input shadow-sm cursor-pointer appearance-none pr-10 bg-slate-50 dark:bg-slate-900" onchange="if(window.rVarsB) window.rVarsB(); if(window.updateProductSubCategoryOptions) window.updateProductSubCategoryOptions(this.value);"><option value="" class="font-bold">Pilih Kategori</option>`,i.categories.forEach(u=>{s+=`<option value="${m(u.name)}" ${d===u.name?"selected":""} class="font-bold">${m(u.name)}</option>`}),s+='</select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]"></i></div>';else if(p.type==="dynamic_select_brand")s+=`<div class="relative"><select id="af-${p.key}" class="admin-input shadow-sm cursor-pointer appearance-none pr-10 bg-slate-50 dark:bg-slate-900" onchange="if(window.rVarsB) window.rVarsB();"><option value="" class="font-bold">Tanpa Merek</option>`,(i.brands||[]).forEach(u=>{s+=`<option value="${m(u.name)}" ${d===u.name?"selected":""} class="font-bold">${m(u.name)}</option>`}),s+='</select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]"></i></div>';else if(p.type==="dynamic_select_products")s+=`<div class="relative"><select id="af-${p.key}" class="admin-input shadow-sm cursor-pointer appearance-none pr-10 bg-slate-50 dark:bg-slate-900" onchange="if(window.rVarsB) window.rVarsB();"><option value="" class="font-bold primary-text">-- Semua Produk (Tanpa Batasan) --</option>`,(i.products||[]).forEach(u=>{s+=`<option value="${u.id}" ${d==u.id?"selected":""} class="font-bold">${m(u.name)}</option>`}),s+='</select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]"></i></div>';else if(p.type==="dynamic_select_supplier")s+=`<div class="relative"><select id="af-${p.key}" class="admin-input shadow-sm cursor-pointer appearance-none pr-10 bg-slate-50 dark:bg-slate-900"><option value="" class="font-bold text-slate-400">-- Pilih Rekanan / Supplier Asal --</option>`,(i.suppliers||[]).forEach(u=>{const f=String(d)===String(u.id);s+=`<option value="${u.id}" ${f?"selected":""} class="font-bold">${m(u.name)}${u.code?` (${m(u.code)})`:""}</option>`}),s+='</select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]"></i></div>';else if(p.type==="variants_builder")s+='<div id="variants-builder-container" class="bg-slate-50/50 dark:bg-slate-900/30 p-4 sm:p-5 md:p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-inner min-h-[60px]"></div>';else if(p.type==="wholesale_builder")s+='<div id="wholesale-builder-container" class="bg-slate-50/50 dark:bg-slate-900/30 p-4 sm:p-5 md:p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-inner min-h-[60px]"></div>';else if(p.type==="multi_units_builder")s+='<div id="multi-units-builder-container" class="bg-slate-50/50 dark:bg-slate-900/30 p-4 sm:p-5 md:p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-inner min-h-[60px]"></div>';else if(p.type==="spec_table_builder")s+='<div id="spec-table-builder-container" class="bg-slate-50/50 dark:bg-slate-900/30 p-4 sm:p-5 md:p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-inner min-h-[60px]"></div>';else if(p.type==="subcategories_builder")s+='<div id="subcategories-builder-container" class="bg-slate-50/50 dark:bg-slate-900/30 p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-inner flex flex-col gap-3 min-h-[80px]"></div>';else if(p.key==="subCategory")s+=`
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
                <input autocomplete="off" type="text" id="af-${p.key}" value="${m(d)}" class="admin-input shadow-sm bg-slate-50 dark:bg-slate-900 text-xs hidden mt-1" placeholder="Ketik nama sub-kategori baru..." oninput="window.syncCustomSubCategoryValue(this.value)">
                <p id="af-subCategory-hint" class="text-[10px] text-slate-400 font-medium"></p>
            </div>`;else if(p.key==="sku")s+=`<div class="relative flex items-center"><input autocomplete='off' type="${p.type}" id="af-${p.key}" value="${m(d)}" class="admin-input shadow-sm bg-slate-50 dark:bg-slate-900 !pr-12" placeholder="Scan atau ketik..." ><button type="button" onclick="openCameraScanner('af-${p.key}')" class="absolute right-2 w-9 h-9 flex items-center justify-center text-slate-400 hover:bg-slate-200 hover:text-[var(--color-primary)] rounded-xl transition-all" title="Scan Barcode via HP"><i class="fa-solid fa-qrcode text-lg"></i></button></div>`;else if(p.key==="img")s+=`<div class="flex flex-col gap-1.5">
                <div class="flex gap-3">
                    <input autocomplete='off' type="text" id="af-${p.key}" value="${m(d)}" class="admin-input shadow-sm flex-1 bg-slate-50 dark:bg-slate-900" placeholder="URL Gambar (Boleh dikosongkan)">
                    <label class="primary-bg-soft border primary-border text-[var(--color-primary)] font-bold rounded-xl px-5 flex items-center justify-center cursor-pointer hover:bg-[rgba(var(--color-primary-rgb),0.2)] transition-all shrink-0 active:scale-95 shadow-sm" title="Upload dari Galeri"><i class="fa-solid fa-cloud-arrow-up sm:mr-2"></i><span class="hidden sm:inline">Upload</span><input type="file" accept="image/*" class="hidden" onchange="handleImageUpload(this, 'af-${p.key}')"></label>
                    <label class="primary-bg-soft border primary-border text-[var(--color-primary)] font-bold rounded-xl px-5 flex items-center justify-center cursor-pointer hover:bg-[rgba(var(--color-primary-rgb),0.2)] transition-all shrink-0 active:scale-95 shadow-sm" title="Ambil Foto Langsung"><i class="fa-solid fa-camera"></i><input type="file" accept="image/*" capture="environment" class="hidden" onchange="handleImageUpload(this, 'af-${p.key}')"></label>
                </div>
                <p class="text-[10px] font-bold text-slate-400 flex items-center gap-1.5"><i class="fa-solid fa-wand-magic-sparkles text-[var(--color-primary)]"></i><span><b>Otomatis &amp; Estetik:</b> Jika tanpa foto, sistem otomatis membuatkan <b>Smart Cover</b> dengan gradien warna &amp; ikon kategori resmi di toko &amp; kasir.</span></p>
            </div>`;else if(p.key==="videoUrl")s+=`<div class="flex flex-col gap-2">
                <div class="flex gap-3">
                    <input autocomplete='off' type="text" id="af-${p.key}" value="${m(d)}" class="admin-input shadow-sm flex-1 bg-slate-50 dark:bg-slate-900" placeholder="Paste URL Drive atau upload video di bawah">
                    <label class="primary-bg-soft border primary-border text-[var(--color-primary)] font-bold rounded-xl px-4 flex items-center justify-center cursor-pointer hover:bg-[rgba(var(--color-primary-rgb),0.2)] transition-all shrink-0 active:scale-95 shadow-sm gap-2" title="Upload Video ke Google Drive">
                        <i class="fa-solid fa-film"></i><span class="hidden sm:inline text-[11px]">Upload Video</span>
                        <input type="file" accept="video/mp4,video/webm,video/quicktime,video/x-msvideo,video/3gpp" class="hidden" onchange="handleVideoUpload(this, 'af-${p.key}')">
                    </label>
                </div>
                <p class="text-[10px] font-bold text-slate-400 flex items-center gap-1.5"><i class="fa-solid fa-circle-info text-[var(--color-primary)]"></i><b>Tips Autoplay:</b> Untuk video 100% otomatis play &amp; loop tanpa klik, gunakan link <b>YouTube / Shorts</b> atau <b>Direct MP4</b>. Upload Drive/HP juga didukung.</p>
                ${d?`<div class="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-black aspect-video w-full max-w-xs"><iframe src="${m(fo(d))}" class="w-full h-full" frameborder="0" allow="autoplay; fullscreen" loading="lazy"></iframe></div>`:""}
            </div>`;else if(p.type==="richtext")s+=`
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
                        <input type="file" accept="image/*" class="hidden" onchange="handleRTEditorImage(this, 'af-${p.key}-editor')" >
                    </label>
                </div>
                <div id="af-${p.key}-editor" contenteditable="true" class="p-4 min-h-[150px] max-h-[350px] overflow-y-auto outline-none text-sm text-slate-800 dark:text-slate-200 leading-relaxed [&_ol]:list-decimal [&_ol]:pl-5 [&_ul]:list-disc [&_ul]:pl-5 [&_b]:font-bold [&_strong]:font-bold [&_img]:max-w-full [&_img]:rounded-xl [&_img]:my-2">
                    ${d}
                </div>
            </div>`;else{const u=p.key==="storeStock",f=p.key==="warehouseStock",v=p.key==="stock",h=u||f?'oninput="window.calcTotalStockForm?.()"':"",y=v?'readonly tabindex="-1"':"",T=v?"bg-slate-100 dark:bg-slate-800/80 font-bold cursor-not-allowed text-slate-700 dark:text-slate-200":"bg-slate-50 dark:bg-slate-900";s+=`<input autocomplete='off' type="${p.type}" id="af-${p.key}" value="${m(d)}" class="admin-input shadow-sm ${T} transition-all"
    ${p.key==="price"?'min="0" step="1" placeholder="0"':""}
    ${p.key==="priceNormal"?'min="0" step="1" placeholder="0 (kosong = tidak ada coretan)"':""}
    ${p.key==="hpp"?'min="0" step="1" placeholder="0"':""}
    ${u||f||v?'min="0" step="0.01" placeholder="0"':""}
    ${h}
    ${y}
>`}s+="</div>"}),s=`<div class="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-5 items-start">${s}</div>`,R("admin-modal-form",s),t==="products"&&(window.rVarsB?.(),window.rWholB?.(),window.rMultiUnitsB?.(),window.rSpecB?.(),window.updateProductSubCategoryOptions?.(a?a.category:"",a?a.subCategory:"")),t==="categories"&&window.rSubCatsB?.();const c=k("admin-modal");c&&c.classList.contains("hidden")&&go("admin"),ne(c,k("admin-modal-box"))};window.calcTotalStockForm=()=>{const t=document.getElementById("af-storeStock"),e=document.getElementById("af-warehouseStock"),a=document.getElementById("af-stock");if(t&&e&&a){const r=parseFloat(t.value)||0,s=parseFloat(e.value)||0;a.value=r+s}};window.submitAdminForm=async()=>{if(Ce)return;G(!0);const t=pt||window.cTab||"products";let e={},a=At[t]||[];for(let s of a)if(s.type==="variants_builder")e.variants=F.filter(o=>o.name.trim()!=="");else if(s.type==="wholesale_builder")e.wholesale=ve.filter(o=>parseFloat(o.minQty)>.01&&o.price>0);else if(s.type==="multi_units_builder")e.multiUnits=(Y||[]).filter(o=>(o.name||o.unitName||"").trim()!==""&&parseFloat(o.multiplier!=null?o.multiplier:o.conversionRatio)>.001).map(o=>({name:(o.name||o.unitName||"").trim(),multiplier:parseFloat(o.multiplier!=null?o.multiplier:o.conversionRatio)||1,price:parseFloat(o.price)||0,hpp:parseFloat(o.hpp)||0,barcode:(o.barcode||"").trim()}));else if(s.type==="spec_table_builder")e.specTable=le.filter(o=>o.key.trim()!=="");else if(s.type==="subcategories_builder")e.subCategories=(ie||window.tSubCats||[]).map(o=>String(o).trim()).filter(Boolean);else{let o="";if(s.type==="richtext"){const l=k(`af-${s.key}-editor`);o=l?l.innerHTML:""}else o=$(`af-${s.key}`);if(typeof o=="string"){if(o.startsWith("data:image/")&&o.length>3e5)return G(!1),x("Gambar Base64 terlalu besar! Upload file.");s.key==="img"&&(o=he(o))}e[s.key]=s.type==="number"?parseFloat(o)||0:o}if(!e.name&&!e.title&&!e.bankName&&!e.code)return G(!1),x("Judul/Nama/Kode wajib diisi!");if(t==="products"){const s=parseFloat(e.storeStock)||0,o=parseFloat(e.warehouseStock)||0;e.storeStock=s,e.warehouseStock=o,e.stock=s+o,e.sku||(e.sku="SKU"+Date.now().toString().slice(-6))}if(t==="customers"){const s=window.normalizeWA?window.normalizeWA(e.phone):(e.phone||"").replace(/\D/g,"").replace(/^0/,"62");if(!s||s.length<10)return G(!1),x("Nomor WhatsApp tidak valid!");e.phone=s,e.points=parseFloat(e.points)||0,e.id=parseInt(s,10),e.paylaterActive=e.paylaterActive==="true"||e.paylaterActive===!0,e.paylaterLimit=Math.max(0,parseFloat(e.paylaterLimit)||0),e.paylaterDueDay=Math.min(28,Math.max(1,parseInt(e.paylaterDueDay,10)||5)),e.paylaterUsed=Math.max(0,parseFloat(e.paylaterUsed)||0)}let r=null;if(t==="customers")if(i.customers||(i.customers=[]),se){r=se;let s=i.customers.findIndex(o=>o&&o.id!=null&&String(o.id)===String(se));s>-1?i.customers[s]=e:i.customers.unshift(e)}else i.customers.unshift(e);else if(t==="rewards")if(i.rewards||(i.rewards=[]),se){let s=i.rewards.findIndex(o=>o&&o.id!=null&&String(o.id)===String(se));s>-1?(e.id=i.rewards[s].id,i.rewards[s]=e):e.id=se}else e.id=Date.now(),i.rewards.unshift(e);else if(se){i[t]||(i[t]=[]);let s=i[t].findIndex(o=>o&&o.id!=null&&String(o.id)===String(se));if(s>-1){if(e.id=i[t][s].id,t==="products"){const o=i[t][s];if(e.totalSold=o.totalSold||0,e.variants&&e.variants.length&&o.variants&&e.variants.forEach(l=>{const n=o.variants.find(c=>c.name===l.name);n&&n.totalSold&&(l.totalSold=n.totalSold)}),o.stockBatches&&!e.stockBatches&&(e.stockBatches=o.stockBatches),o.suppliers&&!e.suppliers&&(e.suppliers=o.suppliers),o.multiUnits&&!e.multiUnits&&(e.multiUnits=o.multiUnits),e.supplierId&&Array.isArray(e.suppliers)){const l=e.suppliers.findIndex(n=>String(n.supplierId)===String(e.supplierId));if(l>-1)e.suppliers.forEach(n=>n.isPrimary=!1),e.suppliers[l].isPrimary=!0;else{const n=(i.suppliers||[]).find(c=>String(c.id)===String(e.supplierId));e.suppliers.forEach(c=>c.isPrimary=!1),e.suppliers.push({supplierId:String(e.supplierId),supplierName:n?n.name:"Supplier Utama",lastBuyPrice:parseFloat(e.hpp)||0,supplierSku:e.sku||"",isPrimary:!0,updatedAt:new Date().toISOString()})}}}i[t][s]=e}else e.id=se,i[t].push(e)}else if(e.id=Date.now(),i[t]||(i[t]=[]),i[t].unshift(e),t==="products"){if(i.productOrder=[e.id.toString(),...(i.productOrder||[]).filter(n=>String(n)!==e.id.toString())],e.supplierId){const n=(i.suppliers||[]).find(c=>String(c.id)===String(e.supplierId));e.suppliers=[{supplierId:String(e.supplierId),supplierName:n?n.name:"Supplier Utama",lastBuyPrice:parseFloat(e.hpp)||0,supplierSku:e.sku||"",isPrimary:!0,updatedAt:new Date().toISOString()}]}const s=parseFloat(e.storeStock)||0,o=parseFloat(e.warehouseStock)||0,l=s+o;e.stock=l,l>0&&(e.stockBatches=[],s>0&&e.stockBatches.push({batchId:`BATCH-INIT-STORE-${e.id}`,poId:null,poNumber:"STOK AWAL (TOKO)",supplierId:e.supplierId||"",supplierName:"Stok Awal Toko",receivedAt:new Date().toISOString(),buyPrice:parseFloat(e.hpp)||0,initialQty:s,remainingQty:s,location:"store",isInitial:!0}),o>0&&e.stockBatches.push({batchId:`BATCH-INIT-WH-${e.id}`,poId:null,poNumber:"STOK AWAL (GUDANG)",supplierId:e.supplierId||"",supplierName:"Stok Awal Gudang",receivedAt:new Date().toISOString(),buyPrice:parseFloat(e.hpp)||0,initialQty:o,remainingQty:o,location:"warehouse",isInitial:!0}))}L("Menyimpan...");try{const s=typeof P<"u"&&P?P:window.db,o=typeof O=="function"?O:window.saveApp||(async()=>{});if(!s)throw new Error("Database Firebase belum terhubung");if(t==="products")await s.collection("freshmart").doc("cms_data").collection("products").doc(e.id.toString()).set(e),await o(["productOrder"],{updateType:"product_single",updatedProductIds:[e.id.toString()]});else if(t==="customers"){const l=s.collection("freshmart").doc("cms_data").collection("customers");r!==null&&r!==e.id&&await l.doc(r.toString()).delete().catch(()=>{}),await l.doc(e.phone).set(e,{merge:!0})}else if(t==="rewards"){await s.collection("freshmart").doc("cms_data").collection("rewards").doc(e.id.toString()).set(e);try{localStorage.setItem("freshmart_rewards",JSON.stringify(i.rewards))}catch{}typeof window.renderRewardCatalog=="function"&&window.renderRewardCatalog()}else await o([t]);window.closeAdminModal?.(),window.rAdmItms?.(t),x("Tersimpan!")}catch(s){console.error("Gagal simpan admin data:",s),x("Gagal menyimpan: "+(s.message||""))}finally{G(!1),D()}};window.oADel=async(t,e)=>{window.showConfirm?.("Hapus Data","Data yang dihapus tidak bisa dikembalikan lagi.",async()=>{if(Ce)return;G(!0);const a=typeof P<"u"&&P?P:window.db,r=typeof O=="function"?O:window.saveApp||(async()=>{}),s=i[t]&&i[t].find(o=>o&&o.id!=null&&String(o.id)===String(e));i[t]=(i[t]||[]).filter(o=>!o||o.id==null||String(o.id)!==String(e)),L("Menghapus...");try{if(!a)throw new Error("Database Firebase belum terhubung");if(t==="products")i.productOrder&&(i.productOrder=i.productOrder.filter(o=>String(o)!==String(e))),await a.collection("freshmart").doc("cms_data").collection("products").doc(e.toString()).delete(),await r(["productOrder"],{updateType:"product_delete",updatedProductIds:[e.toString()]});else if(t==="customers"){const o=s?s.phone:e.toString();await a.collection("freshmart").doc("cms_data").collection("customers").doc(o).delete()}else if(t==="rewards"){await a.collection("freshmart").doc("cms_data").collection("rewards").doc(e.toString()).delete();try{localStorage.setItem("freshmart_rewards",JSON.stringify(i.rewards))}catch{}typeof window.renderRewardCatalog=="function"&&window.renderRewardCatalog()}else await r([t]);window.rAdmItms?.(t),x("Berhasil Dihapus!")}catch(o){x("Gagal menghapus: "+(o.message||""))}finally{G(!1),D()}})};window.duplicateProduct=async t=>{window.showConfirm?.("Duplikat Produk","Menyalin data produk ini ke item baru?",async()=>{if(Ce)return;G(!0);const e=typeof P<"u"&&P?P:window.db,a=typeof O=="function"?O:window.saveApp||(async()=>{}),r=i.products.find(l=>l&&l.id!=null&&String(l.id)===String(t));if(!r){G(!1);return}let s=JSON.parse(JSON.stringify(r));s.id=Date.now()+Math.floor(Math.random()*1e3),s.name=s.name+" COPY",s.sku="",s.totalSold=0,s.variants&&s.variants.length>0&&(s.variants=s.variants.map(l=>(l.sku="",l.totalSold=0,l))),i.products.unshift(s),i.productOrder||(i.productOrder=[]);const o=i.productOrder.findIndex(l=>String(l)===String(t));o>-1?i.productOrder.splice(o+1,0,s.id.toString()):i.productOrder.unshift(s.id.toString()),L("Menyalin...");try{if(!e)throw new Error("Database Firebase belum terhubung");await e.collection("freshmart").doc("cms_data").collection("products").doc(s.id.toString()).set(s),await a(["productOrder"],{updateType:"product_single",updatedProductIds:[s.id.toString()]}),window.rAdmItms?.("products"),x("Produk berhasil disalin!")}catch(l){x("Gagal menyalin: "+(l.message||""))}finally{G(!1),D()}},"Ya, Salin",!1)};window.rSubCatsB=()=>{const t=k("subcategories-builder-container");if(!t)return;const e=Array.isArray(ie||window.tSubCats)?ie||window.tSubCats:[],a=($("af-name")||"").trim();let r=[];a&&Array.isArray(i.products)&&(r=[...new Set(i.products.filter(o=>o.category===a&&o.subCategory).map(o=>o.subCategory.trim()))].filter(o=>!e.some(l=>l.toLowerCase()===o.toLowerCase()))),t.innerHTML=`
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
                        <span>${m(s)}</span>
                        <button type="button" onclick="window.removeSubCategoryFromBuilder(${o})" class="text-slate-400 hover:text-rose-500 p-0.5 rounded ml-1 transition-colors cursor-pointer" title="Hapus Sub-Kategori '${m(s)}'">
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
    `};window.addSubCategoryFromInput=()=>{const t=k("af-new-subcat-input");if(!t)return;const e=(t.value||"").trim();if(!e)return;const a=Array.isArray(ie||window.tSubCats)?[...ie||window.tSubCats]:[];if(a.some(s=>s.toLowerCase()===e.toLowerCase())){x("Sub-kategori sudah ada!"),t.value="";return}a.push(e),Ye(a),window.rSubCatsB();const r=k("af-new-subcat-input");r&&r.focus()};window.removeSubCategoryFromBuilder=t=>{const e=Array.isArray(ie||window.tSubCats)?[...ie||window.tSubCats]:[];e.splice(t,1),Ye(e),window.rSubCatsB()};window.autoDetectSubCatsFromProducts=()=>{const t=($("af-name")||"").trim();if(!t){x("Isi nama kategori terlebih dahulu!");return}const e=[...new Set((i.products||[]).filter(s=>s.category===t&&s.subCategory).map(s=>s.subCategory.trim()))];if(!e.length){x("Belum ada produk dengan sub-kategori pada kategori ini");return}const a=Array.isArray(ie||window.tSubCats)?[...ie||window.tSubCats]:[];let r=0;e.forEach(s=>{a.some(o=>o.toLowerCase()===s.toLowerCase())||(a.push(s),r++)}),Ye(a),window.rSubCatsB(),x(`${r} sub-kategori berhasil ditarik dari produk!`)};window.updateProductSubCategoryOptions=(t,e="")=>{const a=k("af-subCategory-select"),r=k("af-subCategory"),s=k("af-subCategory-hint");if(!a||!r)return;const o=e!==void 0?e:(r.value||"").trim(),l=(i.categories||[]).find(b=>b.name===t),n=Array.isArray(l?.subCategories)?l.subCategories:[],c=(i.products||[]).filter(b=>b.category===t&&b.subCategory).map(b=>b.subCategory.trim()),p=[...new Set([...n,...c])].filter(Boolean);let d='<option value="">-- Tanpa Sub-Kategori / Pilih Jenis --</option>';if(p.forEach(b=>{d+=`<option value="${m(b)}">${m(b)}</option>`}),d+='<option value="__custom__" class="font-bold text-[var(--color-primary)]">+ Ketik Nama Sub-Kategori Manual...</option>',a.innerHTML=d,o)if(p.some(u=>u.toLowerCase()===o.toLowerCase())){const u=p.find(f=>f.toLowerCase()===o.toLowerCase());a.value=u,r.value=u,r.classList.add("hidden")}else a.value="__custom__",r.value=o,r.classList.remove("hidden");else a.value="",r.value="",r.classList.add("hidden");s&&(t&&p.length>0?s.textContent=`Tersedia ${p.length} sub-kategori terkelompok di bawah '${t}'`:t?s.textContent=`Belum ada sub-kategori di bawah '${t}'. Klik '+ Sub Baru' untuk menambahkan.`:s.textContent="Pilih kategori induk terlebih dahulu untuk melihat pilihan sub-kategori.")};window.handleSubCategorySelectChange=t=>{const e=k("af-subCategory");e&&(t.value==="__custom__"?(e.classList.remove("hidden"),e.focus()):(e.classList.add("hidden"),e.value=t.value))};window.syncCustomSubCategoryValue=t=>{};window.promptAddNewSubCategoryToProduct=async()=>{const t=$("af-category");if(!t){x("Pilih kategori induk produk terlebih dahulu!");return}const a=await(typeof ht=="function"?ht:window.customPrompt||prompt)(`Tambah Sub-Kategori Baru untuk '${t}':`,"");if(!a||!a.trim())return;const r=a.trim();let s=(i.categories||[]).find(o=>o.name===t);if(s&&(s.subCategories=Array.isArray(s.subCategories)?s.subCategories:[],!s.subCategories.some(o=>o.toLowerCase()===r.toLowerCase()))){s.subCategories.push(r);try{await(typeof O=="function"?O:window.saveApp||(async()=>{}))(["categories"])}catch(o){console.error("Gagal simpan subkategori baru:",o)}}window.updateProductSubCategoryOptions(t,r),x(`Sub-kategori '${r}' berhasil ditambahkan!`)};window.rSpecB=()=>{const t=document.getElementById("spec-table-builder-container");if(!t)return;let e="";le.length>0?e+=`<div class="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm mb-3">
            <table class="w-full text-sm">
                <thead>
                    <tr class="bg-slate-100 dark:bg-slate-800">
                        <th class="py-2.5 px-4 text-left text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest w-5/12">Nama Spesifikasi</th>
                        <th class="py-2.5 px-4 text-left text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Nilai / Keterangan</th>
                        <th class="py-2.5 px-2 w-10"></th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                    ${le.map((a,r)=>`
                    <tr class="bg-white dark:bg-slate-900 group">
                        <td class="py-2 px-3"><input autocomplete='off' placeholder="Cth: Berat" class="w-full bg-transparent text-[13px] font-semibold text-slate-700 dark:text-slate-200 focus:outline-none placeholder:text-slate-300" value="${m(a.key)}" oninput="uSpec(${r},'key',this.value)"></td>
                        <td class="py-2 px-3"><input autocomplete='off' placeholder="Cth: 2.5 kg" class="w-full bg-transparent text-[13px] text-slate-600 dark:text-slate-300 focus:outline-none placeholder:text-slate-300" value="${m(a.val)}" oninput="uSpec(${r},'val',this.value)"></td>
                        <td class="py-2 px-2 text-center"><button type="button" onclick="rmSpec(${r})" class="w-8 h-8 rounded-xl bg-rose-50 border border-rose-200 text-rose-500 hover:bg-rose-500 hover:text-white dark:bg-rose-900/30 dark:border-rose-800 transition-all flex items-center justify-center opacity-70 group-hover:opacity-100 active:scale-95 cursor-pointer shadow-2xs mx-auto" title="Hapus Baris"><i class="fa-solid fa-trash text-xs"></i></button></td>
                    </tr>`).join("")}
                </tbody>
            </table>
        </div>`:e+=`
        <div class="text-center py-6 text-slate-400 dark:text-slate-500 text-[12px] font-medium flex flex-col items-center justify-center">
            <div class="w-11 h-11 rounded-2xl flex items-center justify-center text-xl mb-2 shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary);">
                <i class="fa-solid fa-table-cells-large"></i>
            </div>
            <span>Belum ada spesifikasi. Klik tombol di bawah untuk menambahkan.</span>
        </div>`,e+='<button type="button" onclick="addSpec()" class="w-full py-3.5 bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] text-[var(--color-primary)] font-bold rounded-xl text-xs sm:text-sm border-2 border-[rgba(var(--color-primary-rgb),0.25)] dark:border-[rgba(var(--color-primary-rgb),0.35)] border-dashed hover:bg-[rgba(var(--color-primary-rgb),0.12)] transition-all flex items-center justify-center gap-2 active:scale-95 shadow-2xs cursor-pointer"><i class="fa-solid fa-plus-circle text-base"></i> Tambah Baris Spesifikasi</button>',t.innerHTML=e};window.addSpec=()=>{le.push({key:"",val:""}),Ut(le),window.rSpecB()};window.rmSpec=t=>{le.splice(t,1),Ut(le),window.rSpecB()};window.uSpec=(t,e,a)=>{le[t]&&(le[t][e]=a)};window.rVarsB=()=>{const t=document.getElementById("af-category"),e=t?/\bcat\b/i.test(t.value):!1;let a=`<div class="space-y-5 mb-5">${F.map((r,s)=>{let o=r.isActive!==!1&&r.isActive!=="false";return`
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
                    <input autocomplete='off' placeholder="Cth: Hijau Tosca" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${m(r.name)}" onchange="uVar(${s},'name',this.value)">
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Satuan / Unit</label>
                    <input autocomplete='off' placeholder="Cth: Pcs / Liter" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${m(r.unit||"")}" onchange="uVar(${s},'unit',this.value)">
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
                            <input autocomplete='off' id="var-hex-${s}" placeholder="#RRGGBB (opsional)" class="w-full bg-transparent text-sm font-mono font-bold focus:outline-none dark:text-white uppercase" value="${m(r.colorCode||"")}" onchange="uVar(${s},'colorCode',this.value)">
                        </div>
                        ${r.colorCode?`<div class="w-6 h-6 rounded-full border-2 border-white shadow-md shrink-0" style="background:${m(r.colorCode)}"></div>`:""}
                    </div>
                </div>
                ${e?"":`
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Gambar Khusus Varian</label>
                    <div class="flex gap-2.5 items-center">
                        ${r.img?`<img src="${m(r.img)}" class="w-11 h-11 rounded-xl object-cover border-2 border-slate-200 dark:border-slate-600 shrink-0 shadow-sm" onerror="this.style.display='none'" loading="lazy">`:""}
                        <input autocomplete='off' id="var-img-${s}" placeholder="URL Gambar Varian" class="admin-input !text-sm flex-1 bg-white dark:bg-slate-800 shadow-sm" value="${m(r.img||"")}" onchange="uVar(${s},'img',fixD(this.value))">
                        <label class="primary-icon-btn border rounded-xl w-11 h-11 flex items-center justify-center cursor-pointer transition-all shrink-0 active:scale-95 shadow-sm" title="Upload dari Galeri"><i class="fa-solid fa-upload text-sm"></i><input type="file" accept="image/*" class="hidden" onchange="handleImageUpload(this, 'var-img-${s}')"></label>
                        <label class="primary-icon-btn border rounded-xl w-11 h-11 flex items-center justify-center cursor-pointer transition-all shrink-0 active:scale-95 shadow-sm" title="Ambil Foto Langsung"><i class="fa-solid fa-camera text-sm"></i><input type="file" accept="image/*" capture="environment" class="hidden" onchange="handleImageUpload(this, 'var-img-${s}')"></label>
                    </div>
                </div>
                `}
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">SKU / Barcode</label>
                    <div class="relative h-[48px]">
                        <input autocomplete='off' id="var-sku-${s}" placeholder="Auto (Bisa Kosong)" class="admin-input !text-sm h-full bg-white dark:bg-slate-800 shadow-sm !pr-12" value="${m(r.sku||"")}" onchange="uVar(${s},'sku',this.value)">
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
    </div>`;R("variants-builder-container",a)};window.addVar=()=>{F.push({name:"",price:0,priceNormal:0,hpp:0,storeStock:0,warehouseStock:0,stock:0,sku:"",img:"",unit:"",colorCode:"",poin:0,isActive:!0}),Qe(F),window.rVarsB()};window.rmVar=t=>{F.splice(t,1),Qe(F),window.rVarsB()};window.uVar=(t,e,a)=>{if(!F[t])return;const r=["price","priceNormal","hpp","stock","storeStock","warehouseStock","poin"];if(F[t][e]=r.includes(e)?parseFloat(a)||0:e==="img"?he(a):a,e==="storeStock"||e==="warehouseStock"){const s=parseFloat(F[t].storeStock)||0,o=parseFloat(F[t].warehouseStock)||0;F[t].stock=s+o;const l=document.getElementById(`var-stock-total-${t}`);l&&(l.value=F[t].stock)}else if(e==="stock"){F[t].warehouseStock===void 0&&(F[t].warehouseStock=0),F[t].storeStock=Math.max(0,(F[t].stock||0)-(F[t].warehouseStock||0));const s=document.getElementById(`var-store-stock-${t}`);s&&(s.value=F[t].storeStock)}};window.toggleVarActive=t=>{if(F[t]){const e=F[t].isActive!==!1&&F[t].isActive!=="false";F[t].isActive=!e,Qe(F),typeof window.rVarsB=="function"&&window.rVarsB()}};window._openColorFloatModal=t=>{_closeColorFloatModal(!0);const e=document.createElement("div");e.id="color-float-modal",e.className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-900/80 p-4 opacity-0 transition-opacity duration-300",e.onclick=r=>{r.target===e&&_closeColorFloatModal()};const a=document.createElement("div");a.id="color-float-box",a.className="relative w-full max-w-md sm:max-w-xl scale-95 transform rounded-[2rem] border border-slate-200 bg-white shadow-2xl transition-all duration-300 dark:border-slate-700 dark:bg-slate-800 overflow-y-auto max-h-[90vh] custom-scrollbar",a.innerHTML=t,e.appendChild(a),document.body.appendChild(e),typeof window.pushModalHistory=="function"&&window.pushModalHistory("colorFloat"),requestAnimationFrame(()=>{e.classList.remove("opacity-0"),a.classList.remove("scale-95")})};window._closeColorFloatModal=(t=!1)=>{const e=document.getElementById("color-float-modal");if(!e)return;const a=document.getElementById("color-float-box"),r=()=>{e.classList.add("opacity-0"),a&&a.classList.add("scale-95"),setTimeout(()=>{e.parentNode&&e.remove()},300)};!t&&typeof window.requestCloseModal=="function"?window.requestCloseModal("colorFloat",!1,r):r()};window.openColorImportModal=()=>{let t=i.colors||[];if(!t.length){x("Database Warna masih kosong!");return}let e={};t.forEach(r=>{let s=r.catalog||"Tanpa Katalog";e[s]||(e[s]=[]),e[s].push(r)});let a=`<div class="p-6 sm:p-7">
        <div class="flex justify-between items-center mb-6">
            <h3 class="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2"><i class="fa-solid fa-swatchbook text-[var(--color-primary)]"></i> Pilih Warna</h3>
            <button type="button" onclick="_closeColorFloatModal()" class="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 flex items-center justify-center transition-all cursor-pointer"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <div class="space-y-6 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">`;for(let r in e)a+=`<div>
            <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">${m(r)}</h4>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                ${e[r].map(s=>`
                    <button type="button" onclick="importColorToVariant('${m(s.name)}', '${m(s.hex||"")}')" class="flex items-center gap-3 p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/50 hover:-translate-y-0.5 hover:shadow-md transition-all text-left bg-white dark:bg-slate-800 cursor-pointer">
                        <div class="w-8 h-8 rounded-full border-2 border-slate-100 dark:border-slate-600 shadow-sm shrink-0" style="background-color: ${m(s.hex||"transparent")}"></div>
                        <span class="text-xs font-bold text-slate-700 dark:text-slate-200 line-clamp-2">${m(s.name)}</span>
                    </button>`).join("")}
            </div>
        </div>`;a+="</div></div>",_openColorFloatModal(a)};window.importColorToVariant=(t,e)=>{F.push({name:t,price:0,priceNormal:0,hpp:0,stock:0,sku:"",img:"",unit:"",colorCode:e||"",poin:0,isActive:!0}),Qe(F),window.rVarsB(),_closeColorFloatModal(),x("Warna ditambahkan!")};window.exportVariantToColorDB=async t=>{const e=F[t];if(!e||!e.name.trim()){x("Nama varian kosong!");return}if((i.colors||[]).find(o=>o.name.toLowerCase()===e.name.trim().toLowerCase())){x(`"${e.name}" sudah ada di Database Warna.`);return}let s=[...new Set((i.colors||[]).map(o=>o.catalog).filter(Boolean))].map(o=>`<option value="${m(o)}">${m(o)}</option>`).join("");_openColorFloatModal(`
        <div class="p-6">
            <h3 class="text-lg font-bold text-slate-800 dark:text-white mb-5 flex items-center gap-2"><i class="fa-solid fa-database text-[var(--color-primary)]"></i> Simpan ke Database Warna</h3>
            <div class="space-y-4">
                <div><label class="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Nama Warna</label><input id="exp-name" class="admin-input" value="${m(e.name)}"></div>
                <div><label class="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Kode Warna (Hex)</label>
                    <div class="flex gap-3 items-center">
                        <input type="color" id="exp-hex-picker" value="${m(e.colorCode||"#ffffff")}" class="w-10 h-10 rounded-xl cursor-pointer" onchange="document.getElementById('exp-hex').value=this.value">
                        <input id="exp-hex" class="admin-input flex-1" placeholder="#FFFFFF (opsional)" value="${m(e.colorCode||"")}">
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
        </div>`)};window.confirmExportVariantToColorDB=async()=>{const t=(document.getElementById("exp-name")?.value||"").trim(),e=(document.getElementById("exp-hex")?.value||"").trim(),a=(document.getElementById("exp-catalog")?.value||"").trim();if(!t){x("Nama warna wajib diisi!");return}const r={id:Date.now(),name:t,hex:e,catalog:a};i.colors||(i.colors=[]),i.colors.push(r),_closeColorFloatModal(),L("Menyimpan ke Database Warna...");try{await O(["colors"]),x(`"${t}" berhasil disimpan ke Database Warna!`)}catch{x("Gagal menyimpan!")}finally{D()}};window.exportAllVariantsToColorDB=async()=>{const t=F.filter(r=>r.name.trim());if(!t.length){x("Tidak ada varian untuk diekspor!");return}i.colors||(i.colors=[]);let a=[...new Set(i.colors.map(r=>r.catalog).filter(Boolean))].map(r=>`<option value="${m(r)}">${m(r)}</option>`).join("");_openColorFloatModal(`
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
        </div>`)};window.confirmExportAllVariants=async()=>{const t=(document.getElementById("expall-catalog")?.value||"").trim(),e=F.filter(s=>s.name.trim());i.colors||(i.colors=[]);const a=new Set(i.colors.map(s=>s.name.toLowerCase()));let r=0;if(e.forEach(s=>{a.has(s.name.trim().toLowerCase())||(i.colors.push({id:Date.now()+r,name:s.name.trim(),hex:s.colorCode||"",catalog:t}),a.add(s.name.trim().toLowerCase()),r++)}),_closeColorFloatModal(),!r){x("Semua varian sudah ada di Database Warna!");return}L("Menyimpan...");try{await O(["colors"]),x(`${r} warna berhasil diekspor ke Database Warna!`)}catch{x("Gagal menyimpan!")}finally{D()}};window.openImportFromProductsModal=async()=>{const t=[];if((i.products||[]).forEach(o=>{(o.variants||[]).forEach(l=>{l.name&&l.name.trim()&&t.push({varName:l.name.trim(),hex:l.colorCode||"",prodName:o.name||""})})}),!t.length){x("Tidak ada varian produk yang ditemukan!");return}const e=new Set((i.colors||[]).map(o=>o.name.toLowerCase())),a=t.filter(o=>!e.has(o.varName.toLowerCase()));if(!a.length){x("Semua varian produk sudah ada di Database Warna!");return}let s=[...new Set((i.colors||[]).map(o=>o.catalog).filter(Boolean))].map(o=>`<option value="${m(o)}">${m(o)}</option>`).join("");window._pendingImportVariants=a,_openColorFloatModal(`
        <div class="p-6">
            <h3 class="text-lg font-bold text-slate-800 dark:text-white mb-2 flex items-center gap-2"><i class="fa-solid fa-box-archive text-[var(--color-primary)]"></i> Impor dari Semua Produk</h3>
            <p class="text-xs text-slate-500 mb-4">${a.length} nama varian baru ditemukan (yang sudah ada di database dilewati).</p>
            <div class="custom-scrollbar max-h-48 overflow-y-auto mb-4 space-y-2">
                ${a.map((o,l)=>`
                    <label class="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 cursor-pointer hover:border-[var(--color-primary)] transition-all">
                        <input type="checkbox" id="imp-chk-${l}" checked class="w-4 h-4 rounded accent-[var(--color-primary)]">
                        <div class="w-5 h-5 rounded-full border border-slate-200 dark:border-slate-600 shrink-0" style="background-color:${m(o.hex||"transparent")}"></div>
                        <div class="min-w-0">
                            <p class="text-xs font-bold text-slate-700 dark:text-slate-200 truncate">${m(o.varName)}</p>
                            <p class="text-[10px] text-slate-400 truncate">dari: ${m(o.prodName)}</p>
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
        </div>`)};window.confirmImportFromProducts=async()=>{const t=window._pendingImportVariants||[];window._pendingImportVariants=null;const e=(document.getElementById("impprod-catalog")?.value||"").trim();i.colors||(i.colors=[]);const a=new Set(i.colors.map(s=>s.name.toLowerCase()));let r=0;if(t.forEach((s,o)=>{const l=document.getElementById(`imp-chk-${o}`);l&&l.checked&&!a.has(s.varName.toLowerCase())&&(i.colors.push({id:Date.now()+r,name:s.varName,hex:s.hex||"",catalog:e}),a.add(s.varName.toLowerCase()),r++)}),_closeColorFloatModal(),!r){x("Tidak ada warna baru yang ditambahkan!");return}L("Menyimpan...");try{await O(["colors"]),x(`${r} warna berhasil diimpor ke Database Warna!`),window.cTab==="colors"&&window.rAdmItms?.("colors")}catch{x("Gagal menyimpan!")}finally{D()}};const ko=t=>window.pushModalHistory?.(t),rr=(t,e,a)=>window.requestCloseModal?.(t,e,a);window.openRestockModal=t=>{const e=i.products.find(o=>o&&o.id!=null&&String(o.id)===String(t));if(!e)return;const a=e.variants&&e.variants.length>0;let r="";a?r=e.variants.map((o,l)=>`
            <div class="flex items-center justify-between gap-3 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
                <div class="flex items-center gap-3 min-w-0 flex-1">
                    ${o.colorCode?`<span class="w-5 h-5 rounded-full shrink-0 shadow-sm border border-slate-300" style="background-color:${m(o.colorCode)}"></span>`:""}
                    <div class="min-w-0 flex-1">
                        <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${m(o.name)}</p>
                        <p class="text-[10px] font-bold text-slate-500 mt-0.5">Stok saat ini: <span class="text-blue-500 font-bold">${parseFloat(o.stock)||0}</span></p>
                    </div>
                </div>
                <input type="number" id="restock-var-${l}" min="0" placeholder="Tambah" class="admin-input !py-2.5 !px-3 !w-28 text-center text-sm bg-white dark:bg-slate-800 shadow-sm shrink-0" value="">
            </div>`).join(""):r=`
            <div class="flex items-center justify-between gap-3 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
                <div class="min-w-0 flex-1">
                    <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${m(e.name)}</p>
                    <p class="text-[10px] font-bold text-slate-500 mt-0.5">Stok saat ini: <span class="text-blue-500 font-bold">${parseFloat(e.stock)||0}</span></p>
                </div>
                <input type="number" id="restock-main" min="0" placeholder="Tambah" class="admin-input !py-2.5 !px-3 !w-28 text-center text-sm bg-white dark:bg-slate-800 shadow-sm shrink-0" value="">
            </div>`;let s=document.getElementById("restock-modal");s||(s=document.createElement("div"),s.id="restock-modal",s.className="fixed inset-0 z-[110] bg-slate-900/80 flex items-end sm:items-center justify-center p-0 sm:p-5",s.onclick=o=>{o.target===s&&closeRestockModal()},document.body.appendChild(s)),s.innerHTML=`
        <div class="bg-white dark:bg-slate-900 w-full max-w-lg rounded-t-3xl sm:rounded-2xl max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-700">
            <div class="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0">
                <div>
                    <h3 class="font-bold text-slate-800 dark:text-white text-base flex items-center gap-2"><i class="fa-solid fa-boxes-stacked text-[var(--color-primary)]"></i> Restock Produk</h3>
                    <p class="text-[10px] font-bold text-slate-500 mt-0.5 uppercase tracking-widest">${m(e.name)}</p>
                </div>
                <button onclick="closeRestockModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-rose-100 hover:text-rose-500 flex items-center justify-center transition-all cursor-pointer"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="custom-scrollbar p-5 sm:p-6 overflow-y-auto flex-1 space-y-3">
                <p class="text-[11px] font-bold text-slate-600 dark:text-slate-300 bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] border border-[rgba(var(--color-primary-rgb),0.2)] dark:border-[rgba(var(--color-primary-rgb),0.3)] p-3 rounded-xl"><i class="fa-solid fa-circle-info text-[var(--color-primary)] mr-1.5"></i> Masukkan jumlah <b>penambahan</b> stok. Stok lama + nilai ini = stok baru.</p>
                ${r}
            </div>
            <div class="p-5 border-t border-slate-100 dark:border-slate-800 shrink-0">
                <button onclick="processRestock('${m(String(t))}')" class="btn-primary py-3.5 text-sm shadow-glow !rounded-2xl flex items-center justify-center gap-2 cursor-pointer active:scale-95"><i class="fa-solid fa-save"></i> Simpan Restock</button>
            </div>
        </div>`,s.style.opacity="0",s.style.display="flex",requestAnimationFrame(()=>{s.style.transition="opacity 0.25s ease",s.style.opacity="1"}),ko("restock")};window.closeRestockModal=(t=!1)=>{rr("restock",t,()=>{const e=document.getElementById("restock-modal");!e||e.style.display==="none"||(e.style.opacity="0",e.style.transition="opacity 0.25s ease",setTimeout(()=>{e.style.display="none",e.style.opacity="",e.style.transition=""},250))})};window.processRestock=async t=>{if(Ce)return;G(!0);const e=i.products.findIndex(l=>l&&l.id!=null&&String(l.id)===String(t));if(e<0){G(!1);return}const a=i.products[e],r=a.variants&&a.variants.length>0;let s=JSON.parse(JSON.stringify(a)),o=0;if(r)s.variants=s.variants.map((n,c)=>{const p=parseFloat(document.getElementById("restock-var-"+c)?.value)||0;return p>0&&(n.stock=(parseFloat(n.stock)||0)+p,o+=p,n.stock>0&&(n.isActive===!1||n.isActive==="false")&&(n.isActive=!0)),n}),s.variants.some(n=>(parseFloat(n.stock)||0)>0&&n.isActive!==!1&&n.isActive!=="false")&&(s.isActive===!1||s.isActive==="false")&&(s.isActive="true");else{const l=parseFloat(document.getElementById("restock-main")?.value)||0;l>0&&(s.stock=(parseFloat(s.stock)||0)+l,o+=l,s.stock>0&&(s.isActive===!1||s.isActive==="false")&&(s.isActive="true"))}if(o<=0)return G(!1),x("Masukkan jumlah restock terlebih dahulu!");L("Menyimpan Restock...");try{const l=typeof P<"u"&&P?P:window.db,n=typeof O=="function"?O:window.saveApp||(async()=>{});if(!l)throw new Error("Database Firebase belum terhubung");const c=l.collection("freshmart").doc("cms_data").collection("products").doc(t.toString());let p=0;await l.runTransaction(async d=>{const b=await d.get(c);if(!b.exists)throw new Error("Produk tidak ditemukan di server");const u=JSON.parse(JSON.stringify(b.data()));if(r)a.variants.forEach((v,h)=>{const y=parseFloat(document.getElementById("restock-var-"+h)?.value)||0;if(y<=0)return;Ha(u,{poId:null,poNumber:"RESTOCK CEPAT",supplierId:u.supplierId||"",supplierName:"Penyesuaian Toko",qty:y,unitPrice:parseFloat(u.variants?.[h]?.hpp||u.hpp)||0,variantName:v.name,receivedAt:new Date().toISOString()});const T=(u.variants||[]).findIndex(M=>M.name===v.name);T>-1&&u.variants[T].stock>0&&(u.variants[T].isActive===!1||u.variants[T].isActive==="false")&&(u.variants[T].isActive=!0)}),u.variants.some(v=>(parseFloat(v.stock)||0)>0&&v.isActive!==!1&&v.isActive!=="false")&&(u.isActive===!1||u.isActive==="false")&&(u.isActive="true"),p=u.variants.reduce((v,h)=>v+(parseFloat(h.stock)||0),0);else{const f=parseFloat(document.getElementById("restock-main")?.value)||0;f>0&&(Ha(u,{poId:null,poNumber:"RESTOCK CEPAT",supplierId:u.supplierId||"",supplierName:"Penyesuaian Toko",qty:f,unitPrice:parseFloat(u.hpp)||0,variantName:"",receivedAt:new Date().toISOString()}),u.stock>0&&(u.isActive===!1||u.isActive==="false")&&(u.isActive="true")),p=u.stock}d.set(c,u),Object.assign(s,u)}),i.products[e]=s,await n([],{updateType:"stock_change",updatedProductIds:[t.toString()]}),closeRestockModal(),window.rAdmItms?.("products"),Re("stat-products",i.products.filter(d=>d.isActive!=="false"&&d.isActive!==!1).length),x(`Restock +${o} berhasil! Total stok: ${p}`)}catch(l){x("Gagal restock: "+(l.message||""))}finally{G(!1),D()}};window.toggleProductStatus=async(t,e)=>{if(Ce)return;G(!0);const a=i.products.findIndex(r=>r.id!=null&&r.id.toString()===t.toString());if(a>-1){i.products[a].isActive=e?"true":"false",L(e?"Mengaktifkan...":"Menonaktifkan...");try{const r=typeof P<"u"&&P?P:window.db,s=typeof O=="function"?O:window.saveApp||(async()=>{});if(!r)throw new Error("Database Firebase belum terhubung");await r.collection("freshmart").doc("cms_data").collection("products").doc(t.toString()).update({isActive:e?"true":"false"}),await s([],{updateType:"stock_change",updatedProductIds:[t.toString()]}),Re("stat-products",i.products.filter(o=>o.isActive!=="false"&&o.isActive!==!1).length),window.rAdmItms?.("products"),x(e?"Produk Aktif!":"Stok Dikosongkan!")}catch(r){x("Gagal update status: "+(r.message||""))}finally{G(!1),D()}}else G(!1)};window.closeAdminModal=(t=!1)=>{const e=k("admin-modal"),a=k("admin-modal-box");e&&rr("admin",t,()=>{Z(e,a)})};const ho=t=>window.pushModalHistory?.(t),vo=(t,e,a)=>window.requestCloseModal?.(t,e,a);let Q;window.openCameraScanner=async(t="search-input")=>{const e=k("scanner-modal");e&&e.classList.contains("hidden")&&ho("scanner"),ne(e,e?.firstElementChild);try{await zt("/html5-qrcode.min.js",()=>typeof Html5Qrcode<"u").catch(()=>zt("https://cdnjs.cloudflare.com/ajax/libs/html5-qrcode/2.3.8/html5-qrcode.min.js",()=>typeof Html5Qrcode<"u"))}catch{x("Gagal memuat modul kamera. Cek koneksi atau izin kamera."),closeCameraScanner();return}Q||(Q=new Html5Qrcode("reader"));const a=typeof Html5QrcodeSupportedFormats<"u"?[Html5QrcodeSupportedFormats.CODE_128,Html5QrcodeSupportedFormats.EAN_13,Html5QrcodeSupportedFormats.EAN_8,Html5QrcodeSupportedFormats.CODE_39,Html5QrcodeSupportedFormats.UPC_A,Html5QrcodeSupportedFormats.UPC_E,Html5QrcodeSupportedFormats.QR_CODE]:void 0,r={fps:15,qrbox:(s,o)=>{const l=Math.min(Math.floor(s*.88),340),n=Math.min(Math.floor(o*.45),150);return{width:Math.max(l,220),height:Math.max(n,90)}},...a?{formatsToSupport:a}:{},experimentalFeatures:{useBarCodeDetectorIfSupported:!0}};setTimeout(()=>{Q&&Q.start({facingMode:"environment"},r,s=>{const o=typeof window.cleanBarcodeRaw=="function"?window.cleanBarcodeRaw(s):(s||"").trim();let l=k(t);l&&(l.value=o,t==="search-input"||t==="mobile-header-search"?window.handleSearch?.(o):(l.dispatchEvent(new Event("input",{bubbles:!0})),l.dispatchEvent(new Event("change",{bubbles:!0})))),x("Barcode terbaca!"),closeCameraScanner()},s=>{}).catch(s=>{x("Akses kamera ditolak/gagal!"),closeCameraScanner()})},100)};window.closeCameraScanner=(t=!1)=>{vo("scanner",t,()=>{if(k("scanner-modal").classList.add("opacity-0"),Q)try{Q.getState()===2||Q.getState()===3?Q.stop().then(()=>{Q.clear(),Q=null}).catch(e=>{Q.clear(),Q=null}):(Q.clear(),Q=null)}catch{Q=null}setTimeout(()=>rt("scanner-modal"),300)})};const wo=t=>window.pushModalHistory?.(t),yo=(t,e,a)=>window.requestCloseModal?.(t,e,a);let Me=[];window.openQuickPriceModal=t=>{const e=i.products.find(o=>o&&o.id!=null&&String(o.id)===String(t));if(!e)return;const a=e.variants&&e.variants.length>0;Me=!a&&e.wholesale?JSON.parse(JSON.stringify(e.wholesale)):[];let r="";a?r=e.variants.map((o,l)=>`
            <div class="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-3">
                <div class="flex items-center gap-2.5 min-w-0">
                    ${o.colorCode?`<span class="w-4 h-4 rounded-full shrink-0 shadow-sm border border-slate-300" style="background-color:${m(o.colorCode)}"></span>`:""}
                    <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${m(o.name)}</p>
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
                    <p class="text-[10px] font-bold text-slate-500 mt-0.5 uppercase tracking-widest">${m(e.name)}</p>
                </div>
                <button onclick="closeQuickPriceModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-rose-100 hover:text-rose-500 flex items-center justify-center transition-all cursor-pointer"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="custom-scrollbar p-5 sm:p-6 overflow-y-auto flex-1 space-y-3" id="qp-body">${r}</div>
            <div class="p-5 border-t border-slate-100 dark:border-slate-800 shrink-0">
                <button onclick="processQuickPrice('${m(String(t))}')" class="btn-primary py-3.5 text-sm shadow-glow !rounded-2xl flex items-center justify-center gap-2 cursor-pointer active:scale-95"><i class="fa-solid fa-save"></i> Simpan Harga</button>
            </div>
        </div>`,a||rQpWhol(),s.style.opacity="0",s.style.display="flex",requestAnimationFrame(()=>{s.style.transition="opacity 0.25s ease",s.style.opacity="1"}),wo("quickprice")};window.qpUpdateWhol=(t,e,a)=>{Me[t]&&(Me[t][e]=parseFloat(a)||0)};window.qpRemoveWhol=t=>{Me.splice(t,1),typeof window.rQpWhol=="function"&&window.rQpWhol()};window.rQpWhol=()=>{R("qp-whol-container",Me.length?Me.map((t,e)=>`
        <div class="flex items-center gap-2">
            <input type="number" min="1" placeholder="Min. Qty" value="${t.minQty||""}" onchange="window.qpUpdateWhol(${e}, 'minQty', this.value)" class="admin-input !py-2.5 !px-3 text-xs bg-slate-50 dark:bg-slate-900/50 flex-1">
            <input type="number" min="0" placeholder="Harga/Unit" value="${t.price||""}" onchange="window.qpUpdateWhol(${e}, 'price', this.value)" class="admin-input !py-2.5 !px-3 text-xs bg-slate-50 dark:bg-slate-900/50 flex-1">
            <button type="button" onclick="window.qpRemoveWhol(${e})" class="w-9 h-9 shrink-0 rounded-xl bg-rose-50 text-rose-500 hover:bg-rose-500 hover:text-white flex items-center justify-center transition-all cursor-pointer"><i class="fa-solid fa-trash text-xs"></i></button>
        </div>`).join(""):'<p class="text-[11px] font-bold text-slate-400 text-center py-2">Belum ada tingkat harga grosir.</p>')};window.qpAddWhol=()=>{Me.push({minQty:0,price:0}),rQpWhol()};window.closeQuickPriceModal=(t=!1)=>{yo("quickprice",t,()=>{const e=document.getElementById("quickprice-modal");!e||e.style.display==="none"||(e.style.opacity="0",e.style.transition="opacity 0.25s ease",setTimeout(()=>{e.style.display="none",e.style.opacity="",e.style.transition=""},250))})};window.processQuickPrice=async t=>{if(Ce)return;G(!0);const e=i.products.findIndex(s=>s&&s.id!=null&&String(s.id)===String(t));if(e<0){G(!1);return}const a=i.products[e],r=a.variants&&a.variants.length>0;L("Menyimpan Harga...");try{const s=typeof P<"u"&&P?P:window.db,o=typeof O=="function"?O:window.saveApp||(async()=>{});if(!s)throw new Error("Database Firebase belum terhubung");const l=s.collection("freshmart").doc("cms_data").collection("products").doc(t.toString());let n=null;await s.runTransaction(async c=>{const p=await c.get(l);if(!p.exists)throw new Error("Produk tidak ditemukan di server");const d=JSON.parse(JSON.stringify(p.data()));r?a.variants.forEach((b,u)=>{const f=(d.variants||[]).findIndex(v=>v.name===b.name);f<0||(d.variants[f].hpp=parseFloat(document.getElementById("qp-var-hpp-"+u)?.value)||0,d.variants[f].price=parseFloat(document.getElementById("qp-var-price-"+u)?.value)||0,d.variants[f].priceNormal=parseFloat(document.getElementById("qp-var-normal-"+u)?.value)||0,d.variants[f].poin=parseFloat(document.getElementById("qp-var-poin-"+u)?.value)||0)}):(d.hpp=parseFloat(document.getElementById("qp-hpp")?.value)||0,d.price=parseFloat(document.getElementById("qp-price")?.value)||0,d.priceNormal=parseFloat(document.getElementById("qp-normal")?.value)||0,d.poin=parseFloat(document.getElementById("qp-poin")?.value)||0,d.wholesale=Me.filter(b=>parseFloat(b.minQty)>.01&&b.price>0)),c.set(l,d),n=d}),i.products[e]=n,await o([],{updateType:"stock_change",updatedProductIds:[t.toString()]}),closeQuickPriceModal(),window.rAdmItms?.("products"),x("Harga berhasil diperbarui!")}catch(s){x("Gagal simpan harga: "+(s.message||""))}finally{G(!1),D()}};window.rWholB=()=>{const t=document.getElementById("wholesale-builder-container");if(!t)return;const e=parseFloat(document.getElementById("af-hpp")?.value)||0;let a=`<div class="space-y-4 mb-4">${ve.map((r,s)=>{const o=Za(r.price,e);let l="";return r.price>0&&e>0&&(o.isNegative?l=`<span class="inline-flex items-center gap-1 text-[10px] font-bold text-rose-500"><i class="fa-solid fa-triangle-exclamation"></i> Margin Negatif (-Rp ${Math.abs(o.marginRp).toLocaleString("id-ID")})</span>`:o.isThin?l=`<span class="inline-flex items-center gap-1 text-[10px] font-bold text-amber-500"><i class="fa-solid fa-circle-exclamation"></i> Margin Tipis (${o.marginPercent}%)</span>`:l=`<span class="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 dark:text-emerald-400"><i class="fa-solid fa-shield-halved"></i> Margin Sehat (+${o.marginPercent}%)</span>`),`
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
    <button type="button" onclick="addWhol()" class="w-full py-3.5 bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] text-[var(--color-primary)] font-bold rounded-xl text-xs sm:text-sm border-2 border-[rgba(var(--color-primary-rgb),0.25)] dark:border-[rgba(var(--color-primary-rgb),0.35)] border-dashed hover:bg-[rgba(var(--color-primary-rgb),0.12)] transition-all flex items-center justify-center gap-2 active:scale-95 shadow-2xs cursor-pointer"><i class="fa-solid fa-tags text-base"></i> Tambah Tingkatan Grosir Eceran</button>`;t.innerHTML=a};window.addWhol=()=>{ve.push({minQty:2,price:0}),Kt(ve),window.rWholB()};window.rmWhol=t=>{ve.splice(t,1),Kt(ve),window.rWholB()};window.uWhol=(t,e,a)=>{ve[t][e]=parseFloat(a)||0};window.rMultiUnitsB=()=>{const t=document.getElementById("multi-units-builder-container");if(!t)return;const e=(document.getElementById("af-unit")?.value||"pcs").trim()||"pcs",a=parseFloat(document.getElementById("af-hpp")?.value)||0;let r='<div class="space-y-4 mb-4">';!Y||Y.length===0?r+=`<div class="text-center py-6 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl bg-slate-50/50 dark:bg-slate-900/40">
            <i class="fa-solid fa-boxes-packing text-slate-300 dark:text-slate-600 text-3xl mb-2"></i>
            <p class="text-xs font-bold text-slate-500 dark:text-slate-400">Belum ada kemasan bertingkat.</p>
            <p class="text-[10px] text-slate-400 max-w-sm mx-auto mt-1">Gunakan fitur ini jika barang dijual dalam satuan kemasan (contoh: 1 Roll = 100 Meter, 1 Dus = 6 Keping, 1 Karton = 24 Pcs, 1 Sak = 50 Kg).</p>
        </div>`:r+=Y.map((s,o)=>{const l=s.name||s.unitName||"",n=parseFloat(s.multiplier!=null?s.multiplier:s.conversionRatio)||1,c=parseFloat(s.price)||0,p=s.barcode||"",d=s.hpp!=null&&parseFloat(s.hpp)>0?parseFloat(s.hpp):Math.round(a*n),b=Za(c,d);let u="";return c>0&&d>0&&(b.isNegative?u=`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-[10px] font-bold text-rose-600 dark:text-rose-400"><i class="fa-solid fa-triangle-exclamation"></i> Margin Negatif! Jual di bawah HPP modal (Rugi Rp ${Math.abs(b.marginRp).toLocaleString("id-ID")})</span>`:b.isThin?u=`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-[10px] font-bold text-amber-600 dark:text-amber-400"><i class="fa-solid fa-circle-exclamation"></i> Margin Tipis (${b.marginPercent}%)</span>`:u=`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-[10px] font-bold text-emerald-600 dark:text-emerald-400"><i class="fa-solid fa-shield-halved"></i> Margin Sehat (+${b.marginPercent}% / Untung Rp ${b.marginRp.toLocaleString("id-ID")})</span>`),`
            <div class="bg-slate-50 dark:bg-slate-900/50 p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm relative group transition-all duration-300 hover:border-[var(--color-primary)]/40">
                <button type="button" onclick="rmMultiUnit(${o})" class="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-rose-50 border border-rose-200 text-rose-500 hover:bg-rose-500 hover:text-white dark:bg-rose-900/30 dark:border-rose-800 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 shadow-md z-10 cursor-pointer" title="Hapus Satuan Kemasan"><i class="fa-solid fa-trash text-xs"></i></button>
                
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-200/60 dark:border-slate-800">
                    <div class="flex items-center gap-2">
                        <span class="w-6 h-6 rounded-lg bg-[rgba(var(--color-primary-rgb),0.12)] text-[var(--color-primary)] font-black text-xs flex items-center justify-center">#${o+1}</span>
                        <span class="text-xs font-bold text-slate-800 dark:text-white uppercase tracking-wider">${m(l)||"Satuan Kemasan"}</span>
                        <span class="text-[11px] text-slate-500 font-medium">(${n} ${m(e)})</span>
                    </div>
                    <div>${u}</div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                        <label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-widest">Nama Kemasan</label>
                        <input autocomplete='off' type="text" placeholder="Cth: Roll / Dus / Sak" class="admin-input !text-xs !py-3 bg-white dark:bg-slate-800 shadow-sm font-bold" value="${m(l)}" onchange="uMultiUnit(${o},'name',this.value)" oninput="uMultiUnit(${o},'name',this.value)">
                    </div>
                    <div>
                        <label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-widest">Isi (per ${m(e)})</label>
                        <input autocomplete='off' type="number" step="0.01" min="0.01" placeholder="Cth: 100" class="admin-input !text-xs !py-3 bg-white dark:bg-slate-800 shadow-sm font-bold" value="${n}" onchange="uMultiUnit(${o},'multiplier',this.value); window.rMultiUnitsB();">
                    </div>
                    <div>
                        <label class="block text-[10px] font-bold text-[var(--color-primary)] mb-1.5 uppercase tracking-widest">Harga Jual Kemasan (Rp)</label>
                        <input autocomplete='off' type="number" min="0" placeholder="Cth: 680000" class="admin-input !text-xs !py-3 bg-white dark:bg-slate-800 shadow-sm font-bold text-[var(--color-primary)]" value="${c}" onchange="uMultiUnit(${o},'price',this.value); window.rMultiUnitsB();">
                    </div>
                    <div>
                        <label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-widest">Barcode Kemasan (Opsional)</label>
                        <div class="relative flex items-center">
                            <input autocomplete='off' type="text" id="mu-barcode-${o}" placeholder="Scan dus..." class="admin-input !text-xs !py-3 bg-white dark:bg-slate-800 shadow-sm !pr-10" value="${m(p)}" onchange="uMultiUnit(${o},'barcode',this.value)">
                            <button type="button" onclick="openCameraScanner('mu-barcode-${o}')" class="absolute right-1 w-8 h-8 flex items-center justify-center text-slate-400 hover:text-[var(--color-primary)] transition-all cursor-pointer" title="Scan Barcode Kemasan"><i class="fa-solid fa-qrcode text-base"></i></button>
                        </div>
                    </div>
                </div>

                <div class="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px] text-slate-400 font-medium">
                    <span class="flex items-center gap-1.5"><i class="fa-solid fa-calculator text-[var(--color-primary)]"></i> 1 ${m(l||"Kemasan")} = <b>${n} ${m(e)}</b> &bull; Modal HPP Ekuivalen: <b>Rp ${d.toLocaleString("id-ID")}</b></span>
                    ${c>0?`<span class="text-slate-500 font-bold">Harga Ecer Ekuivalen: Rp ${Math.round(c/n).toLocaleString("id-ID")} / ${m(e)}</span>`:""}
                </div>
            </div>`}).join(""),r+=`</div>
    <button type="button" onclick="addMultiUnit()" class="w-full py-3.5 bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] text-[var(--color-primary)] font-bold rounded-xl text-xs sm:text-sm border-2 border-[rgba(var(--color-primary-rgb),0.25)] dark:border-[rgba(var(--color-primary-rgb),0.35)] border-dashed hover:bg-[rgba(var(--color-primary-rgb),0.12)] transition-all flex items-center justify-center gap-2 active:scale-95 shadow-2xs cursor-pointer"><i class="fa-solid fa-box-open text-base"></i> Tambah Satuan Kemasan (Roll/Dus/Sak/Pack)</button>`,t.innerHTML=r};window.addMultiUnit=()=>{Y.push({name:"",multiplier:1,price:0,barcode:"",hpp:0}),bt(Y),window.rMultiUnitsB()};window.rmMultiUnit=t=>{Y.splice(t,1),bt(Y),window.rMultiUnitsB()};window.uMultiUnit=(t,e,a)=>{Y[t]&&(e==="multiplier"?Y[t].multiplier=parseFloat(a)||1:e==="price"?Y[t].price=parseFloat(a)||0:e==="hpp"?Y[t].hpp=parseFloat(a)||0:Y[t][e]=a)};let or=null,z=[],yt=0,j={paperSize:"thermal-40x30",showStoreName:!0,showPrice:!0,showUnit:!0,showSkuText:!0,showBorderGuide:!1,barcodeHeight:58};const lr=()=>{let t=k("modal-product-barcode-label");t?(t.className="fixed inset-0 z-[200] flex hidden items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/80 opacity-0 transition-opacity duration-300",document.body.appendChild(t)):(t=document.createElement("div"),t.id="modal-product-barcode-label",t.className="fixed inset-0 z-[200] flex hidden items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/80 opacity-0 transition-opacity duration-300",t.onclick=e=>{e.target===t&&window.closeProductBarcodeLabelModal?.()},t.innerHTML=`
            <div id="modal-product-barcode-label-box" class="modal-bottom-sheet relative flex max-h-[94dvh] sm:max-h-[90dvh] w-full max-w-5xl translate-y-full sm:translate-y-10 transform flex-col overflow-hidden rounded-t-[2rem] sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300">
                <div id="modal-product-barcode-label-content" class="flex-1 flex flex-col overflow-hidden min-h-0"></div>
            </div>
        `,document.body.appendChild(t))},ir=(t,e=null)=>{const a=k("modal-product-fifo");if(a&&!a.classList.contains("hidden")){const c=k("modal-product-fifo-box");c&&Z(a,c),typeof window.requestCloseModal=="function"&&window.requestCloseModal("productFifo",!0)}const r=k("modal-po-detail");if(r&&!r.classList.contains("hidden")){const c=k("modal-po-detail-box");c&&Z(r,c),typeof window.requestCloseModal=="function"&&window.requestCloseModal("purchaseDetail",!0)}lr();const s=(i.products||[]).find(c=>String(c.id)===String(t));if(!s){x("Produk tidak ditemukan!");return}if(or=String(s.id),yt=0,z=[],Array.isArray(s.variants)&&s.variants.length>0)s.variants.forEach((c,p)=>{const d=(c.barcode||c.sku||`${s.sku||s.id}-${p+1}`).trim(),b=parseFloat(c.stock)||0,u=e&&(e[d]!==void 0||e[p]!==void 0)?Math.max(0,parseInt(e[d]??e[p],10)):1;z.push({id:`${s.id}_var_${p}`,name:s.name||"Produk",variantName:c.name||c.title||`Varian ${p+1}`,sku:d,price:parseFloat(c.price!==void 0?c.price:s.price)||0,unit:c.unit||s.unit||"pcs",stock:b,qty:u,hex:c.hex||null})});else{const c=(s.sku||s.barcode||`SKU-${s.id}`).trim(),p=parseFloat(s.stock)||0,d=e&&e[c]!==void 0?Math.max(1,parseInt(e[c],10)):Math.min(Math.max(1,Math.round(p)||1),50);z.push({id:String(s.id),name:s.name||"Produk",variantName:"",sku:c,price:parseFloat(s.price)||0,unit:s.unit||"pcs",stock:p,qty:d,hex:s.hex||null})}De();const l=k("modal-product-barcode-label"),n=k("modal-product-barcode-label-box");!l||!n||(document.body.appendChild(l),l.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("productBarcodeLabel"),ne(l,n))},nr=(t=!1)=>{const e=k("modal-product-barcode-label"),a=k("modal-product-barcode-label-box");!e||!a||(!t&&typeof window.requestCloseModal=="function"?window.requestCloseModal("productBarcodeLabel",!1,()=>Z(e,a)):Z(e,a))},De=()=>{const t=k("modal-product-barcode-label-content");if(!t)return;const e=(i.products||[]).find(b=>String(b.id)===String(or));if(!e)return;const a=i.store?.name||"TOKO PUTRI",r=z.reduce((b,u)=>b+(parseInt(u.qty,10)||0),0),s=z[yt]||z[0]||{name:e.name,variantName:"",sku:e.sku||"SKU-001",price:e.price||0,unit:e.unit||"pcs"},o=j.paperSize==="a4-2x7"?14:30,l=Math.ceil(r/o)||0,n=Zt(s.sku,{height:j.barcodeHeight,showText:j.showSkuText,fontSize:10}),c=b=>j.paperSize===b,p=b=>c(b)?"p-2.5 rounded-xl border text-left transition-all cursor-pointer shadow-2xs font-bold":"p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-slate-300 text-slate-700 dark:text-slate-300 text-left transition-all cursor-pointer",d=b=>c(b)?"background: rgba(var(--color-primary-rgb), 0.08); border-color: var(--color-primary); color: var(--color-primary);":"";t.innerHTML=`
        <!-- 1. HEADER MODAL (SOLID PINNED) -->
        <div class="shrink-0 px-5 sm:px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between z-10">
            <div class="flex items-center gap-3 min-w-0">
                <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-white text-base shadow-sm shrink-0" style="background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.35);">
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
                        ${m(e.name)} • ${z.length} Item / Varian Terdaftar
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
                                <i class="fa-solid fa-print" style="color: var(--color-primary)"></i>
                                <span>Pilih Format Printer &amp; Ukuran Label</span>
                            </span>
                            <span class="text-[10px] font-bold text-slate-400">Universal Support</span>
                        </div>

                        <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            <button type="button" onclick="window.setBarcodeLabelPaper('thermal-40x30')" class="${p("thermal-40x30")}" style="${d("thermal-40x30")}">
                                <div class="flex items-center justify-between mb-1">
                                    <span class="text-[11px] font-black">Thermal 40x30</span>
                                    <span class="text-[9px] px-1 py-0.2 rounded font-bold" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">Populer</span>
                                </div>
                                <span class="text-[10px] text-slate-400 block font-normal">Stiker Rak &amp; Barang</span>
                            </button>

                            <button type="button" onclick="window.setBarcodeLabelPaper('thermal-50x30')" class="${p("thermal-50x30")}" style="${d("thermal-50x30")}">
                                <span class="text-[11px] font-black block mb-1">Thermal 50x30</span>
                                <span class="text-[10px] text-slate-400 block font-normal">Stiker Ekstra Lega</span>
                            </button>

                            <button type="button" onclick="window.setBarcodeLabelPaper('thermal-58mm')" class="${p("thermal-58mm")}" style="${d("thermal-58mm")}">
                                <span class="text-[11px] font-black block mb-1">Roll 58 mm</span>
                                <span class="text-[10px] text-slate-400 block font-normal">Continuous Stiker</span>
                            </button>

                            <button type="button" onclick="window.setBarcodeLabelPaper('thermal-80mm')" class="${p("thermal-80mm")}" style="${d("thermal-80mm")}">
                                <span class="text-[11px] font-black block mb-1">Roll 80 mm</span>
                                <span class="text-[10px] text-slate-400 block font-normal">Label POS Lebar</span>
                            </button>

                            <button type="button" onclick="window.setBarcodeLabelPaper('a4-3x10')" class="${p("a4-3x10")}" style="${d("a4-3x10")}">
                                <div class="flex items-center justify-between mb-1">
                                    <span class="text-[11px] font-black">Kertas A4 (3x10)</span>
                                    <span class="text-[9px] px-1 py-0.2 rounded bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 font-bold">30 Pcs</span>
                                </div>
                                <span class="text-[10px] text-slate-400 block font-normal">Printer Biasa / Inkjet</span>
                            </button>

                            <button type="button" onclick="window.setBarcodeLabelPaper('a4-2x7')" class="${p("a4-2x7")}" style="${d("a4-2x7")}">
                                <div class="flex items-center justify-between mb-1">
                                    <span class="text-[11px] font-black">Kertas A4 (2x7)</span>
                                    <span class="text-[9px] px-1 py-0.2 rounded bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 font-bold">14 Pcs</span>
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
                            ${z.map((b,u)=>{const f=yt===u;return`
                                    <div class="p-3 sm:p-3.5 rounded-xl border transition-all ${f?"shadow-2xs":"border-slate-200/90 dark:border-slate-700/80 bg-slate-50/40 dark:bg-slate-800/40 hover:border-slate-300"}" style="${f?"background: rgba(var(--color-primary-rgb), 0.05); border: 1.5px solid var(--color-primary);":""} display: flex; align-items: center; justify-content: space-between; gap: 0.75rem;">
                                        <div class="flex items-center gap-2.5 min-w-0 cursor-pointer flex-1" onclick="window.selectBarcodePreviewIndex(${u})">
                                            ${b.hex?`
                                                <div class="w-5 h-5 rounded-full border border-slate-300 shadow-2xs shrink-0" style="background-color: ${m(b.hex)}"></div>
                                            `:`
                                                <div class="w-6 h-6 rounded-lg bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-[10px] text-slate-500 font-bold shrink-0">
                                                    #${u+1}
                                                </div>
                                            `}
                                            <div class="min-w-0 flex-1">
                                                <div class="flex items-center gap-1.5 flex-wrap">
                                                    <span class="text-xs font-black text-slate-800 dark:text-white truncate">
                                                        ${m(b.variantName||b.name)}
                                                    </span>
                                                    ${f?'<span class="px-1.5 py-0.2 rounded text-[8.5px] font-black uppercase text-white shadow-2xs" style="background: var(--color-primary);">Preview</span>':""}
                                                </div>
                                                <div class="flex items-center gap-2 text-[10px] text-slate-400 font-medium">
                                                    <span class="font-mono font-bold text-slate-600 dark:text-slate-300">${m(b.sku)}</span>
                                                    <span>•</span>
                                                    <span>${g(b.price)}</span>
                                                    <span>•</span>
                                                    <span>Stok: <b>${b.stock}</b></span>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- STEPPER KUANTITAS ERGONOMIS SENTUH -->
                                        <div class="flex items-center gap-1.5 shrink-0">
                                            <button type="button" onclick="window.adjustBarcodeLabelQty(${u}, -1)" class="btn-native-icon w-9 h-9 rounded-xl bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 flex items-center justify-center text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 transition-all cursor-pointer active:scale-95 shadow-2xs" title="Kurangi 1">
                                                <i class="fa-solid fa-minus text-[11px]"></i>
                                            </button>
                                            <input type="number" min="0" max="999" value="${b.qty}" onchange="window.setBarcodeLabelQtyDirect(${u}, this.value)" class="w-14 h-9 text-center font-mono font-black text-sm border border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)] shadow-2xs">
                                            <button type="button" onclick="window.adjustBarcodeLabelQty(${u}, 1)" class="btn-native-icon w-9 h-9 rounded-xl bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 flex items-center justify-center text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 transition-all cursor-pointer active:scale-95 shadow-2xs" title="Tambah 1">
                                                <i class="fa-solid fa-plus text-[11px]"></i>
                                            </button>
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
                                <input type="checkbox" ${j.showStoreName?"checked":""} onchange="window.toggleBarcodeOption('showStoreName', this.checked)" class="w-4 h-4 rounded accent-[var(--color-primary)] cursor-pointer">
                                <span>Kop Nama Toko</span>
                            </label>

                            <label class="flex items-center gap-2 cursor-pointer select-none">
                                <input type="checkbox" ${j.showPrice?"checked":""} onchange="window.toggleBarcodeOption('showPrice', this.checked)" class="w-4 h-4 rounded accent-[var(--color-primary)] cursor-pointer">
                                <span>Harga Jual Produk</span>
                            </label>

                            <label class="flex items-center gap-2 cursor-pointer select-none">
                                <input type="checkbox" ${j.showUnit?"checked":""} onchange="window.toggleBarcodeOption('showUnit', this.checked)" class="w-4 h-4 rounded accent-[var(--color-primary)] cursor-pointer">
                                <span>Satuan Barang (/ pcs)</span>
                            </label>

                            <label class="flex items-center gap-2 cursor-pointer select-none">
                                <input type="checkbox" ${j.showSkuText?"checked":""} onchange="window.toggleBarcodeOption('showSkuText', this.checked)" class="w-4 h-4 rounded accent-[var(--color-primary)] cursor-pointer">
                                <span>Teks SKU di Bawah Barcode</span>
                            </label>

                            <label class="flex items-center gap-2 cursor-pointer select-none col-span-2 pt-1 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500">
                                <input type="checkbox" ${j.showBorderGuide?"checked":""} onchange="window.toggleBarcodeOption('showBorderGuide', this.checked)" class="w-4 h-4 rounded accent-[var(--color-primary)] cursor-pointer">
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
                            <div class="bg-white text-slate-900 rounded-lg shadow-xl p-3 flex flex-col justify-between items-center text-center transition-all ${j.paperSize==="thermal-50x30"?"w-[230px] h-[145px]":"w-[210px] h-[155px]"} border ${j.showBorderGuide?"border-dashed border-slate-400":"border-slate-200"}">
                                
                                <!-- KOP TOKO -->
                                ${j.showStoreName?`
                                    <div class="text-[9px] font-black tracking-widest uppercase text-slate-700 border-b border-slate-200 w-full pb-0.5 truncate">
                                        ${m(a)}
                                    </div>
                                `:""}

                                <!-- NAMA BARANG & VARIAN -->
                                <div class="w-full px-1 pt-0.5">
                                    <p class="text-[10px] font-black leading-tight truncate text-slate-900" title="${m(s.name)}">
                                        ${m(s.name)}
                                    </p>
                                    ${s.variantName?`
                                        <p class="text-[9px] font-bold leading-tight truncate mt-0.5" style="color: var(--color-primary);">
                                            [${m(s.variantName)}]
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
                                ${j.showPrice?`
                                    <div class="w-full pt-0.5 border-t border-slate-200 flex items-center justify-center gap-1 font-mono">
                                        <span class="text-xs font-black text-slate-950 tracking-tight">
                                            ${g(s.price)}
                                        </span>
                                        ${j.showUnit?`
                                            <span class="text-[9px] font-bold text-slate-500">/${m(s.unit||"pcs")}</span>
                                        `:""}
                                    </div>
                                `:""}
                            </div>
                        </div>

                        <!-- RINGKASAN PRODUKSI CETAK -->
                        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/90 dark:border-slate-700/80 space-y-2">
                            <div class="flex items-center justify-between text-xs font-bold text-slate-600 dark:text-slate-300">
                                <span>Total Stiker Dicetak:</span>
                                <span class="text-base font-black font-mono" style="color: var(--color-primary);">${r} Lembar</span>
                            </div>

                            ${j.paperSize.startsWith("a4")?`
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

                <button type="button" onclick="window.printBarcodeLabelsBrowser()" class="btn-native-action flex-1 sm:flex-initial h-11 sm:h-12 px-4 sm:px-6 rounded-xl text-white font-black text-xs uppercase tracking-wider transition-all active:scale-95 shadow-md flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap" style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                    <i class="fa-solid fa-print text-xs"></i>
                    <span>Cetak Sekarang (${r})</span>
                </button>
            </div>
        </div>
    `},dr=t=>{j.paperSize=t,De()},cr=(t,e)=>{j[t]=!!e,De()},pr=t=>{t>=0&&t<z.length&&(yt=t,De())},mr=(t,e)=>{if(z[t]){const a=parseInt(z[t].qty,10)||0;z[t].qty=Math.max(0,a+e),De()}},br=(t,e)=>{z[t]&&(z[t].qty=Math.max(0,parseInt(e,10)||0),De())},ur=t=>{z.forEach(e=>{t==="stock"?e.qty=Math.max(1,Math.round(parseFloat(e.stock)||1)):typeof t=="number"&&(e.qty=Math.max(0,t))}),De()},xr=()=>{if(z.reduce((d,b)=>d+(parseInt(b.qty,10)||0),0)<=0){x("Tentukan jumlah label yang akan dicetak terlebih dahulu!");return}const e=i.store?.name||"TOKO PUTRI";j.paperSize.startsWith("a4"),j.paperSize;const a=j.paperSize==="thermal-58mm",r=j.paperSize==="thermal-80mm",s=[];z.forEach(d=>{const b=parseInt(d.qty,10)||0;for(let u=0;u<b;u++)s.push(d)});const o=s.map(d=>{const b=Zt(d.sku,{height:j.barcodeHeight,showText:j.showSkuText,fontSize:10});return`
            <div class="label-item ${j.showBorderGuide?"with-border":""}">
                ${j.showStoreName?`
                    <div class="lbl-store">${m(e)}</div>
                `:""}
                <div class="lbl-info">
                    <div class="lbl-name">${m(d.name)}</div>
                    ${d.variantName?`<div class="lbl-variant">[${m(d.variantName)}]</div>`:""}
                </div>
                <div class="lbl-barcode">${b}</div>
                ${j.showPrice?`
                    <div class="lbl-price">
                        ${g(d.price)}${j.showUnit?`<span class="lbl-unit">/${m(d.unit||"pcs")}</span>`:""}
                    </div>
                `:""}
            </div>
        `}).join("");let l="",n="thermal-container";j.paperSize==="thermal-40x30"?l=`
            @page { size: 40mm 30mm; margin: 0; }
            body { margin: 0; padding: 0; }
            .label-item {
                width: 40mm; height: 30mm;
                page-break-after: always; break-after: page;
                box-sizing: border-box; padding: 1.5mm 2mm;
                display: flex; flex-direction: column; justify-content: space-between; align-items: center; text-align: center;
                overflow: hidden;
            }
        `:j.paperSize==="thermal-50x30"?l=`
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
        `:j.paperSize==="a4-3x10"?(n="a4-grid-3x10",l=`
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
        `):j.paperSize==="a4-2x7"&&(n="a4-grid-2x7",l=`
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
        `);const c=`<!DOCTYPE html>
    <html lang="id">
    <head>
        <meta charset="UTF-8">
        <title>Cetak Label Barcode - ${m(e)}</title>
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
        <div class="${n}">
            ${o}
        </div>
    </body>
    </html>`;let p=k("barcode-print-isolated-iframe");p||(p=document.createElement("iframe"),p.id="barcode-print-isolated-iframe",p.style.position="fixed",p.style.right="0",p.style.bottom="0",p.style.width="0",p.style.height="0",p.style.border="0",p.style.opacity="0",p.style.pointerEvents="none",document.body.appendChild(p));try{const d=p.contentWindow.document;d.open(),d.write(c),d.close()}catch{const b=window.open("","_blank");b?(b.document.open(),b.document.write(c),b.document.close()):x("Izinkan pop-up peramban untuk mencetak label.")}},fr=async()=>{const t=z.reduce((l,n)=>l+(parseInt(n.qty,10)||0),0);if(t<=0){x("Tentukan jumlah label yang akan dicetak terlebih dahulu!");return}let e;try{e=await J(()=>import("./module-print-D7ZGPnsx.js").then(l=>l.bl),__vite__mapDeps([1,2,3]))}catch{x("Modul thermal RawBT tidak dapat dimuat.");return}const{ThermalReceiptBuilder:a,printViaRawBT:r}=e,s=i.store?.name||"TOKO PUTRI",o=new a(58);z.forEach(l=>{const n=parseInt(l.qty,10)||0;for(let c=0;c<n;c++)o.align("center"),j.showStoreName&&o.line(s,{bold:!0,size:"normal"}),o.line(l.name,{bold:!0,size:"normal"}),l.variantName&&o.line(`[${l.variantName}]`,{size:"normal"}),o.barcode(l.sku,"CODE128",55),j.showPrice&&o.line(g(l.price)+(j.showUnit?`/${l.unit||"pcs"}`:""),{bold:!0,size:"large"}),o.feed(2),o.cut()});try{await r(o),x(`Perintah cetak ${t} label dikirim ke RawBT!`)}catch(l){x("Gagal mengirim ke RawBT: "+l.message)}};window.openProductBarcodeLabelModal=ir;window.closeProductBarcodeLabelModal=nr;window.setBarcodeLabelPaper=dr;window.toggleBarcodeOption=cr;window.selectBarcodePreviewIndex=pr;window.adjustBarcodeLabelQty=mr;window.setBarcodeLabelQtyDirect=br;window.setAllBarcodeLabelQty=ur;window.printBarcodeLabelsBrowser=xr;window.printBarcodeLabelsThermalRawbt=fr;let pt="products";const mt=t=>{pt=t,window.cTab=t};let Ee="";const gr=t=>{Ee=t,window.aSq=t};let se=null;const Sa=t=>{se=t,window.eId=t};let Ce=!1;const G=t=>{Ce=t};let F=[];const Qe=t=>{F=t};let ve=[];const Kt=t=>{ve=t};let le=[];const Ut=t=>{le=t};let Y=[];const bt=t=>{Y=t,window.tMultiUnits=t};let ie=[];const Ye=t=>{ie=t,window.tSubCats=t};window.setCTab=mt;window.setASq=gr;window.setEId=Sa;window.setTSubCats=Ye;window.setTMultiUnits=bt;const de=(t,e,a)=>{console.error(`[AdminRouter] Gagal memuat modul ${t}:`,a),R("admin-content",`
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
    `)};typeof window.openExpenseModal!="function"&&(window.openExpenseModal=(t=null)=>{J(()=>import("./expenses-C4hjzaSY.js"),__vite__mapDeps([6,1,2,3,0,4,5,7])).then(e=>{e&&typeof e.openExpenseModal=="function"&&e.openExpenseModal(t)}).catch(e=>{console.error("[Expenses] Gagal memuat modal pengeluaran via proxy:",e),x("Gagal memuat form pengeluaran.")})});typeof window.openDeliveryModal!="function"&&(window.openDeliveryModal=t=>{J(()=>Promise.resolve().then(()=>To),void 0).then(e=>{e&&typeof e.openDeliveryModal=="function"&&e.openDeliveryModal(t)}).catch(e=>{console.error("[Delivery] Gagal memuat modul pengiriman via proxy:",e),x("Gagal memuat form pengiriman.")})});typeof window.openSalesReturnModal!="function"&&(window.openSalesReturnModal=(t=null)=>{J(()=>import("./returns-DVW5nxub.js"),__vite__mapDeps([8,1,2,3,0,4,5])).then(e=>{e&&typeof e.openSalesReturnModal=="function"&&e.openSalesReturnModal(t)}).catch(e=>{console.error("[Returns] Gagal memuat modul retur via proxy:",e),x("Gagal memuat form retur.")})});const kr=(t,e=!1)=>{if(!Tt(t==="staff"?"cashiers":t)){x("Akses Dibatasi: Akun Anda tidak memiliki izin untuk membuka modul ini."),typeof window.openAdminMenu=="function"&&window.openAdminMenu();return}const r=document.querySelector("#view-admin .scroll-content");r&&(r.scrollTop=0),typeof window.hideFloatingScrollTop=="function"&&window.hideFloatingScrollTop();const s=k("view-admin");if(s&&(t==="pos"?s.classList.add("admin-pos-mode"):s.classList.remove("admin-pos-mode")),qa(t),Or(""),!e){const l=history.state;l&&l.view==="view-admin"&&l.tab?history.replaceState({view:"view-admin",tab:t},"",window.location.href):history.pushState({view:"view-admin",tab:t},"",window.location.href)}if(rt("admin-dashboard-view"),Ge("admin-content-view"),Ge("btn-admin-back"),rt("admin-logo-box"),Re("admin-header-title",{orders:"Pesanan",settings:"Toko",products:"Produk",categories:"Kategori",brands:"Merek",banks:"Rekening",banners:"Banner",vouchers:"Voucher",customers:"Database Pelanggan",rewards:"Program Hadiah",reviews:"Ulasan Pelanggan",faqs:"Tanya Jawab / Q&A",reports:"Pusat Laporan & Keuangan",tax:"Pusat Laporan & Keuangan",expenses:"Biaya Operasional Toko",stock_opname:"Stock Opname (Audit Fisik)",returns:"Retur Barang (RMA)",flash_sale:"Flash Sale (Promo Kilat)",piutang:"Piutang Tempo",colors:"Database Warna",changelog:"Log Pembaruan Sistem",suppliers:"Supplier & Rekanan",purchases:"Order Pembelian & Hutang PO",pos:"Kasir POS",cashiers:"Kelola Staf & Hak Akses",staff:"Kelola Staf & Hak Akses",backup_sync:"Pusat Data & Sinkronisasi"}[t]||"CMS"),t!=="orders"&&Ae&&(Ae(),st(null)),t!=="customers"&&Se&&(Se(),et(null)),t!=="reviews"&&Te&&(Te(),tt(null)),t==="settings")typeof window.rAdmSet=="function"&&window.rAdmSet();else if(t==="orders")typeof window.rAdmOrd=="function"&&window.rAdmOrd();else if(t==="reports"||t==="tax")J(()=>import("./reports-DZDqb-EH.js"),__vite__mapDeps([9,1,2,3,10,0,4,5,7])).then(l=>l.renderReportsHubView(t==="tax"?"tax":null)).catch(l=>{de("Pusat Laporan & Keuangan",t,l)});else if(t==="piutang")typeof window.rAdmPiutang=="function"&&window.rAdmPiutang();else if(t==="flash_sale")J(()=>import("./flash-sale-DFTe-PNh.js"),__vite__mapDeps([11,1,2,3,0,4,5])).then(l=>l.renderFlashSaleAdminView()).catch(l=>{de("Flash Sale & Promo Kilat",t,l)});else if(t==="suppliers")J(()=>import("./suppliers-BaU6DiN8.js"),__vite__mapDeps([12,1,2,3,0,4,5])).then(l=>l.renderSuppliersView()).catch(l=>{de("Supplier & Rekanan",t,l)});else if(t==="purchases")J(()=>import("./purchases-DC9YHaGX.js"),__vite__mapDeps([10,1,2,3,0,4,5])).then(l=>l.renderPurchasesView()).catch(l=>{de("Order Pembelian (PO)",t,l)});else if(t==="expenses")J(()=>import("./expenses-C4hjzaSY.js"),__vite__mapDeps([6,1,2,3,0,4,5,7])).then(l=>l.renderExpensesAdminView()).catch(l=>{de("Biaya Operasional Toko",t,l)});else if(t==="stock_opname")J(()=>import("./stock-opname-D8LW3oCW.js"),__vite__mapDeps([13,1,2,3,0,4,5])).then(l=>l.renderStockOpnameView()).catch(l=>{de("Stock Opname (Audit Fisik)",t,l)});else if(t==="returns")J(()=>import("./returns-DVW5nxub.js"),__vite__mapDeps([8,1,2,3,0,4,5])).then(l=>l.renderReturnsView()).catch(l=>{de("Retur Barang & RMA",t,l)});else if(t==="customers"){R("admin-content",'<div class="text-center py-16"><i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i></div>'),Se&&(Se(),et(null));const l=P.collection("freshmart").doc("cms_data").collection("customers").onSnapshot(n=>{i.customers=n.docs.map(c=>{const p=c.data();return parseFloat(p.paylaterUsed)<0&&(p.paylaterUsed=0,c.ref.update({paylaterUsed:0}).catch(()=>{})),p}),typeof window.rAdmL=="function"&&window.rAdmL("customers")},()=>{x("Gagal memuat data pelanggan!"),typeof window.rAdmL=="function"&&window.rAdmL("customers")});et(l)}else if(t==="reviews"){R("admin-content",'<div class="text-center py-16"><i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i></div>'),Te&&(Te(),tt(null));const l=P.collection("freshmart").doc("cms_data").collection("reviews").onSnapshot(n=>{const c=n.docs.map(p=>p.data());c.sort((p,d)=>{const b=p.createdAt&&p.createdAt.toMillis?p.createdAt.toMillis():0;return(d.createdAt&&d.createdAt.toMillis?d.createdAt.toMillis():0)-b}),Er(c),typeof window.rAdmReviews=="function"&&window.rAdmReviews()},()=>{x("Gagal memuat ulasan!")});tt(l)}else t==="faqs"?typeof window.rAdmFAQ=="function"&&window.rAdmFAQ():t==="changelog"?typeof window.rAdmChangelog=="function"&&window.rAdmChangelog():t==="rewards"?(typeof window.attachRewardsRealtime=="function"&&window.attachRewardsRealtime(),typeof window.rAdmL=="function"&&window.rAdmL("rewards")):t==="pos"?J(()=>import("./module-pos-YAlbR-NC.js").then(l=>l.V),__vite__mapDeps([0,1,2,3,4,5])).then(l=>l.renderPOS()).catch(l=>{de("Kasir POS",t,l)}):t==="cashiers"||t==="staff"?J(()=>import("./pos-cashier-admin-BeidD5ZS.js"),__vite__mapDeps([14,1,2,3,0,4,5])).then(l=>l.renderCashierAccounts()).catch(l=>{de("Kelola Staf & Hak Akses",t,l)}):t==="backup_sync"?J(()=>import("./backup-sync-IfFMw7a1.js"),__vite__mapDeps([15,1,2,3])).then(l=>l.renderBackupSyncView()).catch(l=>{de("Pusat Data & Sinkronisasi",t,l)}):typeof window.rAdmL=="function"&&window.rAdmL(t)};window.openAdminTab=kr;const We=[{id:"pickup",name:"Mobil Pick-up (L300 / Gran Max)",shortName:"Mobil Pick-up",sub:"L300 / Gran Max",capacity:"1.5 Ton",icon:"fa-truck-pickup"},{id:"truck_engkel",name:"Truk Engkel 4 Roda (Canter/Dyna)",shortName:"Truk Engkel 4 Roda",sub:"Canter / Dyna",capacity:"3.5 Ton",icon:"fa-truck"},{id:"truck_dobel",name:"Truk Dobel 6 Roda (Colt Diesel)",shortName:"Truk Dobel 6 Roda",sub:"Colt Diesel",capacity:"7.0 Ton",icon:"fa-truck-moving"},{id:"trike",name:"Motor Roda Tiga Bak (Viar/Tosa)",shortName:"Motor Roda Tiga",sub:"Viar / Tosa Bak",capacity:"500 Kg",icon:"fa-motorcycle"},{id:"external",name:"Ekspedisi / Armada Luar / Sewa",shortName:"Ekspedisi Luar",sub:"Sewa / Cargo Luar",capacity:"Variatif",icon:"fa-dolly"},{id:"self_pickup",name:"Diambil Mandor Sendiri di Toko",shortName:"Ambil di Toko",sub:"Mandor Ambil Sendiri",capacity:"Mandiri",icon:"fa-person-walking-luggage"}],Ta={pending_dispatch:{label:"Menunggu Muat",badgeClass:"bg-amber-100 text-amber-800 border-amber-300 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800",icon:"fa-boxes-packing"},out_for_delivery:{label:"Dalam Perjalanan",badgeClass:"bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800",icon:"fa-truck-fast"},delivered:{label:"Terkirim & Diterima",badgeClass:"bg-emerald-100 text-emerald-800 border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800",icon:"fa-circle-check"},returned:{label:"Gagal / Kembali",badgeClass:"bg-rose-100 text-rose-800 border-rose-300 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-800",icon:"fa-triangle-exclamation"}},$a=(t="")=>{const e=new Date,a=String(e.getFullYear()).slice(-2),r=String(e.getMonth()+1).padStart(2,"0"),s=t?String(t).replace(/[^a-zA-Z0-9]/g,"").slice(-5).toUpperCase():Math.random().toString(36).substring(2,7).toUpperCase();return`DO-${a}${r}-${s}`},we=t=>{if(!t)return null;const e=t.delivery||{},a=e.recipientName||t.isDropPoint&&t.dropPoint?.name||t.customer?.name||"",r=e.recipientPhone||t.isDropPoint&&t.dropPoint?.wa||t.customer?.wa||"",s=e.destinationAddress||t.isDropPoint&&t.dropPoint?.address||t.customer?.address||"",o=e.destinationLat||t.isDropPoint&&t.dropPoint?.lat||t.customer?.lat||null,l=e.destinationLng||t.isDropPoint&&t.dropPoint?.lng||t.customer?.lng||null,n=e.unloadNotes||t.customer?.note||"",c=Array.isArray(t.items)?t.items:Array.isArray(t.cart)?t.cart:[],p=Array.isArray(e.checklist)&&e.checklist.length>0?e.checklist:c.map((d,b)=>({id:d.id||`item-${b}`,name:d.name||"Barang",variantName:d.variantName||"",qty:parseFloat(d.qty)||1,unit:d.unit||"pcs",loaded:!0}));return{doNumber:e.doNumber||$a(t.orderId),orderId:t.orderId,status:e.status||"pending_dispatch",createdAt:e.createdAt||Date.now(),fleetType:e.fleetType||"pickup",fleetName:e.fleetName||"Mobil Pick-up (L300 / Gran Max)",plateNumber:e.plateNumber||"",driverName:e.driverName||"",driverPhone:e.driverPhone||"",helperName:e.helperName||"",recipientName:a,recipientPhone:r,destinationAddress:s,destinationLat:o,destinationLng:l,unloadNotes:n,dispatchedAt:e.dispatchedAt||null,deliveredAt:e.deliveredAt||null,signature:e.signature||null,checklist:p,logs:e.logs||[{status:"pending_dispatch",timestamp:e.createdAt||Date.now(),note:"Surat Jalan (DO) diterbitkan"}]}},Xe=t=>{const e=(B||[]).find(u=>String(u.orderId)===String(t));if(!e){x("Data pesanan tidak ditemukan!");return}const a=we(e),r=k("modal-delivery-order"),s=k("modal-delivery-order-box"),o=k("modal-delivery-order-content");if(!r||!s||!o)return;window._activeDeliveryOrderId=t,window._currentDeliveryData=a;const l=Zt(a.doNumber,{height:38,showText:!0,fontSize:9.5,className:"w-full max-w-[240px] h-auto"}),n=a.status==="pending_dispatch",c=a.status==="out_for_delivery",p=a.status==="delivered",d=a.checklist.filter(u=>u.loaded).length;let b="";n?b='<span class="px-2.5 py-1 rounded-full text-[10.5px] font-black uppercase tracking-wider bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200/80 dark:border-amber-800 flex items-center gap-1.5"><i class="fa-solid fa-boxes-packing"></i> Menunggu Muat</span>':c?b='<span class="px-2.5 py-1 rounded-full text-[10.5px] font-black uppercase tracking-wider bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200/80 dark:border-blue-800 flex items-center gap-1.5"><i class="fa-solid fa-truck-fast"></i> Dalam Perjalanan</span>':p?b='<span class="px-2.5 py-1 rounded-full text-[10.5px] font-black uppercase tracking-wider bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-800 flex items-center gap-1.5"><i class="fa-solid fa-circle-check"></i> Selesai / Terkirim</span>':b='<span class="px-2.5 py-1 rounded-full text-[10.5px] font-black uppercase tracking-wider bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300 border border-rose-200/80 dark:border-rose-800 flex items-center gap-1.5"><i class="fa-solid fa-triangle-exclamation"></i> Gagal / Kembali</span>',o.innerHTML=`
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
                                <span class="font-mono font-black text-sm sm:text-base text-slate-900 dark:text-white">#${m(a.doNumber)}</span>
                                ${b}
                            </div>
                            <p class="text-xs text-slate-500 dark:text-slate-400 font-medium truncate mt-0.5">
                                Order: <b class="font-mono text-slate-700 dark:text-slate-300">#${m(e.orderId)}</b> &middot; Pemesan: <b class="text-slate-800 dark:text-slate-200">${m(e.customer?.name||"Umum")}</b>
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
                    onclick="setDeliveryStatusQuick('${m(t)}', 'pending_dispatch')" 
                    class="flex-1 py-2.5 px-2 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 ${n?"shadow-sm text-white":"text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"}"
                    style="${n?"background: var(--color-primary); color: #fff; box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.35);":""}"
                >
                    <i class="fa-solid fa-boxes-packing text-xs"></i>
                    <span>1. Muat Barang</span>
                </button>
                <button 
                    type="button" 
                    onclick="setDeliveryStatusQuick('${m(t)}', 'out_for_delivery')" 
                    class="flex-1 py-2.5 px-2 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 ${c?"shadow-sm text-white":"text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"}"
                    style="${c?"background: var(--color-primary); color: #fff; box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.35);":""}"
                >
                    <i class="fa-solid fa-truck-fast text-xs"></i>
                    <span>2. Kirim Truk</span>
                </button>
                <button 
                    type="button" 
                    onclick="openDeliverySignatureModal('${m(t)}')" 
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
                <input type="hidden" id="do-fleet-type" value="${m(a.fleetType)}">

                <!-- Interactive Visual Fleet Grid (Pengganti Dropdown Kaku) -->
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2">Pilih Jenis Kendaraan / Armada:</label>
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-2" id="do-fleet-grid">
                        ${We.map(u=>{const f=a.fleetType===u.id,v=u.shortName||u.name.split("(")[0].trim(),h=u.sub||(u.name.includes("(")?u.name.split("(")[1].replace(")",""):u.capacity);return`
                            <div 
                                id="fleet-card-${u.id}"
                                onclick="selectFleetCard('${u.id}')"
                                class="fleet-choice-card p-2.5 sm:p-3 rounded-2xl border transition-all cursor-pointer select-none active:scale-95 flex flex-col justify-between min-h-[78px] ${f?"is-selected shadow-2xs":"border-slate-200/80 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 hover:bg-slate-100/60"}"
                                style="${f?"background: rgba(var(--color-primary-rgb), 0.08); border-color: var(--color-primary); box-shadow: 0 0 0 1px var(--color-primary);":""}"
                            >
                                <div class="flex items-center justify-between gap-1.5">
                                    <div id="fleet-icon-${u.id}" class="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all ${f?"text-white shadow-2xs":"border border-slate-200/80 dark:border-slate-700"}"
                                         style="${f?"background: var(--color-primary);":"background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary);"}">
                                        <i class="fa-solid ${u.icon} text-xs"></i>
                                    </div>
                                    <div class="flex items-center gap-1">
                                        <span id="fleet-badge-${u.id}" class="text-[9.5px] font-black px-1.5 py-0.5 rounded-md font-mono ${f?"text-white":"bg-slate-200/80 dark:bg-slate-700 text-slate-600 dark:text-slate-300"}"
                                              style="${f?"background: var(--color-primary);":""}">
                                            ${u.capacity}
                                        </span>
                                        <i id="fleet-chk-${u.id}" class="fa-solid fa-circle-check text-xs ${f?"":"hidden"}" style="color: var(--color-primary);"></i>
                                    </div>
                                </div>
                                <div class="mt-2 min-w-0">
                                    <p class="text-xs font-black text-slate-800 dark:text-white leading-tight truncate">${v}</p>
                                    <p class="text-[9.5px] font-bold text-slate-400 dark:text-slate-500 truncate mt-0.5">${h}</p>
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
                        <input type="text" id="do-plate-number" value="${m(a.plateNumber)}" placeholder="Cth: B 9234 KDA" class="w-full text-xs font-mono font-bold uppercase rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 px-3 py-2.5 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15">
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-1.5">
                            <i class="fa-solid fa-user-tie text-slate-400"></i> Nama Sopir / Pengemudi
                        </label>
                        <input type="text" id="do-driver-name" value="${m(a.driverName)}" placeholder="Cth: Pak Joko" class="w-full text-xs font-bold rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 px-3 py-2.5 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15">
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-1.5">
                            <i class="fa-brands fa-whatsapp text-emerald-500"></i> No. WhatsApp Sopir
                        </label>
                        <input type="tel" id="do-driver-phone" value="${m(a.driverPhone)}" placeholder="Cth: 08123456789" class="w-full text-xs font-mono font-bold rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 px-3 py-2.5 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15">
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-1.5">
                            <i class="fa-solid fa-user-group text-slate-400"></i> Helper / Kondektur Muatan
                        </label>
                        <input type="text" id="do-helper-name" value="${m(a.helperName)}" placeholder="Cth: Budi (Kondektur)" class="w-full text-xs font-bold rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 px-3 py-2.5 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15">
                    </div>
                </div>

                <!-- Tombol WA Cepat ke Sopir -->
                ${a.driverPhone?`
                <button type="button" onclick="sendDeliveryWhatsAppToDriver('${m(t)}')" class="btn-native-action w-full h-10 rounded-xl border border-emerald-200 dark:border-emerald-800/80 bg-emerald-50/80 dark:bg-emerald-950/40 hover:bg-emerald-100 text-emerald-700 dark:text-emerald-300 text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95 shadow-2xs">
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
                        <input type="text" id="do-recipient-name" value="${m(a.recipientName)}" placeholder="Nama penerima di proyek" class="w-full text-xs font-bold rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 px-3 py-2.5 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15">
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-1.5">
                            <i class="fa-brands fa-whatsapp text-emerald-500"></i> No. WhatsApp Mandor
                        </label>
                        <input type="tel" id="do-recipient-phone" value="${m(a.recipientPhone)}" placeholder="No WA mandor" class="w-full text-xs font-mono font-bold rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 px-3 py-2.5 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15">
                    </div>
                </div>

                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-1.5">
                        <i class="fa-solid fa-location-dot text-rose-500"></i> Alamat Lengkap Proyek / Drop Point
                    </label>
                    <textarea id="do-destination-address" rows="2" placeholder="Alamat pengiriman / patokan proyek..." class="w-full text-xs font-medium rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 p-3 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15">${m(a.destinationAddress)}</textarea>
                </div>

                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-1.5">
                        <i class="fa-solid fa-triangle-exclamation text-amber-500"></i> Catatan Akses Jalan &amp; Instruksi Bongkar
                    </label>
                    <input type="text" id="do-unload-notes" value="${m(a.unloadNotes)}" placeholder="Cth: Gang sempit, bongkar di samping gudang mandor" class="w-full text-xs font-medium rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 px-3 py-2.5 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15">
                </div>

                ${a.destinationLat&&a.destinationLng?`
                <div class="pt-1">
                    <a href="https://www.google.com/maps?q=${m(a.destinationLat)},${m(a.destinationLng)}" target="_blank" rel="noopener noreferrer" class="btn-native-action w-full h-10 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300 border border-blue-200 dark:border-blue-800 text-xs font-bold flex items-center justify-center gap-2 shadow-2xs">
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
                            <span id="do-loaded-count">${d}</span>/${a.checklist.length} Siap
                        </span>
                        <button type="button" onclick="toggleAllChecklistItems()" class="text-[11px] font-bold text-slate-500 hover:text-[var(--color-primary)] px-2.5 py-1 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 active:scale-95 transition-all cursor-pointer">
                            Pilih Semua
                        </button>
                    </div>
                </div>

                <div class="space-y-2" id="do-checklist-tiles">
                    ${a.checklist.map((u,f)=>`
                    <div 
                        id="do-chk-row-${f}"
                        onclick="toggleItemLoaded(${f})"
                        class="do-item-tile p-3 sm:p-3.5 rounded-2xl border transition-all cursor-pointer select-none active:scale-[0.99] flex items-center justify-between gap-3 ${u.loaded?"border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800/80 shadow-2xs":"border-slate-200/60 dark:border-slate-800/60 bg-slate-50/70 dark:bg-slate-900/40 opacity-70"}"
                    >
                        <!-- Squircle Checkbox Touch Target -->
                        <div class="flex items-center gap-3 min-w-0 flex-1">
                            <div 
                                id="do-chk-box-${f}"
                                class="w-7 h-7 rounded-xl flex items-center justify-center shrink-0 border transition-all ${u.loaded?"border-transparent text-white shadow-2xs":"border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-transparent"}"
                                style="${u.loaded?"background: var(--color-primary);":""}"
                            >
                                <i class="fa-solid fa-check text-xs"></i>
                            </div>
                            <div class="min-w-0">
                                <h5 class="text-xs sm:text-sm font-black text-slate-800 dark:text-white leading-snug">
                                    ${m(u.name)}
                                </h5>
                                <div class="flex items-center gap-2 mt-1 flex-wrap">
                                    ${u.variantName?`<span class="px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-600">${m(u.variantName)}</span>`:""}
                                    <span class="text-[10px] font-semibold ${u.loaded?"text-emerald-600 dark:text-emerald-400":"text-slate-400"}" id="do-chk-status-${f}">
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
                                <span class="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 font-sans">${m(u.unit||"pcs")}</span>
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
                        <p>Penerima: <b class="text-slate-900 dark:text-white">${m(a.signature.signerName||a.recipientName)}</b></p>
                        <p>Waktu Terima: <b class="font-mono">${a.signature.timestamp?new Date(a.signature.timestamp).toLocaleString("id-ID"):"-"}</b></p>
                        ${a.signature.notes?`<p class="italic text-slate-500">" ${m(a.signature.notes)} "</p>`:""}
                    </div>
                </div>
            </div>`:""}
        </div>
    `,r.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("deliveryOrder"),ne(r,s)},Pa=(t=!1)=>{const e=k("modal-delivery-order"),a=k("modal-delivery-order-box"),r=()=>{Z(e,a),window._activeDeliveryOrderId=null,window._currentDeliveryData=null};typeof window.requestCloseModal=="function"?window.requestCloseModal("deliveryOrder",t,r):r()},Ht=t=>{const e=We.find(r=>r.id===t);if(!e)return;window._currentDeliveryData&&(window._currentDeliveryData.fleetType=e.id,window._currentDeliveryData.fleetName=e.name);const a=k("do-fleet-type");a&&(a.value=e.id),We.forEach(r=>{const s=k(`fleet-card-${r.id}`),o=k(`fleet-badge-${r.id}`),l=k(`fleet-icon-${r.id}`),n=k(`fleet-chk-${r.id}`);if(!s)return;r.id===t?(s.classList.add("is-selected","shadow-2xs"),s.classList.remove("border-slate-200/80","dark:border-slate-800","bg-slate-50/60","dark:bg-slate-800/40"),s.style.background="rgba(var(--color-primary-rgb), 0.08)",s.style.borderColor="var(--color-primary)",s.style.boxShadow="0 0 0 1px var(--color-primary)",o&&(o.style.background="var(--color-primary)",o.className="text-[9.5px] font-black px-1.5 py-0.5 rounded-md font-mono text-white"),l&&(l.style.background="var(--color-primary)",l.className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all text-white shadow-2xs"),n&&n.classList.remove("hidden")):(s.classList.remove("is-selected","shadow-2xs"),s.classList.add("border-slate-200/80","dark:border-slate-800","bg-slate-50/60","dark:bg-slate-800/40"),s.style.background="",s.style.borderColor="",s.style.boxShadow="",o&&(o.style.background="",o.className="text-[9.5px] font-black px-1.5 py-0.5 rounded-md font-mono bg-slate-200/80 dark:bg-slate-700 text-slate-600 dark:text-slate-300"),l&&(l.style.background="rgba(var(--color-primary-rgb), 0.1)",l.style.color="var(--color-primary)",l.className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all border border-slate-200/80 dark:border-slate-700"),n&&n.classList.add("hidden"))}),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light")},Aa=t=>{Ht(t)},Gt=(t,e)=>{if(!window._currentDeliveryData||!window._currentDeliveryData.checklist||!window._currentDeliveryData.checklist[t])return;const a=window._currentDeliveryData.checklist[t];typeof e=="boolean"?a.loaded=e:a.loaded=!a.loaded;const r=k(`do-chk-row-${t}`),s=k(`do-chk-box-${t}`),o=k(`do-chk-status-${t}`),l=k("do-loaded-count");if(a.loaded?(r&&(r.className="do-item-tile p-3 sm:p-3.5 rounded-2xl border transition-all cursor-pointer select-none active:scale-[0.99] flex items-center justify-between gap-3 border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800/80 shadow-2xs"),s&&(s.className="w-7 h-7 rounded-xl flex items-center justify-center shrink-0 border transition-all border-transparent text-white shadow-2xs",s.style.background="var(--color-primary)"),o&&(o.className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400",o.innerHTML='<i class="fa-solid fa-circle-check text-[9px] mr-1"></i> Siap Muat di Armada')):(r&&(r.className="do-item-tile p-3 sm:p-3.5 rounded-2xl border transition-all cursor-pointer select-none active:scale-[0.99] flex items-center justify-between gap-3 border-slate-200/60 dark:border-slate-800/60 bg-slate-50/70 dark:bg-slate-900/40 opacity-70"),s&&(s.className="w-7 h-7 rounded-xl flex items-center justify-center shrink-0 border transition-all border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-transparent",s.style.background=""),o&&(o.className="text-[10px] font-semibold text-slate-400",o.innerHTML='<i class="fa-solid fa-circle-dot text-[9px] mr-1"></i> Belum Dimuat')),l){const n=window._currentDeliveryData.checklist.filter(c=>c.loaded).length;l.textContent=n}typeof window.triggerHaptic=="function"&&window.triggerHaptic("light")},Ia=(t=null)=>{if(!window._currentDeliveryData||!Array.isArray(window._currentDeliveryData.checklist))return;const e=window._currentDeliveryData.checklist,a=e.every(s=>s.loaded),r=t!==null?t:!a;e.forEach((s,o)=>{Gt(o,r)}),typeof window.triggerHaptic=="function"&&window.triggerHaptic("medium")},Ma=async(t=window._activeDeliveryOrderId)=>{t||(t=window._activeDeliveryOrderId);const e=(B||[]).find(l=>String(l.orderId)===String(t));if(!e)return;const a=window._currentDeliveryData||we(e),r=k("do-fleet-type"),s=r?r.value:a.fleetType,o=We.find(l=>l.id===s)||{};a.fleetType=s,a.fleetName=o.name||a.fleetName,a.plateNumber=(k("do-plate-number")?.value||"").trim(),a.driverName=(k("do-driver-name")?.value||"").trim(),a.driverPhone=(k("do-driver-phone")?.value||"").trim(),a.helperName=(k("do-helper-name")?.value||"").trim(),a.recipientName=(k("do-recipient-name")?.value||"").trim(),a.recipientPhone=(k("do-recipient-phone")?.value||"").trim(),a.destinationAddress=(k("do-destination-address")?.value||"").trim(),a.unloadNotes=(k("do-unload-notes")?.value||"").trim(),L("Menyimpan Data Surat Jalan...");try{await P.collection("freshmart_orders").doc(t).update({delivery:a}),e.delivery=a,x("Data Surat Jalan & Armada berhasil disimpan!"),Xe(t),typeof window.openOrderDetail=="function"&&window.cVOrd===t&&window.openOrderDetail(t)}catch(l){console.error("[Delivery] Gagal menyimpan delivery:",l),x("Gagal menyimpan: "+(l.message||""))}finally{D()}},Da=async(t,e)=>{const a=(B||[]).find(l=>String(l.orderId)===String(t));if(!a)return;const r=we(a);if(r.status===e)return;const s=Ta[e]?.label||e;if(await ue("Ubah Status Pengiriman",`Perbarui status pengiriman Surat Jalan #${r.doNumber} menjadi "${s}"?`,null,"Ya, Perbarui")){r.status=e,e==="out_for_delivery"?(r.dispatchedAt=Date.now(),r.logs.push({status:"out_for_delivery",timestamp:Date.now(),note:"Armada diberangkatkan ke proyek"})):e==="delivered"&&(r.deliveredAt=Date.now(),r.logs.push({status:"delivered",timestamp:Date.now(),note:"Material telah diterima di lokasi proyek"})),L("Memperbarui status logistik...");try{await P.collection("freshmart_orders").doc(t).update({delivery:r}),a.delivery=r,x(`Status pengiriman kini: ${s}`),Xe(t)}catch(l){x("Gagal mengubah status: "+l.message)}finally{D()}}};let U=null,X=null,ft=!1,St=!1;const Ca=t=>{const e=(B||[]).find(l=>String(l.orderId)===String(t));if(!e)return;const a=we(e),r=k("modal-delivery-signature"),s=k("modal-delivery-signature-box");if(!r||!s)return;window._signatureOrderId=t;const o=k("modal-delivery-signature-content");o&&(o.innerHTML=`
            <div class="space-y-4 text-slate-800 dark:text-slate-100">
                <div class="p-3.5 rounded-2xl border text-xs flex items-start gap-2.5" style="background: rgba(var(--color-primary-rgb), 0.08); border-color: rgba(var(--color-primary-rgb), 0.22); color: var(--color-primary-dark);">
                    <i class="fa-solid fa-circle-info text-base mt-0.5 shrink-0" style="color: var(--color-primary);"></i>
                    <div>
                        <p class="font-black text-slate-900 dark:text-white">Konfirmasi Serah Terima Material Proyek</p>
                        <p class="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5">Surat Jalan <b>#${m(a.doNumber)}</b>. Mohon mandor atau penerima menandatangani langsung pada area di bawah.</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-1.5">
                            <i class="fa-solid fa-user-check text-slate-400"></i> Nama Terang Mandor / Penerima
                        </label>
                        <input type="text" id="sig-signer-name" value="${m(a.recipientName||e.customer?.name||"")}" placeholder="Nama penerima di proyek" class="w-full text-xs font-bold rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 px-3.5 py-2.5 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15">
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
        `),r.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("deliverySignature"),ne(r,s),setTimeout(()=>{So()},150)},Vt=(t=!1)=>{const e=k("modal-delivery-signature"),a=k("modal-delivery-signature-box"),r=()=>{Z(e,a),window._signatureOrderId=null,U=null,X=null};typeof window.requestCloseModal=="function"?window.requestCloseModal("deliverySignature",t,r):r()},So=()=>{if(U=k("signature-pad-canvas"),!U)return;X=U.getContext("2d"),St=!1;const t=U.getBoundingClientRect(),e=window.devicePixelRatio||1;U.width=t.width*e,U.height=t.height*e,X.scale(e,e),X.strokeStyle="#0f172a",X.lineWidth=2.5,X.lineCap="round",X.lineJoin="round";const a=l=>{const n=U.getBoundingClientRect();return l.touches&&l.touches[0]?{x:l.touches[0].clientX-n.left,y:l.touches[0].clientY-n.top}:{x:l.clientX-n.left,y:l.clientY-n.top}},r=l=>{l.preventDefault(),ft=!0,St=!0;const n=k("sig-placeholder-hint");n&&n.classList.add("hidden");const c=a(l);X.beginPath(),X.moveTo(c.x,c.y)},s=l=>{if(!ft)return;l.preventDefault();const n=a(l);X.lineTo(n.x,n.y),X.stroke()},o=l=>{ft&&(l.preventDefault(),X.closePath(),ft=!1)};U.onmousedown=r,U.onmousemove=s,U.onmouseup=o,U.onmouseleave=o,U.ontouchstart=r,U.ontouchmove=s,U.ontouchend=o,U.ontouchcancel=o},Ba=()=>{if(!U||!X)return;const t=window.devicePixelRatio||1;X.clearRect(0,0,U.width/t,U.height/t),St=!1;const e=k("sig-placeholder-hint");e&&e.classList.remove("hidden")},La=async()=>{const t=window._signatureOrderId;if(!t)return;const e=(B||[]).find(l=>String(l.orderId)===String(t));if(!e)return;if(!St||!U){x("Harap goreskan tanda tangan mandor terlebih dahulu!");return}const a=(k("sig-signer-name")?.value||"").trim()||e.customer?.name||"Mandor Pelaksana",r=(k("sig-notes")?.value||"").trim(),s=U.toDataURL("image/png"),o=we(e);o.status="delivered",o.deliveredAt=Date.now(),o.recipientName=a,o.signature={signerName:a,signatureDataUrl:s,timestamp:Date.now(),notes:r},o.logs.push({status:"delivered",timestamp:Date.now(),note:`Serah terima diverifikasi & ditandatangani oleh ${a}`}),L("Menyimpan bukti serah terima...");try{await P.collection("freshmart_orders").doc(t).update({delivery:o,status:"Selesai"}),e.delivery=o,e.status="Selesai",x("Serah terima berhasil diverifikasi & pesanan ditandai Selesai!"),Vt(),Xe(t),typeof window.openOrderDetail=="function"&&window.openOrderDetail(t)}catch(l){console.error("[Delivery] Gagal simpan tanda tangan:",l),x("Gagal menyimpan: "+l.message)}finally{D()}},Na=t=>{const e=(B||[]).find(p=>String(p.orderId)===String(t));if(!e)return;const a=we(e),r=a.recipientPhone||e.customer?.wa||"";if(!r){x("Nomor WhatsApp mandor/pemesan tidak tersedia!");return}const s=i.store?.name||"TOKO PUTRI",o=a.checklist.map(p=>`• ${p.qty} ${p.unit} - *${p.name}*${p.variantName?` (${p.variantName})`:""}`).join(`
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

Mohon siapkan area bongkar muat. Terima kasih telah berbelanja di *${s}*! 🙏`;const c=`https://wa.me/${String(r).replace(/\D/g,"").replace(/^0/,"62")}?text=${encodeURIComponent(l)}`;window.open(c,"_blank","noopener,noreferrer")},Ra=t=>{const e=(B||[]).find(p=>String(p.orderId)===String(t));if(!e)return;const a=we(e),r=a.driverPhone||"";if(!r){x("Nomor WhatsApp sopir belum diisi!");return}const s=i.store?.name||"TOKO PUTRI",o=a.checklist.map(p=>`• ${p.qty} ${p.unit} - ${p.name}${p.variantName?` (${p.variantName})`:""}`).join(`
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

Hati-hati di jalan dan utamakan keselamatan kerja! 🚛`;const c=`https://wa.me/${String(r).replace(/\D/g,"").replace(/^0/,"62")}?text=${encodeURIComponent(l)}`;window.open(c,"_blank","noopener,noreferrer")},ja=t=>{typeof window.openDocPreview=="function"?window.openDocPreview("surat_jalan",t):x("Modul cetak dokumen tidak tersedia!")};typeof window<"u"&&(window.openDeliveryModal=Xe,window.closeDeliveryModal=Pa,window.setDeliveryStatusQuick=Da,window.saveDeliveryDetails=Ma,window.onFleetTypeChange=Aa,window.selectFleetCard=Ht,window.toggleItemLoaded=Gt,window.toggleAllChecklistItems=Ia,window.openDeliverySignatureModal=Ca,window.closeDeliverySignatureModal=Vt,window.clearSignatureCanvas=Ba,window.saveDeliverySignature=La,window.sendDeliveryWhatsAppToMandor=Na,window.sendDeliveryWhatsAppToDriver=Ra,window.printOfficialDeliveryOrderA4=ja);const To=Object.freeze(Object.defineProperty({__proto__:null,DEFAULT_FLEETS:We,DELIVERY_STATUSES:Ta,clearSignatureCanvas:Ba,closeDeliveryModal:Pa,closeDeliverySignatureModal:Vt,generateDONumber:$a,getOrderDeliveryData:we,onFleetTypeChange:Aa,openDeliveryModal:Xe,openDeliverySignatureModal:Ca,printOfficialDeliveryOrderA4:ja,saveDeliveryDetails:Ma,saveDeliverySignature:La,selectFleetCard:Ht,sendDeliveryWhatsAppToDriver:Ra,sendDeliveryWhatsAppToMandor:Na,setDeliveryStatusQuick:Da,toggleAllChecklistItems:Ia,toggleItemLoaded:Gt},Symbol.toStringTag,{value:"Module"})),Bo=Object.freeze(Object.defineProperty({__proto__:null,DEFAULT_FLEETS:We,DELIVERY_STATUSES:Ta,EXPENSE_CATEGORIES:Xr,MONTH_NAMES:me,aF:At,get aSq(){return Ee},ackRewardClaim:ds,adjustBarcodeLabelQty:mr,applyStaffMenuPermissions:ts,applyTaxPresetRI:Ms,approveTempoPaymentConfirmation:Ws,attachAdminSessionGuard:it,backupData:$s,get cTab(){return pt},changeTaxMonth:Ns,changeTaxYear:Ls,checkAdminAccess:la,claimAdminSession:ye,clearSignatureCanvas:Ba,closeDeliveryModal:Pa,closeDeliverySignatureModal:Vt,closeHeroBannerModal:ba,closeOrderDetailModal:ca,closeProductBarcodeLabelModal:nr,closeSessionKickedModal:ra,closeTempoConfirmationsModal:Et,closeTempoDetailModal:Ks,closeTempoPaymentModal:Hs,closeTempoPenaltyModal:Vs,computeInventoryStats:Pt,confirmLogoutAdmin:ss,deductOrderStockAndRewards:cs,deleteOrder:us,deleteReview:tr,detachAdminSessionGuard:nt,detectAdminGPS:Ts,get eId(){return se},ensureProductBarcodeLabelModal:lr,ensureTempoModals:ze,exportOrdersToExcel:rs,exportTempoCSV:Ys,fetchTaxPeriodData:Ct,filterReviews:Xs,get gTaxMonthly(){return oe},generateDONumber:$a,getDeviceLabel:es,getEffHpp:Ds,getOrderDeliveryData:we,getTaxPeriodExpenses:Bt,getTaxPeriodTotals:qe,getTempoOrderCalculations:te,handleManualCoordChange:ws,handleSmartMapsInput:Dt,isCurrentSessionActive:oa,isLoggingIn:aa,get isSaving(){return Ce},konfirmasiKeWA:ms,konfirmasiKeWAPenerima:bs,loadAdminReport:ia,logoutAdmin:na,onFleetTypeChange:Aa,openAdminMenu:Ve,openAdminTab:kr,openDeliveryModal:Xe,openDeliverySignatureModal:Ca,openHeroBannerModal:As,openOrderDetail:Mt,openProductBarcodeLabelModal:ir,openSettingForm:gs,openTaxDocPreview:Fs,openTempoConfirmationsModal:qs,openTempoDetailModal:_s,openTempoPaymentModal:Us,openTempoPenaltyModal:Gs,pasteFromClipboardToMapsInput:ys,playNewOrderSound:os,previewStoreOnMaps:Ss,printBarcodeLabelsBrowser:xr,printBarcodeLabelsThermalRawbt:fr,printOfficialDeliveryOrderA4:ja,printTempoRecapA4:Qs,processAdminLogin:as,rAdmOrd:is,rAdmPiutang:Ft,rAdmReviews:wa,rAdmSet:ma,rTaxBalance:Rt,rTaxIncome:Nt,rTaxPanel:Cs,rTaxRenderShell:Lt,rTaxSettingsPanel:xa,rTaxSubContent:dt,rTaxSummary:ua,rejectTempoPaymentConfirmation:zs,renderBarcodeLabelModalContent:De,renderOrdersList:da,replyToReview:Zs,restoreData:Ps,restoreOrderStockAndRewards:pa,saveAdminSettings:vs,saveBalanceField:js,saveDeliveryDetails:Ma,saveDeliverySignature:La,saveHeroBannerModal:Is,saveMonthlyExpense:Rs,saveOrderCustomerToDB:ns,saveTaxSettingsPanel:Os,selectBarcodePreviewIndex:pr,selectBgStyle:fs,selectFleetCard:Ht,selectPresetTheme:xs,sendDeliveryWhatsAppToDriver:Ra,sendDeliveryWhatsAppToMandor:Na,setASq:gr,setAllBarcodeLabelQty:ur,setBarcodeLabelPaper:dr,setBarcodeLabelQtyDirect:br,setCTab:mt,setDeliveryStatusQuick:Da,setEId:Sa,setIsSaving:G,setLoggingIn:vt,setOrderSourceFilter:ls,setTMultiUnits:bt,setTSpec:Ut,setTSubCats:Ye,setTVars:Qe,setTWhol:Kt,showSessionKickedModal:sa,switchPaymentSubtab:ks,switchTaxTab:Bs,syncAppMeta:Jr,get tMultiUnits(){return Y},get tSpec(){return le},get tSubCats(){return ie},get tVars(){return F},get tWhol(){return ve},get taxActiveTab(){return pe},get taxMonth(){return H},get taxYear(){return q},toggleAllChecklistItems:Ia,toggleBarcodeOption:cr,toggleCustomTaxRateInput:Es,toggleItemLoaded:Gt,toggleReviewVisibility:er,toggleTaxMenuVisibility:It,updateAdminPaylaterSim:hs,updateOrderStatus:ps},Symbol.toStringTag,{value:"Module"}));let Ue=!1,Ke=null;const Ea=()=>{const t=new Date,e=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${e}-${a}-${r}`},$o=t=>{if(!t)return"";try{const e=t.split("-");return e.length===3?new Date(parseInt(e[0]),parseInt(e[1])-1,parseInt(e[2])).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):t}catch{return t}},Be=()=>{const t=k("admin-content");if(!t)return;const e=i.changelog||[],a=ta(i),r=Yr(i),s=(i.deletedChangelogIds||[]).length;let o="";a.length===0?o=`
        <div class="text-center py-12 text-slate-400">
            <i class="fa-solid fa-clipboard-list text-3xl mb-2 opacity-50"></i>
            <p class="text-xs font-bold">Belum ada catatan pembaruan</p>
        </div>`:o=a.map(l=>{const n=e.some(u=>u.id===l.id),c=l.version===r,p=(l.items||[]).map(u=>`
                <li class="flex items-start gap-2 text-xs font-medium text-slate-600 dark:text-slate-300">
                    <i class="fa-solid fa-circle-check text-[var(--color-primary)] text-[10px] mt-1 shrink-0"></i>
                    <span>${m(u)}</span>
                </li>
            `).join("");let d="Update",b="fa-tag";return l.category==="feature"?(d="Fitur Baru",b="fa-rocket"):l.category==="optimization"?(d="Optimasi",b="fa-bolt-lightning"):l.category==="maintenance"?(d="Maintenance",b="fa-wrench"):l.category==="bugfix"&&(d="Perbaikan",b="fa-bug-slash"),`
            <div class="p-4 sm:p-5 rounded-2xl border ${c?"border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.02)] dark:bg-[rgba(var(--color-primary-rgb),0.05)] shadow-sm":"border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"} space-y-3">
                <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                    <div class="flex items-center gap-2 flex-wrap">
                        <span class="px-2.5 py-1 rounded-lg text-xs font-black tracking-wider uppercase ${c?"bg-[var(--color-primary)] text-white shadow-xs":"bg-slate-800 text-white dark:bg-slate-700"}">
                            ${m(l.version)}
                        </span>
                        <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md border border-slate-200/80 dark:border-slate-700/80 bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-700 dark:text-slate-300">
                            <i class="fa-solid ${b} text-[9px] text-[var(--color-primary)]"></i> ${m(d)}
                        </span>
                        ${c?'<span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.25)] text-[9px] font-extrabold uppercase"><span class="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] animate-pulse"></span> Versi Aktif</span>':""}
                        ${n?'<span class="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.2)] text-[9px] font-bold">Kustom Toko</span>':'<span class="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 text-[9px] font-bold">Sistem Bawaan</span>'}
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500">
                            <i class="fa-regular fa-calendar mr-1"></i> ${m($o(l.date))}
                        </span>
                        ${n?`
                        <button onclick="window.editChangelogEntry('${m(l.id)}')" class="w-8 h-8 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center text-xs transition-all cursor-pointer active:scale-95 shadow-2xs" title="Edit Catatan">
                            <i class="fa-solid fa-pen"></i>
                        </button>
                        <button onclick="window.deleteChangelogEntry('${m(l.id)}')" class="w-8 h-8 rounded-xl bg-rose-50 hover:bg-rose-100 dark:bg-rose-900/30 text-rose-500 flex items-center justify-center text-xs transition-all cursor-pointer active:scale-95 shadow-2xs" title="Hapus Catatan">
                            <i class="fa-solid fa-trash"></i>
                        </button>`:`
                        <button onclick="window.deleteChangelogEntry('${m(l.id||l.version)}')" class="w-8 h-8 rounded-xl bg-slate-100 hover:bg-rose-50 dark:bg-slate-800 dark:hover:bg-rose-900/30 text-slate-400 hover:text-rose-500 flex items-center justify-center text-xs transition-all cursor-pointer active:scale-95 shadow-2xs" title="Hapus Log Ini dari Sistem">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>`}
                    </div>
                </div>

                <div>
                    <h4 class="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                        ${m(l.title)}
                    </h4>
                </div>

                <ul class="space-y-1.5 pt-1">
                    ${p}
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
                            ${m(r)}
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
        <div id="changelog-form-box" class="${Ue?"block":"hidden"} p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-[var(--color-primary)]/40 shadow-lg space-y-4">
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
                    <input id="form-log-date" type="date" value="${Ea()}" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-bold text-slate-800 dark:text-white focus:border-[var(--color-primary)] focus:outline-none" />
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
    </div>`},hr=(t=null)=>{Ue=t!==null?t:!Ue,Ue||(Ke=null),Be()},vr=t=>{const e=(i.changelog||[]).find(s=>s.id===t);if(!e)return;Ke=t,Ue=!0,Be(),ge("form-log-version",e.version||""),ge("form-log-category",e.category||"feature"),ge("form-log-date",e.date||Ea()),ge("form-log-title",e.title||""),ge("form-log-items",(e.items||[]).join(`
`));const a=k("changelog-form-title");a&&(a.innerHTML=`<i class="fa-solid fa-pen text-[var(--color-primary)]"></i> Edit Catatan Pembaruan (${m(e.version)})`);const r=k("changelog-form-box");r&&r.scrollIntoView({behavior:"smooth"})},wr=async()=>{const t=($("form-log-version")||"").trim(),e=$("form-log-category")||"feature",a=$("form-log-date")||Ea(),r=($("form-log-title")||"").trim(),s=($("form-log-items")||"").trim();if(!t)return x("Nomor versi harus diisi (contoh: v1.2.1)!");if(!r)return x("Judul pembaruan harus diisi!");if(!s)return x("Tuliskan minimal 1 poin rincian perubahan!");const o=s.split(`
`).map(n=>n.replace(/^[-*•]\s*/,"").trim()).filter(n=>n.length>0);if(o.length===0)return x("Rincian perubahan tidak boleh kosong!");L("Menyimpan catatan pembaruan...");const l={id:Ke||"log-"+Date.now().toString(36),version:t.startsWith("v")?t:"v"+t,category:e,date:a,title:r,items:o,updatedAt:new Date().toISOString()};if(i.changelog=i.changelog||[],Ke){const n=i.changelog.findIndex(c=>c.id===Ke);n!==-1?i.changelog[n]=l:i.changelog.unshift(l)}else i.changelog.unshift(l);i.deletedChangelogIds&&Array.isArray(i.deletedChangelogIds)&&(i.deletedChangelogIds=i.deletedChangelogIds.filter(n=>n!==l.id&&n!==l.version));try{await O(["changelog","deletedChangelogIds"]),x("Catatan pembaruan berhasil dipublikasikan secara real-time!","success"),Ue=!1,Ke=null,Be()}catch(n){x("Gagal menyimpan log pembaruan: "+n.message,"error")}finally{D()}},yr=t=>{const a=ta(i).find(s=>s.id===t||s.version===t);if(!a)return;const r=a.version||a.title||"ini";ue("Hapus Catatan Log Toko",`Apakah Anda yakin ingin menghapus catatan pembaruan versi "${r}"? Catatan ini tidak akan ditampilkan lagi di etalase toko maupun panel admin.`,async()=>{L("Menghapus catatan...");try{i.changelog=(i.changelog||[]).filter(o=>o.id!==t&&o.version!==t),i.deletedChangelogIds=Array.isArray(i.deletedChangelogIds)?i.deletedChangelogIds:[];const s=a.id||t;i.deletedChangelogIds.includes(s)||i.deletedChangelogIds.push(s),a.version&&!i.deletedChangelogIds.includes(a.version)&&i.deletedChangelogIds.push(a.version),await O(["changelog","deletedChangelogIds"]),x(`Catatan pembaruan ${r} berhasil dihapus!`,"success"),Be()}catch(s){x("Gagal menghapus catatan: "+s.message,"error")}finally{D()}},"Konfirmasi Hapus Log")},Sr=()=>{const t=ta(i);if(t.length<=5)return x(`Daftar log masih ringkas (${t.length} versi), belum perlu pembersihan.`,"info");const e=t.slice(5),a=e.length;ue("Pangkas Log Terlama",`Apakah Anda yakin ingin memangkas ${a} catatan log pembaruan terlama dan hanya menyisakan 5 versi terbaru? Tindakan ini merapikan daftar log toko agar tidak menumpuk spam.`,async()=>{L("Memangkas catatan lama...");try{const r=new Set;e.forEach(s=>{s.id&&r.add(s.id),s.version&&r.add(s.version)}),i.changelog=(i.changelog||[]).filter(s=>!r.has(s.id)&&!r.has(s.version)),i.deletedChangelogIds=Array.isArray(i.deletedChangelogIds)?i.deletedChangelogIds:[],r.forEach(s=>{i.deletedChangelogIds.includes(s)||i.deletedChangelogIds.push(s)}),await O(["changelog","deletedChangelogIds"]),x(`Berhasil membersihkan ${a} log lama! Tersisa 5 versi terbaru.`,"success"),Be()}catch(r){x("Gagal memangkas log: "+r.message,"error")}finally{D()}},"Pangkas Log Lama")},Tr=()=>{if((i.deletedChangelogIds||[]).length===0)return x("Tidak ada log bawaan yang terhapus.","info");ue("Pulihkan Log Bawaan","Apakah Anda yakin ingin memulihkan kembali seluruh catatan log rilis sistem bawaan toko yang pernah dihapus?",async()=>{L("Memulihkan catatan log...");try{i.deletedChangelogIds=[],await O(["deletedChangelogIds"]),x("Seluruh log pembaruan bawaan berhasil dipulihkan!","success"),Be()}catch(e){x("Gagal memulihkan catatan: "+e.message,"error")}finally{D()}},"Ya, Pulihkan Semua")};window.rAdmChangelog=Be;window.toggleChangelogForm=hr;window.editChangelogEntry=vr;window.saveChangelogEntry=wr;window.deleteChangelogEntry=yr;window.pruneOldChangelogs=Sr;window.restoreDefaultChangelogs=Tr;const Lo=Object.freeze(Object.defineProperty({__proto__:null,deleteChangelogEntry:yr,editChangelogEntry:vr,pruneOldChangelogs:Sr,rAdmChangelog:Be,restoreDefaultChangelogs:Tr,saveChangelogEntry:wr,toggleChangelogForm:hr},Symbol.toStringTag,{value:"Module"}));export{Xr as E,me as M,oa as a,it as b,te as c,nt as d,Bo as e,Ct as f,Ds as g,Lo as h,aa as i,Fs as o,Rs as s};

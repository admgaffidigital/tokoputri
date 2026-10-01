const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/pos-variant-sheet-YZpmr26x.js","assets/module-print-CqyhGsqC.js","assets/vendor-firebase-core-D2OF5R23.js","assets/vendor-firebase-db-BIUZcnOd.js"])))=>i.map(i=>d[i]);
import{ah as Ie,$ as J,a as f,c as ua,y as na,v as k,e as c,l as j,i as b,aC as ke,x as os,z as yt,u as St,b as ns,ai as is,f as ls}from"./module-print-CqyhGsqC.js";import{f as qe}from"./vendor-firebase-core-D2OF5R23.js";const E={OWNER:"owner",ADMIN:"admin",CASHIER:"cashier"},ds=[{key:"orders",label:"Pesanan Online",desc:"Proses status pesanan, update resi pengiriman & konfirmasi bayar",group:"operasional",icon:"fa-receipt"},{key:"products",label:"Katalog Produk & Stok",desc:"Tambah/edit produk, atur varian, dan perbarui stok barang",group:"operasional",icon:"fa-box-open"},{key:"suppliers",label:"Supplier & Rekanan",desc:"Kelola master data supplier, kontak kulakan, dan asal produk",group:"operasional",icon:"fa-truck-field"},{key:"purchases",label:"Order Kulakan (PO)",desc:"Buat PO pembelian grosir, terima restock, & kelola hutang rekanan",group:"operasional",icon:"fa-cart-flatbed"},{key:"piutang",label:"Piutang Tempo & Cicilan",desc:"Kelola nota piutang pelanggan, denda keterlambatan, & cicilan",group:"operasional",icon:"fa-clock-rotate-left"},{key:"customers",label:"Database Pelanggan",desc:"Lihat daftar member, atur limit kredit PayLater, & mutasi poin",group:"operasional",icon:"fa-address-book"},{key:"pos",label:"Kasir POS",desc:"Akses antarmuka penjualan kasir toko fisik dan shift kasir",group:"operasional",icon:"fa-cash-register"},{key:"categories",label:"Kategori Produk",desc:"Tambah dan susun kategori etalase produk",group:"konten",icon:"fa-tags"},{key:"brands",label:"Merek Produk",desc:"Kelola daftar brand dagang barang",group:"konten",icon:"fa-copyright"},{key:"colors",label:"Database Warna",desc:"Katalog warna produk dan swatch varian",group:"konten",icon:"fa-swatchbook"},{key:"vouchers",label:"Voucher & Promo",desc:"Buat kode voucher diskon dan promo belanja",group:"konten",icon:"fa-ticket-simple"},{key:"banners",label:"Banner Promosi",desc:"Kelola gambar dan video slider beranda toko",group:"konten",icon:"fa-images"},{key:"rewards",label:"Program Hadiah Poin",desc:"Kelola katalog hadiah penukaran poin member",group:"konten",icon:"fa-gift"},{key:"reviews",label:"Ulasan Pelanggan",desc:"Moderasi ulasan dan testimoni produk pembeli",group:"konten",icon:"fa-star"},{key:"faqs",label:"Tanya Jawab / Q&A",desc:"Kelola jawaban pertanyaan umum pembeli",group:"konten",icon:"fa-circle-question"},{key:"changelog",label:"Log Pembaruan Sistem",desc:"Melihat riwayat update sistem toko",group:"konten",icon:"fa-code-branch"},{key:"reports",label:"Pusat Laporan & Keuangan",desc:"Laporan terpadu penjualan, stok, laba rugi, utang piutang, dan perpajakan",group:"sensitif",icon:"fa-chart-pie"},{key:"view_reports",label:"Laporan Finansial & Laba",desc:"Lihat omset, total HPP terjual, margin & laba bersih toko",group:"sensitif",icon:"fa-chart-line"},{key:"tax",label:"Pajak & Keuangan (PPN)",desc:"Laporan PPN, neraca keuangan, dan laba rugi resmi",group:"sensitif",icon:"fa-file-invoice-dollar"},{key:"banks",label:"Rekening Bank & QRIS",desc:"Ubah nomor rekening toko dan QRIS tujuan pembayaran",group:"sensitif",icon:"fa-building-columns"},{key:"settings",label:"Pengaturan Utama Toko",desc:"Konfigurasi nama toko, GPS maps, tarif ongkir, & sistem",group:"sensitif",icon:"fa-gear"},{key:"cashiers",label:"Kelola Staf & Hak Akses",desc:"Daftarkan staf baru, atur jabatan, & ubah batasan hak akses",group:"sensitif",icon:"fa-users-gear"},{key:"backup_sync",label:"Pusat Data & Backup Cloud",desc:"Cadangkan data toko, ekspor database, & sinkronisasi cloud",group:"sensitif",icon:"fa-cloud-arrow-up"}],Pt={[E.CASHIER]:{pos:!0,orders:!1,products:!1,suppliers:!1,purchases:!1,piutang:!1,customers:!1,categories:!1,brands:!1,colors:!1,vouchers:!1,banners:!1,rewards:!1,reviews:!1,faqs:!1,changelog:!1,reports:!1,view_reports:!1,tax:!1,banks:!1,settings:!1,cashiers:!1,backup_sync:!1},[E.ADMIN]:{pos:!0,orders:!0,products:!0,suppliers:!0,purchases:!0,piutang:!0,customers:!0,categories:!0,brands:!0,colors:!0,vouchers:!0,banners:!0,rewards:!0,reviews:!0,faqs:!0,changelog:!0,reports:!1,view_reports:!1,tax:!1,banks:!1,settings:!1,cashiers:!1,backup_sync:!1},manager:{pos:!0,orders:!0,products:!0,suppliers:!0,purchases:!0,piutang:!0,customers:!0,categories:!0,brands:!0,colors:!0,vouchers:!0,banners:!0,rewards:!0,reviews:!0,faqs:!0,changelog:!0,reports:!0,view_reports:!0,tax:!0,banks:!1,settings:!1,cashiers:!1,backup_sync:!1},[E.OWNER]:{pos:!0,orders:!0,products:!0,suppliers:!0,purchases:!0,piutang:!0,customers:!0,categories:!0,brands:!0,colors:!0,vouchers:!0,banners:!0,rewards:!0,reviews:!0,faqs:!0,changelog:!0,reports:!0,view_reports:!0,tax:!0,banks:!0,settings:!0,cashiers:!0,backup_sync:!0}};let Oe=null;const Ne=()=>{if(Oe)return Oe;try{const e=sessionStorage.getItem("freshmart_staff_profile");if(e)return Oe=JSON.parse(e),Oe}catch{}return null},cs=e=>{Oe=e;try{e?sessionStorage.setItem("freshmart_staff_profile",JSON.stringify(e)):sessionStorage.removeItem("freshmart_staff_profile")}catch{}},ps=()=>{Oe=null;try{sessionStorage.removeItem("freshmart_staff_profile")}catch{}},ze=()=>{const e=J.currentUser;return e&&e.uid===Ie?!0:Ne()?.role===E.OWNER},fa=()=>ze()?!0:Ne()?.role===E.ADMIN,us=()=>ze()||fa()?!1:Ne()?.role===E.CASHIER,ba=e=>{if(ze())return!0;const t=Ne();if(!t)return window.isAdm||window.__localIsAdm?["banks","settings","cashiers","backup_sync"].includes(e)?J.currentUser?.uid===Ie:!0:!1;if(t.isActive===!1)return!1;if(t.role===E.CASHIER)return e==="pos";if(t.permissions){if(typeof t.permissions[e]<"u")return t.permissions[e]===!0;if(e==="reports"&&(t.permissions.view_reports===!0||t.permissions.tax===!0)||(e==="view_reports"||e==="tax")&&t.permissions.reports===!0)return!0}return(Pt[t.role]||Pt[E.ADMIN])[e]===!0},fe=()=>{if(ze())return!0;try{const t=sessionStorage.getItem("pos_cashier_session");if(t){const a=JSON.parse(t);if(a.role===E.OWNER||a.uid===Ie)return!0;if(a.role===E.CASHIER)return!1}}catch{}const e=Ne();return e?e.role===E.OWNER||e.uid===Ie?!0:e.role===E.CASHIER?!1:ba("view_reports"):!!(window.isAdm||window.__localIsAdm)},fs=e=>{switch(e){case E.OWNER:return`
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/60 shadow-2xs">
                <i class="fa-solid fa-crown text-[9px] text-amber-500"></i>
                <span>Owner</span>
            </span>`;case E.ADMIN:return`
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60 shadow-2xs">
                <i class="fa-solid fa-shield-halved text-[9px]"></i>
                <span>Admin Toko</span>
            </span>`;case E.CASHIER:default:return`
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 shadow-2xs">
                <i class="fa-solid fa-cash-register text-[9px]"></i>
                <span>Kasir POS</span>
            </span>`}};typeof window<"u"&&(window.ROLES=E,window.PERMISSION_DEFINITIONS=ds,window.ROLE_PRESETS=Pt,window.getActiveStaff=Ne,window.setActiveStaff=cs,window.clearActiveStaff=ps,window.isOwnerUser=ze,window.isAdminUser=fa,window.isCashierUser=us,window.hasPermission=ba,window.canViewHpp=fe,window.getRoleBadgeHtml=fs);const ma=e=>{const t=f.products?.find(r=>r&&r.id!=null&&String(r.id)===String(e.id));let a=e.price||0;if(e.variantName&&t&&t.variants){const r=t.variants.find(o=>o.name===e.variantName);r&&r.price!=null&&(a=r.price)}if(e.variantName||!t||!t.wholesale||!t.wholesale.length)return a;const s=ua.filter(r=>r.id!=null&&String(r.id)===String(e.id)).reduce((r,o)=>r+(parseFloat(o.qty)||0),0);for(let r of t.wholesale.slice().sort((o,i)=>i.minQty-o.minQty))if(s>=parseFloat(r.minQty))return r.price;return a},Be=e=>{const t=f.products?.find(a=>a&&a.id!=null&&String(a.id)===String(e.id));if(!t)return 0;if(e.variantName&&t.variants){const a=t.variants.find(s=>s.name===e.variantName);if(a&&a.hpp!=null)return parseFloat(a.hpp)||0}return parseFloat(t.hpp)||0},xa=e=>{if(!e)return 0;const t=f.products?.find(a=>a&&a.id!=null&&String(a.id)===String(e.id));if(!t)return parseFloat(e.poin)||0;if(e.variantName&&t.variants){const a=t.variants.find(s=>s.name===e.variantName);if(a&&a.poin!==void 0&&a.poin!==null&&a.poin!==""){const s=parseFloat(a.poin);if(!isNaN(s)&&s>0)return s}}return parseFloat(t.poin)||0},bs=(e,t,a,s)=>{if(!e||!t||!a||!s)return 0;const r=6371,o=(a-e)*Math.PI/180,i=(s-t)*Math.PI/180,n=Math.sin(o/2)*Math.sin(o/2)+Math.cos(e*Math.PI/180)*Math.cos(a*Math.PI/180)*Math.sin(i/2)*Math.sin(i/2),d=2*Math.atan2(Math.sqrt(n),Math.sqrt(1-n));return r*d},ha=e=>{if(!e||typeof e!="string")return null;let t=e.trim();try{t=decodeURIComponent(t)}catch{}const a=t.match(/@(-?\d{1,3}\.\d+)[,\s]+(-?\d{1,3}\.\d+)/);if(a){const i=parseFloat(a[1]),n=parseFloat(a[2]);if(!isNaN(i)&&!isNaN(n)&&Math.abs(i)<=90&&Math.abs(n)<=180)return{lat:a[1],lng:a[2]}}const s=t.match(/[?&](?:q|ll|query|loc|center)=(-?\d{1,3}\.\d+)[,\s]+(-?\d{1,3}\.\d+)/i);if(s){const i=parseFloat(s[1]),n=parseFloat(s[2]);if(!isNaN(i)&&!isNaN(n)&&Math.abs(i)<=90&&Math.abs(n)<=180)return{lat:s[1],lng:s[2]}}const r=t.match(/(\d+)[°\s]+(\d+)['\s]+([\d.]+)"?\s*([NSns])[,\s]+(\d+)[°\s]+(\d+)['\s]+([\d.]+)"?\s*([EWew])/);if(r){let i=parseInt(r[1],10)+parseInt(r[2],10)/60+parseFloat(r[3])/3600;r[4].toUpperCase()==="S"&&(i=-i);let n=parseInt(r[5],10)+parseInt(r[6],10)/60+parseFloat(r[7])/3600;return r[8].toUpperCase()==="W"&&(n=-n),{lat:i.toFixed(8),lng:n.toFixed(8)}}const o=t.match(/(-?\d{1,3}\.\d{3,20})[,\s;\t]+(-?\d{1,3}\.\d{3,20})/);if(o){const i=parseFloat(o[1]),n=parseFloat(o[2]);if(!isNaN(i)&&!isNaN(n)&&Math.abs(i)<=90&&Math.abs(n)<=180)return{lat:o[1],lng:o[2]}}return null},ms=e=>{const t=(typeof e=="string"?e:e?.value||"").trim(),a=ha(t);return a?(na("set-lat",a.lat),na("set-lng",a.lng),k("Koordinat GPS berhasil disalin!"),a):(k("Format tidak dikenali! Tempel koordinat: Lat, Lng atau link Google Maps"),null)},xs=(e=ua,t=f.store)=>{if(!e||!e.length)return{totalPoints:0,directPoints:0,spendPoints:0,nonPointSpend:0,threshold:1e5,pointsPerThreshold:1,isSpendPointsActive:!1,remainingToNextPoint:0,progressPercent:0};let a=0,s=0;e.forEach(p=>{const x=xa(p),w=parseFloat(p.qty)||0;if(x>0)a+=x*w;else{const g=ma(p);s+=g*w}});let r=0,o=0,i=0;const n=t?t.spendPointsEnabled===!0||t.spendPointsEnabled==="true":!1,d=Math.max(1,parseFloat(t?.spendPointsThreshold)||1e5),l=Math.max(1,parseFloat(t?.spendPointsPerThreshold)||1);if(n&&s>0){const p=Math.floor(s/d);r=p*l;const x=s%d;o=x>0?d-x:d,i=Math.min(100,Math.round((x||(p>0?d:0))/d*100))}return{totalPoints:a+r,directPoints:a,spendPoints:r,nonPointSpend:s,threshold:d,pointsPerThreshold:l,isSpendPointsActive:n,remainingToNextPoint:o,progressPercent:i}};window.getEffP=ma;window.getEffHpp=Be;window.getEffPoin=xa;window.calculateCartPoints=xs;window.getDist=bs;window.parseGeoCoordinates=ha;window.autoParseCoords=ms;let Le=null;const ie=()=>{if(Le)return Le;try{const e=sessionStorage.getItem("pos_cashier_session");if(e)return Le=JSON.parse(e),Le}catch{}return null},Tt=e=>{Le=e;try{e?sessionStorage.setItem("pos_cashier_session",JSON.stringify(e)):sessionStorage.removeItem("pos_cashier_session")}catch{}},ga=()=>{Le=null;try{sessionStorage.removeItem("pos_cashier_session")}catch{}},wa=()=>!!ie(),ka=async()=>{if(ie()||window.isAdm||window.__localIsAdm||f&&(f.hasCashier===!0||f.store?.posEnabled===!0))return!0;const e=localStorage.getItem("pos_has_cashier");if(e==="true")return!0;const t=!!(window.isAdm||window.__localIsAdm||J.currentUser&&J.currentUser.uid===Ie);try{if(t){const s=!(await j.collection("freshmart").doc("cms_data").collection("cashier_accounts").where("isActive","==",!0).limit(1).get()).empty;try{localStorage.setItem("pos_has_cashier",s?"true":"false"),j.collection("freshmart").doc("cms_data").set({hasCashier:s},{merge:!0}).catch(()=>{})}catch{}return s}else{const a=await j.collection("freshmart").doc("cms_data").get();if(a.exists){const s=a.data();if(s.hasCashier!==void 0){const r=!!s.hasCashier;try{localStorage.setItem("pos_has_cashier",r?"true":"false")}catch{}return r}}return e!=="false"}}catch{return e!=="false"}},Ve=async()=>{const e=c("pos-cashier-header-btn");if(!e)return;const t=!!ie(),a=!!(window.isAdm||window.__localIsAdm),s=localStorage.getItem("pos_has_cashier"),r=f?f.hasCashier??!0:!0;t||a||s==="true"||s===null&&r!==!1?e.classList.remove("hidden"):s==="false"&&e.classList.add("hidden");try{await ka()||t||a?e.classList.remove("hidden"):e.classList.add("hidden")}catch{(t||a||s!=="false")&&e.classList.remove("hidden")}},va=async()=>{typeof window.triggerHaptic=="function"&&window.triggerHaptic("medium"),ie()?(typeof window.changeView=="function"&&window.changeView("view-pos-cashier"),typeof window.renderPOSStorefront=="function"&&window.renderPOSStorefront()):$t()},$t=()=>{const e=c("pos-login-modal");e&&(e.classList.remove("hidden"),setTimeout(()=>{e.classList.remove("opacity-0");const t=c("pos-login-modal-box");t&&t.classList.remove("translate-y-full","scale-95")},10),setTimeout(()=>{const t=c("pos-login-email");t&&t.focus()},300),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},Ct=()=>{const e=c("pos-login-modal"),t=c("pos-login-modal-box");e&&e.classList.add("opacity-0"),t&&t.classList.add("translate-y-full"),setTimeout(()=>{e&&e.classList.add("hidden");const a=c("pos-login-email"),s=c("pos-login-password"),r=c("pos-login-error");a&&(a.value=""),s&&(s.value=""),r&&(r.textContent="",r.classList.add("hidden"))},300)},ya=async()=>{const e=c("pos-login-email"),t=c("pos-login-password"),a=c("pos-login-error"),s=c("pos-login-btn"),r=e?.value?.trim()||"",o=t?.value||"",i=d=>{if(a){a.classList.remove("hidden");const l=a.querySelector("span");l?l.textContent=d:a.textContent=d}typeof window.triggerHaptic=="function"&&window.triggerHaptic("error")};if((()=>{if(a){a.classList.add("hidden");const d=a.querySelector("span");d&&(d.textContent="")}})(),!r||!o){i("Email dan password wajib diisi.");return}s&&(s.disabled=!0,s.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i>Memverifikasi...');try{const l=(await J.signInWithEmailAndPassword(r,o)).user?.uid;if(!l)throw new Error("UID tidak ditemukan");if(l===Ie){Tt({uid:l,name:"Owner Toko",email:r,role:"owner"});try{localStorage.setItem("pos_has_cashier","true")}catch{}Ve()}else{const w=await j.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(l).get();if(!w.exists){await J.signOut(),i("Akun ini bukan akun staf/kasir yang terdaftar di toko ini.");return}const g=w.data()||{};if(g.isActive===!1){await J.signOut(),i("Akun staf ini telah dinonaktifkan oleh Owner toko.");return}if(!(g.role==="cashier"||g.role==="admin"||g.role==="owner"||g.permissions?.pos!==!1)){await J.signOut(),i("Akun ini tidak memiliki hak akses kasir POS.");return}Tt({uid:l,name:g.name||r,email:g.email||r,role:g.role||"cashier"});try{localStorage.setItem("pos_has_cashier","true")}catch{}Ve()}typeof window.syncActiveShiftFromCloud=="function"&&window.syncActiveShiftFromCloud().catch(()=>{}),Ct();const p=ie();k(`Selamat datang, ${p?.name||"Kasir"}! 👋`,"success"),typeof window.changeView=="function"&&window.changeView("view-pos-cashier"),setTimeout(()=>{typeof window.renderPOSStorefront=="function"&&window.renderPOSStorefront()},100),typeof window.triggerHaptic=="function"&&window.triggerHaptic("success")}catch(d){console.error("[POS Auth] Login error:",d);const l=d.code||"";i(l==="auth/user-not-found"||l==="auth/wrong-password"||l==="auth/invalid-credential"?"Email atau password salah.":l==="auth/too-many-requests"?"Terlalu banyak percobaan. Coba lagi beberapa saat.":l==="auth/network-request-failed"?"Koneksi gagal. Periksa jaringan internet.":"Login gagal: "+(d.message||"Kesalahan tidak diketahui"))}finally{s&&(s.disabled=!1,s.innerHTML='<i class="fa-solid fa-right-to-bracket mr-2"></i>Masuk Kasir')}},At=async(e=!1)=>{if(!e&&typeof window.getActiveShift=="function"){const a=window.getActiveShift();if(a&&a.status==="open"){document.getElementById("pos-logout-shift-modal")?.remove();const s=typeof window.fRp=="function"?window.fRp(a.startingCash):"Rp "+a.startingCash;document.body.insertAdjacentHTML("beforeend",`
            <div id="pos-logout-shift-modal" class="fixed inset-0 z-[10005] flex items-center justify-center p-3 sm:p-4" style="background:rgba(15,23,42,0.8)">
                <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-sm border border-slate-200 dark:border-slate-800 p-5 text-center space-y-4">
                    <div class="w-14 h-14 rounded-2xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center text-2xl mx-auto shadow-inner">
                        <i class="fa-solid fa-triangle-exclamation"></i>
                    </div>
                    <div>
                        <h4 class="text-sm font-black text-slate-800 dark:text-white uppercase tracking-wider">Shift Kasir Masih Aktif</h4>
                        <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                            Shift kasir Anda saat ini masih aktif dengan modal awal <b>${s}</b>. Apakah Anda ingin menutup shift &amp; merekap uang fisik laci kasir sekarang?
                        </p>
                    </div>
                    <div class="space-y-2 pt-1">
                        <button onclick="document.getElementById('pos-logout-shift-modal')?.remove(); if(typeof window.openPOSCloseShiftModal==='function') window.openPOSCloseShiftModal();" class="w-full py-3 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-black text-xs uppercase tracking-wider shadow-md active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer">
                            <i class="fa-solid fa-lock"></i> Tutup Shift Sekarang
                        </button>
                        <button onclick="document.getElementById('pos-logout-shift-modal')?.remove(); window.cashierLogout(true);" class="w-full py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs transition-all cursor-pointer">
                            Tetap Logout (Shift Tetap Berjalan)
                        </button>
                        <button onclick="document.getElementById('pos-logout-shift-modal')?.remove();" class="w-full py-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xs font-semibold cursor-pointer">
                            Batal
                        </button>
                    </div>
                </div>
            </div>`);return}}ie(),typeof window.detachPOSHistoryListener=="function"&&window.detachPOSHistoryListener(),typeof window.detachActiveShiftListener=="function"&&window.detachActiveShiftListener(),typeof window.clearActiveShift=="function"&&window.clearActiveShift();try{if(!window.isAdm&&!window.__localIsAdm)try{await J.signOut()}catch{}}catch{}ga();const t=c("view-pos-cashier");t&&(t.innerHTML=""),typeof window.destroyBarcodeListener=="function"&&window.destroyBarcodeListener(),typeof window.stopPOSClock=="function"&&window.stopPOSClock(),k("Sesi kasir berakhir. Sampai jumpa! 👋"),typeof window.changeView=="function"&&window.changeView("view-catalog"),typeof window.triggerHaptic=="function"&&window.triggerHaptic("medium"),typeof window.updatePOSHeaderIcon=="function"&&window.updatePOSHeaderIcon()},Sa=async()=>{await Ve()};window.openPOSCashierMode=va;window.openPOSLoginModal=$t;window.closePOSLoginModal=Ct;window.processCashierLogin=ya;window.cashierLogout=At;window.exitPOSMode=At;window.getCashierSession=ie;window.isCashierLoggedIn=wa;window.initPOSAuth=Sa;window.updatePOSHeaderIcon=Ve;const Is=Object.freeze(Object.defineProperty({__proto__:null,cashierLogout:At,checkCashierExists:ka,clearCashierSession:ga,closePOSLoginModal:Ct,getCashierSession:ie,initPOSAuth:Sa,isCashierLoggedIn:wa,openPOSCashierMode:va,openPOSLoginModal:$t,processCashierLogin:ya,setCashierSession:Tt,updatePOSHeaderIcon:Ve},Symbol.toStringTag,{value:"Module"})),y=e=>"Rp "+Math.round(parseFloat(e)||0).toLocaleString("id-ID"),Pa=e=>parseFloat((parseFloat(e)||0).toFixed(3)).toString(),lt="pos_active_shift",Ta="pos_last_closed_shift";let je=null,nt=null;const dt=()=>{if(typeof nt=="function"){try{nt()}catch{}nt=null}},_e=()=>{const e=typeof ie=="function"?ie():null,t=!!(window.isAdm||window.__localIsAdm||window.__currentAdminUid),a=J?.currentUser?.uid,s=e?.uid||(t?window.__currentAdminUid||a||"admin":a||"cashier-anon"),r=e?.name||(t?"Admin Seller":"Kasir Toko"),o=e?.email||t&&J?.currentUser?.email||"";return{uid:s,name:r,email:o,isAdm:t}},Re=(e,t=_e())=>{if(!e)return!1;const a=e.cashierUid;return!!(a&&t.uid&&a===t.uid||t.isAdm&&(a==="admin"||a==="ADMIN_UID"||a===window.__currentAdminUid||J?.currentUser&&a===J.currentUser.uid))},U=()=>{if(je)return je;try{const e=localStorage.getItem(lt);if(e)return je=JSON.parse(e),je}catch(e){console.warn("[POS Shift] Gagal membaca active shift:",e)}return null},he=e=>{je=e;try{e?localStorage.setItem(lt,JSON.stringify(e)):localStorage.removeItem(lt)}catch{}},Ge=()=>{je=null;try{localStorage.removeItem(lt)}catch{}},hs=()=>{try{const e=localStorage.getItem(Ta);if(e)return JSON.parse(e)}catch{}return null},Ot=e=>{try{localStorage.setItem(Ta,JSON.stringify(e))}catch{}},ve=()=>{const e=U();return!!(e&&e.status==="open")},pt=async(e=null)=>{const t=_e();try{const a=await j.collection("freshmart").doc("cms_data").collection("pos_shifts").where("status","==","open").get();if(!a.empty){const s=[];if(a.forEach(r=>{const o={id:r.id,...r.data()};Re(o,t)&&s.push(o)}),s.length>0)return s.sort((r,o)=>(o.startTime||0)-(r.startTime||0)),s[0]}}catch(a){console.warn("[POS Shift] Cek open shift cms_data:",a)}try{const a=await j.collection("pos_shifts").where("status","==","open").get();if(!a.empty){const s=[];if(a.forEach(r=>{const o={id:r.id,...r.data()};Re(o,t)&&s.push(o)}),s.length>0)return s.sort((r,o)=>(o.startTime||0)-(r.startTime||0)),s[0]}}catch(a){console.warn("[POS Shift] Cek open shift root pos_shifts:",a)}return null},Te=e=>{if(e){dt();try{nt=j.collection("freshmart").doc("cms_data").collection("pos_shifts").doc(e).onSnapshot(a=>{if(!a.exists)return;const s={id:a.id,...a.data()};if(s.status==="closed"){dt(),Ge(),Ot(s),ut(),Je(),Fe(),k("Shift kasir telah ditutup dari perangkat lain.","info"),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge();return}if(s.status==="open"){he(s),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge();const r=c("pos-shift-summary-modal");r&&!r.classList.contains("opacity-0")&&ae()}},a=>{console.warn("[POS Shift] Snapshot listener cms_data error:",a)})}catch(t){console.warn("[POS Shift] Gagal attach snapshot listener:",t)}}},ge=async()=>{const e=_e(),t=U();if(t&&t.status==="open"&&Re(t,e))try{const a=await j.collection("freshmart").doc("cms_data").collection("pos_shifts").doc(t.id).get();if(a.exists){const s={id:a.id,...a.data()};if(s.status==="closed")Ge(),Ot(s),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge();else return he(s),Te(s.id),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge(),s}}catch(a){return console.warn("[POS Shift] Gagal verifikasi local shift ke cloud:",a),Te(t.id),t}try{const a=await pt(e.uid);if(a)return he(a),Te(a.id),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge(),a;t&&!Re(t,e)&&(Ge(),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge())}catch(a){console.warn("[POS Shift] Gagal cari shift open di cloud:",a)}return U()},Ma=(e="open")=>{try{if(typeof window<"u"&&typeof window.checkUserGesture=="function"&&!window.checkUserGesture())return;const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const a=new t,s=a.currentTime;e==="open"?([523.25,659.25,783.99,1046.5].forEach((o,i)=>{const n=a.createOscillator(),d=a.createGain(),l=s+i*.07;n.type="sine",n.frequency.setValueAtTime(o,l),d.gain.setValueAtTime(.09,l),d.gain.exponentialRampToValueAtTime(1e-4,l+.16),n.connect(d),d.connect(a.destination),n.start(l),n.stop(l+.16)}),setTimeout(()=>{a.close().catch(()=>{})},600)):([{f:[783.99,987.77],t:s,d:.14},{f:[1046.5,1318.51],t:s+.12,d:.35}].forEach(o=>{o.f.forEach(i=>{const n=a.createOscillator(),d=a.createGain();n.type="triangle",n.frequency.setValueAtTime(i,o.t),d.gain.setValueAtTime(.08,o.t),d.gain.exponentialRampToValueAtTime(1e-4,o.t+o.d),n.connect(d),d.connect(a.destination),n.start(o.t),n.stop(o.t+o.d)})}),setTimeout(()=>{a.close().catch(()=>{})},700))}catch{}},Lt=(e,t=Date.now())=>{if(!e)return"-";const a=Math.max(0,t-e),s=Math.floor(a/6e4),r=Math.floor(s/60),o=s%60;return r>0?`${r} Jam ${o} Menit`:`${o} Menit`},gs=()=>{const e=new Date,t=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0"),r=Math.floor(100+Math.random()*900);return`SHF-${t}${a}${s}-${r}`},Y=async()=>{const e=_e(),t=U();if(t&&t.status==="open"&&Re(t,e)){k(`Shift kasir #${t.shiftNo||t.id} sedang aktif. Menampilkan ringkasan shift.`,"info"),ae();return}try{const n=await pt(e.uid);if(n){he(n),Te(n.id),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge(),k(`Melanjutkan shift aktif (#${n.shiftNo||n.id}) dari perangkat lain! 👋`,"success"),ae();return}}catch(n){console.warn("[POS Shift] Cek cloud saat buka modal:",n)}const a=e.name,s=new Date().toLocaleString("id-ID",{dateStyle:"full",timeStyle:"short"});document.getElementById("pos-open-shift-modal")?.remove();const r=`
    <div id="pos-open-shift-modal" class="fixed inset-0 z-[10001] flex items-center justify-center p-3 sm:p-4 transition-all duration-300 opacity-0 pointer-events-none" style="background:rgba(15,23,42,0.75)">
        <div id="pos-open-shift-box" class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-md border border-slate-200/90 dark:border-slate-800 overflow-hidden transform translate-y-8 scale-95 transition-all duration-300 flex flex-col">
            <!-- Header Modal -->
            <div class="px-5 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/80 dark:bg-slate-800/40">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-white text-base shadow-sm shrink-0" style="background:linear-gradient(135deg, var(--color-primary-light,#e1b858) 0%, var(--color-primary,#c59b27) 60%, var(--color-primary-dark,#a87f1b) 100%);box-shadow:0 3px 10px rgba(var(--color-primary-rgb),0.35)">
                        <i class="fa-solid fa-cash-register"></i>
                    </div>
                    <div>
                        <h3 class="text-sm font-black text-slate-800 dark:text-white uppercase tracking-wider">Buka Shift Kasir Baru</h3>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400">Modal awal laci &amp; pembukaan kas</p>
                    </div>
                </div>
                <button onclick="window.closePOSOpenShiftModal()" class="w-8 h-8 rounded-xl bg-slate-200/60 dark:bg-slate-800 hover:bg-slate-300 text-slate-600 dark:text-slate-300 flex items-center justify-center text-sm transition-all cursor-pointer">×</button>
            </div>

            <!-- Body Modal -->
            <div class="p-5 space-y-4">
                <!-- Info Petugas & Waktu -->
                <div class="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-xs">
                    <div class="flex items-center gap-2">
                        <div class="w-7 h-7 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs font-bold">
                            <i class="fa-solid fa-user-check"></i>
                        </div>
                        <div>
                            <span class="text-[10px] text-slate-400 block font-medium">Kasir Bertugas</span>
                            <span class="font-bold text-slate-800 dark:text-slate-200">${b(a)}</span>
                        </div>
                    </div>
                    <div class="text-right">
                        <span class="text-[10px] text-slate-400 block font-medium">Waktu Buka</span>
                        <span class="font-bold text-slate-700 dark:text-slate-300 text-[11px]">${b(s)}</span>
                    </div>
                </div>

                <!-- Input Modal Awal / Cash Float -->
                <div class="space-y-1.5">
                    <label class="block text-xs font-bold text-slate-700 dark:text-slate-200 flex items-center justify-between">
                        <span class="flex items-center gap-1.5">
                            <i class="fa-solid fa-money-bill-wave text-emerald-500"></i>
                            <span>Modal Awal Laci (Uang Kembalian)</span>
                        </span>
                        <span class="text-[10px] font-normal text-slate-400">Cash Float</span>
                    </label>
                    <div class="relative">
                        <span class="absolute left-3.5 top-1/2 -translate-y-1/2 font-black text-sm text-slate-400 pointer-events-none">Rp</span>
                        <input id="pos-shift-start-cash-input" type="number" min="0" step="1000" placeholder="0" 
                            class="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white font-black text-base focus:outline-none focus:border-[var(--color-primary)] transition-all text-right"
                            value="100000" oninput="window.posUpdateStartCashChips()">
                    </div>
                    <!-- Quick Amount Chips (Reactive Theme Sync) -->
                    <div id="pos-shift-preset-chips" class="flex items-center gap-1.5 flex-wrap pt-1">
                        <button type="button" data-amount="0" onclick="window.posSetStartCashPreset(0)" class="pos-preset-chip px-2.5 py-1 rounded-xl text-[10px] font-bold border border-slate-200 dark:border-slate-700 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-all cursor-pointer">Rp 0</button>
                        <button type="button" data-amount="50000" onclick="window.posSetStartCashPreset(50000)" class="pos-preset-chip px-2.5 py-1 rounded-xl text-[10px] font-bold border border-slate-200 dark:border-slate-700 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-all cursor-pointer">50.000</button>
                        <button type="button" data-amount="100000" onclick="window.posSetStartCashPreset(100000)" class="pos-preset-chip px-2.5 py-1 rounded-xl text-[10px] font-black border-2 border-[var(--color-primary)] text-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.1)] shadow-xs transition-all cursor-pointer">100.000</button>
                        <button type="button" data-amount="200000" onclick="window.posSetStartCashPreset(200000)" class="pos-preset-chip px-2.5 py-1 rounded-xl text-[10px] font-bold border border-slate-200 dark:border-slate-700 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-all cursor-pointer">200.000</button>
                        <button type="button" data-amount="500000" onclick="window.posSetStartCashPreset(500000)" class="pos-preset-chip px-2.5 py-1 rounded-xl text-[10px] font-bold border border-slate-200 dark:border-slate-700 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-all cursor-pointer">500.000</button>
                    </div>
                </div>

                <!-- Catatan Pembukaan (Opsional) -->
                <div class="space-y-1">
                    <label class="block text-xs font-bold text-slate-700 dark:text-slate-200">
                        <i class="fa-regular fa-clipboard text-slate-400 mr-1"></i>Catatan Pembukaan (Opsional)
                    </label>
                    <input id="pos-shift-start-notes-input" type="text" placeholder="Contoh: Uang pecahan kecil lengkap, shift pagi"
                        class="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)]">
                </div>

                <!-- Hint Info Box -->
                <div class="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/60 flex items-start gap-2.5 text-[11px] text-amber-800 dark:text-amber-300">
                    <i class="fa-solid fa-lightbulb text-amber-500 mt-0.5 shrink-0"></i>
                    <span>Modal awal akan dihitung bersama total penjualan tunai saat Anda melakukan tutup kasir (settlement) di akhir shift.</span>
                </div>
            </div>

            <!-- Footer Action Buttons -->
            <div class="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 flex items-center gap-2">
                <button onclick="window.closePOSOpenShiftModal()" class="flex-1 py-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 transition-all cursor-pointer">
                    Batal
                </button>
                <button onclick="window.confirmStartPOSShift()" class="flex-[2] py-3 rounded-2xl text-white font-black text-xs uppercase tracking-wider shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer hover:brightness-105" style="background:linear-gradient(135deg, var(--color-primary-light,#e1b858) 0%, var(--color-primary,#c59b27) 50%, var(--color-primary-dark,#a87f1b) 100%);box-shadow:0 4px 14px rgba(var(--color-primary-rgb),0.35)">
                    <i class="fa-solid fa-check"></i>
                    <span>Buka Shift Sekarang</span>
                </button>
            </div>
        </div>
    </div>`;document.body.insertAdjacentHTML("beforeend",r);const o=c("pos-open-shift-modal"),i=c("pos-open-shift-box");!o||!i||(o.classList.remove("pointer-events-none"),requestAnimationFrame(()=>{o.classList.remove("opacity-0"),i.classList.remove("translate-y-8","scale-95")}),setTimeout(()=>{const n=c("pos-shift-start-cash-input");n&&(n.focus(),n.select())},250))},Fe=()=>{const e=c("pos-open-shift-modal"),t=c("pos-open-shift-box");e&&(e.classList.add("opacity-0","pointer-events-none"),t&&t.classList.add("translate-y-8","scale-95"),setTimeout(()=>{e.remove()},280))},$a=()=>{const e=parseFloat(c("pos-shift-start-cash-input")?.value)||0;document.querySelectorAll(".pos-preset-chip").forEach(t=>{parseFloat(t.dataset.amount)===e?t.className="pos-preset-chip px-2.5 py-1 rounded-xl text-[10px] font-black border-2 border-[var(--color-primary)] text-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.1)] shadow-xs transition-all cursor-pointer":t.className="pos-preset-chip px-2.5 py-1 rounded-xl text-[10px] font-bold border border-slate-200 dark:border-slate-700 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-all cursor-pointer"})},ws=e=>{const t=c("pos-shift-start-cash-input");t&&(t.value=e,t.focus(),t.select()),$a()},ks=async()=>{const e=c("pos-shift-start-cash-input"),t=c("pos-shift-start-notes-input"),a=parseFloat(e?.value)||0,s=t?.value?.trim()||"",r=_e(),o=r.uid,i=r.name,n=r.email,d=document.querySelector('#pos-open-shift-box button[onclick*="confirmStartPOSShift"]');d&&(d.disabled=!0,d.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-1.5"></i><span>Memverifikasi Shift...</span>');try{const p=await pt(o);if(p){Fe(),he(p),Te(p.id),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge(),k(`Akun kasir sudah memiliki shift aktif (#${p.shiftNo||p.id}). Melanjutkan shift berjalan.`,"warning"),ae();return}}catch(p){console.warn("[POS Shift] Pre-flight check error:",p)}const l={id:"SHF-"+Date.now(),shiftNo:gs(),cashierUid:o,cashierName:i,cashierEmail:n,startTime:Date.now(),startTimeISO:new Date().toISOString(),startingCash:a,startNotes:s,status:"open",txCount:0,itemCount:0,totalSales:0,cashSales:0,qrisSales:0,bankSales:0,tempoSales:0,discountTotal:0,pointsTotal:0,orders:[]};he(l),Te(l.id);try{await Promise.all([j.collection("freshmart").doc("cms_data").collection("pos_shifts").doc(l.id).set(l),j.collection("pos_shifts").doc(l.id).set(l)])}catch{}Fe(),Ma("open"),k(`Shift kasir dibuka! Modal awal: ${y(a)} 🎉`,"success"),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge()},Ca=e=>{try{const t=U();if(!t||t.status!=="open")return;const a=parseFloat(e.total)||0,s=e.payment?.method||"cash",r=parseFloat(e.payment?.tempoDp??e.payment?.dp??e.payment?.paid)||0,o=parseFloat(e.payment?.tempoBalance)||0,i=parseFloat(e.globalDiscount)||0,n=parseFloat(e.pointsEarned)||0,d=(e.items||[]).reduce((l,p)=>l+(parseFloat(p.qty)||0),0);t.txCount=(t.txCount||0)+1,t.itemCount=parseFloat(((t.itemCount||0)+d).toFixed(3)),t.totalSales=(t.totalSales||0)+a,t.discountTotal=(t.discountTotal||0)+i,t.pointsTotal=(t.pointsTotal||0)+n,s==="cash"?t.cashSales=(t.cashSales||0)+a:s==="qris"?t.qrisSales=(t.qrisSales||0)+a:s==="bank"?t.bankSales=(t.bankSales||0)+a:s==="tempo"&&(r>0&&(t.cashSales=(t.cashSales||0)+r),t.tempoSales=(t.tempoSales||0)+o),Array.isArray(t.orders)||(t.orders=[]),(e.txId||e.id)&&t.orders.push(e.txId||e.id),he(t);try{const l={txCount:t.txCount,itemCount:t.itemCount,totalSales:t.totalSales,cashSales:t.cashSales,qrisSales:t.qrisSales,bankSales:t.bankSales,tempoSales:t.tempoSales,discountTotal:t.discountTotal,pointsTotal:t.pointsTotal,orders:t.orders,lastUpdatedISO:new Date().toISOString()};j.collection("freshmart").doc("cms_data").collection("pos_shifts").doc(t.id).update(l).catch(()=>{}),j.collection("pos_shifts").doc(t.id).update(l).catch(()=>{})}catch{}typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge()}catch(t){console.warn("[POS Shift] Gagal update transaksi ke shift:",t)}},vs=(e,t,a="")=>{try{const s=U();if(!s||s.status!=="open")return!1;const r=parseFloat(e)||0;if(r<=0)return!1;s.cashSales=(s.cashSales||0)+r,s.tempoInstallmentCash=(s.tempoInstallmentCash||0)+r,Array.isArray(s.tempoPayments)||(s.tempoPayments=[]),s.tempoPayments.push({orderId:t,amount:r,timestamp:Date.now(),note:a||`Cicilan Piutang #${t}`}),he(s);try{const o={cashSales:s.cashSales,tempoInstallmentCash:s.tempoInstallmentCash,tempoPayments:s.tempoPayments,lastUpdatedISO:new Date().toISOString()};j.collection("freshmart").doc("cms_data").collection("pos_shifts").doc(s.id).update(o).catch(()=>{}),j.collection("pos_shifts").doc(s.id).update(o).catch(()=>{})}catch{}return typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge(),!0}catch(s){return console.warn("[POS Shift] Gagal rekam pembayaran cicilan ke shift:",s),!1}},ae=()=>{const e=U();if(!e){Y();return}document.getElementById("pos-shift-summary-modal")?.remove();const t=(parseFloat(e.startingCash)||0)+(parseFloat(e.cashSales)||0),a=Lt(e.startTime),s=new Date(e.startTime).toLocaleString("id-ID",{dateStyle:"medium",timeStyle:"short"}),r=`
    <div id="pos-shift-summary-modal" class="fixed inset-0 z-[10001] flex items-center justify-center p-3 sm:p-4 transition-all duration-300 opacity-0 pointer-events-none" style="background:rgba(15,23,42,0.75)">
        <div id="pos-shift-summary-box" class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-lg border border-slate-200/90 dark:border-slate-800 overflow-hidden transform translate-y-8 scale-95 transition-all duration-300 flex flex-col max-h-[92vh]">
            <!-- Header Modal -->
            <div class="px-5 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/80 dark:bg-slate-800/40">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-white text-base shadow-sm shrink-0" style="background:linear-gradient(135deg, var(--color-primary-light,#e1b858) 0%, var(--color-primary,#c59b27) 60%, var(--color-primary-dark,#a87f1b) 100%);box-shadow:0 3px 10px rgba(var(--color-primary-rgb),0.35)">
                        <i class="fa-solid fa-chart-pie"></i>
                    </div>
                    <div>
                        <div class="flex items-center gap-2">
                            <h3 class="text-sm font-black text-slate-800 dark:text-white uppercase tracking-wider">Ringkasan Shift Kasir</h3>
                            <span class="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">X-Report</span>
                        </div>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400">Shift aktif: <b>${b(e.shiftNo||e.id)}</b></p>
                    </div>
                </div>
                <button onclick="window.closePOSShiftSummaryModal()" class="w-8 h-8 rounded-xl bg-slate-200/60 dark:bg-slate-800 hover:bg-slate-300 text-slate-600 dark:text-slate-300 flex items-center justify-center text-sm transition-all cursor-pointer">×</button>
            </div>

            <!-- Body Modal -->
            <div class="p-5 space-y-4 overflow-y-auto flex-1">
                <!-- Info Kasir & Durasi -->
                <div class="grid grid-cols-2 gap-2.5">
                    <div class="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                        <span class="text-[10px] text-slate-400 block font-medium">Kasir Bertugas</span>
                        <span class="font-bold text-slate-800 dark:text-slate-200 text-xs truncate block">${b(e.cashierName)}</span>
                        <span class="text-[10px] text-slate-500 mt-0.5 block">Mulai: ${b(s)}</span>
                    </div>
                    <div class="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                        <span class="text-[10px] text-slate-400 block font-medium">Durasi Kerja</span>
                        <span class="font-bold text-emerald-600 dark:text-emerald-400 text-xs block">${b(a)}</span>
                        <span class="text-[10px] text-slate-500 mt-0.5 block">${e.txCount||0} Struk / ${Pa(e.itemCount||0)} Item</span>
                    </div>
                </div>

                <!-- Kartu Utama: Kas di Laci Saat Ini (Expected Cash) -->
                <div class="p-4 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent border-2 border-emerald-500/30 flex items-center justify-between">
                    <div>
                        <span class="text-[11px] font-bold text-emerald-700 dark:text-emerald-300 uppercase tracking-wider block">Uang Kas di Laci Seharusnya</span>
                        <span class="text-[10px] text-slate-500 dark:text-slate-400">Modal Awal (${y(e.startingCash)}) + Penjualan Tunai (${y(e.cashSales||0)})</span>
                    </div>
                    <div class="text-right">
                        <span class="text-xl font-black text-emerald-600 dark:text-emerald-400 block">${y(t)}</span>
                    </div>
                </div>

                <!-- Rincian Omset Penjualan -->
                <div class="space-y-2">
                    <div class="flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-200 border-b border-slate-100 dark:border-slate-800 pb-1.5">
                        <span class="flex items-center gap-1.5"><i class="fa-solid fa-receipt text-slate-400"></i>Rincian Metode Pembayaran</span>
                        <span class="text-slate-500 text-[11px]">Total Omset: <b style="color:var(--color-primary)">${y(e.totalSales||0)}</b></span>
                    </div>

                    <div class="space-y-1.5 text-xs">
                        <div class="flex justify-between items-center p-2 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                            <span class="text-slate-600 dark:text-slate-300 flex items-center gap-2">
                                <span class="w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center text-[10px]"><i class="fa-solid fa-money-bill-wave"></i></span>
                                <span>Tunai (Cash)</span>
                            </span>
                            <span class="font-bold text-slate-800 dark:text-white">${y(e.cashSales||0)}</span>
                        </div>
                        ${(e.tempoInstallmentCash||0)>0?`
                        <div class="flex justify-between items-center p-2 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40 text-[11px]">
                            <span class="text-amber-700 dark:text-amber-300 flex items-center gap-2">
                                <span class="w-6 h-6 rounded-lg bg-amber-100 dark:bg-amber-900/60 text-amber-600 flex items-center justify-center text-[10px]"><i class="fa-solid fa-hand-holding-dollar"></i></span>
                                <span>Dari Cicilan Piutang (Kas Masuk)</span>
                            </span>
                            <span class="font-bold text-amber-700 dark:text-amber-300">+${y(e.tempoInstallmentCash)}</span>
                        </div>`:""}
                        <div class="flex justify-between items-center p-2 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                            <span class="text-slate-600 dark:text-slate-300 flex items-center gap-2">
                                <span class="w-6 h-6 rounded-lg bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 flex items-center justify-center text-[10px]"><i class="fa-solid fa-qrcode"></i></span>
                                <span>QRIS Dinamis</span>
                            </span>
                            <span class="font-bold text-slate-800 dark:text-white">${y(e.qrisSales||0)}</span>
                        </div>
                        <div class="flex justify-between items-center p-2 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                            <span class="text-slate-600 dark:text-slate-300 flex items-center gap-2">
                                <span class="w-6 h-6 rounded-lg bg-blue-100 dark:bg-blue-950/60 text-blue-600 flex items-center justify-center text-[10px]"><i class="fa-solid fa-building-columns"></i></span>
                                <span>Transfer Bank</span>
                            </span>
                            <span class="font-bold text-slate-800 dark:text-white">${y(e.bankSales||0)}</span>
                        </div>
                        <div class="flex justify-between items-center p-2 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                            <span class="text-slate-600 dark:text-slate-300 flex items-center gap-2">
                                <span class="w-6 h-6 rounded-lg bg-amber-100 dark:bg-amber-950/60 text-amber-600 flex items-center justify-center text-[10px]"><i class="fa-solid fa-clock-rotate-left"></i></span>
                                <span>Tempo / Piutang (Sisa)</span>
                            </span>
                            <span class="font-bold text-slate-800 dark:text-white">${y(e.tempoSales||0)}</span>
                        </div>
                    </div>
                </div>

                <!-- Diskon & Poin -->
                <div class="grid grid-cols-2 gap-2 text-xs">
                    <div class="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/20 border border-rose-200/60 dark:border-rose-800/40">
                        <span class="text-[10px] text-rose-500 block font-bold">Total Diskon Diberikan</span>
                        <span class="font-black text-rose-600 dark:text-rose-400 text-xs">${y(e.discountTotal||0)}</span>
                    </div>
                    <div class="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-800/40">
                        <span class="text-[10px] text-amber-600 block font-bold">Poin Member Dikreditkan</span>
                        <span class="font-black text-amber-600 dark:text-amber-400 text-xs">+${e.pointsTotal||0} Poin</span>
                    </div>
                </div>
            </div>

            <!-- Footer Action Buttons -->
            <div class="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 flex items-center gap-2">
                <button onclick="window.printShiftSettlementReceipt(window.getActiveShift(), true)" class="px-3.5 py-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-700 transition-all flex items-center gap-1.5 cursor-pointer shadow-xs active:scale-95" title="Preview & Cetak Slip Sementara (X-Report)">
                    <i class="fa-solid fa-eye text-emerald-500"></i>
                    <i class="fa-solid fa-print"></i>
                    <span class="hidden sm:inline">Preview X-Report</span>
                </button>
                <button onclick="window.closePOSShiftSummaryModal()" class="flex-1 py-3 rounded-2xl bg-slate-200/70 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 font-bold text-xs transition-all cursor-pointer active:scale-95">
                    <span class="sm:hidden">Lanjut Shift</span>
                    <span class="hidden sm:inline">Lanjut Jaga Kasir</span>
                </button>
                <button onclick="window.closePOSShiftSummaryModal(); window.openPOSCloseShiftModal();" class="flex-1 py-3 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-black text-xs uppercase tracking-wider shadow-lg active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer">
                    <i class="fa-solid fa-lock"></i>
                    <span>Tutup Shift</span>
                </button>
            </div>
        </div>
    </div>`;document.body.insertAdjacentHTML("beforeend",r);const o=c("pos-shift-summary-modal"),i=c("pos-shift-summary-box");!o||!i||(o.classList.remove("pointer-events-none"),requestAnimationFrame(()=>{o.classList.remove("opacity-0"),i.classList.remove("translate-y-8","scale-95")}))},ut=()=>{const e=c("pos-shift-summary-modal"),t=c("pos-shift-summary-box");e&&(e.classList.add("opacity-0","pointer-events-none"),t&&t.classList.add("translate-y-8","scale-95"),setTimeout(()=>{e.remove()},280))},jt=()=>{const e=U();if(!e){k("Tidak ada shift kasir yang aktif saat ini.","warning");return}document.getElementById("pos-close-shift-modal")?.remove();const t=(parseFloat(e.startingCash)||0)+(parseFloat(e.cashSales)||0),a=`
    <div id="pos-close-shift-modal" class="fixed inset-0 z-[10001] flex items-center justify-center p-3 sm:p-4 transition-all duration-300 opacity-0 pointer-events-none" style="background:rgba(15,23,42,0.8)">
        <div id="pos-close-shift-box" class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-lg border border-slate-200/90 dark:border-slate-800 overflow-hidden transform translate-y-8 scale-95 transition-all duration-300 flex flex-col max-h-[94vh]">
            <!-- Header Modal -->
            <div class="px-5 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/80 dark:bg-slate-800/40">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-white text-base shadow-sm shrink-0 bg-rose-600">
                        <i class="fa-solid fa-lock"></i>
                    </div>
                    <div>
                        <div class="flex items-center gap-2">
                            <h3 class="text-sm font-black text-slate-800 dark:text-white uppercase tracking-wider">Rekap &amp; Tutup Shift Kasir</h3>
                            <span class="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-800">Z-Report</span>
                        </div>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400">Rekonsiliasi uang kas di laci kasir</p>
                    </div>
                </div>
                <button onclick="window.closePOSCloseShiftModal()" class="w-8 h-8 rounded-xl bg-slate-200/60 dark:bg-slate-800 hover:bg-slate-300 text-slate-600 dark:text-slate-300 flex items-center justify-center text-sm transition-all cursor-pointer">×</button>
            </div>

            <!-- Body Modal -->
            <div class="p-5 space-y-4 overflow-y-auto flex-1">
                <!-- Info Uang Kas Sistem -->
                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                    <div>
                        <span class="text-[10px] uppercase font-black text-slate-400 block tracking-wider">Uang Kas Sistem (Seharusnya di Laci)</span>
                        <div class="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                            Modal Awal: <b>${y(e.startingCash)}</b> + Kas Masuk: <b>${y(e.cashSales||0)}</b>${(e.tempoInstallmentCash||0)>0?` <span class="text-amber-600 dark:text-amber-400 font-semibold">(incl. Cicilan +${y(e.tempoInstallmentCash)})</span>`:""}
                        </div>
                    </div>
                    <div class="text-right">
                        <span id="pos-close-expected-cash" class="text-lg font-black text-slate-900 dark:text-white">${y(t)}</span>
                    </div>
                </div>

                <!-- Pengalih Mode Hitung Fisik (Quick vs Denominasi) -->
                <div class="space-y-2">
                    <div class="flex items-center justify-between">
                        <label class="text-xs font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                            <i class="fa-solid fa-calculator text-emerald-500"></i>
                            <span>Hitung Uang Fisik di Laci</span>
                        </label>
                        <div class="flex items-center bg-slate-200 dark:bg-slate-800 rounded-xl p-0.5 text-[10px]">
                            <button type="button" id="pos-count-tab-quick" onclick="window.setPOSCountMode('quick')" class="px-2.5 py-1 rounded-lg font-black bg-white dark:bg-slate-700 text-slate-800 dark:text-white shadow-xs transition-all cursor-pointer">Input Cepat</button>
                            <button type="button" id="pos-count-tab-denom" onclick="window.setPOSCountMode('denom')" class="px-2.5 py-1 rounded-lg font-bold text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-all cursor-pointer">Lembaran (Denominasi)</button>
                        </div>
                    </div>

                    <!-- Panel Input Cepat -->
                    <div id="pos-count-panel-quick" class="space-y-1.5">
                        <div class="relative">
                            <span class="absolute left-3.5 top-1/2 -translate-y-1/2 font-black text-sm text-slate-400 pointer-events-none">Rp</span>
                            <input id="pos-shift-actual-cash-input" type="number" min="0" step="1000" placeholder="0" 
                                class="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white font-black text-base focus:outline-none focus:border-[var(--color-primary)] transition-all text-right"
                                value="${t}" oninput="window.updatePOSShiftDiscrepancy()">
                        </div>
                    </div>

                    <!-- Panel Kalkulator Denominasi -->
                    <div id="pos-count-panel-denom" class="hidden space-y-2 p-3 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-200/70 dark:border-slate-700/60">
                        <div class="grid grid-cols-2 gap-2 text-xs">
                            <div class="flex items-center justify-between bg-white dark:bg-slate-800 px-2 sm:px-2.5 py-1.5 sm:py-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all">
                                <span class="font-bold text-slate-700 dark:text-slate-200 text-[10px] sm:text-[11px] whitespace-nowrap">Rp 100.000</span>
                                <div class="flex items-center gap-1 shrink-0">
                                    <span class="text-[10px] text-slate-400">×</span>
                                    <input type="number" min="0" id="denom-100k" placeholder="0" class="w-12 sm:w-16 px-1.5 py-1 text-right font-black text-xs border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all" oninput="window.calcPOSDenominations()">
                                </div>
                            </div>
                            <div class="flex items-center justify-between bg-white dark:bg-slate-800 px-2 sm:px-2.5 py-1.5 sm:py-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all">
                                <span class="font-bold text-slate-700 dark:text-slate-200 text-[10px] sm:text-[11px] whitespace-nowrap">Rp 50.000</span>
                                <div class="flex items-center gap-1 shrink-0">
                                    <span class="text-[10px] text-slate-400">×</span>
                                    <input type="number" min="0" id="denom-50k" placeholder="0" class="w-12 sm:w-16 px-1.5 py-1 text-right font-black text-xs border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all" oninput="window.calcPOSDenominations()">
                                </div>
                            </div>
                            <div class="flex items-center justify-between bg-white dark:bg-slate-800 px-2 sm:px-2.5 py-1.5 sm:py-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all">
                                <span class="font-bold text-slate-700 dark:text-slate-200 text-[10px] sm:text-[11px] whitespace-nowrap">Rp 20.000</span>
                                <div class="flex items-center gap-1 shrink-0">
                                    <span class="text-[10px] text-slate-400">×</span>
                                    <input type="number" min="0" id="denom-20k" placeholder="0" class="w-12 sm:w-16 px-1.5 py-1 text-right font-black text-xs border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all" oninput="window.calcPOSDenominations()">
                                </div>
                            </div>
                            <div class="flex items-center justify-between bg-white dark:bg-slate-800 px-2 sm:px-2.5 py-1.5 sm:py-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all">
                                <span class="font-bold text-slate-700 dark:text-slate-200 text-[10px] sm:text-[11px] whitespace-nowrap">Rp 10.000</span>
                                <div class="flex items-center gap-1 shrink-0">
                                    <span class="text-[10px] text-slate-400">×</span>
                                    <input type="number" min="0" id="denom-10k" placeholder="0" class="w-12 sm:w-16 px-1.5 py-1 text-right font-black text-xs border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all" oninput="window.calcPOSDenominations()">
                                </div>
                            </div>
                            <div class="flex items-center justify-between bg-white dark:bg-slate-800 px-2 sm:px-2.5 py-1.5 sm:py-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all">
                                <span class="font-bold text-slate-700 dark:text-slate-200 text-[10px] sm:text-[11px] whitespace-nowrap">Rp 5.000</span>
                                <div class="flex items-center gap-1 shrink-0">
                                    <span class="text-[10px] text-slate-400">×</span>
                                    <input type="number" min="0" id="denom-5k" placeholder="0" class="w-12 sm:w-16 px-1.5 py-1 text-right font-black text-xs border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all" oninput="window.calcPOSDenominations()">
                                </div>
                            </div>
                            <div class="flex items-center justify-between bg-white dark:bg-slate-800 px-2 sm:px-2.5 py-1.5 sm:py-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all">
                                <span class="font-bold text-slate-700 dark:text-slate-200 text-[10px] sm:text-[11px] whitespace-nowrap">Rp 2.000</span>
                                <div class="flex items-center gap-1 shrink-0">
                                    <span class="text-[10px] text-slate-400">×</span>
                                    <input type="number" min="0" id="denom-2k" placeholder="0" class="w-12 sm:w-16 px-1.5 py-1 text-right font-black text-xs border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all" oninput="window.calcPOSDenominations()">
                                </div>
                            </div>
                            <div class="flex items-center justify-between bg-white dark:bg-slate-800 px-2 sm:px-2.5 py-1.5 sm:py-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all">
                                <span class="font-bold text-slate-700 dark:text-slate-200 text-[10px] sm:text-[11px] whitespace-nowrap">Rp 1.000</span>
                                <div class="flex items-center gap-1 shrink-0">
                                    <span class="text-[10px] text-slate-400">×</span>
                                    <input type="number" min="0" id="denom-1k" placeholder="0" class="w-12 sm:w-16 px-1.5 py-1 text-right font-black text-xs border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all" oninput="window.calcPOSDenominations()">
                                </div>
                            </div>
                            <div class="flex items-center justify-between bg-white dark:bg-slate-800 px-2 sm:px-2.5 py-1.5 sm:py-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all">
                                <span class="font-bold text-slate-700 dark:text-slate-200 text-[10px] sm:text-[11px] whitespace-nowrap">Koin / Receh</span>
                                <div class="flex items-center gap-1 shrink-0">
                                    <span class="text-[10px] text-slate-400">Rp</span>
                                    <input type="number" min="0" id="denom-coin" placeholder="0" class="w-14 sm:w-20 px-1.5 py-1 text-right font-black text-xs border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all" oninput="window.calcPOSDenominations()">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Kartu Status Selisih Kas (Live Dynamic Calculation) -->
                <div id="pos-discrepancy-card" class="p-4 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between bg-emerald-50 dark:bg-emerald-950/20 border-emerald-500/40">
                    <div class="flex items-center gap-3">
                        <div id="pos-discrepancy-icon" class="w-10 h-10 rounded-2xl flex items-center justify-center text-white text-base shadow-sm shrink-0 bg-emerald-600">
                            <i class="fa-solid fa-check"></i>
                        </div>
                        <div>
                            <span id="pos-discrepancy-status" class="text-xs font-black uppercase tracking-wider text-emerald-800 dark:text-emerald-300 block">SEIMBANG (PAS)</span>
                            <span id="pos-discrepancy-desc" class="text-[11px] text-emerald-700 dark:text-emerald-400 block">Uang fisik laci kasir cocok dengan transaksi sistem</span>
                        </div>
                    </div>
                    <div class="text-right">
                        <span class="text-[10px] font-bold text-slate-400 block uppercase">Selisih Kas</span>
                        <span id="pos-discrepancy-amount" class="text-base font-black text-emerald-600 dark:text-emerald-400">Rp 0</span>
                    </div>
                </div>

                <!-- Catatan Penutupan Shift -->
                <div class="space-y-1">
                    <label class="block text-xs font-bold text-slate-700 dark:text-slate-200">
                        <i class="fa-regular fa-comment-dots text-slate-400 mr-1"></i>Catatan Penutupan Shift
                    </label>
                    <textarea id="pos-shift-close-notes" rows="2" placeholder="Catatan mengenai kondisi laci, sisa kembalian, atau alasan jika terdapat selisih kas..."
                        class="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)]"></textarea>
                </div>
            </div>

            <!-- Footer Action Buttons -->
            <div class="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 flex items-center gap-2">
                <button onclick="window.closePOSCloseShiftModal()" class="flex-1 py-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 transition-all cursor-pointer">
                    Batal
                </button>
                <button onclick="window.confirmClosePOSShift()" class="flex-[2] py-3 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-black text-xs uppercase tracking-wider shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer">
                    <i class="fa-solid fa-lock"></i>
                    <span>Konfirmasi &amp; Tutup Shift</span>
                </button>
            </div>
        </div>
    </div>`;document.body.insertAdjacentHTML("beforeend",a);const s=c("pos-close-shift-modal"),r=c("pos-close-shift-box");!s||!r||(s.classList.remove("pointer-events-none"),requestAnimationFrame(()=>{s.classList.remove("opacity-0"),r.classList.remove("translate-y-8","scale-95")}),setTimeout(()=>{const o=c("pos-shift-actual-cash-input");o&&(o.focus(),o.select())},250))},Je=()=>{const e=c("pos-close-shift-modal"),t=c("pos-close-shift-box");e&&(e.classList.add("opacity-0","pointer-events-none"),t&&t.classList.add("translate-y-8","scale-95"),setTimeout(()=>{e.remove()},280))},ys=e=>{const t=c("pos-count-tab-quick"),a=c("pos-count-tab-denom"),s=c("pos-count-panel-quick"),r=c("pos-count-panel-denom");e==="quick"?(t&&(t.className="px-2.5 py-1 rounded-lg font-black bg-white dark:bg-slate-700 text-[var(--color-primary)] dark:text-white shadow-xs transition-all cursor-pointer border border-[rgba(var(--color-primary-rgb),0.2)] dark:border-slate-600"),a&&(a.className="px-2.5 py-1 rounded-lg font-bold text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-all cursor-pointer border border-transparent"),s&&s.classList.remove("hidden"),r&&r.classList.add("hidden")):(t&&(t.className="px-2.5 py-1 rounded-lg font-bold text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-all cursor-pointer border border-transparent"),a&&(a.className="px-2.5 py-1 rounded-lg font-black bg-white dark:bg-slate-700 text-[var(--color-primary)] dark:text-white shadow-xs transition-all cursor-pointer border border-[rgba(var(--color-primary-rgb),0.2)] dark:border-slate-600"),s&&s.classList.add("hidden"),r&&r.classList.remove("hidden"),Aa())},Aa=()=>{const e=(parseFloat(c("denom-100k")?.value)||0)*1e5,t=(parseFloat(c("denom-50k")?.value)||0)*5e4,a=(parseFloat(c("denom-20k")?.value)||0)*2e4,s=(parseFloat(c("denom-10k")?.value)||0)*1e4,r=(parseFloat(c("denom-5k")?.value)||0)*5e3,o=(parseFloat(c("denom-2k")?.value)||0)*2e3,i=(parseFloat(c("denom-1k")?.value)||0)*1e3,n=parseFloat(c("denom-coin")?.value)||0,d=e+t+a+s+r+o+i+n,l=c("pos-shift-actual-cash-input");l&&(l.value=d),Oa()},Oa=()=>{const e=U();if(!e)return;const t=(parseFloat(e.startingCash)||0)+(parseFloat(e.cashSales)||0),s=(parseFloat(c("pos-shift-actual-cash-input")?.value)||0)-t,r=c("pos-discrepancy-card"),o=c("pos-discrepancy-icon"),i=c("pos-discrepancy-status"),n=c("pos-discrepancy-desc"),d=c("pos-discrepancy-amount");!r||!o||!i||!n||!d||(s===0?(r.className="p-4 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between bg-emerald-50 dark:bg-emerald-950/20 border-emerald-500/40",o.className="w-10 h-10 rounded-2xl flex items-center justify-center text-white text-base shadow-sm shrink-0 bg-emerald-600",o.innerHTML='<i class="fa-solid fa-check"></i>',i.className="text-xs font-black uppercase tracking-wider text-emerald-800 dark:text-emerald-300 block",i.innerText="SEIMBANG (PAS)",n.className="text-[11px] text-emerald-700 dark:text-emerald-400 block",n.innerText="Uang fisik laci kasir cocok dengan transaksi sistem",d.className="text-base font-black text-emerald-600 dark:text-emerald-400",d.innerText="Rp 0"):s>0?(r.className="p-4 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between bg-amber-50 dark:bg-amber-950/20 border-amber-500/40",o.className="w-10 h-10 rounded-2xl flex items-center justify-center text-white text-base shadow-sm shrink-0 bg-amber-500",o.innerHTML='<i class="fa-solid fa-plus"></i>',i.className="text-xs font-black uppercase tracking-wider text-amber-800 dark:text-amber-300 block",i.innerText="LEBIH (SURPLUS)",n.className="text-[11px] text-amber-700 dark:text-amber-400 block",n.innerText="Terdapat kelebihan uang fisik di laci kasir",d.className="text-base font-black text-amber-600 dark:text-amber-400",d.innerText="+ "+y(s)):(r.className="p-4 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between bg-rose-50 dark:bg-rose-950/20 border-rose-500/40",o.className="w-10 h-10 rounded-2xl flex items-center justify-center text-white text-base shadow-sm shrink-0 bg-rose-600",o.innerHTML='<i class="fa-solid fa-minus"></i>',i.className="text-xs font-black uppercase tracking-wider text-rose-800 dark:text-rose-300 block",i.innerText="KURANG (DEFISIT)",n.className="text-[11px] text-rose-700 dark:text-rose-400 block",n.innerText="Terdapat kekurangan uang fisik di laci kasir",d.className="text-base font-black text-rose-600 dark:text-rose-400",d.innerText="- "+y(Math.abs(s))))},Ss=async()=>{const e=U();if(!e)return;const t=(parseFloat(e.startingCash)||0)+(parseFloat(e.cashSales)||0),a=parseFloat(c("pos-shift-actual-cash-input")?.value)||0,s=a-t,r=c("pos-shift-close-notes")?.value?.trim()||"",o={d100k:parseFloat(c("denom-100k")?.value)||0,d50k:parseFloat(c("denom-50k")?.value)||0,d20k:parseFloat(c("denom-20k")?.value)||0,d10k:parseFloat(c("denom-10k")?.value)||0,d5k:parseFloat(c("denom-5k")?.value)||0,d2k:parseFloat(c("denom-2k")?.value)||0,d1k:parseFloat(c("denom-1k")?.value)||0,coin:parseFloat(c("denom-coin")?.value)||0},i=Date.now(),n=Lt(e.startTime,i),d={...e,status:"closed",endTime:i,endTimeISO:new Date(i).toISOString(),duration:n,expectedCash:t,actualCash:a,difference:s,discrepancyStatus:s===0?"balanced":s>0?"surplus":"deficit",denominations:o,closingNotes:r};dt();try{await Promise.all([j.collection("freshmart").doc("cms_data").collection("pos_shifts").doc(d.id).set(d,{merge:!0}),j.collection("pos_shifts").doc(d.id).set(d,{merge:!0})])}catch(l){console.warn("[POS Shift] Simpan Firestore:",l)}Ge(),Ot(d),Je(),Ma("close"),Ps(d),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge()},Ps=e=>{document.getElementById("pos-closed-success-modal")?.remove();const t=e.difference||0,a=t===0?'<span class="px-2.5 py-1 rounded-xl text-xs font-black bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">PAS (Rp 0)</span>':t>0?`<span class="px-2.5 py-1 rounded-xl text-xs font-black bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300">LEBIH (+${y(t)})</span>`:`<span class="px-2.5 py-1 rounded-xl text-xs font-black bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300">KURANG (-${y(Math.abs(t))})</span>`,s=`
    <div id="pos-closed-success-modal" class="fixed inset-0 z-[10002] flex items-center justify-center p-3 sm:p-4" style="background:rgba(15,23,42,0.85)">
        <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-md border border-slate-200/90 dark:border-slate-800 overflow-hidden text-center p-6 space-y-4">
            <div class="w-16 h-16 rounded-3xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-3xl mx-auto shadow-inner">
                <i class="fa-solid fa-circle-check"></i>
            </div>
            <div>
                <h3 class="text-base font-black text-slate-800 dark:text-white uppercase tracking-wider">Shift Kasir Berhasil Ditutup</h3>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Laporan rekap Z-Report telah tersimpan aman di database toko</p>
            </div>

            <!-- Rekap Kartu Ringkas -->
            <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-xs space-y-2 text-left">
                <div class="flex justify-between"><span>No Shift:</span><span class="font-bold font-mono">#${b(e.shiftNo||e.id)}</span></div>
                <div class="flex justify-between"><span>Kasir:</span><span class="font-bold">${b(e.cashierName)}</span></div>
                <div class="flex justify-between"><span>Durasi:</span><span class="font-bold">${b(e.duration)}</span></div>
                <div class="flex justify-between border-t border-slate-200/60 dark:border-slate-700/60 pt-1.5"><span>Total Omset:</span><span class="font-bold">${y(e.totalSales||0)}</span></div>
                <div class="flex justify-between"><span>Kas Fisik Laci:</span><span class="font-black text-slate-900 dark:text-white">${y(e.actualCash||0)}</span></div>
                <div class="flex justify-between items-center border-t border-slate-200/60 dark:border-slate-700/60 pt-1.5"><span>Status Selisih:</span><div>${a}</div></div>
            </div>

            <!-- Action Buttons -->
            <div class="space-y-2 pt-2">
                <button onclick="window.printShiftSettlementReceipt(window.getLastClosedShift(), false)" class="w-full py-3.5 rounded-2xl text-white font-black text-xs uppercase tracking-wider shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer hover:brightness-105" style="background:linear-gradient(135deg, var(--color-primary-light,#e1b858) 0%, var(--color-primary,#c59b27) 50%, var(--color-primary-dark,#a87f1b) 100%);box-shadow:0 4px 14px rgba(var(--color-primary-rgb),0.35)">
                    <i class="fa-solid fa-eye"></i>
                    <i class="fa-solid fa-print"></i>
                    <span>Preview & Cetak Slip Shift (Z-Report)</span>
                </button>
                <div class="flex items-center gap-2">
                    <button onclick="document.getElementById('pos-closed-success-modal')?.remove(); window.openPOSOpenShiftModal();" class="flex-1 py-3 rounded-2xl bg-[rgba(var(--color-primary-rgb),0.1)] hover:bg-[rgba(var(--color-primary-rgb),0.18)] text-[var(--color-primary)] font-bold text-xs border border-[rgba(var(--color-primary-rgb),0.25)] transition-all cursor-pointer flex items-center justify-center gap-1.5 active:scale-95">
                        <i class="fa-solid fa-plus-circle"></i>
                        <span>Buka Shift Baru</span>
                    </button>
                    <button onclick="document.getElementById('pos-closed-success-modal')?.remove(); if(typeof window.cashierLogout==='function') window.cashierLogout(true);" class="flex-1 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs transition-all cursor-pointer active:scale-95">
                        Selesai &amp; Keluar
                    </button>
                </div>
            </div>
        </div>
    </div>`;document.body.insertAdjacentHTML("beforeend",s)},Ht=(e,t=!1,a=!1)=>{if(!e){k("Data shift tidak ditemukan.","warning");return}window._lastShiftData={shift:e,isXReport:t};const s=typeof ke=="function"?ke():{paperSize:"58mm"};if(!a&&s.directPrint!==!1&&typeof window.printShiftSettlementDirect=="function"){window.printShiftSettlementDirect(e,t);return}const r=typeof window.getPaperCols=="function"?window.getPaperCols(s.paperSize):s.paperSize==="80mm"?48:32,o=r>=40,i=s.headerText||f.store?.name||"TOKO PUTRI",n=f.store?.address||"",d=f.store?.wa||"",l=s.footerText||"Laporan Kasir Resmi Toko Putri",p=o?t?"*** RINGKASAN SHIFT (X-REPORT) ***":"*** REKAP TUTUP SHIFT (Z-REPORT) ***":t?"** RINGKASAN SHIFT (X) **":"** REKAP TUTUP SHIFT (Z) **",x=typeof window.formatCompactDate=="function"?window.formatCompactDate(e.startTime,o):new Date(e.startTime).toLocaleString("id-ID"),w=typeof window.formatCompactDate=="function"?window.formatCompactDate(e.endTime||Date.now(),o):new Date(e.endTime||Date.now()).toLocaleString("id-ID"),g=e.duration||Lt(e.startTime,e.endTime||Date.now()),$=(parseFloat(e.startingCash)||0)+(parseFloat(e.cashSales)||0),T=e.actualCash!==void 0?parseFloat(e.actualCash):$,A=T-$,F=A===0?"SEIMBANG (PAS)":A>0?`LEBIH (+${y(A)})`:`KURANG (-${y(Math.abs(A))})`;document.getElementById("pos-shift-receipt-modal")?.remove(),document.body.insertAdjacentHTML("beforeend",`
    <div id="pos-shift-receipt-modal" class="fixed inset-0 z-[10003] flex items-center justify-center p-3 sm:p-4" style="background:rgba(15,23,42,0.75)">
        <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full ${o?"max-w-[420px]":"max-w-[340px]"} border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[90vh]">
            <div class="p-3.5 sm:p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50">
                <span class="font-bold text-xs text-slate-700 dark:text-slate-200 flex items-center gap-1.5"><i class="fa-solid fa-receipt text-emerald-500"></i>Preview Slip Rekap Shift (${r} Kolom)</span>
                <button onclick="document.getElementById('pos-shift-receipt-modal')?.remove()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-700 dark:hover:text-slate-200 transition-colors flex items-center justify-center cursor-pointer"><i class="fa-solid fa-xmark text-sm"></i></button>
            </div>
            <div id="pos-shift-receipt-paper-box" class="p-4 overflow-y-auto flex-1 font-mono text-[11px] bg-slate-50/60 dark:bg-slate-950 text-slate-800 dark:text-slate-200 space-y-1.5 select-text custom-scrollbar">
                <div class="text-center font-bold text-sm uppercase">${b(i)}</div>
                ${n?`<div class="text-center text-[10px] text-slate-500">${b(n)}</div>`:""}
                ${d?`<div class="text-center text-[10px] text-slate-500">WA: ${b(d)}</div>`:""}
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <div class="text-center font-black text-xs uppercase">${b(p)}</div>
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <div class="flex justify-between"><span>No Shift: <b>#${b(e.shiftNo||e.id)}</b></span><span>${b(x)}</span></div>
                <div class="flex justify-between"><span>Kasir   : ${b(e.cashierName)}</span><span>Durasi: ${b(g)}</span></div>
                <div class="flex justify-between"><span>Selesai : ${b(w)}</span></div>
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <div class="font-bold">RINGKASAN PENJUALAN:</div>
                <div class="flex justify-between"><span>Total Struk</span><span>${e.txCount||0} Trx</span></div>
                <div class="flex justify-between"><span>Total Barang</span><span>${Pa(e.itemCount||0)} Item</span></div>
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-1"></div>
                <div class="flex justify-between"><span>Tunai (Cash)</span><span>${y(e.cashSales||0)}</span></div>
                <div class="flex justify-between"><span>QRIS</span><span>${y(e.qrisSales||0)}</span></div>
                <div class="flex justify-between"><span>Transfer Bank</span><span>${y(e.bankSales||e.transferSales||0)}</span></div>
                <div class="flex justify-between"><span>Tempo (Piutang)</span><span>${y(e.tempoSales||0)}</span></div>
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-1"></div>
                <div class="flex justify-between font-black text-xs pt-0.5"><span>TOTAL OMSET</span><span style="color:var(--color-primary)">${y(e.totalSales||0)}</span></div>
                ${(e.discountTotal||0)>0?`<div class="flex justify-between text-rose-500"><span>Diskon Toko</span><span>-${y(e.discountTotal)}</span></div>`:""}
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <div class="font-bold">REKONSILIASI KAS LACI:</div>
                <div class="flex justify-between"><span>Modal Awal</span><span>${y(e.startingCash)}</span></div>
                <div class="flex justify-between"><span>Penjualan Tunai</span><span>${y((e.cashSales||0)-(e.tempoInstallmentCash||0))}</span></div>
                ${(e.tempoInstallmentCash||0)>0?`
                <div class="flex justify-between text-amber-600"><span>+ Cicilan Piutang</span><span>+${y(e.tempoInstallmentCash)}</span></div>`:""}
                <div class="flex justify-between font-bold"><span>Kas Sistem</span><span>${y($)}</span></div>
                ${t?"":`
                <div class="flex justify-between font-bold"><span>Kas Fisik Dihitung</span><span>${y(T)}</span></div>
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-1"></div>
                <div class="flex justify-between font-black text-xs ${A===0?"text-emerald-600":A>0?"text-amber-600":"text-rose-600"}">
                    <span>SELISIH KAS</span>
                    <span>${F}</span>
                </div>`}
                ${e.closingNotes?`
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-1.5"></div>
                <div class="text-[10px]"><b>Catatan:</b> ${b(e.closingNotes)}</div>`:""}
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <div class="text-center text-[10px] text-slate-400 my-1">${b(l)}</div>
                <div class="grid grid-cols-2 text-center text-[10px] pt-4 pb-2">
                    <div>
                        <div>Kasir Bertugas</div>
                        <div class="pt-8 font-bold">(${b(e.cashierName)})</div>
                    </div>
                    <div>
                        <div>Supervisor / Admin</div>
                        <div class="pt-8 font-bold">( ................ )</div>
                    </div>
                </div>
            </div>
            <div class="p-3 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 flex gap-2">
                <button onclick="window.executeShiftPrintDirect()" class="flex-1 py-3.5 rounded-2xl text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg transition-all active:scale-95 hover:brightness-105" style="background:linear-gradient(135deg, var(--color-primary-light,#e1b858) 0%, var(--color-primary,#c59b27) 50%, var(--color-primary-dark,#a87f1b) 100%);box-shadow:0 4px 14px rgba(var(--color-primary-rgb),0.35)">
                    <i class="fa-solid fa-bolt text-white/90"></i><i class="fa-solid fa-print"></i> Cetak Sekarang
                </button>
            </div>
        </div>
    </div>`)},Dt=()=>{if(window._lastShiftData&&typeof window.printShiftSettlementDirect=="function"){window.printShiftSettlementDirect(window._lastShiftData.shift,window._lastShiftData.isXReport);return}const e=c("pos-shift-receipt-paper-box");e&&(typeof window.renderThermalDOMAndPrint=="function"?window.renderThermalDOMAndPrint(e.innerHTML):window.print())},Ye=()=>{const e=[c("pos-shift-btn-storefront"),c("pos-shift-btn-admin")],t=U();e.forEach(a=>{a&&(t&&t.status==="open"?a.id==="pos-shift-btn-storefront"?a.innerHTML=`
                <button onclick="window.openPOSShiftSummaryModal()" class="h-8 px-2 sm:px-2.5 rounded-xl bg-black/15 hover:bg-black/25 text-white border border-white/20 transition-all cursor-pointer shadow-xs active:scale-95 inline-flex items-center gap-1 sm:gap-1.5 whitespace-nowrap shrink-0" title="Klik untuk lihat ringkasan shift (X-Report)">
                    <i class="fa-solid fa-cash-register text-emerald-300 text-xs"></i>
                    <span class="hidden sm:inline text-xs font-medium">Shift: </span>
                    <b class="text-white text-xs whitespace-nowrap">${y(t.startingCash)}</b>
                </button>`:a.innerHTML=`
                <button onclick="window.openPOSShiftSummaryModal()" class="h-8 px-2.5 sm:px-3 rounded-xl text-xs font-bold bg-[rgba(var(--color-primary-rgb),0.1)] hover:bg-[rgba(var(--color-primary-rgb),0.18)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.25)] inline-flex items-center gap-1.5 transition-all cursor-pointer active:scale-95 whitespace-nowrap shrink-0 shadow-2xs" title="Klik untuk lihat ringkasan shift (X-Report)">
                    <i class="fa-solid fa-cash-register text-xs"></i>
                    <span class="hidden sm:inline font-medium">Shift: </span>
                    <b class="font-black whitespace-nowrap">${y(t.startingCash)}</b>
                </button>`:a.id==="pos-shift-btn-storefront"?a.innerHTML=`
                <button onclick="window.openPOSOpenShiftModal()" class="h-8 px-2.5 sm:px-3 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs inline-flex items-center gap-1.5 transition-all active:scale-95 shadow-xs cursor-pointer border border-white/25 whitespace-nowrap shrink-0" title="Buka shift kasir baru">
                    <span class="w-1.5 h-1.5 rounded-full bg-amber-300 animate-pulse"></span>
                    <i class="fa-solid fa-wallet text-amber-300 text-xs"></i>
                    <span class="text-xs font-black whitespace-nowrap">Buka Shift</span>
                </button>`:a.innerHTML=`
                <button onclick="window.openPOSOpenShiftModal()" class="h-8 px-2.5 sm:px-3 rounded-xl text-xs font-bold bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/40 dark:hover:bg-amber-900/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 inline-flex items-center gap-1.5 transition-all cursor-pointer active:scale-95 animate-pulse whitespace-nowrap shrink-0 shadow-2xs" title="Buka shift kasir baru">
                    <i class="fa-solid fa-wallet text-xs"></i>
                    <span class="whitespace-nowrap">Buka Shift</span>
                </button>`)})},Ts=async e=>{const t=typeof e=="string"?c(e):e;t&&(t.innerHTML=`
    <div class="space-y-4">
        <!-- Top Toolbar Header -->
        <div class="flex items-center justify-between gap-3 pt-1">
            <div class="min-w-0">
                <h3 class="text-sm sm:text-base font-black text-slate-900 dark:text-white flex items-center gap-2.5">
                    <span class="w-8 h-8 rounded-xl flex items-center justify-center text-xs shrink-0 shadow-2xs border border-[rgba(var(--color-primary-rgb),0.25)]" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary)">
                        <i class="fa-solid fa-file-invoice-dollar"></i>
                    </span>
                    <span class="truncate">Laporan Shift Kasir</span>
                </h3>
                <p class="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5 truncate">Rekap Z-Report buka-tutup kasir &amp; audit selisih kas fisik laci</p>
            </div>
            <button onclick="window.loadAdminShiftReports()" class="h-9 px-3.5 sm:px-4 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/80 text-slate-700 dark:text-slate-200 text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shrink-0 shadow-2xs active:scale-95 border border-slate-200/90 dark:border-slate-700/80" title="Segarkan Data Shift">
                <i class="fa-solid fa-arrows-rotate text-[11px]" style="color:var(--color-primary)"></i>
                <span>Segarkan Data</span>
            </button>
        </div>

        <!-- Summary Metrics Banner Container -->
        <div id="admin-shift-metrics-target"></div>

        <!-- Shift Cards Container -->
        <div id="admin-shift-list-target" class="space-y-3">
            <div class="text-center py-12 text-slate-400"><i class="fa-solid fa-spinner fa-spin text-2xl mb-2"></i><p class="text-xs">Memuat laporan shift kasir...</p></div>
        </div>
    </div>`,await It())},It=async()=>{const e=c("admin-shift-list-target"),t=c("admin-shift-metrics-target");if(e)try{const a=await j.collection("freshmart").doc("cms_data").collection("pos_shifts").orderBy("startTime","desc").limit(50).get();if(a.empty){t&&(t.innerHTML=""),e.innerHTML=`
            <div class="text-center py-14 p-6 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-slate-400 dark:text-slate-500">
                <i class="fa-solid fa-clipboard-list text-3xl mb-2"></i>
                <p class="font-bold text-xs">Belum ada riwayat shift kasir tercatat</p>
                <p class="text-[11px] mt-0.5">Shift yang dibuka dan ditutup oleh kasir akan otomatis terarsip di sini.</p>
            </div>`;return}const s=a.docs.map(l=>({id:l.id,...l.data()}));let r=s.length,o=0,i=0,n=0;s.forEach(l=>{l.status==="open"&&o++,i+=parseFloat(l.totalSales)||0;const p=l.actualCash!==void 0?parseFloat(l.actualCash):(parseFloat(l.startingCash)||0)+(parseFloat(l.cashSales)||0);n+=p||0}),t&&(t.innerHTML=`
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5">
                <div class="p-3.5 sm:p-4 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-1.5">
                        <span class="text-[9px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Total Shift</span>
                        <div class="w-8 h-8 rounded-xl flex items-center justify-center text-xs shadow-2xs border border-[rgba(var(--color-primary-rgb),0.25)]" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">
                            <i class="fa-solid fa-receipt"></i>
                        </div>
                    </div>
                    <p class="text-base sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">${r} <span class="text-xs font-bold text-slate-400">Shift</span></p>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">Arsip Rekap Kasir</p>
                </div>

                <div class="p-3.5 sm:p-4 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-1.5">
                        <span class="text-[9px] font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Shift Aktif</span>
                        <div class="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs shadow-2xs border border-emerald-200 dark:border-emerald-800/60">
                            <i class="fa-solid fa-clock-rotate-left"></i>
                        </div>
                    </div>
                    <p class="text-base sm:text-xl font-black text-emerald-600 dark:text-emerald-400 tracking-tight flex items-center gap-1.5">
                        ${o} <span class="text-xs font-bold text-slate-400">Kasir</span>
                        ${o>0?'<span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>':""}
                    </p>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">${o>0?"Sedang Bertransaksi":"Semua Shift Ditutup"}</p>
                </div>

                <div class="p-3.5 sm:p-4 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-1.5">
                        <span class="text-[9px] font-black uppercase tracking-wider" style="color:var(--color-primary)">Total Omset</span>
                        <div class="w-8 h-8 rounded-xl flex items-center justify-center text-xs shadow-2xs border border-[rgba(var(--color-primary-rgb),0.25)]" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">
                            <i class="fa-solid fa-chart-line"></i>
                        </div>
                    </div>
                    <p class="text-base sm:text-lg font-black font-mono tracking-tight" style="color:var(--color-primary)">${y(i)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">Gross Sales Shift</p>
                </div>

                <div class="p-3.5 sm:p-4 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-1.5">
                        <span class="text-[9px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Total Kas Laci</span>
                        <div class="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 flex items-center justify-center text-xs shadow-2xs border border-slate-200 dark:border-slate-600/60">
                            <i class="fa-solid fa-vault"></i>
                        </div>
                    </div>
                    <p class="text-base sm:text-lg font-black font-mono text-slate-900 dark:text-white tracking-tight">${y(n)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">Uang Kas Fisik Terdata</p>
                </div>
            </div>`);const d=s.map(l=>{const p=l.status==="closed",x=l.difference||0,w=p?x===0?'<span class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-black bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 shadow-2xs shrink-0"><i class="fa-solid fa-check text-[10px]"></i> PAS</span>':x>0?`<span class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-black bg-amber-100 dark:bg-amber-950/70 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-800 shadow-2xs shrink-0"><i class="fa-solid fa-arrow-trend-up text-[10px]"></i> LEBIH +${y(x)}</span>`:`<span class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-black bg-rose-100 dark:bg-rose-950/70 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-800 shadow-2xs shrink-0"><i class="fa-solid fa-arrow-trend-down text-[10px]"></i> KURANG -${y(Math.abs(x))}</span>`:'<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 shadow-2xs tracking-wide shrink-0"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>SEDANG BERJALAN</span>',g=l.startTime?new Date(l.startTime).toLocaleString("id-ID",{dateStyle:"medium",timeStyle:"short"}):"-",$=l.endTime?new Date(l.endTime).toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit"})+" WIB":"",T=JSON.stringify(l).replace(/"/g,"&quot;"),A=l.actualCash!==void 0?l.actualCash:(l.startingCash||0)+(l.cashSales||0);return`
            <div class="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-800/95 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:shadow-xs transition-all space-y-3.5">
                <div class="flex items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-700/60 pb-3 flex-wrap sm:flex-nowrap">
                    <div class="flex items-center gap-3 min-w-0">
                        <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-sm text-white shrink-0 shadow-2xs ${p?"bg-slate-800 dark:bg-slate-700":""}" style="${p?"":"background: var(--color-primary); box-shadow: 0 4px 12px rgba(var(--color-primary-rgb), 0.35);"}">
                            <i class="fa-solid ${p?"fa-receipt":"fa-cash-register"}"></i>
                        </div>
                        <div class="min-w-0">
                            <div class="flex items-center gap-2">
                                <span class="font-mono font-black text-xs sm:text-sm text-slate-900 dark:text-white whitespace-nowrap block truncate">#${b(l.shiftNo||l.id)}</span>
                            </div>
                            <span class="text-[11px] text-slate-400 dark:text-slate-500 whitespace-nowrap block truncate mt-0.5">
                                <i class="fa-solid fa-clock text-[10px] mr-1"></i>${g} ${$?"— "+$:"• Aktif"}
                            </span>
                        </div>
                    </div>
                    <div class="flex items-center gap-2 shrink-0">
                        ${w}
                        <button onclick="window.printShiftSettlementReceipt(${T}, ${!p})" class="h-9 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-700/80 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shrink-0 shadow-2xs active:scale-95 border border-slate-200/80 dark:border-slate-600/60 hover:text-[var(--color-primary)]" title="Preview & Cetak Slip Rekap Shift">
                            <i class="fa-solid fa-print text-xs"></i>
                            <span class="hidden sm:inline">Slip Z-Report</span>
                        </button>
                        <button onclick="window.deleteShiftRecord('${l.id}', '${b(l.shiftNo||l.id)}')" class="w-9 h-9 rounded-xl bg-slate-50 hover:bg-rose-50 dark:bg-slate-700/80 dark:hover:bg-rose-950/40 text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 text-xs flex items-center justify-center transition-all cursor-pointer shrink-0 shadow-2xs active:scale-95 border border-slate-200/80 dark:border-slate-600/60 hover:border-rose-200" title="Hapus Data Shift">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                </div>

                <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                    <div class="p-3 rounded-2xl bg-slate-50/90 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/80">
                        <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                            <i class="fa-solid fa-user-tie text-[10px]"></i> Kasir
                        </span>
                        <span class="font-black text-sm text-slate-800 dark:text-slate-100 truncate block mt-1">${b(l.cashierName||"Kasir")}</span>
                        <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500 block mt-0.5">${l.txCount||0} Trx • ${l.itemCount||0} Item</span>
                    </div>
                    <div class="p-3 rounded-2xl bg-slate-50/90 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/80">
                        <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                            <i class="fa-solid fa-hand-holding-dollar text-[10px]"></i> Modal Awal
                        </span>
                        <span class="font-black text-sm text-slate-800 dark:text-slate-100 font-mono block mt-1">${y(l.startingCash||0)}</span>
                        <span class="text-[10px] text-slate-400 block mt-0.5">Uang Kas Buka Shift</span>
                    </div>
                    <div class="p-3 rounded-2xl bg-slate-50/90 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/80">
                        <span class="text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5" style="color:var(--color-primary)">
                            <i class="fa-solid fa-chart-line text-[10px]"></i> Total Omset
                        </span>
                        <span class="font-black text-sm sm:text-base font-mono block mt-1" style="color:var(--color-primary)">${y(l.totalSales||0)}</span>
                        <span class="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 block mt-0.5">Gross Sales Shift</span>
                    </div>
                    <div class="p-3 rounded-2xl bg-slate-50/90 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/80">
                        <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                            <i class="fa-solid fa-vault text-[10px]"></i> Kas Fisik Laci
                        </span>
                        <span class="font-black text-sm sm:text-base font-mono text-slate-900 dark:text-white block mt-1">${y(A)}</span>
                        <span class="text-[10px] font-bold block mt-0.5 ${x===0?"text-emerald-600 dark:text-emerald-400":x>0?"text-amber-600":"text-rose-600"}">
                            ${p?x===0?"Kas Pas & Sesuai":x>0?"Surplus +"+y(x):"Defisit -"+y(Math.abs(x)):"Kas Saat Ini"}
                        </span>
                    </div>
                </div>

                ${l.cashSales>0||l.qrisSales>0||l.bankSales>0||l.tempoSales>0?`
                <div class="flex items-center gap-2 overflow-x-auto pb-1 hide-scrollbar text-[11px] pt-1">
                    <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-0.5">Rincian Bayar:</span>
                    ${l.cashSales?`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 font-bold shrink-0"><i class="fa-solid fa-money-bill-wave text-emerald-500"></i> Tunai: ${y(l.cashSales)}</span>`:""}
                    ${l.qrisSales?`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 font-bold shrink-0"><i class="fa-solid fa-qrcode text-indigo-500"></i> QRIS: ${y(l.qrisSales)}</span>`:""}
                    ${l.bankSales?`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 font-bold shrink-0"><i class="fa-solid fa-building-columns text-blue-500"></i> Transfer: ${y(l.bankSales)}</span>`:""}
                    ${l.tempoSales?`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 font-bold shrink-0 border border-amber-200/60"><i class="fa-solid fa-clock text-amber-500"></i> Tempo: ${y(l.tempoSales)}</span>`:""}
                </div>`:""}

                ${l.closingNotes?`
                <div class="text-xs text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/60 p-3 rounded-2xl border border-slate-200/80 dark:border-slate-800 flex items-start gap-2.5">
                    <i class="fa-solid fa-comment-dots text-slate-400 mt-0.5 shrink-0"></i>
                    <div class="min-w-0">
                        <span class="font-bold text-slate-800 dark:text-slate-200">Catatan Kasir:</span> ${b(l.closingNotes)}
                    </div>
                </div>`:""}
            </div>`}).join("");e.innerHTML=d}catch(a){console.error("[POS Shift] Gagal memuat daftar shift admin:",a),e.innerHTML=`
        <div class="text-center py-10 text-rose-500 text-xs">
            <i class="fa-solid fa-triangle-exclamation text-2xl mb-1"></i>
            <p>Gagal memuat laporan shift: ${b(a.message)}</p>
        </div>`}},Ms=(e,t)=>{os("Hapus Data Shift",`Hapus shift #${t}? Data akan dihapus permanen dari cloud dan tidak bisa dikembalikan.`,async()=>{try{await j.collection("freshmart").doc("cms_data").collection("pos_shifts").doc(e).delete(),k("Data shift berhasil dihapus.","success"),await It()}catch(a){console.error("[POS Shift] Gagal menghapus shift:",a),k("Gagal menghapus: "+a.message,"error")}},"Ya, Hapus")};window.getActiveShift=U;window.saveActiveShift=he;window.clearActiveShift=Ge;window.getLastClosedShift=hs;window.isShiftActive=ve;window.getCurrentCashierIdentity=_e;window.isShiftOwnedByCashier=Re;window.findActiveShiftInCloud=pt;window.syncActiveShiftFromCloud=ge;window.listenActiveShiftCloud=Te;window.detachActiveShiftListener=dt;window.openPOSOpenShiftModal=Y;window.closePOSOpenShiftModal=Fe;window.posSetStartCashPreset=ws;window.posUpdateStartCashChips=$a;window.confirmStartPOSShift=ks;window.recordTransactionToShift=Ca;window.recordTempoPaymentToShift=vs;window.openPOSShiftModal=ae;window.openPOSShiftSummaryModal=ae;window.closePOSShiftSummaryModal=ut;window.openPOSCloseShiftModal=jt;window.closePOSCloseShiftModal=Je;window.setPOSCountMode=ys;window.calcPOSDenominations=Aa;window.updatePOSShiftDiscrepancy=Oa;window.confirmClosePOSShift=Ss;window.printShiftSettlementReceipt=Ht;window.executeShiftPrintDirect=Dt;window.renderShiftHeaderBadge=Ye;window.renderAdminShiftReportView=Ts;window.loadAdminShiftReports=It;window.deleteShiftRecord=Ms;let ia=!1;const La=()=>ia?Promise.resolve():is(()=>import("./pos-variant-sheet-YZpmr26x.js"),__vite__mapDeps([0,1,2,3])).then(()=>{ia=!0});let S=[],me="",ne="",be="",ue="grid";try{const e=localStorage.getItem("pos_view_mode");(e==="list"||e==="grid")&&(ue=e)}catch{}let m={name:"",phone:"",isMember:!1,memberId:null,isNewTempo:!1,paylaterActive:!1,paylaterLimit:0,paylaterUsed:0},W=0,L=null,D="cash",X=0,ee=0,_="rp",B=0,pe="",la=null,He=null,Me=null,ot=null,De=null,it=!0,Mt="environment",Ue=!1,we=null,da="",ca=0;const Rt=e=>{ue=e;try{localStorage.setItem("pos_view_mode",e)}catch{}document.querySelectorAll("#pos-view-btn-grid").forEach(t=>{e==="grid"?(t.style.background="linear-gradient(135deg, var(--color-primary-light, #e1b858) 0%, var(--color-primary, #c59b27) 60%, var(--color-primary-dark, #a87f1b) 100%)",t.className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-white shadow-xs"):(t.style.removeProperty("background"),t.className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-slate-500 hover:text-slate-800 dark:text-slate-400")}),document.querySelectorAll("#pos-view-btn-list").forEach(t=>{e==="list"?(t.style.background="linear-gradient(135deg, var(--color-primary-light, #e1b858) 0%, var(--color-primary, #c59b27) 60%, var(--color-primary-dark, #a87f1b) 100%)",t.className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-white shadow-xs"):(t.style.removeProperty("background"),t.className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-slate-500 hover:text-slate-800 dark:text-slate-400")}),q()},xe=e=>Math.max(0,parseInt(e)||0),Qe=e=>{if(e==null)return 0;typeof e=="string"&&(e=e.replace(",",".").trim());const t=parseFloat(e);return isNaN(t)?0:Math.max(0,parseFloat(t.toFixed(3)))},I=e=>{const t=parseFloat(e)||0;return parseFloat(t.toFixed(3)).toString()},h=e=>ls(e),Ze=()=>parseFloat(f.store?.pointValue)||1e3,ye=()=>Math.max(0,(parseFloat(W)||0)*Ze()),ft=()=>{if(!m.isMember||!m.points)return 0;const e=Math.max(0,parseFloat(m.points)||0),t=L&&parseFloat(L.pointsCost)||0,a=Math.max(0,e-t),s=Ze();if(s<=0)return 0;const r=Math.max(0,te()-se()),o=de(),i=Math.max(0,r-o),n=Math.floor(i/s);return Math.min(a,n)},te=()=>S.reduce((e,t)=>e+t.subtotal,0),de=()=>S.reduce((e,t)=>{const a=t.hpp!=null?parseFloat(t.hpp):Be(t)||0;return e+(parseFloat(a)||0)*(parseFloat(t.qty)||0)},0),se=()=>{const e=te();let t=0;if(_==="percent"){const s=Math.min(100,Math.max(0,parseFloat(B)||0));t=Math.round(e*s/100)}else t=Math.min(e,xe(B||ee));const a=de();if(a>0){const s=Math.max(0,e-a);t>s&&(t=s)}return t},oe=()=>{const e=te(),t=se(),a=ye(),s=Math.max(0,e-t-a);if(typeof window.calcTaxDetails=="function")return window.calcTaxDetails(s);const r=f.store?.ppnEnabled===!0||f.store?.ppnEnabled==="true",o=f.store?.ppnType||"exclusive",i=f.store?.ppnRate!==void 0&&!isNaN(parseFloat(f.store?.ppnRate))?parseFloat(f.store?.ppnRate):11;return{ppnEnabled:r,ppnRate:i,ppnType:o,ppnAmount:0,dppAmount:s,grandTotalAdd:0,ppnShowZero:f.store?.ppnShowZero!==!1,ppnLabel:f.store?.ppnTaxLabel||""}},C=()=>{const e=te(),t=se(),a=ye(),s=Math.max(0,e-t-a),r=oe();let o=s+(r.ppnType==="exclusive"&&r.grandTotalAdd||0);const i=de();return i>0&&o<i&&(o=i),o},ja=()=>X-C(),Ee=e=>{if(!e)return{isManaged:!1,totalStock:0,isOutOfStock:!0,isLowStock:!1,isInactive:!0,isPreorder:!1,poTime:""};if(!(e.isActive!=="false"&&e.isActive!==!1))return{isManaged:!0,totalStock:0,isOutOfStock:!0,isLowStock:!1,isInactive:!0,isPreorder:!1,poTime:""};const a=f?.store?.useStock===!0||f?.store?.useStock==="true",s=!!(e.poTime&&String(e.poTime).trim()),r=s?String(e.poTime).trim():"";if(!a)return{isManaged:!1,totalStock:999999,isOutOfStock:!1,isLowStock:!1,isInactive:!1,isPreorder:s,poTime:r};let o=0;return Array.isArray(e.variants)&&e.variants.length>0?o=e.variants.filter(i=>i&&i.isActive!==!1&&i.isActive!=="false").reduce((i,n)=>i+(n.stock!=null&&parseFloat(n.stock)||0),0):o=parseFloat(e.stock)||0,{isManaged:!0,totalStock:o,isOutOfStock:o<=0,isLowStock:o>0&&o<=5,isInactive:!1,isPreorder:s,poTime:r}},ce=()=>{try{if(typeof window<"u"&&typeof window.checkUserGesture=="function"&&!window.checkUserGesture())return;const e=window.AudioContext||window.webkitAudioContext;if(!e)return;const t=new e,a=t.createOscillator(),s=t.createGain();a.type="sine",a.frequency.setValueAtTime(1400,t.currentTime),s.gain.setValueAtTime(.08,t.currentTime),s.gain.exponentialRampToValueAtTime(1e-4,t.currentTime+.08),a.connect(s),s.connect(t.destination),a.start(),a.stop(t.currentTime+.08),setTimeout(()=>{t.close().catch(()=>{})},150)}catch{}},$s=(e,t)=>{if(!e||!e.wholesale||!e.wholesale.length)return null;const a=[...e.wholesale].sort((s,r)=>r.minQty-s.minQty);for(const s of a)if(t>=parseFloat(s.minQty))return parseFloat(s.price);return null},le=e=>{if(!e.isVariant){const a=(f.products||[]).find(r=>r&&String(r.id)===String(e.id)),s=a?$s(a,e.qty):null;s!==null?(e.basePrice=e.basePrice||e.price,e.price=s,e.isWholesale=!0):(e.basePrice&&(e.price=e.basePrice),e.isWholesale=!1)}e.hpp==null&&(e.hpp=Be(e)||0);const t=parseFloat(e.hpp)||0;if(t>0){const a=Math.max(0,Math.round((e.price-t)*e.qty));xe(e.discount)>a&&(e.discount=a)}else e.discount=Math.min(xe(e.discount),e.price*e.qty);return e.subtotal=Math.max(0,e.price*e.qty-xe(e.discount)),e},Cs=()=>{const e=new Date,t=a=>String(a).padStart(2,"0");return`POS-${e.getFullYear()}${t(e.getMonth()+1)}${t(e.getDate())}-${Date.now().toString(36).toUpperCase()}`},Ha=()=>{He&&clearInterval(He);const e=()=>{const a=new Date().toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit",second:"2-digit"})+" WIB";document.querySelectorAll("#pos-live-clock").forEach(s=>{s.textContent=a})};e(),He=setInterval(e,1e3)},Da=()=>{He&&(clearInterval(He),He=null)};window.stopPOSClock=Da;const bt=()=>{window.__posBarcodeFn&&(document.removeEventListener("keydown",window.__posBarcodeFn),window.__posBarcodeFn=null)},Ia=()=>{bt(),window.__posBarcodeFn=e=>{if(!e||typeof e.key!="string")return;const t=window.curViewName||"";if(!(t==="view-pos-cashier"||t==="view-admin"&&window.cTab==="pos"))return;if(e.key==="F4"){e.preventDefault();const r=c("pos-search-input");r&&(r.focus(),r.select());return}if(e.key==="F6"||e.key==="F7"){e.preventDefault(),gt();return}if(e.key==="F8"){e.preventDefault(),et();return}if(e.key==="F9"){e.preventDefault(),c("pos-camera-scanner-modal")?$e():vt();return}if(e.key==="F10"){e.preventDefault(),ve()?ae():typeof ge=="function"?ge().then(r=>{r&&r.status==="open"?ae():Y()}).catch(()=>Y()):Y();return}const s=document.activeElement?.tagName?.toLowerCase();if(!(s==="input"||s==="textarea"||s==="select"))if(e.key==="Enter"){if(pe&&pe.length>=3){const r=pe.trim().toLowerCase(),o=(f.products||[]).find(i=>i&&i.isActive!=="false"&&i.isActive!==!1&&(i.barcode&&i.barcode.toLowerCase()===r||i.sku&&i.sku.toLowerCase()===r||i.id&&String(i.id).toLowerCase()===r));if(o)mt(o.id)&&(ce(),k(`Ditambahkan: ${o.name}`,"success"));else{const i=c("pos-search-input");i&&(i.value=pe,me=pe,q()),k("Barcode tidak ditemukan di katalog","warning")}pe=""}}else e.key&&e.key.length===1&&(pe=(pe||"")+e.key,clearTimeout(la),la=setTimeout(()=>{pe=""},150))},document.addEventListener("keydown",window.__posBarcodeFn)},mt=e=>{const t=(f.products||[]).find(i=>i&&String(i.id)===String(e));if(!t)return!1;if(!(t.isActive!=="false"&&t.isActive!==!1))return k("Produk ini sedang tidak tersedia","warning"),!1;if(t.variants&&t.variants.length>0)return La().then(()=>{typeof window.openPOSVariantSheet=="function"&&window.openPOSVariantSheet(e)}),!0;const r=Ee(t);if(r.isManaged&&r.isOutOfStock)return k(`Maaf, stok "${t.name}" sedang kosong!`,"warning"),!1;const o=S.find(i=>String(i.id)===String(e)&&!i.isVariant);if(o){const i=parseFloat((o.qty+1).toFixed(3));if(r.isManaged&&i>r.totalStock)return k(`Stok tidak cukup! Tersisa: ${I(r.totalStock)} ${t.unit||"pcs"}`,"warning"),!1;o.qty=i,le(o)}else{const i=parseFloat(t.price)||0;S.push(le({id:t.id,name:t.name,price:i,basePrice:i,hpp:parseFloat(t.hpp)||0,qty:1,unit:t.unit||"pcs",poTime:t.poTime||"",discount:0,subtotal:i,isVariant:!1,isWholesale:!1}))}return ce(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"),N(),!0},Ra=(e,t)=>{const a=(f.products||[]).find(n=>n&&String(n.id)===String(e));if(!a)return!1;if(!(a.isActive!=="false"&&a.isActive!==!1))return k("Produk ini sedang tidak tersedia","warning"),!1;const r=Ee(a);if(r.isManaged&&r.isOutOfStock)return k(`Maaf, stok "${a.name}" sedang kosong!`,"warning"),!1;const o=Qe(t)||1,i=S.find(n=>String(n.id)===String(e)&&!n.isVariant);if(i){const n=parseFloat((i.qty+o).toFixed(3));if(r.isManaged&&n>r.totalStock)return k(`Stok tidak cukup! Tersisa: ${I(r.totalStock)} ${a.unit||"pcs"}`,"warning"),!1;i.qty=n,le(i)}else{if(r.isManaged&&o>r.totalStock)return k(`Stok tidak cukup! Tersisa: ${I(r.totalStock)} ${a.unit||"pcs"}`,"warning"),!1;const n=parseFloat(a.price)||0,d=le({id:a.id,name:a.name,price:n,basePrice:n,hpp:parseFloat(a.hpp)||0,qty:o,unit:a.unit||"pcs",poTime:a.poTime||"",discount:0,subtotal:n*o,isVariant:!1,isWholesale:!1});S.push(d)}return ce(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"),N(),!0},Fa=(e,t,a,s,r=1)=>{const o=(f.products||[]).find(x=>x&&String(x.id)===String(e));if(!o)return!1;if(!(o.isActive!=="false"&&o.isActive!==!1))return k("Produk ini sedang tidak tersedia","warning"),!1;const n=o.variants?.[s];if(n){if(!(n.isActive!==!1&&n.isActive!=="false"))return k("Varian ini sedang tidak tersedia","warning"),!1;if(f.store?.useStock===!0||f.store?.useStock==="true"){const g=parseFloat(n.stock)||0,$=`${e}__v${s}`,T=S.find(u=>u.cartKey===$),A=T&&parseFloat(T.qty)||0,F=Qe(r)||1;if(g<=0)return k(`Maaf, stok varian "${n.name}" sedang kosong!`,"warning"),!1;if(A+F>g)return k(`Stok varian "${n.name}" tidak cukup! Sisa: ${I(g)}`,"warning"),!1}}const d=`${e}__v${s}`,l=Qe(r)||1,p=S.find(x=>x.cartKey===d);if(p)p.qty=parseFloat((p.qty+l).toFixed(3)),le(p);else{const x=`${o.name} — ${t}`,w=parseFloat(n?.hpp!=null?n.hpp:o.hpp)||0;S.push(le({id:e,cartKey:d,name:x,variantName:t,variantIdx:s,price:a,basePrice:a,hpp:w,qty:l,unit:n?.unit||o.unit||"pcs",poTime:o.poTime||"",discount:0,subtotal:a*l,isVariant:!0,isWholesale:!1}))}return ce(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"),N(),!0},Na=(e,t)=>{const a=S.find(r=>(r.cartKey||String(r.id))===String(e));if(!a)return;const s=parseFloat((a.qty+t).toFixed(3));if(s<=0){xt(e);return}if(t>0){const r=(f.products||[]).find(o=>o&&String(o.id)===String(a.id));if(r&&(f.store?.useStock===!0||f.store?.useStock==="true"))if(a.isVariant&&r.variants){const i=r.variants.find(d=>d.name===a.variantName),n=parseFloat(i?.stock)||0;if(s>n){k(`Stok maksimal "${a.name}" hanya ${I(n)}`,"warning");return}}else{const i=Ee(r);if(i.isManaged&&s>i.totalStock){k(`Stok maksimal tersedia: ${I(i.totalStock)} ${r.unit||"pcs"}`,"warning");return}}}a.qty=s,le(a),t>0&&ce(),N()},Ba=(e,t)=>{const a=S.find(o=>(o.cartKey||String(o.id))===String(e));if(!a)return;let s=Qe(t);if(s<=0){xt(e);return}const r=(f.products||[]).find(o=>o&&String(o.id)===String(a.id));if(r&&(f.store?.useStock===!0||f.store?.useStock==="true"))if(a.isVariant&&r.variants){const i=r.variants.find(d=>d.name===a.variantName),n=parseFloat(i?.stock)||0;s>n&&(k(`Stok maksimal "${a.name}" hanya ${I(n)}`,"warning"),s=n)}else{const i=Ee(r);i.isManaged&&s>i.totalStock&&(k(`Stok maksimal tersedia: ${I(i.totalStock)} ${r.unit||"pcs"}`,"warning"),s=i.totalStock)}a.qty=s,le(a),N()},_a=(e,t)=>{const a=S.find(o=>(o.cartKey||String(o.id))===String(e));if(!a)return;const s=xe(t),r=a.hpp!=null?parseFloat(a.hpp):Be(a)||0;if(r>0){const o=Math.max(0,Math.round((a.price-r)*a.qty));if(s>o){const i=fe()?` (HPP ${h(r)})`:"";k(`Diskon ditolak! Tidak boleh di bawah harga modal toko${i}. Maksimal diskon: ${h(o)}`,"warning"),a.discount=o,le(a),N(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("heavy");return}}a.discount=Math.min(s,a.price*a.qty),le(a),N()},xt=e=>{S=S.filter(t=>(t.cartKey||String(t.id))!==String(e)),N(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light")},Ea=()=>{if(S.length===0)return;const e=()=>{S=[],ee=0,B=0,_="rp",W=0,L=null,N(),k("Keranjang kasir dikosongkan.")};typeof window.showConfirm=="function"?window.showConfirm("Kosongkan Keranjang","Hapus semua item dari transaksi saat ini?",e,"Ya, Kosongkan",!0):e()},Xe=(e="hold")=>{try{if(typeof window<"u"&&typeof window.checkUserGesture=="function"&&!window.checkUserGesture())return;const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const a=new t,s=a.createOscillator(),r=a.createGain();s.type="sine";const o=a.currentTime;e==="hold"?(s.frequency.setValueAtTime(659.25,o),s.frequency.exponentialRampToValueAtTime(880,o+.1)):(s.frequency.setValueAtTime(880,o),s.frequency.exponentialRampToValueAtTime(1174.66,o+.1)),r.gain.setValueAtTime(.08,o),r.gain.exponentialRampToValueAtTime(1e-4,o+.16),s.connect(r),r.connect(a.destination),s.start(),s.stop(o+.16),setTimeout(()=>{a.close().catch(()=>{})},200)}catch{}},As=e=>{if(!e)return"";const t=Math.floor((Date.now()-e)/1e3);if(t<45)return"Baru saja";const a=Math.floor(t/60);if(a<60)return`${a} mnt lalu`;const s=Math.floor(a/60);return s<24?`${s} jam lalu`:new Date(e).toLocaleDateString("id-ID",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})};let R=[];try{const e=localStorage.getItem("pos_held_carts");if(e){const t=JSON.parse(e);Array.isArray(t)&&(R=t)}}catch{R=[]}const ht=()=>{try{localStorage.setItem("pos_held_carts",JSON.stringify(R))}catch{}Ce()},Ce=()=>{const e=R.length,t=c("pos-held-btn-storefront"),a=c("pos-held-btn-admin");t&&(e>0?t.innerHTML=`
            <button onclick="window.openPOSHeldModal()" class="h-8 px-2.5 sm:px-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-black inline-flex items-center gap-1.5 transition-all active:scale-95 shadow-md cursor-pointer animate-pulse whitespace-nowrap shrink-0" title="Ada ${e} transaksi antrean tertahan (F8)">
                <i class="fa-solid fa-hourglass-half text-xs"></i>
                <span class="whitespace-nowrap">${e} Parkir</span>
            </button>`:t.innerHTML=`
            <button onclick="window.openPOSHeldModal()" class="h-8 px-2 sm:px-2.5 rounded-xl bg-black/15 hover:bg-black/25 text-white/90 hover:text-white text-xs font-bold inline-flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer whitespace-nowrap shrink-0" title="Daftar Transaksi Tertahan (F8)">
                <i class="fa-solid fa-hourglass-half text-xs"></i>
                <span class="hidden sm:inline whitespace-nowrap">Parkir (0)</span>
            </button>`),a&&(e>0?a.innerHTML=`
            <button onclick="window.openPOSHeldModal()" class="h-8 px-2.5 sm:px-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-black inline-flex items-center gap-1.5 shadow-sm transition-all active:scale-95 cursor-pointer animate-pulse whitespace-nowrap shrink-0" title="Ada ${e} transaksi antrean tertahan (F8)">
                <i class="fa-solid fa-hourglass-half text-xs"></i>
                <span class="whitespace-nowrap">${e} Parkir</span>
            </button>`:a.innerHTML=`
            <button onclick="window.openPOSHeldModal()" class="h-8 px-2.5 sm:px-3 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold inline-flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap shrink-0 shadow-2xs active:scale-95" title="Daftar Transaksi Tertahan (F8)">
                <i class="fa-solid fa-hourglass-half text-xs"></i>
                <span class="whitespace-nowrap">Parkir</span>
            </button>`)},gt=()=>{if(S.length===0){k("Keranjang masih kosong, tidak ada transaksi untuk ditahan.","warning");return}const e=m?.name?`Antrean #${R.length+1} — ${m.name}`:`Antrean #${R.length+1}`,t=parseFloat(S.reduce((s,r)=>s+(parseFloat(r.qty)||0),0).toFixed(3)),a=C();Ke(!0),typeof window.pushModalHistory=="function"&&window.pushModalHistory("posHoldPrompt"),document.getElementById("pos-hold-prompt-modal")?.remove(),document.body.insertAdjacentHTML("beforeend",`
    <div id="pos-hold-prompt-modal" class="fixed inset-0 z-[9999] flex items-center justify-center p-4" style="background:rgba(15,23,42,0.75)">
        <div class="bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl w-full max-w-[380px] sm:max-w-[420px] border border-slate-200/80 dark:border-slate-800 overflow-hidden transform transition-all animate-scaleIn">
            <div class="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/70 dark:bg-slate-800/40">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-2xl bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center text-base font-bold shadow-2xs">
                        <i class="fa-solid fa-pause"></i>
                    </div>
                    <div>
                        <h3 class="font-black text-sm sm:text-base text-slate-900 dark:text-white leading-tight">Parkir / Tahan Transaksi</h3>
                        <p class="text-[10px] text-slate-400 mt-0.5">Simpan antrean sementara (F6)</p>
                    </div>
                </div>
                <button onclick="window.closePOSHoldPrompt()" class="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-white flex items-center justify-center transition-all cursor-pointer">
                    <i class="fa-solid fa-xmark text-sm"></i>
                </button>
            </div>
            <div class="p-5 sm:p-6 space-y-4">
                <div class="p-3.5 bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-800/40 rounded-2xl flex items-center justify-between text-xs">
                    <div>
                        <p class="text-[10px] font-bold text-amber-700 dark:text-amber-300 uppercase tracking-wider">Total Belanjaan</p>
                        <p class="font-black text-slate-800 dark:text-slate-100 text-sm mt-0.5">${I(t)} item</p>
                    </div>
                    <div class="text-right">
                        <p class="text-[10px] font-bold text-amber-700 dark:text-amber-300 uppercase tracking-wider">Total Tagihan</p>
                        <p class="font-black text-sm sm:text-base" style="color:var(--color-primary)">${h(a)}</p>
                    </div>
                </div>
                <div>
                    <label class="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1.5 block">Label / Catatan Antrean Pelanggan</label>
                    <input id="pos-hold-note-input" type="text" value="${b(e)}" placeholder="Contoh: Bpk Budi (ambil barang lagi)..."
                        class="w-full border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3 text-xs sm:text-sm font-semibold bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)] focus:bg-white dark:focus:bg-slate-900 transition-all placeholder:text-slate-400"
                        onkeydown="if(event.key==='Enter') window.posConfirmHoldCart();">
                </div>
            </div>
            <div class="p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 flex gap-2.5">
                <button onclick="window.closePOSHoldPrompt()" class="flex-1 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs sm:text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer active:scale-95">Batal</button>
                <button onclick="window.posConfirmHoldCart()" class="flex-[1.5] py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-black text-xs sm:text-sm shadow-md active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer">
                    <i class="fa-solid fa-pause"></i>
                    <span>Tahan Transaksi</span>
                </button>
            </div>
        </div>
    </div>`),setTimeout(()=>{const s=c("pos-hold-note-input");s&&(s.focus(),s.select())},50)},wt=(e=!1)=>{const t=c("pos-hold-prompt-modal");t&&(!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("posHoldPrompt",!1,()=>t.remove()):t.remove())},Ft=()=>{if(S.length===0)return;const t=(c("pos-hold-note-input")?.value||"").trim()||`Antrean #${R.length+1}`,a={id:`HELD-${Date.now().toString(36).toUpperCase()}`,time:Date.now(),note:t,cart:JSON.parse(JSON.stringify(S)),globalDisc:se(),discountType:_,discountVal:B,customer:{...m},total:C(),subtotal:te(),itemCount:parseFloat(S.reduce((s,r)=>s+(parseFloat(r.qty)||0),0).toFixed(3))};R.unshift(a),ht(),S=[],ee=0,B=0,_="rp",m={name:"",phone:"",isMember:!1,memberId:null,isNewTempo:!1},wt(),N(),q(),Xe("hold"),k(`Antrean "${t}" berhasil diparkir!`,"success")},et=(e=!1)=>{!e&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("posHeldModal"),document.getElementById("pos-held-list-modal")?.remove();const t=R.length,a=t===0?`
        <div class="py-12 px-4 text-center">
            <div class="w-14 h-14 rounded-2xl bg-amber-50 dark:bg-amber-950/30 text-amber-500 flex items-center justify-center mx-auto mb-3 text-2xl shadow-inner">
                <i class="fa-solid fa-hourglass-half"></i>
            </div>
            <h4 class="font-bold text-sm text-slate-800 dark:text-slate-200">Tidak Ada Transaksi Tertahan</h4>
            <p class="text-xs text-slate-400 mt-1 max-w-xs mx-auto leading-relaxed">
                Gunakan tombol <span class="font-bold text-amber-600 dark:text-amber-400">"Tahan"</span> di keranjang kasir (atau tekan F6) untuk memarkir antrean saat pelanggan mengambil barang tambahan.
            </p>
        </div>`:`
        <div class="divide-y divide-slate-100 dark:divide-slate-800">
            ${R.map((s,r)=>{const o=b(s.id),i=(s.cart||[]).slice(0,3).map(d=>`${b(d.name)} (${I(d.qty)}x)`).join(", "),n=(s.cart||[]).length>3?` +${s.cart.length-3} lainnya`:"";return`
                <div class="p-3.5 sm:p-4 hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div class="min-w-0 flex-1">
                        <div class="flex items-center gap-2 mb-1 flex-wrap">
                            <span class="px-2 py-0.5 rounded-lg bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 font-black text-[10px] uppercase">
                                #${r+1}
                            </span>
                            <h4 class="font-black text-xs sm:text-sm text-slate-900 dark:text-white truncate" title="${b(s.note)}">
                                ${b(s.note)}
                            </h4>
                            <span class="text-[10px] text-slate-400">• ${As(s.time)}</span>
                        </div>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                            <i class="fa-solid fa-box-open mr-1 text-[10px] opacity-70"></i>
                            <span>${i}${n}</span>
                        </p>
                        <div class="flex items-center gap-3 mt-1.5 text-xs">
                            <span class="text-slate-500 font-medium">${I(s.itemCount)} item</span>
                            <span class="text-slate-300 dark:text-slate-700">•</span>
                            <span class="font-black" style="color:var(--color-primary)">${h(s.total)}</span>
                            ${(s.globalDisc||0)>0?`<span class="text-[10px] text-rose-500 font-bold">(Disc: ${h(s.globalDisc)})</span>`:""}
                        </div>
                    </div>
                    <div class="flex items-center gap-2 shrink-0">
                        <button onclick="window.posDeleteHeldCart('${o}')" class="w-8 h-8 rounded-xl border border-rose-200 dark:border-rose-900/50 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 flex items-center justify-center text-xs transition-all active:scale-95 cursor-pointer" title="Hapus Antrean">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                        <button onclick="window.posRecallHeldCart('${o}')" class="px-3.5 py-2 rounded-xl text-white font-black text-xs shadow-md active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer" style="background:var(--color-primary)">
                            <i class="fa-solid fa-play text-[10px]"></i>
                            <span>Panggil Antrean</span>
                        </button>
                    </div>
                </div>`}).join("")}
        </div>`;document.body.insertAdjacentHTML("beforeend",`
    <div id="pos-held-list-modal" class="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4" style="background:rgba(15,23,42,0.75)">
        <div class="bg-white dark:bg-slate-900 rounded-t-3xl sm:rounded-3xl shadow-2xl w-full sm:max-w-lg max-h-[85vh] flex flex-col overflow-hidden border border-slate-200/80 dark:border-slate-800">
            <div class="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0 bg-slate-50/70 dark:bg-slate-800/40">
                <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-xl bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center text-sm font-bold shadow-2xs">
                        <i class="fa-solid fa-hourglass-half"></i>
                    </div>
                    <div>
                        <h3 class="font-black text-sm text-slate-900 dark:text-white leading-tight flex items-center gap-2">
                            <span>Daftar Transaksi Tertahan (Parkir)</span>
                            <span class="px-2 py-0.5 rounded-full text-[10px] font-black bg-amber-500 text-white">${t}</span>
                        </h3>
                        <p class="text-[10px] text-slate-400">Panggil kembali belanjaan pelanggan yang diparkir (F8)</p>
                    </div>
                </div>
                <button onclick="window.closePOSHeldModal()" class="w-8 h-8 rounded-xl bg-slate-200/60 dark:bg-slate-700/60 text-slate-500 hover:text-slate-800 dark:hover:text-white text-lg flex items-center justify-center transition-all leading-none cursor-pointer">×</button>
            </div>
            <div class="overflow-y-auto flex-1 max-h-[55vh]">
                ${a}
            </div>
            <div class="p-3 sm:p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 flex justify-between items-center shrink-0">
                <p class="text-[11px] text-slate-400 font-medium">
                    <i class="fa-solid fa-keyboard mr-1"></i>Tekan <kbd class="px-1 py-0.5 bg-slate-200 dark:bg-slate-700 rounded text-[9px] font-mono">F6</kbd> Tahan, <kbd class="px-1 py-0.5 bg-slate-200 dark:bg-slate-700 rounded text-[9px] font-mono">F8</kbd> Antrean
                </p>
                <button onclick="window.closePOSHeldModal()" class="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer">
                    Tutup
                </button>
            </div>
        </div>
    </div>`)},tt=(e=!1)=>{const t=c("pos-held-list-modal");t&&(!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("posHeldModal",!1,()=>t.remove()):t.remove())},Nt=e=>{const t=R.findIndex(a=>a.id===e);if(t===-1){k("Transaksi tertahan tidak ditemukan.","warning");return}if(S.length>0){document.getElementById("pos-recall-confirm-modal")?.remove(),document.body.insertAdjacentHTML("beforeend",`
        <div id="pos-recall-confirm-modal" class="fixed inset-0 z-[10000] flex items-center justify-center p-4" style="background:rgba(15,23,42,0.75)">
            <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-sm border border-slate-200/80 dark:border-slate-800 overflow-hidden">
                <div class="p-5 text-center">
                    <div class="w-14 h-14 rounded-2xl bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto mb-3 text-2xl shadow-inner">
                        <i class="fa-solid fa-triangle-exclamation"></i>
                    </div>
                    <h3 class="font-black text-sm text-slate-900 dark:text-white mb-1">Keranjang Masih Berisi Item</h3>
                    <p class="text-xs text-slate-500 leading-relaxed mb-4">
                        Ada <span class="font-bold text-slate-800 dark:text-slate-200">${S.length} jenis item</span> di transaksi aktif saat ini. Ingin tahan transaksi aktif ke antrean baru atau menimpa?
                    </p>
                    <div class="flex flex-col gap-2">
                        <button onclick="window.posHoldCurrentAndRecall('${b(e)}')" class="w-full py-2.5 rounded-xl text-white font-bold text-xs shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5 active:scale-95 hover:brightness-105" style="background:var(--color-primary)">
                            <i class="fa-solid fa-floppy-disk"></i>
                            <span>Tahan Transaksi Aktif &amp; Panggil</span>
                        </button>
                        <button onclick="window.posOverwriteAndRecall('${b(e)}')" class="w-full py-2 rounded-xl border border-rose-200 dark:border-rose-900 text-rose-600 dark:text-rose-400 font-bold text-xs hover:bg-rose-50 dark:hover:bg-rose-950/20 transition-all cursor-pointer">
                            Timpa Transaksi Aktif
                        </button>
                        <button onclick="document.getElementById('pos-recall-confirm-modal')?.remove()" class="w-full py-2 rounded-xl text-slate-400 text-xs font-medium hover:text-slate-600 transition-all cursor-pointer">
                            Batal
                        </button>
                    </div>
                </div>
            </div>
        </div>`);return}Bt(t)},Bt=e=>{const t=R[e];t&&(S=JSON.parse(JSON.stringify(t.cart||[])),_=t.discountType||"rp",B=t.discountVal!==void 0?t.discountVal:t.globalDisc||0,ee=se(),m=t.customer?{...t.customer}:{name:"",phone:"",isMember:!1,memberId:null,isNewTempo:!1},R.splice(e,1),ht(),tt(),N(),q(),Xe("recall"),k(`Antrean "${t.note}" berhasil dipanggil kembali!`,"success"))},_t=e=>{document.getElementById("pos-recall-confirm-modal")?.remove();const t=m?.name?`Antrean #${R.length+1} — ${m.name}`:`Antrean #${R.length+1}`,a={id:`HELD-${Date.now().toString(36).toUpperCase()}`,time:Date.now(),note:t,cart:JSON.parse(JSON.stringify(S)),globalDisc:se(),discountType:_,discountVal:B,customer:{...m},total:C(),subtotal:te(),itemCount:parseFloat(S.reduce((r,o)=>r+(parseFloat(o.qty)||0),0).toFixed(3))};R.unshift(a);const s=R.findIndex(r=>r.id===e);s!==-1?Bt(s):(ht(),tt())},Et=e=>{document.getElementById("pos-recall-confirm-modal")?.remove();const t=R.findIndex(a=>a.id===e);t!==-1&&Bt(t)},Kt=e=>{const t=R.find(a=>a.id===e);t&&(document.getElementById("pos-delete-confirm-modal")?.remove(),document.body.insertAdjacentHTML("beforeend",`
    <div id="pos-delete-confirm-modal" class="fixed inset-0 z-[10005] flex items-center justify-center p-4" style="background:rgba(15,23,42,0.8)">
        <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-xs border border-slate-200 dark:border-slate-800 p-6 text-center transform transition-all">
            <div class="w-14 h-14 rounded-2xl bg-rose-50 dark:bg-rose-950/40 text-rose-500 border border-rose-200 dark:border-rose-900/50 flex items-center justify-center mx-auto mb-3.5 text-2xl shadow-inner">
                <i class="fa-solid fa-trash-can"></i>
            </div>
            <h4 class="font-black text-sm text-slate-900 dark:text-white mb-1.5">Hapus Antrean Ini?</h4>
            <p class="text-xs text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
                Antrean <span class="font-bold text-slate-800 dark:text-slate-200">"${b(t.note)}"</span> (${t.itemCount} item • ${h(t.total)}) akan dihapus permanen.
            </p>
            <div class="flex gap-2.5">
                <button onclick="document.getElementById('pos-delete-confirm-modal')?.remove()" class="flex-1 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer">
                    Batal
                </button>
                <button onclick="window.posExecuteDeleteHeld('${b(e)}')" class="flex-1 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 active:scale-95 text-xs font-bold text-white shadow-md shadow-rose-600/30 transition-all cursor-pointer flex items-center justify-center gap-1.5">
                    <i class="fa-solid fa-trash-can text-[11px]"></i>
                    <span>Ya, Hapus</span>
                </button>
            </div>
        </div>
    </div>`))},qt=e=>{document.getElementById("pos-delete-confirm-modal")?.remove();const t=R.find(a=>a.id===e);R=R.filter(a=>a.id!==e),ht(),k(`Antrean "${t?.note||""}" berhasil dihapus.`,"info"),et(!0)},Ut=()=>{const e=c("pos-mobile-cart-drawer"),t=c("pos-mobile-cart-sheet");e&&t&&(e.classList.remove("opacity-0","pointer-events-none"),e.classList.add("opacity-100"),t.classList.remove("translate-y-full"),t.classList.add("translate-y-0"),typeof window.pushModalHistory=="function"&&window.pushModalHistory("posCartDrawer"),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},Ke=(e=!1)=>{const t=c("pos-mobile-cart-drawer"),a=c("pos-mobile-cart-sheet");if(t&&a){const s=()=>{a.classList.add("translate-y-full"),a.classList.remove("translate-y-0"),t.classList.add("opacity-0","pointer-events-none"),t.classList.remove("opacity-100")};!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("posCartDrawer",!1,s):s()}},Os=e=>{if(!e)return"";if(e.img&&typeof e.img=="string")return yt(e.img,"w150-rw");const t=(f?.products||[]).find(a=>a&&String(a.id)===String(e.id));return t&&t.img&&typeof t.img=="string"?yt(t.img,"w150-rw"):""},q=()=>{try{if(!f?.products||!f.products.length)try{const n=JSON.parse(localStorage.getItem("freshmart_products")||"null");Array.isArray(n)&&n.length>0&&(f||(window.appData={}),f.products=n)}catch{}const e=Array.isArray(f?.products)?f.products:[],t=e.filter(n=>{if(!n||n.isActive==="false"||n.isActive===!1||ne&&n.category!==ne||be&&(n.subCategory||"").trim().toLowerCase()!==be.toLowerCase())return!1;if(me){const d=String(me).toLowerCase(),l=String(n.name||"").toLowerCase(),p=String(n.barcode||"").toLowerCase(),x=String(n.sku||"").toLowerCase(),w=String(n.category||"").toLowerCase(),g=String(n.subCategory||"").toLowerCase(),$=String(n.brand||"").toLowerCase(),T=Array.isArray(n.variants)&&n.variants.some(A=>(A.name||"").toLowerCase().includes(d)||(A.sku||"").toLowerCase().includes(d)||(A.barcode||"").toLowerCase().includes(d));return l.includes(d)||p.includes(d)||x.includes(d)||w.includes(d)||g.includes(d)||$.includes(d)||T}return!0}),a=e.filter(n=>n&&n.isActive!=="false"&&n.isActive!==!1&&n.category).map(n=>String(n.category).trim()).filter(n=>n.length>0),r=["Semua",...new Set(a)].map(n=>{const d=n==="Semua",l=d?!ne:ne===n;return`<button onclick="window.posCatFilter('${b(d?"":n)}')" class="shrink-0 px-3.5 py-1.5 rounded-xl text-[11px] font-black uppercase tracking-wider border transition-all active:scale-95 shadow-2xs ${l?"text-white border-transparent":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/50"}" style="${l?"background:linear-gradient(135deg, var(--color-primary-light,#e1b858) 0%, var(--color-primary,#c59b27) 60%, var(--color-primary-dark,#a87f1b) 100%);box-shadow:0 2px 8px rgba(var(--color-primary-rgb),0.3)":""}">${b(n)}</button>`}).join("");let o="";if(ne){const n=(f?.categories||[]).find(w=>w.name===ne),d=Array.isArray(n?.subCategories)?n.subCategories:[],l=e.filter(w=>w&&w.isActive!=="false"&&w.isActive!==!1&&w.category===ne),p={};d.forEach(w=>{const g=(w||"").trim();g&&(p[g]=0)}),l.forEach(w=>{const g=(w.subCategory||"").trim();g&&(p[g]=(p[g]||0)+1)});const x=Object.keys(p).sort().map(w=>({name:w,count:p[w]}));x.length>0&&(o=`
                <div class="flex items-center gap-1.5 overflow-x-auto pb-1 hide-scrollbar pt-1.5 mt-1 border-t border-slate-100 dark:border-slate-700/50 w-full">
                    <button onclick="window.posSubCatFilter('')" class="shrink-0 px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase transition-all active:scale-95 border ${be?"bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700":"bg-slate-800 text-white dark:bg-white dark:text-slate-900 border-transparent shadow-2xs"}">Semua Jenis</button>
                    ${x.map(w=>{const g=be.toLowerCase()===w.name.toLowerCase();return`<button onclick="window.posSubCatFilter('${b(w.name).replace(/'/g,"\\'")}')" class="shrink-0 px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all active:scale-95 border flex items-center gap-1 ${g?"bg-[var(--color-primary)] text-white border-transparent shadow-2xs":"bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700"}">
                            <span>${b(w.name)}</span>
                            <span class="text-[9px] px-1 py-0.2 rounded-full ${g?"bg-white/20 text-white":"bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300"}">${w.count}</span>
                        </button>`}).join("")}
                </div>`)}const i=t.length===0?`<div class="col-span-full flex flex-col items-center justify-center py-20 text-slate-400 dark:text-slate-600">
                 <div class="w-16 h-16 rounded-3xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 mb-3 shadow-inner">
                   <i class="fa-solid fa-box-open text-2xl"></i>
                 </div>
                 <p class="font-bold text-sm text-slate-600 dark:text-slate-400">Produk Tidak Ditemukan</p>
                 <p class="text-xs text-slate-400 mt-0.5">Coba gunakan kata kunci pencarian atau kategori lain</p>
               </div>`:t.map(n=>{if(!n)return"";const d=!!(n.img&&typeof n.img=="string"&&n.img.trim()),l=d?yt(n.img,"w300-rw"):"",p=Array.isArray(n.variants)&&n.variants.length>0,x=Array.isArray(n.wholesale)&&n.wholesale.length>0,w=S.filter(M=>M&&String(M.id)===String(n.id)),g=parseFloat(w.reduce((M,P)=>M+(P&&P.qty&&parseFloat(P.qty)||0),0).toFixed(3)),$=b(String(n.id!=null?n.id:"")),T=Ee(n),A=b(String(n.name||"Produk")),F=b(String(n.category||"")),u=parseFloat(n.price)||0;let H="",V="";n.priceNormal&&parseFloat(n.priceNormal)>u&&(H=`<span class="pos-tag-chip pos-tag-promo"><i class="fa-solid fa-tags"></i> -${Math.round((parseFloat(n.priceNormal)-u)/parseFloat(n.priceNormal)*100)}%</span>`,V=`<span class="text-[10px] text-slate-400 line-through font-bold">${h(parseFloat(n.priceNormal))}</span>`);const Ae=T.isPreorder?`<span class="pos-tag-chip pos-tag-po"><i class="fa-solid fa-clock"></i> PO ${b(T.poTime)}</span>`:"",v=`${F||"Produk"}${n.brand?` · ${b(n.brand)}`:""}`;let G="";if(fe()){let M=0,P="";if(p){const Q=(n.variants||[]).map(z=>z.hpp!=null?parseFloat(z.hpp)||0:parseFloat(n.hpp)||0).filter(z=>z>0);if(Q.length>0){const z=Math.min(...Q),K=Math.max(...Q);M=z,P=z===K?h(z):`${h(z)} - ${h(K)}`}else n.hpp!=null&&parseFloat(n.hpp)>0&&(M=parseFloat(n.hpp),P=h(M))}else n.hpp!=null&&parseFloat(n.hpp)>0&&(M=parseFloat(n.hpp),P=h(M));(P||n.hpp!=null&&parseFloat(n.hpp)>0)&&(G=`<span class="pos-hpp-tag" title="Harga Pokok Penjualan (Modal Toko)"><i class="fa-solid fa-coins text-[8px]"></i> Modal: <b>${P||h(parseFloat(n.hpp))}</b></span>`)}const Z=St(n,{size:"sm"}),O=St(n,{size:"md"});return ue==="list"?`
                    <div class="pos-list-item${g>0?" in-cart":""}${T.isOutOfStock?" is-out-of-stock cursor-not-allowed":" cursor-pointer"}" onclick="window.posAddToCart('${$}')">
                        <div class="pos-list-thumb">
                            ${d?`<img width="52" height="52" loading="lazy" decoding="async" src="${b(l)}" alt="${A}" onerror="this.onerror=null;this.style.display='none';this.nextElementSibling.style.display='flex';">
                                   <div class="w-full h-full" style="display:none">${Z}</div>`:Z}
                            ${g>0?`<div class="pos-qty-badge" style="top:2px;right:2px;min-width:18px;height:18px;font-size:9px;border-width:1.5px">${I(g)}</div>`:""}
                        </div>
                        <div style="flex:1;min-width:0" class="flex flex-col justify-center">
                            <!-- Line 1: Kategori & Brand + Chip Operasional (1 baris nowrap) -->
                            <div class="flex items-center gap-1 flex-nowrap overflow-hidden">
                                <span class="text-[9px] uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500 truncate shrink-0 max-w-[80px]">${v}</span>
                                ${H}
                                ${p?'<span class="pos-tag-chip pos-tag-variant shrink-0"><i class="fa-solid fa-layer-group"></i> Varian</span>':""}
                                ${x?'<span class="pos-tag-chip pos-tag-grosir shrink-0"><i class="fa-solid fa-tags"></i> Grosir</span>':""}
                                ${Ae}
                                ${T.isManaged&&!T.isOutOfStock?T.isLowStock?`<span class="pos-tag-chip pos-tag-low shrink-0"><i class="fa-solid fa-fire"></i> ${I(T.totalStock)}</span>`:`<span class="pos-tag-chip pos-tag-stock shrink-0"><i class="fa-solid fa-box"></i> ${I(T.totalStock)}</span>`:""}
                                ${T.isOutOfStock?'<span class="pos-tag-chip pos-tag-low shrink-0"><i class="fa-solid fa-ban"></i> Habis</span>':""}
                            </div>
                            <!-- Line 2: Nama Produk -->
                            <p class="text-xs font-bold text-slate-800 dark:text-slate-100 truncate mt-0.5 leading-snug" title="${A}">${A}</p>
                            <!-- Line 3: Harga Jual & Harga Modal HPP -->
                            <div class="flex items-center gap-2 flex-wrap mt-1">
                                <span style="font-size:12px;font-weight:900;color:var(--color-primary)">${h(u)}</span>
                                ${V}
                                ${G}
                            </div>
                        </div>
                        ${T.isOutOfStock?'<button class="pos-add-btn opacity-40 cursor-not-allowed shrink-0" disabled title="Stok Habis"><i class="fa-solid fa-ban"></i></button>':`<button onclick="event.stopPropagation();window.posAddToCart('${$}')" class="pos-add-btn shrink-0" title="Tambah ke keranjang"><i class="fa-solid fa-plus"></i></button>`}
                    </div>`:`
                <div class="pos-product-card${g>0?" in-cart":""}${T.isOutOfStock?" is-out-of-stock cursor-not-allowed":" cursor-pointer"}" onclick="window.posAddToCart('${$}')">
                    <!-- Kotak Gambar Rasio 1:1 Bersih (Foto Tidak Tertutup Tumpukan Badge) -->
                    <div class="pos-img-box">
                        ${T.isOutOfStock?`
                            <div class="absolute inset-0 bg-slate-900/70 z-20 flex items-center justify-center rounded-xl">
                                <span class="bg-rose-600 text-white text-[9px] font-black px-2.5 py-1 rounded-lg shadow-md uppercase tracking-wider flex items-center gap-1">
                                    <i class="fa-solid fa-ban"></i> HABIS
                                </span>
                            </div>`:""}
                        ${g>0?`<div class="pos-qty-badge">${I(g)}</div>`:""}
                        ${d?`<img width="300" height="300" loading="lazy" decoding="async" src="${b(l)}" alt="${A}"
                                 onerror="this.onerror=null;this.style.display='none';this.nextElementSibling.style.display='flex';">
                               <div class="w-full h-full" style="display:none">${O}</div>`:O}
                    </div>
                    <!-- Info Produk Rapi -->
                    <div class="pos-card-info">
                        <p class="pos-card-cat truncate">${v}</p>
                        <p class="pos-card-name leading-tight line-clamp-2" title="${A}">${A}</p>
                        <!-- Chip Operasional Rapi 1 baris (Diskon / Varian / Grosir / PO / Stok) -->
                        ${H||p||x||T.isPreorder||T.isManaged&&!T.isOutOfStock?`
                        <div class="flex items-center gap-1 mt-1 mb-0.5 flex-wrap">
                            ${H}
                            ${p?'<span class="pos-tag-chip pos-tag-variant"><i class="fa-solid fa-layer-group"></i> Varian</span>':""}
                            ${x?'<span class="pos-tag-chip pos-tag-grosir"><i class="fa-solid fa-tags"></i> Grosir</span>':""}
                            ${Ae}
                            ${T.isManaged&&!T.isOutOfStock?T.isLowStock?`<span class="pos-tag-chip pos-tag-low"><i class="fa-solid fa-fire"></i> Sisa ${I(T.totalStock)}</span>`:`<span class="pos-tag-chip pos-tag-stock"><i class="fa-solid fa-box"></i> ${I(T.totalStock)}</span>`:""}
                        </div>`:""}
                        <div class="pos-card-footer flex items-center justify-between gap-1">
                            <div class="flex flex-col min-w-0 pr-1">
                                <div class="flex items-baseline gap-1.5 flex-wrap">
                                    <span class="pos-card-price">${h(u)}</span>
                                    ${V}
                                </div>
                                <div class="flex items-center gap-1 mt-1">
                                    ${G}
                                </div>
                            </div>
                            ${T.isOutOfStock?'<button class="pos-add-btn opacity-40 cursor-not-allowed shrink-0" disabled title="Stok Habis"><i class="fa-solid fa-ban"></i></button>':`<button onclick="event.stopPropagation();window.posAddToCart('${$}')" class="pos-add-btn shrink-0" title="Tambah ke keranjang"><i class="fa-solid fa-plus"></i></button>`}
                        </div>
                    </div>
                </div>`}).join("");document.querySelectorAll("#pos-cat-filter").forEach(n=>{n.innerHTML=r}),document.querySelectorAll("#pos-subcat-filter").forEach(n=>{n.innerHTML=o,o?n.classList.remove("hidden"):n.classList.add("hidden")}),document.querySelectorAll("#pos-catalog-grid").forEach(n=>{n.className=ue==="list"?"pos-catalog-list-mode":"pos-catalog-grid-mode",n.innerHTML=i})}catch(e){console.error("[POS] renderCatalog error:",e),document.querySelectorAll("#pos-catalog-grid").forEach(t=>{t.innerHTML=`
                <div class="col-span-full flex flex-col items-center justify-center py-16 text-slate-500">
                    <i class="fa-solid fa-triangle-exclamation text-amber-500 text-3xl mb-3"></i>
                    <p class="font-bold text-sm text-slate-700 dark:text-slate-300">Gagal Memuat Katalog Kasir</p>
                    <p class="text-xs text-slate-400 mt-1 mb-4">${b(e.message||"Terjadi kesalahan")}</p>
                    <button onclick="if(typeof window.posRenderCatalog==='function') window.posRenderCatalog(); else if(typeof window.refreshPOSCatalog==='function') window.refreshPOSCatalog();" class="px-4 py-2 rounded-xl text-xs font-bold text-white shadow-md active:scale-95 cursor-pointer" style="background:var(--color-primary)">
                        <i class="fa-solid fa-arrows-rotate mr-1.5"></i> Coba Muat Ulang
                    </button>
                </div>`})}},N=()=>{const e=parseFloat(S.reduce((u,H)=>u+(parseFloat(H.qty)||0),0).toFixed(3)),t=te(),a=C(),s=h(a),r=h(t),o=S.length===0?`<div class="flex flex-col items-center justify-center h-full py-12 text-slate-300 dark:text-slate-600 select-none">
            <div class="w-16 h-16 rounded-3xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 mb-3 shadow-inner">
                <i class="fa-solid fa-cart-shopping text-2xl"></i>
            </div>
            <p class="text-sm font-bold text-slate-600 dark:text-slate-400">Keranjang Kasir Kosong</p>
            <p class="text-xs text-slate-400 mt-1 text-center max-w-[200px]">Pilih produk di katalog atau scan barcode untuk menambah</p>
           </div>`:S.map(u=>{const H=b(String(u.cartKey||u.id)),V=Os(u),Ae=u.isVariant&&u.variantName?b(u.name.replace(` — ${u.variantName}`,"")):b(u.name),v=u.hpp!=null?parseFloat(u.hpp):Be(u)||0,G=v>0?Math.max(0,Math.round((u.price-v)*u.qty)):Math.round(u.price*u.qty),Z=v>0?Math.round(u.subtotal-v*u.qty):0,O=St(u,{size:"thumb"});return`
            <div class="group flex items-start gap-2.5 p-2.5 bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 shadow-xs hover:border-[var(--color-primary)] transition-all">
                <!-- 44px Thumbnail -->
                <div class="w-11 h-11 rounded-xl overflow-hidden shrink-0 border border-slate-200/60 dark:border-slate-700 flex items-center justify-center">
                    ${V?`<img width="44" height="44" loading="lazy" src="${b(V)}" alt="${b(u.name)}" onerror="this.onerror=null; this.style.display='none'; this.nextElementSibling.style.display='flex';" class="w-full h-full object-cover">
                           <div class="w-full h-full" style="display:none">${O}</div>`:O}
                </div>
                <!-- Details -->
                <div class="flex-1 min-w-0 pr-1">
                    <p class="text-xs font-bold text-slate-800 dark:text-slate-100 truncate leading-snug" title="${b(u.name)}">${Ae}</p>
                    <div class="flex items-center gap-1.5 mt-0.5 flex-wrap">
                        ${u.isWholesale?'<span class="inline-flex items-center text-[8px] font-black px-1.5 py-0.5 rounded text-white shadow-2xs" style="background:var(--color-primary)">GROSIR</span>':""}
                        ${u.isVariant?`<span class="inline-flex items-center gap-1 text-[8px] font-black px-1.5 py-0.5 rounded text-white shadow-2xs" style="background:var(--color-primary);opacity:0.95"><i class="fa-solid fa-layer-group text-[7px]"></i>${b(u.variantName||"VARIAN")}</span>`:""}
                        ${u.poTime?`<span class="inline-flex items-center gap-1 text-[8px] font-bold px-1.5 py-0.5 rounded text-amber-700 bg-amber-100 dark:bg-amber-900/30 dark:text-amber-300 border border-amber-200 dark:border-amber-800 shadow-2xs uppercase tracking-wide"><i class="fa-solid fa-clock text-[7px]"></i> PO ${b(u.poTime)}</span>`:""}
                        ${fe()&&v>0?`<span class="inline-flex items-center gap-1 text-[8px] font-black px-1.5 py-0.5 rounded text-amber-950 bg-amber-100 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-300/80 dark:border-amber-700 shadow-2xs" title="Harga Modal (HPP)"><i class="fa-solid fa-coins text-[7px] text-amber-600 dark:text-amber-400"></i>HPP: ${h(v)}</span>`:""}
                        <span class="text-[10px] text-slate-500 font-medium">
                            ${u.isWholesale&&u.basePrice?`<span class="line-through text-slate-400">${h(u.basePrice)}</span> <span class="font-bold" style="color:var(--color-primary)">${h(u.price)}</span>`:h(u.price)}
                        </span>
                    </div>
                    <div class="flex items-center gap-1.5 mt-1.5 flex-wrap">
                        <span class="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Diskon:</span>
                        <input type="number" min="0" ${v>0?`max="${G}"`:""} placeholder="0" value="${u.discount||""}" onchange="window.posSetItemDisc('${H}',this.value)"
                            class="w-16 text-[10px] font-mono font-bold border border-slate-200 dark:border-slate-700 rounded-md px-1.5 py-0.5 bg-slate-50 dark:bg-slate-700/60 text-right focus:outline-none focus:border-[var(--color-primary)] transition-all">
                        ${fe()&&v>0?`<span class="text-[9px] text-amber-600 dark:text-amber-400 font-bold whitespace-nowrap" title="Maksimal diskon agar tidak di bawah harga modal HPP">(Maks: ${h(G)})</span>`:""}
                    </div>
                </div>
                <!-- Stepper & Subtotal -->
                <div class="flex flex-col items-end shrink-0">
                    <div class="flex items-center gap-1">
                        <div class="flex items-center bg-slate-100 dark:bg-slate-700/80 rounded-lg p-0.5 border border-slate-200 dark:border-slate-600 focus-within:border-[var(--color-primary)] transition-colors">
                            <button onclick="window.posUpdateQty('${H}',-1)" class="w-5 h-5 rounded text-slate-600 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-600 font-black text-xs flex items-center justify-center cursor-pointer active:scale-90 transition-all">−</button>
                            <input type="number" step="any" min="0.01" value="${I(u.qty)}" onchange="window.posSetQty('${H}',this.value)"
                                class="w-11 text-center text-[11px] font-black bg-transparent text-slate-800 dark:text-slate-100 focus:outline-none px-0.5">
                            <button onclick="window.posUpdateQty('${H}',1)" class="w-5 h-5 rounded text-slate-600 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-600 font-black text-xs flex items-center justify-center cursor-pointer active:scale-90 transition-all">+</button>
                        </div>
                        <button onclick="window.posRemoveItem('${H}')" class="w-6 h-6 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 flex items-center justify-center text-xs transition-all cursor-pointer" title="Hapus item">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                    <p class="text-xs font-black mt-1.5" style="color:var(--color-primary)">${h(u.subtotal)}</p>
                    ${fe()&&v>0?`<p class="text-[9px] font-bold ${Z>=0?"text-emerald-600 dark:text-emerald-400":"text-rose-500"} mt-0.5" title="Estimasi laba kotor item ini"><i class="fa-solid fa-arrow-trend-up text-[8px] mr-0.5"></i>Untung: ${h(Z)}</p>`:""}
                </div>
            </div>`}).join("");document.querySelectorAll(".pos-cart-items-target").forEach(u=>u.innerHTML=o),document.querySelectorAll(".pos-subtotal-target").forEach(u=>u.textContent=r),document.querySelectorAll(".pos-total-target").forEach(u=>u.textContent=s),document.querySelectorAll(".pos-item-count-target").forEach(u=>u.textContent=I(e));const i=fe(),n=i?de():0,d=h(n),l=i?Math.max(0,a-n):0,p=h(l);document.querySelectorAll(".pos-total-hpp-target").forEach(u=>u.textContent=d),document.querySelectorAll(".pos-total-margin-target").forEach(u=>u.textContent=p),document.querySelectorAll(".pos-hpp-margin-row").forEach(u=>{u.style.display=i?"flex":"none"});const x=se(),w=h(x);document.querySelectorAll(".pos-disc-val-input").forEach(u=>{document.activeElement!==u&&(u.value=B||"")}),document.querySelectorAll(".pos-global-disc-target").forEach(u=>{document.activeElement!==u&&(u.value=B||"")}),document.querySelectorAll(".pos-disc-preview-target").forEach(u=>{x>0?(u.textContent=`- ${w}`,u.classList.remove("hidden"),u.classList.add("text-rose-500")):(u.textContent="",u.classList.add("hidden"))}),document.querySelectorAll(".pos-disc-type-rp").forEach(u=>{_==="rp"?(u.className="pos-disc-type-rp px-2.5 py-0.5 rounded-md transition-all cursor-pointer font-black text-white shadow-xs text-[10px]",u.style.background="var(--color-primary)",u.style.color="#ffffff"):(u.className="pos-disc-type-rp px-2.5 py-0.5 rounded-md transition-all cursor-pointer text-slate-600 dark:text-slate-300 hover:text-slate-900 font-bold text-[10px]",u.style.background="transparent",u.style.color="")}),document.querySelectorAll(".pos-disc-type-pct").forEach(u=>{_==="percent"?(u.className="pos-disc-type-pct px-2.5 py-0.5 rounded-md transition-all cursor-pointer font-black text-white shadow-xs text-[10px]",u.style.background="var(--color-primary)",u.style.color="#ffffff"):(u.className="pos-disc-type-pct px-2.5 py-0.5 rounded-md transition-all cursor-pointer text-slate-600 dark:text-slate-300 hover:text-slate-900 font-bold text-[10px]",u.style.background="transparent",u.style.color="")}),document.querySelectorAll(".pos-disc-prefix").forEach(u=>{u.textContent=_==="percent"?"%":"Rp",u.style.color="var(--color-primary)"});const g=[5,10,15,20,50],$=[2e3,5e3,1e4,25e3,5e4],T=(u,H)=>_===H&&Number(B)===Number(u),A=_==="percent"?`
        ${g.map(u=>{const H=T(u,"percent");return`<button onclick="window.posApplyQuickDiscount(${u},'percent')" 
                class="px-2.5 py-1 rounded-lg text-[10px] cursor-pointer transition-all active:scale-95 ${H?"text-white shadow-xs font-black":"bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700 font-bold"}"
                style="${H?"background:var(--color-primary);border:1px solid var(--color-primary);":""}">${u}%</button>`}).join("")}
        ${B>0?`<button onclick="window.posApplyQuickDiscount(0,'percent')" class="px-2.5 py-1 rounded-lg bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 text-[10px] font-bold text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800 cursor-pointer transition-all active:scale-95"><i class="fa-solid fa-rotate-left mr-1 text-[9px]"></i>Reset</button>`:""}
        `:`
        ${$.map(u=>{const H=T(u,"rp"),V=`${u/1e3}rb`;return`<button onclick="window.posApplyQuickDiscount(${u},'rp')" 
                class="px-2.5 py-1 rounded-lg text-[10px] cursor-pointer transition-all active:scale-95 ${H?"text-white shadow-xs font-black":"bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700 font-bold"}"
                style="${H?"background:var(--color-primary);border:1px solid var(--color-primary);":""}">${V}</button>`}).join("")}
        ${B>0?`<button onclick="window.posApplyQuickDiscount(0,'rp')" class="px-2.5 py-1 rounded-lg bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 text-[10px] font-bold text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800 cursor-pointer transition-all active:scale-95"><i class="fa-solid fa-rotate-left mr-1 text-[9px]"></i>Reset</button>`:""}
        `;document.querySelectorAll(".pos-disc-chips-target").forEach(u=>u.innerHTML=A),document.querySelectorAll(".pos-pay-btn-target").forEach(u=>{u.disabled=S.length===0;const H=u.querySelector(".btn-text");H&&(H.textContent=S.length>0?`BAYAR — ${s}`:"PROSES PEMBAYARAN")}),document.querySelectorAll(".pos-hold-btn-target").forEach(u=>{u.disabled=S.length===0,S.length===0?u.classList.add("opacity-40","cursor-not-allowed"):u.classList.remove("opacity-40","cursor-not-allowed")}),Ce();const F=c("pos-mobile-floating-bar");F&&(S.length>0?(F.classList.remove("translate-y-32","opacity-0","pointer-events-none"),F.classList.add("translate-y-0","opacity-100")):(F.classList.add("translate-y-32","opacity-0","pointer-events-none"),F.classList.remove("translate-y-0","opacity-100"),Ke(!0)))},Ka=()=>{if(S.length===0){k("Keranjang masih kosong!","warning");return}const e=de();if(e>0&&C()<e){k(`Transaksi ditolak! Total tagihan (${h(C())}) tidak boleh di bawah harga modal HPP (${h(e)})!`,"error"),typeof window.triggerHaptic=="function"&&window.triggerHaptic("heavy");return}typeof window.pushModalHistory=="function"&&window.pushModalHistory("posPayment"),m={name:"",phone:"",isMember:!1,memberId:null,isNewTempo:!1},W=0,L=null,D="cash",X=C(),Pe(),at(),document.body.insertAdjacentHTML("beforeend",`
    <div id="pos-pay-modal" class="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4" style="background:rgba(15,23,42,0.75)">
      <div class="bg-white dark:bg-slate-900 rounded-t-3xl sm:rounded-3xl shadow-2xl w-full sm:max-w-md max-h-[94vh] flex flex-col overflow-hidden border border-slate-200/80 dark:border-slate-800">
        <!-- Header -->
        <div class="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0 bg-slate-50/60 dark:bg-slate-800/40">
          <div>
            <h2 class="font-black text-base text-slate-900 dark:text-white flex items-center gap-2">
              <i class="fa-solid fa-cash-register" style="color:var(--color-primary)"></i>
              <span>Proses Pembayaran Kasir</span>
            </h2>
            <div class="flex items-center gap-2 mt-0.5 flex-wrap">
              <span class="text-xs text-slate-500">Total Tagihan: <span class="font-black text-sm" style="color:var(--color-primary)">${h(C())}</span></span>
              ${e>0?`<span class="inline-flex items-center gap-1 text-[10px] font-bold text-amber-950 bg-amber-100 dark:bg-amber-950/60 dark:text-amber-300 px-2 py-0.5 rounded-full border border-amber-300/80 dark:border-amber-700 shadow-2xs"><i class="fa-solid fa-coins text-[8px] text-amber-600 dark:text-amber-400"></i>HPP: ${h(e)}</span>`:""}
            </div>
          </div>
          <button onclick="window.closePayModal()" class="w-9 h-9 rounded-xl bg-slate-200/60 dark:bg-slate-700/60 text-slate-500 hover:text-slate-800 dark:hover:text-white text-lg flex items-center justify-center transition-all leading-none cursor-pointer">×</button>
        </div>

        <!-- Body Scrollable -->
        <div class="p-4 sm:p-5 space-y-4 overflow-y-auto flex-1">
          <!-- Pilih Pelanggan -->
          <div>
            <label class="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1.5 block">Tipe Pelanggan</label>
            <div class="grid grid-cols-3 gap-2 mb-2.5">
              <button onclick="window.setPosCustomerType('umum')" id="pos-ctype-umum" type="button" class="flex flex-col items-center justify-center text-center py-2.5 px-2 rounded-xl text-[10px] font-black uppercase border transition-all cursor-pointer shadow-xs" style="background:var(--color-primary);color:white;border-color:var(--color-primary)"><i class="fa-solid fa-user text-base leading-none mb-1 text-center"></i><span>Umum</span></button>
              <button onclick="window.setPosCustomerType('member')" id="pos-ctype-member" type="button" class="flex flex-col items-center justify-center text-center py-2.5 px-2 rounded-xl text-[10px] font-black uppercase border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-all cursor-pointer"><i class="fa-solid fa-id-card text-base leading-none mb-1 text-center"></i><span>Member</span></button>
              <button onclick="window.setPosCustomerType('tempo')" id="pos-ctype-tempo" type="button" class="flex flex-col items-center justify-center text-center py-2.5 px-2 rounded-xl text-[10px] font-black uppercase border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-all cursor-pointer"><i class="fa-solid fa-hourglass-half text-base leading-none mb-1 text-center"></i><span>Tempo</span></button>
            </div>
            <div id="pos-customer-fields">
              <input id="pos-cust-name" type="text" placeholder="Nama pembeli (opsional)" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)] focus:bg-white">
            </div>
          </div>

          <!-- Metode Bayar -->
          <div>
            <label class="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1.5 block">Metode Pembayaran</label>
            <div class="grid grid-cols-4 gap-1.5 mb-3">
              <button onclick="window.setPosPayMethod('cash')" id="pos-pay-cash" type="button" class="flex flex-col items-center justify-center text-center py-2 px-1 rounded-xl text-[9px] font-black uppercase border transition-all cursor-pointer shadow-xs" style="background:var(--color-primary);color:white;border-color:var(--color-primary)"><i class="fa-solid fa-money-bill-wave text-base leading-none mb-1 text-center"></i><span>Tunai</span></button>
              <button onclick="window.setPosPayMethod('qris')" id="pos-pay-qris" type="button" class="flex flex-col items-center justify-center text-center py-2 px-1 rounded-xl text-[9px] font-black uppercase border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-all cursor-pointer"><i class="fa-solid fa-qrcode text-base leading-none mb-1 text-center"></i><span>QRIS</span></button>
              <button onclick="window.setPosPayMethod('transfer')" id="pos-pay-transfer" type="button" class="flex flex-col items-center justify-center text-center py-2 px-1 rounded-xl text-[9px] font-black uppercase border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-all cursor-pointer"><i class="fa-solid fa-building-columns text-base leading-none mb-1 text-center"></i><span>Bank</span></button>
              <button onclick="window.setPosPayMethod('tempo')" id="pos-pay-tempo" type="button" class="flex flex-col items-center justify-center text-center py-2 px-1 rounded-xl text-[9px] font-black uppercase border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-all cursor-pointer"><i class="fa-solid fa-hourglass-half text-base leading-none mb-1 text-center"></i><span>Tempo</span></button>
            </div>
            <div id="pos-pay-detail"></div>
          </div>
        </div>

        <!-- Footer -->
        <div class="p-4 border-t border-slate-100 dark:border-slate-800 flex gap-2.5 shrink-0 bg-slate-50/60 dark:bg-slate-800/40">
          <button onclick="window.closePayModal()" class="w-1/3 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer">Batal</button>
          <button onclick="window.processPOSTx()" id="pos-process-btn" class="w-2/3 py-3 rounded-2xl text-white font-black text-xs sm:text-sm shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer hover:brightness-105" style="background:linear-gradient(135deg, var(--color-primary-light,#e1b858) 0%, var(--color-primary,#c59b27) 50%, var(--color-primary-dark,#a87f1b) 100%);box-shadow:0 4px 14px rgba(var(--color-primary-rgb),0.35)">
            <i class="fa-solid fa-check-circle"></i>
            <span>Selesaikan Transaksi</span>
          </button>
        </div>
      </div>
    </div>`),Se("cash")},Vt=(e=!1)=>{const t=c("pos-pay-modal");t&&(!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("posPayment",!1,()=>t.remove()):t.remove())},qa=(e,t,a)=>{a.forEach(s=>{const r=c(`${e}-${s}`);r&&(s===t?(r.style.background="var(--color-primary)",r.style.color="white",r.style.borderColor="var(--color-primary)",r.classList.add("shadow-xs")):(r.style.removeProperty("background"),r.style.removeProperty("color"),r.style.removeProperty("border-color"),r.classList.remove("shadow-xs")))})},Se=e=>{const t=c("pos-pay-detail");if(!t)return;const a=C(),s=de(),r=Math.max(0,a-s),o=ye(),i=`
      <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-700/60 mb-2.5 text-xs space-y-1.5">
        <div class="flex justify-between items-center">
          <span class="text-slate-500 font-medium">Subtotal Belanja</span>
          <span class="font-bold font-mono text-xs">${h(te())}</span>
        </div>
        ${se()>0?`
        <div class="flex justify-between items-center text-rose-500 text-[11px]">
          <span>Diskon Toko</span>
          <span class="font-bold font-mono">- ${h(se())}</span>
        </div>`:""}
        ${o>0?`
        <div class="flex justify-between items-center text-emerald-600 dark:text-emerald-400 text-[11px]">
          <span class="flex items-center gap-1 font-bold"><i class="fa-solid fa-tags"></i> Diskon Poin (${W} Pts)</span>
          <span class="font-black font-mono">- ${h(o)}</span>
        </div>`:""}
        ${L?`
        <div class="flex justify-between items-center text-purple-600 dark:text-purple-400 text-[11px]">
          <span class="flex items-center gap-1 font-bold"><i class="fa-solid fa-gift"></i> Klaim Hadiah</span>
          <span class="font-bold truncate max-w-[170px]">${b(L.name)} (-${L.pointsCost} Pts)</span>
        </div>`:""}
        <div class="flex justify-between items-center pt-1.5 border-t border-slate-200/60 dark:border-slate-700/60">
          <span class="text-slate-700 dark:text-slate-200 font-bold">Total Wajib Bayar</span>
          <span class="font-black text-sm" style="color:var(--color-primary)">${h(a)}</span>
        </div>
        ${s>0?`
        <div class="flex justify-between items-center pt-1 border-t border-slate-200/40 dark:border-slate-700/40 text-[10px]">
          <span class="text-slate-400 font-semibold flex items-center gap-1"><i class="fa-solid fa-coins text-amber-500"></i> Total Modal (HPP):</span>
          <span class="font-bold text-amber-600 dark:text-amber-400">${h(s)}</span>
        </div>
        <div class="flex justify-between items-center text-[10px]">
          <span class="text-slate-400 font-semibold flex items-center gap-1"><i class="fa-solid fa-arrow-trend-up text-emerald-500"></i> Estimasi Laba Bersih:</span>
          <span class="font-bold text-emerald-600 dark:text-emerald-400">+ ${h(r)}</span>
        </div>`:""}
      </div>`;if(e==="cash"){const d=[{label:"Uang Pas",val:a,isPas:!0},{label:"10.000",val:1e4},{label:"20.000",val:2e4},{label:"50.000",val:5e4},{label:"100.000",val:1e5},{label:"200.000",val:2e5},{label:"500.000",val:5e5}].map(l=>`
            <button onclick="window.posSetQuickCash(${l.val})" type="button"
                class="px-2.5 py-1.5 rounded-xl text-[11px] font-black border transition-all active:scale-95 ${l.isPas?"text-white border-transparent shadow-xs":"bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]"}"
                style="${l.isPas?"background:var(--color-primary)":""}">
                ${l.isPas?"💵 Uang Pas":`Rp ${l.label}`}
            </button>
        `).join("");t.innerHTML=`
            ${i}
            <div class="space-y-2">
                <label class="text-[10px] font-black uppercase tracking-wider text-slate-400">Nominal Uang Diterima (Rp)</label>
                <div class="relative">
                    <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-black text-slate-400">Rp</span>
                    <input id="pos-paid-input" type="number" min="0" placeholder="${a}" value="${X||""}"
                        class="w-full border-2 rounded-2xl pl-10 pr-4 py-2.5 text-base sm:text-lg font-black bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none text-right transition-all"
                        style="border-color:var(--color-primary)" oninput="window.updatePosChange(this.value)">
                </div>

                <!-- Quick Cash Buttons Grid -->
                <div class="pt-1">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Pilihan Uang Cepat (1-Klik)</p>
                    <div class="grid grid-cols-3 sm:grid-cols-4 gap-1.5">
                        ${d}
                    </div>
                </div>

                <!-- Kembalian Box -->
                <div id="pos-change-box" class="mt-2.5 p-3 rounded-2xl border transition-all flex items-center justify-between ${X>=a?"bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800":"bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800"}">
                    <div>
                        <p class="text-[9px] font-black uppercase tracking-wider text-slate-400">Status Kembalian</p>
                        <p id="pos-change-label" class="text-xs font-bold ${X>=a?"text-emerald-700 dark:text-emerald-400":"text-rose-700 dark:text-rose-400"}">
                            ${X>=a?"Kembalian Uang Pembeli:":"Uang Masih Kurang:"}
                        </p>
                    </div>
                    <span id="pos-change-display" class="text-base font-black ${X>=a?"text-emerald-700 dark:text-emerald-400":"text-rose-600 dark:text-rose-400"}">
                        ${h(Math.abs(ja()))}
                    </span>
                </div>
            </div>
        `}else if(e==="qris"){const n=f.payment?.qrisUrl||"";t.innerHTML=`
          ${i}
          ${n?`<div class="flex flex-col items-center justify-center p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700"><img src="${b(n)}" class="w-48 h-48 object-contain rounded-xl shadow-xs" alt="QRIS"><p class="text-center text-xs font-bold text-slate-600 dark:text-slate-300 mt-2">Arahkan kamera pembeli untuk memindai QRIS</p></div>`:'<div class="p-4 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 text-xs rounded-2xl border border-amber-200 text-center font-bold"><i class="fa-solid fa-triangle-exclamation mr-1.5"></i>QRIS toko belum diatur di menu Pengaturan.</div>'}`}else if(e==="transfer"){const d=(Array.isArray(f.banks)?f.banks:[]).filter(p=>p&&(p.bankName||p.name||p.bank));let l='<option value="">Rekening bank belum diatur di CMS Admin</option>';d.length>0&&(l=d.map(p=>{const x=p.bankName||p.name||p.bank||"Bank",w=p.bankAccount||p.number||p.noRekening||p.account||"",g=p.bankOwner||p.holder||p.atasNama||p.owner||"",$=`${x}${w?" — "+w:""}${g?" a/n "+g:""}`;return`<option value="${b($)}">${b($)}</option>`}).join("")),t.innerHTML=`
          ${i}
          <div class="space-y-2">
            <label class="text-[10px] font-black uppercase tracking-wider text-slate-400 block">Rekening Tujuan Toko</label>
            <div class="relative">
              <select id="pos-bank-sel" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)] transition-all">
                ${l}
              </select>
            </div>
            ${d.length>0?`
              <div class="p-2.5 bg-emerald-50/80 dark:bg-emerald-950/30 rounded-xl border border-emerald-200/80 dark:border-emerald-800/60 text-[11px] text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
                <i class="fa-solid fa-building-columns text-emerald-600 dark:text-emerald-400 shrink-0 text-xs"></i>
                <span>Pastikan pembeli telah mentransfer sesuai tagihan ke rekening di atas sebelum menyelesaikan transaksi.</span>
              </div>
            `:`
              <div class="p-2.5 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800 text-[11px] text-amber-800 dark:text-amber-300 flex items-center gap-2">
                <i class="fa-solid fa-triangle-exclamation text-amber-600 dark:text-amber-400 shrink-0 text-xs"></i>
                <span>Rekening bank belum diatur di menu CMS Admin > Rekening.</span>
              </div>
            `}
          </div>`}else if(e==="tempo"){const n=!!(m.isMember&&m.paylaterActive&&m.paylaterLimit>0),d=n?Math.max(0,(m.paylaterLimit||0)-Math.max(0,m.paylaterUsed||0)):0,l=n&&a>d?a-d:0;t.innerHTML=`
          ${i}
          ${n?`
            <div class="p-3.5 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/40 rounded-2xl border border-emerald-200/80 dark:border-emerald-800/60 mb-2.5 space-y-2">
              <div class="flex items-center justify-between">
                <span class="text-xs font-black text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                  <i class="fa-solid fa-bolt text-emerald-500"></i> Putri PayLater Member
                </span>
                <span class="text-[10px] font-black px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-200">
                  Plafon: ${h(m.paylaterLimit)}
                </span>
              </div>
              <div class="flex justify-between items-center text-xs">
                <span class="text-slate-500 dark:text-slate-400 text-[11px]">Sisa Plafon Tersedia:</span>
                <span class="font-black text-emerald-600 dark:text-emerald-400 font-mono text-sm">${h(d)}</span>
              </div>
              <label class="flex items-center gap-2 pt-1 cursor-pointer select-none border-t border-emerald-200/60 dark:border-emerald-800/40">
                <input type="checkbox" id="pos-use-paylater" ${d>0?"checked":"disabled"} onchange="window.posTogglePaylater(this.checked)" class="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 cursor-pointer">
                <span class="text-xs font-bold text-slate-700 dark:text-slate-200">Gunakan Plafon Putri PayLater</span>
              </label>
              ${l>0?`
                <div class="p-2 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800 text-[10px] text-amber-800 dark:text-amber-300 font-bold flex items-center gap-1.5">
                  <i class="fa-solid fa-circle-exclamation text-amber-500 shrink-0"></i>
                  <span>Total belanja melebihi sisa limit. Wajib DP minimal ${h(l)}</span>
                </div>
              `:""}
            </div>
          `:`
            <div class="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-2xl border border-amber-200 dark:border-amber-700/80 mb-2.5">
              <p class="text-xs font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1.5"><i class="fa-solid fa-hourglass-half"></i> Pembayaran Tempo / Piutang</p>
              <p class="text-[10px] text-amber-700 dark:text-amber-400 mt-1">Transaksi otomatis dicatat sebagai piutang di database toko.</p>
            </div>
          `}
          <label class="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1">${n&&l>0?"Uang Muka / DP Wajib (Rp)":"Uang Muka / DP (Rp) — opsional"}</label>
          <input id="pos-dp-input" type="number" min="0" placeholder="0" value="${l>0?l:0}" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-black text-right bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)]">`}},Ua=e=>{const t=C(),a=c("pos-dp-input"),s=c("pos-dp-input")?.previousElementSibling,r=!!(m.isMember&&m.paylaterActive&&m.paylaterLimit>0),o=r?Math.max(0,(m.paylaterLimit||0)-Math.max(0,m.paylaterUsed||0)):0,i=e&&r&&t>o?t-o:0;a&&(a.value=i>0?i:0),s&&s.tagName==="LABEL"&&(s.textContent=e&&r&&i>0?"Uang Muka / DP Wajib (Rp)":"Uang Muka / DP (Rp) — opsional")};window.posTogglePaylater=Ua;const Va=e=>{m.isMember=e==="member",m.isNewTempo=e==="tempo",qa("pos-ctype",e,["umum","member","tempo"]);const t=c("pos-customer-fields");t&&(e==="umum"?(m.name="",m.phone="",m.memberId=null,m.points=0,t.innerHTML='<input id="pos-cust-name" type="text" placeholder="Nama pembeli (opsional)" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)] focus:bg-white">'):e==="member"?(t.innerHTML=`
          <div class="space-y-2">
            <div class="flex gap-2">
              <div class="relative flex-1">
                <i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
                <input id="pos-cust-phone" type="text" placeholder="Ketik No. HP / Nama / ID Member..."
                  value="${m.isMember?b(m.phone||m.name||""):""}"
                  class="w-full pl-8 pr-3 py-2 text-xs border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)] focus:bg-white transition-all"
                  oninput="window.debouncedLookupPosMember()"
                  onkeydown="if(event.key==='Enter'){event.preventDefault();window.lookupPosMember();}">
              </div>
              <button onclick="window.lookupPosMember()" id="pos-member-lookup-btn" type="button"
                class="px-4 py-2 rounded-xl text-white text-xs font-bold transition-all active:scale-95 flex items-center justify-center gap-1.5 shrink-0 shadow-xs cursor-pointer"
                style="background:var(--color-primary)">
                <i class="fa-solid fa-magnifying-glass"></i>
                <span>Cek</span>
              </button>
            </div>
            <div id="pos-member-result"></div>
          </div>`,Pe().then(()=>{c("pos-cust-phone")?.value?.trim()&&rt()})):e==="tempo"&&(m.isMember=!1,Gt("tempo"),t.innerHTML=`
          <div class="space-y-2">
            <input id="pos-cust-name" type="text" placeholder="Nama Pelanggan / Rekanan *" required class="w-full border border-amber-300 dark:border-amber-600 rounded-xl px-3 py-2 text-xs bg-amber-50/40 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none">
            <input id="pos-cust-phone" type="tel" placeholder="No. WhatsApp Pelanggan *" required class="w-full border border-amber-300 dark:border-amber-600 rounded-xl px-3 py-2 text-xs bg-amber-50/40 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none">
          </div>`))},Gt=e=>{D=e,qa("pos-pay",e,["cash","qris","transfer","tempo"]),Se(e),e==="transfer"&&(!f.banks||!f.banks.length)&&at().then(t=>{D==="transfer"&&t&&t.length>0&&Se("transfer")})},Qt=e=>{X=xe(e);const t=C(),a=X-t,s=c("pos-change-display"),r=c("pos-change-label"),o=c("pos-change-box"),i=c("pos-process-btn");s&&(s.textContent=h(Math.abs(a))),r&&(r.textContent=a>=0?"Kembalian Uang Pembeli:":"Uang Masih Kurang:"),s&&(s.className=`text-base font-black ${a>=0?"text-emerald-700 dark:text-emerald-400":"text-rose-600 dark:text-rose-400"}`),o&&(o.className=`mt-2.5 p-3 rounded-2xl border transition-all flex items-center justify-between ${a>=0?"bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800":"bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800"}`),i&&D==="cash"&&(i.disabled=a<0,i.classList.toggle("opacity-50",a<0))},Wt=e=>{const t=c("pos-paid-input");t&&(t.value=e,Qt(e),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},at=async()=>{if(Array.isArray(f.banks)&&f.banks.length>0)return f.banks;try{const e=await j.collection("freshmart").doc("cms_data").get();if(e.exists){const t=e.data();if(Array.isArray(t?.banks)&&t.banks.length>0)return f.banks=t.banks,f.banks}}catch{}return f.banks||[]},Pe=async()=>{if(f.customers&&f.customers.length>0)return f.customers;try{const e=await j.collection("freshmart").doc("cms_data").collection("customers").get();return f.customers=e.docs.map(t=>({...t.data(),id:t.id,_docId:t.id})),f.customers}catch{return f.customers||[]}},Ga=(e,t)=>{if(!e||!t||!t.length)return[];const a=e.trim().toLowerCase(),s=a.replace(/\D/g,"");let r=s;r.startsWith("62")?r=r.slice(2):r.startsWith("0")&&(r=r.slice(1));const o=[],i=new Set;return t.forEach(n=>{if(!n)return;const d=String(n.id||n._docId||n.phone||"");if(i.has(d))return;const l=String(n.phone||"").replace(/\D/g,"");let p=l;p.startsWith("62")?p=p.slice(2):p.startsWith("0")&&(p=p.slice(1));const x=String(n.name||"").toLowerCase();let w=!1;r.length>=4&&p&&(p===r||p.endsWith(r)||r.endsWith(p)||l.includes(s))&&(w=!0),!w&&(d.toLowerCase()===a||d===s)&&(w=!0),!w&&a.length>=2&&x.includes(a)&&(w=!0),w&&(i.add(d),o.push(n))}),o},Ls=async e=>{if(!e)return null;const t=e.trim(),a=t.replace(/\D/g,"");let s=a;s.startsWith("62")?s=s.slice(2):s.startsWith("0")&&(s=s.slice(1));const r=j.collection("freshmart").doc("cms_data").collection("customers"),i=Array.from(new Set([s?"62"+s:null,s?"0"+s:null,s||null,s?"+62"+s:null,a||null,t].filter(Boolean))).map(async l=>{try{const p=await r.doc(l).get();if(p&&p.exists)return{...p.data(),id:p.id,_docId:p.id}}catch{}return null}),d=(await Promise.all(i)).find(Boolean);if(d){f.customers||(f.customers=[]);const l=f.customers.findIndex(p=>String(p.id||p.phone)===String(d.id||d.phone));return l>-1?f.customers[l]=d:f.customers.push(d),d}try{const l=await r.limit(300).get();if(!l.empty){f.customers=l.docs.map(x=>({...x.data(),id:x.id,_docId:x.id}));const p=Ga(e,f.customers);if(p.length>0)return p[0]}}catch{}return null},st=()=>{const e=c("pos-member-result");if(!e||!m.isMember)return;const t=parseFloat(m.points)||0,a=typeof window.getMemberTier=="function"?window.getMemberTier(t):{badge:"MEMBER RESMI"},s=Ze(),r=ye(),o=ft(),i=(f.rewards||[]).filter(d=>d.isActive!=="false"&&d.isActive!==!1&&(parseFloat(d.stock)||0)>0),n=Math.max(0,t-(W||0));e.innerHTML=`
    <div class="space-y-2.5">
      <!-- Info Member Bar -->
      <div class="p-3 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/30 rounded-2xl border border-emerald-300 dark:border-emerald-700/60 shadow-xs flex items-center justify-between gap-2.5">
        <div class="flex items-center gap-2.5 min-w-0">
          <div class="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs">
            <i class="fa-solid fa-id-card text-base"></i>
          </div>
          <div class="min-w-0">
            <div class="flex items-center gap-1.5 flex-wrap">
              <span class="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-700">${b(a.badge||"VIP")}</span>
              <span class="text-[10px] font-black text-amber-600 dark:text-amber-400 flex items-center gap-0.5"><i class="fa-solid fa-star text-[9px]"></i>${t} Poin</span>
              ${m.paylaterActive&&m.paylaterLimit>0?`
                <span class="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-700 flex items-center gap-1">
                  <i class="fa-solid fa-bolt text-emerald-500"></i> PayLater: ${h(Math.max(0,(m.paylaterLimit||0)-Math.max(0,m.paylaterUsed||0)))}
                </span>
              `:""}
            </div>
            <p class="text-xs font-black text-slate-800 dark:text-white truncate mt-0.5">${b(m.name||"Pelanggan Setia")}</p>
            <p class="text-[10px] text-slate-500 dark:text-slate-400 font-mono">${b(m.phone||"")}</p>
          </div>
        </div>
        <button onclick="window.resetPosMember()" type="button" class="shrink-0 px-2.5 py-1.5 rounded-xl text-[10px] font-bold text-slate-600 hover:text-rose-600 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-all cursor-pointer" title="Ganti Member">
          <i class="fa-solid fa-rotate-left mr-1"></i>Ganti
        </button>
      </div>

      <!-- PANEL LOYALITAS KASIR: TUKAR POIN DISKON & KLAIM REWARD -->
      ${t>0?`
      <div class="p-3 bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-3 shadow-xs">
        <!-- 1. Tukar Poin Jadi Diskon Belanja Langsung -->
        <div>
          <div class="flex items-center justify-between text-xs mb-1.5">
            <span class="font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
              <i class="fa-solid fa-tags text-emerald-500"></i>
              <span>Tukar Poin Diskon Belanja</span>
            </span>
            <span class="text-[10px] text-slate-400 font-semibold font-mono">1 Poin = ${h(s)}</span>
          </div>

          ${W>0?`
          <div class="p-2.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-between gap-2">
            <div class="text-xs">
              <span class="font-bold text-emerald-700 dark:text-emerald-300">Potongan Belanja:</span>
              <span class="font-black font-mono text-emerald-600 dark:text-emerald-400 ml-1">-${h(r)}</span>
              <span class="text-[10px] text-slate-500 ml-1">(${W} Poin)</span>
            </div>
            <button type="button" onclick="window.setPosPointsRedeemed(0)" class="text-[10px] font-bold text-rose-500 hover:underline cursor-pointer">
              Batal
            </button>
          </div>
          `:`
          <div class="space-y-2">
            <div class="flex gap-1.5 flex-wrap">
              ${[10,20,50].map(d=>d>o?"":`
                <button type="button" onclick="window.setPosPointsRedeemed(${d})" class="px-2.5 py-1.5 rounded-lg text-[10px] font-bold bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 dark:bg-slate-700 dark:hover:bg-emerald-900/40 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 transition-all cursor-pointer">
                  Tukar ${d} Pts (-${h(d*s)})
                </button>
                `).join("")}
              ${o>0?`
              <button type="button" onclick="window.setPosPointsRedeemed(${o})" class="px-2.5 py-1.5 rounded-lg text-[10px] font-bold bg-emerald-600 text-white hover:bg-emerald-700 transition-all cursor-pointer shadow-xs">
                Maksimal (${o} Pts)
              </button>
              `:""}
            </div>
            ${o<=0?`
            <p class="text-[10px] text-slate-400 italic">* Batas harga modal HPP atau saldo poin telah tercapai.</p>
            `:""}
          </div>
          `}
        </div>

        <!-- 2. Klaim Hadiah Katalog Langsung di Kasir -->
        ${i.length>0?`
        <div class="pt-2.5 border-t border-slate-100 dark:border-slate-700/60">
          <div class="flex items-center justify-between text-xs mb-1.5">
            <span class="font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
              <i class="fa-solid fa-gift text-purple-500"></i>
              <span>Klaim Hadiah Katalog Reward</span>
            </span>
            <span class="text-[10px] text-slate-400 font-semibold">Tersisa: ${n} Poin</span>
          </div>

          ${L?`
          <div class="p-2.5 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800/60 flex items-center justify-between gap-2">
            <div class="text-xs min-w-0">
              <span class="font-bold text-purple-800 dark:text-purple-300 block truncate">🎁 ${b(L.name)}</span>
              <span class="text-[10px] text-purple-600 dark:text-purple-400 font-mono">Ditukar dengan ${L.pointsCost} Poin</span>
            </div>
            <button type="button" onclick="window.deselectPosReward()" class="text-[10px] font-bold text-rose-500 hover:underline cursor-pointer shrink-0">
              Batal
            </button>
          </div>
          `:`
          <div class="relative">
            <select onchange="if(this.value){window.selectPosReward(this.value);}else{window.deselectPosReward();}" class="w-full text-xs py-2 pl-3 pr-8 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)]">
              <option value="">-- Pilih Hadiah Member (Opsional) --</option>
              ${i.map(d=>{const l=parseFloat(d.pointsCost)||0,p=l<=n;return`
                <option value="${d.id}" ${p?"":"disabled"}>
                  ${b(d.name)} (${l} Poin) ${p?"":"[Poin Kurang]"}
                </option>
                `}).join("")}
            </select>
          </div>
          `}
        </div>
        `:""}
      </div>
      `:""}
    </div>`},Qa=e=>{const t=ft();W=Math.min(t,Math.max(0,parseInt(e)||0)),st(),Se(D);const s=document.querySelector("#pos-pay-modal .text-xs.text-slate-500 .font-black");s&&(s.textContent=h(C()))},Wa=e=>{const t=(f.rewards||[]).find(o=>String(o.id)===String(e));if(!t)return;const a=parseFloat(t.pointsCost)||0,s=Math.max(0,(parseFloat(m.points)||0)-(W||0));if(a>s){k("Poin member tidak cukup untuk hadiah ini!","warning");return}L={id:t.id,name:t.name,pointsCost:a},k(`Hadiah "${t.name}" dipilih!`,"success"),st(),Se(D);const r=document.querySelector("#pos-pay-modal .text-xs.text-slate-500 .font-black");r&&(r.textContent=h(C()))},za=()=>{L=null,st(),Se(D);const e=document.querySelector("#pos-pay-modal .text-xs.text-slate-500 .font-black");e&&(e.textContent=h(C()))},ct=e=>{m.isMember=!0,m.name=e.name||"Member Toko",m.phone=e.phone||"",m.memberId=e.id||e._docId||e.phone,m.points=parseFloat(e.points)||0,W=0,L=null,m.paylaterActive=!!e.paylaterActive,m.paylaterLimit=Math.max(0,parseFloat(e.paylaterLimit)||0),m.paylaterUsed=Math.max(0,parseFloat(e.paylaterUsed)||0);const t=c("pos-cust-phone");t&&(t.value=e.phone||e.name||""),st(),Se(D),k(`Member terdeteksi: ${e.name} (${m.points} Poin)`,"success")},zt=e=>{const a=(f.customers||[]).find(s=>s&&String(s.id||s._docId||s.phone)===String(e));a&&ct(a)},Jt=()=>{m.isMember=!1,m.name="",m.phone="",m.memberId=null,m.points=0,W=0,L=null,m.paylaterActive=!1,m.paylaterLimit=0,m.paylaterUsed=0;const e=c("pos-cust-phone");e&&(e.value="",e.focus());const t=c("pos-member-result");t&&(t.innerHTML=""),Se(D)};let pa=null;const Yt=()=>{clearTimeout(pa);const e=c("pos-cust-phone")?.value?.trim()||"";if(!e){if(!m.memberId){const s=c("pos-member-result");s&&(s.innerHTML="")}return}const t=e.replace(/\D/g,"");!(Array.isArray(f.customers)&&f.customers.length>0)&&t.length<10&&e.length<8||(pa=setTimeout(()=>{rt()},350))},rt=async()=>{const t=c("pos-cust-phone")?.value?.trim()||"";if(!t){k("Masukkan nomor HP atau nama member","warning");return}const a=c("pos-member-result"),s=c("pos-member-lookup-btn");s&&(s.disabled=!0,s.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i>'),a&&(a.innerHTML='<div class="p-2.5 text-center text-xs text-slate-400"><i class="fa-solid fa-spinner fa-spin mr-1.5"></i>Memeriksa database member...</div>');try{await Pe();const r=Ga(t,f.customers||[]);if(r.length===1)ct(r[0]);else if(r.length>1)a.innerHTML=`
              <div class="space-y-1.5 max-h-44 overflow-y-auto pr-1">
                <p class="text-[10px] font-bold text-slate-500 mb-1">Ditemukan ${r.length} member (klik untuk memilih):</p>
                ${r.map(o=>`
                  <button onclick="window.selectPosMember('${b(o.id||o._docId||o.phone)}')" type="button"
                    class="w-full text-left p-2 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 border border-slate-200 dark:border-slate-700 hover:border-emerald-400 transition-all flex items-center justify-between gap-2 cursor-pointer">
                    <div class="min-w-0">
                      <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${b(o.name||"Member")}</p>
                      <p class="text-[10px] text-slate-500 dark:text-slate-400 font-mono">${b(o.phone||"")}</p>
                    </div>
                    <span class="text-[10px] font-black text-amber-500 shrink-0"><i class="fa-solid fa-star text-[9px]"></i> ${parseFloat(o.points)||0} Poin</span>
                  </button>
                `).join("")}
              </div>
            `;else{const o=await Ls(t);if(o)ct(o);else{m.isMember=!1,m.name="",m.memberId=null,m.points=0;const n=t.replace(/\D/g,"").length>=8;a.innerHTML=`
                  <div class="p-3 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs space-y-1">
                    <p class="font-bold flex items-center gap-1.5"><i class="fa-solid fa-circle-info"></i> Member Tidak Ditemukan</p>
                    <p class="text-[11px] text-amber-700 dark:text-amber-400">Tidak ada member ditemukan untuk "<b>${b(t)}</b>".</p>
                    ${n?"":`
                      <p class="text-[10px] text-amber-600/90 dark:text-amber-400/80 pt-1 border-t border-amber-200 dark:border-amber-800/60">
                        <i class="fa-solid fa-lightbulb mr-1 text-amber-500"></i><b>Tips Kasir:</b> Masukkan nomor WhatsApp/HP member (contoh: <code>0812...</code>) untuk verifikasi instan.
                      </p>
                    `}
                  </div>`}}}catch(r){console.error("[POS] Error lookupPosMember:",r),a&&(a.innerHTML=`<p class="text-xs text-rose-500 p-2">Gagal memeriksa data: ${b(r.message||"Koneksi error")}</p>`)}finally{s&&(s.disabled=!1,s.innerHTML='<i class="fa-solid fa-magnifying-glass mr-1.5"></i><span>Cek</span>')}},Ja=async()=>{if(S.length===0){k("Keranjang kosong!","warning");return}const e=de();if(e>0&&C()<e){k(`Transaksi ditolak! Total transaksi (${h(C())}) tidak boleh di bawah total harga modal HPP (${h(e)})!`,"error"),typeof window.triggerHaptic=="function"&&window.triggerHaptic("heavy");return}const t=m.isMember?m.name||"Member Toko":c("pos-cust-name")?.value?.trim()||"Pelanggan Umum",a=m.isMember?m.phone||c("pos-cust-phone")?.value?.trim()||"":c("pos-cust-phone")?.value?.trim()||"";if(m.isNewTempo&&!a){k("No. HP wajib diisi untuk tempo!","warning");return}if(D==="cash"&&(X=xe(c("pos-paid-input")?.value||0),X<C())){k(`Uang kurang! Minimal ${h(C())}`,"warning");return}m.name=t,m.phone=a;const s=D==="tempo"?xe(c("pos-dp-input")?.value||0):0,r=D==="transfer"&&c("pos-bank-sel")?.value||"",o=D==="tempo"&&!!(m.isMember&&m.paylaterActive&&c("pos-use-paylater")?.checked),i=o?Math.max(0,(m.paylaterLimit||0)-Math.max(0,m.paylaterUsed||0)):0;if(o){const p=C()>i?C()-i:0;if(s<p){k(`DP tidak mencukupi limit PayLater! Minimal DP: ${h(p)}`,"warning");return}}const n=o?Math.min(C()-s,i):0,d=c("pos-process-btn");d&&(d.disabled=!0,d.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i>Memproses...');const l=f.store?.useStock===!0||f.store?.useStock==="true";if(l)for(const p of S){const x=(f.products||[]).find(g=>String(g.id)===String(p.id));if(!x)continue;const w=parseFloat(p.qty)||0;if(p.variantName&&x.variants){const g=(x.variants||[]).find(T=>T.name===p.variantName),$=parseFloat(g&&g.stock!==void 0?g.stock:0);if($<w){k(`Stok ${p.name} (${p.variantName}) tidak cukup! Sisa: ${$}`,"warning"),d&&(d.disabled=!1,d.innerHTML='<i class="fa-solid fa-check-circle mr-2"></i>Selesaikan Transaksi');return}}else{const g=parseFloat(x.stock!==void 0?x.stock:0);if(g<w){k(`Stok ${p.name} tidak cukup! Sisa: ${g}`,"warning"),d&&(d.disabled=!1,d.innerHTML='<i class="fa-solid fa-check-circle mr-2"></i>Selesaikan Transaksi');return}}}try{const p=Cs(),x=typeof window.getCashierSession=="function"?window.getCashierSession():null,w=x?.name||f.store?.name||"Kasir",g=x?.uid||window.__currentAdminUid||"admin",$=new Date().toISOString(),T=qe.firestore.FieldValue.serverTimestamp(),A=D==="tempo"?"Diproses":"Selesai",F=U(),u=F&&F.status==="open"?F.id:null,H=F&&F.status==="open"?F.shiftNo||F.id:null,V={orderId:p,txId:p,source:"pos",channel:"pos",status:A,timestamp:T,dateString:$,dateMs:Date.now(),shiftId:u,shiftNo:H,cashier:g,cashierName:w,customer:{name:t,phone:a,wa:a,address:"Beli Langsung di Kasir (POS)",deliveryMethod:"takeaway",isMember:!!m.isMember,memberId:m.memberId||null},customerName:t,customerPhone:a,customerType:m.isMember?"Member":"Pelanggan Umum",items:S.map(v=>({id:v.id,name:v.name,price:parseFloat(v.price)||0,basePrice:parseFloat(v.basePrice||v.price)||0,hpp:v.hpp!=null?parseFloat(v.hpp):Be(v)||0,qty:parseFloat(v.qty)||1,discount:parseFloat(v.discount)||0,subtotal:parseFloat(v.subtotal)||0,variantName:v.variantName||"",isVariant:!!v.isVariant,isWholesale:!!v.isWholesale,effectivePrice:parseFloat(v.price)||0,poTime:v.poTime||"",unit:v.unit||"pcs"})),hasPO:S.some(v=>v.poTime&&String(v.poTime).trim()!==""),payment:{method:D,subtotal:te(),productDiscount:xe(ee),shippingCost:0,pointDiscount:ye(),ppnAmount:oe().ppnAmount||0,dppAmount:oe().dppAmount||te(),ppnRate:oe().ppnEnabled?oe().ppnRate:0,ppnType:oe().ppnEnabled?oe().ppnType:"exclusive",ppnEnabled:!!oe().ppnEnabled,ppnShowZero:!!oe().ppnShowZero,ppnLabel:oe().ppnLabel||"",taxNpwp:f.store?.taxNpwp||f.taxSettings?.npwp||"",grandTotal:C(),paid:D==="cash"?X:D==="tempo"?s:C(),change:D==="cash"?ja():0,bank:r,paymentStatus:D==="tempo"?C()-s<=0?"lunas":"hutang":"lunas",subMethod:o?"paylater":D==="tempo"?"tempo":"",isPaylater:o,paylaterUsed:n,dp:s,tempoDp:s,tempoBalance:D==="tempo"?Math.max(0,C()-s):0,tempoDueDate:Date.now()+30*24*60*60*1e3,tempoPenaltyRate:1,tempoPenaltyStopped:!1},subtotal:te(),globalDiscount:se(),pointDiscount:ye(),pointsRedeemed:(W||0)+(L&&parseFloat(L.pointsCost)||0),claimedReward:L?{id:L.id,name:L.name,pointsCost:parseFloat(L.pointsCost)||0}:null,discountType:_,discountVal:B,totalHpp:e,grossProfit:Math.max(0,C()-e),total:C(),isTempo:D==="tempo",pointsEarned:0,notes:""};if(m.isMember&&a){const G=(typeof window.calculateCartPoints=="function"?window.calculateCartPoints(S,f.store):{totalPoints:0}).totalPoints||0;V.pointsEarned=G;const Z=(W||0)+(L&&parseFloat(L.pointsCost)||0),O=G-Z,M=Math.max(0,(parseFloat(m.points)||0)+O);V.finalMemberPoints=M;try{const P=a.replace(/\D/g,""),Q=String(m.memberId||P);if(await j.collection("freshmart").doc("cms_data").collection("customers").doc(Q).set({points:qe.firestore.FieldValue.increment(O),lastOrderAt:$},{merge:!0}),f.customers){const K=f.customers.find(re=>re&&(String(re.id)===Q||String(re.phone).replace(/\D/g,"")===P));K&&(K.points=M)}m.points=M}catch(P){console.warn("[POS] Gagal update poin member:",P)}if(L&&L.id)try{await j.collection("freshmart").doc("cms_data").collection("rewards").doc(String(L.id)).update({stock:qe.firestore.FieldValue.increment(-1)});const P=(f.rewards||[]).find(Q=>String(Q.id)===String(L.id));P&&P.stock!==void 0&&(P.stock=Math.max(0,(parseInt(P.stock)||0)-1))}catch(P){console.warn("[POS] Gagal update stok reward:",P)}}if(o&&m.phone)try{const v=m.phone.replace(/\D/g,""),G=v.startsWith("0")?"62"+v.slice(1):v;if(await j.collection("freshmart").doc("cms_data").collection("customers").doc(G).set({paylaterUsed:qe.firestore.FieldValue.increment(n)},{merge:!0}),f.customers){const O=f.customers.find(M=>M&&(String(M.id)===G||String(M.phone).replace(/\D/g,"")===v));O&&(O.paylaterUsed=Math.max(0,parseFloat(O.paylaterUsed)||0)+n)}m.paylaterUsed=Math.max(0,parseFloat(m.paylaterUsed)||0)+n}catch(v){console.warn("[POS] Gagal potong limit PayLater:",v)}if(await j.collection("freshmart_orders").doc(p).set(V),Ca(V),l){const v={};S.forEach(O=>{const M=O.id!=null?O.id.toString():null;if(!M)return;v[M]||(v[M]={main:0,variants:{}});const P=parseFloat(O.qty)||0;O.variantName?v[M].variants[O.variantName]=(v[M].variants[O.variantName]||0)+P:v[M].main+=P});const G=Object.keys(v),Z=[];for(const O of G){const M=v[O],P=(f.products||[]).find(K=>String(K.id)===O);if(!P)continue;const Q={};M.main>0&&(P.stock=Math.max(0,(parseFloat(P.stock)||0)-M.main),Q.stock=P.stock,P.stock===0&&(P.isActive="false",Q.isActive="false"),P.totalSold=(parseFloat(P.totalSold)||0)+M.main,Q.totalSold=P.totalSold),Object.keys(M.variants).length>0&&P.variants&&(Object.keys(M.variants).forEach(K=>{const re=P.variants.findIndex(rs=>rs.name===K);re>-1&&(P.variants[re].stock=Math.max(0,(parseFloat(P.variants[re].stock)||0)-M.variants[K]),P.variants[re].stock===0&&(P.variants[re].isActive=!1),P.variants[re].totalSold=(parseFloat(P.variants[re].totalSold)||0)+M.variants[K])}),Q.variants=P.variants);const z=(f.products||[]).findIndex(K=>String(K.id)===O);z>-1&&(f.products[z]=P);try{await j.collection("freshmart").doc("cms_data").collection("products").doc(O).update(Q),Z.push(O)}catch(K){console.warn("[POS] Gagal update stok produk di Firestore:",O,K)}}if(Z.length>0)try{await j.collection("freshmart").doc("cms_data").update({lastUpdate:qe.firestore.FieldValue.increment(1),updateType:"stock_change",updatedProductIds:Z})}catch{}}Vt(),Ke(!0);const Ae={...V};S=[],ee=0,B=0,_="rp",W=0,L=null,N(),q(),js(Ae)}catch(p){console.error("[POS] Error:",p),k("Gagal menyimpan transaksi. Coba lagi.","error"),d&&(d.disabled=!1,d.innerHTML='<i class="fa-solid fa-check-circle mr-2"></i>Selesaikan Transaksi')}},js=e=>{const t=e.payment.method==="cash"?`<p class="text-sm text-slate-500">Kembalian: <span class="font-black text-emerald-600">${h(e.payment.change)}</span></p>`:e.payment.method==="tempo"?'<p class="text-sm text-amber-600 font-semibold">⚠️ Dicatat sebagai Piutang Tempo</p>':`<p class="text-sm text-slate-500">Metode: ${e.payment.method.toUpperCase()}</p>`,a=JSON.stringify(e).replace(/"/g,"&quot;"),s=!!document.getElementById("pos-admin-container")||typeof window.cTab=="function"&&window.cTab()==="pos";document.body.insertAdjacentHTML("beforeend",`
    <div id="pos-success-modal" class="fixed inset-0 z-[9999] flex items-center justify-center p-4" style="background:rgba(15,23,42,0.75)">
      <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-sm border border-slate-200/80 dark:border-slate-800">
        <div class="p-6 text-center">
          <div class="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-4"><i class="fa-solid fa-circle-check text-emerald-500 text-3xl"></i></div>
          <h2 class="font-black text-lg text-slate-900 dark:text-white mb-1">Transaksi Berhasil!</h2>
          <p class="text-xs text-slate-400 mb-2">#${b(e.txId)}</p>
          <p class="text-2xl font-black mb-1" style="color:var(--color-primary)">${h(e.total)}</p>
          ${t}
          <div class="mt-2.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-[11px] font-bold text-slate-600 dark:text-slate-300 flex items-center justify-center gap-1.5 border border-slate-200/60 dark:border-slate-700/60">
            <i class="fa-solid fa-check-double text-emerald-500"></i>
            <span>Tercatat Resmi di Menu Pesanan CMS</span>
          </div>
          ${e.pointsEarned>0?`
          <div class="mt-2 p-2 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300 text-xs font-bold flex items-center justify-center gap-1.5">
            <i class="fa-solid fa-star text-amber-500"></i>
            <span>+${e.pointsEarned} Poin Member Didapat!</span>
          </div>`:""}
          ${e.pointDiscount>0||e.payment&&e.payment.pointDiscount>0?`
          <div class="mt-1.5 p-2 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 text-xs font-bold flex items-center justify-center gap-1.5">
            <i class="fa-solid fa-tags text-rose-500"></i>
            <span>Diskon Poin: -${h(e.pointDiscount||e.payment?.pointDiscount)}</span>
          </div>`:""}
          ${e.claimedReward?`
          <div class="mt-1.5 p-2 rounded-xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 text-xs font-bold flex items-center justify-center gap-1.5">
            <i class="fa-solid fa-gift text-purple-500"></i>
            <span>Klaim Hadiah: ${b(e.claimedReward.name)}</span>
          </div>`:""}
        </div>
        <div class="px-6 pb-6 flex flex-col gap-2">
          <button onclick="window.printPOSReceiptDirect(${a})" class="w-full py-3.5 rounded-2xl text-white font-black text-sm shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer hover:brightness-105" style="background:linear-gradient(135deg, var(--color-primary-light,#e1b858) 0%, var(--color-primary,#c59b27) 50%, var(--color-primary-dark,#a87f1b) 100%);box-shadow:0 4px 14px rgba(var(--color-primary-rgb),0.35)">
            <i class="fa-solid fa-bolt text-white/90"></i><i class="fa-solid fa-print"></i> Cetak Struk Langsung (RawBT)
          </button>
          <button onclick="window.previewPOSReceiptThenPrint(${a})" class="w-full py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer flex items-center justify-center gap-1.5">
            <i class="fa-solid fa-eye text-slate-400"></i> Lihat Preview Struk Dulu
          </button>
          <button onclick="document.getElementById('pos-success-modal')?.remove()" class="w-full py-2.5 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 text-slate-500 dark:text-slate-400 font-medium text-xs hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer">Transaksi Baru</button>
          ${s?`
          <button onclick="document.getElementById('pos-success-modal')?.remove(); if(typeof window.openAdminTab==='function') window.openAdminTab('orders');" class="w-full py-2 rounded-xl text-slate-400 dark:text-slate-500 text-[11px] font-medium hover:text-[var(--color-primary)] transition-all flex items-center justify-center gap-1.5 cursor-pointer">
            <i class="fa-solid fa-receipt"></i> Buka Menu Pesanan Toko
          </button>`:""}
        </div>
      </div>
    </div>`),(typeof ke=="function"?ke():{}).autoPrintOrder&&typeof window.printPOSReceiptDirect=="function"&&setTimeout(()=>{window.printPOSReceiptDirect(e)},300)},Ya=e=>{document.getElementById("pos-success-modal")?.remove(),(typeof ke=="function"?ke():{}).directPrint!==!1&&typeof window.printPOSReceiptDirect=="function"?window.printPOSReceiptDirect(e):kt(e)},kt=e=>{window._lastPOSTx=e;const t=typeof ke=="function"?ke():{paperSize:"58mm"},a=typeof window.getPaperCols=="function"?window.getPaperCols(t.paperSize):t.paperSize==="80mm"?48:32,s=a>=40,r=t.headerText||f.store?.name||"TOKO PUTRI",o=f.store?.wa||"",i=f.store?.address||"",n=t.footerText||"Terima Kasih Atas Kunjungan Anda!",d=typeof window.formatCompactDate=="function"?window.formatCompactDate(e.dateMs||Date.now(),s):new Date(e.dateMs||Date.now()).toLocaleString("id-ID"),l=(e.items||[]).map(x=>{const w=x.variantName?` (${b(x.variantName)}${x.colorCode?" "+b(x.colorCode):""})`:"",g=x.effectivePrice||x.price||0,$=x.subtotal!==void 0?x.subtotal:parseFloat(x.qty||1)*g;return`
        <tr>
            <td colspan="2" style="padding-top:4px;font-weight:bold;word-break:break-word;">${b(x.name)}${w}${x.poTime?" [PO]":""}</td>
        </tr>
        <tr>
            <td style="padding-bottom:3px;color:#475569;font-size:10.5px;">&nbsp;&nbsp;${I(x.qty)} ${b(x.unit||"pcs")} x ${Math.round(g).toLocaleString("id-ID")}</td>
            <td style="text-align:right;padding-bottom:3px;white-space:nowrap;font-weight:bold;">${Math.round($).toLocaleString("id-ID")}</td>
        </tr>
        ${x.discount&&x.discount>0?`<tr><td style="padding-bottom:2px;color:#e11d48;font-size:10px;">&nbsp;&nbsp;(Diskon)</td><td style="text-align:right;color:#e11d48;font-size:10px;">-${Math.round(x.discount).toLocaleString("id-ID")}</td></tr>`:""}
        ${x.poTime?`<tr><td colspan="2" style="font-size:9.5px;font-style:italic;color:#64748b;">&nbsp;&nbsp;* Estimasi PO: ${b(x.poTime)}</td></tr>`:""}
        `}).join(""),p=e.discountType==="percent"&&e.discountVal?`Diskon (${e.discountVal}%)`:"Diskon Toko";document.getElementById("pos-receipt-fallback-modal")?.remove(),document.body.insertAdjacentHTML("beforeend",`
    <div id="pos-receipt-fallback-modal" class="fixed inset-0 z-[10000] flex items-center justify-center p-3 sm:p-4" style="background:rgba(15,23,42,0.75)">
        <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full ${s?"max-w-[420px]":"max-w-[340px]"} border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[90vh]">
            <div class="p-3.5 sm:p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50">
                <span class="font-bold text-xs text-slate-700 dark:text-slate-200 flex items-center gap-1.5"><i class="fa-solid fa-receipt text-amber-500"></i>Preview Struk Thermal (${a} Kolom)</span>
                <button onclick="document.getElementById('pos-receipt-fallback-modal')?.remove()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-700 dark:hover:text-slate-200 transition-colors flex items-center justify-center cursor-pointer"><i class="fa-solid fa-xmark text-sm"></i></button>
            </div>
            <div id="pos-receipt-paper-box" class="p-4 overflow-y-auto flex-1 font-mono text-[11px] bg-slate-50/60 dark:bg-slate-950 text-slate-800 dark:text-slate-200 space-y-1.5 select-text custom-scrollbar">
                <div class="text-center font-bold text-sm uppercase">${b(r)}</div>
                ${i?`<div class="text-center text-[10px] text-slate-500">${b(i)}</div>`:""}
                ${o?`<div class="text-center text-[10px] text-slate-500">WA: ${b(o)}</div>`:""}
                ${e.payment?.taxNpwp||f.store?.taxNpwp?`<div class="text-center text-[9px] font-mono text-slate-500">NPWP: ${b(e.payment?.taxNpwp||f.store.taxNpwp)}</div>`:""}
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <div class="flex justify-between"><span>No : <b>#${b(e.txId)}</b></span><span>${b(d)}</span></div>
                <div class="flex justify-between"><span>Kasir: ${b(e.cashierName||"Kasir")}</span><span>Plg: ${b(e.customer?.name||"Umum")}</span></div>
                ${e.customer?.phone?`<div>HP  : ${b(e.customer.phone)}</div>`:""}
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <table class="w-full text-[11px] border-collapse">
                    ${l}
                </table>
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <div class="flex justify-between"><span>Subtotal</span><span>${h(e.subtotal)}</span></div>
                ${(e.globalDiscount||0)>0?`<div class="flex justify-between text-rose-500 font-bold"><span>${p}</span><span>- ${h(e.globalDiscount)}</span></div>`:""}
                ${(e.pointDiscount||0)>0?`<div class="flex justify-between text-emerald-600 font-bold"><span>Diskon Poin (${e.pointsRedeemed||0} Pts)</span><span>- ${h(e.pointDiscount)}</span></div>`:""}
                ${e.claimedReward?`<div class="flex justify-between text-purple-600 font-bold"><span>[Klaim Hadiah]</span><span class="truncate max-w-[150px]">${b(e.claimedReward.name)}</span></div>`:""}
                ${(()=>{if(!((e.payment?.ppnEnabled||e.payment?.ppnShowZero||e.payment?.ppnRate===0||e.payment?.ppnAmount&&e.payment.ppnAmount>0)&&(f.store?.ppnEnabled||e.payment?.ppnEnabled)))return"";const w=e.payment?.ppnType==="inclusive",g=e.payment?.ppnRate!==void 0?e.payment.ppnRate:f.store?.ppnRate||0,$=e.payment?.ppnAmount||0,T=e.payment?.ppnLabel||`${w?"Inc. PPN":"PPN"} (${g}%)`,A=$>0?`${w?"":"+"}${h($)}`:"Rp 0";return`<div class="flex justify-between"><span>${b(T)}</span><span>${A}</span></div>`})()}
                <div class="flex justify-between font-black text-sm pt-1 border-t border-slate-200 dark:border-slate-700"><span>TOTAL</span><span style="color:var(--color-primary)">${h(e.total)}</span></div>
                ${e.payment.method==="cash"?`<div class="flex justify-between"><span>Bayar Tunai</span><span>${h(e.payment.paid)}</span></div><div class="flex justify-between font-bold text-emerald-600"><span>Kembalian</span><span>${h(e.payment.change)}</span></div>`:""}
                ${e.payment.method==="tempo"?`
                    ${e.payment.isPaylater||e.isPaylater?`<div class="flex justify-between font-bold text-emerald-600"><span>Plafon PayLater Digunakan</span><span>${h(e.payment.paylaterUsed||e.total-(e.payment.tempoDp||e.payment.dp||0))}</span></div>`:""}
                    <div class="flex justify-between"><span>Uang Muka (DP)</span><span>${h(e.payment.tempoDp||e.payment.dp||0)}</span></div>
                    <div class="flex justify-between font-bold ${e.payment.isPaylater||e.isPaylater?"text-emerald-700 dark:text-emerald-400":"text-amber-600"}">
                        <span>${e.payment.isPaylater||e.isPaylater?"Tagihan PayLater":"Sisa Piutang"}</span>
                        <span>${h(e.payment.tempoBalance||0)}</span>
                    </div>
                `:""}
                <div class="flex justify-between"><span>Metode Bayar</span><span>${e.payment.isPaylater||e.isPaylater?"PUTRI PAYLATER":b(e.payment.method.toUpperCase())}</span></div>
                ${e.pointsEarned>0||(e.pointsRedeemed||0)>0?`
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                ${e.pointsEarned>0?`<div class="flex justify-between text-amber-600 dark:text-amber-400 font-bold"><span>Poin Didapat:</span><span>+${e.pointsEarned} Poin</span></div>`:""}
                ${(e.pointsRedeemed||0)>0?`<div class="flex justify-between text-rose-500 font-bold"><span>Poin Ditukar:</span><span>-${e.pointsRedeemed} Poin</span></div>`:""}
                ${e.finalMemberPoints!==void 0?`<div class="flex justify-between text-slate-600 dark:text-slate-300 font-bold"><span>Sisa Saldo Poin:</span><span>${e.finalMemberPoints} Poin</span></div>`:""}`:""}
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <div class="text-center text-[10px] text-slate-400 my-1">${b(n)}</div>
            </div>
            <div class="p-3 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 flex gap-2">
                <button onclick="window.executePOSPrintDirect()" class="flex-1 py-3.5 rounded-2xl text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all active:scale-95 hover:opacity-95" style="background:var(--color-primary)">
                    <i class="fa-solid fa-bolt text-amber-300"></i><i class="fa-solid fa-print"></i> Cetak Struk Langsung
                </button>
                <button onclick="if(typeof window.openPrinterSettingsModal==='function') window.openPrinterSettingsModal();" class="px-3.5 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-bold text-xs flex items-center gap-1 cursor-pointer transition-all active:scale-95" title="Pengaturan Printer">
                    <i class="fa-solid fa-gear"></i>
                </button>
            </div>
        </div>
    </div>`)},Zt=()=>{if(window._lastPOSTx&&typeof window.printPOSReceiptDirect=="function"){window.printPOSReceiptDirect(window._lastPOSTx);return}const e=c("pos-receipt-paper-box");e&&(typeof window.renderThermalDOMAndPrint=="function"?window.renderThermalDOMAndPrint(e.innerHTML):window.print())},Za=({isStorefront:e})=>{const a=(typeof window.getCashierSession=="function"?window.getCashierSession():null)?.name||(e?"Kasir":"Admin Seller"),s=b(f.store?.name||"Toko Putri");return`
    <div class="flex flex-col h-full w-full overflow-hidden bg-slate-50/50 dark:bg-slate-900/40 relative">
        ${e?`
        <!-- STOREFRONT POS HEADER (Proteksi Anti-Tabrakan Status Bar / Safe-Area) -->
        <header class="glass-header pos-storefront-header sticky top-0 z-30 flex shrink-0 items-center justify-between text-white shadow-md">
            <div class="flex items-center gap-2.5 min-w-0">
                <button onclick="window.exitPOSMode()" class="w-8 h-8 rounded-xl bg-black/15 hover:bg-black/25 text-white flex items-center justify-center text-xs transition-all active:scale-90 cursor-pointer shrink-0" title="Kembali ke Etalase Toko">
                    <i class="fa-solid fa-arrow-left"></i>
                </button>
                <div class="flex items-center gap-2 min-w-0">
                    <div class="w-8 h-8 rounded-xl flex items-center justify-center text-white text-sm shrink-0 shadow-xs bg-black/20">
                        <i class="fa-solid fa-cash-register"></i>
                    </div>
                    <div class="min-w-0">
                        <h1 class="text-xs font-black uppercase tracking-wider leading-none text-white truncate">${s}</h1>
                        <div class="flex items-center gap-1.5 mt-1">
                            <span class="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse"></span>
                            <span class="text-[10px] text-white/90 font-medium truncate">${b(a)}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex items-center gap-1.5 sm:gap-2 shrink-0 whitespace-nowrap">
                <span id="pos-live-clock" class="hidden sm:inline-block text-[10px] font-mono text-white/90 px-2.5 py-1 bg-black/15 rounded-lg border border-white/20">--:--:--</span>
                <span class="hidden md:inline-flex items-center gap-1.5 text-[10px] font-bold text-white bg-black/20 px-2.5 py-1 rounded-lg">
                    <i class="fa-solid fa-barcode text-xs"></i> USB Scanner Aktif
                </span>
                <div id="pos-shift-btn-storefront" class="flex items-center shrink-0"></div>
                <div id="pos-held-btn-storefront" class="flex items-center shrink-0"></div>
                <button onclick="window.cashierLogout()" class="h-8 px-2.5 sm:px-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold inline-flex items-center gap-1.5 transition-all active:scale-95 shadow-xs cursor-pointer whitespace-nowrap shrink-0" title="Keluar Mode Kasir">
                    <i class="fa-solid fa-power-off text-xs"></i>
                    <span class="hidden sm:inline">Keluar</span>
                </button>
            </div>
        </header>`:`
        <!-- ADMIN POS ACTION STRIP (lega, nyaman, presisi tinggi, anti-wrap di mobile) -->
        <div class="min-h-[46px] sm:min-h-[50px] py-1.5 sm:py-2 px-3 sm:px-4 shrink-0 bg-slate-50/80 dark:bg-slate-800/60 border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-xs overflow-hidden gap-2">
            <div class="flex items-center gap-1.5 sm:gap-2 shrink-0 whitespace-nowrap">
                <span class="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0 shadow-xs"></span>
                <span class="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-100 whitespace-nowrap">
                    <span class="hidden sm:inline">Terminal </span>POS
                </span>
                <span class="hidden sm:inline text-slate-300 dark:text-slate-600">•</span>
                <span id="pos-live-clock" class="hidden sm:inline text-[11px] font-mono font-bold text-slate-500 dark:text-slate-400">--:--:--</span>
            </div>
            <div class="flex items-center gap-1.5 sm:gap-2 shrink-0 whitespace-nowrap">
                <span class="hidden md:inline-flex items-center gap-1.5 text-[10px] font-bold text-slate-500 dark:text-slate-400 whitespace-nowrap">
                    <i class="fa-solid fa-barcode text-xs"></i> Scanner Otomatis
                </span>
                <div id="pos-shift-btn-admin" class="flex items-center shrink-0"></div>
                <div id="pos-held-btn-admin" class="flex items-center shrink-0"></div>
                <button onclick="window.posClearCart()" class="h-8 px-2.5 sm:px-3 rounded-xl bg-white hover:bg-rose-50 dark:bg-slate-800 dark:hover:bg-rose-950/30 border border-slate-200 dark:border-slate-700 text-rose-500 text-xs font-bold inline-flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap shrink-0 shadow-2xs active:scale-95" title="Reset Keranjang Kasir">
                    <i class="fa-solid fa-trash-can text-xs"></i>
                    <span class="inline">Reset</span>
                </button>
            </div>
        </div>`}

        <!-- MAIN SPLIT WORKSPACE: Desktop side-by-side, Mobile full catalog -->
        <div class="flex flex-1 overflow-hidden">
            <!-- PANEL KIRI: KATALOG (Mobile 100%, Desktop 63%-65%) -->
            <div class="flex flex-col flex-1 lg:w-[63%] xl:w-[65%] border-r border-slate-200/80 dark:border-slate-800 overflow-hidden bg-slate-50/50 dark:bg-slate-900/30">
                <!-- Search & Category Bar with View Switcher -->
                <div class="p-2.5 sm:p-3.5 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800 space-y-2 shrink-0 shadow-2xs">
                    <div class="flex items-center gap-2">
                        <div class="relative flex-1 min-w-0">
                            <i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none"></i>
                            <input id="pos-search-input" type="text" placeholder="Cari barang, barcode USB... (F4)" 
                                class="w-full pl-8 pr-8 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)] focus:bg-white dark:focus:bg-slate-900 transition-all"
                                oninput="window.posSearchFn(this.value)">
                            <button onclick="document.querySelectorAll('#pos-search-input').forEach(i => i.value=''); window.posSearchFn('');" class="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs p-1 cursor-pointer" title="Hapus pencarian">
                                <i class="fa-solid fa-circle-xmark"></i>
                            </button>
                        </div>
                        <!-- Tombol Scan Barcode Kamera HP / Laptop (F9) -->
                        <button onclick="window.openPOSCameraScanner()" class="h-9 px-2.5 sm:px-3 rounded-xl bg-[rgba(var(--color-primary-rgb),0.08)] hover:bg-[rgba(var(--color-primary-rgb),0.15)] text-[var(--color-primary)] text-xs font-bold flex items-center gap-1.5 transition-all active:scale-95 border border-[rgba(var(--color-primary-rgb),0.25)] shrink-0 cursor-pointer shadow-2xs" title="Scan Barcode Kamera (F9)">
                            <i class="fa-solid fa-camera text-xs"></i>
                            <span class="hidden sm:inline">Scan (F9)</span>
                        </button>
                        <!-- View Switcher (Grid vs List) -->
                        <div class="flex items-center p-0.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shrink-0">
                            <button id="pos-view-btn-grid" onclick="window.setPOSViewMode('grid')" class="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer ${ue==="grid"?"text-white shadow-xs":"text-slate-500 hover:text-slate-800 dark:text-slate-400"}" style="${ue==="grid"?"background:linear-gradient(135deg, var(--color-primary-light,#e1b858) 0%, var(--color-primary,#c59b27) 60%, var(--color-primary-dark,#a87f1b) 100%)":""}" title="Tampilan Grid Foto">
                                <i class="fa-solid fa-grip"></i>
                            </button>
                            <button id="pos-view-btn-list" onclick="window.setPOSViewMode('list')" class="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer ${ue==="list"?"text-white shadow-xs":"text-slate-500 hover:text-slate-800 dark:text-slate-400"}" style="${ue==="list"?"background:linear-gradient(135deg, var(--color-primary-light,#e1b858) 0%, var(--color-primary,#c59b27) 60%, var(--color-primary-dark,#a87f1b) 100%)":""}" title="Tampilan List Baris Kompak">
                                <i class="fa-solid fa-list-ul"></i>
                            </button>
                        </div>
                    </div>
                    <!-- Kategori Chips -->
                    <div id="pos-cat-filter" class="flex gap-1.5 overflow-x-auto hide-scrollbar pb-0.5"></div>
                    <div id="pos-subcat-filter" class="w-full hidden"></div>
                </div>

                <!-- Product Catalog Container -->
                <div id="pos-catalog-grid" class="${ue==="list"?"pos-catalog-list-mode":"pos-catalog-grid-mode"}"></div>
            </div>

            <!-- PANEL KANAN: BILLING & KERANJANG (Hanya Desktop >= lg) -->
            <div class="hidden lg:flex flex-col lg:w-[37%] xl:w-[35%] bg-white dark:bg-slate-900 border-l border-slate-200/80 dark:border-slate-800 overflow-hidden shrink-0 shadow-sm">
                <!-- Header Keranjang Desktop -->
                <div class="px-4 py-3 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0 bg-slate-50/70 dark:bg-slate-800/40">
                    <div class="flex items-center gap-2 min-w-0">
                        <div class="w-7 h-7 rounded-lg flex items-center justify-center text-xs text-white shadow-xs shrink-0" style="background:var(--color-primary)">
                            <i class="fa-solid fa-cart-shopping"></i>
                        </div>
                        <h3 class="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-white truncate whitespace-nowrap leading-none">
                            Keranjang (<span class="pos-item-count-target">0</span>)
                        </h3>
                    </div>
                    <div class="flex items-center gap-1.5 shrink-0">
                        <button onclick="window.posHoldCurrentCart()" class="pos-hold-btn-target text-[10px] font-bold text-slate-700 dark:text-slate-200 bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 px-2.5 py-1 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap active:scale-95 shadow-2xs" title="Tahan transaksi sementara (F6)">
                            <i class="fa-solid fa-pause text-amber-500 text-[9px]"></i><span>Tahan</span>
                        </button>
                        <button onclick="window.posClearCart()" class="text-[10px] font-bold text-slate-700 dark:text-slate-200 bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 px-2.5 py-1 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 shrink-0 whitespace-nowrap active:scale-95 shadow-2xs" title="Kosongkan keranjang">
                            <i class="fa-solid fa-trash-can text-rose-500 text-[9px]"></i><span>Kosongkan</span>
                        </button>
                    </div>
                </div>

                <!-- Items List Desktop -->
                <div class="pos-cart-items-target flex-1 overflow-y-auto p-3 space-y-2"></div>

                <!-- Summary & Bayar Desktop -->
                <div class="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/60 shrink-0 space-y-2.5">
                    <div class="flex justify-between text-xs text-slate-500 font-medium">
                        <span>Subtotal Item</span>
                        <span class="pos-subtotal-target font-bold text-slate-800 dark:text-slate-200">Rp 0</span>
                    </div>
                    <div class="pos-hpp-margin-row flex justify-between text-xs text-slate-500 font-medium">
                        <span class="flex items-center gap-1"><i class="fa-solid fa-coins text-amber-500 text-[10px]"></i> Total Modal (HPP)</span>
                        <span class="pos-total-hpp-target font-bold text-amber-600 dark:text-amber-400">Rp 0</span>
                    </div>
                    <div class="pos-hpp-margin-row flex justify-between text-xs text-slate-500 font-medium">
                        <span class="flex items-center gap-1"><i class="fa-solid fa-arrow-trend-up text-emerald-500 text-[10px]"></i> Estimasi Laba</span>
                        <span class="pos-total-margin-target font-bold text-emerald-600 dark:text-emerald-400">Rp 0</span>
                    </div>
                    <!-- Smart Diskon Transaksi Kasir (Rp / %) -->
                    <div class="space-y-1.5 p-2.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/80 dark:border-slate-700/60 text-xs transition-colors" style="border-color:rgba(var(--color-primary-rgb),0.25)">
                        <div class="flex items-center justify-between">
                            <span class="text-slate-700 dark:text-slate-200 font-bold flex items-center gap-1.5">
                                <div class="w-5 h-5 rounded-md flex items-center justify-center text-[10px] text-white shrink-0 shadow-2xs" style="background:var(--color-primary)">
                                    <i class="fa-solid fa-tags"></i>
                                </div>
                                <span>Diskon Transaksi</span>
                            </span>
                            <div class="flex items-center bg-slate-200/80 dark:bg-slate-700/80 rounded-lg p-0.5 text-[10px]">
                                <button onclick="window.posSetDiscountType('rp')" class="pos-disc-type-rp px-2.5 py-0.5 rounded-md transition-all cursor-pointer font-black text-white shadow-xs text-[10px]" style="background:var(--color-primary)">Rp</button>
                                <button onclick="window.posSetDiscountType('percent')" class="pos-disc-type-pct px-2.5 py-0.5 rounded-md transition-all cursor-pointer font-bold text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 text-[10px]">%</button>
                            </div>
                        </div>
                        <div class="flex items-center gap-2">
                            <div class="flex-1 relative">
                                <span class="pos-disc-prefix absolute left-2.5 top-1/2 -translate-y-1/2 text-[10px] font-black" style="color:var(--color-primary)">Rp</span>
                                <input type="number" min="0" placeholder="0" class="pos-disc-val-input w-full border border-slate-200 dark:border-slate-700 rounded-lg pl-8 pr-2.5 py-1 text-right text-xs font-mono font-bold bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] transition-all" oninput="window.posSetDiscountVal(this.value)">
                            </div>
                            <div class="pos-disc-preview-target hidden text-[10px] font-black text-rose-500 whitespace-nowrap min-w-[70px] text-right"></div>
                        </div>
                        <div class="pos-disc-chips-target flex gap-1 overflow-x-auto hide-scrollbar pt-0.5"></div>
                    </div>
                    <div class="flex justify-between items-center pt-2 border-t border-slate-200/80 dark:border-slate-800">
                        <div>
                            <p class="text-[9px] uppercase tracking-wider font-bold text-slate-400">Total Akhir</p>
                            <p class="pos-total-target text-xl font-black" style="color:var(--color-primary)">Rp 0</p>
                        </div>
                        <span class="text-[10px] font-bold px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">Siap Bayar</span>
                    </div>
                    <button onclick="window.openPayModal()" class="pos-pay-btn-target w-full py-3.5 rounded-2xl text-white font-black text-sm shadow-xl disabled:opacity-40 disabled:cursor-not-allowed active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer hover:brightness-105" style="background:linear-gradient(135deg, var(--color-primary-light,#e1b858) 0%, var(--color-primary,#c59b27) 50%, var(--color-primary-dark,#a87f1b) 100%);box-shadow:0 4px 14px rgba(var(--color-primary-rgb),0.35)">
                        <i class="fa-solid fa-cash-register"></i>
                        <span class="btn-text">PROSES PEMBAYARAN</span>
                    </button>
                </div>
            </div>
        </div>

        <!-- FLOATING CART BAR (Khusus Mobile < lg saat keranjang ada isi with safe-area) -->
        <div id="pos-mobile-floating-bar" class="lg:hidden fixed bottom-[max(0.75rem,env(safe-area-inset-bottom))] left-3 right-3 z-40 transition-all duration-300 transform translate-y-32 opacity-0 pointer-events-none">
            <div class="bg-slate-900 dark:bg-slate-950 text-white p-3 rounded-2xl shadow-2xl flex items-center justify-between border border-slate-700 cursor-pointer active:scale-[0.99] transition-all" onclick="window.openPOSCartDrawer()">
                <div class="flex items-center gap-2.5">
                    <div class="relative w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm font-bold shadow-md shrink-0" style="background:var(--color-primary)">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <span class="pos-item-count-target absolute -top-1.5 -right-1.5 min-w-5 h-5 px-1 rounded-full bg-rose-500 text-white text-[9px] font-black flex items-center justify-center border-2 border-slate-900 shadow-xs">0</span>
                    </div>
                    <div>
                        <div class="flex items-center gap-1.5">
                            <span class="text-[11px] font-bold text-slate-300">Total Transaksi</span>
                        </div>
                        <p class="pos-total-target text-sm font-black text-emerald-400 dark:text-emerald-300">Rp 0</p>
                    </div>
                </div>
                <button onclick="event.stopPropagation(); window.openPOSCartDrawer();" class="px-4 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider text-white shadow-lg active:scale-95 transition-all flex items-center gap-1.5 shrink-0" style="background:var(--color-primary)">
                    <span>Lihat Keranjang</span>
                    <i class="fa-solid fa-chevron-up text-xs"></i>
                </button>
            </div>
        </div>

        <!-- MOBILE CART DRAWER (Full-Height Mobile Cart — Bersih Tanpa Celah Hitam) -->
        <div id="pos-mobile-cart-drawer" class="lg:hidden absolute inset-0 z-50 transition-all duration-300 opacity-0 pointer-events-none bg-white dark:bg-slate-900 flex flex-col">
            <div id="pos-mobile-cart-sheet" class="w-full h-full bg-white dark:bg-slate-900 flex flex-col transition-transform duration-300 transform translate-y-full overflow-hidden">
                <!-- Header Drawer Mobile dengan Safe-Area Inset Proteksi -->
                <div class="pos-mobile-cart-header border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0 bg-slate-50/90 dark:bg-slate-800/80">
                    <div class="flex items-center gap-2 shrink-0">
                        <div class="w-7 h-7 rounded-lg flex items-center justify-center text-xs text-white shrink-0 shadow-xs" style="background:var(--color-primary)"><i class="fa-solid fa-cart-shopping"></i></div>
                        <h3 class="text-xs font-black uppercase tracking-tight text-slate-800 dark:text-white whitespace-nowrap leading-none">
                            Keranjang (<span class="pos-item-count-target">0</span>)
                        </h3>
                    </div>
                    <div class="flex items-center gap-1.5 shrink-0">
                        <button onclick="window.posHoldCurrentCart()" class="pos-hold-btn-target text-[10px] font-bold text-slate-700 dark:text-slate-200 bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 px-2 py-1 rounded-lg transition-all flex items-center gap-1 whitespace-nowrap cursor-pointer active:scale-95 shadow-2xs" title="Tahan transaksi sementara (F6)">
                            <i class="fa-solid fa-pause text-amber-500 text-[9px]"></i><span>Tahan</span>
                        </button>
                        <button onclick="window.posClearCart()" class="text-[10px] font-bold text-slate-700 dark:text-slate-200 bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 px-2 py-1 rounded-lg transition-all flex items-center gap-1 whitespace-nowrap cursor-pointer active:scale-95 shadow-2xs" title="Kosongkan keranjang">
                            <i class="fa-solid fa-trash-can text-rose-500 text-[9px]"></i><span>Kosongkan</span>
                        </button>
                        <button onclick="window.closePOSCartDrawer()" class="w-7 h-7 rounded-lg bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 hover:text-slate-800 dark:hover:text-white border border-slate-200 dark:border-slate-700 text-xs font-bold flex items-center justify-center transition-all cursor-pointer shadow-2xs" title="Tutup Keranjang">
                            <i class="fa-solid fa-xmark text-[11px]"></i>
                        </button>
                    </div>
                </div>

                <!-- Items Container -->
                <div class="pos-cart-items-target flex-1 overflow-y-auto p-3 space-y-2"></div>

                <!-- Footer Summary & Pay -->
                <div class="p-3.5 pb-[calc(1rem+env(safe-area-inset-bottom))] border-t border-slate-100 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/80 space-y-2 shrink-0">
                    <div class="flex justify-between text-xs text-slate-500 font-medium">
                        <span>Subtotal Item</span>
                        <span class="pos-subtotal-target font-bold text-slate-700 dark:text-slate-200">Rp 0</span>
                    </div>
                    <div class="pos-hpp-margin-row flex justify-between text-xs text-slate-500 font-medium">
                        <span class="flex items-center gap-1"><i class="fa-solid fa-coins text-amber-500 text-[10px]"></i> Total Modal (HPP)</span>
                        <span class="pos-total-hpp-target font-bold text-amber-600 dark:text-amber-400">Rp 0</span>
                    </div>
                    <div class="pos-hpp-margin-row flex justify-between text-xs text-slate-500 font-medium">
                        <span class="flex items-center gap-1"><i class="fa-solid fa-arrow-trend-up text-emerald-500 text-[10px]"></i> Estimasi Laba</span>
                        <span class="pos-total-margin-target font-bold text-emerald-600 dark:text-emerald-400">Rp 0</span>
                    </div>
                    <!-- Smart Diskon Transaksi Kasir (Rp / %) di Mobile Drawer -->
                    <div class="space-y-1.5 p-2 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/80 dark:border-slate-700/60 text-xs transition-colors" style="border-color:rgba(var(--color-primary-rgb),0.25)">
                        <div class="flex items-center justify-between">
                            <span class="text-slate-700 dark:text-slate-200 font-bold flex items-center gap-1.5">
                                <div class="w-5 h-5 rounded-md flex items-center justify-center text-[10px] text-white shrink-0 shadow-2xs" style="background:var(--color-primary)">
                                    <i class="fa-solid fa-tags"></i>
                                </div>
                                <span>Diskon Transaksi</span>
                            </span>
                            <div class="flex items-center bg-slate-200/80 dark:bg-slate-700/80 rounded-lg p-0.5 text-[10px]">
                                <button onclick="window.posSetDiscountType('rp')" class="pos-disc-type-rp px-2.5 py-0.5 rounded-md transition-all cursor-pointer font-black text-white shadow-xs text-[10px]" style="background:var(--color-primary)">Rp</button>
                                <button onclick="window.posSetDiscountType('percent')" class="pos-disc-type-pct px-2.5 py-0.5 rounded-md transition-all cursor-pointer font-bold text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 text-[10px]">%</button>
                            </div>
                        </div>
                        <div class="flex items-center gap-2">
                            <div class="flex-1 relative">
                                <span class="pos-disc-prefix absolute left-2.5 top-1/2 -translate-y-1/2 text-[10px] font-black" style="color:var(--color-primary)">Rp</span>
                                <input type="number" min="0" placeholder="0" class="pos-disc-val-input w-full border border-slate-200 dark:border-slate-700 rounded-lg pl-8 pr-2.5 py-1 text-right text-xs font-mono font-bold bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] transition-all" oninput="window.posSetDiscountVal(this.value)">
                            </div>
                            <div class="pos-disc-preview-target hidden text-[10px] font-black text-rose-500 whitespace-nowrap min-w-[70px] text-right"></div>
                        </div>
                        <div class="pos-disc-chips-target flex gap-1 overflow-x-auto hide-scrollbar pt-0.5"></div>
                    </div>
                    <div class="flex justify-between items-center pt-1.5 border-t border-slate-200/80 dark:border-slate-800">
                        <span class="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-white">Total Tagihan</span>
                        <span class="pos-total-target text-base sm:text-lg font-black" style="color:var(--color-primary)">Rp 0</span>
                    </div>
                    <button onclick="window.closePOSCartDrawer(); window.openPayModal();" class="pos-pay-btn-target w-full py-3.5 rounded-2xl text-white font-black text-xs sm:text-sm shadow-xl disabled:opacity-40 disabled:cursor-not-allowed active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer hover:brightness-105" style="background:linear-gradient(135deg, var(--color-primary-light,#e1b858) 0%, var(--color-primary,#c59b27) 50%, var(--color-primary-dark,#a87f1b) 100%);box-shadow:0 4px 14px rgba(var(--color-primary-rgb),0.35)">
                        <i class="fa-solid fa-cash-register"></i>
                        <span class="btn-text">LANJUT KE PEMBAYARAN</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
    `},Xa=()=>{try{me="",ne="",be="",S=[],ee=0;const e=c("view-pos-cashier");if(!e)return;const t=c("admin-content"),a=c("view-admin");t&&a?.classList.contains("admin-pos-mode")&&(t.innerHTML="",a.classList.remove("admin-pos-mode")),e.innerHTML=Za({isStorefront:!0}),q(),N(),Ce(),Ye(),Ia(),Ha(),Pe(),ts(),typeof ge=="function"?ge().then(s=>{(!s||s.status!=="open")&&Y()}).catch(()=>{ve()||Y()}):setTimeout(()=>{ve()||Y()},350)}catch(e){console.error("Gagal render POS Storefront:",e)}},es=()=>{try{me="",ne="",be="";const e=c("view-admin");e&&e.classList.add("admin-pos-mode");const t=c("view-pos-cashier");if(t&&(t.innerHTML=""),!c("admin-content"))return;ns("admin-content",`
            <div class="h-full w-full flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-md bg-white dark:bg-slate-900 min-h-0">
                ${Za({isStorefront:!1})}
            </div>
        `),q(),N(),Ce(),Ye(),Ia(),Ha(),Pe(),ts(),typeof ge=="function"?ge().then(s=>{(!s||s.status!=="open")&&Y()}).catch(()=>{ve()||Y()}):setTimeout(()=>{ve()||Y()},350)}catch(e){console.error("Gagal render POS Admin:",e);const t=c("admin-content");t&&(t.innerHTML=`
                <div class="h-full w-full flex flex-col items-center justify-center p-6 text-center">
                    <i class="fa-solid fa-triangle-exclamation text-4xl text-amber-500 mb-3"></i>
                    <h3 class="text-base font-bold text-slate-800 dark:text-white">Gagal Membuka Terminal POS</h3>
                    <p class="text-xs text-slate-500 mt-1 max-w-sm">Terjadi kendala saat memuat terminal. Silakan coba muat ulang.</p>
                    <button onclick="window.renderPOS()" class="mt-4 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-xs font-bold transition-all shadow-md">
                        <i class="fa-solid fa-arrows-rotate mr-1.5"></i>Muat Ulang Terminal
                    </button>
                </div>
            `)}},ts=()=>{window.setPOSViewMode=Rt,window.posAddToCart=mt,window.posAddToCartQty=Ra,window.addToCartPOSWithVariant=Fa,window.posUpdateQty=Na,window.posSetQty=Ba,window.posFormatQty=I,window.posFQty=Qe,window.posSetItemDisc=_a,window.posRemoveItem=xt,window.posClearCart=Ea,window.openPayModal=Ka,window.closePayModal=Vt,window.getPOSCart=()=>S,window.getCartTotalHpp=de,window.setPosCustomerType=Va,window.setPosPayMethod=Gt,window.updatePosChange=Qt,window.posSetQuickCash=Wt,window.ensureCustomersLoaded=Pe,window.ensureBanksLoaded=at,window.lookupPosMember=rt,window.debouncedLookupPosMember=Yt,window.selectPosMember=zt,window.resetPosMember=Jt,window.processPOSTx=Ja,window.setPosPointsRedeemed=Qa,window.selectPosReward=Wa,window.deselectPosReward=za,window.posMemberPointsDiscount=ye,window.getMaxRedeemablePoints=ft,window.getPointValue=Ze,window.printPOSReceipt=Ya,window.previewPOSReceiptThenPrint=kt,window.posSetGlobalDisc=e=>{We(e)},window.posSetDiscountType=Xt,window.posSetDiscountVal=We,window.posApplyQuickDiscount=ea,window.openPOSCameraScanner=vt,window.closePOSCameraScanner=$e,window.togglePOSScannerFacing=aa,window.togglePOSScannerTorch=ta,window.togglePOSScannerMode=sa,window.posProcessManualBarcode=ra,window.posSearchScannedCode=oa,window.executePOSPrintDirect=Zt,window.getActiveShift=U,window.isShiftActive=ve,window.syncActiveShiftFromCloud=ge,window.openPOSOpenShiftModal=Y,window.closePOSOpenShiftModal=Fe,window.openPOSShiftModal=ae,window.openPOSShiftSummaryModal=ae,window.closePOSShiftSummaryModal=ut,window.openPOSCloseShiftModal=jt,window.closePOSCloseShiftModal=Je,window.renderShiftHeaderBadge=Ye,window.printShiftSettlementReceipt=Ht,window.executeShiftPrintDirect=Dt,window.posCatFilter=e=>{ne=e,be="",q()},window.posSubCatFilter=e=>{be=e,q()},window.posSearchFn=e=>{me=typeof e=="string"?e:e?.value||"",document.querySelectorAll("#pos-search-input").forEach(t=>{t.value!==me&&(t.value=me)}),q()},window.posRenderCatalog=q,window.posRenderCart=N,window.refreshPOSCatalog=()=>{try{q()}catch(e){console.warn("refreshPOSCatalog error:",e)}},window.openPOSCartDrawer=Ut,window.closePOSCartDrawer=Ke,window.playCashierBeep=ce,window.openPOSHistory=()=>{typeof window.openAdminTab=="function"?window.openAdminTab("orders"):typeof window.showToast=="function"&&window.showToast("Semua transaksi kasir terpusat di menu Pesanan CMS Admin")},window.destroyBarcodeListener=bt,window.playCashierChime=Xe,window.posHoldCurrentCart=gt,window.closePOSHoldPrompt=wt,window.posConfirmHoldCart=Ft,window.openPOSHeldModal=et,window.closePOSHeldModal=tt,window.posRecallHeldCart=Nt,window.posHoldCurrentAndRecall=_t,window.posOverwriteAndRecall=Et,window.posDeleteHeldCart=Kt,window.posExecuteDeleteHeld=qt,window.renderHeldBadges=Ce},Xt=e=>{_=e==="percent"?"percent":"rp",ee=se(),N()},We=e=>{const t=Math.max(0,parseFloat(e)||0),a=de(),s=te(),r=a>0?Math.max(0,s-a):s;if(_==="percent"){const o=Math.min(100,t),i=Math.round(s*o/100);if(a>0&&i>r){const n=s>0?Math.floor(r/s*100):0,d=fe()?` (Total HPP ${h(a)})`:"";k(`Diskon ${o}% ditolak karena melebihi batas modal toko${d}! Diskon maksimal: ${n}% (${h(r)})`,"warning"),B=n,ee=Math.round(s*n/100),N(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("heavy");return}B=o,ee=i}else{const o=t;if(a>0&&o>r){const i=fe()?` (Total HPP ${h(a)})`:"";k(`Diskon ditolak! Total transaksi tidak boleh di bawah harga modal toko${i}. Maksimal diskon: ${h(r)}`,"warning"),B=r,ee=r,N(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("heavy");return}B=o,ee=o}N()},ea=(e,t)=>{t&&(_=t),We(e),ce()},vt=async()=>{if(c("pos-camera-scanner-modal"))return;typeof window.pushModalHistory=="function"&&window.pushModalHistory("posCameraScanner"),document.body.insertAdjacentHTML("beforeend",`
    <div id="pos-camera-scanner-modal" class="fixed inset-0 z-[10010] flex items-center justify-center p-3 sm:p-4" style="background:rgba(15,23,42,0.9)">
        <div class="bg-slate-900 text-white rounded-3xl shadow-2xl w-full max-w-md border border-slate-700/80 overflow-hidden flex flex-col max-h-[92vh]">
            <!-- Modal Header -->
            <div class="p-3.5 sm:p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/60 shrink-0">
                <div class="flex items-center gap-2 min-w-0">
                    <div class="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm font-bold shadow-inner">
                        <i class="fa-solid fa-camera"></i>
                    </div>
                    <div>
                        <h3 class="font-black text-xs sm:text-sm text-white leading-tight">Pemindai Barcode Kamera</h3>
                        <p class="text-[10px] text-slate-400">Arahkan kamera ke barcode / QR produk</p>
                    </div>
                </div>
                <div class="flex items-center gap-1.5 shrink-0">
                    <!-- Toggle Torch (Flash) -->
                    <button id="pos-scanner-torch-btn" onclick="window.togglePOSScannerTorch()" class="w-8 h-8 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center justify-center transition-all cursor-pointer" title="Lampu Flash / Senter">
                        <i class="fa-solid fa-bolt"></i>
                    </button>
                    <!-- Switch Camera -->
                    <button onclick="window.togglePOSScannerFacing()" class="w-8 h-8 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center justify-center transition-all cursor-pointer" title="Putar Kamera">
                        <i class="fa-solid fa-camera-rotate"></i>
                    </button>
                    <!-- Close -->
                    <button onclick="window.closePOSCameraScanner()" class="w-8 h-8 rounded-xl bg-slate-800 hover:bg-rose-900/50 text-slate-400 hover:text-rose-400 text-base flex items-center justify-center transition-all leading-none cursor-pointer">×</button>
                </div>
            </div>

            <!-- Viewport Kamera -->
            <div class="relative w-full bg-black flex items-center justify-center overflow-hidden aspect-[4/3] sm:h-72">
                <video id="pos-camera-video" playsinline autoplay muted class="w-full h-full object-cover"></video>
                
                <!-- Reticle Target Aiming Box -->
                <div id="pos-scanner-reticle" class="absolute w-[72%] max-w-[260px] aspect-[1.3/1] border-2 border-emerald-400/90 rounded-2xl shadow-[0_0_0_9999px_rgba(15,23,42,0.55)] pointer-events-none transition-all duration-200">
                    <!-- Corner Brackets -->
                    <span class="absolute -top-1 -left-1 w-4 h-4 border-t-4 border-l-4 border-emerald-400 rounded-tl-lg"></span>
                    <span class="absolute -top-1 -right-1 w-4 h-4 border-t-4 border-r-4 border-emerald-400 rounded-tr-lg"></span>
                    <span class="absolute -bottom-1 -left-1 w-4 h-4 border-b-4 border-l-4 border-emerald-400 rounded-bl-lg"></span>
                    <span class="absolute -bottom-1 -right-1 w-4 h-4 border-b-4 border-r-4 border-emerald-400 rounded-br-lg"></span>
                    
                    <!-- Laser Scanline Animation -->
                    <div class="pos-scanline"></div>
                </div>

                <!-- Floating Feedback Pill -->
                <div id="pos-scanner-status-pill" class="absolute bottom-3 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-[10px] font-bold text-slate-300 flex items-center gap-1.5 shadow-md">
                    <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>Menunggu barcode...</span>
                </div>
            </div>

            <!-- Action Strip & Options -->
            <div class="p-3 bg-slate-950/80 border-t border-slate-800 space-y-2.5 shrink-0">
                <!-- Mode Continuous vs Single -->
                <div class="flex items-center justify-between text-xs px-1">
                    <span class="text-slate-400 text-[11px] font-medium flex items-center gap-1.5">
                        <i class="fa-solid fa-repeat text-emerald-400 text-xs"></i>
                        Mode Pemindaian:
                    </span>
                    <button onclick="window.togglePOSScannerMode()" id="pos-scanner-mode-btn" class="px-2.5 py-1 rounded-lg bg-emerald-950/60 border border-emerald-600/60 text-emerald-400 text-[10px] font-black tracking-wider uppercase transition-all cursor-pointer">
                        Terus-menerus
                    </button>
                </div>

                <!-- Fallback Input Manual Barcode -->
                <div class="flex items-center gap-1.5">
                    <div class="relative flex-1">
                        <i class="fa-solid fa-barcode absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-xs"></i>
                        <input id="pos-manual-barcode-input" type="text" placeholder="Atau ketik/scan nomor barcode..."
                            class="w-full pl-8 pr-3 py-2 rounded-xl border border-slate-700 bg-slate-800 text-xs font-mono font-bold text-white placeholder-slate-500 focus:outline-none focus:border-[var(--color-primary)] transition-all"
                            onkeydown="if(event.key==='Enter') window.posProcessManualBarcode(this.value)">
                    </div>
                    <button onclick="window.posProcessManualBarcode(document.getElementById('pos-manual-barcode-input')?.value)"
                        class="px-3.5 py-2 rounded-xl text-white text-xs font-bold transition-all active:scale-95 shadow-md cursor-pointer hover:brightness-105" style="background:var(--color-primary)">
                        Tambah
                    </button>
                </div>

                <!-- Last Scanned Banner -->
                <div id="pos-last-scanned-banner" class="hidden p-2 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-[11px] text-emerald-300 flex items-center justify-between">
                    <div class="flex items-center gap-1.5 min-w-0">
                        <i class="fa-solid fa-circle-check text-emerald-400 shrink-0"></i>
                        <span id="pos-last-scanned-text" class="truncate font-bold">-</span>
                    </div>
                    <span id="pos-last-scanned-price" class="font-black text-emerald-400 shrink-0 ml-2">-</span>
                </div>
            </div>
        </div>
    </div>`),await as()},as=async()=>{const e=c("pos-camera-video");if(e)try{const t={video:{facingMode:{ideal:Mt},width:{ideal:1280},height:{ideal:720}},audio:!1},a=await navigator.mediaDevices.getUserMedia(t);Me=a,e.srcObject=a,await e.play();const s=a.getVideoTracks();if(s.length>0){we=s[0];const r=we.getCapabilities?we.getCapabilities():{},o=c("pos-scanner-torch-btn");o&&(r.torch?o.classList.remove("hidden"):o.classList.add("opacity-40"))}if(typeof window.BarcodeDetector<"u")try{ot=new BarcodeDetector({formats:["ean_13","ean_8","upc_a","upc_e","code_128","code_39","code_93","qr_code","data_matrix"]})}catch{ot=null}De&&clearInterval(De),De=setInterval(async()=>{if(!(!ot||!e||e.readyState<2))try{const r=await ot.detect(e);if(r&&r.length>0){const o=r[0].rawValue?.trim();o&&ss(o)}}catch{}},180)}catch(t){console.warn("[POS Scanner] Gagal akses kamera:",t);const a=c("pos-scanner-status-pill");a&&(a.innerHTML='<span class="text-rose-400 font-bold"><i class="fa-solid fa-triangle-exclamation mr-1"></i>Kamera tidak dapat diakses</span>'),k("Izin kamera ditolak atau kamera sedang digunakan aplikasi lain.","warning")}},ss=e=>{const t=Date.now();if(e===da&&t-ca<1800)return;da=e,ca=t;const a=e.toLowerCase(),s=(f.products||[]).find(l=>l&&l.isActive!=="false"&&l.isActive!==!1&&(l.barcode&&l.barcode.toLowerCase()===a||l.sku&&l.sku.toLowerCase()===a||l.id&&String(l.id).toLowerCase()===a)),r=c("pos-scanner-reticle"),o=c("pos-scanner-status-pill"),i=c("pos-last-scanned-banner"),n=c("pos-last-scanned-text"),d=c("pos-last-scanned-price");if(s){if(r&&(r.classList.add("border-emerald-300","scale-105","bg-emerald-500/20"),setTimeout(()=>{r.classList.remove("border-emerald-300","scale-105","bg-emerald-500/20")},300)),ce(),s.variants&&s.variants.length>0){o&&(o.innerHTML='<span class="text-amber-300 font-bold">Buka pilihan varian...</span>'),$e(),La().then(()=>{typeof window.openPOSVariantSheet=="function"&&window.openPOSVariantSheet(s.id)});return}mt(s.id)?(i&&n&&d&&(n.textContent=s.name,d.textContent=h(parseFloat(s.price)||0),i.classList.remove("hidden")),o&&(o.innerHTML=`<span class="text-emerald-300 font-black"><i class="fa-solid fa-check mr-1"></i>${b(s.name)} (+1)</span>`,setTimeout(()=>{o&&(o.innerHTML='<span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span><span>Menunggu barcode...</span>')},1500)),it||($e(),k(`Ditambahkan: ${s.name}`,"success"))):o&&(o.innerHTML=`<span class="text-rose-400 font-bold"><i class="fa-solid fa-ban mr-1"></i>Stok "${b(s.name)}" Habis</span>`,setTimeout(()=>{o&&(o.innerHTML='<span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span><span>Menunggu barcode...</span>')},2e3))}else r&&(r.classList.add("border-rose-500","bg-rose-500/20"),setTimeout(()=>{r.classList.remove("border-rose-500","bg-rose-500/20")},400)),o&&(o.innerHTML=`<span class="text-rose-400 font-bold"><i class="fa-solid fa-xmark mr-1"></i>Barcode "${e}" tidak ditemukan</span>`)},$e=(e=!1)=>{if(De&&(clearInterval(De),De=null),Me){try{Me.getTracks().forEach(a=>a.stop())}catch{}Me=null}we=null,Ue=!1;const t=c("pos-camera-scanner-modal");t&&(!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("posCameraScanner",!1,()=>t.remove()):t.remove())},ta=async()=>{if(we)try{if(!(we.getCapabilities?we.getCapabilities():{}).torch){k("Lampu senter (torch) tidak didukung kamera ini.");return}Ue=!Ue,await we.applyConstraints({advanced:[{torch:Ue}]});const t=c("pos-scanner-torch-btn");t&&(Ue?(t.classList.add("bg-amber-500","text-white"),t.classList.remove("bg-slate-800","text-slate-300")):(t.classList.remove("bg-amber-500","text-white"),t.classList.add("bg-slate-800","text-slate-300")))}catch(e){console.warn("Gagal toggle torch:",e)}},aa=async()=>{Mt=Mt==="environment"?"user":"environment",Me&&(Me.getTracks().forEach(e=>e.stop()),Me=null),await as()},sa=()=>{it=!it;const e=c("pos-scanner-mode-btn");e&&(it?(e.textContent="Terus-menerus",e.className="px-2.5 py-1 rounded-lg bg-emerald-950/60 border border-emerald-600/60 text-emerald-400 text-[10px] font-black tracking-wider uppercase transition-all cursor-pointer"):(e.textContent="Scan Sekali",e.className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-[10px] font-black tracking-wider uppercase transition-all cursor-pointer"))},ra=e=>{if(!e||!e.trim())return;ss(e.trim());const t=c("pos-manual-barcode-input");t&&(t.value="")},oa=e=>{$e();const t=c("pos-search-input");t&&(t.value=e,me=e,q())};window.setPOSViewMode=Rt;window.renderPOSStorefront=Xa;window.renderPOS=es;window.destroyBarcodeListener=bt;window.openPOSCartDrawer=Ut;window.closePOSCartDrawer=Ke;window.posSetQuickCash=Wt;window.playCashierBeep=ce;window.playCashierChime=Xe;window.posHoldCurrentCart=gt;window.closePOSHoldPrompt=wt;window.posConfirmHoldCart=Ft;window.openPOSHeldModal=et;window.closePOSHeldModal=tt;window.posRecallHeldCart=Nt;window.posHoldCurrentAndRecall=_t;window.posOverwriteAndRecall=Et;window.posDeleteHeldCart=Kt;window.posExecuteDeleteHeld=qt;window.renderHeldBadges=Ce;window.ensureCustomersLoaded=Pe;window.ensureBanksLoaded=at;window.lookupPosMember=rt;window.debouncedLookupPosMember=Yt;window.selectPosMember=zt;window.resetPosMember=Jt;window.posSetDiscountType=Xt;window.posSetDiscountVal=We;window.posApplyQuickDiscount=ea;window.openPOSCameraScanner=vt;window.closePOSCameraScanner=$e;window.togglePOSScannerFacing=aa;window.togglePOSScannerTorch=ta;window.togglePOSScannerMode=sa;window.posProcessManualBarcode=ra;window.posSearchScannedCode=oa;window.executePOSPrintDirect=Zt;window.previewPOSReceiptThenPrint=kt;window.getActiveShift=U;window.isShiftActive=ve;window.syncActiveShiftFromCloud=ge;window.openPOSOpenShiftModal=Y;window.closePOSOpenShiftModal=Fe;window.openPOSShiftModal=ae;window.openPOSShiftSummaryModal=ae;window.closePOSShiftSummaryModal=ut;window.openPOSCloseShiftModal=jt;window.closePOSCloseShiftModal=Je;window.renderShiftHeaderBadge=Ye;window.printShiftSettlementReceipt=Ht;window.executeShiftPrintDirect=Dt;window.posSubCatFilter=e=>{be=e,q()};window.getPOSCart=()=>S;const Rs=Object.freeze(Object.defineProperty({__proto__:null,addToCart:mt,addToCartWithVariant:Fa,applyMemberToPos:ct,clearCart:Ea,closePOSCameraScanner:$e,closePOSCartDrawer:Ke,closePOSHeldModal:tt,closePOSHoldPrompt:wt,closePayModal:Vt,debouncedLookupPosMember:Yt,deselectPosReward:za,destroyBarcodeListener:bt,ensureBanksLoaded:at,ensureCustomersLoaded:Pe,executePOSPrintDirect:Zt,formatQty:I,getCartTotalHpp:de,getMaxRedeemablePoints:ft,getPointValue:Ze,getProductStockInfo:Ee,lookupPosMember:rt,openPOSCameraScanner:vt,openPOSCartDrawer:Ut,openPOSHeldModal:et,openPayModal:Ka,playCashierBeep:ce,playCashierChime:Xe,posAddToCartQty:Ra,posApplyQuickDiscount:ea,posConfirmHoldCart:Ft,posDeleteHeldCart:Kt,posDiscountAmount:se,posExecuteDeleteHeld:qt,posHoldCurrentAndRecall:_t,posHoldCurrentCart:gt,posMemberPointsDiscount:ye,posOverwriteAndRecall:Et,posProcessManualBarcode:ra,posRecallHeldCart:Nt,posSearchScannedCode:oa,posSetDiscountType:Xt,posSetDiscountVal:We,posSetQuickCash:Wt,posTaxInfo:oe,posTogglePaylater:Ua,previewPOSReceiptThenPrint:kt,printPOSReceipt:Ya,processPOSTx:Ja,removeFromCart:xt,renderCatalog:q,renderHeldBadges:Ce,renderPOS:es,renderPOSStorefront:Xa,renderPosMemberResult:st,resetPosMember:Jt,selectPosMember:zt,selectPosReward:Wa,setItemDisc:_a,setPOSViewMode:Rt,setPosCustomerType:Va,setPosPayMethod:Gt,setPosPointsRedeemed:Qa,setQty:Ba,stopClock:Da,togglePOSScannerFacing:aa,togglePOSScannerMode:sa,togglePOSScannerTorch:ta,updatePosChange:Qt,updateQty:Na},Symbol.toStringTag,{value:"Module"}));export{ds as P,E as R,Pt as a,fs as b,ps as c,fe as d,Rs as e,Ne as g,ba as h,ze as i,Is as p,Ts as r,cs as s};

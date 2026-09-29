const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/pos-variant-sheet-CPrPGCnd.js","assets/module-print-tPi6CwSe.js","assets/vendor-firebase-core-D2OF5R23.js","assets/vendor-firebase-db-BIUZcnOd.js"])))=>i.map(i=>d[i]);
import{ah as je,$ as G,a as m,c as ca,y as ra,v as g,e as c,l as O,i as u,aA as xe,x as ss,z as kt,u as vt,b as rs,ai as os,f as ns}from"./module-print-tPi6CwSe.js";import{f as Ee}from"./vendor-firebase-core-D2OF5R23.js";const K={OWNER:"owner",ADMIN:"admin",CASHIER:"cashier"},is=[{key:"orders",label:"Pesanan Online",desc:"Proses status pesanan, update resi pengiriman & konfirmasi bayar",group:"operasional",icon:"fa-receipt"},{key:"products",label:"Katalog Produk & Stok",desc:"Tambah/edit produk, atur varian, dan perbarui stok barang",group:"operasional",icon:"fa-box-open"},{key:"suppliers",label:"Supplier & Rekanan",desc:"Kelola master data supplier, kontak kulakan, dan asal produk",group:"operasional",icon:"fa-truck-field"},{key:"purchases",label:"Order Kulakan (PO)",desc:"Buat PO pembelian grosir, terima restock, & kelola hutang rekanan",group:"operasional",icon:"fa-cart-flatbed"},{key:"piutang",label:"Piutang Tempo & Cicilan",desc:"Kelola nota piutang pelanggan, denda keterlambatan, & cicilan",group:"operasional",icon:"fa-clock-rotate-left"},{key:"customers",label:"Database Pelanggan",desc:"Lihat daftar member, atur limit kredit PayLater, & mutasi poin",group:"operasional",icon:"fa-address-book"},{key:"pos",label:"Kasir POS",desc:"Akses antarmuka penjualan kasir toko fisik dan shift kasir",group:"operasional",icon:"fa-cash-register"},{key:"categories",label:"Kategori Produk",desc:"Tambah dan susun kategori etalase produk",group:"konten",icon:"fa-tags"},{key:"brands",label:"Merek Produk",desc:"Kelola daftar brand dagang barang",group:"konten",icon:"fa-copyright"},{key:"colors",label:"Database Warna",desc:"Katalog warna produk dan swatch varian",group:"konten",icon:"fa-swatchbook"},{key:"vouchers",label:"Voucher & Promo",desc:"Buat kode voucher diskon dan promo belanja",group:"konten",icon:"fa-ticket-simple"},{key:"banners",label:"Banner Promosi",desc:"Kelola gambar dan video slider beranda toko",group:"konten",icon:"fa-images"},{key:"rewards",label:"Program Hadiah Poin",desc:"Kelola katalog hadiah penukaran poin member",group:"konten",icon:"fa-gift"},{key:"reviews",label:"Ulasan Pelanggan",desc:"Moderasi ulasan dan testimoni produk pembeli",group:"konten",icon:"fa-star"},{key:"faqs",label:"Tanya Jawab / Q&A",desc:"Kelola jawaban pertanyaan umum pembeli",group:"konten",icon:"fa-circle-question"},{key:"changelog",label:"Log Pembaruan Sistem",desc:"Melihat riwayat update sistem toko",group:"konten",icon:"fa-code-branch"},{key:"view_reports",label:"Laporan Finansial & Laba",desc:"Lihat omset, total HPP terjual, margin & laba bersih toko",group:"sensitif",icon:"fa-chart-line"},{key:"tax",label:"Pajak & Keuangan (PPN)",desc:"Laporan PPN, neraca keuangan, dan laba rugi resmi",group:"sensitif",icon:"fa-file-invoice-dollar"},{key:"banks",label:"Rekening Bank & QRIS",desc:"Ubah nomor rekening toko dan QRIS tujuan pembayaran",group:"sensitif",icon:"fa-building-columns"},{key:"settings",label:"Pengaturan Utama Toko",desc:"Konfigurasi nama toko, GPS maps, tarif ongkir, & sistem",group:"sensitif",icon:"fa-gear"},{key:"cashiers",label:"Kelola Staf & Hak Akses",desc:"Daftarkan staf baru, atur jabatan, & ubah batasan hak akses",group:"sensitif",icon:"fa-users-gear"},{key:"backup_sync",label:"Pusat Data & Backup Cloud",desc:"Cadangkan data toko, ekspor database, & sinkronisasi cloud",group:"sensitif",icon:"fa-cloud-arrow-up"}],yt={[K.CASHIER]:{pos:!0,orders:!1,products:!1,suppliers:!1,purchases:!1,piutang:!1,customers:!1,categories:!1,brands:!1,colors:!1,vouchers:!1,banners:!1,rewards:!1,reviews:!1,faqs:!1,changelog:!1,view_reports:!1,tax:!1,banks:!1,settings:!1,cashiers:!1,backup_sync:!1},[K.ADMIN]:{pos:!0,orders:!0,products:!0,suppliers:!0,purchases:!0,piutang:!0,customers:!0,categories:!0,brands:!0,colors:!0,vouchers:!0,banners:!0,rewards:!0,reviews:!0,faqs:!0,changelog:!0,view_reports:!1,tax:!1,banks:!1,settings:!1,cashiers:!1,backup_sync:!1},manager:{pos:!0,orders:!0,products:!0,suppliers:!0,purchases:!0,piutang:!0,customers:!0,categories:!0,brands:!0,colors:!0,vouchers:!0,banners:!0,rewards:!0,reviews:!0,faqs:!0,changelog:!0,view_reports:!0,tax:!0,banks:!1,settings:!1,cashiers:!1,backup_sync:!1},[K.OWNER]:{pos:!0,orders:!0,products:!0,suppliers:!0,purchases:!0,piutang:!0,customers:!0,categories:!0,brands:!0,colors:!0,vouchers:!0,banners:!0,rewards:!0,reviews:!0,faqs:!0,changelog:!0,view_reports:!0,tax:!0,banks:!0,settings:!0,cashiers:!0,backup_sync:!0}};let Ce=null;const Re=()=>{if(Ce)return Ce;try{const e=sessionStorage.getItem("freshmart_staff_profile");if(e)return Ce=JSON.parse(e),Ce}catch{}return null},ls=e=>{Ce=e;try{e?sessionStorage.setItem("freshmart_staff_profile",JSON.stringify(e)):sessionStorage.removeItem("freshmart_staff_profile")}catch{}},ds=()=>{Ce=null;try{sessionStorage.removeItem("freshmart_staff_profile")}catch{}},Qe=()=>{const e=G.currentUser;return e&&e.uid===je?!0:Re()?.role===K.OWNER},pa=()=>Qe()?!0:Re()?.role===K.ADMIN,cs=()=>Qe()||pa()?!1:Re()?.role===K.CASHIER,fa=e=>{if(Qe())return!0;const t=Re();return t?t.isActive===!1?!1:t.role===K.CASHIER?e==="pos":t.permissions&&typeof t.permissions[e]<"u"?t.permissions[e]===!0:(yt[t.role]||yt[K.ADMIN])[e]===!0:window.isAdm||window.__localIsAdm?["banks","settings","cashiers","backup_sync"].includes(e)?G.currentUser?.uid===je:!0:!1},ce=()=>{if(Qe())return!0;try{const t=sessionStorage.getItem("pos_cashier_session");if(t){const a=JSON.parse(t);if(a.role===K.OWNER||a.uid===je)return!0;if(a.role===K.CASHIER)return!1}}catch{}const e=Re();return e?e.role===K.OWNER||e.uid===je?!0:e.role===K.CASHIER?!1:fa("view_reports"):!!(window.isAdm||window.__localIsAdm)},ps=e=>{switch(e){case K.OWNER:return`
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/60 shadow-2xs">
                <i class="fa-solid fa-crown text-[9px] text-amber-500"></i>
                <span>Owner</span>
            </span>`;case K.ADMIN:return`
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60 shadow-2xs">
                <i class="fa-solid fa-shield-halved text-[9px]"></i>
                <span>Admin Toko</span>
            </span>`;case K.CASHIER:default:return`
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 shadow-2xs">
                <i class="fa-solid fa-cash-register text-[9px]"></i>
                <span>Kasir POS</span>
            </span>`}};typeof window<"u"&&(window.ROLES=K,window.PERMISSION_DEFINITIONS=is,window.ROLE_PRESETS=yt,window.getActiveStaff=Re,window.setActiveStaff=ls,window.clearActiveStaff=ds,window.isOwnerUser=Qe,window.isAdminUser=pa,window.isCashierUser=cs,window.hasPermission=fa,window.canViewHpp=ce,window.getRoleBadgeHtml=ps);const ua=e=>{const t=m.products?.find(r=>r&&r.id!=null&&String(r.id)===String(e.id));let a=e.price||0;if(e.variantName&&t&&t.variants){const r=t.variants.find(n=>n.name===e.variantName);r&&r.price!=null&&(a=r.price)}if(e.variantName||!t||!t.wholesale||!t.wholesale.length)return a;const s=ca.filter(r=>r.id!=null&&String(r.id)===String(e.id)).reduce((r,n)=>r+(parseFloat(n.qty)||0),0);for(let r of t.wholesale.slice().sort((n,o)=>o.minQty-n.minQty))if(s>=parseFloat(r.minQty))return r.price;return a},Fe=e=>{const t=m.products?.find(a=>a&&a.id!=null&&String(a.id)===String(e.id));if(!t)return 0;if(e.variantName&&t.variants){const a=t.variants.find(s=>s.name===e.variantName);if(a&&a.hpp!=null)return parseFloat(a.hpp)||0}return parseFloat(t.hpp)||0},ba=e=>{if(!e)return 0;const t=m.products?.find(a=>a&&a.id!=null&&String(a.id)===String(e.id));if(!t)return parseFloat(e.poin)||0;if(e.variantName&&t.variants){const a=t.variants.find(s=>s.name===e.variantName);if(a&&a.poin!==void 0&&a.poin!==null&&a.poin!==""){const s=parseFloat(a.poin);if(!isNaN(s)&&s>0)return s}}return parseFloat(t.poin)||0},fs=(e,t,a,s)=>{if(!e||!t||!a||!s)return 0;const r=6371,n=(a-e)*Math.PI/180,o=(s-t)*Math.PI/180,i=Math.sin(n/2)*Math.sin(n/2)+Math.cos(e*Math.PI/180)*Math.cos(a*Math.PI/180)*Math.sin(o/2)*Math.sin(o/2),d=2*Math.atan2(Math.sqrt(i),Math.sqrt(1-i));return r*d},ma=e=>{if(!e||typeof e!="string")return null;let t=e.trim();try{t=decodeURIComponent(t)}catch{}const a=t.match(/@(-?\d{1,3}\.\d+)[,\s]+(-?\d{1,3}\.\d+)/);if(a){const o=parseFloat(a[1]),i=parseFloat(a[2]);if(!isNaN(o)&&!isNaN(i)&&Math.abs(o)<=90&&Math.abs(i)<=180)return{lat:a[1],lng:a[2]}}const s=t.match(/[?&](?:q|ll|query|loc|center)=(-?\d{1,3}\.\d+)[,\s]+(-?\d{1,3}\.\d+)/i);if(s){const o=parseFloat(s[1]),i=parseFloat(s[2]);if(!isNaN(o)&&!isNaN(i)&&Math.abs(o)<=90&&Math.abs(i)<=180)return{lat:s[1],lng:s[2]}}const r=t.match(/(\d+)[°\s]+(\d+)['\s]+([\d.]+)"?\s*([NSns])[,\s]+(\d+)[°\s]+(\d+)['\s]+([\d.]+)"?\s*([EWew])/);if(r){let o=parseInt(r[1],10)+parseInt(r[2],10)/60+parseFloat(r[3])/3600;r[4].toUpperCase()==="S"&&(o=-o);let i=parseInt(r[5],10)+parseInt(r[6],10)/60+parseFloat(r[7])/3600;return r[8].toUpperCase()==="W"&&(i=-i),{lat:o.toFixed(8),lng:i.toFixed(8)}}const n=t.match(/(-?\d{1,3}\.\d{3,20})[,\s;\t]+(-?\d{1,3}\.\d{3,20})/);if(n){const o=parseFloat(n[1]),i=parseFloat(n[2]);if(!isNaN(o)&&!isNaN(i)&&Math.abs(o)<=90&&Math.abs(i)<=180)return{lat:n[1],lng:n[2]}}return null},us=e=>{const t=(typeof e=="string"?e:e?.value||"").trim(),a=ma(t);return a?(ra("set-lat",a.lat),ra("set-lng",a.lng),g("Koordinat GPS berhasil disalin!"),a):(g("Format tidak dikenali! Tempel koordinat: Lat, Lng atau link Google Maps"),null)},bs=(e=ca,t=m.store)=>{if(!e||!e.length)return{totalPoints:0,directPoints:0,spendPoints:0,nonPointSpend:0,threshold:1e5,pointsPerThreshold:1,isSpendPointsActive:!1,remainingToNextPoint:0,progressPercent:0};let a=0,s=0;e.forEach(f=>{const x=ba(f),P=parseFloat(f.qty)||0;if(x>0)a+=x*P;else{const S=ua(f);s+=S*P}});let r=0,n=0,o=0;const i=t?t.spendPointsEnabled===!0||t.spendPointsEnabled==="true":!1,d=Math.max(1,parseFloat(t?.spendPointsThreshold)||1e5),l=Math.max(1,parseFloat(t?.spendPointsPerThreshold)||1);if(i&&s>0){const f=Math.floor(s/d);r=f*l;const x=s%d;n=x>0?d-x:d,o=Math.min(100,Math.round((x||(f>0?d:0))/d*100))}return{totalPoints:a+r,directPoints:a,spendPoints:r,nonPointSpend:s,threshold:d,pointsPerThreshold:l,isSpendPointsActive:i,remainingToNextPoint:n,progressPercent:o}};window.getEffP=ua;window.getEffHpp=Fe;window.getEffPoin=ba;window.calculateCartPoints=bs;window.getDist=fs;window.parseGeoCoordinates=ma;window.autoParseCoords=us;let Ae=null;const se=()=>{if(Ae)return Ae;try{const e=sessionStorage.getItem("pos_cashier_session");if(e)return Ae=JSON.parse(e),Ae}catch{}return null},St=e=>{Ae=e;try{e?sessionStorage.setItem("pos_cashier_session",JSON.stringify(e)):sessionStorage.removeItem("pos_cashier_session")}catch{}},xa=()=>{Ae=null;try{sessionStorage.removeItem("pos_cashier_session")}catch{}},ha=()=>!!se(),ga=async()=>{if(se()||window.isAdm||window.__localIsAdm||m&&(m.hasCashier===!0||m.store?.posEnabled===!0))return!0;const e=localStorage.getItem("pos_has_cashier");if(e==="true")return!0;const t=!!(window.isAdm||window.__localIsAdm||G.currentUser&&G.currentUser.uid===je);try{if(t){const s=!(await O.collection("freshmart").doc("cms_data").collection("cashier_accounts").where("isActive","==",!0).limit(1).get()).empty;try{localStorage.setItem("pos_has_cashier",s?"true":"false"),O.collection("freshmart").doc("cms_data").set({hasCashier:s},{merge:!0}).catch(()=>{})}catch{}return s}else{const a=await O.collection("freshmart").doc("cms_data").get();if(a.exists){const s=a.data();if(s.hasCashier!==void 0){const r=!!s.hasCashier;try{localStorage.setItem("pos_has_cashier",r?"true":"false")}catch{}return r}}return e!=="false"}}catch{return e!=="false"}},qe=async()=>{const e=c("pos-cashier-header-btn");if(!e)return;const t=!!se(),a=!!(window.isAdm||window.__localIsAdm),s=localStorage.getItem("pos_has_cashier"),r=m?m.hasCashier??!0:!0;t||a||s==="true"||s===null&&r!==!1?e.classList.remove("hidden"):s==="false"&&e.classList.add("hidden");try{await ga()||t||a?e.classList.remove("hidden"):e.classList.add("hidden")}catch{(t||a||s!=="false")&&e.classList.remove("hidden")}},wa=async()=>{typeof window.triggerHaptic=="function"&&window.triggerHaptic("medium"),se()?(typeof window.changeView=="function"&&window.changeView("view-pos-cashier"),typeof window.renderPOSStorefront=="function"&&window.renderPOSStorefront()):Tt()},Tt=()=>{const e=c("pos-login-modal");e&&(e.classList.remove("hidden"),setTimeout(()=>{e.classList.remove("opacity-0");const t=c("pos-login-modal-box");t&&t.classList.remove("translate-y-full","scale-95")},10),setTimeout(()=>{const t=c("pos-login-email");t&&t.focus()},300),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},Mt=()=>{const e=c("pos-login-modal"),t=c("pos-login-modal-box");e&&e.classList.add("opacity-0"),t&&t.classList.add("translate-y-full"),setTimeout(()=>{e&&e.classList.add("hidden");const a=c("pos-login-email"),s=c("pos-login-password"),r=c("pos-login-error");a&&(a.value=""),s&&(s.value=""),r&&(r.textContent="",r.classList.add("hidden"))},300)},ka=async()=>{const e=c("pos-login-email"),t=c("pos-login-password"),a=c("pos-login-error"),s=c("pos-login-btn"),r=e?.value?.trim()||"",n=t?.value||"",o=d=>{if(a){a.classList.remove("hidden");const l=a.querySelector("span");l?l.textContent=d:a.textContent=d}typeof window.triggerHaptic=="function"&&window.triggerHaptic("error")};if((()=>{if(a){a.classList.add("hidden");const d=a.querySelector("span");d&&(d.textContent="")}})(),!r||!n){o("Email dan password wajib diisi.");return}s&&(s.disabled=!0,s.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i>Memverifikasi...');try{const l=(await G.signInWithEmailAndPassword(r,n)).user?.uid;if(!l)throw new Error("UID tidak ditemukan");if(l===je){St({uid:l,name:"Owner Toko",email:r,role:"owner"});try{localStorage.setItem("pos_has_cashier","true")}catch{}qe()}else{const P=await O.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(l).get();if(!P.exists){await G.signOut(),o("Akun ini bukan akun staf/kasir yang terdaftar di toko ini.");return}const S=P.data()||{};if(S.isActive===!1){await G.signOut(),o("Akun staf ini telah dinonaktifkan oleh Owner toko.");return}if(!(S.role==="cashier"||S.role==="admin"||S.role==="owner"||S.permissions?.pos!==!1)){await G.signOut(),o("Akun ini tidak memiliki hak akses kasir POS.");return}St({uid:l,name:S.name||r,email:S.email||r,role:S.role||"cashier"});try{localStorage.setItem("pos_has_cashier","true")}catch{}qe()}typeof window.syncActiveShiftFromCloud=="function"&&window.syncActiveShiftFromCloud().catch(()=>{}),Mt();const f=se();g(`Selamat datang, ${f?.name||"Kasir"}! 👋`,"success"),typeof window.changeView=="function"&&window.changeView("view-pos-cashier"),setTimeout(()=>{typeof window.renderPOSStorefront=="function"&&window.renderPOSStorefront()},100),typeof window.triggerHaptic=="function"&&window.triggerHaptic("success")}catch(d){console.error("[POS Auth] Login error:",d);const l=d.code||"";o(l==="auth/user-not-found"||l==="auth/wrong-password"||l==="auth/invalid-credential"?"Email atau password salah.":l==="auth/too-many-requests"?"Terlalu banyak percobaan. Coba lagi beberapa saat.":l==="auth/network-request-failed"?"Koneksi gagal. Periksa jaringan internet.":"Login gagal: "+(d.message||"Kesalahan tidak diketahui"))}finally{s&&(s.disabled=!1,s.innerHTML='<i class="fa-solid fa-right-to-bracket mr-2"></i>Masuk Kasir')}},$t=async(e=!1)=>{if(!e&&typeof window.getActiveShift=="function"){const a=window.getActiveShift();if(a&&a.status==="open"){document.getElementById("pos-logout-shift-modal")?.remove();const s=typeof window.fRp=="function"?window.fRp(a.startingCash):"Rp "+a.startingCash;document.body.insertAdjacentHTML("beforeend",`
            <div id="pos-logout-shift-modal" class="fixed inset-0 z-[10005] flex items-center justify-center p-3 sm:p-4" style="background:rgba(15,23,42,0.75);backdrop-filter:blur(5px)">
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
            </div>`);return}}se(),typeof window.detachPOSHistoryListener=="function"&&window.detachPOSHistoryListener(),typeof window.detachActiveShiftListener=="function"&&window.detachActiveShiftListener(),typeof window.clearActiveShift=="function"&&window.clearActiveShift();try{if(!window.isAdm&&!window.__localIsAdm)try{await G.signOut()}catch{}}catch{}xa();const t=c("view-pos-cashier");t&&(t.innerHTML=""),typeof window.destroyBarcodeListener=="function"&&window.destroyBarcodeListener(),typeof window.stopPOSClock=="function"&&window.stopPOSClock(),g("Sesi kasir berakhir. Sampai jumpa! 👋"),typeof window.changeView=="function"&&window.changeView("view-catalog"),typeof window.triggerHaptic=="function"&&window.triggerHaptic("medium"),typeof window.updatePOSHeaderIcon=="function"&&window.updatePOSHeaderIcon()},va=async()=>{await qe()};window.openPOSCashierMode=wa;window.openPOSLoginModal=Tt;window.closePOSLoginModal=Mt;window.processCashierLogin=ka;window.cashierLogout=$t;window.exitPOSMode=$t;window.getCashierSession=se;window.isCashierLoggedIn=ha;window.initPOSAuth=va;window.updatePOSHeaderIcon=qe;const js=Object.freeze(Object.defineProperty({__proto__:null,cashierLogout:$t,checkCashierExists:ga,clearCashierSession:xa,closePOSLoginModal:Mt,getCashierSession:se,initPOSAuth:va,isCashierLoggedIn:ha,openPOSCashierMode:wa,openPOSLoginModal:Tt,processCashierLogin:ka,setCashierSession:St,updatePOSHeaderIcon:qe},Symbol.toStringTag,{value:"Module"})),v=e=>"Rp "+Math.round(parseFloat(e)||0).toLocaleString("id-ID"),ya=e=>parseFloat((parseFloat(e)||0).toFixed(3)).toString(),nt="pos_active_shift",Sa="pos_last_closed_shift";let Oe=null,rt=null;const it=()=>{if(typeof rt=="function"){try{rt()}catch{}rt=null}},Ne=()=>{const e=typeof se=="function"?se():null,t=!!(window.isAdm||window.__localIsAdm||window.__currentAdminUid),a=G?.currentUser?.uid,s=e?.uid||(t?window.__currentAdminUid||a||"admin":a||"cashier-anon"),r=e?.name||(t?"Admin Seller":"Kasir Toko"),n=e?.email||t&&G?.currentUser?.email||"";return{uid:s,name:r,email:n,isAdm:t}},De=(e,t=Ne())=>{if(!e)return!1;const a=e.cashierUid;return!!(a&&t.uid&&a===t.uid||t.isAdm&&(a==="admin"||a==="ADMIN_UID"||a===window.__currentAdminUid||G?.currentUser&&a===G.currentUser.uid))},q=()=>{if(Oe)return Oe;try{const e=localStorage.getItem(nt);if(e)return Oe=JSON.parse(e),Oe}catch(e){console.warn("[POS Shift] Gagal membaca active shift:",e)}return null},ue=e=>{Oe=e;try{e?localStorage.setItem(nt,JSON.stringify(e)):localStorage.removeItem(nt)}catch{}},Ue=()=>{Oe=null;try{localStorage.removeItem(nt)}catch{}},ms=()=>{try{const e=localStorage.getItem(Sa);if(e)return JSON.parse(e)}catch{}return null},Ct=e=>{try{localStorage.setItem(Sa,JSON.stringify(e))}catch{}},he=()=>{const e=q();return!!(e&&e.status==="open")},dt=async(e=null)=>{const t=Ne();try{const a=await O.collection("freshmart").doc("cms_data").collection("pos_shifts").where("status","==","open").get();if(!a.empty){const s=[];if(a.forEach(r=>{const n={id:r.id,...r.data()};De(n,t)&&s.push(n)}),s.length>0)return s.sort((r,n)=>(n.startTime||0)-(r.startTime||0)),s[0]}}catch(a){console.warn("[POS Shift] Cek open shift cms_data:",a)}try{const a=await O.collection("pos_shifts").where("status","==","open").get();if(!a.empty){const s=[];if(a.forEach(r=>{const n={id:r.id,...r.data()};De(n,t)&&s.push(n)}),s.length>0)return s.sort((r,n)=>(n.startTime||0)-(r.startTime||0)),s[0]}}catch(a){console.warn("[POS Shift] Cek open shift root pos_shifts:",a)}return null},ve=e=>{if(e){it();try{rt=O.collection("freshmart").doc("cms_data").collection("pos_shifts").doc(e).onSnapshot(a=>{if(!a.exists)return;const s={id:a.id,...a.data()};if(s.status==="closed"){it(),Ue(),Ct(s),ct(),We(),Ie(),g("Shift kasir telah ditutup dari perangkat lain.","info"),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge();return}if(s.status==="open"){ue(s),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge();const r=c("pos-shift-summary-modal");r&&!r.classList.contains("opacity-0")&&X()}},a=>{console.warn("[POS Shift] Snapshot listener cms_data error:",a)})}catch(t){console.warn("[POS Shift] Gagal attach snapshot listener:",t)}}},be=async()=>{const e=Ne(),t=q();if(t&&t.status==="open"&&De(t,e))try{const a=await O.collection("freshmart").doc("cms_data").collection("pos_shifts").doc(t.id).get();if(a.exists){const s={id:a.id,...a.data()};if(s.status==="closed")Ue(),Ct(s),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge();else return ue(s),ve(s.id),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge(),s}}catch(a){return console.warn("[POS Shift] Gagal verifikasi local shift ke cloud:",a),ve(t.id),t}try{const a=await dt(e.uid);if(a)return ue(a),ve(a.id),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge(),a;t&&!De(t,e)&&(Ue(),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge())}catch(a){console.warn("[POS Shift] Gagal cari shift open di cloud:",a)}return q()},Pa=(e="open")=>{try{if(typeof window<"u"&&typeof window.checkUserGesture=="function"&&!window.checkUserGesture())return;const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const a=new t,s=a.currentTime;e==="open"?([523.25,659.25,783.99,1046.5].forEach((n,o)=>{const i=a.createOscillator(),d=a.createGain(),l=s+o*.07;i.type="sine",i.frequency.setValueAtTime(n,l),d.gain.setValueAtTime(.09,l),d.gain.exponentialRampToValueAtTime(1e-4,l+.16),i.connect(d),d.connect(a.destination),i.start(l),i.stop(l+.16)}),setTimeout(()=>{a.close().catch(()=>{})},600)):([{f:[783.99,987.77],t:s,d:.14},{f:[1046.5,1318.51],t:s+.12,d:.35}].forEach(n=>{n.f.forEach(o=>{const i=a.createOscillator(),d=a.createGain();i.type="triangle",i.frequency.setValueAtTime(o,n.t),d.gain.setValueAtTime(.08,n.t),d.gain.exponentialRampToValueAtTime(1e-4,n.t+n.d),i.connect(d),d.connect(a.destination),i.start(n.t),i.stop(n.t+n.d)})}),setTimeout(()=>{a.close().catch(()=>{})},700))}catch{}},At=(e,t=Date.now())=>{if(!e)return"-";const a=Math.max(0,t-e),s=Math.floor(a/6e4),r=Math.floor(s/60),n=s%60;return r>0?`${r} Jam ${n} Menit`:`${n} Menit`},xs=()=>{const e=new Date,t=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0"),r=Math.floor(100+Math.random()*900);return`SHF-${t}${a}${s}-${r}`},W=async()=>{const e=Ne(),t=q();if(t&&t.status==="open"&&De(t,e)){g(`Shift kasir #${t.shiftNo||t.id} sedang aktif. Menampilkan ringkasan shift.`,"info"),X();return}try{const i=await dt(e.uid);if(i){ue(i),ve(i.id),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge(),g(`Melanjutkan shift aktif (#${i.shiftNo||i.id}) dari perangkat lain! 👋`,"success"),X();return}}catch(i){console.warn("[POS Shift] Cek cloud saat buka modal:",i)}const a=e.name,s=new Date().toLocaleString("id-ID",{dateStyle:"full",timeStyle:"short"});document.getElementById("pos-open-shift-modal")?.remove();const r=`
    <div id="pos-open-shift-modal" class="fixed inset-0 z-[10001] flex items-center justify-center p-3 sm:p-4 transition-all duration-300 opacity-0 pointer-events-none" style="background:rgba(15,23,42,0.7);backdrop-filter:blur(5px)">
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
                            <span class="font-bold text-slate-800 dark:text-slate-200">${u(a)}</span>
                        </div>
                    </div>
                    <div class="text-right">
                        <span class="text-[10px] text-slate-400 block font-medium">Waktu Buka</span>
                        <span class="font-bold text-slate-700 dark:text-slate-300 text-[11px]">${u(s)}</span>
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
    </div>`;document.body.insertAdjacentHTML("beforeend",r);const n=c("pos-open-shift-modal"),o=c("pos-open-shift-box");!n||!o||(n.classList.remove("pointer-events-none"),requestAnimationFrame(()=>{n.classList.remove("opacity-0"),o.classList.remove("translate-y-8","scale-95")}),setTimeout(()=>{const i=c("pos-shift-start-cash-input");i&&(i.focus(),i.select())},250))},Ie=()=>{const e=c("pos-open-shift-modal"),t=c("pos-open-shift-box");e&&(e.classList.add("opacity-0","pointer-events-none"),t&&t.classList.add("translate-y-8","scale-95"),setTimeout(()=>{e.remove()},280))},Ta=()=>{const e=parseFloat(c("pos-shift-start-cash-input")?.value)||0;document.querySelectorAll(".pos-preset-chip").forEach(t=>{parseFloat(t.dataset.amount)===e?t.className="pos-preset-chip px-2.5 py-1 rounded-xl text-[10px] font-black border-2 border-[var(--color-primary)] text-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.1)] shadow-xs transition-all cursor-pointer":t.className="pos-preset-chip px-2.5 py-1 rounded-xl text-[10px] font-bold border border-slate-200 dark:border-slate-700 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-all cursor-pointer"})},hs=e=>{const t=c("pos-shift-start-cash-input");t&&(t.value=e,t.focus(),t.select()),Ta()},gs=async()=>{const e=c("pos-shift-start-cash-input"),t=c("pos-shift-start-notes-input"),a=parseFloat(e?.value)||0,s=t?.value?.trim()||"",r=Ne(),n=r.uid,o=r.name,i=r.email,d=document.querySelector('#pos-open-shift-box button[onclick*="confirmStartPOSShift"]');d&&(d.disabled=!0,d.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-1.5"></i><span>Memverifikasi Shift...</span>');try{const f=await dt(n);if(f){Ie(),ue(f),ve(f.id),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge(),g(`Akun kasir sudah memiliki shift aktif (#${f.shiftNo||f.id}). Melanjutkan shift berjalan.`,"warning"),X();return}}catch(f){console.warn("[POS Shift] Pre-flight check error:",f)}const l={id:"SHF-"+Date.now(),shiftNo:xs(),cashierUid:n,cashierName:o,cashierEmail:i,startTime:Date.now(),startTimeISO:new Date().toISOString(),startingCash:a,startNotes:s,status:"open",txCount:0,itemCount:0,totalSales:0,cashSales:0,qrisSales:0,bankSales:0,tempoSales:0,discountTotal:0,pointsTotal:0,orders:[]};ue(l),ve(l.id);try{await Promise.all([O.collection("freshmart").doc("cms_data").collection("pos_shifts").doc(l.id).set(l),O.collection("pos_shifts").doc(l.id).set(l)])}catch{}Ie(),Pa("open"),g(`Shift kasir dibuka! Modal awal: ${v(a)} 🎉`,"success"),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge()},Ma=e=>{try{const t=q();if(!t||t.status!=="open")return;const a=parseFloat(e.total)||0,s=e.payment?.method||"cash",r=parseFloat(e.payment?.tempoDp??e.payment?.dp??e.payment?.paid)||0,n=parseFloat(e.payment?.tempoBalance)||0,o=parseFloat(e.globalDiscount)||0,i=parseFloat(e.pointsEarned)||0,d=(e.items||[]).reduce((l,f)=>l+(parseFloat(f.qty)||0),0);t.txCount=(t.txCount||0)+1,t.itemCount=parseFloat(((t.itemCount||0)+d).toFixed(3)),t.totalSales=(t.totalSales||0)+a,t.discountTotal=(t.discountTotal||0)+o,t.pointsTotal=(t.pointsTotal||0)+i,s==="cash"?t.cashSales=(t.cashSales||0)+a:s==="qris"?t.qrisSales=(t.qrisSales||0)+a:s==="bank"?t.bankSales=(t.bankSales||0)+a:s==="tempo"&&(r>0&&(t.cashSales=(t.cashSales||0)+r),t.tempoSales=(t.tempoSales||0)+n),Array.isArray(t.orders)||(t.orders=[]),(e.txId||e.id)&&t.orders.push(e.txId||e.id),ue(t);try{const l={txCount:t.txCount,itemCount:t.itemCount,totalSales:t.totalSales,cashSales:t.cashSales,qrisSales:t.qrisSales,bankSales:t.bankSales,tempoSales:t.tempoSales,discountTotal:t.discountTotal,pointsTotal:t.pointsTotal,orders:t.orders,lastUpdatedISO:new Date().toISOString()};O.collection("freshmart").doc("cms_data").collection("pos_shifts").doc(t.id).update(l).catch(()=>{}),O.collection("pos_shifts").doc(t.id).update(l).catch(()=>{})}catch{}typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge()}catch(t){console.warn("[POS Shift] Gagal update transaksi ke shift:",t)}},ws=(e,t,a="")=>{try{const s=q();if(!s||s.status!=="open")return!1;const r=parseFloat(e)||0;if(r<=0)return!1;s.cashSales=(s.cashSales||0)+r,s.tempoInstallmentCash=(s.tempoInstallmentCash||0)+r,Array.isArray(s.tempoPayments)||(s.tempoPayments=[]),s.tempoPayments.push({orderId:t,amount:r,timestamp:Date.now(),note:a||`Cicilan Piutang #${t}`}),ue(s);try{const n={cashSales:s.cashSales,tempoInstallmentCash:s.tempoInstallmentCash,tempoPayments:s.tempoPayments,lastUpdatedISO:new Date().toISOString()};O.collection("freshmart").doc("cms_data").collection("pos_shifts").doc(s.id).update(n).catch(()=>{}),O.collection("pos_shifts").doc(s.id).update(n).catch(()=>{})}catch{}return typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge(),!0}catch(s){return console.warn("[POS Shift] Gagal rekam pembayaran cicilan ke shift:",s),!1}},X=()=>{const e=q();if(!e){W();return}document.getElementById("pos-shift-summary-modal")?.remove();const t=(parseFloat(e.startingCash)||0)+(parseFloat(e.cashSales)||0),a=At(e.startTime),s=new Date(e.startTime).toLocaleString("id-ID",{dateStyle:"medium",timeStyle:"short"}),r=`
    <div id="pos-shift-summary-modal" class="fixed inset-0 z-[10001] flex items-center justify-center p-3 sm:p-4 transition-all duration-300 opacity-0 pointer-events-none" style="background:rgba(15,23,42,0.7);backdrop-filter:blur(5px)">
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
                        <p class="text-[11px] text-slate-500 dark:text-slate-400">Shift aktif: <b>${u(e.shiftNo||e.id)}</b></p>
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
                        <span class="font-bold text-slate-800 dark:text-slate-200 text-xs truncate block">${u(e.cashierName)}</span>
                        <span class="text-[10px] text-slate-500 mt-0.5 block">Mulai: ${u(s)}</span>
                    </div>
                    <div class="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                        <span class="text-[10px] text-slate-400 block font-medium">Durasi Kerja</span>
                        <span class="font-bold text-emerald-600 dark:text-emerald-400 text-xs block">${u(a)}</span>
                        <span class="text-[10px] text-slate-500 mt-0.5 block">${e.txCount||0} Struk / ${ya(e.itemCount||0)} Item</span>
                    </div>
                </div>

                <!-- Kartu Utama: Kas di Laci Saat Ini (Expected Cash) -->
                <div class="p-4 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent border-2 border-emerald-500/30 flex items-center justify-between">
                    <div>
                        <span class="text-[11px] font-bold text-emerald-700 dark:text-emerald-300 uppercase tracking-wider block">Uang Kas di Laci Seharusnya</span>
                        <span class="text-[10px] text-slate-500 dark:text-slate-400">Modal Awal (${v(e.startingCash)}) + Penjualan Tunai (${v(e.cashSales||0)})</span>
                    </div>
                    <div class="text-right">
                        <span class="text-xl font-black text-emerald-600 dark:text-emerald-400 block">${v(t)}</span>
                    </div>
                </div>

                <!-- Rincian Omset Penjualan -->
                <div class="space-y-2">
                    <div class="flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-200 border-b border-slate-100 dark:border-slate-800 pb-1.5">
                        <span class="flex items-center gap-1.5"><i class="fa-solid fa-receipt text-slate-400"></i>Rincian Metode Pembayaran</span>
                        <span class="text-slate-500 text-[11px]">Total Omset: <b style="color:var(--color-primary)">${v(e.totalSales||0)}</b></span>
                    </div>

                    <div class="space-y-1.5 text-xs">
                        <div class="flex justify-between items-center p-2 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                            <span class="text-slate-600 dark:text-slate-300 flex items-center gap-2">
                                <span class="w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center text-[10px]"><i class="fa-solid fa-money-bill-wave"></i></span>
                                <span>Tunai (Cash)</span>
                            </span>
                            <span class="font-bold text-slate-800 dark:text-white">${v(e.cashSales||0)}</span>
                        </div>
                        ${(e.tempoInstallmentCash||0)>0?`
                        <div class="flex justify-between items-center p-2 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40 text-[11px]">
                            <span class="text-amber-700 dark:text-amber-300 flex items-center gap-2">
                                <span class="w-6 h-6 rounded-lg bg-amber-100 dark:bg-amber-900/60 text-amber-600 flex items-center justify-center text-[10px]"><i class="fa-solid fa-hand-holding-dollar"></i></span>
                                <span>Dari Cicilan Piutang (Kas Masuk)</span>
                            </span>
                            <span class="font-bold text-amber-700 dark:text-amber-300">+${v(e.tempoInstallmentCash)}</span>
                        </div>`:""}
                        <div class="flex justify-between items-center p-2 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                            <span class="text-slate-600 dark:text-slate-300 flex items-center gap-2">
                                <span class="w-6 h-6 rounded-lg bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 flex items-center justify-center text-[10px]"><i class="fa-solid fa-qrcode"></i></span>
                                <span>QRIS Dinamis</span>
                            </span>
                            <span class="font-bold text-slate-800 dark:text-white">${v(e.qrisSales||0)}</span>
                        </div>
                        <div class="flex justify-between items-center p-2 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                            <span class="text-slate-600 dark:text-slate-300 flex items-center gap-2">
                                <span class="w-6 h-6 rounded-lg bg-blue-100 dark:bg-blue-950/60 text-blue-600 flex items-center justify-center text-[10px]"><i class="fa-solid fa-building-columns"></i></span>
                                <span>Transfer Bank</span>
                            </span>
                            <span class="font-bold text-slate-800 dark:text-white">${v(e.bankSales||0)}</span>
                        </div>
                        <div class="flex justify-between items-center p-2 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                            <span class="text-slate-600 dark:text-slate-300 flex items-center gap-2">
                                <span class="w-6 h-6 rounded-lg bg-amber-100 dark:bg-amber-950/60 text-amber-600 flex items-center justify-center text-[10px]"><i class="fa-solid fa-clock-rotate-left"></i></span>
                                <span>Tempo / Piutang (Sisa)</span>
                            </span>
                            <span class="font-bold text-slate-800 dark:text-white">${v(e.tempoSales||0)}</span>
                        </div>
                    </div>
                </div>

                <!-- Diskon & Poin -->
                <div class="grid grid-cols-2 gap-2 text-xs">
                    <div class="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/20 border border-rose-200/60 dark:border-rose-800/40">
                        <span class="text-[10px] text-rose-500 block font-bold">Total Diskon Diberikan</span>
                        <span class="font-black text-rose-600 dark:text-rose-400 text-xs">${v(e.discountTotal||0)}</span>
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
    </div>`;document.body.insertAdjacentHTML("beforeend",r);const n=c("pos-shift-summary-modal"),o=c("pos-shift-summary-box");!n||!o||(n.classList.remove("pointer-events-none"),requestAnimationFrame(()=>{n.classList.remove("opacity-0"),o.classList.remove("translate-y-8","scale-95")}))},ct=()=>{const e=c("pos-shift-summary-modal"),t=c("pos-shift-summary-box");e&&(e.classList.add("opacity-0","pointer-events-none"),t&&t.classList.add("translate-y-8","scale-95"),setTimeout(()=>{e.remove()},280))},Ot=()=>{const e=q();if(!e){g("Tidak ada shift kasir yang aktif saat ini.","warning");return}document.getElementById("pos-close-shift-modal")?.remove();const t=(parseFloat(e.startingCash)||0)+(parseFloat(e.cashSales)||0),a=`
    <div id="pos-close-shift-modal" class="fixed inset-0 z-[10001] flex items-center justify-center p-3 sm:p-4 transition-all duration-300 opacity-0 pointer-events-none" style="background:rgba(15,23,42,0.75);backdrop-filter:blur(6px)">
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
                            Modal Awal: <b>${v(e.startingCash)}</b> + Kas Masuk: <b>${v(e.cashSales||0)}</b>${(e.tempoInstallmentCash||0)>0?` <span class="text-amber-600 dark:text-amber-400 font-semibold">(incl. Cicilan +${v(e.tempoInstallmentCash)})</span>`:""}
                        </div>
                    </div>
                    <div class="text-right">
                        <span id="pos-close-expected-cash" class="text-lg font-black text-slate-900 dark:text-white">${v(t)}</span>
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
    </div>`;document.body.insertAdjacentHTML("beforeend",a);const s=c("pos-close-shift-modal"),r=c("pos-close-shift-box");!s||!r||(s.classList.remove("pointer-events-none"),requestAnimationFrame(()=>{s.classList.remove("opacity-0"),r.classList.remove("translate-y-8","scale-95")}),setTimeout(()=>{const n=c("pos-shift-actual-cash-input");n&&(n.focus(),n.select())},250))},We=()=>{const e=c("pos-close-shift-modal"),t=c("pos-close-shift-box");e&&(e.classList.add("opacity-0","pointer-events-none"),t&&t.classList.add("translate-y-8","scale-95"),setTimeout(()=>{e.remove()},280))},ks=e=>{const t=c("pos-count-tab-quick"),a=c("pos-count-tab-denom"),s=c("pos-count-panel-quick"),r=c("pos-count-panel-denom");e==="quick"?(t&&(t.className="px-2.5 py-1 rounded-lg font-black bg-white dark:bg-slate-700 text-[var(--color-primary)] dark:text-white shadow-xs transition-all cursor-pointer border border-[rgba(var(--color-primary-rgb),0.2)] dark:border-slate-600"),a&&(a.className="px-2.5 py-1 rounded-lg font-bold text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-all cursor-pointer border border-transparent"),s&&s.classList.remove("hidden"),r&&r.classList.add("hidden")):(t&&(t.className="px-2.5 py-1 rounded-lg font-bold text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-all cursor-pointer border border-transparent"),a&&(a.className="px-2.5 py-1 rounded-lg font-black bg-white dark:bg-slate-700 text-[var(--color-primary)] dark:text-white shadow-xs transition-all cursor-pointer border border-[rgba(var(--color-primary-rgb),0.2)] dark:border-slate-600"),s&&s.classList.add("hidden"),r&&r.classList.remove("hidden"),$a())},$a=()=>{const e=(parseFloat(c("denom-100k")?.value)||0)*1e5,t=(parseFloat(c("denom-50k")?.value)||0)*5e4,a=(parseFloat(c("denom-20k")?.value)||0)*2e4,s=(parseFloat(c("denom-10k")?.value)||0)*1e4,r=(parseFloat(c("denom-5k")?.value)||0)*5e3,n=(parseFloat(c("denom-2k")?.value)||0)*2e3,o=(parseFloat(c("denom-1k")?.value)||0)*1e3,i=parseFloat(c("denom-coin")?.value)||0,d=e+t+a+s+r+n+o+i,l=c("pos-shift-actual-cash-input");l&&(l.value=d),Ca()},Ca=()=>{const e=q();if(!e)return;const t=(parseFloat(e.startingCash)||0)+(parseFloat(e.cashSales)||0),s=(parseFloat(c("pos-shift-actual-cash-input")?.value)||0)-t,r=c("pos-discrepancy-card"),n=c("pos-discrepancy-icon"),o=c("pos-discrepancy-status"),i=c("pos-discrepancy-desc"),d=c("pos-discrepancy-amount");!r||!n||!o||!i||!d||(s===0?(r.className="p-4 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between bg-emerald-50 dark:bg-emerald-950/20 border-emerald-500/40",n.className="w-10 h-10 rounded-2xl flex items-center justify-center text-white text-base shadow-sm shrink-0 bg-emerald-600",n.innerHTML='<i class="fa-solid fa-check"></i>',o.className="text-xs font-black uppercase tracking-wider text-emerald-800 dark:text-emerald-300 block",o.innerText="SEIMBANG (PAS)",i.className="text-[11px] text-emerald-700 dark:text-emerald-400 block",i.innerText="Uang fisik laci kasir cocok dengan transaksi sistem",d.className="text-base font-black text-emerald-600 dark:text-emerald-400",d.innerText="Rp 0"):s>0?(r.className="p-4 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between bg-amber-50 dark:bg-amber-950/20 border-amber-500/40",n.className="w-10 h-10 rounded-2xl flex items-center justify-center text-white text-base shadow-sm shrink-0 bg-amber-500",n.innerHTML='<i class="fa-solid fa-plus"></i>',o.className="text-xs font-black uppercase tracking-wider text-amber-800 dark:text-amber-300 block",o.innerText="LEBIH (SURPLUS)",i.className="text-[11px] text-amber-700 dark:text-amber-400 block",i.innerText="Terdapat kelebihan uang fisik di laci kasir",d.className="text-base font-black text-amber-600 dark:text-amber-400",d.innerText="+ "+v(s)):(r.className="p-4 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between bg-rose-50 dark:bg-rose-950/20 border-rose-500/40",n.className="w-10 h-10 rounded-2xl flex items-center justify-center text-white text-base shadow-sm shrink-0 bg-rose-600",n.innerHTML='<i class="fa-solid fa-minus"></i>',o.className="text-xs font-black uppercase tracking-wider text-rose-800 dark:text-rose-300 block",o.innerText="KURANG (DEFISIT)",i.className="text-[11px] text-rose-700 dark:text-rose-400 block",i.innerText="Terdapat kekurangan uang fisik di laci kasir",d.className="text-base font-black text-rose-600 dark:text-rose-400",d.innerText="- "+v(Math.abs(s))))},vs=async()=>{const e=q();if(!e)return;const t=(parseFloat(e.startingCash)||0)+(parseFloat(e.cashSales)||0),a=parseFloat(c("pos-shift-actual-cash-input")?.value)||0,s=a-t,r=c("pos-shift-close-notes")?.value?.trim()||"",n={d100k:parseFloat(c("denom-100k")?.value)||0,d50k:parseFloat(c("denom-50k")?.value)||0,d20k:parseFloat(c("denom-20k")?.value)||0,d10k:parseFloat(c("denom-10k")?.value)||0,d5k:parseFloat(c("denom-5k")?.value)||0,d2k:parseFloat(c("denom-2k")?.value)||0,d1k:parseFloat(c("denom-1k")?.value)||0,coin:parseFloat(c("denom-coin")?.value)||0},o=Date.now(),i=At(e.startTime,o),d={...e,status:"closed",endTime:o,endTimeISO:new Date(o).toISOString(),duration:i,expectedCash:t,actualCash:a,difference:s,discrepancyStatus:s===0?"balanced":s>0?"surplus":"deficit",denominations:n,closingNotes:r};it();try{await Promise.all([O.collection("freshmart").doc("cms_data").collection("pos_shifts").doc(d.id).set(d,{merge:!0}),O.collection("pos_shifts").doc(d.id).set(d,{merge:!0})])}catch(l){console.warn("[POS Shift] Simpan Firestore:",l)}Ue(),Ct(d),We(),Pa("close"),ys(d),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge()},ys=e=>{document.getElementById("pos-closed-success-modal")?.remove();const t=e.difference||0,a=t===0?'<span class="px-2.5 py-1 rounded-xl text-xs font-black bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">PAS (Rp 0)</span>':t>0?`<span class="px-2.5 py-1 rounded-xl text-xs font-black bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300">LEBIH (+${v(t)})</span>`:`<span class="px-2.5 py-1 rounded-xl text-xs font-black bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300">KURANG (-${v(Math.abs(t))})</span>`,s=`
    <div id="pos-closed-success-modal" class="fixed inset-0 z-[10002] flex items-center justify-center p-3 sm:p-4" style="background:rgba(15,23,42,0.8);backdrop-filter:blur(6px)">
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
                <div class="flex justify-between"><span>No Shift:</span><span class="font-bold font-mono">#${u(e.shiftNo||e.id)}</span></div>
                <div class="flex justify-between"><span>Kasir:</span><span class="font-bold">${u(e.cashierName)}</span></div>
                <div class="flex justify-between"><span>Durasi:</span><span class="font-bold">${u(e.duration)}</span></div>
                <div class="flex justify-between border-t border-slate-200/60 dark:border-slate-700/60 pt-1.5"><span>Total Omset:</span><span class="font-bold">${v(e.totalSales||0)}</span></div>
                <div class="flex justify-between"><span>Kas Fisik Laci:</span><span class="font-black text-slate-900 dark:text-white">${v(e.actualCash||0)}</span></div>
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
    </div>`;document.body.insertAdjacentHTML("beforeend",s)},Lt=(e,t=!1,a=!1)=>{if(!e){g("Data shift tidak ditemukan.","warning");return}window._lastShiftData={shift:e,isXReport:t};const s=typeof xe=="function"?xe():{paperSize:"58mm"};if(!a&&s.directPrint!==!1&&typeof window.printShiftSettlementDirect=="function"){window.printShiftSettlementDirect(e,t);return}const r=typeof window.getPaperCols=="function"?window.getPaperCols(s.paperSize):s.paperSize==="80mm"?48:32,n=r>=40,o=s.headerText||m.store?.name||"TOKO PUTRI",i=m.store?.address||"",d=m.store?.wa||"",l=s.footerText||"Laporan Kasir Resmi Toko Putri",f=n?t?"*** RINGKASAN SHIFT (X-REPORT) ***":"*** REKAP TUTUP SHIFT (Z-REPORT) ***":t?"** RINGKASAN SHIFT (X) **":"** REKAP TUTUP SHIFT (Z) **",x=typeof window.formatCompactDate=="function"?window.formatCompactDate(e.startTime,n):new Date(e.startTime).toLocaleString("id-ID"),P=typeof window.formatCompactDate=="function"?window.formatCompactDate(e.endTime||Date.now(),n):new Date(e.endTime||Date.now()).toLocaleString("id-ID"),S=e.duration||At(e.startTime,e.endTime||Date.now()),w=(parseFloat(e.startingCash)||0)+(parseFloat(e.cashSales)||0),L=e.actualCash!==void 0?parseFloat(e.actualCash):w,_=L-w,j=_===0?"SEIMBANG (PAS)":_>0?`LEBIH (+${v(_)})`:`KURANG (-${v(Math.abs(_))})`;document.getElementById("pos-shift-receipt-modal")?.remove(),document.body.insertAdjacentHTML("beforeend",`
    <div id="pos-shift-receipt-modal" class="fixed inset-0 z-[10003] flex items-center justify-center p-3 sm:p-4" style="background:rgba(15,23,42,0.7);backdrop-filter:blur(4px)">
        <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full ${n?"max-w-[420px]":"max-w-[340px]"} border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[90vh]">
            <div class="p-3.5 sm:p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50">
                <span class="font-bold text-xs text-slate-700 dark:text-slate-200 flex items-center gap-1.5"><i class="fa-solid fa-receipt text-emerald-500"></i>Preview Slip Rekap Shift (${r} Kolom)</span>
                <button onclick="document.getElementById('pos-shift-receipt-modal')?.remove()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-700 dark:hover:text-slate-200 transition-colors flex items-center justify-center cursor-pointer"><i class="fa-solid fa-xmark text-sm"></i></button>
            </div>
            <div id="pos-shift-receipt-paper-box" class="p-4 overflow-y-auto flex-1 font-mono text-[11px] bg-slate-50/60 dark:bg-slate-950 text-slate-800 dark:text-slate-200 space-y-1.5 select-text custom-scrollbar">
                <div class="text-center font-bold text-sm uppercase">${u(o)}</div>
                ${i?`<div class="text-center text-[10px] text-slate-500">${u(i)}</div>`:""}
                ${d?`<div class="text-center text-[10px] text-slate-500">WA: ${u(d)}</div>`:""}
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <div class="text-center font-black text-xs uppercase">${u(f)}</div>
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <div class="flex justify-between"><span>No Shift: <b>#${u(e.shiftNo||e.id)}</b></span><span>${u(x)}</span></div>
                <div class="flex justify-between"><span>Kasir   : ${u(e.cashierName)}</span><span>Durasi: ${u(S)}</span></div>
                <div class="flex justify-between"><span>Selesai : ${u(P)}</span></div>
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <div class="font-bold">RINGKASAN PENJUALAN:</div>
                <div class="flex justify-between"><span>Total Struk</span><span>${e.txCount||0} Trx</span></div>
                <div class="flex justify-between"><span>Total Barang</span><span>${ya(e.itemCount||0)} Item</span></div>
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-1"></div>
                <div class="flex justify-between"><span>Tunai (Cash)</span><span>${v(e.cashSales||0)}</span></div>
                <div class="flex justify-between"><span>QRIS</span><span>${v(e.qrisSales||0)}</span></div>
                <div class="flex justify-between"><span>Transfer Bank</span><span>${v(e.bankSales||e.transferSales||0)}</span></div>
                <div class="flex justify-between"><span>Tempo (Piutang)</span><span>${v(e.tempoSales||0)}</span></div>
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-1"></div>
                <div class="flex justify-between font-black text-xs pt-0.5"><span>TOTAL OMSET</span><span style="color:var(--color-primary)">${v(e.totalSales||0)}</span></div>
                ${(e.discountTotal||0)>0?`<div class="flex justify-between text-rose-500"><span>Diskon Toko</span><span>-${v(e.discountTotal)}</span></div>`:""}
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <div class="font-bold">REKONSILIASI KAS LACI:</div>
                <div class="flex justify-between"><span>Modal Awal</span><span>${v(e.startingCash)}</span></div>
                <div class="flex justify-between"><span>Penjualan Tunai</span><span>${v((e.cashSales||0)-(e.tempoInstallmentCash||0))}</span></div>
                ${(e.tempoInstallmentCash||0)>0?`
                <div class="flex justify-between text-amber-600"><span>+ Cicilan Piutang</span><span>+${v(e.tempoInstallmentCash)}</span></div>`:""}
                <div class="flex justify-between font-bold"><span>Kas Sistem</span><span>${v(w)}</span></div>
                ${t?"":`
                <div class="flex justify-between font-bold"><span>Kas Fisik Dihitung</span><span>${v(L)}</span></div>
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-1"></div>
                <div class="flex justify-between font-black text-xs ${_===0?"text-emerald-600":_>0?"text-amber-600":"text-rose-600"}">
                    <span>SELISIH KAS</span>
                    <span>${j}</span>
                </div>`}
                ${e.closingNotes?`
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-1.5"></div>
                <div class="text-[10px]"><b>Catatan:</b> ${u(e.closingNotes)}</div>`:""}
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <div class="text-center text-[10px] text-slate-400 my-1">${u(l)}</div>
                <div class="grid grid-cols-2 text-center text-[10px] pt-4 pb-2">
                    <div>
                        <div>Kasir Bertugas</div>
                        <div class="pt-8 font-bold">(${u(e.cashierName)})</div>
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
    </div>`)},Ht=()=>{if(window._lastShiftData&&typeof window.printShiftSettlementDirect=="function"){window.printShiftSettlementDirect(window._lastShiftData.shift,window._lastShiftData.isXReport);return}const e=c("pos-shift-receipt-paper-box");e&&(typeof window.renderThermalDOMAndPrint=="function"?window.renderThermalDOMAndPrint(e.innerHTML):window.print())},ze=()=>{const e=[c("pos-shift-btn-storefront"),c("pos-shift-btn-admin")],t=q();e.forEach(a=>{a&&(t&&t.status==="open"?a.id==="pos-shift-btn-storefront"?a.innerHTML=`
                <button onclick="window.openPOSShiftSummaryModal()" class="h-8 px-2 sm:px-2.5 rounded-xl bg-black/15 hover:bg-black/25 text-white border border-white/20 transition-all cursor-pointer shadow-xs active:scale-95 inline-flex items-center gap-1 sm:gap-1.5 whitespace-nowrap shrink-0" title="Klik untuk lihat ringkasan shift (X-Report)">
                    <i class="fa-solid fa-cash-register text-emerald-300 text-xs"></i>
                    <span class="hidden sm:inline text-xs font-medium">Shift: </span>
                    <b class="text-white text-xs whitespace-nowrap">${v(t.startingCash)}</b>
                </button>`:a.innerHTML=`
                <button onclick="window.openPOSShiftSummaryModal()" class="h-8 px-2.5 sm:px-3 rounded-xl text-xs font-bold bg-[rgba(var(--color-primary-rgb),0.1)] hover:bg-[rgba(var(--color-primary-rgb),0.18)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.25)] inline-flex items-center gap-1.5 transition-all cursor-pointer active:scale-95 whitespace-nowrap shrink-0 shadow-2xs" title="Klik untuk lihat ringkasan shift (X-Report)">
                    <i class="fa-solid fa-cash-register text-xs"></i>
                    <span class="hidden sm:inline font-medium">Shift: </span>
                    <b class="font-black whitespace-nowrap">${v(t.startingCash)}</b>
                </button>`:a.id==="pos-shift-btn-storefront"?a.innerHTML=`
                <button onclick="window.openPOSOpenShiftModal()" class="h-8 px-2.5 sm:px-3 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs inline-flex items-center gap-1.5 transition-all active:scale-95 shadow-xs cursor-pointer border border-white/25 backdrop-blur-xs whitespace-nowrap shrink-0" title="Buka shift kasir baru">
                    <span class="w-1.5 h-1.5 rounded-full bg-amber-300 animate-pulse"></span>
                    <i class="fa-solid fa-wallet text-amber-300 text-xs"></i>
                    <span class="text-xs font-black whitespace-nowrap">Buka Shift</span>
                </button>`:a.innerHTML=`
                <button onclick="window.openPOSOpenShiftModal()" class="h-8 px-2.5 sm:px-3 rounded-xl text-xs font-bold bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/40 dark:hover:bg-amber-900/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 inline-flex items-center gap-1.5 transition-all cursor-pointer active:scale-95 animate-pulse whitespace-nowrap shrink-0 shadow-2xs" title="Buka shift kasir baru">
                    <i class="fa-solid fa-wallet text-xs"></i>
                    <span class="whitespace-nowrap">Buka Shift</span>
                </button>`)})},Ss=async e=>{const t=typeof e=="string"?c(e):e;t&&(t.innerHTML=`
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
    </div>`,await jt())},jt=async()=>{const e=c("admin-shift-list-target"),t=c("admin-shift-metrics-target");if(e)try{const a=await O.collection("freshmart").doc("cms_data").collection("pos_shifts").orderBy("startTime","desc").limit(50).get();if(a.empty){t&&(t.innerHTML=""),e.innerHTML=`
            <div class="text-center py-14 p-6 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-slate-400 dark:text-slate-500">
                <i class="fa-solid fa-clipboard-list text-3xl mb-2"></i>
                <p class="font-bold text-xs">Belum ada riwayat shift kasir tercatat</p>
                <p class="text-[11px] mt-0.5">Shift yang dibuka dan ditutup oleh kasir akan otomatis terarsip di sini.</p>
            </div>`;return}const s=a.docs.map(l=>({id:l.id,...l.data()}));let r=s.length,n=0,o=0,i=0;s.forEach(l=>{l.status==="open"&&n++,o+=parseFloat(l.totalSales)||0;const f=l.actualCash!==void 0?parseFloat(l.actualCash):(parseFloat(l.startingCash)||0)+(parseFloat(l.cashSales)||0);i+=f||0}),t&&(t.innerHTML=`
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
                        ${n} <span class="text-xs font-bold text-slate-400">Kasir</span>
                        ${n>0?'<span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>':""}
                    </p>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">${n>0?"Sedang Bertransaksi":"Semua Shift Ditutup"}</p>
                </div>

                <div class="p-3.5 sm:p-4 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-1.5">
                        <span class="text-[9px] font-black uppercase tracking-wider" style="color:var(--color-primary)">Total Omset</span>
                        <div class="w-8 h-8 rounded-xl flex items-center justify-center text-xs shadow-2xs border border-[rgba(var(--color-primary-rgb),0.25)]" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">
                            <i class="fa-solid fa-chart-line"></i>
                        </div>
                    </div>
                    <p class="text-base sm:text-lg font-black font-mono tracking-tight" style="color:var(--color-primary)">${v(o)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">Gross Sales Shift</p>
                </div>

                <div class="p-3.5 sm:p-4 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-1.5">
                        <span class="text-[9px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Total Kas Laci</span>
                        <div class="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 flex items-center justify-center text-xs shadow-2xs border border-slate-200 dark:border-slate-600/60">
                            <i class="fa-solid fa-vault"></i>
                        </div>
                    </div>
                    <p class="text-base sm:text-lg font-black font-mono text-slate-900 dark:text-white tracking-tight">${v(i)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">Uang Kas Fisik Terdata</p>
                </div>
            </div>`);const d=s.map(l=>{const f=l.status==="closed",x=l.difference||0,P=f?x===0?'<span class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-black bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 shadow-2xs shrink-0"><i class="fa-solid fa-check text-[10px]"></i> PAS</span>':x>0?`<span class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-black bg-amber-100 dark:bg-amber-950/70 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-800 shadow-2xs shrink-0"><i class="fa-solid fa-arrow-trend-up text-[10px]"></i> LEBIH +${v(x)}</span>`:`<span class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-black bg-rose-100 dark:bg-rose-950/70 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-800 shadow-2xs shrink-0"><i class="fa-solid fa-arrow-trend-down text-[10px]"></i> KURANG -${v(Math.abs(x))}</span>`:'<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 shadow-2xs tracking-wide shrink-0"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>SEDANG BERJALAN</span>',S=l.startTime?new Date(l.startTime).toLocaleString("id-ID",{dateStyle:"medium",timeStyle:"short"}):"-",w=l.endTime?new Date(l.endTime).toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit"})+" WIB":"",L=JSON.stringify(l).replace(/"/g,"&quot;"),_=l.actualCash!==void 0?l.actualCash:(l.startingCash||0)+(l.cashSales||0);return`
            <div class="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-800/95 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:shadow-xs transition-all space-y-3.5">
                <div class="flex items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-700/60 pb-3 flex-wrap sm:flex-nowrap">
                    <div class="flex items-center gap-3 min-w-0">
                        <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-sm text-white shrink-0 shadow-2xs ${f?"bg-slate-800 dark:bg-slate-700":""}" style="${f?"":"background: var(--color-primary); box-shadow: 0 4px 12px rgba(var(--color-primary-rgb), 0.35);"}">
                            <i class="fa-solid ${f?"fa-receipt":"fa-cash-register"}"></i>
                        </div>
                        <div class="min-w-0">
                            <div class="flex items-center gap-2">
                                <span class="font-mono font-black text-xs sm:text-sm text-slate-900 dark:text-white whitespace-nowrap block truncate">#${u(l.shiftNo||l.id)}</span>
                            </div>
                            <span class="text-[11px] text-slate-400 dark:text-slate-500 whitespace-nowrap block truncate mt-0.5">
                                <i class="fa-solid fa-clock text-[10px] mr-1"></i>${S} ${w?"— "+w:"• Aktif"}
                            </span>
                        </div>
                    </div>
                    <div class="flex items-center gap-2 shrink-0">
                        ${P}
                        <button onclick="window.printShiftSettlementReceipt(${L}, ${!f})" class="h-9 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-700/80 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shrink-0 shadow-2xs active:scale-95 border border-slate-200/80 dark:border-slate-600/60 hover:text-[var(--color-primary)]" title="Preview & Cetak Slip Rekap Shift">
                            <i class="fa-solid fa-print text-xs"></i>
                            <span class="hidden sm:inline">Slip Z-Report</span>
                        </button>
                        <button onclick="window.deleteShiftRecord('${l.id}', '${u(l.shiftNo||l.id)}')" class="w-9 h-9 rounded-xl bg-slate-50 hover:bg-rose-50 dark:bg-slate-700/80 dark:hover:bg-rose-950/40 text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 text-xs flex items-center justify-center transition-all cursor-pointer shrink-0 shadow-2xs active:scale-95 border border-slate-200/80 dark:border-slate-600/60 hover:border-rose-200" title="Hapus Data Shift">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                </div>

                <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                    <div class="p-3 rounded-2xl bg-slate-50/90 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/80">
                        <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                            <i class="fa-solid fa-user-tie text-[10px]"></i> Kasir
                        </span>
                        <span class="font-black text-sm text-slate-800 dark:text-slate-100 truncate block mt-1">${u(l.cashierName||"Kasir")}</span>
                        <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500 block mt-0.5">${l.txCount||0} Trx • ${l.itemCount||0} Item</span>
                    </div>
                    <div class="p-3 rounded-2xl bg-slate-50/90 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/80">
                        <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                            <i class="fa-solid fa-hand-holding-dollar text-[10px]"></i> Modal Awal
                        </span>
                        <span class="font-black text-sm text-slate-800 dark:text-slate-100 font-mono block mt-1">${v(l.startingCash||0)}</span>
                        <span class="text-[10px] text-slate-400 block mt-0.5">Uang Kas Buka Shift</span>
                    </div>
                    <div class="p-3 rounded-2xl bg-slate-50/90 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/80">
                        <span class="text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5" style="color:var(--color-primary)">
                            <i class="fa-solid fa-chart-line text-[10px]"></i> Total Omset
                        </span>
                        <span class="font-black text-sm sm:text-base font-mono block mt-1" style="color:var(--color-primary)">${v(l.totalSales||0)}</span>
                        <span class="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 block mt-0.5">Gross Sales Shift</span>
                    </div>
                    <div class="p-3 rounded-2xl bg-slate-50/90 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/80">
                        <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                            <i class="fa-solid fa-vault text-[10px]"></i> Kas Fisik Laci
                        </span>
                        <span class="font-black text-sm sm:text-base font-mono text-slate-900 dark:text-white block mt-1">${v(_)}</span>
                        <span class="text-[10px] font-bold block mt-0.5 ${x===0?"text-emerald-600 dark:text-emerald-400":x>0?"text-amber-600":"text-rose-600"}">
                            ${f?x===0?"Kas Pas & Sesuai":x>0?"Surplus +"+v(x):"Defisit -"+v(Math.abs(x)):"Kas Saat Ini"}
                        </span>
                    </div>
                </div>

                ${l.cashSales>0||l.qrisSales>0||l.bankSales>0||l.tempoSales>0?`
                <div class="flex items-center gap-2 overflow-x-auto pb-1 hide-scrollbar text-[11px] pt-1">
                    <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-0.5">Rincian Bayar:</span>
                    ${l.cashSales?`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 font-bold shrink-0"><i class="fa-solid fa-money-bill-wave text-emerald-500"></i> Tunai: ${v(l.cashSales)}</span>`:""}
                    ${l.qrisSales?`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 font-bold shrink-0"><i class="fa-solid fa-qrcode text-indigo-500"></i> QRIS: ${v(l.qrisSales)}</span>`:""}
                    ${l.bankSales?`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 font-bold shrink-0"><i class="fa-solid fa-building-columns text-blue-500"></i> Transfer: ${v(l.bankSales)}</span>`:""}
                    ${l.tempoSales?`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 font-bold shrink-0 border border-amber-200/60"><i class="fa-solid fa-clock text-amber-500"></i> Tempo: ${v(l.tempoSales)}</span>`:""}
                </div>`:""}

                ${l.closingNotes?`
                <div class="text-xs text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/60 p-3 rounded-2xl border border-slate-200/80 dark:border-slate-800 flex items-start gap-2.5">
                    <i class="fa-solid fa-comment-dots text-slate-400 mt-0.5 shrink-0"></i>
                    <div class="min-w-0">
                        <span class="font-bold text-slate-800 dark:text-slate-200">Catatan Kasir:</span> ${u(l.closingNotes)}
                    </div>
                </div>`:""}
            </div>`}).join("");e.innerHTML=d}catch(a){console.error("[POS Shift] Gagal memuat daftar shift admin:",a),e.innerHTML=`
        <div class="text-center py-10 text-rose-500 text-xs">
            <i class="fa-solid fa-triangle-exclamation text-2xl mb-1"></i>
            <p>Gagal memuat laporan shift: ${u(a.message)}</p>
        </div>`}},Ps=(e,t)=>{ss("Hapus Data Shift",`Hapus shift #${t}? Data akan dihapus permanen dari cloud dan tidak bisa dikembalikan.`,async()=>{try{await O.collection("freshmart").doc("cms_data").collection("pos_shifts").doc(e).delete(),g("Data shift berhasil dihapus.","success"),await jt()}catch(a){console.error("[POS Shift] Gagal menghapus shift:",a),g("Gagal menghapus: "+a.message,"error")}},"Ya, Hapus")};window.getActiveShift=q;window.saveActiveShift=ue;window.clearActiveShift=Ue;window.getLastClosedShift=ms;window.isShiftActive=he;window.getCurrentCashierIdentity=Ne;window.isShiftOwnedByCashier=De;window.findActiveShiftInCloud=dt;window.syncActiveShiftFromCloud=be;window.listenActiveShiftCloud=ve;window.detachActiveShiftListener=it;window.openPOSOpenShiftModal=W;window.closePOSOpenShiftModal=Ie;window.posSetStartCashPreset=hs;window.posUpdateStartCashChips=Ta;window.confirmStartPOSShift=gs;window.recordTransactionToShift=Ma;window.recordTempoPaymentToShift=ws;window.openPOSShiftModal=X;window.openPOSShiftSummaryModal=X;window.closePOSShiftSummaryModal=ct;window.openPOSCloseShiftModal=Ot;window.closePOSCloseShiftModal=We;window.setPOSCountMode=ks;window.calcPOSDenominations=$a;window.updatePOSShiftDiscrepancy=Ca;window.confirmClosePOSShift=vs;window.printShiftSettlementReceipt=Lt;window.executeShiftPrintDirect=Ht;window.renderShiftHeaderBadge=ze;window.renderAdminShiftReportView=Ss;window.loadAdminShiftReports=jt;window.deleteShiftRecord=Ps;let oa=!1;const Aa=()=>oa?Promise.resolve():os(()=>import("./pos-variant-sheet-CPrPGCnd.js"),__vite__mapDeps([0,1,2,3])).then(()=>{oa=!0});let y=[],pe="",ke="",de="grid";try{const e=localStorage.getItem("pos_view_mode");(e==="list"||e==="grid")&&(de=e)}catch{}let b={name:"",phone:"",isMember:!1,memberId:null,isNewTempo:!1,paylaterActive:!1,paylaterLimit:0,paylaterUsed:0},U=0,A=null,D="cash",Y=0,Z=0,E="rp",B=0,le="",na=null,Le=null,ye=null,st=null,He=null,ot=!0,Pt="environment",Ke=!1,me=null,ia="",la=0;const Dt=e=>{de=e;try{localStorage.setItem("pos_view_mode",e)}catch{}document.querySelectorAll("#pos-view-btn-grid").forEach(t=>{e==="grid"?(t.style.background="linear-gradient(135deg, var(--color-primary-light, #e1b858) 0%, var(--color-primary, #c59b27) 60%, var(--color-primary-dark, #a87f1b) 100%)",t.className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-white shadow-xs"):(t.style.removeProperty("background"),t.className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-slate-500 hover:text-slate-800 dark:text-slate-400")}),document.querySelectorAll("#pos-view-btn-list").forEach(t=>{e==="list"?(t.style.background="linear-gradient(135deg, var(--color-primary-light, #e1b858) 0%, var(--color-primary, #c59b27) 60%, var(--color-primary-dark, #a87f1b) 100%)",t.className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-white shadow-xs"):(t.style.removeProperty("background"),t.className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-slate-500 hover:text-slate-800 dark:text-slate-400")}),Q()},fe=e=>Math.max(0,parseInt(e)||0),Ve=e=>{if(e==null)return 0;typeof e=="string"&&(e=e.replace(",",".").trim());const t=parseFloat(e);return isNaN(t)?0:Math.max(0,parseFloat(t.toFixed(3)))},I=e=>{const t=parseFloat(e)||0;return parseFloat(t.toFixed(3)).toString()},h=e=>ns(e),Je=()=>parseFloat(m.store?.pointValue)||1e3,Se=()=>Math.max(0,(parseFloat(U)||0)*Je()),pt=()=>{if(!b.isMember||!b.points)return 0;const e=Math.max(0,parseFloat(b.points)||0),t=A&&parseFloat(A.pointsCost)||0,a=Math.max(0,e-t),s=Je();if(s<=0)return 0;const r=Math.max(0,re()-ae()),n=ne(),o=Math.max(0,r-n),i=Math.floor(o/s);return Math.min(a,i)},re=()=>y.reduce((e,t)=>e+t.subtotal,0),ne=()=>y.reduce((e,t)=>{const a=t.hpp!=null?parseFloat(t.hpp):Fe(t)||0;return e+(parseFloat(a)||0)*(parseFloat(t.qty)||0)},0),ae=()=>{const e=re();let t=0;if(E==="percent"){const s=Math.min(100,Math.max(0,parseFloat(B)||0));t=Math.round(e*s/100)}else t=Math.min(e,fe(B||Z));const a=ne();if(a>0){const s=Math.max(0,e-a);t>s&&(t=s)}return t},C=()=>{const e=re(),t=ae(),a=Se();let s=Math.max(0,e-t-a);const r=ne();return r>0&&s<r&&(s=r),s},Oa=()=>Y-C(),Be=e=>{if(!e)return{isManaged:!1,totalStock:0,isOutOfStock:!0,isLowStock:!1,isInactive:!0,isPreorder:!1,poTime:""};if(!(e.isActive!=="false"&&e.isActive!==!1))return{isManaged:!0,totalStock:0,isOutOfStock:!0,isLowStock:!1,isInactive:!0,isPreorder:!1,poTime:""};const a=m?.store?.useStock===!0||m?.store?.useStock==="true",s=!!(e.poTime&&String(e.poTime).trim()),r=s?String(e.poTime).trim():"";if(!a)return{isManaged:!1,totalStock:999999,isOutOfStock:!1,isLowStock:!1,isInactive:!1,isPreorder:s,poTime:r};let n=0;return Array.isArray(e.variants)&&e.variants.length>0?n=e.variants.filter(o=>o&&o.isActive!==!1&&o.isActive!=="false").reduce((o,i)=>o+(i.stock!=null&&parseFloat(i.stock)||0),0):n=parseFloat(e.stock)||0,{isManaged:!0,totalStock:n,isOutOfStock:n<=0,isLowStock:n>0&&n<=5,isInactive:!1,isPreorder:s,poTime:r}},ie=()=>{try{if(typeof window<"u"&&typeof window.checkUserGesture=="function"&&!window.checkUserGesture())return;const e=window.AudioContext||window.webkitAudioContext;if(!e)return;const t=new e,a=t.createOscillator(),s=t.createGain();a.type="sine",a.frequency.setValueAtTime(1400,t.currentTime),s.gain.setValueAtTime(.08,t.currentTime),s.gain.exponentialRampToValueAtTime(1e-4,t.currentTime+.08),a.connect(s),s.connect(t.destination),a.start(),a.stop(t.currentTime+.08),setTimeout(()=>{t.close().catch(()=>{})},150)}catch{}},Ts=(e,t)=>{if(!e||!e.wholesale||!e.wholesale.length)return null;const a=[...e.wholesale].sort((s,r)=>r.minQty-s.minQty);for(const s of a)if(t>=parseFloat(s.minQty))return parseFloat(s.price);return null},oe=e=>{if(!e.isVariant){const a=(m.products||[]).find(r=>r&&String(r.id)===String(e.id)),s=a?Ts(a,e.qty):null;s!==null?(e.basePrice=e.basePrice||e.price,e.price=s,e.isWholesale=!0):(e.basePrice&&(e.price=e.basePrice),e.isWholesale=!1)}e.hpp==null&&(e.hpp=Fe(e)||0);const t=parseFloat(e.hpp)||0;if(t>0){const a=Math.max(0,Math.round((e.price-t)*e.qty));fe(e.discount)>a&&(e.discount=a)}else e.discount=Math.min(fe(e.discount),e.price*e.qty);return e.subtotal=Math.max(0,e.price*e.qty-fe(e.discount)),e},Ms=()=>{const e=new Date,t=a=>String(a).padStart(2,"0");return`POS-${e.getFullYear()}${t(e.getMonth()+1)}${t(e.getDate())}-${Date.now().toString(36).toUpperCase()}`},La=()=>{Le&&clearInterval(Le);const e=()=>{const a=new Date().toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit",second:"2-digit"})+" WIB";document.querySelectorAll("#pos-live-clock").forEach(s=>{s.textContent=a})};e(),Le=setInterval(e,1e3)},Ha=()=>{Le&&(clearInterval(Le),Le=null)};window.stopPOSClock=Ha;const ft=()=>{window.__posBarcodeFn&&(document.removeEventListener("keydown",window.__posBarcodeFn),window.__posBarcodeFn=null)},ja=()=>{ft(),window.__posBarcodeFn=e=>{if(!e||typeof e.key!="string")return;const t=window.curViewName||"";if(!(t==="view-pos-cashier"||t==="view-admin"&&window.cTab==="pos"))return;if(e.key==="F4"){e.preventDefault();const r=c("pos-search-input");r&&(r.focus(),r.select());return}if(e.key==="F6"||e.key==="F7"){e.preventDefault(),xt();return}if(e.key==="F8"){e.preventDefault(),Ze();return}if(e.key==="F9"){e.preventDefault(),c("pos-camera-scanner-modal")?Pe():wt();return}if(e.key==="F10"){e.preventDefault(),he()?X():typeof be=="function"?be().then(r=>{r&&r.status==="open"?X():W()}).catch(()=>W()):W();return}const s=document.activeElement?.tagName?.toLowerCase();if(!(s==="input"||s==="textarea"||s==="select"))if(e.key==="Enter"){if(le&&le.length>=3){const r=le.trim().toLowerCase(),n=(m.products||[]).find(o=>o&&o.isActive!=="false"&&o.isActive!==!1&&(o.barcode&&o.barcode.toLowerCase()===r||o.sku&&o.sku.toLowerCase()===r||o.id&&String(o.id).toLowerCase()===r));if(n)ut(n.id)&&(ie(),g(`Ditambahkan: ${n.name}`,"success"));else{const o=c("pos-search-input");o&&(o.value=le,pe=le,Q()),g("Barcode tidak ditemukan di katalog","warning")}le=""}}else e.key&&e.key.length===1&&(le=(le||"")+e.key,clearTimeout(na),na=setTimeout(()=>{le=""},150))},document.addEventListener("keydown",window.__posBarcodeFn)},ut=e=>{const t=(m.products||[]).find(o=>o&&String(o.id)===String(e));if(!t)return!1;if(!(t.isActive!=="false"&&t.isActive!==!1))return g("Produk ini sedang tidak tersedia","warning"),!1;if(t.variants&&t.variants.length>0)return Aa().then(()=>{typeof window.openPOSVariantSheet=="function"&&window.openPOSVariantSheet(e)}),!0;const r=Be(t);if(r.isManaged&&r.isOutOfStock)return g(`Maaf, stok "${t.name}" sedang kosong!`,"warning"),!1;const n=y.find(o=>String(o.id)===String(e)&&!o.isVariant);if(n){const o=parseFloat((n.qty+1).toFixed(3));if(r.isManaged&&o>r.totalStock)return g(`Stok tidak cukup! Tersisa: ${I(r.totalStock)} ${t.unit||"pcs"}`,"warning"),!1;n.qty=o,oe(n)}else{const o=parseFloat(t.price)||0;y.push(oe({id:t.id,name:t.name,price:o,basePrice:o,hpp:parseFloat(t.hpp)||0,qty:1,unit:t.unit||"pcs",poTime:t.poTime||"",discount:0,subtotal:o,isVariant:!1,isWholesale:!1}))}return ie(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"),N(),!0},Da=(e,t)=>{const a=(m.products||[]).find(i=>i&&String(i.id)===String(e));if(!a)return!1;if(!(a.isActive!=="false"&&a.isActive!==!1))return g("Produk ini sedang tidak tersedia","warning"),!1;const r=Be(a);if(r.isManaged&&r.isOutOfStock)return g(`Maaf, stok "${a.name}" sedang kosong!`,"warning"),!1;const n=Ve(t)||1,o=y.find(i=>String(i.id)===String(e)&&!i.isVariant);if(o){const i=parseFloat((o.qty+n).toFixed(3));if(r.isManaged&&i>r.totalStock)return g(`Stok tidak cukup! Tersisa: ${I(r.totalStock)} ${a.unit||"pcs"}`,"warning"),!1;o.qty=i,oe(o)}else{if(r.isManaged&&n>r.totalStock)return g(`Stok tidak cukup! Tersisa: ${I(r.totalStock)} ${a.unit||"pcs"}`,"warning"),!1;const i=parseFloat(a.price)||0,d=oe({id:a.id,name:a.name,price:i,basePrice:i,hpp:parseFloat(a.hpp)||0,qty:n,unit:a.unit||"pcs",poTime:a.poTime||"",discount:0,subtotal:i*n,isVariant:!1,isWholesale:!1});y.push(d)}return ie(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"),N(),!0},Ia=(e,t,a,s,r=1)=>{const n=(m.products||[]).find(x=>x&&String(x.id)===String(e));if(!n)return!1;if(!(n.isActive!=="false"&&n.isActive!==!1))return g("Produk ini sedang tidak tersedia","warning"),!1;const i=n.variants?.[s];if(i){if(!(i.isActive!==!1&&i.isActive!=="false"))return g("Varian ini sedang tidak tersedia","warning"),!1;if(m.store?.useStock===!0||m.store?.useStock==="true"){const S=parseFloat(i.stock)||0,w=`${e}__v${s}`,L=y.find(p=>p.cartKey===w),_=L&&parseFloat(L.qty)||0,j=Ve(r)||1;if(S<=0)return g(`Maaf, stok varian "${i.name}" sedang kosong!`,"warning"),!1;if(_+j>S)return g(`Stok varian "${i.name}" tidak cukup! Sisa: ${I(S)}`,"warning"),!1}}const d=`${e}__v${s}`,l=Ve(r)||1,f=y.find(x=>x.cartKey===d);if(f)f.qty=parseFloat((f.qty+l).toFixed(3)),oe(f);else{const x=`${n.name} — ${t}`,P=parseFloat(i?.hpp!=null?i.hpp:n.hpp)||0;y.push(oe({id:e,cartKey:d,name:x,variantName:t,variantIdx:s,price:a,basePrice:a,hpp:P,qty:l,unit:i?.unit||n.unit||"pcs",poTime:n.poTime||"",discount:0,subtotal:a*l,isVariant:!0,isWholesale:!1}))}return ie(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"),N(),!0},Ra=(e,t)=>{const a=y.find(r=>(r.cartKey||String(r.id))===String(e));if(!a)return;const s=parseFloat((a.qty+t).toFixed(3));if(s<=0){bt(e);return}if(t>0){const r=(m.products||[]).find(n=>n&&String(n.id)===String(a.id));if(r&&(m.store?.useStock===!0||m.store?.useStock==="true"))if(a.isVariant&&r.variants){const o=r.variants.find(d=>d.name===a.variantName),i=parseFloat(o?.stock)||0;if(s>i){g(`Stok maksimal "${a.name}" hanya ${I(i)}`,"warning");return}}else{const o=Be(r);if(o.isManaged&&s>o.totalStock){g(`Stok maksimal tersedia: ${I(o.totalStock)} ${r.unit||"pcs"}`,"warning");return}}}a.qty=s,oe(a),t>0&&ie(),N()},Fa=(e,t)=>{const a=y.find(n=>(n.cartKey||String(n.id))===String(e));if(!a)return;let s=Ve(t);if(s<=0){bt(e);return}const r=(m.products||[]).find(n=>n&&String(n.id)===String(a.id));if(r&&(m.store?.useStock===!0||m.store?.useStock==="true"))if(a.isVariant&&r.variants){const o=r.variants.find(d=>d.name===a.variantName),i=parseFloat(o?.stock)||0;s>i&&(g(`Stok maksimal "${a.name}" hanya ${I(i)}`,"warning"),s=i)}else{const o=Be(r);o.isManaged&&s>o.totalStock&&(g(`Stok maksimal tersedia: ${I(o.totalStock)} ${r.unit||"pcs"}`,"warning"),s=o.totalStock)}a.qty=s,oe(a),N()},Na=(e,t)=>{const a=y.find(n=>(n.cartKey||String(n.id))===String(e));if(!a)return;const s=fe(t),r=a.hpp!=null?parseFloat(a.hpp):Fe(a)||0;if(r>0){const n=Math.max(0,Math.round((a.price-r)*a.qty));if(s>n){const o=ce()?` (HPP ${h(r)})`:"";g(`Diskon ditolak! Tidak boleh di bawah harga modal toko${o}. Maksimal diskon: ${h(n)}`,"warning"),a.discount=n,oe(a),N(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("heavy");return}}a.discount=Math.min(s,a.price*a.qty),oe(a),N()},bt=e=>{y=y.filter(t=>(t.cartKey||String(t.id))!==String(e)),N(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light")},Ba=()=>{if(y.length===0)return;const e=()=>{y=[],Z=0,B=0,E="rp",U=0,A=null,N(),g("Keranjang kasir dikosongkan.")};typeof window.showConfirm=="function"?window.showConfirm("Kosongkan Keranjang","Hapus semua item dari transaksi saat ini?",e,"Ya, Kosongkan",!0):e()},Ye=(e="hold")=>{try{if(typeof window<"u"&&typeof window.checkUserGesture=="function"&&!window.checkUserGesture())return;const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const a=new t,s=a.createOscillator(),r=a.createGain();s.type="sine";const n=a.currentTime;e==="hold"?(s.frequency.setValueAtTime(659.25,n),s.frequency.exponentialRampToValueAtTime(880,n+.1)):(s.frequency.setValueAtTime(880,n),s.frequency.exponentialRampToValueAtTime(1174.66,n+.1)),r.gain.setValueAtTime(.08,n),r.gain.exponentialRampToValueAtTime(1e-4,n+.16),s.connect(r),r.connect(a.destination),s.start(),s.stop(n+.16),setTimeout(()=>{a.close().catch(()=>{})},200)}catch{}},$s=e=>{if(!e)return"";const t=Math.floor((Date.now()-e)/1e3);if(t<45)return"Baru saja";const a=Math.floor(t/60);if(a<60)return`${a} mnt lalu`;const s=Math.floor(a/60);return s<24?`${s} jam lalu`:new Date(e).toLocaleDateString("id-ID",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})};let R=[];try{const e=localStorage.getItem("pos_held_carts");if(e){const t=JSON.parse(e);Array.isArray(t)&&(R=t)}}catch{R=[]}const mt=()=>{try{localStorage.setItem("pos_held_carts",JSON.stringify(R))}catch{}Te()},Te=()=>{const e=R.length,t=c("pos-held-btn-storefront"),a=c("pos-held-btn-admin");t&&(e>0?t.innerHTML=`
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
            </button>`)},xt=()=>{if(y.length===0){g("Keranjang masih kosong, tidak ada transaksi untuk ditahan.","warning");return}const e=b?.name?`Antrean #${R.length+1} — ${b.name}`:`Antrean #${R.length+1}`,t=parseFloat(y.reduce((s,r)=>s+(parseFloat(r.qty)||0),0).toFixed(3)),a=C();_e(!0),typeof window.pushModalHistory=="function"&&window.pushModalHistory("posHoldPrompt"),document.getElementById("pos-hold-prompt-modal")?.remove(),document.body.insertAdjacentHTML("beforeend",`
    <div id="pos-hold-prompt-modal" class="fixed inset-0 z-[9999] flex items-center justify-center p-4" style="background:rgba(15,23,42,0.65);backdrop-filter:blur(4px)">
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
                    <input id="pos-hold-note-input" type="text" value="${u(e)}" placeholder="Contoh: Bpk Budi (ambil barang lagi)..."
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
    </div>`),setTimeout(()=>{const s=c("pos-hold-note-input");s&&(s.focus(),s.select())},50)},ht=(e=!1)=>{const t=c("pos-hold-prompt-modal");t&&(!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("posHoldPrompt",!1,()=>t.remove()):t.remove())},It=()=>{if(y.length===0)return;const t=(c("pos-hold-note-input")?.value||"").trim()||`Antrean #${R.length+1}`,a={id:`HELD-${Date.now().toString(36).toUpperCase()}`,time:Date.now(),note:t,cart:JSON.parse(JSON.stringify(y)),globalDisc:ae(),discountType:E,discountVal:B,customer:{...b},total:C(),subtotal:re(),itemCount:parseFloat(y.reduce((s,r)=>s+(parseFloat(r.qty)||0),0).toFixed(3))};R.unshift(a),mt(),y=[],Z=0,B=0,E="rp",b={name:"",phone:"",isMember:!1,memberId:null,isNewTempo:!1},ht(),N(),Q(),Ye("hold"),g(`Antrean "${t}" berhasil diparkir!`,"success")},Ze=(e=!1)=>{!e&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("posHeldModal"),document.getElementById("pos-held-list-modal")?.remove();const t=R.length,a=t===0?`
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
            ${R.map((s,r)=>{const n=u(s.id),o=(s.cart||[]).slice(0,3).map(d=>`${u(d.name)} (${I(d.qty)}x)`).join(", "),i=(s.cart||[]).length>3?` +${s.cart.length-3} lainnya`:"";return`
                <div class="p-3.5 sm:p-4 hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div class="min-w-0 flex-1">
                        <div class="flex items-center gap-2 mb-1 flex-wrap">
                            <span class="px-2 py-0.5 rounded-lg bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 font-black text-[10px] uppercase">
                                #${r+1}
                            </span>
                            <h4 class="font-black text-xs sm:text-sm text-slate-900 dark:text-white truncate" title="${u(s.note)}">
                                ${u(s.note)}
                            </h4>
                            <span class="text-[10px] text-slate-400">• ${$s(s.time)}</span>
                        </div>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                            <i class="fa-solid fa-box-open mr-1 text-[10px] opacity-70"></i>
                            <span>${o}${i}</span>
                        </p>
                        <div class="flex items-center gap-3 mt-1.5 text-xs">
                            <span class="text-slate-500 font-medium">${I(s.itemCount)} item</span>
                            <span class="text-slate-300 dark:text-slate-700">•</span>
                            <span class="font-black" style="color:var(--color-primary)">${h(s.total)}</span>
                            ${(s.globalDisc||0)>0?`<span class="text-[10px] text-rose-500 font-bold">(Disc: ${h(s.globalDisc)})</span>`:""}
                        </div>
                    </div>
                    <div class="flex items-center gap-2 shrink-0">
                        <button onclick="window.posDeleteHeldCart('${n}')" class="w-8 h-8 rounded-xl border border-rose-200 dark:border-rose-900/50 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 flex items-center justify-center text-xs transition-all active:scale-95 cursor-pointer" title="Hapus Antrean">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                        <button onclick="window.posRecallHeldCart('${n}')" class="px-3.5 py-2 rounded-xl text-white font-black text-xs shadow-md active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer" style="background:var(--color-primary)">
                            <i class="fa-solid fa-play text-[10px]"></i>
                            <span>Panggil Antrean</span>
                        </button>
                    </div>
                </div>`}).join("")}
        </div>`;document.body.insertAdjacentHTML("beforeend",`
    <div id="pos-held-list-modal" class="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4" style="background:rgba(15,23,42,0.65);backdrop-filter:blur(4px)">
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
    </div>`)},Xe=(e=!1)=>{const t=c("pos-held-list-modal");t&&(!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("posHeldModal",!1,()=>t.remove()):t.remove())},Rt=e=>{const t=R.findIndex(a=>a.id===e);if(t===-1){g("Transaksi tertahan tidak ditemukan.","warning");return}if(y.length>0){document.getElementById("pos-recall-confirm-modal")?.remove(),document.body.insertAdjacentHTML("beforeend",`
        <div id="pos-recall-confirm-modal" class="fixed inset-0 z-[10000] flex items-center justify-center p-4" style="background:rgba(15,23,42,0.7);backdrop-filter:blur(4px)">
            <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-sm border border-slate-200/80 dark:border-slate-800 overflow-hidden">
                <div class="p-5 text-center">
                    <div class="w-14 h-14 rounded-2xl bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto mb-3 text-2xl shadow-inner">
                        <i class="fa-solid fa-triangle-exclamation"></i>
                    </div>
                    <h3 class="font-black text-sm text-slate-900 dark:text-white mb-1">Keranjang Masih Berisi Item</h3>
                    <p class="text-xs text-slate-500 leading-relaxed mb-4">
                        Ada <span class="font-bold text-slate-800 dark:text-slate-200">${y.length} jenis item</span> di transaksi aktif saat ini. Ingin tahan transaksi aktif ke antrean baru atau menimpa?
                    </p>
                    <div class="flex flex-col gap-2">
                        <button onclick="window.posHoldCurrentAndRecall('${u(e)}')" class="w-full py-2.5 rounded-xl text-white font-bold text-xs shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5 active:scale-95 hover:brightness-105" style="background:var(--color-primary)">
                            <i class="fa-solid fa-floppy-disk"></i>
                            <span>Tahan Transaksi Aktif &amp; Panggil</span>
                        </button>
                        <button onclick="window.posOverwriteAndRecall('${u(e)}')" class="w-full py-2 rounded-xl border border-rose-200 dark:border-rose-900 text-rose-600 dark:text-rose-400 font-bold text-xs hover:bg-rose-50 dark:hover:bg-rose-950/20 transition-all cursor-pointer">
                            Timpa Transaksi Aktif
                        </button>
                        <button onclick="document.getElementById('pos-recall-confirm-modal')?.remove()" class="w-full py-2 rounded-xl text-slate-400 text-xs font-medium hover:text-slate-600 transition-all cursor-pointer">
                            Batal
                        </button>
                    </div>
                </div>
            </div>
        </div>`);return}Ft(t)},Ft=e=>{const t=R[e];t&&(y=JSON.parse(JSON.stringify(t.cart||[])),E=t.discountType||"rp",B=t.discountVal!==void 0?t.discountVal:t.globalDisc||0,Z=ae(),b=t.customer?{...t.customer}:{name:"",phone:"",isMember:!1,memberId:null,isNewTempo:!1},R.splice(e,1),mt(),Xe(),N(),Q(),Ye("recall"),g(`Antrean "${t.note}" berhasil dipanggil kembali!`,"success"))},Nt=e=>{document.getElementById("pos-recall-confirm-modal")?.remove();const t=b?.name?`Antrean #${R.length+1} — ${b.name}`:`Antrean #${R.length+1}`,a={id:`HELD-${Date.now().toString(36).toUpperCase()}`,time:Date.now(),note:t,cart:JSON.parse(JSON.stringify(y)),globalDisc:ae(),discountType:E,discountVal:B,customer:{...b},total:C(),subtotal:re(),itemCount:parseFloat(y.reduce((r,n)=>r+(parseFloat(n.qty)||0),0).toFixed(3))};R.unshift(a);const s=R.findIndex(r=>r.id===e);s!==-1?Ft(s):(mt(),Xe())},Bt=e=>{document.getElementById("pos-recall-confirm-modal")?.remove();const t=R.findIndex(a=>a.id===e);t!==-1&&Ft(t)},_t=e=>{const t=R.find(a=>a.id===e);t&&(document.getElementById("pos-delete-confirm-modal")?.remove(),document.body.insertAdjacentHTML("beforeend",`
    <div id="pos-delete-confirm-modal" class="fixed inset-0 z-[10005] flex items-center justify-center p-4" style="background:rgba(15,23,42,0.75);backdrop-filter:blur(4px)">
        <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-xs border border-slate-200 dark:border-slate-800 p-6 text-center transform transition-all">
            <div class="w-14 h-14 rounded-2xl bg-rose-50 dark:bg-rose-950/40 text-rose-500 border border-rose-200 dark:border-rose-900/50 flex items-center justify-center mx-auto mb-3.5 text-2xl shadow-inner">
                <i class="fa-solid fa-trash-can"></i>
            </div>
            <h4 class="font-black text-sm text-slate-900 dark:text-white mb-1.5">Hapus Antrean Ini?</h4>
            <p class="text-xs text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
                Antrean <span class="font-bold text-slate-800 dark:text-slate-200">"${u(t.note)}"</span> (${t.itemCount} item • ${h(t.total)}) akan dihapus permanen.
            </p>
            <div class="flex gap-2.5">
                <button onclick="document.getElementById('pos-delete-confirm-modal')?.remove()" class="flex-1 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer">
                    Batal
                </button>
                <button onclick="window.posExecuteDeleteHeld('${u(e)}')" class="flex-1 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 active:scale-95 text-xs font-bold text-white shadow-md shadow-rose-600/30 transition-all cursor-pointer flex items-center justify-center gap-1.5">
                    <i class="fa-solid fa-trash-can text-[11px]"></i>
                    <span>Ya, Hapus</span>
                </button>
            </div>
        </div>
    </div>`))},Et=e=>{document.getElementById("pos-delete-confirm-modal")?.remove();const t=R.find(a=>a.id===e);R=R.filter(a=>a.id!==e),mt(),g(`Antrean "${t?.note||""}" berhasil dihapus.`,"info"),Ze(!0)},Kt=()=>{const e=c("pos-mobile-cart-drawer"),t=c("pos-mobile-cart-sheet");e&&t&&(e.classList.remove("opacity-0","pointer-events-none"),e.classList.add("opacity-100"),t.classList.remove("translate-y-full"),t.classList.add("translate-y-0"),typeof window.pushModalHistory=="function"&&window.pushModalHistory("posCartDrawer"),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},_e=(e=!1)=>{const t=c("pos-mobile-cart-drawer"),a=c("pos-mobile-cart-sheet");if(t&&a){const s=()=>{a.classList.add("translate-y-full"),a.classList.remove("translate-y-0"),t.classList.add("opacity-0","pointer-events-none"),t.classList.remove("opacity-100")};!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("posCartDrawer",!1,s):s()}},Cs=e=>{if(!e)return"";if(e.img&&typeof e.img=="string")return kt(e.img,"w150-rw");const t=(m?.products||[]).find(a=>a&&String(a.id)===String(e.id));return t&&t.img&&typeof t.img=="string"?kt(t.img,"w150-rw"):""},Q=()=>{try{if(!m?.products||!m.products.length)try{const o=JSON.parse(localStorage.getItem("freshmart_products")||"null");Array.isArray(o)&&o.length>0&&(m||(window.appData={}),m.products=o)}catch{}const e=Array.isArray(m?.products)?m.products:[],t=e.filter(o=>{if(!o||o.isActive==="false"||o.isActive===!1||ke&&o.category!==ke)return!1;if(pe){const i=String(pe).toLowerCase(),d=String(o.name||"").toLowerCase(),l=String(o.barcode||"").toLowerCase(),f=String(o.sku||"").toLowerCase(),x=String(o.category||"").toLowerCase(),P=String(o.subCategory||"").toLowerCase(),S=String(o.brand||"").toLowerCase(),w=Array.isArray(o.variants)&&o.variants.some(L=>(L.name||"").toLowerCase().includes(i)||(L.sku||"").toLowerCase().includes(i)||(L.barcode||"").toLowerCase().includes(i));return d.includes(i)||l.includes(i)||f.includes(i)||x.includes(i)||P.includes(i)||S.includes(i)||w}return!0}),a=e.filter(o=>o&&o.isActive!=="false"&&o.isActive!==!1&&o.category).map(o=>String(o.category).trim()).filter(o=>o.length>0),r=["Semua",...new Set(a)].map(o=>{const i=o==="Semua",d=i?!ke:ke===o;return`<button onclick="window.posCatFilter('${u(i?"":o)}')" class="shrink-0 px-3.5 py-1.5 rounded-xl text-[11px] font-black uppercase tracking-wider border transition-all active:scale-95 shadow-2xs ${d?"text-white border-transparent":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/50"}" style="${d?"background:linear-gradient(135deg, var(--color-primary-light,#e1b858) 0%, var(--color-primary,#c59b27) 60%, var(--color-primary-dark,#a87f1b) 100%);box-shadow:0 2px 8px rgba(var(--color-primary-rgb),0.3)":""}">${u(o)}</button>`}).join(""),n=t.length===0?`<div class="col-span-full flex flex-col items-center justify-center py-20 text-slate-400 dark:text-slate-600">
                 <div class="w-16 h-16 rounded-3xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 mb-3 shadow-inner">
                   <i class="fa-solid fa-box-open text-2xl"></i>
                 </div>
                 <p class="font-bold text-sm text-slate-600 dark:text-slate-400">Produk Tidak Ditemukan</p>
                 <p class="text-xs text-slate-400 mt-0.5">Coba gunakan kata kunci pencarian atau kategori lain</p>
               </div>`:t.map(o=>{if(!o)return"";const i=!!(o.img&&typeof o.img=="string"&&o.img.trim()),d=i?kt(o.img,"w300-rw"):"",l=Array.isArray(o.variants)&&o.variants.length>0,f=Array.isArray(o.wholesale)&&o.wholesale.length>0,x=y.filter(M=>M&&String(M.id)===String(o.id)),P=parseFloat(x.reduce((M,$)=>M+($&&$.qty&&parseFloat($.qty)||0),0).toFixed(3)),S=u(String(o.id!=null?o.id:"")),w=Be(o),L=u(String(o.name||"Produk")),_=u(String(o.category||"")),j=parseFloat(o.price)||0;let p="",H="";o.priceNormal&&parseFloat(o.priceNormal)>j&&(p=`<span class="pos-badge pos-badge-promo"><i class="fa-solid fa-tags" style="font-size:6px"></i> -${Math.round((parseFloat(o.priceNormal)-j)/parseFloat(o.priceNormal)*100)}%</span>`,H=`<span class="text-[10px] text-slate-400 line-through font-bold">${h(parseFloat(o.priceNormal))}</span>`);const ee=w.isPreorder?`<span class="pos-badge pos-badge-po"><i class="fa-solid fa-clock" style="font-size:6px"></i> PO ${u(w.poTime)}</span>`:"",Me=`${_||"Produk"}${o.brand?` · ${u(o.brand)}`:""}`;let k="";if(ce()){let M=0,$="";if(l){const T=(o.variants||[]).map(F=>F.hpp!=null?parseFloat(F.hpp)||0:parseFloat(o.hpp)||0).filter(F=>F>0);if(T.length>0){const F=Math.min(...T),$e=Math.max(...T);M=F,$=F===$e?h(F):`${h(F)} - ${h($e)}`}else o.hpp!=null&&parseFloat(o.hpp)>0&&(M=parseFloat(o.hpp),$=h(M))}else o.hpp!=null&&parseFloat(o.hpp)>0&&(M=parseFloat(o.hpp),$=h(M));($||o.hpp!=null&&parseFloat(o.hpp)>0)&&(k=`<span class="pos-hpp-tag" title="Harga Pokok Penjualan (Modal Toko)"><i class="fa-solid fa-coins text-[8px]"></i> Modal: <b>${$||h(parseFloat(o.hpp))}</b></span>`)}const V=vt(o,{size:"sm"}),z=vt(o,{size:"md"});return de==="list"?`
                    <div class="pos-list-item${P>0?" in-cart":""}${w.isOutOfStock?" is-out-of-stock cursor-not-allowed":" cursor-pointer"}" onclick="window.posAddToCart('${S}')">
                        <div class="pos-list-thumb">
                            ${i?`<img width="52" height="52" loading="lazy" decoding="async" src="${u(d)}" alt="${L}" onerror="this.onerror=null;this.style.display='none';this.nextElementSibling.style.display='flex';">
                                   <div class="w-full h-full" style="display:none">${V}</div>`:V}
                            ${P>0?`<div class="pos-qty-badge" style="top:2px;right:2px;min-width:18px;height:18px;font-size:9px;border-width:1.5px">${I(P)}</div>`:""}
                        </div>
                        <div style="flex:1;min-width:0" class="flex flex-col justify-center">
                            <!-- Line 1: Kategori & Brand + Chip Operasional -->
                            <div class="flex items-center gap-1.5 flex-wrap">
                                <span class="text-[9px] uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500 truncate max-w-[130px]">${Me}</span>
                                ${p?`<span class="shrink-0">${p}</span>`:""}
                                ${l?'<span class="pos-tag-chip pos-tag-variant"><i class="fa-solid fa-layer-group"></i> Varian</span>':""}
                                ${f?'<span class="pos-tag-chip pos-tag-grosir"><i class="fa-solid fa-tags"></i> Grosir</span>':""}
                                ${w.isPreorder?`<span class="pos-tag-chip pos-tag-po"><i class="fa-solid fa-clock"></i> PO ${u(w.poTime)}</span>`:""}
                                ${w.isManaged&&!w.isOutOfStock?w.isLowStock?`<span class="pos-tag-chip pos-tag-low"><i class="fa-solid fa-fire"></i> Sisa ${I(w.totalStock)}</span>`:`<span class="pos-tag-chip pos-tag-stock"><i class="fa-solid fa-box"></i> Stok ${I(w.totalStock)}</span>`:""}
                                ${w.isOutOfStock?'<span class="pos-badge pos-badge-habis" style="font-size:7px;padding:1px 4px"><i class="fa-solid fa-ban"></i> HABIS</span>':""}
                            </div>
                            <!-- Line 2: Nama Produk -->
                            <p class="text-xs font-bold text-slate-800 dark:text-slate-100 truncate mt-0.5 leading-snug" title="${L}">${L}</p>
                            <!-- Line 3: Harga Jual & Harga Modal HPP -->
                            <div class="flex items-center gap-2 flex-wrap mt-1">
                                <span style="font-size:12px;font-weight:900;color:var(--color-primary)">${h(j)}</span>
                                ${H}
                                ${k}
                            </div>
                        </div>
                        ${w.isOutOfStock?'<button class="pos-add-btn opacity-40 cursor-not-allowed shrink-0" disabled title="Stok Habis"><i class="fa-solid fa-ban"></i></button>':`<button onclick="event.stopPropagation();window.posAddToCart('${S}')" class="pos-add-btn shrink-0" title="Tambah ke keranjang"><i class="fa-solid fa-plus"></i></button>`}
                    </div>`:`
                <div class="pos-product-card${P>0?" in-cart":""}${w.isOutOfStock?" is-out-of-stock cursor-not-allowed":" cursor-pointer"}" onclick="window.posAddToCart('${S}')">
                    <!-- Kotak Gambar Rasio 1:1 Bersih (Foto Tidak Tertutup Tumpukan Badge) -->
                    <div class="pos-img-box">
                        ${w.isOutOfStock?`
                            <div class="absolute inset-0 bg-slate-900/60 z-20 flex items-center justify-center rounded-xl backdrop-blur-[1px]">
                                <span class="bg-rose-600 text-white text-[9px] font-black px-2.5 py-1 rounded-lg shadow-md uppercase tracking-wider flex items-center gap-1">
                                    <i class="fa-solid fa-ban"></i> HABIS
                                </span>
                            </div>`:""}
                        ${P>0?`<div class="pos-qty-badge">${I(P)}</div>`:""}
                        ${i?`<img width="300" height="300" loading="lazy" decoding="async" src="${u(d)}" alt="${L}"
                                 onerror="this.onerror=null;this.style.display='none';this.nextElementSibling.style.display='flex';">
                               <div class="w-full h-full" style="display:none">${z}</div>`:z}
                    </div>
                    <!-- Info Produk Rapi -->
                    <div class="pos-card-info">
                        <p class="pos-card-cat truncate">${Me}</p>
                        <p class="pos-card-name leading-tight line-clamp-2" title="${L}">${L}</p>
                        <!-- Chip Operasional Rapi (Diskon / Varian / Grosir / PO / Stok) -->
                        ${p||l||f||w.isPreorder||w.isManaged&&!w.isOutOfStock?`
                        <div class="flex items-center gap-1 mt-1 mb-0.5 flex-wrap">
                            ${p?`<span class="shrink-0">${p}</span>`:""}
                            ${l?'<span class="pos-tag-chip pos-tag-variant"><i class="fa-solid fa-layer-group"></i> Varian</span>':""}
                            ${f?'<span class="pos-tag-chip pos-tag-grosir"><i class="fa-solid fa-tags"></i> Grosir</span>':""}
                            ${w.isPreorder?`<span class="pos-tag-chip pos-tag-po"><i class="fa-solid fa-clock"></i> PO ${u(w.poTime)}</span>`:""}
                            ${w.isManaged&&!w.isOutOfStock?w.isLowStock?`<span class="pos-tag-chip pos-tag-low"><i class="fa-solid fa-fire"></i> SISA ${I(w.totalStock)}</span>`:`<span class="pos-tag-chip pos-tag-stock"><i class="fa-solid fa-box"></i> Stok ${I(w.totalStock)}</span>`:""}
                        </div>`:""}
                        <div class="pos-card-footer flex items-center justify-between gap-1">
                            <div class="flex flex-col min-w-0 pr-1">
                                <div class="flex items-baseline gap-1.5 flex-wrap">
                                    <span class="pos-card-price">${h(j)}</span>
                                    ${H}
                                </div>
                                <div class="flex items-center gap-1 mt-1">
                                    ${k}
                                </div>
                            </div>
                            ${w.isOutOfStock?'<button class="pos-add-btn opacity-40 cursor-not-allowed shrink-0" disabled title="Stok Habis"><i class="fa-solid fa-ban"></i></button>':`<button onclick="event.stopPropagation();window.posAddToCart('${S}')" class="pos-add-btn shrink-0" title="Tambah ke keranjang"><i class="fa-solid fa-plus"></i></button>`}
                        </div>
                    </div>
                </div>`}).join("");document.querySelectorAll("#pos-cat-filter").forEach(o=>{o.innerHTML=r}),document.querySelectorAll("#pos-catalog-grid").forEach(o=>{o.className=de==="list"?"pos-catalog-list-mode":"pos-catalog-grid-mode",o.innerHTML=n})}catch(e){console.error("[POS] renderCatalog error:",e),document.querySelectorAll("#pos-catalog-grid").forEach(t=>{t.innerHTML=`
                <div class="col-span-full flex flex-col items-center justify-center py-16 text-slate-500">
                    <i class="fa-solid fa-triangle-exclamation text-amber-500 text-3xl mb-3"></i>
                    <p class="font-bold text-sm text-slate-700 dark:text-slate-300">Gagal Memuat Katalog Kasir</p>
                    <p class="text-xs text-slate-400 mt-1 mb-4">${u(e.message||"Terjadi kesalahan")}</p>
                    <button onclick="if(typeof window.posRenderCatalog==='function') window.posRenderCatalog(); else if(typeof window.refreshPOSCatalog==='function') window.refreshPOSCatalog();" class="px-4 py-2 rounded-xl text-xs font-bold text-white shadow-md active:scale-95 cursor-pointer" style="background:var(--color-primary)">
                        <i class="fa-solid fa-arrows-rotate mr-1.5"></i> Coba Muat Ulang
                    </button>
                </div>`})}},N=()=>{const e=parseFloat(y.reduce((p,H)=>p+(parseFloat(H.qty)||0),0).toFixed(3)),t=re(),a=C(),s=h(a),r=h(t),n=y.length===0?`<div class="flex flex-col items-center justify-center h-full py-12 text-slate-300 dark:text-slate-600 select-none">
            <div class="w-16 h-16 rounded-3xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 mb-3 shadow-inner">
                <i class="fa-solid fa-cart-shopping text-2xl"></i>
            </div>
            <p class="text-sm font-bold text-slate-600 dark:text-slate-400">Keranjang Kasir Kosong</p>
            <p class="text-xs text-slate-400 mt-1 text-center max-w-[200px]">Pilih produk di katalog atau scan barcode untuk menambah</p>
           </div>`:y.map(p=>{const H=u(String(p.cartKey||p.id)),ee=Cs(p),Me=p.isVariant&&p.variantName?u(p.name.replace(` — ${p.variantName}`,"")):u(p.name),k=p.hpp!=null?parseFloat(p.hpp):Fe(p)||0,V=k>0?Math.max(0,Math.round((p.price-k)*p.qty)):Math.round(p.price*p.qty),z=k>0?Math.round(p.subtotal-k*p.qty):0,M=vt(p,{size:"thumb"});return`
            <div class="group flex items-start gap-2.5 p-2.5 bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 shadow-xs hover:border-[var(--color-primary)] transition-all">
                <!-- 44px Thumbnail -->
                <div class="w-11 h-11 rounded-xl overflow-hidden shrink-0 border border-slate-200/60 dark:border-slate-700 flex items-center justify-center">
                    ${ee?`<img width="44" height="44" loading="lazy" src="${u(ee)}" alt="${u(p.name)}" onerror="this.onerror=null; this.style.display='none'; this.nextElementSibling.style.display='flex';" class="w-full h-full object-cover">
                           <div class="w-full h-full" style="display:none">${M}</div>`:M}
                </div>
                <!-- Details -->
                <div class="flex-1 min-w-0 pr-1">
                    <p class="text-xs font-bold text-slate-800 dark:text-slate-100 truncate leading-snug" title="${u(p.name)}">${Me}</p>
                    <div class="flex items-center gap-1.5 mt-0.5 flex-wrap">
                        ${p.isWholesale?'<span class="inline-flex items-center text-[8px] font-black px-1.5 py-0.5 rounded text-white shadow-2xs" style="background:var(--color-primary)">GROSIR</span>':""}
                        ${p.isVariant?`<span class="inline-flex items-center gap-1 text-[8px] font-black px-1.5 py-0.5 rounded text-white shadow-2xs" style="background:var(--color-primary);opacity:0.95"><i class="fa-solid fa-layer-group text-[7px]"></i>${u(p.variantName||"VARIAN")}</span>`:""}
                        ${p.poTime?`<span class="inline-flex items-center gap-1 text-[8px] font-bold px-1.5 py-0.5 rounded text-amber-700 bg-amber-100 dark:bg-amber-900/30 dark:text-amber-300 border border-amber-200 dark:border-amber-800 shadow-2xs uppercase tracking-wide"><i class="fa-solid fa-clock text-[7px]"></i> PO ${u(p.poTime)}</span>`:""}
                        ${ce()&&k>0?`<span class="inline-flex items-center gap-1 text-[8px] font-black px-1.5 py-0.5 rounded text-amber-950 bg-amber-100 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-300/80 dark:border-amber-700 shadow-2xs" title="Harga Modal (HPP)"><i class="fa-solid fa-coins text-[7px] text-amber-600 dark:text-amber-400"></i>HPP: ${h(k)}</span>`:""}
                        <span class="text-[10px] text-slate-500 font-medium">
                            ${p.isWholesale&&p.basePrice?`<span class="line-through text-slate-400">${h(p.basePrice)}</span> <span class="font-bold" style="color:var(--color-primary)">${h(p.price)}</span>`:h(p.price)}
                        </span>
                    </div>
                    <div class="flex items-center gap-1.5 mt-1.5 flex-wrap">
                        <span class="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Diskon:</span>
                        <input type="number" min="0" ${k>0?`max="${V}"`:""} placeholder="0" value="${p.discount||""}" onchange="window.posSetItemDisc('${H}',this.value)"
                            class="w-16 text-[10px] font-mono font-bold border border-slate-200 dark:border-slate-700 rounded-md px-1.5 py-0.5 bg-slate-50 dark:bg-slate-700/60 text-right focus:outline-none focus:border-[var(--color-primary)] transition-all">
                        ${ce()&&k>0?`<span class="text-[9px] text-amber-600 dark:text-amber-400 font-bold whitespace-nowrap" title="Maksimal diskon agar tidak di bawah harga modal HPP">(Maks: ${h(V)})</span>`:""}
                    </div>
                </div>
                <!-- Stepper & Subtotal -->
                <div class="flex flex-col items-end shrink-0">
                    <div class="flex items-center gap-1">
                        <div class="flex items-center bg-slate-100 dark:bg-slate-700/80 rounded-lg p-0.5 border border-slate-200 dark:border-slate-600 focus-within:border-[var(--color-primary)] transition-colors">
                            <button onclick="window.posUpdateQty('${H}',-1)" class="w-5 h-5 rounded text-slate-600 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-600 font-black text-xs flex items-center justify-center cursor-pointer active:scale-90 transition-all">−</button>
                            <input type="number" step="any" min="0.01" value="${I(p.qty)}" onchange="window.posSetQty('${H}',this.value)"
                                class="w-11 text-center text-[11px] font-black bg-transparent text-slate-800 dark:text-slate-100 focus:outline-none px-0.5">
                            <button onclick="window.posUpdateQty('${H}',1)" class="w-5 h-5 rounded text-slate-600 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-600 font-black text-xs flex items-center justify-center cursor-pointer active:scale-90 transition-all">+</button>
                        </div>
                        <button onclick="window.posRemoveItem('${H}')" class="w-6 h-6 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 flex items-center justify-center text-xs transition-all cursor-pointer" title="Hapus item">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                    <p class="text-xs font-black mt-1.5" style="color:var(--color-primary)">${h(p.subtotal)}</p>
                    ${ce()&&k>0?`<p class="text-[9px] font-bold ${z>=0?"text-emerald-600 dark:text-emerald-400":"text-rose-500"} mt-0.5" title="Estimasi laba kotor item ini"><i class="fa-solid fa-arrow-trend-up text-[8px] mr-0.5"></i>Untung: ${h(z)}</p>`:""}
                </div>
            </div>`}).join("");document.querySelectorAll(".pos-cart-items-target").forEach(p=>p.innerHTML=n),document.querySelectorAll(".pos-subtotal-target").forEach(p=>p.textContent=r),document.querySelectorAll(".pos-total-target").forEach(p=>p.textContent=s),document.querySelectorAll(".pos-item-count-target").forEach(p=>p.textContent=I(e));const o=ce(),i=o?ne():0,d=h(i),l=o?Math.max(0,a-i):0,f=h(l);document.querySelectorAll(".pos-total-hpp-target").forEach(p=>p.textContent=d),document.querySelectorAll(".pos-total-margin-target").forEach(p=>p.textContent=f),document.querySelectorAll(".pos-hpp-margin-row").forEach(p=>{p.style.display=o?"flex":"none"});const x=ae(),P=h(x);document.querySelectorAll(".pos-disc-val-input").forEach(p=>{document.activeElement!==p&&(p.value=B||"")}),document.querySelectorAll(".pos-global-disc-target").forEach(p=>{document.activeElement!==p&&(p.value=B||"")}),document.querySelectorAll(".pos-disc-preview-target").forEach(p=>{x>0?(p.textContent=`- ${P}`,p.classList.remove("hidden"),p.classList.add("text-rose-500")):(p.textContent="",p.classList.add("hidden"))}),document.querySelectorAll(".pos-disc-type-rp").forEach(p=>{E==="rp"?(p.className="pos-disc-type-rp px-2.5 py-0.5 rounded-md transition-all cursor-pointer font-black text-white shadow-xs text-[10px]",p.style.background="var(--color-primary)",p.style.color="#ffffff"):(p.className="pos-disc-type-rp px-2.5 py-0.5 rounded-md transition-all cursor-pointer text-slate-600 dark:text-slate-300 hover:text-slate-900 font-bold text-[10px]",p.style.background="transparent",p.style.color="")}),document.querySelectorAll(".pos-disc-type-pct").forEach(p=>{E==="percent"?(p.className="pos-disc-type-pct px-2.5 py-0.5 rounded-md transition-all cursor-pointer font-black text-white shadow-xs text-[10px]",p.style.background="var(--color-primary)",p.style.color="#ffffff"):(p.className="pos-disc-type-pct px-2.5 py-0.5 rounded-md transition-all cursor-pointer text-slate-600 dark:text-slate-300 hover:text-slate-900 font-bold text-[10px]",p.style.background="transparent",p.style.color="")}),document.querySelectorAll(".pos-disc-prefix").forEach(p=>{p.textContent=E==="percent"?"%":"Rp",p.style.color="var(--color-primary)"});const S=[5,10,15,20,50],w=[2e3,5e3,1e4,25e3,5e4],L=(p,H)=>E===H&&Number(B)===Number(p),_=E==="percent"?`
        ${S.map(p=>{const H=L(p,"percent");return`<button onclick="window.posApplyQuickDiscount(${p},'percent')" 
                class="px-2.5 py-1 rounded-lg text-[10px] cursor-pointer transition-all active:scale-95 ${H?"text-white shadow-xs font-black":"bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700 font-bold"}"
                style="${H?"background:var(--color-primary);border:1px solid var(--color-primary);":""}">${p}%</button>`}).join("")}
        ${B>0?`<button onclick="window.posApplyQuickDiscount(0,'percent')" class="px-2.5 py-1 rounded-lg bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 text-[10px] font-bold text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800 cursor-pointer transition-all active:scale-95"><i class="fa-solid fa-rotate-left mr-1 text-[9px]"></i>Reset</button>`:""}
        `:`
        ${w.map(p=>{const H=L(p,"rp"),ee=`${p/1e3}rb`;return`<button onclick="window.posApplyQuickDiscount(${p},'rp')" 
                class="px-2.5 py-1 rounded-lg text-[10px] cursor-pointer transition-all active:scale-95 ${H?"text-white shadow-xs font-black":"bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700 font-bold"}"
                style="${H?"background:var(--color-primary);border:1px solid var(--color-primary);":""}">${ee}</button>`}).join("")}
        ${B>0?`<button onclick="window.posApplyQuickDiscount(0,'rp')" class="px-2.5 py-1 rounded-lg bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 text-[10px] font-bold text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800 cursor-pointer transition-all active:scale-95"><i class="fa-solid fa-rotate-left mr-1 text-[9px]"></i>Reset</button>`:""}
        `;document.querySelectorAll(".pos-disc-chips-target").forEach(p=>p.innerHTML=_),document.querySelectorAll(".pos-pay-btn-target").forEach(p=>{p.disabled=y.length===0;const H=p.querySelector(".btn-text");H&&(H.textContent=y.length>0?`BAYAR — ${s}`:"PROSES PEMBAYARAN")}),document.querySelectorAll(".pos-hold-btn-target").forEach(p=>{p.disabled=y.length===0,y.length===0?p.classList.add("opacity-40","cursor-not-allowed"):p.classList.remove("opacity-40","cursor-not-allowed")}),Te();const j=c("pos-mobile-floating-bar");j&&(y.length>0?(j.classList.remove("translate-y-32","opacity-0","pointer-events-none"),j.classList.add("translate-y-0","opacity-100")):(j.classList.add("translate-y-32","opacity-0","pointer-events-none"),j.classList.remove("translate-y-0","opacity-100"),_e(!0)))},_a=()=>{if(y.length===0){g("Keranjang masih kosong!","warning");return}const e=ne();if(e>0&&C()<e){g(`Transaksi ditolak! Total tagihan (${h(C())}) tidak boleh di bawah harga modal HPP (${h(e)})!`,"error"),typeof window.triggerHaptic=="function"&&window.triggerHaptic("heavy");return}typeof window.pushModalHistory=="function"&&window.pushModalHistory("posPayment"),b={name:"",phone:"",isMember:!1,memberId:null,isNewTempo:!1},U=0,A=null,D="cash",Y=C(),we(),et(),document.body.insertAdjacentHTML("beforeend",`
    <div id="pos-pay-modal" class="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4" style="background:rgba(15,23,42,0.65);backdrop-filter:blur(4px)">
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
    </div>`),ge("cash")},qt=(e=!1)=>{const t=c("pos-pay-modal");t&&(!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("posPayment",!1,()=>t.remove()):t.remove())},Ea=(e,t,a)=>{a.forEach(s=>{const r=c(`${e}-${s}`);r&&(s===t?(r.style.background="var(--color-primary)",r.style.color="white",r.style.borderColor="var(--color-primary)",r.classList.add("shadow-xs")):(r.style.removeProperty("background"),r.style.removeProperty("color"),r.style.removeProperty("border-color"),r.classList.remove("shadow-xs")))})},ge=e=>{const t=c("pos-pay-detail");if(!t)return;const a=C(),s=ne(),r=Math.max(0,a-s),n=Se(),o=`
      <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-700/60 mb-2.5 text-xs space-y-1.5">
        <div class="flex justify-between items-center">
          <span class="text-slate-500 font-medium">Subtotal Belanja</span>
          <span class="font-bold font-mono text-xs">${h(re())}</span>
        </div>
        ${ae()>0?`
        <div class="flex justify-between items-center text-rose-500 text-[11px]">
          <span>Diskon Toko</span>
          <span class="font-bold font-mono">- ${h(ae())}</span>
        </div>`:""}
        ${n>0?`
        <div class="flex justify-between items-center text-emerald-600 dark:text-emerald-400 text-[11px]">
          <span class="flex items-center gap-1 font-bold"><i class="fa-solid fa-tags"></i> Diskon Poin (${U} Pts)</span>
          <span class="font-black font-mono">- ${h(n)}</span>
        </div>`:""}
        ${A?`
        <div class="flex justify-between items-center text-purple-600 dark:text-purple-400 text-[11px]">
          <span class="flex items-center gap-1 font-bold"><i class="fa-solid fa-gift"></i> Klaim Hadiah</span>
          <span class="font-bold truncate max-w-[170px]">${u(A.name)} (-${A.pointsCost} Pts)</span>
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
            ${o}
            <div class="space-y-2">
                <label class="text-[10px] font-black uppercase tracking-wider text-slate-400">Nominal Uang Diterima (Rp)</label>
                <div class="relative">
                    <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-black text-slate-400">Rp</span>
                    <input id="pos-paid-input" type="number" min="0" placeholder="${a}" value="${Y||""}"
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
                <div id="pos-change-box" class="mt-2.5 p-3 rounded-2xl border transition-all flex items-center justify-between ${Y>=a?"bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800":"bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800"}">
                    <div>
                        <p class="text-[9px] font-black uppercase tracking-wider text-slate-400">Status Kembalian</p>
                        <p id="pos-change-label" class="text-xs font-bold ${Y>=a?"text-emerald-700 dark:text-emerald-400":"text-rose-700 dark:text-rose-400"}">
                            ${Y>=a?"Kembalian Uang Pembeli:":"Uang Masih Kurang:"}
                        </p>
                    </div>
                    <span id="pos-change-display" class="text-base font-black ${Y>=a?"text-emerald-700 dark:text-emerald-400":"text-rose-600 dark:text-rose-400"}">
                        ${h(Math.abs(Oa()))}
                    </span>
                </div>
            </div>
        `}else if(e==="qris"){const i=m.payment?.qrisUrl||"";t.innerHTML=`
          ${o}
          ${i?`<div class="flex flex-col items-center justify-center p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700"><img src="${u(i)}" class="w-48 h-48 object-contain rounded-xl shadow-xs" alt="QRIS"><p class="text-center text-xs font-bold text-slate-600 dark:text-slate-300 mt-2">Arahkan kamera pembeli untuk memindai QRIS</p></div>`:'<div class="p-4 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 text-xs rounded-2xl border border-amber-200 text-center font-bold"><i class="fa-solid fa-triangle-exclamation mr-1.5"></i>QRIS toko belum diatur di menu Pengaturan.</div>'}`}else if(e==="transfer"){const d=(Array.isArray(m.banks)?m.banks:[]).filter(f=>f&&(f.bankName||f.name||f.bank));let l='<option value="">Rekening bank belum diatur di CMS Admin</option>';d.length>0&&(l=d.map(f=>{const x=f.bankName||f.name||f.bank||"Bank",P=f.bankAccount||f.number||f.noRekening||f.account||"",S=f.bankOwner||f.holder||f.atasNama||f.owner||"",w=`${x}${P?" — "+P:""}${S?" a/n "+S:""}`;return`<option value="${u(w)}">${u(w)}</option>`}).join("")),t.innerHTML=`
          ${o}
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
          </div>`}else if(e==="tempo"){const i=!!(b.isMember&&b.paylaterActive&&b.paylaterLimit>0),d=i?Math.max(0,(b.paylaterLimit||0)-Math.max(0,b.paylaterUsed||0)):0,l=i&&a>d?a-d:0;t.innerHTML=`
          ${o}
          ${i?`
            <div class="p-3.5 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/40 rounded-2xl border border-emerald-200/80 dark:border-emerald-800/60 mb-2.5 space-y-2">
              <div class="flex items-center justify-between">
                <span class="text-xs font-black text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                  <i class="fa-solid fa-bolt text-emerald-500"></i> Putri PayLater Member
                </span>
                <span class="text-[10px] font-black px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-200">
                  Plafon: ${h(b.paylaterLimit)}
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
          <label class="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1">${i&&l>0?"Uang Muka / DP Wajib (Rp)":"Uang Muka / DP (Rp) — opsional"}</label>
          <input id="pos-dp-input" type="number" min="0" placeholder="0" value="${l>0?l:0}" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-black text-right bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)]">`}},Ka=e=>{const t=C(),a=c("pos-dp-input"),s=c("pos-dp-input")?.previousElementSibling,r=!!(b.isMember&&b.paylaterActive&&b.paylaterLimit>0),n=r?Math.max(0,(b.paylaterLimit||0)-Math.max(0,b.paylaterUsed||0)):0,o=e&&r&&t>n?t-n:0;a&&(a.value=o>0?o:0),s&&s.tagName==="LABEL"&&(s.textContent=e&&r&&o>0?"Uang Muka / DP Wajib (Rp)":"Uang Muka / DP (Rp) — opsional")};window.posTogglePaylater=Ka;const qa=e=>{b.isMember=e==="member",b.isNewTempo=e==="tempo",Ea("pos-ctype",e,["umum","member","tempo"]);const t=c("pos-customer-fields");t&&(e==="umum"?(b.name="",b.phone="",b.memberId=null,b.points=0,t.innerHTML='<input id="pos-cust-name" type="text" placeholder="Nama pembeli (opsional)" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)] focus:bg-white">'):e==="member"?(t.innerHTML=`
          <div class="space-y-2">
            <div class="flex gap-2">
              <div class="relative flex-1">
                <i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
                <input id="pos-cust-phone" type="text" placeholder="Ketik No. HP / Nama / ID Member..."
                  value="${b.isMember?u(b.phone||b.name||""):""}"
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
          </div>`,we().then(()=>{c("pos-cust-phone")?.value?.trim()&&at()})):e==="tempo"&&(b.isMember=!1,Ut("tempo"),t.innerHTML=`
          <div class="space-y-2">
            <input id="pos-cust-name" type="text" placeholder="Nama Pelanggan / Rekanan *" required class="w-full border border-amber-300 dark:border-amber-600 rounded-xl px-3 py-2 text-xs bg-amber-50/40 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none">
            <input id="pos-cust-phone" type="tel" placeholder="No. WhatsApp Pelanggan *" required class="w-full border border-amber-300 dark:border-amber-600 rounded-xl px-3 py-2 text-xs bg-amber-50/40 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none">
          </div>`))},Ut=e=>{D=e,Ea("pos-pay",e,["cash","qris","transfer","tempo"]),ge(e),e==="transfer"&&(!m.banks||!m.banks.length)&&et().then(t=>{D==="transfer"&&t&&t.length>0&&ge("transfer")})},Vt=e=>{Y=fe(e);const t=C(),a=Y-t,s=c("pos-change-display"),r=c("pos-change-label"),n=c("pos-change-box"),o=c("pos-process-btn");s&&(s.textContent=h(Math.abs(a))),r&&(r.textContent=a>=0?"Kembalian Uang Pembeli:":"Uang Masih Kurang:"),s&&(s.className=`text-base font-black ${a>=0?"text-emerald-700 dark:text-emerald-400":"text-rose-600 dark:text-rose-400"}`),n&&(n.className=`mt-2.5 p-3 rounded-2xl border transition-all flex items-center justify-between ${a>=0?"bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800":"bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800"}`),o&&D==="cash"&&(o.disabled=a<0,o.classList.toggle("opacity-50",a<0))},Gt=e=>{const t=c("pos-paid-input");t&&(t.value=e,Vt(e),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},et=async()=>{if(Array.isArray(m.banks)&&m.banks.length>0)return m.banks;try{const e=await O.collection("freshmart").doc("cms_data").get();if(e.exists){const t=e.data();if(Array.isArray(t?.banks)&&t.banks.length>0)return m.banks=t.banks,m.banks}}catch{}return m.banks||[]},we=async()=>{if(m.customers&&m.customers.length>0)return m.customers;try{const e=await O.collection("freshmart").doc("cms_data").collection("customers").get();return m.customers=e.docs.map(t=>({...t.data(),id:t.id,_docId:t.id})),m.customers}catch{return m.customers||[]}},Ua=(e,t)=>{if(!e||!t||!t.length)return[];const a=e.trim().toLowerCase(),s=a.replace(/\D/g,"");let r=s;r.startsWith("62")?r=r.slice(2):r.startsWith("0")&&(r=r.slice(1));const n=[],o=new Set;return t.forEach(i=>{if(!i)return;const d=String(i.id||i._docId||i.phone||"");if(o.has(d))return;const l=String(i.phone||"").replace(/\D/g,"");let f=l;f.startsWith("62")?f=f.slice(2):f.startsWith("0")&&(f=f.slice(1));const x=String(i.name||"").toLowerCase();let P=!1;r.length>=4&&f&&(f===r||f.endsWith(r)||r.endsWith(f)||l.includes(s))&&(P=!0),!P&&(d.toLowerCase()===a||d===s)&&(P=!0),!P&&a.length>=2&&x.includes(a)&&(P=!0),P&&(o.add(d),n.push(i))}),n},As=async e=>{if(!e)return null;const t=e.trim(),a=t.replace(/\D/g,"");let s=a;s.startsWith("62")?s=s.slice(2):s.startsWith("0")&&(s=s.slice(1));const r=O.collection("freshmart").doc("cms_data").collection("customers"),o=Array.from(new Set([s?"62"+s:null,s?"0"+s:null,s||null,s?"+62"+s:null,a||null,t].filter(Boolean))).map(async l=>{try{const f=await r.doc(l).get();if(f&&f.exists)return{...f.data(),id:f.id,_docId:f.id}}catch{}return null}),d=(await Promise.all(o)).find(Boolean);if(d){m.customers||(m.customers=[]);const l=m.customers.findIndex(f=>String(f.id||f.phone)===String(d.id||d.phone));return l>-1?m.customers[l]=d:m.customers.push(d),d}try{const l=await r.limit(300).get();if(!l.empty){m.customers=l.docs.map(x=>({...x.data(),id:x.id,_docId:x.id}));const f=Ua(e,m.customers);if(f.length>0)return f[0]}}catch{}return null},tt=()=>{const e=c("pos-member-result");if(!e||!b.isMember)return;const t=parseFloat(b.points)||0,a=typeof window.getMemberTier=="function"?window.getMemberTier(t):{badge:"MEMBER RESMI"},s=Je(),r=Se(),n=pt(),o=(m.rewards||[]).filter(d=>d.isActive!=="false"&&d.isActive!==!1&&(parseFloat(d.stock)||0)>0),i=Math.max(0,t-(U||0));e.innerHTML=`
    <div class="space-y-2.5">
      <!-- Info Member Bar -->
      <div class="p-3 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/30 rounded-2xl border border-emerald-300 dark:border-emerald-700/60 shadow-xs flex items-center justify-between gap-2.5">
        <div class="flex items-center gap-2.5 min-w-0">
          <div class="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs">
            <i class="fa-solid fa-id-card text-base"></i>
          </div>
          <div class="min-w-0">
            <div class="flex items-center gap-1.5 flex-wrap">
              <span class="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-700">${u(a.badge||"VIP")}</span>
              <span class="text-[10px] font-black text-amber-600 dark:text-amber-400 flex items-center gap-0.5"><i class="fa-solid fa-star text-[9px]"></i>${t} Poin</span>
              ${b.paylaterActive&&b.paylaterLimit>0?`
                <span class="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-700 flex items-center gap-1">
                  <i class="fa-solid fa-bolt text-emerald-500"></i> PayLater: ${h(Math.max(0,(b.paylaterLimit||0)-Math.max(0,b.paylaterUsed||0)))}
                </span>
              `:""}
            </div>
            <p class="text-xs font-black text-slate-800 dark:text-white truncate mt-0.5">${u(b.name||"Pelanggan Setia")}</p>
            <p class="text-[10px] text-slate-500 dark:text-slate-400 font-mono">${u(b.phone||"")}</p>
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

          ${U>0?`
          <div class="p-2.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-between gap-2">
            <div class="text-xs">
              <span class="font-bold text-emerald-700 dark:text-emerald-300">Potongan Belanja:</span>
              <span class="font-black font-mono text-emerald-600 dark:text-emerald-400 ml-1">-${h(r)}</span>
              <span class="text-[10px] text-slate-500 ml-1">(${U} Poin)</span>
            </div>
            <button type="button" onclick="window.setPosPointsRedeemed(0)" class="text-[10px] font-bold text-rose-500 hover:underline cursor-pointer">
              Batal
            </button>
          </div>
          `:`
          <div class="space-y-2">
            <div class="flex gap-1.5 flex-wrap">
              ${[10,20,50].map(d=>d>n?"":`
                <button type="button" onclick="window.setPosPointsRedeemed(${d})" class="px-2.5 py-1.5 rounded-lg text-[10px] font-bold bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 dark:bg-slate-700 dark:hover:bg-emerald-900/40 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 transition-all cursor-pointer">
                  Tukar ${d} Pts (-${h(d*s)})
                </button>
                `).join("")}
              ${n>0?`
              <button type="button" onclick="window.setPosPointsRedeemed(${n})" class="px-2.5 py-1.5 rounded-lg text-[10px] font-bold bg-emerald-600 text-white hover:bg-emerald-700 transition-all cursor-pointer shadow-xs">
                Maksimal (${n} Pts)
              </button>
              `:""}
            </div>
            ${n<=0?`
            <p class="text-[10px] text-slate-400 italic">* Batas harga modal HPP atau saldo poin telah tercapai.</p>
            `:""}
          </div>
          `}
        </div>

        <!-- 2. Klaim Hadiah Katalog Langsung di Kasir -->
        ${o.length>0?`
        <div class="pt-2.5 border-t border-slate-100 dark:border-slate-700/60">
          <div class="flex items-center justify-between text-xs mb-1.5">
            <span class="font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
              <i class="fa-solid fa-gift text-purple-500"></i>
              <span>Klaim Hadiah Katalog Reward</span>
            </span>
            <span class="text-[10px] text-slate-400 font-semibold">Tersisa: ${i} Poin</span>
          </div>

          ${A?`
          <div class="p-2.5 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800/60 flex items-center justify-between gap-2">
            <div class="text-xs min-w-0">
              <span class="font-bold text-purple-800 dark:text-purple-300 block truncate">🎁 ${u(A.name)}</span>
              <span class="text-[10px] text-purple-600 dark:text-purple-400 font-mono">Ditukar dengan ${A.pointsCost} Poin</span>
            </div>
            <button type="button" onclick="window.deselectPosReward()" class="text-[10px] font-bold text-rose-500 hover:underline cursor-pointer shrink-0">
              Batal
            </button>
          </div>
          `:`
          <div class="relative">
            <select onchange="if(this.value){window.selectPosReward(this.value);}else{window.deselectPosReward();}" class="w-full text-xs py-2 pl-3 pr-8 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)]">
              <option value="">-- Pilih Hadiah Member (Opsional) --</option>
              ${o.map(d=>{const l=parseFloat(d.pointsCost)||0,f=l<=i;return`
                <option value="${d.id}" ${f?"":"disabled"}>
                  ${u(d.name)} (${l} Poin) ${f?"":"[Poin Kurang]"}
                </option>
                `}).join("")}
            </select>
          </div>
          `}
        </div>
        `:""}
      </div>
      `:""}
    </div>`},Va=e=>{const t=pt();U=Math.min(t,Math.max(0,parseInt(e)||0)),tt(),ge(D);const s=document.querySelector("#pos-pay-modal .text-xs.text-slate-500 .font-black");s&&(s.textContent=h(C()))},Ga=e=>{const t=(m.rewards||[]).find(n=>String(n.id)===String(e));if(!t)return;const a=parseFloat(t.pointsCost)||0,s=Math.max(0,(parseFloat(b.points)||0)-(U||0));if(a>s){g("Poin member tidak cukup untuk hadiah ini!","warning");return}A={id:t.id,name:t.name,pointsCost:a},g(`Hadiah "${t.name}" dipilih!`,"success"),tt(),ge(D);const r=document.querySelector("#pos-pay-modal .text-xs.text-slate-500 .font-black");r&&(r.textContent=h(C()))},Qa=()=>{A=null,tt(),ge(D);const e=document.querySelector("#pos-pay-modal .text-xs.text-slate-500 .font-black");e&&(e.textContent=h(C()))},lt=e=>{b.isMember=!0,b.name=e.name||"Member Toko",b.phone=e.phone||"",b.memberId=e.id||e._docId||e.phone,b.points=parseFloat(e.points)||0,U=0,A=null,b.paylaterActive=!!e.paylaterActive,b.paylaterLimit=Math.max(0,parseFloat(e.paylaterLimit)||0),b.paylaterUsed=Math.max(0,parseFloat(e.paylaterUsed)||0);const t=c("pos-cust-phone");t&&(t.value=e.phone||e.name||""),tt(),ge(D),g(`Member terdeteksi: ${e.name} (${b.points} Poin)`,"success")},Qt=e=>{const a=(m.customers||[]).find(s=>s&&String(s.id||s._docId||s.phone)===String(e));a&&lt(a)},Wt=()=>{b.isMember=!1,b.name="",b.phone="",b.memberId=null,b.points=0,U=0,A=null,b.paylaterActive=!1,b.paylaterLimit=0,b.paylaterUsed=0;const e=c("pos-cust-phone");e&&(e.value="",e.focus());const t=c("pos-member-result");t&&(t.innerHTML=""),ge(D)};let da=null;const zt=()=>{clearTimeout(da);const e=c("pos-cust-phone")?.value?.trim()||"";if(!e){if(!b.memberId){const s=c("pos-member-result");s&&(s.innerHTML="")}return}const t=e.replace(/\D/g,"");!(Array.isArray(m.customers)&&m.customers.length>0)&&t.length<10&&e.length<8||(da=setTimeout(()=>{at()},350))},at=async()=>{const t=c("pos-cust-phone")?.value?.trim()||"";if(!t){g("Masukkan nomor HP atau nama member","warning");return}const a=c("pos-member-result"),s=c("pos-member-lookup-btn");s&&(s.disabled=!0,s.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i>'),a&&(a.innerHTML='<div class="p-2.5 text-center text-xs text-slate-400"><i class="fa-solid fa-spinner fa-spin mr-1.5"></i>Memeriksa database member...</div>');try{await we();const r=Ua(t,m.customers||[]);if(r.length===1)lt(r[0]);else if(r.length>1)a.innerHTML=`
              <div class="space-y-1.5 max-h-44 overflow-y-auto pr-1">
                <p class="text-[10px] font-bold text-slate-500 mb-1">Ditemukan ${r.length} member (klik untuk memilih):</p>
                ${r.map(n=>`
                  <button onclick="window.selectPosMember('${u(n.id||n._docId||n.phone)}')" type="button"
                    class="w-full text-left p-2 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 border border-slate-200 dark:border-slate-700 hover:border-emerald-400 transition-all flex items-center justify-between gap-2 cursor-pointer">
                    <div class="min-w-0">
                      <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${u(n.name||"Member")}</p>
                      <p class="text-[10px] text-slate-500 dark:text-slate-400 font-mono">${u(n.phone||"")}</p>
                    </div>
                    <span class="text-[10px] font-black text-amber-500 shrink-0"><i class="fa-solid fa-star text-[9px]"></i> ${parseFloat(n.points)||0} Poin</span>
                  </button>
                `).join("")}
              </div>
            `;else{const n=await As(t);if(n)lt(n);else{b.isMember=!1,b.name="",b.memberId=null,b.points=0;const i=t.replace(/\D/g,"").length>=8;a.innerHTML=`
                  <div class="p-3 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs space-y-1">
                    <p class="font-bold flex items-center gap-1.5"><i class="fa-solid fa-circle-info"></i> Member Tidak Ditemukan</p>
                    <p class="text-[11px] text-amber-700 dark:text-amber-400">Tidak ada member ditemukan untuk "<b>${u(t)}</b>".</p>
                    ${i?"":`
                      <p class="text-[10px] text-amber-600/90 dark:text-amber-400/80 pt-1 border-t border-amber-200 dark:border-amber-800/60">
                        <i class="fa-solid fa-lightbulb mr-1 text-amber-500"></i><b>Tips Kasir:</b> Masukkan nomor WhatsApp/HP member (contoh: <code>0812...</code>) untuk verifikasi instan.
                      </p>
                    `}
                  </div>`}}}catch(r){console.error("[POS] Error lookupPosMember:",r),a&&(a.innerHTML=`<p class="text-xs text-rose-500 p-2">Gagal memeriksa data: ${u(r.message||"Koneksi error")}</p>`)}finally{s&&(s.disabled=!1,s.innerHTML='<i class="fa-solid fa-magnifying-glass mr-1.5"></i><span>Cek</span>')}},Wa=async()=>{if(y.length===0){g("Keranjang kosong!","warning");return}const e=ne();if(e>0&&C()<e){g(`Transaksi ditolak! Total transaksi (${h(C())}) tidak boleh di bawah total harga modal HPP (${h(e)})!`,"error"),typeof window.triggerHaptic=="function"&&window.triggerHaptic("heavy");return}const t=b.isMember?b.name||"Member Toko":c("pos-cust-name")?.value?.trim()||"Pelanggan Umum",a=b.isMember?b.phone||c("pos-cust-phone")?.value?.trim()||"":c("pos-cust-phone")?.value?.trim()||"";if(b.isNewTempo&&!a){g("No. HP wajib diisi untuk tempo!","warning");return}if(D==="cash"&&(Y=fe(c("pos-paid-input")?.value||0),Y<C())){g(`Uang kurang! Minimal ${h(C())}`,"warning");return}b.name=t,b.phone=a;const s=D==="tempo"?fe(c("pos-dp-input")?.value||0):0,r=D==="transfer"&&c("pos-bank-sel")?.value||"",n=D==="tempo"&&!!(b.isMember&&b.paylaterActive&&c("pos-use-paylater")?.checked),o=n?Math.max(0,(b.paylaterLimit||0)-Math.max(0,b.paylaterUsed||0)):0;if(n){const f=C()>o?C()-o:0;if(s<f){g(`DP tidak mencukupi limit PayLater! Minimal DP: ${h(f)}`,"warning");return}}const i=n?Math.min(C()-s,o):0,d=c("pos-process-btn");d&&(d.disabled=!0,d.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i>Memproses...');const l=m.store?.useStock===!0||m.store?.useStock==="true";if(l)for(const f of y){const x=(m.products||[]).find(S=>String(S.id)===String(f.id));if(!x)continue;const P=parseFloat(f.qty)||0;if(f.variantName&&x.variants){const S=(x.variants||[]).find(L=>L.name===f.variantName),w=parseFloat(S&&S.stock!==void 0?S.stock:0);if(w<P){g(`Stok ${f.name} (${f.variantName}) tidak cukup! Sisa: ${w}`,"warning"),d&&(d.disabled=!1,d.innerHTML='<i class="fa-solid fa-check-circle mr-2"></i>Selesaikan Transaksi');return}}else{const S=parseFloat(x.stock!==void 0?x.stock:0);if(S<P){g(`Stok ${f.name} tidak cukup! Sisa: ${S}`,"warning"),d&&(d.disabled=!1,d.innerHTML='<i class="fa-solid fa-check-circle mr-2"></i>Selesaikan Transaksi');return}}}try{const f=Ms(),x=typeof window.getCashierSession=="function"?window.getCashierSession():null,P=x?.name||m.store?.name||"Kasir",S=x?.uid||window.__currentAdminUid||"admin",w=new Date().toISOString(),L=Ee.firestore.FieldValue.serverTimestamp(),_=D==="tempo"?"Diproses":"Selesai",j=q(),p=j&&j.status==="open"?j.id:null,H=j&&j.status==="open"?j.shiftNo||j.id:null,ee={orderId:f,txId:f,source:"pos",channel:"pos",status:_,timestamp:L,dateString:w,dateMs:Date.now(),shiftId:p,shiftNo:H,cashier:S,cashierName:P,customer:{name:t,phone:a,wa:a,address:"Beli Langsung di Kasir (POS)",deliveryMethod:"takeaway",isMember:!!b.isMember,memberId:b.memberId||null},customerName:t,customerPhone:a,customerType:b.isMember?"Member":"Pelanggan Umum",items:y.map(k=>({id:k.id,name:k.name,price:parseFloat(k.price)||0,basePrice:parseFloat(k.basePrice||k.price)||0,hpp:k.hpp!=null?parseFloat(k.hpp):Fe(k)||0,qty:parseFloat(k.qty)||1,discount:parseFloat(k.discount)||0,subtotal:parseFloat(k.subtotal)||0,variantName:k.variantName||"",isVariant:!!k.isVariant,isWholesale:!!k.isWholesale,effectivePrice:parseFloat(k.price)||0,poTime:k.poTime||"",unit:k.unit||"pcs"})),hasPO:y.some(k=>k.poTime&&String(k.poTime).trim()!==""),payment:{method:D,subtotal:re(),productDiscount:fe(Z),shippingCost:0,pointDiscount:Se(),grandTotal:C(),paid:D==="cash"?Y:D==="tempo"?s:C(),change:D==="cash"?Oa():0,bank:r,paymentStatus:D==="tempo"?C()-s<=0?"lunas":"hutang":"lunas",subMethod:n?"paylater":D==="tempo"?"tempo":"",isPaylater:n,paylaterUsed:i,dp:s,tempoDp:s,tempoBalance:D==="tempo"?Math.max(0,C()-s):0,tempoDueDate:Date.now()+30*24*60*60*1e3,tempoPenaltyRate:1,tempoPenaltyStopped:!1},subtotal:re(),globalDiscount:ae(),pointDiscount:Se(),pointsRedeemed:(U||0)+(A&&parseFloat(A.pointsCost)||0),claimedReward:A?{id:A.id,name:A.name,pointsCost:parseFloat(A.pointsCost)||0}:null,discountType:E,discountVal:B,totalHpp:e,grossProfit:Math.max(0,C()-e),total:C(),isTempo:D==="tempo",pointsEarned:0,notes:""};if(b.isMember&&a){const V=(typeof window.calculateCartPoints=="function"?window.calculateCartPoints(y,m.store):{totalPoints:0}).totalPoints||0;ee.pointsEarned=V;const z=(U||0)+(A&&parseFloat(A.pointsCost)||0),M=V-z,$=Math.max(0,(parseFloat(b.points)||0)+M);ee.finalMemberPoints=$;try{const T=a.replace(/\D/g,""),F=String(b.memberId||T);if(await O.collection("freshmart").doc("cms_data").collection("customers").doc(F).set({points:Ee.firestore.FieldValue.increment(M),lastOrderAt:w},{merge:!0}),m.customers){const J=m.customers.find(te=>te&&(String(te.id)===F||String(te.phone).replace(/\D/g,"")===T));J&&(J.points=$)}b.points=$}catch(T){console.warn("[POS] Gagal update poin member:",T)}if(A&&A.id)try{await O.collection("freshmart").doc("cms_data").collection("rewards").doc(String(A.id)).update({stock:Ee.firestore.FieldValue.increment(-1)});const T=(m.rewards||[]).find(F=>String(F.id)===String(A.id));T&&T.stock!==void 0&&(T.stock=Math.max(0,(parseInt(T.stock)||0)-1))}catch(T){console.warn("[POS] Gagal update stok reward:",T)}}if(n&&b.phone)try{const k=b.phone.replace(/\D/g,""),V=k.startsWith("0")?"62"+k.slice(1):k;if(await O.collection("freshmart").doc("cms_data").collection("customers").doc(V).set({paylaterUsed:Ee.firestore.FieldValue.increment(i)},{merge:!0}),m.customers){const M=m.customers.find($=>$&&(String($.id)===V||String($.phone).replace(/\D/g,"")===k));M&&(M.paylaterUsed=Math.max(0,parseFloat(M.paylaterUsed)||0)+i)}b.paylaterUsed=Math.max(0,parseFloat(b.paylaterUsed)||0)+i}catch(k){console.warn("[POS] Gagal potong limit PayLater:",k)}if(await O.collection("freshmart_orders").doc(f).set(ee),Ma(ee),l){const k={};y.forEach(M=>{const $=M.id!=null?M.id.toString():null;if(!$)return;k[$]||(k[$]={main:0,variants:{}});const T=parseFloat(M.qty)||0;M.variantName?k[$].variants[M.variantName]=(k[$].variants[M.variantName]||0)+T:k[$].main+=T});const V=Object.keys(k),z=[];for(const M of V){const $=k[M],T=(m.products||[]).find(J=>String(J.id)===M);if(!T)continue;const F={};$.main>0&&(T.stock=Math.max(0,(parseFloat(T.stock)||0)-$.main),F.stock=T.stock,T.stock===0&&(T.isActive="false",F.isActive="false"),T.totalSold=(parseFloat(T.totalSold)||0)+$.main,F.totalSold=T.totalSold),Object.keys($.variants).length>0&&T.variants&&(Object.keys($.variants).forEach(J=>{const te=T.variants.findIndex(as=>as.name===J);te>-1&&(T.variants[te].stock=Math.max(0,(parseFloat(T.variants[te].stock)||0)-$.variants[J]),T.variants[te].stock===0&&(T.variants[te].isActive=!1),T.variants[te].totalSold=(parseFloat(T.variants[te].totalSold)||0)+$.variants[J])}),F.variants=T.variants);const $e=(m.products||[]).findIndex(J=>String(J.id)===M);$e>-1&&(m.products[$e]=T);try{await O.collection("freshmart").doc("cms_data").collection("products").doc(M).update(F),z.push(M)}catch(J){console.warn("[POS] Gagal update stok produk di Firestore:",M,J)}}if(z.length>0)try{await O.collection("freshmart").doc("cms_data").update({lastUpdate:Ee.firestore.FieldValue.increment(1),updateType:"stock_change",updatedProductIds:z})}catch{}}qt(),_e(!0);const Me={...ee};y=[],Z=0,B=0,E="rp",U=0,A=null,N(),Q(),Os(Me)}catch(f){console.error("[POS] Error:",f),g("Gagal menyimpan transaksi. Coba lagi.","error"),d&&(d.disabled=!1,d.innerHTML='<i class="fa-solid fa-check-circle mr-2"></i>Selesaikan Transaksi')}},Os=e=>{const t=e.payment.method==="cash"?`<p class="text-sm text-slate-500">Kembalian: <span class="font-black text-emerald-600">${h(e.payment.change)}</span></p>`:e.payment.method==="tempo"?'<p class="text-sm text-amber-600 font-semibold">⚠️ Dicatat sebagai Piutang Tempo</p>':`<p class="text-sm text-slate-500">Metode: ${e.payment.method.toUpperCase()}</p>`,a=JSON.stringify(e).replace(/"/g,"&quot;"),s=!!document.getElementById("pos-admin-container")||typeof window.cTab=="function"&&window.cTab()==="pos";document.body.insertAdjacentHTML("beforeend",`
    <div id="pos-success-modal" class="fixed inset-0 z-[9999] flex items-center justify-center p-4" style="background:rgba(15,23,42,0.65);backdrop-filter:blur(4px)">
      <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-sm border border-slate-200/80 dark:border-slate-800">
        <div class="p-6 text-center">
          <div class="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-4"><i class="fa-solid fa-circle-check text-emerald-500 text-3xl"></i></div>
          <h2 class="font-black text-lg text-slate-900 dark:text-white mb-1">Transaksi Berhasil!</h2>
          <p class="text-xs text-slate-400 mb-2">#${u(e.txId)}</p>
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
            <span>Klaim Hadiah: ${u(e.claimedReward.name)}</span>
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
    </div>`),(typeof xe=="function"?xe():{}).autoPrintOrder&&typeof window.printPOSReceiptDirect=="function"&&setTimeout(()=>{window.printPOSReceiptDirect(e)},300)},za=e=>{document.getElementById("pos-success-modal")?.remove(),(typeof xe=="function"?xe():{}).directPrint!==!1&&typeof window.printPOSReceiptDirect=="function"?window.printPOSReceiptDirect(e):gt(e)},gt=e=>{window._lastPOSTx=e;const t=typeof xe=="function"?xe():{paperSize:"58mm"},a=typeof window.getPaperCols=="function"?window.getPaperCols(t.paperSize):t.paperSize==="80mm"?48:32,s=a>=40,r=t.headerText||m.store?.name||"TOKO PUTRI",n=m.store?.wa||"",o=m.store?.address||"",i=t.footerText||"Terima Kasih Atas Kunjungan Anda!",d=typeof window.formatCompactDate=="function"?window.formatCompactDate(e.dateMs||Date.now(),s):new Date(e.dateMs||Date.now()).toLocaleString("id-ID"),l=(e.items||[]).map(x=>{const P=x.variantName?` (${u(x.variantName)}${x.colorCode?" "+u(x.colorCode):""})`:"",S=x.effectivePrice||x.price||0,w=x.subtotal!==void 0?x.subtotal:parseFloat(x.qty||1)*S;return`
        <tr>
            <td colspan="2" style="padding-top:4px;font-weight:bold;word-break:break-word;">${u(x.name)}${P}${x.poTime?" [PO]":""}</td>
        </tr>
        <tr>
            <td style="padding-bottom:3px;color:#475569;font-size:10.5px;">&nbsp;&nbsp;${I(x.qty)} ${u(x.unit||"pcs")} x ${Math.round(S).toLocaleString("id-ID")}</td>
            <td style="text-align:right;padding-bottom:3px;white-space:nowrap;font-weight:bold;">${Math.round(w).toLocaleString("id-ID")}</td>
        </tr>
        ${x.discount&&x.discount>0?`<tr><td style="padding-bottom:2px;color:#e11d48;font-size:10px;">&nbsp;&nbsp;(Diskon)</td><td style="text-align:right;color:#e11d48;font-size:10px;">-${Math.round(x.discount).toLocaleString("id-ID")}</td></tr>`:""}
        ${x.poTime?`<tr><td colspan="2" style="font-size:9.5px;font-style:italic;color:#64748b;">&nbsp;&nbsp;* Estimasi PO: ${u(x.poTime)}</td></tr>`:""}
        `}).join(""),f=e.discountType==="percent"&&e.discountVal?`Diskon (${e.discountVal}%)`:"Diskon Toko";document.getElementById("pos-receipt-fallback-modal")?.remove(),document.body.insertAdjacentHTML("beforeend",`
    <div id="pos-receipt-fallback-modal" class="fixed inset-0 z-[10000] flex items-center justify-center p-3 sm:p-4" style="background:rgba(15,23,42,0.7);backdrop-filter:blur(4px)">
        <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full ${s?"max-w-[420px]":"max-w-[340px]"} border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[90vh]">
            <div class="p-3.5 sm:p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50">
                <span class="font-bold text-xs text-slate-700 dark:text-slate-200 flex items-center gap-1.5"><i class="fa-solid fa-receipt text-amber-500"></i>Preview Struk Thermal (${a} Kolom)</span>
                <button onclick="document.getElementById('pos-receipt-fallback-modal')?.remove()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-700 dark:hover:text-slate-200 transition-colors flex items-center justify-center cursor-pointer"><i class="fa-solid fa-xmark text-sm"></i></button>
            </div>
            <div id="pos-receipt-paper-box" class="p-4 overflow-y-auto flex-1 font-mono text-[11px] bg-slate-50/60 dark:bg-slate-950 text-slate-800 dark:text-slate-200 space-y-1.5 select-text custom-scrollbar">
                <div class="text-center font-bold text-sm uppercase">${u(r)}</div>
                ${o?`<div class="text-center text-[10px] text-slate-500">${u(o)}</div>`:""}
                ${n?`<div class="text-center text-[10px] text-slate-500">WA: ${u(n)}</div>`:""}
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <div class="flex justify-between"><span>No : <b>#${u(e.txId)}</b></span><span>${u(d)}</span></div>
                <div class="flex justify-between"><span>Kasir: ${u(e.cashierName||"Kasir")}</span><span>Plg: ${u(e.customer?.name||"Umum")}</span></div>
                ${e.customer?.phone?`<div>HP  : ${u(e.customer.phone)}</div>`:""}
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <table class="w-full text-[11px] border-collapse">
                    ${l}
                </table>
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <div class="flex justify-between"><span>Subtotal</span><span>${h(e.subtotal)}</span></div>
                ${(e.globalDiscount||0)>0?`<div class="flex justify-between text-rose-500 font-bold"><span>${f}</span><span>- ${h(e.globalDiscount)}</span></div>`:""}
                ${(e.pointDiscount||0)>0?`<div class="flex justify-between text-emerald-600 font-bold"><span>Diskon Poin (${e.pointsRedeemed||0} Pts)</span><span>- ${h(e.pointDiscount)}</span></div>`:""}
                ${e.claimedReward?`<div class="flex justify-between text-purple-600 font-bold"><span>[Klaim Hadiah]</span><span class="truncate max-w-[150px]">${u(e.claimedReward.name)}</span></div>`:""}
                ${e.payment?.ppnAmount&&e.payment.ppnAmount>0?`<div class="flex justify-between"><span>${e.payment.ppnType==="inclusive"?"Inc. PPN":"PPN"} (${e.payment.ppnRate||11}%)</span><span>${h(e.payment.ppnAmount)}</span></div>`:""}
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
                <div class="flex justify-between"><span>Metode Bayar</span><span>${e.payment.isPaylater||e.isPaylater?"PUTRI PAYLATER":u(e.payment.method.toUpperCase())}</span></div>
                ${e.pointsEarned>0||(e.pointsRedeemed||0)>0?`
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                ${e.pointsEarned>0?`<div class="flex justify-between text-amber-600 dark:text-amber-400 font-bold"><span>Poin Didapat:</span><span>+${e.pointsEarned} Poin</span></div>`:""}
                ${(e.pointsRedeemed||0)>0?`<div class="flex justify-between text-rose-500 font-bold"><span>Poin Ditukar:</span><span>-${e.pointsRedeemed} Poin</span></div>`:""}
                ${e.finalMemberPoints!==void 0?`<div class="flex justify-between text-slate-600 dark:text-slate-300 font-bold"><span>Sisa Saldo Poin:</span><span>${e.finalMemberPoints} Poin</span></div>`:""}`:""}
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <div class="text-center text-[10px] text-slate-400 my-1">${u(i)}</div>
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
    </div>`)},Jt=()=>{if(window._lastPOSTx&&typeof window.printPOSReceiptDirect=="function"){window.printPOSReceiptDirect(window._lastPOSTx);return}const e=c("pos-receipt-paper-box");e&&(typeof window.renderThermalDOMAndPrint=="function"?window.renderThermalDOMAndPrint(e.innerHTML):window.print())},Ja=({isStorefront:e})=>{const a=(typeof window.getCashierSession=="function"?window.getCashierSession():null)?.name||(e?"Kasir":"Admin Seller"),s=u(m.store?.name||"Toko Putri");return`
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
                            <span class="text-[10px] text-white/90 font-medium truncate">${u(a)}</span>
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
                            <button id="pos-view-btn-grid" onclick="window.setPOSViewMode('grid')" class="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer ${de==="grid"?"text-white shadow-xs":"text-slate-500 hover:text-slate-800 dark:text-slate-400"}" style="${de==="grid"?"background:linear-gradient(135deg, var(--color-primary-light,#e1b858) 0%, var(--color-primary,#c59b27) 60%, var(--color-primary-dark,#a87f1b) 100%)":""}" title="Tampilan Grid Foto">
                                <i class="fa-solid fa-grip"></i>
                            </button>
                            <button id="pos-view-btn-list" onclick="window.setPOSViewMode('list')" class="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer ${de==="list"?"text-white shadow-xs":"text-slate-500 hover:text-slate-800 dark:text-slate-400"}" style="${de==="list"?"background:linear-gradient(135deg, var(--color-primary-light,#e1b858) 0%, var(--color-primary,#c59b27) 60%, var(--color-primary-dark,#a87f1b) 100%)":""}" title="Tampilan List Baris Kompak">
                                <i class="fa-solid fa-list-ul"></i>
                            </button>
                        </div>
                    </div>
                    <!-- Kategori Chips -->
                    <div id="pos-cat-filter" class="flex gap-1.5 overflow-x-auto hide-scrollbar pb-0.5"></div>
                </div>

                <!-- Product Catalog Container -->
                <div id="pos-catalog-grid" class="${de==="list"?"pos-catalog-list-mode":"pos-catalog-grid-mode"}"></div>
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
            <div class="bg-slate-900/95 dark:bg-slate-950/95 text-white p-3 rounded-2xl shadow-2xl backdrop-blur-md flex items-center justify-between border border-slate-700/80 cursor-pointer active:scale-[0.99] transition-all" onclick="window.openPOSCartDrawer()">
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
    `},Ya=()=>{try{pe="",ke="",y=[],Z=0;const e=c("view-pos-cashier");if(!e)return;const t=c("admin-content"),a=c("view-admin");t&&a?.classList.contains("admin-pos-mode")&&(t.innerHTML="",a.classList.remove("admin-pos-mode")),e.innerHTML=Ja({isStorefront:!0}),Q(),N(),Te(),ze(),ja(),La(),we(),Xa(),typeof be=="function"?be().then(s=>{(!s||s.status!=="open")&&W()}).catch(()=>{he()||W()}):setTimeout(()=>{he()||W()},350)}catch(e){console.error("Gagal render POS Storefront:",e)}},Za=()=>{try{pe="",ke="";const e=c("view-admin");e&&e.classList.add("admin-pos-mode");const t=c("view-pos-cashier");if(t&&(t.innerHTML=""),!c("admin-content"))return;rs("admin-content",`
            <div class="h-full w-full flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-md bg-white dark:bg-slate-900 min-h-0">
                ${Ja({isStorefront:!1})}
            </div>
        `),Q(),N(),Te(),ze(),ja(),La(),we(),Xa(),typeof be=="function"?be().then(s=>{(!s||s.status!=="open")&&W()}).catch(()=>{he()||W()}):setTimeout(()=>{he()||W()},350)}catch(e){console.error("Gagal render POS Admin:",e);const t=c("admin-content");t&&(t.innerHTML=`
                <div class="h-full w-full flex flex-col items-center justify-center p-6 text-center">
                    <i class="fa-solid fa-triangle-exclamation text-4xl text-amber-500 mb-3"></i>
                    <h3 class="text-base font-bold text-slate-800 dark:text-white">Gagal Membuka Terminal POS</h3>
                    <p class="text-xs text-slate-500 mt-1 max-w-sm">Terjadi kendala saat memuat terminal. Silakan coba muat ulang.</p>
                    <button onclick="window.renderPOS()" class="mt-4 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-xs font-bold transition-all shadow-md">
                        <i class="fa-solid fa-arrows-rotate mr-1.5"></i>Muat Ulang Terminal
                    </button>
                </div>
            `)}},Xa=()=>{window.setPOSViewMode=Dt,window.posAddToCart=ut,window.posAddToCartQty=Da,window.addToCartPOSWithVariant=Ia,window.posUpdateQty=Ra,window.posSetQty=Fa,window.posFormatQty=I,window.posFQty=Ve,window.posSetItemDisc=Na,window.posRemoveItem=bt,window.posClearCart=Ba,window.openPayModal=_a,window.closePayModal=qt,window.getPOSCart=()=>y,window.getCartTotalHpp=ne,window.setPosCustomerType=qa,window.setPosPayMethod=Ut,window.updatePosChange=Vt,window.posSetQuickCash=Gt,window.ensureCustomersLoaded=we,window.ensureBanksLoaded=et,window.lookupPosMember=at,window.debouncedLookupPosMember=zt,window.selectPosMember=Qt,window.resetPosMember=Wt,window.processPOSTx=Wa,window.setPosPointsRedeemed=Va,window.selectPosReward=Ga,window.deselectPosReward=Qa,window.posMemberPointsDiscount=Se,window.getMaxRedeemablePoints=pt,window.getPointValue=Je,window.printPOSReceipt=za,window.previewPOSReceiptThenPrint=gt,window.posSetGlobalDisc=e=>{Ge(e)},window.posSetDiscountType=Yt,window.posSetDiscountVal=Ge,window.posApplyQuickDiscount=Zt,window.openPOSCameraScanner=wt,window.closePOSCameraScanner=Pe,window.togglePOSScannerFacing=ea,window.togglePOSScannerTorch=Xt,window.togglePOSScannerMode=ta,window.posProcessManualBarcode=aa,window.posSearchScannedCode=sa,window.executePOSPrintDirect=Jt,window.getActiveShift=q,window.isShiftActive=he,window.syncActiveShiftFromCloud=be,window.openPOSOpenShiftModal=W,window.closePOSOpenShiftModal=Ie,window.openPOSShiftModal=X,window.openPOSShiftSummaryModal=X,window.closePOSShiftSummaryModal=ct,window.openPOSCloseShiftModal=Ot,window.closePOSCloseShiftModal=We,window.renderShiftHeaderBadge=ze,window.printShiftSettlementReceipt=Lt,window.executeShiftPrintDirect=Ht,window.posCatFilter=e=>{ke=e,Q()},window.posSearchFn=e=>{pe=typeof e=="string"?e:e?.value||"",document.querySelectorAll("#pos-search-input").forEach(t=>{t.value!==pe&&(t.value=pe)}),Q()},window.posRenderCatalog=Q,window.posRenderCart=N,window.refreshPOSCatalog=()=>{try{Q()}catch(e){console.warn("refreshPOSCatalog error:",e)}},window.openPOSCartDrawer=Kt,window.closePOSCartDrawer=_e,window.playCashierBeep=ie,window.openPOSHistory=()=>{typeof window.openAdminTab=="function"?window.openAdminTab("orders"):typeof window.showToast=="function"&&window.showToast("Semua transaksi kasir terpusat di menu Pesanan CMS Admin")},window.destroyBarcodeListener=ft,window.playCashierChime=Ye,window.posHoldCurrentCart=xt,window.closePOSHoldPrompt=ht,window.posConfirmHoldCart=It,window.openPOSHeldModal=Ze,window.closePOSHeldModal=Xe,window.posRecallHeldCart=Rt,window.posHoldCurrentAndRecall=Nt,window.posOverwriteAndRecall=Bt,window.posDeleteHeldCart=_t,window.posExecuteDeleteHeld=Et,window.renderHeldBadges=Te},Yt=e=>{E=e==="percent"?"percent":"rp",Z=ae(),N()},Ge=e=>{const t=Math.max(0,parseFloat(e)||0),a=ne(),s=re(),r=a>0?Math.max(0,s-a):s;if(E==="percent"){const n=Math.min(100,t),o=Math.round(s*n/100);if(a>0&&o>r){const i=s>0?Math.floor(r/s*100):0,d=ce()?` (Total HPP ${h(a)})`:"";g(`Diskon ${n}% ditolak karena melebihi batas modal toko${d}! Diskon maksimal: ${i}% (${h(r)})`,"warning"),B=i,Z=Math.round(s*i/100),N(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("heavy");return}B=n,Z=o}else{const n=t;if(a>0&&n>r){const o=ce()?` (Total HPP ${h(a)})`:"";g(`Diskon ditolak! Total transaksi tidak boleh di bawah harga modal toko${o}. Maksimal diskon: ${h(r)}`,"warning"),B=r,Z=r,N(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("heavy");return}B=n,Z=n}N()},Zt=(e,t)=>{t&&(E=t),Ge(e),ie()},wt=async()=>{if(c("pos-camera-scanner-modal"))return;typeof window.pushModalHistory=="function"&&window.pushModalHistory("posCameraScanner"),document.body.insertAdjacentHTML("beforeend",`
    <div id="pos-camera-scanner-modal" class="fixed inset-0 z-[10010] flex items-center justify-center p-3 sm:p-4" style="background:rgba(15,23,42,0.85);backdrop-filter:blur(8px)">
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
                <div id="pos-scanner-status-pill" class="absolute bottom-3 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/80 text-[10px] font-bold text-slate-300 flex items-center gap-1.5 shadow-md">
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
    </div>`),await es()},es=async()=>{const e=c("pos-camera-video");if(e)try{const t={video:{facingMode:{ideal:Pt},width:{ideal:1280},height:{ideal:720}},audio:!1},a=await navigator.mediaDevices.getUserMedia(t);ye=a,e.srcObject=a,await e.play();const s=a.getVideoTracks();if(s.length>0){me=s[0];const r=me.getCapabilities?me.getCapabilities():{},n=c("pos-scanner-torch-btn");n&&(r.torch?n.classList.remove("hidden"):n.classList.add("opacity-40"))}if(typeof window.BarcodeDetector<"u")try{st=new BarcodeDetector({formats:["ean_13","ean_8","upc_a","upc_e","code_128","code_39","code_93","qr_code","data_matrix"]})}catch{st=null}He&&clearInterval(He),He=setInterval(async()=>{if(!(!st||!e||e.readyState<2))try{const r=await st.detect(e);if(r&&r.length>0){const n=r[0].rawValue?.trim();n&&ts(n)}}catch{}},180)}catch(t){console.warn("[POS Scanner] Gagal akses kamera:",t);const a=c("pos-scanner-status-pill");a&&(a.innerHTML='<span class="text-rose-400 font-bold"><i class="fa-solid fa-triangle-exclamation mr-1"></i>Kamera tidak dapat diakses</span>'),g("Izin kamera ditolak atau kamera sedang digunakan aplikasi lain.","warning")}},ts=e=>{const t=Date.now();if(e===ia&&t-la<1800)return;ia=e,la=t;const a=e.toLowerCase(),s=(m.products||[]).find(l=>l&&l.isActive!=="false"&&l.isActive!==!1&&(l.barcode&&l.barcode.toLowerCase()===a||l.sku&&l.sku.toLowerCase()===a||l.id&&String(l.id).toLowerCase()===a)),r=c("pos-scanner-reticle"),n=c("pos-scanner-status-pill"),o=c("pos-last-scanned-banner"),i=c("pos-last-scanned-text"),d=c("pos-last-scanned-price");if(s){if(r&&(r.classList.add("border-emerald-300","scale-105","bg-emerald-500/20"),setTimeout(()=>{r.classList.remove("border-emerald-300","scale-105","bg-emerald-500/20")},300)),ie(),s.variants&&s.variants.length>0){n&&(n.innerHTML='<span class="text-amber-300 font-bold">Buka pilihan varian...</span>'),Pe(),Aa().then(()=>{typeof window.openPOSVariantSheet=="function"&&window.openPOSVariantSheet(s.id)});return}ut(s.id)?(o&&i&&d&&(i.textContent=s.name,d.textContent=h(parseFloat(s.price)||0),o.classList.remove("hidden")),n&&(n.innerHTML=`<span class="text-emerald-300 font-black"><i class="fa-solid fa-check mr-1"></i>${u(s.name)} (+1)</span>`,setTimeout(()=>{n&&(n.innerHTML='<span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span><span>Menunggu barcode...</span>')},1500)),ot||(Pe(),g(`Ditambahkan: ${s.name}`,"success"))):n&&(n.innerHTML=`<span class="text-rose-400 font-bold"><i class="fa-solid fa-ban mr-1"></i>Stok "${u(s.name)}" Habis</span>`,setTimeout(()=>{n&&(n.innerHTML='<span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span><span>Menunggu barcode...</span>')},2e3))}else r&&(r.classList.add("border-rose-500","bg-rose-500/20"),setTimeout(()=>{r.classList.remove("border-rose-500","bg-rose-500/20")},400)),n&&(n.innerHTML=`<span class="text-rose-400 font-bold"><i class="fa-solid fa-xmark mr-1"></i>Barcode "${e}" tidak ditemukan</span>`)},Pe=(e=!1)=>{if(He&&(clearInterval(He),He=null),ye){try{ye.getTracks().forEach(a=>a.stop())}catch{}ye=null}me=null,Ke=!1;const t=c("pos-camera-scanner-modal");t&&(!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("posCameraScanner",!1,()=>t.remove()):t.remove())},Xt=async()=>{if(me)try{if(!(me.getCapabilities?me.getCapabilities():{}).torch){g("Lampu senter (torch) tidak didukung kamera ini.");return}Ke=!Ke,await me.applyConstraints({advanced:[{torch:Ke}]});const t=c("pos-scanner-torch-btn");t&&(Ke?(t.classList.add("bg-amber-500","text-white"),t.classList.remove("bg-slate-800","text-slate-300")):(t.classList.remove("bg-amber-500","text-white"),t.classList.add("bg-slate-800","text-slate-300")))}catch(e){console.warn("Gagal toggle torch:",e)}},ea=async()=>{Pt=Pt==="environment"?"user":"environment",ye&&(ye.getTracks().forEach(e=>e.stop()),ye=null),await es()},ta=()=>{ot=!ot;const e=c("pos-scanner-mode-btn");e&&(ot?(e.textContent="Terus-menerus",e.className="px-2.5 py-1 rounded-lg bg-emerald-950/60 border border-emerald-600/60 text-emerald-400 text-[10px] font-black tracking-wider uppercase transition-all cursor-pointer"):(e.textContent="Scan Sekali",e.className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-[10px] font-black tracking-wider uppercase transition-all cursor-pointer"))},aa=e=>{if(!e||!e.trim())return;ts(e.trim());const t=c("pos-manual-barcode-input");t&&(t.value="")},sa=e=>{Pe();const t=c("pos-search-input");t&&(t.value=e,pe=e,Q())};window.setPOSViewMode=Dt;window.renderPOSStorefront=Ya;window.renderPOS=Za;window.destroyBarcodeListener=ft;window.openPOSCartDrawer=Kt;window.closePOSCartDrawer=_e;window.posSetQuickCash=Gt;window.playCashierBeep=ie;window.playCashierChime=Ye;window.posHoldCurrentCart=xt;window.closePOSHoldPrompt=ht;window.posConfirmHoldCart=It;window.openPOSHeldModal=Ze;window.closePOSHeldModal=Xe;window.posRecallHeldCart=Rt;window.posHoldCurrentAndRecall=Nt;window.posOverwriteAndRecall=Bt;window.posDeleteHeldCart=_t;window.posExecuteDeleteHeld=Et;window.renderHeldBadges=Te;window.ensureCustomersLoaded=we;window.ensureBanksLoaded=et;window.lookupPosMember=at;window.debouncedLookupPosMember=zt;window.selectPosMember=Qt;window.resetPosMember=Wt;window.posSetDiscountType=Yt;window.posSetDiscountVal=Ge;window.posApplyQuickDiscount=Zt;window.openPOSCameraScanner=wt;window.closePOSCameraScanner=Pe;window.togglePOSScannerFacing=ea;window.togglePOSScannerTorch=Xt;window.togglePOSScannerMode=ta;window.posProcessManualBarcode=aa;window.posSearchScannedCode=sa;window.executePOSPrintDirect=Jt;window.previewPOSReceiptThenPrint=gt;window.getActiveShift=q;window.isShiftActive=he;window.syncActiveShiftFromCloud=be;window.openPOSOpenShiftModal=W;window.closePOSOpenShiftModal=Ie;window.openPOSShiftModal=X;window.openPOSShiftSummaryModal=X;window.closePOSShiftSummaryModal=ct;window.openPOSCloseShiftModal=Ot;window.closePOSCloseShiftModal=We;window.renderShiftHeaderBadge=ze;window.printShiftSettlementReceipt=Lt;window.executeShiftPrintDirect=Ht;window.getPOSCart=()=>y;const Ds=Object.freeze(Object.defineProperty({__proto__:null,addToCart:ut,addToCartWithVariant:Ia,applyMemberToPos:lt,clearCart:Ba,closePOSCameraScanner:Pe,closePOSCartDrawer:_e,closePOSHeldModal:Xe,closePOSHoldPrompt:ht,closePayModal:qt,debouncedLookupPosMember:zt,deselectPosReward:Qa,destroyBarcodeListener:ft,ensureBanksLoaded:et,ensureCustomersLoaded:we,executePOSPrintDirect:Jt,formatQty:I,getCartTotalHpp:ne,getMaxRedeemablePoints:pt,getPointValue:Je,getProductStockInfo:Be,lookupPosMember:at,openPOSCameraScanner:wt,openPOSCartDrawer:Kt,openPOSHeldModal:Ze,openPayModal:_a,playCashierBeep:ie,playCashierChime:Ye,posAddToCartQty:Da,posApplyQuickDiscount:Zt,posConfirmHoldCart:It,posDeleteHeldCart:_t,posDiscountAmount:ae,posExecuteDeleteHeld:Et,posHoldCurrentAndRecall:Nt,posHoldCurrentCart:xt,posMemberPointsDiscount:Se,posOverwriteAndRecall:Bt,posProcessManualBarcode:aa,posRecallHeldCart:Rt,posSearchScannedCode:sa,posSetDiscountType:Yt,posSetDiscountVal:Ge,posSetQuickCash:Gt,posTogglePaylater:Ka,previewPOSReceiptThenPrint:gt,printPOSReceipt:za,processPOSTx:Wa,removeFromCart:bt,renderCatalog:Q,renderHeldBadges:Te,renderPOS:Za,renderPOSStorefront:Ya,renderPosMemberResult:tt,resetPosMember:Wt,selectPosMember:Qt,selectPosReward:Ga,setItemDisc:Na,setPOSViewMode:Dt,setPosCustomerType:qa,setPosPayMethod:Ut,setPosPointsRedeemed:Va,setQty:Fa,stopClock:Ha,togglePOSScannerFacing:ea,togglePOSScannerMode:ta,togglePOSScannerTorch:Xt,updatePosChange:Vt,updateQty:Ra},Symbol.toStringTag,{value:"Module"}));export{is as P,K as R,yt as a,ps as b,ds as c,ce as d,Ds as e,Re as g,fa as h,Qe as i,js as p,Ss as r,ls as s};

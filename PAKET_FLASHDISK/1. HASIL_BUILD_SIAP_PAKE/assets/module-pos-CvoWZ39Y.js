const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/pos-variant-sheet-1s-vyoHk.js","assets/module-print-BcAZ-2or.js","assets/module-member-D-qhOaA7.js","assets/vendor-firebase-core-D2OF5R23.js","assets/vendor-firebase-db-BIUZcnOd.js"])))=>i.map(i=>d[i]);
import{a as m,c as aa,x as Jt,u as g,e as d,i as u,aw as me,v as Qa,y as bt,t as mt,b as za,_ as Wa,f as Ja}from"./module-print-BcAZ-2or.js";import{a as Z,A as Ya,d as A}from"./module-member-D-qhOaA7.js";import{f as Fe}from"./vendor-firebase-core-D2OF5R23.js";const sa=e=>{const t=m.products?.find(r=>r&&r.id!=null&&String(r.id)===String(e.id));let a=e.price||0;if(e.variantName&&t&&t.variants){const r=t.variants.find(n=>n.name===e.variantName);r&&r.price!=null&&(a=r.price)}if(e.variantName||!t||!t.wholesale||!t.wholesale.length)return a;const s=aa.filter(r=>r.id!=null&&String(r.id)===String(e.id)).reduce((r,n)=>r+(parseFloat(n.qty)||0),0);for(let r of t.wholesale.slice().sort((n,o)=>o.minQty-n.minQty))if(s>=parseFloat(r.minQty))return r.price;return a},He=e=>{const t=m.products?.find(a=>a&&a.id!=null&&String(a.id)===String(e.id));if(!t)return 0;if(e.variantName&&t.variants){const a=t.variants.find(s=>s.name===e.variantName);if(a&&a.hpp!=null)return parseFloat(a.hpp)||0}return parseFloat(t.hpp)||0},ra=e=>{if(!e)return 0;const t=m.products?.find(a=>a&&a.id!=null&&String(a.id)===String(e.id));if(!t)return parseFloat(e.poin)||0;if(e.variantName&&t.variants){const a=t.variants.find(s=>s.name===e.variantName);if(a&&a.poin!==void 0&&a.poin!==null&&a.poin!==""){const s=parseFloat(a.poin);if(!isNaN(s)&&s>0)return s}}return parseFloat(t.poin)||0},Xa=(e,t,a,s)=>{if(!e||!t||!a||!s)return 0;const r=6371,n=(a-e)*Math.PI/180,o=(s-t)*Math.PI/180,i=Math.sin(n/2)*Math.sin(n/2)+Math.cos(e*Math.PI/180)*Math.cos(a*Math.PI/180)*Math.sin(o/2)*Math.sin(o/2),l=2*Math.atan2(Math.sqrt(i),Math.sqrt(1-i));return r*l},oa=e=>{if(!e||typeof e!="string")return null;let t=e.trim();try{t=decodeURIComponent(t)}catch{}const a=t.match(/@(-?\d{1,3}\.\d+)[,\s]+(-?\d{1,3}\.\d+)/);if(a){const o=parseFloat(a[1]),i=parseFloat(a[2]);if(!isNaN(o)&&!isNaN(i)&&Math.abs(o)<=90&&Math.abs(i)<=180)return{lat:a[1],lng:a[2]}}const s=t.match(/[?&](?:q|ll|query|loc|center)=(-?\d{1,3}\.\d+)[,\s]+(-?\d{1,3}\.\d+)/i);if(s){const o=parseFloat(s[1]),i=parseFloat(s[2]);if(!isNaN(o)&&!isNaN(i)&&Math.abs(o)<=90&&Math.abs(i)<=180)return{lat:s[1],lng:s[2]}}const r=t.match(/(\d+)[°\s]+(\d+)['\s]+([\d.]+)"?\s*([NSns])[,\s]+(\d+)[°\s]+(\d+)['\s]+([\d.]+)"?\s*([EWew])/);if(r){let o=parseInt(r[1],10)+parseInt(r[2],10)/60+parseFloat(r[3])/3600;r[4].toUpperCase()==="S"&&(o=-o);let i=parseInt(r[5],10)+parseInt(r[6],10)/60+parseFloat(r[7])/3600;return r[8].toUpperCase()==="W"&&(i=-i),{lat:o.toFixed(8),lng:i.toFixed(8)}}const n=t.match(/(-?\d{1,3}\.\d{3,20})[,\s;\t]+(-?\d{1,3}\.\d{3,20})/);if(n){const o=parseFloat(n[1]),i=parseFloat(n[2]);if(!isNaN(o)&&!isNaN(i)&&Math.abs(o)<=90&&Math.abs(i)<=180)return{lat:n[1],lng:n[2]}}return null},Za=e=>{const t=(typeof e=="string"?e:e?.value||"").trim(),a=oa(t);return a?(Jt("set-lat",a.lat),Jt("set-lng",a.lng),g("Koordinat GPS berhasil disalin!"),a):(g("Format tidak dikenali! Tempel koordinat: Lat, Lng atau link Google Maps"),null)},es=(e=aa,t=m.store)=>{if(!e||!e.length)return{totalPoints:0,directPoints:0,spendPoints:0,nonPointSpend:0,threshold:1e5,pointsPerThreshold:1,isSpendPointsActive:!1,remainingToNextPoint:0,progressPercent:0};let a=0,s=0;e.forEach(f=>{const h=ra(f),S=parseFloat(f.qty)||0;if(h>0)a+=h*S;else{const M=sa(f);s+=M*S}});let r=0,n=0,o=0;const i=t?t.spendPointsEnabled===!0||t.spendPointsEnabled==="true":!1,l=Math.max(1,parseFloat(t?.spendPointsThreshold)||1e5),p=Math.max(1,parseFloat(t?.spendPointsPerThreshold)||1);if(i&&s>0){const f=Math.floor(s/l);r=f*p;const h=s%l;n=h>0?l-h:l,o=Math.min(100,Math.round((h||(f>0?l:0))/l*100))}return{totalPoints:a+r,directPoints:a,spendPoints:r,nonPointSpend:s,threshold:l,pointsPerThreshold:p,isSpendPointsActive:i,remainingToNextPoint:n,progressPercent:o}};window.getEffP=sa;window.getEffHpp=He;window.getEffPoin=ra;window.calculateCartPoints=es;window.getDist=Xa;window.parseGeoCoordinates=oa;window.autoParseCoords=Za;let Te=null;const pe=()=>{if(Te)return Te;try{const e=sessionStorage.getItem("pos_cashier_session");if(e)return Te=JSON.parse(e),Te}catch{}return null},ts=e=>{Te=e;try{e?sessionStorage.setItem("pos_cashier_session",JSON.stringify(e)):sessionStorage.removeItem("pos_cashier_session")}catch{}},na=()=>{Te=null;try{sessionStorage.removeItem("pos_cashier_session")}catch{}},ia=()=>!!pe(),la=async()=>{if(pe()||window.isAdm||window.__localIsAdm||m&&(m.hasCashier===!0||m.store?.posEnabled===!0))return!0;const e=localStorage.getItem("pos_has_cashier");if(e==="true")return!0;const t=!!(window.isAdm||window.__localIsAdm||Z.currentUser&&Z.currentUser.uid===Ya);try{if(t){const s=!(await A.collection("freshmart").doc("cms_data").collection("cashier_accounts").where("isActive","==",!0).limit(1).get()).empty;try{localStorage.setItem("pos_has_cashier",s?"true":"false"),A.collection("freshmart").doc("cms_data").set({hasCashier:s},{merge:!0}).catch(()=>{})}catch{}return s}else{const a=await A.collection("freshmart").doc("cms_data").get();if(a.exists){const s=a.data();if(s.hasCashier!==void 0){const r=!!s.hasCashier;try{localStorage.setItem("pos_has_cashier",r?"true":"false")}catch{}return r}}return e!=="false"}}catch{return e!=="false"}},at=async()=>{const e=d("pos-cashier-header-btn");if(!e)return;const t=!!pe(),a=!!(window.isAdm||window.__localIsAdm),s=localStorage.getItem("pos_has_cashier"),r=m?m.hasCashier??!0:!0;t||a||s==="true"||s===null&&r!==!1?e.classList.remove("hidden"):s==="false"&&e.classList.add("hidden");try{await la()||t||a?e.classList.remove("hidden"):e.classList.add("hidden")}catch{(t||a||s!=="false")&&e.classList.remove("hidden")}},da=async()=>{typeof window.triggerHaptic=="function"&&window.triggerHaptic("medium"),pe()?(typeof window.changeView=="function"&&window.changeView("view-pos-cashier"),typeof window.renderPOSStorefront=="function"&&window.renderPOSStorefront()):ht()},ht=()=>{const e=d("pos-login-modal");e&&(e.classList.remove("hidden"),setTimeout(()=>{e.classList.remove("opacity-0");const t=d("pos-login-modal-box");t&&t.classList.remove("translate-y-full","scale-95")},10),setTimeout(()=>{const t=d("pos-login-email");t&&t.focus()},300),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},gt=()=>{const e=d("pos-login-modal"),t=d("pos-login-modal-box");e&&e.classList.add("opacity-0"),t&&t.classList.add("translate-y-full"),setTimeout(()=>{e&&e.classList.add("hidden");const a=d("pos-login-email"),s=d("pos-login-password"),r=d("pos-login-error");a&&(a.value=""),s&&(s.value=""),r&&(r.textContent="",r.classList.add("hidden"))},300)},ca=async()=>{const e=d("pos-login-email"),t=d("pos-login-password"),a=d("pos-login-error"),s=d("pos-login-btn"),r=e?.value?.trim()||"",n=t?.value||"",o=l=>{if(a){a.classList.remove("hidden");const p=a.querySelector("span");p?p.textContent=l:a.textContent=l}typeof window.triggerHaptic=="function"&&window.triggerHaptic("error")};if((()=>{if(a){a.classList.add("hidden");const l=a.querySelector("span");l&&(l.textContent="")}})(),!r||!n){o("Email dan password wajib diisi.");return}s&&(s.disabled=!0,s.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i>Memverifikasi...');try{const p=(await Z.signInWithEmailAndPassword(r,n)).user?.uid;if(!p)throw new Error("UID tidak ditemukan");const h=await A.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(p).get();if(!h.exists){await Z.signOut(),o("Akun ini bukan akun kasir yang terdaftar di toko ini.");return}const S=h.data();if(S.role!=="cashier"){await Z.signOut(),o("Akun ini tidak memiliki akses kasir.");return}if(!S.isActive){await Z.signOut(),o("Akun kasir ini telah dinonaktifkan. Hubungi admin toko.");return}ts({uid:p,name:S.name||r,email:S.email||r,role:"cashier"});try{localStorage.setItem("pos_has_cashier","true")}catch{}at(),typeof window.syncActiveShiftFromCloud=="function"&&window.syncActiveShiftFromCloud().catch(()=>{}),gt(),g(`Selamat datang, ${S.name||"Kasir"}! 👋`,"success"),typeof window.changeView=="function"&&window.changeView("view-pos-cashier"),setTimeout(()=>{typeof window.renderPOSStorefront=="function"&&window.renderPOSStorefront()},100),typeof window.triggerHaptic=="function"&&window.triggerHaptic("success")}catch(l){console.error("[POS Auth] Login error:",l);const p=l.code||"";o(p==="auth/user-not-found"||p==="auth/wrong-password"||p==="auth/invalid-credential"?"Email atau password salah.":p==="auth/too-many-requests"?"Terlalu banyak percobaan. Coba lagi beberapa saat.":p==="auth/network-request-failed"?"Koneksi gagal. Periksa jaringan internet.":"Login gagal: "+(l.message||"Kesalahan tidak diketahui"))}finally{s&&(s.disabled=!1,s.innerHTML='<i class="fa-solid fa-right-to-bracket mr-2"></i>Masuk Kasir')}},wt=async(e=!1)=>{if(!e&&typeof window.getActiveShift=="function"){const a=window.getActiveShift();if(a&&a.status==="open"){document.getElementById("pos-logout-shift-modal")?.remove();const s=typeof window.fRp=="function"?window.fRp(a.startingCash):"Rp "+a.startingCash;document.body.insertAdjacentHTML("beforeend",`
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
            </div>`);return}}pe(),typeof window.detachPOSHistoryListener=="function"&&window.detachPOSHistoryListener(),typeof window.detachActiveShiftListener=="function"&&window.detachActiveShiftListener(),typeof window.clearActiveShift=="function"&&window.clearActiveShift();try{if(!window.isAdm&&!window.__localIsAdm)try{await Z.signOut()}catch{}}catch{}na();const t=d("view-pos-cashier");t&&(t.innerHTML=""),typeof window.destroyBarcodeListener=="function"&&window.destroyBarcodeListener(),typeof window.stopPOSClock=="function"&&window.stopPOSClock(),g("Sesi kasir berakhir. Sampai jumpa! 👋"),typeof window.changeView=="function"&&window.changeView("view-catalog"),typeof window.triggerHaptic=="function"&&window.triggerHaptic("medium"),typeof window.updatePOSHeaderIcon=="function"&&window.updatePOSHeaderIcon()},pa=async()=>{await at()};window.openPOSCashierMode=da;window.openPOSLoginModal=ht;window.closePOSLoginModal=gt;window.processCashierLogin=ca;window.cashierLogout=wt;window.exitPOSMode=wt;window.getCashierSession=pe;window.isCashierLoggedIn=ia;window.initPOSAuth=pa;window.updatePOSHeaderIcon=at;const vs=Object.freeze(Object.defineProperty({__proto__:null,cashierLogout:wt,checkCashierExists:la,clearCashierSession:na,closePOSLoginModal:gt,getCashierSession:pe,initPOSAuth:pa,isCashierLoggedIn:ia,openPOSCashierMode:da,openPOSLoginModal:ht,processCashierLogin:ca,updatePOSHeaderIcon:at},Symbol.toStringTag,{value:"Module"})),P=e=>"Rp "+Math.round(parseFloat(e)||0).toLocaleString("id-ID"),fa=e=>parseFloat((parseFloat(e)||0).toFixed(3)).toString(),Ze="pos_active_shift",ua="pos_last_closed_shift";let $e=null,Ye=null;const et=()=>{if(typeof Ye=="function"){try{Ye()}catch{}Ye=null}},je=()=>{const e=typeof pe=="function"?pe():null,t=!!(window.isAdm||window.__localIsAdm||window.__currentAdminUid),a=Z?.currentUser?.uid,s=e?.uid||(t?window.__currentAdminUid||a||"admin":a||"cashier-anon"),r=e?.name||(t?"Admin Seller":"Kasir Toko"),n=e?.email||t&&Z?.currentUser?.email||"";return{uid:s,name:r,email:n,isAdm:t}},Oe=(e,t=je())=>{if(!e)return!1;const a=e.cashierUid;return!!(a&&t.uid&&a===t.uid||t.isAdm&&(a==="admin"||a==="ADMIN_UID"||a===window.__currentAdminUid||Z?.currentUser&&a===Z.currentUser.uid))},K=()=>{if($e)return $e;try{const e=localStorage.getItem(Ze);if(e)return $e=JSON.parse(e),$e}catch(e){console.warn("[POS Shift] Gagal membaca active shift:",e)}return null},fe=e=>{$e=e;try{e?localStorage.setItem(Ze,JSON.stringify(e)):localStorage.removeItem(Ze)}catch{}},Be=()=>{$e=null;try{localStorage.removeItem(Ze)}catch{}},as=()=>{try{const e=localStorage.getItem(ua);if(e)return JSON.parse(e)}catch{}return null},kt=e=>{try{localStorage.setItem(ua,JSON.stringify(e))}catch{}},xe=()=>{const e=K();return!!(e&&e.status==="open")},st=async(e=null)=>{const t=je();try{const a=await A.collection("freshmart").doc("cms_data").collection("pos_shifts").where("status","==","open").get();if(!a.empty){const s=[];if(a.forEach(r=>{const n={id:r.id,...r.data()};Oe(n,t)&&s.push(n)}),s.length>0)return s.sort((r,n)=>(n.startTime||0)-(r.startTime||0)),s[0]}}catch(a){console.warn("[POS Shift] Cek open shift cms_data:",a)}try{const a=await A.collection("pos_shifts").where("status","==","open").get();if(!a.empty){const s=[];if(a.forEach(r=>{const n={id:r.id,...r.data()};Oe(n,t)&&s.push(n)}),s.length>0)return s.sort((r,n)=>(n.startTime||0)-(r.startTime||0)),s[0]}}catch(a){console.warn("[POS Shift] Cek open shift root pos_shifts:",a)}return null},ke=e=>{if(e){et();try{Ye=A.collection("freshmart").doc("cms_data").collection("pos_shifts").doc(e).onSnapshot(a=>{if(!a.exists)return;const s={id:a.id,...a.data()};if(s.status==="closed"){et(),Be(),kt(s),rt(),Ee(),Le(),g("Shift kasir telah ditutup dari perangkat lain.","info"),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge();return}if(s.status==="open"){fe(s),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge();const r=d("pos-shift-summary-modal");r&&!r.classList.contains("opacity-0")&&Y()}},a=>{console.warn("[POS Shift] Snapshot listener cms_data error:",a)})}catch(t){console.warn("[POS Shift] Gagal attach snapshot listener:",t)}}},ue=async()=>{const e=je(),t=K();if(t&&t.status==="open"&&Oe(t,e))try{const a=await A.collection("freshmart").doc("cms_data").collection("pos_shifts").doc(t.id).get();if(a.exists){const s={id:a.id,...a.data()};if(s.status==="closed")Be(),kt(s),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge();else return fe(s),ke(s.id),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge(),s}}catch(a){return console.warn("[POS Shift] Gagal verifikasi local shift ke cloud:",a),ke(t.id),t}try{const a=await st(e.uid);if(a)return fe(a),ke(a.id),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge(),a;t&&!Oe(t,e)&&(Be(),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge())}catch(a){console.warn("[POS Shift] Gagal cari shift open di cloud:",a)}return K()},ba=(e="open")=>{try{if(typeof window<"u"&&typeof window.checkUserGesture=="function"&&!window.checkUserGesture())return;const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const a=new t,s=a.currentTime;e==="open"?([523.25,659.25,783.99,1046.5].forEach((n,o)=>{const i=a.createOscillator(),l=a.createGain(),p=s+o*.07;i.type="sine",i.frequency.setValueAtTime(n,p),l.gain.setValueAtTime(.09,p),l.gain.exponentialRampToValueAtTime(1e-4,p+.16),i.connect(l),l.connect(a.destination),i.start(p),i.stop(p+.16)}),setTimeout(()=>{a.close().catch(()=>{})},600)):([{f:[783.99,987.77],t:s,d:.14},{f:[1046.5,1318.51],t:s+.12,d:.35}].forEach(n=>{n.f.forEach(o=>{const i=a.createOscillator(),l=a.createGain();i.type="triangle",i.frequency.setValueAtTime(o,n.t),l.gain.setValueAtTime(.08,n.t),l.gain.exponentialRampToValueAtTime(1e-4,n.t+n.d),i.connect(l),l.connect(a.destination),i.start(n.t),i.stop(n.t+n.d)})}),setTimeout(()=>{a.close().catch(()=>{})},700))}catch{}},vt=(e,t=Date.now())=>{if(!e)return"-";const a=Math.max(0,t-e),s=Math.floor(a/6e4),r=Math.floor(s/60),n=s%60;return r>0?`${r} Jam ${n} Menit`:`${n} Menit`},ss=()=>{const e=new Date,t=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0"),r=Math.floor(100+Math.random()*900);return`SHF-${t}${a}${s}-${r}`},G=async()=>{const e=je(),t=K();if(t&&t.status==="open"&&Oe(t,e)){g(`Shift kasir #${t.shiftNo||t.id} sedang aktif. Menampilkan ringkasan shift.`,"info"),Y();return}try{const i=await st(e.uid);if(i){fe(i),ke(i.id),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge(),g(`Melanjutkan shift aktif (#${i.shiftNo||i.id}) dari perangkat lain! 👋`,"success"),Y();return}}catch(i){console.warn("[POS Shift] Cek cloud saat buka modal:",i)}const a=e.name,s=new Date().toLocaleString("id-ID",{dateStyle:"full",timeStyle:"short"});document.getElementById("pos-open-shift-modal")?.remove();const r=`
    <div id="pos-open-shift-modal" class="fixed inset-0 z-[10001] flex items-center justify-center p-3 sm:p-4 transition-all duration-300 opacity-0 pointer-events-none" style="background:rgba(15,23,42,0.7);backdrop-filter:blur(5px)">
        <div id="pos-open-shift-box" class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-md border border-slate-200/90 dark:border-slate-800 overflow-hidden transform translate-y-8 scale-95 transition-all duration-300 flex flex-col">
            <!-- Header Modal -->
            <div class="px-5 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/80 dark:bg-slate-800/40">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-white text-base shadow-sm shrink-0" style="background:var(--color-primary)">
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
                <button onclick="window.confirmStartPOSShift()" class="flex-[2] py-3 rounded-2xl text-white font-black text-xs uppercase tracking-wider shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer hover:opacity-95" style="background:var(--color-primary)">
                    <i class="fa-solid fa-check"></i>
                    <span>Buka Shift Sekarang</span>
                </button>
            </div>
        </div>
    </div>`;document.body.insertAdjacentHTML("beforeend",r);const n=d("pos-open-shift-modal"),o=d("pos-open-shift-box");!n||!o||(n.classList.remove("pointer-events-none"),requestAnimationFrame(()=>{n.classList.remove("opacity-0"),o.classList.remove("translate-y-8","scale-95")}),setTimeout(()=>{const i=d("pos-shift-start-cash-input");i&&(i.focus(),i.select())},250))},Le=()=>{const e=d("pos-open-shift-modal"),t=d("pos-open-shift-box");e&&(e.classList.add("opacity-0","pointer-events-none"),t&&t.classList.add("translate-y-8","scale-95"),setTimeout(()=>{e.remove()},280))},ma=()=>{const e=parseFloat(d("pos-shift-start-cash-input")?.value)||0;document.querySelectorAll(".pos-preset-chip").forEach(t=>{parseFloat(t.dataset.amount)===e?t.className="pos-preset-chip px-2.5 py-1 rounded-xl text-[10px] font-black border-2 border-[var(--color-primary)] text-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.1)] shadow-xs transition-all cursor-pointer":t.className="pos-preset-chip px-2.5 py-1 rounded-xl text-[10px] font-bold border border-slate-200 dark:border-slate-700 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-all cursor-pointer"})},rs=e=>{const t=d("pos-shift-start-cash-input");t&&(t.value=e,t.focus(),t.select()),ma()},os=async()=>{const e=d("pos-shift-start-cash-input"),t=d("pos-shift-start-notes-input"),a=parseFloat(e?.value)||0,s=t?.value?.trim()||"",r=je(),n=r.uid,o=r.name,i=r.email,l=document.querySelector('#pos-open-shift-box button[onclick*="confirmStartPOSShift"]');l&&(l.disabled=!0,l.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-1.5"></i><span>Memverifikasi Shift...</span>');try{const f=await st(n);if(f){Le(),fe(f),ke(f.id),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge(),g(`Akun kasir sudah memiliki shift aktif (#${f.shiftNo||f.id}). Melanjutkan shift berjalan.`,"warning"),Y();return}}catch(f){console.warn("[POS Shift] Pre-flight check error:",f)}const p={id:"SHF-"+Date.now(),shiftNo:ss(),cashierUid:n,cashierName:o,cashierEmail:i,startTime:Date.now(),startTimeISO:new Date().toISOString(),startingCash:a,startNotes:s,status:"open",txCount:0,itemCount:0,totalSales:0,cashSales:0,qrisSales:0,bankSales:0,tempoSales:0,discountTotal:0,pointsTotal:0,orders:[]};fe(p),ke(p.id);try{await Promise.all([A.collection("freshmart").doc("cms_data").collection("pos_shifts").doc(p.id).set(p),A.collection("pos_shifts").doc(p.id).set(p)])}catch{}Le(),ba("open"),g(`Shift kasir dibuka! Modal awal: ${P(a)} 🎉`,"success"),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge()},xa=e=>{try{const t=K();if(!t||t.status!=="open")return;const a=parseFloat(e.total)||0,s=e.payment?.method||"cash",r=parseFloat(e.payment?.tempoDp??e.payment?.dp??e.payment?.paid)||0,n=parseFloat(e.payment?.tempoBalance)||0,o=parseFloat(e.globalDiscount)||0,i=parseFloat(e.pointsEarned)||0,l=(e.items||[]).reduce((p,f)=>p+(parseFloat(f.qty)||0),0);t.txCount=(t.txCount||0)+1,t.itemCount=parseFloat(((t.itemCount||0)+l).toFixed(3)),t.totalSales=(t.totalSales||0)+a,t.discountTotal=(t.discountTotal||0)+o,t.pointsTotal=(t.pointsTotal||0)+i,s==="cash"?t.cashSales=(t.cashSales||0)+a:s==="qris"?t.qrisSales=(t.qrisSales||0)+a:s==="bank"?t.bankSales=(t.bankSales||0)+a:s==="tempo"&&(r>0&&(t.cashSales=(t.cashSales||0)+r),t.tempoSales=(t.tempoSales||0)+n),Array.isArray(t.orders)||(t.orders=[]),(e.txId||e.id)&&t.orders.push(e.txId||e.id),fe(t);try{const p={txCount:t.txCount,itemCount:t.itemCount,totalSales:t.totalSales,cashSales:t.cashSales,qrisSales:t.qrisSales,bankSales:t.bankSales,tempoSales:t.tempoSales,discountTotal:t.discountTotal,pointsTotal:t.pointsTotal,orders:t.orders,lastUpdatedISO:new Date().toISOString()};A.collection("freshmart").doc("cms_data").collection("pos_shifts").doc(t.id).update(p).catch(()=>{}),A.collection("pos_shifts").doc(t.id).update(p).catch(()=>{})}catch{}typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge()}catch(t){console.warn("[POS Shift] Gagal update transaksi ke shift:",t)}},ns=(e,t,a="")=>{try{const s=K();if(!s||s.status!=="open")return!1;const r=parseFloat(e)||0;if(r<=0)return!1;s.cashSales=(s.cashSales||0)+r,s.tempoInstallmentCash=(s.tempoInstallmentCash||0)+r,Array.isArray(s.tempoPayments)||(s.tempoPayments=[]),s.tempoPayments.push({orderId:t,amount:r,timestamp:Date.now(),note:a||`Cicilan Piutang #${t}`}),fe(s);try{const n={cashSales:s.cashSales,tempoInstallmentCash:s.tempoInstallmentCash,tempoPayments:s.tempoPayments,lastUpdatedISO:new Date().toISOString()};A.collection("freshmart").doc("cms_data").collection("pos_shifts").doc(s.id).update(n).catch(()=>{}),A.collection("pos_shifts").doc(s.id).update(n).catch(()=>{})}catch{}return typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge(),!0}catch(s){return console.warn("[POS Shift] Gagal rekam pembayaran cicilan ke shift:",s),!1}},Y=()=>{const e=K();if(!e){G();return}document.getElementById("pos-shift-summary-modal")?.remove();const t=(parseFloat(e.startingCash)||0)+(parseFloat(e.cashSales)||0),a=vt(e.startTime),s=new Date(e.startTime).toLocaleString("id-ID",{dateStyle:"medium",timeStyle:"short"}),r=`
    <div id="pos-shift-summary-modal" class="fixed inset-0 z-[10001] flex items-center justify-center p-3 sm:p-4 transition-all duration-300 opacity-0 pointer-events-none" style="background:rgba(15,23,42,0.7);backdrop-filter:blur(5px)">
        <div id="pos-shift-summary-box" class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-lg border border-slate-200/90 dark:border-slate-800 overflow-hidden transform translate-y-8 scale-95 transition-all duration-300 flex flex-col max-h-[92vh]">
            <!-- Header Modal -->
            <div class="px-5 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/80 dark:bg-slate-800/40">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-white text-base shadow-sm shrink-0" style="background:var(--color-primary)">
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
                        <span class="text-[10px] text-slate-500 mt-0.5 block">${e.txCount||0} Struk / ${fa(e.itemCount||0)} Item</span>
                    </div>
                </div>

                <!-- Kartu Utama: Kas di Laci Saat Ini (Expected Cash) -->
                <div class="p-4 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent border-2 border-emerald-500/30 flex items-center justify-between">
                    <div>
                        <span class="text-[11px] font-bold text-emerald-700 dark:text-emerald-300 uppercase tracking-wider block">Uang Kas di Laci Seharusnya</span>
                        <span class="text-[10px] text-slate-500 dark:text-slate-400">Modal Awal (${P(e.startingCash)}) + Penjualan Tunai (${P(e.cashSales||0)})</span>
                    </div>
                    <div class="text-right">
                        <span class="text-xl font-black text-emerald-600 dark:text-emerald-400 block">${P(t)}</span>
                    </div>
                </div>

                <!-- Rincian Omset Penjualan -->
                <div class="space-y-2">
                    <div class="flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-200 border-b border-slate-100 dark:border-slate-800 pb-1.5">
                        <span class="flex items-center gap-1.5"><i class="fa-solid fa-receipt text-slate-400"></i>Rincian Metode Pembayaran</span>
                        <span class="text-slate-500 text-[11px]">Total Omset: <b style="color:var(--color-primary)">${P(e.totalSales||0)}</b></span>
                    </div>

                    <div class="space-y-1.5 text-xs">
                        <div class="flex justify-between items-center p-2 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                            <span class="text-slate-600 dark:text-slate-300 flex items-center gap-2">
                                <span class="w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center text-[10px]"><i class="fa-solid fa-money-bill-wave"></i></span>
                                <span>Tunai (Cash)</span>
                            </span>
                            <span class="font-bold text-slate-800 dark:text-white">${P(e.cashSales||0)}</span>
                        </div>
                        ${(e.tempoInstallmentCash||0)>0?`
                        <div class="flex justify-between items-center p-2 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40 text-[11px]">
                            <span class="text-amber-700 dark:text-amber-300 flex items-center gap-2">
                                <span class="w-6 h-6 rounded-lg bg-amber-100 dark:bg-amber-900/60 text-amber-600 flex items-center justify-center text-[10px]"><i class="fa-solid fa-hand-holding-dollar"></i></span>
                                <span>Dari Cicilan Piutang (Kas Masuk)</span>
                            </span>
                            <span class="font-bold text-amber-700 dark:text-amber-300">+${P(e.tempoInstallmentCash)}</span>
                        </div>`:""}
                        <div class="flex justify-between items-center p-2 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                            <span class="text-slate-600 dark:text-slate-300 flex items-center gap-2">
                                <span class="w-6 h-6 rounded-lg bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 flex items-center justify-center text-[10px]"><i class="fa-solid fa-qrcode"></i></span>
                                <span>QRIS Dinamis</span>
                            </span>
                            <span class="font-bold text-slate-800 dark:text-white">${P(e.qrisSales||0)}</span>
                        </div>
                        <div class="flex justify-between items-center p-2 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                            <span class="text-slate-600 dark:text-slate-300 flex items-center gap-2">
                                <span class="w-6 h-6 rounded-lg bg-blue-100 dark:bg-blue-950/60 text-blue-600 flex items-center justify-center text-[10px]"><i class="fa-solid fa-building-columns"></i></span>
                                <span>Transfer Bank</span>
                            </span>
                            <span class="font-bold text-slate-800 dark:text-white">${P(e.bankSales||0)}</span>
                        </div>
                        <div class="flex justify-between items-center p-2 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                            <span class="text-slate-600 dark:text-slate-300 flex items-center gap-2">
                                <span class="w-6 h-6 rounded-lg bg-amber-100 dark:bg-amber-950/60 text-amber-600 flex items-center justify-center text-[10px]"><i class="fa-solid fa-clock-rotate-left"></i></span>
                                <span>Tempo / Piutang (Sisa)</span>
                            </span>
                            <span class="font-bold text-slate-800 dark:text-white">${P(e.tempoSales||0)}</span>
                        </div>
                    </div>
                </div>

                <!-- Diskon & Poin -->
                <div class="grid grid-cols-2 gap-2 text-xs">
                    <div class="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/20 border border-rose-200/60 dark:border-rose-800/40">
                        <span class="text-[10px] text-rose-500 block font-bold">Total Diskon Diberikan</span>
                        <span class="font-black text-rose-600 dark:text-rose-400 text-xs">${P(e.discountTotal||0)}</span>
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
    </div>`;document.body.insertAdjacentHTML("beforeend",r);const n=d("pos-shift-summary-modal"),o=d("pos-shift-summary-box");!n||!o||(n.classList.remove("pointer-events-none"),requestAnimationFrame(()=>{n.classList.remove("opacity-0"),o.classList.remove("translate-y-8","scale-95")}))},rt=()=>{const e=d("pos-shift-summary-modal"),t=d("pos-shift-summary-box");e&&(e.classList.add("opacity-0","pointer-events-none"),t&&t.classList.add("translate-y-8","scale-95"),setTimeout(()=>{e.remove()},280))},yt=()=>{const e=K();if(!e){g("Tidak ada shift kasir yang aktif saat ini.","warning");return}document.getElementById("pos-close-shift-modal")?.remove();const t=(parseFloat(e.startingCash)||0)+(parseFloat(e.cashSales)||0),a=`
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
                            Modal Awal: <b>${P(e.startingCash)}</b> + Kas Masuk: <b>${P(e.cashSales||0)}</b>${(e.tempoInstallmentCash||0)>0?` <span class="text-amber-600 dark:text-amber-400 font-semibold">(incl. Cicilan +${P(e.tempoInstallmentCash)})</span>`:""}
                        </div>
                    </div>
                    <div class="text-right">
                        <span id="pos-close-expected-cash" class="text-lg font-black text-slate-900 dark:text-white">${P(t)}</span>
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
    </div>`;document.body.insertAdjacentHTML("beforeend",a);const s=d("pos-close-shift-modal"),r=d("pos-close-shift-box");!s||!r||(s.classList.remove("pointer-events-none"),requestAnimationFrame(()=>{s.classList.remove("opacity-0"),r.classList.remove("translate-y-8","scale-95")}),setTimeout(()=>{const n=d("pos-shift-actual-cash-input");n&&(n.focus(),n.select())},250))},Ee=()=>{const e=d("pos-close-shift-modal"),t=d("pos-close-shift-box");e&&(e.classList.add("opacity-0","pointer-events-none"),t&&t.classList.add("translate-y-8","scale-95"),setTimeout(()=>{e.remove()},280))},is=e=>{const t=d("pos-count-tab-quick"),a=d("pos-count-tab-denom"),s=d("pos-count-panel-quick"),r=d("pos-count-panel-denom");e==="quick"?(t&&(t.className="px-2.5 py-1 rounded-lg font-black bg-white dark:bg-slate-700 text-[var(--color-primary)] dark:text-white shadow-xs transition-all cursor-pointer border border-[rgba(var(--color-primary-rgb),0.2)] dark:border-slate-600"),a&&(a.className="px-2.5 py-1 rounded-lg font-bold text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-all cursor-pointer border border-transparent"),s&&s.classList.remove("hidden"),r&&r.classList.add("hidden")):(t&&(t.className="px-2.5 py-1 rounded-lg font-bold text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-all cursor-pointer border border-transparent"),a&&(a.className="px-2.5 py-1 rounded-lg font-black bg-white dark:bg-slate-700 text-[var(--color-primary)] dark:text-white shadow-xs transition-all cursor-pointer border border-[rgba(var(--color-primary-rgb),0.2)] dark:border-slate-600"),s&&s.classList.add("hidden"),r&&r.classList.remove("hidden"),ha())},ha=()=>{const e=(parseFloat(d("denom-100k")?.value)||0)*1e5,t=(parseFloat(d("denom-50k")?.value)||0)*5e4,a=(parseFloat(d("denom-20k")?.value)||0)*2e4,s=(parseFloat(d("denom-10k")?.value)||0)*1e4,r=(parseFloat(d("denom-5k")?.value)||0)*5e3,n=(parseFloat(d("denom-2k")?.value)||0)*2e3,o=(parseFloat(d("denom-1k")?.value)||0)*1e3,i=parseFloat(d("denom-coin")?.value)||0,l=e+t+a+s+r+n+o+i,p=d("pos-shift-actual-cash-input");p&&(p.value=l),ga()},ga=()=>{const e=K();if(!e)return;const t=(parseFloat(e.startingCash)||0)+(parseFloat(e.cashSales)||0),s=(parseFloat(d("pos-shift-actual-cash-input")?.value)||0)-t,r=d("pos-discrepancy-card"),n=d("pos-discrepancy-icon"),o=d("pos-discrepancy-status"),i=d("pos-discrepancy-desc"),l=d("pos-discrepancy-amount");!r||!n||!o||!i||!l||(s===0?(r.className="p-4 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between bg-emerald-50 dark:bg-emerald-950/20 border-emerald-500/40",n.className="w-10 h-10 rounded-2xl flex items-center justify-center text-white text-base shadow-sm shrink-0 bg-emerald-600",n.innerHTML='<i class="fa-solid fa-check"></i>',o.className="text-xs font-black uppercase tracking-wider text-emerald-800 dark:text-emerald-300 block",o.innerText="SEIMBANG (PAS)",i.className="text-[11px] text-emerald-700 dark:text-emerald-400 block",i.innerText="Uang fisik laci kasir cocok dengan transaksi sistem",l.className="text-base font-black text-emerald-600 dark:text-emerald-400",l.innerText="Rp 0"):s>0?(r.className="p-4 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between bg-amber-50 dark:bg-amber-950/20 border-amber-500/40",n.className="w-10 h-10 rounded-2xl flex items-center justify-center text-white text-base shadow-sm shrink-0 bg-amber-500",n.innerHTML='<i class="fa-solid fa-plus"></i>',o.className="text-xs font-black uppercase tracking-wider text-amber-800 dark:text-amber-300 block",o.innerText="LEBIH (SURPLUS)",i.className="text-[11px] text-amber-700 dark:text-amber-400 block",i.innerText="Terdapat kelebihan uang fisik di laci kasir",l.className="text-base font-black text-amber-600 dark:text-amber-400",l.innerText="+ "+P(s)):(r.className="p-4 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between bg-rose-50 dark:bg-rose-950/20 border-rose-500/40",n.className="w-10 h-10 rounded-2xl flex items-center justify-center text-white text-base shadow-sm shrink-0 bg-rose-600",n.innerHTML='<i class="fa-solid fa-minus"></i>',o.className="text-xs font-black uppercase tracking-wider text-rose-800 dark:text-rose-300 block",o.innerText="KURANG (DEFISIT)",i.className="text-[11px] text-rose-700 dark:text-rose-400 block",i.innerText="Terdapat kekurangan uang fisik di laci kasir",l.className="text-base font-black text-rose-600 dark:text-rose-400",l.innerText="- "+P(Math.abs(s))))},ls=async()=>{const e=K();if(!e)return;const t=(parseFloat(e.startingCash)||0)+(parseFloat(e.cashSales)||0),a=parseFloat(d("pos-shift-actual-cash-input")?.value)||0,s=a-t,r=d("pos-shift-close-notes")?.value?.trim()||"",n={d100k:parseFloat(d("denom-100k")?.value)||0,d50k:parseFloat(d("denom-50k")?.value)||0,d20k:parseFloat(d("denom-20k")?.value)||0,d10k:parseFloat(d("denom-10k")?.value)||0,d5k:parseFloat(d("denom-5k")?.value)||0,d2k:parseFloat(d("denom-2k")?.value)||0,d1k:parseFloat(d("denom-1k")?.value)||0,coin:parseFloat(d("denom-coin")?.value)||0},o=Date.now(),i=vt(e.startTime,o),l={...e,status:"closed",endTime:o,endTimeISO:new Date(o).toISOString(),duration:i,expectedCash:t,actualCash:a,difference:s,discrepancyStatus:s===0?"balanced":s>0?"surplus":"deficit",denominations:n,closingNotes:r};et();try{await Promise.all([A.collection("freshmart").doc("cms_data").collection("pos_shifts").doc(l.id).set(l,{merge:!0}),A.collection("pos_shifts").doc(l.id).set(l,{merge:!0})])}catch(p){console.warn("[POS Shift] Simpan Firestore:",p)}Be(),kt(l),Ee(),ba("close"),ds(l),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge()},ds=e=>{document.getElementById("pos-closed-success-modal")?.remove();const t=e.difference||0,a=t===0?'<span class="px-2.5 py-1 rounded-xl text-xs font-black bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">PAS (Rp 0)</span>':t>0?`<span class="px-2.5 py-1 rounded-xl text-xs font-black bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300">LEBIH (+${P(t)})</span>`:`<span class="px-2.5 py-1 rounded-xl text-xs font-black bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300">KURANG (-${P(Math.abs(t))})</span>`,s=`
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
                <div class="flex justify-between border-t border-slate-200/60 dark:border-slate-700/60 pt-1.5"><span>Total Omset:</span><span class="font-bold">${P(e.totalSales||0)}</span></div>
                <div class="flex justify-between"><span>Kas Fisik Laci:</span><span class="font-black text-slate-900 dark:text-white">${P(e.actualCash||0)}</span></div>
                <div class="flex justify-between items-center border-t border-slate-200/60 dark:border-slate-700/60 pt-1.5"><span>Status Selisih:</span><div>${a}</div></div>
            </div>

            <!-- Action Buttons -->
            <div class="space-y-2 pt-2">
                <button onclick="window.printShiftSettlementReceipt(window.getLastClosedShift(), false)" class="w-full py-3.5 rounded-2xl text-white font-black text-xs uppercase tracking-wider shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer hover:opacity-95" style="background:var(--color-primary)">
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
    </div>`;document.body.insertAdjacentHTML("beforeend",s)},St=(e,t=!1,a=!1)=>{if(!e){g("Data shift tidak ditemukan.","warning");return}window._lastShiftData={shift:e,isXReport:t};const s=typeof me=="function"?me():{paperSize:"58mm"};if(!a&&s.directPrint!==!1&&typeof window.printShiftSettlementDirect=="function"){window.printShiftSettlementDirect(e,t);return}const r=typeof window.getPaperCols=="function"?window.getPaperCols(s.paperSize):s.paperSize==="80mm"?48:32,n=r>=40,o=s.headerText||m.store?.name||"TOKO PUTRI",i=m.store?.address||"",l=m.store?.wa||"",p=s.footerText||"Laporan Kasir Resmi Toko Putri",f=n?t?"*** RINGKASAN SHIFT (X-REPORT) ***":"*** REKAP TUTUP SHIFT (Z-REPORT) ***":t?"** RINGKASAN SHIFT (X) **":"** REKAP TUTUP SHIFT (Z) **",h=typeof window.formatCompactDate=="function"?window.formatCompactDate(e.startTime,n):new Date(e.startTime).toLocaleString("id-ID"),S=typeof window.formatCompactDate=="function"?window.formatCompactDate(e.endTime||Date.now(),n):new Date(e.endTime||Date.now()).toLocaleString("id-ID"),M=e.duration||vt(e.startTime,e.endTime||Date.now()),k=(parseFloat(e.startingCash)||0)+(parseFloat(e.cashSales)||0),j=e.actualCash!==void 0?parseFloat(e.actualCash):k,B=j-k,c=B===0?"SEIMBANG (PAS)":B>0?`LEBIH (+${P(B)})`:`KURANG (-${P(Math.abs(B))})`;document.getElementById("pos-shift-receipt-modal")?.remove(),document.body.insertAdjacentHTML("beforeend",`
    <div id="pos-shift-receipt-modal" class="fixed inset-0 z-[10003] flex items-center justify-center p-3 sm:p-4" style="background:rgba(15,23,42,0.7);backdrop-filter:blur(4px)">
        <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full ${n?"max-w-[420px]":"max-w-[340px]"} border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[90vh]">
            <div class="p-3.5 sm:p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50">
                <span class="font-bold text-xs text-slate-700 dark:text-slate-200 flex items-center gap-1.5"><i class="fa-solid fa-receipt text-emerald-500"></i>Preview Slip Rekap Shift (${r} Kolom)</span>
                <button onclick="document.getElementById('pos-shift-receipt-modal')?.remove()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-700 dark:hover:text-slate-200 transition-colors flex items-center justify-center cursor-pointer"><i class="fa-solid fa-xmark text-sm"></i></button>
            </div>
            <div id="pos-shift-receipt-paper-box" class="p-4 overflow-y-auto flex-1 font-mono text-[11px] bg-slate-50/60 dark:bg-slate-950 text-slate-800 dark:text-slate-200 space-y-1.5 select-text custom-scrollbar">
                <div class="text-center font-bold text-sm uppercase">${u(o)}</div>
                ${i?`<div class="text-center text-[10px] text-slate-500">${u(i)}</div>`:""}
                ${l?`<div class="text-center text-[10px] text-slate-500">WA: ${u(l)}</div>`:""}
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <div class="text-center font-black text-xs uppercase">${u(f)}</div>
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <div class="flex justify-between"><span>No Shift: <b>#${u(e.shiftNo||e.id)}</b></span><span>${u(h)}</span></div>
                <div class="flex justify-between"><span>Kasir   : ${u(e.cashierName)}</span><span>Durasi: ${u(M)}</span></div>
                <div class="flex justify-between"><span>Selesai : ${u(S)}</span></div>
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <div class="font-bold">RINGKASAN PENJUALAN:</div>
                <div class="flex justify-between"><span>Total Struk</span><span>${e.txCount||0} Trx</span></div>
                <div class="flex justify-between"><span>Total Barang</span><span>${fa(e.itemCount||0)} Item</span></div>
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-1"></div>
                <div class="flex justify-between"><span>Tunai (Cash)</span><span>${P(e.cashSales||0)}</span></div>
                <div class="flex justify-between"><span>QRIS</span><span>${P(e.qrisSales||0)}</span></div>
                <div class="flex justify-between"><span>Transfer Bank</span><span>${P(e.bankSales||e.transferSales||0)}</span></div>
                <div class="flex justify-between"><span>Tempo (Piutang)</span><span>${P(e.tempoSales||0)}</span></div>
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-1"></div>
                <div class="flex justify-between font-black text-xs pt-0.5"><span>TOTAL OMSET</span><span style="color:var(--color-primary)">${P(e.totalSales||0)}</span></div>
                ${(e.discountTotal||0)>0?`<div class="flex justify-between text-rose-500"><span>Diskon Toko</span><span>-${P(e.discountTotal)}</span></div>`:""}
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <div class="font-bold">REKONSILIASI KAS LACI:</div>
                <div class="flex justify-between"><span>Modal Awal</span><span>${P(e.startingCash)}</span></div>
                <div class="flex justify-between"><span>Penjualan Tunai</span><span>${P((e.cashSales||0)-(e.tempoInstallmentCash||0))}</span></div>
                ${(e.tempoInstallmentCash||0)>0?`
                <div class="flex justify-between text-amber-600"><span>+ Cicilan Piutang</span><span>+${P(e.tempoInstallmentCash)}</span></div>`:""}
                <div class="flex justify-between font-bold"><span>Kas Sistem</span><span>${P(k)}</span></div>
                ${t?"":`
                <div class="flex justify-between font-bold"><span>Kas Fisik Dihitung</span><span>${P(j)}</span></div>
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-1"></div>
                <div class="flex justify-between font-black text-xs ${B===0?"text-emerald-600":B>0?"text-amber-600":"text-rose-600"}">
                    <span>SELISIH KAS</span>
                    <span>${c}</span>
                </div>`}
                ${e.closingNotes?`
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-1.5"></div>
                <div class="text-[10px]"><b>Catatan:</b> ${u(e.closingNotes)}</div>`:""}
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <div class="text-center text-[10px] text-slate-400 my-1">${u(p)}</div>
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
                <button onclick="window.executeShiftPrintDirect()" class="flex-1 py-3.5 rounded-2xl text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all active:scale-95 hover:opacity-95" style="background:var(--color-primary)">
                    <i class="fa-solid fa-bolt text-amber-300"></i><i class="fa-solid fa-print"></i> Cetak Sekarang
                </button>
            </div>
        </div>
    </div>`)},Pt=()=>{if(window._lastShiftData&&typeof window.printShiftSettlementDirect=="function"){window.printShiftSettlementDirect(window._lastShiftData.shift,window._lastShiftData.isXReport);return}const e=d("pos-shift-receipt-paper-box");e&&(typeof window.renderThermalDOMAndPrint=="function"?window.renderThermalDOMAndPrint(e.innerHTML):window.print())},Ke=()=>{const e=[d("pos-shift-btn-storefront"),d("pos-shift-btn-admin")],t=K();e.forEach(a=>{a&&(t&&t.status==="open"?a.id==="pos-shift-btn-storefront"?a.innerHTML=`
                <button onclick="window.openPOSShiftSummaryModal()" class="h-8 px-2 sm:px-2.5 rounded-xl bg-black/15 hover:bg-black/25 text-white border border-white/20 transition-all cursor-pointer shadow-xs active:scale-95 inline-flex items-center gap-1 sm:gap-1.5 whitespace-nowrap shrink-0" title="Klik untuk lihat ringkasan shift (X-Report)">
                    <i class="fa-solid fa-cash-register text-emerald-300 text-xs"></i>
                    <span class="hidden sm:inline text-xs font-medium">Shift: </span>
                    <b class="text-white text-xs whitespace-nowrap">${P(t.startingCash)}</b>
                </button>`:a.innerHTML=`
                <button onclick="window.openPOSShiftSummaryModal()" class="h-8 px-2.5 sm:px-3 rounded-xl text-xs font-bold bg-[rgba(var(--color-primary-rgb),0.1)] hover:bg-[rgba(var(--color-primary-rgb),0.18)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.25)] inline-flex items-center gap-1.5 transition-all cursor-pointer active:scale-95 whitespace-nowrap shrink-0 shadow-2xs" title="Klik untuk lihat ringkasan shift (X-Report)">
                    <i class="fa-solid fa-cash-register text-xs"></i>
                    <span class="hidden sm:inline font-medium">Shift: </span>
                    <b class="font-black whitespace-nowrap">${P(t.startingCash)}</b>
                </button>`:a.id==="pos-shift-btn-storefront"?a.innerHTML=`
                <button onclick="window.openPOSOpenShiftModal()" class="h-8 px-2.5 sm:px-3 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs inline-flex items-center gap-1.5 transition-all active:scale-95 shadow-xs cursor-pointer border border-white/25 backdrop-blur-xs whitespace-nowrap shrink-0" title="Buka shift kasir baru">
                    <span class="w-1.5 h-1.5 rounded-full bg-amber-300 animate-pulse"></span>
                    <i class="fa-solid fa-wallet text-amber-300 text-xs"></i>
                    <span class="text-xs font-black whitespace-nowrap">Buka Shift</span>
                </button>`:a.innerHTML=`
                <button onclick="window.openPOSOpenShiftModal()" class="h-8 px-2.5 sm:px-3 rounded-xl text-xs font-bold bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/40 dark:hover:bg-amber-900/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 inline-flex items-center gap-1.5 transition-all cursor-pointer active:scale-95 animate-pulse whitespace-nowrap shrink-0 shadow-2xs" title="Buka shift kasir baru">
                    <i class="fa-solid fa-wallet text-xs"></i>
                    <span class="whitespace-nowrap">Buka Shift</span>
                </button>`)})},cs=async e=>{const t=typeof e=="string"?d(e):e;t&&(t.innerHTML=`
    <div class="space-y-4">
        <div class="flex items-center justify-between gap-3 pt-1">
            <div class="min-w-0">
                <h3 class="text-sm sm:text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                    <span class="w-8 h-8 rounded-xl flex items-center justify-center text-xs shrink-0 shadow-2xs border border-[rgba(var(--color-primary-rgb),0.25)]" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary)">
                        <i class="fa-solid fa-file-invoice-dollar"></i>
                    </span>
                    <span class="truncate">Laporan Shift Kasir</span>
                </h3>
                <p class="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5 truncate">Rekap Z-Report buka-tutup kasir &amp; selisih laci</p>
            </div>
            <button onclick="window.loadAdminShiftReports()" class="h-9 px-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shrink-0 shadow-2xs active:scale-95" title="Segarkan Data Shift">
                <i class="fa-solid fa-arrows-rotate text-[11px]"></i>
                <span>Segarkan Data</span>
            </button>
        </div>

        <div id="admin-shift-list-target" class="space-y-3">
            <div class="text-center py-12 text-slate-400"><i class="fa-solid fa-spinner fa-spin text-2xl mb-2"></i><p class="text-xs">Memuat laporan shift kasir...</p></div>
        </div>
    </div>`,await Mt())},Mt=async()=>{const e=d("admin-shift-list-target");if(e)try{const t=await A.collection("freshmart").doc("cms_data").collection("pos_shifts").orderBy("startTime","desc").limit(50).get();if(t.empty){e.innerHTML=`
            <div class="text-center py-14 p-6 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-slate-400 dark:text-slate-500">
                <i class="fa-solid fa-clipboard-list text-3xl mb-2"></i>
                <p class="font-bold text-xs">Belum ada riwayat shift kasir tercatat</p>
                <p class="text-[11px] mt-0.5">Shift yang dibuka dan ditutup oleh kasir akan otomatis terarsip di sini.</p>
            </div>`;return}const a=t.docs.map(s=>{const r=s.data(),n=r.status==="closed",o=r.difference||0,i=n?o===0?'<span class="px-2.5 py-1 rounded-full text-[10px] font-black bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 whitespace-nowrap shrink-0">PAS</span>':o>0?`<span class="px-2.5 py-1 rounded-full text-[10px] font-black bg-amber-100 dark:bg-amber-950/70 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60 whitespace-nowrap shrink-0">+${P(o)}</span>`:`<span class="px-2.5 py-1 rounded-full text-[10px] font-black bg-rose-100 dark:bg-rose-950/70 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800/60 whitespace-nowrap shrink-0">-${P(Math.abs(o))}</span>`:'<span class="px-2.5 py-1 rounded-full text-[10px] font-black bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 whitespace-nowrap shrink-0 tracking-wide">SEDANG BERJALAN</span>',l=new Date(r.startTime).toLocaleString("id-ID",{dateStyle:"medium",timeStyle:"short"}),p=JSON.stringify(r).replace(/"/g,"&quot;");return`
            <div class="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-800/95 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:shadow-xs transition-all space-y-3">
                <div class="flex items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-700/60 pb-3">
                    <div class="flex items-center gap-2.5 min-w-0">
                        <div class="w-9 h-9 rounded-2xl flex items-center justify-center text-xs text-white shrink-0 shadow-2xs ${n?"bg-slate-700 dark:bg-slate-600":""}" style="${n?"":"background: var(--color-primary)"}">
                            <i class="fa-solid fa-cash-register"></i>
                        </div>
                        <div class="min-w-0">
                            <span class="font-mono font-black text-xs text-slate-900 dark:text-white whitespace-nowrap block truncate">#${u(r.shiftNo||r.id)}</span>
                            <span class="text-[10px] text-slate-400 dark:text-slate-500 whitespace-nowrap block truncate">${l}</span>
                        </div>
                    </div>
                    <div class="flex items-center gap-2 shrink-0">
                        ${i}
                        <button onclick="window.printShiftSettlementReceipt(${p}, ${!n})" class="w-8 h-8 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700/80 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-200 text-xs flex items-center justify-center transition-all cursor-pointer shrink-0 shadow-2xs active:scale-95" title="Preview & Cetak Slip">
                            <i class="fa-solid fa-print"></i>
                        </button>
                        <button onclick="window.deleteShiftRecord('${s.id}', '${u(r.shiftNo||r.id)}')" class="w-8 h-8 rounded-xl bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 dark:hover:bg-rose-900/60 text-rose-500 dark:text-rose-400 text-xs flex items-center justify-center transition-all cursor-pointer shrink-0 shadow-2xs active:scale-95 border border-rose-100 dark:border-rose-900/60" title="Hapus Data Shift">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                </div>

                <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                    <div class="p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/70">
                        <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500 block">Kasir</span>
                        <span class="font-bold text-slate-800 dark:text-slate-200 truncate block mt-0.5">${u(r.cashierName)}</span>
                    </div>
                    <div class="p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/70">
                        <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500 block">Modal Awal</span>
                        <span class="font-bold text-slate-800 dark:text-slate-200 block mt-0.5">${P(r.startingCash)}</span>
                    </div>
                    <div class="p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/70">
                        <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500 block">Total Omset</span>
                        <span class="font-black text-emerald-600 dark:text-emerald-400 block mt-0.5">${P(r.totalSales||0)}</span>
                    </div>
                    <div class="p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/70">
                        <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500 block">Kas Fisik Laci</span>
                        <span class="font-black text-slate-900 dark:text-white block mt-0.5">${P(r.actualCash!==void 0?r.actualCash:(r.startingCash||0)+(r.cashSales||0))}</span>
                    </div>
                </div>

                ${r.closingNotes?`<div class="text-[11px] text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/40 p-2.5 rounded-2xl border border-slate-100 dark:border-slate-800/70"><b>Catatan:</b> ${u(r.closingNotes)}</div>`:""}
            </div>`}).join("");e.innerHTML=a}catch(t){console.error("[POS Shift] Gagal memuat daftar shift admin:",t),e.innerHTML=`
        <div class="text-center py-10 text-rose-500 text-xs">
            <i class="fa-solid fa-triangle-exclamation text-2xl mb-1"></i>
            <p>Gagal memuat laporan shift: ${u(t.message)}</p>
        </div>`}},ps=(e,t)=>{Qa("Hapus Data Shift",`Hapus shift #${t}? Data akan dihapus permanen dari cloud dan tidak bisa dikembalikan.`,async()=>{try{await A.collection("freshmart").doc("cms_data").collection("pos_shifts").doc(e).delete(),g("Data shift berhasil dihapus.","success"),await Mt()}catch(a){console.error("[POS Shift] Gagal menghapus shift:",a),g("Gagal menghapus: "+a.message,"error")}},"Ya, Hapus")};window.getActiveShift=K;window.saveActiveShift=fe;window.clearActiveShift=Be;window.getLastClosedShift=as;window.isShiftActive=xe;window.getCurrentCashierIdentity=je;window.isShiftOwnedByCashier=Oe;window.findActiveShiftInCloud=st;window.syncActiveShiftFromCloud=ue;window.listenActiveShiftCloud=ke;window.detachActiveShiftListener=et;window.openPOSOpenShiftModal=G;window.closePOSOpenShiftModal=Le;window.posSetStartCashPreset=rs;window.posUpdateStartCashChips=ma;window.confirmStartPOSShift=os;window.recordTransactionToShift=xa;window.recordTempoPaymentToShift=ns;window.openPOSShiftModal=Y;window.openPOSShiftSummaryModal=Y;window.closePOSShiftSummaryModal=rt;window.openPOSCloseShiftModal=yt;window.closePOSCloseShiftModal=Ee;window.setPOSCountMode=is;window.calcPOSDenominations=ha;window.updatePOSShiftDiscrepancy=ga;window.confirmClosePOSShift=ls;window.printShiftSettlementReceipt=St;window.executeShiftPrintDirect=Pt;window.renderShiftHeaderBadge=Ke;window.renderAdminShiftReportView=cs;window.loadAdminShiftReports=Mt;window.deleteShiftRecord=ps;let Yt=!1;const wa=()=>Yt?Promise.resolve():Wa(()=>import("./pos-variant-sheet-1s-vyoHk.js"),__vite__mapDeps([0,1,2,3,4])).then(()=>{Yt=!0});let w=[],de="",we="",le="grid";try{const e=localStorage.getItem("pos_view_mode");(e==="list"||e==="grid")&&(le=e)}catch{}let b={name:"",phone:"",isMember:!1,memberId:null,isNewTempo:!1,paylaterActive:!1,paylaterLimit:0,paylaterUsed:0},U=0,C=null,D="cash",W=0,J=0,_="rp",N=0,ie="",Xt=null,Ce=null,ve=null,Je=null,Ae=null,Xe=!0,xt="environment",Re=!1,be=null,Zt="",ea=0;const Tt=e=>{le=e;try{localStorage.setItem("pos_view_mode",e)}catch{}document.querySelectorAll("#pos-view-btn-grid").forEach(t=>{e==="grid"?(t.style.background="var(--color-primary)",t.className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-white shadow-xs"):(t.style.removeProperty("background"),t.className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-slate-500 hover:text-slate-800 dark:text-slate-400")}),document.querySelectorAll("#pos-view-btn-list").forEach(t=>{e==="list"?(t.style.background="var(--color-primary)",t.className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-white shadow-xs"):(t.style.removeProperty("background"),t.className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-slate-500 hover:text-slate-800 dark:text-slate-400")}),V()},ce=e=>Math.max(0,parseInt(e)||0),Ne=e=>{if(e==null)return 0;typeof e=="string"&&(e=e.replace(",",".").trim());const t=parseFloat(e);return isNaN(t)?0:Math.max(0,parseFloat(t.toFixed(3)))},I=e=>{const t=parseFloat(e)||0;return parseFloat(t.toFixed(3)).toString()},x=e=>Ja(e),qe=()=>parseFloat(m.store?.pointValue)||1e3,ye=()=>Math.max(0,(parseFloat(U)||0)*qe()),ot=()=>{if(!b.isMember||!b.points)return 0;const e=Math.max(0,parseFloat(b.points)||0),t=C&&parseFloat(C.pointsCost)||0,a=Math.max(0,e-t),s=qe();if(s<=0)return 0;const r=Math.max(0,ae()-ee()),n=re(),o=Math.max(0,r-n),i=Math.floor(o/s);return Math.min(a,i)},ae=()=>w.reduce((e,t)=>e+t.subtotal,0),re=()=>w.reduce((e,t)=>{const a=t.hpp!=null?parseFloat(t.hpp):He(t)||0;return e+(parseFloat(a)||0)*(parseFloat(t.qty)||0)},0),ee=()=>{const e=ae();let t=0;if(_==="percent"){const s=Math.min(100,Math.max(0,parseFloat(N)||0));t=Math.round(e*s/100)}else t=Math.min(e,ce(N||J));const a=re();if(a>0){const s=Math.max(0,e-a);t>s&&(t=s)}return t},$=()=>{const e=ae(),t=ee(),a=ye();let s=Math.max(0,e-t-a);const r=re();return r>0&&s<r&&(s=r),s},ka=()=>W-$(),De=e=>{if(!e)return{isManaged:!1,totalStock:0,isOutOfStock:!0,isLowStock:!1,isInactive:!0,isPreorder:!1,poTime:""};if(!(e.isActive!=="false"&&e.isActive!==!1))return{isManaged:!0,totalStock:0,isOutOfStock:!0,isLowStock:!1,isInactive:!0,isPreorder:!1,poTime:""};const a=m?.store?.useStock===!0||m?.store?.useStock==="true",s=!!(e.poTime&&String(e.poTime).trim()),r=s?String(e.poTime).trim():"";if(!a)return{isManaged:!1,totalStock:999999,isOutOfStock:!1,isLowStock:!1,isInactive:!1,isPreorder:s,poTime:r};let n=0;return Array.isArray(e.variants)&&e.variants.length>0?n=e.variants.filter(o=>o&&o.isActive!==!1&&o.isActive!=="false").reduce((o,i)=>o+(i.stock!=null&&parseFloat(i.stock)||0),0):n=parseFloat(e.stock)||0,{isManaged:!0,totalStock:n,isOutOfStock:n<=0,isLowStock:n>0&&n<=5,isInactive:!1,isPreorder:s,poTime:r}},oe=()=>{try{if(typeof window<"u"&&typeof window.checkUserGesture=="function"&&!window.checkUserGesture())return;const e=window.AudioContext||window.webkitAudioContext;if(!e)return;const t=new e,a=t.createOscillator(),s=t.createGain();a.type="sine",a.frequency.setValueAtTime(1400,t.currentTime),s.gain.setValueAtTime(.08,t.currentTime),s.gain.exponentialRampToValueAtTime(1e-4,t.currentTime+.08),a.connect(s),s.connect(t.destination),a.start(),a.stop(t.currentTime+.08),setTimeout(()=>{t.close().catch(()=>{})},150)}catch{}},fs=(e,t)=>{if(!e||!e.wholesale||!e.wholesale.length)return null;const a=[...e.wholesale].sort((s,r)=>r.minQty-s.minQty);for(const s of a)if(t>=parseFloat(s.minQty))return parseFloat(s.price);return null},se=e=>{if(!e.isVariant){const a=(m.products||[]).find(r=>r&&String(r.id)===String(e.id)),s=a?fs(a,e.qty):null;s!==null?(e.basePrice=e.basePrice||e.price,e.price=s,e.isWholesale=!0):(e.basePrice&&(e.price=e.basePrice),e.isWholesale=!1)}e.hpp==null&&(e.hpp=He(e)||0);const t=parseFloat(e.hpp)||0;if(t>0){const a=Math.max(0,Math.round((e.price-t)*e.qty));ce(e.discount)>a&&(e.discount=a)}else e.discount=Math.min(ce(e.discount),e.price*e.qty);return e.subtotal=Math.max(0,e.price*e.qty-ce(e.discount)),e},us=()=>{const e=new Date,t=a=>String(a).padStart(2,"0");return`POS-${e.getFullYear()}${t(e.getMonth()+1)}${t(e.getDate())}-${Date.now().toString(36).toUpperCase()}`},va=()=>{Ce&&clearInterval(Ce);const e=()=>{const a=new Date().toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit",second:"2-digit"})+" WIB";document.querySelectorAll("#pos-live-clock").forEach(s=>{s.textContent=a})};e(),Ce=setInterval(e,1e3)},ya=()=>{Ce&&(clearInterval(Ce),Ce=null)};window.stopPOSClock=ya;const nt=()=>{window.__posBarcodeFn&&(document.removeEventListener("keydown",window.__posBarcodeFn),window.__posBarcodeFn=null)},Sa=()=>{nt(),window.__posBarcodeFn=e=>{if(!e||typeof e.key!="string")return;const t=window.curViewName||"";if(!(t==="view-pos-cashier"||t==="view-admin"&&window.cTab==="pos"))return;if(e.key==="F4"){e.preventDefault();const r=d("pos-search-input");r&&(r.focus(),r.select());return}if(e.key==="F6"||e.key==="F7"){e.preventDefault(),ct();return}if(e.key==="F8"){e.preventDefault(),Ve();return}if(e.key==="F9"){e.preventDefault(),d("pos-camera-scanner-modal")?Se():ut();return}if(e.key==="F10"){e.preventDefault(),xe()?Y():typeof ue=="function"?ue().then(r=>{r&&r.status==="open"?Y():G()}).catch(()=>G()):G();return}const s=document.activeElement?.tagName?.toLowerCase();if(!(s==="input"||s==="textarea"||s==="select"))if(e.key==="Enter"){if(ie&&ie.length>=3){const r=ie.trim().toLowerCase(),n=(m.products||[]).find(o=>o&&o.isActive!=="false"&&o.isActive!==!1&&(o.barcode&&o.barcode.toLowerCase()===r||o.sku&&o.sku.toLowerCase()===r||o.id&&String(o.id).toLowerCase()===r));if(n)it(n.id)&&(oe(),g(`Ditambahkan: ${n.name}`,"success"));else{const o=d("pos-search-input");o&&(o.value=ie,de=ie,V()),g("Barcode tidak ditemukan di katalog","warning")}ie=""}}else e.key&&e.key.length===1&&(ie=(ie||"")+e.key,clearTimeout(Xt),Xt=setTimeout(()=>{ie=""},150))},document.addEventListener("keydown",window.__posBarcodeFn)},it=e=>{const t=(m.products||[]).find(o=>o&&String(o.id)===String(e));if(!t)return!1;if(!(t.isActive!=="false"&&t.isActive!==!1))return g("Produk ini sedang tidak tersedia","warning"),!1;if(t.variants&&t.variants.length>0)return wa().then(()=>{typeof window.openPOSVariantSheet=="function"&&window.openPOSVariantSheet(e)}),!0;const r=De(t);if(r.isManaged&&r.isOutOfStock)return g(`Maaf, stok "${t.name}" sedang kosong!`,"warning"),!1;const n=w.find(o=>String(o.id)===String(e)&&!o.isVariant);if(n){const o=parseFloat((n.qty+1).toFixed(3));if(r.isManaged&&o>r.totalStock)return g(`Stok tidak cukup! Tersisa: ${I(r.totalStock)} ${t.unit||"pcs"}`,"warning"),!1;n.qty=o,se(n)}else{const o=parseFloat(t.price)||0;w.push(se({id:t.id,name:t.name,price:o,basePrice:o,hpp:parseFloat(t.hpp)||0,qty:1,unit:t.unit||"pcs",poTime:t.poTime||"",discount:0,subtotal:o,isVariant:!1,isWholesale:!1}))}return oe(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"),R(),!0},Pa=(e,t)=>{const a=(m.products||[]).find(i=>i&&String(i.id)===String(e));if(!a)return!1;if(!(a.isActive!=="false"&&a.isActive!==!1))return g("Produk ini sedang tidak tersedia","warning"),!1;const r=De(a);if(r.isManaged&&r.isOutOfStock)return g(`Maaf, stok "${a.name}" sedang kosong!`,"warning"),!1;const n=Ne(t)||1,o=w.find(i=>String(i.id)===String(e)&&!i.isVariant);if(o){const i=parseFloat((o.qty+n).toFixed(3));if(r.isManaged&&i>r.totalStock)return g(`Stok tidak cukup! Tersisa: ${I(r.totalStock)} ${a.unit||"pcs"}`,"warning"),!1;o.qty=i,se(o)}else{if(r.isManaged&&n>r.totalStock)return g(`Stok tidak cukup! Tersisa: ${I(r.totalStock)} ${a.unit||"pcs"}`,"warning"),!1;const i=parseFloat(a.price)||0,l=se({id:a.id,name:a.name,price:i,basePrice:i,hpp:parseFloat(a.hpp)||0,qty:n,unit:a.unit||"pcs",poTime:a.poTime||"",discount:0,subtotal:i*n,isVariant:!1,isWholesale:!1});w.push(l)}return oe(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"),R(),!0},Ma=(e,t,a,s,r=1)=>{const n=(m.products||[]).find(h=>h&&String(h.id)===String(e));if(!n)return!1;if(!(n.isActive!=="false"&&n.isActive!==!1))return g("Produk ini sedang tidak tersedia","warning"),!1;const i=n.variants?.[s];if(i){if(!(i.isActive!==!1&&i.isActive!=="false"))return g("Varian ini sedang tidak tersedia","warning"),!1;if(m.store?.useStock===!0||m.store?.useStock==="true"){const M=parseFloat(i.stock)||0,k=`${e}__v${s}`,j=w.find(T=>T.cartKey===k),B=j&&parseFloat(j.qty)||0,c=Ne(r)||1;if(M<=0)return g(`Maaf, stok varian "${i.name}" sedang kosong!`,"warning"),!1;if(B+c>M)return g(`Stok varian "${i.name}" tidak cukup! Sisa: ${I(M)}`,"warning"),!1}}const l=`${e}__v${s}`,p=Ne(r)||1,f=w.find(h=>h.cartKey===l);if(f)f.qty=parseFloat((f.qty+p).toFixed(3)),se(f);else{const h=`${n.name} — ${t}`,S=parseFloat(i?.hpp!=null?i.hpp:n.hpp)||0;w.push(se({id:e,cartKey:l,name:h,variantName:t,variantIdx:s,price:a,basePrice:a,hpp:S,qty:p,unit:i?.unit||n.unit||"pcs",poTime:n.poTime||"",discount:0,subtotal:a*p,isVariant:!0,isWholesale:!1}))}return oe(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"),R(),!0},Ta=(e,t)=>{const a=w.find(r=>(r.cartKey||String(r.id))===String(e));if(!a)return;const s=parseFloat((a.qty+t).toFixed(3));if(s<=0){lt(e);return}if(t>0){const r=(m.products||[]).find(n=>n&&String(n.id)===String(a.id));if(r&&(m.store?.useStock===!0||m.store?.useStock==="true"))if(a.isVariant&&r.variants){const o=r.variants.find(l=>l.name===a.variantName),i=parseFloat(o?.stock)||0;if(s>i){g(`Stok maksimal "${a.name}" hanya ${I(i)}`,"warning");return}}else{const o=De(r);if(o.isManaged&&s>o.totalStock){g(`Stok maksimal tersedia: ${I(o.totalStock)} ${r.unit||"pcs"}`,"warning");return}}}a.qty=s,se(a),t>0&&oe(),R()},$a=(e,t)=>{const a=w.find(n=>(n.cartKey||String(n.id))===String(e));if(!a)return;let s=Ne(t);if(s<=0){lt(e);return}const r=(m.products||[]).find(n=>n&&String(n.id)===String(a.id));if(r&&(m.store?.useStock===!0||m.store?.useStock==="true"))if(a.isVariant&&r.variants){const o=r.variants.find(l=>l.name===a.variantName),i=parseFloat(o?.stock)||0;s>i&&(g(`Stok maksimal "${a.name}" hanya ${I(i)}`,"warning"),s=i)}else{const o=De(r);o.isManaged&&s>o.totalStock&&(g(`Stok maksimal tersedia: ${I(o.totalStock)} ${r.unit||"pcs"}`,"warning"),s=o.totalStock)}a.qty=s,se(a),R()},Ca=(e,t)=>{const a=w.find(n=>(n.cartKey||String(n.id))===String(e));if(!a)return;const s=ce(t),r=a.hpp!=null?parseFloat(a.hpp):He(a)||0;if(r>0){const n=Math.max(0,Math.round((a.price-r)*a.qty));if(s>n){g(`Diskon ditolak! Tidak boleh di bawah harga modal (HPP ${x(r)}). Maksimal diskon: ${x(n)}`,"warning"),a.discount=n,se(a),R(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("heavy");return}}a.discount=Math.min(s,a.price*a.qty),se(a),R()},lt=e=>{w=w.filter(t=>(t.cartKey||String(t.id))!==String(e)),R(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light")},Aa=()=>{if(w.length===0)return;const e=()=>{w=[],J=0,N=0,_="rp",U=0,C=null,R(),g("Keranjang kasir dikosongkan.")};typeof window.showConfirm=="function"?window.showConfirm("Kosongkan Keranjang","Hapus semua item dari transaksi saat ini?",e,"Ya, Kosongkan",!0):e()},Ue=(e="hold")=>{try{if(typeof window<"u"&&typeof window.checkUserGesture=="function"&&!window.checkUserGesture())return;const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const a=new t,s=a.createOscillator(),r=a.createGain();s.type="sine";const n=a.currentTime;e==="hold"?(s.frequency.setValueAtTime(659.25,n),s.frequency.exponentialRampToValueAtTime(880,n+.1)):(s.frequency.setValueAtTime(880,n),s.frequency.exponentialRampToValueAtTime(1174.66,n+.1)),r.gain.setValueAtTime(.08,n),r.gain.exponentialRampToValueAtTime(1e-4,n+.16),s.connect(r),r.connect(a.destination),s.start(),s.stop(n+.16),setTimeout(()=>{a.close().catch(()=>{})},200)}catch{}},bs=e=>{if(!e)return"";const t=Math.floor((Date.now()-e)/1e3);if(t<45)return"Baru saja";const a=Math.floor(t/60);if(a<60)return`${a} mnt lalu`;const s=Math.floor(a/60);return s<24?`${s} jam lalu`:new Date(e).toLocaleDateString("id-ID",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})};let F=[];try{const e=localStorage.getItem("pos_held_carts");if(e){const t=JSON.parse(e);Array.isArray(t)&&(F=t)}}catch{F=[]}const dt=()=>{try{localStorage.setItem("pos_held_carts",JSON.stringify(F))}catch{}Pe()},Pe=()=>{const e=F.length,t=d("pos-held-btn-storefront"),a=d("pos-held-btn-admin");t&&(e>0?t.innerHTML=`
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
            </button>`)},ct=()=>{if(w.length===0){g("Keranjang masih kosong, tidak ada transaksi untuk ditahan.","warning");return}const e=b?.name?`Antrean #${F.length+1} — ${b.name}`:`Antrean #${F.length+1}`,t=parseFloat(w.reduce((s,r)=>s+(parseFloat(r.qty)||0),0).toFixed(3)),a=$();Ie(!0),typeof window.pushModalHistory=="function"&&window.pushModalHistory("posHoldPrompt"),document.getElementById("pos-hold-prompt-modal")?.remove(),document.body.insertAdjacentHTML("beforeend",`
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
                        <p class="font-black text-sm sm:text-base" style="color:var(--color-primary)">${x(a)}</p>
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
    </div>`),setTimeout(()=>{const s=d("pos-hold-note-input");s&&(s.focus(),s.select())},50)},pt=(e=!1)=>{const t=d("pos-hold-prompt-modal");t&&(!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("posHoldPrompt",!1,()=>t.remove()):t.remove())},$t=()=>{if(w.length===0)return;const t=(d("pos-hold-note-input")?.value||"").trim()||`Antrean #${F.length+1}`,a={id:`HELD-${Date.now().toString(36).toUpperCase()}`,time:Date.now(),note:t,cart:JSON.parse(JSON.stringify(w)),globalDisc:ee(),discountType:_,discountVal:N,customer:{...b},total:$(),subtotal:ae(),itemCount:parseFloat(w.reduce((s,r)=>s+(parseFloat(r.qty)||0),0).toFixed(3))};F.unshift(a),dt(),w=[],J=0,N=0,_="rp",b={name:"",phone:"",isMember:!1,memberId:null,isNewTempo:!1},pt(),R(),V(),Ue("hold"),g(`Antrean "${t}" berhasil diparkir!`,"success")},Ve=(e=!1)=>{!e&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("posHeldModal"),document.getElementById("pos-held-list-modal")?.remove();const t=F.length,a=t===0?`
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
            ${F.map((s,r)=>{const n=u(s.id),o=(s.cart||[]).slice(0,3).map(l=>`${u(l.name)} (${I(l.qty)}x)`).join(", "),i=(s.cart||[]).length>3?` +${s.cart.length-3} lainnya`:"";return`
                <div class="p-3.5 sm:p-4 hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div class="min-w-0 flex-1">
                        <div class="flex items-center gap-2 mb-1 flex-wrap">
                            <span class="px-2 py-0.5 rounded-lg bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 font-black text-[10px] uppercase">
                                #${r+1}
                            </span>
                            <h4 class="font-black text-xs sm:text-sm text-slate-900 dark:text-white truncate" title="${u(s.note)}">
                                ${u(s.note)}
                            </h4>
                            <span class="text-[10px] text-slate-400">• ${bs(s.time)}</span>
                        </div>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                            <i class="fa-solid fa-box-open mr-1 text-[10px] opacity-70"></i>
                            <span>${o}${i}</span>
                        </p>
                        <div class="flex items-center gap-3 mt-1.5 text-xs">
                            <span class="text-slate-500 font-medium">${I(s.itemCount)} item</span>
                            <span class="text-slate-300 dark:text-slate-700">•</span>
                            <span class="font-black" style="color:var(--color-primary)">${x(s.total)}</span>
                            ${(s.globalDisc||0)>0?`<span class="text-[10px] text-rose-500 font-bold">(Disc: ${x(s.globalDisc)})</span>`:""}
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
    </div>`)},Ge=(e=!1)=>{const t=d("pos-held-list-modal");t&&(!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("posHeldModal",!1,()=>t.remove()):t.remove())},Ct=e=>{const t=F.findIndex(a=>a.id===e);if(t===-1){g("Transaksi tertahan tidak ditemukan.","warning");return}if(w.length>0){document.getElementById("pos-recall-confirm-modal")?.remove(),document.body.insertAdjacentHTML("beforeend",`
        <div id="pos-recall-confirm-modal" class="fixed inset-0 z-[10000] flex items-center justify-center p-4" style="background:rgba(15,23,42,0.7);backdrop-filter:blur(4px)">
            <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-sm border border-slate-200/80 dark:border-slate-800 overflow-hidden">
                <div class="p-5 text-center">
                    <div class="w-14 h-14 rounded-2xl bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto mb-3 text-2xl shadow-inner">
                        <i class="fa-solid fa-triangle-exclamation"></i>
                    </div>
                    <h3 class="font-black text-sm text-slate-900 dark:text-white mb-1">Keranjang Masih Berisi Item</h3>
                    <p class="text-xs text-slate-500 leading-relaxed mb-4">
                        Ada <span class="font-bold text-slate-800 dark:text-slate-200">${w.length} jenis item</span> di transaksi aktif saat ini. Ingin tahan transaksi aktif ke antrean baru atau menimpa?
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
        </div>`);return}At(t)},At=e=>{const t=F[e];t&&(w=JSON.parse(JSON.stringify(t.cart||[])),_=t.discountType||"rp",N=t.discountVal!==void 0?t.discountVal:t.globalDisc||0,J=ee(),b=t.customer?{...t.customer}:{name:"",phone:"",isMember:!1,memberId:null,isNewTempo:!1},F.splice(e,1),dt(),Ge(),R(),V(),Ue("recall"),g(`Antrean "${t.note}" berhasil dipanggil kembali!`,"success"))},Ot=e=>{document.getElementById("pos-recall-confirm-modal")?.remove();const t=b?.name?`Antrean #${F.length+1} — ${b.name}`:`Antrean #${F.length+1}`,a={id:`HELD-${Date.now().toString(36).toUpperCase()}`,time:Date.now(),note:t,cart:JSON.parse(JSON.stringify(w)),globalDisc:ee(),discountType:_,discountVal:N,customer:{...b},total:$(),subtotal:ae(),itemCount:parseFloat(w.reduce((r,n)=>r+(parseFloat(n.qty)||0),0).toFixed(3))};F.unshift(a);const s=F.findIndex(r=>r.id===e);s!==-1?At(s):(dt(),Ge())},Lt=e=>{document.getElementById("pos-recall-confirm-modal")?.remove();const t=F.findIndex(a=>a.id===e);t!==-1&&At(t)},Ht=e=>{const t=F.find(a=>a.id===e);t&&(document.getElementById("pos-delete-confirm-modal")?.remove(),document.body.insertAdjacentHTML("beforeend",`
    <div id="pos-delete-confirm-modal" class="fixed inset-0 z-[10005] flex items-center justify-center p-4" style="background:rgba(15,23,42,0.75);backdrop-filter:blur(4px)">
        <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-xs border border-slate-200 dark:border-slate-800 p-6 text-center transform transition-all">
            <div class="w-14 h-14 rounded-2xl bg-rose-50 dark:bg-rose-950/40 text-rose-500 border border-rose-200 dark:border-rose-900/50 flex items-center justify-center mx-auto mb-3.5 text-2xl shadow-inner">
                <i class="fa-solid fa-trash-can"></i>
            </div>
            <h4 class="font-black text-sm text-slate-900 dark:text-white mb-1.5">Hapus Antrean Ini?</h4>
            <p class="text-xs text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
                Antrean <span class="font-bold text-slate-800 dark:text-slate-200">"${u(t.note)}"</span> (${t.itemCount} item • ${x(t.total)}) akan dihapus permanen.
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
    </div>`))},jt=e=>{document.getElementById("pos-delete-confirm-modal")?.remove();const t=F.find(a=>a.id===e);F=F.filter(a=>a.id!==e),dt(),g(`Antrean "${t?.note||""}" berhasil dihapus.`,"info"),Ve(!0)},Dt=()=>{const e=d("pos-mobile-cart-drawer"),t=d("pos-mobile-cart-sheet");e&&t&&(e.classList.remove("opacity-0","pointer-events-none"),e.classList.add("opacity-100"),t.classList.remove("translate-y-full"),t.classList.add("translate-y-0"),typeof window.pushModalHistory=="function"&&window.pushModalHistory("posCartDrawer"),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},Ie=(e=!1)=>{const t=d("pos-mobile-cart-drawer"),a=d("pos-mobile-cart-sheet");if(t&&a){const s=()=>{a.classList.add("translate-y-full"),a.classList.remove("translate-y-0"),t.classList.add("opacity-0","pointer-events-none"),t.classList.remove("opacity-100")};!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("posCartDrawer",!1,s):s()}},ms=e=>{if(!e)return"";if(e.img&&typeof e.img=="string")return bt(e.img,"w150-rw");const t=(m?.products||[]).find(a=>a&&String(a.id)===String(e.id));return t&&t.img&&typeof t.img=="string"?bt(t.img,"w150-rw"):""},V=()=>{try{if(!m?.products||!m.products.length)try{const o=JSON.parse(localStorage.getItem("freshmart_products")||"null");Array.isArray(o)&&o.length>0&&(m||(window.appData={}),m.products=o)}catch{}const e=Array.isArray(m?.products)?m.products:[],t=e.filter(o=>{if(!o||o.isActive==="false"||o.isActive===!1||we&&o.category!==we)return!1;if(de){const i=String(de).toLowerCase(),l=String(o.name||"").toLowerCase(),p=String(o.barcode||"").toLowerCase(),f=String(o.sku||"").toLowerCase(),h=String(o.category||"").toLowerCase(),S=String(o.subCategory||"").toLowerCase(),M=String(o.brand||"").toLowerCase(),k=Array.isArray(o.variants)&&o.variants.some(j=>(j.name||"").toLowerCase().includes(i)||(j.sku||"").toLowerCase().includes(i)||(j.barcode||"").toLowerCase().includes(i));return l.includes(i)||p.includes(i)||f.includes(i)||h.includes(i)||S.includes(i)||M.includes(i)||k}return!0}),a=e.filter(o=>o&&o.isActive!=="false"&&o.isActive!==!1&&o.category).map(o=>String(o.category).trim()).filter(o=>o.length>0),r=["Semua",...new Set(a)].map(o=>{const i=o==="Semua",l=i?!we:we===o;return`<button onclick="window.posCatFilter('${u(i?"":o)}')" class="shrink-0 px-3.5 py-1.5 rounded-xl text-[11px] font-black uppercase tracking-wider border transition-all active:scale-95 shadow-2xs ${l?"text-white border-transparent":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/50"}" style="${l?"background:var(--color-primary)":""}">${u(o)}</button>`}).join(""),n=t.length===0?`<div class="col-span-full flex flex-col items-center justify-center py-20 text-slate-400 dark:text-slate-600">
                 <div class="w-16 h-16 rounded-3xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 mb-3 shadow-inner">
                   <i class="fa-solid fa-box-open text-2xl"></i>
                 </div>
                 <p class="font-bold text-sm text-slate-600 dark:text-slate-400">Produk Tidak Ditemukan</p>
                 <p class="text-xs text-slate-400 mt-0.5">Coba gunakan kata kunci pencarian atau kategori lain</p>
               </div>`:t.map(o=>{if(!o)return"";const i=!!(o.img&&typeof o.img=="string"&&o.img.trim()),l=i?bt(o.img,"w300-rw"):"",p=Array.isArray(o.variants)&&o.variants.length>0,f=Array.isArray(o.wholesale)&&o.wholesale.length>0,h=w.filter(v=>v&&String(v.id)===String(o.id)),S=parseFloat(h.reduce((v,H)=>v+(H&&H.qty&&parseFloat(H.qty)||0),0).toFixed(3)),M=u(String(o.id!=null?o.id:"")),k=De(o),j=u(String(o.name||"Produk")),B=u(String(o.category||"")),c=parseFloat(o.price)||0;let T="",te="";o.priceNormal&&parseFloat(o.priceNormal)>c&&(T=`<span class="pos-badge pos-badge-promo"><i class="fa-solid fa-tags" style="font-size:6px"></i> -${Math.round((parseFloat(o.priceNormal)-c)/parseFloat(o.priceNormal)*100)}%</span>`,te=`<span class="text-[10px] text-slate-400 line-through font-bold">${x(parseFloat(o.priceNormal))}</span>`);const ne=k.isPreorder?`<span class="pos-badge pos-badge-po"><i class="fa-solid fa-clock" style="font-size:6px"></i> PO ${u(k.poTime)}</span>`:"",q=`${B||"Produk"}${o.brand?` · ${u(o.brand)}`:""}`;let y=0,E="";if(p){const v=(o.variants||[]).map(H=>H.hpp!=null?parseFloat(H.hpp)||0:parseFloat(o.hpp)||0).filter(H=>H>0);if(v.length>0){const H=Math.min(...v),Me=Math.max(...v);y=H,E=H===Me?x(H):`${x(H)} - ${x(Me)}`}else o.hpp!=null&&parseFloat(o.hpp)>0&&(y=parseFloat(o.hpp),E=x(y))}else o.hpp!=null&&parseFloat(o.hpp)>0&&(y=parseFloat(o.hpp),E=x(y));const Q=`<span class="pos-hpp-tag" title="Harga Pokok Penjualan (Modal Kasir)"><i class="fa-solid fa-coins text-[8px]"></i> Modal: <b>${E||(o.hpp?x(parseFloat(o.hpp)):"Rp 0")}</b></span>`,L=mt(o,{size:"sm"}),O=mt(o,{size:"md"});return le==="list"?`
                    <div class="pos-list-item${S>0?" in-cart":""}${k.isOutOfStock?" is-out-of-stock cursor-not-allowed":" cursor-pointer"}" onclick="window.posAddToCart('${M}')">
                        <div class="pos-list-thumb">
                            ${i?`<img width="52" height="52" loading="lazy" decoding="async" src="${u(l)}" alt="${j}" onerror="this.onerror=null;this.style.display='none';this.nextElementSibling.style.display='flex';">
                                   <div class="w-full h-full" style="display:none">${L}</div>`:L}
                            ${T?`<div class="absolute top-1 left-1 z-10 scale-90 origin-top-left">${T}</div>`:""}
                            ${S>0?`<div class="pos-qty-badge" style="top:2px;right:2px;min-width:18px;height:18px;font-size:9px;border-width:1.5px">${I(S)}</div>`:""}
                        </div>
                        <div style="flex:1;min-width:0" class="flex flex-col justify-center">
                            <!-- Line 1: Kategori & Brand + Chip Operasional -->
                            <div class="flex items-center gap-1.5 flex-wrap">
                                <span class="text-[9px] uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500 truncate max-w-[130px]">${q}</span>
                                ${p?'<span class="pos-tag-chip pos-tag-variant"><i class="fa-solid fa-layer-group"></i> Varian</span>':""}
                                ${f?'<span class="pos-tag-chip pos-tag-grosir"><i class="fa-solid fa-tags"></i> Grosir</span>':""}
                                ${k.isPreorder?`<span class="pos-tag-chip pos-tag-po"><i class="fa-solid fa-clock"></i> PO ${u(k.poTime)}</span>`:""}
                                ${k.isManaged&&!k.isOutOfStock?k.isLowStock?`<span class="pos-tag-chip pos-tag-low"><i class="fa-solid fa-fire"></i> Sisa ${I(k.totalStock)}</span>`:`<span class="pos-tag-chip pos-tag-stock"><i class="fa-solid fa-box"></i> Stok ${I(k.totalStock)}</span>`:""}
                                ${k.isOutOfStock?'<span class="pos-badge pos-badge-habis" style="font-size:7px;padding:1px 4px"><i class="fa-solid fa-ban"></i> HABIS</span>':""}
                            </div>
                            <!-- Line 2: Nama Produk -->
                            <p class="text-xs font-bold text-slate-800 dark:text-slate-100 truncate mt-0.5 leading-snug" title="${j}">${j}</p>
                            <!-- Line 3: Harga Jual & Harga Modal HPP -->
                            <div class="flex items-center gap-2 flex-wrap mt-1">
                                <span style="font-size:12px;font-weight:900;color:var(--color-primary)">${x(c)}</span>
                                ${te}
                                ${Q}
                            </div>
                        </div>
                        ${k.isOutOfStock?'<button class="pos-add-btn opacity-40 cursor-not-allowed shrink-0" disabled title="Stok Habis"><i class="fa-solid fa-ban"></i></button>':`<button onclick="event.stopPropagation();window.posAddToCart('${M}')" class="pos-add-btn shrink-0" title="Tambah ke keranjang"><i class="fa-solid fa-plus"></i></button>`}
                    </div>`:`
                <div class="pos-product-card${S>0?" in-cart":""}${k.isOutOfStock?" is-out-of-stock cursor-not-allowed":" cursor-pointer"}" onclick="window.posAddToCart('${M}')">
                    <!-- Kotak Gambar Rasio 1:1 Bersih (Foto Tidak Tertutup Tumpukan Badge) -->
                    <div class="pos-img-box">
                        ${k.isOutOfStock?`
                            <div class="absolute inset-0 bg-slate-900/60 z-20 flex items-center justify-center rounded-xl backdrop-blur-[1px]">
                                <span class="bg-rose-600 text-white text-[9px] font-black px-2.5 py-1 rounded-lg shadow-md uppercase tracking-wider flex items-center gap-1">
                                    <i class="fa-solid fa-ban"></i> HABIS
                                </span>
                            </div>`:""}
                        <!-- Badge Sudut Atas (Maks 1 Badge Promo/PO, Bersih!) -->
                        <div class="pos-img-badges">
                            ${T||(k.isPreorder?ne:"")}
                        </div>
                        <!-- Status Stok Sudut Kanan Bawah (Paritas 1:1 Storefront: SISA X / Stok X) -->
                        ${k.isManaged&&!k.isOutOfStock?`
                            <div class="absolute bottom-1.5 right-1.5 z-10 pointer-events-none">
                                ${k.isLowStock?`
                                    <span class="pos-badge pos-badge-low shadow-sm"><i class="fa-solid fa-fire" style="font-size:6.5px"></i> SISA ${I(k.totalStock)}</span>
                                `:`
                                    <span class="pos-badge pos-badge-stock shadow-sm"><i class="fa-solid fa-box" style="font-size:6.5px"></i> Stok ${I(k.totalStock)}</span>
                                `}
                            </div>`:""}
                        ${S>0?`<div class="pos-qty-badge">${I(S)}</div>`:""}
                        ${i?`<img width="300" height="300" loading="lazy" decoding="async" src="${u(l)}" alt="${j}"
                                 onerror="this.onerror=null;this.style.display='none';this.nextElementSibling.style.display='flex';">
                               <div class="w-full h-full" style="display:none">${O}</div>`:O}
                    </div>
                    <!-- Info Produk Rapi -->
                    <div class="pos-card-info">
                        <p class="pos-card-cat truncate">${q}</p>
                        <p class="pos-card-name leading-tight line-clamp-2" title="${j}">${j}</p>
                        <!-- Chip Operasional Rapi (Varian / Grosir / PO) -->
                        ${p||f||k.isPreorder&&T?`
                        <div class="flex items-center gap-1 mt-1 mb-0.5 flex-wrap">
                            ${p?'<span class="pos-tag-chip pos-tag-variant"><i class="fa-solid fa-layer-group"></i> Varian</span>':""}
                            ${f?'<span class="pos-tag-chip pos-tag-grosir"><i class="fa-solid fa-tags"></i> Grosir</span>':""}
                            ${k.isPreorder&&T?`<span class="pos-tag-chip pos-tag-po"><i class="fa-solid fa-clock"></i> PO ${u(k.poTime)}</span>`:""}
                        </div>`:""}
                        <div class="pos-card-footer flex items-center justify-between gap-1">
                            <div class="flex flex-col min-w-0 pr-1">
                                <div class="flex items-baseline gap-1.5 flex-wrap">
                                    <span class="pos-card-price">${x(c)}</span>
                                    ${te}
                                </div>
                                <div class="flex items-center gap-1 mt-1">
                                    ${Q}
                                </div>
                            </div>
                            ${k.isOutOfStock?'<button class="pos-add-btn opacity-40 cursor-not-allowed shrink-0" disabled title="Stok Habis"><i class="fa-solid fa-ban"></i></button>':`<button onclick="event.stopPropagation();window.posAddToCart('${M}')" class="pos-add-btn shrink-0" title="Tambah ke keranjang"><i class="fa-solid fa-plus"></i></button>`}
                        </div>
                    </div>
                </div>`}).join("");document.querySelectorAll("#pos-cat-filter").forEach(o=>{o.innerHTML=r}),document.querySelectorAll("#pos-catalog-grid").forEach(o=>{o.className=le==="list"?"pos-catalog-list-mode":"pos-catalog-grid-mode",o.innerHTML=n})}catch(e){console.error("[POS] renderCatalog error:",e),document.querySelectorAll("#pos-catalog-grid").forEach(t=>{t.innerHTML=`
                <div class="col-span-full flex flex-col items-center justify-center py-16 text-slate-500">
                    <i class="fa-solid fa-triangle-exclamation text-amber-500 text-3xl mb-3"></i>
                    <p class="font-bold text-sm text-slate-700 dark:text-slate-300">Gagal Memuat Katalog Kasir</p>
                    <p class="text-xs text-slate-400 mt-1 mb-4">${u(e.message||"Terjadi kesalahan")}</p>
                    <button onclick="if(typeof window.posRenderCatalog==='function') window.posRenderCatalog(); else if(typeof window.refreshPOSCatalog==='function') window.refreshPOSCatalog();" class="px-4 py-2 rounded-xl text-xs font-bold text-white shadow-md active:scale-95 cursor-pointer" style="background:var(--color-primary)">
                        <i class="fa-solid fa-arrows-rotate mr-1.5"></i> Coba Muat Ulang
                    </button>
                </div>`})}},R=()=>{const e=parseFloat(w.reduce((c,T)=>c+(parseFloat(T.qty)||0),0).toFixed(3)),t=ae(),a=$(),s=x(a),r=x(t),n=w.length===0?`<div class="flex flex-col items-center justify-center h-full py-12 text-slate-300 dark:text-slate-600 select-none">
            <div class="w-16 h-16 rounded-3xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 mb-3 shadow-inner">
                <i class="fa-solid fa-cart-shopping text-2xl"></i>
            </div>
            <p class="text-sm font-bold text-slate-600 dark:text-slate-400">Keranjang Kasir Kosong</p>
            <p class="text-xs text-slate-400 mt-1 text-center max-w-[200px]">Pilih produk di katalog atau scan barcode untuk menambah</p>
           </div>`:w.map(c=>{const T=u(String(c.cartKey||c.id)),te=ms(c),ne=c.isVariant&&c.variantName?u(c.name.replace(` — ${c.variantName}`,"")):u(c.name),q=c.hpp!=null?parseFloat(c.hpp):He(c)||0,y=q>0?Math.max(0,Math.round((c.price-q)*c.qty)):Math.round(c.price*c.qty),E=q>0?Math.round(c.subtotal-q*c.qty):0,Q=mt(c,{size:"thumb"});return`
            <div class="group flex items-start gap-2.5 p-2.5 bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 shadow-xs hover:border-[var(--color-primary)] transition-all">
                <!-- 44px Thumbnail -->
                <div class="w-11 h-11 rounded-xl overflow-hidden shrink-0 border border-slate-200/60 dark:border-slate-700 flex items-center justify-center">
                    ${te?`<img width="44" height="44" loading="lazy" src="${u(te)}" alt="${u(c.name)}" onerror="this.onerror=null; this.style.display='none'; this.nextElementSibling.style.display='flex';" class="w-full h-full object-cover">
                           <div class="w-full h-full" style="display:none">${Q}</div>`:Q}
                </div>
                <!-- Details -->
                <div class="flex-1 min-w-0 pr-1">
                    <p class="text-xs font-bold text-slate-800 dark:text-slate-100 truncate leading-snug" title="${u(c.name)}">${ne}</p>
                    <div class="flex items-center gap-1.5 mt-0.5 flex-wrap">
                        ${c.isWholesale?'<span class="inline-flex items-center text-[8px] font-black px-1.5 py-0.5 rounded text-white shadow-2xs" style="background:var(--color-primary)">GROSIR</span>':""}
                        ${c.isVariant?`<span class="inline-flex items-center gap-1 text-[8px] font-black px-1.5 py-0.5 rounded text-white shadow-2xs" style="background:var(--color-primary);opacity:0.95"><i class="fa-solid fa-layer-group text-[7px]"></i>${u(c.variantName||"VARIAN")}</span>`:""}
                        ${c.poTime?`<span class="inline-flex items-center gap-1 text-[8px] font-bold px-1.5 py-0.5 rounded text-amber-700 bg-amber-100 dark:bg-amber-900/30 dark:text-amber-300 border border-amber-200 dark:border-amber-800 shadow-2xs uppercase tracking-wide"><i class="fa-solid fa-clock text-[7px]"></i> PO ${u(c.poTime)}</span>`:""}
                        ${q>0?`<span class="inline-flex items-center gap-1 text-[8px] font-black px-1.5 py-0.5 rounded text-amber-950 bg-amber-100 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-300/80 dark:border-amber-700 shadow-2xs" title="Harga Modal (HPP)"><i class="fa-solid fa-coins text-[7px] text-amber-600 dark:text-amber-400"></i>HPP: ${x(q)}</span>`:""}
                        <span class="text-[10px] text-slate-500 font-medium">
                            ${c.isWholesale&&c.basePrice?`<span class="line-through text-slate-400">${x(c.basePrice)}</span> <span class="font-bold" style="color:var(--color-primary)">${x(c.price)}</span>`:x(c.price)}
                        </span>
                    </div>
                    <div class="flex items-center gap-1.5 mt-1.5 flex-wrap">
                        <span class="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Diskon:</span>
                        <input type="number" min="0" ${q>0?`max="${y}"`:""} placeholder="0" value="${c.discount||""}" onchange="window.posSetItemDisc('${T}',this.value)"
                            class="w-16 text-[10px] font-mono font-bold border border-slate-200 dark:border-slate-700 rounded-md px-1.5 py-0.5 bg-slate-50 dark:bg-slate-700/60 text-right focus:outline-none focus:border-[var(--color-primary)] transition-all">
                        ${q>0?`<span class="text-[9px] text-amber-600 dark:text-amber-400 font-bold whitespace-nowrap" title="Maksimal diskon agar tidak di bawah harga modal HPP">(Maks: ${x(y)})</span>`:""}
                    </div>
                </div>
                <!-- Stepper & Subtotal -->
                <div class="flex flex-col items-end shrink-0">
                    <div class="flex items-center gap-1">
                        <div class="flex items-center bg-slate-100 dark:bg-slate-700/80 rounded-lg p-0.5 border border-slate-200 dark:border-slate-600 focus-within:border-[var(--color-primary)] transition-colors">
                            <button onclick="window.posUpdateQty('${T}',-1)" class="w-5 h-5 rounded text-slate-600 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-600 font-black text-xs flex items-center justify-center cursor-pointer active:scale-90 transition-all">−</button>
                            <input type="number" step="any" min="0.01" value="${I(c.qty)}" onchange="window.posSetQty('${T}',this.value)"
                                class="w-11 text-center text-[11px] font-black bg-transparent text-slate-800 dark:text-slate-100 focus:outline-none px-0.5">
                            <button onclick="window.posUpdateQty('${T}',1)" class="w-5 h-5 rounded text-slate-600 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-600 font-black text-xs flex items-center justify-center cursor-pointer active:scale-90 transition-all">+</button>
                        </div>
                        <button onclick="window.posRemoveItem('${T}')" class="w-6 h-6 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 flex items-center justify-center text-xs transition-all cursor-pointer" title="Hapus item">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                    <p class="text-xs font-black mt-1.5" style="color:var(--color-primary)">${x(c.subtotal)}</p>
                    ${q>0?`<p class="text-[9px] font-bold ${E>=0?"text-emerald-600 dark:text-emerald-400":"text-rose-500"} mt-0.5" title="Estimasi laba kotor item ini"><i class="fa-solid fa-arrow-trend-up text-[8px] mr-0.5"></i>Untung: ${x(E)}</p>`:""}
                </div>
            </div>`}).join("");document.querySelectorAll(".pos-cart-items-target").forEach(c=>c.innerHTML=n),document.querySelectorAll(".pos-subtotal-target").forEach(c=>c.textContent=r),document.querySelectorAll(".pos-total-target").forEach(c=>c.textContent=s),document.querySelectorAll(".pos-item-count-target").forEach(c=>c.textContent=I(e));const o=re(),i=x(o),l=Math.max(0,a-o),p=x(l);document.querySelectorAll(".pos-total-hpp-target").forEach(c=>c.textContent=i),document.querySelectorAll(".pos-total-margin-target").forEach(c=>c.textContent=p);const f=ee(),h=x(f);document.querySelectorAll(".pos-disc-val-input").forEach(c=>{document.activeElement!==c&&(c.value=N||"")}),document.querySelectorAll(".pos-global-disc-target").forEach(c=>{document.activeElement!==c&&(c.value=N||"")}),document.querySelectorAll(".pos-disc-preview-target").forEach(c=>{f>0?(c.textContent=`- ${h}`,c.classList.remove("hidden"),c.classList.add("text-rose-500")):(c.textContent="",c.classList.add("hidden"))}),document.querySelectorAll(".pos-disc-type-rp").forEach(c=>{_==="rp"?(c.className="pos-disc-type-rp px-2.5 py-0.5 rounded-md transition-all cursor-pointer font-black text-white shadow-xs text-[10px]",c.style.background="var(--color-primary)",c.style.color="#ffffff"):(c.className="pos-disc-type-rp px-2.5 py-0.5 rounded-md transition-all cursor-pointer text-slate-600 dark:text-slate-300 hover:text-slate-900 font-bold text-[10px]",c.style.background="transparent",c.style.color="")}),document.querySelectorAll(".pos-disc-type-pct").forEach(c=>{_==="percent"?(c.className="pos-disc-type-pct px-2.5 py-0.5 rounded-md transition-all cursor-pointer font-black text-white shadow-xs text-[10px]",c.style.background="var(--color-primary)",c.style.color="#ffffff"):(c.className="pos-disc-type-pct px-2.5 py-0.5 rounded-md transition-all cursor-pointer text-slate-600 dark:text-slate-300 hover:text-slate-900 font-bold text-[10px]",c.style.background="transparent",c.style.color="")}),document.querySelectorAll(".pos-disc-prefix").forEach(c=>{c.textContent=_==="percent"?"%":"Rp",c.style.color="var(--color-primary)"});const S=[5,10,15,20,50],M=[2e3,5e3,1e4,25e3,5e4],k=(c,T)=>_===T&&Number(N)===Number(c),j=_==="percent"?`
        ${S.map(c=>{const T=k(c,"percent");return`<button onclick="window.posApplyQuickDiscount(${c},'percent')" 
                class="px-2.5 py-1 rounded-lg text-[10px] cursor-pointer transition-all active:scale-95 ${T?"text-white shadow-xs font-black":"bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700 font-bold"}"
                style="${T?"background:var(--color-primary);border:1px solid var(--color-primary);":""}">${c}%</button>`}).join("")}
        ${N>0?`<button onclick="window.posApplyQuickDiscount(0,'percent')" class="px-2.5 py-1 rounded-lg bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 text-[10px] font-bold text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800 cursor-pointer transition-all active:scale-95"><i class="fa-solid fa-rotate-left mr-1 text-[9px]"></i>Reset</button>`:""}
        `:`
        ${M.map(c=>{const T=k(c,"rp"),te=`${c/1e3}rb`;return`<button onclick="window.posApplyQuickDiscount(${c},'rp')" 
                class="px-2.5 py-1 rounded-lg text-[10px] cursor-pointer transition-all active:scale-95 ${T?"text-white shadow-xs font-black":"bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700 font-bold"}"
                style="${T?"background:var(--color-primary);border:1px solid var(--color-primary);":""}">${te}</button>`}).join("")}
        ${N>0?`<button onclick="window.posApplyQuickDiscount(0,'rp')" class="px-2.5 py-1 rounded-lg bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 text-[10px] font-bold text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800 cursor-pointer transition-all active:scale-95"><i class="fa-solid fa-rotate-left mr-1 text-[9px]"></i>Reset</button>`:""}
        `;document.querySelectorAll(".pos-disc-chips-target").forEach(c=>c.innerHTML=j),document.querySelectorAll(".pos-pay-btn-target").forEach(c=>{c.disabled=w.length===0;const T=c.querySelector(".btn-text");T&&(T.textContent=w.length>0?`BAYAR — ${s}`:"PROSES PEMBAYARAN")}),document.querySelectorAll(".pos-hold-btn-target").forEach(c=>{c.disabled=w.length===0,w.length===0?c.classList.add("opacity-40","cursor-not-allowed"):c.classList.remove("opacity-40","cursor-not-allowed")}),Pe();const B=d("pos-mobile-floating-bar");B&&(w.length>0?(B.classList.remove("translate-y-32","opacity-0","pointer-events-none"),B.classList.add("translate-y-0","opacity-100")):(B.classList.add("translate-y-32","opacity-0","pointer-events-none"),B.classList.remove("translate-y-0","opacity-100"),Ie(!0)))},Oa=()=>{if(w.length===0){g("Keranjang masih kosong!","warning");return}const e=re();if(e>0&&$()<e){g(`Transaksi ditolak! Total tagihan (${x($())}) tidak boleh di bawah harga modal HPP (${x(e)})!`,"error"),typeof window.triggerHaptic=="function"&&window.triggerHaptic("heavy");return}typeof window.pushModalHistory=="function"&&window.pushModalHistory("posPayment"),b={name:"",phone:"",isMember:!1,memberId:null,isNewTempo:!1},U=0,C=null,D="cash",W=$(),ge(),Qe(),document.body.insertAdjacentHTML("beforeend",`
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
              <span class="text-xs text-slate-500">Total Tagihan: <span class="font-black text-sm" style="color:var(--color-primary)">${x($())}</span></span>
              ${e>0?`<span class="inline-flex items-center gap-1 text-[10px] font-bold text-amber-950 bg-amber-100 dark:bg-amber-950/60 dark:text-amber-300 px-2 py-0.5 rounded-full border border-amber-300/80 dark:border-amber-700 shadow-2xs"><i class="fa-solid fa-coins text-[8px] text-amber-600 dark:text-amber-400"></i>HPP: ${x(e)}</span>`:""}
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
          <button onclick="window.processPOSTx()" id="pos-process-btn" class="w-2/3 py-3 rounded-2xl text-white font-black text-xs sm:text-sm shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer" style="background:var(--color-primary)">
            <i class="fa-solid fa-check-circle"></i>
            <span>Selesaikan Transaksi</span>
          </button>
        </div>
      </div>
    </div>`),he("cash")},It=(e=!1)=>{const t=d("pos-pay-modal");t&&(!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("posPayment",!1,()=>t.remove()):t.remove())},La=(e,t,a)=>{a.forEach(s=>{const r=d(`${e}-${s}`);r&&(s===t?(r.style.background="var(--color-primary)",r.style.color="white",r.style.borderColor="var(--color-primary)",r.classList.add("shadow-xs")):(r.style.removeProperty("background"),r.style.removeProperty("color"),r.style.removeProperty("border-color"),r.classList.remove("shadow-xs")))})},he=e=>{const t=d("pos-pay-detail");if(!t)return;const a=$(),s=re(),r=Math.max(0,a-s),n=ye(),o=`
      <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-700/60 mb-2.5 text-xs space-y-1.5">
        <div class="flex justify-between items-center">
          <span class="text-slate-500 font-medium">Subtotal Belanja</span>
          <span class="font-bold font-mono text-xs">${x(ae())}</span>
        </div>
        ${ee()>0?`
        <div class="flex justify-between items-center text-rose-500 text-[11px]">
          <span>Diskon Toko</span>
          <span class="font-bold font-mono">- ${x(ee())}</span>
        </div>`:""}
        ${n>0?`
        <div class="flex justify-between items-center text-emerald-600 dark:text-emerald-400 text-[11px]">
          <span class="flex items-center gap-1 font-bold"><i class="fa-solid fa-tags"></i> Diskon Poin (${U} Pts)</span>
          <span class="font-black font-mono">- ${x(n)}</span>
        </div>`:""}
        ${C?`
        <div class="flex justify-between items-center text-purple-600 dark:text-purple-400 text-[11px]">
          <span class="flex items-center gap-1 font-bold"><i class="fa-solid fa-gift"></i> Klaim Hadiah</span>
          <span class="font-bold truncate max-w-[170px]">${u(C.name)} (-${C.pointsCost} Pts)</span>
        </div>`:""}
        <div class="flex justify-between items-center pt-1.5 border-t border-slate-200/60 dark:border-slate-700/60">
          <span class="text-slate-700 dark:text-slate-200 font-bold">Total Wajib Bayar</span>
          <span class="font-black text-sm" style="color:var(--color-primary)">${x(a)}</span>
        </div>
        ${s>0?`
        <div class="flex justify-between items-center pt-1 border-t border-slate-200/40 dark:border-slate-700/40 text-[10px]">
          <span class="text-slate-400 font-semibold flex items-center gap-1"><i class="fa-solid fa-coins text-amber-500"></i> Total Modal (HPP):</span>
          <span class="font-bold text-amber-600 dark:text-amber-400">${x(s)}</span>
        </div>
        <div class="flex justify-between items-center text-[10px]">
          <span class="text-slate-400 font-semibold flex items-center gap-1"><i class="fa-solid fa-arrow-trend-up text-emerald-500"></i> Estimasi Laba Bersih:</span>
          <span class="font-bold text-emerald-600 dark:text-emerald-400">+ ${x(r)}</span>
        </div>`:""}
      </div>`;if(e==="cash"){const l=[{label:"Uang Pas",val:a,isPas:!0},{label:"10.000",val:1e4},{label:"20.000",val:2e4},{label:"50.000",val:5e4},{label:"100.000",val:1e5},{label:"200.000",val:2e5},{label:"500.000",val:5e5}].map(p=>`
            <button onclick="window.posSetQuickCash(${p.val})" type="button"
                class="px-2.5 py-1.5 rounded-xl text-[11px] font-black border transition-all active:scale-95 ${p.isPas?"text-white border-transparent shadow-xs":"bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]"}"
                style="${p.isPas?"background:var(--color-primary)":""}">
                ${p.isPas?"💵 Uang Pas":`Rp ${p.label}`}
            </button>
        `).join("");t.innerHTML=`
            ${o}
            <div class="space-y-2">
                <label class="text-[10px] font-black uppercase tracking-wider text-slate-400">Nominal Uang Diterima (Rp)</label>
                <div class="relative">
                    <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-black text-slate-400">Rp</span>
                    <input id="pos-paid-input" type="number" min="0" placeholder="${a}" value="${W||""}"
                        class="w-full border-2 rounded-2xl pl-10 pr-4 py-2.5 text-base sm:text-lg font-black bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none text-right transition-all"
                        style="border-color:var(--color-primary)" oninput="window.updatePosChange(this.value)">
                </div>

                <!-- Quick Cash Buttons Grid -->
                <div class="pt-1">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Pilihan Uang Cepat (1-Klik)</p>
                    <div class="grid grid-cols-3 sm:grid-cols-4 gap-1.5">
                        ${l}
                    </div>
                </div>

                <!-- Kembalian Box -->
                <div id="pos-change-box" class="mt-2.5 p-3 rounded-2xl border transition-all flex items-center justify-between ${W>=a?"bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800":"bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800"}">
                    <div>
                        <p class="text-[9px] font-black uppercase tracking-wider text-slate-400">Status Kembalian</p>
                        <p id="pos-change-label" class="text-xs font-bold ${W>=a?"text-emerald-700 dark:text-emerald-400":"text-rose-700 dark:text-rose-400"}">
                            ${W>=a?"Kembalian Uang Pembeli:":"Uang Masih Kurang:"}
                        </p>
                    </div>
                    <span id="pos-change-display" class="text-base font-black ${W>=a?"text-emerald-700 dark:text-emerald-400":"text-rose-600 dark:text-rose-400"}">
                        ${x(Math.abs(ka()))}
                    </span>
                </div>
            </div>
        `}else if(e==="qris"){const i=m.payment?.qrisUrl||"";t.innerHTML=`
          ${o}
          ${i?`<div class="flex flex-col items-center justify-center p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700"><img src="${u(i)}" class="w-48 h-48 object-contain rounded-xl shadow-xs" alt="QRIS"><p class="text-center text-xs font-bold text-slate-600 dark:text-slate-300 mt-2">Arahkan kamera pembeli untuk memindai QRIS</p></div>`:'<div class="p-4 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 text-xs rounded-2xl border border-amber-200 text-center font-bold"><i class="fa-solid fa-triangle-exclamation mr-1.5"></i>QRIS toko belum diatur di menu Pengaturan.</div>'}`}else if(e==="transfer"){const l=(Array.isArray(m.banks)?m.banks:[]).filter(f=>f&&(f.bankName||f.name||f.bank));let p='<option value="">Rekening bank belum diatur di CMS Admin</option>';l.length>0&&(p=l.map(f=>{const h=f.bankName||f.name||f.bank||"Bank",S=f.bankAccount||f.number||f.noRekening||f.account||"",M=f.bankOwner||f.holder||f.atasNama||f.owner||"",k=`${h}${S?" — "+S:""}${M?" a/n "+M:""}`;return`<option value="${u(k)}">${u(k)}</option>`}).join("")),t.innerHTML=`
          ${o}
          <div class="space-y-2">
            <label class="text-[10px] font-black uppercase tracking-wider text-slate-400 block">Rekening Tujuan Toko</label>
            <div class="relative">
              <select id="pos-bank-sel" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)] transition-all">
                ${p}
              </select>
            </div>
            ${l.length>0?`
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
          </div>`}else if(e==="tempo"){const i=!!(b.isMember&&b.paylaterActive&&b.paylaterLimit>0),l=i?Math.max(0,(b.paylaterLimit||0)-(b.paylaterUsed||0)):0,p=i&&a>l?a-l:0;t.innerHTML=`
          ${o}
          ${i?`
            <div class="p-3.5 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/40 rounded-2xl border border-emerald-200/80 dark:border-emerald-800/60 mb-2.5 space-y-2">
              <div class="flex items-center justify-between">
                <span class="text-xs font-black text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                  <i class="fa-solid fa-bolt text-emerald-500"></i> Putri PayLater Member
                </span>
                <span class="text-[10px] font-black px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-200">
                  Plafon: ${x(b.paylaterLimit)}
                </span>
              </div>
              <div class="flex justify-between items-center text-xs">
                <span class="text-slate-500 dark:text-slate-400 text-[11px]">Sisa Plafon Tersedia:</span>
                <span class="font-black text-emerald-600 dark:text-emerald-400 font-mono text-sm">${x(l)}</span>
              </div>
              <label class="flex items-center gap-2 pt-1 cursor-pointer select-none border-t border-emerald-200/60 dark:border-emerald-800/40">
                <input type="checkbox" id="pos-use-paylater" ${l>0?"checked":"disabled"} onchange="window.posTogglePaylater(this.checked)" class="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 cursor-pointer">
                <span class="text-xs font-bold text-slate-700 dark:text-slate-200">Gunakan Plafon Putri PayLater</span>
              </label>
              ${p>0?`
                <div class="p-2 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800 text-[10px] text-amber-800 dark:text-amber-300 font-bold flex items-center gap-1.5">
                  <i class="fa-solid fa-circle-exclamation text-amber-500 shrink-0"></i>
                  <span>Total belanja melebihi sisa limit. Wajib DP minimal ${x(p)}</span>
                </div>
              `:""}
            </div>
          `:`
            <div class="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-2xl border border-amber-200 dark:border-amber-700/80 mb-2.5">
              <p class="text-xs font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1.5"><i class="fa-solid fa-hourglass-half"></i> Pembayaran Tempo / Piutang</p>
              <p class="text-[10px] text-amber-700 dark:text-amber-400 mt-1">Transaksi otomatis dicatat sebagai piutang di database toko.</p>
            </div>
          `}
          <label class="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1">${i&&p>0?"Uang Muka / DP Wajib (Rp)":"Uang Muka / DP (Rp) — opsional"}</label>
          <input id="pos-dp-input" type="number" min="0" placeholder="0" value="${p>0?p:0}" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-black text-right bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)]">`}},Ha=e=>{const t=$(),a=d("pos-dp-input"),s=d("pos-dp-input")?.previousElementSibling,r=!!(b.isMember&&b.paylaterActive&&b.paylaterLimit>0),n=r?Math.max(0,(b.paylaterLimit||0)-(b.paylaterUsed||0)):0,o=e&&r&&t>n?t-n:0;a&&(a.value=o>0?o:0),s&&s.tagName==="LABEL"&&(s.textContent=e&&r&&o>0?"Uang Muka / DP Wajib (Rp)":"Uang Muka / DP (Rp) — opsional")};window.posTogglePaylater=Ha;const ja=e=>{b.isMember=e==="member",b.isNewTempo=e==="tempo",La("pos-ctype",e,["umum","member","tempo"]);const t=d("pos-customer-fields");t&&(e==="umum"?(b.name="",b.phone="",b.memberId=null,b.points=0,t.innerHTML='<input id="pos-cust-name" type="text" placeholder="Nama pembeli (opsional)" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)] focus:bg-white">'):e==="member"?(t.innerHTML=`
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
          </div>`,ge().then(()=>{d("pos-cust-phone")?.value?.trim()&&We()})):e==="tempo"&&(b.isMember=!1,Ft("tempo"),t.innerHTML=`
          <div class="space-y-2">
            <input id="pos-cust-name" type="text" placeholder="Nama Pelanggan / Rekanan *" required class="w-full border border-amber-300 dark:border-amber-600 rounded-xl px-3 py-2 text-xs bg-amber-50/40 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none">
            <input id="pos-cust-phone" type="tel" placeholder="No. WhatsApp Pelanggan *" required class="w-full border border-amber-300 dark:border-amber-600 rounded-xl px-3 py-2 text-xs bg-amber-50/40 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none">
          </div>`))},Ft=e=>{D=e,La("pos-pay",e,["cash","qris","transfer","tempo"]),he(e),e==="transfer"&&(!m.banks||!m.banks.length)&&Qe().then(t=>{D==="transfer"&&t&&t.length>0&&he("transfer")})},Rt=e=>{W=ce(e);const t=$(),a=W-t,s=d("pos-change-display"),r=d("pos-change-label"),n=d("pos-change-box"),o=d("pos-process-btn");s&&(s.textContent=x(Math.abs(a))),r&&(r.textContent=a>=0?"Kembalian Uang Pembeli:":"Uang Masih Kurang:"),s&&(s.className=`text-base font-black ${a>=0?"text-emerald-700 dark:text-emerald-400":"text-rose-600 dark:text-rose-400"}`),n&&(n.className=`mt-2.5 p-3 rounded-2xl border transition-all flex items-center justify-between ${a>=0?"bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800":"bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800"}`),o&&D==="cash"&&(o.disabled=a<0,o.classList.toggle("opacity-50",a<0))},Bt=e=>{const t=d("pos-paid-input");t&&(t.value=e,Rt(e),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},Qe=async()=>{if(Array.isArray(m.banks)&&m.banks.length>0)return m.banks;try{const e=await A.collection("freshmart").doc("cms_data").get();if(e.exists){const t=e.data();if(Array.isArray(t?.banks)&&t.banks.length>0)return m.banks=t.banks,m.banks}}catch{}return m.banks||[]},ge=async()=>{if(m.customers&&m.customers.length>0)return m.customers;try{const e=await A.collection("freshmart").doc("cms_data").collection("customers").get();return m.customers=e.docs.map(t=>({...t.data(),id:t.id,_docId:t.id})),m.customers}catch{return m.customers||[]}},Da=(e,t)=>{if(!e||!t||!t.length)return[];const a=e.trim().toLowerCase(),s=a.replace(/\D/g,"");let r=s;r.startsWith("62")?r=r.slice(2):r.startsWith("0")&&(r=r.slice(1));const n=[],o=new Set;return t.forEach(i=>{if(!i)return;const l=String(i.id||i._docId||i.phone||"");if(o.has(l))return;const p=String(i.phone||"").replace(/\D/g,"");let f=p;f.startsWith("62")?f=f.slice(2):f.startsWith("0")&&(f=f.slice(1));const h=String(i.name||"").toLowerCase();let S=!1;r.length>=4&&f&&(f===r||f.endsWith(r)||r.endsWith(f)||p.includes(s))&&(S=!0),!S&&(l.toLowerCase()===a||l===s)&&(S=!0),!S&&a.length>=2&&h.includes(a)&&(S=!0),S&&(o.add(l),n.push(i))}),n},xs=async e=>{if(!e)return null;const t=e.trim(),a=t.replace(/\D/g,"");let s=a;s.startsWith("62")?s=s.slice(2):s.startsWith("0")&&(s=s.slice(1));const r=A.collection("freshmart").doc("cms_data").collection("customers"),o=Array.from(new Set([s?"62"+s:null,s?"0"+s:null,s||null,s?"+62"+s:null,a||null,t].filter(Boolean))).map(async p=>{try{const f=await r.doc(p).get();if(f&&f.exists)return{...f.data(),id:f.id,_docId:f.id}}catch{}return null}),l=(await Promise.all(o)).find(Boolean);if(l){m.customers||(m.customers=[]);const p=m.customers.findIndex(f=>String(f.id||f.phone)===String(l.id||l.phone));return p>-1?m.customers[p]=l:m.customers.push(l),l}try{const p=await r.limit(300).get();if(!p.empty){m.customers=p.docs.map(h=>({...h.data(),id:h.id,_docId:h.id}));const f=Da(e,m.customers);if(f.length>0)return f[0]}}catch{}return null},ze=()=>{const e=d("pos-member-result");if(!e||!b.isMember)return;const t=parseFloat(b.points)||0,a=typeof window.getMemberTier=="function"?window.getMemberTier(t):{badge:"MEMBER RESMI"},s=qe(),r=ye(),n=ot(),o=(m.rewards||[]).filter(l=>l.isActive!=="false"&&l.isActive!==!1&&(parseFloat(l.stock)||0)>0),i=Math.max(0,t-(U||0));e.innerHTML=`
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
                  <i class="fa-solid fa-bolt text-emerald-500"></i> PayLater: ${x(Math.max(0,(b.paylaterLimit||0)-(b.paylaterUsed||0)))}
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
            <span class="text-[10px] text-slate-400 font-semibold font-mono">1 Poin = ${x(s)}</span>
          </div>

          ${U>0?`
          <div class="p-2.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-between gap-2">
            <div class="text-xs">
              <span class="font-bold text-emerald-700 dark:text-emerald-300">Potongan Belanja:</span>
              <span class="font-black font-mono text-emerald-600 dark:text-emerald-400 ml-1">-${x(r)}</span>
              <span class="text-[10px] text-slate-500 ml-1">(${U} Poin)</span>
            </div>
            <button type="button" onclick="window.setPosPointsRedeemed(0)" class="text-[10px] font-bold text-rose-500 hover:underline cursor-pointer">
              Batal
            </button>
          </div>
          `:`
          <div class="space-y-2">
            <div class="flex gap-1.5 flex-wrap">
              ${[10,20,50].map(l=>l>n?"":`
                <button type="button" onclick="window.setPosPointsRedeemed(${l})" class="px-2.5 py-1.5 rounded-lg text-[10px] font-bold bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 dark:bg-slate-700 dark:hover:bg-emerald-900/40 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 transition-all cursor-pointer">
                  Tukar ${l} Pts (-${x(l*s)})
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

          ${C?`
          <div class="p-2.5 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800/60 flex items-center justify-between gap-2">
            <div class="text-xs min-w-0">
              <span class="font-bold text-purple-800 dark:text-purple-300 block truncate">🎁 ${u(C.name)}</span>
              <span class="text-[10px] text-purple-600 dark:text-purple-400 font-mono">Ditukar dengan ${C.pointsCost} Poin</span>
            </div>
            <button type="button" onclick="window.deselectPosReward()" class="text-[10px] font-bold text-rose-500 hover:underline cursor-pointer shrink-0">
              Batal
            </button>
          </div>
          `:`
          <div class="relative">
            <select onchange="if(this.value){window.selectPosReward(this.value);}else{window.deselectPosReward();}" class="w-full text-xs py-2 pl-3 pr-8 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)]">
              <option value="">-- Pilih Hadiah Member (Opsional) --</option>
              ${o.map(l=>{const p=parseFloat(l.pointsCost)||0,f=p<=i;return`
                <option value="${l.id}" ${f?"":"disabled"}>
                  ${u(l.name)} (${p} Poin) ${f?"":"[Poin Kurang]"}
                </option>
                `}).join("")}
            </select>
          </div>
          `}
        </div>
        `:""}
      </div>
      `:""}
    </div>`},Ia=e=>{const t=ot();U=Math.min(t,Math.max(0,parseInt(e)||0)),ze(),he(D);const s=document.querySelector("#pos-pay-modal .text-xs.text-slate-500 .font-black");s&&(s.textContent=x($()))},Fa=e=>{const t=(m.rewards||[]).find(n=>String(n.id)===String(e));if(!t)return;const a=parseFloat(t.pointsCost)||0,s=Math.max(0,(parseFloat(b.points)||0)-(U||0));if(a>s){g("Poin member tidak cukup untuk hadiah ini!","warning");return}C={id:t.id,name:t.name,pointsCost:a},g(`Hadiah "${t.name}" dipilih!`,"success"),ze(),he(D);const r=document.querySelector("#pos-pay-modal .text-xs.text-slate-500 .font-black");r&&(r.textContent=x($()))},Ra=()=>{C=null,ze(),he(D);const e=document.querySelector("#pos-pay-modal .text-xs.text-slate-500 .font-black");e&&(e.textContent=x($()))},tt=e=>{b.isMember=!0,b.name=e.name||"Member Toko",b.phone=e.phone||"",b.memberId=e.id||e._docId||e.phone,b.points=parseFloat(e.points)||0,U=0,C=null,b.paylaterActive=!!e.paylaterActive,b.paylaterLimit=parseFloat(e.paylaterLimit)||0,b.paylaterUsed=parseFloat(e.paylaterUsed)||0;const t=d("pos-cust-phone");t&&(t.value=e.phone||e.name||""),ze(),he(D),g(`Member terdeteksi: ${e.name} (${b.points} Poin)`,"success")},Nt=e=>{const a=(m.customers||[]).find(s=>s&&String(s.id||s._docId||s.phone)===String(e));a&&tt(a)},_t=()=>{b.isMember=!1,b.name="",b.phone="",b.memberId=null,b.points=0,U=0,C=null,b.paylaterActive=!1,b.paylaterLimit=0,b.paylaterUsed=0;const e=d("pos-cust-phone");e&&(e.value="",e.focus());const t=d("pos-member-result");t&&(t.innerHTML=""),he(D)};let ta=null;const Et=()=>{clearTimeout(ta);const e=d("pos-cust-phone")?.value?.trim()||"";if(!e){if(!b.memberId){const s=d("pos-member-result");s&&(s.innerHTML="")}return}const t=e.replace(/\D/g,"");!(Array.isArray(m.customers)&&m.customers.length>0)&&t.length<10&&e.length<8||(ta=setTimeout(()=>{We()},350))},We=async()=>{const t=d("pos-cust-phone")?.value?.trim()||"";if(!t){g("Masukkan nomor HP atau nama member","warning");return}const a=d("pos-member-result"),s=d("pos-member-lookup-btn");s&&(s.disabled=!0,s.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i>'),a&&(a.innerHTML='<div class="p-2.5 text-center text-xs text-slate-400"><i class="fa-solid fa-spinner fa-spin mr-1.5"></i>Memeriksa database member...</div>');try{await ge();const r=Da(t,m.customers||[]);if(r.length===1)tt(r[0]);else if(r.length>1)a.innerHTML=`
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
            `;else{const n=await xs(t);if(n)tt(n);else{b.isMember=!1,b.name="",b.memberId=null,b.points=0;const i=t.replace(/\D/g,"").length>=8;a.innerHTML=`
                  <div class="p-3 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs space-y-1">
                    <p class="font-bold flex items-center gap-1.5"><i class="fa-solid fa-circle-info"></i> Member Tidak Ditemukan</p>
                    <p class="text-[11px] text-amber-700 dark:text-amber-400">Tidak ada member ditemukan untuk "<b>${u(t)}</b>".</p>
                    ${i?"":`
                      <p class="text-[10px] text-amber-600/90 dark:text-amber-400/80 pt-1 border-t border-amber-200 dark:border-amber-800/60">
                        <i class="fa-solid fa-lightbulb mr-1 text-amber-500"></i><b>Tips Kasir:</b> Masukkan nomor WhatsApp/HP member (contoh: <code>0812...</code>) untuk verifikasi instan.
                      </p>
                    `}
                  </div>`}}}catch(r){console.error("[POS] Error lookupPosMember:",r),a&&(a.innerHTML=`<p class="text-xs text-rose-500 p-2">Gagal memeriksa data: ${u(r.message||"Koneksi error")}</p>`)}finally{s&&(s.disabled=!1,s.innerHTML='<i class="fa-solid fa-magnifying-glass mr-1.5"></i><span>Cek</span>')}},Ba=async()=>{if(w.length===0){g("Keranjang kosong!","warning");return}const e=re();if(e>0&&$()<e){g(`Transaksi ditolak! Total transaksi (${x($())}) tidak boleh di bawah total harga modal HPP (${x(e)})!`,"error"),typeof window.triggerHaptic=="function"&&window.triggerHaptic("heavy");return}const t=b.isMember?b.name||"Member Toko":d("pos-cust-name")?.value?.trim()||"Pelanggan Umum",a=b.isMember?b.phone||d("pos-cust-phone")?.value?.trim()||"":d("pos-cust-phone")?.value?.trim()||"";if(b.isNewTempo&&!a){g("No. HP wajib diisi untuk tempo!","warning");return}if(D==="cash"&&(W=ce(d("pos-paid-input")?.value||0),W<$())){g(`Uang kurang! Minimal ${x($())}`,"warning");return}b.name=t,b.phone=a;const s=D==="tempo"?ce(d("pos-dp-input")?.value||0):0,r=D==="transfer"&&d("pos-bank-sel")?.value||"",n=D==="tempo"&&!!(b.isMember&&b.paylaterActive&&d("pos-use-paylater")?.checked),o=n?Math.max(0,(b.paylaterLimit||0)-(b.paylaterUsed||0)):0;if(n){const f=$()>o?$()-o:0;if(s<f){g(`DP tidak mencukupi limit PayLater! Minimal DP: ${x(f)}`,"warning");return}}const i=n?Math.min($()-s,o):0,l=d("pos-process-btn");l&&(l.disabled=!0,l.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i>Memproses...');const p=m.store?.useStock===!0||m.store?.useStock==="true";if(p)for(const f of w){const h=(m.products||[]).find(M=>String(M.id)===String(f.id));if(!h)continue;const S=parseFloat(f.qty)||0;if(f.variantName&&h.variants){const M=(h.variants||[]).find(j=>j.name===f.variantName),k=parseFloat(M&&M.stock!==void 0?M.stock:0);if(k<S){g(`Stok ${f.name} (${f.variantName}) tidak cukup! Sisa: ${k}`,"warning"),l&&(l.disabled=!1,l.innerHTML='<i class="fa-solid fa-check-circle mr-2"></i>Selesaikan Transaksi');return}}else{const M=parseFloat(h.stock!==void 0?h.stock:0);if(M<S){g(`Stok ${f.name} tidak cukup! Sisa: ${M}`,"warning"),l&&(l.disabled=!1,l.innerHTML='<i class="fa-solid fa-check-circle mr-2"></i>Selesaikan Transaksi');return}}}try{const f=us(),h=typeof window.getCashierSession=="function"?window.getCashierSession():null,S=h?.name||m.store?.name||"Kasir",M=h?.uid||window.__currentAdminUid||"admin",k=new Date().toISOString(),j=Fe.firestore.FieldValue.serverTimestamp(),B=D==="tempo"?"Diproses":"Selesai",c=K(),T=c&&c.status==="open"?c.id:null,te=c&&c.status==="open"?c.shiftNo||c.id:null,ne={orderId:f,txId:f,source:"pos",channel:"pos",status:B,timestamp:j,dateString:k,dateMs:Date.now(),shiftId:T,shiftNo:te,cashier:M,cashierName:S,customer:{name:t,phone:a,wa:a,address:"Beli Langsung di Kasir (POS)",deliveryMethod:"takeaway",isMember:!!b.isMember,memberId:b.memberId||null},customerName:t,customerPhone:a,customerType:b.isMember?"Member":"Pelanggan Umum",items:w.map(y=>({id:y.id,name:y.name,price:parseFloat(y.price)||0,basePrice:parseFloat(y.basePrice||y.price)||0,hpp:y.hpp!=null?parseFloat(y.hpp):He(y)||0,qty:parseFloat(y.qty)||1,discount:parseFloat(y.discount)||0,subtotal:parseFloat(y.subtotal)||0,variantName:y.variantName||"",isVariant:!!y.isVariant,isWholesale:!!y.isWholesale,effectivePrice:parseFloat(y.price)||0,poTime:y.poTime||"",unit:y.unit||"pcs"})),hasPO:w.some(y=>y.poTime&&String(y.poTime).trim()!==""),payment:{method:D,subtotal:ae(),productDiscount:ce(J),shippingCost:0,pointDiscount:ye(),grandTotal:$(),paid:D==="cash"?W:D==="tempo"?s:$(),change:D==="cash"?ka():0,bank:r,paymentStatus:D==="tempo"?$()-s<=0?"lunas":"hutang":"lunas",subMethod:n?"paylater":D==="tempo"?"tempo":"",isPaylater:n,paylaterUsed:i,dp:s,tempoDp:s,tempoBalance:D==="tempo"?Math.max(0,$()-s):0,tempoDueDate:Date.now()+30*24*60*60*1e3,tempoPenaltyRate:1,tempoPenaltyStopped:!1},subtotal:ae(),globalDiscount:ee(),pointDiscount:ye(),pointsRedeemed:(U||0)+(C&&parseFloat(C.pointsCost)||0),claimedReward:C?{id:C.id,name:C.name,pointsCost:parseFloat(C.pointsCost)||0}:null,discountType:_,discountVal:N,totalHpp:e,grossProfit:Math.max(0,$()-e),total:$(),isTempo:D==="tempo",pointsEarned:0,notes:""};if(b.isMember&&a){const E=(typeof window.calculateCartPoints=="function"?window.calculateCartPoints(w,m.store):{totalPoints:0}).totalPoints||0;ne.pointsEarned=E;const Q=(U||0)+(C&&parseFloat(C.pointsCost)||0),L=E-Q,O=Math.max(0,(parseFloat(b.points)||0)+L);ne.finalMemberPoints=O;try{const v=a.replace(/\D/g,""),H=String(b.memberId||v);if(await A.collection("freshmart").doc("cms_data").collection("customers").doc(H).set({points:Fe.firestore.FieldValue.increment(L),lastOrderAt:k},{merge:!0}),m.customers){const z=m.customers.find(X=>X&&(String(X.id)===H||String(X.phone).replace(/\D/g,"")===v));z&&(z.points=O)}b.points=O}catch(v){console.warn("[POS] Gagal update poin member:",v)}if(C&&C.id)try{await A.collection("freshmart").doc("cms_data").collection("rewards").doc(String(C.id)).update({stock:Fe.firestore.FieldValue.increment(-1)});const v=(m.rewards||[]).find(H=>String(H.id)===String(C.id));v&&v.stock!==void 0&&(v.stock=Math.max(0,(parseInt(v.stock)||0)-1))}catch(v){console.warn("[POS] Gagal update stok reward:",v)}}if(n&&b.phone)try{const y=b.phone.replace(/\D/g,""),E=String(b.memberId||y);if(await A.collection("freshmart").doc("cms_data").collection("customers").doc(E).set({paylaterUsed:Fe.firestore.FieldValue.increment(i)},{merge:!0}),m.customers){const L=m.customers.find(O=>O&&(String(O.id)===E||String(O.phone).replace(/\D/g,"")===y));L&&(L.paylaterUsed=(parseFloat(L.paylaterUsed)||0)+i)}b.paylaterUsed=(parseFloat(b.paylaterUsed)||0)+i}catch(y){console.warn("[POS] Gagal potong limit PayLater:",y)}if(await A.collection("freshmart_orders").doc(f).set(ne),xa(ne),p){const y={};w.forEach(L=>{const O=L.id!=null?L.id.toString():null;if(!O)return;y[O]||(y[O]={main:0,variants:{}});const v=parseFloat(L.qty)||0;L.variantName?y[O].variants[L.variantName]=(y[O].variants[L.variantName]||0)+v:y[O].main+=v});const E=Object.keys(y),Q=[];for(const L of E){const O=y[L],v=(m.products||[]).find(z=>String(z.id)===L);if(!v)continue;const H={};O.main>0&&(v.stock=Math.max(0,(parseFloat(v.stock)||0)-O.main),H.stock=v.stock,v.stock===0&&(v.isActive="false",H.isActive="false"),v.totalSold=(parseFloat(v.totalSold)||0)+O.main,H.totalSold=v.totalSold),Object.keys(O.variants).length>0&&v.variants&&(Object.keys(O.variants).forEach(z=>{const X=v.variants.findIndex(Ga=>Ga.name===z);X>-1&&(v.variants[X].stock=Math.max(0,(parseFloat(v.variants[X].stock)||0)-O.variants[z]),v.variants[X].stock===0&&(v.variants[X].isActive=!1),v.variants[X].totalSold=(parseFloat(v.variants[X].totalSold)||0)+O.variants[z])}),H.variants=v.variants);const Me=(m.products||[]).findIndex(z=>String(z.id)===L);Me>-1&&(m.products[Me]=v);try{await A.collection("freshmart").doc("cms_data").collection("products").doc(L).update(H),Q.push(L)}catch(z){console.warn("[POS] Gagal update stok produk di Firestore:",L,z)}}if(Q.length>0)try{await A.collection("freshmart").doc("cms_data").update({lastUpdate:Fe.firestore.FieldValue.increment(1),updateType:"stock_change",updatedProductIds:Q})}catch{}}It(),Ie(!0);const q={...ne};w=[],J=0,N=0,_="rp",U=0,C=null,R(),V(),hs(q)}catch(f){console.error("[POS] Error:",f),g("Gagal menyimpan transaksi. Coba lagi.","error"),l&&(l.disabled=!1,l.innerHTML='<i class="fa-solid fa-check-circle mr-2"></i>Selesaikan Transaksi')}},hs=e=>{const t=e.payment.method==="cash"?`<p class="text-sm text-slate-500">Kembalian: <span class="font-black text-emerald-600">${x(e.payment.change)}</span></p>`:e.payment.method==="tempo"?'<p class="text-sm text-amber-600 font-semibold">⚠️ Dicatat sebagai Piutang Tempo</p>':`<p class="text-sm text-slate-500">Metode: ${e.payment.method.toUpperCase()}</p>`,a=JSON.stringify(e).replace(/"/g,"&quot;"),s=!!document.getElementById("pos-admin-container")||typeof window.cTab=="function"&&window.cTab()==="pos";document.body.insertAdjacentHTML("beforeend",`
    <div id="pos-success-modal" class="fixed inset-0 z-[9999] flex items-center justify-center p-4" style="background:rgba(15,23,42,0.65);backdrop-filter:blur(4px)">
      <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-sm border border-slate-200/80 dark:border-slate-800">
        <div class="p-6 text-center">
          <div class="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-4"><i class="fa-solid fa-circle-check text-emerald-500 text-3xl"></i></div>
          <h2 class="font-black text-lg text-slate-900 dark:text-white mb-1">Transaksi Berhasil!</h2>
          <p class="text-xs text-slate-400 mb-2">#${u(e.txId)}</p>
          <p class="text-2xl font-black mb-1" style="color:var(--color-primary)">${x(e.total)}</p>
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
            <span>Diskon Poin: -${x(e.pointDiscount||e.payment?.pointDiscount)}</span>
          </div>`:""}
          ${e.claimedReward?`
          <div class="mt-1.5 p-2 rounded-xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 text-xs font-bold flex items-center justify-center gap-1.5">
            <i class="fa-solid fa-gift text-purple-500"></i>
            <span>Klaim Hadiah: ${u(e.claimedReward.name)}</span>
          </div>`:""}
        </div>
        <div class="px-6 pb-6 flex flex-col gap-2">
          <button onclick="window.printPOSReceiptDirect(${a})" class="w-full py-3.5 rounded-2xl text-white font-black text-sm shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer hover:opacity-95" style="background:var(--color-primary)">
            <i class="fa-solid fa-bolt text-amber-300"></i><i class="fa-solid fa-print"></i> Cetak Struk Langsung (RawBT)
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
    </div>`),(typeof me=="function"?me():{}).autoPrintOrder&&typeof window.printPOSReceiptDirect=="function"&&setTimeout(()=>{window.printPOSReceiptDirect(e)},300)},Na=e=>{document.getElementById("pos-success-modal")?.remove(),(typeof me=="function"?me():{}).directPrint!==!1&&typeof window.printPOSReceiptDirect=="function"?window.printPOSReceiptDirect(e):ft(e)},ft=e=>{window._lastPOSTx=e;const t=typeof me=="function"?me():{paperSize:"58mm"},a=typeof window.getPaperCols=="function"?window.getPaperCols(t.paperSize):t.paperSize==="80mm"?48:32,s=a>=40,r=t.headerText||m.store?.name||"TOKO PUTRI",n=m.store?.wa||"",o=m.store?.address||"",i=t.footerText||"Terima Kasih Atas Kunjungan Anda!",l=typeof window.formatCompactDate=="function"?window.formatCompactDate(e.dateMs||Date.now(),s):new Date(e.dateMs||Date.now()).toLocaleString("id-ID"),p=(e.items||[]).map(h=>{const S=h.variantName?` (${u(h.variantName)}${h.colorCode?" "+u(h.colorCode):""})`:"",M=h.effectivePrice||h.price||0,k=h.subtotal!==void 0?h.subtotal:parseFloat(h.qty||1)*M;return`
        <tr>
            <td colspan="2" style="padding-top:4px;font-weight:bold;word-break:break-word;">${u(h.name)}${S}${h.poTime?" [PO]":""}</td>
        </tr>
        <tr>
            <td style="padding-bottom:3px;color:#475569;font-size:10.5px;">&nbsp;&nbsp;${I(h.qty)} ${u(h.unit||"pcs")} x ${Math.round(M).toLocaleString("id-ID")}</td>
            <td style="text-align:right;padding-bottom:3px;white-space:nowrap;font-weight:bold;">${Math.round(k).toLocaleString("id-ID")}</td>
        </tr>
        ${h.discount&&h.discount>0?`<tr><td style="padding-bottom:2px;color:#e11d48;font-size:10px;">&nbsp;&nbsp;(Diskon)</td><td style="text-align:right;color:#e11d48;font-size:10px;">-${Math.round(h.discount).toLocaleString("id-ID")}</td></tr>`:""}
        ${h.poTime?`<tr><td colspan="2" style="font-size:9.5px;font-style:italic;color:#64748b;">&nbsp;&nbsp;* Estimasi PO: ${u(h.poTime)}</td></tr>`:""}
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
                <div class="flex justify-between"><span>No : <b>#${u(e.txId)}</b></span><span>${u(l)}</span></div>
                <div class="flex justify-between"><span>Kasir: ${u(e.cashierName||"Kasir")}</span><span>Plg: ${u(e.customer?.name||"Umum")}</span></div>
                ${e.customer?.phone?`<div>HP  : ${u(e.customer.phone)}</div>`:""}
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <table class="w-full text-[11px] border-collapse">
                    ${p}
                </table>
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <div class="flex justify-between"><span>Subtotal</span><span>${x(e.subtotal)}</span></div>
                ${(e.globalDiscount||0)>0?`<div class="flex justify-between text-rose-500 font-bold"><span>${f}</span><span>- ${x(e.globalDiscount)}</span></div>`:""}
                ${(e.pointDiscount||0)>0?`<div class="flex justify-between text-emerald-600 font-bold"><span>Diskon Poin (${e.pointsRedeemed||0} Pts)</span><span>- ${x(e.pointDiscount)}</span></div>`:""}
                ${e.claimedReward?`<div class="flex justify-between text-purple-600 font-bold"><span>[Klaim Hadiah]</span><span class="truncate max-w-[150px]">${u(e.claimedReward.name)}</span></div>`:""}
                ${e.payment?.ppnAmount&&e.payment.ppnAmount>0?`<div class="flex justify-between"><span>${e.payment.ppnType==="inclusive"?"Inc. PPN":"PPN"} (${e.payment.ppnRate||11}%)</span><span>${x(e.payment.ppnAmount)}</span></div>`:""}
                <div class="flex justify-between font-black text-sm pt-1 border-t border-slate-200 dark:border-slate-700"><span>TOTAL</span><span style="color:var(--color-primary)">${x(e.total)}</span></div>
                ${e.payment.method==="cash"?`<div class="flex justify-between"><span>Bayar Tunai</span><span>${x(e.payment.paid)}</span></div><div class="flex justify-between font-bold text-emerald-600"><span>Kembalian</span><span>${x(e.payment.change)}</span></div>`:""}
                ${e.payment.method==="tempo"?`
                    ${e.payment.isPaylater||e.isPaylater?`<div class="flex justify-between font-bold text-emerald-600"><span>Plafon PayLater Digunakan</span><span>${x(e.payment.paylaterUsed||e.total-(e.payment.tempoDp||e.payment.dp||0))}</span></div>`:""}
                    <div class="flex justify-between"><span>Uang Muka (DP)</span><span>${x(e.payment.tempoDp||e.payment.dp||0)}</span></div>
                    <div class="flex justify-between font-bold ${e.payment.isPaylater||e.isPaylater?"text-emerald-700 dark:text-emerald-400":"text-amber-600"}">
                        <span>${e.payment.isPaylater||e.isPaylater?"Tagihan PayLater":"Sisa Piutang"}</span>
                        <span>${x(e.payment.tempoBalance||0)}</span>
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
    </div>`)},Kt=()=>{if(window._lastPOSTx&&typeof window.printPOSReceiptDirect=="function"){window.printPOSReceiptDirect(window._lastPOSTx);return}const e=d("pos-receipt-paper-box");e&&(typeof window.renderThermalDOMAndPrint=="function"?window.renderThermalDOMAndPrint(e.innerHTML):window.print())},_a=({isStorefront:e})=>{const a=(typeof window.getCashierSession=="function"?window.getCashierSession():null)?.name||(e?"Kasir":"Admin Seller"),s=u(m.store?.name||"Toko Putri");return`
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
                            <button id="pos-view-btn-grid" onclick="window.setPOSViewMode('grid')" class="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer ${le==="grid"?"text-white shadow-xs":"text-slate-500 hover:text-slate-800 dark:text-slate-400"}" style="${le==="grid"?"background:var(--color-primary)":""}" title="Tampilan Grid Foto">
                                <i class="fa-solid fa-grip"></i>
                            </button>
                            <button id="pos-view-btn-list" onclick="window.setPOSViewMode('list')" class="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer ${le==="list"?"text-white shadow-xs":"text-slate-500 hover:text-slate-800 dark:text-slate-400"}" style="${le==="list"?"background:var(--color-primary)":""}" title="Tampilan List Baris Kompak">
                                <i class="fa-solid fa-list-ul"></i>
                            </button>
                        </div>
                    </div>
                    <!-- Kategori Chips -->
                    <div id="pos-cat-filter" class="flex gap-1.5 overflow-x-auto hide-scrollbar pb-0.5"></div>
                </div>

                <!-- Product Catalog Container -->
                <div id="pos-catalog-grid" class="${le==="list"?"pos-catalog-list-mode":"pos-catalog-grid-mode"}"></div>
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
                    <div class="flex justify-between text-xs text-slate-500 font-medium">
                        <span class="flex items-center gap-1"><i class="fa-solid fa-coins text-amber-500 text-[10px]"></i> Total Modal (HPP)</span>
                        <span class="pos-total-hpp-target font-bold text-amber-600 dark:text-amber-400">Rp 0</span>
                    </div>
                    <div class="flex justify-between text-xs text-slate-500 font-medium">
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
                    <button onclick="window.openPayModal()" class="pos-pay-btn-target w-full py-3.5 rounded-2xl text-white font-black text-sm shadow-xl disabled:opacity-40 disabled:cursor-not-allowed active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer" style="background:var(--color-primary);box-shadow:0 4px 14px rgba(var(--color-primary-rgb),0.35)">
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
                    <div class="flex justify-between text-xs text-slate-500 font-medium">
                        <span class="flex items-center gap-1"><i class="fa-solid fa-coins text-amber-500 text-[10px]"></i> Total Modal (HPP)</span>
                        <span class="pos-total-hpp-target font-bold text-amber-600 dark:text-amber-400">Rp 0</span>
                    </div>
                    <div class="flex justify-between text-xs text-slate-500 font-medium">
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
                    <button onclick="window.closePOSCartDrawer(); window.openPayModal();" class="pos-pay-btn-target w-full py-3.5 rounded-2xl text-white font-black text-xs sm:text-sm shadow-xl disabled:opacity-40 disabled:cursor-not-allowed active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer" style="background:var(--color-primary);box-shadow:0 4px 14px rgba(var(--color-primary-rgb),0.35)">
                        <i class="fa-solid fa-cash-register"></i>
                        <span class="btn-text">LANJUT KE PEMBAYARAN</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
    `},Ea=()=>{try{de="",we="",w=[],J=0;const e=d("view-pos-cashier");if(!e)return;const t=d("admin-content"),a=d("view-admin");t&&a?.classList.contains("admin-pos-mode")&&(t.innerHTML="",a.classList.remove("admin-pos-mode")),e.innerHTML=_a({isStorefront:!0}),V(),R(),Pe(),Ke(),Sa(),va(),ge(),qa(),typeof ue=="function"?ue().then(s=>{(!s||s.status!=="open")&&G()}).catch(()=>{xe()||G()}):setTimeout(()=>{xe()||G()},350)}catch(e){console.error("Gagal render POS Storefront:",e)}},Ka=()=>{try{de="",we="";const e=d("view-admin");e&&e.classList.add("admin-pos-mode");const t=d("view-pos-cashier");if(t&&(t.innerHTML=""),!d("admin-content"))return;za("admin-content",`
            <div class="h-full w-full flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-md bg-white dark:bg-slate-900 min-h-0">
                ${_a({isStorefront:!1})}
            </div>
        `),V(),R(),Pe(),Ke(),Sa(),va(),ge(),qa(),typeof ue=="function"?ue().then(s=>{(!s||s.status!=="open")&&G()}).catch(()=>{xe()||G()}):setTimeout(()=>{xe()||G()},350)}catch(e){console.error("Gagal render POS Admin:",e);const t=d("admin-content");t&&(t.innerHTML=`
                <div class="h-full w-full flex flex-col items-center justify-center p-6 text-center">
                    <i class="fa-solid fa-triangle-exclamation text-4xl text-amber-500 mb-3"></i>
                    <h3 class="text-base font-bold text-slate-800 dark:text-white">Gagal Membuka Terminal POS</h3>
                    <p class="text-xs text-slate-500 mt-1 max-w-sm">Terjadi kendala saat memuat terminal. Silakan coba muat ulang.</p>
                    <button onclick="window.renderPOS()" class="mt-4 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-xs font-bold transition-all shadow-md">
                        <i class="fa-solid fa-arrows-rotate mr-1.5"></i>Muat Ulang Terminal
                    </button>
                </div>
            `)}},qa=()=>{window.setPOSViewMode=Tt,window.posAddToCart=it,window.posAddToCartQty=Pa,window.addToCartPOSWithVariant=Ma,window.posUpdateQty=Ta,window.posSetQty=$a,window.posFormatQty=I,window.posFQty=Ne,window.posSetItemDisc=Ca,window.posRemoveItem=lt,window.posClearCart=Aa,window.openPayModal=Oa,window.closePayModal=It,window.getPOSCart=()=>w,window.getCartTotalHpp=re,window.setPosCustomerType=ja,window.setPosPayMethod=Ft,window.updatePosChange=Rt,window.posSetQuickCash=Bt,window.ensureCustomersLoaded=ge,window.ensureBanksLoaded=Qe,window.lookupPosMember=We,window.debouncedLookupPosMember=Et,window.selectPosMember=Nt,window.resetPosMember=_t,window.processPOSTx=Ba,window.setPosPointsRedeemed=Ia,window.selectPosReward=Fa,window.deselectPosReward=Ra,window.posMemberPointsDiscount=ye,window.getMaxRedeemablePoints=ot,window.getPointValue=qe,window.printPOSReceipt=Na,window.previewPOSReceiptThenPrint=ft,window.posSetGlobalDisc=e=>{_e(e)},window.posSetDiscountType=qt,window.posSetDiscountVal=_e,window.posApplyQuickDiscount=Ut,window.openPOSCameraScanner=ut,window.closePOSCameraScanner=Se,window.togglePOSScannerFacing=Gt,window.togglePOSScannerTorch=Vt,window.togglePOSScannerMode=Qt,window.posProcessManualBarcode=zt,window.posSearchScannedCode=Wt,window.executePOSPrintDirect=Kt,window.getActiveShift=K,window.isShiftActive=xe,window.syncActiveShiftFromCloud=ue,window.openPOSOpenShiftModal=G,window.closePOSOpenShiftModal=Le,window.openPOSShiftModal=Y,window.openPOSShiftSummaryModal=Y,window.closePOSShiftSummaryModal=rt,window.openPOSCloseShiftModal=yt,window.closePOSCloseShiftModal=Ee,window.renderShiftHeaderBadge=Ke,window.printShiftSettlementReceipt=St,window.executeShiftPrintDirect=Pt,window.posCatFilter=e=>{we=e,V()},window.posSearchFn=e=>{de=typeof e=="string"?e:e?.value||"",document.querySelectorAll("#pos-search-input").forEach(t=>{t.value!==de&&(t.value=de)}),V()},window.posRenderCatalog=V,window.posRenderCart=R,window.refreshPOSCatalog=()=>{try{V()}catch(e){console.warn("refreshPOSCatalog error:",e)}},window.openPOSCartDrawer=Dt,window.closePOSCartDrawer=Ie,window.playCashierBeep=oe,window.openPOSHistory=()=>{typeof window.openAdminTab=="function"?window.openAdminTab("orders"):typeof window.showToast=="function"&&window.showToast("Semua transaksi kasir terpusat di menu Pesanan CMS Admin")},window.destroyBarcodeListener=nt,window.playCashierChime=Ue,window.posHoldCurrentCart=ct,window.closePOSHoldPrompt=pt,window.posConfirmHoldCart=$t,window.openPOSHeldModal=Ve,window.closePOSHeldModal=Ge,window.posRecallHeldCart=Ct,window.posHoldCurrentAndRecall=Ot,window.posOverwriteAndRecall=Lt,window.posDeleteHeldCart=Ht,window.posExecuteDeleteHeld=jt,window.renderHeldBadges=Pe},qt=e=>{_=e==="percent"?"percent":"rp",J=ee(),R()},_e=e=>{const t=Math.max(0,parseFloat(e)||0),a=re(),s=ae(),r=a>0?Math.max(0,s-a):s;if(_==="percent"){const n=Math.min(100,t),o=Math.round(s*n/100);if(a>0&&o>r){const i=s>0?Math.floor(r/s*100):0;g(`Diskon ${n}% ditolak karena melebihi modal (Total HPP ${x(a)})! Diskon maksimal: ${i}% (${x(r)})`,"warning"),N=i,J=Math.round(s*i/100),R(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("heavy");return}N=n,J=o}else{const n=t;if(a>0&&n>r){g(`Diskon ditolak! Total transaksi tidak boleh di bawah harga modal (Total HPP ${x(a)}). Maksimal diskon: ${x(r)}`,"warning"),N=r,J=r,R(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("heavy");return}N=n,J=n}R()},Ut=(e,t)=>{t&&(_=t),_e(e),oe()},ut=async()=>{if(d("pos-camera-scanner-modal"))return;typeof window.pushModalHistory=="function"&&window.pushModalHistory("posCameraScanner"),document.body.insertAdjacentHTML("beforeend",`
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
    </div>`),await Ua()},Ua=async()=>{const e=d("pos-camera-video");if(e)try{const t={video:{facingMode:{ideal:xt},width:{ideal:1280},height:{ideal:720}},audio:!1},a=await navigator.mediaDevices.getUserMedia(t);ve=a,e.srcObject=a,await e.play();const s=a.getVideoTracks();if(s.length>0){be=s[0];const r=be.getCapabilities?be.getCapabilities():{},n=d("pos-scanner-torch-btn");n&&(r.torch?n.classList.remove("hidden"):n.classList.add("opacity-40"))}if(typeof window.BarcodeDetector<"u")try{Je=new BarcodeDetector({formats:["ean_13","ean_8","upc_a","upc_e","code_128","code_39","code_93","qr_code","data_matrix"]})}catch{Je=null}Ae&&clearInterval(Ae),Ae=setInterval(async()=>{if(!(!Je||!e||e.readyState<2))try{const r=await Je.detect(e);if(r&&r.length>0){const n=r[0].rawValue?.trim();n&&Va(n)}}catch{}},180)}catch(t){console.warn("[POS Scanner] Gagal akses kamera:",t);const a=d("pos-scanner-status-pill");a&&(a.innerHTML='<span class="text-rose-400 font-bold"><i class="fa-solid fa-triangle-exclamation mr-1"></i>Kamera tidak dapat diakses</span>'),g("Izin kamera ditolak atau kamera sedang digunakan aplikasi lain.","warning")}},Va=e=>{const t=Date.now();if(e===Zt&&t-ea<1800)return;Zt=e,ea=t;const a=e.toLowerCase(),s=(m.products||[]).find(p=>p&&p.isActive!=="false"&&p.isActive!==!1&&(p.barcode&&p.barcode.toLowerCase()===a||p.sku&&p.sku.toLowerCase()===a||p.id&&String(p.id).toLowerCase()===a)),r=d("pos-scanner-reticle"),n=d("pos-scanner-status-pill"),o=d("pos-last-scanned-banner"),i=d("pos-last-scanned-text"),l=d("pos-last-scanned-price");if(s){if(r&&(r.classList.add("border-emerald-300","scale-105","bg-emerald-500/20"),setTimeout(()=>{r.classList.remove("border-emerald-300","scale-105","bg-emerald-500/20")},300)),oe(),s.variants&&s.variants.length>0){n&&(n.innerHTML='<span class="text-amber-300 font-bold">Buka pilihan varian...</span>'),Se(),wa().then(()=>{typeof window.openPOSVariantSheet=="function"&&window.openPOSVariantSheet(s.id)});return}it(s.id)?(o&&i&&l&&(i.textContent=s.name,l.textContent=x(parseFloat(s.price)||0),o.classList.remove("hidden")),n&&(n.innerHTML=`<span class="text-emerald-300 font-black"><i class="fa-solid fa-check mr-1"></i>${u(s.name)} (+1)</span>`,setTimeout(()=>{n&&(n.innerHTML='<span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span><span>Menunggu barcode...</span>')},1500)),Xe||(Se(),g(`Ditambahkan: ${s.name}`,"success"))):n&&(n.innerHTML=`<span class="text-rose-400 font-bold"><i class="fa-solid fa-ban mr-1"></i>Stok "${u(s.name)}" Habis</span>`,setTimeout(()=>{n&&(n.innerHTML='<span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span><span>Menunggu barcode...</span>')},2e3))}else r&&(r.classList.add("border-rose-500","bg-rose-500/20"),setTimeout(()=>{r.classList.remove("border-rose-500","bg-rose-500/20")},400)),n&&(n.innerHTML=`<span class="text-rose-400 font-bold"><i class="fa-solid fa-xmark mr-1"></i>Barcode "${e}" tidak ditemukan</span>`)},Se=(e=!1)=>{if(Ae&&(clearInterval(Ae),Ae=null),ve){try{ve.getTracks().forEach(a=>a.stop())}catch{}ve=null}be=null,Re=!1;const t=d("pos-camera-scanner-modal");t&&(!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("posCameraScanner",!1,()=>t.remove()):t.remove())},Vt=async()=>{if(be)try{if(!(be.getCapabilities?be.getCapabilities():{}).torch){g("Lampu senter (torch) tidak didukung kamera ini.");return}Re=!Re,await be.applyConstraints({advanced:[{torch:Re}]});const t=d("pos-scanner-torch-btn");t&&(Re?(t.classList.add("bg-amber-500","text-white"),t.classList.remove("bg-slate-800","text-slate-300")):(t.classList.remove("bg-amber-500","text-white"),t.classList.add("bg-slate-800","text-slate-300")))}catch(e){console.warn("Gagal toggle torch:",e)}},Gt=async()=>{xt=xt==="environment"?"user":"environment",ve&&(ve.getTracks().forEach(e=>e.stop()),ve=null),await Ua()},Qt=()=>{Xe=!Xe;const e=d("pos-scanner-mode-btn");e&&(Xe?(e.textContent="Terus-menerus",e.className="px-2.5 py-1 rounded-lg bg-emerald-950/60 border border-emerald-600/60 text-emerald-400 text-[10px] font-black tracking-wider uppercase transition-all cursor-pointer"):(e.textContent="Scan Sekali",e.className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-[10px] font-black tracking-wider uppercase transition-all cursor-pointer"))},zt=e=>{if(!e||!e.trim())return;Va(e.trim());const t=d("pos-manual-barcode-input");t&&(t.value="")},Wt=e=>{Se();const t=d("pos-search-input");t&&(t.value=e,de=e,V())};window.setPOSViewMode=Tt;window.renderPOSStorefront=Ea;window.renderPOS=Ka;window.destroyBarcodeListener=nt;window.openPOSCartDrawer=Dt;window.closePOSCartDrawer=Ie;window.posSetQuickCash=Bt;window.playCashierBeep=oe;window.playCashierChime=Ue;window.posHoldCurrentCart=ct;window.closePOSHoldPrompt=pt;window.posConfirmHoldCart=$t;window.openPOSHeldModal=Ve;window.closePOSHeldModal=Ge;window.posRecallHeldCart=Ct;window.posHoldCurrentAndRecall=Ot;window.posOverwriteAndRecall=Lt;window.posDeleteHeldCart=Ht;window.posExecuteDeleteHeld=jt;window.renderHeldBadges=Pe;window.ensureCustomersLoaded=ge;window.ensureBanksLoaded=Qe;window.lookupPosMember=We;window.debouncedLookupPosMember=Et;window.selectPosMember=Nt;window.resetPosMember=_t;window.posSetDiscountType=qt;window.posSetDiscountVal=_e;window.posApplyQuickDiscount=Ut;window.openPOSCameraScanner=ut;window.closePOSCameraScanner=Se;window.togglePOSScannerFacing=Gt;window.togglePOSScannerTorch=Vt;window.togglePOSScannerMode=Qt;window.posProcessManualBarcode=zt;window.posSearchScannedCode=Wt;window.executePOSPrintDirect=Kt;window.previewPOSReceiptThenPrint=ft;window.getActiveShift=K;window.isShiftActive=xe;window.syncActiveShiftFromCloud=ue;window.openPOSOpenShiftModal=G;window.closePOSOpenShiftModal=Le;window.openPOSShiftModal=Y;window.openPOSShiftSummaryModal=Y;window.closePOSShiftSummaryModal=rt;window.openPOSCloseShiftModal=yt;window.closePOSCloseShiftModal=Ee;window.renderShiftHeaderBadge=Ke;window.printShiftSettlementReceipt=St;window.executeShiftPrintDirect=Pt;window.getPOSCart=()=>w;const ys=Object.freeze(Object.defineProperty({__proto__:null,addToCart:it,addToCartWithVariant:Ma,applyMemberToPos:tt,clearCart:Aa,closePOSCameraScanner:Se,closePOSCartDrawer:Ie,closePOSHeldModal:Ge,closePOSHoldPrompt:pt,closePayModal:It,debouncedLookupPosMember:Et,deselectPosReward:Ra,destroyBarcodeListener:nt,ensureBanksLoaded:Qe,ensureCustomersLoaded:ge,executePOSPrintDirect:Kt,formatQty:I,getCartTotalHpp:re,getMaxRedeemablePoints:ot,getPointValue:qe,getProductStockInfo:De,lookupPosMember:We,openPOSCameraScanner:ut,openPOSCartDrawer:Dt,openPOSHeldModal:Ve,openPayModal:Oa,playCashierBeep:oe,playCashierChime:Ue,posAddToCartQty:Pa,posApplyQuickDiscount:Ut,posConfirmHoldCart:$t,posDeleteHeldCart:Ht,posDiscountAmount:ee,posExecuteDeleteHeld:jt,posHoldCurrentAndRecall:Ot,posHoldCurrentCart:ct,posMemberPointsDiscount:ye,posOverwriteAndRecall:Lt,posProcessManualBarcode:zt,posRecallHeldCart:Ct,posSearchScannedCode:Wt,posSetDiscountType:qt,posSetDiscountVal:_e,posSetQuickCash:Bt,posTogglePaylater:Ha,previewPOSReceiptThenPrint:ft,printPOSReceipt:Na,processPOSTx:Ba,removeFromCart:lt,renderCatalog:V,renderHeldBadges:Pe,renderPOS:Ka,renderPOSStorefront:Ea,renderPosMemberResult:ze,resetPosMember:_t,selectPosMember:Nt,selectPosReward:Fa,setItemDisc:Ca,setPOSViewMode:Tt,setPosCustomerType:ja,setPosPayMethod:Ft,setPosPointsRedeemed:Ia,setQty:$a,stopClock:ya,togglePOSScannerFacing:Gt,togglePOSScannerMode:Qt,togglePOSScannerTorch:Vt,updatePosChange:Rt,updateQty:Ta},Symbol.toStringTag,{value:"Module"}));export{ys as a,vs as p,cs as r};

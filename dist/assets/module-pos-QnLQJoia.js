const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/pos-variant-sheet-BBt1U6O7.js","assets/module-print-BE76b_Ra.js","assets/vendor-firebase-core-D2OF5R23.js","assets/vendor-firebase-db-BIUZcnOd.js"])))=>i.map(i=>d[i]);
import{a as m,c as La,G as Pa,k as g,z as de,e as p,ao as Da,q as j,i as x,aJ as _e,F as Ms,aK as ee,H as It,D as Rt,b as $s,aq as Cs,m as As,f as Os}from"./module-print-BE76b_Ra.js";import{f as Je}from"./vendor-firebase-core-D2OF5R23.js";const ge={enabled:!0,minOrder:2e4,maxOrder:1e7,noticeText:"Cicilan transparan tanpa bunga atau biaya tersembunyi. Tagihan jatuh tempo setiap bulan.",tenors:{"30d":{enabled:!0,label:"30 Hari (1x Bayar)",shortLabel:"30 Hari",months:1,days:30,adminFeeType:"flat",adminFeeValue:0,serviceFeeType:"flat",serviceFeeValue:0},"2m":{enabled:!0,label:"2 Bulan (Cicilan 2x)",shortLabel:"2 Bulan",months:2,days:60,adminFeeType:"flat",adminFeeValue:1500,serviceFeeType:"percent",serviceFeeValue:1.5},"3m":{enabled:!0,label:"3 Bulan (Cicilan 3x)",shortLabel:"3 Bulan",months:3,days:90,adminFeeType:"flat",adminFeeValue:2500,serviceFeeType:"percent",serviceFeeValue:2.5}}},rt=()=>{const e=m?.store?.paylater||{},t=e.tenors||{},a=(s,r)=>{const o=t[s]||{};return{enabled:o.enabled!==void 0?!!o.enabled:r.enabled,label:o.label||r.label,shortLabel:o.shortLabel||r.shortLabel,months:parseInt(o.months,10)||r.months,days:parseInt(o.days,10)||r.days,adminFeeType:o.adminFeeType==="percent"?"percent":"flat",adminFeeValue:Math.max(0,parseFloat(o.adminFeeValue)||0),serviceFeeType:o.serviceFeeType==="percent"?"percent":"flat",serviceFeeValue:Math.max(0,parseFloat(o.serviceFeeValue)||0)}};return{enabled:e.enabled!==void 0?e.enabled===!0||e.enabled==="true":ge.enabled,minOrder:Math.max(0,parseFloat(e.minOrder!==void 0?e.minOrder:ge.minOrder)),maxOrder:Math.max(0,parseFloat(e.maxOrder!==void 0?e.maxOrder:ge.maxOrder)),noticeText:(e.noticeText||ge.noticeText).trim(),tenors:{"30d":a("30d",ge.tenors["30d"]),"2m":a("2m",ge.tenors["2m"]),"3m":a("3m",ge.tenors["3m"])}}},Ls=e=>{if(typeof e=="number")return isNaN(e)?0:Math.max(0,e);if(!e)return 0;let t=String(e).trim().replace(/[^0-9.,-]/g,"");if(!t)return 0;t.includes(".")&&t.includes(",")?t=t.replace(/\./g,"").replace(",","."):t.includes(".")&&!t.includes(",")?/\.\d{3}($|\.)/.test(t)&&(t=t.replace(/\./g,"")):t.includes(",")&&!t.includes(".")&&(/,\d{3}($|,)/.test(t)?t=t.replace(/,/g,""):t=t.replace(",","."));const a=parseFloat(t);return isNaN(a)?0:Math.max(0,a)},Ze=(e,t="30d",a=null)=>{const s=a||rt(),r=Ls(e),o=s.tenors?.[t]||ge.tenors[t]||ge.tenors["30d"],i=Math.max(1,parseInt(o.months,10)||1),l=r>=s.minOrder&&(s.maxOrder<=0||r<=s.maxOrder),d=r,c=Math.round(d/i);let n=0;const u=Math.max(0,parseFloat(o.adminFeeValue)||0);r>0&&u>0&&(o.adminFeeType==="percent"?n=Math.round(d*u/100):n=Math.round(u));const w=Math.round(n/i);let k=0;const C=Math.max(0,parseFloat(o.serviceFeeValue)||0);r>0&&C>0&&(o.serviceFeeType==="percent"?k=Math.round(d*C/100):k=Math.round(C));const S=Math.round(k/i),M=r>0?c+w+S:0,A=r>0?d+n+k:0,f=[];if(r>0){const P=new Date,O=Math.max(1,Math.min(31,parseInt(a?.dueDay??s?.dueDay??5,10)||5));let F=0,E=0,G=0;for(let v=1;v<=i;v++){const B=P.getFullYear(),X=P.getMonth()+v,H=new Date(B,X,1),I=H.getFullYear(),$=H.getMonth(),W=new Date(I,$+1,0).getDate(),Te=Math.min(O,W),L=new Date(I,$,Te,23,59,59);let N=c,ce=w,Y=S;v===i?(N=Math.max(0,d-F),ce=Math.max(0,n-E),Y=Math.max(0,k-G)):(F+=N,E+=ce,G+=Y);const mt=N+ce+Y;f.push({installmentIndex:v,totalMonths:i,dueDate:L.getTime(),dueDateFormatted:L.toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}),pokok:N,adminFee:ce,serviceFee:Y,total:mt})}}return{tenorKey:t,enabled:o.enabled,label:o.label,shortLabel:o.shortLabel,months:i,days:o.days||i*30,isEligible:l,minOrder:s.minOrder,maxOrder:s.maxOrder,pokokTotal:d,pokokPerMonth:c,adminFeeType:o.adminFeeType,adminFeeValue:o.adminFeeValue,totalAdminFee:n,adminFeePerMonth:w,serviceFeeType:o.serviceFeeType,serviceFeeValue:o.serviceFeeValue,totalServiceFee:k,serviceFeePerMonth:S,totalPerMonth:M,grandTotal:A,schedule:f,noticeText:s.noticeText}},tr=(e,t=null)=>{const a=t||rt(),s=["30d","2m","3m"],r={};let o=1/0,i="3m";return s.forEach(l=>{const d=Ze(e,l,a);r[l]=d,d.enabled&&d.totalPerMonth>0&&d.totalPerMonth<o&&(o=d.totalPerMonth,i=l)}),{config:a,results:r,minMonthly:o===1/0?0:o,minTenorKey:i,amount:Math.max(0,parseFloat(e)||0)}},Bt=(e,t)=>{const a=Math.max(0,parseFloat(e?.paylaterUsed)||0);if(a<=0)return null;const s=Math.max(0,parseFloat(e?.paylaterAdminFee)||0)+Math.max(0,parseFloat(e?.paylaterServiceFee)||0),r=a+s,o=Math.max(0,parseFloat(t)||0);if(o<=0)return a;const i=Math.max(0,r-o);return Math.min(a,Math.max(0,Math.round(a*i/r)))},ar=(e,t,a,s=0)=>{const r=Bt(e,t),o=Bt(e,a);return r===null||o===null?Math.max(0,parseFloat(s)||0):Math.max(0,o-r)},sr=e=>{const t=Math.max(0,parseFloat(e?.paylaterUsed)||0);if(t<=0)return 0;if(!(e&&e.tempoBalance!==void 0&&e.tempoBalance!==null))return t;const s=Bt(e,e.tempoBalance)||0;return Math.max(0,t-s)},Fa=e=>{const t=m.products?.find(r=>r&&r.id!=null&&String(r.id)===String(e.id));let a=e.price||0;if(e.variantName&&t&&t.variants){const r=t.variants.find(o=>o.name===e.variantName);r&&r.price!=null&&(a=r.price)}if(e.variantName||!t||!t.wholesale||!t.wholesale.length)return a;const s=La.filter(r=>r.id!=null&&String(r.id)===String(e.id)).reduce((r,o)=>r+(parseFloat(o.qty)||0),0);for(let r of t.wholesale.slice().sort((o,i)=>i.minQty-o.minQty))if(s>=parseFloat(r.minQty))return r.price;return a},Ve=e=>{const t=m.products?.find(a=>a&&a.id!=null&&String(a.id)===String(e.id));if(!t)return 0;if(e.variantName&&t.variants){const a=t.variants.find(s=>s.name===e.variantName);if(a&&a.hpp!=null)return parseFloat(a.hpp)||0}return parseFloat(t.hpp)||0},ja=e=>{if(!e)return 0;const t=m.products?.find(a=>a&&a.id!=null&&String(a.id)===String(e.id));if(!t)return parseFloat(e.poin)||0;if(e.variantName&&t.variants){const a=t.variants.find(s=>s.name===e.variantName);if(a&&a.poin!==void 0&&a.poin!==null&&a.poin!==""){const s=parseFloat(a.poin);if(!isNaN(s)&&s>0)return s}}return parseFloat(t.poin)||0},Ds=(e,t,a,s)=>{if(!e||!t||!a||!s)return 0;const r=6371,o=(a-e)*Math.PI/180,i=(s-t)*Math.PI/180,l=Math.sin(o/2)*Math.sin(o/2)+Math.cos(e*Math.PI/180)*Math.cos(a*Math.PI/180)*Math.sin(i/2)*Math.sin(i/2),d=2*Math.atan2(Math.sqrt(l),Math.sqrt(1-l));return r*d},Ha=e=>{if(!e||typeof e!="string")return null;let t=e.trim();try{t=decodeURIComponent(t)}catch{}const a=t.match(/@(-?\d{1,3}\.\d+)[,\s]+(-?\d{1,3}\.\d+)/);if(a){const i=parseFloat(a[1]),l=parseFloat(a[2]);if(!isNaN(i)&&!isNaN(l)&&Math.abs(i)<=90&&Math.abs(l)<=180)return{lat:a[1],lng:a[2]}}const s=t.match(/[?&](?:q|ll|query|loc|center)=(-?\d{1,3}\.\d+)[,\s]+(-?\d{1,3}\.\d+)/i);if(s){const i=parseFloat(s[1]),l=parseFloat(s[2]);if(!isNaN(i)&&!isNaN(l)&&Math.abs(i)<=90&&Math.abs(l)<=180)return{lat:s[1],lng:s[2]}}const r=t.match(/(\d+)[°\s]+(\d+)['\s]+([\d.]+)"?\s*([NSns])[,\s]+(\d+)[°\s]+(\d+)['\s]+([\d.]+)"?\s*([EWew])/);if(r){let i=parseInt(r[1],10)+parseInt(r[2],10)/60+parseFloat(r[3])/3600;r[4].toUpperCase()==="S"&&(i=-i);let l=parseInt(r[5],10)+parseInt(r[6],10)/60+parseFloat(r[7])/3600;return r[8].toUpperCase()==="W"&&(l=-l),{lat:i.toFixed(8),lng:l.toFixed(8)}}const o=t.match(/(-?\d{1,3}\.\d{3,20})[,\s;\t]+(-?\d{1,3}\.\d{3,20})/);if(o){const i=parseFloat(o[1]),l=parseFloat(o[2]);if(!isNaN(i)&&!isNaN(l)&&Math.abs(i)<=90&&Math.abs(l)<=180)return{lat:o[1],lng:o[2]}}return null},Fs=e=>{const t=(typeof e=="string"?e:e?.value||"").trim(),a=Ha(t);return a?(Pa("set-lat",a.lat),Pa("set-lng",a.lng),g("Koordinat GPS berhasil disalin!"),a):(g("Format tidak dikenali! Tempel koordinat: Lat, Lng atau link Google Maps"),null)},js=(e=La,t=m.store)=>{if(!e||!e.length)return{totalPoints:0,directPoints:0,spendPoints:0,nonPointSpend:0,threshold:1e5,pointsPerThreshold:1,isSpendPointsActive:!1,remainingToNextPoint:0,progressPercent:0};let a=0,s=0;e.forEach(n=>{const u=ja(n),w=parseFloat(n.qty)||0;if(u>0)a+=u*w;else{const k=Fa(n);s+=k*w}});let r=0,o=0,i=0;const l=t?t.spendPointsEnabled===!0||t.spendPointsEnabled==="true":!1,d=Math.max(1,parseFloat(t?.spendPointsThreshold)||1e5),c=Math.max(1,parseFloat(t?.spendPointsPerThreshold)||1);if(l&&s>0){const n=Math.floor(s/d);r=n*c;const u=s%d;o=u>0?d-u:d,i=Math.min(100,Math.round((u||(n>0?d:0))/d*100))}return{totalPoints:a+r,directPoints:a,spendPoints:r,nonPointSpend:s,threshold:d,pointsPerThreshold:c,isSpendPointsActive:l,remainingToNextPoint:o,progressPercent:i}},Hs=()=>{const e=m.store.useStock===!0||m.store.useStock==="true";let t=0,a=0,s=0,r=0,o=0,i=0;return(m.products||[]).forEach(l=>{if(l.variants&&l.variants.length)l.variants.forEach(d=>{const c=d.isActive!==!1&&d.isActive!=="false",n=parseFloat(d.stock)||0;c&&(!e||n>0)?s++:r++,o+=(parseFloat(d.hpp)||0)*n,i+=(parseFloat(d.price)||0)*n});else{const d=l.isActive!==!1&&l.isActive!=="false",c=parseFloat(l.stock)||0;d&&(!e||c>0)?t++:a++,o+=(parseFloat(l.hpp)||0)*c,i+=(parseFloat(l.price)||0)*c}}),{activeProd:t,inactiveProd:a,activeVar:s,inactiveVar:r,assetHpp:o,assetJual:i}},Ia=e=>{if(!e)return{totalStock:0,hasStockData:!1,isManaged:!1,isOutOfStock:!0,isLowStock:!1,isInactive:!0,isPreorder:!1,poTime:""};const t=e.isActive!=="false"&&e.isActive!==!1,a=m?.store?.useStock===!0||m?.store?.useStock==="true",s=!!(e.poTime&&String(e.poTime).trim()),r=s?String(e.poTime).trim():"",o=Array.isArray(e.variants)&&e.variants.length>0;let i=0,l=!1;if(o){const M=e.variants.filter(A=>A&&A.isActive!==!1&&A.isActive!=="false");for(const A of M){const f=A.stock!=null&&A.stock!==""?A.stock:A.stok!=null&&A.stok!==""?A.stok:null;if(f!=null){const P=parseFloat(f);isNaN(P)||(l=!0,i+=P)}}}const d=e.stock!=null&&e.stock!==""?e.stock:e.stok!=null&&e.stok!==""?e.stok:null,c=d!=null&&!isNaN(parseFloat(d)),n=c?parseFloat(d):0;let u=0,w=!1;o&&l?(u=i,w=!0,u===0&&c&&n>0&&(u=n)):c?(u=n,w=!0):(u=0,w=!1);const k=a||w,C=!t||k&&u<=0&&!s,S=k&&u>0&&u<=5;return{totalStock:Math.max(0,u),hasStockData:w,isManaged:k,isOutOfStock:C,isLowStock:S,isInactive:!t,isPreorder:s,poTime:r}};window.getEffP=Fa;window.getEffHpp=Ve;window.getEffPoin=ja;window.calculateCartPoints=js;window.computeInventoryStats=Hs;window.computeTotalProductStock=Ia;window.getDist=Ds;window.parseGeoCoordinates=Ha;window.autoParseCoords=Fs;let Re=null;const me=()=>{if(Re)return Re;try{const e=sessionStorage.getItem("pos_cashier_session");if(e)return Re=JSON.parse(e),Re}catch{}return null},Nt=e=>{Re=e;try{e?sessionStorage.setItem("pos_cashier_session",JSON.stringify(e)):sessionStorage.removeItem("pos_cashier_session")}catch{}},Ra=()=>{Re=null;try{sessionStorage.removeItem("pos_cashier_session")}catch{}},Ba=()=>!!me(),Na=async()=>{if(me()||window.isAdm||window.__localIsAdm||m&&(m.hasCashier===!0||m.store?.posEnabled===!0))return!0;const e=localStorage.getItem("pos_has_cashier");if(e==="true")return!0;const t=!!(window.isAdm||window.__localIsAdm||de.currentUser&&de.currentUser.uid===Da);try{if(t){const s=!(await j.collection("freshmart").doc("cms_data").collection("cashier_accounts").where("isActive","==",!0).limit(1).get()).empty;try{localStorage.setItem("pos_has_cashier",s?"true":"false"),j.collection("freshmart").doc("cms_data").set({hasCashier:s},{merge:!0}).catch(()=>{})}catch{}return s}else{const a=await j.collection("freshmart").doc("cms_data").get();if(a.exists){const s=a.data();if(s.hasCashier!==void 0){const r=!!s.hasCashier;try{localStorage.setItem("pos_has_cashier",r?"true":"false")}catch{}return r}}return e!=="false"}}catch{return e!=="false"}},Xe=async()=>{const e=p("pos-cashier-header-btn");if(!e)return;const t=!!me(),a=!!(window.isAdm||window.__localIsAdm),s=localStorage.getItem("pos_has_cashier"),r=m?m.hasCashier??!0:!0;t||a||s==="true"||s===null&&r!==!1?e.classList.remove("hidden"):s==="false"&&e.classList.add("hidden");try{await Na()||t||a?e.classList.remove("hidden"):e.classList.add("hidden")}catch{(t||a||s!=="false")&&e.classList.remove("hidden")}},Ea=async()=>{typeof window.triggerHaptic=="function"&&window.triggerHaptic("medium"),me()?(typeof window.changeView=="function"&&window.changeView("view-pos-cashier"),typeof window.renderPOSStorefront=="function"&&window.renderPOSStorefront()):Kt()},Kt=()=>{const e=p("pos-login-modal");e&&(e.classList.remove("hidden"),setTimeout(()=>{e.classList.remove("opacity-0");const t=p("pos-login-modal-box");t&&t.classList.remove("translate-y-full","scale-95")},10),setTimeout(()=>{const t=p("pos-login-email");t&&t.focus()},300),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},qt=()=>{const e=p("pos-login-modal"),t=p("pos-login-modal-box");e&&e.classList.add("opacity-0"),t&&t.classList.add("translate-y-full"),setTimeout(()=>{e&&e.classList.add("hidden");const a=p("pos-login-email"),s=p("pos-login-password"),r=p("pos-login-error");a&&(a.value=""),s&&(s.value=""),r&&(r.textContent="",r.classList.add("hidden"))},300)},_a=async()=>{const e=p("pos-login-email"),t=p("pos-login-password"),a=p("pos-login-error"),s=p("pos-login-btn"),r=e?.value?.trim()||"",o=t?.value||"",i=d=>{if(a){a.classList.remove("hidden");const c=a.querySelector("span");c?c.textContent=d:a.textContent=d}typeof window.triggerHaptic=="function"&&window.triggerHaptic("error")};if((()=>{if(a){a.classList.add("hidden");const d=a.querySelector("span");d&&(d.textContent="")}})(),!r||!o){i("Email dan password wajib diisi.");return}s&&(s.disabled=!0,s.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i>Memverifikasi...');try{const c=(await de.signInWithEmailAndPassword(r,o)).user?.uid;if(!c)throw new Error("UID tidak ditemukan");if(c===Da){Nt({uid:c,name:"Owner Toko",email:r,role:"owner"});try{localStorage.setItem("pos_has_cashier","true")}catch{}Xe()}else{const w=await j.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(c).get();if(!w.exists){await de.signOut(),i("Akun ini bukan akun staf/kasir yang terdaftar di toko ini.");return}const k=w.data()||{};if(k.isActive===!1){await de.signOut(),i("Akun staf ini telah dinonaktifkan oleh Owner toko.");return}if(!(k.role==="cashier"||k.role==="admin"||k.role==="owner"||k.permissions?.pos!==!1)){await de.signOut(),i("Akun ini tidak memiliki hak akses kasir POS.");return}Nt({uid:c,name:k.name||r,email:k.email||r,role:k.role||"cashier"});try{localStorage.setItem("pos_has_cashier","true")}catch{}Xe()}typeof window.syncActiveShiftFromCloud=="function"&&window.syncActiveShiftFromCloud().catch(()=>{}),qt();const n=me();g(`Selamat datang, ${n?.name||"Kasir"}! 👋`,"success"),typeof window.changeView=="function"&&window.changeView("view-pos-cashier"),setTimeout(()=>{typeof window.renderPOSStorefront=="function"&&window.renderPOSStorefront()},100),typeof window.triggerHaptic=="function"&&window.triggerHaptic("success")}catch(d){console.error("[POS Auth] Login error:",d);const c=d.code||"";i(c==="auth/user-not-found"||c==="auth/wrong-password"||c==="auth/invalid-credential"?"Email atau password salah.":c==="auth/too-many-requests"?"Terlalu banyak percobaan. Coba lagi beberapa saat.":c==="auth/network-request-failed"?"Koneksi gagal. Periksa jaringan internet.":"Login gagal: "+(d.message||"Kesalahan tidak diketahui"))}finally{s&&(s.disabled=!1,s.innerHTML='<i class="fa-solid fa-right-to-bracket mr-2"></i>Masuk Kasir')}},Vt=async(e=!1)=>{if(!e&&typeof window.getActiveShift=="function"){const a=window.getActiveShift();if(a&&a.status==="open"){document.getElementById("pos-logout-shift-modal")?.remove();const s=typeof window.fRp=="function"?window.fRp(a.startingCash):"Rp "+a.startingCash;document.body.insertAdjacentHTML("beforeend",`
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
            </div>`);return}}me(),typeof window.detachPOSHistoryListener=="function"&&window.detachPOSHistoryListener(),typeof window.detachActiveShiftListener=="function"&&window.detachActiveShiftListener(),typeof window.clearActiveShift=="function"&&window.clearActiveShift();try{if(!window.isAdm&&!window.__localIsAdm)try{await de.signOut()}catch{}}catch{}Ra();const t=p("view-pos-cashier");t&&(t.innerHTML=""),typeof window.destroyBarcodeListener=="function"&&window.destroyBarcodeListener(),typeof window.stopPOSClock=="function"&&window.stopPOSClock(),g("Sesi kasir berakhir. Sampai jumpa! 👋"),typeof window.changeView=="function"&&window.changeView("view-catalog"),typeof window.triggerHaptic=="function"&&window.triggerHaptic("medium"),typeof window.updatePOSHeaderIcon=="function"&&window.updatePOSHeaderIcon()},Ka=async()=>{await Xe()};window.openPOSCashierMode=Ea;window.openPOSLoginModal=Kt;window.closePOSLoginModal=qt;window.processCashierLogin=_a;window.cashierLogout=Vt;window.exitPOSMode=Vt;window.getCashierSession=me;window.isCashierLoggedIn=Ba;window.initPOSAuth=Ka;window.updatePOSHeaderIcon=Xe;const rr=Object.freeze(Object.defineProperty({__proto__:null,cashierLogout:Vt,checkCashierExists:Na,clearCashierSession:Ra,closePOSLoginModal:qt,getCashierSession:me,initPOSAuth:Ka,isCashierLoggedIn:Ba,openPOSCashierMode:Ea,openPOSLoginModal:Kt,processCashierLogin:_a,setCashierSession:Nt,updatePOSHeaderIcon:Xe},Symbol.toStringTag,{value:"Module"})),y=e=>"Rp "+Math.round(parseFloat(e)||0).toLocaleString("id-ID"),qa=e=>parseFloat((parseFloat(e)||0).toFixed(3)).toString(),kt="pos_active_shift",Va="pos_last_closed_shift";let Be=null,ht=null;const vt=()=>{if(typeof ht=="function"){try{ht()}catch{}ht=null}},Ue=()=>{const e=typeof me=="function"?me():null,t=!!(window.isAdm||window.__localIsAdm||window.__currentAdminUid),a=de?.currentUser?.uid,s=e?.uid||(t?window.__currentAdminUid||a||"admin":a||"cashier-anon"),r=e?.name||(t?"Admin Seller":"Kasir Toko"),o=e?.email||t&&de?.currentUser?.email||"";return{uid:s,name:r,email:o,isAdm:t}},Ke=(e,t=Ue())=>{if(!e)return!1;const a=e.cashierUid;return!!(a&&t.uid&&a===t.uid||t.isAdm&&(a==="admin"||a==="ADMIN_UID"||a===window.__currentAdminUid||de?.currentUser&&a===de.currentUser.uid))},J=()=>{if(Be)return Be;try{const e=localStorage.getItem(kt);if(e)return Be=JSON.parse(e),Be}catch(e){console.warn("[POS Shift] Gagal membaca active shift:",e)}return null},ye=e=>{Be=e;try{e?localStorage.setItem(kt,JSON.stringify(e)):localStorage.removeItem(kt)}catch{}},et=()=>{Be=null;try{localStorage.removeItem(kt)}catch{}},Is=()=>{try{const e=localStorage.getItem(Va);if(e)return JSON.parse(e)}catch{}return null},Ut=e=>{try{localStorage.setItem(Va,JSON.stringify(e))}catch{}},$e=()=>{const e=J();return!!(e&&e.status==="open")},St=async(e=null)=>{const t=Ue();try{const a=await j.collection("freshmart").doc("cms_data").collection("pos_shifts").where("status","==","open").get();if(!a.empty){const s=[];if(a.forEach(r=>{const o={id:r.id,...r.data()};Ke(o,t)&&s.push(o)}),s.length>0)return s.sort((r,o)=>(o.startTime||0)-(r.startTime||0)),s[0]}}catch(a){console.warn("[POS Shift] Cek open shift cms_data:",a)}try{const a=await j.collection("pos_shifts").where("status","==","open").get();if(!a.empty){const s=[];if(a.forEach(r=>{const o={id:r.id,...r.data()};Ke(o,t)&&s.push(o)}),s.length>0)return s.sort((r,o)=>(o.startTime||0)-(r.startTime||0)),s[0]}}catch(a){console.warn("[POS Shift] Cek open shift root pos_shifts:",a)}return null},De=e=>{if(e){vt();try{ht=j.collection("freshmart").doc("cms_data").collection("pos_shifts").doc(e).onSnapshot(a=>{if(!a.exists)return;const s={id:a.id,...a.data()};if(s.status==="closed"){vt(),et(),Ut(s),ot(),Ge(),je(),g("Shift kasir telah ditutup dari perangkat lain.","info"),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge();return}if(s.status==="open"){ye(s),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge();const r=p("pos-shift-summary-modal");r&&!r.classList.contains("opacity-0")&&oe()}},a=>{console.warn("[POS Shift] Snapshot listener cms_data error:",a)})}catch(t){console.warn("[POS Shift] Gagal attach snapshot listener:",t)}}},Se=async()=>{const e=Ue(),t=J();if(t&&t.status==="open"&&Ke(t,e))try{const a=await j.collection("freshmart").doc("cms_data").collection("pos_shifts").doc(t.id).get();if(a.exists){const s={id:a.id,...a.data()};if(s.status==="closed")et(),Ut(s),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge();else return ye(s),De(s.id),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge(),s}}catch(a){return console.warn("[POS Shift] Gagal verifikasi local shift ke cloud:",a),De(t.id),t}try{const a=await St(e.uid);if(a)return ye(a),De(a.id),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge(),a;t&&!Ke(t,e)&&(et(),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge())}catch(a){console.warn("[POS Shift] Gagal cari shift open di cloud:",a)}return J()},Ua=(e="open")=>{try{if(typeof window<"u"&&typeof window.checkUserGesture=="function"&&!window.checkUserGesture())return;const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const a=new t,s=a.currentTime;e==="open"?([523.25,659.25,783.99,1046.5].forEach((o,i)=>{const l=a.createOscillator(),d=a.createGain(),c=s+i*.07;l.type="sine",l.frequency.setValueAtTime(o,c),d.gain.setValueAtTime(.09,c),d.gain.exponentialRampToValueAtTime(1e-4,c+.16),l.connect(d),d.connect(a.destination),l.start(c),l.stop(c+.16)}),setTimeout(()=>{a.close().catch(()=>{})},600)):([{f:[783.99,987.77],t:s,d:.14},{f:[1046.5,1318.51],t:s+.12,d:.35}].forEach(o=>{o.f.forEach(i=>{const l=a.createOscillator(),d=a.createGain();l.type="triangle",l.frequency.setValueAtTime(i,o.t),d.gain.setValueAtTime(.08,o.t),d.gain.exponentialRampToValueAtTime(1e-4,o.t+o.d),l.connect(d),d.connect(a.destination),l.start(o.t),l.stop(o.t+o.d)})}),setTimeout(()=>{a.close().catch(()=>{})},700))}catch{}},Gt=(e,t=Date.now())=>{if(!e)return"-";const a=Math.max(0,t-e),s=Math.floor(a/6e4),r=Math.floor(s/60),o=s%60;return r>0?`${r} Jam ${o} Menit`:`${o} Menit`},Rs=()=>{const e=new Date,t=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0"),r=Math.floor(100+Math.random()*900);return`SHF-${t}${a}${s}-${r}`},te=async()=>{const e=Ue(),t=J();if(t&&t.status==="open"&&Ke(t,e)){g(`Shift kasir #${t.shiftNo||t.id} sedang aktif. Menampilkan ringkasan shift.`,"info"),oe();return}try{const l=await St(e.uid);if(l){ye(l),De(l.id),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge(),g(`Melanjutkan shift aktif (#${l.shiftNo||l.id}) dari perangkat lain! 👋`,"success"),oe();return}}catch(l){console.warn("[POS Shift] Cek cloud saat buka modal:",l)}const a=e.name,s=new Date().toLocaleString("id-ID",{dateStyle:"full",timeStyle:"short"});document.getElementById("pos-open-shift-modal")?.remove();const r=`
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
                            <span class="font-bold text-slate-800 dark:text-slate-200">${x(a)}</span>
                        </div>
                    </div>
                    <div class="text-right">
                        <span class="text-[10px] text-slate-400 block font-medium">Waktu Buka</span>
                        <span class="font-bold text-slate-700 dark:text-slate-300 text-[11px]">${x(s)}</span>
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
    </div>`;document.body.insertAdjacentHTML("beforeend",r);const o=p("pos-open-shift-modal"),i=p("pos-open-shift-box");!o||!i||(o.classList.remove("pointer-events-none"),requestAnimationFrame(()=>{o.classList.remove("opacity-0"),i.classList.remove("translate-y-8","scale-95")}),setTimeout(()=>{const l=p("pos-shift-start-cash-input");l&&(l.focus(),l.select())},250))},je=()=>{const e=p("pos-open-shift-modal"),t=p("pos-open-shift-box");e&&(e.classList.add("opacity-0","pointer-events-none"),t&&t.classList.add("translate-y-8","scale-95"),setTimeout(()=>{e.remove()},280))},Ga=()=>{const e=parseFloat(p("pos-shift-start-cash-input")?.value)||0;document.querySelectorAll(".pos-preset-chip").forEach(t=>{parseFloat(t.dataset.amount)===e?t.className="pos-preset-chip px-2.5 py-1 rounded-xl text-[10px] font-black border-2 border-[var(--color-primary)] text-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.1)] shadow-xs transition-all cursor-pointer":t.className="pos-preset-chip px-2.5 py-1 rounded-xl text-[10px] font-bold border border-slate-200 dark:border-slate-700 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-all cursor-pointer"})},Bs=e=>{const t=p("pos-shift-start-cash-input");t&&(t.value=e,t.focus(),t.select()),Ga()},Ns=async()=>{const e=p("pos-shift-start-cash-input"),t=p("pos-shift-start-notes-input"),a=parseFloat(e?.value)||0,s=t?.value?.trim()||"",r=Ue(),o=r.uid,i=r.name,l=r.email,d=document.querySelector('#pos-open-shift-box button[onclick*="confirmStartPOSShift"]');d&&(d.disabled=!0,d.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-1.5"></i><span>Memverifikasi Shift...</span>');try{const n=await St(o);if(n){je(),ye(n),De(n.id),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge(),g(`Akun kasir sudah memiliki shift aktif (#${n.shiftNo||n.id}). Melanjutkan shift berjalan.`,"warning"),oe();return}}catch(n){console.warn("[POS Shift] Pre-flight check error:",n)}const c={id:"SHF-"+Date.now(),shiftNo:Rs(),cashierUid:o,cashierName:i,cashierEmail:l,startTime:Date.now(),startTimeISO:new Date().toISOString(),startingCash:a,startNotes:s,status:"open",txCount:0,itemCount:0,totalSales:0,cashSales:0,qrisSales:0,bankSales:0,tempoSales:0,discountTotal:0,pointsTotal:0,orders:[]};ye(c),De(c.id);try{await Promise.all([j.collection("freshmart").doc("cms_data").collection("pos_shifts").doc(c.id).set(c),j.collection("pos_shifts").doc(c.id).set(c)])}catch{}je(),Ua("open"),g(`Shift kasir dibuka! Modal awal: ${y(a)} 🎉`,"success"),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge()},Qa=e=>{try{const t=J();if(!t||t.status!=="open")return;const a=parseFloat(e.total)||0,s=e.payment?.method||"cash",r=parseFloat(e.payment?.tempoDp??e.payment?.dp??e.payment?.paid)||0,o=parseFloat(e.payment?.tempoBalance)||0,i=parseFloat(e.globalDiscount)||0,l=parseFloat(e.pointsEarned)||0,d=(e.items||[]).reduce((c,n)=>c+(parseFloat(n.qty)||0),0);t.txCount=(t.txCount||0)+1,t.itemCount=parseFloat(((t.itemCount||0)+d).toFixed(3)),t.totalSales=(t.totalSales||0)+a,t.discountTotal=(t.discountTotal||0)+i,t.pointsTotal=(t.pointsTotal||0)+l,s==="cash"?t.cashSales=(t.cashSales||0)+a:s==="qris"?t.qrisSales=(t.qrisSales||0)+a:s==="bank"?t.bankSales=(t.bankSales||0)+a:s==="tempo"&&(r>0&&(t.cashSales=(t.cashSales||0)+r),t.tempoSales=(t.tempoSales||0)+o),Array.isArray(t.orders)||(t.orders=[]),(e.txId||e.id)&&t.orders.push(e.txId||e.id),ye(t);try{const c={txCount:t.txCount,itemCount:t.itemCount,totalSales:t.totalSales,cashSales:t.cashSales,qrisSales:t.qrisSales,bankSales:t.bankSales,tempoSales:t.tempoSales,discountTotal:t.discountTotal,pointsTotal:t.pointsTotal,orders:t.orders,lastUpdatedISO:new Date().toISOString()};j.collection("freshmart").doc("cms_data").collection("pos_shifts").doc(t.id).update(c).catch(()=>{}),j.collection("pos_shifts").doc(t.id).update(c).catch(()=>{})}catch{}typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge()}catch(t){console.warn("[POS Shift] Gagal update transaksi ke shift:",t)}},Es=(e,t,a="")=>{try{const s=J();if(!s||s.status!=="open")return!1;const r=parseFloat(e)||0;if(r<=0)return!1;s.cashSales=(s.cashSales||0)+r,s.tempoInstallmentCash=(s.tempoInstallmentCash||0)+r,Array.isArray(s.tempoPayments)||(s.tempoPayments=[]),s.tempoPayments.push({orderId:t,amount:r,timestamp:Date.now(),note:a||`Cicilan Piutang #${t}`}),ye(s);try{const o={cashSales:s.cashSales,tempoInstallmentCash:s.tempoInstallmentCash,tempoPayments:s.tempoPayments,lastUpdatedISO:new Date().toISOString()};j.collection("freshmart").doc("cms_data").collection("pos_shifts").doc(s.id).update(o).catch(()=>{}),j.collection("pos_shifts").doc(s.id).update(o).catch(()=>{})}catch{}return typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge(),!0}catch(s){return console.warn("[POS Shift] Gagal rekam pembayaran cicilan ke shift:",s),!1}},oe=()=>{const e=J();if(!e){te();return}document.getElementById("pos-shift-summary-modal")?.remove();const t=(parseFloat(e.startingCash)||0)+(parseFloat(e.cashSales)||0),a=Gt(e.startTime),s=new Date(e.startTime).toLocaleString("id-ID",{dateStyle:"medium",timeStyle:"short"}),r=`
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
                        <p class="text-[11px] text-slate-500 dark:text-slate-400">Shift aktif: <b>${x(e.shiftNo||e.id)}</b></p>
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
                        <span class="font-bold text-slate-800 dark:text-slate-200 text-xs truncate block">${x(e.cashierName)}</span>
                        <span class="text-[10px] text-slate-500 mt-0.5 block">Mulai: ${x(s)}</span>
                    </div>
                    <div class="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                        <span class="text-[10px] text-slate-400 block font-medium">Durasi Kerja</span>
                        <span class="font-bold text-emerald-600 dark:text-emerald-400 text-xs block">${x(a)}</span>
                        <span class="text-[10px] text-slate-500 mt-0.5 block">${e.txCount||0} Struk / ${qa(e.itemCount||0)} Item</span>
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
    </div>`;document.body.insertAdjacentHTML("beforeend",r);const o=p("pos-shift-summary-modal"),i=p("pos-shift-summary-box");!o||!i||(o.classList.remove("pointer-events-none"),requestAnimationFrame(()=>{o.classList.remove("opacity-0"),i.classList.remove("translate-y-8","scale-95")}))},ot=()=>{const e=p("pos-shift-summary-modal"),t=p("pos-shift-summary-box");e&&(e.classList.add("opacity-0","pointer-events-none"),t&&t.classList.add("translate-y-8","scale-95"),setTimeout(()=>{e.remove()},280))},Qt=()=>{const e=J();if(!e){g("Tidak ada shift kasir yang aktif saat ini.","warning");return}document.getElementById("pos-close-shift-modal")?.remove();const t=(parseFloat(e.startingCash)||0)+(parseFloat(e.cashSales)||0),a=`
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
    </div>`;document.body.insertAdjacentHTML("beforeend",a);const s=p("pos-close-shift-modal"),r=p("pos-close-shift-box");!s||!r||(s.classList.remove("pointer-events-none"),requestAnimationFrame(()=>{s.classList.remove("opacity-0"),r.classList.remove("translate-y-8","scale-95")}),setTimeout(()=>{const o=p("pos-shift-actual-cash-input");o&&(o.focus(),o.select())},250))},Ge=()=>{const e=p("pos-close-shift-modal"),t=p("pos-close-shift-box");e&&(e.classList.add("opacity-0","pointer-events-none"),t&&t.classList.add("translate-y-8","scale-95"),setTimeout(()=>{e.remove()},280))},_s=e=>{const t=p("pos-count-tab-quick"),a=p("pos-count-tab-denom"),s=p("pos-count-panel-quick"),r=p("pos-count-panel-denom");e==="quick"?(t&&(t.className="px-2.5 py-1 rounded-lg font-black bg-white dark:bg-slate-700 text-[var(--color-primary)] dark:text-white shadow-xs transition-all cursor-pointer border border-[rgba(var(--color-primary-rgb),0.2)] dark:border-slate-600"),a&&(a.className="px-2.5 py-1 rounded-lg font-bold text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-all cursor-pointer border border-transparent"),s&&s.classList.remove("hidden"),r&&r.classList.add("hidden")):(t&&(t.className="px-2.5 py-1 rounded-lg font-bold text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-all cursor-pointer border border-transparent"),a&&(a.className="px-2.5 py-1 rounded-lg font-black bg-white dark:bg-slate-700 text-[var(--color-primary)] dark:text-white shadow-xs transition-all cursor-pointer border border-[rgba(var(--color-primary-rgb),0.2)] dark:border-slate-600"),s&&s.classList.add("hidden"),r&&r.classList.remove("hidden"),za())},za=()=>{const e=(parseFloat(p("denom-100k")?.value)||0)*1e5,t=(parseFloat(p("denom-50k")?.value)||0)*5e4,a=(parseFloat(p("denom-20k")?.value)||0)*2e4,s=(parseFloat(p("denom-10k")?.value)||0)*1e4,r=(parseFloat(p("denom-5k")?.value)||0)*5e3,o=(parseFloat(p("denom-2k")?.value)||0)*2e3,i=(parseFloat(p("denom-1k")?.value)||0)*1e3,l=parseFloat(p("denom-coin")?.value)||0,d=e+t+a+s+r+o+i+l,c=p("pos-shift-actual-cash-input");c&&(c.value=d),Wa()},Wa=()=>{const e=J();if(!e)return;const t=(parseFloat(e.startingCash)||0)+(parseFloat(e.cashSales)||0),s=(parseFloat(p("pos-shift-actual-cash-input")?.value)||0)-t,r=p("pos-discrepancy-card"),o=p("pos-discrepancy-icon"),i=p("pos-discrepancy-status"),l=p("pos-discrepancy-desc"),d=p("pos-discrepancy-amount");!r||!o||!i||!l||!d||(s===0?(r.className="p-4 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between bg-emerald-50 dark:bg-emerald-950/20 border-emerald-500/40",o.className="w-10 h-10 rounded-2xl flex items-center justify-center text-white text-base shadow-sm shrink-0 bg-emerald-600",o.innerHTML='<i class="fa-solid fa-check"></i>',i.className="text-xs font-black uppercase tracking-wider text-emerald-800 dark:text-emerald-300 block",i.innerText="SEIMBANG (PAS)",l.className="text-[11px] text-emerald-700 dark:text-emerald-400 block",l.innerText="Uang fisik laci kasir cocok dengan transaksi sistem",d.className="text-base font-black text-emerald-600 dark:text-emerald-400",d.innerText="Rp 0"):s>0?(r.className="p-4 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between bg-amber-50 dark:bg-amber-950/20 border-amber-500/40",o.className="w-10 h-10 rounded-2xl flex items-center justify-center text-white text-base shadow-sm shrink-0 bg-amber-500",o.innerHTML='<i class="fa-solid fa-plus"></i>',i.className="text-xs font-black uppercase tracking-wider text-amber-800 dark:text-amber-300 block",i.innerText="LEBIH (SURPLUS)",l.className="text-[11px] text-amber-700 dark:text-amber-400 block",l.innerText="Terdapat kelebihan uang fisik di laci kasir",d.className="text-base font-black text-amber-600 dark:text-amber-400",d.innerText="+ "+y(s)):(r.className="p-4 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between bg-rose-50 dark:bg-rose-950/20 border-rose-500/40",o.className="w-10 h-10 rounded-2xl flex items-center justify-center text-white text-base shadow-sm shrink-0 bg-rose-600",o.innerHTML='<i class="fa-solid fa-minus"></i>',i.className="text-xs font-black uppercase tracking-wider text-rose-800 dark:text-rose-300 block",i.innerText="KURANG (DEFISIT)",l.className="text-[11px] text-rose-700 dark:text-rose-400 block",l.innerText="Terdapat kekurangan uang fisik di laci kasir",d.className="text-base font-black text-rose-600 dark:text-rose-400",d.innerText="- "+y(Math.abs(s))))},Ks=async()=>{const e=J();if(!e)return;const t=(parseFloat(e.startingCash)||0)+(parseFloat(e.cashSales)||0),a=parseFloat(p("pos-shift-actual-cash-input")?.value)||0,s=a-t,r=p("pos-shift-close-notes")?.value?.trim()||"",o={d100k:parseFloat(p("denom-100k")?.value)||0,d50k:parseFloat(p("denom-50k")?.value)||0,d20k:parseFloat(p("denom-20k")?.value)||0,d10k:parseFloat(p("denom-10k")?.value)||0,d5k:parseFloat(p("denom-5k")?.value)||0,d2k:parseFloat(p("denom-2k")?.value)||0,d1k:parseFloat(p("denom-1k")?.value)||0,coin:parseFloat(p("denom-coin")?.value)||0},i=Date.now(),l=Gt(e.startTime,i),d={...e,status:"closed",endTime:i,endTimeISO:new Date(i).toISOString(),duration:l,expectedCash:t,actualCash:a,difference:s,discrepancyStatus:s===0?"balanced":s>0?"surplus":"deficit",denominations:o,closingNotes:r};vt();try{await Promise.all([j.collection("freshmart").doc("cms_data").collection("pos_shifts").doc(d.id).set(d,{merge:!0}),j.collection("pos_shifts").doc(d.id).set(d,{merge:!0})])}catch(c){console.warn("[POS Shift] Simpan Firestore:",c)}et(),Ut(d),Ge(),Ua("close"),qs(d),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge()},qs=e=>{document.getElementById("pos-closed-success-modal")?.remove();const t=e.difference||0,a=t===0?'<span class="px-2.5 py-1 rounded-xl text-xs font-black bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">PAS (Rp 0)</span>':t>0?`<span class="px-2.5 py-1 rounded-xl text-xs font-black bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300">LEBIH (+${y(t)})</span>`:`<span class="px-2.5 py-1 rounded-xl text-xs font-black bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300">KURANG (-${y(Math.abs(t))})</span>`,s=`
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
                <div class="flex justify-between"><span>No Shift:</span><span class="font-bold font-mono">#${x(e.shiftNo||e.id)}</span></div>
                <div class="flex justify-between"><span>Kasir:</span><span class="font-bold">${x(e.cashierName)}</span></div>
                <div class="flex justify-between"><span>Durasi:</span><span class="font-bold">${x(e.duration)}</span></div>
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
    </div>`;document.body.insertAdjacentHTML("beforeend",s)},zt=(e,t=!1,a=!1)=>{if(!e){g("Data shift tidak ditemukan.","warning");return}window._lastShiftData={shift:e,isXReport:t};const s=typeof _e=="function"?_e():{paperSize:"58mm"};if(typeof window.printShiftSettlementDirect=="function"){window.printShiftSettlementDirect(e,t);return}const r=typeof window.getPaperCols=="function"?window.getPaperCols(s.paperSize):s.paperSize==="80mm"?48:32,o=r>=40,i=s.headerText||m.store?.name||"TOKO PUTRI",l=m.store?.address||"",d=m.store?.wa||"",c=s.footerText||"Laporan Kasir Resmi Toko Putri",n=o?t?"*** RINGKASAN SHIFT (X-REPORT) ***":"*** REKAP TUTUP SHIFT (Z-REPORT) ***":t?"** RINGKASAN SHIFT (X) **":"** REKAP TUTUP SHIFT (Z) **",u=typeof window.formatCompactDate=="function"?window.formatCompactDate(e.startTime,o):new Date(e.startTime).toLocaleString("id-ID"),w=typeof window.formatCompactDate=="function"?window.formatCompactDate(e.endTime||Date.now(),o):new Date(e.endTime||Date.now()).toLocaleString("id-ID"),k=e.duration||Gt(e.startTime,e.endTime||Date.now()),C=(parseFloat(e.startingCash)||0)+(parseFloat(e.cashSales)||0),S=e.actualCash!==void 0?parseFloat(e.actualCash):C,M=S-C,A=M===0?"SEIMBANG (PAS)":M>0?`LEBIH (+${y(M)})`:`KURANG (-${y(Math.abs(M))})`;document.getElementById("pos-shift-receipt-modal")?.remove(),document.body.insertAdjacentHTML("beforeend",`
    <div id="pos-shift-receipt-modal" class="fixed inset-0 z-[10003] flex items-center justify-center p-3 sm:p-4" style="background:rgba(15,23,42,0.75)">
        <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full ${o?"max-w-[420px]":"max-w-[340px]"} border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[90vh]">
            <div class="p-3.5 sm:p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50">
                <span class="font-bold text-xs text-slate-700 dark:text-slate-200 flex items-center gap-1.5"><i class="fa-solid fa-receipt text-emerald-500"></i>Preview Slip Rekap Shift (${r} Kolom)</span>
                <button onclick="document.getElementById('pos-shift-receipt-modal')?.remove()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-700 dark:hover:text-slate-200 transition-colors flex items-center justify-center cursor-pointer"><i class="fa-solid fa-xmark text-sm"></i></button>
            </div>
            <div id="pos-shift-receipt-paper-box" class="p-4 overflow-y-auto flex-1 font-mono text-[11px] bg-slate-50/60 dark:bg-slate-950 text-slate-800 dark:text-slate-200 space-y-1.5 select-text custom-scrollbar">
                <div class="text-center font-bold text-sm uppercase">${x(i)}</div>
                ${l?`<div class="text-center text-[10px] text-slate-500">${x(l)}</div>`:""}
                ${d?`<div class="text-center text-[10px] text-slate-500">WA: ${x(d)}</div>`:""}
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <div class="text-center font-black text-xs uppercase">${x(n)}</div>
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <div class="flex justify-between"><span>No Shift: <b>#${x(e.shiftNo||e.id)}</b></span><span>${x(u)}</span></div>
                <div class="flex justify-between"><span>Kasir   : ${x(e.cashierName)}</span><span>Durasi: ${x(k)}</span></div>
                <div class="flex justify-between"><span>Selesai : ${x(w)}</span></div>
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <div class="font-bold">RINGKASAN PENJUALAN:</div>
                <div class="flex justify-between"><span>Total Struk</span><span>${e.txCount||0} Trx</span></div>
                <div class="flex justify-between"><span>Total Barang</span><span>${qa(e.itemCount||0)} Item</span></div>
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
                <div class="flex justify-between font-bold"><span>Kas Sistem</span><span>${y(C)}</span></div>
                ${t?"":`
                <div class="flex justify-between font-bold"><span>Kas Fisik Dihitung</span><span>${y(S)}</span></div>
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-1"></div>
                <div class="flex justify-between font-black text-xs ${M===0?"text-emerald-600":M>0?"text-amber-600":"text-rose-600"}">
                    <span>SELISIH KAS</span>
                    <span>${A}</span>
                </div>`}
                ${e.closingNotes?`
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-1.5"></div>
                <div class="text-[10px]"><b>Catatan:</b> ${x(e.closingNotes)}</div>`:""}
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <div class="text-center text-[10px] text-slate-400 my-1">${x(c)}</div>
                <div class="grid grid-cols-2 text-center text-[10px] pt-4 pb-2">
                    <div>
                        <div>Kasir Bertugas</div>
                        <div class="pt-8 font-bold">(${x(e.cashierName)})</div>
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
    </div>`)},Wt=()=>{if(window._lastShiftData&&typeof window.printShiftSettlementDirect=="function"){window.printShiftSettlementDirect(window._lastShiftData.shift,window._lastShiftData.isXReport);return}const e=p("pos-shift-receipt-paper-box");e&&(typeof window.renderThermalDOMAndPrint=="function"?window.renderThermalDOMAndPrint(e.innerHTML):window.print())},nt=()=>{const e=[p("pos-shift-btn-storefront"),p("pos-shift-btn-admin")],t=J();e.forEach(a=>{a&&(t&&t.status==="open"?a.id==="pos-shift-btn-storefront"?a.innerHTML=`
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
                </button>`)})},Vs=async e=>{const t=typeof e=="string"?p(e):e;t&&(t.innerHTML=`
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
    </div>`,await Jt())},Jt=async()=>{const e=p("admin-shift-list-target"),t=p("admin-shift-metrics-target");if(e)try{const a=await j.collection("freshmart").doc("cms_data").collection("pos_shifts").orderBy("startTime","desc").limit(50).get();if(a.empty){t&&(t.innerHTML=""),e.innerHTML=`
            <div class="text-center py-14 p-6 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-slate-400 dark:text-slate-500">
                <i class="fa-solid fa-clipboard-list text-3xl mb-2"></i>
                <p class="font-bold text-xs">Belum ada riwayat shift kasir tercatat</p>
                <p class="text-[11px] mt-0.5">Shift yang dibuka dan ditutup oleh kasir akan otomatis terarsip di sini.</p>
            </div>`;return}const s=a.docs.map(c=>({id:c.id,...c.data()}));let r=s.length,o=0,i=0,l=0;s.forEach(c=>{c.status==="open"&&o++,i+=parseFloat(c.totalSales)||0;const n=c.actualCash!==void 0?parseFloat(c.actualCash):(parseFloat(c.startingCash)||0)+(parseFloat(c.cashSales)||0);l+=n||0}),t&&(t.innerHTML=`
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
                    <p class="text-base sm:text-lg font-black font-mono text-slate-900 dark:text-white tracking-tight">${y(l)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">Uang Kas Fisik Terdata</p>
                </div>
            </div>`);const d=s.map(c=>{const n=c.status==="closed",u=c.difference||0,w=n?u===0?'<span class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-black bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 shadow-2xs shrink-0"><i class="fa-solid fa-check text-[10px]"></i> PAS</span>':u>0?`<span class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-black bg-amber-100 dark:bg-amber-950/70 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-800 shadow-2xs shrink-0"><i class="fa-solid fa-arrow-trend-up text-[10px]"></i> LEBIH +${y(u)}</span>`:`<span class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-black bg-rose-100 dark:bg-rose-950/70 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-800 shadow-2xs shrink-0"><i class="fa-solid fa-arrow-trend-down text-[10px]"></i> KURANG -${y(Math.abs(u))}</span>`:'<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 shadow-2xs tracking-wide shrink-0"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>SEDANG BERJALAN</span>',k=c.startTime?new Date(c.startTime).toLocaleString("id-ID",{dateStyle:"medium",timeStyle:"short"}):"-",C=c.endTime?new Date(c.endTime).toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit"})+" WIB":"",S=JSON.stringify(c).replace(/"/g,"&quot;"),M=c.actualCash!==void 0?c.actualCash:(c.startingCash||0)+(c.cashSales||0);return`
            <div class="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-800/95 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:shadow-xs transition-all space-y-3.5">
                <div class="flex items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-700/60 pb-3 flex-wrap sm:flex-nowrap">
                    <div class="flex items-center gap-3 min-w-0">
                        <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-sm text-white shrink-0 shadow-2xs ${n?"bg-slate-800 dark:bg-slate-700":""}" style="${n?"":"background: var(--color-primary); box-shadow: 0 4px 12px rgba(var(--color-primary-rgb), 0.35);"}">
                            <i class="fa-solid ${n?"fa-receipt":"fa-cash-register"}"></i>
                        </div>
                        <div class="min-w-0">
                            <div class="flex items-center gap-2">
                                <span class="font-mono font-black text-xs sm:text-sm text-slate-900 dark:text-white whitespace-nowrap block truncate">#${x(c.shiftNo||c.id)}</span>
                            </div>
                            <span class="text-[11px] text-slate-400 dark:text-slate-500 whitespace-nowrap block truncate mt-0.5">
                                <i class="fa-solid fa-clock text-[10px] mr-1"></i>${k} ${C?"— "+C:"• Aktif"}
                            </span>
                        </div>
                    </div>
                    <div class="flex items-center gap-2 shrink-0">
                        ${w}
                        <button onclick="window.printShiftSettlementReceipt(${S}, ${!n})" class="h-9 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-700/80 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shrink-0 shadow-2xs active:scale-95 border border-slate-200/80 dark:border-slate-600/60 hover:text-[var(--color-primary)]" title="Preview & Cetak Slip Rekap Shift">
                            <i class="fa-solid fa-print text-xs"></i>
                            <span class="hidden sm:inline">Slip Z-Report</span>
                        </button>
                        <button onclick="window.deleteShiftRecord('${c.id}', '${x(c.shiftNo||c.id)}')" class="w-9 h-9 rounded-xl bg-slate-50 hover:bg-rose-50 dark:bg-slate-700/80 dark:hover:bg-rose-950/40 text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 text-xs flex items-center justify-center transition-all cursor-pointer shrink-0 shadow-2xs active:scale-95 border border-slate-200/80 dark:border-slate-600/60 hover:border-rose-200" title="Hapus Data Shift">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                </div>

                <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                    <div class="p-3 rounded-2xl bg-slate-50/90 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/80">
                        <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                            <i class="fa-solid fa-user-tie text-[10px]"></i> Kasir
                        </span>
                        <span class="font-black text-sm text-slate-800 dark:text-slate-100 truncate block mt-1">${x(c.cashierName||"Kasir")}</span>
                        <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500 block mt-0.5">${c.txCount||0} Trx • ${c.itemCount||0} Item</span>
                    </div>
                    <div class="p-3 rounded-2xl bg-slate-50/90 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/80">
                        <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                            <i class="fa-solid fa-hand-holding-dollar text-[10px]"></i> Modal Awal
                        </span>
                        <span class="font-black text-sm text-slate-800 dark:text-slate-100 font-mono block mt-1">${y(c.startingCash||0)}</span>
                        <span class="text-[10px] text-slate-400 block mt-0.5">Uang Kas Buka Shift</span>
                    </div>
                    <div class="p-3 rounded-2xl bg-slate-50/90 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/80">
                        <span class="text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5" style="color:var(--color-primary)">
                            <i class="fa-solid fa-chart-line text-[10px]"></i> Total Omset
                        </span>
                        <span class="font-black text-sm sm:text-base font-mono block mt-1" style="color:var(--color-primary)">${y(c.totalSales||0)}</span>
                        <span class="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 block mt-0.5">Gross Sales Shift</span>
                    </div>
                    <div class="p-3 rounded-2xl bg-slate-50/90 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/80">
                        <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                            <i class="fa-solid fa-vault text-[10px]"></i> Kas Fisik Laci
                        </span>
                        <span class="font-black text-sm sm:text-base font-mono text-slate-900 dark:text-white block mt-1">${y(M)}</span>
                        <span class="text-[10px] font-bold block mt-0.5 ${u===0?"text-emerald-600 dark:text-emerald-400":u>0?"text-amber-600":"text-rose-600"}">
                            ${n?u===0?"Kas Pas & Sesuai":u>0?"Surplus +"+y(u):"Defisit -"+y(Math.abs(u)):"Kas Saat Ini"}
                        </span>
                    </div>
                </div>

                ${c.cashSales>0||c.qrisSales>0||c.bankSales>0||c.tempoSales>0?`
                <div class="flex items-center gap-2 overflow-x-auto pb-1 hide-scrollbar text-[11px] pt-1">
                    <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-0.5">Rincian Bayar:</span>
                    ${c.cashSales?`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 font-bold shrink-0"><i class="fa-solid fa-money-bill-wave text-emerald-500"></i> Tunai: ${y(c.cashSales)}</span>`:""}
                    ${c.qrisSales?`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 font-bold shrink-0"><i class="fa-solid fa-qrcode text-indigo-500"></i> QRIS: ${y(c.qrisSales)}</span>`:""}
                    ${c.bankSales?`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 font-bold shrink-0"><i class="fa-solid fa-building-columns text-blue-500"></i> Transfer: ${y(c.bankSales)}</span>`:""}
                    ${c.tempoSales?`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 font-bold shrink-0 border border-amber-200/60"><i class="fa-solid fa-clock text-amber-500"></i> Tempo: ${y(c.tempoSales)}</span>`:""}
                </div>`:""}

                ${c.closingNotes?`
                <div class="text-xs text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/60 p-3 rounded-2xl border border-slate-200/80 dark:border-slate-800 flex items-start gap-2.5">
                    <i class="fa-solid fa-comment-dots text-slate-400 mt-0.5 shrink-0"></i>
                    <div class="min-w-0">
                        <span class="font-bold text-slate-800 dark:text-slate-200">Catatan Kasir:</span> ${x(c.closingNotes)}
                    </div>
                </div>`:""}
            </div>`}).join("");e.innerHTML=d}catch(a){console.error("[POS Shift] Gagal memuat daftar shift admin:",a),e.innerHTML=`
        <div class="text-center py-10 text-rose-500 text-xs">
            <i class="fa-solid fa-triangle-exclamation text-2xl mb-1"></i>
            <p>Gagal memuat laporan shift: ${x(a.message)}</p>
        </div>`}},Us=(e,t)=>{Ms("Hapus Data Shift",`Hapus shift #${t}? Data akan dihapus permanen dari cloud dan tidak bisa dikembalikan.`,async()=>{try{await j.collection("freshmart").doc("cms_data").collection("pos_shifts").doc(e).delete(),g("Data shift berhasil dihapus.","success"),await Jt()}catch(a){console.error("[POS Shift] Gagal menghapus shift:",a),g("Gagal menghapus: "+a.message,"error")}},"Ya, Hapus")};window.getActiveShift=J;window.saveActiveShift=ye;window.clearActiveShift=et;window.getLastClosedShift=Is;window.isShiftActive=$e;window.getCurrentCashierIdentity=Ue;window.isShiftOwnedByCashier=Ke;window.findActiveShiftInCloud=St;window.syncActiveShiftFromCloud=Se;window.listenActiveShiftCloud=De;window.detachActiveShiftListener=vt;window.openPOSOpenShiftModal=te;window.closePOSOpenShiftModal=je;window.posSetStartCashPreset=Bs;window.posUpdateStartCashChips=Ga;window.confirmStartPOSShift=Ns;window.recordTransactionToShift=Qa;window.recordTempoPaymentToShift=Es;window.openPOSShiftModal=oe;window.openPOSShiftSummaryModal=oe;window.closePOSShiftSummaryModal=ot;window.openPOSCloseShiftModal=Qt;window.closePOSCloseShiftModal=Ge;window.setPOSCountMode=_s;window.calcPOSDenominations=za;window.updatePOSShiftDiscrepancy=Wa;window.confirmClosePOSShift=Ks;window.printShiftSettlementReceipt=zt;window.executeShiftPrintDirect=Wt;window.renderShiftHeaderBadge=nt;window.renderAdminShiftReportView=Vs;window.loadAdminShiftReports=Jt;window.deleteShiftRecord=Us;let Ta=!1;const Ja=()=>Ta?Promise.resolve():Cs(()=>import("./pos-variant-sheet-BBt1U6O7.js"),__vite__mapDeps([0,1,2,3])).then(()=>{Ta=!0});let T=[],le="",fe="",ke="",we="grid",qe=1;const Gs=48;let bt=null;const Ya="freshmart_pos_offline_tx_queue";try{const e=localStorage.getItem("pos_view_mode");(e==="list"||e==="grid")&&(we=e)}catch{}let b={name:"",phone:"",isMember:!1,memberId:null,isNewTempo:!1,paylaterActive:!1,paylaterLimit:0,paylaterUsed:0,paylaterDueDay:5},Le="30d",Z=0,R=null,_="cash",ae=0,se=0,Q="rp",U=0,pe="",Ma=null,Ne=null,Fe=null,xt=null,Ee=null,gt=!0,Et="environment",Ye=!1,Me=null,$a="",Ca=0;const Yt=e=>{we=e;try{localStorage.setItem("pos_view_mode",e)}catch{}document.querySelectorAll("#pos-view-btn-grid").forEach(t=>{e==="grid"?(t.style.background="linear-gradient(135deg, var(--color-primary-light, #e1b858) 0%, var(--color-primary, #c59b27) 60%, var(--color-primary-dark, #a87f1b) 100%)",t.className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-white shadow-xs"):(t.style.removeProperty("background"),t.className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-slate-500 hover:text-slate-800 dark:text-slate-400")}),document.querySelectorAll("#pos-view-btn-list").forEach(t=>{e==="list"?(t.style.background="linear-gradient(135deg, var(--color-primary-light, #e1b858) 0%, var(--color-primary, #c59b27) 60%, var(--color-primary-dark, #a87f1b) 100%)",t.className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-white shadow-xs"):(t.style.removeProperty("background"),t.className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-slate-500 hover:text-slate-800 dark:text-slate-400")}),z()},ve=e=>Math.max(0,parseInt(e)||0),tt=e=>{if(e==null)return 0;typeof e=="string"&&(e=e.replace(",",".").trim());const t=parseFloat(e);return isNaN(t)?0:Math.max(0,parseFloat(t.toFixed(3)))},q=e=>{const t=parseFloat(e)||0;return parseFloat(t.toFixed(3)).toString()},h=e=>Os(e),it=()=>parseFloat(m.store?.pointValue)||1e3,Ce=()=>Math.max(0,(parseFloat(Z)||0)*it()),Pt=()=>{if(!b.isMember||!b.points)return 0;const e=Math.max(0,parseFloat(b.points)||0),t=R&&parseFloat(R.pointsCost)||0,a=Math.max(0,e-t),s=it();if(s<=0)return 0;const r=Math.max(0,re()-ne()),o=xe(),i=Math.max(0,r-o),l=Math.floor(i/s);return Math.min(a,l)},re=()=>T.reduce((e,t)=>e+t.subtotal,0),xe=()=>T.reduce((e,t)=>{const a=t.hpp!=null?parseFloat(t.hpp):Ve(t)||0;return e+(parseFloat(a)||0)*(parseFloat(t.qty)||0)},0),ne=()=>{const e=re();let t=0;if(Q==="percent"){const s=Math.min(100,Math.max(0,parseFloat(U)||0));t=Math.round(e*s/100)}else t=Math.min(e,ve(U||se));const a=xe();if(a>0){const s=Math.max(0,e-a);t>s&&(t=s)}return t},ie=()=>{const e=re(),t=ne(),a=Ce(),s=Math.max(0,e-t-a);if(typeof window.calcTaxDetails=="function")return window.calcTaxDetails(s);const r=m.store?.ppnEnabled===!0||m.store?.ppnEnabled==="true",o=m.store?.ppnType||"exclusive",i=m.store?.ppnRate!==void 0&&!isNaN(parseFloat(m.store?.ppnRate))?parseFloat(m.store?.ppnRate):11;return{ppnEnabled:r,ppnRate:i,ppnType:o,ppnAmount:0,dppAmount:s,grandTotalAdd:0,ppnShowZero:m.store?.ppnShowZero!==!1,ppnLabel:m.store?.ppnTaxLabel||""}},D=()=>{const e=re(),t=ne(),a=Ce(),s=Math.max(0,e-t-a),r=ie();let o=s+(r.ppnType==="exclusive"&&r.grandTotalAdd||0);const i=xe();return i>0&&o<i&&(o=i),o},Za=()=>ae-D(),Qe=e=>Ia(e),Xa=e=>e?String(e).replace(/\s*hari\s*kerja/gi,"hr").replace(/\s*hari/gi,"hr").replace(/\s*minggu/gi,"mgg").replace(/\s*bulan/gi,"bln").trim():"",he=()=>{try{if(typeof window<"u"&&typeof window.checkUserGesture=="function"&&!window.checkUserGesture())return;const e=window.AudioContext||window.webkitAudioContext;if(!e)return;const t=new e,a=t.createOscillator(),s=t.createGain();a.type="sine",a.frequency.setValueAtTime(1400,t.currentTime),s.gain.setValueAtTime(.08,t.currentTime),s.gain.exponentialRampToValueAtTime(1e-4,t.currentTime+.08),a.connect(s),s.connect(t.destination),a.start(),a.stop(t.currentTime+.08),setTimeout(()=>{t.close().catch(()=>{})},150)}catch{}},Qs=(e,t)=>{if(!e||!e.wholesale||!e.wholesale.length)return null;const a=[...e.wholesale].sort((s,r)=>r.minQty-s.minQty);for(const s of a)if(t>=parseFloat(s.minQty))return parseFloat(s.price);return null},be=e=>{if(!e.isVariant){const a=(m.products||[]).find(r=>r&&String(r.id)===String(e.id)),s=a?Qs(a,e.qty):null;s!==null?(e.basePrice=e.basePrice||e.price,e.price=s,e.isWholesale=!0):(e.basePrice&&(e.price=e.basePrice),e.isWholesale=!1)}e.hpp==null&&(e.hpp=Ve(e)||0);const t=parseFloat(e.hpp)||0;if(t>0){const a=Math.max(0,Math.round((e.price-t)*e.qty));ve(e.discount)>a&&(e.discount=a)}else e.discount=Math.min(ve(e.discount),e.price*e.qty);return e.subtotal=Math.max(0,e.price*e.qty-ve(e.discount)),e},zs=()=>{const e=new Date,t=a=>String(a).padStart(2,"0");return`POS-${e.getFullYear()}${t(e.getMonth()+1)}${t(e.getDate())}-${Date.now().toString(36).toUpperCase()}`},es=()=>{Ne&&clearInterval(Ne);const e=()=>{const a=new Date().toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit",second:"2-digit"})+" WIB";document.querySelectorAll("#pos-live-clock").forEach(s=>{s.textContent=a})};e(),Ne=setInterval(e,1e3)},ts=()=>{Ne&&(clearInterval(Ne),Ne=null)};window.stopPOSClock=ts;const Tt=()=>{window.__posBarcodeFn&&(document.removeEventListener("keydown",window.__posBarcodeFn),window.__posBarcodeFn=null)},as=()=>{Tt(),window.__posBarcodeFn=e=>{if(!e||typeof e.key!="string")return;const t=window.curViewName||"";if(!(t==="view-pos-cashier"||t==="view-admin"&&window.cTab==="pos"))return;if(e.key==="F2"||e.key==="F3"){e.preventDefault();const r=p("pos-search-input");r&&(r.focus(),r.select());return}if(e.key==="F4"){if(e.preventDefault(),!T.length){g("Keranjang kasir masih kosong","warning");return}na();return}if(e.key==="F6"){e.preventDefault(),At();return}if(e.key==="F7"){e.preventDefault();const r=document.querySelector(".pos-disc-val-input");r&&(r.focus(),r.select());return}if(e.key==="F8"){e.preventDefault(),dt();return}if(e.key==="F9"){e.preventDefault(),p("pos-camera-scanner-modal")?Ae():jt();return}if(e.key==="F10"){e.preventDefault(),$e()?oe():typeof Se=="function"?Se().then(r=>{r&&r.status==="open"?oe():te()}).catch(()=>te()):te();return}if(e.key==="Escape"){if(p("pos-camera-scanner-modal")){Ae();return}if(p("pos-held-modal")){ze();return}if(p("pos-pay-modal")){Lt();return}if(p("modal-pos-open-shift")){je();return}if(p("modal-pos-shift-summary")){ot();return}if(p("modal-pos-close-shift")){Ge();return}if(p("pos-success-modal")){p("pos-success-modal").remove();return}const r=p("pos-variant-sheet");if(r&&!r.classList.contains("hidden")){typeof window.closePOSVariantSheet=="function"&&window.closePOSVariantSheet();return}const o=p("pos-cart-drawer");if(o&&!o.classList.contains("hidden")){typeof window.closePOSCartDrawer=="function"&&window.closePOSCartDrawer();return}const i=p("pos-search-input");if(i&&(i.value||document.activeElement===i)){typeof window.posClearSearch=="function"&&window.posClearSearch(),i.blur();return}}const s=document.activeElement?.tagName?.toLowerCase();if(!(s==="input"||s==="textarea"||s==="select"))if(e.key==="Enter"){if(pe&&pe.length>=3){const r=pe.trim().toLowerCase(),o=(m.products||[]).find(i=>i&&i.isActive!=="false"&&i.isActive!==!1&&(i.barcode&&i.barcode.toLowerCase()===r||i.sku&&i.sku.toLowerCase()===r||i.id&&String(i.id).toLowerCase()===r));if(o)Mt(o.id)&&(he(),g(`Ditambahkan: ${o.name}`,"success"));else{if(typeof window.posSearchFn=="function")window.posSearchFn(pe,!0);else{const i=p("pos-search-input");i&&(i.value=pe,le=pe,z())}g("Barcode tidak ditemukan di katalog","warning")}pe=""}}else e.key&&e.key.length===1&&(pe=(pe||"")+e.key,clearTimeout(Ma),Ma=setTimeout(()=>{pe=""},150))},document.addEventListener("keydown",window.__posBarcodeFn)},Mt=e=>{const t=(m.products||[]).find(i=>i&&String(i.id)===String(e));if(!t)return!1;if(!(t.isActive!=="false"&&t.isActive!==!1))return g("Produk ini sedang tidak tersedia","warning"),!1;if(t.variants&&t.variants.length>0)return Ja().then(()=>{typeof window.openPOSVariantSheet=="function"&&window.openPOSVariantSheet(e)}),!0;const r=Qe(t);if(r.isManaged&&!r.isPreorder&&r.isOutOfStock)return g(`Maaf, stok "${t.name}" sedang kosong!`,"warning"),!1;const o=T.find(i=>String(i.id)===String(e)&&!i.isVariant);if(o){const i=parseFloat((o.qty+1).toFixed(3));if(r.isManaged&&!r.isPreorder&&i>r.totalStock)return g(`Stok tidak cukup! Tersisa: ${q(r.totalStock)} ${t.unit||"pcs"}`,"warning"),!1;o.qty=i,be(o)}else{const i=parseFloat(t.price)||0;T.push(be({id:t.id,name:t.name,price:i,basePrice:i,hpp:parseFloat(t.hpp)||0,qty:1,unit:t.unit||"pcs",poTime:t.poTime||"",discount:0,subtotal:i,isVariant:!1,isWholesale:!1}))}return he(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"),V(),!0},ss=(e,t)=>{const a=(m.products||[]).find(l=>l&&String(l.id)===String(e));if(!a)return!1;if(!(a.isActive!=="false"&&a.isActive!==!1))return g("Produk ini sedang tidak tersedia","warning"),!1;const r=Qe(a);if(r.isManaged&&!r.isPreorder&&r.isOutOfStock)return g(`Maaf, stok "${a.name}" sedang kosong!`,"warning"),!1;const o=tt(t)||1,i=T.find(l=>String(l.id)===String(e)&&!l.isVariant);if(i){const l=parseFloat((i.qty+o).toFixed(3));if(r.isManaged&&!r.isPreorder&&l>r.totalStock)return g(`Stok tidak cukup! Tersisa: ${q(r.totalStock)} ${a.unit||"pcs"}`,"warning"),!1;i.qty=l,be(i)}else{if(r.isManaged&&!r.isPreorder&&o>r.totalStock)return g(`Stok tidak cukup! Tersisa: ${q(r.totalStock)} ${a.unit||"pcs"}`,"warning"),!1;const l=parseFloat(a.price)||0,d=be({id:a.id,name:a.name,price:l,basePrice:l,hpp:parseFloat(a.hpp)||0,qty:o,unit:a.unit||"pcs",poTime:a.poTime||"",discount:0,subtotal:l*o,isVariant:!1,isWholesale:!1});T.push(d)}return he(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"),V(),!0},rs=(e,t,a,s,r=1)=>{const o=(m.products||[]).find(u=>u&&String(u.id)===String(e));if(!o)return!1;if(!(o.isActive!=="false"&&o.isActive!==!1))return g("Produk ini sedang tidak tersedia","warning"),!1;const l=o.variants?.[s];if(l){if(!(l.isActive!==!1&&l.isActive!=="false"))return g("Varian ini sedang tidak tersedia","warning"),!1;if(m.store?.useStock===!0||m.store?.useStock==="true"){const k=parseFloat(l.stock)||0,C=`${e}__v${s}`,S=T.find(f=>f.cartKey===C),M=S&&parseFloat(S.qty)||0,A=tt(r)||1;if(k<=0)return g(`Maaf, stok varian "${l.name}" sedang kosong!`,"warning"),!1;if(M+A>k)return g(`Stok varian "${l.name}" tidak cukup! Sisa: ${q(k)}`,"warning"),!1}}const d=`${e}__v${s}`,c=tt(r)||1,n=T.find(u=>u.cartKey===d);if(n)n.qty=parseFloat((n.qty+c).toFixed(3)),be(n);else{const u=`${o.name} — ${t}`,w=parseFloat(l?.hpp!=null?l.hpp:o.hpp)||0;T.push(be({id:e,cartKey:d,name:u,variantName:t,variantIdx:s,price:a,basePrice:a,hpp:w,qty:c,unit:l?.unit||o.unit||"pcs",poTime:o.poTime||"",discount:0,subtotal:a*c,isVariant:!0,isWholesale:!1}))}return he(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"),V(),!0},os=(e,t)=>{const a=T.find(r=>(r.cartKey||String(r.id))===String(e));if(!a)return;const s=parseFloat((a.qty+t).toFixed(3));if(s<=0){$t(e);return}if(t>0){const r=(m.products||[]).find(o=>o&&String(o.id)===String(a.id));if(r&&(m.store?.useStock===!0||m.store?.useStock==="true"))if(a.isVariant&&r.variants){const i=r.variants.find(d=>d.name===a.variantName),l=parseFloat(i?.stock)||0;if(s>l){g(`Stok maksimal "${a.name}" hanya ${q(l)}`,"warning");return}}else{const i=Qe(r);if(i.isManaged&&s>i.totalStock){g(`Stok maksimal tersedia: ${q(i.totalStock)} ${r.unit||"pcs"}`,"warning");return}}}a.qty=s,be(a),t>0&&he(),V()},ns=(e,t)=>{const a=T.find(o=>(o.cartKey||String(o.id))===String(e));if(!a)return;let s=tt(t);if(s<=0){$t(e);return}const r=(m.products||[]).find(o=>o&&String(o.id)===String(a.id));if(r&&(m.store?.useStock===!0||m.store?.useStock==="true"))if(a.isVariant&&r.variants){const i=r.variants.find(d=>d.name===a.variantName),l=parseFloat(i?.stock)||0;s>l&&(g(`Stok maksimal "${a.name}" hanya ${q(l)}`,"warning"),s=l)}else{const i=Qe(r);i.isManaged&&s>i.totalStock&&(g(`Stok maksimal tersedia: ${q(i.totalStock)} ${r.unit||"pcs"}`,"warning"),s=i.totalStock)}a.qty=s,be(a),V()},is=(e,t)=>{const a=T.find(o=>(o.cartKey||String(o.id))===String(e));if(!a)return;const s=ve(t),r=a.hpp!=null?parseFloat(a.hpp):Ve(a)||0;if(r>0){const o=Math.max(0,Math.round((a.price-r)*a.qty));if(s>o){const i=ee()?`Diskon ditolak! Tidak boleh di bawah harga modal toko (HPP ${h(r)}). Maksimal diskon: ${h(o)}`:"Diskon ditolak! Nilai diskon melebihi batas diskon maksimum yang diizinkan untuk item ini.";g(i,"warning"),a.discount=o,be(a),V(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("heavy");return}}a.discount=Math.min(s,a.price*a.qty),be(a),V()},$t=e=>{T=T.filter(t=>(t.cartKey||String(t.id))!==String(e)),V(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light")},ls=()=>{if(T.length===0)return;const e=()=>{T=[],se=0,U=0,Q="rp",Z=0,R=null,V(),g("Keranjang kasir dikosongkan.")};typeof window.showConfirm=="function"?window.showConfirm("Kosongkan Keranjang","Hapus semua item dari transaksi saat ini?",e,"Ya, Kosongkan",!0):e()},lt=(e="hold")=>{try{if(typeof window<"u"&&typeof window.checkUserGesture=="function"&&!window.checkUserGesture())return;const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const a=new t,s=a.createOscillator(),r=a.createGain();s.type="sine";const o=a.currentTime;e==="hold"?(s.frequency.setValueAtTime(659.25,o),s.frequency.exponentialRampToValueAtTime(880,o+.1)):(s.frequency.setValueAtTime(880,o),s.frequency.exponentialRampToValueAtTime(1174.66,o+.1)),r.gain.setValueAtTime(.08,o),r.gain.exponentialRampToValueAtTime(1e-4,o+.16),s.connect(r),r.connect(a.destination),s.start(),s.stop(o+.16),setTimeout(()=>{a.close().catch(()=>{})},200)}catch{}},Ws=e=>{if(!e)return"";const t=Math.floor((Date.now()-e)/1e3);if(t<45)return"Baru saja";const a=Math.floor(t/60);if(a<60)return`${a} mnt lalu`;const s=Math.floor(a/60);return s<24?`${s} jam lalu`:new Date(e).toLocaleDateString("id-ID",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})};let K=[];try{const e=localStorage.getItem("pos_held_carts");if(e){const t=JSON.parse(e);Array.isArray(t)&&(K=t)}}catch{K=[]}const Ct=()=>{try{localStorage.setItem("pos_held_carts",JSON.stringify(K))}catch{}He()},He=()=>{const e=K.length,t=p("pos-held-btn-storefront"),a=p("pos-held-btn-admin");t&&(e>0?t.innerHTML=`
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
            </button>`)},At=()=>{if(T.length===0){g("Keranjang masih kosong, tidak ada transaksi untuk ditahan.","warning");return}const e=b?.name?`Antrean #${K.length+1} — ${b.name}`:`Antrean #${K.length+1}`,t=parseFloat(T.reduce((s,r)=>s+(parseFloat(r.qty)||0),0).toFixed(3)),a=D();We(!0),typeof window.pushModalHistory=="function"&&window.pushModalHistory("posHoldPrompt"),document.getElementById("pos-hold-prompt-modal")?.remove(),document.body.insertAdjacentHTML("beforeend",`
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
                        <p class="font-black text-slate-800 dark:text-slate-100 text-sm mt-0.5">${q(t)} item</p>
                    </div>
                    <div class="text-right">
                        <p class="text-[10px] font-bold text-amber-700 dark:text-amber-300 uppercase tracking-wider">Total Tagihan</p>
                        <p class="font-black text-sm sm:text-base" style="color:var(--color-primary)">${h(a)}</p>
                    </div>
                </div>
                <div>
                    <label class="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1.5 block">Label / Catatan Antrean Pelanggan</label>
                    <input id="pos-hold-note-input" type="text" value="${x(e)}" placeholder="Contoh: Bpk Budi (ambil barang lagi)..."
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
    </div>`),setTimeout(()=>{const s=p("pos-hold-note-input");s&&(s.focus(),s.select())},50)},Ot=(e=!1)=>{const t=p("pos-hold-prompt-modal");t&&(!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("posHoldPrompt",!1,()=>t.remove()):t.remove())},Zt=()=>{if(T.length===0)return;const t=(p("pos-hold-note-input")?.value||"").trim()||`Antrean #${K.length+1}`,a={id:`HELD-${Date.now().toString(36).toUpperCase()}`,time:Date.now(),note:t,cart:JSON.parse(JSON.stringify(T)),globalDisc:ne(),discountType:Q,discountVal:U,customer:{...b},total:D(),subtotal:re(),itemCount:parseFloat(T.reduce((s,r)=>s+(parseFloat(r.qty)||0),0).toFixed(3))};K.unshift(a),Ct(),T=[],se=0,U=0,Q="rp",b={name:"",phone:"",isMember:!1,memberId:null,isNewTempo:!1},Ot(),V(),z(),lt("hold"),g(`Antrean "${t}" berhasil diparkir!`,"success")},dt=(e=!1)=>{!e&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("posHeldModal"),document.getElementById("pos-held-list-modal")?.remove();const t=K.length,a=t===0?`
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
            ${K.map((s,r)=>{const o=x(s.id),i=(s.cart||[]).slice(0,3).map(d=>`${x(d.name)} (${q(d.qty)}x)`).join(", "),l=(s.cart||[]).length>3?` +${s.cart.length-3} lainnya`:"";return`
                <div class="p-3.5 sm:p-4 hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div class="min-w-0 flex-1">
                        <div class="flex items-center gap-2 mb-1 flex-wrap">
                            <span class="px-2 py-0.5 rounded-lg bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 font-black text-[10px] uppercase">
                                #${r+1}
                            </span>
                            <h4 class="font-black text-xs sm:text-sm text-slate-900 dark:text-white truncate" title="${x(s.note)}">
                                ${x(s.note)}
                            </h4>
                            <span class="text-[10px] text-slate-400">• ${Ws(s.time)}</span>
                        </div>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                            <i class="fa-solid fa-box-open mr-1 text-[10px] opacity-70"></i>
                            <span>${i}${l}</span>
                        </p>
                        <div class="flex items-center gap-3 mt-1.5 text-xs">
                            <span class="text-slate-500 font-medium">${q(s.itemCount)} item</span>
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
    </div>`)},ze=(e=!1)=>{const t=p("pos-held-list-modal");t&&(!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("posHeldModal",!1,()=>t.remove()):t.remove())},Xt=e=>{const t=K.findIndex(a=>a.id===e);if(t===-1){g("Transaksi tertahan tidak ditemukan.","warning");return}if(T.length>0){document.getElementById("pos-recall-confirm-modal")?.remove(),document.body.insertAdjacentHTML("beforeend",`
        <div id="pos-recall-confirm-modal" class="fixed inset-0 z-[10000] flex items-center justify-center p-4" style="background:rgba(15,23,42,0.75)">
            <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-sm border border-slate-200/80 dark:border-slate-800 overflow-hidden">
                <div class="p-5 text-center">
                    <div class="w-14 h-14 rounded-2xl bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto mb-3 text-2xl shadow-inner">
                        <i class="fa-solid fa-triangle-exclamation"></i>
                    </div>
                    <h3 class="font-black text-sm text-slate-900 dark:text-white mb-1">Keranjang Masih Berisi Item</h3>
                    <p class="text-xs text-slate-500 leading-relaxed mb-4">
                        Ada <span class="font-bold text-slate-800 dark:text-slate-200">${T.length} jenis item</span> di transaksi aktif saat ini. Ingin tahan transaksi aktif ke antrean baru atau menimpa?
                    </p>
                    <div class="flex flex-col gap-2">
                        <button onclick="window.posHoldCurrentAndRecall('${x(e)}')" class="w-full py-2.5 rounded-xl text-white font-bold text-xs shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5 active:scale-95 hover:brightness-105" style="background:var(--color-primary)">
                            <i class="fa-solid fa-floppy-disk"></i>
                            <span>Tahan Transaksi Aktif &amp; Panggil</span>
                        </button>
                        <button onclick="window.posOverwriteAndRecall('${x(e)}')" class="w-full py-2 rounded-xl border border-rose-200 dark:border-rose-900 text-rose-600 dark:text-rose-400 font-bold text-xs hover:bg-rose-50 dark:hover:bg-rose-950/20 transition-all cursor-pointer">
                            Timpa Transaksi Aktif
                        </button>
                        <button onclick="document.getElementById('pos-recall-confirm-modal')?.remove()" class="w-full py-2 rounded-xl text-slate-400 text-xs font-medium hover:text-slate-600 transition-all cursor-pointer">
                            Batal
                        </button>
                    </div>
                </div>
            </div>
        </div>`);return}ea(t)},ea=e=>{const t=K[e];t&&(T=JSON.parse(JSON.stringify(t.cart||[])),Q=t.discountType||"rp",U=t.discountVal!==void 0?t.discountVal:t.globalDisc||0,se=ne(),b=t.customer?{...t.customer}:{name:"",phone:"",isMember:!1,memberId:null,isNewTempo:!1},K.splice(e,1),Ct(),ze(),V(),z(),lt("recall"),g(`Antrean "${t.note}" berhasil dipanggil kembali!`,"success"))},ta=e=>{document.getElementById("pos-recall-confirm-modal")?.remove();const t=b?.name?`Antrean #${K.length+1} — ${b.name}`:`Antrean #${K.length+1}`,a={id:`HELD-${Date.now().toString(36).toUpperCase()}`,time:Date.now(),note:t,cart:JSON.parse(JSON.stringify(T)),globalDisc:ne(),discountType:Q,discountVal:U,customer:{...b},total:D(),subtotal:re(),itemCount:parseFloat(T.reduce((r,o)=>r+(parseFloat(o.qty)||0),0).toFixed(3))};K.unshift(a);const s=K.findIndex(r=>r.id===e);s!==-1?ea(s):(Ct(),ze())},aa=e=>{document.getElementById("pos-recall-confirm-modal")?.remove();const t=K.findIndex(a=>a.id===e);t!==-1&&ea(t)},sa=e=>{const t=K.find(a=>a.id===e);t&&(document.getElementById("pos-delete-confirm-modal")?.remove(),document.body.insertAdjacentHTML("beforeend",`
    <div id="pos-delete-confirm-modal" class="fixed inset-0 z-[10005] flex items-center justify-center p-4" style="background:rgba(15,23,42,0.8)">
        <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-xs border border-slate-200 dark:border-slate-800 p-6 text-center transform transition-all">
            <div class="w-14 h-14 rounded-2xl bg-rose-50 dark:bg-rose-950/40 text-rose-500 border border-rose-200 dark:border-rose-900/50 flex items-center justify-center mx-auto mb-3.5 text-2xl shadow-inner">
                <i class="fa-solid fa-trash-can"></i>
            </div>
            <h4 class="font-black text-sm text-slate-900 dark:text-white mb-1.5">Hapus Antrean Ini?</h4>
            <p class="text-xs text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
                Antrean <span class="font-bold text-slate-800 dark:text-slate-200">"${x(t.note)}"</span> (${t.itemCount} item • ${h(t.total)}) akan dihapus permanen.
            </p>
            <div class="flex gap-2.5">
                <button onclick="document.getElementById('pos-delete-confirm-modal')?.remove()" class="flex-1 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer">
                    Batal
                </button>
                <button onclick="window.posExecuteDeleteHeld('${x(e)}')" class="flex-1 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 active:scale-95 text-xs font-bold text-white shadow-md shadow-rose-600/30 transition-all cursor-pointer flex items-center justify-center gap-1.5">
                    <i class="fa-solid fa-trash-can text-[11px]"></i>
                    <span>Ya, Hapus</span>
                </button>
            </div>
        </div>
    </div>`))},ra=e=>{document.getElementById("pos-delete-confirm-modal")?.remove();const t=K.find(a=>a.id===e);K=K.filter(a=>a.id!==e),Ct(),g(`Antrean "${t?.note||""}" berhasil dihapus.`,"info"),dt(!0)},oa=()=>{const e=p("pos-mobile-cart-drawer"),t=p("pos-mobile-cart-sheet");e&&t&&(e.classList.remove("opacity-0","pointer-events-none"),e.classList.add("opacity-100"),t.classList.remove("translate-y-full"),t.classList.add("translate-y-0"),typeof window.pushModalHistory=="function"&&window.pushModalHistory("posCartDrawer"),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},We=(e=!1)=>{const t=p("pos-mobile-cart-drawer"),a=p("pos-mobile-cart-sheet");if(t&&a){const s=()=>{a.classList.add("translate-y-full"),a.classList.remove("translate-y-0"),t.classList.add("opacity-0","pointer-events-none"),t.classList.remove("opacity-100")};!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("posCartDrawer",!1,s):s()}},Js=e=>{if(!e)return"";if(e.img&&typeof e.img=="string")return It(e.img,"w150-rw");const t=(m?.products||[]).find(a=>a&&String(a.id)===String(e.id));return t&&t.img&&typeof t.img=="string"?It(t.img,"w150-rw"):""},z=(e=!1)=>{try{if(e||(qe=1),!m?.products||!m.products.length)try{const n=JSON.parse(localStorage.getItem("freshmart_products")||"null");Array.isArray(n)&&n.length>0&&(m||(window.appData={}),m.products=n)}catch{}const t=Array.isArray(m?.products)?m.products:[],a=t.filter(n=>{if(!n||n.isActive==="false"||n.isActive===!1||fe&&n.category!==fe||ke&&(n.subCategory||"").trim().toLowerCase()!==ke.toLowerCase())return!1;if(le){const u=String(le).toLowerCase(),w=String(n.name||"").toLowerCase(),k=String(n.barcode||"").toLowerCase(),C=String(n.sku||"").toLowerCase(),S=String(n.category||"").toLowerCase(),M=String(n.subCategory||"").toLowerCase(),A=String(n.brand||"").toLowerCase(),f=Array.isArray(n.variants)&&n.variants.some(P=>(P.name||"").toLowerCase().includes(u)||(P.sku||"").toLowerCase().includes(u)||(P.barcode||"").toLowerCase().includes(u));return w.includes(u)||k.includes(u)||C.includes(u)||S.includes(u)||M.includes(u)||A.includes(u)||f}return!0}),s=t.filter(n=>n&&n.isActive!=="false"&&n.isActive!==!1&&n.category).map(n=>String(n.category).trim()).filter(n=>n.length>0),o=["Semua",...new Set(s)].map(n=>{const u=n==="Semua",w=u?!fe:fe===n;return`<button type="button" onclick="window.posCatFilter('${x(u?"":n)}')" class="shrink-0 px-3.5 py-1.5 rounded-xl text-[11px] font-black uppercase tracking-wider border transition-all active:scale-95 shadow-2xs cursor-pointer touch-manipulation select-none ${w?"text-white border-transparent":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/50"}" style="${w?"background:linear-gradient(135deg, var(--color-primary-light,#e1b858) 0%, var(--color-primary,#c59b27) 60%, var(--color-primary-dark,#a87f1b) 100%);box-shadow:0 2px 8px rgba(var(--color-primary-rgb),0.3)":""}">${x(n)}</button>`}).join("");let i="";if(fe){const n=(m?.categories||[]).find(S=>S.name===fe),u=Array.isArray(n?.subCategories)?n.subCategories:[],w=t.filter(S=>S&&S.isActive!=="false"&&S.isActive!==!1&&S.category===fe),k={};u.forEach(S=>{const M=(S||"").trim();M&&(k[M]=0)}),w.forEach(S=>{const M=(S.subCategory||"").trim();M&&(k[M]=(k[M]||0)+1)});const C=Object.keys(k).sort().map(S=>({name:S,count:k[S]}));C.length>0&&(i=`
                <div class="flex items-center gap-1.5 overflow-x-auto pb-1 hide-scrollbar pt-1.5 mt-1 border-t border-slate-100 dark:border-slate-700/50 w-full">
                    <button type="button" onclick="window.posSubCatFilter('')" class="shrink-0 px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase transition-all active:scale-95 border cursor-pointer touch-manipulation select-none ${ke?"bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700":"bg-slate-800 text-white dark:bg-white dark:text-slate-900 border-transparent shadow-2xs"}">Semua Jenis</button>
                    ${C.map(S=>{const M=ke.toLowerCase()===S.name.toLowerCase();return`<button type="button" onclick="window.posSubCatFilter('${x(S.name).replace(/'/g,"\\'")}')" class="shrink-0 px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all active:scale-95 border flex items-center gap-1 cursor-pointer touch-manipulation select-none ${M?"bg-[var(--color-primary)] text-white border-transparent shadow-2xs":"bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700"}">
                            <span>${x(S.name)}</span>
                            <span class="text-[9px] px-1 py-0.2 rounded-full ${M?"bg-white/20 text-white":"bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300"}">${S.count}</span>
                        </button>`}).join("")}
                </div>`)}const l=a.slice(0,qe*Gs),d=a.length>l.length;let c=a.length===0?`<div class="col-span-full flex flex-col items-center justify-center py-20 text-slate-400 dark:text-slate-600">
                 <div class="w-16 h-16 rounded-3xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 mb-3 shadow-inner">
                   <i class="fa-solid fa-box-open text-2xl"></i>
                 </div>
                 <p class="font-bold text-sm text-slate-600 dark:text-slate-400">Produk Tidak Ditemukan</p>
                 <p class="text-xs text-slate-400 mt-0.5">Coba gunakan kata kunci pencarian atau kategori lain</p>
               </div>`:l.map(n=>{if(!n)return"";const u=!!(n.img&&typeof n.img=="string"&&n.img.trim()),w=u?It(n.img,"w300-rw"):"",k=Array.isArray(n.variants)&&n.variants.length>0,C=Array.isArray(n.wholesale)&&n.wholesale.length>0,S=T.filter(L=>L&&String(L.id)===String(n.id)),M=parseFloat(S.reduce((L,N)=>L+(N&&N.qty&&parseFloat(N.qty)||0),0).toFixed(3)),A=x(String(n.id!=null?n.id:"")),f=Qe(n),P=x(String(n.name||"Produk")),O=x(String(n.category||"")),F=parseFloat(n.price)||0;let E="",G="";n.priceNormal&&parseFloat(n.priceNormal)>F&&(E=`<span class="pos-tag-chip pos-tag-promo shrink-0 whitespace-nowrap"><i class="fa-solid fa-tags"></i> -${Math.round((parseFloat(n.priceNormal)-F)/parseFloat(n.priceNormal)*100)}%</span>`,G=`<span class="text-[10px] text-slate-400 line-through font-bold">${h(parseFloat(n.priceNormal))}</span>`);const v=x(`${n.subCategory||O||"PRODUK"}${n.brand?` · ${n.brand}`:""}`),B=[];if(E&&B.push(E),f.isOutOfStock?B.push('<span class="pos-tag-chip pos-tag-low shrink-0 whitespace-nowrap"><i class="fa-solid fa-ban"></i> Habis</span>'):f.isManaged&&f.isLowStock?B.push(`<span class="pos-tag-chip pos-tag-low shrink-0 whitespace-nowrap"><i class="fa-solid fa-fire"></i> Sisa ${q(f.totalStock)}</span>`):f.isManaged&&f.totalStock>0&&B.push(`<span class="pos-tag-chip pos-tag-stock shrink-0 whitespace-nowrap"><i class="fa-solid fa-box"></i> ${q(f.totalStock)}</span>`),f.isPreorder){const L=Xa(f.poTime);B.push(`<span class="pos-tag-chip pos-tag-po shrink-0 whitespace-nowrap"><i class="fa-solid fa-clock"></i> PO ${x(L)}</span>`)}k&&B.push('<span class="pos-tag-chip pos-tag-variant shrink-0 whitespace-nowrap"><i class="fa-solid fa-layer-group"></i> Varian</span>'),C&&B.push('<span class="pos-tag-chip pos-tag-grosir shrink-0 whitespace-nowrap"><i class="fa-solid fa-tags"></i> Grosir</span>');const X=n.variants&&n.variants.length?Math.max(...n.variants.map(L=>parseFloat(L.poin)||0)):parseFloat(n.poin)||0;X>0&&B.push(`<span class="pos-tag-chip shrink-0 whitespace-nowrap bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)]"><i class="fa-solid fa-star"></i> +${X}</span>`);const H=B.slice(0,3).join(""),I=B.slice(0,2).join("");let $="";if(ee()){let L=0,N="";if(k){const ce=(n.variants||[]).map(Y=>Y.hpp!=null?parseFloat(Y.hpp)||0:parseFloat(n.hpp)||0).filter(Y=>Y>0);if(ce.length>0){const Y=Math.min(...ce),mt=Math.max(...ce);L=Y,N=Y===mt?h(Y):`${h(Y)} - ${h(mt)}`}else n.hpp!=null&&parseFloat(n.hpp)>0&&(L=parseFloat(n.hpp),N=h(L))}else n.hpp!=null&&parseFloat(n.hpp)>0&&(L=parseFloat(n.hpp),N=h(L));(N||n.hpp!=null&&parseFloat(n.hpp)>0)&&($=`<span class="pos-hpp-tag" title="Harga Pokok Penjualan (Modal Toko)"><i class="fa-solid fa-coins text-[8px]"></i> Modal: <b>${N||h(parseFloat(n.hpp))}</b></span>`)}const W=Rt(n,{size:"sm"}),Te=Rt(n,{size:"md"});return we==="list"?`
                    <div class="pos-list-item${M>0?" in-cart":""}${f.isOutOfStock?" is-out-of-stock cursor-not-allowed":" cursor-pointer"}" onclick="window.posAddToCart('${A}')">
                        <div class="pos-list-thumb">
                            ${u?`<img width="52" height="52" loading="lazy" decoding="async" src="${x(w)}" alt="${P}"
                                     class="absolute inset-0 w-full h-full object-cover object-center block"
                                     onerror="this.onerror=null;this.style.display='none';this.nextElementSibling.style.display='flex';">
                                   <div class="absolute inset-0 w-full h-full" style="display:none">${W}</div>`:W}
                            ${M>0?`<div class="pos-qty-badge" style="top:2px;right:2px;min-width:18px;height:18px;font-size:9px;border-width:1.5px">${q(M)}</div>`:""}
                        </div>
                        <div style="flex:1;min-width:0" class="flex flex-col justify-center">
                            <!-- Line 1: Eyebrow Kategori & Brand Terdedikasi (100% lebar kartu, anti-terpotong) -->
                            <p class="text-[9px] uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500 truncate leading-none mb-1">${v}</p>
                            <!-- Line 2: Nama Produk -->
                            <p class="text-xs font-bold text-slate-800 dark:text-slate-100 truncate leading-snug" title="${P}">${P}</p>
                            <!-- Line 3: Chip Operasional Terprioritas (Anti-wrap & Anti-potong) -->
                            ${H?`<div class="flex items-center gap-1 overflow-x-auto hide-scrollbar no-scrollbar flex-nowrap py-0.5 mt-0.5">${H}</div>`:""}
                            <!-- Line 4: Harga Jual & Harga Modal HPP -->
                            <div class="flex items-center gap-2 flex-wrap mt-1">
                                <span style="font-size:12px;font-weight:900;color:var(--color-primary)">${h(F)}</span>
                                ${G}
                                ${$}
                            </div>
                        </div>
                        ${f.isOutOfStock?'<button class="pos-add-btn opacity-40 cursor-not-allowed shrink-0" disabled title="Stok Habis"><i class="fa-solid fa-ban"></i></button>':`<button onclick="event.stopPropagation();window.posAddToCart('${A}')" class="pos-add-btn shrink-0" title="Tambah ke keranjang"><i class="fa-solid fa-plus"></i></button>`}
                    </div>`:`
                <div class="pos-product-card${M>0?" in-cart":""}${f.isOutOfStock?" is-out-of-stock cursor-not-allowed":" cursor-pointer"}" onclick="window.posAddToCart('${A}')">
                    <!-- Kotak Gambar Rasio 1:1 Bersih (Foto Tidak Tertutup Tumpukan Badge) -->
                    <div class="pos-img-box">
                        ${f.isOutOfStock?`
                            <div class="absolute inset-0 bg-slate-900/70 z-20 flex items-center justify-center rounded-xl">
                                <span class="bg-rose-600 text-white text-[9px] font-black px-2.5 py-1 rounded-lg shadow-md uppercase tracking-wider flex items-center gap-1">
                                    <i class="fa-solid fa-ban"></i> HABIS
                                </span>
                            </div>`:""}
                        ${M>0?`<div class="pos-qty-badge">${q(M)}</div>`:""}
                        ${u?`<img width="300" height="300" loading="lazy" decoding="async" src="${x(w)}" alt="${P}"
                                 class="absolute inset-0 w-full h-full object-cover object-center block"
                                 onerror="this.onerror=null;this.style.display='none';this.nextElementSibling.style.display='flex';">
                               <div class="absolute inset-0 w-full h-full" style="display:none">${Te}</div>`:Te}
                    </div>
                    <!-- Info Produk Rapi -->
                    <div class="pos-card-info">
                        <p class="pos-card-cat truncate mb-1">${v}</p>
                        <p class="pos-card-name leading-tight line-clamp-2" title="${P}">${P}</p>
                        <!-- Chip Operasional Rapi Terprioritas (Maks 2 chip presisi anti-overflow, h-5 penjaga tinggi seragam) -->
                        <div class="h-5 flex items-center gap-1 mt-1 mb-0.5 overflow-x-auto hide-scrollbar no-scrollbar flex-nowrap">
                            ${I}
                        </div>
                        <div class="pos-card-footer flex items-center justify-between gap-1">
                            <div class="flex flex-col min-w-0 pr-1">
                                <div class="flex items-baseline gap-1.5 flex-wrap">
                                    <span class="pos-card-price">${h(F)}</span>
                                    ${G}
                                </div>
                                <div class="flex items-center gap-1 mt-1">
                                    ${$}
                                </div>
                            </div>
                            ${f.isOutOfStock?'<button class="pos-add-btn opacity-40 cursor-not-allowed shrink-0" disabled title="Stok Habis"><i class="fa-solid fa-ban"></i></button>':`<button onclick="event.stopPropagation();window.posAddToCart('${A}')" class="pos-add-btn shrink-0" title="Tambah ke keranjang"><i class="fa-solid fa-plus"></i></button>`}
                        </div>
                    </div>
                </div>`}).join("");a.length>0&&d&&(c+=`
            <div class="col-span-full py-4 flex flex-col items-center justify-center gap-2">
                <button type="button" onclick="window.posLoadMoreProducts()" class="px-6 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all shadow-2xs active:scale-95 flex items-center gap-2 cursor-pointer group">
                    <i class="fa-solid fa-layer-group text-[var(--color-primary)] group-hover:scale-110 transition-transform"></i>
                    <span>Tampilkan Lebih Banyak (${a.length-l.length} lagi)</span>
                </button>
                <span class="text-[10px] text-slate-400 dark:text-slate-500 font-medium">Menampilkan ${l.length} dari ${a.length} produk</span>
            </div>`),document.querySelectorAll("#pos-cat-filter").forEach(n=>{n.innerHTML=o}),document.querySelectorAll("#pos-subcat-filter").forEach(n=>{n.innerHTML=i,i?n.classList.remove("hidden"):n.classList.add("hidden")}),document.querySelectorAll("#pos-catalog-grid").forEach(n=>{n.className=we==="list"?"pos-catalog-list-mode":"pos-catalog-grid-mode",n.innerHTML=c})}catch(t){console.error("[POS] renderCatalog error:",t),document.querySelectorAll("#pos-catalog-grid").forEach(a=>{a.innerHTML=`
                <div class="col-span-full flex flex-col items-center justify-center py-16 text-slate-500">
                    <i class="fa-solid fa-triangle-exclamation text-amber-500 text-3xl mb-3"></i>
                    <p class="font-bold text-sm text-slate-700 dark:text-slate-300">Gagal Memuat Katalog Kasir</p>
                    <p class="text-xs text-slate-400 mt-1 mb-4">${x(t.message||"Terjadi kesalahan")}</p>
                    <button onclick="if(typeof window.posRenderCatalog==='function') window.posRenderCatalog(); else if(typeof window.refreshPOSCatalog==='function') window.refreshPOSCatalog();" class="px-4 py-2 rounded-xl text-xs font-bold text-white shadow-md active:scale-95 cursor-pointer" style="background:var(--color-primary)">
                        <i class="fa-solid fa-arrows-rotate mr-1.5"></i> Coba Muat Ulang
                    </button>
                </div>`})}},V=()=>{const e=parseFloat(T.reduce((f,P)=>f+(parseFloat(P.qty)||0),0).toFixed(3)),t=re(),a=D(),s=h(a),r=h(t),o=T.length===0?`<div class="flex flex-col items-center justify-center h-full py-12 text-slate-300 dark:text-slate-600 select-none">
            <div class="w-16 h-16 rounded-3xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 mb-3 shadow-inner">
                <i class="fa-solid fa-cart-shopping text-2xl"></i>
            </div>
            <p class="text-sm font-bold text-slate-600 dark:text-slate-400">Keranjang Kasir Kosong</p>
            <p class="text-xs text-slate-400 mt-1 text-center max-w-[200px]">Pilih produk di katalog atau scan barcode untuk menambah</p>
           </div>`:T.map(f=>{const P=x(String(f.cartKey||f.id)),O=Js(f),F=f.isVariant&&f.variantName?x(f.name.replace(` — ${f.variantName}`,"")):x(f.name),E=f.hpp!=null?parseFloat(f.hpp):Ve(f)||0,G=E>0?Math.max(0,Math.round((f.price-E)*f.qty)):Math.round(f.price*f.qty),v=E>0?Math.round(f.subtotal-E*f.qty):0,B=Rt(f,{size:"thumb"});return`
            <div class="group flex items-start gap-2.5 p-2.5 bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 shadow-xs hover:border-[var(--color-primary)] transition-all">
                <!-- 44px Thumbnail -->
                <div class="w-11 h-11 rounded-xl overflow-hidden shrink-0 border border-slate-200/60 dark:border-slate-700 flex items-center justify-center">
                    ${O?`<img width="44" height="44" loading="lazy" src="${x(O)}" alt="${x(f.name)}" onerror="this.onerror=null; this.style.display='none'; this.nextElementSibling.style.display='flex';" class="w-full h-full object-cover">
                           <div class="w-full h-full" style="display:none">${B}</div>`:B}
                </div>
                <!-- Details -->
                <div class="flex-1 min-w-0 pr-1">
                    <p class="text-xs font-bold text-slate-800 dark:text-slate-100 truncate leading-snug" title="${x(f.name)}">${F}</p>
                    <div class="flex items-center gap-1.5 mt-0.5 flex-wrap">
                        ${f.isWholesale?'<span class="inline-flex items-center text-[8px] font-black px-1.5 py-0.5 rounded text-white shadow-2xs" style="background:var(--color-primary)">GROSIR</span>':""}
                        ${f.isVariant?`<span class="inline-flex items-center gap-1 text-[8px] font-black px-1.5 py-0.5 rounded text-white shadow-2xs" style="background:var(--color-primary);opacity:0.95"><i class="fa-solid fa-layer-group text-[7px]"></i>${x(f.variantName||"VARIAN")}</span>`:""}
                        ${f.poTime?`<span class="inline-flex items-center gap-1 text-[8px] font-bold px-1.5 py-0.5 rounded text-amber-700 bg-amber-100 dark:bg-amber-900/30 dark:text-amber-300 border border-amber-200 dark:border-amber-800 shadow-2xs uppercase tracking-wide"><i class="fa-solid fa-clock text-[7px]"></i> PO ${x(f.poTime)}</span>`:""}
                        ${ee()&&E>0?`<span class="inline-flex items-center gap-1 text-[8px] font-black px-1.5 py-0.5 rounded text-amber-950 bg-amber-100 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-300/80 dark:border-amber-700 shadow-2xs" title="Harga Modal (HPP)"><i class="fa-solid fa-coins text-[7px] text-amber-600 dark:text-amber-400"></i>HPP: ${h(E)}</span>`:""}
                        <span class="text-[10px] text-slate-500 font-medium">
                            ${f.isWholesale&&f.basePrice?`<span class="line-through text-slate-400">${h(f.basePrice)}</span> <span class="font-bold" style="color:var(--color-primary)">${h(f.price)}</span>`:h(f.price)}
                        </span>
                    </div>
                    <div class="flex items-center gap-1.5 mt-1.5 flex-wrap">
                        <span class="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Diskon:</span>
                        <input type="number" min="0" ${E>0?`max="${G}"`:""} placeholder="0" value="${f.discount||""}" onchange="window.posSetItemDisc('${P}',this.value)"
                            class="w-16 text-[10px] font-mono font-bold border border-slate-200 dark:border-slate-700 rounded-md px-1.5 py-0.5 bg-slate-50 dark:bg-slate-700/60 text-right focus:outline-none focus:border-[var(--color-primary)] transition-all">
                        ${ee()&&E>0?`<span class="text-[9px] text-amber-600 dark:text-amber-400 font-bold whitespace-nowrap" title="Maksimal diskon agar tidak di bawah harga modal HPP">(Maks: ${h(G)})</span>`:""}
                    </div>
                </div>
                <!-- Stepper & Subtotal -->
                <div class="flex flex-col items-end shrink-0">
                    <div class="flex items-center gap-1">
                        <div class="flex items-center bg-slate-100 dark:bg-slate-700/80 rounded-lg p-0.5 border border-slate-200 dark:border-slate-600 focus-within:border-[var(--color-primary)] transition-colors">
                            <button onclick="window.posUpdateQty('${P}',-1)" class="w-5 h-5 rounded text-slate-600 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-600 font-black text-xs flex items-center justify-center cursor-pointer active:scale-90 transition-all">−</button>
                            <input type="number" step="any" min="0.01" value="${q(f.qty)}" onchange="window.posSetQty('${P}',this.value)"
                                class="w-11 text-center text-[11px] font-black bg-transparent text-slate-800 dark:text-slate-100 focus:outline-none px-0.5">
                            <button onclick="window.posUpdateQty('${P}',1)" class="w-5 h-5 rounded text-slate-600 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-600 font-black text-xs flex items-center justify-center cursor-pointer active:scale-90 transition-all">+</button>
                        </div>
                        <button onclick="window.posRemoveItem('${P}')" class="w-6 h-6 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 flex items-center justify-center text-xs transition-all cursor-pointer" title="Hapus item">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                    <p class="text-xs font-black mt-1.5" style="color:var(--color-primary)">${h(f.subtotal)}</p>
                    ${ee()&&E>0?`<p class="text-[9px] font-bold ${v>=0?"text-emerald-600 dark:text-emerald-400":"text-rose-500"} mt-0.5" title="Estimasi laba kotor item ini"><i class="fa-solid fa-arrow-trend-up text-[8px] mr-0.5"></i>Untung: ${h(v)}</p>`:""}
                </div>
            </div>`}).join("");document.querySelectorAll(".pos-cart-items-target").forEach(f=>f.innerHTML=o),document.querySelectorAll(".pos-subtotal-target").forEach(f=>f.textContent=r),document.querySelectorAll(".pos-total-target").forEach(f=>f.textContent=s),document.querySelectorAll(".pos-item-count-target").forEach(f=>f.textContent=q(e));const i=ee(),l=i?xe():0,d=h(l),c=i?Math.max(0,a-l):0,n=h(c);document.querySelectorAll(".pos-total-hpp-target").forEach(f=>f.textContent=d),document.querySelectorAll(".pos-total-margin-target").forEach(f=>f.textContent=n),document.querySelectorAll(".pos-hpp-margin-row").forEach(f=>{f.style.display=i?"flex":"none"});const u=ne(),w=h(u);document.querySelectorAll(".pos-disc-val-input").forEach(f=>{document.activeElement!==f&&(f.value=U||"")}),document.querySelectorAll(".pos-global-disc-target").forEach(f=>{document.activeElement!==f&&(f.value=U||"")}),document.querySelectorAll(".pos-disc-preview-target").forEach(f=>{u>0?(f.textContent=`- ${w}`,f.classList.remove("hidden"),f.classList.add("text-rose-500")):(f.textContent="",f.classList.add("hidden"))}),document.querySelectorAll(".pos-disc-type-rp").forEach(f=>{Q==="rp"?(f.className="pos-disc-type-rp px-2.5 py-0.5 rounded-md transition-all cursor-pointer font-black text-white shadow-xs text-[10px]",f.style.background="var(--color-primary)",f.style.color="#ffffff"):(f.className="pos-disc-type-rp px-2.5 py-0.5 rounded-md transition-all cursor-pointer text-slate-600 dark:text-slate-300 hover:text-slate-900 font-bold text-[10px]",f.style.background="transparent",f.style.color="")}),document.querySelectorAll(".pos-disc-type-pct").forEach(f=>{Q==="percent"?(f.className="pos-disc-type-pct px-2.5 py-0.5 rounded-md transition-all cursor-pointer font-black text-white shadow-xs text-[10px]",f.style.background="var(--color-primary)",f.style.color="#ffffff"):(f.className="pos-disc-type-pct px-2.5 py-0.5 rounded-md transition-all cursor-pointer text-slate-600 dark:text-slate-300 hover:text-slate-900 font-bold text-[10px]",f.style.background="transparent",f.style.color="")}),document.querySelectorAll(".pos-disc-prefix").forEach(f=>{f.textContent=Q==="percent"?"%":"Rp",f.style.color="var(--color-primary)"});const k=[5,10,15,20,50],C=[2e3,5e3,1e4,25e3,5e4],S=(f,P)=>Q===P&&Number(U)===Number(f),M=Q==="percent"?`
        ${k.map(f=>{const P=S(f,"percent");return`<button onclick="window.posApplyQuickDiscount(${f},'percent')" 
                class="px-2.5 py-1 rounded-lg text-[10px] cursor-pointer transition-all active:scale-95 ${P?"text-white shadow-xs font-black":"bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700 font-bold"}"
                style="${P?"background:var(--color-primary);border:1px solid var(--color-primary);":""}">${f}%</button>`}).join("")}
        ${U>0?`<button onclick="window.posApplyQuickDiscount(0,'percent')" class="px-2.5 py-1 rounded-lg bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 text-[10px] font-bold text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800 cursor-pointer transition-all active:scale-95"><i class="fa-solid fa-rotate-left mr-1 text-[9px]"></i>Reset</button>`:""}
        `:`
        ${C.map(f=>{const P=S(f,"rp"),O=`${f/1e3}rb`;return`<button onclick="window.posApplyQuickDiscount(${f},'rp')" 
                class="px-2.5 py-1 rounded-lg text-[10px] cursor-pointer transition-all active:scale-95 ${P?"text-white shadow-xs font-black":"bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700 font-bold"}"
                style="${P?"background:var(--color-primary);border:1px solid var(--color-primary);":""}">${O}</button>`}).join("")}
        ${U>0?`<button onclick="window.posApplyQuickDiscount(0,'rp')" class="px-2.5 py-1 rounded-lg bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 text-[10px] font-bold text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800 cursor-pointer transition-all active:scale-95"><i class="fa-solid fa-rotate-left mr-1 text-[9px]"></i>Reset</button>`:""}
        `;document.querySelectorAll(".pos-disc-chips-target").forEach(f=>f.innerHTML=M),document.querySelectorAll(".pos-pay-btn-target").forEach(f=>{f.disabled=T.length===0;const P=f.querySelector(".btn-text");P&&(P.textContent=T.length>0?`BAYAR — ${s}`:"PROSES PEMBAYARAN")}),document.querySelectorAll(".pos-hold-btn-target").forEach(f=>{f.disabled=T.length===0,T.length===0?f.classList.add("opacity-40","cursor-not-allowed"):f.classList.remove("opacity-40","cursor-not-allowed")}),He();const A=p("pos-mobile-floating-bar");A&&(T.length>0?(A.classList.remove("translate-y-32","opacity-0","pointer-events-none"),A.classList.add("translate-y-0","opacity-100")):(A.classList.add("translate-y-32","opacity-0","pointer-events-none"),A.classList.remove("translate-y-0","opacity-100"),We(!0)))},na=()=>{if(T.length===0){g("Keranjang masih kosong!","warning");return}const e=xe();if(e>0&&D()<e){const t=ee()?`Transaksi ditolak! Total tagihan (${h(D())}) tidak boleh di bawah harga modal HPP (${h(e)})!`:"Transaksi ditolak! Total transaksi melebihi batas diskon maksimum yang diizinkan sistem.";g(t,"error"),typeof window.triggerHaptic=="function"&&window.triggerHaptic("heavy");return}typeof window.pushModalHistory=="function"&&window.pushModalHistory("posPayment"),b={name:"",phone:"",isMember:!1,memberId:null,isNewTempo:!1},Z=0,R=null,_="cash",ae=D(),Oe(),ct(),document.body.insertAdjacentHTML("beforeend",`
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
              <span class="text-xs text-slate-500">Total Tagihan: <span class="font-black text-sm" style="color:var(--color-primary)">${h(D())}</span></span>
              ${ee()&&e>0?`<span class="inline-flex items-center gap-1 text-[10px] font-bold text-amber-950 bg-amber-100 dark:bg-amber-950/60 dark:text-amber-300 px-2 py-0.5 rounded-full border border-amber-300/80 dark:border-amber-700 shadow-2xs"><i class="fa-solid fa-coins text-[8px] text-amber-600 dark:text-amber-400"></i>HPP: ${h(e)}</span>`:""}
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
    </div>`),Pe("cash")},Lt=(e=!1)=>{const t=p("pos-pay-modal");t&&(!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("posPayment",!1,()=>t.remove()):t.remove())},ds=(e,t,a)=>{a.forEach(s=>{const r=p(`${e}-${s}`);r&&(s===t?(r.style.background="var(--color-primary)",r.style.color="white",r.style.borderColor="var(--color-primary)",r.classList.add("shadow-xs")):(r.style.removeProperty("background"),r.style.removeProperty("color"),r.style.removeProperty("border-color"),r.classList.remove("shadow-xs")))})},Pe=e=>{const t=p("pos-pay-detail");if(!t)return;const a=D(),s=xe(),r=Math.max(0,a-s),o=Ce(),i=`
      <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-700/60 mb-2.5 text-xs space-y-1.5">
        <div class="flex justify-between items-center">
          <span class="text-slate-500 font-medium">Subtotal Belanja</span>
          <span class="font-bold font-mono text-xs">${h(re())}</span>
        </div>
        ${ne()>0?`
        <div class="flex justify-between items-center text-rose-500 text-[11px]">
          <span>Diskon Toko</span>
          <span class="font-bold font-mono">- ${h(ne())}</span>
        </div>`:""}
        ${o>0?`
        <div class="flex justify-between items-center text-emerald-600 dark:text-emerald-400 text-[11px]">
          <span class="flex items-center gap-1 font-bold"><i class="fa-solid fa-tags"></i> Diskon Poin (${Z} Pts)</span>
          <span class="font-black font-mono">- ${h(o)}</span>
        </div>`:""}
        ${R?`
        <div class="flex justify-between items-center text-purple-600 dark:text-purple-400 text-[11px]">
          <span class="flex items-center gap-1 font-bold"><i class="fa-solid fa-gift"></i> Klaim Hadiah</span>
          <span class="font-bold truncate max-w-[170px]">${x(R.name)} (-${R.pointsCost} Pts)</span>
        </div>`:""}
        <div class="flex justify-between items-center pt-1.5 border-t border-slate-200/60 dark:border-slate-700/60">
          <span class="text-slate-700 dark:text-slate-200 font-bold">Total Wajib Bayar</span>
          <span class="font-black text-sm" style="color:var(--color-primary)">${h(a)}</span>
        </div>
        ${ee()&&s>0?`
        <div class="flex justify-between items-center pt-1 border-t border-slate-200/40 dark:border-slate-700/40 text-[10px]">
          <span class="text-slate-400 font-semibold flex items-center gap-1"><i class="fa-solid fa-coins text-amber-500"></i> Total Modal (HPP):</span>
          <span class="font-bold text-amber-600 dark:text-amber-400">${h(s)}</span>
        </div>
        <div class="flex justify-between items-center text-[10px]">
          <span class="text-slate-400 font-semibold flex items-center gap-1"><i class="fa-solid fa-arrow-trend-up text-emerald-500"></i> Estimasi Laba Bersih:</span>
          <span class="font-bold text-emerald-600 dark:text-emerald-400">+ ${h(r)}</span>
        </div>`:""}
      </div>`;if(e==="cash"){const d=[{label:"Uang Pas",val:a,isPas:!0},{label:"10.000",val:1e4},{label:"20.000",val:2e4},{label:"50.000",val:5e4},{label:"100.000",val:1e5},{label:"200.000",val:2e5},{label:"500.000",val:5e5}].map(c=>`
            <button onclick="window.posSetQuickCash(${c.val})" type="button"
                class="px-2.5 py-1.5 rounded-xl text-[11px] font-black border transition-all active:scale-95 ${c.isPas?"text-white border-transparent shadow-xs":"bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]"}"
                style="${c.isPas?"background:var(--color-primary)":""}">
                ${c.isPas?"💵 Uang Pas":`Rp ${c.label}`}
            </button>
        `).join("");t.innerHTML=`
            ${i}
            <div class="space-y-2">
                <label class="text-[10px] font-black uppercase tracking-wider text-slate-400">Nominal Uang Diterima (Rp)</label>
                <div class="relative">
                    <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-black text-slate-400">Rp</span>
                    <input id="pos-paid-input" type="number" min="0" placeholder="${a}" value="${ae||""}"
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
                <div id="pos-change-box" class="mt-2.5 p-3 rounded-2xl border transition-all flex items-center justify-between ${ae>=a?"bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800":"bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800"}">
                    <div>
                        <p class="text-[9px] font-black uppercase tracking-wider text-slate-400">Status Kembalian</p>
                        <p id="pos-change-label" class="text-xs font-bold ${ae>=a?"text-emerald-700 dark:text-emerald-400":"text-rose-700 dark:text-rose-400"}">
                            ${ae>=a?"Kembalian Uang Pembeli:":"Uang Masih Kurang:"}
                        </p>
                    </div>
                    <span id="pos-change-display" class="text-base font-black ${ae>=a?"text-emerald-700 dark:text-emerald-400":"text-rose-600 dark:text-rose-400"}">
                        ${h(Math.abs(Za()))}
                    </span>
                </div>
            </div>
        `}else if(e==="qris"){const l=m.payment?.qrisUrl||m.store?.qrisUrl||m.payment?.qris||m.store?.qris||m.qrisUrl||"",d=l?As(l):"";t.innerHTML=`
          ${i}
          ${d?`<div class="flex flex-col items-center justify-center p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700"><img src="${x(d)}" class="w-48 h-48 object-contain rounded-xl shadow-xs" alt="QRIS"><p class="text-center text-xs font-bold text-slate-600 dark:text-slate-300 mt-2">Arahkan kamera pembeli untuk memindai QRIS</p></div>`:'<div class="p-4 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 text-xs rounded-2xl border border-amber-200 text-center font-bold"><i class="fa-solid fa-triangle-exclamation mr-1.5"></i>QRIS toko belum diatur di menu Pengaturan.</div>'}`}else if(e==="transfer"){const d=(Array.isArray(m.banks)?m.banks:[]).filter(n=>n&&(n.bankName||n.name||n.bank));let c='<option value="">Rekening bank belum diatur di CMS Admin</option>';d.length>0&&(c=d.map(n=>{const u=n.bankName||n.name||n.bank||"Bank",w=n.bankAccount||n.number||n.noRekening||n.account||"",k=n.bankOwner||n.holder||n.atasNama||n.owner||"",C=`${u}${w?" — "+w:""}${k?" a/n "+k:""}`;return`<option value="${x(C)}">${x(C)}</option>`}).join("")),t.innerHTML=`
          ${i}
          <div class="space-y-2">
            <label class="text-[10px] font-black uppercase tracking-wider text-slate-400 block">Rekening Tujuan Toko</label>
            <div class="relative">
              <select id="pos-bank-sel" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)] transition-all">
                ${c}
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
          </div>`}else if(e==="tempo"){const l=rt(),d=l.tenors||{},n=l.enabled!==!1&&!!(b.isMember&&b.paylaterActive&&b.paylaterLimit>0),u=n?Math.max(0,(b.paylaterLimit||0)-Math.max(0,b.paylaterUsed||0)):0,w=n&&a>u?a-u:0,k=p("pos-dp-input"),C=k?Math.max(0,parseFloat(k.value)||0):w>0?w:0,S=Math.max(w,C),M=Math.min(u,Math.max(0,a-S)),A=b.paylaterDueDay||5,f=["30d","2m","3m"].filter(F=>d[F]&&d[F].enabled);f.length>0&&!f.includes(Le)&&(Le=f[0]);const P=Ze(M,Le,{...l,dueDay:A}),O=f.map(F=>{const E=d[F],G=F===Le,v=Ze(M,F,{...l,dueDay:A});return`
              <button type="button" onclick="window.posSelectPaylaterTenor('${F}')"
                class="flex-1 py-2 px-2.5 rounded-xl border text-center transition-all cursor-pointer ${G?"border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)] font-black shadow-xs":"border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300"}">
                <div class="text-[11px] font-extrabold flex items-center justify-center gap-1">
                  <span>${x(E.shortLabel||E.label)}</span>
                  ${G?'<i class="fa-solid fa-circle-check text-[10px]" style="color:var(--color-primary)"></i>':""}
                </div>
                <div class="text-[10px] font-mono mt-0.5 ${G?"font-black":"text-slate-500 dark:text-slate-400"}">
                  ${h(v.totalPerMonth)}/bln
                </div>
              </button>
            `}).join("");t.innerHTML=`
          ${i}
          ${n?`
            <div class="p-3.5 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/40 rounded-2xl border border-emerald-200/80 dark:border-emerald-800/60 mb-2.5 space-y-2.5">
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
                <span class="font-black text-emerald-600 dark:text-emerald-400 font-mono text-sm">${h(u)}</span>
              </div>
              <label class="flex items-center gap-2 pt-1.5 cursor-pointer select-none border-t border-emerald-200/60 dark:border-emerald-800/40">
                <input type="checkbox" id="pos-use-paylater" ${u>0?"checked":"disabled"} onchange="window.posTogglePaylater(this.checked)" class="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 cursor-pointer">
                <span class="text-xs font-bold text-slate-700 dark:text-slate-200">Gunakan Cicilan Putri PayLater</span>
              </label>

              <!-- Tenor & Simulasi Cicilan Interaktif Kasir POS -->
              <div id="pos-paylater-tenor-box" class="space-y-2 pt-1" style="display: ${u>0?"block":"none"};">
                <div class="flex items-center justify-between">
                  <span class="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Pilih Tenor Cicilan:</span>
                  <span class="text-[9px] font-bold text-emerald-700 dark:text-emerald-400"><i class="fa-solid fa-shield-halved mr-1"></i>Tanpa Biaya Tersembunyi</span>
                </div>
                <div class="flex gap-1.5">
                  ${O}
                </div>

                <!-- Rincian Biaya & Angsuran Transparan -->
                <div id="pos-paylater-breakdown-box" class="p-2.5 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-emerald-200/60 dark:border-emerald-800/40 text-[11px] space-y-1">
                  <div class="flex justify-between text-slate-500 dark:text-slate-400">
                    <span>Pokok Dibiayai:</span>
                    <span class="font-mono font-bold text-slate-700 dark:text-slate-200">${h(P.pokokTotal)}</span>
                  </div>
                  <div class="flex justify-between text-slate-500 dark:text-slate-400">
                    <span>Biaya Admin:</span>
                    <span class="font-mono font-bold ${P.totalAdminFee>0?"text-amber-600 dark:text-amber-400":"text-emerald-600 dark:text-emerald-400"}">
                      ${P.totalAdminFee>0?h(P.totalAdminFee):"Gratis"}
                    </span>
                  </div>
                  <div class="flex justify-between text-slate-500 dark:text-slate-400">
                    <span>Biaya Penanganan / Layanan:</span>
                    <span class="font-mono font-bold ${P.totalServiceFee>0?"text-amber-600 dark:text-amber-400":"text-emerald-600 dark:text-emerald-400"}">
                      ${P.totalServiceFee>0?h(P.totalServiceFee):"Gratis"}
                    </span>
                  </div>
                  <div class="pt-1 border-t border-slate-200/60 dark:border-slate-800 flex justify-between items-center font-bold">
                    <span class="text-slate-700 dark:text-slate-200">Cicilan / Bulan (${P.months}x):</span>
                    <span class="text-xs font-black font-mono" style="color:var(--color-primary)">${h(P.totalPerMonth)}/bln</span>
                  </div>
                  <div class="flex justify-between items-center text-[10px] text-slate-400">
                    <span>Total Tagihan PayLater:</span>
                    <span class="font-mono font-bold text-slate-600 dark:text-slate-300">${h(P.grandTotal)}</span>
                  </div>
                </div>
              </div>

              ${w>0?`
                <div class="p-2 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800 text-[10px] text-amber-800 dark:text-amber-300 font-bold flex items-center gap-1.5">
                  <i class="fa-solid fa-circle-exclamation text-amber-500 shrink-0"></i>
                  <span>Total belanja melebihi sisa limit. Wajib DP minimal ${h(w)}</span>
                </div>
              `:""}
            </div>
          `:`
            <div class="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-2xl border border-amber-200 dark:border-amber-700/80 mb-2.5">
              <p class="text-xs font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1.5"><i class="fa-solid fa-hourglass-half"></i> Pembayaran Tempo / Piutang</p>
              <p class="text-[10px] text-amber-700 dark:text-amber-400 mt-1">Transaksi otomatis dicatat sebagai piutang di database toko.</p>
            </div>
          `}
          <label class="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1">${n&&w>0?"Uang Muka / DP Wajib (Rp)":"Uang Muka / DP (Rp) — opsional"}</label>
          <input id="pos-dp-input" type="number" min="0" placeholder="0" value="${w>0?w:0}" oninput="window.posOnDpInput(this.value)" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-black text-right bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)]">`}},cs=e=>{Le=e,Pe("tempo")};window.posSelectPaylaterTenor=cs;const ps=e=>{const t=D(),a=Math.max(0,parseFloat(e)||0);if(!!!(b.isMember&&b.paylaterActive&&b.paylaterLimit>0))return;const r=Math.max(0,(b.paylaterLimit||0)-Math.max(0,b.paylaterUsed||0)),o=Math.min(r,Math.max(0,t-a)),i=rt(),l=b.paylaterDueDay||5,d=Ze(o,Le,{...i,dueDay:l}),c=p("pos-paylater-breakdown-box");c&&(c.innerHTML=`
          <div class="flex justify-between text-slate-500 dark:text-slate-400">
            <span>Pokok Dibiayai:</span>
            <span class="font-mono font-bold text-slate-700 dark:text-slate-200">${h(d.pokokTotal)}</span>
          </div>
          <div class="flex justify-between text-slate-500 dark:text-slate-400">
            <span>Biaya Admin:</span>
            <span class="font-mono font-bold ${d.totalAdminFee>0?"text-amber-600 dark:text-amber-400":"text-emerald-600 dark:text-emerald-400"}">
              ${d.totalAdminFee>0?h(d.totalAdminFee):"Gratis"}
            </span>
          </div>
          <div class="flex justify-between text-slate-500 dark:text-slate-400">
            <span>Biaya Penanganan / Layanan:</span>
            <span class="font-mono font-bold ${d.totalServiceFee>0?"text-amber-600 dark:text-amber-400":"text-emerald-600 dark:text-emerald-400"}">
              ${d.totalServiceFee>0?h(d.totalServiceFee):"Gratis"}
            </span>
          </div>
          <div class="pt-1 border-t border-slate-200/60 dark:border-slate-800 flex justify-between items-center font-bold">
            <span class="text-slate-700 dark:text-slate-200">Cicilan / Bulan (${d.months}x):</span>
            <span class="text-xs font-black font-mono" style="color:var(--color-primary)">${h(d.totalPerMonth)}/bln</span>
          </div>
          <div class="flex justify-between items-center text-[10px] text-slate-400">
            <span>Total Tagihan PayLater:</span>
            <span class="font-mono font-bold text-slate-600 dark:text-slate-300">${h(d.grandTotal)}</span>
          </div>
        `)};window.posOnDpInput=ps;const fs=e=>{const t=D(),a=p("pos-dp-input"),s=p("pos-dp-input")?.previousElementSibling,r=!!(b.isMember&&b.paylaterActive&&b.paylaterLimit>0),o=r?Math.max(0,(b.paylaterLimit||0)-Math.max(0,b.paylaterUsed||0)):0,i=e&&r&&t>o?t-o:0;a&&(a.value=i>0?i:0),s&&s.tagName==="LABEL"&&(s.textContent=e&&r&&i>0?"Uang Muka / DP Wajib (Rp)":"Uang Muka / DP (Rp) — opsional");const l=p("pos-paylater-tenor-box");l&&(l.style.display=e?"block":"none"),window.posOnDpInput(a?a.value:0)};window.posTogglePaylater=fs;const us=e=>{b.isMember=e==="member",b.isNewTempo=e==="tempo",ds("pos-ctype",e,["umum","member","tempo"]);const t=p("pos-customer-fields");t&&(e==="umum"?(b.name="",b.phone="",b.memberId=null,b.points=0,t.innerHTML='<input id="pos-cust-name" type="text" placeholder="Nama pembeli (opsional)" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)] focus:bg-white">'):e==="member"?(t.innerHTML=`
          <div class="space-y-2">
            <div class="flex gap-2">
              <div class="relative flex-1">
                <i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
                <input id="pos-cust-phone" type="text" placeholder="Ketik No. HP / Nama / ID Member..."
                  value="${b.isMember?x(b.phone||b.name||""):""}"
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
          </div>`,Oe().then(()=>{p("pos-cust-phone")?.value?.trim()&&ft()})):e==="tempo"&&(b.isMember=!1,ia("tempo"),t.innerHTML=`
          <div class="space-y-2">
            <input id="pos-cust-name" type="text" placeholder="Nama Pelanggan / Rekanan *" required class="w-full border border-amber-300 dark:border-amber-600 rounded-xl px-3 py-2 text-xs bg-amber-50/40 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none">
            <input id="pos-cust-phone" type="tel" placeholder="No. WhatsApp Pelanggan *" required class="w-full border border-amber-300 dark:border-amber-600 rounded-xl px-3 py-2 text-xs bg-amber-50/40 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none">
          </div>`))},ia=e=>{_=e,ds("pos-pay",e,["cash","qris","transfer","tempo"]),Pe(e),e==="transfer"&&(!m.banks||!m.banks.length)&&ct().then(t=>{_==="transfer"&&t&&t.length>0&&Pe("transfer")})},la=e=>{ae=ve(e);const t=D(),a=ae-t,s=p("pos-change-display"),r=p("pos-change-label"),o=p("pos-change-box"),i=p("pos-process-btn");s&&(s.textContent=h(Math.abs(a))),r&&(r.textContent=a>=0?"Kembalian Uang Pembeli:":"Uang Masih Kurang:"),s&&(s.className=`text-base font-black ${a>=0?"text-emerald-700 dark:text-emerald-400":"text-rose-600 dark:text-rose-400"}`),o&&(o.className=`mt-2.5 p-3 rounded-2xl border transition-all flex items-center justify-between ${a>=0?"bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800":"bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800"}`),i&&_==="cash"&&(i.disabled=a<0,i.classList.toggle("opacity-50",a<0))},da=e=>{const t=p("pos-paid-input");t&&(t.value=e,la(e),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},ct=async()=>{if(Array.isArray(m.banks)&&m.banks.length>0)return m.banks;try{const e=await j.collection("freshmart").doc("cms_data").get();if(e.exists){const t=e.data();if(Array.isArray(t?.banks)&&t.banks.length>0)return m.banks=t.banks,m.banks}}catch{}return m.banks||[]},Oe=async()=>{if(m.customers&&m.customers.length>0)return m.customers;try{const e=await j.collection("freshmart").doc("cms_data").collection("customers").get();return m.customers=e.docs.map(t=>({...t.data(),id:t.id,_docId:t.id})),m.customers}catch{return m.customers||[]}},ms=(e,t)=>{if(!e||!t||!t.length)return[];const a=e.trim().toLowerCase(),s=a.replace(/\D/g,"");let r=s;r.startsWith("62")?r=r.slice(2):r.startsWith("0")&&(r=r.slice(1));const o=[],i=new Set;return t.forEach(l=>{if(!l)return;const d=String(l.id||l._docId||l.phone||"");if(i.has(d))return;const c=String(l.phone||"").replace(/\D/g,"");let n=c;n.startsWith("62")?n=n.slice(2):n.startsWith("0")&&(n=n.slice(1));const u=String(l.name||"").toLowerCase();let w=!1;r.length>=4&&n&&(n===r||n.endsWith(r)||r.endsWith(n)||c.includes(s))&&(w=!0),!w&&(d.toLowerCase()===a||d===s)&&(w=!0),!w&&a.length>=2&&u.includes(a)&&(w=!0),w&&(i.add(d),o.push(l))}),o},Ys=async e=>{if(!e)return null;const t=e.trim(),a=t.replace(/\D/g,"");let s=a;s.startsWith("62")?s=s.slice(2):s.startsWith("0")&&(s=s.slice(1));const r=j.collection("freshmart").doc("cms_data").collection("customers"),i=Array.from(new Set([s?"62"+s:null,s?"0"+s:null,s||null,s?"+62"+s:null,a||null,t].filter(Boolean))).map(async c=>{try{const n=await r.doc(c).get();if(n&&n.exists)return{...n.data(),id:n.id,_docId:n.id}}catch{}return null}),d=(await Promise.all(i)).find(Boolean);if(d){m.customers||(m.customers=[]);const c=m.customers.findIndex(n=>String(n.id||n.phone)===String(d.id||d.phone));return c>-1?m.customers[c]=d:m.customers.push(d),d}try{const c=await r.limit(300).get();if(!c.empty){m.customers=c.docs.map(u=>({...u.data(),id:u.id,_docId:u.id}));const n=ms(e,m.customers);if(n.length>0)return n[0]}}catch{}return null},pt=()=>{const e=p("pos-member-result");if(!e||!b.isMember)return;const t=parseFloat(b.points)||0,a=typeof window.getMemberTier=="function"?window.getMemberTier(t):{badge:"MEMBER RESMI"},s=it(),r=Ce(),o=Pt(),i=(m.rewards||[]).filter(d=>d.isActive!=="false"&&d.isActive!==!1&&(parseFloat(d.stock)||0)>0),l=Math.max(0,t-(Z||0));e.innerHTML=`
    <div class="space-y-2.5">
      <!-- Info Member Bar -->
      <div class="p-3 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/30 rounded-2xl border border-emerald-300 dark:border-emerald-700/60 shadow-xs flex items-center justify-between gap-2.5">
        <div class="flex items-center gap-2.5 min-w-0">
          <div class="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs">
            <i class="fa-solid fa-id-card text-base"></i>
          </div>
          <div class="min-w-0">
            <div class="flex items-center gap-1.5 flex-wrap">
              <span class="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-700">${x(a.badge||"VIP")}</span>
              <span class="text-[10px] font-black text-amber-600 dark:text-amber-400 flex items-center gap-0.5"><i class="fa-solid fa-star text-[9px]"></i>${t} Poin</span>
              ${b.paylaterActive&&b.paylaterLimit>0?`
                <span class="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-700 flex items-center gap-1">
                  <i class="fa-solid fa-bolt text-emerald-500"></i> PayLater: ${h(Math.max(0,(b.paylaterLimit||0)-Math.max(0,b.paylaterUsed||0)))}
                </span>
              `:""}
            </div>
            <p class="text-xs font-black text-slate-800 dark:text-white truncate mt-0.5">${x(b.name||"Pelanggan Setia")}</p>
            <p class="text-[10px] text-slate-500 dark:text-slate-400 font-mono">${x(b.phone||"")}</p>
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

          ${Z>0?`
          <div class="p-2.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-between gap-2">
            <div class="text-xs">
              <span class="font-bold text-emerald-700 dark:text-emerald-300">Potongan Belanja:</span>
              <span class="font-black font-mono text-emerald-600 dark:text-emerald-400 ml-1">-${h(r)}</span>
              <span class="text-[10px] text-slate-500 ml-1">(${Z} Poin)</span>
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
            <p class="text-[10px] text-slate-400 italic">${ee()?"* Batas harga modal HPP atau saldo poin telah tercapai.":"* Batas diskon maksimum atau saldo poin telah tercapai."}</p>
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
            <span class="text-[10px] text-slate-400 font-semibold">Tersisa: ${l} Poin</span>
          </div>

          ${R?`
          <div class="p-2.5 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800/60 flex items-center justify-between gap-2">
            <div class="text-xs min-w-0">
              <span class="font-bold text-purple-800 dark:text-purple-300 block truncate">🎁 ${x(R.name)}</span>
              <span class="text-[10px] text-purple-600 dark:text-purple-400 font-mono">Ditukar dengan ${R.pointsCost} Poin</span>
            </div>
            <button type="button" onclick="window.deselectPosReward()" class="text-[10px] font-bold text-rose-500 hover:underline cursor-pointer shrink-0">
              Batal
            </button>
          </div>
          `:`
          <div class="relative">
            <select onchange="if(this.value){window.selectPosReward(this.value);}else{window.deselectPosReward();}" class="w-full text-xs py-2 pl-3 pr-8 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)]">
              <option value="">-- Pilih Hadiah Member (Opsional) --</option>
              ${i.map(d=>{const c=parseFloat(d.pointsCost)||0,n=c<=l;return`
                <option value="${d.id}" ${n?"":"disabled"}>
                  ${x(d.name)} (${c} Poin) ${n?"":"[Poin Kurang]"}
                </option>
                `}).join("")}
            </select>
          </div>
          `}
        </div>
        `:""}
      </div>
      `:""}
    </div>`},bs=e=>{const t=Pt();Z=Math.min(t,Math.max(0,parseInt(e)||0)),pt(),Pe(_);const s=document.querySelector("#pos-pay-modal .text-xs.text-slate-500 .font-black");s&&(s.textContent=h(D()))},xs=e=>{const t=(m.rewards||[]).find(o=>String(o.id)===String(e));if(!t)return;const a=parseFloat(t.pointsCost)||0,s=Math.max(0,(parseFloat(b.points)||0)-(Z||0));if(a>s){g("Poin member tidak cukup untuk hadiah ini!","warning");return}R={id:t.id,name:t.name,pointsCost:a},g(`Hadiah "${t.name}" dipilih!`,"success"),pt(),Pe(_);const r=document.querySelector("#pos-pay-modal .text-xs.text-slate-500 .font-black");r&&(r.textContent=h(D()))},hs=()=>{R=null,pt(),Pe(_);const e=document.querySelector("#pos-pay-modal .text-xs.text-slate-500 .font-black");e&&(e.textContent=h(D()))},yt=e=>{b.isMember=!0,b.name=e.name||"Member Toko",b.phone=e.phone||"",b.memberId=e.id||e._docId||e.phone,b.points=parseFloat(e.points)||0,Z=0,R=null,b.paylaterActive=!!e.paylaterActive,b.paylaterLimit=Math.max(0,parseFloat(e.paylaterLimit)||0),b.paylaterUsed=Math.max(0,parseFloat(e.paylaterUsed)||0),b.paylaterDueDay=parseInt(e.paylaterDueDay,10)||5;const t=p("pos-cust-phone");t&&(t.value=e.phone||e.name||""),pt(),Pe(_),g(`Member terdeteksi: ${e.name} (${b.points} Poin)`,"success")},ca=e=>{const a=(m.customers||[]).find(s=>s&&String(s.id||s._docId||s.phone)===String(e));a&&yt(a)},pa=()=>{b.isMember=!1,b.name="",b.phone="",b.memberId=null,b.points=0,Z=0,R=null,b.paylaterActive=!1,b.paylaterLimit=0,b.paylaterUsed=0,b.paylaterDueDay=5;const e=p("pos-cust-phone");e&&(e.value="",e.focus());const t=p("pos-member-result");t&&(t.innerHTML=""),Pe(_)};let Aa=null;const fa=()=>{clearTimeout(Aa);const e=p("pos-cust-phone")?.value?.trim()||"";if(!e){if(!b.memberId){const s=p("pos-member-result");s&&(s.innerHTML="")}return}const t=e.replace(/\D/g,"");!(Array.isArray(m.customers)&&m.customers.length>0)&&t.length<10&&e.length<8||(Aa=setTimeout(()=>{ft()},350))},ft=async()=>{const t=p("pos-cust-phone")?.value?.trim()||"";if(!t){g("Masukkan nomor HP atau nama member","warning");return}const a=p("pos-member-result"),s=p("pos-member-lookup-btn");s&&(s.disabled=!0,s.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i>'),a&&(a.innerHTML='<div class="p-2.5 text-center text-xs text-slate-400"><i class="fa-solid fa-spinner fa-spin mr-1.5"></i>Memeriksa database member...</div>');try{await Oe();const r=ms(t,m.customers||[]);if(r.length===1)yt(r[0]);else if(r.length>1)a.innerHTML=`
              <div class="space-y-1.5 max-h-44 overflow-y-auto pr-1">
                <p class="text-[10px] font-bold text-slate-500 mb-1">Ditemukan ${r.length} member (klik untuk memilih):</p>
                ${r.map(o=>`
                  <button onclick="window.selectPosMember('${x(o.id||o._docId||o.phone)}')" type="button"
                    class="w-full text-left p-2 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 border border-slate-200 dark:border-slate-700 hover:border-emerald-400 transition-all flex items-center justify-between gap-2 cursor-pointer">
                    <div class="min-w-0">
                      <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${x(o.name||"Member")}</p>
                      <p class="text-[10px] text-slate-500 dark:text-slate-400 font-mono">${x(o.phone||"")}</p>
                    </div>
                    <span class="text-[10px] font-black text-amber-500 shrink-0"><i class="fa-solid fa-star text-[9px]"></i> ${parseFloat(o.points)||0} Poin</span>
                  </button>
                `).join("")}
              </div>
            `;else{const o=await Ys(t);if(o)yt(o);else{b.isMember=!1,b.name="",b.memberId=null,b.points=0;const l=t.replace(/\D/g,"").length>=8;a.innerHTML=`
                  <div class="p-3 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs space-y-1">
                    <p class="font-bold flex items-center gap-1.5"><i class="fa-solid fa-circle-info"></i> Member Tidak Ditemukan</p>
                    <p class="text-[11px] text-amber-700 dark:text-amber-400">Tidak ada member ditemukan untuk "<b>${x(t)}</b>".</p>
                    ${l?"":`
                      <p class="text-[10px] text-amber-600/90 dark:text-amber-400/80 pt-1 border-t border-amber-200 dark:border-amber-800/60">
                        <i class="fa-solid fa-lightbulb mr-1 text-amber-500"></i><b>Tips Kasir:</b> Masukkan nomor WhatsApp/HP member (contoh: <code>0812...</code>) untuk verifikasi instan.
                      </p>
                    `}
                  </div>`}}}catch(r){console.error("[POS] Error lookupPosMember:",r),a&&(a.innerHTML=`<p class="text-xs text-rose-500 p-2">Gagal memeriksa data: ${x(r.message||"Koneksi error")}</p>`)}finally{s&&(s.disabled=!1,s.innerHTML='<i class="fa-solid fa-magnifying-glass mr-1.5"></i><span>Cek</span>')}},gs=async()=>{if(T.length===0){g("Keranjang kosong!","warning");return}const e=xe();if(e>0&&D()<e){const n=ee()?`Transaksi ditolak! Total transaksi (${h(D())}) tidak boleh di bawah total harga modal HPP (${h(e)})!`:"Transaksi ditolak! Total transaksi melebihi batas diskon maksimum yang diizinkan sistem.";g(n,"error"),typeof window.triggerHaptic=="function"&&window.triggerHaptic("heavy");return}const t=b.isMember?b.name||"Member Toko":p("pos-cust-name")?.value?.trim()||"Pelanggan Umum",a=b.isMember?b.phone||p("pos-cust-phone")?.value?.trim()||"":p("pos-cust-phone")?.value?.trim()||"";if(b.isNewTempo&&!a){g("No. HP wajib diisi untuk tempo!","warning");return}if(_==="cash"&&(ae=ve(p("pos-paid-input")?.value||0),ae<D())){g(`Uang kurang! Minimal ${h(D())}`,"warning");return}b.name=t,b.phone=a;const s=_==="tempo"?ve(p("pos-dp-input")?.value||0):0,r=_==="transfer"&&p("pos-bank-sel")?.value||"",o=_==="tempo"&&!!(b.isMember&&b.paylaterActive&&p("pos-use-paylater")?.checked),i=o?Math.max(0,(b.paylaterLimit||0)-Math.max(0,b.paylaterUsed||0)):0;if(o){const n=D()>i?D()-i:0;if(s<n){g(`DP tidak mencukupi limit PayLater! Minimal DP: ${h(n)}`,"warning");return}}const l=o?Math.min(D()-s,i):0,d=p("pos-process-btn");d&&(d.disabled=!0,d.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i>Memproses...');const c=m.store?.useStock===!0||m.store?.useStock==="true";if(c)for(const n of T){const u=(m.products||[]).find(k=>String(k.id)===String(n.id));if(!u)continue;const w=parseFloat(n.qty)||0;if(n.variantName&&u.variants){const k=(u.variants||[]).find(S=>S.name===n.variantName),C=parseFloat(k&&k.stock!==void 0?k.stock:0);if(C<w){g(`Stok ${n.name} (${n.variantName}) tidak cukup! Sisa: ${C}`,"warning"),d&&(d.disabled=!1,d.innerHTML='<i class="fa-solid fa-check-circle mr-2"></i>Selesaikan Transaksi');return}}else{const k=parseFloat(u.stock!==void 0?u.stock:0);if(k<w){g(`Stok ${n.name} tidak cukup! Sisa: ${k}`,"warning"),d&&(d.disabled=!1,d.innerHTML='<i class="fa-solid fa-check-circle mr-2"></i>Selesaikan Transaksi');return}}}try{const n=zs(),u=typeof window.getCashierSession=="function"?window.getCashierSession():null,w=u?.name||m.store?.name||"Kasir",k=u?.uid||window.__currentAdminUid||"admin",C=new Date().toISOString(),S=Je.firestore.FieldValue.serverTimestamp(),M=_==="tempo"?"Diproses":"Selesai",A=J(),f=A&&A.status==="open"?A.id:null,P=A&&A.status==="open"?A.shiftNo||A.id:null;let O=null;if(o){const v=Le||"30d",B=rt(),X=b.paylaterDueDay||5;O=Ze(l,v,{...B,dueDay:X})}const F={orderId:n,txId:n,source:"pos",channel:"pos",status:M,timestamp:S,dateString:C,dateMs:Date.now(),shiftId:f,shiftNo:P,cashier:k,cashierName:w,customer:{name:t,phone:a,wa:a,address:"Beli Langsung di Kasir (POS)",deliveryMethod:"takeaway",isMember:!!b.isMember,memberId:b.memberId||null},customerName:t,customerPhone:a,customerType:b.isMember?"Member":"Pelanggan Umum",items:T.map(v=>({id:v.id,name:v.name,price:parseFloat(v.price)||0,basePrice:parseFloat(v.basePrice||v.price)||0,hpp:v.hpp!=null?parseFloat(v.hpp):Ve(v)||0,qty:parseFloat(v.qty)||1,discount:parseFloat(v.discount)||0,subtotal:parseFloat(v.subtotal)||0,variantName:v.variantName||"",isVariant:!!v.isVariant,isWholesale:!!v.isWholesale,effectivePrice:parseFloat(v.price)||0,poTime:v.poTime||"",unit:v.unit||"pcs"})),hasPO:T.some(v=>v.poTime&&String(v.poTime).trim()!==""),payment:{method:_,subtotal:re(),productDiscount:ve(se),shippingCost:0,pointDiscount:Ce(),ppnAmount:ie().ppnAmount||0,dppAmount:ie().dppAmount||re(),ppnRate:ie().ppnEnabled?ie().ppnRate:0,ppnType:ie().ppnEnabled?ie().ppnType:"exclusive",ppnEnabled:!!ie().ppnEnabled,ppnShowZero:!!ie().ppnShowZero,ppnLabel:ie().ppnLabel||"",taxNpwp:m.store?.taxNpwp||m.taxSettings?.npwp||"",grandTotal:D(),paid:_==="cash"?ae:_==="tempo"?s:D(),change:_==="cash"?Za():0,bank:r,paymentStatus:o&&(O?O.grandTotal:0)<=0?"lunas":_==="tempo"?D()-s<=0?"lunas":"hutang":"lunas",subMethod:o?"paylater":_==="tempo"?"tempo":"",isPaylater:o,paylaterUsed:l,paylaterTenor:O?O.tenorKey:o?"30d":null,paylaterMonths:O?O.months:o?1:null,paylaterAdminFee:O?O.totalAdminFee:0,paylaterServiceFee:O?O.totalServiceFee:0,paylaterMonthlyInstallment:O?O.totalPerMonth:0,paylaterSchedule:O?O.schedule:[],dp:s,tempoDp:s,tempoBalance:o?O?O.grandTotal:Math.max(0,D()-s):_==="tempo"?Math.max(0,D()-s):0,tempoDueDate:O&&O.schedule?.length>0?O.schedule[O.schedule.length-1].dueDate:Date.now()+30*24*60*60*1e3,tempoPenaltyRate:1,tempoPenaltyStopped:!1},subtotal:re(),globalDiscount:ne(),pointDiscount:Ce(),pointsRedeemed:(Z||0)+(R&&parseFloat(R.pointsCost)||0),claimedReward:R?{id:R.id,name:R.name,pointsCost:parseFloat(R.pointsCost)||0}:null,discountType:Q,discountVal:U,totalHpp:e,grossProfit:Math.max(0,D()-e),total:D(),isTempo:_==="tempo",pointsEarned:0,notes:""};if(b.isMember&&a){const B=(typeof window.calculateCartPoints=="function"?window.calculateCartPoints(T,m.store):{totalPoints:0}).totalPoints||0;F.pointsEarned=B;const X=(Z||0)+(R&&parseFloat(R.pointsCost)||0),H=B-X,I=Math.max(0,(parseFloat(b.points)||0)+H);F.finalMemberPoints=I;try{const $=a.replace(/\D/g,""),W=String(b.memberId||$);if(await j.collection("freshmart").doc("cms_data").collection("customers").doc(W).set({points:Je.firestore.FieldValue.increment(H),lastOrderAt:C},{merge:!0}),m.customers){const L=m.customers.find(N=>N&&(String(N.id)===W||String(N.phone).replace(/\D/g,"")===$));L&&(L.points=I)}b.points=I}catch($){console.warn("[POS] Gagal update poin member:",$)}if(R&&R.id)try{await j.collection("freshmart").doc("cms_data").collection("rewards").doc(String(R.id)).update({stock:Je.firestore.FieldValue.increment(-1)});const $=(m.rewards||[]).find(W=>String(W.id)===String(R.id));$&&$.stock!==void 0&&($.stock=Math.max(0,(parseInt($.stock)||0)-1))}catch($){console.warn("[POS] Gagal update stok reward:",$)}}if(F.paylaterLimitTracked=!1,o&&b.phone)try{const v=b.phone.replace(/\D/g,""),B=v.startsWith("0")?"62"+v.slice(1):v;if(await j.collection("freshmart").doc("cms_data").collection("customers").doc(B).set({paylaterUsed:Je.firestore.FieldValue.increment(l)},{merge:!0}),m.customers){const H=m.customers.find(I=>I&&(String(I.id)===B||String(I.phone).replace(/\D/g,"")===v));H&&(H.paylaterUsed=Math.max(0,parseFloat(H.paylaterUsed)||0)+l)}b.paylaterUsed=Math.max(0,parseFloat(b.paylaterUsed)||0)+l,F.paylaterLimitTracked=!0}catch(v){console.warn("[POS] Gagal potong limit PayLater:",v)}let E=!1;if(typeof navigator<"u"&&!navigator.onLine)_t(F),E=!0,F._isSavedOffline=!0;else try{await j.collection("freshmart_orders").doc(n).set(F)}catch(v){console.warn("[POS] Gagal simpan order online, mengalihkan ke antrean offline:",v),_t(F),E=!0,F._isSavedOffline=!0}if(Qa(F),c){const v={};T.forEach(H=>{const I=H.id!=null?H.id.toString():null;if(!I)return;v[I]||(v[I]={main:0,variants:{}});const $=parseFloat(H.qty)||0;H.variantName?v[I].variants[H.variantName]=(v[I].variants[H.variantName]||0)+$:v[I].main+=$});const B=Object.keys(v),X=[];for(const H of B){const I=v[H],$=(m.products||[]).find(L=>String(L.id)===H);if(!$)continue;const W={};I.main>0&&($.stock=Math.max(0,(parseFloat($.stock)||0)-I.main),W.stock=$.stock,$.stock===0&&($.isActive="false",W.isActive="false"),$.totalSold=(parseFloat($.totalSold)||0)+I.main,W.totalSold=$.totalSold),Object.keys(I.variants).length>0&&$.variants&&(Object.keys(I.variants).forEach(L=>{const N=$.variants.findIndex(ce=>ce.name===L);N>-1&&($.variants[N].stock=Math.max(0,(parseFloat($.variants[N].stock)||0)-I.variants[L]),$.variants[N].stock===0&&($.variants[N].isActive=!1),$.variants[N].totalSold=(parseFloat($.variants[N].totalSold)||0)+I.variants[L])}),W.variants=$.variants);const Te=(m.products||[]).findIndex(L=>String(L.id)===H);Te>-1&&(m.products[Te]=$);try{await j.collection("freshmart").doc("cms_data").collection("products").doc(H).update(W),X.push(H)}catch(L){console.warn("[POS] Gagal update stok produk di Firestore:",H,L)}}if(X.length>0)try{await j.collection("freshmart").doc("cms_data").update({lastUpdate:Je.firestore.FieldValue.increment(1),updateType:"stock_change",updatedProductIds:X})}catch{}}Lt(),We(!0);const G={...F};T=[],se=0,U=0,Q="rp",Z=0,R=null,V(),z(),Zs(G),E&&g(`Mode Offline: Transaksi #${G.txId.slice(-6)} tersimpan di antrean lokal. Otomatis sinkron saat online.`,"warning")}catch(n){console.error("[POS] Error:",n),g("Gagal menyimpan transaksi. Coba lagi.","error"),d&&(d.disabled=!1,d.innerHTML='<i class="fa-solid fa-check-circle mr-2"></i>Selesaikan Transaksi')}},Zs=e=>{window._lastPOSTx=e;const t=e.payment.method==="cash"?`<p class="text-sm text-slate-500">Kembalian: <span class="font-black text-emerald-600">${h(e.payment.change)}</span></p>`:e.payment.method==="tempo"?'<p class="text-sm text-amber-600 font-semibold">⚠️ Dicatat sebagai Piutang Tempo</p>':`<p class="text-sm text-slate-500">Metode: ${e.payment.method.toUpperCase()}</p>`,a=!!document.getElementById("pos-admin-container")||typeof window.cTab=="function"&&window.cTab()==="pos";document.body.insertAdjacentHTML("beforeend",`
    <div id="pos-success-modal" class="fixed inset-0 z-[9999] flex items-center justify-center p-4" style="background:rgba(15,23,42,0.75)">
      <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-sm border border-slate-200/80 dark:border-slate-800">
        <div class="p-6 text-center">
          <div class="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-4"><i class="fa-solid fa-circle-check text-emerald-500 text-3xl"></i></div>
          <h2 class="font-black text-lg text-slate-900 dark:text-white mb-1">Transaksi Berhasil!</h2>
          <p class="text-xs text-slate-400 mb-2">#${x(e.txId)}</p>
          <p class="text-2xl font-black mb-1" style="color:var(--color-primary)">${h(e.total)}</p>
          ${t}
          ${e._isSavedOffline||e._offlineQueuedAt?`
          <div class="mt-2.5 px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-[11px] font-bold text-amber-700 dark:text-amber-300 flex items-center justify-center gap-1.5 border border-amber-200 dark:border-amber-800">
            <i class="fa-solid fa-cloud-arrow-up text-amber-500"></i>
            <span>Tersimpan di Antrean Offline (Akan sinkron saat online)</span>
          </div>`:`
          <div class="mt-2.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-[11px] font-bold text-slate-600 dark:text-slate-300 flex items-center justify-center gap-1.5 border border-slate-200/60 dark:border-slate-700/60">
            <i class="fa-solid fa-check-double text-emerald-500"></i>
            <span>Tercatat Resmi di Menu Pesanan CMS</span>
          </div>`}
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
            <span>Klaim Hadiah: ${x(e.claimedReward.name)}</span>
          </div>`:""}
        </div>
        <div class="px-6 pb-6 flex flex-col gap-2">
          <button onclick="window.printPOSReceiptDirect(window._lastPOSTx)" class="w-full py-3.5 rounded-2xl text-white font-black text-sm shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer hover:brightness-105" style="background:linear-gradient(135deg, var(--color-primary-light,#e1b858) 0%, var(--color-primary,#c59b27) 50%, var(--color-primary-dark,#a87f1b) 100%);box-shadow:0 4px 14px rgba(var(--color-primary-rgb),0.35)">
            <i class="fa-solid fa-eye text-white/90"></i> Preview &amp; Cetak Struk
          </button>
          <button onclick="document.getElementById('pos-success-modal')?.remove()" class="w-full py-2.5 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 text-slate-500 dark:text-slate-400 font-medium text-xs hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer">Transaksi Baru</button>
          ${a?`
          <button onclick="document.getElementById('pos-success-modal')?.remove(); if(typeof window.openAdminTab==='function') window.openAdminTab('orders');" class="w-full py-2 rounded-xl text-slate-400 dark:text-slate-500 text-[11px] font-medium hover:text-[var(--color-primary)] transition-all flex items-center justify-center gap-1.5 cursor-pointer">
            <i class="fa-solid fa-receipt"></i> Buka Menu Pesanan Toko
          </button>`:""}
        </div>
      </div>
    </div>`),(typeof _e=="function"?_e():{}).autoPrintOrder&&typeof window.printPOSReceiptDirect=="function"&&setTimeout(()=>{window.printPOSReceiptDirect(e)},300)},ws=e=>{Dt(e)},Dt=e=>{if(window._lastPOSTx=e,typeof window.printPOSReceiptDirect=="function"){window.printPOSReceiptDirect(e);return}const t=typeof _e=="function"?_e():{paperSize:"58mm"},a=typeof window.getPaperCols=="function"?window.getPaperCols(t.paperSize):t.paperSize==="80mm"?48:32,s=a>=40,r=t.headerText||m.store?.name||"TOKO PUTRI",o=m.store?.wa||"",i=m.store?.address||"",l=t.footerText||"Terima Kasih Atas Kunjungan Anda!",d=typeof window.formatCompactDate=="function"?window.formatCompactDate(e.dateMs||Date.now(),s):new Date(e.dateMs||Date.now()).toLocaleString("id-ID"),c=(e.items||[]).map(u=>{const w=u.variantName?` (${x(u.variantName)}${u.colorCode?" "+x(u.colorCode):""})`:"",k=u.effectivePrice||u.price||0,C=u.subtotal!==void 0?u.subtotal:parseFloat(u.qty||1)*k;return`
        <tr>
            <td colspan="2" style="padding-top:4px;font-weight:bold;word-break:break-word;">${x(u.name)}${w}${u.poTime?" [PO]":""}</td>
        </tr>
        <tr>
            <td style="padding-bottom:3px;color:#475569;font-size:10.5px;">&nbsp;&nbsp;${q(u.qty)} ${x(u.unit||"pcs")} x ${Math.round(k).toLocaleString("id-ID")}</td>
            <td style="text-align:right;padding-bottom:3px;white-space:nowrap;font-weight:bold;">${Math.round(C).toLocaleString("id-ID")}</td>
        </tr>
        ${u.discount&&u.discount>0?`<tr><td style="padding-bottom:2px;color:#e11d48;font-size:10px;">&nbsp;&nbsp;(Diskon)</td><td style="text-align:right;color:#e11d48;font-size:10px;">-${Math.round(u.discount).toLocaleString("id-ID")}</td></tr>`:""}
        ${u.poTime?`<tr><td colspan="2" style="font-size:9.5px;font-style:italic;color:#64748b;">&nbsp;&nbsp;* Estimasi PO: ${x(u.poTime)}</td></tr>`:""}
        `}).join(""),n=e.discountType==="percent"&&e.discountVal?`Diskon (${e.discountVal}%)`:"Diskon Toko";document.getElementById("pos-receipt-fallback-modal")?.remove(),document.body.insertAdjacentHTML("beforeend",`
    <div id="pos-receipt-fallback-modal" class="fixed inset-0 z-[10000] flex items-center justify-center p-3 sm:p-4" style="background:rgba(15,23,42,0.75)">
        <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full ${s?"max-w-[420px]":"max-w-[340px]"} border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[90vh]">
            <div class="p-3.5 sm:p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50">
                <span class="font-bold text-xs text-slate-700 dark:text-slate-200 flex items-center gap-1.5"><i class="fa-solid fa-receipt text-amber-500"></i>Preview Struk Thermal (${a} Kolom)</span>
                <button onclick="document.getElementById('pos-receipt-fallback-modal')?.remove()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-700 dark:hover:text-slate-200 transition-colors flex items-center justify-center cursor-pointer"><i class="fa-solid fa-xmark text-sm"></i></button>
            </div>
            <div id="pos-receipt-paper-box" class="p-4 overflow-y-auto flex-1 font-mono text-[11px] bg-slate-50/60 dark:bg-slate-950 text-slate-800 dark:text-slate-200 space-y-1.5 select-text custom-scrollbar">
                <div class="text-center font-bold text-sm uppercase">${x(r)}</div>
                ${i?`<div class="text-center text-[10px] text-slate-500">${x(i)}</div>`:""}
                ${o?`<div class="text-center text-[10px] text-slate-500">WA: ${x(o)}</div>`:""}
                ${e.payment?.taxNpwp||m.store?.taxNpwp?`<div class="text-center text-[9px] font-mono text-slate-500">NPWP: ${x(e.payment?.taxNpwp||m.store.taxNpwp)}</div>`:""}
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <div class="flex justify-between"><span>No : <b>#${x(e.txId)}</b></span><span>${x(d)}</span></div>
                <div class="flex justify-between"><span>Kasir: ${x(e.cashierName||"Kasir")}</span><span>Plg: ${x(e.customer?.name||"Umum")}</span></div>
                ${e.customer?.phone?`<div>HP  : ${x(e.customer.phone)}</div>`:""}
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <table class="w-full text-[11px] border-collapse">
                    ${c}
                </table>
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <div class="flex justify-between"><span>Subtotal</span><span>${h(e.subtotal)}</span></div>
                ${(e.globalDiscount||0)>0?`<div class="flex justify-between text-rose-500 font-bold"><span>${n}</span><span>- ${h(e.globalDiscount)}</span></div>`:""}
                ${(e.pointDiscount||0)>0?`<div class="flex justify-between text-emerald-600 font-bold"><span>Diskon Poin (${e.pointsRedeemed||0} Pts)</span><span>- ${h(e.pointDiscount)}</span></div>`:""}
                ${e.claimedReward?`<div class="flex justify-between text-purple-600 font-bold"><span>[Klaim Hadiah]</span><span class="truncate max-w-[150px]">${x(e.claimedReward.name)}</span></div>`:""}
                ${(()=>{if(!((e.payment?.ppnEnabled||e.payment?.ppnShowZero||e.payment?.ppnRate===0||e.payment?.ppnAmount&&e.payment.ppnAmount>0)&&(m.store?.ppnEnabled||e.payment?.ppnEnabled)))return"";const w=e.payment?.ppnType==="inclusive",k=e.payment?.ppnRate!==void 0?e.payment.ppnRate:m.store?.ppnRate||0,C=e.payment?.ppnAmount||0,S=e.payment?.ppnLabel||`${w?"Inc. PPN":"PPN"} (${k}%)`,M=C>0?`${w?"":"+"}${h(C)}`:"Rp 0";return`<div class="flex justify-between"><span>${x(S)}</span><span>${M}</span></div>`})()}
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
                <div class="flex justify-between"><span>Metode Bayar</span><span>${e.payment.isPaylater||e.isPaylater?"PUTRI PAYLATER":x(e.payment.method.toUpperCase())}</span></div>
                ${e.pointsEarned>0||(e.pointsRedeemed||0)>0?`
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                ${e.pointsEarned>0?`<div class="flex justify-between text-amber-600 dark:text-amber-400 font-bold"><span>Poin Didapat:</span><span>+${e.pointsEarned} Poin</span></div>`:""}
                ${(e.pointsRedeemed||0)>0?`<div class="flex justify-between text-rose-500 font-bold"><span>Poin Ditukar:</span><span>-${e.pointsRedeemed} Poin</span></div>`:""}
                ${e.finalMemberPoints!==void 0?`<div class="flex justify-between text-slate-600 dark:text-slate-300 font-bold"><span>Sisa Saldo Poin:</span><span>${e.finalMemberPoints} Poin</span></div>`:""}`:""}
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <div class="text-center text-[10px] text-slate-400 my-1">${x(l)}</div>
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
    </div>`)},ua=()=>{if(window._lastPOSTx&&typeof window.printPOSReceiptDirect=="function"){window.printPOSReceiptDirect(window._lastPOSTx);return}const e=p("pos-receipt-paper-box");e&&(typeof window.renderThermalDOMAndPrint=="function"?window.renderThermalDOMAndPrint(e.innerHTML):window.print())},Ft=(e,t=!1)=>{const a=typeof e=="string"?e:e?.value||"";bt&&(clearTimeout(bt),bt=null);const s=()=>{le=a,qe=1,document.querySelectorAll("#pos-search-input").forEach(r=>{r.value!==le&&(r.value=le)}),document.querySelectorAll(".pos-search-clear-btn").forEach(r=>{le&&le.trim().length>0?(r.classList.remove("hidden"),r.classList.add("flex")):(r.classList.add("hidden"),r.classList.remove("flex"))}),z()};t?s():bt=setTimeout(s,130)},ma=()=>{document.querySelectorAll("#pos-search-input").forEach(t=>{t.value=""}),Ft("",!0);const e=p("pos-search-input");e&&e.focus()},ba=()=>{qe+=1,z(!0)},Ie=()=>{try{const e=localStorage.getItem(Ya);return e?JSON.parse(e):[]}catch(e){return console.error("[POS Offline] Gagal baca antrean offline:",e),[]}},xa=e=>{try{localStorage.setItem(Ya,JSON.stringify(e||[]))}catch(t){console.error("[POS Offline] Gagal simpan antrean offline:",t)}},_t=e=>{const t=Ie(),a={...e,_offlineQueuedAt:new Date().toISOString()},s=t.findIndex(r=>(r.id||r.txId)===(e.id||e.txId));s>=0?t[s]=a:t.push(a),xa(t),ue()};let Ht=!1;const at=async(e=!1)=>{if(Ht)return;if(typeof navigator<"u"&&!navigator.onLine){e||g("Koneksi internet offline. Sinkronisasi ditunda sampai koneksi pulih.","warning");return}const t=Ie();if(!t||t.length===0){ue(),e||g("Semua transaksi kasir sudah tersinkronisasi.","success");return}Ht=!0,ue(!0),e||g(`Menyinkronkan ${t.length} transaksi offline ke server...`,"info");let a=0;const s=[];for(const r of t)try{const o={...r},i=o.id||o.txId;delete o._isSavedOffline,delete o._offlineQueuedAt,await j.collection("freshmart_orders").doc(i).set(o,{merge:!0}),a++}catch(o){console.error("[POS Offline] Gagal sinkronkan transaksi:",r.id||r.txId,o),s.push(r)}xa(s),Ht=!1,ue(),a>0&&g(`Berhasil menyinkronkan ${a} transaksi kasir ke cloud!`,"success"),s.length>0&&g(`${s.length} transaksi belum berhasil disinkronkan. Akan dicoba lagi otomatis.`,"warning")},ue=(e=!1)=>{const a=Ie().length;document.querySelectorAll(".pos-offline-sync-container").forEach(s=>{if(a===0&&!e){s.innerHTML="",s.classList.add("hidden");return}s.classList.remove("hidden"),e?s.innerHTML=`
                <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-bold shadow-xs">
                    <i class="fa-solid fa-arrows-rotate animate-spin text-[10px]"></i>
                    <span class="hidden sm:inline">Sinkron (${a})...</span>
                    <span class="sm:hidden">${a}</span>
                </div>
            `:s.innerHTML=`
                <button type="button" onclick="window.posSyncOfflineTransactions()" class="inline-flex items-center gap-1.5 px-2 sm:px-2.5 py-1 rounded-xl bg-amber-500/25 hover:bg-amber-500/40 text-amber-200 hover:text-white border border-amber-400/40 text-[10px] font-bold cursor-pointer active:scale-95 transition-all shadow-xs" title="${a} transaksi offline belum disinkronkan ke server. Klik untuk sinkronisasi sekarang.">
                    <i class="fa-solid fa-cloud-arrow-up text-amber-400"></i>
                    <span class="hidden sm:inline">${a} Antrean Offline</span>
                    <span class="sm:hidden font-black">${a}</span>
                </button>
            `})},wt=e=>{document.querySelectorAll(".pos-network-status-badge").forEach(t=>{e?(t.className="pos-network-status-badge hidden sm:inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-lg border border-emerald-500/30",t.innerHTML='<span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span><span>Online</span>'):(t.className="pos-network-status-badge inline-flex items-center gap-1.5 text-[10px] font-bold text-rose-300 bg-rose-950/60 px-2.5 py-1 rounded-lg border border-rose-500/40 animate-pulse",t.innerHTML='<i class="fa-solid fa-wifi-slash text-[10px] text-rose-400"></i><span>Offline</span>')})};let Oa=!1;const ut=()=>{const e=typeof navigator<"u"?navigator.onLine:!0;wt(e),ue(),!Oa&&(Oa=!0,window.addEventListener("online",()=>{wt(!0),g("Koneksi internet terhubung kembali. Memulai auto-sync transaksi kasir...","info"),at(!0)}),window.addEventListener("offline",()=>{wt(!1),g("Koneksi terputus. Mode POS Offline aktif (transaksi kasir aman di antrean lokal).","warning")}),e&&Ie().length>0&&setTimeout(()=>{at(!0)},2500))},ks=({isStorefront:e})=>{const a=(typeof window.getCashierSession=="function"?window.getCashierSession():null)?.name||(e?"Kasir":"Admin Seller"),s=x(m.store?.name||"Toko Putri");return`
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
                            <span class="text-[10px] text-white/90 font-medium truncate">${x(a)}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex items-center gap-1.5 sm:gap-2 shrink-0 whitespace-nowrap">
                <span class="pos-network-status-badge hidden sm:inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-lg border border-emerald-500/30">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span><span>Online</span>
                </span>
                <div class="pos-offline-sync-container hidden items-center shrink-0"></div>
                <span id="pos-live-clock" class="hidden sm:inline-block text-[10px] font-mono text-white/90 px-2.5 py-1 bg-black/15 rounded-lg border border-white/20">--:--:--</span>
                <span class="hidden md:inline-flex items-center gap-1.5 text-[10px] font-bold text-white bg-black/20 px-2.5 py-1 rounded-lg">
                    <i class="fa-solid fa-barcode text-xs"></i> USB Scanner Aktif
                </span>
                <div id="pos-shift-btn-storefront" class="flex items-center shrink-0"></div>
                <div id="pos-held-btn-storefront" class="flex items-center shrink-0"></div>
                <button onclick="window.openShoppingGuideModal && window.openShoppingGuideModal('pos')" class="w-8 h-8 rounded-xl bg-black/15 hover:bg-black/25 text-white flex items-center justify-center text-xs transition-all active:scale-90 cursor-pointer shrink-0" title="Buku Panduan Kasir POS">
                    <i class="fa-solid fa-circle-question"></i>
                </button>
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
                <span class="pos-network-status-badge hidden sm:inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 rounded-lg border border-emerald-200 dark:border-emerald-800">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span><span>Online</span>
                </span>
                <div class="pos-offline-sync-container hidden items-center shrink-0"></div>
                <span class="hidden md:inline-flex items-center gap-1.5 text-[10px] font-bold text-slate-500 dark:text-slate-400 whitespace-nowrap">
                    <i class="fa-solid fa-barcode text-xs"></i> Scanner Otomatis
                </span>
                <div id="pos-shift-btn-admin" class="flex items-center shrink-0"></div>
                <div id="pos-held-btn-admin" class="flex items-center shrink-0"></div>
                <button onclick="window.openShoppingGuideModal && window.openShoppingGuideModal('pos')" class="h-8 px-2 sm:px-2.5 rounded-xl bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold inline-flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap shrink-0 shadow-2xs active:scale-95" title="Buku Panduan Kasir POS">
                    <i class="fa-solid fa-circle-question text-xs text-[var(--color-primary)]"></i>
                    <span class="hidden sm:inline">Panduan POS</span>
                </button>
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
                            <input id="pos-search-input" type="text" placeholder="Cari nama, SKU, barcode... [F2]" 
                                class="w-full pl-8 pr-8 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)] focus:bg-white dark:focus:bg-slate-900 transition-all"
                                oninput="window.posSearchFn(this.value)">
                            <button type="button" onclick="window.posClearSearch()" class="pos-search-clear-btn hidden absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-rose-500 text-xs p-1 cursor-pointer transition-colors active:scale-90" title="Hapus pencarian (Esc)">
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
                            <button id="pos-view-btn-grid" onclick="window.setPOSViewMode('grid')" class="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer ${we==="grid"?"text-white shadow-xs":"text-slate-500 hover:text-slate-800 dark:text-slate-400"}" style="${we==="grid"?"background:linear-gradient(135deg, var(--color-primary-light,#e1b858) 0%, var(--color-primary,#c59b27) 60%, var(--color-primary-dark,#a87f1b) 100%)":""}" title="Tampilan Grid Foto">
                                <i class="fa-solid fa-grip"></i>
                            </button>
                            <button id="pos-view-btn-list" onclick="window.setPOSViewMode('list')" class="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer ${we==="list"?"text-white shadow-xs":"text-slate-500 hover:text-slate-800 dark:text-slate-400"}" style="${we==="list"?"background:linear-gradient(135deg, var(--color-primary-light,#e1b858) 0%, var(--color-primary,#c59b27) 60%, var(--color-primary-dark,#a87f1b) 100%)":""}" title="Tampilan List Baris Kompak">
                                <i class="fa-solid fa-list-ul"></i>
                            </button>
                        </div>
                    </div>
                    <!-- Kategori Chips -->
                    <div id="pos-cat-filter" class="flex gap-1.5 overflow-x-auto hide-scrollbar pb-0.5"></div>
                    <div id="pos-subcat-filter" class="w-full hidden"></div>
                    <!-- Keyboard Shortcuts Quick Bar (Hanya Desktop >= sm) -->
                    <div class="hidden sm:flex items-center justify-between text-[10px] text-slate-400 dark:text-slate-500 pt-1 border-t border-slate-100 dark:border-slate-800/80 px-0.5 select-none">
                        <div class="flex items-center gap-2 overflow-x-auto hide-scrollbar py-0.5">
                            <span class="inline-flex items-center gap-1"><kbd class="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono font-bold text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">F2</kbd> Cari</span>
                            <span class="text-slate-300 dark:text-slate-700">•</span>
                            <span class="inline-flex items-center gap-1"><kbd class="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono font-bold text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">F4</kbd> Bayar</span>
                            <span class="text-slate-300 dark:text-slate-700">•</span>
                            <span class="inline-flex items-center gap-1"><kbd class="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono font-bold text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">F6</kbd> Tahan</span>
                            <span class="text-slate-300 dark:text-slate-700">•</span>
                            <span class="inline-flex items-center gap-1"><kbd class="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono font-bold text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">F7</kbd> Diskon</span>
                            <span class="text-slate-300 dark:text-slate-700">•</span>
                            <span class="inline-flex items-center gap-1"><kbd class="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono font-bold text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">F8</kbd> Tertahan</span>
                            <span class="text-slate-300 dark:text-slate-700">•</span>
                            <span class="inline-flex items-center gap-1"><kbd class="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono font-bold text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">F9</kbd> Kamera</span>
                            <span class="text-slate-300 dark:text-slate-700">•</span>
                            <span class="inline-flex items-center gap-1"><kbd class="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono font-bold text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">Esc</kbd> Batal/Tutup</span>
                        </div>
                    </div>
                </div>

                <!-- Product Catalog Container -->
                <div id="pos-catalog-grid" class="${we==="list"?"pos-catalog-list-mode":"pos-catalog-grid-mode"}"></div>
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
                    <div class="pos-hpp-margin-row flex justify-between text-xs text-slate-500 font-medium" style="display:none">
                        <span class="flex items-center gap-1"><i class="fa-solid fa-coins text-amber-500 text-[10px]"></i> Total Modal (HPP)</span>
                        <span class="pos-total-hpp-target font-bold text-amber-600 dark:text-amber-400">Rp 0</span>
                    </div>
                    <div class="pos-hpp-margin-row flex justify-between text-xs text-slate-500 font-medium" style="display:none">
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
                    <div class="pos-hpp-margin-row flex justify-between text-xs text-slate-500 font-medium" style="display:none">
                        <span class="flex items-center gap-1"><i class="fa-solid fa-coins text-amber-500 text-[10px]"></i> Total Modal (HPP)</span>
                        <span class="pos-total-hpp-target font-bold text-amber-600 dark:text-amber-400">Rp 0</span>
                    </div>
                    <div class="pos-hpp-margin-row flex justify-between text-xs text-slate-500 font-medium" style="display:none">
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
    `},vs=()=>{try{le="",fe="",ke="",T=[],se=0;const e=p("view-pos-cashier");if(!e)return;const t=p("admin-content"),a=p("view-admin");t&&a?.classList.contains("admin-pos-mode")&&(t.innerHTML="",a.classList.remove("admin-pos-mode")),e.innerHTML=ks({isStorefront:!0}),z(),V(),He(),nt(),ut(),ue(),as(),es(),Oe(),Ss(),typeof Se=="function"?Se().then(s=>{(!s||s.status!=="open")&&te()}).catch(()=>{$e()||te()}):setTimeout(()=>{$e()||te()},350)}catch(e){console.error("Gagal render POS Storefront:",e)}},ys=()=>{try{le="",fe="",ke="";const e=p("view-admin");e&&e.classList.add("admin-pos-mode");const t=p("view-pos-cashier");if(t&&(t.innerHTML=""),!p("admin-content"))return;$s("admin-content",`
            <div class="h-full w-full flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-md bg-white dark:bg-slate-900 min-h-0">
                ${ks({isStorefront:!1})}
            </div>
        `),z(),V(),He(),nt(),ut(),ue(),as(),es(),Oe(),Ss(),typeof Se=="function"?Se().then(s=>{(!s||s.status!=="open")&&te()}).catch(()=>{$e()||te()}):setTimeout(()=>{$e()||te()},350)}catch(e){console.error("Gagal render POS Admin:",e);const t=p("admin-content");t&&(t.innerHTML=`
                <div class="h-full w-full flex flex-col items-center justify-center p-6 text-center">
                    <i class="fa-solid fa-triangle-exclamation text-4xl text-amber-500 mb-3"></i>
                    <h3 class="text-base font-bold text-slate-800 dark:text-white">Gagal Membuka Terminal POS</h3>
                    <p class="text-xs text-slate-500 mt-1 max-w-sm">Terjadi kendala saat memuat terminal. Silakan coba muat ulang.</p>
                    <button onclick="window.renderPOS()" class="mt-4 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-xs font-bold transition-all shadow-md">
                        <i class="fa-solid fa-arrows-rotate mr-1.5"></i>Muat Ulang Terminal
                    </button>
                </div>
            `)}},Ss=()=>{window.setPOSViewMode=Yt,window.posAddToCart=Mt,window.posAddToCartQty=ss,window.addToCartPOSWithVariant=rs,window.posUpdateQty=os,window.posSetQty=ns,window.posFormatQty=q,window.posFQty=tt,window.posSetItemDisc=is,window.posRemoveItem=$t,window.posClearCart=ls,window.openPayModal=na,window.closePayModal=Lt,window.getPOSCart=()=>T,window.getCartTotalHpp=xe,window.setPosCustomerType=us,window.setPosPayMethod=ia,window.updatePosChange=la,window.posSetQuickCash=da,window.ensureCustomersLoaded=Oe,window.ensureBanksLoaded=ct,window.lookupPosMember=ft,window.debouncedLookupPosMember=fa,window.selectPosMember=ca,window.resetPosMember=pa,window.processPOSTx=gs,window.setPosPointsRedeemed=bs,window.selectPosReward=xs,window.deselectPosReward=hs,window.posMemberPointsDiscount=Ce,window.getMaxRedeemablePoints=Pt,window.getPointValue=it,window.printPOSReceipt=ws,window.previewPOSReceiptThenPrint=Dt,window.posSetGlobalDisc=e=>{st(e)},window.posSetDiscountType=ha,window.posSetDiscountVal=st,window.posApplyQuickDiscount=ga,window.openPOSCameraScanner=jt,window.closePOSCameraScanner=Ae,window.togglePOSScannerFacing=ka,window.togglePOSScannerTorch=wa,window.togglePOSScannerMode=va,window.posProcessManualBarcode=ya,window.posSearchScannedCode=Sa,window.executePOSPrintDirect=ua,window.getActiveShift=J,window.isShiftActive=$e,window.syncActiveShiftFromCloud=Se,window.openPOSOpenShiftModal=te,window.closePOSOpenShiftModal=je,window.openPOSShiftModal=oe,window.openPOSShiftSummaryModal=oe,window.closePOSShiftSummaryModal=ot,window.openPOSCloseShiftModal=Qt,window.closePOSCloseShiftModal=Ge,window.renderShiftHeaderBadge=nt,window.printShiftSettlementReceipt=zt,window.executeShiftPrintDirect=Wt,window.posCatFilter=e=>{fe=e,ke="",qe=1,z()},window.posSubCatFilter=e=>{ke=e,qe=1,z()},window.posSearchFn=Ft,window.posClearSearch=ma,window.posLoadMoreProducts=ba,window.posSyncOfflineTransactions=at,window.renderOfflineQueueBadge=ue,window.initPOSNetworkMonitoring=ut,window.getOfflineTxQueue=Ie,window.posRenderCatalog=z,window.posRenderCart=V,window.refreshPOSCatalog=()=>{try{z()}catch(e){console.warn("refreshPOSCatalog error:",e)}},window.openPOSCartDrawer=oa,window.closePOSCartDrawer=We,window.playCashierBeep=he,window.openPOSHistory=()=>{typeof window.openAdminTab=="function"?window.openAdminTab("orders"):typeof window.showToast=="function"&&window.showToast("Semua transaksi kasir terpusat di menu Pesanan CMS Admin")},window.destroyBarcodeListener=Tt,window.playCashierChime=lt,window.posHoldCurrentCart=At,window.closePOSHoldPrompt=Ot,window.posConfirmHoldCart=Zt,window.openPOSHeldModal=dt,window.closePOSHeldModal=ze,window.posRecallHeldCart=Xt,window.posHoldCurrentAndRecall=ta,window.posOverwriteAndRecall=aa,window.posDeleteHeldCart=sa,window.posExecuteDeleteHeld=ra,window.renderHeldBadges=He},ha=e=>{Q=e==="percent"?"percent":"rp",se=ne(),V()},st=e=>{const t=Math.max(0,parseFloat(e)||0),a=xe(),s=re(),r=a>0?Math.max(0,s-a):s;if(Q==="percent"){const o=Math.min(100,t),i=Math.round(s*o/100);if(a>0&&i>r){const l=s>0?Math.floor(r/s*100):0,d=ee()?`Diskon ${o}% ditolak karena melebihi batas modal toko (Total HPP ${h(a)})! Diskon maksimal: ${l}% (${h(r)})`:`Diskon ${o}% ditolak! Persentase diskon melebihi batas maksimum transaksi yang diizinkan sistem.`;g(d,"warning"),U=l,se=Math.round(s*l/100),V(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("heavy");return}U=o,se=i}else{const o=t;if(a>0&&o>r){const i=ee()?`Diskon ditolak! Total transaksi tidak boleh di bawah harga modal toko (Total HPP ${h(a)}). Maksimal diskon: ${h(r)}`:"Diskon ditolak! Nominal diskon melebihi batas maksimum transaksi yang diizinkan sistem.";g(i,"warning"),U=r,se=r,V(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("heavy");return}U=o,se=o}V()},ga=(e,t)=>{t&&(Q=t),st(e),he()},jt=async()=>{if(p("pos-camera-scanner-modal"))return;typeof window.pushModalHistory=="function"&&window.pushModalHistory("posCameraScanner"),document.body.insertAdjacentHTML("beforeend",`
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
    </div>`),await Ps()},Ps=async()=>{const e=p("pos-camera-video");if(e)try{const t={video:{facingMode:{ideal:Et},width:{ideal:1280},height:{ideal:720}},audio:!1},a=await navigator.mediaDevices.getUserMedia(t);Fe=a,e.srcObject=a,await e.play();const s=a.getVideoTracks();if(s.length>0){Me=s[0];const r=Me.getCapabilities?Me.getCapabilities():{},o=p("pos-scanner-torch-btn");o&&(r.torch?o.classList.remove("hidden"):o.classList.add("opacity-40"))}if(typeof window.BarcodeDetector<"u")try{xt=new BarcodeDetector({formats:["ean_13","ean_8","upc_a","upc_e","code_128","code_39","code_93","qr_code","data_matrix"]})}catch{xt=null}Ee&&clearInterval(Ee),Ee=setInterval(async()=>{if(!(!xt||!e||e.readyState<2))try{const r=await xt.detect(e);if(r&&r.length>0){const o=r[0].rawValue?.trim();o&&Ts(o)}}catch{}},180)}catch(t){console.warn("[POS Scanner] Gagal akses kamera:",t);const a=p("pos-scanner-status-pill");a&&(a.innerHTML='<span class="text-rose-400 font-bold"><i class="fa-solid fa-triangle-exclamation mr-1"></i>Kamera tidak dapat diakses</span>'),g("Izin kamera ditolak atau kamera sedang digunakan aplikasi lain.","warning")}},Ts=e=>{const t=Date.now();if(e===$a&&t-Ca<1800)return;$a=e,Ca=t;const a=e.toLowerCase(),s=(m.products||[]).find(c=>c&&c.isActive!=="false"&&c.isActive!==!1&&(c.barcode&&c.barcode.toLowerCase()===a||c.sku&&c.sku.toLowerCase()===a||c.id&&String(c.id).toLowerCase()===a)),r=p("pos-scanner-reticle"),o=p("pos-scanner-status-pill"),i=p("pos-last-scanned-banner"),l=p("pos-last-scanned-text"),d=p("pos-last-scanned-price");if(s){if(r&&(r.classList.add("border-emerald-300","scale-105","bg-emerald-500/20"),setTimeout(()=>{r.classList.remove("border-emerald-300","scale-105","bg-emerald-500/20")},300)),he(),s.variants&&s.variants.length>0){o&&(o.innerHTML='<span class="text-amber-300 font-bold">Buka pilihan varian...</span>'),Ae(),Ja().then(()=>{typeof window.openPOSVariantSheet=="function"&&window.openPOSVariantSheet(s.id)});return}Mt(s.id)?(i&&l&&d&&(l.textContent=s.name,d.textContent=h(parseFloat(s.price)||0),i.classList.remove("hidden")),o&&(o.innerHTML=`<span class="text-emerald-300 font-black"><i class="fa-solid fa-check mr-1"></i>${x(s.name)} (+1)</span>`,setTimeout(()=>{o&&(o.innerHTML='<span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span><span>Menunggu barcode...</span>')},1500)),gt||(Ae(),g(`Ditambahkan: ${s.name}`,"success"))):o&&(o.innerHTML=`<span class="text-rose-400 font-bold"><i class="fa-solid fa-ban mr-1"></i>Stok "${x(s.name)}" Habis</span>`,setTimeout(()=>{o&&(o.innerHTML='<span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span><span>Menunggu barcode...</span>')},2e3))}else r&&(r.classList.add("border-rose-500","bg-rose-500/20"),setTimeout(()=>{r.classList.remove("border-rose-500","bg-rose-500/20")},400)),o&&(o.innerHTML=`<span class="text-rose-400 font-bold"><i class="fa-solid fa-xmark mr-1"></i>Barcode "${e}" tidak ditemukan</span>`)},Ae=(e=!1)=>{if(Ee&&(clearInterval(Ee),Ee=null),Fe){try{Fe.getTracks().forEach(a=>a.stop())}catch{}Fe=null}Me=null,Ye=!1;const t=p("pos-camera-scanner-modal");t&&(!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("posCameraScanner",!1,()=>t.remove()):t.remove())},wa=async()=>{if(Me)try{if(!(Me.getCapabilities?Me.getCapabilities():{}).torch){g("Lampu senter (torch) tidak didukung kamera ini.");return}Ye=!Ye,await Me.applyConstraints({advanced:[{torch:Ye}]});const t=p("pos-scanner-torch-btn");t&&(Ye?(t.classList.add("bg-amber-500","text-white"),t.classList.remove("bg-slate-800","text-slate-300")):(t.classList.remove("bg-amber-500","text-white"),t.classList.add("bg-slate-800","text-slate-300")))}catch(e){console.warn("Gagal toggle torch:",e)}},ka=async()=>{Et=Et==="environment"?"user":"environment",Fe&&(Fe.getTracks().forEach(e=>e.stop()),Fe=null),await Ps()},va=()=>{gt=!gt;const e=p("pos-scanner-mode-btn");e&&(gt?(e.textContent="Terus-menerus",e.className="px-2.5 py-1 rounded-lg bg-emerald-950/60 border border-emerald-600/60 text-emerald-400 text-[10px] font-black tracking-wider uppercase transition-all cursor-pointer"):(e.textContent="Scan Sekali",e.className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-[10px] font-black tracking-wider uppercase transition-all cursor-pointer"))},ya=e=>{if(!e||!e.trim())return;Ts(e.trim());const t=p("pos-manual-barcode-input");t&&(t.value="")},Sa=e=>{Ae();const t=p("pos-search-input");t&&(t.value=e,le=e,z())};window.setPOSViewMode=Yt;window.renderPOSStorefront=vs;window.renderPOS=ys;window.destroyBarcodeListener=Tt;window.openPOSCartDrawer=oa;window.closePOSCartDrawer=We;window.posSetQuickCash=da;window.playCashierBeep=he;window.playCashierChime=lt;window.posHoldCurrentCart=At;window.closePOSHoldPrompt=Ot;window.posConfirmHoldCart=Zt;window.openPOSHeldModal=dt;window.closePOSHeldModal=ze;window.posRecallHeldCart=Xt;window.posHoldCurrentAndRecall=ta;window.posOverwriteAndRecall=aa;window.posDeleteHeldCart=sa;window.posExecuteDeleteHeld=ra;window.renderHeldBadges=He;window.ensureCustomersLoaded=Oe;window.ensureBanksLoaded=ct;window.lookupPosMember=ft;window.debouncedLookupPosMember=fa;window.selectPosMember=ca;window.resetPosMember=pa;window.posSetDiscountType=ha;window.posSetDiscountVal=st;window.posApplyQuickDiscount=ga;window.openPOSCameraScanner=jt;window.closePOSCameraScanner=Ae;window.togglePOSScannerFacing=ka;window.togglePOSScannerTorch=wa;window.togglePOSScannerMode=va;window.posProcessManualBarcode=ya;window.posSearchScannedCode=Sa;window.executePOSPrintDirect=ua;window.previewPOSReceiptThenPrint=Dt;window.getActiveShift=J;window.isShiftActive=$e;window.syncActiveShiftFromCloud=Se;window.openPOSOpenShiftModal=te;window.closePOSOpenShiftModal=je;window.openPOSShiftModal=oe;window.openPOSShiftSummaryModal=oe;window.closePOSShiftSummaryModal=ot;window.openPOSCloseShiftModal=Qt;window.closePOSCloseShiftModal=Ge;window.renderShiftHeaderBadge=nt;window.printShiftSettlementReceipt=zt;window.executeShiftPrintDirect=Wt;window.posSubCatFilter=e=>{ke=e,z()};window.getPOSCart=()=>T;window.posSearchFn=Ft;window.posClearSearch=ma;window.posLoadMoreProducts=ba;window.posSyncOfflineTransactions=at;window.renderOfflineQueueBadge=ue;window.initPOSNetworkMonitoring=ut;window.getOfflineTxQueue=Ie;const or=Object.freeze(Object.defineProperty({__proto__:null,addToCart:Mt,addToCartWithVariant:rs,applyMemberToPos:yt,clearCart:ls,closePOSCameraScanner:Ae,closePOSCartDrawer:We,closePOSHeldModal:ze,closePOSHoldPrompt:Ot,closePayModal:Lt,debouncedLookupPosMember:fa,deselectPosReward:hs,destroyBarcodeListener:Tt,enqueueOfflineTx:_t,ensureBanksLoaded:ct,ensureCustomersLoaded:Oe,executePOSPrintDirect:ua,formatCompactPoText:Xa,formatQty:q,getCartTotalHpp:xe,getMaxRedeemablePoints:Pt,getOfflineTxQueue:Ie,getPointValue:it,getProductStockInfo:Qe,initPOSNetworkMonitoring:ut,lookupPosMember:ft,openPOSCameraScanner:jt,openPOSCartDrawer:oa,openPOSHeldModal:dt,openPayModal:na,playCashierBeep:he,playCashierChime:lt,posAddToCartQty:ss,posApplyQuickDiscount:ga,posClearSearch:ma,posConfirmHoldCart:Zt,posDeleteHeldCart:sa,posDiscountAmount:ne,posExecuteDeleteHeld:ra,posHoldCurrentAndRecall:ta,posHoldCurrentCart:At,posLoadMoreProducts:ba,posMemberPointsDiscount:Ce,posOnDpInput:ps,posOverwriteAndRecall:aa,posProcessManualBarcode:ya,posRecallHeldCart:Xt,posSearchFn:Ft,posSearchScannedCode:Sa,posSelectPaylaterTenor:cs,posSetDiscountType:ha,posSetDiscountVal:st,posSetQuickCash:da,posSyncOfflineTransactions:at,posTaxInfo:ie,posTogglePaylater:fs,previewPOSReceiptThenPrint:Dt,printPOSReceipt:ws,processPOSTx:gs,removeFromCart:$t,renderCatalog:z,renderHeldBadges:He,renderOfflineQueueBadge:ue,renderPOS:ys,renderPOSStorefront:vs,renderPosMemberResult:pt,resetPosMember:pa,saveOfflineTxQueue:xa,selectPosMember:ca,selectPosReward:xs,setItemDisc:is,setPOSViewMode:Yt,setPosCustomerType:us,setPosPayMethod:ia,setPosPointsRedeemed:bs,setQty:ns,stopClock:ts,togglePOSScannerFacing:ka,togglePOSScannerMode:va,togglePOSScannerTorch:wa,updateNetworkStatusUI:wt,updatePosChange:la,updateQty:os},Symbol.toStringTag,{value:"Module"}));export{Ia as a,sr as b,tr as c,Hs as d,ar as e,Ze as f,rt as g,or as h,rr as p,Vs as r};

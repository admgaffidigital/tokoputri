const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/pos-variant-sheet-aEEyZM-t.js","assets/module-print-C9n3bcWv.js","assets/vendor-firebase-core-D2OF5R23.js","assets/vendor-firebase-db-BIUZcnOd.js"])))=>i.map(i=>d[i]);
import{a as m,c as qa,I as Ia,k as w,z as fe,e as p,aq as Va,q as B,i as b,aM as Ue,H as Ns,aN as oe,aA as Es,E as Kt,J as qt,F as Vt,b as _s,as as Ks,m as qs,f as Vs}from"./module-print-C9n3bcWv.js";import{f as et}from"./vendor-firebase-core-D2OF5R23.js";const Se={enabled:!0,minOrder:2e4,maxOrder:1e7,noticeText:"Cicilan transparan tanpa bunga atau biaya tersembunyi. Tagihan jatuh tempo setiap bulan.",tenors:{"30d":{enabled:!0,label:"30 Hari (1x Bayar)",shortLabel:"30 Hari",months:1,days:30,adminFeeType:"flat",adminFeeValue:0,serviceFeeType:"flat",serviceFeeValue:0},"2m":{enabled:!0,label:"2 Bulan (Cicilan 2x)",shortLabel:"2 Bulan",months:2,days:60,adminFeeType:"flat",adminFeeValue:1500,serviceFeeType:"percent",serviceFeeValue:1.5},"3m":{enabled:!0,label:"3 Bulan (Cicilan 3x)",shortLabel:"3 Bulan",months:3,days:90,adminFeeType:"flat",adminFeeValue:2500,serviceFeeType:"percent",serviceFeeValue:2.5}}},lt=()=>{const e=m?.store?.paylater||{},t=e.tenors||{},a=(s,r)=>{const o=t[s]||{};return{enabled:o.enabled!==void 0?!!o.enabled:r.enabled,label:o.label||r.label,shortLabel:o.shortLabel||r.shortLabel,months:parseInt(o.months,10)||r.months,days:parseInt(o.days,10)||r.days,adminFeeType:o.adminFeeType==="percent"?"percent":"flat",adminFeeValue:Math.max(0,parseFloat(o.adminFeeValue)||0),serviceFeeType:o.serviceFeeType==="percent"?"percent":"flat",serviceFeeValue:Math.max(0,parseFloat(o.serviceFeeValue)||0)}};return{enabled:e.enabled!==void 0?e.enabled===!0||e.enabled==="true":Se.enabled,minOrder:Math.max(0,parseFloat(e.minOrder!==void 0?e.minOrder:Se.minOrder)),maxOrder:Math.max(0,parseFloat(e.maxOrder!==void 0?e.maxOrder:Se.maxOrder)),noticeText:(e.noticeText||Se.noticeText).trim(),tenors:{"30d":a("30d",Se.tenors["30d"]),"2m":a("2m",Se.tenors["2m"]),"3m":a("3m",Se.tenors["3m"])}}},Us=e=>{if(typeof e=="number")return isNaN(e)?0:Math.max(0,e);if(!e)return 0;let t=String(e).trim().replace(/[^0-9.,-]/g,"");if(!t)return 0;t.includes(".")&&t.includes(",")?t=t.replace(/\./g,"").replace(",","."):t.includes(".")&&!t.includes(",")?/\.\d{3}($|\.)/.test(t)&&(t=t.replace(/\./g,"")):t.includes(",")&&!t.includes(".")&&(/,\d{3}($|,)/.test(t)?t=t.replace(/,/g,""):t=t.replace(",","."));const a=parseFloat(t);return isNaN(a)?0:Math.max(0,a)},at=(e,t="30d",a=null)=>{const s=a||lt(),r=Us(e),o=s.tenors?.[t]||Se.tenors[t]||Se.tenors["30d"],i=Math.max(1,parseInt(o.months,10)||1),l=r>=s.minOrder&&(s.maxOrder<=0||r<=s.maxOrder),d=r,c=Math.round(d/i);let n=0;const f=Math.max(0,parseFloat(o.adminFeeValue)||0);r>0&&f>0&&(o.adminFeeType==="percent"?n=Math.round(d*f/100):n=Math.round(f));const k=Math.round(n/i);let g=0;const O=Math.max(0,parseFloat(o.serviceFeeValue)||0);r>0&&O>0&&(o.serviceFeeType==="percent"?g=Math.round(d*O/100):g=Math.round(O));const v=Math.round(g/i),y=r>0?c+k+v:0,S=r>0?d+n+g:0,L=[];if(r>0){const D=new Date,F=Math.max(1,Math.min(31,parseInt(a?.dueDay??s?.dueDay??5,10)||5));let R=0,W=0,J=0;for(let P=1;P<=i;P++){const E=D.getFullYear(),u=D.getMonth()+P,T=new Date(E,u,1),A=T.getFullYear(),C=T.getMonth(),H=new Date(A,C+1,0).getDate(),ae=Math.min(F,H),_=new Date(A,C,ae,23,59,59);let K=c,se=k,X=v;P===i?(K=Math.max(0,d-R),se=Math.max(0,n-W),X=Math.max(0,g-J)):(R+=K,W+=se,J+=X);const wt=K+se+X;L.push({installmentIndex:P,totalMonths:i,dueDate:_.getTime(),dueDateFormatted:_.toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}),pokok:K,adminFee:se,serviceFee:X,total:wt})}}return{tenorKey:t,enabled:o.enabled,label:o.label,shortLabel:o.shortLabel,months:i,days:o.days||i*30,isEligible:l,minOrder:s.minOrder,maxOrder:s.maxOrder,pokokTotal:d,pokokPerMonth:c,adminFeeType:o.adminFeeType,adminFeeValue:o.adminFeeValue,totalAdminFee:n,adminFeePerMonth:k,serviceFeeType:o.serviceFeeType,serviceFeeValue:o.serviceFeeValue,totalServiceFee:g,serviceFeePerMonth:v,totalPerMonth:y,grandTotal:S,schedule:L,noticeText:s.noticeText}},br=(e,t=null)=>{const a=t||lt(),s=["30d","2m","3m"],r={};let o=1/0,i="3m";return s.forEach(l=>{const d=at(e,l,a);r[l]=d,d.enabled&&d.totalPerMonth>0&&d.totalPerMonth<o&&(o=d.totalPerMonth,i=l)}),{config:a,results:r,minMonthly:o===1/0?0:o,minTenorKey:i,amount:Math.max(0,parseFloat(e)||0)}},Ut=(e,t)=>{const a=Math.max(0,parseFloat(e?.paylaterUsed)||0);if(a<=0)return null;const s=Math.max(0,parseFloat(e?.paylaterAdminFee)||0)+Math.max(0,parseFloat(e?.paylaterServiceFee)||0),r=a+s,o=Math.max(0,parseFloat(t)||0);if(o<=0)return a;const i=Math.max(0,r-o);return Math.min(a,Math.max(0,Math.round(a*i/r)))},xr=(e,t,a,s=0)=>{const r=Ut(e,t),o=Ut(e,a);return r===null||o===null?Math.max(0,parseFloat(s)||0):Math.max(0,o-r)},hr=e=>{const t=Math.max(0,parseFloat(e?.paylaterUsed)||0);if(t<=0)return 0;if(!(e&&e.tempoBalance!==void 0&&e.tempoBalance!==null))return t;const s=Ut(e,e.tempoBalance)||0;return Math.max(0,t-s)},Ua=e=>{const t=m.products?.find(r=>r&&r.id!=null&&String(r.id)===String(e.id));let a=e.price||0;if(e.variantName&&t&&t.variants){const r=t.variants.find(o=>o.name===e.variantName);r&&r.price!=null&&(a=r.price)}if(e.variantName||!t||!t.wholesale||!t.wholesale.length)return a;const s=qa.filter(r=>r.id!=null&&String(r.id)===String(e.id)).reduce((r,o)=>r+(parseFloat(o.qty)||0),0);for(let r of t.wholesale.slice().sort((o,i)=>i.minQty-o.minQty))if(s>=parseFloat(r.minQty))return r.price;return a},ze=e=>{const t=m.products?.find(a=>a&&a.id!=null&&String(a.id)===String(e.id));if(!t)return 0;if(e.variantName&&t.variants){const a=t.variants.find(s=>s.name===e.variantName);if(a&&a.hpp!=null)return parseFloat(a.hpp)||0}return parseFloat(t.hpp)||0},Ga=e=>{if(!e)return 0;const t=m.products?.find(a=>a&&a.id!=null&&String(a.id)===String(e.id));if(!t)return parseFloat(e.poin)||0;if(e.variantName&&t.variants){const a=t.variants.find(s=>s.name===e.variantName);if(a&&a.poin!==void 0&&a.poin!==null&&a.poin!==""){const s=parseFloat(a.poin);if(!isNaN(s)&&s>0)return s}}return parseFloat(t.poin)||0},Gs=(e,t,a,s)=>{if(!e||!t||!a||!s)return 0;const r=6371,o=(a-e)*Math.PI/180,i=(s-t)*Math.PI/180,l=Math.sin(o/2)*Math.sin(o/2)+Math.cos(e*Math.PI/180)*Math.cos(a*Math.PI/180)*Math.sin(i/2)*Math.sin(i/2),d=2*Math.atan2(Math.sqrt(l),Math.sqrt(1-l));return r*d},Qa=e=>{if(!e||typeof e!="string")return null;let t=e.trim();try{t=decodeURIComponent(t)}catch{}const a=t.match(/@(-?\d{1,3}\.\d+)[,\s]+(-?\d{1,3}\.\d+)/);if(a){const i=parseFloat(a[1]),l=parseFloat(a[2]);if(!isNaN(i)&&!isNaN(l)&&Math.abs(i)<=90&&Math.abs(l)<=180)return{lat:a[1],lng:a[2]}}const s=t.match(/[?&](?:q|ll|query|loc|center)=(-?\d{1,3}\.\d+)[,\s]+(-?\d{1,3}\.\d+)/i);if(s){const i=parseFloat(s[1]),l=parseFloat(s[2]);if(!isNaN(i)&&!isNaN(l)&&Math.abs(i)<=90&&Math.abs(l)<=180)return{lat:s[1],lng:s[2]}}const r=t.match(/(\d+)[°\s]+(\d+)['\s]+([\d.]+)"?\s*([NSns])[,\s]+(\d+)[°\s]+(\d+)['\s]+([\d.]+)"?\s*([EWew])/);if(r){let i=parseInt(r[1],10)+parseInt(r[2],10)/60+parseFloat(r[3])/3600;r[4].toUpperCase()==="S"&&(i=-i);let l=parseInt(r[5],10)+parseInt(r[6],10)/60+parseFloat(r[7])/3600;return r[8].toUpperCase()==="W"&&(l=-l),{lat:i.toFixed(8),lng:l.toFixed(8)}}const o=t.match(/(-?\d{1,3}\.\d{3,20})[,\s;\t]+(-?\d{1,3}\.\d{3,20})/);if(o){const i=parseFloat(o[1]),l=parseFloat(o[2]);if(!isNaN(i)&&!isNaN(l)&&Math.abs(i)<=90&&Math.abs(l)<=180)return{lat:o[1],lng:o[2]}}return null},Qs=e=>{const t=(typeof e=="string"?e:e?.value||"").trim(),a=Qa(t);return a?(Ia("set-lat",a.lat),Ia("set-lng",a.lng),w("Koordinat GPS berhasil disalin!"),a):(w("Format tidak dikenali! Tempel koordinat: Lat, Lng atau link Google Maps"),null)},zs=(e=qa,t=m.store)=>{if(!e||!e.length)return{totalPoints:0,directPoints:0,spendPoints:0,nonPointSpend:0,threshold:1e5,pointsPerThreshold:1,isSpendPointsActive:!1,remainingToNextPoint:0,progressPercent:0};let a=0,s=0;e.forEach(n=>{const f=Ga(n),k=parseFloat(n.qty)||0;if(f>0)a+=f*k;else{const g=Ua(n);s+=g*k}});let r=0,o=0,i=0;const l=t?t.spendPointsEnabled===!0||t.spendPointsEnabled==="true":!1,d=Math.max(1,parseFloat(t?.spendPointsThreshold)||1e5),c=Math.max(1,parseFloat(t?.spendPointsPerThreshold)||1);if(l&&s>0){const n=Math.floor(s/d);r=n*c;const f=s%d;o=f>0?d-f:d,i=Math.min(100,Math.round((f||(n>0?d:0))/d*100))}return{totalPoints:a+r,directPoints:a,spendPoints:r,nonPointSpend:s,threshold:d,pointsPerThreshold:c,isSpendPointsActive:l,remainingToNextPoint:o,progressPercent:i}},Ws=()=>{const e=m.store.useStock===!0||m.store.useStock==="true";let t=0,a=0,s=0,r=0,o=0,i=0;return(m.products||[]).forEach(l=>{if(l.variants&&l.variants.length)l.variants.forEach(d=>{const c=d.isActive!==!1&&d.isActive!=="false",n=parseFloat(d.stock)||0;c&&(!e||n>0)?s++:r++,o+=(parseFloat(d.hpp)||0)*n,i+=(parseFloat(d.price)||0)*n});else{const d=l.isActive!==!1&&l.isActive!=="false",c=parseFloat(l.stock)||0;d&&(!e||c>0)?t++:a++,o+=(parseFloat(l.hpp)||0)*c,i+=(parseFloat(l.price)||0)*c}}),{activeProd:t,inactiveProd:a,activeVar:s,inactiveVar:r,assetHpp:o,assetJual:i}},za=e=>{if(!e)return{totalStock:0,hasStockData:!1,isManaged:!1,isOutOfStock:!0,isLowStock:!1,isInactive:!0,isPreorder:!1,poTime:""};const t=e.isActive!=="false"&&e.isActive!==!1,a=m?.store?.useStock===!0||m?.store?.useStock==="true",s=!!(e.poTime&&String(e.poTime).trim()),r=s?String(e.poTime).trim():"",o=Array.isArray(e.variants)&&e.variants.length>0;let i=0,l=!1;if(o){const y=e.variants.filter(S=>S&&S.isActive!==!1&&S.isActive!=="false");for(const S of y){const L=S.stock!=null&&S.stock!==""?S.stock:S.stok!=null&&S.stok!==""?S.stok:null;if(L!=null){const D=parseFloat(L);isNaN(D)||(l=!0,i+=D)}}}const d=e.stock!=null&&e.stock!==""?e.stock:e.stok!=null&&e.stok!==""?e.stok:null,c=d!=null&&!isNaN(parseFloat(d)),n=c?parseFloat(d):0;let f=0,k=!1;o&&l?(f=i,k=!0,f===0&&c&&n>0&&(f=n)):c?(f=n,k=!0):(f=0,k=!1);const g=a||k,O=!t||g&&f<=0&&!s,v=g&&f>0&&f<=5;return{totalStock:Math.max(0,f),hasStockData:k,isManaged:g,isOutOfStock:O,isLowStock:v,isInactive:!t,isPreorder:s,poTime:r}};window.getEffP=Ua;window.getEffHpp=ze;window.getEffPoin=Ga;window.calculateCartPoints=zs;window.computeInventoryStats=Ws;window.computeTotalProductStock=za;window.getDist=Gs;window.parseGeoCoordinates=Qa;window.autoParseCoords=Qs;let _e=null;const he=()=>{if(_e)return _e;try{const e=sessionStorage.getItem("pos_cashier_session");if(e)return _e=JSON.parse(e),_e}catch{}return null},Gt=e=>{_e=e;try{e?sessionStorage.setItem("pos_cashier_session",JSON.stringify(e)):sessionStorage.removeItem("pos_cashier_session")}catch{}},Wa=()=>{_e=null;try{sessionStorage.removeItem("pos_cashier_session")}catch{}},Ja=()=>!!he(),Ya=async()=>{if(he()||window.isAdm||window.__localIsAdm||m&&(m.hasCashier===!0||m.store?.posEnabled===!0))return!0;const e=localStorage.getItem("pos_has_cashier");if(e==="true")return!0;const t=!!(window.isAdm||window.__localIsAdm||fe.currentUser&&fe.currentUser.uid===Va);try{if(t){const s=!(await B.collection("freshmart").doc("cms_data").collection("cashier_accounts").where("isActive","==",!0).limit(1).get()).empty;try{localStorage.setItem("pos_has_cashier",s?"true":"false"),B.collection("freshmart").doc("cms_data").set({hasCashier:s},{merge:!0}).catch(()=>{})}catch{}return s}else{const a=await B.collection("freshmart").doc("cms_data").get();if(a.exists){const s=a.data();if(s.hasCashier!==void 0){const r=!!s.hasCashier;try{localStorage.setItem("pos_has_cashier",r?"true":"false")}catch{}return r}}return e!=="false"}}catch{return e!=="false"}},st=async()=>{const e=p("pos-cashier-header-btn");if(!e)return;const t=!!he(),a=!!(window.isAdm||window.__localIsAdm),s=localStorage.getItem("pos_has_cashier"),r=m?m.hasCashier??!0:!0;t||a||s==="true"||s===null&&r!==!1?e.classList.remove("hidden"):s==="false"&&e.classList.add("hidden");try{await Ya()||t||a?e.classList.remove("hidden"):e.classList.add("hidden")}catch{(t||a||s!=="false")&&e.classList.remove("hidden")}},Za=async()=>{typeof window.triggerHaptic=="function"&&window.triggerHaptic("medium"),he()?(typeof window.changeView=="function"&&window.changeView("view-pos-cashier"),typeof window.renderPOSStorefront=="function"&&window.renderPOSStorefront()):Wt()},Wt=()=>{const e=p("pos-login-modal");e&&(e.classList.remove("hidden"),setTimeout(()=>{e.classList.remove("opacity-0");const t=p("pos-login-modal-box");t&&t.classList.remove("translate-y-full","scale-95")},10),setTimeout(()=>{const t=p("pos-login-email");t&&t.focus()},300),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},Jt=()=>{const e=p("pos-login-modal"),t=p("pos-login-modal-box");e&&e.classList.add("opacity-0"),t&&t.classList.add("translate-y-full"),setTimeout(()=>{e&&e.classList.add("hidden");const a=p("pos-login-email"),s=p("pos-login-password"),r=p("pos-login-error");a&&(a.value=""),s&&(s.value=""),r&&(r.textContent="",r.classList.add("hidden"))},300)},Xa=async()=>{const e=p("pos-login-email"),t=p("pos-login-password"),a=p("pos-login-error"),s=p("pos-login-btn"),r=e?.value?.trim()||"",o=t?.value||"",i=d=>{if(a){a.classList.remove("hidden");const c=a.querySelector("span");c?c.textContent=d:a.textContent=d}typeof window.triggerHaptic=="function"&&window.triggerHaptic("error")};if((()=>{if(a){a.classList.add("hidden");const d=a.querySelector("span");d&&(d.textContent="")}})(),!r||!o){i("Email dan password wajib diisi.");return}s&&(s.disabled=!0,s.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i>Memverifikasi...');try{const c=(await fe.signInWithEmailAndPassword(r,o)).user?.uid;if(!c)throw new Error("UID tidak ditemukan");if(c===Va){Gt({uid:c,name:"Owner Toko",email:r,role:"owner"});try{localStorage.setItem("pos_has_cashier","true")}catch{}st()}else{const k=await B.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(c).get();if(!k.exists){await fe.signOut(),i("Akun ini bukan akun staf/kasir yang terdaftar di toko ini.");return}const g=k.data()||{};if(g.isActive===!1){await fe.signOut(),i("Akun staf ini telah dinonaktifkan oleh Owner toko.");return}if(!(g.role==="cashier"||g.role==="admin"||g.role==="owner"||g.permissions?.pos!==!1)){await fe.signOut(),i("Akun ini tidak memiliki hak akses kasir POS.");return}Gt({uid:c,name:g.name||r,email:g.email||r,role:g.role||"cashier"});try{localStorage.setItem("pos_has_cashier","true")}catch{}st()}typeof window.syncActiveShiftFromCloud=="function"&&window.syncActiveShiftFromCloud().catch(()=>{}),Jt();const n=he();w(`Selamat datang, ${n?.name||"Kasir"}! 👋`,"success"),typeof window.changeView=="function"&&window.changeView("view-pos-cashier"),setTimeout(()=>{typeof window.renderPOSStorefront=="function"&&window.renderPOSStorefront()},100),typeof window.triggerHaptic=="function"&&window.triggerHaptic("success")}catch(d){console.error("[POS Auth] Login error:",d);const c=d.code||"";i(c==="auth/user-not-found"||c==="auth/wrong-password"||c==="auth/invalid-credential"?"Email atau password salah.":c==="auth/too-many-requests"?"Terlalu banyak percobaan. Coba lagi beberapa saat.":c==="auth/network-request-failed"?"Koneksi gagal. Periksa jaringan internet.":"Login gagal: "+(d.message||"Kesalahan tidak diketahui"))}finally{s&&(s.disabled=!1,s.innerHTML='<i class="fa-solid fa-right-to-bracket mr-2"></i>Masuk Kasir')}},Yt=async(e=!1)=>{if(!e&&typeof window.getActiveShift=="function"){const a=window.getActiveShift();if(a&&a.status==="open"){document.getElementById("pos-logout-shift-modal")?.remove();const s=typeof window.fRp=="function"?window.fRp(a.startingCash):"Rp "+a.startingCash;document.body.insertAdjacentHTML("beforeend",`
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
            </div>`);return}}he(),typeof window.detachPOSHistoryListener=="function"&&window.detachPOSHistoryListener(),typeof window.detachActiveShiftListener=="function"&&window.detachActiveShiftListener(),typeof window.clearActiveShift=="function"&&window.clearActiveShift();try{if(!window.isAdm&&!window.__localIsAdm)try{await fe.signOut()}catch{}}catch{}Wa();const t=p("view-pos-cashier");t&&(t.innerHTML=""),typeof window.destroyBarcodeListener=="function"&&window.destroyBarcodeListener(),typeof window.stopPOSClock=="function"&&window.stopPOSClock(),w("Sesi kasir berakhir. Sampai jumpa! 👋"),typeof window.changeView=="function"&&window.changeView("view-catalog"),typeof window.triggerHaptic=="function"&&window.triggerHaptic("medium"),typeof window.updatePOSHeaderIcon=="function"&&window.updatePOSHeaderIcon()},es=async()=>{await st()};window.openPOSCashierMode=Za;window.openPOSLoginModal=Wt;window.closePOSLoginModal=Jt;window.processCashierLogin=Xa;window.cashierLogout=Yt;window.exitPOSMode=Yt;window.getCashierSession=he;window.isCashierLoggedIn=Ja;window.initPOSAuth=es;window.updatePOSHeaderIcon=st;const gr=Object.freeze(Object.defineProperty({__proto__:null,cashierLogout:Yt,checkCashierExists:Ya,clearCashierSession:Wa,closePOSLoginModal:Jt,getCashierSession:he,initPOSAuth:es,isCashierLoggedIn:Ja,openPOSCashierMode:Za,openPOSLoginModal:Wt,processCashierLogin:Xa,setCashierSession:Gt,updatePOSHeaderIcon:st},Symbol.toStringTag,{value:"Module"})),M=e=>"Rp "+Math.round(parseFloat(e)||0).toLocaleString("id-ID"),ts=e=>parseFloat((parseFloat(e)||0).toFixed(3)).toString(),Mt="pos_active_shift",as="pos_last_closed_shift";let Ke=null,yt=null;const $t=()=>{if(typeof yt=="function"){try{yt()}catch{}yt=null}},We=()=>{const e=typeof he=="function"?he():null,t=!!(window.isAdm||window.__localIsAdm||window.__currentAdminUid),a=fe?.currentUser?.uid,s=e?.uid||(t?window.__currentAdminUid||a||"admin":a||"cashier-anon"),r=e?.name||(t?"Admin Seller":"Kasir Toko"),o=e?.email||t&&fe?.currentUser?.email||"";return{uid:s,name:r,email:o,isAdm:t}},Ge=(e,t=We())=>{if(!e)return!1;const a=e.cashierUid;return!!(a&&t.uid&&a===t.uid||t.isAdm&&(a==="admin"||a==="ADMIN_UID"||a===window.__currentAdminUid||fe?.currentUser&&a===fe.currentUser.uid))},ee=()=>{if(Ke)return Ke;try{const e=localStorage.getItem(Mt);if(e)return Ke=JSON.parse(e),Ke}catch(e){console.warn("[POS Shift] Gagal membaca active shift:",e)}return null},$e=e=>{Ke=e;try{e?localStorage.setItem(Mt,JSON.stringify(e)):localStorage.removeItem(Mt)}catch{}},rt=()=>{Ke=null;try{localStorage.removeItem(Mt)}catch{}},Js=()=>{try{const e=localStorage.getItem(as);if(e)return JSON.parse(e)}catch{}return null},Zt=e=>{try{localStorage.setItem(as,JSON.stringify(e))}catch{}},Le=()=>{const e=ee();return!!(e&&e.status==="open")},At=async(e=null)=>{const t=We();try{const a=await B.collection("freshmart").doc("cms_data").collection("pos_shifts").where("status","==","open").get();if(!a.empty){const s=[];if(a.forEach(r=>{const o={id:r.id,...r.data()};Ge(o,t)&&s.push(o)}),s.length>0)return s.sort((r,o)=>(o.startTime||0)-(r.startTime||0)),s[0]}}catch(a){console.warn("[POS Shift] Cek open shift cms_data:",a)}try{const a=await B.collection("pos_shifts").where("status","==","open").get();if(!a.empty){const s=[];if(a.forEach(r=>{const o={id:r.id,...r.data()};Ge(o,t)&&s.push(o)}),s.length>0)return s.sort((r,o)=>(o.startTime||0)-(r.startTime||0)),s[0]}}catch(a){console.warn("[POS Shift] Cek open shift root pos_shifts:",a)}return null},Ie=e=>{if(e){$t();try{yt=B.collection("freshmart").doc("cms_data").collection("pos_shifts").doc(e).onSnapshot(a=>{if(!a.exists)return;const s={id:a.id,...a.data()};if(s.status==="closed"){$t(),rt(),Zt(s),dt(),Je(),Re(),w("Shift kasir telah ditutup dari perangkat lain.","info"),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge();return}if(s.status==="open"){$e(s),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge();const r=p("pos-shift-summary-modal");r&&!r.classList.contains("opacity-0")&&pe()}},a=>{console.warn("[POS Shift] Snapshot listener cms_data error:",a)})}catch(t){console.warn("[POS Shift] Gagal attach snapshot listener:",t)}}},Ce=async()=>{const e=We(),t=ee();if(t&&t.status==="open"&&Ge(t,e))try{const a=await B.collection("freshmart").doc("cms_data").collection("pos_shifts").doc(t.id).get();if(a.exists){const s={id:a.id,...a.data()};if(s.status==="closed")rt(),Zt(s),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge();else return $e(s),Ie(s.id),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge(),s}}catch(a){return console.warn("[POS Shift] Gagal verifikasi local shift ke cloud:",a),Ie(t.id),t}try{const a=await At(e.uid);if(a)return $e(a),Ie(a.id),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge(),a;t&&!Ge(t,e)&&(rt(),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge())}catch(a){console.warn("[POS Shift] Gagal cari shift open di cloud:",a)}return ee()},ss=(e="open")=>{try{if(typeof window<"u"&&typeof window.checkUserGesture=="function"&&!window.checkUserGesture())return;const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const a=new t,s=a.currentTime;e==="open"?([523.25,659.25,783.99,1046.5].forEach((o,i)=>{const l=a.createOscillator(),d=a.createGain(),c=s+i*.07;l.type="sine",l.frequency.setValueAtTime(o,c),d.gain.setValueAtTime(.09,c),d.gain.exponentialRampToValueAtTime(1e-4,c+.16),l.connect(d),d.connect(a.destination),l.start(c),l.stop(c+.16)}),setTimeout(()=>{a.close().catch(()=>{})},600)):([{f:[783.99,987.77],t:s,d:.14},{f:[1046.5,1318.51],t:s+.12,d:.35}].forEach(o=>{o.f.forEach(i=>{const l=a.createOscillator(),d=a.createGain();l.type="triangle",l.frequency.setValueAtTime(i,o.t),d.gain.setValueAtTime(.08,o.t),d.gain.exponentialRampToValueAtTime(1e-4,o.t+o.d),l.connect(d),d.connect(a.destination),l.start(o.t),l.stop(o.t+o.d)})}),setTimeout(()=>{a.close().catch(()=>{})},700))}catch{}},Xt=(e,t=Date.now())=>{if(!e)return"-";const a=Math.max(0,t-e),s=Math.floor(a/6e4),r=Math.floor(s/60),o=s%60;return r>0?`${r} Jam ${o} Menit`:`${o} Menit`},Ys=()=>{const e=new Date,t=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0"),r=Math.floor(100+Math.random()*900);return`SHF-${t}${a}${s}-${r}`},ne=async()=>{const e=We(),t=ee();if(t&&t.status==="open"&&Ge(t,e)){w(`Shift kasir #${t.shiftNo||t.id} sedang aktif. Menampilkan ringkasan shift.`,"info"),pe();return}try{const l=await At(e.uid);if(l){$e(l),Ie(l.id),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge(),w(`Melanjutkan shift aktif (#${l.shiftNo||l.id}) dari perangkat lain! 👋`,"success"),pe();return}}catch(l){console.warn("[POS Shift] Cek cloud saat buka modal:",l)}const a=e.name,s=new Date().toLocaleString("id-ID",{dateStyle:"full",timeStyle:"short"});document.getElementById("pos-open-shift-modal")?.remove();const r=`
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
    </div>`;document.body.insertAdjacentHTML("beforeend",r);const o=p("pos-open-shift-modal"),i=p("pos-open-shift-box");!o||!i||(o.classList.remove("pointer-events-none"),requestAnimationFrame(()=>{o.classList.remove("opacity-0"),i.classList.remove("translate-y-8","scale-95")}),setTimeout(()=>{const l=p("pos-shift-start-cash-input");l&&(l.focus(),l.select())},250))},Re=()=>{const e=p("pos-open-shift-modal"),t=p("pos-open-shift-box");e&&(e.classList.add("opacity-0","pointer-events-none"),t&&t.classList.add("translate-y-8","scale-95"),setTimeout(()=>{e.remove()},280))},rs=()=>{const e=parseFloat(p("pos-shift-start-cash-input")?.value)||0;document.querySelectorAll(".pos-preset-chip").forEach(t=>{parseFloat(t.dataset.amount)===e?t.className="pos-preset-chip px-2.5 py-1 rounded-xl text-[10px] font-black border-2 border-[var(--color-primary)] text-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.1)] shadow-xs transition-all cursor-pointer":t.className="pos-preset-chip px-2.5 py-1 rounded-xl text-[10px] font-bold border border-slate-200 dark:border-slate-700 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-all cursor-pointer"})},Zs=e=>{const t=p("pos-shift-start-cash-input");t&&(t.value=e,t.focus(),t.select()),rs()},Xs=async()=>{const e=p("pos-shift-start-cash-input"),t=p("pos-shift-start-notes-input"),a=parseFloat(e?.value)||0,s=t?.value?.trim()||"",r=We(),o=r.uid,i=r.name,l=r.email,d=document.querySelector('#pos-open-shift-box button[onclick*="confirmStartPOSShift"]');d&&(d.disabled=!0,d.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-1.5"></i><span>Memverifikasi Shift...</span>');try{const n=await At(o);if(n){Re(),$e(n),Ie(n.id),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge(),w(`Akun kasir sudah memiliki shift aktif (#${n.shiftNo||n.id}). Melanjutkan shift berjalan.`,"warning"),pe();return}}catch(n){console.warn("[POS Shift] Pre-flight check error:",n)}const c={id:"SHF-"+Date.now(),shiftNo:Ys(),cashierUid:o,cashierName:i,cashierEmail:l,startTime:Date.now(),startTimeISO:new Date().toISOString(),startingCash:a,startNotes:s,status:"open",txCount:0,itemCount:0,totalSales:0,cashSales:0,qrisSales:0,bankSales:0,tempoSales:0,discountTotal:0,pointsTotal:0,orders:[]};$e(c),Ie(c.id);try{await Promise.all([B.collection("freshmart").doc("cms_data").collection("pos_shifts").doc(c.id).set(c),B.collection("pos_shifts").doc(c.id).set(c)])}catch{}Re(),ss("open"),w(`Shift kasir dibuka! Modal awal: ${M(a)} 🎉`,"success"),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge()},os=e=>{try{const t=ee();if(!t||t.status!=="open")return;const a=parseFloat(e.total)||0,s=e.payment?.method||"cash",r=parseFloat(e.payment?.tempoDp??e.payment?.dp??e.payment?.paid)||0,o=parseFloat(e.payment?.tempoBalance)||0,i=parseFloat(e.globalDiscount)||0,l=parseFloat(e.pointsEarned)||0,d=(e.items||[]).reduce((c,n)=>c+(parseFloat(n.qty)||0),0);t.txCount=(t.txCount||0)+1,t.itemCount=parseFloat(((t.itemCount||0)+d).toFixed(3)),t.totalSales=(t.totalSales||0)+a,t.discountTotal=(t.discountTotal||0)+i,t.pointsTotal=(t.pointsTotal||0)+l,s==="cash"?t.cashSales=(t.cashSales||0)+a:s==="qris"?t.qrisSales=(t.qrisSales||0)+a:s==="bank"?t.bankSales=(t.bankSales||0)+a:s==="tempo"&&(r>0&&(t.cashSales=(t.cashSales||0)+r),t.tempoSales=(t.tempoSales||0)+o),Array.isArray(t.orders)||(t.orders=[]),(e.txId||e.id)&&t.orders.push(e.txId||e.id),$e(t);try{const c={txCount:t.txCount,itemCount:t.itemCount,totalSales:t.totalSales,cashSales:t.cashSales,qrisSales:t.qrisSales,bankSales:t.bankSales,tempoSales:t.tempoSales,discountTotal:t.discountTotal,pointsTotal:t.pointsTotal,orders:t.orders,lastUpdatedISO:new Date().toISOString()};B.collection("freshmart").doc("cms_data").collection("pos_shifts").doc(t.id).update(c).catch(()=>{}),B.collection("pos_shifts").doc(t.id).update(c).catch(()=>{})}catch{}typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge()}catch(t){console.warn("[POS Shift] Gagal update transaksi ke shift:",t)}},er=(e,t,a="")=>{try{const s=ee();if(!s||s.status!=="open")return!1;const r=parseFloat(e)||0;if(r<=0)return!1;s.cashSales=(s.cashSales||0)+r,s.tempoInstallmentCash=(s.tempoInstallmentCash||0)+r,Array.isArray(s.tempoPayments)||(s.tempoPayments=[]),s.tempoPayments.push({orderId:t,amount:r,timestamp:Date.now(),note:a||`Cicilan Piutang #${t}`}),$e(s);try{const o={cashSales:s.cashSales,tempoInstallmentCash:s.tempoInstallmentCash,tempoPayments:s.tempoPayments,lastUpdatedISO:new Date().toISOString()};B.collection("freshmart").doc("cms_data").collection("pos_shifts").doc(s.id).update(o).catch(()=>{}),B.collection("pos_shifts").doc(s.id).update(o).catch(()=>{})}catch{}return typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge(),!0}catch(s){return console.warn("[POS Shift] Gagal rekam pembayaran cicilan ke shift:",s),!1}},pe=()=>{const e=ee();if(!e){ne();return}document.getElementById("pos-shift-summary-modal")?.remove();const t=(parseFloat(e.startingCash)||0)+(parseFloat(e.cashSales)||0),a=Xt(e.startTime),s=new Date(e.startTime).toLocaleString("id-ID",{dateStyle:"medium",timeStyle:"short"}),r=`
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
                        <span class="text-[10px] text-slate-500 mt-0.5 block">${e.txCount||0} Struk / ${ts(e.itemCount||0)} Item</span>
                    </div>
                </div>

                <!-- Kartu Utama: Kas di Laci Saat Ini (Expected Cash) -->
                <div class="p-4 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent border-2 border-emerald-500/30 flex items-center justify-between">
                    <div>
                        <span class="text-[11px] font-bold text-emerald-700 dark:text-emerald-300 uppercase tracking-wider block">Uang Kas di Laci Seharusnya</span>
                        <span class="text-[10px] text-slate-500 dark:text-slate-400">Modal Awal (${M(e.startingCash)}) + Penjualan Tunai (${M(e.cashSales||0)})</span>
                    </div>
                    <div class="text-right">
                        <span class="text-xl font-black text-emerald-600 dark:text-emerald-400 block">${M(t)}</span>
                    </div>
                </div>

                <!-- Rincian Omset Penjualan -->
                <div class="space-y-2">
                    <div class="flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-200 border-b border-slate-100 dark:border-slate-800 pb-1.5">
                        <span class="flex items-center gap-1.5"><i class="fa-solid fa-receipt text-slate-400"></i>Rincian Metode Pembayaran</span>
                        <span class="text-slate-500 text-[11px]">Total Omset: <b style="color:var(--color-primary)">${M(e.totalSales||0)}</b></span>
                    </div>

                    <div class="space-y-1.5 text-xs">
                        <div class="flex justify-between items-center p-2 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                            <span class="text-slate-600 dark:text-slate-300 flex items-center gap-2">
                                <span class="w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center text-[10px]"><i class="fa-solid fa-money-bill-wave"></i></span>
                                <span>Tunai (Cash)</span>
                            </span>
                            <span class="font-bold text-slate-800 dark:text-white">${M(e.cashSales||0)}</span>
                        </div>
                        ${(e.tempoInstallmentCash||0)>0?`
                        <div class="flex justify-between items-center p-2 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40 text-[11px]">
                            <span class="text-amber-700 dark:text-amber-300 flex items-center gap-2">
                                <span class="w-6 h-6 rounded-lg bg-amber-100 dark:bg-amber-900/60 text-amber-600 flex items-center justify-center text-[10px]"><i class="fa-solid fa-hand-holding-dollar"></i></span>
                                <span>Dari Cicilan Piutang (Kas Masuk)</span>
                            </span>
                            <span class="font-bold text-amber-700 dark:text-amber-300">+${M(e.tempoInstallmentCash)}</span>
                        </div>`:""}
                        <div class="flex justify-between items-center p-2 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                            <span class="text-slate-600 dark:text-slate-300 flex items-center gap-2">
                                <span class="w-6 h-6 rounded-lg bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 flex items-center justify-center text-[10px]"><i class="fa-solid fa-qrcode"></i></span>
                                <span>QRIS Dinamis</span>
                            </span>
                            <span class="font-bold text-slate-800 dark:text-white">${M(e.qrisSales||0)}</span>
                        </div>
                        <div class="flex justify-between items-center p-2 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                            <span class="text-slate-600 dark:text-slate-300 flex items-center gap-2">
                                <span class="w-6 h-6 rounded-lg bg-blue-100 dark:bg-blue-950/60 text-blue-600 flex items-center justify-center text-[10px]"><i class="fa-solid fa-building-columns"></i></span>
                                <span>Transfer Bank</span>
                            </span>
                            <span class="font-bold text-slate-800 dark:text-white">${M(e.bankSales||0)}</span>
                        </div>
                        <div class="flex justify-between items-center p-2 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                            <span class="text-slate-600 dark:text-slate-300 flex items-center gap-2">
                                <span class="w-6 h-6 rounded-lg bg-amber-100 dark:bg-amber-950/60 text-amber-600 flex items-center justify-center text-[10px]"><i class="fa-solid fa-clock-rotate-left"></i></span>
                                <span>Tempo / Piutang (Sisa)</span>
                            </span>
                            <span class="font-bold text-slate-800 dark:text-white">${M(e.tempoSales||0)}</span>
                        </div>
                    </div>
                </div>

                <!-- Diskon & Poin -->
                <div class="grid grid-cols-2 gap-2 text-xs">
                    <div class="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/20 border border-rose-200/60 dark:border-rose-800/40">
                        <span class="text-[10px] text-rose-500 block font-bold">Total Diskon Diberikan</span>
                        <span class="font-black text-rose-600 dark:text-rose-400 text-xs">${M(e.discountTotal||0)}</span>
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
    </div>`;document.body.insertAdjacentHTML("beforeend",r);const o=p("pos-shift-summary-modal"),i=p("pos-shift-summary-box");!o||!i||(o.classList.remove("pointer-events-none"),requestAnimationFrame(()=>{o.classList.remove("opacity-0"),i.classList.remove("translate-y-8","scale-95")}))},dt=()=>{const e=p("pos-shift-summary-modal"),t=p("pos-shift-summary-box");e&&(e.classList.add("opacity-0","pointer-events-none"),t&&t.classList.add("translate-y-8","scale-95"),setTimeout(()=>{e.remove()},280))},ea=()=>{const e=ee();if(!e){w("Tidak ada shift kasir yang aktif saat ini.","warning");return}document.getElementById("pos-close-shift-modal")?.remove();const t=(parseFloat(e.startingCash)||0)+(parseFloat(e.cashSales)||0),a=`
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
                            Modal Awal: <b>${M(e.startingCash)}</b> + Kas Masuk: <b>${M(e.cashSales||0)}</b>${(e.tempoInstallmentCash||0)>0?` <span class="text-amber-600 dark:text-amber-400 font-semibold">(incl. Cicilan +${M(e.tempoInstallmentCash)})</span>`:""}
                        </div>
                    </div>
                    <div class="text-right">
                        <span id="pos-close-expected-cash" class="text-lg font-black text-slate-900 dark:text-white">${M(t)}</span>
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
    </div>`;document.body.insertAdjacentHTML("beforeend",a);const s=p("pos-close-shift-modal"),r=p("pos-close-shift-box");!s||!r||(s.classList.remove("pointer-events-none"),requestAnimationFrame(()=>{s.classList.remove("opacity-0"),r.classList.remove("translate-y-8","scale-95")}),setTimeout(()=>{const o=p("pos-shift-actual-cash-input");o&&(o.focus(),o.select())},250))},Je=()=>{const e=p("pos-close-shift-modal"),t=p("pos-close-shift-box");e&&(e.classList.add("opacity-0","pointer-events-none"),t&&t.classList.add("translate-y-8","scale-95"),setTimeout(()=>{e.remove()},280))},tr=e=>{const t=p("pos-count-tab-quick"),a=p("pos-count-tab-denom"),s=p("pos-count-panel-quick"),r=p("pos-count-panel-denom");e==="quick"?(t&&(t.className="px-2.5 py-1 rounded-lg font-black bg-white dark:bg-slate-700 text-[var(--color-primary)] dark:text-white shadow-xs transition-all cursor-pointer border border-[rgba(var(--color-primary-rgb),0.2)] dark:border-slate-600"),a&&(a.className="px-2.5 py-1 rounded-lg font-bold text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-all cursor-pointer border border-transparent"),s&&s.classList.remove("hidden"),r&&r.classList.add("hidden")):(t&&(t.className="px-2.5 py-1 rounded-lg font-bold text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-all cursor-pointer border border-transparent"),a&&(a.className="px-2.5 py-1 rounded-lg font-black bg-white dark:bg-slate-700 text-[var(--color-primary)] dark:text-white shadow-xs transition-all cursor-pointer border border-[rgba(var(--color-primary-rgb),0.2)] dark:border-slate-600"),s&&s.classList.add("hidden"),r&&r.classList.remove("hidden"),ns())},ns=()=>{const e=(parseFloat(p("denom-100k")?.value)||0)*1e5,t=(parseFloat(p("denom-50k")?.value)||0)*5e4,a=(parseFloat(p("denom-20k")?.value)||0)*2e4,s=(parseFloat(p("denom-10k")?.value)||0)*1e4,r=(parseFloat(p("denom-5k")?.value)||0)*5e3,o=(parseFloat(p("denom-2k")?.value)||0)*2e3,i=(parseFloat(p("denom-1k")?.value)||0)*1e3,l=parseFloat(p("denom-coin")?.value)||0,d=e+t+a+s+r+o+i+l,c=p("pos-shift-actual-cash-input");c&&(c.value=d),is()},is=()=>{const e=ee();if(!e)return;const t=(parseFloat(e.startingCash)||0)+(parseFloat(e.cashSales)||0),s=(parseFloat(p("pos-shift-actual-cash-input")?.value)||0)-t,r=p("pos-discrepancy-card"),o=p("pos-discrepancy-icon"),i=p("pos-discrepancy-status"),l=p("pos-discrepancy-desc"),d=p("pos-discrepancy-amount");!r||!o||!i||!l||!d||(s===0?(r.className="p-4 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between bg-emerald-50 dark:bg-emerald-950/20 border-emerald-500/40",o.className="w-10 h-10 rounded-2xl flex items-center justify-center text-white text-base shadow-sm shrink-0 bg-emerald-600",o.innerHTML='<i class="fa-solid fa-check"></i>',i.className="text-xs font-black uppercase tracking-wider text-emerald-800 dark:text-emerald-300 block",i.innerText="SEIMBANG (PAS)",l.className="text-[11px] text-emerald-700 dark:text-emerald-400 block",l.innerText="Uang fisik laci kasir cocok dengan transaksi sistem",d.className="text-base font-black text-emerald-600 dark:text-emerald-400",d.innerText="Rp 0"):s>0?(r.className="p-4 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between bg-amber-50 dark:bg-amber-950/20 border-amber-500/40",o.className="w-10 h-10 rounded-2xl flex items-center justify-center text-white text-base shadow-sm shrink-0 bg-amber-500",o.innerHTML='<i class="fa-solid fa-plus"></i>',i.className="text-xs font-black uppercase tracking-wider text-amber-800 dark:text-amber-300 block",i.innerText="LEBIH (SURPLUS)",l.className="text-[11px] text-amber-700 dark:text-amber-400 block",l.innerText="Terdapat kelebihan uang fisik di laci kasir",d.className="text-base font-black text-amber-600 dark:text-amber-400",d.innerText="+ "+M(s)):(r.className="p-4 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between bg-rose-50 dark:bg-rose-950/20 border-rose-500/40",o.className="w-10 h-10 rounded-2xl flex items-center justify-center text-white text-base shadow-sm shrink-0 bg-rose-600",o.innerHTML='<i class="fa-solid fa-minus"></i>',i.className="text-xs font-black uppercase tracking-wider text-rose-800 dark:text-rose-300 block",i.innerText="KURANG (DEFISIT)",l.className="text-[11px] text-rose-700 dark:text-rose-400 block",l.innerText="Terdapat kekurangan uang fisik di laci kasir",d.className="text-base font-black text-rose-600 dark:text-rose-400",d.innerText="- "+M(Math.abs(s))))},ar=async()=>{const e=ee();if(!e)return;const t=(parseFloat(e.startingCash)||0)+(parseFloat(e.cashSales)||0),a=parseFloat(p("pos-shift-actual-cash-input")?.value)||0,s=a-t,r=p("pos-shift-close-notes")?.value?.trim()||"",o={d100k:parseFloat(p("denom-100k")?.value)||0,d50k:parseFloat(p("denom-50k")?.value)||0,d20k:parseFloat(p("denom-20k")?.value)||0,d10k:parseFloat(p("denom-10k")?.value)||0,d5k:parseFloat(p("denom-5k")?.value)||0,d2k:parseFloat(p("denom-2k")?.value)||0,d1k:parseFloat(p("denom-1k")?.value)||0,coin:parseFloat(p("denom-coin")?.value)||0},i=Date.now(),l=Xt(e.startTime,i),d={...e,status:"closed",endTime:i,endTimeISO:new Date(i).toISOString(),duration:l,expectedCash:t,actualCash:a,difference:s,discrepancyStatus:s===0?"balanced":s>0?"surplus":"deficit",denominations:o,closingNotes:r};$t();try{await Promise.all([B.collection("freshmart").doc("cms_data").collection("pos_shifts").doc(d.id).set(d,{merge:!0}),B.collection("pos_shifts").doc(d.id).set(d,{merge:!0})])}catch(c){console.warn("[POS Shift] Simpan Firestore:",c)}rt(),Zt(d),Je(),ss("close"),sr(d),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge()},sr=e=>{document.getElementById("pos-closed-success-modal")?.remove();const t=e.difference||0,a=t===0?'<span class="px-2.5 py-1 rounded-xl text-xs font-black bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">PAS (Rp 0)</span>':t>0?`<span class="px-2.5 py-1 rounded-xl text-xs font-black bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300">LEBIH (+${M(t)})</span>`:`<span class="px-2.5 py-1 rounded-xl text-xs font-black bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300">KURANG (-${M(Math.abs(t))})</span>`,s=`
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
                <div class="flex justify-between border-t border-slate-200/60 dark:border-slate-700/60 pt-1.5"><span>Total Omset:</span><span class="font-bold">${M(e.totalSales||0)}</span></div>
                <div class="flex justify-between"><span>Kas Fisik Laci:</span><span class="font-black text-slate-900 dark:text-white">${M(e.actualCash||0)}</span></div>
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
    </div>`;document.body.insertAdjacentHTML("beforeend",s)},ta=(e,t=!1,a=!1)=>{if(!e){w("Data shift tidak ditemukan.","warning");return}window._lastShiftData={shift:e,isXReport:t};const s=typeof Ue=="function"?Ue():{paperSize:"58mm"};if(typeof window.printShiftSettlementDirect=="function"){window.printShiftSettlementDirect(e,t);return}const r=typeof window.getPaperCols=="function"?window.getPaperCols(s.paperSize):s.paperSize==="80mm"?48:32,o=r>=40,i=s.headerText||m.store?.name||"TOKO PUTRI",l=m.store?.address||"",d=m.store?.wa||"",c=s.footerText||"Laporan Kasir Resmi Toko Putri",n=o?t?"*** RINGKASAN SHIFT (X-REPORT) ***":"*** REKAP TUTUP SHIFT (Z-REPORT) ***":t?"** RINGKASAN SHIFT (X) **":"** REKAP TUTUP SHIFT (Z) **",f=typeof window.formatCompactDate=="function"?window.formatCompactDate(e.startTime,o):new Date(e.startTime).toLocaleString("id-ID"),k=typeof window.formatCompactDate=="function"?window.formatCompactDate(e.endTime||Date.now(),o):new Date(e.endTime||Date.now()).toLocaleString("id-ID"),g=e.duration||Xt(e.startTime,e.endTime||Date.now()),O=(parseFloat(e.startingCash)||0)+(parseFloat(e.cashSales)||0),v=e.actualCash!==void 0?parseFloat(e.actualCash):O,y=v-O,S=y===0?"SEIMBANG (PAS)":y>0?`LEBIH (+${M(y)})`:`KURANG (-${M(Math.abs(y))})`;document.getElementById("pos-shift-receipt-modal")?.remove(),document.body.insertAdjacentHTML("beforeend",`
    <div id="pos-shift-receipt-modal" class="fixed inset-0 z-[10003] flex items-center justify-center p-3 sm:p-4" style="background:rgba(15,23,42,0.75)">
        <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full ${o?"max-w-[420px]":"max-w-[340px]"} border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[90vh]">
            <div class="p-3.5 sm:p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50">
                <span class="font-bold text-xs text-slate-700 dark:text-slate-200 flex items-center gap-1.5"><i class="fa-solid fa-receipt text-emerald-500"></i>Preview Slip Rekap Shift (${r} Kolom)</span>
                <button onclick="document.getElementById('pos-shift-receipt-modal')?.remove()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-700 dark:hover:text-slate-200 transition-colors flex items-center justify-center cursor-pointer"><i class="fa-solid fa-xmark text-sm"></i></button>
            </div>
            <div id="pos-shift-receipt-paper-box" class="p-4 overflow-y-auto flex-1 font-mono text-[11px] bg-slate-50/60 dark:bg-slate-950 text-slate-800 dark:text-slate-200 space-y-1.5 select-text custom-scrollbar">
                <div class="text-center font-bold text-sm uppercase">${b(i)}</div>
                ${l?`<div class="text-center text-[10px] text-slate-500">${b(l)}</div>`:""}
                ${d?`<div class="text-center text-[10px] text-slate-500">WA: ${b(d)}</div>`:""}
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <div class="text-center font-black text-xs uppercase">${b(n)}</div>
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <div class="flex justify-between"><span>No Shift: <b>#${b(e.shiftNo||e.id)}</b></span><span>${b(f)}</span></div>
                <div class="flex justify-between"><span>Kasir   : ${b(e.cashierName)}</span><span>Durasi: ${b(g)}</span></div>
                <div class="flex justify-between"><span>Selesai : ${b(k)}</span></div>
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <div class="font-bold">RINGKASAN PENJUALAN:</div>
                <div class="flex justify-between"><span>Total Struk</span><span>${e.txCount||0} Trx</span></div>
                <div class="flex justify-between"><span>Total Barang</span><span>${ts(e.itemCount||0)} Item</span></div>
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-1"></div>
                <div class="flex justify-between"><span>Tunai (Cash)</span><span>${M(e.cashSales||0)}</span></div>
                <div class="flex justify-between"><span>QRIS</span><span>${M(e.qrisSales||0)}</span></div>
                <div class="flex justify-between"><span>Transfer Bank</span><span>${M(e.bankSales||e.transferSales||0)}</span></div>
                <div class="flex justify-between"><span>Tempo (Piutang)</span><span>${M(e.tempoSales||0)}</span></div>
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-1"></div>
                <div class="flex justify-between font-black text-xs pt-0.5"><span>TOTAL OMSET</span><span style="color:var(--color-primary)">${M(e.totalSales||0)}</span></div>
                ${(e.discountTotal||0)>0?`<div class="flex justify-between text-rose-500"><span>Diskon Toko</span><span>-${M(e.discountTotal)}</span></div>`:""}
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <div class="font-bold">REKONSILIASI KAS LACI:</div>
                <div class="flex justify-between"><span>Modal Awal</span><span>${M(e.startingCash)}</span></div>
                <div class="flex justify-between"><span>Penjualan Tunai</span><span>${M((e.cashSales||0)-(e.tempoInstallmentCash||0))}</span></div>
                ${(e.tempoInstallmentCash||0)>0?`
                <div class="flex justify-between text-amber-600"><span>+ Cicilan Piutang</span><span>+${M(e.tempoInstallmentCash)}</span></div>`:""}
                <div class="flex justify-between font-bold"><span>Kas Sistem</span><span>${M(O)}</span></div>
                ${t?"":`
                <div class="flex justify-between font-bold"><span>Kas Fisik Dihitung</span><span>${M(v)}</span></div>
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-1"></div>
                <div class="flex justify-between font-black text-xs ${y===0?"text-emerald-600":y>0?"text-amber-600":"text-rose-600"}">
                    <span>SELISIH KAS</span>
                    <span>${S}</span>
                </div>`}
                ${e.closingNotes?`
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-1.5"></div>
                <div class="text-[10px]"><b>Catatan:</b> ${b(e.closingNotes)}</div>`:""}
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <div class="text-center text-[10px] text-slate-400 my-1">${b(c)}</div>
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
    </div>`)},aa=()=>{if(window._lastShiftData&&typeof window.printShiftSettlementDirect=="function"){window.printShiftSettlementDirect(window._lastShiftData.shift,window._lastShiftData.isXReport);return}const e=p("pos-shift-receipt-paper-box");e&&(typeof window.renderThermalDOMAndPrint=="function"?window.renderThermalDOMAndPrint(e.innerHTML):window.print())},ct=()=>{const e=[p("pos-shift-btn-storefront"),p("pos-shift-btn-admin")],t=ee();e.forEach(a=>{a&&(t&&t.status==="open"?a.id==="pos-shift-btn-storefront"?a.innerHTML=`
                <button onclick="window.openPOSShiftSummaryModal()" class="h-8 px-2 sm:px-2.5 rounded-xl bg-black/15 hover:bg-black/25 text-white border border-white/20 transition-all cursor-pointer shadow-xs active:scale-95 inline-flex items-center gap-1 sm:gap-1.5 whitespace-nowrap shrink-0" title="Klik untuk lihat ringkasan shift (X-Report)">
                    <i class="fa-solid fa-cash-register text-emerald-300 text-xs"></i>
                    <span class="hidden sm:inline text-xs font-medium">Shift: </span>
                    <b class="text-white text-xs whitespace-nowrap">${M(t.startingCash)}</b>
                </button>`:a.innerHTML=`
                <button onclick="window.openPOSShiftSummaryModal()" class="h-8 px-2.5 sm:px-3 rounded-xl text-xs font-bold bg-[rgba(var(--color-primary-rgb),0.1)] hover:bg-[rgba(var(--color-primary-rgb),0.18)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.25)] inline-flex items-center gap-1.5 transition-all cursor-pointer active:scale-95 whitespace-nowrap shrink-0 shadow-2xs" title="Klik untuk lihat ringkasan shift (X-Report)">
                    <i class="fa-solid fa-cash-register text-xs"></i>
                    <span class="hidden sm:inline font-medium">Shift: </span>
                    <b class="font-black whitespace-nowrap">${M(t.startingCash)}</b>
                </button>`:a.id==="pos-shift-btn-storefront"?a.innerHTML=`
                <button onclick="window.openPOSOpenShiftModal()" class="h-8 px-2.5 sm:px-3 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs inline-flex items-center gap-1.5 transition-all active:scale-95 shadow-xs cursor-pointer border border-white/25 whitespace-nowrap shrink-0" title="Buka shift kasir baru">
                    <span class="w-1.5 h-1.5 rounded-full bg-amber-300 animate-pulse"></span>
                    <i class="fa-solid fa-wallet text-amber-300 text-xs"></i>
                    <span class="text-xs font-black whitespace-nowrap">Buka Shift</span>
                </button>`:a.innerHTML=`
                <button onclick="window.openPOSOpenShiftModal()" class="h-8 px-2.5 sm:px-3 rounded-xl text-xs font-bold bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/40 dark:hover:bg-amber-900/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 inline-flex items-center gap-1.5 transition-all cursor-pointer active:scale-95 animate-pulse whitespace-nowrap shrink-0 shadow-2xs" title="Buka shift kasir baru">
                    <i class="fa-solid fa-wallet text-xs"></i>
                    <span class="whitespace-nowrap">Buka Shift</span>
                </button>`)})},rr=async e=>{const t=typeof e=="string"?p(e):e;t&&(t.innerHTML=`
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
    </div>`,await sa())},sa=async()=>{const e=p("admin-shift-list-target"),t=p("admin-shift-metrics-target");if(e)try{const a=await B.collection("freshmart").doc("cms_data").collection("pos_shifts").orderBy("startTime","desc").limit(50).get();if(a.empty){t&&(t.innerHTML=""),e.innerHTML=`
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
                    <p class="text-base sm:text-lg font-black font-mono tracking-tight" style="color:var(--color-primary)">${M(i)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">Gross Sales Shift</p>
                </div>

                <div class="p-3.5 sm:p-4 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-1.5">
                        <span class="text-[9px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Total Kas Laci</span>
                        <div class="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 flex items-center justify-center text-xs shadow-2xs border border-slate-200 dark:border-slate-600/60">
                            <i class="fa-solid fa-vault"></i>
                        </div>
                    </div>
                    <p class="text-base sm:text-lg font-black font-mono text-slate-900 dark:text-white tracking-tight">${M(l)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">Uang Kas Fisik Terdata</p>
                </div>
            </div>`);const d=s.map(c=>{const n=c.status==="closed",f=c.difference||0,k=n?f===0?'<span class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-black bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 shadow-2xs shrink-0"><i class="fa-solid fa-check text-[10px]"></i> PAS</span>':f>0?`<span class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-black bg-amber-100 dark:bg-amber-950/70 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-800 shadow-2xs shrink-0"><i class="fa-solid fa-arrow-trend-up text-[10px]"></i> LEBIH +${M(f)}</span>`:`<span class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-black bg-rose-100 dark:bg-rose-950/70 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-800 shadow-2xs shrink-0"><i class="fa-solid fa-arrow-trend-down text-[10px]"></i> KURANG -${M(Math.abs(f))}</span>`:'<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 shadow-2xs tracking-wide shrink-0"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>SEDANG BERJALAN</span>',g=c.startTime?new Date(c.startTime).toLocaleString("id-ID",{dateStyle:"medium",timeStyle:"short"}):"-",O=c.endTime?new Date(c.endTime).toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit"})+" WIB":"",v=JSON.stringify(c).replace(/"/g,"&quot;"),y=c.actualCash!==void 0?c.actualCash:(c.startingCash||0)+(c.cashSales||0);return`
            <div class="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-800/95 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:shadow-xs transition-all space-y-3.5">
                <div class="flex items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-700/60 pb-3 flex-wrap sm:flex-nowrap">
                    <div class="flex items-center gap-3 min-w-0">
                        <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-sm text-white shrink-0 shadow-2xs ${n?"bg-slate-800 dark:bg-slate-700":""}" style="${n?"":"background: var(--color-primary); box-shadow: 0 4px 12px rgba(var(--color-primary-rgb), 0.35);"}">
                            <i class="fa-solid ${n?"fa-receipt":"fa-cash-register"}"></i>
                        </div>
                        <div class="min-w-0">
                            <div class="flex items-center gap-2">
                                <span class="font-mono font-black text-xs sm:text-sm text-slate-900 dark:text-white whitespace-nowrap block truncate">#${b(c.shiftNo||c.id)}</span>
                            </div>
                            <span class="text-[11px] text-slate-400 dark:text-slate-500 whitespace-nowrap block truncate mt-0.5">
                                <i class="fa-solid fa-clock text-[10px] mr-1"></i>${g} ${O?"— "+O:"• Aktif"}
                            </span>
                        </div>
                    </div>
                    <div class="flex items-center gap-2 shrink-0">
                        ${k}
                        <button onclick="window.printShiftSettlementReceipt(${v}, ${!n})" class="h-9 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-700/80 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shrink-0 shadow-2xs active:scale-95 border border-slate-200/80 dark:border-slate-600/60 hover:text-[var(--color-primary)]" title="Preview & Cetak Slip Rekap Shift">
                            <i class="fa-solid fa-print text-xs"></i>
                            <span class="hidden sm:inline">Slip Z-Report</span>
                        </button>
                        <button onclick="window.deleteShiftRecord('${c.id}', '${b(c.shiftNo||c.id)}')" class="w-9 h-9 rounded-xl bg-slate-50 hover:bg-rose-50 dark:bg-slate-700/80 dark:hover:bg-rose-950/40 text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 text-xs flex items-center justify-center transition-all cursor-pointer shrink-0 shadow-2xs active:scale-95 border border-slate-200/80 dark:border-slate-600/60 hover:border-rose-200" title="Hapus Data Shift">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                </div>

                <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                    <div class="p-3 rounded-2xl bg-slate-50/90 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/80">
                        <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                            <i class="fa-solid fa-user-tie text-[10px]"></i> Kasir
                        </span>
                        <span class="font-black text-sm text-slate-800 dark:text-slate-100 truncate block mt-1">${b(c.cashierName||"Kasir")}</span>
                        <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500 block mt-0.5">${c.txCount||0} Trx • ${c.itemCount||0} Item</span>
                    </div>
                    <div class="p-3 rounded-2xl bg-slate-50/90 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/80">
                        <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                            <i class="fa-solid fa-hand-holding-dollar text-[10px]"></i> Modal Awal
                        </span>
                        <span class="font-black text-sm text-slate-800 dark:text-slate-100 font-mono block mt-1">${M(c.startingCash||0)}</span>
                        <span class="text-[10px] text-slate-400 block mt-0.5">Uang Kas Buka Shift</span>
                    </div>
                    <div class="p-3 rounded-2xl bg-slate-50/90 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/80">
                        <span class="text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5" style="color:var(--color-primary)">
                            <i class="fa-solid fa-chart-line text-[10px]"></i> Total Omset
                        </span>
                        <span class="font-black text-sm sm:text-base font-mono block mt-1" style="color:var(--color-primary)">${M(c.totalSales||0)}</span>
                        <span class="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 block mt-0.5">Gross Sales Shift</span>
                    </div>
                    <div class="p-3 rounded-2xl bg-slate-50/90 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/80">
                        <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                            <i class="fa-solid fa-vault text-[10px]"></i> Kas Fisik Laci
                        </span>
                        <span class="font-black text-sm sm:text-base font-mono text-slate-900 dark:text-white block mt-1">${M(y)}</span>
                        <span class="text-[10px] font-bold block mt-0.5 ${f===0?"text-emerald-600 dark:text-emerald-400":f>0?"text-amber-600":"text-rose-600"}">
                            ${n?f===0?"Kas Pas & Sesuai":f>0?"Surplus +"+M(f):"Defisit -"+M(Math.abs(f)):"Kas Saat Ini"}
                        </span>
                    </div>
                </div>

                ${c.cashSales>0||c.qrisSales>0||c.bankSales>0||c.tempoSales>0?`
                <div class="flex items-center gap-2 overflow-x-auto pb-1 hide-scrollbar text-[11px] pt-1">
                    <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-0.5">Rincian Bayar:</span>
                    ${c.cashSales?`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 font-bold shrink-0"><i class="fa-solid fa-money-bill-wave text-emerald-500"></i> Tunai: ${M(c.cashSales)}</span>`:""}
                    ${c.qrisSales?`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 font-bold shrink-0"><i class="fa-solid fa-qrcode text-indigo-500"></i> QRIS: ${M(c.qrisSales)}</span>`:""}
                    ${c.bankSales?`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 font-bold shrink-0"><i class="fa-solid fa-building-columns text-blue-500"></i> Transfer: ${M(c.bankSales)}</span>`:""}
                    ${c.tempoSales?`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 font-bold shrink-0 border border-amber-200/60"><i class="fa-solid fa-clock text-amber-500"></i> Tempo: ${M(c.tempoSales)}</span>`:""}
                </div>`:""}

                ${c.closingNotes?`
                <div class="text-xs text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/60 p-3 rounded-2xl border border-slate-200/80 dark:border-slate-800 flex items-start gap-2.5">
                    <i class="fa-solid fa-comment-dots text-slate-400 mt-0.5 shrink-0"></i>
                    <div class="min-w-0">
                        <span class="font-bold text-slate-800 dark:text-slate-200">Catatan Kasir:</span> ${b(c.closingNotes)}
                    </div>
                </div>`:""}
            </div>`}).join("");e.innerHTML=d}catch(a){console.error("[POS Shift] Gagal memuat daftar shift admin:",a),e.innerHTML=`
        <div class="text-center py-10 text-rose-500 text-xs">
            <i class="fa-solid fa-triangle-exclamation text-2xl mb-1"></i>
            <p>Gagal memuat laporan shift: ${b(a.message)}</p>
        </div>`}},or=(e,t)=>{Ns("Hapus Data Shift",`Hapus shift #${t}? Data akan dihapus permanen dari cloud dan tidak bisa dikembalikan.`,async()=>{try{await B.collection("freshmart").doc("cms_data").collection("pos_shifts").doc(e).delete(),w("Data shift berhasil dihapus.","success"),await sa()}catch(a){console.error("[POS Shift] Gagal menghapus shift:",a),w("Gagal menghapus: "+a.message,"error")}},"Ya, Hapus")};window.getActiveShift=ee;window.saveActiveShift=$e;window.clearActiveShift=rt;window.getLastClosedShift=Js;window.isShiftActive=Le;window.getCurrentCashierIdentity=We;window.isShiftOwnedByCashier=Ge;window.findActiveShiftInCloud=At;window.syncActiveShiftFromCloud=Ce;window.listenActiveShiftCloud=Ie;window.detachActiveShiftListener=$t;window.openPOSOpenShiftModal=ne;window.closePOSOpenShiftModal=Re;window.posSetStartCashPreset=Zs;window.posUpdateStartCashChips=rs;window.confirmStartPOSShift=Xs;window.recordTransactionToShift=os;window.recordTempoPaymentToShift=er;window.openPOSShiftModal=pe;window.openPOSShiftSummaryModal=pe;window.closePOSShiftSummaryModal=dt;window.openPOSCloseShiftModal=ea;window.closePOSCloseShiftModal=Je;window.setPOSCountMode=tr;window.calcPOSDenominations=ns;window.updatePOSShiftDiscrepancy=is;window.confirmClosePOSShift=ar;window.printShiftSettlementReceipt=ta;window.executeShiftPrintDirect=aa;window.renderShiftHeaderBadge=ct;window.renderAdminShiftReportView=rr;window.loadAdminShiftReports=sa;window.deleteShiftRecord=or;let Ba=!1;const ls=()=>Ba?Promise.resolve():Ks(()=>import("./pos-variant-sheet-aEEyZM-t.js"),__vite__mapDeps([0,1,2,3])).then(()=>{Ba=!0});let $=[],ue="",be="",Te="",Pe="grid",Qe=1;const nr=48;let kt=null;const ds="freshmart_pos_offline_tx_queue";try{const e=localStorage.getItem("pos_view_mode");(e==="list"||e==="grid")&&(Pe=e)}catch{}let x={name:"",phone:"",isMember:!1,memberId:null,isNewTempo:!1,paylaterActive:!1,paylaterLimit:0,paylaterUsed:0,paylaterDueDay:5},He="30d",te=0,N=null,V="cash",de=0,ce=0,Y="rp",z=0;const St=new Set,cs=e=>{const t=String(e);St.has(t)?St.delete(t):St.add(t),Q()};let me="",Ra=null,qe=null,Be=null,vt=null,Ve=null,Pt=!0,Qt="environment",tt=!1,Oe=null,Na="",Ea=0;const ra=e=>{Pe=e;try{localStorage.setItem("pos_view_mode",e)}catch{}document.querySelectorAll("#pos-view-btn-grid").forEach(t=>{e==="grid"?(t.style.background="linear-gradient(135deg, var(--color-primary-light, #e1b858) 0%, var(--color-primary, #c59b27) 60%, var(--color-primary-dark, #a87f1b) 100%)",t.className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-white shadow-xs"):(t.style.removeProperty("background"),t.className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-slate-500 hover:text-slate-800 dark:text-slate-400")}),document.querySelectorAll("#pos-view-btn-list").forEach(t=>{e==="list"?(t.style.background="linear-gradient(135deg, var(--color-primary-light, #e1b858) 0%, var(--color-primary, #c59b27) 60%, var(--color-primary-dark, #a87f1b) 100%)",t.className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-white shadow-xs"):(t.style.removeProperty("background"),t.className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-slate-500 hover:text-slate-800 dark:text-slate-400")}),Z()},Me=e=>Math.max(0,parseInt(e)||0),ot=e=>{if(e==null)return 0;typeof e=="string"&&(e=e.replace(",",".").trim());const t=parseFloat(e);return isNaN(t)?0:Math.max(0,parseFloat(t.toFixed(3)))},U=e=>{const t=parseFloat(e)||0;return parseFloat(t.toFixed(3)).toString()},h=e=>Vs(e),pt=()=>parseFloat(m.store?.pointValue)||1e3,De=()=>Math.max(0,(parseFloat(te)||0)*pt()),Ot=()=>{if(!x.isMember||!x.points)return 0;const e=Math.max(0,parseFloat(x.points)||0),t=N&&parseFloat(N.pointsCost)||0,a=Math.max(0,e-t),s=pt();if(s<=0)return 0;const r=Math.max(0,ie()-le()),o=we(),i=Math.max(0,r-o),l=Math.floor(i/s);return Math.min(a,l)},ie=()=>$.reduce((e,t)=>e+t.subtotal,0),we=()=>$.reduce((e,t)=>{const a=t.hpp!=null?parseFloat(t.hpp):ze(t)||0;return e+(parseFloat(a)||0)*(parseFloat(t.qty)||0)},0),le=()=>{const e=ie();let t=0;if(Y==="percent"){const s=Math.min(100,Math.max(0,parseFloat(z)||0));t=Math.round(e*s/100)}else t=Math.min(e,Me(z||ce));const a=we();if(a>0){const s=Math.max(0,e-a);t>s&&(t=s)}return t},re=()=>{const e=ie(),t=le(),a=De(),s=Math.max(0,e-t-a);if(typeof window.calcTaxDetails=="function")return window.calcTaxDetails(s);const r=m.store?.ppnEnabled===!0||m.store?.ppnEnabled==="true",o=m.store?.ppnType||"exclusive",i=m.store?.ppnRate!==void 0&&!isNaN(parseFloat(m.store?.ppnRate))?parseFloat(m.store?.ppnRate):11;return{ppnEnabled:r,ppnRate:i,ppnType:o,ppnAmount:0,dppAmount:s,grandTotalAdd:0,ppnShowZero:m.store?.ppnShowZero!==!1,ppnLabel:m.store?.ppnTaxLabel||""}},j=()=>{const e=ie(),t=le(),a=De(),s=Math.max(0,e-t-a),r=re();let o=s+(r.ppnType==="exclusive"&&r.grandTotalAdd||0);const i=we();return i>0&&o<i&&(o=i),o},ps=()=>de-j(),Ye=e=>za(e),us=e=>e?String(e).replace(/\s*hari\s*kerja/gi,"hr").replace(/\s*hari/gi,"hr").replace(/\s*minggu/gi,"mgg").replace(/\s*bulan/gi,"bln").trim():"",ke=()=>{try{if(typeof window<"u"&&typeof window.checkUserGesture=="function"&&!window.checkUserGesture())return;const e=window.AudioContext||window.webkitAudioContext;if(!e)return;const t=new e,a=t.createOscillator(),s=t.createGain();a.type="sine",a.frequency.setValueAtTime(1400,t.currentTime),s.gain.setValueAtTime(.08,t.currentTime),s.gain.exponentialRampToValueAtTime(1e-4,t.currentTime+.08),a.connect(s),s.connect(t.destination),a.start(),a.stop(t.currentTime+.08),setTimeout(()=>{t.close().catch(()=>{})},150)}catch{}},ir=(e,t)=>{if(!e||!e.wholesale||!e.wholesale.length)return null;const a=[...e.wholesale].sort((s,r)=>r.minQty-s.minQty);for(const s of a)if(t>=parseFloat(s.minQty))return parseFloat(s.price);return null},ge=e=>{if(!e.isVariant){const a=(m.products||[]).find(r=>r&&String(r.id)===String(e.id)),s=a?ir(a,e.qty):null;s!==null?(e.basePrice=e.basePrice||e.price,e.price=s,e.isWholesale=!0):(e.basePrice&&(e.price=e.basePrice),e.isWholesale=!1)}e.hpp==null&&(e.hpp=ze(e)||0);const t=parseFloat(e.hpp)||0;if(t>0){const a=Math.max(0,Math.round((e.price-t)*e.qty));Me(e.discount)>a&&(e.discount=a)}else e.discount=Math.min(Me(e.discount),e.price*e.qty);return e.subtotal=Math.max(0,e.price*e.qty-Me(e.discount)),e},lr=()=>{const e=new Date,t=a=>String(a).padStart(2,"0");return`POS-${e.getFullYear()}${t(e.getMonth()+1)}${t(e.getDate())}-${Date.now().toString(36).toUpperCase()}`},fs=()=>{qe&&clearInterval(qe);const e=()=>{const a=new Date().toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit",second:"2-digit"})+" WIB";document.querySelectorAll("#pos-live-clock").forEach(s=>{s.textContent=a})};e(),qe=setInterval(e,1e3)},ms=()=>{qe&&(clearInterval(qe),qe=null)};window.stopPOSClock=ms;const Lt=()=>{window.__posBarcodeFn&&(document.removeEventListener("keydown",window.__posBarcodeFn),window.__posBarcodeFn=null)},bs=()=>{Lt(),window.__posBarcodeFn=e=>{if(!e||typeof e.key!="string")return;const t=window.curViewName||"";if(!(t==="view-pos-cashier"||t==="view-admin"&&window.cTab==="pos"))return;if(e.key==="F2"||e.key==="F3"){e.preventDefault();const r=p("pos-search-input");r&&(r.focus(),r.select());return}if(e.key==="F4"){if(e.preventDefault(),!$.length){w("Keranjang kasir masih kosong","warning");return}fa();return}if(e.key==="F5"){e.preventDefault(),va();return}if(e.key==="F6"){e.preventDefault(),Ht();return}if(e.key==="F7"){e.preventDefault();const r=document.querySelector(".pos-disc-val-input");r&&(r.focus(),r.select());return}if(e.key==="F8"){e.preventDefault(),ft();return}if(e.key==="F9"){e.preventDefault(),p("pos-camera-scanner-modal")?Fe():Nt();return}if(e.key==="F10"){e.preventDefault(),Le()?pe():typeof Ce=="function"?Ce().then(r=>{r&&r.status==="open"?pe():ne()}).catch(()=>ne()):ne();return}if(e.key==="Escape"){if(p("pos-camera-scanner-modal")){Fe();return}if(p("pos-held-modal")){Ze();return}if(p("pos-pay-modal")){Bt();return}if(p("modal-pos-open-shift")){Re();return}if(p("modal-pos-shift-summary")){dt();return}if(p("modal-pos-close-shift")){Je();return}if(p("pos-success-modal")){p("pos-success-modal").remove();return}const r=p("pos-variant-sheet");if(r&&!r.classList.contains("hidden")){typeof window.closePOSVariantSheet=="function"&&window.closePOSVariantSheet();return}const o=p("pos-cart-drawer");if(o&&!o.classList.contains("hidden")){typeof window.closePOSCartDrawer=="function"&&window.closePOSCartDrawer();return}const i=p("pos-search-input");if(i&&(i.value||document.activeElement===i)){typeof window.posClearSearch=="function"&&window.posClearSearch(),i.blur();return}}const s=document.activeElement?.tagName?.toLowerCase();if(!(s==="input"||s==="textarea"||s==="select"))if(e.key==="Enter"){if(me&&me.length>=3){const r=me.trim().toLowerCase(),o=(m.products||[]).find(i=>i&&i.isActive!=="false"&&i.isActive!==!1&&(i.barcode&&i.barcode.toLowerCase()===r||i.sku&&i.sku.toLowerCase()===r||i.id&&String(i.id).toLowerCase()===r));if(o)Dt(o.id)&&(ke(),w(`Ditambahkan: ${o.name}`,"success"));else{if(typeof window.posSearchFn=="function")window.posSearchFn(me,!0);else{const i=p("pos-search-input");i&&(i.value=me,ue=me,Z())}w("Barcode tidak ditemukan di katalog","warning")}me=""}}else e.key&&e.key.length===1&&(me=(me||"")+e.key,clearTimeout(Ra),Ra=setTimeout(()=>{me=""},150))},document.addEventListener("keydown",window.__posBarcodeFn)},Dt=e=>{const t=(m.products||[]).find(i=>i&&String(i.id)===String(e));if(!t)return!1;if(!(t.isActive!=="false"&&t.isActive!==!1))return w("Produk ini sedang tidak tersedia","warning"),!1;if(t.variants&&t.variants.length>0)return ls().then(()=>{typeof window.openPOSVariantSheet=="function"&&window.openPOSVariantSheet(e)}),!0;const r=Ye(t);if(r.isManaged&&!r.isPreorder&&r.isOutOfStock)return w(`Maaf, stok "${t.name}" sedang kosong!`,"warning"),!1;const o=$.find(i=>String(i.id)===String(e)&&!i.isVariant);if(o){const i=parseFloat((o.qty+1).toFixed(3));if(r.isManaged&&!r.isPreorder&&i>r.totalStock)return w(`Stok tidak cukup! Tersisa: ${U(r.totalStock)} ${t.unit||"pcs"}`,"warning"),!1;o.qty=i,ge(o)}else{const i=parseFloat(t.price)||0;$.push(ge({id:t.id,name:t.name,price:i,basePrice:i,hpp:parseFloat(t.hpp)||0,qty:1,unit:t.unit||"pcs",poTime:t.poTime||"",discount:0,subtotal:i,isVariant:!1,isWholesale:!1}))}return ke(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"),Q(),!0},xs=(e,t)=>{const a=(m.products||[]).find(l=>l&&String(l.id)===String(e));if(!a)return!1;if(!(a.isActive!=="false"&&a.isActive!==!1))return w("Produk ini sedang tidak tersedia","warning"),!1;const r=Ye(a);if(r.isManaged&&!r.isPreorder&&r.isOutOfStock)return w(`Maaf, stok "${a.name}" sedang kosong!`,"warning"),!1;const o=ot(t)||1,i=$.find(l=>String(l.id)===String(e)&&!l.isVariant);if(i){const l=parseFloat((i.qty+o).toFixed(3));if(r.isManaged&&!r.isPreorder&&l>r.totalStock)return w(`Stok tidak cukup! Tersisa: ${U(r.totalStock)} ${a.unit||"pcs"}`,"warning"),!1;i.qty=l,ge(i)}else{if(r.isManaged&&!r.isPreorder&&o>r.totalStock)return w(`Stok tidak cukup! Tersisa: ${U(r.totalStock)} ${a.unit||"pcs"}`,"warning"),!1;const l=parseFloat(a.price)||0,d=ge({id:a.id,name:a.name,price:l,basePrice:l,hpp:parseFloat(a.hpp)||0,qty:o,unit:a.unit||"pcs",poTime:a.poTime||"",discount:0,subtotal:l*o,isVariant:!1,isWholesale:!1});$.push(d)}return ke(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"),Q(),!0},hs=(e,t,a,s,r=1)=>{const o=(m.products||[]).find(f=>f&&String(f.id)===String(e));if(!o)return!1;if(!(o.isActive!=="false"&&o.isActive!==!1))return w("Produk ini sedang tidak tersedia","warning"),!1;const l=o.variants?.[s];if(l){if(!(l.isActive!==!1&&l.isActive!=="false"))return w("Varian ini sedang tidak tersedia","warning"),!1;if(m.store?.useStock===!0||m.store?.useStock==="true"){const g=parseFloat(l.stock)||0,O=`${e}__v${s}`,v=$.find(L=>L.cartKey===O),y=v&&parseFloat(v.qty)||0,S=ot(r)||1;if(g<=0)return w(`Maaf, stok varian "${l.name}" sedang kosong!`,"warning"),!1;if(y+S>g)return w(`Stok varian "${l.name}" tidak cukup! Sisa: ${U(g)}`,"warning"),!1}}const d=`${e}__v${s}`,c=ot(r)||1,n=$.find(f=>f.cartKey===d);if(n)n.qty=parseFloat((n.qty+c).toFixed(3)),ge(n);else{const f=`${o.name} — ${t}`,k=parseFloat(l?.hpp!=null?l.hpp:o.hpp)||0;$.push(ge({id:e,cartKey:d,name:f,variantName:t,variantIdx:s,price:a,basePrice:a,hpp:k,qty:c,unit:l?.unit||o.unit||"pcs",poTime:o.poTime||"",discount:0,subtotal:a*c,isVariant:!0,isWholesale:!1}))}return ke(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"),Q(),!0},gs=(e,t)=>{const a=$.find(r=>(r.cartKey||String(r.id))===String(e));if(!a)return;const s=parseFloat((a.qty+t).toFixed(3));if(s<=0){Ft(e);return}if(t>0){const r=(m.products||[]).find(o=>o&&String(o.id)===String(a.id));if(r&&(m.store?.useStock===!0||m.store?.useStock==="true"))if(a.isVariant&&r.variants){const i=r.variants.find(d=>d.name===a.variantName),l=parseFloat(i?.stock)||0;if(s>l){w(`Stok maksimal "${a.name}" hanya ${U(l)}`,"warning");return}}else{const i=Ye(r);if(i.isManaged&&s>i.totalStock){w(`Stok maksimal tersedia: ${U(i.totalStock)} ${r.unit||"pcs"}`,"warning");return}}}a.qty=s,ge(a),t>0&&ke(),Q()},ws=(e,t)=>{const a=$.find(o=>(o.cartKey||String(o.id))===String(e));if(!a)return;let s=ot(t);if(s<=0){Ft(e);return}const r=(m.products||[]).find(o=>o&&String(o.id)===String(a.id));if(r&&(m.store?.useStock===!0||m.store?.useStock==="true"))if(a.isVariant&&r.variants){const i=r.variants.find(d=>d.name===a.variantName),l=parseFloat(i?.stock)||0;s>l&&(w(`Stok maksimal "${a.name}" hanya ${U(l)}`,"warning"),s=l)}else{const i=Ye(r);i.isManaged&&s>i.totalStock&&(w(`Stok maksimal tersedia: ${U(i.totalStock)} ${r.unit||"pcs"}`,"warning"),s=i.totalStock)}a.qty=s,ge(a),Q()},ks=(e,t)=>{const a=$.find(o=>(o.cartKey||String(o.id))===String(e));if(!a)return;const s=Me(t),r=a.hpp!=null?parseFloat(a.hpp):ze(a)||0;if(r>0){const o=Math.max(0,Math.round((a.price-r)*a.qty));if(s>o){const i=oe()?`Diskon ditolak! Tidak boleh di bawah harga modal toko (HPP ${h(r)}). Maksimal diskon: ${h(o)}`:"Diskon ditolak! Nilai diskon melebihi batas diskon maksimum yang diizinkan untuk item ini.";w(i,"warning"),a.discount=o,ge(a),Q(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("heavy");return}}a.discount=Math.min(s,a.price*a.qty),ge(a),Q()},Ft=e=>{$=$.filter(t=>(t.cartKey||String(t.id))!==String(e)),Q(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light")},vs=()=>{if($.length===0)return;const e=()=>{$=[],ce=0,z=0,Y="rp",te=0,N=null,Q(),w("Keranjang kasir dikosongkan.")};typeof window.showConfirm=="function"?window.showConfirm("Kosongkan Keranjang","Hapus semua item dari transaksi saat ini?",e,"Ya, Kosongkan",!0):e()},ut=(e="hold")=>{try{if(typeof window<"u"&&typeof window.checkUserGesture=="function"&&!window.checkUserGesture())return;const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const a=new t,s=a.createOscillator(),r=a.createGain();s.type="sine";const o=a.currentTime;e==="hold"?(s.frequency.setValueAtTime(659.25,o),s.frequency.exponentialRampToValueAtTime(880,o+.1)):(s.frequency.setValueAtTime(880,o),s.frequency.exponentialRampToValueAtTime(1174.66,o+.1)),r.gain.setValueAtTime(.08,o),r.gain.exponentialRampToValueAtTime(1e-4,o+.16),s.connect(r),r.connect(a.destination),s.start(),s.stop(o+.16),setTimeout(()=>{a.close().catch(()=>{})},200)}catch{}},dr=e=>{if(!e)return"";const t=Math.floor((Date.now()-e)/1e3);if(t<45)return"Baru saja";const a=Math.floor(t/60);if(a<60)return`${a} mnt lalu`;const s=Math.floor(a/60);return s<24?`${s} jam lalu`:new Date(e).toLocaleDateString("id-ID",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})};let G=[];try{const e=localStorage.getItem("pos_held_carts");if(e){const t=JSON.parse(e);Array.isArray(t)&&(G=t)}}catch{G=[]}const jt=()=>{try{localStorage.setItem("pos_held_carts",JSON.stringify(G))}catch{}Ne()},Ne=()=>{const e=G.length,t=p("pos-held-btn-storefront"),a=p("pos-held-btn-admin");t&&(e>0?t.innerHTML=`
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
            </button>`)},Ht=()=>{if($.length===0){w("Keranjang masih kosong, tidak ada transaksi untuk ditahan.","warning");return}const e=x?.name?`Antrean #${G.length+1} — ${x.name}`:`Antrean #${G.length+1}`,t=parseFloat($.reduce((s,r)=>s+(parseFloat(r.qty)||0),0).toFixed(3)),a=j();Xe(!0),typeof window.pushModalHistory=="function"&&window.pushModalHistory("posHoldPrompt"),document.getElementById("pos-hold-prompt-modal")?.remove(),document.body.insertAdjacentHTML("beforeend",`
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
                        <p class="font-black text-slate-800 dark:text-slate-100 text-sm mt-0.5">${U(t)} item</p>
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
    </div>`),setTimeout(()=>{const s=p("pos-hold-note-input");s&&(s.focus(),s.select())},50)},It=(e=!1)=>{const t=p("pos-hold-prompt-modal");t&&(!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("posHoldPrompt",!1,()=>t.remove()):t.remove())},oa=()=>{if($.length===0)return;const t=(p("pos-hold-note-input")?.value||"").trim()||`Antrean #${G.length+1}`,a={id:`HELD-${Date.now().toString(36).toUpperCase()}`,time:Date.now(),note:t,cart:JSON.parse(JSON.stringify($)),globalDisc:le(),discountType:Y,discountVal:z,customer:{...x},total:j(),subtotal:ie(),itemCount:parseFloat($.reduce((s,r)=>s+(parseFloat(r.qty)||0),0).toFixed(3))};G.unshift(a),jt(),$=[],ce=0,z=0,Y="rp",x={name:"",phone:"",isMember:!1,memberId:null,isNewTempo:!1},It(),Q(),Z(),ut("hold"),w(`Antrean "${t}" berhasil diparkir!`,"success")},ft=(e=!1)=>{!e&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("posHeldModal"),document.getElementById("pos-held-list-modal")?.remove();const t=G.length,a=t===0?`
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
            ${G.map((s,r)=>{const o=b(s.id),i=(s.cart||[]).slice(0,3).map(d=>`${b(d.name)} (${U(d.qty)}x)`).join(", "),l=(s.cart||[]).length>3?` +${s.cart.length-3} lainnya`:"";return`
                <div class="p-3.5 sm:p-4 hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div class="min-w-0 flex-1">
                        <div class="flex items-center gap-2 mb-1 flex-wrap">
                            <span class="px-2 py-0.5 rounded-lg bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 font-black text-[10px] uppercase">
                                #${r+1}
                            </span>
                            <h4 class="font-black text-xs sm:text-sm text-slate-900 dark:text-white truncate" title="${b(s.note)}">
                                ${b(s.note)}
                            </h4>
                            <span class="text-[10px] text-slate-400">• ${dr(s.time)}</span>
                        </div>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                            <i class="fa-solid fa-box-open mr-1 text-[10px] opacity-70"></i>
                            <span>${i}${l}</span>
                        </p>
                        <div class="flex items-center gap-3 mt-1.5 text-xs">
                            <span class="text-slate-500 font-medium">${U(s.itemCount)} item</span>
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
    </div>`)},Ze=(e=!1)=>{const t=p("pos-held-list-modal");t&&(!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("posHeldModal",!1,()=>t.remove()):t.remove())},na=e=>{const t=G.findIndex(a=>a.id===e);if(t===-1){w("Transaksi tertahan tidak ditemukan.","warning");return}if($.length>0){document.getElementById("pos-recall-confirm-modal")?.remove(),document.body.insertAdjacentHTML("beforeend",`
        <div id="pos-recall-confirm-modal" class="fixed inset-0 z-[10000] flex items-center justify-center p-4" style="background:rgba(15,23,42,0.75)">
            <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-sm border border-slate-200/80 dark:border-slate-800 overflow-hidden">
                <div class="p-5 text-center">
                    <div class="w-14 h-14 rounded-2xl bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto mb-3 text-2xl shadow-inner">
                        <i class="fa-solid fa-triangle-exclamation"></i>
                    </div>
                    <h3 class="font-black text-sm text-slate-900 dark:text-white mb-1">Keranjang Masih Berisi Item</h3>
                    <p class="text-xs text-slate-500 leading-relaxed mb-4">
                        Ada <span class="font-bold text-slate-800 dark:text-slate-200">${$.length} jenis item</span> di transaksi aktif saat ini. Ingin tahan transaksi aktif ke antrean baru atau menimpa?
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
        </div>`);return}ia(t)},ia=e=>{const t=G[e];t&&($=JSON.parse(JSON.stringify(t.cart||[])),Y=t.discountType||"rp",z=t.discountVal!==void 0?t.discountVal:t.globalDisc||0,ce=le(),x=t.customer?{...t.customer}:{name:"",phone:"",isMember:!1,memberId:null,isNewTempo:!1},G.splice(e,1),jt(),Ze(),Q(),Z(),ut("recall"),w(`Antrean "${t.note}" berhasil dipanggil kembali!`,"success"))},la=e=>{document.getElementById("pos-recall-confirm-modal")?.remove();const t=x?.name?`Antrean #${G.length+1} — ${x.name}`:`Antrean #${G.length+1}`,a={id:`HELD-${Date.now().toString(36).toUpperCase()}`,time:Date.now(),note:t,cart:JSON.parse(JSON.stringify($)),globalDisc:le(),discountType:Y,discountVal:z,customer:{...x},total:j(),subtotal:ie(),itemCount:parseFloat($.reduce((r,o)=>r+(parseFloat(o.qty)||0),0).toFixed(3))};G.unshift(a);const s=G.findIndex(r=>r.id===e);s!==-1?ia(s):(jt(),Ze())},da=e=>{document.getElementById("pos-recall-confirm-modal")?.remove();const t=G.findIndex(a=>a.id===e);t!==-1&&ia(t)},ca=e=>{const t=G.find(a=>a.id===e);t&&(document.getElementById("pos-delete-confirm-modal")?.remove(),document.body.insertAdjacentHTML("beforeend",`
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
    </div>`))},pa=e=>{document.getElementById("pos-delete-confirm-modal")?.remove();const t=G.find(a=>a.id===e);G=G.filter(a=>a.id!==e),jt(),w(`Antrean "${t?.note||""}" berhasil dihapus.`,"info"),ft(!0)},ua=()=>{const e=p("pos-mobile-cart-drawer"),t=p("pos-mobile-cart-sheet");e&&t&&(e.classList.remove("opacity-0","pointer-events-none"),e.classList.add("opacity-100"),t.classList.remove("translate-y-full"),t.classList.add("translate-y-0"),typeof window.pushModalHistory=="function"&&window.pushModalHistory("posCartDrawer"),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},Xe=(e=!1)=>{const t=p("pos-mobile-cart-drawer"),a=p("pos-mobile-cart-sheet");if(t&&a){const s=()=>{a.classList.add("translate-y-full"),a.classList.remove("translate-y-0"),t.classList.add("opacity-0","pointer-events-none"),t.classList.remove("opacity-100")};!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("posCartDrawer",!1,s):s()}},cr=e=>{if(!e)return"";if(e.img&&typeof e.img=="string"&&!Kt(e.img))return qt(e.img,"w150-rw");const t=(m?.products||[]).find(a=>a&&String(a.id)===String(e.id));return t&&t.img&&typeof t.img=="string"&&!Kt(t.img)?qt(t.img,"w150-rw"):""},Z=(e=!1)=>{try{if(e||(Qe=1),!m?.products||!m.products.length)try{const n=JSON.parse(localStorage.getItem("freshmart_products")||"null");Array.isArray(n)&&n.length>0&&(m||(window.appData={}),m.products=n)}catch{}const t=Array.isArray(m?.products)?m.products:[],a=t.filter(n=>{if(!n||n.isActive==="false"||n.isActive===!1||be&&n.category!==be||Te&&(n.subCategory||"").trim().toLowerCase()!==Te.toLowerCase())return!1;if(ue){const f=String(ue).toLowerCase(),k=String(n.name||"").toLowerCase(),g=String(n.barcode||"").toLowerCase(),O=String(n.sku||"").toLowerCase(),v=String(n.category||"").toLowerCase(),y=String(n.subCategory||"").toLowerCase(),S=String(n.brand||"").toLowerCase(),L=Array.isArray(n.variants)&&n.variants.some(D=>(D.name||"").toLowerCase().includes(f)||(D.sku||"").toLowerCase().includes(f)||(D.barcode||"").toLowerCase().includes(f));return k.includes(f)||g.includes(f)||O.includes(f)||v.includes(f)||y.includes(f)||S.includes(f)||L}return!0}),s=t.filter(n=>n&&n.isActive!=="false"&&n.isActive!==!1&&n.category).map(n=>String(n.category).trim()).filter(n=>n.length>0),o=["Semua",...new Set(s)].map(n=>{const f=n==="Semua",k=f?!be:be===n;return`<button type="button" onclick="window.posCatFilter('${b(f?"":n)}')" class="shrink-0 px-3.5 py-1.5 rounded-xl text-[11px] font-black uppercase tracking-wider border transition-all active:scale-95 shadow-2xs cursor-pointer touch-manipulation select-none ${k?"text-white border-transparent":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/50"}" style="${k?"background:linear-gradient(135deg, var(--color-primary-light,#e1b858) 0%, var(--color-primary,#c59b27) 60%, var(--color-primary-dark,#a87f1b) 100%);box-shadow:0 2px 8px rgba(var(--color-primary-rgb),0.3)":""}">${b(n)}</button>`}).join("");let i="";if(be){const n=(m?.categories||[]).find(v=>v.name===be),f=Array.isArray(n?.subCategories)?n.subCategories:[],k=t.filter(v=>v&&v.isActive!=="false"&&v.isActive!==!1&&v.category===be),g={};f.forEach(v=>{const y=(v||"").trim();y&&(g[y]=0)}),k.forEach(v=>{const y=(v.subCategory||"").trim();y&&(g[y]=(g[y]||0)+1)});const O=Object.keys(g).sort().map(v=>({name:v,count:g[v]}));O.length>0&&(i=`
                <div class="flex items-center gap-1.5 overflow-x-auto pb-1 hide-scrollbar pt-1.5 mt-1 border-t border-slate-100 dark:border-slate-700/50 w-full">
                    <button type="button" onclick="window.posSubCatFilter('')" class="shrink-0 px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase transition-all active:scale-95 border cursor-pointer touch-manipulation select-none ${Te?"bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700":"bg-slate-800 text-white dark:bg-white dark:text-slate-900 border-transparent shadow-2xs"}">Semua Jenis</button>
                    ${O.map(v=>{const y=Te.toLowerCase()===v.name.toLowerCase();return`<button type="button" onclick="window.posSubCatFilter('${b(v.name).replace(/'/g,"\\'")}')" class="shrink-0 px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all active:scale-95 border flex items-center gap-1 cursor-pointer touch-manipulation select-none ${y?"bg-[var(--color-primary)] text-white border-transparent shadow-2xs":"bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700"}">
                            <span>${b(v.name)}</span>
                            <span class="text-[9px] px-1 py-0.2 rounded-full ${y?"bg-white/20 text-white":"bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300"}">${v.count}</span>
                        </button>`}).join("")}
                </div>`)}const l=a.slice(0,Qe*nr),d=a.length>l.length;let c=a.length===0?`<div class="col-span-full flex flex-col items-center justify-center py-20 text-slate-400 dark:text-slate-600">
                 <div class="w-16 h-16 rounded-3xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 mb-3 shadow-inner">
                   <i class="fa-solid fa-box-open text-2xl"></i>
                 </div>
                 <p class="font-bold text-sm text-slate-600 dark:text-slate-400">Produk Tidak Ditemukan</p>
                 <p class="text-xs text-slate-400 mt-0.5">Coba gunakan kata kunci pencarian atau kategori lain</p>
               </div>`:l.map(n=>{if(!n)return"";const f=!!(n.img&&typeof n.img=="string"&&n.img.trim()&&!Kt(n.img)),k=f?qt(n.img,"w300-rw"):"",g=Array.isArray(n.variants)&&n.variants.length>0,O=Array.isArray(n.wholesale)&&n.wholesale.length>0,v=$.filter(q=>q&&String(q.id)===String(n.id)),y=parseFloat(v.reduce((q,I)=>q+(I&&I.qty&&parseFloat(I.qty)||0),0).toFixed(3)),S=b(String(n.id!=null?n.id:"")),L=Ye(n),D=b(String(n.name||"Produk")),F=b(String(n.category||"")),R=parseFloat(n.price)||0;let W="";if(g){const q=(n.variants||[]).map(I=>parseFloat(I.price)||0).filter(I=>I>0);if(q.length>0){const I=Math.min(...q),ve=Math.max(...q);W=I===ve?h(I):`${h(I)} - ${h(ve)}`}else W=R>0?h(R):"Pilih Varian"}else W=h(R);let J="",P="";if(n.priceNormal&&parseFloat(n.priceNormal)>R)J=`<span class="bg-rose-500 text-white px-2 py-0.5 rounded-md text-[8.5px] font-extrabold flex items-center gap-1 whitespace-nowrap shrink-0 uppercase tracking-wider shadow-sm"><i class="fa-solid fa-tags text-[7.5px]"></i> -${Math.round((parseFloat(n.priceNormal)-R)/parseFloat(n.priceNormal)*100)}%</span>`,P=`<p class="text-[10px] sm:text-[11px] text-slate-400 dark:text-slate-500 line-through leading-none font-semibold truncate mb-0.5">${h(parseFloat(n.priceNormal))}</p>`;else if(g&&n.variants&&n.variants.length){const q=n.variants.filter(I=>I.priceNormal&&parseFloat(I.priceNormal)>parseFloat(I.price)).map(I=>Math.round((parseFloat(I.priceNormal)-parseFloat(I.price))/parseFloat(I.priceNormal)*100));q.length>0&&(J=`<span class="bg-rose-500 text-white px-2 py-0.5 rounded-md text-[8.5px] font-extrabold flex items-center gap-1 whitespace-nowrap shrink-0 uppercase tracking-wider shadow-sm"><i class="fa-solid fa-tags text-[7.5px]"></i> -${Math.max(...q)}%</span>`)}const E=n.poTime?us(n.poTime):"";let u=E?`<span class="bg-amber-500 text-white px-2 py-0.5 rounded-md text-[8.5px] font-extrabold flex items-center gap-1 whitespace-nowrap shrink-0 uppercase tracking-wider shadow-sm"><i class="fa-solid fa-clock text-[7.5px]"></i> PO ${b(E)}</span>`:"";const T=b(`${n.subCategory||F||"PRODUK"}${n.brand?` · ${n.brand}`:""}`);let A="";L.isOutOfStock?A='<span class="bg-rose-500 text-white px-2 py-0.5 rounded-md text-[8.5px] font-extrabold flex items-center gap-1 whitespace-nowrap shrink-0 uppercase tracking-wider shadow-sm"><i class="fa-solid fa-ban text-[7.5px]"></i> Habis</span>':L.isLowStock?A=`<span class="bg-rose-500 text-white px-2 py-0.5 rounded-md text-[8.5px] font-extrabold flex items-center gap-1 whitespace-nowrap shrink-0 uppercase tracking-wider shadow-sm"><i class="fa-solid fa-fire text-[7.5px]"></i> Sisa ${U(L.totalStock)}</span>`:L.isManaged&&L.totalStock>0&&(A=`<span class="bg-slate-800/90 dark:bg-slate-700 text-white px-2 py-0.5 rounded-md text-[8.5px] font-bold flex items-center gap-1 whitespace-nowrap shrink-0 uppercase tracking-wider"><i class="fa-solid fa-box text-[7.5px]"></i> Stok ${U(L.totalStock)}</span>`);const C=g?'<span class="bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/50 px-1.5 py-0.5 rounded-md text-[8.5px] font-bold flex items-center gap-1 whitespace-nowrap shrink-0 uppercase tracking-wider"><i class="fa-solid fa-layer-group text-[7.5px]"></i> Varian</span>':"",H=O?'<span class="amber-badge px-1.5 py-0.5 rounded-md text-[8.5px] font-bold flex items-center gap-1 whitespace-nowrap shrink-0 uppercase tracking-wider"><i class="fa-solid fa-tags text-[7.5px]"></i> Grosir</span>':"",ae=n.variants&&n.variants.length?Math.max(...n.variants.map(q=>parseFloat(q.poin)||0)):parseFloat(n.poin)||0,_=ae>0?`<span class="bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.2)] px-1.5 py-0.5 rounded-md text-[8.5px] font-bold flex items-center gap-1 whitespace-nowrap shrink-0 uppercase tracking-wider"><i class="fa-solid fa-star text-[7.5px]"></i> +${ae}</span>`:"",K=n.variants&&n.variants.length?n.variants.reduce((q,I)=>q+(parseFloat(I.totalSold)||0),0):parseFloat(n.totalSold)||0,se=K>0?`<span class="bg-slate-100 text-slate-600 dark:bg-slate-700/60 dark:text-slate-300 border border-slate-200/80 dark:border-slate-600/50 px-1.5 py-0.5 rounded-md text-[8.5px] font-bold flex items-center gap-1 whitespace-nowrap shrink-0 uppercase tracking-wider"><i class="fa-solid fa-fire text-amber-500 text-[7.5px]"></i> ${K} Terjual</span>`:"",X=[];J&&X.push(J),A&&X.push(A),u&&X.push(u),C&&X.push(C),H&&X.push(H),_&&X.push(_),se&&X.push(se);const wt=X.join("");let Et="",Da="";if(oe()){let q=0,I="";if(g){const ve=(n.variants||[]).map(ye=>ye.hpp!=null?parseFloat(ye.hpp)||0:parseFloat(n.hpp)||0).filter(ye=>ye>0);if(ve.length>0){const ye=Math.min(...ve),Ha=Math.max(...ve);q=ye,I=ye===Ha?h(ye):`${h(ye)} - ${h(Ha)}`}else n.hpp!=null&&parseFloat(n.hpp)>0&&(q=parseFloat(n.hpp),I=h(q))}else n.hpp!=null&&parseFloat(n.hpp)>0&&(q=parseFloat(n.hpp),I=h(q));if(I||n.hpp!=null&&parseFloat(n.hpp)>0){const ve=I||h(parseFloat(n.hpp));Et=`<span class="pos-hpp-tag" title="Harga Pokok Penjualan (Modal Toko)"><i class="fa-solid fa-coins text-[8px]"></i> Modal: <b>${ve}</b></span>`,Da=`
                        <div class="pos-card-hpp-bar w-full flex items-center justify-between px-3 py-1 bg-amber-500/10 dark:bg-amber-950/40 border-t border-amber-500/20 dark:border-amber-700/30 text-[9.5px] font-bold text-amber-800 dark:text-amber-300 shrink-0 select-none" title="Harga Pokok Penjualan (Modal Toko)">
                            <span class="inline-flex items-center gap-1.5 truncate">
                                <i class="fa-solid fa-coins text-[8px] text-amber-600 dark:text-amber-400"></i>
                                <span>Modal: <b class="font-black text-amber-900 dark:text-amber-200">${ve}</b></span>
                            </span>
                            <span class="text-[8px] uppercase tracking-wider font-extrabold text-amber-700 dark:text-amber-300 bg-amber-200/60 dark:bg-amber-900/60 px-1 py-0.5 rounded">HPP</span>
                        </div>`}}const Fa=Vt(n,{size:"sm"}),ja=Vt(n,{size:"md"});return Pe==="list"?`
                    <div class="pos-list-item w-full bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/70 rounded-2xl shadow-xs transition-all duration-300 flex items-center p-3 sm:p-3.5 gap-3 sm:gap-4 group relative overflow-hidden text-left shrink-0${y>0?" in-cart":""}${L.isOutOfStock?" is-out-of-stock cursor-not-allowed":" cursor-pointer"}" onclick="window.posAddToCart('${S}')">
                        <!-- Thumbnail Kiri (Ukuran Presisi 80px/96px Bersih Murni Anti-Gepeng) -->
                        <div class="pos-list-thumb relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 bg-slate-50 dark:bg-slate-900 rounded-xl sm:rounded-2xl flex items-center justify-center border border-slate-100 dark:border-slate-700/50 overflow-hidden">
                            ${L.isOutOfStock?`
                                <div class="absolute inset-0 bg-slate-900/70 z-20 flex items-center justify-center">
                                    <span class="bg-rose-600 text-white text-[8px] font-black px-1.5 py-0.5 rounded shadow uppercase tracking-wider flex items-center gap-0.5">
                                        <i class="fa-solid fa-ban"></i> HABIS
                                    </span>
                                </div>`:""}
                            ${y>0?`<div class="pos-qty-badge" style="top:2px;right:2px;min-width:20px;height:20px;font-size:9.5px;border-width:1.5px">+${U(y)}</div>`:""}
                            ${f?`<img width="96" height="96" loading="lazy" decoding="async" src="${b(k)}" alt="${D}"
                                     class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${L.isOutOfStock?"grayscale opacity-50":""}"
                                     onerror="this.onerror=null;this.style.display='none';this.nextElementSibling.style.display='flex';">
                                   <div class="w-full h-full" style="display:none">${Fa}</div>`:Fa}
                        </div>
                        <!-- Konten Kanan -->
                        <div class="flex-1 min-w-0 flex flex-col justify-between py-0.5 gap-1 relative z-10 pr-0.5">
                            <!-- Line 1: Eyebrow Kategori & Merek -->
                            <p class="text-[9.5px] sm:text-[10px] uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500 truncate leading-none">${T}</p>
                            <!-- Line 2: Nama Produk -->
                            <h4 class="text-xs sm:text-[14px] font-bold text-slate-800 dark:text-slate-100 line-clamp-1 sm:line-clamp-2 leading-snug group-hover:text-[var(--color-primary)] transition-colors uppercase break-words" title="${D}">${D}</h4>
                            <!-- Line 3: Chips Badges Lengkap & Rapi (Bisa 2, 3, 4+ Baris, Anti-Terpotong) -->
                            <div class="product-chips-wrap">
                                ${wt}
                                ${n.unit?`<span class="pos-tag-chip pos-tag-stock shrink-0 whitespace-nowrap"><i class="fa-solid fa-box text-[7.5px]"></i> /${b(n.unit)}</span>`:""}
                            </div>
                            <!-- Line 4: Harga, HPP & Action Button -->
                            <div class="flex items-center justify-between pt-0.5">
                                <div class="flex items-center gap-1.5 min-w-0 flex-wrap">
                                    <div class="flex items-baseline gap-1">
                                        <p class="text-[var(--color-primary)] font-black text-xs sm:text-[15px] leading-none tracking-tight truncate">${W}</p>
                                        ${n.unit?`<span class="text-[9.5px] sm:text-[10px] text-slate-400 dark:text-slate-500 font-bold ml-0.5 uppercase tracking-wide">/${b(n.unit)}</span>`:""}
                                        ${P?`<span class="text-[10px] sm:text-[11px] text-slate-400 dark:text-slate-500 line-through leading-none font-semibold truncate">${h(parseFloat(n.priceNormal))}</span>`:""}
                                    </div>
                                    ${Et?`<span>${Et}</span>`:""}
                                </div>
                                <button type="button" class="w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-xl ${L.isOutOfStock?"bg-slate-100 dark:bg-slate-800 text-slate-400 opacity-50 cursor-not-allowed":y>0?"primary-bg text-white shadow-xs":"bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.2)] hover:bg-[var(--color-primary)] hover:text-white"} flex items-center justify-center shrink-0 transition-all group-hover:scale-105 active:scale-95 shadow-2xs mr-0.5 cursor-pointer z-20" onclick="event.stopPropagation();window.posAddToCart('${S}')" title="${L.isOutOfStock?"Stok Habis":y>0?"Tambah lagi (+1)":g?"Pilih Varian":"Tambah ke Keranjang"}">
                                    ${L.isOutOfStock?'<i class="fa-solid fa-ban text-xs"></i>':y>0?`<b>+${U(y)}</b>`:g?'<i class="fa-solid fa-layer-group text-xs"></i>':'<i class="fa-solid fa-plus text-xs"></i>'}
                                </button>
                            </div>
                        </div>
                    </div>`:`
                <div class="pos-product-card w-full bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/70 rounded-2xl shadow-xs transition-all duration-300 flex flex-col group relative overflow-hidden text-left${y>0?" in-cart":""}${L.isOutOfStock?" is-out-of-stock cursor-not-allowed":" cursor-pointer"}" onclick="window.posAddToCart('${S}')">
                    <!-- Kotak Gambar Rasio 1:1 Flush Cover Bersih Murni (Tanpa Badge Menutupi Gambar) -->
                    <div class="pos-img-box relative aspect-square w-full bg-slate-50 dark:bg-slate-900/80 flex items-center justify-center shrink-0 border-b border-slate-100 dark:border-slate-700/50 overflow-hidden">
                        ${L.isOutOfStock?`
                            <div class="absolute inset-0 bg-slate-900/70 z-20 flex items-center justify-center">
                                <span class="bg-rose-600 text-white text-[9px] font-black px-2.5 py-1 rounded-lg shadow-md uppercase tracking-wider flex items-center gap-1">
                                    <i class="fa-solid fa-ban"></i> HABIS
                                </span>
                            </div>`:""}
                        ${y>0?`<div class="pos-qty-badge">+${U(y)}</div>`:""}
                        ${f?`<img width="300" height="300" loading="lazy" decoding="async" src="${b(k)}" alt="${D}"
                                 class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${L.isOutOfStock?"grayscale opacity-50":""}"
                                 onerror="this.onerror=null;this.style.display='none';this.nextElementSibling.style.display='flex';">
                               <div class="w-full h-full" style="display:none">${ja}</div>`:ja}
                    </div>
                    <!-- Info Produk Rapi & Lega -->
                    <div class="pos-card-info flex-1 flex flex-col p-3 sm:p-3.5 min-w-0 bg-white dark:bg-slate-800 relative z-10">
                        <p class="pos-card-cat text-[9.5px] sm:text-[10px] uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500 truncate leading-none mb-1.5">${T}</p>
                        <h4 class="pos-card-name text-xs sm:text-[13px] font-bold text-slate-800 dark:text-slate-100 line-clamp-2 leading-snug min-h-[2.3rem] sm:min-h-[2.5rem] mb-1.5 group-hover:text-[var(--color-primary)] transition-colors uppercase break-words" title="${D}">${D}</h4>
                        <!-- Baris Chip Operasional Lengkap (Bisa 2, 3, 4+ Baris Mengalir, Anti-Terpotong) -->
                        <div class="product-chips-wrap">
                            ${wt}
                        </div>
                        <!-- Footer Harga & Tombol Aksi POS (Anti-Potong) -->
                        <div class="pos-card-footer flex items-end justify-between mt-auto pt-1.5 border-t border-slate-100 dark:border-slate-700/50 shrink-0">
                            <div class="min-w-0 pr-1">
                                <div class="h-3.5 flex items-center mb-0.5">
                                    ${P}
                                </div>
                                <div class="flex items-baseline gap-0.5">
                                    <p class="pos-card-price text-[var(--color-primary)] font-black text-xs sm:text-[14px] lg:text-[15px] leading-none tracking-tight truncate">${W}</p>
                                    ${n.unit?`<span class="text-[9.5px] sm:text-[10px] text-slate-400 dark:text-slate-500 font-bold ml-0.5 mb-0.5 uppercase tracking-wide">/${b(n.unit)}</span>`:""}
                                </div>
                            </div>
                            <button type="button" class="w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-xl ${L.isOutOfStock?"bg-slate-100 dark:bg-slate-800 text-slate-400 opacity-50 cursor-not-allowed":y>0?"primary-bg text-white shadow-xs":"bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.2)] hover:bg-[var(--color-primary)] hover:text-white"} flex items-center justify-center shrink-0 transition-all group-hover:scale-105 active:scale-95 shadow-2xs cursor-pointer z-20" onclick="event.stopPropagation();window.posAddToCart('${S}')" title="${L.isOutOfStock?"Stok Habis":y>0?"Tambah lagi (+1)":g?"Pilih Varian":"Tambah ke Keranjang"}" aria-label="${D}">
                                ${L.isOutOfStock?'<i class="fa-solid fa-ban text-xs"></i>':y>0?`<b>+${U(y)}</b>`:g?'<i class="fa-solid fa-layer-group text-xs"></i>':'<i class="fa-solid fa-plus text-xs"></i>'}
                            </button>
                        </div>
                    </div>
                    <!-- Sub-Baris Dedicated HPP Khusus Owner di Dasar Kartu POS Kasir (Full-Width Mini Bar) -->
                    ${Da}
                </div>`}).join("");a.length>0&&d&&(c+=`
            <div class="col-span-full py-4 flex flex-col items-center justify-center gap-2">
                <button type="button" onclick="window.posLoadMoreProducts()" class="px-6 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all shadow-2xs active:scale-95 flex items-center gap-2 cursor-pointer group">
                    <i class="fa-solid fa-layer-group text-[var(--color-primary)] group-hover:scale-110 transition-transform"></i>
                    <span>Tampilkan Lebih Banyak (${a.length-l.length} lagi)</span>
                </button>
                <span class="text-[10px] text-slate-400 dark:text-slate-500 font-medium">Menampilkan ${l.length} dari ${a.length} produk</span>
            </div>`),document.querySelectorAll("#pos-cat-filter").forEach(n=>{n.innerHTML=o}),document.querySelectorAll("#pos-subcat-filter").forEach(n=>{n.innerHTML=i,i?n.classList.remove("hidden"):n.classList.add("hidden")}),document.querySelectorAll("#pos-catalog-grid").forEach(n=>{n.className=Pe==="list"?"pos-catalog-list-mode":"pos-catalog-grid-mode",n.innerHTML=c})}catch(t){console.error("[POS] renderCatalog error:",t),document.querySelectorAll("#pos-catalog-grid").forEach(a=>{a.innerHTML=`
                <div class="col-span-full flex flex-col items-center justify-center py-16 text-slate-500">
                    <i class="fa-solid fa-triangle-exclamation text-amber-500 text-3xl mb-3"></i>
                    <p class="font-bold text-sm text-slate-700 dark:text-slate-300">Gagal Memuat Katalog Kasir</p>
                    <p class="text-xs text-slate-400 mt-1 mb-4">${b(t.message||"Terjadi kesalahan")}</p>
                    <button onclick="if(typeof window.posRenderCatalog==='function') window.posRenderCatalog(); else if(typeof window.refreshPOSCatalog==='function') window.refreshPOSCatalog();" class="px-4 py-2 rounded-xl text-xs font-bold text-white shadow-md active:scale-95 cursor-pointer" style="background:var(--color-primary)">
                        <i class="fa-solid fa-arrows-rotate mr-1.5"></i> Coba Muat Ulang
                    </button>
                </div>`})}},Q=()=>{const e=parseFloat($.reduce((u,T)=>u+(parseFloat(T.qty)||0),0).toFixed(3)),t=ie(),a=j(),s=h(a),r=h(t),o=$.length===0?`<div class="flex flex-col items-center justify-center h-full py-12 text-slate-300 dark:text-slate-600 select-none">
            <div class="w-16 h-16 rounded-3xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 mb-3 shadow-inner">
                <i class="fa-solid fa-cart-shopping text-2xl"></i>
            </div>
            <p class="text-sm font-bold text-slate-600 dark:text-slate-400">Keranjang Kasir Kosong</p>
            <p class="text-xs text-slate-400 mt-1 text-center max-w-[200px]">Pilih produk di katalog atau scan barcode untuk menambah</p>
           </div>`:$.map(u=>{const T=b(String(u.cartKey||u.id)),A=cr(u),C=u.isVariant&&u.variantName?b(u.name.replace(` — ${u.variantName}`,"")):b(u.name),H=u.hpp!=null?parseFloat(u.hpp):ze(u)||0,ae=H>0?Math.max(0,Math.round((u.price-H)*u.qty)):Math.round(u.price*u.qty),_=H>0?Math.round(u.subtotal-H*u.qty):0,K=Vt(u,{size:"thumb"}),se=(parseFloat(u.discount)||0)>0,X=St.has(String(u.cartKey||u.id))||se;return`
            <div class="group flex items-start gap-2.5 p-2 sm:p-2.5 bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 shadow-xs hover:border-[var(--color-primary)] transition-all">
                <!-- 44px Thumbnail -->
                <div class="w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden shrink-0 border border-slate-200/60 dark:border-slate-700 flex items-center justify-center bg-slate-50 dark:bg-slate-800">
                    ${A?`<img width="44" height="44" loading="lazy" src="${b(A)}" alt="${b(u.name)}" onerror="this.onerror=null; this.style.display='none'; this.nextElementSibling.style.display='flex';" class="w-full h-full object-cover">
                           <div class="w-full h-full" style="display:none">${K}</div>`:K}
                </div>
                <!-- Details -->
                <div class="flex-1 min-w-0 pr-1">
                    <p class="text-xs font-bold text-slate-800 dark:text-slate-100 truncate leading-snug" title="${b(u.name)}">${C}</p>
                    <div class="flex items-center gap-1.5 mt-0.5 flex-wrap">
                        ${u.isWholesale?'<span class="inline-flex items-center text-[8px] font-black px-1.5 py-0.5 rounded text-white shadow-2xs" style="background:var(--color-primary)">GROSIR</span>':""}
                        ${u.isVariant?`<span class="inline-flex items-center gap-1 text-[8px] font-black px-1.5 py-0.5 rounded text-white shadow-2xs" style="background:var(--color-primary);opacity:0.95"><i class="fa-solid fa-layer-group text-[7px]"></i>${b(u.variantName||"VARIAN")}</span>`:""}
                        ${u.poTime?`<span class="inline-flex items-center gap-1 text-[8px] font-bold px-1.5 py-0.5 rounded text-amber-700 bg-amber-100 dark:bg-amber-900/30 dark:text-amber-300 border border-amber-200 dark:border-amber-800 shadow-2xs uppercase tracking-wide"><i class="fa-solid fa-clock text-[7px]"></i> PO ${b(u.poTime)}</span>`:""}
                        ${oe()&&H>0?`<span class="inline-flex items-center gap-1 text-[8px] font-black px-1.5 py-0.5 rounded text-amber-950 bg-amber-100 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-300/80 dark:border-amber-700 shadow-2xs" title="Harga Modal (HPP)"><i class="fa-solid fa-coins text-[7px] text-amber-600 dark:text-amber-400"></i>HPP: ${h(H)}</span>`:""}
                        <span class="text-[10px] text-slate-500 font-medium">
                            ${u.isWholesale&&u.basePrice?`<span class="line-through text-slate-400">${h(u.basePrice)}</span> <span class="font-bold" style="color:var(--color-primary)">${h(u.price)}</span>`:h(u.price)}
                        </span>
                    </div>

                    <!-- Smart Item Discount Toggle / Input (Ramping & Bebas Sesak) -->
                    ${X?`
                        <div class="flex items-center gap-1.5 mt-1.5 flex-wrap">
                            <span class="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Diskon:</span>
                            <input type="number" min="0" ${H>0?`max="${ae}"`:""} placeholder="0" value="${u.discount||""}" onchange="window.posSetItemDisc('${T}',this.value)"
                                class="w-16 text-[10px] font-mono font-bold border border-slate-200 dark:border-slate-700 rounded-md px-1.5 py-0.5 bg-slate-50 dark:bg-slate-700/60 text-right focus:outline-none focus:border-[var(--color-primary)] transition-all">
                            ${oe()&&H>0?`<span class="text-[9px] text-amber-600 dark:text-amber-400 font-bold whitespace-nowrap" title="Maksimal diskon">(Maks: ${h(ae)})</span>`:""}
                            ${se?"":`<button type="button" onclick="window.togglePOSItemDiscInput('${T}')" class="text-[9px] text-slate-400 hover:text-rose-500 ml-0.5 cursor-pointer" title="Tutup input diskon"><i class="fa-solid fa-xmark"></i></button>`}
                        </div>`:`
                        <div class="flex items-center gap-2 mt-1">
                            <button type="button" onclick="window.togglePOSItemDiscInput('${T}')" class="pos-item-disc-btn" title="Beri diskon khusus per item">
                                <i class="fa-solid fa-tag text-[8px]"></i> +Diskon
                            </button>
                        </div>`}
                </div>
                <!-- Stepper & Subtotal -->
                <div class="flex flex-col items-end shrink-0">
                    <div class="flex items-center gap-1">
                        <div class="flex items-center bg-slate-100 dark:bg-slate-700/80 rounded-lg p-0.5 border border-slate-200 dark:border-slate-600 focus-within:border-[var(--color-primary)] transition-colors">
                            <button onclick="window.posUpdateQty('${T}',-1)" class="w-5 h-5 rounded text-slate-600 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-600 font-black text-xs flex items-center justify-center cursor-pointer active:scale-90 transition-all">−</button>
                            <input type="number" step="any" min="0.01" value="${U(u.qty)}" onchange="window.posSetQty('${T}',this.value)"
                                class="w-11 text-center text-[11px] font-black bg-transparent text-slate-800 dark:text-slate-100 focus:outline-none px-0.5">
                            <button onclick="window.posUpdateQty('${T}',1)" class="w-5 h-5 rounded text-slate-600 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-600 font-black text-xs flex items-center justify-center cursor-pointer active:scale-90 transition-all">+</button>
                        </div>
                        <button onclick="window.posRemoveItem('${T}')" class="w-6 h-6 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 flex items-center justify-center text-xs transition-all cursor-pointer" title="Hapus item">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                    <div class="flex items-baseline gap-1 mt-1.5">
                        ${se?`<span class="line-through text-[10px] text-slate-400">${h(u.price*u.qty)}</span>`:""}
                        <p class="text-xs font-black" style="color:var(--color-primary)">${h(u.subtotal)}</p>
                    </div>
                    ${oe()&&H>0?`<p class="text-[9px] font-bold ${_>=0?"text-emerald-600 dark:text-emerald-400":"text-rose-500"} mt-0.5" title="Estimasi laba kotor item ini"><i class="fa-solid fa-arrow-trend-up text-[8px] mr-0.5"></i>Untung: ${h(_)}</p>`:""}
                </div>
            </div>`}).join("");document.querySelectorAll(".pos-cart-items-target").forEach(u=>u.innerHTML=o),document.querySelectorAll(".pos-subtotal-target").forEach(u=>u.textContent=r),document.querySelectorAll(".pos-total-target").forEach(u=>u.textContent=s),document.querySelectorAll(".pos-item-count-target").forEach(u=>u.textContent=U(e));const i=oe(),l=i?we():0,d=h(l),c=i?Math.max(0,a-l):0,n=h(c);document.querySelectorAll(".pos-total-hpp-target").forEach(u=>u.textContent=d),document.querySelectorAll(".pos-total-margin-target").forEach(u=>u.textContent=n),document.querySelectorAll(".pos-hpp-margin-row").forEach(u=>{u.style.display=i?"flex":"none"});const f=$.length>0;document.querySelectorAll(".pos-cart-breakdown").forEach(u=>{u.style.display=f?"block":"none"});const k=re(),g=k&&(k.ppnEnabled||k.ppnAmount&&k.ppnAmount>0||k.ppnRate>0&&(m.store?.ppnEnabled===!0||m.store?.ppnEnabled==="true")),O=k?.ppnType==="inclusive",v=k?.ppnAmount||0,y=k?.ppnRate||0,S=k?.ppnLabel||`${O?"Inc. PPN":"PPN"} (${y}%)`,L=v>0?`${O?"":"+"}${h(v)}`:"Rp 0";document.querySelectorAll(".pos-tax-breakdown-row").forEach(u=>{u.style.display=f&&g?"flex":"none"}),document.querySelectorAll(".pos-tax-label-target").forEach(u=>{u.textContent=S}),document.querySelectorAll(".pos-tax-amt-target").forEach(u=>{u.textContent=L});const D=le(),F=h(D);document.querySelectorAll(".pos-disc-val-input").forEach(u=>{document.activeElement!==u&&(u.value=z||"")}),document.querySelectorAll(".pos-global-disc-target").forEach(u=>{document.activeElement!==u&&(u.value=z||"")}),document.querySelectorAll(".pos-disc-preview-target").forEach(u=>{D>0?(u.textContent=`- ${F}`,u.classList.remove("hidden"),u.classList.add("text-rose-500")):(u.textContent="",u.classList.add("hidden"))}),document.querySelectorAll(".pos-disc-type-rp").forEach(u=>{Y==="rp"?(u.className="pos-disc-type-rp px-2.5 py-0.5 rounded-md transition-all cursor-pointer font-black text-white shadow-xs text-[10px]",u.style.background="var(--color-primary)",u.style.color="#ffffff"):(u.className="pos-disc-type-rp px-2.5 py-0.5 rounded-md transition-all cursor-pointer text-slate-600 dark:text-slate-300 hover:text-slate-900 font-bold text-[10px]",u.style.background="transparent",u.style.color="")}),document.querySelectorAll(".pos-disc-type-pct").forEach(u=>{Y==="percent"?(u.className="pos-disc-type-pct px-2.5 py-0.5 rounded-md transition-all cursor-pointer font-black text-white shadow-xs text-[10px]",u.style.background="var(--color-primary)",u.style.color="#ffffff"):(u.className="pos-disc-type-pct px-2.5 py-0.5 rounded-md transition-all cursor-pointer text-slate-600 dark:text-slate-300 hover:text-slate-900 font-bold text-[10px]",u.style.background="transparent",u.style.color="")}),document.querySelectorAll(".pos-disc-prefix").forEach(u=>{u.textContent=Y==="percent"?"%":"Rp",u.style.color="var(--color-primary)"});const R=[5,10,15,20,50],W=[2e3,5e3,1e4,25e3,5e4],J=(u,T)=>Y===T&&Number(z)===Number(u),P=Y==="percent"?`
        ${R.map(u=>{const T=J(u,"percent");return`<button onclick="window.posApplyQuickDiscount(${u},'percent')" 
                class="px-2.5 py-1 rounded-lg text-[10px] cursor-pointer transition-all active:scale-95 ${T?"text-white shadow-xs font-black":"bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700 font-bold"}"
                style="${T?"background:var(--color-primary);border:1px solid var(--color-primary);":""}">${u}%</button>`}).join("")}
        ${z>0?`<button onclick="window.posApplyQuickDiscount(0,'percent')" class="px-2.5 py-1 rounded-lg bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 text-[10px] font-bold text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800 cursor-pointer transition-all active:scale-95"><i class="fa-solid fa-rotate-left mr-1 text-[9px]"></i>Reset</button>`:""}
        `:`
        ${W.map(u=>{const T=J(u,"rp"),A=`${u/1e3}rb`;return`<button onclick="window.posApplyQuickDiscount(${u},'rp')" 
                class="px-2.5 py-1 rounded-lg text-[10px] cursor-pointer transition-all active:scale-95 ${T?"text-white shadow-xs font-black":"bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700 font-bold"}"
                style="${T?"background:var(--color-primary);border:1px solid var(--color-primary);":""}">${A}</button>`}).join("")}
        ${z>0?`<button onclick="window.posApplyQuickDiscount(0,'rp')" class="px-2.5 py-1 rounded-lg bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 text-[10px] font-bold text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800 cursor-pointer transition-all active:scale-95"><i class="fa-solid fa-rotate-left mr-1 text-[9px]"></i>Reset</button>`:""}
        `;document.querySelectorAll(".pos-disc-chips-target").forEach(u=>u.innerHTML=P),document.querySelectorAll(".pos-pay-btn-target").forEach(u=>{u.disabled=$.length===0;const T=u.querySelector(".btn-text");T&&(T.textContent=$.length>0?`BAYAR — ${s}`:"PROSES PEMBAYARAN")}),document.querySelectorAll(".pos-hold-btn-target").forEach(u=>{u.disabled=$.length===0,$.length===0?u.classList.add("opacity-40","cursor-not-allowed"):u.classList.remove("opacity-40","cursor-not-allowed")}),Ne();const E=p("pos-mobile-floating-bar");E&&($.length>0?(E.classList.remove("translate-y-32","opacity-0","pointer-events-none"),E.classList.add("translate-y-0","opacity-100")):(E.classList.add("translate-y-32","opacity-0","pointer-events-none"),E.classList.remove("translate-y-0","opacity-100"),Xe(!0)))},fa=()=>{if($.length===0){w("Keranjang masih kosong!","warning");return}const e=we();if(e>0&&j()<e){const t=oe()?`Transaksi ditolak! Total tagihan (${h(j())}) tidak boleh di bawah harga modal HPP (${h(e)})!`:"Transaksi ditolak! Total transaksi melebihi batas diskon maksimum yang diizinkan sistem.";w(t,"error"),typeof window.triggerHaptic=="function"&&window.triggerHaptic("heavy");return}typeof window.pushModalHistory=="function"&&window.pushModalHistory("posPayment"),x={name:"",phone:"",isMember:!1,memberId:null,isNewTempo:!1},te=0,N=null,V="cash",de=j(),je(),mt(),document.body.insertAdjacentHTML("beforeend",`
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
              <span class="text-xs text-slate-500">Total Tagihan: <span class="font-black text-sm" style="color:var(--color-primary)">${h(j())}</span></span>
              ${oe()&&e>0?`<span class="inline-flex items-center gap-1 text-[10px] font-bold text-amber-950 bg-amber-100 dark:bg-amber-950/60 dark:text-amber-300 px-2 py-0.5 rounded-full border border-amber-300/80 dark:border-amber-700 shadow-2xs"><i class="fa-solid fa-coins text-[8px] text-amber-600 dark:text-amber-400"></i>HPP: ${h(e)}</span>`:""}
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
    </div>`),Ae("cash")},Bt=(e=!1)=>{const t=p("pos-pay-modal");t&&(!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("posPayment",!1,()=>t.remove()):t.remove())},ys=(e,t,a)=>{a.forEach(s=>{const r=p(`${e}-${s}`);r&&(s===t?(r.style.background="var(--color-primary)",r.style.color="white",r.style.borderColor="var(--color-primary)",r.classList.add("shadow-xs")):(r.style.removeProperty("background"),r.style.removeProperty("color"),r.style.removeProperty("border-color"),r.classList.remove("shadow-xs")))})},Ae=e=>{const t=p("pos-pay-detail");if(!t)return;const a=j(),s=we(),r=Math.max(0,a-s),o=De(),i=re(),l=i&&(i.ppnEnabled||i.ppnAmount&&i.ppnAmount>0||i.ppnRate>0&&(m.store?.ppnEnabled===!0||m.store?.ppnEnabled==="true")),d=i?.ppnType==="inclusive",c=i?.ppnAmount||0,n=i?.ppnRate||0,f=i?.ppnLabel||`${d?"Termasuk PPN":"PPN"} (${n}%)`,k=i?.dppAmount!==void 0?i.dppAmount:Math.max(0,ie()-le()-o),g=`
      <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-700/60 mb-2.5 text-xs space-y-1.5">
        <div class="flex justify-between items-center">
          <span class="text-slate-500 font-medium">Subtotal Belanja</span>
          <span class="font-bold font-mono text-xs">${h(ie())}</span>
        </div>
        ${le()>0?`
        <div class="flex justify-between items-center text-rose-500 text-[11px]">
          <span>Diskon Toko</span>
          <span class="font-bold font-mono">- ${h(le())}</span>
        </div>`:""}
        ${o>0?`
        <div class="flex justify-between items-center text-emerald-600 dark:text-emerald-400 text-[11px]">
          <span class="flex items-center gap-1 font-bold"><i class="fa-solid fa-tags"></i> Diskon Poin (${te} Pts)</span>
          <span class="font-black font-mono">- ${h(o)}</span>
        </div>`:""}
        ${N?`
        <div class="flex justify-between items-center text-purple-600 dark:text-purple-400 text-[11px]">
          <span class="flex items-center gap-1 font-bold"><i class="fa-solid fa-gift"></i> Klaim Hadiah</span>
          <span class="font-bold truncate max-w-[170px]">${b(N.name)} (-${N.pointsCost} Pts)</span>
        </div>`:""}
        ${l?`
        <div class="flex justify-between items-center text-slate-500 text-[11px]">
          <span>DPP</span>
          <span class="font-bold font-mono">${h(k)}</span>
        </div>
        <div class="flex justify-between items-center text-amber-600 dark:text-amber-400 text-[11px] font-bold">
          <span>${b(f)}</span>
          <span class="font-black font-mono">${c>0?(d?"":"+")+h(c):"Rp 0"}</span>
        </div>`:""}
        <div class="flex justify-between items-center pt-1.5 border-t border-slate-200/60 dark:border-slate-700/60">
          <span class="text-slate-700 dark:text-slate-200 font-bold">Total Wajib Bayar</span>
          <span class="font-black text-sm" style="color:var(--color-primary)">${h(a)}</span>
        </div>
        ${oe()&&s>0?`
        <div class="flex justify-between items-center pt-1 border-t border-slate-200/40 dark:border-slate-700/40 text-[10px]">
          <span class="text-slate-400 font-semibold flex items-center gap-1"><i class="fa-solid fa-coins text-amber-500"></i> Total Modal (HPP):</span>
          <span class="font-bold text-amber-600 dark:text-amber-400">${h(s)}</span>
        </div>
        <div class="flex justify-between items-center text-[10px]">
          <span class="text-slate-400 font-semibold flex items-center gap-1"><i class="fa-solid fa-arrow-trend-up text-emerald-500"></i> Estimasi Laba Bersih:</span>
          <span class="font-bold text-emerald-600 dark:text-emerald-400">+ ${h(r)}</span>
        </div>`:""}
      </div>`;if(e==="cash"){const v=[{label:"Uang Pas",val:a,isPas:!0},{label:"10.000",val:1e4},{label:"20.000",val:2e4},{label:"50.000",val:5e4},{label:"100.000",val:1e5},{label:"200.000",val:2e5},{label:"500.000",val:5e5}].map(y=>`
            <button onclick="window.posSetQuickCash(${y.val})" type="button"
                class="px-2.5 py-1.5 rounded-xl text-[11px] font-black border transition-all active:scale-95 ${y.isPas?"text-white border-transparent shadow-xs":"bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]"}"
                style="${y.isPas?"background:var(--color-primary)":""}">
                ${y.isPas?"💵 Uang Pas":`Rp ${y.label}`}
            </button>
        `).join("");t.innerHTML=`
            ${g}
            <div class="space-y-2">
                <label class="text-[10px] font-black uppercase tracking-wider text-slate-400">Nominal Uang Diterima (Rp)</label>
                <div class="relative">
                    <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-black text-slate-400">Rp</span>
                    <input id="pos-paid-input" type="number" min="0" placeholder="${a}" value="${de||""}"
                        class="w-full border-2 rounded-2xl pl-10 pr-4 py-2.5 text-base sm:text-lg font-black bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none text-right transition-all"
                        style="border-color:var(--color-primary)" oninput="window.updatePosChange(this.value)">
                </div>

                <!-- Quick Cash Buttons Grid -->
                <div class="pt-1">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Pilihan Uang Cepat (1-Klik)</p>
                    <div class="grid grid-cols-3 sm:grid-cols-4 gap-1.5">
                        ${v}
                    </div>
                </div>

                <!-- Kembalian Box -->
                <div id="pos-change-box" class="mt-2.5 p-3 rounded-2xl border transition-all flex items-center justify-between ${de>=a?"bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800":"bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800"}">
                    <div>
                        <p class="text-[9px] font-black uppercase tracking-wider text-slate-400">Status Kembalian</p>
                        <p id="pos-change-label" class="text-xs font-bold ${de>=a?"text-emerald-700 dark:text-emerald-400":"text-rose-700 dark:text-rose-400"}">
                            ${de>=a?"Kembalian Uang Pembeli:":"Uang Masih Kurang:"}
                        </p>
                    </div>
                    <span id="pos-change-display" class="text-base font-black ${de>=a?"text-emerald-700 dark:text-emerald-400":"text-rose-600 dark:text-rose-400"}">
                        ${h(Math.abs(ps()))}
                    </span>
                </div>
            </div>
        `}else if(e==="qris"){const O=m.payment?.qrisUrl||m.store?.qrisUrl||m.payment?.qris||m.store?.qris||m.qrisUrl||"",v=O?qs(O):"";t.innerHTML=`
          ${g}
          ${v?`<div class="flex flex-col items-center justify-center p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700"><img src="${b(v)}" class="w-48 h-48 object-contain rounded-xl shadow-xs" alt="QRIS"><p class="text-center text-xs font-bold text-slate-600 dark:text-slate-300 mt-2">Arahkan kamera pembeli untuk memindai QRIS</p></div>`:'<div class="p-4 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 text-xs rounded-2xl border border-amber-200 text-center font-bold"><i class="fa-solid fa-triangle-exclamation mr-1.5"></i>QRIS toko belum diatur di menu Pengaturan.</div>'}`}else if(e==="transfer"){const v=(Array.isArray(m.banks)?m.banks:[]).filter(S=>S&&(S.bankName||S.name||S.bank));let y='<option value="">Rekening bank belum diatur di CMS Admin</option>';v.length>0&&(y=v.map(S=>{const L=S.bankName||S.name||S.bank||"Bank",D=S.bankAccount||S.number||S.noRekening||S.account||"",F=S.bankOwner||S.holder||S.atasNama||S.owner||"",R=`${L}${D?" — "+D:""}${F?" a/n "+F:""}`;return`<option value="${b(R)}">${b(R)}</option>`}).join("")),t.innerHTML=`
          ${g}
          <div class="space-y-2">
            <label class="text-[10px] font-black uppercase tracking-wider text-slate-400 block">Rekening Tujuan Toko</label>
            <div class="relative">
              <select id="pos-bank-sel" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)] transition-all">
                ${y}
              </select>
            </div>
            ${v.length>0?`
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
          </div>`}else if(e==="tempo"){const O=lt(),v=O.tenors||{},S=O.enabled!==!1&&!!(x.isMember&&x.paylaterActive&&x.paylaterLimit>0),L=S?Math.max(0,(x.paylaterLimit||0)-Math.max(0,x.paylaterUsed||0)):0,D=S&&a>L?a-L:0,F=p("pos-dp-input"),R=F?Math.max(0,parseFloat(F.value)||0):D>0?D:0,W=Math.max(D,R),J=Math.min(L,Math.max(0,a-W)),P=x.paylaterDueDay||5,E=["30d","2m","3m"].filter(A=>v[A]&&v[A].enabled);E.length>0&&!E.includes(He)&&(He=E[0]);const u=at(J,He,{...O,dueDay:P}),T=E.map(A=>{const C=v[A],H=A===He,ae=at(J,A,{...O,dueDay:P});return`
              <button type="button" onclick="window.posSelectPaylaterTenor('${A}')"
                class="flex-1 py-2 px-2.5 rounded-xl border text-center transition-all cursor-pointer ${H?"border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)] font-black shadow-xs":"border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300"}">
                <div class="text-[11px] font-extrabold flex items-center justify-center gap-1">
                  <span>${b(C.shortLabel||C.label)}</span>
                  ${H?'<i class="fa-solid fa-circle-check text-[10px]" style="color:var(--color-primary)"></i>':""}
                </div>
                <div class="text-[10px] font-mono mt-0.5 ${H?"font-black":"text-slate-500 dark:text-slate-400"}">
                  ${h(ae.totalPerMonth)}/bln
                </div>
              </button>
            `}).join("");t.innerHTML=`
          ${g}
          ${S?`
            <div class="p-3.5 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/40 rounded-2xl border border-emerald-200/80 dark:border-emerald-800/60 mb-2.5 space-y-2.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-black text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                  <i class="fa-solid fa-bolt text-emerald-500"></i> Putri PayLater Member
                </span>
                <span class="text-[10px] font-black px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-200">
                  Plafon: ${h(x.paylaterLimit)}
                </span>
              </div>
              <div class="flex justify-between items-center text-xs">
                <span class="text-slate-500 dark:text-slate-400 text-[11px]">Sisa Plafon Tersedia:</span>
                <span class="font-black text-emerald-600 dark:text-emerald-400 font-mono text-sm">${h(L)}</span>
              </div>
              <label class="flex items-center gap-2 pt-1.5 cursor-pointer select-none border-t border-emerald-200/60 dark:border-emerald-800/40">
                <input type="checkbox" id="pos-use-paylater" ${L>0?"checked":"disabled"} onchange="window.posTogglePaylater(this.checked)" class="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 cursor-pointer">
                <span class="text-xs font-bold text-slate-700 dark:text-slate-200">Gunakan Cicilan Putri PayLater</span>
              </label>

              <!-- Tenor & Simulasi Cicilan Interaktif Kasir POS -->
              <div id="pos-paylater-tenor-box" class="space-y-2 pt-1" style="display: ${L>0?"block":"none"};">
                <div class="flex items-center justify-between">
                  <span class="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Pilih Tenor Cicilan:</span>
                  <span class="text-[9px] font-bold text-emerald-700 dark:text-emerald-400"><i class="fa-solid fa-shield-halved mr-1"></i>Tanpa Biaya Tersembunyi</span>
                </div>
                <div class="flex gap-1.5">
                  ${T}
                </div>

                <!-- Rincian Biaya & Angsuran Transparan -->
                <div id="pos-paylater-breakdown-box" class="p-2.5 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-emerald-200/60 dark:border-emerald-800/40 text-[11px] space-y-1">
                  <div class="flex justify-between text-slate-500 dark:text-slate-400">
                    <span>Pokok Dibiayai:</span>
                    <span class="font-mono font-bold text-slate-700 dark:text-slate-200">${h(u.pokokTotal)}</span>
                  </div>
                  <div class="flex justify-between text-slate-500 dark:text-slate-400">
                    <span>Biaya Admin:</span>
                    <span class="font-mono font-bold ${u.totalAdminFee>0?"text-amber-600 dark:text-amber-400":"text-emerald-600 dark:text-emerald-400"}">
                      ${u.totalAdminFee>0?h(u.totalAdminFee):"Gratis"}
                    </span>
                  </div>
                  <div class="flex justify-between text-slate-500 dark:text-slate-400">
                    <span>Biaya Penanganan / Layanan:</span>
                    <span class="font-mono font-bold ${u.totalServiceFee>0?"text-amber-600 dark:text-amber-400":"text-emerald-600 dark:text-emerald-400"}">
                      ${u.totalServiceFee>0?h(u.totalServiceFee):"Gratis"}
                    </span>
                  </div>
                  <div class="pt-1 border-t border-slate-200/60 dark:border-slate-800 flex justify-between items-center font-bold">
                    <span class="text-slate-700 dark:text-slate-200">Cicilan / Bulan (${u.months}x):</span>
                    <span class="text-xs font-black font-mono" style="color:var(--color-primary)">${h(u.totalPerMonth)}/bln</span>
                  </div>
                  <div class="flex justify-between items-center text-[10px] text-slate-400">
                    <span>Total Tagihan PayLater:</span>
                    <span class="font-mono font-bold text-slate-600 dark:text-slate-300">${h(u.grandTotal)}</span>
                  </div>
                </div>
              </div>

              ${D>0?`
                <div class="p-2 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800 text-[10px] text-amber-800 dark:text-amber-300 font-bold flex items-center gap-1.5">
                  <i class="fa-solid fa-circle-exclamation text-amber-500 shrink-0"></i>
                  <span>Total belanja melebihi sisa limit. Wajib DP minimal ${h(D)}</span>
                </div>
              `:""}
            </div>
          `:`
            <div class="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-2xl border border-amber-200 dark:border-amber-700/80 mb-2.5">
              <p class="text-xs font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1.5"><i class="fa-solid fa-hourglass-half"></i> Pembayaran Tempo / Piutang</p>
              <p class="text-[10px] text-amber-700 dark:text-amber-400 mt-1">Transaksi otomatis dicatat sebagai piutang di database toko.</p>
            </div>
          `}
          <label class="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1">${S&&D>0?"Uang Muka / DP Wajib (Rp)":"Uang Muka / DP (Rp) — opsional"}</label>
          <input id="pos-dp-input" type="number" min="0" placeholder="0" value="${D>0?D:0}" oninput="window.posOnDpInput(this.value)" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-black text-right bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)]">`}},Ss=e=>{He=e,Ae("tempo")};window.posSelectPaylaterTenor=Ss;const Ps=e=>{const t=j(),a=Math.max(0,parseFloat(e)||0);if(!!!(x.isMember&&x.paylaterActive&&x.paylaterLimit>0))return;const r=Math.max(0,(x.paylaterLimit||0)-Math.max(0,x.paylaterUsed||0)),o=Math.min(r,Math.max(0,t-a)),i=lt(),l=x.paylaterDueDay||5,d=at(o,He,{...i,dueDay:l}),c=p("pos-paylater-breakdown-box");c&&(c.innerHTML=`
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
        `)};window.posOnDpInput=Ps;const Ts=e=>{const t=j(),a=p("pos-dp-input"),s=p("pos-dp-input")?.previousElementSibling,r=!!(x.isMember&&x.paylaterActive&&x.paylaterLimit>0),o=r?Math.max(0,(x.paylaterLimit||0)-Math.max(0,x.paylaterUsed||0)):0,i=e&&r&&t>o?t-o:0;a&&(a.value=i>0?i:0),s&&s.tagName==="LABEL"&&(s.textContent=e&&r&&i>0?"Uang Muka / DP Wajib (Rp)":"Uang Muka / DP (Rp) — opsional");const l=p("pos-paylater-tenor-box");l&&(l.style.display=e?"block":"none"),window.posOnDpInput(a?a.value:0)};window.posTogglePaylater=Ts;const Ms=e=>{x.isMember=e==="member",x.isNewTempo=e==="tempo",ys("pos-ctype",e,["umum","member","tempo"]);const t=p("pos-customer-fields");t&&(e==="umum"?(x.name="",x.phone="",x.memberId=null,x.points=0,t.innerHTML='<input id="pos-cust-name" type="text" placeholder="Nama pembeli (opsional)" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)] focus:bg-white">'):e==="member"?(t.innerHTML=`
          <div class="space-y-2">
            <div class="flex gap-2">
              <div class="relative flex-1">
                <i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
                <input id="pos-cust-phone" type="text" placeholder="Ketik No. HP / Nama / ID Member..."
                  value="${x.isMember?b(x.phone||x.name||""):""}"
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
          </div>`,je().then(()=>{p("pos-cust-phone")?.value?.trim()&&xt()})):e==="tempo"&&(x.isMember=!1,ma("tempo"),t.innerHTML=`
          <div class="space-y-2">
            <input id="pos-cust-name" type="text" placeholder="Nama Pelanggan / Rekanan *" required class="w-full border border-amber-300 dark:border-amber-600 rounded-xl px-3 py-2 text-xs bg-amber-50/40 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none">
            <input id="pos-cust-phone" type="tel" placeholder="No. WhatsApp Pelanggan *" required class="w-full border border-amber-300 dark:border-amber-600 rounded-xl px-3 py-2 text-xs bg-amber-50/40 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none">
          </div>`))},ma=e=>{V=e,ys("pos-pay",e,["cash","qris","transfer","tempo"]),Ae(e),e==="transfer"&&(!m.banks||!m.banks.length)&&mt().then(t=>{V==="transfer"&&t&&t.length>0&&Ae("transfer")})},ba=e=>{de=Me(e);const t=j(),a=de-t,s=p("pos-change-display"),r=p("pos-change-label"),o=p("pos-change-box"),i=p("pos-process-btn");s&&(s.textContent=h(Math.abs(a))),r&&(r.textContent=a>=0?"Kembalian Uang Pembeli:":"Uang Masih Kurang:"),s&&(s.className=`text-base font-black ${a>=0?"text-emerald-700 dark:text-emerald-400":"text-rose-600 dark:text-rose-400"}`),o&&(o.className=`mt-2.5 p-3 rounded-2xl border transition-all flex items-center justify-between ${a>=0?"bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800":"bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800"}`),i&&V==="cash"&&(i.disabled=a<0,i.classList.toggle("opacity-50",a<0))},xa=e=>{const t=p("pos-paid-input");t&&(t.value=e,ba(e),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},mt=async()=>{if(Array.isArray(m.banks)&&m.banks.length>0)return m.banks;try{const e=await B.collection("freshmart").doc("cms_data").get();if(e.exists){const t=e.data();if(Array.isArray(t?.banks)&&t.banks.length>0)return m.banks=t.banks,m.banks}}catch{}return m.banks||[]},je=async()=>{if(m.customers&&m.customers.length>0)return m.customers;try{const e=await B.collection("freshmart").doc("cms_data").collection("customers").get();return m.customers=e.docs.map(t=>({...t.data(),id:t.id,_docId:t.id})),m.customers}catch{return m.customers||[]}},$s=(e,t)=>{if(!e||!t||!t.length)return[];const a=e.trim().toLowerCase(),s=a.replace(/\D/g,"");let r=s;r.startsWith("62")?r=r.slice(2):r.startsWith("0")&&(r=r.slice(1));const o=[],i=new Set;return t.forEach(l=>{if(!l)return;const d=String(l.id||l._docId||l.phone||"");if(i.has(d))return;const c=String(l.phone||"").replace(/\D/g,"");let n=c;n.startsWith("62")?n=n.slice(2):n.startsWith("0")&&(n=n.slice(1));const f=String(l.name||"").toLowerCase();let k=!1;r.length>=4&&n&&(n===r||n.endsWith(r)||r.endsWith(n)||c.includes(s))&&(k=!0),!k&&(d.toLowerCase()===a||d===s)&&(k=!0),!k&&a.length>=2&&f.includes(a)&&(k=!0),k&&(i.add(d),o.push(l))}),o},pr=async e=>{if(!e)return null;const t=e.trim(),a=t.replace(/\D/g,"");let s=a;s.startsWith("62")?s=s.slice(2):s.startsWith("0")&&(s=s.slice(1));const r=B.collection("freshmart").doc("cms_data").collection("customers"),i=Array.from(new Set([s?"62"+s:null,s?"0"+s:null,s||null,s?"+62"+s:null,a||null,t].filter(Boolean))).map(async c=>{try{const n=await r.doc(c).get();if(n&&n.exists)return{...n.data(),id:n.id,_docId:n.id}}catch{}return null}),d=(await Promise.all(i)).find(Boolean);if(d){m.customers||(m.customers=[]);const c=m.customers.findIndex(n=>String(n.id||n.phone)===String(d.id||d.phone));return c>-1?m.customers[c]=d:m.customers.push(d),d}try{const c=await r.limit(300).get();if(!c.empty){m.customers=c.docs.map(f=>({...f.data(),id:f.id,_docId:f.id}));const n=$s(e,m.customers);if(n.length>0)return n[0]}}catch{}return null},bt=()=>{const e=p("pos-member-result");if(!e||!x.isMember)return;const t=parseFloat(x.points)||0,a=typeof window.getMemberTier=="function"?window.getMemberTier(t):{badge:"MEMBER RESMI"},s=pt(),r=De(),o=Ot(),i=(m.rewards||[]).filter(d=>d.isActive!=="false"&&d.isActive!==!1&&(parseFloat(d.stock)||0)>0),l=Math.max(0,t-(te||0));e.innerHTML=`
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
              ${x.paylaterActive&&x.paylaterLimit>0?`
                <span class="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-700 flex items-center gap-1">
                  <i class="fa-solid fa-bolt text-emerald-500"></i> PayLater: ${h(Math.max(0,(x.paylaterLimit||0)-Math.max(0,x.paylaterUsed||0)))}
                </span>
              `:""}
            </div>
            <p class="text-xs font-black text-slate-800 dark:text-white truncate mt-0.5">${b(x.name||"Pelanggan Setia")}</p>
            <p class="text-[10px] text-slate-500 dark:text-slate-400 font-mono">${b(x.phone||"")}</p>
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

          ${te>0?`
          <div class="p-2.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-between gap-2">
            <div class="text-xs">
              <span class="font-bold text-emerald-700 dark:text-emerald-300">Potongan Belanja:</span>
              <span class="font-black font-mono text-emerald-600 dark:text-emerald-400 ml-1">-${h(r)}</span>
              <span class="text-[10px] text-slate-500 ml-1">(${te} Poin)</span>
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
            <p class="text-[10px] text-slate-400 italic">${oe()?"* Batas harga modal HPP atau saldo poin telah tercapai.":"* Batas diskon maksimum atau saldo poin telah tercapai."}</p>
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

          ${N?`
          <div class="p-2.5 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800/60 flex items-center justify-between gap-2">
            <div class="text-xs min-w-0">
              <span class="font-bold text-purple-800 dark:text-purple-300 block truncate">🎁 ${b(N.name)}</span>
              <span class="text-[10px] text-purple-600 dark:text-purple-400 font-mono">Ditukar dengan ${N.pointsCost} Poin</span>
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
                  ${b(d.name)} (${c} Poin) ${n?"":"[Poin Kurang]"}
                </option>
                `}).join("")}
            </select>
          </div>
          `}
        </div>
        `:""}
      </div>
      `:""}
    </div>`},Cs=e=>{const t=Ot();te=Math.min(t,Math.max(0,parseInt(e)||0)),bt(),Ae(V);const s=document.querySelector("#pos-pay-modal .text-xs.text-slate-500 .font-black");s&&(s.textContent=h(j()))},As=e=>{const t=(m.rewards||[]).find(o=>String(o.id)===String(e));if(!t)return;const a=parseFloat(t.pointsCost)||0,s=Math.max(0,(parseFloat(x.points)||0)-(te||0));if(a>s){w("Poin member tidak cukup untuk hadiah ini!","warning");return}N={id:t.id,name:t.name,pointsCost:a},w(`Hadiah "${t.name}" dipilih!`,"success"),bt(),Ae(V);const r=document.querySelector("#pos-pay-modal .text-xs.text-slate-500 .font-black");r&&(r.textContent=h(j()))},Os=()=>{N=null,bt(),Ae(V);const e=document.querySelector("#pos-pay-modal .text-xs.text-slate-500 .font-black");e&&(e.textContent=h(j()))},Ct=e=>{x.isMember=!0,x.name=e.name||"Member Toko",x.phone=e.phone||"",x.memberId=e.id||e._docId||e.phone,x.points=parseFloat(e.points)||0,te=0,N=null,x.paylaterActive=!!e.paylaterActive,x.paylaterLimit=Math.max(0,parseFloat(e.paylaterLimit)||0),x.paylaterUsed=Math.max(0,parseFloat(e.paylaterUsed)||0),x.paylaterDueDay=parseInt(e.paylaterDueDay,10)||5;const t=p("pos-cust-phone");t&&(t.value=e.phone||e.name||""),bt(),Ae(V),w(`Member terdeteksi: ${e.name} (${x.points} Poin)`,"success")},ha=e=>{const a=(m.customers||[]).find(s=>s&&String(s.id||s._docId||s.phone)===String(e));a&&Ct(a)},ga=()=>{x.isMember=!1,x.name="",x.phone="",x.memberId=null,x.points=0,te=0,N=null,x.paylaterActive=!1,x.paylaterLimit=0,x.paylaterUsed=0,x.paylaterDueDay=5;const e=p("pos-cust-phone");e&&(e.value="",e.focus());const t=p("pos-member-result");t&&(t.innerHTML=""),Ae(V)};let _a=null;const wa=()=>{clearTimeout(_a);const e=p("pos-cust-phone")?.value?.trim()||"";if(!e){if(!x.memberId){const s=p("pos-member-result");s&&(s.innerHTML="")}return}const t=e.replace(/\D/g,"");!(Array.isArray(m.customers)&&m.customers.length>0)&&t.length<10&&e.length<8||(_a=setTimeout(()=>{xt()},350))},xt=async()=>{const t=p("pos-cust-phone")?.value?.trim()||"";if(!t){w("Masukkan nomor HP atau nama member","warning");return}const a=p("pos-member-result"),s=p("pos-member-lookup-btn");s&&(s.disabled=!0,s.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i>'),a&&(a.innerHTML='<div class="p-2.5 text-center text-xs text-slate-400"><i class="fa-solid fa-spinner fa-spin mr-1.5"></i>Memeriksa database member...</div>');try{await je();const r=$s(t,m.customers||[]);if(r.length===1)Ct(r[0]);else if(r.length>1)a.innerHTML=`
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
            `;else{const o=await pr(t);if(o)Ct(o);else{x.isMember=!1,x.name="",x.memberId=null,x.points=0;const l=t.replace(/\D/g,"").length>=8;a.innerHTML=`
                  <div class="p-3 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs space-y-1">
                    <p class="font-bold flex items-center gap-1.5"><i class="fa-solid fa-circle-info"></i> Member Tidak Ditemukan</p>
                    <p class="text-[11px] text-amber-700 dark:text-amber-400">Tidak ada member ditemukan untuk "<b>${b(t)}</b>".</p>
                    ${l?"":`
                      <p class="text-[10px] text-amber-600/90 dark:text-amber-400/80 pt-1 border-t border-amber-200 dark:border-amber-800/60">
                        <i class="fa-solid fa-lightbulb mr-1 text-amber-500"></i><b>Tips Kasir:</b> Masukkan nomor WhatsApp/HP member (contoh: <code>0812...</code>) untuk verifikasi instan.
                      </p>
                    `}
                  </div>`}}}catch(r){console.error("[POS] Error lookupPosMember:",r),a&&(a.innerHTML=`<p class="text-xs text-rose-500 p-2">Gagal memeriksa data: ${b(r.message||"Koneksi error")}</p>`)}finally{s&&(s.disabled=!1,s.innerHTML='<i class="fa-solid fa-magnifying-glass mr-1.5"></i><span>Cek</span>')}},Ls=async()=>{if($.length===0){w("Keranjang kosong!","warning");return}const e=we();if(e>0&&j()<e){const n=oe()?`Transaksi ditolak! Total transaksi (${h(j())}) tidak boleh di bawah total harga modal HPP (${h(e)})!`:"Transaksi ditolak! Total transaksi melebihi batas diskon maksimum yang diizinkan sistem.";w(n,"error"),typeof window.triggerHaptic=="function"&&window.triggerHaptic("heavy");return}const t=x.isMember?x.name||"Member Toko":p("pos-cust-name")?.value?.trim()||"Pelanggan Umum",a=x.isMember?x.phone||p("pos-cust-phone")?.value?.trim()||"":p("pos-cust-phone")?.value?.trim()||"";if(x.isNewTempo&&!a){w("No. HP wajib diisi untuk tempo!","warning");return}if(V==="cash"&&(de=Me(p("pos-paid-input")?.value||0),de<j())){w(`Uang kurang! Minimal ${h(j())}`,"warning");return}x.name=t,x.phone=a;const s=V==="tempo"?Me(p("pos-dp-input")?.value||0):0,r=V==="transfer"&&p("pos-bank-sel")?.value||"",o=V==="tempo"&&!!(x.isMember&&x.paylaterActive&&p("pos-use-paylater")?.checked),i=o?Math.max(0,(x.paylaterLimit||0)-Math.max(0,x.paylaterUsed||0)):0;if(o){const n=j()>i?j()-i:0;if(s<n){w(`DP tidak mencukupi limit PayLater! Minimal DP: ${h(n)}`,"warning");return}}const l=o?Math.min(j()-s,i):0,d=p("pos-process-btn");d&&(d.disabled=!0,d.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i>Memproses...');const c=m.store?.useStock===!0||m.store?.useStock==="true";if(c)for(const n of $){const f=(m.products||[]).find(g=>String(g.id)===String(n.id));if(!f)continue;const k=parseFloat(n.qty)||0;if(n.variantName&&f.variants){const g=(f.variants||[]).find(v=>v.name===n.variantName),O=parseFloat(g&&g.stock!==void 0?g.stock:0);if(O<k){w(`Stok ${n.name} (${n.variantName}) tidak cukup! Sisa: ${O}`,"warning"),d&&(d.disabled=!1,d.innerHTML='<i class="fa-solid fa-check-circle mr-2"></i>Selesaikan Transaksi');return}}else{const g=parseFloat(f.stock!==void 0?f.stock:0);if(g<k){w(`Stok ${n.name} tidak cukup! Sisa: ${g}`,"warning"),d&&(d.disabled=!1,d.innerHTML='<i class="fa-solid fa-check-circle mr-2"></i>Selesaikan Transaksi');return}}}try{const n=lr(),f=typeof window.getCashierSession=="function"?window.getCashierSession():null,k=f?.name||m.store?.name||"Kasir",g=f?.uid||window.__currentAdminUid||"admin",O=new Date().toISOString(),v=et.firestore.FieldValue.serverTimestamp(),y=V==="tempo"?"Diproses":"Selesai",S=ee(),L=S&&S.status==="open"?S.id:null,D=S&&S.status==="open"?S.shiftNo||S.id:null;let F=null;if(o){const P=He||"30d",E=lt(),u=x.paylaterDueDay||5;F=at(l,P,{...E,dueDay:u})}const R={orderId:n,txId:n,source:"pos",channel:"pos",status:y,timestamp:v,dateString:O,dateMs:Date.now(),shiftId:L,shiftNo:D,cashier:g,cashierName:k,customer:{name:t,phone:a,wa:a,address:"Beli Langsung di Kasir (POS)",deliveryMethod:"takeaway",isMember:!!x.isMember,memberId:x.memberId||null},customerName:t,customerPhone:a,customerType:x.isMember?"Member":"Pelanggan Umum",items:$.map(P=>({id:P.id,name:P.name,price:parseFloat(P.price)||0,basePrice:parseFloat(P.basePrice||P.price)||0,hpp:P.hpp!=null?parseFloat(P.hpp):ze(P)||0,qty:parseFloat(P.qty)||1,discount:parseFloat(P.discount)||0,subtotal:parseFloat(P.subtotal)||0,variantName:P.variantName||"",isVariant:!!P.isVariant,isWholesale:!!P.isWholesale,effectivePrice:parseFloat(P.price)||0,poTime:P.poTime||"",unit:P.unit||"pcs"})),hasPO:$.some(P=>P.poTime&&String(P.poTime).trim()!==""),payment:{method:V,subtotal:ie(),productDiscount:Me(ce),shippingCost:0,pointDiscount:De(),ppnAmount:re().ppnAmount||0,dppAmount:re().dppAmount||ie(),ppnRate:re().ppnEnabled?re().ppnRate:0,ppnType:re().ppnEnabled?re().ppnType:"exclusive",ppnEnabled:!!re().ppnEnabled,ppnShowZero:!!re().ppnShowZero,ppnLabel:re().ppnLabel||"",taxNpwp:m.store?.taxNpwp||m.taxSettings?.npwp||"",grandTotal:j(),paid:V==="cash"?de:V==="tempo"?s:j(),change:V==="cash"?ps():0,bank:r,paymentStatus:o&&(F?F.grandTotal:0)<=0?"lunas":V==="tempo"?j()-s<=0?"lunas":"hutang":"lunas",subMethod:o?"paylater":V==="tempo"?"tempo":"",isPaylater:o,paylaterUsed:l,paylaterTenor:F?F.tenorKey:o?"30d":null,paylaterMonths:F?F.months:o?1:null,paylaterAdminFee:F?F.totalAdminFee:0,paylaterServiceFee:F?F.totalServiceFee:0,paylaterMonthlyInstallment:F?F.totalPerMonth:0,paylaterSchedule:F?F.schedule:[],dp:s,tempoDp:s,tempoBalance:o?F?F.grandTotal:Math.max(0,j()-s):V==="tempo"?Math.max(0,j()-s):0,tempoDueDate:F&&F.schedule?.length>0?F.schedule[F.schedule.length-1].dueDate:Date.now()+30*24*60*60*1e3,tempoPenaltyRate:1,tempoPenaltyStopped:!1},subtotal:ie(),globalDiscount:le(),pointDiscount:De(),pointsRedeemed:(te||0)+(N&&parseFloat(N.pointsCost)||0),claimedReward:N?{id:N.id,name:N.name,pointsCost:parseFloat(N.pointsCost)||0}:null,discountType:Y,discountVal:z,totalHpp:e,grossProfit:Math.max(0,j()-e),total:j(),isTempo:V==="tempo",pointsEarned:0,notes:""};if(x.isMember&&a){const E=(typeof window.calculateCartPoints=="function"?window.calculateCartPoints($,m.store):{totalPoints:0}).totalPoints||0;R.pointsEarned=E;const u=(te||0)+(N&&parseFloat(N.pointsCost)||0),T=E-u,A=Math.max(0,(parseFloat(x.points)||0)+T);R.finalMemberPoints=A;try{const C=a.replace(/\D/g,""),H=String(x.memberId||C);if(await B.collection("freshmart").doc("cms_data").collection("customers").doc(H).set({points:et.firestore.FieldValue.increment(T),lastOrderAt:O},{merge:!0}),m.customers){const _=m.customers.find(K=>K&&(String(K.id)===H||String(K.phone).replace(/\D/g,"")===C));_&&(_.points=A)}x.points=A}catch(C){console.warn("[POS] Gagal update poin member:",C)}if(N&&N.id)try{await B.collection("freshmart").doc("cms_data").collection("rewards").doc(String(N.id)).update({stock:et.firestore.FieldValue.increment(-1)});const C=(m.rewards||[]).find(H=>String(H.id)===String(N.id));C&&C.stock!==void 0&&(C.stock=Math.max(0,(parseInt(C.stock)||0)-1))}catch(C){console.warn("[POS] Gagal update stok reward:",C)}}if(R.paylaterLimitTracked=!1,o&&x.phone)try{const P=x.phone.replace(/\D/g,""),E=P.startsWith("0")?"62"+P.slice(1):P;if(await B.collection("freshmart").doc("cms_data").collection("customers").doc(E).set({paylaterUsed:et.firestore.FieldValue.increment(l)},{merge:!0}),m.customers){const T=m.customers.find(A=>A&&(String(A.id)===E||String(A.phone).replace(/\D/g,"")===P));T&&(T.paylaterUsed=Math.max(0,parseFloat(T.paylaterUsed)||0)+l)}x.paylaterUsed=Math.max(0,parseFloat(x.paylaterUsed)||0)+l,R.paylaterLimitTracked=!0}catch(P){console.warn("[POS] Gagal potong limit PayLater:",P)}let W=!1;if(typeof navigator<"u"&&!navigator.onLine)zt(R),W=!0,R._isSavedOffline=!0;else try{await B.collection("freshmart_orders").doc(n).set(R)}catch(P){console.warn("[POS] Gagal simpan order online, mengalihkan ke antrean offline:",P),zt(R),W=!0,R._isSavedOffline=!0}if(os(R),c){const P={};$.forEach(T=>{const A=T.id!=null?T.id.toString():null;if(!A)return;P[A]||(P[A]={main:0,variants:{}});const C=parseFloat(T.qty)||0;T.variantName?P[A].variants[T.variantName]=(P[A].variants[T.variantName]||0)+C:P[A].main+=C});const E=Object.keys(P),u=[];for(const T of E){const A=P[T],C=(m.products||[]).find(_=>String(_.id)===T);if(!C)continue;const H={};A.main>0&&(C.stock=Math.max(0,(parseFloat(C.stock)||0)-A.main),H.stock=C.stock,C.stock===0&&(C.isActive="false",H.isActive="false"),C.totalSold=(parseFloat(C.totalSold)||0)+A.main,H.totalSold=C.totalSold),Object.keys(A.variants).length>0&&C.variants&&(Object.keys(A.variants).forEach(_=>{const K=C.variants.findIndex(se=>se.name===_);K>-1&&(C.variants[K].stock=Math.max(0,(parseFloat(C.variants[K].stock)||0)-A.variants[_]),C.variants[K].stock===0&&(C.variants[K].isActive=!1),C.variants[K].totalSold=(parseFloat(C.variants[K].totalSold)||0)+A.variants[_])}),H.variants=C.variants);const ae=(m.products||[]).findIndex(_=>String(_.id)===T);ae>-1&&(m.products[ae]=C);try{await B.collection("freshmart").doc("cms_data").collection("products").doc(T).update(H),u.push(T)}catch(_){console.warn("[POS] Gagal update stok produk di Firestore:",T,_)}}if(u.length>0)try{await B.collection("freshmart").doc("cms_data").update({lastUpdate:et.firestore.FieldValue.increment(1),updateType:"stock_change",updatedProductIds:u})}catch{}}Bt(),Xe(!0);const J={...R};$=[],ce=0,z=0,Y="rp",te=0,N=null,Q(),Z(),ur(J),W&&w(`Mode Offline: Transaksi #${J.txId.slice(-6)} tersimpan di antrean lokal. Otomatis sinkron saat online.`,"warning")}catch(n){console.error("[POS] Error:",n),w("Gagal menyimpan transaksi. Coba lagi.","error"),d&&(d.disabled=!1,d.innerHTML='<i class="fa-solid fa-check-circle mr-2"></i>Selesaikan Transaksi')}},ur=e=>{window._lastPOSTx=e;try{localStorage.setItem("freshmart_last_pos_tx",JSON.stringify(e))}catch{}const t=e.payment.method==="cash"?`<p class="text-sm text-slate-500">Kembalian: <span class="font-black text-emerald-600">${h(e.payment.change)}</span></p>`:e.payment.method==="tempo"?'<p class="text-sm text-amber-600 font-semibold">⚠️ Dicatat sebagai Piutang Tempo</p>':`<p class="text-sm text-slate-500">Metode: ${e.payment.method.toUpperCase()}</p>`,a=!!document.getElementById("pos-admin-container")||typeof window.cTab=="function"&&window.cTab()==="pos";document.body.insertAdjacentHTML("beforeend",`
    <div id="pos-success-modal" class="fixed inset-0 z-[9999] flex items-center justify-center p-4" style="background:rgba(15,23,42,0.75)">
      <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-sm border border-slate-200/80 dark:border-slate-800">
        <div class="p-6 text-center">
          <div class="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-4"><i class="fa-solid fa-circle-check text-emerald-500 text-3xl"></i></div>
          <h2 class="font-black text-lg text-slate-900 dark:text-white mb-1">Transaksi Berhasil!</h2>
          <p class="text-xs text-slate-400 mb-2">#${b(e.txId)}</p>
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
            <span>Klaim Hadiah: ${b(e.claimedReward.name)}</span>
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
    </div>`),(typeof Ue=="function"?Ue():{}).autoPrintOrder&&typeof window.printPOSReceiptDirect=="function"&&setTimeout(()=>{window.printPOSReceiptDirect(e)},300)},Ds=e=>{ht(e)},ht=e=>{window._lastPOSTx=e;try{localStorage.setItem("freshmart_last_pos_tx",JSON.stringify(e))}catch{}if(typeof window.printPOSReceiptDirect=="function"){window.printPOSReceiptDirect(e);return}const t=typeof Ue=="function"?Ue():{paperSize:"58mm"},a=typeof window.getPaperCols=="function"?window.getPaperCols(t.paperSize):t.paperSize==="80mm"?48:32,s=a>=40,r=t.headerText||m.store?.name||"TOKO PUTRI",o=m.store?.wa||"",i=m.store?.address||"",l=t.footerText||"Terima Kasih Atas Kunjungan Anda!",d=typeof window.formatCompactDate=="function"?window.formatCompactDate(e.dateMs||Date.now(),s):new Date(e.dateMs||Date.now()).toLocaleString("id-ID"),c=(e.items||[]).map(f=>{const k=f.variantName?` (${b(f.variantName)}${f.colorCode?" "+b(f.colorCode):""})`:"",g=f.effectivePrice||f.price||0,O=f.subtotal!==void 0?f.subtotal:parseFloat(f.qty||1)*g;return`
        <tr>
            <td colspan="2" style="padding-top:4px;font-weight:bold;word-break:break-word;">${b(f.name)}${k}${f.poTime?" [PO]":""}</td>
        </tr>
        <tr>
            <td style="padding-bottom:3px;color:#475569;font-size:10.5px;">&nbsp;&nbsp;${U(f.qty)} ${b(f.unit||"pcs")} x ${Math.round(g).toLocaleString("id-ID")}</td>
            <td style="text-align:right;padding-bottom:3px;white-space:nowrap;font-weight:bold;">${Math.round(O).toLocaleString("id-ID")}</td>
        </tr>
        ${f.discount&&f.discount>0?`<tr><td style="padding-bottom:2px;color:#e11d48;font-size:10px;">&nbsp;&nbsp;(Diskon)</td><td style="text-align:right;color:#e11d48;font-size:10px;">-${Math.round(f.discount).toLocaleString("id-ID")}</td></tr>`:""}
        ${f.poTime?`<tr><td colspan="2" style="font-size:9.5px;font-style:italic;color:#64748b;">&nbsp;&nbsp;* Estimasi PO: ${b(f.poTime)}</td></tr>`:""}
        `}).join(""),n=e.discountType==="percent"&&e.discountVal?`Diskon (${e.discountVal}%)`:"Diskon Toko";document.getElementById("pos-receipt-fallback-modal")?.remove(),document.body.insertAdjacentHTML("beforeend",`
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
                ${e.payment?.taxNpwp||m.store?.taxNpwp?`<div class="text-center text-[9px] font-mono text-slate-500">NPWP: ${b(e.payment?.taxNpwp||m.store.taxNpwp)}</div>`:""}
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <div class="flex justify-between"><span>No : <b>#${b(e.txId)}</b></span><span>${b(d)}</span></div>
                <div class="flex justify-between"><span>Kasir: ${b(e.cashierName||"Kasir")}</span><span>Plg: ${b(e.customer?.name||"Umum")}</span></div>
                ${e.customer?.phone?`<div>HP  : ${b(e.customer.phone)}</div>`:""}
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <table class="w-full text-[11px] border-collapse">
                    ${c}
                </table>
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <div class="flex justify-between"><span>Subtotal</span><span>${h(e.subtotal)}</span></div>
                ${(e.globalDiscount||0)>0?`<div class="flex justify-between text-rose-500 font-bold"><span>${n}</span><span>- ${h(e.globalDiscount)}</span></div>`:""}
                ${(e.pointDiscount||0)>0?`<div class="flex justify-between text-emerald-600 font-bold"><span>Diskon Poin (${e.pointsRedeemed||0} Pts)</span><span>- ${h(e.pointDiscount)}</span></div>`:""}
                ${e.claimedReward?`<div class="flex justify-between text-purple-600 font-bold"><span>[Klaim Hadiah]</span><span class="truncate max-w-[150px]">${b(e.claimedReward.name)}</span></div>`:""}
                ${(()=>{const f=Es(e);if(!f.hasPpn)return"";const k=f.ppnAmount>0?`${f.isInclusive?"":"+"}${h(f.ppnAmount)}`:"Rp 0";return`
                    <div class="flex justify-between text-slate-500"><span>DPP</span><span>${h(f.dppAmount)}</span></div>
                    <div class="flex justify-between font-bold text-amber-600 dark:text-amber-400"><span>${b(f.ppnLabel)}</span><span>${k}</span></div>
                    `})()}
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
                <div class="text-center text-[10px] text-slate-400 my-1">${b(l)}</div>
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
    </div>`)},ka=()=>{if(window._lastPOSTx&&typeof window.printPOSReceiptDirect=="function"){window.printPOSReceiptDirect(window._lastPOSTx);return}const e=p("pos-receipt-paper-box");e&&(typeof window.renderThermalDOMAndPrint=="function"?window.renderThermalDOMAndPrint(e.innerHTML):window.print())},va=()=>{let e=window._lastPOSTx;if(!e)try{const t=localStorage.getItem("freshmart_last_pos_tx");t&&(e=JSON.parse(t))}catch{}if(!e&&Array.isArray(window.appData?.orders)&&window.appData.orders.length>0){const t=window.appData.orders.filter(a=>a.source==="pos"||a.isPos||a.id&&a.id.startsWith("POS-"));e=t.length>0?t[0]:window.appData.orders[0]}if(!e){w("Belum ada transaksi terakhir untuk dicetak ulang.","info");return}w(`Mencetak ulang struk #${e.txId||e.id||""}...`,"info"),ht(e)},Rt=(e,t=!1)=>{const a=typeof e=="string"?e:e?.value||"";kt&&(clearTimeout(kt),kt=null);const s=()=>{ue=a,Qe=1,document.querySelectorAll("#pos-search-input").forEach(r=>{r.value!==ue&&(r.value=ue)}),document.querySelectorAll(".pos-search-clear-btn").forEach(r=>{ue&&ue.trim().length>0?(r.classList.remove("hidden"),r.classList.add("flex")):(r.classList.add("hidden"),r.classList.remove("flex"))}),Z()};t?s():kt=setTimeout(s,130)},ya=()=>{document.querySelectorAll("#pos-search-input").forEach(t=>{t.value=""}),Rt("",!0);const e=p("pos-search-input");e&&e.focus()},Sa=()=>{Qe+=1,Z(!0)},Ee=()=>{try{const e=localStorage.getItem(ds);return e?JSON.parse(e):[]}catch(e){return console.error("[POS Offline] Gagal baca antrean offline:",e),[]}},Pa=e=>{try{localStorage.setItem(ds,JSON.stringify(e||[]))}catch(t){console.error("[POS Offline] Gagal simpan antrean offline:",t)}},zt=e=>{const t=Ee(),a={...e,_offlineQueuedAt:new Date().toISOString()},s=t.findIndex(r=>(r.id||r.txId)===(e.id||e.txId));s>=0?t[s]=a:t.push(a),Pa(t),xe()};let _t=!1;const nt=async(e=!1)=>{if(_t)return;if(typeof navigator<"u"&&!navigator.onLine){e||w("Koneksi internet offline. Sinkronisasi ditunda sampai koneksi pulih.","warning");return}const t=Ee();if(!t||t.length===0){xe(),e||w("Semua transaksi kasir sudah tersinkronisasi.","success");return}_t=!0,xe(!0),e||w(`Menyinkronkan ${t.length} transaksi offline ke server...`,"info");let a=0;const s=[];for(const r of t)try{const o={...r},i=o.id||o.txId;delete o._isSavedOffline,delete o._offlineQueuedAt,await B.collection("freshmart_orders").doc(i).set(o,{merge:!0}),a++}catch(o){console.error("[POS Offline] Gagal sinkronkan transaksi:",r.id||r.txId,o),s.push(r)}Pa(s),_t=!1,xe(),a>0&&w(`Berhasil menyinkronkan ${a} transaksi kasir ke cloud!`,"success"),s.length>0&&w(`${s.length} transaksi belum berhasil disinkronkan. Akan dicoba lagi otomatis.`,"warning")},xe=(e=!1)=>{const a=Ee().length;document.querySelectorAll(".pos-offline-sync-container").forEach(s=>{if(a===0&&!e){s.innerHTML="",s.classList.add("hidden");return}s.classList.remove("hidden"),e?s.innerHTML=`
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
            `})},Tt=e=>{document.querySelectorAll(".pos-network-status-badge").forEach(t=>{e?(t.className="pos-network-status-badge hidden sm:inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-lg border border-emerald-500/30",t.innerHTML='<span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span><span>Online</span>'):(t.className="pos-network-status-badge inline-flex items-center gap-1.5 text-[10px] font-bold text-rose-300 bg-rose-950/60 px-2.5 py-1 rounded-lg border border-rose-500/40 animate-pulse",t.innerHTML='<i class="fa-solid fa-wifi-slash text-[10px] text-rose-400"></i><span>Offline</span>')})};let Ka=!1;const gt=()=>{const e=typeof navigator<"u"?navigator.onLine:!0;Tt(e),xe(),!Ka&&(Ka=!0,window.addEventListener("online",()=>{Tt(!0),w("Koneksi internet terhubung kembali. Memulai auto-sync transaksi kasir...","info"),nt(!0)}),window.addEventListener("offline",()=>{Tt(!1),w("Koneksi terputus. Mode POS Offline aktif (transaksi kasir aman di antrean lokal).","warning")}),e&&Ee().length>0&&setTimeout(()=>{nt(!0)},2500))},Fs=({isStorefront:e})=>{const a=(typeof window.getCashierSession=="function"?window.getCashierSession():null)?.name||(e?"Kasir":"Admin Seller"),s=b(m.store?.name||"Toko Putri");return`
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
                <span class="pos-network-status-badge hidden sm:inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-lg border border-emerald-500/30">
                    <span class="relative flex h-2 w-2">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span>Online</span>
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
                    <span class="relative flex h-2 w-2">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span>Online</span>
                </span>
                <div class="pos-offline-sync-container hidden items-center shrink-0"></div>
                <span class="hidden md:inline-flex items-center gap-1.5 text-[10px] font-bold text-slate-500 dark:text-slate-400 whitespace-nowrap">
                    <i class="fa-solid fa-barcode text-xs"></i> Scanner Otomatis
                </span>
                <div id="pos-shift-btn-admin" class="flex items-center shrink-0"></div>
                <div id="pos-held-btn-admin" class="flex items-center shrink-0"></div>
                <button onclick="if(typeof window.openPrinterSettingsModal==='function') window.openPrinterSettingsModal();" class="h-8 px-2 sm:px-2.5 rounded-xl bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold inline-flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap shrink-0 shadow-2xs active:scale-95" title="Pengaturan Printer Kasir & Thermal">
                    <i class="fa-solid fa-print text-xs text-sky-500"></i>
                    <span class="hidden sm:inline">Printer</span>
                </button>
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
                            <button id="pos-view-btn-grid" onclick="window.setPOSViewMode('grid')" class="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer ${Pe==="grid"?"text-white shadow-xs":"text-slate-500 hover:text-slate-800 dark:text-slate-400"}" style="${Pe==="grid"?"background:linear-gradient(135deg, var(--color-primary-light,#e1b858) 0%, var(--color-primary,#c59b27) 60%, var(--color-primary-dark,#a87f1b) 100%)":""}" title="Tampilan Grid Foto">
                                <i class="fa-solid fa-grip"></i>
                            </button>
                            <button id="pos-view-btn-list" onclick="window.setPOSViewMode('list')" class="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer ${Pe==="list"?"text-white shadow-xs":"text-slate-500 hover:text-slate-800 dark:text-slate-400"}" style="${Pe==="list"?"background:linear-gradient(135deg, var(--color-primary-light,#e1b858) 0%, var(--color-primary,#c59b27) 60%, var(--color-primary-dark,#a87f1b) 100%)":""}" title="Tampilan List Baris Kompak">
                                <i class="fa-solid fa-list-ul"></i>
                            </button>
                        </div>
                    </div>
                    <!-- Kategori Chips -->
                    <div id="pos-cat-filter" class="flex gap-1.5 overflow-x-auto hide-scrollbar pb-0.5"></div>
                    <div id="pos-subcat-filter" class="w-full hidden"></div>
                    <!-- Keyboard Shortcuts Quick Bar (Hanya Desktop >= sm) -->
                    <div class="hidden sm:flex items-center justify-between text-[10px] text-slate-400 dark:text-slate-500 pt-1.5 border-t border-slate-100 dark:border-slate-800/80 px-0.5 select-none">
                        <div class="flex items-center gap-1.5 overflow-x-auto hide-scrollbar py-0.5">
                            <button type="button" onclick="document.getElementById('pos-search-input')?.focus()" class="pos-shortcut-chiclet" title="Cari produk [F2]"><kbd class="pos-keycap">F2</kbd><span>Cari</span></button>
                            <button type="button" onclick="window.openPayModal()" class="pos-shortcut-chiclet" title="Proses pembayaran [F4]"><kbd class="pos-keycap">F4</kbd><span>Bayar</span></button>
                            <button type="button" onclick="window.reprintLastPOSReceipt && window.reprintLastPOSReceipt()" class="pos-shortcut-chiclet" title="Cetak ulang struk terakhir [F5]"><kbd class="pos-keycap">F5</kbd><span>Ulang</span></button>
                            <button type="button" onclick="window.posHoldCurrentCart()" class="pos-shortcut-chiclet" title="Tahan transaksi [F6]"><kbd class="pos-keycap">F6</kbd><span>Tahan</span></button>
                            <button type="button" onclick="document.querySelector('.pos-disc-val-input')?.focus()" class="pos-shortcut-chiclet" title="Fokus input diskon [F7]"><kbd class="pos-keycap">F7</kbd><span>Diskon</span></button>
                            <button type="button" onclick="window.openPOSHeldModal()" class="pos-shortcut-chiclet" title="Buka transaksi tertahan [F8]"><kbd class="pos-keycap">F8</kbd><span>Tertahan</span></button>
                            <button type="button" onclick="window.openPOSCameraScanner()" class="pos-shortcut-chiclet" title="Scan kamera [F9]"><kbd class="pos-keycap">F9</kbd><span>Kamera</span></button>
                            <button type="button" onclick="window.posClearSearch()" class="pos-shortcut-chiclet" title="Batal / Tutup [Esc]"><kbd class="pos-keycap">Esc</kbd><span>Batal</span></button>
                        </div>
                    </div>
                </div>

                <!-- Product Catalog Container -->
                <div id="pos-catalog-grid" class="${Pe==="list"?"pos-catalog-list-mode":"pos-catalog-grid-mode"}"></div>
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
                    <!-- Breakdown Ringkasan & Diskon (Hanya muncul saat keranjang ada isi agar bebas sesak saat kosong) -->
                    <div class="pos-cart-breakdown space-y-2.5" style="display:none">
                        <div class="flex justify-between text-xs text-slate-500 font-medium">
                            <span>Subtotal Item</span>
                            <span class="pos-subtotal-target font-bold text-slate-800 dark:text-slate-200">Rp 0</span>
                        </div>
                        <div class="pos-tax-breakdown-row flex justify-between text-xs font-medium" style="display:none">
                            <span class="pos-tax-label-target text-slate-500">PPN (11%)</span>
                            <span class="pos-tax-amt-target font-bold font-mono text-amber-600 dark:text-amber-400">Rp 0</span>
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
                    </div>
                    <div class="flex justify-between items-center pt-2.5 border-t border-slate-200/80 dark:border-slate-800">
                        <div>
                            <p class="text-[9px] uppercase tracking-wider font-bold text-slate-400">Total Akhir</p>
                            <p class="pos-total-target text-2xl font-black font-mono tracking-tight" style="color:var(--color-primary)">Rp 0</p>
                        </div>
                        <span class="inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25">
                            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Siap Bayar
                        </span>
                    </div>
                    <button onclick="window.openPayModal()" class="pos-pay-btn-target w-full py-3.5 rounded-2xl text-white font-black text-sm shadow-xl disabled:opacity-40 disabled:cursor-not-allowed active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer hover:brightness-105" style="background:linear-gradient(135deg, var(--color-primary-light,#e1b858) 0%, var(--color-primary,#c59b27) 50%, var(--color-primary-dark,#a87f1b) 100%);box-shadow:0 4px 14px rgba(var(--color-primary-rgb),0.35)">
                        <span class="pos-keycap-on-btn">F4</span>
                        <i class="fa-solid fa-cash-register"></i>
                        <span class="btn-text">PROSES PEMBAYARAN</span>
                    </button>
                </div>
            </div>
        </div>

        <!-- FLOATING CART BAR (Khusus Mobile < lg saat keranjang ada isi with safe-area) -->
        <div id="pos-mobile-floating-bar" class="lg:hidden fixed bottom-[max(0.75rem,env(safe-area-inset-bottom))] left-3 right-3 z-40 transition-all duration-300 transform translate-y-32 opacity-0 pointer-events-none">
            <div class="backdrop-blur-xl bg-slate-900/95 dark:bg-slate-950/95 text-white p-3 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.35)] flex items-center justify-between border border-white/15 dark:border-white/10 cursor-pointer active:scale-[0.99] transition-all" onclick="window.openPOSCartDrawer()">
                <div class="flex items-center gap-2.5">
                    <div class="relative w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm font-bold shadow-md shrink-0" style="background:linear-gradient(135deg, var(--color-primary-light,#34d399), var(--color-primary,#10b981))">
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
                <button onclick="event.stopPropagation(); window.openPOSCartDrawer();" class="px-4 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider text-white shadow-lg active:scale-95 transition-all flex items-center gap-1.5 shrink-0" style="background:linear-gradient(135deg, var(--color-primary-light,#34d399), var(--color-primary,#10b981)); box-shadow:0 4px 14px rgba(var(--color-primary-rgb),0.35)">
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
                    <!-- Breakdown Ringkasan & Diskon Mobile (Hanya muncul saat keranjang ada isi agar bebas sesak saat kosong) -->
                    <div class="pos-cart-breakdown space-y-2" style="display:none">
                        <div class="flex justify-between text-xs text-slate-500 font-medium">
                            <span>Subtotal Item</span>
                            <span class="pos-subtotal-target font-bold text-slate-700 dark:text-slate-200">Rp 0</span>
                        </div>
                        <div class="pos-tax-breakdown-row flex justify-between text-xs font-medium" style="display:none">
                            <span class="pos-tax-label-target text-slate-500">PPN (11%)</span>
                            <span class="pos-tax-amt-target font-bold font-mono text-amber-600 dark:text-amber-400">Rp 0</span>
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
                    </div>
                    <div class="flex justify-between items-center pt-1.5 border-t border-slate-200/80 dark:border-slate-800">
                        <span class="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-white">Total Tagihan</span>
                        <span class="pos-total-target text-base sm:text-lg font-black font-mono" style="color:var(--color-primary)">Rp 0</span>
                    </div>
                    <button onclick="window.closePOSCartDrawer(); window.openPayModal();" class="pos-pay-btn-target w-full py-3.5 rounded-2xl text-white font-black text-xs sm:text-sm shadow-xl disabled:opacity-40 disabled:cursor-not-allowed active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer hover:brightness-105" style="background:linear-gradient(135deg, var(--color-primary-light,#e1b858) 0%, var(--color-primary,#c59b27) 50%, var(--color-primary-dark,#a87f1b) 100%);box-shadow:0 4px 14px rgba(var(--color-primary-rgb),0.35)">
                        <span class="pos-keycap-on-btn">F4</span>
                        <i class="fa-solid fa-cash-register"></i>
                        <span class="btn-text">LANJUT KE PEMBAYARAN</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
    `},js=()=>{try{ue="",be="",Te="",$=[],ce=0;const e=p("view-pos-cashier");if(!e)return;const t=p("admin-content"),a=p("view-admin");t&&a?.classList.contains("admin-pos-mode")&&(t.innerHTML="",a.classList.remove("admin-pos-mode")),e.innerHTML=Fs({isStorefront:!0}),Z(),Q(),Ne(),ct(),gt(),xe(),bs(),fs(),je(),Is(),typeof Ce=="function"?Ce().then(s=>{(!s||s.status!=="open")&&ne()}).catch(()=>{Le()||ne()}):setTimeout(()=>{Le()||ne()},350)}catch(e){console.error("Gagal render POS Storefront:",e)}},Hs=()=>{try{ue="",be="",Te="";const e=p("view-admin");e&&e.classList.add("admin-pos-mode");const t=p("view-pos-cashier");if(t&&(t.innerHTML=""),!p("admin-content"))return;_s("admin-content",`
            <div class="h-full w-full flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-md bg-white dark:bg-slate-900 min-h-0">
                ${Fs({isStorefront:!1})}
            </div>
        `),Z(),Q(),Ne(),ct(),gt(),xe(),bs(),fs(),je(),Is(),typeof Ce=="function"?Ce().then(s=>{(!s||s.status!=="open")&&ne()}).catch(()=>{Le()||ne()}):setTimeout(()=>{Le()||ne()},350)}catch(e){console.error("Gagal render POS Admin:",e);const t=p("admin-content");t&&(t.innerHTML=`
                <div class="h-full w-full flex flex-col items-center justify-center p-6 text-center">
                    <i class="fa-solid fa-triangle-exclamation text-4xl text-amber-500 mb-3"></i>
                    <h3 class="text-base font-bold text-slate-800 dark:text-white">Gagal Membuka Terminal POS</h3>
                    <p class="text-xs text-slate-500 mt-1 max-w-sm">Terjadi kendala saat memuat terminal. Silakan coba muat ulang.</p>
                    <button onclick="window.renderPOS()" class="mt-4 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-xs font-bold transition-all shadow-md">
                        <i class="fa-solid fa-arrows-rotate mr-1.5"></i>Muat Ulang Terminal
                    </button>
                </div>
            `)}},Is=()=>{window.setPOSViewMode=ra,window.posAddToCart=Dt,window.posAddToCartQty=xs,window.addToCartPOSWithVariant=hs,window.posUpdateQty=gs,window.posSetQty=ws,window.posFormatQty=U,window.posFQty=ot,window.posSetItemDisc=ks,window.togglePOSItemDiscInput=cs,window.posRemoveItem=Ft,window.posClearCart=vs,window.openPayModal=fa,window.closePayModal=Bt,window.getPOSCart=()=>$,window.getCartTotalHpp=we,window.setPosCustomerType=Ms,window.setPosPayMethod=ma,window.updatePosChange=ba,window.posSetQuickCash=xa,window.ensureCustomersLoaded=je,window.ensureBanksLoaded=mt,window.lookupPosMember=xt,window.debouncedLookupPosMember=wa,window.selectPosMember=ha,window.resetPosMember=ga,window.processPOSTx=Ls,window.setPosPointsRedeemed=Cs,window.selectPosReward=As,window.deselectPosReward=Os,window.posMemberPointsDiscount=De,window.getMaxRedeemablePoints=Ot,window.getPointValue=pt,window.printPOSReceipt=Ds,window.previewPOSReceiptThenPrint=ht,window.posSetGlobalDisc=e=>{it(e)},window.posSetDiscountType=Ta,window.posSetDiscountVal=it,window.posApplyQuickDiscount=Ma,window.openPOSCameraScanner=Nt,window.closePOSCameraScanner=Fe,window.togglePOSScannerFacing=Ca,window.togglePOSScannerTorch=$a,window.togglePOSScannerMode=Aa,window.posProcessManualBarcode=Oa,window.posSearchScannedCode=La,window.executePOSPrintDirect=ka,window.getActiveShift=ee,window.isShiftActive=Le,window.syncActiveShiftFromCloud=Ce,window.openPOSOpenShiftModal=ne,window.closePOSOpenShiftModal=Re,window.openPOSShiftModal=pe,window.openPOSShiftSummaryModal=pe,window.closePOSShiftSummaryModal=dt,window.openPOSCloseShiftModal=ea,window.closePOSCloseShiftModal=Je,window.renderShiftHeaderBadge=ct,window.printShiftSettlementReceipt=ta,window.executeShiftPrintDirect=aa,window.posCatFilter=e=>{be=e,Te="",Qe=1,Z()},window.posSubCatFilter=e=>{Te=e,Qe=1,Z()},window.posSearchFn=Rt,window.posClearSearch=ya,window.posLoadMoreProducts=Sa,window.posSyncOfflineTransactions=nt,window.renderOfflineQueueBadge=xe,window.initPOSNetworkMonitoring=gt,window.getOfflineTxQueue=Ee,window.posRenderCatalog=Z,window.posRenderCart=Q,window.refreshPOSCatalog=()=>{try{Z()}catch(e){console.warn("refreshPOSCatalog error:",e)}},window.openPOSCartDrawer=ua,window.closePOSCartDrawer=Xe,window.playCashierBeep=ke,window.openPOSHistory=()=>{typeof window.openAdminTab=="function"?window.openAdminTab("orders"):typeof window.showToast=="function"&&window.showToast("Semua transaksi kasir terpusat di menu Pesanan CMS Admin")},window.destroyBarcodeListener=Lt,window.playCashierChime=ut,window.posHoldCurrentCart=Ht,window.closePOSHoldPrompt=It,window.posConfirmHoldCart=oa,window.openPOSHeldModal=ft,window.closePOSHeldModal=Ze,window.posRecallHeldCart=na,window.posHoldCurrentAndRecall=la,window.posOverwriteAndRecall=da,window.posDeleteHeldCart=ca,window.posExecuteDeleteHeld=pa,window.renderHeldBadges=Ne},Ta=e=>{Y=e==="percent"?"percent":"rp",ce=le(),Q()},it=e=>{const t=Math.max(0,parseFloat(e)||0),a=we(),s=ie(),r=a>0?Math.max(0,s-a):s;if(Y==="percent"){const o=Math.min(100,t),i=Math.round(s*o/100);if(a>0&&i>r){const l=s>0?Math.floor(r/s*100):0,d=oe()?`Diskon ${o}% ditolak karena melebihi batas modal toko (Total HPP ${h(a)})! Diskon maksimal: ${l}% (${h(r)})`:`Diskon ${o}% ditolak! Persentase diskon melebihi batas maksimum transaksi yang diizinkan sistem.`;w(d,"warning"),z=l,ce=Math.round(s*l/100),Q(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("heavy");return}z=o,ce=i}else{const o=t;if(a>0&&o>r){const i=oe()?`Diskon ditolak! Total transaksi tidak boleh di bawah harga modal toko (Total HPP ${h(a)}). Maksimal diskon: ${h(r)}`:"Diskon ditolak! Nominal diskon melebihi batas maksimum transaksi yang diizinkan sistem.";w(i,"warning"),z=r,ce=r,Q(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("heavy");return}z=o,ce=o}Q()},Ma=(e,t)=>{t&&(Y=t),it(e),ke()},Nt=async()=>{if(p("pos-camera-scanner-modal"))return;typeof window.pushModalHistory=="function"&&window.pushModalHistory("posCameraScanner"),document.body.insertAdjacentHTML("beforeend",`
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
    </div>`),await Bs()},Bs=async()=>{const e=p("pos-camera-video");if(e)try{const t={video:{facingMode:{ideal:Qt},width:{ideal:1280},height:{ideal:720}},audio:!1},a=await navigator.mediaDevices.getUserMedia(t);Be=a,e.srcObject=a,await e.play();const s=a.getVideoTracks();if(s.length>0){Oe=s[0];const r=Oe.getCapabilities?Oe.getCapabilities():{},o=p("pos-scanner-torch-btn");o&&(r.torch?o.classList.remove("hidden"):o.classList.add("opacity-40"))}if(typeof window.BarcodeDetector<"u")try{vt=new BarcodeDetector({formats:["ean_13","ean_8","upc_a","upc_e","code_128","code_39","code_93","qr_code","data_matrix"]})}catch{vt=null}Ve&&clearInterval(Ve),Ve=setInterval(async()=>{if(!(!vt||!e||e.readyState<2))try{const r=await vt.detect(e);if(r&&r.length>0){const o=r[0].rawValue?.trim();o&&Rs(o)}}catch{}},180)}catch(t){console.warn("[POS Scanner] Gagal akses kamera:",t);const a=p("pos-scanner-status-pill");a&&(a.innerHTML='<span class="text-rose-400 font-bold"><i class="fa-solid fa-triangle-exclamation mr-1"></i>Kamera tidak dapat diakses</span>'),w("Izin kamera ditolak atau kamera sedang digunakan aplikasi lain.","warning")}},Rs=e=>{const t=Date.now();if(e===Na&&t-Ea<1800)return;Na=e,Ea=t;const a=e.toLowerCase(),s=(m.products||[]).find(c=>c&&c.isActive!=="false"&&c.isActive!==!1&&(c.barcode&&c.barcode.toLowerCase()===a||c.sku&&c.sku.toLowerCase()===a||c.id&&String(c.id).toLowerCase()===a)),r=p("pos-scanner-reticle"),o=p("pos-scanner-status-pill"),i=p("pos-last-scanned-banner"),l=p("pos-last-scanned-text"),d=p("pos-last-scanned-price");if(s){if(r&&(r.classList.add("border-emerald-300","scale-105","bg-emerald-500/20"),setTimeout(()=>{r.classList.remove("border-emerald-300","scale-105","bg-emerald-500/20")},300)),ke(),s.variants&&s.variants.length>0){o&&(o.innerHTML='<span class="text-amber-300 font-bold">Buka pilihan varian...</span>'),Fe(),ls().then(()=>{typeof window.openPOSVariantSheet=="function"&&window.openPOSVariantSheet(s.id)});return}Dt(s.id)?(i&&l&&d&&(l.textContent=s.name,d.textContent=h(parseFloat(s.price)||0),i.classList.remove("hidden")),o&&(o.innerHTML=`<span class="text-emerald-300 font-black"><i class="fa-solid fa-check mr-1"></i>${b(s.name)} (+1)</span>`,setTimeout(()=>{o&&(o.innerHTML='<span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span><span>Menunggu barcode...</span>')},1500)),Pt||(Fe(),w(`Ditambahkan: ${s.name}`,"success"))):o&&(o.innerHTML=`<span class="text-rose-400 font-bold"><i class="fa-solid fa-ban mr-1"></i>Stok "${b(s.name)}" Habis</span>`,setTimeout(()=>{o&&(o.innerHTML='<span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span><span>Menunggu barcode...</span>')},2e3))}else r&&(r.classList.add("border-rose-500","bg-rose-500/20"),setTimeout(()=>{r.classList.remove("border-rose-500","bg-rose-500/20")},400)),o&&(o.innerHTML=`<span class="text-rose-400 font-bold"><i class="fa-solid fa-xmark mr-1"></i>Barcode "${e}" tidak ditemukan</span>`)},Fe=(e=!1)=>{if(Ve&&(clearInterval(Ve),Ve=null),Be){try{Be.getTracks().forEach(a=>a.stop())}catch{}Be=null}Oe=null,tt=!1;const t=p("pos-camera-scanner-modal");t&&(!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("posCameraScanner",!1,()=>t.remove()):t.remove())},$a=async()=>{if(Oe)try{if(!(Oe.getCapabilities?Oe.getCapabilities():{}).torch){w("Lampu senter (torch) tidak didukung kamera ini.");return}tt=!tt,await Oe.applyConstraints({advanced:[{torch:tt}]});const t=p("pos-scanner-torch-btn");t&&(tt?(t.classList.add("bg-amber-500","text-white"),t.classList.remove("bg-slate-800","text-slate-300")):(t.classList.remove("bg-amber-500","text-white"),t.classList.add("bg-slate-800","text-slate-300")))}catch(e){console.warn("Gagal toggle torch:",e)}},Ca=async()=>{Qt=Qt==="environment"?"user":"environment",Be&&(Be.getTracks().forEach(e=>e.stop()),Be=null),await Bs()},Aa=()=>{Pt=!Pt;const e=p("pos-scanner-mode-btn");e&&(Pt?(e.textContent="Terus-menerus",e.className="px-2.5 py-1 rounded-lg bg-emerald-950/60 border border-emerald-600/60 text-emerald-400 text-[10px] font-black tracking-wider uppercase transition-all cursor-pointer"):(e.textContent="Scan Sekali",e.className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-[10px] font-black tracking-wider uppercase transition-all cursor-pointer"))},Oa=e=>{if(!e||!e.trim())return;Rs(e.trim());const t=p("pos-manual-barcode-input");t&&(t.value="")},La=e=>{Fe();const t=p("pos-search-input");t&&(t.value=e,ue=e,Z())};window.setPOSViewMode=ra;window.renderPOSStorefront=js;window.renderPOS=Hs;window.destroyBarcodeListener=Lt;window.openPOSCartDrawer=ua;window.closePOSCartDrawer=Xe;window.posSetQuickCash=xa;window.playCashierBeep=ke;window.playCashierChime=ut;window.posHoldCurrentCart=Ht;window.closePOSHoldPrompt=It;window.posConfirmHoldCart=oa;window.openPOSHeldModal=ft;window.closePOSHeldModal=Ze;window.posRecallHeldCart=na;window.posHoldCurrentAndRecall=la;window.posOverwriteAndRecall=da;window.posDeleteHeldCart=ca;window.posExecuteDeleteHeld=pa;window.renderHeldBadges=Ne;window.ensureCustomersLoaded=je;window.ensureBanksLoaded=mt;window.lookupPosMember=xt;window.debouncedLookupPosMember=wa;window.selectPosMember=ha;window.resetPosMember=ga;window.posSetDiscountType=Ta;window.posSetDiscountVal=it;window.posApplyQuickDiscount=Ma;window.openPOSCameraScanner=Nt;window.closePOSCameraScanner=Fe;window.togglePOSScannerFacing=Ca;window.togglePOSScannerTorch=$a;window.togglePOSScannerMode=Aa;window.posProcessManualBarcode=Oa;window.posSearchScannedCode=La;window.executePOSPrintDirect=ka;window.previewPOSReceiptThenPrint=ht;window.reprintLastPOSReceipt=va;window.getActiveShift=ee;window.isShiftActive=Le;window.syncActiveShiftFromCloud=Ce;window.openPOSOpenShiftModal=ne;window.closePOSOpenShiftModal=Re;window.openPOSShiftModal=pe;window.openPOSShiftSummaryModal=pe;window.closePOSShiftSummaryModal=dt;window.openPOSCloseShiftModal=ea;window.closePOSCloseShiftModal=Je;window.renderShiftHeaderBadge=ct;window.printShiftSettlementReceipt=ta;window.executeShiftPrintDirect=aa;window.posSubCatFilter=e=>{Te=e,Z()};window.getPOSCart=()=>$;window.posSearchFn=Rt;window.posClearSearch=ya;window.posLoadMoreProducts=Sa;window.posSyncOfflineTransactions=nt;window.renderOfflineQueueBadge=xe;window.initPOSNetworkMonitoring=gt;window.getOfflineTxQueue=Ee;const wr=Object.freeze(Object.defineProperty({__proto__:null,addToCart:Dt,addToCartWithVariant:hs,applyMemberToPos:Ct,clearCart:vs,closePOSCameraScanner:Fe,closePOSCartDrawer:Xe,closePOSHeldModal:Ze,closePOSHoldPrompt:It,closePayModal:Bt,debouncedLookupPosMember:wa,deselectPosReward:Os,destroyBarcodeListener:Lt,enqueueOfflineTx:zt,ensureBanksLoaded:mt,ensureCustomersLoaded:je,executePOSPrintDirect:ka,formatCompactPoText:us,formatQty:U,getCartTotalHpp:we,getMaxRedeemablePoints:Ot,getOfflineTxQueue:Ee,getPointValue:pt,getProductStockInfo:Ye,initPOSNetworkMonitoring:gt,lookupPosMember:xt,openPOSCameraScanner:Nt,openPOSCartDrawer:ua,openPOSHeldModal:ft,openPayModal:fa,playCashierBeep:ke,playCashierChime:ut,posAddToCartQty:xs,posApplyQuickDiscount:Ma,posClearSearch:ya,posConfirmHoldCart:oa,posDeleteHeldCart:ca,posDiscountAmount:le,posExecuteDeleteHeld:pa,posHoldCurrentAndRecall:la,posHoldCurrentCart:Ht,posLoadMoreProducts:Sa,posMemberPointsDiscount:De,posOnDpInput:Ps,posOverwriteAndRecall:da,posProcessManualBarcode:Oa,posRecallHeldCart:na,posSearchFn:Rt,posSearchScannedCode:La,posSelectPaylaterTenor:Ss,posSetDiscountType:Ta,posSetDiscountVal:it,posSetQuickCash:xa,posSyncOfflineTransactions:nt,posTaxInfo:re,posTogglePaylater:Ts,previewPOSReceiptThenPrint:ht,printPOSReceipt:Ds,processPOSTx:Ls,removeFromCart:Ft,renderCatalog:Z,renderHeldBadges:Ne,renderOfflineQueueBadge:xe,renderPOS:Hs,renderPOSStorefront:js,renderPosMemberResult:bt,reprintLastPOSReceipt:va,resetPosMember:ga,saveOfflineTxQueue:Pa,selectPosMember:ha,selectPosReward:As,setItemDisc:ks,setPOSViewMode:ra,setPosCustomerType:Ms,setPosPayMethod:ma,setPosPointsRedeemed:Cs,setQty:ws,stopClock:ms,togglePOSItemDiscInput:cs,togglePOSScannerFacing:Ca,togglePOSScannerMode:Aa,togglePOSScannerTorch:$a,updateNetworkStatusUI:Tt,updatePosChange:ba,updateQty:gs},Symbol.toStringTag,{value:"Module"}));export{za as a,hr as b,br as c,Ws as d,xr as e,at as f,lt as g,wr as h,gr as p,rr as r};

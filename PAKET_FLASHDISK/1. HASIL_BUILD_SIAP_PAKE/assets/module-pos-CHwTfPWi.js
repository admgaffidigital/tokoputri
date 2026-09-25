const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/pos-variant-sheet-DWhoZtix.js","assets/module-print-C2-MjUR_.js"])))=>i.map(i=>d[i]);
import{a as ee,A as da,d as T,_ as ca}from"./module-member-CfTyGNdn.js";import{e as i,t as w,a as u,i as d,ar as Y,x as Be,b as pa,f as ba}from"./module-print-C2-MjUR_.js";import{f as Re}from"./vendor-firebase-core-D2OF5R23.js";let ie=null;const G=()=>{if(ie)return ie;try{const e=sessionStorage.getItem("pos_cashier_session");if(e)return ie=JSON.parse(e),ie}catch{}return null},ua=e=>{ie=e;try{e?sessionStorage.setItem("pos_cashier_session",JSON.stringify(e)):sessionStorage.removeItem("pos_cashier_session")}catch{}},Tt=()=>{ie=null;try{sessionStorage.removeItem("pos_cashier_session")}catch{}},$t=()=>!!G(),Ct=async()=>{if(G()||window.isAdm||window.__localIsAdm||u&&(u.hasCashier===!0||u.store?.posEnabled===!0))return!0;const e=localStorage.getItem("pos_has_cashier");if(e==="true")return!0;const t=!!(window.isAdm||window.__localIsAdm||ee.currentUser&&ee.currentUser.uid===da);try{if(t){const s=!(await T.collection("freshmart").doc("cms_data").collection("cashier_accounts").where("isActive","==",!0).limit(1).get()).empty;try{localStorage.setItem("pos_has_cashier",s?"true":"false"),T.collection("freshmart").doc("cms_data").set({hasCashier:s},{merge:!0}).catch(()=>{})}catch{}return s}else{const a=await T.collection("freshmart").doc("cms_data").get();if(a.exists){const s=a.data();if(s.hasCashier!==void 0){const o=!!s.hasCashier;try{localStorage.setItem("pos_has_cashier",o?"true":"false")}catch{}return o}}return e!=="false"}}catch{return e!=="false"}},Me=async()=>{const e=i("pos-cashier-header-btn");if(!e)return;const t=!!G(),a=!!(window.isAdm||window.__localIsAdm),s=localStorage.getItem("pos_has_cashier"),o=u?u.hasCashier??!0:!0;t||a||s==="true"||s===null&&o!==!1?e.classList.remove("hidden"):s==="false"&&e.classList.add("hidden");try{await Ct()||t||a?e.classList.remove("hidden"):e.classList.add("hidden")}catch{(t||a||s!=="false")&&e.classList.remove("hidden")}},Mt=async()=>{typeof window.triggerHaptic=="function"&&window.triggerHaptic("medium"),G()?(typeof window.changeView=="function"&&window.changeView("view-pos-cashier"),typeof window.renderPOSStorefront=="function"&&window.renderPOSStorefront()):Ke()},Ke=()=>{const e=i("pos-login-modal");e&&(e.classList.remove("hidden"),setTimeout(()=>{e.classList.remove("opacity-0");const t=i("pos-login-modal-box");t&&t.classList.remove("translate-y-full","scale-95")},10),setTimeout(()=>{const t=i("pos-login-email");t&&t.focus()},300),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},_e=()=>{const e=i("pos-login-modal"),t=i("pos-login-modal-box");e&&e.classList.add("opacity-0"),t&&t.classList.add("translate-y-full"),setTimeout(()=>{e&&e.classList.add("hidden");const a=i("pos-login-email"),s=i("pos-login-password"),o=i("pos-login-error");a&&(a.value=""),s&&(s.value=""),o&&(o.textContent="",o.classList.add("hidden"))},300)},At=async()=>{const e=i("pos-login-email"),t=i("pos-login-password"),a=i("pos-login-error"),s=i("pos-login-btn"),o=e?.value?.trim()||"",n=t?.value||"",r=p=>{if(a){a.classList.remove("hidden");const b=a.querySelector("span");b?b.textContent=p:a.textContent=p}typeof window.triggerHaptic=="function"&&window.triggerHaptic("error")};if((()=>{if(a){a.classList.add("hidden");const p=a.querySelector("span");p&&(p.textContent="")}})(),!o||!n){r("Email dan password wajib diisi.");return}s&&(s.disabled=!0,s.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i>Memverifikasi...');try{const b=(await ee.signInWithEmailAndPassword(o,n)).user?.uid;if(!b)throw new Error("UID tidak ditemukan");const h=await T.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(b).get();if(!h.exists){await ee.signOut(),r("Akun ini bukan akun kasir yang terdaftar di toko ini.");return}const k=h.data();if(k.role!=="cashier"){await ee.signOut(),r("Akun ini tidak memiliki akses kasir.");return}if(!k.isActive){await ee.signOut(),r("Akun kasir ini telah dinonaktifkan. Hubungi admin toko.");return}ua({uid:b,name:k.name||o,email:k.email||o,role:"cashier"});try{localStorage.setItem("pos_has_cashier","true")}catch{}Me(),_e(),w(`Selamat datang, ${k.name||"Kasir"}! 👋`,"success"),typeof window.changeView=="function"&&window.changeView("view-pos-cashier"),setTimeout(()=>{typeof window.renderPOSStorefront=="function"&&window.renderPOSStorefront()},100),typeof window.triggerHaptic=="function"&&window.triggerHaptic("success")}catch(p){console.error("[POS Auth] Login error:",p);const b=p.code||"";r(b==="auth/user-not-found"||b==="auth/wrong-password"||b==="auth/invalid-credential"?"Email atau password salah.":b==="auth/too-many-requests"?"Terlalu banyak percobaan. Coba lagi beberapa saat.":b==="auth/network-request-failed"?"Koneksi gagal. Periksa jaringan internet.":"Login gagal: "+(p.message||"Kesalahan tidak diketahui"))}finally{s&&(s.disabled=!1,s.innerHTML='<i class="fa-solid fa-right-to-bracket mr-2"></i>Masuk Kasir')}},qe=async(e=!1)=>{if(!e&&typeof window.getActiveShift=="function"){const a=window.getActiveShift();if(a&&a.status==="open"){document.getElementById("pos-logout-shift-modal")?.remove();const s=typeof window.fRp=="function"?window.fRp(a.startingCash):"Rp "+a.startingCash;document.body.insertAdjacentHTML("beforeend",`
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
            </div>`);return}}G(),typeof window.detachPOSHistoryListener=="function"&&window.detachPOSHistoryListener();try{if(!window.isAdm&&!window.__localIsAdm)try{await ee.signOut()}catch{}}catch{}Tt();const t=i("view-pos-cashier");t&&(t.innerHTML=""),typeof window.destroyBarcodeListener=="function"&&window.destroyBarcodeListener(),typeof window.stopPOSClock=="function"&&window.stopPOSClock(),w("Sesi kasir berakhir. Sampai jumpa! 👋"),typeof window.changeView=="function"&&window.changeView("view-catalog"),typeof window.triggerHaptic=="function"&&window.triggerHaptic("medium"),typeof window.updatePOSHeaderIcon=="function"&&window.updatePOSHeaderIcon()},Ot=async()=>{await Me()};window.openPOSCashierMode=Mt;window.openPOSLoginModal=Ke;window.closePOSLoginModal=_e;window.processCashierLogin=At;window.cashierLogout=qe;window.exitPOSMode=qe;window.getCashierSession=G;window.isCashierLoggedIn=$t;window.initPOSAuth=Ot;window.updatePOSHeaderIcon=Me;const ja=Object.freeze(Object.defineProperty({__proto__:null,cashierLogout:qe,checkCashierExists:Ct,clearCashierSession:Tt,closePOSLoginModal:_e,getCashierSession:G,initPOSAuth:Ot,isCashierLoggedIn:$t,openPOSCashierMode:Mt,openPOSLoginModal:Ke,processCashierLogin:At,updatePOSHeaderIcon:Me},Symbol.toStringTag,{value:"Module"})),x=e=>"Rp "+Math.round(parseFloat(e)||0).toLocaleString("id-ID"),Te="pos_active_shift",Lt="pos_last_closed_shift";let le=null;const B=()=>{if(le)return le;try{const e=localStorage.getItem(Te);if(e)return le=JSON.parse(e),le}catch(e){console.warn("[POS Shift] Gagal membaca active shift:",e)}return null},Ve=e=>{le=e;try{e?localStorage.setItem(Te,JSON.stringify(e)):localStorage.removeItem(Te)}catch{}},jt=()=>{le=null;try{localStorage.removeItem(Te)}catch{}},xa=()=>{try{const e=localStorage.getItem(Lt);if(e)return JSON.parse(e)}catch{}return null},fa=e=>{try{localStorage.setItem(Lt,JSON.stringify(e))}catch{}},pe=()=>{const e=B();return!!(e&&e.status==="open")},It=(e="open")=>{try{const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const a=new t,s=a.currentTime;e==="open"?([523.25,659.25,783.99,1046.5].forEach((n,r)=>{const c=a.createOscillator(),p=a.createGain(),b=s+r*.07;c.type="sine",c.frequency.setValueAtTime(n,b),p.gain.setValueAtTime(.09,b),p.gain.exponentialRampToValueAtTime(1e-4,b+.16),c.connect(p),p.connect(a.destination),c.start(b),c.stop(b+.16)}),setTimeout(()=>{a.close().catch(()=>{})},600)):([{f:[783.99,987.77],t:s,d:.14},{f:[1046.5,1318.51],t:s+.12,d:.35}].forEach(n=>{n.f.forEach(r=>{const c=a.createOscillator(),p=a.createGain();c.type="triangle",c.frequency.setValueAtTime(r,n.t),p.gain.setValueAtTime(.08,n.t),p.gain.exponentialRampToValueAtTime(1e-4,n.t+n.d),c.connect(p),p.connect(a.destination),c.start(n.t),c.stop(n.t+n.d)})}),setTimeout(()=>{a.close().catch(()=>{})},700))}catch{}},Ue=(e,t=Date.now())=>{if(!e)return"-";const a=Math.max(0,t-e),s=Math.floor(a/6e4),o=Math.floor(s/60),n=s%60;return o>0?`${o} Jam ${n} Menit`:`${n} Menit`},ma=()=>{const e=new Date,t=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0"),o=Math.floor(100+Math.random()*900);return`SHF-${t}${a}${s}-${o}`},re=()=>{const t=G()?.name||(window.isAdm?"Admin Seller":"Kasir Toko"),a=new Date().toLocaleString("id-ID",{dateStyle:"full",timeStyle:"short"});document.getElementById("pos-open-shift-modal")?.remove();const s=`
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
                            <span class="font-bold text-slate-800 dark:text-slate-200">${d(t)}</span>
                        </div>
                    </div>
                    <div class="text-right">
                        <span class="text-[10px] text-slate-400 block font-medium">Waktu Buka</span>
                        <span class="font-bold text-slate-700 dark:text-slate-300 text-[11px]">${d(a)}</span>
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
                            value="100000">
                    </div>
                    <!-- Quick Amount Chips -->
                    <div class="flex items-center gap-1.5 flex-wrap pt-1">
                        <button type="button" onclick="window.posSetStartCashPreset(0)" class="px-2.5 py-1 rounded-xl text-[10px] font-bold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-all cursor-pointer">Rp 0</button>
                        <button type="button" onclick="window.posSetStartCashPreset(50000)" class="px-2.5 py-1 rounded-xl text-[10px] font-bold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-all cursor-pointer">50.000</button>
                        <button type="button" onclick="window.posSetStartCashPreset(100000)" class="px-2.5 py-1 rounded-xl text-[10px] font-bold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-all cursor-pointer border border-emerald-300 text-emerald-700 dark:text-emerald-400">100.000</button>
                        <button type="button" onclick="window.posSetStartCashPreset(200000)" class="px-2.5 py-1 rounded-xl text-[10px] font-bold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-all cursor-pointer">200.000</button>
                        <button type="button" onclick="window.posSetStartCashPreset(500000)" class="px-2.5 py-1 rounded-xl text-[10px] font-bold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-all cursor-pointer">500.000</button>
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
                <button onclick="window.confirmStartPOSShift()" class="flex-[2] py-3 rounded-2xl text-white font-black text-xs uppercase tracking-wider shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer" style="background:var(--color-primary)">
                    <i class="fa-solid fa-check"></i>
                    <span>Buka Shift Sekarang</span>
                </button>
            </div>
        </div>
    </div>`;document.body.insertAdjacentHTML("beforeend",s);const o=i("pos-open-shift-modal"),n=i("pos-open-shift-box");!o||!n||(o.classList.remove("pointer-events-none"),requestAnimationFrame(()=>{o.classList.remove("opacity-0"),n.classList.remove("translate-y-8","scale-95")}),setTimeout(()=>{const r=i("pos-shift-start-cash-input");r&&(r.focus(),r.select())},250))},Ae=()=>{const e=i("pos-open-shift-modal"),t=i("pos-open-shift-box");e&&(e.classList.add("opacity-0","pointer-events-none"),t&&t.classList.add("translate-y-8","scale-95"),setTimeout(()=>{e.remove()},280))},ga=e=>{const t=i("pos-shift-start-cash-input");t&&(t.value=e,t.focus(),t.select())},ha=async()=>{const e=i("pos-shift-start-cash-input"),t=i("pos-shift-start-notes-input"),a=parseFloat(e?.value)||0,s=t?.value?.trim()||"",o=G(),n=o?.uid||(window.isAdm?"admin":"cashier-anon"),r=o?.name||(window.isAdm?"Admin Seller":"Kasir Toko"),c=o?.email||"",p={id:"SHF-"+Date.now(),shiftNo:ma(),cashierUid:n,cashierName:r,cashierEmail:c,startTime:Date.now(),startTimeISO:new Date().toISOString(),startingCash:a,startNotes:s,status:"open",txCount:0,itemCount:0,totalSales:0,cashSales:0,qrisSales:0,bankSales:0,tempoSales:0,discountTotal:0,pointsTotal:0,orders:[]};Ve(p);try{T.collection("freshmart").doc("cms_data").collection("pos_shifts").doc(p.id).set(p).catch(()=>{}),T.collection("pos_shifts").doc(p.id).set(p).catch(()=>{})}catch{}Ae(),It("open"),w(`Shift kasir dibuka! Modal awal: ${x(a)} 🎉`,"success"),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge()},Ht=e=>{try{const t=B();if(!t||t.status!=="open")return;const a=parseFloat(e.total)||0,s=e.payment?.method||"cash",o=parseFloat(e.payment?.dp)||0,n=parseFloat(e.payment?.tempoBalance)||0,r=parseFloat(e.globalDiscount)||0,c=parseFloat(e.pointsEarned)||0,p=(e.items||[]).reduce((b,l)=>b+(parseFloat(l.qty)||1),0);t.txCount=(t.txCount||0)+1,t.itemCount=(t.itemCount||0)+p,t.totalSales=(t.totalSales||0)+a,t.discountTotal=(t.discountTotal||0)+r,t.pointsTotal=(t.pointsTotal||0)+c,s==="cash"?t.cashSales=(t.cashSales||0)+a:s==="qris"?t.qrisSales=(t.qrisSales||0)+a:s==="bank"?t.bankSales=(t.bankSales||0)+a:s==="tempo"&&(o>0&&(t.cashSales=(t.cashSales||0)+o),t.tempoSales=(t.tempoSales||0)+n),Array.isArray(t.orders)||(t.orders=[]),(e.txId||e.id)&&t.orders.push(e.txId||e.id),Ve(t);try{const b={txCount:t.txCount,itemCount:t.itemCount,totalSales:t.totalSales,cashSales:t.cashSales,qrisSales:t.qrisSales,bankSales:t.bankSales,tempoSales:t.tempoSales,discountTotal:t.discountTotal,pointsTotal:t.pointsTotal,orders:t.orders,lastUpdatedISO:new Date().toISOString()};T.collection("freshmart").doc("cms_data").collection("pos_shifts").doc(t.id).update(b).catch(()=>{}),T.collection("pos_shifts").doc(t.id).update(b).catch(()=>{})}catch{}typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge()}catch(t){console.warn("[POS Shift] Gagal update transaksi ke shift:",t)}},se=()=>{const e=B();if(!e){re();return}document.getElementById("pos-shift-summary-modal")?.remove();const t=(parseFloat(e.startingCash)||0)+(parseFloat(e.cashSales)||0),a=Ue(e.startTime),s=new Date(e.startTime).toLocaleString("id-ID",{dateStyle:"medium",timeStyle:"short"}),o=`
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
                        <p class="text-[11px] text-slate-500 dark:text-slate-400">Shift aktif: <b>${d(e.shiftNo||e.id)}</b></p>
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
                        <span class="font-bold text-slate-800 dark:text-slate-200 text-xs truncate block">${d(e.cashierName)}</span>
                        <span class="text-[10px] text-slate-500 mt-0.5 block">Mulai: ${d(s)}</span>
                    </div>
                    <div class="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                        <span class="text-[10px] text-slate-400 block font-medium">Durasi Kerja</span>
                        <span class="font-bold text-emerald-600 dark:text-emerald-400 text-xs block">${d(a)}</span>
                        <span class="text-[10px] text-slate-500 mt-0.5 block">${e.txCount||0} Struk / ${e.itemCount||0} Pcs</span>
                    </div>
                </div>

                <!-- Kartu Utama: Kas di Laci Saat Ini (Expected Cash) -->
                <div class="p-4 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent border-2 border-emerald-500/30 flex items-center justify-between">
                    <div>
                        <span class="text-[11px] font-bold text-emerald-700 dark:text-emerald-300 uppercase tracking-wider block">Uang Kas di Laci Seharusnya</span>
                        <span class="text-[10px] text-slate-500 dark:text-slate-400">Modal Awal (${x(e.startingCash)}) + Penjualan Tunai (${x(e.cashSales||0)})</span>
                    </div>
                    <div class="text-right">
                        <span class="text-xl font-black text-emerald-600 dark:text-emerald-400 block">${x(t)}</span>
                    </div>
                </div>

                <!-- Rincian Omset Penjualan -->
                <div class="space-y-2">
                    <div class="flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-200 border-b border-slate-100 dark:border-slate-800 pb-1.5">
                        <span class="flex items-center gap-1.5"><i class="fa-solid fa-receipt text-slate-400"></i>Rincian Metode Pembayaran</span>
                        <span class="text-slate-500 text-[11px]">Total Omset: <b>${x(e.totalSales||0)}</b></span>
                    </div>

                    <div class="space-y-1.5 text-xs">
                        <div class="flex justify-between items-center p-2 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                            <span class="text-slate-600 dark:text-slate-300 flex items-center gap-2">
                                <span class="w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center text-[10px]"><i class="fa-solid fa-money-bill-wave"></i></span>
                                <span>Tunai (Cash)</span>
                            </span>
                            <span class="font-bold text-slate-800 dark:text-white">${x(e.cashSales||0)}</span>
                        </div>
                        <div class="flex justify-between items-center p-2 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                            <span class="text-slate-600 dark:text-slate-300 flex items-center gap-2">
                                <span class="w-6 h-6 rounded-lg bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 flex items-center justify-center text-[10px]"><i class="fa-solid fa-qrcode"></i></span>
                                <span>QRIS Dinamis</span>
                            </span>
                            <span class="font-bold text-slate-800 dark:text-white">${x(e.qrisSales||0)}</span>
                        </div>
                        <div class="flex justify-between items-center p-2 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                            <span class="text-slate-600 dark:text-slate-300 flex items-center gap-2">
                                <span class="w-6 h-6 rounded-lg bg-blue-100 dark:bg-blue-950/60 text-blue-600 flex items-center justify-center text-[10px]"><i class="fa-solid fa-building-columns"></i></span>
                                <span>Transfer Bank</span>
                            </span>
                            <span class="font-bold text-slate-800 dark:text-white">${x(e.bankSales||0)}</span>
                        </div>
                        <div class="flex justify-between items-center p-2 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                            <span class="text-slate-600 dark:text-slate-300 flex items-center gap-2">
                                <span class="w-6 h-6 rounded-lg bg-amber-100 dark:bg-amber-950/60 text-amber-600 flex items-center justify-center text-[10px]"><i class="fa-solid fa-clock-rotate-left"></i></span>
                                <span>Tempo / Piutang (Sisa)</span>
                            </span>
                            <span class="font-bold text-slate-800 dark:text-white">${x(e.tempoSales||0)}</span>
                        </div>
                    </div>
                </div>

                <!-- Diskon & Poin -->
                <div class="grid grid-cols-2 gap-2 text-xs">
                    <div class="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/20 border border-rose-200/60 dark:border-rose-800/40">
                        <span class="text-[10px] text-rose-500 block font-bold">Total Diskon Diberikan</span>
                        <span class="font-black text-rose-600 dark:text-rose-400 text-xs">${x(e.discountTotal||0)}</span>
                    </div>
                    <div class="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-800/40">
                        <span class="text-[10px] text-amber-600 block font-bold">Poin Member Dikreditkan</span>
                        <span class="font-black text-amber-600 dark:text-amber-400 text-xs">+${e.pointsTotal||0} Poin</span>
                    </div>
                </div>
            </div>

            <!-- Footer Action Buttons -->
            <div class="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 flex items-center gap-2">
                <button onclick="window.printShiftSettlementReceipt(window.getActiveShift(), true)" class="px-3.5 py-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 transition-all flex items-center gap-1.5 cursor-pointer" title="Cetak Slip Sementara (X-Report)">
                    <i class="fa-solid fa-print"></i>
                    <span class="hidden sm:inline">Cetak X-Report</span>
                </button>
                <button onclick="window.closePOSShiftSummaryModal()" class="flex-1 py-3 rounded-2xl bg-slate-200/70 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 font-bold text-xs transition-all cursor-pointer">
                    Lanjut Jaga Kasir
                </button>
                <button onclick="window.closePOSShiftSummaryModal(); window.openPOSCloseShiftModal();" class="flex-1 py-3 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-black text-xs uppercase tracking-wider shadow-lg active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer">
                    <i class="fa-solid fa-lock"></i>
                    <span>Tutup Shift</span>
                </button>
            </div>
        </div>
    </div>`;document.body.insertAdjacentHTML("beforeend",o);const n=i("pos-shift-summary-modal"),r=i("pos-shift-summary-box");!n||!r||(n.classList.remove("pointer-events-none"),requestAnimationFrame(()=>{n.classList.remove("opacity-0"),r.classList.remove("translate-y-8","scale-95")}))},ze=()=>{const e=i("pos-shift-summary-modal"),t=i("pos-shift-summary-box");e&&(e.classList.add("opacity-0","pointer-events-none"),t&&t.classList.add("translate-y-8","scale-95"),setTimeout(()=>{e.remove()},280))},Qe=()=>{const e=B();if(!e){w("Tidak ada shift kasir yang aktif saat ini.","warning");return}document.getElementById("pos-close-shift-modal")?.remove();const t=(parseFloat(e.startingCash)||0)+(parseFloat(e.cashSales)||0),a=`
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
                            Modal Awal: <b>${x(e.startingCash)}</b> + Penjualan Tunai: <b>${x(e.cashSales||0)}</b>
                        </div>
                    </div>
                    <div class="text-right">
                        <span id="pos-close-expected-cash" class="text-lg font-black text-slate-900 dark:text-white">${x(t)}</span>
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
                            <div class="flex items-center justify-between bg-white dark:bg-slate-800 px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700">
                                <span class="font-bold text-slate-700 dark:text-slate-200 text-[11px]">Rp 100.000</span>
                                <div class="flex items-center gap-1">
                                    <span class="text-[10px] text-slate-400">×</span>
                                    <input type="number" min="0" id="denom-100k" placeholder="0" class="w-14 px-1.5 py-0.5 text-right font-bold text-xs border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-900" oninput="window.calcPOSDenominations()">
                                </div>
                            </div>
                            <div class="flex items-center justify-between bg-white dark:bg-slate-800 px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700">
                                <span class="font-bold text-slate-700 dark:text-slate-200 text-[11px]">Rp 50.000</span>
                                <div class="flex items-center gap-1">
                                    <span class="text-[10px] text-slate-400">×</span>
                                    <input type="number" min="0" id="denom-50k" placeholder="0" class="w-14 px-1.5 py-0.5 text-right font-bold text-xs border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-900" oninput="window.calcPOSDenominations()">
                                </div>
                            </div>
                            <div class="flex items-center justify-between bg-white dark:bg-slate-800 px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700">
                                <span class="font-bold text-slate-700 dark:text-slate-200 text-[11px]">Rp 20.000</span>
                                <div class="flex items-center gap-1">
                                    <span class="text-[10px] text-slate-400">×</span>
                                    <input type="number" min="0" id="denom-20k" placeholder="0" class="w-14 px-1.5 py-0.5 text-right font-bold text-xs border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-900" oninput="window.calcPOSDenominations()">
                                </div>
                            </div>
                            <div class="flex items-center justify-between bg-white dark:bg-slate-800 px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700">
                                <span class="font-bold text-slate-700 dark:text-slate-200 text-[11px]">Rp 10.000</span>
                                <div class="flex items-center gap-1">
                                    <span class="text-[10px] text-slate-400">×</span>
                                    <input type="number" min="0" id="denom-10k" placeholder="0" class="w-14 px-1.5 py-0.5 text-right font-bold text-xs border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-900" oninput="window.calcPOSDenominations()">
                                </div>
                            </div>
                            <div class="flex items-center justify-between bg-white dark:bg-slate-800 px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700">
                                <span class="font-bold text-slate-700 dark:text-slate-200 text-[11px]">Rp 5.000</span>
                                <div class="flex items-center gap-1">
                                    <span class="text-[10px] text-slate-400">×</span>
                                    <input type="number" min="0" id="denom-5k" placeholder="0" class="w-14 px-1.5 py-0.5 text-right font-bold text-xs border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-900" oninput="window.calcPOSDenominations()">
                                </div>
                            </div>
                            <div class="flex items-center justify-between bg-white dark:bg-slate-800 px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700">
                                <span class="font-bold text-slate-700 dark:text-slate-200 text-[11px]">Rp 2.000</span>
                                <div class="flex items-center gap-1">
                                    <span class="text-[10px] text-slate-400">×</span>
                                    <input type="number" min="0" id="denom-2k" placeholder="0" class="w-14 px-1.5 py-0.5 text-right font-bold text-xs border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-900" oninput="window.calcPOSDenominations()">
                                </div>
                            </div>
                            <div class="flex items-center justify-between bg-white dark:bg-slate-800 px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700">
                                <span class="font-bold text-slate-700 dark:text-slate-200 text-[11px]">Rp 1.000</span>
                                <div class="flex items-center gap-1">
                                    <span class="text-[10px] text-slate-400">×</span>
                                    <input type="number" min="0" id="denom-1k" placeholder="0" class="w-14 px-1.5 py-0.5 text-right font-bold text-xs border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-900" oninput="window.calcPOSDenominations()">
                                </div>
                            </div>
                            <div class="flex items-center justify-between bg-white dark:bg-slate-800 px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700">
                                <span class="font-bold text-slate-700 dark:text-slate-200 text-[11px]">Koin / Receh</span>
                                <div class="flex items-center gap-1">
                                    <span class="text-[10px] text-slate-400">Rp</span>
                                    <input type="number" min="0" id="denom-coin" placeholder="0" class="w-16 px-1.5 py-0.5 text-right font-bold text-xs border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-900" oninput="window.calcPOSDenominations()">
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
    </div>`;document.body.insertAdjacentHTML("beforeend",a);const s=i("pos-close-shift-modal"),o=i("pos-close-shift-box");!s||!o||(s.classList.remove("pointer-events-none"),requestAnimationFrame(()=>{s.classList.remove("opacity-0"),o.classList.remove("translate-y-8","scale-95")}),setTimeout(()=>{const n=i("pos-shift-actual-cash-input");n&&(n.focus(),n.select())},250))},Oe=()=>{const e=i("pos-close-shift-modal"),t=i("pos-close-shift-box");e&&(e.classList.add("opacity-0","pointer-events-none"),t&&t.classList.add("translate-y-8","scale-95"),setTimeout(()=>{e.remove()},280))},wa=e=>{const t=i("pos-count-tab-quick"),a=i("pos-count-tab-denom"),s=i("pos-count-panel-quick"),o=i("pos-count-panel-denom");e==="quick"?(t&&(t.className="px-2.5 py-1 rounded-lg font-black bg-white dark:bg-slate-700 text-slate-800 dark:text-white shadow-xs transition-all cursor-pointer"),a&&(a.className="px-2.5 py-1 rounded-lg font-bold text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:white transition-all cursor-pointer"),s&&s.classList.remove("hidden"),o&&o.classList.add("hidden")):(t&&(t.className="px-2.5 py-1 rounded-lg font-bold text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:white transition-all cursor-pointer"),a&&(a.className="px-2.5 py-1 rounded-lg font-black bg-white dark:bg-slate-700 text-slate-800 dark:text-white shadow-xs transition-all cursor-pointer"),s&&s.classList.add("hidden"),o&&o.classList.remove("hidden"),Dt())},Dt=()=>{const e=(parseFloat(i("denom-100k")?.value)||0)*1e5,t=(parseFloat(i("denom-50k")?.value)||0)*5e4,a=(parseFloat(i("denom-20k")?.value)||0)*2e4,s=(parseFloat(i("denom-10k")?.value)||0)*1e4,o=(parseFloat(i("denom-5k")?.value)||0)*5e3,n=(parseFloat(i("denom-2k")?.value)||0)*2e3,r=(parseFloat(i("denom-1k")?.value)||0)*1e3,c=parseFloat(i("denom-coin")?.value)||0,p=e+t+a+s+o+n+r+c,b=i("pos-shift-actual-cash-input");b&&(b.value=p),Nt()},Nt=()=>{const e=B();if(!e)return;const t=(parseFloat(e.startingCash)||0)+(parseFloat(e.cashSales)||0),s=(parseFloat(i("pos-shift-actual-cash-input")?.value)||0)-t,o=i("pos-discrepancy-card"),n=i("pos-discrepancy-icon"),r=i("pos-discrepancy-status"),c=i("pos-discrepancy-desc"),p=i("pos-discrepancy-amount");!o||!n||!r||!c||!p||(s===0?(o.className="p-4 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between bg-emerald-50 dark:bg-emerald-950/20 border-emerald-500/40",n.className="w-10 h-10 rounded-2xl flex items-center justify-center text-white text-base shadow-sm shrink-0 bg-emerald-600",n.innerHTML='<i class="fa-solid fa-check"></i>',r.className="text-xs font-black uppercase tracking-wider text-emerald-800 dark:text-emerald-300 block",r.innerText="SEIMBANG (PAS)",c.className="text-[11px] text-emerald-700 dark:text-emerald-400 block",c.innerText="Uang fisik laci kasir cocok dengan transaksi sistem",p.className="text-base font-black text-emerald-600 dark:text-emerald-400",p.innerText="Rp 0"):s>0?(o.className="p-4 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between bg-amber-50 dark:bg-amber-950/20 border-amber-500/40",n.className="w-10 h-10 rounded-2xl flex items-center justify-center text-white text-base shadow-sm shrink-0 bg-amber-500",n.innerHTML='<i class="fa-solid fa-plus"></i>',r.className="text-xs font-black uppercase tracking-wider text-amber-800 dark:text-amber-300 block",r.innerText="LEBIH (SURPLUS)",c.className="text-[11px] text-amber-700 dark:text-amber-400 block",c.innerText="Terdapat kelebihan uang fisik di laci kasir",p.className="text-base font-black text-amber-600 dark:text-amber-400",p.innerText="+ "+x(s)):(o.className="p-4 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between bg-rose-50 dark:bg-rose-950/20 border-rose-500/40",n.className="w-10 h-10 rounded-2xl flex items-center justify-center text-white text-base shadow-sm shrink-0 bg-rose-600",n.innerHTML='<i class="fa-solid fa-minus"></i>',r.className="text-xs font-black uppercase tracking-wider text-rose-800 dark:text-rose-300 block",r.innerText="KURANG (DEFISIT)",c.className="text-[11px] text-rose-700 dark:text-rose-400 block",c.innerText="Terdapat kekurangan uang fisik di laci kasir",p.className="text-base font-black text-rose-600 dark:text-rose-400",p.innerText="- "+x(Math.abs(s))))},ka=async()=>{const e=B();if(!e)return;const t=(parseFloat(e.startingCash)||0)+(parseFloat(e.cashSales)||0),a=parseFloat(i("pos-shift-actual-cash-input")?.value)||0,s=a-t,o=i("pos-shift-close-notes")?.value?.trim()||"",n={d100k:parseFloat(i("denom-100k")?.value)||0,d50k:parseFloat(i("denom-50k")?.value)||0,d20k:parseFloat(i("denom-20k")?.value)||0,d10k:parseFloat(i("denom-10k")?.value)||0,d5k:parseFloat(i("denom-5k")?.value)||0,d2k:parseFloat(i("denom-2k")?.value)||0,d1k:parseFloat(i("denom-1k")?.value)||0,coin:parseFloat(i("denom-coin")?.value)||0},r=Date.now(),c=Ue(e.startTime,r),p={...e,status:"closed",endTime:r,endTimeISO:new Date(r).toISOString(),duration:c,expectedCash:t,actualCash:a,difference:s,discrepancyStatus:s===0?"balanced":s>0?"surplus":"deficit",denominations:n,closingNotes:o};try{await T.collection("freshmart").doc("cms_data").collection("pos_shifts").doc(p.id).set(p,{merge:!0}),await T.collection("pos_shifts").doc(p.id).set(p,{merge:!0})}catch(b){console.warn("[POS Shift] Simpan Firestore:",b)}jt(),fa(p),Oe(),It("close"),va(p),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge()},va=e=>{document.getElementById("pos-closed-success-modal")?.remove();const t=e.difference||0,a=t===0?'<span class="px-2.5 py-1 rounded-xl text-xs font-black bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">PAS (Rp 0)</span>':t>0?`<span class="px-2.5 py-1 rounded-xl text-xs font-black bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300">LEBIH (+${x(t)})</span>`:`<span class="px-2.5 py-1 rounded-xl text-xs font-black bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300">KURANG (-${x(Math.abs(t))})</span>`,s=`
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
                <div class="flex justify-between"><span>No Shift:</span><span class="font-bold font-mono">#${d(e.shiftNo||e.id)}</span></div>
                <div class="flex justify-between"><span>Kasir:</span><span class="font-bold">${d(e.cashierName)}</span></div>
                <div class="flex justify-between"><span>Durasi:</span><span class="font-bold">${d(e.duration)}</span></div>
                <div class="flex justify-between border-t border-slate-200/60 dark:border-slate-700/60 pt-1.5"><span>Total Omset:</span><span class="font-bold">${x(e.totalSales||0)}</span></div>
                <div class="flex justify-between"><span>Kas Fisik Laci:</span><span class="font-black text-slate-900 dark:text-white">${x(e.actualCash||0)}</span></div>
                <div class="flex justify-between items-center border-t border-slate-200/60 dark:border-slate-700/60 pt-1.5"><span>Status Selisih:</span><div>${a}</div></div>
            </div>

            <!-- Action Buttons -->
            <div class="space-y-2 pt-2">
                <button onclick="window.printShiftSettlementReceipt(window.getLastClosedShift(), false)" class="w-full py-3.5 rounded-2xl text-white font-black text-xs uppercase tracking-wider shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer" style="background:var(--color-primary)">
                    <i class="fa-solid fa-print"></i>
                    <span>Cetak Slip Tutup Shift (Z-Report)</span>
                </button>
                <button onclick="document.getElementById('pos-closed-success-modal')?.remove(); if(typeof window.cashierLogout==='function') window.cashierLogout();" class="w-full py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs transition-all cursor-pointer">
                    Selesai &amp; Keluar Kasir
                </button>
            </div>
        </div>
    </div>`;document.body.insertAdjacentHTML("beforeend",s)},Ge=(e,t=!1)=>{if(!e){w("Data shift tidak ditemukan.","warning");return}const a=typeof Y=="function"?Y():{paperSize:"58mm"},s=a.paperSize==="80mm",o=a.headerText||u.store?.name||"TOKO PUTRI",n=u.store?.address||"",r=u.store?.wa||"",c=a.footerText||"Laporan Kasir Resmi Toko Putri",p=t?"RINGKASAN SHIFT (X-REPORT)":"REKAP TUTUP SHIFT (Z-REPORT)",b=new Date(e.startTime).toLocaleString("id-ID",{dateStyle:"short",timeStyle:"short"}),l=e.endTime?new Date(e.endTime).toLocaleString("id-ID",{dateStyle:"short",timeStyle:"short"}):new Date().toLocaleString("id-ID",{dateStyle:"short",timeStyle:"short"}),h=e.duration||Ue(e.startTime,e.endTime||Date.now()),k=(parseFloat(e.startingCash)||0)+(parseFloat(e.cashSales)||0),P=e.actualCash!==void 0?parseFloat(e.actualCash):k,$=P-k,R=$===0?"SEIMBANG (PAS)":$>0?`LEBIH (+${x($)})`:`KURANG (-${x(Math.abs($))})`,H=window.open("","_blank",`width=${s?460:360},height=740`);if(!H){document.getElementById("pos-shift-receipt-modal")?.remove(),document.body.insertAdjacentHTML("beforeend",`
        <div id="pos-shift-receipt-modal" class="fixed inset-0 z-[10003] flex items-center justify-center p-3 sm:p-4" style="background:rgba(15,23,42,0.7);backdrop-filter:blur(4px)">
            <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full ${s?"max-w-md":"max-w-sm"} border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[90vh]">
                <div class="p-3.5 sm:p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50">
                    <span class="font-bold text-xs text-slate-700 dark:text-slate-200 flex items-center gap-1.5"><i class="fa-solid fa-receipt text-emerald-500"></i>Slip Rekap Shift (${s?"80mm":"58mm"})</span>
                    <button onclick="document.getElementById('pos-shift-receipt-modal')?.remove()" class="w-7 h-7 rounded-lg bg-slate-200/60 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 text-sm leading-none flex items-center justify-center cursor-pointer">×</button>
                </div>
                <div id="pos-shift-receipt-paper-box" class="p-4 overflow-y-auto flex-1 font-mono text-[11px] bg-slate-50/60 dark:bg-slate-950 text-slate-800 dark:text-slate-200 space-y-1.5 select-text">
                    <div class="text-center font-bold text-sm uppercase">${d(o)}</div>
                    ${n?`<div class="text-center text-[10px] text-slate-500">${d(n)}</div>`:""}
                    ${r?`<div class="text-center text-[10px] text-slate-500">WA: ${d(r)}</div>`:""}
                    <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                    <div class="text-center font-black text-xs uppercase">${d(p)}</div>
                    <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                    <div>No Shift: <b>#${d(e.shiftNo||e.id)}</b></div>
                    <div>Kasir   : ${d(e.cashierName)}</div>
                    <div>Mulai   : ${d(b)}</div>
                    <div>Selesai : ${d(l)}</div>
                    <div>Durasi  : ${d(h)}</div>
                    <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                    <div class="font-bold">RINGKASAN PENJUALAN:</div>
                    <div class="flex justify-between"><span>Total Struk</span><span>${e.txCount||0} Trx</span></div>
                    <div class="flex justify-between"><span>Total Barang</span><span>${e.itemCount||0} Pcs</span></div>
                    <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-1"></div>
                    <div class="flex justify-between"><span>Tunai (Cash)</span><span>${x(e.cashSales||0)}</span></div>
                    <div class="flex justify-between"><span>QRIS</span><span>${x(e.qrisSales||0)}</span></div>
                    <div class="flex justify-between"><span>Transfer Bank</span><span>${x(e.bankSales||0)}</span></div>
                    <div class="flex justify-between"><span>Tempo (Piutang)</span><span>${x(e.tempoSales||0)}</span></div>
                    <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-1"></div>
                    <div class="flex justify-between font-black text-xs pt-0.5"><span>TOTAL OMSET</span><span style="color:var(--color-primary)">${x(e.totalSales||0)}</span></div>
                    ${(e.discountTotal||0)>0?`<div class="flex justify-between text-rose-500"><span>Diskon Toko</span><span>-${x(e.discountTotal)}</span></div>`:""}
                    <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                    <div class="font-bold">REKONSILIASI KAS LACI:</div>
                    <div class="flex justify-between"><span>Modal Awal</span><span>${x(e.startingCash)}</span></div>
                    <div class="flex justify-between"><span>Penjualan Tunai</span><span>${x(e.cashSales||0)}</span></div>
                    <div class="flex justify-between font-bold"><span>Kas Sistem</span><span>${x(k)}</span></div>
                    ${t?"":`
                    <div class="flex justify-between font-bold"><span>Kas Fisik Dihitung</span><span>${x(P)}</span></div>
                    <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-1"></div>
                    <div class="flex justify-between font-black text-xs ${$===0?"text-emerald-600":$>0?"text-amber-600":"text-rose-600"}">
                        <span>SELISIH KAS</span>
                        <span>${R}</span>
                    </div>`}
                    ${e.closingNotes?`
                    <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-1.5"></div>
                    <div class="text-[10px]"><b>Catatan:</b> ${d(e.closingNotes)}</div>`:""}
                    <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                    <div class="text-center text-[10px] text-slate-400 my-1">${d(c)}</div>
                    <div class="grid grid-cols-2 text-center text-[10px] pt-4 pb-2">
                        <div>
                            <div>Kasir Bertugas</div>
                            <div class="pt-8 font-bold">(${d(e.cashierName)})</div>
                        </div>
                        <div>
                            <div>Supervisor / Admin</div>
                            <div class="pt-8 font-bold">( ................ )</div>
                        </div>
                    </div>
                </div>
                <div class="p-3 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 flex gap-2">
                    <button onclick="window.executeShiftPrintDirect()" class="flex-1 py-2.5 rounded-xl text-white font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-md transition-all active:scale-95" style="background:var(--color-primary)">
                        <i class="fa-solid fa-print"></i> Cetak Sekarang
                    </button>
                </div>
            </div>
        </div>`);return}H.document.write(`<!DOCTYPE html><html><head><meta charset="utf-8"><title>Slip Rekap Shift Kasir</title>
    <style>*{box-sizing:border-box}body{font-family:'Courier New',monospace;font-size:12px;max-width:${s?"330px":"260px"};margin:0 auto;padding:12px}
    h2{text-align:center;font-size:14px;font-weight:900;margin:2px 0;text-transform:uppercase}p{margin:1px 0;text-align:center;font-size:11px}.left{text-align:left}
    table{width:100%;border-collapse:collapse}.line{border-top:1px dashed #333;margin:6px 0}.total{font-weight:900;font-size:13px}
    .sig{margin-top:20px;text-align:center;font-size:10px;display:flex;justify-content:space-between}
    </style></head><body>
    <h2>${o}</h2>${n?`<p>${d(n)}</p>`:""}${r?`<p>WA: ${d(r)}</p>`:""}
    <div class="line"></div>
    <p style="font-weight:900;font-size:12px">${p}</p>
    <div class="line"></div>
    <p class="left">No Shift: <b>#${d(e.shiftNo||e.id)}</b></p>
    <p class="left">Kasir   : ${d(e.cashierName)}</p>
    <p class="left">Mulai   : ${d(b)}</p>
    <p class="left">Selesai : ${d(l)}</p>
    <p class="left">Durasi  : ${d(h)}</p>
    <div class="line"></div>
    <p class="left" style="font-weight:bold">RINGKASAN PENJUALAN:</p>
    <table>
    <tr><td>Total Struk</td><td style="text-align:right">${e.txCount||0} Trx</td></tr>
    <tr><td>Total Barang</td><td style="text-align:right">${e.itemCount||0} Pcs</td></tr>
    <tr><td colspan="2"><div class="line"></div></td></tr>
    <tr><td>Tunai (Cash)</td><td style="text-align:right">${x(e.cashSales||0)}</td></tr>
    <tr><td>QRIS</td><td style="text-align:right">${x(e.qrisSales||0)}</td></tr>
    <tr><td>Transfer Bank</td><td style="text-align:right">${x(e.bankSales||0)}</td></tr>
    <tr><td>Tempo (Piutang)</td><td style="text-align:right">${x(e.tempoSales||0)}</td></tr>
    <tr><td colspan="2"><div class="line"></div></td></tr>
    <tr class="total"><td>TOTAL OMSET</td><td style="text-align:right">${x(e.totalSales||0)}</td></tr>
    ${(e.discountTotal||0)>0?`<tr><td>Diskon Toko</td><td style="text-align:right">-${x(e.discountTotal)}</td></tr>`:""}
    </table>
    <div class="line"></div>
    <p class="left" style="font-weight:bold">REKONSILIASI KAS LACI:</p>
    <table>
    <tr><td>Modal Awal</td><td style="text-align:right">${x(e.startingCash)}</td></tr>
    <tr><td>Penjualan Tunai</td><td style="text-align:right">${x(e.cashSales||0)}</td></tr>
    <tr style="font-weight:bold"><td>Kas Sistem</td><td style="text-align:right">${x(k)}</td></tr>
    ${t?"":`
    <tr style="font-weight:bold"><td>Kas Fisik Laci</td><td style="text-align:right">${x(P)}</td></tr>
    <tr><td colspan="2"><div class="line"></div></td></tr>
    <tr style="font-weight:bold"><td>SELISIH KAS</td><td style="text-align:right">${R}</td></tr>`}
    </table>
    ${e.closingNotes?`<div class="line"></div><p class="left" style="font-size:10px"><b>Catatan:</b> ${d(e.closingNotes)}</p>`:""}
    <div class="line"></div>
    <p style="font-size:10px">${d(c)}</p>
    <div class="sig">
        <div>Kasir<br><br><br><b>(${d(e.cashierName)})</b></div>
        <div>Supervisor / Admin<br><br><br><b>( ................ )</b></div>
    </div>
    <script>window.onload=()=>{window.print();setTimeout(()=>window.close(),800)}<\/script>
    </body></html>`),H.document.close()},We=()=>{const e=typeof Y=="function"?Y():{deviceType:"system"},t=i("pos-shift-receipt-paper-box");if(t)if(e.deviceType==="rawbt"&&window.AndroidNativeApp&&typeof window.AndroidNativeApp.printRawBT=="function"){const a=t.innerText,s=btoa(unescape(encodeURIComponent(a)));window.AndroidNativeApp.printRawBT(s)}else window.AndroidNativeApp&&typeof window.AndroidNativeApp.print=="function"?window.AndroidNativeApp.print():window.print()},me=()=>{const e=[i("pos-shift-btn-storefront"),i("pos-shift-btn-admin")],t=B();e.forEach(a=>{a&&(t&&t.status==="open"?a.id==="pos-shift-btn-storefront"?a.innerHTML=`
                <button onclick="window.openPOSShiftSummaryModal()" class="flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-[10px] font-bold bg-black/15 hover:bg-black/25 text-white border border-white/20 transition-all cursor-pointer shadow-xs active:scale-95" title="Klik untuk lihat ringkasan shift (X-Report)">
                    <i class="fa-solid fa-cash-register text-emerald-300"></i>
                    <span>Shift Aktif: <b class="text-white">${x(t.startingCash)}</b></span>
                </button>`:a.innerHTML=`
                <button onclick="window.openPOSShiftSummaryModal()" class="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-bold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/80 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-all cursor-pointer active:scale-95" title="Klik untuk lihat ringkasan shift (X-Report)">
                    <i class="fa-solid fa-cash-register"></i>
                    <span>Shift Aktif: <b>${x(t.startingCash)}</b></span>
                </button>`:a.id==="pos-shift-btn-storefront"?a.innerHTML=`
                <button onclick="window.openPOSOpenShiftModal()" class="flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-[10px] font-bold bg-amber-500 hover:bg-amber-600 text-white animate-pulse transition-all cursor-pointer shadow-xs active:scale-95" title="Buka shift kasir baru">
                    <i class="fa-solid fa-wallet"></i>
                    <span>Buka Shift</span>
                </button>`:a.innerHTML=`
                <button onclick="window.openPOSOpenShiftModal()" class="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-bold bg-amber-500 hover:bg-amber-600 text-white animate-pulse transition-all cursor-pointer shadow-xs active:scale-95" title="Buka shift kasir baru">
                    <i class="fa-solid fa-wallet"></i>
                    <span>Buka Shift</span>
                </button>`)})},ya=async e=>{const t=typeof e=="string"?i(e):e;t&&(t.innerHTML=`
    <div class="space-y-4">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
                <h3 class="text-sm font-black text-slate-800 dark:text-white uppercase tracking-wider flex items-center gap-2">
                    <i class="fa-solid fa-file-invoice-dollar text-[var(--color-primary)]"></i>
                    <span>Laporan &amp; Rekap Shift Kasir (Z-Report)</span>
                </h3>
                <p class="text-xs text-slate-500 dark:text-slate-400">Riwayat pembukaan, penutupan laci kasir, dan audit selisih kas</p>
            </div>
            <button onclick="window.loadAdminShiftReports()" class="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer self-start sm:self-auto">
                <i class="fa-solid fa-arrows-rotate"></i> Segarkan Data
            </button>
        </div>

        <div id="admin-shift-list-target" class="space-y-3">
            <div class="text-center py-12 text-slate-400"><i class="fa-solid fa-spinner fa-spin text-2xl mb-2"></i><p class="text-xs">Memuat laporan shift kasir...</p></div>
        </div>
    </div>`,await Rt())},Rt=async()=>{const e=i("admin-shift-list-target");if(e)try{const t=await T.collection("freshmart").doc("cms_data").collection("pos_shifts").orderBy("startTime","desc").limit(50).get();if(t.empty){e.innerHTML=`
            <div class="text-center py-14 p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-slate-400 dark:text-slate-500">
                <i class="fa-solid fa-clipboard-list text-3xl mb-2"></i>
                <p class="font-bold text-xs">Belum ada riwayat shift kasir tercatat</p>
                <p class="text-[11px] mt-0.5">Shift yang dibuka dan ditutup oleh kasir akan otomatis terarsip di sini.</p>
            </div>`;return}const a=t.docs.map(s=>{const o=s.data(),n=o.status==="closed",r=o.difference||0,c=n?r===0?'<span class="px-2 py-0.5 rounded-full text-[10px] font-black bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300">PAS</span>':r>0?`<span class="px-2 py-0.5 rounded-full text-[10px] font-black bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300">+${x(r)}</span>`:`<span class="px-2 py-0.5 rounded-full text-[10px] font-black bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300">-${x(Math.abs(r))}</span>`:'<span class="px-2 py-0.5 rounded-full text-[10px] font-black bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300">SEDANG BERJALAN</span>',p=new Date(o.startTime).toLocaleString("id-ID",{dateStyle:"medium",timeStyle:"short"}),b=JSON.stringify(o).replace(/"/g,"&quot;");return`
            <div class="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-xs hover:shadow-sm transition-all space-y-3">
                <div class="flex items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-700/60 pb-2.5">
                    <div class="flex items-center gap-2.5">
                        <div class="w-8 h-8 rounded-xl flex items-center justify-center text-xs text-white shrink-0 ${n?"bg-slate-700":"bg-emerald-600"}">
                            <i class="fa-solid fa-cash-register"></i>
                        </div>
                        <div>
                            <span class="font-bold text-xs text-slate-800 dark:text-white">#${d(o.shiftNo||o.id)}</span>
                            <span class="text-[10px] text-slate-400 block">${p}</span>
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        ${c}
                        <button onclick="window.printShiftSettlementReceipt(${b}, ${!n})" class="w-8 h-8 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-600 dark:text-slate-200 text-xs flex items-center justify-center transition-all cursor-pointer" title="Cetak Slip">
                            <i class="fa-solid fa-print"></i>
                        </button>
                    </div>
                </div>

                <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                    <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-900/50">
                        <span class="text-[10px] text-slate-400 block">Kasir</span>
                        <span class="font-bold text-slate-700 dark:text-slate-200 truncate block">${d(o.cashierName)}</span>
                    </div>
                    <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-900/50">
                        <span class="text-[10px] text-slate-400 block">Modal Awal</span>
                        <span class="font-bold text-slate-700 dark:text-slate-200 block">${x(o.startingCash)}</span>
                    </div>
                    <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-900/50">
                        <span class="text-[10px] text-slate-400 block">Total Omset</span>
                        <span class="font-black text-emerald-600 dark:text-emerald-400 block">${x(o.totalSales||0)}</span>
                    </div>
                    <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-900/50">
                        <span class="text-[10px] text-slate-400 block">Kas Fisik Laci</span>
                        <span class="font-black text-slate-900 dark:text-white block">${x(o.actualCash!==void 0?o.actualCash:(o.startingCash||0)+(o.cashSales||0))}</span>
                    </div>
                </div>

                ${o.closingNotes?`<div class="text-[11px] text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/40 p-2 rounded-xl border border-slate-100 dark:border-slate-800"><b>Catatan:</b> ${d(o.closingNotes)}</div>`:""}
            </div>`}).join("");e.innerHTML=a}catch(t){console.error("[POS Shift] Gagal memuat daftar shift admin:",t),e.innerHTML=`
        <div class="text-center py-10 text-rose-500 text-xs">
            <i class="fa-solid fa-triangle-exclamation text-2xl mb-1"></i>
            <p>Gagal memuat laporan shift: ${d(t.message)}</p>
        </div>`}};window.getActiveShift=B;window.saveActiveShift=Ve;window.clearActiveShift=jt;window.getLastClosedShift=xa;window.isShiftActive=pe;window.openPOSOpenShiftModal=re;window.closePOSOpenShiftModal=Ae;window.posSetStartCashPreset=ga;window.confirmStartPOSShift=ha;window.recordTransactionToShift=Ht;window.openPOSShiftModal=se;window.openPOSShiftSummaryModal=se;window.closePOSShiftSummaryModal=ze;window.openPOSCloseShiftModal=Qe;window.closePOSCloseShiftModal=Oe;window.setPOSCountMode=wa;window.calcPOSDenominations=Dt;window.updatePOSShiftDiscrepancy=Nt;window.confirmClosePOSShift=ka;window.printShiftSettlementReceipt=Ge;window.executeShiftPrintDirect=We;window.renderShiftHeaderBadge=me;window.renderAdminShiftReportView=ya;window.loadAdminShiftReports=Rt;let kt=!1;const Bt=()=>kt?Promise.resolve():ca(()=>import("./pos-variant-sheet-DWhoZtix.js"),__vite__mapDeps([0,1])).then(()=>{kt=!0});let m=[],z="",te="",U="grid";try{const e=localStorage.getItem("pos_view_mode");(e==="list"||e==="grid")&&(U=e)}catch{}let f={name:"",phone:"",isMember:!1,memberId:null,isNewTempo:!1},A="cash",N=0,E=0,I="rp",L=0,V="",vt=null,de=null,ae=null,Se=null,ce=null,Pe=!0,Ee="environment",fe=!1,W=null,yt="",St=0;const Je=e=>{U=e;try{localStorage.setItem("pos_view_mode",e)}catch{}document.querySelectorAll("#pos-view-btn-grid").forEach(t=>{e==="grid"?(t.style.background="var(--color-primary)",t.className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-white shadow-xs"):(t.style.removeProperty("background"),t.className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-slate-500 hover:text-slate-800 dark:text-slate-400")}),document.querySelectorAll("#pos-view-btn-list").forEach(t=>{e==="list"?(t.style.background="var(--color-primary)",t.className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-white shadow-xs"):(t.style.removeProperty("background"),t.className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-slate-500 hover:text-slate-800 dark:text-slate-400")}),D()},J=e=>Math.max(0,parseInt(e)||0),g=e=>ba(e),Z=()=>m.reduce((e,t)=>e+t.subtotal,0),F=()=>{if(I==="percent"){const e=Math.min(100,Math.max(0,parseFloat(L)||0));return Math.round(Z()*e/100)}return Math.min(Z(),J(L||E))},O=()=>Math.max(0,Z()-F()),Et=()=>N-O(),be=e=>{if(!e)return{isManaged:!1,totalStock:0,isOutOfStock:!0,isLowStock:!1};if(!(u?.store?.useStock!==!1))return{isManaged:!1,totalStock:9999,isOutOfStock:!1,isLowStock:!1};let a=0;return Array.isArray(e.variants)&&e.variants.length>0?a=e.variants.reduce((s,o)=>s+(o&&o.stock!=null&&parseFloat(o.stock)||0),0):a=parseFloat(e.stock)||0,{isManaged:!0,totalStock:a,isOutOfStock:a<=0,isLowStock:a>0&&a<=5}},K=()=>{try{const e=window.AudioContext||window.webkitAudioContext;if(!e)return;const t=new e,a=t.createOscillator(),s=t.createGain();a.type="sine",a.frequency.setValueAtTime(1400,t.currentTime),s.gain.setValueAtTime(.08,t.currentTime),s.gain.exponentialRampToValueAtTime(1e-4,t.currentTime+.08),a.connect(s),s.connect(t.destination),a.start(),a.stop(t.currentTime+.08),setTimeout(()=>{t.close().catch(()=>{})},150)}catch{}},Sa=(e,t)=>{if(!e||!e.wholesale||!e.wholesale.length)return null;const a=[...e.wholesale].sort((s,o)=>o.minQty-s.minQty);for(const s of a)if(t>=parseFloat(s.minQty))return parseFloat(s.price);return null},Q=e=>{if(!e.isVariant){const t=(u.products||[]).find(s=>s&&String(s.id)===String(e.id)),a=t?Sa(t,e.qty):null;a!==null?(e.basePrice=e.basePrice||e.price,e.price=a,e.isWholesale=!0):(e.basePrice&&(e.price=e.basePrice),e.isWholesale=!1)}return e.subtotal=Math.max(0,e.price*e.qty-J(e.discount)),e},Pa=()=>{const e=new Date,t=a=>String(a).padStart(2,"0");return`POS-${e.getFullYear()}${t(e.getMonth()+1)}${t(e.getDate())}-${Date.now().toString(36).toUpperCase()}`},Ft=()=>{de&&clearInterval(de);const e=()=>{const a=new Date().toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit",second:"2-digit"})+" WIB";document.querySelectorAll("#pos-live-clock").forEach(s=>{s.textContent=a})};e(),de=setInterval(e,1e3)},Kt=()=>{de&&(clearInterval(de),de=null)};window.stopPOSClock=Kt;const Le=()=>{window.__posBarcodeFn&&(document.removeEventListener("keydown",window.__posBarcodeFn),window.__posBarcodeFn=null)},_t=()=>{Le(),window.__posBarcodeFn=e=>{if(!e||typeof e.key!="string")return;const t=window.curViewName||"";if(!(t==="view-pos-cashier"||t==="view-admin"&&window.cTab==="pos"))return;if(e.key==="F4"){e.preventDefault();const o=i("pos-search-input");o&&(o.focus(),o.select());return}if(e.key==="F6"||e.key==="F7"){e.preventDefault(),He();return}if(e.key==="F8"){e.preventDefault(),he();return}if(e.key==="F9"){e.preventDefault(),i("pos-camera-scanner-modal")?oe():Ne();return}if(e.key==="F10"){e.preventDefault(),pe()?se():re();return}const s=document.activeElement?.tagName?.toLowerCase();if(!(s==="input"||s==="textarea"||s==="select"))if(e.key==="Enter"){if(V&&V.length>=3){const o=V.trim().toLowerCase(),n=(u.products||[]).find(r=>r&&r.isActive!=="false"&&r.isActive!==!1&&(r.barcode&&r.barcode.toLowerCase()===o||r.sku&&r.sku.toLowerCase()===o||r.id&&String(r.id).toLowerCase()===o));if(n)je(n.id),K(),w(`Ditambahkan: ${n.name}`,"success");else{const r=i("pos-search-input");r&&(r.value=V,z=V,D()),w("Barcode tidak ditemukan di katalog","warning")}V=""}}else e.key&&e.key.length===1&&(V=(V||"")+e.key,clearTimeout(vt),vt=setTimeout(()=>{V=""},150))},document.addEventListener("keydown",window.__posBarcodeFn)},je=e=>{const t=(u.products||[]).find(n=>n&&String(n.id)===String(e));if(!t)return;if(t.variants&&t.variants.length>0){Bt().then(()=>{typeof window.openPOSVariantSheet=="function"&&window.openPOSVariantSheet(e)});return}const s=be(t);s.isManaged&&s.isOutOfStock&&w(`Peringatan: Stok "${t.name}" habis di etalase/gudang!`,"warning");const o=m.find(n=>String(n.id)===String(e)&&!n.isVariant);if(o){if(s.isManaged&&o.qty+1>s.totalStock){w(`Stok maksimal "${t.name}" hanya ${s.totalStock} ${t.unit||"pcs"}`,"warning");return}o.qty+=1,Q(o)}else{const n=parseFloat(t.price)||0;m.push(Q({id:t.id,name:t.name,price:n,basePrice:n,qty:1,discount:0,subtotal:n,isVariant:!1,isWholesale:!1}))}K(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"),C()},qt=(e,t)=>{const a=(u.products||[]).find(n=>n&&String(n.id)===String(e));if(!a)return;const s=be(a),o=m.find(n=>String(n.id)===String(e)&&!n.isVariant);if(o){if(s.isManaged&&o.qty+t>s.totalStock){w(`Stok maksimal "${a.name}" hanya ${s.totalStock} ${a.unit||"pcs"}`,"warning");return}o.qty+=t,Q(o)}else{const n=parseFloat(a.price)||0,r=Q({id:a.id,name:a.name,price:n,basePrice:n,qty:t,discount:0,subtotal:n*t,isVariant:!1,isWholesale:!1});m.push(r)}K(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"),C()},Vt=(e,t,a,s,o=1)=>{const n=`${e}__v${s}`,r=m.find(c=>c.cartKey===n);if(r)r.qty+=o,Q(r);else{const p=`${(u.products||[]).find(b=>b&&String(b.id)===String(e))?.name||e} — ${t}`;m.push(Q({id:e,cartKey:n,name:p,variantName:t,variantIdx:s,price:a,basePrice:a,qty:o,discount:0,subtotal:a*o,isVariant:!0,isWholesale:!1}))}K(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"),C()},Ut=(e,t)=>{const a=m.find(s=>(s.cartKey||String(s.id))===String(e));if(a){if(t>0&&!a.isVariant){const s=(u.products||[]).find(o=>o&&String(o.id)===String(a.id));if(s){const o=be(s);if(o.isManaged&&a.qty+t>o.totalStock){w(`Stok maksimal tersedia: ${o.totalStock} ${s.unit||"pcs"}`,"warning");return}}}a.qty=Math.max(1,a.qty+t),Q(a),t>0&&K(),C()}},zt=(e,t)=>{const a=m.find(o=>(o.cartKey||String(o.id))===String(e));if(!a)return;let s=Math.max(1,J(t));if(!a.isVariant){const o=(u.products||[]).find(n=>n&&String(n.id)===String(a.id));if(o){const n=be(o);n.isManaged&&s>n.totalStock&&(w(`Stok maksimal tersedia: ${n.totalStock} ${o.unit||"pcs"}`,"warning"),s=n.totalStock)}}a.qty=s,Q(a),C()},Qt=(e,t)=>{const a=m.find(s=>(s.cartKey||String(s.id))===String(e));a&&(a.discount=Math.min(J(t),a.price*a.qty),Q(a),C())},Gt=e=>{m=m.filter(t=>(t.cartKey||String(t.id))!==String(e)),C(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light")},Wt=()=>{if(m.length===0)return;const e=()=>{m=[],E=0,L=0,I="rp",C(),w("Keranjang kasir dikosongkan.")};typeof window.showConfirm=="function"?window.showConfirm("Kosongkan Keranjang","Hapus semua item dari transaksi saat ini?",e,"Ya, Kosongkan",!0):e()},ge=(e="hold")=>{try{const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const a=new t,s=a.createOscillator(),o=a.createGain();s.type="sine";const n=a.currentTime;e==="hold"?(s.frequency.setValueAtTime(659.25,n),s.frequency.exponentialRampToValueAtTime(880,n+.1)):(s.frequency.setValueAtTime(880,n),s.frequency.exponentialRampToValueAtTime(1174.66,n+.1)),o.gain.setValueAtTime(.08,n),o.gain.exponentialRampToValueAtTime(1e-4,n+.16),s.connect(o),o.connect(a.destination),s.start(),s.stop(n+.16),setTimeout(()=>{a.close().catch(()=>{})},200)}catch{}},Ta=e=>{if(!e)return"";const t=Math.floor((Date.now()-e)/1e3);if(t<45)return"Baru saja";const a=Math.floor(t/60);if(a<60)return`${a} mnt lalu`;const s=Math.floor(a/60);return s<24?`${s} jam lalu`:new Date(e).toLocaleDateString("id-ID",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})};let y=[];try{const e=localStorage.getItem("pos_held_carts");if(e){const t=JSON.parse(e);Array.isArray(t)&&(y=t)}}catch{y=[]}const Ie=()=>{try{localStorage.setItem("pos_held_carts",JSON.stringify(y))}catch{}ne()},ne=()=>{const e=y.length,t=i("pos-held-btn-storefront"),a=i("pos-held-btn-admin");t&&(e>0?t.innerHTML=`
            <button onclick="window.openPOSHeldModal()" class="h-8 px-2.5 sm:px-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-black flex items-center gap-1.5 transition-all active:scale-95 shadow-md cursor-pointer animate-pulse" title="Ada ${e} transaksi antrean tertahan (F8)">
                <i class="fa-solid fa-hourglass-half text-xs"></i>
                <span>${e} Parkir</span>
            </button>`:t.innerHTML=`
            <button onclick="window.openPOSHeldModal()" class="h-8 px-2 sm:px-2.5 rounded-xl bg-black/15 hover:bg-black/25 text-white/90 hover:text-white text-xs font-bold flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer" title="Daftar Transaksi Tertahan (F8)">
                <i class="fa-solid fa-hourglass-half text-xs"></i>
                <span class="hidden sm:inline">Parkir (0)</span>
            </button>`),a&&(e>0?a.innerHTML=`
            <button onclick="window.openPOSHeldModal()" class="px-2.5 py-1 rounded-lg bg-amber-500 hover:bg-amber-600 text-white text-[10px] font-black flex items-center gap-1 shadow-xs transition-all active:scale-95 cursor-pointer animate-pulse" title="Ada ${e} transaksi antrean tertahan (F8)">
                <i class="fa-solid fa-hourglass-half"></i>
                <span>${e} Parkir</span>
            </button>`:a.innerHTML=`
            <button onclick="window.openPOSHeldModal()" class="px-2 py-1 rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 text-[10px] font-bold flex items-center gap-1 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer" title="Daftar Transaksi Tertahan (F8)">
                <i class="fa-solid fa-hourglass-half"></i>
                <span>Parkir</span>
            </button>`)},He=()=>{if(m.length===0){w("Keranjang masih kosong, tidak ada transaksi untuk ditahan.","warning");return}const e=f?.name?`Antrean #${y.length+1} — ${f.name}`:`Antrean #${y.length+1}`,t=m.reduce((s,o)=>s+(o.qty||1),0),a=O();ue(!0),typeof window.pushModalHistory=="function"&&window.pushModalHistory("posHoldPrompt"),document.getElementById("pos-hold-prompt-modal")?.remove(),document.body.insertAdjacentHTML("beforeend",`
    <div id="pos-hold-prompt-modal" class="fixed inset-0 z-[9999] flex items-center justify-center p-4" style="background:rgba(15,23,42,0.65);backdrop-filter:blur(4px)">
        <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-sm border border-slate-200/80 dark:border-slate-800 overflow-hidden transform transition-all animate-scaleIn">
            <div class="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/70 dark:bg-slate-800/40">
                <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-xl bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center text-sm font-bold shadow-2xs">
                        <i class="fa-solid fa-pause"></i>
                    </div>
                    <div>
                        <h3 class="font-black text-sm text-slate-900 dark:text-white leading-tight">Parkir / Tahan Transaksi</h3>
                        <p class="text-[10px] text-slate-400">Simpan antrean sementara (F6)</p>
                    </div>
                </div>
                <button onclick="window.closePOSHoldPrompt()" class="w-7 h-7 rounded-lg bg-slate-200/60 dark:bg-slate-700/60 text-slate-500 hover:text-slate-800 dark:hover:text-white text-base flex items-center justify-center transition-all leading-none cursor-pointer">×</button>
            </div>
            <div class="p-5 space-y-3.5">
                <div class="p-3 bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-800/40 rounded-2xl flex items-center justify-between text-xs">
                    <div>
                        <p class="text-[10px] font-bold text-amber-700 dark:text-amber-300">Total Belanjaan</p>
                        <p class="font-black text-slate-800 dark:text-slate-100 text-sm mt-0.5">${t} item</p>
                    </div>
                    <div class="text-right">
                        <p class="text-[10px] font-bold text-amber-700 dark:text-amber-300">Total Tagihan</p>
                        <p class="font-black text-sm" style="color:var(--color-primary)">${g(a)}</p>
                    </div>
                </div>
                <div>
                    <label class="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1.5 block">Label / Catatan Antrean Pelanggan</label>
                    <input id="pos-hold-note-input" type="text" value="${d(e)}" placeholder="Contoh: Bpk Budi (ambil barang lagi)..."
                        class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-xs font-bold bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)] focus:bg-white dark:focus:bg-slate-900 transition-all"
                        onkeydown="if(event.key==='Enter') window.posConfirmHoldCart();">
                </div>
            </div>
            <div class="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 flex gap-2">
                <button onclick="window.closePOSHoldPrompt()" class="w-1/3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer">Batal</button>
                <button onclick="window.posConfirmHoldCart()" class="w-2/3 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-black text-xs shadow-md active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer">
                    <i class="fa-solid fa-pause"></i>
                    <span>Tahan Transaksi</span>
                </button>
            </div>
        </div>
    </div>`),setTimeout(()=>{const s=i("pos-hold-note-input");s&&(s.focus(),s.select())},50)},De=(e=!1)=>{const t=i("pos-hold-prompt-modal");t&&(!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("posHoldPrompt",!1,()=>t.remove()):t.remove())},Ye=()=>{if(m.length===0)return;const t=(i("pos-hold-note-input")?.value||"").trim()||`Antrean #${y.length+1}`,a={id:`HELD-${Date.now().toString(36).toUpperCase()}`,time:Date.now(),note:t,cart:JSON.parse(JSON.stringify(m)),globalDisc:F(),discountType:I,discountVal:L,customer:{...f},total:O(),subtotal:Z(),itemCount:m.reduce((s,o)=>s+(o.qty||1),0)};y.unshift(a),Ie(),m=[],E=0,L=0,I="rp",f={name:"",phone:"",isMember:!1,memberId:null,isNewTempo:!1},De(),C(),D(),ge("hold"),w(`Antrean "${t}" berhasil diparkir!`,"success")},he=(e=!1)=>{!e&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("posHeldModal"),document.getElementById("pos-held-list-modal")?.remove();const t=y.length,a=t===0?`
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
            ${y.map((s,o)=>{const n=d(s.id),r=(s.cart||[]).slice(0,3).map(p=>`${d(p.name)} (${p.qty}x)`).join(", "),c=(s.cart||[]).length>3?` +${s.cart.length-3} lainnya`:"";return`
                <div class="p-3.5 sm:p-4 hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div class="min-w-0 flex-1">
                        <div class="flex items-center gap-2 mb-1 flex-wrap">
                            <span class="px-2 py-0.5 rounded-lg bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 font-black text-[10px] uppercase">
                                #${o+1}
                            </span>
                            <h4 class="font-black text-xs sm:text-sm text-slate-900 dark:text-white truncate" title="${d(s.note)}">
                                ${d(s.note)}
                            </h4>
                            <span class="text-[10px] text-slate-400">• ${Ta(s.time)}</span>
                        </div>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                            <i class="fa-solid fa-box-open mr-1 text-[10px] opacity-70"></i>
                            <span>${r}${c}</span>
                        </p>
                        <div class="flex items-center gap-3 mt-1.5 text-xs">
                            <span class="text-slate-500 font-medium">${s.itemCount} item</span>
                            <span class="text-slate-300 dark:text-slate-700">•</span>
                            <span class="font-black" style="color:var(--color-primary)">${g(s.total)}</span>
                            ${(s.globalDisc||0)>0?`<span class="text-[10px] text-rose-500 font-bold">(Disc: ${g(s.globalDisc)})</span>`:""}
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
    </div>`)},we=(e=!1)=>{const t=i("pos-held-list-modal");t&&(!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("posHeldModal",!1,()=>t.remove()):t.remove())},Ze=e=>{const t=y.findIndex(a=>a.id===e);if(t===-1){w("Transaksi tertahan tidak ditemukan.","warning");return}if(m.length>0){document.getElementById("pos-recall-confirm-modal")?.remove(),document.body.insertAdjacentHTML("beforeend",`
        <div id="pos-recall-confirm-modal" class="fixed inset-0 z-[10000] flex items-center justify-center p-4" style="background:rgba(15,23,42,0.7);backdrop-filter:blur(4px)">
            <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-sm border border-slate-200/80 dark:border-slate-800 overflow-hidden">
                <div class="p-5 text-center">
                    <div class="w-14 h-14 rounded-2xl bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto mb-3 text-2xl shadow-inner">
                        <i class="fa-solid fa-triangle-exclamation"></i>
                    </div>
                    <h3 class="font-black text-sm text-slate-900 dark:text-white mb-1">Keranjang Masih Berisi Item</h3>
                    <p class="text-xs text-slate-500 leading-relaxed mb-4">
                        Ada <span class="font-bold text-slate-800 dark:text-slate-200">${m.length} jenis item</span> di transaksi aktif saat ini. Ingin tahan transaksi aktif ke antrean baru atau menimpa?
                    </p>
                    <div class="flex flex-col gap-2">
                        <button onclick="window.posHoldCurrentAndRecall('${d(e)}')" class="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5">
                            <i class="fa-solid fa-floppy-disk"></i>
                            <span>Tahan Transaksi Aktif & Panggil</span>
                        </button>
                        <button onclick="window.posOverwriteAndRecall('${d(e)}')" class="w-full py-2 rounded-xl border border-rose-200 dark:border-rose-900 text-rose-600 dark:text-rose-400 font-bold text-xs hover:bg-rose-50 dark:hover:bg-rose-950/20 transition-all cursor-pointer">
                            Timpa Transaksi Aktif
                        </button>
                        <button onclick="document.getElementById('pos-recall-confirm-modal')?.remove()" class="w-full py-2 rounded-xl text-slate-400 text-xs font-medium hover:text-slate-600 transition-all cursor-pointer">
                            Batal
                        </button>
                    </div>
                </div>
            </div>
        </div>`);return}Xe(t)},Xe=e=>{const t=y[e];t&&(m=JSON.parse(JSON.stringify(t.cart||[])),I=t.discountType||"rp",L=t.discountVal!==void 0?t.discountVal:t.globalDisc||0,E=F(),f=t.customer?{...t.customer}:{name:"",phone:"",isMember:!1,memberId:null,isNewTempo:!1},y.splice(e,1),Ie(),we(),C(),D(),ge("recall"),w(`Antrean "${t.note}" berhasil dipanggil kembali!`,"success"))},et=e=>{document.getElementById("pos-recall-confirm-modal")?.remove();const t=f?.name?`Antrean #${y.length+1} — ${f.name}`:`Antrean #${y.length+1}`,a={id:`HELD-${Date.now().toString(36).toUpperCase()}`,time:Date.now(),note:t,cart:JSON.parse(JSON.stringify(m)),globalDisc:F(),discountType:I,discountVal:L,customer:{...f},total:O(),subtotal:Z(),itemCount:m.reduce((o,n)=>o+(n.qty||1),0)};y.unshift(a);const s=y.findIndex(o=>o.id===e);s!==-1?Xe(s):(Ie(),we())},tt=e=>{document.getElementById("pos-recall-confirm-modal")?.remove();const t=y.findIndex(a=>a.id===e);t!==-1&&Xe(t)},at=e=>{const t=y.find(a=>a.id===e);t&&(document.getElementById("pos-delete-confirm-modal")?.remove(),document.body.insertAdjacentHTML("beforeend",`
    <div id="pos-delete-confirm-modal" class="fixed inset-0 z-[10005] flex items-center justify-center p-4" style="background:rgba(15,23,42,0.75);backdrop-filter:blur(4px)">
        <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-xs border border-slate-200 dark:border-slate-800 p-6 text-center transform transition-all">
            <div class="w-14 h-14 rounded-2xl bg-rose-50 dark:bg-rose-950/40 text-rose-500 border border-rose-200 dark:border-rose-900/50 flex items-center justify-center mx-auto mb-3.5 text-2xl shadow-inner">
                <i class="fa-solid fa-trash-can"></i>
            </div>
            <h4 class="font-black text-sm text-slate-900 dark:text-white mb-1.5">Hapus Antrean Ini?</h4>
            <p class="text-xs text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
                Antrean <span class="font-bold text-slate-800 dark:text-slate-200">"${d(t.note)}"</span> (${t.itemCount} item • ${g(t.total)}) akan dihapus permanen.
            </p>
            <div class="flex gap-2.5">
                <button onclick="document.getElementById('pos-delete-confirm-modal')?.remove()" class="flex-1 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer">
                    Batal
                </button>
                <button onclick="window.posExecuteDeleteHeld('${d(e)}')" class="flex-1 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 active:scale-95 text-xs font-bold text-white shadow-md shadow-rose-600/30 transition-all cursor-pointer flex items-center justify-center gap-1.5">
                    <i class="fa-solid fa-trash-can text-[11px]"></i>
                    <span>Ya, Hapus</span>
                </button>
            </div>
        </div>
    </div>`))},st=e=>{document.getElementById("pos-delete-confirm-modal")?.remove();const t=y.find(a=>a.id===e);y=y.filter(a=>a.id!==e),Ie(),w(`Antrean "${t?.note||""}" berhasil dihapus.`,"info"),he(!0)},ot=()=>{const e=i("pos-mobile-cart-drawer"),t=i("pos-mobile-cart-sheet");e&&t&&(e.classList.remove("opacity-0","pointer-events-none"),e.classList.add("opacity-100"),t.classList.remove("translate-y-full"),t.classList.add("translate-y-0"),typeof window.pushModalHistory=="function"&&window.pushModalHistory("posCartDrawer"),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},ue=(e=!1)=>{const t=i("pos-mobile-cart-drawer"),a=i("pos-mobile-cart-sheet");if(t&&a){const s=()=>{a.classList.add("translate-y-full"),a.classList.remove("translate-y-0"),t.classList.add("opacity-0","pointer-events-none"),t.classList.remove("opacity-100")};!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("posCartDrawer",!1,s):s()}},$a=e=>{if(!e)return"";if(e.img&&typeof e.img=="string")return Be(e.img,"w150-rw");const t=(u?.products||[]).find(a=>a&&String(a.id)===String(e.id));return t&&t.img&&typeof t.img=="string"?Be(t.img,"w150-rw"):""},D=()=>{try{if(!u?.products||!u.products.length)try{const r=JSON.parse(localStorage.getItem("freshmart_products")||"null");Array.isArray(r)&&r.length>0&&(u||(window.appData={}),u.products=r)}catch{}const e=Array.isArray(u?.products)?u.products:[],t=e.filter(r=>{if(!r||r.isActive==="false"||r.isActive===!1||te&&r.category!==te)return!1;if(z){const c=String(z).toLowerCase(),p=String(r.name||"").toLowerCase(),b=String(r.barcode||"").toLowerCase(),l=String(r.sku||"").toLowerCase();return p.includes(c)||b.includes(c)||l.includes(c)}return!0}),a=e.filter(r=>r&&r.isActive!=="false"&&r.isActive!==!1&&r.category).map(r=>String(r.category).trim()).filter(r=>r.length>0),o=["Semua",...new Set(a)].map(r=>{const c=r==="Semua",p=c?!te:te===r;return`<button onclick="window.posCatFilter('${d(c?"":r)}')" class="shrink-0 px-3.5 py-1.5 rounded-xl text-[11px] font-black uppercase tracking-wider border transition-all active:scale-95 shadow-2xs ${p?"text-white border-transparent":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/50"}" style="${p?"background:var(--color-primary)":""}">${d(r)}</button>`}).join(""),n=t.length===0?`<div class="col-span-full flex flex-col items-center justify-center py-20 text-slate-400 dark:text-slate-600">
                 <div class="w-16 h-16 rounded-3xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 mb-3 shadow-inner">
                   <i class="fa-solid fa-box-open text-2xl"></i>
                 </div>
                 <p class="font-bold text-sm text-slate-600 dark:text-slate-400">Produk Tidak Ditemukan</p>
                 <p class="text-xs text-slate-400 mt-0.5">Coba gunakan kata kunci pencarian atau kategori lain</p>
               </div>`:t.map(r=>{if(!r)return"";const c=!!(r.img&&typeof r.img=="string"&&r.img.trim()),p=c?Be(r.img,"w300-rw"):"",b=Array.isArray(r.variants)&&r.variants.length>0,l=Array.isArray(r.wholesale)&&r.wholesale.length>0,k=m.filter(v=>v&&String(v.id)===String(r.id)).reduce((v,j)=>v+(j&&j.qty?j.qty:0),0),P=d(String(r.id!=null?r.id:"")),$=be(r),R=d(String(r.name||"Produk")),H=d(String(r.category||"")),ye=parseFloat(r.price)||0;return U==="list"?`
                    <div class="pos-list-item${k>0?" in-cart":""}${$.isOutOfStock?" opacity-75":""}" onclick="window.posAddToCart('${P}')">
                        <div class="pos-list-thumb">
                            ${c?`<img width="52" height="52" loading="lazy" decoding="async" src="${d(p)}" alt="${R}" onerror="this.onerror=null;this.style.display='none';this.nextElementSibling.style.display='flex';">
                                   <div class="pos-img-placeholder" style="display:none;width:100%;height:100%"><i class="fa-solid fa-box" style="font-size:16px;margin:0"></i></div>`:'<div class="pos-img-placeholder" style="width:100%;height:100%"><i class="fa-solid fa-box" style="font-size:16px;margin:0"></i></div>'}
                            ${k>0?`<div class="pos-qty-badge" style="top:2px;right:2px;min-width:18px;height:18px;font-size:9px;border-width:1.5px">${k}</div>`:""}
                        </div>
                        <div style="flex:1;min-width:0">
                            <div style="display:flex;align-items:center;gap:4px;flex-wrap:wrap;margin-bottom:3px">
                                ${H?`<span style="font-size:9px;text-transform:uppercase;letter-spacing:0.06em;font-weight:700;color:#94a3b8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:80px">${H}</span>`:""}
                                ${b?'<span class="pos-badge pos-badge-varian"><i class="fa-solid fa-layer-group" style="font-size:6px"></i> VARIAN</span>':""}
                                ${l?'<span class="pos-badge pos-badge-grosir"><i class="fa-solid fa-tags" style="font-size:6px"></i> GROSIR</span>':""}
                                ${$.isOutOfStock?'<span class="pos-badge pos-badge-habis"><i class="fa-solid fa-ban" style="font-size:6px"></i> HABIS</span>':""}
                                ${$.isLowStock?`<span class="pos-badge pos-badge-low"><i class="fa-solid fa-triangle-exclamation" style="font-size:6px"></i> SISA ${$.totalStock}</span>`:""}
                            </div>
                            <p class="text-xs font-bold text-slate-800 dark:text-slate-100 truncate" title="${R}">${R}</p>
                            <p style="font-size:12px;font-weight:900;color:var(--color-primary);margin-top:2px">${g(ye)}</p>
                        </div>
                        <button onclick="event.stopPropagation();window.posAddToCart('${P}')" class="pos-add-btn" title="Tambah ke keranjang">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>`:`
                <div class="pos-product-card${k>0?" in-cart":""}${$.isOutOfStock?" opacity-75":""}" onclick="window.posAddToCart('${P}')">
                    <!-- Kotak Gambar Rasio 1:1 Anti-Collapse (aspect-ratio 1:1 + min-height 120px) -->
                    <div class="pos-img-box">
                        <div class="pos-img-badges">
                            ${b?'<span class="pos-badge pos-badge-varian"><i class="fa-solid fa-layer-group" style="font-size:6px"></i> VARIAN</span>':""}
                            ${l?'<span class="pos-badge pos-badge-grosir"><i class="fa-solid fa-tags" style="font-size:6px"></i> GROSIR</span>':""}
                            ${$.isOutOfStock?'<span class="pos-badge pos-badge-habis"><i class="fa-solid fa-ban" style="font-size:6px"></i> HABIS</span>':""}
                            ${$.isLowStock?`<span class="pos-badge pos-badge-low"><i class="fa-solid fa-triangle-exclamation" style="font-size:6px"></i> SISA ${$.totalStock}</span>`:""}
                        </div>
                        ${k>0?`<div class="pos-qty-badge">${k}</div>`:""}
                        ${c?`<img width="300" height="300" loading="lazy" decoding="async" src="${d(p)}" alt="${R}"
                                 onerror="this.onerror=null;this.style.display='none';this.nextElementSibling.style.display='flex';">
                               <div class="pos-img-placeholder" style="display:none">
                                 <i class="fa-solid fa-box-open"></i>
                                 <span>${d(r.category||"Toko")}</span>
                               </div>`:`<div class="pos-img-placeholder">
                                 <i class="fa-solid fa-box-open"></i>
                                 <span>${d(r.category||"Produk")}</span>
                               </div>`}
                    </div>
                    <!-- Info Produk -->
                    <div class="pos-card-info">
                        ${H?`<p class="pos-card-cat">${H}</p>`:""}
                        <p class="pos-card-name" title="${R}">${R}</p>
                        <div class="pos-card-footer">
                            <span class="pos-card-price">${g(ye)}</span>
                            <button onclick="event.stopPropagation();window.posAddToCart('${P}')" class="pos-add-btn" title="Tambah ke keranjang">
                                <i class="fa-solid fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>`}).join("");document.querySelectorAll("#pos-cat-filter").forEach(r=>{r.innerHTML=o}),document.querySelectorAll("#pos-catalog-grid").forEach(r=>{r.className=U==="list"?"pos-catalog-list-mode":"pos-catalog-grid-mode",r.innerHTML=n})}catch(e){console.error("[POS] renderCatalog error:",e),document.querySelectorAll("#pos-catalog-grid").forEach(t=>{t.innerHTML=`
                <div class="col-span-full flex flex-col items-center justify-center py-16 text-slate-500">
                    <i class="fa-solid fa-triangle-exclamation text-amber-500 text-3xl mb-3"></i>
                    <p class="font-bold text-sm text-slate-700 dark:text-slate-300">Gagal Memuat Katalog Kasir</p>
                    <p class="text-xs text-slate-400 mt-1 mb-4">${d(e.message||"Terjadi kesalahan")}</p>
                    <button onclick="window.renderCatalog()" class="px-4 py-2 rounded-xl text-xs font-bold text-white shadow-md active:scale-95 cursor-pointer" style="background:var(--color-primary)">
                        <i class="fa-solid fa-arrows-rotate mr-1.5"></i> Coba Muat Ulang
                    </button>
                </div>`})}},C=()=>{const e=m.reduce((l,h)=>l+h.qty,0),t=Z(),a=O(),s=g(a),o=g(t),n=m.length===0?`<div class="flex flex-col items-center justify-center h-full py-12 text-slate-300 dark:text-slate-600 select-none">
            <div class="w-16 h-16 rounded-3xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 mb-3 shadow-inner">
                <i class="fa-solid fa-cart-shopping text-2xl"></i>
            </div>
            <p class="text-sm font-bold text-slate-600 dark:text-slate-400">Keranjang Kasir Kosong</p>
            <p class="text-xs text-slate-400 mt-1 text-center max-w-[200px]">Pilih produk di katalog atau scan barcode untuk menambah</p>
           </div>`:m.map(l=>{const h=d(String(l.cartKey||l.id)),k=$a(l),P=l.isVariant&&l.variantName?d(l.name.replace(` — ${l.variantName}`,"")):d(l.name);return`
            <div class="group flex items-center gap-2.5 p-2 sm:p-2.5 bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 shadow-xs hover:border-[var(--color-primary)] transition-all">
                <!-- 40px Thumbnail -->
                <div class="w-10 h-10 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-700 shrink-0 border border-slate-100 dark:border-slate-700 flex items-center justify-center">
                    ${k?`<img width="40" height="40" loading="lazy" src="${d(k)}" alt="${d(l.name)}" onerror="this.onerror=null; this.style.display='none'; this.nextElementSibling.style.display='flex';" class="w-full h-full object-cover">
                           <div class="hidden w-full h-full items-center justify-center text-slate-400"><i class="fa-solid fa-box text-xs"></i></div>`:'<div class="w-full h-full flex items-center justify-center text-slate-400"><i class="fa-solid fa-box text-xs"></i></div>'}
                </div>
                <!-- Details -->
                <div class="flex-1 min-w-0">
                    <p class="text-xs font-bold text-slate-800 dark:text-slate-100 truncate leading-snug" title="${d(l.name)}">${P}</p>
                    <div class="flex items-center gap-1.5 mt-0.5 flex-wrap">
                        ${l.isWholesale?'<span class="inline-flex items-center text-[8px] font-black px-1.5 py-0.5 rounded text-white shadow-2xs" style="background:var(--color-primary)">GROSIR</span>':""}
                        ${l.isVariant?`<span class="inline-flex items-center gap-1 text-[8px] font-black px-1.5 py-0.5 rounded text-white shadow-2xs" style="background:var(--color-primary);opacity:0.95"><i class="fa-solid fa-layer-group text-[7px]"></i>${d(l.variantName||"VARIAN")}</span>`:""}
                        <span class="text-[10px] text-slate-500 font-medium">
                            ${l.isWholesale&&l.basePrice?`<span class="line-through text-slate-400">${g(l.basePrice)}</span> <span class="font-bold" style="color:var(--color-primary)">${g(l.price)}</span>`:g(l.price)}
                        </span>
                    </div>
                    <div class="flex items-center gap-1 mt-1">
                        <span class="text-[9px] text-slate-400 font-bold uppercase">Diskon:</span>
                        <input type="number" min="0" placeholder="0" value="${l.discount||""}" onchange="window.posSetItemDisc('${h}',this.value)"
                            class="w-16 text-[10px] font-bold border border-slate-200 dark:border-slate-600 rounded-lg px-1.5 py-0.5 bg-slate-50 dark:bg-slate-700 text-right focus:outline-none focus:border-[var(--color-primary)]">
                    </div>
                </div>
                <!-- Stepper & Subtotal -->
                <div class="flex flex-col items-end gap-1 shrink-0">
                    <div class="flex items-center gap-0.5 bg-slate-100 dark:bg-slate-700/80 rounded-lg p-0.5 border border-slate-200 dark:border-slate-600">
                        <button onclick="window.posUpdateQty('${h}',-1)" class="w-5 h-5 rounded text-slate-600 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-600 font-black text-xs flex items-center justify-center cursor-pointer active:scale-90">−</button>
                        <input type="number" min="1" value="${l.qty}" onchange="window.posSetQty('${h}',this.value)"
                            class="w-6 text-center text-[11px] font-black bg-transparent text-slate-800 dark:text-slate-100 focus:outline-none">
                        <button onclick="window.posUpdateQty('${h}',1)" class="w-5 h-5 rounded text-slate-600 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-600 font-black text-xs flex items-center justify-center cursor-pointer active:scale-90">+</button>
                    </div>
                    <p class="text-xs font-black" style="color:var(--color-primary)">${g(l.subtotal)}</p>
                    <button onclick="window.posRemoveItem('${h}')" class="text-slate-400 hover:text-rose-500 text-[11px] p-0.5 transition-colors" title="Hapus item">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            </div>`}).join("");document.querySelectorAll(".pos-cart-items-target").forEach(l=>l.innerHTML=n),document.querySelectorAll(".pos-subtotal-target").forEach(l=>l.textContent=o),document.querySelectorAll(".pos-total-target").forEach(l=>l.textContent=s),document.querySelectorAll(".pos-item-count-target").forEach(l=>l.textContent=String(e));const r=F(),c=g(r);document.querySelectorAll(".pos-disc-val-input").forEach(l=>{document.activeElement!==l&&(l.value=L||"")}),document.querySelectorAll(".pos-global-disc-target").forEach(l=>{document.activeElement!==l&&(l.value=L||"")}),document.querySelectorAll(".pos-disc-preview-target").forEach(l=>{l.textContent=r>0?`- ${c}`:"Rp 0",r>0?(l.classList.remove("text-slate-400"),l.classList.add("text-rose-500")):(l.classList.add("text-slate-400"),l.classList.remove("text-rose-500"))}),document.querySelectorAll(".pos-disc-type-rp").forEach(l=>{I==="rp"?l.className="pos-disc-type-rp px-2 py-0.5 rounded-md transition-all cursor-pointer bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 shadow-xs font-black":l.className="pos-disc-type-rp px-2 py-0.5 rounded-md transition-all cursor-pointer text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 font-bold"}),document.querySelectorAll(".pos-disc-type-pct").forEach(l=>{I==="percent"?l.className="pos-disc-type-pct px-2 py-0.5 rounded-md transition-all cursor-pointer bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 shadow-xs font-black":l.className="pos-disc-type-pct px-2 py-0.5 rounded-md transition-all cursor-pointer text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 font-bold"}),document.querySelectorAll(".pos-disc-prefix").forEach(l=>{l.textContent=I==="percent"?"%":"Rp"});const p=I==="percent"?`
        <button onclick="window.posApplyQuickDiscount(5,'percent')" class="px-2 py-0.5 rounded-md bg-slate-200/70 hover:bg-slate-300/80 dark:bg-slate-700 dark:hover:bg-slate-600 text-[9px] font-black text-slate-700 dark:text-slate-200 cursor-pointer transition-all">5%</button>
        <button onclick="window.posApplyQuickDiscount(10,'percent')" class="px-2 py-0.5 rounded-md bg-slate-200/70 hover:bg-slate-300/80 dark:bg-slate-700 dark:hover:bg-slate-600 text-[9px] font-black text-slate-700 dark:text-slate-200 cursor-pointer transition-all">10%</button>
        <button onclick="window.posApplyQuickDiscount(15,'percent')" class="px-2 py-0.5 rounded-md bg-slate-200/70 hover:bg-slate-300/80 dark:bg-slate-700 dark:hover:bg-slate-600 text-[9px] font-black text-slate-700 dark:text-slate-200 cursor-pointer transition-all">15%</button>
        <button onclick="window.posApplyQuickDiscount(20,'percent')" class="px-2 py-0.5 rounded-md bg-slate-200/70 hover:bg-slate-300/80 dark:bg-slate-700 dark:hover:bg-slate-600 text-[9px] font-black text-slate-700 dark:text-slate-200 cursor-pointer transition-all">20%</button>
        <button onclick="window.posApplyQuickDiscount(50,'percent')" class="px-2 py-0.5 rounded-md bg-slate-200/70 hover:bg-slate-300/80 dark:bg-slate-700 dark:hover:bg-slate-600 text-[9px] font-black text-slate-700 dark:text-slate-200 cursor-pointer transition-all">50%</button>
        ${L>0?`<button onclick="window.posApplyQuickDiscount(0,'percent')" class="px-2 py-0.5 rounded-md bg-rose-100 hover:bg-rose-200 dark:bg-rose-950/40 text-[9px] font-black text-rose-600 cursor-pointer transition-all">Reset</button>`:""}
        `:`
        <button onclick="window.posApplyQuickDiscount(2000,'rp')" class="px-2 py-0.5 rounded-md bg-slate-200/70 hover:bg-slate-300/80 dark:bg-slate-700 dark:hover:bg-slate-600 text-[9px] font-black text-slate-700 dark:text-slate-200 cursor-pointer transition-all">2rb</button>
        <button onclick="window.posApplyQuickDiscount(5000,'rp')" class="px-2 py-0.5 rounded-md bg-slate-200/70 hover:bg-slate-300/80 dark:bg-slate-700 dark:hover:bg-slate-600 text-[9px] font-black text-slate-700 dark:text-slate-200 cursor-pointer transition-all">5rb</button>
        <button onclick="window.posApplyQuickDiscount(10000,'rp')" class="px-2 py-0.5 rounded-md bg-slate-200/70 hover:bg-slate-300/80 dark:bg-slate-700 dark:hover:bg-slate-600 text-[9px] font-black text-slate-700 dark:text-slate-200 cursor-pointer transition-all">10rb</button>
        <button onclick="window.posApplyQuickDiscount(25000,'rp')" class="px-2 py-0.5 rounded-md bg-slate-200/70 hover:bg-slate-300/80 dark:bg-slate-700 dark:hover:bg-slate-600 text-[9px] font-black text-slate-700 dark:text-slate-200 cursor-pointer transition-all">25rb</button>
        <button onclick="window.posApplyQuickDiscount(50000,'rp')" class="px-2 py-0.5 rounded-md bg-slate-200/70 hover:bg-slate-300/80 dark:bg-slate-700 dark:hover:bg-slate-600 text-[9px] font-black text-slate-700 dark:text-slate-200 cursor-pointer transition-all">50rb</button>
        ${L>0?`<button onclick="window.posApplyQuickDiscount(0,'rp')" class="px-2 py-0.5 rounded-md bg-rose-100 hover:bg-rose-200 dark:bg-rose-950/40 text-[9px] font-black text-rose-600 cursor-pointer transition-all">Reset</button>`:""}
        `;document.querySelectorAll(".pos-disc-chips-target").forEach(l=>l.innerHTML=p),document.querySelectorAll(".pos-pay-btn-target").forEach(l=>{l.disabled=m.length===0;const h=l.querySelector(".btn-text");h&&(h.textContent=m.length>0?`BAYAR — ${s}`:"PROSES PEMBAYARAN")}),document.querySelectorAll(".pos-hold-btn-target").forEach(l=>{l.disabled=m.length===0,m.length===0?l.classList.add("opacity-40","cursor-not-allowed"):l.classList.remove("opacity-40","cursor-not-allowed")}),ne();const b=i("pos-mobile-floating-bar");b&&(m.length>0?(b.classList.remove("translate-y-32","opacity-0","pointer-events-none"),b.classList.add("translate-y-0","opacity-100")):(b.classList.add("translate-y-32","opacity-0","pointer-events-none"),b.classList.remove("translate-y-0","opacity-100"),ue(!0)))},Jt=()=>{if(m.length===0){w("Keranjang masih kosong!","warning");return}typeof window.pushModalHistory=="function"&&window.pushModalHistory("posPayment"),f={name:"",phone:"",isMember:!1,memberId:null,isNewTempo:!1},A="cash",N=O(),X(),ke(),document.body.insertAdjacentHTML("beforeend",`
    <div id="pos-pay-modal" class="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4" style="background:rgba(15,23,42,0.65);backdrop-filter:blur(4px)">
      <div class="bg-white dark:bg-slate-900 rounded-t-3xl sm:rounded-3xl shadow-2xl w-full sm:max-w-md max-h-[94vh] flex flex-col overflow-hidden border border-slate-200/80 dark:border-slate-800">
        <!-- Header -->
        <div class="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0 bg-slate-50/60 dark:bg-slate-800/40">
          <div>
            <h2 class="font-black text-base text-slate-900 dark:text-white flex items-center gap-2">
              <i class="fa-solid fa-cash-register" style="color:var(--color-primary)"></i>
              <span>Proses Pembayaran Kasir</span>
            </h2>
            <p class="text-xs text-slate-500 mt-0.5">Total Tagihan: <span class="font-black text-sm" style="color:var(--color-primary)">${g(O())}</span></p>
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
    </div>`),Fe("cash")},rt=(e=!1)=>{const t=i("pos-pay-modal");t&&(!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("posPayment",!1,()=>t.remove()):t.remove())},Yt=(e,t,a)=>{a.forEach(s=>{const o=i(`${e}-${s}`);o&&(s===t?(o.style.background="var(--color-primary)",o.style.color="white",o.style.borderColor="var(--color-primary)",o.classList.add("shadow-xs")):(o.style.removeProperty("background"),o.style.removeProperty("color"),o.style.removeProperty("border-color"),o.classList.remove("shadow-xs")))})},Fe=e=>{const t=i("pos-pay-detail");if(!t)return;const a=O(),s=`
      <div class="flex justify-between items-center py-2 px-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-700/60 mb-2.5 text-xs">
        <span class="text-slate-500 font-medium">Total yang Harus Dibayar</span>
        <span class="font-black text-sm" style="color:var(--color-primary)">${g(a)}</span>
      </div>`;if(e==="cash"){const n=[{label:"Uang Pas",val:a,isPas:!0},{label:"10.000",val:1e4},{label:"20.000",val:2e4},{label:"50.000",val:5e4},{label:"100.000",val:1e5},{label:"200.000",val:2e5},{label:"500.000",val:5e5}].map(r=>`
            <button onclick="window.posSetQuickCash(${r.val})" type="button"
                class="px-2.5 py-1.5 rounded-xl text-[11px] font-black border transition-all active:scale-95 ${r.isPas?"text-white border-transparent shadow-xs":"bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]"}"
                style="${r.isPas?"background:var(--color-primary)":""}">
                ${r.isPas?"💵 Uang Pas":`Rp ${r.label}`}
            </button>
        `).join("");t.innerHTML=`
            ${s}
            <div class="space-y-2">
                <label class="text-[10px] font-black uppercase tracking-wider text-slate-400">Nominal Uang Diterima (Rp)</label>
                <div class="relative">
                    <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-black text-slate-400">Rp</span>
                    <input id="pos-paid-input" type="number" min="0" placeholder="${a}" value="${N||""}"
                        class="w-full border-2 rounded-2xl pl-10 pr-4 py-2.5 text-base sm:text-lg font-black bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none text-right transition-all"
                        style="border-color:var(--color-primary)" oninput="window.updatePosChange(this.value)">
                </div>

                <!-- Quick Cash Buttons Grid -->
                <div class="pt-1">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Pilihan Uang Cepat (1-Klik)</p>
                    <div class="grid grid-cols-3 sm:grid-cols-4 gap-1.5">
                        ${n}
                    </div>
                </div>

                <!-- Kembalian Box -->
                <div id="pos-change-box" class="mt-2.5 p-3 rounded-2xl border transition-all flex items-center justify-between ${N>=a?"bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800":"bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800"}">
                    <div>
                        <p class="text-[9px] font-black uppercase tracking-wider text-slate-400">Status Kembalian</p>
                        <p id="pos-change-label" class="text-xs font-bold ${N>=a?"text-emerald-700 dark:text-emerald-400":"text-rose-700 dark:text-rose-400"}">
                            ${N>=a?"Kembalian Uang Pembeli:":"Uang Masih Kurang:"}
                        </p>
                    </div>
                    <span id="pos-change-display" class="text-base font-black ${N>=a?"text-emerald-700 dark:text-emerald-400":"text-rose-600 dark:text-rose-400"}">
                        ${g(Math.abs(Et()))}
                    </span>
                </div>
            </div>
        `}else if(e==="qris"){const o=u.payment?.qrisUrl||"";t.innerHTML=`
          ${s}
          ${o?`<div class="flex flex-col items-center justify-center p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700"><img src="${d(o)}" class="w-48 h-48 object-contain rounded-xl shadow-xs" alt="QRIS"><p class="text-center text-xs font-bold text-slate-600 dark:text-slate-300 mt-2">Arahkan kamera pembeli untuk memindai QRIS</p></div>`:'<div class="p-4 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 text-xs rounded-2xl border border-amber-200 text-center font-bold"><i class="fa-solid fa-triangle-exclamation mr-1.5"></i>QRIS toko belum diatur di menu Pengaturan.</div>'}`}else if(e==="transfer"){const n=(Array.isArray(u.banks)?u.banks:[]).filter(c=>c&&(c.bankName||c.name||c.bank));let r='<option value="">Rekening bank belum diatur di CMS Admin</option>';n.length>0&&(r=n.map(c=>{const p=c.bankName||c.name||c.bank||"Bank",b=c.bankAccount||c.number||c.noRekening||c.account||"",l=c.bankOwner||c.holder||c.atasNama||c.owner||"",h=`${p}${b?" — "+b:""}${l?" a/n "+l:""}`;return`<option value="${d(h)}">${d(h)}</option>`}).join("")),t.innerHTML=`
          ${s}
          <div class="space-y-2">
            <label class="text-[10px] font-black uppercase tracking-wider text-slate-400 block">Rekening Tujuan Toko</label>
            <div class="relative">
              <select id="pos-bank-sel" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)] transition-all">
                ${r}
              </select>
            </div>
            ${n.length>0?`
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
          </div>`}else e==="tempo"&&(t.innerHTML=`
          ${s}
          <div class="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-2xl border border-amber-200 dark:border-amber-700/80 mb-2.5">
            <p class="text-xs font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1.5"><i class="fa-solid fa-hourglass-half"></i> Pembayaran Tempo / Piutang</p>
            <p class="text-[10px] text-amber-700 dark:text-amber-400 mt-1">Transaksi otomatis dicatat sebagai piutang di database toko.</p>
          </div>
          <label class="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1">Uang Muka / DP (Rp) — opsional</label>
          <input id="pos-dp-input" type="number" min="0" placeholder="0" value="0" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-black text-right bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)]">`)},Zt=e=>{f.isMember=e==="member",f.isNewTempo=e==="tempo",Yt("pos-ctype",e,["umum","member","tempo"]);const t=i("pos-customer-fields");t&&(e==="umum"?(f.name="",f.phone="",f.memberId=null,f.points=0,t.innerHTML='<input id="pos-cust-name" type="text" placeholder="Nama pembeli (opsional)" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)] focus:bg-white">'):e==="member"?(t.innerHTML=`
          <div class="space-y-2">
            <div class="flex gap-2">
              <div class="relative flex-1">
                <i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
                <input id="pos-cust-phone" type="text" placeholder="Ketik No. HP / Nama / ID Member..."
                  value="${f.isMember?d(f.phone||f.name||""):""}"
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
          </div>`,X().then(()=>{i("pos-cust-phone")?.value?.trim()&&ve()})):e==="tempo"&&(f.isMember=!1,nt("tempo"),t.innerHTML=`
          <div class="space-y-2">
            <input id="pos-cust-name" type="text" placeholder="Nama Pelanggan / Rekanan *" required class="w-full border border-amber-300 dark:border-amber-600 rounded-xl px-3 py-2 text-xs bg-amber-50/40 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none">
            <input id="pos-cust-phone" type="tel" placeholder="No. WhatsApp Pelanggan *" required class="w-full border border-amber-300 dark:border-amber-600 rounded-xl px-3 py-2 text-xs bg-amber-50/40 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none">
          </div>`))},nt=e=>{A=e,Yt("pos-pay",e,["cash","qris","transfer","tempo"]),Fe(e),e==="transfer"&&(!u.banks||!u.banks.length)&&ke().then(t=>{A==="transfer"&&t&&t.length>0&&Fe("transfer")})},it=e=>{N=J(e);const t=O(),a=N-t,s=i("pos-change-display"),o=i("pos-change-label"),n=i("pos-change-box"),r=i("pos-process-btn");s&&(s.textContent=g(Math.abs(a))),o&&(o.textContent=a>=0?"Kembalian Uang Pembeli:":"Uang Masih Kurang:"),s&&(s.className=`text-base font-black ${a>=0?"text-emerald-700 dark:text-emerald-400":"text-rose-600 dark:text-rose-400"}`),n&&(n.className=`mt-2.5 p-3 rounded-2xl border transition-all flex items-center justify-between ${a>=0?"bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800":"bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800"}`),r&&A==="cash"&&(r.disabled=a<0,r.classList.toggle("opacity-50",a<0))},lt=e=>{const t=i("pos-paid-input");t&&(t.value=e,it(e),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},ke=async()=>{if(Array.isArray(u.banks)&&u.banks.length>0)return u.banks;try{const e=await T.collection("freshmart").doc("cms_data").get();if(e.exists){const t=e.data();if(Array.isArray(t?.banks)&&t.banks.length>0)return u.banks=t.banks,u.banks}}catch{}return u.banks||[]},X=async()=>{if(u.customers&&u.customers.length>0)return u.customers;try{const e=await T.collection("freshmart").doc("cms_data").collection("customers").get();return u.customers=e.docs.map(t=>({...t.data(),id:t.id,_docId:t.id})),u.customers}catch{return u.customers||[]}},Xt=(e,t)=>{if(!e||!t||!t.length)return[];const a=e.trim().toLowerCase(),s=a.replace(/\D/g,"");let o=s;o.startsWith("62")?o=o.slice(2):o.startsWith("0")&&(o=o.slice(1));const n=[],r=new Set;return t.forEach(c=>{if(!c)return;const p=String(c.id||c._docId||c.phone||"");if(r.has(p))return;const b=String(c.phone||"").replace(/\D/g,"");let l=b;l.startsWith("62")?l=l.slice(2):l.startsWith("0")&&(l=l.slice(1));const h=String(c.name||"").toLowerCase();let k=!1;o.length>=4&&l&&(l===o||l.endsWith(o)||o.endsWith(l)||b.includes(s))&&(k=!0),!k&&(p.toLowerCase()===a||p===s)&&(k=!0),!k&&a.length>=2&&h.includes(a)&&(k=!0),k&&(r.add(p),n.push(c))}),n},Ca=async e=>{if(!e)return null;const t=e.trim(),a=t.replace(/\D/g,"");let s=a;s.startsWith("62")?s=s.slice(2):s.startsWith("0")&&(s=s.slice(1));const o=T.collection("freshmart").doc("cms_data").collection("customers"),r=Array.from(new Set([s?"62"+s:null,s?"0"+s:null,s||null,s?"+62"+s:null,a||null,t].filter(Boolean))).map(async b=>{try{const l=await o.doc(b).get();if(l&&l.exists)return{...l.data(),id:l.id,_docId:l.id}}catch{}return null}),p=(await Promise.all(r)).find(Boolean);if(p){u.customers||(u.customers=[]);const b=u.customers.findIndex(l=>String(l.id||l.phone)===String(p.id||p.phone));return b>-1?u.customers[b]=p:u.customers.push(p),p}try{const b=await o.limit(300).get();if(!b.empty){u.customers=b.docs.map(h=>({...h.data(),id:h.id,_docId:h.id}));const l=Xt(e,u.customers);if(l.length>0)return l[0]}}catch{}return null},$e=e=>{f.isMember=!0,f.name=e.name||"Member Toko",f.phone=e.phone||"",f.memberId=e.id||e._docId||e.phone,f.points=parseFloat(e.points)||0;const t=i("pos-cust-phone");t&&(t.value=e.phone||e.name||"");const a=f.points,s=typeof window.getMemberTier=="function"?window.getMemberTier(a):{badge:"MEMBER RESMI"},o=i("pos-member-result");o&&(o.innerHTML=`
        <div class="p-3 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/30 rounded-2xl border border-emerald-300 dark:border-emerald-700/60 shadow-xs flex items-center justify-between gap-2.5">
          <div class="flex items-center gap-2.5 min-w-0">
            <div class="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs">
              <i class="fa-solid fa-id-card text-base"></i>
            </div>
            <div class="min-w-0">
              <div class="flex items-center gap-1.5 flex-wrap">
                <span class="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-700">${d(s.badge||"VIP")}</span>
                <span class="text-[10px] font-black text-amber-600 dark:text-amber-400 flex items-center gap-0.5"><i class="fa-solid fa-star text-[9px]"></i>${a} Poin</span>
              </div>
              <p class="text-xs font-black text-slate-800 dark:text-white truncate mt-0.5">${d(e.name||"Pelanggan Setia")}</p>
              <p class="text-[10px] text-slate-500 dark:text-slate-400 font-mono">${d(e.phone||"")}</p>
            </div>
          </div>
          <button onclick="window.resetPosMember()" type="button" class="shrink-0 px-2.5 py-1.5 rounded-xl text-[10px] font-bold text-slate-600 hover:text-rose-600 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-all cursor-pointer" title="Ganti Member">
            <i class="fa-solid fa-rotate-left mr-1"></i>Ganti
          </button>
        </div>`),w(`Member terdeteksi: ${e.name} (${a} Poin)`,"success")},dt=e=>{const a=(u.customers||[]).find(s=>s&&String(s.id||s._docId||s.phone)===String(e));a&&$e(a)},ct=()=>{f.isMember=!1,f.name="",f.phone="",f.memberId=null,f.points=0;const e=i("pos-cust-phone");e&&(e.value="",e.focus());const t=i("pos-member-result");t&&(t.innerHTML="")};let Pt=null;const pt=()=>{clearTimeout(Pt);const e=i("pos-cust-phone")?.value?.trim()||"";if(!e){if(!f.memberId){const s=i("pos-member-result");s&&(s.innerHTML="")}return}const t=e.replace(/\D/g,"");!(Array.isArray(u.customers)&&u.customers.length>0)&&t.length<10&&e.length<8||(Pt=setTimeout(()=>{ve()},350))},ve=async()=>{const t=i("pos-cust-phone")?.value?.trim()||"";if(!t){w("Masukkan nomor HP atau nama member","warning");return}const a=i("pos-member-result"),s=i("pos-member-lookup-btn");s&&(s.disabled=!0,s.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i>'),a&&(a.innerHTML='<div class="p-2.5 text-center text-xs text-slate-400"><i class="fa-solid fa-spinner fa-spin mr-1.5"></i>Memeriksa database member...</div>');try{await X();const o=Xt(t,u.customers||[]);if(o.length===1)$e(o[0]);else if(o.length>1)a.innerHTML=`
              <div class="space-y-1.5 max-h-44 overflow-y-auto pr-1">
                <p class="text-[10px] font-bold text-slate-500 mb-1">Ditemukan ${o.length} member (klik untuk memilih):</p>
                ${o.map(n=>`
                  <button onclick="window.selectPosMember('${d(n.id||n._docId||n.phone)}')" type="button"
                    class="w-full text-left p-2 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 border border-slate-200 dark:border-slate-700 hover:border-emerald-400 transition-all flex items-center justify-between gap-2 cursor-pointer">
                    <div class="min-w-0">
                      <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${d(n.name||"Member")}</p>
                      <p class="text-[10px] text-slate-500 dark:text-slate-400 font-mono">${d(n.phone||"")}</p>
                    </div>
                    <span class="text-[10px] font-black text-amber-500 shrink-0"><i class="fa-solid fa-star text-[9px]"></i> ${parseFloat(n.points)||0} Poin</span>
                  </button>
                `).join("")}
              </div>
            `;else{const n=await Ca(t);if(n)$e(n);else{f.isMember=!1,f.name="",f.memberId=null,f.points=0;const c=t.replace(/\D/g,"").length>=8;a.innerHTML=`
                  <div class="p-3 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs space-y-1">
                    <p class="font-bold flex items-center gap-1.5"><i class="fa-solid fa-circle-info"></i> Member Tidak Ditemukan</p>
                    <p class="text-[11px] text-amber-700 dark:text-amber-400">Tidak ada member ditemukan untuk "<b>${d(t)}</b>".</p>
                    ${c?"":`
                      <p class="text-[10px] text-amber-600/90 dark:text-amber-400/80 pt-1 border-t border-amber-200 dark:border-amber-800/60">
                        <i class="fa-solid fa-lightbulb mr-1 text-amber-500"></i><b>Tips Kasir:</b> Masukkan nomor WhatsApp/HP member (contoh: <code>0812...</code>) untuk verifikasi instan.
                      </p>
                    `}
                  </div>`}}}catch(o){console.error("[POS] Error lookupPosMember:",o),a&&(a.innerHTML=`<p class="text-xs text-rose-500 p-2">Gagal memeriksa data: ${d(o.message||"Koneksi error")}</p>`)}finally{s&&(s.disabled=!1,s.innerHTML='<i class="fa-solid fa-magnifying-glass mr-1.5"></i><span>Cek</span>')}},ea=async()=>{if(m.length===0){w("Keranjang kosong!","warning");return}const e=f.isMember?f.name||"Member Toko":i("pos-cust-name")?.value?.trim()||"Pelanggan Umum",t=f.isMember?f.phone||i("pos-cust-phone")?.value?.trim()||"":i("pos-cust-phone")?.value?.trim()||"";if(f.isNewTempo&&!t){w("No. HP wajib diisi untuk tempo!","warning");return}if(A==="cash"&&(N=J(i("pos-paid-input")?.value||0),N<O())){w(`Uang kurang! Minimal ${g(O())}`,"warning");return}f.name=e,f.phone=t;const a=A==="tempo"?J(i("pos-dp-input")?.value||0):0,s=A==="transfer"&&i("pos-bank-sel")?.value||"",o=i("pos-process-btn");o&&(o.disabled=!0,o.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i>Memproses...');const n=u.store?.useStock===!0||u.store?.useStock==="true";if(n)for(const r of m){const c=(u.products||[]).find(b=>String(b.id)===String(r.id));if(!c)continue;const p=parseFloat(r.qty)||0;if(r.variantName&&c.variants){const b=(c.variants||[]).find(h=>h.name===r.variantName),l=parseFloat(b&&b.stock!==void 0?b.stock:0);if(l<p){w(`Stok ${r.name} (${r.variantName}) tidak cukup! Sisa: ${l}`,"warning"),o&&(o.disabled=!1,o.innerHTML='<i class="fa-solid fa-check-circle mr-2"></i>Selesaikan Transaksi');return}}else{const b=parseFloat(c.stock!==void 0?c.stock:0);if(b<p){w(`Stok ${r.name} tidak cukup! Sisa: ${b}`,"warning"),o&&(o.disabled=!1,o.innerHTML='<i class="fa-solid fa-check-circle mr-2"></i>Selesaikan Transaksi');return}}}try{const r=Pa(),c=typeof window.getCashierSession=="function"?window.getCashierSession():null,p=c?.name||u.store?.name||"Kasir",b=c?.uid||window.__currentAdminUid||"admin",l=new Date().toISOString(),h=Re.firestore.FieldValue.serverTimestamp(),k=A==="tempo"?"Diproses":"Selesai",P=B(),$=P&&P.status==="open"?P.id:null,R=P&&P.status==="open"?P.shiftNo||P.id:null,H={orderId:r,txId:r,source:"pos",channel:"pos",status:k,timestamp:h,dateString:l,dateMs:Date.now(),shiftId:$,shiftNo:R,cashier:b,cashierName:p,customer:{name:e,phone:t,wa:t,address:"Beli Langsung di Kasir (POS)",deliveryMethod:"takeaway",isMember:!!f.isMember,memberId:f.memberId||null},customerName:e,customerPhone:t,customerType:f.isMember?"Member":"Pelanggan Umum",items:m.map(v=>({id:v.id,name:v.name,price:parseFloat(v.price)||0,basePrice:parseFloat(v.basePrice||v.price)||0,qty:parseFloat(v.qty)||1,discount:parseFloat(v.discount)||0,subtotal:parseFloat(v.subtotal)||0,variantName:v.variantName||"",isVariant:!!v.isVariant,isWholesale:!!v.isWholesale,effectivePrice:parseFloat(v.price)||0})),payment:{method:A,subtotal:Z(),productDiscount:J(E),shippingCost:0,grandTotal:O(),paid:A==="cash"?N:A==="tempo"?a:O(),change:A==="cash"?Et():0,bank:s,paymentStatus:A==="tempo"?"hutang":"lunas",tempoDp:a,tempoBalance:A==="tempo"?O()-a:0,tempoDueDate:Date.now()+30*24*60*60*1e3,tempoPenaltyRate:1,tempoPenaltyStopped:!1},subtotal:Z(),globalDiscount:F(),discountType:I,discountVal:L,total:O(),isTempo:A==="tempo",pointsEarned:0,notes:""};if(f.isMember&&t){const j=(typeof window.calculateCartPoints=="function"?window.calculateCartPoints(m,u.store):{totalPoints:0}).totalPoints||0;if(j>0){H.pointsEarned=j;try{const _=t.replace(/\D/g,""),S=String(f.memberId||_);if(await T.collection("freshmart").doc("cms_data").collection("customers").doc(S).set({points:Re.firestore.FieldValue.increment(j),lastOrderAt:l},{merge:!0}),u.customers){const q=u.customers.find(M=>M&&(String(M.id)===S||String(M.phone).replace(/\D/g,"")===_));q&&(q.points=(parseFloat(q.points)||0)+j)}}catch(_){console.warn("[POS] Gagal update poin member:",_)}}}if(await T.collection("freshmart_orders").doc(r).set(H),Ht(H),n){const v=[];for(const j of m){const _=String(j.id),S=(u.products||[]).find(M=>String(M.id)===_);if(!S)continue;const xe=parseFloat(j.qty)||0,q={};if(j.variantName&&S.variants){const M=S.variants.findIndex(la=>la.name===j.variantName);M>-1&&(S.variants[M].stock=Math.max(0,(parseFloat(S.variants[M].stock)||0)-xe),S.variants[M].stock===0&&(S.variants[M].isActive=!1),S.variants[M].totalSold=(parseFloat(S.variants[M].totalSold)||0)+xe,q.variants=S.variants)}else S.stock=Math.max(0,(parseFloat(S.stock)||0)-xe),q.stock=S.stock,S.stock===0&&(S.isActive="false",q.isActive="false"),S.totalSold=(parseFloat(S.totalSold)||0)+xe,q.totalSold=S.totalSold;try{await T.collection("freshmart").doc("cms_data").collection("products").doc(_).update(q),v.push(_)}catch(M){console.warn("[POS] Gagal update stok produk di Firestore:",_,M)}}if(v.length>0)try{await T.collection("freshmart").doc("cms_data").update({lastUpdate:Re.firestore.FieldValue.increment(1),updateType:"stock_change",updatedProductIds:v})}catch{}}rt(),ue(!0);const ye={...H};m=[],E=0,L=0,I="rp",C(),D(),Ma(ye)}catch(r){console.error("[POS] Error:",r),w("Gagal menyimpan transaksi. Coba lagi.","error"),o&&(o.disabled=!1,o.innerHTML='<i class="fa-solid fa-check-circle mr-2"></i>Selesaikan Transaksi')}},Ma=e=>{const t=e.payment.method==="cash"?`<p class="text-sm text-slate-500">Kembalian: <span class="font-black text-emerald-600">${g(e.payment.change)}</span></p>`:e.payment.method==="tempo"?'<p class="text-sm text-amber-600 font-semibold">⚠️ Dicatat sebagai Piutang Tempo</p>':`<p class="text-sm text-slate-500">Metode: ${e.payment.method.toUpperCase()}</p>`,a=JSON.stringify(e).replace(/"/g,"&quot;"),s=!!document.getElementById("pos-admin-container")||typeof window.cTab=="function"&&window.cTab()==="pos";document.body.insertAdjacentHTML("beforeend",`
    <div id="pos-success-modal" class="fixed inset-0 z-[9999] flex items-center justify-center p-4" style="background:rgba(15,23,42,0.65);backdrop-filter:blur(4px)">
      <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-sm border border-slate-200/80 dark:border-slate-800">
        <div class="p-6 text-center">
          <div class="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-4"><i class="fa-solid fa-circle-check text-emerald-500 text-3xl"></i></div>
          <h2 class="font-black text-lg text-slate-900 dark:text-white mb-1">Transaksi Berhasil!</h2>
          <p class="text-xs text-slate-400 mb-2">#${d(e.txId)}</p>
          <p class="text-2xl font-black mb-1" style="color:var(--color-primary)">${g(e.total)}</p>
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
        </div>
        <div class="px-6 pb-6 flex flex-col gap-2">
          <button onclick="window.printPOSReceipt(${a})" class="w-full py-3 rounded-2xl text-white font-bold text-sm shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer" style="background:var(--color-primary)"><i class="fa-solid fa-print"></i> Cetak Struk Thermal</button>
          <button onclick="document.getElementById('pos-success-modal')?.remove()" class="w-full py-3 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer">Transaksi Baru</button>
          ${s?`
          <button onclick="document.getElementById('pos-success-modal')?.remove(); if(typeof window.openAdminTab==='function') window.openAdminTab('orders');" class="w-full py-2.5 rounded-xl text-slate-500 dark:text-slate-400 text-xs font-bold hover:text-[var(--color-primary)] transition-all flex items-center justify-center gap-1.5 cursor-pointer">
            <i class="fa-solid fa-receipt"></i> Buka Menu Pesanan Toko
          </button>`:""}
        </div>
      </div>
    </div>`)},ta=e=>{document.getElementById("pos-success-modal")?.remove();const t=typeof Y=="function"?Y():{paperSize:"58mm"},a=t.paperSize==="80mm",s=t.headerText||u.store?.name||"TOKO PUTRI",o=u.store?.wa||"",n=u.store?.address||"",r=t.footerText||"Terima Kasih Atas Kunjungan Anda!",c=new Date(e.dateMs||Date.now()).toLocaleString("id-ID"),p=(e.items||[]).map(h=>`<tr><td style="padding:2px 0;word-wrap:break-word">${d(h.name)}</td><td style="text-align:right;padding:2px 4px;white-space:nowrap">${h.qty}x ${g(h.price)}</td><td style="text-align:right;padding:2px 0;white-space:nowrap;font-weight:bold">${g(h.subtotal)}</td></tr>`).join(""),b=e.discountType==="percent"&&e.discountVal?`Diskon (${e.discountVal}%)`:"Diskon",l=window.open("","_blank",`width=${a?460:360},height=720`);if(!l){document.getElementById("pos-receipt-fallback-modal")?.remove(),document.body.insertAdjacentHTML("beforeend",`
        <div id="pos-receipt-fallback-modal" class="fixed inset-0 z-[10000] flex items-center justify-center p-3 sm:p-4" style="background:rgba(15,23,42,0.7);backdrop-filter:blur(4px)">
            <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full ${a?"max-w-md":"max-w-sm"} border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[90vh]">
                <div class="p-3.5 sm:p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50">
                    <span class="font-bold text-xs text-slate-700 dark:text-slate-200 flex items-center gap-1.5"><i class="fa-solid fa-receipt text-amber-500"></i>Struk Thermal POS (${a?"80mm":"58mm"})</span>
                    <button onclick="document.getElementById('pos-receipt-fallback-modal')?.remove()" class="w-7 h-7 rounded-lg bg-slate-200/60 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 text-sm leading-none flex items-center justify-center cursor-pointer">×</button>
                </div>
                <div id="pos-receipt-paper-box" class="p-4 overflow-y-auto flex-1 font-mono text-[11px] bg-slate-50/60 dark:bg-slate-950 text-slate-800 dark:text-slate-200 space-y-2 select-text">
                    <div class="text-center font-bold text-sm uppercase">${d(s)}</div>
                    ${n?`<div class="text-center text-[10px] text-slate-500">${d(n)}</div>`:""}
                    ${o?`<div class="text-center text-[10px] text-slate-500">WA: ${d(o)}</div>`:""}
                    <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                    <div>No : <b>#${d(e.txId)}</b></div>
                    <div>Tgl: ${d(c)}</div>
                    <div>Kasir: ${d(e.cashierName||"Kasir")}</div>
                    <div>Plg : ${d(e.customer?.name||"Umum")}</div>
                    ${e.customer?.phone?`<div>HP  : ${d(e.customer.phone)}</div>`:""}
                    <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                    <table class="w-full text-[11px]">
                        ${p}
                    </table>
                    <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                    <div class="flex justify-between"><span>Subtotal</span><span>${g(e.subtotal)}</span></div>
                    ${(e.globalDiscount||0)>0?`<div class="flex justify-between text-rose-500 font-bold"><span>${b}</span><span>- ${g(e.globalDiscount)}</span></div>`:""}
                    <div class="flex justify-between font-black text-sm pt-1 border-t border-slate-200 dark:border-slate-700"><span>TOTAL</span><span style="color:var(--color-primary)">${g(e.total)}</span></div>
                    ${e.payment.method==="cash"?`<div class="flex justify-between"><span>Bayar</span><span>${g(e.payment.paid)}</span></div><div class="flex justify-between font-bold text-emerald-600"><span>Kembalian</span><span>${g(e.payment.change)}</span></div>`:""}
                    ${e.payment.method==="tempo"?`<div class="flex justify-between"><span>DP</span><span>${g(e.payment.dp||0)}</span></div><div class="flex justify-between font-bold text-amber-600"><span>Sisa Piutang</span><span>${g(e.payment.tempoBalance||0)}</span></div>`:""}
                    <div class="flex justify-between"><span>Metode</span><span>${d(e.payment.method.toUpperCase())}</span></div>
                    ${e.pointsEarned>0?`
                    <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                    <div class="flex justify-between text-amber-600 dark:text-amber-400 font-bold"><span>Poin Member:</span><span>+${e.pointsEarned} Poin</span></div>`:""}
                    <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                    <div class="text-center text-[10px] text-slate-400 my-1">${d(r)}</div>
                </div>
                <div class="p-3 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 flex gap-2">
                    <button onclick="window.executePOSPrintDirect()" class="flex-1 py-2.5 rounded-xl text-white font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-md transition-all active:scale-95" style="background:var(--color-primary)">
                        <i class="fa-solid fa-print"></i> Cetak Struk
                    </button>
                    <button onclick="if(typeof window.openPrinterSettingsModal==='function') window.openPrinterSettingsModal();" class="px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-bold text-xs flex items-center gap-1 cursor-pointer transition-all" title="Pengaturan Printer">
                        <i class="fa-solid fa-gear"></i>
                    </button>
                </div>
            </div>
        </div>`);return}l.document.write(`<!DOCTYPE html><html><head><meta charset="utf-8"><title>Struk POS</title>
    <style>*{box-sizing:border-box}body{font-family:'Courier New',monospace;font-size:12px;max-width:${a?"330px":"260px"};margin:0 auto;padding:12px}
    h2{text-align:center;font-size:14px;font-weight:900;margin:2px 0;text-transform:uppercase}p{margin:1px 0;text-align:center;font-size:11px}.left{text-align:left}
    table{width:100%;border-collapse:collapse}.line{border-top:1px dashed #333;margin:6px 0}.total{font-weight:900;font-size:13px}
    </style></head><body>
    <h2>${s}</h2>${n?`<p>${d(n)}</p>`:""}${o?`<p>WA: ${d(o)}</p>`:""}
    <div class="line"></div>
    <p class="left">No: <b>#${d(e.txId)}</b></p><p class="left">Tgl: ${d(c)}</p>
    <p class="left">Kasir: ${d(e.cashierName||"Kasir")}</p><p class="left">Pelanggan: ${d(e.customer?.name||"Umum")}</p>
    ${e.customer?.phone?`<p class="left">HP: ${d(e.customer.phone)}</p>`:""}
    <div class="line"></div><table>${p}</table><div class="line"></div>
    <table>
    <tr><td>Subtotal</td><td style="text-align:right">${g(e.subtotal)}</td></tr>
    ${(e.globalDiscount||0)>0?`<tr><td>${b}</td><td style="text-align:right">- ${g(e.globalDiscount)}</td></tr>`:""}
    <tr class="total"><td>TOTAL</td><td style="text-align:right">${g(e.total)}</td></tr>
    ${e.payment.method==="cash"?`<tr><td>Bayar</td><td style="text-align:right">${g(e.payment.paid)}</td></tr><tr><td><b>Kembalian</b></td><td style="text-align:right"><b>${g(e.payment.change)}</b></td></tr>`:""}
    ${e.payment.method==="tempo"?`<tr><td>DP</td><td style="text-align:right">${g(e.payment.dp||0)}</td></tr><tr><td>Sisa Piutang</td><td style="text-align:right">${g(e.payment.tempoBalance||0)}</td></tr>`:""}
    <tr><td>Metode</td><td style="text-align:right">${d(e.payment.method.toUpperCase())}</td></tr>
    ${e.pointsEarned>0?`<tr><td>Poin Member</td><td style="text-align:right">+${e.pointsEarned}</td></tr>`:""}
    </table><div class="line"></div>
    <p style="text-align:center;font-size:10px">${d(r)}</p>
    <p style="text-align:center;font-size:9px">Barang yang sudah dibeli tidak dapat ditukar/dikembalikan</p>
    <script>window.onload=()=>{window.print();setTimeout(()=>window.close(),800)}<\/script>
    </body></html>`),l.document.close()},bt=()=>{const e=typeof Y=="function"?Y():{deviceType:"system"},t=i("pos-receipt-paper-box");if(t)if(e.deviceType==="rawbt"&&window.AndroidNativeApp&&typeof window.AndroidNativeApp.printRawBT=="function"){const a=t.innerText,s=btoa(unescape(encodeURIComponent(a)));window.AndroidNativeApp.printRawBT(s)}else window.AndroidNativeApp&&typeof window.AndroidNativeApp.print=="function"?window.AndroidNativeApp.print():window.print()},aa=({isStorefront:e})=>{const a=(typeof window.getCashierSession=="function"?window.getCashierSession():null)?.name||(e?"Kasir":"Admin Seller"),s=d(u.store?.name||"Toko Putri");return`
    <div class="flex flex-col h-full w-full overflow-hidden bg-slate-100/70 dark:bg-slate-950">
        ${e?`
        <!-- STOREFRONT POS HEADER (52px) -->
        <header class="h-[52px] shrink-0 text-white flex items-center justify-between px-3 sm:px-4 z-30 shadow-md" style="background:var(--color-primary)">
            <div class="flex items-center gap-2.5 min-w-0">
                <button onclick="window.exitPOSMode()" class="w-8 h-8 rounded-xl bg-black/15 hover:bg-black/25 text-white flex items-center justify-center text-xs transition-all active:scale-90 cursor-pointer" title="Kembali ke Etalase Toko">
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
                            <span class="text-[10px] text-white/90 font-medium truncate">${d(a)}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <span id="pos-live-clock" class="hidden sm:inline-block text-[10px] font-mono text-white/90 px-2.5 py-1 bg-black/15 rounded-lg border border-white/20">--:--:--</span>
                <span class="hidden md:inline-flex items-center gap-1.5 text-[10px] font-bold text-white bg-black/20 px-2.5 py-1 rounded-lg">
                    <i class="fa-solid fa-barcode text-xs"></i> USB Scanner Aktif
                </span>
                <div id="pos-shift-btn-storefront" class="flex items-center"></div>
                <div id="pos-held-btn-storefront" class="flex items-center"></div>
                <button onclick="window.cashierLogout()" class="h-8 px-2.5 sm:px-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold flex items-center gap-1.5 transition-all active:scale-95 shadow-xs cursor-pointer" title="Keluar Mode Kasir">
                    <i class="fa-solid fa-power-off text-xs"></i>
                    <span class="hidden sm:inline">Keluar</span>
                </button>
            </div>
        </header>`:`
        <!-- ADMIN POS ACTION STRIP (kompak & menyatu tanpa double header) -->
        <div class="h-10 shrink-0 bg-slate-100 dark:bg-slate-800/70 px-3 sm:px-4 flex items-center justify-between border-b border-slate-200 dark:border-slate-700/60 text-xs">
            <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span class="text-[11px] font-black uppercase tracking-wider text-slate-700 dark:text-slate-200">Terminal Kasir POS</span>
                <span class="hidden sm:inline text-slate-400">•</span>
                <span id="pos-live-clock" class="hidden sm:inline text-[10px] font-mono text-slate-500 dark:text-slate-400">--:--:--</span>
            </div>
            <div class="flex items-center gap-2">
                <span class="hidden md:inline-flex items-center gap-1 text-[10px] font-bold text-slate-500 dark:text-slate-400">
                    <i class="fa-solid fa-barcode"></i> Scanner Otomatis
                </span>
                <div id="pos-shift-btn-admin" class="flex items-center"></div>
                <div id="pos-held-btn-admin" class="flex items-center"></div>
                <button onclick="window.posClearCart()" class="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-rose-500 text-[10px] font-bold flex items-center gap-1 hover:bg-rose-50 dark:hover:bg-rose-950/20 transition-all cursor-pointer">
                    <i class="fa-solid fa-trash-can"></i> Reset
                </button>
            </div>
        </div>`}

        <!-- MAIN SPLIT WORKSPACE: Desktop side-by-side, Mobile full catalog -->
        <div class="flex flex-1 overflow-hidden">
            <!-- PANEL KIRI: KATALOG (Mobile 100%, Desktop 63%-65%) -->
            <div class="flex flex-col flex-1 lg:w-[63%] xl:w-[65%] border-r border-slate-200/80 dark:border-slate-800 overflow-hidden bg-slate-50/50 dark:bg-slate-900/30">
                <!-- Search & Category Bar with View Switcher -->
                <div class="p-2.5 sm:p-3 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800 space-y-2 shrink-0 shadow-2xs">
                    <div class="flex items-center gap-2">
                        <div class="relative flex-1">
                            <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none"></i>
                            <input id="pos-search-input" type="text" placeholder="Cari barang, barcode USB, atau SKU (F4)... [F9: Scan | F10: Shift]" 
                                class="w-full pl-9 pr-9 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)] focus:bg-white dark:focus:bg-slate-900 transition-all"
                                oninput="window.posSearchFn(this.value)">
                            <button onclick="document.querySelectorAll('#pos-search-input').forEach(i => i.value=''); window.posSearchFn('');" class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs p-1 cursor-pointer" title="Hapus pencarian">
                                <i class="fa-solid fa-circle-xmark"></i>
                            </button>
                        </div>
                        <!-- Tombol Scan Barcode Kamera HP / Laptop (F9) -->
                        <button onclick="window.openPOSCameraScanner()" class="h-9 px-2.5 sm:px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/40 dark:hover:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 text-xs font-bold flex items-center gap-1.5 transition-all active:scale-95 border border-emerald-200 dark:border-emerald-800/80 shrink-0 cursor-pointer shadow-2xs" title="Scan Barcode Kamera (F9)">
                            <i class="fa-solid fa-camera text-emerald-600 dark:text-emerald-400 text-xs"></i>
                            <span class="hidden sm:inline">Scan (F9)</span>
                        </button>
                        <!-- View Switcher (Grid vs List) -->
                        <div class="flex items-center p-0.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shrink-0">
                            <button id="pos-view-btn-grid" onclick="window.setPOSViewMode('grid')" class="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer ${U==="grid"?"text-white shadow-xs":"text-slate-500 hover:text-slate-800 dark:text-slate-400"}" style="${U==="grid"?"background:var(--color-primary)":""}" title="Tampilan Grid Foto">
                                <i class="fa-solid fa-grip"></i>
                            </button>
                            <button id="pos-view-btn-list" onclick="window.setPOSViewMode('list')" class="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer ${U==="list"?"text-white shadow-xs":"text-slate-500 hover:text-slate-800 dark:text-slate-400"}" style="${U==="list"?"background:var(--color-primary)":""}" title="Tampilan List Baris Kompak">
                                <i class="fa-solid fa-list-ul"></i>
                            </button>
                        </div>
                    </div>
                    <!-- Kategori Chips -->
                    <div id="pos-cat-filter" class="flex gap-1.5 overflow-x-auto hide-scrollbar pb-0.5"></div>
                </div>

                <!-- Product Catalog Container -->
                <div id="pos-catalog-grid" class="${U==="list"?"pos-catalog-list-mode":"pos-catalog-grid-mode"}"></div>
            </div>

            <!-- PANEL KANAN: BILLING & KERANJANG (Hanya Desktop >= lg) -->
            <div class="hidden lg:flex flex-col lg:w-[37%] xl:w-[35%] bg-white dark:bg-slate-900 border-l border-slate-200/80 dark:border-slate-800 overflow-hidden shrink-0 shadow-sm">
                <!-- Header Keranjang Desktop -->
                <div class="px-4 py-3 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0 bg-slate-50/70 dark:bg-slate-800/40">
                    <div class="flex items-center gap-2 min-w-0">
                        <div class="w-7 h-7 rounded-lg flex items-center justify-center text-xs text-white shadow-xs shrink-0" style="background:var(--color-primary)">
                            <i class="fa-solid fa-cart-shopping"></i>
                        </div>
                        <h3 class="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-white truncate whitespace-nowrap">
                            Keranjang Transaksi (<span class="pos-item-count-target">0</span>)
                        </h3>
                    </div>
                    <div class="flex items-center gap-1.5 shrink-0">
                        <button onclick="window.posHoldCurrentCart()" class="pos-hold-btn-target text-[10px] font-bold text-amber-600 dark:text-amber-400 hover:text-amber-700 px-2 py-1 rounded-lg hover:bg-amber-50 dark:hover:bg-amber-950/20 transition-all cursor-pointer flex items-center gap-1 whitespace-nowrap" title="Tahan transaksi sementara (F6)">
                            <i class="fa-solid fa-pause"></i><span>Tahan</span>
                        </button>
                        <button onclick="window.posClearCart()" class="text-[10px] font-bold text-rose-500 hover:text-rose-600 px-2 py-1 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-950/20 transition-all cursor-pointer flex items-center gap-1 shrink-0 whitespace-nowrap">
                            <i class="fa-solid fa-trash-can"></i><span>Kosongkan</span>
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
                    <!-- Smart Diskon Transaksi Kasir (Rp / %) -->
                    <div class="space-y-1.5 p-2.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700/60 text-xs">
                        <div class="flex items-center justify-between">
                            <span class="text-slate-600 dark:text-slate-300 font-bold flex items-center gap-1.5">
                                <i class="fa-solid fa-tags text-[var(--color-primary)] text-[11px]"></i>
                                <span>Diskon Transaksi</span>
                            </span>
                            <div class="flex items-center bg-slate-200 dark:bg-slate-700 rounded-lg p-0.5 text-[10px]">
                                <button onclick="window.posSetDiscountType('rp')" class="pos-disc-type-rp px-2 py-0.5 rounded-md transition-all cursor-pointer font-black">Rp</button>
                                <button onclick="window.posSetDiscountType('percent')" class="pos-disc-type-pct px-2 py-0.5 rounded-md transition-all cursor-pointer font-bold">%</button>
                            </div>
                        </div>
                        <div class="flex items-center gap-2">
                            <div class="flex-1 relative">
                                <span class="pos-disc-prefix absolute left-2.5 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 font-bold">Rp</span>
                                <input type="number" min="0" placeholder="0" class="pos-disc-val-input w-full border border-slate-200 dark:border-slate-700 rounded-lg pl-8 pr-2.5 py-1 text-right text-xs font-bold bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)]" oninput="window.posSetDiscountVal(this.value)">
                            </div>
                            <div class="pos-disc-preview-target text-[10px] font-black text-rose-500 whitespace-nowrap min-w-[70px] text-right">Rp 0</div>
                        </div>
                        <div class="pos-disc-chips-target flex gap-1 overflow-x-auto hide-scrollbar pt-0.5"></div>
                    </div>
                    <div class="flex justify-between items-center pt-2 border-t border-slate-200/80 dark:border-slate-800">
                        <div>
                            <p class="text-[9px] uppercase tracking-wider font-bold text-slate-400">Total Akhir</p>
                            <p class="pos-total-target text-xl font-black" style="color:var(--color-primary)">Rp 0</p>
                        </div>
                        <span class="text-[10px] font-bold px-2 py-1 rounded-md bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 border border-emerald-200/60">Siap Bayar</span>
                    </div>
                    <button onclick="window.openPayModal()" class="pos-pay-btn-target w-full py-3.5 rounded-2xl text-white font-black text-sm shadow-xl disabled:opacity-40 disabled:cursor-not-allowed active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer" style="background:var(--color-primary)">
                        <i class="fa-solid fa-cash-register"></i>
                        <span class="btn-text">PROSES PEMBAYARAN</span>
                    </button>
                </div>
            </div>
        </div>

        <!-- FLOATING CART BAR (Khusus Mobile < lg saat keranjang ada isi) -->
        <div id="pos-mobile-floating-bar" class="lg:hidden fixed bottom-3 left-3 right-3 z-40 transition-all duration-300 transform translate-y-32 opacity-0 pointer-events-none">
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
                        <p class="pos-total-target text-sm font-black text-emerald-400">Rp 0</p>
                    </div>
                </div>
                <button onclick="event.stopPropagation(); window.openPOSCartDrawer();" class="px-4 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider text-white shadow-lg active:scale-95 transition-all flex items-center gap-1.5 shrink-0" style="background:var(--color-primary)">
                    <span>Lihat Keranjang</span>
                    <i class="fa-solid fa-chevron-up text-xs"></i>
                </button>
            </div>
        </div>

        <!-- MOBILE CART DRAWER (Bottom Sheet Slide-up) -->
        <div id="pos-mobile-cart-drawer" class="lg:hidden fixed inset-0 z-50 transition-all duration-300 opacity-0 pointer-events-none" style="background:rgba(15,23,42,0.65);backdrop-filter:blur(3px)">
            <div id="pos-mobile-cart-sheet" class="absolute bottom-0 left-0 right-0 max-h-[85vh] bg-white dark:bg-slate-900 rounded-t-3xl shadow-2xl flex flex-col transition-transform duration-300 transform translate-y-full overflow-hidden border-t border-slate-200 dark:border-slate-800">
                <!-- Handle -->
                <div class="pt-2 pb-1 flex justify-center shrink-0 cursor-pointer" onclick="window.closePOSCartDrawer()">
                    <div class="w-12 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                </div>
                <!-- Header -->
                <div class="px-4 py-2.5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0 bg-slate-50/70 dark:bg-slate-800/40">
                    <div class="flex items-center gap-2 min-w-0">
                        <div class="w-7 h-7 rounded-lg flex items-center justify-center text-xs text-white shrink-0" style="background:var(--color-primary)"><i class="fa-solid fa-cart-shopping"></i></div>
                        <h3 class="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-white truncate whitespace-nowrap">Keranjang Transaksi (<span class="pos-item-count-target">0</span>)</h3>
                    </div>
                    <div class="flex items-center gap-1.5 shrink-0">
                        <button onclick="window.posHoldCurrentCart()" class="pos-hold-btn-target text-[10px] font-bold text-amber-600 dark:text-amber-400 hover:text-amber-700 px-2 py-1 rounded-lg hover:bg-amber-50 dark:hover:bg-amber-950/20 transition-all flex items-center gap-1 whitespace-nowrap cursor-pointer" title="Tahan transaksi sementara"><i class="fa-solid fa-pause"></i><span>Tahan</span></button>
                        <button onclick="window.posClearCart()" class="text-[10px] font-bold text-rose-500 hover:text-rose-600 px-2 py-1 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-950/20 transition-all flex items-center gap-1 whitespace-nowrap cursor-pointer"><i class="fa-solid fa-trash-can"></i><span>Kosongkan</span></button>
                        <button onclick="window.closePOSCartDrawer()" class="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-700 text-base flex items-center justify-center transition-all leading-none cursor-pointer">×</button>
                    </div>
                </div>

                <!-- Items Container -->
                <div class="pos-cart-items-target flex-1 overflow-y-auto p-3 space-y-2 min-h-[160px]"></div>

                <!-- Footer Summary & Pay -->
                <div class="p-3.5 pb-[calc(1rem+env(safe-area-inset-bottom))] border-t border-slate-100 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/80 space-y-2 shrink-0">
                    <div class="flex justify-between text-xs text-slate-500 font-medium">
                        <span>Subtotal Item</span>
                        <span class="pos-subtotal-target font-bold text-slate-700 dark:text-slate-200">Rp 0</span>
                    </div>
                    <!-- Smart Diskon Transaksi Kasir (Rp / %) di Mobile Drawer -->
                    <div class="space-y-1.5 p-2 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700/60 text-xs">
                        <div class="flex items-center justify-between">
                            <span class="text-slate-600 dark:text-slate-300 font-bold flex items-center gap-1.5">
                                <i class="fa-solid fa-tags text-[var(--color-primary)] text-[11px]"></i>
                                <span>Diskon Transaksi</span>
                            </span>
                            <div class="flex items-center bg-slate-200 dark:bg-slate-700 rounded-lg p-0.5 text-[10px]">
                                <button onclick="window.posSetDiscountType('rp')" class="pos-disc-type-rp px-2 py-0.5 rounded-md transition-all cursor-pointer font-black">Rp</button>
                                <button onclick="window.posSetDiscountType('percent')" class="pos-disc-type-pct px-2 py-0.5 rounded-md transition-all cursor-pointer font-bold">%</button>
                            </div>
                        </div>
                        <div class="flex items-center gap-2">
                            <div class="flex-1 relative">
                                <span class="pos-disc-prefix absolute left-2.5 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 font-bold">Rp</span>
                                <input type="number" min="0" placeholder="0" class="pos-disc-val-input w-full border border-slate-200 dark:border-slate-700 rounded-lg pl-8 pr-2.5 py-1 text-right text-xs font-bold bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)]" oninput="window.posSetDiscountVal(this.value)">
                            </div>
                            <div class="pos-disc-preview-target text-[10px] font-black text-rose-500 whitespace-nowrap min-w-[70px] text-right">Rp 0</div>
                        </div>
                        <div class="pos-disc-chips-target flex gap-1 overflow-x-auto hide-scrollbar pt-0.5"></div>
                    </div>
                    <div class="flex justify-between items-center pt-1.5 border-t border-slate-200/80 dark:border-slate-800">
                        <span class="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-white">Total Tagihan</span>
                        <span class="pos-total-target text-base font-black" style="color:var(--color-primary)">Rp 0</span>
                    </div>
                    <button onclick="window.closePOSCartDrawer(); window.openPayModal();" class="pos-pay-btn-target w-full py-3.5 rounded-2xl text-white font-black text-xs sm:text-sm shadow-xl disabled:opacity-40 disabled:cursor-not-allowed active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer" style="background:var(--color-primary)">
                        <i class="fa-solid fa-cash-register"></i>
                        <span class="btn-text">LANJUT KE PEMBAYARAN</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
    `},sa=()=>{try{z="",te="",m=[],E=0;const e=i("view-pos-cashier");if(!e)return;const t=i("admin-content"),a=i("view-admin");t&&a?.classList.contains("admin-pos-mode")&&(t.innerHTML="",a.classList.remove("admin-pos-mode")),e.innerHTML=aa({isStorefront:!0}),D(),C(),ne(),me(),_t(),Ft(),X(),ra(),setTimeout(()=>{pe()||re()},350)}catch(e){console.error("Gagal render POS Storefront:",e)}},oa=()=>{try{z="",te="";const e=i("view-admin");e&&e.classList.add("admin-pos-mode");const t=i("view-pos-cashier");if(t&&(t.innerHTML=""),!i("admin-content"))return;pa("admin-content",`<div class="h-full w-full flex flex-col overflow-hidden">${aa({isStorefront:!1})}</div>`),D(),C(),ne(),me(),_t(),Ft(),X(),ra(),setTimeout(()=>{pe()||re()},350)}catch(e){console.error("Gagal render POS Admin:",e);const t=i("admin-content");t&&(t.innerHTML=`
                <div class="h-full w-full flex flex-col items-center justify-center p-6 text-center">
                    <i class="fa-solid fa-triangle-exclamation text-4xl text-amber-500 mb-3"></i>
                    <h3 class="text-base font-bold text-slate-800 dark:text-white">Gagal Membuka Terminal POS</h3>
                    <p class="text-xs text-slate-500 mt-1 max-w-sm">Terjadi kendala saat memuat terminal. Silakan coba muat ulang.</p>
                    <button onclick="window.renderPOS()" class="mt-4 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-xs font-bold transition-all shadow-md">
                        <i class="fa-solid fa-arrows-rotate mr-1.5"></i>Muat Ulang Terminal
                    </button>
                </div>
            `)}},ra=()=>{window.setPOSViewMode=Je,window.posAddToCart=je,window.posAddToCartQty=qt,window.addToCartPOSWithVariant=Vt,window.posUpdateQty=Ut,window.posSetQty=zt,window.posSetItemDisc=Qt,window.posRemoveItem=Gt,window.posClearCart=Wt,window.openPayModal=Jt,window.closePayModal=rt,window.setPosCustomerType=Zt,window.setPosPayMethod=nt,window.updatePosChange=it,window.posSetQuickCash=lt,window.ensureCustomersLoaded=X,window.ensureBanksLoaded=ke,window.lookupPosMember=ve,window.debouncedLookupPosMember=pt,window.selectPosMember=dt,window.resetPosMember=ct,window.processPOSTx=ea,window.printPOSReceipt=ta,window.posSetGlobalDisc=e=>{Ce(e)},window.posSetDiscountType=ut,window.posSetDiscountVal=Ce,window.posApplyQuickDiscount=xt,window.openPOSCameraScanner=Ne,window.closePOSCameraScanner=oe,window.togglePOSScannerFacing=mt,window.togglePOSScannerTorch=ft,window.togglePOSScannerMode=gt,window.posProcessManualBarcode=ht,window.posSearchScannedCode=wt,window.executePOSPrintDirect=bt,window.getActiveShift=B,window.isShiftActive=pe,window.openPOSOpenShiftModal=re,window.closePOSOpenShiftModal=Ae,window.openPOSShiftModal=se,window.openPOSShiftSummaryModal=se,window.closePOSShiftSummaryModal=ze,window.openPOSCloseShiftModal=Qe,window.closePOSCloseShiftModal=Oe,window.renderShiftHeaderBadge=me,window.printShiftSettlementReceipt=Ge,window.executeShiftPrintDirect=We,window.posCatFilter=e=>{te=e,D()},window.posSearchFn=e=>{z=typeof e=="string"?e:e?.value||"",document.querySelectorAll("#pos-search-input").forEach(t=>{t.value!==z&&(t.value=z)}),D()},window.renderCatalog=D,window.renderCart=C,window.refreshPOSCatalog=()=>{try{D()}catch(e){console.warn("refreshPOSCatalog error:",e)}},window.openPOSCartDrawer=ot,window.closePOSCartDrawer=ue,window.playCashierBeep=K,window.openPOSHistory=()=>{typeof window.openAdminTab=="function"?window.openAdminTab("orders"):typeof window.showToast=="function"&&window.showToast("Semua transaksi kasir terpusat di menu Pesanan CMS Admin")},window.destroyBarcodeListener=Le,window.playCashierChime=ge,window.posHoldCurrentCart=He,window.closePOSHoldPrompt=De,window.posConfirmHoldCart=Ye,window.openPOSHeldModal=he,window.closePOSHeldModal=we,window.posRecallHeldCart=Ze,window.posHoldCurrentAndRecall=et,window.posOverwriteAndRecall=tt,window.posDeleteHeldCart=at,window.posExecuteDeleteHeld=st,window.renderHeldBadges=ne},ut=e=>{I=e==="percent"?"percent":"rp",E=F(),C()},Ce=e=>{L=Math.max(0,parseFloat(e)||0),E=F(),C()},xt=(e,t)=>{t&&(I=t),L=e,E=F(),C(),K()},Ne=async()=>{if(i("pos-camera-scanner-modal"))return;typeof window.pushModalHistory=="function"&&window.pushModalHistory("posCameraScanner"),document.body.insertAdjacentHTML("beforeend",`
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
                            class="w-full pl-8 pr-3 py-2 rounded-xl border border-slate-700 bg-slate-800 text-xs font-mono font-bold text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-all"
                            onkeydown="if(event.key==='Enter') window.posProcessManualBarcode(this.value)">
                    </div>
                    <button onclick="window.posProcessManualBarcode(document.getElementById('pos-manual-barcode-input')?.value)"
                        class="px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all active:scale-95 shadow-md cursor-pointer">
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
    </div>`),await na()},na=async()=>{const e=i("pos-camera-video");if(e)try{const t={video:{facingMode:{ideal:Ee},width:{ideal:1280},height:{ideal:720}},audio:!1},a=await navigator.mediaDevices.getUserMedia(t);ae=a,e.srcObject=a,await e.play();const s=a.getVideoTracks();if(s.length>0){W=s[0];const o=W.getCapabilities?W.getCapabilities():{},n=i("pos-scanner-torch-btn");n&&(o.torch?n.classList.remove("hidden"):n.classList.add("opacity-40"))}if(typeof window.BarcodeDetector<"u")try{Se=new BarcodeDetector({formats:["ean_13","ean_8","upc_a","upc_e","code_128","code_39","code_93","qr_code","data_matrix"]})}catch{Se=null}ce&&clearInterval(ce),ce=setInterval(async()=>{if(!(!Se||!e||e.readyState<2))try{const o=await Se.detect(e);if(o&&o.length>0){const n=o[0].rawValue?.trim();n&&ia(n)}}catch{}},180)}catch(t){console.warn("[POS Scanner] Gagal akses kamera:",t);const a=i("pos-scanner-status-pill");a&&(a.innerHTML='<span class="text-rose-400 font-bold"><i class="fa-solid fa-triangle-exclamation mr-1"></i>Kamera tidak dapat diakses</span>'),w("Izin kamera ditolak atau kamera sedang digunakan aplikasi lain.","warning")}},ia=e=>{const t=Date.now();if(e===yt&&t-St<1800)return;yt=e,St=t;const a=e.toLowerCase(),s=(u.products||[]).find(b=>b&&b.isActive!=="false"&&b.isActive!==!1&&(b.barcode&&b.barcode.toLowerCase()===a||b.sku&&b.sku.toLowerCase()===a||b.id&&String(b.id).toLowerCase()===a)),o=i("pos-scanner-reticle"),n=i("pos-scanner-status-pill"),r=i("pos-last-scanned-banner"),c=i("pos-last-scanned-text"),p=i("pos-last-scanned-price");if(s){if(o&&(o.classList.add("border-emerald-300","scale-105","bg-emerald-500/20"),setTimeout(()=>{o.classList.remove("border-emerald-300","scale-105","bg-emerald-500/20")},300)),K(),s.variants&&s.variants.length>0){n&&(n.innerHTML='<span class="text-amber-300 font-bold">Buka pilihan varian...</span>'),oe(),Bt().then(()=>{typeof window.openPOSVariantSheet=="function"&&window.openPOSVariantSheet(s.id)});return}je(s.id),r&&c&&p&&(c.textContent=s.name,p.textContent=g(parseFloat(s.price)||0),r.classList.remove("hidden")),n&&(n.innerHTML=`<span class="text-emerald-300 font-black"><i class="fa-solid fa-check mr-1"></i>${d(s.name)} (+1)</span>`,setTimeout(()=>{n&&(n.innerHTML='<span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span><span>Menunggu barcode...</span>')},1500)),Pe||(oe(),w(`Ditambahkan: ${s.name}`,"success"))}else o&&(o.classList.add("border-rose-500","bg-rose-500/20"),setTimeout(()=>{o.classList.remove("border-rose-500","bg-rose-500/20")},400)),n&&(n.innerHTML=`<span class="text-rose-400 font-bold"><i class="fa-solid fa-xmark mr-1"></i>Barcode "${e}" tidak ditemukan</span>`)},oe=(e=!1)=>{if(ce&&(clearInterval(ce),ce=null),ae){try{ae.getTracks().forEach(a=>a.stop())}catch{}ae=null}W=null,fe=!1;const t=i("pos-camera-scanner-modal");t&&(!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("posCameraScanner",!1,()=>t.remove()):t.remove())},ft=async()=>{if(W)try{if(!(W.getCapabilities?W.getCapabilities():{}).torch){w("Lampu senter (torch) tidak didukung kamera ini.");return}fe=!fe,await W.applyConstraints({advanced:[{torch:fe}]});const t=i("pos-scanner-torch-btn");t&&(fe?(t.classList.add("bg-amber-500","text-white"),t.classList.remove("bg-slate-800","text-slate-300")):(t.classList.remove("bg-amber-500","text-white"),t.classList.add("bg-slate-800","text-slate-300")))}catch(e){console.warn("Gagal toggle torch:",e)}},mt=async()=>{Ee=Ee==="environment"?"user":"environment",ae&&(ae.getTracks().forEach(e=>e.stop()),ae=null),await na()},gt=()=>{Pe=!Pe;const e=i("pos-scanner-mode-btn");e&&(Pe?(e.textContent="Terus-menerus",e.className="px-2.5 py-1 rounded-lg bg-emerald-950/60 border border-emerald-600/60 text-emerald-400 text-[10px] font-black tracking-wider uppercase transition-all cursor-pointer"):(e.textContent="Scan Sekali",e.className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-[10px] font-black tracking-wider uppercase transition-all cursor-pointer"))},ht=e=>{if(!e||!e.trim())return;ia(e.trim());const t=i("pos-manual-barcode-input");t&&(t.value="")},wt=e=>{oe();const t=i("pos-search-input");t&&(t.value=e,z=e,D())};window.setPOSViewMode=Je;window.renderPOSStorefront=sa;window.renderPOS=oa;window.destroyBarcodeListener=Le;window.openPOSCartDrawer=ot;window.closePOSCartDrawer=ue;window.posSetQuickCash=lt;window.playCashierBeep=K;window.playCashierChime=ge;window.posHoldCurrentCart=He;window.closePOSHoldPrompt=De;window.posConfirmHoldCart=Ye;window.openPOSHeldModal=he;window.closePOSHeldModal=we;window.posRecallHeldCart=Ze;window.posHoldCurrentAndRecall=et;window.posOverwriteAndRecall=tt;window.posDeleteHeldCart=at;window.posExecuteDeleteHeld=st;window.renderHeldBadges=ne;window.ensureCustomersLoaded=X;window.ensureBanksLoaded=ke;window.lookupPosMember=ve;window.debouncedLookupPosMember=pt;window.selectPosMember=dt;window.resetPosMember=ct;window.posSetDiscountType=ut;window.posSetDiscountVal=Ce;window.posApplyQuickDiscount=xt;window.openPOSCameraScanner=Ne;window.closePOSCameraScanner=oe;window.togglePOSScannerFacing=mt;window.togglePOSScannerTorch=ft;window.togglePOSScannerMode=gt;window.posProcessManualBarcode=ht;window.posSearchScannedCode=wt;window.executePOSPrintDirect=bt;window.getActiveShift=B;window.isShiftActive=pe;window.openPOSOpenShiftModal=re;window.closePOSOpenShiftModal=Ae;window.openPOSShiftModal=se;window.openPOSShiftSummaryModal=se;window.closePOSShiftSummaryModal=ze;window.openPOSCloseShiftModal=Qe;window.closePOSCloseShiftModal=Oe;window.renderShiftHeaderBadge=me;window.printShiftSettlementReceipt=Ge;window.executeShiftPrintDirect=We;const Ia=Object.freeze(Object.defineProperty({__proto__:null,addToCart:je,addToCartWithVariant:Vt,applyMemberToPos:$e,clearCart:Wt,closePOSCameraScanner:oe,closePOSCartDrawer:ue,closePOSHeldModal:we,closePOSHoldPrompt:De,closePayModal:rt,debouncedLookupPosMember:pt,destroyBarcodeListener:Le,ensureBanksLoaded:ke,ensureCustomersLoaded:X,executePOSPrintDirect:bt,getProductStockInfo:be,lookupPosMember:ve,openPOSCameraScanner:Ne,openPOSCartDrawer:ot,openPOSHeldModal:he,openPayModal:Jt,playCashierBeep:K,playCashierChime:ge,posAddToCartQty:qt,posApplyQuickDiscount:xt,posConfirmHoldCart:Ye,posDeleteHeldCart:at,posDiscountAmount:F,posExecuteDeleteHeld:st,posHoldCurrentAndRecall:et,posHoldCurrentCart:He,posOverwriteAndRecall:tt,posProcessManualBarcode:ht,posRecallHeldCart:Ze,posSearchScannedCode:wt,posSetDiscountType:ut,posSetDiscountVal:Ce,posSetQuickCash:lt,printPOSReceipt:ta,processPOSTx:ea,removeFromCart:Gt,renderCatalog:D,renderHeldBadges:ne,renderPOS:oa,renderPOSStorefront:sa,resetPosMember:ct,selectPosMember:dt,setItemDisc:Qt,setPOSViewMode:Je,setPosCustomerType:Zt,setPosPayMethod:nt,setQty:zt,stopClock:Kt,togglePOSScannerFacing:mt,togglePOSScannerMode:gt,togglePOSScannerTorch:ft,updatePosChange:it,updateQty:Ut},Symbol.toStringTag,{value:"Module"}));export{Ia as a,ja as p,ya as r};

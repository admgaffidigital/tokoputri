const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/pos-variant-sheet-CVGqyZs5.js","assets/module-print-C2-MjUR_.js"])))=>i.map(i=>d[i]);
import{a as K,A as va,d as S,_ as ya}from"./module-member-CTCtgxSU.js";import{e as i,t as k,a as u,i as d,ar as te,u as Sa,x as Ye,b as Pa,f as Ta}from"./module-print-C2-MjUR_.js";import{f as Je}from"./vendor-firebase-core-D2OF5R23.js";let be=null;const Y=()=>{if(be)return be;try{const e=sessionStorage.getItem("pos_cashier_session");if(e)return be=JSON.parse(e),be}catch{}return null},Ca=e=>{be=e;try{e?sessionStorage.setItem("pos_cashier_session",JSON.stringify(e)):sessionStorage.removeItem("pos_cashier_session")}catch{}},Rt=()=>{be=null;try{sessionStorage.removeItem("pos_cashier_session")}catch{}},_t=()=>!!Y(),Et=async()=>{if(Y()||window.isAdm||window.__localIsAdm||u&&(u.hasCashier===!0||u.store?.posEnabled===!0))return!0;const e=localStorage.getItem("pos_has_cashier");if(e==="true")return!0;const t=!!(window.isAdm||window.__localIsAdm||K.currentUser&&K.currentUser.uid===va);try{if(t){const s=!(await S.collection("freshmart").doc("cms_data").collection("cashier_accounts").where("isActive","==",!0).limit(1).get()).empty;try{localStorage.setItem("pos_has_cashier",s?"true":"false"),S.collection("freshmart").doc("cms_data").set({hasCashier:s},{merge:!0}).catch(()=>{})}catch{}return s}else{const a=await S.collection("freshmart").doc("cms_data").get();if(a.exists){const s=a.data();if(s.hasCashier!==void 0){const r=!!s.hasCashier;try{localStorage.setItem("pos_has_cashier",r?"true":"false")}catch{}return r}}return e!=="false"}}catch{return e!=="false"}},Re=async()=>{const e=i("pos-cashier-header-btn");if(!e)return;const t=!!Y(),a=!!(window.isAdm||window.__localIsAdm),s=localStorage.getItem("pos_has_cashier"),r=u?u.hasCashier??!0:!0;t||a||s==="true"||s===null&&r!==!1?e.classList.remove("hidden"):s==="false"&&e.classList.add("hidden");try{await Et()||t||a?e.classList.remove("hidden"):e.classList.add("hidden")}catch{(t||a||s!=="false")&&e.classList.remove("hidden")}},Kt=async()=>{typeof window.triggerHaptic=="function"&&window.triggerHaptic("medium"),Y()?(typeof window.changeView=="function"&&window.changeView("view-pos-cashier"),typeof window.renderPOSStorefront=="function"&&window.renderPOSStorefront()):tt()},tt=()=>{const e=i("pos-login-modal");e&&(e.classList.remove("hidden"),setTimeout(()=>{e.classList.remove("opacity-0");const t=i("pos-login-modal-box");t&&t.classList.remove("translate-y-full","scale-95")},10),setTimeout(()=>{const t=i("pos-login-email");t&&t.focus()},300),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},at=()=>{const e=i("pos-login-modal"),t=i("pos-login-modal-box");e&&e.classList.add("opacity-0"),t&&t.classList.add("translate-y-full"),setTimeout(()=>{e&&e.classList.add("hidden");const a=i("pos-login-email"),s=i("pos-login-password"),r=i("pos-login-error");a&&(a.value=""),s&&(s.value=""),r&&(r.textContent="",r.classList.add("hidden"))},300)},qt=async()=>{const e=i("pos-login-email"),t=i("pos-login-password"),a=i("pos-login-error"),s=i("pos-login-btn"),r=e?.value?.trim()||"",o=t?.value||"",n=b=>{if(a){a.classList.remove("hidden");const p=a.querySelector("span");p?p.textContent=b:a.textContent=b}typeof window.triggerHaptic=="function"&&window.triggerHaptic("error")};if((()=>{if(a){a.classList.add("hidden");const b=a.querySelector("span");b&&(b.textContent="")}})(),!r||!o){n("Email dan password wajib diisi.");return}s&&(s.disabled=!0,s.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i>Memverifikasi...');try{const p=(await K.signInWithEmailAndPassword(r,o)).user?.uid;if(!p)throw new Error("UID tidak ditemukan");const y=await S.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(p).get();if(!y.exists){await K.signOut(),n("Akun ini bukan akun kasir yang terdaftar di toko ini.");return}const v=y.data();if(v.role!=="cashier"){await K.signOut(),n("Akun ini tidak memiliki akses kasir.");return}if(!v.isActive){await K.signOut(),n("Akun kasir ini telah dinonaktifkan. Hubungi admin toko.");return}Ca({uid:p,name:v.name||r,email:v.email||r,role:"cashier"});try{localStorage.setItem("pos_has_cashier","true")}catch{}Re(),typeof window.syncActiveShiftFromCloud=="function"&&window.syncActiveShiftFromCloud().catch(()=>{}),at(),k(`Selamat datang, ${v.name||"Kasir"}! 👋`,"success"),typeof window.changeView=="function"&&window.changeView("view-pos-cashier"),setTimeout(()=>{typeof window.renderPOSStorefront=="function"&&window.renderPOSStorefront()},100),typeof window.triggerHaptic=="function"&&window.triggerHaptic("success")}catch(b){console.error("[POS Auth] Login error:",b);const p=b.code||"";n(p==="auth/user-not-found"||p==="auth/wrong-password"||p==="auth/invalid-credential"?"Email atau password salah.":p==="auth/too-many-requests"?"Terlalu banyak percobaan. Coba lagi beberapa saat.":p==="auth/network-request-failed"?"Koneksi gagal. Periksa jaringan internet.":"Login gagal: "+(b.message||"Kesalahan tidak diketahui"))}finally{s&&(s.disabled=!1,s.innerHTML='<i class="fa-solid fa-right-to-bracket mr-2"></i>Masuk Kasir')}},st=async(e=!1)=>{if(!e&&typeof window.getActiveShift=="function"){const a=window.getActiveShift();if(a&&a.status==="open"){document.getElementById("pos-logout-shift-modal")?.remove();const s=typeof window.fRp=="function"?window.fRp(a.startingCash):"Rp "+a.startingCash;document.body.insertAdjacentHTML("beforeend",`
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
            </div>`);return}}Y(),typeof window.detachPOSHistoryListener=="function"&&window.detachPOSHistoryListener(),typeof window.detachActiveShiftListener=="function"&&window.detachActiveShiftListener(),typeof window.clearActiveShift=="function"&&window.clearActiveShift();try{if(!window.isAdm&&!window.__localIsAdm)try{await K.signOut()}catch{}}catch{}Rt();const t=i("view-pos-cashier");t&&(t.innerHTML=""),typeof window.destroyBarcodeListener=="function"&&window.destroyBarcodeListener(),typeof window.stopPOSClock=="function"&&window.stopPOSClock(),k("Sesi kasir berakhir. Sampai jumpa! 👋"),typeof window.changeView=="function"&&window.changeView("view-catalog"),typeof window.triggerHaptic=="function"&&window.triggerHaptic("medium"),typeof window.updatePOSHeaderIcon=="function"&&window.updatePOSHeaderIcon()},Vt=async()=>{await Re()};window.openPOSCashierMode=Kt;window.openPOSLoginModal=tt;window.closePOSLoginModal=at;window.processCashierLogin=qt;window.cashierLogout=st;window.exitPOSMode=st;window.getCashierSession=Y;window.isCashierLoggedIn=_t;window.initPOSAuth=Vt;window.updatePOSHeaderIcon=Re;const Ua=Object.freeze(Object.defineProperty({__proto__:null,cashierLogout:st,checkCashierExists:Et,clearCashierSession:Rt,closePOSLoginModal:at,getCashierSession:Y,initPOSAuth:Vt,isCashierLoggedIn:_t,openPOSCashierMode:Kt,openPOSLoginModal:tt,processCashierLogin:qt,updatePOSHeaderIcon:Re},Symbol.toStringTag,{value:"Module"})),x=e=>"Rp "+Math.round(parseFloat(e)||0).toLocaleString("id-ID"),Ze=e=>parseFloat((parseFloat(e)||0).toFixed(3)).toString(),De="pos_active_shift",Ut="pos_last_closed_shift";let ue=null,He=null;const Be=()=>{if(typeof He=="function"){try{He()}catch{}He=null}},ge=()=>{const e=typeof Y=="function"?Y():null,t=!!(window.isAdm||window.__localIsAdm||window.__currentAdminUid),a=K?.currentUser?.uid,s=e?.uid||(t?window.__currentAdminUid||a||"admin":a||"cashier-anon"),r=e?.name||(t?"Admin Seller":"Kasir Toko"),o=e?.email||t&&K?.currentUser?.email||"";return{uid:s,name:r,email:o,isAdm:t}},me=(e,t=ge())=>{if(!e)return!1;const a=e.cashierUid;return!!(a&&t.uid&&a===t.uid||t.isAdm&&(a==="admin"||a==="ADMIN_UID"||a===window.__currentAdminUid||K?.currentUser&&a===K.currentUser.uid))},N=()=>{if(ue)return ue;try{const e=localStorage.getItem(De);if(e)return ue=JSON.parse(e),ue}catch(e){console.warn("[POS Shift] Gagal membaca active shift:",e)}return null},ae=e=>{ue=e;try{e?localStorage.setItem(De,JSON.stringify(e)):localStorage.removeItem(De)}catch{}},Se=()=>{ue=null;try{localStorage.removeItem(De)}catch{}},$a=()=>{try{const e=localStorage.getItem(Ut);if(e)return JSON.parse(e)}catch{}return null},rt=e=>{try{localStorage.setItem(Ut,JSON.stringify(e))}catch{}},se=()=>{const e=N();return!!(e&&e.status==="open")},_e=async(e=null)=>{const t=ge();try{const a=await S.collection("freshmart").doc("cms_data").collection("pos_shifts").where("status","==","open").get();if(!a.empty){const s=[];if(a.forEach(r=>{const o={id:r.id,...r.data()};me(o,t)&&s.push(o)}),s.length>0)return s.sort((r,o)=>(o.startTime||0)-(r.startTime||0)),s[0]}}catch(a){console.warn("[POS Shift] Cek open shift cms_data:",a)}try{const a=await S.collection("pos_shifts").where("status","==","open").get();if(!a.empty){const s=[];if(a.forEach(r=>{const o={id:r.id,...r.data()};me(o,t)&&s.push(o)}),s.length>0)return s.sort((r,o)=>(o.startTime||0)-(r.startTime||0)),s[0]}}catch(a){console.warn("[POS Shift] Cek open shift root pos_shifts:",a)}return null},ie=e=>{if(e){Be();try{He=S.collection("freshmart").doc("cms_data").collection("pos_shifts").doc(e).onSnapshot(a=>{if(!a.exists)return;const s={id:a.id,...a.data()};if(s.status==="closed"){Be(),Se(),rt(s),Ee(),Pe(),he(),k("Shift kasir telah ditutup dari perangkat lain.","info"),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge();return}if(s.status==="open"){ae(s),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge();const r=i("pos-shift-summary-modal");r&&!r.classList.contains("opacity-0")&&E()}},a=>{console.warn("[POS Shift] Snapshot listener cms_data error:",a)})}catch(t){console.warn("[POS Shift] Gagal attach snapshot listener:",t)}}},Z=async()=>{const e=ge(),t=N();if(t&&t.status==="open"&&me(t,e))try{const a=await S.collection("freshmart").doc("cms_data").collection("pos_shifts").doc(t.id).get();if(a.exists){const s={id:a.id,...a.data()};if(s.status==="closed")Se(),rt(s),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge();else return ae(s),ie(s.id),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge(),s}}catch(a){return console.warn("[POS Shift] Gagal verifikasi local shift ke cloud:",a),ie(t.id),t}try{const a=await _e(e.uid);if(a)return ae(a),ie(a.id),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge(),a;t&&!me(t,e)&&(Se(),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge())}catch(a){console.warn("[POS Shift] Gagal cari shift open di cloud:",a)}return N()},zt=(e="open")=>{try{const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const a=new t,s=a.currentTime;e==="open"?([523.25,659.25,783.99,1046.5].forEach((o,n)=>{const l=a.createOscillator(),b=a.createGain(),p=s+n*.07;l.type="sine",l.frequency.setValueAtTime(o,p),b.gain.setValueAtTime(.09,p),b.gain.exponentialRampToValueAtTime(1e-4,p+.16),l.connect(b),b.connect(a.destination),l.start(p),l.stop(p+.16)}),setTimeout(()=>{a.close().catch(()=>{})},600)):([{f:[783.99,987.77],t:s,d:.14},{f:[1046.5,1318.51],t:s+.12,d:.35}].forEach(o=>{o.f.forEach(n=>{const l=a.createOscillator(),b=a.createGain();l.type="triangle",l.frequency.setValueAtTime(n,o.t),b.gain.setValueAtTime(.08,o.t),b.gain.exponentialRampToValueAtTime(1e-4,o.t+o.d),l.connect(b),b.connect(a.destination),l.start(o.t),l.stop(o.t+o.d)})}),setTimeout(()=>{a.close().catch(()=>{})},700))}catch{}},ot=(e,t=Date.now())=>{if(!e)return"-";const a=Math.max(0,t-e),s=Math.floor(a/6e4),r=Math.floor(s/60),o=s%60;return r>0?`${r} Jam ${o} Menit`:`${o} Menit`},Ma=()=>{const e=new Date,t=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0"),r=Math.floor(100+Math.random()*900);return`SHF-${t}${a}${s}-${r}`},R=async()=>{const e=ge(),t=N();if(t&&t.status==="open"&&me(t,e)){k(`Shift kasir #${t.shiftNo||t.id} sedang aktif. Menampilkan ringkasan shift.`,"info"),E();return}try{const l=await _e(e.uid);if(l){ae(l),ie(l.id),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge(),k(`Melanjutkan shift aktif (#${l.shiftNo||l.id}) dari perangkat lain! 👋`,"success"),E();return}}catch(l){console.warn("[POS Shift] Cek cloud saat buka modal:",l)}const a=e.name,s=new Date().toLocaleString("id-ID",{dateStyle:"full",timeStyle:"short"});document.getElementById("pos-open-shift-modal")?.remove();const r=`
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
                            <span class="font-bold text-slate-800 dark:text-slate-200">${d(a)}</span>
                        </div>
                    </div>
                    <div class="text-right">
                        <span class="text-[10px] text-slate-400 block font-medium">Waktu Buka</span>
                        <span class="font-bold text-slate-700 dark:text-slate-300 text-[11px]">${d(s)}</span>
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
    </div>`;document.body.insertAdjacentHTML("beforeend",r);const o=i("pos-open-shift-modal"),n=i("pos-open-shift-box");!o||!n||(o.classList.remove("pointer-events-none"),requestAnimationFrame(()=>{o.classList.remove("opacity-0"),n.classList.remove("translate-y-8","scale-95")}),setTimeout(()=>{const l=i("pos-shift-start-cash-input");l&&(l.focus(),l.select())},250))},he=()=>{const e=i("pos-open-shift-modal"),t=i("pos-open-shift-box");e&&(e.classList.add("opacity-0","pointer-events-none"),t&&t.classList.add("translate-y-8","scale-95"),setTimeout(()=>{e.remove()},280))},Qt=()=>{const e=parseFloat(i("pos-shift-start-cash-input")?.value)||0;document.querySelectorAll(".pos-preset-chip").forEach(t=>{parseFloat(t.dataset.amount)===e?t.className="pos-preset-chip px-2.5 py-1 rounded-xl text-[10px] font-black border-2 border-[var(--color-primary)] text-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.1)] shadow-xs transition-all cursor-pointer":t.className="pos-preset-chip px-2.5 py-1 rounded-xl text-[10px] font-bold border border-slate-200 dark:border-slate-700 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-all cursor-pointer"})},Aa=e=>{const t=i("pos-shift-start-cash-input");t&&(t.value=e,t.focus(),t.select()),Qt()},Oa=async()=>{const e=i("pos-shift-start-cash-input"),t=i("pos-shift-start-notes-input"),a=parseFloat(e?.value)||0,s=t?.value?.trim()||"",r=ge(),o=r.uid,n=r.name,l=r.email,b=document.querySelector('#pos-open-shift-box button[onclick*="confirmStartPOSShift"]');b&&(b.disabled=!0,b.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-1.5"></i><span>Memverifikasi Shift...</span>');try{const f=await _e(o);if(f){he(),ae(f),ie(f.id),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge(),k(`Akun kasir sudah memiliki shift aktif (#${f.shiftNo||f.id}). Melanjutkan shift berjalan.`,"warning"),E();return}}catch(f){console.warn("[POS Shift] Pre-flight check error:",f)}const p={id:"SHF-"+Date.now(),shiftNo:Ma(),cashierUid:o,cashierName:n,cashierEmail:l,startTime:Date.now(),startTimeISO:new Date().toISOString(),startingCash:a,startNotes:s,status:"open",txCount:0,itemCount:0,totalSales:0,cashSales:0,qrisSales:0,bankSales:0,tempoSales:0,discountTotal:0,pointsTotal:0,orders:[]};ae(p),ie(p.id);try{await Promise.all([S.collection("freshmart").doc("cms_data").collection("pos_shifts").doc(p.id).set(p),S.collection("pos_shifts").doc(p.id).set(p)])}catch{}he(),zt("open"),k(`Shift kasir dibuka! Modal awal: ${x(a)} 🎉`,"success"),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge()},Gt=e=>{try{const t=N();if(!t||t.status!=="open")return;const a=parseFloat(e.total)||0,s=e.payment?.method||"cash",r=parseFloat(e.payment?.dp)||0,o=parseFloat(e.payment?.tempoBalance)||0,n=parseFloat(e.globalDiscount)||0,l=parseFloat(e.pointsEarned)||0,b=(e.items||[]).reduce((p,f)=>p+(parseFloat(f.qty)||0),0);t.txCount=(t.txCount||0)+1,t.itemCount=parseFloat(((t.itemCount||0)+b).toFixed(3)),t.totalSales=(t.totalSales||0)+a,t.discountTotal=(t.discountTotal||0)+n,t.pointsTotal=(t.pointsTotal||0)+l,s==="cash"?t.cashSales=(t.cashSales||0)+a:s==="qris"?t.qrisSales=(t.qrisSales||0)+a:s==="bank"?t.bankSales=(t.bankSales||0)+a:s==="tempo"&&(r>0&&(t.cashSales=(t.cashSales||0)+r),t.tempoSales=(t.tempoSales||0)+o),Array.isArray(t.orders)||(t.orders=[]),(e.txId||e.id)&&t.orders.push(e.txId||e.id),ae(t);try{const p={txCount:t.txCount,itemCount:t.itemCount,totalSales:t.totalSales,cashSales:t.cashSales,qrisSales:t.qrisSales,bankSales:t.bankSales,tempoSales:t.tempoSales,discountTotal:t.discountTotal,pointsTotal:t.pointsTotal,orders:t.orders,lastUpdatedISO:new Date().toISOString()};S.collection("freshmart").doc("cms_data").collection("pos_shifts").doc(t.id).update(p).catch(()=>{}),S.collection("pos_shifts").doc(t.id).update(p).catch(()=>{})}catch{}typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge()}catch(t){console.warn("[POS Shift] Gagal update transaksi ke shift:",t)}},E=()=>{const e=N();if(!e){R();return}document.getElementById("pos-shift-summary-modal")?.remove();const t=(parseFloat(e.startingCash)||0)+(parseFloat(e.cashSales)||0),a=ot(e.startTime),s=new Date(e.startTime).toLocaleString("id-ID",{dateStyle:"medium",timeStyle:"short"}),r=`
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
                        <span class="text-[10px] text-slate-500 mt-0.5 block">${e.txCount||0} Struk / ${Ze(e.itemCount||0)} Item</span>
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
                        <span class="text-slate-500 text-[11px]">Total Omset: <b style="color:var(--color-primary)">${x(e.totalSales||0)}</b></span>
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
                <button onclick="window.printShiftSettlementReceipt(window.getActiveShift(), true)" class="px-3.5 py-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-700 transition-all flex items-center gap-1.5 cursor-pointer shadow-xs active:scale-95" title="Cetak Slip Sementara (X-Report)">
                    <i class="fa-solid fa-print"></i>
                    <span class="hidden sm:inline">Cetak X-Report</span>
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
    </div>`;document.body.insertAdjacentHTML("beforeend",r);const o=i("pos-shift-summary-modal"),n=i("pos-shift-summary-box");!o||!n||(o.classList.remove("pointer-events-none"),requestAnimationFrame(()=>{o.classList.remove("opacity-0"),n.classList.remove("translate-y-8","scale-95")}))},Ee=()=>{const e=i("pos-shift-summary-modal"),t=i("pos-shift-summary-box");e&&(e.classList.add("opacity-0","pointer-events-none"),t&&t.classList.add("translate-y-8","scale-95"),setTimeout(()=>{e.remove()},280))},nt=()=>{const e=N();if(!e){k("Tidak ada shift kasir yang aktif saat ini.","warning");return}document.getElementById("pos-close-shift-modal")?.remove();const t=(parseFloat(e.startingCash)||0)+(parseFloat(e.cashSales)||0),a=`
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
    </div>`;document.body.insertAdjacentHTML("beforeend",a);const s=i("pos-close-shift-modal"),r=i("pos-close-shift-box");!s||!r||(s.classList.remove("pointer-events-none"),requestAnimationFrame(()=>{s.classList.remove("opacity-0"),r.classList.remove("translate-y-8","scale-95")}),setTimeout(()=>{const o=i("pos-shift-actual-cash-input");o&&(o.focus(),o.select())},250))},Pe=()=>{const e=i("pos-close-shift-modal"),t=i("pos-close-shift-box");e&&(e.classList.add("opacity-0","pointer-events-none"),t&&t.classList.add("translate-y-8","scale-95"),setTimeout(()=>{e.remove()},280))},La=e=>{const t=i("pos-count-tab-quick"),a=i("pos-count-tab-denom"),s=i("pos-count-panel-quick"),r=i("pos-count-panel-denom");e==="quick"?(t&&(t.className="px-2.5 py-1 rounded-lg font-black bg-white dark:bg-slate-700 text-[var(--color-primary)] dark:text-white shadow-xs transition-all cursor-pointer border border-[rgba(var(--color-primary-rgb),0.2)] dark:border-slate-600"),a&&(a.className="px-2.5 py-1 rounded-lg font-bold text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-all cursor-pointer border border-transparent"),s&&s.classList.remove("hidden"),r&&r.classList.add("hidden")):(t&&(t.className="px-2.5 py-1 rounded-lg font-bold text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-all cursor-pointer border border-transparent"),a&&(a.className="px-2.5 py-1 rounded-lg font-black bg-white dark:bg-slate-700 text-[var(--color-primary)] dark:text-white shadow-xs transition-all cursor-pointer border border-[rgba(var(--color-primary-rgb),0.2)] dark:border-slate-600"),s&&s.classList.add("hidden"),r&&r.classList.remove("hidden"),Wt())},Wt=()=>{const e=(parseFloat(i("denom-100k")?.value)||0)*1e5,t=(parseFloat(i("denom-50k")?.value)||0)*5e4,a=(parseFloat(i("denom-20k")?.value)||0)*2e4,s=(parseFloat(i("denom-10k")?.value)||0)*1e4,r=(parseFloat(i("denom-5k")?.value)||0)*5e3,o=(parseFloat(i("denom-2k")?.value)||0)*2e3,n=(parseFloat(i("denom-1k")?.value)||0)*1e3,l=parseFloat(i("denom-coin")?.value)||0,b=e+t+a+s+r+o+n+l,p=i("pos-shift-actual-cash-input");p&&(p.value=b),Jt()},Jt=()=>{const e=N();if(!e)return;const t=(parseFloat(e.startingCash)||0)+(parseFloat(e.cashSales)||0),s=(parseFloat(i("pos-shift-actual-cash-input")?.value)||0)-t,r=i("pos-discrepancy-card"),o=i("pos-discrepancy-icon"),n=i("pos-discrepancy-status"),l=i("pos-discrepancy-desc"),b=i("pos-discrepancy-amount");!r||!o||!n||!l||!b||(s===0?(r.className="p-4 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between bg-emerald-50 dark:bg-emerald-950/20 border-emerald-500/40",o.className="w-10 h-10 rounded-2xl flex items-center justify-center text-white text-base shadow-sm shrink-0 bg-emerald-600",o.innerHTML='<i class="fa-solid fa-check"></i>',n.className="text-xs font-black uppercase tracking-wider text-emerald-800 dark:text-emerald-300 block",n.innerText="SEIMBANG (PAS)",l.className="text-[11px] text-emerald-700 dark:text-emerald-400 block",l.innerText="Uang fisik laci kasir cocok dengan transaksi sistem",b.className="text-base font-black text-emerald-600 dark:text-emerald-400",b.innerText="Rp 0"):s>0?(r.className="p-4 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between bg-amber-50 dark:bg-amber-950/20 border-amber-500/40",o.className="w-10 h-10 rounded-2xl flex items-center justify-center text-white text-base shadow-sm shrink-0 bg-amber-500",o.innerHTML='<i class="fa-solid fa-plus"></i>',n.className="text-xs font-black uppercase tracking-wider text-amber-800 dark:text-amber-300 block",n.innerText="LEBIH (SURPLUS)",l.className="text-[11px] text-amber-700 dark:text-amber-400 block",l.innerText="Terdapat kelebihan uang fisik di laci kasir",b.className="text-base font-black text-amber-600 dark:text-amber-400",b.innerText="+ "+x(s)):(r.className="p-4 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between bg-rose-50 dark:bg-rose-950/20 border-rose-500/40",o.className="w-10 h-10 rounded-2xl flex items-center justify-center text-white text-base shadow-sm shrink-0 bg-rose-600",o.innerHTML='<i class="fa-solid fa-minus"></i>',n.className="text-xs font-black uppercase tracking-wider text-rose-800 dark:text-rose-300 block",n.innerText="KURANG (DEFISIT)",l.className="text-[11px] text-rose-700 dark:text-rose-400 block",l.innerText="Terdapat kekurangan uang fisik di laci kasir",b.className="text-base font-black text-rose-600 dark:text-rose-400",b.innerText="- "+x(Math.abs(s))))},ja=async()=>{const e=N();if(!e)return;const t=(parseFloat(e.startingCash)||0)+(parseFloat(e.cashSales)||0),a=parseFloat(i("pos-shift-actual-cash-input")?.value)||0,s=a-t,r=i("pos-shift-close-notes")?.value?.trim()||"",o={d100k:parseFloat(i("denom-100k")?.value)||0,d50k:parseFloat(i("denom-50k")?.value)||0,d20k:parseFloat(i("denom-20k")?.value)||0,d10k:parseFloat(i("denom-10k")?.value)||0,d5k:parseFloat(i("denom-5k")?.value)||0,d2k:parseFloat(i("denom-2k")?.value)||0,d1k:parseFloat(i("denom-1k")?.value)||0,coin:parseFloat(i("denom-coin")?.value)||0},n=Date.now(),l=ot(e.startTime,n),b={...e,status:"closed",endTime:n,endTimeISO:new Date(n).toISOString(),duration:l,expectedCash:t,actualCash:a,difference:s,discrepancyStatus:s===0?"balanced":s>0?"surplus":"deficit",denominations:o,closingNotes:r};Be();try{await Promise.all([S.collection("freshmart").doc("cms_data").collection("pos_shifts").doc(b.id).set(b,{merge:!0}),S.collection("pos_shifts").doc(b.id).set(b,{merge:!0})])}catch(p){console.warn("[POS Shift] Simpan Firestore:",p)}Se(),rt(b),Pe(),zt("close"),Ha(b),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge()},Ha=e=>{document.getElementById("pos-closed-success-modal")?.remove();const t=e.difference||0,a=t===0?'<span class="px-2.5 py-1 rounded-xl text-xs font-black bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">PAS (Rp 0)</span>':t>0?`<span class="px-2.5 py-1 rounded-xl text-xs font-black bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300">LEBIH (+${x(t)})</span>`:`<span class="px-2.5 py-1 rounded-xl text-xs font-black bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300">KURANG (-${x(Math.abs(t))})</span>`,s=`
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
                <button onclick="window.printShiftSettlementReceipt(window.getLastClosedShift(), false)" class="w-full py-3.5 rounded-2xl text-white font-black text-xs uppercase tracking-wider shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer hover:opacity-95" style="background:var(--color-primary)">
                    <i class="fa-solid fa-print"></i>
                    <span>Cetak Slip Tutup Shift (Z-Report)</span>
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
    </div>`;document.body.insertAdjacentHTML("beforeend",s)},it=(e,t=!1)=>{if(!e){k("Data shift tidak ditemukan.","warning");return}const a=typeof te=="function"?te():{paperSize:"58mm"},s=a.paperSize==="80mm",r=a.headerText||u.store?.name||"TOKO PUTRI",o=u.store?.address||"",n=u.store?.wa||"",l=a.footerText||"Laporan Kasir Resmi Toko Putri",b=t?"RINGKASAN SHIFT (X-REPORT)":"REKAP TUTUP SHIFT (Z-REPORT)",p=new Date(e.startTime).toLocaleString("id-ID",{dateStyle:"short",timeStyle:"short"}),f=e.endTime?new Date(e.endTime).toLocaleString("id-ID",{dateStyle:"short",timeStyle:"short"}):new Date().toLocaleString("id-ID",{dateStyle:"short",timeStyle:"short"}),y=e.duration||ot(e.startTime,e.endTime||Date.now()),v=(parseFloat(e.startingCash)||0)+(parseFloat(e.cashSales)||0),c=e.actualCash!==void 0?parseFloat(e.actualCash):v,w=c-v,M=w===0?"SEIMBANG (PAS)":w>0?`LEBIH (+${x(w)})`:`KURANG (-${x(Math.abs(w))})`,L=window.open("","_blank",`width=${s?460:360},height=740`);if(!L){document.getElementById("pos-shift-receipt-modal")?.remove(),document.body.insertAdjacentHTML("beforeend",`
        <div id="pos-shift-receipt-modal" class="fixed inset-0 z-[10003] flex items-center justify-center p-3 sm:p-4" style="background:rgba(15,23,42,0.7);backdrop-filter:blur(4px)">
            <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full ${s?"max-w-md":"max-w-sm"} border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[90vh]">
                <div class="p-3.5 sm:p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50">
                    <span class="font-bold text-xs text-slate-700 dark:text-slate-200 flex items-center gap-1.5"><i class="fa-solid fa-receipt text-emerald-500"></i>Slip Rekap Shift (${s?"80mm":"58mm"})</span>
                    <button onclick="document.getElementById('pos-shift-receipt-modal')?.remove()" class="w-7 h-7 rounded-lg bg-slate-200/60 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 text-sm leading-none flex items-center justify-center cursor-pointer">×</button>
                </div>
                <div id="pos-shift-receipt-paper-box" class="p-4 overflow-y-auto flex-1 font-mono text-[11px] bg-slate-50/60 dark:bg-slate-950 text-slate-800 dark:text-slate-200 space-y-1.5 select-text">
                    <div class="text-center font-bold text-sm uppercase">${d(r)}</div>
                    ${o?`<div class="text-center text-[10px] text-slate-500">${d(o)}</div>`:""}
                    ${n?`<div class="text-center text-[10px] text-slate-500">WA: ${d(n)}</div>`:""}
                    <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                    <div class="text-center font-black text-xs uppercase">${d(b)}</div>
                    <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                    <div>No Shift: <b>#${d(e.shiftNo||e.id)}</b></div>
                    <div>Kasir   : ${d(e.cashierName)}</div>
                    <div>Mulai   : ${d(p)}</div>
                    <div>Selesai : ${d(f)}</div>
                    <div>Durasi  : ${d(y)}</div>
                    <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                    <div class="font-bold">RINGKASAN PENJUALAN:</div>
                    <div class="flex justify-between"><span>Total Struk</span><span>${e.txCount||0} Trx</span></div>
                    <div class="flex justify-between"><span>Total Barang</span><span>${Ze(e.itemCount||0)} Item</span></div>
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
                    <div class="flex justify-between font-bold"><span>Kas Sistem</span><span>${x(v)}</span></div>
                    ${t?"":`
                    <div class="flex justify-between font-bold"><span>Kas Fisik Dihitung</span><span>${x(c)}</span></div>
                    <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-1"></div>
                    <div class="flex justify-between font-black text-xs ${w===0?"text-emerald-600":w>0?"text-amber-600":"text-rose-600"}">
                        <span>SELISIH KAS</span>
                        <span>${M}</span>
                    </div>`}
                    ${e.closingNotes?`
                    <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-1.5"></div>
                    <div class="text-[10px]"><b>Catatan:</b> ${d(e.closingNotes)}</div>`:""}
                    <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                    <div class="text-center text-[10px] text-slate-400 my-1">${d(l)}</div>
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
        </div>`);return}L.document.write(`<!DOCTYPE html><html><head><meta charset="utf-8"><title>Slip Rekap Shift Kasir</title>
    <style>*{box-sizing:border-box}body{font-family:'Courier New',monospace;font-size:12px;max-width:${s?"330px":"260px"};margin:0 auto;padding:12px}
    h2{text-align:center;font-size:14px;font-weight:900;margin:2px 0;text-transform:uppercase}p{margin:1px 0;text-align:center;font-size:11px}.left{text-align:left}
    table{width:100%;border-collapse:collapse}.line{border-top:1px dashed #333;margin:6px 0}.total{font-weight:900;font-size:13px}
    .sig{margin-top:20px;text-align:center;font-size:10px;display:flex;justify-content:space-between}
    </style></head><body>
    <h2>${r}</h2>${o?`<p>${d(o)}</p>`:""}${n?`<p>WA: ${d(n)}</p>`:""}
    <div class="line"></div>
    <p style="font-weight:900;font-size:12px">${b}</p>
    <div class="line"></div>
    <p class="left">No Shift: <b>#${d(e.shiftNo||e.id)}</b></p>
    <p class="left">Kasir   : ${d(e.cashierName)}</p>
    <p class="left">Mulai   : ${d(p)}</p>
    <p class="left">Selesai : ${d(f)}</p>
    <p class="left">Durasi  : ${d(y)}</p>
    <div class="line"></div>
    <p class="left" style="font-weight:bold">RINGKASAN PENJUALAN:</p>
    <table>
    <tr><td>Total Struk</td><td style="text-align:right">${e.txCount||0} Trx</td></tr>
    <tr><td>Total Barang</td><td style="text-align:right">${Ze(e.itemCount||0)} Item</td></tr>
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
    <tr style="font-weight:bold"><td>Kas Sistem</td><td style="text-align:right">${x(v)}</td></tr>
    ${t?"":`
    <tr style="font-weight:bold"><td>Kas Fisik Laci</td><td style="text-align:right">${x(c)}</td></tr>
    <tr><td colspan="2"><div class="line"></div></td></tr>
    <tr style="font-weight:bold"><td>SELISIH KAS</td><td style="text-align:right">${M}</td></tr>`}
    </table>
    ${e.closingNotes?`<div class="line"></div><p class="left" style="font-size:10px"><b>Catatan:</b> ${d(e.closingNotes)}</p>`:""}
    <div class="line"></div>
    <p style="font-size:10px">${d(l)}</p>
    <div class="sig">
        <div>Kasir<br><br><br><b>(${d(e.cashierName)})</b></div>
        <div>Supervisor / Admin<br><br><br><b>( ................ )</b></div>
    </div>
    <script>window.onload=()=>{window.print();setTimeout(()=>window.close(),800)}<\/script>
    </body></html>`),L.document.close()},lt=()=>{const e=typeof te=="function"?te():{deviceType:"system"},t=i("pos-shift-receipt-paper-box");if(t)if(e.deviceType==="rawbt"&&window.AndroidNativeApp&&typeof window.AndroidNativeApp.printRawBT=="function"){const a=t.innerText,s=btoa(unescape(encodeURIComponent(a)));window.AndroidNativeApp.printRawBT(s)}else window.AndroidNativeApp&&typeof window.AndroidNativeApp.print=="function"?window.AndroidNativeApp.print():window.print()},Te=()=>{const e=[i("pos-shift-btn-storefront"),i("pos-shift-btn-admin")],t=N();e.forEach(a=>{a&&(t&&t.status==="open"?a.id==="pos-shift-btn-storefront"?a.innerHTML=`
                <button onclick="window.openPOSShiftSummaryModal()" class="h-8 px-2 sm:px-2.5 rounded-xl bg-black/15 hover:bg-black/25 text-white border border-white/20 transition-all cursor-pointer shadow-xs active:scale-95 inline-flex items-center gap-1 sm:gap-1.5 whitespace-nowrap shrink-0" title="Klik untuk lihat ringkasan shift (X-Report)">
                    <i class="fa-solid fa-cash-register text-emerald-300 text-xs"></i>
                    <span class="hidden sm:inline text-xs font-medium">Shift: </span>
                    <b class="text-white text-xs whitespace-nowrap">${x(t.startingCash)}</b>
                </button>`:a.innerHTML=`
                <button onclick="window.openPOSShiftSummaryModal()" class="h-8 px-2.5 sm:px-3 rounded-xl text-xs font-bold bg-[rgba(var(--color-primary-rgb),0.1)] hover:bg-[rgba(var(--color-primary-rgb),0.18)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.25)] inline-flex items-center gap-1.5 transition-all cursor-pointer active:scale-95 whitespace-nowrap shrink-0 shadow-2xs" title="Klik untuk lihat ringkasan shift (X-Report)">
                    <i class="fa-solid fa-cash-register text-xs"></i>
                    <span class="hidden sm:inline font-medium">Shift: </span>
                    <b class="font-black whitespace-nowrap">${x(t.startingCash)}</b>
                </button>`:a.id==="pos-shift-btn-storefront"?a.innerHTML=`
                <button onclick="window.openPOSOpenShiftModal()" class="h-8 px-2.5 sm:px-3 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs inline-flex items-center gap-1.5 transition-all active:scale-95 shadow-xs cursor-pointer border border-white/25 backdrop-blur-xs whitespace-nowrap shrink-0" title="Buka shift kasir baru">
                    <span class="w-1.5 h-1.5 rounded-full bg-amber-300 animate-pulse"></span>
                    <i class="fa-solid fa-wallet text-amber-300 text-xs"></i>
                    <span class="text-xs font-black whitespace-nowrap">Buka Shift</span>
                </button>`:a.innerHTML=`
                <button onclick="window.openPOSOpenShiftModal()" class="h-8 px-2.5 sm:px-3 rounded-xl text-xs font-bold bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/40 dark:hover:bg-amber-900/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 inline-flex items-center gap-1.5 transition-all cursor-pointer active:scale-95 animate-pulse whitespace-nowrap shrink-0 shadow-2xs" title="Buka shift kasir baru">
                    <i class="fa-solid fa-wallet text-xs"></i>
                    <span class="whitespace-nowrap">Buka Shift</span>
                </button>`)})},Ia=async e=>{const t=typeof e=="string"?i(e):e;t&&(t.innerHTML=`
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
    </div>`,await dt())},dt=async()=>{const e=i("admin-shift-list-target");if(e)try{const t=await S.collection("freshmart").doc("cms_data").collection("pos_shifts").orderBy("startTime","desc").limit(50).get();if(t.empty){e.innerHTML=`
            <div class="text-center py-14 p-6 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-slate-400 dark:text-slate-500">
                <i class="fa-solid fa-clipboard-list text-3xl mb-2"></i>
                <p class="font-bold text-xs">Belum ada riwayat shift kasir tercatat</p>
                <p class="text-[11px] mt-0.5">Shift yang dibuka dan ditutup oleh kasir akan otomatis terarsip di sini.</p>
            </div>`;return}const a=t.docs.map(s=>{const r=s.data(),o=r.status==="closed",n=r.difference||0,l=o?n===0?'<span class="px-2.5 py-1 rounded-full text-[10px] font-black bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 whitespace-nowrap shrink-0">PAS</span>':n>0?`<span class="px-2.5 py-1 rounded-full text-[10px] font-black bg-amber-100 dark:bg-amber-950/70 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60 whitespace-nowrap shrink-0">+${x(n)}</span>`:`<span class="px-2.5 py-1 rounded-full text-[10px] font-black bg-rose-100 dark:bg-rose-950/70 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800/60 whitespace-nowrap shrink-0">-${x(Math.abs(n))}</span>`:'<span class="px-2.5 py-1 rounded-full text-[10px] font-black bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 whitespace-nowrap shrink-0 tracking-wide">SEDANG BERJALAN</span>',b=new Date(r.startTime).toLocaleString("id-ID",{dateStyle:"medium",timeStyle:"short"}),p=JSON.stringify(r).replace(/"/g,"&quot;");return`
            <div class="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-800/95 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:shadow-xs transition-all space-y-3">
                <div class="flex items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-700/60 pb-3">
                    <div class="flex items-center gap-2.5 min-w-0">
                        <div class="w-9 h-9 rounded-2xl flex items-center justify-center text-xs text-white shrink-0 shadow-2xs ${o?"bg-slate-700 dark:bg-slate-600":""}" style="${o?"":"background: var(--color-primary)"}">
                            <i class="fa-solid fa-cash-register"></i>
                        </div>
                        <div class="min-w-0">
                            <span class="font-mono font-black text-xs text-slate-900 dark:text-white whitespace-nowrap block truncate">#${d(r.shiftNo||r.id)}</span>
                            <span class="text-[10px] text-slate-400 dark:text-slate-500 whitespace-nowrap block truncate">${b}</span>
                        </div>
                    </div>
                    <div class="flex items-center gap-2 shrink-0">
                        ${l}
                        <button onclick="window.printShiftSettlementReceipt(${p}, ${!o})" class="w-8 h-8 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700/80 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-200 text-xs flex items-center justify-center transition-all cursor-pointer shrink-0 shadow-2xs active:scale-95" title="Cetak Slip">
                            <i class="fa-solid fa-print"></i>
                        </button>
                        <button onclick="window.deleteShiftRecord('${s.id}', '${d(r.shiftNo||r.id)}')" class="w-8 h-8 rounded-xl bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 dark:hover:bg-rose-900/60 text-rose-500 dark:text-rose-400 text-xs flex items-center justify-center transition-all cursor-pointer shrink-0 shadow-2xs active:scale-95 border border-rose-100 dark:border-rose-900/60" title="Hapus Data Shift">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                </div>

                <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                    <div class="p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/70">
                        <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500 block">Kasir</span>
                        <span class="font-bold text-slate-800 dark:text-slate-200 truncate block mt-0.5">${d(r.cashierName)}</span>
                    </div>
                    <div class="p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/70">
                        <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500 block">Modal Awal</span>
                        <span class="font-bold text-slate-800 dark:text-slate-200 block mt-0.5">${x(r.startingCash)}</span>
                    </div>
                    <div class="p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/70">
                        <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500 block">Total Omset</span>
                        <span class="font-black text-emerald-600 dark:text-emerald-400 block mt-0.5">${x(r.totalSales||0)}</span>
                    </div>
                    <div class="p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/70">
                        <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500 block">Kas Fisik Laci</span>
                        <span class="font-black text-slate-900 dark:text-white block mt-0.5">${x(r.actualCash!==void 0?r.actualCash:(r.startingCash||0)+(r.cashSales||0))}</span>
                    </div>
                </div>

                ${r.closingNotes?`<div class="text-[11px] text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/40 p-2.5 rounded-2xl border border-slate-100 dark:border-slate-800/70"><b>Catatan:</b> ${d(r.closingNotes)}</div>`:""}
            </div>`}).join("");e.innerHTML=a}catch(t){console.error("[POS Shift] Gagal memuat daftar shift admin:",t),e.innerHTML=`
        <div class="text-center py-10 text-rose-500 text-xs">
            <i class="fa-solid fa-triangle-exclamation text-2xl mb-1"></i>
            <p>Gagal memuat laporan shift: ${d(t.message)}</p>
        </div>`}},Da=async(e,t)=>{if(await Sa(`Hapus data shift <b>#${d(t)}</b>?<br><span class="text-xs text-slate-400 dark:text-slate-500">Data ini akan dihapus permanen dari cloud dan tidak bisa dikembalikan.</span>`,{confirmText:"Ya, Hapus",cancelText:"Batal",danger:!0}))try{await S.collection("freshmart").doc("cms_data").collection("pos_shifts").doc(e).delete(),k("Data shift berhasil dihapus.","success"),await dt()}catch(s){console.error("[POS Shift] Gagal menghapus shift:",s),k("Gagal menghapus: "+s.message,"error")}};window.getActiveShift=N;window.saveActiveShift=ae;window.clearActiveShift=Se;window.getLastClosedShift=$a;window.isShiftActive=se;window.getCurrentCashierIdentity=ge;window.isShiftOwnedByCashier=me;window.findActiveShiftInCloud=_e;window.syncActiveShiftFromCloud=Z;window.listenActiveShiftCloud=ie;window.detachActiveShiftListener=Be;window.openPOSOpenShiftModal=R;window.closePOSOpenShiftModal=he;window.posSetStartCashPreset=Aa;window.posUpdateStartCashChips=Qt;window.confirmStartPOSShift=Oa;window.recordTransactionToShift=Gt;window.openPOSShiftModal=E;window.openPOSShiftSummaryModal=E;window.closePOSShiftSummaryModal=Ee;window.openPOSCloseShiftModal=nt;window.closePOSCloseShiftModal=Pe;window.setPOSCountMode=La;window.calcPOSDenominations=Wt;window.updatePOSShiftDiscrepancy=Jt;window.confirmClosePOSShift=ja;window.printShiftSettlementReceipt=it;window.executeShiftPrintDirect=lt;window.renderShiftHeaderBadge=Te;window.renderAdminShiftReportView=Ia;window.loadAdminShiftReports=dt;window.deleteShiftRecord=Da;let It=!1;const Yt=()=>It?Promise.resolve():ya(()=>import("./pos-variant-sheet-CVGqyZs5.js"),__vite__mapDeps([0,1])).then(()=>{It=!0});let h=[],J="",ne="",W="grid";try{const e=localStorage.getItem("pos_view_mode");(e==="list"||e==="grid")&&(W=e)}catch{}let m={name:"",phone:"",isMember:!1,memberId:null,isNewTempo:!1},H="cash",_=0,q=0,D="rp",A=0,G="",Dt=null,fe=null,le=null,je=null,xe=null,Ie=!0,Xe="environment",ye=!1,ee=null,Bt="",Nt=0;const ct=e=>{W=e;try{localStorage.setItem("pos_view_mode",e)}catch{}document.querySelectorAll("#pos-view-btn-grid").forEach(t=>{e==="grid"?(t.style.background="var(--color-primary)",t.className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-white shadow-xs"):(t.style.removeProperty("background"),t.className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-slate-500 hover:text-slate-800 dark:text-slate-400")}),document.querySelectorAll("#pos-view-btn-list").forEach(t=>{e==="list"?(t.style.background="var(--color-primary)",t.className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-white shadow-xs"):(t.style.removeProperty("background"),t.className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-slate-500 hover:text-slate-800 dark:text-slate-400")}),F()},de=e=>Math.max(0,parseInt(e)||0),Ke=e=>{if(e==null)return 0;typeof e=="string"&&(e=e.replace(",",".").trim());const t=parseFloat(e);return isNaN(t)?0:Math.max(0,parseFloat(t.toFixed(3)))},O=e=>{const t=parseFloat(e)||0;return parseFloat(t.toFixed(3)).toString()},g=e=>Ta(e),re=()=>h.reduce((e,t)=>e+t.subtotal,0),V=()=>{if(D==="percent"){const e=Math.min(100,Math.max(0,parseFloat(A)||0));return Math.round(re()*e/100)}return Math.min(re(),de(A||q))},I=()=>Math.max(0,re()-V()),Zt=()=>_-I(),we=e=>{if(!e)return{isManaged:!1,totalStock:0,isOutOfStock:!0,isLowStock:!1};if(!(u?.store?.useStock!==!1))return{isManaged:!1,totalStock:9999,isOutOfStock:!1,isLowStock:!1};let a=0;return Array.isArray(e.variants)&&e.variants.length>0?a=e.variants.reduce((s,r)=>s+(r&&r.stock!=null&&parseFloat(r.stock)||0),0):a=parseFloat(e.stock)||0,{isManaged:!0,totalStock:a,isOutOfStock:a<=0,isLowStock:a>0&&a<=5}},U=()=>{try{const e=window.AudioContext||window.webkitAudioContext;if(!e)return;const t=new e,a=t.createOscillator(),s=t.createGain();a.type="sine",a.frequency.setValueAtTime(1400,t.currentTime),s.gain.setValueAtTime(.08,t.currentTime),s.gain.exponentialRampToValueAtTime(1e-4,t.currentTime+.08),a.connect(s),s.connect(t.destination),a.start(),a.stop(t.currentTime+.08),setTimeout(()=>{t.close().catch(()=>{})},150)}catch{}},Ba=(e,t)=>{if(!e||!e.wholesale||!e.wholesale.length)return null;const a=[...e.wholesale].sort((s,r)=>r.minQty-s.minQty);for(const s of a)if(t>=parseFloat(s.minQty))return parseFloat(s.price);return null},X=e=>{if(!e.isVariant){const t=(u.products||[]).find(s=>s&&String(s.id)===String(e.id)),a=t?Ba(t,e.qty):null;a!==null?(e.basePrice=e.basePrice||e.price,e.price=a,e.isWholesale=!0):(e.basePrice&&(e.price=e.basePrice),e.isWholesale=!1)}return e.subtotal=Math.max(0,e.price*e.qty-de(e.discount)),e},Na=()=>{const e=new Date,t=a=>String(a).padStart(2,"0");return`POS-${e.getFullYear()}${t(e.getMonth()+1)}${t(e.getDate())}-${Date.now().toString(36).toUpperCase()}`},Xt=()=>{fe&&clearInterval(fe);const e=()=>{const a=new Date().toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit",second:"2-digit"})+" WIB";document.querySelectorAll("#pos-live-clock").forEach(s=>{s.textContent=a})};e(),fe=setInterval(e,1e3)},ea=()=>{fe&&(clearInterval(fe),fe=null)};window.stopPOSClock=ea;const qe=()=>{window.__posBarcodeFn&&(document.removeEventListener("keydown",window.__posBarcodeFn),window.__posBarcodeFn=null)},ta=()=>{qe(),window.__posBarcodeFn=e=>{if(!e||typeof e.key!="string")return;const t=window.curViewName||"";if(!(t==="view-pos-cashier"||t==="view-admin"&&window.cTab==="pos"))return;if(e.key==="F4"){e.preventDefault();const r=i("pos-search-input");r&&(r.focus(),r.select());return}if(e.key==="F6"||e.key==="F7"){e.preventDefault(),Qe();return}if(e.key==="F8"){e.preventDefault(),$e();return}if(e.key==="F9"){e.preventDefault(),i("pos-camera-scanner-modal")?ce():We();return}if(e.key==="F10"){e.preventDefault(),se()?E():typeof Z=="function"?Z().then(r=>{r&&r.status==="open"?E():R()}).catch(()=>R()):R();return}const s=document.activeElement?.tagName?.toLowerCase();if(!(s==="input"||s==="textarea"||s==="select"))if(e.key==="Enter"){if(G&&G.length>=3){const r=G.trim().toLowerCase(),o=(u.products||[]).find(n=>n&&n.isActive!=="false"&&n.isActive!==!1&&(n.barcode&&n.barcode.toLowerCase()===r||n.sku&&n.sku.toLowerCase()===r||n.id&&String(n.id).toLowerCase()===r));if(o)Ve(o.id),U(),k(`Ditambahkan: ${o.name}`,"success");else{const n=i("pos-search-input");n&&(n.value=G,J=G,F()),k("Barcode tidak ditemukan di katalog","warning")}G=""}}else e.key&&e.key.length===1&&(G=(G||"")+e.key,clearTimeout(Dt),Dt=setTimeout(()=>{G=""},150))},document.addEventListener("keydown",window.__posBarcodeFn)},Ve=e=>{const t=(u.products||[]).find(o=>o&&String(o.id)===String(e));if(!t)return;if(t.variants&&t.variants.length>0){Yt().then(()=>{typeof window.openPOSVariantSheet=="function"&&window.openPOSVariantSheet(e)});return}const s=we(t);s.isManaged&&s.isOutOfStock&&k(`Peringatan: Stok "${t.name}" habis di etalase/gudang!`,"warning");const r=h.find(o=>String(o.id)===String(e)&&!o.isVariant);if(r){const o=parseFloat((r.qty+1).toFixed(3));if(s.isManaged&&o>s.totalStock){k(`Stok maksimal "${t.name}" hanya ${O(s.totalStock)} ${t.unit||"pcs"}`,"warning");return}r.qty=o,X(r)}else{const o=parseFloat(t.price)||0;h.push(X({id:t.id,name:t.name,price:o,basePrice:o,qty:1,discount:0,subtotal:o,isVariant:!1,isWholesale:!1}))}U(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"),$()},aa=(e,t)=>{const a=(u.products||[]).find(n=>n&&String(n.id)===String(e));if(!a)return;const s=we(a),r=Ke(t)||1,o=h.find(n=>String(n.id)===String(e)&&!n.isVariant);if(o){const n=parseFloat((o.qty+r).toFixed(3));if(s.isManaged&&n>s.totalStock){k(`Stok maksimal "${a.name}" hanya ${O(s.totalStock)} ${a.unit||"pcs"}`,"warning");return}o.qty=n,X(o)}else{const n=parseFloat(a.price)||0,l=X({id:a.id,name:a.name,price:n,basePrice:n,qty:r,discount:0,subtotal:n*r,isVariant:!1,isWholesale:!1});h.push(l)}U(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"),$()},sa=(e,t,a,s,r=1)=>{const o=`${e}__v${s}`,n=Ke(r)||1,l=h.find(b=>b.cartKey===o);if(l)l.qty=parseFloat((l.qty+n).toFixed(3)),X(l);else{const p=`${(u.products||[]).find(f=>f&&String(f.id)===String(e))?.name||e} — ${t}`;h.push(X({id:e,cartKey:o,name:p,variantName:t,variantIdx:s,price:a,basePrice:a,qty:n,discount:0,subtotal:a*n,isVariant:!0,isWholesale:!1}))}U(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"),$()},ra=(e,t)=>{const a=h.find(r=>(r.cartKey||String(r.id))===String(e));if(!a)return;const s=parseFloat((a.qty+t).toFixed(3));if(s<=0){Ue(e);return}if(t>0&&!a.isVariant){const r=(u.products||[]).find(o=>o&&String(o.id)===String(a.id));if(r){const o=we(r);if(o.isManaged&&s>o.totalStock){k(`Stok maksimal tersedia: ${O(o.totalStock)} ${r.unit||"pcs"}`,"warning");return}}}a.qty=s,X(a),t>0&&U(),$()},oa=(e,t)=>{const a=h.find(r=>(r.cartKey||String(r.id))===String(e));if(!a)return;let s=Ke(t);if(s<=0){Ue(e);return}if(!a.isVariant){const r=(u.products||[]).find(o=>o&&String(o.id)===String(a.id));if(r){const o=we(r);o.isManaged&&s>o.totalStock&&(k(`Stok maksimal tersedia: ${O(o.totalStock)} ${r.unit||"pcs"}`,"warning"),s=o.totalStock)}}a.qty=s,X(a),$()},na=(e,t)=>{const a=h.find(s=>(s.cartKey||String(s.id))===String(e));a&&(a.discount=Math.min(de(t),a.price*a.qty),X(a),$())},Ue=e=>{h=h.filter(t=>(t.cartKey||String(t.id))!==String(e)),$(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light")},ia=()=>{if(h.length===0)return;const e=()=>{h=[],q=0,A=0,D="rp",$(),k("Keranjang kasir dikosongkan.")};typeof window.showConfirm=="function"?window.showConfirm("Kosongkan Keranjang","Hapus semua item dari transaksi saat ini?",e,"Ya, Kosongkan",!0):e()},Ce=(e="hold")=>{try{const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const a=new t,s=a.createOscillator(),r=a.createGain();s.type="sine";const o=a.currentTime;e==="hold"?(s.frequency.setValueAtTime(659.25,o),s.frequency.exponentialRampToValueAtTime(880,o+.1)):(s.frequency.setValueAtTime(880,o),s.frequency.exponentialRampToValueAtTime(1174.66,o+.1)),r.gain.setValueAtTime(.08,o),r.gain.exponentialRampToValueAtTime(1e-4,o+.16),s.connect(r),r.connect(a.destination),s.start(),s.stop(o+.16),setTimeout(()=>{a.close().catch(()=>{})},200)}catch{}},Fa=e=>{if(!e)return"";const t=Math.floor((Date.now()-e)/1e3);if(t<45)return"Baru saja";const a=Math.floor(t/60);if(a<60)return`${a} mnt lalu`;const s=Math.floor(a/60);return s<24?`${s} jam lalu`:new Date(e).toLocaleDateString("id-ID",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})};let T=[];try{const e=localStorage.getItem("pos_held_carts");if(e){const t=JSON.parse(e);Array.isArray(t)&&(T=t)}}catch{T=[]}const ze=()=>{try{localStorage.setItem("pos_held_carts",JSON.stringify(T))}catch{}pe()},pe=()=>{const e=T.length,t=i("pos-held-btn-storefront"),a=i("pos-held-btn-admin");t&&(e>0?t.innerHTML=`
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
            <button onclick="window.openPOSHeldModal()" class="h-8 px-2.5 sm:px-3 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-750 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold inline-flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap shrink-0 shadow-2xs active:scale-95" title="Daftar Transaksi Tertahan (F8)">
                <i class="fa-solid fa-hourglass-half text-xs"></i>
                <span class="whitespace-nowrap">Parkir</span>
            </button>`)},Qe=()=>{if(h.length===0){k("Keranjang masih kosong, tidak ada transaksi untuk ditahan.","warning");return}const e=m?.name?`Antrean #${T.length+1} — ${m.name}`:`Antrean #${T.length+1}`,t=parseFloat(h.reduce((s,r)=>s+(parseFloat(r.qty)||0),0).toFixed(3)),a=I();ke(!0),typeof window.pushModalHistory=="function"&&window.pushModalHistory("posHoldPrompt"),document.getElementById("pos-hold-prompt-modal")?.remove(),document.body.insertAdjacentHTML("beforeend",`
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
                        <p class="font-black text-slate-800 dark:text-slate-100 text-sm mt-0.5">${O(t)} item</p>
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
    </div>`),setTimeout(()=>{const s=i("pos-hold-note-input");s&&(s.focus(),s.select())},50)},Ge=(e=!1)=>{const t=i("pos-hold-prompt-modal");t&&(!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("posHoldPrompt",!1,()=>t.remove()):t.remove())},pt=()=>{if(h.length===0)return;const t=(i("pos-hold-note-input")?.value||"").trim()||`Antrean #${T.length+1}`,a={id:`HELD-${Date.now().toString(36).toUpperCase()}`,time:Date.now(),note:t,cart:JSON.parse(JSON.stringify(h)),globalDisc:V(),discountType:D,discountVal:A,customer:{...m},total:I(),subtotal:re(),itemCount:parseFloat(h.reduce((s,r)=>s+(parseFloat(r.qty)||0),0).toFixed(3))};T.unshift(a),ze(),h=[],q=0,A=0,D="rp",m={name:"",phone:"",isMember:!1,memberId:null,isNewTempo:!1},Ge(),$(),F(),Ce("hold"),k(`Antrean "${t}" berhasil diparkir!`,"success")},$e=(e=!1)=>{!e&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("posHeldModal"),document.getElementById("pos-held-list-modal")?.remove();const t=T.length,a=t===0?`
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
            ${T.map((s,r)=>{const o=d(s.id),n=(s.cart||[]).slice(0,3).map(b=>`${d(b.name)} (${O(b.qty)}x)`).join(", "),l=(s.cart||[]).length>3?` +${s.cart.length-3} lainnya`:"";return`
                <div class="p-3.5 sm:p-4 hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div class="min-w-0 flex-1">
                        <div class="flex items-center gap-2 mb-1 flex-wrap">
                            <span class="px-2 py-0.5 rounded-lg bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 font-black text-[10px] uppercase">
                                #${r+1}
                            </span>
                            <h4 class="font-black text-xs sm:text-sm text-slate-900 dark:text-white truncate" title="${d(s.note)}">
                                ${d(s.note)}
                            </h4>
                            <span class="text-[10px] text-slate-400">• ${Fa(s.time)}</span>
                        </div>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                            <i class="fa-solid fa-box-open mr-1 text-[10px] opacity-70"></i>
                            <span>${n}${l}</span>
                        </p>
                        <div class="flex items-center gap-3 mt-1.5 text-xs">
                            <span class="text-slate-500 font-medium">${O(s.itemCount)} item</span>
                            <span class="text-slate-300 dark:text-slate-700">•</span>
                            <span class="font-black" style="color:var(--color-primary)">${g(s.total)}</span>
                            ${(s.globalDisc||0)>0?`<span class="text-[10px] text-rose-500 font-bold">(Disc: ${g(s.globalDisc)})</span>`:""}
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
    </div>`)},Me=(e=!1)=>{const t=i("pos-held-list-modal");t&&(!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("posHeldModal",!1,()=>t.remove()):t.remove())},bt=e=>{const t=T.findIndex(a=>a.id===e);if(t===-1){k("Transaksi tertahan tidak ditemukan.","warning");return}if(h.length>0){document.getElementById("pos-recall-confirm-modal")?.remove(),document.body.insertAdjacentHTML("beforeend",`
        <div id="pos-recall-confirm-modal" class="fixed inset-0 z-[10000] flex items-center justify-center p-4" style="background:rgba(15,23,42,0.7);backdrop-filter:blur(4px)">
            <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-sm border border-slate-200/80 dark:border-slate-800 overflow-hidden">
                <div class="p-5 text-center">
                    <div class="w-14 h-14 rounded-2xl bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto mb-3 text-2xl shadow-inner">
                        <i class="fa-solid fa-triangle-exclamation"></i>
                    </div>
                    <h3 class="font-black text-sm text-slate-900 dark:text-white mb-1">Keranjang Masih Berisi Item</h3>
                    <p class="text-xs text-slate-500 leading-relaxed mb-4">
                        Ada <span class="font-bold text-slate-800 dark:text-slate-200">${h.length} jenis item</span> di transaksi aktif saat ini. Ingin tahan transaksi aktif ke antrean baru atau menimpa?
                    </p>
                    <div class="flex flex-col gap-2">
                        <button onclick="window.posHoldCurrentAndRecall('${d(e)}')" class="w-full py-2.5 rounded-xl text-white font-bold text-xs shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5 active:scale-95 hover:brightness-105" style="background:var(--color-primary)">
                            <i class="fa-solid fa-floppy-disk"></i>
                            <span>Tahan Transaksi Aktif &amp; Panggil</span>
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
        </div>`);return}ut(t)},ut=e=>{const t=T[e];t&&(h=JSON.parse(JSON.stringify(t.cart||[])),D=t.discountType||"rp",A=t.discountVal!==void 0?t.discountVal:t.globalDisc||0,q=V(),m=t.customer?{...t.customer}:{name:"",phone:"",isMember:!1,memberId:null,isNewTempo:!1},T.splice(e,1),ze(),Me(),$(),F(),Ce("recall"),k(`Antrean "${t.note}" berhasil dipanggil kembali!`,"success"))},ft=e=>{document.getElementById("pos-recall-confirm-modal")?.remove();const t=m?.name?`Antrean #${T.length+1} — ${m.name}`:`Antrean #${T.length+1}`,a={id:`HELD-${Date.now().toString(36).toUpperCase()}`,time:Date.now(),note:t,cart:JSON.parse(JSON.stringify(h)),globalDisc:V(),discountType:D,discountVal:A,customer:{...m},total:I(),subtotal:re(),itemCount:parseFloat(h.reduce((r,o)=>r+(parseFloat(o.qty)||0),0).toFixed(3))};T.unshift(a);const s=T.findIndex(r=>r.id===e);s!==-1?ut(s):(ze(),Me())},xt=e=>{document.getElementById("pos-recall-confirm-modal")?.remove();const t=T.findIndex(a=>a.id===e);t!==-1&&ut(t)},mt=e=>{const t=T.find(a=>a.id===e);t&&(document.getElementById("pos-delete-confirm-modal")?.remove(),document.body.insertAdjacentHTML("beforeend",`
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
    </div>`))},ht=e=>{document.getElementById("pos-delete-confirm-modal")?.remove();const t=T.find(a=>a.id===e);T=T.filter(a=>a.id!==e),ze(),k(`Antrean "${t?.note||""}" berhasil dihapus.`,"info"),$e(!0)},gt=()=>{const e=i("pos-mobile-cart-drawer"),t=i("pos-mobile-cart-sheet");e&&t&&(e.classList.remove("opacity-0","pointer-events-none"),e.classList.add("opacity-100"),t.classList.remove("translate-y-full"),t.classList.add("translate-y-0"),typeof window.pushModalHistory=="function"&&window.pushModalHistory("posCartDrawer"),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},ke=(e=!1)=>{const t=i("pos-mobile-cart-drawer"),a=i("pos-mobile-cart-sheet");if(t&&a){const s=()=>{a.classList.add("translate-y-full"),a.classList.remove("translate-y-0"),t.classList.add("opacity-0","pointer-events-none"),t.classList.remove("opacity-100")};!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("posCartDrawer",!1,s):s()}},Ra=e=>{if(!e)return"";if(e.img&&typeof e.img=="string")return Ye(e.img,"w150-rw");const t=(u?.products||[]).find(a=>a&&String(a.id)===String(e.id));return t&&t.img&&typeof t.img=="string"?Ye(t.img,"w150-rw"):""},F=()=>{try{if(!u?.products||!u.products.length)try{const n=JSON.parse(localStorage.getItem("freshmart_products")||"null");Array.isArray(n)&&n.length>0&&(u||(window.appData={}),u.products=n)}catch{}const e=Array.isArray(u?.products)?u.products:[],t=e.filter(n=>{if(!n||n.isActive==="false"||n.isActive===!1||ne&&n.category!==ne)return!1;if(J){const l=String(J).toLowerCase(),b=String(n.name||"").toLowerCase(),p=String(n.barcode||"").toLowerCase(),f=String(n.sku||"").toLowerCase();return b.includes(l)||p.includes(l)||f.includes(l)}return!0}),a=e.filter(n=>n&&n.isActive!=="false"&&n.isActive!==!1&&n.category).map(n=>String(n.category).trim()).filter(n=>n.length>0),r=["Semua",...new Set(a)].map(n=>{const l=n==="Semua",b=l?!ne:ne===n;return`<button onclick="window.posCatFilter('${d(l?"":n)}')" class="shrink-0 px-3.5 py-1.5 rounded-xl text-[11px] font-black uppercase tracking-wider border transition-all active:scale-95 shadow-2xs ${b?"text-white border-transparent":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/50"}" style="${b?"background:var(--color-primary)":""}">${d(n)}</button>`}).join(""),o=t.length===0?`<div class="col-span-full flex flex-col items-center justify-center py-20 text-slate-400 dark:text-slate-600">
                 <div class="w-16 h-16 rounded-3xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 mb-3 shadow-inner">
                   <i class="fa-solid fa-box-open text-2xl"></i>
                 </div>
                 <p class="font-bold text-sm text-slate-600 dark:text-slate-400">Produk Tidak Ditemukan</p>
                 <p class="text-xs text-slate-400 mt-0.5">Coba gunakan kata kunci pencarian atau kategori lain</p>
               </div>`:t.map(n=>{if(!n)return"";const l=!!(n.img&&typeof n.img=="string"&&n.img.trim()),b=l?Ye(n.img,"w300-rw"):"",p=Array.isArray(n.variants)&&n.variants.length>0,f=Array.isArray(n.wholesale)&&n.wholesale.length>0,y=h.filter(P=>P&&String(P.id)===String(n.id)),v=parseFloat(y.reduce((P,B)=>P+(B&&B.qty&&parseFloat(B.qty)||0),0).toFixed(3)),c=d(String(n.id!=null?n.id:"")),w=we(n),M=d(String(n.name||"Produk")),L=d(String(n.category||"")),Le=parseFloat(n.price)||0;return W==="list"?`
                    <div class="pos-list-item${v>0?" in-cart":""}${w.isOutOfStock?" opacity-75":""}" onclick="window.posAddToCart('${c}')">
                        <div class="pos-list-thumb">
                            ${l?`<img width="52" height="52" loading="lazy" decoding="async" src="${d(b)}" alt="${M}" onerror="this.onerror=null;this.style.display='none';this.nextElementSibling.style.display='flex';">
                                   <div class="pos-img-placeholder" style="display:none;width:100%;height:100%"><i class="fa-solid fa-box" style="font-size:16px;margin:0"></i></div>`:'<div class="pos-img-placeholder" style="width:100%;height:100%"><i class="fa-solid fa-box" style="font-size:16px;margin:0"></i></div>'}
                            ${v>0?`<div class="pos-qty-badge" style="top:2px;right:2px;min-width:18px;height:18px;font-size:9px;border-width:1.5px">${O(v)}</div>`:""}
                        </div>
                        <div style="flex:1;min-width:0">
                            <div style="display:flex;align-items:center;gap:4px;flex-wrap:wrap;margin-bottom:3px">
                                ${L?`<span style="font-size:9px;text-transform:uppercase;letter-spacing:0.06em;font-weight:700;color:#94a3b8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:80px">${L}</span>`:""}
                                ${p?'<span class="pos-badge pos-badge-varian"><i class="fa-solid fa-layer-group" style="font-size:6px"></i> VARIAN</span>':""}
                                ${f?'<span class="pos-badge pos-badge-grosir"><i class="fa-solid fa-tags" style="font-size:6px"></i> GROSIR</span>':""}
                                ${w.isOutOfStock?'<span class="pos-badge pos-badge-habis"><i class="fa-solid fa-ban" style="font-size:6px"></i> HABIS</span>':""}
                                ${w.isLowStock?`<span class="pos-badge pos-badge-low"><i class="fa-solid fa-triangle-exclamation" style="font-size:6px"></i> SISA ${O(w.totalStock)}</span>`:""}
                            </div>
                            <p class="text-xs font-bold text-slate-800 dark:text-slate-100 truncate" title="${M}">${M}</p>
                            <p style="font-size:12px;font-weight:900;color:var(--color-primary);margin-top:2px">${g(Le)}</p>
                        </div>
                        <button onclick="event.stopPropagation();window.posAddToCart('${c}')" class="pos-add-btn" title="Tambah ke keranjang">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>`:`
                <div class="pos-product-card${v>0?" in-cart":""}${w.isOutOfStock?" opacity-75":""}" onclick="window.posAddToCart('${c}')">
                    <!-- Kotak Gambar Rasio 1:1 Anti-Collapse (aspect-ratio 1:1 + min-height 120px) -->
                    <div class="pos-img-box">
                        <div class="pos-img-badges">
                            ${p?'<span class="pos-badge pos-badge-varian"><i class="fa-solid fa-layer-group" style="font-size:6px"></i> VARIAN</span>':""}
                            ${f?'<span class="pos-badge pos-badge-grosir"><i class="fa-solid fa-tags" style="font-size:6px"></i> GROSIR</span>':""}
                            ${w.isOutOfStock?'<span class="pos-badge pos-badge-habis"><i class="fa-solid fa-ban" style="font-size:6px"></i> HABIS</span>':""}
                            ${w.isLowStock?`<span class="pos-badge pos-badge-low"><i class="fa-solid fa-triangle-exclamation" style="font-size:6px"></i> SISA ${O(w.totalStock)}</span>`:""}
                        </div>
                        ${v>0?`<div class="pos-qty-badge">${O(v)}</div>`:""}
                        ${l?`<img width="300" height="300" loading="lazy" decoding="async" src="${d(b)}" alt="${M}"
                                 onerror="this.onerror=null;this.style.display='none';this.nextElementSibling.style.display='flex';">
                               <div class="pos-img-placeholder" style="display:none">
                                 <i class="fa-solid fa-box-open"></i>
                                 <span>${d(n.category||"Toko")}</span>
                               </div>`:`<div class="pos-img-placeholder">
                                 <i class="fa-solid fa-box-open"></i>
                                 <span>${d(n.category||"Produk")}</span>
                               </div>`}
                    </div>
                    <!-- Info Produk -->
                    <div class="pos-card-info">
                        ${L?`<p class="pos-card-cat">${L}</p>`:""}
                        <p class="pos-card-name" title="${M}">${M}</p>
                        <div class="pos-card-footer">
                            <span class="pos-card-price">${g(Le)}</span>
                            <button onclick="event.stopPropagation();window.posAddToCart('${c}')" class="pos-add-btn" title="Tambah ke keranjang">
                                <i class="fa-solid fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>`}).join("");document.querySelectorAll("#pos-cat-filter").forEach(n=>{n.innerHTML=r}),document.querySelectorAll("#pos-catalog-grid").forEach(n=>{n.className=W==="list"?"pos-catalog-list-mode":"pos-catalog-grid-mode",n.innerHTML=o})}catch(e){console.error("[POS] renderCatalog error:",e),document.querySelectorAll("#pos-catalog-grid").forEach(t=>{t.innerHTML=`
                <div class="col-span-full flex flex-col items-center justify-center py-16 text-slate-500">
                    <i class="fa-solid fa-triangle-exclamation text-amber-500 text-3xl mb-3"></i>
                    <p class="font-bold text-sm text-slate-700 dark:text-slate-300">Gagal Memuat Katalog Kasir</p>
                    <p class="text-xs text-slate-400 mt-1 mb-4">${d(e.message||"Terjadi kesalahan")}</p>
                    <button onclick="window.renderCatalog()" class="px-4 py-2 rounded-xl text-xs font-bold text-white shadow-md active:scale-95 cursor-pointer" style="background:var(--color-primary)">
                        <i class="fa-solid fa-arrows-rotate mr-1.5"></i> Coba Muat Ulang
                    </button>
                </div>`})}},$=()=>{const e=parseFloat(h.reduce((c,w)=>c+(parseFloat(w.qty)||0),0).toFixed(3)),t=re(),a=I(),s=g(a),r=g(t),o=h.length===0?`<div class="flex flex-col items-center justify-center h-full py-12 text-slate-300 dark:text-slate-600 select-none">
            <div class="w-16 h-16 rounded-3xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 mb-3 shadow-inner">
                <i class="fa-solid fa-cart-shopping text-2xl"></i>
            </div>
            <p class="text-sm font-bold text-slate-600 dark:text-slate-400">Keranjang Kasir Kosong</p>
            <p class="text-xs text-slate-400 mt-1 text-center max-w-[200px]">Pilih produk di katalog atau scan barcode untuk menambah</p>
           </div>`:h.map(c=>{const w=d(String(c.cartKey||c.id)),M=Ra(c),L=c.isVariant&&c.variantName?d(c.name.replace(` — ${c.variantName}`,"")):d(c.name);return`
            <div class="group flex items-start gap-2.5 p-2.5 bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 shadow-xs hover:border-[var(--color-primary)] transition-all">
                <!-- 42px Thumbnail -->
                <div class="w-11 h-11 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-700 shrink-0 border border-slate-200/60 dark:border-slate-700 flex items-center justify-center">
                    ${M?`<img width="44" height="44" loading="lazy" src="${d(M)}" alt="${d(c.name)}" onerror="this.onerror=null; this.style.display='none'; this.nextElementSibling.style.display='flex';" class="w-full h-full object-cover">
                           <div class="hidden w-full h-full items-center justify-center text-slate-400"><i class="fa-solid fa-box text-xs"></i></div>`:'<div class="w-full h-full flex items-center justify-center text-slate-400"><i class="fa-solid fa-box text-xs"></i></div>'}
                </div>
                <!-- Details -->
                <div class="flex-1 min-w-0 pr-1">
                    <p class="text-xs font-bold text-slate-800 dark:text-slate-100 truncate leading-snug" title="${d(c.name)}">${L}</p>
                    <div class="flex items-center gap-1.5 mt-0.5 flex-wrap">
                        ${c.isWholesale?'<span class="inline-flex items-center text-[8px] font-black px-1.5 py-0.5 rounded text-white shadow-2xs" style="background:var(--color-primary)">GROSIR</span>':""}
                        ${c.isVariant?`<span class="inline-flex items-center gap-1 text-[8px] font-black px-1.5 py-0.5 rounded text-white shadow-2xs" style="background:var(--color-primary);opacity:0.95"><i class="fa-solid fa-layer-group text-[7px]"></i>${d(c.variantName||"VARIAN")}</span>`:""}
                        <span class="text-[10px] text-slate-500 font-medium">
                            ${c.isWholesale&&c.basePrice?`<span class="line-through text-slate-400">${g(c.basePrice)}</span> <span class="font-bold" style="color:var(--color-primary)">${g(c.price)}</span>`:g(c.price)}
                        </span>
                    </div>
                    <div class="flex items-center gap-1.5 mt-1.5">
                        <span class="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Diskon:</span>
                        <input type="number" min="0" placeholder="0" value="${c.discount||""}" onchange="window.posSetItemDisc('${w}',this.value)"
                            class="w-16 text-[10px] font-mono font-bold border border-slate-200 dark:border-slate-700 rounded-md px-1.5 py-0.5 bg-slate-50 dark:bg-slate-700/60 text-right focus:outline-none focus:border-[var(--color-primary)] transition-all">
                    </div>
                </div>
                <!-- Stepper & Subtotal -->
                <div class="flex flex-col items-end shrink-0">
                    <div class="flex items-center gap-1">
                        <div class="flex items-center bg-slate-100 dark:bg-slate-700/80 rounded-lg p-0.5 border border-slate-200 dark:border-slate-600 focus-within:border-[var(--color-primary)] transition-colors">
                            <button onclick="window.posUpdateQty('${w}',-1)" class="w-5 h-5 rounded text-slate-600 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-600 font-black text-xs flex items-center justify-center cursor-pointer active:scale-90 transition-all">−</button>
                            <input type="number" step="any" min="0.01" value="${O(c.qty)}" onchange="window.posSetQty('${w}',this.value)"
                                class="w-11 text-center text-[11px] font-black bg-transparent text-slate-800 dark:text-slate-100 focus:outline-none px-0.5">
                            <button onclick="window.posUpdateQty('${w}',1)" class="w-5 h-5 rounded text-slate-600 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-600 font-black text-xs flex items-center justify-center cursor-pointer active:scale-90 transition-all">+</button>
                        </div>
                        <button onclick="window.posRemoveItem('${w}')" class="w-6 h-6 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 flex items-center justify-center text-xs transition-all cursor-pointer" title="Hapus item">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                    <p class="text-xs font-black mt-1.5" style="color:var(--color-primary)">${g(c.subtotal)}</p>
                </div>
            </div>`}).join("");document.querySelectorAll(".pos-cart-items-target").forEach(c=>c.innerHTML=o),document.querySelectorAll(".pos-subtotal-target").forEach(c=>c.textContent=r),document.querySelectorAll(".pos-total-target").forEach(c=>c.textContent=s),document.querySelectorAll(".pos-item-count-target").forEach(c=>c.textContent=O(e));const n=V(),l=g(n);document.querySelectorAll(".pos-disc-val-input").forEach(c=>{document.activeElement!==c&&(c.value=A||"")}),document.querySelectorAll(".pos-global-disc-target").forEach(c=>{document.activeElement!==c&&(c.value=A||"")}),document.querySelectorAll(".pos-disc-preview-target").forEach(c=>{n>0?(c.textContent=`- ${l}`,c.classList.remove("hidden"),c.classList.add("text-rose-500")):(c.textContent="",c.classList.add("hidden"))}),document.querySelectorAll(".pos-disc-type-rp").forEach(c=>{D==="rp"?(c.className="pos-disc-type-rp px-2.5 py-0.5 rounded-md transition-all cursor-pointer font-black text-white shadow-xs text-[10px]",c.style.background="var(--color-primary)",c.style.color="#ffffff"):(c.className="pos-disc-type-rp px-2.5 py-0.5 rounded-md transition-all cursor-pointer text-slate-600 dark:text-slate-300 hover:text-slate-900 font-bold text-[10px]",c.style.background="transparent",c.style.color="")}),document.querySelectorAll(".pos-disc-type-pct").forEach(c=>{D==="percent"?(c.className="pos-disc-type-pct px-2.5 py-0.5 rounded-md transition-all cursor-pointer font-black text-white shadow-xs text-[10px]",c.style.background="var(--color-primary)",c.style.color="#ffffff"):(c.className="pos-disc-type-pct px-2.5 py-0.5 rounded-md transition-all cursor-pointer text-slate-600 dark:text-slate-300 hover:text-slate-900 font-bold text-[10px]",c.style.background="transparent",c.style.color="")}),document.querySelectorAll(".pos-disc-prefix").forEach(c=>{c.textContent=D==="percent"?"%":"Rp",c.style.color="var(--color-primary)"});const b=[5,10,15,20,50],p=[2e3,5e3,1e4,25e3,5e4],f=(c,w)=>D===w&&Number(A)===Number(c),y=D==="percent"?`
        ${b.map(c=>{const w=f(c,"percent");return`<button onclick="window.posApplyQuickDiscount(${c},'percent')" 
                class="px-2.5 py-1 rounded-lg text-[10px] cursor-pointer transition-all active:scale-95 ${w?"text-white shadow-xs font-black":"bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700 font-bold"}"
                style="${w?"background:var(--color-primary);border:1px solid var(--color-primary);":""}">${c}%</button>`}).join("")}
        ${A>0?`<button onclick="window.posApplyQuickDiscount(0,'percent')" class="px-2.5 py-1 rounded-lg bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 text-[10px] font-bold text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800 cursor-pointer transition-all active:scale-95"><i class="fa-solid fa-rotate-left mr-1 text-[9px]"></i>Reset</button>`:""}
        `:`
        ${p.map(c=>{const w=f(c,"rp"),M=`${c/1e3}rb`;return`<button onclick="window.posApplyQuickDiscount(${c},'rp')" 
                class="px-2.5 py-1 rounded-lg text-[10px] cursor-pointer transition-all active:scale-95 ${w?"text-white shadow-xs font-black":"bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700 font-bold"}"
                style="${w?"background:var(--color-primary);border:1px solid var(--color-primary);":""}">${M}</button>`}).join("")}
        ${A>0?`<button onclick="window.posApplyQuickDiscount(0,'rp')" class="px-2.5 py-1 rounded-lg bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 text-[10px] font-bold text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800 cursor-pointer transition-all active:scale-95"><i class="fa-solid fa-rotate-left mr-1 text-[9px]"></i>Reset</button>`:""}
        `;document.querySelectorAll(".pos-disc-chips-target").forEach(c=>c.innerHTML=y),document.querySelectorAll(".pos-pay-btn-target").forEach(c=>{c.disabled=h.length===0;const w=c.querySelector(".btn-text");w&&(w.textContent=h.length>0?`BAYAR — ${s}`:"PROSES PEMBAYARAN")}),document.querySelectorAll(".pos-hold-btn-target").forEach(c=>{c.disabled=h.length===0,h.length===0?c.classList.add("opacity-40","cursor-not-allowed"):c.classList.remove("opacity-40","cursor-not-allowed")}),pe();const v=i("pos-mobile-floating-bar");v&&(h.length>0?(v.classList.remove("translate-y-32","opacity-0","pointer-events-none"),v.classList.add("translate-y-0","opacity-100")):(v.classList.add("translate-y-32","opacity-0","pointer-events-none"),v.classList.remove("translate-y-0","opacity-100"),ke(!0)))},la=()=>{if(h.length===0){k("Keranjang masih kosong!","warning");return}typeof window.pushModalHistory=="function"&&window.pushModalHistory("posPayment"),m={name:"",phone:"",isMember:!1,memberId:null,isNewTempo:!1},H="cash",_=I(),oe(),Ae(),document.body.insertAdjacentHTML("beforeend",`
    <div id="pos-pay-modal" class="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4" style="background:rgba(15,23,42,0.65);backdrop-filter:blur(4px)">
      <div class="bg-white dark:bg-slate-900 rounded-t-3xl sm:rounded-3xl shadow-2xl w-full sm:max-w-md max-h-[94vh] flex flex-col overflow-hidden border border-slate-200/80 dark:border-slate-800">
        <!-- Header -->
        <div class="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0 bg-slate-50/60 dark:bg-slate-800/40">
          <div>
            <h2 class="font-black text-base text-slate-900 dark:text-white flex items-center gap-2">
              <i class="fa-solid fa-cash-register" style="color:var(--color-primary)"></i>
              <span>Proses Pembayaran Kasir</span>
            </h2>
            <p class="text-xs text-slate-500 mt-0.5">Total Tagihan: <span class="font-black text-sm" style="color:var(--color-primary)">${g(I())}</span></p>
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
    </div>`),et("cash")},wt=(e=!1)=>{const t=i("pos-pay-modal");t&&(!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("posPayment",!1,()=>t.remove()):t.remove())},da=(e,t,a)=>{a.forEach(s=>{const r=i(`${e}-${s}`);r&&(s===t?(r.style.background="var(--color-primary)",r.style.color="white",r.style.borderColor="var(--color-primary)",r.classList.add("shadow-xs")):(r.style.removeProperty("background"),r.style.removeProperty("color"),r.style.removeProperty("border-color"),r.classList.remove("shadow-xs")))})},et=e=>{const t=i("pos-pay-detail");if(!t)return;const a=I(),s=`
      <div class="flex justify-between items-center py-2 px-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-700/60 mb-2.5 text-xs">
        <span class="text-slate-500 font-medium">Total yang Harus Dibayar</span>
        <span class="font-black text-sm" style="color:var(--color-primary)">${g(a)}</span>
      </div>`;if(e==="cash"){const o=[{label:"Uang Pas",val:a,isPas:!0},{label:"10.000",val:1e4},{label:"20.000",val:2e4},{label:"50.000",val:5e4},{label:"100.000",val:1e5},{label:"200.000",val:2e5},{label:"500.000",val:5e5}].map(n=>`
            <button onclick="window.posSetQuickCash(${n.val})" type="button"
                class="px-2.5 py-1.5 rounded-xl text-[11px] font-black border transition-all active:scale-95 ${n.isPas?"text-white border-transparent shadow-xs":"bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]"}"
                style="${n.isPas?"background:var(--color-primary)":""}">
                ${n.isPas?"💵 Uang Pas":`Rp ${n.label}`}
            </button>
        `).join("");t.innerHTML=`
            ${s}
            <div class="space-y-2">
                <label class="text-[10px] font-black uppercase tracking-wider text-slate-400">Nominal Uang Diterima (Rp)</label>
                <div class="relative">
                    <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-black text-slate-400">Rp</span>
                    <input id="pos-paid-input" type="number" min="0" placeholder="${a}" value="${_||""}"
                        class="w-full border-2 rounded-2xl pl-10 pr-4 py-2.5 text-base sm:text-lg font-black bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none text-right transition-all"
                        style="border-color:var(--color-primary)" oninput="window.updatePosChange(this.value)">
                </div>

                <!-- Quick Cash Buttons Grid -->
                <div class="pt-1">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Pilihan Uang Cepat (1-Klik)</p>
                    <div class="grid grid-cols-3 sm:grid-cols-4 gap-1.5">
                        ${o}
                    </div>
                </div>

                <!-- Kembalian Box -->
                <div id="pos-change-box" class="mt-2.5 p-3 rounded-2xl border transition-all flex items-center justify-between ${_>=a?"bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800":"bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800"}">
                    <div>
                        <p class="text-[9px] font-black uppercase tracking-wider text-slate-400">Status Kembalian</p>
                        <p id="pos-change-label" class="text-xs font-bold ${_>=a?"text-emerald-700 dark:text-emerald-400":"text-rose-700 dark:text-rose-400"}">
                            ${_>=a?"Kembalian Uang Pembeli:":"Uang Masih Kurang:"}
                        </p>
                    </div>
                    <span id="pos-change-display" class="text-base font-black ${_>=a?"text-emerald-700 dark:text-emerald-400":"text-rose-600 dark:text-rose-400"}">
                        ${g(Math.abs(Zt()))}
                    </span>
                </div>
            </div>
        `}else if(e==="qris"){const r=u.payment?.qrisUrl||"";t.innerHTML=`
          ${s}
          ${r?`<div class="flex flex-col items-center justify-center p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700"><img src="${d(r)}" class="w-48 h-48 object-contain rounded-xl shadow-xs" alt="QRIS"><p class="text-center text-xs font-bold text-slate-600 dark:text-slate-300 mt-2">Arahkan kamera pembeli untuk memindai QRIS</p></div>`:'<div class="p-4 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 text-xs rounded-2xl border border-amber-200 text-center font-bold"><i class="fa-solid fa-triangle-exclamation mr-1.5"></i>QRIS toko belum diatur di menu Pengaturan.</div>'}`}else if(e==="transfer"){const o=(Array.isArray(u.banks)?u.banks:[]).filter(l=>l&&(l.bankName||l.name||l.bank));let n='<option value="">Rekening bank belum diatur di CMS Admin</option>';o.length>0&&(n=o.map(l=>{const b=l.bankName||l.name||l.bank||"Bank",p=l.bankAccount||l.number||l.noRekening||l.account||"",f=l.bankOwner||l.holder||l.atasNama||l.owner||"",y=`${b}${p?" — "+p:""}${f?" a/n "+f:""}`;return`<option value="${d(y)}">${d(y)}</option>`}).join("")),t.innerHTML=`
          ${s}
          <div class="space-y-2">
            <label class="text-[10px] font-black uppercase tracking-wider text-slate-400 block">Rekening Tujuan Toko</label>
            <div class="relative">
              <select id="pos-bank-sel" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)] transition-all">
                ${n}
              </select>
            </div>
            ${o.length>0?`
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
          <input id="pos-dp-input" type="number" min="0" placeholder="0" value="0" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-black text-right bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)]">`)},ca=e=>{m.isMember=e==="member",m.isNewTempo=e==="tempo",da("pos-ctype",e,["umum","member","tempo"]);const t=i("pos-customer-fields");t&&(e==="umum"?(m.name="",m.phone="",m.memberId=null,m.points=0,t.innerHTML='<input id="pos-cust-name" type="text" placeholder="Nama pembeli (opsional)" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)] focus:bg-white">'):e==="member"?(t.innerHTML=`
          <div class="space-y-2">
            <div class="flex gap-2">
              <div class="relative flex-1">
                <i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
                <input id="pos-cust-phone" type="text" placeholder="Ketik No. HP / Nama / ID Member..."
                  value="${m.isMember?d(m.phone||m.name||""):""}"
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
          </div>`,oe().then(()=>{i("pos-cust-phone")?.value?.trim()&&Oe()})):e==="tempo"&&(m.isMember=!1,kt("tempo"),t.innerHTML=`
          <div class="space-y-2">
            <input id="pos-cust-name" type="text" placeholder="Nama Pelanggan / Rekanan *" required class="w-full border border-amber-300 dark:border-amber-600 rounded-xl px-3 py-2 text-xs bg-amber-50/40 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none">
            <input id="pos-cust-phone" type="tel" placeholder="No. WhatsApp Pelanggan *" required class="w-full border border-amber-300 dark:border-amber-600 rounded-xl px-3 py-2 text-xs bg-amber-50/40 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none">
          </div>`))},kt=e=>{H=e,da("pos-pay",e,["cash","qris","transfer","tempo"]),et(e),e==="transfer"&&(!u.banks||!u.banks.length)&&Ae().then(t=>{H==="transfer"&&t&&t.length>0&&et("transfer")})},vt=e=>{_=de(e);const t=I(),a=_-t,s=i("pos-change-display"),r=i("pos-change-label"),o=i("pos-change-box"),n=i("pos-process-btn");s&&(s.textContent=g(Math.abs(a))),r&&(r.textContent=a>=0?"Kembalian Uang Pembeli:":"Uang Masih Kurang:"),s&&(s.className=`text-base font-black ${a>=0?"text-emerald-700 dark:text-emerald-400":"text-rose-600 dark:text-rose-400"}`),o&&(o.className=`mt-2.5 p-3 rounded-2xl border transition-all flex items-center justify-between ${a>=0?"bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800":"bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800"}`),n&&H==="cash"&&(n.disabled=a<0,n.classList.toggle("opacity-50",a<0))},yt=e=>{const t=i("pos-paid-input");t&&(t.value=e,vt(e),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},Ae=async()=>{if(Array.isArray(u.banks)&&u.banks.length>0)return u.banks;try{const e=await S.collection("freshmart").doc("cms_data").get();if(e.exists){const t=e.data();if(Array.isArray(t?.banks)&&t.banks.length>0)return u.banks=t.banks,u.banks}}catch{}return u.banks||[]},oe=async()=>{if(u.customers&&u.customers.length>0)return u.customers;try{const e=await S.collection("freshmart").doc("cms_data").collection("customers").get();return u.customers=e.docs.map(t=>({...t.data(),id:t.id,_docId:t.id})),u.customers}catch{return u.customers||[]}},pa=(e,t)=>{if(!e||!t||!t.length)return[];const a=e.trim().toLowerCase(),s=a.replace(/\D/g,"");let r=s;r.startsWith("62")?r=r.slice(2):r.startsWith("0")&&(r=r.slice(1));const o=[],n=new Set;return t.forEach(l=>{if(!l)return;const b=String(l.id||l._docId||l.phone||"");if(n.has(b))return;const p=String(l.phone||"").replace(/\D/g,"");let f=p;f.startsWith("62")?f=f.slice(2):f.startsWith("0")&&(f=f.slice(1));const y=String(l.name||"").toLowerCase();let v=!1;r.length>=4&&f&&(f===r||f.endsWith(r)||r.endsWith(f)||p.includes(s))&&(v=!0),!v&&(b.toLowerCase()===a||b===s)&&(v=!0),!v&&a.length>=2&&y.includes(a)&&(v=!0),v&&(n.add(b),o.push(l))}),o},_a=async e=>{if(!e)return null;const t=e.trim(),a=t.replace(/\D/g,"");let s=a;s.startsWith("62")?s=s.slice(2):s.startsWith("0")&&(s=s.slice(1));const r=S.collection("freshmart").doc("cms_data").collection("customers"),n=Array.from(new Set([s?"62"+s:null,s?"0"+s:null,s||null,s?"+62"+s:null,a||null,t].filter(Boolean))).map(async p=>{try{const f=await r.doc(p).get();if(f&&f.exists)return{...f.data(),id:f.id,_docId:f.id}}catch{}return null}),b=(await Promise.all(n)).find(Boolean);if(b){u.customers||(u.customers=[]);const p=u.customers.findIndex(f=>String(f.id||f.phone)===String(b.id||b.phone));return p>-1?u.customers[p]=b:u.customers.push(b),b}try{const p=await r.limit(300).get();if(!p.empty){u.customers=p.docs.map(y=>({...y.data(),id:y.id,_docId:y.id}));const f=pa(e,u.customers);if(f.length>0)return f[0]}}catch{}return null},Ne=e=>{m.isMember=!0,m.name=e.name||"Member Toko",m.phone=e.phone||"",m.memberId=e.id||e._docId||e.phone,m.points=parseFloat(e.points)||0;const t=i("pos-cust-phone");t&&(t.value=e.phone||e.name||"");const a=m.points,s=typeof window.getMemberTier=="function"?window.getMemberTier(a):{badge:"MEMBER RESMI"},r=i("pos-member-result");r&&(r.innerHTML=`
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
        </div>`),k(`Member terdeteksi: ${e.name} (${a} Poin)`,"success")},St=e=>{const a=(u.customers||[]).find(s=>s&&String(s.id||s._docId||s.phone)===String(e));a&&Ne(a)},Pt=()=>{m.isMember=!1,m.name="",m.phone="",m.memberId=null,m.points=0;const e=i("pos-cust-phone");e&&(e.value="",e.focus());const t=i("pos-member-result");t&&(t.innerHTML="")};let Ft=null;const Tt=()=>{clearTimeout(Ft);const e=i("pos-cust-phone")?.value?.trim()||"";if(!e){if(!m.memberId){const s=i("pos-member-result");s&&(s.innerHTML="")}return}const t=e.replace(/\D/g,"");!(Array.isArray(u.customers)&&u.customers.length>0)&&t.length<10&&e.length<8||(Ft=setTimeout(()=>{Oe()},350))},Oe=async()=>{const t=i("pos-cust-phone")?.value?.trim()||"";if(!t){k("Masukkan nomor HP atau nama member","warning");return}const a=i("pos-member-result"),s=i("pos-member-lookup-btn");s&&(s.disabled=!0,s.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i>'),a&&(a.innerHTML='<div class="p-2.5 text-center text-xs text-slate-400"><i class="fa-solid fa-spinner fa-spin mr-1.5"></i>Memeriksa database member...</div>');try{await oe();const r=pa(t,u.customers||[]);if(r.length===1)Ne(r[0]);else if(r.length>1)a.innerHTML=`
              <div class="space-y-1.5 max-h-44 overflow-y-auto pr-1">
                <p class="text-[10px] font-bold text-slate-500 mb-1">Ditemukan ${r.length} member (klik untuk memilih):</p>
                ${r.map(o=>`
                  <button onclick="window.selectPosMember('${d(o.id||o._docId||o.phone)}')" type="button"
                    class="w-full text-left p-2 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 border border-slate-200 dark:border-slate-700 hover:border-emerald-400 transition-all flex items-center justify-between gap-2 cursor-pointer">
                    <div class="min-w-0">
                      <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${d(o.name||"Member")}</p>
                      <p class="text-[10px] text-slate-500 dark:text-slate-400 font-mono">${d(o.phone||"")}</p>
                    </div>
                    <span class="text-[10px] font-black text-amber-500 shrink-0"><i class="fa-solid fa-star text-[9px]"></i> ${parseFloat(o.points)||0} Poin</span>
                  </button>
                `).join("")}
              </div>
            `;else{const o=await _a(t);if(o)Ne(o);else{m.isMember=!1,m.name="",m.memberId=null,m.points=0;const l=t.replace(/\D/g,"").length>=8;a.innerHTML=`
                  <div class="p-3 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs space-y-1">
                    <p class="font-bold flex items-center gap-1.5"><i class="fa-solid fa-circle-info"></i> Member Tidak Ditemukan</p>
                    <p class="text-[11px] text-amber-700 dark:text-amber-400">Tidak ada member ditemukan untuk "<b>${d(t)}</b>".</p>
                    ${l?"":`
                      <p class="text-[10px] text-amber-600/90 dark:text-amber-400/80 pt-1 border-t border-amber-200 dark:border-amber-800/60">
                        <i class="fa-solid fa-lightbulb mr-1 text-amber-500"></i><b>Tips Kasir:</b> Masukkan nomor WhatsApp/HP member (contoh: <code>0812...</code>) untuk verifikasi instan.
                      </p>
                    `}
                  </div>`}}}catch(r){console.error("[POS] Error lookupPosMember:",r),a&&(a.innerHTML=`<p class="text-xs text-rose-500 p-2">Gagal memeriksa data: ${d(r.message||"Koneksi error")}</p>`)}finally{s&&(s.disabled=!1,s.innerHTML='<i class="fa-solid fa-magnifying-glass mr-1.5"></i><span>Cek</span>')}},ba=async()=>{if(h.length===0){k("Keranjang kosong!","warning");return}const e=m.isMember?m.name||"Member Toko":i("pos-cust-name")?.value?.trim()||"Pelanggan Umum",t=m.isMember?m.phone||i("pos-cust-phone")?.value?.trim()||"":i("pos-cust-phone")?.value?.trim()||"";if(m.isNewTempo&&!t){k("No. HP wajib diisi untuk tempo!","warning");return}if(H==="cash"&&(_=de(i("pos-paid-input")?.value||0),_<I())){k(`Uang kurang! Minimal ${g(I())}`,"warning");return}m.name=e,m.phone=t;const a=H==="tempo"?de(i("pos-dp-input")?.value||0):0,s=H==="transfer"&&i("pos-bank-sel")?.value||"",r=i("pos-process-btn");r&&(r.disabled=!0,r.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i>Memproses...');const o=u.store?.useStock===!0||u.store?.useStock==="true";if(o)for(const n of h){const l=(u.products||[]).find(p=>String(p.id)===String(n.id));if(!l)continue;const b=parseFloat(n.qty)||0;if(n.variantName&&l.variants){const p=(l.variants||[]).find(y=>y.name===n.variantName),f=parseFloat(p&&p.stock!==void 0?p.stock:0);if(f<b){k(`Stok ${n.name} (${n.variantName}) tidak cukup! Sisa: ${f}`,"warning"),r&&(r.disabled=!1,r.innerHTML='<i class="fa-solid fa-check-circle mr-2"></i>Selesaikan Transaksi');return}}else{const p=parseFloat(l.stock!==void 0?l.stock:0);if(p<b){k(`Stok ${n.name} tidak cukup! Sisa: ${p}`,"warning"),r&&(r.disabled=!1,r.innerHTML='<i class="fa-solid fa-check-circle mr-2"></i>Selesaikan Transaksi');return}}}try{const n=Na(),l=typeof window.getCashierSession=="function"?window.getCashierSession():null,b=l?.name||u.store?.name||"Kasir",p=l?.uid||window.__currentAdminUid||"admin",f=new Date().toISOString(),y=Je.firestore.FieldValue.serverTimestamp(),v=H==="tempo"?"Diproses":"Selesai",c=N(),w=c&&c.status==="open"?c.id:null,M=c&&c.status==="open"?c.shiftNo||c.id:null,L={orderId:n,txId:n,source:"pos",channel:"pos",status:v,timestamp:y,dateString:f,dateMs:Date.now(),shiftId:w,shiftNo:M,cashier:p,cashierName:b,customer:{name:e,phone:t,wa:t,address:"Beli Langsung di Kasir (POS)",deliveryMethod:"takeaway",isMember:!!m.isMember,memberId:m.memberId||null},customerName:e,customerPhone:t,customerType:m.isMember?"Member":"Pelanggan Umum",items:h.map(P=>({id:P.id,name:P.name,price:parseFloat(P.price)||0,basePrice:parseFloat(P.basePrice||P.price)||0,qty:parseFloat(P.qty)||1,discount:parseFloat(P.discount)||0,subtotal:parseFloat(P.subtotal)||0,variantName:P.variantName||"",isVariant:!!P.isVariant,isWholesale:!!P.isWholesale,effectivePrice:parseFloat(P.price)||0})),payment:{method:H,subtotal:re(),productDiscount:de(q),shippingCost:0,grandTotal:I(),paid:H==="cash"?_:H==="tempo"?a:I(),change:H==="cash"?Zt():0,bank:s,paymentStatus:H==="tempo"?"hutang":"lunas",tempoDp:a,tempoBalance:H==="tempo"?I()-a:0,tempoDueDate:Date.now()+30*24*60*60*1e3,tempoPenaltyRate:1,tempoPenaltyStopped:!1},subtotal:re(),globalDiscount:V(),discountType:D,discountVal:A,total:I(),isTempo:H==="tempo",pointsEarned:0,notes:""};if(m.isMember&&t){const B=(typeof window.calculateCartPoints=="function"?window.calculateCartPoints(h,u.store):{totalPoints:0}).totalPoints||0;if(B>0){L.pointsEarned=B;try{const z=t.replace(/\D/g,""),C=String(m.memberId||z);if(await S.collection("freshmart").doc("cms_data").collection("customers").doc(C).set({points:Je.firestore.FieldValue.increment(B),lastOrderAt:f},{merge:!0}),u.customers){const Q=u.customers.find(j=>j&&(String(j.id)===C||String(j.phone).replace(/\D/g,"")===z));Q&&(Q.points=(parseFloat(Q.points)||0)+B)}}catch(z){console.warn("[POS] Gagal update poin member:",z)}}}if(await S.collection("freshmart_orders").doc(n).set(L),Gt(L),o){const P=[];for(const B of h){const z=String(B.id),C=(u.products||[]).find(j=>String(j.id)===z);if(!C)continue;const ve=parseFloat(B.qty)||0,Q={};if(B.variantName&&C.variants){const j=C.variants.findIndex(ka=>ka.name===B.variantName);j>-1&&(C.variants[j].stock=Math.max(0,(parseFloat(C.variants[j].stock)||0)-ve),C.variants[j].stock===0&&(C.variants[j].isActive=!1),C.variants[j].totalSold=(parseFloat(C.variants[j].totalSold)||0)+ve,Q.variants=C.variants)}else C.stock=Math.max(0,(parseFloat(C.stock)||0)-ve),Q.stock=C.stock,C.stock===0&&(C.isActive="false",Q.isActive="false"),C.totalSold=(parseFloat(C.totalSold)||0)+ve,Q.totalSold=C.totalSold;try{await S.collection("freshmart").doc("cms_data").collection("products").doc(z).update(Q),P.push(z)}catch(j){console.warn("[POS] Gagal update stok produk di Firestore:",z,j)}}if(P.length>0)try{await S.collection("freshmart").doc("cms_data").update({lastUpdate:Je.firestore.FieldValue.increment(1),updateType:"stock_change",updatedProductIds:P})}catch{}}wt(),ke(!0);const Le={...L};h=[],q=0,A=0,D="rp",$(),F(),Ea(Le)}catch(n){console.error("[POS] Error:",n),k("Gagal menyimpan transaksi. Coba lagi.","error"),r&&(r.disabled=!1,r.innerHTML='<i class="fa-solid fa-check-circle mr-2"></i>Selesaikan Transaksi')}},Ea=e=>{const t=e.payment.method==="cash"?`<p class="text-sm text-slate-500">Kembalian: <span class="font-black text-emerald-600">${g(e.payment.change)}</span></p>`:e.payment.method==="tempo"?'<p class="text-sm text-amber-600 font-semibold">⚠️ Dicatat sebagai Piutang Tempo</p>':`<p class="text-sm text-slate-500">Metode: ${e.payment.method.toUpperCase()}</p>`,a=JSON.stringify(e).replace(/"/g,"&quot;"),s=!!document.getElementById("pos-admin-container")||typeof window.cTab=="function"&&window.cTab()==="pos";document.body.insertAdjacentHTML("beforeend",`
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
    </div>`)},ua=e=>{document.getElementById("pos-success-modal")?.remove();const t=typeof te=="function"?te():{paperSize:"58mm"},a=t.paperSize==="80mm",s=t.headerText||u.store?.name||"TOKO PUTRI",r=u.store?.wa||"",o=u.store?.address||"",n=t.footerText||"Terima Kasih Atas Kunjungan Anda!",l=new Date(e.dateMs||Date.now()).toLocaleString("id-ID"),b=(e.items||[]).map(y=>`<tr><td style="padding:2px 0;word-wrap:break-word">${d(y.name)}</td><td style="text-align:right;padding:2px 4px;white-space:nowrap">${O(y.qty)}x ${g(y.price)}</td><td style="text-align:right;padding:2px 0;white-space:nowrap;font-weight:bold">${g(y.subtotal)}</td></tr>`).join(""),p=e.discountType==="percent"&&e.discountVal?`Diskon (${e.discountVal}%)`:"Diskon",f=window.open("","_blank",`width=${a?460:360},height=720`);if(!f){document.getElementById("pos-receipt-fallback-modal")?.remove(),document.body.insertAdjacentHTML("beforeend",`
        <div id="pos-receipt-fallback-modal" class="fixed inset-0 z-[10000] flex items-center justify-center p-3 sm:p-4" style="background:rgba(15,23,42,0.7);backdrop-filter:blur(4px)">
            <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full ${a?"max-w-md":"max-w-sm"} border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[90vh]">
                <div class="p-3.5 sm:p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50">
                    <span class="font-bold text-xs text-slate-700 dark:text-slate-200 flex items-center gap-1.5"><i class="fa-solid fa-receipt text-amber-500"></i>Struk Thermal POS (${a?"80mm":"58mm"})</span>
                    <button onclick="document.getElementById('pos-receipt-fallback-modal')?.remove()" class="w-7 h-7 rounded-lg bg-slate-200/60 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 text-sm leading-none flex items-center justify-center cursor-pointer">×</button>
                </div>
                <div id="pos-receipt-paper-box" class="p-4 overflow-y-auto flex-1 font-mono text-[11px] bg-slate-50/60 dark:bg-slate-950 text-slate-800 dark:text-slate-200 space-y-2 select-text">
                    <div class="text-center font-bold text-sm uppercase">${d(s)}</div>
                    ${o?`<div class="text-center text-[10px] text-slate-500">${d(o)}</div>`:""}
                    ${r?`<div class="text-center text-[10px] text-slate-500">WA: ${d(r)}</div>`:""}
                    <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                    <div>No : <b>#${d(e.txId)}</b></div>
                    <div>Tgl: ${d(l)}</div>
                    <div>Kasir: ${d(e.cashierName||"Kasir")}</div>
                    <div>Plg : ${d(e.customer?.name||"Umum")}</div>
                    ${e.customer?.phone?`<div>HP  : ${d(e.customer.phone)}</div>`:""}
                    <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                    <table class="w-full text-[11px]">
                        ${b}
                    </table>
                    <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                    <div class="flex justify-between"><span>Subtotal</span><span>${g(e.subtotal)}</span></div>
                    ${(e.globalDiscount||0)>0?`<div class="flex justify-between text-rose-500 font-bold"><span>${p}</span><span>- ${g(e.globalDiscount)}</span></div>`:""}
                    <div class="flex justify-between font-black text-sm pt-1 border-t border-slate-200 dark:border-slate-700"><span>TOTAL</span><span style="color:var(--color-primary)">${g(e.total)}</span></div>
                    ${e.payment.method==="cash"?`<div class="flex justify-between"><span>Bayar</span><span>${g(e.payment.paid)}</span></div><div class="flex justify-between font-bold text-emerald-600"><span>Kembalian</span><span>${g(e.payment.change)}</span></div>`:""}
                    ${e.payment.method==="tempo"?`<div class="flex justify-between"><span>DP</span><span>${g(e.payment.dp||0)}</span></div><div class="flex justify-between font-bold text-amber-600"><span>Sisa Piutang</span><span>${g(e.payment.tempoBalance||0)}</span></div>`:""}
                    <div class="flex justify-between"><span>Metode</span><span>${d(e.payment.method.toUpperCase())}</span></div>
                    ${e.pointsEarned>0?`
                    <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                    <div class="flex justify-between text-amber-600 dark:text-amber-400 font-bold"><span>Poin Member:</span><span>+${e.pointsEarned} Poin</span></div>`:""}
                    <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                    <div class="text-center text-[10px] text-slate-400 my-1">${d(n)}</div>
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
        </div>`);return}f.document.write(`<!DOCTYPE html><html><head><meta charset="utf-8"><title>Struk POS</title>
    <style>*{box-sizing:border-box}body{font-family:'Courier New',monospace;font-size:12px;max-width:${a?"330px":"260px"};margin:0 auto;padding:12px}
    h2{text-align:center;font-size:14px;font-weight:900;margin:2px 0;text-transform:uppercase}p{margin:1px 0;text-align:center;font-size:11px}.left{text-align:left}
    table{width:100%;border-collapse:collapse}.line{border-top:1px dashed #333;margin:6px 0}.total{font-weight:900;font-size:13px}
    </style></head><body>
    <h2>${s}</h2>${o?`<p>${d(o)}</p>`:""}${r?`<p>WA: ${d(r)}</p>`:""}
    <div class="line"></div>
    <p class="left">No: <b>#${d(e.txId)}</b></p><p class="left">Tgl: ${d(l)}</p>
    <p class="left">Kasir: ${d(e.cashierName||"Kasir")}</p><p class="left">Pelanggan: ${d(e.customer?.name||"Umum")}</p>
    ${e.customer?.phone?`<p class="left">HP: ${d(e.customer.phone)}</p>`:""}
    <div class="line"></div><table>${b}</table><div class="line"></div>
    <table>
    <tr><td>Subtotal</td><td style="text-align:right">${g(e.subtotal)}</td></tr>
    ${(e.globalDiscount||0)>0?`<tr><td>${p}</td><td style="text-align:right">- ${g(e.globalDiscount)}</td></tr>`:""}
    <tr class="total"><td>TOTAL</td><td style="text-align:right">${g(e.total)}</td></tr>
    ${e.payment.method==="cash"?`<tr><td>Bayar</td><td style="text-align:right">${g(e.payment.paid)}</td></tr><tr><td><b>Kembalian</b></td><td style="text-align:right"><b>${g(e.payment.change)}</b></td></tr>`:""}
    ${e.payment.method==="tempo"?`<tr><td>DP</td><td style="text-align:right">${g(e.payment.dp||0)}</td></tr><tr><td>Sisa Piutang</td><td style="text-align:right">${g(e.payment.tempoBalance||0)}</td></tr>`:""}
    <tr><td>Metode</td><td style="text-align:right">${d(e.payment.method.toUpperCase())}</td></tr>
    ${e.pointsEarned>0?`<tr><td>Poin Member</td><td style="text-align:right">+${e.pointsEarned}</td></tr>`:""}
    </table><div class="line"></div>
    <p style="text-align:center;font-size:10px">${d(n)}</p>
    <p style="text-align:center;font-size:9px">Barang yang sudah dibeli tidak dapat ditukar/dikembalikan</p>
    <script>window.onload=()=>{window.print();setTimeout(()=>window.close(),800)}<\/script>
    </body></html>`),f.document.close()},Ct=()=>{const e=typeof te=="function"?te():{deviceType:"system"},t=i("pos-receipt-paper-box");if(t)if(e.deviceType==="rawbt"&&window.AndroidNativeApp&&typeof window.AndroidNativeApp.printRawBT=="function"){const a=t.innerText,s=btoa(unescape(encodeURIComponent(a)));window.AndroidNativeApp.printRawBT(s)}else window.AndroidNativeApp&&typeof window.AndroidNativeApp.print=="function"?window.AndroidNativeApp.print():window.print()},fa=({isStorefront:e})=>{const a=(typeof window.getCashierSession=="function"?window.getCashierSession():null)?.name||(e?"Kasir":"Admin Seller"),s=d(u.store?.name||"Toko Putri");return`
    <div class="flex flex-col h-full w-full overflow-hidden bg-slate-50/50 dark:bg-slate-900/40 relative">
        ${e?`
        <!-- STOREFRONT POS HEADER (52px with safe-area) -->
        <header class="min-h-[52px] pt-[env(safe-area-inset-top,0px)] shrink-0 text-white flex items-center justify-between px-3 sm:px-4 z-30 shadow-md" style="background:var(--color-primary)">
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
                            <button id="pos-view-btn-grid" onclick="window.setPOSViewMode('grid')" class="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer ${W==="grid"?"text-white shadow-xs":"text-slate-500 hover:text-slate-800 dark:text-slate-400"}" style="${W==="grid"?"background:var(--color-primary)":""}" title="Tampilan Grid Foto">
                                <i class="fa-solid fa-grip"></i>
                            </button>
                            <button id="pos-view-btn-list" onclick="window.setPOSViewMode('list')" class="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer ${W==="list"?"text-white shadow-xs":"text-slate-500 hover:text-slate-800 dark:text-slate-400"}" style="${W==="list"?"background:var(--color-primary)":""}" title="Tampilan List Baris Kompak">
                                <i class="fa-solid fa-list-ul"></i>
                            </button>
                        </div>
                    </div>
                    <!-- Kategori Chips -->
                    <div id="pos-cat-filter" class="flex gap-1.5 overflow-x-auto hide-scrollbar pb-0.5"></div>
                </div>

                <!-- Product Catalog Container -->
                <div id="pos-catalog-grid" class="${W==="list"?"pos-catalog-list-mode":"pos-catalog-grid-mode"}"></div>
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
                        <p class="pos-total-target text-sm font-black" style="color:var(--color-primary-light,#34d399)">Rp 0</p>
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
                <!-- Header -->
                <div class="px-3.5 sm:px-4 py-2.5 sm:py-3 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0 bg-slate-50/80 dark:bg-slate-800/50">
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
    `},xa=()=>{try{J="",ne="",h=[],q=0;const e=i("view-pos-cashier");if(!e)return;const t=i("admin-content"),a=i("view-admin");t&&a?.classList.contains("admin-pos-mode")&&(t.innerHTML="",a.classList.remove("admin-pos-mode")),e.innerHTML=fa({isStorefront:!0}),F(),$(),pe(),Te(),ta(),Xt(),oe(),ha(),typeof Z=="function"?Z().then(s=>{(!s||s.status!=="open")&&R()}).catch(()=>{se()||R()}):setTimeout(()=>{se()||R()},350)}catch(e){console.error("Gagal render POS Storefront:",e)}},ma=()=>{try{J="",ne="";const e=i("view-admin");e&&e.classList.add("admin-pos-mode");const t=i("view-pos-cashier");if(t&&(t.innerHTML=""),!i("admin-content"))return;Pa("admin-content",`
            <div class="h-full w-full flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-md bg-white dark:bg-slate-900 min-h-0">
                ${fa({isStorefront:!1})}
            </div>
        `),F(),$(),pe(),Te(),ta(),Xt(),oe(),ha(),typeof Z=="function"?Z().then(s=>{(!s||s.status!=="open")&&R()}).catch(()=>{se()||R()}):setTimeout(()=>{se()||R()},350)}catch(e){console.error("Gagal render POS Admin:",e);const t=i("admin-content");t&&(t.innerHTML=`
                <div class="h-full w-full flex flex-col items-center justify-center p-6 text-center">
                    <i class="fa-solid fa-triangle-exclamation text-4xl text-amber-500 mb-3"></i>
                    <h3 class="text-base font-bold text-slate-800 dark:text-white">Gagal Membuka Terminal POS</h3>
                    <p class="text-xs text-slate-500 mt-1 max-w-sm">Terjadi kendala saat memuat terminal. Silakan coba muat ulang.</p>
                    <button onclick="window.renderPOS()" class="mt-4 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-xs font-bold transition-all shadow-md">
                        <i class="fa-solid fa-arrows-rotate mr-1.5"></i>Muat Ulang Terminal
                    </button>
                </div>
            `)}},ha=()=>{window.setPOSViewMode=ct,window.posAddToCart=Ve,window.posAddToCartQty=aa,window.addToCartPOSWithVariant=sa,window.posUpdateQty=ra,window.posSetQty=oa,window.posFormatQty=O,window.posFQty=Ke,window.posSetItemDisc=na,window.posRemoveItem=Ue,window.posClearCart=ia,window.openPayModal=la,window.closePayModal=wt,window.setPosCustomerType=ca,window.setPosPayMethod=kt,window.updatePosChange=vt,window.posSetQuickCash=yt,window.ensureCustomersLoaded=oe,window.ensureBanksLoaded=Ae,window.lookupPosMember=Oe,window.debouncedLookupPosMember=Tt,window.selectPosMember=St,window.resetPosMember=Pt,window.processPOSTx=ba,window.printPOSReceipt=ua,window.posSetGlobalDisc=e=>{Fe(e)},window.posSetDiscountType=$t,window.posSetDiscountVal=Fe,window.posApplyQuickDiscount=Mt,window.openPOSCameraScanner=We,window.closePOSCameraScanner=ce,window.togglePOSScannerFacing=Ot,window.togglePOSScannerTorch=At,window.togglePOSScannerMode=Lt,window.posProcessManualBarcode=jt,window.posSearchScannedCode=Ht,window.executePOSPrintDirect=Ct,window.getActiveShift=N,window.isShiftActive=se,window.syncActiveShiftFromCloud=Z,window.openPOSOpenShiftModal=R,window.closePOSOpenShiftModal=he,window.openPOSShiftModal=E,window.openPOSShiftSummaryModal=E,window.closePOSShiftSummaryModal=Ee,window.openPOSCloseShiftModal=nt,window.closePOSCloseShiftModal=Pe,window.renderShiftHeaderBadge=Te,window.printShiftSettlementReceipt=it,window.executeShiftPrintDirect=lt,window.posCatFilter=e=>{ne=e,F()},window.posSearchFn=e=>{J=typeof e=="string"?e:e?.value||"",document.querySelectorAll("#pos-search-input").forEach(t=>{t.value!==J&&(t.value=J)}),F()},window.renderCatalog=F,window.renderCart=$,window.refreshPOSCatalog=()=>{try{F()}catch(e){console.warn("refreshPOSCatalog error:",e)}},window.openPOSCartDrawer=gt,window.closePOSCartDrawer=ke,window.playCashierBeep=U,window.openPOSHistory=()=>{typeof window.openAdminTab=="function"?window.openAdminTab("orders"):typeof window.showToast=="function"&&window.showToast("Semua transaksi kasir terpusat di menu Pesanan CMS Admin")},window.destroyBarcodeListener=qe,window.playCashierChime=Ce,window.posHoldCurrentCart=Qe,window.closePOSHoldPrompt=Ge,window.posConfirmHoldCart=pt,window.openPOSHeldModal=$e,window.closePOSHeldModal=Me,window.posRecallHeldCart=bt,window.posHoldCurrentAndRecall=ft,window.posOverwriteAndRecall=xt,window.posDeleteHeldCart=mt,window.posExecuteDeleteHeld=ht,window.renderHeldBadges=pe},$t=e=>{D=e==="percent"?"percent":"rp",q=V(),$()},Fe=e=>{A=Math.max(0,parseFloat(e)||0),q=V(),$()},Mt=(e,t)=>{t&&(D=t),A=e,q=V(),$(),U()},We=async()=>{if(i("pos-camera-scanner-modal"))return;typeof window.pushModalHistory=="function"&&window.pushModalHistory("posCameraScanner"),document.body.insertAdjacentHTML("beforeend",`
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
    </div>`),await ga()},ga=async()=>{const e=i("pos-camera-video");if(e)try{const t={video:{facingMode:{ideal:Xe},width:{ideal:1280},height:{ideal:720}},audio:!1},a=await navigator.mediaDevices.getUserMedia(t);le=a,e.srcObject=a,await e.play();const s=a.getVideoTracks();if(s.length>0){ee=s[0];const r=ee.getCapabilities?ee.getCapabilities():{},o=i("pos-scanner-torch-btn");o&&(r.torch?o.classList.remove("hidden"):o.classList.add("opacity-40"))}if(typeof window.BarcodeDetector<"u")try{je=new BarcodeDetector({formats:["ean_13","ean_8","upc_a","upc_e","code_128","code_39","code_93","qr_code","data_matrix"]})}catch{je=null}xe&&clearInterval(xe),xe=setInterval(async()=>{if(!(!je||!e||e.readyState<2))try{const r=await je.detect(e);if(r&&r.length>0){const o=r[0].rawValue?.trim();o&&wa(o)}}catch{}},180)}catch(t){console.warn("[POS Scanner] Gagal akses kamera:",t);const a=i("pos-scanner-status-pill");a&&(a.innerHTML='<span class="text-rose-400 font-bold"><i class="fa-solid fa-triangle-exclamation mr-1"></i>Kamera tidak dapat diakses</span>'),k("Izin kamera ditolak atau kamera sedang digunakan aplikasi lain.","warning")}},wa=e=>{const t=Date.now();if(e===Bt&&t-Nt<1800)return;Bt=e,Nt=t;const a=e.toLowerCase(),s=(u.products||[]).find(p=>p&&p.isActive!=="false"&&p.isActive!==!1&&(p.barcode&&p.barcode.toLowerCase()===a||p.sku&&p.sku.toLowerCase()===a||p.id&&String(p.id).toLowerCase()===a)),r=i("pos-scanner-reticle"),o=i("pos-scanner-status-pill"),n=i("pos-last-scanned-banner"),l=i("pos-last-scanned-text"),b=i("pos-last-scanned-price");if(s){if(r&&(r.classList.add("border-emerald-300","scale-105","bg-emerald-500/20"),setTimeout(()=>{r.classList.remove("border-emerald-300","scale-105","bg-emerald-500/20")},300)),U(),s.variants&&s.variants.length>0){o&&(o.innerHTML='<span class="text-amber-300 font-bold">Buka pilihan varian...</span>'),ce(),Yt().then(()=>{typeof window.openPOSVariantSheet=="function"&&window.openPOSVariantSheet(s.id)});return}Ve(s.id),n&&l&&b&&(l.textContent=s.name,b.textContent=g(parseFloat(s.price)||0),n.classList.remove("hidden")),o&&(o.innerHTML=`<span class="text-emerald-300 font-black"><i class="fa-solid fa-check mr-1"></i>${d(s.name)} (+1)</span>`,setTimeout(()=>{o&&(o.innerHTML='<span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span><span>Menunggu barcode...</span>')},1500)),Ie||(ce(),k(`Ditambahkan: ${s.name}`,"success"))}else r&&(r.classList.add("border-rose-500","bg-rose-500/20"),setTimeout(()=>{r.classList.remove("border-rose-500","bg-rose-500/20")},400)),o&&(o.innerHTML=`<span class="text-rose-400 font-bold"><i class="fa-solid fa-xmark mr-1"></i>Barcode "${e}" tidak ditemukan</span>`)},ce=(e=!1)=>{if(xe&&(clearInterval(xe),xe=null),le){try{le.getTracks().forEach(a=>a.stop())}catch{}le=null}ee=null,ye=!1;const t=i("pos-camera-scanner-modal");t&&(!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("posCameraScanner",!1,()=>t.remove()):t.remove())},At=async()=>{if(ee)try{if(!(ee.getCapabilities?ee.getCapabilities():{}).torch){k("Lampu senter (torch) tidak didukung kamera ini.");return}ye=!ye,await ee.applyConstraints({advanced:[{torch:ye}]});const t=i("pos-scanner-torch-btn");t&&(ye?(t.classList.add("bg-amber-500","text-white"),t.classList.remove("bg-slate-800","text-slate-300")):(t.classList.remove("bg-amber-500","text-white"),t.classList.add("bg-slate-800","text-slate-300")))}catch(e){console.warn("Gagal toggle torch:",e)}},Ot=async()=>{Xe=Xe==="environment"?"user":"environment",le&&(le.getTracks().forEach(e=>e.stop()),le=null),await ga()},Lt=()=>{Ie=!Ie;const e=i("pos-scanner-mode-btn");e&&(Ie?(e.textContent="Terus-menerus",e.className="px-2.5 py-1 rounded-lg bg-emerald-950/60 border border-emerald-600/60 text-emerald-400 text-[10px] font-black tracking-wider uppercase transition-all cursor-pointer"):(e.textContent="Scan Sekali",e.className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-[10px] font-black tracking-wider uppercase transition-all cursor-pointer"))},jt=e=>{if(!e||!e.trim())return;wa(e.trim());const t=i("pos-manual-barcode-input");t&&(t.value="")},Ht=e=>{ce();const t=i("pos-search-input");t&&(t.value=e,J=e,F())};window.setPOSViewMode=ct;window.renderPOSStorefront=xa;window.renderPOS=ma;window.destroyBarcodeListener=qe;window.openPOSCartDrawer=gt;window.closePOSCartDrawer=ke;window.posSetQuickCash=yt;window.playCashierBeep=U;window.playCashierChime=Ce;window.posHoldCurrentCart=Qe;window.closePOSHoldPrompt=Ge;window.posConfirmHoldCart=pt;window.openPOSHeldModal=$e;window.closePOSHeldModal=Me;window.posRecallHeldCart=bt;window.posHoldCurrentAndRecall=ft;window.posOverwriteAndRecall=xt;window.posDeleteHeldCart=mt;window.posExecuteDeleteHeld=ht;window.renderHeldBadges=pe;window.ensureCustomersLoaded=oe;window.ensureBanksLoaded=Ae;window.lookupPosMember=Oe;window.debouncedLookupPosMember=Tt;window.selectPosMember=St;window.resetPosMember=Pt;window.posSetDiscountType=$t;window.posSetDiscountVal=Fe;window.posApplyQuickDiscount=Mt;window.openPOSCameraScanner=We;window.closePOSCameraScanner=ce;window.togglePOSScannerFacing=Ot;window.togglePOSScannerTorch=At;window.togglePOSScannerMode=Lt;window.posProcessManualBarcode=jt;window.posSearchScannedCode=Ht;window.executePOSPrintDirect=Ct;window.getActiveShift=N;window.isShiftActive=se;window.syncActiveShiftFromCloud=Z;window.openPOSOpenShiftModal=R;window.closePOSOpenShiftModal=he;window.openPOSShiftModal=E;window.openPOSShiftSummaryModal=E;window.closePOSShiftSummaryModal=Ee;window.openPOSCloseShiftModal=nt;window.closePOSCloseShiftModal=Pe;window.renderShiftHeaderBadge=Te;window.printShiftSettlementReceipt=it;window.executeShiftPrintDirect=lt;const za=Object.freeze(Object.defineProperty({__proto__:null,addToCart:Ve,addToCartWithVariant:sa,applyMemberToPos:Ne,clearCart:ia,closePOSCameraScanner:ce,closePOSCartDrawer:ke,closePOSHeldModal:Me,closePOSHoldPrompt:Ge,closePayModal:wt,debouncedLookupPosMember:Tt,destroyBarcodeListener:qe,ensureBanksLoaded:Ae,ensureCustomersLoaded:oe,executePOSPrintDirect:Ct,formatQty:O,getProductStockInfo:we,lookupPosMember:Oe,openPOSCameraScanner:We,openPOSCartDrawer:gt,openPOSHeldModal:$e,openPayModal:la,playCashierBeep:U,playCashierChime:Ce,posAddToCartQty:aa,posApplyQuickDiscount:Mt,posConfirmHoldCart:pt,posDeleteHeldCart:mt,posDiscountAmount:V,posExecuteDeleteHeld:ht,posHoldCurrentAndRecall:ft,posHoldCurrentCart:Qe,posOverwriteAndRecall:xt,posProcessManualBarcode:jt,posRecallHeldCart:bt,posSearchScannedCode:Ht,posSetDiscountType:$t,posSetDiscountVal:Fe,posSetQuickCash:yt,printPOSReceipt:ua,processPOSTx:ba,removeFromCart:Ue,renderCatalog:F,renderHeldBadges:pe,renderPOS:ma,renderPOSStorefront:xa,resetPosMember:Pt,selectPosMember:St,setItemDisc:na,setPOSViewMode:ct,setPosCustomerType:ca,setPosPayMethod:kt,setQty:oa,stopClock:ea,togglePOSScannerFacing:Ot,togglePOSScannerMode:Lt,togglePOSScannerTorch:At,updatePosChange:vt,updateQty:ra},Symbol.toStringTag,{value:"Module"}));export{za as a,Ua as p,Ia as r};

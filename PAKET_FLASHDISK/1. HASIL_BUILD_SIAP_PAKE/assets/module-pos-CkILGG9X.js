const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/pos-variant-sheet-DnGGNgAm.js","assets/module-print-B6xAfF9T.js"])))=>i.map(i=>d[i]);
import{a as K,A as ya,d as y,_ as Sa}from"./module-member-B9EY1O_V.js";import{e as i,t as w,a as b,i as u,ar as te,u as Pa,x as Xe,b as Ta,f as Ca}from"./module-print-B6xAfF9T.js";import{f as Ye}from"./vendor-firebase-core-D2OF5R23.js";let ue=null;const Y=()=>{if(ue)return ue;try{const e=sessionStorage.getItem("pos_cashier_session");if(e)return ue=JSON.parse(e),ue}catch{}return null},Ma=e=>{ue=e;try{e?sessionStorage.setItem("pos_cashier_session",JSON.stringify(e)):sessionStorage.removeItem("pos_cashier_session")}catch{}},Nt=()=>{ue=null;try{sessionStorage.removeItem("pos_cashier_session")}catch{}},_t=()=>!!Y(),Et=async()=>{if(Y()||window.isAdm||window.__localIsAdm||b&&(b.hasCashier===!0||b.store?.posEnabled===!0))return!0;const e=localStorage.getItem("pos_has_cashier");if(e==="true")return!0;const t=!!(window.isAdm||window.__localIsAdm||K.currentUser&&K.currentUser.uid===ya);try{if(t){const s=!(await y.collection("freshmart").doc("cms_data").collection("cashier_accounts").where("isActive","==",!0).limit(1).get()).empty;try{localStorage.setItem("pos_has_cashier",s?"true":"false"),y.collection("freshmart").doc("cms_data").set({hasCashier:s},{merge:!0}).catch(()=>{})}catch{}return s}else{const a=await y.collection("freshmart").doc("cms_data").get();if(a.exists){const s=a.data();if(s.hasCashier!==void 0){const r=!!s.hasCashier;try{localStorage.setItem("pos_has_cashier",r?"true":"false")}catch{}return r}}return e!=="false"}}catch{return e!=="false"}},Ne=async()=>{const e=i("pos-cashier-header-btn");if(!e)return;const t=!!Y(),a=!!(window.isAdm||window.__localIsAdm),s=localStorage.getItem("pos_has_cashier"),r=b?b.hasCashier??!0:!0;t||a||s==="true"||s===null&&r!==!1?e.classList.remove("hidden"):s==="false"&&e.classList.add("hidden");try{await Et()||t||a?e.classList.remove("hidden"):e.classList.add("hidden")}catch{(t||a||s!=="false")&&e.classList.remove("hidden")}},Kt=async()=>{typeof window.triggerHaptic=="function"&&window.triggerHaptic("medium"),Y()?(typeof window.changeView=="function"&&window.changeView("view-pos-cashier"),typeof window.renderPOSStorefront=="function"&&window.renderPOSStorefront()):tt()},tt=()=>{const e=i("pos-login-modal");e&&(e.classList.remove("hidden"),setTimeout(()=>{e.classList.remove("opacity-0");const t=i("pos-login-modal-box");t&&t.classList.remove("translate-y-full","scale-95")},10),setTimeout(()=>{const t=i("pos-login-email");t&&t.focus()},300),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},at=()=>{const e=i("pos-login-modal"),t=i("pos-login-modal-box");e&&e.classList.add("opacity-0"),t&&t.classList.add("translate-y-full"),setTimeout(()=>{e&&e.classList.add("hidden");const a=i("pos-login-email"),s=i("pos-login-password"),r=i("pos-login-error");a&&(a.value=""),s&&(s.value=""),r&&(r.textContent="",r.classList.add("hidden"))},300)},qt=async()=>{const e=i("pos-login-email"),t=i("pos-login-password"),a=i("pos-login-error"),s=i("pos-login-btn"),r=e?.value?.trim()||"",o=t?.value||"",n=p=>{if(a){a.classList.remove("hidden");const c=a.querySelector("span");c?c.textContent=p:a.textContent=p}typeof window.triggerHaptic=="function"&&window.triggerHaptic("error")};if((()=>{if(a){a.classList.add("hidden");const p=a.querySelector("span");p&&(p.textContent="")}})(),!r||!o){n("Email dan password wajib diisi.");return}s&&(s.disabled=!0,s.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i>Memverifikasi...');try{const c=(await K.signInWithEmailAndPassword(r,o)).user?.uid;if(!c)throw new Error("UID tidak ditemukan");const T=await y.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(c).get();if(!T.exists){await K.signOut(),n("Akun ini bukan akun kasir yang terdaftar di toko ini.");return}const k=T.data();if(k.role!=="cashier"){await K.signOut(),n("Akun ini tidak memiliki akses kasir.");return}if(!k.isActive){await K.signOut(),n("Akun kasir ini telah dinonaktifkan. Hubungi admin toko.");return}Ma({uid:c,name:k.name||r,email:k.email||r,role:"cashier"});try{localStorage.setItem("pos_has_cashier","true")}catch{}Ne(),typeof window.syncActiveShiftFromCloud=="function"&&window.syncActiveShiftFromCloud().catch(()=>{}),at(),w(`Selamat datang, ${k.name||"Kasir"}! 👋`,"success"),typeof window.changeView=="function"&&window.changeView("view-pos-cashier"),setTimeout(()=>{typeof window.renderPOSStorefront=="function"&&window.renderPOSStorefront()},100),typeof window.triggerHaptic=="function"&&window.triggerHaptic("success")}catch(p){console.error("[POS Auth] Login error:",p);const c=p.code||"";n(c==="auth/user-not-found"||c==="auth/wrong-password"||c==="auth/invalid-credential"?"Email atau password salah.":c==="auth/too-many-requests"?"Terlalu banyak percobaan. Coba lagi beberapa saat.":c==="auth/network-request-failed"?"Koneksi gagal. Periksa jaringan internet.":"Login gagal: "+(p.message||"Kesalahan tidak diketahui"))}finally{s&&(s.disabled=!1,s.innerHTML='<i class="fa-solid fa-right-to-bracket mr-2"></i>Masuk Kasir')}},st=async(e=!1)=>{if(!e&&typeof window.getActiveShift=="function"){const a=window.getActiveShift();if(a&&a.status==="open"){document.getElementById("pos-logout-shift-modal")?.remove();const s=typeof window.fRp=="function"?window.fRp(a.startingCash):"Rp "+a.startingCash;document.body.insertAdjacentHTML("beforeend",`
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
            </div>`);return}}Y(),typeof window.detachPOSHistoryListener=="function"&&window.detachPOSHistoryListener(),typeof window.detachActiveShiftListener=="function"&&window.detachActiveShiftListener(),typeof window.clearActiveShift=="function"&&window.clearActiveShift();try{if(!window.isAdm&&!window.__localIsAdm)try{await K.signOut()}catch{}}catch{}Nt();const t=i("view-pos-cashier");t&&(t.innerHTML=""),typeof window.destroyBarcodeListener=="function"&&window.destroyBarcodeListener(),typeof window.stopPOSClock=="function"&&window.stopPOSClock(),w("Sesi kasir berakhir. Sampai jumpa! 👋"),typeof window.changeView=="function"&&window.changeView("view-catalog"),typeof window.triggerHaptic=="function"&&window.triggerHaptic("medium"),typeof window.updatePOSHeaderIcon=="function"&&window.updatePOSHeaderIcon()},Vt=async()=>{await Ne()};window.openPOSCashierMode=Kt;window.openPOSLoginModal=tt;window.closePOSLoginModal=at;window.processCashierLogin=qt;window.cashierLogout=st;window.exitPOSMode=st;window.getCashierSession=Y;window.isCashierLoggedIn=_t;window.initPOSAuth=Vt;window.updatePOSHeaderIcon=Ne;const Qa=Object.freeze(Object.defineProperty({__proto__:null,cashierLogout:st,checkCashierExists:Et,clearCashierSession:Nt,closePOSLoginModal:at,getCashierSession:Y,initPOSAuth:Vt,isCashierLoggedIn:_t,openPOSCashierMode:Kt,openPOSLoginModal:tt,processCashierLogin:qt,updatePOSHeaderIcon:Ne},Symbol.toStringTag,{value:"Module"})),h=e=>"Rp "+Math.round(parseFloat(e)||0).toLocaleString("id-ID"),Ut=e=>parseFloat((parseFloat(e)||0).toFixed(3)).toString(),De="pos_active_shift",Qt="pos_last_closed_shift";let be=null,He=null;const Be=()=>{if(typeof He=="function"){try{He()}catch{}He=null}},ge=()=>{const e=typeof Y=="function"?Y():null,t=!!(window.isAdm||window.__localIsAdm||window.__currentAdminUid),a=K?.currentUser?.uid,s=e?.uid||(t?window.__currentAdminUid||a||"admin":a||"cashier-anon"),r=e?.name||(t?"Admin Seller":"Kasir Toko"),o=e?.email||t&&K?.currentUser?.email||"";return{uid:s,name:r,email:o,isAdm:t}},me=(e,t=ge())=>{if(!e)return!1;const a=e.cashierUid;return!!(a&&t.uid&&a===t.uid||t.isAdm&&(a==="admin"||a==="ADMIN_UID"||a===window.__currentAdminUid||K?.currentUser&&a===K.currentUser.uid))},B=()=>{if(be)return be;try{const e=localStorage.getItem(De);if(e)return be=JSON.parse(e),be}catch(e){console.warn("[POS Shift] Gagal membaca active shift:",e)}return null},ae=e=>{be=e;try{e?localStorage.setItem(De,JSON.stringify(e)):localStorage.removeItem(De)}catch{}},Se=()=>{be=null;try{localStorage.removeItem(De)}catch{}},Aa=()=>{try{const e=localStorage.getItem(Qt);if(e)return JSON.parse(e)}catch{}return null},rt=e=>{try{localStorage.setItem(Qt,JSON.stringify(e))}catch{}},se=()=>{const e=B();return!!(e&&e.status==="open")},_e=async(e=null)=>{const t=ge();try{const a=await y.collection("freshmart").doc("cms_data").collection("pos_shifts").where("status","==","open").get();if(!a.empty){const s=[];if(a.forEach(r=>{const o={id:r.id,...r.data()};me(o,t)&&s.push(o)}),s.length>0)return s.sort((r,o)=>(o.startTime||0)-(r.startTime||0)),s[0]}}catch(a){console.warn("[POS Shift] Cek open shift cms_data:",a)}try{const a=await y.collection("pos_shifts").where("status","==","open").get();if(!a.empty){const s=[];if(a.forEach(r=>{const o={id:r.id,...r.data()};me(o,t)&&s.push(o)}),s.length>0)return s.sort((r,o)=>(o.startTime||0)-(r.startTime||0)),s[0]}}catch(a){console.warn("[POS Shift] Cek open shift root pos_shifts:",a)}return null},ie=e=>{if(e){Be();try{He=y.collection("freshmart").doc("cms_data").collection("pos_shifts").doc(e).onSnapshot(a=>{if(!a.exists)return;const s={id:a.id,...a.data()};if(s.status==="closed"){Be(),Se(),rt(s),Ee(),Pe(),he(),w("Shift kasir telah ditutup dari perangkat lain.","info"),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge();return}if(s.status==="open"){ae(s),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge();const r=i("pos-shift-summary-modal");r&&!r.classList.contains("opacity-0")&&_()}},a=>{console.warn("[POS Shift] Snapshot listener cms_data error:",a)})}catch(t){console.warn("[POS Shift] Gagal attach snapshot listener:",t)}}},X=async()=>{const e=ge(),t=B();if(t&&t.status==="open"&&me(t,e))try{const a=await y.collection("freshmart").doc("cms_data").collection("pos_shifts").doc(t.id).get();if(a.exists){const s={id:a.id,...a.data()};if(s.status==="closed")Se(),rt(s),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge();else return ae(s),ie(s.id),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge(),s}}catch(a){return console.warn("[POS Shift] Gagal verifikasi local shift ke cloud:",a),ie(t.id),t}try{const a=await _e(e.uid);if(a)return ae(a),ie(a.id),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge(),a;t&&!me(t,e)&&(Se(),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge())}catch(a){console.warn("[POS Shift] Gagal cari shift open di cloud:",a)}return B()},Gt=(e="open")=>{try{const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const a=new t,s=a.currentTime;e==="open"?([523.25,659.25,783.99,1046.5].forEach((o,n)=>{const l=a.createOscillator(),p=a.createGain(),c=s+n*.07;l.type="sine",l.frequency.setValueAtTime(o,c),p.gain.setValueAtTime(.09,c),p.gain.exponentialRampToValueAtTime(1e-4,c+.16),l.connect(p),p.connect(a.destination),l.start(c),l.stop(c+.16)}),setTimeout(()=>{a.close().catch(()=>{})},600)):([{f:[783.99,987.77],t:s,d:.14},{f:[1046.5,1318.51],t:s+.12,d:.35}].forEach(o=>{o.f.forEach(n=>{const l=a.createOscillator(),p=a.createGain();l.type="triangle",l.frequency.setValueAtTime(n,o.t),p.gain.setValueAtTime(.08,o.t),p.gain.exponentialRampToValueAtTime(1e-4,o.t+o.d),l.connect(p),p.connect(a.destination),l.start(o.t),l.stop(o.t+o.d)})}),setTimeout(()=>{a.close().catch(()=>{})},700))}catch{}},ot=(e,t=Date.now())=>{if(!e)return"-";const a=Math.max(0,t-e),s=Math.floor(a/6e4),r=Math.floor(s/60),o=s%60;return r>0?`${r} Jam ${o} Menit`:`${o} Menit`},$a=()=>{const e=new Date,t=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0"),r=Math.floor(100+Math.random()*900);return`SHF-${t}${a}${s}-${r}`},R=async()=>{const e=ge(),t=B();if(t&&t.status==="open"&&me(t,e)){w(`Shift kasir #${t.shiftNo||t.id} sedang aktif. Menampilkan ringkasan shift.`,"info"),_();return}try{const l=await _e(e.uid);if(l){ae(l),ie(l.id),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge(),w(`Melanjutkan shift aktif (#${l.shiftNo||l.id}) dari perangkat lain! 👋`,"success"),_();return}}catch(l){console.warn("[POS Shift] Cek cloud saat buka modal:",l)}const a=e.name,s=new Date().toLocaleString("id-ID",{dateStyle:"full",timeStyle:"short"});document.getElementById("pos-open-shift-modal")?.remove();const r=`
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
    </div>`;document.body.insertAdjacentHTML("beforeend",r);const o=i("pos-open-shift-modal"),n=i("pos-open-shift-box");!o||!n||(o.classList.remove("pointer-events-none"),requestAnimationFrame(()=>{o.classList.remove("opacity-0"),n.classList.remove("translate-y-8","scale-95")}),setTimeout(()=>{const l=i("pos-shift-start-cash-input");l&&(l.focus(),l.select())},250))},he=()=>{const e=i("pos-open-shift-modal"),t=i("pos-open-shift-box");e&&(e.classList.add("opacity-0","pointer-events-none"),t&&t.classList.add("translate-y-8","scale-95"),setTimeout(()=>{e.remove()},280))},zt=()=>{const e=parseFloat(i("pos-shift-start-cash-input")?.value)||0;document.querySelectorAll(".pos-preset-chip").forEach(t=>{parseFloat(t.dataset.amount)===e?t.className="pos-preset-chip px-2.5 py-1 rounded-xl text-[10px] font-black border-2 border-[var(--color-primary)] text-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.1)] shadow-xs transition-all cursor-pointer":t.className="pos-preset-chip px-2.5 py-1 rounded-xl text-[10px] font-bold border border-slate-200 dark:border-slate-700 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-all cursor-pointer"})},Oa=e=>{const t=i("pos-shift-start-cash-input");t&&(t.value=e,t.focus(),t.select()),zt()},La=async()=>{const e=i("pos-shift-start-cash-input"),t=i("pos-shift-start-notes-input"),a=parseFloat(e?.value)||0,s=t?.value?.trim()||"",r=ge(),o=r.uid,n=r.name,l=r.email,p=document.querySelector('#pos-open-shift-box button[onclick*="confirmStartPOSShift"]');p&&(p.disabled=!0,p.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-1.5"></i><span>Memverifikasi Shift...</span>');try{const f=await _e(o);if(f){he(),ae(f),ie(f.id),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge(),w(`Akun kasir sudah memiliki shift aktif (#${f.shiftNo||f.id}). Melanjutkan shift berjalan.`,"warning"),_();return}}catch(f){console.warn("[POS Shift] Pre-flight check error:",f)}const c={id:"SHF-"+Date.now(),shiftNo:$a(),cashierUid:o,cashierName:n,cashierEmail:l,startTime:Date.now(),startTimeISO:new Date().toISOString(),startingCash:a,startNotes:s,status:"open",txCount:0,itemCount:0,totalSales:0,cashSales:0,qrisSales:0,bankSales:0,tempoSales:0,discountTotal:0,pointsTotal:0,orders:[]};ae(c),ie(c.id);try{await Promise.all([y.collection("freshmart").doc("cms_data").collection("pos_shifts").doc(c.id).set(c),y.collection("pos_shifts").doc(c.id).set(c)])}catch{}he(),Gt("open"),w(`Shift kasir dibuka! Modal awal: ${h(a)} 🎉`,"success"),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge()},Wt=e=>{try{const t=B();if(!t||t.status!=="open")return;const a=parseFloat(e.total)||0,s=e.payment?.method||"cash",r=parseFloat(e.payment?.dp)||0,o=parseFloat(e.payment?.tempoBalance)||0,n=parseFloat(e.globalDiscount)||0,l=parseFloat(e.pointsEarned)||0,p=(e.items||[]).reduce((c,f)=>c+(parseFloat(f.qty)||0),0);t.txCount=(t.txCount||0)+1,t.itemCount=parseFloat(((t.itemCount||0)+p).toFixed(3)),t.totalSales=(t.totalSales||0)+a,t.discountTotal=(t.discountTotal||0)+n,t.pointsTotal=(t.pointsTotal||0)+l,s==="cash"?t.cashSales=(t.cashSales||0)+a:s==="qris"?t.qrisSales=(t.qrisSales||0)+a:s==="bank"?t.bankSales=(t.bankSales||0)+a:s==="tempo"&&(r>0&&(t.cashSales=(t.cashSales||0)+r),t.tempoSales=(t.tempoSales||0)+o),Array.isArray(t.orders)||(t.orders=[]),(e.txId||e.id)&&t.orders.push(e.txId||e.id),ae(t);try{const c={txCount:t.txCount,itemCount:t.itemCount,totalSales:t.totalSales,cashSales:t.cashSales,qrisSales:t.qrisSales,bankSales:t.bankSales,tempoSales:t.tempoSales,discountTotal:t.discountTotal,pointsTotal:t.pointsTotal,orders:t.orders,lastUpdatedISO:new Date().toISOString()};y.collection("freshmart").doc("cms_data").collection("pos_shifts").doc(t.id).update(c).catch(()=>{}),y.collection("pos_shifts").doc(t.id).update(c).catch(()=>{})}catch{}typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge()}catch(t){console.warn("[POS Shift] Gagal update transaksi ke shift:",t)}},_=()=>{const e=B();if(!e){R();return}document.getElementById("pos-shift-summary-modal")?.remove();const t=(parseFloat(e.startingCash)||0)+(parseFloat(e.cashSales)||0),a=ot(e.startTime),s=new Date(e.startTime).toLocaleString("id-ID",{dateStyle:"medium",timeStyle:"short"}),r=`
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
                        <span class="text-[10px] text-slate-500 mt-0.5 block">${e.txCount||0} Struk / ${Ut(e.itemCount||0)} Item</span>
                    </div>
                </div>

                <!-- Kartu Utama: Kas di Laci Saat Ini (Expected Cash) -->
                <div class="p-4 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent border-2 border-emerald-500/30 flex items-center justify-between">
                    <div>
                        <span class="text-[11px] font-bold text-emerald-700 dark:text-emerald-300 uppercase tracking-wider block">Uang Kas di Laci Seharusnya</span>
                        <span class="text-[10px] text-slate-500 dark:text-slate-400">Modal Awal (${h(e.startingCash)}) + Penjualan Tunai (${h(e.cashSales||0)})</span>
                    </div>
                    <div class="text-right">
                        <span class="text-xl font-black text-emerald-600 dark:text-emerald-400 block">${h(t)}</span>
                    </div>
                </div>

                <!-- Rincian Omset Penjualan -->
                <div class="space-y-2">
                    <div class="flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-200 border-b border-slate-100 dark:border-slate-800 pb-1.5">
                        <span class="flex items-center gap-1.5"><i class="fa-solid fa-receipt text-slate-400"></i>Rincian Metode Pembayaran</span>
                        <span class="text-slate-500 text-[11px]">Total Omset: <b style="color:var(--color-primary)">${h(e.totalSales||0)}</b></span>
                    </div>

                    <div class="space-y-1.5 text-xs">
                        <div class="flex justify-between items-center p-2 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                            <span class="text-slate-600 dark:text-slate-300 flex items-center gap-2">
                                <span class="w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center text-[10px]"><i class="fa-solid fa-money-bill-wave"></i></span>
                                <span>Tunai (Cash)</span>
                            </span>
                            <span class="font-bold text-slate-800 dark:text-white">${h(e.cashSales||0)}</span>
                        </div>
                        <div class="flex justify-between items-center p-2 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                            <span class="text-slate-600 dark:text-slate-300 flex items-center gap-2">
                                <span class="w-6 h-6 rounded-lg bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 flex items-center justify-center text-[10px]"><i class="fa-solid fa-qrcode"></i></span>
                                <span>QRIS Dinamis</span>
                            </span>
                            <span class="font-bold text-slate-800 dark:text-white">${h(e.qrisSales||0)}</span>
                        </div>
                        <div class="flex justify-between items-center p-2 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                            <span class="text-slate-600 dark:text-slate-300 flex items-center gap-2">
                                <span class="w-6 h-6 rounded-lg bg-blue-100 dark:bg-blue-950/60 text-blue-600 flex items-center justify-center text-[10px]"><i class="fa-solid fa-building-columns"></i></span>
                                <span>Transfer Bank</span>
                            </span>
                            <span class="font-bold text-slate-800 dark:text-white">${h(e.bankSales||0)}</span>
                        </div>
                        <div class="flex justify-between items-center p-2 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                            <span class="text-slate-600 dark:text-slate-300 flex items-center gap-2">
                                <span class="w-6 h-6 rounded-lg bg-amber-100 dark:bg-amber-950/60 text-amber-600 flex items-center justify-center text-[10px]"><i class="fa-solid fa-clock-rotate-left"></i></span>
                                <span>Tempo / Piutang (Sisa)</span>
                            </span>
                            <span class="font-bold text-slate-800 dark:text-white">${h(e.tempoSales||0)}</span>
                        </div>
                    </div>
                </div>

                <!-- Diskon & Poin -->
                <div class="grid grid-cols-2 gap-2 text-xs">
                    <div class="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/20 border border-rose-200/60 dark:border-rose-800/40">
                        <span class="text-[10px] text-rose-500 block font-bold">Total Diskon Diberikan</span>
                        <span class="font-black text-rose-600 dark:text-rose-400 text-xs">${h(e.discountTotal||0)}</span>
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
    </div>`;document.body.insertAdjacentHTML("beforeend",r);const o=i("pos-shift-summary-modal"),n=i("pos-shift-summary-box");!o||!n||(o.classList.remove("pointer-events-none"),requestAnimationFrame(()=>{o.classList.remove("opacity-0"),n.classList.remove("translate-y-8","scale-95")}))},Ee=()=>{const e=i("pos-shift-summary-modal"),t=i("pos-shift-summary-box");e&&(e.classList.add("opacity-0","pointer-events-none"),t&&t.classList.add("translate-y-8","scale-95"),setTimeout(()=>{e.remove()},280))},nt=()=>{const e=B();if(!e){w("Tidak ada shift kasir yang aktif saat ini.","warning");return}document.getElementById("pos-close-shift-modal")?.remove();const t=(parseFloat(e.startingCash)||0)+(parseFloat(e.cashSales)||0),a=`
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
                            Modal Awal: <b>${h(e.startingCash)}</b> + Penjualan Tunai: <b>${h(e.cashSales||0)}</b>
                        </div>
                    </div>
                    <div class="text-right">
                        <span id="pos-close-expected-cash" class="text-lg font-black text-slate-900 dark:text-white">${h(t)}</span>
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
    </div>`;document.body.insertAdjacentHTML("beforeend",a);const s=i("pos-close-shift-modal"),r=i("pos-close-shift-box");!s||!r||(s.classList.remove("pointer-events-none"),requestAnimationFrame(()=>{s.classList.remove("opacity-0"),r.classList.remove("translate-y-8","scale-95")}),setTimeout(()=>{const o=i("pos-shift-actual-cash-input");o&&(o.focus(),o.select())},250))},Pe=()=>{const e=i("pos-close-shift-modal"),t=i("pos-close-shift-box");e&&(e.classList.add("opacity-0","pointer-events-none"),t&&t.classList.add("translate-y-8","scale-95"),setTimeout(()=>{e.remove()},280))},ja=e=>{const t=i("pos-count-tab-quick"),a=i("pos-count-tab-denom"),s=i("pos-count-panel-quick"),r=i("pos-count-panel-denom");e==="quick"?(t&&(t.className="px-2.5 py-1 rounded-lg font-black bg-white dark:bg-slate-700 text-[var(--color-primary)] dark:text-white shadow-xs transition-all cursor-pointer border border-[rgba(var(--color-primary-rgb),0.2)] dark:border-slate-600"),a&&(a.className="px-2.5 py-1 rounded-lg font-bold text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-all cursor-pointer border border-transparent"),s&&s.classList.remove("hidden"),r&&r.classList.add("hidden")):(t&&(t.className="px-2.5 py-1 rounded-lg font-bold text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-all cursor-pointer border border-transparent"),a&&(a.className="px-2.5 py-1 rounded-lg font-black bg-white dark:bg-slate-700 text-[var(--color-primary)] dark:text-white shadow-xs transition-all cursor-pointer border border-[rgba(var(--color-primary-rgb),0.2)] dark:border-slate-600"),s&&s.classList.add("hidden"),r&&r.classList.remove("hidden"),Jt())},Jt=()=>{const e=(parseFloat(i("denom-100k")?.value)||0)*1e5,t=(parseFloat(i("denom-50k")?.value)||0)*5e4,a=(parseFloat(i("denom-20k")?.value)||0)*2e4,s=(parseFloat(i("denom-10k")?.value)||0)*1e4,r=(parseFloat(i("denom-5k")?.value)||0)*5e3,o=(parseFloat(i("denom-2k")?.value)||0)*2e3,n=(parseFloat(i("denom-1k")?.value)||0)*1e3,l=parseFloat(i("denom-coin")?.value)||0,p=e+t+a+s+r+o+n+l,c=i("pos-shift-actual-cash-input");c&&(c.value=p),Yt()},Yt=()=>{const e=B();if(!e)return;const t=(parseFloat(e.startingCash)||0)+(parseFloat(e.cashSales)||0),s=(parseFloat(i("pos-shift-actual-cash-input")?.value)||0)-t,r=i("pos-discrepancy-card"),o=i("pos-discrepancy-icon"),n=i("pos-discrepancy-status"),l=i("pos-discrepancy-desc"),p=i("pos-discrepancy-amount");!r||!o||!n||!l||!p||(s===0?(r.className="p-4 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between bg-emerald-50 dark:bg-emerald-950/20 border-emerald-500/40",o.className="w-10 h-10 rounded-2xl flex items-center justify-center text-white text-base shadow-sm shrink-0 bg-emerald-600",o.innerHTML='<i class="fa-solid fa-check"></i>',n.className="text-xs font-black uppercase tracking-wider text-emerald-800 dark:text-emerald-300 block",n.innerText="SEIMBANG (PAS)",l.className="text-[11px] text-emerald-700 dark:text-emerald-400 block",l.innerText="Uang fisik laci kasir cocok dengan transaksi sistem",p.className="text-base font-black text-emerald-600 dark:text-emerald-400",p.innerText="Rp 0"):s>0?(r.className="p-4 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between bg-amber-50 dark:bg-amber-950/20 border-amber-500/40",o.className="w-10 h-10 rounded-2xl flex items-center justify-center text-white text-base shadow-sm shrink-0 bg-amber-500",o.innerHTML='<i class="fa-solid fa-plus"></i>',n.className="text-xs font-black uppercase tracking-wider text-amber-800 dark:text-amber-300 block",n.innerText="LEBIH (SURPLUS)",l.className="text-[11px] text-amber-700 dark:text-amber-400 block",l.innerText="Terdapat kelebihan uang fisik di laci kasir",p.className="text-base font-black text-amber-600 dark:text-amber-400",p.innerText="+ "+h(s)):(r.className="p-4 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between bg-rose-50 dark:bg-rose-950/20 border-rose-500/40",o.className="w-10 h-10 rounded-2xl flex items-center justify-center text-white text-base shadow-sm shrink-0 bg-rose-600",o.innerHTML='<i class="fa-solid fa-minus"></i>',n.className="text-xs font-black uppercase tracking-wider text-rose-800 dark:text-rose-300 block",n.innerText="KURANG (DEFISIT)",l.className="text-[11px] text-rose-700 dark:text-rose-400 block",l.innerText="Terdapat kekurangan uang fisik di laci kasir",p.className="text-base font-black text-rose-600 dark:text-rose-400",p.innerText="- "+h(Math.abs(s))))},Ha=async()=>{const e=B();if(!e)return;const t=(parseFloat(e.startingCash)||0)+(parseFloat(e.cashSales)||0),a=parseFloat(i("pos-shift-actual-cash-input")?.value)||0,s=a-t,r=i("pos-shift-close-notes")?.value?.trim()||"",o={d100k:parseFloat(i("denom-100k")?.value)||0,d50k:parseFloat(i("denom-50k")?.value)||0,d20k:parseFloat(i("denom-20k")?.value)||0,d10k:parseFloat(i("denom-10k")?.value)||0,d5k:parseFloat(i("denom-5k")?.value)||0,d2k:parseFloat(i("denom-2k")?.value)||0,d1k:parseFloat(i("denom-1k")?.value)||0,coin:parseFloat(i("denom-coin")?.value)||0},n=Date.now(),l=ot(e.startTime,n),p={...e,status:"closed",endTime:n,endTimeISO:new Date(n).toISOString(),duration:l,expectedCash:t,actualCash:a,difference:s,discrepancyStatus:s===0?"balanced":s>0?"surplus":"deficit",denominations:o,closingNotes:r};Be();try{await Promise.all([y.collection("freshmart").doc("cms_data").collection("pos_shifts").doc(p.id).set(p,{merge:!0}),y.collection("pos_shifts").doc(p.id).set(p,{merge:!0})])}catch(c){console.warn("[POS Shift] Simpan Firestore:",c)}Se(),rt(p),Pe(),Gt("close"),Ia(p),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge()},Ia=e=>{document.getElementById("pos-closed-success-modal")?.remove();const t=e.difference||0,a=t===0?'<span class="px-2.5 py-1 rounded-xl text-xs font-black bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">PAS (Rp 0)</span>':t>0?`<span class="px-2.5 py-1 rounded-xl text-xs font-black bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300">LEBIH (+${h(t)})</span>`:`<span class="px-2.5 py-1 rounded-xl text-xs font-black bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300">KURANG (-${h(Math.abs(t))})</span>`,s=`
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
                <div class="flex justify-between border-t border-slate-200/60 dark:border-slate-700/60 pt-1.5"><span>Total Omset:</span><span class="font-bold">${h(e.totalSales||0)}</span></div>
                <div class="flex justify-between"><span>Kas Fisik Laci:</span><span class="font-black text-slate-900 dark:text-white">${h(e.actualCash||0)}</span></div>
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
    </div>`;document.body.insertAdjacentHTML("beforeend",s)},it=(e,t=!1)=>{if(!e){w("Data shift tidak ditemukan.","warning");return}const a=typeof te=="function"?te():{paperSize:"58mm"},s=a.paperSize==="80mm",r=a.headerText||b.store?.name||"TOKO PUTRI",o=b.store?.address||"",n=b.store?.wa||"",l=a.footerText||"Laporan Kasir Resmi Toko Putri",p=t?"RINGKASAN SHIFT (X-REPORT)":"REKAP TUTUP SHIFT (Z-REPORT)",c=new Date(e.startTime).toLocaleString("id-ID",{dateStyle:"short",timeStyle:"short"}),f=e.endTime?new Date(e.endTime).toLocaleString("id-ID",{dateStyle:"short",timeStyle:"short"}):new Date().toLocaleString("id-ID",{dateStyle:"short",timeStyle:"short"}),T=e.duration||ot(e.startTime,e.endTime||Date.now()),k=(parseFloat(e.startingCash)||0)+(parseFloat(e.cashSales)||0),d=e.actualCash!==void 0?parseFloat(e.actualCash):k,g=d-k,O=g===0?"SEIMBANG (PAS)":g>0?`LEBIH (+${h(g)})`:`KURANG (-${h(Math.abs(g))})`;document.getElementById("pos-shift-receipt-modal")?.remove(),document.body.insertAdjacentHTML("beforeend",`
    <div id="pos-shift-receipt-modal" class="fixed inset-0 z-[10003] flex items-center justify-center p-3 sm:p-4" style="background:rgba(15,23,42,0.7);backdrop-filter:blur(4px)">
        <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full ${s?"max-w-md":"max-w-sm"} border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[90vh]">
            <div class="p-3.5 sm:p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50">
                <span class="font-bold text-xs text-slate-700 dark:text-slate-200 flex items-center gap-1.5"><i class="fa-solid fa-receipt text-emerald-500"></i>Preview Slip Rekap Shift (${s?"80mm":"58mm"})</span>
                <button onclick="document.getElementById('pos-shift-receipt-modal')?.remove()" class="w-7 h-7 rounded-lg bg-slate-200/60 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 text-sm leading-none flex items-center justify-center cursor-pointer">×</button>
            </div>
            <div id="pos-shift-receipt-paper-box" class="p-4 overflow-y-auto flex-1 font-mono text-[11px] bg-slate-50/60 dark:bg-slate-950 text-slate-800 dark:text-slate-200 space-y-1.5 select-text">
                <div class="text-center font-bold text-sm uppercase">${u(r)}</div>
                ${o?`<div class="text-center text-[10px] text-slate-500">${u(o)}</div>`:""}
                ${n?`<div class="text-center text-[10px] text-slate-500">WA: ${u(n)}</div>`:""}
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <div class="text-center font-black text-xs uppercase">${u(p)}</div>
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <div>No Shift: <b>#${u(e.shiftNo||e.id)}</b></div>
                <div>Kasir   : ${u(e.cashierName)}</div>
                <div>Mulai   : ${u(c)}</div>
                <div>Selesai : ${u(f)}</div>
                <div>Durasi  : ${u(T)}</div>
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <div class="font-bold">RINGKASAN PENJUALAN:</div>
                <div class="flex justify-between"><span>Total Struk</span><span>${e.txCount||0} Trx</span></div>
                <div class="flex justify-between"><span>Total Barang</span><span>${Ut(e.itemCount||0)} Item</span></div>
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-1"></div>
                <div class="flex justify-between"><span>Tunai (Cash)</span><span>${h(e.cashSales||0)}</span></div>
                <div class="flex justify-between"><span>QRIS</span><span>${h(e.qrisSales||0)}</span></div>
                <div class="flex justify-between"><span>Transfer Bank</span><span>${h(e.bankSales||0)}</span></div>
                <div class="flex justify-between"><span>Tempo (Piutang)</span><span>${h(e.tempoSales||0)}</span></div>
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-1"></div>
                <div class="flex justify-between font-black text-xs pt-0.5"><span>TOTAL OMSET</span><span style="color:var(--color-primary)">${h(e.totalSales||0)}</span></div>
                ${(e.discountTotal||0)>0?`<div class="flex justify-between text-rose-500"><span>Diskon Toko</span><span>-${h(e.discountTotal)}</span></div>`:""}
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <div class="font-bold">REKONSILIASI KAS LACI:</div>
                <div class="flex justify-between"><span>Modal Awal</span><span>${h(e.startingCash)}</span></div>
                <div class="flex justify-between"><span>Penjualan Tunai</span><span>${h(e.cashSales||0)}</span></div>
                <div class="flex justify-between font-bold"><span>Kas Sistem</span><span>${h(k)}</span></div>
                ${t?"":`
                <div class="flex justify-between font-bold"><span>Kas Fisik Dihitung</span><span>${h(d)}</span></div>
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-1"></div>
                <div class="flex justify-between font-black text-xs ${g===0?"text-emerald-600":g>0?"text-amber-600":"text-rose-600"}">
                    <span>SELISIH KAS</span>
                    <span>${O}</span>
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
                <button onclick="window.executeShiftPrintDirect()" class="flex-1 py-2.5 rounded-xl text-white font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-md transition-all active:scale-95" style="background:var(--color-primary)">
                    <i class="fa-solid fa-print"></i> Cetak Sekarang
                </button>
            </div>
        </div>
    </div>`)},lt=()=>{const e=typeof te=="function"?te():{paperSize:"58mm",deviceType:"system"},t=i("pos-shift-receipt-paper-box");if(!t)return;let a=i("thermal-print-section");a||(a=document.createElement("div"),a.id="thermal-print-section",document.body.appendChild(a));const s=e.paperSize==="80mm";if(a.innerHTML=`<div style="width:${s?"80mm":"58mm"};font-family:'Courier New',Courier,monospace;font-size:11px;line-height:1.2;color:#000;background:#fff;padding:4px;">${t.innerHTML}</div>`,e.deviceType==="rawbt"&&window.AndroidNativeApp&&typeof window.AndroidNativeApp.printRawBT=="function"){const r=t.innerText,o=btoa(unescape(encodeURIComponent(r)));window.AndroidNativeApp.printRawBT(o)}else window.AndroidNativeApp&&typeof window.AndroidNativeApp.print=="function"?window.AndroidNativeApp.print():window.print()},Te=()=>{const e=[i("pos-shift-btn-storefront"),i("pos-shift-btn-admin")],t=B();e.forEach(a=>{a&&(t&&t.status==="open"?a.id==="pos-shift-btn-storefront"?a.innerHTML=`
                <button onclick="window.openPOSShiftSummaryModal()" class="h-8 px-2 sm:px-2.5 rounded-xl bg-black/15 hover:bg-black/25 text-white border border-white/20 transition-all cursor-pointer shadow-xs active:scale-95 inline-flex items-center gap-1 sm:gap-1.5 whitespace-nowrap shrink-0" title="Klik untuk lihat ringkasan shift (X-Report)">
                    <i class="fa-solid fa-cash-register text-emerald-300 text-xs"></i>
                    <span class="hidden sm:inline text-xs font-medium">Shift: </span>
                    <b class="text-white text-xs whitespace-nowrap">${h(t.startingCash)}</b>
                </button>`:a.innerHTML=`
                <button onclick="window.openPOSShiftSummaryModal()" class="h-8 px-2.5 sm:px-3 rounded-xl text-xs font-bold bg-[rgba(var(--color-primary-rgb),0.1)] hover:bg-[rgba(var(--color-primary-rgb),0.18)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.25)] inline-flex items-center gap-1.5 transition-all cursor-pointer active:scale-95 whitespace-nowrap shrink-0 shadow-2xs" title="Klik untuk lihat ringkasan shift (X-Report)">
                    <i class="fa-solid fa-cash-register text-xs"></i>
                    <span class="hidden sm:inline font-medium">Shift: </span>
                    <b class="font-black whitespace-nowrap">${h(t.startingCash)}</b>
                </button>`:a.id==="pos-shift-btn-storefront"?a.innerHTML=`
                <button onclick="window.openPOSOpenShiftModal()" class="h-8 px-2.5 sm:px-3 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs inline-flex items-center gap-1.5 transition-all active:scale-95 shadow-xs cursor-pointer border border-white/25 backdrop-blur-xs whitespace-nowrap shrink-0" title="Buka shift kasir baru">
                    <span class="w-1.5 h-1.5 rounded-full bg-amber-300 animate-pulse"></span>
                    <i class="fa-solid fa-wallet text-amber-300 text-xs"></i>
                    <span class="text-xs font-black whitespace-nowrap">Buka Shift</span>
                </button>`:a.innerHTML=`
                <button onclick="window.openPOSOpenShiftModal()" class="h-8 px-2.5 sm:px-3 rounded-xl text-xs font-bold bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/40 dark:hover:bg-amber-900/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 inline-flex items-center gap-1.5 transition-all cursor-pointer active:scale-95 animate-pulse whitespace-nowrap shrink-0 shadow-2xs" title="Buka shift kasir baru">
                    <i class="fa-solid fa-wallet text-xs"></i>
                    <span class="whitespace-nowrap">Buka Shift</span>
                </button>`)})},Da=async e=>{const t=typeof e=="string"?i(e):e;t&&(t.innerHTML=`
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
    </div>`,await dt())},dt=async()=>{const e=i("admin-shift-list-target");if(e)try{const t=await y.collection("freshmart").doc("cms_data").collection("pos_shifts").orderBy("startTime","desc").limit(50).get();if(t.empty){e.innerHTML=`
            <div class="text-center py-14 p-6 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-slate-400 dark:text-slate-500">
                <i class="fa-solid fa-clipboard-list text-3xl mb-2"></i>
                <p class="font-bold text-xs">Belum ada riwayat shift kasir tercatat</p>
                <p class="text-[11px] mt-0.5">Shift yang dibuka dan ditutup oleh kasir akan otomatis terarsip di sini.</p>
            </div>`;return}const a=t.docs.map(s=>{const r=s.data(),o=r.status==="closed",n=r.difference||0,l=o?n===0?'<span class="px-2.5 py-1 rounded-full text-[10px] font-black bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 whitespace-nowrap shrink-0">PAS</span>':n>0?`<span class="px-2.5 py-1 rounded-full text-[10px] font-black bg-amber-100 dark:bg-amber-950/70 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60 whitespace-nowrap shrink-0">+${h(n)}</span>`:`<span class="px-2.5 py-1 rounded-full text-[10px] font-black bg-rose-100 dark:bg-rose-950/70 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800/60 whitespace-nowrap shrink-0">-${h(Math.abs(n))}</span>`:'<span class="px-2.5 py-1 rounded-full text-[10px] font-black bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 whitespace-nowrap shrink-0 tracking-wide">SEDANG BERJALAN</span>',p=new Date(r.startTime).toLocaleString("id-ID",{dateStyle:"medium",timeStyle:"short"}),c=JSON.stringify(r).replace(/"/g,"&quot;");return`
            <div class="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-800/95 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:shadow-xs transition-all space-y-3">
                <div class="flex items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-700/60 pb-3">
                    <div class="flex items-center gap-2.5 min-w-0">
                        <div class="w-9 h-9 rounded-2xl flex items-center justify-center text-xs text-white shrink-0 shadow-2xs ${o?"bg-slate-700 dark:bg-slate-600":""}" style="${o?"":"background: var(--color-primary)"}">
                            <i class="fa-solid fa-cash-register"></i>
                        </div>
                        <div class="min-w-0">
                            <span class="font-mono font-black text-xs text-slate-900 dark:text-white whitespace-nowrap block truncate">#${u(r.shiftNo||r.id)}</span>
                            <span class="text-[10px] text-slate-400 dark:text-slate-500 whitespace-nowrap block truncate">${p}</span>
                        </div>
                    </div>
                    <div class="flex items-center gap-2 shrink-0">
                        ${l}
                        <button onclick="window.printShiftSettlementReceipt(${c}, ${!o})" class="w-8 h-8 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700/80 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-200 text-xs flex items-center justify-center transition-all cursor-pointer shrink-0 shadow-2xs active:scale-95" title="Preview & Cetak Slip">
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
                        <span class="font-bold text-slate-800 dark:text-slate-200 block mt-0.5">${h(r.startingCash)}</span>
                    </div>
                    <div class="p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/70">
                        <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500 block">Total Omset</span>
                        <span class="font-black text-emerald-600 dark:text-emerald-400 block mt-0.5">${h(r.totalSales||0)}</span>
                    </div>
                    <div class="p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/70">
                        <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500 block">Kas Fisik Laci</span>
                        <span class="font-black text-slate-900 dark:text-white block mt-0.5">${h(r.actualCash!==void 0?r.actualCash:(r.startingCash||0)+(r.cashSales||0))}</span>
                    </div>
                </div>

                ${r.closingNotes?`<div class="text-[11px] text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/40 p-2.5 rounded-2xl border border-slate-100 dark:border-slate-800/70"><b>Catatan:</b> ${u(r.closingNotes)}</div>`:""}
            </div>`}).join("");e.innerHTML=a}catch(t){console.error("[POS Shift] Gagal memuat daftar shift admin:",t),e.innerHTML=`
        <div class="text-center py-10 text-rose-500 text-xs">
            <i class="fa-solid fa-triangle-exclamation text-2xl mb-1"></i>
            <p>Gagal memuat laporan shift: ${u(t.message)}</p>
        </div>`}},Ba=(e,t)=>{Pa("Hapus Data Shift",`Hapus shift #${t}? Data akan dihapus permanen dari cloud dan tidak bisa dikembalikan.`,async()=>{try{await y.collection("freshmart").doc("cms_data").collection("pos_shifts").doc(e).delete(),w("Data shift berhasil dihapus.","success"),await dt()}catch(a){console.error("[POS Shift] Gagal menghapus shift:",a),w("Gagal menghapus: "+a.message,"error")}},"Ya, Hapus")};window.getActiveShift=B;window.saveActiveShift=ae;window.clearActiveShift=Se;window.getLastClosedShift=Aa;window.isShiftActive=se;window.getCurrentCashierIdentity=ge;window.isShiftOwnedByCashier=me;window.findActiveShiftInCloud=_e;window.syncActiveShiftFromCloud=X;window.listenActiveShiftCloud=ie;window.detachActiveShiftListener=Be;window.openPOSOpenShiftModal=R;window.closePOSOpenShiftModal=he;window.posSetStartCashPreset=Oa;window.posUpdateStartCashChips=zt;window.confirmStartPOSShift=La;window.recordTransactionToShift=Wt;window.openPOSShiftModal=_;window.openPOSShiftSummaryModal=_;window.closePOSShiftSummaryModal=Ee;window.openPOSCloseShiftModal=nt;window.closePOSCloseShiftModal=Pe;window.setPOSCountMode=ja;window.calcPOSDenominations=Jt;window.updatePOSShiftDiscrepancy=Yt;window.confirmClosePOSShift=Ha;window.printShiftSettlementReceipt=it;window.executeShiftPrintDirect=lt;window.renderShiftHeaderBadge=Te;window.renderAdminShiftReportView=Da;window.loadAdminShiftReports=dt;window.deleteShiftRecord=Ba;let It=!1;const Xt=()=>It?Promise.resolve():Sa(()=>import("./pos-variant-sheet-DnGGNgAm.js"),__vite__mapDeps([0,1])).then(()=>{It=!0});let m=[],J="",ne="",W="grid";try{const e=localStorage.getItem("pos_view_mode");(e==="list"||e==="grid")&&(W=e)}catch{}let x={name:"",phone:"",isMember:!1,memberId:null,isNewTempo:!1},j="cash",N=0,q=0,I="rp",A=0,z="",Dt=null,fe=null,le=null,je=null,xe=null,Ie=!0,Ze="environment",ye=!1,ee=null,Bt="",Ft=0;const ct=e=>{W=e;try{localStorage.setItem("pos_view_mode",e)}catch{}document.querySelectorAll("#pos-view-btn-grid").forEach(t=>{e==="grid"?(t.style.background="var(--color-primary)",t.className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-white shadow-xs"):(t.style.removeProperty("background"),t.className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-slate-500 hover:text-slate-800 dark:text-slate-400")}),document.querySelectorAll("#pos-view-btn-list").forEach(t=>{e==="list"?(t.style.background="var(--color-primary)",t.className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-white shadow-xs"):(t.style.removeProperty("background"),t.className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-slate-500 hover:text-slate-800 dark:text-slate-400")}),F()},de=e=>Math.max(0,parseInt(e)||0),Ke=e=>{if(e==null)return 0;typeof e=="string"&&(e=e.replace(",",".").trim());const t=parseFloat(e);return isNaN(t)?0:Math.max(0,parseFloat(t.toFixed(3)))},$=e=>{const t=parseFloat(e)||0;return parseFloat(t.toFixed(3)).toString()},v=e=>Ca(e),re=()=>m.reduce((e,t)=>e+t.subtotal,0),V=()=>{if(I==="percent"){const e=Math.min(100,Math.max(0,parseFloat(A)||0));return Math.round(re()*e/100)}return Math.min(re(),de(A||q))},H=()=>Math.max(0,re()-V()),Zt=()=>N-H(),we=e=>{if(!e)return{isManaged:!1,totalStock:0,isOutOfStock:!0,isLowStock:!1};if(!(b?.store?.useStock!==!1))return{isManaged:!1,totalStock:9999,isOutOfStock:!1,isLowStock:!1};let a=0;return Array.isArray(e.variants)&&e.variants.length>0?a=e.variants.reduce((s,r)=>s+(r&&r.stock!=null&&parseFloat(r.stock)||0),0):a=parseFloat(e.stock)||0,{isManaged:!0,totalStock:a,isOutOfStock:a<=0,isLowStock:a>0&&a<=5}},U=()=>{try{const e=window.AudioContext||window.webkitAudioContext;if(!e)return;const t=new e,a=t.createOscillator(),s=t.createGain();a.type="sine",a.frequency.setValueAtTime(1400,t.currentTime),s.gain.setValueAtTime(.08,t.currentTime),s.gain.exponentialRampToValueAtTime(1e-4,t.currentTime+.08),a.connect(s),s.connect(t.destination),a.start(),a.stop(t.currentTime+.08),setTimeout(()=>{t.close().catch(()=>{})},150)}catch{}},Fa=(e,t)=>{if(!e||!e.wholesale||!e.wholesale.length)return null;const a=[...e.wholesale].sort((s,r)=>r.minQty-s.minQty);for(const s of a)if(t>=parseFloat(s.minQty))return parseFloat(s.price);return null},Z=e=>{if(!e.isVariant){const t=(b.products||[]).find(s=>s&&String(s.id)===String(e.id)),a=t?Fa(t,e.qty):null;a!==null?(e.basePrice=e.basePrice||e.price,e.price=a,e.isWholesale=!0):(e.basePrice&&(e.price=e.basePrice),e.isWholesale=!1)}return e.subtotal=Math.max(0,e.price*e.qty-de(e.discount)),e},Ra=()=>{const e=new Date,t=a=>String(a).padStart(2,"0");return`POS-${e.getFullYear()}${t(e.getMonth()+1)}${t(e.getDate())}-${Date.now().toString(36).toUpperCase()}`},ea=()=>{fe&&clearInterval(fe);const e=()=>{const a=new Date().toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit",second:"2-digit"})+" WIB";document.querySelectorAll("#pos-live-clock").forEach(s=>{s.textContent=a})};e(),fe=setInterval(e,1e3)},ta=()=>{fe&&(clearInterval(fe),fe=null)};window.stopPOSClock=ta;const qe=()=>{window.__posBarcodeFn&&(document.removeEventListener("keydown",window.__posBarcodeFn),window.__posBarcodeFn=null)},aa=()=>{qe(),window.__posBarcodeFn=e=>{if(!e||typeof e.key!="string")return;const t=window.curViewName||"";if(!(t==="view-pos-cashier"||t==="view-admin"&&window.cTab==="pos"))return;if(e.key==="F4"){e.preventDefault();const r=i("pos-search-input");r&&(r.focus(),r.select());return}if(e.key==="F6"||e.key==="F7"){e.preventDefault(),Ge();return}if(e.key==="F8"){e.preventDefault(),Me();return}if(e.key==="F9"){e.preventDefault(),i("pos-camera-scanner-modal")?ce():Je();return}if(e.key==="F10"){e.preventDefault(),se()?_():typeof X=="function"?X().then(r=>{r&&r.status==="open"?_():R()}).catch(()=>R()):R();return}const s=document.activeElement?.tagName?.toLowerCase();if(!(s==="input"||s==="textarea"||s==="select"))if(e.key==="Enter"){if(z&&z.length>=3){const r=z.trim().toLowerCase(),o=(b.products||[]).find(n=>n&&n.isActive!=="false"&&n.isActive!==!1&&(n.barcode&&n.barcode.toLowerCase()===r||n.sku&&n.sku.toLowerCase()===r||n.id&&String(n.id).toLowerCase()===r));if(o)Ve(o.id),U(),w(`Ditambahkan: ${o.name}`,"success");else{const n=i("pos-search-input");n&&(n.value=z,J=z,F()),w("Barcode tidak ditemukan di katalog","warning")}z=""}}else e.key&&e.key.length===1&&(z=(z||"")+e.key,clearTimeout(Dt),Dt=setTimeout(()=>{z=""},150))},document.addEventListener("keydown",window.__posBarcodeFn)},Ve=e=>{const t=(b.products||[]).find(o=>o&&String(o.id)===String(e));if(!t)return;if(t.variants&&t.variants.length>0){Xt().then(()=>{typeof window.openPOSVariantSheet=="function"&&window.openPOSVariantSheet(e)});return}const s=we(t);s.isManaged&&s.isOutOfStock&&w(`Peringatan: Stok "${t.name}" habis di etalase/gudang!`,"warning");const r=m.find(o=>String(o.id)===String(e)&&!o.isVariant);if(r){const o=parseFloat((r.qty+1).toFixed(3));if(s.isManaged&&o>s.totalStock){w(`Stok maksimal "${t.name}" hanya ${$(s.totalStock)} ${t.unit||"pcs"}`,"warning");return}r.qty=o,Z(r)}else{const o=parseFloat(t.price)||0;m.push(Z({id:t.id,name:t.name,price:o,basePrice:o,qty:1,discount:0,subtotal:o,isVariant:!1,isWholesale:!1}))}U(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"),M()},sa=(e,t)=>{const a=(b.products||[]).find(n=>n&&String(n.id)===String(e));if(!a)return;const s=we(a),r=Ke(t)||1,o=m.find(n=>String(n.id)===String(e)&&!n.isVariant);if(o){const n=parseFloat((o.qty+r).toFixed(3));if(s.isManaged&&n>s.totalStock){w(`Stok maksimal "${a.name}" hanya ${$(s.totalStock)} ${a.unit||"pcs"}`,"warning");return}o.qty=n,Z(o)}else{const n=parseFloat(a.price)||0,l=Z({id:a.id,name:a.name,price:n,basePrice:n,qty:r,discount:0,subtotal:n*r,isVariant:!1,isWholesale:!1});m.push(l)}U(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"),M()},ra=(e,t,a,s,r=1)=>{const o=`${e}__v${s}`,n=Ke(r)||1,l=m.find(p=>p.cartKey===o);if(l)l.qty=parseFloat((l.qty+n).toFixed(3)),Z(l);else{const c=`${(b.products||[]).find(f=>f&&String(f.id)===String(e))?.name||e} — ${t}`;m.push(Z({id:e,cartKey:o,name:c,variantName:t,variantIdx:s,price:a,basePrice:a,qty:n,discount:0,subtotal:a*n,isVariant:!0,isWholesale:!1}))}U(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"),M()},oa=(e,t)=>{const a=m.find(r=>(r.cartKey||String(r.id))===String(e));if(!a)return;const s=parseFloat((a.qty+t).toFixed(3));if(s<=0){Ue(e);return}if(t>0&&!a.isVariant){const r=(b.products||[]).find(o=>o&&String(o.id)===String(a.id));if(r){const o=we(r);if(o.isManaged&&s>o.totalStock){w(`Stok maksimal tersedia: ${$(o.totalStock)} ${r.unit||"pcs"}`,"warning");return}}}a.qty=s,Z(a),t>0&&U(),M()},na=(e,t)=>{const a=m.find(r=>(r.cartKey||String(r.id))===String(e));if(!a)return;let s=Ke(t);if(s<=0){Ue(e);return}if(!a.isVariant){const r=(b.products||[]).find(o=>o&&String(o.id)===String(a.id));if(r){const o=we(r);o.isManaged&&s>o.totalStock&&(w(`Stok maksimal tersedia: ${$(o.totalStock)} ${r.unit||"pcs"}`,"warning"),s=o.totalStock)}}a.qty=s,Z(a),M()},ia=(e,t)=>{const a=m.find(s=>(s.cartKey||String(s.id))===String(e));a&&(a.discount=Math.min(de(t),a.price*a.qty),Z(a),M())},Ue=e=>{m=m.filter(t=>(t.cartKey||String(t.id))!==String(e)),M(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light")},la=()=>{if(m.length===0)return;const e=()=>{m=[],q=0,A=0,I="rp",M(),w("Keranjang kasir dikosongkan.")};typeof window.showConfirm=="function"?window.showConfirm("Kosongkan Keranjang","Hapus semua item dari transaksi saat ini?",e,"Ya, Kosongkan",!0):e()},Ce=(e="hold")=>{try{const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const a=new t,s=a.createOscillator(),r=a.createGain();s.type="sine";const o=a.currentTime;e==="hold"?(s.frequency.setValueAtTime(659.25,o),s.frequency.exponentialRampToValueAtTime(880,o+.1)):(s.frequency.setValueAtTime(880,o),s.frequency.exponentialRampToValueAtTime(1174.66,o+.1)),r.gain.setValueAtTime(.08,o),r.gain.exponentialRampToValueAtTime(1e-4,o+.16),s.connect(r),r.connect(a.destination),s.start(),s.stop(o+.16),setTimeout(()=>{a.close().catch(()=>{})},200)}catch{}},Na=e=>{if(!e)return"";const t=Math.floor((Date.now()-e)/1e3);if(t<45)return"Baru saja";const a=Math.floor(t/60);if(a<60)return`${a} mnt lalu`;const s=Math.floor(a/60);return s<24?`${s} jam lalu`:new Date(e).toLocaleDateString("id-ID",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})};let P=[];try{const e=localStorage.getItem("pos_held_carts");if(e){const t=JSON.parse(e);Array.isArray(t)&&(P=t)}}catch{P=[]}const Qe=()=>{try{localStorage.setItem("pos_held_carts",JSON.stringify(P))}catch{}pe()},pe=()=>{const e=P.length,t=i("pos-held-btn-storefront"),a=i("pos-held-btn-admin");t&&(e>0?t.innerHTML=`
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
            </button>`)},Ge=()=>{if(m.length===0){w("Keranjang masih kosong, tidak ada transaksi untuk ditahan.","warning");return}const e=x?.name?`Antrean #${P.length+1} — ${x.name}`:`Antrean #${P.length+1}`,t=parseFloat(m.reduce((s,r)=>s+(parseFloat(r.qty)||0),0).toFixed(3)),a=H();ke(!0),typeof window.pushModalHistory=="function"&&window.pushModalHistory("posHoldPrompt"),document.getElementById("pos-hold-prompt-modal")?.remove(),document.body.insertAdjacentHTML("beforeend",`
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
                        <p class="font-black text-slate-800 dark:text-slate-100 text-sm mt-0.5">${$(t)} item</p>
                    </div>
                    <div class="text-right">
                        <p class="text-[10px] font-bold text-amber-700 dark:text-amber-300">Total Tagihan</p>
                        <p class="font-black text-sm" style="color:var(--color-primary)">${v(a)}</p>
                    </div>
                </div>
                <div>
                    <label class="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1.5 block">Label / Catatan Antrean Pelanggan</label>
                    <input id="pos-hold-note-input" type="text" value="${u(e)}" placeholder="Contoh: Bpk Budi (ambil barang lagi)..."
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
    </div>`),setTimeout(()=>{const s=i("pos-hold-note-input");s&&(s.focus(),s.select())},50)},ze=(e=!1)=>{const t=i("pos-hold-prompt-modal");t&&(!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("posHoldPrompt",!1,()=>t.remove()):t.remove())},pt=()=>{if(m.length===0)return;const t=(i("pos-hold-note-input")?.value||"").trim()||`Antrean #${P.length+1}`,a={id:`HELD-${Date.now().toString(36).toUpperCase()}`,time:Date.now(),note:t,cart:JSON.parse(JSON.stringify(m)),globalDisc:V(),discountType:I,discountVal:A,customer:{...x},total:H(),subtotal:re(),itemCount:parseFloat(m.reduce((s,r)=>s+(parseFloat(r.qty)||0),0).toFixed(3))};P.unshift(a),Qe(),m=[],q=0,A=0,I="rp",x={name:"",phone:"",isMember:!1,memberId:null,isNewTempo:!1},ze(),M(),F(),Ce("hold"),w(`Antrean "${t}" berhasil diparkir!`,"success")},Me=(e=!1)=>{!e&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("posHeldModal"),document.getElementById("pos-held-list-modal")?.remove();const t=P.length,a=t===0?`
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
            ${P.map((s,r)=>{const o=u(s.id),n=(s.cart||[]).slice(0,3).map(p=>`${u(p.name)} (${$(p.qty)}x)`).join(", "),l=(s.cart||[]).length>3?` +${s.cart.length-3} lainnya`:"";return`
                <div class="p-3.5 sm:p-4 hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div class="min-w-0 flex-1">
                        <div class="flex items-center gap-2 mb-1 flex-wrap">
                            <span class="px-2 py-0.5 rounded-lg bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 font-black text-[10px] uppercase">
                                #${r+1}
                            </span>
                            <h4 class="font-black text-xs sm:text-sm text-slate-900 dark:text-white truncate" title="${u(s.note)}">
                                ${u(s.note)}
                            </h4>
                            <span class="text-[10px] text-slate-400">• ${Na(s.time)}</span>
                        </div>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                            <i class="fa-solid fa-box-open mr-1 text-[10px] opacity-70"></i>
                            <span>${n}${l}</span>
                        </p>
                        <div class="flex items-center gap-3 mt-1.5 text-xs">
                            <span class="text-slate-500 font-medium">${$(s.itemCount)} item</span>
                            <span class="text-slate-300 dark:text-slate-700">•</span>
                            <span class="font-black" style="color:var(--color-primary)">${v(s.total)}</span>
                            ${(s.globalDisc||0)>0?`<span class="text-[10px] text-rose-500 font-bold">(Disc: ${v(s.globalDisc)})</span>`:""}
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
    </div>`)},Ae=(e=!1)=>{const t=i("pos-held-list-modal");t&&(!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("posHeldModal",!1,()=>t.remove()):t.remove())},ut=e=>{const t=P.findIndex(a=>a.id===e);if(t===-1){w("Transaksi tertahan tidak ditemukan.","warning");return}if(m.length>0){document.getElementById("pos-recall-confirm-modal")?.remove(),document.body.insertAdjacentHTML("beforeend",`
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
        </div>`);return}bt(t)},bt=e=>{const t=P[e];t&&(m=JSON.parse(JSON.stringify(t.cart||[])),I=t.discountType||"rp",A=t.discountVal!==void 0?t.discountVal:t.globalDisc||0,q=V(),x=t.customer?{...t.customer}:{name:"",phone:"",isMember:!1,memberId:null,isNewTempo:!1},P.splice(e,1),Qe(),Ae(),M(),F(),Ce("recall"),w(`Antrean "${t.note}" berhasil dipanggil kembali!`,"success"))},ft=e=>{document.getElementById("pos-recall-confirm-modal")?.remove();const t=x?.name?`Antrean #${P.length+1} — ${x.name}`:`Antrean #${P.length+1}`,a={id:`HELD-${Date.now().toString(36).toUpperCase()}`,time:Date.now(),note:t,cart:JSON.parse(JSON.stringify(m)),globalDisc:V(),discountType:I,discountVal:A,customer:{...x},total:H(),subtotal:re(),itemCount:parseFloat(m.reduce((r,o)=>r+(parseFloat(o.qty)||0),0).toFixed(3))};P.unshift(a);const s=P.findIndex(r=>r.id===e);s!==-1?bt(s):(Qe(),Ae())},xt=e=>{document.getElementById("pos-recall-confirm-modal")?.remove();const t=P.findIndex(a=>a.id===e);t!==-1&&bt(t)},mt=e=>{const t=P.find(a=>a.id===e);t&&(document.getElementById("pos-delete-confirm-modal")?.remove(),document.body.insertAdjacentHTML("beforeend",`
    <div id="pos-delete-confirm-modal" class="fixed inset-0 z-[10005] flex items-center justify-center p-4" style="background:rgba(15,23,42,0.75);backdrop-filter:blur(4px)">
        <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-xs border border-slate-200 dark:border-slate-800 p-6 text-center transform transition-all">
            <div class="w-14 h-14 rounded-2xl bg-rose-50 dark:bg-rose-950/40 text-rose-500 border border-rose-200 dark:border-rose-900/50 flex items-center justify-center mx-auto mb-3.5 text-2xl shadow-inner">
                <i class="fa-solid fa-trash-can"></i>
            </div>
            <h4 class="font-black text-sm text-slate-900 dark:text-white mb-1.5">Hapus Antrean Ini?</h4>
            <p class="text-xs text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
                Antrean <span class="font-bold text-slate-800 dark:text-slate-200">"${u(t.note)}"</span> (${t.itemCount} item • ${v(t.total)}) akan dihapus permanen.
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
    </div>`))},ht=e=>{document.getElementById("pos-delete-confirm-modal")?.remove();const t=P.find(a=>a.id===e);P=P.filter(a=>a.id!==e),Qe(),w(`Antrean "${t?.note||""}" berhasil dihapus.`,"info"),Me(!0)},gt=()=>{const e=i("pos-mobile-cart-drawer"),t=i("pos-mobile-cart-sheet");e&&t&&(e.classList.remove("opacity-0","pointer-events-none"),e.classList.add("opacity-100"),t.classList.remove("translate-y-full"),t.classList.add("translate-y-0"),typeof window.pushModalHistory=="function"&&window.pushModalHistory("posCartDrawer"),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},ke=(e=!1)=>{const t=i("pos-mobile-cart-drawer"),a=i("pos-mobile-cart-sheet");if(t&&a){const s=()=>{a.classList.add("translate-y-full"),a.classList.remove("translate-y-0"),t.classList.add("opacity-0","pointer-events-none"),t.classList.remove("opacity-100")};!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("posCartDrawer",!1,s):s()}},_a=e=>{if(!e)return"";if(e.img&&typeof e.img=="string")return Xe(e.img,"w150-rw");const t=(b?.products||[]).find(a=>a&&String(a.id)===String(e.id));return t&&t.img&&typeof t.img=="string"?Xe(t.img,"w150-rw"):""},F=()=>{try{if(!b?.products||!b.products.length)try{const n=JSON.parse(localStorage.getItem("freshmart_products")||"null");Array.isArray(n)&&n.length>0&&(b||(window.appData={}),b.products=n)}catch{}const e=Array.isArray(b?.products)?b.products:[],t=e.filter(n=>{if(!n||n.isActive==="false"||n.isActive===!1||ne&&n.category!==ne)return!1;if(J){const l=String(J).toLowerCase(),p=String(n.name||"").toLowerCase(),c=String(n.barcode||"").toLowerCase(),f=String(n.sku||"").toLowerCase();return p.includes(l)||c.includes(l)||f.includes(l)}return!0}),a=e.filter(n=>n&&n.isActive!=="false"&&n.isActive!==!1&&n.category).map(n=>String(n.category).trim()).filter(n=>n.length>0),r=["Semua",...new Set(a)].map(n=>{const l=n==="Semua",p=l?!ne:ne===n;return`<button onclick="window.posCatFilter('${u(l?"":n)}')" class="shrink-0 px-3.5 py-1.5 rounded-xl text-[11px] font-black uppercase tracking-wider border transition-all active:scale-95 shadow-2xs ${p?"text-white border-transparent":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/50"}" style="${p?"background:var(--color-primary)":""}">${u(n)}</button>`}).join(""),o=t.length===0?`<div class="col-span-full flex flex-col items-center justify-center py-20 text-slate-400 dark:text-slate-600">
                 <div class="w-16 h-16 rounded-3xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 mb-3 shadow-inner">
                   <i class="fa-solid fa-box-open text-2xl"></i>
                 </div>
                 <p class="font-bold text-sm text-slate-600 dark:text-slate-400">Produk Tidak Ditemukan</p>
                 <p class="text-xs text-slate-400 mt-0.5">Coba gunakan kata kunci pencarian atau kategori lain</p>
               </div>`:t.map(n=>{if(!n)return"";const l=!!(n.img&&typeof n.img=="string"&&n.img.trim()),p=l?Xe(n.img,"w300-rw"):"",c=Array.isArray(n.variants)&&n.variants.length>0,f=Array.isArray(n.wholesale)&&n.wholesale.length>0,T=m.filter(S=>S&&String(S.id)===String(n.id)),k=parseFloat(T.reduce((S,D)=>S+(D&&D.qty&&parseFloat(D.qty)||0),0).toFixed(3)),d=u(String(n.id!=null?n.id:"")),g=we(n),O=u(String(n.name||"Produk")),E=u(String(n.category||"")),Le=parseFloat(n.price)||0;return W==="list"?`
                    <div class="pos-list-item${k>0?" in-cart":""}${g.isOutOfStock?" opacity-75":""}" onclick="window.posAddToCart('${d}')">
                        <div class="pos-list-thumb">
                            ${l?`<img width="52" height="52" loading="lazy" decoding="async" src="${u(p)}" alt="${O}" onerror="this.onerror=null;this.style.display='none';this.nextElementSibling.style.display='flex';">
                                   <div class="pos-img-placeholder" style="display:none;width:100%;height:100%"><i class="fa-solid fa-box" style="font-size:16px;margin:0"></i></div>`:'<div class="pos-img-placeholder" style="width:100%;height:100%"><i class="fa-solid fa-box" style="font-size:16px;margin:0"></i></div>'}
                            ${k>0?`<div class="pos-qty-badge" style="top:2px;right:2px;min-width:18px;height:18px;font-size:9px;border-width:1.5px">${$(k)}</div>`:""}
                        </div>
                        <div style="flex:1;min-width:0">
                            <div style="display:flex;align-items:center;gap:4px;flex-wrap:wrap;margin-bottom:3px">
                                ${E?`<span style="font-size:9px;text-transform:uppercase;letter-spacing:0.06em;font-weight:700;color:#94a3b8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:80px">${E}</span>`:""}
                                ${c?'<span class="pos-badge pos-badge-varian"><i class="fa-solid fa-layer-group" style="font-size:6px"></i> VARIAN</span>':""}
                                ${f?'<span class="pos-badge pos-badge-grosir"><i class="fa-solid fa-tags" style="font-size:6px"></i> GROSIR</span>':""}
                                ${g.isOutOfStock?'<span class="pos-badge pos-badge-habis"><i class="fa-solid fa-ban" style="font-size:6px"></i> HABIS</span>':""}
                                ${g.isLowStock?`<span class="pos-badge pos-badge-low"><i class="fa-solid fa-triangle-exclamation" style="font-size:6px"></i> SISA ${$(g.totalStock)}</span>`:""}
                            </div>
                            <p class="text-xs font-bold text-slate-800 dark:text-slate-100 truncate" title="${O}">${O}</p>
                            <p style="font-size:12px;font-weight:900;color:var(--color-primary);margin-top:2px">${v(Le)}</p>
                        </div>
                        <button onclick="event.stopPropagation();window.posAddToCart('${d}')" class="pos-add-btn" title="Tambah ke keranjang">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>`:`
                <div class="pos-product-card${k>0?" in-cart":""}${g.isOutOfStock?" opacity-75":""}" onclick="window.posAddToCart('${d}')">
                    <!-- Kotak Gambar Rasio 1:1 Anti-Collapse (aspect-ratio 1:1 + min-height 120px) -->
                    <div class="pos-img-box">
                        <div class="pos-img-badges">
                            ${c?'<span class="pos-badge pos-badge-varian"><i class="fa-solid fa-layer-group" style="font-size:6px"></i> VARIAN</span>':""}
                            ${f?'<span class="pos-badge pos-badge-grosir"><i class="fa-solid fa-tags" style="font-size:6px"></i> GROSIR</span>':""}
                            ${g.isOutOfStock?'<span class="pos-badge pos-badge-habis"><i class="fa-solid fa-ban" style="font-size:6px"></i> HABIS</span>':""}
                            ${g.isLowStock?`<span class="pos-badge pos-badge-low"><i class="fa-solid fa-triangle-exclamation" style="font-size:6px"></i> SISA ${$(g.totalStock)}</span>`:""}
                        </div>
                        ${k>0?`<div class="pos-qty-badge">${$(k)}</div>`:""}
                        ${l?`<img width="300" height="300" loading="lazy" decoding="async" src="${u(p)}" alt="${O}"
                                 onerror="this.onerror=null;this.style.display='none';this.nextElementSibling.style.display='flex';">
                               <div class="pos-img-placeholder" style="display:none">
                                 <i class="fa-solid fa-box-open"></i>
                                 <span>${u(n.category||"Toko")}</span>
                               </div>`:`<div class="pos-img-placeholder">
                                 <i class="fa-solid fa-box-open"></i>
                                 <span>${u(n.category||"Produk")}</span>
                               </div>`}
                    </div>
                    <!-- Info Produk -->
                    <div class="pos-card-info">
                        ${E?`<p class="pos-card-cat">${E}</p>`:""}
                        <p class="pos-card-name" title="${O}">${O}</p>
                        <div class="pos-card-footer">
                            <span class="pos-card-price">${v(Le)}</span>
                            <button onclick="event.stopPropagation();window.posAddToCart('${d}')" class="pos-add-btn" title="Tambah ke keranjang">
                                <i class="fa-solid fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>`}).join("");document.querySelectorAll("#pos-cat-filter").forEach(n=>{n.innerHTML=r}),document.querySelectorAll("#pos-catalog-grid").forEach(n=>{n.className=W==="list"?"pos-catalog-list-mode":"pos-catalog-grid-mode",n.innerHTML=o})}catch(e){console.error("[POS] renderCatalog error:",e),document.querySelectorAll("#pos-catalog-grid").forEach(t=>{t.innerHTML=`
                <div class="col-span-full flex flex-col items-center justify-center py-16 text-slate-500">
                    <i class="fa-solid fa-triangle-exclamation text-amber-500 text-3xl mb-3"></i>
                    <p class="font-bold text-sm text-slate-700 dark:text-slate-300">Gagal Memuat Katalog Kasir</p>
                    <p class="text-xs text-slate-400 mt-1 mb-4">${u(e.message||"Terjadi kesalahan")}</p>
                    <button onclick="window.renderCatalog()" class="px-4 py-2 rounded-xl text-xs font-bold text-white shadow-md active:scale-95 cursor-pointer" style="background:var(--color-primary)">
                        <i class="fa-solid fa-arrows-rotate mr-1.5"></i> Coba Muat Ulang
                    </button>
                </div>`})}},M=()=>{const e=parseFloat(m.reduce((d,g)=>d+(parseFloat(g.qty)||0),0).toFixed(3)),t=re(),a=H(),s=v(a),r=v(t),o=m.length===0?`<div class="flex flex-col items-center justify-center h-full py-12 text-slate-300 dark:text-slate-600 select-none">
            <div class="w-16 h-16 rounded-3xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 mb-3 shadow-inner">
                <i class="fa-solid fa-cart-shopping text-2xl"></i>
            </div>
            <p class="text-sm font-bold text-slate-600 dark:text-slate-400">Keranjang Kasir Kosong</p>
            <p class="text-xs text-slate-400 mt-1 text-center max-w-[200px]">Pilih produk di katalog atau scan barcode untuk menambah</p>
           </div>`:m.map(d=>{const g=u(String(d.cartKey||d.id)),O=_a(d),E=d.isVariant&&d.variantName?u(d.name.replace(` — ${d.variantName}`,"")):u(d.name);return`
            <div class="group flex items-start gap-2.5 p-2.5 bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 shadow-xs hover:border-[var(--color-primary)] transition-all">
                <!-- 42px Thumbnail -->
                <div class="w-11 h-11 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-700 shrink-0 border border-slate-200/60 dark:border-slate-700 flex items-center justify-center">
                    ${O?`<img width="44" height="44" loading="lazy" src="${u(O)}" alt="${u(d.name)}" onerror="this.onerror=null; this.style.display='none'; this.nextElementSibling.style.display='flex';" class="w-full h-full object-cover">
                           <div class="hidden w-full h-full items-center justify-center text-slate-400"><i class="fa-solid fa-box text-xs"></i></div>`:'<div class="w-full h-full flex items-center justify-center text-slate-400"><i class="fa-solid fa-box text-xs"></i></div>'}
                </div>
                <!-- Details -->
                <div class="flex-1 min-w-0 pr-1">
                    <p class="text-xs font-bold text-slate-800 dark:text-slate-100 truncate leading-snug" title="${u(d.name)}">${E}</p>
                    <div class="flex items-center gap-1.5 mt-0.5 flex-wrap">
                        ${d.isWholesale?'<span class="inline-flex items-center text-[8px] font-black px-1.5 py-0.5 rounded text-white shadow-2xs" style="background:var(--color-primary)">GROSIR</span>':""}
                        ${d.isVariant?`<span class="inline-flex items-center gap-1 text-[8px] font-black px-1.5 py-0.5 rounded text-white shadow-2xs" style="background:var(--color-primary);opacity:0.95"><i class="fa-solid fa-layer-group text-[7px]"></i>${u(d.variantName||"VARIAN")}</span>`:""}
                        <span class="text-[10px] text-slate-500 font-medium">
                            ${d.isWholesale&&d.basePrice?`<span class="line-through text-slate-400">${v(d.basePrice)}</span> <span class="font-bold" style="color:var(--color-primary)">${v(d.price)}</span>`:v(d.price)}
                        </span>
                    </div>
                    <div class="flex items-center gap-1.5 mt-1.5">
                        <span class="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Diskon:</span>
                        <input type="number" min="0" placeholder="0" value="${d.discount||""}" onchange="window.posSetItemDisc('${g}',this.value)"
                            class="w-16 text-[10px] font-mono font-bold border border-slate-200 dark:border-slate-700 rounded-md px-1.5 py-0.5 bg-slate-50 dark:bg-slate-700/60 text-right focus:outline-none focus:border-[var(--color-primary)] transition-all">
                    </div>
                </div>
                <!-- Stepper & Subtotal -->
                <div class="flex flex-col items-end shrink-0">
                    <div class="flex items-center gap-1">
                        <div class="flex items-center bg-slate-100 dark:bg-slate-700/80 rounded-lg p-0.5 border border-slate-200 dark:border-slate-600 focus-within:border-[var(--color-primary)] transition-colors">
                            <button onclick="window.posUpdateQty('${g}',-1)" class="w-5 h-5 rounded text-slate-600 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-600 font-black text-xs flex items-center justify-center cursor-pointer active:scale-90 transition-all">−</button>
                            <input type="number" step="any" min="0.01" value="${$(d.qty)}" onchange="window.posSetQty('${g}',this.value)"
                                class="w-11 text-center text-[11px] font-black bg-transparent text-slate-800 dark:text-slate-100 focus:outline-none px-0.5">
                            <button onclick="window.posUpdateQty('${g}',1)" class="w-5 h-5 rounded text-slate-600 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-600 font-black text-xs flex items-center justify-center cursor-pointer active:scale-90 transition-all">+</button>
                        </div>
                        <button onclick="window.posRemoveItem('${g}')" class="w-6 h-6 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 flex items-center justify-center text-xs transition-all cursor-pointer" title="Hapus item">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                    <p class="text-xs font-black mt-1.5" style="color:var(--color-primary)">${v(d.subtotal)}</p>
                </div>
            </div>`}).join("");document.querySelectorAll(".pos-cart-items-target").forEach(d=>d.innerHTML=o),document.querySelectorAll(".pos-subtotal-target").forEach(d=>d.textContent=r),document.querySelectorAll(".pos-total-target").forEach(d=>d.textContent=s),document.querySelectorAll(".pos-item-count-target").forEach(d=>d.textContent=$(e));const n=V(),l=v(n);document.querySelectorAll(".pos-disc-val-input").forEach(d=>{document.activeElement!==d&&(d.value=A||"")}),document.querySelectorAll(".pos-global-disc-target").forEach(d=>{document.activeElement!==d&&(d.value=A||"")}),document.querySelectorAll(".pos-disc-preview-target").forEach(d=>{n>0?(d.textContent=`- ${l}`,d.classList.remove("hidden"),d.classList.add("text-rose-500")):(d.textContent="",d.classList.add("hidden"))}),document.querySelectorAll(".pos-disc-type-rp").forEach(d=>{I==="rp"?(d.className="pos-disc-type-rp px-2.5 py-0.5 rounded-md transition-all cursor-pointer font-black text-white shadow-xs text-[10px]",d.style.background="var(--color-primary)",d.style.color="#ffffff"):(d.className="pos-disc-type-rp px-2.5 py-0.5 rounded-md transition-all cursor-pointer text-slate-600 dark:text-slate-300 hover:text-slate-900 font-bold text-[10px]",d.style.background="transparent",d.style.color="")}),document.querySelectorAll(".pos-disc-type-pct").forEach(d=>{I==="percent"?(d.className="pos-disc-type-pct px-2.5 py-0.5 rounded-md transition-all cursor-pointer font-black text-white shadow-xs text-[10px]",d.style.background="var(--color-primary)",d.style.color="#ffffff"):(d.className="pos-disc-type-pct px-2.5 py-0.5 rounded-md transition-all cursor-pointer text-slate-600 dark:text-slate-300 hover:text-slate-900 font-bold text-[10px]",d.style.background="transparent",d.style.color="")}),document.querySelectorAll(".pos-disc-prefix").forEach(d=>{d.textContent=I==="percent"?"%":"Rp",d.style.color="var(--color-primary)"});const p=[5,10,15,20,50],c=[2e3,5e3,1e4,25e3,5e4],f=(d,g)=>I===g&&Number(A)===Number(d),T=I==="percent"?`
        ${p.map(d=>{const g=f(d,"percent");return`<button onclick="window.posApplyQuickDiscount(${d},'percent')" 
                class="px-2.5 py-1 rounded-lg text-[10px] cursor-pointer transition-all active:scale-95 ${g?"text-white shadow-xs font-black":"bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700 font-bold"}"
                style="${g?"background:var(--color-primary);border:1px solid var(--color-primary);":""}">${d}%</button>`}).join("")}
        ${A>0?`<button onclick="window.posApplyQuickDiscount(0,'percent')" class="px-2.5 py-1 rounded-lg bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 text-[10px] font-bold text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800 cursor-pointer transition-all active:scale-95"><i class="fa-solid fa-rotate-left mr-1 text-[9px]"></i>Reset</button>`:""}
        `:`
        ${c.map(d=>{const g=f(d,"rp"),O=`${d/1e3}rb`;return`<button onclick="window.posApplyQuickDiscount(${d},'rp')" 
                class="px-2.5 py-1 rounded-lg text-[10px] cursor-pointer transition-all active:scale-95 ${g?"text-white shadow-xs font-black":"bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700 font-bold"}"
                style="${g?"background:var(--color-primary);border:1px solid var(--color-primary);":""}">${O}</button>`}).join("")}
        ${A>0?`<button onclick="window.posApplyQuickDiscount(0,'rp')" class="px-2.5 py-1 rounded-lg bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 text-[10px] font-bold text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800 cursor-pointer transition-all active:scale-95"><i class="fa-solid fa-rotate-left mr-1 text-[9px]"></i>Reset</button>`:""}
        `;document.querySelectorAll(".pos-disc-chips-target").forEach(d=>d.innerHTML=T),document.querySelectorAll(".pos-pay-btn-target").forEach(d=>{d.disabled=m.length===0;const g=d.querySelector(".btn-text");g&&(g.textContent=m.length>0?`BAYAR — ${s}`:"PROSES PEMBAYARAN")}),document.querySelectorAll(".pos-hold-btn-target").forEach(d=>{d.disabled=m.length===0,m.length===0?d.classList.add("opacity-40","cursor-not-allowed"):d.classList.remove("opacity-40","cursor-not-allowed")}),pe();const k=i("pos-mobile-floating-bar");k&&(m.length>0?(k.classList.remove("translate-y-32","opacity-0","pointer-events-none"),k.classList.add("translate-y-0","opacity-100")):(k.classList.add("translate-y-32","opacity-0","pointer-events-none"),k.classList.remove("translate-y-0","opacity-100"),ke(!0)))},da=()=>{if(m.length===0){w("Keranjang masih kosong!","warning");return}typeof window.pushModalHistory=="function"&&window.pushModalHistory("posPayment"),x={name:"",phone:"",isMember:!1,memberId:null,isNewTempo:!1},j="cash",N=H(),oe(),$e(),document.body.insertAdjacentHTML("beforeend",`
    <div id="pos-pay-modal" class="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4" style="background:rgba(15,23,42,0.65);backdrop-filter:blur(4px)">
      <div class="bg-white dark:bg-slate-900 rounded-t-3xl sm:rounded-3xl shadow-2xl w-full sm:max-w-md max-h-[94vh] flex flex-col overflow-hidden border border-slate-200/80 dark:border-slate-800">
        <!-- Header -->
        <div class="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0 bg-slate-50/60 dark:bg-slate-800/40">
          <div>
            <h2 class="font-black text-base text-slate-900 dark:text-white flex items-center gap-2">
              <i class="fa-solid fa-cash-register" style="color:var(--color-primary)"></i>
              <span>Proses Pembayaran Kasir</span>
            </h2>
            <p class="text-xs text-slate-500 mt-0.5">Total Tagihan: <span class="font-black text-sm" style="color:var(--color-primary)">${v(H())}</span></p>
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
    </div>`),et("cash")},wt=(e=!1)=>{const t=i("pos-pay-modal");t&&(!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("posPayment",!1,()=>t.remove()):t.remove())},ca=(e,t,a)=>{a.forEach(s=>{const r=i(`${e}-${s}`);r&&(s===t?(r.style.background="var(--color-primary)",r.style.color="white",r.style.borderColor="var(--color-primary)",r.classList.add("shadow-xs")):(r.style.removeProperty("background"),r.style.removeProperty("color"),r.style.removeProperty("border-color"),r.classList.remove("shadow-xs")))})},et=e=>{const t=i("pos-pay-detail");if(!t)return;const a=H(),s=`
      <div class="flex justify-between items-center py-2 px-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-700/60 mb-2.5 text-xs">
        <span class="text-slate-500 font-medium">Total yang Harus Dibayar</span>
        <span class="font-black text-sm" style="color:var(--color-primary)">${v(a)}</span>
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
                    <input id="pos-paid-input" type="number" min="0" placeholder="${a}" value="${N||""}"
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
                <div id="pos-change-box" class="mt-2.5 p-3 rounded-2xl border transition-all flex items-center justify-between ${N>=a?"bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800":"bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800"}">
                    <div>
                        <p class="text-[9px] font-black uppercase tracking-wider text-slate-400">Status Kembalian</p>
                        <p id="pos-change-label" class="text-xs font-bold ${N>=a?"text-emerald-700 dark:text-emerald-400":"text-rose-700 dark:text-rose-400"}">
                            ${N>=a?"Kembalian Uang Pembeli:":"Uang Masih Kurang:"}
                        </p>
                    </div>
                    <span id="pos-change-display" class="text-base font-black ${N>=a?"text-emerald-700 dark:text-emerald-400":"text-rose-600 dark:text-rose-400"}">
                        ${v(Math.abs(Zt()))}
                    </span>
                </div>
            </div>
        `}else if(e==="qris"){const r=b.payment?.qrisUrl||"";t.innerHTML=`
          ${s}
          ${r?`<div class="flex flex-col items-center justify-center p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700"><img src="${u(r)}" class="w-48 h-48 object-contain rounded-xl shadow-xs" alt="QRIS"><p class="text-center text-xs font-bold text-slate-600 dark:text-slate-300 mt-2">Arahkan kamera pembeli untuk memindai QRIS</p></div>`:'<div class="p-4 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 text-xs rounded-2xl border border-amber-200 text-center font-bold"><i class="fa-solid fa-triangle-exclamation mr-1.5"></i>QRIS toko belum diatur di menu Pengaturan.</div>'}`}else if(e==="transfer"){const o=(Array.isArray(b.banks)?b.banks:[]).filter(l=>l&&(l.bankName||l.name||l.bank));let n='<option value="">Rekening bank belum diatur di CMS Admin</option>';o.length>0&&(n=o.map(l=>{const p=l.bankName||l.name||l.bank||"Bank",c=l.bankAccount||l.number||l.noRekening||l.account||"",f=l.bankOwner||l.holder||l.atasNama||l.owner||"",T=`${p}${c?" — "+c:""}${f?" a/n "+f:""}`;return`<option value="${u(T)}">${u(T)}</option>`}).join("")),t.innerHTML=`
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
          <input id="pos-dp-input" type="number" min="0" placeholder="0" value="0" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-black text-right bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)]">`)},pa=e=>{x.isMember=e==="member",x.isNewTempo=e==="tempo",ca("pos-ctype",e,["umum","member","tempo"]);const t=i("pos-customer-fields");t&&(e==="umum"?(x.name="",x.phone="",x.memberId=null,x.points=0,t.innerHTML='<input id="pos-cust-name" type="text" placeholder="Nama pembeli (opsional)" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)] focus:bg-white">'):e==="member"?(t.innerHTML=`
          <div class="space-y-2">
            <div class="flex gap-2">
              <div class="relative flex-1">
                <i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
                <input id="pos-cust-phone" type="text" placeholder="Ketik No. HP / Nama / ID Member..."
                  value="${x.isMember?u(x.phone||x.name||""):""}"
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
          </div>`,oe().then(()=>{i("pos-cust-phone")?.value?.trim()&&Oe()})):e==="tempo"&&(x.isMember=!1,kt("tempo"),t.innerHTML=`
          <div class="space-y-2">
            <input id="pos-cust-name" type="text" placeholder="Nama Pelanggan / Rekanan *" required class="w-full border border-amber-300 dark:border-amber-600 rounded-xl px-3 py-2 text-xs bg-amber-50/40 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none">
            <input id="pos-cust-phone" type="tel" placeholder="No. WhatsApp Pelanggan *" required class="w-full border border-amber-300 dark:border-amber-600 rounded-xl px-3 py-2 text-xs bg-amber-50/40 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none">
          </div>`))},kt=e=>{j=e,ca("pos-pay",e,["cash","qris","transfer","tempo"]),et(e),e==="transfer"&&(!b.banks||!b.banks.length)&&$e().then(t=>{j==="transfer"&&t&&t.length>0&&et("transfer")})},vt=e=>{N=de(e);const t=H(),a=N-t,s=i("pos-change-display"),r=i("pos-change-label"),o=i("pos-change-box"),n=i("pos-process-btn");s&&(s.textContent=v(Math.abs(a))),r&&(r.textContent=a>=0?"Kembalian Uang Pembeli:":"Uang Masih Kurang:"),s&&(s.className=`text-base font-black ${a>=0?"text-emerald-700 dark:text-emerald-400":"text-rose-600 dark:text-rose-400"}`),o&&(o.className=`mt-2.5 p-3 rounded-2xl border transition-all flex items-center justify-between ${a>=0?"bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800":"bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800"}`),n&&j==="cash"&&(n.disabled=a<0,n.classList.toggle("opacity-50",a<0))},yt=e=>{const t=i("pos-paid-input");t&&(t.value=e,vt(e),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},$e=async()=>{if(Array.isArray(b.banks)&&b.banks.length>0)return b.banks;try{const e=await y.collection("freshmart").doc("cms_data").get();if(e.exists){const t=e.data();if(Array.isArray(t?.banks)&&t.banks.length>0)return b.banks=t.banks,b.banks}}catch{}return b.banks||[]},oe=async()=>{if(b.customers&&b.customers.length>0)return b.customers;try{const e=await y.collection("freshmart").doc("cms_data").collection("customers").get();return b.customers=e.docs.map(t=>({...t.data(),id:t.id,_docId:t.id})),b.customers}catch{return b.customers||[]}},ua=(e,t)=>{if(!e||!t||!t.length)return[];const a=e.trim().toLowerCase(),s=a.replace(/\D/g,"");let r=s;r.startsWith("62")?r=r.slice(2):r.startsWith("0")&&(r=r.slice(1));const o=[],n=new Set;return t.forEach(l=>{if(!l)return;const p=String(l.id||l._docId||l.phone||"");if(n.has(p))return;const c=String(l.phone||"").replace(/\D/g,"");let f=c;f.startsWith("62")?f=f.slice(2):f.startsWith("0")&&(f=f.slice(1));const T=String(l.name||"").toLowerCase();let k=!1;r.length>=4&&f&&(f===r||f.endsWith(r)||r.endsWith(f)||c.includes(s))&&(k=!0),!k&&(p.toLowerCase()===a||p===s)&&(k=!0),!k&&a.length>=2&&T.includes(a)&&(k=!0),k&&(n.add(p),o.push(l))}),o},Ea=async e=>{if(!e)return null;const t=e.trim(),a=t.replace(/\D/g,"");let s=a;s.startsWith("62")?s=s.slice(2):s.startsWith("0")&&(s=s.slice(1));const r=y.collection("freshmart").doc("cms_data").collection("customers"),n=Array.from(new Set([s?"62"+s:null,s?"0"+s:null,s||null,s?"+62"+s:null,a||null,t].filter(Boolean))).map(async c=>{try{const f=await r.doc(c).get();if(f&&f.exists)return{...f.data(),id:f.id,_docId:f.id}}catch{}return null}),p=(await Promise.all(n)).find(Boolean);if(p){b.customers||(b.customers=[]);const c=b.customers.findIndex(f=>String(f.id||f.phone)===String(p.id||p.phone));return c>-1?b.customers[c]=p:b.customers.push(p),p}try{const c=await r.limit(300).get();if(!c.empty){b.customers=c.docs.map(T=>({...T.data(),id:T.id,_docId:T.id}));const f=ua(e,b.customers);if(f.length>0)return f[0]}}catch{}return null},Fe=e=>{x.isMember=!0,x.name=e.name||"Member Toko",x.phone=e.phone||"",x.memberId=e.id||e._docId||e.phone,x.points=parseFloat(e.points)||0;const t=i("pos-cust-phone");t&&(t.value=e.phone||e.name||"");const a=x.points,s=typeof window.getMemberTier=="function"?window.getMemberTier(a):{badge:"MEMBER RESMI"},r=i("pos-member-result");r&&(r.innerHTML=`
        <div class="p-3 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/30 rounded-2xl border border-emerald-300 dark:border-emerald-700/60 shadow-xs flex items-center justify-between gap-2.5">
          <div class="flex items-center gap-2.5 min-w-0">
            <div class="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs">
              <i class="fa-solid fa-id-card text-base"></i>
            </div>
            <div class="min-w-0">
              <div class="flex items-center gap-1.5 flex-wrap">
                <span class="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-700">${u(s.badge||"VIP")}</span>
                <span class="text-[10px] font-black text-amber-600 dark:text-amber-400 flex items-center gap-0.5"><i class="fa-solid fa-star text-[9px]"></i>${a} Poin</span>
              </div>
              <p class="text-xs font-black text-slate-800 dark:text-white truncate mt-0.5">${u(e.name||"Pelanggan Setia")}</p>
              <p class="text-[10px] text-slate-500 dark:text-slate-400 font-mono">${u(e.phone||"")}</p>
            </div>
          </div>
          <button onclick="window.resetPosMember()" type="button" class="shrink-0 px-2.5 py-1.5 rounded-xl text-[10px] font-bold text-slate-600 hover:text-rose-600 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-all cursor-pointer" title="Ganti Member">
            <i class="fa-solid fa-rotate-left mr-1"></i>Ganti
          </button>
        </div>`),w(`Member terdeteksi: ${e.name} (${a} Poin)`,"success")},St=e=>{const a=(b.customers||[]).find(s=>s&&String(s.id||s._docId||s.phone)===String(e));a&&Fe(a)},Pt=()=>{x.isMember=!1,x.name="",x.phone="",x.memberId=null,x.points=0;const e=i("pos-cust-phone");e&&(e.value="",e.focus());const t=i("pos-member-result");t&&(t.innerHTML="")};let Rt=null;const Tt=()=>{clearTimeout(Rt);const e=i("pos-cust-phone")?.value?.trim()||"";if(!e){if(!x.memberId){const s=i("pos-member-result");s&&(s.innerHTML="")}return}const t=e.replace(/\D/g,"");!(Array.isArray(b.customers)&&b.customers.length>0)&&t.length<10&&e.length<8||(Rt=setTimeout(()=>{Oe()},350))},Oe=async()=>{const t=i("pos-cust-phone")?.value?.trim()||"";if(!t){w("Masukkan nomor HP atau nama member","warning");return}const a=i("pos-member-result"),s=i("pos-member-lookup-btn");s&&(s.disabled=!0,s.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i>'),a&&(a.innerHTML='<div class="p-2.5 text-center text-xs text-slate-400"><i class="fa-solid fa-spinner fa-spin mr-1.5"></i>Memeriksa database member...</div>');try{await oe();const r=ua(t,b.customers||[]);if(r.length===1)Fe(r[0]);else if(r.length>1)a.innerHTML=`
              <div class="space-y-1.5 max-h-44 overflow-y-auto pr-1">
                <p class="text-[10px] font-bold text-slate-500 mb-1">Ditemukan ${r.length} member (klik untuk memilih):</p>
                ${r.map(o=>`
                  <button onclick="window.selectPosMember('${u(o.id||o._docId||o.phone)}')" type="button"
                    class="w-full text-left p-2 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 border border-slate-200 dark:border-slate-700 hover:border-emerald-400 transition-all flex items-center justify-between gap-2 cursor-pointer">
                    <div class="min-w-0">
                      <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${u(o.name||"Member")}</p>
                      <p class="text-[10px] text-slate-500 dark:text-slate-400 font-mono">${u(o.phone||"")}</p>
                    </div>
                    <span class="text-[10px] font-black text-amber-500 shrink-0"><i class="fa-solid fa-star text-[9px]"></i> ${parseFloat(o.points)||0} Poin</span>
                  </button>
                `).join("")}
              </div>
            `;else{const o=await Ea(t);if(o)Fe(o);else{x.isMember=!1,x.name="",x.memberId=null,x.points=0;const l=t.replace(/\D/g,"").length>=8;a.innerHTML=`
                  <div class="p-3 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs space-y-1">
                    <p class="font-bold flex items-center gap-1.5"><i class="fa-solid fa-circle-info"></i> Member Tidak Ditemukan</p>
                    <p class="text-[11px] text-amber-700 dark:text-amber-400">Tidak ada member ditemukan untuk "<b>${u(t)}</b>".</p>
                    ${l?"":`
                      <p class="text-[10px] text-amber-600/90 dark:text-amber-400/80 pt-1 border-t border-amber-200 dark:border-amber-800/60">
                        <i class="fa-solid fa-lightbulb mr-1 text-amber-500"></i><b>Tips Kasir:</b> Masukkan nomor WhatsApp/HP member (contoh: <code>0812...</code>) untuk verifikasi instan.
                      </p>
                    `}
                  </div>`}}}catch(r){console.error("[POS] Error lookupPosMember:",r),a&&(a.innerHTML=`<p class="text-xs text-rose-500 p-2">Gagal memeriksa data: ${u(r.message||"Koneksi error")}</p>`)}finally{s&&(s.disabled=!1,s.innerHTML='<i class="fa-solid fa-magnifying-glass mr-1.5"></i><span>Cek</span>')}},ba=async()=>{if(m.length===0){w("Keranjang kosong!","warning");return}const e=x.isMember?x.name||"Member Toko":i("pos-cust-name")?.value?.trim()||"Pelanggan Umum",t=x.isMember?x.phone||i("pos-cust-phone")?.value?.trim()||"":i("pos-cust-phone")?.value?.trim()||"";if(x.isNewTempo&&!t){w("No. HP wajib diisi untuk tempo!","warning");return}if(j==="cash"&&(N=de(i("pos-paid-input")?.value||0),N<H())){w(`Uang kurang! Minimal ${v(H())}`,"warning");return}x.name=e,x.phone=t;const a=j==="tempo"?de(i("pos-dp-input")?.value||0):0,s=j==="transfer"&&i("pos-bank-sel")?.value||"",r=i("pos-process-btn");r&&(r.disabled=!0,r.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i>Memproses...');const o=b.store?.useStock===!0||b.store?.useStock==="true";if(o)for(const n of m){const l=(b.products||[]).find(c=>String(c.id)===String(n.id));if(!l)continue;const p=parseFloat(n.qty)||0;if(n.variantName&&l.variants){const c=(l.variants||[]).find(T=>T.name===n.variantName),f=parseFloat(c&&c.stock!==void 0?c.stock:0);if(f<p){w(`Stok ${n.name} (${n.variantName}) tidak cukup! Sisa: ${f}`,"warning"),r&&(r.disabled=!1,r.innerHTML='<i class="fa-solid fa-check-circle mr-2"></i>Selesaikan Transaksi');return}}else{const c=parseFloat(l.stock!==void 0?l.stock:0);if(c<p){w(`Stok ${n.name} tidak cukup! Sisa: ${c}`,"warning"),r&&(r.disabled=!1,r.innerHTML='<i class="fa-solid fa-check-circle mr-2"></i>Selesaikan Transaksi');return}}}try{const n=Ra(),l=typeof window.getCashierSession=="function"?window.getCashierSession():null,p=l?.name||b.store?.name||"Kasir",c=l?.uid||window.__currentAdminUid||"admin",f=new Date().toISOString(),T=Ye.firestore.FieldValue.serverTimestamp(),k=j==="tempo"?"Diproses":"Selesai",d=B(),g=d&&d.status==="open"?d.id:null,O=d&&d.status==="open"?d.shiftNo||d.id:null,E={orderId:n,txId:n,source:"pos",channel:"pos",status:k,timestamp:T,dateString:f,dateMs:Date.now(),shiftId:g,shiftNo:O,cashier:c,cashierName:p,customer:{name:e,phone:t,wa:t,address:"Beli Langsung di Kasir (POS)",deliveryMethod:"takeaway",isMember:!!x.isMember,memberId:x.memberId||null},customerName:e,customerPhone:t,customerType:x.isMember?"Member":"Pelanggan Umum",items:m.map(S=>({id:S.id,name:S.name,price:parseFloat(S.price)||0,basePrice:parseFloat(S.basePrice||S.price)||0,qty:parseFloat(S.qty)||1,discount:parseFloat(S.discount)||0,subtotal:parseFloat(S.subtotal)||0,variantName:S.variantName||"",isVariant:!!S.isVariant,isWholesale:!!S.isWholesale,effectivePrice:parseFloat(S.price)||0})),payment:{method:j,subtotal:re(),productDiscount:de(q),shippingCost:0,grandTotal:H(),paid:j==="cash"?N:j==="tempo"?a:H(),change:j==="cash"?Zt():0,bank:s,paymentStatus:j==="tempo"?"hutang":"lunas",tempoDp:a,tempoBalance:j==="tempo"?H()-a:0,tempoDueDate:Date.now()+30*24*60*60*1e3,tempoPenaltyRate:1,tempoPenaltyStopped:!1},subtotal:re(),globalDiscount:V(),discountType:I,discountVal:A,total:H(),isTempo:j==="tempo",pointsEarned:0,notes:""};if(x.isMember&&t){const D=(typeof window.calculateCartPoints=="function"?window.calculateCartPoints(m,b.store):{totalPoints:0}).totalPoints||0;if(D>0){E.pointsEarned=D;try{const Q=t.replace(/\D/g,""),C=String(x.memberId||Q);if(await y.collection("freshmart").doc("cms_data").collection("customers").doc(C).set({points:Ye.firestore.FieldValue.increment(D),lastOrderAt:f},{merge:!0}),b.customers){const G=b.customers.find(L=>L&&(String(L.id)===C||String(L.phone).replace(/\D/g,"")===Q));G&&(G.points=(parseFloat(G.points)||0)+D)}}catch(Q){console.warn("[POS] Gagal update poin member:",Q)}}}if(await y.collection("freshmart_orders").doc(n).set(E),Wt(E),o){const S=[];for(const D of m){const Q=String(D.id),C=(b.products||[]).find(L=>String(L.id)===Q);if(!C)continue;const ve=parseFloat(D.qty)||0,G={};if(D.variantName&&C.variants){const L=C.variants.findIndex(va=>va.name===D.variantName);L>-1&&(C.variants[L].stock=Math.max(0,(parseFloat(C.variants[L].stock)||0)-ve),C.variants[L].stock===0&&(C.variants[L].isActive=!1),C.variants[L].totalSold=(parseFloat(C.variants[L].totalSold)||0)+ve,G.variants=C.variants)}else C.stock=Math.max(0,(parseFloat(C.stock)||0)-ve),G.stock=C.stock,C.stock===0&&(C.isActive="false",G.isActive="false"),C.totalSold=(parseFloat(C.totalSold)||0)+ve,G.totalSold=C.totalSold;try{await y.collection("freshmart").doc("cms_data").collection("products").doc(Q).update(G),S.push(Q)}catch(L){console.warn("[POS] Gagal update stok produk di Firestore:",Q,L)}}if(S.length>0)try{await y.collection("freshmart").doc("cms_data").update({lastUpdate:Ye.firestore.FieldValue.increment(1),updateType:"stock_change",updatedProductIds:S})}catch{}}wt(),ke(!0);const Le={...E};m=[],q=0,A=0,I="rp",M(),F(),Ka(Le)}catch(n){console.error("[POS] Error:",n),w("Gagal menyimpan transaksi. Coba lagi.","error"),r&&(r.disabled=!1,r.innerHTML='<i class="fa-solid fa-check-circle mr-2"></i>Selesaikan Transaksi')}},Ka=e=>{const t=e.payment.method==="cash"?`<p class="text-sm text-slate-500">Kembalian: <span class="font-black text-emerald-600">${v(e.payment.change)}</span></p>`:e.payment.method==="tempo"?'<p class="text-sm text-amber-600 font-semibold">⚠️ Dicatat sebagai Piutang Tempo</p>':`<p class="text-sm text-slate-500">Metode: ${e.payment.method.toUpperCase()}</p>`,a=JSON.stringify(e).replace(/"/g,"&quot;"),s=!!document.getElementById("pos-admin-container")||typeof window.cTab=="function"&&window.cTab()==="pos";document.body.insertAdjacentHTML("beforeend",`
    <div id="pos-success-modal" class="fixed inset-0 z-[9999] flex items-center justify-center p-4" style="background:rgba(15,23,42,0.65);backdrop-filter:blur(4px)">
      <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-sm border border-slate-200/80 dark:border-slate-800">
        <div class="p-6 text-center">
          <div class="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-4"><i class="fa-solid fa-circle-check text-emerald-500 text-3xl"></i></div>
          <h2 class="font-black text-lg text-slate-900 dark:text-white mb-1">Transaksi Berhasil!</h2>
          <p class="text-xs text-slate-400 mb-2">#${u(e.txId)}</p>
          <p class="text-2xl font-black mb-1" style="color:var(--color-primary)">${v(e.total)}</p>
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
          <button onclick="window.previewPOSReceiptThenPrint(${a})" class="w-full py-3 rounded-2xl text-white font-bold text-sm shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer" style="background:var(--color-primary)"><i class="fa-solid fa-eye mr-1"></i><i class="fa-solid fa-print"></i> Preview & Cetak Struk</button>
          <button onclick="document.getElementById('pos-success-modal')?.remove()" class="w-full py-3 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer">Transaksi Baru</button>
          ${s?`
          <button onclick="document.getElementById('pos-success-modal')?.remove(); if(typeof window.openAdminTab==='function') window.openAdminTab('orders');" class="w-full py-2.5 rounded-xl text-slate-500 dark:text-slate-400 text-xs font-bold hover:text-[var(--color-primary)] transition-all flex items-center justify-center gap-1.5 cursor-pointer">
            <i class="fa-solid fa-receipt"></i> Buka Menu Pesanan Toko
          </button>`:""}
        </div>
      </div>
    </div>`)},fa=e=>{document.getElementById("pos-success-modal")?.remove(),We(e)},We=e=>{const t=typeof te=="function"?te():{paperSize:"58mm"},a=t.paperSize==="80mm",s=t.headerText||b.store?.name||"TOKO PUTRI",r=b.store?.wa||"",o=b.store?.address||"",n=t.footerText||"Terima Kasih Atas Kunjungan Anda!",l=new Date(e.dateMs||Date.now()).toLocaleString("id-ID"),p=(e.items||[]).map(f=>`<tr><td style="padding:2px 0;word-wrap:break-word">${u(f.name)}</td><td style="text-align:right;padding:2px 4px;white-space:nowrap">${$(f.qty)}x ${v(f.price)}</td><td style="text-align:right;padding:2px 0;white-space:nowrap;font-weight:bold">${v(f.subtotal)}</td></tr>`).join(""),c=e.discountType==="percent"&&e.discountVal?`Diskon (${e.discountVal}%)`:"Diskon";document.getElementById("pos-receipt-fallback-modal")?.remove(),document.body.insertAdjacentHTML("beforeend",`
    <div id="pos-receipt-fallback-modal" class="fixed inset-0 z-[10000] flex items-center justify-center p-3 sm:p-4" style="background:rgba(15,23,42,0.7);backdrop-filter:blur(4px)">
        <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full ${a?"max-w-md":"max-w-sm"} border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[90vh]">
            <div class="p-3.5 sm:p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50">
                <span class="font-bold text-xs text-slate-700 dark:text-slate-200 flex items-center gap-1.5"><i class="fa-solid fa-receipt text-amber-500"></i>Preview Struk Thermal (${a?"80mm":"58mm"})</span>
                <button onclick="document.getElementById('pos-receipt-fallback-modal')?.remove()" class="w-7 h-7 rounded-lg bg-slate-200/60 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 text-sm leading-none flex items-center justify-center cursor-pointer">×</button>
            </div>
            <div id="pos-receipt-paper-box" class="p-4 overflow-y-auto flex-1 font-mono text-[11px] bg-slate-50/60 dark:bg-slate-950 text-slate-800 dark:text-slate-200 space-y-2 select-text">
                <div class="text-center font-bold text-sm uppercase">${u(s)}</div>
                ${o?`<div class="text-center text-[10px] text-slate-500">${u(o)}</div>`:""}
                ${r?`<div class="text-center text-[10px] text-slate-500">WA: ${u(r)}</div>`:""}
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <div>No : <b>#${u(e.txId)}</b></div>
                <div>Tgl: ${u(l)}</div>
                <div>Kasir: ${u(e.cashierName||"Kasir")}</div>
                <div>Plg : ${u(e.customer?.name||"Umum")}</div>
                ${e.customer?.phone?`<div>HP  : ${u(e.customer.phone)}</div>`:""}
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <table class="w-full text-[11px]">
                    ${p}
                </table>
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <div class="flex justify-between"><span>Subtotal</span><span>${v(e.subtotal)}</span></div>
                ${(e.globalDiscount||0)>0?`<div class="flex justify-between text-rose-500 font-bold"><span>${c}</span><span>- ${v(e.globalDiscount)}</span></div>`:""}
                <div class="flex justify-between font-black text-sm pt-1 border-t border-slate-200 dark:border-slate-700"><span>TOTAL</span><span style="color:var(--color-primary)">${v(e.total)}</span></div>
                ${e.payment.method==="cash"?`<div class="flex justify-between"><span>Bayar</span><span>${v(e.payment.paid)}</span></div><div class="flex justify-between font-bold text-emerald-600"><span>Kembalian</span><span>${v(e.payment.change)}</span></div>`:""}
                ${e.payment.method==="tempo"?`<div class="flex justify-between"><span>DP</span><span>${v(e.payment.dp||0)}</span></div><div class="flex justify-between font-bold text-amber-600"><span>Sisa Piutang</span><span>${v(e.payment.tempoBalance||0)}</span></div>`:""}
                <div class="flex justify-between"><span>Metode</span><span>${u(e.payment.method.toUpperCase())}</span></div>
                ${e.pointsEarned>0?`
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <div class="flex justify-between text-amber-600 dark:text-amber-400 font-bold"><span>Poin Member:</span><span>+${e.pointsEarned} Poin</span></div>`:""}
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <div class="text-center text-[10px] text-slate-400 my-1">${u(n)}</div>
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
    </div>`)},Ct=()=>{const e=typeof te=="function"?te():{paperSize:"58mm",deviceType:"system"},t=i("pos-receipt-paper-box");if(!t)return;let a=i("thermal-print-section");a||(a=document.createElement("div"),a.id="thermal-print-section",document.body.appendChild(a));const s=e.paperSize==="80mm";if(a.innerHTML=`<div style="width:${s?"80mm":"58mm"};font-family:'Courier New',Courier,monospace;font-size:11px;line-height:1.2;color:#000;background:#fff;padding:4px;">${t.innerHTML}</div>`,e.deviceType==="rawbt"&&window.AndroidNativeApp&&typeof window.AndroidNativeApp.printRawBT=="function"){const r=t.innerText,o=btoa(unescape(encodeURIComponent(r)));window.AndroidNativeApp.printRawBT(o)}else window.AndroidNativeApp&&typeof window.AndroidNativeApp.print=="function"?window.AndroidNativeApp.print():window.print()},xa=({isStorefront:e})=>{const a=(typeof window.getCashierSession=="function"?window.getCashierSession():null)?.name||(e?"Kasir":"Admin Seller"),s=u(b.store?.name||"Toko Putri");return`
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
    `},ma=()=>{try{J="",ne="",m=[],q=0;const e=i("view-pos-cashier");if(!e)return;const t=i("admin-content"),a=i("view-admin");t&&a?.classList.contains("admin-pos-mode")&&(t.innerHTML="",a.classList.remove("admin-pos-mode")),e.innerHTML=xa({isStorefront:!0}),F(),M(),pe(),Te(),aa(),ea(),oe(),ga(),typeof X=="function"?X().then(s=>{(!s||s.status!=="open")&&R()}).catch(()=>{se()||R()}):setTimeout(()=>{se()||R()},350)}catch(e){console.error("Gagal render POS Storefront:",e)}},ha=()=>{try{J="",ne="";const e=i("view-admin");e&&e.classList.add("admin-pos-mode");const t=i("view-pos-cashier");if(t&&(t.innerHTML=""),!i("admin-content"))return;Ta("admin-content",`
            <div class="h-full w-full flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-md bg-white dark:bg-slate-900 min-h-0">
                ${xa({isStorefront:!1})}
            </div>
        `),F(),M(),pe(),Te(),aa(),ea(),oe(),ga(),typeof X=="function"?X().then(s=>{(!s||s.status!=="open")&&R()}).catch(()=>{se()||R()}):setTimeout(()=>{se()||R()},350)}catch(e){console.error("Gagal render POS Admin:",e);const t=i("admin-content");t&&(t.innerHTML=`
                <div class="h-full w-full flex flex-col items-center justify-center p-6 text-center">
                    <i class="fa-solid fa-triangle-exclamation text-4xl text-amber-500 mb-3"></i>
                    <h3 class="text-base font-bold text-slate-800 dark:text-white">Gagal Membuka Terminal POS</h3>
                    <p class="text-xs text-slate-500 mt-1 max-w-sm">Terjadi kendala saat memuat terminal. Silakan coba muat ulang.</p>
                    <button onclick="window.renderPOS()" class="mt-4 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-xs font-bold transition-all shadow-md">
                        <i class="fa-solid fa-arrows-rotate mr-1.5"></i>Muat Ulang Terminal
                    </button>
                </div>
            `)}},ga=()=>{window.setPOSViewMode=ct,window.posAddToCart=Ve,window.posAddToCartQty=sa,window.addToCartPOSWithVariant=ra,window.posUpdateQty=oa,window.posSetQty=na,window.posFormatQty=$,window.posFQty=Ke,window.posSetItemDisc=ia,window.posRemoveItem=Ue,window.posClearCart=la,window.openPayModal=da,window.closePayModal=wt,window.setPosCustomerType=pa,window.setPosPayMethod=kt,window.updatePosChange=vt,window.posSetQuickCash=yt,window.ensureCustomersLoaded=oe,window.ensureBanksLoaded=$e,window.lookupPosMember=Oe,window.debouncedLookupPosMember=Tt,window.selectPosMember=St,window.resetPosMember=Pt,window.processPOSTx=ba,window.printPOSReceipt=fa,window.previewPOSReceiptThenPrint=We,window.posSetGlobalDisc=e=>{Re(e)},window.posSetDiscountType=Mt,window.posSetDiscountVal=Re,window.posApplyQuickDiscount=At,window.openPOSCameraScanner=Je,window.closePOSCameraScanner=ce,window.togglePOSScannerFacing=Ot,window.togglePOSScannerTorch=$t,window.togglePOSScannerMode=Lt,window.posProcessManualBarcode=jt,window.posSearchScannedCode=Ht,window.executePOSPrintDirect=Ct,window.getActiveShift=B,window.isShiftActive=se,window.syncActiveShiftFromCloud=X,window.openPOSOpenShiftModal=R,window.closePOSOpenShiftModal=he,window.openPOSShiftModal=_,window.openPOSShiftSummaryModal=_,window.closePOSShiftSummaryModal=Ee,window.openPOSCloseShiftModal=nt,window.closePOSCloseShiftModal=Pe,window.renderShiftHeaderBadge=Te,window.printShiftSettlementReceipt=it,window.executeShiftPrintDirect=lt,window.posCatFilter=e=>{ne=e,F()},window.posSearchFn=e=>{J=typeof e=="string"?e:e?.value||"",document.querySelectorAll("#pos-search-input").forEach(t=>{t.value!==J&&(t.value=J)}),F()},window.renderCatalog=F,window.renderCart=M,window.refreshPOSCatalog=()=>{try{F()}catch(e){console.warn("refreshPOSCatalog error:",e)}},window.openPOSCartDrawer=gt,window.closePOSCartDrawer=ke,window.playCashierBeep=U,window.openPOSHistory=()=>{typeof window.openAdminTab=="function"?window.openAdminTab("orders"):typeof window.showToast=="function"&&window.showToast("Semua transaksi kasir terpusat di menu Pesanan CMS Admin")},window.destroyBarcodeListener=qe,window.playCashierChime=Ce,window.posHoldCurrentCart=Ge,window.closePOSHoldPrompt=ze,window.posConfirmHoldCart=pt,window.openPOSHeldModal=Me,window.closePOSHeldModal=Ae,window.posRecallHeldCart=ut,window.posHoldCurrentAndRecall=ft,window.posOverwriteAndRecall=xt,window.posDeleteHeldCart=mt,window.posExecuteDeleteHeld=ht,window.renderHeldBadges=pe},Mt=e=>{I=e==="percent"?"percent":"rp",q=V(),M()},Re=e=>{A=Math.max(0,parseFloat(e)||0),q=V(),M()},At=(e,t)=>{t&&(I=t),A=e,q=V(),M(),U()},Je=async()=>{if(i("pos-camera-scanner-modal"))return;typeof window.pushModalHistory=="function"&&window.pushModalHistory("posCameraScanner"),document.body.insertAdjacentHTML("beforeend",`
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
    </div>`),await wa()},wa=async()=>{const e=i("pos-camera-video");if(e)try{const t={video:{facingMode:{ideal:Ze},width:{ideal:1280},height:{ideal:720}},audio:!1},a=await navigator.mediaDevices.getUserMedia(t);le=a,e.srcObject=a,await e.play();const s=a.getVideoTracks();if(s.length>0){ee=s[0];const r=ee.getCapabilities?ee.getCapabilities():{},o=i("pos-scanner-torch-btn");o&&(r.torch?o.classList.remove("hidden"):o.classList.add("opacity-40"))}if(typeof window.BarcodeDetector<"u")try{je=new BarcodeDetector({formats:["ean_13","ean_8","upc_a","upc_e","code_128","code_39","code_93","qr_code","data_matrix"]})}catch{je=null}xe&&clearInterval(xe),xe=setInterval(async()=>{if(!(!je||!e||e.readyState<2))try{const r=await je.detect(e);if(r&&r.length>0){const o=r[0].rawValue?.trim();o&&ka(o)}}catch{}},180)}catch(t){console.warn("[POS Scanner] Gagal akses kamera:",t);const a=i("pos-scanner-status-pill");a&&(a.innerHTML='<span class="text-rose-400 font-bold"><i class="fa-solid fa-triangle-exclamation mr-1"></i>Kamera tidak dapat diakses</span>'),w("Izin kamera ditolak atau kamera sedang digunakan aplikasi lain.","warning")}},ka=e=>{const t=Date.now();if(e===Bt&&t-Ft<1800)return;Bt=e,Ft=t;const a=e.toLowerCase(),s=(b.products||[]).find(c=>c&&c.isActive!=="false"&&c.isActive!==!1&&(c.barcode&&c.barcode.toLowerCase()===a||c.sku&&c.sku.toLowerCase()===a||c.id&&String(c.id).toLowerCase()===a)),r=i("pos-scanner-reticle"),o=i("pos-scanner-status-pill"),n=i("pos-last-scanned-banner"),l=i("pos-last-scanned-text"),p=i("pos-last-scanned-price");if(s){if(r&&(r.classList.add("border-emerald-300","scale-105","bg-emerald-500/20"),setTimeout(()=>{r.classList.remove("border-emerald-300","scale-105","bg-emerald-500/20")},300)),U(),s.variants&&s.variants.length>0){o&&(o.innerHTML='<span class="text-amber-300 font-bold">Buka pilihan varian...</span>'),ce(),Xt().then(()=>{typeof window.openPOSVariantSheet=="function"&&window.openPOSVariantSheet(s.id)});return}Ve(s.id),n&&l&&p&&(l.textContent=s.name,p.textContent=v(parseFloat(s.price)||0),n.classList.remove("hidden")),o&&(o.innerHTML=`<span class="text-emerald-300 font-black"><i class="fa-solid fa-check mr-1"></i>${u(s.name)} (+1)</span>`,setTimeout(()=>{o&&(o.innerHTML='<span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span><span>Menunggu barcode...</span>')},1500)),Ie||(ce(),w(`Ditambahkan: ${s.name}`,"success"))}else r&&(r.classList.add("border-rose-500","bg-rose-500/20"),setTimeout(()=>{r.classList.remove("border-rose-500","bg-rose-500/20")},400)),o&&(o.innerHTML=`<span class="text-rose-400 font-bold"><i class="fa-solid fa-xmark mr-1"></i>Barcode "${e}" tidak ditemukan</span>`)},ce=(e=!1)=>{if(xe&&(clearInterval(xe),xe=null),le){try{le.getTracks().forEach(a=>a.stop())}catch{}le=null}ee=null,ye=!1;const t=i("pos-camera-scanner-modal");t&&(!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("posCameraScanner",!1,()=>t.remove()):t.remove())},$t=async()=>{if(ee)try{if(!(ee.getCapabilities?ee.getCapabilities():{}).torch){w("Lampu senter (torch) tidak didukung kamera ini.");return}ye=!ye,await ee.applyConstraints({advanced:[{torch:ye}]});const t=i("pos-scanner-torch-btn");t&&(ye?(t.classList.add("bg-amber-500","text-white"),t.classList.remove("bg-slate-800","text-slate-300")):(t.classList.remove("bg-amber-500","text-white"),t.classList.add("bg-slate-800","text-slate-300")))}catch(e){console.warn("Gagal toggle torch:",e)}},Ot=async()=>{Ze=Ze==="environment"?"user":"environment",le&&(le.getTracks().forEach(e=>e.stop()),le=null),await wa()},Lt=()=>{Ie=!Ie;const e=i("pos-scanner-mode-btn");e&&(Ie?(e.textContent="Terus-menerus",e.className="px-2.5 py-1 rounded-lg bg-emerald-950/60 border border-emerald-600/60 text-emerald-400 text-[10px] font-black tracking-wider uppercase transition-all cursor-pointer"):(e.textContent="Scan Sekali",e.className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-[10px] font-black tracking-wider uppercase transition-all cursor-pointer"))},jt=e=>{if(!e||!e.trim())return;ka(e.trim());const t=i("pos-manual-barcode-input");t&&(t.value="")},Ht=e=>{ce();const t=i("pos-search-input");t&&(t.value=e,J=e,F())};window.setPOSViewMode=ct;window.renderPOSStorefront=ma;window.renderPOS=ha;window.destroyBarcodeListener=qe;window.openPOSCartDrawer=gt;window.closePOSCartDrawer=ke;window.posSetQuickCash=yt;window.playCashierBeep=U;window.playCashierChime=Ce;window.posHoldCurrentCart=Ge;window.closePOSHoldPrompt=ze;window.posConfirmHoldCart=pt;window.openPOSHeldModal=Me;window.closePOSHeldModal=Ae;window.posRecallHeldCart=ut;window.posHoldCurrentAndRecall=ft;window.posOverwriteAndRecall=xt;window.posDeleteHeldCart=mt;window.posExecuteDeleteHeld=ht;window.renderHeldBadges=pe;window.ensureCustomersLoaded=oe;window.ensureBanksLoaded=$e;window.lookupPosMember=Oe;window.debouncedLookupPosMember=Tt;window.selectPosMember=St;window.resetPosMember=Pt;window.posSetDiscountType=Mt;window.posSetDiscountVal=Re;window.posApplyQuickDiscount=At;window.openPOSCameraScanner=Je;window.closePOSCameraScanner=ce;window.togglePOSScannerFacing=Ot;window.togglePOSScannerTorch=$t;window.togglePOSScannerMode=Lt;window.posProcessManualBarcode=jt;window.posSearchScannedCode=Ht;window.executePOSPrintDirect=Ct;window.previewPOSReceiptThenPrint=We;window.getActiveShift=B;window.isShiftActive=se;window.syncActiveShiftFromCloud=X;window.openPOSOpenShiftModal=R;window.closePOSOpenShiftModal=he;window.openPOSShiftModal=_;window.openPOSShiftSummaryModal=_;window.closePOSShiftSummaryModal=Ee;window.openPOSCloseShiftModal=nt;window.closePOSCloseShiftModal=Pe;window.renderShiftHeaderBadge=Te;window.printShiftSettlementReceipt=it;window.executeShiftPrintDirect=lt;const Ga=Object.freeze(Object.defineProperty({__proto__:null,addToCart:Ve,addToCartWithVariant:ra,applyMemberToPos:Fe,clearCart:la,closePOSCameraScanner:ce,closePOSCartDrawer:ke,closePOSHeldModal:Ae,closePOSHoldPrompt:ze,closePayModal:wt,debouncedLookupPosMember:Tt,destroyBarcodeListener:qe,ensureBanksLoaded:$e,ensureCustomersLoaded:oe,executePOSPrintDirect:Ct,formatQty:$,getProductStockInfo:we,lookupPosMember:Oe,openPOSCameraScanner:Je,openPOSCartDrawer:gt,openPOSHeldModal:Me,openPayModal:da,playCashierBeep:U,playCashierChime:Ce,posAddToCartQty:sa,posApplyQuickDiscount:At,posConfirmHoldCart:pt,posDeleteHeldCart:mt,posDiscountAmount:V,posExecuteDeleteHeld:ht,posHoldCurrentAndRecall:ft,posHoldCurrentCart:Ge,posOverwriteAndRecall:xt,posProcessManualBarcode:jt,posRecallHeldCart:ut,posSearchScannedCode:Ht,posSetDiscountType:Mt,posSetDiscountVal:Re,posSetQuickCash:yt,previewPOSReceiptThenPrint:We,printPOSReceipt:fa,processPOSTx:ba,removeFromCart:Ue,renderCatalog:F,renderHeldBadges:pe,renderPOS:ha,renderPOSStorefront:ma,resetPosMember:Pt,selectPosMember:St,setItemDisc:ia,setPOSViewMode:ct,setPosCustomerType:pa,setPosPayMethod:kt,setQty:na,stopClock:ta,togglePOSScannerFacing:Ot,togglePOSScannerMode:Lt,togglePOSScannerTorch:$t,updatePosChange:vt,updateQty:oa},Symbol.toStringTag,{value:"Module"}));export{Ga as a,Qa as p,Da as r};

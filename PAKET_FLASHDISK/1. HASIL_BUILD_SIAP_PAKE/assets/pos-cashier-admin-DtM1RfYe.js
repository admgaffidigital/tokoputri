import{e as o,x as y,a9 as k,l as p,v as u,a7 as w,i as c,b as A,$ as C}from"./module-print-q2i_eh3f.js";import{r as M}from"./module-pos-B6XbRmdl.js";import{f as h}from"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";const S=async()=>{if(!o("admin-content"))return;const e=document.querySelector("#view-admin .scroll-content");e&&(e.scrollTop=0),A("admin-content",`
    <div class="space-y-4 max-w-5xl mx-auto pb-16">
        <!-- Native App Sticky Segmented Control Bar (Theme Harmonized) -->
        <div class="sticky top-0 z-20 -mx-4 lg:-mx-8 px-4 lg:px-8 py-3 bg-slate-50/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-2xs">
            <div class="p-1.5 bg-slate-100 dark:bg-slate-800/90 rounded-2xl max-w-md w-full mx-auto grid grid-cols-2 gap-1.5 border border-slate-200/90 dark:border-slate-700/80 shadow-inner">
                <button id="tab-btn-cashier-accounts" onclick="window.switchCashierTab('accounts')" 
                    class="py-2.5 px-4 rounded-xl text-xs font-black text-white transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 shadow-md"
                    style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                    <i class="fa-solid fa-users text-white"></i>
                    <span>Akun Kasir</span>
                </button>
                <button id="tab-btn-cashier-shifts" onclick="window.switchCashierTab('shifts')" 
                    class="py-2.5 px-4 rounded-xl text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-700/60 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95">
                    <i class="fa-solid fa-file-invoice-dollar"></i>
                    <span>Laporan Shift</span>
                </button>
            </div>
        </div>

        <!-- Panel 1: Akun Kasir -->
        <div id="cashier-panel-accounts" class="space-y-4 pt-1">
            <!-- Header -->
            <div class="flex items-center justify-between gap-3 pt-1">
                <div>
                    <h2 class="text-base font-black text-slate-900 dark:text-white flex items-center gap-2.5">
                        <span class="w-8 h-8 rounded-xl flex items-center justify-center text-xs shrink-0 shadow-2xs border border-[rgba(var(--color-primary-rgb),0.25)]" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary)">
                            <i class="fa-solid fa-users-gear"></i>
                        </span>
                        <span>Manajemen Kasir</span>
                    </h2>
                    <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Daftarkan dan kelola akun kasir toko</p>
                </div>
                <button onclick="window.openAddCashierModal()"
                    class="flex items-center gap-2 px-4 py-2.5 rounded-2xl text-white text-xs font-black shadow-md active:scale-95 transition-all cursor-pointer hover:opacity-95 shrink-0"
                    style="background:var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                    <i class="fa-solid fa-user-plus text-xs"></i>
                    <span>Tambah Kasir</span>
                </button>
            </div>

            <!-- Panduan Akses Kasir POS (Themed Frosted Card) -->
            <div class="relative overflow-hidden p-4 rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-800/90 shadow-2xs flex items-start gap-3.5">
                <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-sm shrink-0 shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);">
                    <i class="fa-solid fa-cash-register"></i>
                </div>
                <div class="space-y-1 min-w-0 flex-1">
                    <div class="flex items-center gap-2 flex-wrap">
                        <span class="text-xs font-black text-slate-900 dark:text-white">Panduan Akses Kasir POS</span>
                        <span class="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary);">Storefront Login</span>
                    </div>
                    <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        Staf kasir dapat langsung login melalui tombol kasir <i class="fa-solid fa-cash-register mx-0.5" style="color:var(--color-primary)"></i> di bilah atas toko pembeli (*storefront*), bukan di panel CMS Seller. Akun yang didaftarkan langsung aktif dan dapat digunakan bertransaksi di POS.
                    </p>
                </div>
            </div>

            <!-- List Kasir -->
            <div id="cashier-list-container">
                <div class="text-center py-16"><i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i></div>
            </div>
        </div>

        <!-- Panel 2: Laporan Shift Kasir -->
        <div id="cashier-panel-shifts" class="hidden pt-1"></div>
    </div>`),await f()},L=a=>{const e=document.querySelector("#view-admin .scroll-content");e&&(e.scrollTop=0);const r=o("tab-btn-cashier-accounts"),i=o("tab-btn-cashier-shifts"),d=o("cashier-panel-accounts"),s=o("cashier-panel-shifts"),l=(t,b,x)=>{t&&(t.className="py-2.5 px-4 rounded-xl text-xs font-black text-white transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 shadow-md",t.style.background="var(--color-primary)",t.style.boxShadow="0 4px 14px rgba(var(--color-primary-rgb), 0.35)",t.innerHTML=`${b}<span>${x}</span>`)},n=(t,b,x)=>{t&&(t.className="py-2.5 px-4 rounded-xl text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-700/60 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95",t.style.background="transparent",t.style.boxShadow="none",t.innerHTML=`${b}<span>${x}</span>`)};a==="shifts"?(n(r,'<i class="fa-solid fa-users"></i>',"Akun Kasir"),l(i,'<i class="fa-solid fa-file-invoice-dollar text-white"></i>',"Laporan Shift"),d&&d.classList.add("hidden"),s&&(s.classList.remove("hidden"),M(s))):(l(r,'<i class="fa-solid fa-users text-white"></i>',"Akun Kasir"),n(i,'<i class="fa-solid fa-file-invoice-dollar"></i>',"Laporan Shift"),d&&d.classList.remove("hidden"),s&&s.classList.add("hidden"))},f=async()=>{const a=o("cashier-list-container");if(a)try{let e;try{e=await p.collection("freshmart").doc("cms_data").collection("cashier_accounts").orderBy("createdAt","desc").get()}catch{e=await p.collection("freshmart").doc("cms_data").collection("cashier_accounts").get()}if(e.empty){try{localStorage.setItem("pos_has_cashier","false"),await p.collection("freshmart").doc("cms_data").set({hasCashier:!1},{merge:!0})}catch{}typeof window.updatePOSHeaderIcon=="function"&&window.updatePOSHeaderIcon(),a.innerHTML=`
            <div class="flex flex-col items-center justify-center py-16 text-slate-400 dark:text-slate-600">
                <i class="fa-solid fa-user-slash text-4xl mb-3"></i>
                <p class="font-bold text-sm">Belum ada akun kasir</p>
                <p class="text-xs mt-1 text-center">Klik "Tambah Kasir" untuk mendaftarkan kasir pertama</p>
            </div>`;return}const r=[...e.docs].sort((s,l)=>{const n=s.data()?.createdAt?.toMillis?s.data().createdAt.toMillis():s.data()?.createdAt?new Date(s.data().createdAt).getTime():0;return(l.data()?.createdAt?.toMillis?l.data().createdAt.toMillis():l.data()?.createdAt?new Date(l.data().createdAt).getTime():0)-n}),i=r.some(s=>s.data()?.isActive!==!1);try{localStorage.setItem("pos_has_cashier",i?"true":"false"),await p.collection("freshmart").doc("cms_data").set({hasCashier:i},{merge:!0})}catch{}typeof window.updatePOSHeaderIcon=="function"&&window.updatePOSHeaderIcon();const d=r.map(s=>{const l=s.data(),n=s.id,t=l.isActive!==!1,b=l.createdAt?.toDate?l.createdAt.toDate().toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):"-";return`
            <div class="flex items-center justify-between gap-3 p-4 sm:p-5 bg-white dark:bg-slate-800/95 rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:shadow-xs transition-all">
                <div class="flex items-center gap-3.5 min-w-0">
                    <div class="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm shrink-0 shadow-2xs border border-[rgba(var(--color-primary-rgb),0.25)]"
                        style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary)">
                        ${(l.name||"Kasir").trim().split(/\s+/).slice(0,2).map(m=>m[0]).join("").toUpperCase()||"KS"}
                    </div>
                    <div class="min-w-0">
                        <div class="flex items-center gap-2 flex-wrap">
                            <p class="text-sm font-black text-slate-900 dark:text-white truncate">${c(l.name||"Kasir")}</p>
                            <span class="inline-flex items-center gap-1.5 text-[10px] font-black px-2.5 py-0.5 rounded-full ${t?"bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60":"bg-slate-100 dark:bg-slate-700 text-slate-500 border border-slate-200 dark:border-slate-600"}">
                                <span class="w-1.5 h-1.5 rounded-full ${t?"bg-emerald-500 animate-pulse":"bg-slate-400"}"></span>
                                ${t?"Aktif":"Nonaktif"}
                            </span>
                        </div>
                        <div class="flex items-center gap-3 mt-1 text-xs text-slate-500 dark:text-slate-400 flex-wrap">
                            <span class="flex items-center gap-1"><i class="fa-solid fa-envelope text-[10px] text-slate-400"></i> ${c(l.email||"")}</span>
                            <span>•</span>
                            <span class="flex items-center gap-1 text-[11px] text-slate-400 dark:text-slate-500"><i class="fa-solid fa-calendar-days text-[10px]"></i> Terdaftar: ${c(b)}</span>
                        </div>
                    </div>
                </div>
                <div class="flex items-center gap-2 shrink-0">
                    <button onclick="window.toggleCashierActive('${c(n)}', ${!t})"
                        title="${t?"Nonaktifkan Akun Kasir":"Aktifkan Akun Kasir"}"
                        class="w-10 h-10 rounded-2xl flex items-center justify-center text-xs transition-all active:scale-95 cursor-pointer shadow-2xs border
                        ${t?"bg-slate-50 hover:bg-amber-50 dark:bg-slate-700/80 dark:hover:bg-amber-950/40 text-slate-600 dark:text-slate-300 hover:text-amber-600 border-slate-200/80 dark:border-slate-700 hover:border-amber-300":"bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 border-emerald-200 dark:border-emerald-800"}">
                        <i class="fa-solid ${t?"fa-ban":"fa-circle-check"}"></i>
                    </button>
                    <button onclick="window.openEditCashierModal('${c(n)}', '${c(l.name||"")}', '${c(l.email||"")}')"
                        title="Edit Profil Kasir"
                        class="w-10 h-10 rounded-2xl flex items-center justify-center text-xs bg-slate-50 hover:bg-slate-100 dark:bg-slate-700/80 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 hover:text-[var(--color-primary)] border border-slate-200/80 dark:border-slate-700 transition-all active:scale-95 cursor-pointer shadow-2xs">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button onclick="window.deleteCashierAccount('${c(n)}', '${c(l.name||"Kasir")}')"
                        title="Hapus Akun Kasir"
                        class="w-10 h-10 rounded-2xl flex items-center justify-center text-xs bg-slate-50 hover:bg-rose-50 dark:bg-slate-700/80 dark:hover:bg-rose-950/40 text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 border border-slate-200/80 dark:border-slate-700 hover:border-rose-200 transition-all active:scale-95 cursor-pointer shadow-2xs">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            </div>`}).join("");a.innerHTML=`<div class="space-y-2.5">${d}</div>
        <p class="text-center text-[10px] text-slate-400 mt-3">${r.length} akun kasir terdaftar</p>`}catch(e){console.error("[CashierAdmin] Gagal memuat daftar kasir:",e),a.innerHTML=`
        <div class="text-center py-10 p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 flex flex-col items-center justify-center">
            <div class="w-12 h-12 rounded-2xl bg-rose-50 dark:bg-rose-950/40 text-rose-500 flex items-center justify-center text-2xl mb-2.5 shadow-2xs">
                <i class="fa-solid fa-triangle-exclamation"></i>
            </div>
            <p class="text-xs font-bold text-slate-700 dark:text-slate-300">Gagal memuat data kasir</p>
            <p class="text-[11px] text-slate-400 mt-0.5">${c(e.message||"Periksa koneksi internet atau login admin")}</p>
            <button onclick="window.loadCashierList()" class="mt-3 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 transition-all cursor-pointer inline-flex items-center gap-1.5 active:scale-95">
                <i class="fa-solid fa-arrows-rotate text-[10px]"></i>
                <span>Coba Lagi</span>
            </button>
        </div>`}},T=()=>{document.body.insertAdjacentHTML("beforeend",`
    <div id="add-cashier-modal" class="fixed inset-0 z-[9990] flex items-center justify-center p-4 bg-slate-900/70 transition-all duration-300"
        onclick="if(event.target===this) window.closeAddCashierModal()">
        <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-md flex flex-col overflow-hidden scale-95 transition-transform duration-300" id="add-cashier-modal-box">
            <div class="flex items-center justify-between p-5 border-b border-slate-100 dark:border-slate-800 shrink-0">
                <div class="flex items-center gap-2.5">
                    <div class="w-9 h-9 rounded-xl flex items-center justify-center text-white text-sm" style="background:var(--color-primary)">
                        <i class="fa-solid fa-user-plus"></i>
                    </div>
                    <div>
                        <h3 class="font-black text-sm text-slate-900 dark:text-white">Tambah Akun Kasir</h3>
                        <p class="text-[10px] text-slate-400">Buat akun login untuk kasir baru</p>
                    </div>
                </div>
                <button onclick="window.closeAddCashierModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 flex items-center justify-center hover:bg-rose-50 hover:text-rose-500 transition-all active:scale-90">
                    <i class="fa-solid fa-xmark text-sm"></i>
                </button>
            </div>
            <div class="p-5 space-y-3.5">
                <div>
                    <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Nama Kasir</label>
                    <input id="new-cashier-name" type="text" placeholder="Contoh: Budi Santoso"
                        class="w-full border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3 text-sm bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] text-slate-900 dark:text-white transition-all">
                </div>
                <div>
                    <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Email Kasir</label>
                    <input id="new-cashier-email" type="email" placeholder="kasir1@toko.com"
                        class="w-full border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3 text-sm bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] text-slate-900 dark:text-white transition-all">
                </div>
                <div>
                    <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Password</label>
                    <div class="relative">
                        <input id="new-cashier-pass" type="password" placeholder="Min. 6 karakter"
                            class="w-full border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3 text-sm bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] text-slate-900 dark:text-white pr-10 transition-all">
                        <button type="button" onclick="window.toggleCashierPassVisibility('new-cashier-pass')"
                            class="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs">
                            <i class="fa-solid fa-eye" id="new-cashier-pass-eye"></i>
                        </button>
                    </div>
                </div>
                <div id="add-cashier-error" class="hidden text-xs text-rose-600 font-semibold p-2.5 bg-rose-50 dark:bg-rose-900/20 rounded-2xl border border-rose-200 dark:border-rose-800"></div>
                <div class="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 text-xs text-amber-700 dark:text-amber-400">
                    <i class="fa-solid fa-triangle-exclamation mr-1"></i>
                    Simpan email &amp; password ini. Kasir menggunakannya untuk login ke mode POS dari storefront toko.
                </div>
            </div>
            <div class="p-4 border-t border-slate-100 dark:border-slate-800 flex gap-3 shrink-0">
                <button onclick="window.closeAddCashierModal()"
                    class="flex-1 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-slate-50 active:scale-95 transition-all cursor-pointer">
                    Batal
                </button>
                <button onclick="window.saveCashierAccount()" id="save-cashier-btn"
                    class="flex-[2] py-3.5 rounded-2xl text-white font-black text-sm shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    style="background:var(--color-primary)">
                    <i class="fa-solid fa-floppy-disk"></i> Simpan & Daftarkan
                </button>
            </div>
        </div>
    </div>`),setTimeout(()=>{const a=o("add-cashier-modal-box");a&&a.classList.remove("scale-95");const e=o("new-cashier-name");e&&e.focus()},10)},v=()=>{const a=o("add-cashier-modal");a&&(a.style.opacity="0",setTimeout(()=>a.remove(),200))},K=async()=>{const a=o("new-cashier-name")?.value?.trim()||"",e=o("new-cashier-email")?.value?.trim()||"",r=o("new-cashier-pass")?.value||"",i=o("add-cashier-error"),d=o("save-cashier-btn"),s=n=>{i&&(i.textContent=n,i.classList.remove("hidden"))};if((()=>{i&&i.classList.add("hidden")})(),!a){s("Nama kasir wajib diisi.");return}if(!e||!e.includes("@")){s("Email tidak valid.");return}if(r.length<6){s("Password minimal 6 karakter.");return}d&&(d.disabled=!0,d.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i>Mendaftarkan...'),k("Membuat akun kasir...");try{const t=(h.apps.find(m=>m.name==="pos-cashier-creator")||h.initializeApp(window.FIREBASE_CONFIG||h.app().options,"pos-cashier-creator")).auth(),x=(await t.createUserWithEmailAndPassword(e,r)).user?.uid;if(!x)throw new Error("UID tidak diterima dari Firebase");await t.signOut(),await p.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(x).set({uid:x,name:a,email:e,role:"cashier",isActive:!0,createdAt:h.firestore.FieldValue.serverTimestamp(),createdBy:C.currentUser?.uid||"admin"});try{localStorage.setItem("pos_has_cashier","true"),await p.collection("freshmart").doc("cms_data").set({hasCashier:!0},{merge:!0})}catch{}v(),u(`Kasir "${a}" berhasil didaftarkan! ✅`,"success"),await f(),typeof window.updatePOSHeaderIcon=="function"?window.updatePOSHeaderIcon():typeof window.initPOSAuth=="function"&&window.initPOSAuth()}catch(n){console.error("[CashierAdmin] Gagal membuat kasir:",n);const t=n.code||"";s(t==="auth/email-already-in-use"?"Email sudah digunakan oleh akun lain.":t==="auth/invalid-email"?"Format email tidak valid.":t==="auth/weak-password"?"Password terlalu lemah (min. 6 karakter).":"Gagal mendaftarkan: "+(n.message||"Error tidak diketahui")),d&&(d.disabled=!1,d.innerHTML='<i class="fa-solid fa-floppy-disk mr-2"></i>Simpan & Daftarkan')}finally{w()}},$=(a,e,r)=>{document.body.insertAdjacentHTML("beforeend",`
    <div id="edit-cashier-modal" class="fixed inset-0 z-[9990] flex items-center justify-center p-4 bg-slate-900/70"
        onclick="if(event.target===this) window.closeEditCashierModal()">
        <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-sm flex flex-col overflow-hidden scale-95 transition-transform duration-300" id="edit-cashier-modal-box">
            <div class="flex items-center justify-between p-5 border-b border-slate-100 dark:border-slate-800 shrink-0">
                <h3 class="font-black text-sm text-slate-900 dark:text-white flex items-center gap-2">
                    <i class="fa-solid fa-pen-to-square text-[var(--color-primary)]"></i> Edit Kasir
                </h3>
                <button onclick="window.closeEditCashierModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 flex items-center justify-center hover:bg-rose-50 hover:text-rose-500 transition-all active:scale-90">
                    <i class="fa-solid fa-xmark text-sm"></i>
                </button>
            </div>
            <div class="p-5 space-y-3.5">
                <div>
                    <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Nama Kasir</label>
                    <input id="edit-cashier-name" type="text" value="${c(e)}"
                        class="w-full border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3 text-sm bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] text-slate-900 dark:text-white transition-all">
                </div>
                <div>
                    <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Email (Tidak dapat diubah)</label>
                    <input type="email" value="${c(r)}" disabled
                        class="w-full border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3 text-sm bg-slate-50 dark:bg-slate-800/50 text-slate-400 cursor-not-allowed">
                </div>
                <div id="edit-cashier-error" class="hidden text-xs text-rose-600 font-semibold p-2.5 bg-rose-50 dark:bg-rose-900/20 rounded-2xl border border-rose-200 dark:border-rose-800"></div>
            </div>
            <div class="p-4 border-t border-slate-100 dark:border-slate-800 flex gap-3 shrink-0">
                <button onclick="window.closeEditCashierModal()"
                    class="flex-1 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-slate-50 active:scale-95 transition-all cursor-pointer">
                    Batal
                </button>
                <button onclick="window.updateCashierName('${c(a)}')" id="update-cashier-btn"
                    class="flex-[2] py-3.5 rounded-2xl text-white font-black text-sm shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    style="background:var(--color-primary)">
                    <i class="fa-solid fa-floppy-disk"></i> Simpan Perubahan
                </button>
            </div>
        </div>
    </div>`),setTimeout(()=>{const i=o("edit-cashier-modal-box");i&&i.classList.remove("scale-95")},10)},g=()=>{const a=o("edit-cashier-modal");a&&(a.style.opacity="0",setTimeout(()=>a.remove(),200))},j=async a=>{const e=o("edit-cashier-name")?.value?.trim()||"",r=o("edit-cashier-error"),i=o("update-cashier-btn");if(!e){r&&(r.textContent="Nama tidak boleh kosong.",r.classList.remove("hidden"));return}i&&(i.disabled=!0,i.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i>Menyimpan...'),k("Memperbarui...");try{await p.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(a).update({name:e}),g(),u("Nama kasir diperbarui!","success"),await f()}catch(d){r&&(r.textContent="Gagal memperbarui: "+d.message,r.classList.remove("hidden")),i&&(i.disabled=!1,i.innerHTML='<i class="fa-solid fa-floppy-disk mr-2"></i>Simpan Perubahan')}finally{w()}},P=async(a,e)=>{k(e?"Mengaktifkan kasir...":"Menonaktifkan kasir...");try{await p.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(a).update({isActive:e}),u(e?"Kasir diaktifkan ✅":"Kasir dinonaktifkan ❌","success"),await f()}catch{u("Gagal mengubah status kasir","error")}finally{w()}},_=(a,e)=>{y("Hapus Akun Kasir",`Yakin hapus akun kasir "${e}"? Akun tidak dapat dipulihkan dan kasir tidak bisa login lagi.`,async()=>{k("Menghapus akun kasir...");try{await p.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(a).delete(),u(`Kasir "${e}" dihapus`,"success"),await f()}catch{u("Gagal menghapus kasir","error")}finally{w()}},"Ya, Hapus")},E=a=>{const e=o(a),r=o(a+"-eye");e&&(e.type==="password"?(e.type="text",r&&(r.className="fa-solid fa-eye-slash")):(e.type="password",r&&(r.className="fa-solid fa-eye")))};window.renderCashierAccounts=S;window.switchCashierTab=L;window.openAddCashierModal=T;window.closeAddCashierModal=v;window.saveCashierAccount=K;window.openEditCashierModal=$;window.closeEditCashierModal=g;window.updateCashierName=j;window.toggleCashierActive=P;window.deleteCashierAccount=_;window.toggleCashierPassVisibility=E;window.loadCashierList=f;export{v as closeAddCashierModal,g as closeEditCashierModal,_ as deleteCashierAccount,T as openAddCashierModal,$ as openEditCashierModal,S as renderCashierAccounts,K as saveCashierAccount,L as switchCashierTab,P as toggleCashierActive,E as toggleCashierPassVisibility,j as updateCashierName};

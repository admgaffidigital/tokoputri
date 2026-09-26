import{d as b,a as y}from"./module-member-HotrGCGL.js";import{e as i,v as A,a3 as x,u as p,a1 as m,i as c,b as C}from"./module-print-DdyfBoO_.js";import{r as M}from"./module-pos-tMqBnw84.js";import{f as u}from"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";const L=async()=>{if(!i("admin-content"))return;const e=document.querySelector("#view-admin .scroll-content");e&&(e.scrollTop=0),C("admin-content",`
    <div class="space-y-4 max-w-5xl mx-auto pb-16">
        <!-- Native App Sticky Segmented Control Bar -->
        <div class="sticky top-0 z-20 -mx-4 lg:-mx-8 px-4 lg:px-8 py-2.5 bg-slate-50/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-2xs">
            <div class="p-1 bg-slate-200/80 dark:bg-slate-800 rounded-2xl max-w-sm w-full mx-auto grid grid-cols-2 gap-1 border border-slate-300/50 dark:border-slate-700/60 shadow-2xs">
                <button id="tab-btn-cashier-accounts" onclick="window.switchCashierTab('accounts')" class="py-2.5 px-3 rounded-xl text-xs font-black bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer border border-black/5 dark:border-white/10">
                    <i class="fa-solid fa-users" style="color:var(--color-primary)"></i>
                    <span>Akun Kasir</span>
                </button>
                <button id="tab-btn-cashier-shifts" onclick="window.switchCashierTab('shifts')" class="py-2.5 px-3 rounded-xl text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer border border-transparent">
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
                    <h2 class="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                        <i class="fa-solid fa-users-gear" style="color:var(--color-primary)"></i>
                        Manajemen Kasir
                    </h2>
                    <p class="text-xs text-slate-500 dark:text-slate-400">Daftarkan dan kelola akun kasir toko</p>
                </div>
                <button onclick="window.openAddCashierModal()"
                    class="flex items-center gap-2 px-4 py-2.5 rounded-2xl text-white text-xs font-bold shadow-sm active:scale-95 transition-all cursor-pointer hover:opacity-95 shrink-0"
                    style="background:var(--color-primary)">
                    <i class="fa-solid fa-user-plus text-xs"></i>
                    <span>Tambah Kasir</span>
                </button>
            </div>

            <!-- Info Guide Banner (Harmonized Theme) -->
            <div class="p-3.5 rounded-2xl border flex gap-3 items-start" style="background: rgba(var(--color-primary-rgb), 0.05); border-color: rgba(var(--color-primary-rgb), 0.22)">
                <div class="w-7 h-7 rounded-xl flex items-center justify-center text-xs shrink-0 shadow-2xs mt-0.5" style="background: rgba(var(--color-primary-rgb), 0.15); color: var(--color-primary)">
                    <i class="fa-solid fa-circle-info"></i>
                </div>
                <div class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed">
                    <b class="text-slate-900 dark:text-white">Panduan Akses:</b> Staf kasir login melalui ikon <i class="fa-solid fa-cash-register mx-1" style="color:var(--color-primary)"></i> di header toko pembeli (*storefront*), bukan di panel CMS Seller. Akun yang didaftarkan langsung aktif dan dapat digunakan bertransaksi di POS.
                </div>
            </div>

            <!-- List Kasir -->
            <div id="cashier-list-container">
                <div class="text-center py-16"><i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i></div>
            </div>
        </div>

        <!-- Panel 2: Laporan Shift Kasir -->
        <div id="cashier-panel-shifts" class="hidden pt-1"></div>
    </div>`),await f()},S=a=>{const e=document.querySelector("#view-admin .scroll-content");e&&(e.scrollTop=0);const t=i("tab-btn-cashier-accounts"),r=i("tab-btn-cashier-shifts"),l=i("cashier-panel-accounts"),s=i("cashier-panel-shifts"),o="py-2.5 px-3 rounded-xl text-xs font-black bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer border border-black/5 dark:border-white/10",d="py-2.5 px-3 rounded-xl text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer border border-transparent";a==="shifts"?(t&&(t.className=d,t.innerHTML='<i class="fa-solid fa-users"></i><span>Akun Kasir</span>'),r&&(r.className=o,r.innerHTML='<i class="fa-solid fa-file-invoice-dollar" style="color:var(--color-primary)"></i><span>Laporan Shift</span>'),l&&l.classList.add("hidden"),s&&(s.classList.remove("hidden"),M(s))):(t&&(t.className=o,t.innerHTML='<i class="fa-solid fa-users" style="color:var(--color-primary)"></i><span>Akun Kasir</span>'),r&&(r.className=d,r.innerHTML='<i class="fa-solid fa-file-invoice-dollar"></i><span>Laporan Shift</span>'),l&&l.classList.remove("hidden"),s&&s.classList.add("hidden"))},f=async()=>{const a=i("cashier-list-container");if(a)try{let e;try{e=await b.collection("freshmart").doc("cms_data").collection("cashier_accounts").orderBy("createdAt","desc").get()}catch{e=await b.collection("freshmart").doc("cms_data").collection("cashier_accounts").get()}if(e.empty){try{localStorage.setItem("pos_has_cashier","false"),await b.collection("freshmart").doc("cms_data").set({hasCashier:!1},{merge:!0})}catch{}typeof window.updatePOSHeaderIcon=="function"&&window.updatePOSHeaderIcon(),a.innerHTML=`
            <div class="flex flex-col items-center justify-center py-16 text-slate-400 dark:text-slate-600">
                <i class="fa-solid fa-user-slash text-4xl mb-3"></i>
                <p class="font-bold text-sm">Belum ada akun kasir</p>
                <p class="text-xs mt-1 text-center">Klik "Tambah Kasir" untuk mendaftarkan kasir pertama</p>
            </div>`;return}const t=[...e.docs].sort((s,o)=>{const d=s.data()?.createdAt?.toMillis?s.data().createdAt.toMillis():s.data()?.createdAt?new Date(s.data().createdAt).getTime():0;return(o.data()?.createdAt?.toMillis?o.data().createdAt.toMillis():o.data()?.createdAt?new Date(o.data().createdAt).getTime():0)-d}),r=t.some(s=>s.data()?.isActive!==!1);try{localStorage.setItem("pos_has_cashier",r?"true":"false"),await b.collection("freshmart").doc("cms_data").set({hasCashier:r},{merge:!0})}catch{}typeof window.updatePOSHeaderIcon=="function"&&window.updatePOSHeaderIcon();const l=t.map(s=>{const o=s.data(),d=s.id,n=o.isActive!==!1,k=o.createdAt?.toDate?o.createdAt.toDate().toLocaleDateString("id-ID"):"-";return`
            <div class="flex items-center justify-between gap-3 p-3.5 sm:p-4 bg-white dark:bg-slate-800/90 rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:shadow-xs transition-all">
                <div class="flex items-center gap-3 min-w-0">
                    <div class="w-11 h-11 rounded-2xl flex items-center justify-center font-bold text-sm shrink-0 shadow-2xs border border-[rgba(var(--color-primary-rgb),0.25)]"
                        style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary)">
                        <i class="fa-solid fa-user-tie text-base"></i>
                    </div>
                    <div class="min-w-0">
                        <div class="flex items-center gap-2 flex-wrap">
                            <p class="text-sm font-black text-slate-900 dark:text-white truncate">${c(o.name||"Kasir")}</p>
                            <span class="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full ${n?"bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60":"bg-slate-100 dark:bg-slate-700 text-slate-500 border border-slate-200 dark:border-slate-600"}">
                                <span class="w-1.5 h-1.5 rounded-full ${n?"bg-emerald-500 animate-pulse":"bg-slate-400"}"></span>
                                ${n?"Aktif":"Nonaktif"}
                            </span>
                        </div>
                        <p class="text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5">${c(o.email||"")}</p>
                        <span class="text-[10px] text-slate-400 dark:text-slate-500">Terdaftar: ${c(k)}</span>
                    </div>
                </div>
                <div class="flex items-center gap-1.5 shrink-0">
                    <button onclick="window.toggleCashierActive('${c(d)}', ${!n})"
                        title="${n?"Nonaktifkan Kasir":"Aktifkan Kasir"}"
                        class="w-9 h-9 rounded-xl flex items-center justify-center text-xs transition-all active:scale-90 cursor-pointer shadow-2xs
                        ${n?"bg-slate-100 hover:bg-slate-200 dark:bg-slate-700/80 text-slate-600 dark:text-slate-300 hover:text-amber-600":"bg-emerald-50 text-emerald-600 hover:bg-emerald-100 dark:bg-emerald-950/40"}">
                        <i class="fa-solid ${n?"fa-ban":"fa-circle-check"}"></i>
                    </button>
                    <button onclick="window.openEditCashierModal('${c(d)}', '${c(o.name||"")}', '${c(o.email||"")}')"
                        title="Edit Kasir"
                        class="w-9 h-9 rounded-xl flex items-center justify-center text-xs bg-slate-100 hover:bg-slate-200 dark:bg-slate-700/80 text-slate-600 dark:text-slate-300 hover:text-[var(--color-primary)] transition-all active:scale-90 cursor-pointer shadow-2xs">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button onclick="window.deleteCashierAccount('${c(d)}', '${c(o.name||"Kasir")}')"
                        title="Hapus Kasir"
                        class="w-9 h-9 rounded-xl flex items-center justify-center text-xs bg-slate-100 hover:bg-rose-50 dark:bg-slate-700/80 text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 transition-all active:scale-90 cursor-pointer shadow-2xs">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            </div>`}).join("");a.innerHTML=`<div class="space-y-2.5">${l}</div>
        <p class="text-center text-[10px] text-slate-400 mt-3">${t.length} akun kasir terdaftar</p>`}catch(e){console.error("[CashierAdmin] Gagal memuat daftar kasir:",e),a.innerHTML=`
        <div class="text-center py-10 p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500">
            <i class="fa-solid fa-triangle-exclamation text-rose-500 text-2xl mb-2 block"></i>
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
                        class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-sm bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] text-slate-900 dark:text-white">
                </div>
                <div>
                    <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Email Kasir</label>
                    <input id="new-cashier-email" type="email" placeholder="kasir1@toko.com"
                        class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-sm bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] text-slate-900 dark:text-white">
                </div>
                <div>
                    <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Password</label>
                    <div class="relative">
                        <input id="new-cashier-pass" type="password" placeholder="Min. 6 karakter"
                            class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-sm bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] text-slate-900 dark:text-white pr-10">
                        <button type="button" onclick="window.toggleCashierPassVisibility('new-cashier-pass')"
                            class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs">
                            <i class="fa-solid fa-eye" id="new-cashier-pass-eye"></i>
                        </button>
                    </div>
                </div>
                <div id="add-cashier-error" class="hidden text-xs text-rose-600 font-semibold p-2.5 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-200 dark:border-rose-800"></div>
                <div class="p-3 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 text-xs text-amber-700 dark:text-amber-400">
                    <i class="fa-solid fa-triangle-exclamation mr-1"></i>
                    Simpan email &amp; password ini. Kasir menggunakannya untuk login ke mode POS dari storefront toko.
                </div>
            </div>
            <div class="p-4 border-t border-slate-100 dark:border-slate-800 flex gap-3 shrink-0">
                <button onclick="window.closeAddCashierModal()"
                    class="flex-1 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-slate-50 transition-all">
                    Batal
                </button>
                <button onclick="window.saveCashierAccount()" id="save-cashier-btn"
                    class="flex-[2] py-3 rounded-xl text-white font-black text-sm shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2"
                    style="background:var(--color-primary)">
                    <i class="fa-solid fa-floppy-disk"></i> Simpan & Daftarkan
                </button>
            </div>
        </div>
    </div>`),setTimeout(()=>{const a=i("add-cashier-modal-box");a&&a.classList.remove("scale-95");const e=i("new-cashier-name");e&&e.focus()},10)},v=()=>{const a=i("add-cashier-modal");a&&(a.style.opacity="0",setTimeout(()=>a.remove(),200))},K=async()=>{const a=i("new-cashier-name")?.value?.trim()||"",e=i("new-cashier-email")?.value?.trim()||"",t=i("new-cashier-pass")?.value||"",r=i("add-cashier-error"),l=i("save-cashier-btn"),s=d=>{r&&(r.textContent=d,r.classList.remove("hidden"))};if((()=>{r&&r.classList.add("hidden")})(),!a){s("Nama kasir wajib diisi.");return}if(!e||!e.includes("@")){s("Email tidak valid.");return}if(t.length<6){s("Password minimal 6 karakter.");return}l&&(l.disabled=!0,l.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i>Mendaftarkan...'),x("Membuat akun kasir...");try{const n=(u.apps.find(w=>w.name==="pos-cashier-creator")||u.initializeApp(window.FIREBASE_CONFIG||u.app().options,"pos-cashier-creator")).auth(),h=(await n.createUserWithEmailAndPassword(e,t)).user?.uid;if(!h)throw new Error("UID tidak diterima dari Firebase");await n.signOut(),await b.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(h).set({uid:h,name:a,email:e,role:"cashier",isActive:!0,createdAt:u.firestore.FieldValue.serverTimestamp(),createdBy:y.currentUser?.uid||"admin"});try{localStorage.setItem("pos_has_cashier","true"),await b.collection("freshmart").doc("cms_data").set({hasCashier:!0},{merge:!0})}catch{}v(),p(`Kasir "${a}" berhasil didaftarkan! ✅`,"success"),await f(),typeof window.updatePOSHeaderIcon=="function"?window.updatePOSHeaderIcon():typeof window.initPOSAuth=="function"&&window.initPOSAuth()}catch(d){console.error("[CashierAdmin] Gagal membuat kasir:",d);const n=d.code||"";s(n==="auth/email-already-in-use"?"Email sudah digunakan oleh akun lain.":n==="auth/invalid-email"?"Format email tidak valid.":n==="auth/weak-password"?"Password terlalu lemah (min. 6 karakter).":"Gagal mendaftarkan: "+(d.message||"Error tidak diketahui")),l&&(l.disabled=!1,l.innerHTML='<i class="fa-solid fa-floppy-disk mr-2"></i>Simpan & Daftarkan')}finally{m()}},j=(a,e,t)=>{document.body.insertAdjacentHTML("beforeend",`
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
                        class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-sm bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] text-slate-900 dark:text-white">
                </div>
                <div>
                    <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Email (Tidak dapat diubah)</label>
                    <input type="email" value="${c(t)}" disabled
                        class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-sm bg-slate-50 dark:bg-slate-800/50 text-slate-400 cursor-not-allowed">
                </div>
                <div id="edit-cashier-error" class="hidden text-xs text-rose-600 font-semibold p-2.5 bg-rose-50 rounded-xl border border-rose-200"></div>
            </div>
            <div class="p-4 border-t border-slate-100 dark:border-slate-800 flex gap-3 shrink-0">
                <button onclick="window.closeEditCashierModal()"
                    class="flex-1 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-slate-50 transition-all">
                    Batal
                </button>
                <button onclick="window.updateCashierName('${c(a)}')" id="update-cashier-btn"
                    class="flex-[2] py-3 rounded-xl text-white font-black text-sm shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2"
                    style="background:var(--color-primary)">
                    <i class="fa-solid fa-floppy-disk"></i> Simpan Perubahan
                </button>
            </div>
        </div>
    </div>`),setTimeout(()=>{const r=i("edit-cashier-modal-box");r&&r.classList.remove("scale-95")},10)},g=()=>{const a=i("edit-cashier-modal");a&&(a.style.opacity="0",setTimeout(()=>a.remove(),200))},H=async a=>{const e=i("edit-cashier-name")?.value?.trim()||"",t=i("edit-cashier-error"),r=i("update-cashier-btn");if(!e){t&&(t.textContent="Nama tidak boleh kosong.",t.classList.remove("hidden"));return}r&&(r.disabled=!0,r.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i>Menyimpan...'),x("Memperbarui...");try{await b.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(a).update({name:e}),g(),p("Nama kasir diperbarui!","success"),await f()}catch(l){t&&(t.textContent="Gagal memperbarui: "+l.message,t.classList.remove("hidden")),r&&(r.disabled=!1,r.innerHTML='<i class="fa-solid fa-floppy-disk mr-2"></i>Simpan Perubahan')}finally{m()}},_=async(a,e)=>{x(e?"Mengaktifkan kasir...":"Menonaktifkan kasir...");try{await b.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(a).update({isActive:e}),p(e?"Kasir diaktifkan ✅":"Kasir dinonaktifkan ❌","success"),await f()}catch{p("Gagal mengubah status kasir","error")}finally{m()}},$=(a,e)=>{A("Hapus Akun Kasir",`Yakin hapus akun kasir "${e}"? Akun tidak dapat dipulihkan dan kasir tidak bisa login lagi.`,async()=>{x("Menghapus akun kasir...");try{await b.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(a).delete(),p(`Kasir "${e}" dihapus`,"success"),await f()}catch{p("Gagal menghapus kasir","error")}finally{m()}},"Ya, Hapus")},E=a=>{const e=i(a),t=i(a+"-eye");e&&(e.type==="password"?(e.type="text",t&&(t.className="fa-solid fa-eye-slash")):(e.type="password",t&&(t.className="fa-solid fa-eye")))};window.renderCashierAccounts=L;window.switchCashierTab=S;window.openAddCashierModal=T;window.closeAddCashierModal=v;window.saveCashierAccount=K;window.openEditCashierModal=j;window.closeEditCashierModal=g;window.updateCashierName=H;window.toggleCashierActive=_;window.deleteCashierAccount=$;window.toggleCashierPassVisibility=E;window.loadCashierList=f;export{v as closeAddCashierModal,g as closeEditCashierModal,$ as deleteCashierAccount,T as openAddCashierModal,j as openEditCashierModal,L as renderCashierAccounts,K as saveCashierAccount,S as switchCashierTab,_ as toggleCashierActive,E as toggleCashierPassVisibility,H as updateCashierName};

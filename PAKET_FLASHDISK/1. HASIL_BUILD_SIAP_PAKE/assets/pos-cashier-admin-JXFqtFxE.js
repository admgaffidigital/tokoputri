import{d as c,a as g}from"./module-member-Bio333YT.js";import{e as i,u as y,a2 as h,t as b,a0 as p,i as d,b as A}from"./module-print-C2-MjUR_.js";import{r as C}from"./module-pos-B3innFID.js";import{f as x}from"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";const M=async()=>{i("admin-content")&&(A("admin-content",`
    <div class="space-y-4 p-4 sm:p-6">
        <!-- Sub-Nav Tab Switcher -->
        <div class="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl w-full sm:w-fit overflow-x-auto hide-scrollbar border border-slate-200/80 dark:border-slate-700">
            <button id="tab-btn-cashier-accounts" onclick="window.switchCashierTab('accounts')" class="px-3.5 sm:px-4 py-2 rounded-xl text-xs font-black bg-white dark:bg-slate-700 text-[var(--color-primary)] dark:text-white shadow-xs transition-all flex items-center gap-2 cursor-pointer shrink-0 border border-[rgba(var(--color-primary-rgb),0.2)] dark:border-slate-600">
                <i class="fa-solid fa-users"></i>
                <span>Akun Kasir</span>
            </button>
            <button id="tab-btn-cashier-shifts" onclick="window.switchCashierTab('shifts')" class="px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-all flex items-center gap-2 cursor-pointer shrink-0 border border-transparent">
                <i class="fa-solid fa-file-invoice-dollar"></i>
                <span>Laporan Shift <span class="hidden sm:inline">&amp; Rekap Kas (Z-Report)</span></span>
            </button>
        </div>

        <!-- Panel 1: Akun Kasir -->
        <div id="cashier-panel-accounts" class="space-y-4">
            <!-- Header -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                    <h2 class="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                        <i class="fa-solid fa-users-gear text-[var(--color-primary)]"></i>
                        Manajemen Akun Kasir
                    </h2>
                    <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        Daftarkan dan kelola akun kasir toko Anda
                    </p>
                </div>
                <button onclick="window.openAddCashierModal()"
                    class="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white text-xs font-bold shadow-md active:scale-95 transition-all cursor-pointer hover:opacity-95"
                    style="background:var(--color-primary)">
                    <i class="fa-solid fa-user-plus"></i>
                    Tambah Kasir Baru
                </button>
            </div>

            <!-- Info Banner -->
            <div class="p-3.5 rounded-2xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 flex gap-3">
                <i class="fa-solid fa-circle-info text-blue-500 text-sm shrink-0 mt-0.5"></i>
                <div class="text-xs text-blue-700 dark:text-blue-300 leading-relaxed">
                    <b>Panduan Akun Kasir:</b> Kasir login melalui icon <i class="fa-solid fa-cash-register"></i> di header toko (storefront), bukan di admin CMS.
                    Akun kasir yang dibuat di sini otomatis dapat login ke mode POS kasir dengan email &amp; password yang Anda daftarkan.
                </div>
            </div>

            <!-- List Kasir -->
            <div id="cashier-list-container">
                <div class="text-center py-16"><i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i></div>
            </div>
        </div>

        <!-- Panel 2: Laporan Shift Kasir -->
        <div id="cashier-panel-shifts" class="hidden"></div>
    </div>`),await u())},S=a=>{const e=i("tab-btn-cashier-accounts"),t=i("tab-btn-cashier-shifts"),s=i("cashier-panel-accounts"),r=i("cashier-panel-shifts");a==="shifts"?(e&&(e.className="px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-all cursor-pointer shrink-0 border border-transparent"),t&&(t.className="px-3.5 sm:px-4 py-2 rounded-xl text-xs font-black bg-white dark:bg-slate-700 text-[var(--color-primary)] dark:text-white shadow-xs transition-all cursor-pointer shrink-0 border border-[rgba(var(--color-primary-rgb),0.2)] dark:border-slate-600"),s&&s.classList.add("hidden"),r&&(r.classList.remove("hidden"),C(r))):(e&&(e.className="px-3.5 sm:px-4 py-2 rounded-xl text-xs font-black bg-white dark:bg-slate-700 text-[var(--color-primary)] dark:text-white shadow-xs transition-all cursor-pointer shrink-0 border border-[rgba(var(--color-primary-rgb),0.2)] dark:border-slate-600"),t&&(t.className="px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-all cursor-pointer shrink-0 border border-transparent"),s&&s.classList.remove("hidden"),r&&r.classList.add("hidden"))},u=async()=>{const a=i("cashier-list-container");if(a)try{const e=await c.collection("freshmart").doc("cms_data").collection("cashier_accounts").orderBy("createdAt","desc").get();if(e.empty){try{localStorage.setItem("pos_has_cashier","false"),await c.collection("freshmart").doc("cms_data").set({hasCashier:!1},{merge:!0})}catch{}typeof window.updatePOSHeaderIcon=="function"&&window.updatePOSHeaderIcon(),a.innerHTML=`
            <div class="flex flex-col items-center justify-center py-16 text-slate-400 dark:text-slate-600">
                <i class="fa-solid fa-user-slash text-4xl mb-3"></i>
                <p class="font-bold text-sm">Belum ada akun kasir</p>
                <p class="text-xs mt-1 text-center">Klik "Tambah Kasir Baru" untuk mendaftarkan kasir pertama</p>
            </div>`;return}const t=e.docs.some(r=>r.data()?.isActive!==!1);try{localStorage.setItem("pos_has_cashier",t?"true":"false"),await c.collection("freshmart").doc("cms_data").set({hasCashier:t},{merge:!0})}catch{}typeof window.updatePOSHeaderIcon=="function"&&window.updatePOSHeaderIcon();const s=e.docs.map(r=>{const o=r.data(),f=r.id,l=o.isActive!==!1,n=o.createdAt?.toDate?o.createdAt.toDate().toLocaleDateString("id-ID"):"-";return`
            <div class="flex items-center gap-3 p-3.5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-xs hover:shadow-sm transition-all">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-sm shrink-0"
                    style="background:${l?"var(--color-primary)":"#94a3b8"}">
                    <i class="fa-solid fa-user-tie"></i>
                </div>
                <div class="flex-1 min-w-0">
                    <p class="text-sm font-bold text-slate-900 dark:text-white truncate">${d(o.name||"Kasir")}</p>
                    <p class="text-[11px] text-slate-400 truncate">${d(o.email||"")}</p>
                    <div class="flex items-center gap-2 mt-0.5">
                        <span class="text-[9px] font-bold px-2 py-0.5 rounded-full ${l?"bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400":"bg-slate-100 text-slate-500 dark:bg-slate-700 dark:text-slate-400"}">
                            ${l?"✅ Aktif":"❌ Nonaktif"}
                        </span>
                        <span class="text-[9px] text-slate-400">Didaftarkan ${d(n)}</span>
                    </div>
                </div>
                <div class="flex items-center gap-1.5 shrink-0">
                    <button onclick="window.toggleCashierActive('${d(f)}', ${!l})"
                        title="${l?"Nonaktifkan":"Aktifkan"}"
                        class="w-8 h-8 rounded-xl flex items-center justify-center text-xs transition-all active:scale-90
                        ${l?"bg-amber-50 text-amber-500 hover:bg-amber-500 hover:text-white dark:bg-amber-900/30":"bg-emerald-50 text-emerald-500 hover:bg-emerald-500 hover:text-white dark:bg-emerald-900/30"}">
                        <i class="fa-solid ${l?"fa-ban":"fa-circle-check"}"></i>
                    </button>
                    <button onclick="window.openEditCashierModal('${d(f)}', '${d(o.name||"")}', '${d(o.email||"")}')"
                        title="Edit Kasir"
                        class="w-8 h-8 rounded-xl flex items-center justify-center text-xs bg-blue-50 text-blue-500 hover:bg-blue-500 hover:text-white transition-all active:scale-90 dark:bg-blue-900/30">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button onclick="window.deleteCashierAccount('${d(f)}', '${d(o.name||"Kasir")}')"
                        title="Hapus Kasir"
                        class="w-8 h-8 rounded-xl flex items-center justify-center text-xs bg-rose-50 text-rose-500 hover:bg-rose-500 hover:text-white transition-all active:scale-90 dark:bg-rose-900/30">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            </div>`}).join("");a.innerHTML=`<div class="space-y-2.5">${s}</div>
        <p class="text-center text-[10px] text-slate-400 mt-3">${e.size} akun kasir terdaftar</p>`}catch(e){console.error("[CashierAdmin] Gagal memuat daftar kasir:",e),a.innerHTML='<div class="text-center py-10 text-rose-500 text-sm"><i class="fa-solid fa-triangle-exclamation mr-2"></i>Gagal memuat data kasir</div>'}},K=()=>{document.body.insertAdjacentHTML("beforeend",`
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
    </div>`),setTimeout(()=>{const a=i("add-cashier-modal-box");a&&a.classList.remove("scale-95");const e=i("new-cashier-name");e&&e.focus()},10)},w=()=>{const a=i("add-cashier-modal");a&&(a.style.opacity="0",setTimeout(()=>a.remove(),200))},L=async()=>{const a=i("new-cashier-name")?.value?.trim()||"",e=i("new-cashier-email")?.value?.trim()||"",t=i("new-cashier-pass")?.value||"",s=i("add-cashier-error"),r=i("save-cashier-btn"),o=l=>{s&&(s.textContent=l,s.classList.remove("hidden"))};if((()=>{s&&s.classList.add("hidden")})(),!a){o("Nama kasir wajib diisi.");return}if(!e||!e.includes("@")){o("Email tidak valid.");return}if(t.length<6){o("Password minimal 6 karakter.");return}r&&(r.disabled=!0,r.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i>Mendaftarkan...'),h("Membuat akun kasir...");try{const n=(x.apps.find(k=>k.name==="pos-cashier-creator")||x.initializeApp(window.FIREBASE_CONFIG||x.app().options,"pos-cashier-creator")).auth(),m=(await n.createUserWithEmailAndPassword(e,t)).user?.uid;if(!m)throw new Error("UID tidak diterima dari Firebase");await n.signOut(),await c.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(m).set({uid:m,name:a,email:e,role:"cashier",isActive:!0,createdAt:x.firestore.FieldValue.serverTimestamp(),createdBy:g.currentUser?.uid||"admin"});try{localStorage.setItem("pos_has_cashier","true"),await c.collection("freshmart").doc("cms_data").set({hasCashier:!0},{merge:!0})}catch{}w(),b(`Kasir "${a}" berhasil didaftarkan! ✅`,"success"),await u(),typeof window.updatePOSHeaderIcon=="function"?window.updatePOSHeaderIcon():typeof window.initPOSAuth=="function"&&window.initPOSAuth()}catch(l){console.error("[CashierAdmin] Gagal membuat kasir:",l);const n=l.code||"";o(n==="auth/email-already-in-use"?"Email sudah digunakan oleh akun lain.":n==="auth/invalid-email"?"Format email tidak valid.":n==="auth/weak-password"?"Password terlalu lemah (min. 6 karakter).":"Gagal mendaftarkan: "+(l.message||"Error tidak diketahui")),r&&(r.disabled=!1,r.innerHTML='<i class="fa-solid fa-floppy-disk mr-2"></i>Simpan & Daftarkan')}finally{p()}},E=(a,e,t)=>{document.body.insertAdjacentHTML("beforeend",`
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
                    <input id="edit-cashier-name" type="text" value="${d(e)}"
                        class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-sm bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] text-slate-900 dark:text-white">
                </div>
                <div>
                    <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Email (Tidak dapat diubah)</label>
                    <input type="email" value="${d(t)}" disabled
                        class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-sm bg-slate-50 dark:bg-slate-800/50 text-slate-400 cursor-not-allowed">
                </div>
                <div id="edit-cashier-error" class="hidden text-xs text-rose-600 font-semibold p-2.5 bg-rose-50 rounded-xl border border-rose-200"></div>
            </div>
            <div class="p-4 border-t border-slate-100 dark:border-slate-800 flex gap-3 shrink-0">
                <button onclick="window.closeEditCashierModal()"
                    class="flex-1 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-slate-50 transition-all">
                    Batal
                </button>
                <button onclick="window.updateCashierName('${d(a)}')" id="update-cashier-btn"
                    class="flex-[2] py-3 rounded-xl text-white font-black text-sm shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2"
                    style="background:var(--color-primary)">
                    <i class="fa-solid fa-floppy-disk"></i> Simpan Perubahan
                </button>
            </div>
        </div>
    </div>`),setTimeout(()=>{const s=i("edit-cashier-modal-box");s&&s.classList.remove("scale-95")},10)},v=()=>{const a=i("edit-cashier-modal");a&&(a.style.opacity="0",setTimeout(()=>a.remove(),200))},T=async a=>{const e=i("edit-cashier-name")?.value?.trim()||"",t=i("edit-cashier-error"),s=i("update-cashier-btn");if(!e){t&&(t.textContent="Nama tidak boleh kosong.",t.classList.remove("hidden"));return}s&&(s.disabled=!0,s.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i>Menyimpan...'),h("Memperbarui...");try{await c.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(a).update({name:e}),v(),b("Nama kasir diperbarui!","success"),await u()}catch(r){t&&(t.textContent="Gagal memperbarui: "+r.message,t.classList.remove("hidden")),s&&(s.disabled=!1,s.innerHTML='<i class="fa-solid fa-floppy-disk mr-2"></i>Simpan Perubahan')}finally{p()}},$=async(a,e)=>{h(e?"Mengaktifkan kasir...":"Menonaktifkan kasir...");try{await c.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(a).update({isActive:e}),b(e?"Kasir diaktifkan ✅":"Kasir dinonaktifkan ❌","success"),await u()}catch{b("Gagal mengubah status kasir","error")}finally{p()}},_=(a,e)=>{y("Hapus Akun Kasir",`Yakin hapus akun kasir "${e}"? Akun tidak dapat dipulihkan dan kasir tidak bisa login lagi.`,async()=>{h("Menghapus akun kasir...");try{await c.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(a).delete(),b(`Kasir "${e}" dihapus`,"success"),await u()}catch{b("Gagal menghapus kasir","error")}finally{p()}},"Ya, Hapus")},P=a=>{const e=i(a),t=i(a+"-eye");e&&(e.type==="password"?(e.type="text",t&&(t.className="fa-solid fa-eye-slash")):(e.type="password",t&&(t.className="fa-solid fa-eye")))};window.renderCashierAccounts=M;window.switchCashierTab=S;window.openAddCashierModal=K;window.closeAddCashierModal=w;window.saveCashierAccount=L;window.openEditCashierModal=E;window.closeEditCashierModal=v;window.updateCashierName=T;window.toggleCashierActive=$;window.deleteCashierAccount=_;window.toggleCashierPassVisibility=P;export{w as closeAddCashierModal,v as closeEditCashierModal,_ as deleteCashierAccount,K as openAddCashierModal,E as openEditCashierModal,M as renderCashierAccounts,L as saveCashierAccount,S as switchCashierTab,$ as toggleCashierActive,P as toggleCashierPassVisibility,T as updateCashierName};

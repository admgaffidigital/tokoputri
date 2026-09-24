import{d as c,a as g}from"./module-member-CX-6tf_7.js";import{e as i,u as y,a2 as x,t as u,a0 as p,i as d,b as A}from"./module-print-C2-MjUR_.js";import{f as b}from"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";const C=async()=>{i("admin-content")&&(A("admin-content",`
    <div class="space-y-4 p-4 sm:p-6">
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
                class="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white text-xs font-bold shadow-md active:scale-95 transition-all"
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
    </div>`),await m())},m=async()=>{const e=i("cashier-list-container");if(e)try{const a=await c.collection("freshmart").doc("cms_data").collection("cashier_accounts").orderBy("createdAt","desc").get();if(a.empty){try{localStorage.setItem("pos_has_cashier","false"),await c.collection("freshmart").doc("cms_data").set({hasCashier:!1},{merge:!0})}catch{}typeof window.updatePOSHeaderIcon=="function"&&window.updatePOSHeaderIcon(),e.innerHTML=`
            <div class="flex flex-col items-center justify-center py-16 text-slate-400 dark:text-slate-600">
                <i class="fa-solid fa-user-slash text-4xl mb-3"></i>
                <p class="font-bold text-sm">Belum ada akun kasir</p>
                <p class="text-xs mt-1 text-center">Klik "Tambah Kasir Baru" untuk mendaftarkan kasir pertama</p>
            </div>`;return}const t=a.docs.some(o=>o.data()?.isActive!==!1);try{localStorage.setItem("pos_has_cashier",t?"true":"false"),await c.collection("freshmart").doc("cms_data").set({hasCashier:t},{merge:!0})}catch{}typeof window.updatePOSHeaderIcon=="function"&&window.updatePOSHeaderIcon();const s=a.docs.map(o=>{const r=o.data(),f=o.id,l=r.isActive!==!1,n=r.createdAt?.toDate?r.createdAt.toDate().toLocaleDateString("id-ID"):"-";return`
            <div class="flex items-center gap-3 p-3.5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-xs hover:shadow-sm transition-all">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-sm shrink-0"
                    style="background:${l?"var(--color-primary)":"#94a3b8"}">
                    <i class="fa-solid fa-user-tie"></i>
                </div>
                <div class="flex-1 min-w-0">
                    <p class="text-sm font-bold text-slate-900 dark:text-white truncate">${d(r.name||"Kasir")}</p>
                    <p class="text-[11px] text-slate-400 truncate">${d(r.email||"")}</p>
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
                    <button onclick="window.openEditCashierModal('${d(f)}', '${d(r.name||"")}', '${d(r.email||"")}')"
                        title="Edit Kasir"
                        class="w-8 h-8 rounded-xl flex items-center justify-center text-xs bg-blue-50 text-blue-500 hover:bg-blue-500 hover:text-white transition-all active:scale-90 dark:bg-blue-900/30">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button onclick="window.deleteCashierAccount('${d(f)}', '${d(r.name||"Kasir")}')"
                        title="Hapus Kasir"
                        class="w-8 h-8 rounded-xl flex items-center justify-center text-xs bg-rose-50 text-rose-500 hover:bg-rose-500 hover:text-white transition-all active:scale-90 dark:bg-rose-900/30">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            </div>`}).join("");e.innerHTML=`<div class="space-y-2.5">${s}</div>
        <p class="text-center text-[10px] text-slate-400 mt-3">${a.size} akun kasir terdaftar</p>`}catch(a){console.error("[CashierAdmin] Gagal memuat daftar kasir:",a),e.innerHTML='<div class="text-center py-10 text-rose-500 text-sm"><i class="fa-solid fa-triangle-exclamation mr-2"></i>Gagal memuat data kasir</div>'}},M=()=>{document.body.insertAdjacentHTML("beforeend",`
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
    </div>`),setTimeout(()=>{const e=i("add-cashier-modal-box");e&&e.classList.remove("scale-95");const a=i("new-cashier-name");a&&a.focus()},10)},w=()=>{const e=i("add-cashier-modal");e&&(e.style.opacity="0",setTimeout(()=>e.remove(),200))},E=async()=>{const e=i("new-cashier-name")?.value?.trim()||"",a=i("new-cashier-email")?.value?.trim()||"",t=i("new-cashier-pass")?.value||"",s=i("add-cashier-error"),o=i("save-cashier-btn"),r=l=>{s&&(s.textContent=l,s.classList.remove("hidden"))};if((()=>{s&&s.classList.add("hidden")})(),!e){r("Nama kasir wajib diisi.");return}if(!a||!a.includes("@")){r("Email tidak valid.");return}if(t.length<6){r("Password minimal 6 karakter.");return}o&&(o.disabled=!0,o.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i>Mendaftarkan...'),x("Membuat akun kasir...");try{const n=(b.apps.find(k=>k.name==="pos-cashier-creator")||b.initializeApp(window.FIREBASE_CONFIG||b.app().options,"pos-cashier-creator")).auth(),h=(await n.createUserWithEmailAndPassword(a,t)).user?.uid;if(!h)throw new Error("UID tidak diterima dari Firebase");await n.signOut(),await c.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(h).set({uid:h,name:e,email:a,role:"cashier",isActive:!0,createdAt:b.firestore.FieldValue.serverTimestamp(),createdBy:g.currentUser?.uid||"admin"});try{localStorage.setItem("pos_has_cashier","true"),await c.collection("freshmart").doc("cms_data").set({hasCashier:!0},{merge:!0})}catch{}w(),u(`Kasir "${e}" berhasil didaftarkan! ✅`,"success"),await m(),typeof window.updatePOSHeaderIcon=="function"?window.updatePOSHeaderIcon():typeof window.initPOSAuth=="function"&&window.initPOSAuth()}catch(l){console.error("[CashierAdmin] Gagal membuat kasir:",l);const n=l.code||"";r(n==="auth/email-already-in-use"?"Email sudah digunakan oleh akun lain.":n==="auth/invalid-email"?"Format email tidak valid.":n==="auth/weak-password"?"Password terlalu lemah (min. 6 karakter).":"Gagal mendaftarkan: "+(l.message||"Error tidak diketahui")),o&&(o.disabled=!1,o.innerHTML='<i class="fa-solid fa-floppy-disk mr-2"></i>Simpan & Daftarkan')}finally{p()}},$=(e,a,t)=>{document.body.insertAdjacentHTML("beforeend",`
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
                    <input id="edit-cashier-name" type="text" value="${d(a)}"
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
                <button onclick="window.updateCashierName('${d(e)}')" id="update-cashier-btn"
                    class="flex-[2] py-3 rounded-xl text-white font-black text-sm shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2"
                    style="background:var(--color-primary)">
                    <i class="fa-solid fa-floppy-disk"></i> Simpan Perubahan
                </button>
            </div>
        </div>
    </div>`),setTimeout(()=>{const s=i("edit-cashier-modal-box");s&&s.classList.remove("scale-95")},10)},v=()=>{const e=i("edit-cashier-modal");e&&(e.style.opacity="0",setTimeout(()=>e.remove(),200))},_=async e=>{const a=i("edit-cashier-name")?.value?.trim()||"",t=i("edit-cashier-error"),s=i("update-cashier-btn");if(!a){t&&(t.textContent="Nama tidak boleh kosong.",t.classList.remove("hidden"));return}s&&(s.disabled=!0,s.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i>Menyimpan...'),x("Memperbarui...");try{await c.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(e).update({name:a}),v(),u("Nama kasir diperbarui!","success"),await m()}catch(o){t&&(t.textContent="Gagal memperbarui: "+o.message,t.classList.remove("hidden")),s&&(s.disabled=!1,s.innerHTML='<i class="fa-solid fa-floppy-disk mr-2"></i>Simpan Perubahan')}finally{p()}},K=async(e,a)=>{x(a?"Mengaktifkan kasir...":"Menonaktifkan kasir...");try{await c.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(e).update({isActive:a}),u(a?"Kasir diaktifkan ✅":"Kasir dinonaktifkan ❌","success"),await m()}catch{u("Gagal mengubah status kasir","error")}finally{p()}},H=(e,a)=>{y("Hapus Akun Kasir",`Yakin hapus akun kasir "${a}"? Akun tidak dapat dipulihkan dan kasir tidak bisa login lagi.`,async()=>{x("Menghapus akun kasir...");try{await c.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(e).delete(),u(`Kasir "${a}" dihapus`,"success"),await m()}catch{u("Gagal menghapus kasir","error")}finally{p()}},"Ya, Hapus")},S=e=>{const a=i(e),t=i(e+"-eye");a&&(a.type==="password"?(a.type="text",t&&(t.className="fa-solid fa-eye-slash")):(a.type="password",t&&(t.className="fa-solid fa-eye")))};window.renderCashierAccounts=C;window.openAddCashierModal=M;window.closeAddCashierModal=w;window.saveCashierAccount=E;window.openEditCashierModal=$;window.closeEditCashierModal=v;window.updateCashierName=_;window.toggleCashierActive=K;window.deleteCashierAccount=H;window.toggleCashierPassVisibility=S;export{w as closeAddCashierModal,v as closeEditCashierModal,H as deleteCashierAccount,M as openAddCashierModal,$ as openEditCashierModal,C as renderCashierAccounts,E as saveCashierAccount,K as toggleCashierActive,S as toggleCashierPassVisibility,_ as updateCashierName};

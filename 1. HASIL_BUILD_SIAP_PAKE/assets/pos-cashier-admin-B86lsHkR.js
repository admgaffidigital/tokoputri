import{e as n,x as O,aa as v,l as x,v as u,a8 as y,i as d,b as D,$ as K}from"./module-print-BXsZ56UT.js";import{v as h,R as l,P as S,w as B}from"./module-admin-9ktNBv4l.js";import{r as F}from"./module-pos-rgd2vVT2.js";import{f as A}from"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";import"./module-faq-mvKDCeZ6.js";let g=[],P="all";const q=async()=>{if(!n("admin-content"))return;const e=document.querySelector("#view-admin .scroll-content");e&&(e.scrollTop=0),D("admin-content",`
    <div class="space-y-4 max-w-5xl mx-auto pb-16">
        <!-- Native App Sticky Segmented Control Bar -->
        <div class="sticky top-0 z-20 -mx-4 lg:-mx-8 px-4 lg:px-8 py-3 bg-slate-50/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-2xs">
            <div class="p-1.5 bg-slate-100 dark:bg-slate-800/90 rounded-2xl max-w-md w-full mx-auto grid grid-cols-2 gap-1.5 border border-slate-200/90 dark:border-slate-700/80 shadow-inner">
                <button id="tab-btn-cashier-accounts" onclick="window.switchCashierTab('accounts')" 
                    class="py-2.5 px-4 rounded-xl text-xs font-black text-white transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 shadow-md"
                    style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                    <i class="fa-solid fa-users-gear text-white"></i>
                    <span>Staf &amp; Hak Akses</span>
                </button>
                <button id="tab-btn-cashier-shifts" onclick="window.switchCashierTab('shifts')" 
                    class="py-2.5 px-4 rounded-xl text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-700/60 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95">
                    <i class="fa-solid fa-file-invoice-dollar"></i>
                    <span>Laporan Shift Kasir</span>
                </button>
            </div>
        </div>

        <!-- Panel 1: Manajemen Staf & Hak Akses -->
        <div id="cashier-panel-accounts" class="space-y-4 pt-1">
            <!-- Header -->
            <div class="flex items-center justify-between gap-3 pt-1">
                <div>
                    <h2 class="text-base font-black text-slate-900 dark:text-white flex items-center gap-2.5">
                        <span class="w-8 h-8 rounded-xl flex items-center justify-center text-xs shrink-0 shadow-2xs border border-[rgba(var(--color-primary-rgb),0.25)]" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary)">
                            <i class="fa-solid fa-user-shield"></i>
                        </span>
                        <span>Manajemen Staf &amp; Hak Akses</span>
                    </h2>
                    <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Kelola akun kasir, admin, dan batasan wewenang tiap modul toko</p>
                </div>
                <button onclick="window.openAddStaffModal()"
                    class="flex items-center gap-2 px-4 py-2.5 rounded-2xl text-white text-xs font-black shadow-md active:scale-95 transition-all cursor-pointer hover:opacity-95 shrink-0"
                    style="background:var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                    <i class="fa-solid fa-user-plus text-xs"></i>
                    <span>Tambah Staf</span>
                </button>
            </div>

            <!-- Kartu Owner Utama Toko (Super Admin Protection) -->
            <div class="relative overflow-hidden p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-purple-200 dark:border-purple-800/60 bg-gradient-to-br from-purple-500/10 via-slate-50 to-white dark:from-purple-950/40 dark:via-slate-800 dark:to-slate-800 shadow-2xs flex items-start gap-4">
                <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-lg shrink-0 shadow-md bg-gradient-to-tr from-purple-600 to-indigo-500 text-white border border-purple-300 dark:border-purple-700">
                    <i class="fa-solid fa-crown text-amber-300"></i>
                </div>
                <div class="space-y-1.5 min-w-0 flex-1">
                    <div class="flex items-center gap-2 flex-wrap">
                        <span class="text-sm font-black text-slate-900 dark:text-white">Akun Pemilik Utama (Owner)</span>
                        <span class="inline-flex items-center gap-1 text-[10px] font-black px-2.5 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900/70 text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-700">
                            <i class="fa-solid fa-lock text-[9px]"></i> Super Admin Terproteksi
                        </span>
                    </div>
                    <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        Akun Owner memiliki akses 100% penuh atas seluruh modul toko, keuangan rahasia, laporan laba rugi, pengaturan rekening bank, serta satu-satunya akun yang berhak mendaftarkan dan mengubah hak akses staf lain.
                    </p>
                    <div class="flex items-center gap-3 pt-1 text-[11px] text-purple-700 dark:text-purple-300 font-bold">
                        <span class="flex items-center gap-1.5"><i class="fa-solid fa-circle-check text-emerald-500"></i> Status: Master Aktif</span>
                        <span>•</span>
                        <span class="flex items-center gap-1.5"><i class="fa-solid fa-key"></i> Hak Akses: 22 Modul Terbuka</span>
                    </div>
                </div>
            </div>

            <!-- Filter Kategori Staf -->
            <div class="flex items-center gap-2 overflow-x-auto pb-1 custom-scrollbar">
                <button onclick="window.filterStaffRole('all')" id="staff-filter-all"
                    class="staff-filter-btn px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-2xs flex items-center gap-1.5 active:scale-95"
                    style="background: var(--color-primary); color: #fff;">
                    <i class="fa-solid fa-users text-[10px]"></i>
                    <span>Semua Staf</span>
                </button>
                <button onclick="window.filterStaffRole('admin')" id="staff-filter-admin"
                    class="staff-filter-btn px-3.5 py-1.5 rounded-xl text-xs font-bold bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-slate-300 transition-all cursor-pointer shadow-2xs flex items-center gap-1.5 active:scale-95">
                    <i class="fa-solid fa-shield-halved text-[10px] text-blue-500"></i>
                    <span>Admin Toko</span>
                </button>
                <button onclick="window.filterStaffRole('cashier')" id="staff-filter-cashier"
                    class="staff-filter-btn px-3.5 py-1.5 rounded-xl text-xs font-bold bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-slate-300 transition-all cursor-pointer shadow-2xs flex items-center gap-1.5 active:scale-95">
                    <i class="fa-solid fa-cash-register text-[10px] text-emerald-500"></i>
                    <span>Kasir POS</span>
                </button>
            </div>

            <!-- List Staf Terdaftar -->
            <div id="cashier-list-container">
                <div class="text-center py-16"><i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i></div>
            </div>
        </div>

        <!-- Panel 2: Laporan Shift Kasir -->
        <div id="cashier-panel-shifts" class="hidden pt-1"></div>
    </div>`),await w()},G=t=>{const e=document.querySelector("#view-admin .scroll-content");e&&(e.scrollTop=0);const s=n("tab-btn-cashier-accounts"),a=n("tab-btn-cashier-shifts"),r=n("cashier-panel-accounts"),o=n("cashier-panel-shifts"),f=(i,m,k)=>{i&&(i.className="py-2.5 px-4 rounded-xl text-xs font-black text-white transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 shadow-md",i.style.background="var(--color-primary)",i.style.boxShadow="0 4px 14px rgba(var(--color-primary-rgb), 0.35)",i.innerHTML=`${m}<span>${k}</span>`)},c=(i,m,k)=>{i&&(i.className="py-2.5 px-4 rounded-xl text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-700/60 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95",i.style.background="transparent",i.style.boxShadow="none",i.innerHTML=`${m}<span>${k}</span>`)};t==="shifts"?(c(s,'<i class="fa-solid fa-users-gear"></i>',"Staf &amp; Hak Akses"),f(a,'<i class="fa-solid fa-file-invoice-dollar text-white"></i>',"Laporan Shift Kasir"),r&&r.classList.add("hidden"),o&&(o.classList.remove("hidden"),F(o))):(f(s,'<i class="fa-solid fa-users-gear text-white"></i>',"Staf &amp; Hak Akses"),c(a,'<i class="fa-solid fa-file-invoice-dollar"></i>',"Laporan Shift Kasir"),r&&r.classList.remove("hidden"),o&&o.classList.add("hidden"))},V=t=>{P=t,document.querySelectorAll(".staff-filter-btn").forEach(s=>{s.style.background="transparent",s.style.color="",s.classList.add("bg-white","dark:bg-slate-800","text-slate-600","dark:text-slate-300")});const e=n(`staff-filter-${t}`);e&&(e.classList.remove("bg-white","dark:bg-slate-800","text-slate-600","dark:text-slate-300"),e.style.background="var(--color-primary)",e.style.color="#fff"),H()},z=t=>{if(t.role===l.OWNER)return S.length;if(t.permissions)return Object.values(t.permissions).filter(Boolean).length;const e=h[t.role]||h[l.CASHIER];return Object.values(e).filter(Boolean).length},H=()=>{const t=n("cashier-list-container");if(!t)return;let e=g;if(P==="admin"?e=g.filter(a=>a.role===l.ADMIN||a.role===l.OWNER):P==="cashier"&&(e=g.filter(a=>a.role===l.CASHIER||!a.role)),e.length===0){t.innerHTML=`
        <div class="flex flex-col items-center justify-center py-16 text-slate-400 dark:text-slate-600 bg-white dark:bg-slate-800/60 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-8 text-center">
            <div class="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-2xl mb-3 text-slate-400">
                <i class="fa-solid fa-user-slash"></i>
            </div>
            <p class="font-bold text-sm text-slate-700 dark:text-slate-300">Belum ada akun staf pada kategori ini</p>
            <p class="text-xs mt-1 text-slate-400">Klik "Tambah Staf" untuk mendaftarkan akun kasir atau admin baru</p>
        </div>`;return}const s=e.map(a=>{const r=a.uid,o=a.isActive!==!1,f=a.createdAt?.toDate?a.createdAt.toDate().toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):"-",c=(a.name||"Staf").trim().split(/\s+/).slice(0,2).map(k=>k[0]).join("").toUpperCase()||"ST",i=a.role||l.CASHIER,m=z(a);return`
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 p-4 sm:p-5 bg-white dark:bg-slate-800/95 rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:shadow-xs transition-all">
            <div class="flex items-start sm:items-center gap-3.5 min-w-0">
                <div class="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm shrink-0 shadow-2xs border border-[rgba(var(--color-primary-rgb),0.25)]"
                    style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary)">
                    ${c}
                </div>
                <div class="min-w-0 flex-1">
                    <div class="flex items-center gap-2 flex-wrap">
                        <p class="text-sm font-black text-slate-900 dark:text-white truncate">${d(a.name||"Staf")}</p>
                        ${B(i)}
                        <span class="inline-flex items-center gap-1.5 text-[10px] font-black px-2.5 py-0.5 rounded-full ${o?"bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60":"bg-slate-100 dark:bg-slate-700 text-slate-500 border border-slate-200 dark:border-slate-600"}">
                            <span class="w-1.5 h-1.5 rounded-full ${o?"bg-emerald-500 animate-pulse":"bg-slate-400"}"></span>
                            ${o?"Aktif":"Nonaktif"}
                        </span>
                    </div>
                    <div class="flex items-center gap-3 mt-1.5 text-xs text-slate-500 dark:text-slate-400 flex-wrap">
                        <span class="flex items-center gap-1 font-medium"><i class="fa-solid fa-envelope text-[10px] text-slate-400"></i> ${d(a.email||"")}</span>
                        <span>•</span>
                        <span class="inline-flex items-center gap-1 font-bold text-[11px] text-[var(--color-primary)]">
                            <i class="fa-solid fa-key text-[9px]"></i> ${m} Modul Diizinkan
                        </span>
                        <span>•</span>
                        <span class="flex items-center gap-1 text-[11px] text-slate-400 dark:text-slate-500"><i class="fa-solid fa-calendar-days text-[10px]"></i> Terdaftar: ${d(f)}</span>
                    </div>
                </div>
            </div>
            <!-- Tombol Aksi Hak Akses, Status & Edit -->
            <div class="flex items-center gap-2 shrink-0 self-end sm:self-center border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-100 dark:border-slate-700/60 w-full sm:w-auto justify-end">
                <button onclick="window.openPermissionsModal('${d(r)}')"
                    title="Atur Hak Akses Modul"
                    class="px-3 py-2 rounded-xl text-xs font-bold transition-all active:scale-95 cursor-pointer shadow-2xs flex items-center gap-1.5 border border-purple-200 dark:border-purple-800/60 bg-purple-50 hover:bg-purple-100 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300">
                    <i class="fa-solid fa-sliders text-[10px]"></i>
                    <span>Hak Akses</span>
                </button>
                <button onclick="window.toggleStaffActive('${d(r)}', ${!o})"
                    title="${o?"Nonaktifkan Akun Staf":"Aktifkan Akun Staf"}"
                    class="w-9 h-9 rounded-xl flex items-center justify-center text-xs transition-all active:scale-95 cursor-pointer shadow-2xs border
                    ${o?"bg-slate-50 hover:bg-amber-50 dark:bg-slate-700/80 dark:hover:bg-amber-950/40 text-slate-600 dark:text-slate-300 hover:text-amber-600 border-slate-200/80 dark:border-slate-700 hover:border-amber-300":"bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 border-emerald-200 dark:border-emerald-800"}">
                    <i class="fa-solid ${o?"fa-ban":"fa-circle-check"}"></i>
                </button>
                <button onclick="window.openEditStaffModal('${d(r)}', '${d(a.name||"")}', '${d(a.email||"")}', '${d(i)}')"
                    title="Edit Profil Staf"
                    class="w-9 h-9 rounded-xl flex items-center justify-center text-xs bg-slate-50 hover:bg-slate-100 dark:bg-slate-700/80 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 hover:text-[var(--color-primary)] border border-slate-200/80 dark:border-slate-700 transition-all active:scale-95 cursor-pointer shadow-2xs">
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button onclick="window.deleteStaffAccount('${d(r)}', '${d(a.name||"Staf")}')"
                    title="Hapus Akun Staf"
                    class="w-9 h-9 rounded-xl flex items-center justify-center text-xs bg-slate-50 hover:bg-rose-50 dark:bg-slate-700/80 dark:hover:bg-rose-950/40 text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 border border-slate-200/80 dark:border-slate-700 hover:border-rose-200 transition-all active:scale-95 cursor-pointer shadow-2xs">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        </div>`}).join("");t.innerHTML=`<div class="space-y-2.5">${s}</div>
    <p class="text-center text-[10px] text-slate-400 mt-3 font-medium">${e.length} staf terdaftar</p>`},w=async()=>{const t=n("cashier-list-container");if(t)try{let e;try{e=await x.collection("freshmart").doc("cms_data").collection("cashier_accounts").orderBy("createdAt","desc").get()}catch{e=await x.collection("freshmart").doc("cms_data").collection("cashier_accounts").get()}g=e.docs.map(a=>({uid:a.id,...a.data()}));const s=g.some(a=>a.isActive!==!1&&a.role===l.CASHIER);try{localStorage.setItem("pos_has_cashier",s?"true":"false"),await x.collection("freshmart").doc("cms_data").set({hasCashier:s},{merge:!0})}catch{}typeof window.updatePOSHeaderIcon=="function"&&window.updatePOSHeaderIcon(),H()}catch(e){console.error("[StaffAdmin] Gagal memuat daftar staf:",e),t.innerHTML=`
        <div class="text-center py-10 p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 flex flex-col items-center justify-center">
            <div class="w-12 h-12 rounded-2xl bg-rose-50 dark:bg-rose-950/40 text-rose-500 flex items-center justify-center text-2xl mb-2.5 shadow-2xs">
                <i class="fa-solid fa-triangle-exclamation"></i>
            </div>
            <p class="text-xs font-bold text-slate-700 dark:text-slate-300">Gagal memuat data staf</p>
            <p class="text-[11px] text-slate-400 mt-0.5">${d(e.message||"Periksa koneksi internet atau login admin")}</p>
            <button onclick="window.loadStaffList()" class="mt-3 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 transition-all cursor-pointer inline-flex items-center gap-1.5 active:scale-95">
                <i class="fa-solid fa-arrows-rotate text-[10px]"></i>
                <span>Coba Lagi</span>
            </button>
        </div>`}},j=()=>{const t=(e,s,a)=>{const r=S.filter(o=>o.group===e);return`
        <div class="space-y-2">
            <p class="text-[11px] font-black uppercase tracking-wider text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                <i class="fa-solid ${a} text-[var(--color-primary)]"></i>
                <span>${s}</span>
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                ${r.map(o=>`
                <label class="flex items-start gap-2.5 p-2.5 rounded-xl border border-slate-200/80 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-800/60 hover:bg-white dark:hover:bg-slate-800 transition-all cursor-pointer text-left">
                    <input type="checkbox" name="staff_perm" value="${o.key}" class="mt-0.5 rounded border-slate-300 text-[var(--color-primary)] focus:ring-[var(--color-primary)]/30">
                    <div class="min-w-0">
                        <p class="text-xs font-bold text-slate-800 dark:text-white flex items-center gap-1.5">
                            <i class="fa-solid ${o.icon} text-[10px] text-slate-400"></i>
                            <span>${o.label}</span>
                        </p>
                        <p class="text-[10px] text-slate-400 dark:text-slate-500 leading-tight mt-0.5">${o.desc}</p>
                    </div>
                </label>`).join("")}
            </div>
        </div>`};document.body.insertAdjacentHTML("beforeend",`
    <div id="add-staff-modal" class="fixed inset-0 z-[9990] flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs"
        onclick="if(event.target===this) window.closeAddStaffModal()">
        <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-2xl flex flex-col max-h-[92vh] overflow-hidden scale-95 transition-transform duration-300 border border-slate-200 dark:border-slate-800" id="add-staff-modal-box">
            <!-- Modal Header -->
            <div class="flex items-center justify-between p-5 border-b border-slate-100 dark:border-slate-800 shrink-0">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-sm shadow-2xs border border-[rgba(var(--color-primary-rgb),0.25)]"
                        style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary)">
                        <i class="fa-solid fa-user-plus"></i>
                    </div>
                    <div>
                        <h3 class="font-black text-sm text-slate-900 dark:text-white">Daftarkan Staf Baru</h3>
                        <p class="text-[11px] text-slate-400">Buat akun untuk kasir atau administrator toko</p>
                    </div>
                </div>
                <button onclick="window.closeAddStaffModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 flex items-center justify-center hover:bg-rose-50 hover:text-rose-500 transition-all active:scale-90 cursor-pointer">
                    <i class="fa-solid fa-xmark text-sm"></i>
                </button>
            </div>

            <!-- Modal Body (Scrollable) -->
            <div class="p-5 space-y-4 overflow-y-auto flex-1 custom-scrollbar">
                <!-- Info Akun Dasar -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Nama Lengkap Staf <span class="text-rose-500">*</span></label>
                        <input id="new-staff-name" type="text" placeholder="Contoh: Rina Kasir / Budi Supervisor"
                            class="w-full border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3 text-sm bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] text-slate-900 dark:text-white transition-all shadow-inner">
                    </div>
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Email Login <span class="text-rose-500">*</span></label>
                        <input id="new-staff-email" type="email" placeholder="staf@tokoputri.com"
                            class="w-full border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3 text-sm bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] text-slate-900 dark:text-white transition-all shadow-inner">
                    </div>
                </div>

                <div>
                    <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Password Staf (Min. 6 Karakter) <span class="text-rose-500">*</span></label>
                    <div class="relative">
                        <input id="new-staff-pass" type="password" placeholder="Minimal 6 karakter..."
                            class="w-full border border-slate-200 dark:border-slate-700 rounded-2xl pl-4 pr-12 py-3 text-sm bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] text-slate-900 dark:text-white transition-all shadow-inner">
                        <button type="button" onclick="window.toggleStaffPassVisibility('new-staff-pass')"
                            class="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer p-1">
                            <i id="new-staff-pass-eye" class="fa-solid fa-eye text-sm"></i>
                        </button>
                    </div>
                </div>

                <!-- Pilihan Role Pokok -->
                <div>
                    <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Jabatan / Role Pokok <span class="text-rose-500">*</span></label>
                    <div class="grid grid-cols-3 gap-2">
                        <label class="flex flex-col items-center justify-center p-3 rounded-2xl border-2 border-emerald-500/40 bg-emerald-50/50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-200 cursor-pointer hover:border-emerald-500 transition-all text-center">
                            <input type="radio" name="new_staff_role" value="${l.CASHIER}" checked onchange="window.applyNewStaffPreset('${l.CASHIER}')" class="sr-only">
                            <i class="fa-solid fa-cash-register text-lg mb-1 text-emerald-600"></i>
                            <span class="text-xs font-black">Kasir POS</span>
                            <span class="text-[9px] text-slate-400 mt-0.5">Penjualan Fisik</span>
                        </label>
                        <label class="flex flex-col items-center justify-center p-3 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 cursor-pointer hover:border-blue-500 transition-all text-center">
                            <input type="radio" name="new_staff_role" value="${l.ADMIN}" onchange="window.applyNewStaffPreset('${l.ADMIN}')" class="sr-only">
                            <i class="fa-solid fa-shield-halved text-lg mb-1 text-blue-500"></i>
                            <span class="text-xs font-black">Admin Toko</span>
                            <span class="text-[9px] text-slate-400 mt-0.5">Operasional CMS</span>
                        </label>
                        <label class="flex flex-col items-center justify-center p-3 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 cursor-pointer hover:border-purple-500 transition-all text-center">
                            <input type="radio" name="new_staff_role" value="manager" onchange="window.applyNewStaffPreset('manager')" class="sr-only">
                            <i class="fa-solid fa-user-tie text-lg mb-1 text-purple-500"></i>
                            <span class="text-xs font-black">Manajer</span>
                            <span class="text-[9px] text-slate-400 mt-0.5">Akses Luas</span>
                        </label>
                    </div>
                </div>

                <!-- Bagian Hak Akses Modul Dinamis -->
                <div class="border-t border-slate-100 dark:border-slate-800 pt-3 space-y-4">
                    <div class="flex items-center justify-between">
                        <div>
                            <h4 class="text-xs font-black text-slate-900 dark:text-white">Rincian Hak Akses Modul</h4>
                            <p class="text-[10px] text-slate-400">Centang modul yang diizinkan untuk akun staf ini</p>
                        </div>
                        <div class="flex items-center gap-1.5 text-[11px]">
                            <button type="button" onclick="window.setAllNewStaffPerms(true)" class="px-2 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold active:scale-95 transition-all">Pilih Semua</button>
                            <button type="button" onclick="window.setAllNewStaffPerms(false)" class="px-2 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold active:scale-95 transition-all">Kosongkan</button>
                        </div>
                    </div>

                    ${t("operasional","1. Operasional Toko","fa-dolly")}
                    ${t("konten","2. Katalog & Konten Toko","fa-layer-group")}
                    ${t("sensitif","3. Finansial & Pengaturan Sensitif (Khusus Owner)","fa-lock")}
                </div>

                <div id="add-staff-error" class="hidden text-xs text-rose-600 font-semibold p-3 bg-rose-50 dark:bg-rose-950/40 rounded-2xl border border-rose-200 dark:border-rose-900/50"></div>
            </div>

            <!-- Modal Footer -->
            <div class="p-4 border-t border-slate-100 dark:border-slate-800 flex gap-3 shrink-0 bg-slate-50/50 dark:bg-slate-900/50">
                <button onclick="window.closeAddStaffModal()"
                    class="flex-1 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-slate-100 active:scale-95 transition-all cursor-pointer">
                    Batal
                </button>
                <button onclick="window.saveStaffAccount()" id="save-staff-btn"
                    class="flex-[2] py-3.5 rounded-2xl text-white font-black text-sm shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    style="background:var(--color-primary)">
                    <i class="fa-solid fa-floppy-disk"></i> Simpan &amp; Daftarkan Staf
                </button>
            </div>
        </div>
    </div>`),window.applyNewStaffPreset(l.CASHIER),setTimeout(()=>{const e=n("add-staff-modal-box");e&&e.classList.remove("scale-95");const s=n("new-staff-name");s&&s.focus()},10)},E=()=>{const t=n("add-staff-modal");t&&(t.style.opacity="0",setTimeout(()=>t.remove(),200))},U=t=>{const e=h[t]||h[l.CASHIER];document.querySelectorAll('#add-staff-modal input[name="staff_perm"]').forEach(s=>{s.checked=!!e[s.value]}),document.querySelectorAll('#add-staff-modal input[name="new_staff_role"]').forEach(s=>{const a=s.closest("label");a&&(s.value===t?a.className="flex flex-col items-center justify-center p-3 rounded-2xl border-2 border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.08)] text-slate-900 dark:text-white cursor-pointer shadow-xs transition-all text-center":a.className="flex flex-col items-center justify-center p-3 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 cursor-pointer hover:border-slate-300 transition-all text-center")})},W=t=>{document.querySelectorAll('#add-staff-modal input[name="staff_perm"]').forEach(e=>{e.checked=!!t})},_=async()=>{const t=n("new-staff-name")?.value?.trim()||"",e=n("new-staff-email")?.value?.trim()||"",s=n("new-staff-pass")?.value||"",a=document.querySelector('#add-staff-modal input[name="new_staff_role"]:checked'),r=a?a.value:l.CASHIER,o=r==="manager"||r===l.ADMIN?l.ADMIN:r,f=n("add-staff-error"),c=n("save-staff-btn"),i=p=>{f&&(f.textContent=p,f.classList.remove("hidden"))};if((()=>{f&&f.classList.add("hidden")})(),!t){i("Nama staf wajib diisi.");return}if(!e||!e.includes("@")){i("Email login tidak valid.");return}if(s.length<6){i("Password minimal 6 karakter.");return}const k={};S.forEach(p=>{const b=document.querySelector(`#add-staff-modal input[name="staff_perm"][value="${p.key}"]`);k[p.key]=b?b.checked:!1}),c&&(c.disabled=!0,c.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i>Mendaftarkan ke Firebase...'),v("Mendaftarkan akun staf...");try{const b=(A.apps.find(C=>C.name==="pos-cashier-creator")||A.initializeApp(window.FIREBASE_CONFIG||A.app().options,"pos-cashier-creator")).auth(),M=(await b.createUserWithEmailAndPassword(e,s)).user?.uid;if(!M)throw new Error("UID tidak diterima dari Firebase");if(await b.signOut(),await x.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(M).set({uid:M,name:t,email:e,role:o,permissions:k,isActive:!0,createdAt:A.firestore.FieldValue.serverTimestamp(),createdBy:K.currentUser?.uid||"owner"}),o===l.CASHIER)try{localStorage.setItem("pos_has_cashier","true"),await x.collection("freshmart").doc("cms_data").set({hasCashier:!0},{merge:!0})}catch{}E(),u(`Akun "${t}" (${o.toUpperCase()}) berhasil didaftarkan! ✅`,"success"),await w(),typeof window.updatePOSHeaderIcon=="function"&&window.updatePOSHeaderIcon()}catch(p){console.error("[StaffAdmin] Gagal membuat akun staf:",p);const b=p.code||"";i(b==="auth/email-already-in-use"?"Email sudah digunakan oleh akun lain di Firebase.":b==="auth/invalid-email"?"Format email tidak valid.":b==="auth/weak-password"?"Password terlalu lemah (min. 6 karakter).":"Gagal mendaftarkan: "+(p.message||"Terjadi kesalahan sistem")),c&&(c.disabled=!1,c.innerHTML='<i class="fa-solid fa-floppy-disk mr-2"></i>Simpan &amp; Daftarkan Staf')}finally{y()}},J=t=>{const e=g.find(r=>r.uid===t);if(!e){u("Data staf tidak ditemukan!");return}const s=e.permissions||h[e.role]||h[l.CASHIER],a=(r,o,f)=>{const c=S.filter(i=>i.group===r);return`
        <div class="space-y-2">
            <p class="text-[11px] font-black uppercase tracking-wider text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                <i class="fa-solid ${f} text-[var(--color-primary)]"></i>
                <span>${o}</span>
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                ${c.map(i=>{const m=s[i.key]===!0;return`
                    <label class="flex items-start gap-2.5 p-2.5 rounded-xl border border-slate-200/80 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-800/60 hover:bg-white dark:hover:bg-slate-800 transition-all cursor-pointer text-left">
                        <input type="checkbox" name="edit_staff_perm" value="${i.key}" ${m?"checked":""} class="mt-0.5 rounded border-slate-300 text-[var(--color-primary)] focus:ring-[var(--color-primary)]/30">
                        <div class="min-w-0">
                            <p class="text-xs font-bold text-slate-800 dark:text-white flex items-center gap-1.5">
                                <i class="fa-solid ${i.icon} text-[10px] text-slate-400"></i>
                                <span>${i.label}</span>
                            </p>
                            <p class="text-[10px] text-slate-400 dark:text-slate-500 leading-tight mt-0.5">${i.desc}</p>
                        </div>
                    </label>`}).join("")}
            </div>
        </div>`};document.body.insertAdjacentHTML("beforeend",`
    <div id="permissions-modal" class="fixed inset-0 z-[9990] flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs"
        onclick="if(event.target===this) window.closePermissionsModal()">
        <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-2xl flex flex-col max-h-[92vh] overflow-hidden scale-95 transition-transform duration-300 border border-slate-200 dark:border-slate-800" id="permissions-modal-box">
            <!-- Modal Header -->
            <div class="flex items-center justify-between p-5 border-b border-slate-100 dark:border-slate-800 shrink-0">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-sm shadow-2xs border border-purple-200 dark:border-purple-800/60 bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-300">
                        <i class="fa-solid fa-sliders"></i>
                    </div>
                    <div>
                        <h3 class="font-black text-sm text-slate-900 dark:text-white">Atur Hak Akses: ${d(e.name||"Staf")}</h3>
                        <p class="text-[11px] text-slate-400">Sesuaikan modul yang boleh dibuka oleh akun ini</p>
                    </div>
                </div>
                <button onclick="window.closePermissionsModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 flex items-center justify-center hover:bg-rose-50 hover:text-rose-500 transition-all active:scale-90 cursor-pointer">
                    <i class="fa-solid fa-xmark text-sm"></i>
                </button>
            </div>

            <!-- Modal Body -->
            <div class="p-5 space-y-4 overflow-y-auto flex-1 custom-scrollbar">
                <!-- 1-Click Preset Bar -->
                <div class="p-3 bg-slate-100/80 dark:bg-slate-800/80 rounded-2xl border border-slate-200/80 dark:border-slate-700/80">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Preset Cepat:</span>
                        <div class="flex items-center gap-1.5 text-[11px]">
                            <button type="button" onclick="window.setAllEditStaffPerms(true)" class="text-xs text-[var(--color-primary)] font-bold hover:underline">Semua</button>
                            <span class="text-slate-300">•</span>
                            <button type="button" onclick="window.setAllEditStaffPerms(false)" class="text-xs text-rose-500 font-bold hover:underline">Kosongkan</button>
                        </div>
                    </div>
                    <div class="grid grid-cols-4 gap-1.5">
                        <button type="button" onclick="window.applyEditStaffPreset('${l.CASHIER}')" class="py-2 px-2 rounded-xl text-[11px] font-bold bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 hover:border-emerald-500 hover:text-emerald-600 transition-all active:scale-95 shadow-2xs">Kasir POS</button>
                        <button type="button" onclick="window.applyEditStaffPreset('${l.ADMIN}')" class="py-2 px-2 rounded-xl text-[11px] font-bold bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 hover:border-blue-500 hover:text-blue-600 transition-all active:scale-95 shadow-2xs">Admin Ops</button>
                        <button type="button" onclick="window.applyEditStaffPreset('manager')" class="py-2 px-2 rounded-xl text-[11px] font-bold bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 hover:border-purple-500 hover:text-purple-600 transition-all active:scale-95 shadow-2xs">Manajer</button>
                        <button type="button" onclick="window.applyEditStaffPreset('${l.OWNER}')" class="py-2 px-2 rounded-xl text-[11px] font-bold bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 hover:border-amber-500 hover:text-amber-600 transition-all active:scale-95 shadow-2xs">Full Akses</button>
                    </div>
                </div>

                ${a("operasional","1. Operasional Toko","fa-dolly")}
                ${a("konten","2. Katalog & Konten Toko","fa-layer-group")}
                ${a("sensitif","3. Finansial & Pengaturan Sensitif (Khusus Owner)","fa-lock")}
            </div>

            <!-- Modal Footer -->
            <div class="p-4 border-t border-slate-100 dark:border-slate-800 flex gap-3 shrink-0 bg-slate-50/50 dark:bg-slate-900/50">
                <button onclick="window.closePermissionsModal()"
                    class="flex-1 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-slate-100 active:scale-95 transition-all cursor-pointer">
                    Batal
                </button>
                <button onclick="window.saveStaffPermissions('${d(t)}')" id="save-perms-btn"
                    class="flex-[2] py-3.5 rounded-2xl text-white font-black text-sm shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    style="background:var(--color-primary)">
                    <i class="fa-solid fa-floppy-disk"></i> Simpan Hak Akses
                </button>
            </div>
        </div>
    </div>`),setTimeout(()=>{const r=n("permissions-modal-box");r&&r.classList.remove("scale-95")},10)},L=()=>{const t=n("permissions-modal");t&&(t.style.opacity="0",setTimeout(()=>t.remove(),200))},Y=t=>{const e=h[t]||h[l.CASHIER];document.querySelectorAll('#permissions-modal input[name="edit_staff_perm"]').forEach(s=>{s.checked=!!e[s.value]})},Q=t=>{document.querySelectorAll('#permissions-modal input[name="edit_staff_perm"]').forEach(e=>{e.checked=!!t})},X=async t=>{const e=n("save-perms-btn");e&&(e.disabled=!0,e.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i>Menyimpan...'),v("Memperbarui hak akses...");try{const s={};S.forEach(r=>{const o=document.querySelector(`#permissions-modal input[name="edit_staff_perm"][value="${r.key}"]`);s[r.key]=o?o.checked:!1});let a=l.CASHIER;(s.orders||s.products||s.suppliers||s.purchases)&&(a=l.ADMIN),await x.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(t).update({permissions:s,role:a}),L(),u("Hak akses berhasil diperbarui! ✅","success"),await w()}catch(s){console.error("[StaffAdmin] Gagal menyimpan hak akses:",s),u("Gagal memperbarui hak akses: "+s.message,"error"),e&&(e.disabled=!1,e.innerHTML='<i class="fa-solid fa-floppy-disk mr-2"></i>Simpan Hak Akses')}finally{y()}},T=(t,e,s,a)=>{document.body.insertAdjacentHTML("beforeend",`
    <div id="edit-staff-modal" class="fixed inset-0 z-[9990] flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs"
        onclick="if(event.target===this) window.closeEditStaffModal()">
        <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-sm flex flex-col overflow-hidden scale-95 transition-transform duration-300 border border-slate-200 dark:border-slate-800" id="edit-staff-modal-box">
            <div class="flex items-center justify-between p-5 border-b border-slate-100 dark:border-slate-800 shrink-0">
                <h3 class="font-black text-sm text-slate-900 dark:text-white flex items-center gap-2">
                    <i class="fa-solid fa-pen-to-square text-[var(--color-primary)]"></i> Edit Profil Staf
                </h3>
                <button onclick="window.closeEditStaffModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 flex items-center justify-center hover:bg-rose-50 hover:text-rose-500 transition-all active:scale-90 cursor-pointer">
                    <i class="fa-solid fa-xmark text-sm"></i>
                </button>
            </div>
            <div class="p-5 space-y-3.5">
                <div>
                    <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Nama Staf</label>
                    <input id="edit-staff-name" type="text" value="${d(e)}"
                        class="w-full border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3 text-sm bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] text-slate-900 dark:text-white transition-all shadow-inner">
                </div>
                <div>
                    <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Jabatan / Role</label>
                    <select id="edit-staff-role" class="w-full border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3 text-sm bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] text-slate-900 dark:text-white transition-all shadow-inner font-bold">
                        <option value="${l.CASHIER}" ${a===l.CASHIER?"selected":""}>Kasir POS</option>
                        <option value="${l.ADMIN}" ${a===l.ADMIN?"selected":""}>Admin Toko</option>
                        <option value="${l.OWNER}" ${a===l.OWNER?"selected":""}>Co-Owner / Wakil Owner</option>
                    </select>
                </div>
                <div>
                    <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Email Login (Permanen)</label>
                    <input type="email" value="${d(s)}" disabled
                        class="w-full border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3 text-sm bg-slate-50 dark:bg-slate-800/50 text-slate-400 cursor-not-allowed">
                </div>
                <div id="edit-staff-error" class="hidden text-xs text-rose-600 font-semibold p-2.5 bg-rose-50 dark:bg-rose-900/20 rounded-2xl border border-rose-200 dark:border-rose-800"></div>
            </div>
            <div class="p-4 border-t border-slate-100 dark:border-slate-800 flex gap-3 shrink-0 bg-slate-50/50 dark:bg-slate-900/50">
                <button onclick="window.closeEditStaffModal()"
                    class="flex-1 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-slate-100 active:scale-95 transition-all cursor-pointer">
                    Batal
                </button>
                <button onclick="window.updateStaffProfile('${d(t)}')" id="update-staff-btn"
                    class="flex-[2] py-3.5 rounded-2xl text-white font-black text-sm shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    style="background:var(--color-primary)">
                    <i class="fa-solid fa-floppy-disk"></i> Simpan
                </button>
            </div>
        </div>
    </div>`),setTimeout(()=>{const r=n("edit-staff-modal-box");r&&r.classList.remove("scale-95")},10)},$=()=>{const t=n("edit-staff-modal");t&&(t.style.opacity="0",setTimeout(()=>t.remove(),200))},Z=async t=>{const e=n("edit-staff-name")?.value?.trim()||"",s=n("edit-staff-role")?.value||l.CASHIER,a=n("edit-staff-error"),r=n("update-staff-btn");if(!e){a&&(a.textContent="Nama staf tidak boleh kosong.",a.classList.remove("hidden"));return}r&&(r.disabled=!0,r.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i>Menyimpan...'),v("Memperbarui profil staf...");try{await x.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(t).update({name:e,role:s}),$(),u("Profil staf berhasil diperbarui! ✅","success"),await w()}catch(o){a&&(a.textContent="Gagal memperbarui: "+o.message,a.classList.remove("hidden")),r&&(r.disabled=!1,r.innerHTML='<i class="fa-solid fa-floppy-disk mr-2"></i>Simpan')}finally{y()}},I=async(t,e)=>{v(e?"Mengaktifkan staf...":"Menonaktifkan staf...");try{await x.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(t).update({isActive:e}),u(e?"Akun staf diaktifkan ✅":"Akun staf dinonaktifkan ❌","success"),await w()}catch(s){u("Gagal mengubah status staf: "+s.message,"error")}finally{y()}},R=(t,e)=>{O("Hapus Akun Staf",`Yakin hapus akun staf "${e}"? Akun tidak dapat dipulihkan dan staf tidak dapat login lagi ke toko.`,async()=>{v("Menghapus akun staf...");try{await x.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(t).delete(),u(`Akun "${e}" berhasil dihapus`,"success"),await w()}catch(s){u("Gagal menghapus staf: "+s.message,"error")}finally{y()}},"Ya, Hapus")},N=t=>{const e=n(t),s=n(t+"-eye");e&&(e.type==="password"?(e.type="text",s&&(s.className="fa-solid fa-eye-slash text-sm")):(e.type="password",s&&(s.className="fa-solid fa-eye text-sm")))},ee=j,te=E,ae=_,se=(t,e,s)=>T(t,e,s,l.CASHIER),re=$,le=I,oe=R,ie=w,ne=N;typeof window<"u"&&(window.renderCashierAccounts=q,window.switchCashierTab=G,window.filterStaffRole=V,window.loadStaffList=w,window.openAddStaffModal=j,window.closeAddStaffModal=E,window.applyNewStaffPreset=U,window.setAllNewStaffPerms=W,window.saveStaffAccount=_,window.openPermissionsModal=J,window.closePermissionsModal=L,window.applyEditStaffPreset=Y,window.setAllEditStaffPerms=Q,window.saveStaffPermissions=X,window.openEditStaffModal=T,window.closeEditStaffModal=$,window.updateStaffProfile=Z,window.toggleStaffActive=I,window.deleteStaffAccount=R,window.toggleStaffPassVisibility=N,window.openAddCashierModal=ee,window.closeAddCashierModal=te,window.saveCashierAccount=ae,window.openEditCashierModal=se,window.closeEditCashierModal=re,window.toggleCashierActive=le,window.deleteCashierAccount=oe,window.loadCashierList=ie,window.toggleCashierPassVisibility=ne);export{Y as applyEditStaffPreset,U as applyNewStaffPreset,te as closeAddCashierModal,E as closeAddStaffModal,re as closeEditCashierModal,$ as closeEditStaffModal,L as closePermissionsModal,oe as deleteCashierAccount,R as deleteStaffAccount,V as filterStaffRole,ie as loadCashierList,w as loadStaffList,ee as openAddCashierModal,j as openAddStaffModal,se as openEditCashierModal,T as openEditStaffModal,J as openPermissionsModal,q as renderCashierAccounts,ae as saveCashierAccount,_ as saveStaffAccount,X as saveStaffPermissions,Q as setAllEditStaffPerms,W as setAllNewStaffPerms,G as switchCashierTab,le as toggleCashierActive,ne as toggleCashierPassVisibility,I as toggleStaffActive,N as toggleStaffPassVisibility,Z as updateStaffProfile};

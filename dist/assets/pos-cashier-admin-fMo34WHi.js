import{bd as h,ac as i,e as n,x as K,ae as S,l as b,v as p,a7 as A,i as d,$ as C,am as E,b as q,be as P,bf as U}from"./module-print-BOkoNfSp.js";import{r as V}from"./module-pos-Cw_a0TcO.js";import{f as v}from"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";let y=[],H="all";const m=(a="mengubah data staf")=>{const e=C.currentUser;return e?e.uid!==E?(p(`🛑 Akses Ditolak: Hanya Akun Pemilik Utama (Owner) yang berwenang ${a}. Akun staf tidak memiliki izin modifikasi database staf.`,"error"),!1):!0:(p(`⚠️ Sesi Belum Terotentikasi: Harap login resmi menggunakan Akun Pemilik Toko (Email Owner) di form login CMS untuk ${a}.`,"warning"),!1)},G=async()=>{if(!n("admin-content"))return;const e=document.querySelector("#view-admin .scroll-content");e&&(e.scrollTop=0);const t=C.currentUser;t&&(t.uid,E);const s=t&&t.uid!==E,l=!t;let r="",c="";l?(r='<span class="flex items-center gap-1.5 text-amber-600 dark:text-amber-400 font-bold"><i class="fa-solid fa-triangle-exclamation"></i> Status: Pratinjau Lokal (Belum Terotentikasi Firebase)</span>',c=`
        <div class="p-4 rounded-2xl border border-amber-300 dark:border-amber-700/80 bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs">
            <div class="flex items-start gap-3">
                <div class="w-9 h-9 rounded-xl bg-amber-200/80 dark:bg-amber-900/60 text-amber-700 dark:text-amber-300 flex items-center justify-center shrink-0 shadow-2xs">
                    <i class="fa-solid fa-triangle-exclamation text-sm"></i>
                </div>
                <div>
                    <h4 class="text-xs font-black">Mode Pratinjau Lokal (Sesi Firebase Belum Terotentikasi)</h4>
                    <p class="text-[11px] text-amber-800/90 dark:text-amber-300/90 mt-0.5 leading-relaxed">
                        Anda dapat melihat data staf, namun untuk mendaftarkan staf baru atau menyimpan hak akses ke database cloud, Anda wajib login resmi dengan Email Pemilik Toko (Owner).
                    </p>
                </div>
            </div>
            <button onclick="if(typeof window.changeView==='function') window.changeView('view-admin-login');"
                class="px-3.5 py-2 rounded-xl text-xs font-black text-white shrink-0 shadow-sm active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
                style="background: var(--color-primary)">
                <i class="fa-solid fa-right-to-bracket text-xs"></i>
                <span>Login Akun Owner</span>
            </button>
        </div>`):s?(r=`<span class="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-bold"><i class="fa-solid fa-user-shield"></i> Status: Login Staf (${d(t.email||"Staf")}) — Wewenang Dibatasi Khusus Owner</span>`,c=`
        <div class="p-3.5 rounded-2xl border border-blue-200 dark:border-blue-800/80 bg-blue-50/80 dark:bg-blue-950/40 text-blue-800 dark:text-blue-200 flex items-center gap-3 shadow-2xs">
            <div class="w-8 h-8 rounded-xl bg-blue-200/70 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 flex items-center justify-center shrink-0">
                <i class="fa-solid fa-shield-halved text-xs"></i>
            </div>
            <div class="text-[11px] leading-snug">
                <span class="font-bold">Mode Akun Staf (${d(t.email||"Staf")}):</span> Anda dapat melihat direktori staf. Penambahan, pengubahan wewenang hak akses, dan penghapusan staf diproteksi eksklusif untuk Pemilik Toko (Owner).
            </div>
        </div>`):r=`<span class="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold"><i class="fa-solid fa-circle-check"></i> Status: Terverifikasi Login sebagai Owner (${d(t.email||"Master")})</span>`,q("admin-content",`
    <div class="space-y-4 max-w-5xl mx-auto pb-16">
        <!-- Native App Sticky Segmented Control Bar -->
        <div class="sticky top-0 z-20 -mx-4 lg:-mx-8 px-4 lg:px-8 py-3 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-2xs">
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
            ${c}

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
                    <div class="flex items-center gap-3 pt-1 text-[11px] text-purple-700 dark:text-purple-300 font-bold flex-wrap">
                        ${r}
                        <span>•</span>
                        <span class="flex items-center gap-1.5"><i class="fa-solid fa-key"></i> Hak Akses: 22 Modul Terbuka</span>
                    </div>
                </div>
            </div>

            <!-- Filter Kategori Staf -->
            <div class="flex items-center gap-2 overflow-x-auto pb-1 custom-scrollbar">
                <button onclick="window.filterStaffRole('all')" id="staff-filter-all"
                    class="staff-filter-btn px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-2xs flex items-center gap-1.5 active:scale-95 shrink-0"
                    style="background: var(--color-primary); color: #fff;">
                    <i class="fa-solid fa-users text-[10px]"></i>
                    <span>Semua Staf</span>
                </button>
                <button onclick="window.filterStaffRole('admin')" id="staff-filter-admin"
                    class="staff-filter-btn px-4 py-2 rounded-xl text-xs font-bold bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-slate-300 transition-all cursor-pointer shadow-2xs flex items-center gap-1.5 active:scale-95 shrink-0">
                    <i class="fa-solid fa-shield-halved text-[10px] text-blue-500"></i>
                    <span>Admin Toko</span>
                </button>
                <button onclick="window.filterStaffRole('cashier')" id="staff-filter-cashier"
                    class="staff-filter-btn px-4 py-2 rounded-xl text-xs font-bold bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-slate-300 transition-all cursor-pointer shadow-2xs flex items-center gap-1.5 active:scale-95 shrink-0">
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
    </div>`),await g()},z=a=>{const e=document.querySelector("#view-admin .scroll-content");e&&(e.scrollTop=0);const t=n("tab-btn-cashier-accounts"),s=n("tab-btn-cashier-shifts"),l=n("cashier-panel-accounts"),r=n("cashier-panel-shifts"),c=(o,x,k)=>{o&&(o.className="py-2.5 px-4 rounded-xl text-xs font-black text-white transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 shadow-md",o.style.background="var(--color-primary)",o.style.boxShadow="0 4px 14px rgba(var(--color-primary-rgb), 0.35)",o.innerHTML=`${x}<span>${k}</span>`)},f=(o,x,k)=>{o&&(o.className="py-2.5 px-4 rounded-xl text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-700/60 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95",o.style.background="transparent",o.style.boxShadow="none",o.innerHTML=`${x}<span>${k}</span>`)};a==="shifts"?(f(t,'<i class="fa-solid fa-users-gear"></i>',"Staf &amp; Hak Akses"),c(s,'<i class="fa-solid fa-file-invoice-dollar text-white"></i>',"Laporan Shift Kasir"),l&&l.classList.add("hidden"),r&&(r.classList.remove("hidden"),V(r))):(c(t,'<i class="fa-solid fa-users-gear text-white"></i>',"Staf &amp; Hak Akses"),f(s,'<i class="fa-solid fa-file-invoice-dollar"></i>',"Laporan Shift Kasir"),l&&l.classList.remove("hidden"),r&&r.classList.add("hidden"))},W=a=>{H=a,document.querySelectorAll(".staff-filter-btn").forEach(t=>{t.style.background="transparent",t.style.color="",t.classList.add("bg-white","dark:bg-slate-800","text-slate-600","dark:text-slate-300")});const e=n(`staff-filter-${a}`);e&&(e.classList.remove("bg-white","dark:bg-slate-800","text-slate-600","dark:text-slate-300"),e.style.background="var(--color-primary)",e.style.color="#fff"),_()},J=a=>{if(a.role===i.OWNER)return P.length;if(a.permissions)return Object.values(a.permissions).filter(Boolean).length;const e=h[a.role]||h[i.CASHIER];return Object.values(e).filter(Boolean).length},_=()=>{const a=n("cashier-list-container");if(!a)return;let e=y;if(H==="admin"?e=y.filter(s=>s.role===i.ADMIN||s.role===i.OWNER):H==="cashier"&&(e=y.filter(s=>s.role===i.CASHIER||!s.role)),e.length===0){a.innerHTML=`
        <div class="flex flex-col items-center justify-center py-16 text-slate-400 dark:text-slate-600 bg-white dark:bg-slate-800/60 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-8 text-center">
            <div class="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-2xl mb-3 text-slate-400">
                <i class="fa-solid fa-user-slash"></i>
            </div>
            <p class="font-bold text-sm text-slate-700 dark:text-slate-300">Belum ada akun staf pada kategori ini</p>
            <p class="text-xs mt-1 text-slate-400">Klik "Tambah Staf" untuk mendaftarkan akun kasir atau admin baru</p>
        </div>`;return}const t=e.map(s=>{const l=s.uid,r=s.isActive!==!1,c=s.createdAt?.toDate?s.createdAt.toDate().toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):"-",f=(s.name||"Staf").trim().split(/\s+/).slice(0,2).map(k=>k[0]).join("").toUpperCase()||"ST",o=s.role||i.CASHIER,x=J(s);return`
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 p-4 sm:p-5 bg-white dark:bg-slate-800/95 rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:shadow-xs transition-all">
            <div class="flex items-start sm:items-center gap-3.5 min-w-0">
                <div class="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm shrink-0 shadow-2xs border border-[rgba(var(--color-primary-rgb),0.25)]"
                    style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary)">
                    ${f}
                </div>
                <div class="min-w-0 flex-1">
                    <div class="flex items-center gap-2 flex-wrap">
                        <p class="text-sm font-black text-slate-900 dark:text-white truncate">${d(s.name||"Staf")}</p>
                        ${U(o)}
                        <span class="inline-flex items-center gap-1.5 text-[10px] font-black px-2.5 py-0.5 rounded-full ${r?"bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60":"bg-slate-100 dark:bg-slate-700 text-slate-500 border border-slate-200 dark:border-slate-600"}">
                            <span class="w-1.5 h-1.5 rounded-full ${r?"bg-emerald-500 animate-pulse":"bg-slate-400"}"></span>
                            ${r?"Aktif":"Nonaktif"}
                        </span>
                    </div>
                    <div class="flex items-center gap-3 mt-1.5 text-xs text-slate-500 dark:text-slate-400 flex-wrap">
                        <span class="flex items-center gap-1 font-medium"><i class="fa-solid fa-envelope text-[10px] text-slate-400"></i> ${d(s.email||"")}</span>
                        <span>•</span>
                        <span class="inline-flex items-center gap-1 font-bold text-[11px] text-[var(--color-primary)]">
                            <i class="fa-solid fa-key text-[9px]"></i> ${x} Modul Diizinkan
                        </span>
                        <span>•</span>
                        <span class="flex items-center gap-1 text-[11px] text-slate-400 dark:text-slate-500"><i class="fa-solid fa-calendar-days text-[10px]"></i> Terdaftar: ${d(c)}</span>
                    </div>
                </div>
            </div>
            <!-- Tombol Aksi Hak Akses, Status & Edit -->
            <div class="flex items-center gap-2 shrink-0 self-end sm:self-center border-t sm:border-t-0 pt-2.5 sm:pt-0 border-slate-100 dark:border-slate-700/60 w-full sm:w-auto justify-end">
                <button onclick="window.openPermissionsModal('${d(l)}')"
                    title="Atur Hak Akses Modul"
                    class="flex-1 sm:flex-initial h-10 px-3.5 rounded-xl text-xs font-bold transition-all active:scale-95 cursor-pointer shadow-2xs flex items-center justify-center gap-1.5 border border-purple-200 dark:border-purple-800/60 bg-purple-50 hover:bg-purple-100 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300">
                    <i class="fa-solid fa-sliders text-[10px]"></i>
                    <span>Hak Akses</span>
                </button>
                <button onclick="window.toggleStaffActive('${d(l)}', ${!r})"
                    title="${r?"Nonaktifkan Akun Staf":"Aktifkan Akun Staf"}"
                    class="w-10 h-10 rounded-xl flex items-center justify-center text-xs transition-all active:scale-95 cursor-pointer shadow-2xs border shrink-0
                    ${r?"bg-slate-50 hover:bg-amber-50 dark:bg-slate-700/80 dark:hover:bg-amber-950/40 text-slate-600 dark:text-slate-300 hover:text-amber-600 border-slate-200/80 dark:border-slate-700 hover:border-amber-300":"bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 border-emerald-200 dark:border-emerald-800"}">
                    <i class="fa-solid ${r?"fa-ban":"fa-circle-check"}"></i>
                </button>
                <button onclick="window.openEditStaffModal('${d(l)}', '${d(s.name||"")}', '${d(s.email||"")}', '${d(o)}')"
                    title="Edit Profil Staf"
                    class="w-10 h-10 rounded-xl flex items-center justify-center text-xs bg-slate-50 hover:bg-slate-100 dark:bg-slate-700/80 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 hover:text-[var(--color-primary)] border border-slate-200/80 dark:border-slate-700 transition-all active:scale-95 cursor-pointer shadow-2xs shrink-0">
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button onclick="window.deleteStaffAccount('${d(l)}', '${d(s.name||"Staf")}')"
                    title="Hapus Akun Staf"
                    class="w-10 h-10 rounded-xl flex items-center justify-center text-xs bg-slate-50 hover:bg-rose-50 dark:bg-slate-700/80 dark:hover:bg-rose-950/40 text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 border border-slate-200/80 dark:border-slate-700 hover:border-rose-200 transition-all active:scale-95 cursor-pointer shadow-2xs shrink-0">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        </div>`}).join("");a.innerHTML=`<div class="space-y-2.5">${t}</div>
    <p class="text-center text-[10px] text-slate-400 mt-3 font-medium">${e.length} staf terdaftar</p>`},g=async()=>{const a=n("cashier-list-container");if(a)try{let e;try{e=await b.collection("freshmart").doc("cms_data").collection("cashier_accounts").orderBy("createdAt","desc").get()}catch{e=await b.collection("freshmart").doc("cms_data").collection("cashier_accounts").get()}y=e.docs.map(s=>({uid:s.id,...s.data()}));const t=y.some(s=>s.isActive!==!1&&s.role===i.CASHIER);try{localStorage.setItem("pos_has_cashier",t?"true":"false"),await b.collection("freshmart").doc("cms_data").set({hasCashier:t},{merge:!0})}catch{}typeof window.updatePOSHeaderIcon=="function"&&window.updatePOSHeaderIcon(),_()}catch(e){console.error("[StaffAdmin] Gagal memuat daftar staf:",e),a.innerHTML=`
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
        </div>`}},I=()=>{if(!m("mendaftarkan staf baru"))return;const a=(e,t,s)=>{const l=P.filter(r=>r.group===e);return`
        <div class="space-y-2">
            <p class="text-[11px] font-black uppercase tracking-wider text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                <i class="fa-solid ${s} text-[var(--color-primary)]"></i>
                <span>${t}</span>
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                ${l.map(r=>`
                <label class="flex items-start gap-2.5 p-2.5 rounded-xl border border-slate-200/80 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-800/60 hover:bg-white dark:hover:bg-slate-800 transition-all cursor-pointer text-left">
                    <input type="checkbox" name="staff_perm" value="${r.key}" class="mt-0.5 rounded border-slate-300 text-[var(--color-primary)] focus:ring-[var(--color-primary)]/30">
                    <div class="min-w-0">
                        <p class="text-xs font-bold text-slate-800 dark:text-white flex items-center gap-1.5">
                            <i class="fa-solid ${r.icon} text-[10px] text-slate-400"></i>
                            <span>${r.label}</span>
                        </p>
                        <p class="text-[10px] text-slate-400 dark:text-slate-500 leading-tight mt-0.5">${r.desc}</p>
                    </div>
                </label>`).join("")}
            </div>
        </div>`};document.body.insertAdjacentHTML("beforeend",`
    <div id="add-staff-modal" class="fixed inset-0 z-[9990] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/75"
        onclick="if(event.target===this) window.closeAddStaffModal()">
        <div class="bg-white dark:bg-slate-900 rounded-t-[2rem] sm:rounded-3xl shadow-2xl w-full max-w-2xl flex flex-col max-h-[92vh] sm:max-h-[90vh] overflow-hidden scale-95 transition-transform duration-300 border border-slate-200 dark:border-slate-800" id="add-staff-modal-box">
            <!-- Mobile Drag Handle -->
            <div class="sm:hidden w-12 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full mx-auto mt-2.5 mb-1 shrink-0"></div>
            <!-- Modal Header -->
            <div class="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 shrink-0">
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
                            <input type="radio" name="new_staff_role" value="${i.CASHIER}" checked onchange="window.applyNewStaffPreset('${i.CASHIER}')" class="sr-only">
                            <i class="fa-solid fa-cash-register text-lg mb-1 text-emerald-600"></i>
                            <span class="text-xs font-black">Kasir POS</span>
                            <span class="text-[9px] text-slate-400 mt-0.5">Penjualan Fisik</span>
                        </label>
                        <label class="flex flex-col items-center justify-center p-3 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 cursor-pointer hover:border-blue-500 transition-all text-center">
                            <input type="radio" name="new_staff_role" value="${i.ADMIN}" onchange="window.applyNewStaffPreset('${i.ADMIN}')" class="sr-only">
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

                    ${a("operasional","1. Operasional Toko","fa-dolly")}
                    ${a("konten","2. Katalog & Konten Toko","fa-layer-group")}
                    ${a("sensitif","3. Finansial & Pengaturan Sensitif (Khusus Owner)","fa-lock")}
                </div>

                <div id="add-staff-error" class="hidden text-xs text-rose-600 font-semibold p-3 bg-rose-50 dark:bg-rose-950/40 rounded-2xl border border-rose-200 dark:border-rose-900/50"></div>
            </div>

            <!-- Modal Footer -->
            <div class="p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800 flex gap-3 shrink-0 bg-slate-50/50 dark:bg-slate-900/50 pb-[max(1rem,env(safe-area-inset-bottom))]">
                <button onclick="window.closeAddStaffModal()"
                    class="flex-1 min-h-[48px] py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-slate-100 active:scale-95 transition-all cursor-pointer">
                    Batal
                </button>
                <button onclick="window.saveStaffAccount()" id="save-staff-btn"
                    class="flex-[2] min-h-[48px] py-3.5 rounded-2xl text-white font-black text-sm shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    style="background:var(--color-primary)">
                    <i class="fa-solid fa-floppy-disk"></i> Simpan &amp; Daftarkan Staf
                </button>
            </div>
        </div>
    </div>`),window.applyNewStaffPreset(i.CASHIER),setTimeout(()=>{const e=n("add-staff-modal-box");e&&e.classList.remove("scale-95");const t=n("new-staff-name");t&&t.focus()},10)},j=()=>{const a=n("add-staff-modal");a&&(a.style.opacity="0",setTimeout(()=>a.remove(),200))},Y=a=>{const e=h[a]||h[i.CASHIER];document.querySelectorAll('#add-staff-modal input[name="staff_perm"]').forEach(t=>{t.checked=!!e[t.value]}),document.querySelectorAll('#add-staff-modal input[name="new_staff_role"]').forEach(t=>{const s=t.closest("label");s&&(t.value===a?s.className="flex flex-col items-center justify-center p-3 rounded-2xl border-2 border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.08)] text-slate-900 dark:text-white cursor-pointer shadow-xs transition-all text-center":s.className="flex flex-col items-center justify-center p-3 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 cursor-pointer hover:border-slate-300 transition-all text-center")})},Q=a=>{document.querySelectorAll('#add-staff-modal input[name="staff_perm"]').forEach(e=>{e.checked=!!a})},O=async()=>{if(!m("mendaftarkan staf baru"))return;const a=n("new-staff-name")?.value?.trim()||"",e=n("new-staff-email")?.value?.trim()||"",t=n("new-staff-pass")?.value||"",s=document.querySelector('#add-staff-modal input[name="new_staff_role"]:checked'),l=s?s.value:i.CASHIER,r=l==="manager"||l===i.ADMIN?i.ADMIN:l,c=n("add-staff-error"),f=n("save-staff-btn"),o=u=>{c&&(c.textContent=u,c.classList.remove("hidden"))};if((()=>{c&&c.classList.add("hidden")})(),!a){o("Nama staf wajib diisi.");return}if(!e||!e.includes("@")){o("Email login tidak valid.");return}if(t.length<6){o("Password minimal 6 karakter.");return}const k={};P.forEach(u=>{const w=document.querySelector(`#add-staff-modal input[name="staff_perm"][value="${u.key}"]`);k[u.key]=w?w.checked:!1}),f&&(f.disabled=!0,f.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i>Mendaftarkan ke Firebase...'),S("Mendaftarkan akun staf...");try{const w=(v.apps.find(T=>T.name==="pos-cashier-creator")||v.initializeApp(window.FIREBASE_CONFIG||v.app().options,"pos-cashier-creator")).auth(),$=(await w.createUserWithEmailAndPassword(e,t)).user?.uid;if(!$)throw new Error("UID tidak diterima dari Firebase");if(await w.signOut(),await b.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc($).set({uid:$,name:a,email:e,role:r,permissions:k,isActive:!0,createdAt:v.firestore.FieldValue.serverTimestamp(),createdBy:C.currentUser?.uid||"owner"}),r===i.CASHIER)try{localStorage.setItem("pos_has_cashier","true"),await b.collection("freshmart").doc("cms_data").set({hasCashier:!0},{merge:!0})}catch{}j(),p(`Akun "${a}" (${r.toUpperCase()}) berhasil didaftarkan! ✅`,"success"),await g(),typeof window.updatePOSHeaderIcon=="function"&&window.updatePOSHeaderIcon()}catch(u){console.error("[StaffAdmin] Gagal membuat akun staf:",u);const w=u.code==="permission-denied"||u.message&&u.message.toLowerCase().includes("permission"),M=u.code||"";o(w?"Akses Ditolak Firebase: Hanya akun Owner yang berwenang menambahkan staf ke Firestore.":M==="auth/email-already-in-use"?"Email sudah digunakan oleh akun lain di Firebase.":M==="auth/invalid-email"?"Format email tidak valid.":M==="auth/weak-password"?"Password terlalu lemah (min. 6 karakter).":"Gagal mendaftarkan: "+(u.message||"Terjadi kesalahan sistem")),f&&(f.disabled=!1,f.innerHTML='<i class="fa-solid fa-floppy-disk mr-2"></i>Simpan &amp; Daftarkan Staf')}finally{A()}},X=a=>{if(!m("mengatur hak akses staf"))return;const e=y.find(l=>l.uid===a);if(!e){p("Data staf tidak ditemukan!");return}const t=e.permissions||h[e.role]||h[i.CASHIER],s=(l,r,c)=>{const f=P.filter(o=>o.group===l);return`
        <div class="space-y-2">
            <p class="text-[11px] font-black uppercase tracking-wider text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                <i class="fa-solid ${c} text-[var(--color-primary)]"></i>
                <span>${r}</span>
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                ${f.map(o=>{const x=t[o.key]===!0;return`
                    <label class="flex items-start gap-2.5 p-2.5 rounded-xl border border-slate-200/80 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-800/60 hover:bg-white dark:hover:bg-slate-800 transition-all cursor-pointer text-left">
                        <input type="checkbox" name="edit_staff_perm" value="${o.key}" ${x?"checked":""} class="mt-0.5 rounded border-slate-300 text-[var(--color-primary)] focus:ring-[var(--color-primary)]/30">
                        <div class="min-w-0">
                            <p class="text-xs font-bold text-slate-800 dark:text-white flex items-center gap-1.5">
                                <i class="fa-solid ${o.icon} text-[10px] text-slate-400"></i>
                                <span>${o.label}</span>
                            </p>
                            <p class="text-[10px] text-slate-400 dark:text-slate-500 leading-tight mt-0.5">${o.desc}</p>
                        </div>
                    </label>`}).join("")}
            </div>
        </div>`};document.body.insertAdjacentHTML("beforeend",`
    <div id="permissions-modal" class="fixed inset-0 z-[9990] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/75"
        onclick="if(event.target===this) window.closePermissionsModal()">
        <div class="bg-white dark:bg-slate-900 rounded-t-[2rem] sm:rounded-3xl shadow-2xl w-full max-w-2xl flex flex-col max-h-[92vh] sm:max-h-[90vh] overflow-hidden scale-95 transition-transform duration-300 border border-slate-200 dark:border-slate-800" id="permissions-modal-box">
            <!-- Mobile Drag Handle -->
            <div class="sm:hidden w-12 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full mx-auto mt-2.5 mb-1 shrink-0"></div>
            <!-- Modal Header -->
            <div class="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 shrink-0">
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
            <div class="p-4 sm:p-5 space-y-4 overflow-y-auto flex-1 custom-scrollbar">
                <!-- 1-Click Preset Bar -->
                <div class="p-3.5 bg-slate-100/80 dark:bg-slate-800/80 rounded-2xl border border-slate-200/80 dark:border-slate-700/80">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Preset Cepat 1-Klik:</span>
                        <div class="flex items-center gap-2 text-[11px]">
                            <button type="button" onclick="window.setAllEditStaffPerms(true)" class="text-xs text-[var(--color-primary)] font-bold hover:underline active:scale-95 transition-all">Pilih Semua</button>
                            <span class="text-slate-300">•</span>
                            <button type="button" onclick="window.setAllEditStaffPerms(false)" class="text-xs text-rose-500 font-bold hover:underline active:scale-95 transition-all">Kosongkan</button>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        <button type="button" onclick="window.applyEditStaffPreset('${i.CASHIER}')" class="py-2.5 px-2 rounded-xl text-xs font-bold bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 hover:border-emerald-500 hover:text-emerald-600 transition-all active:scale-95 shadow-2xs flex items-center justify-center gap-1.5">
                            <i class="fa-solid fa-cash-register text-[11px] text-emerald-500"></i>
                            <span>Kasir POS</span>
                        </button>
                        <button type="button" onclick="window.applyEditStaffPreset('${i.ADMIN}')" class="py-2.5 px-2 rounded-xl text-xs font-bold bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 hover:border-blue-500 hover:text-blue-600 transition-all active:scale-95 shadow-2xs flex items-center justify-center gap-1.5">
                            <i class="fa-solid fa-shield-halved text-[11px] text-blue-500"></i>
                            <span>Admin Ops</span>
                        </button>
                        <button type="button" onclick="window.applyEditStaffPreset('manager')" class="py-2.5 px-2 rounded-xl text-xs font-bold bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 hover:border-purple-500 hover:text-purple-600 transition-all active:scale-95 shadow-2xs flex items-center justify-center gap-1.5">
                            <i class="fa-solid fa-user-tie text-[11px] text-purple-500"></i>
                            <span>Manajer</span>
                        </button>
                        <button type="button" onclick="window.applyEditStaffPreset('${i.OWNER}')" class="py-2.5 px-2 rounded-xl text-xs font-bold bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 hover:border-amber-500 hover:text-amber-600 transition-all active:scale-95 shadow-2xs flex items-center justify-center gap-1.5">
                            <i class="fa-solid fa-crown text-[11px] text-amber-500"></i>
                            <span>Full Akses</span>
                        </button>
                    </div>
                </div>

                ${s("operasional","1. Operasional Toko","fa-dolly")}
                ${s("konten","2. Katalog & Konten Toko","fa-layer-group")}
                ${s("sensitif","3. Finansial & Pengaturan Sensitif (Khusus Owner)","fa-lock")}
            </div>

            <!-- Modal Footer -->
            <div class="p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800 flex gap-3 shrink-0 bg-slate-50/50 dark:bg-slate-900/50 pb-[max(1rem,env(safe-area-inset-bottom))]">
                <button onclick="window.closePermissionsModal()"
                    class="flex-1 min-h-[48px] py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-slate-100 active:scale-95 transition-all cursor-pointer">
                    Batal
                </button>
                <button onclick="window.saveStaffPermissions('${d(a)}')" id="save-perms-btn"
                    class="flex-[2] min-h-[48px] py-3.5 rounded-2xl text-white font-black text-sm shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    style="background:var(--color-primary)">
                    <i class="fa-solid fa-floppy-disk"></i> Simpan Hak Akses
                </button>
            </div>
        </div>
    </div>`),setTimeout(()=>{const l=n("permissions-modal-box");l&&l.classList.remove("scale-95")},10)},R=()=>{const a=n("permissions-modal");a&&(a.style.opacity="0",setTimeout(()=>a.remove(),200))},Z=a=>{const e=h[a]||h[i.CASHIER];document.querySelectorAll('#permissions-modal input[name="edit_staff_perm"]').forEach(t=>{t.checked=!!e[t.value]})},ee=a=>{document.querySelectorAll('#permissions-modal input[name="edit_staff_perm"]').forEach(e=>{e.checked=!!a})},te=async a=>{if(!m("mengubah hak akses staf"))return;const e=n("save-perms-btn");e&&(e.disabled=!0,e.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i>Menyimpan...'),S("Memperbarui hak akses...");try{const t={};P.forEach(l=>{const r=document.querySelector(`#permissions-modal input[name="edit_staff_perm"][value="${l.key}"]`);t[l.key]=r?r.checked:!1});let s=i.CASHIER;(t.orders||t.products||t.suppliers||t.purchases)&&(s=i.ADMIN),await b.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(a).set({permissions:t,role:s,updatedAt:v.firestore.FieldValue.serverTimestamp()},{merge:!0}),R(),p("Hak akses berhasil diperbarui! ✅","success"),await g()}catch(t){console.error("[StaffAdmin] Gagal menyimpan hak akses:",t),t.code==="permission-denied"||t.message&&t.message.toLowerCase().includes("permission")?p("Izin Ditolak Firebase: Pastikan login dengan Akun Owner dan aturan firestore.rules sudah dipublikasikan di Firebase Console.","error"):p("Gagal memperbarui hak akses: "+(t.message||"Terjadi kesalahan sistem"),"error"),e&&(e.disabled=!1,e.innerHTML='<i class="fa-solid fa-floppy-disk mr-2"></i>Simpan Hak Akses')}finally{A()}},N=(a,e,t,s)=>{m("mengubah profil staf")&&(document.body.insertAdjacentHTML("beforeend",`
    <div id="edit-staff-modal" class="fixed inset-0 z-[9990] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/75"
        onclick="if(event.target===this) window.closeEditStaffModal()">
        <div class="bg-white dark:bg-slate-900 rounded-t-[2rem] sm:rounded-3xl shadow-2xl w-full max-w-sm flex flex-col overflow-hidden scale-95 transition-transform duration-300 border border-slate-200 dark:border-slate-800" id="edit-staff-modal-box">
            <!-- Mobile Drag Handle -->
            <div class="sm:hidden w-12 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full mx-auto mt-2.5 mb-1 shrink-0"></div>
            <div class="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 shrink-0">
                <h3 class="font-black text-sm text-slate-900 dark:text-white flex items-center gap-2">
                    <i class="fa-solid fa-pen-to-square text-[var(--color-primary)]"></i> Edit Profil Staf
                </h3>
                <button onclick="window.closeEditStaffModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 flex items-center justify-center hover:bg-rose-50 hover:text-rose-500 transition-all active:scale-90 cursor-pointer">
                    <i class="fa-solid fa-xmark text-sm"></i>
                </button>
            </div>
            <div class="p-4 sm:p-5 space-y-3.5">
                <div>
                    <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Nama Staf</label>
                    <input id="edit-staff-name" type="text" value="${d(e)}"
                        class="w-full border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3 text-sm bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] text-slate-900 dark:text-white transition-all shadow-inner">
                </div>
                <div>
                    <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Jabatan / Role</label>
                    <select id="edit-staff-role" class="w-full border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3 text-sm bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] text-slate-900 dark:text-white transition-all shadow-inner font-bold">
                        <option value="${i.CASHIER}" ${s===i.CASHIER?"selected":""}>Kasir POS</option>
                        <option value="${i.ADMIN}" ${s===i.ADMIN?"selected":""}>Admin Toko</option>
                        <option value="${i.OWNER}" ${s===i.OWNER?"selected":""}>Co-Owner / Wakil Owner</option>
                    </select>
                </div>
                <div>
                    <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Email Login (Permanen)</label>
                    <input type="email" value="${d(t)}" disabled
                        class="w-full border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3 text-sm bg-slate-50 dark:bg-slate-800/50 text-slate-400 cursor-not-allowed">
                </div>
                <div id="edit-staff-error" class="hidden text-xs text-rose-600 font-semibold p-2.5 bg-rose-50 dark:bg-rose-900/20 rounded-2xl border border-rose-200 dark:border-rose-800"></div>
            </div>
            <div class="p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800 flex gap-3 shrink-0 bg-slate-50/50 dark:bg-slate-900/50 pb-[max(1rem,env(safe-area-inset-bottom))]">
                <button onclick="window.closeEditStaffModal()"
                    class="flex-1 min-h-[48px] py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-slate-100 active:scale-95 transition-all cursor-pointer">
                    Batal
                </button>
                <button onclick="window.updateStaffProfile('${d(a)}')" id="update-staff-btn"
                    class="flex-[2] min-h-[48px] py-3.5 rounded-2xl text-white font-black text-sm shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    style="background:var(--color-primary)">
                    <i class="fa-solid fa-floppy-disk"></i> Simpan
                </button>
            </div>
        </div>
    </div>`),setTimeout(()=>{const l=n("edit-staff-modal-box");l&&l.classList.remove("scale-95")},10))},L=()=>{const a=n("edit-staff-modal");a&&(a.style.opacity="0",setTimeout(()=>a.remove(),200))},ae=async a=>{if(!m("mengubah profil staf"))return;const e=n("edit-staff-name")?.value?.trim()||"",t=n("edit-staff-role")?.value||i.CASHIER,s=n("edit-staff-error"),l=n("update-staff-btn");if(!e){s&&(s.textContent="Nama staf tidak boleh kosong.",s.classList.remove("hidden"));return}l&&(l.disabled=!0,l.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i>Menyimpan...'),S("Memperbarui profil staf...");try{await b.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(a).set({name:e,role:t,updatedAt:v.firestore.FieldValue.serverTimestamp()},{merge:!0}),L(),p("Profil staf berhasil diperbarui! ✅","success"),await g()}catch(r){const f=r.code==="permission-denied"||r.message&&r.message.toLowerCase().includes("permission")?"Izin ditolak oleh Firebase (Khusus Akun Owner).":r.message;s&&(s.textContent="Gagal memperbarui: "+f,s.classList.remove("hidden")),l&&(l.disabled=!1,l.innerHTML='<i class="fa-solid fa-floppy-disk mr-2"></i>Simpan')}finally{A()}},D=async(a,e)=>{if(m("mengubah status aktif staf")){S(e?"Mengaktifkan staf...":"Menonaktifkan staf...");try{await b.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(a).set({isActive:e,updatedAt:v.firestore.FieldValue.serverTimestamp()},{merge:!0}),p(e?"Akun staf diaktifkan ✅":"Akun staf dinonaktifkan ❌","success"),await g()}catch(t){t.code==="permission-denied"||t.message&&t.message.toLowerCase().includes("permission")?p("Akses Ditolak: Hanya akun Owner yang berwenang mengubah status staf.","error"):p("Gagal mengubah status staf: "+t.message,"error")}finally{A()}}},F=(a,e)=>{m("menghapus akun staf")&&K("Hapus Akun Staf",`Yakin hapus akun staf "${e}"? Akun tidak dapat dipulihkan dan staf tidak dapat login lagi ke toko.`,async()=>{S("Menghapus akun staf...");try{await b.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(a).delete(),p(`Akun "${e}" berhasil dihapus`,"success"),await g()}catch(t){t.code==="permission-denied"||t.message&&t.message.toLowerCase().includes("permission")?p("Akses Ditolak: Hanya akun Owner yang berwenang menghapus staf.","error"):p("Gagal menghapus staf: "+t.message,"error")}finally{A()}},"Ya, Hapus")},B=a=>{const e=n(a),t=n(a+"-eye");e&&(e.type==="password"?(e.type="text",t&&(t.className="fa-solid fa-eye-slash text-sm")):(e.type="password",t&&(t.className="fa-solid fa-eye text-sm")))},se=I,re=j,le=O,ie=(a,e,t)=>N(a,e,t,i.CASHIER),oe=L,ne=D,de=F,ce=g,fe=B;typeof window<"u"&&(window.renderCashierAccounts=G,window.switchCashierTab=z,window.filterStaffRole=W,window.loadStaffList=g,window.openAddStaffModal=I,window.closeAddStaffModal=j,window.applyNewStaffPreset=Y,window.setAllNewStaffPerms=Q,window.saveStaffAccount=O,window.openPermissionsModal=X,window.closePermissionsModal=R,window.applyEditStaffPreset=Z,window.setAllEditStaffPerms=ee,window.saveStaffPermissions=te,window.openEditStaffModal=N,window.closeEditStaffModal=L,window.updateStaffProfile=ae,window.toggleStaffActive=D,window.deleteStaffAccount=F,window.toggleStaffPassVisibility=B,window.verifyOwnerAuthority=m,window.openAddCashierModal=se,window.closeAddCashierModal=re,window.saveCashierAccount=le,window.openEditCashierModal=ie,window.closeEditCashierModal=oe,window.toggleCashierActive=ne,window.deleteCashierAccount=de,window.loadCashierList=ce,window.toggleCashierPassVisibility=fe);export{Z as applyEditStaffPreset,Y as applyNewStaffPreset,re as closeAddCashierModal,j as closeAddStaffModal,oe as closeEditCashierModal,L as closeEditStaffModal,R as closePermissionsModal,de as deleteCashierAccount,F as deleteStaffAccount,W as filterStaffRole,ce as loadCashierList,g as loadStaffList,se as openAddCashierModal,I as openAddStaffModal,ie as openEditCashierModal,N as openEditStaffModal,X as openPermissionsModal,G as renderCashierAccounts,le as saveCashierAccount,O as saveStaffAccount,te as saveStaffPermissions,ee as setAllEditStaffPerms,Q as setAllNewStaffPerms,z as switchCashierTab,ne as toggleCashierActive,fe as toggleCashierPassVisibility,D as toggleStaffActive,B as toggleStaffPassVisibility,ae as updateStaffProfile,m as verifyOwnerAuthority};

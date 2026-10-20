const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/module-pos-Cgn74Y4K.js","assets/module-print-BqHK0rDV.js","assets/vendor-firebase-core-D2OF5R23.js","assets/vendor-firebase-db-BIUZcnOd.js","assets/module-member-BmQIROb_.js","assets/module-faq-DULuCBXN.js"])))=>i.map(i=>d[i]);
import{R as g,f as x,a as f,q as S,i as o,e as l,k as A,l as C,A as J,n as O,H as ke,_ as ve,bj as U,bk as oe,J as ge,b as Ke,bl as V,bm as Be}from"./module-print-BqHK0rDV.js";import{V as Le}from"./module-pos-Cgn74Y4K.js";import{f as j}from"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";import"./module-member-BmQIROb_.js";import"./module-faq-DULuCBXN.js";const le=[{key:"permanent",label:"Karyawan Tetap",badgeColor:"emerald"},{key:"contract",label:"Kontrak (PKWT)",badgeColor:"blue"},{key:"probation",label:"Masa Percobaan (3 Bulan)",badgeColor:"amber"},{key:"daily",label:"Staf Harian Lepas",badgeColor:"purple"}],ne=[{key:"bca",label:"BCA (Bank Central Asia)"},{key:"bri",label:"BRI (Bank Rakyat Indonesia)"},{key:"mandiri",label:"Bank Mandiri"},{key:"bni",label:"BNI (Bank Negara Indonesia)"},{key:"bsi",label:"BSI (Bank Syariah Indonesia)"},{key:"jatim",label:"Bank Jatim"},{key:"cash",label:"Tunai Kas Laci Toko (Cash)"},{key:"other",label:"Bank Lainnya / E-Wallet"}],ie=(a=[],e="EMP")=>{if(!Array.isArray(a)||a.length===0)return`${e}-001`;let t=0;const s=new RegExp(`^${e}-(\\d+)`,"i");a.forEach(n=>{const i=String(n?.employeeId||n?.nik||"").trim().match(s);if(i&&i[1]){const m=parseInt(i[1],10);!isNaN(m)&&m>t&&(t=m)}});const r=t+1;return`${e}-${String(r).padStart(3,"0")}`},ae=a=>a&&a.ownerEmployee&&typeof a.ownerEmployee=="object"?{employeeId:"OWN-001",role:g.OWNER,position:"Owner / Direktur Utama",baseSalary:1e7,dailyAllowance:0,employmentStatus:"permanent",bankName:"BCA / Rekening Toko",bankAccount:"-",bankHolder:"Pemilik Toko",isActive:!0,...a.ownerEmployee}:{employeeId:"OWN-001",name:a?.store?.name?`Pemilik ${a.store.name}`:"Pemilik Toko",email:a?.subscription?.clientEmail||"owner@tokoputri.com",phone:a?.store?.wa||"",role:g.OWNER,position:"Owner / Direktur Utama",baseSalary:1e7,dailyAllowance:0,employmentStatus:"permanent",bankName:"BCA / Rekening Toko",bankAccount:"-",bankHolder:"Pemilik Toko",hireDate:"2024-01-01",isActive:!0,notes:"Gaji resmi direksi / pemilik toko terpisah dari laba usaha toko."},ee=(a={},e=0)=>{const t=a.role===g.OWNER||a.role==="owner",s=t?"OWN":"EMP",r=(a.employeeId||a.nik||`${s}-${String(e+1).padStart(3,"0")}`).trim();let n=a.position||"";return n||(t?n="Owner / Direktur Utama":a.role===g.ADMIN?n="Admin Operasional Toko":a.role===g.CASHIER?n="Kasir POS":n="Staf Operasional / Gudang"),{uid:a.uid||a.id||`emp_${Date.now()}_${e}`,employeeId:r,name:String(a.name||"Karyawan").trim(),email:String(a.email||"").trim(),phone:String(a.phone||"").trim(),role:a.role||g.CASHIER,position:n,employmentStatus:a.employmentStatus||"permanent",hireDate:a.hireDate||new Date().toISOString().split("T")[0],baseSalary:Math.max(0,parseFloat(a.baseSalary)||0),dailyAllowance:Math.max(0,parseFloat(a.dailyAllowance)||0),bankName:a.bankName||"cash",bankAccount:String(a.bankAccount||"").trim(),bankHolder:String(a.bankHolder||a.name||"").trim(),nikKtp:String(a.nikKtp||"").trim(),npwp:String(a.npwp||"").trim(),isActive:a.isActive!==!1,notes:String(a.notes||"").trim()}},Fe=(a=[],e={})=>{const t=Array.isArray(e?.employees)?e.employees:[],s=new Map;return t.forEach(r=>{r.uid&&s.set(r.uid,r),r.email&&s.set(r.email.toLowerCase(),r),r.employeeId&&s.set(r.employeeId,r)}),a.map((r,n)=>{const d=s.get(r.uid)||s.get(r.email?.toLowerCase())||{};return ee({...d,...r,uid:r.uid,email:r.email,name:r.name||d.name,role:r.role||d.role,isActive:r.isActive!==!1},n)})},P=(a="mengubah data staf")=>{try{if(typeof window<"u"&&window.auth&&window.ADMIN_UID){const e=window.auth.currentUser;return e?e.uid!==window.ADMIN_UID?(typeof window.showToast=="function"&&window.showToast(`Akses Ditolak: Hanya Akun Pemilik Utama (Owner) yang berwenang ${a}. Akun staf tidak memiliki izin modifikasi database staf.`,"error"),!1):!0:(typeof window.showToast=="function"&&window.showToast(`Sesi Belum Terotentikasi: Harap login resmi menggunakan Akun Pemilik Toko (Email Owner) di form login CMS untuk ${a}.`,"warning"),!1)}}catch{}return!0};typeof window<"u"&&(window.EMPLOYMENT_STATUSES=le,window.SALARY_PAYMENT_METHODS=ne,window.generateEmployeeId=ie,window.getOwnerEmployeeProfile=ae,window.normalizeEmployeeProfile=ee,window.mergeStaffWithHrProfiles=Fe,window.verifyOwnerAuthority=P);const _e=async()=>{try{if(typeof window<"u"&&typeof window.saveApp=="function")return await window.saveApp();const a=await ve(()=>import("./module-pos-Cgn74Y4K.js").then(e=>e.W),__vite__mapDeps([0,1,2,3,4,5]));if(typeof a?.saveApp=="function")return await a.saveApp()}catch{}};let L="active",R=[];const ye=(a=[])=>{const e=new Date().getFullYear(),t=`KSB-${e}`;let s=0;const r=new RegExp(`^KSB-${e}-(\\d+)`,"i");a.forEach(d=>{const m=String(d?.advanceId||d?.id||"").trim().match(r);if(m&&m[1]){const c=parseInt(m[1],10);!isNaN(c)&&c>s&&(s=c)}});const n=s+1;return`${t}-${String(n).padStart(3,"0")}`},W=()=>{const a=Array.isArray(f.employees)?[...f.employees]:[],e=ae(f);return a.some(s=>s.employeeId==="OWN-001"||s.role==="owner")||a.unshift(e),a.filter(s=>s.isActive!==!1)},we=async()=>{try{let a=[];try{a=(await S.collection("freshmart").doc("cms_data").collection("salary_advances").orderBy("createdAt","desc").get()).docs.map(t=>({id:t.id,...t.data()}))}catch{a=Array.isArray(f.salaryAdvances)?f.salaryAdvances:[]}return R=a,f.salaryAdvances=a,a}catch(a){return console.error("[HR Advances] Gagal memuat data kasbon:",a),R=Array.isArray(f.salaryAdvances)?f.salaryAdvances:[],R}},q=async a=>{if(!a)return;a.innerHTML=`
    <div class="text-center py-16">
        <i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i>
        <p class="text-xs text-slate-400 mt-2">Memuat buku kasbon karyawan...</p>
    </div>`,await we();const e=R,t=e.filter(i=>i.status==="active"&&(parseFloat(i.remainingAmount)||0)>0),s=t.reduce((i,m)=>i+(parseFloat(m.remainingAmount)||0),0),r=new Set(t.map(i=>i.employeeId||i.employeeName)).size,n=t.reduce((i,m)=>i+Math.min(parseFloat(m.monthlyInstallment)||0,parseFloat(m.remainingAmount)||0),0);let d=e;L==="active"?d=e.filter(i=>i.status==="active"&&(parseFloat(i.remainingAmount)||0)>0):L==="paid"&&(d=e.filter(i=>i.status==="paid"||(parseFloat(i.remainingAmount)||0)<=0)),a.innerHTML=`
    <div class="space-y-4">
        <!-- Bento Summary Cards -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div class="p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs">
                <span class="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1">Total Kasbon Aktif</span>
                <p class="text-base sm:text-lg font-black text-rose-600 dark:text-rose-400">${x(s)}</p>
                <span class="text-[10px] text-slate-400 mt-0.5 block">Sisa piutang staf toko</span>
            </div>
            <div class="p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs">
                <span class="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1">Karyawan Meminjam</span>
                <p class="text-base sm:text-lg font-black text-slate-800 dark:text-white">${r} <span class="text-xs font-medium text-slate-400">Orang</span></p>
                <span class="text-[10px] text-slate-400 mt-0.5 block">Kasbon belum lunas</span>
            </div>
            <div class="p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs">
                <span class="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1">Potongan Payroll Bln Ini</span>
                <p class="text-base sm:text-lg font-black text-[var(--color-primary)]">${x(n)}</p>
                <span class="text-[10px] text-slate-400 mt-0.5 block">Otomatis dipotong gaji</span>
            </div>
            <div class="p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs">
                <span class="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1">Total Pengajuan</span>
                <p class="text-base sm:text-lg font-black text-slate-800 dark:text-white">${e.length} <span class="text-xs font-medium text-slate-400">Riwayat</span></p>
                <span class="text-[10px] text-slate-400 mt-0.5 block">Sepanjang masa toko</span>
            </div>
        </div>

        <!-- Action Bar & Filter -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
            <div class="flex items-center gap-1.5 overflow-x-auto pb-1 custom-scrollbar">
                <button onclick="window.filterAdvanceStatus('active')" 
                    class="px-3.5 py-2 rounded-xl text-xs font-bold transition-all active:scale-95 cursor-pointer shadow-2xs shrink-0 flex items-center gap-1.5 ${L==="active"?"text-white shadow-xs":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"}"
                    style="${L==="active"?"background: var(--color-primary); color: #fff;":""}">
                    <i class="fa-solid fa-clock-rotate-left text-[10px]"></i>
                    <span>Kasbon Aktif (${t.length})</span>
                </button>
                <button onclick="window.filterAdvanceStatus('paid')" 
                    class="px-3.5 py-2 rounded-xl text-xs font-bold transition-all active:scale-95 cursor-pointer shadow-2xs shrink-0 flex items-center gap-1.5 ${L==="paid"?"text-white shadow-xs":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"}"
                    style="${L==="paid"?"background: var(--color-primary); color: #fff;":""}">
                    <i class="fa-solid fa-circle-check text-[10px] text-emerald-500"></i>
                    <span>Sudah Lunas</span>
                </button>
                <button onclick="window.filterAdvanceStatus('all')" 
                    class="px-3.5 py-2 rounded-xl text-xs font-bold transition-all active:scale-95 cursor-pointer shadow-2xs shrink-0 flex items-center gap-1.5 ${L==="all"?"text-white shadow-xs":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"}"
                    style="${L==="all"?"background: var(--color-primary); color: #fff;":""}">
                    <i class="fa-solid fa-list text-[10px]"></i>
                    <span>Semua Catatan (${e.length})</span>
                </button>
            </div>

            <button onclick="window.openSalaryAdvanceFormModal()"
                class="px-4 py-2.5 rounded-2xl text-white text-xs font-black shadow-md active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2 shrink-0 self-start sm:self-auto hover:opacity-95"
                style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                <i class="fa-solid fa-hand-holding-dollar text-xs"></i>
                <span>+ Ajukan Kasbon Baru</span>
            </button>
        </div>

        <!-- List Kasbon Cards -->
        <div id="salary-advances-list" class="space-y-3">
            ${Ue(d)}
        </div>
    </div>`},Ge=a=>{L=a;const e=l("cashier-panel-advances");e&&q(e)},Ue=a=>!a||a.length===0?`
        <div class="flex flex-col items-center justify-center py-16 text-slate-400 dark:text-slate-600 bg-white dark:bg-slate-800/60 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-8 text-center">
            <div class="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-2xl mb-3 text-slate-400">
                <i class="fa-solid fa-receipt"></i>
            </div>
            <p class="font-bold text-sm text-slate-700 dark:text-slate-300">Tidak ada catatan kasbon pada filter ini</p>
            <p class="text-xs mt-1 text-slate-400">Klik "+ Ajukan Kasbon Baru" untuk mencatat pinjaman staf toko</p>
        </div>`:a.map(e=>{const t=Math.max(0,parseFloat(e.remainingAmount)||0),s=Math.max(1,parseFloat(e.amount)||1),r=Math.max(0,s-t),n=Math.min(100,Math.round(r/s*100)),d=t<=0||e.status==="paid",i=e.disbursementSource==="bank"?"Transfer Bank":e.disbursementSource==="owner"?"Dana Owner":"Kas Toko (Tunai)",m=e.requestDate||"-";return`
        <div class="p-4 sm:p-5 bg-white dark:bg-slate-800/95 rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:shadow-xs transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div class="flex items-start gap-3.5 min-w-0 flex-1">
                <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-base shrink-0 shadow-2xs font-black ${d?"bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 border border-emerald-200 dark:border-emerald-800":"bg-rose-50 dark:bg-rose-950/40 text-rose-600 border border-rose-200 dark:border-rose-800"}">
                    <i class="fa-solid ${d?"fa-circle-check":"fa-hand-holding-dollar"}"></i>
                </div>
                <div class="min-w-0 flex-1 space-y-1.5">
                    <div class="flex items-center gap-2 flex-wrap">
                        <span class="text-sm font-black text-slate-900 dark:text-white truncate">${o(e.employeeName||"Karyawan")}</span>
                        <span class="inline-flex items-center gap-1 font-mono text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600">
                            ${o(e.employeeId||"EMP")}
                        </span>
                        <span class="font-mono text-[10px] text-slate-400">#${o(e.advanceId||e.id)}</span>
                        <span class="inline-flex items-center gap-1 text-[10px] font-black px-2.5 py-0.5 rounded-full ${d?"bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200":"bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border border-amber-200"}">
                            <span class="w-1.5 h-1.5 rounded-full ${d?"bg-emerald-500":"bg-amber-500 animate-pulse"}"></span>
                            ${d?"Lunas":"Belum Lunas"}
                        </span>
                    </div>

                    <div class="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300 flex-wrap">
                        <span class="font-bold text-slate-800 dark:text-slate-200">${o(e.position||"Staf Toko")}</span>
                        <span>•</span>
                        <span>Pinjaman: <strong class="text-slate-900 dark:text-white">${x(e.amount)}</strong></span>
                        <span>•</span>
                        <span>Sisa: <strong class="${d?"text-emerald-600 dark:text-emerald-400":"text-rose-600 dark:text-rose-400"}">${x(t)}</strong></span>
                        <span>•</span>
                        <span>Potongan: <strong class="text-[var(--color-primary)] font-bold">${x(e.monthlyInstallment)}/bln</strong></span>
                    </div>

                    <!-- Progress Bar Cicilan -->
                    <div class="pt-1 max-w-md">
                        <div class="flex items-center justify-between text-[10px] text-slate-400 mb-1">
                            <span>Terbayar: ${x(r)}</span>
                            <span class="font-bold text-slate-600 dark:text-slate-300">${n}% Lunas</span>
                        </div>
                        <div class="w-full bg-slate-100 dark:bg-slate-700/80 rounded-full h-1.5 overflow-hidden">
                            <div class="h-full rounded-full transition-all duration-500 ${d?"bg-emerald-500":""}" style="width: ${n}%; ${d?"":"background: var(--color-primary)"}"></div>
                        </div>
                    </div>

                    <div class="flex items-center gap-3 text-[11px] text-slate-400 dark:text-slate-500 flex-wrap pt-0.5">
                        <span class="flex items-center gap-1"><i class="fa-solid fa-calendar-day text-[10px]"></i> Tgl: ${o(m)}</span>
                        <span>•</span>
                        <span class="flex items-center gap-1"><i class="fa-solid fa-wallet text-[10px]"></i> Sumber: ${o(i)}</span>
                        ${e.reason?`<span>•</span><span class="italic text-slate-500 truncate max-w-xs">"${o(e.reason)}"</span>`:""}
                    </div>
                </div>
            </div>

            <!-- Tombol Aksi -->
            <div class="flex items-center gap-2 shrink-0 self-end sm:self-center border-t sm:border-t-0 pt-2.5 sm:pt-0 border-slate-100 dark:border-slate-700/60 w-full sm:w-auto justify-end">
                <button onclick="window.openAdvanceDetailModal('${o(e.advanceId||e.id)}')"
                    class="px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-50 hover:bg-slate-100 dark:bg-slate-700/80 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 transition-all active:scale-95 cursor-pointer shadow-2xs flex items-center gap-1.5">
                    <i class="fa-solid fa-file-invoice text-[10px]" style="color: var(--color-primary)"></i>
                    <span>Riwayat &amp; Rincian</span>
                </button>
                ${d?"":`
                <button onclick="window.promptManualRepayment('${o(e.advanceId||e.id)}', ${t})"
                    class="px-3.5 py-2 rounded-xl text-xs font-black text-white transition-all active:scale-95 cursor-pointer shadow-2xs flex items-center gap-1.5"
                    style="background: var(--color-primary)">
                    <i class="fa-solid fa-money-bill-transfer text-[10px]"></i>
                    <span>Bayar Kasbon</span>
                </button>`}
                <button onclick="window.deleteSalaryAdvance('${o(e.advanceId||e.id)}', '${o(e.employeeName||"Karyawan")}')"
                    title="Hapus Catatan Kasbon"
                    class="w-9 h-9 rounded-xl flex items-center justify-center text-xs bg-slate-50 hover:bg-rose-50 dark:bg-slate-700/80 dark:hover:bg-rose-950/40 text-slate-400 hover:text-rose-600 border border-slate-200 dark:border-slate-600 transition-all active:scale-95 cursor-pointer shrink-0">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        </div>`}).join(""),ze=()=>{if(!P("mencatat kasbon karyawan"))return;const a=W();if(a.length===0){A("Belum ada staf terdaftar di toko. Tambahkan staf terlebih dahulu.","warning");return}const e=new Date().toISOString().split("T")[0],t=ye(R),s=l("modal-salary-advance-form");s&&s.remove(),document.body.insertAdjacentHTML("beforeend",`
    <div id="modal-salary-advance-form" class="fixed inset-0 z-[9990] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/75"
        onclick="if(event.target===this) window.closeSalaryAdvanceFormModal()">
        <div class="bg-white dark:bg-slate-900 rounded-t-[2rem] sm:rounded-3xl shadow-2xl w-full max-w-lg flex flex-col max-h-[92vh] sm:max-h-[90vh] overflow-hidden scale-95 transition-transform duration-300 border border-slate-200 dark:border-slate-800" id="salary-advance-modal-box">
            <!-- Mobile Drag Handle -->
            <div class="sm:hidden w-12 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full mx-auto mt-2.5 mb-1 shrink-0"></div>
            <!-- Modal Header -->
            <div class="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 shrink-0"
                style="background: linear-gradient(135deg, rgba(var(--color-primary-rgb), 0.08) 0%, rgba(var(--color-primary-rgb), 0.02) 100%)">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-sm shadow-2xs text-white"
                        style="background: var(--color-primary)">
                        <i class="fa-solid fa-hand-holding-dollar"></i>
                    </div>
                    <div>
                        <h3 class="font-black text-sm text-slate-900 dark:text-white flex items-center gap-2">
                            <span>Form Pengajuan Kasbon Karyawan</span>
                            <span class="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">${o(t)}</span>
                        </h3>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400">Pencatatan pinjaman operasional staf toko</p>
                    </div>
                </div>
                <button onclick="window.closeSalaryAdvanceFormModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 flex items-center justify-center hover:bg-rose-50 hover:text-rose-500 transition-all active:scale-90 cursor-pointer">
                    <i class="fa-solid fa-xmark text-sm"></i>
                </button>
            </div>

            <!-- Modal Body (Scrollable) -->
            <div class="p-5 space-y-4 overflow-y-auto flex-1 custom-scrollbar">
                <div>
                    <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Pilih Karyawan Peminjam <span class="text-rose-500">*</span></label>
                    <select id="adv-employee-select" onchange="window.onAdvanceEmployeeChange()"
                        class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] shadow-inner">
                        ${a.map(r=>`
                            <option value="${o(r.uid||r.employeeId)}" data-empid="${o(r.employeeId)}" data-name="${o(r.name)}" data-role="${o(r.role)}" data-position="${o(r.position)}" data-salary="${r.baseSalary||0}">
                                ${o(r.name)} — ${o(r.position)} (${o(r.employeeId)}) [Gaji: ${x(r.baseSalary||0)}]
                            </option>
                        `).join("")}
                    </select>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Tanggal Pencairan <span class="text-rose-500">*</span></label>
                        <input id="adv-request-date" type="date" value="${e}"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] shadow-inner">
                    </div>
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Nominal Kasbon (Rp) <span class="text-rose-500">*</span></label>
                        <input id="adv-amount" type="number" min="10000" step="50000" placeholder="Contoh: 500000"
                            oninput="window.calculateAdvanceInstallment()"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-white dark:bg-slate-800 text-rose-600 dark:text-rose-400 font-black focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] shadow-inner">
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Skema Tenor Potongan Gaji</label>
                        <select id="adv-tenor-select" onchange="window.calculateAdvanceInstallment()"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] shadow-inner">
                            <option value="1">1 Bulan (Lunas Sekali Potong)</option>
                            <option value="2">2 Bulan (Cicilan 2x)</option>
                            <option value="3">3 Bulan (Cicilan 3x)</option>
                            <option value="4">4 Bulan (Cicilan 4x)</option>
                            <option value="6">6 Bulan (Cicilan 6x)</option>
                        </select>
                    </div>
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Potongan Tiap Bulan (Rp)</label>
                        <input id="adv-installment" type="number" min="0" step="10000"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-slate-50 dark:bg-slate-800 text-[var(--color-primary)] font-black focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] shadow-inner">
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Sumber Dana Pencairan</label>
                        <select id="adv-disbursement-source"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] shadow-inner">
                            <option value="cash">Kas Laci Toko (Tunai)</option>
                            <option value="bank">Transfer Rekening Bank Toko</option>
                            <option value="owner">Dana Pribadi / Talangan Owner</option>
                        </select>
                    </div>
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Keperluan / Alasan Pinjaman</label>
                        <input id="adv-reason" type="text" placeholder="Contoh: Kebutuhan darurat / biaya keluarga"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] shadow-inner">
                    </div>
                </div>

                <!-- Opsi Integrasi Buku Kas Toko -->
                <div class="p-3.5 rounded-2xl border" style="background: rgba(var(--color-primary-rgb), 0.05); border-color: rgba(var(--color-primary-rgb), 0.2)">
                    <label class="flex items-start gap-2.5 cursor-pointer">
                        <input id="adv-sync-expense" type="checkbox" checked class="mt-0.5 rounded border-slate-300 text-[var(--color-primary)] focus:ring-[var(--color-primary)]/30">
                        <div class="text-xs">
                            <span class="font-black text-slate-900 dark:text-white">Catat Otomatis ke Buku Kas Pengeluaran Toko (expenses.js)</span>
                            <p class="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
                                Dana kasbon yang dicairkan langsung memotong saldo kas toko dan masuk ke laporan beban kas operasional kategori "Kasbon &amp; Pinjaman Karyawan".
                            </p>
                        </div>
                    </label>
                </div>

                <div id="adv-form-error" class="hidden text-xs text-rose-600 font-semibold p-3 bg-rose-50 dark:bg-rose-950/40 rounded-2xl border border-rose-200 dark:border-rose-900/50"></div>
            </div>

            <!-- Modal Footer -->
            <div class="p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800 flex gap-3 shrink-0 bg-slate-50/50 dark:bg-slate-900/50 pb-[max(1rem,env(safe-area-inset-bottom))]">
                <button onclick="window.closeSalaryAdvanceFormModal()"
                    class="flex-1 min-h-[48px] py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-slate-100 active:scale-95 transition-all cursor-pointer">
                    Batal
                </button>
                <button onclick="window.saveSalaryAdvance()" id="save-adv-btn"
                    class="flex-[2] min-h-[48px] py-3.5 rounded-2xl text-white font-black text-sm shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    style="background: var(--color-primary)">
                    <i class="fa-solid fa-floppy-disk"></i> Simpan &amp; Cairkan Kasbon
                </button>
            </div>
        </div>
    </div>`),typeof window.pushModalHistory=="function"&&window.pushModalHistory("advanceForm"),setTimeout(()=>{const r=l("salary-advance-modal-box");r&&r.classList.remove("scale-95");const n=l("adv-amount");n&&n.focus()},10)},he=(a=!1)=>{const e=()=>{const t=l("modal-salary-advance-form");t&&(t.style.opacity="0",setTimeout(()=>t.remove(),200))};typeof window.requestCloseModal=="function"?window.requestCloseModal("advanceForm",a,e):e()},Ae=()=>{const a=parseFloat(l("adv-amount")?.value)||0,e=parseInt(l("adv-tenor-select")?.value,10)||1,t=l("adv-installment");t&&a>0&&(t.value=Math.ceil(a/e))},We=()=>{Ae()},qe=async()=>{if(!P("mencatat kasbon karyawan"))return;const a=l("adv-employee-select"),e=a?.options[a.selectedIndex];if(!e){A("Pilih karyawan terlebih dahulu","warning");return}const t=a.value,s=e.getAttribute("data-empid")||"EMP-001",r=e.getAttribute("data-name")||"Karyawan",n=e.getAttribute("data-role")||"staff",d=e.getAttribute("data-position")||"Staf Toko",i=l("adv-request-date")?.value||new Date().toISOString().split("T")[0],m=Math.max(0,parseFloat(l("adv-amount")?.value)||0),c=parseInt(l("adv-tenor-select")?.value,10)||1,p=Math.max(0,parseFloat(l("adv-installment")?.value)||Math.ceil(m/c)),b=l("adv-disbursement-source")?.value||"cash",k=l("adv-reason")?.value?.trim()||"Kasbon Operasional Karyawan",v=l("adv-sync-expense")?.checked!==!1,u=l("adv-form-error"),w=l("save-adv-btn");if(m<1e4){u&&(u.textContent="Nominal kasbon minimal Rp 10.000.",u.classList.remove("hidden"));return}w&&(w.disabled=!0,w.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i>Menyimpan...'),C("Mencatat kasbon karyawan...");try{const $=ye(R);let h=null;if(v){h="exp_adv_"+Date.now();const H={id:h,date:i,category:"kasbon",amount:m,desc:`Pencairan Kasbon: ${r} (${s}) - ${k}`,source:b,recipient:r,receiptUrl:"",advanceId:$,createdAt:new Date().toISOString()};Array.isArray(f.expenses)||(f.expenses=[]),f.expenses.unshift(H);try{await _e()}catch{}}const y={advanceId:$,employeeUid:t,employeeId:s,employeeName:r,employeeRole:n,position:d,requestDate:i,amount:m,monthlyInstallment:p,totalTenorMonths:c,remainingAmount:m,reason:k,status:"active",disbursementSource:b,expenseId:h,repayments:[],createdAt:j.firestore.FieldValue.serverTimestamp(),createdBy:J.currentUser?.uid||"owner"};try{await S.collection("freshmart").doc("cms_data").collection("salary_advances").doc($).set(y)}catch{}Array.isArray(f.salaryAdvances)||(f.salaryAdvances=[]),f.salaryAdvances.unshift({id:$,...y}),R=f.salaryAdvances,he(),A(`Kasbon Rp ${x(m)} untuk ${r} berhasil dicatat!`,"success");const N=l("cashier-panel-advances");N&&q(N)}catch($){console.error("[HR Advances] Gagal menyimpan kasbon:",$),u&&(u.textContent="Gagal menyimpan kasbon: "+($.message||"Kesalahan sistem"),u.classList.remove("hidden")),w&&(w.disabled=!1,w.innerHTML='<i class="fa-solid fa-floppy-disk mr-2"></i>Simpan &amp; Cairkan Kasbon')}finally{O()}},Je=a=>{const e=R.find(c=>(c.advanceId||c.id)===a);if(!e){A("Data kasbon tidak ditemukan","warning");return}const t=Math.max(0,parseFloat(e.remainingAmount)||0),s=Math.max(1,parseFloat(e.amount)||1),r=Math.max(0,s-t),n=Math.min(100,Math.round(r/s*100)),d=t<=0||e.status==="paid",i=Array.isArray(e.repayments)?e.repayments:[],m=l("modal-salary-advance-detail");m&&m.remove(),document.body.insertAdjacentHTML("beforeend",`
    <div id="modal-salary-advance-detail" class="fixed inset-0 z-[9990] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/75"
        onclick="if(event.target===this) window.closeAdvanceDetailModal()">
        <div class="bg-white dark:bg-slate-900 rounded-t-[2rem] sm:rounded-3xl shadow-2xl w-full max-w-lg flex flex-col max-h-[92vh] sm:max-h-[90vh] overflow-hidden scale-95 transition-transform duration-300 border border-slate-200 dark:border-slate-800" id="salary-advance-detail-modal-box">
            <!-- Mobile Drag Handle -->
            <div class="sm:hidden w-12 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full mx-auto mt-2.5 mb-1 shrink-0"></div>
            <!-- Header -->
            <div class="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 shrink-0"
                style="background: linear-gradient(135deg, rgba(var(--color-primary-rgb), 0.08) 0%, rgba(var(--color-primary-rgb), 0.02) 100%)">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-sm shadow-2xs ${d?"bg-emerald-500 text-white":"text-white"}"
                        style="${d?"":"background: var(--color-primary)"}">
                        <i class="fa-solid fa-file-invoice"></i>
                    </div>
                    <div>
                        <h3 class="font-black text-sm text-slate-900 dark:text-white flex items-center gap-2">
                            <span>Detail Kasbon: ${o(e.employeeName)}</span>
                            <span class="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">${o(e.advanceId||e.id)}</span>
                        </h3>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400">${o(e.position)} • ID: ${o(e.employeeId)}</p>
                    </div>
                </div>
                <button onclick="window.closeAdvanceDetailModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 flex items-center justify-center hover:bg-rose-50 hover:text-rose-500 transition-all active:scale-90 cursor-pointer">
                    <i class="fa-solid fa-xmark text-sm"></i>
                </button>
            </div>

            <!-- Body -->
            <div class="p-5 space-y-4 overflow-y-auto flex-1 custom-scrollbar">
                <!-- Status & Saldo Bento Card -->
                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 space-y-2.5">
                    <div class="flex items-center justify-between">
                        <span class="text-xs font-bold text-slate-500">Status Pelunasan:</span>
                        <span class="inline-flex items-center gap-1.5 text-xs font-black px-3 py-1 rounded-full ${d?"bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300":"bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300"}">
                            <span class="w-2 h-2 rounded-full ${d?"bg-emerald-500":"bg-rose-500 animate-pulse"}"></span>
                            ${d?"Lunas Sepenuhnya":"Masih Berjalan (Belum Lunas)"}
                        </span>
                    </div>
                    <div class="grid grid-cols-2 gap-2 pt-1 border-t border-slate-200/60 dark:border-slate-700/60">
                        <div>
                            <span class="text-[10px] font-bold uppercase text-slate-400 block">Total Pinjaman</span>
                            <span class="text-sm font-black text-slate-800 dark:text-white">${x(e.amount)}</span>
                        </div>
                        <div>
                            <span class="text-[10px] font-bold uppercase text-slate-400 block">Sisa Pinjaman</span>
                            <span class="text-sm font-black ${d?"text-emerald-600":"text-rose-600"}">${x(t)}</span>
                        </div>
                    </div>
                    <div class="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden mt-2">
                        <div class="h-full rounded-full transition-all duration-500 ${d?"bg-emerald-500":""}" style="width: ${n}%; ${d?"":"background: var(--color-primary)"}"></div>
                    </div>
                    <div class="flex items-center justify-between text-[11px] text-slate-500 pt-0.5">
                        <span>Potongan: <strong>${x(e.monthlyInstallment)} / bln</strong></span>
                        <span>Tenor: <strong>${e.totalTenorMonths||1} Bulan</strong></span>
                    </div>
                </div>

                <!-- Riwayat Pembayaran / Pemotongan -->
                <div>
                    <h4 class="text-xs font-black text-slate-800 dark:text-white flex items-center gap-1.5 mb-2">
                        <i class="fa-solid fa-clock-rotate-left" style="color: var(--color-primary)"></i> Riwayat Angsuran &amp; Pemotongan
                    </h4>
                    ${i.length===0?`
                        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-center text-xs text-slate-400">
                            Belum ada riwayat pemotongan gaji atau pembayaran angsuran untuk kasbon ini.
                        </div>
                    `:`
                        <div class="space-y-2">
                            ${i.map((c,p)=>`
                            <div class="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs">
                                <div>
                                    <span class="font-bold text-slate-800 dark:text-white block">Angsuran #${p+1}: ${x(c.amount)}</span>
                                    <span class="text-[10px] text-slate-400">${o(c.date||"-")} • ${o(c.notes||"Potongan Payroll")}</span>
                                </div>
                                <span class="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">-${x(c.amount)}</span>
                            </div>`).join("")}
                        </div>
                    `}
                </div>
            </div>

            <!-- Footer -->
            <div class="p-4 border-t border-slate-100 dark:border-slate-800 flex justify-end shrink-0 pb-[max(1rem,env(safe-area-inset-bottom))]">
                <button onclick="window.closeAdvanceDetailModal()"
                    class="min-h-[44px] px-6 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-slate-100 active:scale-95 transition-all cursor-pointer">
                    Tutup
                </button>
            </div>
        </div>
    </div>`),typeof window.pushModalHistory=="function"&&window.pushModalHistory("advanceDetail"),setTimeout(()=>{const c=l("salary-advance-detail-modal-box");c&&c.classList.remove("scale-95")},10)},Ve=(a=!1)=>{const e=()=>{const t=l("modal-salary-advance-detail");t&&(t.style.opacity="0",setTimeout(()=>t.remove(),200))};typeof window.requestCloseModal=="function"?window.requestCloseModal("advanceDetail",a,e):e()},Ye=(a,e)=>{if(!P("mencatat pembayaran kasbon"))return;const t=R.find(n=>(n.advanceId||n.id)===a);if(!t)return;const s=prompt(`Masukkan nominal pembayaran angsuran kasbon untuk "${t.employeeName}":
(Sisa pinjaman saat ini: Rp ${x(e)})`,e);if(s===null)return;const r=Math.max(0,parseFloat(s.replace(/[^0-9]/g,""))||0);if(r<=0){A("Nominal pembayaran tidak valid","warning");return}de(a,r,"Pembayaran manual / tunai staf")},de=async(a,e,t="Potongan gaji payroll")=>{const s=R.find(c=>(c.advanceId||c.id)===a);if(!s)return!1;const r=Math.max(0,parseFloat(s.remainingAmount)||0),n=Math.min(r,e),d=Math.max(0,r-n),i=d<=0,m={date:new Date().toISOString().split("T")[0],amount:n,remainingAfter:d,notes:t,recordedAt:new Date().toISOString()};C("Memperbarui catatan kasbon...");try{const c={remainingAmount:d,status:i?"paid":"active",repayments:j.firestore.FieldValue.arrayUnion(m),updatedAt:j.firestore.FieldValue.serverTimestamp()};try{await S.collection("freshmart").doc("cms_data").collection("salary_advances").doc(a).update(c)}catch{}s.remainingAmount=d,s.status=i?"paid":"active",Array.isArray(s.repayments)||(s.repayments=[]),s.repayments.push(m),A(`Pembayaran kasbon Rp ${x(n)} berhasil dicatat! Sisa: Rp ${x(d)}`,"success");const p=l("cashier-panel-advances");return p&&q(p),!0}catch(c){return console.error("[HR Advances] Gagal mencatat pembayaran:",c),A("Gagal mencatat pembayaran: "+c.message,"error"),!1}finally{O()}},Qe=(a,e)=>{P("menghapus data kasbon")&&ke("Hapus Catatan Kasbon",`Yakin hapus data kasbon "${e}" (#${a})? Tindakan ini tidak dapat dibatalkan.`,async()=>{C("Menghapus catatan kasbon...");try{await S.collection("freshmart").doc("cms_data").collection("salary_advances").doc(a).delete(),R=R.filter(s=>(s.advanceId||s.id)!==a),f.salaryAdvances=R,A(`Catatan kasbon "${e}" berhasil dihapus`,"success");const t=l("cashier-panel-advances");t&&q(t)}catch(t){console.error("[HR Advances] Gagal menghapus kasbon:",t),A("Gagal menghapus: "+t.message,"error")}finally{O()}},"Ya, Hapus",!0)};typeof window<"u"&&(window.loadSalaryAdvances=we,window.renderSalaryAdvancesView=q,window.filterAdvanceStatus=Ge,window.openSalaryAdvanceFormModal=ze,window.closeSalaryAdvanceFormModal=he,window.calculateAdvanceInstallment=Ae,window.onAdvanceEmployeeChange=We,window.saveSalaryAdvance=qe,window.openAdvanceDetailModal=Je,window.closeAdvanceDetailModal=Ve,window.promptManualRepayment=Ye,window.recordAdvanceRepayment=de,window.deleteSalaryAdvance=Qe);let B=new Date().toISOString().split("T")[0],G=[];const ce=[{key:"present",label:"Hadir",badgeClass:"bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-200",icon:"fa-check"},{key:"late",label:"Terlambat",badgeClass:"bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border-amber-200",icon:"fa-clock"},{key:"permit",label:"Izin",badgeClass:"bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 border-blue-200",icon:"fa-envelope-open-text"},{key:"sick",label:"Sakit",badgeClass:"bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300 border-purple-200",icon:"fa-notes-medical"},{key:"alpha",label:"Alpha",badgeClass:"bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 border-rose-200",icon:"fa-xmark"}],te=(a,e)=>`ATT-${a}-${e.replace(/[^a-zA-Z0-9]/g,"")}`,$e=async a=>{try{let e=[];try{e=(await S.collection("freshmart").doc("cms_data").collection("attendances").where("date","==",a).get()).docs.map(s=>({id:s.id,...s.data()}))}catch{e=(Array.isArray(f.attendances)?f.attendances:[]).filter(r=>r.date===a)}return G=e,e}catch(e){return console.error("[HR Attendance] Gagal memuat absensi tanggal:",a,e),G=(Array.isArray(f.attendances)?f.attendances:[]).filter(s=>s.date===a),G}},Y=async a=>{if(!a)return;a.innerHTML=`
    <div class="text-center py-16">
        <i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i>
        <p class="text-xs text-slate-400 mt-2">Memuat lembar presensi tim...</p>
    </div>`,await $e(B);const e=W(),t=new Map;G.forEach(c=>{t.set(c.employeeId||c.employeeUid,c)});let s=0,r=0,n=0,d=0,i=0;e.forEach(c=>{const p=t.get(c.employeeId)||t.get(c.uid),b=p?p.status:"unrecorded";b==="present"?(s++,i+=parseFloat(p.allowanceEarned)||parseFloat(c.dailyAllowance)||0):b==="late"?(r++,i+=parseFloat(p.allowanceEarned)||parseFloat(c.dailyAllowance)||0):b==="permit"||b==="sick"?n++:b==="alpha"&&d++});const m=B===new Date().toISOString().split("T")[0];a.innerHTML=`
    <div class="space-y-4">
        <!-- Date Selector & Quick Controls -->
        <div class="p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div class="flex items-center gap-2 flex-wrap">
                <span class="text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <i class="fa-solid fa-calendar-day text-[var(--color-primary)]"></i> Tanggal Presensi:
                </span>
                <button onclick="window.navigateAttendanceDate(-1)" class="w-8 h-8 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center text-xs active:scale-95 transition-all cursor-pointer">
                    <i class="fa-solid fa-chevron-left"></i>
                </button>
                <input id="att-date-picker" type="date" value="${B}" onchange="window.onAttendanceDateChanged(this.value)"
                    class="border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-1.5 text-xs font-black bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                <button onclick="window.navigateAttendanceDate(1)" class="w-8 h-8 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center text-xs active:scale-95 transition-all cursor-pointer">
                    <i class="fa-solid fa-chevron-right"></i>
                </button>
                ${m?"":`
                <button onclick="window.onAttendanceDateChanged('${new Date().toISOString().split("T")[0]}')"
                    class="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200 transition-all active:scale-95 cursor-pointer">
                    Hari Ini
                </button>`}
            </div>

            <div class="flex items-center gap-2">
                <button onclick="window.bulkMarkAllPresent()"
                    class="px-4 py-2 rounded-xl text-xs font-black text-white shadow-md active:scale-95 transition-all cursor-pointer flex items-center gap-2"
                    style="background: var(--color-primary)">
                    <i class="fa-solid fa-bolt text-xs"></i>
                    <span>Hadirkan Semua Staf</span>
                </button>
            </div>
        </div>

        <!-- Bento Ringkasan Kehadiran Hari Ini -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div class="p-3.5 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 shadow-2xs">
                <span class="text-[10px] font-black uppercase text-emerald-700 dark:text-emerald-300 block mb-1">Hadir Tepat Waktu</span>
                <p class="text-xl font-black text-emerald-800 dark:text-emerald-200">${s} <span class="text-xs font-normal text-emerald-600">Staf</span></p>
                <span class="text-[10px] text-emerald-600 dark:text-emerald-400 mt-0.5 block">Presensi terpenuhi</span>
            </div>
            <div class="p-3.5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 shadow-2xs">
                <span class="text-[10px] font-black uppercase text-amber-700 dark:text-amber-300 block mb-1">Terlambat</span>
                <p class="text-xl font-black text-amber-800 dark:text-amber-200">${r} <span class="text-xs font-normal text-amber-600">Staf</span></p>
                <span class="text-[10px] text-amber-600 dark:text-amber-400 mt-0.5 block">Jam masuk lewat batas</span>
            </div>
            <div class="p-3.5 rounded-2xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/60 shadow-2xs">
                <span class="text-[10px] font-black uppercase text-blue-700 dark:text-blue-300 block mb-1">Izin / Sakit</span>
                <p class="text-xl font-black text-blue-800 dark:text-blue-200">${n} <span class="text-xs font-normal text-blue-600">Staf</span></p>
                <span class="text-[10px] text-blue-600 dark:text-blue-400 mt-0.5 block">Tercatat izin resmi</span>
            </div>
            <div class="p-3.5 rounded-2xl bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800/60 shadow-2xs">
                <span class="text-[10px] font-black uppercase text-rose-700 dark:text-rose-300 block mb-1">Alpha / Belum Tercatat</span>
                <p class="text-xl font-black text-rose-800 dark:text-rose-200">${d+(e.length-s-r-n-d)} <span class="text-xs font-normal text-rose-600">Staf</span></p>
                <span class="text-[10px] text-rose-600 dark:text-rose-400 mt-0.5 block">Uang makan Rp 0</span>
            </div>
        </div>

        <!-- Daftar Kehadiran Staf -->
        <div class="space-y-2.5">
            ${e.map(c=>{const p=t.get(c.employeeId)||t.get(c.uid),b=p?p.status:"present",k=!!p,v=p?.clockIn||"08:00",u=p?.clockOut||"17:00";p?.notes;const w=parseFloat(c.dailyAllowance)||0;return k?parseFloat(p?.allowanceEarned):w>0,`
                <div class="p-4 bg-white dark:bg-slate-800/95 rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:shadow-xs transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-3.5">
                    <div class="flex items-center gap-3.5 min-w-0">
                        <div class="w-11 h-11 rounded-2xl flex items-center justify-center font-black text-xs shrink-0 shadow-2xs border border-[rgba(var(--color-primary-rgb),0.25)]"
                            style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary)">
                            ${(c.name||"ST").trim().split(/\s+/).slice(0,2).map(h=>h[0]).join("").toUpperCase()}
                        </div>
                        <div class="min-w-0 flex-1">
                            <div class="flex items-center gap-2 flex-wrap">
                                <span class="text-sm font-black text-slate-900 dark:text-white truncate">${o(c.name)}</span>
                                <span class="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                                    ${o(c.employeeId)}
                                </span>
                                ${k?`
                                    <span class="text-[9px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                                        <i class="fa-solid fa-circle-check"></i> Tersimpan
                                    </span>
                                `:`
                                    <span class="text-[9px] font-bold text-amber-500 flex items-center gap-1">
                                        <i class="fa-solid fa-clock"></i> Belum Disimpan
                                    </span>
                                `}
                            </div>
                            <div class="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-0.5 flex-wrap">
                                <span class="font-semibold text-slate-700 dark:text-slate-300">${o(c.position)}</span>
                                <span>•</span>
                                <span>Uang Makan Harian: <strong class="text-emerald-600 dark:text-emerald-400">${x(w)}</strong></span>
                                ${p?.source==="pos_shift"?'<span>•</span><span class="text-[10px] text-blue-500 font-bold"><i class="fa-solid fa-cash-register mr-1"></i>Otomatis Buka Shift</span>':""}
                            </div>
                        </div>
                    </div>

                    <!-- Status Selector Buttons & Jam Kerja -->
                    <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0">
                        <!-- Status Chips -->
                        <div class="grid grid-cols-5 gap-1 p-1 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-700/80">
                            ${ce.map(h=>`
                                <button type="button" onclick="window.setQuickAttendanceStatus('${o(c.employeeId)}', '${h.key}')"
                                    id="btn-att-status-${o(c.employeeId)}-${h.key}"
                                    class="att-status-btn-${o(c.employeeId)} px-2 py-1.5 rounded-xl text-[10px] font-black transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-1 ${b===h.key?"bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-2xs border border-slate-300 dark:border-slate-600":"text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"}">
                                    <i class="fa-solid ${h.icon} text-[9px]"></i>
                                    <span>${h.label}</span>
                                </button>
                            `).join("")}
                        </div>

                        <!-- Jam Masuk & Keluar -->
                        <div class="flex items-center gap-1 text-xs">
                            <input id="att-in-${o(c.employeeId)}" type="time" value="${v}" title="Jam Masuk"
                                class="w-20 px-2 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-[11px] font-mono text-center">
                            <span class="text-slate-400">-</span>
                            <input id="att-out-${o(c.employeeId)}" type="time" value="${u}" title="Jam Pulang"
                                class="w-20 px-2 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-[11px] font-mono text-center">
                        </div>

                        <!-- Tombol Simpan Row -->
                        <button onclick="window.saveSingleAttendance('${o(c.employeeId)}', '${o(c.uid||c.employeeId)}', '${o(c.name)}', '${o(c.position)}', '${o(c.role)}', ${w})"
                            id="btn-save-att-${o(c.employeeId)}"
                            class="px-3 py-1.5 rounded-xl text-xs font-black text-white transition-all active:scale-95 cursor-pointer shadow-2xs flex items-center justify-center gap-1.5 hover:opacity-95"
                            style="background: var(--color-primary)">
                            <i class="fa-solid fa-floppy-disk text-[10px]"></i>
                            <span>Simpan</span>
                        </button>
                    </div>
                </div>`}).join("")}
        </div>
    </div>`},Ze=a=>{const e=new Date(B);e.setDate(e.getDate()+a),B=e.toISOString().split("T")[0];const t=l("cashier-panel-attendance");t&&Y(t)},Xe=a=>{B=a;const e=l("cashier-panel-attendance");e&&Y(e)},ea=(a,e)=>{document.querySelectorAll(`.att-status-btn-${a}`).forEach(s=>{s.className=`att-status-btn-${a} px-2 py-1.5 rounded-xl text-[10px] font-black transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200`});const t=l(`btn-att-status-${a}-${e}`);t&&(t.className=`att-status-btn-${a} px-2 py-1.5 rounded-xl text-[10px] font-black transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-1 bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-2xs border border-slate-300 dark:border-slate-600`),t?.setAttribute("data-selected-status",e)},aa=async(a,e,t,s,r,n)=>{if(!P("mencatat absensi karyawan"))return;let d="present";ce.forEach(v=>{const u=l(`btn-att-status-${a}-${v.key}`);u&&(u.classList.contains("bg-white")||u.classList.contains("dark:bg-slate-800"))&&(d=v.key)});const i=l(`att-in-${a}`)?.value||"08:00",m=l(`att-out-${a}`)?.value||"17:00",c=d==="present"||d==="late"?n:0,p=te(B,a),b={attendanceId:p,date:B,employeeUid:e,employeeId:a,employeeName:t,position:s,role:r,status:d,clockIn:i,clockOut:m,allowanceEarned:c,notes:"",source:"manual",updatedAt:j.firestore.FieldValue.serverTimestamp(),recordedBy:J.currentUser?.uid||"owner"},k=l(`btn-save-att-${a}`);k&&(k.disabled=!0,k.innerHTML='<i class="fa-solid fa-spinner fa-spin text-[10px]"></i>');try{await S.collection("freshmart").doc("cms_data").collection("attendances").doc(p).set(b,{merge:!0});const v=G.findIndex(w=>w.attendanceId===p);v>-1?G[v]={id:p,...b}:G.push({id:p,...b}),Array.isArray(f.attendances)||(f.attendances=[]);const u=f.attendances.findIndex(w=>w.attendanceId===p);u>-1?f.attendances[u]={id:p,...b}:f.attendances.push({id:p,...b}),A(`Presensi ${t} (${d.toUpperCase()}) tersimpan!`,"success"),k&&(k.disabled=!1,k.innerHTML='<i class="fa-solid fa-check text-[10px]"></i><span>Tersimpan</span>')}catch(v){console.error("[HR Attendance] Gagal menyimpan presensi:",v),A("Gagal menyimpan presensi: "+v.message,"error"),k&&(k.disabled=!1,k.innerHTML='<i class="fa-solid fa-floppy-disk text-[10px]"></i><span>Simpan</span>')}},ta=async()=>{if(!P("mencatat presensi massal"))return;const a=W();if(a.length!==0){C("Mencatat kehadiran seluruh staf...");try{const e=S.batch(),t=[];for(const r of a){const n=r.employeeId||"EMP-001",d=te(B,n),i=parseFloat(r.dailyAllowance)||0,m={attendanceId:d,date:B,employeeUid:r.uid||n,employeeId:n,employeeName:r.name||"Karyawan",position:r.position||"Staf Toko",role:r.role||"staff",status:"present",clockIn:"08:00",clockOut:"17:00",allowanceEarned:i,notes:"Hadir massal 1-klik",source:"bulk",updatedAt:j.firestore.FieldValue.serverTimestamp(),recordedBy:J.currentUser?.uid||"owner"},c=S.collection("freshmart").doc("cms_data").collection("attendances").doc(d);e.set(c,m,{merge:!0}),t.push({id:d,...m})}await e.commit(),G=t,Array.isArray(f.attendances)||(f.attendances=[]),t.forEach(r=>{const n=f.attendances.findIndex(d=>d.attendanceId===r.attendanceId);n>-1?f.attendances[n]=r:f.attendances.push(r)}),A(`Presensi seluruh ${a.length} staf berhasil dicatat sebagai HADIR!`,"success");const s=l("cashier-panel-attendance");s&&Y(s)}catch(e){console.error("[HR Attendance] Gagal presensi massal:",e),A("Gagal presensi massal: "+e.message,"error")}finally{O()}}},sa=async(a,e)=>{try{if(!a)return;const t=new Date().toISOString().split("T")[0],s=a.employeeId||"EMP-001",r=te(t,s),n=String(e?.getHours?e.getHours():new Date().getHours()).padStart(2,"0"),d=String(e?.getMinutes?e.getMinutes():new Date().getMinutes()).padStart(2,"0"),i=`${n}:${d}`,m=S.collection("freshmart").doc("cms_data").collection("attendances").doc(r);if((await m.get()).exists)return;const p=parseFloat(a.dailyAllowance)||2e4,b={attendanceId:r,date:t,employeeUid:a.uid||s,employeeId:s,employeeName:a.name||"Kasir POS",position:a.position||"Kasir POS",role:a.role||"cashier",status:"present",clockIn:i,clockOut:"17:00",allowanceEarned:p,notes:"Absensi otomatis dari Buka Shift Kasir",source:"pos_shift",createdAt:j.firestore.FieldValue.serverTimestamp()};await m.set(b),console.log("[HR Attendance] Presensi kasir tercatat otomatis dari shift:",s,i)}catch(t){console.warn("[HR Attendance] Gagal auto-record shift attendance:",t.message)}},Se=(a=[],e,t)=>{const s=a.filter(p=>{const b=p.date&&p.date.startsWith(e),k=t?p.employeeId===t||p.employeeUid===t:!0;return b&&k});let r=0,n=0,d=0,i=0,m=0,c=0;return s.forEach(p=>{p.status==="present"?(r++,c+=parseFloat(p.allowanceEarned)||0):p.status==="late"?(n++,c+=parseFloat(p.allowanceEarned)||0):p.status==="permit"?d++:p.status==="sick"?i++:p.status==="alpha"&&m++}),{totalRecords:s.length,presentDays:r,lateDays:n,permitDays:d,sickDays:i,alphaDays:m,totalAllowance:c}};typeof window<"u"&&(window.ATTENDANCE_STATUSES=ce,window.generateAttendanceId=te,window.loadAttendancesForDate=$e,window.renderAttendanceView=Y,window.navigateAttendanceDate=Ze,window.onAttendanceDateChanged=Xe,window.setQuickAttendanceStatus=ea,window.saveSingleAttendance=aa,window.bulkMarkAllPresent=ta,window.autoRecordCashierShiftAttendance=sa,window.calculateMonthlyAttendanceSummary=Se);let D=new Date().toISOString().slice(0,7),F=[],se=null;const ra=async()=>{try{if(typeof window<"u"&&typeof window.saveApp=="function")return await window.saveApp();const a=await ve(()=>import("./module-pos-Cgn74Y4K.js").then(e=>e.W),__vite__mapDeps([0,1,2,3,4,5]));if(typeof a?.saveApp=="function")return await a.saveApp()}catch{}},pe=(a,e)=>{const t=(a||new Date().toISOString().slice(0,7)).replace(/[^0-9]/g,""),s=(e||"STAFF").replace(/[^a-zA-Z0-9]/g,"");return`PAY-${t}-${s}`},_=a=>{if(!a)return"-";const[e,t]=a.split("-"),s=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],r=parseInt(t,10)-1;return`${s[r]||t} ${e}`},Pe=async(a=D)=>{try{let e=[];try{e=(await S.collection("freshmart").doc("cms_data").collection("salary_payrolls").where("period","==",a).get()).docs.map(s=>({id:s.id,...s.data()}))}catch{e=(Array.isArray(f.payrollRuns)?f.payrollRuns:[]).filter(r=>r.period===a)}return F=e,e}catch(e){return console.error("[HR Payroll] Gagal memuat payroll:",e),F=(Array.isArray(f.payrollRuns)?f.payrollRuns:[]).filter(s=>s.period===a),F}},re=(a,e,t=[],s=[])=>{const r=a.employeeId||a.uid,n=parseFloat(a.baseSalary)||0,d=parseFloat(a.dailyAllowance)||0,i=Se(t,e,r),m=i.presentDays||0,c=i.lateDays||0,p=m+c;let b=i.totalAllowance;b<=0&&d>0&&p>0&&(b=p*d);const k=s.find(T=>(T.employeeId===r||T.employeeUid===a.uid)&&T.status==="active"&&parseFloat(T.remainingAmount)>0);let v=0,u="",w=0;if(k){u=k.advanceId||k.id,w=parseFloat(k.remainingAmount)||0;const T=parseFloat(k.monthlyInstallment)||w;v=Math.min(w,T)}const $=0,h=0,y=0,N=0,H=n+b+$+h,M=v+y+N,I=Math.max(0,H-M);return{payrollId:pe(e,r),period:e,periodLabel:_(e),employeeUid:a.uid||"",employeeId:r,employeeName:a.name||"Karyawan",employeeRole:a.role||"staff",position:a.position||"Staf Toko",phone:a.phone||"",status:"draft",baseSalary:n,dailyAllowanceRate:d,presentDays:m,lateDays:c,permitDays:i.permitDays||0,sickDays:i.sickDays||0,alphaDays:i.alphaDays||0,totalAttendanceDays:p,attendanceAllowance:b,bonus:$,overtimePay:h,totalEarnings:H,advanceDeduction:v,advanceId:u,advanceRemainingBefore:w,lostItemDeduction:y,lostItemNotes:"",otherDeductions:N,totalDeductions:M,netSalary:I,paymentMethod:a.paymentMethod||"transfer",bankName:a.bankName||"BCA",bankAccount:a.bankAccount||"-",notes:`Gaji periode ${_(e)}`,createdAt:new Date().toISOString()}},Q=async a=>{if(!a)return;a.innerHTML=`
    <div class="text-center py-16">
        <i class="fa-solid fa-spinner fa-spin text-3xl" style="color: var(--color-primary)"></i>
        <p class="text-xs text-slate-400 mt-2 font-medium">Memuat data payroll &amp; rekap kehadiran tim...</p>
    </div>`,await Pe(D);const e=Array.isArray(f.attendances)?f.attendances:[],t=Array.isArray(f.salaryAdvances)?f.salaryAdvances:[],s=W(),r=s.map(b=>{const k=b.employeeId||b.uid,v=F.find(u=>u.employeeId===k||u.employeeUid===b.uid);return v||re(b,D,e,t)}),n=r.reduce((b,k)=>b+(parseFloat(k.netSalary)||0),0),d=r.filter(b=>b.status==="paid").length,i=r.length-d,m=r.reduce((b,k)=>b+(parseFloat(k.advanceDeduction)||0),0),c=r.reduce((b,k)=>b+(parseFloat(k.lostItemDeduction)||0),0),p=_(D);a.innerHTML=`
    <div class="space-y-4">
        <!-- Header & Navigasi Periode Bulan Penggajian -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
            <div>
                <h2 class="text-base font-black text-slate-900 dark:text-white flex items-center gap-2.5">
                    <span class="w-8 h-8 rounded-xl flex items-center justify-center text-xs shrink-0 shadow-2xs text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.2)]" style="background: rgba(var(--color-primary-rgb), 0.08)">
                        <i class="fa-solid fa-money-check-dollar"></i>
                    </span>
                    <span>Penggajian (Payroll) &amp; Slip Gaji</span>
                </h2>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Kelola gaji pokok, tunjangan absensi, potongan kasbon &amp; selisih stok barang hilang
                </p>
            </div>

            <!-- Periode Selector -->
            <div class="flex items-center gap-2 bg-white dark:bg-slate-800 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-2xs shrink-0">
                <button onclick="window.navigatePayrollPeriod(-1)"
                    title="Bulan Sebelumnya"
                    class="w-8 h-8 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 active:scale-95 transition-all cursor-pointer">
                    <i class="fa-solid fa-chevron-left text-xs"></i>
                </button>
                <input type="month" id="payroll-period-picker" value="${D}"
                    onchange="window.onPayrollPeriodChanged(this.value)"
                    class="px-2 py-1 bg-transparent text-xs font-black text-slate-800 dark:text-white border-0 focus:outline-none cursor-pointer">
                <button onclick="window.navigatePayrollPeriod(1)"
                    title="Bulan Berikutnya"
                    class="w-8 h-8 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 active:scale-95 transition-all cursor-pointer">
                    <i class="fa-solid fa-chevron-right text-xs"></i>
                </button>
            </div>
        </div>

        <!-- Bento Metrik Ringkasan Penggajian -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs">
                <div class="flex items-center justify-between text-slate-400 mb-1">
                    <span class="text-[11px] font-bold">Total Gaji (${p})</span>
                    <i class="fa-solid fa-sack-dollar text-emerald-500 text-xs"></i>
                </div>
                <div class="text-sm sm:text-base font-black text-emerald-600 dark:text-emerald-400 font-mono truncate">
                    Rp ${x(n)}
                </div>
                <div class="text-[10px] text-slate-400 mt-0.5">${s.length} Karyawan (Termasuk Owner)</div>
            </div>

            <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs">
                <div class="flex items-center justify-between text-slate-400 mb-1">
                    <span class="text-[11px] font-bold">Status Pembayaran</span>
                    <i class="fa-solid fa-circle-check text-blue-500 text-xs"></i>
                </div>
                <div class="text-sm sm:text-base font-black text-slate-800 dark:text-white font-mono">
                    <span class="text-emerald-600">${d} Lunas</span> / <span class="text-amber-500">${i} Draf</span>
                </div>
                <div class="text-[10px] text-slate-400 mt-0.5">${i===0?"Semua gaji lunas":"Menunggu pencairan"}</div>
            </div>

            <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs">
                <div class="flex items-center justify-between text-slate-400 mb-1">
                    <span class="text-[11px] font-bold">Potongan Kasbon</span>
                    <i class="fa-solid fa-hand-holding-dollar text-xs" style="color: var(--color-primary)"></i>
                </div>
                <div class="text-sm sm:text-base font-black text-[var(--color-primary)] font-mono truncate">
                    Rp ${x(m)}
                </div>
                <div class="text-[10px] text-slate-400 mt-0.5">Otomatis potong saldo pinjaman</div>
            </div>

            <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs">
                <div class="flex items-center justify-between text-slate-400 mb-1">
                    <span class="text-[11px] font-bold">Potongan Barang Hilang</span>
                    <i class="fa-solid fa-boxes-packing text-rose-500 text-xs"></i>
                </div>
                <div class="text-sm sm:text-base font-black text-rose-600 dark:text-rose-400 font-mono truncate">
                    Rp ${x(c)}
                </div>
                <div class="text-[10px] text-slate-400 mt-0.5">Kompensasi selisih stock opname</div>
            </div>
        </div>

        <!-- Daftar Kartu Payroll Karyawan -->
        <div class="space-y-3" id="payroll-items-container">
            ${r.map((b,k)=>{const v=b.status==="paid",u=b.employeeRole==="owner"||b.employeeId==="OWN-001";return`
                <div class="p-4 rounded-2xl bg-white dark:bg-slate-800 border ${v?"border-emerald-200 dark:border-emerald-800/60":"border-slate-200/90 dark:border-slate-700"} shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all">
                    <!-- Info Karyawan -->
                    <div class="flex items-start gap-3.5 min-w-0 flex-1">
                        <div class="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm shrink-0 shadow-2xs border ${u?"text-[var(--color-primary)] border-[rgba(var(--color-primary-rgb),0.3)]":"bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-900/60 dark:text-slate-200 dark:border-slate-700"}"
                            style="${u?"background: rgba(var(--color-primary-rgb), 0.12)":""}">
                            ${u?'<i class="fa-solid fa-crown text-amber-500"></i>':b.employeeName?.charAt(0)?.toUpperCase()||"K"}
                        </div>
                        <div class="min-w-0 flex-1">
                            <div class="flex items-center gap-2 flex-wrap">
                                <span class="text-sm font-black text-slate-900 dark:text-white truncate">${o(b.employeeName)}</span>
                                <span class="font-mono text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                                    ${o(b.employeeId)}
                                </span>
                                <span class="inline-flex items-center gap-1 text-[10px] font-black px-2 py-0.5 rounded-full ${v?"bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300":"bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border border-amber-300"}">
                                    <i class="fa-solid ${v?"fa-circle-check text-emerald-500":"fa-clock text-amber-500"} text-[9px]"></i>
                                    ${v?"Lunas / Dibayar":"Draf Penggajian"}
                                </span>
                            </div>
                            <div class="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-1 flex-wrap">
                                <span class="font-bold text-slate-700 dark:text-slate-200">${o(b.position)}</span>
                                <span>•</span>
                                <span>Absensi: <strong>${b.totalAttendanceDays||0} Hari Masuk</strong></span>
                                <span>•</span>
                                <span>Gaji Pokok: <strong>Rp ${x(b.baseSalary)}</strong></span>
                                ${b.attendanceAllowance>0?`<span>•</span><span>Tunjangan: <strong class="text-[var(--color-primary)] font-bold">+${x(b.attendanceAllowance)}</strong></span>`:""}
                            </div>
                            <!-- Rincian Potongan -->
                            <div class="flex items-center gap-2 text-[11px] text-slate-400 dark:text-slate-500 mt-1.5 flex-wrap">
                                ${b.advanceDeduction>0?`<span class="text-[var(--color-primary)] font-bold"><i class="fa-solid fa-hand-holding-dollar mr-0.5"></i> Potong Kasbon: -${x(b.advanceDeduction)}</span><span>•</span>`:""}
                                ${b.lostItemDeduction>0?`<span class="text-rose-500 font-medium"><i class="fa-solid fa-triangle-exclamation mr-0.5"></i> Potong Hilang: -${x(b.lostItemDeduction)}</span><span>•</span>`:""}
                                <span>Metode: <strong class="text-slate-600 dark:text-slate-300">${o(b.paymentMethod?.toUpperCase())}</strong></span>
                                ${b.bankAccount&&b.bankAccount!=="-"?`<span>(${o(b.bankName)}: ${o(b.bankAccount)})</span>`:""}
                            </div>
                        </div>
                    </div>

                    <!-- Nominal Take Home Pay & Tombol Aksi -->
                    <div class="flex items-center justify-between md:justify-end gap-3 shrink-0 border-t md:border-t-0 pt-3 md:pt-0 border-slate-100 dark:border-slate-700/60">
                        <div class="text-left md:text-right">
                            <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Take Home Pay</span>
                            <span class="text-base sm:text-lg font-black text-emerald-600 dark:text-emerald-400 font-mono">
                                Rp ${x(b.netSalary)}
                            </span>
                        </div>
                        <div class="flex items-center gap-2">
                            <button onclick="window.openPayslipPreviewModal('${o(b.payrollId||b.id)}', '${o(b.employeeId)}')"
                                title="Lihat & Cetak Slip Gaji"
                                class="px-3.5 py-2.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 transition-all active:scale-95 cursor-pointer shadow-2xs flex items-center gap-1.5">
                                <i class="fa-solid fa-receipt" style="color: var(--color-primary)"></i>
                                <span>Slip Gaji</span>
                            </button>
                            <button onclick="window.openPayrollItemModal('${o(b.employeeId)}', '${D}')"
                                title="${v?"Ubah Rincian Kompensasi":"Hitung & Bayar Gaji"}"
                                class="px-3.5 py-2.5 rounded-xl text-xs font-black text-white transition-all active:scale-95 cursor-pointer shadow-md flex items-center gap-1.5"
                                style="background: ${v?"var(--color-primary)":"linear-gradient(135deg, #10b981 0%, #059669 100%)"}">
                                <i class="fa-solid ${v?"fa-pen-to-square":"fa-cash-register"}"></i>
                                <span>${v?"Edit":"Bayar"}</span>
                            </button>
                        </div>
                    </div>
                </div>`}).join("")}
        </div>
    </div>`},oa=a=>{const[e,t]=D.split("-");let s=parseInt(e,10),r=parseInt(t,10)+a;r<1?(r=12,s-=1):r>12&&(r=1,s+=1),D=`${s}-${String(r).padStart(2,"0")}`;const n=l("payroll-period-picker");n&&(n.value=D);const d=l("cashier-panel-payroll");d&&Q(d)},la=a=>{if(!a)return;D=a;const e=l("cashier-panel-payroll");e&&Q(e)},na=async(a,e=D)=>{if(!P("mengelola penggajian karyawan"))return;const s=W().find(p=>p.employeeId===a||p.uid===a);if(!s){A("Karyawan tidak ditemukan","warning");return}const r=Array.isArray(f.attendances)?f.attendances:[],n=Array.isArray(f.salaryAdvances)?f.salaryAdvances:[],i=F.find(p=>(p.employeeId===a||p.employeeUid===s.uid)&&p.period===e)||re(s,e,r,n),m=l("modal-payroll-item-form");m&&m.remove();const c=_(e);document.body.insertAdjacentHTML("beforeend",`
    <div id="modal-payroll-item-form" class="fixed inset-0 z-[9990] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/75"
        onclick="if(event.target===this) window.closePayrollItemModal()">
        <div class="bg-white dark:bg-slate-900 rounded-t-[2rem] sm:rounded-3xl shadow-2xl w-full max-w-xl flex flex-col max-h-[92vh] sm:max-h-[90vh] overflow-hidden scale-95 transition-transform duration-300 border border-slate-200 dark:border-slate-800" id="payroll-item-modal-box">
            <!-- Mobile Drag Handle -->
            <div class="sm:hidden flex justify-center pt-3 pb-1 cursor-grab">
                <div class="w-10 h-1 rounded-full bg-slate-300 dark:bg-slate-700"></div>
            </div>

            <!-- Modal Header -->
            <div class="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0"
                style="background: linear-gradient(135deg, rgba(var(--color-primary-rgb), 0.08) 0%, rgba(var(--color-primary-rgb), 0.02) 100%)">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-sm"
                        style="background: var(--color-primary)">
                        <i class="fa-solid fa-calculator text-base"></i>
                    </div>
                    <div>
                        <h3 class="font-black text-sm sm:text-base text-slate-800 dark:text-white">
                            Hitung Kompensasi Gaji
                        </h3>
                        <p class="text-xs text-slate-500 dark:text-slate-400">
                            ${o(s.name)} • ${o(s.position)} • Periode ${o(c)}
                        </p>
                    </div>
                </div>
                <button onclick="window.closePayrollItemModal()" 
                    class="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer">
                    <i class="fa-solid fa-xmark text-sm"></i>
                </button>
            </div>

            <!-- Modal Body Scrollable -->
            <div class="p-4 sm:p-6 overflow-y-auto space-y-4 flex-1 custom-scrollbar text-xs">
                <!-- Info Status Presensi Bulan Berjalan -->
                <div class="p-3.5 rounded-2xl border flex items-center justify-between gap-3 flex-wrap"
                    style="background: rgba(var(--color-primary-rgb), 0.05); border-color: rgba(var(--color-primary-rgb), 0.18)">
                    <div>
                        <span class="font-black text-slate-900 dark:text-white block">Presensi Kehadiran (${c}):</span>
                        <span class="text-slate-600 dark:text-slate-300 text-[11px]">
                            Hadir: <strong>${i.presentDays}</strong> • Terlambat: <strong>${i.lateDays}</strong> • Izin: <strong>${i.permitDays}</strong> • Sakit: <strong>${i.sickDays}</strong> • Alpha: <strong>${i.alphaDays}</strong>
                        </span>
                    </div>
                    <span class="font-mono font-bold text-xs px-2.5 py-1 rounded-xl bg-white dark:bg-slate-800 border"
                        style="background: rgba(var(--color-primary-rgb), 0.1); border-color: rgba(var(--color-primary-rgb), 0.25); color: var(--color-primary)">
                        Total Masuk: ${i.totalAttendanceDays} Hari
                    </span>
                </div>

                <!-- Bagian 1: Komponen Penghasilan (+) -->
                <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
                    <h4 class="font-black text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                        <i class="fa-solid fa-plus-circle"></i> Komponen Penghasilan (+)
                    </h4>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                            <label class="font-bold text-slate-700 dark:text-slate-300 block mb-1">Gaji Pokok (Rp)</label>
                            <input type="number" id="pay-base-salary" value="${i.baseSalary}" min="0" step="50000"
                                oninput="window.recalculatePayrollItem()"
                                class="w-full min-h-[44px] text-[16px] sm:text-sm px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white font-mono font-bold focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] shadow-inner">
                        </div>
                        <div>
                            <label class="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                                Tunjangan Harian / Uang Makan (Rp)
                            </label>
                            <input type="number" id="pay-attendance-allowance" value="${i.attendanceAllowance}" min="0" step="5000"
                                oninput="window.recalculatePayrollItem()"
                                class="w-full min-h-[44px] text-[16px] sm:text-sm px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white font-mono font-bold focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] shadow-inner">
                            <span class="text-[10px] text-slate-400 mt-0.5 block">Hitungan otomatis: ${i.totalAttendanceDays} hari x ${x(i.dailyAllowanceRate)}</span>
                        </div>
                        <div>
                            <label class="font-bold text-slate-700 dark:text-slate-300 block mb-1">Bonus Kinerja / Insentif Toko (Rp)</label>
                            <input type="number" id="pay-bonus" value="${i.bonus||0}" min="0" step="25000"
                                oninput="window.recalculatePayrollItem()"
                                placeholder="0"
                                class="w-full min-h-[44px] text-[16px] sm:text-sm px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white font-mono font-bold focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] shadow-inner">
                        </div>
                        <div>
                            <label class="font-bold text-slate-700 dark:text-slate-300 block mb-1">Uang Lembur / Tambahan (Rp)</label>
                            <input type="number" id="pay-overtime" value="${i.overtimePay||0}" min="0" step="25000"
                                oninput="window.recalculatePayrollItem()"
                                placeholder="0"
                                class="w-full min-h-[44px] text-[16px] sm:text-sm px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white font-mono font-bold focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] shadow-inner">
                        </div>
                    </div>
                </div>

                <!-- Bagian 2: Komponen Potongan (-) -->
                <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
                    <h4 class="font-black text-rose-500 dark:text-rose-400 flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                        <i class="fa-solid fa-minus-circle"></i> Komponen Pemotongan (-)
                    </h4>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                            <label class="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                                Potongan Kasbon Berjalan (Rp)
                            </label>
                            <input type="number" id="pay-advance-deduction" value="${i.advanceDeduction||0}" min="0" step="10000"
                                oninput="window.recalculatePayrollItem()"
                                class="w-full min-h-[44px] text-[16px] sm:text-sm px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white font-mono font-bold focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] shadow-inner">
                            ${i.advanceId?`
                                <span class="text-[10px] text-[var(--color-primary)] mt-0.5 block font-medium">
                                    Terkoneksi #${i.advanceId} (Sisa saldo kasbon: Rp ${x(i.advanceRemainingBefore)})
                                </span>
                            `:'<span class="text-[10px] text-slate-400 mt-0.5 block">Tidak ada kasbon aktif</span>'}
                        </div>
                        <div>
                            <label class="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                                Potongan Selisih Barang Hilang / Stock Opname (Rp)
                            </label>
                            <input type="number" id="pay-lost-item-deduction" value="${i.lostItemDeduction||0}" min="0" step="5000"
                                oninput="window.recalculatePayrollItem()"
                                placeholder="0"
                                class="w-full min-h-[44px] text-[16px] sm:text-sm px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white font-mono font-bold focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] shadow-inner">
                            <span class="text-[10px] text-slate-400 mt-0.5 block">Disesuaikan jabatan &amp; tanggung jawab staf</span>
                        </div>
                    </div>

                    <div>
                        <label class="font-bold text-slate-700 dark:text-slate-300 block mb-1">Keterangan Pemotongan Barang Hilang / Catatan</label>
                        <input type="text" id="pay-lost-item-notes" value="${o(i.lostItemNotes||"")}"
                            placeholder="Contoh: Selisih opname toko 1 sak semen & 2 kran air"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] shadow-inner">
                    </div>
                </div>

                <!-- Bagian 3: Ringkasan Kalkulasi Take Home Pay -->
                <div class="p-4 rounded-2xl border border-emerald-200 dark:border-emerald-800/80 bg-gradient-to-br from-emerald-500/10 via-slate-50 to-white dark:from-emerald-950/40 dark:via-slate-800 dark:to-slate-800 space-y-2">
                    <div class="flex items-center justify-between text-slate-600 dark:text-slate-300 text-xs">
                        <span>Total Penghasilan Bruto:</span>
                        <strong class="font-mono text-emerald-600 dark:text-emerald-400" id="pay-total-earnings-display">
                            Rp ${x(i.totalEarnings)}
                        </strong>
                    </div>
                    <div class="flex items-center justify-between text-slate-600 dark:text-slate-300 text-xs">
                        <span>Total Potongan:</span>
                        <strong class="font-mono text-rose-500 dark:text-rose-400" id="pay-total-deductions-display">
                            -Rp ${x(i.totalDeductions)}
                        </strong>
                    </div>
                    <div class="border-t border-slate-200 dark:border-slate-700 pt-2 flex items-center justify-between">
                        <span class="font-black text-slate-900 dark:text-white text-sm">Gaji Bersih (Take Home Pay):</span>
                        <span class="font-black text-lg sm:text-xl font-mono text-emerald-600 dark:text-emerald-400" id="pay-net-salary-display">
                            Rp ${x(i.netSalary)}
                        </span>
                    </div>
                </div>

                <!-- Bagian 4: Pengaturan Pembayaran -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                        <label class="font-bold text-slate-700 dark:text-slate-300 block mb-1">Metode Pembayaran</label>
                        <select id="pay-payment-method"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white font-bold focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] shadow-inner">
                            <option value="transfer" ${i.paymentMethod==="transfer"?"selected":""}>Transfer Bank / Rekening</option>
                            <option value="cash" ${i.paymentMethod==="cash"?"selected":""}>Tunai Langsung (Kas Toko)</option>
                        </select>
                    </div>
                    <div>
                        <label class="font-bold text-slate-700 dark:text-slate-300 block mb-1">Rekening Karyawan</label>
                        <input type="text" id="pay-bank-account" value="${o(i.bankAccount!=="-"?`${i.bankName}: ${i.bankAccount}`:"Tunai / Kas Toko")}"
                            readonly
                            class="w-full min-h-[44px] text-[16px] sm:text-sm px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-500 font-mono">
                    </div>
                </div>

                <!-- Opsi Integrasi Buku Kas Toko -->
                <div class="p-3.5 rounded-2xl border" style="background: rgba(var(--color-primary-rgb), 0.05); border-color: rgba(var(--color-primary-rgb), 0.2)">
                    <label class="flex items-start gap-2.5 cursor-pointer">
                        <input type="checkbox" id="pay-sync-expense" checked
                            class="w-4 h-4 mt-0.5 rounded border-slate-300 text-[var(--color-primary)] focus:ring-[var(--color-primary)]/30 cursor-pointer">
                        <div class="text-xs">
                            <strong class="text-slate-900 dark:text-white block font-black">Catat otomatis ke Buku Kas Beban Operasional Toko:</strong>
                            <p class="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
                                Memasukkan pengeluaran gaji ini ke kategori <em>'gaji'</em> di buku kas pengeluaran toko sehingga neraca laba rugi terpotong secara riil.
                            </p>
                        </div>
                    </label>
                </div>
            </div>

            <!-- Modal Footer Buttons -->
            <div class="p-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3 shrink-0 bg-slate-50/70 dark:bg-slate-800/40 pb-[max(1rem,env(safe-area-inset-bottom))]">
                <button onclick="window.closePayrollItemModal()" 
                    class="min-h-[44px] px-5 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-slate-100 active:scale-95 transition-all cursor-pointer">
                    Batal
                </button>
                <div class="flex items-center gap-2">
                    <button onclick="window.savePayrollItem('${o(s.employeeId||s.uid)}', '${e}', 'draft')"
                        class="min-h-[44px] px-5 py-2.5 rounded-2xl border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 font-bold text-sm hover:bg-slate-100 active:scale-95 transition-all cursor-pointer">
                        Simpan Draf
                    </button>
                    <button onclick="window.savePayrollItem('${o(s.employeeId||s.uid)}', '${e}', 'paid')"
                        class="min-h-[44px] px-6 py-2.5 rounded-2xl text-white font-black text-sm shadow-md active:scale-95 transition-all cursor-pointer flex items-center gap-2"
                        style="background: linear-gradient(135deg, #10b981 0%, #059669 100%);">
                        <i class="fa-solid fa-check"></i>
                        <span>Bayar &amp; Terbitkan Slip</span>
                    </button>
                </div>
            </div>
        </div>
    </div>`),typeof window.pushModalHistory=="function"&&window.pushModalHistory("payrollItemForm"),setTimeout(()=>{const p=l("payroll-item-modal-box");p&&p.classList.remove("scale-95")},10)},Me=(a=!1)=>{const e=()=>{const t=l("modal-payroll-item-form");t&&(t.style.opacity="0",setTimeout(()=>t.remove(),200))};typeof window.requestCloseModal=="function"?window.requestCloseModal("payrollItemForm",a,e):e()},ia=()=>{const a=parseFloat(l("pay-base-salary")?.value)||0,e=parseFloat(l("pay-attendance-allowance")?.value)||0,t=parseFloat(l("pay-bonus")?.value)||0,s=parseFloat(l("pay-overtime")?.value)||0,r=parseFloat(l("pay-advance-deduction")?.value)||0,n=parseFloat(l("pay-lost-item-deduction")?.value)||0,d=a+e+t+s,i=r+n,m=Math.max(0,d-i),c=l("pay-total-earnings-display"),p=l("pay-total-deductions-display"),b=l("pay-net-salary-display");c&&(c.textContent=`Rp ${x(d)}`),p&&(p.textContent=`-Rp ${x(i)}`),b&&(b.textContent=`Rp ${x(m)}`)},da=async(a,e,t="paid")=>{if(!P("menyimpan data payroll karyawan"))return;const r=W().find(y=>y.employeeId===a||y.uid===a);if(!r)return;const n=parseFloat(l("pay-base-salary")?.value)||0,d=parseFloat(l("pay-attendance-allowance")?.value)||0,i=parseFloat(l("pay-bonus")?.value)||0,m=parseFloat(l("pay-overtime")?.value)||0,c=parseFloat(l("pay-advance-deduction")?.value)||0,p=parseFloat(l("pay-lost-item-deduction")?.value)||0,b=l("pay-lost-item-notes")?.value?.trim()||"",k=l("pay-payment-method")?.value||"transfer",v=l("pay-sync-expense")?.checked!==!1,u=n+d+i+m,w=c+p,$=Math.max(0,u-w),h=pe(e,a);C(t==="paid"?"Memproses pembayaran gaji...":"Menyimpan draf payroll...");try{let y=null;if(t==="paid"&&v&&$>0){y="exp_pay_"+Date.now();const I={id:y,date:new Date().toISOString().split("T")[0],category:"gaji",amount:$,desc:`Gaji Karyawan: ${r.name} (${r.position}) - Periode ${_(e)}`,source:k==="cash"?"cash":"bank",recipient:r.name,receiptUrl:"",payrollId:h,createdAt:new Date().toISOString()};Array.isArray(f.expenses)||(f.expenses=[]),f.expenses.unshift(I);try{await ra()}catch{}}if(t==="paid"&&c>0){const T=(Array.isArray(f.salaryAdvances)?f.salaryAdvances:[]).find(K=>(K.employeeId===a||K.employeeUid===r.uid)&&K.status==="active"&&parseFloat(K.remainingAmount)>0);if(T){const K=T.advanceId||T.id;try{await de(K,c,`Pemotongan payroll periode ${_(e)}`)}catch(Z){console.warn("[HR Payroll] Gagal memotong saldo kasbon:",Z)}}}const N={payrollId:h,period:e,periodLabel:_(e),employeeUid:r.uid||"",employeeId:a,employeeName:r.name,employeeRole:r.role,position:r.position,phone:r.phone||"",status:t,baseSalary:n,attendanceAllowance:d,bonus:i,overtimePay:m,totalEarnings:u,advanceDeduction:c,lostItemDeduction:p,lostItemNotes:b,totalDeductions:w,netSalary:$,paymentMethod:k,bankName:r.bankName||"BCA",bankAccount:r.bankAccount||"-",expenseId:y,notes:`Gaji ${_(e)}`,updatedAt:j.firestore.FieldValue.serverTimestamp(),paidAt:t==="paid"?new Date().toISOString():null};try{await S.collection("freshmart").doc("cms_data").collection("salary_payrolls").doc(h).set(N,{merge:!0})}catch{}Array.isArray(f.payrollRuns)||(f.payrollRuns=[]);const H=f.payrollRuns.findIndex(I=>I.payrollId===h||I.id===h);H>-1?f.payrollRuns[H]={id:h,...N}:f.payrollRuns.unshift({id:h,...N}),Me(),A(t==="paid"?`Gaji Rp ${x($)} untuk ${r.name} berhasil dibayarkan!`:`Draf gaji untuk ${r.name} berhasil disimpan`,"success");const M=l("cashier-panel-payroll");M&&Q(M)}catch(y){console.error("[HR Payroll] Gagal menyimpan payroll:",y),A("Gagal menyimpan: "+y.message,"error")}finally{O()}},ca=(a,e)=>{let t=F.find(n=>(n.payrollId||n.id)===a);if(!t&&e){const n=W().find(d=>d.employeeId===e||d.uid===e);if(n){const d=Array.isArray(f.attendances)?f.attendances:[],i=Array.isArray(f.salaryAdvances)?f.salaryAdvances:[];t=re(n,D,d,i)}}if(!t){A("Data slip gaji tidak ditemukan","warning");return}se=t;const s=l("modal-payslip-preview");s&&s.remove();const r=f.store||{name:"TOKO PUTRI",address:"Jl. Raya Toko Putri"};document.body.insertAdjacentHTML("beforeend",`
    <div id="modal-payslip-preview" class="fixed inset-0 z-[9990] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/75"
        onclick="if(event.target===this) window.closePayslipPreviewModal()">
        <div class="bg-white dark:bg-slate-900 rounded-t-[2rem] sm:rounded-3xl shadow-2xl w-full max-w-lg flex flex-col max-h-[92vh] sm:max-h-[90vh] overflow-hidden scale-95 transition-transform duration-300 border border-slate-200 dark:border-slate-800" id="payslip-preview-modal-box">
            <!-- Mobile Drag Handle -->
            <div class="sm:hidden flex justify-center pt-3 pb-1 cursor-grab">
                <div class="w-10 h-1 rounded-full bg-slate-300 dark:bg-slate-700"></div>
            </div>

            <!-- Modal Header -->
            <div class="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0"
                style="background: linear-gradient(135deg, rgba(var(--color-primary-rgb), 0.08) 0%, rgba(var(--color-primary-rgb), 0.02) 100%)">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-sm"
                        style="background: var(--color-primary)">
                        <i class="fa-solid fa-file-invoice-dollar text-base"></i>
                    </div>
                    <div>
                        <h3 class="font-black text-sm sm:text-base text-slate-800 dark:text-white">
                            Pratinjau Slip Gaji Karyawan
                        </h3>
                        <p class="text-xs text-slate-500 dark:text-slate-400">
                            #${o(t.payrollId||t.id)} • ${o(t.periodLabel)}
                        </p>
                    </div>
                </div>
                <button onclick="window.closePayslipPreviewModal()" 
                    class="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer">
                    <i class="fa-solid fa-xmark text-sm"></i>
                </button>
            </div>

            <!-- Modal Body (Desain Kartu Slip Fisik) -->
            <div class="p-4 sm:p-6 overflow-y-auto space-y-4 flex-1 custom-scrollbar text-xs">
                <!-- Lembar Slip Gaji -->
                <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-4 font-sans text-slate-800 dark:text-slate-200 shadow-inner">
                    <!-- Kop Toko -->
                    <div class="text-center pb-3 border-b border-dashed border-slate-300 dark:border-slate-600 space-y-1">
                        <h4 class="font-black text-base text-slate-900 dark:text-white tracking-wide uppercase">${o(r.name||"TOKO PUTRI")}</h4>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400">${o(r.address||"Penyedia Bahan Bangunan & Alat Teknik")}</p>
                        <div class="inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider mt-1 border"
                            style="background: rgba(var(--color-primary-rgb), 0.1); border-color: rgba(var(--color-primary-rgb), 0.25); color: var(--color-primary)">
                            SLIP GAJI RESMI • ${o(t.periodLabel)}
                        </div>
                    </div>

                    <!-- Identitas Karyawan -->
                    <div class="grid grid-cols-2 gap-2 text-xs pb-3 border-b border-dashed border-slate-300 dark:border-slate-600">
                        <div>
                            <span class="text-slate-400 block text-[10px]">ID Karyawan:</span>
                            <span class="font-mono font-bold">${o(t.employeeId)}</span>
                        </div>
                        <div>
                            <span class="text-slate-400 block text-[10px]">Nama Karyawan:</span>
                            <span class="font-bold">${o(t.employeeName)}</span>
                        </div>
                        <div>
                            <span class="text-slate-400 block text-[10px]">Jabatan / Divisi:</span>
                            <span class="font-bold">${o(t.position)}</span>
                        </div>
                        <div>
                            <span class="text-slate-400 block text-[10px]">Status Pembayaran:</span>
                            <span class="font-bold ${t.status==="paid"?"text-emerald-600":"text-amber-500"}">
                                ${t.status==="paid"?"Lunas / Dibayar":"Draf"}
                            </span>
                        </div>
                    </div>

                    <!-- Rincian Penghasilan (+) -->
                    <div class="space-y-1.5 pb-3 border-b border-dashed border-slate-300 dark:border-slate-600">
                        <span class="text-[11px] font-black uppercase text-emerald-600 dark:text-emerald-400 tracking-wider block">PENGHASILAN (+)</span>
                        <div class="flex justify-between">
                            <span class="text-slate-600 dark:text-slate-300">Gaji Pokok:</span>
                            <span class="font-mono font-bold">Rp ${x(t.baseSalary)}</span>
                        </div>
                        ${t.attendanceAllowance>0?`
                        <div class="flex justify-between">
                            <span class="text-slate-600 dark:text-slate-300">Tunjangan Kehadiran (${t.totalAttendanceDays||0} Hari):</span>
                            <span class="font-mono font-bold text-emerald-600 dark:text-emerald-400">+Rp ${x(t.attendanceAllowance)}</span>
                        </div>`:""}
                        ${t.bonus>0?`
                        <div class="flex justify-between">
                            <span class="text-slate-600 dark:text-slate-300">Bonus Kinerja &amp; Insentif:</span>
                            <span class="font-mono font-bold text-emerald-600 dark:text-emerald-400">+Rp ${x(t.bonus)}</span>
                        </div>`:""}
                        ${t.overtimePay>0?`
                        <div class="flex justify-between">
                            <span class="text-slate-600 dark:text-slate-300">Uang Lembur:</span>
                            <span class="font-mono font-bold text-emerald-600 dark:text-emerald-400">+Rp ${x(t.overtimePay)}</span>
                        </div>`:""}
                        <div class="flex justify-between pt-1 border-t border-slate-200 dark:border-slate-700 font-bold">
                            <span>Total Penghasilan Bruto:</span>
                            <span class="font-mono text-emerald-600 dark:text-emerald-400">Rp ${x(t.totalEarnings)}</span>
                        </div>
                    </div>

                    <!-- Rincian Potongan (-) -->
                    <div class="space-y-1.5 pb-3 border-b border-dashed border-slate-300 dark:border-slate-600">
                        <span class="text-[11px] font-black uppercase text-rose-500 tracking-wider block">POTONGAN (-)</span>
                        ${t.advanceDeduction>0?`
                        <div class="flex justify-between">
                            <span class="text-slate-600 dark:text-slate-300">Angsuran Kasbon (#${o(t.advanceId||"KSB")}):</span>
                            <span class="font-mono font-bold text-rose-500">-Rp ${x(t.advanceDeduction)}</span>
                        </div>`:""}
                        ${t.lostItemDeduction>0?`
                        <div class="flex justify-between">
                            <span class="text-slate-600 dark:text-slate-300">Potongan Selisih Barang Hilang:</span>
                            <span class="font-mono font-bold text-rose-500">-Rp ${x(t.lostItemDeduction)}</span>
                        </div>
                        ${t.lostItemNotes?`<span class="text-[10px] text-slate-400 italic block pl-2">${o(t.lostItemNotes)}</span>`:""}`:""}
                        ${t.totalDeductions===0?'<div class="text-slate-400 text-[11px] italic">Tidak ada potongan pada periode ini</div>':""}
                        <div class="flex justify-between pt-1 border-t border-slate-200 dark:border-slate-700 font-bold">
                            <span>Total Potongan:</span>
                            <span class="font-mono text-rose-500">-Rp ${x(t.totalDeductions)}</span>
                        </div>
                    </div>

                    <!-- Total Gaji Bersih (Take Home Pay) -->
                    <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-emerald-300 dark:border-emerald-700 flex items-center justify-between">
                        <div>
                            <span class="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">GAJI BERSIH (TAKE HOME PAY)</span>
                            <span class="text-[10px] text-slate-500">Metode: ${o(t.paymentMethod?.toUpperCase())}</span>
                        </div>
                        <span class="text-lg font-black text-emerald-600 dark:text-emerald-400 font-mono">
                            Rp ${x(t.netSalary)}
                        </span>
                    </div>

                    <!-- Tanda Tangan Ringkas -->
                    <div class="grid grid-cols-2 text-center pt-2 text-[10px] text-slate-400">
                        <div>
                            <span>Penerima,</span>
                            <div class="h-10"></div>
                            <span class="font-bold text-slate-700 dark:text-slate-300">${o(t.employeeName)}</span>
                        </div>
                        <div>
                            <span>Pengelola HR / Owner,</span>
                            <div class="h-10"></div>
                            <span class="font-bold text-slate-700 dark:text-slate-300">${o(r.name||"Owner Toko")}</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Modal Footer (3 Tombol Aksi Cetak & Share) -->
            <div class="p-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-2 shrink-0 bg-slate-50/70 dark:bg-slate-800/40 pb-[max(1rem,env(safe-area-inset-bottom))]">
                <button onclick="window.closePayslipPreviewModal()" 
                    class="w-full sm:w-auto min-h-[44px] px-5 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-slate-100 active:scale-95 transition-all cursor-pointer">
                    Tutup
                </button>
                <div class="flex items-center gap-2 w-full sm:w-auto justify-end flex-wrap">
                    <button onclick="window.sendPayslipWhatsApp('${o(t.payrollId||t.id)}')"
                        class="flex-1 sm:flex-initial min-h-[44px] px-4 py-2.5 rounded-2xl text-white font-black text-xs transition-all active:scale-95 cursor-pointer shadow-sm flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700">
                        <i class="fa-brands fa-whatsapp text-sm"></i>
                        <span>Kirim WA</span>
                    </button>
                    <button onclick="window.printPayslipThermal('${o(t.payrollId||t.id)}')"
                        class="flex-1 sm:flex-initial min-h-[44px] px-4 py-2.5 rounded-2xl text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-600 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-700 transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-1.5">
                        <i class="fa-solid fa-receipt text-xs"></i>
                        <span>Struk Thermal</span>
                    </button>
                    <button onclick="window.printPayslipA4('${o(t.payrollId||t.id)}')"
                        class="flex-1 sm:flex-initial min-h-[44px] px-5 py-2.5 rounded-2xl text-white font-black text-xs shadow-md active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-1.5"
                        style="background: var(--color-primary);">
                        <i class="fa-solid fa-print text-xs"></i>
                        <span>Cetak A4 PDF</span>
                    </button>
                </div>
            </div>
        </div>
    </div>`),typeof window.pushModalHistory=="function"&&window.pushModalHistory("payslipPreview"),setTimeout(()=>{const n=l("payslip-preview-modal-box");n&&n.classList.remove("scale-95")},10)},pa=(a=!1)=>{const e=()=>{const t=l("modal-payslip-preview");t&&(t.style.opacity="0",setTimeout(()=>t.remove(),200))};typeof window.requestCloseModal=="function"?window.requestCloseModal("payslipPreview",a,e):e()},ba=a=>{const e=se||F.find(i=>(i.payrollId||i.id)===a);if(!e)return;const t=f.store||{name:"TOKO PUTRI"},s=String(e.phone||"").replace(/[^0-9]/g,""),r=[`*SLIP GAJI RESMI - ${t.name?.toUpperCase()||"TOKO PUTRI"}*`,`Periode: *${e.periodLabel}*`,"----------------------------------------","👤 *KARYAWAN*",`• ID: \`${e.employeeId}\``,`• Nama: *${e.employeeName}*`,`• Jabatan: ${e.position}`,`• Hari Masuk: ${e.totalAttendanceDays||0} Hari`,"----------------------------------------","💰 *PENGHASILAN (+)*",`• Gaji Pokok: Rp ${x(e.baseSalary)}`,e.attendanceAllowance>0?`• Tunjangan Absensi: +Rp ${x(e.attendanceAllowance)}`:"",e.bonus>0?`• Bonus / Insentif: +Rp ${x(e.bonus)}`:"",e.overtimePay>0?`• Uang Lembur: +Rp ${x(e.overtimePay)}`:"",`*Total Bruto: Rp ${x(e.totalEarnings)}*`,"----------------------------------------","✂️ *POTONGAN (-)*",e.advanceDeduction>0?`• Angsuran Kasbon: -Rp ${x(e.advanceDeduction)}`:"",e.lostItemDeduction>0?`• Potongan Selisih Barang Hilang: -Rp ${x(e.lostItemDeduction)}`:"",e.totalDeductions===0?"• Tidak ada potongan":`*Total Potongan: -Rp ${x(e.totalDeductions)}*`,"----------------------------------------","💵 *GAJI BERSIH (TAKE HOME PAY)*",`*Rp ${x(e.netSalary)}*`,`Metode: ${e.paymentMethod?.toUpperCase()} (${e.bankName||"BCA"}: ${e.bankAccount||"-"})`,`Status: *${e.status==="paid"?"LUNAS / DIBAYAR":"DRAF"}*`,"----------------------------------------","_Slip gaji ini dibuat otomatis secara sah oleh sistem manajemen Toko Putri._"].filter(Boolean).join(`
`),n=encodeURIComponent(r),d=s?`https://wa.me/${s}?text=${n}`:`https://api.whatsapp.com/send?text=${n}`;window.open(d,"_blank")},ma=a=>{const e=se||F.find(n=>(n.payrollId||n.id)===a);if(!e)return;const t=f.store||{name:"TOKO PUTRI",address:"Jl. Raya Toko Putri"},s=`
    <div style="font-family:'Courier New',Courier,monospace;width:300px;margin:0 auto;padding:10px;font-size:12px;color:#000;">
        <div style="text-align:center;border-bottom:1px dashed #000;padding-bottom:8px;margin-bottom:8px;">
            <div style="font-size:16px;font-weight:bold;">${o(t.name||"TOKO PUTRI")}</div>
            <div style="font-size:10px;">${o(t.address||"")}</div>
            <div style="font-weight:bold;margin-top:4px;">SLIP GAJI KARYAWAN</div>
            <div style="font-size:11px;">${o(e.periodLabel)}</div>
        </div>
        <div style="margin-bottom:6px;font-size:11px;">
            <div>ID: ${o(e.employeeId)}</div>
            <div>Nama: <strong>${o(e.employeeName)}</strong></div>
            <div>Jabatan: ${o(e.position)}</div>
            <div>Hadir: ${e.totalAttendanceDays||0} Hari</div>
        </div>
        <div style="border-top:1px dashed #000;border-bottom:1px dashed #000;padding:6px 0;margin-bottom:6px;">
            <div style="font-weight:bold;margin-bottom:2px;">PENGHASILAN:</div>
            <div style="display:flex;justify-content:space-between;"><span>Gaji Pokok:</span><span>Rp ${x(e.baseSalary)}</span></div>
            ${e.attendanceAllowance>0?`<div style="display:flex;justify-content:space-between;"><span>Tunj. Kehadiran:</span><span>+Rp ${x(e.attendanceAllowance)}</span></div>`:""}
            ${e.bonus>0?`<div style="display:flex;justify-content:space-between;"><span>Bonus/Insentif:</span><span>+Rp ${x(e.bonus)}</span></div>`:""}
            ${e.overtimePay>0?`<div style="display:flex;justify-content:space-between;"><span>Lembur:</span><span>+Rp ${x(e.overtimePay)}</span></div>`:""}
            <div style="display:flex;justify-content:space-between;font-weight:bold;margin-top:2px;"><span>Bruto:</span><span>Rp ${x(e.totalEarnings)}</span></div>
        </div>
        <div style="border-bottom:1px dashed #000;padding-bottom:6px;margin-bottom:6px;">
            <div style="font-weight:bold;margin-bottom:2px;">POTONGAN:</div>
            ${e.advanceDeduction>0?`<div style="display:flex;justify-content:space-between;"><span>Kasbon:</span><span>-Rp ${x(e.advanceDeduction)}</span></div>`:""}
            ${e.lostItemDeduction>0?`<div style="display:flex;justify-content:space-between;"><span>Selisih Barang:</span><span>-Rp ${x(e.lostItemDeduction)}</span></div>`:""}
            ${e.totalDeductions===0?"<div>(Tidak ada potongan)</div>":""}
            <div style="display:flex;justify-content:space-between;font-weight:bold;margin-top:2px;"><span>Tot. Potongan:</span><span>-Rp ${x(e.totalDeductions)}</span></div>
        </div>
        <div style="font-size:14px;font-weight:bold;display:flex;justify-content:space-between;margin-bottom:10px;">
            <span>TAKE HOME PAY:</span>
            <span>Rp ${x(e.netSalary)}</span>
        </div>
        <div style="text-align:center;font-size:10px;border-top:1px dashed #000;padding-top:8px;">
            <div>Metode: ${o(e.paymentMethod?.toUpperCase())} • Status: ${o(e.status?.toUpperCase())}</div>
            <div style="margin-top:4px;">Terima kasih atas kerja keras Anda!</div>
        </div>
    </div>`,r=window.open("","_blank");r&&(r.document.write(`<html><head><title>Slip Gaji - ${e.employeeName}</title></head><body onload="window.print();">${s}</body></html>`),r.document.close())},xa=a=>{const e=se||F.find(n=>(n.payrollId||n.id)===a);if(!e)return;const t=f.store||{name:"TOKO PUTRI",address:"Jl. Raya Toko Putri",phone:"081234567890"},s=`
    <!DOCTYPE html>
    <html lang="id">
    <head>
        <meta charset="UTF-8">
        <title>Slip Gaji Resmi - ${e.employeeName} (${e.periodLabel})</title>
        <style>
            @page { size: A4 portrait; margin: 15mm; }
            body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #1e293b; margin: 0; padding: 20px; font-size: 13px; line-height: 1.5; }
            .kop { border-bottom: 2px solid #0f172a; padding-bottom: 15px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center; }
            .kop-title { font-size: 22px; font-weight: 900; color: #0f172a; letter-spacing: 0.5px; }
            .kop-sub { font-size: 11px; color: #64748b; }
            .badge-title { font-size: 14px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; color: #4338ca; background: #e0e7ff; padding: 6px 16px; border-radius: 9999px; display: inline-block; }
            .meta-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 25px; padding: 15px; background: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0; }
            .table-block { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
            .table-block th { background: #f1f5f9; padding: 10px 14px; font-size: 11px; font-weight: 800; text-transform: uppercase; text-align: left; border-bottom: 1px solid #cbd5e1; }
            .table-block td { padding: 10px 14px; border-bottom: 1px solid #e2e8f0; }
            .text-right { text-align: right; }
            .total-box { background: #ecfdf5; border: 1.5px solid #10b981; border-radius: 12px; padding: 16px 20px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 35px; }
            .total-label { font-size: 12px; font-weight: 800; text-transform: uppercase; color: #065f46; }
            .total-val { font-size: 24px; font-weight: 900; color: #047857; font-family: monospace; }
            .sign-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; text-align: center; margin-top: 40px; }
            .sign-line { border-bottom: 1px solid #94a3b8; width: 60%; margin: 60px auto 8px auto; }
            @media print {
                body { padding: 0; }
                .no-print { display: none; }
            }
        </style>
    </head>
    <body onload="window.print();">
        <div class="kop">
            <div>
                <div class="kop-title">${o(t.name||"TOKO PUTRI")}</div>
                <div class="kop-sub">${o(t.address||"Pusat Bahan Bangunan & Alat Teknik")}</div>
                <div class="kop-sub">WhatsApp: ${o(t.phone||"-")}</div>
            </div>
            <div style="text-align: right;">
                <div class="badge-title">SLIP GAJI KARYAWAN</div>
                <div style="font-size: 11px; color: #64748b; margin-top: 5px;">Periode: <strong>${o(e.periodLabel)}</strong></div>
            </div>
        </div>

        <div class="meta-grid">
            <div>
                <div style="color: #64748b; font-size: 11px;">Nomor Slip:</div>
                <div style="font-weight: 800; font-family: monospace;">${o(e.payrollId||e.id)}</div>
                <div style="color: #64748b; font-size: 11px; margin-top: 6px;">ID Karyawan:</div>
                <div style="font-weight: 700;">${o(e.employeeId)}</div>
            </div>
            <div>
                <div style="color: #64748b; font-size: 11px;">Nama Karyawan:</div>
                <div style="font-weight: 800; font-size: 14px;">${o(e.employeeName)}</div>
                <div style="color: #64748b; font-size: 11px; margin-top: 6px;">Jabatan:</div>
                <div style="font-weight: 700;">${o(e.position)} (${e.totalAttendanceDays||0} Hari Kerja)</div>
            </div>
        </div>

        <table class="table-block">
            <thead>
                <tr>
                    <th>Deskripsi Komponen Penghasilan (+)</th>
                    <th class="text-right">Jumlah (Rp)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Gaji Pokok Karyawan</td>
                    <td class="text-right font-mono">Rp ${x(e.baseSalary)}</td>
                </tr>
                ${e.attendanceAllowance>0?`
                <tr>
                    <td>Tunjangan Kehadiran (${e.totalAttendanceDays||0} hari x Rp ${x(e.dailyAllowanceRate)})</td>
                    <td class="text-right font-mono text-emerald-600">+Rp ${x(e.attendanceAllowance)}</td>
                </tr>`:""}
                ${e.bonus>0?`
                <tr>
                    <td>Bonus Kinerja &amp; Insentif Toko</td>
                    <td class="text-right font-mono text-emerald-600">+Rp ${x(e.bonus)}</td>
                </tr>`:""}
                ${e.overtimePay>0?`
                <tr>
                    <td>Uang Lembur / Tambahan</td>
                    <td class="text-right font-mono text-emerald-600">+Rp ${x(e.overtimePay)}</td>
                </tr>`:""}
                <tr style="background: #f8fafc; font-weight: 800;">
                    <td>Subtotal Penghasilan Bruto</td>
                    <td class="text-right font-mono text-emerald-600">Rp ${x(e.totalEarnings)}</td>
                </tr>
            </tbody>
        </table>

        <table class="table-block">
            <thead>
                <tr>
                    <th>Deskripsi Komponen Pemotongan (-)</th>
                    <th class="text-right">Jumlah (Rp)</th>
                </tr>
            </thead>
            <tbody>
                ${e.advanceDeduction>0?`
                <tr>
                    <td>Angsuran Kasbon / Pinjaman Karyawan (#${o(e.advanceId||"KSB")})</td>
                    <td class="text-right font-mono text-rose-500">-Rp ${x(e.advanceDeduction)}</td>
                </tr>`:""}
                ${e.lostItemDeduction>0?`
                <tr>
                    <td>Potongan Selisih Barang Hilang / Stock Opname ${e.lostItemNotes?`(${o(e.lostItemNotes)})`:""}</td>
                    <td class="text-right font-mono text-rose-500">-Rp ${x(e.lostItemDeduction)}</td>
                </tr>`:""}
                ${e.totalDeductions===0?`
                <tr>
                    <td colspan="2" style="color: #94a3b8; font-style: italic;">Tidak ada potongan pada periode penggajian ini.</td>
                </tr>`:""}
                <tr style="background: #f8fafc; font-weight: 800;">
                    <td>Subtotal Pemotongan</td>
                    <td class="text-right font-mono text-rose-500">-Rp ${x(e.totalDeductions)}</td>
                </tr>
            </tbody>
        </table>

        <div class="total-box">
            <div>
                <div class="total-label">Gaji Bersih Diterima (Take Home Pay)</div>
                <div style="font-size: 11px; color: #047857; margin-top: 2px;">
                    Metode Pembayaran: <strong>${o(e.paymentMethod?.toUpperCase())}</strong> 
                    ${e.bankAccount&&e.bankAccount!=="-"?`(${o(e.bankName)}: ${o(e.bankAccount)})`:""}
                </div>
            </div>
            <div class="total-val">Rp ${x(e.netSalary)}</div>
        </div>

        <div class="sign-grid">
            <div>
                <div>Diterima oleh Karyawan,</div>
                <div class="sign-line"></div>
                <div style="font-weight: 800;">${o(e.employeeName)}</div>
                <div style="font-size: 11px; color: #64748b;">${o(e.position)}</div>
            </div>
            <div>
                <div>Mengetahui,</div>
                <div class="sign-line"></div>
                <div style="font-weight: 800;">Direksi / Pemilik Toko</div>
                <div style="font-size: 11px; color: #64748b;">${o(t.name||"Toko Putri")}</div>
            </div>
        </div>
    </body>
    </html>`,r=window.open("","_blank");r&&(r.document.write(s),r.document.close())};typeof window<"u"&&(window.generatePayrollId=pe,window.loadPayrollRuns=Pe,window.calculateEmployeePayrollDraft=re,window.renderPayrollView=Q,window.navigatePayrollPeriod=oa,window.onPayrollPeriodChanged=la,window.openPayrollItemModal=na,window.closePayrollItemModal=Me,window.recalculatePayrollItem=ia,window.savePayrollItem=da,window.openPayslipPreviewModal=ca,window.closePayslipPreviewModal=pa,window.sendPayslipWhatsApp=ba,window.printPayslipThermal=ma,window.printPayslipA4=xa);let E=[],X="all";const Ie=async()=>{if(!l("admin-content"))return;const e=document.querySelector("#view-admin .scroll-content");e&&(e.scrollTop=0);const t=J.currentUser;t&&(t.uid,ge);const s=t&&t.uid!==ge,r=!t,n=ae(f);let d="",i="";r?(d='<span class="flex items-center gap-1.5 text-amber-600 dark:text-amber-400 font-bold"><i class="fa-solid fa-triangle-exclamation"></i> Status: Pratinjau Lokal (Belum Terotentikasi Firebase)</span>',i=`
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
        </div>`):s?(d=`<span class="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-bold"><i class="fa-solid fa-user-shield"></i> Status: Login Staf (${o(t.email||"Staf")}) — Wewenang Dibatasi Khusus Owner</span>`,i=`
        <div class="p-3.5 rounded-2xl border border-blue-200 dark:border-blue-800/80 bg-blue-50/80 dark:bg-blue-950/40 text-blue-800 dark:text-blue-200 flex items-center gap-3 shadow-2xs">
            <div class="w-8 h-8 rounded-xl bg-blue-200/70 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 flex items-center justify-center shrink-0">
                <i class="fa-solid fa-shield-halved text-xs"></i>
            </div>
            <div class="text-[11px] leading-snug">
                <span class="font-bold">Mode Akun Staf (${o(t.email||"Staf")}):</span> Anda dapat melihat direktori staf. Penambahan, pengubahan wewenang hak akses, dan penghapusan staf diproteksi eksklusif untuk Pemilik Toko (Owner).
            </div>
        </div>`):d=`<span class="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold"><i class="fa-solid fa-circle-check"></i> Status: Terverifikasi Login sebagai Owner (${o(t.email||"Master")})</span>`,Ke("admin-content",`
    <div class="space-y-4 max-w-5xl mx-auto pb-16">
        <!-- Native App Sticky Segmented Control Bar -->
        <div class="sticky top-0 z-20 -mx-4 lg:-mx-8 px-4 lg:px-8 py-3 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-2xs">
            <div class="p-1.5 bg-slate-100 dark:bg-slate-800/90 rounded-2xl max-w-4xl w-full mx-auto flex items-center gap-1.5 overflow-x-auto no-scrollbar border border-slate-200/90 dark:border-slate-700/80 shadow-inner sm:grid sm:grid-cols-5">
                <button id="tab-btn-cashier-accounts" onclick="window.switchCashierTab('accounts')" 
                    class="min-h-[44px] py-2.5 px-3 sm:px-2.5 rounded-xl text-xs font-black text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 shadow-md shrink-0 sm:shrink min-w-[125px] sm:min-w-0"
                    style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                    <i class="fa-solid fa-users-gear text-white"></i>
                    <span class="truncate">Staf &amp; Akses</span>
                </button>
                <button id="tab-btn-cashier-attendance" onclick="window.switchCashierTab('attendance')" 
                    class="min-h-[44px] py-2.5 px-3 sm:px-2.5 rounded-xl text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-700/60 transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 shrink-0 sm:shrink min-w-[125px] sm:min-w-0">
                    <i class="fa-solid fa-clipboard-user"></i>
                    <span class="truncate">Absensi Tim</span>
                </button>
                <button id="tab-btn-cashier-advances" onclick="window.switchCashierTab('advances')" 
                    class="min-h-[44px] py-2.5 px-3 sm:px-2.5 rounded-xl text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-700/60 transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 shrink-0 sm:shrink min-w-[125px] sm:min-w-0">
                    <i class="fa-solid fa-hand-holding-dollar"></i>
                    <span class="truncate">Buku Kasbon</span>
                </button>
                <button id="tab-btn-cashier-payroll" onclick="window.switchCashierTab('payroll')" 
                    class="min-h-[44px] py-2.5 px-3 sm:px-2.5 rounded-xl text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-700/60 transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 shrink-0 sm:shrink min-w-[125px] sm:min-w-0">
                    <i class="fa-solid fa-money-check-dollar"></i>
                    <span class="truncate">Gaji &amp; Slip</span>
                </button>
                <button id="tab-btn-cashier-shifts" onclick="window.switchCashierTab('shifts')" 
                    class="min-h-[44px] py-2.5 px-3 sm:px-2.5 rounded-xl text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-700/60 transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 shrink-0 sm:shrink min-w-[125px] sm:min-w-0">
                    <i class="fa-solid fa-file-invoice-dollar"></i>
                    <span class="truncate">Shift Kasir</span>
                </button>
            </div>
        </div>

        <!-- Panel 1: Manajemen Staf & Hak Akses -->
        <div id="cashier-panel-accounts" class="space-y-4 pt-1">
            ${i}

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

            <!-- Kartu Owner Utama Toko (Super Admin & Master HR) -->
            <div class="relative overflow-hidden p-4 sm:p-5 rounded-2xl sm:rounded-3xl border shadow-2xs flex flex-col sm:flex-row sm:items-start justify-between gap-4"
                style="background: linear-gradient(135deg, rgba(var(--color-primary-rgb), 0.08) 0%, rgba(var(--color-primary-rgb), 0.02) 100%); border-color: rgba(var(--color-primary-rgb), 0.25)">
                <div class="flex items-start gap-4 min-w-0">
                    <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-lg shrink-0 shadow-md text-white"
                        style="background: var(--color-primary)">
                        <i class="fa-solid fa-crown text-amber-300"></i>
                    </div>
                    <div class="space-y-1.5 min-w-0 flex-1">
                        <div class="flex items-center gap-2 flex-wrap">
                            <span class="text-sm font-black text-slate-900 dark:text-white">Akun Pemilik Utama (Owner)</span>
                            <span class="inline-flex items-center gap-1 text-[10px] font-black px-2.5 py-0.5 rounded-full"
                                style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25)">
                                <i class="fa-solid fa-lock text-[9px]"></i> Super Admin Terproteksi
                            </span>
                            <span class="inline-flex items-center gap-1 font-mono text-[10px] font-bold px-2 py-0.5 rounded-md"
                                style="background: rgba(var(--color-primary-rgb), 0.08); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.2)">
                                ${o(n.employeeId||"OWN-001")}
                            </span>
                        </div>
                        <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                            Jabatan: <strong class="text-slate-900 dark:text-white">${o(n.position||"Owner / Direktur Utama")}</strong> • Gaji Pokok Direksi: <strong class="text-emerald-600 dark:text-emerald-400">${x(n.baseSalary||1e7)}</strong> /bln • Status: Karyawan Tetap
                        </p>
                        <div class="flex items-center gap-3 pt-1 text-[11px] text-slate-600 dark:text-slate-300 font-bold flex-wrap">
                            ${d}
                            <span>•</span>
                            <span class="flex items-center gap-1.5"><i class="fa-solid fa-key" style="color: var(--color-primary)"></i> Hak Akses: 22 Modul Terbuka</span>
                            ${n.bankAccount&&n.bankAccount!=="-"?`<span>•</span><span class="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 font-semibold"><i class="fa-solid fa-building-columns text-[10px]"></i> ${o(n.bankName)}: ${o(n.bankAccount)}</span>`:""}
                        </div>
                    </div>
                </div>
                <button onclick="window.openOwnerHrModal()"
                    class="shrink-0 self-end sm:self-start min-h-[44px] px-4 py-2.5 rounded-2xl text-xs font-bold bg-white dark:bg-slate-800 border transition-all cursor-pointer shadow-2xs flex items-center gap-1.5 active:scale-95"
                    style="color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25)">
                    <i class="fa-solid fa-user-pen text-xs"></i>
                    <span>Atur Gaji &amp; HR Owner</span>
                </button>
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
                <button onclick="window.filterStaffRole('staff')" id="staff-filter-staff"
                    class="staff-filter-btn px-4 py-2 rounded-xl text-xs font-bold bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-slate-300 transition-all cursor-pointer shadow-2xs flex items-center gap-1.5 active:scale-95 shrink-0">
                    <i class="fa-solid fa-user-gear text-[10px] text-amber-500"></i>
                    <span>Staf / Gudang</span>
                </button>
            </div>

            <!-- List Staf Terdaftar -->
            <div id="cashier-list-container">
                <div class="text-center py-16"><i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i></div>
            </div>
        </div>

        <!-- Panel 2: Absensi Shift & Kehadiran Tim -->
        <div id="cashier-panel-attendance" class="hidden pt-1"></div>

        <!-- Panel 3: Buku Kasbon & Pinjaman Karyawan -->
        <div id="cashier-panel-advances" class="hidden pt-1"></div>

        <!-- Panel 4: Penggajian (Payroll) & Slip Gaji -->
        <div id="cashier-panel-payroll" class="hidden pt-1"></div>

        <!-- Panel 5: Laporan Shift Kasir -->
        <div id="cashier-panel-shifts" class="hidden pt-1"></div>
    </div>`),await z()},fa=a=>{const e=document.querySelector("#view-admin .scroll-content");e&&(e.scrollTop=0);const t=l("tab-btn-cashier-accounts"),s=l("tab-btn-cashier-attendance"),r=l("tab-btn-cashier-advances"),n=l("tab-btn-cashier-payroll"),d=l("tab-btn-cashier-shifts"),i=l("cashier-panel-accounts"),m=l("cashier-panel-attendance"),c=l("cashier-panel-advances"),p=l("cashier-panel-payroll"),b=l("cashier-panel-shifts"),k=(u,w,$)=>{u&&(u.className="min-h-[44px] py-2.5 px-3 sm:px-2.5 rounded-xl text-xs font-black text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 shadow-md shrink-0 sm:shrink min-w-[125px] sm:min-w-0",u.style.background="var(--color-primary)",u.style.boxShadow="0 4px 14px rgba(var(--color-primary-rgb), 0.35)",u.innerHTML=`${w}<span class="truncate">${$}</span>`)},v=(u,w,$)=>{u&&(u.className="min-h-[44px] py-2.5 px-3 sm:px-2.5 rounded-xl text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-700/60 transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 shrink-0 sm:shrink min-w-[125px] sm:min-w-0",u.style.background="transparent",u.style.boxShadow="none",u.innerHTML=`${w}<span class="truncate">${$}</span>`)};v(t,'<i class="fa-solid fa-users-gear"></i>',"Staf &amp; Akses"),v(s,'<i class="fa-solid fa-clipboard-user"></i>',"Absensi Tim"),v(r,'<i class="fa-solid fa-hand-holding-dollar"></i>',"Buku Kasbon"),v(n,'<i class="fa-solid fa-money-check-dollar"></i>',"Gaji &amp; Slip"),v(d,'<i class="fa-solid fa-file-invoice-dollar"></i>',"Shift Kasir"),i&&i.classList.add("hidden"),m&&m.classList.add("hidden"),c&&c.classList.add("hidden"),p&&p.classList.add("hidden"),b&&b.classList.add("hidden"),a==="attendance"?(k(s,'<i class="fa-solid fa-clipboard-user text-white"></i>',"Absensi Tim"),m&&(m.classList.remove("hidden"),Y(m))):a==="advances"?(k(r,'<i class="fa-solid fa-hand-holding-dollar text-white"></i>',"Buku Kasbon"),c&&(c.classList.remove("hidden"),q(c))):a==="payroll"?(k(n,'<i class="fa-solid fa-money-check-dollar text-white"></i>',"Gaji &amp; Slip"),p&&(p.classList.remove("hidden"),Q(p))):a==="shifts"?(k(d,'<i class="fa-solid fa-file-invoice-dollar text-white"></i>',"Shift Kasir"),b&&(b.classList.remove("hidden"),Le(b))):(k(t,'<i class="fa-solid fa-users-gear text-white"></i>',"Staf &amp; Akses"),i&&i.classList.remove("hidden"))},ua=a=>{X=a,document.querySelectorAll(".staff-filter-btn").forEach(t=>{t.style.background="transparent",t.style.color="",t.classList.add("bg-white","dark:bg-slate-800","text-slate-600","dark:text-slate-300")});const e=l(`staff-filter-${a}`);e&&(e.classList.remove("bg-white","dark:bg-slate-800","text-slate-600","dark:text-slate-300"),e.style.background="var(--color-primary)",e.style.color="#fff"),Te()},ga=a=>{if(a.role===g.OWNER)return V.length;if(a.permissions)return Object.values(a.permissions).filter(Boolean).length;const e=U[a.role]||U[g.CASHIER];return Object.values(e).filter(Boolean).length},Te=()=>{const a=l("cashier-list-container");if(!a)return;let e=E;if(X==="admin"?e=E.filter(s=>s.role===g.ADMIN||s.role===g.OWNER||s.role==="admin"||s.role==="owner"):X==="cashier"?e=E.filter(s=>s.role===g.CASHIER||s.role==="cashier"||!s.role):X==="staff"&&(e=E.filter(s=>s.role===g.STAFF||s.role==="staff")),e.length===0){a.innerHTML=`
        <div class="flex flex-col items-center justify-center py-16 text-slate-400 dark:text-slate-600 bg-white dark:bg-slate-800/60 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-8 text-center">
            <div class="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-2xl mb-3 text-slate-400">
                <i class="fa-solid fa-user-slash"></i>
            </div>
            <p class="font-bold text-sm text-slate-700 dark:text-slate-300">Belum ada akun staf pada kategori ini</p>
            <p class="text-xs mt-1 text-slate-400">Klik "Tambah Staf" untuk mendaftarkan akun kasir, admin atau staf operasional baru</p>
        </div>`;return}const t=e.map((s,r)=>{const n=s.uid,d=s.isActive!==!1,i=s.createdAt?.toDate?s.createdAt.toDate().toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):s.hireDate||"-",m=(s.name||"Staf").trim().split(/\s+/).slice(0,2).map(w=>w[0]).join("").toUpperCase()||"ST",c=s.role||g.CASHIER,p=ga(s),b=s.employeeId||`EMP-${String(r+1).padStart(3,"0")}`,k=s.position||(c===g.CASHIER?"Kasir POS":c===g.ADMIN?"Admin Operasional":"Staf Gudang & Logistik"),v=parseFloat(s.baseSalary)||0,u=parseFloat(s.dailyAllowance)||0;return`
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 p-4 sm:p-5 bg-white dark:bg-slate-800/95 rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:shadow-xs transition-all">
            <div class="flex items-start sm:items-center gap-3.5 min-w-0">
                <div class="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm shrink-0 shadow-2xs border border-[rgba(var(--color-primary-rgb),0.25)]"
                    style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary)">
                    ${m}
                </div>
                <div class="min-w-0 flex-1">
                    <div class="flex items-center gap-2 flex-wrap">
                        <p class="text-sm font-black text-slate-900 dark:text-white truncate">${o(s.name||"Staf")}</p>
                        ${Be(c)}
                        <span class="inline-flex items-center gap-1 font-mono text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700/80 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600">
                            ${o(b)}
                        </span>
                        <span class="inline-flex items-center gap-1.5 text-[10px] font-black px-2.5 py-0.5 rounded-full ${d?"bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60":"bg-slate-100 dark:bg-slate-700 text-slate-500 border border-slate-200 dark:border-slate-600"}">
                            <span class="w-1.5 h-1.5 rounded-full ${d?"bg-emerald-500 animate-pulse":"bg-slate-400"}"></span>
                            ${d?"Aktif":"Nonaktif"}
                        </span>
                    </div>
                    <div class="flex items-center gap-2 mt-1 text-xs text-slate-600 dark:text-slate-300 flex-wrap">
                        <span class="font-bold text-slate-800 dark:text-slate-100"><i class="fa-solid fa-user-tag text-[10px] mr-1" style="color: var(--color-primary)"></i>${o(k)}</span>
                        <span>•</span>
                        <span class="font-black text-emerald-600 dark:text-emerald-400"><i class="fa-solid fa-money-bill-wave text-[10px] mr-1"></i>${x(v)}/bln</span>
                        ${u>0?`<span class="text-[11px] text-slate-500 dark:text-slate-400 font-medium">(+${x(u)}/hr)</span>`:""}
                    </div>
                    <div class="flex items-center gap-3 mt-1.5 text-xs text-slate-500 dark:text-slate-400 flex-wrap">
                        <span class="flex items-center gap-1 font-medium"><i class="fa-solid fa-envelope text-[10px] text-slate-400"></i> ${o(s.email||"")}</span>
                        ${s.phone?`<span>•</span><span class="flex items-center gap-1 font-medium text-emerald-600 dark:text-emerald-400"><i class="fa-brands fa-whatsapp text-[11px]"></i> ${o(s.phone)}</span>`:""}
                        <span>•</span>
                        <span class="inline-flex items-center gap-1 font-bold text-[11px] text-[var(--color-primary)]">
                            <i class="fa-solid fa-key text-[9px]"></i> ${p} Modul
                        </span>
                        ${s.bankAccount&&s.bankAccount!=="-"?`<span>•</span><span class="text-[11px] text-slate-500 dark:text-slate-400"><i class="fa-solid fa-building-columns text-[10px]"></i> ${o(s.bankName)}: ${o(s.bankAccount)}</span>`:""}
                        <span>•</span>
                        <span class="flex items-center gap-1 text-[11px] text-slate-400 dark:text-slate-500"><i class="fa-solid fa-calendar-days text-[10px]"></i> Masuk: ${o(i)}</span>
                    </div>
                </div>
            </div>
            <!-- Tombol Aksi Hak Akses, Status & Edit -->
            <div class="flex items-center gap-2 shrink-0 self-end sm:self-center border-t sm:border-t-0 pt-2.5 sm:pt-0 border-slate-100 dark:border-slate-700/60 w-full sm:w-auto justify-end">
                <button onclick="window.openPermissionsModal('${o(n)}')"
                    title="Atur Hak Akses Modul"
                    class="flex-1 sm:flex-initial h-10 px-3.5 rounded-xl text-xs font-bold transition-all active:scale-95 cursor-pointer shadow-2xs flex items-center justify-center gap-1.5 border"
                    style="background: rgba(var(--color-primary-rgb), 0.08); border-color: rgba(var(--color-primary-rgb), 0.25); color: var(--color-primary)">
                    <i class="fa-solid fa-sliders text-[10px]"></i>
                    <span>Hak Akses</span>
                </button>
                <button onclick="window.toggleStaffActive('${o(n)}', ${!d})"
                    title="${d?"Nonaktifkan Akun Staf":"Aktifkan Akun Staf"}"
                    class="w-10 h-10 rounded-xl flex items-center justify-center text-xs transition-all active:scale-95 cursor-pointer shadow-2xs border shrink-0
                    ${d?"bg-slate-50 hover:bg-amber-50 dark:bg-slate-700/80 dark:hover:bg-amber-950/40 text-slate-600 dark:text-slate-300 hover:text-amber-600 border-slate-200/80 dark:border-slate-700 hover:border-amber-300":"bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 border-emerald-200 dark:border-emerald-800"}">
                    <i class="fa-solid ${d?"fa-ban":"fa-circle-check"}"></i>
                </button>
                <button onclick="window.openEditStaffModal('${o(n)}', '${o(s.name||"")}', '${o(s.email||"")}', '${o(c)}')"
                    title="Edit Profil Staf & HR"
                    class="w-10 h-10 rounded-xl flex items-center justify-center text-xs bg-slate-50 hover:bg-slate-100 dark:bg-slate-700/80 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 hover:text-[var(--color-primary)] border border-slate-200/80 dark:border-slate-700 transition-all active:scale-95 cursor-pointer shadow-2xs shrink-0">
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button onclick="window.deleteStaffAccount('${o(n)}', '${o(s.name||"Staf")}')"
                    title="Hapus Akun Staf"
                    class="w-10 h-10 rounded-xl flex items-center justify-center text-xs bg-slate-50 hover:bg-rose-50 dark:bg-slate-700/80 dark:hover:bg-rose-950/40 text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 border border-slate-200/80 dark:border-slate-700 hover:border-rose-200 transition-all active:scale-95 cursor-pointer shadow-2xs shrink-0">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        </div>`}).join("");a.innerHTML=`<div class="space-y-2.5">${t}</div>
    <p class="text-center text-[10px] text-slate-400 mt-3 font-medium">${e.length} staf terdaftar</p>`},z=async()=>{const a=l("cashier-list-container");if(a)try{let e;try{e=await S.collection("freshmart").doc("cms_data").collection("cashier_accounts").orderBy("createdAt","desc").get()}catch{e=await S.collection("freshmart").doc("cms_data").collection("cashier_accounts").get()}E=e.docs.map((s,r)=>{const n=s.data()||{};return{uid:s.id,...ee({uid:s.id,...n},r)}});const t=E.some(s=>s.isActive!==!1&&s.role===g.CASHIER);try{localStorage.setItem("pos_has_cashier",t?"true":"false"),await S.collection("freshmart").doc("cms_data").set({hasCashier:t},{merge:!0})}catch{}typeof window.updatePOSHeaderIcon=="function"&&window.updatePOSHeaderIcon();try{const s=await S.collection("freshmart").doc("cms_data").get();s.exists&&s.data()?.ownerEmployee&&(f.ownerEmployee=s.data().ownerEmployee)}catch{}f.employees=E.map((s,r)=>ee(s,r)),Te()}catch(e){console.error("[StaffAdmin] Gagal memuat daftar staf:",e),a.innerHTML=`
        <div class="text-center py-10 p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 flex flex-col items-center justify-center">
            <div class="w-12 h-12 rounded-2xl bg-rose-50 dark:bg-rose-950/40 text-rose-500 flex items-center justify-center text-2xl mb-2.5 shadow-2xs">
                <i class="fa-solid fa-triangle-exclamation"></i>
            </div>
            <p class="text-xs font-bold text-slate-700 dark:text-slate-300">Gagal memuat data staf</p>
            <p class="text-[11px] text-slate-400 mt-0.5">${o(e.message||"Periksa koneksi internet atau login admin")}</p>
            <button onclick="window.loadStaffList()" class="mt-3 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 transition-all cursor-pointer inline-flex items-center gap-1.5 active:scale-95">
                <i class="fa-solid fa-arrows-rotate text-[10px]"></i>
                <span>Coba Lagi</span>
            </button>
        </div>`}},je=()=>{if(!P("mendaftarkan staf baru"))return;const a=ie(E,"EMP"),e=(t,s,r)=>{const n=V.filter(d=>d.group===t);return`
        <div class="space-y-2">
            <p class="text-[11px] font-black uppercase tracking-wider text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                <i class="fa-solid ${r} text-[var(--color-primary)]"></i>
                <span>${s}</span>
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                ${n.map(d=>`
                <label class="flex items-start gap-2.5 p-2.5 rounded-xl border border-slate-200/80 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-800/60 hover:bg-white dark:hover:bg-slate-800 transition-all cursor-pointer text-left">
                    <input type="checkbox" name="staff_perm" value="${d.key}" class="mt-0.5 rounded border-slate-300 text-[var(--color-primary)] focus:ring-[var(--color-primary)]/30">
                    <div class="min-w-0">
                        <p class="text-xs font-bold text-slate-800 dark:text-white flex items-center gap-1.5">
                            <i class="fa-solid ${d.icon} text-[10px] text-slate-400"></i>
                            <span>${d.label}</span>
                        </p>
                        <p class="text-[10px] text-slate-400 dark:text-slate-500 leading-tight mt-0.5">${d.desc}</p>
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
            <div class="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 shrink-0"
                style="background: linear-gradient(135deg, rgba(var(--color-primary-rgb), 0.08) 0%, rgba(var(--color-primary-rgb), 0.02) 100%)">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-sm shadow-2xs border border-[rgba(var(--color-primary-rgb),0.25)]"
                        style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary)">
                        <i class="fa-solid fa-user-plus"></i>
                    </div>
                    <div>
                        <h3 class="font-black text-sm text-slate-900 dark:text-white">Daftarkan Staf &amp; Karyawan Baru</h3>
                        <p class="text-[11px] text-slate-400">Buat akun untuk kasir, admin, atau staf gudang/operasional</p>
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
                        <input id="new-staff-name" type="text" placeholder="Contoh: Rina Kasir / Budi Gudang"
                            autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
                            class="w-full border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3 text-sm bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] text-slate-900 dark:text-white transition-all shadow-inner font-bold">
                    </div>
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Email Login <span class="text-rose-500">*</span></label>
                        <input id="new-staff-email" type="email" placeholder="staf@tokoputri.com"
                            autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
                            class="w-full border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3 text-sm bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] text-slate-900 dark:text-white transition-all shadow-inner">
                    </div>
                </div>

                <div>
                    <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Password Staf (Min. 6 Karakter) <span class="text-rose-500">*</span></label>
                    <div class="relative">
                        <input id="new-staff-pass" type="password" placeholder="Minimal 6 karakter..."
                            autocomplete="new-password" autocorrect="off" autocapitalize="off" spellcheck="false"
                            class="w-full border border-slate-200 dark:border-slate-700 rounded-2xl pl-4 pr-12 py-3 text-sm bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] text-slate-900 dark:text-white transition-all shadow-inner">
                        <button type="button" onclick="window.toggleStaffPassVisibility('new-staff-pass')"
                            class="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer p-1">
                            <i id="new-staff-pass-eye" class="fa-solid fa-eye text-sm"></i>
                        </button>
                    </div>
                </div>

                <!-- Pilihan Role Pokok (4 Kolom Responsif) -->
                <div>
                    <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Role Pokok Sistem <span class="text-rose-500">*</span></label>
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        <label class="flex flex-col items-center justify-center p-3 rounded-2xl border-2 border-emerald-500/40 bg-emerald-50/50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-200 cursor-pointer hover:border-emerald-500 transition-all text-center">
                            <input type="radio" name="new_staff_role" value="${g.CASHIER}" checked onchange="window.applyNewStaffPreset('${g.CASHIER}')" class="sr-only">
                            <i class="fa-solid fa-cash-register text-lg mb-1 text-emerald-600"></i>
                            <span class="text-xs font-black">Kasir POS</span>
                            <span class="text-[9px] text-slate-400 mt-0.5">Penjualan Fisik</span>
                        </label>
                        <label class="flex flex-col items-center justify-center p-3 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 cursor-pointer hover:border-blue-500 transition-all text-center">
                            <input type="radio" name="new_staff_role" value="${g.ADMIN}" onchange="window.applyNewStaffPreset('${g.ADMIN}')" class="sr-only">
                            <i class="fa-solid fa-shield-halved text-lg mb-1 text-blue-500"></i>
                            <span class="text-xs font-black">Admin Toko</span>
                            <span class="text-[9px] text-slate-400 mt-0.5">Operasional CMS</span>
                        </label>
                        <label class="flex flex-col items-center justify-center p-3 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 cursor-pointer hover:border-amber-500 transition-all text-center">
                            <input type="radio" name="new_staff_role" value="${g.STAFF}" onchange="window.applyNewStaffPreset('${g.STAFF}')" class="sr-only">
                            <i class="fa-solid fa-user-gear text-lg mb-1 text-amber-500"></i>
                            <span class="text-xs font-black">Staf Gudang</span>
                            <span class="text-[9px] text-slate-400 mt-0.5">Logistik &amp; Bantu</span>
                        </label>
                        <label class="flex flex-col items-center justify-center p-3 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 cursor-pointer hover:border-[var(--color-primary)] transition-all text-center">
                            <input type="radio" name="new_staff_role" value="manager" onchange="window.applyNewStaffPreset('manager')" class="sr-only">
                            <i class="fa-solid fa-user-tie text-lg mb-1" style="color: var(--color-primary)"></i>
                            <span class="text-xs font-black">Manajer</span>
                            <span class="text-[9px] text-slate-400 mt-0.5">Akses Luas</span>
                        </label>
                    </div>
                </div>

                <!-- Bagian Master Profil & Struktur Kompensasi HR -->
                <div class="border-t border-slate-100 dark:border-slate-800 pt-3 space-y-3">
                    <div class="flex items-center justify-between">
                        <div>
                            <h4 class="text-xs font-black text-slate-900 dark:text-white flex items-center gap-1.5">
                                <i class="fa-solid fa-id-card-clip text-[var(--color-primary)]"></i>
                                <span>Profil Kepegawaian &amp; Struktur Kompensasi</span>
                            </h4>
                            <p class="text-[10px] text-slate-400">ID karyawan resmi, jabatan terstandarisasi, gaji pokok &amp; rekening pencairan</p>
                        </div>
                        <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 font-bold border border-emerald-200 dark:border-emerald-800/60">
                            Master HR
                        </span>
                    </div>

                    <!-- Datalist Jabatan Terstandar -->
                    <datalist id="staff-positions-datalist">
                        ${oe.map(t=>`<option value="${o(t.label||t)}"></option>`).join("")}
                    </datalist>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div>
                            <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">ID Karyawan</label>
                            <input id="new-staff-empid" type="text" value="${o(a)}" placeholder="EMP-001"
                                class="w-full border border-slate-200 dark:border-slate-700 rounded-2xl px-3.5 py-2.5 text-xs bg-slate-50 dark:bg-slate-800/70 font-mono font-bold text-slate-800 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)]">
                        </div>
                        <div>
                            <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Jabatan Resmi <span class="text-rose-500">*</span></label>
                            <input id="new-staff-position" list="staff-positions-datalist" type="text" value="Kasir POS" placeholder="Pilih / ketik jabatan..."
                                class="w-full border border-slate-200 dark:border-slate-700 rounded-2xl px-3.5 py-2.5 text-xs bg-white dark:bg-slate-800 font-bold text-slate-900 dark:text-white focus:outline-none focus:border-[var(--color-primary)] shadow-inner">
                        </div>
                        <div>
                            <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">No. WhatsApp / HP</label>
                            <input id="new-staff-phone" type="tel" placeholder="081234567890"
                                class="w-full border border-slate-200 dark:border-slate-700 rounded-2xl px-3.5 py-2.5 text-xs bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-[var(--color-primary)] shadow-inner">
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                            <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Gaji Pokok Bulanan (Rp) <span class="text-rose-500">*</span></label>
                            <input id="new-staff-salary" type="number" min="0" step="50000" value="2500000" placeholder="2500000"
                                class="w-full border border-slate-200 dark:border-slate-700 rounded-2xl px-3.5 py-2.5 text-xs bg-white dark:bg-slate-800 font-bold text-emerald-600 dark:text-emerald-400 focus:outline-none focus:border-[var(--color-primary)] shadow-inner">
                        </div>
                        <div>
                            <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Tunjangan Harian / Uang Makan (Rp/Hari)</label>
                            <input id="new-staff-allowance" type="number" min="0" step="5000" value="20000" placeholder="20000"
                                class="w-full border border-slate-200 dark:border-slate-700 rounded-2xl px-3.5 py-2.5 text-xs bg-white dark:bg-slate-800 font-bold text-slate-800 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)] shadow-inner">
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                            <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Status Hubungan Kerja</label>
                            <select id="new-staff-status" class="w-full border border-slate-200 dark:border-slate-700 rounded-2xl px-3 py-2.5 text-xs bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold focus:outline-none focus:border-[var(--color-primary)] shadow-inner">
                                ${le.map(t=>`<option value="${t.key}">${o(t.label)}</option>`).join("")}
                            </select>
                        </div>
                        <div>
                            <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Metode Pencairan Gaji</label>
                            <select id="new-staff-payment-method" class="w-full border border-slate-200 dark:border-slate-700 rounded-2xl px-3 py-2.5 text-xs bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold focus:outline-none focus:border-[var(--color-primary)] shadow-inner">
                                ${ne.map(t=>`<option value="${t.key}">${o(t.label)}</option>`).join("")}
                            </select>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                            <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Nomor Rekening Bank</label>
                            <input id="new-staff-bank-account" type="text" placeholder="Contoh: 1234567890 (atau '-' jika tunai)"
                                class="w-full border border-slate-200 dark:border-slate-700 rounded-2xl px-3.5 py-2.5 text-xs bg-white dark:bg-slate-800 font-mono text-slate-800 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)] shadow-inner">
                        </div>
                        <div>
                            <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Atas Nama Rekening</label>
                            <input id="new-staff-bank-holder" type="text" placeholder="Sesuai buku tabungan..."
                                class="w-full border border-slate-200 dark:border-slate-700 rounded-2xl px-3.5 py-2.5 text-xs bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)] shadow-inner">
                        </div>
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

                    ${e("operasional","1. Operasional Toko","fa-dolly")}
                    ${e("konten","2. Katalog & Konten Toko","fa-layer-group")}
                    ${e("sensitif","3. Finansial & Pengaturan Sensitif (Khusus Owner)","fa-lock")}
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
    </div>`),window.applyNewStaffPreset(g.CASHIER),typeof window.pushModalHistory=="function"&&window.pushModalHistory("addStaff"),setTimeout(()=>{const t=l("add-staff-modal-box");t&&t.classList.remove("scale-95");const s=l("new-staff-name");s&&s.focus()},10)},be=(a=!1)=>{const e=()=>{const t=l("add-staff-modal");if(t){const s=l("new-staff-name");s&&(s.value="");const r=l("new-staff-email");r&&(r.value="");const n=l("new-staff-pass");n&&(n.value=""),t.style.opacity="0",setTimeout(()=>t.remove(),200)}};typeof window.requestCloseModal=="function"?window.requestCloseModal("addStaff",a,e):e()},ka=a=>{const e=U[a]||U[g.CASHIER];document.querySelectorAll('#add-staff-modal input[name="staff_perm"]').forEach(r=>{r.checked=!!e[r.value]}),document.querySelectorAll('#add-staff-modal input[name="new_staff_role"]').forEach(r=>{const n=r.closest("label");n&&(r.value===a?n.className="flex flex-col items-center justify-center p-3 rounded-2xl border-2 border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.08)] text-slate-900 dark:text-white cursor-pointer shadow-xs transition-all text-center":n.className="flex flex-col items-center justify-center p-3 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 cursor-pointer hover:border-slate-300 transition-all text-center")});const t=l("new-staff-position"),s=oe.map(r=>r.label||r);t&&(!t.value||s.includes(t.value))&&(a===g.STAFF?t.value="Staf Gudang & Penataan Rak":a===g.ADMIN?t.value="Admin Operasional & Inventori":a==="manager"?t.value="Kepala Toko / Manager":t.value="Kasir POS")},va=a=>{document.querySelectorAll('#add-staff-modal input[name="staff_perm"]').forEach(e=>{e.checked=!!a})},Re=async()=>{if(!P("mendaftarkan staf baru"))return;const a=l("new-staff-name")?.value?.trim()||"",e=l("new-staff-email")?.value?.trim()||"",t=l("new-staff-pass")?.value||"",s=document.querySelector('#add-staff-modal input[name="new_staff_role"]:checked'),r=s?s.value:g.CASHIER,n=r==="manager"?g.ADMIN:r,d=l("new-staff-empid")?.value?.trim()||ie(E,"EMP"),i=l("new-staff-position")?.value?.trim()||(n===g.STAFF?"Staf Gudang & Logistik":n===g.ADMIN?"Admin Operasional":"Kasir POS"),m=l("new-staff-phone")?.value?.trim()||"",c=Math.max(0,parseFloat(l("new-staff-salary")?.value)||0),p=Math.max(0,parseFloat(l("new-staff-allowance")?.value)||0),b=l("new-staff-status")?.value||"permanent",k=l("new-staff-payment-method")?.value||"cash",v=l("new-staff-bank-account")?.value?.trim()||"-",u=l("new-staff-bank-holder")?.value?.trim()||a,w=k==="cash"?"Tunai Kas Laci Toko":k.toUpperCase()||"Bank",$=l("add-staff-error"),h=l("save-staff-btn"),y=M=>{$&&($.textContent=M,$.classList.remove("hidden"))};if((()=>{$&&$.classList.add("hidden")})(),!a){y("Nama staf wajib diisi.");return}if(!e||!e.includes("@")){y("Email login tidak valid.");return}if(t.length<6){y("Password minimal 6 karakter.");return}const H={};V.forEach(M=>{const I=document.querySelector(`#add-staff-modal input[name="staff_perm"][value="${M.key}"]`);H[M.key]=I?I.checked:!1}),h&&(h.disabled=!0,h.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i>Mendaftarkan ke Firebase...'),C("Mendaftarkan akun staf...");try{const I=(j.apps.find(ue=>ue.name==="pos-cashier-creator")||j.initializeApp(window.FIREBASE_CONFIG||j.app().options,"pos-cashier-creator")).auth(),K=(await I.createUserWithEmailAndPassword(e,t)).user?.uid;if(!K)throw new Error("UID tidak diterima dari Firebase");if(await I.signOut(),await S.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(K).set({uid:K,employeeId:d,name:a,email:e,phone:m,role:n,position:i,baseSalary:c,dailyAllowance:p,employmentStatus:b,paymentMethod:k,bankName:w,bankAccount:v,bankHolder:u,permissions:H,isActive:!0,createdAt:j.firestore.FieldValue.serverTimestamp(),createdBy:J.currentUser?.uid||"owner"}),n===g.CASHIER)try{localStorage.setItem("pos_has_cashier","true"),await S.collection("freshmart").doc("cms_data").set({hasCashier:!0},{merge:!0})}catch{}const Z=l("new-staff-pass");Z&&(Z.value="");const xe=l("new-staff-name");xe&&(xe.value="");const fe=l("new-staff-email");fe&&(fe.value=""),be(),A(`Akun "${a}" (${n.toUpperCase()}) berhasil didaftarkan!`,"success"),await z(),typeof window.updatePOSHeaderIcon=="function"&&window.updatePOSHeaderIcon()}catch(M){console.error("[StaffAdmin] Gagal membuat akun staf:",M);const I=M.code==="permission-denied"||M.message&&M.message.toLowerCase().includes("permission"),T=M.code||"";y(I?"Akses Ditolak Firebase: Hanya akun Owner yang berwenang menambahkan staf ke Firestore.":T==="auth/email-already-in-use"?"Email sudah digunakan oleh akun lain di Firebase.":T==="auth/invalid-email"?"Format email tidak valid.":T==="auth/weak-password"?"Password terlalu lemah (min. 6 karakter).":"Gagal mendaftarkan: "+(M.message||"Terjadi kesalahan sistem")),h&&(h.disabled=!1,h.innerHTML='<i class="fa-solid fa-floppy-disk mr-2"></i>Simpan &amp; Daftarkan Staf')}finally{O()}},ya=a=>{if(!P("mengatur hak akses staf"))return;const e=E.find(r=>r.uid===a);if(!e){A("Data staf tidak ditemukan!");return}const t=e.permissions||U[e.role]||U[g.CASHIER],s=(r,n,d)=>{const i=V.filter(m=>m.group===r);return`
        <div class="space-y-2">
            <p class="text-[11px] font-black uppercase tracking-wider text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                <i class="fa-solid ${d} text-[var(--color-primary)]"></i>
                <span>${n}</span>
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                ${i.map(m=>{const c=t[m.key]===!0;return`
                    <label class="flex items-start gap-2.5 p-2.5 rounded-xl border border-slate-200/80 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-800/60 hover:bg-white dark:hover:bg-slate-800 transition-all cursor-pointer text-left">
                        <input type="checkbox" name="edit_staff_perm" value="${m.key}" ${c?"checked":""} class="mt-0.5 rounded border-slate-300 text-[var(--color-primary)] focus:ring-[var(--color-primary)]/30">
                        <div class="min-w-0">
                            <p class="text-xs font-bold text-slate-800 dark:text-white flex items-center gap-1.5">
                                <i class="fa-solid ${m.icon} text-[10px] text-slate-400"></i>
                                <span>${m.label}</span>
                            </p>
                            <p class="text-[10px] text-slate-400 dark:text-slate-500 leading-tight mt-0.5">${m.desc}</p>
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
            <div class="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 shrink-0"
                style="background: linear-gradient(135deg, rgba(var(--color-primary-rgb), 0.08) 0%, rgba(var(--color-primary-rgb), 0.02) 100%)">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-sm shadow-2xs text-white"
                        style="background: var(--color-primary)">
                        <i class="fa-solid fa-sliders"></i>
                    </div>
                    <div>
                        <h3 class="font-black text-sm text-slate-900 dark:text-white">Atur Hak Akses: ${o(e.name||"Staf")}</h3>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400">Sesuaikan modul yang boleh dibuka oleh akun ini</p>
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
                        <button type="button" onclick="window.applyEditStaffPreset('${g.CASHIER}')" class="py-2.5 px-2 rounded-xl text-xs font-bold bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 hover:border-emerald-500 hover:text-emerald-600 transition-all active:scale-95 shadow-2xs flex items-center justify-center gap-1.5">
                            <i class="fa-solid fa-cash-register text-[11px] text-emerald-500"></i>
                            <span>Kasir POS</span>
                        </button>
                        <button type="button" onclick="window.applyEditStaffPreset('${g.ADMIN}')" class="py-2.5 px-2 rounded-xl text-xs font-bold bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 hover:border-blue-500 hover:text-blue-600 transition-all active:scale-95 shadow-2xs flex items-center justify-center gap-1.5">
                            <i class="fa-solid fa-shield-halved text-[11px] text-blue-500"></i>
                            <span>Admin Ops</span>
                        </button>
                        <button type="button" onclick="window.applyEditStaffPreset('manager')" class="py-2.5 px-2 rounded-xl text-xs font-bold bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all active:scale-95 shadow-2xs flex items-center justify-center gap-1.5">
                            <i class="fa-solid fa-user-tie text-[11px]" style="color: var(--color-primary)"></i>
                            <span>Manajer</span>
                        </button>
                        <button type="button" onclick="window.applyEditStaffPreset('${g.OWNER}')" class="py-2.5 px-2 rounded-xl text-xs font-bold bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 hover:border-amber-500 hover:text-amber-600 transition-all active:scale-95 shadow-2xs flex items-center justify-center gap-1.5">
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
                <button onclick="window.saveStaffPermissions('${o(a)}')" id="save-perms-btn"
                    class="flex-[2] min-h-[48px] py-3.5 rounded-2xl text-white font-black text-sm shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    style="background:var(--color-primary)">
                    <i class="fa-solid fa-floppy-disk"></i> Simpan Hak Akses
                </button>
            </div>
        </div>
    </div>`),typeof window.pushModalHistory=="function"&&window.pushModalHistory("permissions"),setTimeout(()=>{const r=l("permissions-modal-box");r&&r.classList.remove("scale-95")},10)},De=(a=!1)=>{const e=()=>{const t=l("permissions-modal");t&&(t.style.opacity="0",setTimeout(()=>t.remove(),200))};typeof window.requestCloseModal=="function"?window.requestCloseModal("permissions",a,e):e()},wa=a=>{const e=U[a]||U[g.CASHIER];document.querySelectorAll('#permissions-modal input[name="edit_staff_perm"]').forEach(t=>{t.checked=!!e[t.value]})},ha=a=>{document.querySelectorAll('#permissions-modal input[name="edit_staff_perm"]').forEach(e=>{e.checked=!!a})},Aa=async a=>{if(!P("mengubah hak akses staf"))return;const e=l("save-perms-btn");e&&(e.disabled=!0,e.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i>Menyimpan...'),C("Memperbarui hak akses...");try{const t={};V.forEach(r=>{const n=document.querySelector(`#permissions-modal input[name="edit_staff_perm"][value="${r.key}"]`);t[r.key]=n?n.checked:!1});let s=g.CASHIER;(t.orders||t.products||t.suppliers||t.purchases)&&(s=g.ADMIN),await S.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(a).set({permissions:t,role:s,updatedAt:j.firestore.FieldValue.serverTimestamp()},{merge:!0}),De(),A("Hak akses berhasil diperbarui!","success"),await z()}catch(t){console.error("[StaffAdmin] Gagal menyimpan hak akses:",t),t.code==="permission-denied"||t.message&&t.message.toLowerCase().includes("permission")?A("Izin Ditolak Firebase: Pastikan login dengan Akun Owner dan aturan firestore.rules sudah dipublikasikan di Firebase Console.","error"):A("Gagal memperbarui hak akses: "+(t.message||"Terjadi kesalahan sistem"),"error"),e&&(e.disabled=!1,e.innerHTML='<i class="fa-solid fa-floppy-disk mr-2"></i>Simpan Hak Akses')}finally{O()}},He=(a,e,t,s)=>{if(!P("mengubah profil staf"))return;const r=E.find(y=>y.uid===a)||{},n=e||r.name||"",d=t||r.email||"",i=s||r.role||g.CASHIER,m=r.employeeId||"EMP-001",c=r.position||(i===g.CASHIER?"Kasir POS":i===g.ADMIN?"Admin Operasional":"Staf Gudang & Logistik"),p=r.phone||"",b=r.baseSalary||0,k=r.dailyAllowance||0,v=r.employmentStatus||"permanent",u=r.paymentMethod||"cash",w=r.bankName||"BCA",$=r.bankAccount&&r.bankAccount!=="-"?r.bankAccount:"",h=r.bankHolder||n;document.body.insertAdjacentHTML("beforeend",`
    <div id="edit-staff-modal" class="fixed inset-0 z-[9990] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/75"
        onclick="if(event.target===this) window.closeEditStaffModal()">
        <div class="bg-white dark:bg-slate-900 rounded-t-[2rem] sm:rounded-3xl shadow-2xl w-full max-w-xl flex flex-col max-h-[92vh] sm:max-h-[90vh] overflow-hidden scale-95 transition-transform duration-300 border border-slate-200 dark:border-slate-800" id="edit-staff-modal-box">
            <!-- Mobile Drag Handle -->
            <div class="sm:hidden w-12 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full mx-auto mt-2.5 mb-1 shrink-0"></div>
            <div class="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 shrink-0"
                style="background: linear-gradient(135deg, rgba(var(--color-primary-rgb), 0.08) 0%, rgba(var(--color-primary-rgb), 0.02) 100%)">
                <div class="flex items-center gap-2.5">
                    <div class="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-black shadow-2xs border border-[rgba(var(--color-primary-rgb),0.25)]"
                        style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary)">
                        <i class="fa-solid fa-user-pen"></i>
                    </div>
                    <div>
                        <h3 class="font-black text-sm text-slate-900 dark:text-white flex items-center gap-2">
                            <span>Edit Profil &amp; HR Staf</span>
                            <span class="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">${o(m)}</span>
                        </h3>
                        <p class="text-[11px] text-slate-400">Perbarui data personal, peran, kompensasi &amp; rekening</p>
                    </div>
                </div>
                <button onclick="window.closeEditStaffModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 flex items-center justify-center hover:bg-rose-50 hover:text-rose-500 transition-all active:scale-90 cursor-pointer">
                    <i class="fa-solid fa-xmark text-sm"></i>
                </button>
            </div>

            <div class="p-4 sm:p-5 space-y-3.5 overflow-y-auto flex-1 custom-scrollbar">
                <!-- Datalist Jabatan Terstandar -->
                <datalist id="edit-staff-positions-datalist">
                    ${oe.map(y=>`<option value="${o(y.label||y)}"></option>`).join("")}
                </datalist>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Nama Staf <span class="text-rose-500">*</span></label>
                        <input id="edit-staff-name" type="text" value="${o(n)}"
                            autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
                            class="w-full border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3 text-sm bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] text-slate-900 dark:text-white transition-all shadow-inner font-bold">
                    </div>
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Role Pokok Sistem</label>
                        <select id="edit-staff-role" class="w-full border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3 text-sm bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] text-slate-900 dark:text-white transition-all shadow-inner font-bold">
                            <option value="${g.CASHIER}" ${i===g.CASHIER?"selected":""}>Kasir POS (Penjualan)</option>
                            <option value="${g.ADMIN}" ${i===g.ADMIN?"selected":""}>Admin Toko (Operasional CMS)</option>
                            <option value="${g.STAFF}" ${i===g.STAFF?"selected":""}>Staf Gudang &amp; Logistik</option>
                            <option value="${g.OWNER}" ${i===g.OWNER?"selected":""}>Co-Owner / Wakil Owner</option>
                        </select>
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">ID Karyawan</label>
                        <input id="edit-staff-empid" type="text" value="${o(m)}"
                            class="w-full border border-slate-200 dark:border-slate-700 rounded-2xl px-3.5 py-2.5 text-xs bg-slate-50 dark:bg-slate-800/70 font-mono font-bold text-slate-800 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)]">
                    </div>
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Jabatan Resmi</label>
                        <input id="edit-staff-position" list="edit-staff-positions-datalist" type="text" value="${o(c)}"
                            class="w-full border border-slate-200 dark:border-slate-700 rounded-2xl px-3.5 py-2.5 text-xs bg-white dark:bg-slate-800 font-bold text-slate-900 dark:text-white focus:outline-none focus:border-[var(--color-primary)] shadow-inner">
                    </div>
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">No. WhatsApp / HP</label>
                        <input id="edit-staff-phone" type="tel" value="${o(p)}" placeholder="081234567890"
                            class="w-full border border-slate-200 dark:border-slate-700 rounded-2xl px-3.5 py-2.5 text-xs bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-[var(--color-primary)] shadow-inner">
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Gaji Pokok Bulanan (Rp)</label>
                        <input id="edit-staff-salary" type="number" min="0" step="50000" value="${b}"
                            class="w-full border border-slate-200 dark:border-slate-700 rounded-2xl px-3.5 py-2.5 text-xs bg-white dark:bg-slate-800 font-bold text-emerald-600 dark:text-emerald-400 focus:outline-none focus:border-[var(--color-primary)] shadow-inner">
                    </div>
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Tunjangan Harian / Uang Makan (Rp/Hari)</label>
                        <input id="edit-staff-allowance" type="number" min="0" step="5000" value="${k}"
                            class="w-full border border-slate-200 dark:border-slate-700 rounded-2xl px-3.5 py-2.5 text-xs bg-white dark:bg-slate-800 font-bold text-slate-800 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)] shadow-inner">
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Status Hubungan Kerja</label>
                        <select id="edit-staff-status" class="w-full border border-slate-200 dark:border-slate-700 rounded-2xl px-3 py-2.5 text-xs bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold focus:outline-none focus:border-[var(--color-primary)] shadow-inner">
                            ${le.map(y=>`<option value="${y.key}" ${v===y.key?"selected":""}>${o(y.label)}</option>`).join("")}
                        </select>
                    </div>
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Metode Bayar Gaji</label>
                        <select id="edit-staff-payment-method" class="w-full border border-slate-200 dark:border-slate-700 rounded-2xl px-3 py-2.5 text-xs bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold focus:outline-none focus:border-[var(--color-primary)] shadow-inner">
                            ${ne.map(y=>`<option value="${y.key}" ${u===y.key?"selected":""}>${o(y.label)}</option>`).join("")}
                        </select>
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Bank</label>
                        <input id="edit-staff-bank-name" type="text" value="${o(w)}" placeholder="BCA / BRI"
                            class="w-full border border-slate-200 dark:border-slate-700 rounded-2xl px-3.5 py-2.5 text-xs bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)] shadow-inner">
                    </div>
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">No. Rekening</label>
                        <input id="edit-staff-bank-account" type="text" value="${o($)}" placeholder="1234567890"
                            class="w-full border border-slate-200 dark:border-slate-700 rounded-2xl px-3.5 py-2.5 text-xs bg-white dark:bg-slate-800 font-mono text-slate-800 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)] shadow-inner">
                    </div>
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Atas Nama Rekening</label>
                        <input id="edit-staff-bank-holder" type="text" value="${o(h)}" placeholder="Nama Pemilik"
                            class="w-full border border-slate-200 dark:border-slate-700 rounded-2xl px-3.5 py-2.5 text-xs bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)] shadow-inner">
                    </div>
                </div>

                <div>
                    <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Email Login (Permanen)</label>
                    <input type="email" value="${o(d)}" disabled
                        class="w-full border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3 text-sm bg-slate-50 dark:bg-slate-800/50 text-slate-400 cursor-not-allowed">
                </div>
                <div id="edit-staff-error" class="hidden text-xs text-rose-600 font-semibold p-2.5 bg-rose-50 dark:bg-rose-900/20 rounded-2xl border border-rose-200 dark:border-rose-800"></div>
            </div>

            <div class="p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800 flex gap-3 shrink-0 bg-slate-50/50 dark:bg-slate-900/50 pb-[max(1rem,env(safe-area-inset-bottom))]">
                <button onclick="window.closeEditStaffModal()"
                    class="flex-1 min-h-[48px] py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-slate-100 active:scale-95 transition-all cursor-pointer">
                    Batal
                </button>
                <button onclick="window.updateStaffProfile('${o(a)}')" id="update-staff-btn"
                    class="flex-[2] min-h-[48px] py-3.5 rounded-2xl text-white font-black text-sm shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    style="background:var(--color-primary)">
                    <i class="fa-solid fa-floppy-disk"></i> Simpan Profil &amp; HR
                </button>
            </div>
        </div>
    </div>`),typeof window.pushModalHistory=="function"&&window.pushModalHistory("editStaff"),setTimeout(()=>{const y=l("edit-staff-modal-box");y&&y.classList.remove("scale-95")},10)},me=(a=!1)=>{const e=()=>{const t=l("edit-staff-modal");t&&(t.style.opacity="0",setTimeout(()=>t.remove(),200))};typeof window.requestCloseModal=="function"?window.requestCloseModal("editStaff",a,e):e()},$a=async a=>{if(!P("mengubah profil staf"))return;const e=l("edit-staff-name")?.value?.trim()||"",t=l("edit-staff-role")?.value||g.CASHIER,s=l("edit-staff-empid")?.value?.trim()||"EMP-001",r=l("edit-staff-position")?.value?.trim()||"Staf Toko",n=l("edit-staff-phone")?.value?.trim()||"",d=Math.max(0,parseFloat(l("edit-staff-salary")?.value)||0),i=Math.max(0,parseFloat(l("edit-staff-allowance")?.value)||0),m=l("edit-staff-status")?.value||"permanent",c=l("edit-staff-payment-method")?.value||"cash",p=l("edit-staff-bank-name")?.value?.trim()||(c==="cash"?"Tunai Kas Laci Toko":c.toUpperCase()||"Bank"),b=l("edit-staff-bank-account")?.value?.trim()||"-",k=l("edit-staff-bank-holder")?.value?.trim()||e,v=l("edit-staff-error"),u=l("update-staff-btn");if(!e){v&&(v.textContent="Nama staf tidak boleh kosong.",v.classList.remove("hidden"));return}u&&(u.disabled=!0,u.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i>Menyimpan...'),C("Memperbarui profil staf...");try{await S.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(a).set({name:e,role:t,employeeId:s,position:r,phone:n,baseSalary:d,dailyAllowance:i,employmentStatus:m,paymentMethod:c,bankName:p,bankAccount:b,bankHolder:k,updatedAt:j.firestore.FieldValue.serverTimestamp()},{merge:!0}),me(),A("Profil staf & data HR berhasil diperbarui!","success"),await z()}catch(w){const h=w.code==="permission-denied"||w.message&&w.message.toLowerCase().includes("permission")?"Izin ditolak oleh Firebase (Khusus Akun Owner).":w.message;v&&(v.textContent="Gagal memperbarui: "+h,v.classList.remove("hidden")),u&&(u.disabled=!1,u.innerHTML='<i class="fa-solid fa-floppy-disk mr-2"></i>Simpan')}finally{O()}},Sa=()=>{if(!P("mengatur profil dan gaji owner"))return;const a=ae(f),e=l("modal-owner-hr");e&&e.remove(),document.body.insertAdjacentHTML("beforeend",`
    <div id="modal-owner-hr" class="fixed inset-0 z-[9990] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/75"
        onclick="if(event.target===this) window.closeOwnerHrModal()">
        <div class="bg-white dark:bg-slate-900 rounded-t-[2rem] sm:rounded-3xl shadow-2xl w-full max-w-xl flex flex-col max-h-[92vh] sm:max-h-[90vh] overflow-hidden scale-95 transition-transform duration-300 border border-slate-200 dark:border-slate-800" id="owner-hr-modal-box">
            <!-- Mobile Drag Handle -->
            <div class="sm:hidden w-12 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full mx-auto mt-2.5 mb-1 shrink-0"></div>
            <!-- Modal Header -->
            <div class="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 shrink-0"
                style="background: linear-gradient(135deg, rgba(var(--color-primary-rgb), 0.08) 0%, rgba(var(--color-primary-rgb), 0.02) 100%)">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-sm shadow-md text-white"
                        style="background: var(--color-primary)">
                        <i class="fa-solid fa-crown text-amber-300"></i>
                    </div>
                    <div>
                        <h3 class="font-black text-sm text-slate-900 dark:text-white flex items-center gap-2">
                            <span>Atur Kompensasi &amp; HR Owner</span>
                            <span class="text-[10px] font-mono px-2 py-0.5 rounded-md font-bold"
                                style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);">OWN-001</span>
                        </h3>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400">Gaji resmi pemilik toko terpisah dari laba usaha (Tata Kelola Modern)</p>
                    </div>
                </div>
                <button onclick="window.closeOwnerHrModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 flex items-center justify-center hover:bg-rose-50 hover:text-rose-500 transition-all active:scale-90 cursor-pointer">
                    <i class="fa-solid fa-xmark text-sm"></i>
                </button>
            </div>

            <!-- Modal Body (Scrollable) -->
            <div class="p-5 space-y-4 overflow-y-auto flex-1 custom-scrollbar">
                <div class="p-3.5 rounded-2xl text-xs flex items-start gap-2.5 text-slate-800 dark:text-slate-200"
                    style="background: rgba(var(--color-primary-rgb), 0.06); border: 1px solid rgba(var(--color-primary-rgb), 0.2);">
                    <i class="fa-solid fa-lightbulb text-amber-500 text-sm mt-0.5 shrink-0"></i>
                    <p class="leading-relaxed">
                        <strong>Standar Akuntansi &amp; Bisnis Sehat:</strong> Pemilik toko berhak menerima gaji bulanan tetap sebagai pengelola operasional. Biaya ini tercatat resmi di beban operasional dan laporan perpajakan usaha toko.
                    </p>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Nomor ID Karyawan Owner</label>
                        <input id="owner-hr-empid" type="text" value="${o(a.employeeId||"OWN-001")}"
                            class="w-full min-h-[44px] border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 text-[16px] sm:text-sm bg-slate-100 dark:bg-slate-800 text-slate-500 font-mono font-bold cursor-not-allowed" readonly>
                    </div>
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Nama Pemilik / Direktur <span class="text-rose-500">*</span></label>
                        <input id="owner-hr-name" type="text" value="${o(a.name||"Pemilik Toko")}"
                            class="w-full min-h-[44px] border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 text-[16px] sm:text-sm bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] text-slate-900 dark:text-white font-bold transition-all shadow-inner">
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Jabatan Resmi</label>
                        <input id="owner-hr-position" type="text" value="${o(a.position||"Owner / Direktur Utama")}"
                            class="w-full min-h-[44px] border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 text-[16px] sm:text-sm bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] text-slate-900 dark:text-white transition-all shadow-inner">
                    </div>
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">No. WhatsApp Pribadi</label>
                        <input id="owner-hr-phone" type="tel" value="${o(a.phone||"")}" placeholder="081234567890"
                            class="w-full min-h-[44px] border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 text-[16px] sm:text-sm bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] text-slate-900 dark:text-white transition-all shadow-inner">
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Gaji Pokok Direksi (Rp/Bulan) <span class="text-rose-500">*</span></label>
                        <input id="owner-hr-salary" type="number" min="0" step="50000" value="${a.baseSalary||1e7}"
                            class="w-full min-h-[44px] border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 text-[16px] sm:text-sm bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] text-slate-900 dark:text-white font-bold transition-all shadow-inner">
                    </div>
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Tunjangan Bulanan Direksi (Rp)</label>
                        <input id="owner-hr-allowance" type="number" min="0" step="50000" value="${a.dailyAllowance||0}"
                            class="w-full min-h-[44px] border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 text-[16px] sm:text-sm bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] text-slate-900 dark:text-white transition-all shadow-inner">
                    </div>
                </div>

                <!-- Informasi Rekening Bank Owner -->
                <div class="border-t border-slate-100 dark:border-slate-800 pt-3 space-y-3">
                    <h4 class="text-xs font-black text-slate-800 dark:text-white flex items-center gap-1.5">
                        <i class="fa-solid fa-building-columns text-[var(--color-primary)]"></i> Rekening Penerimaan Gaji
                    </h4>
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div>
                            <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Bank</label>
                            <input id="owner-hr-bank-name" type="text" value="${o(a.bankName||"BCA")}" placeholder="BCA / Mandiri / BRI"
                                class="w-full min-h-[44px] border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 text-[16px] sm:text-sm bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] text-slate-900 dark:text-white transition-all shadow-inner">
                        </div>
                        <div>
                            <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Nomor Rekening</label>
                            <input id="owner-hr-bank-account" type="text" value="${o(a.bankAccount&&a.bankAccount!=="-"?a.bankAccount:"")}" placeholder="1234567890"
                                class="w-full min-h-[44px] border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 text-[16px] sm:text-sm bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] text-slate-900 dark:text-white font-mono transition-all shadow-inner">
                        </div>
                        <div>
                            <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Atas Nama Rekening</label>
                            <input id="owner-hr-bank-holder" type="text" value="${o(a.bankHolder||a.name||"")}" placeholder="Nama Pemilik"
                                class="w-full min-h-[44px] border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 text-[16px] sm:text-sm bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] text-slate-900 dark:text-white transition-all shadow-inner">
                        </div>
                    </div>
                </div>

                <div id="owner-hr-error" class="hidden text-xs text-rose-600 font-semibold p-3 bg-rose-50 dark:bg-rose-950/40 rounded-2xl border border-rose-200 dark:border-rose-900/50"></div>
            </div>

            <!-- Modal Footer -->
            <div class="p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800 flex gap-3 shrink-0 bg-slate-50/50 dark:bg-slate-900/50 pb-[max(1rem,env(safe-area-inset-bottom))]">
                <button onclick="window.closeOwnerHrModal()"
                    class="flex-1 min-h-[48px] py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-slate-100 active:scale-95 transition-all cursor-pointer">
                    Batal
                </button>
                <button onclick="window.saveOwnerHrProfile()" id="save-owner-hr-btn"
                    class="flex-[2] min-h-[48px] py-3.5 rounded-2xl text-white font-black text-sm shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                    <i class="fa-solid fa-floppy-disk"></i> Simpan Kompensasi Owner
                </button>
            </div>
        </div>
    </div>`),typeof window.pushModalHistory=="function"&&window.pushModalHistory("ownerHr"),setTimeout(()=>{const t=l("owner-hr-modal-box");t&&t.classList.remove("scale-95")},10)},Ee=(a=!1)=>{const e=()=>{const t=l("modal-owner-hr");t&&(t.style.opacity="0",setTimeout(()=>t.remove(),200))};typeof window.requestCloseModal=="function"?window.requestCloseModal("ownerHr",a,e):e()},Pa=async()=>{if(!P("menyimpan kompensasi owner"))return;const a=l("owner-hr-name")?.value?.trim()||"Pemilik Toko",e=l("owner-hr-position")?.value?.trim()||"Owner / Direktur Utama",t=l("owner-hr-phone")?.value?.trim()||"",s=Math.max(0,parseFloat(l("owner-hr-salary")?.value)||0),r=Math.max(0,parseFloat(l("owner-hr-allowance")?.value)||0),n=l("owner-hr-bank-name")?.value?.trim()||"BCA",d=l("owner-hr-bank-account")?.value?.trim()||"-",i=l("owner-hr-bank-holder")?.value?.trim()||a,m=l("owner-hr-error"),c=l("save-owner-hr-btn");c&&(c.disabled=!0,c.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i>Menyimpan ke Cloud...'),C("Menyimpan data kompensasi owner...");try{const p={employeeId:"OWN-001",name:a,position:e,phone:t,baseSalary:s,dailyAllowance:r,employmentStatus:"permanent",bankName:n,bankAccount:d,bankHolder:i,role:g.OWNER,isActive:!0,updatedAt:j.firestore.FieldValue.serverTimestamp()};await S.collection("freshmart").doc("cms_data").set({ownerEmployee:p},{merge:!0}),f.ownerEmployee=p,Ee(),A("Data kompensasi Owner berhasil diperbarui!","success"),await Ie()}catch(p){console.error("[OwnerHr] Gagal menyimpan data owner:",p),m&&(m.textContent="Gagal menyimpan: "+(p.message||"Terjadi kesalahan sistem"),m.classList.remove("hidden")),c&&(c.disabled=!1,c.innerHTML='<i class="fa-solid fa-floppy-disk mr-2"></i>Simpan Kompensasi Owner')}finally{O()}},Ce=async(a,e)=>{if(P("mengubah status aktif staf")){C(e?"Mengaktifkan staf...":"Menonaktifkan staf...");try{await S.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(a).set({isActive:e,updatedAt:j.firestore.FieldValue.serverTimestamp()},{merge:!0}),A(e?"Akun staf diaktifkan":"Akun staf dinonaktifkan","success"),await z()}catch(t){t.code==="permission-denied"||t.message&&t.message.toLowerCase().includes("permission")?A("Akses Ditolak: Hanya akun Owner yang berwenang mengubah status staf.","error"):A("Gagal mengubah status staf: "+t.message,"error")}finally{O()}}},Oe=(a,e)=>{P("menghapus akun staf")&&ke("Hapus Akun Staf",`Yakin hapus akun staf "${e}"? Akun tidak dapat dipulihkan dan staf tidak dapat login lagi ke toko.`,async()=>{C("Menghapus akun staf...");try{await S.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(a).delete(),A(`Akun "${e}" berhasil dihapus`,"success"),await z()}catch(t){t.code==="permission-denied"||t.message&&t.message.toLowerCase().includes("permission")?A("Akses Ditolak: Hanya akun Owner yang berwenang menghapus staf.","error"):A("Gagal menghapus staf: "+t.message,"error")}finally{O()}},"Ya, Hapus",!0)},Ne=a=>{const e=l(a),t=l(a+"-eye");e&&(e.type==="password"?(e.type="text",t&&(t.className="fa-solid fa-eye-slash text-sm")):(e.type="password",t&&(t.className="fa-solid fa-eye text-sm")))},Ma=je,Ia=be,Ta=Re,ja=(a,e,t)=>He(a,e,t,g.CASHIER),Ra=me,Da=Ce,Ha=Oe,Ea=z,Ca=Ne;typeof window<"u"&&(window.renderCashierAccounts=Ie,window.switchCashierTab=fa,window.filterStaffRole=ua,window.loadStaffList=z,window.openAddStaffModal=je,window.closeAddStaffModal=be,window.applyNewStaffPreset=ka,window.setAllNewStaffPerms=va,window.saveStaffAccount=Re,window.openPermissionsModal=ya,window.closePermissionsModal=De,window.applyEditStaffPreset=wa,window.setAllEditStaffPerms=ha,window.saveStaffPermissions=Aa,window.openEditStaffModal=He,window.closeEditStaffModal=me,window.updateStaffProfile=$a,window.openOwnerHrModal=Sa,window.closeOwnerHrModal=Ee,window.saveOwnerHrProfile=Pa,window.toggleStaffActive=Ce,window.deleteStaffAccount=Oe,window.toggleStaffPassVisibility=Ne,window.verifyOwnerAuthority=P,window.openAddCashierModal=Ma,window.closeAddCashierModal=Ia,window.saveCashierAccount=Ta,window.openEditCashierModal=ja,window.closeEditCashierModal=Ra,window.toggleCashierActive=Da,window.deleteCashierAccount=Ha,window.loadCashierList=Ea,window.toggleCashierPassVisibility=Ca);export{wa as applyEditStaffPreset,ka as applyNewStaffPreset,Ia as closeAddCashierModal,be as closeAddStaffModal,Ra as closeEditCashierModal,me as closeEditStaffModal,Ee as closeOwnerHrModal,De as closePermissionsModal,Ha as deleteCashierAccount,Oe as deleteStaffAccount,ua as filterStaffRole,Ea as loadCashierList,z as loadStaffList,Ma as openAddCashierModal,je as openAddStaffModal,ja as openEditCashierModal,He as openEditStaffModal,Sa as openOwnerHrModal,ya as openPermissionsModal,Ie as renderCashierAccounts,Ta as saveCashierAccount,Pa as saveOwnerHrProfile,Re as saveStaffAccount,Aa as saveStaffPermissions,ha as setAllEditStaffPerms,va as setAllNewStaffPerms,fa as switchCashierTab,Da as toggleCashierActive,Ca as toggleCashierPassVisibility,Ce as toggleStaffActive,Ne as toggleStaffPassVisibility,$a as updateStaffProfile,P as verifyOwnerAuthority};

const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./module-pos-WEjenQzn.js","./module-print-DKmlc1zN.js","./vendor-firebase-core-D2OF5R23.js","./vendor-firebase-db-BIUZcnOd.js","./module-member-DnTn5AUG.js","./module-faq-BipBiFX7.js"])))=>i.map(i=>d[i]);
import{R as u,f,a as m,q as $,i as o,e as n,k as S,l as N,A as Y,n as O,H as Ae,_ as ne,bj as U,bk as ie,J as he,b as Ue,bl as Q,bm as ze}from"./module-print-DKmlc1zN.js";import{V as We}from"./module-pos-WEjenQzn.js";import{f as R}from"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";import"./module-member-DnTn5AUG.js";import"./module-faq-BipBiFX7.js";const de=[{key:"permanent",label:"Karyawan Tetap",badgeColor:"emerald"},{key:"contract",label:"Kontrak (PKWT)",badgeColor:"blue"},{key:"probation",label:"Masa Percobaan (3 Bulan)",badgeColor:"amber"},{key:"daily",label:"Staf Harian Lepas",badgeColor:"purple"}],ce=[{key:"bca",label:"BCA (Bank Central Asia)"},{key:"bri",label:"BRI (Bank Rakyat Indonesia)"},{key:"mandiri",label:"Bank Mandiri"},{key:"bni",label:"BNI (Bank Negara Indonesia)"},{key:"bsi",label:"BSI (Bank Syariah Indonesia)"},{key:"jatim",label:"Bank Jatim"},{key:"cash",label:"Tunai Kas Laci Toko (Cash)"},{key:"other",label:"Bank Lainnya / E-Wallet"}],pe=(a=[],e="EMP")=>{if(!Array.isArray(a)||a.length===0)return`${e}-001`;let t=0;const s=new RegExp(`^${e}-(\\d+)`,"i");a.forEach(i=>{const l=String(i?.employeeId||i?.nik||"").trim().match(s);if(l&&l[1]){const x=parseInt(l[1],10);!isNaN(x)&&x>t&&(t=x)}});const r=t+1;return`${e}-${String(r).padStart(3,"0")}`},Z=a=>a&&a.ownerEmployee&&typeof a.ownerEmployee=="object"?{employeeId:"OWN-001",role:u.OWNER,position:"Owner / Direktur Utama",baseSalary:1e7,dailyAllowance:0,employmentStatus:"permanent",bankName:"BCA / Rekening Toko",bankAccount:"-",bankHolder:"Pemilik Toko",isActive:!0,...a.ownerEmployee}:{employeeId:"OWN-001",name:a?.store?.name?`Pemilik ${a.store.name}`:"Pemilik Toko",email:a?.subscription?.clientEmail||"owner@tokoputri.com",phone:a?.store?.wa||"",role:u.OWNER,position:"Owner / Direktur Utama",baseSalary:1e7,dailyAllowance:0,employmentStatus:"permanent",bankName:"BCA / Rekening Toko",bankAccount:"-",bankHolder:"Pemilik Toko",hireDate:"2024-01-01",isActive:!0,notes:"Gaji resmi direksi / pemilik toko terpisah dari laba usaha toko."},te=(a={},e=0)=>{const t=a.role===u.OWNER||a.role==="owner",s=t?"OWN":"EMP",r=(a.employeeId||a.nik||`${s}-${String(e+1).padStart(3,"0")}`).trim();let i=a.position||"";return i||(t?i="Owner / Direktur Utama":a.role===u.ADMIN?i="Admin Operasional Toko":a.role===u.CASHIER?i="Kasir POS":i="Staf Operasional / Gudang"),{uid:a.uid||a.id||`emp_${Date.now()}_${e}`,employeeId:r,name:String(a.name||"Karyawan").trim(),email:String(a.email||"").trim(),phone:String(a.phone||"").trim(),role:a.role||u.CASHIER,position:i,employmentStatus:a.employmentStatus||"permanent",hireDate:a.hireDate||new Date().toISOString().split("T")[0],baseSalary:Math.max(0,parseFloat(a.baseSalary)||0),dailyAllowance:Math.max(0,parseFloat(a.dailyAllowance)||0),bankName:a.bankName||"cash",bankAccount:String(a.bankAccount||"").trim(),bankHolder:String(a.bankHolder||a.name||"").trim(),nikKtp:String(a.nikKtp||"").trim(),npwp:String(a.npwp||"").trim(),isActive:a.isActive!==!1,notes:String(a.notes||"").trim()}},Je=(a=[],e={})=>{const t=Array.isArray(e?.employees)?e.employees:[],s=new Map;return t.forEach(r=>{r.uid&&s.set(r.uid,r),r.email&&s.set(r.email.toLowerCase(),r),r.employeeId&&s.set(r.employeeId,r)}),a.map((r,i)=>{const c=s.get(r.uid)||s.get(r.email?.toLowerCase())||{};return te({...c,...r,uid:r.uid,email:r.email,name:r.name||c.name,role:r.role||c.role,isActive:r.isActive!==!1},i)})},M=(a="mengubah data staf")=>{try{if(typeof window<"u"&&window.auth&&window.ADMIN_UID){const e=window.auth.currentUser;return e?e.uid!==window.ADMIN_UID?(typeof window.showToast=="function"&&window.showToast(`Akses Ditolak: Hanya Akun Pemilik Utama (Owner) yang berwenang ${a}. Akun staf tidak memiliki izin modifikasi database staf.`,"error"),!1):!0:(typeof window.showToast=="function"&&window.showToast(`Sesi Belum Terotentikasi: Harap login resmi menggunakan Akun Pemilik Toko (Email Owner) di form login CMS untuk ${a}.`,"warning"),!1)}}catch{}return!0};typeof window<"u"&&(window.EMPLOYMENT_STATUSES=de,window.SALARY_PAYMENT_METHODS=ce,window.generateEmployeeId=pe,window.getOwnerEmployeeProfile=Z,window.normalizeEmployeeProfile=te,window.mergeStaffWithHrProfiles=Je,window.verifyOwnerAuthority=M);const se=async()=>{try{if(typeof window<"u"&&typeof window.saveApp=="function")return await window.saveApp();const a=await ne(()=>import("./module-pos-WEjenQzn.js").then(e=>e.W),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url);if(typeof a?.saveApp=="function")return await a.saveApp()}catch{}};let L="active",D=[];const Se=(a=[])=>{const e=new Date().getFullYear(),t=`KSB-${e}`;let s=0;const r=new RegExp(`^KSB-${e}-(\\d+)`,"i");a.forEach(c=>{const x=String(c?.advanceId||c?.id||"").trim().match(r);if(x&&x[1]){const d=parseInt(x[1],10);!isNaN(d)&&d>s&&(s=d)}});const i=s+1;return`${t}-${String(i).padStart(3,"0")}`},J=()=>{const a=Array.isArray(m.employees)?[...m.employees]:[],e=Z(m);return a.some(s=>s.employeeId==="OWN-001"||s.role==="owner")||a.unshift(e),a.filter(s=>s.isActive!==!1)},$e=async()=>{try{let a=[];try{const e=await $.collection("freshmart").doc("cms_data").collection("salary_advances").orderBy("createdAt","desc").get();e&&!e.empty&&(a=e.docs.map(t=>({id:t.id,...t.data()})))}catch{}if(!a||a.length===0){let e=Array.isArray(m.salaryAdvances)?m.salaryAdvances:[];if(e.length===0)try{e=JSON.parse(localStorage.getItem("freshmart_salary_advances")||"[]"),Array.isArray(e)&&e.length>0&&(m.salaryAdvances=e)}catch{}a=e}return D=a,m.salaryAdvances=a,a}catch(a){return console.error("[HR Advances] Gagal memuat data kasbon:",a),D=Array.isArray(m.salaryAdvances)?m.salaryAdvances:[],D}},V=async a=>{if(!a)return;a.innerHTML=`
    <div class="text-center py-16">
        <i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i>
        <p class="text-xs text-slate-400 mt-2">Memuat buku kasbon karyawan...</p>
    </div>`,await $e();const e=D,t=e.filter(l=>l.status==="active"&&(parseFloat(l.remainingAmount)||0)>0),s=t.reduce((l,x)=>l+(parseFloat(x.remainingAmount)||0),0),r=new Set(t.map(l=>l.employeeId||l.employeeName)).size,i=t.reduce((l,x)=>l+Math.min(parseFloat(x.monthlyInstallment)||0,parseFloat(x.remainingAmount)||0),0);let c=e;L==="active"?c=e.filter(l=>l.status==="active"&&(parseFloat(l.remainingAmount)||0)>0):L==="paid"&&(c=e.filter(l=>l.status==="paid"||(parseFloat(l.remainingAmount)||0)<=0)),a.innerHTML=`
    <div class="space-y-4">
        <!-- Bento Summary Cards -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div class="p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs">
                <span class="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1">Total Kasbon Aktif</span>
                <p class="text-base sm:text-lg font-black text-rose-600 dark:text-rose-400">${f(s)}</p>
                <span class="text-[10px] text-slate-400 mt-0.5 block">Sisa piutang staf toko</span>
            </div>
            <div class="p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs">
                <span class="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1">Karyawan Meminjam</span>
                <p class="text-base sm:text-lg font-black text-slate-800 dark:text-white">${r} <span class="text-xs font-medium text-slate-400">Orang</span></p>
                <span class="text-[10px] text-slate-400 mt-0.5 block">Kasbon belum lunas</span>
            </div>
            <div class="p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs">
                <span class="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1">Potongan Payroll Bln Ini</span>
                <p class="text-base sm:text-lg font-black text-[var(--color-primary)]">${f(i)}</p>
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
            ${Ve(c)}
        </div>
    </div>`},qe=a=>{L=a;const e=n("cashier-panel-advances");e&&V(e)},Ve=a=>!a||a.length===0?`
        <div class="flex flex-col items-center justify-center py-16 text-slate-400 dark:text-slate-600 bg-white dark:bg-slate-800/60 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-8 text-center">
            <div class="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-2xl mb-3 text-slate-400">
                <i class="fa-solid fa-receipt"></i>
            </div>
            <p class="font-bold text-sm text-slate-700 dark:text-slate-300">Tidak ada catatan kasbon pada filter ini</p>
            <p class="text-xs mt-1 text-slate-400">Klik "+ Ajukan Kasbon Baru" untuk mencatat pinjaman staf toko</p>
        </div>`:a.map(e=>{const t=Math.max(0,parseFloat(e.remainingAmount)||0),s=Math.max(1,parseFloat(e.amount)||1),r=Math.max(0,s-t),i=Math.min(100,Math.round(r/s*100)),c=t<=0||e.status==="paid",l=e.disbursementSource==="bank"?"Transfer Bank":e.disbursementSource==="owner"?"Dana Owner":"Kas Toko (Tunai)",x=e.requestDate||"-";return`
        <div class="p-4 sm:p-5 bg-white dark:bg-slate-800/95 rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:shadow-xs transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div class="flex items-start gap-3.5 min-w-0 flex-1">
                <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-base shrink-0 shadow-2xs font-black ${c?"bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 border border-emerald-200 dark:border-emerald-800":"bg-rose-50 dark:bg-rose-950/40 text-rose-600 border border-rose-200 dark:border-rose-800"}">
                    <i class="fa-solid ${c?"fa-circle-check":"fa-hand-holding-dollar"}"></i>
                </div>
                <div class="min-w-0 flex-1 space-y-1.5">
                    <div class="flex items-center gap-2 flex-wrap">
                        <span class="text-sm font-black text-slate-900 dark:text-white truncate">${o(e.employeeName||"Karyawan")}</span>
                        <span class="inline-flex items-center gap-1 font-mono text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600">
                            ${o(e.employeeId||"EMP")}
                        </span>
                        <span class="font-mono text-[10px] text-slate-400">#${o(e.advanceId||e.id)}</span>
                        <span class="inline-flex items-center gap-1 text-[10px] font-black px-2.5 py-0.5 rounded-full ${c?"bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200":"bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border border-amber-200"}">
                            <span class="w-1.5 h-1.5 rounded-full ${c?"bg-emerald-500":"bg-amber-500 animate-pulse"}"></span>
                            ${c?"Lunas":"Belum Lunas"}
                        </span>
                    </div>

                    <div class="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300 flex-wrap">
                        <span class="font-bold text-slate-800 dark:text-slate-200">${o(e.position||"Staf Toko")}</span>
                        <span>•</span>
                        <span>Pinjaman: <strong class="text-slate-900 dark:text-white">${f(e.amount)}</strong></span>
                        <span>•</span>
                        <span>Sisa: <strong class="${c?"text-emerald-600 dark:text-emerald-400":"text-rose-600 dark:text-rose-400"}">${f(t)}</strong></span>
                        <span>•</span>
                        <span>Potongan: <strong class="text-[var(--color-primary)] font-bold">${f(e.monthlyInstallment)}/bln</strong></span>
                    </div>

                    <!-- Progress Bar Cicilan -->
                    <div class="pt-1 max-w-md">
                        <div class="flex items-center justify-between text-[10px] text-slate-400 mb-1">
                            <span>Terbayar: ${f(r)}</span>
                            <span class="font-bold text-slate-600 dark:text-slate-300">${i}% Lunas</span>
                        </div>
                        <div class="w-full bg-slate-100 dark:bg-slate-700/80 rounded-full h-1.5 overflow-hidden">
                            <div class="h-full rounded-full transition-all duration-500 ${c?"bg-emerald-500":""}" style="width: ${i}%; ${c?"":"background: var(--color-primary)"}"></div>
                        </div>
                    </div>

                    <div class="flex items-center gap-3 text-[11px] text-slate-400 dark:text-slate-500 flex-wrap pt-0.5">
                        <span class="flex items-center gap-1"><i class="fa-solid fa-calendar-day text-[10px]"></i> Tgl: ${o(x)}</span>
                        <span>•</span>
                        <span class="flex items-center gap-1"><i class="fa-solid fa-wallet text-[10px]"></i> Sumber: ${o(l)}</span>
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
                ${c?"":`
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
        </div>`}).join(""),Ye=()=>{if(!M("mencatat kasbon karyawan"))return;const a=J();if(a.length===0){S("Belum ada staf terdaftar di toko. Tambahkan staf terlebih dahulu.","warning");return}const e=new Date().toISOString().split("T")[0],t=Se(D),s=n("modal-salary-advance-form");s&&s.remove(),document.body.insertAdjacentHTML("beforeend",`
    <div id="modal-salary-advance-form" class="fixed inset-0 z-[9990] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/75"
        onclick="if(event.target===this) window.closeSalaryAdvanceFormModal()">
        <div class="bg-white dark:bg-slate-900 rounded-t-[2rem] sm:rounded-3xl shadow-2xl w-full max-w-lg flex flex-col max-h-[92vh] sm:max-h-[90vh] overflow-hidden scale-95 transition-transform duration-300 border border-slate-200 dark:border-slate-800" id="salary-advance-modal-box">
            <!-- Mobile Drag Handle -->
            <div class="sm:hidden w-12 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full mx-auto mt-2.5 mb-1 shrink-0"></div>
            <!-- Modal Header -->
            <div class="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 shrink-0 bg-slate-50 dark:bg-slate-800/90">
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
                                ${o(r.name)} — ${o(r.position)} (${o(r.employeeId)}) [Gaji: ${f(r.baseSalary||0)}]
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
    </div>`),typeof window.pushModalHistory=="function"&&window.pushModalHistory("advanceForm"),setTimeout(()=>{const r=n("salary-advance-modal-box");r&&r.classList.remove("scale-95");const i=n("adv-amount");i&&i.focus()},10)},Pe=(a=!1)=>{const e=()=>{const t=n("modal-salary-advance-form");t&&(t.style.opacity="0",setTimeout(()=>t.remove(),200))};typeof window.requestCloseModal=="function"?window.requestCloseModal("advanceForm",a,e):e()},Me=()=>{const a=parseFloat(n("adv-amount")?.value)||0,e=parseInt(n("adv-tenor-select")?.value,10)||1,t=n("adv-installment");t&&a>0&&(t.value=Math.ceil(a/e))},Qe=()=>{Me()},Ze=async()=>{if(!M("mencatat kasbon karyawan"))return;const a=n("adv-employee-select"),e=a?.options[a.selectedIndex];if(!e){S("Pilih karyawan terlebih dahulu","warning");return}const t=a.value,s=e.getAttribute("data-empid")||"EMP-001",r=e.getAttribute("data-name")||"Karyawan",i=e.getAttribute("data-role")||"staff",c=e.getAttribute("data-position")||"Staf Toko",l=n("adv-request-date")?.value||new Date().toISOString().split("T")[0],x=Math.max(0,parseFloat(n("adv-amount")?.value)||0),d=parseInt(n("adv-tenor-select")?.value,10)||1,b=Math.max(0,parseFloat(n("adv-installment")?.value)||Math.ceil(x/d)),p=n("adv-disbursement-source")?.value||"cash",k=n("adv-reason")?.value?.trim()||"Kasbon Operasional Karyawan",y=n("adv-sync-expense")?.checked!==!1,g=n("adv-form-error"),v=n("save-adv-btn");if(x<1e4){g&&(g.textContent="Nominal kasbon minimal Rp 10.000.",g.classList.remove("hidden"));return}v&&(v.disabled=!0,v.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i>Menyimpan...'),N("Mencatat kasbon karyawan...");try{const w=Se(D);let A=null;if(y){A="exp_adv_"+Date.now();const H={id:A,date:l,category:"kasbon",amount:x,desc:`Pencairan Kasbon: ${r} (${s}) - ${k}`,source:p,recipient:r,receiptUrl:"",advanceId:w,createdAt:new Date().toISOString()};Array.isArray(m.expenses)||(m.expenses=[]),m.expenses.unshift(H);try{await se()}catch{}}const h={advanceId:w,employeeUid:t,employeeId:s,employeeName:r,employeeRole:i,position:c,requestDate:l,amount:x,monthlyInstallment:b,totalTenorMonths:d,remainingAmount:x,reason:k,status:"active",disbursementSource:p,expenseId:A,repayments:[],createdAt:R.firestore.FieldValue.serverTimestamp(),createdBy:Y.currentUser?.uid||"owner"};try{await $.collection("freshmart").doc("cms_data").collection("salary_advances").doc(w).set(h)}catch{}Array.isArray(m.salaryAdvances)||(m.salaryAdvances=[]),m.salaryAdvances.unshift({id:w,...h}),D=m.salaryAdvances;try{localStorage.setItem("freshmart_salary_advances",JSON.stringify(m.salaryAdvances)),await se()}catch{}Pe(),S(`Kasbon Rp ${f(x)} untuk ${r} berhasil dicatat!`,"success");const B=n("cashier-panel-advances");B&&V(B)}catch(w){console.error("[HR Advances] Gagal menyimpan kasbon:",w),g&&(g.textContent="Gagal menyimpan kasbon: "+(w.message||"Kesalahan sistem"),g.classList.remove("hidden")),v&&(v.disabled=!1,v.innerHTML='<i class="fa-solid fa-floppy-disk mr-2"></i>Simpan &amp; Cairkan Kasbon')}finally{O()}},Xe=a=>{const e=D.find(d=>(d.advanceId||d.id)===a);if(!e){S("Data kasbon tidak ditemukan","warning");return}const t=Math.max(0,parseFloat(e.remainingAmount)||0),s=Math.max(1,parseFloat(e.amount)||1),r=Math.max(0,s-t),i=Math.min(100,Math.round(r/s*100)),c=t<=0||e.status==="paid",l=Array.isArray(e.repayments)?e.repayments:[],x=n("modal-salary-advance-detail");x&&x.remove(),document.body.insertAdjacentHTML("beforeend",`
    <div id="modal-salary-advance-detail" class="fixed inset-0 z-[9990] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/75"
        onclick="if(event.target===this) window.closeAdvanceDetailModal()">
        <div class="bg-white dark:bg-slate-900 rounded-t-[2rem] sm:rounded-3xl shadow-2xl w-full max-w-lg flex flex-col max-h-[92vh] sm:max-h-[90vh] overflow-hidden scale-95 transition-transform duration-300 border border-slate-200 dark:border-slate-800" id="salary-advance-detail-modal-box">
            <!-- Mobile Drag Handle -->
            <div class="sm:hidden w-12 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full mx-auto mt-2.5 mb-1 shrink-0"></div>
            <!-- Header -->
            <div class="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 shrink-0 bg-slate-50 dark:bg-slate-800/90">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-sm shadow-2xs ${c?"bg-emerald-500 text-white":"text-white"}"
                        style="${c?"":"background: var(--color-primary)"}">
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
                        <span class="inline-flex items-center gap-1.5 text-xs font-black px-3 py-1 rounded-full ${c?"bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300":"bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300"}">
                            <span class="w-2 h-2 rounded-full ${c?"bg-emerald-500":"bg-rose-500 animate-pulse"}"></span>
                            ${c?"Lunas Sepenuhnya":"Masih Berjalan (Belum Lunas)"}
                        </span>
                    </div>
                    <div class="grid grid-cols-2 gap-2 pt-1 border-t border-slate-200/60 dark:border-slate-700/60">
                        <div>
                            <span class="text-[10px] font-bold uppercase text-slate-400 block">Total Pinjaman</span>
                            <span class="text-sm font-black text-slate-800 dark:text-white">${f(e.amount)}</span>
                        </div>
                        <div>
                            <span class="text-[10px] font-bold uppercase text-slate-400 block">Sisa Pinjaman</span>
                            <span class="text-sm font-black ${c?"text-emerald-600":"text-rose-600"}">${f(t)}</span>
                        </div>
                    </div>
                    <div class="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden mt-2">
                        <div class="h-full rounded-full transition-all duration-500 ${c?"bg-emerald-500":""}" style="width: ${i}%; ${c?"":"background: var(--color-primary)"}"></div>
                    </div>
                    <div class="flex items-center justify-between text-[11px] text-slate-500 pt-0.5">
                        <span>Potongan: <strong>${f(e.monthlyInstallment)} / bln</strong></span>
                        <span>Tenor: <strong>${e.totalTenorMonths||1} Bulan</strong></span>
                    </div>
                </div>

                <!-- Riwayat Pembayaran / Pemotongan -->
                <div>
                    <h4 class="text-xs font-black text-slate-800 dark:text-white flex items-center gap-1.5 mb-2">
                        <i class="fa-solid fa-clock-rotate-left" style="color: var(--color-primary)"></i> Riwayat Angsuran &amp; Pemotongan
                    </h4>
                    ${l.length===0?`
                        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-center text-xs text-slate-400">
                            Belum ada riwayat pemotongan gaji atau pembayaran angsuran untuk kasbon ini.
                        </div>
                    `:`
                        <div class="space-y-2">
                            ${l.map((d,b)=>`
                            <div class="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs">
                                <div>
                                    <span class="font-bold text-slate-800 dark:text-white block">Angsuran #${b+1}: ${f(d.amount)}</span>
                                    <span class="text-[10px] text-slate-400">${o(d.date||"-")} • ${o(d.notes||"Potongan Payroll")}</span>
                                </div>
                                <span class="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">-${f(d.amount)}</span>
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
    </div>`),typeof window.pushModalHistory=="function"&&window.pushModalHistory("advanceDetail"),setTimeout(()=>{const d=n("salary-advance-detail-modal-box");d&&d.classList.remove("scale-95")},10)},ea=(a=!1)=>{const e=()=>{const t=n("modal-salary-advance-detail");t&&(t.style.opacity="0",setTimeout(()=>t.remove(),200))};typeof window.requestCloseModal=="function"?window.requestCloseModal("advanceDetail",a,e):e()},aa=(a,e)=>{if(!M("mencatat pembayaran kasbon"))return;const t=D.find(i=>(i.advanceId||i.id)===a);if(!t)return;const s=prompt(`Masukkan nominal pembayaran angsuran kasbon untuk "${t.employeeName}":
(Sisa pinjaman saat ini: Rp ${f(e)})`,e);if(s===null)return;const r=Math.max(0,parseFloat(s.replace(/[^0-9]/g,""))||0);if(r<=0){S("Nominal pembayaran tidak valid","warning");return}be(a,r,"Pembayaran manual / tunai staf")},be=async(a,e,t="Potongan gaji payroll")=>{const s=D.find(d=>(d.advanceId||d.id)===a);if(!s)return!1;const r=Math.max(0,parseFloat(s.remainingAmount)||0),i=Math.min(r,e),c=Math.max(0,r-i),l=c<=0,x={date:new Date().toISOString().split("T")[0],amount:i,remainingAfter:c,notes:t,recordedAt:new Date().toISOString()};N("Memperbarui catatan kasbon...");try{const d={remainingAmount:c,status:l?"paid":"active",repayments:R.firestore.FieldValue.arrayUnion(x),updatedAt:R.firestore.FieldValue.serverTimestamp()};try{await $.collection("freshmart").doc("cms_data").collection("salary_advances").doc(a).update(d)}catch{}s.remainingAmount=c,s.status=l?"paid":"active",Array.isArray(s.repayments)||(s.repayments=[]),s.repayments.push(x);try{localStorage.setItem("freshmart_salary_advances",JSON.stringify(m.salaryAdvances)),await se()}catch{}S(`Pembayaran kasbon Rp ${f(i)} berhasil dicatat! Sisa: Rp ${f(c)}`,"success");const b=n("cashier-panel-advances");return b&&V(b),!0}catch(d){return console.error("[HR Advances] Gagal mencatat pembayaran:",d),S("Gagal mencatat pembayaran: "+d.message,"error"),!1}finally{O()}},ta=(a,e)=>{M("menghapus data kasbon")&&Ae("Hapus Catatan Kasbon",`Yakin hapus data kasbon "${e}" (#${a})? Tindakan ini tidak dapat dibatalkan.`,async()=>{N("Menghapus catatan kasbon...");try{try{await $.collection("freshmart").doc("cms_data").collection("salary_advances").doc(a).delete()}catch(s){console.warn("[HR Advances] Cloud delete terkendala hak akses/offline:",s)}D=D.filter(s=>(s.advanceId||s.id)!==a),m.salaryAdvances=D;try{localStorage.setItem("freshmart_salary_advances",JSON.stringify(m.salaryAdvances)),await se()}catch{}S(`Catatan kasbon "${e}" berhasil dihapus`,"success");const t=n("cashier-panel-advances");t&&V(t)}catch(t){console.error("[HR Advances] Gagal menghapus kasbon:",t),S("Gagal menghapus: "+t.message,"error")}finally{O()}},"Ya, Hapus",!0)};typeof window<"u"&&(window.loadSalaryAdvances=$e,window.renderSalaryAdvancesView=V,window.filterAdvanceStatus=qe,window.openSalaryAdvanceFormModal=Ye,window.closeSalaryAdvanceFormModal=Pe,window.calculateAdvanceInstallment=Me,window.onAdvanceEmployeeChange=Qe,window.saveSalaryAdvance=Ze,window.openAdvanceDetailModal=Xe,window.closeAdvanceDetailModal=ea,window.promptManualRepayment=aa,window.recordAdvanceRepayment=be,window.deleteSalaryAdvance=ta);let E=new Date().toISOString().split("T")[0],G=[];const Ie=async()=>{try{if(typeof window<"u"&&typeof window.saveApp=="function")return await window.saveApp();const a=await ne(()=>import("./module-pos-WEjenQzn.js").then(e=>e.W),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url);if(typeof a?.saveApp=="function")return await a.saveApp()}catch{}},xe=[{key:"present",label:"Hadir",badgeClass:"bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-200",icon:"fa-check"},{key:"late",label:"Terlambat",badgeClass:"bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border-amber-200",icon:"fa-clock"},{key:"permit",label:"Izin",badgeClass:"bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 border-blue-200",icon:"fa-envelope-open-text"},{key:"sick",label:"Sakit",badgeClass:"bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300 border-purple-200",icon:"fa-notes-medical"},{key:"alpha",label:"Alpha",badgeClass:"bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 border-rose-200",icon:"fa-xmark"}],re=(a,e)=>`ATT-${a}-${e.replace(/[^a-zA-Z0-9]/g,"")}`,Te=async(a=E)=>{E=a;try{let e=[],t=!1;try{const s=await $.collection("freshmart").doc("cms_data").collection("attendances").where("date","==",a).get();s&&!s.empty&&(e=s.docs.map(r=>({id:r.id,...r.data()})),t=!0)}catch{}if(!t||e.length===0){let s=Array.isArray(m.attendances)?m.attendances:[];if(s.length===0)try{s=JSON.parse(localStorage.getItem("freshmart_attendances")||"[]"),Array.isArray(s)&&s.length>0&&(m.attendances=s)}catch{}const r=s.filter(i=>i.date===a);r.length>0&&(e=r)}return G=e,e}catch(e){return console.error("[HR Attendance] Gagal memuat absensi tanggal:",a,e),G=(Array.isArray(m.attendances)?m.attendances:[]).filter(s=>s.date===a),G}},X=async a=>{if(!a)return;a.innerHTML=`
    <div class="text-center py-16">
        <i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i>
        <p class="text-xs text-slate-400 mt-2">Memuat lembar presensi tim...</p>
    </div>`,await Te(E);const e=J(),t=new Map;G.forEach(d=>{t.set(d.employeeId||d.employeeUid,d)});let s=0,r=0,i=0,c=0,l=0;e.forEach(d=>{const b=t.get(d.employeeId)||t.get(d.uid),p=b?b.status:"unrecorded";p==="present"?(s++,l+=parseFloat(b.allowanceEarned)||parseFloat(d.dailyAllowance)||0):p==="late"?(r++,l+=parseFloat(b.allowanceEarned)||parseFloat(d.dailyAllowance)||0):p==="permit"||p==="sick"?i++:p==="alpha"&&c++});const x=E===new Date().toISOString().split("T")[0];a.innerHTML=`
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
                <input id="att-date-picker" type="date" value="${E}" onchange="window.onAttendanceDateChanged(this.value)"
                    class="border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-1.5 text-xs font-black bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                <button onclick="window.navigateAttendanceDate(1)" class="w-8 h-8 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center text-xs active:scale-95 transition-all cursor-pointer">
                    <i class="fa-solid fa-chevron-right"></i>
                </button>
                ${x?"":`
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
                <p class="text-xl font-black text-blue-800 dark:text-blue-200">${i} <span class="text-xs font-normal text-blue-600">Staf</span></p>
                <span class="text-[10px] text-blue-600 dark:text-blue-400 mt-0.5 block">Tercatat izin resmi</span>
            </div>
            <div class="p-3.5 rounded-2xl bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800/60 shadow-2xs">
                <span class="text-[10px] font-black uppercase text-rose-700 dark:text-rose-300 block mb-1">Alpha / Belum Tercatat</span>
                <p class="text-xl font-black text-rose-800 dark:text-rose-200">${c+(e.length-s-r-i-c)} <span class="text-xs font-normal text-rose-600">Staf</span></p>
                <span class="text-[10px] text-rose-600 dark:text-rose-400 mt-0.5 block">Uang makan Rp 0</span>
            </div>
        </div>

        <!-- Daftar Kehadiran Staf -->
        <div class="space-y-2.5">
            ${e.map(d=>{const b=t.get(d.employeeId)||t.get(d.uid),p=b?b.status:"present",k=!!b,y=b?.clockIn||"08:00",g=b?.clockOut||"17:00";b?.notes;const v=parseFloat(d.dailyAllowance)||0;return k?parseFloat(b?.allowanceEarned):v>0,`
                <div class="p-4 bg-white dark:bg-slate-800/95 rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:shadow-xs transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-3.5">
                    <div class="flex items-center gap-3.5 min-w-0">
                        <div class="w-11 h-11 rounded-2xl flex items-center justify-center font-black text-xs shrink-0 shadow-2xs border border-[rgba(var(--color-primary-rgb),0.25)]"
                            style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary)">
                            ${(d.name||"ST").trim().split(/\s+/).slice(0,2).map(A=>A[0]).join("").toUpperCase()}
                        </div>
                        <div class="min-w-0 flex-1">
                            <div class="flex items-center gap-2 flex-wrap">
                                <span class="text-sm font-black text-slate-900 dark:text-white truncate">${o(d.name)}</span>
                                <span class="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                                    ${o(d.employeeId)}
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
                                <span class="font-semibold text-slate-700 dark:text-slate-300">${o(d.position)}</span>
                                <span>•</span>
                                <span>Uang Makan Harian: <strong class="text-emerald-600 dark:text-emerald-400">${f(v)}</strong></span>
                                ${b?.source==="pos_shift"?'<span>•</span><span class="text-[10px] text-blue-500 font-bold"><i class="fa-solid fa-cash-register mr-1"></i>Otomatis Buka Shift</span>':""}
                            </div>
                        </div>
                    </div>

                    <!-- Status Selector Buttons & Jam Kerja -->
                    <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0">
                        <!-- Status Chips -->
                        <div class="grid grid-cols-5 gap-1 p-1 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-700/80">
                            ${xe.map(A=>`
                                <button type="button" onclick="window.setQuickAttendanceStatus('${o(d.employeeId)}', '${A.key}')"
                                    id="btn-att-status-${o(d.employeeId)}-${A.key}"
                                    class="att-status-btn-${o(d.employeeId)} px-2 py-1.5 rounded-xl text-[10px] font-black transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-1 ${p===A.key?"bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-2xs border border-slate-300 dark:border-slate-600":"text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"}">
                                    <i class="fa-solid ${A.icon} text-[9px]"></i>
                                    <span>${A.label}</span>
                                </button>
                            `).join("")}
                        </div>

                        <!-- Jam Masuk & Keluar -->
                        <div class="flex items-center gap-1 text-xs">
                            <input id="att-in-${o(d.employeeId)}" type="time" value="${y}" title="Jam Masuk"
                                class="w-20 px-2 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-[11px] font-mono text-center">
                            <span class="text-slate-400">-</span>
                            <input id="att-out-${o(d.employeeId)}" type="time" value="${g}" title="Jam Pulang"
                                class="w-20 px-2 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-[11px] font-mono text-center">
                        </div>

                        <!-- Tombol Simpan Row -->
                        <button onclick="window.saveSingleAttendance('${o(d.employeeId)}', '${o(d.uid||d.employeeId)}', '${o(d.name)}', '${o(d.position)}', '${o(d.role)}', ${v})"
                            id="btn-save-att-${o(d.employeeId)}"
                            class="px-3 py-1.5 rounded-xl text-xs font-black text-white transition-all active:scale-95 cursor-pointer shadow-2xs flex items-center justify-center gap-1.5 hover:opacity-95"
                            style="background: var(--color-primary)">
                            <i class="fa-solid fa-floppy-disk text-[10px]"></i>
                            <span>Simpan</span>
                        </button>
                    </div>
                </div>`}).join("")}
        </div>
    </div>`},sa=a=>{const e=new Date(E);e.setDate(e.getDate()+a),E=e.toISOString().split("T")[0];const t=n("cashier-panel-attendance");t&&X(t)},ra=a=>{E=a;const e=n("cashier-panel-attendance");e&&X(e)},oa=(a,e)=>{document.querySelectorAll(`.att-status-btn-${a}`).forEach(s=>{s.className=`att-status-btn-${a} px-2 py-1.5 rounded-xl text-[10px] font-black transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200`});const t=n(`btn-att-status-${a}-${e}`);t&&(t.className=`att-status-btn-${a} px-2 py-1.5 rounded-xl text-[10px] font-black transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-1 bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-2xs border border-slate-300 dark:border-slate-600`),t?.setAttribute("data-selected-status",e)},la=async(a,e,t,s,r,i)=>{if(!M("mencatat absensi karyawan"))return;let c="present";xe.forEach(v=>{const w=n(`btn-att-status-${a}-${v.key}`);w&&(w.classList.contains("bg-white")||w.classList.contains("dark:bg-slate-800"))&&(c=v.key)});const l=n(`att-in-${a}`)?.value||"08:00",x=n(`att-out-${a}`)?.value||"17:00",d=c==="present"||c==="late"?i:0,b=re(E,a),p={attendanceId:b,date:E,employeeUid:e,employeeId:a,employeeName:t,position:s,role:r,status:c,clockIn:l,clockOut:x,allowanceEarned:d,notes:"",source:"manual",updatedAt:R.firestore.FieldValue.serverTimestamp(),recordedBy:Y.currentUser?.uid||"owner"},k=n(`btn-save-att-${a}`);k&&(k.disabled=!0,k.innerHTML='<i class="fa-solid fa-spinner fa-spin text-[10px]"></i>');const y=G.findIndex(v=>v.attendanceId===b);y>-1?G[y]={id:b,...p}:G.push({id:b,...p}),Array.isArray(m.attendances)||(m.attendances=[]);const g=m.attendances.findIndex(v=>v.attendanceId===b);g>-1?m.attendances[g]={id:b,...p}:m.attendances.push({id:b,...p});try{localStorage.setItem("freshmart_attendances",JSON.stringify(m.attendances))}catch{}try{await $.collection("freshmart").doc("cms_data").collection("attendances").doc(b).set(p,{merge:!0})}catch(v){console.warn("[HR Attendance] Cloud sync terkendala hak akses/offline, presensi tetap tersimpan di lokal:",v)}try{await Ie()}catch{}S(`Presensi ${t} (${c.toUpperCase()}) tersimpan!`,"success"),k&&(k.disabled=!1,k.innerHTML='<i class="fa-solid fa-check text-[10px]"></i><span>Tersimpan</span>')},na=async()=>{if(!M("mencatat presensi massal"))return;const a=J();if(a.length!==0){N("Mencatat kehadiran seluruh staf...");try{const e=[];for(const s of a){const r=s.employeeId||"EMP-001",i=re(E,r),c=parseFloat(s.dailyAllowance)||0,l={attendanceId:i,date:E,employeeUid:s.uid||r,employeeId:r,employeeName:s.name||"Karyawan",position:s.position||"Staf Toko",role:s.role||"staff",status:"present",clockIn:"08:00",clockOut:"17:00",allowanceEarned:c,notes:"Hadir massal 1-klik",source:"bulk",updatedAt:R.firestore.FieldValue.serverTimestamp(),recordedBy:Y.currentUser?.uid||"owner"};e.push({id:i,...l})}G=e,Array.isArray(m.attendances)||(m.attendances=[]),e.forEach(s=>{const r=m.attendances.findIndex(i=>i.attendanceId===s.attendanceId);r>-1?m.attendances[r]=s:m.attendances.push(s)});try{localStorage.setItem("freshmart_attendances",JSON.stringify(m.attendances))}catch{}try{const s=$.batch();for(const r of e){const i=$.collection("freshmart").doc("cms_data").collection("attendances").doc(r.attendanceId);s.set(i,r,{merge:!0})}await s.commit()}catch(s){console.warn("[HR Attendance] Cloud batch presensi massal terkendala hak akses/offline, tetap tersimpan lokal:",s)}try{await Ie()}catch{}S(`Presensi seluruh ${a.length} staf berhasil dicatat sebagai HADIR!`,"success");const t=n("cashier-panel-attendance");t&&X(t)}catch(e){console.error("[HR Attendance] Gagal presensi massal:",e),S("Gagal presensi massal: "+e.message,"error")}finally{O()}}},ia=async(a,e)=>{try{if(!a)return;const t=new Date().toISOString().split("T")[0],s=a.employeeId||"EMP-001",r=re(t,s);if(Array.isArray(m.attendances)||(m.attendances=[]),m.attendances.some(p=>p.attendanceId===r))return;const c=String(e?.getHours?e.getHours():new Date().getHours()).padStart(2,"0"),l=String(e?.getMinutes?e.getMinutes():new Date().getMinutes()).padStart(2,"0"),x=`${c}:${l}`,d=parseFloat(a.dailyAllowance)||2e4,b={attendanceId:r,date:t,employeeUid:a.uid||s,employeeId:s,employeeName:a.name||"Kasir POS",position:a.position||"Kasir POS",role:a.role||"cashier",status:"present",clockIn:x,clockOut:"17:00",allowanceEarned:d,notes:"Absensi otomatis dari Buka Shift Kasir",source:"pos_shift",createdAt:R.firestore.FieldValue.serverTimestamp()};m.attendances.push({id:r,...b});try{localStorage.setItem("freshmart_attendances",JSON.stringify(m.attendances))}catch{}try{const p=$.collection("freshmart").doc("cms_data").collection("attendances").doc(r);(await p.get()).exists||await p.set(b)}catch{}console.log("[HR Attendance] Presensi kasir tercatat otomatis dari shift:",s,x)}catch(t){console.warn("[HR Attendance] Gagal auto-record shift attendance:",t.message)}},je=(a=[],e,t)=>{const s=a.filter(b=>{const p=b.date&&b.date.startsWith(e),k=t?b.employeeId===t||b.employeeUid===t:!0;return p&&k});let r=0,i=0,c=0,l=0,x=0,d=0;return s.forEach(b=>{b.status==="present"?(r++,d+=parseFloat(b.allowanceEarned)||0):b.status==="late"?(i++,d+=parseFloat(b.allowanceEarned)||0):b.status==="permit"?c++:b.status==="sick"?l++:b.status==="alpha"&&x++}),{totalRecords:s.length,presentDays:r,lateDays:i,permitDays:c,sickDays:l,alphaDays:x,totalAllowance:d}};typeof window<"u"&&(window.ATTENDANCE_STATUSES=xe,window.generateAttendanceId=re,window.loadAttendancesForDate=Te,window.renderAttendanceView=X,window.navigateAttendanceDate=sa,window.onAttendanceDateChanged=ra,window.setQuickAttendanceStatus=oa,window.saveSingleAttendance=la,window.bulkMarkAllPresent=na,window.autoRecordCashierShiftAttendance=ia,window.calculateMonthlyAttendanceSummary=je);let C=new Date().toISOString().slice(0,7),_=[],oe=null;const we=async()=>{try{if(typeof window<"u"&&typeof window.saveApp=="function")return await window.saveApp();const a=await ne(()=>import("./module-pos-WEjenQzn.js").then(e=>e.W),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url);if(typeof a?.saveApp=="function")return await a.saveApp()}catch{}},me=(a,e)=>{const t=(a||new Date().toISOString().slice(0,7)).replace(/[^0-9]/g,""),s=(e||"STAFF").replace(/[^a-zA-Z0-9]/g,"");return`PAY-${t}-${s}`},F=a=>{if(!a)return"-";const[e,t]=a.split("-"),s=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],r=parseInt(t,10)-1;return`${s[r]||t} ${e}`},Re=async(a=C)=>{try{let e=[];try{const t=await $.collection("freshmart").doc("cms_data").collection("salary_payrolls").where("period","==",a).get();t&&!t.empty&&(e=t.docs.map(s=>({id:s.id,...s.data()})))}catch{}if(!e||e.length===0){let t=Array.isArray(m.payrollRuns)?m.payrollRuns:[];if(t.length===0)try{t=JSON.parse(localStorage.getItem("freshmart_payroll_runs")||"[]"),Array.isArray(t)&&t.length>0&&(m.payrollRuns=t)}catch{}e=t.filter(s=>s.period===a)}return _=e,e}catch(e){return console.error("[HR Payroll] Gagal memuat payroll:",e),_=(Array.isArray(m.payrollRuns)?m.payrollRuns:[]).filter(s=>s.period===a),_}},le=(a,e,t=[],s=[])=>{const r=a.employeeId||a.uid,i=parseFloat(a.baseSalary)||0,c=parseFloat(a.dailyAllowance)||0,l=je(t,e,r),x=l.presentDays||0,d=l.lateDays||0,b=x+d;let p=l.totalAllowance;p<=0&&c>0&&b>0&&(p=b*c);const k=s.find(j=>(j.employeeId===r||j.employeeUid===a.uid)&&j.status==="active"&&parseFloat(j.remainingAmount)>0);let y=0,g="",v=0;if(k){g=k.advanceId||k.id,v=parseFloat(k.remainingAmount)||0;const j=parseFloat(k.monthlyInstallment)||v;y=Math.min(v,j)}const w=0,A=0,h=0,B=0,H=i+p+w+A,I=y+h+B,T=Math.max(0,H-I);return{payrollId:me(e,r),period:e,periodLabel:F(e),employeeUid:a.uid||"",employeeId:r,employeeName:a.name||"Karyawan",employeeRole:a.role||"staff",position:a.position||"Staf Toko",phone:a.phone||"",status:"draft",baseSalary:i,dailyAllowanceRate:c,presentDays:x,lateDays:d,permitDays:l.permitDays||0,sickDays:l.sickDays||0,alphaDays:l.alphaDays||0,totalAttendanceDays:b,attendanceAllowance:p,bonus:w,overtimePay:A,totalEarnings:H,advanceDeduction:y,advanceId:g,advanceRemainingBefore:v,lostItemDeduction:h,lostItemNotes:"",otherDeductions:B,totalDeductions:I,netSalary:T,paymentMethod:a.paymentMethod||"transfer",bankName:a.bankName||"BCA",bankAccount:a.bankAccount||"-",notes:`Gaji periode ${F(e)}`,createdAt:new Date().toISOString()}},ee=async a=>{if(!a)return;a.innerHTML=`
    <div class="text-center py-16">
        <i class="fa-solid fa-spinner fa-spin text-3xl" style="color: var(--color-primary)"></i>
        <p class="text-xs text-slate-400 mt-2 font-medium">Memuat data payroll &amp; rekap kehadiran tim...</p>
    </div>`,await Re(C);const e=Array.isArray(m.attendances)?m.attendances:[],t=Array.isArray(m.salaryAdvances)?m.salaryAdvances:[],s=J(),r=s.map(p=>{const k=p.employeeId||p.uid,y=_.find(g=>g.employeeId===k||g.employeeUid===p.uid);return y||le(p,C,e,t)}),i=r.reduce((p,k)=>p+(parseFloat(k.netSalary)||0),0),c=r.filter(p=>p.status==="paid").length,l=r.length-c,x=r.reduce((p,k)=>p+(parseFloat(k.advanceDeduction)||0),0),d=r.reduce((p,k)=>p+(parseFloat(k.lostItemDeduction)||0),0),b=F(C);a.innerHTML=`
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
                <input type="month" id="payroll-period-picker" value="${C}"
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
                    <span class="text-[11px] font-bold">Total Gaji (${b})</span>
                    <i class="fa-solid fa-sack-dollar text-emerald-500 text-xs"></i>
                </div>
                <div class="text-sm sm:text-base font-black text-emerald-600 dark:text-emerald-400 font-mono truncate">
                    Rp ${f(i)}
                </div>
                <div class="text-[10px] text-slate-400 mt-0.5">${s.length} Karyawan (Termasuk Owner)</div>
            </div>

            <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs">
                <div class="flex items-center justify-between text-slate-400 mb-1">
                    <span class="text-[11px] font-bold">Status Pembayaran</span>
                    <i class="fa-solid fa-circle-check text-blue-500 text-xs"></i>
                </div>
                <div class="text-sm sm:text-base font-black text-slate-800 dark:text-white font-mono">
                    <span class="text-emerald-600">${c} Lunas</span> / <span class="text-amber-500">${l} Draf</span>
                </div>
                <div class="text-[10px] text-slate-400 mt-0.5">${l===0?"Semua gaji lunas":"Menunggu pencairan"}</div>
            </div>

            <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs">
                <div class="flex items-center justify-between text-slate-400 mb-1">
                    <span class="text-[11px] font-bold">Potongan Kasbon</span>
                    <i class="fa-solid fa-hand-holding-dollar text-xs" style="color: var(--color-primary)"></i>
                </div>
                <div class="text-sm sm:text-base font-black text-[var(--color-primary)] font-mono truncate">
                    Rp ${f(x)}
                </div>
                <div class="text-[10px] text-slate-400 mt-0.5">Otomatis potong saldo pinjaman</div>
            </div>

            <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs">
                <div class="flex items-center justify-between text-slate-400 mb-1">
                    <span class="text-[11px] font-bold">Potongan Barang Hilang</span>
                    <i class="fa-solid fa-boxes-packing text-rose-500 text-xs"></i>
                </div>
                <div class="text-sm sm:text-base font-black text-rose-600 dark:text-rose-400 font-mono truncate">
                    Rp ${f(d)}
                </div>
                <div class="text-[10px] text-slate-400 mt-0.5">Kompensasi selisih stock opname</div>
            </div>
        </div>

        <!-- Daftar Kartu Payroll Karyawan -->
        <div class="space-y-3" id="payroll-items-container">
            ${r.map((p,k)=>{const y=p.status==="paid",g=p.employeeRole==="owner"||p.employeeId==="OWN-001";return`
                <div class="p-4 rounded-2xl bg-white dark:bg-slate-800 border ${y?"border-emerald-200 dark:border-emerald-800/60":"border-slate-200/90 dark:border-slate-700"} shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all">
                    <!-- Info Karyawan -->
                    <div class="flex items-start gap-3.5 min-w-0 flex-1">
                        <div class="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm shrink-0 shadow-2xs border ${g?"text-[var(--color-primary)] border-[rgba(var(--color-primary-rgb),0.3)]":"bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-900/60 dark:text-slate-200 dark:border-slate-700"}"
                            style="${g?"background: rgba(var(--color-primary-rgb), 0.12)":""}">
                            ${g?'<i class="fa-solid fa-crown text-amber-500"></i>':p.employeeName?.charAt(0)?.toUpperCase()||"K"}
                        </div>
                        <div class="min-w-0 flex-1">
                            <div class="flex items-center gap-2 flex-wrap">
                                <span class="text-sm font-black text-slate-900 dark:text-white truncate">${o(p.employeeName)}</span>
                                <span class="font-mono text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                                    ${o(p.employeeId)}
                                </span>
                                <span class="inline-flex items-center gap-1 text-[10px] font-black px-2 py-0.5 rounded-full ${y?"bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300":"bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border border-amber-300"}">
                                    <i class="fa-solid ${y?"fa-circle-check text-emerald-500":"fa-clock text-amber-500"} text-[9px]"></i>
                                    ${y?"Lunas / Dibayar":"Draf Penggajian"}
                                </span>
                            </div>
                            <div class="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-1 flex-wrap">
                                <span class="font-bold text-slate-700 dark:text-slate-200">${o(p.position)}</span>
                                <span>•</span>
                                <span>Absensi: <strong>${p.totalAttendanceDays||0} Hari Masuk</strong></span>
                                <span>•</span>
                                <span>Gaji Pokok: <strong>Rp ${f(p.baseSalary)}</strong></span>
                                ${p.attendanceAllowance>0?`<span>•</span><span>Tunjangan: <strong class="text-[var(--color-primary)] font-bold">+${f(p.attendanceAllowance)}</strong></span>`:""}
                            </div>
                            <!-- Rincian Potongan -->
                            <div class="flex items-center gap-2 text-[11px] text-slate-400 dark:text-slate-500 mt-1.5 flex-wrap">
                                ${p.advanceDeduction>0?`<span class="text-[var(--color-primary)] font-bold"><i class="fa-solid fa-hand-holding-dollar mr-0.5"></i> Potong Kasbon: -${f(p.advanceDeduction)}</span><span>•</span>`:""}
                                ${p.lostItemDeduction>0?`<span class="text-rose-500 font-medium"><i class="fa-solid fa-triangle-exclamation mr-0.5"></i> Potong Hilang: -${f(p.lostItemDeduction)}</span><span>•</span>`:""}
                                <span>Metode: <strong class="text-slate-600 dark:text-slate-300">${o(p.paymentMethod?.toUpperCase())}</strong></span>
                                ${p.bankAccount&&p.bankAccount!=="-"?`<span>(${o(p.bankName)}: ${o(p.bankAccount)})</span>`:""}
                            </div>
                        </div>
                    </div>

                    <!-- Nominal Take Home Pay & Tombol Aksi -->
                    <div class="flex items-center justify-between md:justify-end gap-3 shrink-0 border-t md:border-t-0 pt-3 md:pt-0 border-slate-100 dark:border-slate-700/60">
                        <div class="text-left md:text-right">
                            <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Take Home Pay</span>
                            <span class="text-base sm:text-lg font-black text-emerald-600 dark:text-emerald-400 font-mono">
                                Rp ${f(p.netSalary)}
                            </span>
                        </div>
                        <div class="flex items-center gap-2">
                            <button onclick="window.openPayslipPreviewModal('${o(p.payrollId||p.id)}', '${o(p.employeeId)}')"
                                title="Lihat & Cetak Slip Gaji"
                                class="px-3.5 py-2.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 transition-all active:scale-95 cursor-pointer shadow-2xs flex items-center gap-1.5">
                                <i class="fa-solid fa-receipt" style="color: var(--color-primary)"></i>
                                <span>Slip Gaji</span>
                            </button>
                            <button onclick="window.openPayrollItemModal('${o(p.employeeId)}', '${C}')"
                                title="${y?"Ubah Rincian Kompensasi":"Hitung & Bayar Gaji"}"
                                class="px-3.5 py-2.5 rounded-xl text-xs font-black text-white transition-all active:scale-95 cursor-pointer shadow-md flex items-center gap-1.5"
                                style="background: ${y?"var(--color-primary)":"#10b981"}">
                                <i class="fa-solid ${y?"fa-pen-to-square":"fa-cash-register"}"></i>
                                <span>${y?"Edit":"Bayar"}</span>
                            </button>
                        </div>
                    </div>
                </div>`}).join("")}
        </div>
    </div>`},da=a=>{const[e,t]=C.split("-");let s=parseInt(e,10),r=parseInt(t,10)+a;r<1?(r=12,s-=1):r>12&&(r=1,s+=1),C=`${s}-${String(r).padStart(2,"0")}`;const i=n("payroll-period-picker");i&&(i.value=C);const c=n("cashier-panel-payroll");c&&ee(c)},ca=a=>{if(!a)return;C=a;const e=n("cashier-panel-payroll");e&&ee(e)},pa=async(a,e=C)=>{if(!M("mengelola penggajian karyawan"))return;const s=J().find(b=>b.employeeId===a||b.uid===a);if(!s){S("Karyawan tidak ditemukan","warning");return}const r=Array.isArray(m.attendances)?m.attendances:[],i=Array.isArray(m.salaryAdvances)?m.salaryAdvances:[],l=_.find(b=>(b.employeeId===a||b.employeeUid===s.uid)&&b.period===e)||le(s,e,r,i),x=n("modal-payroll-item-form");x&&x.remove();const d=F(e);document.body.insertAdjacentHTML("beforeend",`
    <div id="modal-payroll-item-form" class="fixed inset-0 z-[9990] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/75"
        onclick="if(event.target===this) window.closePayrollItemModal()">
        <div class="bg-white dark:bg-slate-900 rounded-t-[2rem] sm:rounded-3xl shadow-2xl w-full max-w-xl flex flex-col max-h-[92vh] sm:max-h-[90vh] overflow-hidden scale-95 transition-transform duration-300 border border-slate-200 dark:border-slate-800" id="payroll-item-modal-box">
            <!-- Mobile Drag Handle -->
            <div class="sm:hidden flex justify-center pt-3 pb-1 cursor-grab">
                <div class="w-10 h-1 rounded-full bg-slate-300 dark:bg-slate-700"></div>
            </div>

            <!-- Modal Header -->
            <div class="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0 bg-slate-50 dark:bg-slate-800/90">
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
                            ${o(s.name)} • ${o(s.position)} • Periode ${o(d)}
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
                        <span class="font-black text-slate-900 dark:text-white block">Presensi Kehadiran (${d}):</span>
                        <span class="text-slate-600 dark:text-slate-300 text-[11px]">
                            Hadir: <strong>${l.presentDays}</strong> • Terlambat: <strong>${l.lateDays}</strong> • Izin: <strong>${l.permitDays}</strong> • Sakit: <strong>${l.sickDays}</strong> • Alpha: <strong>${l.alphaDays}</strong>
                        </span>
                    </div>
                    <span class="font-mono font-bold text-xs px-2.5 py-1 rounded-xl bg-white dark:bg-slate-800 border"
                        style="background: rgba(var(--color-primary-rgb), 0.1); border-color: rgba(var(--color-primary-rgb), 0.25); color: var(--color-primary)">
                        Total Masuk: ${l.totalAttendanceDays} Hari
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
                            <input type="number" id="pay-base-salary" value="${l.baseSalary}" min="0" step="50000"
                                oninput="window.recalculatePayrollItem()"
                                class="w-full min-h-[44px] text-[16px] sm:text-sm px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white font-mono font-bold focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] shadow-inner">
                        </div>
                        <div>
                            <label class="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                                Tunjangan Harian / Uang Makan (Rp)
                            </label>
                            <input type="number" id="pay-attendance-allowance" value="${l.attendanceAllowance}" min="0" step="5000"
                                oninput="window.recalculatePayrollItem()"
                                class="w-full min-h-[44px] text-[16px] sm:text-sm px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white font-mono font-bold focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] shadow-inner">
                            <span class="text-[10px] text-slate-400 mt-0.5 block">Hitungan otomatis: ${l.totalAttendanceDays} hari x ${f(l.dailyAllowanceRate)}</span>
                        </div>
                        <div>
                            <label class="font-bold text-slate-700 dark:text-slate-300 block mb-1">Bonus Kinerja / Insentif Toko (Rp)</label>
                            <input type="number" id="pay-bonus" value="${l.bonus||0}" min="0" step="25000"
                                oninput="window.recalculatePayrollItem()"
                                placeholder="0"
                                class="w-full min-h-[44px] text-[16px] sm:text-sm px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white font-mono font-bold focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] shadow-inner">
                        </div>
                        <div>
                            <label class="font-bold text-slate-700 dark:text-slate-300 block mb-1">Uang Lembur / Tambahan (Rp)</label>
                            <input type="number" id="pay-overtime" value="${l.overtimePay||0}" min="0" step="25000"
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
                            <input type="number" id="pay-advance-deduction" value="${l.advanceDeduction||0}" min="0" step="10000"
                                oninput="window.recalculatePayrollItem()"
                                class="w-full min-h-[44px] text-[16px] sm:text-sm px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white font-mono font-bold focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] shadow-inner">
                            ${l.advanceId?`
                                <span class="text-[10px] text-[var(--color-primary)] mt-0.5 block font-medium">
                                    Terkoneksi #${l.advanceId} (Sisa saldo kasbon: Rp ${f(l.advanceRemainingBefore)})
                                </span>
                            `:'<span class="text-[10px] text-slate-400 mt-0.5 block">Tidak ada kasbon aktif</span>'}
                        </div>
                        <div>
                            <label class="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                                Potongan Selisih Barang Hilang / Stock Opname (Rp)
                            </label>
                            <input type="number" id="pay-lost-item-deduction" value="${l.lostItemDeduction||0}" min="0" step="5000"
                                oninput="window.recalculatePayrollItem()"
                                placeholder="0"
                                class="w-full min-h-[44px] text-[16px] sm:text-sm px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white font-mono font-bold focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] shadow-inner">
                            <span class="text-[10px] text-slate-400 mt-0.5 block">Disesuaikan jabatan &amp; tanggung jawab staf</span>
                        </div>
                    </div>

                    <div>
                        <label class="font-bold text-slate-700 dark:text-slate-300 block mb-1">Keterangan Pemotongan Barang Hilang / Catatan</label>
                        <input type="text" id="pay-lost-item-notes" value="${o(l.lostItemNotes||"")}"
                            placeholder="Contoh: Selisih opname toko 1 sak semen & 2 kran air"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] shadow-inner">
                    </div>
                </div>

                <!-- Bagian 3: Ringkasan Kalkulasi Take Home Pay -->
                <div class="p-4 rounded-2xl border border-emerald-200 dark:border-emerald-800/80 bg-gradient-to-br from-emerald-500/10 via-slate-50 to-white dark:from-emerald-950/40 dark:via-slate-800 dark:to-slate-800 space-y-2">
                    <div class="flex items-center justify-between text-slate-600 dark:text-slate-300 text-xs">
                        <span>Total Penghasilan Bruto:</span>
                        <strong class="font-mono text-emerald-600 dark:text-emerald-400" id="pay-total-earnings-display">
                            Rp ${f(l.totalEarnings)}
                        </strong>
                    </div>
                    <div class="flex items-center justify-between text-slate-600 dark:text-slate-300 text-xs">
                        <span>Total Potongan:</span>
                        <strong class="font-mono text-rose-500 dark:text-rose-400" id="pay-total-deductions-display">
                            -Rp ${f(l.totalDeductions)}
                        </strong>
                    </div>
                    <div class="border-t border-slate-200 dark:border-slate-700 pt-2 flex items-center justify-between">
                        <span class="font-black text-slate-900 dark:text-white text-sm">Gaji Bersih (Take Home Pay):</span>
                        <span class="font-black text-lg sm:text-xl font-mono text-emerald-600 dark:text-emerald-400" id="pay-net-salary-display">
                            Rp ${f(l.netSalary)}
                        </span>
                    </div>
                </div>

                <!-- Bagian 4: Pengaturan Pembayaran -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                        <label class="font-bold text-slate-700 dark:text-slate-300 block mb-1">Metode Pembayaran</label>
                        <select id="pay-payment-method"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white font-bold focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] shadow-inner">
                            <option value="transfer" ${l.paymentMethod==="transfer"?"selected":""}>Transfer Bank / Rekening</option>
                            <option value="cash" ${l.paymentMethod==="cash"?"selected":""}>Tunai Langsung (Kas Toko)</option>
                        </select>
                    </div>
                    <div>
                        <label class="font-bold text-slate-700 dark:text-slate-300 block mb-1">Rekening Karyawan</label>
                        <input type="text" id="pay-bank-account" value="${o(l.bankAccount!=="-"?`${l.bankName}: ${l.bankAccount}`:"Tunai / Kas Toko")}"
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
                        style="background: #10b981;">
                        <i class="fa-solid fa-check"></i>
                        <span>Bayar &amp; Terbitkan Slip</span>
                    </button>
                </div>
            </div>
        </div>
    </div>`),typeof window.pushModalHistory=="function"&&window.pushModalHistory("payrollItemForm"),setTimeout(()=>{const b=n("payroll-item-modal-box");b&&b.classList.remove("scale-95")},10)},De=(a=!1)=>{const e=()=>{const t=n("modal-payroll-item-form");t&&(t.style.opacity="0",setTimeout(()=>t.remove(),200))};typeof window.requestCloseModal=="function"?window.requestCloseModal("payrollItemForm",a,e):e()},ba=()=>{const a=parseFloat(n("pay-base-salary")?.value)||0,e=parseFloat(n("pay-attendance-allowance")?.value)||0,t=parseFloat(n("pay-bonus")?.value)||0,s=parseFloat(n("pay-overtime")?.value)||0,r=parseFloat(n("pay-advance-deduction")?.value)||0,i=parseFloat(n("pay-lost-item-deduction")?.value)||0,c=a+e+t+s,l=r+i,x=Math.max(0,c-l),d=n("pay-total-earnings-display"),b=n("pay-total-deductions-display"),p=n("pay-net-salary-display");d&&(d.textContent=`Rp ${f(c)}`),b&&(b.textContent=`-Rp ${f(l)}`),p&&(p.textContent=`Rp ${f(x)}`)},xa=async(a,e,t="paid")=>{if(!M("menyimpan data payroll karyawan"))return;const r=J().find(h=>h.employeeId===a||h.uid===a);if(!r)return;const i=parseFloat(n("pay-base-salary")?.value)||0,c=parseFloat(n("pay-attendance-allowance")?.value)||0,l=parseFloat(n("pay-bonus")?.value)||0,x=parseFloat(n("pay-overtime")?.value)||0,d=parseFloat(n("pay-advance-deduction")?.value)||0,b=parseFloat(n("pay-lost-item-deduction")?.value)||0,p=n("pay-lost-item-notes")?.value?.trim()||"",k=n("pay-payment-method")?.value||"transfer",y=n("pay-sync-expense")?.checked!==!1,g=i+c+l+x,v=d+b,w=Math.max(0,g-v),A=me(e,a);N(t==="paid"?"Memproses pembayaran gaji...":"Menyimpan draf payroll...");try{let h=null;if(t==="paid"&&y&&w>0){h="exp_pay_"+Date.now();const T={id:h,date:new Date().toISOString().split("T")[0],category:"gaji",amount:w,desc:`Gaji Karyawan: ${r.name} (${r.position}) - Periode ${F(e)}`,source:k==="cash"?"cash":"bank",recipient:r.name,receiptUrl:"",payrollId:A,createdAt:new Date().toISOString()};Array.isArray(m.expenses)||(m.expenses=[]),m.expenses.unshift(T);try{await we()}catch{}}if(t==="paid"&&d>0){const j=(Array.isArray(m.salaryAdvances)?m.salaryAdvances:[]).find(K=>(K.employeeId===a||K.employeeUid===r.uid)&&K.status==="active"&&parseFloat(K.remainingAmount)>0);if(j){const K=j.advanceId||j.id;try{await be(K,d,`Pemotongan payroll periode ${F(e)}`)}catch(ae){console.warn("[HR Payroll] Gagal memotong saldo kasbon:",ae)}}}const B={payrollId:A,period:e,periodLabel:F(e),employeeUid:r.uid||"",employeeId:a,employeeName:r.name,employeeRole:r.role,position:r.position,phone:r.phone||"",status:t,baseSalary:i,attendanceAllowance:c,bonus:l,overtimePay:x,totalEarnings:g,advanceDeduction:d,lostItemDeduction:b,lostItemNotes:p,totalDeductions:v,netSalary:w,paymentMethod:k,bankName:r.bankName||"BCA",bankAccount:r.bankAccount||"-",expenseId:h,notes:`Gaji ${F(e)}`,updatedAt:R.firestore.FieldValue.serverTimestamp(),paidAt:t==="paid"?new Date().toISOString():null};try{await $.collection("freshmart").doc("cms_data").collection("salary_payrolls").doc(A).set(B,{merge:!0})}catch{}Array.isArray(m.payrollRuns)||(m.payrollRuns=[]);const H=m.payrollRuns.findIndex(T=>T.payrollId===A||T.id===A);H>-1?m.payrollRuns[H]={id:A,...B}:m.payrollRuns.unshift({id:A,...B});try{localStorage.setItem("freshmart_payroll_runs",JSON.stringify(m.payrollRuns)),await we()}catch{}De(),S(t==="paid"?`Gaji Rp ${f(w)} untuk ${r.name} berhasil dibayarkan!`:`Draf gaji untuk ${r.name} berhasil disimpan`,"success");const I=n("cashier-panel-payroll");I&&ee(I)}catch(h){console.error("[HR Payroll] Gagal menyimpan payroll:",h),S("Gagal menyimpan: "+h.message,"error")}finally{O()}},ma=(a,e)=>{let t=_.find(i=>(i.payrollId||i.id)===a);if(!t&&e){const i=J().find(c=>c.employeeId===e||c.uid===e);if(i){const c=Array.isArray(m.attendances)?m.attendances:[],l=Array.isArray(m.salaryAdvances)?m.salaryAdvances:[];t=le(i,C,c,l)}}if(!t){S("Data slip gaji tidak ditemukan","warning");return}oe=t;const s=n("modal-payslip-preview");s&&s.remove();const r=m.store||{name:"TOKO PUTRI",address:"Jl. Raya Toko Putri"};document.body.insertAdjacentHTML("beforeend",`
    <div id="modal-payslip-preview" class="fixed inset-0 z-[9990] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/75"
        onclick="if(event.target===this) window.closePayslipPreviewModal()">
        <div class="bg-white dark:bg-slate-900 rounded-t-[2rem] sm:rounded-3xl shadow-2xl w-full max-w-lg flex flex-col max-h-[92vh] sm:max-h-[90vh] overflow-hidden scale-95 transition-transform duration-300 border border-slate-200 dark:border-slate-800" id="payslip-preview-modal-box">
            <!-- Mobile Drag Handle -->
            <div class="sm:hidden flex justify-center pt-3 pb-1 cursor-grab">
                <div class="w-10 h-1 rounded-full bg-slate-300 dark:bg-slate-700"></div>
            </div>

            <!-- Modal Header -->
            <div class="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0 bg-slate-50 dark:bg-slate-800/90">
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
                            <span class="font-mono font-bold">Rp ${f(t.baseSalary)}</span>
                        </div>
                        ${t.attendanceAllowance>0?`
                        <div class="flex justify-between">
                            <span class="text-slate-600 dark:text-slate-300">Tunjangan Kehadiran (${t.totalAttendanceDays||0} Hari):</span>
                            <span class="font-mono font-bold text-emerald-600 dark:text-emerald-400">+Rp ${f(t.attendanceAllowance)}</span>
                        </div>`:""}
                        ${t.bonus>0?`
                        <div class="flex justify-between">
                            <span class="text-slate-600 dark:text-slate-300">Bonus Kinerja &amp; Insentif:</span>
                            <span class="font-mono font-bold text-emerald-600 dark:text-emerald-400">+Rp ${f(t.bonus)}</span>
                        </div>`:""}
                        ${t.overtimePay>0?`
                        <div class="flex justify-between">
                            <span class="text-slate-600 dark:text-slate-300">Uang Lembur:</span>
                            <span class="font-mono font-bold text-emerald-600 dark:text-emerald-400">+Rp ${f(t.overtimePay)}</span>
                        </div>`:""}
                        <div class="flex justify-between pt-1 border-t border-slate-200 dark:border-slate-700 font-bold">
                            <span>Total Penghasilan Bruto:</span>
                            <span class="font-mono text-emerald-600 dark:text-emerald-400">Rp ${f(t.totalEarnings)}</span>
                        </div>
                    </div>

                    <!-- Rincian Potongan (-) -->
                    <div class="space-y-1.5 pb-3 border-b border-dashed border-slate-300 dark:border-slate-600">
                        <span class="text-[11px] font-black uppercase text-rose-500 tracking-wider block">POTONGAN (-)</span>
                        ${t.advanceDeduction>0?`
                        <div class="flex justify-between">
                            <span class="text-slate-600 dark:text-slate-300">Angsuran Kasbon (#${o(t.advanceId||"KSB")}):</span>
                            <span class="font-mono font-bold text-rose-500">-Rp ${f(t.advanceDeduction)}</span>
                        </div>`:""}
                        ${t.lostItemDeduction>0?`
                        <div class="flex justify-between">
                            <span class="text-slate-600 dark:text-slate-300">Potongan Selisih Barang Hilang:</span>
                            <span class="font-mono font-bold text-rose-500">-Rp ${f(t.lostItemDeduction)}</span>
                        </div>
                        ${t.lostItemNotes?`<span class="text-[10px] text-slate-400 italic block pl-2">${o(t.lostItemNotes)}</span>`:""}`:""}
                        ${t.totalDeductions===0?'<div class="text-slate-400 text-[11px] italic">Tidak ada potongan pada periode ini</div>':""}
                        <div class="flex justify-between pt-1 border-t border-slate-200 dark:border-slate-700 font-bold">
                            <span>Total Potongan:</span>
                            <span class="font-mono text-rose-500">-Rp ${f(t.totalDeductions)}</span>
                        </div>
                    </div>

                    <!-- Total Gaji Bersih (Take Home Pay) -->
                    <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-emerald-300 dark:border-emerald-700 flex items-center justify-between">
                        <div>
                            <span class="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">GAJI BERSIH (TAKE HOME PAY)</span>
                            <span class="text-[10px] text-slate-500">Metode: ${o(t.paymentMethod?.toUpperCase())}</span>
                        </div>
                        <span class="text-lg font-black text-emerald-600 dark:text-emerald-400 font-mono">
                            Rp ${f(t.netSalary)}
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
    </div>`),typeof window.pushModalHistory=="function"&&window.pushModalHistory("payslipPreview"),setTimeout(()=>{const i=n("payslip-preview-modal-box");i&&i.classList.remove("scale-95")},10)},fa=(a=!1)=>{const e=()=>{const t=n("modal-payslip-preview");t&&(t.style.opacity="0",setTimeout(()=>t.remove(),200))};typeof window.requestCloseModal=="function"?window.requestCloseModal("payslipPreview",a,e):e()},ua=a=>{const e=oe||_.find(l=>(l.payrollId||l.id)===a);if(!e)return;const t=m.store||{name:"TOKO PUTRI"},s=String(e.phone||"").replace(/[^0-9]/g,""),r=[`*SLIP GAJI RESMI - ${t.name?.toUpperCase()||"TOKO PUTRI"}*`,`Periode: *${e.periodLabel}*`,"----------------------------------------","👤 *KARYAWAN*",`• ID: \`${e.employeeId}\``,`• Nama: *${e.employeeName}*`,`• Jabatan: ${e.position}`,`• Hari Masuk: ${e.totalAttendanceDays||0} Hari`,"----------------------------------------","💰 *PENGHASILAN (+)*",`• Gaji Pokok: Rp ${f(e.baseSalary)}`,e.attendanceAllowance>0?`• Tunjangan Absensi: +Rp ${f(e.attendanceAllowance)}`:"",e.bonus>0?`• Bonus / Insentif: +Rp ${f(e.bonus)}`:"",e.overtimePay>0?`• Uang Lembur: +Rp ${f(e.overtimePay)}`:"",`*Total Bruto: Rp ${f(e.totalEarnings)}*`,"----------------------------------------","✂️ *POTONGAN (-)*",e.advanceDeduction>0?`• Angsuran Kasbon: -Rp ${f(e.advanceDeduction)}`:"",e.lostItemDeduction>0?`• Potongan Selisih Barang Hilang: -Rp ${f(e.lostItemDeduction)}`:"",e.totalDeductions===0?"• Tidak ada potongan":`*Total Potongan: -Rp ${f(e.totalDeductions)}*`,"----------------------------------------","💵 *GAJI BERSIH (TAKE HOME PAY)*",`*Rp ${f(e.netSalary)}*`,`Metode: ${e.paymentMethod?.toUpperCase()} (${e.bankName||"BCA"}: ${e.bankAccount||"-"})`,`Status: *${e.status==="paid"?"LUNAS / DIBAYAR":"DRAF"}*`,"----------------------------------------","_Slip gaji ini dibuat otomatis secara sah oleh sistem manajemen Toko Putri._"].filter(Boolean).join(`
`),i=encodeURIComponent(r),c=s?`https://wa.me/${s}?text=${i}`:`https://api.whatsapp.com/send?text=${i}`;window.open(c,"_blank")},ga=a=>{const e=oe||_.find(i=>(i.payrollId||i.id)===a);if(!e)return;const t=m.store||{name:"TOKO PUTRI",address:"Jl. Raya Toko Putri"},s=`
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
            <div style="display:flex;justify-content:space-between;"><span>Gaji Pokok:</span><span>Rp ${f(e.baseSalary)}</span></div>
            ${e.attendanceAllowance>0?`<div style="display:flex;justify-content:space-between;"><span>Tunj. Kehadiran:</span><span>+Rp ${f(e.attendanceAllowance)}</span></div>`:""}
            ${e.bonus>0?`<div style="display:flex;justify-content:space-between;"><span>Bonus/Insentif:</span><span>+Rp ${f(e.bonus)}</span></div>`:""}
            ${e.overtimePay>0?`<div style="display:flex;justify-content:space-between;"><span>Lembur:</span><span>+Rp ${f(e.overtimePay)}</span></div>`:""}
            <div style="display:flex;justify-content:space-between;font-weight:bold;margin-top:2px;"><span>Bruto:</span><span>Rp ${f(e.totalEarnings)}</span></div>
        </div>
        <div style="border-bottom:1px dashed #000;padding-bottom:6px;margin-bottom:6px;">
            <div style="font-weight:bold;margin-bottom:2px;">POTONGAN:</div>
            ${e.advanceDeduction>0?`<div style="display:flex;justify-content:space-between;"><span>Kasbon:</span><span>-Rp ${f(e.advanceDeduction)}</span></div>`:""}
            ${e.lostItemDeduction>0?`<div style="display:flex;justify-content:space-between;"><span>Selisih Barang:</span><span>-Rp ${f(e.lostItemDeduction)}</span></div>`:""}
            ${e.totalDeductions===0?"<div>(Tidak ada potongan)</div>":""}
            <div style="display:flex;justify-content:space-between;font-weight:bold;margin-top:2px;"><span>Tot. Potongan:</span><span>-Rp ${f(e.totalDeductions)}</span></div>
        </div>
        <div style="font-size:14px;font-weight:bold;display:flex;justify-content:space-between;margin-bottom:10px;">
            <span>TAKE HOME PAY:</span>
            <span>Rp ${f(e.netSalary)}</span>
        </div>
        <div style="text-align:center;font-size:10px;border-top:1px dashed #000;padding-top:8px;">
            <div>Metode: ${o(e.paymentMethod?.toUpperCase())} • Status: ${o(e.status?.toUpperCase())}</div>
            <div style="margin-top:4px;">Terima kasih atas kerja keras Anda!</div>
        </div>
    </div>`,r=window.open("","_blank");r&&(r.document.write(`<html><head><title>Slip Gaji - ${e.employeeName}</title></head><body onload="window.print();">${s}</body></html>`),r.document.close())},ka=a=>{const e=oe||_.find(i=>(i.payrollId||i.id)===a);if(!e)return;const t=m.store||{name:"TOKO PUTRI",address:"Jl. Raya Toko Putri",phone:"081234567890"},s=`
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
                    <td class="text-right font-mono">Rp ${f(e.baseSalary)}</td>
                </tr>
                ${e.attendanceAllowance>0?`
                <tr>
                    <td>Tunjangan Kehadiran (${e.totalAttendanceDays||0} hari x Rp ${f(e.dailyAllowanceRate)})</td>
                    <td class="text-right font-mono text-emerald-600">+Rp ${f(e.attendanceAllowance)}</td>
                </tr>`:""}
                ${e.bonus>0?`
                <tr>
                    <td>Bonus Kinerja &amp; Insentif Toko</td>
                    <td class="text-right font-mono text-emerald-600">+Rp ${f(e.bonus)}</td>
                </tr>`:""}
                ${e.overtimePay>0?`
                <tr>
                    <td>Uang Lembur / Tambahan</td>
                    <td class="text-right font-mono text-emerald-600">+Rp ${f(e.overtimePay)}</td>
                </tr>`:""}
                <tr style="background: #f8fafc; font-weight: 800;">
                    <td>Subtotal Penghasilan Bruto</td>
                    <td class="text-right font-mono text-emerald-600">Rp ${f(e.totalEarnings)}</td>
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
                    <td class="text-right font-mono text-rose-500">-Rp ${f(e.advanceDeduction)}</td>
                </tr>`:""}
                ${e.lostItemDeduction>0?`
                <tr>
                    <td>Potongan Selisih Barang Hilang / Stock Opname ${e.lostItemNotes?`(${o(e.lostItemNotes)})`:""}</td>
                    <td class="text-right font-mono text-rose-500">-Rp ${f(e.lostItemDeduction)}</td>
                </tr>`:""}
                ${e.totalDeductions===0?`
                <tr>
                    <td colspan="2" style="color: #94a3b8; font-style: italic;">Tidak ada potongan pada periode penggajian ini.</td>
                </tr>`:""}
                <tr style="background: #f8fafc; font-weight: 800;">
                    <td>Subtotal Pemotongan</td>
                    <td class="text-right font-mono text-rose-500">-Rp ${f(e.totalDeductions)}</td>
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
            <div class="total-val">Rp ${f(e.netSalary)}</div>
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
    </html>`,r=window.open("","_blank");r&&(r.document.write(s),r.document.close())};typeof window<"u"&&(window.generatePayrollId=me,window.loadPayrollRuns=Re,window.calculateEmployeePayrollDraft=le,window.renderPayrollView=ee,window.navigatePayrollPeriod=da,window.onPayrollPeriodChanged=ca,window.openPayrollItemModal=pa,window.closePayrollItemModal=De,window.recalculatePayrollItem=ba,window.savePayrollItem=xa,window.openPayslipPreviewModal=ma,window.closePayslipPreviewModal=fa,window.sendPayslipWhatsApp=ua,window.printPayslipThermal=ga,window.printPayslipA4=ka);let P=[],q="all",W="";const va=a=>{if(!a)return"";let e=a.replace(/[^0-9]/g,"");return e.startsWith("0")&&(e="62"+e.slice(1)),e},He=async()=>{if(!n("admin-content"))return;const e=document.querySelector("#view-admin .scroll-content");e&&(e.scrollTop=0);const t=Y.currentUser;t&&(t.uid,he);const s=t&&t.uid!==he,r=!t,i=Z(m);let c="",l="";r?(c='<span class="inline-flex items-center gap-1.5 text-amber-600 dark:text-amber-400 font-bold"><i class="fa-solid fa-triangle-exclamation"></i> Status: Pratinjau Lokal</span>',l=`
        <div class="p-4 rounded-2xl border border-amber-300 dark:border-amber-700/80 bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs mb-4">
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
        </div>`):s?(c=`<span class="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-bold"><i class="fa-solid fa-user-shield"></i> Staf (${o(t.email||"Staf")})</span>`,l=`
        <div class="p-3.5 rounded-2xl border border-blue-200 dark:border-blue-800/80 bg-blue-50/80 dark:bg-blue-950/40 text-blue-800 dark:text-blue-200 flex items-center gap-3 shadow-2xs mb-4">
            <div class="w-8 h-8 rounded-xl bg-blue-200/70 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 flex items-center justify-center shrink-0">
                <i class="fa-solid fa-shield-halved text-xs"></i>
            </div>
            <div class="text-[11px] leading-snug">
                <span class="font-bold">Mode Akun Staf (${o(t.email||"Staf")}):</span> Anda dapat melihat direktori staf. Penambahan, pengubahan wewenang hak akses, dan penghapusan staf diproteksi eksklusif untuk Pemilik Toko (Owner).
            </div>
        </div>`):c=`<span class="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold"><i class="fa-solid fa-circle-check"></i> Owner Terverifikasi (${o(t.email||"Master")})</span>`,Ue("admin-content",`
    <div class="space-y-4 max-w-5xl mx-auto pb-24">
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
            ${l}

            <!-- 1. HERO BANNER: MASTER MANAJEMEN STAF & HAK AKSES (THEME HARMONIZED) -->
            <div class="relative overflow-hidden p-5 sm:p-7 rounded-2xl sm:rounded-3xl border border-[rgba(var(--color-primary-rgb),0.2)] bg-white dark:bg-slate-900 shadow-xs">
                <div class="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div class="space-y-1.5">
                        <div class="flex items-center gap-2">
                            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider border shadow-2xs whitespace-nowrap" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25);">
                                <i class="fa-solid fa-users-gear"></i> Tim Toko &amp; Keamanan Akses
                            </span>
                        </div>
                        <h2 class="text-xl sm:text-2xl font-black tracking-tight text-slate-800 dark:text-white flex items-center gap-2.5">
                            Manajemen Staf &amp; Hak Akses
                        </h2>
                        <p class="text-xs text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
                            Daftarkan akun kasir POS, admin operasional, dan staf gudang. Atur wewenang akses modul toko secara granular serta sinkronisasi penggajian dan kompensasi HR.
                        </p>
                    </div>

                    <div class="flex items-center gap-2 shrink-0">
                        <button onclick="window.openOwnerHrModal()" class="px-4 py-3 rounded-xl bg-white/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 border border-slate-200/90 dark:border-slate-700/80 font-bold text-xs shadow-2xs hover:bg-white dark:hover:bg-slate-700 transition-all flex items-center gap-2 cursor-pointer active:scale-95">
                            <i class="fa-solid fa-crown text-amber-500"></i>
                            <span>Profil Owner</span>
                        </button>
                        <button onclick="window.openAddStaffModal()" class="px-5 py-3 rounded-xl text-xs font-black text-white shadow-glow active:scale-95 transition-all flex items-center gap-2 cursor-pointer hover:opacity-95" style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                            <i class="fa-solid fa-user-plus text-xs"></i>
                            <span>Tambah Staf</span>
                        </button>
                    </div>
                </div>

                <!-- 2. METRIK STATISTIK TIM (4-CARD BENTO STAT HUB) -->
                <div id="staff-metrics-container" class="mt-6 pt-5 border-t border-[rgba(var(--color-primary-rgb),0.15)] dark:border-slate-700/60">
                    <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5">
                        <div class="p-4 rounded-2xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                            <div class="flex items-center justify-between mb-2">
                                <span class="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Total Tim &amp; Staf</span>
                                <div class="w-9 h-9 rounded-xl flex items-center justify-center text-xs text-white shadow-xs shrink-0" style="background-color: var(--color-primary);">
                                    <i class="fa-solid fa-users"></i>
                                </div>
                            </div>
                            <p class="text-2xl font-black text-slate-800 dark:text-white tracking-tight">-</p>
                            <p class="text-[10px] font-bold text-slate-400 mt-0.5">Memuat data...</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 3. FLAGSHIP BENTO ISLAND: AKUN PEMILIK UTAMA (SUPER ADMIN & MASTER HR) -->
            <div id="owner-card-container">
                ${ya(i,c)}
            </div>

            <!-- 4. TOOLBAR PENCARIAN & CHICLET FILTER PERAN -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                <!-- Kolom Pencarian High-Contrast -->
                <div class="relative flex-1">
                    <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-sm pointer-events-none" style="color: var(--color-primary)"></i>
                    <input id="staff-search-input" type="text"
                        placeholder="Cari nama staf, ID karyawan, email, no. HP, jabatan..."
                        autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
                        oninput="window.handleStaffSearch(this.value)"
                        class="w-full min-h-[44px] pl-10 pr-10 py-2.5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 text-xs sm:text-sm font-bold text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.2)] shadow-2xs transition-all">
                    <button id="btn-clear-staff-search" onclick="window.clearStaffSearch()" class="hidden absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-300 flex items-center justify-center text-xs hover:bg-rose-100 hover:text-rose-600 transition-all cursor-pointer">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>

                <!-- Filter Kategori Staf (Chiclet Pill Bar) -->
                <div class="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 shrink-0" id="staff-role-filters-bar">
                    <!-- Rendered by renderStaffRoleFilterChiclets() -->
                </div>
            </div>

            <!-- 5. LIST STAF TERDAFTAR (MODERN BENTO CARDS) -->
            <div id="cashier-list-container" class="pt-1">
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
    </div>`),await z()},ya=(a,e)=>`
    <div class="p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-[rgba(var(--color-primary-rgb),0.25)] bg-white/95 dark:bg-slate-800/90 shadow-2xs hover:border-[var(--color-primary)] transition-all">
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div class="flex items-start sm:items-center gap-3.5 sm:gap-4 min-w-0">
                <div class="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-xl shrink-0 shadow-md text-white" style="background-color: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.28);">
                    <i class="fa-solid fa-crown text-amber-300"></i>
                </div>
                <div class="min-w-0 flex-1 space-y-1">
                    <div class="flex items-center gap-2 flex-wrap">
                        <h3 class="text-base font-black text-slate-900 dark:text-white truncate">
                            ${o(a.name||"Akun Pemilik Utama (Owner)")}
                        </h3>
                        <span class="inline-flex items-center gap-1 text-[10px] font-black px-2.5 py-0.5 rounded-full border" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25);">
                            <i class="fa-solid fa-shield-halved text-[9px]"></i> Super Admin Terproteksi
                        </span>
                        <span class="inline-flex items-center gap-1 font-mono text-[10px] font-bold px-2 py-0.5 rounded-md border" style="background: rgba(var(--color-primary-rgb), 0.08); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.2);">
                            ${o(a.employeeId||"OWN-001")}
                        </span>
                        <span class="inline-flex items-center gap-1 text-[10px] font-black px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60">
                            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            Owner Aktif
                        </span>
                    </div>
                    <div class="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300 flex-wrap">
                        <span class="font-bold text-slate-800 dark:text-slate-100">
                            <i class="fa-solid fa-user-tie text-[11px] mr-1" style="color: var(--color-primary)"></i>${o(a.position||"Owner / Direktur Utama")}
                        </span>
                        <span class="text-slate-300 dark:text-slate-600">•</span>
                        <span class="font-black text-emerald-600 dark:text-emerald-400">
                            <i class="fa-solid fa-money-bill-wave text-[10px] mr-1"></i>Rp ${f(a.baseSalary||1e7)}/bln
                        </span>
                        <span class="text-[11px] text-slate-400 dark:text-slate-500 font-medium">(Gaji Pokok Direksi)</span>
                    </div>
                    <div class="flex items-center gap-3 pt-0.5 text-[11px] text-slate-500 dark:text-slate-400 flex-wrap">
                        ${e}
                        <span class="text-slate-300 dark:text-slate-600">•</span>
                        <span class="inline-flex items-center gap-1 font-bold" style="color: var(--color-primary)">
                            <i class="fa-solid fa-key text-[10px]"></i> 22 Modul Lengkap (Akses Penuh)
                        </span>
                        ${a.bankAccount&&a.bankAccount!=="-"?`
                        <span class="text-slate-300 dark:text-slate-600">•</span>
                        <span class="inline-flex items-center gap-1 text-slate-600 dark:text-slate-300 font-semibold">
                            <i class="fa-solid fa-building-columns text-[10px]"></i> ${o(a.bankName||"BCA")}: ${o(a.bankAccount)}
                        </span>`:""}
                    </div>
                </div>
            </div>
            <div class="shrink-0 self-end lg:self-center border-t lg:border-t-0 pt-2.5 lg:pt-0 border-slate-100 dark:border-slate-700/60 w-full lg:w-auto flex justify-end">
                <button onclick="window.openOwnerHrModal()" class="w-full sm:w-auto min-h-[44px] px-4 py-2.5 rounded-xl text-xs font-bold bg-white dark:bg-slate-800 border transition-all cursor-pointer shadow-2xs flex items-center justify-center gap-2 active:scale-95 hover:bg-slate-50 dark:hover:bg-slate-700" style="color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25);">
                    <i class="fa-solid fa-user-pen text-xs"></i>
                    <span>Atur Gaji &amp; HR Owner</span>
                </button>
            </div>
        </div>
    </div>`,ha=a=>{const e=document.querySelector("#view-admin .scroll-content");e&&(e.scrollTop=0);const t=n("tab-btn-cashier-accounts"),s=n("tab-btn-cashier-attendance"),r=n("tab-btn-cashier-advances"),i=n("tab-btn-cashier-payroll"),c=n("tab-btn-cashier-shifts"),l=n("cashier-panel-accounts"),x=n("cashier-panel-attendance"),d=n("cashier-panel-advances"),b=n("cashier-panel-payroll"),p=n("cashier-panel-shifts"),k=(g,v,w)=>{g&&(g.className="min-h-[44px] py-2.5 px-3 sm:px-2.5 rounded-xl text-xs font-black text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 shadow-md shrink-0 sm:shrink min-w-[125px] sm:min-w-0",g.style.background="var(--color-primary)",g.style.boxShadow="0 4px 14px rgba(var(--color-primary-rgb), 0.35)",g.innerHTML=`${v}<span class="truncate">${w}</span>`)},y=(g,v,w)=>{g&&(g.className="min-h-[44px] py-2.5 px-3 sm:px-2.5 rounded-xl text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-700/60 transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 shrink-0 sm:shrink min-w-[125px] sm:min-w-0",g.style.background="transparent",g.style.boxShadow="none",g.innerHTML=`${v}<span class="truncate">${w}</span>`)};y(t,'<i class="fa-solid fa-users-gear"></i>',"Staf &amp; Akses"),y(s,'<i class="fa-solid fa-clipboard-user"></i>',"Absensi Tim"),y(r,'<i class="fa-solid fa-hand-holding-dollar"></i>',"Buku Kasbon"),y(i,'<i class="fa-solid fa-money-check-dollar"></i>',"Gaji &amp; Slip"),y(c,'<i class="fa-solid fa-file-invoice-dollar"></i>',"Shift Kasir"),l&&l.classList.add("hidden"),x&&x.classList.add("hidden"),d&&d.classList.add("hidden"),b&&b.classList.add("hidden"),p&&p.classList.add("hidden"),a==="attendance"?(k(s,'<i class="fa-solid fa-clipboard-user text-white"></i>',"Absensi Tim"),x&&(x.classList.remove("hidden"),X(x))):a==="advances"?(k(r,'<i class="fa-solid fa-hand-holding-dollar text-white"></i>',"Buku Kasbon"),d&&(d.classList.remove("hidden"),V(d))):a==="payroll"?(k(i,'<i class="fa-solid fa-money-check-dollar text-white"></i>',"Gaji &amp; Slip"),b&&(b.classList.remove("hidden"),ee(b))):a==="shifts"?(k(c,'<i class="fa-solid fa-file-invoice-dollar text-white"></i>',"Shift Kasir"),p&&(p.classList.remove("hidden"),We(p))):(k(t,'<i class="fa-solid fa-users-gear text-white"></i>',"Staf &amp; Akses"),l&&l.classList.remove("hidden"))},wa=()=>{const a=n("staff-metrics-container");if(!a)return;const e=Z(m),t=P.length,s=P.filter(d=>d.isActive!==!1).length,r=P.filter(d=>(d.role===u.CASHIER||!d.role)&&d.isActive!==!1).length,i=P.filter(d=>d.role===u.ADMIN&&d.isActive!==!1).length,c=P.filter(d=>d.role===u.STAFF&&d.isActive!==!1).length,l=P.filter(d=>d.isActive===!1).length,x=P.reduce((d,b)=>d+(parseFloat(b.baseSalary)||0),0)+(parseFloat(e?.baseSalary)||1e7);a.innerHTML=`
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5">
        <!-- 1. Total Tim & Staf -->
        <div class="p-4 rounded-2xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div class="flex items-center justify-between mb-2">
                <span class="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Total Tim &amp; Staf</span>
                <div class="w-9 h-9 rounded-xl flex items-center justify-center text-xs text-white shadow-xs shrink-0" style="background-color: var(--color-primary);">
                    <i class="fa-solid fa-users"></i>
                </div>
            </div>
            <p class="text-2xl font-black text-slate-800 dark:text-white tracking-tight">${s+1} <span class="text-xs font-semibold text-slate-400 dark:text-slate-500">/ ${t+1} Akun</span></p>
            <p class="text-[10px] font-bold text-slate-400 dark:text-slate-500 mt-0.5">${l>0?`${l} Akun Dinonaktifkan`:"Seluruh Tim Aktif"}</p>
        </div>

        <!-- 2. Kasir POS Aktif -->
        <div class="p-4 rounded-2xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div class="flex items-center justify-between mb-2">
                <span class="text-[10px] font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Kasir POS Aktif</span>
                <div class="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-xs shadow-xs shrink-0">
                    <i class="fa-solid fa-cash-register"></i>
                </div>
            </div>
            <p class="text-2xl font-black text-emerald-600 dark:text-emerald-400 tracking-tight">${r} <span class="text-xs font-semibold text-slate-400 dark:text-slate-500">Personel</span></p>
            <p class="text-[10px] font-bold text-slate-400 dark:text-slate-500 mt-0.5">Penjualan Kasir Fisik Toko</p>
        </div>

        <!-- 3. Admin & Logistik -->
        <div class="p-4 rounded-2xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div class="flex items-center justify-between mb-2">
                <span class="text-[10px] font-black uppercase tracking-wider text-blue-600 dark:text-blue-400">Admin &amp; Logistik</span>
                <div class="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center text-xs shadow-xs shrink-0">
                    <i class="fa-solid fa-shield-halved"></i>
                </div>
            </div>
            <p class="text-2xl font-black text-blue-600 dark:text-blue-400 tracking-tight">${i+c} <span class="text-xs font-semibold text-slate-400 dark:text-slate-500">Personel</span></p>
            <p class="text-[10px] font-bold text-slate-400 dark:text-slate-500 mt-0.5">${i} Admin • ${c} Staf Gudang</p>
        </div>

        <!-- 4. Beban Gaji Bulanan -->
        <div class="p-4 rounded-2xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div class="flex items-center justify-between mb-2">
                <span class="text-[10px] font-black uppercase tracking-wider text-amber-600 dark:text-amber-400">Beban Gaji Pokok</span>
                <div class="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center text-xs shadow-xs shrink-0">
                    <i class="fa-solid fa-money-bill-wave"></i>
                </div>
            </div>
            <p class="text-xl sm:text-2xl font-black text-amber-600 dark:text-amber-400 tracking-tight">Rp ${f(x)}</p>
            <p class="text-[10px] font-bold text-slate-400 dark:text-slate-500 mt-0.5">Total Gaji Tim &amp; Direksi /bln</p>
        </div>
    </div>`},Ce=()=>{const a=n("staff-role-filters-bar");if(!a)return;const e=P.length,t=P.filter(l=>l.role===u.ADMIN||l.role===u.OWNER||l.role==="admin"||l.role==="owner").length,s=P.filter(l=>l.role===u.CASHIER||l.role==="cashier"||!l.role).length,r=P.filter(l=>l.role===u.STAFF||l.role==="staff").length,i=P.filter(l=>l.isActive===!1).length,c=[{key:"all",label:"Semua Staf",icon:"fa-users",count:e},{key:"cashier",label:"Kasir POS",icon:"fa-cash-register",count:s},{key:"admin",label:"Admin Toko",icon:"fa-shield-halved",count:t},{key:"staff",label:"Staf Gudang",icon:"fa-user-gear",count:r}];i>0&&c.push({key:"inactive",label:"Nonaktif",icon:"fa-user-slash",count:i}),a.innerHTML=c.map(l=>{const x=q===l.key;return`
        <button onclick="window.filterStaffRole('${l.key}')" id="staff-filter-${l.key}"
            class="staff-filter-btn min-h-[38px] px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-2xs flex items-center gap-1.5 active:scale-95 shrink-0 border ${x?"text-white border-transparent":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200/90 dark:border-slate-700/80 hover:border-slate-300 dark:hover:border-slate-600"}"
            style="${x?"background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);":""}">
            <i class="fa-solid ${l.icon} text-[10px]"></i>
            <span>${l.label}</span>
            <span class="ml-0.5 px-1.5 py-0.2 rounded-md text-[10px] font-mono ${x?"bg-white/20 text-white":"bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400"}">${l.count}</span>
        </button>`}).join("")},Aa=a=>{q=a,Ce(),fe()},Ee=a=>{W=(a||"").toLowerCase().trim();const e=n("btn-clear-staff-search");e&&(W?e.classList.remove("hidden"):e.classList.add("hidden")),fe()},Sa=()=>{const a=n("staff-search-input");a&&(a.value="",a.focus()),Ee("")},$a=a=>{if(a.role===u.OWNER)return Q.length;if(a.permissions)return Object.values(a.permissions).filter(Boolean).length;const e=U[a.role]||U[u.CASHIER];return Object.values(e).filter(Boolean).length},fe=()=>{const a=n("cashier-list-container");if(!a)return;let e=P;if(q==="admin"?e=e.filter(s=>s.role===u.ADMIN||s.role===u.OWNER||s.role==="admin"||s.role==="owner"):q==="cashier"?e=e.filter(s=>s.role===u.CASHIER||s.role==="cashier"||!s.role):q==="staff"?e=e.filter(s=>s.role===u.STAFF||s.role==="staff"):q==="inactive"&&(e=e.filter(s=>s.isActive===!1)),W){const s=W;e=e.filter(r=>{const i=(r.name||"").toLowerCase(),c=(r.email||"").toLowerCase(),l=(r.employeeId||"").toLowerCase(),x=(r.phone||"").toLowerCase(),d=(r.position||"").toLowerCase();return i.includes(s)||c.includes(s)||l.includes(s)||x.includes(s)||d.includes(s)})}if(e.length===0){a.innerHTML=`
        <div class="flex flex-col items-center justify-center py-16 text-slate-400 dark:text-slate-600 bg-white/95 dark:bg-slate-800/60 rounded-3xl border border-slate-200/90 dark:border-slate-800 p-8 text-center shadow-2xs">
            <div class="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-3 shadow-xs" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary);">
                <i class="fa-solid fa-user-slash"></i>
            </div>
            <h4 class="font-black text-sm text-slate-800 dark:text-slate-200">Tidak ada staf yang cocok</h4>
            <p class="text-xs mt-1 text-slate-400 dark:text-slate-500 max-w-sm">
                ${W?`Tidak ditemukan staf dengan kata kunci "${o(W)}". Silakan ubah filter atau kata kunci.`:"Belum ada akun staf pada kategori ini."}
            </p>
            <div class="mt-4 flex items-center gap-2">
                ${W?`
                <button onclick="window.clearStaffSearch()" class="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-xs font-bold text-slate-700 dark:text-slate-200 transition-all cursor-pointer">
                    Reset Pencarian
                </button>`:""}
                <button onclick="window.openAddStaffModal()" class="px-4 py-2 rounded-xl text-white text-xs font-black shadow-md transition-all cursor-pointer active:scale-95" style="background: var(--color-primary)">
                    <i class="fa-solid fa-plus mr-1"></i> Tambah Staf Baru
                </button>
            </div>
        </div>`;return}const t=e.map((s,r)=>{const i=s.uid,c=s.isActive!==!1,l=s.createdAt?.toDate?s.createdAt.toDate().toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):s.hireDate||"-",x=(s.name||"Staf").trim().split(/\s+/).slice(0,2).map(w=>w[0]).join("").toUpperCase()||"ST",d=s.role||u.CASHIER,b=$a(s),p=s.employeeId||`EMP-${String(r+1).padStart(3,"0")}`,k=s.position||(d===u.CASHIER?"Kasir POS":d===u.ADMIN?"Admin Operasional":"Staf Gudang & Logistik"),y=parseFloat(s.baseSalary)||0,g=parseFloat(s.dailyAllowance)||0;let v="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25);";return d===u.ADMIN?v="background: rgba(37, 99, 235, 0.12); color: #2563eb; border-color: rgba(37, 99, 235, 0.25);":d===u.STAFF&&(v="background: rgba(217, 119, 6, 0.12); color: #d97706; border-color: rgba(217, 119, 6, 0.25);"),`
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 sm:p-5 bg-white/95 dark:bg-slate-800/95 rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:border-[rgba(var(--color-primary-rgb),0.3)] transition-all">
            <div class="flex items-start sm:items-center gap-3.5 min-w-0 flex-1">
                <div class="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm shrink-0 shadow-2xs border" style="${v}">
                    ${x}
                </div>
                <div class="min-w-0 flex-1 space-y-1">
                    <div class="flex items-center gap-2 flex-wrap">
                        <p class="text-sm sm:text-base font-black text-slate-900 dark:text-white truncate">${o(s.name||"Staf")}</p>
                        ${ze(d)}
                        <span class="inline-flex items-center gap-1 font-mono text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700/80 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600">
                            ${o(p)}
                        </span>
                        <span class="inline-flex items-center gap-1.5 text-[10px] font-black px-2.5 py-0.5 rounded-full ${c?"bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60":"bg-slate-100 dark:bg-slate-700 text-slate-500 border border-slate-200 dark:border-slate-600"}">
                            <span class="w-1.5 h-1.5 rounded-full ${c?"bg-emerald-500 animate-pulse":"bg-slate-400"}"></span>
                            ${c?"Aktif":"Nonaktif"}
                        </span>
                    </div>
                    <div class="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300 flex-wrap">
                        <span class="font-bold text-slate-800 dark:text-slate-100">
                            <i class="fa-solid fa-user-tag text-[10px] mr-1" style="color: var(--color-primary)"></i>${o(k)}
                        </span>
                        <span class="text-slate-300 dark:text-slate-600">•</span>
                        <span class="font-black text-emerald-600 dark:text-emerald-400">
                            <i class="fa-solid fa-money-bill-wave text-[10px] mr-1"></i>Rp ${f(y)}/bln
                        </span>
                        ${g>0?`<span class="text-[11px] text-slate-500 dark:text-slate-400 font-medium">(+Rp ${f(g)}/hr)</span>`:""}
                    </div>
                    <div class="flex items-center gap-3 pt-0.5 text-[11px] text-slate-500 dark:text-slate-400 flex-wrap">
                        <span class="inline-flex items-center gap-1 font-medium"><i class="fa-solid fa-envelope text-[10px] text-slate-400"></i> ${o(s.email||"-")}</span>
                        ${s.phone?`
                        <span class="text-slate-300 dark:text-slate-600">•</span>
                        <a href="https://wa.me/${va(s.phone)}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 font-bold text-emerald-600 dark:text-emerald-400 hover:underline" title="Kirim Pesan WhatsApp">
                            <i class="fa-brands fa-whatsapp text-[12px]"></i> ${o(s.phone)}
                        </a>`:""}
                        <span class="text-slate-300 dark:text-slate-600">•</span>
                        <span class="inline-flex items-center gap-1 font-bold" style="color: var(--color-primary)">
                            <i class="fa-solid fa-key text-[9px]"></i> ${b} Modul Diizinkan
                        </span>
                        ${s.bankAccount&&s.bankAccount!=="-"?`
                        <span class="text-slate-300 dark:text-slate-600">•</span>
                        <span class="inline-flex items-center gap-1 text-slate-500 dark:text-slate-400">
                            <i class="fa-solid fa-building-columns text-[10px]"></i> ${o(s.bankName)}: ${o(s.bankAccount)}
                        </span>`:""}
                        <span class="text-slate-300 dark:text-slate-600">•</span>
                        <span class="inline-flex items-center gap-1 text-slate-400 dark:text-slate-500"><i class="fa-solid fa-calendar-days text-[10px]"></i> Masuk: ${o(l)}</span>
                    </div>
                </div>
            </div>
            <!-- Tombol Aksi Hak Akses, Status & Edit -->
            <div class="flex items-center gap-2 shrink-0 self-end sm:self-center border-t sm:border-t-0 pt-2.5 sm:pt-0 border-slate-100 dark:border-slate-700/60 w-full sm:w-auto justify-end">
                <button onclick="window.openPermissionsModal('${o(i)}')"
                    title="Atur Hak Akses Modul"
                    class="flex-1 sm:flex-initial h-10 px-3.5 rounded-xl text-xs font-bold transition-all active:scale-95 cursor-pointer shadow-2xs flex items-center justify-center gap-1.5 border"
                    style="background: rgba(var(--color-primary-rgb), 0.08); border-color: rgba(var(--color-primary-rgb), 0.25); color: var(--color-primary)">
                    <i class="fa-solid fa-sliders text-[10px]"></i>
                    <span>Hak Akses</span>
                </button>
                <button onclick="window.toggleStaffActive('${o(i)}', ${!c})"
                    title="${c?"Nonaktifkan Akun Staf":"Aktifkan Akun Staf"}"
                    class="w-10 h-10 rounded-xl flex items-center justify-center text-xs transition-all active:scale-95 cursor-pointer shadow-2xs border shrink-0 ${c?"bg-slate-50 hover:bg-amber-50 dark:bg-slate-700/80 dark:hover:bg-amber-950/40 text-slate-600 dark:text-slate-300 hover:text-amber-600 border-slate-200/80 dark:border-slate-700 hover:border-amber-300":"bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 border-emerald-200 dark:border-emerald-800"}">
                    <i class="fa-solid ${c?"fa-ban":"fa-circle-check"}"></i>
                </button>
                <button onclick="window.openEditStaffModal('${o(i)}', '${o(s.name||"")}', '${o(s.email||"")}', '${o(d)}')"
                    title="Edit Profil Staf &amp; HR"
                    class="w-10 h-10 rounded-xl flex items-center justify-center text-xs bg-slate-50 hover:bg-slate-100 dark:bg-slate-700/80 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 hover:text-[var(--color-primary)] border border-slate-200/80 dark:border-slate-700 transition-all active:scale-95 cursor-pointer shadow-2xs shrink-0">
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button onclick="window.deleteStaffAccount('${o(i)}', '${o(s.name||"Staf")}')"
                    title="Hapus Akun Staf"
                    class="w-10 h-10 rounded-xl flex items-center justify-center text-xs bg-slate-50 hover:bg-rose-50 dark:bg-slate-700/80 dark:hover:bg-rose-950/40 text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 border border-slate-200/80 dark:border-slate-700 hover:border-rose-200 transition-all active:scale-95 cursor-pointer shadow-2xs shrink-0">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        </div>`}).join("");a.innerHTML=`
    <div class="space-y-3">${t}</div>
    <div class="flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500 mt-4 px-1">
        <span>Menampilkan <strong>${e.length}</strong> dari <strong>${P.length}</strong> staf</span>
        <button onclick="window.loadStaffList()" class="inline-flex items-center gap-1.5 hover:text-slate-600 dark:hover:text-slate-300 cursor-pointer">
            <i class="fa-solid fa-arrows-rotate text-[10px]"></i> Segarkan Daftar
        </button>
    </div>`},z=async()=>{const a=n("cashier-list-container");if(a)try{let e;try{e=await $.collection("freshmart").doc("cms_data").collection("cashier_accounts").orderBy("createdAt","desc").get()}catch{e=await $.collection("freshmart").doc("cms_data").collection("cashier_accounts").get()}P=e.docs.map((s,r)=>{const i=s.data()||{};return{uid:s.id,...te({uid:s.id,...i},r)}});const t=P.some(s=>s.isActive!==!1&&s.role===u.CASHIER);try{localStorage.setItem("pos_has_cashier",t?"true":"false"),await $.collection("freshmart").doc("cms_data").set({hasCashier:t},{merge:!0})}catch{}typeof window.updatePOSHeaderIcon=="function"&&window.updatePOSHeaderIcon();try{const s=await $.collection("freshmart").doc("cms_data").get();s.exists&&s.data()?.ownerEmployee&&(m.ownerEmployee=s.data().ownerEmployee)}catch{}m.employees=P.map((s,r)=>te(s,r)),wa(),Ce(),fe()}catch(e){console.error("[StaffAdmin] Gagal memuat daftar staf:",e),a.innerHTML=`
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
        </div>`}},Ne=()=>{if(!M("mendaftarkan staf baru"))return;const a=pe(P,"EMP"),e=(t,s,r)=>{const i=Q.filter(c=>c.group===t);return`
        <div class="space-y-2">
            <p class="text-[11px] font-black uppercase tracking-wider text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                <i class="fa-solid ${r}" style="color: var(--color-primary)"></i>
                <span>${s}</span>
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                ${i.map(c=>`
                <label class="flex items-start gap-2.5 p-3 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 hover:border-[rgba(var(--color-primary-rgb),0.3)] transition-all cursor-pointer text-left">
                    <input type="checkbox" name="staff_perm" value="${c.key}" class="mt-0.5 rounded border-slate-300 text-[var(--color-primary)] focus:ring-[var(--color-primary)]/30 w-4 h-4 cursor-pointer" style="accent-color: var(--color-primary)">
                    <div class="min-w-0 flex-1">
                        <p class="text-xs font-bold text-slate-800 dark:text-white flex items-center gap-1.5">
                            <i class="fa-solid ${c.icon} text-[10px] text-slate-400"></i>
                            <span>${c.label}</span>
                        </p>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">${c.desc}</p>
                    </div>
                </label>`).join("")}
            </div>
        </div>`};document.body.insertAdjacentHTML("beforeend",`
    <div id="add-staff-modal" class="fixed inset-0 z-[9990] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/75"
        onclick="if(event.target===this) window.closeAddStaffModal()">
        <div class="bg-white dark:bg-slate-900 rounded-t-[2rem] sm:rounded-3xl shadow-2xl w-full max-w-2xl flex flex-col max-h-[92vh] sm:max-h-[90vh] overflow-hidden scale-95 transition-transform duration-300 border border-slate-200 dark:border-slate-800" id="add-staff-modal-box">
            <!-- Mobile Drag Handle -->
            <div class="sm:hidden w-12 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full mx-auto mt-2.5 mb-1 shrink-0"></div>
            
            <!-- Modal Header (Solid Flat Clean) -->
            <div class="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 shrink-0 bg-slate-50 dark:bg-slate-800/90">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-sm shadow-xs text-white"
                        style="background: var(--color-primary)">
                        <i class="fa-solid fa-user-plus"></i>
                    </div>
                    <div>
                        <h3 class="font-black text-sm text-slate-900 dark:text-white">Daftarkan Staf &amp; Karyawan Baru</h3>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400">Buat akun untuk kasir, admin, atau staf gudang/operasional</p>
                    </div>
                </div>
                <button onclick="window.closeAddStaffModal()" class="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 flex items-center justify-center hover:bg-rose-50 hover:text-rose-500 transition-all active:scale-90 cursor-pointer">
                    <i class="fa-solid fa-xmark text-sm"></i>
                </button>
            </div>

            <!-- Modal Body (Scrollable) -->
            <div class="p-5 space-y-4 overflow-y-auto flex-1 custom-scrollbar">
                <!-- Info Akun Dasar -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1.5">Nama Lengkap Staf <span class="text-rose-500">*</span></label>
                        <input id="new-staff-name" type="text" placeholder="Contoh: Rina Kasir / Budi Gudang"
                            autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.2)] shadow-2xs transition-all">
                    </div>
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1.5">Email Login <span class="text-rose-500">*</span></label>
                        <input id="new-staff-email" type="email" placeholder="staf@tokoputri.com"
                            autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-medium focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.2)] shadow-2xs transition-all">
                    </div>
                </div>

                <div>
                    <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1.5">Password Staf (Min. 6 Karakter) <span class="text-rose-500">*</span></label>
                    <div class="relative">
                        <input id="new-staff-pass" type="password" placeholder="Minimal 6 karakter..."
                            autocomplete="new-password" autocorrect="off" autocapitalize="off" spellcheck="false"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl pl-4 pr-12 py-2.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-medium focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.2)] shadow-2xs transition-all">
                        <button type="button" onclick="window.toggleStaffPassVisibility('new-staff-pass')"
                            class="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer p-1">
                            <i id="new-staff-pass-eye" class="fa-solid fa-eye text-sm"></i>
                        </button>
                    </div>
                </div>

                <!-- Pilihan Role Pokok (4 Kolom Responsif) -->
                <div>
                    <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1.5">Role Pokok Sistem <span class="text-rose-500">*</span></label>
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        <label class="flex flex-col items-center justify-center p-3 rounded-2xl border-2 border-emerald-500/40 bg-emerald-50/50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-200 cursor-pointer hover:border-emerald-500 transition-all text-center">
                            <input type="radio" name="new_staff_role" value="${u.CASHIER}" checked onchange="window.applyNewStaffPreset('${u.CASHIER}')" class="sr-only">
                            <i class="fa-solid fa-cash-register text-lg mb-1 text-emerald-600"></i>
                            <span class="text-xs font-black">Kasir POS</span>
                            <span class="text-[9px] text-slate-400 mt-0.5">Penjualan Fisik</span>
                        </label>
                        <label class="flex flex-col items-center justify-center p-3 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 cursor-pointer hover:border-blue-500 transition-all text-center">
                            <input type="radio" name="new_staff_role" value="${u.ADMIN}" onchange="window.applyNewStaffPreset('${u.ADMIN}')" class="sr-only">
                            <i class="fa-solid fa-shield-halved text-lg mb-1 text-blue-500"></i>
                            <span class="text-xs font-black">Admin Toko</span>
                            <span class="text-[9px] text-slate-400 mt-0.5">Operasional CMS</span>
                        </label>
                        <label class="flex flex-col items-center justify-center p-3 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 cursor-pointer hover:border-amber-500 transition-all text-center">
                            <input type="radio" name="new_staff_role" value="${u.STAFF}" onchange="window.applyNewStaffPreset('${u.STAFF}')" class="sr-only">
                            <i class="fa-solid fa-user-gear text-lg mb-1 text-amber-500"></i>
                            <span class="text-xs font-black">Staf Gudang</span>
                            <span class="text-[9px] text-slate-400 mt-0.5">Logistik &amp; Rak</span>
                        </label>
                        <label class="flex flex-col items-center justify-center p-3 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 cursor-pointer hover:border-[var(--color-primary)] transition-all text-center">
                            <input type="radio" name="new_staff_role" value="manager" onchange="window.applyNewStaffPreset('manager')" class="sr-only">
                            <i class="fa-solid fa-user-tie text-lg mb-1" style="color: var(--color-primary)"></i>
                            <span class="text-xs font-black">Manajer</span>
                            <span class="text-[9px] text-slate-400 mt-0.5">Wewenang Luas</span>
                        </label>
                    </div>
                </div>

                <!-- Bagian Master Profil & Struktur Kompensasi HR -->
                <div class="border-t border-slate-100 dark:border-slate-800 pt-3 space-y-3">
                    <div class="flex items-center justify-between">
                        <div>
                            <h4 class="text-xs font-black text-slate-900 dark:text-white flex items-center gap-1.5">
                                <i class="fa-solid fa-id-card-clip" style="color: var(--color-primary)"></i>
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
                        ${ie.map(t=>`<option value="${o(t.label||t)}"></option>`).join("")}
                    </datalist>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div>
                            <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">ID Karyawan</label>
                            <input id="new-staff-empid" type="text" value="${o(a)}" placeholder="EMP-001"
                                class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-3.5 py-2 bg-slate-50 dark:bg-slate-800/70 font-mono font-bold text-slate-800 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)]">
                        </div>
                        <div>
                            <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Jabatan Resmi <span class="text-rose-500">*</span></label>
                            <input id="new-staff-position" list="staff-positions-datalist" type="text" value="Kasir POS" placeholder="Pilih / ketik jabatan..."
                                class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-3.5 py-2 bg-white dark:bg-slate-800 font-bold text-slate-900 dark:text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.2)] shadow-2xs">
                        </div>
                        <div>
                            <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">No. WhatsApp / HP</label>
                            <input id="new-staff-phone" type="tel" placeholder="081234567890"
                                class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-3.5 py-2 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.2)] shadow-2xs">
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                            <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Gaji Pokok Bulanan (Rp) <span class="text-rose-500">*</span></label>
                            <input id="new-staff-salary" type="number" min="0" step="50000" value="2500000" placeholder="2500000"
                                class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-3.5 py-2 bg-white dark:bg-slate-800 font-bold text-emerald-600 dark:text-emerald-400 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.2)] shadow-2xs">
                        </div>
                        <div>
                            <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Tunjangan Harian / Uang Makan (Rp/Hari)</label>
                            <input id="new-staff-allowance" type="number" min="0" step="5000" value="20000" placeholder="20000"
                                class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-3.5 py-2 bg-white dark:bg-slate-800 font-bold text-slate-800 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.2)] shadow-2xs">
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                            <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Status Hubungan Kerja</label>
                            <select id="new-staff-status" class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-3 py-2 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold focus:outline-none focus:border-[var(--color-primary)] shadow-2xs">
                                ${de.map(t=>`<option value="${t.key}">${o(t.label)}</option>`).join("")}
                            </select>
                        </div>
                        <div>
                            <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Metode Pencairan Gaji</label>
                            <select id="new-staff-payment-method" class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-3 py-2 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold focus:outline-none focus:border-[var(--color-primary)] shadow-2xs">
                                ${ce.map(t=>`<option value="${t.key}">${o(t.label)}</option>`).join("")}
                            </select>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                            <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Nomor Rekening Bank</label>
                            <input id="new-staff-bank-account" type="text" placeholder="Contoh: 1234567890 (atau '-' jika tunai)"
                                class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-3.5 py-2 bg-white dark:bg-slate-800 font-mono text-slate-800 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)] shadow-2xs">
                        </div>
                        <div>
                            <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Atas Nama Rekening</label>
                            <input id="new-staff-bank-holder" type="text" placeholder="Sesuai buku tabungan..."
                                class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-3.5 py-2 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)] shadow-2xs">
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
                            <button type="button" onclick="window.setAllNewStaffPerms(true)" class="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold active:scale-95 transition-all cursor-pointer">Pilih Semua</button>
                            <button type="button" onclick="window.setAllNewStaffPerms(false)" class="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold active:scale-95 transition-all cursor-pointer">Kosongkan</button>
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
                    class="flex-1 min-h-[48px] py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95 transition-all cursor-pointer">
                    Batal
                </button>
                <button onclick="window.saveStaffAccount()" id="save-staff-btn"
                    class="flex-[2] min-h-[48px] py-3.5 rounded-2xl text-white font-black text-sm shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    style="background: var(--color-primary)">
                    <i class="fa-solid fa-floppy-disk"></i> Simpan &amp; Daftarkan Staf
                </button>
            </div>
        </div>
    </div>`),window.applyNewStaffPreset(u.CASHIER),typeof window.pushModalHistory=="function"&&window.pushModalHistory("addStaff"),setTimeout(()=>{const t=n("add-staff-modal-box");t&&t.classList.remove("scale-95");const s=n("new-staff-name");s&&s.focus()},10)},ue=(a=!1)=>{const e=()=>{const t=n("add-staff-modal");if(t){const s=n("new-staff-name");s&&(s.value="");const r=n("new-staff-email");r&&(r.value="");const i=n("new-staff-pass");i&&(i.value=""),t.style.opacity="0",setTimeout(()=>t.remove(),200)}};typeof window.requestCloseModal=="function"?window.requestCloseModal("addStaff",a,e):e()},Pa=a=>{const e=U[a]||U[u.CASHIER];document.querySelectorAll('#add-staff-modal input[name="staff_perm"]').forEach(r=>{r.checked=!!e[r.value]}),document.querySelectorAll('#add-staff-modal input[name="new_staff_role"]').forEach(r=>{const i=r.closest("label");i&&(r.value===a?i.className="flex flex-col items-center justify-center p-3 rounded-2xl border-2 border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.08)] text-slate-900 dark:text-white cursor-pointer shadow-xs transition-all text-center":i.className="flex flex-col items-center justify-center p-3 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 cursor-pointer hover:border-slate-300 transition-all text-center")});const t=n("new-staff-position"),s=ie.map(r=>r.label||r);t&&(!t.value||s.includes(t.value))&&(a===u.STAFF?t.value="Staf Gudang & Penataan Rak":a===u.ADMIN?t.value="Admin Operasional & Inventori":a==="manager"?t.value="Kepala Toko / Manager":t.value="Kasir POS")},Ma=a=>{document.querySelectorAll('#add-staff-modal input[name="staff_perm"]').forEach(e=>{e.checked=!!a})},Oe=async()=>{if(!M("mendaftarkan staf baru"))return;const a=n("new-staff-name")?.value?.trim()||"",e=n("new-staff-email")?.value?.trim()||"",t=n("new-staff-pass")?.value||"",s=document.querySelector('#add-staff-modal input[name="new_staff_role"]:checked'),r=s?s.value:u.CASHIER,i=r==="manager"?u.ADMIN:r,c=n("new-staff-empid")?.value?.trim()||pe(P,"EMP"),l=n("new-staff-position")?.value?.trim()||(i===u.STAFF?"Staf Gudang & Logistik":i===u.ADMIN?"Admin Operasional":"Kasir POS"),x=n("new-staff-phone")?.value?.trim()||"",d=Math.max(0,parseFloat(n("new-staff-salary")?.value)||0),b=Math.max(0,parseFloat(n("new-staff-allowance")?.value)||0),p=n("new-staff-status")?.value||"permanent",k=n("new-staff-payment-method")?.value||"cash",y=n("new-staff-bank-account")?.value?.trim()||"-",g=n("new-staff-bank-holder")?.value?.trim()||a,v=k==="cash"?"Tunai Kas Laci Toko":k.toUpperCase()||"Bank",w=n("add-staff-error"),A=n("save-staff-btn"),h=I=>{w&&(w.textContent=I,w.classList.remove("hidden"))};if((()=>{w&&w.classList.add("hidden")})(),!a){h("Nama staf wajib diisi.");return}if(!e||!e.includes("@")){h("Email login tidak valid.");return}if(t.length<6){h("Password minimal 6 karakter.");return}const H={};Q.forEach(I=>{const T=document.querySelector(`#add-staff-modal input[name="staff_perm"][value="${I.key}"]`);H[I.key]=T?T.checked:!1}),A&&(A.disabled=!0,A.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i>Mendaftarkan ke Firebase...'),N("Mendaftarkan akun staf...");try{const T=(R.apps.find(ye=>ye.name==="pos-cashier-creator")||R.initializeApp(window.FIREBASE_CONFIG||R.app().options,"pos-cashier-creator")).auth(),K=(await T.createUserWithEmailAndPassword(e,t)).user?.uid;if(!K)throw new Error("UID tidak diterima dari Firebase");if(await T.signOut(),await $.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(K).set({uid:K,employeeId:c,name:a,email:e,phone:x,role:i,position:l,baseSalary:d,dailyAllowance:b,employmentStatus:p,paymentMethod:k,bankName:v,bankAccount:y,bankHolder:g,permissions:H,isActive:!0,createdAt:R.firestore.FieldValue.serverTimestamp(),createdBy:Y.currentUser?.uid||"owner"}),i===u.CASHIER)try{localStorage.setItem("pos_has_cashier","true"),await $.collection("freshmart").doc("cms_data").set({hasCashier:!0},{merge:!0})}catch{}const ae=n("new-staff-pass");ae&&(ae.value="");const ke=n("new-staff-name");ke&&(ke.value="");const ve=n("new-staff-email");ve&&(ve.value=""),ue(),S(`Akun "${a}" (${i.toUpperCase()}) berhasil didaftarkan!`,"success"),await z(),typeof window.updatePOSHeaderIcon=="function"&&window.updatePOSHeaderIcon()}catch(I){console.error("[StaffAdmin] Gagal membuat akun staf:",I);const T=I.code==="permission-denied"||I.message&&I.message.toLowerCase().includes("permission"),j=I.code||"";h(T?"Akses Ditolak Firebase: Hanya akun Owner yang berwenang menambahkan staf ke Firestore.":j==="auth/email-already-in-use"?"Email sudah digunakan oleh akun lain di Firebase.":j==="auth/invalid-email"?"Format email tidak valid.":j==="auth/weak-password"?"Password terlalu lemah (min. 6 karakter).":"Gagal mendaftarkan: "+(I.message||"Terjadi kesalahan sistem")),A&&(A.disabled=!1,A.innerHTML='<i class="fa-solid fa-floppy-disk mr-2"></i>Simpan &amp; Daftarkan Staf')}finally{O()}},Ia=a=>{if(!M("mengatur hak akses staf"))return;const e=P.find(r=>r.uid===a);if(!e){S("Data staf tidak ditemukan!");return}const t=e.permissions||U[e.role]||U[u.CASHIER],s=(r,i,c)=>{const l=Q.filter(x=>x.group===r);return`
        <div class="space-y-2">
            <p class="text-[11px] font-black uppercase tracking-wider text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                <i class="fa-solid ${c}" style="color: var(--color-primary)"></i>
                <span>${i}</span>
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                ${l.map(x=>{const d=t[x.key]===!0;return`
                    <label class="flex items-start gap-2.5 p-3 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 hover:border-[rgba(var(--color-primary-rgb),0.3)] transition-all cursor-pointer text-left">
                        <input type="checkbox" name="edit_staff_perm" value="${x.key}" ${d?"checked":""} class="mt-0.5 rounded border-slate-300 text-[var(--color-primary)] focus:ring-[var(--color-primary)]/30 w-4 h-4 cursor-pointer" style="accent-color: var(--color-primary)">
                        <div class="min-w-0 flex-1">
                            <p class="text-xs font-bold text-slate-800 dark:text-white flex items-center gap-1.5">
                                <i class="fa-solid ${x.icon} text-[10px] text-slate-400"></i>
                                <span>${x.label}</span>
                            </p>
                            <p class="text-[10px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">${x.desc}</p>
                        </div>
                    </label>`}).join("")}
            </div>
        </div>`};document.body.insertAdjacentHTML("beforeend",`
    <div id="permissions-modal" class="fixed inset-0 z-[9990] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/75"
        onclick="if(event.target===this) window.closePermissionsModal()">
        <div class="bg-white dark:bg-slate-900 rounded-t-[2rem] sm:rounded-3xl shadow-2xl w-full max-w-2xl flex flex-col max-h-[92vh] sm:max-h-[90vh] overflow-hidden scale-95 transition-transform duration-300 border border-slate-200 dark:border-slate-800" id="permissions-modal-box">
            <!-- Mobile Drag Handle -->
            <div class="sm:hidden w-12 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full mx-auto mt-2.5 mb-1 shrink-0"></div>
            
            <!-- Modal Header (Solid Flat Clean) -->
            <div class="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 shrink-0 bg-slate-50 dark:bg-slate-800/90">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-sm shadow-xs text-white"
                        style="background: var(--color-primary)">
                        <i class="fa-solid fa-sliders"></i>
                    </div>
                    <div>
                        <h3 class="font-black text-sm text-slate-900 dark:text-white">Atur Hak Akses: ${o(e.name||"Staf")}</h3>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400">Sesuaikan modul yang boleh dibuka oleh akun ini</p>
                    </div>
                </div>
                <button onclick="window.closePermissionsModal()" class="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 flex items-center justify-center hover:bg-rose-50 hover:text-rose-500 transition-all active:scale-90 cursor-pointer">
                    <i class="fa-solid fa-xmark text-sm"></i>
                </button>
            </div>

            <!-- Modal Body -->
            <div class="p-4 sm:p-5 space-y-4 overflow-y-auto flex-1 custom-scrollbar">
                <!-- 1-Click Preset Bar -->
                <div class="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/90 dark:border-slate-700/80">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Preset Cepat 1-Klik:</span>
                        <div class="flex items-center gap-2 text-[11px]">
                            <button type="button" onclick="window.setAllEditStaffPerms(true)" class="text-xs font-bold hover:underline active:scale-95 transition-all cursor-pointer" style="color: var(--color-primary)">Pilih Semua</button>
                            <span class="text-slate-300">•</span>
                            <button type="button" onclick="window.setAllEditStaffPerms(false)" class="text-xs text-rose-500 font-bold hover:underline active:scale-95 transition-all cursor-pointer">Kosongkan</button>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        <button type="button" onclick="window.applyEditStaffPreset('${u.CASHIER}')" class="py-2.5 px-2 rounded-xl text-xs font-bold bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 hover:border-emerald-500 hover:text-emerald-600 transition-all active:scale-95 shadow-2xs flex items-center justify-center gap-1.5 cursor-pointer">
                            <i class="fa-solid fa-cash-register text-[11px] text-emerald-500"></i>
                            <span>Kasir POS</span>
                        </button>
                        <button type="button" onclick="window.applyEditStaffPreset('${u.ADMIN}')" class="py-2.5 px-2 rounded-xl text-xs font-bold bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 hover:border-blue-500 hover:text-blue-600 transition-all active:scale-95 shadow-2xs flex items-center justify-center gap-1.5 cursor-pointer">
                            <i class="fa-solid fa-shield-halved text-[11px] text-blue-500"></i>
                            <span>Admin Ops</span>
                        </button>
                        <button type="button" onclick="window.applyEditStaffPreset('manager')" class="py-2.5 px-2 rounded-xl text-xs font-bold bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all active:scale-95 shadow-2xs flex items-center justify-center gap-1.5 cursor-pointer">
                            <i class="fa-solid fa-user-tie text-[11px]" style="color: var(--color-primary)"></i>
                            <span>Manajer</span>
                        </button>
                        <button type="button" onclick="window.applyEditStaffPreset('${u.OWNER}')" class="py-2.5 px-2 rounded-xl text-xs font-bold bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 hover:border-amber-500 hover:text-amber-600 transition-all active:scale-95 shadow-2xs flex items-center justify-center gap-1.5 cursor-pointer">
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
                    class="flex-1 min-h-[48px] py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95 transition-all cursor-pointer">
                    Batal
                </button>
                <button onclick="window.saveStaffPermissions('${o(a)}')" id="save-perms-btn"
                    class="flex-[2] min-h-[48px] py-3.5 rounded-2xl text-white font-black text-sm shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    style="background: var(--color-primary)">
                    <i class="fa-solid fa-floppy-disk"></i> Simpan Hak Akses
                </button>
            </div>
        </div>
    </div>`),typeof window.pushModalHistory=="function"&&window.pushModalHistory("permissions"),setTimeout(()=>{const r=n("permissions-modal-box");r&&r.classList.remove("scale-95")},10)},Be=(a=!1)=>{const e=()=>{const t=n("permissions-modal");t&&(t.style.opacity="0",setTimeout(()=>t.remove(),200))};typeof window.requestCloseModal=="function"?window.requestCloseModal("permissions",a,e):e()},Ta=a=>{const e=U[a]||U[u.CASHIER];document.querySelectorAll('#permissions-modal input[name="edit_staff_perm"]').forEach(t=>{t.checked=!!e[t.value]})},ja=a=>{document.querySelectorAll('#permissions-modal input[name="edit_staff_perm"]').forEach(e=>{e.checked=!!a})},Ra=async a=>{if(!M("mengubah hak akses staf"))return;const e=n("save-perms-btn");e&&(e.disabled=!0,e.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i>Menyimpan...'),N("Memperbarui hak akses...");try{const t={};Q.forEach(r=>{const i=document.querySelector(`#permissions-modal input[name="edit_staff_perm"][value="${r.key}"]`);t[r.key]=i?i.checked:!1});let s=u.CASHIER;(t.orders||t.products||t.suppliers||t.purchases)&&(s=u.ADMIN),await $.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(a).set({permissions:t,role:s,updatedAt:R.firestore.FieldValue.serverTimestamp()},{merge:!0}),Be(),S("Hak akses berhasil diperbarui!","success"),await z()}catch(t){console.error("[StaffAdmin] Gagal menyimpan hak akses:",t),t.code==="permission-denied"||t.message&&t.message.toLowerCase().includes("permission")?S("Izin Ditolak Firebase: Pastikan login dengan Akun Owner dan aturan firestore.rules sudah dipublikasikan di Firebase Console.","error"):S("Gagal memperbarui hak akses: "+(t.message||"Terjadi kesalahan sistem"),"error"),e&&(e.disabled=!1,e.innerHTML='<i class="fa-solid fa-floppy-disk mr-2"></i>Simpan Hak Akses')}finally{O()}},Ke=(a,e,t,s)=>{if(!M("mengubah profil staf"))return;const r=P.find(h=>h.uid===a)||{},i=e||r.name||"",c=t||r.email||"",l=s||r.role||u.CASHIER,x=r.employeeId||"EMP-001",d=r.position||(l===u.CASHIER?"Kasir POS":l===u.ADMIN?"Admin Operasional":"Staf Gudang & Logistik"),b=r.phone||"",p=r.baseSalary||0,k=r.dailyAllowance||0,y=r.employmentStatus||"permanent",g=r.paymentMethod||"cash",v=r.bankName||"BCA",w=r.bankAccount&&r.bankAccount!=="-"?r.bankAccount:"",A=r.bankHolder||i;document.body.insertAdjacentHTML("beforeend",`
    <div id="edit-staff-modal" class="fixed inset-0 z-[9990] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/75"
        onclick="if(event.target===this) window.closeEditStaffModal()">
        <div class="bg-white dark:bg-slate-900 rounded-t-[2rem] sm:rounded-3xl shadow-2xl w-full max-w-xl flex flex-col max-h-[92vh] sm:max-h-[90vh] overflow-hidden scale-95 transition-transform duration-300 border border-slate-200 dark:border-slate-800" id="edit-staff-modal-box">
            <!-- Mobile Drag Handle -->
            <div class="sm:hidden w-12 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full mx-auto mt-2.5 mb-1 shrink-0"></div>
            
            <!-- Modal Header (Solid Flat Clean) -->
            <div class="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 shrink-0 bg-slate-50 dark:bg-slate-800/90">
                <div class="flex items-center gap-2.5">
                    <div class="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-black shadow-xs text-white"
                        style="background: var(--color-primary)">
                        <i class="fa-solid fa-user-pen"></i>
                    </div>
                    <div>
                        <h3 class="font-black text-sm text-slate-900 dark:text-white flex items-center gap-2">
                            <span>Edit Profil &amp; HR Staf</span>
                            <span class="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">${o(x)}</span>
                        </h3>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400">Perbarui data personal, peran, kompensasi &amp; rekening</p>
                    </div>
                </div>
                <button onclick="window.closeEditStaffModal()" class="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 flex items-center justify-center hover:bg-rose-50 hover:text-rose-500 transition-all active:scale-90 cursor-pointer">
                    <i class="fa-solid fa-xmark text-sm"></i>
                </button>
            </div>

            <div class="p-4 sm:p-5 space-y-3.5 overflow-y-auto flex-1 custom-scrollbar">
                <!-- Datalist Jabatan Terstandar -->
                <datalist id="edit-staff-positions-datalist">
                    ${ie.map(h=>`<option value="${o(h.label||h)}"></option>`).join("")}
                </datalist>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1.5">Nama Staf <span class="text-rose-500">*</span></label>
                        <input id="edit-staff-name" type="text" value="${o(i)}"
                            autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.2)] shadow-2xs">
                    </div>
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1.5">Role Pokok Sistem</label>
                        <select id="edit-staff-role" class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold focus:outline-none focus:border-[var(--color-primary)] shadow-2xs">
                            <option value="${u.CASHIER}" ${l===u.CASHIER?"selected":""}>Kasir POS (Penjualan)</option>
                            <option value="${u.ADMIN}" ${l===u.ADMIN?"selected":""}>Admin Toko (Operasional CMS)</option>
                            <option value="${u.STAFF}" ${l===u.STAFF?"selected":""}>Staf Gudang &amp; Logistik</option>
                            <option value="${u.OWNER}" ${l===u.OWNER?"selected":""}>Co-Owner / Wakil Owner</option>
                        </select>
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">ID Karyawan</label>
                        <input id="edit-staff-empid" type="text" value="${o(x)}"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-3.5 py-2 bg-slate-50 dark:bg-slate-800/70 font-mono font-bold text-slate-800 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)]">
                    </div>
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Jabatan Resmi</label>
                        <input id="edit-staff-position" list="edit-staff-positions-datalist" type="text" value="${o(d)}"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-3.5 py-2 bg-white dark:bg-slate-800 font-bold text-slate-900 dark:text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.2)] shadow-2xs">
                    </div>
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">No. WhatsApp / HP</label>
                        <input id="edit-staff-phone" type="tel" value="${o(b)}" placeholder="081234567890"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-3.5 py-2 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.2)] shadow-2xs">
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Gaji Pokok Bulanan (Rp)</label>
                        <input id="edit-staff-salary" type="number" min="0" step="50000" value="${p}"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-3.5 py-2 bg-white dark:bg-slate-800 font-bold text-emerald-600 dark:text-emerald-400 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.2)] shadow-2xs">
                    </div>
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Tunjangan Harian / Uang Makan (Rp/Hari)</label>
                        <input id="edit-staff-allowance" type="number" min="0" step="5000" value="${k}"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-3.5 py-2 bg-white dark:bg-slate-800 font-bold text-slate-800 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.2)] shadow-2xs">
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Status Hubungan Kerja</label>
                        <select id="edit-staff-status" class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-3 py-2 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold focus:outline-none focus:border-[var(--color-primary)] shadow-2xs">
                            ${de.map(h=>`<option value="${h.key}" ${y===h.key?"selected":""}>${o(h.label)}</option>`).join("")}
                        </select>
                    </div>
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Metode Bayar Gaji</label>
                        <select id="edit-staff-payment-method" class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-3 py-2 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold focus:outline-none focus:border-[var(--color-primary)] shadow-2xs">
                            ${ce.map(h=>`<option value="${h.key}" ${g===h.key?"selected":""}>${o(h.label)}</option>`).join("")}
                        </select>
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Bank</label>
                        <input id="edit-staff-bank-name" type="text" value="${o(v)}" placeholder="BCA / BRI"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-3.5 py-2 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)] shadow-2xs">
                    </div>
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">No. Rekening</label>
                        <input id="edit-staff-bank-account" type="text" value="${o(w)}" placeholder="1234567890"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-3.5 py-2 bg-white dark:bg-slate-800 font-mono text-slate-800 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)] shadow-2xs">
                    </div>
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Atas Nama Rekening</label>
                        <input id="edit-staff-bank-holder" type="text" value="${o(A)}" placeholder="Nama Pemilik"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-3.5 py-2 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)] shadow-2xs">
                    </div>
                </div>

                <div>
                    <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Email Login (Permanen)</label>
                    <input type="email" value="${o(c)}" disabled
                        class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 text-slate-400 cursor-not-allowed">
                </div>
                <div id="edit-staff-error" class="hidden text-xs text-rose-600 font-semibold p-2.5 bg-rose-50 dark:bg-rose-900/20 rounded-2xl border border-rose-200 dark:border-rose-800"></div>
            </div>

            <div class="p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800 flex gap-3 shrink-0 bg-slate-50/50 dark:bg-slate-900/50 pb-[max(1rem,env(safe-area-inset-bottom))]">
                <button onclick="window.closeEditStaffModal()"
                    class="flex-1 min-h-[48px] py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95 transition-all cursor-pointer">
                    Batal
                </button>
                <button onclick="window.updateStaffProfile('${o(a)}')" id="update-staff-btn"
                    class="flex-[2] min-h-[48px] py-3.5 rounded-2xl text-white font-black text-sm shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    style="background: var(--color-primary)">
                    <i class="fa-solid fa-floppy-disk"></i> Simpan Profil &amp; HR
                </button>
            </div>
        </div>
    </div>`),typeof window.pushModalHistory=="function"&&window.pushModalHistory("editStaff"),setTimeout(()=>{const h=n("edit-staff-modal-box");h&&h.classList.remove("scale-95")},10)},ge=(a=!1)=>{const e=()=>{const t=n("edit-staff-modal");t&&(t.style.opacity="0",setTimeout(()=>t.remove(),200))};typeof window.requestCloseModal=="function"?window.requestCloseModal("editStaff",a,e):e()},Da=async a=>{if(!M("mengubah profil staf"))return;const e=n("edit-staff-name")?.value?.trim()||"",t=n("edit-staff-role")?.value||u.CASHIER,s=n("edit-staff-empid")?.value?.trim()||"EMP-001",r=n("edit-staff-position")?.value?.trim()||"Staf Toko",i=n("edit-staff-phone")?.value?.trim()||"",c=Math.max(0,parseFloat(n("edit-staff-salary")?.value)||0),l=Math.max(0,parseFloat(n("edit-staff-allowance")?.value)||0),x=n("edit-staff-status")?.value||"permanent",d=n("edit-staff-payment-method")?.value||"cash",b=n("edit-staff-bank-name")?.value?.trim()||(d==="cash"?"Tunai Kas Laci Toko":d.toUpperCase()||"Bank"),p=n("edit-staff-bank-account")?.value?.trim()||"-",k=n("edit-staff-bank-holder")?.value?.trim()||e,y=n("edit-staff-error"),g=n("update-staff-btn");if(!e){y&&(y.textContent="Nama staf tidak boleh kosong.",y.classList.remove("hidden"));return}g&&(g.disabled=!0,g.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i>Menyimpan...'),N("Memperbarui profil staf...");try{await $.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(a).set({name:e,role:t,employeeId:s,position:r,phone:i,baseSalary:c,dailyAllowance:l,employmentStatus:x,paymentMethod:d,bankName:b,bankAccount:p,bankHolder:k,updatedAt:R.firestore.FieldValue.serverTimestamp()},{merge:!0}),ge(),S("Profil staf & data HR berhasil diperbarui!","success"),await z()}catch(v){const A=v.code==="permission-denied"||v.message&&v.message.toLowerCase().includes("permission")?"Izin ditolak oleh Firebase (Khusus Akun Owner).":v.message;y&&(y.textContent="Gagal memperbarui: "+A,y.classList.remove("hidden")),g&&(g.disabled=!1,g.innerHTML='<i class="fa-solid fa-floppy-disk mr-2"></i>Simpan')}finally{O()}},Ha=()=>{if(!M("mengatur profil dan gaji owner"))return;const a=Z(m),e=n("modal-owner-hr");e&&e.remove(),document.body.insertAdjacentHTML("beforeend",`
    <div id="modal-owner-hr" class="fixed inset-0 z-[9990] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/75"
        onclick="if(event.target===this) window.closeOwnerHrModal()">
        <div class="bg-white dark:bg-slate-900 rounded-t-[2rem] sm:rounded-3xl shadow-2xl w-full max-w-xl flex flex-col max-h-[92vh] sm:max-h-[90vh] overflow-hidden scale-95 transition-transform duration-300 border border-slate-200 dark:border-slate-800" id="owner-hr-modal-box">
            <!-- Mobile Drag Handle -->
            <div class="sm:hidden w-12 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full mx-auto mt-2.5 mb-1 shrink-0"></div>
            
            <!-- Modal Header (Solid Flat Clean) -->
            <div class="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 shrink-0 bg-slate-50 dark:bg-slate-800/90">
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
                <button onclick="window.closeOwnerHrModal()" class="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 flex items-center justify-center hover:bg-rose-50 hover:text-rose-500 transition-all active:scale-90 cursor-pointer">
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
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-500 font-mono font-bold cursor-not-allowed" readonly>
                    </div>
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Nama Pemilik / Direktur <span class="text-rose-500">*</span></label>
                        <input id="owner-hr-name" type="text" value="${o(a.name||"Pemilik Toko")}"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] text-slate-900 dark:text-white font-bold transition-all shadow-2xs">
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Jabatan Resmi</label>
                        <input id="owner-hr-position" type="text" value="${o(a.position||"Owner / Direktur Utama")}"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] text-slate-900 dark:text-white transition-all shadow-2xs">
                    </div>
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">No. WhatsApp Pribadi</label>
                        <input id="owner-hr-phone" type="tel" value="${o(a.phone||"")}" placeholder="081234567890"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] text-slate-900 dark:text-white transition-all shadow-2xs">
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Gaji Pokok Direksi (Rp/Bulan) <span class="text-rose-500">*</span></label>
                        <input id="owner-hr-salary" type="number" min="0" step="50000" value="${a.baseSalary||1e7}"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] text-slate-900 dark:text-white font-bold transition-all shadow-2xs">
                    </div>
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Tunjangan Bulanan Direksi (Rp)</label>
                        <input id="owner-hr-allowance" type="number" min="0" step="50000" value="${a.dailyAllowance||0}"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] text-slate-900 dark:text-white transition-all shadow-2xs">
                    </div>
                </div>

                <!-- Informasi Rekening Bank Owner -->
                <div class="border-t border-slate-100 dark:border-slate-800 pt-3 space-y-3">
                    <h4 class="text-xs font-black text-slate-800 dark:text-white flex items-center gap-1.5">
                        <i class="fa-solid fa-building-columns" style="color: var(--color-primary)"></i> Rekening Penerimaan Gaji
                    </h4>
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div>
                            <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Bank</label>
                            <input id="owner-hr-bank-name" type="text" value="${o(a.bankName||"BCA")}" placeholder="BCA / Mandiri / BRI"
                                class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] text-slate-900 dark:text-white transition-all shadow-2xs">
                        </div>
                        <div>
                            <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Nomor Rekening</label>
                            <input id="owner-hr-bank-account" type="text" value="${o(a.bankAccount&&a.bankAccount!=="-"?a.bankAccount:"")}" placeholder="1234567890"
                                class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] text-slate-900 dark:text-white font-mono transition-all shadow-2xs">
                        </div>
                        <div>
                            <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Atas Nama Rekening</label>
                            <input id="owner-hr-bank-holder" type="text" value="${o(a.bankHolder||a.name||"")}" placeholder="Nama Pemilik"
                                class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] text-slate-900 dark:text-white transition-all shadow-2xs">
                        </div>
                    </div>
                </div>

                <div id="owner-hr-error" class="hidden text-xs text-rose-600 font-semibold p-3 bg-rose-50 dark:bg-rose-950/40 rounded-2xl border border-rose-200 dark:border-rose-900/50"></div>
            </div>

            <!-- Modal Footer -->
            <div class="p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800 flex gap-3 shrink-0 bg-slate-50/50 dark:bg-slate-900/50 pb-[max(1rem,env(safe-area-inset-bottom))]">
                <button onclick="window.closeOwnerHrModal()"
                    class="flex-1 min-h-[48px] py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95 transition-all cursor-pointer">
                    Batal
                </button>
                <button onclick="window.saveOwnerHrProfile()" id="save-owner-hr-btn"
                    class="flex-[2] min-h-[48px] py-3.5 rounded-2xl text-white font-black text-sm shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                    <i class="fa-solid fa-floppy-disk"></i> Simpan Kompensasi Owner
                </button>
            </div>
        </div>
    </div>`),typeof window.pushModalHistory=="function"&&window.pushModalHistory("ownerHr"),setTimeout(()=>{const t=n("owner-hr-modal-box");t&&t.classList.remove("scale-95")},10)},Le=(a=!1)=>{const e=()=>{const t=n("modal-owner-hr");t&&(t.style.opacity="0",setTimeout(()=>t.remove(),200))};typeof window.requestCloseModal=="function"?window.requestCloseModal("ownerHr",a,e):e()},Ca=async()=>{if(!M("menyimpan kompensasi owner"))return;const a=n("owner-hr-name")?.value?.trim()||"Pemilik Toko",e=n("owner-hr-position")?.value?.trim()||"Owner / Direktur Utama",t=n("owner-hr-phone")?.value?.trim()||"",s=Math.max(0,parseFloat(n("owner-hr-salary")?.value)||0),r=Math.max(0,parseFloat(n("owner-hr-allowance")?.value)||0),i=n("owner-hr-bank-name")?.value?.trim()||"BCA",c=n("owner-hr-bank-account")?.value?.trim()||"-",l=n("owner-hr-bank-holder")?.value?.trim()||a,x=n("owner-hr-error"),d=n("save-owner-hr-btn");d&&(d.disabled=!0,d.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i>Menyimpan ke Cloud...'),N("Menyimpan data kompensasi owner...");try{const b={employeeId:"OWN-001",name:a,position:e,phone:t,baseSalary:s,dailyAllowance:r,employmentStatus:"permanent",bankName:i,bankAccount:c,bankHolder:l,role:u.OWNER,isActive:!0,updatedAt:R.firestore.FieldValue.serverTimestamp()};await $.collection("freshmart").doc("cms_data").set({ownerEmployee:b},{merge:!0}),m.ownerEmployee=b,Le(),S("Data kompensasi Owner berhasil diperbarui!","success"),await He()}catch(b){console.error("[OwnerHr] Gagal menyimpan data owner:",b),x&&(x.textContent="Gagal menyimpan: "+(b.message||"Terjadi kesalahan sistem"),x.classList.remove("hidden")),d&&(d.disabled=!1,d.innerHTML='<i class="fa-solid fa-floppy-disk mr-2"></i>Simpan Kompensasi Owner')}finally{O()}},_e=async(a,e)=>{if(M("mengubah status aktif staf")){N(e?"Mengaktifkan staf...":"Menonaktifkan staf...");try{await $.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(a).set({isActive:e,updatedAt:R.firestore.FieldValue.serverTimestamp()},{merge:!0}),S(e?"Akun staf diaktifkan":"Akun staf dinonaktifkan","success"),await z()}catch(t){t.code==="permission-denied"||t.message&&t.message.toLowerCase().includes("permission")?S("Akses Ditolak: Hanya akun Owner yang berwenang mengubah status staf.","error"):S("Gagal mengubah status staf: "+t.message,"error")}finally{O()}}},Fe=(a,e)=>{M("menghapus akun staf")&&Ae("Hapus Akun Staf",`Yakin hapus akun staf "${e}"? Akun tidak dapat dipulihkan dan staf tidak dapat login lagi ke toko.`,async()=>{N("Menghapus akun staf...");try{await $.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(a).delete(),S(`Akun "${e}" berhasil dihapus`,"success"),await z()}catch(t){t.code==="permission-denied"||t.message&&t.message.toLowerCase().includes("permission")?S("Akses Ditolak: Hanya akun Owner yang berwenang menghapus staf.","error"):S("Gagal menghapus staf: "+t.message,"error")}finally{O()}},"Ya, Hapus",!0)},Ge=a=>{const e=n(a),t=n(a+"-eye");e&&(e.type==="password"?(e.type="text",t&&(t.className="fa-solid fa-eye-slash text-sm")):(e.type="password",t&&(t.className="fa-solid fa-eye text-sm")))},Ea=Ne,Na=ue,Oa=Oe,Ba=(a,e,t)=>Ke(a,e,t,u.CASHIER),Ka=ge,La=_e,_a=Fe,Fa=z,Ga=Ge;typeof window<"u"&&(window.renderCashierAccounts=He,window.switchCashierTab=ha,window.filterStaffRole=Aa,window.handleStaffSearch=Ee,window.clearStaffSearch=Sa,window.loadStaffList=z,window.openAddStaffModal=Ne,window.closeAddStaffModal=ue,window.applyNewStaffPreset=Pa,window.setAllNewStaffPerms=Ma,window.saveStaffAccount=Oe,window.openPermissionsModal=Ia,window.closePermissionsModal=Be,window.applyEditStaffPreset=Ta,window.setAllEditStaffPerms=ja,window.saveStaffPermissions=Ra,window.openEditStaffModal=Ke,window.closeEditStaffModal=ge,window.updateStaffProfile=Da,window.openOwnerHrModal=Ha,window.closeOwnerHrModal=Le,window.saveOwnerHrProfile=Ca,window.toggleStaffActive=_e,window.deleteStaffAccount=Fe,window.toggleStaffPassVisibility=Ge,window.verifyOwnerAuthority=M,window.openAddCashierModal=Ea,window.closeAddCashierModal=Na,window.saveCashierAccount=Oa,window.openEditCashierModal=Ba,window.closeEditCashierModal=Ka,window.toggleCashierActive=La,window.deleteCashierAccount=_a,window.loadCashierList=Fa,window.toggleCashierPassVisibility=Ga);export{Ta as applyEditStaffPreset,Pa as applyNewStaffPreset,Sa as clearStaffSearch,Na as closeAddCashierModal,ue as closeAddStaffModal,Ka as closeEditCashierModal,ge as closeEditStaffModal,Le as closeOwnerHrModal,Be as closePermissionsModal,_a as deleteCashierAccount,Fe as deleteStaffAccount,Aa as filterStaffRole,Ee as handleStaffSearch,Fa as loadCashierList,z as loadStaffList,Ea as openAddCashierModal,Ne as openAddStaffModal,Ba as openEditCashierModal,Ke as openEditStaffModal,Ha as openOwnerHrModal,Ia as openPermissionsModal,He as renderCashierAccounts,Oa as saveCashierAccount,Ca as saveOwnerHrProfile,Oe as saveStaffAccount,Ra as saveStaffPermissions,ja as setAllEditStaffPerms,Ma as setAllNewStaffPerms,ha as switchCashierTab,La as toggleCashierActive,Ga as toggleCashierPassVisibility,_e as toggleStaffActive,Ge as toggleStaffPassVisibility,Da as updateStaffProfile,M as verifyOwnerAuthority};

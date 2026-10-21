const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./module-pos-Bw3FogP4.js","./module-print-CL0Q7Kxh.js","./vendor-firebase-core-D2OF5R23.js","./vendor-firebase-db-BIUZcnOd.js","./module-member-6jlm-92J.js","./module-faq-ziMeGJrK.js"])))=>i.map(i=>d[i]);
import{R as u,f,a as m,q as P,i as l,e as d,k as $,l as L,A as Z,n as K,H as Se,_ as ie,bj as U,bk as de,J as Ae,b as We,bl as X,bm as Je}from"./module-print-CL0Q7Kxh.js";import{V as qe}from"./module-pos-Bw3FogP4.js";import{f as H}from"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";import"./module-member-6jlm-92J.js";import"./module-faq-ziMeGJrK.js";const ce=[{key:"permanent",label:"Karyawan Tetap",badgeColor:"emerald"},{key:"contract",label:"Kontrak (PKWT)",badgeColor:"blue"},{key:"probation",label:"Masa Percobaan (3 Bulan)",badgeColor:"amber"},{key:"daily",label:"Staf Harian Lepas",badgeColor:"purple"}],pe=[{key:"bca",label:"BCA (Bank Central Asia)"},{key:"bri",label:"BRI (Bank Rakyat Indonesia)"},{key:"mandiri",label:"Bank Mandiri"},{key:"bni",label:"BNI (Bank Negara Indonesia)"},{key:"bsi",label:"BSI (Bank Syariah Indonesia)"},{key:"jatim",label:"Bank Jatim"},{key:"cash",label:"Tunai Kas Laci Toko (Cash)"},{key:"other",label:"Bank Lainnya / E-Wallet"}],Ve=t=>{if(!t)return"-";const[e,a]=t.split("-"),s=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],r=parseInt(a,10)-1;return`${s[r]||a} ${e}`},xe=(t=[],e="EMP")=>{if(!Array.isArray(t)||t.length===0)return`${e}-001`;let a=0;const s=new RegExp(`^${e}-(\\d+)`,"i");t.forEach(i=>{const o=String(i?.employeeId||i?.nik||"").trim().match(s);if(o&&o[1]){const x=parseInt(o[1],10);!isNaN(x)&&x>a&&(a=x)}});const r=a+1;return`${e}-${String(r).padStart(3,"0")}`},ee=t=>t&&t.ownerEmployee&&typeof t.ownerEmployee=="object"?{employeeId:"OWN-001",role:u.OWNER,position:"Owner / Direktur Utama",baseSalary:1e7,dailyAllowance:0,employmentStatus:"permanent",bankName:"BCA / Rekening Toko",bankAccount:"-",bankHolder:"Pemilik Toko",isActive:!0,...t.ownerEmployee}:{employeeId:"OWN-001",name:t?.store?.name?`Pemilik ${t.store.name}`:"Pemilik Toko",email:t?.subscription?.clientEmail||"owner@tokoputri.com",phone:t?.store?.wa||"",role:u.OWNER,position:"Owner / Direktur Utama",baseSalary:1e7,dailyAllowance:0,employmentStatus:"permanent",bankName:"BCA / Rekening Toko",bankAccount:"-",bankHolder:"Pemilik Toko",hireDate:"2024-01-01",isActive:!0,notes:"Gaji resmi direksi / pemilik toko terpisah dari laba usaha toko."},se=(t={},e=0)=>{const a=t.role===u.OWNER||t.role==="owner",s=a?"OWN":"EMP",r=(t.employeeId||t.nik||`${s}-${String(e+1).padStart(3,"0")}`).trim();let i=t.position||"";return i||(a?i="Owner / Direktur Utama":t.role===u.ADMIN?i="Admin Operasional Toko":t.role===u.CASHIER?i="Kasir POS":i="Staf Operasional / Gudang"),{uid:t.uid||t.id||`emp_${Date.now()}_${e}`,employeeId:r,name:String(t.name||"Karyawan").trim(),email:String(t.email||"").trim(),phone:String(t.phone||"").trim(),role:t.role||u.CASHIER,position:i,employmentStatus:t.employmentStatus||"permanent",hireDate:t.hireDate||new Date().toISOString().split("T")[0],baseSalary:Math.max(0,parseFloat(t.baseSalary)||0),dailyAllowance:Math.max(0,parseFloat(t.dailyAllowance)||0),bankName:t.bankName||"cash",bankAccount:String(t.bankAccount||"").trim(),bankHolder:String(t.bankHolder||t.name||"").trim(),nikKtp:String(t.nikKtp||"").trim(),npwp:String(t.npwp||"").trim(),isActive:t.isActive!==!1,notes:String(t.notes||"").trim()}},Ye=(t=[],e={})=>{const a=Array.isArray(e?.employees)?e.employees:[],s=new Map;return a.forEach(r=>{r.uid&&s.set(r.uid,r),r.email&&s.set(r.email.toLowerCase(),r),r.employeeId&&s.set(r.employeeId,r)}),t.map((r,i)=>{const n=s.get(r.uid)||s.get(r.email?.toLowerCase())||{};return se({...n,...r,uid:r.uid,email:r.email,name:r.name||n.name,role:r.role||n.role,isActive:r.isActive!==!1},i)})},D=(t="mengubah data staf")=>{try{if(typeof window<"u"&&window.auth&&window.ADMIN_UID){const e=window.auth.currentUser;return e?e.uid!==window.ADMIN_UID?(typeof window.showToast=="function"&&window.showToast(`Akses Ditolak: Hanya Akun Pemilik Utama (Owner) yang berwenang ${t}. Akun staf tidak memiliki izin modifikasi database staf.`,"error"),!1):!0:(typeof window.showToast=="function"&&window.showToast(`Sesi Belum Terotentikasi: Harap login resmi menggunakan Akun Pemilik Toko (Email Owner) di form login CMS untuk ${t}.`,"warning"),!1)}}catch{}return!0};typeof window<"u"&&(window.EMPLOYMENT_STATUSES=ce,window.SALARY_PAYMENT_METHODS=pe,window.generateEmployeeId=xe,window.getOwnerEmployeeProfile=ee,window.normalizeEmployeeProfile=se,window.mergeStaffWithHrProfiles=Ye,window.verifyOwnerAuthority=D);const re=async()=>{try{if(typeof window<"u"&&typeof window.saveApp=="function")return await window.saveApp();const t=await ie(()=>import("./module-pos-Bw3FogP4.js").then(e=>e.W),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url);if(typeof t?.saveApp=="function")return await t.saveApp()}catch{}};let B="active",N=[];const Pe=(t=[])=>{const e=new Date().getFullYear(),a=`KSB-${e}`;let s=0;const r=new RegExp(`^KSB-${e}-(\\d+)`,"i");t.forEach(n=>{const x=String(n?.advanceId||n?.id||"").trim().match(r);if(x&&x[1]){const c=parseInt(x[1],10);!isNaN(c)&&c>s&&(s=c)}});const i=s+1;return`${a}-${String(i).padStart(3,"0")}`},z=()=>{const t=Array.isArray(m.employees)?[...m.employees]:[],e=ee(m);return t.some(s=>s.employeeId==="OWN-001"||s.role==="owner")||t.unshift(e),t.filter(s=>s.isActive!==!1)},Me=async()=>{try{let t=[];try{const e=await P.collection("freshmart").doc("cms_data").collection("salary_advances").orderBy("createdAt","desc").get();e&&!e.empty&&(t=e.docs.map(a=>({id:a.id,...a.data()})))}catch{}if(!t||t.length===0){let e=Array.isArray(m.salaryAdvances)?m.salaryAdvances:[];if(e.length===0)try{e=JSON.parse(localStorage.getItem("freshmart_salary_advances")||"[]"),Array.isArray(e)&&e.length>0&&(m.salaryAdvances=e)}catch{}t=e}return N=t,m.salaryAdvances=t,t}catch(t){return console.error("[HR Advances] Gagal memuat data kasbon:",t),N=Array.isArray(m.salaryAdvances)?m.salaryAdvances:[],N}},Q=async t=>{if(!t)return;t.innerHTML=`
    <div class="text-center py-16">
        <i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i>
        <p class="text-xs text-slate-400 mt-2">Memuat buku kasbon karyawan...</p>
    </div>`,await Me();const e=N,a=e.filter(o=>o.status==="active"&&(parseFloat(o.remainingAmount)||0)>0),s=a.reduce((o,x)=>o+(parseFloat(x.remainingAmount)||0),0),r=new Set(a.map(o=>o.employeeId||o.employeeName)).size,i=a.reduce((o,x)=>o+Math.min(parseFloat(x.monthlyInstallment)||0,parseFloat(x.remainingAmount)||0),0);let n=e;B==="active"?n=e.filter(o=>o.status==="active"&&(parseFloat(o.remainingAmount)||0)>0):B==="paid"&&(n=e.filter(o=>o.status==="paid"||(parseFloat(o.remainingAmount)||0)<=0)),t.innerHTML=`
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
                    class="px-3.5 py-2 rounded-xl text-xs font-bold transition-all active:scale-95 cursor-pointer shadow-2xs shrink-0 flex items-center gap-1.5 ${B==="active"?"text-white shadow-xs":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"}"
                    style="${B==="active"?"background: var(--color-primary); color: #fff;":""}">
                    <i class="fa-solid fa-clock-rotate-left text-[10px]"></i>
                    <span>Kasbon Aktif (${a.length})</span>
                </button>
                <button onclick="window.filterAdvanceStatus('paid')" 
                    class="px-3.5 py-2 rounded-xl text-xs font-bold transition-all active:scale-95 cursor-pointer shadow-2xs shrink-0 flex items-center gap-1.5 ${B==="paid"?"text-white shadow-xs":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"}"
                    style="${B==="paid"?"background: var(--color-primary); color: #fff;":""}">
                    <i class="fa-solid fa-circle-check text-[10px] text-emerald-500"></i>
                    <span>Sudah Lunas</span>
                </button>
                <button onclick="window.filterAdvanceStatus('all')" 
                    class="px-3.5 py-2 rounded-xl text-xs font-bold transition-all active:scale-95 cursor-pointer shadow-2xs shrink-0 flex items-center gap-1.5 ${B==="all"?"text-white shadow-xs":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"}"
                    style="${B==="all"?"background: var(--color-primary); color: #fff;":""}">
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
            ${Ze(n)}
        </div>
    </div>`},Qe=t=>{B=t;const e=d("cashier-panel-advances");e&&Q(e)},Ze=t=>!t||t.length===0?`
        <div class="flex flex-col items-center justify-center py-16 text-slate-400 dark:text-slate-600 bg-white dark:bg-slate-800/60 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-8 text-center">
            <div class="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-2xl mb-3 text-slate-400">
                <i class="fa-solid fa-receipt"></i>
            </div>
            <p class="font-bold text-sm text-slate-700 dark:text-slate-300">Tidak ada catatan kasbon pada filter ini</p>
            <p class="text-xs mt-1 text-slate-400">Klik "+ Ajukan Kasbon Baru" untuk mencatat pinjaman staf toko</p>
        </div>`:t.map(e=>{const a=Math.max(0,parseFloat(e.remainingAmount)||0),s=Math.max(1,parseFloat(e.amount)||1),r=Math.max(0,s-a),i=Math.min(100,Math.round(r/s*100)),n=a<=0||e.status==="paid",o=e.disbursementSource==="bank"?"Transfer Bank":e.disbursementSource==="owner"?"Dana Owner":"Kas Toko (Tunai)",x=e.requestDate||"-";return`
        <div class="p-4 sm:p-5 bg-white dark:bg-slate-800/95 rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:shadow-xs transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div class="flex items-start gap-3.5 min-w-0 flex-1">
                <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-base shrink-0 shadow-2xs font-black ${n?"bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 border border-emerald-200 dark:border-emerald-800":"bg-rose-50 dark:bg-rose-950/40 text-rose-600 border border-rose-200 dark:border-rose-800"}">
                    <i class="fa-solid ${n?"fa-circle-check":"fa-hand-holding-dollar"}"></i>
                </div>
                <div class="min-w-0 flex-1 space-y-1.5">
                    <div class="flex items-center gap-2 flex-wrap">
                        <span class="text-sm font-black text-slate-900 dark:text-white truncate">${l(e.employeeName||"Karyawan")}</span>
                        <span class="inline-flex items-center gap-1 font-mono text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600">
                            ${l(e.employeeId||"EMP")}
                        </span>
                        <span class="font-mono text-[10px] text-slate-400">#${l(e.advanceId||e.id)}</span>
                        <span class="inline-flex items-center gap-1 text-[10px] font-black px-2.5 py-0.5 rounded-full ${n?"bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200":"bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border border-amber-200"}">
                            <span class="w-1.5 h-1.5 rounded-full ${n?"bg-emerald-500":"bg-amber-500 animate-pulse"}"></span>
                            ${n?"Lunas":"Belum Lunas"}
                        </span>
                    </div>

                    <div class="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300 flex-wrap">
                        <span class="font-bold text-slate-800 dark:text-slate-200">${l(e.position||"Staf Toko")}</span>
                        <span>•</span>
                        <span>Pinjaman: <strong class="text-slate-900 dark:text-white">${f(e.amount)}</strong></span>
                        <span>•</span>
                        <span>Sisa: <strong class="${n?"text-emerald-600 dark:text-emerald-400":"text-rose-600 dark:text-rose-400"}">${f(a)}</strong></span>
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
                            <div class="h-full rounded-full transition-all duration-500 ${n?"bg-emerald-500":""}" style="width: ${i}%; ${n?"":"background: var(--color-primary)"}"></div>
                        </div>
                    </div>

                    <div class="flex items-center gap-3 text-[11px] text-slate-400 dark:text-slate-500 flex-wrap pt-0.5">
                        <span class="flex items-center gap-1"><i class="fa-solid fa-calendar-day text-[10px]"></i> Tgl: ${l(x)}</span>
                        <span>•</span>
                        <span class="flex items-center gap-1"><i class="fa-solid fa-wallet text-[10px]"></i> Sumber: ${l(o)}</span>
                        ${e.reason?`<span>•</span><span class="italic text-slate-500 truncate max-w-xs">"${l(e.reason)}"</span>`:""}
                    </div>
                </div>
            </div>

            <!-- Tombol Aksi -->
            <div class="flex items-center gap-2 shrink-0 self-end sm:self-center border-t sm:border-t-0 pt-2.5 sm:pt-0 border-slate-100 dark:border-slate-700/60 w-full sm:w-auto justify-end">
                <button onclick="window.openAdvanceDetailModal('${l(e.advanceId||e.id)}')"
                    class="px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-50 hover:bg-slate-100 dark:bg-slate-700/80 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 transition-all active:scale-95 cursor-pointer shadow-2xs flex items-center gap-1.5">
                    <i class="fa-solid fa-file-invoice text-[10px]" style="color: var(--color-primary)"></i>
                    <span>Riwayat &amp; Rincian</span>
                </button>
                ${n?"":`
                <button onclick="window.promptManualRepayment('${l(e.advanceId||e.id)}', ${a})"
                    class="px-3.5 py-2 rounded-xl text-xs font-black text-white transition-all active:scale-95 cursor-pointer shadow-2xs flex items-center gap-1.5"
                    style="background: var(--color-primary)">
                    <i class="fa-solid fa-money-bill-transfer text-[10px]"></i>
                    <span>Bayar Kasbon</span>
                </button>`}
                <button onclick="window.deleteSalaryAdvance('${l(e.advanceId||e.id)}', '${l(e.employeeName||"Karyawan")}')"
                    title="Hapus Catatan Kasbon"
                    class="w-9 h-9 rounded-xl flex items-center justify-center text-xs bg-slate-50 hover:bg-rose-50 dark:bg-slate-700/80 dark:hover:bg-rose-950/40 text-slate-400 hover:text-rose-600 border border-slate-200 dark:border-slate-600 transition-all active:scale-95 cursor-pointer shrink-0">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        </div>`}).join(""),Xe=()=>{if(!D("mencatat kasbon karyawan"))return;const t=z();if(t.length===0){$("Belum ada staf terdaftar di toko. Tambahkan staf terlebih dahulu.","warning");return}const e=new Date().toISOString().split("T")[0],a=Pe(N),s=d("modal-salary-advance-form");s&&s.remove(),document.body.insertAdjacentHTML("beforeend",`
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
                            <span class="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">${l(a)}</span>
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
                        ${t.map(r=>`
                            <option value="${l(r.uid||r.employeeId)}" data-empid="${l(r.employeeId)}" data-name="${l(r.name)}" data-role="${l(r.role)}" data-position="${l(r.position)}" data-salary="${r.baseSalary||0}">
                                ${l(r.name)} — ${l(r.position)} (${l(r.employeeId)}) [Gaji: ${f(r.baseSalary||0)}]
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
    </div>`),typeof window.pushModalHistory=="function"&&window.pushModalHistory("advanceForm"),setTimeout(()=>{const r=d("salary-advance-modal-box");r&&r.classList.remove("scale-95");const i=d("adv-amount");i&&i.focus()},10)},Te=(t=!1)=>{const e=()=>{const a=d("modal-salary-advance-form");a&&(a.style.opacity="0",setTimeout(()=>a.remove(),200))};typeof window.requestCloseModal=="function"?window.requestCloseModal("advanceForm",t,e):e()},Ie=()=>{const t=parseFloat(d("adv-amount")?.value)||0,e=parseInt(d("adv-tenor-select")?.value,10)||1,a=d("adv-installment");a&&t>0&&(a.value=Math.ceil(t/e))},et=()=>{Ie()},tt=async()=>{if(!D("mencatat kasbon karyawan"))return;const t=d("adv-employee-select"),e=t?.options[t.selectedIndex];if(!e){$("Pilih karyawan terlebih dahulu","warning");return}const a=t.value,s=e.getAttribute("data-empid")||"EMP-001",r=e.getAttribute("data-name")||"Karyawan",i=e.getAttribute("data-role")||"staff",n=e.getAttribute("data-position")||"Staf Toko",o=d("adv-request-date")?.value||new Date().toISOString().split("T")[0],x=Math.max(0,parseFloat(d("adv-amount")?.value)||0),c=parseInt(d("adv-tenor-select")?.value,10)||1,p=Math.max(0,parseFloat(d("adv-installment")?.value)||Math.ceil(x/c)),b=d("adv-disbursement-source")?.value||"cash",k=d("adv-reason")?.value?.trim()||"Kasbon Operasional Karyawan",w=d("adv-sync-expense")?.checked!==!1,g=d("adv-form-error"),v=d("save-adv-btn");if(x<1e4){g&&(g.textContent="Nominal kasbon minimal Rp 10.000.",g.classList.remove("hidden"));return}v&&(v.disabled=!0,v.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i>Menyimpan...'),L("Mencatat kasbon karyawan...");try{const y=Pe(N);let A=null;if(w){A="exp_adv_"+Date.now();const R={id:A,date:o,category:"kasbon",amount:x,desc:`Pencairan Kasbon: ${r} (${s}) - ${k}`,source:b,recipient:r,receiptUrl:"",advanceId:y,createdAt:new Date().toISOString()};Array.isArray(m.expenses)||(m.expenses=[]),m.expenses.unshift(R);try{await re()}catch{}}const h={advanceId:y,employeeUid:a,employeeId:s,employeeName:r,employeeRole:i,position:n,requestDate:o,amount:x,monthlyInstallment:p,totalTenorMonths:c,remainingAmount:x,reason:k,status:"active",disbursementSource:b,expenseId:A,repayments:[],createdAt:H.firestore.FieldValue.serverTimestamp(),createdBy:Z.currentUser?.uid||"owner"};try{await P.collection("freshmart").doc("cms_data").collection("salary_advances").doc(y).set(h)}catch{}Array.isArray(m.salaryAdvances)||(m.salaryAdvances=[]),m.salaryAdvances.unshift({id:y,...h}),N=m.salaryAdvances;try{localStorage.setItem("freshmart_salary_advances",JSON.stringify(m.salaryAdvances)),await re()}catch{}Te(),$(`Kasbon ${f(x)} untuk ${r} berhasil dicatat!`,"success");const M=d("cashier-panel-advances");M&&Q(M)}catch(y){console.error("[HR Advances] Gagal menyimpan kasbon:",y),g&&(g.textContent="Gagal menyimpan kasbon: "+(y.message||"Kesalahan sistem"),g.classList.remove("hidden")),v&&(v.disabled=!1,v.innerHTML='<i class="fa-solid fa-floppy-disk mr-2"></i>Simpan &amp; Cairkan Kasbon')}finally{K()}},at=t=>{const e=N.find(c=>(c.advanceId||c.id)===t);if(!e){$("Data kasbon tidak ditemukan","warning");return}const a=Math.max(0,parseFloat(e.remainingAmount)||0),s=Math.max(1,parseFloat(e.amount)||1),r=Math.max(0,s-a),i=Math.min(100,Math.round(r/s*100)),n=a<=0||e.status==="paid",o=Array.isArray(e.repayments)?e.repayments:[],x=d("modal-salary-advance-detail");x&&x.remove(),document.body.insertAdjacentHTML("beforeend",`
    <div id="modal-salary-advance-detail" class="fixed inset-0 z-[9990] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/75"
        onclick="if(event.target===this) window.closeAdvanceDetailModal()">
        <div class="bg-white dark:bg-slate-900 rounded-t-[2rem] sm:rounded-3xl shadow-2xl w-full max-w-lg flex flex-col max-h-[92vh] sm:max-h-[90vh] overflow-hidden scale-95 transition-transform duration-300 border border-slate-200 dark:border-slate-800" id="salary-advance-detail-modal-box">
            <!-- Mobile Drag Handle -->
            <div class="sm:hidden w-12 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full mx-auto mt-2.5 mb-1 shrink-0"></div>
            <!-- Header -->
            <div class="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 shrink-0 bg-slate-50 dark:bg-slate-800/90">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-sm shadow-2xs ${n?"bg-emerald-500 text-white":"text-white"}"
                        style="${n?"":"background: var(--color-primary)"}">
                        <i class="fa-solid fa-file-invoice"></i>
                    </div>
                    <div>
                        <h3 class="font-black text-sm text-slate-900 dark:text-white flex items-center gap-2">
                            <span>Detail Kasbon: ${l(e.employeeName)}</span>
                            <span class="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">${l(e.advanceId||e.id)}</span>
                        </h3>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400">${l(e.position)} • ID: ${l(e.employeeId)}</p>
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
                        <span class="inline-flex items-center gap-1.5 text-xs font-black px-3 py-1 rounded-full ${n?"bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300":"bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300"}">
                            <span class="w-2 h-2 rounded-full ${n?"bg-emerald-500":"bg-rose-500 animate-pulse"}"></span>
                            ${n?"Lunas Sepenuhnya":"Masih Berjalan (Belum Lunas)"}
                        </span>
                    </div>
                    <div class="grid grid-cols-2 gap-2 pt-1 border-t border-slate-200/60 dark:border-slate-700/60">
                        <div>
                            <span class="text-[10px] font-bold uppercase text-slate-400 block">Total Pinjaman</span>
                            <span class="text-sm font-black text-slate-800 dark:text-white">${f(e.amount)}</span>
                        </div>
                        <div>
                            <span class="text-[10px] font-bold uppercase text-slate-400 block">Sisa Pinjaman</span>
                            <span class="text-sm font-black ${n?"text-emerald-600":"text-rose-600"}">${f(a)}</span>
                        </div>
                    </div>
                    <div class="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden mt-2">
                        <div class="h-full rounded-full transition-all duration-500 ${n?"bg-emerald-500":""}" style="width: ${i}%; ${n?"":"background: var(--color-primary)"}"></div>
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
                    ${o.length===0?`
                        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-center text-xs text-slate-400">
                            Belum ada riwayat pemotongan gaji atau pembayaran angsuran untuk kasbon ini.
                        </div>
                    `:`
                        <div class="space-y-2">
                            ${o.map((c,p)=>`
                            <div class="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs">
                                <div>
                                    <span class="font-bold text-slate-800 dark:text-white block">Angsuran #${p+1}: ${f(c.amount)}</span>
                                    <span class="text-[10px] text-slate-400">${l(c.date||"-")} • ${l(c.notes||"Potongan Payroll")}</span>
                                </div>
                                <span class="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">-${f(c.amount)}</span>
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
    </div>`),typeof window.pushModalHistory=="function"&&window.pushModalHistory("advanceDetail"),setTimeout(()=>{const c=d("salary-advance-detail-modal-box");c&&c.classList.remove("scale-95")},10)},st=(t=!1)=>{const e=()=>{const a=d("modal-salary-advance-detail");a&&(a.style.opacity="0",setTimeout(()=>a.remove(),200))};typeof window.requestCloseModal=="function"?window.requestCloseModal("advanceDetail",t,e):e()},rt=(t,e)=>{if(!D("mencatat pembayaran kasbon"))return;const a=N.find(i=>(i.advanceId||i.id)===t);if(!a)return;const s=prompt(`Masukkan nominal pembayaran angsuran kasbon untuk "${a.employeeName}":
(Sisa pinjaman saat ini: ${f(e)})`,e);if(s===null)return;const r=Math.max(0,parseFloat(s.replace(/[^0-9]/g,""))||0);if(r<=0){$("Nominal pembayaran tidak valid","warning");return}be(t,r,"Pembayaran manual / tunai staf")},be=async(t,e,a="Potongan gaji payroll")=>{const s=N.find(c=>(c.advanceId||c.id)===t);if(!s)return!1;const r=Math.max(0,parseFloat(s.remainingAmount)||0),i=Math.min(r,e),n=Math.max(0,r-i),o=n<=0,x={date:new Date().toISOString().split("T")[0],amount:i,remainingAfter:n,notes:a,recordedAt:new Date().toISOString()};L("Memperbarui catatan kasbon...");try{const c={remainingAmount:n,status:o?"paid":"active",repayments:H.firestore.FieldValue.arrayUnion(x),updatedAt:H.firestore.FieldValue.serverTimestamp()};try{await P.collection("freshmart").doc("cms_data").collection("salary_advances").doc(t).update(c)}catch{}s.remainingAmount=n,s.status=o?"paid":"active",Array.isArray(s.repayments)||(s.repayments=[]),s.repayments.push(x);try{localStorage.setItem("freshmart_salary_advances",JSON.stringify(m.salaryAdvances)),await re()}catch{}$(`Pembayaran kasbon ${f(i)} berhasil dicatat! Sisa: ${f(n)}`,"success");const p=d("cashier-panel-advances");return p&&Q(p),!0}catch(c){return console.error("[HR Advances] Gagal mencatat pembayaran:",c),$("Gagal mencatat pembayaran: "+c.message,"error"),!1}finally{K()}},lt=(t,e)=>{D("menghapus data kasbon")&&Se("Hapus Catatan Kasbon",`Yakin hapus data kasbon "${e}" (#${t})? Tindakan ini tidak dapat dibatalkan.`,async()=>{L("Menghapus catatan kasbon...");try{try{await P.collection("freshmart").doc("cms_data").collection("salary_advances").doc(t).delete()}catch(s){console.warn("[HR Advances] Cloud delete terkendala hak akses/offline:",s)}N=N.filter(s=>(s.advanceId||s.id)!==t),m.salaryAdvances=N;try{localStorage.setItem("freshmart_salary_advances",JSON.stringify(m.salaryAdvances)),await re()}catch{}$(`Catatan kasbon "${e}" berhasil dihapus`,"success");const a=d("cashier-panel-advances");a&&Q(a)}catch(a){console.error("[HR Advances] Gagal menghapus kasbon:",a),$("Gagal menghapus: "+a.message,"error")}finally{K()}},"Ya, Hapus",!0)};typeof window<"u"&&(window.loadSalaryAdvances=Me,window.renderSalaryAdvancesView=Q,window.filterAdvanceStatus=Qe,window.openSalaryAdvanceFormModal=Xe,window.closeSalaryAdvanceFormModal=Te,window.calculateAdvanceInstallment=Ie,window.onAdvanceEmployeeChange=et,window.saveSalaryAdvance=tt,window.openAdvanceDetailModal=at,window.closeAdvanceDetailModal=st,window.promptManualRepayment=rt,window.recordAdvanceRepayment=be,window.deleteSalaryAdvance=lt);let C=new Date().toISOString().split("T")[0],G=[];const je=async()=>{try{if(typeof window<"u"&&typeof window.saveApp=="function")return await window.saveApp();const t=await ie(()=>import("./module-pos-Bw3FogP4.js").then(e=>e.W),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url);if(typeof t?.saveApp=="function")return await t.saveApp()}catch{}},me=[{key:"present",label:"Hadir",badgeClass:"bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-200",icon:"fa-check"},{key:"late",label:"Terlambat",badgeClass:"bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border-amber-200",icon:"fa-clock"},{key:"permit",label:"Izin",badgeClass:"bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 border-blue-200",icon:"fa-envelope-open-text"},{key:"sick",label:"Sakit",badgeClass:"bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300 border-purple-200",icon:"fa-notes-medical"},{key:"alpha",label:"Alpha",badgeClass:"bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 border-rose-200",icon:"fa-xmark"}],le=(t,e)=>`ATT-${t}-${e.replace(/[^a-zA-Z0-9]/g,"")}`,De=async(t=C)=>{C=t;try{let e=[],a=!1;try{const s=await P.collection("freshmart").doc("cms_data").collection("attendances").where("date","==",t).get();s&&!s.empty&&(e=s.docs.map(r=>({id:r.id,...r.data()})),a=!0)}catch{}if(!a||e.length===0){let s=Array.isArray(m.attendances)?m.attendances:[];if(s.length===0)try{s=JSON.parse(localStorage.getItem("freshmart_attendances")||"[]"),Array.isArray(s)&&s.length>0&&(m.attendances=s)}catch{}const r=s.filter(i=>i.date===t);r.length>0&&(e=r)}return G=e,e}catch(e){return console.error("[HR Attendance] Gagal memuat absensi tanggal:",t,e),G=(Array.isArray(m.attendances)?m.attendances:[]).filter(s=>s.date===t),G}},te=async t=>{if(!t)return;t.innerHTML=`
    <div class="text-center py-16">
        <i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i>
        <p class="text-xs text-slate-400 mt-2">Memuat lembar presensi tim...</p>
    </div>`,await De(C);const e=z(),a=new Map;G.forEach(c=>{a.set(c.employeeId||c.employeeUid,c)});let s=0,r=0,i=0,n=0,o=0;e.forEach(c=>{const p=a.get(c.employeeId)||a.get(c.uid),b=p?p.status:"unrecorded";b==="present"?(s++,o+=parseFloat(p.allowanceEarned)||parseFloat(c.dailyAllowance)||0):b==="late"?(r++,o+=parseFloat(p.allowanceEarned)||parseFloat(c.dailyAllowance)||0):b==="permit"||b==="sick"?i++:b==="alpha"&&n++});const x=C===new Date().toISOString().split("T")[0];t.innerHTML=`
    <div class="space-y-4">
        <!-- Date Selector & Quick Controls -->
        <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div class="flex items-center gap-2 flex-wrap">
                <span class="text-xs font-bold text-slate-600 dark:text-slate-300 flex items-center gap-2">
                    <i class="fa-solid fa-calendar-day" style="color: var(--color-primary)"></i>
                    <span>Tanggal Presensi:</span>
                </span>
                <button onclick="window.navigateAttendanceDate(-1)" class="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center text-xs active:scale-95 transition-all cursor-pointer border border-slate-200/80 dark:border-slate-700" title="Hari Sebelumnya">
                    <i class="fa-solid fa-chevron-left"></i>
                </button>
                <input id="att-date-picker" type="date" value="${C}" onchange="window.onAttendanceDateChanged(this.value)"
                    class="h-9 border border-slate-200 dark:border-slate-700 rounded-xl px-3 text-xs font-bold bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                <button onclick="window.navigateAttendanceDate(1)" class="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center text-xs active:scale-95 transition-all cursor-pointer border border-slate-200/80 dark:border-slate-700" title="Hari Berikutnya">
                    <i class="fa-solid fa-chevron-right"></i>
                </button>
                ${x?"":`
                <button onclick="window.onAttendanceDateChanged('${new Date().toISOString().split("T")[0]}')"
                    class="h-9 px-3.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700 transition-all active:scale-95 cursor-pointer">
                    Hari Ini
                </button>`}
            </div>

            <div class="flex items-center gap-2">
                <button onclick="window.openMonthlyAttendanceRecapModal('${C.slice(0,7)}')"
                    class="h-9 px-3.5 rounded-xl text-xs font-bold bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-600 shadow-2xs hover:bg-slate-50 dark:hover:bg-slate-600 transition-all active:scale-95 cursor-pointer flex items-center gap-1.5"
                    title="Rekapitulasi Presensi & Kedisiplinan Tim">
                    <i class="fa-solid fa-chart-pie" style="color: var(--color-primary)"></i>
                    <span>Rekap Bulanan</span>
                </button>
                <button onclick="window.bulkMarkAllPresent()"
                    class="h-9 px-4 rounded-xl text-xs font-black text-white shadow-xs active:scale-95 transition-all cursor-pointer flex items-center gap-2 hover:opacity-95"
                    style="background: var(--color-primary)">
                    <i class="fa-solid fa-bolt text-xs"></i>
                    <span>Hadirkan Semua Staf</span>
                </button>
            </div>
        </div>

        <!-- Bento Ringkasan Kehadiran Hari Ini (Theme Harmonized) -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5">
            <div class="p-4 rounded-2xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                <div class="flex items-center justify-between mb-2">
                    <span class="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Hadir Tepat Waktu</span>
                    <div class="w-8 h-8 rounded-xl flex items-center justify-center text-xs shrink-0 border border-emerald-200 dark:border-emerald-800/60 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400">
                        <i class="fa-solid fa-user-check"></i>
                    </div>
                </div>
                <p class="text-2xl font-black text-slate-800 dark:text-white tracking-tight">${s} <span class="text-xs font-semibold text-slate-400 dark:text-slate-500">Staf</span></p>
                <p class="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">Presensi terpenuhi</p>
            </div>
            <div class="p-4 rounded-2xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                <div class="flex items-center justify-between mb-2">
                    <span class="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Terlambat</span>
                    <div class="w-8 h-8 rounded-xl flex items-center justify-center text-xs shrink-0 border border-amber-200 dark:border-amber-800/60 bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400">
                        <i class="fa-solid fa-user-clock"></i>
                    </div>
                </div>
                <p class="text-2xl font-black text-slate-800 dark:text-white tracking-tight">${r} <span class="text-xs font-semibold text-slate-400 dark:text-slate-500">Staf</span></p>
                <p class="text-[10px] font-bold text-amber-600 dark:text-amber-400 mt-0.5">Jam masuk lewat batas</p>
            </div>
            <div class="p-4 rounded-2xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                <div class="flex items-center justify-between mb-2">
                    <span class="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Izin / Sakit</span>
                    <div class="w-8 h-8 rounded-xl flex items-center justify-center text-xs shrink-0 border border-blue-200 dark:border-blue-800/60 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400">
                        <i class="fa-solid fa-calendar-minus"></i>
                    </div>
                </div>
                <p class="text-2xl font-black text-slate-800 dark:text-white tracking-tight">${i} <span class="text-xs font-semibold text-slate-400 dark:text-slate-500">Staf</span></p>
                <p class="text-[10px] font-bold text-blue-600 dark:text-blue-400 mt-0.5">Tercatat izin resmi</p>
            </div>
            <div class="p-4 rounded-2xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                <div class="flex items-center justify-between mb-2">
                    <span class="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Alpha / Belum Tercatat</span>
                    <div class="w-8 h-8 rounded-xl flex items-center justify-center text-xs shrink-0 border border-rose-200 dark:border-rose-800/60 bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400">
                        <i class="fa-solid fa-user-xmark"></i>
                    </div>
                </div>
                <p class="text-2xl font-black text-slate-800 dark:text-white tracking-tight">${n+(e.length-s-r-i-n)} <span class="text-xs font-semibold text-slate-400 dark:text-slate-500">Staf</span></p>
                <p class="text-[10px] font-bold text-rose-500 mt-0.5">Uang makan Rp 0</p>
            </div>
        </div>

        <!-- Daftar Kehadiran Staf -->
        <div class="space-y-2.5">
            ${e.map(c=>{const p=a.get(c.employeeId)||a.get(c.uid),b=p?p.status:"present",k=!!p,w=p?.clockIn||"08:00",g=p?.clockOut||"17:00";p?.notes;const v=parseFloat(c.dailyAllowance)||0;return k?parseFloat(p?.allowanceEarned):v>0,`
                <div class="p-4 bg-white dark:bg-slate-800/95 rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:shadow-xs transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-3.5">
                    <div class="flex items-center gap-3.5 min-w-0">
                        <div class="w-11 h-11 rounded-2xl flex items-center justify-center font-black text-xs shrink-0 shadow-2xs border border-[rgba(var(--color-primary-rgb),0.25)]"
                            style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary)">
                            ${(c.name||"ST").trim().split(/\s+/).slice(0,2).map(A=>A[0]).join("").toUpperCase()}
                        </div>
                        <div class="min-w-0 flex-1">
                            <div class="flex items-center gap-2 flex-wrap">
                                <span class="text-sm sm:text-base font-black text-slate-900 dark:text-white">${l(c.name)}</span>
                                <span class="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                                    ${l(c.employeeId)}
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
                                <span class="font-semibold text-slate-700 dark:text-slate-300">${l(c.position)}</span>
                                <span>•</span>
                                <span>Uang Makan Harian: <strong class="text-emerald-600 dark:text-emerald-400">${f(v)}</strong></span>
                                ${p?.source==="pos_shift"?'<span>•</span><span class="text-[10px] text-blue-500 font-bold"><i class="fa-solid fa-cash-register mr-1"></i>Otomatis Buka Shift</span>':""}
                            </div>
                        </div>
                    </div>

                    <!-- Status Selector Buttons & Jam Kerja -->
                    <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0">
                        <!-- Status Chips -->
                        <div class="grid grid-cols-5 gap-1 p-1 bg-slate-100 dark:bg-slate-900/90 rounded-2xl border border-slate-200/80 dark:border-slate-700/80">
                            ${me.map(A=>{const h=b===A.key;let M="bg-slate-800 text-white";return A.key==="present"?M="bg-emerald-600 text-white shadow-2xs font-black":A.key==="late"?M="bg-amber-500 text-white shadow-2xs font-black":A.key==="permit"?M="bg-blue-600 text-white shadow-2xs font-black":A.key==="sick"?M="bg-purple-600 text-white shadow-2xs font-black":A.key==="alpha"&&(M="bg-rose-600 text-white shadow-2xs font-black"),`
                                <button type="button" onclick="window.setQuickAttendanceStatus('${l(c.employeeId)}', '${A.key}')"
                                    id="btn-att-status-${l(c.employeeId)}-${A.key}"
                                    data-status="${A.key}"
                                    data-selected="${h?"true":"false"}"
                                    class="att-status-btn-${l(c.employeeId)} px-2.5 py-1.5 rounded-xl text-[10px] font-bold transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-1 ${h?M:"text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-white/60 dark:hover:bg-slate-800/60"}">
                                    <i class="fa-solid ${A.icon} text-[9px]"></i>
                                    <span>${A.label}</span>
                                </button>
                            `}).join("")}
                        </div>

                        <!-- Jam Masuk & Keluar -->
                        <div class="flex items-center gap-1 text-xs">
                            <input id="att-in-${l(c.employeeId)}" type="time" value="${w}" title="Jam Masuk"
                                class="w-[96px] sm:w-[104px] min-w-[96px] h-9 px-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-mono font-bold text-center text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                            <span class="text-slate-400 font-bold">-</span>
                            <input id="att-out-${l(c.employeeId)}" type="time" value="${g}" title="Jam Pulang"
                                class="w-[96px] sm:w-[104px] min-w-[96px] h-9 px-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-mono font-bold text-center text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                        </div>

                        <!-- Tombol Simpan Row -->
                        <button onclick="window.saveSingleAttendance('${l(c.employeeId)}', '${l(c.uid||c.employeeId)}', '${l(c.name)}', '${l(c.position)}', '${l(c.role)}', ${v})"
                            id="btn-save-att-${l(c.employeeId)}"
                            class="h-9 px-4 rounded-xl text-xs font-black text-white transition-all active:scale-95 cursor-pointer shadow-xs flex items-center justify-center gap-1.5 hover:opacity-95"
                            style="background: var(--color-primary)">
                            <i class="fa-solid fa-floppy-disk text-[10px]"></i>
                            <span>Simpan</span>
                        </button>
                    </div>
                </div>`}).join("")}
        </div>
    </div>`},ot=t=>{const e=new Date(C);e.setDate(e.getDate()+t),C=e.toISOString().split("T")[0];const a=d("cashier-panel-attendance");a&&te(a)},nt=t=>{C=t;const e=d("cashier-panel-attendance");e&&te(e)},it=(t,e)=>{document.querySelectorAll(`.att-status-btn-${t}`).forEach(s=>{s.className=`att-status-btn-${t} px-2.5 py-1.5 rounded-xl text-[10px] font-bold transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-1 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-white/60 dark:hover:bg-slate-800/60`,s.setAttribute("data-selected","false")});const a=d(`btn-att-status-${t}-${e}`);if(a){let s="bg-slate-800 text-white";e==="present"?s="bg-emerald-600 text-white shadow-2xs font-black":e==="late"?s="bg-amber-500 text-white shadow-2xs font-black":e==="permit"?s="bg-blue-600 text-white shadow-2xs font-black":e==="sick"?s="bg-purple-600 text-white shadow-2xs font-black":e==="alpha"&&(s="bg-rose-600 text-white shadow-2xs font-black"),a.className=`att-status-btn-${t} px-2.5 py-1.5 rounded-xl text-[10px] font-black transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-1 ${s}`,a.setAttribute("data-selected","true"),a.setAttribute("data-selected-status",e)}},dt=async(t,e,a,s,r,i)=>{if(!D("mencatat absensi karyawan"))return;let n="present";me.forEach(v=>{const y=d(`btn-att-status-${t}-${v.key}`);y&&(y.getAttribute("data-selected")==="true"||y.getAttribute("data-selected-status")===v.key||y.classList.contains("bg-emerald-600")||y.classList.contains("bg-amber-500")||y.classList.contains("bg-blue-600")||y.classList.contains("bg-purple-600")||y.classList.contains("bg-rose-600")||y.classList.contains("bg-white")||y.classList.contains("dark:bg-slate-800"))&&(n=v.key)});const o=d(`att-in-${t}`)?.value||"08:00",x=d(`att-out-${t}`)?.value||"17:00",c=n==="present"||n==="late"?i:0,p=le(C,t),b={attendanceId:p,date:C,employeeUid:e,employeeId:t,employeeName:a,position:s,role:r,status:n,clockIn:o,clockOut:x,allowanceEarned:c,notes:"",source:"manual",updatedAt:H.firestore.FieldValue.serverTimestamp(),recordedBy:Z.currentUser?.uid||"owner"},k=d(`btn-save-att-${t}`);k&&(k.disabled=!0,k.innerHTML='<i class="fa-solid fa-spinner fa-spin text-[10px]"></i>');const w=G.findIndex(v=>v.attendanceId===p);w>-1?G[w]={id:p,...b}:G.push({id:p,...b}),Array.isArray(m.attendances)||(m.attendances=[]);const g=m.attendances.findIndex(v=>v.attendanceId===p);g>-1?m.attendances[g]={id:p,...b}:m.attendances.push({id:p,...b});try{localStorage.setItem("freshmart_attendances",JSON.stringify(m.attendances))}catch{}try{await P.collection("freshmart").doc("cms_data").collection("attendances").doc(p).set(b,{merge:!0})}catch(v){console.warn("[HR Attendance] Cloud sync terkendala hak akses/offline, presensi tetap tersimpan di lokal:",v)}try{await je()}catch{}$(`Presensi ${a} (${n.toUpperCase()}) tersimpan!`,"success"),k&&(k.disabled=!1,k.innerHTML='<i class="fa-solid fa-check text-[10px]"></i><span>Tersimpan</span>')},ct=async()=>{if(!D("mencatat presensi massal"))return;const t=z();if(t.length!==0){L("Mencatat kehadiran seluruh staf...");try{const e=[];for(const s of t){const r=s.employeeId||"EMP-001",i=le(C,r),n=parseFloat(s.dailyAllowance)||0,o={attendanceId:i,date:C,employeeUid:s.uid||r,employeeId:r,employeeName:s.name||"Karyawan",position:s.position||"Staf Toko",role:s.role||"staff",status:"present",clockIn:"08:00",clockOut:"17:00",allowanceEarned:n,notes:"Hadir massal 1-klik",source:"bulk",updatedAt:H.firestore.FieldValue.serverTimestamp(),recordedBy:Z.currentUser?.uid||"owner"};e.push({id:i,...o})}G=e,Array.isArray(m.attendances)||(m.attendances=[]),e.forEach(s=>{const r=m.attendances.findIndex(i=>i.attendanceId===s.attendanceId);r>-1?m.attendances[r]=s:m.attendances.push(s)});try{localStorage.setItem("freshmart_attendances",JSON.stringify(m.attendances))}catch{}try{const s=P.batch();for(const r of e){const i=P.collection("freshmart").doc("cms_data").collection("attendances").doc(r.attendanceId);s.set(i,r,{merge:!0})}await s.commit()}catch(s){console.warn("[HR Attendance] Cloud batch presensi massal terkendala hak akses/offline, tetap tersimpan lokal:",s)}try{await je()}catch{}$(`Presensi seluruh ${t.length} staf berhasil dicatat sebagai HADIR!`,"success");const a=d("cashier-panel-attendance");a&&te(a)}catch(e){console.error("[HR Attendance] Gagal presensi massal:",e),$("Gagal presensi massal: "+e.message,"error")}finally{K()}}},pt=async(t,e)=>{try{if(!t)return;const a=new Date().toISOString().split("T")[0],s=t.employeeId||"EMP-001",r=le(a,s);if(Array.isArray(m.attendances)||(m.attendances=[]),m.attendances.some(b=>b.attendanceId===r))return;const n=String(e?.getHours?e.getHours():new Date().getHours()).padStart(2,"0"),o=String(e?.getMinutes?e.getMinutes():new Date().getMinutes()).padStart(2,"0"),x=`${n}:${o}`,c=parseFloat(t.dailyAllowance)||2e4,p={attendanceId:r,date:a,employeeUid:t.uid||s,employeeId:s,employeeName:t.name||"Kasir POS",position:t.position||"Kasir POS",role:t.role||"cashier",status:"present",clockIn:x,clockOut:"17:00",allowanceEarned:c,notes:"Absensi otomatis dari Buka Shift Kasir",source:"pos_shift",createdAt:H.firestore.FieldValue.serverTimestamp()};m.attendances.push({id:r,...p});try{localStorage.setItem("freshmart_attendances",JSON.stringify(m.attendances))}catch{}try{const b=P.collection("freshmart").doc("cms_data").collection("attendances").doc(r);(await b.get()).exists||await b.set(p)}catch{}console.log("[HR Attendance] Presensi kasir tercatat otomatis dari shift:",s,x)}catch(a){console.warn("[HR Attendance] Gagal auto-record shift attendance:",a.message)}},fe=(t=[],e,a)=>{const s=t.filter(p=>{const b=p.date&&p.date.startsWith(e),k=a?p.employeeId===a||p.employeeUid===a:!0;return b&&k});let r=0,i=0,n=0,o=0,x=0,c=0;return s.forEach(p=>{p.status==="present"?(r++,c+=parseFloat(p.allowanceEarned)||0):p.status==="late"?(i++,c+=parseFloat(p.allowanceEarned)||0):p.status==="permit"?n++:p.status==="sick"?o++:p.status==="alpha"&&x++}),{totalRecords:s.length,presentDays:r,lateDays:i,permitDays:n,sickDays:o,alphaDays:x,totalAllowance:c}},Y=(t=new Date().toISOString().slice(0,7))=>{const e=Array.isArray(m.attendances)?m.attendances:[],a=z(),s=Ve(t);let r=0,i=0,n=0,o=0,x=0,c=0;const p=a.map(g=>{const v=g.employeeId||g.uid,y=fe(e,t,v),A=y.presentDays||0,h=y.lateDays||0,M=y.permitDays||0,R=y.sickDays||0,S=y.alphaDays||0,I=A+h,j=y.totalRecords||I+M+R+S,E=y.totalAllowance||0,q=j>0?Math.min(100,Math.round((A+h*.9)/j*1e3)/10):0;return r+=E,i+=A,n+=h,o+=M,x+=R,c+=S,{employeeId:v,employeeUid:g.uid||"",name:g.name||"Karyawan",position:g.position||"Staf Toko",role:g.role||"staff",dailyAllowanceRate:parseFloat(g.dailyAllowance)||0,presentDays:A,lateDays:h,permitDays:M,sickDays:R,alphaDays:S,totalWorkDays:I,totalLoggedDays:j,attendanceRate:q,totalAllowance:E}}),b=i+n,k=b+o+x+c,w=k>0?Math.min(100,Math.round((i+n*.9)/k*1e3)/10):0;return{period:t,periodLabel:s,items:p,totalMembers:a.length,totalPresentDays:i,totalLateDays:n,totalPermitDays:o,totalSickDays:x,totalAlphaDays:c,totalWorkDays:b,totalTeamAllowance:r,avgAttendanceRate:w}},Re=async(t=new Date().toISOString().slice(0,7))=>{try{let e=Array.isArray(m.attendances)?m.attendances:[];if(e.length===0)try{e=JSON.parse(localStorage.getItem("freshmart_attendances")||"[]"),Array.isArray(e)&&e.length>0&&(m.attendances=e)}catch{}try{const a=`${t}-01`,s=`${t}-31`,r=await P.collection("freshmart").doc("cms_data").collection("attendances").where("date",">=",a).where("date","<=",s).get();if(r&&!r.empty){const i=r.docs.map(n=>({id:n.id,...n.data()}));Array.isArray(m.attendances)||(m.attendances=[]),i.forEach(n=>{const o=n.attendanceId||n.id,x=m.attendances.findIndex(c=>(c.attendanceId||c.id)===o);x>=0?m.attendances[x]={...m.attendances[x],...n}:m.attendances.push(n)});try{localStorage.setItem("freshmart_attendances",JSON.stringify(m.attendances))}catch{}}}catch(a){console.warn("[HR Attendance] Fallback offline untuk rekap bulan:",t,a.message)}return Y(t)}catch(e){return console.error("[HR Attendance] Gagal memuat absensi bulanan:",e),Y(t)}},xt=async(t=(C||new Date().toISOString().split("T")[0]).slice(0,7))=>{let e=d("modal-attendance-rekap");e&&e.remove(),L(),await Re(t),K();const a=Y(t),s=m.store||{name:"TOKO PUTRI UTAMA TEKNIK"};e=document.createElement("div"),e.id="modal-attendance-rekap",e.className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/60 backdrop-blur-xs transition-opacity duration-200",e.style.opacity="0",e.innerHTML=`
    <div id="attendance-rekap-modal-box" class="w-full sm:max-w-4xl bg-white dark:bg-slate-900 rounded-t-[2rem] sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-2xl flex flex-col max-h-[92vh] sm:max-h-[88vh] overflow-hidden transform transition-all duration-200 scale-95">
        
        <!-- Pull Indicator (Mobile Native Bottom Sheet) -->
        <div class="w-full pt-2.5 pb-1 flex justify-center sm:hidden shrink-0">
            <div class="w-10 h-1 rounded-full bg-slate-300 dark:bg-slate-700"></div>
        </div>

        <!-- Modal Header -->
        <div class="px-5 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3 shrink-0"
            style="background: linear-gradient(135deg, rgba(var(--color-primary-rgb), 0.08) 0%, rgba(var(--color-primary-rgb), 0.02) 100%)">
            <div class="flex items-center gap-3 min-w-0">
                <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-xs"
                    style="background: var(--color-primary)">
                    <i class="fa-solid fa-clipboard-user text-base"></i>
                </div>
                <div class="min-w-0">
                    <h3 class="font-black text-sm sm:text-base text-slate-900 dark:text-white truncate">
                        Rekapitulasi Presensi &amp; Kedisiplinan Tim
                    </h3>
                    <p class="text-xs text-slate-500 dark:text-slate-400 truncate">
                        ${l(s.name||"Toko Putri")} • <strong class="text-slate-700 dark:text-slate-200">${l(a.periodLabel)}</strong>
                    </p>
                </div>
            </div>

            <!-- Month Navigator & Close Button -->
            <div class="flex items-center gap-2 shrink-0">
                <div class="flex items-center gap-1 bg-white dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700 shadow-2xs">
                    <input type="month" id="att-rekap-period-picker" value="${t}"
                        onchange="window.openMonthlyAttendanceRecapModal(this.value)"
                        class="px-2 py-0.5 bg-transparent text-xs font-black text-slate-800 dark:text-white border-0 focus:outline-none cursor-pointer">
                </div>
                <button onclick="window.closeMonthlyAttendanceRecapModal()" 
                    class="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer"
                    title="Tutup">
                    <i class="fa-solid fa-xmark text-sm"></i>
                </button>
            </div>
        </div>

        <!-- Modal Body -->
        <div class="p-4 sm:p-5 overflow-y-auto space-y-4 flex-1 custom-scrollbar text-xs">
            
            <!-- 4 Bento KPI Kehadiran Bulanan -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
                <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-1.5">
                        <span class="text-[10px] font-black uppercase tracking-wider text-slate-400">Rata-Rata Disiplin</span>
                        <div class="w-7 h-7 rounded-lg flex items-center justify-center text-xs shrink-0 border border-emerald-200 dark:border-emerald-800/60 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400">
                            <i class="fa-solid fa-chart-line"></i>
                        </div>
                    </div>
                    <p class="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400 tracking-tight">${a.avgAttendanceRate}%</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">Tingkat kehadiran tim</p>
                </div>

                <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-1.5">
                        <span class="text-[10px] font-black uppercase tracking-wider text-slate-400">Total Hari Hadir</span>
                        <div class="w-7 h-7 rounded-lg flex items-center justify-center text-xs shrink-0 border border-[rgba(var(--color-primary-rgb),0.25)] bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)]">
                            <i class="fa-solid fa-user-check"></i>
                        </div>
                    </div>
                    <p class="text-xl sm:text-2xl font-black text-slate-800 dark:text-white tracking-tight">${a.totalWorkDays} <span class="text-xs font-semibold text-slate-400">Hari</span></p>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">${a.totalPresentDays} Tepat, ${a.totalLateDays} Terlambat</p>
                </div>

                <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-1.5">
                        <span class="text-[10px] font-black uppercase tracking-wider text-slate-400">Izin, Sakit &amp; Alpha</span>
                        <div class="w-7 h-7 rounded-lg flex items-center justify-center text-xs shrink-0 border border-amber-200 dark:border-amber-800/60 bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400">
                            <i class="fa-solid fa-user-clock"></i>
                        </div>
                    </div>
                    <p class="text-xl sm:text-2xl font-black text-slate-800 dark:text-white tracking-tight">${a.totalPermitDays+a.totalSickDays+a.totalAlphaDays} <span class="text-xs font-semibold text-slate-400">Hari</span></p>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">${a.totalPermitDays} Izin, ${a.totalSickDays} Sakit, ${a.totalAlphaDays} Alpha</p>
                </div>

                <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-1.5">
                        <span class="text-[10px] font-black uppercase tracking-wider text-slate-400">Hak Uang Makan</span>
                        <div class="w-7 h-7 rounded-lg flex items-center justify-center text-xs shrink-0 border border-emerald-200 dark:border-emerald-800/60 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400">
                            <i class="fa-solid fa-hand-holding-dollar"></i>
                        </div>
                    </div>
                    <p class="text-base sm:text-lg font-black text-emerald-600 dark:text-emerald-400 font-mono tracking-tight">${f(a.totalTeamAllowance)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">Siap ditarik ke Payroll</p>
                </div>
            </div>

            <!-- Realtime Search Bar Staf -->
            <div class="flex items-center justify-between gap-2">
                <div class="relative flex-1">
                    <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
                    <input type="text" id="att-rekap-search" placeholder="Cari nama karyawan atau jabatan..."
                        oninput="window.filterAttendanceRecapTable(this.value)"
                        class="w-full h-9 pl-9 pr-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-xs text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                </div>
                <span class="text-xs font-bold text-slate-400 shrink-0">
                    Total: <strong class="text-slate-700 dark:text-slate-200">${a.totalMembers} Staf</strong>
                </span>
            </div>

            <!-- Matriks Tabel Presensi Karyawan -->
            <div class="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-2xs bg-white dark:bg-slate-800/60">
                <div class="overflow-x-auto custom-scrollbar">
                    <table class="w-full text-left text-xs whitespace-nowrap">
                        <thead class="bg-slate-50 dark:bg-slate-800/90 text-slate-500 dark:text-slate-400 font-black uppercase text-[10px] tracking-wider border-b border-slate-200 dark:border-slate-700">
                            <tr>
                                <th class="py-3 px-3 text-center w-10">No</th>
                                <th class="py-3 px-3">Karyawan</th>
                                <th class="py-3 px-2 text-center text-emerald-600">Hadir</th>
                                <th class="py-3 px-2 text-center text-amber-500">Terlambat</th>
                                <th class="py-3 px-2 text-center text-blue-500">Izin</th>
                                <th class="py-3 px-2 text-center text-purple-500">Sakit</th>
                                <th class="py-3 px-2 text-center text-rose-500">Alpha</th>
                                <th class="py-3 px-3 text-center">Total Masuk</th>
                                <th class="py-3 px-3 text-center">% Disiplin</th>
                                <th class="py-3 px-3 text-right">Hak Tunjangan</th>
                            </tr>
                        </thead>
                        <tbody id="att-rekap-tbody" class="divide-y divide-slate-100 dark:divide-slate-700/60">
                            ${a.items.map((r,i)=>{const n=r.attendanceRate>=95?"bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-300":r.attendanceRate>=80?"bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border-amber-300":"bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 border-rose-300",o=(r.name||"ST").trim().split(/\s+/).slice(0,2).map(x=>x[0]).join("").toUpperCase();return`
                                <tr class="att-rekap-row hover:bg-slate-50/70 dark:hover:bg-slate-700/40 transition-colors" data-name="${l(r.name.toLowerCase())}" data-pos="${l(r.position.toLowerCase())}">
                                    <td class="py-2.5 px-3 text-center font-mono text-slate-400">${i+1}</td>
                                    <td class="py-2.5 px-3">
                                        <div class="flex items-center gap-2.5">
                                            <div class="w-7 h-7 rounded-xl flex items-center justify-center font-black text-[10px] shrink-0 border border-[rgba(var(--color-primary-rgb),0.25)]"
                                                style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary)">
                                                ${o}
                                            </div>
                                            <div class="min-w-0">
                                                <div class="font-black text-slate-800 dark:text-white truncate">${l(r.name)}</div>
                                                <div class="text-[10px] text-slate-400 flex items-center gap-1.5">
                                                    <span class="font-mono">${l(r.employeeId)}</span>
                                                    <span>•</span>
                                                    <span class="truncate">${l(r.position)}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="py-2.5 px-2 text-center font-mono font-bold text-emerald-600 dark:text-emerald-400">${r.presentDays}</td>
                                    <td class="py-2.5 px-2 text-center font-mono font-bold text-amber-500">${r.lateDays}</td>
                                    <td class="py-2.5 px-2 text-center font-mono text-slate-500">${r.permitDays}</td>
                                    <td class="py-2.5 px-2 text-center font-mono text-slate-500">${r.sickDays}</td>
                                    <td class="py-2.5 px-2 text-center font-mono font-bold text-rose-500">${r.alphaDays}</td>
                                    <td class="py-2.5 px-3 text-center font-mono font-black text-slate-800 dark:text-white">${r.totalWorkDays} Hari</td>
                                    <td class="py-2.5 px-3 text-center">
                                        <span class="inline-flex px-2 py-0.5 rounded-full text-[10px] font-black border ${n}">
                                            ${r.attendanceRate}%
                                        </span>
                                    </td>
                                    <td class="py-2.5 px-3 text-right font-mono font-black text-emerald-600 dark:text-emerald-400">${f(r.totalAllowance)}</td>
                                </tr>`}).join("")}
                        </tbody>
                        <tfoot class="bg-slate-50 dark:bg-slate-800/90 font-black text-slate-800 dark:text-white border-t-2 border-slate-200 dark:border-slate-700">
                            <tr>
                                <td colspan="2" class="py-3 px-3 text-right">TOTAL TIM (${a.totalMembers} Staf):</td>
                                <td class="py-3 px-2 text-center font-mono text-emerald-600">${a.totalPresentDays}</td>
                                <td class="py-3 px-2 text-center font-mono text-amber-500">${a.totalLateDays}</td>
                                <td class="py-3 px-2 text-center font-mono text-slate-500">${a.totalPermitDays}</td>
                                <td class="py-3 px-2 text-center font-mono text-slate-500">${a.totalSickDays}</td>
                                <td class="py-3 px-2 text-center font-mono text-rose-500">${a.totalAlphaDays}</td>
                                <td class="py-3 px-3 text-center font-mono">${a.totalWorkDays} Hari</td>
                                <td class="py-3 px-3 text-center">
                                    <span class="inline-flex px-2 py-0.5 rounded-full text-[10px] font-black border bg-emerald-100 text-emerald-800 border-emerald-300">
                                        ${a.avgAttendanceRate}%
                                    </span>
                                </td>
                                <td class="py-3 px-3 text-right font-mono text-emerald-600">${f(a.totalTeamAllowance)}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>

        <!-- Modal Footer -->
        <div class="p-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-2 shrink-0 bg-slate-50/70 dark:bg-slate-800/40 pb-[max(1rem,env(safe-area-inset-bottom))]">
            <button onclick="window.closeMonthlyAttendanceRecapModal()" 
                class="w-full sm:w-auto min-h-[44px] px-5 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 active:scale-95 transition-all cursor-pointer">
                Tutup
            </button>
            <div class="flex items-center gap-2 w-full sm:w-auto justify-end">
                <button onclick="window.exportMonthlyAttendanceCSV('${t}')"
                    class="flex-1 sm:flex-initial min-h-[44px] px-4 py-2.5 rounded-2xl text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-600 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-700 transition-all active:scale-95 cursor-pointer shadow-2xs flex items-center justify-center gap-1.5">
                    <i class="fa-solid fa-file-excel text-emerald-600 text-xs"></i>
                    <span>Ekspor CSV</span>
                </button>
                <button onclick="window.printMonthlyAttendanceA4('${t}')"
                    class="flex-1 sm:flex-initial min-h-[44px] px-5 py-2.5 rounded-2xl text-white font-black text-xs shadow-md active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-1.5"
                    style="background: var(--color-primary)">
                    <i class="fa-solid fa-print text-xs"></i>
                    <span>Cetak Rekap A4</span>
                </button>
            </div>
        </div>
    </div>`,document.body.appendChild(e),typeof window.pushModalHistory=="function"&&window.pushModalHistory("attendanceRecap"),setTimeout(()=>{e.style.opacity="1";const r=d("attendance-rekap-modal-box");r&&r.classList.remove("scale-95")},10)},bt=(t=!1)=>{const e=()=>{const a=d("modal-attendance-rekap");a&&(a.style.opacity="0",setTimeout(()=>a.remove(),200))};typeof window.requestCloseModal=="function"?window.requestCloseModal("attendanceRecap",t,e):e()},mt=(t="")=>{const e=(t||"").toLowerCase().trim();document.querySelectorAll(".att-rekap-row").forEach(s=>{const r=s.getAttribute("data-name")||"",i=s.getAttribute("data-pos")||"";!e||r.includes(e)||i.includes(e)?s.classList.remove("hidden"):s.classList.add("hidden")})},ft=(t=new Date().toISOString().slice(0,7))=>{const e=Y(t),a=m.store?.name||"TOKO PUTRI UTAMA TEKNIK",s=["No","ID Karyawan","Nama Karyawan","Jabatan","Role","Hadir (Hari)","Terlambat (Hari)","Izin (Hari)","Sakit (Hari)","Alpha (Hari)","Total Masuk (Hari)","Disiplin Kehadiran (%)","Total Uang Makan / Tunjangan (Rp)"],r=e.items.map((p,b)=>[b+1,`"${p.employeeId}"`,`"${(p.name||"").replace(/"/g,'""')}"`,`"${(p.position||"").replace(/"/g,'""')}"`,`"${p.role}"`,p.presentDays,p.lateDays,p.permitDays,p.sickDays,p.alphaDays,p.totalWorkDays,`"${p.attendanceRate}%"`,p.totalAllowance]);r.push(["",'"TOTAL"',`"${e.totalMembers} Staf"`,'""','""',e.totalPresentDays,e.totalLateDays,e.totalPermitDays,e.totalSickDays,e.totalAlphaDays,e.totalWorkDays,`"${e.avgAttendanceRate}%"`,e.totalTeamAllowance]);const i="\uFEFF"+['"REKAPITULASI PRESENSI & KEDISIPLINAN KARYAWAN"',`"Toko: ${a.replace(/"/g,'""')}"`,`"Periode: ${e.periodLabel}"`,`"Tanggal Ekspor: ${new Date().toLocaleDateString("id-ID")}"`,"",s.join(","),...r.map(p=>p.join(","))].join(`\r
`),n=new Blob([i],{type:"text/csv;charset=utf-8;"}),o=URL.createObjectURL(n),x=document.createElement("a");x.href=o;const c=a.replace(/[^a-zA-Z0-9]/g,"_");x.download=`Rekap_Presensi_${c}_${t}.csv`,document.body.appendChild(x),x.click(),document.body.removeChild(x),URL.revokeObjectURL(o),$(`Rekap presensi periode ${e.periodLabel} berhasil diekspor ke CSV!`,"success")},ut=(t=new Date().toISOString().slice(0,7))=>{const e=Y(t),a=m.store||{name:"TOKO PUTRI UTAMA TEKNIK"},s=new Date().toLocaleDateString("id-ID",{day:"numeric",month:"long",year:"numeric"}),r=`<!DOCTYPE html>
    <html lang="id">
    <head>
        <meta charset="UTF-8">
        <title>Rekap Presensi - ${l(e.periodLabel)} - ${l(a.name||"Toko Putri")}</title>
        <style>
            @page {
                size: A4 landscape;
                margin: 12mm 15mm;
            }
            * { box-sizing: border-box; }
            body {
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
                margin: 0;
                padding: 20px;
                color: #0f172a;
                background: #fff;
                font-size: 11px;
                line-height: 1.4;
            }
            .kop {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                border-bottom: 2px solid #0f172a;
                padding-bottom: 12px;
                margin-bottom: 16px;
            }
            .kop-title {
                font-size: 18px;
                font-weight: 900;
                letter-spacing: 0.5px;
                text-transform: uppercase;
                color: #0f172a;
            }
            .kop-sub {
                font-size: 11px;
                color: #475569;
                margin-top: 2px;
            }
            .doc-badge {
                display: inline-block;
                padding: 4px 12px;
                border: 1.5px solid #0f172a;
                font-weight: 900;
                font-size: 11px;
                text-transform: uppercase;
                letter-spacing: 1px;
                border-radius: 6px;
                margin-bottom: 4px;
            }
            .kpi-grid {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 12px;
                margin-bottom: 16px;
            }
            .kpi-card {
                border: 1px solid #cbd5e1;
                border-radius: 8px;
                padding: 10px 14px;
                background: #f8fafc;
            }
            .kpi-label {
                font-size: 9.5px;
                font-weight: 800;
                text-transform: uppercase;
                color: #64748b;
            }
            .kpi-val {
                font-size: 16px;
                font-weight: 900;
                margin-top: 2px;
                color: #0f172a;
            }
            table {
                width: 100%;
                border-collapse: collapse;
                margin-bottom: 20px;
            }
            th {
                background: #f1f5f9;
                border: 1px solid #cbd5e1;
                padding: 8px 10px;
                font-size: 10px;
                font-weight: 800;
                text-transform: uppercase;
                text-align: center;
            }
            td {
                border: 1px solid #cbd5e1;
                padding: 7px 10px;
                font-size: 10.5px;
            }
            .text-left { text-align: left; }
            .text-center { text-align: center; }
            .text-right { text-align: right; }
            .font-mono { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; }
            .badge-rate {
                display: inline-block;
                padding: 2px 8px;
                border-radius: 12px;
                font-weight: 800;
                font-size: 10px;
            }
            .rate-green { background: #dcfce7; color: #166534; }
            .rate-amber { background: #fef3c7; color: #92400e; }
            .rate-rose { background: #ffe4e6; color: #9f1239; }
            .sign-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 60px;
                text-align: center;
                margin-top: 30px;
                page-break-inside: avoid;
            }
            .sign-line {
                border-bottom: 1px solid #94a3b8;
                width: 60%;
                margin: 50px auto 6px auto;
            }
            @media print {
                body { padding: 0; }
                .no-print { display: none; }
            }
        </style>
    </head>
    <body onload="window.print();">
        <div class="kop">
            <div>
                <div class="kop-title">${l(a.name||"TOKO PUTRI UTAMA TEKNIK")}</div>
                <div class="kop-sub">${l(a.address||"Pusat Bahan Bangunan & Alat Teknik")}</div>
                <div class="kop-sub">WhatsApp: ${l(a.phone||a.wa||"-")}</div>
            </div>
            <div style="text-align: right;">
                <div class="doc-badge">REKAPITULASI PRESENSI KARYAWAN</div>
                <div style="font-size: 11px; color: #475569;">Periode: <strong>${l(e.periodLabel)}</strong></div>
                <div style="font-size: 10px; color: #64748b; margin-top: 2px;">Dicetak: ${s}</div>
            </div>
        </div>

        <div class="kpi-grid">
            <div class="kpi-card">
                <div class="kpi-label">Rata-Rata Disiplin Kehadiran</div>
                <div class="kpi-val" style="color: #059669;">${e.avgAttendanceRate}%</div>
            </div>
            <div class="kpi-card">
                <div class="kpi-label">Total Hari Masuk Tim</div>
                <div class="kpi-val">${e.totalWorkDays} Hari Kerja</div>
            </div>
            <div class="kpi-card">
                <div class="kpi-label">Total Izin / Sakit / Alpha</div>
                <div class="kpi-val" style="color: #475569;">${e.totalPermitDays} / ${e.totalSickDays} / ${e.totalAlphaDays}</div>
            </div>
            <div class="kpi-card">
                <div class="kpi-label">Akumulasi Uang Makan / Tunjangan</div>
                <div class="kpi-val font-mono" style="color: #059669;">${f(e.totalTeamAllowance)}</div>
            </div>
        </div>

        <table>
            <thead>
                <tr>
                    <th style="width: 35px;">No</th>
                    <th class="text-left">Karyawan</th>
                    <th class="text-left">Jabatan</th>
                    <th>Hadir</th>
                    <th>Terlambat</th>
                    <th>Izin</th>
                    <th>Sakit</th>
                    <th>Alpha</th>
                    <th>Total Masuk</th>
                    <th>% Kehadiran</th>
                    <th class="text-right">Hak Tunjangan (Rp)</th>
                </tr>
            </thead>
            <tbody>
                ${e.items.map((n,o)=>{const x=n.attendanceRate>=95?"rate-green":n.attendanceRate>=80?"rate-amber":"rate-rose";return`
                    <tr>
                        <td class="text-center font-mono">${o+1}</td>
                        <td class="text-left font-bold">
                            ${l(n.name)}
                            <span style="font-size: 9.5px; color: #64748b; font-weight: normal; margin-left: 4px;">(${l(n.employeeId)})</span>
                        </td>
                        <td class="text-left text-slate-600">${l(n.position)}</td>
                        <td class="text-center font-bold" style="color: #16a34a;">${n.presentDays}</td>
                        <td class="text-center font-bold" style="color: #d97706;">${n.lateDays}</td>
                        <td class="text-center text-slate-600">${n.permitDays}</td>
                        <td class="text-center text-slate-600">${n.sickDays}</td>
                        <td class="text-center font-bold" style="color: #e11d48;">${n.alphaDays}</td>
                        <td class="text-center font-bold font-mono">${n.totalWorkDays} Hari</td>
                        <td class="text-center">
                            <span class="badge-rate ${x}">${n.attendanceRate}%</span>
                        </td>
                        <td class="text-right font-bold font-mono">${f(n.totalAllowance)}</td>
                    </tr>`}).join("")}
                <tr style="background: #f8fafc; font-weight: 900; border-top: 2px solid #94a3b8;">
                    <td colspan="3" class="text-right" style="padding: 10px;">TOTAL TIM (${e.totalMembers} Staf):</td>
                    <td class="text-center font-mono" style="color: #16a34a;">${e.totalPresentDays}</td>
                    <td class="text-center font-mono" style="color: #d97706;">${e.totalLateDays}</td>
                    <td class="text-center font-mono">${e.totalPermitDays}</td>
                    <td class="text-center font-mono">${e.totalSickDays}</td>
                    <td class="text-center font-mono" style="color: #e11d48;">${e.totalAlphaDays}</td>
                    <td class="text-center font-mono">${e.totalWorkDays} Hari</td>
                    <td class="text-center">
                        <span class="badge-rate ${e.avgAttendanceRate>=95?"rate-green":"rate-amber"}">${e.avgAttendanceRate}%</span>
                    </td>
                    <td class="text-right font-mono" style="color: #059669;">${f(e.totalTeamAllowance)}</td>
                </tr>
            </tbody>
        </table>

        <div class="sign-grid">
            <div>
                <div>Dibuat oleh (Pengelola HR / Kasir Kepala):</div>
                <div class="sign-line"></div>
                <div style="font-weight: 800;">Staf Administrasi & HR</div>
                <div style="font-size: 10.5px; color: #64748b;">${l(a.name||"Toko Putri")}</div>
            </div>
            <div>
                <div>Mengetahui & Disetujui oleh:</div>
                <div class="sign-line"></div>
                <div style="font-weight: 800;">Direksi / Pemilik Toko</div>
                <div style="font-size: 10.5px; color: #64748b;">${l(a.name||"Toko Putri")}</div>
            </div>
        </div>
    </body>
    </html>`,i=window.open("","_blank");i&&(i.document.write(r),i.document.close())};typeof window<"u"&&(window.ATTENDANCE_STATUSES=me,window.generateAttendanceId=le,window.loadAttendancesForDate=De,window.loadAttendancesForMonth=Re,window.renderAttendanceView=te,window.navigateAttendanceDate=ot,window.onAttendanceDateChanged=nt,window.setQuickAttendanceStatus=it,window.saveSingleAttendance=dt,window.bulkMarkAllPresent=ct,window.autoRecordCashierShiftAttendance=pt,window.calculateMonthlyAttendanceSummary=fe,window.calculateMonthlyTeamAttendanceRecap=Y,window.openMonthlyAttendanceRecapModal=xt,window.closeMonthlyAttendanceRecapModal=bt,window.filterAttendanceRecapTable=mt,window.exportMonthlyAttendanceCSV=ft,window.printMonthlyAttendanceA4=ut);let O=new Date().toISOString().slice(0,7),_=[],oe=null;const $e=async()=>{try{if(typeof window<"u"&&typeof window.saveApp=="function")return await window.saveApp();const t=await ie(()=>import("./module-pos-Bw3FogP4.js").then(e=>e.W),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url);if(typeof t?.saveApp=="function")return await t.saveApp()}catch{}},ue=(t,e)=>{const a=(t||new Date().toISOString().slice(0,7)).replace(/[^0-9]/g,""),s=(e||"STAFF").replace(/[^a-zA-Z0-9]/g,"");return`PAY-${a}-${s}`},F=t=>{if(!t)return"-";const[e,a]=t.split("-"),s=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],r=parseInt(a,10)-1;return`${s[r]||a} ${e}`},He=async(t=O)=>{try{let e=[];try{const a=await P.collection("freshmart").doc("cms_data").collection("salary_payrolls").where("period","==",t).get();a&&!a.empty&&(e=a.docs.map(s=>({id:s.id,...s.data()})))}catch{}if(!e||e.length===0){let a=Array.isArray(m.payrollRuns)?m.payrollRuns:[];if(a.length===0)try{a=JSON.parse(localStorage.getItem("freshmart_payroll_runs")||"[]"),Array.isArray(a)&&a.length>0&&(m.payrollRuns=a)}catch{}e=a.filter(s=>s.period===t)}return _=e,e}catch(e){return console.error("[HR Payroll] Gagal memuat payroll:",e),_=(Array.isArray(m.payrollRuns)?m.payrollRuns:[]).filter(s=>s.period===t),_}},ne=(t,e,a=[],s=[])=>{const r=t.employeeId||t.uid,i=parseFloat(t.baseSalary)||0,n=parseFloat(t.dailyAllowance)||0,o=fe(a,e,r),x=o.presentDays||0,c=o.lateDays||0,p=x+c;let b=o.totalAllowance;b<=0&&n>0&&p>0&&(b=p*n);const k=s.find(j=>(j.employeeId===r||j.employeeUid===t.uid)&&j.status==="active"&&parseFloat(j.remainingAmount)>0);let w=0,g="",v=0;if(k){g=k.advanceId||k.id,v=parseFloat(k.remainingAmount)||0;const j=parseFloat(k.monthlyInstallment)||v;w=Math.min(v,j)}const y=0,A=0,h=0,M=0,R=i+b+y+A,S=w+h+M,I=Math.max(0,R-S);return{payrollId:ue(e,r),period:e,periodLabel:F(e),employeeUid:t.uid||"",employeeId:r,employeeName:t.name||"Karyawan",employeeRole:t.role||"staff",position:t.position||"Staf Toko",phone:t.phone||"",status:"draft",baseSalary:i,dailyAllowanceRate:n,presentDays:x,lateDays:c,permitDays:o.permitDays||0,sickDays:o.sickDays||0,alphaDays:o.alphaDays||0,totalAttendanceDays:p,attendanceAllowance:b,bonus:y,overtimePay:A,totalEarnings:R,advanceDeduction:w,advanceId:g,advanceRemainingBefore:v,lostItemDeduction:h,lostItemNotes:"",otherDeductions:M,totalDeductions:S,netSalary:I,paymentMethod:t.paymentMethod||"transfer",bankName:t.bankName||"BCA",bankAccount:t.bankAccount||"-",notes:`Gaji periode ${F(e)}`,createdAt:new Date().toISOString()}},ae=async t=>{if(!t)return;t.innerHTML=`
    <div class="text-center py-16">
        <i class="fa-solid fa-spinner fa-spin text-3xl" style="color: var(--color-primary)"></i>
        <p class="text-xs text-slate-400 mt-2 font-medium">Memuat data payroll &amp; rekap kehadiran tim...</p>
    </div>`,await He(O);const e=Array.isArray(m.attendances)?m.attendances:[],a=Array.isArray(m.salaryAdvances)?m.salaryAdvances:[],s=z(),r=s.map(b=>{const k=b.employeeId||b.uid,w=_.find(g=>g.employeeId===k||g.employeeUid===b.uid);return w||ne(b,O,e,a)}),i=r.reduce((b,k)=>b+(parseFloat(k.netSalary)||0),0),n=r.filter(b=>b.status==="paid").length,o=r.length-n,x=r.reduce((b,k)=>b+(parseFloat(k.advanceDeduction)||0),0),c=r.reduce((b,k)=>b+(parseFloat(k.lostItemDeduction)||0),0),p=F(O);t.innerHTML=`
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
                <input type="month" id="payroll-period-picker" value="${O}"
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
                    ${f(i)}
                </div>
                <div class="text-[10px] text-slate-400 mt-0.5">${s.length} Karyawan (Termasuk Owner)</div>
            </div>

            <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs">
                <div class="flex items-center justify-between text-slate-400 mb-1">
                    <span class="text-[11px] font-bold">Status Pembayaran</span>
                    <i class="fa-solid fa-circle-check text-blue-500 text-xs"></i>
                </div>
                <div class="text-sm sm:text-base font-black text-slate-800 dark:text-white font-mono">
                    <span class="text-emerald-600">${n} Lunas</span> / <span class="text-amber-500">${o} Draf</span>
                </div>
                <div class="text-[10px] text-slate-400 mt-0.5">${o===0?"Semua gaji lunas":"Menunggu pencairan"}</div>
            </div>

            <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs">
                <div class="flex items-center justify-between text-slate-400 mb-1">
                    <span class="text-[11px] font-bold">Potongan Kasbon</span>
                    <i class="fa-solid fa-hand-holding-dollar text-xs" style="color: var(--color-primary)"></i>
                </div>
                <div class="text-sm sm:text-base font-black text-[var(--color-primary)] font-mono truncate">
                    ${f(x)}
                </div>
                <div class="text-[10px] text-slate-400 mt-0.5">Otomatis potong saldo pinjaman</div>
            </div>

            <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs">
                <div class="flex items-center justify-between text-slate-400 mb-1">
                    <span class="text-[11px] font-bold">Potongan Barang Hilang</span>
                    <i class="fa-solid fa-boxes-packing text-rose-500 text-xs"></i>
                </div>
                <div class="text-sm sm:text-base font-black text-rose-600 dark:text-rose-400 font-mono truncate">
                    ${f(c)}
                </div>
                <div class="text-[10px] text-slate-400 mt-0.5">Kompensasi selisih stock opname</div>
            </div>
        </div>

        <!-- Daftar Kartu Payroll Karyawan -->
        <div class="space-y-3" id="payroll-items-container">
            ${r.map((b,k)=>{const w=b.status==="paid",g=b.employeeRole==="owner"||b.employeeId==="OWN-001";return`
                <div class="p-4 rounded-2xl bg-white dark:bg-slate-800 border ${w?"border-emerald-200 dark:border-emerald-800/60":"border-slate-200/90 dark:border-slate-700"} shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all">
                    <!-- Info Karyawan -->
                    <div class="flex items-start gap-3.5 min-w-0 flex-1">
                        <div class="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm shrink-0 shadow-2xs border ${g?"text-[var(--color-primary)] border-[rgba(var(--color-primary-rgb),0.3)]":"bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-900/60 dark:text-slate-200 dark:border-slate-700"}"
                            style="${g?"background: rgba(var(--color-primary-rgb), 0.12)":""}">
                            ${g?'<i class="fa-solid fa-crown text-amber-500"></i>':b.employeeName?.charAt(0)?.toUpperCase()||"K"}
                        </div>
                        <div class="min-w-0 flex-1">
                            <div class="flex items-center gap-2 flex-wrap">
                                <span class="text-sm font-black text-slate-900 dark:text-white truncate">${l(b.employeeName)}</span>
                                <span class="font-mono text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                                    ${l(b.employeeId)}
                                </span>
                                <span class="inline-flex items-center gap-1 text-[10px] font-black px-2 py-0.5 rounded-full ${w?"bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300":"bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border border-amber-300"}">
                                    <i class="fa-solid ${w?"fa-circle-check text-emerald-500":"fa-clock text-amber-500"} text-[9px]"></i>
                                    ${w?"Lunas / Dibayar":"Draf Penggajian"}
                                </span>
                            </div>
                            <div class="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-1 flex-wrap">
                                <span class="font-bold text-slate-700 dark:text-slate-200">${l(b.position)}</span>
                                <span>•</span>
                                <span>Absensi: <strong>${b.totalAttendanceDays||0} Hari Masuk</strong></span>
                                <span>•</span>
                                <span>Gaji Pokok: <strong>${f(b.baseSalary)}</strong></span>
                                ${b.attendanceAllowance>0?`<span>•</span><span>Tunjangan: <strong class="text-[var(--color-primary)] font-bold">+${f(b.attendanceAllowance)}</strong></span>`:""}
                            </div>
                            <!-- Rincian Potongan -->
                            <div class="flex items-center gap-2 text-[11px] text-slate-400 dark:text-slate-500 mt-1.5 flex-wrap">
                                ${b.advanceDeduction>0?`<span class="text-[var(--color-primary)] font-bold"><i class="fa-solid fa-hand-holding-dollar mr-0.5"></i> Potong Kasbon: -${f(b.advanceDeduction)}</span><span>•</span>`:""}
                                ${b.lostItemDeduction>0?`<span class="text-rose-500 font-medium"><i class="fa-solid fa-triangle-exclamation mr-0.5"></i> Potong Hilang: -${f(b.lostItemDeduction)}</span><span>•</span>`:""}
                                <span>Metode: <strong class="text-slate-600 dark:text-slate-300">${l(b.paymentMethod?.toUpperCase())}</strong></span>
                                ${b.bankAccount&&b.bankAccount!=="-"?`<span>(${l(b.bankName)}: ${l(b.bankAccount)})</span>`:""}
                            </div>
                        </div>
                    </div>

                    <!-- Nominal Take Home Pay & Tombol Aksi -->
                    <div class="flex items-center justify-between md:justify-end gap-3 shrink-0 border-t md:border-t-0 pt-3 md:pt-0 border-slate-100 dark:border-slate-700/60">
                        <div class="text-left md:text-right">
                            <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Take Home Pay</span>
                            <span class="text-base sm:text-lg font-black text-emerald-600 dark:text-emerald-400 font-mono">
                                ${f(b.netSalary)}
                            </span>
                        </div>
                        <div class="flex items-center gap-2">
                            <button onclick="window.openPayslipPreviewModal('${l(b.payrollId||b.id)}', '${l(b.employeeId)}')"
                                title="Lihat & Cetak Slip Gaji"
                                class="px-3.5 py-2.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 transition-all active:scale-95 cursor-pointer shadow-2xs flex items-center gap-1.5">
                                <i class="fa-solid fa-receipt" style="color: var(--color-primary)"></i>
                                <span>Slip Gaji</span>
                            </button>
                            <button onclick="window.openPayrollItemModal('${l(b.employeeId)}', '${O}')"
                                title="${w?"Ubah Rincian Kompensasi":"Hitung & Bayar Gaji"}"
                                class="px-3.5 py-2.5 rounded-xl text-xs font-black text-white transition-all active:scale-95 cursor-pointer shadow-md flex items-center gap-1.5"
                                style="background: ${w?"var(--color-primary)":"#10b981"}">
                                <i class="fa-solid ${w?"fa-pen-to-square":"fa-cash-register"}"></i>
                                <span>${w?"Edit":"Bayar"}</span>
                            </button>
                        </div>
                    </div>
                </div>`}).join("")}
        </div>
    </div>`},gt=t=>{const[e,a]=O.split("-");let s=parseInt(e,10),r=parseInt(a,10)+t;r<1?(r=12,s-=1):r>12&&(r=1,s+=1),O=`${s}-${String(r).padStart(2,"0")}`;const i=d("payroll-period-picker");i&&(i.value=O);const n=d("cashier-panel-payroll");n&&ae(n)},kt=t=>{if(!t)return;O=t;const e=d("cashier-panel-payroll");e&&ae(e)},vt=async(t,e=O)=>{if(!D("mengelola penggajian karyawan"))return;const s=z().find(p=>p.employeeId===t||p.uid===t);if(!s){$("Karyawan tidak ditemukan","warning");return}const r=Array.isArray(m.attendances)?m.attendances:[],i=Array.isArray(m.salaryAdvances)?m.salaryAdvances:[],o=_.find(p=>(p.employeeId===t||p.employeeUid===s.uid)&&p.period===e)||ne(s,e,r,i),x=d("modal-payroll-item-form");x&&x.remove();const c=F(e);document.body.insertAdjacentHTML("beforeend",`
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
                            ${l(s.name)} • ${l(s.position)} • Periode ${l(c)}
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
                            Hadir: <strong>${o.presentDays}</strong> • Terlambat: <strong>${o.lateDays}</strong> • Izin: <strong>${o.permitDays}</strong> • Sakit: <strong>${o.sickDays}</strong> • Alpha: <strong>${o.alphaDays}</strong>
                        </span>
                    </div>
                    <span class="font-mono font-bold text-xs px-2.5 py-1 rounded-xl bg-white dark:bg-slate-800 border"
                        style="background: rgba(var(--color-primary-rgb), 0.1); border-color: rgba(var(--color-primary-rgb), 0.25); color: var(--color-primary)">
                        Total Masuk: ${o.totalAttendanceDays} Hari
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
                            <input type="number" id="pay-base-salary" value="${o.baseSalary}" min="0" step="50000"
                                oninput="window.recalculatePayrollItem()"
                                class="w-full min-h-[44px] text-[16px] sm:text-sm px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white font-mono font-bold focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] shadow-inner">
                        </div>
                        <div>
                            <label class="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                                Tunjangan Harian / Uang Makan (Rp)
                            </label>
                            <input type="number" id="pay-attendance-allowance" value="${o.attendanceAllowance}" min="0" step="5000"
                                oninput="window.recalculatePayrollItem()"
                                class="w-full min-h-[44px] text-[16px] sm:text-sm px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white font-mono font-bold focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] shadow-inner">
                            <span class="text-[10px] text-slate-400 mt-0.5 block">Hitungan otomatis: ${o.totalAttendanceDays} hari x ${f(o.dailyAllowanceRate)}</span>
                        </div>
                        <div>
                            <label class="font-bold text-slate-700 dark:text-slate-300 block mb-1">Bonus Kinerja / Insentif Toko (Rp)</label>
                            <input type="number" id="pay-bonus" value="${o.bonus||0}" min="0" step="25000"
                                oninput="window.recalculatePayrollItem()"
                                placeholder="0"
                                class="w-full min-h-[44px] text-[16px] sm:text-sm px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white font-mono font-bold focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] shadow-inner">
                        </div>
                        <div>
                            <label class="font-bold text-slate-700 dark:text-slate-300 block mb-1">Uang Lembur / Tambahan (Rp)</label>
                            <input type="number" id="pay-overtime" value="${o.overtimePay||0}" min="0" step="25000"
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
                            <input type="number" id="pay-advance-deduction" value="${o.advanceDeduction||0}" min="0" step="10000"
                                oninput="window.recalculatePayrollItem()"
                                class="w-full min-h-[44px] text-[16px] sm:text-sm px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white font-mono font-bold focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] shadow-inner">
                            ${o.advanceId?`
                                <span class="text-[10px] text-[var(--color-primary)] mt-0.5 block font-medium">
                                    Terkoneksi #${o.advanceId} (Sisa saldo kasbon: ${f(o.advanceRemainingBefore)})
                                </span>
                            `:'<span class="text-[10px] text-slate-400 mt-0.5 block">Tidak ada kasbon aktif</span>'}
                        </div>
                        <div>
                            <label class="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                                Potongan Selisih Barang Hilang / Stock Opname (Rp)
                            </label>
                            <input type="number" id="pay-lost-item-deduction" value="${o.lostItemDeduction||0}" min="0" step="5000"
                                oninput="window.recalculatePayrollItem()"
                                placeholder="0"
                                class="w-full min-h-[44px] text-[16px] sm:text-sm px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white font-mono font-bold focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] shadow-inner">
                            <span class="text-[10px] text-slate-400 mt-0.5 block">Disesuaikan jabatan &amp; tanggung jawab staf</span>
                        </div>
                    </div>

                    <div>
                        <label class="font-bold text-slate-700 dark:text-slate-300 block mb-1">Keterangan Pemotongan Barang Hilang / Catatan</label>
                        <input type="text" id="pay-lost-item-notes" value="${l(o.lostItemNotes||"")}"
                            placeholder="Contoh: Selisih opname toko 1 sak semen & 2 kran air"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] shadow-inner">
                    </div>
                </div>

                <!-- Bagian 3: Ringkasan Kalkulasi Take Home Pay -->
                <div class="p-4 rounded-2xl border border-emerald-200 dark:border-emerald-800/80 bg-gradient-to-br from-emerald-500/10 via-slate-50 to-white dark:from-emerald-950/40 dark:via-slate-800 dark:to-slate-800 space-y-2">
                    <div class="flex items-center justify-between text-slate-600 dark:text-slate-300 text-xs">
                        <span>Total Penghasilan Bruto:</span>
                        <strong class="font-mono text-emerald-600 dark:text-emerald-400" id="pay-total-earnings-display">
                            ${f(o.totalEarnings)}
                        </strong>
                    </div>
                    <div class="flex items-center justify-between text-slate-600 dark:text-slate-300 text-xs">
                        <span>Total Potongan:</span>
                        <strong class="font-mono text-rose-500 dark:text-rose-400" id="pay-total-deductions-display">
                            -${f(o.totalDeductions)}
                        </strong>
                    </div>
                    <div class="border-t border-slate-200 dark:border-slate-700 pt-2 flex items-center justify-between">
                        <span class="font-black text-slate-900 dark:text-white text-sm">Gaji Bersih (Take Home Pay):</span>
                        <span class="font-black text-lg sm:text-xl font-mono text-emerald-600 dark:text-emerald-400" id="pay-net-salary-display">
                            ${f(o.netSalary)}
                        </span>
                    </div>
                </div>

                <!-- Bagian 4: Pengaturan Pembayaran -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                        <label class="font-bold text-slate-700 dark:text-slate-300 block mb-1">Metode Pembayaran</label>
                        <select id="pay-payment-method"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white font-bold focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] shadow-inner">
                            <option value="transfer" ${o.paymentMethod==="transfer"?"selected":""}>Transfer Bank / Rekening</option>
                            <option value="cash" ${o.paymentMethod==="cash"?"selected":""}>Tunai Langsung (Kas Toko)</option>
                        </select>
                    </div>
                    <div>
                        <label class="font-bold text-slate-700 dark:text-slate-300 block mb-1">Rekening Karyawan</label>
                        <input type="text" id="pay-bank-account" value="${l(o.bankAccount!=="-"?`${o.bankName}: ${o.bankAccount}`:"Tunai / Kas Toko")}"
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
                    <button onclick="window.savePayrollItem('${l(s.employeeId||s.uid)}', '${e}', 'draft')"
                        class="min-h-[44px] px-5 py-2.5 rounded-2xl border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 font-bold text-sm hover:bg-slate-100 active:scale-95 transition-all cursor-pointer">
                        Simpan Draf
                    </button>
                    <button onclick="window.savePayrollItem('${l(s.employeeId||s.uid)}', '${e}', 'paid')"
                        class="min-h-[44px] px-6 py-2.5 rounded-2xl text-white font-black text-sm shadow-md active:scale-95 transition-all cursor-pointer flex items-center gap-2"
                        style="background: #10b981;">
                        <i class="fa-solid fa-check"></i>
                        <span>Bayar &amp; Terbitkan Slip</span>
                    </button>
                </div>
            </div>
        </div>
    </div>`),typeof window.pushModalHistory=="function"&&window.pushModalHistory("payrollItemForm"),setTimeout(()=>{const p=d("payroll-item-modal-box");p&&p.classList.remove("scale-95")},10)},Ce=(t=!1)=>{const e=()=>{const a=d("modal-payroll-item-form");a&&(a.style.opacity="0",setTimeout(()=>a.remove(),200))};typeof window.requestCloseModal=="function"?window.requestCloseModal("payrollItemForm",t,e):e()},yt=()=>{const t=parseFloat(d("pay-base-salary")?.value)||0,e=parseFloat(d("pay-attendance-allowance")?.value)||0,a=parseFloat(d("pay-bonus")?.value)||0,s=parseFloat(d("pay-overtime")?.value)||0,r=parseFloat(d("pay-advance-deduction")?.value)||0,i=parseFloat(d("pay-lost-item-deduction")?.value)||0,n=t+e+a+s,o=r+i,x=Math.max(0,n-o),c=d("pay-total-earnings-display"),p=d("pay-total-deductions-display"),b=d("pay-net-salary-display");c&&(c.textContent=`${f(n)}`),p&&(p.textContent=`-${f(o)}`),b&&(b.textContent=`${f(x)}`)},ht=async(t,e,a="paid")=>{if(!D("menyimpan data payroll karyawan"))return;const r=z().find(h=>h.employeeId===t||h.uid===t);if(!r)return;const i=parseFloat(d("pay-base-salary")?.value)||0,n=parseFloat(d("pay-attendance-allowance")?.value)||0,o=parseFloat(d("pay-bonus")?.value)||0,x=parseFloat(d("pay-overtime")?.value)||0,c=parseFloat(d("pay-advance-deduction")?.value)||0,p=parseFloat(d("pay-lost-item-deduction")?.value)||0,b=d("pay-lost-item-notes")?.value?.trim()||"",k=d("pay-payment-method")?.value||"transfer",w=d("pay-sync-expense")?.checked!==!1,g=i+n+o+x,v=c+p,y=Math.max(0,g-v),A=ue(e,t);L(a==="paid"?"Memproses pembayaran gaji...":"Menyimpan draf payroll...");try{let h=null;if(a==="paid"&&w&&y>0){h="exp_pay_"+Date.now();const I={id:h,date:new Date().toISOString().split("T")[0],category:"gaji",amount:y,desc:`Gaji Karyawan: ${r.name} (${r.position}) - Periode ${F(e)}`,source:k==="cash"?"cash":"bank",recipient:r.name,receiptUrl:"",payrollId:A,createdAt:new Date().toISOString()};Array.isArray(m.expenses)||(m.expenses=[]),m.expenses.unshift(I);try{await $e()}catch{}}if(a==="paid"&&c>0){const j=(Array.isArray(m.salaryAdvances)?m.salaryAdvances:[]).find(E=>(E.employeeId===t||E.employeeUid===r.uid)&&E.status==="active"&&parseFloat(E.remainingAmount)>0);if(j){const E=j.advanceId||j.id;try{await be(E,c,`Pemotongan payroll periode ${F(e)}`)}catch(q){console.warn("[HR Payroll] Gagal memotong saldo kasbon:",q)}}}const M={payrollId:A,period:e,periodLabel:F(e),employeeUid:r.uid||"",employeeId:t,employeeName:r.name,employeeRole:r.role,position:r.position,phone:r.phone||"",status:a,baseSalary:i,attendanceAllowance:n,bonus:o,overtimePay:x,totalEarnings:g,advanceDeduction:c,lostItemDeduction:p,lostItemNotes:b,totalDeductions:v,netSalary:y,paymentMethod:k,bankName:r.bankName||"BCA",bankAccount:r.bankAccount||"-",expenseId:h,notes:`Gaji ${F(e)}`,updatedAt:H.firestore.FieldValue.serverTimestamp(),paidAt:a==="paid"?new Date().toISOString():null};try{await P.collection("freshmart").doc("cms_data").collection("salary_payrolls").doc(A).set(M,{merge:!0})}catch{}Array.isArray(m.payrollRuns)||(m.payrollRuns=[]);const R=m.payrollRuns.findIndex(I=>I.payrollId===A||I.id===A);R>-1?m.payrollRuns[R]={id:A,...M}:m.payrollRuns.unshift({id:A,...M});try{localStorage.setItem("freshmart_payroll_runs",JSON.stringify(m.payrollRuns)),await $e()}catch{}Ce(),$(a==="paid"?`Gaji ${f(y)} untuk ${r.name} berhasil dibayarkan!`:`Draf gaji untuk ${r.name} berhasil disimpan`,"success");const S=d("cashier-panel-payroll");S&&ae(S)}catch(h){console.error("[HR Payroll] Gagal menyimpan payroll:",h),$("Gagal menyimpan: "+h.message,"error")}finally{K()}},wt=(t,e)=>{let a=_.find(i=>(i.payrollId||i.id)===t);if(!a&&e){const i=z().find(n=>n.employeeId===e||n.uid===e);if(i){const n=Array.isArray(m.attendances)?m.attendances:[],o=Array.isArray(m.salaryAdvances)?m.salaryAdvances:[];a=ne(i,O,n,o)}}if(!a){$("Data slip gaji tidak ditemukan","warning");return}oe=a;const s=d("modal-payslip-preview");s&&s.remove();const r=m.store||{name:"TOKO PUTRI",address:"Jl. Raya Toko Putri"};document.body.insertAdjacentHTML("beforeend",`
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
                            #${l(a.payrollId||a.id)} • ${l(a.periodLabel)}
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
                        <h4 class="font-black text-base text-slate-900 dark:text-white tracking-wide uppercase">${l(r.name||"TOKO PUTRI")}</h4>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400">${l(r.address||"Penyedia Bahan Bangunan & Alat Teknik")}</p>
                        <div class="inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider mt-1 border"
                            style="background: rgba(var(--color-primary-rgb), 0.1); border-color: rgba(var(--color-primary-rgb), 0.25); color: var(--color-primary)">
                            SLIP GAJI RESMI • ${l(a.periodLabel)}
                        </div>
                    </div>

                    <!-- Identitas Karyawan -->
                    <div class="grid grid-cols-2 gap-2 text-xs pb-3 border-b border-dashed border-slate-300 dark:border-slate-600">
                        <div>
                            <span class="text-slate-400 block text-[10px]">ID Karyawan:</span>
                            <span class="font-mono font-bold">${l(a.employeeId)}</span>
                        </div>
                        <div>
                            <span class="text-slate-400 block text-[10px]">Nama Karyawan:</span>
                            <span class="font-bold">${l(a.employeeName)}</span>
                        </div>
                        <div>
                            <span class="text-slate-400 block text-[10px]">Jabatan / Divisi:</span>
                            <span class="font-bold">${l(a.position)}</span>
                        </div>
                        <div>
                            <span class="text-slate-400 block text-[10px]">Status Pembayaran:</span>
                            <span class="font-bold ${a.status==="paid"?"text-emerald-600":"text-amber-500"}">
                                ${a.status==="paid"?"Lunas / Dibayar":"Draf"}
                            </span>
                        </div>
                    </div>

                    <!-- Rincian Penghasilan (+) -->
                    <div class="space-y-1.5 pb-3 border-b border-dashed border-slate-300 dark:border-slate-600">
                        <span class="text-[11px] font-black uppercase text-emerald-600 dark:text-emerald-400 tracking-wider block">PENGHASILAN (+)</span>
                        <div class="flex justify-between">
                            <span class="text-slate-600 dark:text-slate-300">Gaji Pokok:</span>
                            <span class="font-mono font-bold">${f(a.baseSalary)}</span>
                        </div>
                        ${a.attendanceAllowance>0?`
                        <div class="flex justify-between">
                            <span class="text-slate-600 dark:text-slate-300">Tunjangan Kehadiran (${a.totalAttendanceDays||0} Hari):</span>
                            <span class="font-mono font-bold text-emerald-600 dark:text-emerald-400">+${f(a.attendanceAllowance)}</span>
                        </div>`:""}
                        ${a.bonus>0?`
                        <div class="flex justify-between">
                            <span class="text-slate-600 dark:text-slate-300">Bonus Kinerja &amp; Insentif:</span>
                            <span class="font-mono font-bold text-emerald-600 dark:text-emerald-400">+${f(a.bonus)}</span>
                        </div>`:""}
                        ${a.overtimePay>0?`
                        <div class="flex justify-between">
                            <span class="text-slate-600 dark:text-slate-300">Uang Lembur:</span>
                            <span class="font-mono font-bold text-emerald-600 dark:text-emerald-400">+${f(a.overtimePay)}</span>
                        </div>`:""}
                        <div class="flex justify-between pt-1 border-t border-slate-200 dark:border-slate-700 font-bold">
                            <span>Total Penghasilan Bruto:</span>
                            <span class="font-mono text-emerald-600 dark:text-emerald-400">${f(a.totalEarnings)}</span>
                        </div>
                    </div>

                    <!-- Rincian Potongan (-) -->
                    <div class="space-y-1.5 pb-3 border-b border-dashed border-slate-300 dark:border-slate-600">
                        <span class="text-[11px] font-black uppercase text-rose-500 tracking-wider block">POTONGAN (-)</span>
                        ${a.advanceDeduction>0?`
                        <div class="flex justify-between">
                            <span class="text-slate-600 dark:text-slate-300">Angsuran Kasbon (#${l(a.advanceId||"KSB")}):</span>
                            <span class="font-mono font-bold text-rose-500">-${f(a.advanceDeduction)}</span>
                        </div>`:""}
                        ${a.lostItemDeduction>0?`
                        <div class="flex justify-between">
                            <span class="text-slate-600 dark:text-slate-300">Potongan Selisih Barang Hilang:</span>
                            <span class="font-mono font-bold text-rose-500">-${f(a.lostItemDeduction)}</span>
                        </div>
                        ${a.lostItemNotes?`<span class="text-[10px] text-slate-400 italic block pl-2">${l(a.lostItemNotes)}</span>`:""}`:""}
                        ${a.totalDeductions===0?'<div class="text-slate-400 text-[11px] italic">Tidak ada potongan pada periode ini</div>':""}
                        <div class="flex justify-between pt-1 border-t border-slate-200 dark:border-slate-700 font-bold">
                            <span>Total Potongan:</span>
                            <span class="font-mono text-rose-500">-${f(a.totalDeductions)}</span>
                        </div>
                    </div>

                    <!-- Total Gaji Bersih (Take Home Pay) -->
                    <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-emerald-300 dark:border-emerald-700 flex items-center justify-between">
                        <div>
                            <span class="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">GAJI BERSIH (TAKE HOME PAY)</span>
                            <span class="text-[10px] text-slate-500">Metode: ${l(a.paymentMethod?.toUpperCase())}</span>
                        </div>
                        <span class="text-lg font-black text-emerald-600 dark:text-emerald-400 font-mono">
                            ${f(a.netSalary)}
                        </span>
                    </div>

                    <!-- Tanda Tangan Ringkas -->
                    <div class="grid grid-cols-2 text-center pt-2 text-[10px] text-slate-400">
                        <div>
                            <span>Penerima,</span>
                            <div class="h-10"></div>
                            <span class="font-bold text-slate-700 dark:text-slate-300">${l(a.employeeName)}</span>
                        </div>
                        <div>
                            <span>Pengelola HR / Owner,</span>
                            <div class="h-10"></div>
                            <span class="font-bold text-slate-700 dark:text-slate-300">${l(r.name||"Owner Toko")}</span>
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
                    <button onclick="window.sendPayslipWhatsApp('${l(a.payrollId||a.id)}')"
                        class="flex-1 sm:flex-initial min-h-[44px] px-4 py-2.5 rounded-2xl text-white font-black text-xs transition-all active:scale-95 cursor-pointer shadow-sm flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700">
                        <i class="fa-brands fa-whatsapp text-sm"></i>
                        <span>Kirim WA</span>
                    </button>
                    <button onclick="window.printPayslipThermal('${l(a.payrollId||a.id)}')"
                        class="flex-1 sm:flex-initial min-h-[44px] px-4 py-2.5 rounded-2xl text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-600 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-700 transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-1.5">
                        <i class="fa-solid fa-receipt text-xs"></i>
                        <span>Struk Thermal</span>
                    </button>
                    <button onclick="window.printPayslipA4('${l(a.payrollId||a.id)}')"
                        class="flex-1 sm:flex-initial min-h-[44px] px-5 py-2.5 rounded-2xl text-white font-black text-xs shadow-md active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-1.5"
                        style="background: var(--color-primary);">
                        <i class="fa-solid fa-print text-xs"></i>
                        <span>Cetak A4 PDF</span>
                    </button>
                </div>
            </div>
        </div>
    </div>`),typeof window.pushModalHistory=="function"&&window.pushModalHistory("payslipPreview"),setTimeout(()=>{const i=d("payslip-preview-modal-box");i&&i.classList.remove("scale-95")},10)},At=(t=!1)=>{const e=()=>{const a=d("modal-payslip-preview");a&&(a.style.opacity="0",setTimeout(()=>a.remove(),200))};typeof window.requestCloseModal=="function"?window.requestCloseModal("payslipPreview",t,e):e()},$t=t=>{const e=oe||_.find(o=>(o.payrollId||o.id)===t);if(!e)return;const a=m.store||{name:"TOKO PUTRI"},s=String(e.phone||"").replace(/[^0-9]/g,""),r=[`*SLIP GAJI RESMI - ${a.name?.toUpperCase()||"TOKO PUTRI"}*`,`Periode: *${e.periodLabel}*`,"----------------------------------------","👤 *KARYAWAN*",`• ID: \`${e.employeeId}\``,`• Nama: *${e.employeeName}*`,`• Jabatan: ${e.position}`,`• Hari Masuk: ${e.totalAttendanceDays||0} Hari`,"----------------------------------------","💰 *PENGHASILAN (+)*",`• Gaji Pokok: ${f(e.baseSalary)}`,e.attendanceAllowance>0?`• Tunjangan Absensi: +${f(e.attendanceAllowance)}`:"",e.bonus>0?`• Bonus / Insentif: +${f(e.bonus)}`:"",e.overtimePay>0?`• Uang Lembur: +${f(e.overtimePay)}`:"",`*Total Bruto: ${f(e.totalEarnings)}*`,"----------------------------------------","✂️ *POTONGAN (-)*",e.advanceDeduction>0?`• Angsuran Kasbon: -${f(e.advanceDeduction)}`:"",e.lostItemDeduction>0?`• Potongan Selisih Barang Hilang: -${f(e.lostItemDeduction)}`:"",e.totalDeductions===0?"• Tidak ada potongan":`*Total Potongan: -${f(e.totalDeductions)}*`,"----------------------------------------","💵 *GAJI BERSIH (TAKE HOME PAY)*",`*${f(e.netSalary)}*`,`Metode: ${e.paymentMethod?.toUpperCase()} (${e.bankName||"BCA"}: ${e.bankAccount||"-"})`,`Status: *${e.status==="paid"?"LUNAS / DIBAYAR":"DRAF"}*`,"----------------------------------------","_Slip gaji ini dibuat otomatis secara sah oleh sistem manajemen Toko Putri._"].filter(Boolean).join(`
`),i=encodeURIComponent(r),n=s?`https://wa.me/${s}?text=${i}`:`https://api.whatsapp.com/send?text=${i}`;window.open(n,"_blank")},St=t=>{const e=oe||_.find(i=>(i.payrollId||i.id)===t);if(!e)return;const a=m.store||{name:"TOKO PUTRI",address:"Jl. Raya Toko Putri"},s=`
    <div style="font-family:'Courier New',Courier,monospace;width:300px;margin:0 auto;padding:10px;font-size:12px;color:#000;">
        <div style="text-align:center;border-bottom:1px dashed #000;padding-bottom:8px;margin-bottom:8px;">
            <div style="font-size:16px;font-weight:bold;">${l(a.name||"TOKO PUTRI")}</div>
            <div style="font-size:10px;">${l(a.address||"")}</div>
            <div style="font-weight:bold;margin-top:4px;">SLIP GAJI KARYAWAN</div>
            <div style="font-size:11px;">${l(e.periodLabel)}</div>
        </div>
        <div style="margin-bottom:6px;font-size:11px;">
            <div>ID: ${l(e.employeeId)}</div>
            <div>Nama: <strong>${l(e.employeeName)}</strong></div>
            <div>Jabatan: ${l(e.position)}</div>
            <div>Hadir: ${e.totalAttendanceDays||0} Hari</div>
        </div>
        <div style="border-top:1px dashed #000;border-bottom:1px dashed #000;padding:6px 0;margin-bottom:6px;">
            <div style="font-weight:bold;margin-bottom:2px;">PENGHASILAN:</div>
            <div style="display:flex;justify-content:space-between;"><span>Gaji Pokok:</span><span>${f(e.baseSalary)}</span></div>
            ${e.attendanceAllowance>0?`<div style="display:flex;justify-content:space-between;"><span>Tunj. Kehadiran:</span><span>+${f(e.attendanceAllowance)}</span></div>`:""}
            ${e.bonus>0?`<div style="display:flex;justify-content:space-between;"><span>Bonus/Insentif:</span><span>+${f(e.bonus)}</span></div>`:""}
            ${e.overtimePay>0?`<div style="display:flex;justify-content:space-between;"><span>Lembur:</span><span>+${f(e.overtimePay)}</span></div>`:""}
            <div style="display:flex;justify-content:space-between;font-weight:bold;margin-top:2px;"><span>Bruto:</span><span>${f(e.totalEarnings)}</span></div>
        </div>
        <div style="border-bottom:1px dashed #000;padding-bottom:6px;margin-bottom:6px;">
            <div style="font-weight:bold;margin-bottom:2px;">POTONGAN:</div>
            ${e.advanceDeduction>0?`<div style="display:flex;justify-content:space-between;"><span>Kasbon:</span><span>-${f(e.advanceDeduction)}</span></div>`:""}
            ${e.lostItemDeduction>0?`<div style="display:flex;justify-content:space-between;"><span>Selisih Barang:</span><span>-${f(e.lostItemDeduction)}</span></div>`:""}
            ${e.totalDeductions===0?"<div>(Tidak ada potongan)</div>":""}
            <div style="display:flex;justify-content:space-between;font-weight:bold;margin-top:2px;"><span>Tot. Potongan:</span><span>-${f(e.totalDeductions)}</span></div>
        </div>
        <div style="font-size:14px;font-weight:bold;display:flex;justify-content:space-between;margin-bottom:10px;">
            <span>TAKE HOME PAY:</span>
            <span>${f(e.netSalary)}</span>
        </div>
        <div style="text-align:center;font-size:10px;border-top:1px dashed #000;padding-top:8px;">
            <div>Metode: ${l(e.paymentMethod?.toUpperCase())} • Status: ${l(e.status?.toUpperCase())}</div>
            <div style="margin-top:4px;">Terima kasih atas kerja keras Anda!</div>
        </div>
    </div>`,r=window.open("","_blank");r&&(r.document.write(`<html><head><title>Slip Gaji - ${e.employeeName}</title></head><body onload="window.print();">${s}</body></html>`),r.document.close())},Pt=t=>{const e=oe||_.find(i=>(i.payrollId||i.id)===t);if(!e)return;const a=m.store||{name:"TOKO PUTRI",address:"Jl. Raya Toko Putri",phone:"081234567890"},s=`
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
                <div class="kop-title">${l(a.name||"TOKO PUTRI")}</div>
                <div class="kop-sub">${l(a.address||"Pusat Bahan Bangunan & Alat Teknik")}</div>
                <div class="kop-sub">WhatsApp: ${l(a.phone||"-")}</div>
            </div>
            <div style="text-align: right;">
                <div class="badge-title">SLIP GAJI KARYAWAN</div>
                <div style="font-size: 11px; color: #64748b; margin-top: 5px;">Periode: <strong>${l(e.periodLabel)}</strong></div>
            </div>
        </div>

        <div class="meta-grid">
            <div>
                <div style="color: #64748b; font-size: 11px;">Nomor Slip:</div>
                <div style="font-weight: 800; font-family: monospace;">${l(e.payrollId||e.id)}</div>
                <div style="color: #64748b; font-size: 11px; margin-top: 6px;">ID Karyawan:</div>
                <div style="font-weight: 700;">${l(e.employeeId)}</div>
            </div>
            <div>
                <div style="color: #64748b; font-size: 11px;">Nama Karyawan:</div>
                <div style="font-weight: 800; font-size: 14px;">${l(e.employeeName)}</div>
                <div style="color: #64748b; font-size: 11px; margin-top: 6px;">Jabatan:</div>
                <div style="font-weight: 700;">${l(e.position)} (${e.totalAttendanceDays||0} Hari Kerja)</div>
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
                    <td class="text-right font-mono">${f(e.baseSalary)}</td>
                </tr>
                ${e.attendanceAllowance>0?`
                <tr>
                    <td>Tunjangan Kehadiran (${e.totalAttendanceDays||0} hari x ${f(e.dailyAllowanceRate)})</td>
                    <td class="text-right font-mono text-emerald-600">+${f(e.attendanceAllowance)}</td>
                </tr>`:""}
                ${e.bonus>0?`
                <tr>
                    <td>Bonus Kinerja &amp; Insentif Toko</td>
                    <td class="text-right font-mono text-emerald-600">+${f(e.bonus)}</td>
                </tr>`:""}
                ${e.overtimePay>0?`
                <tr>
                    <td>Uang Lembur / Tambahan</td>
                    <td class="text-right font-mono text-emerald-600">+${f(e.overtimePay)}</td>
                </tr>`:""}
                <tr style="background: #f8fafc; font-weight: 800;">
                    <td>Subtotal Penghasilan Bruto</td>
                    <td class="text-right font-mono text-emerald-600">${f(e.totalEarnings)}</td>
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
                    <td>Angsuran Kasbon / Pinjaman Karyawan (#${l(e.advanceId||"KSB")})</td>
                    <td class="text-right font-mono text-rose-500">-${f(e.advanceDeduction)}</td>
                </tr>`:""}
                ${e.lostItemDeduction>0?`
                <tr>
                    <td>Potongan Selisih Barang Hilang / Stock Opname ${e.lostItemNotes?`(${l(e.lostItemNotes)})`:""}</td>
                    <td class="text-right font-mono text-rose-500">-${f(e.lostItemDeduction)}</td>
                </tr>`:""}
                ${e.totalDeductions===0?`
                <tr>
                    <td colspan="2" style="color: #94a3b8; font-style: italic;">Tidak ada potongan pada periode penggajian ini.</td>
                </tr>`:""}
                <tr style="background: #f8fafc; font-weight: 800;">
                    <td>Subtotal Pemotongan</td>
                    <td class="text-right font-mono text-rose-500">-${f(e.totalDeductions)}</td>
                </tr>
            </tbody>
        </table>

        <div class="total-box">
            <div>
                <div class="total-label">Gaji Bersih Diterima (Take Home Pay)</div>
                <div style="font-size: 11px; color: #047857; margin-top: 2px;">
                    Metode Pembayaran: <strong>${l(e.paymentMethod?.toUpperCase())}</strong> 
                    ${e.bankAccount&&e.bankAccount!=="-"?`(${l(e.bankName)}: ${l(e.bankAccount)})`:""}
                </div>
            </div>
            <div class="total-val">${f(e.netSalary)}</div>
        </div>

        <div class="sign-grid">
            <div>
                <div>Diterima oleh Karyawan,</div>
                <div class="sign-line"></div>
                <div style="font-weight: 800;">${l(e.employeeName)}</div>
                <div style="font-size: 11px; color: #64748b;">${l(e.position)}</div>
            </div>
            <div>
                <div>Mengetahui,</div>
                <div class="sign-line"></div>
                <div style="font-weight: 800;">Direksi / Pemilik Toko</div>
                <div style="font-size: 11px; color: #64748b;">${l(a.name||"Toko Putri")}</div>
            </div>
        </div>
    </body>
    </html>`,r=window.open("","_blank");r&&(r.document.write(s),r.document.close())};typeof window<"u"&&(window.generatePayrollId=ue,window.loadPayrollRuns=He,window.calculateEmployeePayrollDraft=ne,window.renderPayrollView=ae,window.navigatePayrollPeriod=gt,window.onPayrollPeriodChanged=kt,window.openPayrollItemModal=vt,window.closePayrollItemModal=Ce,window.recalculatePayrollItem=yt,window.savePayrollItem=ht,window.openPayslipPreviewModal=wt,window.closePayslipPreviewModal=At,window.sendPayslipWhatsApp=$t,window.printPayslipThermal=St,window.printPayslipA4=Pt);let T=[],V="all",J="";const Mt=t=>{if(!t)return"";let e=t.replace(/[^0-9]/g,"");return e.startsWith("0")&&(e="62"+e.slice(1)),e},Ee=async()=>{if(!d("admin-content"))return;const e=document.querySelector("#view-admin .scroll-content");e&&(e.scrollTop=0);const a=Z.currentUser;a&&(a.uid,Ae);const s=a&&a.uid!==Ae,r=!a,i=ee(m);let n="",o="";r?(n='<span class="inline-flex items-center gap-1.5 text-amber-600 dark:text-amber-400 font-bold"><i class="fa-solid fa-triangle-exclamation"></i> Status: Pratinjau Lokal</span>',o=`
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
        </div>`):s?(n=`<span class="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-bold"><i class="fa-solid fa-user-shield"></i> Staf (${l(a.email||"Staf")})</span>`,o=`
        <div class="p-3.5 rounded-2xl border border-blue-200 dark:border-blue-800/80 bg-blue-50/80 dark:bg-blue-950/40 text-blue-800 dark:text-blue-200 flex items-center gap-3 shadow-2xs mb-4">
            <div class="w-8 h-8 rounded-xl bg-blue-200/70 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 flex items-center justify-center shrink-0">
                <i class="fa-solid fa-shield-halved text-xs"></i>
            </div>
            <div class="text-[11px] leading-snug">
                <span class="font-bold">Mode Akun Staf (${l(a.email||"Staf")}):</span> Anda dapat melihat direktori staf. Penambahan, pengubahan wewenang hak akses, dan penghapusan staf diproteksi eksklusif untuk Pemilik Toko (Owner).
            </div>
        </div>`):n=`<span class="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold"><i class="fa-solid fa-circle-check"></i> Owner Terverifikasi (${l(a.email||"Master")})</span>`,We("admin-content",`
    <div class="space-y-4 max-w-5xl mx-auto pb-24">
        <!-- Native App Sticky Segmented Control Bar -->
        <div class="sticky top-0 z-20 py-2 sm:py-3 bg-slate-50/95 dark:bg-slate-900/95 backdrop-blur-none border-b border-slate-200/80 dark:border-slate-800/80 mb-2">
            <div class="p-1.5 bg-slate-100/90 dark:bg-slate-800/90 rounded-2xl w-full mx-auto flex items-center gap-1.5 overflow-x-auto no-scrollbar border border-slate-200/90 dark:border-slate-700/80 shadow-xs sm:grid sm:grid-cols-5">
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
            ${o}

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
                ${Tt(i,n)}
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
    </div>`),await W()},Tt=(t,e)=>`
    <div class="p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-[rgba(var(--color-primary-rgb),0.25)] bg-white/95 dark:bg-slate-800/90 shadow-2xs hover:border-[var(--color-primary)] transition-all">
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div class="flex items-start sm:items-center gap-3.5 sm:gap-4 min-w-0">
                <div class="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-xl shrink-0 shadow-md text-white" style="background-color: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.28);">
                    <i class="fa-solid fa-crown text-amber-300"></i>
                </div>
                <div class="min-w-0 flex-1 space-y-1">
                    <div class="flex items-center gap-2 flex-wrap">
                        <h3 class="text-base font-black text-slate-900 dark:text-white truncate">
                            ${l(t.name||"Akun Pemilik Utama (Owner)")}
                        </h3>
                        <span class="inline-flex items-center gap-1 text-[10px] font-black px-2.5 py-0.5 rounded-full border" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25);">
                            <i class="fa-solid fa-shield-halved text-[9px]"></i> Super Admin Terproteksi
                        </span>
                        <span class="inline-flex items-center gap-1 font-mono text-[10px] font-bold px-2 py-0.5 rounded-md border" style="background: rgba(var(--color-primary-rgb), 0.08); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.2);">
                            ${l(t.employeeId||"OWN-001")}
                        </span>
                        <span class="inline-flex items-center gap-1 text-[10px] font-black px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60">
                            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            Owner Aktif
                        </span>
                    </div>
                    <div class="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300 flex-wrap">
                        <span class="font-bold text-slate-800 dark:text-slate-100">
                            <i class="fa-solid fa-user-tie text-[11px] mr-1" style="color: var(--color-primary)"></i>${l(t.position||"Owner / Direktur Utama")}
                        </span>
                        <span class="text-slate-300 dark:text-slate-600">•</span>
                        <span class="font-black text-emerald-600 dark:text-emerald-400">
                            <i class="fa-solid fa-money-bill-wave text-[10px] mr-1"></i>${f(t.baseSalary||1e7)}/bln
                        </span>
                        <span class="text-[11px] text-slate-400 dark:text-slate-500 font-medium">(Gaji Pokok Direksi)</span>
                    </div>
                    <div class="flex items-center gap-3 pt-0.5 text-[11px] text-slate-500 dark:text-slate-400 flex-wrap">
                        ${e}
                        <span class="text-slate-300 dark:text-slate-600">•</span>
                        <span class="inline-flex items-center gap-1 font-bold" style="color: var(--color-primary)">
                            <i class="fa-solid fa-key text-[10px]"></i> 22 Modul Lengkap (Akses Penuh)
                        </span>
                        ${t.bankAccount&&t.bankAccount!=="-"?`
                        <span class="text-slate-300 dark:text-slate-600">•</span>
                        <span class="inline-flex items-center gap-1 text-slate-600 dark:text-slate-300 font-semibold">
                            <i class="fa-solid fa-building-columns text-[10px]"></i> ${l(t.bankName||"BCA")}: ${l(t.bankAccount)}
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
    </div>`,It=t=>{const e=document.querySelector("#view-admin .scroll-content");e&&(e.scrollTop=0);const a=d("tab-btn-cashier-accounts"),s=d("tab-btn-cashier-attendance"),r=d("tab-btn-cashier-advances"),i=d("tab-btn-cashier-payroll"),n=d("tab-btn-cashier-shifts"),o=d("cashier-panel-accounts"),x=d("cashier-panel-attendance"),c=d("cashier-panel-advances"),p=d("cashier-panel-payroll"),b=d("cashier-panel-shifts"),k=(g,v,y)=>{g&&(g.className="min-h-[44px] py-2.5 px-3 sm:px-2.5 rounded-xl text-xs font-black text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 shadow-md shrink-0 sm:shrink min-w-[125px] sm:min-w-0",g.style.background="var(--color-primary)",g.style.boxShadow="0 4px 14px rgba(var(--color-primary-rgb), 0.35)",g.innerHTML=`${v}<span class="truncate">${y}</span>`)},w=(g,v,y)=>{g&&(g.className="min-h-[44px] py-2.5 px-3 sm:px-2.5 rounded-xl text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-700/60 transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 shrink-0 sm:shrink min-w-[125px] sm:min-w-0",g.style.background="transparent",g.style.boxShadow="none",g.innerHTML=`${v}<span class="truncate">${y}</span>`)};w(a,'<i class="fa-solid fa-users-gear"></i>',"Staf &amp; Akses"),w(s,'<i class="fa-solid fa-clipboard-user"></i>',"Absensi Tim"),w(r,'<i class="fa-solid fa-hand-holding-dollar"></i>',"Buku Kasbon"),w(i,'<i class="fa-solid fa-money-check-dollar"></i>',"Gaji &amp; Slip"),w(n,'<i class="fa-solid fa-file-invoice-dollar"></i>',"Shift Kasir"),o&&o.classList.add("hidden"),x&&x.classList.add("hidden"),c&&c.classList.add("hidden"),p&&p.classList.add("hidden"),b&&b.classList.add("hidden"),t==="attendance"?(k(s,'<i class="fa-solid fa-clipboard-user text-white"></i>',"Absensi Tim"),x&&(x.classList.remove("hidden"),te(x))):t==="advances"?(k(r,'<i class="fa-solid fa-hand-holding-dollar text-white"></i>',"Buku Kasbon"),c&&(c.classList.remove("hidden"),Q(c))):t==="payroll"?(k(i,'<i class="fa-solid fa-money-check-dollar text-white"></i>',"Gaji &amp; Slip"),p&&(p.classList.remove("hidden"),ae(p))):t==="shifts"?(k(n,'<i class="fa-solid fa-file-invoice-dollar text-white"></i>',"Shift Kasir"),b&&(b.classList.remove("hidden"),qe(b))):(k(a,'<i class="fa-solid fa-users-gear text-white"></i>',"Staf &amp; Akses"),o&&o.classList.remove("hidden"))},jt=()=>{const t=d("staff-metrics-container");if(!t)return;const e=ee(m),a=T.length,s=T.filter(c=>c.isActive!==!1).length,r=T.filter(c=>(c.role===u.CASHIER||!c.role)&&c.isActive!==!1).length,i=T.filter(c=>c.role===u.ADMIN&&c.isActive!==!1).length,n=T.filter(c=>c.role===u.STAFF&&c.isActive!==!1).length,o=T.filter(c=>c.isActive===!1).length,x=T.reduce((c,p)=>c+(parseFloat(p.baseSalary)||0),0)+(parseFloat(e?.baseSalary)||1e7);t.innerHTML=`
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5">
        <!-- 1. Total Tim & Staf -->
        <div class="p-4 rounded-2xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div class="flex items-center justify-between mb-2">
                <span class="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Total Tim &amp; Staf</span>
                <div class="w-9 h-9 rounded-xl flex items-center justify-center text-xs text-white shadow-xs shrink-0" style="background-color: var(--color-primary);">
                    <i class="fa-solid fa-users"></i>
                </div>
            </div>
            <p class="text-2xl font-black text-slate-800 dark:text-white tracking-tight">${s+1} <span class="text-xs font-semibold text-slate-400 dark:text-slate-500">/ ${a+1} Akun</span></p>
            <p class="text-[10px] font-bold text-slate-400 dark:text-slate-500 mt-0.5">${o>0?`${o} Akun Dinonaktifkan`:"Seluruh Tim Aktif"}</p>
        </div>

        <!-- 2. Kasir POS Aktif -->
        <div class="p-4 rounded-2xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div class="flex items-center justify-between mb-2">
                <span class="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Kasir POS Aktif</span>
                <div class="w-9 h-9 rounded-xl flex items-center justify-center text-xs text-white shadow-xs shrink-0" style="background-color: var(--color-primary);">
                    <i class="fa-solid fa-cash-register"></i>
                </div>
            </div>
            <p class="text-2xl font-black text-slate-800 dark:text-white tracking-tight">${r} <span class="text-xs font-semibold text-slate-400 dark:text-slate-500">Personel</span></p>
            <p class="text-[10px] font-bold text-slate-400 dark:text-slate-500 mt-0.5">Penjualan Kasir Fisik Toko</p>
        </div>

        <!-- 3. Admin & Logistik -->
        <div class="p-4 rounded-2xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div class="flex items-center justify-between mb-2">
                <span class="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Admin &amp; Logistik</span>
                <div class="w-9 h-9 rounded-xl flex items-center justify-center text-xs text-white shadow-xs shrink-0" style="background-color: var(--color-primary);">
                    <i class="fa-solid fa-shield-halved"></i>
                </div>
            </div>
            <p class="text-2xl font-black text-slate-800 dark:text-white tracking-tight">${i+n} <span class="text-xs font-semibold text-slate-400 dark:text-slate-500">Personel</span></p>
            <p class="text-[10px] font-bold text-slate-400 dark:text-slate-500 mt-0.5">${i} Admin • ${n} Staf Gudang</p>
        </div>

        <!-- 4. Beban Gaji Bulanan -->
        <div class="p-4 rounded-2xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div class="flex items-center justify-between mb-2">
                <span class="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Beban Gaji Pokok</span>
                <div class="w-9 h-9 rounded-xl flex items-center justify-center text-xs text-white shadow-xs shrink-0" style="background-color: var(--color-primary);">
                    <i class="fa-solid fa-money-bill-wave"></i>
                </div>
            </div>
            <p class="text-xl sm:text-2xl font-black text-slate-800 dark:text-white tracking-tight">${f(x)}</p>
            <p class="text-[10px] font-bold text-slate-400 dark:text-slate-500 mt-0.5">Total Gaji Tim &amp; Direksi /bln</p>
        </div>
    </div>`},Ne=()=>{const t=d("staff-role-filters-bar");if(!t)return;const e=T.length,a=T.filter(o=>o.role===u.ADMIN||o.role===u.OWNER||o.role==="admin"||o.role==="owner").length,s=T.filter(o=>o.role===u.CASHIER||o.role==="cashier"||!o.role).length,r=T.filter(o=>o.role===u.STAFF||o.role==="staff").length,i=T.filter(o=>o.isActive===!1).length,n=[{key:"all",label:"Semua Staf",icon:"fa-users",count:e},{key:"cashier",label:"Kasir POS",icon:"fa-cash-register",count:s},{key:"admin",label:"Admin Toko",icon:"fa-shield-halved",count:a},{key:"staff",label:"Staf Gudang",icon:"fa-user-gear",count:r}];i>0&&n.push({key:"inactive",label:"Nonaktif",icon:"fa-user-slash",count:i}),t.innerHTML=n.map(o=>{const x=V===o.key;return`
        <button onclick="window.filterStaffRole('${o.key}')" id="staff-filter-${o.key}"
            class="staff-filter-btn min-h-[38px] px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-2xs flex items-center gap-1.5 active:scale-95 shrink-0 border ${x?"text-white border-transparent":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200/90 dark:border-slate-700/80 hover:border-slate-300 dark:hover:border-slate-600"}"
            style="${x?"background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);":""}">
            <i class="fa-solid ${o.icon} text-[10px]"></i>
            <span>${o.label}</span>
            <span class="ml-0.5 px-1.5 py-0.2 rounded-md text-[10px] font-mono ${x?"bg-white/20 text-white":"bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400"}">${o.count}</span>
        </button>`}).join("")},Dt=t=>{V=t,Ne(),ge()},Oe=t=>{J=(t||"").toLowerCase().trim();const e=d("btn-clear-staff-search");e&&(J?e.classList.remove("hidden"):e.classList.add("hidden")),ge()},Rt=()=>{const t=d("staff-search-input");t&&(t.value="",t.focus()),Oe("")},Ht=t=>{if(t.role===u.OWNER)return X.length;if(t.permissions)return Object.values(t.permissions).filter(Boolean).length;const e=U[t.role]||U[u.CASHIER];return Object.values(e).filter(Boolean).length},ge=()=>{const t=d("cashier-list-container");if(!t)return;let e=T;if(V==="admin"?e=e.filter(s=>s.role===u.ADMIN||s.role===u.OWNER||s.role==="admin"||s.role==="owner"):V==="cashier"?e=e.filter(s=>s.role===u.CASHIER||s.role==="cashier"||!s.role):V==="staff"?e=e.filter(s=>s.role===u.STAFF||s.role==="staff"):V==="inactive"&&(e=e.filter(s=>s.isActive===!1)),J){const s=J;e=e.filter(r=>{const i=(r.name||"").toLowerCase(),n=(r.email||"").toLowerCase(),o=(r.employeeId||"").toLowerCase(),x=(r.phone||"").toLowerCase(),c=(r.position||"").toLowerCase();return i.includes(s)||n.includes(s)||o.includes(s)||x.includes(s)||c.includes(s)})}if(e.length===0){t.innerHTML=`
        <div class="flex flex-col items-center justify-center py-16 text-slate-400 dark:text-slate-600 bg-white/95 dark:bg-slate-800/60 rounded-3xl border border-slate-200/90 dark:border-slate-800 p-8 text-center shadow-2xs">
            <div class="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-3 shadow-xs" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary);">
                <i class="fa-solid fa-user-slash"></i>
            </div>
            <h4 class="font-black text-sm text-slate-800 dark:text-slate-200">Tidak ada staf yang cocok</h4>
            <p class="text-xs mt-1 text-slate-400 dark:text-slate-500 max-w-sm">
                ${J?`Tidak ditemukan staf dengan kata kunci "${l(J)}". Silakan ubah filter atau kata kunci.`:"Belum ada akun staf pada kategori ini."}
            </p>
            <div class="mt-4 flex items-center gap-2">
                ${J?`
                <button onclick="window.clearStaffSearch()" class="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-xs font-bold text-slate-700 dark:text-slate-200 transition-all cursor-pointer">
                    Reset Pencarian
                </button>`:""}
                <button onclick="window.openAddStaffModal()" class="px-4 py-2 rounded-xl text-white text-xs font-black shadow-md transition-all cursor-pointer active:scale-95" style="background: var(--color-primary)">
                    <i class="fa-solid fa-plus mr-1"></i> Tambah Staf Baru
                </button>
            </div>
        </div>`;return}const a=e.map((s,r)=>{const i=s.uid,n=s.isActive!==!1,o=s.createdAt?.toDate?s.createdAt.toDate().toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):s.hireDate||"-",x=(s.name||"Staf").trim().split(/\s+/).slice(0,2).map(y=>y[0]).join("").toUpperCase()||"ST",c=s.role||u.CASHIER,p=Ht(s),b=s.employeeId||`EMP-${String(r+1).padStart(3,"0")}`,k=s.position||(c===u.CASHIER?"Kasir POS":c===u.ADMIN?"Admin Operasional":"Staf Gudang & Logistik"),w=parseFloat(s.baseSalary)||0,g=parseFloat(s.dailyAllowance)||0;let v="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25);";return c===u.ADMIN?v="background: rgba(37, 99, 235, 0.12); color: #2563eb; border-color: rgba(37, 99, 235, 0.25);":c===u.STAFF&&(v="background: rgba(217, 119, 6, 0.12); color: #d97706; border-color: rgba(217, 119, 6, 0.25);"),`
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 sm:p-5 bg-white/95 dark:bg-slate-800/95 rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:border-[rgba(var(--color-primary-rgb),0.3)] transition-all">
            <div class="flex items-start sm:items-center gap-3.5 min-w-0 flex-1">
                <div class="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm shrink-0 shadow-2xs border" style="${v}">
                    ${x}
                </div>
                <div class="min-w-0 flex-1 space-y-1">
                    <div class="flex items-center gap-2 flex-wrap">
                        <p class="text-sm sm:text-base font-black text-slate-900 dark:text-white truncate">${l(s.name||"Staf")}</p>
                        ${Je(c)}
                        <span class="inline-flex items-center gap-1 font-mono text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700/80 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600">
                            ${l(b)}
                        </span>
                        <span class="inline-flex items-center gap-1.5 text-[10px] font-black px-2.5 py-0.5 rounded-full ${n?"bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60":"bg-slate-100 dark:bg-slate-700 text-slate-500 border border-slate-200 dark:border-slate-600"}">
                            <span class="w-1.5 h-1.5 rounded-full ${n?"bg-emerald-500 animate-pulse":"bg-slate-400"}"></span>
                            ${n?"Aktif":"Nonaktif"}
                        </span>
                    </div>
                    <div class="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300 flex-wrap">
                        <span class="font-bold text-slate-800 dark:text-slate-100">
                            <i class="fa-solid fa-user-tag text-[10px] mr-1" style="color: var(--color-primary)"></i>${l(k)}
                        </span>
                        <span class="text-slate-300 dark:text-slate-600">•</span>
                        <span class="font-black text-emerald-600 dark:text-emerald-400">
                            <i class="fa-solid fa-money-bill-wave text-[10px] mr-1"></i>${f(w)}/bln
                        </span>
                        ${g>0?`<span class="text-[11px] text-slate-500 dark:text-slate-400 font-medium">(+${f(g)}/hr)</span>`:""}
                    </div>
                    <div class="flex items-center gap-3 pt-0.5 text-[11px] text-slate-500 dark:text-slate-400 flex-wrap">
                        <span class="inline-flex items-center gap-1 font-medium"><i class="fa-solid fa-envelope text-[10px] text-slate-400"></i> ${l(s.email||"-")}</span>
                        ${s.phone?`
                        <span class="text-slate-300 dark:text-slate-600">•</span>
                        <a href="https://wa.me/${Mt(s.phone)}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 font-bold text-emerald-600 dark:text-emerald-400 hover:underline" title="Kirim Pesan WhatsApp">
                            <i class="fa-brands fa-whatsapp text-[12px]"></i> ${l(s.phone)}
                        </a>`:""}
                        <span class="text-slate-300 dark:text-slate-600">•</span>
                        <span class="inline-flex items-center gap-1 font-bold" style="color: var(--color-primary)">
                            <i class="fa-solid fa-key text-[9px]"></i> ${p} Modul Diizinkan
                        </span>
                        ${s.bankAccount&&s.bankAccount!=="-"?`
                        <span class="text-slate-300 dark:text-slate-600">•</span>
                        <span class="inline-flex items-center gap-1 text-slate-500 dark:text-slate-400">
                            <i class="fa-solid fa-building-columns text-[10px]"></i> ${l(s.bankName)}: ${l(s.bankAccount)}
                        </span>`:""}
                        <span class="text-slate-300 dark:text-slate-600">•</span>
                        <span class="inline-flex items-center gap-1 text-slate-400 dark:text-slate-500"><i class="fa-solid fa-calendar-days text-[10px]"></i> Masuk: ${l(o)}</span>
                    </div>
                </div>
            </div>
            <!-- Tombol Aksi Hak Akses, Status & Edit -->
            <div class="flex items-center gap-2 shrink-0 self-end sm:self-center border-t sm:border-t-0 pt-2.5 sm:pt-0 border-slate-100 dark:border-slate-700/60 w-full sm:w-auto justify-end">
                <button onclick="window.openPermissionsModal('${l(i)}')"
                    title="Atur Hak Akses Modul"
                    class="flex-1 sm:flex-initial h-10 px-3.5 rounded-xl text-xs font-bold transition-all active:scale-95 cursor-pointer shadow-2xs flex items-center justify-center gap-1.5 border"
                    style="background: rgba(var(--color-primary-rgb), 0.08); border-color: rgba(var(--color-primary-rgb), 0.25); color: var(--color-primary)">
                    <i class="fa-solid fa-sliders text-[10px]"></i>
                    <span>Hak Akses</span>
                </button>
                <button onclick="window.toggleStaffActive('${l(i)}', ${!n})"
                    title="${n?"Nonaktifkan Akun Staf":"Aktifkan Akun Staf"}"
                    class="w-10 h-10 rounded-xl flex items-center justify-center text-xs transition-all active:scale-95 cursor-pointer shadow-2xs border shrink-0 ${n?"bg-slate-50 hover:bg-amber-50 dark:bg-slate-700/80 dark:hover:bg-amber-950/40 text-slate-600 dark:text-slate-300 hover:text-amber-600 border-slate-200/80 dark:border-slate-700 hover:border-amber-300":"bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 border-emerald-200 dark:border-emerald-800"}">
                    <i class="fa-solid ${n?"fa-ban":"fa-circle-check"}"></i>
                </button>
                <button onclick="window.openEditStaffModal('${l(i)}', '${l(s.name||"")}', '${l(s.email||"")}', '${l(c)}')"
                    title="Edit Profil Staf &amp; HR"
                    class="w-10 h-10 rounded-xl flex items-center justify-center text-xs bg-slate-50 hover:bg-slate-100 dark:bg-slate-700/80 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 hover:text-[var(--color-primary)] border border-slate-200/80 dark:border-slate-700 transition-all active:scale-95 cursor-pointer shadow-2xs shrink-0">
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button onclick="window.deleteStaffAccount('${l(i)}', '${l(s.name||"Staf")}')"
                    title="Hapus Akun Staf"
                    class="w-10 h-10 rounded-xl flex items-center justify-center text-xs bg-slate-50 hover:bg-rose-50 dark:bg-slate-700/80 dark:hover:bg-rose-950/40 text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 border border-slate-200/80 dark:border-slate-700 hover:border-rose-200 transition-all active:scale-95 cursor-pointer shadow-2xs shrink-0">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        </div>`}).join("");t.innerHTML=`
    <div class="space-y-3">${a}</div>
    <div class="flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500 mt-4 px-1">
        <span>Menampilkan <strong>${e.length}</strong> dari <strong>${T.length}</strong> staf</span>
        <button onclick="window.loadStaffList()" class="inline-flex items-center gap-1.5 hover:text-slate-600 dark:hover:text-slate-300 cursor-pointer">
            <i class="fa-solid fa-arrows-rotate text-[10px]"></i> Segarkan Daftar
        </button>
    </div>`},W=async()=>{const t=d("cashier-list-container");if(t)try{let e;try{e=await P.collection("freshmart").doc("cms_data").collection("cashier_accounts").orderBy("createdAt","desc").get()}catch{e=await P.collection("freshmart").doc("cms_data").collection("cashier_accounts").get()}T=e.docs.map((s,r)=>{const i=s.data()||{};return{uid:s.id,...se({uid:s.id,...i},r)}});const a=T.some(s=>s.isActive!==!1&&s.role===u.CASHIER);try{localStorage.setItem("pos_has_cashier",a?"true":"false"),await P.collection("freshmart").doc("cms_data").set({hasCashier:a},{merge:!0})}catch{}typeof window.updatePOSHeaderIcon=="function"&&window.updatePOSHeaderIcon();try{const s=await P.collection("freshmart").doc("cms_data").get();s.exists&&s.data()?.ownerEmployee&&(m.ownerEmployee=s.data().ownerEmployee)}catch{}m.employees=T.map((s,r)=>se(s,r)),jt(),Ne(),ge()}catch(e){console.error("[StaffAdmin] Gagal memuat daftar staf:",e),t.innerHTML=`
        <div class="text-center py-10 p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 flex flex-col items-center justify-center">
            <div class="w-12 h-12 rounded-2xl bg-rose-50 dark:bg-rose-950/40 text-rose-500 flex items-center justify-center text-2xl mb-2.5 shadow-2xs">
                <i class="fa-solid fa-triangle-exclamation"></i>
            </div>
            <p class="text-xs font-bold text-slate-700 dark:text-slate-300">Gagal memuat data staf</p>
            <p class="text-[11px] text-slate-400 mt-0.5">${l(e.message||"Periksa koneksi internet atau login admin")}</p>
            <button onclick="window.loadStaffList()" class="mt-3 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 transition-all cursor-pointer inline-flex items-center gap-1.5 active:scale-95">
                <i class="fa-solid fa-arrows-rotate text-[10px]"></i>
                <span>Coba Lagi</span>
            </button>
        </div>`}},Le=()=>{if(!D("mendaftarkan staf baru"))return;const t=xe(T,"EMP"),e=(a,s,r)=>{const i=X.filter(n=>n.group===a);return`
        <div class="space-y-2">
            <p class="text-[11px] font-black uppercase tracking-wider text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                <i class="fa-solid ${r}" style="color: var(--color-primary)"></i>
                <span>${s}</span>
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                ${i.map(n=>`
                <label class="flex items-start gap-2.5 p-3 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 hover:border-[rgba(var(--color-primary-rgb),0.3)] transition-all cursor-pointer text-left">
                    <input type="checkbox" name="staff_perm" value="${n.key}" class="mt-0.5 rounded border-slate-300 text-[var(--color-primary)] focus:ring-[var(--color-primary)]/30 w-4 h-4 cursor-pointer" style="accent-color: var(--color-primary)">
                    <div class="min-w-0 flex-1">
                        <p class="text-xs font-bold text-slate-800 dark:text-white flex items-center gap-1.5">
                            <i class="fa-solid ${n.icon} text-[10px] text-slate-400"></i>
                            <span>${n.label}</span>
                        </p>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">${n.desc}</p>
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
                        ${de.map(a=>`<option value="${l(a.label||a)}"></option>`).join("")}
                    </datalist>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div>
                            <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">ID Karyawan</label>
                            <input id="new-staff-empid" type="text" value="${l(t)}" placeholder="EMP-001"
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
                                ${ce.map(a=>`<option value="${a.key}">${l(a.label)}</option>`).join("")}
                            </select>
                        </div>
                        <div>
                            <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Metode Pencairan Gaji</label>
                            <select id="new-staff-payment-method" class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-3 py-2 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold focus:outline-none focus:border-[var(--color-primary)] shadow-2xs">
                                ${pe.map(a=>`<option value="${a.key}">${l(a.label)}</option>`).join("")}
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
    </div>`),window.applyNewStaffPreset(u.CASHIER),typeof window.pushModalHistory=="function"&&window.pushModalHistory("addStaff"),setTimeout(()=>{const a=d("add-staff-modal-box");a&&a.classList.remove("scale-95");const s=d("new-staff-name");s&&s.focus()},10)},ke=(t=!1)=>{const e=()=>{const a=d("add-staff-modal");if(a){const s=d("new-staff-name");s&&(s.value="");const r=d("new-staff-email");r&&(r.value="");const i=d("new-staff-pass");i&&(i.value=""),a.style.opacity="0",setTimeout(()=>a.remove(),200)}};typeof window.requestCloseModal=="function"?window.requestCloseModal("addStaff",t,e):e()},Ct=t=>{const e=U[t]||U[u.CASHIER];document.querySelectorAll('#add-staff-modal input[name="staff_perm"]').forEach(r=>{r.checked=!!e[r.value]}),document.querySelectorAll('#add-staff-modal input[name="new_staff_role"]').forEach(r=>{const i=r.closest("label");i&&(r.value===t?i.className="flex flex-col items-center justify-center p-3 rounded-2xl border-2 border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.08)] text-slate-900 dark:text-white cursor-pointer shadow-xs transition-all text-center":i.className="flex flex-col items-center justify-center p-3 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 cursor-pointer hover:border-slate-300 transition-all text-center")});const a=d("new-staff-position"),s=de.map(r=>r.label||r);a&&(!a.value||s.includes(a.value))&&(t===u.STAFF?a.value="Staf Gudang & Penataan Rak":t===u.ADMIN?a.value="Admin Operasional & Inventori":t==="manager"?a.value="Kepala Toko / Manager":a.value="Kasir POS")},Et=t=>{document.querySelectorAll('#add-staff-modal input[name="staff_perm"]').forEach(e=>{e.checked=!!t})},Ke=async()=>{if(!D("mendaftarkan staf baru"))return;const t=d("new-staff-name")?.value?.trim()||"",e=d("new-staff-email")?.value?.trim()||"",a=d("new-staff-pass")?.value||"",s=document.querySelector('#add-staff-modal input[name="new_staff_role"]:checked'),r=s?s.value:u.CASHIER,i=r==="manager"?u.ADMIN:r,n=d("new-staff-empid")?.value?.trim()||xe(T,"EMP"),o=d("new-staff-position")?.value?.trim()||(i===u.STAFF?"Staf Gudang & Logistik":i===u.ADMIN?"Admin Operasional":"Kasir POS"),x=d("new-staff-phone")?.value?.trim()||"",c=Math.max(0,parseFloat(d("new-staff-salary")?.value)||0),p=Math.max(0,parseFloat(d("new-staff-allowance")?.value)||0),b=d("new-staff-status")?.value||"permanent",k=d("new-staff-payment-method")?.value||"cash",w=d("new-staff-bank-account")?.value?.trim()||"-",g=d("new-staff-bank-holder")?.value?.trim()||t,v=k==="cash"?"Tunai Kas Laci Toko":k.toUpperCase()||"Bank",y=d("add-staff-error"),A=d("save-staff-btn"),h=S=>{y&&(y.textContent=S,y.classList.remove("hidden"))};if((()=>{y&&y.classList.add("hidden")})(),!t){h("Nama staf wajib diisi.");return}if(!e||!e.includes("@")){h("Email login tidak valid.");return}if(a.length<6){h("Password minimal 6 karakter.");return}const R={};X.forEach(S=>{const I=document.querySelector(`#add-staff-modal input[name="staff_perm"][value="${S.key}"]`);R[S.key]=I?I.checked:!1}),A&&(A.disabled=!0,A.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i>Mendaftarkan ke Firebase...'),L("Mendaftarkan akun staf...");try{const I=(H.apps.find(we=>we.name==="pos-cashier-creator")||H.initializeApp(window.FIREBASE_CONFIG||H.app().options,"pos-cashier-creator")).auth(),E=(await I.createUserWithEmailAndPassword(e,a)).user?.uid;if(!E)throw new Error("UID tidak diterima dari Firebase");if(await I.signOut(),await P.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(E).set({uid:E,employeeId:n,name:t,email:e,phone:x,role:i,position:o,baseSalary:c,dailyAllowance:p,employmentStatus:b,paymentMethod:k,bankName:v,bankAccount:w,bankHolder:g,permissions:R,isActive:!0,createdAt:H.firestore.FieldValue.serverTimestamp(),createdBy:Z.currentUser?.uid||"owner"}),i===u.CASHIER)try{localStorage.setItem("pos_has_cashier","true"),await P.collection("freshmart").doc("cms_data").set({hasCashier:!0},{merge:!0})}catch{}const q=d("new-staff-pass");q&&(q.value="");const ye=d("new-staff-name");ye&&(ye.value="");const he=d("new-staff-email");he&&(he.value=""),ke(),$(`Akun "${t}" (${i.toUpperCase()}) berhasil didaftarkan!`,"success"),await W(),typeof window.updatePOSHeaderIcon=="function"&&window.updatePOSHeaderIcon()}catch(S){console.error("[StaffAdmin] Gagal membuat akun staf:",S);const I=S.code==="permission-denied"||S.message&&S.message.toLowerCase().includes("permission"),j=S.code||"";h(I?"Akses Ditolak Firebase: Hanya akun Owner yang berwenang menambahkan staf ke Firestore.":j==="auth/email-already-in-use"?"Email sudah digunakan oleh akun lain di Firebase.":j==="auth/invalid-email"?"Format email tidak valid.":j==="auth/weak-password"?"Password terlalu lemah (min. 6 karakter).":"Gagal mendaftarkan: "+(S.message||"Terjadi kesalahan sistem")),A&&(A.disabled=!1,A.innerHTML='<i class="fa-solid fa-floppy-disk mr-2"></i>Simpan &amp; Daftarkan Staf')}finally{K()}},Nt=t=>{if(!D("mengatur hak akses staf"))return;const e=T.find(r=>r.uid===t);if(!e){$("Data staf tidak ditemukan!");return}const a=e.permissions||U[e.role]||U[u.CASHIER],s=(r,i,n)=>{const o=X.filter(x=>x.group===r);return`
        <div class="space-y-2">
            <p class="text-[11px] font-black uppercase tracking-wider text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                <i class="fa-solid ${n}" style="color: var(--color-primary)"></i>
                <span>${i}</span>
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                ${o.map(x=>{const c=a[x.key]===!0;return`
                    <label class="flex items-start gap-2.5 p-3 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 hover:border-[rgba(var(--color-primary-rgb),0.3)] transition-all cursor-pointer text-left">
                        <input type="checkbox" name="edit_staff_perm" value="${x.key}" ${c?"checked":""} class="mt-0.5 rounded border-slate-300 text-[var(--color-primary)] focus:ring-[var(--color-primary)]/30 w-4 h-4 cursor-pointer" style="accent-color: var(--color-primary)">
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
                        <h3 class="font-black text-sm text-slate-900 dark:text-white">Atur Hak Akses: ${l(e.name||"Staf")}</h3>
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
                <button onclick="window.saveStaffPermissions('${l(t)}')" id="save-perms-btn"
                    class="flex-[2] min-h-[48px] py-3.5 rounded-2xl text-white font-black text-sm shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    style="background: var(--color-primary)">
                    <i class="fa-solid fa-floppy-disk"></i> Simpan Hak Akses
                </button>
            </div>
        </div>
    </div>`),typeof window.pushModalHistory=="function"&&window.pushModalHistory("permissions"),setTimeout(()=>{const r=d("permissions-modal-box");r&&r.classList.remove("scale-95")},10)},Be=(t=!1)=>{const e=()=>{const a=d("permissions-modal");a&&(a.style.opacity="0",setTimeout(()=>a.remove(),200))};typeof window.requestCloseModal=="function"?window.requestCloseModal("permissions",t,e):e()},Ot=t=>{const e=U[t]||U[u.CASHIER];document.querySelectorAll('#permissions-modal input[name="edit_staff_perm"]').forEach(a=>{a.checked=!!e[a.value]})},Lt=t=>{document.querySelectorAll('#permissions-modal input[name="edit_staff_perm"]').forEach(e=>{e.checked=!!t})},Kt=async t=>{if(!D("mengubah hak akses staf"))return;const e=d("save-perms-btn");e&&(e.disabled=!0,e.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i>Menyimpan...'),L("Memperbarui hak akses...");try{const a={};X.forEach(r=>{const i=document.querySelector(`#permissions-modal input[name="edit_staff_perm"][value="${r.key}"]`);a[r.key]=i?i.checked:!1});let s=u.CASHIER;(a.orders||a.products||a.suppliers||a.purchases)&&(s=u.ADMIN),await P.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(t).set({permissions:a,role:s,updatedAt:H.firestore.FieldValue.serverTimestamp()},{merge:!0}),Be(),$("Hak akses berhasil diperbarui!","success"),await W()}catch(a){console.error("[StaffAdmin] Gagal menyimpan hak akses:",a),a.code==="permission-denied"||a.message&&a.message.toLowerCase().includes("permission")?$("Izin Ditolak Firebase: Pastikan login dengan Akun Owner dan aturan firestore.rules sudah dipublikasikan di Firebase Console.","error"):$("Gagal memperbarui hak akses: "+(a.message||"Terjadi kesalahan sistem"),"error"),e&&(e.disabled=!1,e.innerHTML='<i class="fa-solid fa-floppy-disk mr-2"></i>Simpan Hak Akses')}finally{K()}},_e=(t,e,a,s)=>{if(!D("mengubah profil staf"))return;const r=T.find(h=>h.uid===t)||{},i=e||r.name||"",n=a||r.email||"",o=s||r.role||u.CASHIER,x=r.employeeId||"EMP-001",c=r.position||(o===u.CASHIER?"Kasir POS":o===u.ADMIN?"Admin Operasional":"Staf Gudang & Logistik"),p=r.phone||"",b=r.baseSalary||0,k=r.dailyAllowance||0,w=r.employmentStatus||"permanent",g=r.paymentMethod||"cash",v=r.bankName||"BCA",y=r.bankAccount&&r.bankAccount!=="-"?r.bankAccount:"",A=r.bankHolder||i;document.body.insertAdjacentHTML("beforeend",`
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
                            <span class="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">${l(x)}</span>
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
                    ${de.map(h=>`<option value="${l(h.label||h)}"></option>`).join("")}
                </datalist>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1.5">Nama Staf <span class="text-rose-500">*</span></label>
                        <input id="edit-staff-name" type="text" value="${l(i)}"
                            autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.2)] shadow-2xs">
                    </div>
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1.5">Role Pokok Sistem</label>
                        <select id="edit-staff-role" class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold focus:outline-none focus:border-[var(--color-primary)] shadow-2xs">
                            <option value="${u.CASHIER}" ${o===u.CASHIER?"selected":""}>Kasir POS (Penjualan)</option>
                            <option value="${u.ADMIN}" ${o===u.ADMIN?"selected":""}>Admin Toko (Operasional CMS)</option>
                            <option value="${u.STAFF}" ${o===u.STAFF?"selected":""}>Staf Gudang &amp; Logistik</option>
                            <option value="${u.OWNER}" ${o===u.OWNER?"selected":""}>Co-Owner / Wakil Owner</option>
                        </select>
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">ID Karyawan</label>
                        <input id="edit-staff-empid" type="text" value="${l(x)}"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-3.5 py-2 bg-slate-50 dark:bg-slate-800/70 font-mono font-bold text-slate-800 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)]">
                    </div>
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Jabatan Resmi</label>
                        <input id="edit-staff-position" list="edit-staff-positions-datalist" type="text" value="${l(c)}"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-3.5 py-2 bg-white dark:bg-slate-800 font-bold text-slate-900 dark:text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.2)] shadow-2xs">
                    </div>
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">No. WhatsApp / HP</label>
                        <input id="edit-staff-phone" type="tel" value="${l(p)}" placeholder="081234567890"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-3.5 py-2 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.2)] shadow-2xs">
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Gaji Pokok Bulanan (Rp)</label>
                        <input id="edit-staff-salary" type="number" min="0" step="50000" value="${b}"
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
                            ${ce.map(h=>`<option value="${h.key}" ${w===h.key?"selected":""}>${l(h.label)}</option>`).join("")}
                        </select>
                    </div>
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Metode Bayar Gaji</label>
                        <select id="edit-staff-payment-method" class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-3 py-2 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold focus:outline-none focus:border-[var(--color-primary)] shadow-2xs">
                            ${pe.map(h=>`<option value="${h.key}" ${g===h.key?"selected":""}>${l(h.label)}</option>`).join("")}
                        </select>
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Bank</label>
                        <input id="edit-staff-bank-name" type="text" value="${l(v)}" placeholder="BCA / BRI"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-3.5 py-2 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)] shadow-2xs">
                    </div>
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">No. Rekening</label>
                        <input id="edit-staff-bank-account" type="text" value="${l(y)}" placeholder="1234567890"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-3.5 py-2 bg-white dark:bg-slate-800 font-mono text-slate-800 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)] shadow-2xs">
                    </div>
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Atas Nama Rekening</label>
                        <input id="edit-staff-bank-holder" type="text" value="${l(A)}" placeholder="Nama Pemilik"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-3.5 py-2 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)] shadow-2xs">
                    </div>
                </div>

                <div>
                    <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Email Login (Permanen)</label>
                    <input type="email" value="${l(n)}" disabled
                        class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 text-slate-400 cursor-not-allowed">
                </div>
                <div id="edit-staff-error" class="hidden text-xs text-rose-600 font-semibold p-2.5 bg-rose-50 dark:bg-rose-900/20 rounded-2xl border border-rose-200 dark:border-rose-800"></div>
            </div>

            <div class="p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800 flex gap-3 shrink-0 bg-slate-50/50 dark:bg-slate-900/50 pb-[max(1rem,env(safe-area-inset-bottom))]">
                <button onclick="window.closeEditStaffModal()"
                    class="flex-1 min-h-[48px] py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95 transition-all cursor-pointer">
                    Batal
                </button>
                <button onclick="window.updateStaffProfile('${l(t)}')" id="update-staff-btn"
                    class="flex-[2] min-h-[48px] py-3.5 rounded-2xl text-white font-black text-sm shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    style="background: var(--color-primary)">
                    <i class="fa-solid fa-floppy-disk"></i> Simpan Profil &amp; HR
                </button>
            </div>
        </div>
    </div>`),typeof window.pushModalHistory=="function"&&window.pushModalHistory("editStaff"),setTimeout(()=>{const h=d("edit-staff-modal-box");h&&h.classList.remove("scale-95")},10)},ve=(t=!1)=>{const e=()=>{const a=d("edit-staff-modal");a&&(a.style.opacity="0",setTimeout(()=>a.remove(),200))};typeof window.requestCloseModal=="function"?window.requestCloseModal("editStaff",t,e):e()},Bt=async t=>{if(!D("mengubah profil staf"))return;const e=d("edit-staff-name")?.value?.trim()||"",a=d("edit-staff-role")?.value||u.CASHIER,s=d("edit-staff-empid")?.value?.trim()||"EMP-001",r=d("edit-staff-position")?.value?.trim()||"Staf Toko",i=d("edit-staff-phone")?.value?.trim()||"",n=Math.max(0,parseFloat(d("edit-staff-salary")?.value)||0),o=Math.max(0,parseFloat(d("edit-staff-allowance")?.value)||0),x=d("edit-staff-status")?.value||"permanent",c=d("edit-staff-payment-method")?.value||"cash",p=d("edit-staff-bank-name")?.value?.trim()||(c==="cash"?"Tunai Kas Laci Toko":c.toUpperCase()||"Bank"),b=d("edit-staff-bank-account")?.value?.trim()||"-",k=d("edit-staff-bank-holder")?.value?.trim()||e,w=d("edit-staff-error"),g=d("update-staff-btn");if(!e){w&&(w.textContent="Nama staf tidak boleh kosong.",w.classList.remove("hidden"));return}g&&(g.disabled=!0,g.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i>Menyimpan...'),L("Memperbarui profil staf...");try{await P.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(t).set({name:e,role:a,employeeId:s,position:r,phone:i,baseSalary:n,dailyAllowance:o,employmentStatus:x,paymentMethod:c,bankName:p,bankAccount:b,bankHolder:k,updatedAt:H.firestore.FieldValue.serverTimestamp()},{merge:!0}),ve(),$("Profil staf & data HR berhasil diperbarui!","success"),await W()}catch(v){const A=v.code==="permission-denied"||v.message&&v.message.toLowerCase().includes("permission")?"Izin ditolak oleh Firebase (Khusus Akun Owner).":v.message;w&&(w.textContent="Gagal memperbarui: "+A,w.classList.remove("hidden")),g&&(g.disabled=!1,g.innerHTML='<i class="fa-solid fa-floppy-disk mr-2"></i>Simpan')}finally{K()}},_t=()=>{if(!D("mengatur profil dan gaji owner"))return;const t=ee(m),e=d("modal-owner-hr");e&&e.remove(),document.body.insertAdjacentHTML("beforeend",`
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
                        <input id="owner-hr-empid" type="text" value="${l(t.employeeId||"OWN-001")}"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-500 font-mono font-bold cursor-not-allowed" readonly>
                    </div>
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Nama Pemilik / Direktur <span class="text-rose-500">*</span></label>
                        <input id="owner-hr-name" type="text" value="${l(t.name||"Pemilik Toko")}"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] text-slate-900 dark:text-white font-bold transition-all shadow-2xs">
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Jabatan Resmi</label>
                        <input id="owner-hr-position" type="text" value="${l(t.position||"Owner / Direktur Utama")}"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] text-slate-900 dark:text-white transition-all shadow-2xs">
                    </div>
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">No. WhatsApp Pribadi</label>
                        <input id="owner-hr-phone" type="tel" value="${l(t.phone||"")}" placeholder="081234567890"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] text-slate-900 dark:text-white transition-all shadow-2xs">
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Gaji Pokok Direksi (Rp/Bulan) <span class="text-rose-500">*</span></label>
                        <input id="owner-hr-salary" type="number" min="0" step="50000" value="${t.baseSalary||1e7}"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] text-slate-900 dark:text-white font-bold transition-all shadow-2xs">
                    </div>
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Tunjangan Bulanan Direksi (Rp)</label>
                        <input id="owner-hr-allowance" type="number" min="0" step="50000" value="${t.dailyAllowance||0}"
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
                            <input id="owner-hr-bank-name" type="text" value="${l(t.bankName||"BCA")}" placeholder="BCA / Mandiri / BRI"
                                class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] text-slate-900 dark:text-white transition-all shadow-2xs">
                        </div>
                        <div>
                            <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Nomor Rekening</label>
                            <input id="owner-hr-bank-account" type="text" value="${l(t.bankAccount&&t.bankAccount!=="-"?t.bankAccount:"")}" placeholder="1234567890"
                                class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] text-slate-900 dark:text-white font-mono transition-all shadow-2xs">
                        </div>
                        <div>
                            <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Atas Nama Rekening</label>
                            <input id="owner-hr-bank-holder" type="text" value="${l(t.bankHolder||t.name||"")}" placeholder="Nama Pemilik"
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
    </div>`),typeof window.pushModalHistory=="function"&&window.pushModalHistory("ownerHr"),setTimeout(()=>{const a=d("owner-hr-modal-box");a&&a.classList.remove("scale-95")},10)},Fe=(t=!1)=>{const e=()=>{const a=d("modal-owner-hr");a&&(a.style.opacity="0",setTimeout(()=>a.remove(),200))};typeof window.requestCloseModal=="function"?window.requestCloseModal("ownerHr",t,e):e()},Ft=async()=>{if(!D("menyimpan kompensasi owner"))return;const t=d("owner-hr-name")?.value?.trim()||"Pemilik Toko",e=d("owner-hr-position")?.value?.trim()||"Owner / Direktur Utama",a=d("owner-hr-phone")?.value?.trim()||"",s=Math.max(0,parseFloat(d("owner-hr-salary")?.value)||0),r=Math.max(0,parseFloat(d("owner-hr-allowance")?.value)||0),i=d("owner-hr-bank-name")?.value?.trim()||"BCA",n=d("owner-hr-bank-account")?.value?.trim()||"-",o=d("owner-hr-bank-holder")?.value?.trim()||t,x=d("owner-hr-error"),c=d("save-owner-hr-btn");c&&(c.disabled=!0,c.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i>Menyimpan ke Cloud...'),L("Menyimpan data kompensasi owner...");try{const p={employeeId:"OWN-001",name:t,position:e,phone:a,baseSalary:s,dailyAllowance:r,employmentStatus:"permanent",bankName:i,bankAccount:n,bankHolder:o,role:u.OWNER,isActive:!0,updatedAt:H.firestore.FieldValue.serverTimestamp()};await P.collection("freshmart").doc("cms_data").set({ownerEmployee:p},{merge:!0}),m.ownerEmployee=p,Fe(),$("Data kompensasi Owner berhasil diperbarui!","success"),await Ee()}catch(p){console.error("[OwnerHr] Gagal menyimpan data owner:",p),x&&(x.textContent="Gagal menyimpan: "+(p.message||"Terjadi kesalahan sistem"),x.classList.remove("hidden")),c&&(c.disabled=!1,c.innerHTML='<i class="fa-solid fa-floppy-disk mr-2"></i>Simpan Kompensasi Owner')}finally{K()}},Ge=async(t,e)=>{if(D("mengubah status aktif staf")){L(e?"Mengaktifkan staf...":"Menonaktifkan staf...");try{await P.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(t).set({isActive:e,updatedAt:H.firestore.FieldValue.serverTimestamp()},{merge:!0}),$(e?"Akun staf diaktifkan":"Akun staf dinonaktifkan","success"),await W()}catch(a){a.code==="permission-denied"||a.message&&a.message.toLowerCase().includes("permission")?$("Akses Ditolak: Hanya akun Owner yang berwenang mengubah status staf.","error"):$("Gagal mengubah status staf: "+a.message,"error")}finally{K()}}},Ue=(t,e)=>{D("menghapus akun staf")&&Se("Hapus Akun Staf",`Yakin hapus akun staf "${e}"? Akun tidak dapat dipulihkan dan staf tidak dapat login lagi ke toko.`,async()=>{L("Menghapus akun staf...");try{await P.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(t).delete(),$(`Akun "${e}" berhasil dihapus`,"success"),await W()}catch(a){a.code==="permission-denied"||a.message&&a.message.toLowerCase().includes("permission")?$("Akses Ditolak: Hanya akun Owner yang berwenang menghapus staf.","error"):$("Gagal menghapus staf: "+a.message,"error")}finally{K()}},"Ya, Hapus",!0)},ze=t=>{const e=d(t),a=d(t+"-eye");e&&(e.type==="password"?(e.type="text",a&&(a.className="fa-solid fa-eye-slash text-sm")):(e.type="password",a&&(a.className="fa-solid fa-eye text-sm")))},Gt=Le,Ut=ke,zt=Ke,Wt=(t,e,a)=>_e(t,e,a,u.CASHIER),Jt=ve,qt=Ge,Vt=Ue,Yt=W,Qt=ze;typeof window<"u"&&(window.renderCashierAccounts=Ee,window.switchCashierTab=It,window.filterStaffRole=Dt,window.handleStaffSearch=Oe,window.clearStaffSearch=Rt,window.loadStaffList=W,window.openAddStaffModal=Le,window.closeAddStaffModal=ke,window.applyNewStaffPreset=Ct,window.setAllNewStaffPerms=Et,window.saveStaffAccount=Ke,window.openPermissionsModal=Nt,window.closePermissionsModal=Be,window.applyEditStaffPreset=Ot,window.setAllEditStaffPerms=Lt,window.saveStaffPermissions=Kt,window.openEditStaffModal=_e,window.closeEditStaffModal=ve,window.updateStaffProfile=Bt,window.openOwnerHrModal=_t,window.closeOwnerHrModal=Fe,window.saveOwnerHrProfile=Ft,window.toggleStaffActive=Ge,window.deleteStaffAccount=Ue,window.toggleStaffPassVisibility=ze,window.verifyOwnerAuthority=D,window.openAddCashierModal=Gt,window.closeAddCashierModal=Ut,window.saveCashierAccount=zt,window.openEditCashierModal=Wt,window.closeEditCashierModal=Jt,window.toggleCashierActive=qt,window.deleteCashierAccount=Vt,window.loadCashierList=Yt,window.toggleCashierPassVisibility=Qt);export{Ot as applyEditStaffPreset,Ct as applyNewStaffPreset,Rt as clearStaffSearch,Ut as closeAddCashierModal,ke as closeAddStaffModal,Jt as closeEditCashierModal,ve as closeEditStaffModal,Fe as closeOwnerHrModal,Be as closePermissionsModal,Vt as deleteCashierAccount,Ue as deleteStaffAccount,Dt as filterStaffRole,Oe as handleStaffSearch,Yt as loadCashierList,W as loadStaffList,Gt as openAddCashierModal,Le as openAddStaffModal,Wt as openEditCashierModal,_e as openEditStaffModal,_t as openOwnerHrModal,Nt as openPermissionsModal,Ee as renderCashierAccounts,zt as saveCashierAccount,Ft as saveOwnerHrProfile,Ke as saveStaffAccount,Kt as saveStaffPermissions,Lt as setAllEditStaffPerms,Et as setAllNewStaffPerms,It as switchCashierTab,qt as toggleCashierActive,Qt as toggleCashierPassVisibility,Ge as toggleStaffActive,ze as toggleStaffPassVisibility,Bt as updateStaffProfile,D as verifyOwnerAuthority};

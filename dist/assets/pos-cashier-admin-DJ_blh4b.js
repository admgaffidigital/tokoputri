const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./module-pos-BxG3buUZ.js","./module-print-CRpwo2LA.js","./vendor-firebase-core-D2OF5R23.js","./vendor-firebase-db-BIUZcnOd.js","./module-member-xYZx311A.js","./module-faq-nEWQ9mHk.js"])))=>i.map(i=>d[i]);
import{a as u,bj as q,f as x,i as o,q as I,bk as Pe,e as l,bl as T,k as M,l as B,bm as Me,n as F,_ as je,bn as N,R as b,bo as Y,H as Ie,bp as oe,bq as ie,br as de,bs as ce,bt as X,A as pe,J as le,b as Te,bu as U,bv as He,bw as De,bx as _e}from"./module-print-CRpwo2LA.js";import{V as Re}from"./module-pos-BxG3buUZ.js";import{f as _}from"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";import"./module-member-xYZx311A.js";import"./module-faq-nEWQ9mHk.js";let H=new Date().toISOString().slice(0,7),R=[],J=null;const ne=async()=>{try{if(typeof window<"u"&&typeof window.saveApp=="function")return await window.saveApp();const t=await je(()=>import("./module-pos-BxG3buUZ.js").then(e=>e.W),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url);if(typeof t?.saveApp=="function")return await t.saveApp()}catch{}},Z=(t,e)=>{const a=(t||new Date().toISOString().slice(0,7)).replace(/[^0-9]/g,""),s=(e||"STAFF").replace(/[^a-zA-Z0-9]/g,"");return`PAY-${a}-${s}`},C=t=>{if(!t)return"-";const[e,a]=t.split("-"),s=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],r=parseInt(a,10)-1;return`${s[r]||a} ${e}`},xe=async(t=H)=>{try{let e=[];try{const a=await I.collection("freshmart").doc("cms_data").collection("salary_payrolls").where("period","==",t).get();a&&!a.empty&&(e=a.docs.map(s=>({id:s.id,...s.data()})))}catch{}if(!e||e.length===0){let a=Array.isArray(u.payrollRuns)?u.payrollRuns:[];if(a.length===0)try{a=JSON.parse(localStorage.getItem("freshmart_payroll_runs")||"[]"),Array.isArray(a)&&a.length>0&&(u.payrollRuns=a)}catch{}e=a.filter(s=>s.period===t)}return R=e,e}catch(e){return console.error("[HR Payroll] Gagal memuat payroll:",e),R=(Array.isArray(u.payrollRuns)?u.payrollRuns:[]).filter(s=>s.period===t),R}},V=(t,e,a=[],s=[])=>{const r=t.employeeId||t.uid,i=parseFloat(t.baseSalary)||0,d=parseFloat(t.dailyAllowance)||0,n=Pe(a,e,r),f=n.presentDays||0,p=n.lateDays||0,m=f+p;let c=n.totalAllowance;c<=0&&d>0&&m>0&&(c=m*d);const h=s.find(j=>(j.employeeId===r||j.employeeUid===t.uid)&&j.status==="active"&&parseFloat(j.remainingAmount)>0);let k=0,v="",y=0;if(h){v=h.advanceId||h.id,y=parseFloat(h.remainingAmount)||0;const j=parseFloat(h.monthlyInstallment)||y;k=Math.min(y,j)}const A=0,w=0,g=0,O=0,E=i+c+A+w,$=k+g+O,P=Math.max(0,E-$);return{payrollId:Z(e,r),period:e,periodLabel:C(e),employeeUid:t.uid||"",employeeId:r,employeeName:t.name||"Karyawan",employeeRole:t.role||"staff",position:t.position||"Staf Toko",phone:t.phone||"",status:"draft",baseSalary:i,dailyAllowanceRate:d,presentDays:f,lateDays:p,permitDays:n.permitDays||0,sickDays:n.sickDays||0,alphaDays:n.alphaDays||0,totalAttendanceDays:m,attendanceAllowance:c,bonus:A,overtimePay:w,totalEarnings:E,advanceDeduction:k,advanceId:v,advanceRemainingBefore:y,lostItemDeduction:g,lostItemNotes:"",otherDeductions:O,totalDeductions:$,netSalary:P,paymentMethod:t.paymentMethod||"transfer",bankName:t.bankName||"BCA",bankAccount:t.bankAccount||"-",notes:`Gaji periode ${C(e)}`,createdAt:new Date().toISOString()}},z=async t=>{if(!t)return;t.innerHTML=`
    <div class="text-center py-16">
        <i class="fa-solid fa-spinner fa-spin text-3xl" style="color: var(--color-primary)"></i>
        <p class="text-xs text-slate-400 mt-2 font-medium">Memuat data payroll &amp; rekap kehadiran tim...</p>
    </div>`,await xe(H);const e=Array.isArray(u.attendances)?u.attendances:[],a=Array.isArray(u.salaryAdvances)?u.salaryAdvances:[],s=q(),r=s.map(c=>{const h=c.employeeId||c.uid,k=R.find(v=>v.employeeId===h||v.employeeUid===c.uid);return k||V(c,H,e,a)}),i=r.reduce((c,h)=>c+(parseFloat(h.netSalary)||0),0),d=r.filter(c=>c.status==="paid").length,n=r.length-d,f=r.reduce((c,h)=>c+(parseFloat(h.advanceDeduction)||0),0),p=r.reduce((c,h)=>c+(parseFloat(h.lostItemDeduction)||0),0),m=C(H);t.innerHTML=`
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
                <input type="month" id="payroll-period-picker" value="${H}"
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
                    <span class="text-[11px] font-bold">Total Gaji (${m})</span>
                    <i class="fa-solid fa-sack-dollar text-emerald-500 text-xs"></i>
                </div>
                <div class="text-sm sm:text-base font-black text-emerald-600 dark:text-emerald-400 font-mono truncate">
                    ${x(i)}
                </div>
                <div class="text-[10px] text-slate-400 mt-0.5">${s.length} Karyawan (Termasuk Owner)</div>
            </div>

            <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs">
                <div class="flex items-center justify-between text-slate-400 mb-1">
                    <span class="text-[11px] font-bold">Status Pembayaran</span>
                    <i class="fa-solid fa-circle-check text-blue-500 text-xs"></i>
                </div>
                <div class="text-sm sm:text-base font-black text-slate-800 dark:text-white font-mono">
                    <span class="text-emerald-600">${d} Lunas</span> / <span class="text-amber-500">${n} Draf</span>
                </div>
                <div class="text-[10px] text-slate-400 mt-0.5">${n===0?"Semua gaji lunas":"Menunggu pencairan"}</div>
            </div>

            <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs">
                <div class="flex items-center justify-between text-slate-400 mb-1">
                    <span class="text-[11px] font-bold">Potongan Kasbon</span>
                    <i class="fa-solid fa-hand-holding-dollar text-xs" style="color: var(--color-primary)"></i>
                </div>
                <div class="text-sm sm:text-base font-black text-[var(--color-primary)] font-mono truncate">
                    ${x(f)}
                </div>
                <div class="text-[10px] text-slate-400 mt-0.5">Otomatis potong saldo pinjaman</div>
            </div>

            <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs">
                <div class="flex items-center justify-between text-slate-400 mb-1">
                    <span class="text-[11px] font-bold">Potongan Barang Hilang</span>
                    <i class="fa-solid fa-boxes-packing text-rose-500 text-xs"></i>
                </div>
                <div class="text-sm sm:text-base font-black text-rose-600 dark:text-rose-400 font-mono truncate">
                    ${x(p)}
                </div>
                <div class="text-[10px] text-slate-400 mt-0.5">Kompensasi selisih stock opname</div>
            </div>
        </div>

        <!-- Daftar Kartu Payroll Karyawan -->
        <div class="space-y-3" id="payroll-items-container">
            ${r.map((c,h)=>{const k=c.status==="paid",v=c.employeeRole==="owner"||c.employeeId==="OWN-001";return`
                <div class="p-4 rounded-2xl bg-white dark:bg-slate-800 border ${k?"border-emerald-200 dark:border-emerald-800/60":"border-slate-200/90 dark:border-slate-700"} shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all">
                    <!-- Info Karyawan -->
                    <div class="flex items-start gap-3.5 min-w-0 flex-1">
                        <div class="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm shrink-0 shadow-2xs border ${v?"text-[var(--color-primary)] border-[rgba(var(--color-primary-rgb),0.3)]":"bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-900/60 dark:text-slate-200 dark:border-slate-700"}"
                            style="${v?"background: rgba(var(--color-primary-rgb), 0.12)":""}">
                            ${v?'<i class="fa-solid fa-crown text-amber-500"></i>':c.employeeName?.charAt(0)?.toUpperCase()||"K"}
                        </div>
                        <div class="min-w-0 flex-1">
                            <div class="flex items-center gap-2 flex-wrap">
                                <span class="text-sm font-black text-slate-900 dark:text-white truncate">${o(c.employeeName)}</span>
                                <span class="font-mono text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                                    ${o(c.employeeId)}
                                </span>
                                <span class="inline-flex items-center gap-1 text-[10px] font-black px-2 py-0.5 rounded-full ${k?"bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300":"bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border border-amber-300"}">
                                    <i class="fa-solid ${k?"fa-circle-check text-emerald-500":"fa-clock text-amber-500"} text-[9px]"></i>
                                    ${k?"Lunas / Dibayar":"Draf Penggajian"}
                                </span>
                            </div>
                            <div class="flex items-center text-xs text-slate-500 dark:text-slate-400 mt-1 flex-wrap gap-x-2 gap-y-0.5">
                                <span class="font-bold text-slate-700 dark:text-slate-200 whitespace-nowrap">${o(c.position)}</span>
                                <span class="inline-flex items-center whitespace-nowrap">
                                    <span class="text-slate-300 dark:text-slate-600 mr-2">•</span>
                                    <span>Absensi: <strong>${c.totalAttendanceDays||0} Hari Masuk</strong></span>
                                </span>
                                <span class="inline-flex items-center whitespace-nowrap">
                                    <span class="text-slate-300 dark:text-slate-600 mr-2">•</span>
                                    <span>Gaji Pokok: <strong>${x(c.baseSalary)}</strong></span>
                                </span>
                                ${c.attendanceAllowance>0?`
                                <span class="inline-flex items-center whitespace-nowrap">
                                    <span class="text-slate-300 dark:text-slate-600 mr-2">•</span>
                                    <span>Tunjangan: <strong class="text-[var(--color-primary)] font-bold">+${x(c.attendanceAllowance)}</strong></span>
                                </span>`:""}
                            </div>
                            <!-- Rincian Potongan -->
                            <div class="flex items-center text-[11px] text-slate-400 dark:text-slate-500 mt-1.5 flex-wrap gap-x-2 gap-y-0.5">
                                ${c.advanceDeduction>0?`<span class="text-[var(--color-primary)] font-bold whitespace-nowrap"><i class="fa-solid fa-hand-holding-dollar mr-0.5"></i> Potong Kasbon: -${x(c.advanceDeduction)}</span>`:""}
                                ${c.lostItemDeduction>0?`<span class="text-rose-500 font-medium whitespace-nowrap"><span class="text-slate-300 dark:text-slate-600 mr-1.5">•</span><i class="fa-solid fa-triangle-exclamation mr-0.5"></i> Potong Hilang: -${x(c.lostItemDeduction)}</span>`:""}
                                <span class="inline-flex items-center whitespace-nowrap">
                                    ${c.advanceDeduction>0||c.lostItemDeduction>0?'<span class="text-slate-300 dark:text-slate-600 mr-1.5">•</span>':""}
                                    <span>Metode: <strong class="text-slate-600 dark:text-slate-300">${o(c.paymentMethod?.toUpperCase())}</strong></span>
                                </span>
                                ${c.bankAccount&&c.bankAccount!=="-"?`<span class="whitespace-nowrap">(${o(c.bankName)}: ${o(c.bankAccount)})</span>`:""}
                            </div>
                        </div>
                    </div>

                    <!-- Nominal Take Home Pay & Tombol Aksi -->
                    <div class="flex items-center justify-between md:justify-end gap-3 shrink-0 border-t md:border-t-0 pt-3 md:pt-0 border-slate-100 dark:border-slate-700/60">
                        <div class="text-left md:text-right">
                            <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Take Home Pay</span>
                            <span class="text-base sm:text-lg font-black text-emerald-600 dark:text-emerald-400 font-mono">
                                ${x(c.netSalary)}
                            </span>
                        </div>
                        <div class="flex items-center gap-2">
                            <button onclick="window.openPayslipPreviewModal('${o(c.payrollId||c.id)}', '${o(c.employeeId)}')"
                                title="Lihat & Cetak Slip Gaji"
                                class="px-3.5 py-2.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 transition-all active:scale-95 cursor-pointer shadow-2xs flex items-center gap-1.5">
                                <i class="fa-solid fa-receipt" style="color: var(--color-primary)"></i>
                                <span>Slip Gaji</span>
                            </button>
                            <button onclick="window.openPayrollItemModal('${o(c.employeeId)}', '${H}')"
                                title="${k?"Ubah Rincian Kompensasi":"Hitung & Bayar Gaji"}"
                                class="px-3.5 py-2.5 rounded-xl text-xs font-black text-white transition-all active:scale-95 cursor-pointer shadow-md flex items-center gap-1.5"
                                style="background: ${k?"var(--color-primary)":"#10b981"}">
                                <i class="fa-solid ${k?"fa-pen-to-square":"fa-cash-register"}"></i>
                                <span>${k?"Edit":"Bayar"}</span>
                            </button>
                        </div>
                    </div>
                </div>`}).join("")}
        </div>
    </div>`},Ee=t=>{const[e,a]=H.split("-");let s=parseInt(e,10),r=parseInt(a,10)+t;r<1?(r=12,s-=1):r>12&&(r=1,s+=1),H=`${s}-${String(r).padStart(2,"0")}`;const i=l("payroll-period-picker");i&&(i.value=H);const d=l("cashier-panel-payroll");d&&z(d)},Ce=t=>{if(!t)return;H=t;const e=l("cashier-panel-payroll");e&&z(e)},Ne=async(t,e=H)=>{if(!T("mengelola penggajian karyawan"))return;const s=q().find(m=>m.employeeId===t||m.uid===t);if(!s){M("Karyawan tidak ditemukan","warning");return}const r=Array.isArray(u.attendances)?u.attendances:[],i=Array.isArray(u.salaryAdvances)?u.salaryAdvances:[],n=R.find(m=>(m.employeeId===t||m.employeeUid===s.uid)&&m.period===e)||V(s,e,r,i),f=l("modal-payroll-item-form");f&&f.remove();const p=C(e);document.body.insertAdjacentHTML("beforeend",`
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
                            ${o(s.name)} • ${o(s.position)} • Periode ${o(p)}
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
                        <span class="font-black text-slate-900 dark:text-white block">Presensi Kehadiran (${p}):</span>
                        <span class="text-slate-600 dark:text-slate-300 text-[11px]">
                            Hadir: <strong>${n.presentDays}</strong> • Terlambat: <strong>${n.lateDays}</strong> • Izin: <strong>${n.permitDays}</strong> • Sakit: <strong>${n.sickDays}</strong> • Alpha: <strong>${n.alphaDays}</strong>
                        </span>
                    </div>
                    <span class="font-mono font-bold text-xs px-2.5 py-1 rounded-xl bg-white dark:bg-slate-800 border"
                        style="background: rgba(var(--color-primary-rgb), 0.1); border-color: rgba(var(--color-primary-rgb), 0.25); color: var(--color-primary)">
                        Total Masuk: ${n.totalAttendanceDays} Hari
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
                            <input type="number" id="pay-base-salary" value="${n.baseSalary}" min="0" step="50000"
                                oninput="window.recalculatePayrollItem()"
                                class="w-full min-h-[44px] text-[16px] sm:text-sm px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white font-mono font-bold focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] shadow-inner">
                        </div>
                        <div>
                            <label class="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                                Tunjangan Harian / Uang Makan (Rp)
                            </label>
                            <input type="number" id="pay-attendance-allowance" value="${n.attendanceAllowance}" min="0" step="5000"
                                oninput="window.recalculatePayrollItem()"
                                class="w-full min-h-[44px] text-[16px] sm:text-sm px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white font-mono font-bold focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] shadow-inner">
                            <span class="text-[10px] text-slate-400 mt-0.5 block">Hitungan otomatis: ${n.totalAttendanceDays} hari x ${x(n.dailyAllowanceRate)}</span>
                        </div>
                        <div>
                            <label class="font-bold text-slate-700 dark:text-slate-300 block mb-1">Bonus Kinerja / Insentif Toko (Rp)</label>
                            <input type="number" id="pay-bonus" value="${n.bonus||0}" min="0" step="25000"
                                oninput="window.recalculatePayrollItem()"
                                placeholder="0"
                                class="w-full min-h-[44px] text-[16px] sm:text-sm px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white font-mono font-bold focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] shadow-inner">
                        </div>
                        <div>
                            <label class="font-bold text-slate-700 dark:text-slate-300 block mb-1">Uang Lembur / Tambahan (Rp)</label>
                            <input type="number" id="pay-overtime" value="${n.overtimePay||0}" min="0" step="25000"
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
                            <input type="number" id="pay-advance-deduction" value="${n.advanceDeduction||0}" min="0" step="10000"
                                oninput="window.recalculatePayrollItem()"
                                class="w-full min-h-[44px] text-[16px] sm:text-sm px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white font-mono font-bold focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] shadow-inner">
                            ${n.advanceId?`
                                <span class="text-[10px] text-[var(--color-primary)] mt-0.5 block font-medium">
                                    Terkoneksi #${n.advanceId} (Sisa saldo kasbon: ${x(n.advanceRemainingBefore)})
                                </span>
                            `:'<span class="text-[10px] text-slate-400 mt-0.5 block">Tidak ada kasbon aktif</span>'}
                        </div>
                        <div>
                            <label class="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                                Potongan Selisih Barang Hilang / Stock Opname (Rp)
                            </label>
                            <input type="number" id="pay-lost-item-deduction" value="${n.lostItemDeduction||0}" min="0" step="5000"
                                oninput="window.recalculatePayrollItem()"
                                placeholder="0"
                                class="w-full min-h-[44px] text-[16px] sm:text-sm px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white font-mono font-bold focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] shadow-inner">
                            <span class="text-[10px] text-slate-400 mt-0.5 block">Disesuaikan jabatan &amp; tanggung jawab staf</span>
                        </div>
                    </div>

                    <div>
                        <label class="font-bold text-slate-700 dark:text-slate-300 block mb-1">Keterangan Pemotongan Barang Hilang / Catatan</label>
                        <input type="text" id="pay-lost-item-notes" value="${o(n.lostItemNotes||"")}"
                            placeholder="Contoh: Selisih opname toko 1 sak semen & 2 kran air"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] shadow-inner">
                    </div>
                </div>

                <!-- Bagian 3: Ringkasan Kalkulasi Take Home Pay -->
                <div class="p-4 rounded-2xl border border-emerald-200 dark:border-emerald-800/80 bg-gradient-to-br from-emerald-500/10 via-slate-50 to-white dark:from-emerald-950/40 dark:via-slate-800 dark:to-slate-800 space-y-2">
                    <div class="flex items-center justify-between text-slate-600 dark:text-slate-300 text-xs">
                        <span>Total Penghasilan Bruto:</span>
                        <strong class="font-mono text-emerald-600 dark:text-emerald-400" id="pay-total-earnings-display">
                            ${x(n.totalEarnings)}
                        </strong>
                    </div>
                    <div class="flex items-center justify-between text-slate-600 dark:text-slate-300 text-xs">
                        <span>Total Potongan:</span>
                        <strong class="font-mono text-rose-500 dark:text-rose-400" id="pay-total-deductions-display">
                            -${x(n.totalDeductions)}
                        </strong>
                    </div>
                    <div class="border-t border-slate-200 dark:border-slate-700 pt-2 flex items-center justify-between">
                        <span class="font-black text-slate-900 dark:text-white text-sm">Gaji Bersih (Take Home Pay):</span>
                        <span class="font-black text-lg sm:text-xl font-mono text-emerald-600 dark:text-emerald-400" id="pay-net-salary-display">
                            ${x(n.netSalary)}
                        </span>
                    </div>
                </div>

                <!-- Bagian 4: Pengaturan Pembayaran -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                        <label class="font-bold text-slate-700 dark:text-slate-300 block mb-1">Metode Pembayaran</label>
                        <select id="pay-payment-method"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white font-bold focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] shadow-inner">
                            <option value="transfer" ${n.paymentMethod==="transfer"?"selected":""}>Transfer Bank / Rekening</option>
                            <option value="cash" ${n.paymentMethod==="cash"?"selected":""}>Tunai Langsung (Kas Toko)</option>
                        </select>
                    </div>
                    <div>
                        <label class="font-bold text-slate-700 dark:text-slate-300 block mb-1">Rekening Karyawan</label>
                        <input type="text" id="pay-bank-account" value="${o(n.bankAccount!=="-"?`${n.bankName}: ${n.bankAccount}`:"Tunai / Kas Toko")}"
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
    </div>`),typeof window.pushModalHistory=="function"&&window.pushModalHistory("payrollItemForm"),setTimeout(()=>{const m=l("payroll-item-modal-box");m&&m.classList.remove("scale-95")},10)},be=(t=!1)=>{const e=()=>{const a=l("modal-payroll-item-form");a&&(a.style.opacity="0",setTimeout(()=>a.remove(),200))};typeof window.requestCloseModal=="function"?window.requestCloseModal("payrollItemForm",t,e):e()},Le=()=>{const t=parseFloat(l("pay-base-salary")?.value)||0,e=parseFloat(l("pay-attendance-allowance")?.value)||0,a=parseFloat(l("pay-bonus")?.value)||0,s=parseFloat(l("pay-overtime")?.value)||0,r=parseFloat(l("pay-advance-deduction")?.value)||0,i=parseFloat(l("pay-lost-item-deduction")?.value)||0,d=t+e+a+s,n=r+i,f=Math.max(0,d-n),p=l("pay-total-earnings-display"),m=l("pay-total-deductions-display"),c=l("pay-net-salary-display");p&&(p.textContent=`${x(d)}`),m&&(m.textContent=`-${x(n)}`),c&&(c.textContent=`${x(f)}`)},Oe=async(t,e,a="paid")=>{if(!T("menyimpan data payroll karyawan"))return;const r=q().find(g=>g.employeeId===t||g.uid===t);if(!r)return;const i=parseFloat(l("pay-base-salary")?.value)||0,d=parseFloat(l("pay-attendance-allowance")?.value)||0,n=parseFloat(l("pay-bonus")?.value)||0,f=parseFloat(l("pay-overtime")?.value)||0,p=parseFloat(l("pay-advance-deduction")?.value)||0,m=parseFloat(l("pay-lost-item-deduction")?.value)||0,c=l("pay-lost-item-notes")?.value?.trim()||"",h=l("pay-payment-method")?.value||"transfer",k=l("pay-sync-expense")?.checked!==!1,v=i+d+n+f,y=p+m,A=Math.max(0,v-y),w=Z(e,t);B(a==="paid"?"Memproses pembayaran gaji...":"Menyimpan draf payroll...");try{let g=null;if(a==="paid"&&k&&A>0){g="exp_pay_"+Date.now();const P={id:g,date:new Date().toISOString().split("T")[0],category:"gaji",amount:A,desc:`Gaji Karyawan: ${r.name} (${r.position}) - Periode ${C(e)}`,source:h==="cash"?"cash":"bank",recipient:r.name,receiptUrl:"",payrollId:w,createdAt:new Date().toISOString()};Array.isArray(u.expenses)||(u.expenses=[]),u.expenses.unshift(P);try{await ne()}catch{}}if(a==="paid"&&p>0){const j=(Array.isArray(u.salaryAdvances)?u.salaryAdvances:[]).find(D=>(D.employeeId===t||D.employeeUid===r.uid)&&D.status==="active"&&parseFloat(D.remainingAmount)>0);if(j){const D=j.advanceId||j.id;try{await Me(D,p,`Pemotongan payroll periode ${C(e)}`)}catch(W){console.warn("[HR Payroll] Gagal memotong saldo kasbon:",W)}}}const O={payrollId:w,period:e,periodLabel:C(e),employeeUid:r.uid||"",employeeId:t,employeeName:r.name,employeeRole:r.role,position:r.position,phone:r.phone||"",status:a,baseSalary:i,attendanceAllowance:d,bonus:n,overtimePay:f,totalEarnings:v,advanceDeduction:p,lostItemDeduction:m,lostItemNotes:c,totalDeductions:y,netSalary:A,paymentMethod:h,bankName:r.bankName||"BCA",bankAccount:r.bankAccount||"-",expenseId:g,notes:`Gaji ${C(e)}`,updatedAt:_.firestore.FieldValue.serverTimestamp(),paidAt:a==="paid"?new Date().toISOString():null};try{await I.collection("freshmart").doc("cms_data").collection("salary_payrolls").doc(w).set(O,{merge:!0})}catch{}Array.isArray(u.payrollRuns)||(u.payrollRuns=[]);const E=u.payrollRuns.findIndex(P=>P.payrollId===w||P.id===w);E>-1?u.payrollRuns[E]={id:w,...O}:u.payrollRuns.unshift({id:w,...O});try{localStorage.setItem("freshmart_payroll_runs",JSON.stringify(u.payrollRuns)),await ne()}catch{}be(),M(a==="paid"?`Gaji ${x(A)} untuk ${r.name} berhasil dibayarkan!`:`Draf gaji untuk ${r.name} berhasil disimpan`,"success");const $=l("cashier-panel-payroll");$&&z($)}catch(g){console.error("[HR Payroll] Gagal menyimpan payroll:",g),M("Gagal menyimpan: "+g.message,"error")}finally{F()}},Ke=(t,e)=>{let a=R.find(i=>(i.payrollId||i.id)===t);if(!a&&e){const i=q().find(d=>d.employeeId===e||d.uid===e);if(i){const d=Array.isArray(u.attendances)?u.attendances:[],n=Array.isArray(u.salaryAdvances)?u.salaryAdvances:[];a=V(i,H,d,n)}}if(!a){M("Data slip gaji tidak ditemukan","warning");return}J=a;const s=l("modal-payslip-preview");s&&s.remove();const r=u.store||{name:"TOKO PUTRI",address:"Jl. Raya Toko Putri"};document.body.insertAdjacentHTML("beforeend",`
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
                            #${o(a.payrollId||a.id)} • ${o(a.periodLabel)}
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
                            SLIP GAJI RESMI • ${o(a.periodLabel)}
                        </div>
                    </div>

                    <!-- Identitas Karyawan -->
                    <div class="grid grid-cols-2 gap-2 text-xs pb-3 border-b border-dashed border-slate-300 dark:border-slate-600">
                        <div>
                            <span class="text-slate-400 block text-[10px]">ID Karyawan:</span>
                            <span class="font-mono font-bold">${o(a.employeeId)}</span>
                        </div>
                        <div>
                            <span class="text-slate-400 block text-[10px]">Nama Karyawan:</span>
                            <span class="font-bold">${o(a.employeeName)}</span>
                        </div>
                        <div>
                            <span class="text-slate-400 block text-[10px]">Jabatan / Divisi:</span>
                            <span class="font-bold">${o(a.position)}</span>
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
                            <span class="font-mono font-bold">${x(a.baseSalary)}</span>
                        </div>
                        ${a.attendanceAllowance>0?`
                        <div class="flex justify-between">
                            <span class="text-slate-600 dark:text-slate-300">Tunjangan Kehadiran (${a.totalAttendanceDays||0} Hari):</span>
                            <span class="font-mono font-bold text-emerald-600 dark:text-emerald-400">+${x(a.attendanceAllowance)}</span>
                        </div>`:""}
                        ${a.bonus>0?`
                        <div class="flex justify-between">
                            <span class="text-slate-600 dark:text-slate-300">Bonus Kinerja &amp; Insentif:</span>
                            <span class="font-mono font-bold text-emerald-600 dark:text-emerald-400">+${x(a.bonus)}</span>
                        </div>`:""}
                        ${a.overtimePay>0?`
                        <div class="flex justify-between">
                            <span class="text-slate-600 dark:text-slate-300">Uang Lembur:</span>
                            <span class="font-mono font-bold text-emerald-600 dark:text-emerald-400">+${x(a.overtimePay)}</span>
                        </div>`:""}
                        <div class="flex justify-between pt-1 border-t border-slate-200 dark:border-slate-700 font-bold">
                            <span>Total Penghasilan Bruto:</span>
                            <span class="font-mono text-emerald-600 dark:text-emerald-400">${x(a.totalEarnings)}</span>
                        </div>
                    </div>

                    <!-- Rincian Potongan (-) -->
                    <div class="space-y-1.5 pb-3 border-b border-dashed border-slate-300 dark:border-slate-600">
                        <span class="text-[11px] font-black uppercase text-rose-500 tracking-wider block">POTONGAN (-)</span>
                        ${a.advanceDeduction>0?`
                        <div class="flex justify-between">
                            <span class="text-slate-600 dark:text-slate-300">Angsuran Kasbon (#${o(a.advanceId||"KSB")}):</span>
                            <span class="font-mono font-bold text-rose-500">-${x(a.advanceDeduction)}</span>
                        </div>`:""}
                        ${a.lostItemDeduction>0?`
                        <div class="flex justify-between">
                            <span class="text-slate-600 dark:text-slate-300">Potongan Selisih Barang Hilang:</span>
                            <span class="font-mono font-bold text-rose-500">-${x(a.lostItemDeduction)}</span>
                        </div>
                        ${a.lostItemNotes?`<span class="text-[10px] text-slate-400 italic block pl-2">${o(a.lostItemNotes)}</span>`:""}`:""}
                        ${a.totalDeductions===0?'<div class="text-slate-400 text-[11px] italic">Tidak ada potongan pada periode ini</div>':""}
                        <div class="flex justify-between pt-1 border-t border-slate-200 dark:border-slate-700 font-bold">
                            <span>Total Potongan:</span>
                            <span class="font-mono text-rose-500">-${x(a.totalDeductions)}</span>
                        </div>
                    </div>

                    <!-- Total Gaji Bersih (Take Home Pay) -->
                    <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-emerald-300 dark:border-emerald-700 flex items-center justify-between">
                        <div>
                            <span class="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">GAJI BERSIH (TAKE HOME PAY)</span>
                            <span class="text-[10px] text-slate-500">Metode: ${o(a.paymentMethod?.toUpperCase())}</span>
                        </div>
                        <span class="text-lg font-black text-emerald-600 dark:text-emerald-400 font-mono">
                            ${x(a.netSalary)}
                        </span>
                    </div>

                    <!-- Tanda Tangan Ringkas -->
                    <div class="grid grid-cols-2 text-center pt-2 text-[10px] text-slate-400">
                        <div>
                            <span>Penerima,</span>
                            <div class="h-10"></div>
                            <span class="font-bold text-slate-700 dark:text-slate-300">${o(a.employeeName)}</span>
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
                    <button onclick="window.sendPayslipWhatsApp('${o(a.payrollId||a.id)}')"
                        class="flex-1 sm:flex-initial min-h-[44px] px-4 py-2.5 rounded-2xl text-white font-black text-xs transition-all active:scale-95 cursor-pointer shadow-sm flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700">
                        <i class="fa-brands fa-whatsapp text-sm"></i>
                        <span>Kirim WA</span>
                    </button>
                    <button onclick="window.printPayslipThermal('${o(a.payrollId||a.id)}')"
                        class="flex-1 sm:flex-initial min-h-[44px] px-4 py-2.5 rounded-2xl text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-600 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-700 transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-1.5">
                        <i class="fa-solid fa-receipt text-xs"></i>
                        <span>Struk Thermal</span>
                    </button>
                    <button onclick="window.printPayslipA4('${o(a.payrollId||a.id)}')"
                        class="flex-1 sm:flex-initial min-h-[44px] px-5 py-2.5 rounded-2xl text-white font-black text-xs shadow-md active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-1.5"
                        style="background: var(--color-primary);">
                        <i class="fa-solid fa-print text-xs"></i>
                        <span>Cetak A4 PDF</span>
                    </button>
                </div>
            </div>
        </div>
    </div>`),typeof window.pushModalHistory=="function"&&window.pushModalHistory("payslipPreview"),setTimeout(()=>{const i=l("payslip-preview-modal-box");i&&i.classList.remove("scale-95")},10)},Be=(t=!1)=>{const e=()=>{const a=l("modal-payslip-preview");a&&(a.style.opacity="0",setTimeout(()=>a.remove(),200))};typeof window.requestCloseModal=="function"?window.requestCloseModal("payslipPreview",t,e):e()},Fe=t=>{const e=J||R.find(n=>(n.payrollId||n.id)===t);if(!e)return;const a=u.store||{name:"TOKO PUTRI"},s=String(e.phone||"").replace(/[^0-9]/g,""),r=[`*SLIP GAJI RESMI - ${a.name?.toUpperCase()||"TOKO PUTRI"}*`,`Periode: *${e.periodLabel}*`,"----------------------------------------","👤 *KARYAWAN*",`• ID: \`${e.employeeId}\``,`• Nama: *${e.employeeName}*`,`• Jabatan: ${e.position}`,`• Hari Masuk: ${e.totalAttendanceDays||0} Hari`,"----------------------------------------","💰 *PENGHASILAN (+)*",`• Gaji Pokok: ${x(e.baseSalary)}`,e.attendanceAllowance>0?`• Tunjangan Absensi: +${x(e.attendanceAllowance)}`:"",e.bonus>0?`• Bonus / Insentif: +${x(e.bonus)}`:"",e.overtimePay>0?`• Uang Lembur: +${x(e.overtimePay)}`:"",`*Total Bruto: ${x(e.totalEarnings)}*`,"----------------------------------------","✂️ *POTONGAN (-)*",e.advanceDeduction>0?`• Angsuran Kasbon: -${x(e.advanceDeduction)}`:"",e.lostItemDeduction>0?`• Potongan Selisih Barang Hilang: -${x(e.lostItemDeduction)}`:"",e.totalDeductions===0?"• Tidak ada potongan":`*Total Potongan: -${x(e.totalDeductions)}*`,"----------------------------------------","💵 *GAJI BERSIH (TAKE HOME PAY)*",`*${x(e.netSalary)}*`,`Metode: ${e.paymentMethod?.toUpperCase()} (${e.bankName||"BCA"}: ${e.bankAccount||"-"})`,`Status: *${e.status==="paid"?"LUNAS / DIBAYAR":"DRAF"}*`,"----------------------------------------","_Slip gaji ini dibuat otomatis secara sah oleh sistem manajemen Toko Putri._"].filter(Boolean).join(`
`),i=encodeURIComponent(r),d=s?`https://wa.me/${s}?text=${i}`:`https://api.whatsapp.com/send?text=${i}`;window.open(d,"_blank")},Ge=t=>{const e=J||R.find(i=>(i.payrollId||i.id)===t);if(!e)return;const a=u.store||{name:"TOKO PUTRI",address:"Jl. Raya Toko Putri"},s=`
    <div style="font-family:'Courier New',Courier,monospace;width:300px;margin:0 auto;padding:10px;font-size:12px;color:#000;">
        <div style="text-align:center;border-bottom:1px dashed #000;padding-bottom:8px;margin-bottom:8px;">
            <div style="font-size:16px;font-weight:bold;">${o(a.name||"TOKO PUTRI")}</div>
            <div style="font-size:10px;">${o(a.address||"")}</div>
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
            <div style="display:flex;justify-content:space-between;"><span>Gaji Pokok:</span><span>${x(e.baseSalary)}</span></div>
            ${e.attendanceAllowance>0?`<div style="display:flex;justify-content:space-between;"><span>Tunj. Kehadiran:</span><span>+${x(e.attendanceAllowance)}</span></div>`:""}
            ${e.bonus>0?`<div style="display:flex;justify-content:space-between;"><span>Bonus/Insentif:</span><span>+${x(e.bonus)}</span></div>`:""}
            ${e.overtimePay>0?`<div style="display:flex;justify-content:space-between;"><span>Lembur:</span><span>+${x(e.overtimePay)}</span></div>`:""}
            <div style="display:flex;justify-content:space-between;font-weight:bold;margin-top:2px;"><span>Bruto:</span><span>${x(e.totalEarnings)}</span></div>
        </div>
        <div style="border-bottom:1px dashed #000;padding-bottom:6px;margin-bottom:6px;">
            <div style="font-weight:bold;margin-bottom:2px;">POTONGAN:</div>
            ${e.advanceDeduction>0?`<div style="display:flex;justify-content:space-between;"><span>Kasbon:</span><span>-${x(e.advanceDeduction)}</span></div>`:""}
            ${e.lostItemDeduction>0?`<div style="display:flex;justify-content:space-between;"><span>Selisih Barang:</span><span>-${x(e.lostItemDeduction)}</span></div>`:""}
            ${e.totalDeductions===0?"<div>(Tidak ada potongan)</div>":""}
            <div style="display:flex;justify-content:space-between;font-weight:bold;margin-top:2px;"><span>Tot. Potongan:</span><span>-${x(e.totalDeductions)}</span></div>
        </div>
        <div style="font-size:14px;font-weight:bold;display:flex;justify-content:space-between;margin-bottom:10px;">
            <span>TAKE HOME PAY:</span>
            <span>${x(e.netSalary)}</span>
        </div>
        <div style="text-align:center;font-size:10px;border-top:1px dashed #000;padding-top:8px;">
            <div>Metode: ${o(e.paymentMethod?.toUpperCase())} • Status: ${o(e.status?.toUpperCase())}</div>
            <div style="margin-top:4px;">Terima kasih atas kerja keras Anda!</div>
        </div>
    </div>`,r=window.open("","_blank");r&&(r.document.write(`<html><head><title>Slip Gaji - ${e.employeeName}</title></head><body onload="window.print();">${s}</body></html>`),r.document.close())},Ue=t=>{const e=J||R.find(i=>(i.payrollId||i.id)===t);if(!e)return;const a=u.store||{name:"TOKO PUTRI",address:"Jl. Raya Toko Putri",phone:"081234567890"},s=`
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
                <div class="kop-title">${o(a.name||"TOKO PUTRI")}</div>
                <div class="kop-sub">${o(a.address||"Pusat Bahan Bangunan & Alat Teknik")}</div>
                <div class="kop-sub">WhatsApp: ${o(a.phone||"-")}</div>
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
                    <td class="text-right font-mono">${x(e.baseSalary)}</td>
                </tr>
                ${e.attendanceAllowance>0?`
                <tr>
                    <td>Tunjangan Kehadiran (${e.totalAttendanceDays||0} hari x ${x(e.dailyAllowanceRate)})</td>
                    <td class="text-right font-mono text-emerald-600">+${x(e.attendanceAllowance)}</td>
                </tr>`:""}
                ${e.bonus>0?`
                <tr>
                    <td>Bonus Kinerja &amp; Insentif Toko</td>
                    <td class="text-right font-mono text-emerald-600">+${x(e.bonus)}</td>
                </tr>`:""}
                ${e.overtimePay>0?`
                <tr>
                    <td>Uang Lembur / Tambahan</td>
                    <td class="text-right font-mono text-emerald-600">+${x(e.overtimePay)}</td>
                </tr>`:""}
                <tr style="background: #f8fafc; font-weight: 800;">
                    <td>Subtotal Penghasilan Bruto</td>
                    <td class="text-right font-mono text-emerald-600">${x(e.totalEarnings)}</td>
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
                    <td class="text-right font-mono text-rose-500">-${x(e.advanceDeduction)}</td>
                </tr>`:""}
                ${e.lostItemDeduction>0?`
                <tr>
                    <td>Potongan Selisih Barang Hilang / Stock Opname ${e.lostItemNotes?`(${o(e.lostItemNotes)})`:""}</td>
                    <td class="text-right font-mono text-rose-500">-${x(e.lostItemDeduction)}</td>
                </tr>`:""}
                ${e.totalDeductions===0?`
                <tr>
                    <td colspan="2" style="color: #94a3b8; font-style: italic;">Tidak ada potongan pada periode penggajian ini.</td>
                </tr>`:""}
                <tr style="background: #f8fafc; font-weight: 800;">
                    <td>Subtotal Pemotongan</td>
                    <td class="text-right font-mono text-rose-500">-${x(e.totalDeductions)}</td>
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
            <div class="total-val">${x(e.netSalary)}</div>
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
                <div style="font-size: 11px; color: #64748b;">${o(a.name||"Toko Putri")}</div>
            </div>
        </div>
    </body>
    </html>`,r=window.open("","_blank");r&&(r.document.write(s),r.document.close())};typeof window<"u"&&(window.generatePayrollId=Z,window.loadPayrollRuns=xe,window.calculateEmployeePayrollDraft=V,window.renderPayrollView=z,window.navigatePayrollPeriod=Ee,window.onPayrollPeriodChanged=Ce,window.openPayrollItemModal=Ne,window.closePayrollItemModal=be,window.recalculatePayrollItem=Le,window.savePayrollItem=Oe,window.openPayslipPreviewModal=Ke,window.closePayslipPreviewModal=Be,window.sendPayslipWhatsApp=Fe,window.printPayslipThermal=Ge,window.printPayslipA4=Ue);let S=[],G="all",K="";const ze=t=>{if(!t)return"";let e=t.replace(/[^0-9]/g,"");return e.startsWith("0")&&(e="62"+e.slice(1)),e},fe=async()=>{if(!l("admin-content"))return;const e=document.querySelector("#view-admin .scroll-content");e&&(e.scrollTop=0);const a=pe.currentUser;a&&(a.uid,le);const s=a&&a.uid!==le,r=!a,i=X(u);let d="",n="";r?(d='<span class="inline-flex items-center gap-1.5 text-amber-600 dark:text-amber-400 font-bold"><i class="fa-solid fa-triangle-exclamation"></i> Status: Pratinjau Lokal</span>',n=`
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
        </div>`):s?(d=`<span class="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-bold"><i class="fa-solid fa-user-shield"></i> Staf (${o(a.email||"Staf")})</span>`,n=`
        <div class="p-3.5 rounded-2xl border border-blue-200 dark:border-blue-800/80 bg-blue-50/80 dark:bg-blue-950/40 text-blue-800 dark:text-blue-200 flex items-center gap-3 shadow-2xs mb-4">
            <div class="w-8 h-8 rounded-xl bg-blue-200/70 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 flex items-center justify-center shrink-0">
                <i class="fa-solid fa-shield-halved text-xs"></i>
            </div>
            <div class="text-[11px] leading-snug">
                <span class="font-bold">Mode Akun Staf (${o(a.email||"Staf")}):</span> Anda dapat melihat direktori staf. Penambahan, pengubahan wewenang hak akses, dan penghapusan staf diproteksi eksklusif untuk Pemilik Toko (Owner).
            </div>
        </div>`):d=`<span class="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold"><i class="fa-solid fa-circle-check"></i> Owner Terverifikasi (${o(a.email||"Master")})</span>`,Te("admin-content",`
    <div class="space-y-4 max-w-5xl mx-auto pb-24">
        <!-- Native App Sticky Segmented Control Bar (Horizontal Smooth Slide & Desktop Drag) -->
        <div class="sticky top-0 z-20 py-2 sm:py-3 bg-slate-50/95 dark:bg-slate-900/95 backdrop-blur-none border-b border-slate-200/80 dark:border-slate-800/80 mb-2">
            <div id="cashier-admin-tabs-bar" class="segmented-tabs-bar p-1.5 bg-slate-100 dark:bg-slate-800 rounded-2xl w-full mx-auto flex items-center gap-2 overflow-x-auto hide-scrollbar sm:grid sm:grid-cols-5 select-none" style="overflow-x: auto !important; -webkit-overflow-scrolling: touch; touch-action: pan-x; cursor: grab;">
                <button id="tab-btn-cashier-accounts" onclick="window.switchCashierTab('accounts')" 
                    class="min-h-[44px] py-2.5 px-3 sm:px-2.5 rounded-xl text-xs font-black text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer border-2 border-slate-900 shadow-[2px_2px_0px_#0f172a] active:translate-x-[1px] active:translate-y-[1px] shrink-0 sm:shrink min-w-[125px] sm:min-w-0"
                    style="background: var(--color-primary);">
                    <i class="fa-solid fa-users-gear text-white"></i>
                    <span class="truncate">Staf &amp; Akses</span>
                </button>
                <button id="tab-btn-cashier-attendance" onclick="window.switchCashierTab('attendance')" 
                    class="min-h-[44px] py-2.5 px-3 sm:px-2.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border-2 border-slate-900 dark:border-slate-700 shadow-[1.5px_1.5px_0px_#0f172a] dark:shadow-[1.5px_1.5px_0px_#000000] hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-1.5 cursor-pointer active:translate-x-[1px] active:translate-y-[1px] shrink-0 sm:shrink min-w-[125px] sm:min-w-0">
                    <i class="fa-solid fa-clipboard-user"></i>
                    <span class="truncate">Absensi Tim</span>
                </button>
                <button id="tab-btn-cashier-advances" onclick="window.switchCashierTab('advances')" 
                    class="min-h-[44px] py-2.5 px-3 sm:px-2.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border-2 border-slate-900 dark:border-slate-700 shadow-[1.5px_1.5px_0px_#0f172a] dark:shadow-[1.5px_1.5px_0px_#000000] hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-1.5 cursor-pointer active:translate-x-[1px] active:translate-y-[1px] shrink-0 sm:shrink min-w-[125px] sm:min-w-0">
                    <i class="fa-solid fa-hand-holding-dollar"></i>
                    <span class="truncate">Buku Kasbon</span>
                </button>
                <button id="tab-btn-cashier-payroll" onclick="window.switchCashierTab('payroll')" 
                    class="min-h-[44px] py-2.5 px-3 sm:px-2.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border-2 border-slate-900 dark:border-slate-700 shadow-[1.5px_1.5px_0px_#0f172a] dark:shadow-[1.5px_1.5px_0px_#000000] hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-1.5 cursor-pointer active:translate-x-[1px] active:translate-y-[1px] shrink-0 sm:shrink min-w-[125px] sm:min-w-0">
                    <i class="fa-solid fa-money-check-dollar"></i>
                    <span class="truncate">Gaji &amp; Slip</span>
                </button>
                <button id="tab-btn-cashier-shifts" onclick="window.switchCashierTab('shifts')" 
                    class="min-h-[44px] py-2.5 px-3 sm:px-2.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border-2 border-slate-900 dark:border-slate-700 shadow-[1.5px_1.5px_0px_#0f172a] dark:shadow-[1.5px_1.5px_0px_#000000] hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-1.5 cursor-pointer active:translate-x-[1px] active:translate-y-[1px] shrink-0 sm:shrink min-w-[125px] sm:min-w-0">
                    <i class="fa-solid fa-file-invoice-dollar"></i>
                    <span class="truncate">Shift Kasir</span>
                </button>
            </div>
        </div>

        <!-- Panel 1: Manajemen Staf & Hak Akses -->
        <div id="cashier-panel-accounts" class="space-y-4 pt-1">
            ${n}

            <!-- 1. HERO BANNER: MASTER MANAJEMEN STAF & HAK AKSES (THEME HARMONIZED) -->
            <div class="relative overflow-hidden p-4 sm:p-5 rounded-2xl border border-[rgba(var(--color-primary-rgb),0.2)] bg-white dark:bg-slate-900 shadow-xs">
                <div class="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
                    <div class="space-y-1">
                        <div class="flex items-center gap-2">
                            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg text-[9px] font-black uppercase tracking-wider border shadow-2xs whitespace-nowrap" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25);">
                                <i class="fa-solid fa-users-gear"></i> Tim Toko &amp; Keamanan Akses
                            </span>
                        </div>
                        <h2 class="text-base sm:text-lg font-black tracking-tight text-slate-800 dark:text-white flex items-center gap-2">
                            Manajemen Staf &amp; Hak Akses
                        </h2>
                        <p class="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
                            Daftarkan akun kasir POS, admin operasional, dan staf gudang. Atur wewenang akses modul toko secara granular serta sinkronisasi penggajian dan kompensasi HR.
                        </p>
                    </div>

                    <div class="flex items-center gap-2 shrink-0 pt-1 md:pt-0">
                        <button onclick="window.openOwnerHrModal()" class="flex-1 sm:flex-none px-3.5 py-2 rounded-xl bg-white/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 border border-slate-200/90 dark:border-slate-700/80 font-bold text-xs shadow-2xs hover:bg-white dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95">
                            <i class="fa-solid fa-crown text-amber-500"></i>
                            <span>Profil Owner</span>
                        </button>
                        <button onclick="window.openAddStaffModal()" class="flex-1 sm:flex-none neo-btn px-4 py-2 rounded-xl text-xs font-black text-white flex items-center justify-center gap-1.5 cursor-pointer hover:opacity-95" style="background: var(--color-primary);">
                            <i class="fa-solid fa-user-plus text-xs"></i>
                            <span>Tambah Staf</span>
                        </button>
                    </div>
                </div>

                <!-- 2. METRIK STATISTIK TIM (4-CARD BENTO STAT HUB) -->
                <div id="staff-metrics-container" class="mt-6 pt-5 border-t border-[rgba(var(--color-primary-rgb),0.15)] dark:border-slate-700/60">
                    <div class="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
                        <div class="p-3 sm:p-3.5 rounded-xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                            <div class="flex items-center justify-between mb-1.5">
                                <span class="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Total Tim &amp; Staf</span>
                                <div class="w-8 h-8 rounded-lg flex items-center justify-center text-xs text-white shadow-xs shrink-0" style="background-color: var(--color-primary);">
                                    <i class="fa-solid fa-users"></i>
                                </div>
                            </div>
                            <p class="text-xl sm:text-2xl font-black text-slate-800 dark:text-white tracking-tight">-</p>
                            <p class="text-[9px] sm:text-[10px] font-bold text-slate-400 mt-0.5">Memuat data...</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 3. FLAGSHIP BENTO ISLAND: AKUN PEMILIK UTAMA (SUPER ADMIN & MASTER HR) -->
            <div id="owner-card-container">
                ${We(i,d)}
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
    </div>`),me(),await L()},We=(t,e)=>`
    <div class="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-[rgba(var(--color-primary-rgb),0.25)] bg-white/95 dark:bg-slate-800/90 shadow-2xs hover:border-[var(--color-primary)] transition-all">
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-3 sm:gap-4">
            <div class="flex items-start sm:items-center gap-3 sm:gap-3.5 min-w-0">
                <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-lg shrink-0 text-white border-2 border-slate-900 dark:border-slate-700 shadow-[1.5px_1.5px_0px_#0f172a] dark:shadow-[1.5px_1.5px_0px_#000000]" style="background-color: var(--color-primary);">
                    <i class="fa-solid fa-crown text-amber-300"></i>
                </div>
                <div class="min-w-0 flex-1 space-y-1">
                    <div class="flex items-center gap-2 flex-wrap">
                        <h3 class="text-sm sm:text-base font-black text-slate-900 dark:text-white truncate">
                            ${o(t.name||"Akun Pemilik Utama (Owner)")}
                        </h3>
                        <span class="inline-flex items-center gap-1 text-[10px] font-black px-2.5 py-0.5 rounded-full border" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25);">
                            <i class="fa-solid fa-shield-halved text-[9px]"></i> Super Admin Terproteksi
                        </span>
                        <span class="inline-flex items-center gap-1 font-mono text-[10px] font-bold px-2 py-0.5 rounded-md border" style="background: rgba(var(--color-primary-rgb), 0.08); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.2);">
                            ${o(t.employeeId||"OWN-001")}
                        </span>
                        <span class="inline-flex items-center gap-1 text-[10px] font-black px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60">
                            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            Owner Aktif
                        </span>
                    </div>
                    <div class="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300 flex-wrap">
                        <span class="font-bold text-slate-800 dark:text-slate-100">
                            <i class="fa-solid fa-user-tie text-[11px] mr-1" style="color: var(--color-primary)"></i>${o(t.position||"Owner / Direktur Utama")}
                        </span>
                        <span class="text-slate-300 dark:text-slate-600">•</span>
                        <span class="font-black text-emerald-600 dark:text-emerald-400">
                            <i class="fa-solid fa-money-bill-wave text-[10px] mr-1"></i>${x(t.baseSalary||1e7)}/bln
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
                            <i class="fa-solid fa-building-columns text-[10px]"></i> ${o(t.bankName||"BCA")}: ${o(t.bankAccount)}
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
    </div>`,me=()=>{const t=l("cashier-admin-tabs-bar");if(!t||t.__dragScrollAttached)return;t.__dragScrollAttached=!0;let e=!1,a=0,s=0,r=!1;t.addEventListener("mousedown",d=>{e=!0,r=!1,t.style.cursor="grabbing",a=d.pageX-t.offsetLeft,s=t.scrollLeft});const i=()=>{e&&(e=!1,t.style.cursor="grab")};t.addEventListener("mouseleave",i),t.addEventListener("mouseup",i),t.addEventListener("mousemove",d=>{if(!e)return;d.preventDefault();const f=(d.pageX-t.offsetLeft-a)*1.5;Math.abs(f)>4&&(r=!0),t.scrollLeft=s-f}),t.querySelectorAll("button").forEach(d=>{d.addEventListener("click",n=>{r&&(n.stopImmediatePropagation(),n.preventDefault())},!0)})},qe=t=>{const e=document.querySelector("#view-admin .scroll-content");e&&(e.scrollTop=0);const a=l("tab-btn-cashier-accounts"),s=l("tab-btn-cashier-attendance"),r=l("tab-btn-cashier-advances"),i=l("tab-btn-cashier-payroll"),d=l("tab-btn-cashier-shifts"),n=l("cashier-panel-accounts"),f=l("cashier-panel-attendance"),p=l("cashier-panel-advances"),m=l("cashier-panel-payroll"),c=l("cashier-panel-shifts"),h=(y,A,w)=>{y&&(y.className="min-h-[44px] py-2.5 px-3 sm:px-2.5 rounded-xl text-xs font-black text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer border-2 border-slate-900 shadow-[2px_2px_0px_#0f172a] active:translate-x-[1px] active:translate-y-[1px] shrink-0 sm:shrink min-w-[125px] sm:min-w-0",y.style.background="var(--color-primary)",y.style.boxShadow="",y.innerHTML=`${A}<span class="truncate">${w}</span>`)},k=(y,A,w)=>{y&&(y.className="min-h-[44px] py-2.5 px-3 sm:px-2.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border-2 border-slate-900 dark:border-slate-700 shadow-[1.5px_1.5px_0px_#0f172a] dark:shadow-[1.5px_1.5px_0px_#000000] hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-1.5 cursor-pointer active:translate-x-[1px] active:translate-y-[1px] shrink-0 sm:shrink min-w-[125px] sm:min-w-0",y.style.background="",y.style.boxShadow="",y.innerHTML=`${A}<span class="truncate">${w}</span>`)};k(a,'<i class="fa-solid fa-users-gear"></i>',"Staf &amp; Akses"),k(s,'<i class="fa-solid fa-clipboard-user"></i>',"Absensi Tim"),k(r,'<i class="fa-solid fa-hand-holding-dollar"></i>',"Buku Kasbon"),k(i,'<i class="fa-solid fa-money-check-dollar"></i>',"Gaji &amp; Slip"),k(d,'<i class="fa-solid fa-file-invoice-dollar"></i>',"Shift Kasir"),n&&n.classList.add("hidden"),f&&f.classList.add("hidden"),p&&p.classList.add("hidden"),m&&m.classList.add("hidden"),c&&c.classList.add("hidden");let v=a;if(t==="attendance"?(h(s,'<i class="fa-solid fa-clipboard-user text-white"></i>',"Absensi Tim"),v=s,f&&(f.classList.remove("hidden"),He(f))):t==="advances"?(h(r,'<i class="fa-solid fa-hand-holding-dollar text-white"></i>',"Buku Kasbon"),v=r,p&&(p.classList.remove("hidden"),De(p))):t==="payroll"?(h(i,'<i class="fa-solid fa-money-check-dollar text-white"></i>',"Gaji &amp; Slip"),v=i,m&&(m.classList.remove("hidden"),z(m))):t==="shifts"?(h(d,'<i class="fa-solid fa-file-invoice-dollar text-white"></i>',"Shift Kasir"),v=d,c&&(c.classList.remove("hidden"),Re(c))):(h(a,'<i class="fa-solid fa-users-gear text-white"></i>',"Staf &amp; Akses"),v=a,n&&n.classList.remove("hidden")),v)try{v.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})}catch{}},Je=()=>{const t=l("staff-metrics-container");if(!t)return;const e=X(u),a=S.length,s=S.filter(p=>p.isActive!==!1).length,r=S.filter(p=>(p.role===b.CASHIER||!p.role)&&p.isActive!==!1).length,i=S.filter(p=>p.role===b.ADMIN&&p.isActive!==!1).length,d=S.filter(p=>p.role===b.STAFF&&p.isActive!==!1).length,n=S.filter(p=>p.isActive===!1).length,f=S.reduce((p,m)=>p+(parseFloat(m.baseSalary)||0),0)+(parseFloat(e?.baseSalary)||1e7);t.innerHTML=`
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
        <!-- 1. Total Tim & Staf -->
        <div class="p-3 sm:p-3.5 rounded-xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div class="flex items-center justify-between mb-1.5">
                <span class="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Total Tim &amp; Staf</span>
                <div class="w-8 h-8 rounded-lg flex items-center justify-center text-xs text-white shadow-xs shrink-0" style="background-color: var(--color-primary);">
                    <i class="fa-solid fa-users"></i>
                </div>
            </div>
            <p class="text-xl sm:text-2xl font-black text-slate-800 dark:text-white tracking-tight">${s+1} <span class="text-xs font-semibold text-slate-400 dark:text-slate-500">/ ${a+1} Akun</span></p>
            <p class="text-[9px] sm:text-[10px] font-bold text-slate-400 dark:text-slate-500 mt-0.5">${n>0?`${n} Akun Dinonaktifkan`:"Seluruh Tim Aktif"}</p>
        </div>

        <!-- 2. Kasir POS Aktif -->
        <div class="p-3 sm:p-3.5 rounded-xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div class="flex items-center justify-between mb-1.5">
                <span class="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Kasir POS Aktif</span>
                <div class="w-8 h-8 rounded-lg flex items-center justify-center text-xs text-white shadow-xs shrink-0" style="background-color: var(--color-primary);">
                    <i class="fa-solid fa-cash-register"></i>
                </div>
            </div>
            <p class="text-xl sm:text-2xl font-black text-slate-800 dark:text-white tracking-tight">${r} <span class="text-xs font-semibold text-slate-400 dark:text-slate-500">Personel</span></p>
            <p class="text-[9px] sm:text-[10px] font-bold text-slate-400 dark:text-slate-500 mt-0.5">Penjualan Kasir Fisik Toko</p>
        </div>

        <!-- 3. Admin & Logistik -->
        <div class="p-3 sm:p-3.5 rounded-xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div class="flex items-center justify-between mb-1.5">
                <span class="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Admin &amp; Logistik</span>
                <div class="w-8 h-8 rounded-lg flex items-center justify-center text-xs text-white shadow-xs shrink-0" style="background-color: var(--color-primary);">
                    <i class="fa-solid fa-shield-halved"></i>
                </div>
            </div>
            <p class="text-xl sm:text-2xl font-black text-slate-800 dark:text-white tracking-tight">${i+d} <span class="text-xs font-semibold text-slate-400 dark:text-slate-500">Personel</span></p>
            <p class="text-[9px] sm:text-[10px] font-bold text-slate-400 dark:text-slate-500 mt-0.5">${i} Admin • ${d} Staf Gudang</p>
        </div>

        <!-- 4. Beban Gaji Bulanan -->
        <div class="p-3 sm:p-3.5 rounded-xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div class="flex items-center justify-between mb-1.5">
                <span class="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Beban Gaji Pokok</span>
                <div class="w-8 h-8 rounded-lg flex items-center justify-center text-xs text-white shadow-xs shrink-0" style="background-color: var(--color-primary);">
                    <i class="fa-solid fa-money-bill-wave"></i>
                </div>
            </div>
            <p class="text-lg sm:text-xl font-black text-slate-800 dark:text-white tracking-tight">${x(f)}</p>
            <p class="text-[9px] sm:text-[10px] font-bold text-slate-400 dark:text-slate-500 mt-0.5">Total Gaji Tim &amp; Direksi /bln</p>
        </div>
    </div>`},ue=()=>{const t=l("staff-role-filters-bar");if(!t)return;const e=S.length,a=S.filter(n=>n.role===b.ADMIN||n.role===b.OWNER||n.role==="admin"||n.role==="owner").length,s=S.filter(n=>n.role===b.CASHIER||n.role==="cashier"||!n.role).length,r=S.filter(n=>n.role===b.STAFF||n.role==="staff").length,i=S.filter(n=>n.isActive===!1).length,d=[{key:"all",label:"Semua Staf",icon:"fa-users",count:e},{key:"cashier",label:"Kasir POS",icon:"fa-cash-register",count:s},{key:"admin",label:"Admin Toko",icon:"fa-shield-halved",count:a},{key:"staff",label:"Staf Gudang",icon:"fa-user-gear",count:r}];i>0&&d.push({key:"inactive",label:"Nonaktif",icon:"fa-user-slash",count:i}),t.innerHTML=d.map(n=>{const f=G===n.key;return`
        <button onclick="window.filterStaffRole('${n.key}')" id="staff-filter-${n.key}"
            class="staff-filter-btn min-h-[38px] px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-2xs flex items-center gap-1.5 active:scale-95 shrink-0 border ${f?"text-white border-transparent":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200/90 dark:border-slate-700/80 hover:border-slate-300 dark:hover:border-slate-600"}"
            style="${f?"background: var(--color-primary);":""}">
            <i class="fa-solid ${n.icon} text-[10px]"></i>
            <span>${n.label}</span>
            <span class="ml-0.5 px-1.5 py-0.5 rounded-md text-[10px] font-mono ${f?"bg-white/20 text-white":"bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400"}">${n.count}</span>
        </button>`}).join("")},Ve=t=>{G=t,ue(),Q()},ge=t=>{K=(t||"").toLowerCase().trim();const e=l("btn-clear-staff-search");e&&(K?e.classList.remove("hidden"):e.classList.add("hidden")),Q()},Ye=()=>{const t=l("staff-search-input");t&&(t.value="",t.focus()),ge("")},Xe=t=>{if(t.role===b.OWNER)return U.length;if(t.permissions)return Object.values(t.permissions).filter(Boolean).length;const e=N[t.role]||N[b.CASHIER];return Object.values(e).filter(Boolean).length},Q=()=>{const t=l("cashier-list-container");if(!t)return;let e=S;if(G==="admin"?e=e.filter(s=>s.role===b.ADMIN||s.role===b.OWNER||s.role==="admin"||s.role==="owner"):G==="cashier"?e=e.filter(s=>s.role===b.CASHIER||s.role==="cashier"||!s.role):G==="staff"?e=e.filter(s=>s.role===b.STAFF||s.role==="staff"):G==="inactive"&&(e=e.filter(s=>s.isActive===!1)),K){const s=K;e=e.filter(r=>{const i=(r.name||"").toLowerCase(),d=(r.email||"").toLowerCase(),n=(r.employeeId||"").toLowerCase(),f=(r.phone||"").toLowerCase(),p=(r.position||"").toLowerCase();return i.includes(s)||d.includes(s)||n.includes(s)||f.includes(s)||p.includes(s)})}if(e.length===0){t.innerHTML=`
        <div class="flex flex-col items-center justify-center py-16 text-slate-400 dark:text-slate-600 bg-white/95 dark:bg-slate-800/60 rounded-3xl border border-slate-200/90 dark:border-slate-800 p-8 text-center shadow-2xs">
            <div class="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-3 shadow-xs" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary);">
                <i class="fa-solid fa-user-slash"></i>
            </div>
            <h4 class="font-black text-sm text-slate-800 dark:text-slate-200">Tidak ada staf yang cocok</h4>
            <p class="text-xs mt-1 text-slate-400 dark:text-slate-500 max-w-sm">
                ${K?`Tidak ditemukan staf dengan kata kunci "${o(K)}". Silakan ubah filter atau kata kunci.`:"Belum ada akun staf pada kategori ini."}
            </p>
            <div class="mt-4 flex items-center gap-2">
                ${K?`
                <button onclick="window.clearStaffSearch()" class="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-xs font-bold text-slate-700 dark:text-slate-200 transition-all cursor-pointer">
                    Reset Pencarian
                </button>`:""}
                <button onclick="window.openAddStaffModal()" class="px-4 py-2 rounded-xl text-white text-xs font-black shadow-md transition-all cursor-pointer active:scale-95" style="background: var(--color-primary)">
                    <i class="fa-solid fa-plus mr-1"></i> Tambah Staf Baru
                </button>
            </div>
        </div>`;return}const a=e.map((s,r)=>{const i=s.uid,d=s.isActive!==!1,n=s.createdAt?.toDate?s.createdAt.toDate().toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):s.hireDate||"-",f=(s.name||"Staf").trim().split(/\s+/).slice(0,2).map(A=>A[0]).join("").toUpperCase()||"ST",p=s.role||b.CASHIER,m=Xe(s),c=s.employeeId||`EMP-${String(r+1).padStart(3,"0")}`,h=s.position||(p===b.CASHIER?"Kasir POS":p===b.ADMIN?"Admin Operasional":"Staf Gudang & Logistik"),k=parseFloat(s.baseSalary)||0,v=parseFloat(s.dailyAllowance)||0;let y="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25);";return p===b.ADMIN?y="background: rgba(37, 99, 235, 0.12); color: #2563eb; border-color: rgba(37, 99, 235, 0.25);":p===b.STAFF&&(y="background: rgba(217, 119, 6, 0.12); color: #d97706; border-color: rgba(217, 119, 6, 0.25);"),`
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 p-3.5 sm:p-4 bg-white/95 dark:bg-slate-800/95 rounded-xl sm:rounded-2xl border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:border-[rgba(var(--color-primary-rgb),0.3)] transition-all">
            <div class="flex items-start sm:items-center gap-3 sm:gap-3.5 min-w-0 flex-1">
                <div class="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center font-black text-xs sm:text-sm shrink-0 shadow-2xs border" style="${y}">
                    ${f}
                </div>
                <div class="min-w-0 flex-1 space-y-1">
                    <div class="flex items-center gap-2 flex-wrap">
                        <p class="text-sm sm:text-base font-black text-slate-900 dark:text-white truncate">${o(s.name||"Staf")}</p>
                        ${_e(p)}
                        <span class="inline-flex items-center gap-1 font-mono text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700/80 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600">
                            ${o(c)}
                        </span>
                        <span class="inline-flex items-center gap-1.5 text-[10px] font-black px-2.5 py-0.5 rounded-full ${d?"bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60":"bg-slate-100 dark:bg-slate-700 text-slate-500 border border-slate-200 dark:border-slate-600"}">
                            <span class="w-1.5 h-1.5 rounded-full ${d?"bg-emerald-500 animate-pulse":"bg-slate-400"}"></span>
                            ${d?"Aktif":"Nonaktif"}
                        </span>
                    </div>
                    <div class="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300 flex-wrap">
                        <span class="font-bold text-slate-800 dark:text-slate-100">
                            <i class="fa-solid fa-user-tag text-[10px] mr-1" style="color: var(--color-primary)"></i>${o(h)}
                        </span>
                        <span class="text-slate-300 dark:text-slate-600">•</span>
                        <span class="font-black text-emerald-600 dark:text-emerald-400">
                            <i class="fa-solid fa-money-bill-wave text-[10px] mr-1"></i>${x(k)}/bln
                        </span>
                        ${v>0?`<span class="text-[11px] text-slate-500 dark:text-slate-400 font-medium">(+${x(v)}/hr)</span>`:""}
                    </div>
                    <div class="flex items-center gap-3 pt-0.5 text-[11px] text-slate-500 dark:text-slate-400 flex-wrap">
                        <span class="inline-flex items-center gap-1 font-medium"><i class="fa-solid fa-envelope text-[10px] text-slate-400"></i> ${o(s.email||"-")}</span>
                        ${s.phone?`
                        <span class="text-slate-300 dark:text-slate-600">•</span>
                        <a href="https://wa.me/${ze(s.phone)}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 font-bold text-emerald-600 dark:text-emerald-400 hover:underline" title="Kirim Pesan WhatsApp">
                            <i class="fa-brands fa-whatsapp text-[12px]"></i> ${o(s.phone)}
                        </a>`:""}
                        <span class="text-slate-300 dark:text-slate-600">•</span>
                        <span class="inline-flex items-center gap-1 font-bold" style="color: var(--color-primary)">
                            <i class="fa-solid fa-key text-[9px]"></i> ${m} Modul Diizinkan
                        </span>
                        ${s.bankAccount&&s.bankAccount!=="-"?`
                        <span class="text-slate-300 dark:text-slate-600">•</span>
                        <span class="inline-flex items-center gap-1 text-slate-500 dark:text-slate-400">
                            <i class="fa-solid fa-building-columns text-[10px]"></i> ${o(s.bankName)}: ${o(s.bankAccount)}
                        </span>`:""}
                        <span class="text-slate-300 dark:text-slate-600">•</span>
                        <span class="inline-flex items-center gap-1 text-slate-400 dark:text-slate-500"><i class="fa-solid fa-calendar-days text-[10px]"></i> Masuk: ${o(n)}</span>
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
                <button onclick="window.toggleStaffActive('${o(i)}', ${!d})"
                    title="${d?"Nonaktifkan Akun Staf":"Aktifkan Akun Staf"}"
                    class="w-10 h-10 rounded-xl flex items-center justify-center text-xs transition-all active:scale-95 cursor-pointer shadow-2xs border shrink-0 ${d?"bg-slate-50 hover:bg-amber-50 dark:bg-slate-700/80 dark:hover:bg-amber-950/40 text-slate-600 dark:text-slate-300 hover:text-amber-600 border-slate-200/80 dark:border-slate-700 hover:border-amber-300":"bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 border-emerald-200 dark:border-emerald-800"}">
                    <i class="fa-solid ${d?"fa-ban":"fa-circle-check"}"></i>
                </button>
                <button onclick="window.openEditStaffModal('${o(i)}', '${o(s.name||"")}', '${o(s.email||"")}', '${o(p)}')"
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
        </div>`}).join("");t.innerHTML=`
    <div class="space-y-3">${a}</div>
    <div class="flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500 mt-4 px-1">
        <span>Menampilkan <strong>${e.length}</strong> dari <strong>${S.length}</strong> staf</span>
        <button onclick="window.loadStaffList()" class="inline-flex items-center gap-1.5 hover:text-slate-600 dark:hover:text-slate-300 cursor-pointer">
            <i class="fa-solid fa-arrows-rotate text-[10px]"></i> Segarkan Daftar
        </button>
    </div>`},L=async()=>{const t=l("cashier-list-container");if(t)try{let e;try{e=await I.collection("freshmart").doc("cms_data").collection("cashier_accounts").orderBy("createdAt","desc").get()}catch{e=await I.collection("freshmart").doc("cms_data").collection("cashier_accounts").get()}S=e.docs.map((s,r)=>{const i=s.data()||{};return{uid:s.id,...oe({uid:s.id,...i},r)}});const a=S.some(s=>s.isActive!==!1&&s.role===b.CASHIER);try{localStorage.setItem("pos_has_cashier",a?"true":"false"),await I.collection("freshmart").doc("cms_data").set({hasCashier:a},{merge:!0})}catch{}typeof window.updatePOSHeaderIcon=="function"&&window.updatePOSHeaderIcon();try{const s=await I.collection("freshmart").doc("cms_data").get();s.exists&&s.data()?.ownerEmployee&&(u.ownerEmployee=s.data().ownerEmployee)}catch{}u.employees=S.map((s,r)=>oe(s,r)),Je(),ue(),Q()}catch(e){console.error("[StaffAdmin] Gagal memuat daftar staf:",e),t.innerHTML=`
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
        </div>`}},ke=()=>{if(!T("mendaftarkan staf baru"))return;const t=ie(S,"EMP"),e=(a,s,r)=>{const i=U.filter(d=>d.group===a);return`
        <div class="space-y-2">
            <p class="text-[11px] font-black uppercase tracking-wider text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                <i class="fa-solid ${r}" style="color: var(--color-primary)"></i>
                <span>${s}</span>
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                ${i.map(d=>`
                <label class="flex items-start gap-2.5 p-3 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 hover:border-[rgba(var(--color-primary-rgb),0.3)] transition-all cursor-pointer text-left">
                    <input type="checkbox" name="staff_perm" value="${d.key}" class="mt-0.5 rounded border-slate-300 text-[var(--color-primary)] focus:ring-[var(--color-primary)]/30 w-4 h-4 cursor-pointer" style="accent-color: var(--color-primary)">
                    <div class="min-w-0 flex-1">
                        <p class="text-xs font-bold text-slate-800 dark:text-white flex items-center gap-1.5">
                            <i class="fa-solid ${d.icon} text-[10px] text-slate-400"></i>
                            <span>${d.label}</span>
                        </p>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">${d.desc}</p>
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
                            class="btn-input-icon absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer p-1.5" title="Lihat Password">
                            <i id="new-staff-pass-eye" class="fa-solid fa-eye text-sm"></i>
                        </button>
                    </div>
                </div>

                <!-- Pilihan Role Pokok (4 Kolom Responsif) -->
                <div>
                    <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1.5">Role Pokok Sistem <span class="text-rose-500">*</span></label>
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2" id="new-staff-roles-container">
                        <label class="staff-role-card is-role-active flex flex-col items-center justify-center p-3 rounded-2xl border-2 border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.08)] text-slate-900 dark:text-white cursor-pointer shadow-[2px_2px_0px_#0f172a] dark:shadow-[2px_2px_0px_#000000] transition-all text-center">
                            <input type="radio" name="new_staff_role" value="${b.CASHIER}" checked onchange="window.applyNewStaffPreset('${b.CASHIER}')" class="sr-only">
                            <i class="fa-solid fa-cash-register text-lg mb-1" style="color: var(--color-primary)"></i>
                            <span class="text-xs font-black">Kasir POS</span>
                            <span class="text-[9px] text-slate-400 mt-0.5">Penjualan Fisik</span>
                        </label>
                        <label class="staff-role-card flex flex-col items-center justify-center p-3 rounded-2xl border-2 border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 cursor-pointer hover:border-slate-600 shadow-[2px_2px_0px_#0f172a] dark:shadow-[2px_2px_0px_#000000] transition-all text-center">
                            <input type="radio" name="new_staff_role" value="${b.ADMIN}" onchange="window.applyNewStaffPreset('${b.ADMIN}')" class="sr-only">
                            <i class="fa-solid fa-shield-halved text-lg mb-1 text-blue-500"></i>
                            <span class="text-xs font-black">Admin Toko</span>
                            <span class="text-[9px] text-slate-400 mt-0.5">Operasional CMS</span>
                        </label>
                        <label class="staff-role-card flex flex-col items-center justify-center p-3 rounded-2xl border-2 border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 cursor-pointer hover:border-slate-600 shadow-[2px_2px_0px_#0f172a] dark:shadow-[2px_2px_0px_#000000] transition-all text-center">
                            <input type="radio" name="new_staff_role" value="${b.STAFF}" onchange="window.applyNewStaffPreset('${b.STAFF}')" class="sr-only">
                            <i class="fa-solid fa-user-gear text-lg mb-1 text-amber-500"></i>
                            <span class="text-xs font-black">Staf Gudang</span>
                            <span class="text-[9px] text-slate-400 mt-0.5">Logistik &amp; Rak</span>
                        </label>
                        <label class="staff-role-card flex flex-col items-center justify-center p-3 rounded-2xl border-2 border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 cursor-pointer hover:border-slate-600 shadow-[2px_2px_0px_#0f172a] dark:shadow-[2px_2px_0px_#000000] transition-all text-center">
                            <input type="radio" name="new_staff_role" value="manager" onchange="window.applyNewStaffPreset('manager')" class="sr-only">
                            <i class="fa-solid fa-user-tie text-lg mb-1 text-purple-500"></i>
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
                        <span class="text-[10px] font-mono px-2 py-0.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 font-bold border border-emerald-300 dark:border-emerald-800/60 shadow-[1px_1px_0px_#0f172a] dark:shadow-[1px_1px_0px_#000000] whitespace-nowrap shrink-0">
                            Master HR
                        </span>
                    </div>

                    <!-- Datalist Jabatan Terstandar -->
                    <datalist id="staff-positions-datalist">
                        ${Y.map(a=>`<option value="${o(a.label||a)}"></option>`).join("")}
                    </datalist>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div>
                            <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">ID Karyawan</label>
                            <input id="new-staff-empid" type="text" value="${o(t)}" placeholder="EMP-001"
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
                                ${de.map(a=>`<option value="${a.key}">${o(a.label)}</option>`).join("")}
                            </select>
                        </div>
                        <div>
                            <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Metode Pencairan Gaji</label>
                            <select id="new-staff-payment-method" class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-3 py-2 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold focus:outline-none focus:border-[var(--color-primary)] shadow-2xs">
                                ${ce.map(a=>`<option value="${a.key}">${o(a.label)}</option>`).join("")}
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
    </div>`),window.applyNewStaffPreset(b.CASHIER),typeof window.pushModalHistory=="function"&&window.pushModalHistory("addStaff"),setTimeout(()=>{const a=l("add-staff-modal-box");a&&a.classList.remove("scale-95");const s=l("new-staff-name");s&&s.focus()},10)},ee=(t=!1)=>{const e=()=>{const a=l("add-staff-modal");if(a){const s=l("new-staff-name");s&&(s.value="");const r=l("new-staff-email");r&&(r.value="");const i=l("new-staff-pass");i&&(i.value=""),a.style.opacity="0",setTimeout(()=>a.remove(),200)}};typeof window.requestCloseModal=="function"?window.requestCloseModal("addStaff",t,e):e()},Ze=t=>{const e=N[t]||N[b.CASHIER];document.querySelectorAll('#add-staff-modal input[name="staff_perm"]').forEach(r=>{r.checked=!!e[r.value]}),document.querySelectorAll('#add-staff-modal input[name="new_staff_role"]').forEach(r=>{const i=r.closest("label");i&&(r.value===t?i.className="staff-role-card is-role-active flex flex-col items-center justify-center p-3 rounded-2xl border-2 border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.08)] text-slate-900 dark:text-white cursor-pointer shadow-[2.5px_2.5px_0px_#0f172a] dark:shadow-[2.5px_2.5px_0px_#000000] transition-all text-center":i.className="staff-role-card flex flex-col items-center justify-center p-3 rounded-2xl border-2 border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 cursor-pointer hover:border-slate-600 shadow-[2px_2px_0px_#0f172a] dark:shadow-[2px_2px_0px_#000000] transition-all text-center")});const a=l("new-staff-position"),s=Y.map(r=>r.label||r);a&&(!a.value||s.includes(a.value))&&(t===b.STAFF?a.value="Staf Gudang & Penataan Rak":t===b.ADMIN?a.value="Admin Operasional & Inventori":t==="manager"?a.value="Kepala Toko / Manager":a.value="Kasir POS")},Qe=t=>{document.querySelectorAll('#add-staff-modal input[name="staff_perm"]').forEach(e=>{e.checked=!!t})},ve=async()=>{if(!T("mendaftarkan staf baru"))return;const t=l("new-staff-name")?.value?.trim()||"",e=l("new-staff-email")?.value?.trim()||"",a=l("new-staff-pass")?.value||"",s=document.querySelector('#add-staff-modal input[name="new_staff_role"]:checked'),r=s?s.value:b.CASHIER,i=r==="manager"?b.ADMIN:r,d=l("new-staff-empid")?.value?.trim()||ie(S,"EMP"),n=l("new-staff-position")?.value?.trim()||(i===b.STAFF?"Staf Gudang & Logistik":i===b.ADMIN?"Admin Operasional":"Kasir POS"),f=l("new-staff-phone")?.value?.trim()||"",p=Math.max(0,parseFloat(l("new-staff-salary")?.value)||0),m=Math.max(0,parseFloat(l("new-staff-allowance")?.value)||0),c=l("new-staff-status")?.value||"permanent",h=l("new-staff-payment-method")?.value||"cash",k=l("new-staff-bank-account")?.value?.trim()||"-",v=l("new-staff-bank-holder")?.value?.trim()||t,y=h==="cash"?"Tunai Kas Laci Toko":h.toUpperCase()||"Bank",A=l("add-staff-error"),w=l("save-staff-btn"),g=$=>{A&&(A.textContent=$,A.classList.remove("hidden"))};if((()=>{A&&A.classList.add("hidden")})(),!t){g("Nama staf wajib diisi.");return}if(!e||!e.includes("@")){g("Email login tidak valid.");return}if(a.length<6){g("Password minimal 6 karakter.");return}const E={};U.forEach($=>{const P=document.querySelector(`#add-staff-modal input[name="staff_perm"][value="${$.key}"]`);E[$.key]=P?P.checked:!1}),w&&(w.disabled=!0,w.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i>Mendaftarkan ke Firebase...'),B("Mendaftarkan akun staf...");try{const P=(_.apps.find(re=>re.name==="pos-cashier-creator")||_.initializeApp(window.FIREBASE_CONFIG||_.app().options,"pos-cashier-creator")).auth(),D=(await P.createUserWithEmailAndPassword(e,a)).user?.uid;if(!D)throw new Error("UID tidak diterima dari Firebase");if(await P.signOut(),await I.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(D).set({uid:D,employeeId:d,name:t,email:e,phone:f,role:i,position:n,baseSalary:p,dailyAllowance:m,employmentStatus:c,paymentMethod:h,bankName:y,bankAccount:k,bankHolder:v,permissions:E,isActive:!0,createdAt:_.firestore.FieldValue.serverTimestamp(),createdBy:pe.currentUser?.uid||"owner"}),i===b.CASHIER)try{localStorage.setItem("pos_has_cashier","true"),await I.collection("freshmart").doc("cms_data").set({hasCashier:!0},{merge:!0})}catch{}const W=l("new-staff-pass");W&&(W.value="");const te=l("new-staff-name");te&&(te.value="");const se=l("new-staff-email");se&&(se.value=""),ee(),M(`Akun "${t}" (${i.toUpperCase()}) berhasil didaftarkan!`,"success"),await L(),typeof window.updatePOSHeaderIcon=="function"&&window.updatePOSHeaderIcon()}catch($){console.error("[StaffAdmin] Gagal membuat akun staf:",$);const P=$.code==="permission-denied"||$.message&&$.message.toLowerCase().includes("permission"),j=$.code||"";g(P?"Akses Ditolak Firebase: Hanya akun Owner yang berwenang menambahkan staf ke Firestore.":j==="auth/email-already-in-use"?"Email sudah digunakan oleh akun lain di Firebase.":j==="auth/invalid-email"?"Format email tidak valid.":j==="auth/weak-password"?"Password terlalu lemah (min. 6 karakter).":"Gagal mendaftarkan: "+($.message||"Terjadi kesalahan sistem")),w&&(w.disabled=!1,w.innerHTML='<i class="fa-solid fa-floppy-disk mr-2"></i>Simpan &amp; Daftarkan Staf')}finally{F()}},ea=t=>{if(!T("mengatur hak akses staf"))return;const e=S.find(r=>r.uid===t);if(!e){M("Data staf tidak ditemukan!");return}const a=e.permissions||N[e.role]||N[b.CASHIER],s=(r,i,d)=>{const n=U.filter(f=>f.group===r);return`
        <div class="space-y-2">
            <p class="text-[11px] font-black uppercase tracking-wider text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                <i class="fa-solid ${d}" style="color: var(--color-primary)"></i>
                <span>${i}</span>
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                ${n.map(f=>{const p=a[f.key]===!0;return`
                    <label class="flex items-start gap-2.5 p-3 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 hover:border-[rgba(var(--color-primary-rgb),0.3)] transition-all cursor-pointer text-left">
                        <input type="checkbox" name="edit_staff_perm" value="${f.key}" ${p?"checked":""} class="mt-0.5 rounded border-slate-300 text-[var(--color-primary)] focus:ring-[var(--color-primary)]/30 w-4 h-4 cursor-pointer" style="accent-color: var(--color-primary)">
                        <div class="min-w-0 flex-1">
                            <p class="text-xs font-bold text-slate-800 dark:text-white flex items-center gap-1.5">
                                <i class="fa-solid ${f.icon} text-[10px] text-slate-400"></i>
                                <span>${f.label}</span>
                            </p>
                            <p class="text-[10px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">${f.desc}</p>
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
                        <button type="button" onclick="window.applyEditStaffPreset('${b.CASHIER}')" class="py-2.5 px-2 rounded-xl text-xs font-bold bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 hover:border-emerald-500 hover:text-emerald-600 transition-all active:scale-95 shadow-2xs flex items-center justify-center gap-1.5 cursor-pointer">
                            <i class="fa-solid fa-cash-register text-[11px] text-emerald-500"></i>
                            <span>Kasir POS</span>
                        </button>
                        <button type="button" onclick="window.applyEditStaffPreset('${b.ADMIN}')" class="py-2.5 px-2 rounded-xl text-xs font-bold bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 hover:border-blue-500 hover:text-blue-600 transition-all active:scale-95 shadow-2xs flex items-center justify-center gap-1.5 cursor-pointer">
                            <i class="fa-solid fa-shield-halved text-[11px] text-blue-500"></i>
                            <span>Admin Ops</span>
                        </button>
                        <button type="button" onclick="window.applyEditStaffPreset('manager')" class="py-2.5 px-2 rounded-xl text-xs font-bold bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all active:scale-95 shadow-2xs flex items-center justify-center gap-1.5 cursor-pointer">
                            <i class="fa-solid fa-user-tie text-[11px]" style="color: var(--color-primary)"></i>
                            <span>Manajer</span>
                        </button>
                        <button type="button" onclick="window.applyEditStaffPreset('${b.OWNER}')" class="py-2.5 px-2 rounded-xl text-xs font-bold bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 hover:border-amber-500 hover:text-amber-600 transition-all active:scale-95 shadow-2xs flex items-center justify-center gap-1.5 cursor-pointer">
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
                <button onclick="window.saveStaffPermissions('${o(t)}')" id="save-perms-btn"
                    class="flex-[2] min-h-[48px] py-3.5 rounded-2xl text-white font-black text-sm shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    style="background: var(--color-primary)">
                    <i class="fa-solid fa-floppy-disk"></i> Simpan Hak Akses
                </button>
            </div>
        </div>
    </div>`),typeof window.pushModalHistory=="function"&&window.pushModalHistory("permissions"),setTimeout(()=>{const r=l("permissions-modal-box");r&&r.classList.remove("scale-95")},10)},he=(t=!1)=>{const e=()=>{const a=l("permissions-modal");a&&(a.style.opacity="0",setTimeout(()=>a.remove(),200))};typeof window.requestCloseModal=="function"?window.requestCloseModal("permissions",t,e):e()},aa=t=>{const e=N[t]||N[b.CASHIER];document.querySelectorAll('#permissions-modal input[name="edit_staff_perm"]').forEach(a=>{a.checked=!!e[a.value]})},ta=t=>{document.querySelectorAll('#permissions-modal input[name="edit_staff_perm"]').forEach(e=>{e.checked=!!t})},sa=async t=>{if(!T("mengubah hak akses staf"))return;const e=l("save-perms-btn");e&&(e.disabled=!0,e.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i>Menyimpan...'),B("Memperbarui hak akses...");try{const a={};U.forEach(r=>{const i=document.querySelector(`#permissions-modal input[name="edit_staff_perm"][value="${r.key}"]`);a[r.key]=i?i.checked:!1});let s=b.CASHIER;(a.orders||a.products||a.suppliers||a.purchases)&&(s=b.ADMIN),await I.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(t).set({permissions:a,role:s,updatedAt:_.firestore.FieldValue.serverTimestamp()},{merge:!0}),he(),M("Hak akses berhasil diperbarui!","success"),await L()}catch(a){console.error("[StaffAdmin] Gagal menyimpan hak akses:",a),a.code==="permission-denied"||a.message&&a.message.toLowerCase().includes("permission")?M("Izin Ditolak Firebase: Pastikan login dengan Akun Owner dan aturan firestore.rules sudah dipublikasikan di Firebase Console.","error"):M("Gagal memperbarui hak akses: "+(a.message||"Terjadi kesalahan sistem"),"error"),e&&(e.disabled=!1,e.innerHTML='<i class="fa-solid fa-floppy-disk mr-2"></i>Simpan Hak Akses')}finally{F()}},ye=(t,e,a,s)=>{if(!T("mengubah profil staf"))return;const r=S.find(g=>g.uid===t)||{},i=e||r.name||"",d=a||r.email||"",n=s||r.role||b.CASHIER,f=r.employeeId||"EMP-001",p=r.position||(n===b.CASHIER?"Kasir POS":n===b.ADMIN?"Admin Operasional":"Staf Gudang & Logistik"),m=r.phone||"",c=r.baseSalary||0,h=r.dailyAllowance||0,k=r.employmentStatus||"permanent",v=r.paymentMethod||"cash",y=r.bankName||"BCA",A=r.bankAccount&&r.bankAccount!=="-"?r.bankAccount:"",w=r.bankHolder||i;document.body.insertAdjacentHTML("beforeend",`
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
                            <span class="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">${o(f)}</span>
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
                    ${Y.map(g=>`<option value="${o(g.label||g)}"></option>`).join("")}
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
                            <option value="${b.CASHIER}" ${n===b.CASHIER?"selected":""}>Kasir POS (Penjualan)</option>
                            <option value="${b.ADMIN}" ${n===b.ADMIN?"selected":""}>Admin Toko (Operasional CMS)</option>
                            <option value="${b.STAFF}" ${n===b.STAFF?"selected":""}>Staf Gudang &amp; Logistik</option>
                            <option value="${b.OWNER}" ${n===b.OWNER?"selected":""}>Co-Owner / Wakil Owner</option>
                        </select>
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">ID Karyawan</label>
                        <input id="edit-staff-empid" type="text" value="${o(f)}"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-3.5 py-2 bg-slate-50 dark:bg-slate-800/70 font-mono font-bold text-slate-800 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)]">
                    </div>
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Jabatan Resmi</label>
                        <input id="edit-staff-position" list="edit-staff-positions-datalist" type="text" value="${o(p)}"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-3.5 py-2 bg-white dark:bg-slate-800 font-bold text-slate-900 dark:text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.2)] shadow-2xs">
                    </div>
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">No. WhatsApp / HP</label>
                        <input id="edit-staff-phone" type="tel" value="${o(m)}" placeholder="081234567890"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-3.5 py-2 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.2)] shadow-2xs">
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Gaji Pokok Bulanan (Rp)</label>
                        <input id="edit-staff-salary" type="number" min="0" step="50000" value="${c}"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-3.5 py-2 bg-white dark:bg-slate-800 font-bold text-emerald-600 dark:text-emerald-400 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.2)] shadow-2xs">
                    </div>
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Tunjangan Harian / Uang Makan (Rp/Hari)</label>
                        <input id="edit-staff-allowance" type="number" min="0" step="5000" value="${h}"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-3.5 py-2 bg-white dark:bg-slate-800 font-bold text-slate-800 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.2)] shadow-2xs">
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Status Hubungan Kerja</label>
                        <select id="edit-staff-status" class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-3 py-2 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold focus:outline-none focus:border-[var(--color-primary)] shadow-2xs">
                            ${de.map(g=>`<option value="${g.key}" ${k===g.key?"selected":""}>${o(g.label)}</option>`).join("")}
                        </select>
                    </div>
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Metode Bayar Gaji</label>
                        <select id="edit-staff-payment-method" class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-3 py-2 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold focus:outline-none focus:border-[var(--color-primary)] shadow-2xs">
                            ${ce.map(g=>`<option value="${g.key}" ${v===g.key?"selected":""}>${o(g.label)}</option>`).join("")}
                        </select>
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Bank</label>
                        <input id="edit-staff-bank-name" type="text" value="${o(y)}" placeholder="BCA / BRI"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-3.5 py-2 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)] shadow-2xs">
                    </div>
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">No. Rekening</label>
                        <input id="edit-staff-bank-account" type="text" value="${o(A)}" placeholder="1234567890"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-3.5 py-2 bg-white dark:bg-slate-800 font-mono text-slate-800 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)] shadow-2xs">
                    </div>
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Atas Nama Rekening</label>
                        <input id="edit-staff-bank-holder" type="text" value="${o(w)}" placeholder="Nama Pemilik"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-3.5 py-2 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)] shadow-2xs">
                    </div>
                </div>

                <div>
                    <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Email Login (Permanen)</label>
                    <input type="email" value="${o(d)}" disabled
                        class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 text-slate-400 cursor-not-allowed">
                </div>
                <div id="edit-staff-error" class="hidden text-xs text-rose-600 font-semibold p-2.5 bg-rose-50 dark:bg-rose-900/20 rounded-2xl border border-rose-200 dark:border-rose-800"></div>
            </div>

            <div class="p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800 flex gap-3 shrink-0 bg-slate-50/50 dark:bg-slate-900/50 pb-[max(1rem,env(safe-area-inset-bottom))]">
                <button onclick="window.closeEditStaffModal()"
                    class="flex-1 min-h-[48px] py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95 transition-all cursor-pointer">
                    Batal
                </button>
                <button onclick="window.updateStaffProfile('${o(t)}')" id="update-staff-btn"
                    class="flex-[2] min-h-[48px] py-3.5 rounded-2xl text-white font-black text-sm shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    style="background: var(--color-primary)">
                    <i class="fa-solid fa-floppy-disk"></i> Simpan Profil &amp; HR
                </button>
            </div>
        </div>
    </div>`),typeof window.pushModalHistory=="function"&&window.pushModalHistory("editStaff"),setTimeout(()=>{const g=l("edit-staff-modal-box");g&&g.classList.remove("scale-95")},10)},ae=(t=!1)=>{const e=()=>{const a=l("edit-staff-modal");a&&(a.style.opacity="0",setTimeout(()=>a.remove(),200))};typeof window.requestCloseModal=="function"?window.requestCloseModal("editStaff",t,e):e()},ra=async t=>{if(!T("mengubah profil staf"))return;const e=l("edit-staff-name")?.value?.trim()||"",a=l("edit-staff-role")?.value||b.CASHIER,s=l("edit-staff-empid")?.value?.trim()||"EMP-001",r=l("edit-staff-position")?.value?.trim()||"Staf Toko",i=l("edit-staff-phone")?.value?.trim()||"",d=Math.max(0,parseFloat(l("edit-staff-salary")?.value)||0),n=Math.max(0,parseFloat(l("edit-staff-allowance")?.value)||0),f=l("edit-staff-status")?.value||"permanent",p=l("edit-staff-payment-method")?.value||"cash",m=l("edit-staff-bank-name")?.value?.trim()||(p==="cash"?"Tunai Kas Laci Toko":p.toUpperCase()||"Bank"),c=l("edit-staff-bank-account")?.value?.trim()||"-",h=l("edit-staff-bank-holder")?.value?.trim()||e,k=l("edit-staff-error"),v=l("update-staff-btn");if(!e){k&&(k.textContent="Nama staf tidak boleh kosong.",k.classList.remove("hidden"));return}v&&(v.disabled=!0,v.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i>Menyimpan...'),B("Memperbarui profil staf...");try{await I.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(t).set({name:e,role:a,employeeId:s,position:r,phone:i,baseSalary:d,dailyAllowance:n,employmentStatus:f,paymentMethod:p,bankName:m,bankAccount:c,bankHolder:h,updatedAt:_.firestore.FieldValue.serverTimestamp()},{merge:!0}),ae(),M("Profil staf & data HR berhasil diperbarui!","success"),await L()}catch(y){const w=y.code==="permission-denied"||y.message&&y.message.toLowerCase().includes("permission")?"Izin ditolak oleh Firebase (Khusus Akun Owner).":y.message;k&&(k.textContent="Gagal memperbarui: "+w,k.classList.remove("hidden")),v&&(v.disabled=!1,v.innerHTML='<i class="fa-solid fa-floppy-disk mr-2"></i>Simpan')}finally{F()}},oa=()=>{if(!T("mengatur profil dan gaji owner"))return;const t=X(u),e=l("modal-owner-hr");e&&e.remove(),document.body.insertAdjacentHTML("beforeend",`
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
                        <input id="owner-hr-empid" type="text" value="${o(t.employeeId||"OWN-001")}"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-500 font-mono font-bold cursor-not-allowed" readonly>
                    </div>
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Nama Pemilik / Direktur <span class="text-rose-500">*</span></label>
                        <input id="owner-hr-name" type="text" value="${o(t.name||"Pemilik Toko")}"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] text-slate-900 dark:text-white font-bold transition-all shadow-2xs">
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Jabatan Resmi</label>
                        <input id="owner-hr-position" type="text" value="${o(t.position||"Owner / Direktur Utama")}"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] text-slate-900 dark:text-white transition-all shadow-2xs">
                    </div>
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">No. WhatsApp Pribadi</label>
                        <input id="owner-hr-phone" type="tel" value="${o(t.phone||"")}" placeholder="081234567890"
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
                            <input id="owner-hr-bank-name" type="text" value="${o(t.bankName||"BCA")}" placeholder="BCA / Mandiri / BRI"
                                class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] text-slate-900 dark:text-white transition-all shadow-2xs">
                        </div>
                        <div>
                            <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Nomor Rekening</label>
                            <input id="owner-hr-bank-account" type="text" value="${o(t.bankAccount&&t.bankAccount!=="-"?t.bankAccount:"")}" placeholder="1234567890"
                                class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] text-slate-900 dark:text-white font-mono transition-all shadow-2xs">
                        </div>
                        <div>
                            <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Atas Nama Rekening</label>
                            <input id="owner-hr-bank-holder" type="text" value="${o(t.bankHolder||t.name||"")}" placeholder="Nama Pemilik"
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
                    style="background: var(--color-primary);">
                    <i class="fa-solid fa-floppy-disk"></i> Simpan Kompensasi Owner
                </button>
            </div>
        </div>
    </div>`),typeof window.pushModalHistory=="function"&&window.pushModalHistory("ownerHr"),setTimeout(()=>{const a=l("owner-hr-modal-box");a&&a.classList.remove("scale-95")},10)},we=(t=!1)=>{const e=()=>{const a=l("modal-owner-hr");a&&(a.style.opacity="0",setTimeout(()=>a.remove(),200))};typeof window.requestCloseModal=="function"?window.requestCloseModal("ownerHr",t,e):e()},la=async()=>{if(!T("menyimpan kompensasi owner"))return;const t=l("owner-hr-name")?.value?.trim()||"Pemilik Toko",e=l("owner-hr-position")?.value?.trim()||"Owner / Direktur Utama",a=l("owner-hr-phone")?.value?.trim()||"",s=Math.max(0,parseFloat(l("owner-hr-salary")?.value)||0),r=Math.max(0,parseFloat(l("owner-hr-allowance")?.value)||0),i=l("owner-hr-bank-name")?.value?.trim()||"BCA",d=l("owner-hr-bank-account")?.value?.trim()||"-",n=l("owner-hr-bank-holder")?.value?.trim()||t,f=l("owner-hr-error"),p=l("save-owner-hr-btn");p&&(p.disabled=!0,p.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i>Menyimpan ke Cloud...'),B("Menyimpan data kompensasi owner...");try{const m={employeeId:"OWN-001",name:t,position:e,phone:a,baseSalary:s,dailyAllowance:r,employmentStatus:"permanent",bankName:i,bankAccount:d,bankHolder:n,role:b.OWNER,isActive:!0,updatedAt:_.firestore.FieldValue.serverTimestamp()};await I.collection("freshmart").doc("cms_data").set({ownerEmployee:m},{merge:!0}),u.ownerEmployee=m,we(),M("Data kompensasi Owner berhasil diperbarui!","success"),await fe()}catch(m){console.error("[OwnerHr] Gagal menyimpan data owner:",m),f&&(f.textContent="Gagal menyimpan: "+(m.message||"Terjadi kesalahan sistem"),f.classList.remove("hidden")),p&&(p.disabled=!1,p.innerHTML='<i class="fa-solid fa-floppy-disk mr-2"></i>Simpan Kompensasi Owner')}finally{F()}},Ae=async(t,e)=>{if(T("mengubah status aktif staf")){B(e?"Mengaktifkan staf...":"Menonaktifkan staf...");try{await I.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(t).set({isActive:e,updatedAt:_.firestore.FieldValue.serverTimestamp()},{merge:!0}),M(e?"Akun staf diaktifkan":"Akun staf dinonaktifkan","success"),await L()}catch(a){a.code==="permission-denied"||a.message&&a.message.toLowerCase().includes("permission")?M("Akses Ditolak: Hanya akun Owner yang berwenang mengubah status staf.","error"):M("Gagal mengubah status staf: "+a.message,"error")}finally{F()}}},Se=(t,e)=>{T("menghapus akun staf")&&Ie("Hapus Akun Staf",`Yakin hapus akun staf "${e}"? Akun tidak dapat dipulihkan dan staf tidak dapat login lagi ke toko.`,async()=>{B("Menghapus akun staf...");try{await I.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(t).delete(),M(`Akun "${e}" berhasil dihapus`,"success"),await L()}catch(a){a.code==="permission-denied"||a.message&&a.message.toLowerCase().includes("permission")?M("Akses Ditolak: Hanya akun Owner yang berwenang menghapus staf.","error"):M("Gagal menghapus staf: "+a.message,"error")}finally{F()}},"Ya, Hapus",!0)},$e=t=>{const e=l(t),a=l(t+"-eye");e&&(e.type==="password"?(e.type="text",a&&(a.className="fa-solid fa-eye-slash text-sm")):(e.type="password",a&&(a.className="fa-solid fa-eye text-sm")))},na=ke,ia=ee,da=ve,ca=(t,e,a)=>ye(t,e,a,b.CASHIER),pa=ae,xa=Ae,ba=Se,fa=L,ma=$e;typeof window<"u"&&(window.renderCashierAccounts=fe,window.switchCashierTab=qe,window.initCashierAdminTabsSlider=me,window.filterStaffRole=Ve,window.handleStaffSearch=ge,window.clearStaffSearch=Ye,window.loadStaffList=L,window.openAddStaffModal=ke,window.closeAddStaffModal=ee,window.applyNewStaffPreset=Ze,window.setAllNewStaffPerms=Qe,window.saveStaffAccount=ve,window.openPermissionsModal=ea,window.closePermissionsModal=he,window.applyEditStaffPreset=aa,window.setAllEditStaffPerms=ta,window.saveStaffPermissions=sa,window.openEditStaffModal=ye,window.closeEditStaffModal=ae,window.updateStaffProfile=ra,window.openOwnerHrModal=oa,window.closeOwnerHrModal=we,window.saveOwnerHrProfile=la,window.toggleStaffActive=Ae,window.deleteStaffAccount=Se,window.toggleStaffPassVisibility=$e,window.verifyOwnerAuthority=T,window.openAddCashierModal=na,window.closeAddCashierModal=ia,window.saveCashierAccount=da,window.openEditCashierModal=ca,window.closeEditCashierModal=pa,window.toggleCashierActive=xa,window.deleteCashierAccount=ba,window.loadCashierList=fa,window.toggleCashierPassVisibility=ma);export{aa as applyEditStaffPreset,Ze as applyNewStaffPreset,Ye as clearStaffSearch,ia as closeAddCashierModal,ee as closeAddStaffModal,pa as closeEditCashierModal,ae as closeEditStaffModal,we as closeOwnerHrModal,he as closePermissionsModal,ba as deleteCashierAccount,Se as deleteStaffAccount,Ve as filterStaffRole,ge as handleStaffSearch,me as initCashierAdminTabsSlider,fa as loadCashierList,L as loadStaffList,na as openAddCashierModal,ke as openAddStaffModal,ca as openEditCashierModal,ye as openEditStaffModal,oa as openOwnerHrModal,ea as openPermissionsModal,fe as renderCashierAccounts,da as saveCashierAccount,la as saveOwnerHrProfile,ve as saveStaffAccount,sa as saveStaffPermissions,ta as setAllEditStaffPerms,Qe as setAllNewStaffPerms,qe as switchCashierTab,xa as toggleCashierActive,ma as toggleCashierPassVisibility,Ae as toggleStaffActive,$e as toggleStaffPassVisibility,ra as updateStaffProfile,T as verifyOwnerAuthority};

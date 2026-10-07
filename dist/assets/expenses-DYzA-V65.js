import{e as i,f as x,v as j,a as b,H as _,l as B,n as y,k as p,o as O,m as K,b as H,i as E}from"./module-print-Nd5nEehY.js";import{z as N,E as f}from"./module-admin-C7-WwVh0.js";import{a as G}from"./module-member-gRtjjlHc.js";import"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";import"./module-pos-D7KaOau2.js";import"./vendor-sortable-DzmX_rHT.js";import"./module-faq-DqNv1y_c.js";const g=[{key:"cash",label:"Kas Laci Toko (Tunai)",shortLabel:"Kas Toko",icon:"fa-money-bill-wave",color:"emerald"},{key:"bank",label:"Transfer Rekening Bank",shortLabel:"Transfer Bank",icon:"fa-building-columns",color:"blue"},{key:"owner",label:"Dana Pribadi / Talangan Owner",shortLabel:"Dana Owner",icon:"fa-user-shield",color:"purple"}],P=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];let w=new Date().getFullYear(),h=new Date().getMonth()+1,S="all",T="all",$="",k="newest";const z=()=>"exp_"+Date.now()+"_"+Math.random().toString(36).substring(2,7),m=t=>{const e=["","Satu","Dua","Tiga","Empat","Lima","Enam","Tujuh","Delapan","Sembilan","Sepuluh","Sebelas"];return t=Math.floor(Math.abs(Number(t)||0)),t<12?e[t]:t<20?m(t-10)+" Belas":t<100?m(Math.floor(t/10))+" Puluh "+m(t%10):t<200?"Seratus "+m(t-100):t<1e3?m(Math.floor(t/100))+" Ratus "+m(t%100):t<2e3?"Seribu "+m(t-1e3):t<1e6?m(Math.floor(t/1e3))+" Ribu "+m(t%1e3):t<1e9?m(Math.floor(t/1e6))+" Juta "+m(t%1e6):t<1e12?m(Math.floor(t/1e9))+" Miliar "+m(t%1e9):"Jumlah Sangat Besar"},C=t=>{if(!t)return"-";try{const e=t.split("-");if(e.length===3){const s=parseInt(e[0],10),n=parseInt(e[1],10);return`${parseInt(e[2],10)} ${P[n-1]||""} ${s}`}const a=new Date(t);return isNaN(a.getTime())?t:`${a.getDate()} ${P[a.getMonth()]} ${a.getFullYear()}`}catch{return t}},L=()=>{const t=document.querySelector("#admin-content #modal-expense-form");t&&t.remove();const e=document.querySelector("#admin-content #modal-expense-receipt-preview");if(e&&e.remove(),!i("modal-expense-form")){const a=document.createElement("div");a.id="modal-expense-form",a.className="fixed inset-0 z-[150] flex hidden items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/75 opacity-0 transition-opacity duration-300 overflow-hidden",a.onclick=s=>{s.target===a&&window.closeExpenseModal?.()},a.innerHTML=`
            <div id="modal-expense-form-box" class="modal-bottom-sheet relative flex max-h-[84dvh] sm:max-h-[82dvh] w-full max-w-lg translate-y-full sm:translate-y-8 transform flex-col overflow-hidden rounded-t-[1.75rem] sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300" onclick="event.stopPropagation()">
                <!-- Pull Indicator for Mobile Bottom Sheet -->
                <div class="pull-indicator sm:hidden" style="margin: 8px auto 2px;"></div>

                <!-- Compact Sticky Header Modal -->
                <div class="px-4 sm:px-5 py-2.5 sm:py-3 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0 bg-white dark:bg-slate-900">
                    <div class="flex items-center gap-2.5">
                        <div class="w-8 h-8 rounded-xl text-white flex items-center justify-center text-xs shrink-0" style="background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark)); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.35);">
                            <i class="fa-solid fa-money-bill-transfer"></i>
                        </div>
                        <div>
                            <h3 class="text-xs sm:text-sm font-black text-slate-800 dark:text-white" id="modal-expense-title">Catat Pengeluaran Baru</h3>
                            <p class="text-[9px] text-slate-400 font-medium">Buku Kas &amp; Beban Operasional Toko</p>
                        </div>
                    </div>
                    <button type="button" onclick="closeExpenseModal()" class="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer">
                        <i class="fa-solid fa-xmark text-sm"></i>
                    </button>
                </div>

                <!-- Form Container with Full-height Flex Column -->
                <form id="form-expense-entry" onsubmit="event.preventDefault(); window.submitExpenseForm();" class="flex-1 flex flex-col overflow-hidden min-h-0">
                    <input type="hidden" id="exp-input-id" value="">

                    <!-- Scrollable Body (Independent scroll container) -->
                    <div id="expense-form-scroll-container" class="custom-scrollbar p-3.5 sm:p-4 overflow-y-auto flex-1 space-y-3 min-h-0">
                        <!-- Baris 1: Tanggal & Kategori (2 Kolom Presisi) -->
                        <div class="grid grid-cols-2 gap-2">
                            <div>
                                <label class="block text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                                    <i class="fa-regular fa-calendar mr-0.5" style="color: var(--color-primary)"></i> Tanggal <span style="color: var(--color-primary)">*</span>
                                </label>
                                <input type="date" id="exp-input-date" required class="w-full text-xs font-bold bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-2.5 py-1.5 text-slate-800 dark:text-white focus:outline-hidden focus:border-[var(--color-primary)] transition-colors">
                            </div>
                            <div>
                                <label class="block text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                                    <i class="fa-solid fa-tags mr-0.5" style="color: var(--color-primary)"></i> Kategori <span style="color: var(--color-primary)">*</span>
                                </label>
                                <select id="exp-input-category" required class="w-full text-xs font-bold bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-2 py-1.5 text-slate-800 dark:text-white focus:outline-hidden focus:border-[var(--color-primary)] transition-colors cursor-pointer">
                                    ${f.map(s=>`<option value="${s.key}">${s.label}</option>`).join("")}
                                </select>
                            </div>
                        </div>

                        <!-- Baris 2: Nominal Pengeluaran + Quick Chips -->
                        <div>
                            <div class="flex items-center justify-between mb-1">
                                <label class="block text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                                    <i class="fa-solid fa-rupiah-sign mr-0.5" style="color: var(--color-primary)"></i> Nominal Pengeluaran <span style="color: var(--color-primary)">*</span>
                                </label>
                                <span class="text-[10px] font-black" style="color: var(--color-primary)" id="exp-nominal-preview">Rp 0</span>
                            </div>
                            <div class="relative">
                                <span class="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-black text-slate-400">Rp</span>
                                <input type="text" id="exp-input-amount" inputmode="numeric" placeholder="0" required oninput="window.handleExpenseAmountInput(this)" class="w-full pl-9 pr-3 py-2 text-sm font-black bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-hidden focus:border-[var(--color-primary)] transition-colors">
                            </div>
                            <!-- Quick Nominal Chips -->
                            <div class="flex flex-wrap items-center gap-1 mt-1.5">
                                <span class="text-[8.5px] font-bold text-slate-400 uppercase tracking-wider mr-0.5">Cepat:</span>
                                <button type="button" onclick="window.addQuickExpenseAmount(10000)" class="px-1.5 py-0.5 text-[9px] font-bold rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] text-slate-700 dark:text-slate-300 active:scale-95 transition-all cursor-pointer">+10 rb</button>
                                <button type="button" onclick="window.addQuickExpenseAmount(25000)" class="px-1.5 py-0.5 text-[9px] font-bold rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] text-slate-700 dark:text-slate-300 active:scale-95 transition-all cursor-pointer">+25 rb</button>
                                <button type="button" onclick="window.addQuickExpenseAmount(50000)" class="px-1.5 py-0.5 text-[9px] font-bold rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] text-slate-700 dark:text-slate-300 active:scale-95 transition-all cursor-pointer">+50 rb</button>
                                <button type="button" onclick="window.addQuickExpenseAmount(100000)" class="px-1.5 py-0.5 text-[9px] font-bold rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] text-slate-700 dark:text-slate-300 active:scale-95 transition-all cursor-pointer">+100 rb</button>
                                <button type="button" onclick="window.addQuickExpenseAmount(500000)" class="px-1.5 py-0.5 text-[9px] font-bold rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] text-slate-700 dark:text-slate-300 active:scale-95 transition-all cursor-pointer">+500 rb</button>
                            </div>
                        </div>

                        <!-- Baris 3: Keperluan / Deskripsi Pengeluaran -->
                        <div>
                            <label class="block text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                                <i class="fa-solid fa-align-left mr-0.5" style="color: var(--color-primary)"></i> Keperluan / Uraian Beban <span style="color: var(--color-primary)">*</span>
                            </label>
                            <textarea id="exp-input-desc" rows="2" required placeholder="Contoh: Beli lakban cokelat 5 roll, isi ulang galon, token listrik..." class="w-full text-xs font-medium bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl p-2.5 text-slate-800 dark:text-white focus:outline-hidden focus:border-[var(--color-primary)] transition-colors resize-none"></textarea>
                        </div>

                        <!-- Baris 4: Sumber Pembayaran Dana (3 Card Presisi) -->
                        <div>
                            <label class="block text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                                <i class="fa-solid fa-wallet mr-0.5" style="color: var(--color-primary)"></i> Sumber Dana <span style="color: var(--color-primary)">*</span>
                            </label>
                            <div class="grid grid-cols-3 gap-1.5" id="exp-source-selector">
                                ${g.map(s=>`
                                    <div data-source-key="${s.key}" onclick="window.selectExpenseSource('${s.key}')" class="relative flex flex-col items-center justify-center p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/70 dark:bg-slate-800/50 cursor-pointer text-center transition-all hover:border-slate-400 select-none group active:scale-95 shadow-2xs">
                                        <input type="radio" name="exp_source" value="${s.key}" class="sr-only" ${s.key==="cash"?"checked":""}>
                                        <i class="fa-solid ${s.icon} text-sm mb-1 text-slate-500 transition-colors"></i>
                                        <span class="text-[10px] font-black text-slate-800 dark:text-slate-200 leading-tight transition-colors">${s.shortLabel}</span>
                                    </div>
                                `).join("")}
                            </div>
                        </div>

                        <!-- Baris 5: Toko/Vendor & Dicatat Oleh (2 Kolom Presisi) -->
                        <div class="grid grid-cols-2 gap-2">
                            <div>
                                <label class="block text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                                    <i class="fa-solid fa-store mr-0.5" style="color: var(--color-primary)"></i> Vendor <span class="text-[8.5px] text-slate-400 lowercase">(opsional)</span>
                                </label>
                                <input type="text" id="exp-input-recipient" placeholder="Toko Plastik, PLN, dll" class="w-full text-xs font-semibold bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-2.5 py-1.5 text-slate-800 dark:text-white focus:outline-hidden focus:border-[var(--color-primary)] transition-colors">
                            </div>
                            <div>
                                <label class="block text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                                    <i class="fa-solid fa-user-pen mr-0.5" style="color: var(--color-primary)"></i> Dicatat <span class="text-[8.5px] text-slate-400 lowercase">(opsional)</span>
                                </label>
                                <input type="text" id="exp-input-createdby" placeholder="Owner / Kasir" class="w-full text-xs font-semibold bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-2.5 py-1.5 text-slate-800 dark:text-white focus:outline-hidden focus:border-[var(--color-primary)] transition-colors">
                            </div>
                        </div>

                        <!-- Baris 6: Foto Bukti Struk / Nota (Upload & Preview Ringkas) -->
                        <div>
                            <label class="block text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                                <i class="fa-solid fa-receipt mr-0.5" style="color: var(--color-primary)"></i> Foto Bukti Nota <span class="text-[8.5px] text-slate-400 lowercase">(opsional)</span>
                            </label>
                            <div class="flex items-center gap-2.5">
                                <div id="exp-receipt-preview-box" class="w-12 h-12 rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden shrink-0 relative group">
                                    <i class="fa-regular fa-image text-slate-400 text-base" id="exp-receipt-placeholder-icon"></i>
                                    <img id="exp-receipt-preview-img" src="" alt="Bukti Struk" class="w-full h-full object-cover hidden">
                                    <button type="button" id="exp-receipt-remove-btn" onclick="window.removeExpenseReceiptPhoto()" class="absolute inset-0 bg-slate-900/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hidden cursor-pointer">
                                        <i class="fa-solid fa-trash-can text-xs text-rose-400"></i>
                                    </button>
                                </div>
                                <div class="flex-1 space-y-1 min-w-0">
                                    <input type="hidden" id="exp-input-receipt-url" value="">
                                    <div class="flex items-center gap-1.5 flex-wrap">
                                        <label class="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-[11px] font-bold cursor-pointer transition-colors flex items-center gap-1 active:scale-95 shrink-0">
                                            <i class="fa-solid fa-camera text-[10px]" style="color: var(--color-primary)"></i>
                                            <span>Foto / File</span>
                                            <input type="file" accept="image/*" class="sr-only" onchange="window.handleExpenseReceiptUpload(this)">
                                        </label>
                                        <span class="text-[9px] text-slate-400 shrink-0">Maks. 5MB</span>
                                    </div>
                                    <input type="url" id="exp-input-receipt-manual" placeholder="Atau tempel URL gambar..." oninput="window.setExpenseReceiptUrl(this.value)" class="w-full text-[10px] bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-lg px-2 py-1 text-slate-700 dark:text-slate-300 focus:outline-hidden">
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Sticky Docked Action Footer on Mobile & Desktop -->
                    <div class="px-4 py-2.5 sm:py-3 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shrink-0 flex items-center justify-end gap-2 z-10" style="padding-bottom: max(0.65rem, env(safe-area-inset-bottom))">
                        <button type="button" onclick="closeExpenseModal()" class="h-9 sm:h-10 px-4 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer">
                            Batal
                        </button>
                        <button type="submit" id="btn-save-expense" class="h-9 sm:h-10 px-5 rounded-xl text-white text-xs font-black transition-all cursor-pointer active:scale-95 flex items-center gap-1.5 hover:opacity-95" style="background: var(--color-primary); box-shadow: 0 2px 10px rgba(var(--color-primary-rgb), 0.35);">
                            <i class="fa-solid fa-floppy-disk text-xs"></i>
                            <span>Simpan Pengeluaran</span>
                        </button>
                    </div>
                </form>
            </div>
        `,document.body.appendChild(a)}if(!i("modal-expense-receipt-preview")){const a=document.createElement("div");a.id="modal-expense-receipt-preview",a.className="fixed inset-0 z-[160] flex hidden items-center justify-center p-4 bg-slate-950/90 opacity-0 transition-opacity duration-300",a.onclick=s=>{s.target===a&&window.closeExpenseReceiptPreview?.()},a.innerHTML=`
            <div id="modal-expense-receipt-preview-box" class="relative max-w-3xl max-h-[90vh] bg-slate-900 rounded-2xl border border-slate-800 p-2 shadow-2xl flex flex-col items-center justify-center transform scale-95 transition-all duration-300" onclick="event.stopPropagation()">
                <button type="button" onclick="closeExpenseReceiptPreview()" class="absolute -top-3 -right-3 w-9 h-9 rounded-full text-white flex items-center justify-center shadow-lg cursor-pointer z-10 hover:opacity-95" style="background: var(--color-primary); box-shadow: 0 4px 12px rgba(var(--color-primary-rgb), 0.4);">
                    <i class="fa-solid fa-xmark"></i>
                </button>
                <img id="img-full-receipt" src="" alt="Bukti Nota" class="max-h-[82vh] w-auto max-w-full rounded-xl object-contain">
                <p id="caption-full-receipt" class="text-xs text-slate-300 font-bold mt-2 text-center"></p>
            </div>
        `,document.body.appendChild(a)}},F=()=>(Array.isArray(b.expenses)?b.expenses:[]).filter(e=>{if(!e||!e.date)return!1;const[a,s]=e.date.split("-"),n=parseInt(a,10),r=parseInt(s,10);if(w&&n!==w||h!==0&&r!==h||S!=="all"&&e.category!==S||T!=="all"&&e.source!==T)return!1;if($&&$.trim()){const o=$.toLowerCase().trim(),l=(e.desc||"").toLowerCase().includes(o),d=(e.recipient||"").toLowerCase().includes(o),c=(e.category||"").toLowerCase().includes(o),u=(e.amount||"").toString().includes(o);if(!l&&!d&&!c&&!u)return!1}return!0}).sort((e,a)=>{if(k==="highest")return(a.amount||0)-(e.amount||0);if(k==="lowest")return(e.amount||0)-(a.amount||0);if(k==="oldest")return(new Date(e.date).getTime()||0)-(new Date(a.date).getTime()||0);const s=(new Date(a.date).getTime()||0)-(new Date(e.date).getTime()||0);return s!==0?s:(a.createdAt||0)-(e.createdAt||0)}),Q=()=>{const t=F();let e=0;const a={cash:0,bank:0,owner:0},s={};f.forEach(l=>{s[l.key]=0}),t.forEach(l=>{const d=parseFloat(l.amount)||0;e+=d;const c=l.source||"cash";a[c]!==void 0?a[c]+=d:a.cash+=d;const u=l.category||"lainnya";s[u]!==void 0?s[u]+=d:s.lainnya+=d});let n="lainnya",r=0;Object.entries(s).forEach(([l,d])=>{d>r&&(r=d,n=l)});const o=f.find(l=>l.key===n)||f[6];return{count:t.length,totalAmount:e,bySource:a,byCategory:s,topCategory:{...o,amount:r,percent:e>0?(r/e*100).toFixed(0):"0"}}},I=()=>{L();const t=Q(),e=F(),a=h===0?`Tahun ${w}`:`${P[h-1]} ${w}`,s=new Date().getFullYear(),n=[s-2,s-1,s,s+1];H("admin-content",`
        <div class="space-y-6 pb-12">
            <!-- 1. TOP APP BAR & QUICK ACTION -->
            <div class="rounded-2xl border border-[rgba(var(--color-primary-rgb),0.2)] bg-gradient-to-br from-white via-white to-[rgba(var(--color-primary-rgb),0.04)] dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
                <div class="flex items-center gap-3.5">
                    <div class="w-12 h-12 rounded-2xl text-white flex items-center justify-center text-xl shrink-0" style="background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark)); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                        <i class="fa-solid fa-money-bill-transfer"></i>
                    </div>
                    <div>
                        <div class="flex items-center gap-2">
                            <h2 class="text-base sm:text-lg font-black text-slate-800 dark:text-white">Buku Kas &amp; Biaya Operasional</h2>
                            <span class="px-2.5 py-0.5 rounded-full text-[10px] font-black border" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25);">
                                ${t.count} Transaksi
                            </span>
                        </div>
                        <p class="text-xs text-slate-400 font-medium mt-0.5">Pencatatan nota beban harian &amp; alokasi petty cash toko</p>
                    </div>
                </div>

                <!-- Tombol Aksi Utama -->
                <div class="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
                    <button type="button" onclick="window.exportExpensesToCsv()" class="flex-1 sm:flex-initial px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95">
                        <i class="fa-solid fa-file-excel text-emerald-600"></i>
                        <span>Ekspor Excel</span>
                    </button>
                    <button type="button" onclick="openExpenseModal()" class="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl text-white text-xs font-black transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95 hover:opacity-95" style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                        <i class="fa-solid fa-plus"></i>
                        <span>Catat Pengeluaran</span>
                    </button>
                </div>
            </div>

            <!-- 2. BENTO STAT CARDS -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <!-- Card 1: Total Beban Periode Ini -->
                <div class="p-4 sm:p-5 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900 shadow-2xs hover:-translate-y-0.5 hover:shadow-md transition-all flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">Total Biaya Operasional</span>
                        <div class="w-7 h-7 rounded-xl flex items-center justify-center text-xs shrink-0" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);"><i class="fa-solid fa-calculator"></i></div>
                    </div>
                    <div class="my-1">
                        <p class="text-lg sm:text-2xl font-black truncate" style="color: var(--color-primary);">${x(t.totalAmount)}</p>
                        <p class="text-[10px] text-slate-400 mt-0.5">${a} (${t.count} nota)</p>
                    </div>
                    <div class="mt-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-[10px] text-slate-500 dark:text-slate-400 flex items-center justify-between">
                        <span>Mengurangi Laba Kotor</span>
                        <i class="fa-solid fa-arrow-trend-down text-slate-400"></i>
                    </div>
                </div>

                <!-- Card 2: Beban Terbesar -->
                <div class="p-4 sm:p-5 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900 shadow-2xs hover:-translate-y-0.5 hover:shadow-md transition-all flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">Beban Terbesar</span>
                        <div class="w-7 h-7 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center text-xs shrink-0"><i class="fa-solid fa-crown"></i></div>
                    </div>
                    <div class="my-1">
                        <p class="text-sm sm:text-base font-black text-slate-800 dark:text-white truncate" title="${t.totalAmount>0?t.topCategory.label:"Belum Ada Transaksi"}">${t.totalAmount>0?t.topCategory.label:"Belum Ada Transaksi"}</p>
                        <p class="text-xs sm:text-sm font-bold text-amber-600 dark:text-amber-400 mt-0.5">${t.totalAmount>0?x(t.topCategory.amount):"Rp 0"}</p>
                    </div>
                    <div class="mt-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-[10px] text-slate-400 flex items-center justify-between">
                        <span>Porsi Alokasi</span>
                        <span class="font-bold text-slate-700 dark:text-slate-300">${t.topCategory.percent}%</span>
                    </div>
                </div>

                <!-- Card 3: Kas Laci Toko (Tunai Petty Cash) -->
                <div class="p-4 sm:p-5 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900 shadow-2xs hover:-translate-y-0.5 hover:shadow-md transition-all flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-[10px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Kas Laci Toko (Tunai)</span>
                        <div class="w-7 h-7 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs shrink-0"><i class="fa-solid fa-money-bill-wave"></i></div>
                    </div>
                    <div class="my-1">
                        <p class="text-base sm:text-xl font-black text-slate-800 dark:text-white truncate">${x(t.bySource.cash)}</p>
                        <p class="text-[10px] text-slate-400 mt-0.5">Uang fisik dari kasir</p>
                    </div>
                    <div class="mt-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-[10px] text-slate-400 flex items-center justify-between">
                        <span>Porsi Tunai</span>
                        <span class="font-bold text-emerald-600 dark:text-emerald-400">${t.totalAmount>0?(t.bySource.cash/t.totalAmount*100).toFixed(0):"0"}%</span>
                    </div>
                </div>

                <!-- Card 4: Transfer Bank & Talangan Owner -->
                <div class="p-4 sm:p-5 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900 shadow-2xs hover:-translate-y-0.5 hover:shadow-md transition-all flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-[10px] font-black uppercase tracking-widest text-blue-600 dark:text-blue-400">Bank &amp; Dana Owner</span>
                        <div class="w-7 h-7 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs shrink-0"><i class="fa-solid fa-building-columns"></i></div>
                    </div>
                    <div class="my-1">
                        <p class="text-base sm:text-xl font-black text-slate-800 dark:text-white truncate">${x(t.bySource.bank+t.bySource.owner)}</p>
                        <p class="text-[10px] text-slate-400 mt-0.5">Bank: ${x(t.bySource.bank)} | Owner: ${x(t.bySource.owner)}</p>
                    </div>
                    <div class="mt-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-[10px] text-slate-400 flex items-center justify-between">
                        <span>Non-Tunai</span>
                        <span class="font-bold text-blue-600 dark:text-blue-400">${t.totalAmount>0?((t.bySource.bank+t.bySource.owner)/t.totalAmount*100).toFixed(0):"0"}%</span>
                    </div>
                </div>
            </div>

            <!-- 3. DISTRIBUSI KATEGORI BEBAN (HORIZONTAL MINI PROGRESS) -->
            <div class="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 sm:p-5 space-y-3 shadow-2xs">
                <div class="flex items-center justify-between">
                    <h3 class="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-white flex items-center gap-2">
                        <i class="fa-solid fa-chart-pie" style="color: var(--color-primary)"></i> Alokasi Kategori Biaya Operasional
                    </h3>
                    <button type="button" onclick="openAdminTab('reports')" class="text-[11px] font-bold flex items-center gap-1 transition-opacity hover:opacity-80" style="color: var(--color-primary)">
                        <span>Lihat di Laba Rugi</span>
                        <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                    </button>
                </div>
                <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
                    ${f.map(r=>{const o=t.byCategory[r.key]||0,l=t.totalAmount>0?(o/t.totalAmount*100).toFixed(0):"0";return`
                            <div class="p-3 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 flex flex-col justify-between">
                                <div class="flex items-center justify-between mb-1">
                                    <span class="text-[9px] font-bold text-slate-500 dark:text-slate-400 uppercase truncate">${r.label.split(" ")[0]}</span>
                                    <i class="fa-solid ${r.icon} text-[10px] text-slate-400"></i>
                                </div>
                                <p class="text-xs font-black text-slate-800 dark:text-white truncate">${x(o)}</p>
                                <div class="mt-2 w-full bg-slate-200 dark:bg-slate-700 h-1 rounded-full overflow-hidden">
                                    <div class="h-full rounded-full" style="width: ${l}%; background: var(--color-primary);"></div>
                                </div>
                                <span class="text-[9px] font-bold text-slate-400 mt-1 text-right">${l}%</span>
                            </div>
                        `}).join("")}
                </div>
            </div>

            <!-- 4. FILTER BAR -->
            <div class="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 space-y-3">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
                    <!-- Filter Tahun -->
                    <div>
                        <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Tahun</label>
                        <select onchange="window.setExpenseFilter('year', this.value)" class="w-full text-xs font-bold bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-slate-800 dark:text-white focus:outline-hidden">
                            ${n.map(r=>`<option value="${r}" ${r===w?"selected":""}>${r}</option>`).join("")}
                        </select>
                    </div>

                    <!-- Filter Bulan -->
                    <div>
                        <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Bulan</label>
                        <select onchange="window.setExpenseFilter('month', this.value)" class="w-full text-xs font-bold bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-slate-800 dark:text-white focus:outline-hidden">
                            <option value="0" ${h===0?"selected":""}>Semua Bulan (Setahun)</option>
                            ${P.map((r,o)=>`<option value="${o+1}" ${o+1===h?"selected":""}>${r}</option>`).join("")}
                        </select>
                    </div>

                    <!-- Filter Kategori -->
                    <div>
                        <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Kategori</label>
                        <select onchange="window.setExpenseFilter('category', this.value)" class="w-full text-xs font-bold bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-slate-800 dark:text-white focus:outline-hidden">
                            <option value="all" ${S==="all"?"selected":""}>Semua Kategori</option>
                            ${f.map(r=>`<option value="${r.key}" ${r.key===S?"selected":""}>${r.label}</option>`).join("")}
                        </select>
                    </div>

                    <!-- Filter Sumber Pembayaran -->
                    <div>
                        <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Sumber Dana</label>
                        <select onchange="window.setExpenseFilter('source', this.value)" class="w-full text-xs font-bold bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-slate-800 dark:text-white focus:outline-hidden">
                            <option value="all" ${T==="all"?"selected":""}>Semua Sumber</option>
                            ${g.map(r=>`<option value="${r.key}" ${r.key===T?"selected":""}>${r.label}</option>`).join("")}
                        </select>
                    </div>

                    <!-- Filter Urutan / Sort -->
                    <div>
                        <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Urutkan</label>
                        <select onchange="window.setExpenseFilter('sort', this.value)" class="w-full text-xs font-bold bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-slate-800 dark:text-white focus:outline-hidden">
                            <option value="newest" ${k==="newest"?"selected":""}>Tanggal Terbaru</option>
                            <option value="oldest" ${k==="oldest"?"selected":""}>Tanggal Terlama</option>
                            <option value="highest" ${k==="highest"?"selected":""}>Nominal Terbesar</option>
                            <option value="lowest" ${k==="lowest"?"selected":""}>Nominal Terkecil</option>
                        </select>
                    </div>
                </div>

                <!-- Input Pencarian Bebas -->
                <div class="relative">
                    <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"><i class="fa-solid fa-magnifying-glass text-xs"></i></span>
                    <input type="text" value="${E($)}" placeholder="Cari keterangan, keperluan, atau nama toko/vendor..." oninput="window.setExpenseFilter('search', this.value)" class="w-full pl-9 pr-8 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white focus:outline-hidden">
                    ${$?`<button type="button" onclick="window.setExpenseFilter('search', '')" class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"><i class="fa-solid fa-xmark text-xs"></i></button>`:""}
                </div>
            </div>

            <!-- 5. DAFTAR BUKU KAS PENGELUARAN (LEDGER TABLE & CARDS) -->
            <div class="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xs">
                <div class="px-5 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <div>
                        <h3 class="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-white">Buku Kas Pengeluaran Operasional</h3>
                        <p class="text-[10px] text-slate-400 mt-0.5">Menampilkan ${e.length} dari total ${(b.expenses||[]).length} catatan</p>
                    </div>
                    <span class="text-xs font-black" style="color: var(--color-primary);">${x(t.totalAmount)}</span>
                </div>

                ${e.length===0?`
                    <!-- Empty State -->
                    <div class="py-16 px-4 text-center flex flex-col items-center justify-center">
                        <div class="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-3 shrink-0" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);">
                            <i class="fa-solid fa-receipt"></i>
                        </div>
                        <h4 class="text-sm font-bold text-slate-700 dark:text-slate-200">Belum Ada Catatan Biaya Operasional</h4>
                        <p class="text-xs text-slate-400 max-w-sm mt-1">Belum ada transaksi pengeluaran operasional yang dicatat untuk filter periode ini.</p>
                        <button type="button" onclick="openExpenseModal()" class="mt-4 px-5 py-2.5 rounded-xl text-white text-xs font-bold transition-all cursor-pointer flex items-center gap-2 active:scale-95 hover:opacity-95" style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                            <i class="fa-solid fa-plus"></i>
                            <span>Catat Pengeluaran Pertama</span>
                        </button>
                    </div>
                `:`
                    <!-- Desktop Table (>= 768px) -->
                    <div class="hidden md:block overflow-x-auto">
                        <table class="w-full text-left text-xs">
                            <thead class="bg-slate-50/80 dark:bg-slate-800/60 text-[10px] uppercase font-bold text-slate-500 border-b border-slate-100 dark:border-slate-800">
                                <tr>
                                    <th class="py-3 px-4">Tanggal</th>
                                    <th class="py-3 px-4">Kategori Beban</th>
                                    <th class="py-3 px-4">Keperluan &amp; Penerima</th>
                                    <th class="py-3 px-4">Sumber Pembayaran</th>
                                    <th class="py-3 px-4 text-center">Bukti Nota</th>
                                    <th class="py-3 px-4 text-right">Nominal Keluar</th>
                                    <th class="py-3 px-4 text-center">Aksi</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                                ${e.map(r=>{const o=f.find(c=>c.key===r.category)||f[6],l=g.find(c=>c.key===r.source)||g[0],d=!!r.receiptImg;return`
                                        <tr class="hover:bg-slate-50/60 dark:hover:bg-slate-800/30 transition-colors">
                                            <td class="py-3.5 px-4 font-bold text-slate-700 dark:text-slate-300 whitespace-nowrap">
                                                <div class="flex items-center gap-2">
                                                    <i class="fa-regular fa-calendar text-slate-400"></i>
                                                    <span>${C(r.date)}</span>
                                                </div>
                                            </td>
                                            <td class="py-3.5 px-4">
                                                <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                                                    <i class="fa-solid ${o.icon}" style="color: var(--color-primary)"></i>
                                                    <span>${o.label}</span>
                                                </span>
                                            </td>
                                            <td class="py-3.5 px-4">
                                                <p class="font-bold text-slate-800 dark:text-white">${E(r.desc)}</p>
                                                ${r.recipient?`<p class="text-[10px] text-slate-400 mt-0.5"><i class="fa-solid fa-store mr-1 text-slate-300"></i>Penerima: <span class="font-semibold text-slate-600 dark:text-slate-300">${E(r.recipient)}</span></p>`:""}
                                            </td>
                                            <td class="py-3.5 px-4">
                                                <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold ${r.source==="cash"?"bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 border border-emerald-200 dark:border-emerald-800/50":r.source==="bank"?"bg-blue-50 dark:bg-blue-950/40 text-blue-600 border border-blue-200 dark:border-blue-800/50":"bg-purple-50 dark:bg-purple-950/40 text-purple-600 border border-purple-200 dark:border-purple-800/50"}">
                                                    <i class="fa-solid ${l.icon} text-[9px]"></i>
                                                    <span>${l.shortLabel}</span>
                                                </span>
                                            </td>
                                            <td class="py-3.5 px-4 text-center">
                                                ${d?`
                                                    <button type="button" onclick="window.previewExpenseReceipt('${r.id}')" title="Lihat Foto Struk" class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-600 dark:text-amber-400 transition-colors cursor-pointer">
                                                        <i class="fa-solid fa-image text-xs"></i>
                                                    </button>
                                                `:'<span class="text-[10px] text-slate-300 dark:text-slate-600">-</span>'}
                                            </td>
                                            <td class="py-3.5 px-4 text-right whitespace-nowrap">
                                                <span class="font-black text-slate-800 dark:text-slate-100 text-sm">- ${x(r.amount)}</span>
                                            </td>
                                            <td class="py-3.5 px-4 text-center whitespace-nowrap">
                                                <div class="inline-flex items-center gap-1.5">
                                                    <button type="button" onclick="window.printExpenseSlip('${r.id}')" title="Cetak Bukti Kas Keluar (BKK)" class="w-7 h-7 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center transition-colors cursor-pointer">
                                                        <i class="fa-solid fa-print text-xs"></i>
                                                    </button>
                                                    <button type="button" onclick="window.openExpenseModal('${r.id}')" title="Edit Pengeluaran" class="w-7 h-7 rounded-lg text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/40 flex items-center justify-center transition-colors cursor-pointer">
                                                        <i class="fa-solid fa-pen-to-square text-xs"></i>
                                                    </button>
                                                    <button type="button" onclick="window.confirmDeleteExpense('${r.id}')" title="Hapus Pengeluaran" class="w-7 h-7 rounded-lg text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 flex items-center justify-center transition-colors cursor-pointer">
                                                        <i class="fa-solid fa-trash-can text-xs"></i>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    `}).join("")}
                            </tbody>
                        </table>
                    </div>

                    <!-- Mobile Cards (< 768px) -->
                    <div class="md:hidden divide-y divide-slate-100 dark:divide-slate-800">
                        ${e.map(r=>{const o=f.find(c=>c.key===r.category)||f[6],l=g.find(c=>c.key===r.source)||g[0],d=!!r.receiptImg;return`
                                <div class="p-4 space-y-2.5">
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center gap-2">
                                            <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                                                <i class="fa-solid ${o.icon} text-[9px]" style="color: var(--color-primary)"></i>
                                                <span>${o.label}</span>
                                            </span>
                                            <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold ${r.source==="cash"?"bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600":r.source==="bank"?"bg-blue-50 dark:bg-blue-950/40 text-blue-600":"bg-purple-50 dark:bg-purple-950/40 text-purple-600"}">
                                                <i class="fa-solid ${l.icon} text-[8px]"></i>
                                                <span>${l.shortLabel}</span>
                                            </span>
                                        </div>
                                        <span class="text-[10px] text-slate-400 font-bold">${C(r.date)}</span>
                                    </div>

                                    <div>
                                        <p class="text-xs font-black text-slate-800 dark:text-white leading-snug">${E(r.desc)}</p>
                                        ${r.recipient?`<p class="text-[10px] text-slate-400 mt-0.5"><i class="fa-solid fa-store mr-1 text-slate-300"></i>Penerima: ${E(r.recipient)}</p>`:""}
                                    </div>

                                    <div class="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800/60">
                                        <div class="flex items-center gap-2">
                                            <span class="text-sm font-black text-slate-800 dark:text-white">- ${x(r.amount)}</span>
                                            ${d?`
                                                <button type="button" onclick="window.previewExpenseReceipt('${r.id}')" class="px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 text-[10px] font-bold flex items-center gap-1 cursor-pointer">
                                                    <i class="fa-solid fa-image text-[9px]"></i> Nota
                                                </button>
                                            `:""}
                                        </div>
                                        <div class="flex items-center gap-1">
                                            <button type="button" onclick="window.printExpenseSlip('${r.id}')" title="Cetak BKK" class="w-8 h-8 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white flex items-center justify-center active:scale-90">
                                                <i class="fa-solid fa-print text-xs"></i>
                                            </button>
                                            <button type="button" onclick="window.openExpenseModal('${r.id}')" title="Edit" class="w-8 h-8 rounded-lg text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/40 flex items-center justify-center active:scale-90">
                                                <i class="fa-solid fa-pen-to-square text-xs"></i>
                                            </button>
                                            <button type="button" onclick="window.confirmDeleteExpense('${r.id}')" title="Hapus" class="w-8 h-8 rounded-lg text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 flex items-center justify-center active:scale-90">
                                                <i class="fa-solid fa-trash-can text-xs"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            `}).join("")}
                    </div>
                `}
            </div>
        </div>
    `)},R=t=>{const e=document.getElementById("exp-source-selector");if(!e)return;e.querySelectorAll("[data-source-key]").forEach(s=>{const n=s.getAttribute("data-source-key"),r=s.querySelector('input[type="radio"]'),o=s.querySelector("i"),l=s.querySelector("span"),d=n===t;r&&(r.checked=d),d?(s.classList.add("is-source-active"),s.style.borderColor="var(--color-primary)",s.style.backgroundColor="rgba(var(--color-primary-rgb), 0.12)",s.style.boxShadow="0 0 0 1.5px var(--color-primary), 0 2px 10px rgba(var(--color-primary-rgb), 0.25)",o&&(o.style.color="var(--color-primary)",o.classList.remove("text-slate-500")),l&&(l.style.color="var(--color-primary)")):(s.classList.remove("is-source-active"),s.style.borderColor="",s.style.backgroundColor="",s.style.boxShadow="",o&&(o.style.color="",o.classList.add("text-slate-500")),l&&(l.style.color=""))})};window.selectExpenseSource=R;const Y=(t=null)=>{L();const e=i("modal-expense-form"),a=i("modal-expense-form-box"),s=i("modal-expense-title"),n=i("btn-save-expense"),r=i("expense-form-scroll-container");if(!(!e||!a)){if(t){const o=(b.expenses||[]).find(l=>l.id===t);if(!o)return p("Data pengeluaran tidak ditemukan!");s&&(s.innerText="Edit Catatan Pengeluaran"),n&&(n.querySelector("span").innerText="Perbarui Pengeluaran"),i("exp-input-id").value=o.id,i("exp-input-date").value=o.date||new Date().toISOString().split("T")[0],i("exp-input-category").value=o.category||"lainnya",i("exp-input-amount").value=new Intl.NumberFormat("id-ID").format(o.amount||0),i("exp-nominal-preview").innerText=x(o.amount||0),i("exp-input-desc").value=o.desc||"",i("exp-input-recipient").value=o.recipient||"",i("exp-input-createdby").value=o.createdBy||"",i("exp-input-receipt-url").value=o.receiptImg||"",i("exp-input-receipt-manual").value=o.receiptImg||"",R(o.source||"cash"),D(o.receiptImg||"")}else s&&(s.innerText="Catat Pengeluaran Baru"),n&&(n.querySelector("span").innerText="Simpan Pengeluaran"),i("exp-input-id").value="",i("exp-input-date").value=new Date().toISOString().split("T")[0],i("exp-input-category").value="kemasan",i("exp-input-amount").value="",i("exp-nominal-preview").innerText="Rp 0",i("exp-input-desc").value="",i("exp-input-recipient").value="",i("exp-input-createdby").value="Owner",i("exp-input-receipt-url").value="",i("exp-input-receipt-manual").value="",R("cash"),D("");r&&(r.scrollTop=0),e.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("expenseForm"),document.body.classList.add("overflow-hidden"),O(e,a)}},U=(t=!1)=>{const e=i("modal-expense-form"),a=i("modal-expense-form-box");e&&(document.body.classList.remove("overflow-hidden"),!t&&typeof window.requestCloseModal=="function"?window.requestCloseModal("expenseForm",!1,()=>{j(e,a,()=>{})}):j(e,a,()=>{}))},J=t=>{let e=t.value.replace(/[^0-9]/g,"");const a=parseInt(e,10)||0;t.value=e?new Intl.NumberFormat("id-ID").format(a):"",setIn("exp-nominal-preview",x(a))},V=t=>{const e=i("exp-input-amount");if(!e)return;let a=parseInt(e.value.replace(/[^0-9]/g,""),10)||0;a+=t,e.value=new Intl.NumberFormat("id-ID").format(a),setIn("exp-nominal-preview",x(a))},D=t=>{i("exp-receipt-preview-box");const e=i("exp-receipt-placeholder-icon"),a=i("exp-receipt-preview-img"),s=i("exp-receipt-remove-btn");t?(a&&(a.src=K(t),a.classList.remove("hidden")),e&&e.classList.add("hidden"),s&&s.classList.remove("hidden")):(a&&(a.src="",a.classList.add("hidden")),e&&e.classList.remove("hidden"),s&&s.classList.add("hidden"))},M=t=>{const e=(t||"").trim();i("exp-input-receipt-url").value=e,D(e)},W=()=>{i("exp-input-receipt-url").value="",i("exp-input-receipt-manual").value="",D(""),p("Foto struk dihapus")},X=async t=>{const e=t.files[0];if(e){if(!e.type.startsWith("image/"))return t.value="",p("Hanya file gambar (JPG, PNG, WEBP) yang diperbolehkan!");B("Memproses foto nota...");try{const a=await Z(e,1e3,.75),s=window.GAS_UPLOAD_URL||G;if(s&&!s.includes("ISI_DENGAN")){B("Mengunggah foto nota ke Google Drive...");try{const n={name:"EXP_NOTA_"+Date.now()+".jpg",mimeType:"image/jpeg",data:a.split(",")[1],token:"B7qgwFQqtYLpBqdaK69HgtCfR7s5t67p"},o=await(await fetch(s,{method:"POST",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify(n)})).json();if(o&&o.status==="success"&&o.url){y(),M(o.url),i("exp-input-receipt-manual").value=o.url,p("Foto nota berhasil diunggah!");return}}catch(n){console.warn("[Expenses] Gagal upload ke GAS, menggunakan kompresi lokal:",n)}}y(),M(a),p("Foto nota tersimpan!")}catch(a){y(),p("Gagal memproses gambar: "+a.message)}}},Z=(t,e=1e3,a=.75)=>new Promise((s,n)=>{const r=new FileReader;r.readAsDataURL(t),r.onload=o=>{const l=new Image;l.src=o.target.result,l.onload=()=>{let d=l.width,c=l.height;(d>e||c>e)&&(d>c?(c=Math.round(c*e/d),d=e):(d=Math.round(d*e/c),c=e));const u=document.createElement("canvas");u.width=d,u.height=c,u.getContext("2d").drawImage(l,0,0,d,c);const v=u.toDataURL("image/jpeg",a);s(v)},l.onerror=n},r.onerror=n}),ee=t=>{L();const e=(b.expenses||[]).find(o=>o.id===t);if(!e||!e.receiptImg)return p("Foto struk tidak tersedia");const a=i("modal-expense-receipt-preview"),s=i("modal-expense-receipt-preview-box"),n=i("img-full-receipt"),r=i("caption-full-receipt");n&&(n.src=K(e.receiptImg)),r&&(r.innerText=`${C(e.date)} — ${e.desc} (${x(e.amount)})`),a&&s&&(a.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("expenseReceipt"),O(a,s))},te=(t=!1)=>{const e=i("modal-expense-receipt-preview"),a=i("modal-expense-receipt-preview-box");e&&(!t&&typeof window.requestCloseModal=="function"?window.requestCloseModal("expenseReceipt",!1,()=>{j(e,a)}):j(e,a))},ae=async()=>{const t=i("exp-input-id").value,e=i("exp-input-date").value,a=i("exp-input-category").value,s=i("exp-input-amount").value.replace(/[^0-9]/g,""),n=parseInt(s,10),r=i("exp-input-desc").value.trim(),o=i("exp-input-recipient").value.trim(),l=i("exp-input-createdby").value.trim()||"Owner",d=i("exp-input-receipt-url").value.trim(),c=document.querySelector('input[name="exp_source"]:checked'),u=c?c.value:"cash";if(!e)return p("Pilih tanggal transaksi!");if(!a)return p("Pilih kategori pengeluaran!");if(!n||n<=0)return p("Masukkan nominal pengeluaran yang valid!");if(!r)return p("Isi keperluan / uraian pengeluaran!");B("Menyimpan pengeluaran..."),Array.isArray(b.expenses)||(b.expenses=[]);const A=Date.now();if(t){const v=b.expenses.findIndex(q=>q.id===t);v!==-1&&(b.expenses[v]={...b.expenses[v],date:e,category:a,amount:n,desc:r,source:u,recipient:o,createdBy:l,receiptImg:d,updatedAt:A})}else{const v={id:z(),date:e,category:a,amount:n,desc:r,source:u,recipient:o,createdBy:l,receiptImg:d,createdAt:A,updatedAt:A};b.expenses.unshift(v)}try{await N(["expenses"]),y(),U(),p(t?"Pengeluaran berhasil diperbarui!":"Pengeluaran baru berhasil dicatat!"),I()}catch(v){y(),p("Gagal menyimpan ke server: "+v.message)}},re=t=>{const e=(b.expenses||[]).find(a=>a.id===t);e&&_("Hapus Catatan Pengeluaran",`Apakah Anda yakin ingin menghapus catatan pengeluaran "${e.desc}" sebesar ${x(e.amount)}? Data tidak dapat dipulihkan.`,async()=>{B("Menghapus pengeluaran..."),b.expenses=(b.expenses||[]).filter(a=>a.id!==t);try{await N(["expenses"]),y(),p("Catatan pengeluaran dihapus!"),I()}catch(a){y(),p("Gagal menghapus: "+a.message)}})},se=(t,e)=>{t==="year"?w=parseInt(e,10):t==="month"?h=parseInt(e,10):t==="category"?S=e:t==="source"?T=e:t==="sort"?k=e:t==="search"&&($=e),I()},oe=()=>{const t=F();if(t.length===0)return p("Tidak ada data untuk diekspor!");const e=["ID","Tanggal","Kategori","Keperluan","Penerima","Sumber Dana","Nominal (Rp)","Dicatat Oleh"],a=t.map(l=>{const d=f.find(u=>u.key===l.category)||f[6],c=g.find(u=>u.key===l.source)||g[0];return[`"${l.id||""}"`,`"${l.date||""}"`,`"${d.label.replace(/"/g,'""')}"`,`"${(l.desc||"").replace(/"/g,'""')}"`,`"${(l.recipient||"-").replace(/"/g,'""')}"`,`"${c.label}"`,`"${l.amount||0}"`,`"${(l.createdBy||"Owner").replace(/"/g,'""')}"`].join(",")}),s="\uFEFF"+[e.join(","),...a].join(`\r
`),n=new Blob([s],{type:"text/csv;charset=utf-8;"}),r=URL.createObjectURL(n),o=document.createElement("a");o.href=r,o.download=`Buku_Kas_Pengeluaran_TokoPutri_${w}_${h||"Semua"}.csv`,o.click(),URL.revokeObjectURL(r),p("File Excel/CSV berhasil diunduh!")},le=t=>{const e=(b.expenses||[]).find(l=>l.id===t);if(!e)return p("Data tidak ditemukan");const a=f.find(l=>l.key===e.category)||f[6],s=g.find(l=>l.key===e.source)||g[0],n=b.store||{},r=`
        <!DOCTYPE html>
        <html lang="id">
        <head>
            <meta charset="UTF-8">
            <title>BKK - ${e.id}</title>
            <style>
                * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Courier New', Courier, monospace; }
                body { padding: 25px; color: #1e293b; background: #fff; font-size: 13px; line-height: 1.5; }
                .slip-box { max-width: 600px; margin: 0 auto; border: 2px solid #0f172a; padding: 20px; }
                .header { text-align: center; border-bottom: 2px dashed #0f172a; padding-bottom: 12px; margin-bottom: 15px; }
                .title { font-size: 18px; font-weight: 900; letter-spacing: 1px; }
                .sub { font-size: 11px; }
                .meta-table { width: 100%; margin-bottom: 15px; }
                .meta-table td { padding: 3px 0; vertical-align: top; }
                .amount-box { border: 2px solid #0f172a; background: #f8fafc; padding: 12px; margin: 15px 0; text-align: center; }
                .amount { font-size: 22px; font-weight: 900; }
                .terbilang { font-style: italic; font-size: 11px; margin-top: 4px; color: #475569; }
                .sig-grid { display: flex; justify-content: space-between; margin-top: 40px; text-align: center; }
                .sig-box { width: 30%; }
                .sig-line { margin-top: 55px; border-bottom: 1px solid #0f172a; font-weight: bold; }
                @media print {
                    body { padding: 0; }
                    .slip-box { border: 1px solid #000; }
                    .no-print { display: none; }
                }
            </style>
        </head>
        <body>
            <div class="slip-box">
                <div class="header">
                    <div class="title">${(n.name||"TOKO PUTRI").toUpperCase()}</div>
                    <div class="sub">${n.address||"Alamat Toko"} | WA: ${n.wa||"-"}</div>
                    <div style="font-weight: 900; margin-top: 6px; font-size: 15px;">BUKTI KAS KELUAR (BKK)</div>
                </div>

                <table class="meta-table">
                    <tr><td width="30%"><strong>No. Bukti</strong></td><td width="5%">:</td><td>${e.id}</td></tr>
                    <tr><td><strong>Tanggal</strong></td><td>:</td><td>${C(e.date)}</td></tr>
                    <tr><td><strong>Dibayarkan Kepada</strong></td><td>:</td><td>${e.recipient||"-"}</td></tr>
                    <tr><td><strong>Kategori Beban</strong></td><td>:</td><td>${a.label}</td></tr>
                    <tr><td><strong>Sumber Dana</strong></td><td>:</td><td>${s.label}</td></tr>
                    <tr><td><strong>Keperluan / Uraian</strong></td><td>:</td><td>${e.desc}</td></tr>
                </table>

                <div class="amount-box">
                    <div class="amount">${x(e.amount)}</div>
                    <div class="terbilang">Terbilang: ${m(e.amount)} Rupiah</div>
                </div>

                <div class="sig-grid">
                    <div class="sig-box">
                        <div>Dibukukan Oleh,</div>
                        <div class="sig-line">(${e.createdBy||"Kasir / Staf"})</div>
                    </div>
                    <div class="sig-box">
                        <div>Disetujui Oleh,</div>
                        <div class="sig-line">(Owner Toko)</div>
                    </div>
                    <div class="sig-box">
                        <div>Penerima Dana,</div>
                        <div class="sig-line">(${e.recipient||".................."})</div>
                    </div>
                </div>
            </div>
        </body>
        </html>
    `;if(typeof window.openHtmlPrintPreview=="function"){window.openHtmlPrintPreview({title:`Bukti Kas Keluar #${e.id}`,html:r,paper:"slip"});return}const o=window.open("","_blank");if(!o)return p("Izinkan pop-up untuk mencetak Bukti Kas Keluar!");o.document.write(r),o.document.close()};window.renderExpensesAdminView=I;window.openExpenseModal=Y;window.closeExpenseModal=U;window.submitExpenseForm=ae;window.confirmDeleteExpense=re;window.setExpenseFilter=se;window.handleExpenseAmountInput=J;window.addQuickExpenseAmount=V;window.handleExpenseReceiptUpload=X;window.setExpenseReceiptUrl=M;window.removeExpenseReceiptPhoto=W;window.previewExpenseReceipt=ee;window.closeExpenseReceiptPreview=te;window.exportExpensesToCsv=oe;window.printExpenseSlip=le;window.selectExpenseSource=R;export{g as EXPENSE_SOURCES,V as addQuickExpenseAmount,U as closeExpenseModal,te as closeExpenseReceiptPreview,re as confirmDeleteExpense,L as ensureExpenseModals,oe as exportExpensesToCsv,Q as getExpenseMetrics,F as getFilteredExpenses,J as handleExpenseAmountInput,X as handleExpenseReceiptUpload,Y as openExpenseModal,ee as previewExpenseReceipt,le as printExpenseSlip,W as removeExpenseReceiptPhoto,I as renderExpensesAdminView,R as selectExpenseSource,se as setExpenseFilter,M as setExpenseReceiptUrl,ae as submitExpenseForm};

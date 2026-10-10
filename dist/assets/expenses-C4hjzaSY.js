import{e as l,f as x,v as j,a as b,H as z,l as P,n as w,k as c,o as O,m as K,i as E,b as Q}from"./module-print-D7ZGPnsx.js";import{k as N}from"./module-pos-YAlbR-NC.js";import{E as f}from"./module-admin-CfNt7FYa.js";import{a as Y}from"./module-member-CsDpojBF.js";import"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";import"./module-faq-DvQovEFv.js";import"./vendor-sortable-DzmX_rHT.js";const g=[{key:"cash",label:"Kas Laci Toko (Tunai)",shortLabel:"Kas Toko",icon:"fa-money-bill-wave",color:"emerald"},{key:"bank",label:"Transfer Rekening Bank",shortLabel:"Transfer Bank",icon:"fa-building-columns",color:"blue"},{key:"owner",label:"Dana Pribadi / Talangan Owner",shortLabel:"Dana Owner",icon:"fa-user-shield",color:"purple"}],C=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];let $=new Date().getFullYear(),h=new Date().getMonth()+1,S="all",T="all",k="",y="newest";const J=()=>"exp_"+Date.now()+"_"+Math.random().toString(36).substring(2,7),m=t=>{const a=["","Satu","Dua","Tiga","Empat","Lima","Enam","Tujuh","Delapan","Sembilan","Sepuluh","Sebelas"];return t=Math.floor(Math.abs(Number(t)||0)),t<12?a[t]:t<20?m(t-10)+" Belas":t<100?m(Math.floor(t/10))+" Puluh "+m(t%10):t<200?"Seratus "+m(t-100):t<1e3?m(Math.floor(t/100))+" Ratus "+m(t%100):t<2e3?"Seribu "+m(t-1e3):t<1e6?m(Math.floor(t/1e3))+" Ribu "+m(t%1e3):t<1e9?m(Math.floor(t/1e6))+" Juta "+m(t%1e6):t<1e12?m(Math.floor(t/1e9))+" Miliar "+m(t%1e9):"Jumlah Sangat Besar"},R=t=>{if(!t)return"-";try{const a=t.split("-");if(a.length===3){const r=parseInt(a[0],10),i=parseInt(a[1],10);return`${parseInt(a[2],10)} ${C[i-1]||""} ${r}`}const e=new Date(t);return isNaN(e.getTime())?t:`${e.getDate()} ${C[e.getMonth()]} ${e.getFullYear()}`}catch{return t}},F=()=>{const t=document.querySelector("#admin-content #modal-expense-form");t&&t.remove();const a=document.querySelector("#admin-content #modal-expense-receipt-preview");if(a&&a.remove(),!l("modal-expense-form")){const e=document.createElement("div");e.id="modal-expense-form",e.className="fixed inset-0 z-[150] flex hidden items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/75 opacity-0 transition-opacity duration-300 overflow-hidden",e.onclick=r=>{r.target===e&&window.closeExpenseModal?.()},e.innerHTML=`
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
                                    ${f.map(r=>`<option value="${r.key}">${r.label}</option>`).join("")}
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
                                ${g.map(r=>`
                                    <div data-source-key="${r.key}" onclick="window.selectExpenseSource('${r.key}')" class="relative flex flex-col items-center justify-center p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/70 dark:bg-slate-800/50 cursor-pointer text-center transition-all hover:border-slate-400 select-none group active:scale-95 shadow-2xs">
                                        <input type="radio" name="exp_source" value="${r.key}" class="sr-only" ${r.key==="cash"?"checked":""}>
                                        <i class="fa-solid ${r.icon} text-sm mb-1 text-slate-500 transition-colors"></i>
                                        <span class="text-[10px] font-black text-slate-800 dark:text-slate-200 leading-tight transition-colors">${r.shortLabel}</span>
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
        `,document.body.appendChild(e)}if(!l("modal-expense-receipt-preview")){const e=document.createElement("div");e.id="modal-expense-receipt-preview",e.className="fixed inset-0 z-[160] flex hidden items-center justify-center p-4 bg-slate-950/90 opacity-0 transition-opacity duration-300",e.onclick=r=>{r.target===e&&window.closeExpenseReceiptPreview?.()},e.innerHTML=`
            <div id="modal-expense-receipt-preview-box" class="relative max-w-3xl max-h-[90vh] bg-slate-900 rounded-2xl border border-slate-800 p-2 shadow-2xl flex flex-col items-center justify-center transform scale-95 transition-all duration-300" onclick="event.stopPropagation()">
                <button type="button" onclick="closeExpenseReceiptPreview()" class="absolute -top-3 -right-3 w-9 h-9 rounded-full text-white flex items-center justify-center shadow-lg cursor-pointer z-10 hover:opacity-95" style="background: var(--color-primary); box-shadow: 0 4px 12px rgba(var(--color-primary-rgb), 0.4);">
                    <i class="fa-solid fa-xmark"></i>
                </button>
                <img id="img-full-receipt" src="" alt="Bukti Nota" class="max-h-[82vh] w-auto max-w-full rounded-xl object-contain">
                <p id="caption-full-receipt" class="text-xs text-slate-300 font-bold mt-2 text-center"></p>
            </div>
        `,document.body.appendChild(e)}},M=()=>(Array.isArray(b.expenses)?b.expenses:[]).filter(a=>{if(!a||!a.date)return!1;const[e,r]=a.date.split("-"),i=parseInt(e,10),o=parseInt(r,10);if($&&i!==$||h!==0&&o!==h||S!=="all"&&a.category!==S||T!=="all"&&a.source!==T)return!1;if(k&&k.trim()){const s=k.toLowerCase().trim(),n=(a.desc||"").toLowerCase().includes(s),d=(a.recipient||"").toLowerCase().includes(s),p=(a.category||"").toLowerCase().includes(s),u=(a.amount||"").toString().includes(s);if(!n&&!d&&!p&&!u)return!1}return!0}).sort((a,e)=>{if(y==="highest")return(e.amount||0)-(a.amount||0);if(y==="lowest")return(a.amount||0)-(e.amount||0);if(y==="oldest")return(new Date(a.date).getTime()||0)-(new Date(e.date).getTime()||0);const r=(new Date(e.date).getTime()||0)-(new Date(a.date).getTime()||0);return r!==0?r:(e.createdAt||0)-(a.createdAt||0)}),U=()=>{const t=M();let a=0;const e={cash:0,bank:0,owner:0},r={};f.forEach(n=>{r[n.key]=0}),t.forEach(n=>{const d=parseFloat(n.amount)||0;a+=d;const p=n.source||"cash";e[p]!==void 0?e[p]+=d:e.cash+=d;const u=n.category||"lainnya";r[u]!==void 0?r[u]+=d:r.lainnya+=d});let i="lainnya",o=0;Object.entries(r).forEach(([n,d])=>{d>o&&(o=d,i=n)});const s=f.find(n=>n.key===i)||f[6];return{count:t.length,totalAmount:a,bySource:e,byCategory:r,topCategory:{...s,amount:o,percent:a>0?(o/a*100).toFixed(0):"0"}}},q=(t,a)=>`
        <div class="px-5 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <div>
                <h3 class="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-white">Buku Kas Pengeluaran Operasional</h3>
                <p class="text-[10px] text-slate-400 mt-0.5">Menampilkan ${t.length} dari total ${(b.expenses||[]).length} catatan</p>
            </div>
            <span class="text-xs font-black" style="color: var(--color-primary);">${x(a.totalAmount)}</span>
        </div>

        ${t.length===0?`
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
                        ${t.map(e=>{const r=f.find(s=>s.key===e.category)||f[6],i=g.find(s=>s.key===e.source)||g[0],o=!!e.receiptImg;return`
                                <tr class="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors">
                                    <td class="py-3.5 px-4 font-medium text-slate-500 whitespace-nowrap">${R(e.date)}</td>
                                    <td class="py-3.5 px-4">
                                        <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60">
                                            <i class="fa-solid ${r.icon} text-[10px]" style="color: var(--color-primary)"></i>
                                            <span>${r.label}</span>
                                        </span>
                                    </td>
                                    <td class="py-3.5 px-4 max-w-xs">
                                        <p class="font-bold text-slate-800 dark:text-white leading-snug">${E(e.desc)}</p>
                                        ${e.recipient?`<p class="text-[10px] text-slate-400 mt-0.5"><i class="fa-solid fa-store mr-1 text-slate-300"></i>Penerima: <span class="font-semibold text-slate-600 dark:text-slate-300">${E(e.recipient)}</span></p>`:""}
                                    </td>
                                    <td class="py-3.5 px-4">
                                        <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold ${e.source==="cash"?"bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 border border-emerald-200 dark:border-emerald-800/50":e.source==="bank"?"bg-blue-50 dark:bg-blue-950/40 text-blue-600 border border-blue-200 dark:border-blue-800/50":"bg-purple-50 dark:bg-purple-950/40 text-purple-600 border border-purple-200 dark:border-purple-800/50"}">
                                            <i class="fa-solid ${i.icon} text-[9px]"></i>
                                            <span>${i.shortLabel}</span>
                                        </span>
                                    </td>
                                    <td class="py-3.5 px-4 text-center">
                                        ${o?`
                                            <button type="button" onclick="window.previewExpenseReceipt('${e.id}')" title="Lihat Foto Struk" class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-600 dark:text-amber-400 transition-colors cursor-pointer">
                                                <i class="fa-solid fa-image text-xs"></i>
                                            </button>
                                        `:'<span class="text-[10px] text-slate-300 dark:text-slate-600">-</span>'}
                                    </td>
                                    <td class="py-3.5 px-4 text-right whitespace-nowrap">
                                        <span class="font-black text-slate-800 dark:text-slate-100 text-sm">- ${x(e.amount)}</span>
                                    </td>
                                    <td class="py-3.5 px-4 text-center whitespace-nowrap">
                                        <div class="inline-flex items-center gap-1.5">
                                            <button type="button" onclick="window.printExpenseSlip('${e.id}')" title="Cetak Bukti Kas Keluar (BKK)" class="btn-native-icon w-8 h-8 sm:w-9 sm:h-9 rounded-xl text-slate-500 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-2xs">
                                                <i class="fa-solid fa-print text-xs"></i>
                                            </button>
                                            <button type="button" onclick="window.openExpenseModal('${e.id}')" title="Edit Pengeluaran" class="btn-native-icon w-8 h-8 sm:w-9 sm:h-9 rounded-xl text-blue-600 dark:text-blue-400 bg-blue-50/70 hover:bg-blue-100 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900/40 flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-2xs">
                                                <i class="fa-solid fa-pen-to-square text-xs"></i>
                                            </button>
                                            <button type="button" onclick="window.confirmDeleteExpense('${e.id}')" title="Hapus Pengeluaran" class="btn-native-icon w-8 h-8 sm:w-9 sm:h-9 rounded-xl text-rose-600 dark:text-rose-400 bg-rose-50/70 hover:bg-rose-100 dark:bg-rose-950/40 border border-rose-200/60 dark:border-rose-900/40 flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-2xs">
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
            <div class="md:hidden p-3.5 space-y-3">
                ${t.map(e=>{const r=f.find(s=>s.key===e.category)||f[6],i=g.find(s=>s.key===e.source)||g[0],o=!!e.receiptImg;return`
                        <div class="card-native p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs space-y-3">
                            <div class="flex items-center justify-between gap-2">
                                <div class="flex items-center gap-1.5 flex-wrap">
                                    <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60">
                                        <i class="fa-solid ${r.icon} text-[9px]" style="color: var(--color-primary)"></i>
                                        <span>${r.label}</span>
                                    </span>
                                    <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[9px] font-bold ${e.source==="cash"?"bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 border border-emerald-200/60":e.source==="bank"?"bg-blue-50 dark:bg-blue-950/40 text-blue-600 border border-blue-200/60":"bg-purple-50 dark:bg-purple-950/40 text-purple-600 border border-purple-200/60"}">
                                        <i class="fa-solid ${i.icon} text-[8px]"></i>
                                        <span>${i.shortLabel}</span>
                                    </span>
                                </div>
                                <span class="text-[10.5px] text-slate-400 font-bold shrink-0">${R(e.date)}</span>
                            </div>

                            <div>
                                <p class="text-xs font-black text-slate-800 dark:text-white leading-snug">${E(e.desc)}</p>
                                ${e.recipient?`<p class="text-[10px] text-slate-400 mt-1 flex items-center gap-1"><i class="fa-solid fa-store text-slate-400 text-[9px]"></i> Penerima: <span class="font-bold text-slate-600 dark:text-slate-300">${E(e.recipient)}</span></p>`:""}
                            </div>

                            <div class="flex items-center justify-between pt-2.5 border-t border-slate-100 dark:border-slate-800/80 gap-2">
                                <div class="flex items-center gap-2">
                                    <span class="text-sm font-black text-slate-900 dark:text-white">- ${x(e.amount)}</span>
                                    ${o?`
                                        <button type="button" onclick="window.previewExpenseReceipt('${e.id}')" class="px-2 py-1 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 text-[10px] font-bold flex items-center gap-1 cursor-pointer active:scale-95 border border-amber-300/60">
                                            <i class="fa-solid fa-image text-[9px]"></i> Nota
                                        </button>
                                    `:""}
                                </div>
                                <div class="flex items-center gap-1.5">
                                    <button type="button" onclick="window.printExpenseSlip('${e.id}')" title="Cetak BKK" class="btn-native-icon w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center active:scale-95 transition-all shadow-2xs cursor-pointer">
                                        <i class="fa-solid fa-print text-xs"></i>
                                    </button>
                                    <button type="button" onclick="window.openExpenseModal('${e.id}')" title="Edit" class="btn-native-icon w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-200/60 flex items-center justify-center active:scale-95 transition-all shadow-2xs cursor-pointer">
                                        <i class="fa-solid fa-pen-to-square text-xs"></i>
                                    </button>
                                    <button type="button" onclick="window.confirmDeleteExpense('${e.id}')" title="Hapus" class="btn-native-icon w-9 h-9 rounded-xl bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 border border-rose-200/60 flex items-center justify-center active:scale-95 transition-all shadow-2xs cursor-pointer">
                                        <i class="fa-solid fa-trash-can text-xs"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    `}).join("")}
            </div>
        `}
    `,A=()=>{F();const t=U(),a=M(),e=h===0?`Tahun ${$}`:`${C[h-1]} ${$}`,r=new Date().getFullYear(),i=[r-2,r-1,r,r+1];Q("admin-content",`
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
                        <p class="text-[10px] text-slate-400 mt-0.5">${e} (${t.count} nota)</p>
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
                    ${f.map(o=>{const s=t.byCategory[o.key]||0,n=t.totalAmount>0?(s/t.totalAmount*100).toFixed(0):"0";return`
                            <div class="p-3 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 flex flex-col justify-between">
                                <div class="flex items-center justify-between mb-1">
                                    <span class="text-[9px] font-bold text-slate-500 dark:text-slate-400 uppercase truncate">${o.label.split(" ")[0]}</span>
                                    <i class="fa-solid ${o.icon} text-[10px] text-slate-400"></i>
                                </div>
                                <p class="text-xs font-black text-slate-800 dark:text-white truncate">${x(s)}</p>
                                <div class="mt-2 w-full bg-slate-200 dark:bg-slate-700 h-1 rounded-full overflow-hidden">
                                    <div class="h-full rounded-full" style="width: ${n}%; background: var(--color-primary);"></div>
                                </div>
                                <span class="text-[9px] font-bold text-slate-400 mt-1 text-right">${n}%</span>
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
                            ${i.map(o=>`<option value="${o}" ${o===$?"selected":""}>${o}</option>`).join("")}
                        </select>
                    </div>

                    <!-- Filter Bulan -->
                    <div>
                        <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Bulan</label>
                        <select onchange="window.setExpenseFilter('month', this.value)" class="w-full text-xs font-bold bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-slate-800 dark:text-white focus:outline-hidden">
                            <option value="0" ${h===0?"selected":""}>Semua Bulan (Setahun)</option>
                            ${C.map((o,s)=>`<option value="${s+1}" ${s+1===h?"selected":""}>${o}</option>`).join("")}
                        </select>
                    </div>

                    <!-- Filter Kategori -->
                    <div>
                        <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Kategori</label>
                        <select onchange="window.setExpenseFilter('category', this.value)" class="w-full text-xs font-bold bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-slate-800 dark:text-white focus:outline-hidden">
                            <option value="all" ${S==="all"?"selected":""}>Semua Kategori</option>
                            ${f.map(o=>`<option value="${o.key}" ${o.key===S?"selected":""}>${o.label}</option>`).join("")}
                        </select>
                    </div>

                    <!-- Filter Sumber Pembayaran -->
                    <div>
                        <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Sumber Dana</label>
                        <select onchange="window.setExpenseFilter('source', this.value)" class="w-full text-xs font-bold bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-slate-800 dark:text-white focus:outline-hidden">
                            <option value="all" ${T==="all"?"selected":""}>Semua Sumber</option>
                            ${g.map(o=>`<option value="${o.key}" ${o.key===T?"selected":""}>${o.label}</option>`).join("")}
                        </select>
                    </div>

                    <!-- Filter Urutan / Sort -->
                    <div>
                        <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Urutkan</label>
                        <select onchange="window.setExpenseFilter('sort', this.value)" class="w-full text-xs font-bold bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-slate-800 dark:text-white focus:outline-hidden">
                            <option value="newest" ${y==="newest"?"selected":""}>Tanggal Terbaru</option>
                            <option value="oldest" ${y==="oldest"?"selected":""}>Tanggal Terlama</option>
                            <option value="highest" ${y==="highest"?"selected":""}>Nominal Terbesar</option>
                            <option value="lowest" ${y==="lowest"?"selected":""}>Nominal Terkecil</option>
                        </select>
                    </div>
                </div>

                <!-- Input Pencarian Bebas (Zero-Flicker) -->
                <div class="relative">
                    <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"><i class="fa-solid fa-magnifying-glass text-xs"></i></span>
                    <input type="text" id="expense-search-input" value="${E(k)}" placeholder="Cari keterangan, keperluan, atau nama toko/vendor..." oninput="window.setExpenseFilter('search', this.value)" class="w-full pl-9 pr-8 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white focus:outline-hidden">
                    <button type="button" id="expense-search-clear-btn" onclick="window.setExpenseFilter('search', '')" style="display: ${k?"block":"none"};" class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"><i class="fa-solid fa-xmark text-xs"></i></button>
                </div>
            </div>

            <!-- 5. DAFTAR BUKU KAS PENGELUARAN (LEDGER TABLE & CARDS - Zero-Flicker Partial DOM) -->
            <div id="expense-ledger-container" class="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xs">
                ${q(a,t)}
            </div>
        </div>
    `)},H=()=>{if(typeof document>"u")return;const t=document.getElementById("expense-ledger-container");if(!t){A();return}const a=M(),e=U();t.innerHTML=q(a,e)},I=t=>{const a=document.getElementById("exp-source-selector");if(!a)return;a.querySelectorAll("[data-source-key]").forEach(r=>{const i=r.getAttribute("data-source-key"),o=r.querySelector('input[type="radio"]'),s=r.querySelector("i"),n=r.querySelector("span"),d=i===t;o&&(o.checked=d),d?(r.classList.add("is-source-active"),r.style.borderColor="var(--color-primary)",r.style.backgroundColor="rgba(var(--color-primary-rgb), 0.12)",r.style.boxShadow="0 0 0 1.5px var(--color-primary), 0 2px 10px rgba(var(--color-primary-rgb), 0.25)",s&&(s.style.color="var(--color-primary)",s.classList.remove("text-slate-500")),n&&(n.style.color="var(--color-primary)")):(r.classList.remove("is-source-active"),r.style.borderColor="",r.style.backgroundColor="",r.style.boxShadow="",s&&(s.style.color="",s.classList.add("text-slate-500")),n&&(n.style.color=""))})};window.selectExpenseSource=I;const V=(t=null)=>{F();const a=l("modal-expense-form"),e=l("modal-expense-form-box"),r=l("modal-expense-title"),i=l("btn-save-expense"),o=l("expense-form-scroll-container");if(!(!a||!e)){if(t){const s=(b.expenses||[]).find(n=>n.id===t);if(!s)return c("Data pengeluaran tidak ditemukan!");r&&(r.innerText="Edit Catatan Pengeluaran"),i&&(i.querySelector("span").innerText="Perbarui Pengeluaran"),l("exp-input-id").value=s.id,l("exp-input-date").value=s.date||new Date().toISOString().split("T")[0],l("exp-input-category").value=s.category||"lainnya",l("exp-input-amount").value=new Intl.NumberFormat("id-ID").format(s.amount||0),l("exp-nominal-preview").innerText=x(s.amount||0),l("exp-input-desc").value=s.desc||"",l("exp-input-recipient").value=s.recipient||"",l("exp-input-createdby").value=s.createdBy||"",l("exp-input-receipt-url").value=s.receiptImg||"",l("exp-input-receipt-manual").value=s.receiptImg||"",I(s.source||"cash"),D(s.receiptImg||"")}else r&&(r.innerText="Catat Pengeluaran Baru"),i&&(i.querySelector("span").innerText="Simpan Pengeluaran"),l("exp-input-id").value="",l("exp-input-date").value=new Date().toISOString().split("T")[0],l("exp-input-category").value="kemasan",l("exp-input-amount").value="",l("exp-nominal-preview").innerText="Rp 0",l("exp-input-desc").value="",l("exp-input-recipient").value="",l("exp-input-createdby").value="Owner",l("exp-input-receipt-url").value="",l("exp-input-receipt-manual").value="",I("cash"),D("");o&&(o.scrollTop=0),a.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("expenseForm"),document.body.classList.add("overflow-hidden"),O(a,e)}},_=(t=!1)=>{const a=l("modal-expense-form"),e=l("modal-expense-form-box");a&&(document.body.classList.remove("overflow-hidden"),!t&&typeof window.requestCloseModal=="function"?window.requestCloseModal("expenseForm",!1,()=>{j(a,e,()=>{})}):j(a,e,()=>{}))},W=t=>{let a=t.value.replace(/[^0-9]/g,"");const e=parseInt(a,10)||0;t.value=a?new Intl.NumberFormat("id-ID").format(e):"",setIn("exp-nominal-preview",x(e))},X=t=>{const a=l("exp-input-amount");if(!a)return;let e=parseInt(a.value.replace(/[^0-9]/g,""),10)||0;e+=t,a.value=new Intl.NumberFormat("id-ID").format(e),setIn("exp-nominal-preview",x(e))},D=t=>{l("exp-receipt-preview-box");const a=l("exp-receipt-placeholder-icon"),e=l("exp-receipt-preview-img"),r=l("exp-receipt-remove-btn");t?(e&&(e.src=K(t),e.classList.remove("hidden")),a&&a.classList.add("hidden"),r&&r.classList.remove("hidden")):(e&&(e.src="",e.classList.add("hidden")),a&&a.classList.remove("hidden"),r&&r.classList.add("hidden"))},L=t=>{const a=(t||"").trim();l("exp-input-receipt-url").value=a,D(a)},Z=()=>{l("exp-input-receipt-url").value="",l("exp-input-receipt-manual").value="",D(""),c("Foto struk dihapus")},ee=async t=>{const a=t.files[0];if(a){if(!a.type.startsWith("image/"))return t.value="",c("Hanya file gambar (JPG, PNG, WEBP) yang diperbolehkan!");P("Memproses foto nota...");try{const e=await te(a,1e3,.75),r=window.GAS_UPLOAD_URL||Y;if(r&&!r.includes("ISI_DENGAN")){P("Mengunggah foto nota ke Google Drive...");try{const i={name:"EXP_NOTA_"+Date.now()+".jpg",mimeType:"image/jpeg",data:e.split(",")[1],token:"B7qgwFQqtYLpBqdaK69HgtCfR7s5t67p"},s=await(await fetch(r,{method:"POST",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify(i)})).json();if(s&&s.status==="success"&&s.url){w(),L(s.url),l("exp-input-receipt-manual").value=s.url,c("Foto nota berhasil diunggah!");return}}catch(i){console.warn("[Expenses] Gagal upload ke GAS, menggunakan kompresi lokal:",i)}}w(),L(e),c("Foto nota tersimpan!")}catch(e){w(),c("Gagal memproses gambar: "+e.message)}}},te=(t,a=1e3,e=.75)=>new Promise((r,i)=>{const o=new FileReader;o.readAsDataURL(t),o.onload=s=>{const n=new Image;n.src=s.target.result,n.onload=()=>{let d=n.width,p=n.height;(d>a||p>a)&&(d>p?(p=Math.round(p*a/d),d=a):(d=Math.round(d*a/p),p=a));const u=document.createElement("canvas");u.width=d,u.height=p,u.getContext("2d").drawImage(n,0,0,d,p);const v=u.toDataURL("image/jpeg",e);r(v)},n.onerror=i},o.onerror=i}),ae=t=>{F();const a=(b.expenses||[]).find(s=>s.id===t);if(!a||!a.receiptImg)return c("Foto struk tidak tersedia");const e=l("modal-expense-receipt-preview"),r=l("modal-expense-receipt-preview-box"),i=l("img-full-receipt"),o=l("caption-full-receipt");i&&(i.src=K(a.receiptImg)),o&&(o.innerText=`${R(a.date)} — ${a.desc} (${x(a.amount)})`),e&&r&&(e.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("expenseReceipt"),O(e,r))},re=(t=!1)=>{const a=l("modal-expense-receipt-preview"),e=l("modal-expense-receipt-preview-box");a&&(!t&&typeof window.requestCloseModal=="function"?window.requestCloseModal("expenseReceipt",!1,()=>{j(a,e)}):j(a,e))},se=async()=>{const t=l("exp-input-id").value,a=l("exp-input-date").value,e=l("exp-input-category").value,r=l("exp-input-amount").value.replace(/[^0-9]/g,""),i=parseInt(r,10),o=l("exp-input-desc").value.trim(),s=l("exp-input-recipient").value.trim(),n=l("exp-input-createdby").value.trim()||"Owner",d=l("exp-input-receipt-url").value.trim(),p=document.querySelector('input[name="exp_source"]:checked'),u=p?p.value:"cash";if(!a)return c("Pilih tanggal transaksi!");if(!e)return c("Pilih kategori pengeluaran!");if(!i||i<=0)return c("Masukkan nominal pengeluaran yang valid!");if(!o)return c("Isi keperluan / uraian pengeluaran!");P("Menyimpan pengeluaran..."),Array.isArray(b.expenses)||(b.expenses=[]);const B=Date.now();if(t){const v=b.expenses.findIndex(G=>G.id===t);v!==-1&&(b.expenses[v]={...b.expenses[v],date:a,category:e,amount:i,desc:o,source:u,recipient:s,createdBy:n,receiptImg:d,updatedAt:B})}else{const v={id:J(),date:a,category:e,amount:i,desc:o,source:u,recipient:s,createdBy:n,receiptImg:d,createdAt:B,updatedAt:B};b.expenses.unshift(v)}try{await N(["expenses"]),w(),_(),c(t?"Pengeluaran berhasil diperbarui!":"Pengeluaran baru berhasil dicatat!"),A()}catch(v){w(),c("Gagal menyimpan ke server: "+v.message)}},oe=t=>{const a=(b.expenses||[]).find(e=>e.id===t);a&&z("Hapus Catatan Pengeluaran",`Apakah Anda yakin ingin menghapus catatan pengeluaran "${a.desc}" sebesar ${x(a.amount)}? Data tidak dapat dipulihkan.`,async()=>{P("Menghapus pengeluaran..."),b.expenses=(b.expenses||[]).filter(e=>e.id!==t);try{await N(["expenses"]),w(),c("Catatan pengeluaran dihapus!"),A()}catch(e){w(),c("Gagal menghapus: "+e.message)}})},le=(t,a)=>{if(t==="year")$=parseInt(a,10);else if(t==="month")h=parseInt(a,10);else if(t==="category")S=a;else if(t==="source")T=a;else if(t==="sort")y=a;else if(t==="search"){if(k=a||"",typeof document<"u"){const e=document.getElementById("expense-search-input");e&&e.value!==k&&document.activeElement!==e&&(e.value=k);const r=document.getElementById("expense-search-clear-btn");r&&(r.style.display=k?"block":"none")}H();return}A()},ne=()=>{const t=M();if(t.length===0)return c("Tidak ada data untuk diekspor!");const a=["ID","Tanggal","Kategori","Keperluan","Penerima","Sumber Dana","Nominal (Rp)","Dicatat Oleh"],e=t.map(n=>{const d=f.find(u=>u.key===n.category)||f[6],p=g.find(u=>u.key===n.source)||g[0];return[`"${n.id||""}"`,`"${n.date||""}"`,`"${d.label.replace(/"/g,'""')}"`,`"${(n.desc||"").replace(/"/g,'""')}"`,`"${(n.recipient||"-").replace(/"/g,'""')}"`,`"${p.label}"`,`"${n.amount||0}"`,`"${(n.createdBy||"Owner").replace(/"/g,'""')}"`].join(",")}),r="\uFEFF"+[a.join(","),...e].join(`\r
`),i=new Blob([r],{type:"text/csv;charset=utf-8;"}),o=URL.createObjectURL(i),s=document.createElement("a");s.href=o,s.download=`Buku_Kas_Pengeluaran_TokoPutri_${$}_${h||"Semua"}.csv`,s.click(),URL.revokeObjectURL(o),c("File Excel/CSV berhasil diunduh!")},ie=t=>{const a=(b.expenses||[]).find(n=>n.id===t);if(!a)return c("Data tidak ditemukan");const e=f.find(n=>n.key===a.category)||f[6],r=g.find(n=>n.key===a.source)||g[0],i=b.store||{},o=`
        <!DOCTYPE html>
        <html lang="id">
        <head>
            <meta charset="UTF-8">
            <title>BKK - ${a.id}</title>
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
                    <div class="title">${(i.name||"TOKO PUTRI").toUpperCase()}</div>
                    <div class="sub">${i.address||"Alamat Toko"} | WA: ${i.wa||"-"}</div>
                    <div style="font-weight: 900; margin-top: 6px; font-size: 15px;">BUKTI KAS KELUAR (BKK)</div>
                </div>

                <table class="meta-table">
                    <tr><td width="30%"><strong>No. Bukti</strong></td><td width="5%">:</td><td>${a.id}</td></tr>
                    <tr><td><strong>Tanggal</strong></td><td>:</td><td>${R(a.date)}</td></tr>
                    <tr><td><strong>Dibayarkan Kepada</strong></td><td>:</td><td>${a.recipient||"-"}</td></tr>
                    <tr><td><strong>Kategori Beban</strong></td><td>:</td><td>${e.label}</td></tr>
                    <tr><td><strong>Sumber Dana</strong></td><td>:</td><td>${r.label}</td></tr>
                    <tr><td><strong>Keperluan / Uraian</strong></td><td>:</td><td>${a.desc}</td></tr>
                </table>

                <div class="amount-box">
                    <div class="amount">${x(a.amount)}</div>
                    <div class="terbilang">Terbilang: ${m(a.amount)} Rupiah</div>
                </div>

                <div class="sig-grid">
                    <div class="sig-box">
                        <div>Dibukukan Oleh,</div>
                        <div class="sig-line">(${a.createdBy||"Kasir / Staf"})</div>
                    </div>
                    <div class="sig-box">
                        <div>Disetujui Oleh,</div>
                        <div class="sig-line">(Owner Toko)</div>
                    </div>
                    <div class="sig-box">
                        <div>Penerima Dana,</div>
                        <div class="sig-line">(${a.recipient||".................."})</div>
                    </div>
                </div>
            </div>
        </body>
        </html>
    `;if(typeof window.openHtmlPrintPreview=="function"){window.openHtmlPrintPreview({title:`Bukti Kas Keluar #${a.id}`,html:o,paper:"slip"});return}const s=window.open("","_blank");if(!s)return c("Izinkan pop-up untuk mencetak Bukti Kas Keluar!");s.document.write(o),s.document.close()};window.renderExpensesAdminView=A;window.openExpenseModal=V;window.closeExpenseModal=_;window.submitExpenseForm=se;window.confirmDeleteExpense=oe;window.setExpenseFilter=le;window.handleExpenseAmountInput=W;window.addQuickExpenseAmount=X;window.handleExpenseReceiptUpload=ee;window.setExpenseReceiptUrl=L;window.removeExpenseReceiptPhoto=Z;window.previewExpenseReceipt=ae;window.closeExpenseReceiptPreview=re;window.exportExpensesToCsv=ne;window.printExpenseSlip=ie;window.selectExpenseSource=I;window.renderExpenseLedgerOnly=H;export{g as EXPENSE_SOURCES,X as addQuickExpenseAmount,_ as closeExpenseModal,re as closeExpenseReceiptPreview,oe as confirmDeleteExpense,F as ensureExpenseModals,ne as exportExpensesToCsv,U as getExpenseMetrics,M as getFilteredExpenses,W as handleExpenseAmountInput,ee as handleExpenseReceiptUpload,V as openExpenseModal,ae as previewExpenseReceipt,ie as printExpenseSlip,Z as removeExpenseReceiptPhoto,q as renderExpenseLedgerHtml,H as renderExpenseLedgerOnly,A as renderExpensesAdminView,I as selectExpenseSource,le as setExpenseFilter,L as setExpenseReceiptUrl,se as submitExpenseForm};

import{e as o,f as x,I as N,a as b,x as U,a9 as B,a7 as w,v as p,B as _,a8 as O,b as q,i as E}from"./module-print-DBBpBp5N.js";import{y as F,E as f}from"./module-admin-Bn1wigNC.js";import{G}from"./index-CAVKdydF.js";import"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";import"./module-pos-DhJkrZzv.js";import"./module-faq-DZ8sd9Jw.js";import"./vendor-utils-Bszxp-Ae.js";import"./module-member-Bsycpro1.js";const g=[{key:"cash",label:"Kas Laci Toko (Tunai)",shortLabel:"Kas Toko",icon:"fa-money-bill-wave",color:"emerald"},{key:"bank",label:"Transfer Rekening Bank",shortLabel:"Transfer Bank",icon:"fa-building-columns",color:"blue"},{key:"owner",label:"Dana Pribadi / Talangan Owner",shortLabel:"Dana Owner",icon:"fa-user-shield",color:"purple"}],j=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];let y=new Date().getFullYear(),v=new Date().getMonth()+1,T="all",S="all",$="",h="newest";const Q=()=>"exp_"+Date.now()+"_"+Math.random().toString(36).substring(2,7),m=e=>{const t=["","Satu","Dua","Tiga","Empat","Lima","Enam","Tujuh","Delapan","Sembilan","Sepuluh","Sebelas"];return e=Math.floor(Math.abs(Number(e)||0)),e<12?t[e]:e<20?m(e-10)+" Belas":e<100?m(Math.floor(e/10))+" Puluh "+m(e%10):e<200?"Seratus "+m(e-100):e<1e3?m(Math.floor(e/100))+" Ratus "+m(e%100):e<2e3?"Seribu "+m(e-1e3):e<1e6?m(Math.floor(e/1e3))+" Ribu "+m(e%1e3):e<1e9?m(Math.floor(e/1e6))+" Juta "+m(e%1e6):e<1e12?m(Math.floor(e/1e9))+" Miliar "+m(e%1e9):"Jumlah Sangat Besar"},P=e=>{if(!e)return"-";try{const t=e.split("-");if(t.length===3){const r=parseInt(t[0],10),i=parseInt(t[1],10);return`${parseInt(t[2],10)} ${j[i-1]||""} ${r}`}const s=new Date(e);return isNaN(s.getTime())?e:`${s.getDate()} ${j[s.getMonth()]} ${s.getFullYear()}`}catch{return e}},L=()=>{const e=document.querySelector("#admin-content #modal-expense-form");e&&e.remove();const t=document.querySelector("#admin-content #modal-expense-receipt-preview");if(t&&t.remove(),!o("modal-expense-form")){const s=document.createElement("div");s.id="modal-expense-form",s.className="fixed inset-0 z-[150] flex hidden items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/75 opacity-0 transition-opacity duration-300",s.onclick=r=>{r.target===s&&window.closeExpenseModal?.()},s.innerHTML=`
            <div id="modal-expense-form-content" class="w-full max-w-xl max-h-[92vh] sm:max-h-[88vh] bg-white dark:bg-slate-900 rounded-t-[2rem] sm:rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-2xl flex flex-col overflow-hidden transform translate-y-full sm:translate-y-8 transition-transform duration-300" onclick="event.stopPropagation()">
                <!-- Header Modal -->
                <div class="px-5 sm:px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0 bg-slate-50/70 dark:bg-slate-800/40">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-2xl bg-gradient-to-br from-rose-500 to-amber-600 text-white flex items-center justify-center shadow-md shadow-rose-500/20 text-base">
                            <i class="fa-solid fa-money-bill-transfer"></i>
                        </div>
                        <div>
                            <h3 class="text-sm sm:text-base font-black text-slate-800 dark:text-white" id="modal-expense-title">Catat Pengeluaran Baru</h3>
                            <p class="text-[10px] text-slate-400 font-medium">Buku Kas &amp; Beban Operasional Toko</p>
                        </div>
                    </div>
                    <button type="button" onclick="closeExpenseModal()" class="w-9 h-9 rounded-xl flex items-center justify-center text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors cursor-pointer">
                        <i class="fa-solid fa-xmark text-lg"></i>
                    </button>
                </div>

                <!-- Form Body (Scrollable) -->
                <form id="form-expense-entry" onsubmit="event.preventDefault(); window.submitExpenseForm();" class="p-5 sm:p-6 overflow-y-auto space-y-4 flex-1">
                    <input type="hidden" id="exp-input-id" value="">

                    <!-- Baris 1: Tanggal & Kategori -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div>
                            <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                                <i class="fa-regular fa-calendar text-rose-500 mr-1"></i> Tanggal Transaksi <span class="text-rose-500">*</span>
                            </label>
                            <input type="date" id="exp-input-date" required class="w-full text-xs font-bold bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-slate-800 dark:text-white focus:outline-hidden focus:border-rose-500 transition-colors">
                        </div>
                        <div>
                            <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                                <i class="fa-solid fa-tags text-rose-500 mr-1"></i> Kategori Beban <span class="text-rose-500">*</span>
                            </label>
                            <select id="exp-input-category" required class="w-full text-xs font-bold bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-slate-800 dark:text-white focus:outline-hidden focus:border-rose-500 transition-colors cursor-pointer">
                                ${f.map(r=>`<option value="${r.key}">${r.label}</option>`).join("")}
                            </select>
                        </div>
                    </div>

                    <!-- Baris 2: Nominal Pengeluaran + Quick Chips -->
                    <div>
                        <div class="flex items-center justify-between mb-1.5">
                            <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                                <i class="fa-solid fa-rupiah-sign text-rose-500 mr-1"></i> Nominal Pengeluaran <span class="text-rose-500">*</span>
                            </label>
                            <span class="text-[10px] font-bold text-rose-500" id="exp-nominal-preview">Rp 0</span>
                        </div>
                        <div class="relative">
                            <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-black text-slate-400">Rp</span>
                            <input type="text" id="exp-input-amount" inputmode="numeric" placeholder="0" required oninput="window.handleExpenseAmountInput(this)" class="w-full pl-11 pr-4 py-2.5 text-sm font-black bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-hidden focus:border-rose-500 transition-colors">
                        </div>
                        <!-- Quick Nominal Chips -->
                        <div class="flex flex-wrap items-center gap-1.5 mt-2">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-wider mr-1">Cepat:</span>
                            <button type="button" onclick="window.addQuickExpenseAmount(10000)" class="px-2 py-0.5 text-[10px] font-bold rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-rose-400 text-slate-700 dark:text-slate-300 active:scale-95 transition-all">+10 rb</button>
                            <button type="button" onclick="window.addQuickExpenseAmount(25000)" class="px-2 py-0.5 text-[10px] font-bold rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-rose-400 text-slate-700 dark:text-slate-300 active:scale-95 transition-all">+25 rb</button>
                            <button type="button" onclick="window.addQuickExpenseAmount(50000)" class="px-2 py-0.5 text-[10px] font-bold rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-rose-400 text-slate-700 dark:text-slate-300 active:scale-95 transition-all">+50 rb</button>
                            <button type="button" onclick="window.addQuickExpenseAmount(100000)" class="px-2 py-0.5 text-[10px] font-bold rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-rose-400 text-slate-700 dark:text-slate-300 active:scale-95 transition-all">+100 rb</button>
                            <button type="button" onclick="window.addQuickExpenseAmount(500000)" class="px-2 py-0.5 text-[10px] font-bold rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-rose-400 text-slate-700 dark:text-slate-300 active:scale-95 transition-all">+500 rb</button>
                        </div>
                    </div>

                    <!-- Baris 3: Keperluan / Deskripsi Pengeluaran -->
                    <div>
                        <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                            <i class="fa-solid fa-align-left text-rose-500 mr-1"></i> Keperluan / Uraian Beban <span class="text-rose-500">*</span>
                        </label>
                        <textarea id="exp-input-desc" rows="2" required placeholder="Contoh: Beli lakban cokelat 5 roll, isi ulang galon, token listrik toko..." class="w-full text-xs font-medium bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl p-3 text-slate-800 dark:text-white focus:outline-hidden focus:border-rose-500 transition-colors"></textarea>
                    </div>

                    <!-- Baris 4: Sumber Pembayaran Dana -->
                    <div>
                        <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                            <i class="fa-solid fa-wallet text-rose-500 mr-1"></i> Sumber Dana Pembayaran <span class="text-rose-500">*</span>
                        </label>
                        <div class="grid grid-cols-3 gap-2" id="exp-source-selector">
                            ${g.map(r=>`
                                <label class="relative flex flex-col items-center justify-center p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/70 dark:bg-slate-800/50 cursor-pointer text-center transition-all hover:border-slate-400 select-none group has-checked:border-rose-500 has-checked:bg-rose-50/40 dark:has-checked:bg-rose-950/20 has-checked:text-rose-600">
                                    <input type="radio" name="exp_source" value="${r.key}" class="sr-only" ${r.key==="cash"?"checked":""}>
                                    <i class="fa-solid ${r.icon} text-sm mb-1 text-slate-500 group-hover:text-slate-800 dark:group-hover:text-white"></i>
                                    <span class="text-[10px] font-bold text-slate-800 dark:text-slate-200 leading-tight">${r.shortLabel}</span>
                                </label>
                            `).join("")}
                        </div>
                    </div>

                    <!-- Baris 5: Toko / Penerima Dana (Opsional) -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div>
                            <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                                <i class="fa-solid fa-store text-rose-500 mr-1"></i> Dibayarkan Kepada / Vendor <span class="text-[9px] text-slate-400 lowercase">(opsional)</span>
                            </label>
                            <input type="text" id="exp-input-recipient" placeholder="Contoh: Toko Plastik Berkah, PLN, SPBU..." class="w-full text-xs font-semibold bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-slate-800 dark:text-white focus:outline-hidden focus:border-rose-500 transition-colors">
                        </div>
                        <div>
                            <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                                <i class="fa-solid fa-user-pen text-rose-500 mr-1"></i> Dicatat Oleh <span class="text-[9px] text-slate-400 lowercase">(opsional)</span>
                            </label>
                            <input type="text" id="exp-input-createdby" placeholder="Owner / Kasir Shift" class="w-full text-xs font-semibold bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-slate-800 dark:text-white focus:outline-hidden focus:border-rose-500 transition-colors">
                        </div>
                    </div>

                    <!-- Baris 6: Foto Bukti Struk / Nota (Upload & Preview) -->
                    <div>
                        <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                            <i class="fa-solid fa-receipt text-rose-500 mr-1"></i> Foto Bukti Struk / Nota Fisik <span class="text-[9px] text-slate-400 lowercase">(opsional)</span>
                        </label>
                        <div class="flex items-center gap-3">
                            <div id="exp-receipt-preview-box" class="w-16 h-16 rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden shrink-0 relative group">
                                <i class="fa-regular fa-image text-slate-400 text-xl" id="exp-receipt-placeholder-icon"></i>
                                <img id="exp-receipt-preview-img" src="" alt="Bukti Struk" class="w-full h-full object-cover hidden">
                                <button type="button" id="exp-receipt-remove-btn" onclick="window.removeExpenseReceiptPhoto()" class="absolute inset-0 bg-slate-900/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hidden cursor-pointer">
                                    <i class="fa-solid fa-trash-can text-sm text-rose-400"></i>
                                </button>
                            </div>
                            <div class="flex-1 space-y-1.5">
                                <input type="hidden" id="exp-input-receipt-url" value="">
                                <div class="flex items-center gap-2">
                                    <label class="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold cursor-pointer transition-colors flex items-center gap-1.5 active:scale-95">
                                        <i class="fa-solid fa-camera text-rose-500"></i>
                                        <span>Ambil Foto / Pilih File</span>
                                        <input type="file" accept="image/*" class="sr-only" onchange="window.handleExpenseReceiptUpload(this)">
                                    </label>
                                    <span class="text-[10px] text-slate-400">JPG, PNG, WEBP (maks. 5MB)</span>
                                </div>
                                <input type="url" id="exp-input-receipt-manual" placeholder="Atau tempel URL gambar langsung..." oninput="window.setExpenseReceiptUrl(this.value)" class="w-full text-[11px] bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-lg px-2.5 py-1.5 text-slate-700 dark:text-slate-300 focus:outline-hidden">
                            </div>
                        </div>
                    </div>

                    <!-- Footer Action Buttons -->
                    <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end gap-2.5">
                        <button type="button" onclick="closeExpenseModal()" class="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer">
                            Batal
                        </button>
                        <button type="submit" id="btn-save-expense" class="px-6 py-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-amber-600 hover:from-rose-600 hover:to-amber-700 text-white text-xs font-black shadow-md shadow-rose-500/25 transition-all cursor-pointer active:scale-95 flex items-center gap-2">
                            <i class="fa-solid fa-floppy-disk"></i>
                            <span>Simpan Pengeluaran</span>
                        </button>
                    </div>
                </form>
            </div>
        `,document.body.appendChild(s)}if(!o("modal-expense-receipt-preview")){const s=document.createElement("div");s.id="modal-expense-receipt-preview",s.className="fixed inset-0 z-[160] flex hidden items-center justify-center p-4 bg-slate-950/90 opacity-0 transition-opacity duration-300",s.onclick=()=>window.closeExpenseReceiptPreview?.(),s.innerHTML=`
            <div class="relative max-w-3xl max-h-[90vh] bg-slate-900 rounded-2xl border border-slate-800 p-2 shadow-2xl flex flex-col items-center justify-center" onclick="event.stopPropagation()">
                <button type="button" onclick="closeExpenseReceiptPreview()" class="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-lg hover:bg-rose-700 cursor-pointer z-10">
                    <i class="fa-solid fa-xmark"></i>
                </button>
                <img id="img-full-receipt" src="" alt="Bukti Nota" class="max-h-[82vh] w-auto max-w-full rounded-xl object-contain">
                <p id="caption-full-receipt" class="text-xs text-slate-300 font-bold mt-2 text-center"></p>
            </div>
        `,document.body.appendChild(s)}},I=()=>(Array.isArray(b.expenses)?b.expenses:[]).filter(t=>{if(!t||!t.date)return!1;const[s,r]=t.date.split("-"),i=parseInt(s,10),a=parseInt(r,10);if(y&&i!==y||v!==0&&a!==v||T!=="all"&&t.category!==T||S!=="all"&&t.source!==S)return!1;if($&&$.trim()){const n=$.toLowerCase().trim(),l=(t.desc||"").toLowerCase().includes(n),d=(t.recipient||"").toLowerCase().includes(n),c=(t.category||"").toLowerCase().includes(n),u=(t.amount||"").toString().includes(n);if(!l&&!d&&!c&&!u)return!1}return!0}).sort((t,s)=>{if(h==="highest")return(s.amount||0)-(t.amount||0);if(h==="lowest")return(t.amount||0)-(s.amount||0);if(h==="oldest")return(new Date(t.date).getTime()||0)-(new Date(s.date).getTime()||0);const r=(new Date(s.date).getTime()||0)-(new Date(t.date).getTime()||0);return r!==0?r:(s.createdAt||0)-(t.createdAt||0)}),z=()=>{const e=I();let t=0;const s={cash:0,bank:0,owner:0},r={};f.forEach(l=>{r[l.key]=0}),e.forEach(l=>{const d=parseFloat(l.amount)||0;t+=d;const c=l.source||"cash";s[c]!==void 0?s[c]+=d:s.cash+=d;const u=l.category||"lainnya";r[u]!==void 0?r[u]+=d:r.lainnya+=d});let i="lainnya",a=0;Object.entries(r).forEach(([l,d])=>{d>a&&(a=d,i=l)});const n=f.find(l=>l.key===i)||f[6];return{count:e.length,totalAmount:t,bySource:s,byCategory:r,topCategory:{...n,amount:a,percent:t>0?(a/t*100).toFixed(0):"0"}}},R=()=>{L();const e=z(),t=I(),s=v===0?`Tahun ${y}`:`${j[v-1]} ${y}`,r=new Date().getFullYear(),i=[r-2,r-1,r,r+1];q("admin-content",`
        <div class="space-y-6 pb-12">
            <!-- 1. TOP APP BAR & QUICK ACTION -->
            <div class="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
                <div class="flex items-center gap-3.5">
                    <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-500 via-rose-600 to-amber-600 text-white flex items-center justify-center shadow-lg shadow-rose-500/25 text-xl shrink-0">
                        <i class="fa-solid fa-money-bill-transfer"></i>
                    </div>
                    <div>
                        <div class="flex items-center gap-2">
                            <h2 class="text-base sm:text-lg font-black text-slate-800 dark:text-white">Buku Kas &amp; Biaya Operasional</h2>
                            <span class="px-2 py-0.5 rounded-full text-[10px] font-black bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-400 border border-rose-200 dark:border-rose-900/60">
                                ${e.count} Transaksi
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
                    <button type="button" onclick="openExpenseModal()" class="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-amber-600 hover:from-rose-600 hover:to-amber-700 text-white text-xs font-black shadow-md shadow-rose-500/25 transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95">
                        <i class="fa-solid fa-plus"></i>
                        <span>Catat Pengeluaran</span>
                    </button>
                </div>
            </div>

            <!-- 2. BENTO STAT CARDS -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <!-- Card 1: Total Beban Periode Ini -->
                <div class="p-4 sm:p-5 rounded-2xl border border-rose-200/80 dark:border-rose-950/50 bg-gradient-to-br from-rose-50/70 via-white to-amber-50/30 dark:from-rose-950/20 dark:via-slate-900 dark:to-slate-900 flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-[10px] font-black uppercase tracking-widest text-rose-700 dark:text-rose-400">Total Biaya Operasional</span>
                        <div class="w-7 h-7 rounded-lg bg-rose-500/10 text-rose-600 flex items-center justify-center text-xs"><i class="fa-solid fa-calculator"></i></div>
                    </div>
                    <div class="my-1">
                        <p class="text-lg sm:text-2xl font-black text-rose-600 dark:text-rose-400 truncate">${x(e.totalAmount)}</p>
                        <p class="text-[10px] text-slate-400 mt-0.5">${s} (${e.count} nota)</p>
                    </div>
                    <div class="mt-2 pt-2 border-t border-rose-100 dark:border-slate-800 text-[10px] text-slate-500 dark:text-slate-400 flex items-center justify-between">
                        <span>Mengurangi Laba Kotor</span>
                        <i class="fa-solid fa-arrow-trend-down text-rose-500"></i>
                    </div>
                </div>

                <!-- Card 2: Beban Terbesar -->
                <div class="p-4 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">Beban Terbesar</span>
                        <div class="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center text-xs"><i class="fa-solid fa-crown"></i></div>
                    </div>
                    <div class="my-1">
                        <p class="text-sm sm:text-base font-black text-slate-800 dark:text-white truncate">${e.topCategory.label}</p>
                        <p class="text-xs sm:text-sm font-bold text-amber-600 dark:text-amber-400 mt-0.5">${x(e.topCategory.amount)}</p>
                    </div>
                    <div class="mt-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-[10px] text-slate-400 flex items-center justify-between">
                        <span>Porsi Alokasi</span>
                        <span class="font-bold text-slate-700 dark:text-slate-300">${e.topCategory.percent}%</span>
                    </div>
                </div>

                <!-- Card 3: Kas Laci Toko (Tunai Petty Cash) -->
                <div class="p-4 sm:p-5 rounded-2xl border border-emerald-200/70 dark:border-emerald-950/40 bg-white dark:bg-slate-900 flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-[10px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Kas Laci Toko (Tunai)</span>
                        <div class="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center text-xs"><i class="fa-solid fa-money-bill-wave"></i></div>
                    </div>
                    <div class="my-1">
                        <p class="text-base sm:text-xl font-black text-slate-800 dark:text-white truncate">${x(e.bySource.cash)}</p>
                        <p class="text-[10px] text-slate-400 mt-0.5">Uang fisik dari kasir</p>
                    </div>
                    <div class="mt-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-[10px] text-slate-400 flex items-center justify-between">
                        <span>Porsi Tunai</span>
                        <span class="font-bold text-emerald-600">${e.totalAmount>0?(e.bySource.cash/e.totalAmount*100).toFixed(0):"0"}%</span>
                    </div>
                </div>

                <!-- Card 4: Transfer Bank & Talangan Owner -->
                <div class="p-4 sm:p-5 rounded-2xl border border-blue-200/70 dark:border-blue-950/40 bg-white dark:bg-slate-900 flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-[10px] font-black uppercase tracking-widest text-blue-600 dark:text-blue-400">Bank &amp; Dana Owner</span>
                        <div class="w-7 h-7 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center text-xs"><i class="fa-solid fa-building-columns"></i></div>
                    </div>
                    <div class="my-1">
                        <p class="text-base sm:text-xl font-black text-slate-800 dark:text-white truncate">${x(e.bySource.bank+e.bySource.owner)}</p>
                        <p class="text-[10px] text-slate-400 mt-0.5">Bank: ${x(e.bySource.bank)} | Owner: ${x(e.bySource.owner)}</p>
                    </div>
                    <div class="mt-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-[10px] text-slate-400 flex items-center justify-between">
                        <span>Non-Tunai</span>
                        <span class="font-bold text-blue-600">${e.totalAmount>0?((e.bySource.bank+e.bySource.owner)/e.totalAmount*100).toFixed(0):"0"}%</span>
                    </div>
                </div>
            </div>

            <!-- 3. DISTRIBUSI KATEGORI BEBAN (HORIZONTAL MINI PROGRESS) -->
            <div class="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 sm:p-5 space-y-3">
                <div class="flex items-center justify-between">
                    <h3 class="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-white flex items-center gap-2">
                        <i class="fa-solid fa-chart-pie text-rose-500"></i> Alokasi Kategori Biaya Operasional
                    </h3>
                    <button type="button" onclick="openAdminTab('reports')" class="text-[11px] font-bold text-amber-600 hover:text-amber-700 transition-colors flex items-center gap-1">
                        <span>Lihat di Laba Rugi</span>
                        <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                    </button>
                </div>
                <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
                    ${f.map(a=>{const n=e.byCategory[a.key]||0,l=e.totalAmount>0?(n/e.totalAmount*100).toFixed(0):"0";return`
                            <div class="p-3 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 flex flex-col justify-between">
                                <div class="flex items-center justify-between mb-1">
                                    <span class="text-[9px] font-bold text-slate-500 dark:text-slate-400 uppercase truncate">${a.label.split(" ")[0]}</span>
                                    <i class="fa-solid ${a.icon} text-[10px] text-slate-400"></i>
                                </div>
                                <p class="text-xs font-black text-slate-800 dark:text-white truncate">${x(n)}</p>
                                <div class="mt-2 w-full bg-slate-200 dark:bg-slate-700 h-1 rounded-full overflow-hidden">
                                    <div class="bg-rose-500 h-full rounded-full" style="width: ${l}%"></div>
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
                            ${i.map(a=>`<option value="${a}" ${a===y?"selected":""}>${a}</option>`).join("")}
                        </select>
                    </div>

                    <!-- Filter Bulan -->
                    <div>
                        <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Bulan</label>
                        <select onchange="window.setExpenseFilter('month', this.value)" class="w-full text-xs font-bold bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-slate-800 dark:text-white focus:outline-hidden">
                            <option value="0" ${v===0?"selected":""}>Semua Bulan (Setahun)</option>
                            ${j.map((a,n)=>`<option value="${n+1}" ${n+1===v?"selected":""}>${a}</option>`).join("")}
                        </select>
                    </div>

                    <!-- Filter Kategori -->
                    <div>
                        <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Kategori</label>
                        <select onchange="window.setExpenseFilter('category', this.value)" class="w-full text-xs font-bold bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-slate-800 dark:text-white focus:outline-hidden">
                            <option value="all" ${T==="all"?"selected":""}>Semua Kategori</option>
                            ${f.map(a=>`<option value="${a.key}" ${a.key===T?"selected":""}>${a.label}</option>`).join("")}
                        </select>
                    </div>

                    <!-- Filter Sumber Pembayaran -->
                    <div>
                        <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Sumber Dana</label>
                        <select onchange="window.setExpenseFilter('source', this.value)" class="w-full text-xs font-bold bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-slate-800 dark:text-white focus:outline-hidden">
                            <option value="all" ${S==="all"?"selected":""}>Semua Sumber</option>
                            ${g.map(a=>`<option value="${a.key}" ${a.key===S?"selected":""}>${a.label}</option>`).join("")}
                        </select>
                    </div>

                    <!-- Filter Urutan / Sort -->
                    <div>
                        <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Urutkan</label>
                        <select onchange="window.setExpenseFilter('sort', this.value)" class="w-full text-xs font-bold bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-slate-800 dark:text-white focus:outline-hidden">
                            <option value="newest" ${h==="newest"?"selected":""}>Tanggal Terbaru</option>
                            <option value="oldest" ${h==="oldest"?"selected":""}>Tanggal Terlama</option>
                            <option value="highest" ${h==="highest"?"selected":""}>Nominal Terbesar</option>
                            <option value="lowest" ${h==="lowest"?"selected":""}>Nominal Terkecil</option>
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
                        <p class="text-[10px] text-slate-400 mt-0.5">Menampilkan ${t.length} dari total ${(b.expenses||[]).length} catatan</p>
                    </div>
                    <span class="text-xs font-black text-rose-600 dark:text-rose-400">${x(e.totalAmount)}</span>
                </div>

                ${t.length===0?`
                    <!-- Empty State -->
                    <div class="py-16 px-4 text-center flex flex-col items-center justify-center">
                        <div class="w-16 h-16 rounded-2xl bg-rose-50 dark:bg-rose-950/40 text-rose-500 border border-rose-200/60 dark:border-rose-900/40 flex items-center justify-center text-2xl mb-3">
                            <i class="fa-solid fa-receipt"></i>
                        </div>
                        <h4 class="text-sm font-bold text-slate-700 dark:text-slate-200">Belum Ada Catatan Biaya Operasional</h4>
                        <p class="text-xs text-slate-400 max-w-sm mt-1">Belum ada transaksi pengeluaran operasional yang dicatat untuk filter periode ini.</p>
                        <button type="button" onclick="openExpenseModal()" class="mt-4 px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-amber-600 text-white text-xs font-bold shadow-md shadow-rose-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2">
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
                                ${t.map(a=>{const n=f.find(c=>c.key===a.category)||f[6],l=g.find(c=>c.key===a.source)||g[0],d=!!a.receiptImg;return`
                                        <tr class="hover:bg-slate-50/60 dark:hover:bg-slate-800/30 transition-colors">
                                            <td class="py-3.5 px-4 font-bold text-slate-700 dark:text-slate-300 whitespace-nowrap">
                                                <div class="flex items-center gap-2">
                                                    <i class="fa-regular fa-calendar text-slate-400"></i>
                                                    <span>${P(a.date)}</span>
                                                </div>
                                            </td>
                                            <td class="py-3.5 px-4">
                                                <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                                                    <i class="fa-solid ${n.icon} text-rose-500"></i>
                                                    <span>${n.label}</span>
                                                </span>
                                            </td>
                                            <td class="py-3.5 px-4">
                                                <p class="font-bold text-slate-800 dark:text-white">${E(a.desc)}</p>
                                                ${a.recipient?`<p class="text-[10px] text-slate-400 mt-0.5"><i class="fa-solid fa-store mr-1 text-slate-300"></i>Penerima: <span class="font-semibold text-slate-600 dark:text-slate-300">${E(a.recipient)}</span></p>`:""}
                                            </td>
                                            <td class="py-3.5 px-4">
                                                <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold ${a.source==="cash"?"bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 border border-emerald-200 dark:border-emerald-800/50":a.source==="bank"?"bg-blue-50 dark:bg-blue-950/40 text-blue-600 border border-blue-200 dark:border-blue-800/50":"bg-purple-50 dark:bg-purple-950/40 text-purple-600 border border-purple-200 dark:border-purple-800/50"}">
                                                    <i class="fa-solid ${l.icon} text-[9px]"></i>
                                                    <span>${l.shortLabel}</span>
                                                </span>
                                            </td>
                                            <td class="py-3.5 px-4 text-center">
                                                ${d?`
                                                    <button type="button" onclick="window.previewExpenseReceipt('${a.id}')" title="Lihat Foto Struk" class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-600 dark:text-amber-400 transition-colors cursor-pointer">
                                                        <i class="fa-solid fa-image text-xs"></i>
                                                    </button>
                                                `:'<span class="text-[10px] text-slate-300 dark:text-slate-600">-</span>'}
                                            </td>
                                            <td class="py-3.5 px-4 text-right whitespace-nowrap">
                                                <span class="font-black text-rose-600 dark:text-rose-400 text-sm">- ${x(a.amount)}</span>
                                            </td>
                                            <td class="py-3.5 px-4 text-center whitespace-nowrap">
                                                <div class="inline-flex items-center gap-1.5">
                                                    <button type="button" onclick="window.printExpenseSlip('${a.id}')" title="Cetak Bukti Kas Keluar (BKK)" class="w-7 h-7 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center transition-colors cursor-pointer">
                                                        <i class="fa-solid fa-print text-xs"></i>
                                                    </button>
                                                    <button type="button" onclick="window.openExpenseModal('${a.id}')" title="Edit Pengeluaran" class="w-7 h-7 rounded-lg text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/40 flex items-center justify-center transition-colors cursor-pointer">
                                                        <i class="fa-solid fa-pen-to-square text-xs"></i>
                                                    </button>
                                                    <button type="button" onclick="window.confirmDeleteExpense('${a.id}')" title="Hapus Pengeluaran" class="w-7 h-7 rounded-lg text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 flex items-center justify-center transition-colors cursor-pointer">
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
                        ${t.map(a=>{const n=f.find(c=>c.key===a.category)||f[6],l=g.find(c=>c.key===a.source)||g[0],d=!!a.receiptImg;return`
                                <div class="p-4 space-y-2.5">
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center gap-2">
                                            <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                                                <i class="fa-solid ${n.icon} text-rose-500 text-[9px]"></i>
                                                <span>${n.label}</span>
                                            </span>
                                            <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold ${a.source==="cash"?"bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600":a.source==="bank"?"bg-blue-50 dark:bg-blue-950/40 text-blue-600":"bg-purple-50 dark:bg-purple-950/40 text-purple-600"}">
                                                <i class="fa-solid ${l.icon} text-[8px]"></i>
                                                <span>${l.shortLabel}</span>
                                            </span>
                                        </div>
                                        <span class="text-[10px] text-slate-400 font-bold">${P(a.date)}</span>
                                    </div>

                                    <div>
                                        <p class="text-xs font-black text-slate-800 dark:text-white leading-snug">${E(a.desc)}</p>
                                        ${a.recipient?`<p class="text-[10px] text-slate-400 mt-0.5"><i class="fa-solid fa-store mr-1 text-slate-300"></i>Penerima: ${E(a.recipient)}</p>`:""}
                                    </div>

                                    <div class="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800/60">
                                        <div class="flex items-center gap-2">
                                            <span class="text-sm font-black text-rose-600 dark:text-rose-400">- ${x(a.amount)}</span>
                                            ${d?`
                                                <button type="button" onclick="window.previewExpenseReceipt('${a.id}')" class="px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 text-[10px] font-bold flex items-center gap-1 cursor-pointer">
                                                    <i class="fa-solid fa-image text-[9px]"></i> Nota
                                                </button>
                                            `:""}
                                        </div>
                                        <div class="flex items-center gap-1">
                                            <button type="button" onclick="window.printExpenseSlip('${a.id}')" title="Cetak BKK" class="w-8 h-8 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white flex items-center justify-center active:scale-90">
                                                <i class="fa-solid fa-print text-xs"></i>
                                            </button>
                                            <button type="button" onclick="window.openExpenseModal('${a.id}')" title="Edit" class="w-8 h-8 rounded-lg text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/40 flex items-center justify-center active:scale-90">
                                                <i class="fa-solid fa-pen-to-square text-xs"></i>
                                            </button>
                                            <button type="button" onclick="window.confirmDeleteExpense('${a.id}')" title="Hapus" class="w-8 h-8 rounded-lg text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 flex items-center justify-center active:scale-90">
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
    `)},H=(e=null)=>{L();const t=o("modal-expense-form"),s=o("modal-expense-form-content"),r=o("modal-expense-title"),i=o("btn-save-expense");if(t){if(e){const a=(b.expenses||[]).find(l=>l.id===e);if(!a)return p("Data pengeluaran tidak ditemukan!");r&&(r.innerText="Edit Catatan Pengeluaran"),i&&(i.querySelector("span").innerText="Perbarui Pengeluaran"),o("exp-input-id").value=a.id,o("exp-input-date").value=a.date||new Date().toISOString().split("T")[0],o("exp-input-category").value=a.category||"lainnya",o("exp-input-amount").value=new Intl.NumberFormat("id-ID").format(a.amount||0),o("exp-nominal-preview").innerText=x(a.amount||0),o("exp-input-desc").value=a.desc||"",o("exp-input-recipient").value=a.recipient||"",o("exp-input-createdby").value=a.createdBy||"",o("exp-input-receipt-url").value=a.receiptImg||"",o("exp-input-receipt-manual").value=a.receiptImg||"",document.querySelectorAll('input[name="exp_source"]').forEach(l=>{l.checked=l.value===(a.source||"cash")}),C(a.receiptImg||"")}else r&&(r.innerText="Catat Pengeluaran Baru"),i&&(i.querySelector("span").innerText="Simpan Pengeluaran"),o("exp-input-id").value="",o("exp-input-date").value=new Date().toISOString().split("T")[0],o("exp-input-category").value="kemasan",o("exp-input-amount").value="",o("exp-nominal-preview").innerText="Rp 0",o("exp-input-desc").value="",o("exp-input-recipient").value="",o("exp-input-createdby").value="Owner",o("exp-input-receipt-url").value="",o("exp-input-receipt-manual").value="",document.querySelectorAll('input[name="exp_source"]').forEach(n=>{n.checked=n.value==="cash"}),C("");_(t,s)}},K=()=>{const e=o("modal-expense-form"),t=o("modal-expense-form-content");e&&N(e,t,()=>{})},J=e=>{let t=e.value.replace(/[^0-9]/g,"");const s=parseInt(t,10)||0;e.value=t?new Intl.NumberFormat("id-ID").format(s):"",setIn("exp-nominal-preview",x(s))},Y=e=>{const t=o("exp-input-amount");if(!t)return;let s=parseInt(t.value.replace(/[^0-9]/g,""),10)||0;s+=e,t.value=new Intl.NumberFormat("id-ID").format(s),setIn("exp-nominal-preview",x(s))},C=e=>{o("exp-receipt-preview-box");const t=o("exp-receipt-placeholder-icon"),s=o("exp-receipt-preview-img"),r=o("exp-receipt-remove-btn");e?(s&&(s.src=O(e),s.classList.remove("hidden")),t&&t.classList.add("hidden"),r&&r.classList.remove("hidden")):(s&&(s.src="",s.classList.add("hidden")),t&&t.classList.remove("hidden"),r&&r.classList.add("hidden"))},D=e=>{const t=(e||"").trim();o("exp-input-receipt-url").value=t,C(t)},W=()=>{o("exp-input-receipt-url").value="",o("exp-input-receipt-manual").value="",C(""),p("Foto struk dihapus")},V=async e=>{const t=e.files[0];if(t){if(!t.type.startsWith("image/"))return e.value="",p("Hanya file gambar (JPG, PNG, WEBP) yang diperbolehkan!");B("Memproses foto nota...");try{const s=await X(t,1e3,.75),r=window.GAS_UPLOAD_URL||G;if(r&&!r.includes("ISI_DENGAN")){B("Mengunggah foto nota ke Google Drive...");try{const i={name:"EXP_NOTA_"+Date.now()+".jpg",mimeType:"image/jpeg",data:s.split(",")[1],token:"B7qgwFQqtYLpBqdaK69HgtCfR7s5t67p"},n=await(await fetch(r,{method:"POST",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify(i)})).json();if(n&&n.status==="success"&&n.url){w(),D(n.url),o("exp-input-receipt-manual").value=n.url,p("Foto nota berhasil diunggah!");return}}catch(i){console.warn("[Expenses] Gagal upload ke GAS, menggunakan kompresi lokal:",i)}}w(),D(s),p("Foto nota tersimpan!")}catch(s){w(),p("Gagal memproses gambar: "+s.message)}}},X=(e,t=1e3,s=.75)=>new Promise((r,i)=>{const a=new FileReader;a.readAsDataURL(e),a.onload=n=>{const l=new Image;l.src=n.target.result,l.onload=()=>{let d=l.width,c=l.height;(d>t||c>t)&&(d>c?(c=Math.round(c*t/d),d=t):(d=Math.round(d*t/c),c=t));const u=document.createElement("canvas");u.width=d,u.height=c,u.getContext("2d").drawImage(l,0,0,d,c);const k=u.toDataURL("image/jpeg",s);r(k)},l.onerror=i},a.onerror=i}),Z=e=>{const t=(b.expenses||[]).find(a=>a.id===e);if(!t||!t.receiptImg)return p("Foto struk tidak tersedia");const s=o("modal-expense-receipt-preview"),r=o("img-full-receipt"),i=o("caption-full-receipt");r&&(r.src=O(t.receiptImg)),i&&(i.innerText=`${P(t.date)} — ${t.desc} (${x(t.amount)})`),s&&(s.classList.remove("hidden"),requestAnimationFrame(()=>s.classList.remove("opacity-0")))},ee=()=>{const e=o("modal-expense-receipt-preview");e&&(e.classList.add("opacity-0"),setTimeout(()=>e.classList.add("hidden"),250))},te=async()=>{const e=o("exp-input-id").value,t=o("exp-input-date").value,s=o("exp-input-category").value,r=o("exp-input-amount").value.replace(/[^0-9]/g,""),i=parseInt(r,10),a=o("exp-input-desc").value.trim(),n=o("exp-input-recipient").value.trim(),l=o("exp-input-createdby").value.trim()||"Owner",d=o("exp-input-receipt-url").value.trim(),c=document.querySelector('input[name="exp_source"]:checked'),u=c?c.value:"cash";if(!t)return p("Pilih tanggal transaksi!");if(!s)return p("Pilih kategori pengeluaran!");if(!i||i<=0)return p("Masukkan nominal pengeluaran yang valid!");if(!a)return p("Isi keperluan / uraian pengeluaran!");B("Menyimpan pengeluaran..."),Array.isArray(b.expenses)||(b.expenses=[]);const A=Date.now();if(e){const k=b.expenses.findIndex(M=>M.id===e);k!==-1&&(b.expenses[k]={...b.expenses[k],date:t,category:s,amount:i,desc:a,source:u,recipient:n,createdBy:l,receiptImg:d,updatedAt:A})}else{const k={id:Q(),date:t,category:s,amount:i,desc:a,source:u,recipient:n,createdBy:l,receiptImg:d,createdAt:A,updatedAt:A};b.expenses.unshift(k)}try{await F(["expenses"]),w(),K(),p(e?"Pengeluaran berhasil diperbarui! 💸":"Pengeluaran baru berhasil dicatat! 💸"),R()}catch(k){w(),p("Gagal menyimpan ke server: "+k.message)}},ae=e=>{const t=(b.expenses||[]).find(s=>s.id===e);t&&U("Hapus Catatan Pengeluaran",`Apakah Anda yakin ingin menghapus catatan pengeluaran "${t.desc}" sebesar ${x(t.amount)}? Data tidak dapat dipulihkan.`,async()=>{B("Menghapus pengeluaran..."),b.expenses=(b.expenses||[]).filter(s=>s.id!==e);try{await F(["expenses"]),w(),p("Catatan pengeluaran dihapus!"),R()}catch(s){w(),p("Gagal menghapus: "+s.message)}})},se=(e,t)=>{e==="year"?y=parseInt(t,10):e==="month"?v=parseInt(t,10):e==="category"?T=t:e==="source"?S=t:e==="sort"?h=t:e==="search"&&($=t),R()},re=()=>{const e=I();if(e.length===0)return p("Tidak ada data untuk diekspor!");const t=["ID","Tanggal","Kategori","Keperluan","Penerima","Sumber Dana","Nominal (Rp)","Dicatat Oleh"],s=e.map(l=>{const d=f.find(u=>u.key===l.category)||f[6],c=g.find(u=>u.key===l.source)||g[0];return[`"${l.id||""}"`,`"${l.date||""}"`,`"${d.label.replace(/"/g,'""')}"`,`"${(l.desc||"").replace(/"/g,'""')}"`,`"${(l.recipient||"-").replace(/"/g,'""')}"`,`"${c.label}"`,`"${l.amount||0}"`,`"${(l.createdBy||"Owner").replace(/"/g,'""')}"`].join(",")}),r="\uFEFF"+[t.join(","),...s].join(`\r
`),i=new Blob([r],{type:"text/csv;charset=utf-8;"}),a=URL.createObjectURL(i),n=document.createElement("a");n.href=a,n.download=`Buku_Kas_Pengeluaran_TokoPutri_${y}_${v||"Semua"}.csv`,n.click(),URL.revokeObjectURL(a),p("File Excel/CSV berhasil diunduh! 📊")},oe=e=>{const t=(b.expenses||[]).find(n=>n.id===e);if(!t)return p("Data tidak ditemukan");const s=f.find(n=>n.key===t.category)||f[6],r=g.find(n=>n.key===t.source)||g[0],i=b.store||{},a=window.open("","_blank");if(!a)return p("Izinkan pop-up untuk mencetak Bukti Kas Keluar!");a.document.write(`
        <!DOCTYPE html>
        <html lang="id">
        <head>
            <meta charset="UTF-8">
            <title>BKK - ${t.id}</title>
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
                    <tr><td width="30%"><strong>No. Bukti</strong></td><td width="5%">:</td><td>${t.id}</td></tr>
                    <tr><td><strong>Tanggal</strong></td><td>:</td><td>${P(t.date)}</td></tr>
                    <tr><td><strong>Dibayarkan Kepada</strong></td><td>:</td><td>${t.recipient||"-"}</td></tr>
                    <tr><td><strong>Kategori Beban</strong></td><td>:</td><td>${s.label}</td></tr>
                    <tr><td><strong>Sumber Dana</strong></td><td>:</td><td>${r.label}</td></tr>
                    <tr><td><strong>Keperluan / Uraian</strong></td><td>:</td><td>${t.desc}</td></tr>
                </table>

                <div class="amount-box">
                    <div class="amount">${x(t.amount)}</div>
                    <div class="terbilang">Terbilang: ${m(t.amount)} Rupiah</div>
                </div>

                <div class="sig-grid">
                    <div class="sig-box">
                        <div>Dibukukan Oleh,</div>
                        <div class="sig-line">(${t.createdBy||"Kasir / Staf"})</div>
                    </div>
                    <div class="sig-box">
                        <div>Disetujui Oleh,</div>
                        <div class="sig-line">(Owner Toko)</div>
                    </div>
                    <div class="sig-box">
                        <div>Penerima Dana,</div>
                        <div class="sig-line">(${t.recipient||".................."})</div>
                    </div>
                </div>
            </div>

            <div class="no-print" style="text-align: center; margin-top: 20px;">
                <button onclick="window.print()" style="padding: 8px 18px; font-weight: bold; cursor: pointer; background: #0f172a; color: #fff; border: none; border-radius: 8px;">Cetak Bukti Kas</button>
            </div>
            <script>
                window.onload = function() { setTimeout(function() { window.print(); }, 300); }
            <\/script>
        </body>
        </html>
    `),a.document.close()};window.renderExpensesAdminView=R;window.openExpenseModal=H;window.closeExpenseModal=K;window.submitExpenseForm=te;window.confirmDeleteExpense=ae;window.setExpenseFilter=se;window.handleExpenseAmountInput=J;window.addQuickExpenseAmount=Y;window.handleExpenseReceiptUpload=V;window.setExpenseReceiptUrl=D;window.removeExpenseReceiptPhoto=W;window.previewExpenseReceipt=Z;window.closeExpenseReceiptPreview=ee;window.exportExpensesToCsv=re;window.printExpenseSlip=oe;export{g as EXPENSE_SOURCES,Y as addQuickExpenseAmount,K as closeExpenseModal,ee as closeExpenseReceiptPreview,ae as confirmDeleteExpense,L as ensureExpenseModals,re as exportExpensesToCsv,z as getExpenseMetrics,I as getFilteredExpenses,J as handleExpenseAmountInput,V as handleExpenseReceiptUpload,H as openExpenseModal,Z as previewExpenseReceipt,oe as printExpenseSlip,W as removeExpenseReceiptPhoto,R as renderExpensesAdminView,se as setExpenseFilter,D as setExpenseReceiptUrl,te as submitExpenseForm};

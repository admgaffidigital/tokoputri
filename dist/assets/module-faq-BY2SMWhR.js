import{d as g,p as N,r as Q}from"./module-member-WUQjfXHT.js";import{a as d,i,e as c,y as C,g as b,t as f,X as v,Y as A,v as x,r as H,u as _,F as $}from"./module-print-BRebruvo.js";import{g as P,a as B}from"./module-admin-CMPqv3Rn.js";let F=null;const q=()=>{if(!F)try{F=g.collection("freshmart").doc("cms_data").collection("faqs").onSnapshot(t=>{t&&t.docs&&(d.faqs=t.docs.map(e=>({id:e.id,...e.data()}))),typeof window.curViewName<"u"&&window.curViewName==="view-faq"&&h(),window.isAdm&&typeof window.cTab<"u"&&window.cTab==="faqs"&&typeof window.rAdmFAQ=="function"&&window.rAdmFAQ()},t=>{console.warn("Sync sub-koleksi faqs dibatasi, menggunakan fallback cms_data.faqs:",t.message),typeof window.curViewName<"u"&&window.curViewName==="view-faq"&&h(),window.isAdm&&typeof window.cTab<"u"&&window.cTab==="faqs"&&typeof window.rAdmFAQ=="function"&&window.rAdmFAQ()})}catch{console.warn("Fallback sync Q&A dari cms_data aktif")}};let k="Semua";const h=()=>{q();const t=document.getElementById("storefront-faq-container"),e=document.getElementById("faq-category-pills");if(!t)return;const s=(d.faqs||[]).filter(r=>r.status==="published"),o=["Semua","Pemesanan","Pengiriman","Pembayaran","Garansi","Lainnya"];e&&(e.innerHTML=o.map(r=>`
            <button onclick="selectFAQCategory('${r}')" class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${k===r?"primary-bg text-white shadow-md":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100"}">
                ${r}
            </button>
        `).join(""));const a=(document.getElementById("faq-search-input")?.value||"").toLowerCase().trim(),n=s.filter(r=>{const l=k==="Semua"||r.category===k,m=!a||(r.question||"").toLowerCase().includes(a)||(r.answer||"").toLowerCase().includes(a);return l&&m});if(!n.length){t.innerHTML=`
            <div class="text-center py-12 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
                <div class="w-16 h-16 rounded-full primary-bg-soft primary-text mx-auto flex items-center justify-center mb-3">
                    <i class="fa-solid fa-circle-question text-3xl"></i>
                </div>
                <h3 class="font-bold text-slate-800 dark:text-white text-base">Belum Ada Q&A Ditemukan</h3>
                <p class="text-xs text-slate-500 mt-1 max-w-sm mx-auto">Punya pertanyaan lain? Silakan gunakan tombol <b>Ajukan Pertanyaan</b> untuk bertanya ke admin.</p>
                <button onclick="openAskQuestionModal()" class="mt-4 primary-bg text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-md active:scale-95 transition-all">Ajukan Pertanyaan Sekarang</button>
            </div>
        `;return}t.innerHTML=n.map(r=>`
        <div class="bg-white dark:bg-slate-800/95 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-soft transition-all duration-200 hover:shadow-md overflow-hidden">
            <button onclick="toggleFAQAccordion('${r.id}')" class="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-3.5 hover:bg-slate-50/80 dark:hover:bg-slate-800/60 transition-colors">
                <div class="flex items-start gap-3.5 min-w-0">
                    <div class="w-9 h-9 rounded-xl primary-bg text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm"><i class="fa-solid fa-question text-xs font-bold"></i></div>
                    <div class="min-w-0">
                        <div class="flex flex-wrap items-center gap-2 mb-1.5">
                            <span class="text-[9px] font-bold uppercase tracking-wider primary-bg-soft primary-text primary-border px-2.5 py-0.5 rounded-lg border">${i(r.category||"Umum")}</span>
                            ${r.authorName?`<span class="text-[10px] font-medium text-slate-400">Oleh: ${i(r.authorName)}</span>`:""}
                        </div>
                        <h4 class="font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-snug break-words">${i(r.question)}</h4>
                    </div>
                </div>
                <div class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700/80 flex items-center justify-center text-slate-400 shrink-0 transition-transform duration-300" id="faq-icon-${r.id}">
                    <i class="fa-solid fa-chevron-down text-xs"></i>
                </div>
            </button>
            <div class="hidden border-t border-slate-100 dark:border-slate-700/70 p-3.5 sm:p-5 primary-bg-soft dark:bg-slate-900/60 text-xs sm:text-sm font-medium leading-relaxed" id="faq-body-${r.id}">
                <div class="flex items-start gap-3 bg-white/90 dark:bg-slate-800/90 p-3.5 sm:p-4 rounded-2xl border primary-border shadow-sm">
                    <div class="w-8 h-8 rounded-xl primary-bg text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 shadow-sm shadow-[rgba(var(--color-primary-rgb),0.25)]">
                        <i class="fa-solid fa-reply text-xs"></i>
                    </div>
                    <div class="flex-1 min-w-0">
                        <div class="flex items-center justify-between gap-2 mb-1">
                            <span class="text-[10px] font-extrabold uppercase tracking-wider primary-text flex items-center gap-1">
                                <i class="fa-solid fa-user-shield text-[10px]"></i> Jawaban Tim Admin Toko
                            </span>
                        </div>
                        <div class="text-slate-800 dark:text-slate-100 font-semibold leading-relaxed whitespace-pre-wrap break-words">${i(r.answer||"Belum ada jawaban.")}</div>
                    </div>
                </div>
            </div>
        </div>
    `).join("")},D=t=>{k=t,h()},I=()=>{h()},E=t=>{const e=document.getElementById(`faq-body-${t}`),s=document.getElementById(`faq-icon-${t}`);if(!e||!s)return;e.classList.contains("hidden")?(e.classList.remove("hidden"),s.classList.add("rotate-180")):(e.classList.add("hidden"),s.classList.remove("rotate-180"))},V=()=>{const t=c("modal-ask-question"),e=c("modal-ask-question-box");t&&(t.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("askQuestion"),C(t,e))},M=(t=!1)=>{const e=()=>{$("modal-ask-question","modal-ask-question-box")};typeof window.requestCloseModal=="function"?window.requestCloseModal("askQuestion",t,e):e()},G=async()=>{const t=(b("ask-author-name")||"").trim()||"Pelanggan",e=b("ask-category")||"Pemesanan",s=(b("ask-question-text")||"").trim();if(!s)return f("Tuliskan pertanyaan Anda terlebih dahulu!");v("Mengirim pertanyaan...");const o="faq-"+Date.now().toString(36),a={id:o,question:s,answer:"",category:e,authorName:t,status:"pending_answer",createdAt:new Date().toISOString()};let n=!1;try{await g.collection("freshmart").doc("cms_data").collection("faqs").doc(o).set(a),n=!0}catch(r){console.warn("Penulisan sub-koleksi faqs dibatasi, mencoba fallback cms_data.faqs:",r)}if(!n)try{const r=[a,...(d.faqs||[]).filter(l=>l.id!==o)];await g.collection("freshmart").doc("cms_data").set({faqs:r},{merge:!0}),d.faqs=r,n=!0}catch(r){console.warn("Fallback cms_data.faqs juga gagal:",r)}A(),n?(M(),x("ask-question-text",""),f("Pertanyaan terkirim! Admin akan menjawabnya segera."),h()):f("Gagal mengirim pertanyaan. Coba lagi!")};let u="all";const y=()=>{q();const t=d.faqs||[],e=t.filter(a=>u==="pending"?a.status==="pending_answer":u==="published"?a.status==="published":!0),s=t.filter(a=>a.status==="pending_answer").length;let o=`
        <div class="space-y-5 pb-12">
            <!-- Header Card -->
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3.5 bg-white dark:bg-slate-800 p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <div>
                    <h2 class="text-base sm:text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2">
                        <i class="fa-solid fa-circle-question primary-text text-lg"></i> Kelola Tanya Jawab (Q&A / FAQ)
                    </h2>
                    <p class="text-xs font-medium text-slate-500 mt-0.5">Sunting FAQ toko & jawab pertanyaan yang diajukan pelanggan.</p>
                </div>
                <button onclick="openFAQModal('')" class="w-full sm:w-auto primary-bg text-white shadow-glow px-4 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 active:scale-95 transition-all">
                    <i class="fa-solid fa-plus"></i> Tambah Q&A Baru
                </button>
            </div>

            <!-- Filter Tabs -->
            <div class="flex items-center gap-2 overflow-x-auto pb-1.5 hide-scrollbar border-b border-slate-200 dark:border-slate-700">
                <button onclick="setAdminFAQFilter('all')" class="shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${u==="all"?"primary-bg text-white shadow-md":"bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"}">
                    Semua (${t.length})
                </button>
                <button onclick="setAdminFAQFilter('pending')" class="shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${u==="pending"?"primary-bg text-white shadow-md":"bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"}">
                    <span>Belum Dijawab</span>
                    ${s>0?`<span class="bg-rose-500 text-white text-[9px] px-1.5 py-0.5 rounded-full font-bold">${s}</span>`:""}
                </button>
                <button onclick="setAdminFAQFilter('published')" class="shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${u==="published"?"primary-bg text-white shadow-md":"bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"}">
                    Terpublikasi
                </button>
            </div>

            <!-- List Q&A Admin -->
            <div class="space-y-4">
                ${e.length?e.map(a=>`
                    <div class="bg-white dark:bg-slate-800 p-4 sm:p-5 rounded-2xl border ${a.status==="pending_answer"?"border-amber-300/80 bg-amber-50/20 dark:bg-amber-900/10":"border-slate-200/80 dark:border-slate-700/80"} shadow-sm space-y-3">
                        <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-700/60 pb-2.5">
                            <div class="flex flex-wrap items-center gap-1.5 min-w-0">
                                <span class="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-lg ${a.status==="published"?"primary-bg-soft primary-text border primary-border":a.status==="pending_answer"?"bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400":"bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-400"}">
                                    ${a.status==="published"?"Terpublikasi":a.status==="pending_answer"?"Menunggu Jawaban":"Disembunyikan"}
                                </span>
                                <span class="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-700/50">${i(a.category||"Umum")}</span>
                                ${a.authorName?`<span class="text-[10px] text-slate-400 italic">Oleh: ${i(a.authorName)}</span>`:""}
                            </div>
                            <div class="flex items-center gap-1.5 shrink-0 ml-auto">
                                <button onclick="openFAQModal('${a.id}')" class="px-2.5 py-1.5 rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 font-bold text-xs hover:bg-blue-100 transition-colors flex items-center gap-1 active:scale-95">
                                    <i class="fa-solid fa-pen-to-square"></i> Edit / Jawab
                                </button>
                                <button onclick="deleteAdminFAQ('${a.id}')" class="px-2.5 py-1.5 rounded-xl bg-rose-50 text-rose-600 dark:bg-rose-900/20 dark:text-rose-400 font-bold text-xs hover:bg-rose-100 transition-colors active:scale-95" title="Hapus Q&A">
                                    <i class="fa-solid fa-trash"></i>
                                </button>
                            </div>
                        </div>

                        <div>
                            <h3 class="font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-snug break-words">${i(a.question)}</h3>
                        </div>

                        <div class="primary-bg-soft dark:bg-slate-900/60 p-3.5 sm:p-4 rounded-xl border primary-border text-xs font-medium text-slate-800 dark:text-slate-200">
                            <span class="font-extrabold primary-text uppercase text-[10px] tracking-wider flex items-center gap-1.5 mb-1">
                                <i class="fa-solid fa-user-shield text-[10px]"></i> Jawaban Admin Toko:
                            </span>
                            <div class="whitespace-pre-wrap leading-relaxed font-semibold break-words">${a.answer?i(a.answer):'<span class="text-rose-500 italic font-semibold">Belum dijawab. Klik "Edit / Jawab" untuk memberikan jawaban.</span>'}</div>
                        </div>
                    </div>
                `).join(""):`
                    <div class="text-center py-10 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6">
                        <i class="fa-solid fa-inbox text-3xl text-slate-300 mb-2"></i>
                        <p class="text-xs font-bold text-slate-600 dark:text-slate-300">Tidak ada Q&A ditemukan pada kategori filter ini.</p>
                    </div>
                `}
            </div>
        </div>
    `;setH("admin-content",o)},J=t=>{u=t,y()},O=t=>{const e=(d.faqs||[]).find(a=>a.id===t)||{id:"",question:"",answer:"",category:"Pemesanan",authorName:"Admin",status:"published"};x("admin-faq-id",e.id),x("admin-faq-category",e.category||"Pemesanan"),x("admin-faq-author",e.authorName||"Admin"),x("admin-faq-question",e.question||""),x("admin-faq-answer",e.answer||""),x("admin-faq-status",e.status||"published"),H("admin-faq-modal-title",t?"Edit Q&A":"Tambah Q&A Baru");const s=c("modal-admin-faq"),o=c("modal-admin-faq-box");s&&(s.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("adminFAQ"),C(s,o))},j=(t=!1)=>{const e=()=>{$("modal-admin-faq","modal-admin-faq-box")};typeof window.requestCloseModal=="function"?window.requestCloseModal("adminFAQ",t,e):e()},z=async()=>{const t=b("admin-faq-id")||"faq-"+Date.now().toString(36),e=b("admin-faq-category"),s=(b("admin-faq-author")||"").trim()||"Admin",o=(b("admin-faq-question")||"").trim(),a=(b("admin-faq-answer")||"").trim();let n=b("admin-faq-status");if(!o)return f("Pertanyaan tidak boleh kosong!");a&&n==="pending_answer"&&(n="published"),v("Menyimpan Q&A...");const r={id:t,question:o,answer:a,category:e,authorName:s,status:n,updatedAt:new Date().toISOString()};let l=[...d.faqs||[]];const m=l.findIndex(p=>p.id===t);m>-1?l[m]={...l[m],...r}:l.unshift(r),d.faqs=l;try{await g.collection("freshmart").doc("cms_data").collection("faqs").doc(t).set(r,{merge:!0})}catch(p){console.warn("Gagal set ke sub-koleksi faqs:",p)}try{await g.collection("freshmart").doc("cms_data").set({faqs:l},{merge:!0})}catch(p){console.warn("Gagal update cms_data.faqs:",p)}A(),j(),f("Q&A Berhasil Disimpan!"),y()},K=t=>{_("Hapus Q&A","Yakin ingin menghapus pertanyaan ini?",async()=>{v("Menghapus Q&A...");let e=(d.faqs||[]).filter(s=>s.id!==t);d.faqs=e;try{await g.collection("freshmart").doc("cms_data").collection("faqs").doc(t).delete()}catch(s){console.warn("Gagal delete dari sub-koleksi faqs:",s)}try{await g.collection("freshmart").doc("cms_data").set({faqs:e},{merge:!0})}catch(s){console.warn("Gagal update cms_data.faqs:",s)}A(),f("Q&A Berhasil Dihapus!"),y()})};window.attachFAQRealtime=q;window.renderStorefrontFAQ=h;window.selectFAQCategory=D;window.filterStorefrontFAQ=I;window.toggleFAQAccordion=E;window.openAskQuestionModal=V;window.closeAskQuestionModal=M;window.submitCustomerQuestion=G;window.rAdmFAQ=y;window.setAdminFAQFilter=J;window.openFAQModal=O;window.closeAdminFAQModal=j;window.saveAdminFAQ=z;window.deleteAdminFAQ=K;let w="all";const R=t=>{if(!t)return"";try{const e=t.split("-");return e.length===3?new Date(parseInt(e[0]),parseInt(e[1])-1,parseInt(e[2])).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):t}catch{return t}},U=t=>{switch(t){case"feature":return{label:"Fitur Baru",icon:"fa-rocket",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};case"optimization":return{label:"Optimasi",icon:"fa-bolt-lightning",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};case"maintenance":return{label:"Maintenance",icon:"fa-wrench",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};case"bugfix":return{label:"Perbaikan",icon:"fa-bug-slash",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};default:return{label:"Update",icon:"fa-tag",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"}}},Y=()=>{const t=c("changelog-items-container");if(!t)return;const e=B(d),s=w==="all"?e:e.filter(a=>a.category===w);if(s.length===0){t.innerHTML=`
        <div class="flex flex-col items-center justify-center py-12 text-center text-slate-400">
            <div class="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-2xl mb-3">
                <i class="fa-solid fa-clipboard-list opacity-60"></i>
            </div>
            <p class="text-xs font-bold text-slate-600 dark:text-slate-300">Belum ada catatan pada kategori ini</p>
            <p class="text-[10px] text-slate-400 mt-0.5">Pilih filter kategori lain di atas</p>
        </div>`;return}let o="";s.forEach((a,n)=>{const r=n===0&&w==="all",l=U(a.category),m=R(a.date),p=(a.items||[]).map(S=>`
            <li class="flex items-start gap-2 text-xs font-medium text-slate-600 dark:text-slate-300 leading-relaxed">
                <i class="fa-solid fa-circle-check text-[var(--color-primary)] text-[11px] mt-1 shrink-0"></i>
                <span>${i(S)}</span>
            </li>
        `).join("");o+=`
        <div class="relative pl-6 sm:pl-8 pb-6 border-l-2 ${r?"border-[var(--color-primary)]":"border-slate-200 dark:border-slate-700"} last:border-l-transparent last:pb-2">
            <!-- Timeline Node Indicator -->
            <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full ${r?"bg-[var(--color-primary)] ring-4 ring-[rgba(var(--color-primary-rgb),0.2)]":"bg-slate-300 dark:bg-slate-600"} flex items-center justify-center transition-all">
                ${r?'<span class="w-1.5 h-1.5 rounded-full bg-white"></span>':""}
            </div>

            <!-- Card Box -->
            <div class="rounded-2xl border ${r?"border-[var(--color-primary)]/40 bg-[rgba(var(--color-primary-rgb),0.03)] dark:bg-[rgba(var(--color-primary-rgb),0.06)] shadow-sm":"border-slate-100 dark:border-slate-800/80 bg-slate-50/70 dark:bg-slate-800/40"} p-4 sm:p-5 transition-all">
                <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div class="flex items-center gap-2 flex-wrap">
                        <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg text-[11px] font-black tracking-wider uppercase ${r?"bg-[var(--color-primary)] text-white shadow-xs":"bg-slate-800 text-white dark:bg-slate-700"}">
                            ${i(a.version||"v1.0.0")}
                        </span>
                        <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md border text-[10px] font-bold ${l.colorClass}">
                            <i class="fa-solid ${l.icon} text-[9px] ${l.iconColor}"></i> ${i(l.label)}
                        </span>
                        ${r?`
                        <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.25)] text-[9px] font-black uppercase tracking-wider">
                            <span class="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] animate-pulse"></span> Versi Terbaru
                        </span>`:""}
                    </div>
                    <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500 flex items-center gap-1">
                        <i class="fa-regular fa-calendar text-[10px]"></i> ${i(m)}
                    </span>
                </div>

                <h4 class="text-xs sm:text-sm font-extrabold text-slate-800 dark:text-white leading-snug mb-3">
                    ${i(a.title||"Pembaruan Sistem")}
                </h4>

                <ul class="space-y-2">
                    ${p}
                </ul>
            </div>
        </div>`}),t.innerHTML=o},L=t=>{w=t,document.querySelectorAll(".btn-changelog-filter").forEach(e=>{const s=e.getAttribute("data-category"),o=e.querySelector("i");s===t?(e.className="btn-changelog-filter shrink-0 whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold primary-bg text-white shadow-xs transition-all cursor-pointer border border-transparent",o&&(o.className=o.className.replace(/text-\[[^\]]+\]/g,"").trim()+" text-white")):(e.className="btn-changelog-filter shrink-0 whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold bg-white dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 transition-all cursor-pointer",o&&s!=="all"?o.className=o.className.replace(/\btext-white\b/g,"").trim()+" text-[var(--color-primary)]":o&&s==="all"&&(o.className=o.className.replace(/\btext-white\b/g,"").trim()+" text-slate-400"))}),Y()},W=(t="all")=>{let e=c("changelog-modal");e||(e=document.createElement("div"),e.id="changelog-modal",e.className="fixed inset-0 z-[125] bg-slate-900/80 flex items-end sm:items-center justify-center p-0 sm:p-4 opacity-0 transition-opacity duration-300",e.onclick=a=>{a.target===e&&T()},e.innerHTML=`
        <div id="changelog-modal-box" class="w-full max-w-xl max-h-[90dvh] sm:max-h-[85dvh] bg-white dark:bg-[#0b1121] rounded-t-3xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden shadow-2xl transform translate-y-full sm:translate-y-8 transition-transform duration-300">
            <!-- Header Modal -->
            <div class="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800/80 flex items-center justify-between shrink-0 bg-white dark:bg-[#0b1121]">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-2xl bg-[rgba(var(--color-primary-rgb),0.12)] border border-[rgba(var(--color-primary-rgb),0.22)] text-[var(--color-primary)] flex items-center justify-center text-base sm:text-lg shadow-2xs shrink-0">
                        <i class="fa-solid fa-clock-rotate-left"></i>
                    </div>
                    <div>
                        <div class="flex items-center gap-2">
                            <h3 class="text-sm sm:text-base font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                                Log Pembaruan Sistem
                            </h3>
                            <span id="changelog-header-ver" class="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider primary-bg text-white">
                                v1.3.1
                            </span>
                        </div>
                        <p class="text-[10px] sm:text-[11px] font-semibold text-slate-400 dark:text-slate-500 mt-0.5">
                            Transparansi riwayat perbaikan, fitur, dan performa Toko Putri
                        </p>
                    </div>
                </div>
                <button onclick="closeChangelogModal()" class="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-white flex items-center justify-center transition-all cursor-pointer">
                    <i class="fa-solid fa-xmark text-sm"></i>
                </button>
            </div>

            <!-- Filter Kategori Kancing (Horizontal Scroll) -->
            <div class="px-4 sm:px-5 py-2.5 border-b border-slate-100 dark:border-slate-800/60 flex items-center gap-1.5 sm:gap-2 overflow-x-auto hide-scrollbar shrink-0 bg-slate-50/60 dark:bg-slate-900/40">
                <button onclick="window.filterChangelog('all')" data-category="all" class="btn-changelog-filter shrink-0 whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold primary-bg text-white shadow-xs transition-all cursor-pointer border border-transparent">
                    <i class="fa-solid fa-list-check text-[10px]"></i>
                    <span>Semua</span>
                </button>
                <button onclick="window.filterChangelog('feature')" data-category="feature" class="btn-changelog-filter shrink-0 whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold bg-white dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 transition-all cursor-pointer">
                    <i class="fa-solid fa-rocket text-[10px] text-[var(--color-primary)]"></i>
                    <span>Fitur Baru</span>
                </button>
                <button onclick="window.filterChangelog('optimization')" data-category="optimization" class="btn-changelog-filter shrink-0 whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold bg-white dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 transition-all cursor-pointer">
                    <i class="fa-solid fa-bolt-lightning text-[10px] text-[var(--color-primary)]"></i>
                    <span>Optimasi</span>
                </button>
                <button onclick="window.filterChangelog('maintenance')" data-category="maintenance" class="btn-changelog-filter shrink-0 whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold bg-white dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 transition-all cursor-pointer">
                    <i class="fa-solid fa-wrench text-[10px] text-[var(--color-primary)]"></i>
                    <span>Maintenance</span>
                </button>
                <button onclick="window.filterChangelog('bugfix')" data-category="bugfix" class="btn-changelog-filter shrink-0 whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold bg-white dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 transition-all cursor-pointer">
                    <i class="fa-solid fa-bug-slash text-[10px] text-[var(--color-primary)]"></i>
                    <span>Perbaikan</span>
                </button>
            </div>

            <!-- List Content Timeline -->
            <div class="p-4 sm:p-6 overflow-y-auto flex-1 hide-scrollbar">
                <div id="changelog-items-container" class="space-y-1"></div>
            </div>

            <!-- Footer Modal -->
            <div class="p-3.5 sm:p-4 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/80 dark:bg-[#0b1121]/90 flex items-center justify-between shrink-0">
                <div class="flex items-center gap-2 text-[10px] font-bold text-slate-400 dark:text-slate-500">
                    <span class="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse"></span>
                    <span>Real-Time Sync Active</span>
                </div>
                <button onclick="closeChangelogModal()" class="px-5 py-2 rounded-xl primary-bg text-white text-xs font-bold uppercase tracking-wider hover:opacity-90 active:scale-95 transition-all cursor-pointer shadow-sm">
                    Tutup
                </button>
            </div>
        </div>`,document.body.appendChild(e));const s=P(d),o=c("changelog-header-ver");o&&(o.textContent=s),w=t,L(t),e.style.display!=="flex"&&N("changelog"),e.style.display="flex",e.offsetWidth,requestAnimationFrame(()=>{e.classList.remove("opacity-0");const a=c("changelog-modal-box");a&&a.classList.remove("translate-y-full","sm:translate-y-8")})},T=(t=!1)=>{const e=c("changelog-modal");if(!e||e.style.display==="none")return;const s=()=>{e.classList.add("opacity-0");const o=c("changelog-modal-box");o&&o.classList.add("translate-y-full","sm:translate-y-8"),setTimeout(()=>{e.style.display="none"},300)};typeof Q=="function"?Q("changelog",t,s):s()};window.openChangelogModal=W;window.closeChangelogModal=T;window.filterChangelog=L;

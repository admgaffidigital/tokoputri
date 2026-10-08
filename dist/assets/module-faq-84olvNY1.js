import{q as b,a as c,i as d,e as m,o as T,g,k,l as C,n as q,F as u,a0 as H,G as _,v as L,ad as E,r as P}from"./module-print-CwGGpeqz.js";let Q=null;const M=()=>{if(!Q)try{Q=b.collection("freshmart").doc("cms_data").collection("faqs").onSnapshot(e=>{e&&e.docs&&(c.faqs=e.docs.map(a=>({id:a.id,...a.data()}))),typeof window.curViewName<"u"&&window.curViewName==="view-faq"&&f(),window.isAdm&&typeof window.cTab<"u"&&window.cTab==="faqs"&&typeof window.rAdmFAQ=="function"&&window.rAdmFAQ()},e=>{console.warn("Sync sub-koleksi faqs dibatasi, menggunakan fallback cms_data.faqs:",e.message),typeof window.curViewName<"u"&&window.curViewName==="view-faq"&&f(),window.isAdm&&typeof window.cTab<"u"&&window.cTab==="faqs"&&typeof window.rAdmFAQ=="function"&&window.rAdmFAQ()})}catch{console.warn("Fallback sync Q&A dari cms_data aktif")}};let y="Semua";const f=()=>{M();const e=document.getElementById("storefront-faq-container"),a=document.getElementById("faq-category-pills");if(!e)return;const s=(c.faqs||[]).filter(n=>n.status==="published"),r=["Semua","Pemesanan","Pengiriman","Pembayaran","Garansi","Lainnya"];a&&(a.innerHTML=r.map(n=>`
            <button onclick="selectFAQCategory('${n}')" class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${y===n?"primary-bg text-white shadow-md":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100"}">
                ${n}
            </button>
        `).join(""));const t=(document.getElementById("faq-search-input")?.value||"").toLowerCase().trim(),o=s.filter(n=>{const l=y==="Semua"||n.category===y,p=!t||(n.question||"").toLowerCase().includes(t)||(n.answer||"").toLowerCase().includes(t);return l&&p});if(!o.length){e.innerHTML=`
            <div class="text-center py-12 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
                <div class="w-16 h-16 rounded-full primary-bg-soft primary-text mx-auto flex items-center justify-center mb-3">
                    <i class="fa-solid fa-circle-question text-3xl"></i>
                </div>
                <h3 class="font-bold text-slate-800 dark:text-white text-base">Belum Ada Q&A Ditemukan</h3>
                <p class="text-xs text-slate-500 mt-1 max-w-sm mx-auto">Punya pertanyaan lain? Silakan gunakan tombol <b>Ajukan Pertanyaan</b> untuk bertanya ke admin.</p>
                <button onclick="openAskQuestionModal()" class="mt-4 primary-bg text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-md active:scale-95 transition-all">Ajukan Pertanyaan Sekarang</button>
            </div>
        `;return}e.innerHTML=o.map(n=>`
        <div class="bg-white dark:bg-slate-800/95 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-soft transition-all duration-200 hover:shadow-md overflow-hidden">
            <button onclick="toggleFAQAccordion('${n.id}')" class="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-3.5 hover:bg-slate-50/80 dark:hover:bg-slate-800/60 transition-colors">
                <div class="flex items-start gap-3.5 min-w-0">
                    <div class="w-9 h-9 rounded-xl primary-bg text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm"><i class="fa-solid fa-question text-xs font-bold"></i></div>
                    <div class="min-w-0">
                        <div class="flex flex-wrap items-center gap-2 mb-1.5">
                            <span class="text-[9px] font-bold uppercase tracking-wider primary-bg-soft primary-text primary-border px-2.5 py-0.5 rounded-lg border">${d(n.category||"Umum")}</span>
                            ${n.authorName?`<span class="text-[10px] font-medium text-slate-400">Oleh: ${d(n.authorName)}</span>`:""}
                        </div>
                        <h4 class="font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-snug break-words">${d(n.question)}</h4>
                    </div>
                </div>
                <div class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700/80 flex items-center justify-center text-slate-400 shrink-0 transition-transform duration-300" id="faq-icon-${n.id}">
                    <i class="fa-solid fa-chevron-down text-xs"></i>
                </div>
            </button>
            <div class="hidden border-t border-slate-100 dark:border-slate-700/70 p-3.5 sm:p-5 primary-bg-soft dark:bg-slate-900/60 text-xs sm:text-sm font-medium leading-relaxed" id="faq-body-${n.id}">
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
                        <div class="text-slate-800 dark:text-slate-100 font-semibold leading-relaxed whitespace-pre-wrap break-words">${d(n.answer||"Belum ada jawaban.")}</div>
                    </div>
                </div>
            </div>
        </div>
    `).join("")},O=e=>{y=e,f()},R=()=>{f()},V=e=>{const a=document.getElementById(`faq-body-${e}`),s=document.getElementById(`faq-icon-${e}`);if(!a||!s)return;a.classList.contains("hidden")?(a.classList.remove("hidden"),s.classList.add("rotate-180")):(a.classList.add("hidden"),s.classList.remove("rotate-180"))},G=()=>{const e=m("modal-ask-question"),a=m("modal-ask-question-box");e&&(e.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("askQuestion"),T(e,a))},D=(e=!1)=>{const a=()=>{L("modal-ask-question","modal-ask-question-box")};typeof window.requestCloseModal=="function"?window.requestCloseModal("askQuestion",e,a):a()},W=async()=>{const e=(g("ask-author-name")||"").trim()||"Pelanggan",a=g("ask-category")||"Pemesanan",s=(g("ask-question-text")||"").trim();if(!s)return k("Tuliskan pertanyaan Anda terlebih dahulu!");C("Mengirim pertanyaan...");const r="faq-"+Date.now().toString(36),t={id:r,question:s,answer:"",category:a,authorName:e,status:"pending_answer",createdAt:new Date().toISOString()};let o=!1;try{await b.collection("freshmart").doc("cms_data").collection("faqs").doc(r).set(t),o=!0}catch(n){console.warn("Penulisan sub-koleksi faqs dibatasi, mencoba fallback cms_data.faqs:",n)}if(!o)try{const n=[t,...(c.faqs||[]).filter(l=>l.id!==r)];await b.collection("freshmart").doc("cms_data").set({faqs:n},{merge:!0}),c.faqs=n,o=!0}catch(n){console.warn("Fallback cms_data.faqs juga gagal:",n)}q(),o?(D(),u("ask-question-text",""),k("Pertanyaan terkirim! Admin akan menjawabnya segera."),f()):k("Gagal mengirim pertanyaan. Coba lagi!")};let x="all";const v=()=>{M();const e=c.faqs||[],a=e.filter(t=>x==="pending"?t.status==="pending_answer":x==="published"?t.status==="published":!0),s=e.filter(t=>t.status==="pending_answer").length;let r=`
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
                <button onclick="setAdminFAQFilter('all')" class="shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${x==="all"?"primary-bg text-white shadow-md":"bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"}">
                    Semua (${e.length})
                </button>
                <button onclick="setAdminFAQFilter('pending')" class="shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${x==="pending"?"primary-bg text-white shadow-md":"bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"}">
                    <span>Belum Dijawab</span>
                    ${s>0?`<span class="bg-rose-500 text-white text-[9px] px-1.5 py-0.5 rounded-full font-bold">${s}</span>`:""}
                </button>
                <button onclick="setAdminFAQFilter('published')" class="shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${x==="published"?"primary-bg text-white shadow-md":"bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"}">
                    Terpublikasi
                </button>
            </div>

            <!-- List Q&A Admin -->
            <div class="space-y-4">
                ${a.length?a.map(t=>`
                    <div class="bg-white dark:bg-slate-800 p-4 sm:p-5 rounded-2xl border ${t.status==="pending_answer"?"border-amber-300/80 bg-amber-50/20 dark:bg-amber-900/10":"border-slate-200/80 dark:border-slate-700/80"} shadow-sm space-y-3">
                        <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-700/60 pb-2.5">
                            <div class="flex flex-wrap items-center gap-1.5 min-w-0">
                                <span class="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-lg ${t.status==="published"?"primary-bg-soft primary-text border primary-border":t.status==="pending_answer"?"bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400":"bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-400"}">
                                    ${t.status==="published"?"Terpublikasi":t.status==="pending_answer"?"Menunggu Jawaban":"Disembunyikan"}
                                </span>
                                <span class="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-700/50">${d(t.category||"Umum")}</span>
                                ${t.authorName?`<span class="text-[10px] text-slate-400 italic">Oleh: ${d(t.authorName)}</span>`:""}
                            </div>
                            <div class="flex items-center gap-1.5 shrink-0 ml-auto">
                                <button onclick="openFAQModal('${t.id}')" class="px-2.5 py-1.5 rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 font-bold text-xs hover:bg-blue-100 transition-colors flex items-center gap-1 active:scale-95">
                                    <i class="fa-solid fa-pen-to-square"></i> Edit / Jawab
                                </button>
                                <button onclick="deleteAdminFAQ('${t.id}')" class="px-2.5 py-1.5 rounded-xl bg-rose-50 text-rose-600 dark:bg-rose-900/20 dark:text-rose-400 font-bold text-xs hover:bg-rose-100 transition-colors active:scale-95" title="Hapus Q&A">
                                    <i class="fa-solid fa-trash"></i>
                                </button>
                            </div>
                        </div>

                        <div>
                            <h3 class="font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-snug break-words">${d(t.question)}</h3>
                        </div>

                        <div class="primary-bg-soft dark:bg-slate-900/60 p-3.5 sm:p-4 rounded-xl border primary-border text-xs font-medium text-slate-800 dark:text-slate-200">
                            <span class="font-extrabold primary-text uppercase text-[10px] tracking-wider flex items-center gap-1.5 mb-1">
                                <i class="fa-solid fa-user-shield text-[10px]"></i> Jawaban Admin Toko:
                            </span>
                            <div class="whitespace-pre-wrap leading-relaxed font-semibold break-words">${t.answer?d(t.answer):'<span class="text-rose-500 italic font-semibold">Belum dijawab. Klik "Edit / Jawab" untuk memberikan jawaban.</span>'}</div>
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
    `;setH("admin-content",r)},J=e=>{x=e,v()},z=e=>{const a=(c.faqs||[]).find(t=>t.id===e)||{id:"",question:"",answer:"",category:"Pemesanan",authorName:"Admin",status:"published"};u("admin-faq-id",a.id),u("admin-faq-category",a.category||"Pemesanan"),u("admin-faq-author",a.authorName||"Admin"),u("admin-faq-question",a.question||""),u("admin-faq-answer",a.answer||""),u("admin-faq-status",a.status||"published"),H("admin-faq-modal-title",e?"Edit Q&A":"Tambah Q&A Baru");const s=m("modal-admin-faq"),r=m("modal-admin-faq-box");s&&(s.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("adminFAQ"),T(s,r))},$=(e=!1)=>{const a=()=>{L("modal-admin-faq","modal-admin-faq-box")};typeof window.requestCloseModal=="function"?window.requestCloseModal("adminFAQ",e,a):a()},U=async()=>{const e=g("admin-faq-id")||"faq-"+Date.now().toString(36),a=g("admin-faq-category"),s=(g("admin-faq-author")||"").trim()||"Admin",r=(g("admin-faq-question")||"").trim(),t=(g("admin-faq-answer")||"").trim();let o=g("admin-faq-status");if(!r)return k("Pertanyaan tidak boleh kosong!");t&&o==="pending_answer"&&(o="published"),C("Menyimpan Q&A...");const n={id:e,question:r,answer:t,category:a,authorName:s,status:o,updatedAt:new Date().toISOString()};let l=[...c.faqs||[]];const p=l.findIndex(i=>i.id===e);p>-1?l[p]={...l[p],...n}:l.unshift(n),c.faqs=l;try{await b.collection("freshmart").doc("cms_data").collection("faqs").doc(e).set(n,{merge:!0})}catch(i){console.warn("Gagal set ke sub-koleksi faqs:",i)}try{await b.collection("freshmart").doc("cms_data").set({faqs:l},{merge:!0})}catch(i){console.warn("Gagal update cms_data.faqs:",i)}q(),$(),k("Q&A Berhasil Disimpan!"),v()},X=e=>{_("Hapus Q&A","Yakin ingin menghapus pertanyaan ini?",async()=>{C("Menghapus Q&A...");let a=(c.faqs||[]).filter(s=>s.id!==e);c.faqs=a;try{await b.collection("freshmart").doc("cms_data").collection("faqs").doc(e).delete()}catch(s){console.warn("Gagal delete dari sub-koleksi faqs:",s)}try{await b.collection("freshmart").doc("cms_data").set({faqs:a},{merge:!0})}catch(s){console.warn("Gagal update cms_data.faqs:",s)}q(),k("Q&A Berhasil Dihapus!"),v()})};window.attachFAQRealtime=M;window.renderStorefrontFAQ=f;window.selectFAQCategory=O;window.filterStorefrontFAQ=R;window.toggleFAQAccordion=V;window.openAskQuestionModal=G;window.closeAskQuestionModal=D;window.submitCustomerQuestion=W;window.rAdmFAQ=v;window.setAdminFAQFilter=J;window.openFAQModal=z;window.closeAdminFAQModal=$;window.saveAdminFAQ=U;window.deleteAdminFAQ=X;const Z=5,B=[{id:"log-1-10-91",version:"v1.10.91",date:"2026-10-08",title:"Operasional Kasir Presisi (Arus Kas Laci & Shortcuts) & Finansial Piutang Toko A4 / CSV",category:"feature",badge:"Cash Movements, Keyboard Turbo & Debt Recap v1.10.91",items:["Pilar A — Manajemen Arus Kas Laci Kasir (Cash In / Cash Out Movements): Mengintegrasikan modal pencatatan kas masuk & kas keluar mandiri (modal-pos-cash-movement) yang otomatis sinkron dengan buku beban operasional toko (appData.expenses) dan cloud pos_shifts. Perhitungan uang kas diharapkan (expectedCash) pada X-Report & Z-Report kini 100% presisi: max(0, startingCash + cashSales + cashIn - cashOut).","Pilar A — Keyboard Shortcuts Desktop Kasir Lengkap & Chiclet Quick Bar: Memperluas pemindai keyboard kasir dengan [F1 / F2] fokus pencarian, [F10] Shift X/Z, [F11] Arus Kas Laci, dan tombol [Spasi Cepat] saat kursor bebas untuk langsung mengaktifkan pemindai barcode / pencarian seketika tanpa mouse.","Pilar A — Sinkronisasi Thermal Struk Shift (rawbt.js): Slip rekap shift X-Report dan Z-Report thermal ESC/POS kini otomatis menyertakan baris Kas Masuk (In), Kas Keluar (Out), serta status posisi uang kas laci terkini.","Pilar B — Cetak Rekap Buku Piutang Toko A4 & Ekspor CSV (tempo.js & documents.js): Menghadirkan cetak Rekap Buku Besar Piutang Toko resmi standar A4 (type: 'tempo_recap') dengan nomor registrasi AR, aging keterlambatan debitur, kop toko, rekening pelunasan resmi, dan tanda tangan Owner/Penagih, serta ekspor file CSV instan (Rekap_Piutang_Toko_Putri.csv) ber-BOM UTF-8 kompatibel Excel.","Pilar B — Kartu Riwayat Mutasi Stok (Stock Card Ledger di fifo-modal.js): Tab baru 'Kartu Mutasi Stok' pada modal Bento FIFO produk yang merekonsiliasi barang masuk kulakan PO, barang keluar penjualan kasir/online, filter segmented (Semua, Masuk, Keluar), dan ringkasan kuantitas fisik real-time.","Multi-Channel Distribution v1.10.91 (Android versionCode 11091)."]},{id:"log-1-10-90",version:"v1.10.90",date:"2026-10-08",title:"Arsitektur Modal 3-Tier Responsive Desktop: Widescreen Workspace & Split-View Produk",category:"feature",badge:"3-Tier Desktop Modal Architecture v1.10.90",items:["Tier 1 (Widescreen Workspace Canvas - 94vw, Max-W-7xl / 1360px): Menghadirkan kanvas kerja desktop yang ultra lapang dan luas untuk modal padat data (Pelacak FIFO & Multi-Supplier, PO Kulakan Builder & Detail, Direktori Rekanan Supplier, Stock Opname Dua Lokasi, Detail Piutang Tempo, Rekap Shift Kasir, Form & Detail Order Admin, hingga Kartu Member Digital). Mengeliminasi rasa sempit/terjepit saat mengelola tabel dan formulir kompleks di monitor PC/Laptop.","Tier 2 (Spacious 2-Column Split-View - 1160px & 88vh): Merombak tampilan modal detail produk storefront (#product-modal-content) di layar desktop menjadi tata letak 2 kolom elegan setaraf marketplace tier-1 dunia. Kolom kiri selebar 460px didedikasikan untuk galeri foto produk sticky yang luas, sementara kolom kanan menyajikan informasi harga, badge Inc. PPN kapsul, katalog swatch kartu cat, dan pinned bottom buy bar yang selalu siap dieksekusi tanpa perlu scroll bolak-balik.","Tier 3 (Focused Center Dialogs - 440px s.d. 520px): Mempertahankan dialog konfirmasi cepat, prompt PIN, quick price, restock kilat, dan struk kasir pada proporsi kompak terpusat agar fokus pandangan kasir/admin tetap tajam tanpa melar berlebihan.","Zero Distorsi Mobile & Tablet (<1024px): Seluruh tata letak 3-Tier diisolasi secara presisi melalui media query desktop (min-width: 1024px), sehingga pengalaman pengguna smartphone pada bottom sheet native, gesture swipe, dan tombol kembali Android tetap 100% mulus dan terlindungi.","Multi-Channel Distribution v1.10.90 (Android versionCode 11090)."]},{id:"log-1-10-89",version:"v1.10.89",date:"2026-10-07",title:"Penyempurnaan Visual Tombol Aksi Katalog: Eliminasi Blur & Colored Glow Shadow",category:"fix",badge:"Clean Flat & Sharp Action Buttons v1.10.89",items:["Eliminasi Mutlak Efek Blur & Colored Glow (.btn-catalog-add & .btn-catalog-variant): Menghapus total box-shadow colored glow beradius besar (10px - 14px) yang menimbulkan efek kabur/blur berkabut di sekeliling tombol Tambah (+) dan Pilih Varian pada kartu katalog produk.","Desain Flat, Bersih & Solid: Mengadopsi standar modern flat design dengan warna solid tegas berpadu border hairline halus (1px) dan bayangan mikro natural (0 1px 2px rgba(0,0,0,0.06)), menghasilkan tombol yang tajam, kontras tinggi, dan bebas blur.","Sentuhan Hover & Active Ergonomis: Interaksi klik yang reponsif dan stabil dengan transisi scale halus tanpa memicu ledakan bayangan blur.","Multi-Channel Distribution v1.10.89 (Android versionCode 11089)."]},{id:"log-1-10-88",version:"v1.10.88",date:"2026-10-07",title:"Penyelarasan Paripurna Badge Inc. PPN: Kapsul Pill Elegan & Desain Sistem Harmonis",category:"fix",badge:"Harmonious Inc. PPN Capsule Pill & Price Alignment v1.10.88",items:["Eliminasi Mutlak Badge Kotak Kaku (Square Box Stamp): Menggantikan badge Inc. PPN lama yang berbingkai kotak kuning kaku (rounded 4px) dengan format kapsul pill oval elegan (rounded-full 9999px) yang selaras 100% dengan bahasa desain seluruh badge modal produk.","Penyelarasan Palet & Tema Dinamis (.accent-badge & .badge-inc-ppn): Menghilangkan warna kuning border-amber-200 yang jomplang/tidak serasi; kini badge Inc. PPN otomatis beradaptasi menggunakan token tema toko aktif (rgba(var(--color-primary-rgb), 0.12)) dengan border halus, serasi dengan badge Harga Terbaik, Official, dan judul harga.",'Integrasi Ikon Resmi Bukti Pajak: Dilengkapi ikon FontAwesome nota/pajak (<i class="fa-solid fa-receipt"></i>) yang profesional dan proporsional dengan font 9px uppercase tracking-wider.',"Penyelarasan Ketinggian & Wadah Mandiri (#product-modal-price-badges): Memisahkan badge pajak dari string teks angka harga (text-3xl) ke dalam kontainer flex terdedikasi, sehingga Inc. PPN dan Harga Terbaik sejajar sempurna di garis horizontal tengah tanpa floating offset yang jomplang.","Multi-Channel Distribution v1.10.88 (Android versionCode 11088)."]},{id:"log-1-10-87",version:"v1.10.87",date:"2026-10-07",title:"Sistem Katalog Kartu Warna Cat (Paint Swatch Fan Deck & Color Family Filter)",category:"feature",badge:"Paint Swatch Chip System & Family Filter v1.10.87",items:["Arsitektur Kartu Swatch Cat Modern (.paint-swatch-card): Merombak tampilan varian khusus produk cat tembok & cat warna menjadi format kartu katalog swatch kartu chip realistik (ala Dulux, Avian Brands, Nippon Paint, Jotun) dengan blok warna penuh, lapisan satin sheen 3D glossy, dan panel informasi kode warna.","Cap/Stamp Kode Warna Berkontras Cerdas: Dilengkapi kode warna atau kode pabrik pada sudut swatch dengan formula kecerahan YIQ (isDarkColor) yang secara dinamis beralih kontras otomatis antara teks terang vs gelap agar 100% selalu jelas dibaca di atas semua jenis warna cat.","Live Selected Color Spotlight Bar (.paint-spotlight-bar): Menghadirkan bar spotlight warna aktif di atas lembar varian yang menampilkan preview kotak swatch besar, nama warna tebal, kode hex kapital, harga riil, dan status sisa stok varian terpilih.","Smart Color Family Filter Tabs (paint-family-nav): Mengelompokkan varian cat secara otomatis ke dalam tab keluarga warna (Semua, Putih & Netral, Kuning & Krem, Oranye & Peach, Merah & Pink, Cokelat & Earthy, Biru & Toska, Hijau Segar, Abu & Gelap) dengan hanya menampilkan tab warna yang memang tersedia pada produk tersebut.","Pencarian Instan Nama & Kode Warna: Memudahkan pelanggan mencari warna impian secara instan berdasarkan nama maupun kode hex saat produk memiliki banyak variasi warna (10-50 warna).","Harmonisasi Kasir POS (pos-variant-sheet.js): Meningkatkan visual varian warna cat di kasir POS dengan mini paint chip (.pos-paint-chip) bersaput sheen glossy agar kasir dapat memverifikasi warna kaleng cat pelanggan secara instan dan akurat.","Multi-Channel Distribution v1.10.87 (Android versionCode 11087)."]}],j=e=>{if(!e)return[0,0,0];const a=String(e).match(/(\d+)\.(\d+)\.(\d+)/);return a?[parseInt(a[1],10),parseInt(a[2],10),parseInt(a[3],10)]:[0,0,0]},A=(e,a)=>{const[s,r,t]=j(e),[o,n,l]=j(a);return o!==s?o-s:n!==r?n-r:l-t},I=(e,a=Z)=>{const s=e&&Array.isArray(e.changelog)?e.changelog:[],r=new Set(e&&Array.isArray(e.deletedChangelogIds)?e.deletedChangelogIds:[]),t=new Set(s.map(i=>i.id||i.version)),o=B.filter(i=>!t.has(i.id)&&!t.has(i.version)&&!r.has(i.id)&&!r.has(i.version)),p=[...s.filter(i=>!r.has(i.id)&&!r.has(i.version)),...o].sort((i,w)=>{const F=new Date(i.date||"2026-01-01").getTime(),S=new Date(w.date||"2026-01-01").getTime();return S!==F?S-F:A(i.version,w.version)});return typeof a=="number"&&a>0?p.slice(0,a):p},Y=e=>{const a=B[0]?.version||"v1.10.91",s=I(e,null);if(!s||s.length===0)return a;let r=s[0].version||a;for(const t of s)t.version&&A(t.version,r)<0&&(r=t.version);return A(a,r)<0&&(r=a),r};let h="all";const aa=e=>{if(!e)return"";try{const a=e.split("-");return a.length===3?new Date(parseInt(a[0]),parseInt(a[1])-1,parseInt(a[2])).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):e}catch{return e}},ea=e=>{switch(e){case"feature":return{label:"Fitur Baru",icon:"fa-rocket",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};case"optimization":return{label:"Optimasi",icon:"fa-bolt-lightning",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};case"maintenance":return{label:"Maintenance",icon:"fa-wrench",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};case"security":return{label:"Keamanan",icon:"fa-shield-halved",colorClass:"bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 border-red-200/80 dark:border-red-800/60",iconColor:"text-red-500 dark:text-red-400"};case"bugfix":return{label:"Perbaikan",icon:"fa-bug-slash",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};default:return{label:"Update",icon:"fa-tag",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"}}},ta=()=>{const e=m("changelog-items-container");if(!e)return;const a=I(c),s=h==="all"?a:a.filter(t=>t.category===h);if(s.length===0){e.innerHTML=`
        <div class="flex flex-col items-center justify-center py-12 text-center text-slate-400">
            <div class="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-2xl mb-3">
                <i class="fa-solid fa-clipboard-list opacity-60"></i>
            </div>
            <p class="text-xs font-bold text-slate-600 dark:text-slate-300">Belum ada catatan pada kategori ini</p>
            <p class="text-[10px] text-slate-400 mt-0.5">Pilih filter kategori lain di atas</p>
        </div>`;return}let r="";s.forEach((t,o)=>{const n=o===0&&h==="all",l=ea(t.category),p=aa(t.date),i=(t.items||[]).map(w=>`
            <li class="flex items-start gap-2 text-xs font-medium text-slate-600 dark:text-slate-300 leading-relaxed">
                <i class="fa-solid fa-circle-check text-[var(--color-primary)] text-[11px] mt-1 shrink-0"></i>
                <span>${d(w)}</span>
            </li>
        `).join("");r+=`
        <div class="relative pl-6 sm:pl-8 pb-6 border-l-2 ${n?"border-[var(--color-primary)]":"border-slate-200 dark:border-slate-700"} last:border-l-transparent last:pb-2">
            <!-- Timeline Node Indicator -->
            <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full ${n?"bg-[var(--color-primary)] ring-4 ring-[rgba(var(--color-primary-rgb),0.2)]":"bg-slate-300 dark:bg-slate-600"} flex items-center justify-center transition-all">
                ${n?'<span class="w-1.5 h-1.5 rounded-full bg-white"></span>':""}
            </div>

            <!-- Card Box -->
            <div class="rounded-2xl border ${n?"border-[var(--color-primary)]/40 bg-[rgba(var(--color-primary-rgb),0.03)] dark:bg-[rgba(var(--color-primary-rgb),0.06)] shadow-sm":"border-slate-100 dark:border-slate-800/80 bg-slate-50/70 dark:bg-slate-800/40"} p-4 sm:p-5 transition-all">
                <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div class="flex items-center gap-2 flex-wrap">
                        <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg text-[11px] font-black tracking-wider uppercase ${n?"bg-[var(--color-primary)] text-white shadow-xs":"bg-slate-800 text-white dark:bg-slate-700"}">
                            ${d(t.version||"v1.0.0")}
                        </span>
                        <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md border text-[10px] font-bold ${l.colorClass}">
                            <i class="fa-solid ${l.icon} text-[9px] ${l.iconColor}"></i> ${d(l.label)}
                        </span>
                        ${n?`
                        <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.25)] text-[9px] font-black uppercase tracking-wider">
                            <span class="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] animate-pulse"></span> Versi Terbaru
                        </span>`:""}
                    </div>
                    <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500 flex items-center gap-1">
                        <i class="fa-regular fa-calendar text-[10px]"></i> ${d(p)}
                    </span>
                </div>

                <h4 class="text-xs sm:text-sm font-extrabold text-slate-800 dark:text-white leading-snug mb-3">
                    ${d(t.title||"Pembaruan Sistem")}
                </h4>

                <ul class="space-y-2">
                    ${i}
                </ul>
            </div>
        </div>`}),e.innerHTML=r},K=e=>{h=e,document.querySelectorAll(".btn-changelog-filter").forEach(a=>{const s=a.getAttribute("data-category"),r=a.querySelector("i");s===e?(a.className="btn-changelog-filter shrink-0 whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold primary-bg text-white shadow-xs transition-all cursor-pointer border border-transparent",r&&(r.className=r.className.replace(/text-\[[^\]]+\]/g,"").trim()+" text-white")):(a.className="btn-changelog-filter shrink-0 whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold bg-white dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 transition-all cursor-pointer",r&&s!=="all"?r.className=r.className.replace(/\btext-white\b/g,"").trim()+" text-[var(--color-primary)]":r&&s==="all"&&(r.className=r.className.replace(/\btext-white\b/g,"").trim()+" text-slate-400"))}),ta()},sa=(e="all")=>{let a=m("changelog-modal");a||(a=document.createElement("div"),a.id="changelog-modal",a.className="fixed inset-0 z-[125] bg-slate-900/80 flex items-end sm:items-center justify-center p-0 sm:p-4 opacity-0 transition-opacity duration-300",a.onclick=t=>{t.target===a&&N()},a.innerHTML=`
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
                <button onclick="window.filterChangelog('security')" data-category="security" class="btn-changelog-filter shrink-0 whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold bg-white dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 transition-all cursor-pointer">
                    <i class="fa-solid fa-shield-halved"></i> Keamanan
                </button>
                <button onclick="window.filterChangelog('bugfix')" data-category="bugfix" class="btn-changelog-filter shrink-0 whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold bg-white dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 transition-all cursor-pointer">
                    <i class="fa-solid fa-bug-slash text-[10px] text-[var(--color-primary)]"></i>
                    <span>Perbaikan</span>
                </button>
            </div>

            <!-- List Content Timeline -->
            <div class="p-4 sm:p-6 overflow-y-auto flex-1 custom-scrollbar">
                <div id="changelog-items-container" class="space-y-1"></div>
            </div>

            <!-- Footer Modal -->
            <div class="p-3.5 sm:p-4 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/80 dark:bg-[#0b1121]/90 flex items-center justify-between shrink-0">
                <div class="flex items-center gap-2 text-[10px] font-bold text-slate-400 dark:text-slate-500">
                    <span class="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse"></span>
                    <span>Real-Time Sync Active</span>
                </div>
                <button onclick="closeChangelogModal()" class="px-6 py-2.5 rounded-2xl primary-bg text-white text-xs font-bold uppercase tracking-wider hover:opacity-90 active:scale-95 transition-all cursor-pointer shadow-sm">
                    Tutup
                </button>
            </div>
        </div>`,document.body.appendChild(a));const s=Y(c),r=m("changelog-header-ver");r&&(r.textContent=s),h=e,K(e),a.style.display!=="flex"&&E("changelog"),a.style.display="flex",a.offsetWidth,requestAnimationFrame(()=>{a.classList.remove("opacity-0");const t=m("changelog-modal-box");t&&t.classList.remove("translate-y-full","sm:translate-y-8")})},N=(e=!1)=>{const a=m("changelog-modal");if(!a||a.style.display==="none")return;const s=()=>{a.classList.add("opacity-0");const r=m("changelog-modal-box");r&&r.classList.add("translate-y-full","sm:translate-y-8"),setTimeout(()=>{a.style.display="none"},300)};typeof P=="function"?P("changelog",e,s):s()};window.openChangelogModal=sa;window.closeChangelogModal=N;window.filterChangelog=K;export{Y as a,A as c,I as g};

import{q as b,a as c,i as d,e as p,o as Q,g as u,k as x,l as M,n as C,G as g,a1 as E,H as R,v as B,ai as O,r as T}from"./module-print-B69y0E_d.js";let F=null;const P=()=>{if(!F)try{F=b.collection("freshmart").doc("cms_data").collection("faqs").onSnapshot(a=>{a&&a.docs&&(c.faqs=a.docs.map(e=>({id:e.id,...e.data()}))),typeof window.curViewName<"u"&&window.curViewName==="view-faq"&&f(),window.isAdm&&typeof window.cTab<"u"&&window.cTab==="faqs"&&typeof window.rAdmFAQ=="function"&&window.rAdmFAQ()},a=>{console.warn("Sync sub-koleksi faqs dibatasi, menggunakan fallback cms_data.faqs:",a.message),typeof window.curViewName<"u"&&window.curViewName==="view-faq"&&f(),window.isAdm&&typeof window.cTab<"u"&&window.cTab==="faqs"&&typeof window.rAdmFAQ=="function"&&window.rAdmFAQ()})}catch{console.warn("Fallback sync Q&A dari cms_data aktif")}};let y="Semua";const f=()=>{P();const a=document.getElementById("storefront-faq-container"),e=document.getElementById("faq-category-pills");if(!a)return;const s=(c.faqs||[]).filter(r=>r.status==="published"),n=["Semua","Pemesanan","Pengiriman","Pembayaran","Garansi","Lainnya"];e&&(e.innerHTML=n.map(r=>`
            <button onclick="selectFAQCategory('${r}')" class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${y===r?"primary-bg text-white shadow-md":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100"}">
                ${r}
            </button>
        `).join(""));const t=(document.getElementById("faq-search-input")?.value||"").toLowerCase().trim(),o=s.filter(r=>{const l=y==="Semua"||r.category===y,m=!t||(r.question||"").toLowerCase().includes(t)||(r.answer||"").toLowerCase().includes(t);return l&&m});if(!o.length){a.innerHTML=`
            <div class="text-center py-12 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
                <div class="w-16 h-16 rounded-full primary-bg-soft primary-text mx-auto flex items-center justify-center mb-3">
                    <i class="fa-solid fa-circle-question text-3xl"></i>
                </div>
                <h3 class="font-bold text-slate-800 dark:text-white text-base">Belum Ada Q&A Ditemukan</h3>
                <p class="text-xs text-slate-500 mt-1 max-w-sm mx-auto">Punya pertanyaan lain? Silakan gunakan tombol <b>Ajukan Pertanyaan</b> untuk bertanya ke admin.</p>
                <button onclick="openAskQuestionModal()" class="mt-4 primary-bg text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-md active:scale-95 transition-all">Ajukan Pertanyaan Sekarang</button>
            </div>
        `;return}a.innerHTML=o.map(r=>`
        <div class="bg-white dark:bg-slate-800/95 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-soft transition-all duration-200 hover:shadow-md overflow-hidden">
            <button onclick="toggleFAQAccordion('${r.id}')" class="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-3.5 hover:bg-slate-50/80 dark:hover:bg-slate-800/60 transition-colors">
                <div class="flex items-start gap-3.5 min-w-0">
                    <div class="w-9 h-9 rounded-xl primary-bg text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm"><i class="fa-solid fa-question text-xs font-bold"></i></div>
                    <div class="min-w-0">
                        <div class="flex flex-wrap items-center gap-2 mb-1.5">
                            <span class="text-[9px] font-bold uppercase tracking-wider primary-bg-soft primary-text primary-border px-2.5 py-0.5 rounded-lg border">${d(r.category||"Umum")}</span>
                            ${r.authorName?`<span class="text-[10px] font-medium text-slate-400">Oleh: ${d(r.authorName)}</span>`:""}
                        </div>
                        <h4 class="font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-snug break-words">${d(r.question)}</h4>
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
                        <div class="text-slate-800 dark:text-slate-100 font-semibold leading-relaxed whitespace-pre-wrap break-words">${d(r.answer||"Belum ada jawaban.")}</div>
                    </div>
                </div>
            </div>
        </div>
    `).join("")},_=a=>{y=a,f()},K=()=>{f()},U=a=>{const e=document.getElementById(`faq-body-${a}`),s=document.getElementById(`faq-icon-${a}`);if(!e||!s)return;e.classList.contains("hidden")?(e.classList.remove("hidden"),s.classList.add("rotate-180")):(e.classList.add("hidden"),s.classList.remove("rotate-180"))},W=()=>{const a=p("modal-ask-question"),e=p("modal-ask-question-box");a&&(a.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("askQuestion"),Q(a,e))},L=(a=!1)=>{const e=()=>{B("modal-ask-question","modal-ask-question-box")};typeof window.requestCloseModal=="function"?window.requestCloseModal("askQuestion",a,e):e()},G=async()=>{const a=(u("ask-author-name")||"").trim()||"Pelanggan",e=u("ask-category")||"Pemesanan",s=(u("ask-question-text")||"").trim();if(!s)return x("Tuliskan pertanyaan Anda terlebih dahulu!");M("Mengirim pertanyaan...");const n="faq-"+Date.now().toString(36),t={id:n,question:s,answer:"",category:e,authorName:a,status:"pending_answer",createdAt:new Date().toISOString()};let o=!1;try{await b.collection("freshmart").doc("cms_data").collection("faqs").doc(n).set(t),o=!0}catch(r){console.warn("Penulisan sub-koleksi faqs dibatasi, mencoba fallback cms_data.faqs:",r)}if(!o)try{const r=[t,...(c.faqs||[]).filter(l=>l.id!==n)];await b.collection("freshmart").doc("cms_data").set({faqs:r},{merge:!0}),c.faqs=r,o=!0}catch(r){console.warn("Fallback cms_data.faqs juga gagal:",r)}C(),o?(L(),g("ask-question-text",""),x("Pertanyaan terkirim! Admin akan menjawabnya segera."),f()):x("Gagal mengirim pertanyaan. Coba lagi!")};let k="all";const v=()=>{P();const a=c.faqs||[],e=a.filter(t=>k==="pending"?t.status==="pending_answer":k==="published"?t.status==="published":!0),s=a.filter(t=>t.status==="pending_answer").length;let n=`
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
                <button onclick="setAdminFAQFilter('all')" class="shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${k==="all"?"primary-bg text-white shadow-md":"bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"}">
                    Semua (${a.length})
                </button>
                <button onclick="setAdminFAQFilter('pending')" class="shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${k==="pending"?"primary-bg text-white shadow-md":"bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"}">
                    <span>Belum Dijawab</span>
                    ${s>0?`<span class="bg-rose-500 text-white text-[9px] px-1.5 py-0.5 rounded-full font-bold">${s}</span>`:""}
                </button>
                <button onclick="setAdminFAQFilter('published')" class="shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${k==="published"?"primary-bg text-white shadow-md":"bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"}">
                    Terpublikasi
                </button>
            </div>

            <!-- List Q&A Admin -->
            <div class="space-y-4">
                ${e.length?e.map(t=>`
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
    `;setH("admin-content",n)},V=a=>{k=a,v()},z=a=>{const e=(c.faqs||[]).find(t=>t.id===a)||{id:"",question:"",answer:"",category:"Pemesanan",authorName:"Admin",status:"published"};g("admin-faq-id",e.id),g("admin-faq-category",e.category||"Pemesanan"),g("admin-faq-author",e.authorName||"Admin"),g("admin-faq-question",e.question||""),g("admin-faq-answer",e.answer||""),g("admin-faq-status",e.status||"published"),E("admin-faq-modal-title",a?"Edit Q&A":"Tambah Q&A Baru");const s=p("modal-admin-faq"),n=p("modal-admin-faq-box");s&&(s.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("adminFAQ"),Q(s,n))},D=(a=!1)=>{const e=()=>{B("modal-admin-faq","modal-admin-faq-box")};typeof window.requestCloseModal=="function"?window.requestCloseModal("adminFAQ",a,e):e()},J=async()=>{const a=u("admin-faq-id")||"faq-"+Date.now().toString(36),e=u("admin-faq-category"),s=(u("admin-faq-author")||"").trim()||"Admin",n=(u("admin-faq-question")||"").trim(),t=(u("admin-faq-answer")||"").trim();let o=u("admin-faq-status");if(!n)return x("Pertanyaan tidak boleh kosong!");t&&o==="pending_answer"&&(o="published"),M("Menyimpan Q&A...");const r={id:a,question:n,answer:t,category:e,authorName:s,status:o,updatedAt:new Date().toISOString()};let l=[...c.faqs||[]];const m=l.findIndex(i=>i.id===a);m>-1?l[m]={...l[m],...r}:l.unshift(r),c.faqs=l;try{await b.collection("freshmart").doc("cms_data").collection("faqs").doc(a).set(r,{merge:!0})}catch(i){console.warn("Gagal set ke sub-koleksi faqs:",i)}try{await b.collection("freshmart").doc("cms_data").set({faqs:l},{merge:!0})}catch(i){console.warn("Gagal update cms_data.faqs:",i)}C(),D(),x("Q&A Berhasil Disimpan!"),v()},Z=a=>{R("Hapus Q&A","Yakin ingin menghapus pertanyaan ini?",async()=>{M("Menghapus Q&A...");let e=(c.faqs||[]).filter(s=>s.id!==a);c.faqs=e;try{await b.collection("freshmart").doc("cms_data").collection("faqs").doc(a).delete()}catch(s){console.warn("Gagal delete dari sub-koleksi faqs:",s)}try{await b.collection("freshmart").doc("cms_data").set({faqs:e},{merge:!0})}catch(s){console.warn("Gagal update cms_data.faqs:",s)}C(),x("Q&A Berhasil Dihapus!"),v()})};window.attachFAQRealtime=P;window.renderStorefrontFAQ=f;window.selectFAQCategory=_;window.filterStorefrontFAQ=K;window.toggleFAQAccordion=U;window.openAskQuestionModal=W;window.closeAskQuestionModal=L;window.submitCustomerQuestion=G;window.rAdmFAQ=v;window.setAdminFAQFilter=V;window.openFAQModal=z;window.closeAdminFAQModal=D;window.saveAdminFAQ=J;window.deleteAdminFAQ=Z;const Y=5,H=[{id:"log-1-19-7",version:"v1.19.7",date:"2026-10-21",title:"Storefront Zero-Truncation, Hero Banner Line-Clamp-2 & Section Header Zero-Crushing Engine",category:"feature",badge:"Native App Zero-Truncation & Proportional Consistency v1.19.7",items:["Eliminasi Pemotongan Placeholder Search Presensi Tim: Mengoptimalkan teks pencarian di modal rekap presensi tim menjadi 'Cari nama / jabatan...' dengan padding ikon responsif pl-8 pr-2.5, sehingga placeholder tampil utuh 100% tanpa terpotong di layar HP 360px.","Hero Banner & Promo Banner Multi-Line (line-clamp-2): Mengubah batasan baris judul spanduk utama dari line-clamp-1 menjadi line-clamp-2 dengan ukuran teks responsif text-sm sm:text-lg md:text-2xl lg:text-3xl font-black, mengeliminasi teks terpotong menjadi 'PELANGGAN TOKO...' dan membiarkan teks melipat secara alami dua baris.","Section Header Zero-Crushing (Kategori, Brand & Reward): Menerapkan proteksi flex-shrink: 0 !important dan white-space: nowrap !important pada tombol 'Lihat Semua', serta menyematkan judul adaptif 'BRAND RESMI' pada mobile dan 'BRAND RESMI & PRODUSEN TERPERCAYA' pada tablet/desktop agar bebas benturan dan tidak terpotong menjadi 'BRAND RESMI & PRO...' dan 'LIHAT...'.","Universal Native App Visual Harmony & Ergonomics: Menjaga keselarasan seluruh elemen native app, touch target 44px, frame hover desktop-only, dan 0% horizontal overflow di seluruh resolusi.","Multi-Channel Distribution v1.19.7 (Android versionCode 11907 & Windows x64)."]},{id:"log-1-19-6",version:"v1.19.6",date:"2026-10-21",title:"Universal Native App Visual Harmony, Proportional Input & Button Consistency, dan Bottom Sheet Modal Precision",category:"feature",badge:"Universal Native App Visual Harmony & Proportional Engine v1.19.6",items:["Universal Native App Visual Harmony Engine (v1.19.6): Membangun arsitektur visual responsif terpadu di style.css dengan pembatasan hover frame desktop-only (@media (hover: hover) and (pointer: fine)), mengeliminasi efek hover lengket/stuck pada layar sentuh smartphone.","Standardisasi Proporsional Input & Tombol: Menegakkan touch target minimum 44px (min-height: 2.75rem), squircle radius 14px (0.875rem), font 16px mobile anti-auto-zoom di iOS/Android, dan tactile active feedback scale(0.965) seragam pada seluruh tombol dan formulir.","Penyelarasan Presisi Modal Bayar Kasir POS (#pos-pay-modal): Menjadikan modal bayar kasir sebagai native bottom sheet squircle rounded-t-[2rem] sm:rounded-3xl dengan pull-indicator, memindahkan kotak kembalian (#pos-change-box) tepat di bawah kolom input nominal untuk umpan balik instan kasir, memperkuat kontras teks input nominal, dan mengeliminasi tombol nominal cepat Rp 500.000 terpotong footer.","Perapian Modal Cetak Label Barcode (#modal-product-barcode-label): Menjamin badge SKU produk anti-wrap pada karakter strip (-) dengan white-space: nowrap !important, memperbaiki pembatasan baris nama varian (line-clamp), menata stepper jumlah cetak responsif pada kartu item, dan merapikan label tombol aksi responsif.","Harmonisasi Modal Rekapitulasi Presensi Tim (#modal-attendance-rekap): Mengeliminasi pemotongan judul header modal ('Reka...' dan 'PUTRI UT...') dengan menyediakan bilah pemilih periode bulan adaptif, mengganti tipografi serif Courier New pada kartu 'Hak Uang Makan' ke modern sans-serif Archivo/Barlow, membersihkan duplikasi bullet titik karyawan, dan merestrukturisasi tombol footer menjadi satu baris horizontal proporsional.","Universal 100% Solid Flat Clean: Menjaga konsistensi estetika solid minimalis tanpa gradasi, tanpa backdrop-filter blur kaca, dan hairline border bersih di Light & Dark Mode.","Multi-Channel Distribution v1.19.6 (Android versionCode 11906 & Windows x64)."]},{id:"log-1-19-5",version:"v1.19.5",date:"2026-10-20",title:"Paket Aplikasi Windows Desktop (.exe), Mesin Cetak Thermal High-Density Deep Black & Dokumen A4 High-Contrast",category:"feature",badge:"Windows Desktop Installer .exe & High-Density Thermal Print Engine v1.19.5",items:["Aplikasi Mandiri Windows Desktop (.exe): Resmi merilis paket installer mandiri Windows NSIS ('Toko Putri Setup 1.19.5.exe') dan versi Portable ('Toko Putri 1.19.5.exe') bertenaga Electron dengan Single-Instance Lock, performa 60 FPS offline-first, dan bebas gangguan address bar browser.","Mesin Cetak Thermal High-Density Deep Black: Mengganti font struk ke Consolas dengan penegakan font-weight 700 (teks biasa) dan font-weight 900 (judul toko & baris TOTAL) serta aksen text-stroke dan penonaktifan anti-aliasing abu-abu, menghasilkan cetakan struk kasir yang hitam pekat, tebal, dan anti-pudar.","Kalibrasi Presisi Lebar Kertas Thermal (48mm / 72mm): Memperbarui printable width 58mm menjadi 48mm dan 80mm menjadi 72mm dengan padding simetris rata tengah, mengeliminasi margin kosong sebelah kanan secara tuntas.","Peningkatan Kontras & Ketebalan Dokumen A4: Mengunci seluruh teks, border tabel, dan angka rupiah invoice, faktur, surat jalan, dan slip gaji ke solid black (#000000) berbobot tebal, menjamin cetakan dokumen kantor/toko tajam dan bebas dithering buram.","Penajaman Kontras Dark Mode Kasir POS (WCAG AA/AAA): Mengoptimalkan total tagihan modal bayar, subtotal baris keranjang kasir, badge varian katalog, dan prefix diskon Rp ke warna Rose-300 cerah kontras tinggi.","Penyelarasan Base Path Relatif (./) di Vite: Menjamin seluruh modul dan aset aplikasi dapat dibuka secara offline langsung dari sistem file komputer tanpa memerlukan web server lokal.","Multi-Channel Distribution v1.19.5 (Android versionCode 11905 & Windows x64)."]},{id:"log-1-19-4",version:"v1.19.4",date:"2026-10-20",title:"Persistensi Pustaka Database Bersama (Anti-Hilang saat Reload), Batch Import 'Salin Semua ke Toko' & Pemulihan Tampilan POS Kasir Multi-Device (Tablet & Desktop Split Screen)",category:"feature",badge:"Master Presets Persistence, Bulk Import All & Multi-Device POS Harmony v1.19.4",items:["Penyimpanan Permanen Master Presets ke Cloud Firestore Sub-Koleksi: Mengintegrasikan penulisan langsung setiap produk yang disalin dari Database Bersama ke sub-koleksi Firestore freshmart/cms_data/products/{id}, pendaftaran otomatis ke susunan produk productOrder, dan pembaruan seketika cache lokal freshmart_products, mengeliminasi produk hilang setelah reload secara permanen.","Fitur Baru '⚡ Salin Semua ke Toko' (Batch Import All): Menyediakan tombol aksi cepat di toolbar Database Bersama dan kartu interaktif 'Tersedia utk Diimpor' untuk menyalin seluruh template produk, varian, dan spesifikasi sekaligus ke etalase & kasir POS dengan opsi penentuan stok awal massal.","Batch Write Firestore Berkinerja Tinggi: Eksekusi impor massal diproses menggunakan db.batch() dalam batas aman Firestore (maks 450 dokumen per commit), mendaftarkan kategori & brand baru otomatis, dan menyiarkan sinyal sinkronisasi realtime product_bulk ke seluruh perangkat.","Proteksi Ganda saveApp di storage.js: Memfilter key 'products' dari dokumen utama cms_data agar terhindar dari pembengkakan batas dokumen 1MB Firestore dan menyediakan mekanisme batch sync otomatis untuk updatedProductIds.","Pemulihan Antarmuka POS Kasir Split-Screen di Tablet & Desktop: Menghidupkan kembali tata letak split screen kasir (katalog produk di kiri 58-65% dan panel keranjang & billing kasir di kanan 35-42%) melalui Responsive Display Engine di style.css, mengeliminasi konflik .hidden !important yang sebelumnya menimpa utilitas flex tablet/desktop.","Harmonisasi Header Terminal Kasir Multi-Device: Menyesuaikan kontrol tombol kasir (Live Clock WIB, Tema Gelap/Terang, Estimator Material F3, Pengaturan Printer Thermal F7, Panduan POS, Status Jaringan Online, dan Tombol Keluar) agar tampil proporsional langsung di header tablet & desktop, menyembunyikan tombol mobile titik tiga [⋮] pada layar >= md, serta mempertahankan 100% kebersihan antarmuka Native App di smartphone.","Universal Dark-Mode Contrast Engine (WCAG AA/AAA): Menajamkan seluruh elemen teks bertema toko di Dark Mode (harga jual produk POS, total akhir keranjang, tombol 'Lihat Semua' kategori/brand, tombol 'Laporan P&L', link 'Analisis', dan tombol Scan F9) ke aksen Rose-300/400 kontras tinggi, mengeliminasi teks gelap/tenggelam secara tuntas.","Stabilisasi Jaringan Cloud Firestore (Anti-ERR_QUIC_PROTOCOL_ERROR): Mengunci komunikasi data Firestore WebChannel ke standard HTTPS TCP Port 443 via experimentalForceLongPolling, mengeliminasi pemutusan sesi UDP/QUIC dan HTTP 400 Bad Request pada jaringan internet ISP/WiFi lokal sehingga sinkronisasi kasir berjalan 100% hening dan stabil.","Suite Unit Test test-master-presets-persistence.mjs, test-master-product-presets.mjs & test-pos-header-responsive.mjs (87 pengujian) 100% Passed.","Multi-Channel Distribution v1.19.4 (Android versionCode 11904)."]},{id:"log-1-19-3",version:"v1.19.3",date:"2026-10-20",title:"Universal Harmony Engine: Penyelarasan Border Radius Tombol, Badge Anti-Wrap & Anti-Bloat, dan Konsistensi Wadah Ikon (Icon Pods)",category:"optimization",badge:"Universal UI Harmony & Consistency Engine v1.19.3",items:["Universal Badge Anti-Wrap & Anti-Bloat Engine: Menstandarkan seluruh badge status dan info pill di seluruh aplikasi (Pesanan, Supplier, Kulakan PO, Retur, dan Tempo) dengan white-space: nowrap !important, line-height: 1.15, max-height 26px, dan letter-spacing proporsional, mengeliminasi teks bertumpuk atau mekar menggembung secara tuntas.","Hierarki Border Radius Tombol Selaras: Mengunci seluruh tombol aksi ke sistem squircle terstandar: Tombol Utama/CTA/Submit (1rem / 16px), Tombol Sekunder/Filter Chiclet/Tab (0.75rem / 12px), Tombol Aksi Kompak (0.75rem / 12px), dan Micro Action/Drag Handle (0.5rem / 8px).","Standarisasi Wadah Ikon (Icon Pods): Menyelaraskan border radius seluruh wadah ikon berdasarkan dimensi (Large 56-64px ke 16px squircle, Medium 40-48px ke 14px, Compact/Stat 32-36px ke 12px, dan Small 24-28px ke 8px) dengan proteksi aspect-ratio 1:1 anti-gepeng.","Penyelarasan Proporsional Tombol Sinkronasi (Segarkan) & Widget Arus Kas: Menetralkan aspect-ratio paksaan pada tombol yang memiliki teks responsif (w-auto / aspect-auto) dan mengunci ukuran tombol header CMS (#btn-admin-refresh) di mobile ke 32x32px (1:1 squircle) serasi sempurna dengan tombol theme toggle dan tombol aksi lainnya, serta menyelaraskan ikon Segarkan arus kas dengan fa-arrows-rotate text-xs terpusat anti-gepeng.","Restrukturisasi Header POS Kasir Native Mobile App: Mengeliminasi kebocoran elemen desktop (Live Clock WIB, Badge Online, USB Scanner Aktif) pada layar HP (<xl) dengan proteksi display: none !important mutlak di CSS, menghadirkan tampilan header POS kasir yang 100% Native Mobile App: lapang, nama toko & kasir tampil utuh tanpa terpotong, serta tombol menu opsi kasir [ ⋮ ] dan antrean parkir tampil proporsional di sisi kanan.","Pemulihan Presisi Antarmuka POS Kasir: Mengembalikan placeholder asli kasir 'Cari nama, SKU, barcode... [F2]' lengkap dengan shortcut, teks tombol scan kamera 'Scan (F9)' pada tablet/desktop, dan menetralkan aspect-ratio tombol parkir antrean serta stepper kuantitas keranjang sehingga antarmuka POS kasir kembali 100% identik dengan aslinya.","Eliminasi Total White-on-White Icon Pods Pengaturan Toko: Memperbaiki selector penentralan gradient di style.css yang sebelumnya secara tidak sengaja menimpa wadah icon pod bertema toko menjadi latar abu-abu pudar (#f8fafc) di Light Mode, serta mengunci seluruh wadah ikon kartu Pengaturan Toko (Profil, Katalog, Pengiriman, Pembayaran, Sistem, Operasional, Printer, Backup) ke solid background-color: var(--color-primary) dengan ikon putih kontras tinggi yang tajam dan jelas.","Suite Unit Test Baru test-button-badge-icon-harmony.mjs (42 pengujian) dan test-pos-header-responsive.mjs (28 pengujian) 100% Passed dan terintegrasi otomatis ke audit kesehatan sistem.","Multi-Channel Distribution v1.19.3 (Android versionCode 11903)."]}],j=a=>{if(!a)return[0,0,0];const e=String(a).match(/(\d+)\.(\d+)\.(\d+)/);return e?[parseInt(e[1],10),parseInt(e[2],10),parseInt(e[3],10)]:[0,0,0]},A=(a,e)=>{const[s,n,t]=j(a),[o,r,l]=j(e);return o!==s?o-s:r!==n?r-n:l-t},I=(a,e=Y)=>{const s=a&&Array.isArray(a.changelog)?a.changelog:[],n=new Set(a&&Array.isArray(a.deletedChangelogIds)?a.deletedChangelogIds:[]),t=new Set(s.map(i=>i.id||i.version)),o=H.filter(i=>!t.has(i.id)&&!t.has(i.version)&&!n.has(i.id)&&!n.has(i.version)),m=[...s.filter(i=>!n.has(i.id)&&!n.has(i.version)),...o].sort((i,w)=>{const q=new Date(i.date||"2026-01-01").getTime(),S=new Date(w.date||"2026-01-01").getTime();return S!==q?S-q:A(i.version,w.version)});return typeof e=="number"&&e>0?m.slice(0,e):m},X=a=>{const e=H[0]?.version||"v1.19.7",s=I(a,null);if(!s||s.length===0)return e;let n=s[0].version||e;for(const t of s)t.version&&A(t.version,n)<0&&(n=t.version);return A(e,n)<0&&(n=e),n};let h="all";const ee=a=>{if(!a)return"";try{const e=a.split("-");return e.length===3?new Date(parseInt(e[0]),parseInt(e[1])-1,parseInt(e[2])).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):a}catch{return a}},ae=a=>{switch(a){case"feature":return{label:"Fitur Baru",icon:"fa-rocket",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};case"optimization":return{label:"Optimasi",icon:"fa-bolt-lightning",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};case"maintenance":return{label:"Maintenance",icon:"fa-wrench",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};case"security":return{label:"Keamanan",icon:"fa-shield-halved",colorClass:"bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 border-red-200/80 dark:border-red-800/60",iconColor:"text-red-500 dark:text-red-400"};case"bugfix":return{label:"Perbaikan",icon:"fa-bug-slash",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};default:return{label:"Update",icon:"fa-tag",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"}}},te=()=>{const a=p("changelog-items-container");if(!a)return;const e=I(c),s=h==="all"?e:e.filter(t=>t.category===h);if(s.length===0){a.innerHTML=`
        <div class="flex flex-col items-center justify-center py-12 text-center text-slate-400">
            <div class="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-2xl mb-3">
                <i class="fa-solid fa-clipboard-list opacity-60"></i>
            </div>
            <p class="text-xs font-bold text-slate-600 dark:text-slate-300">Belum ada catatan pada kategori ini</p>
            <p class="text-[10px] text-slate-400 mt-0.5">Pilih filter kategori lain di atas</p>
        </div>`;return}let n="";s.forEach((t,o)=>{const r=o===0&&h==="all",l=ae(t.category),m=ee(t.date),i=(t.items||[]).map(w=>`
            <li class="flex items-start gap-2 text-xs font-medium text-slate-600 dark:text-slate-300 leading-relaxed">
                <i class="fa-solid fa-circle-check text-[var(--color-primary)] text-[11px] mt-1 shrink-0"></i>
                <span>${d(w)}</span>
            </li>
        `).join("");n+=`
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
                            ${d(t.version||"v1.0.0")}
                        </span>
                        <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md border text-[10px] font-bold ${l.colorClass}">
                            <i class="fa-solid ${l.icon} text-[9px] ${l.iconColor}"></i> ${d(l.label)}
                        </span>
                        ${r?`
                        <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.25)] text-[9px] font-black uppercase tracking-wider">
                            <span class="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] animate-pulse"></span> Versi Terbaru
                        </span>`:""}
                    </div>
                    <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500 flex items-center gap-1">
                        <i class="fa-regular fa-calendar text-[10px]"></i> ${d(m)}
                    </span>
                </div>

                <h4 class="text-xs sm:text-sm font-extrabold text-slate-800 dark:text-white leading-snug mb-3">
                    ${d(t.title||"Pembaruan Sistem")}
                </h4>

                <ul class="space-y-2">
                    ${i}
                </ul>
            </div>
        </div>`}),a.innerHTML=n},$=a=>{h=a,document.querySelectorAll(".btn-changelog-filter").forEach(e=>{const s=e.getAttribute("data-category"),n=e.querySelector("i");s===a?(e.className="btn-changelog-filter shrink-0 whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold primary-bg text-white shadow-xs transition-all cursor-pointer border border-transparent",n&&(n.className=n.className.replace(/text-\[[^\]]+\]/g,"").trim()+" text-white")):(e.className="btn-changelog-filter shrink-0 whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold bg-white dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 transition-all cursor-pointer",n&&s!=="all"?n.className=n.className.replace(/\btext-white\b/g,"").trim()+" text-[var(--color-primary)]":n&&s==="all"&&(n.className=n.className.replace(/\btext-white\b/g,"").trim()+" text-slate-400"))}),te()},se=(a="all")=>{let e=p("changelog-modal");e||(e=document.createElement("div"),e.id="changelog-modal",e.className="fixed inset-0 z-[125] bg-slate-900/80 flex items-end sm:items-center justify-center p-0 sm:p-4 opacity-0 transition-opacity duration-300",e.onclick=t=>{t.target===e&&N()},e.innerHTML=`
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
        </div>`,document.body.appendChild(e));const s=X(c),n=p("changelog-header-ver");n&&(n.textContent=s),h=a,$(a),e.style.display!=="flex"&&O("changelog"),e.style.display="flex",e.offsetWidth,requestAnimationFrame(()=>{e.classList.remove("opacity-0");const t=p("changelog-modal-box");t&&t.classList.remove("translate-y-full","sm:translate-y-8")})},N=(a=!1)=>{const e=p("changelog-modal");if(!e||e.style.display==="none")return;const s=()=>{e.classList.add("opacity-0");const n=p("changelog-modal-box");n&&n.classList.add("translate-y-full","sm:translate-y-8"),setTimeout(()=>{e.style.display="none"},300)};typeof T=="function"?T("changelog",a,s):s()};window.openChangelogModal=se;window.closeChangelogModal=N;window.filterChangelog=$;export{X as a,A as c,I as g};

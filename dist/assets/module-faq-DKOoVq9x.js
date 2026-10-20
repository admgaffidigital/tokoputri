import{q as b,a as c,i as d,e as p,o as T,g as u,k as x,l as M,n as C,G as g,a1 as K,H as N,v as H,ai as O,r as j}from"./module-print-Cx8aJcU5.js";let P=null;const q=()=>{if(!P)try{P=b.collection("freshmart").doc("cms_data").collection("faqs").onSnapshot(e=>{e&&e.docs&&(c.faqs=e.docs.map(a=>({id:a.id,...a.data()}))),typeof window.curViewName<"u"&&window.curViewName==="view-faq"&&f(),window.isAdm&&typeof window.cTab<"u"&&window.cTab==="faqs"&&typeof window.rAdmFAQ=="function"&&window.rAdmFAQ()},e=>{console.warn("Sync sub-koleksi faqs dibatasi, menggunakan fallback cms_data.faqs:",e.message),typeof window.curViewName<"u"&&window.curViewName==="view-faq"&&f(),window.isAdm&&typeof window.cTab<"u"&&window.cTab==="faqs"&&typeof window.rAdmFAQ=="function"&&window.rAdmFAQ()})}catch{console.warn("Fallback sync Q&A dari cms_data aktif")}};let y="Semua";const f=()=>{q();const e=document.getElementById("storefront-faq-container"),a=document.getElementById("faq-category-pills");if(!e)return;const s=(c.faqs||[]).filter(n=>n.status==="published"),r=["Semua","Pemesanan","Pengiriman","Pembayaran","Garansi","Lainnya"];a&&(a.innerHTML=r.map(n=>`
            <button onclick="selectFAQCategory('${n}')" class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${y===n?"primary-bg text-white shadow-md":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100"}">
                ${n}
            </button>
        `).join(""));const t=(document.getElementById("faq-search-input")?.value||"").toLowerCase().trim(),o=s.filter(n=>{const l=y==="Semua"||n.category===y,m=!t||(n.question||"").toLowerCase().includes(t)||(n.answer||"").toLowerCase().includes(t);return l&&m});if(!o.length){e.innerHTML=`
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
    `).join("")},_=e=>{y=e,f()},G=()=>{f()},R=e=>{const a=document.getElementById(`faq-body-${e}`),s=document.getElementById(`faq-icon-${e}`);if(!a||!s)return;a.classList.contains("hidden")?(a.classList.remove("hidden"),s.classList.add("rotate-180")):(a.classList.add("hidden"),s.classList.remove("rotate-180"))},W=()=>{const e=p("modal-ask-question"),a=p("modal-ask-question-box");e&&(e.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("askQuestion"),T(e,a))},L=(e=!1)=>{const a=()=>{H("modal-ask-question","modal-ask-question-box")};typeof window.requestCloseModal=="function"?window.requestCloseModal("askQuestion",e,a):a()},U=async()=>{const e=(u("ask-author-name")||"").trim()||"Pelanggan",a=u("ask-category")||"Pemesanan",s=(u("ask-question-text")||"").trim();if(!s)return x("Tuliskan pertanyaan Anda terlebih dahulu!");M("Mengirim pertanyaan...");const r="faq-"+Date.now().toString(36),t={id:r,question:s,answer:"",category:a,authorName:e,status:"pending_answer",createdAt:new Date().toISOString()};let o=!1;try{await b.collection("freshmart").doc("cms_data").collection("faqs").doc(r).set(t),o=!0}catch(n){console.warn("Penulisan sub-koleksi faqs dibatasi, mencoba fallback cms_data.faqs:",n)}if(!o)try{const n=[t,...(c.faqs||[]).filter(l=>l.id!==r)];await b.collection("freshmart").doc("cms_data").set({faqs:n},{merge:!0}),c.faqs=n,o=!0}catch(n){console.warn("Fallback cms_data.faqs juga gagal:",n)}C(),o?(L(),g("ask-question-text",""),x("Pertanyaan terkirim! Admin akan menjawabnya segera."),f()):x("Gagal mengirim pertanyaan. Coba lagi!")};let k="all";const v=()=>{q();const e=c.faqs||[],a=e.filter(t=>k==="pending"?t.status==="pending_answer":k==="published"?t.status==="published":!0),s=e.filter(t=>t.status==="pending_answer").length;let r=`
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
                    Semua (${e.length})
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
    `;setH("admin-content",r)},z=e=>{k=e,v()},V=e=>{const a=(c.faqs||[]).find(t=>t.id===e)||{id:"",question:"",answer:"",category:"Pemesanan",authorName:"Admin",status:"published"};g("admin-faq-id",a.id),g("admin-faq-category",a.category||"Pemesanan"),g("admin-faq-author",a.authorName||"Admin"),g("admin-faq-question",a.question||""),g("admin-faq-answer",a.answer||""),g("admin-faq-status",a.status||"published"),K("admin-faq-modal-title",e?"Edit Q&A":"Tambah Q&A Baru");const s=p("modal-admin-faq"),r=p("modal-admin-faq-box");s&&(s.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("adminFAQ"),T(s,r))},D=(e=!1)=>{const a=()=>{H("modal-admin-faq","modal-admin-faq-box")};typeof window.requestCloseModal=="function"?window.requestCloseModal("adminFAQ",e,a):a()},J=async()=>{const e=u("admin-faq-id")||"faq-"+Date.now().toString(36),a=u("admin-faq-category"),s=(u("admin-faq-author")||"").trim()||"Admin",r=(u("admin-faq-question")||"").trim(),t=(u("admin-faq-answer")||"").trim();let o=u("admin-faq-status");if(!r)return x("Pertanyaan tidak boleh kosong!");t&&o==="pending_answer"&&(o="published"),M("Menyimpan Q&A...");const n={id:e,question:r,answer:t,category:a,authorName:s,status:o,updatedAt:new Date().toISOString()};let l=[...c.faqs||[]];const m=l.findIndex(i=>i.id===e);m>-1?l[m]={...l[m],...n}:l.unshift(n),c.faqs=l;try{await b.collection("freshmart").doc("cms_data").collection("faqs").doc(e).set(n,{merge:!0})}catch(i){console.warn("Gagal set ke sub-koleksi faqs:",i)}try{await b.collection("freshmart").doc("cms_data").set({faqs:l},{merge:!0})}catch(i){console.warn("Gagal update cms_data.faqs:",i)}C(),D(),x("Q&A Berhasil Disimpan!"),v()},X=e=>{N("Hapus Q&A","Yakin ingin menghapus pertanyaan ini?",async()=>{M("Menghapus Q&A...");let a=(c.faqs||[]).filter(s=>s.id!==e);c.faqs=a;try{await b.collection("freshmart").doc("cms_data").collection("faqs").doc(e).delete()}catch(s){console.warn("Gagal delete dari sub-koleksi faqs:",s)}try{await b.collection("freshmart").doc("cms_data").set({faqs:a},{merge:!0})}catch(s){console.warn("Gagal update cms_data.faqs:",s)}C(),x("Q&A Berhasil Dihapus!"),v()})};window.attachFAQRealtime=q;window.renderStorefrontFAQ=f;window.selectFAQCategory=_;window.filterStorefrontFAQ=G;window.toggleFAQAccordion=R;window.openAskQuestionModal=W;window.closeAskQuestionModal=L;window.submitCustomerQuestion=U;window.rAdmFAQ=v;window.setAdminFAQFilter=z;window.openFAQModal=V;window.closeAdminFAQModal=D;window.saveAdminFAQ=J;window.deleteAdminFAQ=X;const Y=5,B=[{id:"log-1-19-3",version:"v1.19.3",date:"2026-10-20",title:"Universal Harmony Engine: Penyelarasan Border Radius Tombol, Badge Anti-Wrap & Anti-Bloat, dan Konsistensi Wadah Ikon (Icon Pods)",category:"optimization",badge:"Universal UI Harmony & Consistency Engine v1.19.3",items:["Universal Badge Anti-Wrap & Anti-Bloat Engine: Menstandarkan seluruh badge status dan info pill di seluruh aplikasi (Pesanan, Supplier, Kulakan PO, Retur, dan Tempo) dengan white-space: nowrap !important, line-height: 1.15, max-height 26px, dan letter-spacing proporsional, mengeliminasi teks bertumpuk atau mekar menggembung secara tuntas.","Hierarki Border Radius Tombol Selaras: Mengunci seluruh tombol aksi ke sistem squircle terstandar: Tombol Utama/CTA/Submit (1rem / 16px), Tombol Sekunder/Filter Chiclet/Tab (0.75rem / 12px), Tombol Aksi Kompak (0.75rem / 12px), dan Micro Action/Drag Handle (0.5rem / 8px).","Standarisasi Wadah Ikon (Icon Pods): Menyelaraskan border radius seluruh wadah ikon berdasarkan dimensi (Large 56-64px ke 16px squircle, Medium 40-48px ke 14px, Compact/Stat 32-36px ke 12px, dan Small 24-28px ke 8px) dengan proteksi aspect-ratio 1:1 anti-gepeng.","Penyelarasan Proporsional Tombol Sinkronasi (Segarkan) & Widget Arus Kas: Menetralkan aspect-ratio paksaan pada tombol yang memiliki teks responsif (w-auto / aspect-auto) dan mengunci ukuran tombol header CMS (#btn-admin-refresh) di mobile ke 32x32px (1:1 squircle) serasi sempurna dengan tombol theme toggle dan tombol aksi lainnya, serta menyelaraskan ikon Segarkan arus kas dengan fa-arrows-rotate text-xs terpusat anti-gepeng.","Restrukturisasi Header POS Kasir Native Mobile App: Mengeliminasi kebocoran elemen desktop (Live Clock WIB, Badge Online, USB Scanner Aktif) pada layar HP (<xl) dengan proteksi display: none !important mutlak di CSS, menghadirkan tampilan header POS kasir yang 100% Native Mobile App: lapang, nama toko & kasir tampil utuh tanpa terpotong, serta tombol menu opsi kasir [ ⋮ ] dan antrean parkir tampil proporsional di sisi kanan.","Pemulihan Presisi Antarmuka POS Kasir: Mengembalikan placeholder asli kasir 'Cari nama, SKU, barcode... [F2]' lengkap dengan shortcut, teks tombol scan kamera 'Scan (F9)' pada tablet/desktop, dan menetralkan aspect-ratio tombol parkir antrean serta stepper kuantitas keranjang sehingga antarmuka POS kasir kembali 100% identik dengan aslinya.","Penyelarasan Template Modul CMS & Storefront: Merapikan seluruh template badge di orders.js, suppliers.js, purchases.js, table.js, tempo.js, dan index.html sehingga bebas dari inkonsistensi rounded-full jomplang.","Suite Unit Test Baru test-button-badge-icon-harmony.mjs (38 pengujian) dan test-pos-header-responsive.mjs (28 pengujian) 100% Passed dan terintegrasi otomatis ke audit kesehatan sistem.","Multi-Channel Distribution v1.19.3 (Android versionCode 11903)."]},{id:"log-1-19-2",version:"v1.19.2",date:"2026-10-20",title:"Smart Dual-Mode High-Contrast Solid Engine, Eliminasi Total Kebocoran Warna Putih Dark Mode & Widget Arus Kas Harian",category:"feature",badge:"Smart Dual-Mode & Daily Cash Flow Hub v1.19.2",items:["Eliminasi Kebocoran Warna Putih di Dark Mode: Mengunci seluruh aturan warna putih (.bg-white/*) khusus ke html:not(.dark) dan menegakkan solid dark slate (#1e293b / #0f172a) pada seluruh kartu KPI, tombol sekunder, dan kartu utama di modul Supplier, Katalog Produk, PO Kulakan, Retur, dan Modal, mengeliminasi tampilan belang-belang secara tuntas.","Widget Ringkasan Arus Kas Harian (Daily Cash Flow Hub): Menghadirkan 4 kartu bento likuiditas harian di Dashboard Utama CMS Owner (Kas Tunai Laci Hari Ini, Masuk Bank & QRIS Hari Ini, Pengeluaran Toko Hari Ini, dan Estimasi Arus Kas Bersih Masuk) dengan navigasi 1-klik dan proteksi privasi RBAC.","Penajaman Garis Pembatas (Border) & Divider: Mengunci hairline border kartu bento, panel CMS, modal, dan pembagi ke solid #cbd5e1 (Slate-300) di Light Mode dan #334155 di Dark Mode, menghadirkan batas elemen yang tegas, rapi, dan tidak kabur.","Penajaman Font, Teks Sekunder & Ikon: Mengoptimalkan seluruh teks sekunder ke #475569 (Slate-600) di Light Mode dan #94a3b8 / #cbd5e1 di Dark Mode, menjamin seluruh angka, label, dan subtitle terbaca tajam dan tidak samar.","Solid Fallback Anti-Transparansi & Anti White-on-White: Menyediakan pemetaan warna solid murni berbobot untuk seluruh elemen eks-gradasi, menjamin teks putih tidak hilang di atas latar terang.","Multi-Channel Distribution v1.19.2 (Android versionCode 11902)."]},{id:"log-1-19-1",version:"v1.19.1",date:"2026-10-20",title:"Eliminasi Total Gradient, Glassmorphism, Efek Kaca Lengkung & Shadow Tebal — 100% Solid Flat Clean UI Engine",category:"optimization",badge:"Universal 100% Solid Flat Clean Engine v1.19.1",items:["Desain 100% Solid, Flat & Clean: Mengeliminasi seluruh efek warna gradasi (linear, radial, conic gradient) dan class bg-gradient-to-* pada seluruh halaman etalase, menu navigasi, kartu bento, header, modal, hingga footer, bertransformasi ke warna solid murni yang tegas, tenang, dan nyaman di mata.","Eliminasi Glassmorphism & Efek Kaca Lengkung: Menghapus seluruh efek backdrop-filter blur kaca di header, navbar, drawer, dan modal. Menonaktifkan secara permanen efek kaca overlay bezel lengkung flagship (#flagship-edge-screen-overlay) untuk estetika flat minimalis modern.","Shadow Flat Hairline & Border Bersih: Menurunkan seluruh bayangan tebal (shadow-2xl, shadow-xl, shadow-lg) menjadi flat subtle shadow (shadow-xs) dengan pembatas hairline border rapi (1px solid #e2e8f0 / dark: #334155).","Universal Solid Clean Engine & Proteksi Struk Thermal: Menerapkan engine CSS otomatis di style.css dengan proteksi khusus garis barcode thermal repeating-linear-gradient pada struk nota POS agar tetap tercetak presisi dan tajam.","Multi-Channel Distribution v1.19.1 (Android versionCode 11901)."]},{id:"log-1-19-0",version:"v1.19.0",date:"2026-10-20",title:"Sistem HRD & Penggajian (Payroll) Terpadu, Multi-Role Staff, Presensi Kehadiran, Buku Kasbon, Slip Gaji Multi-Format & Beban Operasional",category:"feature",badge:"Integrated HRD, Payroll & Staff Compensation Engine v1.19.0",items:["Manajemen Staf & Multi-Role Terpadu: Struktur akun komprehensif untuk Pemilik Toko (Owner), Admin Operasional, Kasir POS, dan Staf Gudang/Logistik dengan ID Karyawan baku (EMP-xxx / OWN-001) dan kontrol hak akses granular 22 modul.","Gaji Direksi Setara dalam Sistem: Profil Pemilik Toko (Owner) menerima gaji resmi direksi yang terpisah dari dividen/laba toko, memastikan transparansi mutlak antara kompensasi kerja dan laba bersih usaha.","Buku Kasbon Karyawan & Skema Cicilan Fleksibel: Pengajuan kasbon pinjaman staf dengan skema sekali potong gaji atau cicilan multi-bulan (tenor), pelacakan sisa pinjaman otomatis, dan integrasi pengeluaran kas toko.","Absensi Shift & Presensi Harian: Pencatatan status kehadiran (Hadir, Terlambat, Izin, Sakit, Alpha), 1-klik hadirkan semua staf, integrasi otomatis saat kasir membuka shift POS, serta kalkulasi tunjangan kehadiran.","Mesin Penggajian (Payroll Engine) & Potongan Selisih Barang Hilang: Formula otomatis Take Home Pay memperhitungkan gaji pokok, tunjangan absensi, bonus/lembur, potongan angsuran kasbon, dan pemotongan selisih barang hilang/stock opname yang disesuaikan jabatan.","Multi-Format Slip Gaji Resmi: Generator cetak Dokumen A4 PDF resmi, struk thermal kasir 58mm/80mm, serta 1-klik kirim slip gaji via pesan WhatsApp ke nomor HP staf.","Integrasi Hulu-ke-Hilir ke Buku Kas Operasional (expenses.js): Setiap pembayaran gaji otomatis mencatat beban operasional kategori 'gaji' dan melunasi sisa kasbon staf, menyelaraskan laporan kas, laba rugi, dan perpajakan toko secara riil.","Multi-Channel Distribution v1.19.0 (Android versionCode 11900)."]},{id:"log-1-18-12",version:"v1.18.12",date:"2026-10-19",title:"Ekspor Brosur & Daftar Harga Cepat Kontraktor & Tukang (1-Klik PDF A4 & WhatsApp), Live Counter & Format Grosir",category:"feature",badge:"Contractor Price List & Instant Catalog Generator v1.18.12",items:["Generator Brosur & Daftar Harga Resmi (PDF A4 Multi-Halaman): Mengintegrasikan engine cetak A4 presisi di src/modules/print/documents.js lengkap dengan kop surat toko, logo resmi, alamat, kontak WhatsApp, nomor dokumen PL-YYYYMMDD-XXXX, masa berlaku estimasi, pembagian kategori rapi, kolom harga grosir/proyek, multi-varian, status ketersediaan, dan tanda tangan verifikasi.","Salin Format WhatsApp 1-Klik untuk Kontraktor & Tukang: Menghasilkan format pesan WhatsApp terstruktur, ringkas, dan sangat informatif mencakup nama material, satuan, harga eceran, tier grosir, ketersediaan stok, dan tautan pemesanan proyek langsung ke chat WhatsApp toko.","Modal Konfigurasi Fleksibel & Native Bottom Sheet: Menyediakan filter kategori dinamis, kata kunci pencarian, sakelar opsi varian, kolom grosir, status stok, dan live counter pill dengan standar antarmuka Native Bottom Sheet (rounded-t-[2rem] sm:rounded-3xl, pull-indicator pill, dan touch target 44px).","Eliminasi Popstate Race Condition & Stabilitas Preview PDF A4: Menerapkan engine replaceModalHistory di router.js yang mentransisikan state modal secara deterministik dan mengeliminasi tabrakan history.back(), menjamin lembar preview dokumen A4 langsung muncul seketika tanpa tertutup kembali.","Integrasi Toolbar Produk Admin & Universal Router: Menambahkan tombol 'Daftar Harga' berdampingan dengan Stock Opname di toolbar admin produk, terdaftar penuh pada MODAL_ELEMENT_MAP, closeModalByName, allKnownModals, dan gesture engine swipe dismiss.","Multi-Channel Distribution v1.18.12 (Android versionCode 11812)."]}],Q=e=>{if(!e)return[0,0,0];const a=String(e).match(/(\d+)\.(\d+)\.(\d+)/);return a?[parseInt(a[1],10),parseInt(a[2],10),parseInt(a[3],10)]:[0,0,0]},A=(e,a)=>{const[s,r,t]=Q(e),[o,n,l]=Q(a);return o!==s?o-s:n!==r?n-r:l-t},$=(e,a=Y)=>{const s=e&&Array.isArray(e.changelog)?e.changelog:[],r=new Set(e&&Array.isArray(e.deletedChangelogIds)?e.deletedChangelogIds:[]),t=new Set(s.map(i=>i.id||i.version)),o=B.filter(i=>!t.has(i.id)&&!t.has(i.version)&&!r.has(i.id)&&!r.has(i.version)),m=[...s.filter(i=>!r.has(i.id)&&!r.has(i.version)),...o].sort((i,w)=>{const S=new Date(i.date||"2026-01-01").getTime(),F=new Date(w.date||"2026-01-01").getTime();return F!==S?F-S:A(i.version,w.version)});return typeof a=="number"&&a>0?m.slice(0,a):m},Z=e=>{const a=B[0]?.version||"v1.19.3",s=$(e,null);if(!s||s.length===0)return a;let r=s[0].version||a;for(const t of s)t.version&&A(t.version,r)<0&&(r=t.version);return A(a,r)<0&&(r=a),r};let h="all";const aa=e=>{if(!e)return"";try{const a=e.split("-");return a.length===3?new Date(parseInt(a[0]),parseInt(a[1])-1,parseInt(a[2])).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):e}catch{return e}},ea=e=>{switch(e){case"feature":return{label:"Fitur Baru",icon:"fa-rocket",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};case"optimization":return{label:"Optimasi",icon:"fa-bolt-lightning",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};case"maintenance":return{label:"Maintenance",icon:"fa-wrench",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};case"security":return{label:"Keamanan",icon:"fa-shield-halved",colorClass:"bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 border-red-200/80 dark:border-red-800/60",iconColor:"text-red-500 dark:text-red-400"};case"bugfix":return{label:"Perbaikan",icon:"fa-bug-slash",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};default:return{label:"Update",icon:"fa-tag",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"}}},ta=()=>{const e=p("changelog-items-container");if(!e)return;const a=$(c),s=h==="all"?a:a.filter(t=>t.category===h);if(s.length===0){e.innerHTML=`
        <div class="flex flex-col items-center justify-center py-12 text-center text-slate-400">
            <div class="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-2xl mb-3">
                <i class="fa-solid fa-clipboard-list opacity-60"></i>
            </div>
            <p class="text-xs font-bold text-slate-600 dark:text-slate-300">Belum ada catatan pada kategori ini</p>
            <p class="text-[10px] text-slate-400 mt-0.5">Pilih filter kategori lain di atas</p>
        </div>`;return}let r="";s.forEach((t,o)=>{const n=o===0&&h==="all",l=ea(t.category),m=aa(t.date),i=(t.items||[]).map(w=>`
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
        </div>`}),e.innerHTML=r},I=e=>{h=e,document.querySelectorAll(".btn-changelog-filter").forEach(a=>{const s=a.getAttribute("data-category"),r=a.querySelector("i");s===e?(a.className="btn-changelog-filter shrink-0 whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold primary-bg text-white shadow-xs transition-all cursor-pointer border border-transparent",r&&(r.className=r.className.replace(/text-\[[^\]]+\]/g,"").trim()+" text-white")):(a.className="btn-changelog-filter shrink-0 whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold bg-white dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 transition-all cursor-pointer",r&&s!=="all"?r.className=r.className.replace(/\btext-white\b/g,"").trim()+" text-[var(--color-primary)]":r&&s==="all"&&(r.className=r.className.replace(/\btext-white\b/g,"").trim()+" text-slate-400"))}),ta()},sa=(e="all")=>{let a=p("changelog-modal");a||(a=document.createElement("div"),a.id="changelog-modal",a.className="fixed inset-0 z-[125] bg-slate-900/80 flex items-end sm:items-center justify-center p-0 sm:p-4 opacity-0 transition-opacity duration-300",a.onclick=t=>{t.target===a&&E()},a.innerHTML=`
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
        </div>`,document.body.appendChild(a));const s=Z(c),r=p("changelog-header-ver");r&&(r.textContent=s),h=e,I(e),a.style.display!=="flex"&&O("changelog"),a.style.display="flex",a.offsetWidth,requestAnimationFrame(()=>{a.classList.remove("opacity-0");const t=p("changelog-modal-box");t&&t.classList.remove("translate-y-full","sm:translate-y-8")})},E=(e=!1)=>{const a=p("changelog-modal");if(!a||a.style.display==="none")return;const s=()=>{a.classList.add("opacity-0");const r=p("changelog-modal-box");r&&r.classList.add("translate-y-full","sm:translate-y-8"),setTimeout(()=>{a.style.display="none"},300)};typeof j=="function"?j("changelog",e,s):s()};window.openChangelogModal=sa;window.closeChangelogModal=E;window.filterChangelog=I;export{Z as a,A as c,$ as g};

import{q as b,a as c,i as d,e as p,o as j,g as u,k as x,l as M,n as q,G as g,a1 as E,H as K,v as L,ai as _,r as Q}from"./module-print-CwfHaLsv.js";let T=null;const C=()=>{if(!T)try{T=b.collection("freshmart").doc("cms_data").collection("faqs").onSnapshot(a=>{a&&a.docs&&(c.faqs=a.docs.map(e=>({id:e.id,...e.data()}))),typeof window.curViewName<"u"&&window.curViewName==="view-faq"&&k(),window.isAdm&&typeof window.cTab<"u"&&window.cTab==="faqs"&&typeof window.rAdmFAQ=="function"&&window.rAdmFAQ()},a=>{console.warn("Sync sub-koleksi faqs dibatasi, menggunakan fallback cms_data.faqs:",a.message),typeof window.curViewName<"u"&&window.curViewName==="view-faq"&&k(),window.isAdm&&typeof window.cTab<"u"&&window.cTab==="faqs"&&typeof window.rAdmFAQ=="function"&&window.rAdmFAQ()})}catch{console.warn("Fallback sync Q&A dari cms_data aktif")}};let y="Semua";const k=()=>{C();const a=document.getElementById("storefront-faq-container"),e=document.getElementById("faq-category-pills");if(!a)return;const s=(c.faqs||[]).filter(n=>n.status==="published"),r=["Semua","Pemesanan","Pengiriman","Pembayaran","Garansi","Lainnya"];e&&(e.innerHTML=r.map(n=>`
            <button onclick="selectFAQCategory('${n}')" class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${y===n?"primary-bg text-white shadow-md":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100"}">
                ${n}
            </button>
        `).join(""));const t=(document.getElementById("faq-search-input")?.value||"").toLowerCase().trim(),o=s.filter(n=>{const l=y==="Semua"||n.category===y,m=!t||(n.question||"").toLowerCase().includes(t)||(n.answer||"").toLowerCase().includes(t);return l&&m});if(!o.length){a.innerHTML=`
            <div class="text-center py-12 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
                <div class="w-16 h-16 rounded-full primary-bg-soft primary-text mx-auto flex items-center justify-center mb-3">
                    <i class="fa-solid fa-circle-question text-3xl"></i>
                </div>
                <h3 class="font-bold text-slate-800 dark:text-white text-base">Belum Ada Q&A Ditemukan</h3>
                <p class="text-xs text-slate-500 mt-1 max-w-sm mx-auto">Punya pertanyaan lain? Silakan gunakan tombol <b>Ajukan Pertanyaan</b> untuk bertanya ke admin.</p>
                <button onclick="openAskQuestionModal()" class="mt-4 primary-bg text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-md active:scale-95 transition-all">Ajukan Pertanyaan Sekarang</button>
            </div>
        `;return}a.innerHTML=o.map(n=>`
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
    `).join("")},G=a=>{y=a,k()},O=()=>{k()},W=a=>{const e=document.getElementById(`faq-body-${a}`),s=document.getElementById(`faq-icon-${a}`);if(!e||!s)return;e.classList.contains("hidden")?(e.classList.remove("hidden"),s.classList.add("rotate-180")):(e.classList.add("hidden"),s.classList.remove("rotate-180"))},R=()=>{const a=p("modal-ask-question"),e=p("modal-ask-question-box");a&&(a.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("askQuestion"),j(a,e))},D=(a=!1)=>{const e=()=>{L("modal-ask-question","modal-ask-question-box")};typeof window.requestCloseModal=="function"?window.requestCloseModal("askQuestion",a,e):e()},V=async()=>{const a=(u("ask-author-name")||"").trim()||"Pelanggan",e=u("ask-category")||"Pemesanan",s=(u("ask-question-text")||"").trim();if(!s)return x("Tuliskan pertanyaan Anda terlebih dahulu!");M("Mengirim pertanyaan...");const r="faq-"+Date.now().toString(36),t={id:r,question:s,answer:"",category:e,authorName:a,status:"pending_answer",createdAt:new Date().toISOString()};let o=!1;try{await b.collection("freshmart").doc("cms_data").collection("faqs").doc(r).set(t),o=!0}catch(n){console.warn("Penulisan sub-koleksi faqs dibatasi, mencoba fallback cms_data.faqs:",n)}if(!o)try{const n=[t,...(c.faqs||[]).filter(l=>l.id!==r)];await b.collection("freshmart").doc("cms_data").set({faqs:n},{merge:!0}),c.faqs=n,o=!0}catch(n){console.warn("Fallback cms_data.faqs juga gagal:",n)}q(),o?(D(),g("ask-question-text",""),x("Pertanyaan terkirim! Admin akan menjawabnya segera."),k()):x("Gagal mengirim pertanyaan. Coba lagi!")};let f="all";const v=()=>{C();const a=c.faqs||[],e=a.filter(t=>f==="pending"?t.status==="pending_answer":f==="published"?t.status==="published":!0),s=a.filter(t=>t.status==="pending_answer").length;let r=`
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
                <button onclick="setAdminFAQFilter('all')" class="shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${f==="all"?"primary-bg text-white shadow-md":"bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"}">
                    Semua (${a.length})
                </button>
                <button onclick="setAdminFAQFilter('pending')" class="shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${f==="pending"?"primary-bg text-white shadow-md":"bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"}">
                    <span>Belum Dijawab</span>
                    ${s>0?`<span class="bg-rose-500 text-white text-[9px] px-1.5 py-0.5 rounded-full font-bold">${s}</span>`:""}
                </button>
                <button onclick="setAdminFAQFilter('published')" class="shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${f==="published"?"primary-bg text-white shadow-md":"bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"}">
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
    `;setH("admin-content",r)},J=a=>{f=a,v()},U=a=>{const e=(c.faqs||[]).find(t=>t.id===a)||{id:"",question:"",answer:"",category:"Pemesanan",authorName:"Admin",status:"published"};g("admin-faq-id",e.id),g("admin-faq-category",e.category||"Pemesanan"),g("admin-faq-author",e.authorName||"Admin"),g("admin-faq-question",e.question||""),g("admin-faq-answer",e.answer||""),g("admin-faq-status",e.status||"published"),E("admin-faq-modal-title",a?"Edit Q&A":"Tambah Q&A Baru");const s=p("modal-admin-faq"),r=p("modal-admin-faq-box");s&&(s.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("adminFAQ"),j(s,r))},$=(a=!1)=>{const e=()=>{L("modal-admin-faq","modal-admin-faq-box")};typeof window.requestCloseModal=="function"?window.requestCloseModal("adminFAQ",a,e):e()},z=async()=>{const a=u("admin-faq-id")||"faq-"+Date.now().toString(36),e=u("admin-faq-category"),s=(u("admin-faq-author")||"").trim()||"Admin",r=(u("admin-faq-question")||"").trim(),t=(u("admin-faq-answer")||"").trim();let o=u("admin-faq-status");if(!r)return x("Pertanyaan tidak boleh kosong!");t&&o==="pending_answer"&&(o="published"),M("Menyimpan Q&A...");const n={id:a,question:r,answer:t,category:e,authorName:s,status:o,updatedAt:new Date().toISOString()};let l=[...c.faqs||[]];const m=l.findIndex(i=>i.id===a);m>-1?l[m]={...l[m],...n}:l.unshift(n),c.faqs=l;try{await b.collection("freshmart").doc("cms_data").collection("faqs").doc(a).set(n,{merge:!0})}catch(i){console.warn("Gagal set ke sub-koleksi faqs:",i)}try{await b.collection("freshmart").doc("cms_data").set({faqs:l},{merge:!0})}catch(i){console.warn("Gagal update cms_data.faqs:",i)}q(),$(),x("Q&A Berhasil Disimpan!"),v()},X=a=>{K("Hapus Q&A","Yakin ingin menghapus pertanyaan ini?",async()=>{M("Menghapus Q&A...");let e=(c.faqs||[]).filter(s=>s.id!==a);c.faqs=e;try{await b.collection("freshmart").doc("cms_data").collection("faqs").doc(a).delete()}catch(s){console.warn("Gagal delete dari sub-koleksi faqs:",s)}try{await b.collection("freshmart").doc("cms_data").set({faqs:e},{merge:!0})}catch(s){console.warn("Gagal update cms_data.faqs:",s)}q(),x("Q&A Berhasil Dihapus!"),v()})};window.attachFAQRealtime=C;window.renderStorefrontFAQ=k;window.selectFAQCategory=G;window.filterStorefrontFAQ=O;window.toggleFAQAccordion=W;window.openAskQuestionModal=R;window.closeAskQuestionModal=D;window.submitCustomerQuestion=V;window.rAdmFAQ=v;window.setAdminFAQFilter=J;window.openFAQModal=U;window.closeAdminFAQModal=$;window.saveAdminFAQ=z;window.deleteAdminFAQ=X;const Y=5,N=[{id:"log-1-18-12",version:"v1.18.12",date:"2026-10-19",title:"Ekspor Brosur & Daftar Harga Cepat Kontraktor & Tukang (1-Klik PDF A4 & WhatsApp), Live Counter & Format Grosir",category:"feature",badge:"Contractor Price List & Instant Catalog Generator v1.18.12",items:["Generator Brosur & Daftar Harga Resmi (PDF A4 Multi-Halaman): Mengintegrasikan engine cetak A4 presisi di src/modules/print/documents.js lengkap dengan kop surat toko, logo resmi, alamat, kontak WhatsApp, nomor dokumen PL-YYYYMMDD-XXXX, masa berlaku estimasi, pembagian kategori rapi, kolom harga grosir/proyek, multi-varian, status ketersediaan, dan tanda tangan verifikasi.","Salin Format WhatsApp 1-Klik untuk Kontraktor & Tukang: Menghasilkan format pesan WhatsApp terstruktur, ringkas, dan sangat informatif mencakup nama material, satuan, harga eceran, tier grosir, ketersediaan stok, dan tautan pemesanan proyek langsung ke chat WhatsApp toko.","Modal Konfigurasi Fleksibel & Native Bottom Sheet: Menyediakan filter kategori dinamis, kata kunci pencarian, sakelar opsi varian, kolom grosir, status stok, dan live counter pill dengan standar antarmuka Native Bottom Sheet (rounded-t-[2rem] sm:rounded-3xl, pull-indicator pill, dan touch target 44px).","Eliminasi Popstate Race Condition & Stabilitas Preview PDF A4: Menerapkan engine replaceModalHistory di router.js yang mentransisikan state modal secara deterministik dan mengeliminasi tabrakan history.back(), menjamin lembar preview dokumen A4 langsung muncul seketika tanpa tertutup kembali.","Integrasi Toolbar Produk Admin & Universal Router: Menambahkan tombol 'Daftar Harga' berdampingan dengan Stock Opname di toolbar admin produk, terdaftar penuh pada MODAL_ELEMENT_MAP, closeModalByName, allKnownModals, dan gesture engine swipe dismiss.","Multi-Channel Distribution v1.18.12 (Android versionCode 11812)."]},{id:"log-1-18-11",version:"v1.18.11",date:"2026-10-19",title:"Audit Komprehensif Sistem, Resolusi Floating-Point Stok Habis, Multi-Unit Keranjang, Dialog Konfirmasi & Presisi GPS",category:"feature",badge:"System Audit & Core Logic Resolution v1.18.11",items:["Resolusi Dialog Konfirmasi & Modals Proxy: Menyempurnakan showConfirm(...args) di src/core/utils.js untuk meneruskan seluruh 5 parameter secara utuh tanpa pemotongan argumen, menjamin tombol konfirmasi aksi aman (isDanger = false) di retur barang dan master preset tetap beraksen warna tema toko primer tanpa keliru berubah merah.","Proteksi Floating-Point Stok Depleted & Auto-Deactivate: Menghilangkan residu desimal pada transaksi checkout dan terminal kasir POS dengan batas toleransi stok <= 0.0001 dipatok ke 0, memastikan produk dan varian yang terjual habis otomatis dinonaktifkan secara tepat waktu.","Validasi Multi-Unit Multiplier Keranjang Belanja: Mengintegrasikan faktor pengali kemasan ci.unitMultiplier pada setCQty dan updCQty, menyelaraskan kuantitas maksimum kemasan (Dus/Karton/Lusin) dengan ketersediaan stok fisik riil di gudang toko.","Presisi Kalkulasi Jarak GPS Khatulistiwa: Memperbaiki parser koordinat Haversine getDist di src/core/pricing.js dengan validasi isNaN(parseFloat), menjamin titik koordinat lintang 0 (Pontianak / khatulistiwa) terkalkulasi secara akurat tanpa terpotong menjadi 0 km.","Multi-Channel Distribution v1.18.11 (Android versionCode 11811)."]},{id:"log-1-18-10",version:"v1.18.10",date:"2026-10-19",title:"Standarisasi Universal Native Bottom Sheet Seluruh Modal CMS & Storefront, Theme Gradient Harmony & Integrasi Swipe Gesture",category:"feature",badge:"Universal Native Bottom Sheet & Gesture Harmony v1.18.10",items:["Transformasi Menyeluruh Modal CMS & Storefront Native Bottom Sheet: Menyempurnakan Form Master Data (#admin-modal), Detail Pesanan Admin (#admin-order-modal), Pengaturan Printer POS (#printer-settings-modal), Tanya Admin (#modal-ask-question), Editor Q&A FAQ (#modal-admin-faq), Kartu Member Digital (#member-modal), dan Rincian Pesanan Pelanggan (#order-detail-modal) mengadopsi arsitektur modal-bottom-sheet responsif dengan drag pull-indicator pill, squircle radius rounded-t-[2rem] sm:rounded-3xl, dan safe area bottom inset padding.","Harmonisasi Penuh Tema Toko Dinamis (Theme Gradient Header): Menerapkan header bergradasi halus bertema var(--color-primary) dan aksen ikon toko pada seluruh modal, menghilangkan kesan kaku desktop dan menyatukan estetika visual premium di smartphone maupun desktop.","Integrasi Native Swipe-Down to Dismiss Gesture Engine: Mendaftarkan seluruh modal CMS ke closeModalById pada core gesture engine native-mobile.js dengan isolasi interaktif guard sehingga modal dapat ditutup dengan usapan jari ke bawah yang mulus tanpa mengganggu scrolling tabel dan input form.","Standardisasi Touch Target & Form Inputs: Mengunci seluruh kolom input, dropdown select, dan tombol aksi modal pada tinggi proporsional min-h-[44px] dengan font 16px di mobile anti auto-zoom/mental Chromium.","Multi-Channel Distribution v1.18.10 (Android versionCode 11810)."]},{id:"log-1-18-09",version:"v1.18.9",date:"2026-10-19",title:"Redesain Modal Flash Sale Full Native App Bottom Sheet, Penyelarasan Tema Dinamis & Eliminasi Total Kebocoran Layout",category:"feature",badge:"Native App Flash Sale & Theme Harmony v1.18.9",items:["Redesain Modal Pembuat Sesi Flash Sale Native App Bottom Sheet: Mengganti tampilan modal kaku klasik dengan arsitektur modal-bottom-sheet responsif (docked di bagian bawah pada smartphone dengan pull-indicator drag handle bar, dan centered modal elegan di layar tablet/desktop) terintegrasi dengan gesture engine swipe-down to dismiss.","Penyelarasan Total Tema Toko Dinamis (Theme Harmony): Menerapkan CSS custom property var(--color-primary) dan var(--color-primary-dark) secara konsisten pada header modal, tombol aksi utama, chip preset durasi jam (+3J, +6J, 24J, 48J), serta styling khusus kontras tinggi pada kolom input Harga Kilat bertema toko.","Eliminasi Kebocoran Layout & Anti Teks Terpotong: Restrukturisasi tata letak baris 'Daftar Barang Flash Sale' menjadi responsif (flex-col di mobile, sm:flex-row di desktop) dan proteksi overflow-x-hidden, melenyapkan total kendala tombol '+ Tambah Produk' terpotong di tepi kanan layar dan scrollbar horizontal liar di smartphone.","Bento Island Empty State & Form Input Touch Target 44px: Menggantikan kotak border-dashed abu-abu datar dengan kartu Bento Empty State interaktif beraksen petir tema toko, serta standardisasi kolom input form dan dropdown select berukuran touch target proporsional (min-h-[44px], font 16px mobile anti-auto-zoom).","Multi-Channel Distribution v1.18.9 (Android versionCode 11809)."]},{id:"log-1-18-08",version:"v1.18.8",date:"2026-10-19",title:"Arsitektur Offline PWA Service Worker, Fluid Native View Transitions, Layout Tablet POS Kasir & Screen WakeLock",category:"feature",badge:"Offline PWA, View Transitions & POS Tablet v1.18.8",items:["Enterprise Offline PWA Service Worker Engine: Implementasi public/sw.js modern dengan strategi caching komprehensif (Network-First dengan 3s timeout & cache fallback untuk navigasi HTML, Stale-While-Revalidate untuk aset statis JS/CSS/WebP, Cache-First untuk Google Fonts & FontAwesome, auto-purge cache lama, dan pengecualian Firestore API) yang memungkinkan aplikasi dibuka dan berfungsi 100% offline seketika (0ms latency).","PWA 1-Click Install Prompt Capture: Menangkap event beforeinstallprompt pada index.html dan menyediakan handler native window.promptPWAInstall() untuk pengalaman instalasi PWA mulus di Android, Chrome, Edge, dan iOS.","Fluid Native View Transitions Engine: Transisi layar antar-view berbasis GPU hardware acceleration (translate3d, will-change, scale 0.985 -> 1.0) dengan deteksi arah navigasi maju (viewEnterForward) dan mundur (viewEnterBackward) serta transisi modal scale lift, dilengkapi pematuhan preferensi aksesibilitas prefers-reduced-motion.","Ergonomi Antarmuka Tablet POS Kasir (Split Workspace): Mengaktifkan tata letak split-screen side-by-side (katalog barang 58% + keranjang belanja 42%) secara langsung pada layar tablet (iPad, Galaxy Tab, dsb. >= 768px), membebaskan kasir dari keharusan membuka drawer berulang kali.","Screen WakeLock API Controller: Menjaga layar tablet dan smartphone kasir tetap menyala (anti-sleep) secara otomatis saat terminal POS Kasir aktif dan melepaskan lock saat keluar, menjamin kelancaran antrean kasir tanpa gangguan layar mati.","Multi-Channel Distribution v1.18.8 (Android versionCode 11808)."]}],P=a=>{if(!a)return[0,0,0];const e=String(a).match(/(\d+)\.(\d+)\.(\d+)/);return e?[parseInt(e[1],10),parseInt(e[2],10),parseInt(e[3],10)]:[0,0,0]},A=(a,e)=>{const[s,r,t]=P(a),[o,n,l]=P(e);return o!==s?o-s:n!==r?n-r:l-t},H=(a,e=Y)=>{const s=a&&Array.isArray(a.changelog)?a.changelog:[],r=new Set(a&&Array.isArray(a.deletedChangelogIds)?a.deletedChangelogIds:[]),t=new Set(s.map(i=>i.id||i.version)),o=N.filter(i=>!t.has(i.id)&&!t.has(i.version)&&!r.has(i.id)&&!r.has(i.version)),m=[...s.filter(i=>!r.has(i.id)&&!r.has(i.version)),...o].sort((i,w)=>{const F=new Date(i.date||"2026-01-01").getTime(),S=new Date(w.date||"2026-01-01").getTime();return S!==F?S-F:A(i.version,w.version)});return typeof e=="number"&&e>0?m.slice(0,e):m},Z=a=>{const e=N[0]?.version||"v1.18.10",s=H(a,null);if(!s||s.length===0)return e;let r=s[0].version||e;for(const t of s)t.version&&A(t.version,r)<0&&(r=t.version);return A(e,r)<0&&(r=e),r};let h="all";const ee=a=>{if(!a)return"";try{const e=a.split("-");return e.length===3?new Date(parseInt(e[0]),parseInt(e[1])-1,parseInt(e[2])).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):a}catch{return a}},ae=a=>{switch(a){case"feature":return{label:"Fitur Baru",icon:"fa-rocket",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};case"optimization":return{label:"Optimasi",icon:"fa-bolt-lightning",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};case"maintenance":return{label:"Maintenance",icon:"fa-wrench",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};case"security":return{label:"Keamanan",icon:"fa-shield-halved",colorClass:"bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 border-red-200/80 dark:border-red-800/60",iconColor:"text-red-500 dark:text-red-400"};case"bugfix":return{label:"Perbaikan",icon:"fa-bug-slash",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};default:return{label:"Update",icon:"fa-tag",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"}}},te=()=>{const a=p("changelog-items-container");if(!a)return;const e=H(c),s=h==="all"?e:e.filter(t=>t.category===h);if(s.length===0){a.innerHTML=`
        <div class="flex flex-col items-center justify-center py-12 text-center text-slate-400">
            <div class="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-2xl mb-3">
                <i class="fa-solid fa-clipboard-list opacity-60"></i>
            </div>
            <p class="text-xs font-bold text-slate-600 dark:text-slate-300">Belum ada catatan pada kategori ini</p>
            <p class="text-[10px] text-slate-400 mt-0.5">Pilih filter kategori lain di atas</p>
        </div>`;return}let r="";s.forEach((t,o)=>{const n=o===0&&h==="all",l=ae(t.category),m=ee(t.date),i=(t.items||[]).map(w=>`
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
        </div>`}),a.innerHTML=r},I=a=>{h=a,document.querySelectorAll(".btn-changelog-filter").forEach(e=>{const s=e.getAttribute("data-category"),r=e.querySelector("i");s===a?(e.className="btn-changelog-filter shrink-0 whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold primary-bg text-white shadow-xs transition-all cursor-pointer border border-transparent",r&&(r.className=r.className.replace(/text-\[[^\]]+\]/g,"").trim()+" text-white")):(e.className="btn-changelog-filter shrink-0 whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold bg-white dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 transition-all cursor-pointer",r&&s!=="all"?r.className=r.className.replace(/\btext-white\b/g,"").trim()+" text-[var(--color-primary)]":r&&s==="all"&&(r.className=r.className.replace(/\btext-white\b/g,"").trim()+" text-slate-400"))}),te()},se=(a="all")=>{let e=p("changelog-modal");e||(e=document.createElement("div"),e.id="changelog-modal",e.className="fixed inset-0 z-[125] bg-slate-900/80 flex items-end sm:items-center justify-center p-0 sm:p-4 opacity-0 transition-opacity duration-300",e.onclick=t=>{t.target===e&&B()},e.innerHTML=`
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
        </div>`,document.body.appendChild(e));const s=Z(c),r=p("changelog-header-ver");r&&(r.textContent=s),h=a,I(a),e.style.display!=="flex"&&_("changelog"),e.style.display="flex",e.offsetWidth,requestAnimationFrame(()=>{e.classList.remove("opacity-0");const t=p("changelog-modal-box");t&&t.classList.remove("translate-y-full","sm:translate-y-8")})},B=(a=!1)=>{const e=p("changelog-modal");if(!e||e.style.display==="none")return;const s=()=>{e.classList.add("opacity-0");const r=p("changelog-modal-box");r&&r.classList.add("translate-y-full","sm:translate-y-8"),setTimeout(()=>{e.style.display="none"},300)};typeof Q=="function"?Q("changelog",a,s):s()};window.openChangelogModal=se;window.closeChangelogModal=B;window.filterChangelog=I;export{Z as a,A as c,H as g};

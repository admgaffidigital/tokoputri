import{q as b,a as c,i as d,e as u,o as T,g as p,k as x,l as M,n as C,G as g,a1 as K,H as E,v as L,ag as R,r as F}from"./module-print-6CTOdbhx.js";let Q=null;const q=()=>{if(!Q)try{Q=b.collection("freshmart").doc("cms_data").collection("faqs").onSnapshot(e=>{e&&e.docs&&(c.faqs=e.docs.map(a=>({id:a.id,...a.data()}))),typeof window.curViewName<"u"&&window.curViewName==="view-faq"&&f(),window.isAdm&&typeof window.cTab<"u"&&window.cTab==="faqs"&&typeof window.rAdmFAQ=="function"&&window.rAdmFAQ()},e=>{console.warn("Sync sub-koleksi faqs dibatasi, menggunakan fallback cms_data.faqs:",e.message),typeof window.curViewName<"u"&&window.curViewName==="view-faq"&&f(),window.isAdm&&typeof window.cTab<"u"&&window.cTab==="faqs"&&typeof window.rAdmFAQ=="function"&&window.rAdmFAQ()})}catch{console.warn("Fallback sync Q&A dari cms_data aktif")}};let y="Semua";const f=()=>{q();const e=document.getElementById("storefront-faq-container"),a=document.getElementById("faq-category-pills");if(!e)return;const s=(c.faqs||[]).filter(n=>n.status==="published"),r=["Semua","Pemesanan","Pengiriman","Pembayaran","Garansi","Lainnya"];a&&(a.innerHTML=r.map(n=>`
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
    `).join("")},_=e=>{y=e,f()},V=()=>{f()},G=e=>{const a=document.getElementById(`faq-body-${e}`),s=document.getElementById(`faq-icon-${e}`);if(!a||!s)return;a.classList.contains("hidden")?(a.classList.remove("hidden"),s.classList.add("rotate-180")):(a.classList.add("hidden"),s.classList.remove("rotate-180"))},U=()=>{const e=u("modal-ask-question"),a=u("modal-ask-question-box");e&&(e.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("askQuestion"),T(e,a))},H=(e=!1)=>{const a=()=>{L("modal-ask-question","modal-ask-question-box")};typeof window.requestCloseModal=="function"?window.requestCloseModal("askQuestion",e,a):a()},z=async()=>{const e=(p("ask-author-name")||"").trim()||"Pelanggan",a=p("ask-category")||"Pemesanan",s=(p("ask-question-text")||"").trim();if(!s)return x("Tuliskan pertanyaan Anda terlebih dahulu!");M("Mengirim pertanyaan...");const r="faq-"+Date.now().toString(36),t={id:r,question:s,answer:"",category:a,authorName:e,status:"pending_answer",createdAt:new Date().toISOString()};let o=!1;try{await b.collection("freshmart").doc("cms_data").collection("faqs").doc(r).set(t),o=!0}catch(n){console.warn("Penulisan sub-koleksi faqs dibatasi, mencoba fallback cms_data.faqs:",n)}if(!o)try{const n=[t,...(c.faqs||[]).filter(l=>l.id!==r)];await b.collection("freshmart").doc("cms_data").set({faqs:n},{merge:!0}),c.faqs=n,o=!0}catch(n){console.warn("Fallback cms_data.faqs juga gagal:",n)}C(),o?(H(),g("ask-question-text",""),x("Pertanyaan terkirim! Admin akan menjawabnya segera."),f()):x("Gagal mengirim pertanyaan. Coba lagi!")};let k="all";const v=()=>{q();const e=c.faqs||[],a=e.filter(t=>k==="pending"?t.status==="pending_answer":k==="published"?t.status==="published":!0),s=e.filter(t=>t.status==="pending_answer").length;let r=`
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
    `;setH("admin-content",r)},O=e=>{k=e,v()},W=e=>{const a=(c.faqs||[]).find(t=>t.id===e)||{id:"",question:"",answer:"",category:"Pemesanan",authorName:"Admin",status:"published"};g("admin-faq-id",a.id),g("admin-faq-category",a.category||"Pemesanan"),g("admin-faq-author",a.authorName||"Admin"),g("admin-faq-question",a.question||""),g("admin-faq-answer",a.answer||""),g("admin-faq-status",a.status||"published"),K("admin-faq-modal-title",e?"Edit Q&A":"Tambah Q&A Baru");const s=u("modal-admin-faq"),r=u("modal-admin-faq-box");s&&(s.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("adminFAQ"),T(s,r))},$=(e=!1)=>{const a=()=>{L("modal-admin-faq","modal-admin-faq-box")};typeof window.requestCloseModal=="function"?window.requestCloseModal("adminFAQ",e,a):a()},Z=async()=>{const e=p("admin-faq-id")||"faq-"+Date.now().toString(36),a=p("admin-faq-category"),s=(p("admin-faq-author")||"").trim()||"Admin",r=(p("admin-faq-question")||"").trim(),t=(p("admin-faq-answer")||"").trim();let o=p("admin-faq-status");if(!r)return x("Pertanyaan tidak boleh kosong!");t&&o==="pending_answer"&&(o="published"),M("Menyimpan Q&A...");const n={id:e,question:r,answer:t,category:a,authorName:s,status:o,updatedAt:new Date().toISOString()};let l=[...c.faqs||[]];const m=l.findIndex(i=>i.id===e);m>-1?l[m]={...l[m],...n}:l.unshift(n),c.faqs=l;try{await b.collection("freshmart").doc("cms_data").collection("faqs").doc(e).set(n,{merge:!0})}catch(i){console.warn("Gagal set ke sub-koleksi faqs:",i)}try{await b.collection("freshmart").doc("cms_data").set({faqs:l},{merge:!0})}catch(i){console.warn("Gagal update cms_data.faqs:",i)}C(),$(),x("Q&A Berhasil Disimpan!"),v()},J=e=>{E("Hapus Q&A","Yakin ingin menghapus pertanyaan ini?",async()=>{M("Menghapus Q&A...");let a=(c.faqs||[]).filter(s=>s.id!==e);c.faqs=a;try{await b.collection("freshmart").doc("cms_data").collection("faqs").doc(e).delete()}catch(s){console.warn("Gagal delete dari sub-koleksi faqs:",s)}try{await b.collection("freshmart").doc("cms_data").set({faqs:a},{merge:!0})}catch(s){console.warn("Gagal update cms_data.faqs:",s)}C(),x("Q&A Berhasil Dihapus!"),v()})};window.attachFAQRealtime=q;window.renderStorefrontFAQ=f;window.selectFAQCategory=_;window.filterStorefrontFAQ=V;window.toggleFAQAccordion=G;window.openAskQuestionModal=U;window.closeAskQuestionModal=H;window.submitCustomerQuestion=z;window.rAdmFAQ=v;window.setAdminFAQFilter=O;window.openFAQModal=W;window.closeAdminFAQModal=$;window.saveAdminFAQ=Z;window.deleteAdminFAQ=J;const X=5,B=[{id:"log-1-18-02",version:"v1.18.2",date:"2026-10-17",title:"Pengelolaan Master Preset (Hapus & Pulihkan), Native Pull-to-Refresh CMS Admin & Standarisasi Universal Form Input & Tombol",category:"feature",badge:"Master Preset, Pull-to-Refresh & UI Harmony v1.18.2",items:["Fitur Hapus & Pulihkan Master Preset (Database Produk Bersama): Menghadirkan kapabilitas hapus dan pulihkan template produk bersama (custom maupun bawaan) dengan proteksi konfirmasi aman, penanda status terhapus, panel filter pemulihan, dan auto-sinkronisasi counter realtime di CMS Admin.","Native Pull-to-Refresh & Tombol Segarkan 1-Klik CMS Admin: Pengalaman navigasi smartphone tarik ke bawah untuk memuat ulang data etalase dan CMS Admin secara instan dengan indikator putar visual dan getaran haptic feedback, didukung tombol 'Segarkan' 1-klik di header admin desktop & mobile.","Universal Button & Form Input Consistency Harmony Engine: Standardisasi konsistensi 100% pada seluruh tombol (squircle radius 1rem tombol utama & 0.875rem tombol aksi, min-height 44px touch target, active:scale-[0.96] tactile press), seluruh kolom input/select/textarea (tinggi seragam 44px, radius 0.875rem, font 16px mobile anti auto-zoom/mental, focus ring bertema var(--color-primary), dan placeholder kontras tinggi).","Multi-Channel Distribution v1.18.2 (Android versionCode 11802)."]},{id:"log-1-18-01",version:"v1.18.1",date:"2026-10-16",title:"Harmonisasi Presisi UI/UX Native App: Redesain Kartu Reward Bersih, Touch Target Ergonomis Pesanan & Wishlist, Margin Bento Simetris & Live Zero-404",category:"feature",badge:"Presisi UI/UX Native App & Live Stability v1.18.1",items:["Redesain Kartu Produk, Flash Sale & Reward Presisi Full Frame: Menghilangkan badge hadiah gratis pada kartu reward agar kanvas murni bersih, menyempurnakan foto produk pada katalog, flash sale, dan reward menjadi presisi 1:1 full frame edge-to-edge tanpa padding menjorok, serta menyelaraskan tema dark mode (slate-900 / slate-950) monolitik yang mewah dan konsisten.","Standardisasi Touch Target Ergonomis Pesanan & Wishlist: Meningkatkan ukuran tombol aksi interaktif 'Detail' & 'Status' pada riwayat pesanan serta tombol 'Beli' & 'Hapus' pada daftar keinginan (wishlist) menjadi min-height 38-40px dengan padding lapang dan font tebal yang nyaman untuk navigasi jempol di smartphone.","Harmonisasi Margin Bento Storefront Universal: Menyelaraskan seluruh ritme vertikal antar seksi etalase toko (Header, Banner Hero, Flash Sale, Kategori, Rekomendasi Produk, dan Footer Bento Hub) dengan jarak simetris mt-4 sm:mt-5 yang konsisten dan bebas tumpang-tindih.","Resolusi Zero-404 Aset Live CDN & Stabilitas Modul: Memverifikasi integritas seluruh dynamic chunk modules (module-member, module-print, module-admin, dll.) pada live CDN Vercel agar selalu merespons 200 OK tanpa kendala modul terputus saat navigasi.","Multi-Channel Distribution v1.18.1 (Android versionCode 11801)."]},{id:"log-1-18-00",version:"v1.18.0",date:"2026-10-15",title:"Pustaka Database Produk Bersama & Multi-Varian: Impor Selektif Per-Produk, Kustomisasi Harga Modal & Jual Lokal Toko, Bento Grid UI & Pustaka Swatch Warna Cat",category:"feature",badge:"Pustaka Database Bersama & Multi-Varian v1.18.0",items:["Pustaka Master Produk Bersama (Global Template Library): Menghadirkan pustaka induk berisi 25+ produk material bangunan & alat teknik standar Indonesia (Cat & Pelapis, Semen & Mortar, Pipa PVC, Besi & Baja, Perkakas Listrik, Baut SDS, Sanitari, dan Kelistrikan) lengkap dengan spesifikasi teknis, merek ternama, dan paket multi-varian siap pakai untuk mempercepat klien baru mengisi katalog toko dalam 5 menit tanpa perlu mengetik dari awal.","Impor Selektif Per-Produk (Anti-Banjir & Anti-Katalog Bercampur): Sistem impor mandiri 1-per-1 (atau per-kategori) yang menyalin master template ke katalog lokal toko (appData.products). Mencegah tercampurnya katalog toko dengan barang kosong dan memastikan toko hanya menjual barang yang benar-benar ada stok fisiknya.","Drawer Pratinjau & Kustomisasi Varian Interaktif: Modal drawer Bento yang memungkinkan klien mengatur harga jual toko, modal beli (HPP), dan stok awal rak/gudang secara mandiri, serta memilih checklist varian ukuran/warna yang dijual.","Deteksi Status Cerdas (Smart Badging): Menampilkan status badge '✅ Ada di Toko' jika produk master sudah terimpor ke katalog toko dan '📥 Siap Impor' jika belum, mencegah terjadinya duplikasi barang.","Two-Way Cloud Sharing (Simpan Produk Toko ke Pustaka Master): Tombol 1-klik di tabel produk admin untuk menyimpan produk kustom lokal menjadi master template bersama yang dapat dipakai ulang oleh cabang atau klien lain.","Sub-Tab Database Swatch Warna Cat Terpadu: Mengintegrasikan katalog kode warna HEX cat yang sudah ada ke dalam sub-tab terdedikasi dengan antarmuka Bento Grid modern, menjamin kompatibilitas 100%.","Integritas Penuh Style Theme Toko & Harmonisasi Kontainer: Menjaga keaslian seluruh fitur Style Theme Toko (Minimalist, Hero Arch kanopi dome, Aurora Glow, Tech Grid, dan Industrial) agar tetap dapat diganti bebas sesuai selera klien di CMS Admin, dengan grid kontainer dalam yang tetap 100% sejajar simetris dengan Banner Hero, Kategori, Produk, dan Footer Bento Hub.","Harmonisasi Proporsional Universal Antarmuka Aplikasi: Menyelaraskan seluruh kontainer halaman (Etalase, Keranjang, Checkout, Pembayaran, Riwayat Pesanan, Favorit, Q&A) pada skala universal px-2 sm:px-6 lg:px-8 max-w-7xl 2xl:max-w-[1440px] mx-auto, standardisasi tombol squircle 1rem (16px) dengan touch target ergonomis min-height 44px (.btn-primary & .btn-solid), harmonisasi padding modular bento card (p-4 di smartphone, p-6 di desktop), penyelarasan proporsi kartu listview katalog (p-2.5 sm:p-3.5 gap-2.5 sm:gap-4), serta font minimal 16px pada seluruh kolom isian input di mobile anti auto-zoom.","Harmonisasi Tipografi & Kontras Kolom Pencarian Bertema: Menyelaraskan seluruh teks kolom pencarian (header mobile, etalase desktop, kasir POS, admin katalog, stok opname, buku kas tempo, dll.) menggunakan jenis huruf tema toko Archivo berbobot tebal (font-bold 700) dengan letter-spacing -0.015em, meningkatkan kontras placeholder menjadi slate-600/slate-300 yang tajam dan tidak pudar/kusam, serta menyelaraskan aksen ikon kaca pembesar dan tombol chiclet SCAN dengan warna tema toko dinamis (var(--color-primary)).","Multi-Channel Distribution v1.18.0 (Android versionCode 11800)."]},{id:"log-1-17-09",version:"v1.17.9",date:"2026-10-15",title:"Resolusi Paripurna Stabilitas Keyboard Android pada Kolom Pencarian: Zero-Shift Geometric, Native Placeholder & WebView Zoom Lock",category:"feature",badge:"Stabilitas Keyboard Kolom Pencarian v1.17.9",items:["Resolusi Total Keyboard Menutup Sendiri pada Kolom Pencarian: Mengeliminasi fenomena virtual keyboard Android yang membuka-menutup sendiri (mental) saat menyentuh search bar dengan menerapkan font size standar emas minimal 16px (text-[16px]) guna mematikan fitur auto-zoom/auto-pan agresif Chromium WebView.","Eliminasi CSS Transform Shift pada Header Search Capsule: Menghapus transformasi transform: translateY(-1px) dan transisi gerakan fisik saat focus-within pada wadah kapsul pencarian sehingga bounding box kursor tetap stabil 100% dan koneksi input IME Android tidak dibatalkan.","Placeholder Native HTML & Ticker Ringan Zero-Reflow: Mengganti elemen animasi rolling text bertumpuk yang memicu layout thrashing (offsetWidth reflow) menjadi manipulasi atribut placeholder native HTML langsung pada input, menjamin kursor bebas jitter dan thread GPU tenang saat mengetik.","Lebar Flexbox Input Stabil (Zero Layout Shift): Menghilangkan pergantian class hidden pada tombol clear pencarian dan menggantinya dengan transisi opacity, menjamin lebar input tidak pernah menyusut mendadak saat karakter pertama diketik.","Lock WebView Zoom 100% pada Android Native Layer: Mengonfigurasi WebView settings (setTextZoom 100% dan setSupportZoom false) pada MainActivity Android guna menjamin tidak ada pergeseran skala viewport saat keyboard terangkat.","Multi-Channel Distribution v1.17.9 (Android versionCode 11709)."]},{id:"log-1-17-08",version:"v1.17.8",date:"2026-10-15",title:"Resolusi Komprehensif Tombol Kembali & Tutup Modal, Navigasi Deterministik Seketika & Stabilitas Keyboard Native Android",category:"feature",badge:"Navigasi Deterministik & Keyboard Native v1.17.8",items:["Navigasi Kembali In-App Deterministik Seketika (1-Klik Pasti Kembali): Mengeliminasi tombol kembali yang macet di web dan aplikasi Android dengan mengganti ketergantungan rapuh window.history.back() pada tombol in-app header (Keranjang, Checkout, Pembayaran, Pesanan, Favorit, FAQ, dan Admin Login) menjadi navigasi deterministik terstruktur changeView(targetView, true) seketika pada sentuhan pertama.","Resolusi Konflik Double-Resize Keyboard Android (Native Window Resizing): Mengubah konfigurasi plugin Keyboard Capacitor dari 'resize: body' menjadi 'resize: native'. Eliminasi JavaScript layout thrashing pada document.body menuntaskan 100% masalah virtual keyboard Android (Gboard, Samsung Keyboard, Xiaomi) yang membuka-menutup sendiri (mental) saat pertama kali mengetik.","Sanitasi Peta Modal & Resolusi False-Positive factoryReset: Membersihkan elemen modal-factory-reset-box dari MODAL_ELEMENT_MAP agar status modal tertutup tidak lagi salah dilaporkan sebagai terbuka (isModalOpenInDOM) yang sebelumnya memblokir tombol kembali di halaman web.","Proteksi Sinkronisasi History URL Produk (Zero Navigation Lock): Menghapus eksekusi history.replaceState sinkron yang bertabrakan dengan in-flight history.back() saat menutup modal produk (closeProductModal) di engine Chromium/WebKit.","Multi-Channel Distribution v1.17.8 (Android versionCode 11708)."]}],j=e=>{if(!e)return[0,0,0];const a=String(e).match(/(\d+)\.(\d+)\.(\d+)/);return a?[parseInt(a[1],10),parseInt(a[2],10),parseInt(a[3],10)]:[0,0,0]},A=(e,a)=>{const[s,r,t]=j(e),[o,n,l]=j(a);return o!==s?o-s:n!==r?n-r:l-t},N=(e,a=X)=>{const s=e&&Array.isArray(e.changelog)?e.changelog:[],r=new Set(e&&Array.isArray(e.deletedChangelogIds)?e.deletedChangelogIds:[]),t=new Set(s.map(i=>i.id||i.version)),o=B.filter(i=>!t.has(i.id)&&!t.has(i.version)&&!r.has(i.id)&&!r.has(i.version)),m=[...s.filter(i=>!r.has(i.id)&&!r.has(i.version)),...o].sort((i,w)=>{const S=new Date(i.date||"2026-01-01").getTime(),P=new Date(w.date||"2026-01-01").getTime();return P!==S?P-S:A(i.version,w.version)});return typeof a=="number"&&a>0?m.slice(0,a):m},Y=e=>{const a=B[0]?.version||"v1.18.2",s=N(e,null);if(!s||s.length===0)return a;let r=s[0].version||a;for(const t of s)t.version&&A(t.version,r)<0&&(r=t.version);return A(a,r)<0&&(r=a),r};let h="all";const aa=e=>{if(!e)return"";try{const a=e.split("-");return a.length===3?new Date(parseInt(a[0]),parseInt(a[1])-1,parseInt(a[2])).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):e}catch{return e}},ea=e=>{switch(e){case"feature":return{label:"Fitur Baru",icon:"fa-rocket",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};case"optimization":return{label:"Optimasi",icon:"fa-bolt-lightning",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};case"maintenance":return{label:"Maintenance",icon:"fa-wrench",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};case"security":return{label:"Keamanan",icon:"fa-shield-halved",colorClass:"bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 border-red-200/80 dark:border-red-800/60",iconColor:"text-red-500 dark:text-red-400"};case"bugfix":return{label:"Perbaikan",icon:"fa-bug-slash",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};default:return{label:"Update",icon:"fa-tag",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"}}},ta=()=>{const e=u("changelog-items-container");if(!e)return;const a=N(c),s=h==="all"?a:a.filter(t=>t.category===h);if(s.length===0){e.innerHTML=`
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
        </div>`}),e.innerHTML=r},I=e=>{h=e,document.querySelectorAll(".btn-changelog-filter").forEach(a=>{const s=a.getAttribute("data-category"),r=a.querySelector("i");s===e?(a.className="btn-changelog-filter shrink-0 whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold primary-bg text-white shadow-xs transition-all cursor-pointer border border-transparent",r&&(r.className=r.className.replace(/text-\[[^\]]+\]/g,"").trim()+" text-white")):(a.className="btn-changelog-filter shrink-0 whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold bg-white dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 transition-all cursor-pointer",r&&s!=="all"?r.className=r.className.replace(/\btext-white\b/g,"").trim()+" text-[var(--color-primary)]":r&&s==="all"&&(r.className=r.className.replace(/\btext-white\b/g,"").trim()+" text-slate-400"))}),ta()},sa=(e="all")=>{let a=u("changelog-modal");a||(a=document.createElement("div"),a.id="changelog-modal",a.className="fixed inset-0 z-[125] bg-slate-900/80 flex items-end sm:items-center justify-center p-0 sm:p-4 opacity-0 transition-opacity duration-300",a.onclick=t=>{t.target===a&&D()},a.innerHTML=`
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
        </div>`,document.body.appendChild(a));const s=Y(c),r=u("changelog-header-ver");r&&(r.textContent=s),h=e,I(e),a.style.display!=="flex"&&R("changelog"),a.style.display="flex",a.offsetWidth,requestAnimationFrame(()=>{a.classList.remove("opacity-0");const t=u("changelog-modal-box");t&&t.classList.remove("translate-y-full","sm:translate-y-8")})},D=(e=!1)=>{const a=u("changelog-modal");if(!a||a.style.display==="none")return;const s=()=>{a.classList.add("opacity-0");const r=u("changelog-modal-box");r&&r.classList.add("translate-y-full","sm:translate-y-8"),setTimeout(()=>{a.style.display="none"},300)};typeof F=="function"?F("changelog",e,s):s()};window.openChangelogModal=sa;window.closeChangelogModal=D;window.filterChangelog=I;export{Y as a,A as c,N as g};

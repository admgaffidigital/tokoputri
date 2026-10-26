import{q as g,a as c,i as d,e as p,o as Q,g as u,k as x,l as C,n as M,G as b,a1 as E,H as _,v as D,ai as K,r as S}from"./module-print-DA9KURo2.js";let T=null;const P=()=>{if(!T)try{T=g.collection("freshmart").doc("cms_data").collection("faqs").onSnapshot(e=>{e&&e.docs&&(c.faqs=e.docs.map(a=>({id:a.id,...a.data()}))),typeof window.curViewName<"u"&&window.curViewName==="view-faq"&&h(),window.isAdm&&typeof window.cTab<"u"&&window.cTab==="faqs"&&typeof window.rAdmFAQ=="function"&&window.rAdmFAQ()},e=>{console.warn("Sync sub-koleksi faqs dibatasi, menggunakan fallback cms_data.faqs:",e.message),typeof window.curViewName<"u"&&window.curViewName==="view-faq"&&h(),window.isAdm&&typeof window.cTab<"u"&&window.cTab==="faqs"&&typeof window.rAdmFAQ=="function"&&window.rAdmFAQ()})}catch{console.warn("Fallback sync Q&A dari cms_data aktif")}};let y="Semua";const h=()=>{P();const e=document.getElementById("storefront-faq-container"),a=document.getElementById("faq-category-pills");if(!e)return;const s=(c.faqs||[]).filter(r=>r.status==="published"),n=["Semua","Pemesanan","Pengiriman","Pembayaran","Garansi","Lainnya"];a&&(a.innerHTML=n.map(r=>`
            <button onclick="selectFAQCategory('${r}')" class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${y===r?"primary-bg text-white shadow-md":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100"}">
                ${r}
            </button>
        `).join(""));const t=(document.getElementById("faq-search-input")?.value||"").toLowerCase().trim(),o=s.filter(r=>{const l=y==="Semua"||r.category===y,m=!t||(r.question||"").toLowerCase().includes(t)||(r.answer||"").toLowerCase().includes(t);return l&&m});if(!o.length){e.innerHTML=`
            <div class="text-center py-12 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
                <div class="w-16 h-16 rounded-full primary-bg-soft primary-text mx-auto flex items-center justify-center mb-3">
                    <i class="fa-solid fa-circle-question text-3xl"></i>
                </div>
                <h3 class="font-bold text-slate-800 dark:text-white text-base">Belum Ada Q&A Ditemukan</h3>
                <p class="text-xs text-slate-500 mt-1 max-w-sm mx-auto">Punya pertanyaan lain? Silakan gunakan tombol <b>Ajukan Pertanyaan</b> untuk bertanya ke admin.</p>
                <button onclick="openAskQuestionModal()" class="mt-4 primary-bg text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-md active:scale-95 transition-all">Ajukan Pertanyaan Sekarang</button>
            </div>
        `;return}e.innerHTML=o.map(r=>`
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
    `).join("")},R=e=>{y=e,h()},O=()=>{h()},U=e=>{const a=document.getElementById(`faq-body-${e}`),s=document.getElementById(`faq-icon-${e}`);if(!a||!s)return;a.classList.contains("hidden")?(a.classList.remove("hidden"),s.classList.add("rotate-180")):(a.classList.add("hidden"),s.classList.remove("rotate-180"))},W=()=>{const e=p("modal-ask-question"),a=p("modal-ask-question-box");e&&(e.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("askQuestion"),Q(e,a))},L=(e=!1)=>{const a=()=>{D("modal-ask-question","modal-ask-question-box")};typeof window.requestCloseModal=="function"?window.requestCloseModal("askQuestion",e,a):a()},G=async()=>{const e=(u("ask-author-name")||"").trim()||"Pelanggan",a=u("ask-category")||"Pemesanan",s=(u("ask-question-text")||"").trim();if(!s)return x("Tuliskan pertanyaan Anda terlebih dahulu!");C("Mengirim pertanyaan...");const n="faq-"+Date.now().toString(36),t={id:n,question:s,answer:"",category:a,authorName:e,status:"pending_answer",createdAt:new Date().toISOString()};let o=!1;try{await g.collection("freshmart").doc("cms_data").collection("faqs").doc(n).set(t),o=!0}catch(r){console.warn("Penulisan sub-koleksi faqs dibatasi, mencoba fallback cms_data.faqs:",r)}if(!o)try{const r=[t,...(c.faqs||[]).filter(l=>l.id!==n)];await g.collection("freshmart").doc("cms_data").set({faqs:r},{merge:!0}),c.faqs=r,o=!0}catch(r){console.warn("Fallback cms_data.faqs juga gagal:",r)}M(),o?(L(),b("ask-question-text",""),x("Pertanyaan terkirim! Admin akan menjawabnya segera."),h()):x("Gagal mengirim pertanyaan. Coba lagi!")};let k="all";const v=()=>{P();const e=c.faqs||[],a=e.filter(t=>k==="pending"?t.status==="pending_answer":k==="published"?t.status==="published":!0),s=e.filter(t=>t.status==="pending_answer").length;let n=`
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
    `;setH("admin-content",n)},V=e=>{k=e,v()},z=e=>{const a=(c.faqs||[]).find(t=>t.id===e)||{id:"",question:"",answer:"",category:"Pemesanan",authorName:"Admin",status:"published"};b("admin-faq-id",a.id),b("admin-faq-category",a.category||"Pemesanan"),b("admin-faq-author",a.authorName||"Admin"),b("admin-faq-question",a.question||""),b("admin-faq-answer",a.answer||""),b("admin-faq-status",a.status||"published"),E("admin-faq-modal-title",e?"Edit Q&A":"Tambah Q&A Baru");const s=p("modal-admin-faq"),n=p("modal-admin-faq-box");s&&(s.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("adminFAQ"),Q(s,n))},B=(e=!1)=>{const a=()=>{D("modal-admin-faq","modal-admin-faq-box")};typeof window.requestCloseModal=="function"?window.requestCloseModal("adminFAQ",e,a):a()},J=async()=>{const e=u("admin-faq-id")||"faq-"+Date.now().toString(36),a=u("admin-faq-category"),s=(u("admin-faq-author")||"").trim()||"Admin",n=(u("admin-faq-question")||"").trim(),t=(u("admin-faq-answer")||"").trim();let o=u("admin-faq-status");if(!n)return x("Pertanyaan tidak boleh kosong!");t&&o==="pending_answer"&&(o="published"),C("Menyimpan Q&A...");const r={id:e,question:n,answer:t,category:a,authorName:s,status:o,updatedAt:new Date().toISOString()};let l=[...c.faqs||[]];const m=l.findIndex(i=>i.id===e);m>-1?l[m]={...l[m],...r}:l.unshift(r),c.faqs=l;try{await g.collection("freshmart").doc("cms_data").collection("faqs").doc(e).set(r,{merge:!0})}catch(i){console.warn("Gagal set ke sub-koleksi faqs:",i)}try{await g.collection("freshmart").doc("cms_data").set({faqs:l},{merge:!0})}catch(i){console.warn("Gagal update cms_data.faqs:",i)}M(),B(),x("Q&A Berhasil Disimpan!"),v()},Z=e=>{_("Hapus Q&A","Yakin ingin menghapus pertanyaan ini?",async()=>{C("Menghapus Q&A...");let a=(c.faqs||[]).filter(s=>s.id!==e);c.faqs=a;try{await g.collection("freshmart").doc("cms_data").collection("faqs").doc(e).delete()}catch(s){console.warn("Gagal delete dari sub-koleksi faqs:",s)}try{await g.collection("freshmart").doc("cms_data").set({faqs:a},{merge:!0})}catch(s){console.warn("Gagal update cms_data.faqs:",s)}M(),x("Q&A Berhasil Dihapus!"),v()})};window.attachFAQRealtime=P;window.renderStorefrontFAQ=h;window.selectFAQCategory=R;window.filterStorefrontFAQ=O;window.toggleFAQAccordion=U;window.openAskQuestionModal=W;window.closeAskQuestionModal=L;window.submitCustomerQuestion=G;window.rAdmFAQ=v;window.setAdminFAQFilter=V;window.openFAQModal=z;window.closeAdminFAQModal=B;window.saveAdminFAQ=J;window.deleteAdminFAQ=Z;const X=5,I=[{id:"log-1-20-0",version:"v1.20.0",date:"2026-10-24",title:"Industrial Neo-Brutalism & Full Native App Experience untuk Ekosistem Perkakas & Toko Bahan Bangunan",category:"feature",badge:"Industrial Neo-Brutalism & Full Native App Engine v1.20.0",items:["Industrial Neo-Brutalism & Full Native App Engine (v1.20.0): Penyelarasan identitas visual toko perkakas teknik & bahan bangunan (heavy-duty, kokoh, tahan banting, presisi) dengan 2px solid charcoal outlines, zero-blur hard offset shadows (2.5px), dan aksen safety K3 (kuning peringatan, oranye industri, hijau SNI).","Sensasi Tekan Taktil Saklar Mekanikal (Mechanical Switch Feedback): Mengintegrasikan respon tekan instan (active: translate(2px, 2px)) pada tombol aksi utama, tuts kasir, dan kartu produk, memberikan rasa klik fisik seperti saklar mesin perkakas asli di layar sentuh smartphone.","Integrasi Storefront & Etalase Pelanggan: Menghadirkan aksen pita proyek (hazard caution stripes) pada hero banner & promo kilat, kartu produk bento modular bergaris tebal 2px (.neo-card), serta stiker label rak gudang (.neo-badge) untuk varian, grosir, dan satuan barang.","Penyempurnaan Layar POS Kasir & Transaksi Cepat: Tombol tipe pelanggan (Umum, Member, Tempo), tuts nominal pecahan cepat (Rp 10rb s.d. Uang Pas), kotak status kembalian (.neo-box), dan tombol proses transaksi F4 (.neo-btn) tampil tebal, kontras tinggi, dan nyaman dioperasikan satu jempol.","Harmonisasi Menyeluruh CMS Owner & Dashboard: Menjamin seluruh kartu KPI Arus Kas, Welcome Banner Owner, kartu menu navigasi, dan tombol aksi header CMS mengadopsi 2px solid border, 2.5px hard shadow, dan sensasi tekan mekanikal tanpa tertimpa CSS spesifisitas lama.","Integrasi Etalase & Chiclet Kategori/Brand: Menghadirkan aksen neo-brutalisme pada chiclet kategori interaktif (#dynamic-categories-container), kartu brand terpercaya (#dynamic-brands-container), tombol 'Lihat Semua', serta kartu aksi WhatsApp & unduh APK pada footer toko.","Isolasi Keamanan Cetak Thermal & Dokumen A4 Resmi: Penjaminan mutlak bahwa hard shadow CSS diisolasi penuh (@media print) sehingga cetakan kertas struk thermal kasir dan PDF A4 tetap 100% putih bersih, pekat, dan hemat ribbon/kertas.","Suite Unit Test test-industrial-neo-brutalism.mjs (32 pengujian arsitektural) 100% Passed dan terintegrasi otomatis ke pipeline audit kesehatan sistem.","Multi-Channel Distribution v1.20.0 (Android versionCode 12000 & Windows x64)."]},{id:"log-1-19-7",version:"v1.19.7",date:"2026-10-21",title:"Native App Harmony, Pratinjau Dokumen Presensi A4 & Eliminasi Warna Jomplang",category:"feature",badge:"Native App Harmony, Attendance Doc Preview & Zero Disparity v1.19.7",items:["Pratinjau Dokumen A4 Rekapitulasi Presensi Resmi (#doc-preview-modal): Mengintegrasikan dokumen rekap presensi tim bulanan ke dalam engine pratinjau A4 standar (openDocPreview) lengkap dengan kop surat resmi toko, 4 kartu ringkasan KPI eksekutif, tabel matriks kehadiran multi-halaman, tanda tangan pengesahan HR & Pemilik Toko, serta opsi cetak printer, ekspor gambar HD, dan simpan PDF A4.","Redesain Native App Bento Modal Presensi Tim (#modal-attendance-rekap): Menata ulang 4 kartu KPI menjadi bento kompak (p-2 sm:p-2.5) dan mengintegrasikan selector periode bulan ke bilah header kanan sejajar tombol tutup, menghemat ~90px ruang vertikal sehingga tabel kehadiran staf langsung tampil lapang di layar smartphone.","Harmonisasi Tema Toko & Eliminasi Header Tabel Pelangi: Menghilangkan pewarnaan teks pelangi acak pada header tabel (hijau, kuning, biru, ungu, pink) dan angka KPI, menggantinya dengan tipografi kontras tinggi slate korporat profesional dan wadah ikon beraksen tema toko var(--color-primary) selaras 100% dengan ekosistem bisnis hulu ke hilir Toko Putri.","Eliminasi Pemotongan Placeholder Search Bar: Mengoptimalkan teks kolom isian pencarian di modal rekap presensi menjadi 'Cari nama / jabatan...' dengan padding proporsional pl-8 pr-2.5 anti-terpotong di mobile 360px.","Hero Banner Line-Clamp-2 & Section Header Zero-Crushing: Proteksi flex-shrink: 0 !important dan white-space: nowrap !important pada tombol 'Lihat Semua' serta judul pemasaran multiline bebas terpotong elipsis di storefront.","Multi-Channel Distribution v1.19.7 (Android versionCode 11907 & Windows x64)."]},{id:"log-1-19-6",version:"v1.19.6",date:"2026-10-21",title:"Universal Native App Visual Harmony, Proportional Input & Button Consistency, dan Bottom Sheet Modal Precision",category:"feature",badge:"Universal Native App Visual Harmony & Proportional Engine v1.19.6",items:["Universal Native App Visual Harmony Engine (v1.19.6): Membangun arsitektur visual responsif terpadu di style.css dengan pembatasan hover frame desktop-only (@media (hover: hover) and (pointer: fine)), mengeliminasi efek hover lengket/stuck pada layar sentuh smartphone.","Standardisasi Proporsional Input & Tombol: Menegakkan touch target minimum 44px (min-height: 2.75rem), squircle radius 14px (0.875rem), font 16px mobile anti-auto-zoom di iOS/Android, dan tactile active feedback scale(0.965) seragam pada seluruh tombol dan formulir.","Penyelarasan Presisi Modal Bayar Kasir POS (#pos-pay-modal): Menjadikan modal bayar kasir sebagai native bottom sheet squircle rounded-t-[2rem] sm:rounded-3xl dengan pull-indicator, memindahkan kotak kembalian (#pos-change-box) tepat di bawah kolom input nominal untuk umpan balik instan kasir, memperkuat kontras teks input nominal, dan mengeliminasi tombol nominal cepat Rp 500.000 terpotong footer.","Perapian Modal Cetak Label Barcode (#modal-product-barcode-label): Menjamin badge SKU produk anti-wrap pada karakter strip (-) dengan white-space: nowrap !important, memperbaiki pembatasan baris nama varian (line-clamp), menata stepper jumlah cetak responsif pada kartu item, dan merapikan label tombol aksi responsif.","Harmonisasi Modal Rekapitulasi Presensi Tim (#modal-attendance-rekap): Mengeliminasi pemotongan judul header modal ('Reka...' dan 'PUTRI UT...') dengan menyediakan bilah pemilih periode bulan adaptif, mengganti tipografi serif Courier New pada kartu 'Hak Uang Makan' ke modern sans-serif Archivo/Barlow, membersihkan duplikasi bullet titik karyawan, dan merestrukturisasi tombol footer menjadi satu baris horizontal proporsional.","Universal 100% Solid Flat Clean: Menjaga konsistensi estetika solid minimalis tanpa gradasi, tanpa backdrop-filter blur kaca, dan hairline border bersih di Light & Dark Mode.","Multi-Channel Distribution v1.19.6 (Android versionCode 11906 & Windows x64)."]},{id:"log-1-19-5",version:"v1.19.5",date:"2026-10-20",title:"Paket Aplikasi Windows Desktop (.exe), Mesin Cetak Thermal High-Density Deep Black & Dokumen A4 High-Contrast",category:"feature",badge:"Windows Desktop Installer .exe & High-Density Thermal Print Engine v1.19.5",items:["Aplikasi Mandiri Windows Desktop (.exe): Resmi merilis paket installer mandiri Windows NSIS ('Toko Putri Setup 1.19.5.exe') dan versi Portable ('Toko Putri 1.19.5.exe') bertenaga Electron dengan Single-Instance Lock, performa 60 FPS offline-first, dan bebas gangguan address bar browser.","Mesin Cetak Thermal High-Density Deep Black: Mengganti font struk ke Consolas dengan penegakan font-weight 700 (teks biasa) dan font-weight 900 (judul toko & baris TOTAL) serta aksen text-stroke dan penonaktifan anti-aliasing abu-abu, menghasilkan cetakan struk kasir yang hitam pekat, tebal, dan anti-pudar.","Kalibrasi Presisi Lebar Kertas Thermal (48mm / 72mm): Memperbarui printable width 58mm menjadi 48mm dan 80mm menjadi 72mm dengan padding simetris rata tengah, mengeliminasi margin kosong sebelah kanan secara tuntas.","Peningkatan Kontras & Ketebalan Dokumen A4: Mengunci seluruh teks, border tabel, dan angka rupiah invoice, faktur, surat jalan, dan slip gaji ke solid black (#000000) berbobot tebal, menjamin cetakan dokumen kantor/toko tajam dan bebas dithering buram.","Penajaman Kontras Dark Mode Kasir POS (WCAG AA/AAA): Mengoptimalkan total tagihan modal bayar, subtotal baris keranjang kasir, badge varian katalog, dan prefix diskon Rp ke warna Rose-300 cerah kontras tinggi.","Penyelarasan Base Path Relatif (./) di Vite: Menjamin seluruh modul dan aset aplikasi dapat dibuka secara offline langsung dari sistem file komputer tanpa memerlukan web server lokal.","Multi-Channel Distribution v1.19.5 (Android versionCode 11905 & Windows x64)."]},{id:"log-1-19-4",version:"v1.19.4",date:"2026-10-20",title:"Persistensi Pustaka Database Bersama (Anti-Hilang saat Reload), Batch Import 'Salin Semua ke Toko' & Pemulihan Tampilan POS Kasir Multi-Device (Tablet & Desktop Split Screen)",category:"feature",badge:"Master Presets Persistence, Bulk Import All & Multi-Device POS Harmony v1.19.4",items:["Penyimpanan Permanen Master Presets ke Cloud Firestore Sub-Koleksi: Mengintegrasikan penulisan langsung setiap produk yang disalin dari Database Bersama ke sub-koleksi Firestore freshmart/cms_data/products/{id}, pendaftaran otomatis ke susunan produk productOrder, dan pembaruan seketika cache lokal freshmart_products, mengeliminasi produk hilang setelah reload secara permanen.","Fitur Baru '⚡ Salin Semua ke Toko' (Batch Import All): Menyediakan tombol aksi cepat di toolbar Database Bersama dan kartu interaktif 'Tersedia utk Diimpor' untuk menyalin seluruh template produk, varian, dan spesifikasi sekaligus ke etalase & kasir POS dengan opsi penentuan stok awal massal.","Batch Write Firestore Berkinerja Tinggi: Eksekusi impor massal diproses menggunakan db.batch() dalam batas aman Firestore (maks 450 dokumen per commit), mendaftarkan kategori & brand baru otomatis, dan menyiarkan sinyal sinkronisasi realtime product_bulk ke seluruh perangkat.","Proteksi Ganda saveApp di storage.js: Memfilter key 'products' dari dokumen utama cms_data agar terhindar dari pembengkakan batas dokumen 1MB Firestore dan menyediakan mekanisme batch sync otomatis untuk updatedProductIds.","Pemulihan Antarmuka POS Kasir Split-Screen di Tablet & Desktop: Menghidupkan kembali tata letak split screen kasir (katalog produk di kiri 58-65% dan panel keranjang & billing kasir di kanan 35-42%) melalui Responsive Display Engine di style.css, mengeliminasi konflik .hidden !important yang sebelumnya menimpa utilitas flex tablet/desktop.","Harmonisasi Header Terminal Kasir Multi-Device: Menyesuaikan kontrol tombol kasir (Live Clock WIB, Tema Gelap/Terang, Estimator Material F3, Pengaturan Printer Thermal F7, Panduan POS, Status Jaringan Online, dan Tombol Keluar) agar tampil proporsional langsung di header tablet & desktop, menyembunyikan tombol mobile titik tiga [⋮] pada layar >= md, serta mempertahankan 100% kebersihan antarmuka Native App di smartphone.","Universal Dark-Mode Contrast Engine (WCAG AA/AAA): Menajamkan seluruh elemen teks bertema toko di Dark Mode (harga jual produk POS, total akhir keranjang, tombol 'Lihat Semua' kategori/brand, tombol 'Laporan P&L', link 'Analisis', dan tombol Scan F9) ke aksen Rose-300/400 kontras tinggi, mengeliminasi teks gelap/tenggelam secara tuntas.","Stabilisasi Jaringan Cloud Firestore (Anti-ERR_QUIC_PROTOCOL_ERROR): Mengunci komunikasi data Firestore WebChannel ke standard HTTPS TCP Port 443 via experimentalForceLongPolling, mengeliminasi pemutusan sesi UDP/QUIC dan HTTP 400 Bad Request pada jaringan internet ISP/WiFi lokal sehingga sinkronisasi kasir berjalan 100% hening dan stabil.","Suite Unit Test test-master-presets-persistence.mjs, test-master-product-presets.mjs & test-pos-header-responsive.mjs (87 pengujian) 100% Passed.","Multi-Channel Distribution v1.19.4 (Android versionCode 11904)."]}],j=e=>{if(!e)return[0,0,0];const a=String(e).match(/(\d+)\.(\d+)\.(\d+)/);return a?[parseInt(a[1],10),parseInt(a[2],10),parseInt(a[3],10)]:[0,0,0]},A=(e,a)=>{const[s,n,t]=j(e),[o,r,l]=j(a);return o!==s?o-s:r!==n?r-n:l-t},H=(e,a=X)=>{const s=e&&Array.isArray(e.changelog)?e.changelog:[],n=new Set(e&&Array.isArray(e.deletedChangelogIds)?e.deletedChangelogIds:[]),t=new Set(s.map(i=>i.id||i.version)),o=I.filter(i=>!t.has(i.id)&&!t.has(i.version)&&!n.has(i.id)&&!n.has(i.version)),m=[...s.filter(i=>!n.has(i.id)&&!n.has(i.version)),...o].sort((i,w)=>{const q=new Date(i.date||"2026-01-01").getTime(),F=new Date(w.date||"2026-01-01").getTime();return F!==q?F-q:A(i.version,w.version)});return typeof a=="number"&&a>0?m.slice(0,a):m},Y=e=>{const a=I[0]?.version||"v1.20.0",s=H(e,null);if(!s||s.length===0)return a;let n=s[0].version||a;for(const t of s)t.version&&A(t.version,n)<0&&(n=t.version);return A(a,n)<0&&(n=a),n};let f="all";const aa=e=>{if(!e)return"";try{const a=e.split("-");return a.length===3?new Date(parseInt(a[0]),parseInt(a[1])-1,parseInt(a[2])).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):e}catch{return e}},ea=e=>{switch(e){case"feature":return{label:"Fitur Baru",icon:"fa-rocket",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};case"optimization":return{label:"Optimasi",icon:"fa-bolt-lightning",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};case"maintenance":return{label:"Maintenance",icon:"fa-wrench",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};case"security":return{label:"Keamanan",icon:"fa-shield-halved",colorClass:"bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 border-red-200/80 dark:border-red-800/60",iconColor:"text-red-500 dark:text-red-400"};case"bugfix":return{label:"Perbaikan",icon:"fa-bug-slash",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};default:return{label:"Update",icon:"fa-tag",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"}}},ta=()=>{const e=p("changelog-items-container");if(!e)return;const a=H(c),s=f==="all"?a:a.filter(t=>t.category===f);if(s.length===0){e.innerHTML=`
        <div class="flex flex-col items-center justify-center py-12 text-center text-slate-400">
            <div class="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-2xl mb-3">
                <i class="fa-solid fa-clipboard-list opacity-60"></i>
            </div>
            <p class="text-xs font-bold text-slate-600 dark:text-slate-300">Belum ada catatan pada kategori ini</p>
            <p class="text-[10px] text-slate-400 mt-0.5">Pilih filter kategori lain di atas</p>
        </div>`;return}let n="";s.forEach((t,o)=>{const r=o===0&&f==="all",l=ea(t.category),m=aa(t.date),i=(t.items||[]).map(w=>`
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
        </div>`}),e.innerHTML=n},$=e=>{f=e,document.querySelectorAll(".btn-changelog-filter").forEach(a=>{const s=a.getAttribute("data-category"),n=a.querySelector("i");s===e?(a.className="btn-changelog-filter shrink-0 whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold primary-bg text-white shadow-xs transition-all cursor-pointer border border-transparent",n&&(n.className=n.className.replace(/text-\[[^\]]+\]/g,"").trim()+" text-white")):(a.className="btn-changelog-filter shrink-0 whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold bg-white dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 transition-all cursor-pointer",n&&s!=="all"?n.className=n.className.replace(/\btext-white\b/g,"").trim()+" text-[var(--color-primary)]":n&&s==="all"&&(n.className=n.className.replace(/\btext-white\b/g,"").trim()+" text-slate-400"))}),ta()},sa=(e="all")=>{let a=p("changelog-modal");a||(a=document.createElement("div"),a.id="changelog-modal",a.className="fixed inset-0 z-[125] bg-slate-900/80 flex items-end sm:items-center justify-center p-0 sm:p-4 opacity-0 transition-opacity duration-300",a.onclick=t=>{t.target===a&&N()},a.innerHTML=`
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
        </div>`,document.body.appendChild(a));const s=Y(c),n=p("changelog-header-ver");n&&(n.textContent=s),f=e,$(e),a.style.display!=="flex"&&K("changelog"),a.style.display="flex",a.offsetWidth,requestAnimationFrame(()=>{a.classList.remove("opacity-0");const t=p("changelog-modal-box");t&&t.classList.remove("translate-y-full","sm:translate-y-8")})},N=(e=!1)=>{const a=p("changelog-modal");if(!a||a.style.display==="none")return;const s=()=>{a.classList.add("opacity-0");const n=p("changelog-modal-box");n&&n.classList.add("translate-y-full","sm:translate-y-8"),setTimeout(()=>{a.style.display="none"},300)};typeof S=="function"?S("changelog",e,s):s()};window.openChangelogModal=sa;window.closeChangelogModal=N;window.filterChangelog=$;export{Y as a,A as c,H as g};

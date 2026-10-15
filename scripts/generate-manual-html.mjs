import fs from 'fs';
import path from 'path';

const mdPath = path.resolve('DOCS_SAAS_BISNIS', '3_PANDUAN_OPERASIONAL_PEMILIK_TOKO_NON_TEKNIS.md');
const htmlPath = path.resolve('DOCS_SAAS_BISNIS', '3_PANDUAN_OPERASIONAL_PEMILIK_TOKO_NON_TEKNIS.html');

const mdContent = fs.readFileSync(mdPath, 'utf8');

// Simple, robust markdown to HTML converter tailored for this manual
function markdownToHtml(md) {
  const lines = md.split('\n');
  const tocItems = [];
  const bodyHtml = [];
  let inTable = false;
  let tableHeaderParsed = false;
  let inList = false;
  let inOrderedList = false;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    // Handle horizontal rules
    if (line.trim() === '---') {
      if (inList) { bodyHtml.push('</ul>'); inList = false; }
      if (inOrderedList) { bodyHtml.push('</ol>'); inOrderedList = false; }
      if (inTable) { bodyHtml.push('</tbody></table></div>'); inTable = false; tableHeaderParsed = false; }
      bodyHtml.push('<hr class="my-8 border-slate-200 dark:border-slate-800" />');
      continue;
    }

    // Handle Table
    if (line.trim().startsWith('|') && line.trim().endsWith('|')) {
      if (inList) { bodyHtml.push('</ul>'); inList = false; }
      if (inOrderedList) { bodyHtml.push('</ol>'); inOrderedList = false; }
      
      const cells = line.split('|').slice(1, -1).map(c => c.trim());
      
      if (!inTable) {
        inTable = true;
        tableHeaderParsed = false;
        bodyHtml.push('<div class="overflow-x-auto my-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm"><table class="w-full text-left border-collapse text-sm">');
        bodyHtml.push('<thead class="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold border-b border-slate-200 dark:border-slate-700"><tr>');
        cells.forEach(c => {
          bodyHtml.push(`<th class="p-3.5 whitespace-nowrap">${formatInline(c)}</th>`);
        });
        bodyHtml.push('</tr></thead><tbody class="divide-y divide-slate-100 dark:divide-slate-800/60 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300">');
        continue;
      }

      if (inTable && !tableHeaderParsed) {
        // This is delimiter row like | :--- | :--- |
        if (cells.every(c => /^:?-+:?$/.test(c))) {
          tableHeaderParsed = true;
          continue;
        }
      }

      bodyHtml.push('<tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">');
      cells.forEach(c => {
        bodyHtml.push(`<td class="p-3.5 leading-relaxed">${formatInline(c)}</td>`);
      });
      bodyHtml.push('</tr>');
      continue;
    } else if (inTable) {
      bodyHtml.push('</tbody></table></div>');
      inTable = false;
      tableHeaderParsed = false;
    }

    // Handle Headings
    if (line.startsWith('# ')) {
      const title = line.replace('# ', '').trim();
      bodyHtml.push(`<h1 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-3">${formatInline(title)}</h1>`);
      continue;
    }

    if (line.startsWith('## ')) {
      if (inList) { bodyHtml.push('</ul>'); inList = false; }
      if (inOrderedList) { bodyHtml.push('</ol>'); inOrderedList = false; }
      const title = line.replace('## ', '').trim();
      const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      tocItems.push({ title, id });
      bodyHtml.push(`<div class="scroll-mt-24 pt-6" id="${id}">
        <div class="flex items-center gap-2 mb-4">
          <span class="w-2.5 h-6 rounded-full bg-emerald-500 shrink-0"></span>
          <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">${formatInline(title)}</h2>
        </div>
      </div>`);
      continue;
    }

    if (line.startsWith('### ')) {
      if (inList) { bodyHtml.push('</ul>'); inList = false; }
      if (inOrderedList) { bodyHtml.push('</ol>'); inOrderedList = false; }
      const title = line.replace('### ', '').trim();
      bodyHtml.push(`<h3 class="text-base sm:text-lg font-extrabold text-slate-800 dark:text-slate-100 mt-5 mb-2.5 flex items-center gap-2">
        <i class="fa-solid fa-angle-right text-emerald-500 text-xs"></i>
        <span>${formatInline(title)}</span>
      </h3>`);
      continue;
    }

    // Handle Unordered Lists
    if (/^\s*[-*]\s+/.test(line)) {
      if (inOrderedList) { bodyHtml.push('</ol>'); inOrderedList = false; }
      if (!inList) {
        bodyHtml.push('<ul class="space-y-2 my-3 pl-2">');
        inList = true;
      }
      const itemText = line.replace(/^\s*[-*]\s+/, '');
      bodyHtml.push(`<li class="flex items-start gap-2.5 text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
        <span class="text-emerald-500 font-bold shrink-0 mt-1"><i class="fa-solid fa-circle-check text-[11px]"></i></span>
        <span>${formatInline(itemText)}</span>
      </li>`);
      continue;
    }

    // Handle Ordered Lists
    if (/^\s*\d+\.\s+/.test(line)) {
      if (inList) { bodyHtml.push('</ul>'); inList = false; }
      if (!inOrderedList) {
        bodyHtml.push('<ol class="space-y-2.5 my-3 pl-2">');
        inOrderedList = true;
      }
      const numMatch = line.match(/^\s*(\d+)\.\s+/);
      const num = numMatch ? numMatch[1] : '1';
      const itemText = line.replace(/^\s*\d+\.\s+/, '');
      bodyHtml.push(`<li class="flex items-start gap-3 text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
        <span class="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 font-bold text-xs flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700 shadow-2xs">${num}</span>
        <span class="pt-0.5">${formatInline(itemText)}</span>
      </li>`);
      continue;
    }

    // Reset lists if empty line or paragraph
    if (inList) { bodyHtml.push('</ul>'); inList = false; }
    if (inOrderedList) { bodyHtml.push('</ol>'); inOrderedList = false; }

    if (line.trim().length === 0) {
      continue;
    }

    // Callout quote
    if (line.startsWith('> ') || line.startsWith('💡 ')) {
      bodyHtml.push(`<div class="p-4 my-4 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/60 text-amber-900 dark:text-amber-200 text-sm flex items-start gap-3">
        <i class="fa-solid fa-lightbulb text-amber-500 text-base mt-0.5 shrink-0"></i>
        <div class="leading-relaxed">${formatInline(line.replace(/^(> |💡 )/, ''))}</div>
      </div>`);
      continue;
    }

    // Regular paragraph
    bodyHtml.push(`<p class="text-slate-700 dark:text-slate-300 text-sm leading-relaxed my-2">${formatInline(line)}</p>`);
  }

  if (inList) bodyHtml.push('</ul>');
  if (inOrderedList) bodyHtml.push('</ol>');
  if (inTable) bodyHtml.push('</tbody></table></div>');

  return {
    toc: tocItems,
    html: bodyHtml.join('\n')
  };
}

function formatInline(text) {
  if (!text) return '';
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-900 dark:text-white">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="italic text-slate-800 dark:text-slate-200">$1</em>')
    .replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 font-mono text-xs border border-slate-200/80 dark:border-slate-700">$1</code>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-emerald-600 dark:text-emerald-400 hover:underline font-semibold">$1</a>');
}

const parsed = markdownToHtml(mdContent);

const fullHtml = `<!DOCTYPE html>
<html lang="id" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Panduan Lengkap Penggunaan Aplikasi Toko & Kasir (Untuk Pemilik Usaha) — Toko Putri</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'sans-serif'],
          }
        }
      }
    }
  </script>
  <style>
    body {
      font-family: 'Plus Jakarta Sans', sans-serif;
    }
    @media print {
      .no-print {
        display: none !important;
      }
      body {
        background-color: #ffffff !important;
        color: #000000 !important;
      }
      .print-shadow-none {
        box-shadow: none !important;
      }
    }
  </style>
</head>
<body class="bg-slate-50 text-slate-800 antialiased dark:bg-slate-950 dark:text-slate-100 min-h-screen">

  <!-- TOP HEADER & ACTION BAR -->
  <header class="no-print sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-xs">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 text-white flex items-center justify-center font-black text-lg shadow-md shadow-emerald-500/20 shrink-0">
          <i class="fa-solid fa-book-open"></i>
        </div>
        <div>
          <h1 class="text-sm sm:text-base font-black text-slate-900 dark:text-white leading-tight flex items-center gap-2">
            Panduan Operasional Toko & Kasir
            <span class="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">v1.17.6</span>
          </h1>
          <p class="text-[11px] font-semibold text-slate-500 dark:text-slate-400">100% Non-Teknis &bull; Untuk Pemilik Usaha, Manajer & Staf Kasir</p>
        </div>
      </div>

      <div class="flex items-center gap-2">
        <!-- Quick Search Filter -->
        <div class="relative hidden md:block w-64">
          <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
          <input type="text" id="manual-search-input" placeholder="Cari topik / bab..." onkeyup="filterManual(this.value)"
            class="w-full pl-9 pr-3.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-semibold focus:outline-none focus:border-emerald-500 dark:text-white">
        </div>

        <!-- Print / PDF Button -->
        <button onclick="window.print()" class="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs active:scale-95">
          <i class="fa-solid fa-print"></i>
          <span class="hidden sm:inline">Cetak / Simpan PDF</span>
        </button>

        <!-- Toggle Dark Mode -->
        <button onclick="toggleDarkMode()" class="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold transition-all cursor-pointer flex items-center justify-center shadow-2xs active:scale-95" title="Ganti Tema">
          <i class="fa-solid fa-circle-half-stroke" id="dark-mode-icon"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- MAIN CONTAINER -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      <!-- LEFT SIDEBAR: STICKY TABLE OF CONTENTS -->
      <aside class="no-print lg:col-span-4 xl:col-span-3 sticky top-24 max-h-[82vh] overflow-y-auto pr-2 custom-scrollbar hidden lg:block bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 shadow-sm">
        <div class="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800 text-xs font-black uppercase tracking-wider text-slate-400">
          <i class="fa-solid fa-list-ul text-emerald-500"></i>
          <span>Daftar Bab Panduan (24)</span>
        </div>
        <nav class="space-y-1 text-xs" id="sidebar-toc">
          ${parsed.toc.map((t, idx) => `
            <a href="#${t.id}" class="toc-link block py-2 px-3 rounded-xl font-semibold text-slate-600 dark:text-slate-400 hover:bg-emerald-50 dark:hover:bg-slate-800/80 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors leading-snug">
              <span class="font-bold text-slate-400 mr-1.5">${idx + 1}.</span> ${t.title.replace(/^BAB \d+ — /i, '')}
            </a>
          `).join('')}
        </nav>
      </aside>

      <!-- RIGHT COLUMN: MAIN DOCUMENT CONTENT -->
      <main class="lg:col-span-8 xl:col-span-9 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-sm print-shadow-none" id="manual-content-body">
        <div class="mb-8 p-6 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-transparent border border-emerald-500/20">
          <div class="flex items-center gap-3 mb-2">
            <span class="px-3 py-1 rounded-full bg-emerald-500 text-white font-black text-xs shadow-xs">RESMI</span>
            <span class="text-xs font-bold text-slate-500">Sistem Kasir &amp; Toko Online Terpadu</span>
          </div>
          <p class="text-sm font-semibold text-slate-700 dark:text-slate-300">
            Panduan komprehensif ini mencakup 24 bab panduan operasional praktis bebas istilah rumit komputer, mencakup SOP kasir, audit fisik stok, cetak struk Bluetooth, retur RMA, PayLater, dan keamanan PIN member 6-digit.
          </p>
        </div>

        <div class="prose max-w-none text-slate-800 dark:text-slate-200 leading-relaxed">
          ${parsed.html}
        </div>
      </main>

    </div>
  </div>

  <!-- FLOATING BACK TO TOP BUTTON -->
  <button onclick="window.scrollTo({top: 0, behavior: 'smooth'})" id="btn-back-to-top" class="no-print fixed bottom-6 right-6 w-11 h-11 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-600/30 transition-all cursor-pointer z-40 active:scale-95" title="Kembali ke Atas">
    <i class="fa-solid fa-arrow-up"></i>
  </button>

  <script>
    function toggleDarkMode() {
      const html = document.documentElement;
      if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      } else {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }
    }

    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    function filterManual(query) {
      const q = (query || '').toLowerCase().trim();
      const headings = document.querySelectorAll('main h2, main h3');
      const tocLinks = document.querySelectorAll('#sidebar-toc a');

      tocLinks.forEach(link => {
        const text = link.innerText.toLowerCase();
        if (!q || text.includes(q)) {
          link.classList.remove('hidden');
        } else {
          link.classList.add('hidden');
        }
      });
    }
  </script>
</body>
</html>
`;

fs.writeFileSync(htmlPath, fullHtml, 'utf8');
console.log('✅ Berhasil mengompilasi: DOCS_SAAS_BISNIS/3_PANDUAN_OPERASIONAL_PEMILIK_TOKO_NON_TEKNIS.html');

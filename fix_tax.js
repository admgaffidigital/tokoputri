const fs = require("fs");
let content = fs.readFileSync("index.html", "utf8");

content = content.replace(
    /let taxActiveTab = 'summary';/g,
    "let taxActiveTab = 'menu';"
);

content = content.replace(
    /window\.switchTaxTab = \(tab\) => \{[\s\S]*?rTaxSubContent\(\);\s*\};/g,
    "window.switchTaxTab = (tab) => {\n      taxActiveTab = tab;\n      window.rTaxRenderShell();\n  };"
);

// We need to replace rTaxRenderShell completely
const oldRenderShellStart = "window.rTaxRenderShell = () => {";
const oldRenderShellEnd = "rTaxSubContent();\n  };";

// We'll replace the block using regex.
const regex = /window\.rTaxRenderShell = \(\) => \{[\s\S]*?<div id="tax-content"><\/div>[\s\S]*?rTaxSubContent\(\);\s*\};/g;

const newShell = `window.rTaxRenderShell = () => {
      const yearOptions = Array.from({length:6}, (_,i) => new Date().getFullYear() - 4 + i);
      const tabs = [
          {k:'summary', l:'Ringkasan PPN', i:'fa-receipt', desc:'Laporan pajak pertambahan nilai'},
          {k:'income', l:'Laba Rugi', i:'fa-chart-pie', desc:'Laporan keuangan laba & rugi'},
          {k:'balance', l:'Neraca', i:'fa-scale-balanced', desc:'Informasi aset & kewajiban'},
          {k:'settings', l:'Pengaturan', i:'fa-gear', desc:'Konfigurasi tarif & data pajak'}
      ];
      
      let headerHTML = '';
      if(taxActiveTab === 'menu') {
           headerHTML = \`
           <div class="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-5">
              \${tabs.map(t => \`
                  <button onclick="switchTaxTab('\${t.k}')" class="flex flex-col items-start gap-3 p-4 sm:p-5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl hover:-translate-y-1 hover:shadow-md hover:border-emerald-300 dark:hover:border-emerald-600 transition-all text-left group">
                      <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-500 flex items-center justify-center text-lg sm:text-xl group-hover:scale-110 transition-transform">
                          <i class="fa-solid \${t.i}"></i>
                      </div>
                      <div>
                          <h4 class="font-black text-slate-800 dark:text-white text-xs sm:text-sm uppercase tracking-widest mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">\${t.l}</h4>
                          <p class="text-[10px] font-medium text-slate-400 leading-tight">\${t.desc}</p>
                      </div>
                  </button>
              \`).join('')}
           </div>
           \`;
      } else {
           const activeTabInfo = tabs.find(t => t.k === taxActiveTab) || tabs[0];
           headerHTML = \`
           <div class="flex flex-wrap items-center justify-between gap-3 mb-5 bg-white dark:bg-slate-800 p-3 sm:p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
               <div class="flex items-center gap-3">
                   <button onclick="switchTaxTab('menu')" class="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-all shrink-0">
                       <i class="fa-solid fa-arrow-left"></i>
                   </button>
                   <div>
                       <h3 class="font-black text-slate-800 dark:text-white text-xs sm:text-sm uppercase tracking-widest leading-none">\${activeTabInfo.l}</h3>
                       <p class="text-[10px] text-slate-400 font-medium mt-1 hidden sm:block">Data Pajak & Keuangan</p>
                   </div>
               </div>
               
               \${taxActiveTab === 'settings' ? '' : \`
               <div class="flex gap-2 items-center">
                  <select id="tax-year-select" onchange="changeTaxYear(this.value)" class="admin-input !py-2 !px-3 text-xs font-bold bg-slate-50 dark:bg-slate-900 w-24 border-slate-200 dark:border-slate-700">
                      \${yearOptions.map(y => \`<option value="\${y}" \${y===taxYear?'selected':''}>\${y}</option>\`).join('')}
                  </select>
                  <select id="tax-month-select" onchange="changeTaxMonth(this.value)" class="admin-input !py-2 !px-3 text-xs font-bold bg-slate-50 dark:bg-slate-900 w-32 sm:w-36 border-slate-200 dark:border-slate-700">
                      <option value="0" \${taxMonth===0?'selected':''}>Setahun Penuh</option>
                      \${MONTH_NAMES.map((n,idx) => \`<option value="\${idx+1}" \${taxMonth===idx+1?'selected':''}>\${n} \${taxYear}</option>\`).join('')}
                  </select>
              </div>
               \`}
           </div>
           \`;
      }
      
      setH('admin-content', \`
          <div class="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800 rounded-2xl p-4 mb-5 flex items-start gap-3">
              <i class="fa-solid fa-triangle-exclamation text-amber-500 mt-0.5"></i>
              <p class="text-[11px] font-bold text-amber-700 dark:text-amber-400 leading-relaxed">Halaman ini adalah <b>alat bantu rekap</b> Omset, PPN, Laba Rugi, dan Neraca dari data transaksi toko. Bukan pengganti konsultan pajak/akuntan — validasi kembali angkanya sebelum digunakan untuk lapor SPT resmi.</p>
          </div>
  
          \${headerHTML}
  
          <div id="tax-content"></div>
      \`);
      rTaxSubContent();
  };`;

content = content.replace(regex, newShell);

fs.writeFileSync("index.html", content, "utf8");
console.log("Replaced tax render shell successfully!");

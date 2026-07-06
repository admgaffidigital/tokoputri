const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const tempoRadio = 
                            <label class='block cursor-pointer relative hidden' id='payment-option-tempo'>
                                <input class='peer sr-only custom-radio' name='payment' onchange='togglePaymentDetails()' type='radio' value='tempo'></i>
                                <div class='border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 p-3.5 rounded-2xl transition-all flex flex-col items-center text-center gap-2 peer-checked:border-pink-500 peer-checked:bg-pink-50 dark:peer-checked:bg-pink-900/20 peer-checked:shadow-[0_0_0_2px_rgba(236,72,153,0.2)] hover:border-pink-300'>
                                    <div class='w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm mb-1'><i class='fa-solid fa-clock-rotate-left text-lg text-slate-400 peer-checked:text-pink-500 transition-colors'></i></div>
                                    <span class='font-black text-[11px] text-slate-600 dark:text-slate-300 peer-checked:text-pink-600 dark:peer-checked:text-pink-400 uppercase tracking-wide'>Tempo VIP</span>
                                </div>
                            </label>
;

// Insert after the cashier radio button
html = html.replace(/(<label class='block cursor-pointer relative hidden' id='payment-option-cashier'>[\s\S]*?<\/label>\s*<\/div>)/, '\n' + tempoRadio);

// wait, the tempoRadio is inside the div if we append after the cashier label.
// No, the regex captured the closing </div> of the grid! Let's be precise.
html = html.replace(/(id='payment-option-cashier'>[\s\S]*?<\/label>)/, '\n' + tempoRadio);

const detailTempo = 
                        <div class='mt-4 pt-4 border-t border-slate-100 dark:border-slate-700 hidden' id='detail-tempo'>
                            <div class='bg-pink-50 dark:bg-pink-900/10 p-5 rounded-2xl border border-pink-200 dark:border-pink-800/30 flex flex-col'>
                                <p class='text-[10px] text-pink-600 dark:text-pink-400 mb-3 font-bold uppercase tracking-widest flex items-center gap-1.5'><i class="fa-solid fa-crown text-amber-500"></i> Khusus Pelanggan VIP</p>
                                <div class="flex items-center justify-between gap-3 mb-4 bg-white dark:bg-slate-800 rounded-xl p-3 shadow-inner border border-slate-100 dark:border-slate-700">
                                    <span class="text-[11px] font-black text-slate-700 dark:text-slate-300 uppercase tracking-widest">Down Payment (DP)</span>
                                    <div class="relative flex items-center">
                                        <span class="absolute left-3 text-xs font-black text-slate-400">Rp</span>
                                        <input type="number" id="tempo-dp-input" oninput="calculateTempoBalance()" class="w-32 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 rounded-lg py-2 pl-8 pr-3 text-sm font-black text-right outline-none focus:border-pink-400 transition-colors" placeholder="0" min="0">
                                    </div>
                                </div>
                                <div class="flex items-center justify-between px-1 mb-2">
                                    <span class="text-[11px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">Sisa Tagihan</span>
                                    <span class="text-sm font-black text-rose-500" id="tempo-balance-display">Rp 0</span>
                                </div>
                                <div class="mt-2 bg-white/60 dark:bg-slate-800/60 p-3 rounded-xl">
                                    <p class="text-[9px] font-bold text-slate-500 dark:text-slate-400 leading-relaxed"><i class="fa-solid fa-circle-info mr-1 text-blue-400"></i>Maksimal pelunasan adalah 30 hari. Keterlambatan akan dikenakan denda sebesar 1% dari sisa tagihan per hari.</p>
                                </div>
                            </div>
                        </div>
;

// Insert detail-tempo after detail-qris
html = html.replace(/(<div class='mt-4 pt-4 border-t border-slate-100 dark:border-slate-700 hidden' id='detail-qris'>[\s\S]*?<\/div>\s*<\/div>)/, '\n' + detailTempo);

fs.writeFileSync('index.html', html, 'utf8');

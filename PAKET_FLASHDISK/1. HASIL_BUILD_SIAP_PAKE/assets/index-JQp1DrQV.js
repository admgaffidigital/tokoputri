import{f as _e}from"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";import{p as Xt}from"./vendor-utils-Bszxp-Ae.js";import{d as C,g as ea,u as ta,h as aa,a as yt,t as sa,b as kt,i as oa,l as mt,c as ra,s as ia,e as na,f as la,j as ut,k as Ve,m as da,A as Mt,n as ca,o as ft,p as pa,q as Pt,r as ma,v as ua,w as fa}from"./module-admin-CDtNpjqg.js";import{e as n,O as B,a as m,g as L,c as E,i as O,f as D,ah as w,h as y,j as p,ai as W,aj as Y,ak as se,al as V,am as oe,an as v,y as Z,d as N,a1 as at,ac as We,b as Ee,a2 as me,P as J,Q as F,ao as U,ap as Be,s as Tt,m as Q,aq as At,k as b,a5 as Oe,a0 as st,l as St,x as z,I as Dt,B as ot,K as Ct,D as ze,C as Je,_ as wa,ar as ba,as as ga,q as xa,a9 as ha,ab as va,aa as ya,ad as ka,at as Ma,au as Pa,av as Ta,w as Aa,aw as Sa,L as Da,E as Ca,M as $a,G as La,N as Ra,H as Ea,z as Ia,ax as Fa,A as _a,ay as Na,az as Ba,aA as Oa,v as ja,o as qa,u as Ua,p as Ga,aB as Ka,aC as Ha,aD as Va,t as Qa,r as Wa,aE as za,S as Ja,R as Ya,U as Za,T as Xa,W as es,V as ts,a4 as as,Z as ss,ae as os,a6 as rs,$ as is,a3 as ns,aF as ls,a8 as ds,a7 as cs,Y as ps,X as ms,aG as us,aH as fs,af as ws,ag as bs,aI as gs,aJ as xs,aK as hs,aL as vs,aM as ys}from"./module-print-gYWGiX83.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=a(o);fetch(o.href,r)}})();let je="https://script.google.com/macros/s/AKfycbx3dW9rHcdoKNYjSOJ8PoH2k6fABe7XlBD9teNHsBlCBqJquq8jd4UvnfXZVsfKdFsC/exec";const $t=()=>{n("voucher-input");const e=(B("voucher-input")||"").toUpperCase().trim(),t=(m.vouchers||[]).find(o=>(o.code||"").toUpperCase()===e);L("voucher-msg-container");const a=typeof window.getEffP=="function"?window.getEffP:o=>o.effectivePrice||o.price||0,s=E.reduce((o,r)=>o+(parseFloat(a(r))||0)*(parseFloat(r.qty)||0),0);if(t){let o=!0;t.targetProduct&&t.targetProduct!==""&&(o=E.some(r=>r&&String(r.id)===String(t.targetProduct))),t.targetProduct&&t.targetProduct!==""&&!o?(W(null),O("voucher-msg",'<i class="fa-solid fa-box mr-1"></i> Khusus Produk Tertentu!'),n("voucher-msg")&&(n("voucher-msg").className="text-sm font-bold text-rose-500 dark:text-rose-400")):t.minPurchase&&parseFloat(t.minPurchase)>0&&s<parseFloat(t.minPurchase)?(W(null),O("voucher-msg",`<i class="fa-solid fa-circle-exclamation mr-1"></i> Minimal belanja ${D(t.minPurchase)}`),n("voucher-msg")&&(n("voucher-msg").className="text-sm font-bold text-amber-500 dark:text-amber-400")):t.type&&t.type.includes("shipping")&&w.deliveryMethod!=="delivery"?(W(null),O("voucher-msg",'<i class="fa-solid fa-motorcycle mr-1"></i> Khusus pesanan dikirim kurir!'),n("voucher-msg")&&(n("voucher-msg").className="text-sm font-bold text-rose-500 dark:text-rose-400")):(W(t),O("voucher-msg",'<i class="fa-solid fa-check-circle mr-1"></i> Voucher Diterapkan!'),n("voucher-msg")&&(n("voucher-msg").className="text-sm font-bold text-[var(--color-primary)]"))}else e===""?(W(null),y("voucher-msg-container"),typeof window.rPay=="function"&&window.rPay()):(W(null),O("voucher-msg",'<i class="fa-solid fa-times-circle mr-1"></i> Kode Tidak Valid'),n("voucher-msg")&&(n("voucher-msg").className="text-sm font-bold text-rose-500 dark:text-rose-400"));typeof window.rPay=="function"&&window.rPay()},ks=()=>{let e=document.getElementById("voucher-modal");e||(e=document.createElement("div"),e.id="voucher-modal",e.className="fixed inset-0 z-[115] bg-slate-900/80 flex items-end sm:items-center justify-center p-0 sm:p-5",e.onclick=s=>{s.target===e&&rt()},document.body.appendChild(e));const t=(m.vouchers||[]).filter(s=>s.isShow!==!1&&s.isShow!=="false"),a=t.length?t.map(s=>{let o="";s.type==="percent"?o=`Diskon ${s.value}%`:s.type==="shipping_free"?o="Gratis Ongkir":s.type==="shipping_flat"?o=`Diskon Ongkir ${D(s.value)}`:o=`Potongan ${D(s.value)}`;const r=s.minPurchase&&parseFloat(s.minPurchase)>0?`Min. belanja ${D(s.minPurchase)}`:"Tanpa minimal belanja";return`
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 hover:border-[var(--color-primary)] transition-all shadow-xs">
            <div class="flex items-start gap-3.5 min-w-0">
                <div class="w-11 h-11 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center text-lg shrink-0 shadow-sm mt-0.5">
                    <i class="fa-solid fa-ticket"></i>
                </div>
                <div class="min-w-0">
                    <div class="flex flex-wrap items-center gap-2 mb-1.5">
                        <span class="font-extrabold text-sm font-mono tracking-wider text-slate-800 dark:text-white bg-white dark:bg-slate-900 px-2.5 py-0.5 rounded-lg border border-slate-200 dark:border-slate-700 select-all">${p(s.code)}</span>
                        <span class="primary-bg text-white text-[10px] font-bold px-2 py-0.5 rounded-md uppercase whitespace-nowrap shadow-2xs">${o}</span>
                    </div>
                    <p class="text-[11px] font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1.5"><i class="fa-solid fa-circle-check text-[var(--color-primary)] text-xs"></i> ${r}</p>
                </div>
            </div>
            <div class="flex items-center gap-2 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-200 dark:border-slate-700">
                <button type="button" onclick="copyVoucherCode('${p(s.code)}')" class="flex-1 md:flex-initial bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] text-xs font-bold uppercase tracking-wider px-3.5 py-2 rounded-xl transition-all active:scale-95 flex items-center justify-center gap-1.5 shadow-2xs">
                    <i class="fa-regular fa-copy"></i> Salin
                </button>
                <button type="button" onclick="useVoucherCode('${p(s.code)}')" class="flex-1 md:flex-initial primary-bg text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-xl transition-all active:scale-95 flex items-center justify-center gap-1.5 shadow-sm">
                    Gunakan <i class="fa-solid fa-arrow-right text-[10px]"></i>
                </button>
            </div>
        </div>`}).join(""):`
        <div class="p-8 text-center">
            <div class="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 mx-auto mb-3">
                <i class="fa-solid fa-ticket text-2xl"></i>
            </div>
            <p class="text-sm font-bold text-slate-800 dark:text-white mb-1">Belum Ada Kupon Promo</p>
            <p class="text-xs text-slate-500 dark:text-slate-400">Saat ini belum ada promo aktif. Silakan cek kembali nanti!</p>
        </div>
    `;e.innerHTML=`
        <div class="bg-white dark:bg-slate-900 w-full max-w-lg rounded-t-3xl sm:rounded-2xl max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-700">
            <div class="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0">
                <h3 class="font-bold text-slate-800 dark:text-white text-base flex items-center gap-2">
                    <i class="fa-solid fa-ticket text-[var(--color-primary)]"></i> Kupon &amp; Voucher Promo
                </h3>
                <button onclick="closeVoucherModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-rose-100 hover:text-rose-500 flex items-center justify-center transition-all">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div class="p-5 sm:p-6 overflow-y-auto flex-1 space-y-3.5">
                ${a}
            </div>
        </div>`,e.style.opacity="0",e.style.display="flex",requestAnimationFrame(()=>{e.style.transition="opacity 0.25s ease",e.style.opacity="1"}),typeof window.pushModalHistory=="function"&&window.pushModalHistory("voucher")},Ms=e=>{navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(e).then(()=>{typeof window.showToast=="function"&&window.showToast(`✅ Kode "${e}" disalin ke clipboard!`)}).catch(()=>{typeof window.showToast=="function"&&window.showToast(`Kode Kupon: ${e}`)}):typeof window.showToast=="function"&&window.showToast(`Kode Kupon: ${e}`)},Ps=e=>{rt();const t=n("voucher-input");t&&(t.value=e,$t()),E.length>0?typeof window.changeView=="function"&&window.changeView("view-checkout"):(typeof window.showToast=="function"&&window.showToast(`Kode "${e}" siap digunakan saat checkout belanja!`),typeof window.changeView=="function"&&window.changeView("view-catalog"))},rt=()=>{const e=document.getElementById("voucher-modal");!e||e.style.display==="none"||(e.style.opacity="0",e.style.transition="opacity 0.25s ease",setTimeout(()=>{e.style.display="none",e.style.opacity="",e.style.transition=""},250))};window.applyVoucher=$t;window.openVoucherModal=ks;window.closeVoucherModal=rt;window.copyVoucherCode=Ms;window.useVoucherCode=Ps;const ee=new Map,Ts=3*60*1e3,As="https://lh3.googleusercontent.com/d/1KHwsV5sK6aAH3-eP_vTJA4tE5MyRukLo",Ss=e=>{if(!e){ee.clear();return}const t=e.toString().replace(/\D/g,"");let a=t,s=t.startsWith("0")?"62"+t.substring(1):t.startsWith("62")?t:"62"+t,o=t.startsWith("62")?"0"+t.substring(2):t;ee.delete(t),ee.delete(a),ee.delete(s),ee.delete(o)},Me=async(e,t="")=>{try{let a=(e||"").toString().replace(/\D/g,"");if(a.startsWith("0")?a="62"+a.substring(1):a.startsWith("62")||(a="62"+a),!a||a.length<9)return null;let s=[];try{const u=localStorage.getItem("freshmart_my_orders");u&&(s=JSON.parse(u)||[])}catch{}if(!s.length)return null;let o=0;const r=s.find(u=>u.finalMemberPoints!==void 0&&u.finalMemberPoints!==null);if(r?o=Math.max(0,parseFloat(r.finalMemberPoints)||0):o=s.reduce((u,h)=>u+(parseFloat(h.pointsEarned)||0),0),o<=0)return null;const i=C.collection("freshmart").doc("cms_data").collection("customers").doc(a),l=t||V&&V.name||"Pelanggan Setia",d={id:a,phone:a,name:l,points:o,updatedAt:new Date().toISOString(),lastOrderAt:new Date().toISOString()};try{await i.set(d,{merge:!0})}catch(u){console.warn("[reconcilePointsFromOrders] Firestore set error:",u)}Y(d);try{localStorage.setItem("freshmart_current_member",JSON.stringify(d)),localStorage.setItem("freshmart_member_wa",a)}catch{}return ee.set(a,{data:d,timestamp:Date.now()}),document.getElementById("member-modal-body")&&xe(),d}catch(a){return console.warn("[reconcilePointsFromOrders] Error:",a),null}},qe=(e=0)=>{const t=Math.max(0,parseFloat(e)||0);return t>=1e3?{level:4,name:"PLATINUM VIP",badge:"💎 PLATINUM VIP",icon:"fa-gem",gradient:"from-slate-950 via-zinc-900 to-neutral-950 border-amber-400/40 text-amber-200",cardBg:"linear-gradient(135deg, #090d16 0%, #171f30 45%, #0d1322 75%, #050811 100%)",accentBg:"bg-amber-400/20",accentText:"text-amber-300",accentBorder:"border-amber-400/40",chipBorder:"#f59e0b",foilClass:"gold-foil-text",nextTier:null,ptsNeeded:0,progress:100,perks:["Cashback & Poin Belanja Maksimal (2x Lipat)","Akses Prioritas Antrean Kasir & Pengiriman","Klaim Semua Hadiah Katalog VIP","Layanan Konsultasi Khusus via WhatsApp"]}:t>=500?{level:3,name:"GOLD MEMBER",badge:"🥇 GOLD MEMBER",icon:"fa-crown",gradient:"from-amber-600 via-yellow-600 to-amber-700 border-yellow-300/40 text-yellow-100",cardBg:"linear-gradient(135deg, #78350f 0%, #b45309 35%, #d97706 70%, #92400e 100%)",accentBg:"bg-yellow-400/20",accentText:"text-amber-200",accentBorder:"border-yellow-300/40",chipBorder:"#fde047",foilClass:"gold-foil-text",nextTier:"Platinum VIP",ptsNeeded:1e3-t,progress:Math.min(100,Math.round((t-500)/500*100)),perks:["Diskon & Promo Spesial Member Gold","Kumpulkan Poin di Setiap Transaksi","Tukar Hadiah Menarik dari Katalog","Prioritas Penyiapan Pesanan"]}:t>=100?{level:2,name:"SILVER MEMBER",badge:"🥈 SILVER MEMBER",icon:"fa-medal",gradient:"from-slate-700 via-slate-600 to-slate-800 border-slate-300/40 text-slate-100",cardBg:"linear-gradient(135deg, #1e293b 0%, #334155 40%, #475569 70%, #0f172a 100%)",accentBg:"bg-slate-200/20",accentText:"text-slate-100",accentBorder:"border-slate-300/40",chipBorder:"#cbd5e1",foilClass:"silver-foil-text",nextTier:"Gold Member",ptsNeeded:500-t,progress:Math.min(100,Math.round((t-100)/400*100)),perks:["Kumpulkan Poin di Setiap Transaksi","Tukar Hadiah Langsung Tanpa Undian","Penawaran Diskon Tertentu"]}:{level:1,name:"BRONZE MEMBER",badge:"🥉 BRONZE MEMBER",icon:"fa-award",gradient:"from-stone-800 via-amber-950 to-stone-900 border-orange-400/30 text-orange-200",cardBg:"linear-gradient(135deg, #381a10 0%, #632917 40%, #7c2d12 70%, #292524 100%)",accentBg:"bg-orange-500/20",accentText:"text-orange-200",accentBorder:"border-orange-400/40",chipBorder:"#fb923c",foilClass:"bronze-foil-text",nextTier:"Silver Member",ptsNeeded:100-t,progress:Math.min(100,Math.round(t/100*100)),perks:["Kumpulkan Poin di Setiap Transaksi Belanja","Akses Penuh ke Katalog Hadiah Toko"]}},Lt=e=>{let t=(e||"").toString().replace(/\D/g,"");for(t.startsWith("62")?t=t.substring(2):t.startsWith("0")&&(t=t.substring(1));t.length<8;)t+="0";const a=[];for(let s=0;s<t.length&&a.length<3;s+=4)a.push(t.substring(s,s+4));return`PUTRI • ${a.join(" • ")}`},Rt=e=>{const t=String(e||"812345678901").replace(/\D/g,"");let a="",s=8;a+=`<rect x="${s}" y="3" width="2.5" height="34" fill="#0f172a"/>`,s+=4,a+=`<rect x="${s}" y="3" width="1.5" height="34" fill="#0f172a"/>`,s+=3.5,a+=`<rect x="${s}" y="3" width="3" height="34" fill="#0f172a"/>`,s+=5;for(let o=0;o<t.length;o++){const r=parseInt(t[o],10)||0,i=(r%3+1)*1.3,l=((r+2)%4+1)*1.1,d=(r%2+1)*1.8;a+=`<rect x="${s}" y="3" width="${i}" height="34" fill="#0f172a"/>`,s+=i+d,a+=`<rect x="${s}" y="3" width="${l}" height="34" fill="#0f172a"/>`,s+=l+2}return a+=`<rect x="${s}" y="3" width="3" height="34" fill="#0f172a"/>`,s+=5,a+=`<rect x="${s}" y="3" width="1.5" height="34" fill="#0f172a"/>`,s+=3.5,a+=`<rect x="${s}" y="3" width="2.5" height="34" fill="#0f172a"/>`,s+=4,`
    <svg class="w-full h-11 bg-white rounded-lg px-2 py-1 shadow-inner border border-slate-200" viewBox="0 0 ${Math.max(s+10,240)} 40" xmlns="http://www.w3.org/2000/svg">
        ${a}
    </svg>`},wt=e=>{const t=parseFloat(e?.points)||0,a=qe(t),s=(m.store?.name||"Toko Putri").toUpperCase(),o=m.store?.logo&&m.store.logo!=="fa-store"?m.store.logo:As,r=(e?.name||"PELANGGAN SETIA").toUpperCase(),i=(e?.phone||"81234567890").toString().replace(/\D/g,""),l=Lt(i),d=m.store?.wa||i;return`
    <div class="member-card-scene w-full max-w-[390px] mx-auto select-none my-1">
        <div id="member-card-inner" class="member-card-inner relative w-full aspect-[1.586/1] cursor-pointer rounded-2xl sm:rounded-3xl border border-black/10 dark:border-white/10" onclick="flipMemberCard()" title="Klik untuk membalik kartu">
            
            <!-- ================= SISI DEPAN (FRONT CARD) ================= -->
            <div id="member-card-front-export" class="member-card-front rounded-2xl sm:rounded-3xl overflow-hidden p-4 sm:p-5 flex flex-col justify-between text-white border border-white/20" style="background: ${a.cardBg};">
                
                <!-- Ambient luxury light reflections (clean subtle overlay, zero blur spilling) -->
                <div class="absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-white/15 pointer-events-none"></div>

                <!-- Header Kartu: Logo Toko, Nama Toko, & Gelombang Contactless -->
                <div class="relative z-10 flex items-center justify-between">
                    <div class="flex items-center gap-2.5 min-w-0">
                        <div class="w-8 h-8 rounded-xl bg-white/95 p-1 flex items-center justify-center shadow-2xs shrink-0 border border-white/40">
                            <img src="${p(o)}" alt="Logo" class="w-full h-full object-contain" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                            <i class="fa-solid fa-store text-slate-800 text-xs hidden"></i>
                        </div>
                        <div class="min-w-0">
                            <h4 class="text-[11px] sm:text-xs font-black tracking-wider text-white uppercase truncate">${p(s)}</h4>
                            <p class="text-[8px] sm:text-[9px] font-bold tracking-[0.2em] text-white/80 uppercase">VIP Loyalty Pass</p>
                        </div>
                    </div>
                    <!-- Contactless NFC & Tier Pill -->
                    <div class="flex items-center gap-2 shrink-0">
                        <span class="text-[8px] sm:text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${a.accentBg} ${a.accentText} border ${a.accentBorder}">
                            ${a.badge}
                        </span>
                        <div class="opacity-80 flex items-center" title="Contactless Member">
                            <svg class="w-4 h-4 text-white/90" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                                <path d="M8.5 16.5a5 5 0 0 1 0-7"/>
                                <path d="M12 19a8.5 8.5 0 0 1 0-12"/>
                                <path d="M15.5 21.5a12 12 0 0 1 0-17"/>
                            </svg>
                        </div>
                    </div>
                </div>

                <!-- Bagian Tengah: Smart Chip EMV Emas & Hologram Seal -->
                <div class="relative z-10 flex items-center justify-between my-auto py-1">
                    <!-- EMV Smart Chip (SVG) -->
                    <div class="flex items-center gap-3">
                        <svg class="w-11 h-8 rounded-md border border-amber-300/60 bg-gradient-to-br from-amber-200 via-amber-400 to-yellow-600 p-0.5 shrink-0" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1" y="1" width="48" height="38" rx="5" fill="url(#chipGrad)" stroke="#b45309" stroke-width="0.8"/>
                            <path d="M1 13H18M1 27H18M32 13H49M32 27H49M18 1V39M32 1V39M18 20H32" stroke="#78350f" stroke-width="1" stroke-linecap="round"/>
                            <rect x="21" y="14" width="8" height="12" rx="2" fill="#d97706" stroke="#78350f" stroke-width="0.8"/>
                            <defs>
                                <linearGradient id="chipGrad" x1="0" y1="0" x2="50" y2="40" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#fef08a"/>
                                    <stop offset="0.5" stop-color="#f59e0b"/>
                                    <stop offset="1" stop-color="#b45309"/>
                                </linearGradient>
                            </defs>
                        </svg>
                        <div class="w-7 h-7 rounded-full card-hologram-seal opacity-75 border border-white/30 hidden sm:block" title="Security Seal"></div>
                    </div>
                    <!-- Poin Saldo Member -->
                    <div class="text-right">
                        <p class="text-[8px] sm:text-[9px] font-bold tracking-widest text-white/70 uppercase">Saldo Poin</p>
                        <div class="flex items-center justify-end gap-1.5 mt-0.5">
                            <i class="fa-solid fa-star text-amber-300 text-xs sm:text-sm animate-pulse"></i>
                            <span class="text-base sm:text-xl font-black tracking-tight text-white">${t}</span>
                            <span class="text-[9px] font-bold text-white/80">PTS</span>
                        </div>
                    </div>
                </div>

                <!-- Bagian Bawah: Nomor Kartu & Nama Pelanggan Embossed -->
                <div class="relative z-10">
                    <p class="text-[11px] sm:text-[13px] embossed-text text-white/95 font-mono tracking-[0.18em] mb-1.5">${p(l)}</p>
                    <div class="flex items-end justify-between gap-2">
                        <div class="min-w-0 flex-1">
                            <p class="text-[7px] sm:text-[8px] font-bold tracking-widest text-white/70 uppercase leading-none mb-0.5">Nama Pelanggan</p>
                            <p class="text-[11px] sm:text-[13px] font-bold text-white tracking-wider truncate uppercase">${p(r)}</p>
                        </div>
                        <div class="text-right shrink-0">
                            <p class="text-[7px] sm:text-[8px] font-bold tracking-widest text-white/70 uppercase leading-none mb-0.5">Status Member</p>
                            <p class="text-[9px] sm:text-[10px] font-extrabold text-emerald-300 tracking-wider flex items-center justify-end gap-1">
                                <i class="fa-solid fa-circle-check text-[8px]"></i> AKTIF
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Petunjuk Balik Kartu -->
                <div class="absolute bottom-1 right-3 text-[7px] text-white/40 tracking-wider font-semibold pointer-events-none flex items-center gap-1">
                    <i class="fa-solid fa-repeat text-[6px]"></i> Klik untuk balik
                </div>
            </div>

            <!-- ================= SISI BELAKANG (BACK CARD) ================= -->
            <div class="member-card-back rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col justify-between text-slate-800 border border-slate-700/60 bg-[#0f172a]">
                
                <!-- Pita Magnetik Hitam (Magnetic Stripe) -->
                <div class="w-full h-8 sm:h-10 bg-slate-950 mt-4 border-y border-white/10 relative">
                    <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
                </div>

                <!-- Signature Strip & Keamanan -->
                <div class="px-4 sm:px-5 py-1">
                    <div class="flex items-center gap-2">
                        <div class="flex-1 h-6 bg-white/90 rounded border border-slate-300 px-2 flex items-center justify-between">
                            <span class="text-[9px] font-mono font-bold text-slate-500 italic truncate">${p(r)}</span>
                            <span class="text-[8px] font-mono font-black text-slate-800 tracking-widest">VERIFIED</span>
                        </div>
                        <div class="w-10 h-6 bg-amber-400 text-slate-950 font-black text-[9px] rounded flex items-center justify-center tracking-widest">
                            VIP
                        </div>
                    </div>

                    <!-- Barcode untuk Scanner Kasir Toko -->
                    <div class="mt-2 text-center">
                        <p class="text-[8px] font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center justify-center gap-1">
                            <i class="fa-solid fa-barcode text-amber-400"></i> Scan Barcode di Kasir POS Toko:
                        </p>
                        ${Rt(i)}
                        <p class="text-[9px] font-mono font-bold tracking-[0.2em] text-slate-300 mt-1">*${p(i)}*</p>
                    </div>
                </div>

                <!-- Footer Sisi Belakang: Kontak & Info -->
                <div class="p-3 sm:p-4 bg-slate-950/80 border-t border-white/10 text-center">
                    <p class="text-[7.5px] sm:text-[8px] text-slate-400 leading-tight">
                        Kartu member digital resmi <b class="text-white">${p(s)}</b>. Tunjukkan saat transaksi untuk poin belanja.
                    </p>
                    <p class="text-[8px] font-bold text-amber-300 mt-0.5">
                        <i class="fa-brands fa-whatsapp mr-1"></i>CS: +${p(d)}
                    </p>
                </div>
            </div>

        </div>
    </div>`},Ds=()=>{const e=document.getElementById("member-card-inner");e&&e.classList.toggle("is-flipped")},Cs=async()=>{const e=document.getElementById("member-card-inner");e&&e.classList.contains("is-flipped")&&(e.classList.remove("is-flipped"),await new Promise(a=>setTimeout(a,450)));const t=document.getElementById("member-card-front-export");if(t){typeof window.showToast=="function"&&window.showToast("Menyiapkan file gambar Kartu Member HD...");try{if(typeof window.ensureScriptLoaded=="function"&&await window.ensureScriptLoaded("https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js",()=>typeof html2canvas<"u"),typeof html2canvas>"u")throw new Error("Modul html2canvas belum siap dimuat.");const a=await html2canvas(t,{scale:3,useCORS:!0,allowTaint:!0,backgroundColor:null}),o=`Kartu_Member_TokoPutri_${(V?.name||"Pelanggan").replace(/[^a-zA-Z0-9]/g,"_")}.png`,r=a.toDataURL("image/png",1);if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function")window.AndroidNativeApp.saveOrShareFile(r,o,"image/png");else{const i=document.createElement("a");i.download=o,i.href=r,document.body.appendChild(i),i.click(),document.body.removeChild(i)}typeof window.showToast=="function"&&window.showToast("Kartu Member Berhasil Disimpan ke Galeri! 🎉")}catch(a){console.error("Gagal menyimpan kartu member:",a),typeof window.showToast=="function"&&window.showToast("Gagal menyimpan kartu. Silakan coba kembali.")}}},$s=()=>{const e=n("reward-catalog-container");if(!e)return;const t=m.store.showRewardCatalog!==!1&&m.store.showRewardCatalog!=="false";t&&typeof window.attachRewardsRealtime=="function"&&!window.unsubRewardsRealtime&&window.attachRewardsRealtime();const a=(m.rewards||[]).filter(o=>o.isActive!=="false"&&o.isActive!==!1);if(!t||a.length===0){e.classList.add("hidden"),e.innerHTML="";return}e.classList.remove("hidden");let s=`
    <div class="flex items-center justify-between mb-2.5">
        <h3 class="font-bold text-slate-800 dark:text-white text-xs sm:text-sm tracking-tight flex items-center gap-2">
            <div class="w-7 h-7 rounded-lg bg-[var(--color-primary)] flex items-center justify-center text-white shadow-2xs">
                <i class="fa-solid fa-gift text-xs"></i>
            </div> KATALOG HADIAH POIN PELANGGAN
        </h3>
        <button type="button" onclick="if(typeof window.openMemberModal==='function') window.openMemberModal(); else if(typeof window.showToast==='function') window.showToast('Gunakan poin Anda untuk menukar hadiah menarik!');" class="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg border border-[var(--color-primary)]/30 text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all active:scale-95 flex items-center gap-1 cursor-pointer">
            Lihat Kartu Member <i class="fa-solid fa-chevron-right text-[8px]"></i>
        </button>
    </div>
    <div class="flex gap-2.5 sm:gap-3 overflow-x-auto hide-scrollbar snap-x pb-3 pt-1">
        ${a.map(o=>`
            <div class="w-[115px] sm:w-[130px] shrink-0 snap-start relative group cursor-pointer active:scale-95 transition-all duration-200" onclick="if(typeof window.openMemberModal==='function') window.openMemberModal(); else if(typeof window.showToast==='function') window.showToast('Tukarkan hadiah ini saat checkout menggunakan poin belanja Anda!');">
                <div class="w-full bg-[var(--color-primary)] rounded-xl shadow-xs hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 flex flex-col relative overflow-hidden border border-white/20 text-white p-1.5">
                    <div class="absolute -right-3 -top-3 w-16 h-16 bg-white/20 rounded-full blur-lg pointer-events-none"></div>
                    <div class="absolute bottom-8 -left-2.5 w-4 h-4 rounded-full bg-[#f1f5f9] dark:bg-[#0b1121] border-r border-white/20 z-20 pointer-events-none transition-colors duration-300 shadow-inner"></div>
                    <div class="absolute bottom-8 -right-2.5 w-4 h-4 rounded-full bg-[#f1f5f9] dark:bg-[#0b1121] border-l border-white/20 z-20 pointer-events-none transition-colors duration-300 shadow-inner"></div>
                    <div class="absolute bottom-10 left-1.5 right-1.5 border-t border-dashed border-white/30 z-10 pointer-events-none"></div>
                    <div class="w-full aspect-square rounded-lg bg-white flex items-center justify-center overflow-hidden relative shadow-inner z-0 p-1.5">
                        <img loading="lazy" src="${p(o.img)}" alt="${p(o.name)}" class="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105" onerror="this.onerror=null;this.src='https://placehold.co/400?text=Hadiah'">
                        <div class="absolute top-1 left-1 bg-rose-500 text-white text-[7px] sm:text-[8px] font-bold px-1.5 py-0.5 rounded-md shadow-2xs uppercase tracking-wider"><i class="fa-solid fa-gift mr-0.5"></i>Gratis</div>
                        <div class="absolute top-1 right-1 bg-[var(--color-primary)] text-white text-[7px] sm:text-[8px] font-bold px-1.5 py-0.5 rounded-md shadow-2xs border border-white/20">${parseFloat(o.pointsCost||o.pointsRequired)||0} Poin</div>
                    </div>
                    <div class="w-full h-3.5 shrink-0"></div>
                    <div class="h-7 w-full px-0.5 flex flex-col justify-center items-center relative z-0 shrink-0 mb-0.5">
                        <h4 class="text-[9px] sm:text-[10px] font-bold text-white leading-tight line-clamp-2 uppercase tracking-wider text-center drop-shadow-xs">${p(o.name)}</h4>
                    </div>
                </div>
            </div>`).join("")}
    </div>`;e.innerHTML=s};let bt=null;const Ls=()=>{clearTimeout(bt),bt=setTimeout(async()=>{const t=(window.normalizeWA||(r=>(r||"").replace(/\D/g,"").replace(/^0/,"62")))(B("cust-wa")),a=n("member-status-banner");if(!a)return;if(!t||t.length<10){y(a),y("payment-option-tempo"),Y(null),se(null);return}const s=r=>{const i=parseFloat(r.points)||0,l=qe(i);a.className="mt-3 p-3 sm:p-4 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white border border-amber-400/40 shadow-xl relative overflow-hidden flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3",a.innerHTML=`
                <div class="absolute -right-6 -bottom-6 w-28 h-28 bg-amber-400/10 rounded-full blur-xl pointer-events-none"></div>
                <div class="flex items-center gap-3 relative z-10 min-w-0">
                    <div class="w-12 h-10 rounded-xl bg-gradient-to-br from-amber-400/20 to-yellow-600/20 border border-amber-400/40 flex items-center justify-center shrink-0 shadow-inner">
                        <i class="fa-solid fa-id-card text-xl text-amber-300"></i>
                    </div>
                    <div class="min-w-0">
                        <div class="flex items-center gap-2 flex-wrap">
                            <span class="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full ${l.accentBg} ${l.accentText} border ${l.accentBorder}">${l.badge}</span>
                            <span class="text-[10px] font-bold text-amber-300 flex items-center gap-1"><i class="fa-solid fa-star text-[9px]"></i>${i} Poin</span>
                        </div>
                        <p class="text-xs font-bold text-white mt-0.5 truncate flex items-center gap-1.5">
                            <span>${p(r.name||"Pelanggan")}</span>
                            <span class="text-[9px] font-normal text-slate-400">(Member Resmi)</span>
                        </p>
                    </div>
                </div>
                <button type="button" onclick="openMemberModal()" class="relative z-10 w-full sm:w-auto shrink-0 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 text-[10px] font-black uppercase tracking-wider px-3.5 py-2.5 rounded-xl shadow-md active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer">
                    <i class="fa-solid fa-wallet"></i> Buka Kartu Member
                </button>`,L(a),L("payment-option-tempo")},o=ee.get(t);if(o&&Date.now()-o.timestamp<Ts){o.data?(Y(o.data),s(o.data)):(Y(null),se(null),y(a),y("payment-option-tempo"));return}try{const r=await C.collection("freshmart").doc("cms_data").collection("customers").doc(t).get();if(r.exists){const i=r.data();ee.set(t,{data:i,timestamp:Date.now()}),Y(i),s(i)}else{const i=await Me(t,B("cust-name"));if(i){ee.set(t,{data:i,timestamp:Date.now()}),Y(i),s(i);return}ee.set(t,{data:null,timestamp:Date.now()}),Y(null),se(null),y(a),y("payment-option-tempo")}}catch{}},500)},Rs=()=>{if(!V)try{const s=localStorage.getItem("freshmart_current_member");if(s){const o=JSON.parse(s);o&&(o.id||o.phone||o.name)&&Y(o)}}catch{}const e=V?.phone||V?.id||localStorage.getItem("freshmart_member_wa");if(e){let s=e.toString().replace(/\D/g,"");s.startsWith("0")?s="62"+s.substring(1):s.startsWith("62")||(s="62"+s),C.collection("freshmart").doc("cms_data").collection("customers").doc(s).get().then(async o=>{if(o.exists){let r=o.data();if((parseFloat(r.points)||0)===0){const l=await Me(s,r.name);l&&(r=l)}ee.set(s,{data:r,timestamp:Date.now()}),Y(r);try{localStorage.setItem("freshmart_current_member",JSON.stringify(r)),localStorage.setItem("freshmart_member_wa",s)}catch{}document.getElementById("member-modal-body")&&xe()}else await Me(s,V?.name)}).catch(()=>{})}typeof window.attachRewardsRealtime=="function"&&!window.unsubRewardsRealtime&&window.attachRewardsRealtime();let t=document.getElementById("member-modal");t||(t=document.createElement("div"),t.id="member-modal",t.className="fixed inset-0 z-[115] bg-slate-900/60 flex items-end sm:items-center justify-center p-0 sm:p-5 backdrop-blur-xs",t.onclick=s=>{s.target===t&&Et()},document.body.appendChild(t));const a=t.style.display!=="none"&&t.style.opacity==="1";t.innerHTML=`
        <div class="bg-white dark:bg-slate-900 w-full max-w-lg rounded-t-3xl sm:rounded-3xl max-h-[90vh] flex flex-col shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
            <!-- Header Modal -->
            <div class="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
                <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white shadow-sm">
                        <i class="fa-solid fa-id-card text-xs"></i>
                    </div>
                    <div>
                        <h3 class="font-bold text-slate-800 dark:text-white text-sm sm:text-base leading-tight">Kartu Member Digital</h3>
                        <p class="text-[9px] sm:text-[10px] font-semibold text-slate-400">Loyalty Pass &amp; Poin Hadiah Toko Putri</p>
                    </div>
                </div>
                <button onclick="closeMemberModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-rose-100 hover:text-rose-500 flex items-center justify-center transition-all cursor-pointer">
                    <i class="fa-solid fa-xmark text-sm"></i>
                </button>
            </div>
            <!-- Body Modal -->
            <div class="p-4 sm:p-6 overflow-y-auto flex-1 space-y-5" id="member-modal-body"></div>
        </div>`,xe(),t.style.opacity="0",t.style.display="flex",requestAnimationFrame(()=>{t.style.transition="opacity 0.25s ease",t.style.opacity="1"}),!a&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("member")},xe=()=>{const e=(m.rewards||[]).filter(o=>o.isActive!=="false"&&o.isActive!==!1),t=V&&parseFloat(V.points)||0,a=qe(t),s=e.length?e.map(o=>{const r=(parseFloat(o.stock)||0)>0,i=V&&t>=(parseFloat(o.pointsCost)||0)&&r,l=oe&&oe.id===o.id;return`
        <div class="flex items-center gap-3 p-3.5 rounded-2xl border ${l?"border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] shadow-xs":"border-slate-200 dark:border-slate-700/80 bg-slate-50/70 dark:bg-slate-800/40"} transition-all">
            ${o.img?`<img src="${p(o.img)}" class="w-14 h-14 rounded-xl object-contain bg-white p-1 border border-slate-200 dark:border-slate-700 shrink-0" onerror="this.style.display='none'" loading="lazy">`:'<div class="w-14 h-14 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-300 shrink-0"><i class="fa-solid fa-gift text-xl"></i></div>'}
            <div class="min-w-0 flex-1">
                <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${p(o.name)}</p>
                <p class="text-[11px] font-black text-amber-500 dark:text-amber-400 mt-0.5 flex items-center gap-1">
                    <i class="fa-solid fa-star text-[10px]"></i> ${parseFloat(o.pointsCost)||0} Poin
                </p>
                ${r?"":'<p class="text-[10px] font-bold text-rose-500 mt-0.5">Stok hadiah habis</p>'}
            </div>
            ${V?l?'<button type="button" onclick="deselectReward()" class="shrink-0 bg-rose-500 hover:bg-rose-600 text-white text-[10px] font-bold uppercase px-3 py-2 rounded-xl active:scale-95 transition-all whitespace-nowrap shadow-xs">Batal</button>':`<button type="button" ${i?"":"disabled"} onclick="selectReward(${o.id})" class="shrink-0 ${i?"primary-bg hover:opacity-90 text-white active:scale-95 shadow-xs":"bg-slate-200 dark:bg-slate-700 text-slate-400 cursor-not-allowed"} text-[10px] font-bold uppercase px-3 py-2 rounded-xl transition-all whitespace-nowrap">Pilih Hadiah</button>`:`<span class="text-[10px] font-bold text-slate-400 uppercase bg-slate-100 dark:bg-slate-800 px-2.5 py-1.5 rounded-lg">${parseFloat(o.pointsCost)||0} Poin</span>`}
        </div>`}).join(""):'<p class="text-[11px] font-bold text-slate-400 text-center py-3">Belum ada program hadiah yang tersedia.</p>';V?O("member-modal-body",`
            <!-- KARTU MEMBER DIGITAL (3D INTERAKTIF) -->
            <div>
                ${wt(V)}
                
                <!-- Action Controls: Balik Kartu, Unduh Kartu & Tutup -->
                <div class="flex items-center justify-between gap-2 mt-3 max-w-[390px] mx-auto">
                    <button type="button" onclick="flipMemberCard()" class="flex-1 py-2.5 px-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-slate-100 dark:hover:bg-slate-700 active:scale-95 transition-all shadow-xs cursor-pointer">
                        <i class="fa-solid fa-repeat text-[11px] text-amber-500"></i> Balik Kartu
                    </button>
                    <button type="button" onclick="downloadMemberCard()" class="flex-1 py-2.5 px-3 rounded-xl border border-amber-400/50 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-bold flex items-center justify-center gap-1.5 hover:opacity-95 active:scale-95 transition-all shadow-xs cursor-pointer">
                        <i class="fa-solid fa-download text-[11px]"></i> Simpan ke Galeri
                    </button>
                    <button type="button" onclick="closeMemberModal()" class="py-2.5 px-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-white text-xs font-bold flex items-center justify-center gap-1 active:scale-95 transition-all cursor-pointer" title="Tutup">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <div class="text-center mt-2">
                    <button type="button" onclick="setCurrentMember(null); try{localStorage.removeItem('freshmart_current_member');localStorage.removeItem('freshmart_member_wa');}catch(e){} rMemberModalBody();" class="text-[10px] text-slate-400 hover:text-[var(--color-primary)] font-semibold transition-colors cursor-pointer">
                        <i class="fa-solid fa-user-pen mr-1"></i>Bukan Anda? Cek nomor WhatsApp lain
                    </button>
                </div>
            </div>

            <!-- TIER STATUS & PROGRESS LEVEL -->
            <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 space-y-3">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Level Keanggotaan</p>
                        <h4 class="text-xs sm:text-sm font-black text-slate-800 dark:text-white flex items-center gap-1.5 mt-0.5">
                            <i class="fa-solid ${a.icon} text-amber-500"></i> ${a.name}
                        </h4>
                    </div>
                    <div class="text-right">
                        <p class="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Total Saldo</p>
                        <p class="text-xs sm:text-sm font-black text-amber-500 dark:text-amber-400 mt-0.5">${t} Poin</p>
                    </div>
                </div>

                ${a.nextTier?`
                <div class="space-y-1.5 pt-1">
                    <div class="flex justify-between text-[10px] font-semibold text-slate-500 dark:text-slate-400">
                        <span>Menuju <b>${a.nextTier}</b></span>
                        <span class="font-bold text-slate-700 dark:text-slate-200">${a.progress}%</span>
                    </div>
                    <div class="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                        <div class="h-full rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 transition-all duration-500" style="width: ${a.progress}%"></div>
                    </div>
                    <p class="text-[9px] text-slate-500 dark:text-slate-400 font-medium">
                        Kumpulkan <b>${a.ptsNeeded} poin lagi</b> untuk otomatis naik tingkat ke <b>${a.nextTier}</b>!
                    </p>
                </div>`:`
                <p class="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                    <i class="fa-solid fa-crown"></i> Anda telah mencapai level member tertinggi Toko Putri!
                </p>`}

                <!-- Member Privileges Pill -->
                <div class="pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Hak Istimewa Member Anda:</p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        ${a.perks.map(o=>`
                        <div class="flex items-center gap-1.5 text-[10px] font-semibold text-slate-700 dark:text-slate-300">
                            <i class="fa-solid fa-check text-emerald-500 text-[9px] shrink-0"></i>
                            <span class="truncate">${p(o)}</span>
                        </div>`).join("")}
                    </div>
                </div>
            </div>

            <!-- KATALOG REWARD / PENUKARAN HADIAH -->
            <div>
                <p class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2.5">Katalog Hadiah yang Dapat Ditukar</p>
                <div class="space-y-2.5">${s}</div>
            </div>

            ${oe?`<div class="bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] border border-[var(--color-primary)]/30 rounded-xl p-3.5 text-[11px] font-bold text-[var(--color-primary)] flex items-center gap-2"><i class="fa-solid fa-gift text-base shrink-0"></i><span>Hadiah "<b>${p(oe.name)}</b>" telah dipilih dan akan otomatis diproses saat pesanan Anda selesai di checkout.</span></div>`:""}
        `):O("member-modal-body",`
            <!-- PREVIEW KARTU CONTOH (MEMIKAT PELANGGAN) -->
            <div class="opacity-90">
                ${wt({name:"NAMA ANDA",phone:"81234567890",points:0})}
            </div>

            <!-- FORM PENCARIAN / CEK KARTU MEMBER -->
            <div class="p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 space-y-3">
                <div class="flex items-center gap-2 text-slate-800 dark:text-white font-bold text-xs sm:text-sm">
                    <div class="w-7 h-7 rounded-xl primary-bg text-white flex items-center justify-center text-xs shrink-0 shadow-2xs">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <span>Cek Kartu Member &amp; Saldo Poin Anda</span>
                </div>
                <p class="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                    Masukkan nomor WhatsApp yang pernah Anda gunakan saat berbelanja di Toko Putri:
                </p>
                <div class="flex gap-2">
                    <div class="relative flex-1">
                        <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">+62</span>
                        <input type="tel" id="member-lookup-input" class="w-full rounded-xl border border-slate-200 bg-white py-3 pl-12 pr-3 text-xs font-bold text-slate-800 outline-none focus:border-[var(--color-primary)] dark:border-slate-700 dark:bg-slate-900 dark:text-white" placeholder="81234567890" inputmode="numeric" />
                    </div>
                    <button type="button" onclick="lookupMemberPoints()" class="primary-bg text-white px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider shrink-0 transition-all active:scale-95 shadow-sm cursor-pointer">
                        Cek Kartu
                    </button>
                </div>
                <div id="member-lookup-result" class="hidden text-xs font-bold mt-2"></div>
            </div>

            <!-- KEUNTUNGAN MENJADI MEMBER -->
            <div class="p-4 rounded-2xl border border-amber-400/30 bg-amber-50/50 dark:bg-amber-950/20 text-xs space-y-2">
                <h4 class="font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
                    <i class="fa-solid fa-sparkles text-amber-500"></i> Keuntungan Menjadi Member Toko Putri:
                </h4>
                <ul class="text-[11px] text-slate-600 dark:text-slate-300 space-y-1 list-disc pl-4">
                    <li>Otomatis terdaftar menjadi member pada pesanan pertama Anda.</li>
                    <li>Kumpulkan poin di setiap transaksi belanja untuk ditukar hadiah gratis.</li>
                    <li>Mendapatkan kartu digital eksklusif yang bisa disimpan di galeri ponsel.</li>
                </ul>
            </div>

            <!-- KATALOG HADIAH -->
            <div>
                <p class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2.5">Katalog Hadiah yang Dapat Ditukar</p>
                <div class="space-y-2.5">${s}</div>
            </div>
        `)},Es=async()=>{const e=document.getElementById("member-lookup-input"),t=document.getElementById("member-lookup-result");if(!e||!t)return;let a=e.value.replace(/\D/g,"");if(!a||a.length<9){t.className="text-xs font-bold text-rose-500 p-2.5 bg-rose-50 dark:bg-rose-900/20 rounded-xl",t.textContent="Masukkan minimal 9 digit nomor WhatsApp!",t.classList.remove("hidden");return}a.startsWith("0")?a="62"+a.substring(1):a.startsWith("62")||(a="62"+a),t.className="text-xs font-bold text-[var(--color-primary)] p-2.5 primary-bg-soft rounded-xl",t.textContent="Memuat data kartu member...",t.classList.remove("hidden");try{const s=await C.collection("freshmart").doc("cms_data").collection("customers").doc(a).get();if(s.exists){let o=s.data();if((parseFloat(o.points)||0)===0){const r=await Me(a,o.name);r&&(o=r)}ee.set(a,{data:o,timestamp:Date.now()}),Y(o);try{localStorage.setItem("freshmart_current_member",JSON.stringify(o)),localStorage.setItem("freshmart_member_wa",a)}catch{}xe(),typeof window.showToast=="function"&&window.showToast(`Selamat datang kembali, ${o.name||"Pelanggan"}! 💳`)}else{const o=await Me(a);if(o){xe(),typeof window.showToast=="function"&&window.showToast(`Kartu Member berhasil diaktifkan dengan ${o.points} poin! 🎉`);return}t.className="text-xs font-bold text-amber-700 dark:text-amber-300 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-xl leading-relaxed border border-amber-200 dark:border-amber-800/40",t.innerHTML=`<i class="fa-solid fa-circle-info mr-1 text-amber-500"></i> Nomor <b>+${p(a)}</b> belum terdaftar. Lakukan pesanan pertama Anda untuk otomatis mengumpulkan poin dan mendapatkan Kartu Member VIP!`}}catch{t.className="text-xs font-bold text-rose-500 p-2.5 bg-rose-50 dark:bg-rose-900/20 rounded-xl",t.textContent="Gagal mengecek data. Silakan periksa koneksi internet Anda."}},Is=e=>{const t=(m.rewards||[]).find(s=>s.id===e);if(!t)return;if((parseFloat(V?.points)||0)<(parseFloat(t.pointsCost)||0)){typeof window.showToast=="function"&&window.showToast("Poin Anda belum cukup untuk hadiah ini!");return}if((parseFloat(t.stock)||0)<=0){typeof window.showToast=="function"&&window.showToast("Maaf, stok hadiah ini sedang kosong!");return}se({id:t.id,name:t.name,pointsCost:parseFloat(t.pointsCost)||0}),xe(),typeof window.showToast=="function"&&window.showToast(`Hadiah "${t.name}" dipilih! Lanjutkan checkout untuk menukarnya.`)},Fs=()=>{se(null),xe()},Et=(e=!1)=>{const t=document.getElementById("member-modal");if(!t||t.style.display==="none")return;const a=()=>{t.style.opacity="0",t.style.transition="opacity 0.25s ease",setTimeout(()=>{t.style.display="none",t.style.opacity="",t.style.transition=""},250)};typeof window.requestCloseModal=="function"?window.requestCloseModal("member",e,a):a()};window.renderRewardCatalog=$s;window.checkMemberStatus=Ls;window.openMemberModal=Rs;window.rMemberModalBody=xe;window.lookupMemberPoints=Es;window.selectReward=Is;window.deselectReward=Fs;window.closeMemberModal=Et;window.flipMemberCard=Ds;window.downloadMemberCard=Cs;window.getMemberTier=qe;window.formatMemberCardNumber=Lt;window.generateBarcodeSVG=Rt;window.setCurrentMember=Y;window.invalidateMemberCache=Ss;window.reconcilePointsFromOrders=Me;const _s=()=>{if(m.store.isDeliveryEnabled===!1&&m.store.isPickupEnabled===!1){typeof window.showToast=="function"&&window.showToast("Toko tutup!");return}const e=B("cust-name"),t=(document.querySelector('input[name="delivery-method"]:checked')||{}).value;if(!e||!t){typeof window.showToast=="function"&&window.showToast("Lengkapi form nama!");return}let a=B("cust-wa").replace(/\D/g,"");if(!a||a.length<9){typeof window.showToast=="function"&&window.showToast("Nomor WhatsApp wajib diisi! (min. 9 digit)");return}if(a.startsWith("0")?a="62"+a.substring(1):a.startsWith("62")||(a="62"+a),w.name=e,w.deliveryMethod=t,w.note=B("cust-note"),w.wa=a,t==="delivery"){if(w.address=B("cust-address"),!w.lat||!w.lng){const o=n("cust-maps-input")?.value;o&&typeof window.handleCustomerMapsInput=="function"&&window.handleCustomerMapsInput(o)}if(!w.address||!w.lat||!w.lng){typeof window.showToast=="function"&&window.showToast("Alamat & GPS wajib!");return}const s=typeof window.getDist=="function"?window.getDist:()=>0;w.distance=s(parseFloat(m.store.lat||0),parseFloat(m.store.lng||0),w.lat,w.lng)||0}else w.address="Ambil di Toko",w.distance=0;v&&v.type&&v.type.includes("shipping")&&t!=="delivery"&&W(null),n("voucher-input")&&!v&&(n("voucher-input").value="",y("voucher-msg-container")),typeof window.changeView=="function"&&window.changeView("view-payment")},it=()=>{Z("address-container","hidden",(document.querySelector('input[name="delivery-method"]:checked')||{}).value==="pickup")},It=()=>{const e=n("tnc-checkbox"),t=n("btn-process-order");!e||!t||(e.checked?t.classList.remove("btn-disabled"):t.classList.add("btn-disabled"))},Ft=()=>{if(!E.length){typeof window.showToast=="function"&&window.showToast("Keranjang belanja kosong!"),typeof window.changeView=="function"&&window.changeView("view-catalog",!0);return}if(!w.name){typeof window.showToast=="function"&&window.showToast("Lengkapi data pengiriman terlebih dahulu!"),typeof window.changeView=="function"&&window.changeView("view-checkout",!0);return}const e=typeof window.getEffP=="function"?window.getEffP:x=>x.price||0,t=E.reduce((x,S)=>x+(parseFloat(e(S))||0)*(parseFloat(S.qty)||0),0);let a=0,s=0,o=0;if(w.deliveryMethod==="delivery"&&(a=Math.ceil((parseFloat(w.distance)||0)*(parseFloat(m.store.costPerKm)||0)/500)*500),v&&(v.minPurchase&&parseFloat(v.minPurchase)>0&&t<parseFloat(v.minPurchase)?(W(null),y("voucher-msg-container"),typeof window.showToast=="function"&&window.showToast(`Voucher dibatalkan (min. belanja ${D(v.minPurchase)})`)):v.targetProduct&&!E.some(x=>x.id===parseInt(v.targetProduct))&&(W(null),y("voucher-msg-container"),typeof window.showToast=="function"&&window.showToast("Voucher dibatalkan (produk khusus dihapus)"))),v){let x=t;if(v.targetProduct&&v.targetProduct!==""){const S=parseInt(v.targetProduct);x=E.filter(we=>we.id===S).reduce((we,de)=>we+(parseFloat(e(de))||0)*(parseFloat(de.qty)||0),0)}if(v.type==="shipping_free")s=a;else if(v.type==="shipping_flat")s=parseFloat(v.value)||0;else if(v.type==="percent"){let S=x*((parseFloat(v.value)||0)/100);v.maxDiscount&&parseFloat(v.maxDiscount)>0&&(S=Math.min(S,parseFloat(v.maxDiscount))),o=S}else o=parseFloat(v.value)||0,o=Math.min(o,x)}const r=(m.store.freeShippingMinSpendEnabled===!0||m.store.freeShippingMinSpendEnabled==="true")&&(parseFloat(m.store.freeShippingMinSpendAmount)||0)>0&&t>=(parseFloat(m.store.freeShippingMinSpendAmount)||0)&&w.deliveryMethod==="delivery";r&&(s=a),s=Math.min(s,a),o=Math.min(o,t);const i=Math.max(0,t-o+(a-s)),d=(typeof window.calcTaxDetails=="function"?window.calcTaxDetails:()=>({ppnEnabled:!1,ppnAmount:0,grandTotalAdd:0}))(i),c=d.ppnAmount,u=i+d.grandTotalAdd;N("summary-subtotal",D(t)),Z("summary-shipping-row","hidden",w.deliveryMethod!=="delivery");const h=n("summary-discount-row");if(h)if(o>0||s>0){h.classList.remove("hidden");let x="";o>0&&(x+=`<div class="flex justify-between items-center w-full mt-1.5"><p class="text-xs font-bold text-slate-500">Diskon Promo</p><p class="text-[13px] font-bold text-rose-500">-${D(o)}</p></div>`),s>0&&(x+=`<div class="flex justify-between items-center w-full mt-1.5"><p class="text-xs font-bold text-slate-500">${r?"Gratis Ongkir (Promo Belanja)":"Diskon Ongkir"}</p><p class="text-[13px] font-bold text-rose-500">-${D(s)}</p></div>`),h.innerHTML=x}else h.classList.add("hidden");w.deliveryMethod==="delivery"&&(N("summary-shipping",D(a)),N("summary-distance",`(${w.distance.toFixed(1)}km)`)),N("summary-total",D(u)),n("btn-total-preview")&&N("btn-total-preview",D(u));const P=n("summary-ppn-row");P&&(d.ppnEnabled&&c>0?(P.classList.remove("hidden"),d.ppnType==="inclusive"?(N("summary-ppn-label",`Termasuk PPN (${d.ppnRate}%)`),N("summary-ppn",D(c))):(N("summary-ppn-label",`PPN (${d.ppnRate}%)`),N("summary-ppn",`+${D(c)}`))):P.classList.add("hidden")),N("payment-cust-name",w.name||"-"),n("payment-cust-wa")&&(n("payment-cust-wa").textContent=w.wa?"+"+w.wa:"-"),N("payment-cust-method",w.deliveryMethod==="delivery"?`Dikirim (${w.distance.toFixed(1)}km)`:"Ambil di Toko"),N("payment-cust-address",w.address||"-"),O("payment-items-preview",E.map(x=>{const S=x.variantName?`<span class="bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-1.5 py-0.5 rounded-lg text-[9px] font-bold">${p(x.variantName)}</span>`:"",le=x.poTime?`<span class="amber-badge px-1.5 py-0.5 rounded-lg text-[8px] font-bold uppercase">PO ${p(x.poTime)}</span>`:"";return`
        <div class="flex justify-between items-center bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm min-w-0">
            <div class="flex items-center gap-3.5 min-w-0">
                <img loading="lazy" src="${p(x.img)}" alt="${p(x.name)}" class="w-12 h-12 rounded-xl object-cover border border-slate-200 dark:border-slate-700 shrink-0" onerror="this.onerror=null;this.src='https://placehold.co/400?text=No+Image'">
                <div class="min-w-0">
                    <p class="text-sm font-bold text-slate-800 dark:text-white truncate mb-1" title="${p(x.name)}">${p(x.name)}</p>
                    ${x.variantName||x.poTime?`
                    <div class="flex flex-wrap gap-1 mb-1">
                        ${S}
                        ${le}
                    </div>`:""}
                    <p class="text-[11px] text-[var(--color-primary)] font-bold">${parseFloat(x.qty)} ${p(x.unit||"pcs")} x ${D(e(x))}</p>
                </div>
            </div>
            <div class="text-sm font-bold text-slate-900 dark:text-white whitespace-nowrap ml-3 shrink-0">${D(e(x)*parseFloat(x.qty))}</div>
        </div>`}).join("")+(oe?`<div class="flex justify-between items-center bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] p-4 rounded-2xl border border-[var(--color-primary)]/30 shadow-sm min-w-0"><div class="flex items-center gap-3.5 min-w-0"><div class="w-12 h-12 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center shrink-0"><i class="fa-solid fa-gift"></i></div><div class="min-w-0"><p class="text-sm font-bold text-[var(--color-primary)] truncate">${p(oe.name)}</p><p class="text-[11px] text-[var(--color-primary)] font-bold mt-1"><i class="fa-solid fa-star mr-1"></i>Tukar ${oe.pointsCost} Poin (Gratis)</p></div></div><button type="button" onclick="if(typeof deselectReward==='function') deselectReward(); rPay();" class="text-[10px] font-bold text-rose-500 uppercase shrink-0 ml-3">Batal</button></div>`:"")),w.note?(N("payment-note-text",`"${p(w.note)}"`),L("payment-note-preview")):y("payment-note-preview"),O("dynamic-banks-container",m.banks?.length?m.banks.map(x=>`<div class="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm"><p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Bank ${p(x.bankName)}</p><p class="text-lg font-bold text-[var(--color-primary)] tracking-wide">${p(x.bankAccount)}</p><p class="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1.5">a.n <span class="font-bold text-slate-700 dark:text-white">${p(x.bankOwner)}</span></p></div>`).join(""):'<div class="bg-rose-50 dark:bg-rose-900/20 border border-rose-200 p-4 rounded-2xl text-center"><p class="text-sm text-rose-500 dark:text-rose-400 font-bold">Rekening belum diatur.</p></div>');const T=n("payment-option-cashier"),H=n("payment-option-cod");if(T&&H){if(w.deliveryMethod==="pickup"){if(L("payment-option-cashier"),y("payment-option-cod"),(document.querySelector('input[name="payment"]:checked')||{}).value==="cod"){const x=document.querySelector('input[value="cashier"]');x&&(x.checked=!0)}}else{y("payment-option-cashier"),L("payment-option-cod");const x=(document.querySelector('input[name="payment"]:checked')||{}).value;if(x==="cashier"||!x){const S=document.querySelector('input[value="cod"]');S&&(S.checked=!0)}}typeof window.togglePaymentDetails=="function"&&window.togglePaymentDetails()}const I=n("tnc-checkbox");I&&(I.checked=!1,It())},Ns=async()=>{if(!n("tnc-checkbox").checked||at)return;if(window.isAdm){typeof window.showToast=="function"&&window.showToast("Anda login sebagai Seller. Logout dulu untuk membuat pesanan.");return}const e=We("freshmart_last_order");if(e&&Date.now()-parseInt(e)<6e4){typeof window.showToast=="function"&&window.showToast("Tunggu 1 menit untuk pesanan baru!");return}const t=typeof window.getEffP=="function"?window.getEffP:r=>r.price||0,a=typeof window.getEffHpp=="function"?window.getEffHpp:()=>0,s=typeof window.getEffPoin=="function"?window.getEffPoin:()=>0;let o=!1;if(E.forEach(r=>{const i=m.products.find(d=>d.id===r.id);if(!i)return;const l=r.variantName?((i.variants||[]).find(d=>d.name===r.variantName)||{}).price??i.price:i.price;l!==void 0&&Math.abs(r.price-l)>1&&(r.price=l,o=!0),r.poin=s(r)}),o){Ee("freshmart_cart",JSON.stringify(E)),typeof window.renderCart=="function"&&window.renderCart(),Ft(),typeof window.showToast=="function"&&window.showToast("Harga produk telah diperbarui. Periksa kembali sebelum order.");return}me(!0),J("Proses Pesanan...");try{const r=E.reduce((g,A)=>g+(parseFloat(t(A))||0)*(parseFloat(A.qty)||0),0);let i=0,l=0,d=0;w.deliveryMethod==="delivery"&&(i=Math.ceil((parseFloat(w.distance)||0)*(parseFloat(m.store.costPerKm)||0)/500)*500);const c=m.store.useStock===!0||m.store.useStock==="true";if(c)for(const g of E){const A=m.products.find(k=>k.id===g.id);if(!A)continue;const G=parseFloat(g.qty)||0;if(g.variantName){const k=(A.variants||[]).find(_=>_.name===g.variantName),R=parseFloat(k&&k.stock!==void 0?k.stock:0);if(R<G){me(!1),F(),typeof window.showToast=="function"&&window.showToast(`Stok ${g.name} (${g.variantName}) tidak cukup! Sisa: ${R}`);return}}else{const k=parseFloat(A.stock!==void 0?A.stock:0);if(k<G){me(!1),F(),typeof window.showToast=="function"&&window.showToast(`Stok ${g.name} tidak cukup! Sisa: ${k}`);return}}}if(v){let g=r;if(v.targetProduct&&v.targetProduct!==""){const A=parseInt(v.targetProduct);g=E.filter(k=>k.id===A).reduce((k,R)=>k+(parseFloat(t(R))||0)*(parseFloat(R.qty)||0),0)}if(v.minPurchase&&parseFloat(v.minPurchase)>0&&r<parseFloat(v.minPurchase))W(null);else if(v.targetProduct&&v.targetProduct!==""&&g===0)W(null);else if(v.type&&v.type.includes("shipping")&&w.deliveryMethod!=="delivery")W(null);else if(v.type==="shipping_free")l=i;else if(v.type==="shipping_flat")l=parseFloat(v.value)||0;else if(v.type==="percent"){let A=g*((parseFloat(v.value)||0)/100);v.maxDiscount&&parseFloat(v.maxDiscount)>0&&(A=Math.min(A,parseFloat(v.maxDiscount))),d=A}else d=parseFloat(v.value)||0,d=Math.min(d,g)}const u=(m.store.freeShippingMinSpendEnabled===!0||m.store.freeShippingMinSpendEnabled==="true")&&(parseFloat(m.store.freeShippingMinSpendAmount)||0)>0&&r>=(parseFloat(m.store.freeShippingMinSpendAmount)||0)&&w.deliveryMethod==="delivery";u&&(l=i),l=Math.min(l,i),d=Math.min(d,r);const h=Math.max(0,r-d+(i-l)),T=(typeof window.calcTaxDetails=="function"?window.calcTaxDetails:()=>({ppnEnabled:!1,ppnAmount:0,grandTotalAdd:0}))(h),H=T.ppnAmount,I=T.dppAmount,x=h+T.grandTotalAdd,S=(document.querySelector('input[name="payment"]:checked')||{}).value,le=S==="transfer"||S==="qris"||S==="tempo",we=window.buktiGDriveUploaded&&window.buktiPaymentUrl&&!window.buktiPaymentUrl.startsWith("data:");if(le&&!we){if(me(!1),F(),!window.buktiPaymentFile){typeof window.showToast=="function"&&window.showToast("Upload bukti pembayaran terlebih dahulu!");return}typeof window.showToast=="function"&&window.showToast("Tunggu upload Google Drive selesai, atau coba lagi!");return}const de="ORD-"+Date.now().toString(36).toUpperCase()+"-"+Math.random().toString(36).substring(2,6).toUpperCase();if(window.buktiPaymentFile&&!window.buktiGDriveUploaded)try{J("Upload Bukti ke Google Drive...");const g=await window.uploadBuktiToFirebase(window.buktiPaymentFile,de);if(g&&!g.startsWith("data:"))window.buktiPaymentUrl=g,window.buktiGDriveUploaded=!0;else{me(!1),F(),typeof window.showToast=="function"&&window.showToast("❌ Upload bukti ke Google Drive gagal. Coba pilih gambar lagi!");return}J("Proses Pesanan...")}catch{me(!1),F(),typeof window.showToast=="function"&&window.showToast("❌ Gagal upload bukti. Periksa koneksi dan coba lagi!");return}const f={orderId:de,timestamp:_e.firestore.FieldValue.serverTimestamp(),dateString:new Date().toISOString(),customer:w,items:E.map(g=>({...g,qty:parseFloat(g.qty),effectivePrice:t(g),poTime:g.poTime||"",hpp:a(g),poin:s(g)})),payment:{method:S,subtotal:r,shippingCost:i,shippingDiscount:l,productDiscount:d,ppnAmount:H,dppAmount:I,ppnRate:T.ppnEnabled?T.ppnRate:0,ppnType:T.ppnEnabled?T.ppnType:"exclusive",grandTotal:x,isFreeShippingPromo:u||!1},status:"Baru",buktiPayment:window.buktiPaymentUrl||null};if(S==="tempo"){const g=document.getElementById("tempo-dp-input");let A=g&&parseFloat(g.value)||0;A>x&&(A=x),f.payment.tempoDp=A,f.payment.tempoBalance=x-A,f.payment.tempoDueDate=Date.now()+30*24*60*60*1e3,f.payment.paymentStatus="hutang"}const j=C.collection("freshmart_orders").doc(de),ce=typeof window.calculateCartPoints=="function"?window.calculateCartPoints(E,m.store):{totalPoints:0,directPoints:0,spendPoints:0},pe=ce.totalPoints;f.pointsEarned=pe,f.pointsBreakdown={direct:ce.directPoints,spend:ce.spendPoints};const De=C.collection("freshmart").doc("cms_data"),te=w.wa?De.collection("customers").doc(w.wa):null,Ce=!!oe;let be=null;if(c){const g={};E.forEach(k=>{const R=k.id!=null?k.id.toString():null;if(!R)return;g[R]||(g[R]={main:0,variants:{}});const _=parseFloat(k.qty)||0;k.variantName?g[R].variants[k.variantName]=(g[R].variants[k.variantName]||0)+_:g[R].main+=_});const A=Object.keys(g),G=A.map(k=>C.collection("freshmart").doc("cms_data").collection("products").doc(k));await C.runTransaction(async k=>{const R=Ce?C.collection("freshmart").doc("cms_data").collection("rewards").doc(oe.id.toString()):null,_=await Promise.all(G.map(q=>k.get(q))),K=te?await k.get(te):null,ae=K&&K.exists&&R?await k.get(R):null,$e=[];if(_.forEach((q,Re)=>{if(!q.exists)return;const ge=q.data(),X=g[A[Re]];if(X.main>0){const $=parseFloat(ge.stock!==void 0?ge.stock:0);$<X.main&&$e.push(`${ge.name} (sisa ${$})`)}Object.keys(X.variants).forEach($=>{const ue=(ge.variants||[]).find(he=>he.name===$),Ae=parseFloat(ue&&ue.stock!==void 0?ue.stock:0);Ae<X.variants[$]&&$e.push(`${ge.name} (${$}, sisa ${Ae})`)})}),$e.length)throw new Error("STOK_TIDAK_CUKUP: "+$e.join(", "));let He=null,Te=null;const pt=K&&K.exists&&parseFloat(K.data().points)||0;let Le=pt;if(Ce){if(!K||!K.exists)throw new Error("MEMBER_TIDAK_DITEMUKAN");if(!ae||!ae.exists)throw new Error("HADIAH_TIDAK_DITEMUKAN");const q=ae.data();if(pt<(parseFloat(q.pointsCost)||0))throw new Error("POIN_TIDAK_CUKUP");if((parseFloat(q.stock)||0)<=0)throw new Error("STOK_HADIAH_HABIS");He=(parseFloat(q.stock)||0)-1,Le-=parseFloat(q.pointsCost)||0,f.claimedReward={id:q.id,name:q.name,pointsCost:parseFloat(q.pointsCost)||0,status:"pending",note:""}}if(Le+=pe,Te=Le,f.pointsEarned=pe,f.customerPhone=w.wa,f.finalMemberPoints=Le,_.forEach((q,Re)=>{if(!q.exists)return;const ge=A[Re],X=g[ge],$=JSON.parse(JSON.stringify(q.data())),ue={};X.main>0&&($.stock=Math.max(0,(parseFloat($.stock)||0)-X.main),ue.stock=$.stock,$.stock===0&&($.isActive="false",ue.isActive="false"),$.totalSold=(parseFloat($.totalSold)||0)+X.main,ue.totalSold=$.totalSold),Object.keys(X.variants).length>0&&$.variants&&(Object.keys(X.variants).forEach(he=>{const ve=($.variants||[]).findIndex(Zt=>Zt.name===he);ve>-1&&($.variants[ve].stock=Math.max(0,(parseFloat($.variants[ve].stock)||0)-X.variants[he]),$.variants[ve].stock===0&&($.variants[ve].isActive=!1),$.variants[ve].totalSold=(parseFloat($.variants[ve].totalSold)||0)+X.variants[he])}),ue.variants=$.variants);const Ae=m.products.findIndex(he=>he.id.toString()===ge);Ae>-1&&(m.products[Ae]=$),k.update(G[Re],ue)}),k.set(j,f),te&&Te!==null){const q={points:Te,name:w.name||(K&&K.exists?K.data().name:"Pelanggan Setia"),lastOrderAt:Date.now()};K&&K.exists?k.set(te,q,{merge:!0}):k.set(te,{id:w.wa,phone:w.wa,name:w.name||"Pelanggan Setia",points:Te,createdAt:Date.now(),lastOrderAt:Date.now(),totalOrders:1},{merge:!0}),be=Te}He!==null&&k.set(R,{stock:He},{merge:!0}),k.update(De,{lastUpdate:_e.firestore.FieldValue.increment(1),updateType:"stock_change",updatedProductIds:A})}),m.lastUpdate=(parseInt(We("freshmart_last_update"))||m.lastUpdate||0)+1,Ee("freshmart_last_update",m.lastUpdate.toString()),Ee("freshmart_products",JSON.stringify(m.products))}else te?await C.runTransaction(async g=>{const A=Ce?C.collection("freshmart").doc("cms_data").collection("rewards").doc(oe.id.toString()):null,G=await g.get(te),k=G.exists&&A?await g.get(A):null,R=G.exists&&parseFloat(G.data().points)||0;let _=R,K=null;if(Ce){if(!G.exists)throw new Error("MEMBER_TIDAK_DITEMUKAN");if(!k||!k.exists)throw new Error("HADIAH_TIDAK_DITEMUKAN");const ae=k.data();if(R<(parseFloat(ae.pointsCost)||0))throw new Error("POIN_TIDAK_CUKUP");if((parseFloat(ae.stock)||0)<=0)throw new Error("STOK_HADIAH_HABIS");K=(parseFloat(ae.stock)||0)-1,_-=parseFloat(ae.pointsCost)||0,f.claimedReward={id:ae.id,name:ae.name,pointsCost:parseFloat(ae.pointsCost)||0,status:"pending",note:""}}_+=pe,memberPointsUpdated=_,f.pointsEarned=pe,f.customerPhone=w.wa,f.finalMemberPoints=_,g.set(j,f),G.exists?g.set(te,{points:_,name:w.name||G.data().name||"Pelanggan Setia",lastOrderAt:Date.now()},{merge:!0}):g.set(te,{id:w.wa,phone:w.wa,name:w.name||"Pelanggan Setia",points:_,createdAt:Date.now(),lastOrderAt:Date.now(),totalOrders:1},{merge:!0}),be=_,K!==null&&g.set(A,{stock:K},{merge:!0})}):await j.set(f);U.unshift({orderId:de,date:new Date().toISOString(),total:x,itemCount:E.reduce((g,A)=>g+parseFloat(A.qty),0),status:"Baru",pointsEarned:f.pointsEarned||0,claimedReward:f.claimedReward||null,finalMemberPoints:be}),Be(U);try{localStorage.setItem("freshmart_my_orders",JSON.stringify(U)),localStorage.setItem("freshmart_last_order",Date.now().toString())}catch{}if(typeof analytics<"u"&&analytics.logEvent("purchase",{transaction_id:de,value:x,currency:"IDR"}),be===null&&(be=pe),w.wa){const g={id:w.wa,phone:w.wa,name:w.name||"Pelanggan Setia",points:be};Y(g);try{localStorage.setItem("freshmart_current_member",JSON.stringify(g)),localStorage.setItem("freshmart_member_wa",w.wa)}catch{}typeof window.invalidateMemberCache=="function"&&window.invalidateMemberCache(w.wa)}if(f.claimedReward&&be!==null)typeof window.showToast=="function"&&window.showToast(`✅ Hadiah "${f.claimedReward.name}" berhasil ditukar! Sisa poin Anda: ${be}`);else{const g=pe>0?` (+${pe} Poin Member didapat!)`:"";typeof window.showToast=="function"&&window.showToast(`✅ Pesanan berhasil dikirim ke admin!${g}`)}setTimeout(()=>{Tt([]),Q("cust-name",""),Q("cust-address",""),Q("cust-maps-input",""),Q("cust-note",""),Q("cust-wa",""),window.buktiPaymentUrl=null,window.buktiPaymentFile=null,window.buktiGDriveUploaded=!1;const g=n("bukti-preview-wrap"),A=n("bukti-placeholder");g&&g.classList.add("hidden"),A&&A.classList.remove("hidden"),y("bukti-uploading"),y("bukti-success"),y("bukti-gdrive-error");const G=n("bukti-file-input");G&&(G.value=""),At({name:"",address:"",lat:null,lng:null,deliveryMethod:"delivery",distance:0,note:"",wa:""}),W(null),se(null);const k=n("member-status-banner");k&&y(k),n("voucher-input")&&(n("voucher-input").value=""),y("voucher-msg-container"),y("location-status"),n("btn-location")&&L("btn-location");const R=document.querySelector('input[name="delivery-method"][value="delivery"]');R&&(R.checked=!0,it());const _=document.querySelector('input[name="payment"][value="transfer"]');_&&(_.checked=!0,typeof window.togglePaymentDetails=="function"&&window.togglePaymentDetails()),typeof window.updCart=="function"&&window.updCart(),typeof window.renderCart=="function"&&window.renderCart(),typeof window.changeView=="function"&&window.changeView("view-catalog"),typeof window.showToast=="function"&&window.showToast("Pesanan Dibuat! 🎉")},2e3)}catch(r){const i=r.message||"Error";i.startsWith("STOK_TIDAK_CUKUP:")?typeof window.showToast=="function"&&window.showToast("Maaf, stok berubah: "+i.replace("STOK_TIDAK_CUKUP: ","")):i==="POIN_TIDAK_CUKUP"?(typeof window.showToast=="function"&&window.showToast("Maaf, poin Anda ternyata tidak cukup untuk hadiah ini. Silakan cek lagi."),se(null)):i==="STOK_HADIAH_HABIS"?(typeof window.showToast=="function"&&window.showToast("Maaf, stok hadiah yang dipilih baru saja habis. Silakan pilih hadiah lain."),se(null)):i==="HADIAH_TIDAK_DITEMUKAN"?(typeof window.showToast=="function"&&window.showToast("Hadiah yang dipilih sudah tidak tersedia. Silakan pilih ulang."),se(null)):i==="MEMBER_TIDAK_DITEMUKAN"?(typeof window.showToast=="function"&&window.showToast("Data member tidak ditemukan, klaim hadiah dibatalkan. Pesanan bisa dicoba lagi tanpa hadiah."),se(null)):typeof window.showToast=="function"&&window.showToast(r.code==="resource-exhausted"?"Quota Server Penuh!":"Gagal proses: "+i)}finally{me(!1),F()}};window.validateAndGoToPayment=_s;window.toggleDeliveryMethod=it;window.toggleOrderButton=It;window.rPay=Ft;window.processOrder=Ns;window.getLocation=()=>{if(!navigator.geolocation)return b("GPS tidak didukung");n("btn-location").innerHTML='<i class="fa-solid fa-spinner fa-spin text-sm"></i>',navigator.geolocation.getCurrentPosition(e=>{w.lat=e.coords.latitude,w.lng=e.coords.longitude,y("btn-location"),L("location-status"),n("location-status").classList.add("flex"),b("GPS Didapatkan")},e=>{n("btn-location").innerHTML='<i class="fa-solid fa-location-crosshairs text-[var(--color-primary)]"></i> Set GPS Maps',b("Gagal akses GPS")},{enableHighAccuracy:!0,timeout:15e3})};window.handleCustomerMapsInput=e=>{const t=typeof window.parseGeoCoordinates=="function"?window.parseGeoCoordinates:null,a=t?t(e):null;if(a){w.lat=parseFloat(a.lat),w.lng=parseFloat(a.lng),y("btn-location"),L("location-status");const s=n("location-status");return s&&(s.classList.add("flex"),s.innerHTML=`
                <i class="fa-solid fa-circle-check shrink-0 text-lg primary-text"></i>
                <div class="min-w-0">
                    <span class="text-[10px] font-bold uppercase leading-tight tracking-wide primary-text block">Koordinat Berhasil Disematkan!</span>
                    <span class="text-[9px] text-slate-500 dark:text-slate-400 font-mono">${a.lat}, ${a.lng}</span>
                </div>
            `),b("Titik lokasi Maps pembeli berhasil disematkan!"),typeof window.rPay=="function"&&window.rPay(),!0}return!1};window.pasteCustomerMapsInput=async()=>{const e=n("cust-maps-input");if(e){try{if(navigator.clipboard&&navigator.clipboard.readText){const t=await navigator.clipboard.readText();if(t){e.value=t,window.handleCustomerMapsInput(t)||b("Format tidak dikenali! Tempel koordinat: Lat, Lng atau link Maps");return}}}catch{}e.focus(),b("Silakan tekan Ctrl+V atau tahan untuk menempel")}};const Bs=()=>{const e=m.store.isDeliveryEnabled!==!1,t=m.store.isPickupEnabled!==!1;Z("delivery-option-container","hidden",!e),Z("pickup-option-container","hidden",!t),Z("no-delivery-warning","hidden",e||t),Z("delivery-methods-grid","hidden",!(e||t));const a=n("btn-checkout-next");if(a)if(e||t){a.removeAttribute("disabled"),a.classList.remove("opacity-50");const o=(w.deliveryMethod||"delivery")==="pickup"&&t?"pickup":e?"delivery":"pickup",r=document.querySelector(`input[value="${o}"]`);r&&(r.checked=!0)}else a.setAttribute("disabled","true"),a.classList.add("opacity-50");it()};window.rChck=Bs;window.buktiPaymentUrl=null;window.buktiPaymentFile=null;window.buktiGDriveUploaded=!1;window.compressImageForUpload=(e,t=1600,a=.82)=>new Promise(s=>{const o=new FileReader;o.readAsDataURL(e),o.onload=r=>{const i=new Image;i.onload=()=>{let{width:l,height:d}=i;(l>t||d>t)&&(l>d?(d=Math.round(d*t/l),l=t):(l=Math.round(l*t/d),d=t));const c=document.createElement("canvas");c.width=l,c.height=d,c.getContext("2d").drawImage(i,0,0,l,d),c.toBlob(u=>{if(!u)return s(e);s(new File([u],e.name,{type:"image/jpeg",lastModified:Date.now()}))},"image/jpeg",a)},i.onerror=()=>s(e),i.src=r.target.result},o.onerror=()=>s(e)});window._doSingleGDriveUpload=async(e,t)=>{const a=new FileReader;return new Promise(s=>{a.readAsDataURL(e),a.onload=async()=>{try{const o=a.result.split(",")[1],r=(e.name||"bukti.jpg").replace(/[^a-zA-Z0-9.]/g,"_"),i={name:"BUKTI_"+t+"_"+Date.now()+"_"+r,mimeType:e.type||"image/jpeg",data:o,token:GAS_SECRET_TOKEN},l=await fetch(GAS_UPLOAD_URL,{method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"text/plain;charset=utf-8"},redirect:"follow"});if(!l.ok)return console.warn("GDrive upload HTTP error:",l.status),s(null);const d=await l.text();let c;try{c=JSON.parse(d)}catch{return console.warn("GDrive response parse error"),s(null)}c&&c.status==="success"&&c.url?s(Oe(c.url)):(console.warn("GDrive upload gagal:",c&&c.message),s(null))}catch(o){console.warn("GDrive upload exception:",o),s(null)}},a.onerror=()=>s(null)})};window.uploadBuktiToGDrive=async(e,t)=>{if(!e)return null;if(!GAS_UPLOAD_URL||GAS_UPLOAD_URL.includes("ISI_DENGAN"))return console.error("GAS_UPLOAD_URL belum dikonfigurasi!"),null;let a=e;try{a=await window.compressImageForUpload(e)}catch{}const s=2,o=3e4;for(let r=1;r<=s;r++){const i=n("bukti-uploading-text");i&&(i.textContent=r>1?`Mencoba ulang ke Google Drive... (${r}/${s})`:"Mengupload ke Google Drive...");try{const l=await Promise.race([window._doSingleGDriveUpload(a,t),new Promise((d,c)=>setTimeout(()=>c(new Error("timeout")),o))]);if(l)return l}catch(l){console.warn(`Percobaan upload ${r} gagal:`,l.message)}r<s&&await new Promise(l=>setTimeout(l,1500*r))}return null};window.handleBuktiUpload=async e=>{const t=e.target.files[0];if(!t)return;if(!t.type.startsWith("image/"))return b("Hanya file gambar yang diizinkan!");if(t.size>5*1024*1024)return b("Ukuran gambar max 5MB!");window.buktiPaymentFile=t,window.buktiPaymentUrl=null,window.buktiGDriveUploaded=!1;const a=new FileReader;a.onload=i=>{const l=n("bukti-preview-img"),d=n("bukti-preview-wrap"),c=n("bukti-placeholder");l&&(l.src=i.target.result),d&&d.classList.remove("hidden"),c&&c.classList.add("hidden")},a.readAsDataURL(t),y("bukti-success"),y("bukti-gdrive-error");const s=n("bukti-uploading");s&&(s.classList.remove("hidden"),s.style.display="flex");const o="TEMP_"+Date.now().toString(36).toUpperCase(),r=await window.uploadBuktiToGDrive(t,o);if(y("bukti-uploading"),r){window.buktiPaymentUrl=r,window.buktiGDriveUploaded=!0;const i=n("bukti-success"),l=n("bukti-success-text"),d=n("bukti-storage-info");l&&(l.textContent="Bukti berhasil disimpan!"),d&&(d.textContent="(tersimpan di Google Drive ✓)"),i&&(i.classList.remove("hidden"),i.style.display="flex"),y("bukti-gdrive-error")}else{window.buktiPaymentUrl=null,window.buktiGDriveUploaded=!1;const i=n("bukti-gdrive-error");i&&(i.classList.remove("hidden"),i.style.display="flex"),y("bukti-success"),b("❌ Upload ke Google Drive gagal. Coba lagi!")}};window.retryBuktiUpload=async()=>{if(!window.buktiPaymentFile)return b("Pilih gambar terlebih dahulu!");y("bukti-gdrive-error"),y("bukti-success");const e=n("bukti-uploading");e&&(e.classList.remove("hidden"),e.style.display="flex");const t="RETRY_"+Date.now().toString(36).toUpperCase(),a=await window.uploadBuktiToGDrive(window.buktiPaymentFile,t);if(y("bukti-uploading"),a){window.buktiPaymentUrl=a,window.buktiGDriveUploaded=!0;const s=n("bukti-success"),o=n("bukti-success-text"),r=n("bukti-storage-info");o&&(o.textContent="Bukti berhasil disimpan!"),r&&(r.textContent="(tersimpan di Google Drive ✓)"),s&&(s.classList.remove("hidden"),s.style.display="flex"),b("✅ Upload berhasil!")}else{const s=n("bukti-gdrive-error");s&&(s.classList.remove("hidden"),s.style.display="flex"),b("❌ Masih gagal. Periksa koneksi internet Anda.")}};window.uploadBuktiToFirebase=async(e,t)=>{if(window.buktiGDriveUploaded&&window.buktiPaymentUrl)return window.buktiPaymentUrl;if(!e)return null;const a=await window.uploadBuktiToGDrive(e,t);return a&&(window.buktiPaymentUrl=a,window.buktiGDriveUploaded=!0),a};window.togglePaymentDetails=()=>{const e=(document.querySelector('input[name="payment"]:checked')||{}).value;Z("detail-transfer","hidden",e!=="transfer"),Z("detail-qris","hidden",e!=="qris"),Z("detail-cashier","hidden",e!=="cashier"),Z("detail-cod","hidden",e!=="cod"),Z("detail-tempo","hidden",e!=="tempo"),e==="tempo"&&window.calculateTempoBalance(),Z("bukti-payment-section","hidden",!(e==="transfer"||e==="qris"||e==="tempo"))};window.calculateTempoBalance=()=>{const e=document.getElementById("tempo-dp-input");let t=parseFloat(e?.value)||0;t<0&&(t=0,e&&(e.value=0));let a=E.reduce((H,I)=>H+(parseFloat(getEffP(I))||0)*(parseFloat(I.qty)||0),0),s=0,o=0,r=0;if(w.deliveryMethod==="delivery"&&(s=Math.ceil((parseFloat(w.distance)||0)*(parseFloat(m.store.costPerKm)||0)/500)*500),vouch){let H=a;if(vouch.targetProduct&&vouch.targetProduct!==""){const I=parseInt(vouch.targetProduct);H=E.filter(S=>S.id===I).reduce((S,le)=>S+(parseFloat(getEffP(le))||0)*(parseFloat(le.qty)||0),0)}if(vouch.type==="shipping_free")r=s;else if(vouch.type==="shipping_flat")r=parseFloat(vouch.value)||0;else if(vouch.type==="percent"){let I=H*((parseFloat(vouch.value)||0)/100);vouch.maxDiscount&&parseFloat(vouch.maxDiscount)>0&&(I=Math.min(I,parseFloat(vouch.maxDiscount))),o=I}else o=parseFloat(vouch.value)||0,o=Math.min(o,H)}(m.store.freeShippingMinSpendEnabled===!0||m.store.freeShippingMinSpendEnabled==="true")&&(parseFloat(m.store.freeShippingMinSpendAmount)||0)>0&&a>=(parseFloat(m.store.freeShippingMinSpendAmount)||0)&&w.deliveryMethod==="delivery"&&(r=s),r=Math.min(r,s),o=Math.min(o,a);let l=Math.max(0,a-o),d=Math.max(0,s-r);const c=window.calcTaxDetails(l+d);let u=0;window.useMemberPoints&&currentMember&&(u=Math.min(l+d+c.grandTotalAdd,parseFloat(currentMember.points)||0));let h=l+d+c.grandTotalAdd-u;t>h&&(t=h,e&&(e.value=t));let P=h-t;const T=document.getElementById("tempo-balance-display");T&&(T.innerText=D(P))};let Ye=[];const Ue=()=>{try{localStorage.setItem("freshmart_my_orders",JSON.stringify(U))}catch(e){console.warn("[MyOrders] Gagal menyimpan ke localStorage:",e)}},Os=()=>{try{const e=localStorage.getItem("freshmart_my_orders");if(e){const t=JSON.parse(e);Array.isArray(t)&&t.length>0&&Be(t)}}catch(e){console.warn("[MyOrders] Gagal memuat dari localStorage:",e)}return U},_t=()=>{Ye.forEach(e=>{try{typeof e=="function"&&e()}catch{}}),Ye=[]},Nt=()=>{_t(),U.filter(a=>{const s=a.status==="Selesai"||a.status==="Dibatalkan",o=a.claimedReward&&(a.claimedReward.status==="Menunggu Persetujuan"||!a.claimedReward.status);return!s||o}).slice(0,10).forEach(a=>{const s=a.orderId;if(!s)return;const o=C.collection("freshmart_orders").doc(s).onSnapshot(r=>{if(!r.exists)return;const i=r.data(),l=i.status,d=i.claimedReward?i.claimedReward.status:null,c=i.claimedReward&&i.claimedReward.note||"";let u=!1,h="";const P=U.find(T=>T.orderId===s);if(P){if(l&&P.status!==l){const T=P.status;P.status=l,u=!0,T!==void 0&&(h=`Pesanan #${s.split("-").pop()} kini: ${l}`)}P.claimedReward&&d&&(P.claimedReward.status!==d||P.claimedReward.note!==c)&&(P.claimedReward.status=d,P.claimedReward.note=c,u=!0),u&&(Ue(),window.curViewName==="view-orders"&&Se(),h&&b(h))}},r=>{console.warn("[MyOrders Realtime] Snapshot error:",r.message)});Ye.push(o)})},Se=async()=>{if(Os(),!U.length){L("orders-empty-state"),y("btn-clear-orders"),L("spacer-orders"),O("orders-items-container","");return}y("orders-empty-state"),L("btn-clear-orders"),y("spacer-orders"),Nt(),O("orders-items-container",U.map((e,t)=>{const a=new Date(e.date).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"});let s="text-slate-500 border-slate-200 bg-slate-50 dark:bg-slate-800 dark:border-slate-700",o="fa-clock";return e.status==="Baru"?(s="text-rose-600 border-rose-200 bg-rose-50 dark:bg-rose-900/30 dark:border-rose-800 dark:text-rose-400",o="fa-asterisk"):e.status==="Diproses"?(s="text-[var(--color-primary)] border-[var(--color-primary)]/30 bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] dark:border-[var(--color-primary)]/40",o="fa-spinner fa-spin"):e.status==="Selesai"?(s="text-[var(--color-primary)] border-[var(--color-primary)]/30 bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] dark:border-[var(--color-primary)]/40",o="fa-check-double"):e.status==="Dibatalkan"&&(s="text-slate-400 border-slate-200 bg-slate-100 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400",o="fa-xmark"),`
        <div class="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden group min-w-0 transition-all hover:border-[var(--color-primary)]/40">
            <div class="flex justify-between items-start mb-3 border-b border-slate-100 dark:border-slate-700/60 pb-3">
                <div>
                    <span class="font-bold text-sm text-slate-800 dark:text-white tracking-tight">#${e.orderId.split("-").pop()}</span>
                    <p class="text-[10px] font-semibold text-slate-500 dark:text-slate-400 mt-0.5"><i class="fa-regular fa-calendar-days mr-1"></i>${a}</p>
                </div>
                <span class="text-[10px] font-bold px-2.5 py-1 rounded-lg border ${s} uppercase tracking-wider flex items-center shadow-xs"><i class="fa-solid ${o} mr-1.5 text-[9px]"></i> ${p(e.status)}</span>
            </div>
            ${e.pointsEarned>0||e.claimedReward?`
            <div class="flex flex-wrap gap-1.5 mb-3">
                ${e.pointsEarned>0?`<span class="text-[9px] font-bold px-2 py-1 rounded-lg bg-amber-50 text-amber-600 border border-amber-200 dark:bg-amber-900/20 dark:border-amber-800 dark:text-amber-400"><i class="fa-solid fa-star mr-1"></i>+${e.pointsEarned} Poin</span>`:""}
                ${e.claimedReward?`<span class="text-[9px] font-bold px-2 py-1 rounded-lg bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)] border border-[var(--color-primary)]/30 dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)]/40 dark:text-[var(--color-primary)]"><i class="fa-solid fa-gift mr-1"></i>Hadiah: ${p(e.claimedReward.name)} ${st(e.claimedReward)}</span>`:""}
                ${e.claimedReward&&e.finalMemberPoints!==void 0&&e.finalMemberPoints!==null?`<span class="text-[9px] font-bold px-2 py-1 rounded-lg bg-slate-100 text-slate-500 border border-slate-200 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400"><i class="fa-solid fa-wallet mr-1"></i>Sisa: ${e.finalMemberPoints} Poin</span>`:""}
            </div>`:""}
            <div class="flex justify-between items-end mt-2 pt-1">
                <div>
                    <p class="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-0.5">Total Tagihan</p>
                    <p class="text-[var(--color-primary)] font-bold text-base tracking-tight">${D(e.total)} <span class="text-[10px] text-slate-500 dark:text-slate-400 font-medium ml-1">(${e.itemCount} Item)</span></p>
                </div>
                <div class="flex gap-2">
                    <button onclick="openCustomerOrderDetail('${e.orderId}')" class="h-8 px-3.5 rounded-xl bg-[rgba(var(--color-primary-rgb),0.08)] hover:bg-[rgba(var(--color-primary-rgb),0.15)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.2)] dark:border-[rgba(var(--color-primary-rgb),0.35)] text-[11px] font-bold transition-all active:scale-95 shadow-xs flex items-center gap-1.5"><i class="fa-solid fa-file-invoice"></i> Detail</button>
                    <button onclick="checkOrderStatus('${e.orderId}', ${t})" class="h-8 px-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 text-[11px] font-bold transition-all active:scale-95 shadow-xs flex items-center gap-1.5"><i class="fa-solid fa-rotate"></i> Status</button>
                </div>
            </div>
        </div>`}).join(""))},js=async(e,t)=>{J("Melacak Status...");try{const a=await C.collection("freshmart_orders").doc(e).get();if(a.exists){const s=a.data();if(U[t])U[t].status=s.status;else{const o=U.findIndex(r=>r.orderId===e);o>-1&&(U[o].status=s.status)}Ue(),Se(),b(`✅ Status Pesanan: ${s.status}`)}else b("Pesanan tidak ditemukan di server.")}catch(a){console.error("Gagal cek status pesanan:",a),b("Gagal mengambil data sistem. Periksa koneksi.")}finally{F()}},qs=async()=>{const e=n("order-tracking-input"),t=e?e.value.trim():"";if(!t){b("Masukkan ID Pesanan terlebih dahulu!");return}let a=t.replace(/^#/,"").trim();const s=U.find(o=>o.orderId===a||o.orderId.endsWith(a));if(s){Ze(s.orderId);return}J("Mencari Pesanan...");try{let o=await C.collection("freshmart_orders").doc(a).get();if(!o.exists&&!a.startsWith("ORD-")){const r="ORD-"+a,i=await C.collection("freshmart_orders").doc(r).get();i.exists&&(o=i,a=r)}if(o.exists){const r=o.data();U.some(l=>l.orderId===a)||(U.unshift({orderId:a,date:r.dateString||(r.timestamp?r.timestamp.toDate().toISOString():new Date().toISOString()),total:r.payment&&r.payment.grandTotal?r.payment.grandTotal:0,itemCount:(r.items||[]).reduce((l,d)=>l+(parseFloat(d.qty)||0),0),status:r.status||"Baru",pointsEarned:r.pointsEarned||0,claimedReward:r.claimedReward||null,finalMemberPoints:r.finalMemberPoints||null}),Ue(),Se()),e&&(e.value=""),b("✅ Pesanan berhasil ditemukan!"),Ze(a)}else b("❌ Pesanan dengan ID tersebut tidak ditemukan.")}catch(o){console.error("Gagal melacak pesanan:",o),b("Gagal menghubungi server. Pastikan ID Pesanan sudah benar.")}finally{F()}},Us=()=>{St("Hapus Riwayat","Riwayat pesanan di perangkat ini akan dihapus. Pesanan tetap tersimpan di sistem toko. Lanjutkan?",()=>{Be([]),Ue(),Se(),b("Riwayat lokal dibersihkan")})},Ze=async e=>{J("Memuat Rincian...");try{const t=await C.collection("freshmart_orders").doc(e).get();if(!t.exists){b("Pesanan tidak ditemukan."),F();return}const a=t.data();let s=[];if(a.status==="Selesai")try{s=(await C.collection("freshmart").doc("cms_data").collection("reviews").where("orderId","==",e).get()).docs.map(r=>`${r.data().productId}::${r.data().variantName||""}`)}catch{}Bt(e,a,s)}catch(t){console.error("Gagal mengambil data pesanan:",t),b("Gagal memuat rincian pesanan. Coba beberapa saat lagi.")}finally{F()}},Bt=(e,t,a=[])=>{try{let s=document.getElementById("order-detail-modal");s||(s=document.createElement("div"),s.id="order-detail-modal",s.className="fixed inset-0 z-[100] flex justify-center items-end sm:items-center bg-slate-900/60 opacity-0 pointer-events-none transition-opacity duration-300",document.body.appendChild(s));const o=p(t.customer&&t.customer.name?t.customer.name:"-"),r=p(t.customer&&t.customer.wa?t.customer.wa:"-"),i=p(t.customer&&t.customer.address?t.customer.address:"-"),l=t.customer&&t.customer.deliveryMethod==="delivery"?"Dikirim ke Alamat":"Ambil di Toko (Pickup)",d=p(t.customer&&t.customer.note?t.customer.note:""),c=p(t.payment&&t.payment.method?t.payment.method:"Cash / COD"),u=t.items||[],h=u.some(f=>f.poTime&&f.poTime!==""),P=u.map(f=>{const j=parseFloat(f.qty)||0,ce=parseFloat(f.effectivePrice||f.price)||0,pe=j*ce,De=`${f.id}::${f.variantName||""}`,te=t.status==="Selesai"&&!a.includes(De)&&f.id!==void 0&&f.id!==null;return`
            <div class="flex gap-3 items-center border-b border-slate-100 dark:border-slate-700/50 py-3 last:border-0">
                <div class="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 bg-cover bg-center shrink-0 border border-slate-200 dark:border-slate-700" style="background-image:url('${p(f.img||(m&&m.store?m.store.logo:""))}')"></div>
                <div class="flex-1 min-w-0">
                    <p class="text-xs font-bold text-slate-800 dark:text-white truncate mb-0.5" title="${p(f.name)}">${p(f.name)}</p>
                    ${f.variantName||f.poTime?`
                    <div class="flex flex-wrap gap-1 mb-1">
                        ${f.variantName?`<span class="bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-1.5 py-0.5 rounded text-[9px] font-semibold">${p(f.variantName)}</span>`:""}
                        ${f.poTime?`<span class="bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border border-amber-200 dark:border-amber-800 px-1.5 py-0.5 rounded text-[8px] font-bold uppercase">PO ${p(f.poTime)}</span>`:""}
                    </div>
                    `:""}
                    <p class="text-[10px] font-medium text-slate-500 dark:text-slate-400">${j} ${p(f.unit||"pcs")} x ${D(ce)}</p>
                    ${te?`<button type="button" onclick="openReviewModal('${e}',${f.id},'${encodeURIComponent(f.variantName||"")}','${encodeURIComponent(f.name||"")}','${encodeURIComponent(t.customer?.name||"")}')" class="mt-1.5 text-[10px] font-bold text-amber-500 hover:text-amber-600 flex items-center gap-1 transition-colors"><i class="fa-solid fa-star"></i> Berikan Ulasan</button>`:""}
                </div>
                <div class="text-right shrink-0">
                    <p class="text-xs font-bold text-slate-800 dark:text-[var(--color-primary)]">${D(pe)}</p>
                </div>
            </div>
            `}).join("");let T="Tanggal Tidak Tersedia";try{let f;if(t.timestamp&&typeof t.timestamp.toDate=="function")f=t.timestamp.toDate();else{const j=t.timestamp||t.dateString||Date.now();if(typeof j=="number")f=new Date(j);else if(!isNaN(Number(j))&&String(j).trim()!=="")f=new Date(Number(j));else{const ce=String(j).replace(/-/g,"/").replace("T"," ").replace(/\..*$/,"");f=new Date(j),isNaN(f.getTime())&&(f=new Date(ce))}}f&&!isNaN(f.getTime())&&(T=f.toLocaleString("id-ID",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}))}catch(f){console.error("Gagal memproses tanggal:",f)}const H=t.payment&&t.payment.subtotal?t.payment.subtotal:0,I=t.payment&&t.payment.shippingCost?t.payment.shippingCost:0,x=t.payment&&t.payment.productDiscount?t.payment.productDiscount:0,S=t.payment&&t.payment.shippingDiscount?t.payment.shippingDiscount:0,le=t.payment&&t.payment.ppnAmount?t.payment.ppnAmount:0,we=t.payment&&t.payment.ppnRate?t.payment.ppnRate:0,de=t.payment&&t.payment.grandTotal?t.payment.grandTotal:0;s.innerHTML=`
            <div class="bg-white dark:bg-slate-900 w-full max-w-lg rounded-t-3xl sm:rounded-2xl max-h-[88vh] flex flex-col shadow-2xl transform translate-y-full sm:translate-y-10 scale-100 transition-transform duration-300 border border-slate-200 dark:border-slate-700 overflow-hidden" id="order-detail-content">
                
                <div class="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center shrink-0 bg-slate-50 dark:bg-slate-800/80">
                    <div>
                        <h3 class="font-bold text-slate-800 dark:text-white text-base">Rincian Pesanan</h3>
                        <p class="text-[11px] font-semibold text-slate-500 dark:text-slate-400 mt-0.5">ID: #${e.split("-").pop()}</p>
                    </div>
                    <button onclick="closeCustomerOrderDetailModal()" class="w-8 h-8 flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-rose-100 hover:text-rose-500 transition-colors active:scale-95"><i class="fa-solid fa-xmark"></i></button>
                </div>
                
                <div class="p-4 sm:p-5 overflow-y-auto flex-1 space-y-5 custom-scrollbar text-sm">
                    <div class="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700 flex justify-between items-center">
                        <div>
                            <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Status Pesanan</p>
                            <span class="text-xs font-bold px-2.5 py-1 rounded-md bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)] border border-[var(--color-primary)]/30 dark:bg-[rgba(var(--color-primary-rgb),0.15)] dark:border-[var(--color-primary)]/40">${p(t.status||"Baru")}</span>
                        </div>
                        <div class="text-right">
                            <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Waktu Pembelian</p>
                            <p class="text-[11px] font-bold text-slate-700 dark:text-slate-300">${T}</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700/60">
                            <h4 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1.5"><i class="fa-solid fa-user text-slate-400"></i> Info Pelanggan</h4>
                            <div class="space-y-1 text-xs">
                                <p class="font-bold text-slate-800 dark:text-slate-200">${o}</p>
                                ${t.customer&&t.customer.wa?`<a href="javascript:void(0)" onclick="if(typeof window.openWhatsApp==='function') window.openWhatsApp('${r}'); else window.open('https://wa.me/${r}', '_blank', 'noopener,noreferrer');" class="flex items-center gap-1 text-[var(--color-primary)] font-bold hover:underline cursor-pointer"><i class="fa-brands fa-whatsapp"></i> +${r}</a>`:""}
                                ${t.customer&&t.customer.lat&&t.customer.deliveryMethod==="delivery"?`<a href="https://www.google.com/maps?q=${p(t.customer.lat)},${p(t.customer.lng)}" target="_blank" class="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-bold hover:underline"><i class="fa-solid fa-location-dot"></i> Lihat Peta</a>`:""}
                            </div>
                        </div>
                        <div class="bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700/60">
                            <h4 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1.5"><i class="fa-solid fa-truck text-slate-400"></i> Pengiriman & Bayar</h4>
                            <div class="space-y-1 text-xs">
                                <p><span class="text-slate-500 inline-block w-14">Metode</span> <span class="font-bold text-slate-800 dark:text-slate-200">: ${l}</span></p>
                                <p><span class="text-slate-500 inline-block w-14">Bayar</span> <span class="font-bold text-slate-800 dark:text-slate-200">: ${c.toUpperCase()}</span></p>
                            </div>
                        </div>
                    </div>

                    <div class="space-y-2.5">
                        <div class="bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700/60">
                            <p class="text-[9px] font-bold text-[var(--color-primary)] uppercase tracking-widest mb-1">Alamat Tujuan</p>
                            <p class="text-xs font-semibold text-slate-700 dark:text-slate-200 leading-relaxed">${i}</p>
                        </div>
                        ${d?`<div class="bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700/60"><p class="text-[9px] font-bold text-amber-500 dark:text-amber-400 uppercase tracking-widest mb-1">Catatan Pembeli</p><p class="text-xs font-medium text-slate-700 dark:text-slate-200 leading-relaxed italic">"${d}"</p></div>`:""}
                    </div>

                    ${t.buktiPayment?`
                    <div>
                        <h4 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1.5"><i class="fa-solid fa-image text-[var(--color-primary)]"></i> Bukti Pembayaran</h4>
                        <a href="${p(t.buktiPayment)}" target="_blank" class="block rounded-xl overflow-hidden border-2 border-[var(--color-primary)]/30 hover:border-[var(--color-primary)] transition-colors shadow-xs">
                            <img src="${p(t.buktiPayment)}" alt="Bukti Pembayaran" class="w-full max-h-52 object-cover" onerror="this.style.display='none'" loading="lazy">
                            <div class="bg-[rgba(var(--color-primary-rgb),0.06)] p-2 flex items-center justify-center gap-1.5 text-[10px] font-bold text-[var(--color-primary)]"><i class="fa-solid fa-arrow-up-right-from-square"></i> Buka Ukuran Penuh</div>
                        </a>
                    </div>`:""}
                    
                    <div>
                        <h4 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1.5"><i class="fa-solid fa-basket-shopping text-slate-400"></i> Daftar Produk</h4>
                        <div class="bg-slate-50 dark:bg-slate-800/30 rounded-xl px-3 py-1 border border-slate-200 dark:border-slate-700/80">
                            ${P}
                        </div>
                    </div>

                    ${h?`
                    <div class="bg-amber-50 dark:bg-amber-900/15 p-3.5 rounded-xl border border-amber-200 dark:border-amber-800/40 flex gap-2.5 items-start">
                        <i class="fa-solid fa-clock text-amber-500 mt-0.5 animate-pulse"></i>
                        <p class="text-[11px] font-semibold text-amber-800 dark:text-amber-300 leading-relaxed">Catatan: Pesanan ini mengandung produk Pre-Order (PO). Khusus produk PO akan dikirimkan menyusul (estimasi sesuai label) tanpa biaya tambahan.</p>
                    </div>`:""}

                    ${t.pointsEarned>0||t.claimedReward||t.finalMemberPoints!==void 0&&t.finalMemberPoints!==null?`
                    <div class="space-y-2">
                        ${t.pointsEarned>0?`<div class="bg-amber-50 dark:bg-amber-900/15 p-3 rounded-xl border border-amber-200 dark:border-amber-800/30 flex items-center gap-2"><i class="fa-solid fa-star text-amber-500"></i><p class="text-xs font-bold text-amber-700 dark:text-amber-400">Mendapat <b>+${t.pointsEarned} Poin</b> dari pesanan ini!</p></div>`:""}
                        ${t.finalMemberPoints!==void 0&&t.finalMemberPoints!==null?`<div class="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center gap-2"><i class="fa-solid fa-wallet text-slate-400"></i><p class="text-xs font-semibold text-slate-600 dark:text-slate-300">Saldo Poin Member: <b>${t.finalMemberPoints}</b></p></div>`:""}
                        ${t.claimedReward?`
                        <div class="bg-[rgba(var(--color-primary-rgb),0.06)] p-3 rounded-xl border border-[var(--color-primary)]/20">
                            <div class="flex items-center gap-2"><i class="fa-solid fa-gift text-[var(--color-primary)]"></i><p class="text-xs font-bold text-[var(--color-primary)]">Klaim Hadiah: <b>${p(t.claimedReward.name)}</b> (${t.claimedReward.pointsCost} Poin)</p></div>
                            <p class="text-[11px] font-semibold text-[var(--color-primary)] mt-1 ml-5">${st(t.claimedReward)}</p>
                            ${t.claimedReward.note?`<p class="text-[11px] text-[var(--color-primary)]/70 italic mt-0.5 ml-5">"${p(t.claimedReward.note)}"</p>`:""}
                        </div>`:""}
                    </div>`:""}

                    <div class="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl space-y-2 text-xs">
                        <div class="flex justify-between text-slate-600 dark:text-slate-400"><p>Subtotal Produk</p><p class="font-bold text-slate-800 dark:text-white">${D(H)}</p></div>
                        <div class="flex justify-between text-slate-600 dark:text-slate-400"><p>Ongkos Kirim</p><p class="font-bold text-slate-800 dark:text-white">${D(I)}</p></div>
                        ${S>0?`<div class="flex justify-between text-[var(--color-primary)]"><p>Diskon Ongkir</p><p class="font-bold">-${D(S)}</p></div>`:""}
                        ${x>0?`<div class="flex justify-between text-rose-500"><p>Diskon Promo</p><p class="font-bold">-${D(x)}</p></div>`:""}
                        ${(()=>{if(le<=0)return"";const f=t.payment?.ppnType==="inclusive",j=H-x+(I-S),ce=t.payment?.dppAmount||(f?Math.round(j*100/(100+we)):Math.max(0,j));return`
                            <div class="flex justify-between text-slate-600 dark:text-slate-400"><p>DPP (Dasar Pengenaan Pajak)</p><p class="font-bold text-slate-800 dark:text-white">${D(ce)}</p></div>
                            <div class="flex justify-between text-amber-600 dark:text-amber-400"><p>${f?"Termasuk PPN":"PPN"} (${we}%)</p><p class="font-bold">${f?"":"+"}${D(le)}</p></div>
                            `})()}
                        <div class="flex justify-between items-center border-t border-dashed border-slate-300 dark:border-slate-700 pt-3 mt-2">
                            <p class="font-bold text-slate-800 dark:text-white uppercase tracking-wider">Total Tagihan</p>
                            <p class="text-lg font-bold text-[var(--color-primary)]">${D(de)}</p>
                        </div>
                    </div>
                </div>
            </div>
        `,s.classList.contains("opacity-0")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("customerOrder"),s.classList.remove("opacity-0","pointer-events-none"),setTimeout(()=>{const f=document.getElementById("order-detail-content");f&&(f.classList.remove("translate-y-full","sm:translate-y-10"),f.classList.add("translate-y-0","sm:translate-y-0"))},50)}catch(s){console.error("Error Render HTML Modal:",s),b("Gagal menampilkan detail. Coba lagi.")}},Gs=(e=!1)=>{const t=()=>{const a=document.getElementById("order-detail-modal"),s=document.getElementById("order-detail-content");s&&(s.classList.remove("translate-y-0","sm:translate-y-0"),s.classList.add("translate-y-full","sm:translate-y-10")),setTimeout(()=>{a&&a.classList.add("opacity-0","pointer-events-none")},300)};typeof window.requestCloseModal=="function"?window.requestCloseModal("customerOrder",e,t):t()};window.attachMyOrdersRealtime=Nt;window.detachMyOrdersRealtime=_t;window.renderMyOrders=Se;window.checkOrderStatus=js;window.trackOrderManual=qs;window.clearMyOrders=Us;window.openCustomerOrderDetail=Ze;window.renderOrderDetailModal=Bt;window.closeCustomerOrderDetailModal=Gs;window.reviewPhotoFile=null;window.reviewRating=0;const Ks=(e,t,a,s,o)=>{const r=decodeURIComponent(a||""),i=decodeURIComponent(s||""),l=decodeURIComponent(o||"");let d=document.getElementById("review-modal");d||(d=document.createElement("div"),d.id="review-modal",d.className="fixed inset-0 z-[120] bg-slate-900/80 flex items-end sm:items-center justify-center p-0 sm:p-5",d.onclick=c=>{c.target===d&&nt()},document.body.appendChild(d)),window.reviewPhotoFile=null,window.reviewRating=0,d.innerHTML=`
        <div class="bg-white dark:bg-slate-900 w-full max-w-lg rounded-t-3xl sm:rounded-2xl max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-700">
            <div class="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0">
                <div class="min-w-0">
                    <h3 class="font-bold text-slate-800 dark:text-white text-base flex items-center gap-2"><i class="fa-solid fa-star text-amber-400"></i> Berikan Ulasan</h3>
                    <p class="text-[10px] font-bold text-slate-500 mt-0.5 uppercase tracking-widest truncate">${p(i)}</p>
                </div>
                <button onclick="closeReviewModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-rose-100 hover:text-rose-500 flex items-center justify-center transition-all shrink-0"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="p-5 sm:p-6 overflow-y-auto flex-1 space-y-5">
                <div class="text-center">
                    <p class="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3">Beri Bintang</p>
                    <div class="flex items-center justify-center gap-2" id="review-star-picker">
                        ${[1,2,3,4,5].map(c=>`<button type="button" onclick="setReviewRating(${c})" class="review-star text-3xl text-slate-300 dark:text-slate-600 transition-all hover:scale-110" data-star="${c}"><i class="fa-solid fa-star"></i></button>`).join("")}
                    </div>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Ceritakan Pengalaman Anda</label>
                    <textarea id="review-text" rows="4" placeholder="Bagaimana kualitas produknya?" class="admin-input !py-3 bg-slate-50 dark:bg-slate-900 shadow-inner"></textarea>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Unggah Foto (Opsional)</label>
                    <input type="file" accept="image/*" id="review-photo-input" onchange="handleReviewPhotoSelect(event)" class="hidden">
                    <div id="review-photo-preview-wrap" class="hidden mb-2.5 relative w-24 h-24">
                        <img id="review-photo-preview" class="w-24 h-24 rounded-xl object-cover border border-slate-200 dark:border-slate-700" loading="lazy">
                        <button type="button" onclick="removeReviewPhoto()" class="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-rose-500 text-white flex items-center justify-center text-[10px] shadow"><i class="fa-solid fa-xmark"></i></button>
                    </div>
                    <button type="button" onclick="document.getElementById('review-photo-input').click()" id="review-photo-btn" class="w-full py-3 rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 text-slate-400 text-[11px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all"><i class="fa-solid fa-camera"></i> Tambah Foto Bukti</button>
                </div>
            </div>
            <div class="p-5 border-t border-slate-100 dark:border-slate-800 shrink-0">
                <button id="review-submit-btn" class="btn-primary py-3.5 text-sm shadow-glow !rounded-xl flex items-center justify-center gap-2"><i class="fa-solid fa-paper-plane"></i> Kirim Ulasan</button>
            </div>
        </div>`,n("review-submit-btn").onclick=()=>lt(e,t,r,i,l),d.style.opacity="0",d.style.display="flex",requestAnimationFrame(()=>{d.style.transition="opacity 0.25s ease",d.style.opacity="1"}),typeof window.pushModalHistory=="function"&&window.pushModalHistory("review")},Hs=e=>{window.reviewRating=e,document.querySelectorAll(".review-star").forEach(t=>{const a=parseInt(t.dataset.star);t.classList.toggle("text-amber-400",a<=e),t.classList.toggle("text-slate-300",a>e),t.classList.toggle("dark:text-slate-600",a>e)})},Vs=e=>{const t=e.target.files[0];if(!t)return;if(!t.type.startsWith("image/")){b("Hanya file gambar yang diizinkan!");return}if(t.size>5*1024*1024){b("Ukuran gambar max 5MB!");return}window.reviewPhotoFile=t;const a=new FileReader;a.onload=s=>{n("review-photo-preview").src=s.target.result,L("review-photo-preview-wrap"),y("review-photo-btn")},a.readAsDataURL(t)},Qs=()=>{window.reviewPhotoFile=null,y("review-photo-preview-wrap"),L("review-photo-btn");const e=n("review-photo-input");e&&(e.value="")},nt=(e=!1)=>{const t=document.getElementById("review-modal");!t||t.style.display==="none"||(t.style.opacity="0",t.style.transition="opacity 0.25s ease",setTimeout(()=>{t.style.display="none",t.style.opacity="",t.style.transition=""},250),!e&&z.length&&z[z.length-1]==="review"&&(z.pop(),history.back()))},lt=async(e,t,a,s,o)=>{if(!window.reviewRating||window.reviewRating<1)return b("Silakan beri bintang terlebih dahulu!");if(!at){me(!0),J("Mengirim ulasan...");try{let r="";if(window.reviewPhotoFile&&typeof window.uploadBuktiToGDrive=="function"){const d=await window.uploadBuktiToGDrive(window.reviewPhotoFile,"review-"+e);d?r=d:b("Foto gagal diupload, ulasan tetap dikirim tanpa foto.")}const i=Date.now(),l={id:i,orderId:e||"",productId:t??0,variantName:a||"",productName:s||"",customerName:o||"Pelanggan",rating:window.reviewRating,text:B("review-text")||"",photoUrl:r||"",adminReply:"",isVisible:!0,createdAt:_e.firestore.FieldValue.serverTimestamp()};await C.collection("freshmart").doc("cms_data").collection("reviews").doc(i.toString()).set(l),Xe.delete(t),nt(),b("✅ Terima kasih atas ulasan Anda!"),typeof window.openCustomerOrderDetail=="function"&&window.openCustomerOrderDetail(e)}catch(r){console.error("Gagal mengirim ulasan:",r),b("Gagal mengirim ulasan: "+(r.message||"Error tidak diketahui"))}finally{me(!1),F()}}},Xe=new Map,Ws=5*60*1e3,zs=async e=>{if(!n("product-modal-reviews-container"))return;const a=o=>{const r=o.length?o.reduce((c,u)=>c+(parseFloat(u.rating)||0),0)/o.length:0,i=c=>Array.from({length:5},(u,h)=>`<i class="fa-solid fa-star ${h<Math.round(c)?"text-amber-400":"text-slate-200 dark:text-slate-700"}"></i>`).join("");let l=`
            <div class="flex items-center justify-between mb-4">
                <h4 class="font-bold text-slate-800 dark:text-white text-sm flex items-center gap-2"><i class="fa-solid fa-comment-dots text-amber-400"></i> Ulasan Pelanggan</h4>
                ${o.length?`<div class="flex items-center gap-1.5"><span class="flex text-xs">${i(r)}</span><span class="text-xs font-bold text-slate-600 dark:text-slate-300">${r.toFixed(1)}</span><span class="text-[10px] font-bold text-slate-400">(${o.length})</span></div>`:""}
            </div>`;if(!o.length){O("product-modal-reviews-container",l+'<p class="text-[11px] font-bold text-slate-400 text-center py-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">Belum ada ulasan untuk produk ini.</p>');return}const d=o.map(c=>{let u="";try{c.createdAt&&c.createdAt.toDate&&(u=c.createdAt.toDate().toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}))}catch{}return`
            <div class="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-700/60">
                <div class="flex items-center justify-between mb-1.5">
                    <p class="text-xs font-bold text-slate-800 dark:text-white">${p(c.customerName||"Pelanggan")}</p>
                    <span class="text-[9px] font-bold text-slate-400">${u}</span>
                </div>
                <div class="flex text-[11px] mb-2">${i(c.rating)}</div>
                ${c.variantName?`<p class="text-[10px] font-bold text-slate-400 mb-1.5">Varian: ${p(c.variantName)}</p>`:""}
                ${c.text?`<p class="text-xs text-slate-600 dark:text-slate-300 mb-3">${p(c.text)}</p>`:""}
                ${c.photoUrl?`<div class="w-16 h-16 rounded-xl overflow-hidden mb-3 border border-slate-200 dark:border-slate-700"><img src="${p(c.photoUrl)}" class="w-full h-full object-cover cursor-pointer" onclick="window.open('${p(c.photoUrl)}','_blank')" alt="Foto ulasan"></div>`:""}
                ${c.adminReply?`
                <div class="mt-2.5 p-3 bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] border border-[rgba(var(--color-primary-rgb),0.2)] rounded-xl">
                    <p class="text-[10px] font-bold text-[var(--color-primary-dark)] dark:text-[var(--color-primary)] mb-1 flex items-center gap-1"><i class="fa-solid fa-reply"></i> Balasan Penjual</p>
                    <p class="text-xs text-slate-600 dark:text-slate-300">${p(c.adminReply)}</p>
                </div>`:""}
            </div>`}).join("");O("product-modal-reviews-container",l+`<div class="space-y-3">${d}</div>`)},s=Xe.get(e);if(s&&Date.now()-s.timestamp<Ws){a(s.data);return}O("product-modal-reviews-container",'<div class="text-center py-6"><i class="fa-solid fa-spinner fa-spin text-xl text-slate-300"></i></div>');try{let r=(await C.collection("freshmart").doc("cms_data").collection("reviews").where("productId","==",e).get()).docs.map(i=>i.data()).filter(i=>i.isVisible!==!1);r.sort((i,l)=>{const d=i.createdAt&&i.createdAt.toMillis?i.createdAt.toMillis():0;return(l.createdAt&&l.createdAt.toMillis?l.createdAt.toMillis():0)-d}),Xe.set(e,{data:r,timestamp:Date.now()}),a(r)}catch(o){console.warn("Gagal memuat ulasan:",o),O("product-modal-reviews-container",'<p class="text-[11px] text-slate-400 text-center py-4">Belum ada ulasan yang dapat dimuat.</p>')}};window.openReviewModal=Ks;window.setReviewRating=Hs;window.handleReviewPhotoSelect=Vs;window.removeReviewPhoto=Qs;window.closeReviewModal=nt;window.submitReview=lt;window.submitProductReview=lt;window.loadProductReviews=zs;let gt=null;const dt=()=>{if(!gt)try{gt=C.collection("freshmart").doc("cms_data").collection("faqs").onSnapshot(e=>{e&&e.docs&&(m.faqs=e.docs.map(t=>({id:t.id,...t.data()}))),typeof window.curViewName<"u"&&window.curViewName==="view-faq"&&Pe(),window.isAdm&&typeof window.cTab<"u"&&window.cTab==="faqs"&&typeof window.rAdmFAQ=="function"&&window.rAdmFAQ()},e=>{console.warn("Sync sub-koleksi faqs dibatasi, menggunakan fallback cms_data.faqs:",e.message),typeof window.curViewName<"u"&&window.curViewName==="view-faq"&&Pe(),window.isAdm&&typeof window.cTab<"u"&&window.cTab==="faqs"&&typeof window.rAdmFAQ=="function"&&window.rAdmFAQ()})}catch{console.warn("Fallback sync Q&A dari cms_data aktif")}};let Ie="Semua";const Pe=()=>{dt();const e=document.getElementById("storefront-faq-container"),t=document.getElementById("faq-category-pills");if(!e)return;const a=(m.faqs||[]).filter(i=>i.status==="published"),s=["Semua","Pemesanan","Pengiriman","Pembayaran","Garansi","Lainnya"];t&&(t.innerHTML=s.map(i=>`
            <button onclick="selectFAQCategory('${i}')" class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${Ie===i?"primary-bg text-white shadow-md":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100"}">
                ${i}
            </button>
        `).join(""));const o=(document.getElementById("faq-search-input")?.value||"").toLowerCase().trim(),r=a.filter(i=>{const l=Ie==="Semua"||i.category===Ie,d=!o||(i.question||"").toLowerCase().includes(o)||(i.answer||"").toLowerCase().includes(o);return l&&d});if(!r.length){e.innerHTML=`
            <div class="text-center py-12 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
                <div class="w-16 h-16 rounded-full primary-bg-soft primary-text mx-auto flex items-center justify-center mb-3">
                    <i class="fa-solid fa-circle-question text-3xl"></i>
                </div>
                <h3 class="font-bold text-slate-800 dark:text-white text-base">Belum Ada Q&A Ditemukan</h3>
                <p class="text-xs text-slate-500 mt-1 max-w-sm mx-auto">Punya pertanyaan lain? Silakan gunakan tombol <b>Ajukan Pertanyaan</b> untuk bertanya ke admin.</p>
                <button onclick="openAskQuestionModal()" class="mt-4 primary-bg text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-md active:scale-95 transition-all">Ajukan Pertanyaan Sekarang</button>
            </div>
        `;return}e.innerHTML=r.map(i=>`
        <div class="bg-white dark:bg-slate-800/95 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-soft transition-all duration-200 hover:shadow-md overflow-hidden">
            <button onclick="toggleFAQAccordion('${i.id}')" class="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-3.5 hover:bg-slate-50/80 dark:hover:bg-slate-800/60 transition-colors">
                <div class="flex items-start gap-3.5 min-w-0">
                    <div class="w-9 h-9 rounded-xl primary-bg text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm"><i class="fa-solid fa-question text-xs font-bold"></i></div>
                    <div class="min-w-0">
                        <div class="flex flex-wrap items-center gap-2 mb-1.5">
                            <span class="text-[9px] font-bold uppercase tracking-wider primary-bg-soft primary-text primary-border px-2.5 py-0.5 rounded-lg border">${p(i.category||"Umum")}</span>
                            ${i.authorName?`<span class="text-[10px] font-medium text-slate-400">Oleh: ${p(i.authorName)}</span>`:""}
                        </div>
                        <h4 class="font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-snug break-words">${p(i.question)}</h4>
                    </div>
                </div>
                <div class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700/80 flex items-center justify-center text-slate-400 shrink-0 transition-transform duration-300" id="faq-icon-${i.id}">
                    <i class="fa-solid fa-chevron-down text-xs"></i>
                </div>
            </button>
            <div class="hidden border-t border-slate-100 dark:border-slate-700/70 p-3.5 sm:p-5 primary-bg-soft dark:bg-slate-900/60 text-xs sm:text-sm font-medium leading-relaxed" id="faq-body-${i.id}">
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
                        <div class="text-slate-800 dark:text-slate-100 font-semibold leading-relaxed whitespace-pre-wrap break-words">${p(i.answer||"Belum ada jawaban.")}</div>
                    </div>
                </div>
            </div>
        </div>
    `).join("")},Js=e=>{Ie=e,Pe()},Ys=()=>{Pe()},Zs=e=>{const t=document.getElementById(`faq-body-${e}`),a=document.getElementById(`faq-icon-${e}`);if(!t||!a)return;t.classList.contains("hidden")?(t.classList.remove("hidden"),a.classList.add("rotate-180")):(t.classList.add("hidden"),a.classList.remove("rotate-180"))},Xs=()=>{const e=n("modal-ask-question");e&&(e.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("askQuestion"),L("modal-ask-question"),setTimeout(()=>{n("modal-ask-question")&&n("modal-ask-question").classList.remove("opacity-0"),n("modal-ask-question-box")&&n("modal-ask-question-box").classList.remove("translate-y-full")},10))},Ot=(e=!1)=>{const t=()=>{n("modal-ask-question")&&n("modal-ask-question").classList.add("opacity-0"),n("modal-ask-question-box")&&n("modal-ask-question-box").classList.add("translate-y-full"),setTimeout(()=>y("modal-ask-question"),300)};typeof window.requestCloseModal=="function"?window.requestCloseModal("askQuestion",e,t):t()},eo=async()=>{const e=(B("ask-author-name")||"").trim()||"Pelanggan",t=B("ask-category")||"Pemesanan",a=(B("ask-question-text")||"").trim();if(!a)return b("Tuliskan pertanyaan Anda terlebih dahulu!");J("Mengirim pertanyaan...");const s="faq-"+Date.now().toString(36),o={id:s,question:a,answer:"",category:t,authorName:e,status:"pending_answer",createdAt:new Date().toISOString()};let r=!1;try{await C.collection("freshmart").doc("cms_data").collection("faqs").doc(s).set(o),r=!0}catch(i){console.warn("Penulisan sub-koleksi faqs dibatasi, mencoba fallback cms_data.faqs:",i)}if(!r)try{const i=[o,...(m.faqs||[]).filter(l=>l.id!==s)];await C.collection("freshmart").doc("cms_data").set({faqs:i},{merge:!0}),m.faqs=i,r=!0}catch(i){console.warn("Fallback cms_data.faqs juga gagal:",i)}F(),r?(Ot(),Q("ask-question-text",""),b("Pertanyaan terkirim! Admin akan menjawabnya segera."),Pe()):b("Gagal mengirim pertanyaan. Coba lagi!")};let ke="all";const Ge=()=>{dt();const e=m.faqs||[],t=e.filter(o=>ke==="pending"?o.status==="pending_answer":ke==="published"?o.status==="published":!0),a=e.filter(o=>o.status==="pending_answer").length;let s=`
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
                <button onclick="setAdminFAQFilter('all')" class="shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${ke==="all"?"primary-bg text-white shadow-md":"bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"}">
                    Semua (${e.length})
                </button>
                <button onclick="setAdminFAQFilter('pending')" class="shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${ke==="pending"?"primary-bg text-white shadow-md":"bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"}">
                    <span>Belum Dijawab</span>
                    ${a>0?`<span class="bg-rose-500 text-white text-[9px] px-1.5 py-0.5 rounded-full font-bold">${a}</span>`:""}
                </button>
                <button onclick="setAdminFAQFilter('published')" class="shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${ke==="published"?"primary-bg text-white shadow-md":"bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"}">
                    Terpublikasi
                </button>
            </div>

            <!-- List Q&A Admin -->
            <div class="space-y-4">
                ${t.length?t.map(o=>`
                    <div class="bg-white dark:bg-slate-800 p-4 sm:p-5 rounded-2xl border ${o.status==="pending_answer"?"border-amber-300/80 bg-amber-50/20 dark:bg-amber-900/10":"border-slate-200/80 dark:border-slate-700/80"} shadow-sm space-y-3">
                        <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-700/60 pb-2.5">
                            <div class="flex flex-wrap items-center gap-1.5 min-w-0">
                                <span class="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-lg ${o.status==="published"?"primary-bg-soft primary-text border primary-border":o.status==="pending_answer"?"bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400":"bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-400"}">
                                    ${o.status==="published"?"Terpublikasi":o.status==="pending_answer"?"Menunggu Jawaban":"Disembunyikan"}
                                </span>
                                <span class="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-700/50">${p(o.category||"Umum")}</span>
                                ${o.authorName?`<span class="text-[10px] text-slate-400 italic">Oleh: ${p(o.authorName)}</span>`:""}
                            </div>
                            <div class="flex items-center gap-1.5 shrink-0 ml-auto">
                                <button onclick="openFAQModal('${o.id}')" class="px-2.5 py-1.5 rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 font-bold text-xs hover:bg-blue-100 transition-colors flex items-center gap-1 active:scale-95">
                                    <i class="fa-solid fa-pen-to-square"></i> Edit / Jawab
                                </button>
                                <button onclick="deleteAdminFAQ('${o.id}')" class="px-2.5 py-1.5 rounded-xl bg-rose-50 text-rose-600 dark:bg-rose-900/20 dark:text-rose-400 font-bold text-xs hover:bg-rose-100 transition-colors active:scale-95" title="Hapus Q&A">
                                    <i class="fa-solid fa-trash"></i>
                                </button>
                            </div>
                        </div>

                        <div>
                            <h3 class="font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-snug break-words">${p(o.question)}</h3>
                        </div>

                        <div class="primary-bg-soft dark:bg-slate-900/60 p-3.5 sm:p-4 rounded-xl border primary-border text-xs font-medium text-slate-800 dark:text-slate-200">
                            <span class="font-extrabold primary-text uppercase text-[10px] tracking-wider flex items-center gap-1.5 mb-1">
                                <i class="fa-solid fa-user-shield text-[10px]"></i> Jawaban Admin Toko:
                            </span>
                            <div class="whitespace-pre-wrap leading-relaxed font-semibold break-words">${o.answer?p(o.answer):'<span class="text-rose-500 italic font-semibold">Belum dijawab. Klik "Edit / Jawab" untuk memberikan jawaban.</span>'}</div>
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
    `;setH("admin-content",s)},to=e=>{ke=e,Ge()},ao=e=>{const t=(m.faqs||[]).find(s=>s.id===e)||{id:"",question:"",answer:"",category:"Pemesanan",authorName:"Admin",status:"published"};Q("admin-faq-id",t.id),Q("admin-faq-category",t.category||"Pemesanan"),Q("admin-faq-author",t.authorName||"Admin"),Q("admin-faq-question",t.question||""),Q("admin-faq-answer",t.answer||""),Q("admin-faq-status",t.status||"published"),N("admin-faq-modal-title",e?"Edit Q&A":"Tambah Q&A Baru");const a=n("modal-admin-faq");a&&(a.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("adminFAQ"),L("modal-admin-faq"),setTimeout(()=>{n("modal-admin-faq")&&n("modal-admin-faq").classList.remove("opacity-0"),n("modal-admin-faq-box")&&n("modal-admin-faq-box").classList.remove("translate-y-full")},10))},jt=(e=!1)=>{const t=()=>{n("modal-admin-faq")&&n("modal-admin-faq").classList.add("opacity-0"),n("modal-admin-faq-box")&&n("modal-admin-faq-box").classList.add("translate-y-full"),setTimeout(()=>y("modal-admin-faq"),300)};typeof window.requestCloseModal=="function"?window.requestCloseModal("adminFAQ",e,t):t()},so=async()=>{const e=B("admin-faq-id")||"faq-"+Date.now().toString(36),t=B("admin-faq-category"),a=(B("admin-faq-author")||"").trim()||"Admin",s=(B("admin-faq-question")||"").trim(),o=(B("admin-faq-answer")||"").trim();let r=B("admin-faq-status");if(!s)return b("Pertanyaan tidak boleh kosong!");o&&r==="pending_answer"&&(r="published"),J("Menyimpan Q&A...");const i={id:e,question:s,answer:o,category:t,authorName:a,status:r,updatedAt:new Date().toISOString()};let l=[...m.faqs||[]];const d=l.findIndex(c=>c.id===e);d>-1?l[d]={...l[d],...i}:l.unshift(i),m.faqs=l;try{await C.collection("freshmart").doc("cms_data").collection("faqs").doc(e).set(i,{merge:!0})}catch(c){console.warn("Gagal set ke sub-koleksi faqs:",c)}try{await C.collection("freshmart").doc("cms_data").set({faqs:l},{merge:!0})}catch(c){console.warn("Gagal update cms_data.faqs:",c)}F(),jt(),b("Q&A Berhasil Disimpan!"),Ge()},oo=e=>{St("Hapus Q&A","Yakin ingin menghapus pertanyaan ini?",async()=>{J("Menghapus Q&A...");let t=(m.faqs||[]).filter(a=>a.id!==e);m.faqs=t;try{await C.collection("freshmart").doc("cms_data").collection("faqs").doc(e).delete()}catch(a){console.warn("Gagal delete dari sub-koleksi faqs:",a)}try{await C.collection("freshmart").doc("cms_data").set({faqs:t},{merge:!0})}catch(a){console.warn("Gagal update cms_data.faqs:",a)}F(),b("Q&A Berhasil Dihapus!"),Ge()})};window.attachFAQRealtime=dt;window.renderStorefrontFAQ=Pe;window.selectFAQCategory=Js;window.filterStorefrontFAQ=Ys;window.toggleFAQAccordion=Zs;window.openAskQuestionModal=Xs;window.closeAskQuestionModal=Ot;window.submitCustomerQuestion=eo;window.rAdmFAQ=Ge;window.setAdminFAQFilter=to;window.openFAQModal=ao;window.closeAdminFAQModal=jt;window.saveAdminFAQ=so;window.deleteAdminFAQ=oo;let xt={},re="view-catalog";const ie=e=>{history.pushState({modal:e},"",window.location.href),z.push(e)},ne=(e,t,a)=>{if(!t){const s=z.lastIndexOf(e);if(s>-1){z.splice(s,1);try{history.back()}catch{}}}a()},fe=(e,t=!1)=>{t||history.pushState({view:e},"",window.location.href);const a=n(re);if(a){const o=a.querySelector(".scroll-content");o&&(xt[re]=o.scrollTop)}re==="view-orders"&&e!=="view-orders"&&typeof window.detachMyOrdersRealtime=="function"&&window.detachMyOrdersRealtime(),document.querySelectorAll(".view-section").forEach(o=>{o.classList.add("hidden"),o.classList.remove("flex")});const s=n(e);if(s){s.classList.remove("hidden"),s.classList.add("flex"),e==="view-cart"&&typeof window.renderCart=="function"?window.renderCart():e==="view-checkout"&&typeof window.rChck=="function"?window.rChck():e==="view-payment"&&typeof window.rPay=="function"?window.rPay():e==="view-wishlist"&&typeof window.renderWish=="function"?window.renderWish():e==="view-orders"&&typeof window.renderMyOrders=="function"?window.renderMyOrders():e==="view-faq"&&typeof window.renderStorefrontFAQ=="function"&&window.renderStorefrontFAQ();const o=s.querySelector(".scroll-content");if(o)if(t){const r=xt[e]||0;requestAnimationFrame(()=>requestAnimationFrame(()=>{o.scrollTop=r}))}else o.scrollTo(0,0)}re=e,qt(e)},qt=(e=re)=>{const t=n("bottom-nav-bar");if(!t)return;if(["view-cart","view-checkout","view-payment","view-admin-login","view-admin"].includes(e)){t.classList.add("bnav-hidden","translate-y-[250%]","opacity-0","pointer-events-none"),t.classList.remove("translate-y-0","opacity-100");return}if(t.classList.remove("bnav-hidden","translate-y-[250%]","opacity-0","pointer-events-none"),t.classList.add("translate-y-0","opacity-100"),document.querySelectorAll(".bnav-item").forEach(s=>s.classList.remove("active")),e==="view-catalog"){const s=n("bnav-home");s&&s.classList.add("active")}else if(e==="view-orders"){const s=n("bnav-orders");s&&s.classList.add("active")}else if(e==="view-wishlist"||e==="view-faq"){const s=n("bnav-menu");s&&s.classList.add("active")}},ro=e=>{if(typeof window.triggerHaptic=="function"&&window.triggerHaptic(e==="home"?"medium":"light"),e==="home")if(re==="view-catalog"){const t=document.querySelector("#view-catalog .scroll-content");t?t.scrollTo({top:0,behavior:"smooth"}):window.scrollTo({top:0,behavior:"smooth"})}else fe("view-catalog");else e==="categories"?typeof window.openCategoryModal=="function"&&window.openCategoryModal():e==="cart"?fe("view-cart"):e==="orders"?fe("view-orders"):e==="menu"&&typeof window.openQuickMenuModal=="function"&&window.openQuickMenuModal()},Ut=()=>{const e=document.querySelector("#view-catalog .scroll-content"),t=n("pull-to-refresh-indicator"),a=n("ptr-icon"),s=n("ptr-text");if(!e||!t)return;let o=0,r=0,i=!1,l=!1;const d=65;e.addEventListener("touchstart",c=>{e.scrollTop<=5&&!l&&(o=c.touches[0].pageY,i=!0)},{passive:!0}),e.addEventListener("touchmove",c=>{if(!i||l)return;r=c.touches[0].pageY;const u=r-o;if(u>15&&e.scrollTop<=5){t.classList.add("visible");const h=Math.min(u/d,1.5);a&&(a.style.transform=`rotate(${h*240}deg)`),s&&(s.innerText=u>=d?"Lepaskan untuk segarkan":"Tarik ke bawah untuk refresh")}else t.classList.remove("visible")},{passive:!0}),e.addEventListener("touchend",async()=>{if(!i||l)return;if(i=!1,r-o>=d&&e.scrollTop<=5){l=!0,typeof window.triggerHaptic=="function"&&window.triggerHaptic("medium"),a&&(a.className="fa-solid fa-arrows-rotate fa-spin text-[var(--color-primary)]",a.style.transform=""),s&&(s.innerText="Menyinkronkan katalog...");try{typeof window.syncAppMeta=="function"?await window.syncAppMeta():typeof window.loadAppData=="function"&&await window.loadAppData(),typeof window.rCat=="function"&&window.rCat(),typeof window.rDyn=="function"&&window.rDyn(),s&&(s.innerText="Katalog Terkini Disinkron!"),a&&(a.className="fa-solid fa-circle-check text-emerald-500"),typeof window.triggerHaptic=="function"&&window.triggerHaptic("success")}catch{s&&(s.innerText="Gagal sinkron data")}setTimeout(()=>{t.classList.remove("visible"),setTimeout(()=>{l=!1,a&&(a.className="fa-solid fa-arrows-rotate text-[var(--color-primary)] transition-transform duration-300",a.style.transform=""),s&&(s.innerText="Tarik ke bawah untuk refresh")},300)},600)}else t.classList.remove("visible"),a&&(a.style.transform="")})},Gt=e=>{e==="product"&&typeof window.closeProductModal=="function"?window.closeProductModal(!0):e==="category"&&typeof window.closeCategoryModal=="function"?window.closeCategoryModal(!0):e==="brand"&&typeof window.closeBrandModal=="function"?window.closeBrandModal(!0):e==="admin"&&typeof window.closeAdminModal=="function"?window.closeAdminModal(!0):e==="adminOrder"&&typeof window.closeOrderDetailModal=="function"?window.closeOrderDetailModal(!0):e==="receipt"&&typeof window.closeReceiptPreviewModal=="function"?window.closeReceiptPreviewModal(!0):e==="docPreview"&&typeof window.closeDocPreviewModal=="function"?window.closeDocPreviewModal(!0):e==="scanner"&&typeof window.closeCameraScanner=="function"?window.closeCameraScanner(!0):e==="confirm"&&typeof window.closeConfirm=="function"?window.closeConfirm(!0):e==="customerOrder"&&typeof window.closeCustomerOrderDetailModal=="function"?window.closeCustomerOrderDetailModal(!0):e==="restock"&&typeof window.closeRestockModal=="function"?window.closeRestockModal(!0):e==="quickprice"&&typeof window.closeQuickPriceModal=="function"?window.closeQuickPriceModal(!0):e==="member"&&typeof window.closeMemberModal=="function"?window.closeMemberModal(!0):e==="prompt"&&typeof window.closePrompt=="function"?window.closePrompt(!0):e==="review"&&typeof window.closeReviewModal=="function"?window.closeReviewModal(!0):e==="quickmenu"&&typeof window.closeQuickMenuModal=="function"?window.closeQuickMenuModal(!0):e==="variantPreview"&&typeof window.closeVariantPreviewModal=="function"?window.closeVariantPreviewModal(!0):e==="terms"&&typeof window.closeTermsModal=="function"?window.closeTermsModal(!0):e==="privacy"&&typeof window.closePrivacyModal=="function"?window.closePrivacyModal(!0):e==="askQuestion"&&typeof window.closeAskQuestionModal=="function"?window.closeAskQuestionModal(!0):e==="quickVariant"&&typeof window.closeQuickVariantSheet=="function"?window.closeQuickVariantSheet(!0):e==="adminFAQ"&&typeof window.closeAdminFAQModal=="function"?window.closeAdminFAQModal(!0):e==="printerSettings"&&typeof window.closePrinterSettingsModal=="function"?window.closePrinterSettingsModal(!0):e==="exitConfirm"&&typeof window.closeExitConfirmModal=="function"?window.closeExitConfirmModal(!0):e==="appDownload"&&typeof window.closeAppDownloadModal=="function"&&window.closeAppDownloadModal(!0)},Kt=()=>{const e=n("exit-confirm-modal");e&&(e.classList.contains("hidden")&&ie("exitConfirm"),e.classList.remove("hidden"),setTimeout(()=>{e.classList.remove("opacity-0");const t=n("exit-confirm-modal-box");t&&t.classList.remove("scale-95")},10),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},ct=(e=!1)=>{ne("exitConfirm",e,()=>{const t=n("exit-confirm-modal"),a=n("exit-confirm-modal-box");t&&t.classList.add("opacity-0"),a&&a.classList.add("scale-95"),setTimeout(()=>{t&&t.classList.add("hidden")},250)})},io=()=>{ct(!0),window.AndroidNativeApp&&typeof window.AndroidNativeApp.exitApp=="function"?window.AndroidNativeApp.exitApp():navigator.app&&typeof navigator.app.exitApp=="function"?navigator.app.exitApp():(typeof window.showToast=="function"&&window.showToast("Sampai jumpa kembali di Toko Putri! 🙏"),setTimeout(()=>{try{window.close()}catch{}},400))},no=()=>{if(z.length>0){try{window.history.back()}catch{const a=z.pop();Gt(a)}return}if(re==="view-admin"){typeof window.showConfirm=="function"&&window.showConfirm("Keluar Seller","Apakah anda akan keluar dari dashboard seller?",()=>{typeof window.logoutAdmin=="function"&&window.logoutAdmin()},"Ya, Keluar",!0);return}if(re!=="view-catalog"){fe("view-catalog");return}const e=n("exit-confirm-modal");e&&!e.classList.contains("hidden")?ct():Kt()},Ht=()=>{Ut(),window.addEventListener("popstate",e=>{if(z.length){const t=z.pop();Gt(t)}else{const t=e.state||{},a=t.view||null;if(window.isAdm||window.__localIsAdm)a==="view-admin"?(fe("view-admin",!0),t.tab&&typeof window.openAdminTab=="function"?window.openAdminTab(t.tab,!0):typeof window.openAdminMenu=="function"&&window.openAdminMenu()):(history.pushState({view:"view-admin"},"",window.location.href),typeof window.showConfirm=="function"&&window.showConfirm("Keluar Seller","Apakah anda akan keluar dari dashboard seller?",()=>{typeof window.logoutAdmin=="function"&&window.logoutAdmin()},"Ya, Keluar",!0));else if(a){let o=a;a==="view-admin"&&(o="view-admin-login"),fe(o,!0)}else fe("view-catalog",!0)}})};window.pushModalHistory=ie;window.requestCloseModal=ne;window.changeView=fe;window.setupHistoryRouter=Ht;window.onBottomNavClick=ro;window.updateBottomNav=qt;window.initPullToRefresh=Ut;window.handleAppBackButton=no;window.openExitConfirmModal=Kt;window.closeExitConfirmModal=ct;window.confirmExitApp=io;try{Object.defineProperty(window,"curViewName",{get:()=>re,set:e=>{re=e},configurable:!0})}catch{}const lo="admgaffidigital/tokoputri",co=`https://api.github.com/repos/${lo}/releases/latest`,et="https://github.com/admgaffidigital/tokoputri/releases/latest/download/TokoPutri.apk";let ye=null,Qe=!1;const po=e=>!e||isNaN(e)?"8.0 MB":`${(e/(1024*1024)).toFixed(1)} MB`,mo=e=>{if(!e)return"Terbaru";try{return new Date(e).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"})}catch{return"Terbaru"}},uo=async()=>{if(ye)return ye;if(Qe)return null;Qe=!0;try{const e=await fetch(co,{headers:{Accept:"application/vnd.github.v3+json"},cache:"no-store"});if(e.ok){const t=await e.json(),a=t.assets?.find(s=>s.name?.toLowerCase().endsWith(".apk"))||t.assets?.[0];ye={tagName:t.tag_name||"v1.8.5",name:t.name||"Toko Putri v1.8.5",publishedAt:mo(t.published_at),fileSize:a?po(a.size):"8.0 MB",downloadUrl:a?.browser_download_url||et,notes:t.body||"",isLiveFetched:!0}}else throw new Error(`GitHub API HTTP ${e.status}`)}catch{const t=ea(m)||"v1.8.5";ye={tagName:t,name:`Toko Putri ${t}`,publishedAt:"Rilis Resmi",fileSize:"8.0 MB",downloadUrl:et,notes:"",isLiveFetched:!1}}finally{Qe=!1}return ye},fo=()=>{let e=n("app-download-modal");return e||(e=document.createElement("div"),e.id="app-download-modal",e.className="fixed inset-0 z-[125] bg-slate-950/80 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4 opacity-0 transition-opacity duration-300",e.onclick=t=>{t.target===e&&Vt()},e.innerHTML=`
    <div id="app-download-modal-box" class="relative w-full max-w-xl max-h-[92dvh] sm:max-h-[88dvh] bg-white dark:bg-[#0b1121] rounded-t-3xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden shadow-2xl transform translate-y-full sm:translate-y-8 transition-transform duration-300">
        
        <!-- Header Gaya Google Play Store -->
        <div class="px-4 sm:px-6 py-3.5 border-b border-slate-100 dark:border-slate-800/80 flex items-center justify-between shrink-0 bg-slate-50/70 dark:bg-[#0b1121]/90">
            <div class="flex items-center gap-2">
                <!-- Ikon Google Play Store Segitiga Vektor -->
                <div class="w-7 h-7 rounded-lg bg-slate-900 dark:bg-slate-800 flex items-center justify-center p-1 shadow-2xs">
                    <svg class="w-4 h-4" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M54.7 13.9C46.8 18.2 41.5 26.5 41.5 36.4V475.6C41.5 485.5 46.8 493.8 54.7 498.1L277.6 256L54.7 13.9Z" fill="#2196F3"/>
                        <path d="M352.3 181.3L277.6 256L352.3 330.7L436.4 282.8C454.1 272.8 454.1 239.2 436.4 229.2L352.3 181.3Z" fill="#FFC107"/>
                        <path d="M277.6 256L54.7 498.1C61.4 501.7 69.5 502.2 77.2 497.8L352.3 330.7L277.6 256Z" fill="#4CAF50"/>
                        <path d="M277.6 256L352.3 181.3L77.2 14.2C69.5 9.8 61.4 10.3 54.7 13.9L277.6 256Z" fill="#F44336"/>
                    </svg>
                </div>
                <div>
                    <div class="flex items-center gap-1.5">
                        <span class="text-xs font-black tracking-tight text-slate-800 dark:text-white uppercase">Google Play</span>
                        <span class="text-[9px] font-bold text-slate-400 dark:text-slate-500">• Storefront Resmi</span>
                    </div>
                </div>
            </div>

            <div class="flex items-center gap-2">
                <!-- Badge Play Protect -->
                <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800/60 text-[10px] font-extrabold text-emerald-700 dark:text-emerald-300 shadow-2xs">
                    <i class="fa-solid fa-shield-halved text-emerald-500"></i>
                    <span>Play Protect</span>
                </div>
                <!-- Tombol Tutup -->
                <button type="button" onclick="closeAppDownloadModal()" class="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-white flex items-center justify-center transition-all cursor-pointer" aria-label="Tutup">
                    <i class="fa-solid fa-xmark text-sm"></i>
                </button>
            </div>
        </div>

        <!-- Scrollable Modal Body -->
        <div class="p-4 sm:p-6 overflow-y-auto flex-1 hide-scrollbar space-y-5">
            
            <!-- Kartu Identitas Aplikasi (Play Store Layout) -->
            <div class="flex items-start gap-4">
                <!-- App Icon HD -->
                <div class="relative w-20 h-20 sm:w-22 sm:h-22 rounded-2xl sm:rounded-3xl bg-[#0f172a] p-1 shadow-lg ring-1 ring-slate-200 dark:ring-slate-700 shrink-0 overflow-hidden flex items-center justify-center">
                    <img src="/official_logo.png" alt="Logo Resmi Toko Putri" class="w-full h-full object-contain p-0.5" onerror="this.src='/logo.png'">
                    <span class="absolute bottom-1 right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full" title="Status: Online & Ready"></span>
                </div>

                <!-- Info Nama & Developer -->
                <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-2 flex-wrap">
                        <h2 class="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                            Toko Putri
                        </h2>
                        <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60 text-[9px] font-black uppercase tracking-wider">
                            <i class="fa-solid fa-crown text-[8px]"></i> Pilihan Kasir
                        </span>
                    </div>
                    <p class="text-xs font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">
                        Adm Gaffi Digital • Official Partner
                    </p>
                    <p class="text-[11px] font-semibold text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                        Aplikasi resmi kasir, katalog grosir teknik, cetak struk POS, dan belanja online Toko Putri.
                    </p>
                </div>
            </div>

            <!-- Strip Metrik Google Play Store (4 Kolom Interaktif) -->
            <div class="grid grid-cols-4 gap-2 py-3 px-2 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 text-center">
                <!-- Rating -->
                <div class="flex flex-col items-center justify-center">
                    <div class="flex items-center gap-1 text-slate-900 dark:text-white text-xs sm:text-sm font-black">
                        <span>4.9</span>
                        <i class="fa-solid fa-star text-[10px] text-amber-400"></i>
                    </div>
                    <span class="text-[9px] font-semibold text-slate-400 dark:text-slate-500 mt-0.5">1.2 rb ulasan</span>
                </div>
                <!-- Unduhan -->
                <div class="flex flex-col items-center justify-center border-l border-slate-200 dark:border-slate-800">
                    <div class="flex items-center gap-1 text-slate-900 dark:text-white text-xs sm:text-sm font-black">
                        <span>10 rb+</span>
                    </div>
                    <span class="text-[9px] font-semibold text-slate-400 dark:text-slate-500 mt-0.5">Unduhan</span>
                </div>
                <!-- Ukuran APK -->
                <div class="flex flex-col items-center justify-center border-l border-slate-200 dark:border-slate-800">
                    <div class="flex items-center gap-1 text-slate-900 dark:text-white text-xs sm:text-sm font-black" id="app-modal-filesize">
                        <span>8.0 MB</span>
                    </div>
                    <span class="text-[9px] font-semibold text-slate-400 dark:text-slate-500 mt-0.5">Ukuran APK</span>
                </div>
                <!-- Rating Konten -->
                <div class="flex flex-col items-center justify-center border-l border-slate-200 dark:border-slate-800">
                    <div class="inline-flex items-center justify-center w-5 h-5 rounded border border-slate-400 dark:border-slate-600 text-[10px] font-black text-slate-700 dark:text-slate-300">
                        3+
                    </div>
                    <span class="text-[9px] font-semibold text-slate-400 dark:text-slate-500 mt-0.5">Semua Umur</span>
                </div>
            </div>

            <!-- Tombol CTA Utama Gaya Google Play Store (Hijau Emerald Signature) -->
            <div class="space-y-2">
                <button id="btn-download-apk-action" onclick="downloadLatestApk()" class="w-full py-3.5 px-6 rounded-2xl bg-[#01875f] hover:bg-[#01704f] active:scale-[0.98] text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-3 shadow-lg shadow-emerald-600/25 transition-all cursor-pointer group">
                    <i class="fa-solid fa-download group-hover:translate-y-0.5 transition-transform" id="btn-download-apk-icon"></i>
                    <span id="btn-download-apk-text">Unduh &amp; Pasang APK (<span id="app-modal-version-tag">v1.8.5</span>)</span>
                </button>
                <div class="flex items-center justify-between px-1 text-[10px] font-bold text-slate-400 dark:text-slate-500">
                    <span class="flex items-center gap-1.5">
                        <i class="fa-brands fa-android text-emerald-500 text-xs"></i>
                        <span>Kompatibel: Android 7.0 (Nougat) s/d Android 15</span>
                    </span>
                    <span id="app-modal-published-date" class="hidden sm:inline">Rilis: 18 Sep 2026</span>
                </div>
            </div>

            <!-- Kartu QR Code untuk Pengguna Desktop / Laptop -->
            <div id="app-desktop-qr-card" class="p-4 rounded-2xl bg-gradient-to-br from-slate-50 to-emerald-50/40 dark:from-slate-900/60 dark:to-emerald-950/20 border border-emerald-200/60 dark:border-emerald-800/40 flex flex-col sm:flex-row items-center gap-4">
                <div class="w-28 h-28 bg-white p-2 rounded-xl shadow-md border border-slate-200/80 dark:border-slate-700 shrink-0 flex items-center justify-center">
                    <img id="app-download-qr-img" src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https%3A%2F%2Fgithub.com%2Fadmgaffidigital%2Ftokoputri%2Freleases%2Flatest%2Fdownload%2FTokoPutri.apk" alt="QR Code Unduh APK" class="w-full h-full object-contain" loading="lazy">
                </div>
                <div class="flex-1 text-center sm:text-left">
                    <div class="flex items-center justify-center sm:justify-start gap-1.5 text-xs font-black text-slate-800 dark:text-white">
                        <i class="fa-solid fa-qrcode text-emerald-600 dark:text-emerald-400"></i>
                        <span>Scan untuk Unduh di Ponsel</span>
                    </div>
                    <p class="text-[11px] font-semibold text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                        Buka kamera HP Android Anda dan arahkan ke kode QR ini untuk mengunduh langsung ke ponsel tanpa perlu memindahkan file dari komputer.
                    </p>
                    <div class="mt-2 inline-flex items-center gap-2 text-[10px] font-bold text-emerald-700 dark:text-emerald-300">
                        <i class="fa-solid fa-bolt-lightning text-amber-500"></i>
                        <span>Tautan Otomatis Selalu Versi Terkini</span>
                    </div>
                </div>
            </div>

            <!-- Apa yang Baru (Highlights Changelog v1.8.5) -->
            <div class="space-y-2.5">
                <div class="flex items-center justify-between">
                    <h3 class="text-xs sm:text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                        <i class="fa-solid fa-sparkles text-amber-500"></i>
                        <span>Apa yang Baru</span>
                    </h3>
                    <button type="button" onclick="closeAppDownloadModal(); if(typeof window.openChangelogModal==='function') window.openChangelogModal();" class="text-[10px] font-bold text-[var(--color-primary)] hover:underline cursor-pointer">
                        Lihat Semua Riwayat
                    </button>
                </div>

                <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 space-y-2 text-xs">
                    <div class="flex items-start gap-2.5 text-slate-700 dark:text-slate-300">
                        <i class="fa-solid fa-circle-check text-emerald-500 mt-0.5 text-[11px] shrink-0"></i>
                        <span class="font-medium text-[11px] leading-relaxed">
                            <b>Koneksi Perangkat Universal:</b> Pengaturan printer kasir Bluetooth thermal 58mm/80mm, USB OTG, & RawBT.
                        </span>
                    </div>
                    <div class="flex items-start gap-2.5 text-slate-700 dark:text-slate-300">
                        <i class="fa-solid fa-circle-check text-emerald-500 mt-0.5 text-[11px] shrink-0"></i>
                        <span class="font-medium text-[11px] leading-relaxed">
                            <b>Navigasi WhatsApp & Exit Dialog:</b> WhatsApp membuka aplikasi eksternal tanpa reload, tombol Back Android menampilkan dialog keluar elegan.
                        </span>
                    </div>
                    <div class="flex items-start gap-2.5 text-slate-700 dark:text-slate-300">
                        <i class="fa-solid fa-circle-check text-emerald-500 mt-0.5 text-[11px] shrink-0"></i>
                        <span class="font-medium text-[11px] leading-relaxed">
                            <b>Splash Screen & Logo HD:</b> Penyempurnaan tampilan pembuka aplikasi dengan tema Dark Slate & lambang emas Toko Putri.
                        </span>
                    </div>
                    <div class="flex items-start gap-2.5 text-slate-700 dark:text-slate-300">
                        <i class="fa-solid fa-circle-check text-emerald-500 mt-0.5 text-[11px] shrink-0"></i>
                        <span class="font-medium text-[11px] leading-relaxed">
                            <b>Real-Time Auto-Sync:</b> Pembaruan sistem dan stok otomatis tersinkronisasi langsung dari cloud.
                        </span>
                    </div>
                </div>
            </div>

            <!-- 3 Langkah Mudah Instalasi APK -->
            <div class="space-y-2">
                <h3 class="text-xs sm:text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                    <i class="fa-solid fa-circle-info text-blue-500"></i>
                    <span>Cara Pasang Aplikasi (APK) di Android</span>
                </h3>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                        <div class="w-6 h-6 rounded-lg bg-blue-500 text-white text-[11px] font-black flex items-center justify-center mb-1.5">1</div>
                        <h4 class="text-[11px] font-bold text-slate-800 dark:text-white">Unduh APK</h4>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">Ketuk tombol hijau di atas untuk mengunduh TokoPutri.apk.</p>
                    </div>
                    <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                        <div class="w-6 h-6 rounded-lg bg-blue-500 text-white text-[11px] font-black flex items-center justify-center mb-1.5">2</div>
                        <h4 class="text-[11px] font-bold text-slate-800 dark:text-white">Buka File</h4>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">Ketuk notifikasi unduhan selesai di HP Anda.</p>
                    </div>
                    <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                        <div class="w-6 h-6 rounded-lg bg-blue-500 text-white text-[11px] font-black flex items-center justify-center mb-1.5">3</div>
                        <h4 class="text-[11px] font-bold text-slate-800 dark:text-white">Izinkan & Pasang</h4>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">Pilih 'Tetap Pasang' jika muncul peringatan sumber tidak dikenal.</p>
                    </div>
                </div>
            </div>

            <!-- Jaminan Keamanan & Privasi -->
            <div class="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3">
                <i class="fa-solid fa-certificate text-emerald-500 text-xl shrink-0"></i>
                <div class="text-[10px] sm:text-[11px] font-semibold text-emerald-900 dark:text-emerald-200">
                    <span class="font-extrabold">100% Bebas Malware &amp; Iklan:</span> File APK ini dikompilasi secara otomatis langsung dari repository resmi GitHub Toko Putri menggunakan GitHub Actions.
                </div>
            </div>

        </div>

        <!-- Footer Modal -->
        <div class="p-3.5 sm:p-4 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/80 dark:bg-[#0b1121]/90 flex items-center justify-between shrink-0">
            <div class="flex items-center gap-2 text-[10px] font-bold text-slate-400 dark:text-slate-500">
                <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Server Rilis: GitHub CDN Aktif</span>
            </div>
            <button type="button" onclick="closeAppDownloadModal()" class="px-5 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer">
                Tutup
            </button>
        </div>
    </div>`,document.body.appendChild(e),e)},wo=async()=>{const e=fo();if(!e)return;ie("appDownload"),e.style.display="flex",requestAnimationFrame(()=>{e.classList.remove("opacity-0");const a=n("app-download-modal-box");a&&a.classList.remove("translate-y-full","sm:translate-y-8")}),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light");const t=await uo();if(t){const a=n("app-modal-version-tag"),s=n("app-modal-filesize"),o=n("app-modal-published-date");a&&(a.textContent=t.tagName),s&&(s.innerHTML=`<span>${p(t.fileSize)}</span>`),o&&(o.textContent=`Rilis: ${p(t.publishedAt)}`)}},Vt=(e=!1)=>{const t=n("app-download-modal");!t||t.style.display==="none"||ne("appDownload",e,()=>{t.classList.add("opacity-0");const a=n("app-download-modal-box");a&&a.classList.add("translate-y-full","sm:translate-y-8"),setTimeout(()=>{t.style.display="none"},300)})},bo=()=>{const e=n("btn-download-apk-action"),t=n("btn-download-apk-icon"),a=n("btn-download-apk-text");e&&e.classList.add("opacity-80","pointer-events-none"),t&&(t.className="fa-solid fa-spinner fa-spin"),a&&(a.textContent="Menghubungkan ke Server Rilis..."),typeof window.triggerHaptic=="function"&&window.triggerHaptic("medium"),typeof window.showToast=="function"&&window.showToast("Memulai unduhan TokoPutri.apk terbaru. Cek panel notifikasi HP Anda!");const s=ye?.downloadUrl||et,o=document.createElement("a");o.href=s,o.setAttribute("download","TokoPutri.apk"),o.target="_blank",o.rel="noopener noreferrer",document.body.appendChild(o),o.click(),document.body.removeChild(o),setTimeout(()=>{if(e&&e.classList.remove("opacity-80","pointer-events-none"),t&&(t.className="fa-solid fa-circle-check text-white"),a){const r=ye?.tagName||"v1.8.5";a.textContent=`Unduh Ulang APK (${r})`}},2500)};window.openAppDownloadModal=wo;window.closeAppDownloadModal=Vt;window.downloadLatestApk=bo;const Ke="B7qgwFQqtYLpBqdaK69HgtCfR7s5t67p",go=20*1024*1024,xo=["video/mp4","video/webm","video/quicktime","video/x-msvideo","video/3gpp"],Qt=["image/jpeg","image/png","image/webp","image/gif"],ho=async(e,t,a=null)=>{const s=e.files[0];if(!s)return;if(!Qt.includes(s.type))return e.value="",b("Hanya file JPG, PNG, WEBP, atau GIF yang diizinkan!");if(s.size>3*1024*1024)return e.value="",b("Maksimal gambar 3MB!");const o=window.GAS_UPLOAD_URL||je;if(o.includes("ISI_DENGAN"))return e.value="",b("URL Script Google belum diisi!");J("Upload Gambar...");const r=new FileReader;r.readAsDataURL(s),r.onload=async()=>{try{const i=r.result.split(",")[1],l=s.name.replace(/[^a-zA-Z0-9.]/g,"_"),d={name:"POS_"+Date.now()+"_"+l,mimeType:s.type,data:i,token:Ke},u=await(await fetch(o,{method:"POST",body:JSON.stringify(d),headers:{"Content-Type":"text/plain;charset=utf-8"},redirect:"follow"})).text();let h;try{h=JSON.parse(u)}catch{return b("Error Server!")}if(h.status==="success"){const P=Oe(h.url),T=n(t);T&&(T.value=P,T.dispatchEvent(new Event("input",{bubbles:!0})),T.dispatchEvent(new Event("change",{bubbles:!0})),a!==null&&typeof window.uVar=="function"&&window.uVar(a,"img",P),b("Gambar diupload!"))}else b("Gagal: "+(h.message||"Error"))}catch{b("Koneksi terputus saat upload.")}finally{F(),e.value=""}},r.onerror=()=>{b("Gagal membaca file!"),F(),e.value=""}},vo=async(e,t)=>{const a=e.files[0];if(!a)return;if(!xo.includes(a.type))return e.value="",b("Hanya file MP4, WEBM, MOV, atau AVI yang diizinkan!");if(a.size>go)return e.value="",b("Video terlalu besar! Maksimal 20MB.");const s=window.GAS_UPLOAD_URL||je;if(s.includes("ISI_DENGAN"))return e.value="",b("URL Script Google belum diisi di Pengaturan!");J("Upload Video... (harap tunggu)");const o=new FileReader;o.readAsDataURL(a),o.onload=async()=>{try{const r=o.result.split(",")[1],i=a.name.replace(/[^a-zA-Z0-9.]/g,"_"),l={name:"VID_"+Date.now()+"_"+i,mimeType:a.type,data:r,token:Ke},c=await(await fetch(s,{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"text/plain;charset=utf-8"},redirect:"follow"})).text();let u;try{u=JSON.parse(c)}catch{return b("Error Server GAS!")}if(u.status==="success"){const h="https://drive.google.com/file/d/"+u.fileId+"/preview",P=n(t);P&&(P.value=h,P.dispatchEvent(new Event("input",{bubbles:!0})),P.dispatchEvent(new Event("change",{bubbles:!0})),b("Video berhasil diupload ke Drive!"))}else b("Gagal upload: "+(u.message||"Error"))}catch{b("Koneksi terputus saat upload video.")}finally{F(),e.value=""}},o.onerror=()=>{b("Gagal membaca file video!"),F(),e.value=""}},yo=async(e,t)=>{const a=e.files[0];if(!a)return;if(!Qt.includes(a.type))return e.value="",b("Hanya file JPG, PNG, WEBP, atau GIF yang diizinkan!");if(a.size>3*1024*1024)return e.value="",b("Maksimal gambar 3MB!");const s=window.GAS_UPLOAD_URL||je;if(s.includes("ISI_DENGAN"))return e.value="",b("URL Script Google belum diisi!");J("Menyisipkan Gambar...");const o=new FileReader;o.readAsDataURL(a),o.onload=async()=>{try{const r=o.result.split(",")[1],i=a.name.replace(/[^a-zA-Z0-9.]/g,"_"),l={name:"RTE_"+Date.now()+"_"+i,mimeType:a.type,data:r,token:Ke},c=await(await fetch(s,{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"text/plain;charset=utf-8"},redirect:"follow"})).text();let u;try{u=JSON.parse(c)}catch{return b("Error Server!")}if(u.status==="success"){const h=Oe(u.url),P=n(t);P&&(P.focus(),document.execCommand("insertHTML",!1,`<br><img loading="lazy" src="${h}" style="max-width:100%; border-radius:12px; margin: 10px 0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);" ><br>`)),b("Gambar berhasil disisipkan!")}else b("Gagal upload gambar.")}catch{b("Gagal koneksi.")}finally{F(),e.value=""}},o.onerror=()=>{b("Gagal membaca file!"),F(),e.value=""}};window.GAS_SECRET_TOKEN=Ke;window.handleImageUpload=ho;window.handleVideoUpload=vo;window.handleRTEditorImage=yo;window.setCat=e=>{Dt(e),ot(1),typeof window.rCat=="function"&&window.rCat()};window.setBrand=e=>{Ct(e),ot(1),typeof window.rCat=="function"&&window.rCat()};const ko=()=>{let e="",t=Je==="Semua Produk";e+=`
    <button onclick="setCat('Semua Produk'); closeCategoryModal()" class="w-full flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl border transition-all active:scale-[0.98] ${t?"bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)] shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]":"bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40"} group">
        <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${t?"bg-[var(--color-primary)] text-white border-none":"bg-white text-slate-400 border border-slate-200 dark:border-slate-600 group-hover:text-[var(--color-primary)]"} flex items-center justify-center shadow-sm shrink-0 overflow-hidden transition-colors">
            <i class="fa-solid fa-layer-group text-base sm:text-lg"></i>
        </div>
        <span class="text-xs sm:text-sm font-bold uppercase tracking-widest text-left flex-1 ${t?"text-[var(--color-primary)]":"text-slate-600 dark:text-slate-300"}">SEMUA</span>
        <i class="fa-solid fa-circle-check text-base ${t?"text-[var(--color-primary)]":"text-slate-300 dark:text-slate-600"}"></i>
    </button>`,m.categories.forEach(r=>{let i=Je===r.name,l=r.img?`<img loading="lazy" src="${p(r.img)}" alt="${p(r.name)}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='https://placehold.co/100?text=Cat'">`:'<i class="fa-solid fa-box text-base sm:text-lg"></i>';e+=`
        <button onclick="setCat('${p(r.name)}'); closeCategoryModal()" class="w-full flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl border transition-all active:scale-[0.98] ${i?"bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)] shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]":"bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40"} group">
            <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm shrink-0 text-slate-400 group-hover:text-[var(--color-primary)] overflow-hidden border border-slate-200 dark:border-slate-600">
                ${l}
            </div>
            <span class="text-xs sm:text-sm font-bold uppercase tracking-widest text-left flex-1 line-clamp-1 ${i?"text-[var(--color-primary)]":"text-slate-600 dark:text-slate-300"}">${p(r.name)}</span>
            <i class="fa-solid fa-circle-check text-base ${i?"text-[var(--color-primary)]":"text-slate-300 dark:text-slate-600"}"></i>
        </button>`});const a=n("modal-category-list");a&&(a.innerHTML=`<div class="flex flex-col gap-2.5 pb-6 w-full">${e}</div>`);const s=n("category-modal"),o=n("category-modal-content");s&&o&&(s.classList.contains("hidden")&&ie("category"),L("category-modal"),setTimeout(()=>{s.classList.remove("opacity-0"),o.classList.remove("translate-y-full","sm:translate-y-10")},10))};window.openCategoryModal=ko;window.openBrandModal=()=>{let e="",t=ze==="Semua Merek";e+=`
    <button onclick="setBrand('Semua Merek'); closeBrandModal()" class="flex flex-col items-center justify-start p-2.5 sm:p-3.5 rounded-2xl border transition-all ${t?"bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)] shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]":"bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40"} group">
        <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${t?"bg-[var(--color-primary)] text-white border-none":"bg-white text-slate-400 border border-slate-200 dark:border-slate-600 group-hover:text-[var(--color-primary)]"} flex items-center justify-center shadow-sm mb-2.5 transition-colors shrink-0">
            <i class="fa-solid fa-copyright text-lg sm:text-xl"></i>
        </div>
        <span class="text-[9px] font-bold uppercase tracking-widest text-center leading-tight line-clamp-2 w-full break-words ${t?"text-[var(--color-primary)]":"text-slate-600 dark:text-slate-300"}">SEMUA MEREK</span>
    </button>`,m.brands.forEach(r=>{let i=ze===r.name,l=r.img?`<img loading="lazy" src="${p(r.img)}" alt="${p(r.name)}" class="w-full h-full object-contain p-1.5" >`:'<i class="fa-solid fa-tag text-lg sm:text-xl"></i>';e+=`
        <button onclick="setBrand('${p(r.name)}'); closeBrandModal()" class="flex flex-col items-center justify-start p-2.5 sm:p-3.5 rounded-2xl border transition-all ${i?"bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)] shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]":"bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40"} group">
            <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-2.5 text-slate-400 group-hover:text-[var(--color-primary)] overflow-hidden shrink-0 border border-slate-200 dark:border-slate-600">
                ${l}
            </div>
            <span class="text-[9px] font-bold uppercase tracking-widest text-center leading-tight line-clamp-2 w-full break-words ${i?"text-[var(--color-primary)]":"text-slate-600 dark:text-slate-300"}">${p(r.name)}</span>
        </button>`});const a=n("modal-brand-grid");a&&(a.innerHTML=e);const s=n("brand-modal"),o=n("brand-modal-content");s&&o&&(s.classList.contains("hidden")&&ie("brand"),L("brand-modal"),setTimeout(()=>{s.classList.remove("opacity-0"),o.classList.remove("translate-y-full","sm:translate-y-10")},10))};window.closeCategoryModal=(e=!1)=>{const t=n("category-modal"),a=n("category-modal-content");t&&a&&ne("category",e,()=>{t.classList.add("opacity-0"),a.classList.add("translate-y-full","sm:translate-y-10"),setTimeout(()=>y("category-modal"),300)})};window.closeBrandModal=(e=!1)=>{const t=n("brand-modal"),a=n("brand-modal-content");t&&a&&ne("brand",e,()=>{t.classList.add("opacity-0"),a.classList.add("translate-y-full","sm:translate-y-10"),setTimeout(()=>y("brand-modal"),300)})};window.openQuickMenuModal=()=>{const e=n("quickmenu-modal"),t=n("quickmenu-modal-content");e&&t&&(e.classList.contains("hidden")&&ie("quickmenu"),L("quickmenu-modal"),setTimeout(()=>{e.classList.remove("opacity-0"),t.classList.remove("translate-y-full","sm:translate-y-10")},10))};window.openTermsModal=()=>{const e=`
      <div class="space-y-3">
        <div class="p-3.5 rounded-2xl bg-[rgba(var(--color-primary-rgb),0.06)] border border-[rgba(var(--color-primary-rgb),0.2)] flex items-start gap-3">
          <i class="fa-solid fa-file-shield text-[var(--color-primary)] text-base shrink-0 mt-0.5"></i>
          <p class="text-xs leading-relaxed text-slate-700 dark:text-slate-200 font-medium">
            Dengan mengakses dan bertransaksi di website <b>Toko Putri</b>, Anda menyetujui seluruh syarat dan ketentuan layanan yang berlaku berikut ini:
          </p>
        </div>

        <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 space-y-2">
          <div class="flex items-center gap-2.5">
            <span class="w-6 h-6 rounded-lg primary-bg text-white text-xs font-black flex items-center justify-center shrink-0">1</span>
            <h4 class="font-bold text-slate-800 dark:text-white text-sm">Ketentuan Umum</h4>
          </div>
          <p class="text-xs leading-relaxed pl-8 text-slate-600 dark:text-slate-300">
            Layanan website Toko Putri diperuntukkan bagi pelanggan yang ingin memesan perkakas, alat teknik, dan perlengkapan pertukangan secara online.
          </p>
        </div>

        <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 space-y-2">
          <div class="flex items-center gap-2.5">
            <span class="w-6 h-6 rounded-lg primary-bg text-white text-xs font-black flex items-center justify-center shrink-0">2</span>
            <h4 class="font-bold text-slate-800 dark:text-white text-sm">Pemesanan &amp; Hubungi Admin</h4>
          </div>
          <p class="text-xs leading-relaxed pl-8 text-slate-600 dark:text-slate-300">
            Setiap pesanan yang dibuat melalui keranjang belanja akan diteruskan secara otomatis ke nomor WhatsApp admin untuk konfirmasi akhir dan pengiriman.
          </p>
        </div>

        <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 space-y-2">
          <div class="flex items-center gap-2.5">
            <span class="w-6 h-6 rounded-lg primary-bg text-white text-xs font-black flex items-center justify-center shrink-0">3</span>
            <h4 class="font-bold text-slate-800 dark:text-white text-sm">Kebijakan Pembayaran</h4>
          </div>
          <p class="text-xs leading-relaxed pl-8 text-slate-600 dark:text-slate-300">
            Kami mendukung pembayaran Tunai (Cash), COD, Transfer Bank, QRIS, dan sistem Tempo (Kredit) untuk pelanggan dengan limit piutang aktif.
          </p>
        </div>

        <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 space-y-2">
          <div class="flex items-center gap-2.5">
            <span class="w-6 h-6 rounded-lg primary-bg text-white text-xs font-black flex items-center justify-center shrink-0">4</span>
            <h4 class="font-bold text-slate-800 dark:text-white text-sm">Kebijakan Retur &amp; Barang PO</h4>
          </div>
          <p class="text-xs leading-relaxed pl-8 text-slate-600 dark:text-slate-300">
            Barang Pre-Order (PO) dikirim sesuai estimasi. Khusus produk cat bangunan yang dicampur (tinting) tidak dapat dibatalkan atau diretur.
          </p>
        </div>
      </div>
    `,t=m?.store?.terms,a=t?t.includes("<")?t:`<div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 leading-relaxed text-xs sm:text-sm text-slate-600 dark:text-slate-300 whitespace-pre-line">${t}</div>`:e;O("terms-modal-content-body",a);const s=n("terms-modal"),o=n("terms-modal-content");s&&o&&(s.classList.contains("hidden")&&ie("terms"),L("terms-modal"),setTimeout(()=>{s.classList.remove("opacity-0"),o.classList.remove("translate-y-full","sm:translate-y-10")},10))};window.closeTermsModal=(e=!1)=>{const t=n("terms-modal"),a=n("terms-modal-content");t&&a&&ne("terms",e,()=>{t.classList.add("opacity-0"),a.classList.add("translate-y-full","sm:translate-y-10"),setTimeout(()=>y("terms-modal"),300)})};window.openPrivacyModal=()=>{const e=`
      <div class="space-y-3">
        <div class="p-3.5 rounded-2xl bg-[rgba(var(--color-primary-rgb),0.06)] border border-[rgba(var(--color-primary-rgb),0.2)] flex items-start gap-3">
          <i class="fa-solid fa-user-shield text-[var(--color-primary)] text-base shrink-0 mt-0.5"></i>
          <p class="text-xs leading-relaxed text-slate-700 dark:text-slate-200 font-medium">
            Keamanan data dan privasi Anda adalah prioritas utama kami di <b>Toko Putri</b>. Berikut komitmen perlindungan data pelanggan:
          </p>
        </div>

        <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 space-y-2">
          <div class="flex items-center gap-2.5">
            <span class="w-6 h-6 rounded-lg primary-bg text-white text-xs font-black flex items-center justify-center shrink-0">1</span>
            <h4 class="font-bold text-slate-800 dark:text-white text-sm">Data Yang Kami Kumpulkan</h4>
          </div>
          <p class="text-xs leading-relaxed pl-8 text-slate-600 dark:text-slate-300">
            Kami mengumpulkan data berupa Nama, Nomor WhatsApp, dan Alamat Pengiriman Anda saat membuat pesanan untuk keperluan pengantaran barang.
          </p>
        </div>

        <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 space-y-2">
          <div class="flex items-center gap-2.5">
            <span class="w-6 h-6 rounded-lg primary-bg text-white text-xs font-black flex items-center justify-center shrink-0">2</span>
            <h4 class="font-bold text-slate-800 dark:text-white text-sm">Kerahasiaan Data</h4>
          </div>
          <p class="text-xs leading-relaxed pl-8 text-slate-600 dark:text-slate-300">
            Toko Putri berkomitmen penuh untuk menjaga kerahasiaan data pribadi pelanggan dan tidak akan membagikannya ke pihak ketiga manapun.
          </p>
        </div>

        <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 space-y-2">
          <div class="flex items-center gap-2.5">
            <span class="w-6 h-6 rounded-lg primary-bg text-white text-xs font-black flex items-center justify-center shrink-0">3</span>
            <h4 class="font-bold text-slate-800 dark:text-white text-sm">Keamanan Data Transaksi</h4>
          </div>
          <p class="text-xs leading-relaxed pl-8 text-slate-600 dark:text-slate-300">
            Semua file bukti pembayaran yang diunggah diproses melalui server terenkripsi yang aman untuk mencegah kebocoran data sensitif.
          </p>
        </div>
      </div>
    `,t=m?.store?.privacy,a=t?t.includes("<")?t:`<div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 leading-relaxed text-xs sm:text-sm text-slate-600 dark:text-slate-300 whitespace-pre-line">${t}</div>`:e;O("privacy-modal-content-body",a);const s=n("privacy-modal"),o=n("privacy-modal-content");s&&o&&(s.classList.contains("hidden")&&ie("privacy"),L("privacy-modal"),setTimeout(()=>{s.classList.remove("opacity-0"),o.classList.remove("translate-y-full","sm:translate-y-10")},10))};window.closePrivacyModal=(e=!1)=>{const t=n("privacy-modal"),a=n("privacy-modal-content");t&&a&&ne("privacy",e,()=>{t.classList.add("opacity-0"),a.classList.add("translate-y-full","sm:translate-y-10"),setTimeout(()=>y("privacy-modal"),300)})};window.closeQuickMenuModal=(e=!1)=>{const t=n("quickmenu-modal"),a=n("quickmenu-modal-content");t&&a&&ne("quickmenu",e,()=>{t.classList.add("opacity-0"),a.classList.add("translate-y-full","sm:translate-y-10"),setTimeout(()=>y("quickmenu-modal"),300)})};window.openShoppingGuideModal=()=>{const e=n("shopping-guide-modal"),t=n("shopping-guide-modal-content");e&&t&&(e.classList.contains("hidden")&&ie("guide"),L("shopping-guide-modal"),setTimeout(()=>{e.classList.remove("opacity-0"),t.classList.remove("translate-y-full","sm:translate-y-10")},10))};window.closeShoppingGuideModal=(e=!1)=>{const t=n("shopping-guide-modal"),a=n("shopping-guide-modal-content");t&&a&&ne("guide",e,()=>{t.classList.add("opacity-0"),a.classList.add("translate-y-full","sm:translate-y-10"),setTimeout(()=>y("shopping-guide-modal"),300)})};window.navigateFromQuickMenu=e=>{closeQuickMenuModal(!0);const t=z.indexOf("quickmenu");t>-1&&z.splice(t,1),typeof e=="function"?(history.replaceState({view:re},"",window.location.href),e()):(history.replaceState({view:e},"",window.location.href),fe(e,!0))};const Wt=e=>{const t=m.products?.find(o=>o&&o.id!=null&&String(o.id)===String(e.id));let a=e.price||0;if(e.variantName&&t&&t.variants){const o=t.variants.find(r=>r.name===e.variantName);o&&o.price!=null&&(a=o.price)}if(e.variantName||!t||!t.wholesale||!t.wholesale.length)return a;const s=E.filter(o=>o.id!=null&&String(o.id)===String(e.id)).reduce((o,r)=>o+(parseFloat(r.qty)||0),0);for(let o of t.wholesale.slice().sort((r,i)=>i.minQty-r.minQty))if(s>=parseFloat(o.minQty))return o.price;return a},Mo=e=>{const t=m.products?.find(a=>a&&a.id!=null&&String(a.id)===String(e.id));if(!t)return 0;if(e.variantName&&t.variants){const a=t.variants.find(s=>s.name===e.variantName);if(a&&a.hpp!=null)return parseFloat(a.hpp)||0}return parseFloat(t.hpp)||0},zt=e=>{if(!e)return 0;const t=m.products?.find(a=>a&&a.id!=null&&String(a.id)===String(e.id));if(!t)return parseFloat(e.poin)||0;if(e.variantName&&t.variants){const a=t.variants.find(s=>s.name===e.variantName);if(a&&a.poin!==void 0&&a.poin!==null&&a.poin!==""){const s=parseFloat(a.poin);if(!isNaN(s)&&s>0)return s}}return parseFloat(t.poin)||0},Po=(e,t,a,s)=>{if(!e||!t||!a||!s)return 0;const o=6371,r=(a-e)*Math.PI/180,i=(s-t)*Math.PI/180,l=Math.sin(r/2)*Math.sin(r/2)+Math.cos(e*Math.PI/180)*Math.cos(a*Math.PI/180)*Math.sin(i/2)*Math.sin(i/2),d=2*Math.atan2(Math.sqrt(l),Math.sqrt(1-l));return o*d},Jt=e=>{if(!e||typeof e!="string")return null;let t=e.trim();try{t=decodeURIComponent(t)}catch{}const a=t.match(/@(-?\d{1,3}\.\d+)[,\s]+(-?\d{1,3}\.\d+)/);if(a){const i=parseFloat(a[1]),l=parseFloat(a[2]);if(!isNaN(i)&&!isNaN(l)&&Math.abs(i)<=90&&Math.abs(l)<=180)return{lat:a[1],lng:a[2]}}const s=t.match(/[?&](?:q|ll|query|loc|center)=(-?\d{1,3}\.\d+)[,\s]+(-?\d{1,3}\.\d+)/i);if(s){const i=parseFloat(s[1]),l=parseFloat(s[2]);if(!isNaN(i)&&!isNaN(l)&&Math.abs(i)<=90&&Math.abs(l)<=180)return{lat:s[1],lng:s[2]}}const o=t.match(/(\d+)[°\s]+(\d+)['\s]+([\d.]+)"?\s*([NSns])[,\s]+(\d+)[°\s]+(\d+)['\s]+([\d.]+)"?\s*([EWew])/);if(o){let i=parseInt(o[1],10)+parseInt(o[2],10)/60+parseFloat(o[3])/3600;o[4].toUpperCase()==="S"&&(i=-i);let l=parseInt(o[5],10)+parseInt(o[6],10)/60+parseFloat(o[7])/3600;return o[8].toUpperCase()==="W"&&(l=-l),{lat:i.toFixed(8),lng:l.toFixed(8)}}const r=t.match(/(-?\d{1,3}\.\d{3,20})[,\s;\t]+(-?\d{1,3}\.\d{3,20})/);if(r){const i=parseFloat(r[1]),l=parseFloat(r[2]);if(!isNaN(i)&&!isNaN(l)&&Math.abs(i)<=90&&Math.abs(l)<=180)return{lat:r[1],lng:r[2]}}return null},To=e=>{const t=(typeof e=="string"?e:e?.value||"").trim(),a=Jt(t);return a?(Q("set-lat",a.lat),Q("set-lng",a.lng),b("Koordinat GPS berhasil disalin!"),a):(b("Format tidak dikenali! Tempel koordinat: Lat, Lng atau link Google Maps"),null)},Ao=(e=E,t=m.store)=>{if(!e||!e.length)return{totalPoints:0,directPoints:0,spendPoints:0,nonPointSpend:0,threshold:1e5,pointsPerThreshold:1,isSpendPointsActive:!1,remainingToNextPoint:0,progressPercent:0};let a=0,s=0;e.forEach(u=>{const h=zt(u),P=parseFloat(u.qty)||0;if(h>0)a+=h*P;else{const T=Wt(u);s+=T*P}});let o=0,r=0,i=0;const l=t?t.spendPointsEnabled===!0||t.spendPointsEnabled==="true":!1,d=Math.max(1,parseFloat(t?.spendPointsThreshold)||1e5),c=Math.max(1,parseFloat(t?.spendPointsPerThreshold)||1);if(l&&s>0){const u=Math.floor(s/d);o=u*c;const h=s%d;r=h>0?d-h:d,i=Math.min(100,Math.round((h||(u>0?d:0))/d*100))}return{totalPoints:a+o,directPoints:a,spendPoints:o,nonPointSpend:s,threshold:d,pointsPerThreshold:c,isSpendPointsActive:l,remainingToNextPoint:r,progressPercent:i}};window.getEffP=Wt;window.getEffHpp=Mo;window.getEffPoin=zt;window.calculateCartPoints=Ao;window.getDist=Po;window.parseGeoCoordinates=Jt;window.autoParseCoords=To;let tt=null,Fe=null;const So=async e=>{try{if(navigator.clipboard&&navigator.clipboard.writeText)await navigator.clipboard.writeText(e);else{const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}Ne("Kode "+e+" berhasil disalin!")}catch{Ne("Gagal menyalin. Kode: "+e)}},Ne=(e,t,a,s)=>{const o=n("toast");if(!o)return;if(!t){const I=e.toLowerCase();/berhasil|sukses|selamat|✅|🎉|aktif|dikirim|disimpan|diupload|disalin|dipulihkan|login berhasil|restock|terhapus|diunduh|diperbarui/.test(I)?t="success":/gagal|error|tolak|❌|tidak valid|tidak ditemukan|tidak cukup|salah|ditolak|quota|koneksi|putus|izin|wajib/.test(I)?t="error":/tunggu|maks|hati|stok|coba|⚠️|pastikan/.test(I)?t="warning":/upload|proses|memuat|loading|sedang/.test(I)?t="loading":t="info"}const r=getComputedStyle(document.documentElement),i=r.getPropertyValue("--color-primary-rgb").trim()||"16,185,129",l=r.getPropertyValue("--color-primary").trim()||"#10b981";r.getPropertyValue("--color-primary-dark").trim();const d={success:{icon:"fa-circle-check",label:"Berhasil",accent:l,iconBg:`rgba(${i},0.12)`,border:`rgba(${i},0.35)`},error:{icon:"fa-circle-xmark",label:"Gagal",accent:"#ef4444",iconBg:"rgba(239,68,68,0.12)",border:"rgba(239,68,68,0.35)"},warning:{icon:"fa-triangle-exclamation",label:"Perhatian",accent:"#f59e0b",iconBg:"rgba(245,158,11,0.12)",border:"rgba(245,158,11,0.35)"},loading:{icon:"fa-spinner fa-spin",label:"Memproses",accent:l,iconBg:`rgba(${i},0.12)`,border:`rgba(${i},0.35)`},info:{icon:"fa-circle-info",label:"Informasi",accent:l,iconBg:`rgba(${i},0.12)`,border:`rgba(${i},0.35)`}},c=d[t]||d.info,u=n("toast-icon");u&&(u.className="fa-solid "+c.icon);const h=n("toast-title");h&&(h.textContent=a||c.label,h.style.display="block",h.style.color=c.accent);const P=n("toast-icon-wrap");P&&(P.style.background=c.iconBg,P.style.color=c.accent),N("toast-message",e.replace(/^[✅❌⚠️🎉🔔]\s*/,""));let T=n("toast-progress");T||(T=document.createElement("div"),T.id="toast-progress",o.appendChild(T)),T.style.background=c.accent,T.style.transition="none",T.style.width="100%",T.style.opacity="0.85",clearTimeout(tt),o.classList.add("toast-show");const H=s||(t==="loading"?8e3:t==="error"?4500:3e3);requestAnimationFrame(()=>requestAnimationFrame(()=>{T.style.transition=`width ${H}ms linear`,T.style.width="0%"})),tt=setTimeout(()=>{o.classList.remove("toast-show")},H)},Do=e=>Ne(e,"loading","Memproses...",8e3),Co=()=>{clearTimeout(tt);const e=n("toast");e&&e.classList.remove("toast-show")},$o=()=>{const e=document.documentElement.classList.toggle("dark");localStorage.setItem("freshmart_theme",e?"dark":"light");const t=document.getElementById("icon-theme")||document.getElementById("theme-toggle-icon");t&&(t.className=e?"fa-solid fa-sun text-sm text-amber-400":"fa-solid fa-moon text-sm text-slate-600 dark:text-slate-300")},Lo=(e,t,a,s="Ya, Hapus",o=!0)=>{let r=e,i=t,l=a,d=s,c=o;typeof t=="function"&&(l=t,i=e,r=typeof s=="string"&&s!=="Ya, Hapus"?s:"Konfirmasi Tindakan",d=typeof a=="string"?a:"Ya, Lanjutkan",c=!0),N("confirm-title",r),N("confirm-msg",i);const u=n("confirm-yes-btn");u&&(u.innerText=d,c?(u.className="flex-1 py-3.5 bg-rose-600 text-white font-bold rounded-xl hover:bg-rose-700 active:scale-95 transition-all text-sm shadow-md shadow-rose-500/30 cursor-pointer",n("confirm-icon-box").className="w-16 h-16 bg-rose-50 dark:bg-rose-900/30 text-rose-500 dark:text-rose-400 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 border border-rose-200 dark:border-rose-800",n("confirm-icon").className="fa-solid fa-triangle-exclamation"):(u.className="flex-1 py-3.5 bg-[var(--color-primary)] text-white font-bold rounded-xl hover:opacity-90 active:scale-95 transition-all text-sm shadow-sm cursor-pointer",n("confirm-icon-box").className="w-16 h-16 bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] text-[var(--color-primary)] rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 border border-[var(--color-primary)]/20",n("confirm-icon").className="fa-solid fa-copy")),Fe=l;const h=n("custom-confirm-modal");h&&h.classList.contains("hidden")&&ie("confirm"),L("custom-confirm-modal"),setTimeout(()=>{n("custom-confirm-modal").classList.remove("opacity-0"),n("custom-confirm-box").classList.remove("scale-95")},10)},Yt=(e=!1)=>{ne("confirm",e,()=>{n("custom-confirm-modal").classList.add("opacity-0"),n("custom-confirm-box").classList.add("scale-95"),setTimeout(()=>y("custom-confirm-modal"),300)})},Ro=()=>{if(Fe){const e=Fe;Fe=null,Yt(),setTimeout(()=>{e()},150)}},Eo=(e,t,a)=>{let s=document.createElement("div");s.className="fixed inset-0 z-[9999] bg-slate-900/80 flex items-center justify-center p-4 opacity-0 transition-opacity duration-300",s.innerHTML=`
        <div class="bg-white dark:bg-slate-800 rounded-3xl w-full max-w-[320px] p-6 shadow-2xl border border-slate-200 dark:border-slate-700 relative transform scale-95 transition-all duration-300 flex flex-col text-center">
            <h3 class="font-bold text-slate-900 dark:text-white text-lg mb-4">${e}</h3>
            <input type="text" id="prompt-input" value="${t}" class="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 mb-6 focus:ring-2 focus:ring-[var(--color-primary)] outline-none text-center font-bold text-xl tracking-wider" autocomplete="off" />
            <div class="flex gap-3">
                <button id="prompt-cancel" class="flex-1 py-3.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold rounded-xl hover:bg-slate-200 dark:hover:bg-slate-600 active:scale-95 transition-all text-sm">Batal</button>
                <button id="prompt-ok" class="flex-1 py-3.5 bg-[var(--color-primary)] text-white font-bold rounded-xl hover:opacity-90 active:scale-95 transition-all text-sm shadow-md">Simpan</button>
            </div>
        </div>
    `,document.body.appendChild(s);const o=s.querySelector("div");ie("prompt"),setTimeout(()=>{s.classList.remove("opacity-0"),o.classList.remove("scale-95")},10);const r=s.querySelector("#prompt-input");r.focus(),r.select(),window.closePrompt=(i=!1)=>{!s||!s.parentNode||ne("prompt",i,()=>{s.classList.add("opacity-0"),o.classList.add("scale-95"),setTimeout(()=>s.remove(),300),window.closePrompt=null})},s.querySelector("#prompt-cancel").onclick=()=>window.closePrompt(),s.querySelector("#prompt-ok").onclick=()=>{let i=r.value;window.closePrompt(),a(i)}},Io=()=>{typeof window.openReceiptPreview=="function"&&window.openReceiptPreview()};window.copyVoucher=So;window.showToast=Ne;window.showToastLoading=Do;window.hideToast=Co;window.toggleTheme=$o;window.showConfirm=Lo;window.closeConfirm=Yt;window.executeConfirm=Ro;window.customPrompt=Eo;window.checkProPrint=Io;typeof history<"u"&&"scrollRestoration"in history&&(history.scrollRestoration="manual");window.scrollTo(0,0);document.documentElement&&(document.documentElement.scrollTop=0);document.body&&(document.body.scrollTop=0);Ht();window.firebase=_e;window.db=C;window.DOMPurify=Xt;window.ensureScriptLoaded=wa;if(typeof window<"u"){const e=window.print?window.print.bind(window):null;window.print=function(){window.AndroidNativeApp&&typeof window.AndroidNativeApp.print=="function"?window.AndroidNativeApp.print():e&&e()}}window.uiPalettes=ta;window.hexToRgb=aa;window.applyUITheme=yt;window.toggleTheme=sa;window.applyBackgroundStyle=kt;oa();const Fo=localStorage.getItem("freshmart_ui_theme")||"emerald";yt(Fo,localStorage.getItem("freshmart_theme_color"));const ht=()=>{ua();const e=localStorage.getItem("freshmart_bg_style")||"minimalist",t=localStorage.getItem("freshmart_bg_custom_url")||"";kt(e,t),fa()};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ht):ht();window.onerror=function(e,t,a,s,o){return console.error("Global Error Caught:",e,"at",a,":",s),typeof showToast=="function"&&showToast("Ops, ada kendala sistem."),!1};window.addEventListener("unhandledrejection",function(e){console.warn("Promise Rejection Sentinel:",e.reason)});window.updateSEO=ba;window.injectJSONLD=ga;window.rewardStatusLabel=st;window.getYouTubeId=xa;window.parseVideoUrl=ha;window.fixDriveVideo=va;window.fixDriveVideoPreview=ya;let vt=je;window.calcTaxDetails=e=>{const t=m?.store||{},a=t.ppnEnabled===!0||t.ppnEnabled==="true",s=parseFloat(t.ppnRate)||11,o=t.ppnType||"exclusive";if(!a||e<=0)return{ppnEnabled:!1,ppnRate:0,ppnType:o,ppnAmount:0,dppAmount:Math.max(0,e),grandTotalAdd:0};if(o==="inclusive"){const r=Math.round(e*100/(100+s)),i=e-r;return{ppnEnabled:!0,ppnRate:s,ppnType:"inclusive",ppnAmount:i,dppAmount:r,grandTotalAdd:0}}else{const r=Math.round(e*s/100);return{ppnEnabled:!0,ppnRate:s,ppnType:"exclusive",ppnAmount:r,dppAmount:Math.max(0,e),grandTotalAdd:r}}};typeof requestIdleCallback<"u"?requestIdleCallback(mt,{timeout:5e3}):setTimeout(mt,3e3);window.updateProBadge=()=>{};window.isAdm=!1;window.isPro=!0;history.replaceState({view:"view-catalog"},"","");window.addEventListener("DOMContentLoaded",async()=>{await ra();try{ia()}catch(e){console.warn("[syncAppMeta] Error:",e)}na(),la(),ut(),window.attachRewardsRealtime=ut,Ve.onAuthStateChanged(async e=>{if(!da()){if(e&&e.uid!==Mt){await Ve.signOut();return}if(e){if(!await ca()){console.log("[Auth] Sesi admin lokal sudah tidak aktif (diambil alih perangkat lain)."),ft(),localStorage.removeItem("freshmart_admin_session_id"),window.isAdm=!1,window.__localIsAdm=!1,window.isPro=!1,window.updateProBadge&&window.updateProBadge(),await Ve.signOut();return}pa(),window.isAdm=!0,window.isPro=!0,localStorage.removeItem("isFreshmartPro"),localStorage.removeItem("freshmart_license_code"),window.updateProBadge&&window.updateProBadge();let a=document.getElementById("view-admin-login");a&&!a.classList.contains("hidden")&&(history.replaceState({view:"view-admin"},"",window.location.href),changeView("view-admin",!0),openAdminMenu(),showToast("Sesi Dipulihkan! Selamat Datang."))}else ft(),localStorage.removeItem("freshmart_admin_session_id"),window.isAdm=!1,window.__localIsAdm=!1,window.isPro=!1,window.updateProBadge&&window.updateProBadge(),localStorage.removeItem("isFreshmartPro"),localStorage.removeItem("freshmart_license_code")}})});window.el=n;window.show=L;window.hide=y;window.toggleCls=Z;window.setIn=N;window.setH=O;window.setV=Q;window.getV=B;window.esc=p;window.fixD=Oe;window.fCur=D;window.sL=We;window.ssL=Ee;window.defaultFbC=Pt;window.fbC=Pt;window.defApp=ka;window.ADMIN_UID=Mt;window.sLoad=J;window.hLoad=F;window.sanitizeCart=ma;const M=(e,t,a)=>{try{Object.defineProperty(window,e,{get:t,set:a,configurable:!0})}catch{}};M("GAS_UPLOAD_URL",()=>vt,e=>{vt=e});M("confirmCb",()=>Ma,e=>{us(e)});M("appData",()=>m,e=>{Pa(e)});M("cart",()=>E,e=>{Tt(e)});M("wishlist",()=>Aa,e=>{Ta(e)});M("myOrders",()=>U,e=>{Be(e)});M("cust",()=>w,e=>{At(e)});M("currentMember",()=>V,e=>{Y(e)});M("selectedReward",()=>oe,e=>{se(e)});M("memberCheckTimer",()=>Sa,e=>{fs(e)});M("aCat",()=>Je,e=>{Dt(e)});M("aBrand",()=>ze,e=>{Ct(e)});M("sQ",()=>Ca,e=>{Da(e)});M("cSort",()=>La,e=>{$a(e)});M("cView",()=>Ea,e=>{Ra(e)});M("cPage",()=>Ia,e=>{ot(e)});M("iPP",()=>_a,e=>{Fa(e)});M("cTab",()=>Na,e=>{ws(e)});M("aSq",()=>Ba,e=>{bs(e)});M("eId",()=>Oa,e=>{gs(e)});M("cProd",()=>qa,e=>{ja(e)});M("cVar",()=>Ga,e=>{Ua(e)});M("tVars",()=>Ka,e=>{xs(e)});M("tWhol",()=>Ha,e=>{hs(e)});M("tSpec",()=>Va,e=>{vs(e)});M("cQty",()=>Wa,e=>{Qa(e)});M("oMods",()=>z,e=>{za(e)});M("aOrdLst",()=>Ya,e=>{Ja(e)});M("aCustLst",()=>Xa,e=>{Za(e)});M("aRevLst",()=>ts,e=>{es(e)});M("gOrds",()=>ss,e=>{as(e)});M("gReviews",()=>rs,e=>{os(e)});M("cVOrd",()=>ns,e=>{is(e)});M("vouch",()=>v,e=>{W(e)});M("toastT",()=>ls,e=>{ys(e)});M("isSaving",()=>at,e=>{me(e)});M("reviewFilterMode",()=>cs,e=>{ds(e)});M("lastReportPeriod",()=>ms,e=>{ps(e)});

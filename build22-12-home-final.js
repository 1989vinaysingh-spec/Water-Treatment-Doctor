/* Build 22.12 — final Home renderer and routing lock. */
(function(){
'use strict';
const $=id=>document.getElementById(id);
function homeMarkup(){return `<div class="b2212-home">
 <div class="b2212-head"><button class="b2212-menu" type="button" aria-label="Menu">☰</button><div class="b2212-brand"><img src="final-round-logo.png" alt="Water Treatment Doctor"><div><b>Water Treatment<br><span>Doctor</span></b><small>Knowledge | Solution | Better Tomorrow</small></div></div><button class="b2212-profile" type="button" aria-label="Profile">♙</button></div>
 <div class="b2212-hero"><div class="b2212-hero-copy">Complete Water &amp;<br>Wastewater Solutions<br>in Your Hand<small>Design • Operate • Maintain • Optimize</small></div></div>
 <div class="b2212-grid">
  <button class="b2212-plant" type="button" data-plant="STP"><span class="b2212-ico">♨</span><b>STP</b><small>सीवेज उपचार</small></button>
  <button class="b2212-plant" type="button" data-plant="ETP"><span class="b2212-ico">▤</span><b>ETP</b><small>औद्योगिक अपशिष्ट</small></button>
  <button class="b2212-plant" type="button" data-plant="CETP"><span class="b2212-ico">▥</span><b>CETP</b><small>सामूहिक ETP</small></button>
  <button class="b2212-plant" type="button" data-plant="WTP"><span class="b2212-ico">⬡</span><b>WTP</b><small>पेयजल उपचार</small></button>
  <button class="b2212-plant" type="button" data-plant="RO"><span class="b2212-ico">▥</span><b>RO</b><small>रिवर्स ऑस्मोसिस</small></button>
  <button class="b2212-plant" type="button" data-plant="UF"><span class="b2212-ico">▥</span><b>UF</b><small>अल्ट्रा फिल्ट्रेशन</small></button>
  <button class="b2212-plant" type="button" data-plant="ZLD"><span class="b2212-ico">♨</span><b>ZLD</b><small>शून्य तरल डिस्चार्ज</small></button>
  <button class="b2212-plant" type="button" data-plant="WSP"><span class="b2212-ico">💧</span><b>WSP</b><small>जल आपूर्ति</small></button>
  <button class="b2212-plant" type="button" data-page="plants"><span class="b2212-ico">▦</span><b>All Plants</b><small>सभी प्लांट</small></button>
 </div>
 <div class="b2212-features"><button class="b2212-feature" type="button" data-smart="STP"><span>⚙</span><div><b>Smart Design</b><small>स्मार्ट डिजाइन • sizing &amp; BOQ</small></div></button><button class="b2212-feature alt" type="button" data-page="calculators"><span>▣</span><div><b>Calculators</b><small>Chemical dosing &amp; engineering tools</small></div></button></div>
 <div class="b2212-quick"><button type="button" data-page="fieldReference"><span>▤</span>Knowledge</button><button type="button" data-page="sops"><span>▧</span>SOP &amp; O&amp;M</button><button type="button" data-page="calculators"><span>🛠</span>Tools</button><button type="button" data-page="drawings"><span>📐</span>Drawings</button></div>
 <div class="b2212-foot"><span>🌿 Every Drop Matters</span><em>Developed by Vinay Kumar Singh</em></div>
</div>`}
const titles={plants:'All Plants / सभी प्लांट',calculators:'Calculators / कैलकुलेटर',fieldReference:'Knowledge / ज्ञान',sops:'SOP & O&M',drawings:'Drawings / ड्रॉइंग'};
function renderHome(){const h=$('wtdHome1852');if(!h)return;h.innerHTML=homeMarkup();h.hidden=false;h.style.display='block';
 h.querySelector('.b2212-menu')?.addEventListener('click',()=>window.openAppPage?.('fieldReference',titles.fieldReference));
 h.querySelector('.b2212-profile')?.addEventListener('click',()=>window.openAppOverview?.());
 h.querySelectorAll('[data-plant]').forEach(b=>b.addEventListener('click',()=>window.openPlantByCode?.(b.dataset.plant)));
 h.querySelectorAll('[data-page]').forEach(b=>b.addEventListener('click',()=>window.openAppPage?.(b.dataset.page,titles[b.dataset.page]||'Water Treatment Doctor')));
 h.querySelector('[data-smart]')?.addEventListener('click',e=>window.openSmartDesignForPlant?.(e.currentTarget.dataset.smart));
}
function lockHome(){window.goHome=function(){try{window.closeAppPage?.()}catch(_e){}const d=$('plantDetail');if(d){d.hidden=true;d.classList.remove('open')} $('plants')?.classList.remove('detail-view');document.body.classList.remove('plant-page-open','wtd-app-page-open');document.documentElement.classList.remove('wtd-app-page-open');const h=$('wtdHome1852');if(h){h.hidden=false;h.style.display='block'}document.querySelectorAll('.mobile-bottom-nav .bottom-nav-item').forEach(b=>b.classList.toggle('active',b.dataset.go==='home'));window.scrollTo(0,0);return false;};}
function lockNav(){const n=document.querySelector('.mobile-bottom-nav');if(!n)return;n.innerHTML='';const items=[['⌂','Home','home',()=>window.goHome?.()],['🏭','Plants','plants',()=>window.openAppPage?.('plants',titles.plants)],['🛠','Tools','tools',()=>window.openAppPage?.('calculators','Tools / टूल्स')],['📐','Drawings','drawings',()=>window.openAppPage?.('drawings',titles.drawings)],['♙','Profile','profile',()=>window.openAppOverview?.()]];items.forEach(([ico,label,key,fn],i)=>{const b=document.createElement('button');b.type='button';b.className='bottom-nav-item'+(i===0?' active':'');b.dataset.go=key;b.innerHTML='<span>'+ico+'</span><b>'+label+'</b>';b.onclick=e=>{e.preventDefault();fn();n.querySelectorAll('.bottom-nav-item').forEach(x=>x.classList.toggle('active',x===b));return false};n.appendChild(b)});}
function init(){renderHome();lockHome();lockNav();setTimeout(()=>{renderHome();lockHome();lockNav()},700);setTimeout(()=>{renderHome();lockHome();lockNav()},3200)}
document.addEventListener('DOMContentLoaded',init,{once:true});if(document.readyState!=='loading')init();
})();

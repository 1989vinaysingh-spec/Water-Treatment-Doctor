/* Build 22.11 — final Home renderer + deterministic Home/Plant routing. */
(function(){
'use strict';
const $=id=>document.getElementById(id);
function renderHome(){
 const h=$('wtdHome1852'); if(!h)return;
 h.innerHTML=`<div class="b2211-home">
  <div class="b2211-head"><button class="b2211-menu" type="button" aria-label="Menu" onclick="openAppPage('fieldReference','Knowledge / ज्ञान')">☰</button><div class="b2211-brand"><img src="icon-192.png" alt="Water Treatment Doctor"><div><b>Water Treatment<br><span>Doctor</span></b><small>Knowledge | Solution | Better Tomorrow</small></div></div><button class="b2211-profile" type="button" aria-label="Profile" onclick="openAppOverview()">♙</button></div>
  <div class="b2211-hero"><div class="b2211-hero-copy">Complete Water &amp;<br>Wastewater Solutions<br>in Your Hand<small>Design • Operate • Maintain • Optimize</small></div></div>
  <div class="b2211-grid">
   <button class="b2211-plant" type="button" onclick="openPlantByCode('STP')"><span class="b2211-ico">♨</span><b>STP</b><small>सीवेज उपचार</small></button>
   <button class="b2211-plant" type="button" onclick="openPlantByCode('ETP')"><span class="b2211-ico">▤</span><b>ETP</b><small>औद्योगिक अपशिष्ट</small></button>
   <button class="b2211-plant" type="button" onclick="openPlantByCode('CETP')"><span class="b2211-ico">▥</span><b>CETP</b><small>सामूहिक ETP</small></button>
   <button class="b2211-plant" type="button" onclick="openPlantByCode('WTP')"><span class="b2211-ico">⬡</span><b>WTP</b><small>पेयजल उपचार</small></button>
   <button class="b2211-plant" type="button" onclick="openPlantByCode('RO')"><span class="b2211-ico">▥</span><b>RO</b><small>रिवर्स ऑस्मोसिस</small></button>
   <button class="b2211-plant" type="button" onclick="openPlantByCode('UF')"><span class="b2211-ico">▥</span><b>UF</b><small>अल्ट्रा फिल्ट्रेशन</small></button>
   <button class="b2211-plant" type="button" onclick="openPlantByCode('ZLD')"><span class="b2211-ico">♨</span><b>ZLD</b><small>शून्य तरल डिस्चार्ज</small></button>
   <button class="b2211-plant" type="button" onclick="openPlantByCode('WSP')"><span class="b2211-ico">💧</span><b>WSP</b><small>जल आपूर्ति</small></button>
   <button class="b2211-plant" type="button" onclick="openAppPage('plants','All Plants / सभी प्लांट')"><span class="b2211-ico">▦</span><b>All Plants</b><small>सभी प्लांट</small></button>
  </div>
  <div class="b2211-features"><button class="b2211-feature" type="button" onclick="openSmartDesignForPlant('STP')"><span>⚙</span><div><b>Smart Design</b><small>स्मार्ट डिजाइन • sizing &amp; BOQ</small></div></button><button class="b2211-feature alt" type="button" onclick="openAppPage('calculators','Calculators / कैलकुलेटर')"><span>▣</span><div><b>Calculators</b><small>Chemical dosing &amp; engineering tools</small></div></button></div>
  <div class="b2211-quick"><button type="button" onclick="openAppPage('fieldReference','Knowledge / ज्ञान')"><span>▤</span>Knowledge</button><button type="button" onclick="openAppPage('sops','SOP & O&M')"><span>▧</span>SOP &amp; O&amp;M</button><button type="button" onclick="openAppPage('calculators','Tools / टूल्स')"><span>🛠</span>Tools</button><button type="button" onclick="openAppPage('drawings','Drawings / ड्रॉइंग')"><span>📐</span>Drawings</button></div>
  <div class="b2211-foot"><span>🌿 Every Drop Matters</span><em>Developed by Vinay Kumar Singh</em></div>
 </div>`;
}
function hardHome(){
 window.goHome=function(){
  try{window.closeAppPage?.()}catch(e){}
  const d=$('plantDetail');if(d){d.hidden=true;d.classList.remove('open')}
  $('plants')?.classList.remove('detail-view');
  document.body.classList.remove('plant-page-open');
  const h=$('wtdHome1852');if(h){h.hidden=false;h.style.display='block'}
  document.querySelectorAll('.mobile-bottom-nav .bottom-nav-item').forEach(b=>b.classList.toggle('active',b.dataset.go==='home'));
  window.scrollTo(0,0);return false;
 };
}
function ensurePlantRouter(){
 const previous=window.openPlantByCode;
 window.openPlantByCode=function(code){
  const key=String(code||'').toUpperCase();
  if(!key)return false;
  let result=false;
  if(previous){try{result=previous(key)}catch(e){result=false}}
  if(result===false || !$('plantDetail') || $('plantDetail').hidden){
    try{if(typeof openModule==='function'){openModule(key,(typeof modules!=='undefined'?modules[key]:undefined));result=true}}catch(e){}
  }
  return result;
 };
}
function init(){renderHome();hardHome();ensurePlantRouter();setTimeout(()=>{renderHome();hardHome()},650)}
document.addEventListener('DOMContentLoaded',init,{once:true});if(document.readyState!=='loading')init();
})();

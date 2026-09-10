/* Build 22.14 — consolidated interaction authority. Loaded LAST. */
(function(){
'use strict';
const $=id=>document.getElementById(id);
const titleMap={plants:'All Plants / सभी प्लांट',calculators:'Calculators / कैलकुलेटर',chemicalCalculator:'Chemical Dosing / केमिकल डोजिंग',fieldReference:'Knowledge / ज्ञान',sops:'SOP & O&M / एसओपी',drawings:'Drawings / ड्रॉइंग',mediaDiagnosis:'AI Troubleshooting / AI समस्या समाधान',project:'Smart Design / स्मार्ट डिजाइन'};

function setActiveNav(key){document.querySelectorAll('.mobile-bottom-nav .bottom-nav-item').forEach(b=>b.classList.toggle('active',b.dataset.go===key));}
function cleanPlantState(){const d=$('plantDetail');if(d){d.hidden=true;d.classList.remove('open');} $('plants')?.classList.remove('detail-view');document.body.classList.remove('plant-page-open');}

const baseOpenPage=window.openAppPage;
window.wtdOpenPage=function(id,title){
  cleanPlantState();
  if(typeof baseOpenPage==='function') return baseOpenPage(id,title||titleMap[id]||'Water Treatment Doctor');
  return false;
};
window.goHome=function(){
  try{window.closeDrawing?.();}catch(_e){}
  try{window.closeAppOverview?.();}catch(_e){}
  try{window.closeAppPage?.();}catch(_e){}
  cleanPlantState();
  document.body.classList.remove('wtd-app-page-open','wtd-modal-open');
  document.documentElement.classList.remove('wtd-app-page-open');
  const h=$('wtdHome1852');if(h){h.hidden=false;h.style.display='block';}
  setActiveNav('home');
  try{window.scrollTo(0,0);}catch(_e){}
  return false;
};

window.openPlantByCode=function(code){
  const key=String(code||'').trim().toUpperCase();
  const db=(typeof modules==='object'&&modules)||{};
  const plant=db[key];
  if(!plant){alert('Plant module not found: '+key);return false;}
  cleanPlantState();
  window.wtdOpenPage('plants',key+' — '+(plant.name||'Plant'));
  const modulesGrid=$('modules');if(modulesGrid) modulesGrid.style.display='none';
  const heading=$('plants')?.querySelector(':scope > h3');if(heading) heading.style.display='none';
  if(typeof openModule==='function') openModule(key,plant);
  const detail=$('plantDetail');if(detail){detail.hidden=false;detail.classList.add('open');}
  $('plants')?.classList.add('detail-view');document.body.classList.add('plant-page-open');
  const host=$('wtdPageContent');if(host)host.scrollTop=0;
  setTimeout(()=>{try{window.enhancePlant?.(key);}catch(_e){}},30);
  return false;
};

window.wtdAllPlants=function(){
  cleanPlantState();
  const modulesGrid=$('modules');if(modulesGrid)modulesGrid.style.display='grid';
  const heading=$('plants')?.querySelector(':scope > h3');if(heading)heading.style.display='block';
  window.wtdOpenPage('plants',titleMap.plants);
  setActiveNav('plants');
  return false;
};

function bindHome(){
  const h=$('wtdHome1852');if(!h)return;
  h.querySelectorAll('[data-plant]').forEach(b=>{b.onclick=e=>{e.preventDefault();return window.openPlantByCode(b.dataset.plant);};});
  h.querySelectorAll('[data-page]').forEach(b=>{b.onclick=e=>{e.preventDefault();const id=b.dataset.page;if(id==='plants')return window.wtdAllPlants();return window.wtdOpenPage(id,titleMap[id]);};});
  const smart=h.querySelector('[data-smart]');if(smart)smart.onclick=e=>{e.preventDefault();const key=e.currentTarget.dataset.smart||'STP';return window.openSmartDesignForPlant?.(key);};
  const menu=h.querySelector('.b2212-menu');if(menu)menu.onclick=e=>{e.preventDefault();return window.wtdOpenPage('fieldReference',titleMap.fieldReference);};
  const profile=h.querySelector('.b2212-profile');if(profile)profile.onclick=e=>{e.preventDefault();return window.openAppOverview?.();};
}

function addChemicalShortcut(){
  const q=document.querySelector('#wtdHome1852 .b2212-quick');if(!q||q.querySelector('[data-chem-final]'))return;
  const btn=document.createElement('button');btn.type='button';btn.dataset.chemFinal='1';btn.innerHTML='<span>🧪</span>Chemical';btn.onclick=e=>{e.preventDefault();return window.wtdOpenPage('chemicalCalculator',titleMap.chemicalCalculator);};
  q.appendChild(btn);
}

function lockBottomNav(){
  const n=document.querySelector('.mobile-bottom-nav');if(!n)return;
  n.innerHTML='';
  const items=[
    ['⌂','Home','home',()=>window.goHome()],
    ['🏭','Plants','plants',()=>window.wtdAllPlants()],
    ['🛠','Tools','tools',()=>window.wtdOpenPage('calculators','Tools / टूल्स')],
    ['📐','Drawings','drawings',()=>window.wtdOpenPage('drawings',titleMap.drawings)],
    ['♙','Profile','profile',()=>window.openAppOverview?.()]
  ];
  items.forEach(([ico,label,key,fn],i)=>{const b=document.createElement('button');b.type='button';b.className='bottom-nav-item'+(i===0?' active':'');b.dataset.go=key;b.innerHTML='<span>'+ico+'</span><b>'+label+'</b>';b.onclick=e=>{e.preventDefault();fn();if(key!=='profile')setActiveNav(key);return false;};n.appendChild(b);});
}

function hardenHeader(){
  const back=document.querySelector('.wtd-page-back');if(back){back.textContent='Back';back.onclick=e=>{e.preventDefault();return window.goHome();};}
  const lang=document.querySelector('.wtd-page-home');if(lang){lang.style.display='grid';if(typeof window.wtdCycleLang==='function')lang.onclick=e=>{e.preventDefault();return window.wtdCycleLang();};}
}

function hardenDrawing(){
  const m=$('drawingModal');if(!m)return;
  let close=m.querySelector('.wtd-final-drawing-close');
  if(!close){close=document.createElement('button');close.type='button';close.className='wtd-final-drawing-close';close.textContent='×';close.setAttribute('aria-label','Close drawing');close.onclick=e=>{e.preventDefault();return window.closeDrawing?.();};m.appendChild(close);}
}

function init(){bindHome();addChemicalShortcut();lockBottomNav();hardenHeader();hardenDrawing();const h=$('wtdHome1852');if(h&&!document.body.classList.contains('wtd-app-page-open')){h.hidden=false;h.style.display='block';}}
document.addEventListener('DOMContentLoaded',init,{once:true});
if(document.readyState!=='loading')init();
setTimeout(init,120);setTimeout(init,900);setTimeout(init,3300);
})();

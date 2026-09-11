/* Build 22.16 — single final authority for opening/nav/plant/back/drawing. */
(function(){
'use strict';
const $=id=>document.getElementById(id);
let currentPlant='';
let drawingScale=1;

function setNavVisible(on){
  document.body.classList.toggle('wtd-opening-active',!on);
  const n=document.querySelector('.mobile-bottom-nav');
  if(n){n.setAttribute('aria-hidden',on?'false':'true');}
}
function syncOpening(){
  const s=$('wtdSplash');
  const active=!!(s && !s.classList.contains('hide') && s.isConnected);
  setNavVisible(!active);
}

function cleanPlant(){
  const d=$('plantDetail');
  if(d){d.hidden=true;d.classList.remove('open');}
  $('plants')?.classList.remove('detail-view');
  document.body.classList.remove('plant-page-open');
  currentPlant='';
}

const priorOpenPage=window.openAppPage;
window.wtdFinalOpenPage=function(id,title){
  if(id!=='plants') cleanPlant();
  const ok=typeof priorOpenPage==='function'?priorOpenPage(id,title):false;
  const host=$('wtdPageContent');if(host)host.scrollTop=0;
  return ok;
};

window.wtdAllPlants=function(){
  cleanPlant();
  const ok=window.wtdFinalOpenPage('plants','All Plants / सभी प्लांट');
  const grid=$('modules');if(grid)grid.style.display='grid';
  const heading=$('plants')?.querySelector(':scope > h3');if(heading)heading.style.display='block';
  document.querySelectorAll('.mobile-bottom-nav .bottom-nav-item').forEach(b=>b.classList.toggle('active',b.dataset.go==='plants'));
  return ok;
};

function addPlantAIButtons(key){
  const box=$('plantDetailContent');if(!box)return;
  let row=box.querySelector('.wtd-plant-ai-row');
  if(!row){
    row=document.createElement('div');row.className='wtd-plant-ai-row';
    row.innerHTML='<button type="button" data-ai="1">🤖 AI Troubleshooting / AI समस्या समाधान</button><button type="button" data-guide="1">🛠 Guided Troubleshooting / समस्या समाधान</button>';
    const hero=box.querySelector('.p52-plant-hero');
    if(hero)hero.insertAdjacentElement('afterend',row);else box.prepend(row);
  }
  row.querySelector('[data-ai]').onclick=()=>{
    window.wtdFinalOpenPage('mediaDiagnosis','AI Troubleshooting / AI समस्या समाधान');
    const s=$('diagPlant');if(s){s.value=key;try{window.loadDiagSymptoms?.();}catch(_e){}}
    return false;
  };
  row.querySelector('[data-guide]').onclick=()=>window.wtdFinalOpenPage('troubleshooting','Troubleshooting / समस्या समाधान');
}

const priorPlant=window.openPlantByCode;
window.openPlantByCode=function(code){
  const key=String(code||'').trim().toUpperCase();
  cleanPlant();
  const r=typeof priorPlant==='function'?priorPlant(key):false;
  currentPlant=key;
  const d=$('plantDetail');if(d){d.hidden=false;d.classList.add('open');}
  $('plants')?.classList.add('detail-view');
  document.body.classList.add('plant-page-open');
  const grid=$('modules');if(grid)grid.style.display='none';
  const heading=$('plants')?.querySelector(':scope > h3');if(heading)heading.style.display='none';
  setTimeout(()=>{addPlantAIButtons(key);const h=$('wtdPageContent');if(h)h.scrollTop=0;},40);
  return r;
};

window.wtdPlantBack=function(){
  if($('drawingModal')?.classList.contains('show')) return window.closeDrawing?.();
  if(currentPlant || document.body.classList.contains('plant-page-open')) return window.wtdAllPlants();
  return window.goHome?.();
};

function bindBackButtons(){
  ['closePlantDetail','closePlantDetailBottom'].forEach(id=>{const b=$(id);if(b)b.onclick=e=>{e.preventDefault();return window.wtdPlantBack();};});
  const b=document.querySelector('.wtd-page-back');
  if(b)b.onclick=e=>{e.preventDefault();return window.wtdPlantBack();};
}

function applyScale(){const img=$('drawingImage');if(img)img.style.transform='scale('+drawingScale+')';}
window.wtdDrawingZoom=function(delta){drawingScale=Math.max(.5,Math.min(3,+(drawingScale+delta).toFixed(2)));applyScale();return false;};
window.wtdDrawingReset=function(){drawingScale=1;applyScale();const v=$('drawingModal')?.querySelector('.drawing-view');if(v){v.scrollTop=0;v.scrollLeft=0;}return false;};
const priorOpenDrawing=window.openDrawing;
window.openDrawing=function(code,src){
  const r=typeof priorOpenDrawing==='function'?priorOpenDrawing(code,src):false;
  drawingScale=1;applyScale();
  document.body.classList.add('wtd-drawing-open','wtd-modal-open');
  const m=$('drawingModal');if(m){m.classList.add('show');m.setAttribute('aria-hidden','false');}
  const img=$('drawingImage');if(img){img.style.removeProperty('width');img.style.removeProperty('height');}
  return r;
};
const priorCloseDrawing=window.closeDrawing;
window.closeDrawing=function(){
  if(typeof priorCloseDrawing==='function')try{priorCloseDrawing();}catch(_e){}
  const m=$('drawingModal');if(m){m.classList.remove('show');m.setAttribute('aria-hidden','true');}
  document.body.classList.remove('wtd-drawing-open','wtd-modal-open');
  drawingScale=1;applyScale();
  return false;
};

function hardenBottomNav(){
  const n=document.querySelector('.mobile-bottom-nav');if(!n)return;
  n.querySelectorAll('.bottom-nav-item').forEach(b=>{
    const key=b.dataset.go;
    if(key==='home') b.onclick=e=>{e.preventDefault();cleanPlant();return window.goHome?.();};
    if(key==='plants') b.onclick=e=>{e.preventDefault();return window.wtdAllPlants();};
    if(key==='drawings') b.onclick=e=>{e.preventDefault();return window.wtdFinalOpenPage('drawings','Drawings / ड्रॉइंग');};
  });
}

function bindSplashStart(){
  const b=$('wtdGetStarted');
  if(b && !b.dataset.b2216){
    b.dataset.b2216='1';
    b.addEventListener('click',()=>setTimeout(()=>{setNavVisible(true);window.goHome?.();},80));
  }
}

function init(){
  syncOpening();bindSplashStart();bindBackButtons();hardenBottomNav();
  const splash=$('wtdSplash');
  if(splash && !splash.dataset.b2216watch){
    splash.dataset.b2216watch='1';
    new MutationObserver(()=>{syncOpening();bindSplashStart();}).observe(splash,{attributes:true,childList:true,subtree:true});
  }
  document.addEventListener('click',e=>{if(e.target?.id==='drawingModal')window.closeDrawing();},true);
}
document.addEventListener('DOMContentLoaded',init,{once:true});
if(document.readyState!=='loading')init();
setTimeout(init,150);setTimeout(init,1200);setTimeout(init,3200);
})();

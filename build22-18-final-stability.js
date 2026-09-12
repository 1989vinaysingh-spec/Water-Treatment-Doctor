/* Build 22.18 — final stability authority: plant routing, all-plants grid, drawing previews/viewer/download. */
(function(){
'use strict';
const $=id=>document.getElementById(id);
const fileKey=k=>({SOFT:'soft',COOLING:'cooling',BOILER:'boiler',DESAL:'desal'}[k]||String(k||'').toLowerCase());
const plantOrder=['STP','ETP','CETP','WTP','RO','UF','ZLD','WSP','CTP','NF','SOFT','DM','EDI','MBBR','SBR','MBR','ASP','MEE','ATFD','COOLING','BOILER','DESAL'];

function getDb(){ try{return (typeof modules==='object'&&modules)||{};}catch(_){return{};} }
function getHi(){ try{return (typeof modulesHi==='object'&&modulesHi)||{};}catch(_){return{};} }
function setActiveNav(key){document.querySelectorAll('.mobile-bottom-nav .bottom-nav-item').forEach(b=>b.classList.toggle('active',b.dataset.go===key));}
function openPlantsPage(){
  try{ if(typeof window.openAppPage==='function') window.openAppPage('plants','All Plants / सभी प्लांट'); }catch(_){ }
  const sec=$('plants'); if(sec)sec.classList.add('active');
  setActiveNav('plants');
}
function resetPlantDetail(){
  const detail=$('plantDetail'); if(detail){detail.hidden=true;detail.classList.remove('open');}
  $('plants')?.classList.remove('detail-view'); document.body.classList.remove('plant-page-open');
}
function rebuildPlantGrid(){
  const db=getDb(), hi=getHi(), grid=$('modules'); if(!grid)return;
  grid.innerHTML='';
  const keys=[...plantOrder.filter(k=>db[k]),...Object.keys(db).filter(k=>!plantOrder.includes(k))];
  keys.forEach(key=>{
    const m=db[key]||{}, h=hi[key]||{};
    const b=document.createElement('button'); b.type='button'; b.className='module wtd2218-module'; b.dataset.plant=key;
    b.innerHTML='<strong>'+key+'</strong><span>'+(m.name||key)+(h.name?'<br><small>'+h.name+'</small>':'')+'</span>';
    b.onclick=e=>{e.preventDefault();return window.openPlantByCode(key);};
    grid.appendChild(b);
  });
  grid.style.display='grid';
}

window.wtdAllPlants=function(){
  resetPlantDetail(); openPlantsPage(); rebuildPlantGrid();
  const h=$('plants')?.querySelector(':scope > h3'); if(h)h.style.display='block';
  const host=$('wtdPageContent'); if(host)host.scrollTop=0;
  return false;
};

window.openPlantByCode=function(code){
  const key=String(code||'').trim().toUpperCase(), db=getDb(), plant=db[key];
  if(!plant){ console.error('Plant module unavailable',key); window.wtdAllPlants(); return false; }
  openPlantsPage();
  const grid=$('modules'); if(grid)grid.style.display='none';
  const heading=$('plants')?.querySelector(':scope > h3'); if(heading)heading.style.display='none';
  try{
    if(typeof window.openModule==='function') window.openModule(key,plant);
    else if(typeof openModule==='function') openModule(key,plant);
  }catch(err){ console.error('Plant render failed',key,err); }
  const detail=$('plantDetail'); if(detail){detail.hidden=false;detail.classList.add('open');}
  $('plants')?.classList.add('detail-view'); document.body.classList.add('plant-page-open');
  const title=document.querySelector('.wtd-page-header strong'); if(title)title.textContent=key+' / Plant';
  const host=$('wtdPageContent'); if(host)host.scrollTop=0;
  setTimeout(()=>{ try{window.enhancePlant?.(key);}catch(_){ } },80);
  return false;
};

window.wtdPlantBack=function(){ window.wtdAllPlants(); return false; };
['closePlantDetail','closePlantDetailBottom'].forEach(id=>{const b=$(id);if(b)b.onclick=e=>{e.preventDefault();return window.wtdPlantBack();};});

function drawingDefs(){
  const db=getDb();
  return plantOrder.filter(k=>db[k]).map(k=>({key:k,name:db[k]?.name||k,src:'drawings/'+fileKey(k)+'.png'}));
}
function rebuildDrawings(){
  const d=$('drawings'); if(!d)return;
  const cards=drawingDefs().map(x=>'<article class="drawing-tile wtd2218-drawing-tile"><h4>'+x.key+' — '+x.name+'</h4><img src="'+x.src+'" alt="'+x.key+' process drawing" loading="lazy" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'block\'"><div class="wtd2218-preview-fallback" style="display:none">'+x.key+' Drawing</div><button class="mini" type="button" data-draw="'+x.key+'" data-src="'+x.src+'">Full Drawing / पूरी ड्रॉइंग</button></article>').join('');
  d.innerHTML='<span class="pill">Plant Drawings / प्लांट ड्रॉइंग</span><h3>All 22 Process Drawings / सभी 22 प्रोसेस ड्रॉइंग</h3><p class="muted">Tap Full Drawing to open a fitted full-screen process diagram. / पूरी ड्रॉइंग खोलने के लिए टैप करें।</p><div class="all-drawing-grid">'+cards+'</div>';
  d.querySelectorAll('[data-draw]').forEach(b=>b.onclick=e=>{e.preventDefault();return window.openDrawing(b.dataset.draw,b.dataset.src);});
}

let drawScale=1, currentDrawing={code:'',src:''};
function applyDrawScale(){const img=$('drawingImage');if(img){img.style.transform='scale('+drawScale+')';img.style.transformOrigin='center center';}}
window.wtdDrawingZoom=function(delta){drawScale=Math.max(.6,Math.min(3,+(drawScale+delta).toFixed(2)));applyDrawScale();return false;};
window.wtdDrawingReset=function(){drawScale=1;applyDrawScale();const v=$('drawingModal')?.querySelector('.drawing-view');if(v){v.scrollTop=0;v.scrollLeft=0;}return false;};
window.openDrawing=function(code,src){
  const key=String(code||'PLANT').toUpperCase(), path=src||('drawings/'+fileKey(key)+'.png'); currentDrawing={code:key,src:path}; drawScale=1;
  const m=$('drawingModal'), img=$('drawingImage'); if(!m||!img)return false;
  const t=$('drawingTitle'); if(t)t.textContent=key+' Process Drawing / प्रोसेस ड्रॉइंग';
  img.onerror=function(){this.onerror=null;this.alt=key+' drawing unavailable';}; img.src=path; img.style.width='100%';img.style.height='auto';img.style.maxWidth='100%';img.style.maxHeight='none';applyDrawScale();
  m.classList.add('show');m.setAttribute('aria-hidden','false');document.body.classList.add('wtd-drawing-open','wtd-modal-open');
  let a=m.querySelector('.drawing-actions'); if(!a){a=document.createElement('div');a.className='drawing-actions';m.querySelector('.drawing-modal-box')?.appendChild(a);} 
  a.innerHTML='<button type="button" data-zout aria-label="Zoom out">−</button><button type="button" data-zin aria-label="Zoom in">+</button><button type="button" data-save aria-label="Save">⇩ <small>Save</small></button><button type="button" data-reset aria-label="Reset">1:1</button>';
  a.querySelector('[data-zout]').onclick=()=>window.wtdDrawingZoom(-.2);a.querySelector('[data-zin]').onclick=()=>window.wtdDrawingZoom(.2);a.querySelector('[data-reset]').onclick=()=>window.wtdDrawingReset();a.querySelector('[data-save]').onclick=()=>window.wtdDownloadDrawing();
  return false;
};
window.closeDrawing=function(){const m=$('drawingModal');if(m){m.classList.remove('show');m.setAttribute('aria-hidden','true');}document.body.classList.remove('wtd-drawing-open','wtd-modal-open');drawScale=1;return false;};
window.wtdDownloadDrawing=async function(){
  const src=currentDrawing.src||$('drawingImage')?.getAttribute('src'); if(!src)return false; const name=(currentDrawing.code||'plant').toLowerCase()+'-process-drawing.png';
  try{
    if(window.AndroidDownloads&&typeof window.AndroidDownloads.saveAsset==='function'){ window.AndroidDownloads.saveAsset(src,name); return false; }
  }catch(_){ }
  try{const r=await fetch(src,{cache:'no-store'});if(!r.ok)throw new Error('fetch');const blob=await r.blob();const u=URL.createObjectURL(blob);const a=document.createElement('a');a.href=u;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),2500);}catch(_){const a=document.createElement('a');a.href=src;a.download=name;a.target='_blank';document.body.appendChild(a);a.click();a.remove();}
  return false;
};

function bindBottom(){
  const n=document.querySelector('.mobile-bottom-nav'); if(!n)return;
  n.querySelectorAll('.bottom-nav-item').forEach(b=>{
    if(b.dataset.go==='plants')b.onclick=e=>{e.preventDefault();return window.wtdAllPlants();};
    if(b.dataset.go==='drawings')b.onclick=e=>{e.preventDefault();try{window.openAppPage?.('drawings','Drawings / ड्रॉइंग');}catch(_){}rebuildDrawings();setActiveNav('drawings');return false;};
  });
}
function init(){rebuildPlantGrid();rebuildDrawings();bindBottom();const back=document.querySelector('.wtd-page-back');if(back)back.onclick=e=>{e.preventDefault();if(document.body.classList.contains('plant-page-open'))return window.wtdPlantBack();try{return window.goHome?.();}catch(_){return false;}};}
document.addEventListener('DOMContentLoaded',init,{once:true}); if(document.readyState!=='loading')init(); setTimeout(init,300);setTimeout(init,1600);
})();

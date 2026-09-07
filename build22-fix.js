(function(){
  'use strict';
  const $=id=>document.getElementById(id);
  const esc=s=>String(s??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));

  function showTab(nav,panels,key){
    nav.querySelectorAll('button[data-k]').forEach(b=>b.classList.toggle('active',b.dataset.k===key));
    Object.entries(panels).forEach(([k,p])=>p.classList.toggle('active',k===key));
    const host=$('wtdPageContent'); if(host) host.scrollTop=0;
  }

  function buildPlantTabs(code){
    const box=$('plantDetailContent');
    if(!box) return;
    const key=String(code||'').trim().toUpperCase();
    const db=(typeof window.modules==='object'&&window.modules)||{};
    const plant=db[key]||{};
    const raw=[...box.children];
    const panels={overview:document.createElement('div'),process:document.createElement('div'),design:document.createElement('div'),drawing:document.createElement('div'),om:document.createElement('div')};
    Object.values(panels).forEach(p=>p.className='p52-panel');
    panels.overview.classList.add('active');

    let current='overview';
    raw.forEach(node=>{
      if(node.classList?.contains('p52-tabs')||node.classList?.contains('p52-summary')||node.classList?.contains('p52-quick')||node.classList?.contains('p52-panel')||node.classList?.contains('p52-plant-hero')) return;
      const text=(node.textContent||'').trim();
      if(node.classList?.contains('plant-drawing-card')) current='drawing';
      else if(node.classList?.contains('parameter-design-card')) current='design';
      else if(node.tagName==='H4'){
        if(/process drawing/i.test(text)) current='drawing';
        else if(/process flow/i.test(text)) current='process';
        else if(/design|sizing/i.test(text)) current='design';
        else if(/sop|operation|maintenance|chemical|troubleshooting|safety/i.test(text)) current='om';
      }
      panels[current].appendChild(node);
    });

    box.replaceChildren();
    box.dataset.build22Plant=key;
    const hero=document.createElement('div'); hero.className='p52-plant-hero';
    hero.innerHTML='<div><h2>'+esc(key)+' - '+esc(plant.name||'Water Treatment Plant')+'</h2><p>Overview • Process • Smart Design • Drawing • O&amp;M</p></div>';
    const nav=document.createElement('div'); nav.className='p52-tabs';
    nav.innerHTML='<button class="active" data-k="overview">Overview</button><button data-k="process">Process</button><button data-k="design">Design</button><button data-k="drawing">Drawing</button><button data-k="om">O&amp;M</button>';

    const smartBtn=document.createElement('button');
    smartBtn.type='button'; smartBtn.className='p52-design-open'; smartBtn.textContent='Open '+key+' Smart Design / स्मार्ट डिजाइन';
    smartBtn.onclick=()=>window.openSmartDesignForPlant?.(key);
    panels.design.prepend(smartBtn);

    const drawingImg=panels.drawing.querySelector('img.plant-drawing');
    if(drawingImg){
      const full=document.createElement('button'); full.type='button'; full.className='p52-design-open';
      full.textContent='Full Screen Drawing / पूरी ड्रॉइंग';
      full.onclick=()=>window.openDrawing?.(key,drawingImg.getAttribute('src'));
      panels.drawing.prepend(full);
    }

    box.append(hero,nav,panels.overview,panels.process,panels.design,panels.drawing,panels.om);
    nav.querySelectorAll('button[data-k]').forEach(b=>b.onclick=()=>{
      if(b.dataset.k==='design') { window.openSmartDesignForPlant?.(key); return; }
      showTab(nav,panels,b.dataset.k);
    });
  }

  window.openPlantByCode=function(code){
    const key=String(code||'').trim().toUpperCase();
    const db=(typeof window.modules==='object'&&window.modules)||{};
    const plant=db[key];
    if(!plant) return false;
    window.openAppPage?.('plants',key+' — '+(plant.name||'Plant'));
    const box=$('plantDetailContent'); if(box){ delete box.dataset.tabbed; delete box.dataset.tabbedCode; delete box.dataset.build22Plant; }
    if(typeof window.openModule==='function') window.openModule(key,plant);
    buildPlantTabs(key);
    const title=$('wtdPageTitle'); if(title) title.textContent=key+' — '+(plant.name||'Plant');
    const host=$('wtdPageContent'); if(host) host.scrollTop=0;
    return true;
  };

  window.openSmartDesignForPlant=function(code){
    const key=String(code||'STP').trim().toUpperCase();
    window.openAppPage?.('project',key+' — Smart Design / स्मार्ट डिजाइन');
    const type=$('prType'); if(type){ type.value=key; window.updateSmartDesignInputs?.(); }
    const name=$('prName'); if(name) name.value=key+' Smart Design';
    const hrt=$('prHrt'); if(hrt){ hrt.value=''; hrt.dataset.plant=key; hrt.placeholder=/^(STP|ETP|CETP|MBR|SBR|MBBR|ASP)$/.test(key)?'Enter selected HRT, e.g. 10':'Optional main-process HRT'; }
    const host=$('wtdPageContent'); if(host) host.scrollTop=0;
    return true;
  };

  let drawingScale=1;
  function applyDrawingScale(){ const img=$('drawingImage'); if(img) img.style.transform='scale('+drawingScale+')'; }
  window.wtdDrawingZoom=function(delta){ drawingScale=Math.max(.5,Math.min(3,drawingScale+delta)); applyDrawingScale(); };
  window.wtdDrawingReset=function(){ drawingScale=1; applyDrawingScale(); };
  window.wtdDownloadDrawing=function(){
    const img=$('drawingImage'); if(!img?.src) return false;
    const a=document.createElement('a'); a.href=img.src; a.download=(($('drawingTitle')?.textContent||'plant-drawing').replace(/[^a-z0-9_-]+/gi,'_'))+'.png';
    document.body.appendChild(a); a.click(); a.remove(); return false;
  };
  const baseDrawing=window.openDrawing;
  window.openDrawing=function(code,src){
    drawingScale=1;
    const out=baseDrawing?baseDrawing(code,src):false;
    const modal=$('drawingModal'); if(!modal) return out;
    modal.classList.add('show'); modal.setAttribute('aria-hidden','false'); document.body.classList.add('wtd-modal-open');
    let actions=modal.querySelector('.drawing-actions');
    if(!actions){
      actions=document.createElement('div'); actions.className='drawing-actions';
      actions.innerHTML='<button type="button" aria-label="Zoom out" onclick="wtdDrawingZoom(-0.2)">−</button><button type="button" aria-label="Zoom in" onclick="wtdDrawingZoom(0.2)">+</button><button type="button" aria-label="Download" onclick="wtdDownloadDrawing()">Download</button><button type="button" aria-label="Reset" onclick="wtdDrawingReset()">Reset</button>';
      modal.querySelector('.drawing-modal-box')?.appendChild(actions);
    }
    applyDrawingScale(); return true;
  };
  window.closeDrawing=function(){ const m=$('drawingModal'); if(m){m.classList.remove('show');m.setAttribute('aria-hidden','true')} document.body.classList.remove('wtd-modal-open'); drawingScale=1; applyDrawingScale(); return false; };

  function ensureChemicalTool(){
    const tools=document.querySelector('#wtdHome1852 .ref-tools');
    if(!tools||tools.querySelector('[data-build22-chemical]')) return;
    const b=document.createElement('button'); b.type='button'; b.className='ref-tool'; b.dataset.build22Chemical='1';
    b.innerHTML='<span>🧪</span><b>Chemical Dosing</b><small>केमिकल डोजिंग</small>';
    b.onclick=()=>window.openAppPage?.('chemicalCalculator','Chemical Dosing / केमिकल डोजिंग');
    const catalogue=[...tools.children].find(x=>/Catalogue/i.test(x.textContent||''));
    tools.insertBefore(b,catalogue||null);
  }

  function hardHomeState(){
    const home=$('wtdHome1852'); if(home) home.hidden=false;
    document.body.classList.remove('plant-page-open');
    ensureChemicalTool();
  }

  document.addEventListener('DOMContentLoaded',()=>{hardHomeState(); setTimeout(hardHomeState,80); setTimeout(hardHomeState,350);});
  if(document.readyState!=='loading') hardHomeState();
})();

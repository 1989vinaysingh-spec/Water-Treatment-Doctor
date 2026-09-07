(function(){
  'use strict';
  const $=id=>document.getElementById(id);
  const esc=s=>String(s??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));

  // BUILD 22.1: one authoritative page router. Legacy patches are left in the file
  // for compatibility, but these functions load last and own the live state.
  const pageState={target:null,parent:null,next:null,placeholder:null};
  function restorePage(){
    if(!pageState.target) return;
    try{
      if(pageState.next && pageState.next.parentNode===pageState.parent) pageState.parent.insertBefore(pageState.target,pageState.next);
      else if(pageState.parent) pageState.parent.appendChild(pageState.target);
      pageState.placeholder?.remove();
    }catch(_e){}
    pageState.target=pageState.parent=pageState.next=pageState.placeholder=null;
  }
  window.closeAppPage=function(){
    if($('drawingModal')?.classList.contains('show')) return window.closeDrawing?.();
    restorePage();
    const sh=$('wtdPageShell'); if(sh) sh.hidden=true;
    document.body.classList.remove('wtd-app-page-open','plant-page-open');
    document.documentElement.classList.remove('wtd-app-page-open');
    return false;
  };
  window.openAppPage=function(id,title){
    const target=$(id), sh=$('wtdPageShell'), host=$('wtdPageContent');
    if(!target||!sh||!host) return false;
    if(pageState.target!==target){
      restorePage();
      pageState.target=target; pageState.parent=target.parentNode; pageState.next=target.nextSibling;
      pageState.placeholder=document.createComment('build22-page-'+id);
      pageState.parent?.insertBefore(pageState.placeholder,target);
      host.replaceChildren(target);
    }
    if(target.classList.contains('main-section')){
      document.querySelectorAll('.main-section').forEach(x=>x.classList.remove('active'));
      target.classList.add('active');
    }
    const t=$('wtdPageTitle'); if(t) t.textContent=title||'Water Treatment Doctor';
    sh.hidden=false;
    document.body.classList.add('wtd-app-page-open');
    document.documentElement.classList.add('wtd-app-page-open');
    host.scrollTop=0;
    return true;
  };
  window.goSection=function(id){
    const titles={plants:'All Plants / सभी प्लांट',calculators:'Calculators / कैलकुलेटर',project:'Smart Design / स्मार्ट डिजाइन',analysis:'Water Analysis / पानी विश्लेषण',logs:'Daily Log / दैनिक लॉग',fieldReference:'Knowledge / ज्ञान',mediaDiagnosis:'AI Diagnose / AI निदान',chemicalCalculator:'Chemical Dosing / केमिकल डोजिंग'};
    return window.openAppPage(id,titles[id]||'Water Treatment Doctor');
  };
  window.goHome=function(){
    window.closeAppPage();
    const d=$('plantDetail'); if(d){d.hidden=true;d.classList.remove('open');}
    $('plants')?.classList.remove('detail-view');
    const home=$('wtdHome1852'); if(home) home.hidden=false;
    document.querySelectorAll('.bottom-nav-item').forEach(x=>x.classList.toggle('active',x.dataset.go==='home'));
    window.scrollTo(0,0);
    return false;
  };

  function showTab(nav,panels,key){
    nav.querySelectorAll('button[data-k]').forEach(b=>b.classList.toggle('active',b.dataset.k===key));
    Object.entries(panels).forEach(([k,p])=>p.classList.toggle('active',k===key));
    const host=$('wtdPageContent'); if(host) host.scrollTop=0;
  }
  function buildPlantTabs(code){
    const box=$('plantDetailContent'); if(!box) return;
    const key=String(code||'').trim().toUpperCase();
    if(box.dataset.build22Plant===key && box.querySelector('.p52-tabs')) return;
    const db=(typeof window.modules==='object'&&window.modules)||{}; const plant=db[key]||{};
    const raw=[...box.children];
    const panels={overview:document.createElement('div'),process:document.createElement('div'),design:document.createElement('div'),drawing:document.createElement('div'),om:document.createElement('div')};
    Object.values(panels).forEach(p=>p.className='p52-panel'); panels.overview.classList.add('active');
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
    box.replaceChildren(); box.dataset.build22Plant=key;
    const hero=document.createElement('div'); hero.className='p52-plant-hero';
    hero.innerHTML='<div><h2>'+esc(key)+' - '+esc(plant.name||'Water Treatment Plant')+'</h2><p>Overview • Process • Smart Design • Drawing • O&amp;M</p></div>';
    const nav=document.createElement('div'); nav.className='p52-tabs';
    nav.innerHTML='<button class="active" data-k="overview">Overview</button><button data-k="process">Process</button><button data-k="design">Design</button><button data-k="drawing">Drawing</button><button data-k="om">O&amp;M</button>';
    const smartBtn=document.createElement('button'); smartBtn.type='button'; smartBtn.className='p52-design-open'; smartBtn.textContent='Open '+key+' Smart Design / स्मार्ट डिजाइन'; smartBtn.onclick=()=>window.openSmartDesignForPlant(key); panels.design.prepend(smartBtn);
    const drawingImg=panels.drawing.querySelector('img.plant-drawing');
    const drawingSrc=drawingImg?.getAttribute('src') || ((typeof window.plantDrawings==='object'&&window.plantDrawings[key])||('drawings/'+key.toLowerCase()+'.png'));
    const full=document.createElement('button'); full.type='button'; full.className='p52-design-open'; full.textContent='Full Screen Drawing / पूरी ड्रॉइंग'; full.onclick=()=>window.openDrawing(key,drawingSrc); panels.drawing.prepend(full);
    box.append(hero,nav,panels.overview,panels.process,panels.design,panels.drawing,panels.om);
    nav.querySelectorAll('button[data-k]').forEach(b=>b.onclick=()=>{
      if(b.dataset.k==='design') return window.openSmartDesignForPlant(key);
      showTab(nav,panels,b.dataset.k);
    });
  }
  const renderPlant=window.openModule;
  window.openPlantByCode=function(code){
    const key=String(code||'').trim().toUpperCase(); const db=(typeof window.modules==='object'&&window.modules)||{}; const plant=db[key];
    if(!plant) return false;
    window.openAppPage('plants',key+' — '+(plant.name||'Plant'));
    const box=$('plantDetailContent'); if(box){delete box.dataset.tabbed;delete box.dataset.tabbedCode;delete box.dataset.build22Plant;}
    if(typeof renderPlant==='function') renderPlant(key,plant);
    buildPlantTabs(key);
    const title=$('wtdPageTitle'); if(title) title.textContent=key+' — '+(plant.name||'Plant');
    $('wtdPageContent')?.scrollTo?.(0,0);
    return true;
  };

  // Preserve the last HRT selected for each plant instead of resetting it to blank/old defaults.
  const hrtMemory={};
  document.addEventListener('input',e=>{if(e.target?.id==='prHrt'){const k=e.target.dataset.plant||$('prType')?.value||'STP';if(e.target.value!=='') hrtMemory[k]=e.target.value;}});
  window.openSmartDesignForPlant=function(code){
    const key=String(code||'STP').trim().toUpperCase();
    window.openAppPage('project',key+' — Smart Design / स्मार्ट डिजाइन');
    const type=$('prType'); if(type){type.value=key; window.updateSmartDesignInputs?.();}
    const name=$('prName'); if(name && (!name.value || /Smart Design$/i.test(name.value))) name.value=key+' Smart Design';
    const hrt=$('prHrt'); if(hrt){
      const previous=(hrt.dataset.plant===key && hrt.value!=='')?hrt.value:hrtMemory[key];
      hrt.dataset.plant=key;
      hrt.value=previous||'';
      hrt.placeholder=/^(STP|ETP|CETP|MBR|SBR|MBBR|ASP)$/.test(key)?'Enter selected HRT, e.g. 10':'Optional main-process HRT';
    }
    $('wtdPageContent')?.scrollTo?.(0,0); return true;
  };

  // Full-screen drawing with reliable close, pan/zoom and direct image download.
  let drawingScale=1;
  function applyDrawingScale(){const img=$('drawingImage');if(img) img.style.transform='scale('+drawingScale+')';}
  window.wtdDrawingZoom=function(delta){drawingScale=Math.max(.5,Math.min(3,drawingScale+delta));applyDrawingScale();return false;};
  window.wtdDrawingReset=function(){drawingScale=1;applyDrawingScale();return false;};
  window.wtdDownloadDrawing=async function(){
    const img=$('drawingImage'); if(!img?.src) return false;
    const title=(($('drawingTitle')?.textContent||'plant-drawing').replace(/[^a-z0-9_-]+/gi,'_'));
    const filename=(title||'plant-drawing')+'.png';
    let assetPath='';
    try{
      const u=new URL(img.src,location.href);
      const marker='/android_asset/';
      assetPath=u.pathname.includes(marker)?u.pathname.split(marker)[1]:u.pathname.replace(/^\//,'');
    }catch(_){ assetPath=(img.getAttribute('src')||'').replace(/^\.\//,''); }
    // Final APK: native Android bridge writes bundled drawing into the user's Downloads folder.
    if(window.AndroidDownloads&&typeof window.AndroidDownloads.saveAsset==='function'&&assetPath){
      try{ window.AndroidDownloads.saveAsset(assetPath,filename); return false; }catch(_e){}
    }
    // Browser/PWA fallback: fetch into a Blob so local/static images download instead of only opening.
    try{
      const r=await fetch(img.src); if(!r.ok) throw new Error('HTTP '+r.status);
      const blob=await r.blob();
      const file=new File([blob],filename,{type:blob.type||'image/png'});
      if(navigator.canShare&&navigator.canShare({files:[file]})&&/Android|iPhone|iPad/i.test(navigator.userAgent)){
        try{await navigator.share({files:[file],title:filename});return false;}catch(e){if(e&&e.name==='AbortError')return false;}
      }
      const href=URL.createObjectURL(blob),a=document.createElement('a');
      a.href=href;a.download=filename;a.style.display='none';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(href),1500);
    }catch(e){
      try{window.open(img.src,'_blank')}catch(_e){}
      alert('Drawing could not be saved automatically. Please use Share/Save Image. / ड्रॉइंग अपने-आप सेव नहीं हुई। Share/Save Image का उपयोग करें।');
    }
    return false;
  };
  window.openDrawing=function(code,src){
    const key=String(code||'PLANT').toUpperCase(); const modal=$('drawingModal'),img=$('drawingImage'); if(!modal||!img)return false;
    const title=$('drawingTitle'); if(title) title.textContent=key+' Drawing / ड्रॉइंग';
    drawingScale=1; img.style.transform='scale(1)';
    const fallback='drawings/'+key.toLowerCase()+'.png';
    img.onerror=()=>{if(!img.src.endsWith('/'+fallback) && !img.src.endsWith(fallback)){img.onerror=null;img.src=fallback;}};
    img.src=src||((typeof window.plantDrawings==='object'&&window.plantDrawings[key])||fallback);
    modal.classList.add('show'); modal.setAttribute('aria-hidden','false'); document.body.classList.add('wtd-modal-open');
    let actions=modal.querySelector('.drawing-actions');
    if(!actions){actions=document.createElement('div');actions.className='drawing-actions';actions.innerHTML='<button type="button" onclick="wtdDrawingZoom(-0.2)" aria-label="Zoom out">−</button><button type="button" onclick="wtdDrawingZoom(0.2)" aria-label="Zoom in">+</button><button type="button" class="drawing-download-btn" onclick="wtdDownloadDrawing()" aria-label="Download drawing">⇩ <small>Save</small></button><button type="button" onclick="wtdDrawingReset()" aria-label="Reset">1:1</button>';modal.querySelector('.drawing-modal-box')?.appendChild(actions);}
    return true;
  };
  window.closeDrawing=function(){const m=$('drawingModal');if(m){m.classList.remove('show');m.setAttribute('aria-hidden','true');}document.body.classList.remove('wtd-modal-open');drawingScale=1;applyDrawingScale();return false;};


  function ensureProfileModal(){
    let m=$('appOverviewModal'); if(m) return m;
    m=document.createElement('div'); m.id='appOverviewModal'; m.className='modal'; m.setAttribute('aria-hidden','true');
    m.innerHTML='<div class="modal-box"><button type="button" class="close" onclick="closeAppOverview()" aria-label="Close">×</button><div style="text-align:center;padding:10px 4px"><img src="icon-512.png" alt="Water Treatment Doctor" style="width:88px;height:88px;border-radius:22px;object-fit:cover"><h2 style="margin:12px 0 4px">Water Treatment Doctor</h2><p class="muted">Version 18.5.5</p><p><b>Developer:</b> Vinay Kumar Singh</p><p>Design • Calculate • Learn • Solve</p><p class="muted">STP • ETP • CETP • WTP • RO • UF • ZLD • WSP and more</p></div></div>';
    document.body.appendChild(m); return m;
  }
  // Profile modal must always sit above the page shell and remain tappable.
  window.openAppOverview=function(){const m=ensureProfileModal();m.classList.add('show');m.setAttribute('aria-hidden','false');document.body.classList.add('wtd-modal-open');return false;};
  window.closeAppOverview=function(){const m=$('appOverviewModal');if(m){m.classList.remove('show');m.setAttribute('aria-hidden','true');}document.body.classList.remove('wtd-modal-open');return false;};

  function ensureChemicalTool(){
    const tools=document.querySelector('#wtdHome1852 .ref-tools'); if(!tools||tools.querySelector('[data-build22-chemical]'))return;
    const b=document.createElement('button');b.type='button';b.className='ref-tool';b.dataset.build22Chemical='1';b.innerHTML='<span>🧪</span><b>Chemical Dosing</b><small>केमिकल डोजिंग</small>';b.onclick=()=>window.openAppPage('chemicalCalculator','Chemical Dosing / केमिकल डोजिंग');
    const catalogue=[...tools.children].find(x=>/Catalogue/i.test(x.textContent||''));tools.insertBefore(b,catalogue||null);
  }
  function normalizeInputs(){
    const flow=$('doseFlow'); if(flow){flow.placeholder='Enter actual plant flow';flow.removeAttribute('value');}
    const ai=$('aiBackendUrl'); if(ai && !ai.value) ai.placeholder='https://your-ai-backend.example.com';
  }
  function hardHomeState(){if(!document.body.classList.contains('wtd-app-page-open')){const home=$('wtdHome1852');if(home)home.hidden=false;}ensureChemicalTool();ensureProfileModal();normalizeInputs();}

  // Android hardware/software back: close modal first, then app page, otherwise leave browser handling untouched.
  window.addEventListener('popstate',()=>{if($('drawingModal')?.classList.contains('show'))window.closeDrawing();else if($('appOverviewModal')?.classList.contains('show'))window.closeAppOverview();else if(document.body.classList.contains('wtd-app-page-open'))window.closeAppPage();});
  document.addEventListener('click',e=>{if(e.target?.id==='drawingModal')window.closeDrawing();if(e.target?.id==='appOverviewModal')window.closeAppOverview();});
  document.addEventListener('DOMContentLoaded',()=>{hardHomeState();setTimeout(hardHomeState,80);setTimeout(hardHomeState,350);});
  if(document.readyState!=='loading') hardHomeState();

  // Final hardening: never leave AI Diagnosis at a dead-end "failed" state.
  window.runAIVisionDiagnosis=async function(){
    const backend=($('aiBackendUrl')?.value||'').trim().replace(/\/+$/,'');
    const plant=$('diagPlant')?.value||'', symptom=$('diagSymptom')?.value||'', note=$('aiOperatorNote')?.value||'';
    const file=(typeof window.getSelectedDiagFile==='function'?window.getSelectedDiagFile():null)||$('diagMedia')?.files?.[0]||$('diagCamera')?.files?.[0]||$('diagVideoCapture')?.files?.[0]||null;
    const result=$('aiVisionResult'),progress=$('aiProgress'); if(!result)return;
    const offline=(reason)=>{
      const d=(typeof window.mediaDiagDB==='object'&&window.mediaDiagDB?.[plant]?.[symptom])||null;
      result.hidden=false;
      result.innerHTML='<h4>Offline Guided Assessment / ऑफलाइन गाइडेड आकलन</h4>'+
        (reason?'<p class="muted">Online AI unavailable: '+esc(reason)+'</p>':'')+
        '<p><b>Media:</b> '+esc(file?.name||'Selected capture')+'</p>'+
        (d?'<p><b>Possible Cause / संभावित कारण:</b><br>'+d.cause+'</p><p><b>Corrective Action / सुधारात्मक कार्य:</b><br>'+d.action+'</p>':'<p>Select plant and symptom for guided troubleshooting.</p>')+
        (note?'<p><b>Operator note:</b> '+esc(note)+'</p>':'')+
        '<p class="muted">Automatic image/video interpretation requires the configured online AI backend. Guided troubleshooting remains available offline.</p>';
    };
    if(!file){result.hidden=false;result.innerHTML='<b>Upload/take a photo or video first. / पहले फोटो या वीडियो चुनें या कैमरा से लें।</b>';return;}
    if(!backend){offline('Backend not configured');return;}
    if(progress)progress.hidden=false;result.hidden=true;
    const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),25000);
    try{
      let images=[];
      if(file.type?.startsWith('image/')) images=[await window.imageFileToDataUrl(file)];
      else if(file.type?.startsWith('video/')) images=await window.videoFileToFrames(file,3);
      else throw new Error('Unsupported media type');
      const resp=await fetch(backend+'/api/analyze',{method:'POST',headers:{'Content-Type':'application/json'},signal:controller.signal,body:JSON.stringify({plant,symptom,operator_note:note,media_type:file.type.startsWith('video/')?'video_frames':'image',images})});
      const data=await resp.json().catch(()=>({})); if(!resp.ok)throw new Error(data.error||('Server error '+resp.status));
      window.renderAIResult(data);
      const status=$('aiStatus');if(status){status.textContent='AI online / AI ऑनलाइन';status.classList.add('ok');}
    }catch(e){offline(e?.name==='AbortError'?'Connection timeout':(e?.message||String(e)));}
    finally{clearTimeout(timer);if(progress)progress.hidden=true;}
  };

  // Dedicated language control in the detail header; Home remains in the bottom navigation.
  window.wtdCycleLang=function(){
    const current=document.documentElement.dataset.lang||localStorage.getItem('wtdLang')||'both';
    const next=current==='both'?'en':(current==='en'?'hi':'both');
    if(typeof window.setLang==='function')window.setLang(next);
    const sel=$('langSwitch');if(sel)sel.value=next;
    const b=document.querySelector('.wtd-page-home');if(b)b.textContent=next==='en'?'EN':(next==='hi'?'हिं':'EN / हिं');
    return false;
  };
  function hardenDetailHeader(){
    const b=document.querySelector('.wtd-page-home');if(!b)return;
    const current=document.documentElement.dataset.lang||localStorage.getItem('wtdLang')||'both';
    b.textContent=current==='en'?'EN':(current==='hi'?'हिं':'EN / हिं');
    b.setAttribute('aria-label','Change language / भाषा बदलें');b.onclick=window.wtdCycleLang;
  }
  document.addEventListener('DOMContentLoaded',hardenDetailHeader);setTimeout(hardenDetailHeader,100);

  // Safe-area and modal action hardening for small Android screens.
  const hardStyle=document.createElement('style');hardStyle.id='build22-final-hardening-style';hardStyle.textContent=`
    .drawing-actions{display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr))!important;gap:8px!important;padding:10px!important;position:sticky!important;bottom:0!important;background:rgba(255,255,255,.96)!important;z-index:4!important}
    .drawing-actions button{min-height:46px!important;touch-action:manipulation!important}.drawing-actions small{font-size:9px!important;display:block!important;line-height:1!important}
    #drawingImage{transform-origin:center center!important;max-width:none!important;user-select:none!important;-webkit-user-drag:none!important}
    #drawingModal .drawing-modal-box{padding-bottom:max(8px,env(safe-area-inset-bottom,0px))!important}
    #appOverviewModal,#drawingModal{z-index:40000!important}
    body .wtd-page-header{grid-template-columns:48px minmax(0,1fr) 64px!important;gap:6px!important}
    body .wtd-page-back{width:44px!important;min-width:44px!important;padding:0!important;font-size:0!important}
    body .wtd-page-back:after{content:'‹'!important;font-size:34px!important;line-height:1!important}
    body .wtd-page-home{width:62px!important;min-width:62px!important;padding:7px 5px!important;font-size:10px!important;font-weight:900!important;color:#fff!important;background:#075da8!important;border-radius:7px!important}
    body .wtd-page-home:after{content:none!important}
    @media(max-width:360px){.ref-home-brand b{font-size:15px!important}.ref-grid{gap:6px!important}.ref-plant{min-height:94px!important}.mobile-bottom-nav .bottom-nav-item b{font-size:8.5px!important}}
  `;document.head.appendChild(hardStyle);

})();

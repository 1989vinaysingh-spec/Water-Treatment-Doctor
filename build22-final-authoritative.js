(function(){
'use strict';
const $=id=>document.getElementById(id);
const esc=s=>String(s??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));

function setLanguageFinal(lang){
  const v=['en','hi','both'].includes(lang)?lang:'both';
  try{
    if(window.WTDI18N&&typeof window.WTDI18N.setLanguage==='function') window.WTDI18N.setLanguage(v);
    else if(typeof window.setLang==='function') window.setLang(v);
  }catch(_e){}
  document.documentElement.dataset.lang=v;
  try{localStorage.setItem('wtdLang',v)}catch(_e){}
  const sel=$('langSwitch'); if(sel) sel.value=v;
  const b=document.querySelector('.wtd-page-home'); if(b){b.textContent=v==='en'?'EN':v==='hi'?'हिं':'EN/हिं';b.setAttribute('aria-label','Language / भाषा');}
}
window.wtdCycleLang=function(){const cur=document.documentElement.dataset.lang||localStorage.getItem('wtdLang')||'both';setLanguageFinal(cur==='both'?'en':cur==='en'?'hi':'both');return false;};

function hardenHeader(){
  const back=document.querySelector('.wtd-page-back');
  if(back){back.removeAttribute('onclick');back.onclick=e=>{e.preventDefault();window.closeAppPage?.();return false;};}
  const lang=document.querySelector('.wtd-page-home');
  if(lang){lang.removeAttribute('onclick');lang.onclick=e=>{e.preventDefault();return window.wtdCycleLang();};}
  setLanguageFinal(document.documentElement.dataset.lang||localStorage.getItem('wtdLang')||$('langSwitch')?.value||'both');
}

function ensureProfile(){
  let m=$('appOverviewModal');
  if(!m){m=document.createElement('div');m.id='appOverviewModal';m.className='modal';document.body.appendChild(m);}
  if(!m.querySelector('.modal-box')) m.innerHTML='<div class="modal-box"><button type="button" class="close" aria-label="Close">×</button><div style="text-align:center;padding:10px 4px"><img src="final-round-logo.png" alt="Water Treatment Doctor" style="width:88px;height:88px;border-radius:50%;object-fit:contain"><h2 style="margin:12px 0 4px">Water Treatment Doctor</h2><p class="muted">Version 18.5.5 • Build 22.9</p><p><b>Developed by Vinay Kumar Singh</b></p><p>Design • Calculate • Learn • Solve</p><p class="muted">STP • ETP • CETP • WTP • RO • UF • ZLD • WSP and more</p></div></div>';
  const c=m.querySelector('.close');if(c)c.onclick=window.closeAppOverview;
  return m;
}
window.openAppOverview=function(){const m=ensureProfile();m.classList.add('show');m.setAttribute('aria-hidden','false');document.body.classList.add('wtd-modal-open');return false;};
window.closeAppOverview=function(){const m=$('appOverviewModal');if(m){m.classList.remove('show');m.setAttribute('aria-hidden','true');}document.body.classList.remove('wtd-modal-open');return false;};

// Replace any late wrappers around AI with one predictable online->offline fallback implementation.
window.runAIVisionDiagnosis=async function(){
 const backend=($('aiBackendUrl')?.value||'').trim().replace(/\/+$/,'');
 const plant=$('diagPlant')?.value||'', symptom=$('diagSymptom')?.value||'', note=$('aiOperatorNote')?.value||'';
 const file=(typeof window.getSelectedDiagFile==='function'?window.getSelectedDiagFile():null)||$('diagMedia')?.files?.[0]||$('diagCamera')?.files?.[0]||$('diagVideoCapture')?.files?.[0]||null;
 const result=$('aiVisionResult'),progress=$('aiProgress'); if(!result)return;
 const offline=reason=>{const d=(window.mediaDiagDB&&window.mediaDiagDB?.[plant]?.[symptom])||null;result.hidden=false;result.innerHTML='<h4>Offline Guided Assessment / ऑफलाइन गाइडेड आकलन</h4>'+(reason?'<p class="muted">Online AI unavailable: '+esc(reason)+'</p>':'')+(file?'<p><b>Media:</b> '+esc(file.name||'Selected capture')+'</p>':'')+(d?'<p><b>Possible Cause / संभावित कारण:</b><br>'+d.cause+'</p><p><b>Corrective Action / सुधारात्मक कार्य:</b><br>'+d.action+'</p>':'<p>Select a plant and symptom for guided troubleshooting.</p>')+(note?'<p><b>Operator note:</b> '+esc(note)+'</p>':'')+'<p class="muted">Automatic photo/video interpretation needs the configured AI backend; guided troubleshooting works offline.</p>';};
 if(!file){result.hidden=false;result.innerHTML='<b>Upload/take a photo or video first. / पहले फोटो या वीडियो चुनें या कैमरा से लें।</b>';return;}
 if(!backend){offline('Backend not configured');return;}
 if(progress)progress.hidden=false;result.hidden=true;
 const ctl=new AbortController(),timer=setTimeout(()=>ctl.abort(),22000);
 try{
   let images=[];
   if(file.type?.startsWith('image/')&&typeof window.imageFileToDataUrl==='function')images=[await window.imageFileToDataUrl(file)];
   else if(file.type?.startsWith('video/')&&typeof window.videoFileToFrames==='function')images=await window.videoFileToFrames(file,3);
   else throw new Error('Unsupported media type');
   const resp=await fetch(backend+'/api/analyze',{method:'POST',headers:{'Content-Type':'application/json'},signal:ctl.signal,body:JSON.stringify({plant,symptom,operator_note:note,media_type:file.type.startsWith('video/')?'video_frames':'image',images})});
   const data=await resp.json().catch(()=>({}));if(!resp.ok)throw new Error(data.error||('Server error '+resp.status));
   if(typeof window.renderAIResult==='function')window.renderAIResult(data);else{result.hidden=false;result.textContent='AI analysis completed.';}
   const s=$('aiStatus');if(s){s.textContent='AI online / AI ऑनलाइन';s.classList.add('ok');}
 }catch(e){offline(e?.name==='AbortError'?'Connection timeout':(e?.message||String(e)));}
 finally{clearTimeout(timer);if(progress)progress.hidden=true;}
};

// Drawing: keep fullscreen controls and provide multiple download paths for Android/browser wrappers.
let scale=1;
function applyScale(){const img=$('drawingImage');if(img)img.style.transform='scale('+scale+')';}
window.wtdDrawingZoom=d=>{scale=Math.max(.5,Math.min(3,scale+Number(d||0)));applyScale();return false;};
window.wtdDrawingReset=()=>{scale=1;applyScale();return false;};
window.openDrawing=function(code,src){const key=String(code||'PLANT').toUpperCase(),m=$('drawingModal'),img=$('drawingImage');if(!m||!img)return false;const title=$('drawingTitle');if(title)title.textContent=key+' Drawing / ड्रॉइंग';scale=1;applyScale();const fallback='drawings/'+key.toLowerCase()+'.png';img.onerror=()=>{if(!String(img.getAttribute('src')||'').endsWith(fallback)){img.onerror=null;img.src=fallback;}};img.src=src||((typeof plantDrawings==='object'&&plantDrawings[key])||fallback);m.classList.add('show');m.setAttribute('aria-hidden','false');document.body.classList.add('wtd-modal-open');let a=m.querySelector('.drawing-actions');if(!a){a=document.createElement('div');a.className='drawing-actions';a.innerHTML='<button type="button" aria-label="Zoom out">−</button><button type="button" aria-label="Zoom in">+</button><button type="button" aria-label="Save drawing">⇩</button><button type="button" aria-label="Reset zoom">1:1</button>';m.querySelector('.drawing-modal-box')?.appendChild(a);}const bs=a.querySelectorAll('button');if(bs[0])bs[0].onclick=()=>window.wtdDrawingZoom(-.2);if(bs[1])bs[1].onclick=()=>window.wtdDrawingZoom(.2);if(bs[2])bs[2].onclick=window.wtdDownloadDrawing;if(bs[3])bs[3].onclick=window.wtdDrawingReset;return true;};
window.closeDrawing=function(){const m=$('drawingModal');if(m){m.classList.remove('show');m.setAttribute('aria-hidden','true');}document.body.classList.remove('wtd-modal-open');scale=1;applyScale();return false;};
window.wtdDownloadDrawing=async function(){const img=$('drawingImage');if(!img?.src)return false;const title=(($('drawingTitle')?.textContent||'plant-drawing').replace(/[^a-z0-9_-]+/gi,'_'))+'.png';let path='';try{const u=new URL(img.src,location.href);path=u.pathname.replace(/^.*?android_asset\//,'').replace(/^\//,'');}catch(_){path=img.getAttribute('src')||'';}
 if(window.AndroidDownloads&&typeof window.AndroidDownloads.saveAsset==='function'&&path){try{window.AndroidDownloads.saveAsset(path,title);return false;}catch(_){}}
 try{const r=await fetch(img.src);if(!r.ok)throw new Error('HTTP '+r.status);const blob=await r.blob();const file=new File([blob],title,{type:blob.type||'image/png'});if(navigator.canShare&&navigator.canShare({files:[file]})){try{await navigator.share({files:[file],title});return false;}catch(e){if(e?.name==='AbortError')return false;}}const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=title;a.style.display='none';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),2000);return false;}catch(_e){const a=document.createElement('a');a.href=img.src;a.download=title;a.target='_blank';a.rel='noopener';document.body.appendChild(a);a.click();a.remove();return false;}
};

function navDelegation(){
 document.querySelectorAll('.mobile-bottom-nav .bottom-nav-item').forEach(btn=>{btn.style.pointerEvents='auto';});
 document.addEventListener('click',e=>{if(e.target?.id==='drawingModal')window.closeDrawing();if(e.target?.id==='appOverviewModal')window.closeAppOverview();},true);
}
function init(){ensureProfile();hardenHeader();navDelegation();setTimeout(hardenHeader,60);setTimeout(hardenHeader,250);}
document.addEventListener('DOMContentLoaded',init,{once:true});if(document.readyState!=='loading')init();
})();

/* Build 22.8 QA lock: make the approved bottom navigation deterministic after all legacy layers. */
(function(){
'use strict';
const $=id=>document.getElementById(id);
function setActive(btn){document.querySelectorAll('.mobile-bottom-nav .bottom-nav-item').forEach(x=>x.classList.toggle('active',x===btn));}
function lockBottomNav(){
  const nav=document.querySelector('.mobile-bottom-nav'); if(!nav)return;
  nav.innerHTML='';
  const items=[
    ['⌂','Home','home',()=>window.goHome?.()],
    ['🏭','Plants','plants',()=>window.openAppPage?.('plants','All Plants / सभी प्लांट')],
    ['🛠','Tools','tools',()=>window.openAppPage?.('calculators','Tools / टूल्स')],
    ['📐','Drawings','drawings',()=>window.openAppPage?.('drawings','Drawings / ड्रॉइंग')],
    ['♙','Profile','profile',()=>window.openAppOverview?.()]
  ];
  items.forEach(([ico,label,key,act],i)=>{
    const b=document.createElement('button');b.type='button';b.className='bottom-nav-item'+(i===0?' active':'');b.dataset.go=key;
    b.innerHTML='<span>'+ico+'</span><b>'+label+'</b>';
    b.onclick=e=>{e.preventDefault();act();setActive(b);return false;}; nav.appendChild(b);
  });
}
function hardenHomeAndPlants(){
  // Keep the router from build22-fix (it owns plant tab construction); only harden Main/Home state here.
  window.goHome=function(){
    window.closeAppPage?.();
    const d=$('plantDetail');if(d){d.hidden=true;d.classList.remove('open');}
    $('plants')?.classList.remove('detail-view');
    const h=$('wtdHome1852');if(h){h.hidden=false;h.style.display='block';}
    document.querySelectorAll('.mobile-bottom-nav .bottom-nav-item').forEach(x=>x.classList.toggle('active',x.dataset.go==='home'));
    window.scrollTo(0,0);return false;
  };
}
function finalQA(){hardenHomeAndPlants();lockBottomNav();
  // Ensure modal close buttons are bound after any legacy HTML replacements.
  const pm=$('appOverviewModal');pm?.querySelector('.close')?.addEventListener('click',e=>{e.preventDefault();window.closeAppOverview?.();});
  const dm=$('drawingModal');dm?.querySelector('.close')?.addEventListener('click',e=>{e.preventDefault();window.closeDrawing?.();});
}
document.addEventListener('DOMContentLoaded',finalQA,{once:true}); if(document.readyState!=='loading') finalQA();
setTimeout(lockBottomNav,120);setTimeout(lockBottomNav,500);
})();

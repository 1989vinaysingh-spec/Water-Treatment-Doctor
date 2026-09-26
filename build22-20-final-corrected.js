/* Water Treatment Doctor V18.5.5 Build 22.20 — final corrected runtime guard. */
(function(){
'use strict';
const $=id=>document.getElementById(id);
let pointers=new Map(), startDist=0, startScale=1, currentScale=1, panX=0, panY=0, startMid=null, basePan=null;
function img(){return $('drawingImage')}
function apply(){const el=img();if(!el)return;el.style.transform=`translate(${panX}px,${panY}px) scale(${currentScale})`;}
function resetGesture(){currentScale=1;panX=0;panY=0;apply();}
function attachGestures(){
 const view=document.querySelector('#drawingModal .wtd2219-drawing-view'), el=img(); if(!view||!el||view.dataset.wtd2220)return;
 view.dataset.wtd2220='1';
 const mid=(a,b)=>({x:(a.clientX+b.clientX)/2,y:(a.clientY+b.clientY)/2});
 const dist=(a,b)=>Math.hypot(a.clientX-b.clientX,a.clientY-b.clientY);
 view.addEventListener('pointerdown',e=>{try{view.setPointerCapture(e.pointerId)}catch(_){} pointers.set(e.pointerId,e);if(pointers.size===1){basePan={x:panX,y:panY};startMid={x:e.clientX,y:e.clientY};}else if(pointers.size===2){const [a,b]=[...pointers.values()];startDist=dist(a,b);startScale=currentScale;startMid=mid(a,b);basePan={x:panX,y:panY};}}, {passive:false});
 view.addEventListener('pointermove',e=>{if(!pointers.has(e.pointerId))return;pointers.set(e.pointerId,e);e.preventDefault();if(pointers.size===2){const [a,b]=[...pointers.values()],m=mid(a,b);currentScale=Math.max(.8,Math.min(5,startScale*(dist(a,b)/Math.max(1,startDist))));panX=basePan.x+(m.x-startMid.x);panY=basePan.y+(m.y-startMid.y);apply();}else if(pointers.size===1&&currentScale>1){panX=basePan.x+(e.clientX-startMid.x);panY=basePan.y+(e.clientY-startMid.y);apply();}}, {passive:false});
 const up=e=>{pointers.delete(e.pointerId);if(pointers.size===1){const a=[...pointers.values()][0];basePan={x:panX,y:panY};startMid={x:a.clientX,y:a.clientY};}else if(!pointers.size){startDist=0;}};
 view.addEventListener('pointerup',up);view.addEventListener('pointercancel',up);
}
function nativeDrawingMode(on){document.body.classList.toggle('b2224-landscape',!!on)}
const oldOpen=window.openDrawing, oldClose=window.closeDrawing, oldReset=window.wtdDrawingReset;
window.openDrawing=function(code,src){const r=oldOpen?oldOpen(code,src):false;nativeDrawingMode(true);resetGesture();setTimeout(()=>{attachGestures();const el=img();if(el){el.onload=()=>{resetGesture();};}},30);return r;};
window.closeDrawing=function(){nativeDrawingMode(false);resetGesture();pointers.clear();return oldClose?oldClose():false;};
window.wtdDrawingReset=function(){resetGesture();try{oldReset&&oldReset()}catch(_){}return false;};
// Keep Android Back/rotation clean even after stale modal state.
document.addEventListener('visibilitychange',()=>{if(document.hidden&&!document.body.classList.contains('wtd-drawing-open'))nativeDrawingMode(false)});
// Add explicit compliance provenance to the rendered plant reference panels.
function addSourceNotes(){document.querySelectorAll('.wtd2219-panel').forEach(p=>{const h=p.querySelector('h3');if(!h||!/CPCB/.test(h.textContent)||p.querySelector('.wtd2220-source-note'))return;const n=document.createElement('div');n.className='wtd2220-source-note';n.innerHTML='<b>Regulatory note / नियामक नोट:</b> Use the latest MoEF&amp;CC/CPCB notification plus the site SPCB/PCC Consent-to-Operate. Industry-specific or consent conditions may be stricter than the general reference shown here.';p.appendChild(n);});}
const obs=new MutationObserver(()=>addSourceNotes());
document.addEventListener('DOMContentLoaded',()=>{addSourceNotes();obs.observe(document.body,{childList:true,subtree:true})},{once:true});if(document.readyState!=='loading'){addSourceNotes();obs.observe(document.body,{childList:true,subtree:true})}
})();

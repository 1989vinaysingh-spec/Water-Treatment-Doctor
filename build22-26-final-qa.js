/* Build 22.26: final state-preserving drawing and selected-language guard. */
(()=>{'use strict';
const $=s=>document.querySelector(s);
const language=()=>localStorage.getItem('wtdLangChoice')==='hi'?'hi':'en';
function syncLanguage(){const v=language();document.documentElement.dataset.lang=v;document.documentElement.lang=v;const s=$('#langSwitch');if(s){s.disabled=false;s.value=v}}
function syncDrawing(){const open=$('#drawingModal.show');document.body.classList.toggle('b2224-landscape',!!open);if(!open)document.body.classList.remove('wtd-drawing-open','wtd-modal-open')}
const previousClose=window.closeDrawing;
window.closeDrawing=function(...args){document.body.classList.remove('b2224-landscape');const r=previousClose?.apply(this,args);syncDrawing();return r};
document.addEventListener('click',e=>{if(e.target.closest?.('[data-close-draw]'))setTimeout(syncDrawing,0)},true);
document.addEventListener('visibilitychange',()=>{if(!document.hidden)syncDrawing()});
document.addEventListener('DOMContentLoaded',()=>{syncLanguage();syncDrawing()},{once:true});
if(document.readyState!=='loading'){syncLanguage();syncDrawing()}
})();

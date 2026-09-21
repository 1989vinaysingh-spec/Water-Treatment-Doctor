/* Build 22.24: visible Home tools, language labels and drawing-only landscape mode. */
(()=>{'use strict';
const $=s=>document.querySelector(s), hi=()=>localStorage.getItem('wtdLangChoice')==='hi';
function home(){const h=$('#wtdHome1852 .b2212-home');if(!h)return;
 const features=h.querySelector('.b2212-features');if(features&&!features.querySelector('.b2224-chemical')){
  const b=document.createElement('button');b.type='button';b.className='b2212-feature b2224-chemical';b.innerHTML='<span>🧪</span><div><b>Chemical Dosing / केमिकल डोजिंग</b><small>Calculate dose / डोज़ की गणना</small></div>';b.onclick=()=>window.openAppPage?.('chemicalCalculator','Chemical Dosing / केमिकल डोजिंग');features.append(b);
  const a=document.createElement('button');a.type='button';a.className='b2212-feature b2224-ai';a.innerHTML='<span>📷</span><div><b>Troubleshooting with AI / AI समस्या समाधान</b><small>Photo, video & guided checks / फोटो, वीडियो व जाँच</small></div>';a.onclick=()=>window.openAppPage?.('mediaDiagnosis','AI Troubleshooting / AI समस्या समाधान');features.append(a);
 }
 const hero=h.querySelector('.b2212-hero-copy');if(hero)hero.innerHTML=hi()?'जल और अपशिष्ट जल उपचार<br>आपके हाथों में<small>डिजाइन • संचालन • रखरखाव • सुधार</small>':'Complete Water &amp;<br>Wastewater Solutions<br>in Your Hand<small>Design • Operate • Maintain • Optimize</small>';
 const labels={STP:['Sewage','सीवेज'],ETP:['Effluent','औद्योगिक जल'],CETP:['Common effluent','सामूहिक औद्योगिक जल'],WTP:['Water treatment','जल उपचार'],RO:['Reverse osmosis','रिवर्स ऑस्मोसिस'],UF:['Ultrafiltration','अल्ट्राफिल्ट्रेशन'],ZLD:['Zero liquid discharge','शून्य तरल डिस्चार्ज'],WSP:['Water supply','जल आपूर्ति']};h.querySelectorAll('[data-plant]').forEach(b=>{const v=labels[b.dataset.plant];if(v&&b.querySelector('small'))b.querySelector('small').textContent=v[hi()?1:0]});
 const quick=h.querySelectorAll('.b2212-quick [data-page]');const q={fieldReference:['Knowledge','ज्ञान'],sops:['SOP & O&M','SOP एवं संचालन'],calculators:['Tools','टूल्स'],drawings:['Drawings','ड्रॉइंग']};quick.forEach(b=>{const v=q[b.dataset.page];if(v)b.lastChild.textContent=v[hi()?1:0]});
 h.querySelector('[data-page="plants"] b').textContent=hi()?'सभी प्लांट':'All Plants';
}
const observer=new MutationObserver(m=>{if(m.some(x=>[...x.addedNodes].some(n=>n.nodeType===1&&(n.matches?.('.b2212-home')||n.querySelector?.('.b2212-home')))))home()});
document.addEventListener('DOMContentLoaded',()=>{home();observer.observe(document.body,{childList:true,subtree:true})});if(document.readyState!=='loading'){home();observer.observe(document.body,{childList:true,subtree:true})}
const oldOpen=window.openDrawing,oldClose=window.closeDrawing;
window.openDrawing=function(...args){const r=oldOpen?.apply(this,args);document.body.classList.add('b2224-landscape');try{screen.orientation?.lock?.('landscape').catch(()=>{})}catch(_){}return r};
window.closeDrawing=function(...args){document.body.classList.remove('b2224-landscape');try{screen.orientation?.unlock?.()}catch(_){}return oldClose?.apply(this,args)};
})();

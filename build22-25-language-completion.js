/* Selected language for the visible navigation, calculators, AI guidance and drawing controls. */
(()=>{'use strict';
const TR={
'Home':'होम','Plants':'प्लांट','Tools':'टूल्स','Drawings':'ड्रॉइंग','Profile':'प्रोफ़ाइल','Back':'वापस',
'Quick Tools':'त्वरित टूल्स','Calculate':'गणना करें','Save':'सेव करें','Fit':'स्क्रीन में फिट करें',
'Flow Converter':'फ्लो कन्वर्टर','Flow value':'फ्लो का मान','Unit':'इकाई','Enter a value to convert.':'बदलने के लिए मान डालें।',
'Rectangular Tank Volume':'आयताकार टैंक का आयतन','Length (m)':'लंबाई (मी)','Width (m)':'चौड़ाई (मी)','Water depth (m)':'पानी की गहराई (मी)','Volume will appear here.':'आयतन यहाँ दिखेगा।',
'Chemical Dosing':'केमिकल डोजिंग','Plant flow (m³/day)':'प्लांट फ्लो (घन मी/दिन)','Required dose (mg/L)':'आवश्यक डोज (मिग्रा/ली)','Solution strength (%)':'घोल की सांद्रता (%)','Product density (kg/L)':'उत्पाद घनत्व (किग्रा/ली)','Dosing pump run (hr/day)':'डोजिंग पंप चलने का समय (घंटे/दिन)','Daily chemical requirement will appear here.':'दैनिक केमिकल मात्रा यहाँ दिखेगी।',
'Hydraulic Retention Time':'हाइड्रोलिक रिटेंशन समय','Tank volume (m³)':'टैंक का आयतन (घन मी)','STP Design':'STP डिजाइन','Blower':'ब्लोअर','Clarifier':'क्लैरिफायर','Softener':'सॉफ्टनर','Chem Tank':'केमिकल टैंक','Tank':'टैंक','Dose':'डोज','Pump':'पंप','Filter':'फिल्टर',
'Automatic Visual Troubleshooting':'फोटो/वीडियो से समस्या की जाँच','Not connected':'कनेक्ट नहीं है','Analyzing visual evidence...':'फोटो/वीडियो की जाँच हो रही है...','Get Started':'शुरू करें',
'Select Language':'भाषा चुनें','You can change language later from the header.':'बाद में ऊपर दिए बटन से भाषा बदल सकते हैं।',
'English':'English','हिन्दी':'हिन्दी'
};
const hi=()=>localStorage.getItem('wtdLangChoice')==='hi';
function convertText(node){if(!node||node.nodeType!==3)return;const old=node.nodeValue,trim=old.trim();if(!trim||!Object.prototype.hasOwnProperty.call(TR,trim))return;const result=TR[trim];if(result!==trim)node.nodeValue=old.replace(trim,result)}
function apply(){if(!hi())return;
 const targets=['.mobile-bottom-nav b','.wtd-page-back','#wtdHome1852 h3','#calculators h4','#calculators label','#calculators .tab','#calculators button','#calculators .result','#chemicalCalculator h4','#chemicalCalculator label','#chemicalCalculator button','#chemicalCalculator .result','#drawingModal [data-reset]','#drawingModal [data-save-draw]','#aiStatus','#wtd2222Language h2','#wtd2222Language small'];
 document.querySelectorAll(targets.join(',')).forEach(el=>{for(const n of el.childNodes)convertText(n)});
 const welcome=document.getElementById('wtdGetStarted');if(welcome)for(const n of welcome.childNodes)convertText(n);
}
let pending=false;function schedule(){if(pending)return;pending=true;requestAnimationFrame(()=>{pending=false;apply()})}
document.addEventListener('DOMContentLoaded',()=>{apply();new MutationObserver(schedule).observe(document.body,{childList:true,subtree:true})},{once:true});if(document.readyState!=='loading'){apply();new MutationObserver(schedule).observe(document.body,{childList:true,subtree:true})}
})();

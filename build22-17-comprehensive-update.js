/* Build 22.17 — comprehensive plant content + deterministic details/drawing/download/design schedule */
(function(){
'use strict';
const $=id=>document.getElementById(id);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const commonDaily=[
 'Record inlet/treated flow, operating hours, tank levels and any bypass/overflow condition.',
 'Walk the plant for leakage, abnormal sound/vibration, overheating, odor, foam, scum and housekeeping condition.',
 'Check duty/standby pumps, suction/discharge pressure, valve lineup, gland/seal leakage and motor current where available.',
 'Check chemical stock, solution strength, dosing-pump stroke/rate, calibration column and actual chemical consumption.',
 'Verify online instruments against field/lab checks as applicable; note calibration due dates and sensor fouling.',
 'Check sludge/backwash/CIP/waste streams and record quantity/disposal or recycle status.',
 'Record alarms, trips, corrective actions and handover points in the shift log.'
];
const profiles={
 STP:{points:['Bar screens/grit/O&G removal condition','Equalization level, mixing and septicity','Aeration/blower condition and DO','MLSS, MLVSS, SVI, RAS/WAS and sludge blanket','Treated-water turbidity and disinfection residual/contact','Sludge thickening/dewatering and disposal'],params:[['Influent monitoring','pH, BOD, COD, TSS, TDS/conductivity, NH₃-N/TKN, Total N, oil & grease where relevant'],['Biological control','DO, MLSS, MLVSS, SVI, pH, alkalinity, temperature, ammonia/nitrate where nitrification is required'],['Treated water','pH, BOD, COD, TSS, Total N, fecal coliform; turbidity/residual disinfectant for reuse/disinfection control']],cpcb:'STP reference commonly cited by CPCB/NGT: pH 5.5–9.0, BOD ≤10 mg/L, COD ≤50 mg/L, TSS ≤20 mg/L, Total N ≤10 mg/L and fecal coliform desirable 100 / permissible 230 MPN/100 mL. Applicability can vary by notification, location, reuse/discharge route and Consent conditions.'},
 ETP:{points:['Source-wise effluent receipt/segregation and abnormal batch check','Equalization mixing, pH trend and conductivity/TDS','Neutralization/coagulation/flocculation jar-test response','Clarifier/DAF sludge blanket and carryover','Biological stage DO/MLSS where provided','Tertiary treatment, sludge dewatering and hazardous-sludge records'],params:[['Influent/design basis','Flow, pH, COD, BOD, TSS, TDS, oil & grease, color, metals, ammonia/nutrients and industry-specific toxics'],['Process control','pH, ORP where used, turbidity, DO/MLSS for biology, clarifier sludge, conductivity/TDS'],['Outlet/compliance','Use the applicable industry-specific Schedule-I / Consent-to-Operate limits; do not apply one universal ETP number to every industry.']],cpcb:'ETP discharge limits are industry- and disposal-route-specific. The app should compare the final effluent against the plant’s current SPCB/PCC Consent and applicable Environment (Protection) Rules rather than a single universal ETP limit.'},
 CETP:{points:['Member-industry/tanker source, quantity and acceptance check','Hold/divert abnormal pH, solvent, oil, toxic, metal or high-TDS streams','Equalization homogenization and pH dosing response','Coagulation/flocculation/DAF or clarifier performance','Biological DO, MLSS/MLVSS, SVI, RAS/WAS','Tertiary treatment, sludge dewatering, manifest/disposal and outlet compliance'],params:[['Inlet/member monitoring','Flow, pH, BOD, COD, TSS, TDS/conductivity, oil & grease, color, NH₃-N, nutrients, metals and sector-specific toxic parameters'],['Biological control','DO, MLSS, MLVSS, SVI, pH, alkalinity, nutrient balance and shock-load indicators'],['Outlet/compliance','CETP limits depend on applicable Schedule-I entry, member mix, disposal route and Consent conditions; monitor all consented parameters.']],cpcb:'CETP inlet/outlet standards can be industry-cluster specific. Always use the latest applicable CPCB/MoEF&CC standard plus the specific SPCB/PCC Consent conditions.'},
 RO:{points:['Feed pressure, cartridge-filter DP and pretreatment quality','Feed/permeate/reject conductivity or TDS','Permeate flow, reject flow, recovery and normalized performance','Array/vessel pressure drop and membrane differential pressure','Antiscalant/SMBS/pH dosing and ORP/chlorine protection','CIP trigger trend, leaks and membrane/O-ring condition'],params:[['Feed','pH, conductivity/TDS, hardness, alkalinity, silica, SDI/turbidity, iron, manganese, chlorine/ORP as applicable'],['Performance','Feed/permeate/reject flow & pressure, recovery %, salt rejection %, normalized permeate flow, DP'],['Product','Conductivity/TDS and application-specific parameters']],cpcb:'RO product quality is generally governed by intended use/process specification. CPCB discharge compliance may apply to reject/concentrate depending on industry and Consent conditions.'},
 UF:{points:['Feed turbidity/SDI and strainer condition','TMP, feed/permeate pressure and permeability trend','Filtration/backwash/CEB cycle completion','Air scour/backwash flow where applicable','Permeate turbidity and integrity check','Chemical strength and membrane-compatible cleaning limits'],params:[['Feed','Turbidity, TSS, SDI where relevant, pH, temperature'],['Operation','TMP, permeability/flux, feed/permeate pressure, backwash frequency'],['Product','Turbidity/TSS and downstream-use quality']],cpcb:'UF is a treatment unit; CPCB limits apply to the final discharge/reuse stream or sector, not a universal UF permeate limit.'},
 WTP:{points:['Raw-water turbidity and source change','Coagulant dose/jar test, flash mix and floc quality','Clarifier sludge blanket and weir condition','Filter headloss, run time and backwash quality','Disinfection dose/contact and residual','Clear-water tank hygiene and distribution pressure'],params:[['Raw water','pH, turbidity, color, TDS/conductivity, alkalinity, hardness, iron/manganese and microbiology as source requires'],['Process','Coagulant dose, settled-water turbidity, filter headloss, filtered-water turbidity, disinfectant residual'],['Product','Use BIS/drinking-water or project-specific intended-use quality as applicable']],cpcb:'For potable water, BIS/drinking-water requirements are normally the primary quality reference; CPCB is mainly relevant to environmental discharge/waste streams.'},
 WSP:{points:['Source/storage level and daily demand','Pump suction/discharge pressure and current','Duty/standby pump rotation and NRV/valve condition','Reservoir hygiene and disinfectant residual','Distribution pressure, leakage and complaints','Meter readings and water balance'],params:[['Supply','Flow, pressure, tank level, chlorine residual where disinfected'],['Quality','pH, turbidity, TDS and microbiology according to intended use/source requirements']],cpcb:'Water-supply operation is generally controlled by drinking-water/service standards; environmental discharge rules apply to waste/backwash streams where relevant.'},
 ZLD:{points:['Feed balance and segregated high-TDS streams','RO recovery/reject conductivity and pressure trend','MEE feed/steam/vacuum/temperature and condensate quality','Scaling/fouling trend and cleaning frequency','ATFD/crystallizer feed, solids dryness and salt handling','Condensate/reuse quality and zero-discharge mass balance'],params:[['Feed','Flow, pH, TDS/conductivity, COD, hardness, alkalinity, silica, chloride/sulfate and scaling ions'],['RO/MEE control','Recovery, pressure/DP, conductivity, density/Brix where used, steam economy, vacuum, temperatures'],['Outputs','Condensate quality, salt/moisture, recycle quantity and any authorized disposal stream']],cpcb:'ZLD requirements are usually tied to sector-specific rules/Consent conditions. “Zero liquid discharge” must be verified by actual water/salt mass balance and permitted waste disposal.'}
};
const aliases={MBBR:'STP',SBR:'STP',MBR:'STP',ASP:'STP',CTP:'WTP',NF:'RO',DESAL:'RO',EDI:'RO',DM:'WTP',SOFT:'WTP',MEE:'ZLD',ATFD:'ZLD',COOLING:'WTP',BOILER:'WTP'};
function pFor(k){return profiles[k]||profiles[aliases[k]]||{points:['Check process inlet, unit loading, equipment condition, instruments, outlet quality and waste streams.'],params:[['Monitoring','Use actual inlet analysis, process-control parameters and required outlet specification.']],cpcb:'Verify the latest applicable CPCB/MoEF&CC standard and the site-specific SPCB/PCC Consent conditions.'};}
function operationCard(key){const p=pFor(key);const rows=p.params.map(r=>`<tr><td><b>${esc(r[0])}</b></td><td>${esc(r[1])}</td></tr>`).join('');return `<section class="wtd-ops-card" data-wtd2217="ops"><h4>${esc(key)} Complete Operation & Compliance Reference / ऑपरेशन एवं कम्प्लायंस</h4><h5>Daily / Shift Check Points</h5><ol>${[...p.points,...commonDaily].map(x=>`<li>${esc(x)}</li>`).join('')}</ol><h5>Parameter Monitoring</h5><div class="table-wrap"><table class="wtd-param-table"><thead><tr><th>Area</th><th>Parameters / Checks</th></tr></thead><tbody>${rows}</tbody></table></div><h5>CPCB / Consent Reference</h5><div class="wtd-compliance-note">${esc(p.cpcb)}<br><b>Important:</b> Influent values are normally site/design-basis measurements, not universal CPCB “input limits”. Before discharge/reuse, verify the latest applicable notification and the plant’s current SPCB/PCC Consent-to-Operate conditions.</div></section>`}
function injectOps(key){const box=$('plantDetailContent');if(!box)return;box.querySelectorAll('[data-wtd2217="ops"]').forEach(x=>x.remove());const panels=box.querySelectorAll('.p52-panel');const om=panels.length?panels[panels.length-1]:box;om.insertAdjacentHTML('afterbegin',operationCard(key));}

/* Deterministic selected-plant render: open the Plants page, then render selected module directly. */
const previousPlant=window.openPlantByCode;
window.openPlantByCode=function(code){
 const key=String(code||'').trim().toUpperCase();
 try{ if(typeof window.wtdFinalOpenPage==='function') window.wtdFinalOpenPage('plants',key+' / '+(window.modules?.[key]?.name||'Plant')); else if(typeof window.openAppPage==='function') window.openAppPage('plants',key); }catch(_e){}
 let r=false;
 try{ if(typeof previousPlant==='function') r=previousPlant(key); }catch(_e){}
 try{ if(typeof window.openModule==='function' && typeof modules==='object' && modules[key]) window.openModule(key,modules[key]); }catch(_e){}
 const d=$('plantDetail');if(d){d.hidden=false;d.classList.add('open');}
 $('plants')?.classList.add('detail-view');document.body.classList.add('plant-page-open');
 const g=$('modules');if(g)g.style.display='none';
 setTimeout(()=>injectOps(key),80);setTimeout(()=>injectOps(key),240);
 const host=$('wtdPageContent');if(host)host.scrollTop=0;
 return r;
};

/* Reliable full-screen drawing + download. */
let currentDrawing={code:'',src:''};
const oldOpenDrawing=window.openDrawing;
window.openDrawing=function(code,src){
 const key=String(code||'PLANT').toUpperCase(); const fallback='drawings/'+key.toLowerCase()+'.png';
 currentDrawing={code:key,src:src||fallback};
 try{oldOpenDrawing?.(key,currentDrawing.src)}catch(_e){}
 const m=$('drawingModal'),img=$('drawingImage');if(!m||!img)return false;
 const t=$('drawingTitle');if(t)t.textContent=key+' Process Drawing / प्रोसेस ड्रॉइंग';
 img.onerror=function(){if(this.src.indexOf(fallback)<0)this.src=fallback};img.src=currentDrawing.src;
 m.classList.add('show');m.setAttribute('aria-hidden','false');document.body.classList.add('wtd-drawing-open','wtd-modal-open');
 let a=m.querySelector('.drawing-actions');if(!a){a=document.createElement('div');a.className='drawing-actions';m.querySelector('.drawing-modal-box')?.appendChild(a)}
 a.innerHTML='<button type="button" data-zout>−</button><button type="button" data-zin>+</button><button type="button" data-save>⇩ Save</button><button type="button" data-reset>1:1</button>';
 a.querySelector('[data-zout]').onclick=()=>window.wtdDrawingZoom?.(-.2);a.querySelector('[data-zin]').onclick=()=>window.wtdDrawingZoom?.(.2);a.querySelector('[data-reset]').onclick=()=>window.wtdDrawingReset?.();a.querySelector('[data-save]').onclick=()=>window.wtdDownloadDrawing2217();
 return false;
};
window.wtdDownloadDrawing2217=async function(){
 const src=currentDrawing.src||$('drawingImage')?.getAttribute('src');if(!src)return false;const name=(currentDrawing.code||'plant').toLowerCase()+'-process-drawing.png';
 try{const res=await fetch(src,{cache:'no-store'});if(!res.ok)throw new Error('fetch');const blob=await res.blob();const u=URL.createObjectURL(blob);const a=document.createElement('a');a.href=u;a.download=name;a.rel='noopener';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),4000);return false;}catch(_e){
   const a=document.createElement('a');a.href=src;a.download=name;a.target='_blank';a.rel='noopener';document.body.appendChild(a);a.click();a.remove();return false;
 }
};
window.wtdDownloadDrawing=window.wtdDownloadDrawing2217;

/* Smart Design: append a drawing-linked schedule so every calculated tank/equipment size is visible beside the P&ID. */
const oldBuild=window.buildDesign;
window.buildDesign=function(){
 const r=oldBuild?.();setTimeout(()=>{
  const out=$('designResult');if(!out)return;out.querySelectorAll('[data-wtd2217="schedule"]').forEach(x=>x.remove());
  const tables=out.querySelectorAll('table');if(tables.length<3)return;
  const tank= tables[1]?.outerHTML||''; const equip=tables[2]?.outerHTML||'';
  const s=document.createElement('div');s.className='wtd-design-schedule';s.dataset.wtd2217='schedule';
  s.innerHTML='<h4>Drawing Size & Capacity Schedule / ड्रॉइंग साइज एवं क्षमता शेड्यूल</h4><p class="muted">The following calculated tank dimensions/capacities and pump/equipment duty bases are part of this Smart Design drawing reference. Use these beside the process/P&amp;ID schematic.</p><h5>All Tanks / सभी टैंक</h5><div class="table-wrap">'+tank+'</div><h5>All Pumps & Equipment / सभी पंप एवं इक्विपमेंट</h5><div class="table-wrap">'+equip+'</div><div class="wtd-compliance-note">Final pump head, motor kW, pipe diameter, duty/standby philosophy and tank civil dimensions require project hydraulic profile, process loading, OEM curves and structural verification.</div>';
  const pid=$('pidDrawing');(pid?.parentElement||out).appendChild(s);
 },80);return r;
};

})();

const modules = {
 STP:{name:'Sewage Treatment Plant',process:'Screening → Grit/O&G removal → Equalization → Biological treatment (MBBR/SBR/ASP/MBR) → Secondary separation → Tertiary filtration → Disinfection → Reuse/Discharge → Sludge handling',design:['Confirm average/peak flow, BOD, COD, TSS, TKN/ammonia and required outlet quality.','Size equalization and biological stages from hydraulic and organic loading; verify oxygen demand and sludge age.','Verify clarifier/MBR loading, tertiary filters, disinfection contact and sludge handling capacity.'],operation:['START-UP: inspect tanks, screens, pumps, blowers, valves, instruments and chemical levels; fill biological tank gradually and establish healthy biomass/seed.','NORMAL: keep flow reasonably even; observe aeration/mixing, settling and return/waste sludge. Typical activated-sludge DO is commonly controlled around 1.5–3 mg/L, but process-specific targets govern.','Monitor pH, DO, MLSS/MLVSS, SVI/sludge blanket, BOD/COD/TSS, ammonia where nitrification is required, treated-water turbidity and disinfectant residual.','SHUTDOWN: stop feed in a controlled manner, maintain mixing/aeration as required to protect biomass, isolate equipment safely and record abnormalities.','ROUTINE: clean screens, remove scum, backwash tertiary filters, inspect diffusers/blowers, calibrate probes and manage sludge dewatering.'],chemicals:[['Sodium hypochlorite','NaOCl; commercial bleach is an aqueous solution','Disinfection / oxidation','Dose by chlorine demand and required residual/contact time; verify residual at outlet.'],['Alum','Al₂(SO₄)₃·xH₂O','Coagulation / phosphorus or TSS polishing','Dose is site-specific; establish by jar test and alkalinity/pH response.'],['Ferric chloride','FeCl₃ (commercial aqueous solution)','Coagulation / phosphorus removal','Jar-test; monitor pH/alkalinity and sludge production.'],['PAC','Polyaluminium chloride; basic aluminium chloride polymer','Coagulation','Product composition varies; dose by jar test/vendor active content.'],['Polymer','Anionic/cationic/nonionic polyelectrolyte','Flocculation / sludge dewatering','Use very low optimized dose; make-down/aging per supplier instructions.'],['Urea / nutrient N','CO(NH₂)₂','Nutrient supplementation only when deficient','Use only from nutrient balance; excessive addition increases nitrogen load.'],['DAP / phosphate nutrient','(NH₄)₂HPO₄','N/P supplementation only when deficient','Use only after BOD:N:P/nutrient assessment.'],['Lime / caustic','Ca(OH)₂ / NaOH','pH and alkalinity correction','Control from measured pH/alkalinity; avoid uncontrolled addition.']],trouble:['Odour/septicity: check long detention, dead zones, low DO and sludge accumulation.','High outlet TSS: inspect clarifier blanket, SVI/filamentous growth, hydraulic overload and sludge wasting.','Poor BOD/ammonia removal: check DO, pH/alkalinity, temperature, toxicity, nutrient balance and biomass age.','Foam: identify young sludge, surfactants or filamentous organisms before corrective action.']},
 CETP:{name:'Common Effluent Treatment Plant',process:'Member-industry collection & segregation → Screening → Equalization & homogenization → pH correction → Coagulation/Flocculation → Primary clarification/DAF as required → Biological treatment → Secondary clarification/MBR → Tertiary filtration/advanced treatment → Disinfection/Reuse/Discharge → Sludge thickening & dewatering',design:['Characterize combined and member-wise flows for pH, BOD, COD, TSS, oil & grease, TDS, metals, nutrients and toxic/inhibitory compounds; define acceptance limits for incoming tankers/streams.','Provide robust equalization and mixing for variable industrial loads; segregate incompatible, high-TDS, solvent, oil or toxic streams where required.','Validate neutralization, coagulation, precipitation and biological treatability with bench/jar/pilot testing; size clarification, aeration, tertiary treatment and sludge handling for peak loads.'],operation:['START-UP: verify inlet screening, equalization mixing, pH instruments, chemical preparation/dosing, clarifiers/DAF, aeration, sludge return/wasting and tertiary units before receiving full load.','INLET CONTROL: record source/quantity and screen incoming effluent against CETP acceptance criteria; isolate abnormal/toxic loads rather than sending them directly to biology.','NORMAL: homogenize equalization; adjust pH gradually; optimize coagulation/flocculation by jar test; maintain sludge withdrawal and stable biological loading, DO and biomass condition.','MONITOR: flow, pH, COD/BOD, TSS, oil & grease, TDS/conductivity, ammonia/nutrients where relevant, DO/MLSS/SVI, clarifier blanket, tertiary turbidity, chemical consumption and sludge generation.','SHUTDOWN/UPSET: stop or divert problematic feed, maintain mixing/aeration needed to protect biomass, safely isolate equipment, preserve biological health and document the incident.','ROUTINE: clean screens, inspect mixers/pumps/blowers, calibrate pH/DO/flow instruments, backwash filters, inspect sludge dewatering and maintain member-industry/load records.'],chemicals:[['Sulfuric acid / Hydrochloric acid','H₂SO₄ / HCl','pH reduction / neutralization','Dose under measured pH control; select chemistry for process and materials; follow SDS and site dilution procedure.'],['Caustic soda','NaOH','pH increase / neutralization','Dose under pH control; dissolution/dilution is exothermic.'],['Hydrated lime','Ca(OH)₂','pH increase / metal precipitation','Prepare agitated slurry; optimize from stoichiometry plus jar test and monitor sludge.'],['Ferric chloride','FeCl₃','Coagulation / phosphate or metal precipitation','Jar-test; account for acidity, chloride and sludge generation.'],['Alum','Al₂(SO₄)₃·xH₂O','Coagulation','Jar-test across expected mixed-effluent pH/alkalinity.'],['PAC','Polyaluminium chloride','Coagulation','Product active content/basicity varies; dose by jar test/vendor specification.'],['Polymer','Anionic/cationic/nonionic polyelectrolyte','Floc aid / sludge dewatering','Select ionic type and dose by trials; avoid overdosing.'],['Urea / DAP nutrients','CO(NH₂)₂ / (NH₄)₂HPO₄','Biological nutrient supplementation only when deficient','Add only from measured nutrient balance; avoid unnecessary nitrogen/phosphorus loading.'],['Sodium hypochlorite','NaOCl','Disinfection / controlled oxidation where designed','Dose from demand and required residual/contact time; protect biological stage from oxidant carryover.'],['Sodium metabisulfite','Na₂S₂O₅','Dechlorination/reducing duty where applicable','Dose from measured oxidant residual and verify endpoint.']],trouble:['Sudden biological upset: check member-industry discharge, toxicity, pH, salinity/TDS, solvent/metal load, DO and equalization; divert abnormal feed where possible.','Poor floc/settling: repeat jar test and verify pH, chemical strength, dosing sequence, rapid mix/flocculation and clarifier loading.','High outlet COD: distinguish soluble refractory COD from suspended/biodegradable COD; review shock load, biomass health and required advanced treatment.','High TSS/sludge carryover: inspect sludge blanket, SVI, RAS/WAS, hydraulic overload, DAF/clarifier operation and polymer use.','Excess sludge or poor dewatering: optimize coagulant/polymer dose, check solids characteristics, thickening and filter-press/centrifuge operation.']},
 ETP:{name:'Effluent Treatment Plant',process:'Collection/Screening → Equalization → pH correction → Coagulation/Flocculation → Primary separation → Biological/Advanced treatment → Tertiary treatment → Sludge handling',design:['Characterize each waste stream: flow, pH, COD/BOD, TSS, oil, metals, salts and toxic/inhibitory compounds.','Segregate incompatible/high-strength streams where beneficial; equalize variable industrial discharge.','Validate neutralization/coagulation/precipitation by bench or jar tests and confirm sludge disposal route.'],operation:['START-UP: verify chemical tanks, agitators, dosing pumps, pH instruments, equalization mixing and sludge system before accepting effluent.','NORMAL: homogenize equalization; adjust pH progressively; run rapid mix then flocculation at appropriate intensity; maintain clarifier sludge withdrawal.','For biological ETP, monitor DO, biomass condition and shock/toxic loads; do not send incompatible chemicals directly to biomass.','Record inlet/outlet pH, COD, TSS, flow, chemical consumption, sludge quantity and any production/process change.','SHUTDOWN: stop chemical dosing with feed, flush dosing lines as compatible, remove settled sludge and isolate equipment safely.'],chemicals:[['Sulfuric acid','H₂SO₄','pH reduction / neutralization','Dose under pH control; dilution is strongly exothermic—follow SDS/site procedure.'],['Hydrochloric acid','HCl','pH reduction / neutralization','Dose under pH control; provide compatible materials and ventilation.'],['Caustic soda','NaOH','pH increase / neutralization','Dose under pH control; dissolution is exothermic.'],['Hydrated lime','Ca(OH)₂','pH increase / precipitation','Prepare slurry with agitation; verify settling/sludge effects.'],['Ferric chloride','FeCl₃','Coagulation / metal or phosphate precipitation','Jar-test and account for acidity/sludge.'],['Alum','Al₂(SO₄)₃·xH₂O','Coagulation','Jar-test across expected pH range.'],['PAC','Polyaluminium chloride','Coagulation','Active content/basicity varies by supplier; jar-test.'],['Polymer','Polyelectrolyte','Floc aid / dewatering','Select ionic type and dose by trials.'],['Sodium metabisulfite','Na₂S₂O₅','Reducing/dechlorination agent in applicable processes','Dose from oxidant residual and stoichiometry with margin; verify endpoint.']],trouble:['Unstable pH: inspect equalization, probe calibration, dosing response and chemical strength.','Poor floc/settling: repeat jar test; check pH, mixing energy, coagulant/polymer sequence and overdosing.','COD breakthrough: identify source/loading shock, refractory COD, toxicity or biological upset.','Excess sludge: review chemical dose, solids load and dewatering operation.']},
 CTP:{name:'Cooling Tower Water Treatment',process:'Make-up treatment → Circulation → Scale/corrosion inhibitor → Biocide program → Side-stream filtration → Blowdown',design:['Calculate cycles of concentration from make-up chemistry and limiting species.','Review scaling indices, metallurgy, corrosion limits, microbiological risk and blowdown constraints.','Select chemical program with specialist/vendor based on actual water analysis and system materials.'],operation:['Maintain basin level, circulation and blowdown conductivity control; inspect strainers/nozzles/fill.','Trend conductivity, pH, hardness, alkalinity, chlorides/silica as applicable, inhibitor residual and microbiological indicators.','Alternate/rotate biocide program only under an approved water-treatment plan; maintain required contact time.','Clean basin and side-stream filter; inspect corrosion coupons/probes where installed.'],chemicals:[['Phosphonate/polymer inhibitor','Product-specific phosphonate + dispersant polymer blend','Scale control','No universal dose; follow product active content and water-analysis program.'],['Corrosion inhibitor','Often phosphate/molybdate/zinc or product-specific blend','Corrosion control','Program depends on metallurgy and discharge restrictions.'],['Sodium hypochlorite','NaOCl','Oxidizing biocide','Control by approved residual/contact-time program; avoid excessive oxidant.'],['Bromine donor','Product-specific brominated oxidant','Oxidizing biocide','Use only per supplier/SDS and site program.'],['Non-oxidizing biocide','Product-specific (e.g., isothiazolin/glutaraldehyde types)','Biofilm/microbial control','Chemistry and dose are product-specific; follow label/SDS and discharge rules.'],['Sulfuric acid','H₂SO₄','Alkalinity/pH control in selected systems','Automated controlled dosing only with appropriate safeguards.']],trouble:['Scale: reduce supersaturation/cycles as needed; verify inhibitor feed and pH.','Corrosion: inspect chemistry, inhibitor residual, oxidant exposure and metallurgy.','Biofouling: verify biocide delivery/contact, dead legs, nutrient ingress and cleanliness.']},
 RO:{name:'Reverse Osmosis',process:'Pretreatment → Cartridge filtration → Dechlorination/antiscalant/pH adjustment as required → High-pressure pump → RO membranes → Permeate → CIP/Reject management',design:['Use complete ionic feed analysis, temperature, SDI/turbidity and membrane projection software for final design.','Check scaling saturation, recovery, flux, array staging, pressure drop and concentrate limits.','Pretreatment must protect membrane from particles, oxidants, hardness/scale, iron/manganese and biofouling as applicable.'],operation:['START-UP: confirm pretreatment quality, cartridge condition, valves/instruments; flush at low pressure before gradually raising pressure per membrane/system procedure.','NORMAL: record feed/concentrate/permeate flow, pressures, pressure drop, conductivity/TDS, temperature and recovery; trend normalized performance.','Keep free chlorine/oxidant within the selected membrane manufacturer limit; verify dechlorination when required.','CIP: initiate based on normalized permeate-flow decline, salt passage or pressure-drop criteria specified by membrane supplier; use compatible cleaner, concentration, pH and temperature.','SHUTDOWN: flush/displace concentrate as specified; preserve membranes for extended shutdown using manufacturer-approved procedure.'],chemicals:[['Antiscalant','Proprietary phosphonate/polymer blend; composition varies','Scale inhibition','Dose from feed analysis and membrane projection/vendor software; avoid generic fixed dose.'],['Sodium metabisulfite','Na₂S₂O₅','Dechlorination / reducing agent','Dose from measured oxidant residual; verify no free chlorine before sensitive polyamide RO.'],['Sulfuric/Hydrochloric acid','H₂SO₄ / HCl','Feed pH/alkalinity adjustment where designed','Control by projection and pH; consider sulfate scaling when using H₂SO₄.'],['Caustic soda','NaOH','pH adjustment / second-pass RO applications','Use only where process design requires.'],['Alkaline CIP cleaner','Often NaOH-based with surfactant/chelants; product-specific','Organic/biofouling cleaning','Follow membrane and cleaner supplier pH/temperature limits.'],['Acid CIP cleaner','Citric acid or HCl/product-specific acid cleaner','Mineral scale/metal fouling cleaning','Identify foulant first; follow membrane limits and compatibility.'],['Biocide/preservative','Membrane-compatible product; often SMBS for preservation','Storage/bio-control where applicable','Use only membrane-approved chemistry and concentration.']],trouble:['High permeate conductivity: check O-rings/interconnectors, membrane damage, feed conductivity, pressure and calibration.','High differential pressure: suspect particulate/biofouling/scale; inspect pretreatment and clean appropriately.','Low normalized flow: review fouling, scaling, temperature correction, pressure and recovery.','Frequent cartridge plugging: investigate upstream turbidity/SDI, coagulant carryover or biological growth.']},
 WTP:{name:'Water Treatment Plant',process:'Raw water → Aeration/oxidation as needed → Coagulation → Flocculation → Clarification → Filtration → Disinfection → Storage',design:['Base process on raw-water turbidity, color, organics, alkalinity, hardness, iron/manganese and microbiology.','Establish coagulant/pH by jar testing; verify clarifier and filter hydraulic loading/backwash.','Confirm disinfectant CT/residual and local drinking/reuse standard requirements.'],operation:['START-UP: inspect intake, mixers, dosing systems, clarifier, filters and disinfectant system; prepare chemicals correctly.','NORMAL: optimize coagulation with jar tests as raw water changes; maintain floc blanket/clarifier sludge removal.','Filter: monitor headloss and filtrate turbidity; backwash on validated trigger and return to service only after acceptable rinse/quality.','Disinfection: maintain validated dose, contact and residual; record treated-water quality.'],chemicals:[['Alum','Al₂(SO₄)₃·xH₂O','Coagulant','Jar-test; consumes alkalinity and can lower pH.'],['PAC','Polyaluminium chloride','Coagulant','Composition/basicity varies; jar-test.'],['Ferric chloride','FeCl₃','Coagulant / iron-based precipitation','Jar-test; corrosive and acidic commercial solution.'],['Polymer','Polyelectrolyte','Coagulant aid/floc aid','Select and dose by jar test; avoid overdosing.'],['Lime','Ca(OH)₂','pH/alkalinity adjustment; softening where designed','Control by process targets and settling performance.'],['Sodium hypochlorite','NaOCl','Disinfection/oxidation','Dose from demand and target residual/contact time; verify residual.'],['Potassium permanganate','KMnO₄','Oxidation of Fe/Mn/taste-odor in applicable plants','Dose from demand/bench testing; excess can cause pink color.']],trouble:['Poor clarification: repeat jar test and check pH, alkalinity, mixer/flocculator and sludge removal.','Filter breakthrough/short runs: check carryover, media condition, backwash rate and mudballs.','Low disinfectant residual: check demand, chemical strength, dosing pump, mixing and contact time.']},
 WSP:{name:'Water Supply / Pumping System',process:'Source → Intake/Storage → Pumping → Distribution → Consumer/Process use',design:['Determine average/peak demand, static head, friction/minor losses and pressure requirements.','Check pump curve, efficiency, motor margin, NPSH available and duty/standby philosophy.','Provide suitable disinfection and storage turnover where potable/reuse water is distributed.'],operation:['Before start, verify suction availability, valve position, priming (if required), electrical supply and no leakage.','Start with the manufacturer/site valve sequence; observe suction/discharge pressure, flow, current, vibration and abnormal noise.','Rotate duty/standby pumps; inspect seals/bearings, NRV, strainers and pressure vessel/controls.','For chlorinated networks, monitor residual at representative points according to site standard.'],chemicals:[['Sodium hypochlorite','NaOCl','Distribution/storage disinfection where required','Dose according to water demand and required residual/contact time; verify residual.'],['Corrosion/scale inhibitor','Product-specific','Network conditioning in selected applications','Use only from water chemistry/material assessment and regulatory acceptance.']],trouble:['Low pressure/flow: check source level, clogged strainer, air ingress, closed valve, leaks and pump curve.','Cavitation: improve NPSH, reduce suction losses and check temperature/source level.','Motor trip: check overload, phase/voltage, dry run, bearing/pump seizure and protection settings.']},
 ZLD:{name:'Zero Liquid Discharge',process:'Pretreatment → UF/RO/NF recovery → Concentrate management → MEE/MVR evaporation → Crystallizer/ATFD → Salt/solid handling → Condensate polishing/reuse',design:['Develop complete water, ion and salt mass balance with variability cases.','Control hardness, silica, organics and suspended solids before high-recovery membranes/evaporation.','Thermal system and crystallizer require vendor design from boiling-point elevation, solubility, scaling and material-of-construction data.'],operation:['Maintain feed/permeate/concentrate/condensate/solid mass balance each shift/day.','RO section: trend normalized performance and scaling indices; manage staged recovery conservatively.','Evaporator: monitor steam/energy, vacuum, temperatures, circulation, density/TDS and heat-transfer performance; prevent dry-out.','Crystallizer/ATFD: maintain designed solids/slurry concentration, purge and product handling; inspect deposits.','Clean membranes/heat exchangers only with chemistry compatible with foulant and materials.'],chemicals:[['Antiscalant','Proprietary phosphonate/polymer blend','Membrane/evaporator scale control where approved','Select from detailed ionic chemistry and vendor model; no universal dose.'],['Acid','HCl/H₂SO₄ or process-specific acid','pH/alkalinity control / cleaning','Selection depends on scaling chemistry and metallurgy.'],['Caustic soda','NaOH','pH adjustment / cleaning','Use process/vendor limits.'],['Soda ash','Na₂CO₃','Softening/precipitation in selected pretreatment','Dose from hardness/stoichiometry plus test optimization.'],['Lime','Ca(OH)₂','Softening/precipitation','Control pH and sludge settling; confirm silica/Mg interactions.'],['RO/CIP cleaners','Product-specific acid/alkaline/chelating blends','Foulant removal','Use based on foulant analysis and equipment limits.']],trouble:['Rapid scaling: revisit saturation/mass balance, pH, recovery, inhibitor and seed/slurry management.','Low evaporator capacity: inspect vacuum, steam, circulation and heat-transfer fouling.','Poor condensate quality: inspect entrainment/demister, volatile organics and leaks.','Salt quality/handling issue: review crystallization conditions, mother-liquor purge and drying.']}
};
const modulesHi = {"STP":{"name":"सीवेज ट्रीटमेंट प्लांट","process":"स्क्रीनिंग → ग्रिट/ऑयल-ग्रीस हटाना → इक्वलाइजेशन → जैविक उपचार (MBBR/SBR/ASP/MBR) → सेकेंडरी सेपरेशन → टर्शियरी फिल्ट्रेशन → डिसइन्फेक्शन → रीयूज़/डिस्चार्ज → स्लज हैंडलिंग","design":["औसत/पीक फ्लो, BOD, COD, TSS, TKN/अमोनिया और आवश्यक आउटलेट क्वालिटी की पुष्टि करें।","हाइड्रोलिक और ऑर्गेनिक लोड के आधार पर इक्वलाइजेशन व बायोलॉजिकल स्टेज का साइज तय करें; ऑक्सीजन डिमांड और स्लज एज सत्यापित करें।","क्लैरिफायर/MBR लोडिंग, टर्शियरी फिल्टर, डिसइन्फेक्शन कॉन्टैक्ट और स्लज हैंडलिंग क्षमता सत्यापित करें।"],"operation":["स्टार्ट-अप: टैंक, स्क्रीन, पंप, ब्लोअर, वाल्व, इंस्ट्रूमेंट और केमिकल लेवल जांचें; बायोलॉजिकल टैंक धीरे-धीरे भरें और स्वस्थ बायोमास/सीड विकसित करें।","नॉर्मल: फ्लो को यथासंभव समान रखें; एरेशन/मिक्सिंग, सेटलिंग और रिटर्न/वेस्ट स्लज देखें। Activated sludge में DO सामान्यतः लगभग 1.5–3 mg/L नियंत्रित किया जाता है, पर वास्तविक प्लांट टारगेट सर्वोपरि है।","pH, DO, MLSS/MLVSS, SVI/स्लज ब्लैंकेट, BOD/COD/TSS, नाइट्रिफिकेशन होने पर अमोनिया, ट्रीटेड-वॉटर टर्बिडिटी और डिसइन्फेक्टेंट रेजिडुअल मॉनिटर करें।","शटडाउन: फीड नियंत्रित तरीके से रोकें, बायोमास बचाने के लिए आवश्यक मिक्सिंग/एरेशन जारी रखें, उपकरण सुरक्षित रूप से आइसोलेट करें और असामान्य स्थिति रिकॉर्ड करें।","रूटीन: स्क्रीन साफ करें, स्कम हटाएँ, टर्शियरी फिल्टर बैकवॉश करें, डिफ्यूजर/ब्लोअर जांचें, प्रोब कैलिब्रेट करें और स्लज डीवॉटरिंग प्रबंधित करें।"],"chemicals":[["सोडियम हाइपोक्लोराइट","NaOCl; कमर्शियल ब्लीच जलीय घोल होता है","डिसइन्फेक्शन / ऑक्सीडेशन","क्लोरीन डिमांड तथा आवश्यक रेजिडुअल/कॉन्टैक्ट टाइम के अनुसार डोज दें; आउटलेट रेजिडुअल सत्यापित करें।"],["एलम","Al₂(SO₄)₃·xH₂O","कोएगुलेशन / फॉस्फोरस या TSS पॉलिशिंग","डोज साइट-विशिष्ट है; जार टेस्ट और alkalinity/pH प्रतिक्रिया से तय करें।"],["फेरिक क्लोराइड","FeCl₃; कमर्शियल जलीय घोल","कोएगुलेशन / फॉस्फोरस रिमूवल","जार टेस्ट करें; pH/alkalinity और स्लज उत्पादन मॉनिटर करें।"],["PAC","पॉलीएल्यूमिनियम क्लोराइड; बेसिक एल्युमिनियम क्लोराइड पॉलिमर","कोएगुलेशन","प्रोडक्ट composition बदल सकता है; जार टेस्ट/vendor active content से डोज तय करें।"],["पॉलिमर","Anionic/cationic/nonionic polyelectrolyte","फ्लोक्युलेशन / स्लज डीवॉटरिंग","बहुत कम optimized dose उपयोग करें; make-down/aging supplier निर्देश अनुसार करें।"],["यूरिया / न्यूट्रिएंट N","CO(NH₂)₂","केवल कमी होने पर नाइट्रोजन न्यूट्रिएंट सप्लीमेंट","न्यूट्रिएंट बैलेंस के आधार पर ही उपयोग करें; अधिक डोज नाइट्रोजन लोड बढ़ाता है।"],["DAP / फॉस्फेट न्यूट्रिएंट","(NH₄)₂HPO₄","केवल कमी होने पर N/P सप्लीमेंट","BOD:N:P / न्यूट्रिएंट असेसमेंट के बाद ही उपयोग करें।"],["लाइम / कास्टिक","Ca(OH)₂ / NaOH","pH और alkalinity correction","मापे गए pH/alkalinity से नियंत्रित करें; अनियंत्रित डोजिंग से बचें।"]],"trouble":["दुर्गंध/सेप्टिसिटी: अधिक detention, dead zones, कम DO और स्लज जमाव जांचें।","आउटलेट TSS अधिक: क्लैरिफायर ब्लैंकेट, SVI/filamentous growth, hydraulic overload और sludge wasting जांचें।","BOD/अमोनिया रिमूवल खराब: DO, pH/alkalinity, तापमान, toxicity, nutrient balance और biomass age जांचें।","फोम: corrective action से पहले young sludge, surfactants या filamentous organisms की पहचान करें।"]},"CETP":{"name":"कॉमन एफ्लुएंट ट्रीटमेंट प्लांट","process":"सदस्य उद्योगों से कलेक्शन व सेग्रीगेशन → स्क्रीनिंग → इक्वलाइजेशन व होमोजेनाइजेशन → pH करेक्शन → कोएगुलेशन/फ्लोक्युलेशन → प्राइमरी क्लैरिफिकेशन/आवश्यकतानुसार DAF → बायोलॉजिकल ट्रीटमेंट → सेकेंडरी क्लैरिफिकेशन/MBR → टर्शियरी/एडवांस्ड ट्रीटमेंट → डिसइन्फेक्शन/रीयूज़/डिस्चार्ज → स्लज थिकनिंग व डीवॉटरिंग","design":["कम्बाइंड तथा सदस्य-वार फ्लो, pH, BOD, COD, TSS, ऑयल-ग्रीस, TDS, मेटल्स, न्यूट्रिएंट और toxic/inhibitory compounds की जाँच करें तथा incoming effluent acceptance limits तय करें।","बदलते industrial load के लिए पर्याप्त equalization और mixing रखें; जरूरत पर incompatible, high-TDS, solvent, oil या toxic streams अलग रखें।","Neutralization, coagulation, precipitation और biological treatability को bench/jar/pilot test से validate करें; peak load के लिए clarification, aeration, tertiary और sludge handling size करें।"],"operation":["स्टार्ट-अप: full load लेने से पहले inlet screening, equalization mixing, pH instruments, chemical preparation/dosing, clarifier/DAF, aeration, sludge return/wasting और tertiary units जांचें।","इनलेट कंट्रोल: effluent का source और quantity रिकॉर्ड करें तथा CETP acceptance criteria के अनुसार जाँचें; abnormal/toxic load को biology में सीधे न भेजें।","नॉर्मल: equalization homogenize करें; pH धीरे adjust करें; jar test से coagulation/flocculation optimize करें; sludge withdrawal और biological loading, DO व biomass स्थिर रखें।","मॉनिटरिंग: flow, pH, COD/BOD, TSS, oil & grease, TDS/conductivity, जरूरत पर ammonia/nutrients, DO/MLSS/SVI, clarifier blanket, tertiary turbidity, chemical consumption और sludge generation रिकॉर्ड करें।","शटडाउन/अपसेट: problematic feed रोकें या divert करें; biomass बचाने के लिए आवश्यक mixing/aeration रखें; equipment safely isolate करें और घटना रिकॉर्ड करें।","रूटीन: screens साफ करें, mixers/pumps/blowers inspect करें, pH/DO/flow instruments calibrate करें, filters backwash करें, sludge dewatering तथा member-industry load records maintain करें।"],"chemicals":[["सल्फ्यूरिक/हाइड्रोक्लोरिक एसिड","H₂SO₄ / HCl","pH कम करना / neutralization","Measured pH control में dose करें; process/material compatibility और SDS/site dilution procedure follow करें।"],["कास्टिक सोडा","NaOH","pH बढ़ाना / neutralization","pH control में dose करें; dilution/dissolution exothermic है।"],["हाइड्रेटेड लाइम","Ca(OH)₂","pH बढ़ाना / metal precipitation","Agitated slurry बनाएं; stoichiometry + jar test से optimize करें और sludge monitor करें।"],["फेरिक क्लोराइड","FeCl₃","Coagulation / phosphate या metal precipitation","Jar test करें; acidity, chloride और sludge generation ध्यान में रखें।"],["एलम","Al₂(SO₄)₃·xH₂O","Coagulation","Mixed effluent के expected pH/alkalinity range में jar test करें।"],["PAC","Polyaluminium chloride","Coagulation","Active content/basicity supplier के अनुसार बदलती है; jar test/vendor specification से dose तय करें।"],["पॉलिमर","Anionic/cationic/nonionic polyelectrolyte","Floc aid / sludge dewatering","Ionic type और dose trials से चुनें; overdosing से बचें।"],["यूरिया / DAP न्यूट्रिएंट","CO(NH₂)₂ / (NH₄)₂HPO₄","केवल कमी होने पर biological nutrient supplementation","Measured nutrient balance से ही add करें; अनावश्यक N/P loading से बचें।"],["सोडियम हाइपोक्लोराइट","NaOCl","Disinfection / designed oxidation","Demand और residual/contact time से dose करें; biological stage को oxidant carryover से बचाएँ।"],["सोडियम मेटाबाइसल्फाइट","Na₂S₂O₅","जहाँ लागू हो dechlorination/reducing duty","Measured oxidant residual से dose तय करें और endpoint verify करें।"]],"trouble":["अचानक biological upset: member-industry discharge, toxicity, pH, salinity/TDS, solvent/metal load, DO और equalization जांचें; abnormal feed को संभव हो तो divert करें।","Poor floc/settling: jar test दोहराएँ; pH, chemical strength, dosing sequence, rapid mix/flocculation और clarifier loading जांचें।","Outlet COD अधिक: soluble refractory COD को suspended/biodegradable COD से अलग पहचानें; shock load, biomass health और advanced treatment की जरूरत review करें।","TSS/sludge carryover: sludge blanket, SVI, RAS/WAS, hydraulic overload, DAF/clarifier operation और polymer use जांचें।","Sludge अधिक या dewatering खराब: coagulant/polymer dose optimize करें, solids characteristics, thickening और filter press/centrifuge operation जांचें।"]},"ETP":{"name":"एफ्लुएंट ट्रीटमेंट प्लांट","process":"कलेक्शन/स्क्रीनिंग → इक्वलाइजेशन → pH correction → कोएगुलेशन/फ्लोक्युलेशन → प्राइमरी सेपरेशन → बायोलॉजिकल/एडवांस्ड ट्रीटमेंट → टर्शियरी ट्रीटमेंट → स्लज हैंडलिंग","design":["हर waste stream का flow, pH, COD/BOD, TSS, oil, metals, salts तथा toxic/inhibitory compounds characterize करें।","जहाँ लाभकारी हो incompatible/high-strength streams अलग रखें और variable industrial discharge को equalize करें।","Neutralization/coagulation/precipitation को bench या jar test से validate करें और sludge disposal route confirm करें।"],"operation":["स्टार्ट-अप: effluent लेने से पहले chemical tanks, agitators, dosing pumps, pH instruments, equalization mixing और sludge system जांचें।","नॉर्मल: equalization को homogenize करें; pH धीरे-धीरे adjust करें; rapid mix के बाद उचित intensity पर flocculation चलाएँ; clarifier sludge withdrawal बनाए रखें।","Biological ETP में DO, biomass condition और shock/toxic load मॉनिटर करें; incompatible chemicals सीधे biomass में न भेजें।","Inlet/outlet pH, COD, TSS, flow, chemical consumption, sludge quantity और production/process change रिकॉर्ड करें।","शटडाउन: feed के साथ chemical dosing रोकें, compatible तरीके से dosing lines flush करें, settled sludge हटाएँ और equipment सुरक्षित isolate करें।"],"chemicals":[["सल्फ्यूरिक एसिड","H₂SO₄","pH कम करना / neutralization","pH control में डोज करें; dilution अत्यधिक exothermic है—SDS/site procedure पालन करें।"],["हाइड्रोक्लोरिक एसिड","HCl","pH कम करना / neutralization","pH control में डोज करें; compatible materials और ventilation रखें।"],["कास्टिक सोडा","NaOH","pH बढ़ाना / neutralization","pH control में डोज करें; dissolution exothermic होता है।"],["हाइड्रेटेड लाइम","Ca(OH)₂","pH बढ़ाना / precipitation","Agitation के साथ slurry बनाएं; settling/sludge effect verify करें।"],["फेरिक क्लोराइड","FeCl₃","Coagulation / metal या phosphate precipitation","जार टेस्ट करें और acidity/sludge को ध्यान में रखें।"],["एलम","Al₂(SO₄)₃·xH₂O","Coagulation","Expected pH range में jar test करें।"],["PAC","Polyaluminium chloride","Coagulation","Active content/basicity supplier के अनुसार बदलती है; jar test करें।"],["पॉलिमर","Polyelectrolyte","Floc aid / dewatering","Ionic type और dose trial से चुनें।"],["सोडियम मेटाबाइसल्फाइट","Na₂S₂O₅","लागू process में reducing/dechlorination agent","Oxidant residual और stoichiometry से margin सहित dose तय करें; endpoint verify करें।"]],"trouble":["Unstable pH: equalization, probe calibration, dosing response और chemical strength जांचें।","Poor floc/settling: jar test दोहराएँ; pH, mixing energy, coagulant/polymer sequence और overdosing जांचें।","COD breakthrough: source/loading shock, refractory COD, toxicity या biological upset पहचानें।","Excess sludge: chemical dose, solids load और dewatering operation review करें।"]},"CTP":{"name":"कूलिंग टावर वॉटर ट्रीटमेंट","process":"Make-up treatment → Circulation → Scale/corrosion inhibitor → Biocide program → Side-stream filtration → Blowdown","design":["Make-up chemistry और limiting species से cycles of concentration calculate करें।","Scaling indices, metallurgy, corrosion limits, microbiological risk और blowdown constraints review करें।","Actual water analysis और system materials के आधार पर specialist/vendor के साथ chemical program चुनें।"],"operation":["Basin level, circulation और blowdown conductivity control बनाए रखें; strainers/nozzles/fill inspect करें।","Conductivity, pH, hardness, alkalinity, chlorides/silica, inhibitor residual और microbiological indicators trend करें।","Biocide program को approved water-treatment plan के अनुसार ही alternate/rotate करें; required contact time बनाए रखें।","Basin और side-stream filter साफ करें; installed होने पर corrosion coupons/probes inspect करें।"],"chemicals":[["फॉस्फोनेट/पॉलिमर इनहिबिटर","Product-specific phosphonate + dispersant polymer blend","Scale control","Universal dose नहीं है; product active content और water-analysis program follow करें।"],["Corrosion inhibitor","अक्सर phosphate/molybdate/zinc या product-specific blend","Corrosion control","Program metallurgy और discharge restrictions पर निर्भर है।"],["सोडियम हाइपोक्लोराइट","NaOCl","Oxidizing biocide","Approved residual/contact-time program से control करें; excessive oxidant से बचें।"],["Bromine donor","Product-specific brominated oxidant","Oxidizing biocide","Supplier/SDS और site program के अनुसार ही उपयोग करें।"],["Non-oxidizing biocide","Product-specific, जैसे isothiazolin/glutaraldehyde types","Biofilm/microbial control","Chemistry और dose product-specific है; label/SDS और discharge rules follow करें।"],["सल्फ्यूरिक एसिड","H₂SO₄","Selected systems में alkalinity/pH control","Appropriate safeguards के साथ automated controlled dosing करें।"]],"trouble":["Scale: आवश्यकता अनुसार supersaturation/cycles कम करें; inhibitor feed और pH verify करें।","Corrosion: chemistry, inhibitor residual, oxidant exposure और metallurgy जांचें।","Biofouling: biocide delivery/contact, dead legs, nutrient ingress और cleanliness verify करें।"]},"RO":{"name":"रिवर्स ऑस्मोसिस","process":"Pretreatment → Cartridge filtration → जरूरत अनुसार dechlorination/antiscalant/pH adjustment → High-pressure pump → RO membranes → Permeate → CIP/Reject management","design":["Final design के लिए complete ionic feed analysis, temperature, SDI/turbidity और membrane projection software उपयोग करें।","Scaling saturation, recovery, flux, array staging, pressure drop और concentrate limits जांचें।","Pretreatment membrane को particles, oxidants, hardness/scale, iron/manganese और biofouling से protect करे।"],"operation":["स्टार्ट-अप: pretreatment quality, cartridge condition, valves/instruments confirm करें; membrane/system procedure अनुसार low pressure पर flush करके pressure धीरे-धीरे बढ़ाएँ।","नॉर्मल: feed/concentrate/permeate flow, pressures, pressure drop, conductivity/TDS, temperature और recovery रिकॉर्ड करें; normalized performance trend करें।","Free chlorine/oxidant को selected membrane manufacturer limit के भीतर रखें; जरूरत पर dechlorination verify करें।","CIP: membrane supplier के normalized permeate-flow decline, salt passage या pressure-drop criteria के अनुसार शुरू करें; compatible cleaner, concentration, pH और temperature रखें।","शटडाउन: specified तरीके से concentrate flush/displace करें; extended shutdown में manufacturer-approved preservation procedure अपनाएँ।"],"chemicals":[["Antiscalant","Proprietary phosphonate/polymer blend; composition बदलता है","Scale inhibition","Feed analysis और membrane projection/vendor software से dose तय करें; generic fixed dose से बचें।"],["सोडियम मेटाबाइसल्फाइट","Na₂S₂O₅","Dechlorination / reducing agent","Measured oxidant residual से dose तय करें; sensitive polyamide RO से पहले free chlorine न होना verify करें।"],["सल्फ्यूरिक/हाइड्रोक्लोरिक एसिड","H₂SO₄ / HCl","जहाँ design हो वहाँ feed pH/alkalinity adjustment","Projection और pH से control करें; H₂SO₄ में sulfate scaling पर विचार करें।"],["कास्टिक सोडा","NaOH","pH adjustment / second-pass RO applications","केवल process design की आवश्यकता पर उपयोग करें।"],["Alkaline CIP cleaner","अक्सर NaOH-based with surfactant/chelants; product-specific","Organic/biofouling cleaning","Membrane और cleaner supplier की pH/temperature limits follow करें।"],["Acid CIP cleaner","Citric acid या HCl/product-specific acid cleaner","Mineral scale/metal fouling cleaning","पहले foulant पहचानें; membrane limits और compatibility follow करें।"],["Biocide/preservative","Membrane-compatible product; preservation में अक्सर SMBS","Storage/bio-control जहाँ लागू हो","केवल membrane-approved chemistry और concentration उपयोग करें।"]],"trouble":["High permeate conductivity: O-rings/interconnectors, membrane damage, feed conductivity, pressure और calibration जांचें।","High differential pressure: particulate/biofouling/scale की आशंका; pretreatment inspect करें और उचित cleaning करें।","Low normalized flow: fouling, scaling, temperature correction, pressure और recovery review करें।","Frequent cartridge plugging: upstream turbidity/SDI, coagulant carryover या biological growth जांचें।"]},"WTP":{"name":"वॉटर ट्रीटमेंट प्लांट","process":"Raw water → जरूरत अनुसार aeration/oxidation → Coagulation → Flocculation → Clarification → Filtration → Disinfection → Storage","design":["Process को raw-water turbidity, color, organics, alkalinity, hardness, iron/manganese और microbiology पर आधारित करें।","Jar testing से coagulant/pH establish करें; clarifier और filter hydraulic loading/backwash verify करें।","Disinfectant CT/residual और local drinking/reuse standard requirements confirm करें।"],"operation":["स्टार्ट-अप: intake, mixers, dosing systems, clarifier, filters और disinfectant system inspect करें; chemicals सही तरीके से prepare करें।","नॉर्मल: raw water बदलने पर jar tests से coagulation optimize करें; floc blanket/clarifier sludge removal maintain करें।","Filter: headloss और filtrate turbidity monitor करें; validated trigger पर backwash करें और acceptable rinse/quality के बाद ही service में लें।","Disinfection: validated dose, contact और residual बनाए रखें; treated-water quality record करें।"],"chemicals":[["एलम","Al₂(SO₄)₃·xH₂O","Coagulant","Jar-test; alkalinity consume करता है और pH कम कर सकता है।"],["PAC","Polyaluminium chloride","Coagulant","Composition/basicity बदलती है; jar-test करें।"],["फेरिक क्लोराइड","FeCl₃","Coagulant / iron-based precipitation","Jar-test; commercial solution corrosive और acidic है।"],["पॉलिमर","Polyelectrolyte","Coagulant aid/floc aid","Jar test से select और dose करें; overdosing से बचें।"],["लाइम","Ca(OH)₂","pH/alkalinity adjustment; design होने पर softening","Process targets और settling performance से control करें।"],["सोडियम हाइपोक्लोराइट","NaOCl","Disinfection/oxidation","Demand और target residual/contact time से dose तय करें; residual verify करें।"],["पोटैशियम परमैंगनेट","KMnO₄","लागू plants में Fe/Mn/taste-odor oxidation","Demand/bench testing से dose करें; excess से pink color हो सकता है।"]],"trouble":["Poor clarification: jar test दोहराएँ और pH, alkalinity, mixer/flocculator तथा sludge removal जांचें।","Filter breakthrough/short runs: carryover, media condition, backwash rate और mudballs जांचें।","Low disinfectant residual: demand, chemical strength, dosing pump, mixing और contact time जांचें।"]},"WSP":{"name":"वॉटर सप्लाई / पम्पिंग सिस्टम","process":"Source → Intake/Storage → Pumping → Distribution → Consumer/Process use","design":["Average/peak demand, static head, friction/minor losses और pressure requirements निर्धारित करें।","Pump curve, efficiency, motor margin, available NPSH और duty/standby philosophy जांचें।","Potable/reuse water distribution में suitable disinfection और storage turnover सुनिश्चित करें।"],"operation":["Start से पहले suction availability, valve position, priming (यदि आवश्यक), electrical supply और leakage न होना verify करें।","Manufacturer/site valve sequence से start करें; suction/discharge pressure, flow, current, vibration और abnormal noise देखें।","Duty/standby pumps rotate करें; seals/bearings, NRV, strainers और pressure vessel/controls inspect करें।","Chlorinated networks में site standard के अनुसार representative points पर residual monitor करें।"],"chemicals":[["सोडियम हाइपोक्लोराइट","NaOCl","जहाँ आवश्यक हो distribution/storage disinfection","Water demand तथा required residual/contact time के अनुसार dose करें; residual verify करें।"],["Corrosion/scale inhibitor","Product-specific","Selected applications में network conditioning","Water chemistry/material assessment और regulatory acceptance के आधार पर ही उपयोग करें।"]],"trouble":["Low pressure/flow: source level, clogged strainer, air ingress, closed valve, leaks और pump curve जांचें।","Cavitation: NPSH improve करें, suction losses कम करें और temperature/source level जांचें।","Motor trip: overload, phase/voltage, dry run, bearing/pump seizure और protection settings जांचें।"]},"ZLD":{"name":"ज़ीरो लिक्विड डिस्चार्ज","process":"Pretreatment → UF/RO/NF recovery → Concentrate management → MEE/MVR evaporation → Crystallizer/ATFD → Salt/solid handling → Condensate polishing/reuse","design":["Variability cases सहित complete water, ion और salt mass balance विकसित करें।","High-recovery membranes/evaporation से पहले hardness, silica, organics और suspended solids control करें।","Thermal system और crystallizer के लिए boiling-point elevation, solubility, scaling और material-of-construction data पर vendor design आवश्यक है।"],"operation":["हर shift/day feed/permeate/concentrate/condensate/solid mass balance बनाए रखें।","RO section: normalized performance और scaling indices trend करें; staged recovery conservative तरीके से manage करें।","Evaporator: steam/energy, vacuum, temperatures, circulation, density/TDS और heat-transfer performance monitor करें; dry-out रोकें।","Crystallizer/ATFD: designed solids/slurry concentration, purge और product handling maintain करें; deposits inspect करें।","Membranes/heat exchangers को केवल foulant और materials के compatible chemistry से clean करें।"],"chemicals":[["Antiscalant","Proprietary phosphonate/polymer blend","जहाँ approved हो membrane/evaporator scale control","Detailed ionic chemistry और vendor model से select करें; universal dose नहीं है।"],["Acid","HCl/H₂SO₄ या process-specific acid","pH/alkalinity control / cleaning","Selection scaling chemistry और metallurgy पर निर्भर है।"],["कास्टिक सोडा","NaOH","pH adjustment / cleaning","Process/vendor limits के अनुसार उपयोग करें।"],["Soda ash","Na₂CO₃","Selected pretreatment में softening/precipitation","Hardness/stoichiometry plus test optimization से dose करें।"],["लाइम","Ca(OH)₂","Softening/precipitation","pH और sludge settling control करें; silica/Mg interactions confirm करें।"],["RO/CIP cleaners","Product-specific acid/alkaline/chelating blends","Foulant removal","Foulant analysis और equipment limits के आधार पर उपयोग करें।"]],"trouble":["Rapid scaling: saturation/mass balance, pH, recovery, inhibitor और seed/slurry management दोबारा देखें।","Low evaporator capacity: vacuum, steam, circulation और heat-transfer fouling inspect करें।","Poor condensate quality: entrainment/demister, volatile organics और leaks inspect करें।","Salt quality/handling issue: crystallization conditions, mother-liquor purge और drying review करें।"]}};


const i18n={
 en:{subtitle:'Design • Process • O&M • Troubleshooting • Calculators',heroTitle:'Smart field companion for water treatment professionals',heroText:'Plant design aids, operating logs, water analysis and practical troubleshooting in one mobile app.',plants:'Plants',calculators:'Calculators',analysis:'Water Analysis',logs:'Daily Log',plantModules:'Plant Modules',engineeringCalculators:'Engineering Calculators'},
 hi:{subtitle:'डिज़ाइन • प्रोसेस • O&M • ट्रबलशूटिंग • कैलकुलेटर',heroTitle:'वॉटर ट्रीटमेंट प्रोफेशनल्स के लिए स्मार्ट फील्ड साथी',heroText:'प्लांट डिज़ाइन सहायता, ऑपरेशन लॉग, वाटर एनालिसिस और ट्रबलशूटिंग एक ही मोबाइल ऐप में।',plants:'प्लांट',calculators:'कैलकुलेटर',analysis:'वाटर एनालिसिस',logs:'डेली लॉग',plantModules:'प्लांट मॉड्यूल',engineeringCalculators:'इंजीनियरिंग कैलकुलेटर'}
};

const cetpExtra = {
  purpose: `Treat combined industrial effluent from multiple member units with inlet control, equalization, physico-chemical, biological, tertiary and sludge treatment. / अनेक सदस्य उद्योगों से आने वाले मिश्रित अपशिष्ट जल का इनलेट कंट्रोल, इक्वलाइजेशन, फिजिको-केमिकल, बायोलॉजिकल, टर्शियरी और स्लज ट्रीटमेंट द्वारा उपचार।`,
  drawing: `
    <div class="cetp-flow-diagram">
      <div class="flow-box">Industries / उद्योग</div><div class="flow-arrow">↓</div>
      <div class="flow-row"><span>Collection</span><b>→</b><span>Screen</span><b>→</b><span>Equalization</span><b>→</b><span>pH Tank</span></div>
      <div class="flow-arrow">↓</div>
      <div class="flow-row"><span>Flash Mixer</span><b>→</b><span>Flocculator</span><b>→</b><span>Primary Clarifier / DAF</span></div>
      <div class="flow-arrow">↓</div>
      <div class="flow-row"><span>Biological Reactor</span><b>→</b><span>Secondary Clarifier / MBR</span><b>→</b><span>PSF</span></div>
      <div class="flow-arrow">↓</div>
      <div class="flow-row"><span>ACF / Advanced Treatment</span><b>→</b><span>Disinfection</span><b>→</b><span>Reuse / Discharge</span></div>
      <div class="flow-arrow">↓</div>
      <div class="flow-row sludge"><span>Sludge Thickener</span><b>→</b><span>Conditioning</span><b>→</b><span>Filter Press / Centrifuge</span><b>→</b><span>Authorized Disposal</span></div>
    </div>
    <p class="muted"><b>Conceptual drawing / कॉन्सेप्चुअल ड्रॉइंग:</b> Final PFD/P&amp;ID, tank sizing, hydraulics and equipment selection must follow actual influent analysis and approved design. / अंतिम PFD/P&amp;ID, टैंक साइजिंग, हाइड्रोलिक्स और इक्विपमेंट चयन वास्तविक इनलेट विश्लेषण व स्वीकृत डिजाइन के अनुसार करें।</p>`,
  startup: [
    `Pre-check: Verify PPE, guards, emergency shower/eyewash, chemical labels/SDS, valves, pumps, mixers, blowers, instruments and sludge system. / PPE, गार्ड, इमरजेंसी शॉवर/आईवॉश, केमिकल लेबल/SDS, वाल्व, पंप, मिक्सर, ब्लोअर, इंस्ट्रूमेंट और स्लज सिस्टम जाँचें।`,
    `Inlet control: Record member/source and quantity; check abnormal colour, odour, pH and conductivity. Isolate/divert incompatible or toxic load. / सदस्य स्रोत व मात्रा रिकॉर्ड करें; असामान्य रंग, गंध, pH और कंडक्टिविटी जाँचें। विषाक्त/असंगत लोड को अलग करें।`,
    `Start equalization mixing/aeration and verify level control and transfer pumps. / इक्वलाइजेशन मिक्सिंग/एरेशन चालू करें और लेवल कंट्रोल व ट्रांसफर पंप जाँचें।`,
    `Calibrate pH meter; start acid/alkali dosing gradually under measured pH control. / pH मीटर कैलिब्रेट करें; मापे गए pH के आधार पर एसिड/अल्कली धीरे-धीरे डोज करें।`,
    `Run fresh jar test to set coagulant type, dose, pH and polymer requirement. / कोएगुलेंट प्रकार, डोज, pH और पॉलिमर के लिए ताजा जार टेस्ट करें।`,
    `Start flash mixer, flocculator and clarifier/DAF; verify sludge withdrawal. / फ्लैश मिक्सर, फ्लोक्युलेटर और क्लैरिफायर/DAF चालू करें; स्लज निकासी जाँचें।`,
    `Start biological stage with healthy biomass, aeration, DO, pH/alkalinity and nutrients verified; increase load gradually. / स्वस्थ बायोमास, एरेशन, DO, pH/अल्कलिनिटी और न्यूट्रिएंट जाँचकर बायोलॉजिकल स्टेज चालू करें; लोड धीरे बढ़ाएँ।`,
    `Start tertiary filters and disinfection only after upstream quality is stable. / अपस्ट्रीम क्वालिटी स्थिर होने पर ही टर्शियरी फिल्टर और डिसइन्फेक्शन चालू करें।`
  ],
  normal: [
    `Keep equalization mixing continuous and apply member-industry acceptance criteria. / इक्वलाइजेशन मिक्सिंग लगातार रखें और सदस्य उद्योगों के acceptance criteria लागू करें।`,
    `Trend pH, flow, COD/BOD, TSS, oil & grease, TDS/conductivity and toxic indicators as applicable. / pH, फ्लो, COD/BOD, TSS, ऑयल-ग्रीस, TDS/कंडक्टिविटी तथा आवश्यक toxic indicators ट्रेंड करें।`,
    `Do not use a fixed coagulant/polymer dose; repeat jar test when influent changes. / कोएगुलेंट/पॉलिमर का फिक्स्ड डोज न मानें; इनलेट बदलने पर जार टेस्ट दोहराएँ।`,
    `For biology, monitor DO, MLSS/MLVSS, SVI, sludge blanket, RAS/WAS, foaming and nutrient balance. / बायोलॉजी में DO, MLSS/MLVSS, SVI, स्लज ब्लैंकेट, RAS/WAS, फोमिंग और न्यूट्रिएंट बैलेंस मॉनिटर करें।`,
    `Backwash PSF/ACF by differential pressure, turbidity or validated run-time criteria. / PSF/ACF को DP, टर्बिडिटी या वैलिडेटेड रन-टाइम के अनुसार बैकवॉश करें।`,
    `Record shift-wise inlet/outlet quality, equipment status, power, chemical consumption and sludge quantity. / हर शिफ्ट में इनलेट/आउटलेट क्वालिटी, इक्विपमेंट स्थिति, पावर, केमिकल खपत और स्लज मात्रा रिकॉर्ड करें।`
  ],
  shutdown: [
    `Planned shutdown: Stop feed and associated chemical dosing; flush compatible dosing lines and avoid sludge stagnation. / प्लान्ड शटडाउन में फीड व संबंधित केमिकल डोजिंग रोकें; कम्पैटिबल डोजिंग लाइन फ्लश करें और स्लज स्टैगनेशन से बचें।`,
    `Toxic/extreme-pH shock: Divert or hold feed and protect biomass; do not pass abnormal load forward without assessment. / toxic या extreme-pH shock में फीड divert/hold करें और biomass सुरक्षित रखें।`,
    `Power failure: Prioritize critical mixing/aeration on backup supply; verify levels and valves before restart. / पावर फेल होने पर critical mixing/aeration को backup दें; restart से पहले level और valve जाँचें।`,
    `Chemical spill: Isolate area, follow SDS/site spill plan and never mix incompatible chemicals. / केमिकल स्पिल में area isolate करें, SDS/site spill plan follow करें और incompatible chemicals कभी न मिलाएँ।`
  ],
  checklist: `☐ Inlet source/flow ☐ pH ☐ EQ mixer ☐ Chemical stock/strength ☐ Jar test ☐ Clarifier/DAF ☐ DO/MLSS/SVI where applicable ☐ Sludge blanket ☐ Filter DP/turbidity ☐ Outlet quality ☐ Chemical consumption ☐ Sludge quantity ☐ Pumps/blowers noise/leak ☐ PPE/housekeeping`
};

let lang='both';
function applyLang(){localStorage.setItem('wtdLang','both');localStorage.setItem('wtdLanguage','both');document.documentElement.lang='en';const btn=document.getElementById('langBtn');if(btn){btn.textContent='English + हिंदी';btn.disabled=true;btn.title='All details shown in English and Hindi';}}
applyLang();


// V16.4 ALL PLANTS EXPANSION
Object.assign(modules, {
 UF:{name:'Ultrafiltration (UF) / अल्ट्राफिल्ट्रेशन',process:'Pretreatment / प्रीट्रीटमेंट → UF feed tank → UF membrane → Permeate / फिल्ट्रेट → Backwash/CEB → CIP waste handling',design:['Confirm feed turbidity, SDI, oil/grease, iron and organic fouling risk / Feed turbidity, SDI, oil-grease, iron और organic fouling risk जाँचें।','Select membrane flux, recovery, backwash interval and pretreatment from OEM projection / OEM projection से flux, recovery और backwash interval तय करें।','Provide integrity testing, DP/pressure and flow monitoring / Integrity test, DP/pressure और flow monitoring रखें।'],operation:['Start with clean feed, correct valve lineup and low-pressure wetting/flush / साफ feed और सही valve lineup से low-pressure flush करें।','Trend feed/permeate pressure, TMP/DP, flow and turbidity / TMP/DP, flow और turbidity trend करें।','Run backwash/air scour/CEB only as validated sequence / Backwash, air scour और CEB approved sequence से करें।','CIP when normalized permeability or TMP reaches OEM trigger / OEM trigger पर CIP करें।'],chemicals:[['Sodium hypochlorite / NaOCl','Oxidant/disinfectant for compatible UF membranes / compatible UF के लिए','CEB/CIP dose only within membrane OEM limits / OEM limit के भीतर।'],['Citric acid / साइट्रिक एसिड','Mineral/metal fouling cleaning / mineral cleaning','Use after foulant identification and OEM pH limits / Foulant पहचान के बाद।'],['Caustic cleaner / NaOH-based','Organic/biofouling cleaning / organic cleaning','Follow membrane compatibility, temperature and pH limits / OEM limits पालन करें।']],trouble:['High TMP: check pretreatment, backwash effectiveness, solids loading and fouling / High TMP में pretreatment, backwash और fouling जाँचें।','High permeate turbidity: perform integrity test and inspect membrane/seals / Integrity test और seals जाँचें।','Low flux: review temperature, fouling and feed pressure / Temperature, fouling और feed pressure देखें।']},
 NF:{name:'Nanofiltration (NF) / नैनोफिल्ट्रेशन',process:'Pretreatment → Cartridge filtration → Antiscalant/pH control → High-pressure NF → Permeate → Concentrate management',design:['Use complete ionic analysis and OEM projection / Complete ionic analysis और OEM projection उपयोग करें।','Check hardness/sulfate/silica scaling, recovery, flux and pressure drop / Scaling, recovery, flux और pressure drop जाँचें।','Confirm pretreatment SDI/turbidity and oxidant compatibility / Pretreatment quality और oxidant compatibility verify करें।'],operation:['Flush at low pressure before ramp-up / Low pressure flush के बाद pressure बढ़ाएँ।','Record feed/permeate/concentrate flows, pressures and conductivity / Flow, pressure और conductivity रिकॉर्ड करें।','Trend normalized permeability and salt passage / Normalized performance trend करें।','CIP only on OEM performance trigger / OEM trigger पर CIP करें।'],chemicals:[['Antiscalant / एंटीस्केलेंट','Scale inhibition / स्केल कंट्रोल','Select from ionic chemistry and vendor model; no universal dose / Vendor model से dose तय करें।'],['SMBS / एसएमबीएस','Dechlorination / डी-क्लोरीनेशन','Dose from measured oxidant residual / Measured residual से dose।'],['Acid/alkali / एसिड-क्षार','pH adjustment/CIP where designed','Use only to approved projection and OEM limits / Approved design के अनुसार।']],trouble:['Low permeate flow: check fouling, scaling, temperature and pressure / Fouling, scaling और pressure जाँचें।','High conductivity: inspect membrane/seals and operating recovery / Membrane, seals और recovery जाँचें।','High DP: inspect cartridge and membrane fouling / Cartridge और membrane fouling देखें।']},
 SOFT:{name:'Water Softener / वॉटर सॉफ्टनर',process:'Raw water → Pressure filter as required → Cation resin softener → Soft water tank → Regeneration with brine',design:['Confirm flow, hardness load, leakage target and regeneration frequency / Flow, hardness load और regeneration frequency तय करें।','Size resin from working exchange capacity and actual salt dose / Working resin capacity और salt dose से sizing करें।','Provide brine tank, injector/educter and rinse-to-drain arrangement / Brine tank और rinse व्यवस्था रखें।'],operation:['Check resin bed level, valves and brine availability / Resin, valves और brine जाँचें।','Monitor inlet/outlet hardness and pressure drop / Inlet-outlet hardness और DP monitor करें।','Regenerate on throughput/hardness breakthrough, not guesswork / Hardness breakthrough/throughput पर regeneration करें।','Complete slow rinse and fast rinse before service / Service से पहले rinse पूरा करें।'],chemicals:[['Sodium chloride / NaCl / नमक','Resin regeneration / resin regeneration','Dose per resin manufacturer capacity and desired salt efficiency / Resin OEM के अनुसार।'],['Resin cleaner / रेज़िन क्लीनर','Iron/organic fouling control where applicable','Use only compatible product and OEM procedure / Compatible cleaner ही उपयोग करें।']],trouble:['Hardness leakage: check resin exhaustion, brine strength, valve leakage and channeling / Resin, brine और valves जाँचें।','High DP: inspect suspended solids, resin fouling and distributor / Solids/fouling जाँचें।','Poor regeneration: verify injector suction, brine concentration and rinse sequence / Injector और brine जाँचें।']},
 DM:{name:'Demineralization (DM) Plant / डीएम प्लांट',process:'Pretreatment → Cation exchanger → Degasser (as required) → Anion exchanger → Mixed bed (optional) → DM water tank',design:['Base design on full cation/anion load, silica, CO₂ and treated conductivity target / Full ionic load और silica के आधार पर design करें।','Size resin beds by working capacity and regeneration chemical efficiency / Working capacity से resin sizing करें।','Provide acid/caustic storage, dilution, neutralization and safe regeneration system / Chemical storage और neutralization सुरक्षित रखें।'],operation:['Confirm inlet quality and regenerate exhausted units by validated sequence / Inlet quality verify कर approved regeneration sequence चलाएँ।','Monitor conductivity after cation/anion and silica where required / Conductivity और silica monitor करें।','Prevent cross-contamination of acid and caustic systems / Acid और caustic को अलग रखें।','Rinse until outlet quality meets release criteria / Quality मिलने तक rinse करें।'],chemicals:[['Hydrochloric/Sulfuric acid / HCl/H₂SO₄','Cation resin regeneration','Concentration and quantity per resin/OEM design / Resin/OEM design के अनुसार।'],['Caustic soda / NaOH','Anion resin regeneration','Use approved concentration, temperature and contact time / Approved limits में।'],['Sodium chloride / NaCl','Mixed/resin specialty regeneration where applicable','Only if specified by resin process / जहाँ design में हो।']],trouble:['High conductivity: identify cation/anion leakage, exhaustion or valve bypass / Resin leakage और bypass जाँचें।','High silica: inspect anion exhaustion/regeneration and temperature / Anion regeneration जाँचें।','Low capacity: review regenerant strength, distribution, fouling and resin age / Regenerant और resin condition देखें।']},
 EDI:{name:'Electrodeionization (EDI) / इलेक्ट्रोडियोनाइजेशन',process:'RO permeate → EDI feed conditioning → EDI stack → Product water → Reject/recycle',design:['EDI requires consistently low-hardness, low-CO₂ and low-conductivity RO permeate / EDI feed quality बहुत stable रखें।','Check feed conductivity, hardness, silica, CO₂, chlorine and temperature against OEM limits / OEM feed limits verify करें।','Provide conductivity/resistivity, pressure and current/voltage monitoring / Electrical और water-quality monitoring रखें।'],operation:['Start only with on-spec RO permeate / On-spec RO permeate पर ही start करें।','Maintain specified flow and pressure before energizing stack / Stack energize से पहले flow establish करें।','Trend product resistivity/conductivity, current, voltage and pressure drop / Performance trend करें।','Follow OEM sanitization/cleaning procedure only / OEM cleaning procedure ही अपनाएँ।'],chemicals:[['Acid/alkali cleaners / एसिड-क्षार क्लीनर','Stack cleaning where OEM permits','Use only EDI manufacturer-approved chemistry / Manufacturer-approved chemistry।']],trouble:['Low resistivity: check feed quality, CO₂, current and stack condition / Feed quality, CO₂ और current जाँचें।','High voltage/current abnormality: inspect scaling, flow imbalance and electrical connections / Scaling, flow और electrical connection देखें।','High DP: inspect fouling and feed pretreatment / Fouling और pretreatment जाँचें।']},
 MBBR:{name:'MBBR Biological Treatment / MBBR बायोलॉजिकल',process:'Screening → Equalization → MBBR aeration with media → Clarification → Tertiary treatment → Disinfection',design:['Confirm BOD/COD/TKN load, temperature and outlet requirement / Organic और nitrogen load confirm करें।','Size media volume from protected surface area and vendor loading / Media SSA और loading से design करें।','Provide adequate mixing/aeration and media retention screens / Aeration, mixing और media screens रखें।'],operation:['Maintain continuous mixing/aeration and prevent media stagnation / Media को stagnant न होने दें।','Monitor DO, pH, ammonia, BOD/COD trend and sludge carryover / DO, pH और quality trend करें।','Keep retention screens clean and inspect media loss / Screens साफ रखें।','Adjust wasting/clarifier operation to biological condition / Sludge operation biology के अनुसार करें।'],chemicals:[['Nutrient N/P / न्यूट्रिएंट','Biological nutrient correction where deficient','Dose only after influent analysis and process balance / Analysis के बाद।'],['Alkali / क्षार','Alkalinity/pH support for nitrification where required','Calculate from alkalinity demand and control pH / Demand के अनुसार।'],['Defoamer / डिफोमर','Foam control when approved','Use minimum compatible dose after root-cause check / Root cause के बाद।']],trouble:['Ammonia high: check DO, alkalinity, temperature, loading and biomass health / DO, alkalinity और loading जाँचें।','Media not moving: check aeration distribution, level and obstructions / Air distribution जाँचें।','Poor settling: inspect clarifier, filamentous growth and hydraulic shock / Clarifier और biology जाँचें।']},
 SBR:{name:'Sequencing Batch Reactor (SBR) / एसबीआर',process:'Screening/Equalization → Fill → React/Aerate → Settle → Decant → Idle/Waste sludge → Tertiary/Disinfection',design:['Set cycle times from flow, organic/nitrogen load and required treatment / Cycle time load के अनुसार तय करें।','Verify peak flow storage and decanter capacity / Peak flow और decanter capacity जाँचें।','Provide reliable aeration, level control and PLC interlocks / Aeration, level और PLC interlocks रखें।'],operation:['Run validated Fill-React-Settle-Decant sequence / Approved cycle sequence चलाएँ।','Monitor DO/ORP/pH, sludge settleability and decant clarity / DO/ORP/pH और settling देखें।','Prevent decanter from drawing settled sludge / Decanter से sludge carryover रोकें।','Waste sludge consistently to maintain target solids age / Target SRT के अनुसार wasting करें।'],chemicals:[['Alkali / क्षार','pH/alkalinity support when required','Dose from measured demand / Measured demand से।'],['Nutrient / न्यूट्रिएंट','N/P correction for deficient industrial feed','Dose from process balance / Process balance से।'],['Disinfectant / डिसइन्फेक्टेंट','Post-treatment disinfection','Dose to validated residual/contact target / Validated residual के अनुसार।']],trouble:['Poor settling: review SVI, filamentous growth, loading and DO / SVI, filamentous, loading और DO देखें।','Cloudy decant: check settle time, decanter depth and solids blanket / Settle time और decanter जाँचें।','Cycle overflow: review peak inflow, equalization and cycle timing / Peak inflow और cycle timing देखें।']},
 MBR:{name:'Membrane Bioreactor (MBR) / एमबीआर',process:'Screening → Equalization → Biological reactor → Membrane tank → Permeate → Disinfection/reuse → Sludge wasting',design:['Confirm biological loading, MLSS range, SRT and membrane flux / Loading, MLSS, SRT और flux confirm करें।','Provide fine screening and membrane aeration/scour per OEM / Fine screen और membrane scour रखें।','Check peak flux, relaxation/backwash and cleaning philosophy / Peak flux और cleaning design जाँचें।'],operation:['Protect membranes from rags/hair and maintain screen performance / Fine screen अच्छा रखें।','Trend TMP, permeability, flux, MLSS and membrane air / TMP, flux, MLSS trend करें।','Run relaxation/backwash/maintenance clean on validated schedule / Approved sequence से cleaning करें।','Control sludge age and avoid excessive MLSS/viscosity / MLSS और SRT control करें।'],chemicals:[['Sodium hypochlorite / NaOCl','Organic/bio clean for compatible membranes','OEM concentration/contact-time only / OEM limit के अनुसार।'],['Citric acid / साइट्रिक एसिड','Inorganic scale clean','Use based on foulant and OEM procedure / Foulant के आधार पर।']],trouble:['TMP rise: check fouling, air scour, MLSS and cleaning effectiveness / Fouling, air scour और MLSS जाँचें।','Permeate turbidity: membrane integrity/seal issue / Integrity और seals जाँचें।','Foaming: inspect biology, surfactants and aeration / Biology और surfactants देखें।']},
 ASP:{name:'Activated Sludge Process (ASP) / एक्टिवेटेड स्लज',process:'Screening → Equalization → Aeration tank → Secondary clarifier → RAS/WAS → Tertiary treatment → Disinfection',design:['Establish F/M, SRT, MLSS, oxygen demand and clarifier loading / F/M, SRT, MLSS और oxygen demand तय करें।','Size aeration and secondary clarification for peak and solids load / Peak और solids load से sizing करें।','Provide RAS/WAS control and sludge handling / RAS/WAS और sludge handling रखें।'],operation:['Monitor DO, MLSS/MLVSS, SVI, pH and nutrient balance / DO, MLSS, SVI और pH monitor करें।','Adjust RAS and wasting to keep stable sludge age and blanket / RAS/WAS adjust करें।','Inspect aeration pattern and blower performance / Aeration और blower देखें।','Prevent hydraulic/organic shock through equalization / Equalization से shock कम करें।'],chemicals:[['Nutrient N/P / न्यूट्रिएंट','Biological nutrient correction','Dose from BOD:N:P requirement and analysis / Analysis के अनुसार।'],['Alkali / क्षार','pH/alkalinity correction','Dose from measured demand / Demand के अनुसार।'],['Polymer / पॉलिमर','Sludge dewatering aid','Jar/batch test and equipment optimization / Test के आधार पर।']],trouble:['Bulking: check SVI, DO, F/M, nutrients and filamentous organisms / SVI, DO, F/M और filamentous देखें।','Pin floc/turbid effluent: review SRT, loading and clarifier operation / SRT और clarifier देखें।','Low DO: verify oxygen demand, diffusers, blower and alpha factor / Blower/diffuser जाँचें।']},
 MEE:{name:'Multiple Effect Evaporator (MEE) / एमईई',process:'Pretreated concentrate → Feed preheat → Multiple evaporation effects → Condensate → Concentrate → ATFD/crystallizer',design:['Complete mass/energy balance and boiling-point elevation are mandatory / Mass-energy balance और BPE जरूरी हैं।','Select metallurgy from chloride, pH, temperature and corrosion risk / Chemistry से metallurgy चुनें।','Define scaling, foaming, cleaning and condensate-quality controls / Scaling/foaming और condensate controls तय करें।'],operation:['Monitor vacuum, steam pressure, temperature, feed/concentrate density and condensate quality / Vacuum, steam, temperature और density monitor करें।','Maintain circulation and minimum wetting; never allow dry heating / Dry heating न होने दें।','Track steam economy and heat-transfer decline / Steam economy और fouling trend करें।','Clean only by approved chemical/mechanical procedure / Approved cleaning procedure अपनाएँ।'],chemicals:[['Antiscalant / एंटीस्केलेंट','Scale control where validated','Select after liquor chemistry and vendor trials / Chemistry/vendor से।'],['Defoamer / डिफोमर','Foam control','Use minimum approved dose based on foam tendency / जरूरत के अनुसार।'],['Acid/alkali cleaner / क्लीनर','Heat-transfer surface cleaning','Use metallurgy-compatible approved procedure / Metallurgy compatible।']],trouble:['Capacity drop: check vacuum, steam, circulation and scaling / Vacuum, steam और scaling देखें।','Poor condensate: inspect entrainment, demister and volatile contamination / Demister और contamination देखें।','Foaming: check feed organics, concentration and antifoam control / Organics और concentration देखें।']},
 ATFD:{name:'Agitated Thin Film Dryer (ATFD) / एटीएफडी',process:'MEE concentrate → ATFD feed → Thin-film evaporation/drying → Salt/solid discharge → Vapour condensation',design:['Vendor design must consider solids, viscosity, crystallization and thermal sensitivity / Solids, viscosity और crystallization data जरूरी हैं।','Confirm heat-transfer area, rotor power, metallurgy and discharge handling / Area, rotor power, metallurgy और solids handling तय करें।','Integrate vapour/condensate and dust/solid handling safely / Vapour और solids handling सुरक्षित रखें।'],operation:['Maintain feed rate, jacket condition, rotor speed and discharge continuity within OEM limits / Feed, rotor और discharge OEM limit में रखें।','Avoid dry running/overheating and uncontrolled solids build-up / Dry run और overheating रोकें।','Trend motor load, temperature and product moisture / Motor load, temperature और moisture trend करें।','Clean only after safe isolation and OEM procedure / Isolation और OEM procedure से cleaning करें।'],chemicals:[['Cleaning chemical / क्लीनिंग केमिकल','Deposit removal where compatible','Select from deposit analysis and metallurgy / Deposit और metallurgy के अनुसार।']],trouble:['High motor load: check solids build-up, viscosity and rotor clearance / Deposit, viscosity और rotor clearance देखें।','Wet product: check feed rate, heat input, vacuum and residence / Feed, heat और vacuum देखें।','Poor discharge: inspect scraper/rotor and salt characteristics / Rotor और salt characteristics देखें।']},
 COOLING:{name:'Cooling Tower Water Treatment / कूलिंग टावर',process:'Make-up water → Cooling tower basin → Circulation → Heat exchanger/process → Return → Blowdown + chemical treatment',design:['Use make-up chemistry, cycles of concentration, metallurgy and heat load / Make-up chemistry, COC और metallurgy से design करें।','Evaluate scaling, corrosion and microbiological risks / Scale, corrosion और bio-risk assess करें।','Provide blowdown/conductivity control and chemical feed monitoring / Blowdown और conductivity control रखें।'],operation:['Monitor conductivity, pH, hardness/alkalinity, inhibitor residual and microbiology / Conductivity, pH और residual monitor करें।','Control cycles by validated blowdown target / Blowdown target maintain करें।','Inspect drift eliminators, basin cleanliness and side-stream filtration where fitted / Basin और filtration inspect करें।','Use oxidizing/non-oxidizing biocide program only per site specialist plan / Approved biocide program अपनाएँ।'],chemicals:[['Scale/corrosion inhibitor / inhibitor','Scale and corrosion control','Program-specific dose from water chemistry and cycles / Chemistry और COC से।'],['Oxidizing biocide / biocide','Microbiological control','Control by approved residual/contact strategy / Approved residual के अनुसार।'],['Non-oxidizing biocide','Bio-control rotation where approved','Specialist/site program only / Specialist plan के अनुसार।']],trouble:['Scaling: reduce supersaturation/cycles and verify inhibitor/pH / COC, inhibitor और pH देखें।','Corrosion: check inhibitor residual, chloride, pH and metallurgy / Residual, chloride और metallurgy देखें।','Biofouling: review biocide delivery, dead zones and cleanliness / Biocide और dead zones देखें।']},
 BOILER:{name:'Boiler Water Treatment / बॉयलर वॉटर',process:'Raw water pretreatment → Softener/DM/RO → Deaeration → Chemical conditioning → Boiler → Blowdown → Condensate return',design:['Treatment depends strongly on boiler pressure and OEM chemistry limits / Boiler pressure और OEM limits के अनुसार treatment तय करें।','Control hardness, silica, oxygen, alkalinity/conductivity and condensate quality / Hardness, silica, oxygen और condensate control करें।','Provide safe dosing and continuous/intermittent blowdown control / Dosing और blowdown control रखें।'],operation:['Monitor feedwater and boiler-water parameters at required frequency / Required parameters नियमित जाँचें।','Maintain blowdown to approved conductivity/chemistry target / Blowdown target maintain करें।','Inspect deaerator, condensate return and chemical pumps / Deaerator और dosing pumps जाँचें।','Never change boiler chemistry program without qualified water-treatment/OEM approval / Approval बिना program न बदलें।'],chemicals:[['Oxygen scavenger / ऑक्सीजन स्कैवेंजर','Dissolved oxygen control','Product selection/dose depends on boiler pressure and specialist program / Specialist program से।'],['Phosphate/alkalinity conditioner','Internal scale/pH control where specified','Only per boiler chemistry program / Approved program के अनुसार।'],['Condensate treatment / अमाइन','Condensate corrosion control where permitted','Use only approved specialist/OEM program / Approved program।']],trouble:['Scale tendency: check pretreatment leakage, hardness/silica and blowdown / Pretreatment और blowdown देखें।','Corrosion: inspect oxygen ingress, pH and condensate return / Oxygen, pH और condensate देखें।','Carryover: review TDS, level, steam load and antifoam/chemistry / TDS, level और load देखें।']},
 DESAL:{name:'Desalination / SWRO / समुद्री जल RO',process:'Intake → Screening → Coagulation/DAF or filtration → UF/media filtration → Cartridge → SWRO → Remineralization/disinfection → Brine management',design:['Characterize seawater TDS, temperature, boron, SDI and seasonal biology / Seawater chemistry और seasonal variation assess करें।','Use SWRO membrane projection with energy recovery and pressure design / Membrane projection और energy recovery design करें।','Engineer intake, pretreatment, corrosion-resistant materials and brine discharge / Intake, pretreatment, metallurgy और brine management करें।'],operation:['Maintain pretreatment SDI/turbidity and dechlorination as membrane requires / Pretreatment और dechlorination control करें।','Trend normalized permeate flow, salt passage, DP, recovery and energy / Normalized RO performance और energy trend करें।','Inspect energy recovery device and high-pressure equipment / ERD और HP equipment inspect करें।','CIP based on normalized OEM criteria and foulant analysis / OEM criteria और foulant analysis से CIP करें।'],chemicals:[['Antiscalant / एंटीस्केलेंट','SWRO scale control','Vendor model from seawater ion analysis / Ionic analysis से।'],['SMBS / एसएमबीएस','Dechlorination','Dose to verified oxidant residual / Residual के अनुसार।'],['Coagulant / कोएगुलेंट','Pretreatment where designed','Jar/pilot test and membrane compatibility / Jar/pilot test से।'],['Remineralization chemicals','Product-water stabilization','Dose to potable/process target and local standard / Applicable standard के अनुसार।']],trouble:['Rapid fouling: inspect intake biology, pretreatment SDI and coagulant control / Intake biology और SDI देखें।','High salt passage: check membrane integrity, pressure, temperature and seals / Membrane, pressure और seals देखें।','High energy: check fouling, pressure losses and ERD efficiency / Fouling, losses और ERD देखें।']}
});


// V16.5 COMPLETE PLANT FIELD CONTENT
const plantDrawings = {"STP": "drawings/stp.png", "CETP": "drawings/cetp.png", "ETP": "drawings/etp.png", "CTP": "drawings/ctp.png", "RO": "drawings/ro.png", "WTP": "drawings/wtp.png", "WSP": "drawings/wsp.png", "ZLD": "drawings/zld.png", "UF": "drawings/uf.png", "NF": "drawings/nf.png", "SOFT": "drawings/soft.png", "DM": "drawings/dm.png", "EDI": "drawings/edi.png", "MBBR": "drawings/mbbr.png", "SBR": "drawings/sbr.png", "MBR": "drawings/mbr.png", "ASP": "drawings/asp.png", "MEE": "drawings/mee.png", "ATFD": "drawings/atfd.png", "COOLING": "drawings/cooling.png", "BOILER": "drawings/boiler.png", "DESAL": "drawings/desal.png"};
const plantSOP = {"STP": ["Pre-start: inspect screens, tank levels, pumps, blowers, valves, instruments and chemical levels.", "Start equalization mixing and biological aeration before gradually admitting sewage.", "Maintain stable flow; record pH, DO, MLSS/SVI or process-specific biomass indicators and treated-water quality.", "Operate RAS/WAS, tertiary filters and disinfection only to approved plant targets.", "For shutdown/upset, stop or divert feed safely while protecting biomass with required mixing/aeration.", "Daily housekeeping: clean screens/scum, inspect diffusers and pumps, record sludge wasting and alarms."], "CETP": ["Verify source/vehicle/stream acceptance before unloading; isolate abnormal, toxic or incompatible effluent.", "Start equalization mixing, pH instruments, chemical preparation systems and sludge handling before full flow.", "Adjust pH progressively; optimize coagulant/polymer by jar test and keep dosing sequence correct.", "Maintain stable biological loading and monitor DO, MLSS/SVI, COD/BOD, TSS and conductivity/TDS as applicable.", "Backwash tertiary units and operate sludge thickening/dewatering to approved schedule.", "During upset, divert suspect feed, protect biomass and document source, readings and corrective action."], "ETP": ["Confirm equalization mixing, pH probe calibration and chemical dosing readiness.", "Admit effluent gradually and neutralize under measured pH control.", "Use jar-test optimized coagulation/flocculation; withdraw settled/float sludge routinely.", "Protect biological stage from toxic or oxidizing shocks; monitor DO, pH and organic load.", "Operate tertiary treatment and sludge dewatering to outlet and disposal requirements.", "On shutdown, stop feed and dosing in sequence, flush compatible lines and isolate equipment safely."], "CTP": ["Check basin level, circulation pumps, strainers, blowdown and make-up supply.", "Confirm conductivity controller and chemical dosing systems are calibrated and primed.", "Maintain approved cycles of concentration, inhibitor residual and microbiological control program.", "Inspect fill, nozzles, side-stream filters and heat exchanger approach temperatures.", "Bleed/blowdown only to approved control setpoint and discharge requirements.", "Record chemistry, make-up, blowdown, corrosion/microbiological indicators and chemical consumption."], "RO": ["Verify pretreatment quality, cartridge condition, valve lineup and no oxidant breakthrough to sensitive membranes.", "Start with low-pressure flush; ramp feed and high-pressure pump gradually to design operating range.", "Record feed/permeate/reject flows, pressures, differential pressure, conductivity, temperature and recovery.", "Maintain antiscalant/dechlorination/pH program from actual water chemistry and membrane projection.", "Trigger CIP only from normalized performance/OEM criteria and identified foulant.", "For shutdown, flush concentrate; use manufacturer-approved preservation for extended idle periods."], "WTP": ["Inspect intake, mixers, dosing systems, clarifier, filters and disinfection system.", "Prepare chemicals correctly and optimize coagulation using jar testing as raw water changes.", "Maintain flocculation and clarifier sludge withdrawal; monitor clarified-water turbidity.", "Backwash filters on validated headloss/turbidity/runtime trigger and rinse before return to service.", "Maintain approved disinfection dose/contact/residual and verify treated-water quality.", "Record raw/treated water quality, chemical use, filter runs, sludge removal and alarms."], "WSP": ["Verify source/storage level, pump suction, valve lineup, electrical supply and absence of major leaks.", "Start pumps per manufacturer/site sequence and confirm discharge pressure/flow.", "Monitor motor current, vibration, noise, pressure and storage levels during operation.", "Rotate duty/standby equipment and inspect strainers, NRVs, seals and pressure controls.", "Maintain disinfection/residual monitoring where applicable to potable/reuse networks.", "Isolate and depressurize affected sections before maintenance or leak repair."], "ZLD": ["Confirm feed chemistry, pretreatment quality, recovery targets and mass-balance instruments.", "Start membrane recovery stages within approved recovery/pressure limits.", "Bring evaporator/MEE/MVR online gradually; stabilize vacuum, circulation, temperature and density.", "Operate crystallizer/ATFD at designed solids concentration and manage purge/salt handling.", "Track feed, permeate, concentrate, condensate and solids mass balance each shift/day.", "Clean only with chemistry compatible with foulant and metallurgy; never allow thermal equipment to run dry."], "UF": ["Verify pretreatment, valve lineup, integrity status and backwash/CEB chemical availability.", "Start with low-pressure flush and establish design feed/permeate flow.", "Trend TMP/DP, permeability, flow and permeate turbidity.", "Run automatic backwash/air scour/CEB only in validated sequence.", "Perform integrity test after abnormal turbidity or suspected membrane damage.", "Carry out CIP only at OEM trigger and within membrane pH/temperature/oxidant limits."], "NF": ["Confirm cartridge filtration, dechlorination, antiscalant and feed chemistry before start.", "Low-pressure flush, then ramp pressure/recovery gradually.", "Record feed/permeate/concentrate flow, pressure, DP, conductivity and temperature.", "Control recovery and scaling risk to membrane projection.", "CIP only on normalized performance trigger with compatible cleaner.", "Flush concentrate on shutdown and preserve per membrane OEM for long idle periods."], "SOFT": ["Check resin bed, valve positions, brine tank level and injector/educter readiness.", "Place softener in service only after acceptable final rinse.", "Monitor inlet/outlet hardness, flow and pressure drop.", "Regenerate on calculated throughput or hardness breakthrough.", "Follow backwash → brine draw/slow rinse → fast rinse → service sequence.", "Investigate brine strength, channeling and valve leakage if hardness leakage persists."], "DM": ["Verify pretreatment quality, resin vessels, conductivity instruments and chemical systems.", "Operate cation → degasser (if provided) → anion → mixed bed in correct sequence.", "Trend intermediate/final conductivity and silica where required.", "Regenerate exhausted beds using the approved acid/caustic sequence with correct isolation.", "Rinse until release criteria are achieved before connecting to DM storage.", "Keep acid and caustic systems segregated; neutralize regeneration waste per site procedure."], "EDI": ["Confirm RO permeate meets EDI feed limits before start.", "Establish feed/reject/product flow and pressure before energizing the stack.", "Ramp electrical load per OEM and monitor voltage/current.", "Trend product resistivity/conductivity, pressure drop and reject flow.", "Respond to poor product quality by checking CO₂, hardness leakage, flow and stack condition.", "Use only manufacturer-approved cleaning/sanitization procedure."], "MBBR": ["Start screens/equalization, then aeration and mixing before feeding the bioreactor.", "Maintain media movement and prevent carrier loss through retention screens.", "Monitor DO, pH, ammonia, BOD/COD trend and clarifier performance.", "Adjust load and sludge wasting gradually; avoid toxic shock loads.", "Inspect diffusers, blowers and media retention screens routinely.", "During shutdown, preserve biofilm with appropriate aeration/mixing and avoid prolonged stagnation."], "SBR": ["Verify basin level, decanter, mixers/blowers, valves and cycle controls.", "Run the validated Fill → React → Settle → Decant → Idle/Waste sequence.", "Maintain DO and mixing during react according to treatment objective.", "Keep aeration/mixing off during settle unless process design states otherwise.", "Decant without disturbing settled sludge; waste sludge at defined point in cycle.", "Record cycle times, levels, DO, settleability and outlet quality; investigate cycle deviations."], "MBR": ["Verify screening, biological reactor, membrane air scour and permeate/backwash systems.", "Establish biological aeration/mixing, then start membrane filtration gradually.", "Trend TMP, permeability, flux, DO, MLSS and permeate turbidity.", "Run relaxation/backwash/CEB sequences as configured and inspect membrane air scour.", "CIP only at OEM trigger with approved chemistry.", "Protect membranes from dry-out, oxidant/pH excursions and debris; isolate safely for maintenance."], "ASP": ["Start equalization and aeration before gradually admitting wastewater.", "Maintain aeration tank DO and stable return activated sludge flow.", "Monitor MLSS/MLVSS, SVI, sludge blanket, pH and nutrient/organic loading.", "Adjust RAS/WAS based on settleability, sludge age and outlet quality.", "Keep clarifier weirs and sludge withdrawal systems clear.", "During upset, identify hydraulic/toxic/nutrient cause before major operational changes."], "MEE": ["Confirm pretreatment, feed tank level, circulation pumps, vacuum and condensate path.", "Start circulation first, then heat/steam gradually while establishing vacuum.", "Control feed rate, temperature profile, vacuum, density/TDS and circulation.", "Prevent dry running and excessive concentration beyond design limit.", "Inspect heat-transfer performance, entrainment/demister and condensate quality.", "Shutdown by stopping feed/heat in sequence, circulating/flush as required and isolating safely."], "ATFD": ["Confirm feed concentration, rotor/mechanical condition, heating medium and discharge path.", "Start rotor and auxiliary systems before gradually admitting concentrated feed.", "Maintain approved feed rate, wall film, heating temperature and solids loading.", "Monitor vibration, motor current, vapour/condensate quality and product dryness.", "Remove salt/solids safely and avoid buildup that can unbalance rotor.", "Shutdown feed first, complete controlled drying/flush sequence and isolate mechanical energy."], "COOLING": ["Check cooling tower basin, circulation, make-up, blowdown and chemical dosing readiness.", "Start circulation and confirm stable flow before heat load.", "Maintain approved conductivity/cycles, scale/corrosion inhibitor and biocide program.", "Inspect fill, nozzles, drift eliminators, basin cleanliness and side-stream filtration.", "Record temperatures, conductivity, pH, inhibitor/biocide indicators and blowdown.", "Clean and disinfect under site program when biological contamination is suspected."], "BOILER": ["Confirm pretreatment quality, deaerator condition, feedwater tank level and dosing systems.", "Establish feedwater flow and approved chemistry before normal steam load.", "Monitor feedwater/boiler water/condensate chemistry at required frequency.", "Control continuous/intermittent blowdown to boiler/OEM chemistry limits.", "Inspect condensate return for contamination, oxygen ingress and corrosion indicators.", "Never alter oxygen scavenger, phosphate/alkalinity or amine program without qualified approval."], "DESAL": ["Verify seawater intake, pretreatment, cartridge filters, dechlorination and SWRO feed quality.", "Start at low pressure and ramp SWRO pressure/recovery according to membrane projection.", "Trend normalized permeate flow, salt passage, DP, recovery, feed temperature and energy.", "Maintain pretreatment SDI/turbidity and biological control; inspect energy recovery device.", "Remineralize/disinfect product water to intended-use requirements.", "CIP only on OEM normalized criteria and foulant analysis; manage brine to approved discharge/recovery route."]};
const plantMaintenance = {"STP": ["Perform lockout/tagout and isolate hydraulic, electrical, pressure, chemical and thermal energy before maintenance.", "Inspect pumps, motors, valves, piping, supports, seals, bearings and abnormal vibration/leakage.", "Calibrate critical instruments (flow, pressure, pH, conductivity/TDS, DO/turbidity as applicable) to site schedule.", "Keep chemical tanks, bunds, labels, SDS, PPE and dosing lines in safe condition; never mix incompatible chemicals.", "Record preventive-maintenance action, replaced parts, calibration and return-to-service checks."], "CETP": ["Perform lockout/tagout and isolate hydraulic, electrical, pressure, chemical and thermal energy before maintenance.", "Inspect pumps, motors, valves, piping, supports, seals, bearings and abnormal vibration/leakage.", "Calibrate critical instruments (flow, pressure, pH, conductivity/TDS, DO/turbidity as applicable) to site schedule.", "Keep chemical tanks, bunds, labels, SDS, PPE and dosing lines in safe condition; never mix incompatible chemicals.", "Record preventive-maintenance action, replaced parts, calibration and return-to-service checks."], "ETP": ["Perform lockout/tagout and isolate hydraulic, electrical, pressure, chemical and thermal energy before maintenance.", "Inspect pumps, motors, valves, piping, supports, seals, bearings and abnormal vibration/leakage.", "Calibrate critical instruments (flow, pressure, pH, conductivity/TDS, DO/turbidity as applicable) to site schedule.", "Keep chemical tanks, bunds, labels, SDS, PPE and dosing lines in safe condition; never mix incompatible chemicals.", "Record preventive-maintenance action, replaced parts, calibration and return-to-service checks."], "CTP": ["Perform lockout/tagout and isolate hydraulic, electrical, pressure, chemical and thermal energy before maintenance.", "Inspect pumps, motors, valves, piping, supports, seals, bearings and abnormal vibration/leakage.", "Calibrate critical instruments (flow, pressure, pH, conductivity/TDS, DO/turbidity as applicable) to site schedule.", "Keep chemical tanks, bunds, labels, SDS, PPE and dosing lines in safe condition; never mix incompatible chemicals.", "Record preventive-maintenance action, replaced parts, calibration and return-to-service checks."], "RO": ["Perform lockout/tagout and isolate hydraulic, electrical, pressure, chemical and thermal energy before maintenance.", "Inspect pumps, motors, valves, piping, supports, seals, bearings and abnormal vibration/leakage.", "Calibrate critical instruments (flow, pressure, pH, conductivity/TDS, DO/turbidity as applicable) to site schedule.", "Keep chemical tanks, bunds, labels, SDS, PPE and dosing lines in safe condition; never mix incompatible chemicals.", "Record preventive-maintenance action, replaced parts, calibration and return-to-service checks."], "WTP": ["Perform lockout/tagout and isolate hydraulic, electrical, pressure, chemical and thermal energy before maintenance.", "Inspect pumps, motors, valves, piping, supports, seals, bearings and abnormal vibration/leakage.", "Calibrate critical instruments (flow, pressure, pH, conductivity/TDS, DO/turbidity as applicable) to site schedule.", "Keep chemical tanks, bunds, labels, SDS, PPE and dosing lines in safe condition; never mix incompatible chemicals.", "Record preventive-maintenance action, replaced parts, calibration and return-to-service checks."], "WSP": ["Perform lockout/tagout and isolate hydraulic, electrical, pressure, chemical and thermal energy before maintenance.", "Inspect pumps, motors, valves, piping, supports, seals, bearings and abnormal vibration/leakage.", "Calibrate critical instruments (flow, pressure, pH, conductivity/TDS, DO/turbidity as applicable) to site schedule.", "Keep chemical tanks, bunds, labels, SDS, PPE and dosing lines in safe condition; never mix incompatible chemicals.", "Record preventive-maintenance action, replaced parts, calibration and return-to-service checks."], "ZLD": ["Perform lockout/tagout and isolate hydraulic, electrical, pressure, chemical and thermal energy before maintenance.", "Inspect pumps, motors, valves, piping, supports, seals, bearings and abnormal vibration/leakage.", "Calibrate critical instruments (flow, pressure, pH, conductivity/TDS, DO/turbidity as applicable) to site schedule.", "Keep chemical tanks, bunds, labels, SDS, PPE and dosing lines in safe condition; never mix incompatible chemicals.", "Record preventive-maintenance action, replaced parts, calibration and return-to-service checks."], "UF": ["Perform lockout/tagout and isolate hydraulic, electrical, pressure, chemical and thermal energy before maintenance.", "Inspect pumps, motors, valves, piping, supports, seals, bearings and abnormal vibration/leakage.", "Calibrate critical instruments (flow, pressure, pH, conductivity/TDS, DO/turbidity as applicable) to site schedule.", "Keep chemical tanks, bunds, labels, SDS, PPE and dosing lines in safe condition; never mix incompatible chemicals.", "Record preventive-maintenance action, replaced parts, calibration and return-to-service checks."], "NF": ["Perform lockout/tagout and isolate hydraulic, electrical, pressure, chemical and thermal energy before maintenance.", "Inspect pumps, motors, valves, piping, supports, seals, bearings and abnormal vibration/leakage.", "Calibrate critical instruments (flow, pressure, pH, conductivity/TDS, DO/turbidity as applicable) to site schedule.", "Keep chemical tanks, bunds, labels, SDS, PPE and dosing lines in safe condition; never mix incompatible chemicals.", "Record preventive-maintenance action, replaced parts, calibration and return-to-service checks."], "SOFT": ["Perform lockout/tagout and isolate hydraulic, electrical, pressure, chemical and thermal energy before maintenance.", "Inspect pumps, motors, valves, piping, supports, seals, bearings and abnormal vibration/leakage.", "Calibrate critical instruments (flow, pressure, pH, conductivity/TDS, DO/turbidity as applicable) to site schedule.", "Keep chemical tanks, bunds, labels, SDS, PPE and dosing lines in safe condition; never mix incompatible chemicals.", "Record preventive-maintenance action, replaced parts, calibration and return-to-service checks."], "DM": ["Perform lockout/tagout and isolate hydraulic, electrical, pressure, chemical and thermal energy before maintenance.", "Inspect pumps, motors, valves, piping, supports, seals, bearings and abnormal vibration/leakage.", "Calibrate critical instruments (flow, pressure, pH, conductivity/TDS, DO/turbidity as applicable) to site schedule.", "Keep chemical tanks, bunds, labels, SDS, PPE and dosing lines in safe condition; never mix incompatible chemicals.", "Record preventive-maintenance action, replaced parts, calibration and return-to-service checks."], "EDI": ["Perform lockout/tagout and isolate hydraulic, electrical, pressure, chemical and thermal energy before maintenance.", "Inspect pumps, motors, valves, piping, supports, seals, bearings and abnormal vibration/leakage.", "Calibrate critical instruments (flow, pressure, pH, conductivity/TDS, DO/turbidity as applicable) to site schedule.", "Keep chemical tanks, bunds, labels, SDS, PPE and dosing lines in safe condition; never mix incompatible chemicals.", "Record preventive-maintenance action, replaced parts, calibration and return-to-service checks."], "MBBR": ["Perform lockout/tagout and isolate hydraulic, electrical, pressure, chemical and thermal energy before maintenance.", "Inspect pumps, motors, valves, piping, supports, seals, bearings and abnormal vibration/leakage.", "Calibrate critical instruments (flow, pressure, pH, conductivity/TDS, DO/turbidity as applicable) to site schedule.", "Keep chemical tanks, bunds, labels, SDS, PPE and dosing lines in safe condition; never mix incompatible chemicals.", "Record preventive-maintenance action, replaced parts, calibration and return-to-service checks."], "SBR": ["Perform lockout/tagout and isolate hydraulic, electrical, pressure, chemical and thermal energy before maintenance.", "Inspect pumps, motors, valves, piping, supports, seals, bearings and abnormal vibration/leakage.", "Calibrate critical instruments (flow, pressure, pH, conductivity/TDS, DO/turbidity as applicable) to site schedule.", "Keep chemical tanks, bunds, labels, SDS, PPE and dosing lines in safe condition; never mix incompatible chemicals.", "Record preventive-maintenance action, replaced parts, calibration and return-to-service checks."], "MBR": ["Perform lockout/tagout and isolate hydraulic, electrical, pressure, chemical and thermal energy before maintenance.", "Inspect pumps, motors, valves, piping, supports, seals, bearings and abnormal vibration/leakage.", "Calibrate critical instruments (flow, pressure, pH, conductivity/TDS, DO/turbidity as applicable) to site schedule.", "Keep chemical tanks, bunds, labels, SDS, PPE and dosing lines in safe condition; never mix incompatible chemicals.", "Record preventive-maintenance action, replaced parts, calibration and return-to-service checks."], "ASP": ["Perform lockout/tagout and isolate hydraulic, electrical, pressure, chemical and thermal energy before maintenance.", "Inspect pumps, motors, valves, piping, supports, seals, bearings and abnormal vibration/leakage.", "Calibrate critical instruments (flow, pressure, pH, conductivity/TDS, DO/turbidity as applicable) to site schedule.", "Keep chemical tanks, bunds, labels, SDS, PPE and dosing lines in safe condition; never mix incompatible chemicals.", "Record preventive-maintenance action, replaced parts, calibration and return-to-service checks."], "MEE": ["Perform lockout/tagout and isolate hydraulic, electrical, pressure, chemical and thermal energy before maintenance.", "Inspect pumps, motors, valves, piping, supports, seals, bearings and abnormal vibration/leakage.", "Calibrate critical instruments (flow, pressure, pH, conductivity/TDS, DO/turbidity as applicable) to site schedule.", "Keep chemical tanks, bunds, labels, SDS, PPE and dosing lines in safe condition; never mix incompatible chemicals.", "Record preventive-maintenance action, replaced parts, calibration and return-to-service checks."], "ATFD": ["Perform lockout/tagout and isolate hydraulic, electrical, pressure, chemical and thermal energy before maintenance.", "Inspect pumps, motors, valves, piping, supports, seals, bearings and abnormal vibration/leakage.", "Calibrate critical instruments (flow, pressure, pH, conductivity/TDS, DO/turbidity as applicable) to site schedule.", "Keep chemical tanks, bunds, labels, SDS, PPE and dosing lines in safe condition; never mix incompatible chemicals.", "Record preventive-maintenance action, replaced parts, calibration and return-to-service checks."], "COOLING": ["Perform lockout/tagout and isolate hydraulic, electrical, pressure, chemical and thermal energy before maintenance.", "Inspect pumps, motors, valves, piping, supports, seals, bearings and abnormal vibration/leakage.", "Calibrate critical instruments (flow, pressure, pH, conductivity/TDS, DO/turbidity as applicable) to site schedule.", "Keep chemical tanks, bunds, labels, SDS, PPE and dosing lines in safe condition; never mix incompatible chemicals.", "Record preventive-maintenance action, replaced parts, calibration and return-to-service checks."], "BOILER": ["Perform lockout/tagout and isolate hydraulic, electrical, pressure, chemical and thermal energy before maintenance.", "Inspect pumps, motors, valves, piping, supports, seals, bearings and abnormal vibration/leakage.", "Calibrate critical instruments (flow, pressure, pH, conductivity/TDS, DO/turbidity as applicable) to site schedule.", "Keep chemical tanks, bunds, labels, SDS, PPE and dosing lines in safe condition; never mix incompatible chemicals.", "Record preventive-maintenance action, replaced parts, calibration and return-to-service checks."], "DESAL": ["Perform lockout/tagout and isolate hydraulic, electrical, pressure, chemical and thermal energy before maintenance.", "Inspect pumps, motors, valves, piping, supports, seals, bearings and abnormal vibration/leakage.", "Calibrate critical instruments (flow, pressure, pH, conductivity/TDS, DO/turbidity as applicable) to site schedule.", "Keep chemical tanks, bunds, labels, SDS, PPE and dosing lines in safe condition; never mix incompatible chemicals.", "Record preventive-maintenance action, replaced parts, calibration and return-to-service checks."]};


const completePlantSizingProfiles = {
  STP:[['Screen Chamber',0.10,1.2,1.5],['Equalization Tank',6,3.5,1.5],['Aeration / Bioreactor',6,4.5,1.5],['Secondary Clarifier','SOR:18',3.0,1.0],['Filter Feed Tank',1,3.0,1.4],['Treated Water Tank',4,3.5,1.5],['Sludge Holding Tank',1.5,3.0,1.2]],
  ETP:[['Collection Tank',2,3.5,1.5],['Equalization Tank',8,4.0,1.5],['Neutralization Tank',0.75,3.0,1.2],['Flash Mixer',0.10,2.5,1.0],['Flocculation Tank',0.40,2.5,1.5],['Primary Clarifier','SOR:15',3.0,1.0],['Biological Tank',8,4.5,1.5],['Treated Water Tank',4,3.5,1.5],['Sludge Holding Tank',2,3.0,1.2]],
  CETP:[['Receiving / Collection Tank',2,4.0,1.5],['Equalization Tank',10,4.5,1.5],['Neutralization Tank',1,3.5,1.2],['Flash Mixer',0.10,2.5,1.0],['Flocculation Tank',0.50,3.0,1.5],['Primary Clarifier','SOR:12',3.5,1.0],['Biological Tank',10,4.5,1.5],['Secondary Clarifier','SOR:16',3.5,1.0],['Tertiary Feed Tank',1,3.0,1.4],['Treated Water Tank',4,3.5,1.5],['Sludge Holding Tank',2.5,3.0,1.2]],
  CTP:[['Raw Water Tank',4,3.5,1.5],['Clarifier Feed Tank',0.5,3.0,1.4],['Clarifier','SOR:20',3.0,1.0],['Filtered Water Tank',3,3.5,1.5]],
  WTP:[['Raw Water Tank',4,3.5,1.5],['Flash Mixer',0.08,2.5,1.0],['Flocculation Tank',0.5,3.0,1.5],['Clarifier','SOR:25',3.5,1.0],['Filter Feed / Backwash Tank',1.5,3.5,1.5],['Clear Water Tank',6,4.0,1.5]],
  WSP:[['Raw Water Storage',6,4.0,1.5],['Treated Water Storage',8,4.0,1.5]],
  RO:[['Raw Water Tank',3,3.5,1.5],['Pretreated Water Tank',2,3.0,1.5],['RO Feed Tank',1,3.0,1.4],['Permeate Tank',4,3.5,1.5],['Reject Tank',2,3.0,1.4],['CIP Tank',0.5,2.0,1.0]],
  UF:[['UF Feed Tank',1.5,3.0,1.5],['UF Product Tank',2,3.0,1.5],['Backwash Tank',0.5,2.5,1.2]],
  NF:[['NF Feed Tank',1,3.0,1.5],['NF Product Tank',2,3.0,1.5],['NF Reject Tank',1,2.5,1.2]],
  SOFT:[['Raw Water Tank',2,3.0,1.5],['Soft Water Tank',4,3.5,1.5],['Brine Tank',1,2.0,1.0]],
  DM:[['DM Feed Tank',2,3.0,1.5],['DM Water Tank',4,3.5,1.5],['Regeneration Waste Tank',1,2.5,1.2]],
  EDI:[['EDI Feed Tank',1,3.0,1.5],['Product Water Tank',3,3.0,1.5]],
  MBBR:[['Equalization Tank',5,3.5,1.5],['MBBR Tank',7,4.5,1.5],['Secondary Clarifier','SOR:16',3.0,1.0],['Treated Water Tank',4,3.5,1.5],['Sludge Holding Tank',1.5,3.0,1.2]],
  SBR:[['Equalization Tank',4,4.0,1.5],['SBR Basin',8,5.0,1.5],['Treated Water Tank',4,3.5,1.5],['Sludge Holding Tank',1.5,3.0,1.2]],
  MBR:[['Equalization Tank',4,4.0,1.5],['Bioreactor',6,4.5,1.5],['Membrane Tank',2,4.0,1.4],['Permeate Tank',4,3.5,1.5],['Sludge Holding Tank',1.5,3.0,1.2]],
  ASP:[['Equalization Tank',4,4.0,1.5],['Aeration Tank',7,4.5,1.5],['Secondary Clarifier','SOR:16',3.5,1.0],['Treated Water Tank',4,3.5,1.5],['Sludge Holding Tank',1.5,3.0,1.2]],
  ZLD:[['ZLD Feed / Equalization Tank',6,4.0,1.5],['RO Feed Tank',1,3.0,1.4],['RO Permeate Tank',2,3.0,1.5],['RO Reject / MEE Feed Tank',3,3.0,1.4],['MEE Condensate Tank',3,3.0,1.5],['MEE Concentrate Tank',2,2.5,1.2]],
  MEE:[['MEE Feed Tank',4,3.0,1.4],['Condensate Tank',3,3.0,1.5],['Concentrate Tank',2,2.5,1.2]],
  ATFD:[['ATFD Feed Tank',3,2.5,1.3],['Condensate Tank',2,2.5,1.3]],
  COOLING:[['Cooling Tower Basin',0.75,2.0,2.0],['Side Stream Filter Feed Tank',0.5,2.5,1.5]],
  BOILER:[['Raw / Make-up Water Tank',4,3.0,1.5],['Soft/RO/DM Water Tank',4,3.0,1.5],['Condensate / Feed Water Tank',1,2.5,1.5]],
  DESAL:[['Seawater Feed / Buffer Tank',1,3.5,1.5],['Pretreated Water Tank',1,3.5,1.5],['Product Water Tank',4,3.5,1.5],['CIP Tank',0.5,2.0,1.0]]
};

function multiTankSvg(key,idx,name,l,w,d,fb,v){
  const f=x=>Number.isFinite(x)?x.toFixed(2):'—';
  const id=`ma-${key}-${idx}`;
  return `<svg class="tank-auto-svg" viewBox="0 0 520 280" role="img" aria-label="${escapeHtml(name)} tank drawing">
    <defs><marker id="${id}" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 z" fill="currentColor"/></marker></defs>
    <text x="12" y="22" font-size="15" font-weight="700">PLAN / प्लान</text><rect x="30" y="38" width="210" height="105" fill="none" stroke="currentColor" stroke-width="2"/>
    <line x1="30" y1="158" x2="240" y2="158" stroke="currentColor" marker-start="url(#${id})" marker-end="url(#${id})"/><text x="85" y="178" font-size="13">L ${f(l)} m</text>
    <line x1="255" y1="38" x2="255" y2="143" stroke="currentColor" marker-start="url(#${id})" marker-end="url(#${id})"/><text x="262" y="95" font-size="13">W ${f(w)} m</text>
    <text x="300" y="22" font-size="15" font-weight="700">ELEVATION / एलिवेशन</text><rect x="315" y="38" width="160" height="140" fill="none" stroke="currentColor" stroke-width="2"/><line x1="315" y1="62" x2="475" y2="62" stroke="currentColor" stroke-dasharray="6 4"/>
    <text x="325" y="56" font-size="11">FB ${f(fb)} m</text><text x="330" y="198" font-size="13">SWD ${f(d)} m</text><text x="12" y="232" font-size="13">Volume ${f(v)} m³</text><text x="12" y="258" font-size="11">Conceptual preliminary sizing / प्रारंभिक डिजाइन</text></svg>`;
}

function calcCompletePlant(key){
  const q=pdNum(`pdQ-${key}`), peak=pdNum(`pdPeak-${key}`);
  const box=document.getElementById(`pdAuto-${key}`);
  if(!box) return;
  if(!(q>0&&peak>=1)){box.innerHTML='Enter valid average Flow and Peak Factor ≥ 1. / सही औसत फ्लो और Peak Factor ≥ 1 भरें।';return;}
  const profile=completePlantSizingProfiles[key]||[[`${key} Process Tank`,defaultTankHRT(key),defaultTankDepth(key),1.5]];
  const cards=[]; let total=0;
  profile.forEach((t,i)=>{
    const [name,basis,depth,ratio]=t;
    let designFlow=q, vol, area, basisText;
    if(typeof basis==='string' && basis.startsWith('SOR:')){
      const sor=parseFloat(basis.split(':')[1]); designFlow=q*peak; area=designFlow/sor; vol=area*depth; basisText=`SOR ${sor} m³/m²·day @ peak flow`;
    } else {
      const h=Number(basis); designFlow=(h<=1? q*peak:q); vol=designFlow*h/24; area=vol/depth; basisText=`HRT ${h} hr${h<=1?' @ peak flow':''}`;
    }
    total+=vol;
    const w=Math.sqrt(area/ratio), l=ratio*w, fb=Math.max(0.3,Math.min(0.6,depth*0.1));
    cards.push(`<div class="multi-tank-card"><h5>${i+1}. ${name}</h5><span class="basis-chip">${basisText}</span><span class="basis-chip">Design Q ${designFlow.toFixed(1)} m³/day</span><p><b>${vol.toFixed(2)} m³</b><br>${l.toFixed(2)} × ${w.toFixed(2)} × ${depth.toFixed(2)} m SWD<br>Freeboard ≈ ${fb.toFixed(2)} m</p>${multiTankSvg(key,i,name,l,w,depth,fb,vol)}</div>`);
  });
  const bodi=pdNum(`pdBodi-${key}`), bodo=pdNum(`pdBodo-${key}`), codi=pdNum(`pdCodi-${key}`), codo=pdNum(`pdCodo-${key}`), tssi=pdNum(`pdTssi-${key}`), tsso=pdNum(`pdTsso-${key}`);
  const pct=(a,b)=>Number.isFinite(a)&&Number.isFinite(b)&&a>0?((a-b)/a*100).toFixed(1)+'%':'—';
  box.innerHTML=`<div class="multi-summary"><b>${key} Complete Plant Automatic Sizing / कम्प्लीट प्लांट ऑटो साइजिंग</b><br>Average flow: <b>${q.toFixed(1)} m³/day</b> • Peak factor: <b>${peak.toFixed(2)}</b> • Peak flow: <b>${(q*peak).toFixed(1)} m³/day</b><br>Approx. total effective process/storage volume shown: <b>${total.toFixed(2)} m³</b><br>BOD removal target ${pct(bodi,bodo)} • COD ${pct(codi,codo)} • TSS ${pct(tssi,tsso)}</div><div class="multi-tank-grid">${cards.join('')}</div><div class="safety-note"><b>Engineering limitation / इंजीनियरिंग सीमा:</b> These sizes are preliminary reference values from generic HRT/SOR assumptions. Final design must use actual inlet characterization, hourly peak pattern, process kinetics, F/M/SRT/MLSS or membrane flux where applicable, recycle/return flows, sludge production, backwash/CIP volume, redundancy, hydraulic profile, equipment OEM data, applicable standards and structural design. Do not issue these sketches directly for construction.</div>`;
}

function defaultTankHRT(key){
  const v={STP:6,CETP:8,ETP:8,WTP:2,WSP:6,ZLD:8,UF:0.5,NF:0.5,RO:0.5,SOFT:0.5,DM:1,EDI:0.5,MBBR:6,SBR:8,MBR:6,ASP:6,MEE:4,ATFD:2,COOLING:1,BOILER:1,DESAL:1,CTP:1};
  return v[key]||4;
}
function defaultTankDepth(key){
  const v={STP:4.5,CETP:4.5,ETP:4.0,WTP:3.5,WSP:3.5,ZLD:4.0,MBBR:4.5,SBR:5.0,MBR:4.5,ASP:4.5,MEE:3.0,ATFD:2.5,COOLING:2.0,BOILER:2.5};
  return v[key]||3.0;
}
function pdNum(id){const e=document.getElementById(id);return e?parseFloat(e.value):NaN}
function calcPlantTank(key){
  const q=pdNum(`pdQ-${key}`), h=pdNum(`pdHrt-${key}`), d=pdNum(`pdD-${key}`), r=pdNum(`pdR-${key}`);
  const out=document.getElementById(`pdResult-${key}`);
  if(!out) return;
  if(!(q>0&&h>0&&d>0&&r>0)){out.innerHTML='Enter valid Flow, HRT, Water Depth and L:W Ratio. / सही Flow, HRT, Depth और L:W Ratio भरें।';return}
  const v=q*h/24;
  const area=v/d;
  const w=Math.sqrt(area/r), l=r*w;
  const fb=Math.max(0.3,Math.min(0.6,d*0.1));
  const wall=d+fb;
  const bodi=pdNum(`pdBodi-${key}`), bodo=pdNum(`pdBodo-${key}`), codi=pdNum(`pdCodi-${key}`), codo=pdNum(`pdCodo-${key}`), tssi=pdNum(`pdTssi-${key}`), tsso=pdNum(`pdTsso-${key}`);
  const load=(x)=>Number.isFinite(x)?q*x/1000:NaN;
  const rem=(i,o)=>Number.isFinite(i)&&Number.isFinite(o)&&i>0?Math.max(0,(i-o)/i*100):NaN;
  const f=(x,n=2)=>Number.isFinite(x)?x.toFixed(n):'—';
  const svg=`<svg class="tank-auto-svg" viewBox="0 0 760 390" role="img" aria-label="Dimensioned tank plan and elevation">
    <defs><marker id="arr-${key}" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="currentColor"/></marker></defs>
    <text x="20" y="28" font-size="18" font-weight="700">PLAN / प्लान</text>
    <rect x="60" y="55" width="300" height="150" rx="3" fill="none" stroke="currentColor" stroke-width="3"/>
    <line x1="60" y1="225" x2="360" y2="225" stroke="currentColor" marker-start="url(#arr-${key})" marker-end="url(#arr-${key})"/>
    <text x="190" y="248" font-size="16">L = ${f(l)} m</text>
    <line x1="385" y1="55" x2="385" y2="205" stroke="currentColor" marker-start="url(#arr-${key})" marker-end="url(#arr-${key})"/>
    <text x="400" y="135" font-size="16">W = ${f(w)} m</text>
    <text x="430" y="28" font-size="18" font-weight="700">ELEVATION / एलिवेशन</text>
    <rect x="455" y="55" width="240" height="200" rx="3" fill="none" stroke="currentColor" stroke-width="3"/>
    <line x1="455" y1="90" x2="695" y2="90" stroke="currentColor" stroke-dasharray="8 5"/>
    <text x="468" y="82" font-size="13">Freeboard ${f(fb)} m</text>
    <line x1="720" y1="90" x2="720" y2="255" stroke="currentColor" marker-start="url(#arr-${key})" marker-end="url(#arr-${key})"/>
    <text x="615" y="280" font-size="16">SWD = ${f(d)} m</text>
    <text x="465" y="315" font-size="15">Wall depth ≈ ${f(wall)} m</text>
    <text x="20" y="350" font-size="15">Effective Volume = ${f(v)} m³   |   Area = ${f(area)} m²   |   HRT = ${f(h)} hr</text>
    <text x="20" y="377" font-size="12">Conceptual sizing sketch — structural thickness, reinforcement, foundation, piping and hydraulic levels require project-specific engineering.</text>
  </svg>`;
  out.innerHTML=`<div class="pd-summary"><b>${key} Preliminary Tank / प्रारंभिक टैंक</b><br>
    Effective volume: <b>${f(v)} m³</b> &nbsp; (${f(v*1000,0)} L)<br>
    Internal dimensions: <b>${f(l)} m × ${f(w)} m × ${f(d)} m SWD</b><br>
    Approx. wall depth with freeboard: <b>${f(wall)} m</b></div>
    <div class="pd-loads"><b>Parameter Load Reference / पैरामीटर लोड:</b><br>
    BOD: ${f(load(bodi))} → ${f(load(bodo))} kg/day; removal ${f(rem(bodi,bodo),1)}%<br>
    COD: ${f(load(codi))} → ${f(load(codo))} kg/day; removal ${f(rem(codi,codo),1)}%<br>
    TSS: ${f(load(tssi))} → ${f(load(tsso))} kg/day; removal ${f(rem(tssi,tsso),1)}%</div>${svg}
    <div class="safety-note"><b>Design note:</b> HRT sizing alone is preliminary. Final tank size must also satisfy process kinetics/loading, peak flow, sludge volume, membrane/OEM limits, hydraulic profile, standby philosophy and structural design. Outlet limits do not by themselves determine tank volume.</div>`;
}

const grid=document.getElementById('modules');
const dual=(en,hi)=>`<div class="dual-en">${en||''}</div><div class="dual-hi">${hi||''}</div>`;
if(grid){const preferredOrder=['STP','ETP','CETP','CTP','RO','WTP','WSP','ZLD'];preferredOrder.filter(k=>modules[k]).forEach(key=>{const m=modules[key],h=modulesHi[key]||{};const b=document.createElement('button');b.type='button';b.className='module';b.innerHTML=`<strong>${key}</strong><span>${m.name}<br><small>${h.name||''}</small></span>`;b.addEventListener('click',()=>openModule(key,m));grid.appendChild(b)});Object.keys(modules).filter(k=>!preferredOrder.includes(k)).forEach(key=>{const m=modules[key],h=modulesHi[key]||{};const b=document.createElement('button');b.type='button';b.className='module';b.innerHTML=`<strong>${key}</strong><span>${m.name}<br><small>${h.name||''}</small></span>`;b.addEventListener('click',()=>openModule(key,m));grid.appendChild(b)});}
function openModule(key,m){
  const chem=(m.chemicals||[]).map(c=>`<tr><td><b>${c[0]}</b><br><small>${c[1]||''}</small></td><td>${c[2]||''}</td><td>${c[3]||''}</td></tr>`).join('');
  const sop=(plantSOP[key]||m.operation||[]).map(x=>`<li>${x}</li>`).join('');
  const maint=(plantMaintenance[key]||[]).map(x=>`<li>${x}</li>`).join('');
  const drawing=plantDrawings[key];
  const box=document.getElementById('plantDetailContent');
  const detail=document.getElementById('plantDetail');
  if(!box||!detail) return;
  box.innerHTML=`<span class="pill">${key}</span><h2>${m.name}</h2>
  ${drawing?`<div class="plant-drawing-card"><h4>Process Drawing / प्रोसेस ड्रॉइंग</h4><img class="plant-drawing" src="${drawing}" alt="${key} process flow drawing" loading="lazy"><button class="mini" type="button" onclick="openDrawing('${key}','${drawing}')">Full Drawing / पूरी ड्रॉइंग</button><p class="muted">Conceptual process flow. Final construction PFD/P&amp;ID, pipe sizes, instruments and equipment ratings must follow project-specific engineering.</p></div>`:''}
  <h4>Process Flow / प्रोसेस फ्लो</h4><p>${m.process}</p>
  <div class="parameter-design-card">
    <h4>Design by Inlet & Outlet Parameters / इनलेट-आउटलेट पैरामीटर से डिजाइन</h4>
    <p class="muted">Enter project parameters to generate a preliminary tank size and dimensioned plan/elevation sketch. / प्रोजेक्ट पैरामीटर भरें और प्रारंभिक टैंक साइज व डायमेंशन ड्रॉइंग प्राप्त करें।</p>
    <div class="parameter-grid">
      <label>Average Flow / औसत फ्लो (m³/day)<input id="pdQ-${key}" type="number" inputmode="decimal" placeholder="100"></label>
      <label>Peak Factor / पीक फैक्टर<input id="pdPeak-${key}" type="number" inputmode="decimal" value="2.5" min="1" step="0.1"></label>
      <label>Tank HRT / टैंक HRT (hr)<input id="pdHrt-${key}" type="number" inputmode="decimal" value="${defaultTankHRT(key)}"></label>
      <label>Water Depth / पानी की गहराई (m)<input id="pdD-${key}" type="number" inputmode="decimal" value="${defaultTankDepth(key)}"></label>
      <label>L:W Ratio / लंबाई:चौड़ाई<input id="pdR-${key}" type="number" inputmode="decimal" value="1.5" step="0.1"></label>
      <label>Inlet BOD (mg/L)<input id="pdBodi-${key}" type="number" inputmode="decimal" placeholder="250"></label>
      <label>Outlet BOD (mg/L)<input id="pdBodo-${key}" type="number" inputmode="decimal" placeholder="10"></label>
      <label>Inlet COD (mg/L)<input id="pdCodi-${key}" type="number" inputmode="decimal" placeholder="500"></label>
      <label>Outlet COD (mg/L)<input id="pdCodo-${key}" type="number" inputmode="decimal" placeholder="50"></label>
      <label>Inlet TSS (mg/L)<input id="pdTssi-${key}" type="number" inputmode="decimal" placeholder="300"></label>
      <label>Outlet TSS (mg/L)<input id="pdTsso-${key}" type="number" inputmode="decimal" placeholder="10"></label>
    </div>
    <div class="button-row"><button class="primary" type="button" onclick="calcCompletePlant('${key}')">Auto Size Complete Plant / पूरा प्लांट ऑटो साइज करें</button><button class="mini" type="button" onclick="calcPlantTank('${key}')">Single Tank / एक टैंक</button></div>
    <div class="result" id="pdAuto-${key}">All major tanks will be sized automatically here. / सभी मुख्य टैंकों की ऑटो साइजिंग यहाँ आएगी।</div>
    <div class="result" id="pdResult-${key}">Single-tank volume, dimensions and drawing will appear here. / एक टैंक का वॉल्यूम, डायमेंशन और ड्रॉइंग यहाँ आएगी।</div>
  </div>
  <h4>Design Checks / डिजाइन चेक</h4><ul>${(m.design||[]).map(x=>`<li>${x}</li>`).join('')}</ul>
  <h4>SOP – Start-up, Normal & Shutdown / एसओपी</h4><ol>${sop}</ol>
  <h4>Operation Guide / ऑपरेशन गाइड</h4><ol>${(m.operation||[]).map(x=>`<li>${x}</li>`).join('')}</ol>
  <h4>Preventive Maintenance & Safety / मेंटेनेंस और सेफ्टी</h4><ul>${maint}</ul>
  <h4>Chemical Composition & Use / केमिकल उपयोग</h4><div class="table-wrap"><table><thead><tr><th>Chemical / Composition</th><th>Purpose</th><th>Dosing guidance</th></tr></thead><tbody>${chem}</tbody></table></div>
  <div class="safety-note"><b>Chemical Safety / केमिकल सुरक्षा:</b> Never mix incompatible chemicals. Follow product SDS, PPE, ventilation, storage/segregation and site procedures. Actual chemical dose must be established from water/effluent analysis, jar tests, residual/endpoint control, membrane/OEM projection and applicable standards—not from a generic fixed dose.</div>
  <h4>Troubleshooting / समस्या समाधान</h4><ul>${(m.trouble||[]).map(x=>`<li>${x}</li>`).join('')}</ul>`;
  detail.hidden=false;
  detail.classList.add('open');
  document.body.classList.add('plant-page-open');
  const plantSection=document.getElementById('plants');
  if(plantSection) plantSection.classList.add('detail-view');
  // Open the selected plant like a separate in-app page instead of scrolling to a block below the list.
  window.scrollTo({top:0,behavior:'auto'});
  try{ history.pushState({plant:key},'', '#plant-'+key.toLowerCase()); }catch(e){}
}
function closePlantDetail(fromHistory=false){
  const detail=document.getElementById('plantDetail');
  if(detail){detail.hidden=true;detail.classList.remove('open')}
  document.body.classList.remove('plant-page-open');
  const plantSection=document.getElementById('plants');
  if(plantSection) plantSection.classList.remove('detail-view');
  if(!fromHistory && location.hash.indexOf('#plant-')===0){
    try{ history.back(); return; }catch(e){}
  }
  window.scrollTo({top:0,behavior:'auto'});
}
window.addEventListener('popstate',()=>{
  if(document.body.classList.contains('plant-page-open')) closePlantDetail(true);
});
document.getElementById('closeModal')?.addEventListener('click',()=>document.getElementById('moduleModal')?.classList.remove('show'));
document.getElementById('moduleModal')?.addEventListener('click',e=>{if(e.target.id==='moduleModal')e.currentTarget.classList.remove('show')});
document.getElementById('closePlantDetail')?.addEventListener('click',closePlantDetail);
document.getElementById('closePlantDetailBottom')?.addEventListener('click',closePlantDetail);

document.querySelectorAll('.section-tab').forEach(t=>t.onclick=()=>{document.querySelectorAll('.section-tab').forEach(x=>x.classList.remove('active'));document.querySelectorAll('.main-section').forEach(x=>x.classList.remove('active'));t.classList.add('active');document.getElementById(t.dataset.section).classList.add('active')});
document.querySelectorAll('.tab').forEach(t=>t.onclick=()=>{document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));document.querySelectorAll('.calc-panel').forEach(x=>x.classList.remove('active'));t.classList.add('active');document.getElementById(t.dataset.tab).classList.add('active')});

const n=id=>parseFloat(document.getElementById(id).value);const fmt=x=>Number.isFinite(x)?new Intl.NumberFormat('en-IN',{maximumFractionDigits:3}).format(x):'—';function setR(id,html){document.getElementById(id).innerHTML=html}
function calcFlow(){const v=n('flowValue'),u=document.getElementById('flowUnit').value;if(!Number.isFinite(v)||v<0)return setR('flowResult','Please enter a valid flow.');const m3d={m3d:v,m3h:v*24,lpm:v*1.44,lps:v*86.4}[u];setR('flowResult',`<b>${fmt(m3d)} m³/day</b><br>${fmt(m3d/24)} m³/hr • ${fmt(m3d*1000/1440)} L/min • ${fmt(m3d*1000/86400)} L/s`)}
function calcTank(){const L=n('tankL'),W=n('tankW'),D=n('tankD');if([L,W,D].some(x=>!Number.isFinite(x)||x<=0))return setR('tankResult','Enter positive dimensions.');const V=L*W*D;setR('tankResult',`<b>${fmt(V)} m³</b> effective volume<br>${fmt(V*1000)} litres`)}
function calcDose(){const Q=n('doseFlow'),mg=n('doseMg'),s=n('doseStrength');if([Q,mg,s].some(x=>!Number.isFinite(x)||x<=0)||s>100)return setR('doseResult','Enter valid values; strength must be 0–100%.');const active=Q*mg/1000,solution=active/(s/100);setR('doseResult',`Active chemical: <b>${fmt(active)} kg/day</b><br>${s}% solution: <b>${fmt(solution)} kg/day</b><br>Approx. ${fmt(solution/24)} kg/hr (density assumed ≈ 1 kg/L)`)}
function calcHRT(){const V=n('hrtV'),Q=n('hrtQ');if([V,Q].some(x=>!Number.isFinite(x)||x<=0))return setR('hrtResult','Enter valid positive values.');const h=V/Q*24;setR('hrtResult',`HRT = <b>${fmt(h)} hours</b><br>${fmt(h/24)} days`)}
function calcPump(){const Q=n('pumpQ'),H=n('pumpH'),e=n('pumpEff');if([Q,H,e].some(x=>!Number.isFinite(x)||x<=0)||e>100)return setR('pumpResult','Enter valid positive values; efficiency must be ≤100%.');const hyd=1000*9.81*(Q/3600)*H/1000,shaft=hyd/(e/100);setR('pumpResult',`Hydraulic power: <b>${fmt(hyd)} kW</b><br>Estimated input/shaft power: <b>${fmt(shaft)} kW</b><br>Select motor with suitable service margin and vendor confirmation.`)}
function calcFilter(){const Q=n('filterQ'),r=n('filterRate'),count=Math.floor(n('filterN'));if([Q,r,count].some(x=>!Number.isFinite(x)||x<=0))return setR('filterResult','Enter valid positive values.');const total=Q/r,each=total/count,d=Math.sqrt(4*each/Math.PI);setR('filterResult',`Total area: <b>${fmt(total)} m²</b><br>Area/filter: ${fmt(each)} m²<br>Equivalent internal diameter/filter: <b>${fmt(d)} m</b>`)}
function calcRO(){const f=n('roFeed'),r=n('roRecovery');if(!Number.isFinite(f)||f<=0||!Number.isFinite(r)||r<=0||r>=100)return setR('roResult','Enter feed >0 and recovery between 0 and 100%.');const p=f*r/100,c=f-p,cf=1/(1-r/100);setR('roResult',`Permeate: <b>${fmt(p)} m³/hr</b><br>Reject: <b>${fmt(c)} m³/hr</b><br>Approx. concentration factor: ${fmt(cf)}×`)}

function analyzeWater(){const vals={pH:n('waPh'),TDS:n('waTds'),Hardness:n('waHard'),Alkalinity:n('waAlk'),Turbidity:n('waTurb'),Chloride:n('waCl')};const notes=[];if(Number.isFinite(vals.pH)){if(vals.pH<6.5)notes.push('pH is acidic; review corrosion risk and treatment need.');else if(vals.pH>8.5)notes.push('pH is alkaline; review scaling tendency and intended use.');else notes.push('pH is in a broadly neutral operating range.')}if(Number.isFinite(vals.TDS)&&vals.TDS>1000)notes.push('TDS is relatively high; membrane/DM treatment may need detailed evaluation depending on use.');if(Number.isFinite(vals.Hardness)&&vals.Hardness>300)notes.push('Hardness is high; scaling control or softening may be required.');if(Number.isFinite(vals.Turbidity)&&vals.Turbidity>5)notes.push('Turbidity is elevated; clarification/filtration pretreatment should be reviewed.');if(Number.isFinite(vals.Chloride)&&vals.Chloride>500)notes.push('Chloride is elevated; review corrosion and RO concentrate implications.');if(!notes.length)notes.push('Enter one or more parameters for screening observations.');setR('waResult','<b>Quick observations</b><ul>'+notes.map(x=>`<li>${x}</li>`).join('')+'</ul><small>Use intended-use standards and complete lab analysis for final decisions.</small>')}

const LOG_KEY='wtdDailyLogsV2';
function getLogs(){try{return JSON.parse(localStorage.getItem(LOG_KEY)||'[]')}catch{return []}}
function saveLog(){const date=document.getElementById('logDate').value||new Date().toISOString().slice(0,10);const rec={date,plant:document.getElementById('logPlant').value,flow:document.getElementById('logFlow').value,pH:document.getElementById('logPh').value,key:document.getElementById('logKey').value,operator:document.getElementById('logOperator').value,remarks:document.getElementById('logRemarks').value};const logs=getLogs();logs.unshift(rec);localStorage.setItem(LOG_KEY,JSON.stringify(logs.slice(0,100)));renderLogs();['logFlow','logPh','logKey','logRemarks'].forEach(id=>document.getElementById(id).value='')}
function renderLogs(){const logs=getLogs(),el=document.getElementById('logList');if(!logs.length){el.innerHTML='<div class="card muted">No saved logs yet.</div>';return}el.innerHTML=logs.map((x,i)=>`<article class="card log-card"><div class="log-head"><b>${x.plant} • ${x.date}</b><button class="mini" onclick="deleteLog(${i})">Delete</button></div><div>Flow: ${x.flow||'—'} m³/day • pH: ${x.pH||'—'}</div><div>${x.key||''}</div><small>${x.operator?'Operator: '+x.operator:''}</small>${x.remarks?`<p>${escapeHtml(x.remarks)}</p>`:''}</article>`).join('')}
function deleteLog(i){const logs=getLogs();logs.splice(i,1);localStorage.setItem(LOG_KEY,JSON.stringify(logs));renderLogs()}
function clearLogs(){if(confirm('Delete all saved logs on this device?')){localStorage.removeItem(LOG_KEY);renderLogs()}}
function exportLogs(){const logs=getLogs();if(!logs.length)return alert('No logs to export.');const cols=['date','plant','flow','pH','key','operator','remarks'];const csv=[cols.join(','),...logs.map(r=>cols.map(k=>'"'+String(r[k]||'').replaceAll('"','""')+'"').join(','))].join('\n');const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([csv],{type:'text/csv'}));a.download='water-treatment-daily-log.csv';a.click();URL.revokeObjectURL(a.href)}
function escapeHtml(s){return String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
document.getElementById('logDate').value=new Date().toISOString().slice(0,10);renderLogs();

let deferredPrompt;
const installBtn=document.getElementById('installBtn');
window.addEventListener('beforeinstallprompt',e=>{
  e.preventDefault(); deferredPrompt=e;
  if(installBtn) installBtn.hidden=false;
});
if(installBtn) installBtn.addEventListener('click',async()=>{
  if(!deferredPrompt)return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt=null;
  installBtn.hidden=true;
});
if(false && location.protocol!=='file:' && 'serviceWorker' in navigator){
  window.addEventListener('load',()=>navigator.serviceWorker.register('service-worker.js').catch(()=>{}));
}


function num(id){return parseFloat(document.getElementById(id).value)}
function calcSTP(){const q=num('stpQ'),h=num('stpHrt'),f=num('stpFill'); if(!(q>0&&h>0&&f>0&&f<=100)) return stpResult.textContent='Enter valid values.'; const v=q*h/24, media=v*f/100; stpResult.innerHTML=`Aeration volume: <b>${v.toFixed(2)} m³</b><br>MBBR media @ ${f}% fill: <b>${media.toFixed(2)} m³</b><br>Preliminary sizing only; verify organic loading, media SSA, DO and vendor criteria.`}
function calcBlower(){const b=num('blBod'),fac=num('blFactor'),ote=num('blOte'); if(!(b>0&&fac>0&&ote>0&&ote<=100)) return blResult.textContent='Enter valid values.'; const o2=b*fac, air=o2/(0.232*(ote/100)), nm3d=air/1.293, nm3h=nm3d/24; blResult.innerHTML=`O₂ demand: <b>${o2.toFixed(1)} kg/day</b><br>Approx. air: <b>${nm3h.toFixed(1)} Nm³/hr</b><br>Apply peak/load, diffuser, depth and fouling factors for final blower selection.`}
function calcClarifier(){const q=num('clQ'),s=num('clSor'),d=num('clDepth'); if(!(q>0&&s>0&&d>0)) return clResult.textContent='Enter valid values.'; const a=q/s, dia=Math.sqrt(4*a/Math.PI),v=a*d; clResult.innerHTML=`Surface area: <b>${a.toFixed(2)} m²</b><br>Equivalent circular diameter: <b>${dia.toFixed(2)} m</b><br>Liquid volume: <b>${v.toFixed(2)} m³</b>`}
function calcSoftener(){const q=num('sfQ'),h=num('sfHard'),c=num('sfCap'),days=num('sfDays'); if(!(q>0&&h>0&&c>0&&days>0)) return sfResult.textContent='Enter valid values.'; const load=q*1000*h/1000*days, resin=load/c; sfResult.innerHTML=`Hardness load/run: <b>${load.toFixed(0)} g as CaCO₃</b><br>Estimated resin: <b>${resin.toFixed(1)} L</b><br>Confirm actual resin capacity, leakage, salt dose and regeneration efficiency.`}
function calcChemTank(){const kg=num('ctKg'),conc=num('ctConc'),days=num('ctDays'),rho=num('ctDensity'); if(!(kg>0&&conc>0&&conc<=100&&days>0&&rho>0)) return ctResult.textContent='Enter valid values.'; const solkg=kg/(conc/100)*days, l=solkg/rho, rec=l*1.25; ctResult.innerHTML=`Working solution: <b>${l.toFixed(0)} L</b><br>Recommended tank (25% freeboard): <b>${rec.toFixed(0)} L</b>`}


// V4 Project Design, BOQ & Costing
let lastDesign = '';
function buildDesign(){
 const name=document.getElementById('prName').value||'Water Treatment Project', type=document.getElementById('prType').value, process=document.getElementById('prProcess').value, q=num('prQ');
 if(!(q>0)) return setR('designResult','Enter a valid plant capacity.');
 let train=[], equipment=[];
 if(type==='STP'){train=['Screening','Oil & grease / equalization','Biological treatment ('+process+')','Secondary separation','Tertiary filtration','Disinfection','Treated-water storage','Sludge handling'];equipment=['Bar screen','Equalization pumps','Air blowers','Diffusers / '+process+' package','Clarifier / separation system','PSF','ACF','Dosing pumps','Sludge pumps','Filter press / sludge dewatering','Control panel & instruments'];}
 else if(type==='ETP'){train=['Screening / collection','Equalization','pH correction','Coagulation & flocculation','Primary clarification','Biological treatment as applicable','Tertiary treatment','Sludge handling'];equipment=['Transfer pumps','Agitators','Chemical dosing system','Flash mixer / flocculator','Clarifier','Aeration package','Filters','Sludge dewatering','Panel & instruments'];}
 else if(type==='WTP'){train=['Raw-water pumping','Coagulation / clarification as required','Pressure / gravity filtration','Activated carbon as required','Disinfection','Treated-water storage'];equipment=['Raw-water pumps','Dosing system','Clarifier (if required)','Sand filter','Carbon filter','Disinfection system','Transfer pumps','Panel & instruments'];}
 else if(type==='RO'){train=['Feed storage','Pretreatment','Cartridge filtration','Antiscalant / chemical dosing','High-pressure pumping','RO membrane separation','Permeate storage','Reject handling / recovery review'];equipment=['Feed pump','Pretreatment filters','Cartridge filter','Dosing pumps','High-pressure pump','RO pressure vessels & membranes','Flow / pressure / conductivity instruments','CIP system','Control panel'];}
 else {train=['Pretreatment','Primary recovery','Membrane concentration','Evaporation / concentration','Crystallization / solids handling','Condensate polishing / reuse'];equipment=['Transfer pumps','Pretreatment package','RO / membrane package','MEE / evaporator','ATFD / crystallizer as applicable','Condensate polishing','Sludge / salt handling','Instrumentation & PLC panel'];}
 const peak=(q/20).toFixed(2), eq=(q*8/24).toFixed(1);
 lastDesign=`<h4>${escapeHtml(name)}</h4><b>${type} • ${q} m³/day • ${process}</b><br><br><b>Design basis:</b> Average ${q} m³/day; indicative 20-hour operating flow ${peak} m³/hr; 8-hour equalization reference ${eq} m³.<br><br><b>Process sequence</b><ol>${train.map(x=>`<li>${x}</li>`).join('')}</ol><b>Preliminary equipment list / BOQ</b><ol>${equipment.map(x=>`<li>${x}</li>`).join('')}</ol><small>Final sizing requires inlet/outlet quality, peak factors, site constraints, applicable standards and vendor data.</small>`;
 setR('designResult',lastDesign);
}
function calcCost(){
 const ids=['cCivil','cMech','cPipe','cElec','cInst','cErec','cOther']; let direct=ids.reduce((a,id)=>a+(num(id)||0),0);
 const cont=num('cCont')||0, tax=num('cTax')||0, margin=num('cMargin')||0, cur=document.getElementById('prCurrency').value;
 const contingency=direct*cont/100, base=direct+contingency, marginAmt=base*margin/100, beforeTax=base+marginAmt, taxAmt=beforeTax*tax/100, total=beforeTax+taxAmt;
 const money=x=>cur+new Intl.NumberFormat('en-IN',{maximumFractionDigits:0}).format(x);
 setR('costResult',`Direct cost: <b>${money(direct)}</b><br>Contingency (${cont}%): ${money(contingency)}<br>Margin (${margin}%): ${money(marginAmt)}<br>Price before tax: <b>${money(beforeTax)}</b><br>Tax / GST (${tax}%): ${money(taxAmt)}<br><b>Estimated quotation total: ${money(total)}</b><br><small>Budgetary estimate only. Verify taxes, freight, duties, installation scope, exclusions and commercial terms before issue.</small>`);
}
function printReport(){
  if(!lastDesign) buildDesign();
  const project=document.getElementById('prName').value||'Water Treatment Project';
  const d=document.getElementById('designResult').innerHTML;
  const c=document.getElementById('costResult').innerHTML;
  const w=window.open('','_blank');
  if(!w) return alert('Allow pop-ups to create the report.');
  const safeProject=escapeHtml(project);
  const report=`<!doctype html><html><head><meta charset="utf-8"><title>${safeProject} - Design Report</title><style>
  body{font-family:Arial,sans-serif;max-width:850px;margin:40px auto;line-height:1.5;color:#17202a;padding:0 18px}h1{border-bottom:2px solid #0b4d80;padding-bottom:10px;color:#083b66}.box{border:1px solid #cbd5e1;border-radius:12px;padding:18px;margin:18px 0}small{color:#555}button{padding:10px 16px;border:0;border-radius:8px;background:#0b5ea8;color:white;font-weight:700}@media print{button{display:none}}</style></head><body><h1>Water Treatment Doctor — Preliminary Design Report</h1><div class="box">${d}</div><div class="box"><h3>Budgetary Cost / Quotation</h3>${c}</div><p><small>Engineering note: This report is a preliminary aid, not a construction-ready design. Confirm process guarantees, hydraulic profile, structural design, electrical loads, statutory requirements and vendor selections before execution.</small></p><button onclick="window.print()">Print / Save as PDF</button></body></html>`;
  w.document.open();
  w.document.write(report);
  w.document.close();
}

function openAppOverview(){
  document.getElementById('appOverviewModal')?.classList.add('show');
  document.body.style.overflow='hidden';
}
function closeAppOverview(){
  document.getElementById('appOverviewModal')?.classList.remove('show');
  document.body.style.overflow='';
}

// ---- V7 dashboard/search helpers ----
function goSection(id){
  const btn=document.querySelector(`.section-tab[data-section="${id}"]`);
  if(btn) btn.click();
}
function openNoScrollPanel(target){
  const el = target.startsWith('.')
    ? document.querySelector(target)
    : document.getElementById(target);

  if(!el) return;

  const oldY = window.scrollY;
  el.hidden = false;
  el.classList.add('no-scroll-open');

  requestAnimationFrame(()=>{
    window.scrollTo(0, oldY);
  });
}
function runGlobalSearch(){
  const q=(document.getElementById('globalSearch')?.value||'').trim().toLowerCase();
  const box=document.getElementById('searchResults');
  if(!box) return;
  if(!q){ box.hidden=true; box.innerHTML=''; return; }
  const hits=[];
  Object.entries(modules).forEach(([key,m])=>{
    const text=[key,m.name,m.process,...(m.design||[]),...(m.operation||[]),...(m.trouble||[]),
      ...((m.chemicals||[]).flat())].join(' ').toLowerCase();
    if(text.includes(q)) hits.push({key,name:m.name});
  });
  box.hidden=false;
  if(!hits.length){
    box.innerHTML=`<div class="muted">No exact match for <b>${escapeHtml(q)}</b>. Try plant name, chemical or problem keyword.</div>`;
    return;
  }
  box.innerHTML='<b>Matches</b>'+hits.map(h=>`<button class="search-hit" onclick="goSection('plants');setTimeout(()=>{const b=[...document.querySelectorAll('.module')].find(x=>x.textContent.includes('${h.key}'));if(b)b.click()},150)"><span>${h.key}</span>${h.name}</button>`).join('');
}
document.getElementById('globalSearch')?.addEventListener('keydown',e=>{if(e.key==='Enter')runGlobalSearch()});


function openDrawing(code,src){
  document.getElementById('drawingTitle').textContent=code+' Drawing / ड्रॉइंग';
  document.getElementById('drawingImage').src=src;
  document.getElementById('drawingModal').classList.add('show');
}
function closeDrawing(){
  document.getElementById('drawingModal').classList.remove('show');
}
function setLang(lang){
  document.documentElement.dataset.lang=lang;
  localStorage.setItem('wtdLang',lang);
  document.querySelectorAll('.sop-cols').forEach(box=>{
    const en=box.children[0], hi=box.children[1];
    if(lang==='en'){ en.style.display='block'; hi.style.display='none'; }
    else if(lang==='hi'){ en.style.display='none'; hi.style.display='block'; }
    else { en.style.display='block'; hi.style.display='block'; }
  });
}
document.addEventListener('DOMContentLoaded',()=>{
  const l=localStorage.getItem('wtdLang')||'both';
  const s=document.getElementById('langSwitch'); if(s) s.value=l;
  setLang(l);
});


const mediaDiagDB = {
  STP: {
    "Bad odor / दुर्गंध": {
      cause:"Low DO, septic equalization, sludge accumulation / कम DO, सेप्टिक इक्वलाइजेशन, स्लज जमा",
      action:"Check DO and blower; improve aeration/mixing; remove excess sludge; check shock load. / DO व ब्लोअर जांचें; एरेशन/मिक्सिंग बढ़ाएँ; अतिरिक्त स्लज निकालें; शॉक लोड जांचें।"
    },
    "Foaming / झाग": {
      cause:"Young sludge, surfactants, filamentous growth / यंग स्लज, सर्फेक्टेंट, फिलामेंटस ग्रोथ",
      action:"Check SRT/MLSS/DO; identify foam type; control source; remove surface foam safely. / SRT/MLSS/DO जांचें; झाग का प्रकार पहचानें; स्रोत नियंत्रित करें।"
    },
    "Black sludge / काला स्लज": {
      cause:"Anaerobic/septic condition or long sludge age / एनारोबिक स्थिति या अधिक स्लज एज",
      action:"Restore aeration/mixing; check DO and sludge age; remove stagnant sludge. / एरेशन/मिक्सिंग बहाल करें; DO और स्लज एज जांचें; रुका स्लज निकालें।"
    },
    "Clarifier carryover / क्लैरिफायर से स्लज निकलना": {
      cause:"Hydraulic overload, bulking, high sludge blanket / हाइड्रोलिक ओवरलोड, बल्किंग, अधिक स्लज ब्लैंकेट",
      action:"Check flow, SVI and blanket; adjust RAS/WAS; inspect weirs and short-circuiting. / फ्लो, SVI, ब्लैंकेट जांचें; RAS/WAS समायोजित करें।"
    }
  },
  ETP: {
    "Heavy color / ज्यादा रंग": {
      cause:"Dyes/refractory organics or weak coagulation / डाई, कठिन ऑर्गेनिक्स या कमजोर कोएगुलेशन",
      action:"Check source segregation; jar test; optimize pH/coagulant; review designed oxidation/adsorption step. / सोर्स सेग्रीगेशन, जार टेस्ट, pH/कोएगुलेंट ऑप्टिमाइज़ करें।"
    },
    "Poor floc / फ्लोक नहीं बनना": {
      cause:"Wrong pH/dose or poor mixing / गलत pH/डोज या खराब मिक्सिंग",
      action:"Perform jar test; verify chemical strength, dosing pump and mixing intensity. / जार टेस्ट करें; केमिकल स्ट्रेंथ, डोजिंग पंप और मिक्सिंग जांचें।"
    },
    "Excess sludge / ज्यादा स्लज": {
      cause:"Overdosing or high solids load / अधिक डोजिंग या अधिक सॉलिड लोड",
      action:"Optimize chemical dose; check influent solids and dewatering performance. / केमिकल डोज ऑप्टिमाइज़ करें; सॉलिड लोड व डीवॉटरिंग जांचें।"
    }
  },
  CTP: {
    "High turbidity / टर्बिडिटी अधिक": {
      cause:"Poor coagulation/flocculation, overload / खराब कोएगुलेशन/फ्लोक्युलेशन, ओवरलोड",
      action:"Jar test; check pH, dose, mixer and clarifier loading. / जार टेस्ट करें; pH, डोज, मिक्सर और क्लैरिफायर लोड जांचें।"
    },
    "Dirty filter / फिल्टर गंदा": {
      cause:"Media clogging or poor upstream clarification / मीडिया चोक या खराब क्लैरिफिकेशन",
      action:"Backwash as per trigger; inspect media and inlet turbidity. / ट्रिगर अनुसार बैकवॉश करें; मीडिया व इनलेट टर्बिडिटी जांचें।"
    }
  },
  RO: {
    "Low permeate flow / परमीएट फ्लो कम": {
      cause:"Fouling, scaling, low feed pressure or low temperature / फाउलिंग, स्केलिंग, कम फीड प्रेशर या तापमान",
      action:"Check normalized flow, cartridge DP, feed pressure/temp and membrane condition. / नॉर्मलाइज्ड फ्लो, कार्ट्रिज DP, फीड प्रेशर/तापमान और मेम्ब्रेन जांचें।"
    },
    "High permeate TDS / परमीएट TDS अधिक": {
      cause:"Membrane damage, O-ring leak or high feed TDS / मेम्ब्रेन डैमेज, O-ring लीकेज या उच्च फीड TDS",
      action:"Check conductivity by vessel if possible; inspect seals/O-rings; compare feed TDS. / वेसल कंडक्टिविटी, सील/O-ring और फीड TDS जांचें।"
    },
    "High DP / DP अधिक": {
      cause:"Fouling or blocked feed spacer / फाउलिंग या फीड स्पेसर ब्लॉकेज",
      action:"Check cartridge filter and pretreatment; consider OEM-approved CIP when criteria are met. / कार्ट्रिज फिल्टर व प्रीट्रीटमेंट जांचें; OEM क्राइटेरिया पर CIP करें।"
    },
    "Visible scaling / स्केलिंग दिखाई देना": {
      cause:"High recovery, poor antiscalant control, hardness/silica scaling / अधिक रिकवरी, खराब एंटीस्केलेंट कंट्रोल, हार्डनेस/सिलिका स्केलिंग",
      action:"Verify recovery, antiscalant dose/selection, pH and feed chemistry before cleaning. / रिकवरी, एंटीस्केलेंट, pH और फीड केमिस्ट्री जांचें।"
    }
  },
  WTP: {
    "Cloudy water / पानी धुंधला": {
      cause:"Poor coagulation or filter breakthrough / खराब कोएगुलेशन या फिल्टर ब्रेकथ्रू",
      action:"Jar test; check clarifier and filter headloss; backwash if required. / जार टेस्ट करें; क्लैरिफायर और फिल्टर हेडलॉस जांचें; जरूरत पर बैकवॉश करें।"
    },
    "Poor floc / फ्लोक खराब": {
      cause:"Wrong pH/dose/mixing intensity / गलत pH/डोज/मिक्सिंग",
      action:"Optimize jar test conditions; check flash mixer and flocculator. / जार टेस्ट ऑप्टिमाइज़ करें; फ्लैश मिक्सर व फ्लोक्युलेटर जांचें।"
    }
  },
  WSP: {
    "Leakage / लीकेज": {
      cause:"Pipe/joint/valve failure or excessive pressure / पाइप, जॉइंट, वाल्व फेल या अधिक प्रेशर",
      action:"Isolate safely; inspect affected section; repair and pressure-test before return to service. / सुरक्षित आइसोलेट करें; प्रभावित भाग जांचें; मरम्मत व प्रेशर टेस्ट करें।"
    },
    "Low pressure / प्रेशर कम": {
      cause:"Low tank level, pump issue, closed valve or leak / कम टैंक लेवल, पंप समस्या, बंद वाल्व या लीकेज",
      action:"Check tank level, pump discharge, valve lineup and distribution leakage. / टैंक लेवल, पंप डिस्चार्ज, वाल्व लाइन-अप और लीकेज जांचें।"
    },
    "Pump vibration / पंप वाइब्रेशन": {
      cause:"Cavitation, misalignment, bearing or foundation issue / कैविटेशन, मिसअलाइनमेंट, बेयरिंग या फाउंडेशन समस्या",
      action:"Stop if unsafe; check suction/NPSH, alignment, bearings and foundation. / असुरक्षित हो तो बंद करें; सक्शन/NPSH, अलाइनमेंट, बेयरिंग व फाउंडेशन जांचें।"
    }
  },
  ZLD: {
    "MEE scaling / MEE स्केलिंग": {
      cause:"Supersaturation, poor pretreatment, high concentration factor / अधिक सैचुरेशन, खराब प्रीट्रीटमेंट, उच्च कंसंट्रेशन",
      action:"Check feed chemistry, concentration factor and OEM cleaning schedule. / फीड केमिस्ट्री, कंसंट्रेशन फैक्टर और OEM क्लीनिंग शेड्यूल जांचें।"
    },
    "Poor condensate / कंडेन्सेट खराब": {
      cause:"Carryover, foaming or exchanger leakage / कैरीओवर, फोमिंग या हीट एक्सचेंजर लीकेज",
      action:"Check separator/demister, foaming condition and heat exchanger leakage. / सेपरेटर/डिमिस्टर, फोमिंग और हीट एक्सचेंजर लीकेज जांचें।"
    },
    "Wet ATFD salt / ATFD सॉल्ट गीला": {
      cause:"Low heating, high feed rate or poor rotor/distribution / कम हीटिंग, अधिक फीड या खराब रोटर/डिस्ट्रिब्यूशन",
      action:"Check feed rate, rotor operation, heating medium and solids loading. / फीड रेट, रोटर, हीटिंग मीडियम और सॉलिड लोड जांचें।"
    }
  }
};

function loadDiagSymptoms(){
  const plant=document.getElementById('diagPlant').value;
  const sel=document.getElementById('diagSymptom');
  sel.innerHTML='<option value="">Select symptom / समस्या चुनें</option>';
  if(!plant || !mediaDiagDB[plant]) return;
  Object.keys(mediaDiagDB[plant]).forEach(k=>{
    const o=document.createElement('option'); o.value=k; o.textContent=k; sel.appendChild(o);
  });
}

function previewDiagMedia(ev){
  const f=ev.target.files?.[0];
  const wrap=document.getElementById('diagPreviewWrap');
  const img=document.getElementById('diagImagePreview');
  const vid=document.getElementById('diagVideoPreview');
  const info=document.getElementById('diagFileInfo');
  if(!f){ wrap.hidden=true; return; }
  wrap.hidden=false;
  img.hidden=true; vid.hidden=true;
  const url=URL.createObjectURL(f);
  if(f.type.startsWith('image/')){ img.src=url; img.hidden=false; }
  else if(f.type.startsWith('video/')){ vid.src=url; vid.hidden=false; }
  info.textContent=`${f.name} • ${(f.size/1024/1024).toFixed(2)} MB`;
}

function runMediaDiagnosis(){
  const plant=document.getElementById('diagPlant').value;
  const symptom=document.getElementById('diagSymptom').value;
  const file=document.getElementById('diagMedia').files?.[0];
  const box=document.getElementById('diagResult');
  if(!plant || !symptom){
    box.hidden=false;
    box.innerHTML='<b>Please select plant and symptom. / कृपया प्लांट और समस्या चुनें।</b>';
    return;
  }
  const d=mediaDiagDB[plant][symptom];
  box.hidden=false;
  box.innerHTML=`
    <h4>${plant} — ${symptom}</h4>
    <p><b>Media / मीडिया:</b> ${file ? escapeHtml(file.name) : 'No file selected / कोई फाइल नहीं'}</p>
    <p><b>Possible Cause / संभावित कारण:</b><br>${d.cause}</p>
    <p><b>Corrective Action / सुधारात्मक कार्य:</b><br>${d.action}</p>
    <p><b>Next Check / अगली जांच:</b><br>Record actual readings (flow, pressure, pH, DO, TDS/conductivity, temperature, DP, alarms as applicable) before changing operating conditions. / ऑपरेटिंग कंडीशन बदलने से पहले वास्तविक रीडिंग दर्ज करें।</p>
  `;
}

function clearMediaDiagnosis(){
  document.getElementById('diagPlant').value='';
  document.getElementById('diagSymptom').innerHTML='<option value="">Select plant first / पहले प्लांट चुनें</option>';
  document.getElementById('diagMedia').value='';
  document.getElementById('diagPreviewWrap').hidden=true;
  document.getElementById('diagImagePreview').hidden=true;
  const v=document.getElementById('diagVideoPreview'); v.hidden=true; v.removeAttribute('src'); v.load();
  document.getElementById('diagResult').hidden=true;
}


function saveAIBackendUrl(){
  const el=document.getElementById('aiBackendUrl');
  let v=(el?.value||'').trim().replace(/\/+$/,'');
  if(el) el.value=v;
  localStorage.setItem('wtdAiBackendUrl',v);
  updateAIStatus();
}
function updateAIStatus(){
  const url=(document.getElementById('aiBackendUrl')?.value||'').trim();
  const s=document.getElementById('aiStatus');
  if(!s) return;
  if(url){ s.textContent='Configured / सेट'; s.classList.add('ok'); }
  else { s.textContent='Not connected / कनेक्ट नहीं'; s.classList.remove('ok'); }
}
function canvasToJpegDataUrl(canvas,quality=.76){
  return canvas.toDataURL('image/jpeg',quality);
}
async function imageFileToDataUrl(file,maxSide=1280){
  const bmp=await createImageBitmap(file);
  let w=bmp.width,h=bmp.height;
  const scale=Math.min(1,maxSide/Math.max(w,h));
  w=Math.max(1,Math.round(w*scale)); h=Math.max(1,Math.round(h*scale));
  const c=document.createElement('canvas'); c.width=w;c.height=h;
  const ctx=c.getContext('2d'); ctx.drawImage(bmp,0,0,w,h);
  if(bmp.close) bmp.close();
  return canvasToJpegDataUrl(c);
}
function waitEvent(el,event){
  return new Promise((resolve,reject)=>{
    const ok=()=>{cleanup();resolve()};
    const bad=()=>{cleanup();reject(new Error('Media load failed'))};
    const cleanup=()=>{el.removeEventListener(event,ok);el.removeEventListener('error',bad)};
    el.addEventListener(event,ok,{once:true}); el.addEventListener('error',bad,{once:true});
  });
}
async function videoFileToFrames(file,count=3,maxSide=960){
  const url=URL.createObjectURL(file);
  const v=document.createElement('video');
  v.preload='metadata'; v.muted=true; v.playsInline=true; v.src=url;
  await waitEvent(v,'loadedmetadata');
  const duration=v.duration;
  if(!Number.isFinite(duration)||duration<=0){ URL.revokeObjectURL(url); throw new Error('Invalid video duration'); }
  const times=count===1?[duration*.5]:[duration*.12,duration*.5,duration*.88].slice(0,count);
  const frames=[];
  for(const t of times){
    v.currentTime=Math.min(Math.max(0,t),Math.max(0,duration-.05));
    await waitEvent(v,'seeked');
    let w=v.videoWidth,h=v.videoHeight;
    const scale=Math.min(1,maxSide/Math.max(w,h));
    w=Math.max(1,Math.round(w*scale)); h=Math.max(1,Math.round(h*scale));
    const c=document.createElement('canvas'); c.width=w;c.height=h;
    c.getContext('2d').drawImage(v,0,0,w,h);
    frames.push(canvasToJpegDataUrl(c,.72));
  }
  URL.revokeObjectURL(url);
  return frames;
}
function escapeMultiline(s){
  return escapeHtml(String(s??'')).replace(/\n/g,'<br>');
}
function renderAIResult(d){
  const box=document.getElementById('aiVisionResult');
  if(!box) return;
  const conf=d.confidence||'uncertain';
  const observations=(d.observations||[]).map(x=>`<li>${escapeMultiline(x)}</li>`).join('');
  const causes=(d.possible_causes||[]).map(x=>`<li>${escapeMultiline(x)}</li>`).join('');
  const checks=(d.check_next||[]).map(x=>`<li>${escapeMultiline(x)}</li>`).join('');
  const actions=(d.corrective_actions||[]).map(x=>`<li>${escapeMultiline(x)}</li>`).join('');
  const stop=(d.stop_and_escalate_if||[]).map(x=>`<li>${escapeMultiline(x)}</li>`).join('');
  box.hidden=false;
  box.innerHTML=`
    <h4>AI Visual Assessment / AI दृश्य आकलन</h4>
    <div class="confidence-chip">Confidence / विश्वास: ${escapeHtml(conf)}</div>
    <p><b>Summary / सारांश</b><br>${escapeMultiline(d.summary||'No summary')}</p>
    <div class="ai-result-grid">
      <div><b>Observed / दिखाई दिया</b><ul>${observations||'<li>Not clear / स्पष्ट नहीं</li>'}</ul></div>
      <div><b>Possible Causes / संभावित कारण</b><ul>${causes||'<li>Need more evidence / अधिक जानकारी चाहिए</li>'}</ul></div>
      <div><b>Check Next / अगली जांच</b><ul>${checks}</ul></div>
      <div><b>Corrective Actions / सुधारात्मक कार्य</b><ul>${actions}</ul></div>
    </div>
    ${stop?`<div class="danger-box"><b>Stop & Escalate If / तुरंत रोकें और विशेषज्ञ को बुलाएँ यदि</b><ul>${stop}</ul></div>`:''}
    <p class="muted"><b>Note:</b> ${escapeMultiline(d.disclaimer||'Verify with plant readings and site procedures before action.')}</p>
  `;
}
async function runAIVisionDiagnosis(){
  const backend=(document.getElementById('aiBackendUrl')?.value||'').trim().replace(/\/+$/,'');
  const plant=document.getElementById('diagPlant')?.value||'';
  const symptom=document.getElementById('diagSymptom')?.value||'';
  const note=document.getElementById('aiOperatorNote')?.value||'';
  const file=document.getElementById('diagMedia')?.files?.[0];
  const result=document.getElementById('aiVisionResult');
  const progress=document.getElementById('aiProgress');

  if(!backend){
    result.hidden=false; result.innerHTML='<b>Enter AI Backend URL first. / पहले AI Backend URL डालें।</b>'; return;
  }
  if(!file){
    result.hidden=false; result.innerHTML='<b>Upload a photo or video first. / पहले फोटो या वीडियो अपलोड करें।</b>'; return;
  }

  progress.hidden=false; result.hidden=true;
  try{
    let images=[];
    if(file.type.startsWith('image/')) images=[await imageFileToDataUrl(file)];
    else if(file.type.startsWith('video/')) images=await videoFileToFrames(file,3);
    else throw new Error('Unsupported media type');

    const resp=await fetch(backend+'/api/analyze',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        plant, symptom, operator_note:note,
        media_type:file.type.startsWith('video/')?'video_frames':'image',
        images
      })
    });
    const data=await resp.json().catch(()=>({}));
    if(!resp.ok) throw new Error(data.error||`Server error ${resp.status}`);
    renderAIResult(data);
  }catch(err){
    result.hidden=false;
    result.innerHTML=`<b>AI analysis failed / AI विश्लेषण नहीं हो सका</b><br>${escapeHtml(err.message||String(err))}<br><span class="muted">Guided offline troubleshooting is still available below.</span>`;
  }finally{
    progress.hidden=true;
  }
}
document.addEventListener('DOMContentLoaded',()=>{
  const el=document.getElementById('aiBackendUrl');
  if(el) el.value=localStorage.getItem('wtdAiBackendUrl')||'';
  updateAIStatus();
});


const plantChemicalDB = {
  STP:[
    ["Sodium Hypochlorite / सोडियम हाइपोक्लोराइट","Disinfection / डिसइन्फेक्शन"],
    ["Chlorine / क्लोरीन","Disinfection / डिसइन्फेक्शन"],
    ["PAC / पीएसी","Coagulation support / कोएगुलेशन"],
    ["Alum / फिटकरी","Coagulation / कोएगुलेशन"],
    ["Polymer / पॉलिमर","Sludge settling/dewatering / स्लज सेटलिंग"],
    ["Urea / यूरिया","Nutrient addition when required / जरूरत पर न्यूट्रिएंट"],
    ["DAP / डीएपी","Nutrient addition when required / जरूरत पर न्यूट्रिएंट"],
    ["Defoamer / डिफोमर","Foam control / फोम कंट्रोल"]
  ],
  ETP:[
    ["PAC / पीएसी","Coagulation / कोएगुलेशन"],
    ["Alum / फिटकरी","Coagulation / कोएगुलेशन"],
    ["Ferric Chloride / फेरिक क्लोराइड","Coagulation / कोएगुलेशन"],
    ["Lime / चूना","pH correction / pH करेक्शन"],
    ["Caustic Soda / कास्टिक सोडा","pH correction / pH करेक्शन"],
    ["Hydrochloric Acid / हाइड्रोक्लोरिक एसिड","pH correction / pH करेक्शन"],
    ["Sulfuric Acid / सल्फ्यूरिक एसिड","pH correction / pH करेक्शन"],
    ["Polymer / पॉलिमर","Flocculation/sludge / फ्लोक्युलेशन"],
    ["Sodium Hypochlorite / सोडियम हाइपोक्लोराइट","Oxidation/disinfection / ऑक्सिडेशन"],
    ["Defoamer / डिफोमर","Foam control / फोम कंट्रोल"]
  ],
  CTP:[
    ["PAC / पीएसी","Coagulation / कोएगुलेशन"],
    ["Alum / फिटकरी","Coagulation / कोएगुलेशन"],
    ["Lime / चूना","pH/alkalinity adjustment / pH"],
    ["Polymer / पॉलिमर","Flocculation / फ्लोक्युलेशन"],
    ["Sodium Hypochlorite / सोडियम हाइपोक्लोराइट","Disinfection / डिसइन्फेक्शन"],
    ["Chlorine / क्लोरीन","Disinfection / डिसइन्फेक्शन"]
  ],
  RO:[
    ["Antiscalant / एंटीस्केलेंट","Scale control / स्केल कंट्रोल"],
    ["SMBS / एसएमबीएस","Dechlorination / डी-क्लोरीनेशन"],
    ["Sodium Hypochlorite / सोडियम हाइपोक्लोराइट","Pretreatment disinfection / प्रीट्रीटमेंट"],
    ["Hydrochloric Acid / हाइड्रोक्लोरिक एसिड","pH correction / pH करेक्शन"],
    ["Caustic Soda / कास्टिक सोडा","pH/CIP use where approved / pH/CIP"],
    ["RO Cleaning Chemical / RO क्लीनिंग केमिकल","CIP only / केवल CIP"]
  ],
  WTP:[
    ["PAC / पीएसी","Coagulation / कोएगुलेशन"],
    ["Alum / फिटकरी","Coagulation / कोएगुलेशन"],
    ["Lime / चूना","pH/alkalinity adjustment / pH"],
    ["Polymer / पॉलिमर","Flocculation / फ्लोक्युलेशन"],
    ["Sodium Hypochlorite / सोडियम हाइपोक्लोराइट","Disinfection / डिसइन्फेक्शन"],
    ["Chlorine / क्लोरीन","Disinfection / डिसइन्फेक्शन"]
  ],
  WSP:[
    ["Sodium Hypochlorite / सोडियम हाइपोक्लोराइट","Disinfection / डिसइन्फेक्शन"],
    ["Chlorine / क्लोरीन","Disinfection / डिसइन्फेक्शन"],
    ["pH Correction Chemical / pH करेक्शन केमिकल","When required / जरूरत पर"]
  ],
  ZLD:[
    ["Antiscalant / एंटीस्केलेंट","RO scale control / RO स्केल कंट्रोल"],
    ["Acid / एसिड","pH/scale control where approved / pH/स्केल कंट्रोल"],
    ["Caustic Soda / कास्टिक सोडा","pH correction / pH करेक्शन"],
    ["Defoamer / डिफोमर","MEE/evaporator foam control / फोम कंट्रोल"],
    ["RO Cleaning Chemical / RO क्लीनिंग केमिकल","CIP only / केवल CIP"],
    ["MEE Cleaning Chemical / MEE क्लीनिंग केमिकल","Cleaning only as OEM procedure / OEM प्रक्रिया अनुसार"]
  ]
};

function loadPlantChemicals(){
  const plant=document.getElementById('chemPlant').value;
  const sel=document.getElementById('chemName');
  sel.innerHTML='<option value="">Select chemical / केमिकल चुनें</option>';
  (plantChemicalDB[plant]||[]).forEach(([name,purpose])=>{
    const o=document.createElement('option');
    o.value=name;
    o.textContent=name+' — '+purpose;
    sel.appendChild(o);
  });
}

function calculateChemicalUse(){
  const plant=document.getElementById('chemPlant').value;
  const chemical=document.getElementById('chemName').value;
  const flow=parseFloat(document.getElementById('chemFlow').value);
  const dose=parseFloat(document.getElementById('chemDose').value);
  const strength=parseFloat(document.getElementById('chemStrength').value);
  const density=parseFloat(document.getElementById('chemDensity').value);
  const box=document.getElementById('chemResult');

  if(!plant || !chemical || !(flow>=0) || !(dose>=0) || !(strength>0) || !(density>0)){
    box.hidden=false;
    box.innerHTML='<b>Please fill all fields correctly. / कृपया सभी जानकारी सही भरें।</b>';
    return;
  }

  const activeKg = flow*dose/1000;
  const productKg = activeKg/(strength/100);
  const productL = productKg/density;
  const monthlyKg = productKg*30;
  const monthlyL = productL*30;

  box.hidden=false;
  box.innerHTML=`
    <h4>${escapeHtml(plant)} — ${escapeHtml(chemical)}</h4>
    <p><b>Active chemical required / Active केमिकल:</b> ${activeKg.toFixed(3)} kg/day</p>
    <p><b>Commercial product required / Commercial प्रोडक्ट:</b> ${productKg.toFixed(3)} kg/day</p>
    <p><b>Approx. liquid quantity / लगभग लिक्विड मात्रा:</b> ${productL.toFixed(3)} L/day</p>
    <p><b>30-day estimate / 30 दिन का अनुमान:</b> ${monthlyKg.toFixed(2)} kg/month ≈ ${monthlyL.toFixed(2)} L/month</p>
    <p class="muted">Calculated from ${flow} m³/day flow and ${dose} mg/L approved dose at ${strength}% strength, density ${density} kg/L.</p>
  `;
}


function openCatalogue(){
  document.getElementById('catalogueModal')?.classList.add('show');
}
function closeCatalogue(){
  document.getElementById('catalogueModal')?.classList.remove('show');
}
document.addEventListener('click',e=>{
  if(e.target && e.target.id==='catalogueModal') closeCatalogue();
});

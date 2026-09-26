WATER TREATMENT DOCTOR V18.5.5 — BUILD 22.28
COMPLETE SMART DESIGN & CONSOLIDATED QA

FIXED / UPDATED
1. All 22 plant types now generate plant-specific tank schedules.
2. STP, ETP, CETP, WTP, MBBR and ASP show clarifier/tube-settler units.
3. Clarifier/tube-settler preliminary sizing uses SOR (surface overflow rate), not tank HRT.
4. Pump schedules added for every plant, including process-specific transfer, recycle,
   sludge, filter, membrane, CIP, product and utility services as applicable.
5. Other equipment remains plant-specific with preliminary duty/size basis and
   duty/standby philosophy.
6. Process flow/P&ID blocks match the expanded plant unit sequence.
7. Membrane, ion-exchange, thermal, cooling, boiler, desalination and water-supply
   plants include their relevant feed/product/reject/backwash/CIP/storage tanks.
8. Build workflow updated to versionCode 185554 and versionName Build 22.28.
9. Build 22.27 startup stability fix is preserved.
10. Opening restored: Get Started opens language selection before Home.
11. Rapid WebView reload shows the welcome action instead of bypassing onboarding.

QA COMPLETED
- JavaScript syntax checks.
- Automatic Smart Design generation test for all 22 plant selections at 100 KLD.
- Tank table, pump/equipment schedule and output completeness checks.
- Clarifier/tube-settler presence checks for applicable plants.
- Workflow/version/artifact-name checks.
- ZIP integrity and required-file checks.

ENGINEERING NOTE
Smart Design is a preliminary engineering aid. Final construction/IFC design must
be verified using actual inlet/outlet analysis, peak flows, mass balance, hydraulic
profile, process kinetics, sludge/recycle loads, site constraints, applicable
standards/Consent conditions, structural/electrical design and OEM/vendor data.

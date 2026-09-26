WATER TREATMENT DOCTOR V18.5.5 — BUILD 22.26 FINAL QA
Developer: Vinay Kumar Singh

CONSOLIDATED FIXES
1. The selected English or Hindi language is no longer overwritten by the legacy bilingual controller.
2. Opening a full drawing no longer rotates/recreates the Android Activity or restarts Splash/Loading/Welcome.
3. Full Drawing uses a drawing-only landscape surface while the app and Android Activity remain portrait.
4. Closing a drawing or pressing Android Back preserves the current page and returns to the drawing/plant context.
5. Drawing Fit uses the available landscape viewport; pinch zoom, pan, +/- and Save remain available.
6. Bottom navigation stays hidden while the full drawing viewer is open.

BUILD
Upload all extracted root files and folders to the repository, preserving .github/workflows/main.yml, drawings/ and ai-backend/.
Run Build Water Treatment Doctor Android and install Water-Treatment-Doctor-Build22.26-TEST-APK.

FINAL PHONE QA
- Fresh launch: Splash -> Loading -> Welcome -> language selection -> Home.
- Test English and Hindi separately, including STP/ETP/WTP/RO topic pages.
- Open STP, ETP and RO Full Drawing. The opening must not replay.
- Test +, -, pinch, pan, Fit, Save, Close and Android Back.
- Verify Smart Design with a selected 10-hour HRT, Chemical Dosing and AI guided/photo/video flows.

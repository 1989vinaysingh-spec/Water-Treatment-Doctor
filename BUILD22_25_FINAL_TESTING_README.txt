WATER TREATMENT DOCTOR V18.5.5 — BUILD 22.25 TESTING SOURCE
Developer: Vinay Kumar Singh

WHAT THIS ZIP IS
The complete app source, packaged drawings, AI backend source and GitHub Android build workflow. It is not an APK or a Play-ready AAB by itself.

BUILD ON GITHUB
Upload the extracted contents to the repository root, preserving .github/workflows/main.yml, ai-backend/, drawings/, and all root files. Run the "Build Water Treatment Doctor Android" workflow. Download Water-Treatment-Doctor-Build22.25-TEST-APK for the phone test.

PLAY SIGNING
For a signed release APK and Play AAB, configure all four GitHub Actions repository secrets:
WTD_KEYSTORE_BASE64 = base64 contents of YOUR existing Play upload-key JKS (or a newly created upload key for a new app)
WTD_STORE_PASSWORD = keystore password
WTD_KEY_ALIAS = alias of the upload key
WTD_KEY_PASSWORD = key password
Keep the JKS and passwords private; never add them to the repository or this ZIP. For an existing app, use its registered upload key. If secrets are absent, the workflow produces only the testing APK. If only some are set, the workflow fails rather than producing an untrusted release.

FINAL PHONE TEST (fresh install and another launch)
1. Splash -> Loading -> Welcome -> Get Started -> choose Hindi, then repeat choosing English. Test Home, each plant topic, calculator labels, troubleshooting, drawing controls and the header language switch in both languages. Technical abbreviations (STP, RO, pH, etc.) remain standard in both languages.
2. Home: verify nine plant cards, Chemical Dosing and AI Troubleshooting. Open each plant and its topics; check content and Back.
3. Chemical dosing: enter known flow/dose inputs and verify the displayed calculation. Smart Design: test a selected HRT of 10 hours and its result.
4. Drawings: open STP, ETP and another plant; Full Drawing should rotate only the viewer. Check zoom/pan, Fit, close, and Save in Downloads; app must return to portrait.
5. Troubleshooting: test plant-specific problems, photo and video chooser, offline guided result, and online AI only if the backend is deployed and healthy.
6. Back/Home/Profile/bottom navigation, offline use of bundled drawings, and restart without a white screen.
7. Install and repeat with the signed release APK before uploading its AAB to Play testing.

PLAY RELEASE ITEMS OUTSIDE THIS ZIP
Host privacy-policy.html at a publicly accessible HTTPS URL. Complete Play Console store listing, screenshots, Data safety declarations and account-specific testing requirements. Confirm that versionCode 185551 exceeds any version already uploaded for this package. Deploy and verify the AI backend before advertising live AI photo/video analysis. Upload only the signed AAB produced with the proper upload key; start with an internal/closed testing track and inspect its pre-launch report.

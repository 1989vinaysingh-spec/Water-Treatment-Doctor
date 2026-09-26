Water Treatment Doctor V18.5.5 — Build 22.27 Startup Stability

Fixes in this build:
- Stops the repeated splash/home/white-screen startup loop.
- Uses one deterministic opening flow and automatically enters Home.
- Skips the opening immediately if Android WebView reloads within 15 seconds.
- Changes language without reloading the whole WebView.
- Does not attempt service-worker registration inside file:///android_asset.
- Increments Android versionCode to 185553.

Testing installation:
1. Uninstall the currently installed Water Treatment Doctor app.
2. Build and download Water-Treatment-Doctor-Build22.27-TEST-APK.
3. Install app-debug.apk and open it.
4. The opening should close automatically in about 2 seconds and Home should remain visible.

GitHub upload:
- Upload all root files/folders from this package to the repository root.
- Keep .github/workflows/main.yml inside .github/workflows/.
- Keep all 22 PNG drawings inside drawings/.
- Run the workflow: Build Water Treatment Doctor Android.

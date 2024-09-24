# PWA to APK and back

[![Netlify Status](https://api.netlify.com/api/v1/badges/b3ef6d98-7eb1-4cca-a7be-36623aaf8305/deploy-status)](https://app.netlify.com/sites/pwa-apk-pwa/deploys)

This is a quick Proof Of Concept for using protocol handlers to allow users to:
- open an Android app from a simple link in a PWA
- open back the PWA from the Android app

Parameters need to be sent in each step.

- [`protocol_handlers`](https://developer.mozilla.org/en-US/docs/Web/Manifest/protocol_handlers) in web app manifests
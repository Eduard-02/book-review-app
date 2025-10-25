# Book Review Mobile App

React Native + Expo client for browsing and posting book reviews.

## Highlights
- Simple email/password authentication flow with stored sessions.
- Infinite scroll feed, pull-to-refresh, and native image picker.
- Profile screen to manage your own recommendations.

## Requirements
- Node.js 20+
- Expo CLI (optional but useful)
- iOS Simulator, Android Emulator, or Expo Go on a device
- Backend API running locally or on your network

## Setup
```bash
cd mobile
npm install
```

## Connect to the API
Set the backend URL so the app can talk to it:

* Update app.json → expo.extra.apiUrl
```json
{
  "expo": {
    "extra": {
      "apiUrl": "http://localhost:5000"
    }
  }
}
```
* or add .env with EXPO_PUBLIC_API_URL=http://localhost:5000

Use http://10.0.2.2:5000 for Android emulators; use your machine’s LAN IP for real devices.

## Run it
```bash
npm run start       # opens Expo Dev Tools
npm run ios         # iOS simulator
npm run android     # Android emulator
npm run web         # optional web preview
```
Backend must be running (cd ../backend && npm run dev) before logging in.

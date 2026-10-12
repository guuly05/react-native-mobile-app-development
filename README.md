# Mobile Learning App

This is an Expo + React Native + TypeScript project for learning mobile app development.

## First run on Android

1. Open Android Studio and start either `Pixel_6_Pro` or `Medium_Phone_API_36.0` from **Device Manager**.
2. In this folder, run:

   ```powershell
   npm.cmd start
   ```

3. When Expo starts, press `a` in its terminal, or run `npm.cmd run android` in a second terminal.

The first Android build can take several minutes. Later JavaScript changes normally appear through Fast Refresh.

## Run on an Android device

Install **Expo Go** from Google Play, connect the phone and computer to the same network, then run `npm.cmd start` and scan the QR code. Enable USB debugging if you use a cable.

## iOS on Windows

Apple's iOS Simulator and local iOS native builds require macOS and Xcode. On Windows, use an iPhone with the **Expo Go** app:

1. Install Expo Go from the App Store.
2. Run `npm.cmd start`.
3. Scan the QR code with the iPhone camera, keeping both devices on the same network.

For native iOS debugging later, run the same project on a Mac with `npm run ios`, or use an Expo development build created with EAS.

## Debugging basics

- Edit `App.tsx` and save to see Fast Refresh.
- Press `j` in the Expo terminal to open the JavaScript debugger.
- Shake the emulator/device, or press `Ctrl+M` in the Android emulator, to open the developer menu.
- Use `console.log()` while learning; logs appear in the Expo terminal and debugger.
- Press `r` in the Expo terminal to reload the app.

## Useful commands

```powershell
npm.cmd start          # Start Expo's development server
npm.cmd run android    # Start Expo and open Android
npm.cmd run ios        # macOS only for the iOS Simulator
npm.cmd run web        # Run the app in a browser
npx expo doctor        # Check Expo project health
```

This workspace uses `npm.cmd` because this Windows machine blocks unsigned PowerShell script shims such as `npm.ps1`.

## Project structure

The app UI lives in `app/index.tsx`, the home route managed by Expo Router. Add new screens as route files inside `app`.

## Learning path

Start in `app/index.tsx`: change the text, adjust the lesson cards, and practice state with `useState`. Add navigation by creating additional route files inside `app`.
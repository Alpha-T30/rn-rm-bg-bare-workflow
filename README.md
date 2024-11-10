# Remove image background in React Native without requiring an external API.
## Project Setup Guide

Follow the steps below to set up your app and run it on your device.

## Prerequisites

- **Developer Options** and **USB Debugging** must be enabled on your mobile device.
- Connect your mobile device via USB to your computer.

---

## Steps

### 1. Install Dependencies

Run the following command to install the necessary dependencies:

```bash
npm install
```

### 2. Prebuild the App

Prebuild the app to prepare it for native dependencies:

```bash
npx expo prebuild
```

### 3. Run the App on Android

To run the app on an Android device, use the following command:

```bash
npx expo run:android
```

### 4. Run the App on iOS

To run the app on an iOS device, use the following command:

```bash
npx expo run:ios
```

### 5. Start the App with Expo Dev Client

For future runs, use the following command to start the app with Expo Dev Client:

```bash
npx expo start --dev-client
```

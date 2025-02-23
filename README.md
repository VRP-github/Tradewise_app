# Tradewise_app

## Overview
Tradewise_app is a mobile application built with React Native and an Express.js backend.

## Prerequisites
Make sure you have the following installed:
- **Node.js** (LTS version recommended)
- **npm** or **yarn**
- **Expo CLI** (if using Expo)
- **Android Studio** (for running the Android emulator) or a physical Android device with USB debugging enabled

## Setup
1. Clone the repository:
   ```sh
   [git clone https://github.com/your-username/Tradewise_app.git](https://github.com/VRP-github/Tradewise_app.git)
   cd Tradewise_app
   ```
2. Install dependencies for both frontend and backend:
   ```sh
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

## Running the Application
To run the **React Native** frontend and **Express.js** backend simultaneously, follow these steps:

### 1. Start the Express.js Backend
Open a terminal and navigate to the `backend` directory:
   ```sh
   cd backend
   node server.js
   ```
This will start the backend server.

### 2. Start the React Native App on Android
In a separate terminal, navigate to the `frontend` directory:
   ```sh
   cd frontend
   npm run android
   ```
If using Expo:
   ```sh
   npx expo start
   ```
Then, select `a` to run on an Android emulator.

## Troubleshooting
- If you encounter an error when running `npm run android`, ensure your Android device/emulator is properly set up.
- If `node server.js` doesn't start correctly, check if another process is using the same port and modify it in `server.js` if needed.

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-hr4DuUDnJD11mRsWPxrHsbb5vJfBlQc",
  authDomain: "gmimprotoolkit.firebaseapp.com",
  projectId: "gmimprotoolkit",
  storageBucket: "gmimprotoolkit.appspot.com",
  messagingSenderId: "930837494972",
  appId: "1:930837494972:web:8a02fd63dd093d4880a4b9",
  measurementId: "G-PMY27047PS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app };
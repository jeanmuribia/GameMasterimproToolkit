import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-hr4DuUDnJD11mRsWPxrHsbb5vJfBlQc",
  authDomain: "gmimprotoolkit.firebaseapp.com",
  projectId: "gmimprotoolkit",
  storageBucket: "gmimprotoolkit.appspot.com",
  messagingSenderId: "930837494972",
  appId: "1:930837494972:web:8a02fd63dd093d4880a4b9",
  measurementId: "G-PMY27047PS"
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics if supported
isSupported().then((isSupported) => {
  if (isSupported) {
    getAnalytics(app);
  }
});

// Initialize Firebase Auth
const auth = getAuth(app);
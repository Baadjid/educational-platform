// service/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAcJdZWs012esUHyNZQwUZUKWyNLTAUEz0",
  authDomain: "portfolio-735f0.firebaseapp.com",
  projectId: "portfolio-735f0",
  storageBucket: "portfolio-735f0.firebasestorage.app",
  messagingSenderId: "931375167920",
  appId: "1:931375167920:web:bf255bd355919bed3e3e75",
  measurementId: "G-1YZZJ54SXW"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
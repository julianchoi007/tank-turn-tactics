import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyATOoEy8mMChbLgZX35odwmH44IfVfuOxw",
  authDomain: "tank-turn-tactics-48942.firebaseapp.com",
  projectId: "tank-turn-tactics-48942",
  storageBucket: "tank-turn-tactics-48942.appspot.com",
  messagingSenderId: "233679365998",
  appId: "1:233679365998:web:308e24798063be0e08437f",
  measurementId: "G-SJHSHNB1VM",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

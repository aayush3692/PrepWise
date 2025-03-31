// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBt5pu0ktLhPblFmPZfRob8aS7K0l9i1E0",
    authDomain: "aiinterview-9453c.firebaseapp.com",
    projectId: "aiinterview-9453c",
    storageBucket: "aiinterview-9453c.firebasestorage.app",
    messagingSenderId: "628280120715",
    appId: "1:628280120715:web:c805d7be480a52bb0e8b8e",
    measurementId: "G-6GEVXF47RB"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBXU4q1UhUjxG7LGYkMkyHDVxNJAbGxcwI",
    authDomain: "prepwise-e8286.firebaseapp.com",
    projectId: "prepwise-e8286",
    storageBucket: "prepwise-e8286.firebasestorage.app",
    messagingSenderId: "457710422191",
    appId: "1:457710422191:web:e9da5aa970f6b3d6f4ac5a",
    measurementId: "G-T9WMCKMNH6"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)
import { getApps, getApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const isProd = process.env.NODE_ENV === "production";

const firebaseConfig = isProd ? {
  apiKey: process.env.NEXT_PUBLIC_PROD_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_PROD_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROD_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_PROD_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_PROD_FIREBASE_MS_ID,
  appId: process.env.NEXT_PUBLIC_PROD_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_PROD_FIREBASE_MEASUREMENT_ID,
} : {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MS_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
// const analytics = getAnalytics();

export { app, db, storage };

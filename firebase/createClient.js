import { getApps, getApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const isProd = process.env.NODE_ENV === "production";

// Public keys and config values
const firebaseConfig = isProd ? {
  apiKey: "AIzaSyCGWLBHSpbSwYdHfVUf_L58Y-1Xoi_yeIA",
  authDomain: "hg-blog-prod-21e96.firebaseapp.com",
  projectId: "hg-blog-prod-21e96",
  storageBucket: "hg-blog-prod-21e96.appspot.com",
  messagingSenderId: "823099323596",
  appId: "1:823099323596:web:6d9d2bf2d0cb41d4cc3e69",
  measurementId: "G-T0PYD414S6"
} : {
  apiKey: "AIzaSyAZH06eXkk4IOcXkPKfmOFEJWtdCRAKEwo",
  authDomain: "hg-blog-test.firebaseapp.com",
  projectId: "hg-blog-test",
  storageBucket: "hg-blog-test.appspot.com",
  messagingSenderId: "232510969344",
  appId: "1:232510969344:web:a0a56192f211e7148ceae5",
  measurementId: "G-3QD6QT3F12"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
// const analytics = getAnalytics();

export { app, db, storage };

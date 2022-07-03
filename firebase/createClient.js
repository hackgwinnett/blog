import { getApps, getApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
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
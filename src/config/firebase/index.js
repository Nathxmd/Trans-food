// Import the functions you need from the SDKs you need
// import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPqnt_g26_qI3KlpbU27wIVkEWyQbLKwQ",
  authDomain: "transfood-9e8ab.firebaseapp.com",
  projectId: "transfood-9e8ab",
  storageBucket: "transfood-9e8ab.firebasestorage.app",
  messagingSenderId: "96340384206",
  appId: "1:96340384206:web:da00eac7e0c47c1907f39f",
  measurementId: "G-CBSYRCWNES",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app };
// const auth = getAuth(app);
// const analytics = getAnalytics(app);
// const Storage = getStorage(app);
const db = getFirestore(app);
export { db };

export default firebase;

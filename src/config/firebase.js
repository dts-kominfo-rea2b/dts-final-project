// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_FIREBASE_KEY,
  authDomain: "mood-meter-ea39b.firebaseapp.com",
  projectId: "mood-meter-ea39b",
  storageBucket: "mood-meter-ea39b.appspot.com",
  messagingSenderId: "33400518008",
  appId: "1:33400518008:web:f9b8dd8c8408e33832048d",
  measurementId: "G-GKRYG6T0NE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };

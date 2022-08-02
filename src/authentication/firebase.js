// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTEjoL6l-H1Ybv1Msw7CKfrPRJYM_iGIM",
  authDomain: "ayu-final.firebaseapp.com",
  projectId: "ayu-final",
  storageBucket: "ayu-final.appspot.com",
  messagingSenderId: "247327640245",
  appId: "1:247327640245:web:07e87c9ce8660d9f934cfc"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};
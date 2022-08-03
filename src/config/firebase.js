// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnGhy_72PWY7BCcDs1ck9f6proPwB1g9E",
  authDomain: "ariefs-54d21.firebaseapp.com",
  projectId: "ariefs-54d21",
  storageBucket: "ariefs-54d21.appspot.com",
  messagingSenderId: "635495502067",
  appId: "1:635495502067:web:65755249e5231fd554e786",
  measurementId: "G-0F0MQW85BK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export {auth, analytics};
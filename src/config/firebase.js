// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7-AdVz6Osds37bFursTipqHBImALZecs",
  authDomain: "react-dev-7fcf4.firebaseapp.com",
  projectId: "react-dev-7fcf4",
  storageBucket: "react-dev-7fcf4.appspot.com",
  messagingSenderId: "219638507589",
  appId: "1:219638507589:web:e87a7580ce50cdf1091b2c",
  measurementId: "G-HVZLFVPJXL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};
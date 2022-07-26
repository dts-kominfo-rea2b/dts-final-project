// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-aPlThk9EpmfuRNwu9RU3ONnaKPwh5_g",
  authDomain: "pokebot-c39aa.firebaseapp.com",
  projectId: "pokebot-c39aa",
  storageBucket: "pokebot-c39aa.appspot.com",
  messagingSenderId: "43304377565",
  appId: "1:43304377565:web:ff86a6f71ff8d429794f34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;
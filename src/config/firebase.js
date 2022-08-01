// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5P2u1wbiyLkpX9jFckQfT0OERoKEhynM",
  authDomain: "final-project-77f5f.firebaseapp.com",
  projectId: "final-project-77f5f",
  storageBucket: "final-project-77f5f.appspot.com",
  messagingSenderId: "811061126516",
  appId: "1:811061126516:web:86b7f2bc4850ea78897821"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app
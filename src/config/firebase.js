import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: replace with your own config
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  const firebaseConfig = {
  apiKey: "AIzaSyCVCeZqJOuUtbTAOd0-An1tR7ouTWvgTSo",
  authDomain: "final-project-a6841.firebaseapp.com",
  projectId: "final-project-a6841",
  storageBucket: "final-project-a6841.appspot.com",
  messagingSenderId: "686143968508",
  appId: "1:686143968508:web:e44666760f017890cff379"
};
  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

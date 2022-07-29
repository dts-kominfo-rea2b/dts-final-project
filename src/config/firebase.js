import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: replace with your own config
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATH3urRZfs1Z3zH8pwxaS2bq-S4UcZp-c",
  authDomain: "final-project-11e2c.firebaseapp.com",
  projectId: "final-project-11e2c",
  storageBucket: "final-project-11e2c.appspot.com",
  messagingSenderId: "315382375523",
  appId: "1:315382375523:web:293b0de4d245c480d2c456"
};
  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
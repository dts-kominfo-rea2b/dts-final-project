import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: replace with your own config
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBe_wv_-KEGwp5kzmvnU4NiONTpnKesVFQ",
  authDomain: "pair-55-dts-mini-project.firebaseapp.com",
  projectId: "pair-55-dts-mini-project",
  storageBucket: "pair-55-dts-mini-project.appspot.com",
  messagingSenderId: "1011447497449",
  appId: "1:1011447497449:web:2866ecb5f479bc22eda678",
  measurementId: "G-V6RWV61HK5"
};
  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

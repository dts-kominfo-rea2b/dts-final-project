import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDLUxyTa2hWtsVTjXZG2HLe7Ui6WqPEukE',
  authDomain: 'auth-dts-final-project.firebaseapp.com',
  projectId: 'auth-dts-final-project',
  storageBucket: 'auth-dts-final-project.appspot.com',
  messagingSenderId: '451460160569',
  appId: '1:451460160569:web:1e71875a3b2849289741e8',
  measurementId: 'G-S327KDPXBV',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export { auth }

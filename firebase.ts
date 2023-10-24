// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiwyuATPmuqNYkVxK3rgnkb9q_ePAQTfw",
  authDomain: "netflix-clone-tw.firebaseapp.com",
  projectId: "netflix-clone-tw",
  storageBucket: "netflix-clone-tw.appspot.com",
  messagingSenderId: "432315247982",
  appId: "1:432315247982:web:a978ed96dbb5774837e57f"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
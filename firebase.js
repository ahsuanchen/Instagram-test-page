// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBliPWGOX7krQLHNYjgP8OMMZVVaFzr59g',
  authDomain: 'instagram-to-3a6be.firebaseapp.com',
  projectId: 'instagram-to-3a6be',
  storageBucket: 'instagram-to-3a6be.appspot.com',
  messagingSenderId: '103092494989',
  appId: '1:103092494989:web:08002cfe4db4e8b33878c4',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }

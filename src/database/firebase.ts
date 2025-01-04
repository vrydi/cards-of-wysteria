// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAMhfsKBEodjOEwUftzY6vWEig4jJWTQWU',
  authDomain: 'cards-of-wysteria.firebaseapp.com',
  projectId: 'cards-of-wysteria',
  storageBucket: 'cards-of-wysteria.firebasestorage.app',
  messagingSenderId: '945855937791',
  appId: '1:945855937791:web:2faa98c6b899624b1020ca',
  measurementId: 'G-9TW7B7B5XZ',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

export { app, analytics }

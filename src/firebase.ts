import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCY24Aaj3bBH24q6mSAZBWiy9cY8URqtIE",
  authDomain: "room-reservation-3c973.firebaseapp.com",
  projectId: "room-reservation-3c973",
  storageBucket: "room-reservation-3c973.firebasestorage.app",
  messagingSenderId: "1006979268718",
  appId: "1:1006979268718:web:edda3ff61d8050ed05e67f",
  measurementId: "G-67W5QQ318W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

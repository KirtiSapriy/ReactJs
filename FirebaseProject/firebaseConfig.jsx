// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyceoS8eJNAEWmpEitgIDnJ0h3X4q1XiU",
  authDomain: "fir-project-40382.firebaseapp.com",
  projectId: "fir-project-40382",
  storageBucket: "fir-project-40382.firebasestorage.app",
  messagingSenderId: "966233842719",
  appId: "1:966233842719:web:f65815c65d44ea59c4212a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }
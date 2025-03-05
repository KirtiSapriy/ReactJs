// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA6jW_BH9OHLD2_gBUEmZhwyoC6BtgEApw",
    authDomain: "fir-4fd37.firebaseapp.com",
    projectId: "fir-4fd37",
    storageBucket: "fir-4fd37.firebasestorage.app",
    messagingSenderId: "747158729357",
    appId: "1:747158729357:web:2f9af0580c3c97b59068c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)

export { auth, db };
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqVAcJPmPNppTo2VIT-drw1RCkanr0J5E",
  authDomain: "deploy-4938e.firebaseapp.com",
  projectId: "deploy-4938e",
  storageBucket: "deploy-4938e.appspot.com",
  messagingSenderId: "675994418968",
  appId: "1:675994418968:web:a86c738e7bc902636aa86d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
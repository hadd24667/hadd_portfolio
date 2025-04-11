import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";
import { collection, addDoc, getDocs } from "@firebase/firestore"; 


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBc57lzIaNAUbFuuqG96NV5lUaXJMnXioM",
  authDomain: "portforfilio.firebaseapp.com",
  projectId: "portforfilio",
  storageBucket: "portforfilio.firebasestorage.app",
  messagingSenderId: "208007205458",
  appId: "1:208007205458:web:c4dbc4db1d7ef41656c58b",
  measurementId: "G-JJQS341556"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, collection, addDoc, storage };
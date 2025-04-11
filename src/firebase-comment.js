import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDWEqQIK2e-Em7DFXBEMzaif5vhMC29QLI",
    authDomain: "hanhphq-bdaae.firebaseapp.com",
    projectId: "hanhphq-bdaae",
    storageBucket: "hanhphq-bdaae.firebasestorage.app",
    messagingSenderId: "106330968467",
    appId: "1:106330968467:web:de1059c5af54c097cf5866",
    measurementId: "G-TGB8GG53QK"
  };

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };
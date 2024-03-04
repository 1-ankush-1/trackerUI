import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Import your Firebase configuration
import firebaseConfig from "./firebase.config";
import { getAuth } from "firebase/auth";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);
export const auth = getAuth(app);

export default db;
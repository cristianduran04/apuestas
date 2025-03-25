// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // 🔥 Importar Firestore
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi4stZjiS4A9nLnn9jFS5BGaI7eT8joek",
  authDomain: "apuestas-9f2ba.firebaseapp.com",
  projectId: "apuestas-9f2ba",
  storageBucket: "apuestas-9f2ba.appspot.com", // ❗ Había un error en el dominio
  messagingSenderId: "741634326871",
  appId: "1:741634326871:web:0f93e9581dda4f2c7e7e12",
  measurementId: "G-VYV51NCRCN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // 🔥 Inicializar Firestore
const analytics = getAnalytics(app);

// Export Firestore
export { db };

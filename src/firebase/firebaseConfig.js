// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDi4stZjiS4A9nLnn9jFS5BGaI7eT8joek",
  authDomain: "apuestas-9f2ba.firebaseapp.com",
  projectId: "apuestas-9f2ba",
  storageBucket: "apuestas-9f2ba.firebasestorage.app",
  messagingSenderId: "741634326871",
  appId: "1:741634326871:web:0f93e9581dda4f2c7e7e12",
  measurementId: "G-VYV51NCRCN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Exportar la base de datos
export { db };

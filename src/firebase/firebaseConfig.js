// Importar Firebase y Firestore
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA6-yruvoPpWdlFpRYkFGF7UzSc22__Sdo",
  authDomain: "apuesta-c4281.firebaseapp.com",
  projectId: "apuesta-c4281",
  storageBucket: "apuesta-c4281.appspot.com",
  messagingSenderId: "1072201658218",
  appId: "1:1072201658218:web:cbd383b9c905454448bf13",
  measurementId: "G-1WWFJ45K2P"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Exportar la base de datos
export { db };

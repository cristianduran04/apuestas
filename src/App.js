
import React, { useState, useEffect } from "react";
import { db } from "./firebase/firebaseConfig";
import BetForm from "./components/BetForm";
import PaymentInfo from "./components/PaymentInfo";
import { collection, getDocs } from "firebase/firestore";
import "./styles/styles.css";
import ParticipantsList from "./components/ParticipantsList";

const App = () => {
    const [apuestas, setApuestas] = useState([]);

    const cargarApuestas = async () => {
        const querySnapshot = await getDocs(collection(db, "apuestas"));
        const apuestasArray = querySnapshot.docs.map(doc => doc.data());
        setApuestas(apuestasArray);
    };

    useEffect(() => {
        cargarApuestas();
    }, []);

    return (
        <div className="container">
            <h1>Apuesta el marcador del partido</h1>
            <BetForm cargarApuestas={cargarApuestas} />
            <PaymentInfo />
            <ParticipantsList apuestas={apuestas} />
        </div>
    );
};

export default App;

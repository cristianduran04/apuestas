import React, { useState } from "react";
import { db, collection, addDoc } from "../firebase/firebaseConfig";

const BetForm = ({ cargarApuestas }) => {
    const [name, setName] = useState("");
    const [colombia, setColombia] = useState("");
    const [brasil, setBrasil] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || colombia === "" || brasil === "") {
            alert("Completa todos los campos.");
            return;
        }

        try {
            await addDoc(collection(db, "apuestas"), {
                name,
                marcador: `${colombia} - ${brasil}`,
                timestamp: new Date()
            });

            alert("Apuesta guardada. Recuerda hacer el pago.");
            setName("");
            setColombia("");
            setBrasil("");
            cargarApuestas();
        } catch (error) {
            console.error("Error al guardar:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Tu nombre" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="number" placeholder="Goles de Colombia" value={colombia} onChange={(e) => setColombia(e.target.value)} required />
            <input type="number" placeholder="Goles de Brasil" value={brasil} onChange={(e) => setBrasil(e.target.value)} required />
            <button type="submit">Enviar Apuesta</button>
        </form>
    );
};

export default BetForm;

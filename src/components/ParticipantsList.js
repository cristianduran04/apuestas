import React from "react";

const ParticipantsList = ({ apuestas }) => {
    return (
        <div>
            <h2>Participantes</h2>
            <ul>
                {apuestas.map((apuesta, index) => (
                    <li key={index}>{apuesta.name} - {apuesta.marcador}</li>
                ))}
            </ul>
        </div>
    );
};

export default ParticipantsList;

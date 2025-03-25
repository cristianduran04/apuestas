import React from "react";

const ParticipantsList = ({ apuestas }) => {
    return (
        <div>
            <h2>Participantes</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Colombia</th>
                        <th>Paraguay</th>
                    </tr>
                </thead>
                <tbody>
                    {apuestas.map((apuesta, index) => {
                        const [colombia, paraguay] = apuesta.marcador.split(" - ");
                        return (
                            <tr key={index}>
                                <td>{apuesta.name}</td>
                                <td>{colombia}</td>
                                <td>{paraguay}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ParticipantsList;


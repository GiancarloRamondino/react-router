import axios from "axios";
import { useEffect, useState } from "react";

function Lista() {

    const [personaggi, setPersonaggi] = useState([]);
    
    useEffect(() => {
        axios
        .get("https://rickandmortyapi.com/api/character")
        .then((response) => {
            setPersonaggi(response.data.results);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
    }, []);
    
    return (
        <div>
        <h1>Lista Personaggi</h1>
        <ul>
            {personaggi.map((personaggio) => (
            <li key={personaggio.id}>
                <img src={personaggio.image} alt={personaggio.name} />
                <p>{personaggio.name}</p>
            </li>
            ))}
        </ul>
        </div>
    );
}

export default Lista;
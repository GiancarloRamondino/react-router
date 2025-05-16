import { useParams } from "react-router-dom";   
import React, { useEffect, useState } from "react";
import axios from "axios";


function SinglePers() {
    const { id } = useParams();
    const [personaggio, setPersonaggio] = useState([]);

    const getSinglePers = ()  =>{
        axios
           .get(`https://rickandmortyapi.com/api/character/${id}`)
           .then((response) => {
            setPersonaggio(response.data);
        });
    }; 

    useEffect(() => {
        getSinglePers();
    }, [id]);
            
    return (
        <div>
            <h1>{personaggio.name}</h1>
            <img src={personaggio.image} alt={personaggio.name} />
        </div>
    );
}

export default SinglePers;
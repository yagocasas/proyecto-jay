import React, { useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getCharacter } from '../redux/characters/characterFunctions';

const CharacterDetails = () => {
    
    const { name } = useParams();
    const dispatch = useDispatch();
    const {characters, isLoading, error} = useSelector((state) => state.characters);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getCharacter(name));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
  return (
    <div>
        {isLoading && ("Cargando...")}
        {error && ("Error al cargar")}
        {characters && <div> 
                    <h2>{characters.name}</h2>
                    <img src={characters.img} alt={characters.name} />
                    <p>{characters.gender}</p>
                    <p>{characters.weapons}</p>
                    <p>{characters.role}</p>
                    <p>Componente Origin</p>
                    <button onClick={() => navigate("/characters")}>Back</button>
                 </div>}
    </div>
  )
}

export default CharacterDetails
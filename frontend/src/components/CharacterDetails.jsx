import React, { useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { filterCharacter, getCharacters } from '../redux/characters/charactersFunctions';
import ReusableButton from './Reusablebutton/Button';
import ReusableNavbar from './Reusablenavbar/Navbar';
import './styles/characterDetails.scss'

const CharacterDetails = () => {
    
    const { name } = useParams();
    const dispatch = useDispatch();
    const {character,characters , isLoading, error} = useSelector((state) => state.characters);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(filterCharacter(name, characters));
    },[]);

  return (
    <div className='character--main'>
    <ReusableNavbar clase='characterDetail--navbar'/>
        {isLoading && ("Cargando...")}
        {error && ("Error al cargar")}
        {character && <div className='character'>
                    <div className='character--card'>
                      <div className='character--card--img'>
                        <h2>{character.name}</h2>
                        <div>
                        <img src={character.img} alt={character.name} />
                        </div>
                      </div>
                      <div className='character--card--text'>
                        <p>{character.gender}</p>
                        <p>{character.weapons}</p>
                        <p>{character.role}</p>
                      </div>
                    </div>
                    
                    <p>Componente Origin</p>
                    <ReusableButton texto='Back' funcion={() => navigate('/characters')} clase='back--button'/>
                </div>}
    </div>
  )
}

export default CharacterDetails
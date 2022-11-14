import React, { useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getCharacter } from '../redux/characters/characterFunctions';
import ReusableButton from './Reusablebutton/Button';
import ReusableNavbar from './Reusablenavbar/Navbar';
import './styles/characterDetails.scss'

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
    <div className='character--main'>
    <ReusableNavbar clase='characterDetail--navbar'/>
        {isLoading && ("Cargando...")}
        {error && ("Error al cargar")}
        {characters && <div className='character'>
                    <div className='character--card'>
                      <div className='character--card--img'>
                        <h2>{characters.name}</h2>
                        <div>
                        <img src={characters.img} alt={characters.name} />
                        </div>
                      </div>
                      <div className='character--card--text'>
                        <p>{characters.gender}</p>
                        <p>{characters.weapons}</p>
                        <p>{characters.role}</p>
                      </div>
                    </div>
                    
                    <p>Componente Origin</p>
                    <ReusableButton texto='Back' funcion={() => navigate('/characters')} clase='back--button'/>
                </div>}
    </div>
  )
}

export default CharacterDetails
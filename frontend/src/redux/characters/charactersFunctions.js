
import { API } from "../../shared/services/api";

export const getCharacters = (name) => async(dispatch) =>{
    dispatch({type: 'gettingCharacters'})
    
    try {
        const result = await API.get("/characters"+name);
        dispatch({type:'getCharacters', payload: result.data})
    } catch (error) {
        dispatch({type: 'error', payload: error.message});
    }
}
export const filterCharacter = (name, characters) => async(dispatch) =>{
    dispatch({type: 'gettingCharacter'})
    try {
        const filterCharacters = characters.filter((character) => character.name === name)
        dispatch({type:'getCharacter', payload: filterCharacters[0]})
    } catch (error) {
        dispatch({type: 'errorCharacter', payload: error.message});
    }
}
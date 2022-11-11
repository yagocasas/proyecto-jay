import axios from "axios";

export const getCharacter = (name) => async(dispatch) =>{
    dispatch({type: 'gettingCharacters'})
    
    try {
        const result = await axios.get("http://localhost:5000/characters/getbyname/"+name);
        dispatch({type:'getCharacters', payload: result.data})
    } catch (error) {
        dispatch({type: 'errorCharacters', payload: error.message});
    }
}

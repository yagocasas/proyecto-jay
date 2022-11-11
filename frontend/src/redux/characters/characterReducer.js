const INITIAL_STATE = {
    characters: [],
    isLoading: false,
    error: false
}

const characterReducer = (state = INITIAL_STATE, action) =>{
    switch (action.type){
        case "gettingCharacters":
            return {...state, isLoading:true};
        case "getCharacters":
            return {...state, isLoading:false, characters: action.payload};
        case "error":
            return {...state, isLoading:false, characters: [], error: action.payload};      
        default:
            return state;
    }
}

export default characterReducer;
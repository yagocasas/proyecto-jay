const INITIAL_STATE = {
    characters: [],
    character:{},
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
        case "gettingCharacter":
            return {...state, isLoading:true};
        case "getCharacter":
            return {...state, isLoading:false, character: action.payload};
        case "errorCharacter":
            return {...state, isLoading:false, character: {}, error: action.payload};


        default:
            return state;
    }
}

export default characterReducer;
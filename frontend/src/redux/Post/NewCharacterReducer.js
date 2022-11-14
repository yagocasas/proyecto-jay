const INITIAL_STATE = {
    isLoading: false,
    error: false
}
export const newCharacterReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case "postingCharacter":
            return {...state, isLoading: true, error: false };
        case "postCharacter": 
        return{...state, isLoading: false, error: false};
        case "postingError":
            return{...state, isLoading: false, error: action.payload }
        default:
            return state;
    }
}

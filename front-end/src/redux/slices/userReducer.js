import { GET_USERPROFILE, EDIT_USERNAME, LOGOUT } from "./types"

// Initialisation du state pour les données utilisateur
const initialState = {
    status: 'VOID',
    userData: {}
}
// Reducer pour les données utilisateur get et edit//
export const userReducer = (state = initialState, action ) => {
    console.log("Updating userData to", action.payload);

    switch (action.type) {
        case GET_USERPROFILE:
            return {
                ...state,
                status: 'SUCCEEDED',
                userData: action.payload
            }
            case EDIT_USERNAME: 
            console.log("Action payload:", action.payload);
          
            console.log("Previous state:", state);
            const newState = {
              ...state,
              status: "MODIFIED",
              userData: {
                ...state.userData,
                userName: action.payload
              } 
            };
            console.log("New state:", newState);
            return newState;
        case LOGOUT: {
            return initialState;  
        }   
        default:
            return state;    
    }
}

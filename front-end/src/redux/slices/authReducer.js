import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, GET_USERPROFILE, EDIT_USERNAME } from './types'; 


const initialState = {
    token: null,
    error: null,
    userProfile: null,
    userName: null,
  };
  
  export const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_SUCCESS:
        return {
          ...state,
          token: action.payload,
          error: null,
        };
      case LOGIN_FAIL:
        return {
          ...state,
          token: null,
          error: action.payload,
        };
      case LOGOUT:
        return {
          ...state,
          token: null,
          userProfile: null,
          userName: null,
        };
      case GET_USERPROFILE:
        return {
          ...state,
          userProfile: action.payload,
        };
      case EDIT_USERNAME:
        return {
          ...state,
          userName: action.payload,
        };
      default:
        return state;
    }
  };
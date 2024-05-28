import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "./types";

export const loginSuccess = (user) => {
    return {
        type: LOGIN_SUCCESS,
        payload: user,
    }
}

export const loginFailed = (error) => {
    return {
        type: LOGIN_FAIL,
        payload: error,
    }
}

export const logout = () => {
    return {
        type: LOGOUT,
    }
}
import { AUTH_LOGIN_SUCCESS, AUTH_LOGOUT_SUCCESS, AUTH_LOGIN_FAILURE, AUTH_RESET } from "../types";
import { logIn as apiLogIn, logOut as apiLogOut } from "../../api";

export const logIn = (username, password) => async(dispatch) => {
    const res = await apiLogIn(username, password);
    
    if (res.data === 'No user found.' || password === '' || username === '') {
        dispatch({
            type: AUTH_LOGIN_FAILURE
        })
    } else {
        dispatch({
            type: AUTH_LOGIN_SUCCESS,
            payload: {username}
        })
    }
}

export const logOut = () => async(dispatch) => {
    
    const res = await apiLogOut;
    dispatch({
        type: AUTH_LOGOUT_SUCCESS,
        payload: res.data
    })
}

export const resetAfterRedirect = () => async (dispatch) => {
    dispatch({
        type: AUTH_RESET
    })
}
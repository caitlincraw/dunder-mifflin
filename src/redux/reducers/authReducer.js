import { AUTH_LOGIN_SUCCESS, AUTH_LOGIN_FAILURE, AUTH_LOGOUT_SUCCESS } from '../types';

const initialState = {
    username: "",
    isLoggedIn: false,
    failedAuth: false,
};
  
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_LOGIN_SUCCESS:
            return {
                ...state,
                username: action.payload.username,
                isLoggedIn: true,
                failedAuth: false,
            };
        case AUTH_LOGIN_FAILURE:
            return {
                ...initialState,
                failedAuth: true
            };
        case AUTH_LOGOUT_SUCCESS:
            return {
                ...state,
                username: "",
                isLoggedIn: false
            };
        default:
            return state;
    }
};
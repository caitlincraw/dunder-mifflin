import axios from "axios";
import { getBackendUrl } from "./apiConfig";

export async function logIn(username, password) {
    return axios({
        method: 'POST',
        data: {
            username,
            password,
        },
        withCredentials: true,
        url: `${getBackendUrl()}/login`,
    });
}

export async function logOut() {
    return axios({
        method: 'GET',
        withCredentials: true,
        url: `${getBackendUrl()}/logout`,
    });
}

export async function register(username, password) {
    return axios({
        method: 'POST',
        data: {
            username,
            password
        },
        withCredentials: true,
        url: `${getBackendUrl()}/register`,
    })
}

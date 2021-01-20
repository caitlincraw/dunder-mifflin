const { REACT_APP_PROTOCOL, REACT_APP_HOST, REACT_APP_PORT } = process.env;

export function getBackendUrl() {
    return `${REACT_APP_PROTOCOL}://${REACT_APP_HOST}:${REACT_APP_PORT}`
    // return "http://localhost:1725"
}

const { NODE_ENV, REACT_APP_PROTOCOL, REACT_APP_HOST, REACT_APP_PORT } = process.env;

export function getBackendUrl() {
    if (NODE_ENV === "development") {
        return `${REACT_APP_PROTOCOL}://${REACT_APP_HOST}:${REACT_APP_PORT}`;
    }
    return `${REACT_APP_PROTOCOL}://${REACT_APP_HOST}`;
}
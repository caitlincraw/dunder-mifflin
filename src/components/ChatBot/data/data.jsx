// const baseURL = "https://michael-scott-quotes-api.herokuapp.com/randomQuote";
const baseURL = "https://officeapi.dev/api/characters/5e93b4a43af44260882e33b0";

export const getScott = async () => {
    let data = await fetch (`${baseURL}`);
    data = await data.json();
    console.log (data);
    let test = "testing123";
    return test;
}
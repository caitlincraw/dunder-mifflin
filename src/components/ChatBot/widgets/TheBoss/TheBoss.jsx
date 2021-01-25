import React from 'react';
import axios from 'axios';
import { getScott } from '../../data/data';

// export default class TheBoss extends React.Component {
//     state = {
//         quote: []
//     }
//     componentDidMount() {
//         axios.get(`https://michael-scott-quotes-api.herokuapp.com/randomQuote`)
//             .then(res => {
//                 const quote = res.data;
//                 this.setState({ quote });
//             })
//     }

//     render() {
//         return (
//             <div>
//                 {this.state.quote.map(quote => <blockquote> {quote} </blockquote>)}
//             </div>
//         )
//     }
// }


console.log("inside the widget")

// const TheBoss = async () => {
//     let data = await fetch(`${baseURL}`);
//     data = await data.json();
//     console.log(data);
//     return data;
// }
// let data = await fetch (`${baseURL}`);
// data = await data.json();
// console.log (data);
// return data;

// return (
//     <div>
//         <h1>I have no idea</h1>
//     </div>
// )



const TheBoss = () => {
    const getQuote = async () => {
        await getScott();
    }
    getQuote();

    return (
        <div></div>
    )
}

export default TheBoss;
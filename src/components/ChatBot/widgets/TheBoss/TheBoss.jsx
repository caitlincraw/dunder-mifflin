import React, { useState } from 'react';
import { getScott } from '../../data/data';

console.log("inside the widget")


const TheBoss = () => {
    const[quote, setQuote] = useState("");


    const getQuote = async () => {
        const quote = await getScott();
        setQuote(quote);
    }
    getQuote();

    return (
        <div><blockquote>{setQuote}</blockquote></div>
    )
}

export default TheBoss;
import React from 'react';
import Chatbot from 'react-chatbot-kit';

import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';

function Dwight () {
    return (
        <div>
            <div style = {{ maxWidth: "300px"}}>
                <Chatbot
                config={config}
                actionProvider={ActionProvider}
                messageParser={MessageParser}
                />
            </div>
        </div>
    );
};


export default Dwight;
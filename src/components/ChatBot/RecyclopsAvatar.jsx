import React from 'react';

import { ReactComponent as RecyclopsIcon } from '../ChatBot/icons/dwight.svg'

const RecyclopsAvatar = () => {
    return (
        <div className="react-chatbot-kit-chat-bot-avatar">
            <div className="react-chatbot-kit-chat-bot-avatar-container">
                <RecyclopsIcon className="react-chatbot-kit-chat-bot-avatar-icon" />
            </div>
        </div>
    );
};

export default RecyclopsAvatar;
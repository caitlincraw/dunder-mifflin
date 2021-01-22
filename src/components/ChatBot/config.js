import React from 'react';
import { createChatBotMessage } from "react-chatbot-kit";

import RecyclopsAvatar from '../ChatBot/RecyclopsAvatar'

const config = {
  botName: "Dwight Schrute",
  initialMessages: [createChatBotMessage(`Welcome to Dunder Mifflin, where I, Dwight Schrute, the #1 salesman and 
  assistant manager to the regional manager, will tell you what paper you need to buy.`)
  ],
  customComponents: {
    botAvatar: (props) => <RecyclopsAvatar {...props}/>
  },

}

export default config
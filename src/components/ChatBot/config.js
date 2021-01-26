import React from 'react';
import { createChatBotMessage } from "react-chatbot-kit";

import RecyclopsAvatar from '../ChatBot/RecyclopsAvatar'

const config = {
  botName: "Dwight Schrute",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#090979",
    },
    chatButton: {
      backgroundColor: "#090979"
    }
  },
  initialMessages: [createChatBotMessage(`Welcome to Dunder Mifflin, where I, Dwight Schrute, the #1 salesman and 
  assistant manager to the regional manager, will tell you what paper you need to buy.`)
  ],
  customComponents: {
    botAvatar: (props) => <RecyclopsAvatar {...props} />,
    header: () => <div className="dwight-bot-header">Dwight Schrute</div>

  },

}

export default config
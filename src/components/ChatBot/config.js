import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "Dwight Schrute",
  initialMessages: [createChatBotMessage(`Welcome to Dunder Mifflin, where I, Dwight Schrute, the #1 salesman and 
  assistant manager to the regional manager, will tell you what paper you need to buy.`)]
}

export default config
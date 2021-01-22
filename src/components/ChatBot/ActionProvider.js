class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }

    greet = () => {
      const message = this.createChatBotMessage("I don't have time for greetings idiot, I am here to sell you paper so state your business needs!");
      this.addMessageToState(message);
    }

    blank = () => {
      const message = this.createChatBotMessage(`I can help you if you don't anything, IDIOT!.`);
      this.addMessageToState(message);
    }

    who = () => {
      
    }

    addMessageToState = (message) => {
      this.setState(prevState => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    };

  }
  
  export default ActionProvider;
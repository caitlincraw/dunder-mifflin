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

    addMessageToState = (message) => {
      this.setState(prevState => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    };

  }
  
  export default ActionProvider;
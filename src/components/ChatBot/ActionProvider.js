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
      const message = this.createChatBotMessage(`I can't help you if you don't say anything, DOES ANYONE HAVE HALF A BRAIN AROUND HERE???.`);
      this.addMessageToState(message);
    }

    theboss = () => {
      const message = this.createChatBotMessage(
        "In word's of the worlds best boss: ",
        {
          widget: "theBoss",
          loading:true,
          terminateLoading: true,
          withAvatar: true,
        }
      );
      this.addMessageToState(message);
    };

//theboss, pam, paper
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
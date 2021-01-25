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

    theboss2 = () => {
      const message = this.createChatBotMessage(`Michael Scott is the fit to rule the world. And I will be his assistant manager.`);
      this.addMessageToState(message);
    }

    paper = () => {
      const message = this.createChatBotMessage(`Paper is made from trees.`);
      this.addMessageToState(message);
    }

    pam = () => {
      const message = this.createChatBotMessage(`Pam is just the nicest, I don't understand what she sees in Jim. He is the inferior male.`);
      this.addMessageToState(message);
    }

    // theboss = () => {
    //   const message = this.createChatBotMessage(
    //     "In word's of the worlds best boss: ",
    //     {
    //       widget: "theBoss",
    //       loading:true,
    //       terminateLoading: true,
    //       withAvatar: true,
    //     }
    //   );
    //   this.addMessageToState(message);
    // };

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
class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      console.log(message)
      const lowercase = message.toLowerCase()

      if (message.length === 0) {
        this.actionProvider.blank();
      }

      if (lowercase.includes("hello") || lowercase.includes("hi")) {
        this.actionProvider.greet();
      }

      if (lowercase.includes("michael")) {
        this.actionProvider.theboss();
      }

      if (lowercase.includes("paper")) {
        this.actionProvider.paper();
      }

      if (lowercase.includes("pam")) {
        this.actionProvider.pam();
      }

      if (lowercase.includes("who")) {
        this.actionProvider.myCreators();
      }
      
    }
  }
  
  export default MessageParser;
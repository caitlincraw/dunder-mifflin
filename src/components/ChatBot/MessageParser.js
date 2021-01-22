class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      console.log(message)
      const lowercase = message.toLowerCase()

      if (lowercase.includes("hello")) {
        this.actionProvider.greet();
      }

      if (lowercase.includes("michael")) {
        this.actionProvider.theboss();
      }

      if (lowercase.includes("who")) {
        this.actionProvider.myCreators();
      }

      if (message.includes("")) {
        this.actionProvider.blank();
      }
      
    }
  }
  
  export default MessageParser;
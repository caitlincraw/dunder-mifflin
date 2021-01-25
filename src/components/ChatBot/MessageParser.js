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

      else if (lowercase.includes("hello") || lowercase.includes("hi")) {
        this.actionProvider.greet();
      }

      else if (lowercase.includes("michael")) {
        this.actionProvider.theboss2();
      }

      else if (lowercase.includes("paper")) {
        this.actionProvider.paper();
      }

      else if (lowercase.includes("pam")) {
        this.actionProvider.pam();
      }

      // else if (lowercase.includes("who")) {
      //   this.actionProvider.myCreators();
      // }
      
      else {
        this.actionProvider.dwightQuotes();
      }

    }
  }
  
  export default MessageParser;
// chatbot.js

export default class Chatbot {
  constructor() {
    this.conversation = [];
  }

  addMessage(message, sender = "user") {
    this.conversation.push({ message, sender });
    return this.getBotResponse(message);
  }

  getBotResponse(userMessage) {
    // Basic example of response logic (can replace this with a more complex NLP logic)
    let botMessage = "Sorry, I don't understand.";
    
    if (userMessage.includes("hello")) {
      botMessage = "Hello! How can I assist you today?";
    } else if (userMessage.includes("help")) {
      botMessage = "Sure! I am here to help. Ask me anything.";
    }

    // Add bot response to conversation
    this.conversation.push({ message: botMessage, sender: "bot" });
    return botMessage;
  }

  getConversation() {
    return this.conversation;
  }
}

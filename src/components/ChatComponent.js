import React, { useState } from "react";
import Chatbot from "./chatbot";
import "./ChatComponent.css";

const chatBotInstance = new Chatbot();

function ChatComponent() {
  const [userInput, setUserInput] = useState("");
  const [conversation, setConversation] = useState(chatBotInstance.getConversation());

  const handleSendMessage = () => {
    if (userInput.trim()) {
      const botResponse = chatBotInstance.addMessage(userInput);
      setConversation(chatBotInstance.getConversation());
      setUserInput(""); // Clear the input
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-window">
        {conversation.map((entry, index) => (
          <div key={index} className={`chat-bubble ${entry.sender}`}>
            {entry.message}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatComponent;

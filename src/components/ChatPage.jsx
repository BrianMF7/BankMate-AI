import React from "react";
import ChatComponent from "./ChatComponent";

const ChatPage = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f0f0f0",  // Light background color
    }}>
      <ChatComponent />
    </div>
  );
};

export default ChatPage;

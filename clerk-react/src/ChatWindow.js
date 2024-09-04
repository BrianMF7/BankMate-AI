import React, { useState } from 'react';
import Message from './Message';
import InputBox from './InputBox';

const ChatWindow = () => {
    const [messages, setMessages] = useState([]);

    const handleSend = async (text) => {
        const newMessage = { text, sender: 'user' };
        setMessages([...messages, newMessage]);

        // Call AI service
        const botResponse = await fetchBotResponse(text);
        setMessages([...messages, newMessage, { text: botResponse, sender: 'bot' }]);
    };

    return (
        <div className="chat-window">
            {messages.map((msg, index) => (
                <Message key={index} text={msg.text} sender={msg.sender} />
            ))}
            <InputBox onSend={handleSend} />
        </div>
    );
};

export default ChatWindow;

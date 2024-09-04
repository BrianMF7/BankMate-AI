import React, { useState } from 'react';

const InputBox = ({ onSend }) => {
    const [text, setText] = useState('');

    const handleSend = () => {
        onSend(text);
        setText('');
    };

    return (
        <div className="input-box">
            <input 
                type="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                placeholder="Type a message..."
            />
            <button onClick={handleSend}>Send</button>
        </div>
    );
};

export default InputBox;

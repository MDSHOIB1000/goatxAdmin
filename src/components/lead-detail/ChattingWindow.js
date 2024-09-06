import React, { useState } from 'react';

function ChattingWindow() {
    const [messages, setMessages] = useState([
        {
            sender: 'CMS',
            text: `Dear ,

Greetings from Urban Tree Group!

      
Highlights of the project:`
        }
    ]);
    const [newMessage, setNewMessage] = useState('');

    const handleSend = () => {
        if (newMessage.trim()) {
            setMessages([...messages, { sender: 'You', text: newMessage }]);
            setNewMessage('');
        }
    };
    const setNewMessageKey = (e) => {
        if (e.key === 'Enter') {
            handleSend()
        }
    };

    return (
        <div className="chat-window">
            {/* <div className="chat-header">
                Mobile Phone - +91 0885174628
            </div> */}
            <div className="chat-body">
                {messages.map((message, index) => (
                    <div key={index} className={`message ${message.sender === 'You' ? 'sent' : 'received'}`}>
                        <div className="message-sender">{message.sender}</div>
                        <div className="message-text">{message.text}</div>
                    </div>
                ))}
            </div>
            <div className="chat-footer">
                <input
                    type="text"
                    placeholder="Type a message"
                    value={newMessage}
                    onKeyDown={setNewMessageKey}
                    onChange={(e) => setNewMessage(e.target.value)}
                />
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    );
}

export default ChattingWindow;

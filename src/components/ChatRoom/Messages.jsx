import React from 'react';
import './ChatRoom.css';

const Messages = ({ messages }) => (
    <ul className="messages">
        {messages.map((msg, index) => <li key={index}>{msg.user}: {msg.message}</li>)}
    </ul>
);

export default Messages;
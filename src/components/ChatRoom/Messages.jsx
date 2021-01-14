import React from 'react';
import './ChatRoom.css';

const Messages = (props) => (
    <ul className="messages">
        {props.messages.map((msg, index) => <li key={index}>{msg.user}: {msg.message}</li>)}
    </ul>
);

export default Messages;
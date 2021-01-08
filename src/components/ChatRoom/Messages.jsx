import React from 'react';
import './ChatRoom.css';

const Messages = (props) => (
    <ul className="messages">
        {props.messages.map((message, index) => <li key={index}>{message}</li>)}
    </ul>
);

export default Messages;
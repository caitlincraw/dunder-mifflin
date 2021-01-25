import React, {useEffect, useRef} from 'react';
import './ChatRoom.css';

const Messages = ({ messages }) => {

    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }
  
    useEffect(() => {
      scrollToBottom()
    }, [messages]);

    return (
        <ul className="messages">
            {messages.map((msg, index) => <li key={index}><b>{msg.user}:</b> {msg.message}</li>)}
            <div ref={messagesEndRef} />
        </ul>
    )
};

export default Messages;
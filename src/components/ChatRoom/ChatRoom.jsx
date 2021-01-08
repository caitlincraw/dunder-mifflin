import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import Messages from "./Messages";
import './ChatRoom.css';

const ENDPOINT = "http://127.0.0.1:1725";

function ChatRoom() {

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const socket = io(ENDPOINT, {});
    socket.on('message', message => {
      setMessages(msgs => [ ...msgs, message ]);
    });

    // CLEAN UP THE EFFECT.. closes the connection when the component unmounts
    return () => socket.disconnect();
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    const socket = io(ENDPOINT, {});
    if(message) {
      socket.emit('sendMessage', message);
      setMessage('');
    }
  }

  return (
    <div className="view">
        <div className="chatroom-container">
            <div className="cr-title">
              <h4 className="title-name">WE LOVE PAPER CHATROOM</h4>
              <button className="title-x">X</button>
            </div>
            <div className="message-board">
              <Messages messages={messages} />
            </div>
            <form className="cr-form" action="">
                <input 
                  id="m" 
                  autoComplete="off"
                  value={message} 
                  onChange={(e) => setMessage(e.target.value)}  
                />
                <button onClick={(e) => sendMessage(e)}> 
                  Send Message
                </button>
            </form>
        </div>
    </div>
  );
}

export default ChatRoom;
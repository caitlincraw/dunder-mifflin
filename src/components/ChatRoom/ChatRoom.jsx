import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import Chat from "./Chat";
import Users from "./Users";
import './ChatRoom.css';

const ENDPOINT = "http://127.0.0.1:1725";

function ChatRoom() {

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [seeUsers, setSeeUsers] = useState(false);

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

  const showUsers = () => {
    setSeeUsers(true);
  }

  const hideUsers = () => {
    setSeeUsers(false);
  }

  return (
    <div className="view">
      <Chat message={message} messages={messages} onChange={(e) => setMessage(e.target.value)} usersOnClick={() => showUsers()} messageOnClick={(e) => sendMessage(e)}  />
      {seeUsers ? <Users onClick={() => hideUsers()} /> : null}
    </div>
  );
}

export default ChatRoom;
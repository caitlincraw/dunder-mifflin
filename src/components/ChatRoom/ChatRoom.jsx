import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import Chat from "./Chat";
import Users from "./Users";
import './ChatRoom.css';
import { Howl } from 'howler';
import moo from './audio/moo.mp3';
import phoneRinging from './audio/phone-ringing.mp3';
import meow from './audio/meow.mp3'

const ENDPOINT = "http://127.0.0.1:1725";

function ChatRoom() {

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [seeUsers, setSeeUsers] = useState(false);
  const [playSound, setPlaySound] = useState(true);

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
    if(playSound) {
      catSound.play();
    }
  }

  const showUsers = () => {
    setSeeUsers(true);
  }

  const hideUsers = () => {
    setSeeUsers(false);
  }

  // Setup all of the new Howls
  const cowSound = new Howl({
    src: [moo]
  });

  const phoneSound = new Howl({
    src: [phoneRinging]
  });

  const catSound = new Howl({
    src: [meow]
  });

  return (
    <div className="view">
      <Chat message={message} messages={messages} onChange={(e) => setMessage(e.target.value)} usersOnClick={() => showUsers()} messageOnClick={(e) => sendMessage(e)}  />
      {seeUsers ? <Users onClick={() => hideUsers()} /> : null}
    </div>
  );
}

export default ChatRoom;
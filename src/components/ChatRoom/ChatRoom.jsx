import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import Chat from "./Chat";
import Users from "./Users";
import LeaveChatRoom from "./LeaveChatRoom";
import SoundEnablerPopUp from "./SoundEnablerPopUp";
import './ChatRoom.css';
import { Howl } from 'howler';
import moo from './audio/moo.mp3';
import phoneRinging from './audio/phone-ringing.mp3';
import meow from './audio/meow.mp3'
import soundIcon from '../images/sound.png';

const ENDPOINT = "http://127.0.0.1:1725";

function ChatRoom() {

  // chatroom state variables
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [seeUsers, setSeeUsers] = useState(false);
  const [playSound, setPlaySound] = useState(true);
  const [soundEnabler, setSoundEnabler] = useState(false);
  const [leaveChat, setLeaveChat] = useState(false);

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
    // declare socket within scope
    const socket = io(ENDPOINT, {});
    // only send a message if there is a message
    if(message) {
      socket.emit('sendMessage', message);
      setMessage('');
      //only play sound if sound is enabled. enabled by default.
      if(playSound) {
        catSound.play();
      }
    }
  }

  const enable = () => {
    setPlaySound(true);
    setSoundEnabler(false);
  }

  const disable = () => {
    setPlaySound(false);
    setSoundEnabler(false);
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
      <Chat message={message} messages={messages} leaveChat={() => setLeaveChat(true)} onChange={(e) => setMessage(e.target.value)} usersOnClick={() => setSeeUsers(true)} messageOnClick={(e) => sendMessage(e)}  />
      {leaveChat ? <LeaveChatRoom onClick={() => setLeaveChat(false)} /> : null}
      {seeUsers ? <Users onClick={() => setSeeUsers(false)} /> : null}
      <button className="soundEnabler" onClick={() => setSoundEnabler(true)}><img src={soundIcon} style={{width: "2rem"}}></img></button>
      {soundEnabler ? <SoundEnablerPopUp onClick={() => setSoundEnabler(false)} enable={enable} disable={disable} /> : null}
    </div>
  );
}

export default ChatRoom;
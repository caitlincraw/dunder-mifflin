import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { Chat, Users, LeaveChatRoom, SoundEnablerPopUp, SoundSelector } from "./";
import './ChatRoom.css';
import { Howl } from 'howler';
import { moo, meow, phoneRinging, doorOpen, doorClose } from './audio';
import soundIcon from '../images/sound.png';

// set up a client socket that is listening to the port server is running on
// will need to toggle these variables when deploy or dealing with https
const port = "1725";
const host = window.location.hostname;
const protocol = "http://"
const ENDPOINT = `${protocol}${host}:${port}`;
const socket = io(ENDPOINT, {});

function ChatRoom() {

  // chatroom state variables... consider using redux for some of this
  // *****TBD***** consider making a state variable called toggleVisible which is an object that holds all the state variables that involve visibility of components
  // *****TBD***** include seeUsers, soundEnabler, leaveChat, and showSoundSelector..
  const [message, setMessage] = useState('');
  const [user, setUser] = useState('');
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState();
  const [messages, setMessages] = useState([]);
  const [seeUsers, setSeeUsers] = useState(false);
  const [playSound, setPlaySound] = useState(true);
  const [soundEnabler, setSoundEnabler] = useState(true);
  const [leaveChat, setLeaveChat] = useState(false);
  const [showSoundSelector, setShowSoundSelector] = useState(false);
  const [selectedSound, setSelectedSound] = useState("none");

  // Setup all of the new Howls  
  const sounds = [moo, meow, phoneRinging, doorOpen, doorClose]

  const howls = sounds.map((sound) => (
    new Howl({
      src: [sound]
    })
  ))

  // connect to socket here so that only connects once at the beginning. like componentDidMount(). all socket events where client receives from server go in here too
  useEffect(() => {

    // client sends to server that a user has connected. put in useEffect() because only want once on load of component. note that client only sends to a server by way of socket.emit
    socket.emit('userConnect')

    // client receives user info back from server
    // *****TBD***** this is just the socket.id right now...for actual auth and username
    socket.on('getUser', userId => {
      setUser(userId);
      setOnlineUsers(users => [ ...users, userId])
    })

    // keeping track of number of users in the room
    socket.on('numUsers', numUsers => {
      setTotalUsers(numUsers);
    });

    // client talks to server and receives the data (message and username)
    socket.on('addMessage', data => {
      setMessages(msgs => [ ...msgs, data ]);
    });

    //plays a a door open sound when someone enters the chatroom. user will not here it when they join since the sound is broadcasted to everyone but them
    // socket.on('playDoorOpenSound', () => {
    //   if (playSound) {
    //     howls[3].play();
    //   };
    // });

    //plays a a door close sound when someone leaves the chatroom. user will not here it when they join since the sound is broadcasted to everyone but them
    // socket.on('playDoorCloseSound', () => {
    //   if (playSound) {
    //     howls[4].play();
    //   };
    // });

    // client needs to talk to server again and receive the src for the sound. after get the src, then all clients connected will play that associated sound. 
    socket.on('addSound', srcOfSound => {
      if (srcOfSound === moo) {
        howls[0].play()
      }
      if (srcOfSound === meow) {
        howls[1].play()
      }
      if (srcOfSound === phoneRinging) {
        howls[2].play()
      }
    });

    // clean up the effect. closes the connection when the component unmounts. like componentWillUnmount
    return () => socket.disconnect();
  }, []);

  // *****TBD***** client send sound to server.
  const sendSound = (srcOfSound) => {
    socket.emit('sendSound', srcOfSound)
    setSelectedSound("none");
  }

  const sendMessage = (e) => {
    e.preventDefault();
    // only send a message if there is a message
    // *****TBD***** add logged in auth check here too
    if(message) {
      socket.emit('sendMessage', {
        user, 
        message
      });
      setMessage('');
      //only play sound if sound is enabled. enabled by default.
      if(playSound && selectedSound === "cat") {
        sendSound(meow);
      }
      if(playSound && selectedSound === "cow") {
        sendSound(moo)
      }
      if(playSound && selectedSound === "phone") {
        sendSound(phoneRinging)
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

  const settingSoundState = (name) => {
      setSelectedSound(name);
      setShowSoundSelector(false);
  }

  const previewCat = () => {
    if(playSound) {
      howls[1].play();
    };
  }

  const previewCow = () => {
    if(playSound) {
      howls[0].play();
    };
  }

  const previewPhone = () => {
    if(playSound) {
      howls[2].play();
    };
  }

  return (
    <div className="view cr-view">
      <Chat message={message} messages={messages} selectSound={() => setShowSoundSelector(true)} leaveChat={() => setLeaveChat(true)} onChange={(e) => setMessage(e.target.value)} usersOnClick={() => setSeeUsers(true)} messageOnClick={(e) => sendMessage(e)}  />
      {leaveChat ? <LeaveChatRoom onClick={() => setLeaveChat(false)} /> : null}
      {showSoundSelector ? <SoundSelector onClick={() => setShowSoundSelector(false)} selectNone={() => settingSoundState("none")} selectCat={() => settingSoundState("cat")} selectCow={() => settingSoundState("cow")} selectPhone={() => settingSoundState("phone")} previewCat={previewCat} previewCow={previewCow} previewPhone={previewPhone} /> : null}
      {seeUsers ? <Users onClick={() => setSeeUsers(false)} totalUsers={totalUsers} onlineUsers={onlineUsers}/> : null}
      <button className="soundEnabler" onClick={() => setSoundEnabler(true)}><img src={soundIcon} style={{width: "2rem"}}></img></button>
      {soundEnabler ? <SoundEnablerPopUp onClick={() => setSoundEnabler(false)} enable={enable} disable={disable} /> : null}
    </div>
  );
}

export default ChatRoom;
import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { connect } from "react-redux";
import { Chat, Users, LeaveChatRoom, SoundEnablerPopUp, SoundSelector } from "./";
import './ChatRoom.css';
import { Howl } from 'howler';
import { moo, meow, phoneRinging, doorOpen, doorClose } from './audio';
import soundIcon from '../images/sound.png';
import { getBackendUrl } from "../../api";

const ENDPOINT = getBackendUrl();
let socket;

function ChatRoom(props) {

  // chatroom state variables.
  const [message, setMessage] = useState('');
  const [user, setUser] = useState('');
  const [totalUsers, setTotalUsers] = useState();
  const [messages, setMessages] = useState([]);
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

  // connect to socket here so that only connects once at the beginning. like componentDidMount().
  useEffect(() => {

    socket = io(ENDPOINT);
    // client sends to server that a user has connected. put in useEffect() because only want once on load of component. 
    socket.emit('userConnect', {
      username: props.auth.username
    });

    // client receives user info back from server
    socket.on('getUser', username => {
      username = props.auth.username || "userBypassedLogin@CHEATER";
      setUser(username);
    })

    // keeping track of number of users in the room
    socket.on('numUsers', numUsers => {
      setTotalUsers(numUsers);
    });

    // show message when user joins 
    socket.on('userJoin', data => {
      setMessages(msgs => [ ...msgs, data])
    });

    // show message when user leaves
    socket.on('userLeft', data => {
      setMessages(msgs => [ ...msgs, data])
    });

    // client talks to server and receives the data (message and username)
    socket.on('addMessage', data => {
      setMessages(msgs => [ ...msgs, data ]);
    });

    //plays a a door open sound when someone enters the chatroom. user will not here it when they join since the sound is broadcasted to everyone but them
    socket.on('playDoorOpenSound', () => {
      if (playSound) {
        howls[3].play();
      };
    });

    //plays a a door close sound when someone leaves the chatroom to all connected clients but user.
    socket.on('playDoorCloseSound', () => {
      if (playSound) {
        howls[4].play();
      };
    });

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

  const sendSound = (srcOfSound) => {
    socket.emit('sendSound', srcOfSound)
    setSelectedSound("none");
  }

  const sendMessage = (e) => {
    e.preventDefault();
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
      <Chat message={message} messages={messages} totalUsers={totalUsers} selectSound={() => setShowSoundSelector(true)} leaveChat={() => setLeaveChat(true)} onChange={(e) => setMessage(e.target.value)} messageOnClick={(e) => sendMessage(e)}  />
      {leaveChat ? <LeaveChatRoom onClick={() => setLeaveChat(false)} /> : null}
      {showSoundSelector ? <SoundSelector onClick={() => setShowSoundSelector(false)} selectNone={() => settingSoundState("none")} selectCat={() => settingSoundState("cat")} selectCow={() => settingSoundState("cow")} selectPhone={() => settingSoundState("phone")} previewCat={previewCat} previewCow={previewCow} previewPhone={previewPhone} /> : null}
      <button className="soundEnabler" onClick={() => setSoundEnabler(true)}><img src={soundIcon} alt="sound icon" style={{width: "2rem"}}></img></button>
      {soundEnabler ? <SoundEnablerPopUp onClick={() => setSoundEnabler(false)} enable={enable} disable={disable} /> : null}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(ChatRoom);
import React from "react";
import Messages from "./Messages";
import './ChatRoom.css';

function Chat({ leaveChat, messages, totalUsers, selectSound, message, onChange, messageOnClick }) {

  return (
    <div className="container cr-container">
    <div className="title cr-title">
      <h4 className="title-name">We Love Paper Chatroom ({totalUsers} online)</h4>
      <button className="title-x" onClick={leaveChat}>X</button>
    </div>
    <div className="board m-board">
      <Messages messages={messages} />
    </div>
    <form className="cr-form" action="">
        <div className="text-edit-btns">
          <div className="size-btns">
            <span id="smaller-btn">A</span>
            <span id="normal-btn">A</span>
            <span id="larger-btn">A</span>
          </div>
          <div className="style-btns">
            <span id="bold-btn">B</span>
            <span id="italics-btn">I</span>
            <span id="underline-btn">U</span>
          </div>
          <div className="color-btns">
            <span id="font-color-btn">A</span>
            <span id="background-color-btn">A</span>
          </div>
          <div className="extra-btns">
            <span id="link-btn">link</span>
            <input id="emoji-btn" type="button" value="😀" onClick={() => alert("TBD for emoji feature")}/>
          </div>
        </div>
        <input 
          type="text" 
          id="message"
          name="message" 
          autoComplete="off"
          value={message} 
          onChange={onChange}  
        />
        <div className="footer-btns">
          <input 
            id="sound-btn" 
            type="button" 
            value="aDd A sOuNd 🔈" 
            onClick={selectSound}
          />
          <button onClick={messageOnClick}> 
          Send
          </button>
        </div>
    </form>
  </div>
  );
}

export default Chat;
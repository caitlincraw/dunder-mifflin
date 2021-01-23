import React from "react";
import Messages from "./Messages";
import './ChatRoom.css';

function Chat({ leaveChat, messages, selectSound, message, onChange, usersOnClick, messageOnClick }) {

  return (
    <div className="container cr-container">
    <div className="title cr-title">
      <h4 className="title-name">We Love Paper Chatroom</h4>
      <button className="title-x" onClick={leaveChat}>X</button>
    </div>
    <div className="board m-board">
      <Messages messages={messages} />
    </div>
    <form className="cr-form" action="">
        <div className="text-edit-btns">
          <div className="size-btns">
            <input id="smaller-btn" type="button" value="A" onClick={() => alert("TBD for smaller font size feature")}/>
            <input id="normal-btn" type="button" value="A" onClick={() => alert("TBD for normal font size feature")}/>
            <input id="larger-btn" type="button" value="A" onClick={() => alert("TBD for larger font size feature")}/>
          </div>
          <div className="style-btns">
            <input id="bold-btn" type="button" value="B" onClick={() => alert("TBD for bold font feature")}/>
            <input id="italics-btn" type="button" value="I" onClick={() => alert("TBD for italics font feature")}/>
            <input id="underline-btn" type="button" value="U" onClick={() => alert("TBD for underlined font feature")}/>
          </div>
          <div className="color-btns">
            <input id="font-color-btn" type="button" value="A" onClick={() => alert("TBD for font color feature")}/>
            <input id="background-color-btn" type="button" value="A" onClick={() => alert("TBD for background color feature")}/>
          </div>
          <div className="extra-btns">
            <input id="link-btn" type="button" value="link" onClick={() => alert("TBD for link feature")} />
            <input id="emoji-btn" type="button" value="😀" onClick={() => alert("TBD for emoji feature")}/>
            <input id="emoji-btn" type="button" value="🔈" onClick={selectSound}/>
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
            id="show-users-btn" 
            type="button" 
            value="Who's Online?" 
            onClick={usersOnClick}
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
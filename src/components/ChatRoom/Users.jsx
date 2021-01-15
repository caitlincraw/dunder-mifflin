import React from "react";
import './ChatRoom.css';

function Users(props) {

  return (
    <div className="container u-container">
        <div className="title u-title">
        <h4 className="title-name">Online Paper Lovers ({props.totalUsers})</h4>
        <button className="title-x" onClick={props.onClick}>X</button>
        </div>
        <div className="board u-board">
          <ul className="online-users">
            {props.onlineUsers.map((user, index) => <li key={index}>{user}</li>)}
          </ul>
        </div>
    </div>
  );
}

export default Users;
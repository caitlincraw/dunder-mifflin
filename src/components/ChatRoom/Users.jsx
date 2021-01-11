import React from "react";
import './ChatRoom.css';

function Users(props) {

  return (
    <div className="users-container">
        <div className="u-title">
        <h4 className="title-name">Online Paper Lovers</h4>
        <button className="title-x" onClick={props.onClick}>X</button>
        </div>
        <div className="u-board">
        </div>
    </div>
  );
}

export default Users;
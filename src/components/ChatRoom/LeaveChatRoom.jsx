import React from 'react';
import { Link } from 'react-router-dom';
import './ChatRoom.css';

const LeaveChatRoom = ({ onClick }) => {
    
    return (
        <div className="container lcr-container">
            <div className="title lcr-title">
            <h4 className="title-name">Leaving so soon?</h4>
            <button className="title-x" onClick={onClick}>X</button>
            </div>
            <div className="board lcr-board">
                <div>Are you sure you want to leave the chatroom?</div>
                <Link to="/">Yes, paper sucks.</Link>
                <button onClick={onClick}>No, I love paper.</button>
            </div>
        </div>
    )
};

export default LeaveChatRoom;
import React, { useState } from 'react';
import './ChatRoom.css';

const SoundEnablerPopUp = (props) => {
    
    return (
        <div className="container se-container">
            <div className="title se-title">
            <h4 className="title-name">🔈 SOUND ENABLER 🔈</h4>
            <button className="title-x" onClick={props.onClick}>X</button>
            </div>
            <div className="board se-board">
                <div>There are awesome sounds in this chatroom. Do you want to keep them enabled or turn them off?</div>
                <span><button onClick={props.enable}>ENABLE</button></span>
                <span><button onClick={props.disable}>DISABLE</button></span>
            </div>
        </div>
    )
};

export default SoundEnablerPopUp;
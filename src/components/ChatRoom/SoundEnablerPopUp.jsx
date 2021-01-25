import React from 'react';
import './ChatRoom.css';

const SoundEnablerPopUp = ({ onClick, enable, disable }) => {
    
    return (
        <div className="container se-container">
            <div className="title se-title">
            <h4 className="title-name">Do you like sounds? 🔈🔈🔈</h4>
            <button className="title-x" onClick={onClick}>X</button>
            </div>
            <div className="board se-board">
                <div>There are awesome sounds in this chatroom. Do you want to keep them enabled or turn them off?</div>
                <div>
                    <button onClick={enable}>Enable Sound</button>
                    <button onClick={disable}>Disable Sound</button>
                </div>
            </div>
        </div>
    )
};

export default SoundEnablerPopUp;
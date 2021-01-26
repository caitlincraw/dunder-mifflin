import React from 'react';
import './ChatRoom.css';

const EmojiSelector = ({ onClick, addEmoji }) => {
    
    const emojis = ["😃", "🤣", "🤪", "🤗", "😷", "🤮", "😎", "🤐", "😴", "🥳", "💩", "🧻", "♾️", "📝", "🖨️", "📎", "💼"];
    return (
        <div className="container es-container">
            <div className="title es-title">
                <h4 className="title-name">Emoji Time</h4>
                <button className="title-x" onClick={onClick}>X</button>
            </div>
            <div className="board es-board">
                <div>Send an Emoji with your Message</div>
                {emojis.map((emoji, index) => <input key={index} type="button" value={emoji} onClick={addEmoji}/>)}
            </div>
        </div>
    )
};

export default EmojiSelector;
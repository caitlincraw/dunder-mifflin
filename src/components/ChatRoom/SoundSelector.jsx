import React from 'react';
import './ChatRoom.css';

const SoundSelector = (props) => {
    
    return (
        <div className="container so-container">
            <div className="title so-title">
                <h4 className="title-name">Send a sound?</h4>
                <button className="title-x" onClick={props.onClick}>X</button>
            </div>
            <div className="board so-board">
                <div>Pick from the list below:</div>
                <input type="button" value="No sound, please" onClick={props.selectNone}/>
                <input type="button" value="Cat meowing" onClick={props.selectCat}/><button className="preview-btn" onClick={props.previewCat}>▶️</button>
                <input type="button" value="Cow mooing" onClick={props.selectCow}/><button className="preview-btn" onClick={props.previewCow}>▶️</button>
                <input type="button" value="Phone ringing" onClick={props.selectPhone}/><button className="preview-btn" onClick={props.previewPhone}>▶️</button>
            </div>
        </div>
    )
};

export default SoundSelector;
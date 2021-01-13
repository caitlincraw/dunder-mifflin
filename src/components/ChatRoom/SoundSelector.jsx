import React from 'react';
import './ChatRoom.css';

const SoundSelector = (props) => {
    
    return (
        <div className="container so-container">
            <div className="title so-title">
            <h4 className="title-name">Send a sound?</h4>
            </div>
            <div className="board so-board">
                <div>Pick from the list below:</div>
                <br />
                <input type="button" value="No sound, please" onClick={props.selectNone}/>
                <input type="button" value="Cat meowing" onClick={props.selectCat}/>
                <input type="button" value="Cow mooing" onClick={props.selectCow}/>
                <input type="button" value="Phone ringing" onClick={props.selectPhone}/>
            </div>
        </div>
    )
};

export default SoundSelector;
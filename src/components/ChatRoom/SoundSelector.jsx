import React from 'react';
import './ChatRoom.css';

const SoundSelector = ({ onClick, selectNone, selectCat, selectCow, selectPhone, previewCat, previewCow, previewPhone }) => {
    
    return (
        <div className="container so-container">
            <div className="title so-title">
                <h4 className="title-name">Send a sound?</h4>
                <button className="title-x" onClick={onClick}>X</button>
            </div>
            <div className="board so-board">
                <div>Pick from the list below:</div>
                <hr />
                <input type="button" value="No sound, please" onClick={selectNone}/>
                <hr />
                <input type="button" value="Cat meowing" onClick={selectCat}/><button className="preview-btn" onClick={previewCat}>▶️</button>
                <hr />
                <input type="button" value="Cow mooing" onClick={selectCow}/><button className="preview-btn" onClick={previewCow}>▶️</button>
                <hr />
                <input type="button" value="Phone ringing" onClick={selectPhone}/><button className="preview-btn" onClick={previewPhone}>▶️</button>
                <hr />
            </div>
        </div>
    )
};

export default SoundSelector;
import React from 'react';
import './LoginPage.css';

const Register = (props) => {
    
    return (
        <div className="container r-container">
            <div className="title r-title">
            <h4 className="title-name">Register a New User</h4>
            <button className="title-x" onClick={props.onClick}>X</button>
            </div>
            <div className="board r-board">
                <div>By registering, you agree to always love paper and to be a nice person in the chatroom.</div>
                <form>
                    <input type="text" placeholder='Enter a username' autoComplete="off" value={props.username} onChange={props.userOnChange} />
                    <input type="text" placeholder='Enter a password' autoComplete="off" value={props.password} onChange={props.passOnChange} />
                    <button type="submit" onClick={props.register}>Submit</button>
                </form> 
                {props.registerMsg ? <p>{props.registerMsg}</p> : null}              
            </div>
        </div>
    )
};

export default Register;
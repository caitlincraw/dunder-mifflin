import React from 'react';
import './LoginPage.css';

const Register = ({onClick, username, password, userOnChange, passOnChange, register, registerMsg }) => {
    
    return (
        <div className="container r-container">
            <div className="title r-title">
            <h4 className="title-name">Register a New User</h4>
            <button className="title-x" onClick={onClick}>X</button>
            </div>
            <div className="board r-board">
                <div>By registering, you agree to always love paper and to be a nice person in the chatroom.</div>
                <form>
                    <input type="text" placeholder='Enter a username' autoComplete="off" value={username} onChange={userOnChange} />
                    <input type="text" placeholder='Enter a password' autoComplete="off" value={password} onChange={passOnChange} />
                    <button type="submit" onClick={register}>Submit</button>
                </form> 
                {registerMsg ? <div>{registerMsg}</div> : null}              
            </div>
        </div>
    )
};

export default Register;
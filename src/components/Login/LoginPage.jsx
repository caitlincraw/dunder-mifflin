import React, { useState } from "react";
import axios from 'axios';
import Register from './Register';

function LoginPage() {
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [showRegister, setShowRegister] = useState(false);
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [data, setData] = useState("");
    
    const register = (e) => {
        e.preventDefault();
        axios({
            method: 'POST',
            data: {
                username: registerUsername,
                password: registerPassword
            },
            withCredentials: true,
            url: "http://localhost:1725/register",
        }).then((res) => console.log(res));
    };
    const login = (e) => {
        e.preventDefault();
        axios({
            method: 'POST',
            data: {
                username: loginUsername,
                password: loginPassword
            },
            withCredentials: true,
            url: "http://localhost:1725/login",
        }).then((res) => {
            console.log(res);
            setData(loginUsername);
        });

        setLoginUsername("");
        setLoginPassword("");
    };

    const logout = () => {
        axios({
            method: 'GET',
            withCredentials: true,
            url: "http://localhost:1725/logout",
        }).then((res) => {
            console.log(res);
        });
    };

    return (
        <div className="view l-view">
            <div className="container l-container">
                <h1>Login</h1>
                <form>
                    <input placeholder="enter your username" onChange={e => setLoginUsername(e.target.value)} />
                    <input placeholder="enter your password" onChange={e => setLoginPassword(e.target.value)} />
                    <button type="submit" onClick={login}>Submit</button>
                    {data ? <h1>Welcome Back, {data}</h1> : null}
                </form>
                <div>Don't have an account yet? <button className="register-btn" onClick={()=>setShowRegister(true)}>Register Here!</button></div>
                <button onClick={logout}>Logout</button>
            </div>
                {showRegister ? <Register onClick={() => setShowRegister(false)} register={register} username={registerUsername} password={registerPassword} userOnChange={e => setRegisterUsername(e.target.value)} passOnChange={e => setRegisterPassword(e.target.value)}/> : null}
        </div>


    )
}

export default LoginPage;
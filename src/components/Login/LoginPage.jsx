import React, { useState } from "react";
import Register from './Register';
import { register as apiRegister} from "../../api";
import { logIn } from '../../redux/actions/authActions'
import { connect } from "react-redux";

function LoginPage(props) {
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [showRegister, setShowRegister] = useState(false);
    const [registerMsg, setRegisterMsg] = useState("");
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const register = (e) => {
        e.preventDefault();
        apiRegister(registerUsername, registerPassword).then((res) => {
            return setRegisterMsg(res.data);
        });
    };
    
    const login = (e) => {
        e.preventDefault();
        props.attemptLogin(loginUsername, loginPassword);
    };

    // using ?. is a null propogation operator
    const showAuthFailure = () => {
        return props.auth?.failedAuth;
    }

    const showLoginSuccess = () => {
        return props.auth?.isLoggedIn;
    }


    return (
        <div className="view l-view">
            <div className="container l-container">
                <div className="login-title">
                    <h4 className="title-name">Login</h4>
                </div>
                <form>
                    <input placeholder="enter your username" onChange={e => setLoginUsername(e.target.value)} />
                    <input placeholder="enter your password" onChange={e => setLoginPassword(e.target.value)} />
                    <button type="submit" onClick={login}>Submit</button>
                </form>
                {showAuthFailure() && <p className="auth-failure-msg">User does not exist.</p>}
                {showLoginSuccess() && <p className="auth-success-msg">User successfully authenticated.</p>}


                <div>Don't have an account yet? <button className="register-btn" onClick={()=>setShowRegister(true)}>Register Here!</button></div>
            </div>
                {showRegister ? <Register onClick={() => setShowRegister(false)} register={register} registerMsg={registerMsg} username={registerUsername} password={registerPassword} userOnChange={e => setRegisterUsername(e.target.value)} passOnChange={e => setRegisterPassword(e.target.value)}/> : null}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      auth: state.auth
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        attemptLogin: (username, password) => dispatch(logIn(username, password)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
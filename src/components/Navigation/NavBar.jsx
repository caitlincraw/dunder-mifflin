import React, { useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import DMicon from '../images/dm_favicon.png';
import { connect } from "react-redux";
import { logOut, resetAfterRedirect } from '../../redux/actions/authActions'

const NavBar = (props) => {

    useEffect(() => {
        if (props.auth?.logoutSuccess) {
            props.reset();
        }
    });
    
    // null propogation operator
    const isLoggedIn = () => {
        return props.auth?.isLoggedIn;
    }

    const logout = () => {
        props.attemptLogout();
    };

    return(
            <header>
                {props.auth?.logoutSuccess && <Redirect to='/' push={true}/>}
                <Link to="/"><img className="SmallLogo" src={DMicon} alt="DM" /></Link>
                <div className="navs">
                    {isLoggedIn() ? <span><span><i>Hi, {props.auth.username}</i></span><button className="logout-btn" onClick={logout}>Logout</button></span> : <Link to="/login">Login</Link>}
                    {isLoggedIn() ? <Link to="/chat">Chat</Link> : <Link to="/login" onClick={() => alert("You must be logged in to use the chatroom.")}>Chat</Link>}
                    <Link to="/paper">Paper</Link> 
                    {/* <Link to="/chat">Chat</Link>  */}
                </div>
            </header>  
    )
}

const mapStateToProps = (state) => {
    return {
      auth: state.auth
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        attemptLogout: () => dispatch(logOut()),
        reset: () => dispatch(resetAfterRedirect())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import DMicon from '../images/dm_favicon.png';
import { connect } from "react-redux";
import { logOut } from '../../redux/actions/authActions'


const NavBar = (props) => {

    useEffect(() => {
        isLoggedIn();
    }, [])
    
    // null propogation operator
    const isLoggedIn = () => {
        return props.auth?.isLoggedIn;
    }

    const logout = () => {
        props.attemptLogout();
    };

    return(
            <header>
                <Link to="/"><img className="SmallLogo" src={DMicon} alt="DM" /></Link>
                <div className="navs">
                    {isLoggedIn() ? <span><span>Hi, {props.auth.username}</span><button onClick={logout}>Logout</button></span> : <Link to="/login">Login</Link>}
                    {/* <Link to="/login">Login</Link> */}
                    <Link to="/paper">Paper</Link>
                    <Link to="/chat">Chat</Link>
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
        attemptLogout: () => dispatch(logOut())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
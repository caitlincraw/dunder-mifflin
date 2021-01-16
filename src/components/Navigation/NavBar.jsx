import React from 'react';
import { Link } from 'react-router-dom';
import DMicon from '../images/dm_favicon.png';
import CartIcon from '../images/cart.png';


 const NavBar = () => {
    return(
            <header>
                <Link to="/"><img className="SmallLogo" src={DMicon} alt="DM" /></Link>
                <div className="navs">
                    <Link to="/login">Login</Link>
                    <Link to="/chat">Chat</Link>
                    <Link to="/paper">Paper</Link>
                    <Link to="/cart"><img className="SmallLogo" src={CartIcon} alt="cart" /></Link>
                </div>
            </header>  
    )
}

export default NavBar;
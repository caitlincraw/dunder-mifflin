import React from 'react';
import { Link } from 'react-router-dom';
import Favicon from './images/dm_favicon.png';


 const Navbar = ()=>{
    return(
            <nav>
                <Link to="/"><img className="SmallLogo" src={Favicon} alt="DM" /></Link>
                <div className="navs">
                <Link to="/chat">Chat</Link>
                <Link to="/paper">Paper</Link>
                <Link to="/cart">Cart</Link>
                </div>
            </nav>  
    )
}

export default Navbar;
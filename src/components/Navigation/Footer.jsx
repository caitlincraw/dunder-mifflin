import React from 'react';
import { Link } from 'react-router-dom';

 const Footer = () => {
    return(
            <footer>
                <Link to="/sources">Sources</Link>
                <Link to="/aboutus">About The Developers</Link>
                <div className="copyright">
                    Copyright &copy; {new Date().getFullYear()} Dunder Mifflin
                </div>
            </footer>  
    )
}

export default Footer;
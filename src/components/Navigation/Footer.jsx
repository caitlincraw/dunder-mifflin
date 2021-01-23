import React from 'react';
import { Link } from 'react-router-dom';

 const Footer = () => {
    return(
            <footer>
                <div className="footer__navs">
                    <Link className="sources" to="/sources">Sources</Link>
                    <Link to="/aboutus">Developers</Link>
                </div>
                <div className="copyright">
                    Copyright &copy; {new Date().getFullYear()} Dunder Mifflin
                </div>
            </footer>  
    )
}

export default Footer;
import { Link } from 'react-router-dom';
import DMicon from '../images/dm_favicon.png';


 const NavBar = () => {
    return(
            <header>
                <Link to="/"><img className="SmallLogo" src={DMicon} alt="DM" /></Link>
                <div className="navs">
                    {/* {status ? <button onClick={logout}>Logout</button> : <Link to="/chat">Chat</Link>}
                    {!status ? <Link to="/login">Login</Link> : null } */}
                    <Link to="/login">Login</Link>
                    <Link to="/paper">Paper</Link>
                    <Link to="/chat">Chat</Link>
                </div>
            </header>  
    )
}

export default NavBar;
import DMLogo from '../images/dm_logo.png';
import './Landing.css';

function Landing() {
    return (
        <div className="view logo-container">
            <img className="logo" src={DMLogo} alt="Dunder Mifflin Infinity Logo" />
        </div>

    )
}

export default Landing;
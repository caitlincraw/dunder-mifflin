import './AboutUs.css';
import Ali from './images/ali.jpg';
import Rudy from './images/rudy.jpg';
import Caitlin from './images/caitlin.jpg';


function AboutUs() {
    return (
        <div className="view au-view">
            <div className="myspace-card">
                <h3 className="name">Ali Kasper</h3>
                <div className="myspace-header">
                    <img className="headshot" src={Ali} alt="Ali"></img>
                    <ul>
                        <li>Female (she/her)</li>
                        <li>PORTLAND, OR</li>
                        <li>United States</li>
                        <li><img src="https://www.myspacegens.com/images/online_now/onlinenow.gif" alt="myspace online now gif"></img></li>
                    </ul> 
                </div>
                <p className="motto">"Whenever I'm about to do something, I think 'Would an idiot do that?'"</p>
                <div className="myspace-social">
                    <b>View My:</b>
                    <a href="https://github.com/alikasper" target="_blank" rel="noreferrer">Github</a> 
                    |
                    <a href="https://www.linkedin.com/in/ali-kasper/" target="_blank" rel="noreferrer">LinkedIn</a>
                </div>
                <div className="myspace-portfolio">
                    <div><b>Portfolio URL:</b></div>
                    <a href="https://www.alikasperdesign.com/" target="_blank" rel="noreferrer">alikasperdesign.com</a>
                </div>
                {/* <div className="myspace-interests">
                    <h5 className="table-header">Ali's Interests</h5>
                    <div className="interests-table">
                        <div className="row">
                            <div className="title-column">
                                General
                            </div>
                            <div className="answer-column">
                                TBD
                            </div>
                        </div>
                        <div className="row">
                            <div className="title-column">
                                Music
                            </div>
                            <div className="answer-column">
                                TBD
                            </div>
                        </div>
                        <div className="row">
                            <div className="title-column">
                                Movies
                            </div>
                            <div className="answer-column">
                                TBD
                            </div>
                        </div>
                        <div className="row">
                            <div className="title-column">
                                Television
                            </div>
                            <div className="answer-column">
                                TBD
                            </div>
                        </div>
                        <div className="row">
                            <div className="title-column">
                                Books
                            </div>
                            <div className="answer-column">
                                TBD
                            </div>
                        </div>
                        <div className="row">
                            <div className="title-column">
                                Heroes
                            </div>
                            <div className="answer-column">
                                My manager, Michael Scott
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="myspace-details">
                <h5 className="table-header">Ali's Details</h5>
                    <div className="details-table">
                        <div className="row">
                            <div className="title-column">
                                Job Title
                            </div>
                            <div className="answer-column">
                                Software Developer
                            </div>
                        </div>
                        <div className="row">
                            <div className="title-column">
                                Here For
                            </div>
                            <div className="answer-column">
                                DC Bootcamp
                            </div>
                        </div>
                        <div className="row">
                            <div className="title-column">
                                Office Character
                            </div>
                            <div className="answer-column">
                                Dwight Schrute
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="myspace-card">
                <h3 className="name">Rudy Saavedra</h3>
                <div className="myspace-header">
                    <img className="headshot" src={Rudy} alt="Rudy"></img>
                    <ul>
                        <li>Male (he/him)</li>
                        <li>SAVANNAH, GA</li>
                        <li>United States</li>
                        <li><img src="https://www.myspacegens.com/images/online_now/57.gif" alt="myspace online now gif"></img></li>
                    </ul> 
                </div>
                <p className="motto">"Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me."</p>
                <div className="myspace-social">
                    <b>View My:</b>
                    <a href="https://github.com/RudyCruisin" target="_blank" rel="noreferrer">Github</a> 
                    |
                    <a href="https://www.linkedin.com/in/rudysa2/" target="_blank" rel="noreferrer">LinkedIn</a>
                </div>
                <div className="myspace-portfolio">
                    <div><b>Portfolio URL:</b></div>
                    <a href="https://rudycruisin.github.io/RudyPortfolio/" target="_blank" rel="noreferrer">rudycruisin.com</a>
                </div>
                {/* <div className="myspace-interests">
                    <h5 className="table-header">Caitlin's Interests</h5>
                    <div className="interests-table">
                        <div className="row">
                            <div className="title-column">
                                General
                            </div>
                            <div className="answer-column">
                                TBD
                            </div>
                        </div>
                        <div className="row">
                            <div className="title-column">
                                Music
                            </div>
                            <div className="answer-column">
                                TBD
                            </div>
                        </div>
                        <div className="row">
                            <div className="title-column">
                                Movies
                            </div>
                            <div className="answer-column">
                                TBD
                            </div>
                        </div>
                        <div className="row">
                            <div className="title-column">
                                Television
                            </div>
                            <div className="answer-column">
                                TBD
                            </div>
                        </div>
                        <div className="row">
                            <div className="title-column">
                                Books
                            </div>
                            <div className="answer-column">
                                TBD
                            </div>
                        </div>
                        <div className="row">
                            <div className="title-column">
                                Heroes
                            </div>
                            <div className="answer-column">
                                Myself
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="myspace-details">
                <h5 className="table-header">Rudy's Details</h5>
                    <div className="details-table">
                        <div className="row">
                            <div className="title-column">
                                Job Title
                            </div>
                            <div className="answer-column">
                                Software Developer
                            </div>
                        </div>
                        <div className="row">
                            <div className="title-column">
                                Here For
                            </div>
                            <div className="answer-column">
                                DC Bootcamp
                            </div>
                        </div>
                        <div className="row">
                            <div className="title-column">
                                Office Character
                            </div>
                            <div className="answer-column">
                                Michael Scott
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="myspace-card">
                <h3 className="name">Caitlin Crawford</h3>
                <div className="myspace-header">
                    <img className="headshot" src={Caitlin} alt="Caitlin"></img>
                    <ul>
                        <li>Female (she/her)</li>
                        <li>CHATTANOOGA, TN</li>
                        <li>United States</li>
                        <li><img src="https://www.myspacegens.com/images/online_now/64.gif" alt="myspace online now gif"></img></li>
                    </ul>
                </div>
                <p className="motto">"I don't care what they say about me. I just want to eat."</p>
                <div className="myspace-social">
                    <b>View My:</b>
                    <a href="https://github.com/caitlincraw" target="_blank" rel="noreferrer">Github</a> 
                    |
                    <a href="https://www.linkedin.com/in/caitlin-crawford-aicp-6716778a/" target="_blank" rel="noreferrer">LinkedIn</a>
                </div>
                <div className="myspace-portfolio">
                    <div><b>Portfolio URL:</b></div>
                    <a href="https://caitlin-crawford.com" target="_blank" rel="noreferrer">caitlin-crawford.com</a>
                </div>
                {/* <div className="myspace-interests">
                    <h5 className="table-header">Caitlin's Interests</h5>
                    <div className="interests-table">
                        <div className="row">
                            <div className="title-column">
                                General
                            </div>
                            <div className="answer-column">
                                TBD
                            </div>
                        </div>
                        <div className="row">
                            <div className="title-column">
                                Music
                            </div>
                            <div className="answer-column">
                                TBD
                            </div>
                        </div>
                        <div className="row">
                            <div className="title-column">
                                Movies
                            </div>
                            <div className="answer-column">
                                TBD
                            </div>
                        </div>
                        <div className="row">
                            <div className="title-column">
                                Television
                            </div>
                            <div className="answer-column">
                                TBD
                            </div>
                        </div>
                        <div className="row">
                            <div className="title-column">
                                Books
                            </div>
                            <div className="answer-column">
                                TBD
                            </div>
                        </div>
                        <div className="row">
                            <div className="title-column">
                                Heroes
                            </div>
                            <div className="answer-column">
                                My soul mate, Jim
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="myspace-details">
                    <h5 className="table-header">Caitlin's Details</h5>
                    <div className="details-table">
                        <div className="row">
                            <div className="title-column">
                                Job Title
                            </div>
                            <div className="answer-column">
                                Software Developer
                            </div>
                        </div>
                        <div className="row">
                            <div className="title-column">
                                Here For
                            </div>
                            <div className="answer-column">
                                DC Bootcamp
                            </div>
                        </div>
                        <div className="row">
                            <div className="title-column">
                                Office Character
                            </div>
                            <div className="answer-column">
                                Pam Halpert
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutUs;
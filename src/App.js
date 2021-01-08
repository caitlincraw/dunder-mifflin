import { Link, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing';
import PaperStore from './components/PaperStore';
import ChatRoom from './components/ChatRoom/ChatRoom';
import Favicon from './components/images/dm_favicon.png';

function App() {
  return (
    <div className="App">
        
      <header>
        <Link to="/"><img className="SmallLogo" src={Favicon} alt="DM" /></Link>
        <div className="navs">
          <Link to="/paper">Paper</Link>
          <Link to="/chat">Chat</Link>
        </div>
      </header>

      <main>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/paper" component={PaperStore} />
          <Route exact path = "/chat" component={ChatRoom} />
        </Switch>

      </main>

      <footer>
      </footer>

    </div>
  );
}

export default App;

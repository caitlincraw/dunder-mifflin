import { Link, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing';
import PaperStore from './components/PaperStore/PaperStore';
import ChatRoom from './components/ChatRoom/ChatRoom';
import Cart from './components/Cart';
import LoginPage from './components/LoginPage';
import DMicon from './components/images/dm_favicon.png';
import CartIcon from './components/images/cart.png';


function App() {
  return (
    <div className="App">

      <header>
        <Link to="/"><img className="SmallLogo" src={DMicon} alt="DM" /></Link>
        <div className="navs">
          <Link to="/login">Login</Link>
          <Link to="/chat">Chat</Link>
          <Link to="/paper">Paper</Link>
          <Link to="/cart"><img className="SmallLogo" src={CartIcon} alt="cart" /></Link>
        </div>
      </header>

      <main>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/paper" component={PaperStore} />
          <Route exact path="/chat" component={ChatRoom} />
          <Route exact path="/cart" component={Cart} />
        </Switch>

      </main>

      <footer>
      </footer>

    </div >
  );
}

export default App;

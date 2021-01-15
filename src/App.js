import { Route, Switch } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import PaperStore from './components/PaperStore/PaperStore';
import ChatRoom from './components/ChatRoom/ChatRoom';
import Cart from './components/PaperStore/Cart';
import LoginPage from './components/LoginPage';
import AboutUs from './components/AboutUs';
import { NavBar, Footer } from './components/Navigation';


function App() {
  return (
    <div className="App">

      <NavBar />

      <main>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/paper" component={PaperStore} />
          <Route exact path="/chat" component={ChatRoom} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/aboutus" component={AboutUs} />
        </Switch>

      </main>

      <Footer />

    </div >
  );
}

export default App;

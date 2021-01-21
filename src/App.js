import { Route, Switch } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import PaperStore from './components/PaperStore/PaperStore';
import ChatRoom from './components/ChatRoom/ChatRoom';
import LoginPage from './components/Login/LoginPage';
import AboutUs from './components/AboutUs';
import Sources from './components/Sources';
import { NavBar, Footer } from './components/Navigation';
import Dwight from './components/ChatBot/ChatBot';


function App() {
  return (
    <div className="App">

      <NavBar />

      <main>
      <Dwight />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/paper" component={PaperStore} />
          <Route exact path="/chat" component={ChatRoom} />
          <Route exact path="/aboutus" component={AboutUs} />
          <Route exact path="/sources" component={Sources} />
        </Switch>

      </main>

      <Footer />

    </div >
  );
}

export default App;

import { Route, Switch } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import PaperStore from './components/PaperStore/PaperStore';
import ChatRoom from './components/ChatRoom/ChatRoom';
import LoginPage from './components/Login/LoginPage';
import AboutUs from './components/AboutUs';
import Sources from './components/Sources';
import ProtectedRoute from './components/ProtectedRoute';
import { NavBar, Footer } from './components/Navigation';
import { connect } from "react-redux";


function App(props) {

  const user = props.auth.isLoggedIn;

  return (
    <div className="App">

      <NavBar />

      <main>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/paper" component={PaperStore} />
          <ProtectedRoute exact path="/chat" component={ChatRoom} user={user} />
          <Route exact path="/aboutus" component={AboutUs} />
          <Route exact path="/sources" component={Sources} />
        </Switch>

      </main>

      <Footer />

    </div >
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(App);

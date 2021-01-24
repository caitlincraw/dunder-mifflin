import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import PaperStore from './components/PaperStore/PaperStore';
import ChatRoom from './components/ChatRoom/ChatRoom';
import LoginPage from './components/Login/LoginPage';
import AboutUs from './components/AboutUs';
import Sources from './components/Sources';
import LoadingPage from './components/loadingPage';
import ProtectedRoute from './components/ProtectedRoute';
import { NavBar, Footer } from './components/Navigation';
import { connect } from "react-redux";
import { persistLogin } from './redux/actions/authActions'


function App(props) {

  const [Loading, setLoading] = useState(false);

  useEffect(() => {
      props.persistLogin().then(res => {
        console.log(res);
      })
  },[]);

  // if loading is true show loading page

  if (Loading) {
    return (
      <div>
        <LoadingPage />
      </div>
    )
  }

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
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    persistLogin: () => dispatch(persistLogin())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

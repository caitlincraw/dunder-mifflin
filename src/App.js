import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import PaperStore from './components/PaperStore/PaperStore';
import ChatRoom from './components/ChatRoom/ChatRoom';
import LoginPage from './components/Login/LoginPage';
import AboutUs from './components/AboutUs';
import Sources from './components/Sources';
import ProtectedRoute from './components/ProtectedRoute';
import { NavBar, Footer } from './components/Navigation';
import { ConditionallyRender } from 'react-util-kit';
import Dwight from './components/ChatBot/ChatBot';
import { ReactComponent as ButtonIcon } from './components/ChatBot/icons/dwight.svg'
import { connect } from "react-redux";
import { persistLogin } from './redux/actions/authActions'
import { getUser } from './api';

import './App.css'

function App(props) {
  const [showDwight, toggleDwight] = useState(true);


  useEffect(() => {
    props.persistLogin()
  }, []);


  const user = getUser().then(res => {
    if (res.data === "user not logged") {
      return false;
    } else {
      return true
    }
  })

  return (
    <div className="App">

      <NavBar />

      <main>
        <div className="app-chatbot-container">
          <ConditionallyRender
            ifTrue={showDwight}
            show={
              <Dwight
              />
            }
          />
          <button
            className="app-chatbot-button"
            onClick={() => toggleDwight((prev) => !prev)}
          >
            <ButtonIcon className="app-chatbot-button-icon" />
          </button>
        </div>
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

const mapDispatchToProps = (dispatch) => {
  return {
    persistLogin: () => dispatch(persistLogin())
  }
};

export default connect(null, mapDispatchToProps)(App);

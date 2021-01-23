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
import React, { useState, useEffect } from "react";
import { getUser } from "./api"


function App(props) {

  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    getUser()
      .then(res => {
        if(res.data==="user not logged") { console.log('user is not logged on') }
        else {
          console.log('user is logged on')
          //set redux username to res.data.username


          //set redux isloggedin to true

        }
        console.log(res);
        setLoading(false);
      })
      .catch(err => (err));

    // .catch(err=>(err));
    // console.log(getUser().then(res=>(console.log(res))));
    // console.log(req.user)
    // make call to /user from server to verify login

    // if user exists, redux state set to loggedin
    // if user does not exist, redirect to login page
    // set state to false
  },
    []);


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

// const authCheck = () => {
//   axios.get('http://localhost:1725/user')
//     .catch(function (err) { console.log(err) }
// }

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
};

export default connect(mapStateToProps)(App);

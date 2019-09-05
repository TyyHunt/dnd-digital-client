import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import RacesContainer from '../containers/races/racesContainer';
import KlassesContainer from '../containers/klasses/klassesContainer';
import WeaponsContainer from '../containers/weapons/weaponsContainer';
import Navigation from '../containers/navbar/navbar';
import LandingPage from './landingPage';
//import Login from '../containers/user/login'
//import About from './container/About';
import Signup from '../containers/user/signup';
//import UserEntries from './container/users/UserEntries';
import UserProfile from '../containers/user/userProfile';
import {userPostFetch} from '../actions/userActions';

class Routes extends Component {

  render() {
    return (
      <div className="backgroundImage">
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/races" component={RacesContainer} />
            <Route exact path="/classes" component={KlassesContainer} />
            <Route exact path="/weapons" component={WeaponsContainer} />
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/user" component={UserProfile}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(Routes);
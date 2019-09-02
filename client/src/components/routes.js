import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RacesContainer from '../containers/races/racesContainer';
import KlassesContainer from '../containers/klasses/klassesContainer';
import WeaponsContainer from '../containers/weapons/weaponsContainer';
import Navigation from '../containers/navbar/navbar';
import LandingPage from './landingPage';
import Login from '../containers/user/login'
//import About from './container/About';
//import Signup from './container/SignUp';
//import UserEntries from './container/users/UserEntries';
//import UserProfile from './container/users/UserProfile';

class Routes extends Component {
  render() {
    return (
      <div className="backgroundImage">
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/races" component={RacesContainer} />
            <Route exact path="/klasses" component={KlassesContainer} />
            <Route exact path="/weapons" component={WeaponsContainer} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default Routes
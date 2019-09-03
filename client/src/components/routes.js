import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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

class Routes extends Component {
  constructor() {
    super();

    this.state = {
      loggedIn: false,
      user: {}
    }
    this.handleLogin = this.handleLogin.bind(this)
  }

  checkLoginStatus() {
    fetch("http://localhost:3001/api/logged_in", { withCredentials: true })
      .then(response => response.json())
      .then(response => {
        console.log(response)
        console.log(this.state)
        if (
          response.logged_in &&
          this.state.loggedIn === false
        ) {
          this.setState({
            loggedIn: true,
            user: response.data.user
          });
        } else if (
          !response.logged_in &
          (this.state.loggedIn === true)
        ) {
          this.setState({
            loggedIn: false,
            user: {}
          });
        }
      })
      .catch(error => {
        console.log("check login error", error);
      });
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  handleLogin = data => {
    this.setState({
      loggedIn: true,
      user: data
    })
    console.log(this.state)
  }

  render() {
    return (
      <div className="backgroundImage">
        <Router>
          <Navigation email={this.state.user.email} />
          <Switch>
            <Route exact path="/" 
              render={props => (<LandingPage loggedIn={this.state.loggedIn} {...props} handleLogin={this.handleLogin}/>)} />
            <Route exact path="/races" component={RacesContainer} />
            <Route exact path="/classes" component={KlassesContainer} />
            <Route exact path="/weapons" component={WeaponsContainer} />
            <Route exact path="/signup" 
              render={props => (<Signup {...props} handleLogin={this.handleLogin}/>)} />
            <Route exact path="/user" 
              render={props => (<UserProfile {...props}/>)} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default Routes
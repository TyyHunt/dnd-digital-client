import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import RacesContainer from '../containers/races/racesContainer';
import KlassesContainer from '../containers/klasses/klassesContainer';
import WeaponsContainer from '../containers/weapons/weaponsContainer';
import Navigation from '../containers/navbar/navbar';
import LandingPage from './landingPage';
import Signup from '../containers/user/signup';
import UserProfile from '../containers/user/userProfile';
import { getProfileFetch } from '../actions/userActions';
import { getKlasses } from '../actions/klassActions';
import { getRaces } from '../actions/raceActions';
import { getWeapons } from '../actions/weaponActions'

class Routes extends Component {

  componentDidMount = () => {
    this.props.getProfileFetch();
    this.props.getKlasses();
    this.props.getRaces();
    this.props.getWeapons()
  }

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
  getProfileFetch: () => dispatch(getProfileFetch()),
  getKlasses: () => dispatch(getKlasses()),
  getRaces: () => dispatch(getRaces()),
  getWeapons: () => dispatch(getWeapons())
})

//userPostFetch: userInfo => dispatch(userPostFetch(userInfo)),

export default connect(null, mapDispatchToProps)(Routes);
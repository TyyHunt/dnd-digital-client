import React, { Component } from 'react';
import Login from '../containers/user/login';
import { Button } from "react-bootstrap";
import './components.css'

export default class LandingPage extends Component {

  render() {
    return (
      <div className='homePage' >
        <div className='greeting' >
          <h1 className='mainHeader'>Bring Your Character to the 21st Century</h1>
          {this.props.loggedIn === false ? <Login handleLogin={this.props.handleLogin}/> :
              <a href="/user">
              <Button className="loginButton" type="submit">
                Go To Your User Page Now
              </Button>
              </a>}
        </div>
      </div>
    )
  }}
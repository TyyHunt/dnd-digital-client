import React, { Component } from 'react';
import Login from '../containers/user/login';
import './components.css'

export default class LandingPage extends Component {
  render() {
    return (
      <div className='homePage' >
        <div className='greeting' >
          <h1 className='mainHeader'>Bring Your Character to the 21st Century</h1>
          <Login />
        </div>
      </div>
    )
  }}
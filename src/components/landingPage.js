import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Login from '../containers/user/login';
import { connect } from 'react-redux';
import { Button } from "react-bootstrap";
import './components.css'

class LandingPage extends Component {
  handleClick = (event) => {
    event.preventDefault();
    this.props.history.push('/user')
  }

  render() {
    return (
      <div className='homePage' >
        <div className='greeting' >
          <h1 className='mainHeader'>Bring Your Character to the 21st Century</h1>
          { this.props.user.user
            ? <Button className="userButton" type="submit" onClick={this.handleClick}>Go To Your Profile Page</Button>
            : <Login /> }
        </div>
      </div>
    )
  }}

  const mapStateToProps = state => ({
    user: state.user
  });

export default withRouter(connect(mapStateToProps)(LandingPage));
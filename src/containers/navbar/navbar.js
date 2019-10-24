import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import { logoutUser } from '../../actions/userActions';


class Navigation extends Component {

  handleClick = event => {
    event.preventDefault()
    localStorage.removeItem("token")
    this.props.logoutUser()
    this.props.history.push('/')
  }
  render() {
    return (<Navbar variant="dark">
    <Navbar.Brand href="/">
    <img
      alt="d20 dice"
      src="https://static.thenounproject.com/png/763027-200.png"
      width="30"
      height="30"
      className="d-inline-block align-top"
    />
    {' D&D Digital '}
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/races">Races</Nav.Link>
      <Nav.Link href="/classes">Classes</Nav.Link>
      <Nav.Link href="/weapons">Weapons</Nav.Link>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-right">
      <Navbar.Text style={{ paddingLeft: '700px', color: 'white' }}>
          { this.props.user.user ? `Signed in as: ${this.props.user.user.username}` : null }
        </Navbar.Text>
        <Navbar.Text style={{ paddingLeft: '10px', color: 'white' }}>
          { this.props.user.user ? (<Button className="logoutButton" onClick={this.handleClick}>Log Out</Button> ) : null }
        </Navbar.Text>
    </Navbar.Collapse>
    </Nav>
  </Navbar>
  )}
}




const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navigation));
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { connect } from 'react-redux';
import Nav from 'react-bootstrap/Nav';


export const Navigation = ({user}) =>
  <Navbar variant="dark">
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
          Signed in as:  { user.username || "Not Logged In" }
        </Navbar.Text>
    </Navbar.Collapse>
    </Nav>
  </Navbar>;

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(Navigation);
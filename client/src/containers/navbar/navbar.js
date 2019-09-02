import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const Navigation = () =>
<Navbar bg="light" variant="light">
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
    <Nav.Link href="/klasses">Classes</Nav.Link>
    <Nav.Link href="/weapons">Weapons</Nav.Link>
  </Nav>
</Navbar>

export default Navigation
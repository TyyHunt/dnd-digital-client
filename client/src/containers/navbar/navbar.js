import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

const Navigation = () =>
<Navbar bg="light" variant="light">
 <Navbar.Brand href="#home">
  <img
    alt="d20 dice"
    src="https://static.thenounproject.com/png/763027-200.png"
    width="30"
    height="30"
    className="d-inline-block align-top"
  />
  {' React Bootstrap'}
 </Navbar.Brand>
 <Nav className="mr-auto">
   <Nav.Link href="#home">Home</Nav.Link>
   <Nav.Link href="#features">Features</Nav.Link>
   <Nav.Link href="#pricing">Pricing</Nav.Link>
 </Nav>
</Navbar>

export default Navigation
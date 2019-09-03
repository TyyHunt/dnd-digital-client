import React from 'react';
import Container from 'react-bootstrap/Container'

export const UserProfile = props =>
  <div >
    <Container className="fixedHeight">
      <h1 className="title">{props.email}</h1>
    </Container>
  </div>;

export default UserProfile
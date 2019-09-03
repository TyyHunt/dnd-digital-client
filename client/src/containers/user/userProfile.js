import React from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container'

export const UserProfile = ({ user }) =>
  <div >
    <Container>
      <h1 className="title">{user.username}</h1>
    </Container>
  </div>;

const mapStateToProps = ({ user }) => ({
  user,
});


export default connect(mapStateToProps)(UserProfile);
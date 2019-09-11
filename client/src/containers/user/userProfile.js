import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import {withRouter} from 'react-router-dom';
import IndexCharacters from '../characters/indexCharacters';
import { getProfileFetch } from '../../actions/userActions';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container'

class UserProfile extends Component {

  componentDidMount = () => {
    this.props.getProfileFetch();
  }

  handleClick = (event) => {
    event.preventDefault();
    this.props.history.push('/characters/new')
  }

  render() {
    return (
  <div>
    <Container className="fixedHeight">
      <Button className="userButton" type="submit" onClick={this.handleClick}>Add A Character</Button>
      <IndexCharacters />
    </Container>
  </div>
  )}
}

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
})

export default withRouter(connect(null, mapDispatchToProps)(UserProfile));
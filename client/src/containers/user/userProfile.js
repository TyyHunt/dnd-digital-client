import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import {withRouter} from 'react-router-dom';
import IndexCharacters from '../characters/indexCharacters'
import Container from 'react-bootstrap/Container'

class UserProfile extends Component {

  handleClick = (event) => {
    event.preventDefault();
    this.props.history.push('/character/new')
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
export default withRouter(UserProfile)
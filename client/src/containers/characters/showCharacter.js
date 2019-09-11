import React, { Component} from 'react';
import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux';
import { Button } from "react-bootstrap";
import { Col } from 'reactstrap';
import {characterUpdateFetch} from '../../actions/characterActions';
import Form from 'react-bootstrap/Form';

class ShowCharacter extends Component {
 state = {}

 handleChange = event => {
  this.setState({
    [event.target.id]: event.target.value
  });
}

handleSubmit = event => {
  event.preventDefault();
  console.log(this.state);
  this.props.characterUpdateFetch(this.state.id, this.state);
}

 componentDidMount () {
   const { id } = this.props.match.params

   fetch(`/characters/${id}`)
     .then(response => response.json())
     .then((character) => {
       this.setState(() => (character))
       console.log(this.state)
     })
 }

 render() {
  return (
   <Container>
    <h5 style={{color: '#fff'}}>*Edit Character Sheet When Needed</h5>
    <div className="characterShowPage">
    <Form onSubmit={this.handleSubmit} className="updateShowForm">
          <Form.Row className="characterName">
            <Form.Group as={Col} md="4" controlId="name">
              <Form.Control
                size="sm"
                type="text"
                placeholder={this.state.name}
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                style={{border: 'none'}}
              />
              </Form.Group>
          </Form.Row>
          <Form.Row className="characterKlass">
            <Form.Group as={Col} md="3" controlId="klass">
              <Form.Control
                size="sm"
                type="text"
                placeholder={this.state.klass}
                name="klass"
                value={this.state.klass}
                onChange={this.handleChange}
                style={{border: 'none'}}
              />
            </Form.Group>
            <Form.Group as={Col} md="2" controlId="level">
              <Form.Control
                size="sm"
                type="number"
                placeholder={this.state.level}
                name="level"
                value={this.state.level}
                onChange={this.handleChange}
                style={{border: 'none'}}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row className="characterHealth">
            <Form.Group as={Col} md="2" controlId="health">
              <Form.Control
                size="sm"
                type="number"
                placeholder={this.state.health}
                name="health"
                value={this.state.health}
                onChange={this.handleChange}
                style={{border: 'none'}}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row className="statRow">
            <Form.Group as={Col} md="2" controlId="str">
              <Form.Control
                type="number"
                placeholder={this.state.str}
                name="str"
                value={this.state.str}
                onChange={this.handleChange}
                style={{border: 'none'}}
              />
            </Form.Group>
            </Form.Row>
            <Form.Row className="statPadding">
            <Form.Group as={Col} md="2" controlId="int">
              <Form.Control
                type="number"
                placeholder={this.state.int}
                name="int"
                value={this.state.int}
                onChange={this.handleChange}
                style={{border: 'none'}}
              />
            </Form.Group>
            </Form.Row>
            <Form.Row>
            <Form.Group as={Col} md="2" controlId="wis">
              <Form.Control
                type="number"
                placeholder={this.state.wis}
                name="wis"
                value={this.state.wis}
                onChange={this.handleChange}
                style={{border: 'none'}}
              />
            </Form.Group>
            </Form.Row>
            <Form.Row className="statPadding">
            <Form.Group as={Col} md="2" controlId="dex">
              <Form.Control
                type="number"
                placeholder={this.state.dex}
                name="dex"
                value={this.state.dex}
                onChange={this.handleChange}
                style={{border: 'none'}}
              />
            </Form.Group>
            </Form.Row>
            <Form.Row className="statPadding">
            <Form.Group as={Col} md="2" controlId="con">
              <Form.Control
                type="number"
                placeholder={this.state.con}
                name="con"
                value={this.state.con}
                onChange={this.handleChange}
                style={{border: 'none'}}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="2" controlId="cha">
              <Form.Control
                type="number"
                placeholder={this.state.cha}
                name="cha"
                value={this.state.cha}
                onChange={this.handleChange}
                style={{border: 'none'}}
              />
            </Form.Group>
          </Form.Row>
          <Button className="characterControlButton" type="submit" >
            Update
          </Button>
        </Form>
      </div>
   </Container>
  )}
}

const mapDispatchToProps = dispatch => ({
 characterUpdateFetch: (id, userInfo) => dispatch(characterUpdateFetch(id, userInfo))
})

export default connect(null, mapDispatchToProps)(ShowCharacter);
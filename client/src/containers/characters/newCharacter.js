import React, { Component } from "react";
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import { Button } from "react-bootstrap";
import { Col } from 'reactstrap';
import Form from 'react-bootstrap/Form';
import {characterCreateFetch} from '../../actions/characterActions';
import '../../containers/containers.css'

class NewCharacter extends Component {
  constructor(props) {
    super(props)
    this.state = {
        name: '',
        level: '',
        health: 0,
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 0,
        user_id: this.props.user.id,
        race: '',
        klass: '',
        weapon: '',
        loginErrors: ''
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
  }

  

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.props.characterCreateFetch(this.state);
    this.props.history.push('/user');
  }



  render() {
    return (
      <div className="characterHeight">
      <div className="characterContainer shadow">
        <Form onSubmit={this.handleSubmit} className="characterForm">
          <h3 className="header">Create Character</h3>
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="level">
              <Form.Label>Level</Form.Label>
              <Form.Control
                type="number"
                placeholder="Level"
                name="level"
                value={this.state.level}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="health">
              <Form.Label>Health</Form.Label>
              <Form.Control
                type="number"
                placeholder="Health"
                name="health"
                value={this.state.health}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>
          <hr className="shadow"/>
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="str">
              <Form.Label>Strength</Form.Label>
              <Form.Control
                type="number"
                placeholder="Str"
                name="str"
                value={this.state.str}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="dex">
              <Form.Label>Dexterity</Form.Label>
              <Form.Control
                type="number"
                placeholder="Dex"
                name="dex"
                value={this.state.dex}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="con">
              <Form.Label>Constitution</Form.Label>
              <Form.Control
                type="number"
                placeholder="Con"
                name="con"
                value={this.state.con}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="int">
              <Form.Label>Intelligence</Form.Label>
              <Form.Control
                type="number"
                placeholder="Int"
                name="int"
                value={this.state.int}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="wis">
              <Form.Label>Wisdom</Form.Label>
              <Form.Control
                type="number"
                placeholder="Wis"
                name="wis"
                value={this.state.wis}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="cha">
              <Form.Label>Charisma</Form.Label>
              <Form.Control
                type="number"
                placeholder="Cha"
                name="cha"
                value={this.state.cha}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>
          <hr className="shadow"/>
          <Form.Group controlId="race">
            <Form.Label>Race</Form.Label>
            <Form.Control as="select" onChange={this.handleChange}>
              <option key="placeholder">Choose a Race...</option>
              {this.props.races.map(race =>
              <option key={race.name} value={race.name}>{race.name}</option>
              )}
            </Form.Control>
          </Form.Group>
          <hr className="shadow"/>
          <Form.Group controlId="klass">
            <Form.Label>Class</Form.Label>
            <Form.Control as="select" onChange={this.handleChange}>
              <option key="placeholder">Choose a Class...</option>
              {this.props.klasses.map(klass =>
              <option key={klass.name} value={klass.name}>{klass.name}</option>
              )}
            </Form.Control>
          </Form.Group>
          <hr className="shadow"/>
          <Form.Group controlId="weapon">
            <Form.Label>Weapon</Form.Label>
            <Form.Control as="select" onChange={this.handleChange}>
              <option key="placeholder">Choose a Weapon...</option>
              {this.props.weapons.map(weapons =>
              <option key={weapons.name} value={weapons.name}>{weapons.name}</option>
              )}
            </Form.Control>
          </Form.Group>
          <Button className="loginButton" type="submit" >
            Create
          </Button>
        </Form>
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
  races: state.races,
  klasses: state.klasses,
  weapons: state.weapons
});

const mapDispatchToProps = dispatch => ({
  characterCreateFetch: userInfo => dispatch(characterCreateFetch(userInfo))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewCharacter));
import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import '../../containers/containers.css'

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="loginContainer shadow">
        <Form onSubmit={this.handleSubmit} className="userForm">
        <h3 className="header">Log in</h3>
          <Form.Text>
            If you don't have a log in <a href="/signup" style={{color: "#974721"}}>Sign Up</a> now!
          </Form.Text>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
          </Form.Group>
          <Button className="loginButton" type="submit" disabled={!this.validateForm()}>
            Log in
          </Button>
        </Form>
        <div></div>
      </div>
    );
  }
}



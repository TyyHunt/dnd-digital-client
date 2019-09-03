import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import '../../containers/containers.css'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
        email: '',
        password: '',
        loginErrors: ''
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this)
  }

  handleSuccessfulAuth = data => {
    this.props.handleLogin(data);
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    const { email, password } = this.state;
      fetch("http://localhost:3001/api/sessions", {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state)
    },{
      user: {
        email: email,
        password: password
      }
    },
    { withCredentials: true }
    ).then(response => response.json())
    .then(response => {
      if (response.status === "created") {
        this.handleSuccessfulAuth(response.user);
      }
    })
    .catch(error => {
      console.log("registration error", error);
    });
    event.preventDefault();
  }

  render() {
    return (
      <div className="fixedHeight">
      <div className="loginContainer shadow">
        <Form onSubmit={this.handleSubmit} className="userForm">
          <h3 className="header">Log In</h3>
          <Form.Text className="header">
            If you don't have an account <a href="/signup" className="signUpLink">Sign Up</a> here!
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
      </div>
      </div>
    );
  }
}

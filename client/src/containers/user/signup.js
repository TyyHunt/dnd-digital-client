import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import '../../containers/containers.css'

export default class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
        email: '',
        password: '',
        password_confirmation: "",
        signupErrors: ''
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this)
  }

  handleSuccessfulAuth = data => {
    this.props.handleLogin(data);
    this.props.history.push('/')
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0 && this.state.password_confirmation.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    const { email, password, password_confirmation } = this.state;
      fetch("http://localhost:3001/api/users", {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state)
    },{
      user: {
        email: email,
        password: password,
        password_confirmation: password_confirmation
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
      <div className="signupContainer shadow">
        <Form onSubmit={this.handleSubmit} className="userForm">
          <h3 className="header">Sign Up</h3>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="password_confirmation">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Password Confirmation" value={this.state.password_confirmation} onChange={this.handleChange} />
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
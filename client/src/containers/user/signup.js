import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import '../../containers/containers.css'

export default class Signup extends Component {
 constructor(props) {
   super(props);

   this.state = {
     username: "",
     email: "",
     password: ""
   };
 }

 validateForm() {
   return this.state.email.length > 0 && this.state.password.length > 0 && this.state.username.length > 0;
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
    <div className="fixedHeight">
     <div className="signupContainer shadow">
       <Form onSubmit={this.handleSubmit} className="userForm">
        <h3 className="header">Sign Up</h3>
        <Form.Group controlId="username">
           <Form.Label>Username</Form.Label>
           <Form.Control type="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} />
        </Form.Group>
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
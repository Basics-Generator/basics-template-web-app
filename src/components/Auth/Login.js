import React, { Component } from "react";
import { FormGroup, FormControl } from "react-bootstrap";
import { login } from '../../utils/AuthService';

export default class Login extends Component {


  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.username.length >= 5 && this.state.password.length >= 5;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    login(this.state.username, this.state.password);
    event.preventDefault();
  }


  render() {
    return (
      <div className="page-wrapper">
        <div className="page-content--bge5">
            <div className="container">
                <div className="login-wrap">
                    <div className="login-content">
                        <div className="login-logo">
                            <a href="#">
                                <img src="images/icon/logo.png" alt="$BasicsTemplate"/>
                            </a>
                        </div>
                        <div className="login-form">
                            <form onSubmit={this.handleSubmit}>
                                <FormGroup controlId="username" bsSize="large">
                                    <label>Username</label>
                                    <FormControl autoFocus type="username" value={this.state.username} onChange={this.handleChange} />
                                </FormGroup>
                                <FormGroup controlId="password" bsSize="large">
                                    <label>Password</label>
                                    <FormControl autoFocus type="password" value={this.state.password} onChange={this.handleChange} />
                                </FormGroup>
                                <button className="au-btn au-btn--block au-btn--blue m-b-20" disabled={!this.validateForm()} type="submit">
                                 Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}
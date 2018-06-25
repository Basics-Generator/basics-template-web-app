import React, { Component } from 'react';

import Nav from '../Includes/Nav';
import Header from '../Includes/Header';
import { createUser } from '../../utils/UserService';

class create extends Component {

  constructor() {
    super()
    this.state = {email: '', username: '', password: ''};
    this.handleInputChange 	= this.handleInputChange.bind(this);
    this.handleSubmit 		= this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;


    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
	event.preventDefault();
    createUser(this.state);
  }


  render() {

    return (
      <div>
        <Nav />
        <Header />
        <div className="page-container">
            <div className="main-content">
                <div className="section__content section__content--p30">
                    <div className="container-fluid">
                        <div className="card">

	                        <div className="card-header">Create user</div>
	                        <div className="card-body card-block">
			                    <form onSubmit={this.handleSubmit}>
			                        <div className="form-group">
			                            <div className="input-group">
			                                <div className="input-group-addon">
			                                    <i className="fa fa-envelope"></i>
			                                </div>
			                                <input type="email" id="email" name="email" placeholder="Email" className="form-control" value={this.state.name} onChange={this.handleInputChange}/>
			                            </div>
			                        </div>
			                        <div className="form-group">
			                            <div className="input-group">
			                                <div className="input-group-addon">
			                                    <i className="fa fa-user"></i>
			                                </div>
			                                <input type="text" id="username" name="username" placeholder="Username" className="form-control" value={this.state.username} onChange={this.handleInputChange}/>
			                            </div>
			                        </div>
			                        <div className="form-group">
			                            <div className="input-group">
			                                <div className="input-group-addon">
			                                    <i className="fa fa-key"></i>
			                                </div>
			                                <input type="password" id="password" name="password" placeholder="Password" className="form-control" value={this.state.password} onChange={this.handleInputChange}/>
			                            </div>
			                        </div>
			                        <div className="form-actions form-group">
			                            <button type="submit" className="btn btn-lg btn-info btn-block">Done</button>
			                        </div>
			                    </form>
		                	</div>
	                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default create;
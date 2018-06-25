import React, { Component } from 'react';

import Nav from '../Includes/Nav';
import Header from '../Includes/Header';
import { createProject } from '../../utils/ProjectService';

class create extends Component {

  constructor() {
    super()
    this.state = {name: '', description: '', web: false, android: false, ios: false};
    this.handleInputChange 	= this.handleInputChange.bind(this);
    this.handleSubmit 		= this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;


    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
	event.preventDefault();
    createProject(this.state);
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

	                        <div className="card-header">Create project</div>
	                        <div className="card-body card-block">
			                    <form onSubmit={this.handleSubmit}>
			                        <div className="form-group">
			                            <div className="input-group">
			                                <div className="input-group-addon">
			                                    <i className="fa fa-align-justify"></i>
			                                </div>
			                                <input type="text" id="name" name="name" placeholder="Name" className="form-control" value={this.state.name} onChange={this.handleInputChange}/>
			                            </div>
			                        </div>
			                        <div className="form-group">
			                            <div className="input-group">
			                                <div className="input-group-addon">
			                                    <i className="fa fa-align-justify"></i>
			                                </div>
			                                <input type="description" id="description" name="description" placeholder="Description" className="form-control" value={this.state.description} onChange={this.handleInputChange}/>
			                            </div>
			                        </div>
			                        <div className="row form-group">
	                                    <div className="col col-md-12">
	                                        <label className=" form-control-label">Templates Deployment : </label>
	                                    </div>
	                                    <div className="col col-md-12">
	                                        <div className="form-check">
	                                            <div className="checkbox">
	                                                <label htmlFor="web" className="form-check-label ">
	                                                    <input type="checkbox" id="web" name="web"  value={this.state.web} onChange={this.handleInputChange} className="form-check-input"/>Web App
	                                                </label>
	                                            </div>
	                                            <div className="checkbox">
	                                                <label htmlFor="android" className="form-check-label ">
	                                                    <input type="checkbox" id="android" name="android"  value={this.state.android} onChange={this.handleInputChange} className="form-check-input"/> Android App
	                                                </label>
	                                            </div>
	                                            <div className="checkbox">
	                                                <label htmlFor="ios" className="form-check-label ">
	                                                    <input type="checkbox" id="ios" name="ios"  value={this.state.ios} onChange={this.handleInputChange} className="form-check-input"/> iOS App
	                                                </label>
	                                            </div>
	                                        </div>
	                                        <br/>
	                                        <p> Web app generated from : <a href="https://github.com/Basics-Generator/basics-template">Basics template</a></p>
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
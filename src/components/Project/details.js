import React, { Component } from 'react';

import Nav from '../Includes/Nav';
import Header from '../Includes/Header';
import { getProjectData, removeProject } from '../../utils/ProjectService';

class details extends Component {

  constructor(props) {
    super()
    this.id = props.params.id;
    this.state = { project: {} };
    this.handleRemove = this.handleRemove.bind(this);
  }

  getProjectDetails() {
    getProjectData(this.id).then((project) => {
      this.setState({ project });
    });
  }

  componentDidMount() {
    this.getProjectDetails();
  }

  handleRemove(event) {
    removeProject(this.id);
  }


  render() {

    const { project }  = this.state;

    return (
      <div>
        <Nav />
        <Header />
        <div className="page-container">
          <div className="main-content">
            <div className="section__content section__content--p30">
              <div className="card">
                <div className="card-header">
                  <strong className="card-title" v-if="headerText">{project.name}</strong>
                </div>
                <div className="card-body">
                  <div className="form-group">
                      <div className="input-group">
                          <div className="input-group-addon">
                              <i className="fa fa-align-justify"></i>
                          </div>
                          <input type="description" id="description" className="form-control" value={project.description} disabled/>
                      </div>
                  </div>
                  <div className="row form-group">
                    <div className="col col-md-12">
                        <label className=" form-control-label">Templates Deployment : </label>
                    </div>
                    <div className="col col-md-12">
                      <p>Web App = {(project.web === true) ? <span className="status--process">Generated</span> : <span className="status--denied">No</span>}</p>
                      <p>Android = {(project.android === true) ? <span className="status--process">Generated</span> : <span className="status--denied">No</span>}</p>
                      <p>iOS = {(project.ios === true) ? <span className="status--process">Generated</span> : <span className="status--denied">No</span>}</p>
                    </div>
                  </div>
                  <div className="form-actions form-group">
                      <button type="submit" className="btn btn-lg btn-danger btn-block" >Remove project</button>
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

export default details;
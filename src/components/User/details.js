import React, { Component } from 'react';

import Nav from '../Includes/Nav';
import Header from '../Includes/Header';
import { getUserData } from '../../utils/UserService';

class details extends Component {

  constructor(props) {
    super()
    this.id = props.params.id;
    this.state = { user: {} };
  }

  getProjectDetails() {
    getUserData(this.id).then((user) => {
      this.setState({ user });
    });
  }

  componentDidMount() {
    this.getProjectDetails();
  }


  render() {

    const { user }  = this.state;

    return (
      <div>
        <Nav />
        <Header />
        <div className="page-container">
          <div className="main-content">
            <div className="section__content section__content--p30">
              <div className="card">
                <div className="card-header">
                  <strong className="card-title" v-if="headerText">{user.username}</strong>
                </div>
                <div className="card-body">
                  <div className="form-group">
                      <div className="input-group">
                          <div className="input-group-addon">
                              <i className="fa fa-envelope"></i>
                          </div>
                          <input type="description" id="description" className="form-control" value={user.email} disabled/>
                      </div>
                  </div>
                  <div className="form-group">
                      <div className="input-group">
                          <div className="input-group-addon">
                              <i className="fa fa-clock"></i>
                          </div>
                          <input type="description" id="description" className="form-control" value={user.createdAt} disabled/>
                      </div>
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
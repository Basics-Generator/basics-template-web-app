import React, { Component } from 'react';

import Nav from '../Includes/Nav';
import Header from '../Includes/Header';

import { getUsersData } from '../../utils/UserService';
import { browserHistory } from 'react-router';

class list extends Component {

  constructor() {
    super();
    this.state = { users: [] };
  }

  componentDidMount() {
    const script = document.createElement("script");
    script.src = "/js/select2.js";
    document.body.appendChild(script);

    this.getUsers();
  }

  getUsers() {
    getUsersData().then((users) => {
      this.setState({ users });
    });
  }

  createUserToggle() {
    browserHistory.push('/users/new');
  }

  render() {

    const { users } = this.state;

    return (
      <div>
        <Nav />
        <div className="page-container">
            <Header />
            <div className="main-content">
                <div className="section__content section__content--p30">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <h3 className="title-5 m-b-35">Users</h3>
                                <div className="table-data__tool">
                                    <div className="table-data__tool-left">
                                        <div className="rs-select2--light rs-select2--md">
                                            <select className="js-select2" name="property">
                                                <option defaultValue="selected">All Properties</option>
                                                <option value="">Option 1</option>
                                                <option value="">Option 2</option>
                                            </select>
                                            <div className="dropDownSelect2"></div>
                                        </div>
                                        <div className="rs-select2--light rs-select2--sm">
                                            <select className="js-select2" name="time">
                                                <option defaultValue="selected">Today</option>
                                                <option value="">3 Days</option>
                                                <option value="">1 Week</option>
                                            </select>
                                            <div className="dropDownSelect2"></div>
                                        </div>
                                        <button className="au-btn-filter">
                                            <i className="zmdi zmdi-filter-list"></i>filters</button>
                                    </div>
                                    <div className="table-data__tool-right">
                                        <button className="au-btn au-btn-icon au-btn--green au-btn--small" onClick={this.createUserToggle}>
                                            <i className="zmdi zmdi-plus"></i>add user
                                        </button>
                                    </div>
                                </div>
                                <div className="table-responsive table-responsive-data2">
                                    <table className="table table-data2">
                                        <thead>
                                            <tr>
                                                <th>username</th>
                                                <th>email</th>
                                                <th>date</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                          { this.state.users.map((user, index ) => (
                                            <tr className="tr-shadow">
                                                <td>{user.username}</td>
                                                <td>{user.email}</td>
                                                <td>{user.createdAt.split('T')[0]} - {user.createdAt.split('T')[1].split('.')[0]}</td>
                                                <td><a href={'/users/' + user._id}> details</a></td>
                                            </tr>
                                          ))}
                                        </tbody>
                                    </table>
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

export default list;
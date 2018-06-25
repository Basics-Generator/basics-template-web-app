import React, { Component } from 'react';
import { logout } from '../../utils/AuthService';

class Logout extends Component {

  componentDidMount(){
    logout();
  }

  render() {
    return (
      <h1 className="loading-text">
        Logging out...
      </h1>
    );
  }
}

export default Logout;
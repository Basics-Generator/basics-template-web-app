import React from 'react';
import ReactDOM from 'react-dom';

import Login from "./components/Auth/Login";
import Logout from "./components/Auth/Logout";
import Home from "./components/Home";

import Users from './components/User/list';
import CreateUser from './components/User/create';
import DetailsUser from './components/User/details';

import { Router, Route, browserHistory } from 'react-router';
import { requireAuth } from './utils/AuthService';

const Root = () => {
  return (
    <div>
      <Router history={browserHistory}>
        <Route path="/" exact component={Login} />
        <Route path="/logout" exact component={Logout} />
        <Route path="/home" exact component={Home} onEnter={requireAuth} />

        <Route path="/users" component={Users} onEnter={requireAuth} />
        <Route path="/users/new" component={CreateUser} onEnter={requireAuth} />
        <Route path="/users/:id" component={DetailsUser} onEnter={requireAuth} />
        
      </Router>
    </div>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
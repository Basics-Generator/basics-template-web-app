import React from 'react';
import ReactDOM from 'react-dom';

import Login from "./components/Auth/Login";
import Logout from "./components/Auth/Logout";
import Home from "./components/Home";

import Users from './components/User/list';
import CreateUser from './components/User/create';
import DetailsUser from './components/User/details';

import Projects from './components/Project/list';
import CreateProject from './components/Project/create';
import DetailsProject from './components/Project/details';

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
        
        <Route path="/projects" component={Projects} onEnter={requireAuth} />
        <Route path="/projects/new" component={CreateProject} onEnter={requireAuth} />
        <Route path="/projects/:id" component={DetailsProject} onEnter={requireAuth} />
      </Router>
    </div>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
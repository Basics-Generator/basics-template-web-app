import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class Nav extends Component {


    render() {
        const path = browserHistory.getCurrentLocation().pathname;
        return (
            <div>
                <aside className="menu-sidebar d-none d-lg-block">
                    <div className="logo">
                        <a href="/home">
                            <img src="/images/icon/logo.png" alt="Cool Admin" />
                        </a>
                    </div>
                    <div className="menu-sidebar__content js-scrollbar1">
                        <nav className="navbar-sidebar">
                            <ul className="list-unstyled navbar__list">
                                {(path.indexOf("home") >= 0) ?
                                <li  className="active has-sub">
                                    <a className="js-arrow" href="/home"><i className="fas fa-tachometer-alt"></i>Dashboard</a>
                                </li>
                                :
                                <li>
                                    <a className="js-arrow" href="/home"><i className="fas fa-tachometer-alt"></i>Dashboard</a>
                                </li>
                                }
                                {(path.indexOf("projects") >= 0) ?
                                <li  className="active has-sub">
                                    <a href="/projects"><i className="fas fa-desktop"></i>Projects</a>
                                </li>
                                :
                                <li>
                                    <a href="/projects"><i className="fas fa-desktop"></i>Projects</a>
                                </li>
                                }
                                {(path.indexOf("users") >= 0) ?
                                <li  className="active has-sub">
                                    <a href="/users"><i className="fas fa-user"></i>Users</a>
                                </li>
                                :
                                <li>
                                    <a href="/users"><i className="fas fa-user"></i>Users</a>
                                </li>
                                }
                            </ul>
                        </nav>
                    </div>
                </aside>
            </div>
        );
    }

}

export default Nav;
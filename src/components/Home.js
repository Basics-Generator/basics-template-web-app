import React, { Component } from 'react';
import Nav from './Includes/Nav';
import Header from './Includes/Header';

class Home extends Component {


  componentDidMount() {
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
                        <div className="row">
                            <div className="col-md-12">
                                <div className="overview-wrap">
                                    <h2 className="title-1">overview</h2>
                                    <button className="au-btn au-btn-icon au-btn--blue">
                                        <i className="zmdi zmdi-plus"></i>add item
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="row m-t-25">
                            <div className="col-sm-6 col-lg-6">
                                <div className="overview-item overview-item--c1">
                                    <div className="overview__inner">
                                        <div className="overview-box clearfix">
                                            <div className="icon">
                                                <i className="zmdi zmdi-account-o"></i>
                                            </div>
                                            <div className="text">
                                                <h2>10368</h2>
                                                <span>Users</span>
                                            </div>
                                        </div>
                                        <div className="overview-chart">
                                            <canvas id="widgetChart1"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-6">
                                <div className="overview-item overview-item--c3">
                                    <div className="overview__inner">
                                        <div className="overview-box clearfix">
                                            <div className="icon">
                                                <i className="zmdi zmdi-desktop-mac"></i>
                                            </div>
                                            <div className="text">
                                                <h2>388,688</h2>
                                                <span>Projects</span>
                                            </div>
                                        </div>
                                        <div className="overview-chart">
                                            <canvas id="widgetChart2"></canvas>
                                        </div>
                                    </div>
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

export default Home;
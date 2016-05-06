import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import 'font-awesome/scss/font-awesome.scss';

class Sidebar extends Component {


  constructor(props){
	  super(props);
	  this.eventCloseSidebar = this.eventCloseSidebar.bind(this)
  }

  eventCloseSidebar (e) {
  	this.props.toggleSidebar(!this.props.layout.sidebarOpen);
  }

  render() {

    return (

    	<div className="sidebar">

		  <div className="sidebar-item sidebar-header">
        <ul id="social">
         <li>
             <a href="http://www.github.com/mb389" target="_blank" className="btn-social"><i className="fa fa-fw fa-github"></i></a>
         </li>
         <li>
             <a href="https://www.facebook.com/michael.bushoy" target="_blank" className="btn-social"><i className="fa fa-fw fa-facebook"></i></a>
         </li>
         <li>
             <a href="https://www.linkedin.com/in/michaelbushoy" target="_blank" className="btn-social"><i className="fa fa-fw fa-linkedin"></i></a>
         </li>
         <li>
             <a href="https://angel.co/mb389" target="_blank" className="btn-social"><i className="fa fa-fw fa-angellist"></i></a>
         </li>
       </ul>
		  </div>

		  <nav className="sidebar-nav">
		    <Link to="/" className="sidebar-nav-item" onClick={this.eventCloseSidebar} activeClassName="active">Home</Link>
		    <Link to="/portfolio" className="sidebar-nav-item" onClick={this.eventCloseSidebar} activeClassName="active">My Projects</Link>
		    <Link to="/resume" className="sidebar-nav-item" onClick={this.eventCloseSidebar} activeClassName="active">My Resume</Link>
        <Link to="/travels" className="sidebar-nav-item" onClick={this.eventCloseSidebar} activeClassName="active">My Travels</Link>
		    <Link to="/about" className="sidebar-nav-item" onClick={this.eventCloseSidebar} activeClassName="active">About Me</Link>
		  </nav>

		  <div className="sidebar-item sidebar-footer">


		  </div>

		</div>
    );
  }
}

export default Sidebar;

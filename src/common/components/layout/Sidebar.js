import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

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

		  <div className="sidebar-item sidebar-footer">
        <ul id="social">
                         <li>
                             <a href="http://www.github.com/mb389" className="btn-social"><i className="fa fa-fw fa-github"></i></a>
                         </li>
                         <li>
                             <a href="https://www.facebook.com/michael.bushoy" className="btn-social"><i className="fa fa-fw fa-facebook"></i></a>
                         </li>
                         <li>
                             <a href="https://www.linkedin.com/in/michaelbushoy" className="btn-social"><i className="fa fa-fw fa-linkedin"></i></a>
                         </li>
                     </ul>
		  </div>

		  <nav className="sidebar-nav">
		    <Link to="/home" className="sidebar-nav-item" onClick={this.eventCloseSidebar} activeClassName="active">Home</Link>
		    <Link to="/portfolio" className="sidebar-nav-item" onClick={this.eventCloseSidebar} activeClassName="active">My Projects</Link>
		    <Link to="/resume" className="sidebar-nav-item" onClick={this.eventCloseSidebar} activeClassName="active">My Resume</Link>
        <Link to="/travels" className="sidebar-nav-item" onClick={this.eventCloseSidebar} activeClassName="active">My Travels</Link>
		    <Link to="/about" className="sidebar-nav-item" onClick={this.eventCloseSidebar} activeClassName="active">About</Link>
		  </nav>

		  <div className="sidebar-item sidebar-footer">


		    <p>
		    	Design based on <a href="http://lanyon.getpoole.com/"> Lanyon Theme</a>
		    </p>

		  </div>

		</div>
    );
  }
}

export default Sidebar;

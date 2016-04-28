import React, { Component } from 'react';
import Banner from './layout/Banner';

class Home extends Component {

  constructor(props){
    super(props);
    this.eventToggleSidebar = this.eventToggleSidebar.bind(this)
  }

  eventToggleSidebar(e) {
    e.preventDefault();
    this.props.toggleSidebar(!this.props.layout.sidebarOpen);
  }

  render() {

    return (

      	<div className="posts">

  			<div className="post banner">
			    <h2 className="post-title">I'm a former Market Risk Manager turned Software Engineer by way of Fullstack Academy. Based in Brooklyn, NY.</h2> <h4>I'm also an avid marathoner, world traveler, poker player, and music obsessive. I have a passion for learning new skills and concepts then applying them to build cool stuff! <a href="#" onClick={this.eventToggleSidebar}> Click to learn more</a></h4>

			</div>

		  	<div className="post clearfix">

				<h2>Technologies</h2>

				<div className="skill-item clearfix">
					<h4>Client Side JS</h4>
					<ul className="">
						<li><em>Angular</em></li>
						<li><em><b>*</b>React</em>
							<ul>
								<li><em><b>*</b>Redux</em></li>
							</ul>
						</li>
						<li><em>D3</em></li>
            <li><em>socket.io</em></li>
					</ul>
				</div>


				<div className="skill-item clearfix">
					<h4>Server Side JS</h4>
					<ul>
						<li><em><b>*</b>Node</em>
							<ul>
								<li><em><b>*</b>Express</em></li>
							</ul>

              <li><em>MongoDB</em></li>
              <ul>
                <li><em>Mongoose</em></li>
              </ul>
              <li><em>SQL</em></li>
                <ul>
                  <li><em>Sequelize</em></li>
                </ul>
						</li>
					</ul>
				</div>

				<div className="skill-item clearfix">
					<h4>Testing</h4>
					<ul>
						<li><em>Jasmine</em></li>
						<li><em>Karma</em></li>
						<li><em>Mocha</em></li>
						<li><em>Chai</em></li>
					</ul>
				</div>

				<div className="skill-item clearfix">
					<h4>Deployment</h4>
					<ul className="clearfix">
						<li><em><b>*</b>Webpack</em></li>
						<li><em>Gulp</em></li>
						<li><em>Heroku</em></li>
					</ul>
				</div>

				<div className="exclaimation">
					<em><b>*</b> This site is built with these technologies. View the <a href="https://github.com/mb389/portfolio-react-redux">github repo here</a>.</em><br/>
				</div>

  			</div>

			<Banner />

  		</div>

    );
  }
}

export default Home;

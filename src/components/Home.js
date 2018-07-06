import React, { Component } from 'react';
import Banner from './layout/Banner';

class Home extends Component {

  constructor(props){
    super(props);
    this.eventToggleSidebar = this.eventToggleSidebar.bind(this);
  }

  eventToggleSidebar(e) {
    e.preventDefault();
    this.props.toggleSidebar(!this.props.layout.sidebarOpen);
  }

  render() {

    return (

        <div className="posts">

        <div className="post banner">
          <h2 className="post-title">I'm a former Market Risk Manager turned Software Engineer by way of Fullstack Academy. Based in Brooklyn, NY.</h2> <h4>I'm also an avid marathoner, world traveler, poker player, explorer of technology, and music obsessive. I have a passion for learning new skills and concepts and applying them to build cool stuff! <a href="#" onClick={this.eventToggleSidebar}> Click to learn more</a></h4>

      </div>

        <div className="post clearfix">

        <h2>Technologies</h2>

        <div className="skill-item clearfix">
          <h4>Client Side</h4>
          <ul>
            <li><em>Angular</em></li>
            <li><em><b>*</b>React</em></li>
              <ul>
                <li><em><b>*</b>Redux</em></li>
              </ul>
            <li><em><b>*</b>CSS / SASS</em></li>
          </ul>
        </div>

        <div className="skill-item clearfix">
          <h4>Server Side</h4>
          <ul>
            <li><em><b>*</b>Node</em></li>
            <ul>
              <li><em><b>*</b>Express</em></li>
            </ul>
            <li><em>Python</em></li>
            <ul>
              <li><em>Flask</em></li>
            </ul>
            <li><em>Go</em></li>
            <li><em>MongoDB</em></li>
            <ul>
              <li><em>Mongoose</em></li>
              <li><em>mgo</em></li>
            </ul>
            <li><em>SQL</em></li>
            <ul>
              <li><em>Sequelize</em></li>
              <li><em>SQL Alchemy</em></li>
            </ul>
          </ul>
        </div>

        <div className="skill-item clearfix">
          <h4>Testing</h4>
          <ul>
            <li><em>Jest</em></li>
            <li><em>Mocha</em></li>
            <li><em>Chai</em></li>
            <li><em>PyTest</em></li>
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

        <div className="skill-item clearfix">
          <h4>Infrastructure</h4>
          <ul className="clearfix">
            <li><em>Docker</em></li>
            <li><em>CircleCI</em></li>
            <li><em>Nginx</em></li>
            <li><em>AWS</em></li>
            <li><em>GCS</em></li>
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

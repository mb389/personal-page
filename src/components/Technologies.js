import React, { Component } from "react";

const Technologies = () => (
  <div className="post clearfix">
    <h2>Technologies I've Worked With</h2>

    <div className="skill-item clearfix">
      <h4>Client Side</h4>
      <ul>
        <li>
          <em>Angular</em>
        </li>
        <li>
          <em>React</em>
        </li>
        <ul>
          <li>
            <em>Redux</em>
          </li>
        </ul>
        <li>
          <em>
            <b>*</b>CSS / SCSS
          </em>
        </li>
      </ul>
    </div>

    <div className="skill-item clearfix">
      <h4>Server Side</h4>
      <ul>
        <li>
          <em>
            <b>*</b>Node
          </em>
        </li>
        <ul>
          <li>
            <em>Express</em>
          </li>
        </ul>
        <li>
          <em>Python</em>
        </li>
        <ul>
          <li>
            <em>Flask</em>
          </li>
        </ul>
        <li>
          <em>Go</em>
        </li>
        <li>
          <em>MongoDB</em>
        </li>
        <ul>
          <li>
            <em>Mongoose</em>
          </li>
          <li>
            <em>mgo</em>
          </li>
        </ul>
        <li>
          <em>Ruby</em>
        </li>
        <ul>
          <li>
            <em>Rails</em>
          </li>
        </ul>
        <li>
          <em>SQL</em>
        </li>
        <ul>
          <li>
            <em>Sequelize</em>
          </li>
          <li>
            <em>SQL Alchemy</em>
          </li>
          <li>
            <em>Active Record</em>
          </li>
        </ul>
      </ul>
    </div>

    <div className="skill-item clearfix">
      <h4>Testing</h4>
      <ul>
        <li>
          <em>Jest</em>
        </li>
        <li>
          <em>Mocha</em>
        </li>
        <li>
          <em>Chai</em>
        </li>
        <li>
          <em>PyTest</em>
        </li>
        <li>
          <em>RSpec</em>
        </li>
      </ul>
    </div>

    <div className="skill-item clearfix">
      <h4>Build</h4>
      <ul>
        <li>
          <em>Webpack</em>
        </li>
        <li>
          <em>Gulp</em>
        </li>
      </ul>
    </div>

    <div className="skill-item clearfix">
      <h4>Infrastructure</h4>
      <ul className="clearfix">
        <li>
          <em>Docker</em>
        </li>
        <li>
          <em>CircleCI</em>
        </li>
        <li>
          <em>Nginx</em>
        </li>
        <li>
          <em>AWS</em>
        </li>
        <li>
          <em>GCS</em>
        </li>
        <li>
          <em>Heroku</em>
        </li>
      </ul>
    </div>
  </div>
);

export default Technologies;

import React, { Component } from "react";
import "font-awesome/scss/font-awesome.scss";

const Header = () => (
  <div className="masthead container">
    <h3 className="masthead-title">
      <a href="/" title="Home">
        Michael Bushoy
      </a>
    </h3>
    <div className="social-links">
      <ul id="social">
        <li>
          <span className="bracket">[</span>
        </li>
        <li>
          <a
            href="http://www.github.com/mb389"
            rel="noopener"
            target="_blank"
            className="btn-social"
          >
            <i className="fa fa-fw fa-github"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.twitter.com/mb389"
            rel="noopener"
            target="_blank"
            className="btn-social"
          >
            <i className="fa fa-fw fa-twitter"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/michaelbushoy"
            rel="noopener"
            target="_blank"
            className="btn-social"
          >
            <i className="fa fa-fw fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a
            href="https://angel.co/mb389"
            rel="noopener"
            target="_blank"
            className="btn-social"
          >
            <i className="fa fa-fw fa-angellist"></i>
          </a>
        </li>
        <li>
          <span className="bracket">]</span>
        </li>
      </ul>
    </div>
  </div>
);

export default Header;

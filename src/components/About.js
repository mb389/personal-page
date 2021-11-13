import React from "react";

const About = () => (
  <div className="about post banner">
    <h2 className="post-title">
      About Me{" "}
      <span className="emoji-wrapper">
        <span className="bracket">[</span>
        <span className="emoji" role="img" aria-label="male-technologist">
          👨‍💻
        </span>
        <span className="bracket">]</span>
      </span>
    </h2>{" "}
    <p>
      Born in the former Soviet Union and raised in Needham, MA, I've been
      living in NYC since graduating from{" "}
      <a href="http://www.cornell.edu" rel="noopener" target="_blank">
        Cornell University
      </a>{" "}
      in 2007. After completing a major in Industrial Relations & Economics, I
      joined{" "}
      <a href="http://www.jpmorgan.com" rel="noopener" target="_blank">
        J.P. Morgan
      </a>{" "}
      as an Internal Consulting Analyst, 2 years later transitioning into Market
      Risk.{" "}
    </p>
    <p>
      After 8 years at J.P. Morgan, I chose to leave to pursue my love for
      technology & the web, soon after enrolling at{" "}
      <a href="http://www.fullstackacademy.com" rel="noopener" target="_blank">
        Fullstack Academy of Code
      </a>
      , a 17-week immersive program focused on web application development.{" "}
    </p>
    <p>
      After Fullstack, I joined{" "}
      <a href="http://irisvr.com" rel="noopener" target="_blank">
        IrisVR
      </a>
      , a company seeking to help architects view 3D models in VR, where I
      primarily worked on the Scope Library, a web-based tool for managing &
      viewing panoramic image files.{" "}
    </p>
    <p>
      I'm currently working as a software engineer at{" "}
      <a href="http://coinbase.com" rel="noopener" target="_blank">
        Coinbase
      </a>
      .
    </p>
  </div>
);

export default About;

import React from "react";

import proScreenImg from "../assets/pro.jpg";
import ratScreenImg from "../assets/rat.jpg";

const About = () => {
  const imageGutterWidth = (window.innerWidth - 300) / 2;
  const hoverImageStyles =
    window.innerWidth > 800
      ? { width: 500 }
      : { width: 300, top: -180, right: imageGutterWidth };

  return (
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
        as an Internal Consulting Analyst, 2 years later transitioning into
        Market Risk.{" "}
      </p>
      <p>
        After 8 years at J.P. Morgan, I chose to leave to pursue my love for
        technology & the web, soon after enrolling at{" "}
        <a
          href="http://www.fullstackacademy.com"
          rel="noopener"
          target="_blank"
        >
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
      <p style={{ position: "relative" }}>
        I'm currently working as a software engineer at{" "}
        <a href="http://coinbase.com" rel="noopener" target="_blank">
          Coinbase
        </a>
        , where I've contributed to{" "}
        <a href="http://pro.coinbase.com" rel="noopener" target="_blank">
          <span className="hover-text">Coinbase Pro</span>
          <img
            src={proScreenImg}
            className="hover-image"
            style={{
              position: "absolute",
              top: -300,
              right: "20%",
              pointerEvents: "none",
              maxWidth: "unset",
              opacity: "80%",
              ...hoverImageStyles,
            }}
          />
        </a>
        ,{" "}
        <a href="http://coinbase.com/rat" rel="noopener" target="_blank">
          <span className="hover-text">Retail Advanced Trading</span>
          <img
            src={ratScreenImg}
            className="hover-image"
            style={{
              position: "absolute",
              top: -300,
              right: "20%",
              pointerEvents: "none",
              maxWidth: "unset",
              opacity: "80%",
              ...hoverImageStyles,
            }}
          />
        </a>
        , the Protocols team and{" "}
        <a href="http://cloud.coinbase.com" rel="noopener" target="_blank">
          Coinbase Cloud
        </a>
        .
      </p>
    </div>
  );
};

export default About;

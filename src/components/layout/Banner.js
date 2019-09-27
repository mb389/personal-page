import React, { Component } from "react";
import classNames from "classnames";

class Banner extends Component {
  render() {
    return (
      <div className="contact-banner">
        <p>
          Thanks for stopping by!{" "}
          <span className="emoji-wrapper">
            <span className="bracket">[</span>
            <span className="emoji" role="img" aria-label="waving-hand">
              👋
            </span>
            <span className="bracket">]</span>
          </span>
        </p>
      </div>
    );
  }
}

export default Banner;

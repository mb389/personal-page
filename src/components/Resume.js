import React, { Component, PropTypes } from "react";
import Banner from "./layout/Banner";

class Resume extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <iframe
            className="resume"
            src="https://drive.google.com/uc?export=view&id=0B_LT_rwWIdGJaG44MEdFaUQzSzQ"
          />
        </div>
      </div>
    );
  }
}

export default Resume;

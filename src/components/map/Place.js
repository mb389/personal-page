import React, {PropTypes, Component} from 'react';
import {greatPlaceStyle, greatPlaceStyleHover} from './PlaceStyles';

export default class MyGreatPlace extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const style = this.props.hover ? greatPlaceStyleHover : greatPlaceStyle;
    // console.log("place",this.props)
    return (
       <div className="hint hint--html hint--info hint--top" style={style}>
          <div>{this.props.text}</div>
          {/*<div style={{width: 80}} className="hint__content">
          Сlick me
          </div>*/}
       </div>
    );
  }
}

MyGreatPlace.propTypes = {
  hover: PropTypes.bool,
  text: PropTypes.string
};

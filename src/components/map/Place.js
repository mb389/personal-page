import React, {PropTypes, Component} from 'react';
import {greatPlaceStyle, greatPlaceStyleHover} from './PlaceStyles';

export default class MyGreatPlace extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const style = this.props.hover ? greatPlaceStyleHover : greatPlaceStyle;
  
    return (
       <div className="hint hint--html hint--info hint--top" style={style}>
          <div>{this.props.text}</div>

          {this.props.hover ? <div className="hint__content">{this.props.name}</div> : ''}
       </div>
    );
  }
}

MyGreatPlace.propTypes = {
  hover: PropTypes.bool,
  text: PropTypes.string
};

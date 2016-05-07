import React, { PropTypes, Component } from "react";
import GoogleMap from 'google-map-react';
import MyGreatPlace from './Place';
import {K_SIZE} from './PlaceStyles';
import {getTravelLocations} from '../../api/travelLocations';
import controllable from 'react-controllables';

@controllable(['center', 'zoom', 'hoverKey', 'clickKey'])
export default class TravelMap extends Component {

  constructor(props) {
    super(props);
    this._onChildClick=this._onChildClick.bind(this);
    this._onChange=this._onChange.bind(this);
    this._onChildMouseEnter=this._onChildMouseEnter.bind(this);
    this._onChildMouseLeave=this._onChildMouseLeave.bind(this);
  }

  componentWillMount() {
    this.setState({hover: false})
  }

  _onChange (center, zoom /* , bounds, marginBounds */) {
    console.log("onchange")
   this.props.onCenterChange(center);
   this.props.onZoomChange(zoom);
 }

 _onChildClick (key, childProps) {
   console.log(childProps)
  //  this.props.onCenterChange([childProps.lat, childProps.lng]);

 }

 _onChildMouseEnter (key /*, childProps */) {
  //  this.props.onHoverKeyChange(key);
   this.setState({hover: key})
 }

 _onChildMouseLeave (/* key, childProps */) {
  //  this.props.onHoverKeyChange(null);
  this.setState({hover: false})
 }

  render() {

    const places = this.props.greatPlaces
    .map(place => {
      const {id, ...coords} = place;
      console.log(this.state)
      return (
        <MyGreatPlace
          key={id}
          {...coords}
          text={id}
          // use your hover state (from store, react-controllables etc...)
          hover={this.state.hover === id} />
      );
    });

    return (
      <div style={{height: "800px", width: "800px"}}>
       <GoogleMap
         center={this.props.center}
         zoom={this.props.zoom}
         hoverDistance={K_SIZE / 2}
         onBoundsChange={this._onBoundsChange}
         onChildClick={this._onChildClick}
         onChildMouseEnter={this._onChildMouseEnter}
         onChildMouseLeave={this._onChildMouseLeave}
        >
        {places}
      </GoogleMap>
    </div>
    );
  }
}

TravelMap.defaultProps = {
  center: [59.838043, 30.337157],
    zoom: 1,
    greatPlaces: getTravelLocations()
};


TravelMap.propTypes = {
    center: PropTypes.array, // @controllable
    zoom: PropTypes.number, // @controllable
    hoverKey: PropTypes.string, // @controllable
    clickKey: PropTypes.string, // @controllable
    onCenterChange: PropTypes.func, // @controllable generated fn
    onZoomChange: PropTypes.func, // @controllable generated fn
    // onHoverKeyChange: PropTypes.func, // @controllable generated fn
    greatPlaces: PropTypes.array
}

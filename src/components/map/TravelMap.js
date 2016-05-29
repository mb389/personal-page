import React, { PropTypes, Component } from "react";
import GoogleMap from 'google-map-react';
import MyGreatPlace from './Place';
import {K_SIZE} from './PlaceStyles';
import {getTravelLocations} from '../../api/travelLocations';
import controllable from 'react-controllables';
import { fitBounds } from 'google-map-react/utils';

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
    this.setState({hover: false,
      center: [35.4279, 70.3],
        zoom: 1})
  }

  _onChange (obj) {
    console.log("onchange",obj)
    this.setState({ center: obj.center, zoom: obj.zoom})

 }

 _onChildClick (key, childProps) {
   console.log(childProps)
   this.setState({center: [childProps.lat, childProps.lng], zoom: 5});
 }

 _onChildMouseEnter (key /*, childProps */) {
   this.setState({hover: key})
 }

 _onChildMouseLeave (/* key, childProps */) {
    this.setState({hover: false})
 }

  render() {

    const places = this.props.greatPlaces
    .map(place => {
      const {id, name, ...coords} = place;
      return (
        <MyGreatPlace
          key={id}
          {...coords}
          text={id}
          name={name}
          hover={this.state.hover === id} />
      );
    });

    const { initialCenter, ...restProps } = this.props;
    const { zoom, center } = this.state;

    return (
      <div style={{height: "800px", width: "1000px"}}>
       <GoogleMap
         center={center}
         zoom={zoom}
         hoverDistance={K_SIZE / 2}
         onChange={this._onChange}
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
  //  center: [35.4279, 70.3],
  //    zoom: 1,
     greatPlaces: getTravelLocations()
 };


TravelMap.propTypes = {
    // center: PropTypes.array, // @controllable
    // zoom: PropTypes.number, // @controllable
    // hoverKey: PropTypes.string, // @controllable
    // clickKey: PropTypes.string, // @controllable
  //  onCenterChange: PropTypes.func, // @controllable generated fn
  //  onZoomChange: PropTypes.func, // @controllable generated fn
    // onHoverKeyChange: PropTypes.func, // @controllable generated fn
    greatPlaces: PropTypes.array
}

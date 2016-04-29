import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.saveMap(
      new google.maps.Map(ReactDOM.findDOMNode(this), {
        zoom: 10,
        center: {lat: 39.50, lng: -78.35},
      })
    )
  }

  componentWillUpdate(nextProps) {
    fitZoom([nextProps.markerA, nextProps.markerB], this.props.map)
  }

  render() {
    return (
      <div className="mapBox">
        {this.props.children}
      </div>
    );
  }
}

Map.propTypes = {
  children: PropTypes.any.isRequired,
  saveMap: PropTypes.func,
  map: PropTypes.any.isRequired
};



// Adjust the zoom of the map
// Only adjust when there are two markers
function fitZoom(markers, map) {
  if(!markers[0] || !markers[1]) return;
  const bounds = new google.maps.LatLngBounds();
  markers.forEach(mrk => {
    if(mrk) bounds.extend(mrk.getPosition())
  });
  map.fitBounds(bounds);
}

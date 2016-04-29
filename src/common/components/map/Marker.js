import React, {PropTypes} from 'react';

export default class Marker extends React.Component {
  constructor(props) {
    super(props);
  }

  // when component receives new props check to see if should create a marker
  componentWillReceiveProps(nextProps) {
    if(nextProps.map && nextProps.place.size && nextProps.place !== this.props.place) {
      const marker = createMapMarker(nextProps.place, nextProps.map)
      this.props.addMarker(this.props.id, marker)
    }
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.place !== this.props.place
  }

  render() {
    return <div />;
  }
}

Marker.propTypes = {
  place: PropTypes.object,
  map: PropTypes.any.isRequired,
  addMarker: PropTypes.func,
  id: PropTypes.number
};


function createMapMarker(place, map) {
  return new google.maps.Marker({
    position: {lat: place.lat, lng: place.lng},
    map: map,
    title: place.name
  })
}

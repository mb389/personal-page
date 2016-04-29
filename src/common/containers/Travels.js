import React, { Component, PropTypes } from 'react';
import Map from '../components/map/Map';
import Marker from '../components/map/Marker';


class Travels extends Component {
  constructor(props) {
    super(props);
    this.state = {markers: []}
    this.generateMarkers = this.generateMarkers.bind(this);
    this.addMarker = this.addMarker.bind(this);
    // this.saveMap = this.saveMap.bind(this);
  }
  generateMarkers(places) {
    const markers = places.map((item,i) => {
      return (<Marker
                map={this.props.map}
                place={item}
                addMarker={this.props.addMarker}
                id={i}
              />)
    })
    this.setState()
  }

  addMarker(id, marker) {
  // function to pass as props to Marker component
  this.props.dispatch(Actions.addMarker(id, marker))
}

// saveMap(map) {
//   // function to pass as props to Map component
//   this.props.dispatch(Actions.saveMap(map))
// }

  shouldComponentUpdate(nextProps) {
    return nextProps.places !== this.props.places ||
          nextProps.map !== this.props.map
  }


  render () {
    return (

      <div className='travels container'>
        <div >
        <Map
            places={this.props.places}
            markers={this.props.markers}
            map={this.props.map}
      >
        {this.state.markers}
      </Map>
    </div>
    <div className='travel_item'>
      <a data-flickr-embed="true" data-header="true" data-footer="true"  href="https://www.flickr.com/photos/141547813@N08/albums/72157665334686983" title="World Travels"><img src="https://farm2.staticflickr.com/1490/26694929215_0b817544ea_z.jpg" width="640" height="640" alt="World Travels"/></a><script async src="//embedr.flickr.com/assets/client-code.js"></script>
      </div>

    </div>

    );
  }
}

Travels.propTypes = {
  places: PropTypes.array,
  addMarker: PropTypes.func,
  markers: PropTypes.array,
  saveMap: PropTypes.func,
  map: PropTypes.object
};


function mapStateToProps(store) {
  return {
    places: store.travels.places,
    markers: store.travels.markers,
    map: store.travels.map
  }
}

export default Travels;

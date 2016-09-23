import React, { Component } from 'react';
import './App.css';

// const EIFFEL_TOWER_POSITION = {
//   lat: 48.858608,
//   lng: 2.294471
// };

class App extends Component {
  componentDidMount() {
    this.map = new window.google.maps.Map(this.refs.map, {
      center: {lat: 0, lng: -180},
      zoom: 2
    });

    var flightPlanCoordinates = [
      {lat: 37.772, lng: -122.214},
      {lat: 21.291, lng: -157.821},
      {lat: -18.142, lng: 178.431},
      {lat: -27.467, lng: 153.027}
    ];

    var flightPath = new window.google.maps.Polyline({
      path: flightPlanCoordinates,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });
    flightPath.setMap(this.map);
  }

  render() {
    const mapStyle = {
      width: 500,
      height: 300,
      border: '1px solid black'
    };

    return (
      <div ref="map" style={mapStyle}>I should be a map!</div>
    );
  }
}

export default App;

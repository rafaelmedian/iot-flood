import React, { Component } from 'react';
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  withScriptjs,
  Circle
} from "react-google-maps";
import './App.css';

const positions = [
  {
    lat: 18.3978791,
    lng: -66.08799
  },
  {
    lat: 18.3978793,
    lng: -66.08775
  },
  {
    lat: 18.3978797,
    lng: -66.08793
  },
  {
    lat: 18.3978789,
    lng: -66.08797
  },
];

const startLocation = { lat: 18.3978789, lng: -66.08797 };
const defaultZoom = 20;

const mapCircles = positions => {
  return positions.map((pos, i) => {
    return (
      <Circle
        key={i}
        clickable
        center={pos}
        radius={2}
        onCenterChanged={this.onCenterChanged}
        onRadiusChanged={this.onRadiusChanged}
        options={{
          fillColor: '#f00',
          strokeColor: '#f00',
        }}
      />
    )
  });
};

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={defaultZoom}
    defaultCenter={startLocation}
  >
    {mapCircles(positions)}
  </GoogleMap>
));

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyMapComponent
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }}/>}
          containerElement={<div style={{ height: `100vh` }}/>}
          mapElement={<div style={{ height: `100%` }}/>}
        /></div>
    );
  }
}

export default App;

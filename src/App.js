import React, { Component } from 'react';
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  Circle
} from "react-google-maps";
import './App.css';

const positions = [
  {
    lat: 18.3973291,
    lng: -66.08799,
    depth: 1
  },
  {
    lat: 18.3978593,
    lng: -66.08775,
    depth: 1
  },
  {
    lat: 18.3973797,
    lng: -66.08793,
    depth: 3
  },
  {
    lat: 18.3978489,
    lng: -66.08797,
    depth: 4
  },
];

const startLocation = { lat: 18.3978789, lng: -66.08797 };

const defaultZoom = 20;

const colors = {
  red: '#f00',
  blue: '#0708ff',
  green: '#50ff00',
  orange: '#ff6500'
};

const circleColor = (depth => {
  let color = colors.green;
  if (depth === 1) color = colors.green;
  if (depth === 2) color = colors.blue;
  if (depth === 3) color = colors.orange;
  if (depth === 4) color = colors.red;

  return {
    fillColor: color,
    strokeColor: color,
  };
});

const circleRadius = (radius => {
  if (radius === 1) return 2;
  if (radius === 2) return 3;
  if (radius === 3) return 4;
  if (radius === 4) return 5;
});

const mapCircles = positions => {
  return positions.map((pos, i) => {
    return (
      <Circle
        key={i}
        clickable
        center={pos}
        radius={circleRadius(pos.depth)}
        onCenterChanged={this.onCenterChanged}
        onRadiusChanged={this.onRadiusChanged}
        options={circleColor(pos.depth)}
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
        />
      </div>
    );
  }
}

export default App;

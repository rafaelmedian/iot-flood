import React, { Component } from 'react';
import { mapStyles } from './misc/mapStyles';
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  Circle
} from "react-google-maps";
import './App.css';

const startLocation = { lat: 29.42, lng: -98.49 };

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
  let rad = 1;
  if (radius > 1) rad = 3;
  if (radius > 2) rad = 4;
  if (radius > 3) rad = 5;
  if (radius > 4) rad = 6;
  return rad
});

const getPositions = pos => {

  const { location } = pos;

  return {
    lat: location.latitude,
    lng: location.longitude,
  }
};

const mapCircles = positions => {
  return positions.map((pos, i) => {
    return (
      <Circle
        key={i}
        clickable
        center={getPositions(pos)}
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
    defaultOptions={{
      styles: mapStyles,
    }}
  >
    {mapCircles(props.positions)}
  </GoogleMap>
));

class App extends Component {
  constructor() {
    super();
    this.state = {
      positions: [],
      startLocation: { lat: 29.42, lng: -98.49 },
    };
  }

  componentWillMount() {
    fetch('/get-latest', { method: 'POST', })
      .then(res => {
        return res.json();
      }).then(json => {
      this.setState({
        positions: json,
        startLocation: json.length ? getPositions(json[0]) : { lat: 29.42, lng: -98.49 }
      });
    }).catch(err => {
      console.log('err :\n', err);
    })
  }

  render() {
    console.log('this.state :\n', this.state);
    return (
      <div className="app">
        <div className="sidebar">
          This is a sidebar
        </div>
        <div className="map">
          <MyMapComponent
            positions={this.state.positions}
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }}/>}
            containerElement={<div style={{ height: `100vh` }}/>}
            mapElement={<div style={{ height: `100%` }}/>}
          />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker, withScriptjs } from "react-google-maps";
import './App.css';

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }}/>}
  </GoogleMap>
));

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyMapComponent
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />      </div>
    );
  }
}

export default App;

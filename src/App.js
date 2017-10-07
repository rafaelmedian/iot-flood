import React, { Component } from 'react';
import Map from './components/Map';
import { getPositions } from './components/utils/getPositions';
import './App.css';
import Sidebar from "./components/Sidebar/index";

// Determine the poll speed
const POLL_MS = 5000;
// start location for the map
const startLocation = { lat: 29.42, lng: -98.49 };

class App extends Component {
  constructor() {
    super();
    this.state = {
      positions: [],
      startLocation: startLocation,
    };
  }

  fetchInitialData = () => fetch('/get-latest', { method: 'POST', })
    .then(res => {
      return res.json();
    }).then(json => {
      this.setState({
        positions: json
      });
    }).catch(err => {
      console.log('err :\n', err);
    });

  pollData = () => {
    fetch('/get-latest', { method: 'POST', })
      .then(res => {
        return res.json();
      }).then(json => {
      this.setState({ positions: json, }, () => setTimeout(this.pollData, POLL_MS));
    }).catch(err => {
      console.log('err :\n', err);
    });
  };

  setCenter = (lat, lng) => this.setState({ center: { lat, lng } });

  componentWillMount() {
    this.fetchInitialData();
    this.pollData();
  }

  render() {
    console.log('this.state :\n', this.state);
    return (
      <div className="app">
        <Sidebar
          setCenter={this.setCenter}
          positions={this.state.positions}
        />
        <div className="map">
          <Map
            positions={this.state.positions}
            center={this.state.center}
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

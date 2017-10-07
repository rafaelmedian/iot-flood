import React from 'react';
import { getPositions } from '../utils/getPositions';
import { mapStyles } from './mapStyles';
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  Circle
} from "react-google-maps";

const startLocation = { lat: 29.42, lng: -98.49 };

// default Zoom level for the map
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

const Map = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={defaultZoom}
    defaultCenter={startLocation}
    defaultOptions={{ styles: mapStyles }}
    center={props.center}
  >
    {mapCircles(props.positions)}
  </GoogleMap>
));

export default Map;
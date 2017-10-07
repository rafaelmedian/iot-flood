import React from 'react';
import { getPositions } from '../utils/getPositions';
import { circleColor } from '../utils/circleColor';
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


const circleRadius = (radius => {
  let rad; // = Math.floor(1000 - radius);
  if (radius > 1 & radius < 100) rad = 200;
  if (radius > 100 & radius < 200) rad = 150;
  if (radius > 200 & radius < 500) rad = 100
  if (radius > 500 & radius < 1000) rad = 50;
  if (radius > 1000) rad = 10;
  return rad
});

const mapCircles = positions => {
  return positions.map((pos, i) => {
    const color = circleColor(pos.depth);
    return (
      <Circle
        key={i}
        clickable
        center={getPositions(pos)}
        radius={circleRadius(pos.depth)}
        onCenterChanged={this.onCenterChanged}
        onRadiusChanged={this.onRadiusChanged}
        options={{
          fillColor: color,
          strokeColor: color,
        }}
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
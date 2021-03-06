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
  let rad = 1;
  if (radius > 1) rad = 3;
  if (radius > 2) rad = 4;
  if (radius > 3) rad = 5;
  if (radius > 4) rad = 6;
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
import React from 'react';
import { getPositions } from "../utils/getPositions";
import './sidebar.css';

const Card = props => {
  return (
    <div
      className="card"
      onClick={props.onClick}
    >
      <label>Address:</label>
      <span> Some Address</span>
      <label>Lat:</label>
      <span>{props.lat}</span>
      <label>Lng:</label>
      <span>{props.lng}</span>
    </div>
  );
};

const renderCards = (positions, setCenter) => {
  return positions.map((pos, i) => {
    const { lat, lng } = getPositions(pos);
    return (
      <Card
        key={i}
        lat={lat}
        lng={lng}
        onClick={() => setCenter(lat, lng)}
      />
    );
  })
};

const Sidebar = props => {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <input type="text" name="" id=""/>
        <input type="range" max={24} min={2} step={2}/>
        <button>
          Alert
        </button>
        <button>
          Filter
        </button>
      </div>
      <div className="sidebar-bottom">
        {renderCards(props.positions, props.setCenter)}
      </div>
    </div>
  )
};

Sidebar.defaultProps = {
  positions: [],
};

export default Sidebar;

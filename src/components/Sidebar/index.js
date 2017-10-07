import React from 'react';
import { getPositions } from "../utils/getPositions";
import './sidebar.css';
import { circleColor } from "../utils/circleColor";

const Card = props => {
  return (
    <div
      className="card"
      onClick={props.onClick}
    >
      <div
        className="card-depth"
        style={{
          backgroundColor: circleColor(props.depth)
        }}
      >
        {props.depth}
      </div>
      <div className="card-details">
        <div>
          <label>Address:</label>
          <span> Some Address</span>
        </div>

        <div>
          <label>Lat:</label>
          <span> {props.lat}</span>
        </div>
        <div>
          <label>Lng:</label>
          <span> {props.lng}</span>
        </div>
      </div>
    </div>
  );
};

const renderCards = (positions, setCenter) => {
  return positions.map((pos, i) => {
    const { lat, lng } = getPositions(pos);
    const { depth } = pos;

    return (
      <Card
        key={i}
        lat={lat}
        lng={lng}
        depth={depth}
        onClick={() => setCenter(lat, lng)}
      />
    );
  })
};

const SidebarGroup = props => {
  return (
    <div className="sidebar-group">
      {props.children}
    </div>
  );
};

const Sidebar = props => {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <SidebarGroup>
          <input className="search-input" type="text" name="" id=""/>
        </SidebarGroup>
        <SidebarGroup>
          <input className="slider-input" type="range" max={24} min={2} step={2}/>
        </SidebarGroup>
        <SidebarGroup>
          <button className="input-buttons left-button">
            Alert
          </button>
          <button className="input-buttons right-button">
            Filter
          </button>
        </SidebarGroup>
      </div>
      <div className="sidebar-bottom">
        {renderCards(props.positions, props.setCenter)}
        {renderCards(props.positions, props.setCenter)}
        {renderCards(props.positions, props.setCenter)}
        {renderCards(props.positions, props.setCenter)}
        {renderCards(props.positions, props.setCenter)}
        {renderCards(props.positions, props.setCenter)}
        {renderCards(props.positions, props.setCenter)}
        {renderCards(props.positions, props.setCenter)}
      </div>
    </div>
  )
};

Sidebar.defaultProps = {
  positions: [],
};

export default Sidebar;

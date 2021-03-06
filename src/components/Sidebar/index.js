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

      <div className="card-details">
        <div>
          <label>Alexandria, VA</label>
        </div>
        <div>
          <label>4712 Southland Avenue</label>
        </div>

        <div>
          <label>{props.lat} {props.lng}</label>
        </div>
      </div>
      <div
        className="card-depth"
        // style={{
        //   backgroundColor: circleColor(props.depth)
        // }}
        >
        {props.depth}cm
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
          <button className="">
            <img src="https://source.unsplash.com/category/nature/330x200" alt="" height="42" width="42"/>
          </button>
          <button className="input-buttons">
            <img src="https://pasteboard.co/GNRmHAH.png" alt=""/>
          </button>
          <button className="input-buttons">
            <img src="https://pasteboard.co/GNRmHAH.png" alt=""/>
          </button>
          <button className="input-buttons">
            Alert
          </button>
          <button className="input-buttons">
            Alert
          </button>
          <button className="input-buttons">
            Alert
          </button>
        </SidebarGroup>
        <div className="sidebar-direction">
          <SidebarGroup>
            <input className="direction-input" type="text" name="From" placeholder="From" id=""/>
            <input className="direction-input" type="text" name="To" placeholder="To" id=""/>
          </SidebarGroup>
        </div>
        <SidebarGroup>
          <input className="search-input" type="text" name="Search" placeholder="Search Areas..." id=""/>
          <button className="input-buttons left-button">
            Alert
          </button>
          <button className="input-buttons right-button">
            Filter
          </button>
        </SidebarGroup>
        <SidebarGroup>
          <input className="slider-input" type="range" max={24} min={2} step={2}/>
        </SidebarGroup>
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

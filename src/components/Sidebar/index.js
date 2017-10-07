import React from 'react';
import './sidebar.css';

const Card = () => {
  return (
    <div className="card">
      <label>Address:</label>
      <span> Some Address</span>
    </div>
  );
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
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
};

export default Sidebar;

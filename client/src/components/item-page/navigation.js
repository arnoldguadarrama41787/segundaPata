import React from "react";
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="headerStyle">
          <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/item">Item</NavLink></li>
          <li><NavLink to="/select">Select</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
    </div>
  );
}


export default Navigation;

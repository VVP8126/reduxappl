import React from "react";
import menuPoints from './items/menuItemContent.js';
import MenuItem from "./MenuItem.jsx";

const Menu = () => {
  return (
    <div className="menuBar"> 
      { menuPoints.map(point => <MenuItem key={point.path} path={point.path} lbl={point.lbl} />) }                        
    </div>
  );
}
export default Menu;

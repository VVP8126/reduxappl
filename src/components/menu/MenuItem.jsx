import React from "react";
import { NavLink } from 'react-router-dom';

const MenuItem = ( {path, lbl} ) => {
  return <NavLink className="menuItem" to={path} >{lbl}</NavLink>;
}
export default MenuItem;

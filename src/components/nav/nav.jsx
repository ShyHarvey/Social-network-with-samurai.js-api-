import React from "react";
import Nav from 'react-bootstrap/Nav';
import './nav.scss';
import {
  NavLink
} from "react-router-dom";

function Navigation() {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <NavLink className="nav-link" to="/" >Profile</NavLink>
      <NavLink className="nav-link" to="/dialogs/1" >Dialogs</NavLink>
      <NavLink className="nav-link" to="/news" >News</NavLink>
      <NavLink className="nav-link" to="/music" >Music</NavLink>
      <NavLink className="nav-link" to="/settings">Settings</NavLink>
      <NavLink className="nav-link" to="/users">Find users</NavLink>
    </Nav>
  );
}

export default Navigation;
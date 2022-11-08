import React from "react";
import Nav from 'react-bootstrap/Nav';
import './nav.scss';

function Navigation() {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/home">Profile</Nav.Link>
      <Nav.Link eventKey="link-1">Dialogs</Nav.Link>
      <Nav.Link eventKey="link-2">News</Nav.Link>
      <Nav.Link eventKey="link-3">Music</Nav.Link>
      <Nav.Link eventKey="link-4">Settings</Nav.Link>
    </Nav>
  );
}

export default Navigation;
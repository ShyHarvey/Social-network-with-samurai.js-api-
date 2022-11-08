import React from "react";
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./components/header/header";
import Navigation from "./components/nav/nav";
import Profile from "./components/content/main/profile";
import Dialogs from "./components/content/dialogs/dialogs";

import "./app.scss";


function App() {
  return (
    <div className="App">
      <Header />
      <Container className="d-flex p-0" fluid>
        <Navigation />
        <div className="app-content-wrapper m-0 p-0">
          {/* <Profile /> */}
          <Dialogs/>
        </div>
      </Container>
    </div>
  );
}

export default App;

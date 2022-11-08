import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./components/header/header";
import Navigation from "./components/nav/nav";
import Main from "./components/content/main/main";
import Posts from "./components/content/posts/posts";



function App() {
  return (
    <div className="App">
      <Header/>
      <Container fluid>
        <Row>
          <Col xs={3} className="p-0">
          <Navigation/>
          </Col>
          <Col>
          <Main/>
          <Posts/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

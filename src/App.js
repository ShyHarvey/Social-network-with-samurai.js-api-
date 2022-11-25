import React, { useEffect } from "react";
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from "./components/content/login/login";
import Header from "./components/header/header";
import Navigation from "./components/nav/nav";
import Profile from "./components/content/profile/profile";
import DialogsContainer from "./components/content/dialogs/dialogsContainer";
import UsersContainer from "./components/content/users/usersContainer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import "./app.scss";
import { useDispatch, useSelector } from "react-redux";
import { initialize } from "./redux/appReducer";



function App(props) {

  let appState = useSelector(state => state.appReducer)

  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(initialize())
  }, [dispatch])

  if (!appState.initialized) {
    return (
      <div className="spinner-body" >
        <div className="spinner"></div>
      </div>
    )
  } else {
    return (
      <div className="App">
        <Router>
          <Header />
          <Container className="d-flex p-0" fluid>
            <Navigation />
            <div className="app-content-wrapper m-0 p-0">
              <Routes>
                <Route path="/dialogs/*" element={<DialogsContainer />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/profile/:id" element={<Profile />} />
                <Route path="/users" element={<UsersContainer />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </div>
          </Container>
        </Router>
      </div>
    );
  }
}

export default App;

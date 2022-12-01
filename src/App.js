import React, { useEffect, lazy, Suspense } from "react";
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from "./components/content/login/login";
import Header from "./components/header/header";
import Navigation from "./components/nav/nav";
import Profile from "./components/content/profile/profile";
// import DialogsContainer from "./components/content/dialogs/dialogsContainer";
// import UsersContainer from "./components/content/users/usersContainer";
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import "./app.scss";
import { useDispatch, useSelector } from "react-redux";
import { initialize } from "./redux/appReducer";
import Help from "./components/content/help/help";

const DialogsContainer = lazy(() => import("./components/content/dialogs/dialogsContainer"));
const UsersContainer = lazy(() => import("./components/content/users/usersContainer"));

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
              <Suspense fallback={<div className="spinner-body" > <div className="spinner"></div></div>}>
                <Routes>
                  <Route path="/dialogs/*" element={<DialogsContainer />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/profile/:id" element={<Profile />} />
                  <Route path="/users" element={<UsersContainer />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/" element={<Help />} />
                </Routes>
              </Suspense>
            </div>
          </Container>
        </Router>
      </div>
    );
  }
}

export default App;

import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../../redux/authReducer";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";


function Header() {

  const authState = useSelector(state => state.authReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData())
  }, [dispatch])

  return (
    <Navbar bg="dark">
        <Container fluid className="px-3">
          <Navbar.Brand href="#home">
            <img
              src="https://react-bootstrap.github.io/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="logo"
            />
          </Navbar.Brand>
           {authState.isAuth? <h3 className="text-light">{authState.login}</h3> : <NavLink to='/login'> login </NavLink>}
        </Container>
      </Navbar>
  );
}

export default Header;
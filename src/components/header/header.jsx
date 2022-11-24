import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData, logout } from "../../redux/authReducer";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";


function Header() {

  const authState = useSelector(state => state.authReducer);
  const dispatch = useDispatch();

  const localLogout = () => dispatch(logout())

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
           {authState.isAuth? 
           <div className="d-flex">
             <h3 className="text-light me-3">{authState.login}</h3> 
             <Button onClick={localLogout} >Logout</Button>
           </div>
           : <NavLink to='/login'> login </NavLink>}
        </Container>
      </Navbar>
  );
}



export default Header;
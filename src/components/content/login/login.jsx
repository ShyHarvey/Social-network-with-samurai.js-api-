import React from "react";
import Container from "react-bootstrap/esm/Container";
import "./login.scss"
import LoginForm from "../loginForm/loginForm";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';


function Login() {

    const isAuth = useSelector(state => state.authReducer.isAuth);
    if (isAuth) {
        return <Navigate to="/profile"/>
    } 

    return (
        <Container fluid className="login">
            <h3>Login</h3>
            <LoginForm/>

            <h3 className="mt-5">account for testing:</h3>
            <ListGroup className='accountForTest mt-2'>
                <ListGroup.Item>
                    Email: free@samuraijs.com
                </ListGroup.Item>
                <ListGroup.Item>
                    Password: free
                </ListGroup.Item>
            </ListGroup>
        </Container>
)
}


export default Login;
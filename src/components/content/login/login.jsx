import React from "react";
import Container from "react-bootstrap/esm/Container";
import "./login.scss"
import LoginForm from "../loginForm/loginForm";
// import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";


function Login() {

    // const isAuth = useSelector(state => state.authReducer.isAuth);
 
    //    if (!isAuth) {
    //        return <Navigate to="/profile/26790"/>
    //    } 


    return (
        <Container fluid className="login">
            <h3>Login</h3>
            <LoginForm/>
        </Container>
)
}


export default Login;
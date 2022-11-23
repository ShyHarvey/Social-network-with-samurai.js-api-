import React from 'react';
import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';

export const withAuthRedirect = (Component) => {

    function RedirectComponent(props) {
        const isAuth = useSelector(state => state.authReducer.isAuth);
        if (!isAuth) {
            return <Navigate to="/login" />
        };
        return (
            <Component {...props} />
        )
    }
    return RedirectComponent
}

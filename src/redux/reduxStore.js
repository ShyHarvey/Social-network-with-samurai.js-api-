import { configureStore, combineReducers, applyMiddleware } from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk';

import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import usersReducer from "./usersReducer";
import authReducer from "./authReducer"

let reducers = combineReducers({
    profileReducer,
    dialogsReducer,
    usersReducer,
    authReducer,
});

let store = configureStore(
    { reducer: reducers },
    applyMiddleware(thunkMiddleware),
);
window.store = store

export default store;
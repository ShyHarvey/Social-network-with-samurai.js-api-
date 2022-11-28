import { configureStore, combineReducers, applyMiddleware } from "@reduxjs/toolkit";
import { composeWithDevTools } from '@redux-devtools/extension';
import thunkMiddleware from 'redux-thunk';

import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import appReducer from "./appReducer"

let reducers = combineReducers({
    profileReducer,
    dialogsReducer,
    usersReducer,
    authReducer,
    appReducer,
});

let store = configureStore(
    { reducer: reducers },
    composeWithDevTools(
        applyMiddleware(thunkMiddleware),
    ),
);
window.store = store

export default store;
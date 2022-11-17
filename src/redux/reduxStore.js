import { combineReducers, legacy_createStore as createStore } from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import usersReducer from "./usersReducer"

let reducers =  combineReducers({
    profileReducer,
    dialogsReducer,
    usersReducer,
});

let store = createStore(reducers);


export default store;
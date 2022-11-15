import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/reduxStore';


const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree =(state)=> root.render(
    <App data={state} dispatch={store.dispatch.bind(store)}   />
);

rerenderEntireTree(store.getState())
store.subscribe(()=>{
    let state = store.getState();
    rerenderEntireTree(state)
})
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/state';


const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireTree =(state)=> root.render(
    <App data={state} dispatch={store.dispatch.bind(store)}   />
);

renderEntireTree(store.getState())
store.subscribe(renderEntireTree)
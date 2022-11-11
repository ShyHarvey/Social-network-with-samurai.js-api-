import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/state';


const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireTree =(state)=> root.render(
    <App data={state} addPost={store.addPost.bind(store)} changeNewPostText={store.changeNewPostText.bind(store)}  />
);

renderEntireTree(store.getState())
store.subscribe(renderEntireTree)
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

let appData = {
    profileData: {
        postsData: [
            { id: 1, message: "Waaaazzaap bro", likesCount: 9 },
            { id: 2, message: "Yo", likesCount: 0 },
            { id: 3, message: "wtf bro", likesCount: "(_!_)" },
        ],
    },
    dialogsData:[
        { id:1 , name:"Dimych" },
        { id:2 , name:"Andrey" },
        { id:3 , name:"Sveta" },
        { id:4 , name:"Sasha" },
        { id:5 , name:"Viktor" },
        { id:6 , name:"Valera" },
        ],
}

root.render(
    <App data={appData} />

);

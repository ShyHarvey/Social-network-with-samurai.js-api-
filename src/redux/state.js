let store ={
    _state: {
        profileData: {
            postsData: [
                { id: 1, message: "Waaaazzaap bro", likesCount: 9 },
                { id: 2, message: "Yo", likesCount: 0 },
                { id: 3, message: "wtf bro", likesCount: "(_!_)" },
            ],
            newPostText: "fixed post text"
        },
        dialogsData:[
            { id:1 , name:"Dimych" },
            { id:2 , name:"Andrey" },
            { id:3 , name:"Sveta" },
            { id:4 , name:"Sasha" },
            { id:5 , name:"Viktor" },
            { id:6 , name:"Valera" },
            ],
    },

    
    getState(){
        return this._state;
    },
    subscribe (observer) {
        this.renderEntireTree = observer
    },


    renderEntireTree () {
     console.log("_state changed")
    },
    addPost () {
        this._state.profileData.postsData.push({
            id: 4, message: this._state.profileData.newPostText, likesCount: 0
        })
        this._state.profileData.newPostText ='';
       this.renderEntireTree(this._state)
    },
    changeNewPostText (text) {
        this._state.profileData.newPostText = text;
       this.renderEntireTree(this._state);
       console.log(text)
    },
        

}


// let renderEntireTree =()=> console.log("_state changed")


// let _state = {
//     profileData: {
//         postsData: [
//             { id: 1, message: "Waaaazzaap bro", likesCount: 9 },
//             { id: 2, message: "Yo", likesCount: 0 },
//             { id: 3, message: "wtf bro", likesCount: "(_!_)" },
//         ],
//         newPostText: "fixed post text"
//     },
//     dialogsData:[
//         { id:1 , name:"Dimych" },
//         { id:2 , name:"Andrey" },
//         { id:3 , name:"Sveta" },
//         { id:4 , name:"Sasha" },
//         { id:5 , name:"Viktor" },
//         { id:6 , name:"Valera" },
//         ],
// }


// export const addPost = () => {
//     _state.profileData.postsData.push({
//         id: 4, message: _state.profileData.newPostText, likesCount: 0
//     })
//     _state.profileData.newPostText ='';
//    renderEntireTree(_state)
// }




// export const changeNewPostText = (text) => {
//     _state.profileData.newPostText = text;
//    renderEntireTree(_state);
//    console.log(text)
// }

// export const subscribe = (observer) => {
//     renderEntireTree = observer
// }

export default store;

window.store = store;
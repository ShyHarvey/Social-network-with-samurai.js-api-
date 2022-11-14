import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";



let store = {
    _state: {
        profileData: {
            postsData: [
                { id: 1, message: "Waaaazzaap bro", likesCount: 9 },
                { id: 2, message: "Yo", likesCount: 0 },
                { id: 3, message: "wtf bro", likesCount: "(_!_)" },
            ],
            newPostText: "fixed post text"
        },
        dialogsData: {
            dialogsList: [
                { id: 1, name: "Dimych" },
                { id: 2, name: "Andrey" },
                { id: 3, name: "Sveta" },
                { id: 4, name: "Sasha" },
                { id: 5, name: "Viktor" },
                { id: 6, name: "Valera" },
            ],
            messagesData: [
                { id: 1, message: "Waaaazzaap bro", likesCount: 9 },
                { id: 2, message: "Yo", likesCount: 0 },
            ],
            newMessageText: "fixed message text"
        },
    },


    getState() {
        return this._state;
    },
    subscribe(observer) {
        this.renderEntireTree = observer
    },


    renderEntireTree() {
        console.log("_state changed")
    },

    dispatch(action) {
        profileReducer(this._state.profileData, action);
        dialogsReducer(this._state.dialogsData, action);
        this.renderEntireTree(this._state)
    },
}



export default store;


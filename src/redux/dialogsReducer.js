let initialState ={
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
};
const dialogsReducer = (state= initialState, action) => {


    switch (action.type) {
        case "ADD-MESSAGE":
            state.messagesData.push({
                id: 4, message: state.newMessageText, likesCount: 0
            })
            state.newMessageText = '';
            return state;
        case "CHANGE-MESSAGE":
            state.newMessageText = action.text;  
            console.log(action.text)
            return state;
        default: return state;
    }
}


export const addMessageActionCreator = () => ({type: "ADD-MESSAGE"});
export const changeMessageActionCreator = (text) => ({type: "CHANGE-MESSAGE", text: text,})

export default dialogsReducer;

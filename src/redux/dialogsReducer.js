let initialState = {
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


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD-MESSAGE":
            return {
                ...state,
                messagesData: [
                    ...state.messagesData,
                    { id: 4, message: state.newMessageText, likesCount: 0 }
                ],
                newMessageText: '',
            }
        case "CHANGE-MESSAGE":
            return {
                ...state,
                newMessageText: action.text
            }

        default:
            return state;
    }
}


export const addMessageActionCreator = () => ({ type: "ADD-MESSAGE" });
export const changeMessageActionCreator = (text) => ({ type: "CHANGE-MESSAGE", text: text, })

export default dialogsReducer;

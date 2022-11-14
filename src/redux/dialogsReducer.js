const dialogsReducer = (state, action) => {

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

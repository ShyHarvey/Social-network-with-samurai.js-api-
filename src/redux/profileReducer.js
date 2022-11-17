const ADD_POST = "ADD-POST";
const CHANGE_NEW_POST_TEXT = "CHANGE-NEW-POST-TEXT";

let initialState = {
    postsData: [
        { id: 1, message: "Waaaazzaap bro", likesCount: 9 },
        { id: 2, message: "Yo", likesCount: 0 },
        { id: 3, message: "wtf bro", likesCount: "(_!_)" },
    ],
    newPostText: "fixed post text"
};



const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: 
            return {
                ...state,
                postsData: [
                    ...state.postsData,
                    { id: 4, message: state.newPostText, likesCount: 0 }
                ],
                newPostText: '',
            }

        case CHANGE_NEW_POST_TEXT: 
            return {
                ...state,
                newPostText:action.text
            }

        
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST, });
export const changeNewPostTextActionCreator = (text) => ({ type: CHANGE_NEW_POST_TEXT, text: text, });

export default profileReducer;
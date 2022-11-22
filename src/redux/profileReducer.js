const ADD_POST = "ADD-POST";
const CHANGE_NEW_POST_TEXT = "CHANGE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE ";

let initialState = {
    postsData: [
        { id: 1, message: "First post", likesCount: 9 },

    ],
    newPostText: "fixed post text",
    profile: null,
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
                newPostText: action.text
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }


        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST, });
export const changeNewPostTextActionCreator = (text) => ({ type: CHANGE_NEW_POST_TEXT, text: text, });
export const setUserProfileAC = (profile) => ({ type: SET_USER_PROFILE, profile });

export default profileReducer;
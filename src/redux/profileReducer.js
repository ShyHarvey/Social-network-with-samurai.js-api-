import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const CHANGE_NEW_POST_TEXT = "CHANGE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE ";
const SET_STATUS = "SET_STATUS";

let initialState = {
    postsData: [
        { id: 1, message: "First post", likesCount: 9 },

    ],
    newPostText: "fixed post text",
    profile: null,
    status: "s",
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
            case SET_STATUS:
            return {
                ...state,
                status: action.status
            }


        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST, });
export const changeNewPostTextActionCreator = (text) => ({ type: CHANGE_NEW_POST_TEXT, text: text, });
export const setUserProfileAC = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatusAC = (status) => ({ type: SET_STATUS, status });



export const getProfile = (id) => {
    return (dispatch) => {
        profileAPI.getProfileById(id)
            .then((data) => {
                dispatch(setUserProfileAC(data))
            })
    }
}
export const setStatus = (id) => {
    return (dispatch) => {
        profileAPI.getStatusById(id)
            .then((data) => {
                dispatch(setStatusAC(data))
            })
    }
}
export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then((response) => {
                if(response.data.resultCode === 0){
                dispatch(setStatusAC(status))
                }
            })
    }
}





export default profileReducer;
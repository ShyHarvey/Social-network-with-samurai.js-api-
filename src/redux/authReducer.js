import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA ";


let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
};



const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.userData,
                isAuth: true,
            }

        default:
            return state;
    }
}
 

export const setUserDataAC = (userData) => ({ type: SET_USER_DATA, userData });


export const getUserData = () => {
    return (dispatch) => {
        authAPI.getUserData()
          .then((data) => {
            if(data.resultCode === 0){
                dispatch(setUserDataAC(data.data))
            }
          })
    }
}

export default authReducer;
import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA ";
const RESET_USER_DATA = "RESET_USER_DATA";
const SET_ERROR = "SET_ERROR";


let initialState = {
    id: null,
    login: null,
    email: null,
    errorMessage:null,
    isAuth: false,
};



const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.userData,
                isAuth: true,
                errorMessage:null,
            }
        case RESET_USER_DATA:
            return {
                ...state,
                id: null,
                login: null,
                email: null,
                isAuth: false,
                errorMessage:null,
            }
            case SET_ERROR:
            return {
                ...state,
                errorMessage:action.errorMessage,
            }

        default:
            return state;
    }
}


export const setUserDataAC = (userData) => ({ type: SET_USER_DATA, userData });
export const resetUserDataAC = () => ({ type: RESET_USER_DATA});
export const setErrorAC = (errorMessage) => ({ type: SET_ERROR, errorMessage});

export const getUserData = () =>(dispatch) => {
       return authAPI.getUserData()
            .then((data) => {
                if (data.resultCode === 0) {
                    dispatch(setUserDataAC(data.data))
                }
            })
    };
export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.logIn(email, password, rememberMe)
            .then((response) => {
                if (response.data.messages[0]) {
                    dispatch(setErrorAC(response.data.messages[0]))
                }
                if (response.data.resultCode === 0) {
                    dispatch(getUserData())
                }
            })
    }
};

export const logout = () => {
    return (dispatch) => {
        authAPI.logOut()
            .then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(resetUserDataAC())
                }
            })
    }
};


export default authReducer;
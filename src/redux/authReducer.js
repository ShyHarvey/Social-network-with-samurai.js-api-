import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA ";
const RESET_USER_DATA = "RESET_USER_DATA";
const SET_ERROR = "SET_ERROR";
const SET_CAPTCHA = "SET_CAPTCHA"

let initialState = {
    id: null,
    login: null,
    email: null,
    errorMessage: null,
    isAuth: false,
    captchaUrl: null,
};



const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.userData,
                isAuth: true,
                errorMessage: null,
            }
        case RESET_USER_DATA:
            return {
                ...state,
                id: null,
                login: null,
                email: null,
                isAuth: false,
                errorMessage: null,
            }
        case SET_ERROR:
            return {
                ...state,
                errorMessage: action.errorMessage,
            }
            case SET_CAPTCHA:
                return {
                    ...state,
                    captchaUrl: action.captchaUrl,
                }

        default:
            return state;
    }
}


export const setUserDataAC = (userData) => ({ type: SET_USER_DATA, userData });
export const resetUserDataAC = () => ({ type: RESET_USER_DATA });
export const setErrorAC = (errorMessage) => ({ type: SET_ERROR, errorMessage });
export const setCaptchaUrlAC = (captchaUrl) => ({ type: SET_CAPTCHA, captchaUrl });

export const getUserData = () => async (dispatch) => {
    let data = await authAPI.getUserData();
    if (data.resultCode === 0) {
        dispatch(setUserDataAC(data.data))
    }
};
export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.logIn(email, password, rememberMe, captcha)
    if (response.data.messages[0]) {
        dispatch(setErrorAC(response.data.messages[0]))
    }
    if (response.data.resultCode === 0) {
        dispatch(getUserData())
        dispatch(setCaptchaUrlAC(null))
    } else if (response.data.resultCode === 10) {
        dispatch(setCaptchaUrl())
    }
};

export const logout = () => async (dispatch) => {
    let response = await authAPI.logOut()
    if (response.data.resultCode === 0) {
        dispatch(resetUserDataAC())
    }
};
export const setCaptchaUrl = () => async (dispatch) => {
    let response = await authAPI.getSecurityCaptcha()
        dispatch(setCaptchaUrlAC(response.data.url))
};



export default authReducer;
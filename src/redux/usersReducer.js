import { usersAPI } from "../api/api";


const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_FOLLOWING_IN_PROGRESS = "TOGGLE_FOLLOWING_IN_PROGRESS"


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowingInProgress: [],
};


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.number,
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.number,
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        case TOGGLE_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                isFollowingInProgress: action.isFetching ?
                    [...state.isFollowingInProgress, action.id]
                    : state.isFollowingInProgress.filter(id => id !== action.id),
            }
        default:
            return state;
    }
}


export const followAC = (userID) => ({ type: FOLLOW, userID });
export const unfollowAC = (userID) => ({ type: UNFOLLOW, userID });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setCurrentPageAC = (number) => ({ type: SET_CURRENT_PAGE, number });
export const setTotalUsersCountAC = (number) => ({ type: SET_TOTAL_USERS_COUNT, number });
export const toggleIsFetchingAC = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const followingInProgressAC = (isFetching, id) => ({ type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetching, id });


export const getUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetchingAC(true))
    let data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(toggleIsFetchingAC(false))
    dispatch(setUsersAC(data.items))
    dispatch(setTotalUsersCountAC(data.totalCount))

}
export const setPage = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetchingAC(true))
    dispatch(setCurrentPageAC(currentPage))
    let data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetchingAC(false))
    dispatch(setUsersAC(data.items))
}


export const unfollow = (id) => async (dispatch) => {
    dispatch(followingInProgressAC(true, id))
    let data = await usersAPI.unfollow(id)
    if (data.resultCode === 0) {
        dispatch(unfollowAC(id))
        dispatch(followingInProgressAC(false, id))
    }
}

export const follow = (id) => async (dispatch) => {
    dispatch(followingInProgressAC(true, id))
    let data = await usersAPI.follow(id)
    if (data.resultCode === 0) {
        dispatch(followAC(id))
        dispatch(followingInProgressAC(false, id))
    }
}


export default usersReducer;
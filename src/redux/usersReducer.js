const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_FOLLOWING_IN_PROGRESS = "TOGGLE_FOLLOWING_IN_PROGRESS"


let initialState = {
    users: [
        // { id: 1, followed: true, fullName: "Dimych", status: 'text status', location: { city: 'Minsk', country: 'Belarus' } },
        // { id: 2, followed: false, fullName: "Andrey", status: 'text status', location: { city: 'Minsk', country: 'Belarus' } },
        // { id: 3, followed: true, fullName: "Sveta", status: 'text status', location: { city: 'Minsk', country: 'Belarus' } },
        // { id: 4, followed: false, fullName: "Sasha", status: 'text status', location: { city: 'Minsk', country: 'Belarus' } },
        // { id: 5, followed: false, fullName: "Viktor", status: 'text status', location: { city: 'Minsk', country: 'Belarus' } },
        // { id: 6, followed: true, fullName: "Valera", status: 'text status', location: { city: 'Minsk', country: 'Belarus' } },
    ],
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
                [...state.isFollowingInProgress, action.id ]
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

export default usersReducer;
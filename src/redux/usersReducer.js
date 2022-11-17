const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS"


let initialState = {
    users: [
        // { id: 1, followed: true, fullName: "Dimych", status: 'text status', location: { city: 'Minsk', country: 'Belarus' } },
        // { id: 2, followed: false, fullName: "Andrey", status: 'text status', location: { city: 'Minsk', country: 'Belarus' } },
        // { id: 3, followed: true, fullName: "Sveta", status: 'text status', location: { city: 'Minsk', country: 'Belarus' } },
        // { id: 4, followed: false, fullName: "Sasha", status: 'text status', location: { city: 'Minsk', country: 'Belarus' } },
        // { id: 5, followed: false, fullName: "Viktor", status: 'text status', location: { city: 'Minsk', country: 'Belarus' } },
        // { id: 6, followed: true, fullName: "Valera", status: 'text status', location: { city: 'Minsk', country: 'Belarus' } },
    ],
};


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            console.log('following')
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
            console.log('unfollowing')
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
                users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}


export const followAC = (userID) => ({ type: FOLLOW, userID });
export const unfollowAC = (userID) => ({ type: UNFOLLOW, userID });
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer;
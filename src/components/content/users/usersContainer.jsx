import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { followingInProgressAC, getUsers, setPage, follow, unfollow } from "../../../redux/usersReducer";
import UsersQuery from "./usersQuery";



function UsersContainer() {

    const usersState = useSelector(state => state.usersReducer);
    const dispatch = useDispatch();

    let followThunk = (userID) => dispatch(follow(userID));
    let unfollowThunk = (userID) => dispatch(unfollow(userID));
    let followingInProgress = (boolean, id) => dispatch(followingInProgressAC(boolean, id));
    let getUsersThunk = (currentPage, pageSize) => dispatch(getUsers(currentPage, pageSize));
    let setPageThunk = (currentPage, pageSize) => dispatch(setPage(currentPage, pageSize));
    return (
        <UsersQuery
            users={usersState.users}
            isFetching={usersState.isFetching}
            isFollowingInProgress={usersState.isFollowingInProgress}
            currentPage={usersState.currentPage}
            pageSize={usersState.pageSize}
            totalUsersCount={usersState.totalUsersCount}
            follow={followThunk}
            unfollow={unfollowThunk}
            followingInProgress={followingInProgress}
            getUsersThunk={getUsersThunk}
            setPageThunk={setPageThunk}
        />
    )
}

export default UsersContainer;
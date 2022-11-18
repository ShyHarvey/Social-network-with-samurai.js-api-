import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC } from "../../../redux/usersReducer";
import Users from "./users";



function UsersContainer() {

    const usersState = useSelector(state => state.usersReducer);
    const dispatch = useDispatch();

    let follow = (userID) => dispatch(followAC(userID));
    let unfollow = (userID) => dispatch(unfollowAC(userID));
    let setUsers = (user) => dispatch(setUsersAC(user));
    let setCurrentPage = (number) => dispatch(setCurrentPageAC(number));
    let setTotalUsersCount = (count) => dispatch(setTotalUsersCountAC(count));
    return (
        <Users
            users={usersState.users}
            currentPage={usersState.currentPage}
            pageSize={usersState.pageSize}
            totalUsersCount={usersState.totalUsersCount}
            setPage={setCurrentPage}
            follow={follow}
            unfollow={unfollow}
            setUsers={setUsers}
            setTotalUsersCount={setTotalUsersCount} />
    )
}

export default UsersContainer;
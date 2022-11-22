import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC, toggleIsFetchingAC } from "../../../redux/usersReducer";
import UsersQuery from "./usersQuery";



function UsersContainer() {

    const usersState = useSelector(state => state.usersReducer);
    const dispatch = useDispatch();

    let follow = (userID) => dispatch(followAC(userID));
    let unfollow = (userID) => dispatch(unfollowAC(userID));
    let setUsers = (user) => dispatch(setUsersAC(user));
    let setCurrentPage = (number) => dispatch(setCurrentPageAC(number));
    let setTotalUsersCount = (count) => dispatch(setTotalUsersCountAC(count));
    let toggleIsFetching = (boolean) => dispatch(toggleIsFetchingAC(boolean));
    return (
        <UsersQuery
            users={usersState.users}
            isFetching={usersState.isFetching}
            currentPage={usersState.currentPage}
            pageSize={usersState.pageSize}
            totalUsersCount={usersState.totalUsersCount}
            setPage={setCurrentPage}
            follow={follow}
            unfollow={unfollow}
            setUsers={setUsers}
            setTotalUsersCount={setTotalUsersCount} 
            toggleIsFetching = {toggleIsFetching}
            />
    )
}

export default UsersContainer;
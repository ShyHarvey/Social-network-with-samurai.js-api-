import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import { followAC, unfollowAC, setUsersAC } from "../../../redux/usersReducer";
import Users from "./users";



function UsersContainer() {
    
    const users = useSelector(state=>state.usersReducer.users);
    const dispatch = useDispatch();

    let follow = (userID) => dispatch(followAC(userID)) ;
    let unfollow = (userID) => dispatch(unfollowAC(userID))
    let setUsers = (user) => dispatch(setUsersAC(user))
    return (
        <Users users={users} follow={follow} unfollow={unfollow} setUsers={setUsers} />
    )
}

export default UsersContainer;
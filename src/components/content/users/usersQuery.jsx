import React from "react";
import "./users.scss";
import Users from "./users";
import {usersAPI} from "../../../api/api";


class UsersQuery extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsersMount(this.props.currentPage, this.props.pageSize)
        .then((data) => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        })
    }
    getUsers = () => {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers()
        .then((data) => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
        });
    }
    setPage = (number) => {
        this.props.toggleIsFetching(true)
        this.props.setPage(number);
        usersAPI.setPage(number, this.props.pageSize)
        .then((data) => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
        })
    }
    render() {
        return (
            <Users
            users={this.props.users}
            currentPage={this.props.currentPage}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            getUsers={this.getUsers}
            setPage={this.setPage}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            isFetching={this.props.isFetching}
            isFollowingInProgress={this.props.isFollowingInProgress}
            followingInProgress={this.props.followingInProgress}
            />
        )
    }
}

export default UsersQuery;
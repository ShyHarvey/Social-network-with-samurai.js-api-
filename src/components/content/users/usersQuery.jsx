import React from "react";
import "./users.scss";
import Users from "./users";


class UsersQuery extends React.Component {

    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }
    setPage = (number) => {
        this.props.setPageThunk(number, this.props.pageSize)
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
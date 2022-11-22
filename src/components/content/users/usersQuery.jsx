import React from "react";
import axios from 'axios'
import "./users.scss"
import Users from "./users";


//ФУНКЦИОНАЛЬНАЯ ВЕРСИЯ

// function Users(props) {
//     let getUsers = () => {
//         axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {
//             props.setUsers(response.data.items)
//         })
// }

//     let users = props.users.map(item => <User data={item} follow={props.follow} unfollow = {props.unfollow} key={item.id} />)
//     return (
//         < Container fluid className="users" >
//             <h2>Users</h2>
//             <ListGroup className="usersGroup">
//                 {users}
//             </ListGroup>
//             <Button className="mt-3" onClick={getUsers}>Get Users</Button>
//         </Container>
//     )
// }



// КЛАССОВАЯ ВЕРСИЯ
class UsersQuery extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then((response) => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }
    getUsers = () => {
        this.props.toggleIsFetching(true)
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
        });
    }
    setPage = (number) => {
        this.props.toggleIsFetching(true)
        this.props.setPage(number);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${number}&count=${this.props.pageSize}`)
        .then((response) => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
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
            />
        )
    }
}

export default UsersQuery;
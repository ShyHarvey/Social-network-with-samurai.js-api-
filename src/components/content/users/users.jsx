import React from "react";
import User from "./user/user";
import Container from "react-bootstrap/esm/Container";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from "react-bootstrap/esm/Button";
import Pagination from "react-bootstrap/Pagination"
import axios from 'axios'
import "./users.scss"


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
class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then((response) => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }
    getUsers = () => {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
            this.props.setUsers(response.data.items)
        });
    }
    setPage = (number) => {
        this.props.setPage(number);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${number}&count=${this.props.pageSize}`)
        .then((response) => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        console.log(this.props.pageSize)
        console.log(this.props.totalUsersCount)
        // let items = [];
        // for (let number = 1; number <= pagesCount; number++) {
        //     items.push(
        //         <Pagination.Item onClick={() => this.setPage(number)} key={number} active={number === this.props.currentPage}>
        //             {number}
        //         </Pagination.Item>,
        //     );
        // }
        let users = this.props.users.map(item => <User
            data={item}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            key={item.id}
        />)
        return (
            < Container fluid className="users" >
                <h2>Users</h2>
                <ListGroup className="usersGroup">
                    {users}
                </ListGroup>
                <Pagination className="mt-3">
                    <Pagination.Prev onClick={() => this.setPage(this.props.currentPage - 1)} />
                    <Pagination.Item onClick={() => this.setPage(1)}> {1}</Pagination.Item>
                    <Pagination.Ellipsis />
                    <Pagination.Item onClick={() => this.setPage(this.props.currentPage - 1)} >
                        {this.props.currentPage === 1 ? "-" : this.props.currentPage - 1}
                    </Pagination.Item>
                    <Pagination.Item active>{this.props.currentPage}</Pagination.Item>
                    <Pagination.Item onClick={() => this.setPage(this.props.currentPage + 1)} >
                        {this.props.currentPage === pagesCount ? "-" : this.props.currentPage + 1}
                    </Pagination.Item>
                    <Pagination.Ellipsis />
                    <Pagination.Item onClick={() => this.setPage(pagesCount)}>{pagesCount}</Pagination.Item>
                    <Pagination.Next onClick={() => this.setPage(this.props.currentPage + 1)} />
                </Pagination>
                <Button className="mt-3" onClick={this.getUsers}>Get Users</Button>
            </Container>
        )
    }
}

export default Users;
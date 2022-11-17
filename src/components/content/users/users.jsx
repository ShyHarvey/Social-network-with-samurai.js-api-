import React from "react";
import User from "./user/user";
import Container from "react-bootstrap/esm/Container";
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios'
import "./users.scss"

function Users(props) {
    if(props.users.length === 0){
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {
            debugger
            props.setUsers(response.data.items)
        })
}

    let users = props.users.map(item => <User data={item} follow={props.follow} unfollow = {props.unfollow} key={item.id} />)
    return (
        < Container fluid className="users" >
            <h2>Users</h2>
            <ListGroup className="usersGroup">
                {users}
            </ListGroup>
        </Container>
    )
}

export default Users;
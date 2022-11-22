import React from "react";
import User from "./user/user";
import Container from "react-bootstrap/esm/Container";
import ListGroup from 'react-bootstrap/ListGroup';
import Pagination from "react-bootstrap/Pagination"
import Spinner from 'react-bootstrap/Spinner';
import "./users.scss"


function Users(props) {

        let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
        let users = props.users.map(item => <User
            data={item}
            follow={props.follow}
            unfollow={props.unfollow}
            key={item.id}
            followingInProgress={props.followingInProgress}
            isFollowingInProgress={props.isFollowingInProgress}

        />)
        return (
            < Container fluid className="users" >
                <h2>Users</h2>
                <ListGroup className="usersGroup align-items-center">
                    {props.isFetching ?<Spinner animation="border" role="status"/> :null}
                    {users}
                </ListGroup>
                <Pagination className="mt-3">
                    <Pagination.Prev onClick={() => props.setPage(props.currentPage - 1)} />
                    <Pagination.Item onClick={() => props.setPage(1)}> {1}</Pagination.Item>
                    <Pagination.Ellipsis />
                    <Pagination.Item onClick={() => props.setPage(props.currentPage - 1)} >
                        {props.currentPage === 1 ? "-" : props.currentPage - 1}
                    </Pagination.Item>
                    <Pagination.Item active>{props.currentPage}</Pagination.Item>
                    <Pagination.Item onClick={() => props.setPage(props.currentPage + 1)} >
                        {props.currentPage === pagesCount ? "-" : props.currentPage + 1}
                    </Pagination.Item>
                    <Pagination.Ellipsis />
                    <Pagination.Item onClick={() => props.setPage(pagesCount)}>{pagesCount}</Pagination.Item>
                    <Pagination.Next onClick={() => props.setPage(props.currentPage + 1)} />
                </Pagination>
            </Container>
        )
    }


export default Users;
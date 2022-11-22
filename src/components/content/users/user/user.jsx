import React from "react";
import Container from 'react-bootstrap/esm/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";
import styles from "./user.module.scss";
import userPhoto from "../../../../assets/user.png"
import { usersAPI } from "../../../../api/api";

function User(props) {
    
    return (
        <ListGroup.Item className={styles.post}>
            <Container className={styles.item} fluid>
                <Container xs={1} className="p-0 text-center">
                    <NavLink to={`/profile/${props.data.id}`}>
                        <img className={styles.img} src={props.data.photos.small != null ?
                            props.data.photos.small
                            : userPhoto} alt="user avatar" />
                    </NavLink>
                </Container>
                <Container className="d-flex">
                    <div className={styles.userData}>
                        <p>{props.data.name}</p>
                        <p className={styles.status}>{props.data.status}</p>
                    </div>
                </Container>
                {props.data.followed ?
                    <Button disabled={props.isFollowingInProgress.some( id => id === props.data.id)} onClick={() => {
                        props.followingInProgress(true, props.data.id)
                        usersAPI.unfollow(props.data.id)
                            .then((data) => {
                                if (data.resultCode === 0) {
                                    props.unfollow(props.data.id)
                                    props.followingInProgress(false, props.data.id)
                                }
                            })
                    }} >  Unfollow</Button>
                    : <Button disabled={props.isFollowingInProgress.some( id => id === props.data.id)}  onClick={() => {
                        props.followingInProgress(true, props.data.id)
                        usersAPI.follow(props.data.id)
                            .then((data) => {
                                if (data.resultCode === 0) {
                                    props.follow(props.data.id)
                                }
                                props.followingInProgress(false, props.data.id)
                            });
                    }} > Follow</Button>
                }
            </Container>
        </ListGroup.Item>
    )
}

export default User;
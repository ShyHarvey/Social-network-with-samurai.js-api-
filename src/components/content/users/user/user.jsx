import React from "react";
import Container from 'react-bootstrap/esm/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import {NavLink} from "react-router-dom";
import styles from "./user.module.scss";
import userPhoto from "../../../../assets/user.png"

function User(props) {
    return (
        <ListGroup.Item className={styles.post}>
            <Container className={styles.item} fluid>
                <Container xs={1} className="p-0 text-center">
                    <NavLink to ={`/profile/${props.data.id}`}>
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
                    {/* <div className={styles.location}>
                <p>{props.data.location.city}</p>
                <p>{props.data.location.country}</p>
                </div> */}
                </Container>
                {props.data.followed ?
                    <Button onClick={() => props.unfollow(props.data.id)} >  Unfollow</Button>
                    : <Button onClick={() => props.follow(props.data.id)} >  Follow</Button>
                }
            </Container>
        </ListGroup.Item>
    )
}

export default User;
import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import {
    NavLink
} from "react-router-dom";

import styles from "./dialogLinks.module.scss";

function DialogLink(props) {
    return(
        <ListGroup.Item className={styles.link}>
                    <NavLink className="nav-link" to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </ListGroup.Item>
    );
}


export default DialogLink;
import React from "react";
import Container from "react-bootstrap/esm/Container";
import ListGroup from 'react-bootstrap/ListGroup';

import styles from "./dialogs.module.scss";
import DialogMessages from "./dialog/dialogMessages";
import DialogLink from "./dialog/dialog_links/dialogLink";

import {
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";


function Dialogs(props) {

    const isAuth = useSelector(state => state.authReducer.isAuth);
    if (!isAuth) {
        return <Navigate to="/login"/>
    } 

    let dialogLinks = props.data.dialogsList.map(item => <DialogLink id={item.id} name={item.name} key={item.id} />)
    let dialogMessages = props.data.dialogsList.map(item => <Route path={`/${item.id}`} key={item.id}
        element={<DialogMessages
            addMessage={props.addMessage}
            changeMessage={props.changeMessage}
            friendName={item.name}
            messagesData={props.data.messagesData}
            newMessageText={props.data.newMessageText} 
            />
        }></Route>)


    return (
        <Container fluid className={`${styles.dialogs}`}>
            <ListGroup className={styles.dialogsItem}>
                <h2>Dialogs</h2>
                {dialogLinks}
            </ListGroup>
            <Routes>
                {dialogMessages}
            </Routes>
        </Container>
    )
}

export default Dialogs;
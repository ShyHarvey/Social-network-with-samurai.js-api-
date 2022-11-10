import React from "react";
import Container from "react-bootstrap/esm/Container";
import ListGroup from 'react-bootstrap/ListGroup';

import styles from "./dialogs.module.scss";
import DialogMessages from "./dialog/dialogMessages";
import DialogLink from "./dialog/dialog_links/dialogLink";

import {
    // BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";


function Dialogs(props) {
    // let dialogsData = [
    //     { id:1 , name:"Dimych" },
    //     { id:2 , name:"Andrey" },
    //     { id:3 , name:"Sveta" },
    //     { id:4 , name:"Sasha" },
    //     { id:5 , name:"Viktor" },
    //     { id:6 , name:"Valera" },];


        let dialogLinks = props.data.map(item => <DialogLink id={item.id} name={item.name} />)
        let dialogMessages = props.data.map(item => <Route path={`/${item.id}`} element={<DialogMessages friendName={item.name} />}></Route>)


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
import React from "react";
import Container from "react-bootstrap/esm/Container";

import styles from "./dialogs.module.scss";

function Dialogs(){
    return (
        <Container className={styles.dialogs}>
            <p>dialogs</p>
        </Container>
    )
}

export default Dialogs;
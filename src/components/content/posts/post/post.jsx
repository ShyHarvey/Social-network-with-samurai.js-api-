import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import styles from "./post.module.scss";

function Post(props){
    return(
<ListGroup.Item className={styles.post}>
    <Container className={styles.item} fluid>
        <Row>
            <Col xs={1} className="p-0 text-center">
                <img className={styles.img} src="https://upload.wikimedia.org/wikipedia/ru/thumb/9/94/%D0%93%D0%B8%D0%B3%D0%B0%D1%87%D0%B0%D0%B4.jpg/250px-%D0%93%D0%B8%D0%B3%D0%B0%D1%87%D0%B0%D0%B4.jpg" alt="background" />
            </Col>
            <Col>
                <p className={styles.text}>{props.message}</p>
            </Col>
        </Row>
        <Container className="d-flex p-0 mt-1">
        <Button className="me-2" variant="outline-primary">Like</Button>            
                <span>{props.likesCount}</span>
        </Container>
    </Container>
</ListGroup.Item>
    )
}

export default Post;
import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import "./post.scss";


function Post(){
    return(
<ListGroup.Item>
    <Container fluid>
        <Row>
            <Col xs={1} className="p-0">
                <img className="postImg" src="https://upload.wikimedia.org/wikipedia/ru/thumb/9/94/%D0%93%D0%B8%D0%B3%D0%B0%D1%87%D0%B0%D0%B4.jpg/250px-%D0%93%D0%B8%D0%B3%D0%B0%D1%87%D0%B0%D0%B4.jpg" alt="background" />
            </Col>
            <Col>
                <p className='postText'>Waazaaap bro</p>
            </Col>
        </Row>
    </Container>
</ListGroup.Item>
    )
}

export default Post;
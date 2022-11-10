import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import './profileInfo.scss';


function ProfileInfo(){
    return (
        <Container fluid>
            <div className="profileHead">
                <img className="profileImg" src="https://s1.stc.all.kpcdn.net/putevoditel/projectid_406014/images/tild3064-6131-4666-a266-363837393031__960.jpg" alt="background" />
            </div>
            <Container fluid className="mt-3">
                <Row>
                    <Col xs={2} className="ava p-0">
                    <img className="profileImg" src="https://upload.wikimedia.org/wikipedia/ru/thumb/9/94/%D0%93%D0%B8%D0%B3%D0%B0%D1%87%D0%B0%D0%B4.jpg/250px-%D0%93%D0%B8%D0%B3%D0%B0%D1%87%D0%B0%D0%B4.jpg" alt="background" />
                    </Col>
                    <Col className="info">
                        <ListGroup>
                            <ListGroup.Item>Date of birth</ListGroup.Item>
                            <ListGroup.Item>City: Minsk</ListGroup.Item>
                            <ListGroup.Item>education</ListGroup.Item>
                            <ListGroup.Item>Web cite</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}


export default ProfileInfo;
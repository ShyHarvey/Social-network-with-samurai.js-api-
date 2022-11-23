import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Spinner from "react-bootstrap/esm/Spinner";
import './profileInfo.scss';

import ProfileStatus from "./profileStatus";


function ProfileInfo(props) {


    if (props.profile === null) {
        return <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    }
    return (
        <Container fluid>
            <div className="profileHead">
                <img className="profileImg" src="https://www.gastronom.ru/binfiles/images/20150706/bc855150.jpg" alt="wallpaper" />
            </div>
            <Container fluid className="mt-3">
                <h3>{props.profile.fullName}</h3>
                <Row>
                    <Col xs={2} className="ava p-0">
                        <img className="profileImg" src={props.profile.photos.large ? props.profile.photos.large
                             : 'https://cdn-icons-png.flaticon.com/512/1946/1946429.png'} alt="profile mage" />
                    </Col>
                    <Col className="info">
                        <ListGroup>
                            <ProfileStatus status="status" />
                            <ListGroup.Item>About: <strong>{props.profile.aboutMe}</strong></ListGroup.Item>
                            <ListGroup.Item>vk:  <a href={props.profile.contacts.vk} rel="noreferrer" target="_blank">{props.profile.contacts.vk}</a></ListGroup.Item>
                            <ListGroup.Item>instagram: {props.profile.contacts.instagram}</ListGroup.Item>
                            <ListGroup.Item>github: {props.profile.contacts.github}</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}



export default ProfileInfo;
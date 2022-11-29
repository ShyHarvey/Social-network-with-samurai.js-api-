import React from "react";
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Spinner from "react-bootstrap/esm/Spinner";
import './profileInfo.scss';

import ProfileStatus from "./profileStatus";
import AddProfileImage from "./addProfileImage";
import EditProfile from "../editProfile/editProfile";



function ProfileInfo(props) {

    if (props.profile === null) {
        return <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    }
    return (
        <Container fluid>
            <h3>{props.profile.fullName}</h3>
            <Container fluid className=" d-flex mt-3 p-0">
                <Container className="ava p-0 mx-2 ">
                    <img className="profileImg" src={props.profile.photos.large ? props.profile.photos.large
                        : 'https://cdn-icons-png.flaticon.com/512/1946/1946429.png'} alt="avatar" />
                    {props.isOwner ? <AddProfileImage /> : null}
                </Container>
                <Container className="info p-0 mx-2 ">
                    <ListGroup>
                        <ProfileStatus status={props.status ? props.status : "---"} updateStatus={props.updateStatus} />
                        <ListGroup.Item>About: <strong>{props.profile.aboutMe}</strong></ListGroup.Item>
                        <ListGroup.Item>vk:  {props.profile.contacts.vk} </ListGroup.Item>
                        <ListGroup.Item>instagram: {props.profile.contacts.instagram}</ListGroup.Item>
                        <ListGroup.Item>facebook: {props.profile.contacts.facebook}</ListGroup.Item>
                        <ListGroup.Item>github: {props.profile.contacts.github}</ListGroup.Item>
                    </ListGroup>
                </Container>
            </Container>
            <ListGroup className="m-2">
                <ListGroup.Item>{props.profile.lookingForAJob ?
            <p className="m-0">В поиске работы</p>
            :<p className="m-0">Не ищет работу</p>    
            }</ListGroup.Item>
            <ListGroup.Item className="p-0"> {props.profile.lookingForAJob ?
            <p className="m-0">Описание:{props.profile.lookingForAJobDescription}</p>
            :null    
            }</ListGroup.Item>
                {props.isOwner ? <EditProfile /> : null}
            </ListGroup>
        </Container>
    )
}



export default ProfileInfo;
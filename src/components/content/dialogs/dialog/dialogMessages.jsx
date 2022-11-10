import React from 'react';
import Post from '../../profile/MyPosts/post/post';
import Container from 'react-bootstrap/esm/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./dialog.scss";

function DialogMessages(props) {
    return (
        <Container fluid className='mt-3'>
            <h4>{props.friendName}</h4>
            <ListGroup className='dialogSpace' variant="flush">
                <Post message="Waaaazzaap bro" likesCount ='9'/>
                <Post message={`This is ${props.friendName}`} likesCount ='-5'/>
                <Post message="Yoyoyoyo" likesCount ='lol'/>
            </ListGroup>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Enter message</Form.Label>
                    <Form.Control placeholder="Enter text"></Form.Control>
                </Form.Group>
                    <Button className='mb-3' variant='primary'>Send</Button>
            </Form>
        </Container>
    )

}
export default DialogMessages;
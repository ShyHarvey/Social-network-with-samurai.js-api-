import React from 'react';
import Post from './post/post';
import Container from 'react-bootstrap/esm/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./posts.scss";

function Posts() {
    return (
        <Container fluid className='mt-3'>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Post's text</Form.Label>
                    <Form.Control placeholder="Enter text"></Form.Control>
                    <Form.Text className="text-muted">input</Form.Text>
                </Form.Group>
                    <Button className='mb-3' variant='primary'>Add post</Button>
            </Form>
            <ListGroup className='postsSpace' variant="flush">
                <Post message="Waaaazzaap bro" likesCount ='123'/>
                <Post message="Yo"/>
                <Post message="Wtf bro"/>
            </ListGroup>
        </Container>
    )

}
export default Posts;
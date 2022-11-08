import React from 'react';
import Post from './post/post';
import Container from 'react-bootstrap/esm/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import "./posts.scss";

function Posts() {
    return (
        <Container fluid className='mt-3'>
            <ListGroup variant="flush">
                <Post/>
                <Post/>
                <Post/>
            </ListGroup>
        </Container>
    )

}
export default Posts;
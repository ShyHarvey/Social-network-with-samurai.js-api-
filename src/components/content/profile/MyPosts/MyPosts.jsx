import React from 'react';
import Post from './post/post';
import Container from 'react-bootstrap/esm/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import "./posts.scss";


function Posts(props) {
    console.log("posts")
    let postItems = props.data.map(item => <Post message = {item.message} likesCount={item.likesCount} key={item.id} />)
    
    let onPostChange = (e) =>{
        props.onPostChange(e.target.value)
    };

    let addPost = () =>{ 
        props.addPost()
    } ;

    return (
        <Container fluid className='mt-3'>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Post's text</Form.Label>
                    <Form.Control onChange={onPostChange} value={props.newPostText}></Form.Control>
                    <Form.Text className="text-muted">input</Form.Text>
                </Form.Group>
                    <Button onClick={addPost} className='mb-3' variant='primary'>Add post</Button>
            </Form>
            <ListGroup className='postsSpace' variant="flush">
                {postItems}
            </ListGroup>
        </Container>
    )

}
export default Posts;
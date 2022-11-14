import Post from '../../profile/MyPosts/post/post';
import Container from 'react-bootstrap/esm/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./dialog.scss";

import{addMessageActionCreator, changeMessageActionCreator} from '../../../../redux/dialogsReducer'
function DialogMessages(props) {

    let messagesList = props.messagesData.map(item=> <Post message = {item.message} likesCount={item.likesCount}/>)
    
    let addMessage = () => props.dispatch(addMessageActionCreator()) ;
    let changeMessage = (e) => props.dispatch(changeMessageActionCreator(e.target.value))
    return (
        <Container fluid className='mt-3'>
            <h4>{props.friendName}</h4>
            <ListGroup className='dialogSpace' variant="flush">
                {messagesList}
            </ListGroup>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Enter message</Form.Label>
                    <Form.Control onChange={changeMessage} value={props.newMessageText}></Form.Control>
                </Form.Group>
                    <Button onClick={addMessage} className='mb-3' variant='primary'>Send</Button>
            </Form>
        </Container>
    )

}
export default DialogMessages;
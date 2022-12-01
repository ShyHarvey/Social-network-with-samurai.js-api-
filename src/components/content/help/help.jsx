import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import './help.scss'
import ListGroup from 'react-bootstrap/ListGroup';

const Help = () => {
    return (
        <Container fluid className='help'>
            <h1>Social network written in React and using the free version of SamuraiJs api</h1>
            <h3>account for testing:</h3>
            <ListGroup className='accountForTest'>
                <ListGroup.Item>
                    Email: free@samuraijs.com
                </ListGroup.Item>
                <ListGroup.Item>
                    Password: free
                </ListGroup.Item>
            </ListGroup>
            <h3>Information:</h3>
            <ListGroup>
                <ListGroup.Item variant="primary">
                    IMPORTANT: Samurai js api does not allow you to work with posts or messages, so they are stored only in redux store.
                </ListGroup.Item>
                <ListGroup.Item>
                    Login or Register, every ten login attempts you will see a captcha that needs to be solved. You can select the option: remember me and then for some time you will not need to go through authorization. Also, you can always log out.
                </ListGroup.Item>
                <ListGroup.Item>
                    At the bottom of the navigation there is a help button by clicking on which you can always read detailed information about the site's capabilities.
                </ListGroup.Item>
                <ListGroup.Item>
                    On the profile page, you can change your name, profile picture, description, your links, job search status and message to it. And you can also change the message that will be visible to everyone in the list of users. Posts are saved only in redux store
                </ListGroup.Item>
                <ListGroup.Item>
                    The message page simulates the ability to switch between chats and write to different people, but the work is limited to redux store. Again =)
                </ListGroup.Item>
                <ListGroup.Item>
                    On the Users page, their page-by-page output is implemented. You can click on a user's avatar to go to their profile.
                </ListGroup.Item>
                <ListGroup.Item>
                    429 http status means that the number of allowed post\put\delete requests per hour has been exceeded and you need to wait a bit, this is a limitation for of the api.
                </ListGroup.Item>
            </ListGroup>
            <h3>Technologies that I used:</h3>
            <Container fluid className='d-flex p-0'>
                <ListGroup className='me-2'>
                    <ListGroup.Item>
                        ReactJS 18
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Redux
                    </ListGroup.Item>
                    <ListGroup.Item>
                        React - Redux
                    </ListGroup.Item>
                    <ListGroup.Item>
                        React-hook-form
                    </ListGroup.Item>
                    <ListGroup.Item>
                        React-hook
                    </ListGroup.Item>
                </ListGroup>
                <ListGroup className='mx-2'>
                    <ListGroup.Item>
                        React - Bootstrap
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Redux Thunk
                    </ListGroup.Item>
                    <ListGroup.Item>
                        React Router v6
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Lazy Loading (React.lazy() and Suspense)
                    </ListGroup.Item>
                </ListGroup>
                <ListGroup className='mx-2'>
                    <ListGroup.Item>
                        Axios + Fetch
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Eslint
                    </ListGroup.Item>
                    <ListGroup.Item>
                        SCSS
                    </ListGroup.Item>
                    <ListGroup.Item>
                        CSS-Modules
                    </ListGroup.Item>
                </ListGroup>
            </Container>
        </Container>
    )
}

export default Help;
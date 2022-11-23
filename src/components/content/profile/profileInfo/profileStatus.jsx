import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/esm/Button';



function ProfileStatus(props) {

    const [editMode, setEditMode] = useState(false)

    return (
        <ListGroup.Item onDoubleClick={() => setEditMode(true)}>
            {editMode ?
                <InputGroup >
                    <Button onClick={() => setEditMode(false)} variant="secondary" id="button-addon1">
                        Set status
                    </Button>
                    <Form.Control
                        autoFocus={true}
                        aria-label="Example text with button addon"
                        aria-describedby="basic-addon1"
                        value={props.status}
                    />
                </InputGroup>
                :
                props.status
            }
        </ListGroup.Item>

    );
}

export default ProfileStatus;
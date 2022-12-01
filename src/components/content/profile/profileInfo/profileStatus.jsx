import React, { useState, useRef } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/esm/Button';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';



function ProfileStatus(props) {
    let statusInput = useRef()
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)
    let { id } = useParams()
    let submitStatus = () => {
        setEditMode(false);
        setStatus(statusInput.current.value)
    }

    useEffect(() => {
        if (!id) {
            props.updateStatus(status)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [status])


    return (
        <ListGroup.Item action variant="success" onDoubleClick={() => setEditMode(true)}>
            {!id? (editMode ?
                <InputGroup >
                    <Button onClick={() => submitStatus()} variant="secondary" id="button-addon1">
                        Set status
                    </Button>
                    <Form.Control
                        ref={statusInput}
                        autoFocus={true}
                        defaultValue={status}
                    />
                </InputGroup>
                :
                props.status)
                :
                props.status
            }
        </ListGroup.Item>

    );
}

export default ProfileStatus;
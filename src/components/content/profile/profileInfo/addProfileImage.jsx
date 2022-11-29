import React from 'react'
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import {savePhoto} from "../../../../redux/profileReducer"

const AddProfileImage = () => {
    let dispatch = useDispatch()

    let onFileSelected = (e) => {
        if(e.target.files.length){
            dispatch(savePhoto(e.target.files[0]))
        }
    }

    return (
        <Form.Control onChange={onFileSelected} className="fileInput my-1" type="file"></Form.Control>
    )
}

export default AddProfileImage;
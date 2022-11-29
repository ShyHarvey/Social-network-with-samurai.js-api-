import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import EditProfileModal from './editProfileModal';
import './editProfile.scss'

const EditProfile = () => {
        
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button className='edit-btn mt-2 p-1' variant="primary" onClick={() => setModalShow(true)}>
        Edit profile
      </Button>

      <EditProfileModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
)
}

export default EditProfile;
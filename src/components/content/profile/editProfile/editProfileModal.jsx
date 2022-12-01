import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import Container from 'react-bootstrap/esm/Container';
import { useForm } from "react-hook-form"
import { editProfile } from '../../../../redux/profileReducer';


const EditProfileModal = (props) => {

  const profileState = useSelector(state => state.profileReducer.profile);
  const dispatch = useDispatch();


  const {
    register,
    handleSubmit,
  } = useForm()

  const onSubmit = (data) => {
    dispatch(editProfile({ ...data, userId: profileState.userId }))
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Profile
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" {...register('fullName')} defaultValue={profileState.fullName} placeholder="Full Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicAbout">
            <Form.Label>About</Form.Label>
            <Form.Control type="text" {...register('aboutMe')} defaultValue={profileState.aboutMe} placeholder="Tell about yourself" />
            <Form.Text className="text-muted">
              tell about yourself
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" {...register('lookingForAJob')} defaultChecked={profileState.lookingForAJob} label="Looking for a job" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicAbout">
            <Form.Label>Description of wanted job</Form.Label>
            <Form.Control type="text" {...register('lookingForAJobDescription')} defaultValue={profileState.lookingForAJobDescription} placeholder="Tell about yourself" />
            <Form.Text className="text-muted">
              description of wanted job
            </Form.Text>
          </Form.Group>
          <Modal.Title id="contained-modal-title-vcenter">
            Contacts
          </Modal.Title>
          <Container fluid className='d-flex'>
            <Form.Group className="mb-3 mx-2 flex-fill" controlId="formBasicContactsVK">
              <Form.Label>VK</Form.Label>
              <Form.Control type="url" {...register('contacts.vk')} defaultValue={profileState.contacts.vk} placeholder="VK link" />
              <Form.Text className="text-muted">
                must be valid url format
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3 mx-2 flex-fill" controlId="formBasicContactsINST">
              <Form.Label>Instagram</Form.Label>
              <Form.Control type="url" {...register('contacts.instagram')} defaultValue={profileState.contacts.instagram} placeholder="Instagram link" />
              <Form.Text className="text-muted">
                must be valid url format
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3 mx-2 flex-fill" controlId="formBasicContactsFCB">
              <Form.Label>Facebook</Form.Label>
              <Form.Control type="text" {...register('contacts.facebook')} defaultValue={profileState.contacts.facebook} placeholder="Facebook link" />
              <Form.Text className="text-muted">
                must be valid url format
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3 mx-2 flex-fill" controlId="formBasicContactsGH">
              <Form.Label>GitHub</Form.Label>
              <Form.Control type="url" {...register('contacts.github')} defaultValue={profileState.contacts.github} placeholder="GitHub link" />
              <Form.Text className="text-muted">
                must be valid url format
              </Form.Text>
            </Form.Group>
          </Container>
          <Container className='d-flex'>
            <Form.Group className="mb-3 mx-2 flex-fill" controlId="formBasicContactsTWTTR">
              <Form.Label>twitter</Form.Label>
              <Form.Control type="text" {...register('contacts.twitter')} defaultValue={profileState.contacts.twitter} placeholder="twitter link" />
              <Form.Text className="text-muted">
                must be valid url format
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3 mx-2 flex-fill" controlId="formBasicContactsYT">
              <Form.Label>youtube</Form.Label>
              <Form.Control type="url" {...register('contacts.youtube')} defaultValue={profileState.contacts.youtube} placeholder="youtube link" />
              <Form.Text className="text-muted">
                must be valid url format
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3 mx-2 flex-fill" controlId="formBasicContactsWS">
              <Form.Label>website</Form.Label>
              <Form.Control type="url" {...register('contacts.website')} defaultValue={profileState.contacts.website} placeholder="website link" />
              <Form.Text className="text-muted">
                must be valid url format
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3 mx-2 flex-fill" controlId="formBasicContactsML">
              <Form.Label>Main link</Form.Label>
              <Form.Control type="url" {...register('contacts.mainLink')} defaultValue={profileState.contacts.mainLink} placeholder="Main link link" />
              <Form.Text className="text-muted">
                must be valid url format
              </Form.Text>
            </Form.Group>
          </Container>
          <Button variant="primary" type="submit" onClick={props.onHide}>
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default EditProfileModal
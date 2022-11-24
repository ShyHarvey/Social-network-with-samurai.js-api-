import React from 'react';
import { useForm } from "react-hook-form"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/authReducer"

function LoginForm() {

    let errorMessage = useSelector(state => state.authReducer.errorMessage)
    const dispatch = useDispatch()

    const {
        register,
        formState: {
            errors,
            isValid,
        },
        handleSubmit,
        reset,
    } = useForm({ mode: "onBlur" });

    const onSubmit = (data) => {
        dispatch(login(data.email, data.password, data.rememberMe))
        reset()
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" {...register('email', { required: true })} />
                <Form.Text className="text-muted">
                    {errors?.email && "Обязательное поле"}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" {...register('password', { required: true })} />
                <Form.Text className="text-muted">
                    {errors?.password && "Обязательное поле"}
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" {...register("rememberMe")} />
            </Form.Group>
            {errorMessage ? <div className="text-danger p-1 my-2">{errorMessage}</div>
                : null}
            <Button disabled={!isValid} variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default LoginForm;
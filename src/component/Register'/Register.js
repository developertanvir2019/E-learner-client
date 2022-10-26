import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Others/AuthProvider';

const Register = () => {
    const location = useLocation();
    const [error, setError] = useState('')
    const from = location.state?.from?.pathname || '/';
    const { createUser } = useContext(AuthContext)
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                Navigate(from, { replace: true })
                form.reset();
                setError('')
            })
            .catch(error => setError(error.message))
    }
    return (
        <div>
            <Form onSubmit={handleSubmit} className='w-50 mx-auto mt-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control name="name" type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control name="email" type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control name="password" type="password" placeholder="Password" />
                </Form.Group>

                <p>{error}</p>
                <Button variant="primary" type="submit">
                    Register
                </Button>
                <button className='btn btn-outline-primary mx-3'>Google</button>
                <Link to={'/login'}>already have an account</Link>
            </Form>
        </div>
    );
};

export default Register;
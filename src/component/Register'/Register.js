import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, } from 'react-router-dom';
import { AuthContext } from '../../Others/AuthProvider';
const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [error, setError] = useState(null);
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
                setError('')
            })
            .catch(err => {
                setError(err.message)
            })
    }
    return (
        <div>
            <h1 className=' pt-4 text-primary'>Welcome to register page </h1>
            <h2 className='text-primary'>keep register</h2>
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
                <p className='text-danger'>{error}</p>
                <Button className='me-3' variant="primary" type="submit">
                    Register
                </Button>
                <Link to={'/login'}>already have an account</Link>
            </Form>
        </div>
    );

};

export default Register;
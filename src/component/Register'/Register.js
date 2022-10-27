import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Others/AuthProvider';
const Register = () => {
    const [error, setError] = useState('');
    const [accept, setAccept] = useState(false);
    const { createUser, updateUserProfile, emailVerify } = useContext(AuthContext)
    const handleAccept = e => {
        setAccept(!accept)
    }
    const handleSubmit = e => {
        setError('')
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;
        createUser(email, password)
            .then(res => {
                const user = res.user;
                console.log(user)
                form.reset()
                handleUpdate(name, photoURL);
                handleVerify();
                alert('verify mail sent')
            })
            .catch(err => {
                setError(err.message)
            })

    }
    const handleVerify = () => {
        emailVerify()
            .then(() => { })
            .catch(err => console.log(err))
    };
    const handleUpdate = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(() => { })
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control name='name' type="text" placeholder="Enter Your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>photo url</Form.Label>
                <Form.Control name='photoURL' type="text" placeholder="photo Url" />
            </Form.Group>
            <h6 className='text-danger'>{error}</h6>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" onClick={handleAccept}
                    label={<>Accept <Link to='/term'> terms and conditions</Link></>}
                />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!accept}>
                Register
            </Button>
        </Form>
    );
};

export default Register;
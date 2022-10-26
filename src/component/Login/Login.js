import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../Others/AuthProvider';
import './Login.css'
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const provider = new GoogleAuthProvider();
    const [error, setError] = useState('')
    // const navigate = useNavigate();
    // const location = useLocation();
    // const from = location.state?.from?.pathname || '/'
    const { signIn, providerLogIn } = useContext(AuthContext);
    const handleLogin = () => {
        providerLogIn(provider)
            .then((result) => {
                const userin = result.user;
                console.log(userin)
            })
            .catch(err => console.error(err))
    }
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email)
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset()
                setError('')
            })
            .catch(error => setError(error.message))
    }
    return (
        <div className="container">
            <h1 className='pt-5 text-success'>Please Login Now</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>
                <h6 className='text-danger'>{error}</h6>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <h6 className='text-center'>Are you new user in E-Learner? <Link to='/register'>create new account</Link></h6>

            <div className='pt-5'>
                <Link onClick={handleLogin} className='icon-style' >Google Login<FaGoogle ></FaGoogle></Link> <br />
                <div className='pt-4'><Link className='icon-style'>Github Login <FaGithub ></FaGithub></Link></div>
            </div>


        </div>
    );
};

export default Login;
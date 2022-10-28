import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Others/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import('./Login.css')

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const { signIn, googleSign, gitSign } = useContext(AuthContext)
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(err => {
                console.error(err)
            })
    }
    const provider = new GoogleAuthProvider()
    const handleGoogle = () => {
        googleSign(provider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(err => console.log(err))
    }
    const providerGit = new GithubAuthProvider();
    const handlegit = () => {
        gitSign(providerGit)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h1 className='text-success py-3'>Please Log in from hare</h1>
            <Form onSubmit={handleSubmit} className='w-50 mx-auto mt-5'>
                <Form.Label>Email address</Form.Label>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control required name="email" type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required name="password" type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p className='text-center'>You are new in E-Learner? <Link to='/register'>create new account</Link></p>

            <div className='pt-5'>
                <Link onClick={handleGoogle} className='icon-style' >Google Login<FaGoogle ></FaGoogle></Link> <br />
                <div onClick={handlegit} className='pt-4'><Link className='icon-style'>Github Login <FaGithub ></FaGithub></Link></div>
            </div>
        </div>
    );
};

export default Login;





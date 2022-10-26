import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { AuthContext } from '../../Others/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err))
    }
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand><Link to='/'>E-Learner</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto pe-5 my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link className='px-4' href="#action2">Link</Nav.Link>

                        <Nav.Link href="#"> Link </Nav.Link>
                        <Nav.Link href="#">
                            {
                                user?.uid ?
                                    <>
                                        <span>{user?.displayName}</span>
                                        <Button onClick={handleLogOut} className='ms-2' variant="outline-success">Log Out</Button>
                                    </>
                                    :
                                    <>
                                        <Button variant="outline-warning"><Link to={'/login'}>Log IN</Link></Button>
                                        <Button variant="outline-warning"><Link to={'/register'}>Register</Link></Button>


                                    </>
                            }
                        </Nav.Link>
                        <Link to={'/profile'}>
                            {
                                user ?
                                    <Image src={user?.photoURL} className='profileimg'></Image>
                                    :
                                    <FaUserAlt></FaUserAlt>
                            }
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar >
    );
};

export default Header;
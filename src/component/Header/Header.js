import React, { useContext, useState } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Others/AuthProvider';
import './Header.css'

const Header = () => {
    const [toggle, setToggle] = useState(true);
    const { user, logOut } = useContext(AuthContext);
    console.log(user)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }
    return (
        <Navbar className='my-nav' expand="lg">
            <Container fluid>
                <Navbar.Brand><Link to='/'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-I-51LGfxKAAqiwAFPGOpPgbEhm04kYzQRwjHirmijw&s" alt="" /></Link></Navbar.Brand>
                <Navbar.Brand> <h4 className='text-white'>E-Learner</h4></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto pe-5"
                        style={{ maxHeight: '80px' }}
                        navbarScroll
                    >
                        <Link to={'/'}>Home</Link>
                        <Link to={'/courses'}>Courses</Link>

                        <Link to={'faq'}> FAQ </Link>
                        <Link to={"blog"}> Blog </Link>
                        <Button onClick={() => setToggle(!toggle)} className={toggle ? 'bg-light text-dark' : 'bg-dark text-white'} >
                            {toggle ? "light" : "dark"}
                        </Button>
                        {
                            user ?
                                <>
                                    <Link onClick={handleLogOut} > Logout </Link>
                                    <Image src={user?.photoURL ? user.photoURL : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBgZbchuTiUtA3Egi1arN4BEQeoTaUtutQ8A&usqp=CAU`} className='profileimg'></Image>
                                </>
                                :
                                <>
                                    <Button variant="outline-primary"><Link to={'/login'}>Login</Link></Button>
                                </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar >
    );
};

export default Header;
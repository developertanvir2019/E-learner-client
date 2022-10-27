import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet, useLoaderData } from 'react-router-dom';
import SideNav from './SideNav';

const Courses = () => {
    const courses = useLoaderData()
    console.log(courses)
    return (
        <Row className='mt-5'>
            <Col lg='3'>
                <SideNav></SideNav>
            </Col>
            <Col lg='9'>
                <Outlet></Outlet>
            </Col>

        </Row>
    );
};

export default Courses;
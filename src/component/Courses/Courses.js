import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Outlet, useLoaderData } from 'react-router-dom';
import SideNav from './SideNav';
import './Course.css'

const Courses = () => {
    const allUser = useLoaderData();
    return (
        <Row>
            <Col className='colum-color pt-5' lg='3'>
                <SideNav data={allUser}></SideNav>
            </Col>
            <Col className='pt-5' lg='9'>
                <Outlet></Outlet>
            </Col>

        </Row>
    );
};

export default Courses;
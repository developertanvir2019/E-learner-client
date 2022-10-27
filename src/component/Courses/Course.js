import React from 'react';
import './Course.css'
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Course = () => {
    const allCourse = useLoaderData()
    return (
        <Row>
            <h1 className='text-success my-4'>Our All Courses</h1>
            {
                allCourse.map(course =>
                    <Col key={course.category_id} className='mb-3' lg='4' sm='1'>

                        <Card className='card-all' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={course.thumbnail_url} />
                            <Card.Body>
                                <Card.Title>Course name : {course.title}</Card.Title>
                                <Card.Text>
                                    {(course.details.slice(0, 50))}...
                                </Card.Text>
                                <Button variant="primary">course details</Button>
                            </Card.Body>
                        </Card>

                    </Col>
                )
            }
        </Row>
    );
};

export default Course;
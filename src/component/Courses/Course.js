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
                    <Col className='mb-3' lg='4' sm='1'>

                        <Card className='card-all' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={course.thumbnail_url} />
                            <Card.Body>
                                <Card.Title>Course name : {course.title}</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>

                    </Col>
                )
            }
        </Row>
    );
};

export default Course;
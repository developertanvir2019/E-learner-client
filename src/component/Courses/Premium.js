import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Premium = () => {
    const data = useLoaderData()
    const handleSubmit = () => {
        alert('congratulation you get our premium access')
    }
    return (
        <div className='container'>
            <h1 className='py-2 text-success'>welcome our premium {data.title} course</h1>
            <img src={data.thumbnail_url} alt="" />
            <h4>Details</h4>
            <p>{data.details}</p>
            <h2 className='pt-5 text-success'> For premium access please fill the form</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Premium;
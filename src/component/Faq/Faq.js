import React from 'react';
import { Accordion } from 'react-bootstrap';

const Faq = () => {
    return (
        <div className='container'>
            <h1 className='my-4'>Some common question</h1>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>1.What kind of teach provide in this site?</Accordion.Header>
                    <Accordion.Body>
                        This website is web development base website .You will be a web developer if you complete our course ..
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>2.Why we learn web development ?</Accordion.Header>
                    <Accordion.Body>
                        Web development is a very good for your profession.. You can get permanent job by web development ...
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>3.Who can give support us?</Accordion.Header>
                    <Accordion.Body>
                        We have so many mentor for this course. They always support you if you need
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>4. How can we contact with author?</Accordion.Header>
                    <Accordion.Body>
                        IF you need to contact with us. Our email address is given below ..you can contact by this email address.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Faq;
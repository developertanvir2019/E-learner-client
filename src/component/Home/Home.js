import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='d-flex justify-content-center align-items-center banner'>
                <div>
                    <h1>Welcome our learning zone</h1>
                    <h5>This is our learning website.. <br /> We provide some course. You can learn web development <br />from our course </h5>

                </div>

            </div>
            {/* //our service// */}
            <h1 className='text-success mt-5'>Our teaching process</h1>
            <CardGroup className='mt-5 container'>
                <Card>
                    <Card.Img variant="top" src="https://cdn2.macpaw.com/images/content/video-quality-enhancer-Google_1577103734.jpg" />
                    <Card.Body>
                        <Card.Title>100% quality-full video</Card.Title>
                        <Card.Text>
                            we provide best quality video. And you can get access all video any time for learning..
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card className='mx-3'>
                    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReFsM2Ed0D7135-OXpoLl71_Qij0LU7KLFFLrbpsaqUby7kQa_tEmkWhO7EFSEmlAYkR8&usqp=CAU" />
                    <Card.Body>
                        <Card.Title>24 Hour support</Card.Title>
                        <Card.Text>
                            You get 24 hour support from our teachers. If you need any help then you can contact us..
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card>
                    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJHCEdaAt2Hviwc277jWfEN4Ue0LFHB-FRaPqU6GvD_OcGjwVKNsEWwvZUdK5E4E4JrM&usqp=CAU" />
                    <Card.Body>
                        <Card.Title>Provide Certificate</Card.Title>
                        <Card.Text>
                            we Provide Certificate all students who complete our course seriously..So you need to hardwork.
                        </Card.Text>
                    </Card.Body>

                </Card>
            </CardGroup>
        </div>


    );
};

export default Home;
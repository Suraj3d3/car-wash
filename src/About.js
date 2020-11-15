import React from 'react';
// import './App.css';
import './About.css';
import aboutusImg from './assets/carWash.jpg'
import {Button,Alert, Container , Row,Col,Nav,Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';



function About()
{
    return(<div>
        <Container fluid="md">
        <h1>About Us</h1>
            <Row>
                <Col className='aboutUsCol1'>
                    <p>
                    While this entrepreneur's childhood interests help to deepen his audience, the second screenshot below helps Kero One widen it. His "About Me" page first tells his story in English, then in Japanese, then in Korean, then in Chinese. Accommodating these Southeast Asian audiences makes his brand more inclusive of all the audiences he identifies with.
                    </p>
                </Col>
                
                <Col className='aboutUsCol2'>
                    <img src={aboutusImg} className='circularImg' />
                </Col>
            </Row>
        </Container>
    </div>)
}
export default About
import React from 'react';
import {Container, Row, Col} from "react-bootstrap";

const AboutMe = () => {
    return (
        <div id="about" className="my-5">
            <Row className= "align-items-center">

                <Col sm={12} lg={6} className="mb-4">
                    <img style={{width: "100%"}} src={process.env.PUBLIC_URL + "/images/RamboandI.JPG"}/>
                    
                </Col>

                <Col sm={12} lg={6}>

                    <h1 className= "mb-4"> <strong>Welcome, I'm Winter!</strong> </h1>
                    
                    <p>
                    Hi there! My name is Winter and I graduated with a bachelor's in finance before I went on to pursue a technical degree to learn more about the tech & software industry. I wanted to explore web development, create projects from scratch and understand how data can be used a powerful tool to make effective, innovative changes. I strive to use my skills to help make impactful, positive influential changes in the tech industry.

                    When I'm not immersed in a computer screen, I enjoy taking spending time in nature, reading, playing with my german sheperd, listening to music and spending time with my family.
                    </p>
                </Col>
            </Row>
        </div>
    )
}

export default AboutMe

import React from 'react';
import {Container, Row, Col} from "react-bootstrap";

const AboutMe = () => {
    return (
        <div id="about" className="my-5">
            <Row className= "align-items-center">

                <Col sm={12} lg={6} className="mb-4">
                    <img style={{width: "100%"}} src={process.env.PUBLIC_URL + "/images/mypicture.jpg"}/>
                    
                </Col>

                <Col sm={12} lg={6}>

                    <h1 className= "mb-4"> <strong>Welcome, I'm Winter!</strong> </h1>
                    
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Col>
            </Row>
        </div>
    )
}

export default AboutMe

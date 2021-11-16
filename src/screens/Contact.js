import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [messageError, setMessageError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    setName("");
    setEmail("");
    setMessage("");
    alert("Contact form submitted");
  };

  const handleMouseOut = (e) => {
    if (e.target.name==="name") {
      if (e.target.value==="") {
        setError("The name field is required.");
        setNameError(true);
      } else {
        setError("");
        setNameError(false);
      }
    } else if(e.target.name==="email") {
      if (e.target.value==="") {
        setError("The email field is required.");
        setEmailError(true);
      } else {
        setError("");
        setEmailError(false);
      }
    } else {
      if (e.target.value==="") {
        setError("The message field is required.");
        setMessageError(true);
      } else {
        setError("");
        setMessageError(false);
      }

    }
  }

  return (
    <div className="contact-container">
      <Row>
        <Col sm={12} lg={4}>
          <div>
            <h1>Contact Me!</h1>
            <p>
              Here's where to find me: 
            </p>

            <div>
                <a href="https://www.linkedin.com/in/kiran-winter-kanda/" target="_blank"> <i class="fab fa-linkedin"></i> </a>
                <a href="https://github.com/winterkanda" target="_blank"> <i class="fab fa-github"></i> </a>
                <a href="mailto:kirankanda06@gmail.com" target="_blank"> <i class="fas fa-envelope"></i> </a>
            </div>
            
          </div>
        </Col>

        <Col sm={12} lg={8}>
          <Form className="contact-form" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name" 
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onMouseOut={handleMouseOut}
              />

            </Form.Group>

            {nameError && <p style={{color:"#ff6699"}} className="contact-error">The name field is required.</p>}

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onMouseOut={handleMouseOut}
              />

            </Form.Group>

            {emailError && <p style={{color:"#ff6699"}} className="contact-error">The email field is required.</p>}

            <Form.Group className="mb-3" controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              
              <Form.Control
                name="message"
                as="textarea"
                rows={5}
                placeholder="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onMouseOut={handleMouseOut}
              />

            </Form.Group>

            {messageError && <p style={{color:"#ff6699"}} className="contact-error">The message field is required.</p>}

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;

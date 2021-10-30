import { LinkContainer } from "react-router-bootstrap";
import React from "react";
import {Navbar, Container, Nav} from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container style={{fontWeight:"bold"}}>
        <Navbar.Brand href="#home">Winter Kanda</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="mr-auto">
                  
              <LinkContainer to="/">
                <Nav.Link>About Me</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/portfolio">
                <Nav.Link>Portfolio</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/resume">
                <Nav.Link>Resume</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

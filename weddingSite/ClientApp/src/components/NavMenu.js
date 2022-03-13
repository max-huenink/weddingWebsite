import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './NavMenu.css';

export function NavMenu() {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Max and Alicia Wedding</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/pictures">Pictures</Nav.Link>
              <Nav.Link href="/registry">Registry</Nav.Link>
              <Nav.Link href="/how-we-met">How we met</Nav.Link>
              <Nav.Link href="/engagement-story">How we got engaged</Nav.Link>
              <Nav.Link href="/wedding-details">Wedding details</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

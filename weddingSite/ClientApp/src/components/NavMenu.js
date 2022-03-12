import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavMenu.css';

export function NavMenu() {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Valentine's Day 2022</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/pictures">Pictures</Nav.Link>
              <Nav.Link href="/registry">Registry</Nav.Link>
              <NavDropdown title="Stories">
                <Nav.Link href="/engagement-story">How we got engaged</Nav.Link>
                <Nav.Link href="/how-we-met">How we met</Nav.Link>
              </NavDropdown>
              <NavDropdown title="Details">
                <Nav.Link href="/colors">Colors</Nav.Link>
                <Nav.Link href="/hotel">Hotel</Nav.Link>
                <Nav.Link href="/itinerary">Itinerary</Nav.Link>
                <Nav.Link href="/location">Location</Nav.Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

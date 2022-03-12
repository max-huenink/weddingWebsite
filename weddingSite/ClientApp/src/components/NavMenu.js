import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
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
              <Nav.Link href="/pictures">Photos of us</Nav.Link>
              <Nav.Link href="/heart">A heart</Nav.Link>
              <Nav.Link href="/rose">A rose</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

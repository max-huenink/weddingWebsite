import React from 'react';
import Container from 'react-bootstrap/Container';
import { NavMenu } from './NavMenu';

export function Layout({ children }) {
  return (
    <div>
      <NavMenu />
      <Container>
        {children}
      </Container>
    </div>
  );
}

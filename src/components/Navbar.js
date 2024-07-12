import React from 'react';
import { Link, } from 'react-router-dom';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';

const NavbarComponent = ({ isLoggedIn, handleLogout }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Worko</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          {isLoggedIn ? (
            <Button variant="danger" onClick={handleLogout}>Logout</Button>
          ) : (
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;


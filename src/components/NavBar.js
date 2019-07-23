import React from 'react'
// import Button from 'react-bootstrap/Button'
// import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="./">Hello There.</Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="./dev">Development</Nav.Link>
          <Nav.Link href="./music">Music</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;

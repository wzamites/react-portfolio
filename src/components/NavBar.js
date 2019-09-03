import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

class NavBar extends React.Component {
  render () {
    return (

      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Navbar.Brand href="./">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="./dev">Development</Nav.Link>
            <Nav.Link href="./music">Music</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    )
  }
}

export default NavBar

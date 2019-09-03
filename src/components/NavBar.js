import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

class NavBar extends React.Component {
  render () {
    return (
      <Navbar sticky="top" bg="dark" variant="dark" expand="md">

        <Navbar.Brand href="./">
          Home
        </Navbar.Brand>

        <Nav className="mr-auto">
          <Nav.Link href="./dev">Development</Nav.Link>
          <Nav.Link href="./music">Music</Nav.Link>
        </Nav>

      </Navbar>
    )
  }
}



// <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//   <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//   <Navbar.Collapse id="responsive-navbar-nav">
//   <Nav className="mr-auto">
//     <Nav.Link href="#features">Features</Nav.Link>
//       <Nav.Link href="#pricing">Pricing</Nav.Link>
//   </Nav>
//   <Nav>
//     <Nav.Link href="#deets">More deets</Nav.Link>
//     <Nav.Link eventKey={2} href="#memes">
//       Dank memes
//     </Nav.Link>
//   </Nav>
// </Navbar.Collapse>
// </Navbar>

export default NavBar

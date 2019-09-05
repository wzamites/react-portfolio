import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

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
          <Nav>
            <Nav.Link href="tel:16109960580">
                <i className="fas fa-phone"></i>
            </Nav.Link>

            <Nav.Link href="mailto:wzamites@gmail.com">
                <i className="fas fa-envelope"></i>
            </Nav.Link>

            <Nav.Link href="https://drive.google.com/file/d/1crHmK_ONvLLEJnq5oHXtaTZ_m3Wxd1ZZ/view?usp=sharing" target="_blank">
                <i className="fas fa-file-pdf"></i>
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>

    )
  }
}

export default NavBar

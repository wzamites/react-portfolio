import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Dropdown from 'react-bootstrap/Dropdown'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

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
                <i class="fas fa-phone"></i>
            </Nav.Link>

            <Nav.Link href="mailto:wzamites@gmail.com">
                <i class="fas fa-envelope"></i>
            </Nav.Link>

            <Nav.Link href="https://drive.google.com/file/d/1crHmK_ONvLLEJnq5oHXtaTZ_m3Wxd1ZZ/view?usp=sharing" target="_blank">
                <i class="fas fa-file-pdf"></i>
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>

    )
  }
}

export default NavBar

import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

class NavBar extends React.Component {
  render () {
    return (

      <Navbar sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="./dev">Development</Nav.Link>
            <Nav.Link href="./music">Music</Nav.Link>
          </Nav>
          <Nav>

          <OverlayTrigger key='bottom' placement='bottom'
            overlay={
              <Tooltip id="tooltip-bottom">
              (610) 996-0580
              </Tooltip>
            }>
            <Nav.Link href="tel:16109960580">
                <i className="fas fa-phone fa-lg"></i>
            </Nav.Link>
          </OverlayTrigger>

          <OverlayTrigger key='bottom' placement='bottom'
            overlay={
              <Tooltip id="tooltip-bottom">
              Email
              </Tooltip>
            }>
            <Nav.Link href="mailto:wzamites@gmail.com">
                <i className="fas fa-envelope fa-lg"></i>
            </Nav.Link>
          </OverlayTrigger>

          <OverlayTrigger key='bottom' placement='bottom'
            overlay={
              <Tooltip id="tooltip-bottom">
              Resume
              </Tooltip>
            }>
            <Nav.Link href="https://drive.google.com/file/d/1crHmK_ONvLLEJnq5oHXtaTZ_m3Wxd1ZZ/view?usp=sharing" target="_blank">
                <i className="fas fa-file fa-lg"></i>
            </Nav.Link>
          </OverlayTrigger>

          </Nav>
        </Navbar.Collapse>
      </Navbar>

    )
  }
}

export default NavBar

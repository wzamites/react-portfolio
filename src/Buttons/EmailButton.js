import React from 'react'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

class EmailButton extends React.Component {
  render() {
    return (
        <Button
          variant="outline-secondary"
          href="mailto:wzamites@gmail.com"
          target="_blank">
            <i className="fas fa-envelope fa-lg"></i>
        </Button>
    )
  }
}

export default EmailButton

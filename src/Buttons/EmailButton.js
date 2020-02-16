import React from 'react'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

class EmailButton extends React.Component {
  render() {
    return (
      <OverlayTrigger
        key='bottom'
        placement='bottom'
        delay={{ show: 750 }}
        overlay={
          <Tooltip id="tooltip-bottom">
            wzamites@gmail.com
          </Tooltip>
        }>
        <Button
          variant="outline-secondary"
          href="tel:16109960580"
          target="_blank">
            <i className="fas fa-envelope fa-lg"></i>
        </Button>
      </OverlayTrigger>

    )
  }
}

export default EmailButton

import React from 'react'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

class PhoneButton extends React.Component {
  render() {
    return (
      <OverlayTrigger
      key='bottom'
      placement='bottom'
      delay={{ show: 750 }}
      overlay={
        <Tooltip id="tooltip-bottom">
          (610) 996-0580
        </Tooltip>
      }>
        <Button
          variant="outline-secondary"
          href="tel:16109960580"
          target="_blank">
            <i className="fas fa-phone fa-lg"></i>
        </Button>
      </OverlayTrigger>
    )
  }
}

export default PhoneButton

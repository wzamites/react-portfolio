import React from 'react'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

class ResumeButton extends React.Component {
  render() {
    return (
      <OverlayTrigger
      key='bottom'
      placement='bottom'
      delay={{ show: 750 }}
      overlay={
        <Tooltip id="tooltip-bottom">
          Resume
        </Tooltip>
        }>
        <Button
          variant="outline-secondary"
          href="https://drive.google.com/file/d/1crHmK_ONvLLEJnq5oHXtaTZ_m3Wxd1ZZ/view?usp=sharing"
          target="_blank">
            <i className="fas fa-file fa-lg"></i>
        </Button>
      </OverlayTrigger>
    )
  }
}

export default ResumeButton

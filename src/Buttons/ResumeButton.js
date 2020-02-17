import React from 'react'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

class ResumeButton extends React.Component {
  render() {
    return (
        <Button
          variant="outline-secondary"
          href="https://drive.google.com/file/d/19kA09JMiLqfNtefxA35EYcpQIjzGfkTE/view?usp=sharing"
          target="_blank">
            <i className="fas fa-file-alt fa-lg"></i>
        </Button>
    )
  }
}

export default ResumeButton

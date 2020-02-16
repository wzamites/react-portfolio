import React from 'react'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Popover from 'react-bootstrap/Popover'


class PhoneButton extends React.Component {
  render() {
    return (
      <OverlayTrigger
      key='bottom'
      trigger="click"
      placement='bottom'
      rootClose="true"
      overlay={

        <Popover id="popover-basic" rootClose="true">
        <Popover.Content>
        <Button
          variant="outline-secondary"
          href="tel:16109960580"
          target="_blank">
            (610) 996-0580
        </Button>
        </Popover.Content>
        </Popover>
      }>
        <Button
          variant="outline-secondary"
          target="_blank">
            <i className="fas fa-phone fa-lg"></i>
        </Button>
      </OverlayTrigger>
    )
  }
}

export default PhoneButton

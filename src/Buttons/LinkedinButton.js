import React from 'react'
import Button from 'react-bootstrap/Button'

class LinkedinButton extends React.Component {
  render() {
    return (
      <Button
      variant="outline-secondary"
      href={"https://www.linkedin.com/in/" + this.props.username}
      target="_blank">
        <i className="fab fa-linkedin-in fa-lg"></i>
      </Button>
    )
  }
}

export default LinkedinButton

import React from 'react'
import Button from 'react-bootstrap/Button'

class LinkedinButton extends React.Component {
  render() {
    return (
      <Button
      variant="outline-secondary"
      href="https://www.github.com/wzamites"
      target="_blank">
        <i className="fab fa-github fa-lg"></i>
      </Button>
    )
  }
}

export default LinkedinButton

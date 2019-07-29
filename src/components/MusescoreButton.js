import React from 'react'
import Button from 'react-bootstrap/Button'
import MusescoreMuMark from '../Icons/MusescoreMuMark.js'

class MusescoreButton extends React.Component {
  render() {
    return (
      <Button
      style={
        {padding: '1px 9px',}
      }
      variant="outline-secondary"
      href="https://www.linkedin.com/in/wzamites"
      target="_blank">
        <MusescoreMuMark width="28px" height="34px" />
      </Button>
    )
  }
}

export default MusescoreButton

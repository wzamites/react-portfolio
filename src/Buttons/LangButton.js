import React from 'react'
import Button from 'react-bootstrap/Button'

class LangButton extends React.Component {
  render() {
    return (
      <Button className="languagePill badge-pill badge" variant="outline-primary">{this.props.lang}</Button>

    )
  }
}

export default LangButton

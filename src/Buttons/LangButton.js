import React from 'react'
import Badge from 'react-bootstrap/Badge'

class LangButton extends React.Component {
  render() {
    return (
      <Badge className="languagePill" pill variant="primary">{this.props.lang}</Badge>
    )
  }
}

export default LangButton

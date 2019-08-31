import React from 'react'
import Button from 'react-bootstrap/Button'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class LangButton extends React.Component {
  render() {
    //logic to return primary if clicked and outline-primary if not
    //if the selected skill (props.lang in this case) is true then display primary
    let buttonDisplay
    if (this.props.selectedskills[this.props.lang]) {
      buttonDisplay = "primary"
    } else {
      buttonDisplay = "outline-primary"
    }

    return (
      <Button className="languagePill badge-pill badge" variant={buttonDisplay}>{this.props.lang}</Button>

    )
  }
}

function mapStateToProps(state) {
  return {
    repositories: state.repositories,
    selectedskills: state.selectedskills
  }
}

export default connect(mapStateToProps)(LangButton)

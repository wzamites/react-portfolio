import React from 'react'
import Button from 'react-bootstrap/Button'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectSkill } from '../redux/actions/skill-selected'

class SkillButton extends React.Component {

  render() {
    //logic to return primary if clicked and outline-primary if not
    let buttonDisplay
    if (this.props.selectedskills[this.props.skill]) {
      buttonDisplay = "primary"
    } else {
      buttonDisplay = "outline-primary"
    }

    //return one button with the skill as a prop and display as state
    return (
      <div>
        <Button
        onClick={() => this.props.selectSkill(this.props.skill)}
        // onClick={this.handleClick} //Result of the handleClick function
        variant={buttonDisplay} //This is just a variable in render()
        >
          {this.props.skill}
        </Button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    repositories: state.repositories,
    selectedskills: state.selectedskills
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectSkill:selectSkill}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillButton)

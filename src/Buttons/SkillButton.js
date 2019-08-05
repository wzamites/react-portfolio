import React from 'react'
import Button from 'react-bootstrap/Button'

class SkillButton extends React.Component {

  //set whether the button is clicked
  constructor() {
    super()

    //initialize state
    this.state = {
      isClicked: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  //set the isClicked equal to true when clicked
  handleClick() {
    this.setState({isClicked: !this.state.isClicked})
  }

  render() {

    //logic to return primary if clicked and outline-primary if not
    let buttonDisplay
    if (this.state.isClicked === true) {
      buttonDisplay = "primary"
    } else {
      buttonDisplay = "outline-primary"
    }

    //return one button with the skill as a prop and display as state
    return (
      <div>
        <Button
        onClick={this.handleClick} //Result of the handleClick function
        variant={buttonDisplay} //This is just a variable in render()
        >
          {this.props.skill}
        </Button>
      </div>
    )
  }
}

export default SkillButton

import React from 'react'
import Button from 'react-bootstrap/Button'

class StarButton extends React.Component {
  constructor() {
    super()
    this.state = {
      isClicked: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

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
        <Button className="languagePill" variant={buttonDisplay} onClick={this.handleClick}><i className="fas fa-star"></i></Button>
      </div>
    )
  }
}

export default StarButton

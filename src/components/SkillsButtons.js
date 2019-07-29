import React from 'react'
import Button from 'react-bootstrap/Button'


class SkillsButtons extends React.Component {
  constructor() {
    super()
    this.state = {
      clicked: "primary",
      unclicked: "outline-primary"
    }
  }

  handleClick() {
    this.setState({ unclicked: "primary"})
  }

  render() {
    return (
      <div className="buttonsCenter">
        <Button onClick={this.handleClick} variant={this.state.unclicked}><i class="fas fa-star"></i></Button>&nbsp;
        <Button variant={this.state.unclicked}>React</Button>&nbsp;
        <Button variant={this.state.unclicked}>JavaScript</Button>&nbsp;
        <Button variant={this.state.unclicked}>HTML</Button>&nbsp;
        <Button variant={this.state.unclicked}>CSS</Button>&nbsp;
        <Button variant={this.state.unclicked}>Bootstrap</Button>&nbsp;
        <Button variant={this.state.unclicked}>MATLAB</Button>&nbsp;
        <Button variant={this.state.unclicked}>Open Source</Button>&nbsp;
        <Button variant="success" className="hide">Reset</Button>&nbsp;
      </div>
    )
  }
}

export default SkillsButtons

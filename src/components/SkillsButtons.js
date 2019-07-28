import React from 'react'
import Button from 'react-bootstrap/Button'


class SkillsButtons extends React.Component {
  render() {
    return (
      <div className="buttonsCenter">
        <Button variant="outline-primary">React</Button>&nbsp;
        <Button variant="outline-primary">JavaScript</Button>&nbsp;
        <Button variant="outline-primary">HTML</Button>&nbsp;
        <Button variant="outline-primary">CSS</Button>&nbsp;
        <Button variant="outline-primary">Bootstrap</Button>&nbsp;
        <Button variant="outline-primary">MATLAB</Button>&nbsp;
        <Button variant="outline-primary">Open Source</Button>&nbsp;
        <Button variant="success">Reset</Button>&nbsp;
      </div>
    )
  }
}

export default SkillsButtons

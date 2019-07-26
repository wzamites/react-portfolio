import React from 'react'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

class SkillsButtons extends React.Component {
  render() {
    return (
      <ButtonToolbar>
        <Button variant="outline-primary">React</Button>
        <Button variant="outline-primary">JavaScript</Button>
        <Button variant="outline-primary">HTML</Button>
        <Button variant="outline-primary">CSS</Button>
        <Button variant="outline-primary">Bootstrap</Button>
        <Button variant="outline-primary">MATLAB</Button>
        <Button variant="outline-primary">Open Source</Button>
        <Button variant="success">Reset</Button>
      </ButtonToolbar>
    )
  }
}

export default SkillsButtons

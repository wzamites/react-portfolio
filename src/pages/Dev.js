import React from 'react'

import CardSection from '../components/CardSection'
import SkillsButtons from '../components/SkillsButtons'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Dev extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col><h1>This is my development stuff</h1></Col>
        </Row>
        <SkillsButtons />
        <CardSection />
      </div>
    )
  }
}

export default Dev;

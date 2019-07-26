import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

class ProjectCard extends React.Component {
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{this.props.name}</Card.Title>
          <Card.Text>
            {this.props.desc}
          </Card.Text>
          <Button href={this.props.homepage} target="_blank" variant="primary" >
            <FontAwesomeIcon icon={faGlobe} />
          </Button>
          <Button href={this.props.url} target="_blank" variant="secondary" >
            <FontAwesomeIcon icon={faCode} />
          </Button>
        </Card.Body>
      </Card>
    )
  }
}

export default ProjectCard

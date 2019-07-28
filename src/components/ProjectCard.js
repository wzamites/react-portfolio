import React from 'react'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

class ProjectCard extends React.Component {
  render() {
    return (
      <div className="cardContainer">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <a href="#" variant="primary" >
            <i className="fab fa-osi alignRight bold"></i>
          </a>
          <Card.Title>{this.props.name}</Card.Title>
          <Card.Text>
            {this.props.desc}
          </Card.Text>

          <Badge pill variant="primary">{this.props.lang}</Badge>

          <div className="alignRight">
            <a href={this.props.homepage} target="_blank" variant="primary" >
              <FontAwesomeIcon icon={faGlobe} />
            </a>
            &nbsp;
            <a href={this.props.url} target="_blank" >
              <FontAwesomeIcon icon={faCode} />
            </a>
          </div>
        </Card.Body>
      </Card>
      </div>
    )
  }
}

export default ProjectCard

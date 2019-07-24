import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function ProjectCard(props) {
  return (

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.desc}
        </Card.Text>
        <Button href={props.homepage} variant="primary" block>Web</Button>
        <Button href={props.url} variant="secondary" block>Code</Button>
      </Card.Body>
    </Card>

  )
}

export default ProjectCard

import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


class Home extends React.Component {
  render () {
    return (
      <div className="containerLayout">
      <Card className="text-center">
        <Card.Header>Hire me as a developer</Card.Header>
        <Card.Body>
          <Card.Text>If you're here to see my development work, check out my dev page.</Card.Text>
          <Button href="./dev" variant="primary" block>Dev Projects</Button>
        </Card.Body>
      </Card>

      <br/>

      <Card className="text-center">
        <Card.Header>I teach your band</Card.Header>
        <Card.Body>
          <Card.Text>If I teach your band, or if you might want me to, check out my work.</Card.Text>
          <Button href="./music" variant="primary" block>SoundSlice Scores</Button>
        </Card.Body>
      </Card>
      </div>
    )
  }
}

export default Home;

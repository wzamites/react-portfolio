import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'


class DevHeader extends React.Component {
  render() {
    return (
      <div className="center">
      <Jumbotron>
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary"><i class="fab fa-linkedin-in"></i></Button>
          &nbsp;
          <Button variant="primary"><i class="fab fa-github"></i></Button>
        </p>
      </Jumbotron>
      </div>
    )
  }
}

export default DevHeader

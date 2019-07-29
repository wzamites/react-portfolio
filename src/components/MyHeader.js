import React from 'react'

import Jumbotron from 'react-bootstrap/Jumbotron'

import LinkedinButton from './LinkedinButton'
import GithubButton from './GithubButton'
import MusescoreButton from './MusescoreButton.js'

class MyHeader extends React.Component {
  render() {
    return (
      <Jumbotron className="center">
        <h1>William Zamites</h1>
        <p>
          I love making things. Check out what I've worked on.
          <br></br>
          Boston, Massachusetts
        </p>
          <LinkedinButton />
          &nbsp;
          <GithubButton />
      </Jumbotron>
    )
  }
}

export default MyHeader

// Front-End, UX Design, Open-Source Contributer

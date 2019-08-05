import React from 'react'

import Jumbotron from 'react-bootstrap/Jumbotron'

import LinkedinButton from '../Buttons/LinkedinButton'
import GithubButton from '../Buttons/GithubButton'

import socials from '../assets/socials'

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
          <LinkedinButton username={socials.linkedin} />
          &nbsp;
          <GithubButton username={socials.github} />

      </Jumbotron>
    )
  }
}

export default MyHeader

// Front-End, UX Design, Open-Source Contributer

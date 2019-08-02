import React from 'react'

//Bootstrap Imports
import Card from 'react-bootstrap/Card'

//Icon Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

//Calls to to custom components
import LangButton from '../Buttons/LangButton'

class ProjectCard extends React.Component {
  constructor() {
      super()
      this.state = {
        languages: [],
      }
  }

  //call the languages used
  componentDidMount() {
    fetch(this.props.languages_url)  //Get the languages URL through props and pass it into fetch.
    .then(response => response.json())
    .then(data => {
      this.setState({
        languages: Object.getOwnPropertyNames(data) //store as array in state
      })
    })
  }

  render() {

    //Only render the Open Source logo if it's a pulled project
    let openSourceLogo
    if (this.props.opensource === true) {
      openSourceLogo =
        (<p variant="primary" className= "alignRight" >
          <i className="fab fa-osi bold"></i>
        </p>)
    } else {
      openSourceLogo = null
    }

    //Only render the Globe logo if the project has a homepage
    let globeLogo
    if (this.props.homepage === null) {
      globeLogo = null
    } else {
      globeLogo = (
        <a href={this.props.homepage} target="_blank" rel="noopener noreferrer" variant="primary" >
          <FontAwesomeIcon icon={faGlobe} />
        </a>
      )
    }

    //return as many LangButtons as there are languages
    const langButtons = this.state.languages.map(
      function(count) {
        return (
          <LangButton lang = {count} />
        )
      }
    )

    return (
      <div className="cardContainer">
        <Card id="projectCards" style={{ width: '18rem' }}>
          <Card.Img variant="top" src="" />

          <Card.Body>

            {openSourceLogo}

            <Card.Title>{this.props.name}</Card.Title>

            <Card.Text>
              {this.props.desc}
            </Card.Text>

            {langButtons}

            <div className="alignRight">
              {globeLogo}
              &nbsp;
              <a
              href={this.props.url}
              target="_blank"
              rel="noopener noreferrer">

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

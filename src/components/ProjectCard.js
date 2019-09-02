import React from 'react'
import cardlogo from '../assets/wzamites_img.jpeg'
import Card from 'react-bootstrap/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import LangButton from '../Buttons/LangButton'
import { connect } from 'react-redux'
import extraData from '../assets/extraData'

class ProjectCard extends React.Component {
  constructor() {
      super()
      this.state = {
        languages: [],
      }
  }

  //API call the languages used
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
    //This this controls whether the card will be displayed based on filters
    let filterDisplay
    //if No filter is selected, false + false... === 0 and display all of them
    if (Object.values(this.props.selectedskills).reduce((a, b) => a + b, 0) === 0) {
      filterDisplay = ""
    } else {
      filterDisplay = ""
    }

    //Only show the Open Source logo if it's a pulled project
    let openSourceLogo
    if (this.props.opensource === true) {
      openSourceLogo =
        (<p variant="primary" className= "alignRight" >
          <i className="fab fa-osi bold linkColor"></i>
        </p>)
    } else {
      openSourceLogo = null
    }

    //Only show the Globe logo if the project has a homepage
    let globeLogo
    if (this.props.homepage === null || this.props.homepage === "") {
      globeLogo = null
    } else {
      globeLogo = (
        <a href={this.props.homepage} target="_blank" rel="noopener noreferrer" variant="primary" >
          <FontAwesomeIcon icon={faGlobe} />
        </a>
      )
    }

    //return the language buttons based on the array of languages
    const langButtons = this.state.languages.map(
      function(count) {
        return (
          <LangButton key={count} lang={count} />
        )
      }
    )

    //get the image URL of the project (this is manual in gitHub). No API yet
    let cardImage = extraData.find(obj => obj.name === this.props.name).img

    //return the buttons for topics, or extra technologies as defined in extraData
    let topicButtons = extraData.find(obj => obj.name === this.props.name).languages.map(
      function (count) {
        return (
          <LangButton key={count} lang={count} />
        )
      }
    )

    return (
      <div className={"cardContainer " + filterDisplay}>
        <Card id="projectCards" style={{ width: '18rem' }}>

          <a href={this.props.url}  target="_blank" rel="noopener noreferrer">
            <Card.Img variant="top" src={cardImage} />
          </a>

          <Card.Body>

            {openSourceLogo}

            <Card.Title>
              {this.props.name}
            </Card.Title>

            <Card.Text>
              {this.props.desc}
            </Card.Text>

            <span>
              {topicButtons}
              {langButtons}
            </span>

            <div className="alignRight">

              {globeLogo}

              &nbsp;

              <a href={this.props.url}  target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faCode} />
              </a>

            </div>

          </Card.Body>

        </Card>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    repositories: state.repositories,
    selectedskills: state.selectedskills
  }
}

export default connect(mapStateToProps)(ProjectCard)

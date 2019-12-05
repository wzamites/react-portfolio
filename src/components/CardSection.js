import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loadGithub } from '../redux/actions/load-github'
import extraData from '../assets/extraData'

class CardSection extends React.Component {
  render() {
    //Create this constant which is dupicating ProjectCard over an array
    const githubCards = this.props.repositories.map(
      function(hub) {
        //if the repo exists in extraData, go ahead
        //otherwise return null
        if (extraData.some(e => e.name === hub.name)) {
          return (
            <ProjectCard
            key={hub.id}
            desc={hub.description}
            name={hub.name}
            url={hub.html_url}
            homepage={hub.homepage}
            opensource={hub.fork}
            topics={hub.topics}
            languages_url={hub.languages_url}
            />
          )
        } else {
          return null
        }
      }
    )

    //Returning the ProjectCards from the previous function
    return (
      <div className="containerLayout">
        {githubCards}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    repositories: state.repositories,
    skillarray: state.skillarray
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({loadGithub:loadGithub}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CardSection)

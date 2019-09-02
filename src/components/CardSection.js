import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loadGithub } from '../redux/actions/load-github'

class CardSection extends React.Component {
  render() {
    //Create this constant which is dupicating ProjectCard over an array
    const githubCards = this.props.repositories.map(
      function(hub) {
        return (
          <ProjectCard
          key={hub.id}
          desc={hub.description}
          name={hub.name}
          url={hub.html_url}
          homepage={hub.homepage}
          opensource={hub.fork}
          topics={hub.topics}
          languages_url={hub.languages_url} />
        )
      }
    )

    //Returning the ProjectCards from the previous function
    return (
      <div>
        <div className="containerLayout">
          {githubCards}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    repositories: state.repositories,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({loadGithub:loadGithub}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CardSection)

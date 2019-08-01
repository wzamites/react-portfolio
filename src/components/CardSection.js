import React from 'react'

import ProjectCard from '../components/ProjectCard'

class CardSection extends React.Component {

  constructor() {
      super()
      this.state = {
        repos: [],
      }
  }

  componentDidMount() {
    fetch("https://api.github.com/users/wzamites/repos")
    .then(response => response.json())
    .then(data => {
      this.setState({
        repos: data
      })
    })
  }

  render() {

    const githubCards = this.state.repos.map(
      function(hub) {
        return (
          <ProjectCard
          key={hub.id}
          desc={hub.description}
          lang={hub.language}
          name={hub.name}
          url={hub.html_url}
          homepage={hub.homepage}
          opensource={hub.fork} />
        )
      }
    )


    return (
      <div>
        <div className="containerLayout">
          {githubCards}
        </div>
      </div>
    )
  }
}

export default CardSection
